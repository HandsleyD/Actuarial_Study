// "Add to calendar": an iCalendar (.ics, RFC 5545) file of IFoA exam dates —
// the papers, exam entry deadlines and results days for a set of subjects.
//
// Pure functions only: no DOM, no storage. Kept separate so the format can be
// unit-tested in Node (scripts/test-ics.mjs). app.js turns the text into a
// Blob and downloads it.
//
// Every event has a stable UID, so importing a newer file updates the events
// already in the calendar rather than adding copies:
//   <sitting>-<subject>-paper-<paper>   one per paper ("2027-04-CP1-paper-cp1-paper-2")
//   <sitting>-entry-opens / -closes     shared by every subject in the sitting
//   <sitting>-results-core / -advanced  shared by every subject released that day
// Entry deadlines and results days are per sitting, not per subject, so two
// subjects in one sitting don't put the same deadline (and its reminder) in
// the calendar twice; their descriptions list the subjects instead.

const Ics = (function () {
  const PRODID = "-//Fellow//IFoA exam dates//EN";
  const UID_DOMAIN = "handsleyd.github.io";
  const TZID = "Europe/London";

  // Europe/London since 1996 (EU rules: last Sunday of March and October).
  const VTIMEZONE_LONDON = [
    "BEGIN:VTIMEZONE",
    `TZID:${TZID}`,
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0000",
    "TZOFFSETTO:+0100",
    "TZNAME:BST",
    "DTSTART:19810329T010000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0000",
    "TZNAME:GMT",
    "DTSTART:19961027T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
  ];

  // TEXT values (RFC 5545 3.3.11): backslash, semicolon and comma are
  // escaped, and line breaks become a literal \n.
  function escapeText(s) {
    return String(s)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\r\n|\r|\n/g, "\\n");
  }

  function utf8Length(ch) {
    const cp = ch.codePointAt(0);
    return cp < 0x80 ? 1 : cp < 0x800 ? 2 : cp < 0x10000 ? 3 : 4;
  }

  // Lines are at most 75 octets (RFC 5545 3.1), not counting the CRLF; longer
  // ones continue on lines that start with a space. Splits fall between
  // characters, never inside a multi-byte UTF-8 sequence.
  function fold(line) {
    const out = [];
    let cur = "";
    let octets = 0;
    for (const ch of line) {
      const n = utf8Length(ch);
      if (octets + n > 75) {
        out.push(cur);
        cur = " ";
        octets = 1;
      }
      cur += ch;
      octets += n;
    }
    out.push(cur);
    return out.join("\r\n");
  }

  const compactDate = (iso) => iso.replace(/-/g, "");

  function addDays(iso, n) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
  }

  // "2027-04-12T09:00" -> "20270412T090000"
  function localDateTime(s) {
    const [date, time] = s.split("T");
    const [hh, mm, ss] = `${time}:00`.split(":");
    return `${compactDate(date)}T${hh.padStart(2, "0")}${mm.padStart(2, "0")}${(ss || "00").padStart(2, "0")}`;
  }

  function utcStamp(date) {
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }

  // event: { uid, summary, description?, url?,
  //          date: "YYYY-MM-DD"                     (all day), or
  //          start: "YYYY-MM-DDTHH:MM", end?: same  (UK local time),
  //          alarm?: { before: "P7D", description? }, busy?: bool }
  function eventLines(ev, stamp, sequence) {
    const lines = ["BEGIN:VEVENT", `UID:${ev.uid}`, `DTSTAMP:${stamp}`, `SEQUENCE:${sequence}`];
    if (ev.date) {
      lines.push(`DTSTART;VALUE=DATE:${compactDate(ev.date)}`, `DTEND;VALUE=DATE:${compactDate(addDays(ev.date, 1))}`);
    } else {
      lines.push(`DTSTART;TZID=${TZID}:${localDateTime(ev.start)}`);
      if (ev.end) lines.push(`DTEND;TZID=${TZID}:${localDateTime(ev.end)}`);
    }
    lines.push(`SUMMARY:${escapeText(ev.summary)}`);
    if (ev.description) lines.push(`DESCRIPTION:${escapeText(ev.description)}`);
    if (ev.url) lines.push(`URL:${ev.url}`);
    lines.push(`TRANSP:${ev.busy ? "OPAQUE" : "TRANSPARENT"}`);
    if (ev.alarm) {
      lines.push(
        "BEGIN:VALARM",
        "ACTION:DISPLAY",
        `TRIGGER:-${ev.alarm.before}`,
        `DESCRIPTION:${escapeText(ev.alarm.description || ev.summary)}`,
        "END:VALARM"
      );
    }
    lines.push("END:VEVENT");
    return lines;
  }

  // The whole file. now (a Date) is the DTSTAMP; SEQUENCE is minutes since
  // 1970 at that moment, so a file downloaded later always counts as a newer
  // revision of the same events for clients that check it (Outlook).
  function build(events, opts) {
    const now = (opts && opts.now) || new Date();
    const stamp = utcStamp(now);
    const sequence = Math.floor(now.getTime() / 60000);
    const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", `PRODID:${PRODID}`, "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
    if (opts && opts.name) lines.push(`X-WR-CALNAME:${escapeText(opts.name)}`);
    if (events.some((e) => !e.date)) lines.push(...VTIMEZONE_LONDON);
    events.forEach((ev) => lines.push(...eventLines(ev, stamp, sequence)));
    lines.push("END:VCALENDAR");
    return lines.map(fold).join("\r\n") + "\r\n";
  }

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const resultsGroup = (code) => (/^C[SMB]/.test(code) ? "core" : "advanced");
  const listCodes = (codes) => codes.join(", ");

  // Calendar events for subjects planned into sittings, from exam-dates.js.
  // opts: { calendar: Route.calendar(EXAM_DATES), sittings: { "2027-04": ["CS1"] },
  //         today: "YYYY-MM-DD", names?: { CS1: "Actuarial Statistics" }, source?: url }
  // Events before today are left out. Sittings the IFoA hasn't published
  // yet have no dates to add; they come back in `unpublished`.
  // A session with paperStart ("09:00") and optionally paperMinutes gets timed
  // papers; without them papers are all-day events.
  function examEvents(opts) {
    const cal = opts.calendar;
    const names = opts.names || {};
    const today = opts.today || "";
    const events = [];
    const unpublished = [];

    Object.keys(opts.sittings || {})
      .sort()
      .forEach((id) => {
        const codes = (opts.sittings[id] || []).filter((c) => c !== "CB3");
        if (!codes.length) return;
        const inf = cal.info(id);
        const s = inf.session;
        if (!s) {
          unpublished.push(id);
          return;
        }
        const sitting = cal.name(id);
        const seeSource = opts.source ? `\nThe IFoA can change dates: confirm them at ${opts.source}` : "";

        codes.forEach((code) => {
          const subject = names[code] ? `${code} ${names[code]}` : code;
          cal.papers(s, code).forEach(({ date, paper }) => {
            const ev = {
              uid: `${id}-${code}-paper-${slug(paper)}@${UID_DOMAIN}`,
              summary: `IFoA exam: ${paper}`,
              description: `${subject}, ${sitting} sitting.${s.paperStart ? "" : " Papers start at 09:00 UK time."}${seeSource}`,
              busy: true,
            };
            if (s.paperStart) {
              ev.start = `${date}T${s.paperStart}`;
              if (s.paperMinutes) {
                const [h, m] = s.paperStart.split(":").map(Number);
                const end = h * 60 + m + s.paperMinutes;
                ev.end = `${date}T${String(Math.floor(end / 60)).padStart(2, "0")}:${String(end % 60).padStart(2, "0")}`;
              }
            } else {
              ev.date = date;
            }
            events.push(ev);
          });
        });

        s.deadlines
          .filter((d) => /exam entry (opens|closes)/i.test(d.label))
          .forEach((d) => {
            const kind = /opens/i.test(d.label) ? "opens" : "closes";
            events.push({
              uid: `${id}-entry-${kind}@${UID_DOMAIN}`,
              date: d.date,
              summary: `IFoA exam entry ${kind}: ${sitting} (${listCodes(codes)})`,
              description: `${d.label}. Book ${listCodes(codes)} for the ${sitting} sitting.${seeSource}`,
              alarm: { before: "P7D", description: `IFoA exam entry ${kind} in a week: ${sitting}` },
            });
          });

        ["core", "advanced"].forEach((group) => {
          const these = codes.filter((c) => resultsGroup(c) === group);
          const date = s.results && s.results[group];
          if (!these.length || !date) return;
          events.push({
            uid: `${id}-results-${group}@${UID_DOMAIN}`,
            date,
            summary: `IFoA results: ${listCodes(these)} (${sitting})`,
            description: `Results day for ${listCodes(these)}, ${sitting} sitting.${seeSource}`,
          });
        });
      });

    return {
      events: events.filter((e) => (e.date || e.start.slice(0, 10)) >= today).sort((a, b) => (a.date || a.start).localeCompare(b.date || b.start)),
      unpublished,
    };
  }

  return { build, examEvents, escapeText, fold };
})();

if (typeof module !== "undefined" && module.exports) module.exports = Ics;

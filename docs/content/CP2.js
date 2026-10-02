// CP2 Modelling Practice: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CP2", {
  modules: [
    {
        "id": "m01",
        "title": "What is Subject CP2 all about?",
        "description": "An orientation chapter explaining CP2's role as the practical, hands-on modelling companion to CP1, its two-part exam format, and the skills it develops.",
        "cards": [
            {
                "q": "What is the primary aim of Subject CP2?",
                "a": "To develop the practical skills needed to design, build, use and communicate actuarial models, primarily using spreadsheets.",
                "explain": "Where CP1 (Actuarial Practice) asks <em>what</em> actuarial techniques to apply and <em>why</em>, CP2 (Modelling Practice) asks <em>how</em> to actually build a working model that implements them — worth reading CP2 as CP1 Module 18's general modelling principles turned into hands-on, examined spreadsheet practice."
            },
            {
                "q": "What are the two parts of the CP2 exam, and what does each assess?",
                "a": "CP2.1 assesses building and using a spreadsheet model to solve a given problem; CP2.2 assesses writing a report communicating the results of a (typically similar) model to a non-technical audience.",
                "explain": "This split mirrors two distinct skills that don't always come together naturally — a candidate can build a technically excellent model (CP2.1) yet fail to explain its results clearly to a client (CP2.2), or vice versa, which is exactly why the exam tests them separately."
            },
            {
                "q": "Why is CP2 assessed using real spreadsheet software rather than a traditional written exam?",
                "a": "Because the skill being tested — building a working, correct, well-structured model under time pressure — can only be assessed by actually building one, not by describing how you would.",
                "explain": "This is worth contrasting with CP1's essay-based assessment of judgement and application — CP2 instead directly tests the <em>production</em> of a working artefact, much closer to how real actuarial modelling work is actually done and evaluated in practice."
            },
            {
                "q": "How does CP2 relate to the modelling principles introduced in CP1?",
                "a": "CP1 introduces the general principles of actuarial modelling (purpose, validation, complexity, documentation) at a conceptual level; CP2 puts those same principles into direct, hands-on practice.",
                "explain": "Every one of CP1 Module 18's cards — model purpose, deterministic versus stochastic, model risk, validation, sensitivity testing, documentation — has a direct, concrete counterpart somewhere in this module set, just applied to an actual spreadsheet rather than discussed in the abstract."
            },
            {
                "q": "Why is spreadsheet modelling still central to actuarial work, despite the existence of more specialised statistical/programming software?",
                "a": "Spreadsheets are flexible, transparent (formulas are visible and traceable), widely understood by non-technical stakeholders, and require no specialist software licence to open and review.",
                "explain": "This transparency point matters enormously for the communication and audit themes developed later in this module set — a spreadsheet's formulas can be inspected cell-by-cell by a reviewer or client, unlike a black-box statistical model, which is precisely why spreadsheets remain the default medium for actuarial models that need to be checked and explained by others."
            },
            {
                "q": "What broad skill areas does CP2 span?",
                "a": "Model design, building formulas/functions, sensitivity analysis, checking/auditing, automation (VBA), data handling, and communicating results.",
                "explain": "This is effectively the table of contents for the rest of this module set — worth treating it as a map: design principles (Module 2), formulas (Module 3), documentation (Module 4), sensitivity (Module 5), risk and control (Module 6), auditing (Module 7), automation (Module 8), data (Module 9), and communication (Module 10)."
            },
            {
                "q": "Why might a CP2 exam question deliberately give an under-specified or ambiguous brief?",
                "a": "To test whether the candidate can exercise judgement in interpreting requirements and making (and documenting) reasonable modelling assumptions, not just execute a fully-specified set of instructions.",
                "explain": "This is exactly CP1's judgement-beyond-calculation theme applied to modelling specifically — a real client brief is rarely perfectly precise, and CP2 tests whether a candidate can make sensible, well-documented choices when faced with genuine ambiguity, rather than simply refusing to proceed."
            },
            {
                "q": "What does it mean for a CP2 model to be 'fit for purpose'?",
                "a": "The model does what the brief actually requires, to an appropriate level of accuracy and complexity, within the time and resource constraints available.",
                "explain": "This directly echoes CP1's proportionality principle (Module 2 there) — a model that is more sophisticated than the brief requires wastes time and increases error risk, while one that is too simplistic fails to answer the actual question being asked; 'fit for purpose' sits deliberately between these two failure modes."
            },
            {
                "q": "Why does CP2 place significant weight on how a model is structured, not just whether it produces the correct final numbers?",
                "a": "A correct answer produced by a poorly structured, undocumented model is unreliable, hard to check, and hard to adapt if requirements change — structure is what makes a model trustworthy and maintainable, not just momentarily correct.",
                "explain": "This is worth remembering as an important marking principle: a model that happens to get the right numbers through a tangled, undocumented mess of hard-coded values would still lose significant marks, since CP2 is really testing whether you can build something a colleague could pick up, understand, and rely on."
            },
            {
                "q": "What is meant by the CP2.2 report needing to be written for a 'non-technical audience'?",
                "a": "The report should explain the model's approach, assumptions and results in plain language a client or manager without actuarial training could understand and act on.",
                "explain": "This is CP1 Module 2's clear-communication principle at its most directly examined — technical jargon, unexplained formulas, or assumed statistical knowledge would all fail this requirement, however accurate the underlying analysis, echoing CP1's repeated point that advice which isn't understood has failed at its purpose."
            },
            {
                "q": "Why might time management be a particularly significant skill within the CP2 exam itself?",
                "a": "Building a correct, well-documented, checked model within a fixed time limit requires balancing thoroughness against the practical reality of limited time, mirroring real workplace pressures.",
                "explain": "This is a very literal, practical instance of CP1's proportionality principle under a hard time constraint — spending too long perfecting formatting at the expense of checking the model's core logic (or vice versa) both risk losing marks, so allocating time sensibly across the whole task is itself part of the skill being tested."
            },
            {
                "q": "How does CP2 complement CP3 (Communications Practice) within the CB/CM/CS/CP1-3 structure?",
                "a": "CP2 focuses on building and communicating the results of a spreadsheet-based technical model; CP3 focuses more broadly on written and verbal communication of actuarial analysis across a wider range of formats and audiences.",
                "explain": "Worth noting the genuine overlap as well as the distinction: CP2.2's report-writing component is itself a specific, applied instance of the general communication skills CP3 develops — the two subjects reinforce rather than duplicate each other."
            },
            {
                "q": "Why is 'auditability' considered a core design goal for any actuarial model, not an optional extra?",
                "a": "Actuarial models often inform decisions with real financial consequences, so an independent reviewer must be able to follow, check, and verify the model's logic and results before they can be relied upon.",
                "explain": "This directly echoes CP1 Module 2's peer review principle — a model that cannot be meaningfully audited by someone other than its author effectively cannot be properly reviewed at all, which is precisely why CP2's design and documentation modules exist as core, examined content rather than a stylistic afterthought."
            },
            {
                "q": "What kind of actuarial problems might a CP2 exam scenario typically present?",
                "a": "Practical problems such as projecting cashflows, calculating a premium or reserve, analysing the financial impact of a proposed change, or comparing outcomes under different assumptions/scenarios.",
                "explain": "These scenarios deliberately draw on the <em>same</em> kinds of actuarial problems introduced across CB1-3, CM1-2, CS1-2 and CP1 — CP2 doesn't teach new actuarial theory, it tests whether that theory can actually be turned into a working, correct spreadsheet implementation under exam conditions."
            },
            {
                "q": "Why is CP2 sometimes described as testing 'how an actuary actually works', more than any other Core Practice subject?",
                "a": "Because building, checking, adapting and explaining a spreadsheet model closely mirrors the day-to-day practical work of many actuaries, more directly than the essay-based scenario analysis of CP1 or the presentation-focused work of CP3.",
                "explain": "This closing card sets the tone for the whole module set — everything that follows (design principles, formulas, documentation, sensitivity, auditing, automation, data, communication) is aimed at replicating, as closely as an exam can, the genuine practical craft of actuarial spreadsheet modelling."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Principles of good spreadsheet model design",
        "description": "Covers the structural principles that make a spreadsheet model clear, reliable and maintainable — separating inputs, calculations and outputs, and avoiding common design pitfalls.",
        "cards": [
            {
                "q": "What are the three broad areas a well-designed spreadsheet model should typically separate?",
                "a": "Inputs (assumptions/data), calculations (the model's working logic), and outputs (results/summary), each kept structurally distinct.",
                "explain": "This separation is the single most important design principle in CP2 — worth treating every other card in this module as an elaboration of why keeping these three areas distinct makes a model easier to understand, check, and adapt than mixing them together."
            },
            {
                "q": "Why should input assumptions be entered once, in a clearly labelled input area, rather than typed directly into calculation formulas?",
                "a": "So that changing an assumption requires updating only one cell, rather than hunting through the model for every formula that used that value — reducing both effort and the risk of an inconsistent, partially-updated model.",
                "explain": "This is the spreadsheet-specific version of CP1's assumption-consistency principle (Module 20 there) — a model with assumptions scattered and hard-coded throughout its formulas is exactly the kind of structure where an update can silently miss some occurrences, leaving the model internally inconsistent."
            },
            {
                "q": "What is 'hard-coding', and why is it generally considered poor spreadsheet practice?",
                "a": "Typing a fixed numeric value directly into a formula (rather than referencing an input cell), making that value invisible, hard to find, and hard to change consistently.",
                "explain": "A hard-coded value is effectively an assumption hiding inside the calculation logic rather than living in the input area described in the previous card — this is one of the most commonly tested CP2 errors, since it directly undermines the transparency and single-point-of-change principle this module is built around."
            },
            {
                "q": "Why should a model's calculation logic generally flow in one consistent direction (e.g. left to right, or top to bottom)?",
                "a": "A consistent flow makes the model's logic easier to follow and trace, reducing the risk of a reviewer (or the model's own author, later) misunderstanding how a result was derived.",
                "explain": "This connects directly to the auditability goal from Module 1 — a model whose calculations jump around unpredictably is much harder for an independent reviewer to trace through and verify, even if every individual formula is technically correct."
            },
            {
                "q": "What is a 'circular reference' in a spreadsheet, and why is it generally best avoided?",
                "a": "A situation where a formula's calculation depends (directly or indirectly) on its own result, which can cause unstable, hard-to-predict, or non-converging results unless deliberately and carefully managed.",
                "explain": "Circular references occasionally arise legitimately in actuarial modelling (e.g. certain interlinked reserve/tax calculations) but should be a deliberate, well-documented design choice rather than an accidental structural flaw — an unintentional circular reference is one of the clearest signs of a poorly checked model."
            },
            {
                "q": "Why is consistent formatting (e.g. colour-coding inputs versus formulas) considered good spreadsheet design practice?",
                "a": "It lets a reader immediately distinguish, at a glance, which cells are assumptions that can be changed versus which are calculated results that shouldn't be manually overwritten.",
                "explain": "This is a simple but powerful convention (e.g. blue for inputs, black for formulas) worth adopting consistently — it directly supports the input/calculation/output separation from this module's opening card, making that structural distinction visually obvious rather than something a reviewer has to work out by clicking through cells."
            },
            {
                "q": "Why should a model avoid unnecessary complexity beyond what the brief actually requires?",
                "a": "Extra, unused complexity increases the risk of errors, takes longer to build and check, and makes the model harder for others to understand — proportionality applies to model design just as it does to any other actuarial judgement.",
                "explain": "This is precisely CP1's proportionality principle (Module 2) and CP1 Module 18's complexity-versus-practicality balance, restated for the specific context of spreadsheet design — a 'better' model is one that's fit for purpose, not necessarily the most sophisticated one that could technically be built."
            },
            {
                "q": "Why might breaking a large, complex calculation into several smaller, clearly labelled intermediate steps be preferable to one long, nested formula?",
                "a": "Intermediate steps are far easier to check, understand, and debug individually than a single complex formula whose logic is hidden inside deeply nested functions.",
                "explain": "This trades off some spreadsheet 'elegance' (fewer cells used) against genuine auditability — worth remembering CP2 rewards a model that a <em>reviewer</em> can follow, not necessarily the most compact formula a skilled spreadsheet user could theoretically construct."
            },
            {
                "q": "What is the risk of copying a formula across a row or down a column without checking every cell reference is correctly relative or absolute?",
                "a": "A reference that should have stayed fixed (absolute) but was allowed to shift (relative), or vice versa, can silently corrupt many calculated cells at once, often without any obvious visual sign of an error.",
                "explain": "This is one of the most common sources of a serious spreadsheet error — because the formula still <em>looks</em> structurally correct and often still returns a plausible-looking number, this kind of error is exactly why the checking and auditing techniques developed in Module 7 matter so much."
            },
            {
                "q": "Why should output/results cells be kept separate from, and typically not editable within, the main calculation area?",
                "a": "A dedicated output area makes it clear which cells represent the model's final answer, and prevents a reviewer or user from accidentally overwriting a calculation cell while looking at results.",
                "explain": "This completes the three-way input/calculation/output separation from this module's opening card — worth recognising these outputs as the cells that feed directly into the communication and reporting work developed in Module 10, so their clarity matters beyond just the model itself."
            },
            {
                "q": "Why might a well-designed model include a clearly labelled 'dashboard' or summary sheet, separate from the detailed working?",
                "a": "It lets a reviewer or user see the key results and headline assumptions at a glance, without needing to navigate through every detailed calculation sheet to find them.",
                "explain": "This directly serves the same audience-appropriate communication goal Module 10 develops in depth — a technical reviewer might want to see the detailed working, but many stakeholders only need the summary, and good design serves both audiences from the same underlying model."
            },
            {
                "q": "Why is it good practice to use named ranges or clearly labelled cells for key assumptions, rather than relying on cell references like 'B14' throughout formulas?",
                "a": "Named, labelled cells make formulas more readable and self-explanatory (e.g. seeing 'InterestRate' rather than 'B14'), reducing the chance of misinterpreting what a formula is actually referencing.",
                "explain": "This is a practical way of improving the transparency this whole module has been building toward — a formula built from meaningful names is far easier for a reviewer to check against the brief than one built from an opaque grid of cell references."
            },
            {
                "q": "Why should a model's structure be planned before building begins, rather than developed ad hoc as calculations are added?",
                "a": "Planning the overall structure (input area, calculation flow, output area, sheet layout) upfront reduces the risk of needing a disruptive, error-prone restructure partway through, once the model has already grown complex.",
                "explain": "This is important exam-technique advice worth taking literally — under CP2's time pressure, a few minutes spent sketching the intended structure before opening the spreadsheet can save far more time than it costs, by avoiding the need to rebuild a poorly-planned model midway through."
            },
            {
                "q": "How does good spreadsheet design specifically support the sensitivity analysis covered later in this module set?",
                "a": "If assumptions live in a single, clearly identified input area (rather than being hard-coded throughout formulas), changing one assumption to test its effect on results becomes simple and reliable, rather than requiring formulas to be individually edited.",
                "explain": "This directly previews Module 5 — sensitivity analysis is only <em>easy</em> and <em>reliable</em> to perform on a well-structured model; a model riddled with hard-coded values (this module's earlier warning) makes sensitivity testing slow, error-prone, or effectively impossible to do properly."
            },
            {
                "q": "Why is good spreadsheet design considered a skill in its own right, distinct from simply knowing the correct actuarial formulas to use?",
                "a": "Knowing the right calculation is necessary but not sufficient — a technically correct calculation embedded in a poorly structured, undocumented, hard-to-check model still fails to deliver a reliable, usable result.",
                "explain": "This closing card ties the whole module back to CP2's core premise from Module 1 — CP2 tests the CRAFT of building a model, not just the actuarial knowledge (from CB1-3, CM1-2, CS1-2, CP1) that the model implements, and this module's principles are exactly what distinguishes the two skills."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Formulas, functions and calculation techniques",
        "description": "Covers the spreadsheet formulas and functions commonly used in actuarial modelling, and techniques for writing clear, reliable calculation logic.",
        "cards": [
            {
                "q": "What is the difference between a relative and an absolute cell reference in a formula?",
                "a": "A relative reference (e.g. A1) shifts automatically when the formula is copied to another cell; an absolute reference (e.g. <code>$A$1</code>) stays fixed, always pointing to the same cell regardless of where the formula is copied.",
                "explain": "This is exactly the distinction whose misuse Module 2 flagged as a common source of serious, hard-to-spot errors — getting this right is foundational to reliably copying a formula across a row or column, which almost every actuarial spreadsheet model needs to do at some point."
            },
            {
                "q": "What does a lookup function (e.g. VLOOKUP, INDEX/MATCH) allow a model to do?",
                "a": "Retrieve a value from a table based on matching a specified key (e.g. an age, a policy year), rather than hard-coding which row/column to reference.",
                "explain": "This is the spreadsheet mechanism for implementing exactly the kind of table-based lookups common throughout actuarial work (e.g. reading a mortality rate from a life table, CM1's territory) — worth recognising a lookup formula as more robust than manually re-pointing a reference every time the underlying data changes shape."
            },
            {
                "q": "Why might INDEX/MATCH be preferred over VLOOKUP in some situations?",
                "a": "INDEX/MATCH can look up values to the left of the match column (which VLOOKUP cannot) and is generally more robust to inserted/deleted columns, since it doesn't rely on a fixed column-offset number.",
                "explain": "This is a useful practical distinction worth knowing for CP2's exam setting — VLOOKUP's fixed column-offset argument is exactly the kind of hard-coded structural dependency Module 2 warned against, since inserting a column elsewhere in the table can silently break it."
            },
            {
                "q": "What does the SUMPRODUCT function do, and why is it useful in actuarial cashflow modelling?",
                "a": "It multiplies corresponding elements of two or more arrays and sums the results, allowing (e.g.) a whole vector of cashflows to be discounted and summed in a single formula, rather than needing many individual multiplication cells.",
                "explain": "This is a direct spreadsheet implementation of CM1's present-value summation — multiplying a cashflow vector by a discount-factor vector and summing is exactly the calculation SUMPRODUCT is built for, making it one of the most useful functions for actuarial financial modelling specifically."
            },
            {
                "q": "What is an 'array formula', and why should it generally be used only when a simpler formula won't achieve the same result?",
                "a": "A formula that operates on a whole range of values at once rather than a single cell; while powerful, array formulas can be harder for a reviewer to understand and debug than an equivalent set of simpler, step-by-step formulas.",
                "explain": "This directly echoes Module 2's preference for breaking complex logic into clear intermediate steps — an array formula can be more compact, but compactness isn't the goal in CP2; a formula a reviewer can follow is generally worth more than a cleverer one that's opaque."
            },
            {
                "q": "Why are 'volatile' functions (e.g. NOW, RAND, OFFSET) generally used sparingly in a large actuarial model?",
                "a": "Volatile functions recalculate every time <em>any</em> cell in the workbook changes (not just their own dependencies), which can significantly slow down a large model's recalculation speed.",
                "explain": "This is a practical performance consideration worth being aware of — a model that recalculates slowly is harder to work with under CP2's time pressure, and this slowdown compounds as the model grows larger and more complex."
            },
            {
                "q": "What is the purpose of using IF (or nested IF/IFS) functions in an actuarial model?",
                "a": "To apply different calculation logic depending on a condition, e.g. applying a different charge structure above/below a threshold, or a different mortality assumption by policy type.",
                "explain": "Worth connecting to CP1's contract design material — a conditional product feature (e.g. a guarantee that only bites in adverse scenarios, CP1 Module 33) needs exactly this kind of conditional logic to be correctly represented in a spreadsheet model."
            },
            {
                "q": "Why might deeply nested IF statements be considered poor practice, even though they can technically implement complex conditional logic?",
                "a": "Deeply nested conditions become very difficult for a reviewer to read and verify correctly, increasing the risk of an undetected logical error; alternatives like IFS, lookup tables, or breaking the logic into separate helper cells are often clearer.",
                "explain": "This is another direct application of the intermediate-steps principle from Module 2 — a formula so nested that even its author struggles to re-derive its logic on review is a genuine red flag, regardless of whether it currently produces correct output."
            },
            {
                "q": "What is the purpose of using named cells/ranges in formulas, in terms of calculation technique specifically?",
                "a": "It makes formulas self-documenting (e.g. Premium*(1-LapseRate) is more understandable than B4*(1-C7)), reducing both the chance of misreferencing and the effort needed to check a formula's correctness.",
                "explain": "This restates Module 2's readability point specifically from the calculation-writing side — worth recognising this as a technique that pays off twice: once when the formula is first written (fewer reference errors), and again every time it's later reviewed or audited."
            },
            {
                "q": "How can a model check its own internal consistency using a 'control total' or 'balance check' cell?",
                "a": "By calculating the same total via two independent routes (e.g. summing individual cashflows versus an aggregate formula) and displaying a cell that flags whether the two match, providing an ongoing, visible consistency check.",
                "explain": "This is a practical, spreadsheet-native implementation of CM1's prospective/retrospective reserve equivalence and CP1's provision-calculation cross-check idea — building this kind of check directly into the model, rather than performing it only once manually, catches errors introduced by <em>later</em> edits too."
            },
            {
                "q": "Why might a formula deliberately include an error-handling function (e.g. IFERROR) around a lookup or division calculation?",
                "a": "To handle gracefully and visibly the case where an input is missing or a calculation would otherwise fail (e.g. dividing by zero), rather than letting an unexplained error value silently propagate through the rest of the model.",
                "explain": "Worth being careful with this technique: it should make problems <em>visible</em> and handled deliberately, not simply hide an error that should actually be investigated — an IFERROR that quietly substitutes a default value can mask a genuine data or logic problem if used carelessly."
            },
            {
                "q": "Why should a model builder test a formula on simple, known cases before applying it across the full model?",
                "a": "A formula that produces the correct result for a simple case where the answer can be verified by hand gives confidence it's structurally correct, before it's relied upon across many rows/columns of real data.",
                "explain": "This is a practical, formula-level instance of CP1's model validation principle (Module 18) — validating the underlying <em>logic</em> on a small, checkable example is far more efficient than only discovering a structural error after the formula has already been copied across an entire model."
            },
            {
                "q": "Why might using consistent units and time periods throughout a model's formulas be an important calculation discipline?",
                "a": "Mixing units (e.g. annual versus monthly rates, or £'000s versus £) within the same calculation without explicit conversion is a common and easily overlooked source of a materially wrong result.",
                "explain": "This is exactly the same unit-consistency discipline CM1's compound interest work and CS2's rate-conversion material both stress — a spreadsheet formula won't flag a unit mismatch as an error; it will simply compute a plausible-looking but wrong number."
            },
            {
                "q": "What is the benefit of using Excel's built-in financial functions (e.g. NPV, IRR) where appropriate, rather than always building the equivalent calculation manually?",
                "a": "Built-in functions are well-tested and widely understood, reducing the risk of a manual implementation error and making the formula immediately recognisable to another actuary reviewing the model.",
                "explain": "Worth balancing against Module 2's transparency principle — a built-in function can sometimes obscure exactly how a calculation works internally, so the choice between a built-in function and a manual step-by-step build should weigh clarity for the <em>specific</em> audience reviewing the model."
            },
            {
                "q": "Why is it important to be able to explain, in plain terms, exactly what every formula in a model does and why it's structured that way?",
                "a": "A formula the author can't explain clearly is a formula that hasn't been understood or verified, and is exactly the kind of hidden risk that CP2's checking and documentation principles exist to catch.",
                "explain": "This closing card ties this module directly back to CP1 Module 18's model risk material — a formula copied or adapted from elsewhere without full understanding of its logic is a genuine, common source of undetected model risk, however correct it might appear to be working on the surface."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Documentation and version control",
        "description": "Covers what and how to document within a spreadsheet model, and the principles of managing changes to a model over time.",
        "cards": [
            {
                "q": "What is the general purpose of documenting an actuarial model?",
                "a": "To allow someone other than the original author (or the author themselves, later) to understand, check, reproduce, and appropriately rely on the model's approach and results.",
                "explain": "This is precisely CP1 Module 18's documentation principle, now given its concrete spreadsheet home — worth remembering documentation isn't a bureaucratic afterthought; it's what actually makes the peer review and audit principles from Modules 2 and 7 possible in practice."
            },
            {
                "q": "What information should a model's documentation typically cover, at minimum?",
                "a": "The model's purpose, key assumptions and their sources, methodology/approach, known limitations, and instructions for use.",
                "explain": "Worth noting this maps closely onto CP1 Module 20's assumption-transparency principle and Module 18's model-purpose card — good documentation essentially answers, in one place, every question a reviewer would otherwise have to ask the model's author directly."
            },
            {
                "q": "Why should a model include a dedicated 'read me' or documentation sheet, rather than relying only on scattered in-cell comments?",
                "a": "A single, structured documentation sheet gives a reviewer a clear starting point to understand the model's overall approach, rather than having to piece together fragments of context from comments scattered across many sheets.",
                "explain": "This connects to Module 2's dashboard-sheet idea — just as a summary sheet serves results at a glance, a documentation sheet serves <em>context</em> at a glance, both existing to spare a reviewer from having to reverse-engineer the model's full structure and purpose from scratch."
            },
            {
                "q": "Why is it important to document the source of each key assumption used in a model (e.g. 'per company's 2025 mortality investigation')?",
                "a": "It lets a reviewer assess whether the assumption is appropriate and up to date, and allows the assumption to be efficiently revisited or updated when the underlying source changes.",
                "explain": "This is exactly CP1 Module 20's assumption-transparency principle applied at the individual-cell level — an assumption without a documented source is effectively unverifiable, no matter how reasonable it happens to look."
            },
            {
                "q": "Why should a model's limitations be documented explicitly, rather than left for a user to discover independently?",
                "a": "So that anyone relying on the model's results understands the boundaries of its validity and doesn't apply it (or trust its output) outside the conditions it was actually designed and checked for.",
                "explain": "This directly echoes CP1 Module 18's limitation-communication card — a model applied outside its validated range is one of the named sources of model risk that subject identified, and documented limitations are the practical safeguard against exactly that misuse."
            },
            {
                "q": "What is meant by 'version control' in the context of a spreadsheet model?",
                "a": "Systematically tracking changes to a model over time — e.g. through file naming conventions, a change log, or dedicated version-control software — so that different versions can be distinguished and prior versions recovered if needed.",
                "explain": "Worth recognising this as the spreadsheet-modelling equivalent of CP1 Module 33's point about consistency in valuation approach over time — without version control, it becomes difficult to know whether a change in reported results reflects a genuine underlying change or simply an undocumented model revision."
            },
            {
                "q": "Why might a simple change log (recording who changed what, when, and why) be considered essential good practice for any actuarial model in ongoing use?",
                "a": "It provides an audit trail explaining why the model's current state differs from an earlier version, supporting both internal review and any later investigation into an unexpected change in results.",
                "explain": "This is a practical implementation of CP1's peer review and reliance principles applied over <em>time</em> rather than just at a single point — a model used repeatedly over months or years accumulates changes, and a change log is what keeps that evolving history traceable."
            },
            {
                "q": "Why should a model clearly indicate its current version number or date, visible on opening the file?",
                "a": "So a user can immediately confirm they're working with (or relying on) the intended, current version, rather than an outdated copy that may no longer reflect the latest assumptions or corrections.",
                "explain": "This is a small but important safeguard against a subtle but serious risk: several near-identical copies of a model circulating, with a user unknowingly relying on results from a stale, superseded version."
            },
            {
                "q": "What risk does saving multiple, ad hoc copies of a model (e.g. 'model_final', 'model_final2', 'model_final_v3') create, compared with a disciplined version control approach?",
                "a": "It becomes unclear which copy is the current, authoritative version, increasing the risk that outdated or incorrect results are used, or that fixes made to one copy aren't reflected in others.",
                "explain": "This is a common, easily recognisable real-world failure mode worth naming explicitly — it's exactly the disorganised alternative that a proper naming convention or change log (this module's earlier cards) is meant to replace."
            },
            {
                "q": "Why might comments or notes within specific cells be used alongside, rather than instead of, a dedicated documentation sheet?",
                "a": "Cell-level comments can explain a specific, local formula choice or unusual value at the exact point a reviewer encounters it, complementing the documentation sheet's higher-level overview of the model's overall approach.",
                "explain": "Worth recognising these as operating at different <em>scales</em> of explanation — the documentation sheet answers 'what is this model and how does it work overall', while cell comments answer 'why is <em>this</em> particular formula/value structured this way', and a well-documented model typically needs both."
            },
            {
                "q": "Why is it important to update a model's documentation whenever the model itself is changed, rather than only documenting it once at initial build?",
                "a": "Documentation that no longer matches the model's actual current logic is actively misleading, potentially worse than having no documentation at all, since a reviewer would trust it without realising it's outdated.",
                "explain": "This connects to CP1's recurring ongoing-review theme — documentation, like assumptions and models generally, isn't a one-off exercise; stale documentation is a genuine, insidious risk precisely because a reviewer has no way of knowing it's stale just by reading it."
            },
            {
                "q": "How does thorough documentation support the sensitivity analysis and checking work covered later in this module set?",
                "a": "Clear documentation of assumptions and methodology tells a reviewer or checker exactly what to test and how the model is expected to behave, making both sensitivity testing and independent checking far more efficient and reliable.",
                "explain": "This previews Modules 5 and 7 directly — a checker working from good documentation knows what the model is <em>supposed</em> to do and can test against that expectation, while a checker working from an undocumented model has to first reverse-engineer the intended behaviour before they can even begin checking it properly."
            },
            {
                "q": "Why might a CP2.1 exam answer specifically be marked down for insufficient documentation, even if the underlying calculations are entirely correct?",
                "a": "Because CP2 tests the full practical skill of producing an usable, reliable model, and an undocumented model — however numerically correct — fails the reliability and auditability standard the subject is built around.",
                "explain": "This is worth taking as direct, practical exam guidance — under time pressure it can be tempting to skip documentation once the numbers are right, but this module's whole thrust is that documentation is a core, examined deliverable, not an optional polish applied only if time allows."
            },
            {
                "q": "Why should documentation be written in clear, plain language rather than dense technical shorthand only the original author would understand?",
                "a": "The documentation exists specifically to help someone <em>other</em> than (or a future version of) the original author understand the model, so it should be written for that reader's benefit, not as a private note-to-self.",
                "explain": "This directly echoes Module 10's audience-appropriate communication principle applied one module earlier, to internal documentation rather than an external client report — good documentation, like good reporting, is written for its reader, not just recorded for the writer's own convenience."
            },
            {
                "q": "How does good documentation and version control ultimately support the trust a client or manager can place in a model's results?",
                "a": "It provides the transparent, traceable record needed to demonstrate the model was built, checked, and used appropriately, which is precisely what allows others to reasonably rely on its output for real decisions.",
                "explain": "This closing card ties the module back to CP1 Module 2's reliance concept — documentation and version control are the practical machinery that makes genuine reliance on a model's results defensible, rather than simply asking a client to trust the actuary's word alone."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Sensitivity and scenario analysis",
        "description": "Covers techniques for testing how a model's results respond to changes in its assumptions, and how to interpret and present the results of that testing.",
        "cards": [
            {
                "q": "What is the general purpose of sensitivity analysis on an actuarial model?",
                "a": "To assess how much the model's output changes in response to changes in individual assumptions/inputs, identifying which assumptions matter most to the result.",
                "explain": "This is CP1 Module 18's sensitivity-testing concept given its full practical treatment — worth remembering the goal isn't just to 'test the model', but specifically to identify <em>which</em> assumptions the result is most materially exposed to, informing where assumption-setting care matters most."
            },
            {
                "q": "What is the difference between 'sensitivity analysis' and 'scenario analysis'?",
                "a": "Sensitivity analysis typically varies one assumption at a time to isolate its individual effect; scenario analysis varies several assumptions together to represent a coherent alternative future (e.g. a recession scenario).",
                "explain": "Worth keeping these distinct in an exam answer — a scenario (e.g. 'a severe recession') plausibly changes several assumptions <em>at once</em> in a correlated way (lower investment returns, higher lapses, higher unemployment-driven claims), which single-assumption sensitivity testing alone wouldn't capture."
            },
            {
                "q": "What is a 'data table', as an Excel tool for sensitivity analysis?",
                "a": "A built-in Excel feature that automatically recalculates a model's output across a range of values for one or two selected input cells, without needing to manually change and re-record the input each time.",
                "explain": "This is the practical Excel mechanism that makes systematic sensitivity testing efficient rather than laborious — worth connecting to Module 2's design principle that assumptions should live in a single, clearly identified input cell, since a data table only works cleanly against a model built that way."
            },
            {
                "q": "Why is manually changing an input cell, recording the result, and repeating for each value considered a less reliable sensitivity technique than using a built-in tool like a data table?",
                "a": "Manual repetition is slower, more tedious, and more prone to error (e.g. forgetting to reset a previous change, or mis-recording a result) than an automated, repeatable calculation.",
                "explain": "Worth noting this is both a reliability point AND a time-management point under CP2's exam conditions — an automated approach reduces the chance of an error specifically arising from the sensitivity-testing <em>process</em> itself, separate from any error in the underlying model."
            },
            {
                "q": "Why might a one-way sensitivity analysis be insufficient to fully understand a model's risk, even when performed carefully for every individual assumption?",
                "a": "It doesn't capture the effect of multiple assumptions moving together (which may reinforce or offset each other), nor any non-linear interaction between assumptions, both of which scenario or two-way sensitivity analysis can reveal.",
                "explain": "This is worth connecting directly to CP1 Module 29's risk aggregation material — just as combining individual risk measures naively can misstate true combined risk, testing assumptions only one at a time can miss important interaction effects between them."
            },
            {
                "q": "What is 'break-even' or 'goal-seek' analysis, and how does it differ from ordinary sensitivity testing?",
                "a": "Rather than asking 'how does the output change if this input changes', goal-seek analysis asks 'what value of this input would be needed to achieve a specific target output', working the calculation in reverse.",
                "explain": "This is a useful complementary technique worth distinguishing clearly — sensitivity analysis explores a <em>range</em> of outcomes for given input changes, while goal-seek answers a specific, often commercially relevant question like 'what lapse rate would make this product unprofitable'."
            },
            {
                "q": "Why should the assumptions varied in a sensitivity analysis be chosen deliberately, based on materiality, rather than tested exhaustively at random?",
                "a": "Testing every conceivable assumption combination exhaustively is impractical and time-consuming; focusing on the assumptions most likely to be material to the result (informed by judgement about the model and its purpose) makes the analysis useful within realistic time constraints.",
                "explain": "This is CP1's proportionality principle applied directly to sensitivity testing — the goal is <em>insight</em> into what matters, not exhaustive coverage of every possible input combination, which would waste effort on assumptions unlikely to be material to the actual decision the model informs."
            },
            {
                "q": "How should the results of a sensitivity analysis typically be presented to be useful to a reader?",
                "a": "Clearly, often as a table or simple chart showing the output under each tested variation, ideally ranked or highlighted by the materiality of the resulting change, rather than as a raw, unstructured dump of numbers.",
                "explain": "This directly previews Module 10's communication principles — sensitivity results that are technically complete but poorly presented fail to achieve their purpose of helping a reader understand which assumptions matter, echoing CP1's repeated theme that communication is part of the deliverable, not an afterthought."
            },
            {
                "q": "Why might a sensitivity analysis reveal that a model's headline result is disproportionately driven by one particular assumption?",
                "a": "Because different assumptions have different degrees of influence on the final result, depending on the model's structure — sensitivity analysis is precisely the tool that reveals this, rather than it being knowable in advance from the model's formulas alone.",
                "explain": "This is worth remembering as sensitivity analysis's genuine analytical value, beyond just a checking exercise — discovering that a result hinges heavily on one uncertain assumption is itself an important finding that should shape how confidently the result is reported and used."
            },
            {
                "q": "Why is sensitivity analysis considered a form of model checking, as well as a way of exploring the model's own behaviour?",
                "a": "If a sensitivity result behaves in an unexpected or illogical direction (e.g. increasing an assumed cost somehow <em>reduces</em> total cost), this can reveal a genuine error in the model's formulas, not just an interesting feature of the underlying risk.",
                "explain": "This is an important dual-purpose technique worth internalising — sensitivity testing isn't only about understanding risk exposure, it's also one of the most effective practical ways of catching a structural formula error, since an illogical sensitivity direction is a strong, visible red flag."
            },
            {
                "q": "How does scenario analysis specifically complement the qualitative risk assessment concepts introduced in CP1?",
                "a": "It gives a quantified, model-based expression of how a coherent adverse (or favourable) scenario would actually affect the specific product/business being modelled, going beyond the general qualitative discussion of risk categories.",
                "explain": "This connects directly to CP1 Module 29's stress and scenario testing material — where CP1 discusses stress testing conceptually as part of risk measurement, this module is where that same technique is actually implemented as a working spreadsheet calculation."
            },
            {
                "q": "Why might presenting a 'range' of results under different scenarios be more informative to a decision-maker than presenting only a single best-estimate figure?",
                "a": "A single figure conveys no information about the underlying uncertainty; a range (or a small set of scenario outcomes) shows the decision-maker how sensitive the conclusion is to the assumptions made, supporting a better-informed decision.",
                "explain": "This echoes CP1 Module 20's assumption-uncertainty and Module 18's stochastic-versus-deterministic material — communicating uncertainty honestly, rather than hiding it behind a single confident-looking number, is part of giving useful (not just technically complete) advice."
            },
            {
                "q": "Why should sensitivity/scenario analysis be built into the model's design from an early stage, rather than added on as an afterthought once the core model is finished?",
                "a": "Retrofitting sensitivity analysis onto a model not designed for it (e.g. with hard-coded assumptions scattered throughout) can be slow and error-prone, whereas a model designed from the outset with clean, centralised inputs makes sensitivity testing straightforward.",
                "explain": "This directly connects back to Module 2's design principles — this is exactly why good input/calculation/output separation matters from the very start of building a model, not just for the model's own clarity but specifically to make this module's techniques practical to apply later."
            },
            {
                "q": "Why might different stakeholders be interested in different sensitivity results from the same underlying model?",
                "a": "A pricing actuary may care most about sensitivity to competitor pricing or lapse assumptions, while a capital actuary may care most about sensitivity to extreme adverse scenarios — the same model can support different questions depending on who's asking.",
                "explain": "This is worth connecting to CP1's recurring multiple-stakeholders theme — a well-designed model's sensitivity analysis capability should be flexible enough to answer several different, audience-specific questions, not just the one question the original model builder happened to have in mind."
            },
            {
                "q": "Why is understanding the <em>results</em> of a sensitivity analysis, not just the mechanics of producing them, a key CP2 skill?",
                "a": "Producing a technically correct sensitivity table has limited value if the candidate can't then interpret what it means and communicate the important findings clearly to the intended audience.",
                "explain": "This closing card directly bridges this module to Module 10's communication material — CP2.1 tests whether the sensitivity table can be built correctly, but a strong CP2.2 answer (or the interpretive component of CP2.1) tests whether its meaning can then be explained usefully to someone who didn't build it."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Model risk and control",
        "description": "Covers the sources of risk within actuarial models specifically, and the governance/control practices used to manage that risk in a modelling context.",
        "cards": [
            {
                "q": "How does 'model risk' apply specifically within the context of spreadsheet-based actuarial modelling?",
                "a": "The risk that a spreadsheet model contains a structural, formula, or logical error, or is used inappropriately, leading to an incorrect result being relied upon for a real decision.",
                "explain": "This is CP1 Module 18's model risk concept given its concrete spreadsheet application — worth recognising this module as applying CP1's general risk-management framework (governance, identification, controls) specifically to the modelling activity itself, treating the model as a genuine source of risk in its own right."
            },
            {
                "q": "Give three distinct sources of error that can arise specifically within a spreadsheet model.",
                "a": "Formula errors (e.g. incorrect logic, wrong cell references), input errors (e.g. incorrect or outdated assumption values), and structural errors (e.g. a broken link, a formula not copied correctly across the intended range).",
                "explain": "Worth keeping these three categories distinct, since each calls for a different checking technique developed in Module 7 — a control total might catch a structural error, while an independent recalculation is needed to catch a subtle formula-logic error."
            },
            {
                "q": "Why might spreadsheet models be particularly prone to undetected errors, compared with more formally engineered software?",
                "a": "Spreadsheets are typically built informally, often by a single person under time pressure, without the structured testing/review processes standard software development would apply, making them more vulnerable to silent, undetected errors.",
                "explain": "This is a well-documented, real-world phenomenon worth taking seriously — it's precisely why CP2 devotes so much weight to design, documentation, and checking discipline: these practices exist specifically to compensate for spreadsheets' informal, error-prone default development process."
            },
            {
                "q": "What is meant by applying the 'three lines of defence' model (from CP1) specifically to a spreadsheet model's governance?",
                "a": "The model builder/user (first line) is responsible for building and checking it correctly day-to-day; a separate reviewer or risk function (second line) provides independent oversight/challenge; internal audit (third line) may periodically assess the overall control environment around model use.",
                "explain": "This is CP1 Module 25's governance framework applied directly to a single model, rather than an organisation's whole risk landscape — worth recognising the <em>same</em> structural principle (independent layers of review) recurring at a much smaller, model-specific scale."
            },
            {
                "q": "Why is independent peer review of a model's logic and results considered a key control, even when the model's builder is confident it's correct?",
                "a": "A model's own author can become blind to their own errors through over-familiarity with the model, and an independent reviewer approaches the model fresh, testing its logic rather than confirming what the author already expects to see.",
                "explain": "This is exactly CP1 Module 2's peer review principle restated for models specifically — confidence in one's own work is not the same as verified correctness, which is precisely why independent review remains a core control even for an experienced, careful model builder."
            },
            {
                "q": "What is meant by a model's 'sign-off' process, and why does it matter?",
                "a": "A formal record confirming that a specified person (often more senior, or independent of the model's construction) has reviewed and approved the model as fit for its intended purpose before its results are relied upon.",
                "explain": "This is the formal governance step that converts an informally-reviewed model into one fit to be relied upon for a real decision — worth connecting to CP1 Module 2's reliance concept: sign-off is what actually establishes that the model can be trusted by those depending on its output."
            },
            {
                "q": "Why might an organisation maintain a central inventory or register of the actuarial models it relies upon?",
                "a": "To track which models exist, their purpose, their owner, when they were last reviewed/validated, and their criticality, supporting organised oversight rather than an ad hoc, untracked proliferation of models across the organisation.",
                "explain": "This is CP1 Module 26's risk register concept applied specifically to models — just as an organisation needs to know what risks it faces to manage them, it needs to know what models it relies upon (and how critical each one is) to manage model risk systematically."
            },
            {
                "q": "Why might the level of control/review applied to a model reasonably vary depending on how material or critical its results are?",
                "a": "A model used for a quick, low-stakes internal estimate doesn't need the same level of scrutiny as one whose output directly feeds regulatory reserves or capital figures — proportionality applies to model governance just as it does to assumption-setting and model complexity.",
                "explain": "This is CP1 Module 2's proportionality principle applied once more, now to the intensity of model <em>review</em> specifically — worth recognising this as the same principle recurring across CP1 and CP2 in different guises: analysis depth, assumption prudence, complexity, and now control intensity all scale with materiality."
            },
            {
                "q": "Why is restricting who can edit a 'live' or in-use model (e.g. via file protection) considered a genuine risk control?",
                "a": "It prevents unauthorised or accidental changes to a model that's actively being relied upon, ensuring results reported from it reflect the reviewed, signed-off version rather than an unreviewed later edit.",
                "explain": "This connects directly to Module 4's version control material — access restriction is the <em>preventive</em> counterpart to the change log's <em>detective</em> record-keeping; together they address both stopping unauthorised changes and tracking authorised ones."
            },
            {
                "q": "What is the risk of relying on a spreadsheet model that has been repeatedly modified and adapted over a long period, well beyond its original design?",
                "a": "Incremental changes made by different people over time, without a corresponding rebuild of the model's original structure, can leave it internally inconsistent, poorly documented relative to its current state, and harder to check reliably.",
                "explain": "This is a real-world phenomenon worth naming explicitly — a model that has 'organically grown' through many small edits often ends up violating the clean design principles from Module 2 that it may have started with, even though no single edit was individually careless."
            },
            {
                "q": "Why might an organisation require periodic re-validation of long-standing, business-critical models, rather than relying on their original sign-off indefinitely?",
                "a": "Assumptions, business context, and the model's own accumulated changes (as described in the previous card) can all mean a model validated as fit for purpose at one point no longer remains so, requiring re-confirmation on an ongoing basis.",
                "explain": "This is CP1's recurring ongoing-review theme applied once more, specifically to model governance — echoing CP1 Module 18's validation card, a model isn't validated once and forever; its continued fitness for purpose needs periodic reconfirmation, just like an assumption or a strategy."
            },
            {
                "q": "How does thorough documentation (Module 4) directly support effective model risk control?",
                "a": "It enables an independent reviewer to actually understand and assess the model's logic and assumptions, without which meaningful peer review or sign-off is essentially impossible to perform properly.",
                "explain": "This makes explicit a dependency that's been implicit throughout — every control mechanism this module describes (peer review, sign-off, re-validation) relies on the documentation from Module 4 already being in place; poor documentation quietly undermines every later control."
            },
            {
                "q": "Why might building a smaller, simpler model sometimes be a genuine <em>risk</em>-reduction decision, not just a time-saving one?",
                "a": "A simpler model is easier to check thoroughly, easier for a reviewer to understand fully, and has fewer places for an undetected error to hide, directly reducing the model risk this module has been discussing.",
                "explain": "This connects Module 2's proportionality principle directly to risk management — unnecessary complexity isn't just inefficient, it's a genuine risk factor in its own right, since a more complex model is mechanically harder to fully check and verify."
            },
            {
                "q": "Why is model risk considered a genuine organisational risk category in CP1's risk classification framework, not just a technical concern for the model's builder?",
                "a": "A materially wrong model result relied upon for a real decision (pricing, reserving, capital) can cause genuine financial loss to the organisation, exactly like any other risk category (market, credit, insurance risk) — model risk is a real business risk, not merely a technical footnote.",
                "explain": "This closing card ties this module directly back to CP1 Module 18's original framing of model risk as a category worth naming and managing explicitly, now grounded in this module's concrete spreadsheet-specific controls (peer review, sign-off, version control, proportionate review intensity)."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Checking and auditing a model",
        "description": "Covers practical techniques for verifying that a spreadsheet model is correct, including reasonableness checks, control totals, and independent recalculation.",
        "cards": [
            {
                "q": "What is the general purpose of checking/auditing a spreadsheet model, distinct from the model risk controls covered in Module 6?",
                "a": "Checking/auditing is the specific, hands-on <em>technique</em> of actually testing a model's correctness (e.g. through recalculation or reasonableness tests), whereas Module 6's controls (peer review, sign-off) are the <em>governance</em> processes that ensure such checking actually happens and is acted upon.",
                "explain": "Worth keeping this distinction clear — this module supplies the practical <em>toolkit</em> (what techniques to use), while Module 6 supplied the organisational <em>framework</em> (when and by whom those techniques should be applied) around a model."
            },
            {
                "q": "What is a 'reasonableness check', as applied to a model's output?",
                "a": "Comparing a model's result against a rough, independent expectation (e.g. an approximate mental estimate, a prior period's figure, or a simple back-of-envelope calculation) to confirm the output is broadly plausible before accepting it.",
                "explain": "This is often the fastest and most valuable first check to perform — a result that's wildly different from a simple, independent sanity check (e.g. out by a factor of 10, or the wrong sign) is an immediate red flag worth investigating before any more detailed checking begins."
            },
            {
                "q": "What is meant by 'independent recalculation' as a checking technique?",
                "a": "Recalculating some or all of a model's result using a separate method or tool (e.g. a different formula approach, or a simple manual calculation) and confirming the two approaches agree.",
                "explain": "This is worth distinguishing from merely re-reading the same formulas again — genuine independent recalculation uses a <em>different</em> calculation route, which is far more likely to catch an error than simply reviewing the same (possibly flawed) logic a second time."
            },
            {
                "q": "How does a 'control total' (introduced in Module 3) function specifically as a checking technique, once built into a model?",
                "a": "By calculating the same total via two independent routes within the model and displaying whether they match, it provides an ongoing, automatic check that flags immediately if the model's internal consistency breaks (e.g. after a later edit).",
                "explain": "This connects Module 3's calculation-technique card directly to this module's checking focus — a control total isn't just a design nicety, it's an <em>active</em>, ongoing audit mechanism that continues protecting the model long after the initial build is finished."
            },
            {
                "q": "Why should extreme or edge-case inputs (e.g. a zero, a very large value, a boundary value) be specifically tested when checking a model?",
                "a": "A formula that behaves correctly for typical, mid-range inputs can still fail or behave unexpectedly at an edge case (e.g. dividing by zero, or a lookup failing at the very top/bottom of a table), which typical-case testing alone wouldn't reveal.",
                "explain": "This is an important complement to the reasonableness checking described earlier — testing only 'normal' inputs can leave a model with a hidden fragility that only surfaces later, potentially at exactly the moment (an unusual real scenario) when it matters most."
            },
            {
                "q": "Why is tracing a formula's precedents and dependents (using Excel's built-in auditing tools) a useful checking technique?",
                "a": "It visually shows exactly which cells feed into a given formula (precedents) and which cells depend on it (dependents), helping a reviewer confirm the calculation flow matches what the model's documented logic and design intended.",
                "explain": "This is a direct, practical tool for verifying Module 2's consistent-calculation-flow design principle was actually followed correctly — it can quickly reveal an unexpected reference (e.g. a formula accidentally pointing to the wrong row) that might not be obvious just from reading the formula's text."
            },
            {
                "q": "Why might comparing a model's output against a simplified, alternative version of the same calculation be a useful checking approach?",
                "a": "A deliberately simplified model (e.g. ignoring a minor complicating feature) should produce a result reasonably close to the full model's, in a direction and magnitude that can be sensibly explained by the feature that was omitted — a useful cross-check on the full model's overall correctness.",
                "explain": "This is a specific, practical application of the reasonableness-check principle — the simplified model acts as an independent, roughly-known benchmark, and the <em>gap</em> between the two results should itself be explicable, which is informative in its own right."
            },
            {
                "q": "Why should a checker specifically look for cells containing hard-coded numbers within calculation formulas, as part of the auditing process?",
                "a": "Because hard-coded values (flagged as poor practice in Module 2) are exactly the kind of hidden, easily-missed assumption that can silently diverge from the intended input value elsewhere in the model, or simply be wrong and go unnoticed.",
                "explain": "This connects this module's practical checking technique directly back to the specific design flaw Module 2 warned against — checking for hard-coded values is one of the highest-value, most targeted things an auditor can specifically look for."
            },
            {
                "q": "Why is it valuable for a checker to attempt to break the model deliberately, e.g. by entering an implausible or invalid input?",
                "a": "It reveals whether the model handles unexpected or invalid inputs gracefully (or at least visibly, rather than silently producing a meaningless result), which is important both for robustness and for catching structural weaknesses.",
                "explain": "This is the checking-oriented counterpart to Module 3's IFERROR discussion — deliberately stress-testing a model's <em>input</em> handling (not just its normal calculations) is a different, valuable check from simply confirming correct results under expected, well-behaved conditions."
            },
            {
                "q": "Why should checking be performed throughout a model's construction, rather than only once, at the very end, before delivery?",
                "a": "Catching an error early (before further calculations are built on top of it) is far quicker and less disruptive to fix than discovering the same error only after the entire model has been completed and much subsequent work depends on it.",
                "explain": "This is important practical exam advice under CP2's time pressure — a candidate who checks incrementally as they build catches errors while they're cheap to fix, rather than risking having to unpick a large amount of completed work near the deadline."
            },
            {
                "q": "Why might a checker specifically re-perform a calculation using a completely different tool or method (e.g. a hand calculation) rather than another spreadsheet formula?",
                "a": "Using a different calculation medium avoids replicating any systematic error that might be embedded in the spreadsheet's own logic or the way its formulas are structured, giving a more truly independent verification.",
                "explain": "This is the strongest, most rigorous form of the independent-recalculation principle from earlier in this module — a second spreadsheet formula built with the same underlying assumptions as the first could still share the same blind spot; a hand calculation cannot."
            },
            {
                "q": "Why is documenting the checks that were actually performed on a model (not just performing them) considered important?",
                "a": "It provides evidence to a reviewer or later user that appropriate checking has taken place, and specifies exactly what was and wasn't tested — an unchecked assumption about what 'must have been checked' is itself a source of risk.",
                "explain": "This connects directly back to Module 4's documentation principles and Module 6's sign-off process — a record of checks performed is precisely the evidence a sign-off decision should be based on, rather than sign-off being granted on trust alone."
            },
            {
                "q": "What is the risk of a checker simply confirming that a model's <em>output</em> looks plausible, without examining its underlying <em>logic</em>?",
                "a": "Two separate errors could coincidentally cancel out, producing a plausible-looking final result that masks an incorrect model structure — a plausible output alone doesn't guarantee the model is actually correct.",
                "explain": "This is a subtle but important checking pitfall worth remembering — output-level reasonableness checks (this module's opening technique) are a valuable first pass, but they cannot substitute entirely for examining the model's internal logic and formulas directly."
            },
            {
                "q": "How does effective checking, as covered throughout this module, ultimately connect back to CP1's model risk and reliance principles?",
                "a": "Thorough, well-documented checking is precisely what allows a model's results to be and defensibly relied upon by others, directly addressing the model risk CP1 identifies as a real organisational risk category.",
                "explain": "This closing card draws together the whole module — reasonableness checks, control totals, independent recalculation, edge-case testing, and documented checking evidence are, collectively, the practical answer to the abstract question CP1 Module 18 raised: how do you actually know a model can be trusted?"
            }
        ]
    },
    {
        "id": "m08",
        "title": "Automating models with VBA and macros",
        "description": "Covers when and how automation (via VBA/macros) can be used within a spreadsheet model, and the additional risks and good practices this introduces.",
        "cards": [
            {
                "q": "What is VBA, in the context of spreadsheet-based actuarial modelling?",
                "a": "Visual Basic for Applications, a programming language built into Excel (and similar tools) that allows users to write code (macros) to automate repetitive tasks or implement calculations beyond what standard formulas can easily achieve.",
                "explain": "Worth thinking of VBA as a different tool from ordinary formulas, not simply 'more advanced formulas' — code runs as discrete, sequential instructions rather than the automatically-recalculating, cell-based logic that ordinary spreadsheet formulas use, which has real implications for how it should be checked."
            },
            {
                "q": "Give one example of a task in actuarial modelling that VBA/macros might reasonably be used to automate.",
                "a": "Running a model repeatedly across many different scenarios or data sets and collating the results automatically, which would be extremely tedious and error-prone to perform manually one at a time.",
                "explain": "This is a strong use case for automation — repetitive, mechanical tasks that a human would find tedious (and therefore error-prone) are exactly where automation adds real value, in contrast to core calculation logic that's often better left as transparent, auditable formulas."
            },
            {
                "q": "Why is VBA code generally considered harder to audit than an equivalent spreadsheet formula?",
                "a": "Formulas are visible directly in their cells and can be inspected by clicking on them; VBA code is hidden behind the spreadsheet interface (in a separate code editor) and requires the reviewer to actively open and read it, and often to understand programming logic rather than spreadsheet formula logic.",
                "explain": "This directly connects to Module 1's point about spreadsheets being valued for their transparency — VBA trades away some of that transparency in exchange for capability, which is precisely why its use should be a deliberate, justified choice rather than a default habit."
            },
            {
                "q": "Why might a model that relies heavily on VBA macros be considered to carry additional model risk, compared with an equivalent formula-only model?",
                "a": "Because VBA code is harder to review, harder for someone unfamiliar with programming to check, and its logic isn't automatically visible/traceable the way formula dependencies are, increasing the chance an error goes undetected.",
                "explain": "This is CP1 Module 18's model risk concept and Module 6's risk-control material both applying directly to VBA specifically — the <em>same</em> underlying risk (an undetected structural error) is simply harder to catch when hidden inside code rather than visible spreadsheet formulas."
            },
            {
                "q": "Why should VBA code, where used, be commented clearly within the code itself?",
                "a": "Code comments explain what each section of code is doing and why, serving the exact same purpose for code that Module 4's documentation principles serve for the spreadsheet as a whole — without them, the code becomes a genuine black box even to a technically capable reviewer.",
                "explain": "Worth recognising this as Module 4's documentation principle extended specifically into the code layer — a model can be beautifully documented at the spreadsheet level yet still contain an impenetrable, undocumented macro, leaving a genuine gap in the model's overall transparency."
            },
            {
                "q": "Why might a model builder deliberately choose to avoid VBA even when it could technically make a task faster or more elegant?",
                "a": "If an equivalent result can be achieved with ordinary, transparent formulas, the added auditability and accessibility of formulas may outweigh the convenience VBA would offer, especially if the model needs to be reviewed or maintained by others without strong VBA skills.",
                "explain": "This is Module 2's proportionality principle applied specifically to the formula-versus-VBA choice — 'more powerful' isn't automatically 'better' if it comes at the cost of transparency the audience needs, echoing this whole module set's repeated theme that fitness for purpose beats sophistication for its own sake."
            },
            {
                "q": "Why should VBA code be tested just as rigorously as spreadsheet formulas, using the checking techniques from Module 7?",
                "a": "Code is just as capable of containing a logical error as a formula is, and the same principles (reasonableness checks, testing edge cases, independent verification) apply equally, even though the checking process may look somewhat different in a coding context.",
                "explain": "This directly extends Module 7's whole checking toolkit into VBA specifically — worth remembering automation doesn't exempt a model from needing genuine verification; if anything, VBA's reduced visibility (this module's earlier card) makes thorough checking even more important, not less."
            },
            {
                "q": "What is the risk of a macro that modifies cell values directly (e.g. pasting values over formulas) as part of its automated process?",
                "a": "This can silently destroy the underlying formula logic in those cells, replacing a traceable, live calculation with a static, hard-coded value — exactly the practice Module 2 warned against, now potentially happening invisibly via automated code rather than manual editing.",
                "explain": "This is an important, easily-overlooked risk worth flagging explicitly — a macro can inadvertently reintroduce Module 2's hard-coding problem at scale, silently converting formulas to static values across many cells in a way that might not be immediately obvious just from looking at the spreadsheet."
            },
            {
                "q": "Why might a well-designed macro include its own built-in checks or confirmation prompts before performing a significant, potentially irreversible action?",
                "a": "It reduces the risk of an automated process running incorrectly (e.g. on the wrong data range, or with an unintended parameter) and causing significant, hard-to-reverse damage before a human has a chance to notice and intervene.",
                "explain": "This is worth connecting to Module 6's risk-control material — a confirmation step acts as a deliberate control point, similar in spirit to a sign-off requirement, specifically inserted <em>before</em> an automated action takes effect, rather than only checking its results afterward."
            },
            {
                "q": "Why is it good practice to keep the macro/VBA code itself under the same version control discipline described in Module 4 for the spreadsheet as a whole?",
                "a": "Code changes over time just as formulas do, and without tracking those changes, it becomes similarly difficult to know why the model's automated behaviour has changed, or to recover an earlier working version if a new change introduces a problem.",
                "explain": "This extends Module 4's version control principle to cover the model's <em>full</em> content, recognising that VBA code is just as much a part of 'the model' as its formulas and structure are, and deserves the same discipline applied to it."
            },
            {
                "q": "Why might CP2 exam guidance sometimes discourage or limit the use of VBA for a given exercise, even when it's technically permitted?",
                "a": "The exam is often specifically testing spreadsheet formula and design skills; excessive reliance on VBA could make it harder to assess whether the candidate has demonstrated those core skills, and increases the risk of a hard-to-mark, hidden logical error within untested code under time pressure.",
                "explain": "Worth taking this as practical guidance: given this whole module's caveats about VBA's reduced transparency and higher review burden, using it should be a deliberate, justified choice specifically where it adds genuine value — not a default habit reached for whenever it's technically available."
            },
            {
                "q": "Why should a user always understand what a macro actually does before running it on an important model, rather than simply trusting it because it was written by someone else?",
                "a": "Running unreviewed code blindly bypasses every checking and governance principle this module set has built up — a macro is just as capable of containing an error (or, in principle, doing something unintended) as any other piece of unreviewed model logic.",
                "explain": "This connects to CP1 Module 2's professional-judgement theme — an actuary remains responsible for results produced using a tool, even an automated one written by someone else, so understanding what a macro does before relying on it is a professional obligation, not merely good practice."
            },
            {
                "q": "How does the appropriate use of VBA/macros ultimately reflect the same proportionality principle running through the rest of CP1 and CP2?",
                "a": "Automation should be used where it adds value proportionate to its cost in reduced transparency and increased review burden, not simply because it's available or impressive — the same judgement about fitness for purpose that governs model complexity generally.",
                "explain": "This closing card ties automation back to CP1 Module 2's proportionality principle and this module set's own recurring theme (Modules 2, 6) — VBA is a powerful tool, but its power comes with real costs that must be weighed, not a capability to be used simply because it exists."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Data handling, cleaning and validation",
        "description": "Covers how data is brought into, checked and prepared within a spreadsheet model, extending CP1's general data-quality principles into practical spreadsheet technique.",
        "cards": [
            {
                "q": "Why does the reliability of a model's output depend as much on the quality of the data feeding it as on the correctness of its formulas?",
                "a": "Even a perfectly correct set of formulas will produce a wrong or misleading result if the underlying data it operates on is incomplete, inaccurate, or inconsistently recorded — 'garbage in, garbage out' applies just as much to a spreadsheet model as to any other kind.",
                "explain": "This is CP1 Module 18's garbage-in-garbage-out principle and Module 19's data-quality dimensions (completeness, accuracy, consistency) brought directly into the spreadsheet-modelling context this module set is built around."
            },
            {
                "q": "Why should raw imported data typically be kept on a separate sheet from the model's working calculations, rather than mixed together?",
                "a": "Keeping raw data distinct preserves an unaltered record of the original source data, makes it clear which cells are sourced externally versus derived within the model, and supports the input/calculation/output separation from Module 2.",
                "explain": "This is Module 2's structural separation principle applied specifically to data — worth recognising raw data as effectively another category of 'input', deserving the same clear, protected separation from calculation logic that assumption cells do."
            },
            {
                "q": "What is a 'data validation' rule in a spreadsheet, and how does it help maintain data quality?",
                "a": "A rule that restricts what can be entered into a cell (e.g. only numbers within a specified range, or only values from a specified list), preventing an obviously invalid or out-of-range value from being entered in the first place.",
                "explain": "This is a useful <em>preventive</em> control, worth contrasting with the <em>detective</em> checking techniques from Module 7 — data validation stops certain errors from ever entering the model at all, rather than relying on catching them later through review."
            },
            {
                "q": "Why should imported data be checked for completeness and plausibility before being used in a model, even if it comes from what seems like a reliable source?",
                "a": "Even a generally reliable data source can contain gaps, transcription errors, or outdated records for a specific extract, and using unchecked data risks silently corrupting the model's results without any warning that something is wrong.",
                "explain": "This directly echoes CP1 Module 19's point about understanding how data was collected before using it — 'reliable source' describes the data's general trustworthiness, not a guarantee that <em>this</em> specific extract is free of errors, which is exactly why an independent check remains worthwhile."
            },
            {
                "q": "What is a reasonable approach when a data set contains a small number of obvious outliers or errors (e.g. a negative age, or an impossible date)?",
                "a": "Investigate the specific cause where practical, and document clearly how such records were treated (e.g. corrected, excluded, or flagged) — silently ignoring or including clearly erroneous records without any record of the decision undermines the model's reliability and transparency.",
                "explain": "This connects directly to CP1 Module 19's point about not simply excluding incomplete/erroneous records without care, since doing so could introduce bias if the errors aren't random — the <em>decision</em> about how to handle outliers matters, and so does documenting it clearly."
            },
            {
                "q": "Why might a model include a visible 'data quality summary' (e.g. counts of records, flagged anomalies, date range covered) as part of its documentation?",
                "a": "It gives a reviewer immediate visibility into the scope and quality of the underlying data, supporting an informed judgement about how much confidence to place in results derived from it.",
                "explain": "This is a practical, spreadsheet-native implementation of CP1 Module 19's data-documentation principle — worth recognising this as directly analogous to Module 4's model documentation sheet, just focused specifically on the data feeding the model rather than the model's calculation logic."
            },
            {
                "q": "Why should formulas that summarise or aggregate data (e.g. SUMIFS, COUNTIFS) be checked particularly carefully for correct range references?",
                "a": "An aggregation formula referencing an incomplete or incorrect range will silently produce a plausible-looking but wrong total, exactly the kind of structural error that a reasonableness check (Module 7) is specifically designed to catch.",
                "explain": "This connects Module 3's calculation-technique material and Module 7's checking material directly to the data context — an aggregation formula is often one of the <em>first</em> places raw data enters the model's calculation logic, making an error here likely to propagate through everything downstream."
            },
            {
                "q": "Why is it important to confirm that a data import (e.g. from a CSV file or another system) has brought in the expected number of records and in the expected format?",
                "a": "An import that silently truncates, duplicates, or misformats data (e.g. treating a date field as text) can introduce a serious error before any calculation logic is even applied, and this kind of import failure isn't always visually obvious.",
                "explain": "This is a specific, practical example of the data-completeness check from earlier in this module — worth treating data import as its own distinct checkpoint deserving explicit verification, not something that can simply be assumed to have worked correctly."
            },
            {
                "q": "Why might sensitivity or scenario analysis (Module 5) sometimes reveal a data quality issue, rather than a genuine finding about the underlying risk?",
                "a": "An implausible or extreme sensitivity result can sometimes be traced back to a data error (e.g. one erroneous record with an extreme value) rather than a genuine feature of the model's underlying risk exposure, making sensitivity testing a useful data-quality check too.",
                "explain": "This connects directly to Module 5's dual-purpose point that sensitivity testing can double as a model-checking technique — the same principle extends naturally to data quality: an unexpected sensitivity result is worth investigating as a possible data issue, not just a possible formula error."
            },
            {
                "q": "Why should assumptions derived from data analysis (e.g. an average claim size calculated from a data set) be clearly linked back to the underlying data and calculation used to derive them?",
                "a": "This allows a reviewer to trace and verify exactly how the assumption was derived and to reassess it easily if the underlying data is later updated, rather than the assumption becoming an unexplained, disconnected fixed value.",
                "explain": "This connects Module 4's assumption-source documentation principle directly to the data-handling context — an assumption that's traceable back to its source data is far more defensible and easier to update than one presented as an isolated number with no visible derivation."
            },
            {
                "q": "Why might handling data cleaning and validation within a dedicated section of the model (rather than scattered throughout) support the model's overall auditability?",
                "a": "A dedicated data-cleaning section makes clear and inspectable exactly what adjustments were made to the raw data before it entered the model's core calculations, rather than leaving cleaning steps hidden or implicit within calculation formulas.",
                "explain": "This is Module 2's structural design principle extended specifically to data preparation — worth recognising data cleaning as its own distinct <em>stage</em> in the model's overall flow, deserving the same clear, visible, well-organised treatment as any other part of the calculation pipeline."
            },
            {
                "q": "Why is understanding the limitations of the underlying data important when interpreting and communicating a model's results, not just when building the model?",
                "a": "Data limitations (e.g. a small sample, a data set that excludes certain policy types) directly limit how confidently the model's results should be presented and relied upon, which needs to be communicated honestly alongside the results themselves.",
                "explain": "This directly previews Module 10's communication material — data limitations aren't just a technical footnote for the model builder; they're exactly the kind of caveat CP1 Module 2's transparency principle requires be communicated clearly to whoever is relying on the model's output."
            },
            {
                "q": "Why does thorough data handling and validation ultimately support every other principle developed in this module set?",
                "a": "Good design, clear formulas, sensitivity analysis, checking, and documentation are all built on the assumption that the underlying data is sound — if the data itself is flawed, none of these other good practices can produce a reliable result.",
                "explain": "This closing card makes explicit the foundational role of data quality across this whole module set — worth recognising that CP2's other modules assume, largely implicitly, that this module's principles have already been applied; a beautifully designed, well-checked model built on flawed data is still an unreliable model."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Communicating model results and report writing",
        "description": "Covers how to present and explain a model's approach and results clearly to a non-technical audience, the focus of CP2.2's report-writing assessment.",
        "cards": [
            {
                "q": "What is the primary skill CP2.2 assesses, distinct from the model-building skill assessed in CP2.1?",
                "a": "The ability to write a clear report explaining a model's approach, assumptions, and results to a non-technical audience, such that they can understand and act on the findings appropriately.",
                "explain": "This is CP1 Module 2's clear-communication principle at its most directly and specifically examined — worth remembering this module's whole thrust: a technically brilliant model (CP2.1) that can't be explained clearly (CP2.2) has only delivered half of what real actuarial work requires."
            },
            {
                "q": "Why should a report avoid unexplained actuarial or technical jargon when writing for a non-technical audience?",
                "a": "A reader without actuarial training won't understand specialist terms without explanation, and unexplained jargon undermines the whole purpose of the report — communicating results clearly enough that the reader can understand and act on them.",
                "explain": "This directly echoes CP1 Module 5's point about tailoring communication to the recipient's ability to understand it — the <em>same</em> principle that governs how an actuary should advise a customer applies to how a model's results should be reported to a non-technical client or manager."
            },
            {
                "q": "How should a report's structure typically be organised to serve a non-technical reader effectively?",
                "a": "Usually starting with a clear, concise summary of the key findings and conclusions, before (or separately from) more detailed supporting explanation — allowing a busy reader to grasp the headline message quickly, with detail available if they want to go further.",
                "explain": "This connects to Module 2's dashboard-sheet idea and CP1's audience-tailoring principle — a reader who only reads the opening summary should still come away with the important message, exactly the same logic behind a model's summary sheet serving readers who won't dig into the detailed calculations."
            },
            {
                "q": "Why should a report explain the model's key assumptions in plain language, even though a technical reader could simply inspect the spreadsheet's formulas directly?",
                "a": "A non-technical reader has no practical way of inspecting or interpreting spreadsheet formulas themselves, so the report is the <em>only</em> route through which they can understand what the results actually depend on and how confidently to treat them.",
                "explain": "This directly echoes CP1 Module 2's point that advice must make assumptions and limitations explicit — for a non-technical audience, the report IS the model, in the sense that it's the only version of the model's logic they can actually access and understand."
            },
            {
                "q": "Why might a report include a chart or simple visual, rather than presenting all results as tables of numbers?",
                "a": "A well-chosen visual can convey a pattern, trend, or comparison more immediately and clearly than a table of raw figures, particularly for a reader without the technical fluency to interpret a dense numerical table quickly.",
                "explain": "This is worth balancing against clarity for its own sake — a visual should aid understanding for <em>this</em> audience, not simply decorate the report; a confusing or overly complex chart can undermine communication just as much as an overly dense table of numbers."
            },
            {
                "q": "Why should a report clearly state the limitations of the underlying model and its results, rather than presenting the findings as if they were certain?",
                "a": "Presenting results without their genuine limitations could mislead the reader about how much confidence to place in them, and misrepresents the true nature of an inherently uncertain, assumption-based actuarial estimate as if it were a precise, guaranteed figure.",
                "explain": "This is CP1 Module 2's assumption-and-limitation transparency principle applied directly to reporting — worth remembering this isn't just good practice, it's a professional obligation: giving a client false confidence in a figure is a genuine failure of the actuary's duty to give honest, useful advice."
            },
            {
                "q": "Why is it important for a report to directly answer the specific question or brief it was commissioned to address, rather than simply presenting everything the model calculated?",
                "a": "A report that buries the answer to the actual question within a large volume of unfiltered model output fails the reader just as much as one that omits important information — communication should be structured around what the reader actually needs to know.",
                "explain": "This directly echoes CP1's proportionality principle applied to reporting specifically — including every possible detail the model produced isn't more thorough, it's less <em>useful</em>, since it makes the relevant answer harder for the reader to find and act on."
            },
            {
                "q": "Why might a report need to explain not just <em>what</em> the results are, but <em>why</em> the model was built the way it was?",
                "a": "A reader deciding how much to rely on the results needs to understand the reasoning behind key modelling choices (e.g. why a particular approach or assumption was used), not just the numerical output those choices produced.",
                "explain": "This connects to Module 4's documentation principle, now aimed at a non-technical rather than technical audience — the <em>why</em> matters just as much in a client report as it does in internal model documentation, just explained in language appropriate to a reader without actuarial training."
            },
            {
                "q": "Why should a report avoid overstating the precision of a result derived from uncertain assumptions (e.g. presenting a figure to the nearest pound when the underlying uncertainty is much larger)?",
                "a": "False precision can mislead a reader into believing a result is more certain and exact than it is, given the inherent uncertainty in the underlying assumptions — rounding appropriately helps convey the true, honest level of confidence in the figure.",
                "explain": "This directly echoes CP1 Module 20's assumption-uncertainty material — how a number is <em>presented</em> (its apparent precision) communicates something real about how confidently it should be relied upon, and overstating that precision is itself a form of misleading the reader."
            },
            {
                "q": "Why might a good report proactively address likely follow-up questions a reader would have, rather than waiting to be asked?",
                "a": "Anticipating a reader's natural questions (e.g. 'how sensitive is this to X assumption', 'what would happen under a different scenario') and addressing them directly makes the report more useful and self-contained, reducing the need for a slower follow-up exchange.",
                "explain": "This connects directly to Module 5's sensitivity analysis material — a well-anticipated report often draws on exactly the sensitivity/scenario results developed there, presenting them proactively rather than leaving the reader to wonder how robust the headline result actually is."
            },
            {
                "q": "How does the discipline of writing a clear report for CP2.2 reinforce good practice in the model-building work assessed by CP2.1?",
                "a": "Knowing a model's results will need to be explained clearly to a non-technical reader encourages a builder to keep the model's structure, assumptions, and logic clear and well-organised from the outset, rather than allowing avoidable complexity to creep in.",
                "explain": "This is worth recognising as a useful discipline even outside the exam context — anticipating the need to <em>explain</em> a model to someone else is a strong forcing function for keeping the model itself clear and well-structured, directly reinforcing Module 2's design principles."
            },
            {
                "q": "Why is professional, courteous, and appropriately formal language important in an actuarial report, even when the content itself is highly technical?",
                "a": "The report represents the actuary's professional work and judgement to the client or organisation reading it; poor tone or unprofessional language can undermine confidence in the analysis regardless of its underlying technical quality.",
                "explain": "This connects to CP1 Module 2's professional standards material — the <em>form</em> of communication (tone, professionalism, structure) is part of giving useful advice, not separate from the technical <em>substance</em>, since a reader's trust in the analysis is shaped by both together."
            },
            {
                "q": "Why does CP2 close its module set with report writing, rather than treating it as a separate, unrelated topic from the modelling techniques covered earlier?",
                "a": "Communicating results clearly is the final, essential step that makes all the earlier work (design, formulas, sensitivity analysis, checking, data handling) actually <em>useful</em> to someone else — a correct, well-built, thoroughly checked model that can't be explained clearly has not yet delivered its full value.",
                "explain": "This closing card ties the whole of CP2 together — echoing Module 1's framing of CP2 as testing how an actuary actually works, this module completes the picture: building the right model (CP2.1) and communicating it clearly (CP2.2) are two halves of the same complete piece of actuarial work."
            }
        ]
    }
  ],
  questions: [
    {
      id: "cp2-q1",
      title: "Understanding the brief for a new modelling exercise",
      modules: "Module 1",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A junior actuary has been given a brief to build a spreadsheet model projecting a pension scheme's cashflows, but the brief doesn't specify exactly how granular the projection should be. Explain how the junior actuary should approach this ambiguity.",
          answer:
            "Rather than treating the ambiguity as a blocker, the junior actuary should exercise judgement to make a reasonable, proportionate choice about the level of granularity (e.g. annual rather than monthly projection, given the scheme's purpose), clearly document that choice and the reasoning behind it, and confirm it with whoever commissioned the work if there's genuine doubt or the choice is highly consequential.",
          note: "This is precisely CP2's test of judgement under an under-specified brief &mdash; the answer should show a reasonable, documented choice being made, not a refusal to proceed without further instruction.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what it means for a model to be 'fit for purpose', and why a more sophisticated model is not automatically a better one.",
          answer:
            "A model is fit for purpose when it does what the brief actually requires, to an appropriate level of accuracy and complexity, within the time and resources available. A more sophisticated model than necessary takes longer to build and check, increases the risk of introducing an error, and can make the model harder for others to understand and rely on &mdash; proportionality, not maximum sophistication, is the actual goal.",
          note: "Candidates should explicitly reject the idea that 'more complex = better' &mdash; this is a commonly tested misconception in CP2.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why spreadsheets remain the dominant medium for actuarial models, despite the existence of more specialised statistical or programming software.",
          answer:
            "Spreadsheets are flexible, widely available without specialist licensing, and &mdash; critically &mdash; transparent: their formulas are visible and traceable cell-by-cell, allowing a non-technical stakeholder or reviewer to inspect and understand the logic directly, unlike a black-box statistical model. This transparency directly supports the auditability and communication needs central to actuarial modelling work.",
          note: "The strongest answers name transparency/auditability specifically as the key advantage, not just 'spreadsheets are easy to use'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why time management is itself considered a genuine modelling skill within a time-pressured exercise like this one.",
          answer:
            "Building a correct, well-documented, checked model within a fixed time limit requires deliberately balancing thoroughness against the practical reality of limited time &mdash; spending disproportionate time on one aspect (e.g. formatting) at the expense of another (e.g. checking core logic) risks losing marks on both; sensible time allocation across the whole task is itself part of the skill being assessed.",
          note: "This connects the abstract principle of proportionality to a very concrete, practical exam-technique point.",
        },
      ],
    },
    {
      id: "cp2-q2",
      title: "Designing the structure of a new pricing model",
      modules: "Module 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An actuary is starting to build a new spreadsheet model to price a general insurance product. Explain the three broad areas the model's structure should separate, and why this separation matters.",
          answer:
            "The model should separate inputs (assumptions/data), calculations (the model's working logic), and outputs (results/summary) into clearly distinct areas. This separation means changing an assumption requires updating only one cell rather than hunting through scattered formulas, makes the calculation flow easier to follow and check, and makes clear which cells represent final results versus working detail.",
          note: "This is CP2's single most fundamental design principle &mdash; a strong answer names all three areas and explains the benefit of the separation, not just the areas themselves.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what 'hard-coding' means in this context, and why the actuary should avoid it when entering the product's assumed loss ratio into the model.",
          answer:
            "Hard-coding means typing a fixed numeric value directly into a formula rather than referencing a labelled input cell. If the loss ratio assumption is hard-coded into every formula that uses it, updating the assumption later would require finding and editing every one of those formulas individually, risking an inconsistent, partially-updated model if any occurrence is missed.",
          note: "A strong answer explains the <em>consequence</em> of hard-coding (inconsistent updates), not just defines the term.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why consistent cell formatting (e.g. colour-coding inputs versus formulas) is considered good design practice, beyond simple visual tidiness.",
          answer:
            "Consistent formatting lets a reader immediately distinguish, at a glance, which cells are assumptions that can be safely changed versus which are calculated results that shouldn't be manually overwritten &mdash; this directly supports the input/calculation/output separation from part (i), making that structural distinction visually obvious rather than something a reviewer has to work out by inspecting each cell individually.",
          note: "The key point is that formatting serves a functional purpose (communicating structure), not just aesthetic tidiness.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain why planning the model's overall structure before building it is likely to save time overall, even though it delays starting the actual calculations.",
          answer:
            "Planning the input area, calculation flow, and output layout upfront reduces the risk of needing a disruptive, error-prone restructure partway through once the model has already grown complex &mdash; under exam time pressure, a few minutes spent planning can save far more time than it costs by avoiding a costly rebuild later.",
          note: "This is practical exam-technique advice, not just an abstract principle &mdash; candidates should frame the answer around the time trade-off explicitly.",
        },
      ],
    },
    {
      id: "cp2-q3",
      title: "Building formulas to value a set of expected cashflows",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A model projects expected cashflows of &pound;10,000, &pound;12,000 and &pound;15,000 at the end of years 1, 2 and 3 respectively, discounted at 5% per annum. Using the approach a SUMPRODUCT formula would implement, calculate the present value of these cashflows.",
          answer:
            "Discount factors: year 1 $= 1/1.05 = 0.952381$; year 2 $= 1/1.05^2 = 0.907029$; year 3 $= 1/1.05^3 = 0.863838$. Present value $= 10{,}000(0.952381) + 12{,}000(0.907029) + 15{,}000(0.863838) = 9{,}523.81 + 10{,}884.35 + 12{,}957.57 = \\pounds33{,}365.73$.",
          note: "This is exactly the calculation a SUMPRODUCT formula performs in one step (multiplying a cashflow array by a discount-factor array and summing) &mdash; candidates should show the individual products before summing, to demonstrate the underlying logic clearly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why a single SUMPRODUCT formula might be preferred over three separate multiplication cells summed together, and one reason it might NOT be preferred.",
          answer:
            "A SUMPRODUCT formula is more compact and scales easily if the number of cashflow periods changes, without needing to add or remove individual multiplication cells. However, it can be less transparent to a reviewer than seeing each year's discounted cashflow calculated in its own visible, clearly labelled cell, making the calculation harder to check step-by-step.",
          note: "A complete answer weighs both sides &mdash; compactness/scalability versus transparency/auditability &mdash; rather than presenting SUMPRODUCT as an unambiguous improvement.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain the difference between a relative and an absolute cell reference, and why this distinction matters when copying a discount factor formula down a column of years.",
          answer:
            "A relative reference (e.g. A1) shifts automatically when a formula is copied to another cell, while an absolute reference (e.g. <code>$A$1</code>) stays fixed regardless of where it's copied. If the discount rate is held in one fixed input cell, that reference must be made absolute before copying the formula down the column of years, otherwise the reference would shift to point at the wrong (likely empty or incorrect) cell in each new row.",
          note: "This is one of the most commonly tested CP2 formula-technique points &mdash; candidates should give a concrete, specific example of what would go wrong if the reference type were mismatched.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on why it's good practice to test a new formula on a simple, hand-checkable case before applying it across the whole model.",
          answer:
            "Testing on a simple, known case (where the correct answer can be verified independently) gives confidence the formula's underlying logic is structurally correct before it's relied upon and copied across many rows or columns of real data, making it far more efficient to catch a structural error early rather than after it has propagated throughout the model.",
          note: "This connects directly to Module 7's checking material &mdash; validating a formula's logic early is cheaper than discovering the same error only after the model is complete.",
        },
      ],
    },
    {
      id: "cp2-q4",
      title: "Documenting and version-controlling a model in ongoing use",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "A pricing model has been in use for two years, with several actuaries making small adjustments to it over that time. Explain why this history creates a genuine documentation risk.",
          answer:
            "Incremental changes made by different people over time, without a corresponding rebuild or update of the model's original documentation, can leave the documentation out of step with the model's actual current logic &mdash; and documentation that no longer matches the model is arguably worse than no documentation at all, since a reviewer would trust it without realising it's stale.",
          note: "The key insight is that <em>outdated</em> documentation is actively misleading, not merely unhelpful &mdash; a reviewer has no way to know it's stale just from reading it.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what a 'change log' is, and why maintaining one is considered essential good practice for this model.",
          answer:
            "A change log is a record of who changed the model, when, and why, for each significant edit. It provides an audit trail explaining why the model's current state differs from an earlier version, supporting both internal review and any later investigation into an unexpected change in the model's results.",
          note: "A strong answer connects the change log directly to the ability to investigate an unexpected result later, not just describe it as a generic record-keeping habit.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss the risk of saving multiple, informally-named copies of the model (e.g. 'pricing_final', 'pricing_final_v2', 'pricing_final_v2_USE_THIS') instead of using a disciplined version control approach.",
          answer:
            "It becomes unclear which copy is the authoritative, current version, risking that outdated or incorrect results are used, or that a fix applied to one copy isn't reflected in others still in circulation &mdash; a clear naming convention or centralised change log avoids this ambiguity by making the current, correct version unambiguous.",
          note: "This is a very common, easily recognisable real-world failure mode worth describing concretely rather than abstractly.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why documentation is described as something that should be updated whenever the model changes, rather than written once at initial build and left alone.",
          answer:
            "A model's logic evolves as it's adjusted over its two years of use, so documentation frozen at the original build date will increasingly diverge from what the model actually does &mdash; keeping documentation current alongside every change is what preserves its usefulness as an accurate guide for future reviewers.",
          note: "This closing comment should tie back explicitly to the risk identified in part (i) &mdash; documentation discipline is an ongoing commitment, not a one-off task.",
        },
      ],
    },
    {
      id: "cp2-q5",
      title: "Testing a product's sensitivity to the lapse rate assumption",
      modules: "Module 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A model projects renewal premium income for a book of 1,000 policies, each with an annual premium of &pound;500. Calculate the total renewal premium income received if the lapse rate is 10%, 15%, and 20% respectively.",
          answer:
            "At 10% lapse: $1{,}000 \\times (1-0.10) \\times \\pounds500 = 900 \\times \\pounds500 = \\pounds450{,}000$. At 15% lapse: $1{,}000 \\times 0.85 \\times \\pounds500 = 850 \\times \\pounds500 = \\pounds425{,}000$. At 20% lapse: $1{,}000 \\times 0.80 \\times \\pounds500 = 800 \\times \\pounds500 = \\pounds400{,}000$.",
          note: "This is exactly the kind of calculation an Excel data table would automate across a range of lapse rate inputs &mdash; candidates should show each of the three cases clearly rather than only the final figures.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what a 'data table' is in Excel, and why using one is more reliable than manually changing the lapse rate input and re-recording the result three times.",
          answer:
            "A data table is a built-in Excel feature that automatically recalculates a model's output across a range of values for one or two selected input cells, without the user needing to manually change and re-record the input each time. Manual repetition is slower and more prone to error &mdash; e.g. forgetting to reset a previous change, or mis-recording a result &mdash; whereas a data table performs the recalculation and recording automatically and consistently.",
          note: "The key distinction is reliability of the <em>sensitivity-testing process</em> itself, separate from whether the underlying model is correct.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why the &pound;50,000 spread between the best and worst case in part (i) is a useful finding in its own right, beyond the three individual figures.",
          answer:
            "The spread quantifies exactly how much renewal income is at risk from lapse rate uncertainty, giving a decision-maker a clear sense of the assumption's materiality to this result &mdash; a single best-estimate figure alone would convey no information about this underlying sensitivity.",
          note: "This connects to CP1's assumption-uncertainty material &mdash; presenting a range, not just a point estimate, communicates genuine uncertainty honestly.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why testing lapse rate alone, one assumption at a time, might not fully capture the risk to this product's overall profitability.",
          answer:
            "A one-way sensitivity analysis doesn't capture the effect of multiple assumptions moving together (e.g. lapse rate and claims experience both worsening in a recession, which may reinforce each other) &mdash; a scenario analysis varying several related assumptions together would better represent a coherent adverse future than testing lapse rate in isolation.",
          note: "This distinguishes sensitivity analysis (one assumption at a time) from scenario analysis (several assumptions varied together in a coherent way).",
        },
      ],
    },
    {
      id: "cp2-q6",
      title: "Governance and control over a business-critical model",
      modules: "Module 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "A reserving model's output directly feeds an insurer's published financial statements. Explain why this model's governance should be more rigorous than a model used only for a quick internal estimate.",
          answer:
            "The level of control/review applied to a model should reasonably vary with how material or critical its results are &mdash; a model whose output directly affects published financial statements carries far greater consequences if wrong than a low-stakes internal estimate, so proportionality means this model warrants a materially higher standard of review, sign-off, and ongoing validation.",
          note: "This is the proportionality principle applied specifically to model governance intensity, not model complexity.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the 'three lines of defence' model applies to governance of this reserving model, identifying which line the model's day-to-day builder/user belongs to.",
          answer:
            "The model's builder/user is the <em>first</em> line, responsible for building and using the model correctly day-to-day; a separate risk or actuarial oversight function acts as the <em>second</em> line, providing independent review/challenge; internal audit forms the <em>third</em> line, periodically assessing the overall control environment around the model's use.",
          note: "Candidates should correctly place the model's day-to-day user in the first line, not mistake them for 'the risk function' simply because the topic is risk-related.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why independent peer review of this model is a valuable control, even though its builder is an experienced, careful actuary confident it's correct.",
          answer:
            "A model's own author can become blind to their own errors through over-familiarity with the model's logic, since they naturally see what they expect to see rather than testing it fresh; an independent reviewer approaches the model without that familiarity, testing its logic rather than confirming the author's existing expectations &mdash; confidence in one's own work is not the same as verified correctness.",
          note: "The strongest answers explicitly separate <em>confidence</em> from <em>verification</em> &mdash; these are not the same thing, however experienced the model's builder is.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain why the insurer might require periodic re-validation of this model, rather than relying on its original sign-off indefinitely.",
          answer:
            "Assumptions, business context, and the model's own accumulated changes over time can all mean a model validated as fit for purpose at one point no longer remains so &mdash; periodic re-validation confirms the model's continued fitness for purpose on an ongoing basis, rather than treating a single historical sign-off as permanent, unconditional assurance.",
          note: "This connects to the recurring ongoing-review theme found throughout both CP1 and CP2 &mdash; validation, like assumptions, is not a one-off exercise.",
        },
      ],
    },
    {
      id: "cp2-q7",
      title: "Checking a fund accumulation calculation",
      modules: "Module 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A model calculates the accumulated value of a &pound;20,000 investment growing at 6% per annum over 4 years, using a single compound interest formula. As an independent check, recalculate the accumulated value year by year, and confirm it matches the single-formula result of &pound;25,249.54.",
          answer:
            "Year 1: $20{,}000 \\times 1.06 = \\pounds21{,}200.00$. Year 2: $21{,}200 \\times 1.06 = \\pounds22{,}472.00$. Year 3: $22{,}472 \\times 1.06 = \\pounds23{,}820.32$. Year 4: $23{,}820.32 \\times 1.06 = \\pounds25{,}249.54$. This matches the single-formula result of $20{,}000 \\times 1.06^4 = \\pounds25{,}249.54$, confirming the formula is correct.",
          note: "This is a genuine independent recalculation using a <em>different</em> method (year-by-year multiplication versus a single exponent formula) &mdash; both should agree if the model's logic is structurally sound.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why this kind of independent recalculation is a more rigorous check than simply re-reading the original formula a second time.",
          answer:
            "Re-reading the same formula again risks simply confirming the same (possibly flawed) logic a second time, since the reviewer's attention follows the same reasoning path as before. Recalculating via a different method is far more likely to catch an underlying error, since the two approaches don't share the same potential blind spot.",
          note: "The key distinction is between merely <em>reviewing</em> existing logic versus <em>independently</em> verifying the result via a different route.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why a checker should also test the model with an edge-case input, such as a 0% growth rate, rather than only typical inputs like the 6% used above.",
          answer:
            "A formula that behaves correctly for typical, mid-range inputs can still fail or behave unexpectedly at an edge case (e.g. a formula that implicitly assumes growth is always positive), which testing only with a 'normal' 6% rate wouldn't reveal &mdash; edge-case testing can expose a hidden fragility that wouldn't otherwise surface until an unusual real scenario occurs.",
          note: "This tests whether candidates understand checking should go beyond confirming the 'happy path' result alone.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on why the checker should document that this specific check was performed, rather than simply performing it and moving on.",
          answer:
            "Documenting the check provides evidence to a reviewer or later user that appropriate checking has taken place, and specifies exactly what was and wasn't tested &mdash; an unrecorded assumption that 'this must have been checked' is itself a source of risk, since it can't be verified or relied upon later.",
          note: "This connects checking (this module) directly to documentation (Module 4) and sign-off (Module 6) &mdash; a documented check is what a sign-off decision should be based on.",
        },
      ],
    },
    {
      id: "cp2-q8",
      title: "Deciding whether to automate a repetitive modelling task",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An actuary needs to run a pricing model across 50 different scenarios and collate the results into a summary table. Explain why this is a reasonable candidate task for VBA/macro automation.",
          answer:
            "Running the model 50 times and collating results manually would be extremely tedious and error-prone (e.g. forgetting to reset an input, or mis-transcribing a result), whereas this kind of repetitive, mechanical task is exactly where automation adds genuine value &mdash; freeing the actuary from manual repetition while reducing the risk of a transcription error.",
          note: "The key justification is that this is a <em>repetitive</em>, <em>mechanical</em> task, in contrast to core calculation logic that's often better left as transparent, auditable formulas.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why the resulting macro's code should be commented clearly, and why VBA code is generally considered harder to audit than an equivalent spreadsheet formula.",
          answer:
            "VBA code is hidden behind the spreadsheet interface in a separate code editor, requiring a reviewer to actively open and read it and understand programming logic rather than visible, clickable spreadsheet formulas &mdash; clear code comments explain what each section does and why, serving the same purpose code comments serve for spreadsheet documentation, without which the macro becomes a genuine black box even to a technically capable reviewer.",
          note: "A complete answer covers both the <em>audit difficulty</em> of VBA generally and the specific role comments play in mitigating it.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain one risk specific to a macro that pastes calculated values directly over formula cells as part of its automated process.",
          answer:
            "This can silently destroy the underlying formula logic in those cells, replacing a traceable, live calculation with a static, hard-coded value &mdash; exactly the hard-coding problem flagged as poor practice in Module 2, now potentially happening invisibly via automated code rather than a manual edit, and possibly not immediately obvious just from looking at the spreadsheet afterward.",
          note: "This connects VBA-specific risk directly back to Module 2's general hard-coding warning, showing the same underlying risk can arise through a new, less visible mechanism.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the actuary should still test this macro's output using the checking techniques covered elsewhere in this course, rather than trusting it simply because it's automated.",
          answer:
            "Automation doesn't exempt a model from needing genuine verification &mdash; code is just as capable of containing a logical error as a formula is, and VBA's reduced visibility arguably makes thorough checking even more important, not less, since an error hidden inside unreviewed code is harder to spot than one visible in a spreadsheet formula.",
          note: "The key misconception to correct is that 'automated' implies 'more reliable' &mdash; automation changes <em>how</em> a task is performed, not whether its output still needs to be checked.",
        },
      ],
    },
    {
      id: "cp2-q9",
      title: "Cleaning and validating a claims data extract",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "A claims data extract used to set a pricing assumption contains a small number of records with obviously implausible values (e.g. a negative claim amount). Explain a reasonable approach to handling these records.",
          answer:
            "The obviously erroneous records should be investigated where practical to understand their cause, and the treatment applied (e.g. correcting, excluding, or flagging them) should be clearly documented &mdash; silently ignoring or including clearly erroneous records without any record of the decision undermines the resulting assumption's reliability and transparency.",
          note: "The key point is that the <em>decision</em> about how to handle outliers matters and should be documented, not simply that outliers exist and should be removed.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why simply excluding all records with any missing field, without further investigation, could introduce bias into the resulting assumption.",
          answer:
            "If the missingness isn't random (e.g. certain policy types or claim circumstances are systematically more likely to have an incomplete record), excluding those records entirely could skew the remaining data set away from being representative of the true underlying population, biasing any assumption derived from it.",
          note: "This directly echoes CP1's point about missing data adjustments &mdash; exclusion is only safe if the missingness is random, which shouldn't simply be assumed.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why raw imported claims data should be kept on a separate sheet from the model's working calculations, rather than cleaned and used in place.",
          answer:
            "Keeping raw data distinct preserves an unaltered record of the original source data, makes clear which cells are sourced externally versus derived/cleaned within the model, and allows the cleaning steps themselves to be inspected and re-run if needed &mdash; directly supporting the input/calculation/output structural separation that underpins good model design generally.",
          note: "This connects Module 2's structural design principle specifically to data handling &mdash; raw data is effectively another category of 'input' deserving the same clear, protected treatment.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why an unexpectedly extreme result from a sensitivity analysis on this model might actually indicate a data quality issue, rather than a genuine finding about the underlying risk.",
          answer:
            "An implausible or extreme sensitivity result can sometimes be traced back to a data error (e.g. one erroneous record with an extreme value skewing an assumption) rather than a genuine feature of the underlying risk exposure &mdash; sensitivity testing can therefore double as a useful data-quality check, not just a way of exploring genuine risk sensitivity.",
          note: "This connects Module 5's sensitivity analysis material to Module 9's data-quality material, showing the two are complementary techniques.",
        },
      ],
    },
    {
      id: "cp2-q10",
      title: "Writing a report explaining model results to a non-technical client",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An actuary has built a model projecting the financial impact of a proposed change to a pension scheme's benefits, and must now write a report for the scheme's trustees, who have no actuarial training. Explain why the report should avoid unexplained actuarial jargon.",
          answer:
            "A reader without actuarial training won't understand specialist terms without explanation, and unexplained jargon undermines the whole purpose of the report &mdash; communicating results clearly enough that the trustees can understand the findings and use them to make an informed decision about the proposed change.",
          note: "This directly echoes CP1's principle of tailoring communication to the recipient's ability to understand it.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss how the report's structure should be organised to serve these trustees effectively, given they may not read the full document in detail.",
          answer:
            "The report should typically open with a clear, concise summary of the key findings and conclusions, before (or separately from) more detailed supporting explanation &mdash; allowing a busy trustee who only reads the opening summary to still grasp the important message, with fuller detail available for anyone who wants to go further.",
          note: "This connects to the model's own dashboard/summary-sheet design principle (Module 2) &mdash; the same audience-first logic applies to report structure.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why the report should state the limitations of the underlying model clearly, rather than presenting the projected financial impact as a single, certain figure.",
          answer:
            "Presenting results without their genuine limitations could mislead the trustees about how much confidence to place in them, misrepresenting an inherently uncertain, assumption-based projection as if it were a precise, guaranteed figure &mdash; giving false confidence in a figure is a genuine failure of the actuary's professional duty to give honest, useful advice, not merely a stylistic choice.",
          note: "This is a professional obligation, not just good practice &mdash; a strong answer frames it in exactly those terms.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why building the model with a non-technical reader's eventual report in mind can improve the quality of the model itself, not just the report.",
          answer:
            "Knowing the model's results will need to be explained clearly to a non-technical audience encourages the actuary to keep the model's structure, assumptions, and logic clear and well-organised from the outset, rather than allowing avoidable complexity to creep in &mdash; anticipating the need to explain a model to someone else is a strong forcing function for keeping the model itself clear and well-structured.",
          note: "This closing comment ties the whole subject together &mdash; the discipline of communication (CP2.2) reinforces good practice in model-building (CP2.1), rather than the two being unrelated skills.",
        },
      ],
    },
  ],
});

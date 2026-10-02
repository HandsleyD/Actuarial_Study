// CM1 Actuarial Mathematics: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("CM1", {
  modules: [
    {
        "id": "m01",
        "title": "The time value of money",
        "description": "Introduces compound and simple interest, and why money today is worth more than the same amount in the future — the foundation for every CM1 calculation.",
        "cards": [
            {
                "q": "What is the accumulated value of $C$ invested for $n$ years at effective annual rate $i$ under compound interest?",
                "a": "$C(1+i)^n$",
                "explain": "This single formula is the engine behind the entire CM1 syllabus — every later function (annuities, assurances, reserves) is ultimately built by summing or integrating pieces of exactly this expression at different terms $n$. Getting completely fluent with it now pays off for the rest of the course."
            },
            {
                "q": "What is the accumulated value of $C$ invested for $n$ years under simple interest at rate $i$?",
                "a": "$C(1+in)$",
                "explain": "Notice this grows linearly in $n$, unlike compound interest's exponential growth — the gap between the two widens as $n$ increases, which is exactly the content of the next card comparing them directly for short periods."
            },
            {
                "q": "What is the present value of a payment of $C$ due in $n$ years, at effective rate $i$?",
                "a": "$Cv^n$, where $v=\\frac{1}{1+i}$",
                "explain": "This is simply the accumulation formula run in reverse (dividing by $(1+i)^n$ instead of multiplying) — present valuing and accumulating are inverse operations of each other, a relationship made explicit a few cards below."
            },
            {
                "q": "How does compound interest differ from simple interest over multiple periods?",
                "a": "Compound interest earns interest on previously accumulated interest; simple interest only ever earns interest on the original principal.",
                "explain": "This is the conceptual 'why' behind the two formulas above — compounding is what turns a linear growth process into an exponential one, and it's the reason $(1+i)^n$ eventually overtakes $(1+in)$ even though simple interest can briefly be higher for very short periods (see the next card)."
            },
            {
                "q": "What is the 'time value of money'?",
                "a": "The principle that a given sum of money is worth more now than the same sum received in the future, because it can be invested to earn interest.",
                "explain": "This is the plain-English justification for discounting and accumulating existing at all — whenever an exam question asks you to 'explain why' a cashflow needs adjusting for timing, this principle is the one-sentence answer to reach for before diving into formulas."
            },
            {
                "q": "For $n\\lt 1$, does simple or compound interest give a higher accumulated value?",
                "a": "Simple interest gives a slightly higher accumulated value than compound interest for periods less than one year.",
                "explain": "This is a counterintuitive result worth remembering precisely because it's easy to assume compound interest always wins — it's a common short-answer trap. The crossover happens exactly at $n=1$, where both formulas agree exactly (both give $C(1+i)$)."
            },
            {
                "q": "What is the discount factor $v$?",
                "a": "$v = \\frac{1}{1+i}$, the present value of $1$ due in one year's time.",
                "explain": "Once $v$ is defined this way, almost every CM1 formula can be written more compactly in terms of $v^n$ instead of $(1+i)^{-n}$ — it's worth treating $v$ as a first-class quantity in its own right, not just shorthand, since annuity and assurance formulas are built directly from it."
            },
            {
                "q": "If $i = 5\\%$, what is $v$?",
                "a": "$v = \\frac{1}{1.05} \\approx 0.9524$",
                "explain": "A quick sanity check worth internalising: $v$ is always slightly less than 1 for positive $i$, and gets smaller as $i$ increases — useful for spot-checking that a calculated discount factor is at least in the right ballpark."
            },
            {
                "q": "Why is discounting the reverse operation of accumulating?",
                "a": "Accumulating moves a value forward in time by multiplying by $(1+i)^n$; discounting moves it backward by multiplying by $v^n$.",
                "explain": "Since $v = (1+i)^{-1}$, multiplying by $v^n$ is literally dividing by $(1+i)^n$ — the two operations are algebraic inverses of each other, which is why you can always check a discounting calculation by accumulating the answer back up and confirming you recover the original amount."
            },
            {
                "q": "What assumption underlies most CM1 compound interest calculations unless stated otherwise?",
                "a": "That the effective rate of interest is constant over the period considered.",
                "explain": "This 'unless stated otherwise' caveat matters: CM1 does cover time-varying interest (Module 4's force-of-interest integrals), so exam questions sometimes deliberately break this default assumption — always check whether a question gives you a single constant $i$ or a function $\\delta(t)$ before reaching for the standard formulas."
            },
            {
                "q": "What is a 'cashflow'?",
                "a": "A payment or receipt of money at a specified point (or points) in time.",
                "explain": "This simple definition is the basic unit every later CM1 topic manipulates — annuities are just a structured series of cashflows, assurance benefits are a single contingent cashflow, and loan schedules are cashflows split into interest and capital components."
            },
            {
                "q": "Why might an actuary need to compare cashflows occurring at different times?",
                "a": "Because money at different times isn't directly comparable — it must first be accumulated or discounted to a common point in time.",
                "explain": "This is the time value of money principle applied specifically to comparison/decision problems — it's the justification behind every 'which option is better' question in the syllabus (loan offers, investment choices, project appraisal in Module 9), since you literally cannot compare raw undiscounted amounts due at different dates."
            },
            {
                "q": "What does it mean for interest to be 'effective'?",
                "a": "It's the actual amount of interest earned over the full period (e.g. a year), as opposed to a nominal rate that must be converted.",
                "explain": "This sets up the effective-vs-nominal distinction that Module 2 builds out in full — whenever a rate is just quoted as $i$ with no qualification in CM1 notation, it's implicitly the effective annual rate, the single most fundamental rate in the whole syllabus."
            },
            {
                "q": "True or false: doubling the interest rate $i$ exactly doubles the accumulated value $(1+i)^n$ for $n>1$.",
                "a": "False — because of compounding, the relationship is not linear once $n>1$.",
                "explain": "This is worth testing with actual numbers to build intuition: at $n=10$, $i=5\\%$ gives $(1.05)^{10}\\approx1.629$, while $i=10\\%$ gives $(1.10)^{10}\\approx2.594$ — not double 1.629. Only at $n=1$ is the relationship exactly linear in $i$, since $(1+i)^1 = 1+i$."
            },
            {
                "q": "What single quantity lets you move a cashflow both forwards and backwards in time?",
                "a": "The effective rate of interest $i$ (equivalently, $v$).",
                "explain": "This closes out the module by tying every prior card together: $i$ (or $v$) is the one number that fully characterises how to shift value across time, and essentially the entire remaining CM1 syllabus is about applying this one idea to increasingly structured and contingent cashflows."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Interest rates",
        "description": "Covers how interest rates can be expressed in different ways — nominal rates convertible pthly, the force of interest — and how to convert between them.",
        "cards": [
            {
                "q": "What is the relationship between the effective annual rate $i$ and effective annual discount rate $d$?",
                "a": "$d = \\frac{i}{1+i}$, or equivalently $1-d = \\frac{1}{1+i} = v$",
                "explain": "$i$ and $d$ answer the same economic question (how much does money grow/shrink over a year) from two different reference points: $i$ is interest as a fraction of the amount at the <em>start</em> of the year, $d$ is discount as a fraction of the amount at the <em>end</em> — that's why $d \\lt  i$ always, and the identity $1-d=v$ links this module straight back to Module 1's discount factor."
            },
            {
                "q": "What does $i^{(p)}$ represent?",
                "a": "The nominal rate of interest per year, convertible (compounded) $p$ times per year.",
                "explain": "The superscript $(p)$ is notation worth burning into memory since it recurs constantly for the rest of CM1 (annuity functions like $a^{(p)}_{\\overline{n}|}$ in Module 5 reuse exactly this convention) — $i^{(p)}$ itself is <em>not</em> the rate actually earned each sub-period; that's $i^{(p)}/p$, which is where the next card's formula comes from."
            },
            {
                "q": "How do you convert $i^{(p)}$ to the effective annual rate $i$?",
                "a": "$1+i = \\left(1+\\frac{i^{(p)}}{p}\\right)^p$",
                "explain": "This is just Module 1's compounding formula applied over $p$ sub-periods each earning $i^{(p)}/p$ — recognising it as the same compound-interest idea, just with $p$ compounding events packed into one year instead of $n$ compounding events over $n$ years, makes it much easier to remember than treating it as a new formula to memorise from scratch."
            },
            {
                "q": "What is the force of interest $\\delta$?",
                "a": "The instantaneous, continuously-compounded rate of interest, defined so that $1+i = e^{\\delta}$.",
                "explain": "$\\delta$ is what $i^{(p)}$ converges to as compounding becomes infinitely frequent (see the next card) — it's the natural rate to use whenever a problem involves continuous cashflows or continuous compounding, since exponentials integrate and differentiate cleanly, unlike the discrete $(1+i)^n$ form."
            },
            {
                "q": "As $p \\to \\infty$, what does $i^{(p)}$ converge to?",
                "a": "The force of interest $\\delta$.",
                "explain": "This is the limiting case of the compounding-frequency card above: compounding more and more often (daily, then hourly, then continuously) pushes $i^{(p)}$ down toward $\\delta$ from above, while the effective annual rate $i$ itself stays fixed — more frequent compounding at a lower nominal rate can still produce the same effective annual growth."
            },
            {
                "q": "What is $d^{(p)}$?",
                "a": "The nominal rate of discount per year, convertible $p$ times per year.",
                "explain": "This is the discount-rate mirror of $i^{(p)}$, following exactly the same $i$-vs-$d$ relationship as the first card of this module, just at nominal (sub-annual) frequency instead of effective annual — recognising the parallel structure saves having to memorise it as an unrelated new concept."
            },
            {
                "q": "Which is larger for the same effective annual rate: $i$, $i^{(p)}$, or $\\delta$ (for $p>1$)?",
                "a": "$i$ is largest, then $i^{(p)}$ (decreasing as $p$ increases), with $\\delta$ the smallest limiting value.",
                "explain": "This ordering makes sense once you see <em>why</em>: more frequent compounding needs a smaller quoted nominal rate to achieve the same effective annual growth (since compounding itself does more of the work), so $i^{(p)}$ falls monotonically as $p$ rises, bottoming out at $\\delta$ for continuous compounding — a useful sanity check on any calculated $i^{(p)}$ or $\\delta$ value."
            },
            {
                "q": "How do you accumulate $C$ for $n$ years at nominal rate $i^{(p)}$ convertible $p$thly?",
                "a": "$C\\left(1+\\frac{i^{(p)}}{p}\\right)^{pn}$",
                "explain": "This is the general-purpose formula this whole module builds toward — it's Module 1's $C(1+i)^n$ but with $pn$ sub-periods each compounding at rate $i^{(p)}/p$ instead of $n$ periods at rate $i$, so it's worth deriving it mentally from first principles rather than memorising it as a standalone formula."
            },
            {
                "q": "What is the relationship between $\\delta$ and $d$?",
                "a": "$\\delta = -\\ln(1-d)$, equivalently $1-d = e^{-\\delta}$",
                "explain": "Combined with $1+i=e^{\\delta}$ from earlier, this gives a complete picture: $\\delta$ sits as the single 'master rate' from which every other rate in this module ($i$, $d$, $i^{(p)}$, $d^{(p)}$) can be derived, which is why $\\delta$ is often the most convenient variable to work in when a problem mixes several rate types."
            },
            {
                "q": "If the force of interest is constant, how do you find the present value of $1$ due at time $t$?",
                "a": "$v^t = e^{-\\delta t}$",
                "explain": "This is exactly Module 1's discount factor $v^t$, rewritten using $\\delta$ instead of $i$ — it's the constant-force special case of Module 4's more general time-varying formula $\\exp(-\\int_0^t \\delta(s)\\,ds)$, which just reduces to $e^{-\\delta t}$ when $\\delta(s)$ doesn't actually depend on $s$."
            },
            {
                "q": "Why might a bank quote a 'nominal' rather than 'effective' interest rate?",
                "a": "It's a convention for rates compounded more frequently than annually, and can make quoted rates look lower than the true effective rate.",
                "explain": "This is a practical point beyond the exam: since $i^{(p)} \\lt  i$ for $p>1$ (per the ordering card above), a nominal rate always looks smaller than the effective rate it implies — which is exactly why regulators require lenders to also disclose an APR (Module 8), to stop nominal-rate quoting from being misleading."
            },
            {
                "q": "What happens to the accumulated value as compounding frequency $p$ increases, holding $i^{(p)}$ fixed?",
                "a": "The accumulated value increases, approaching continuous compounding (using $\\delta$) in the limit.",
                "explain": "Note the careful phrasing here — this is the <em>opposite</em> experiment to the 'as $p\\to\\infty$' card above: there, $i$ was held fixed and $i^{(p)}$ fell; here, $i^{(p)}$ is held fixed and the accumulated value (hence effective $i$) rises. Keeping straight which quantity is held constant in each scenario is a common source of exam confusion."
            },
            {
                "q": "Express $i$ in terms of $d$.",
                "a": "$i = \\frac{d}{1-d}$",
                "explain": "This is just the first card's identity $d=\\frac{i}{1+i}$ algebraically rearranged to solve for $i$ instead of $d$ — worth being able to do this rearrangement on the fly rather than memorising both directions separately, since exam questions can give you either one and ask for the other."
            },
            {
                "q": "What is the effective annual rate equivalent to a force of interest of $\\delta = 0.05$?",
                "a": "$i = e^{0.05} - 1 \\approx 5.13\\%$",
                "explain": "Notice $i$ (5.13%) is slightly larger than $\\delta$ (5%), consistent with the ordering established earlier in this module ($\\delta$ is the smallest of $i$, $i^{(p)}$, $i$ itself being the effective annual figure) — a quick numerical check like this is a good way to catch an accidental $\\ln$/$\\exp$ mix-up under exam pressure."
            },
            {
                "q": "Why is $\\delta$ particularly convenient for continuous cashflow calculations?",
                "a": "Because integrals of continuously paid cashflows discount/accumulate cleanly using $e^{-\\delta t}$ or $e^{\\delta t}$.",
                "explain": "This is the practical payoff of this whole module for later topics — Module 4's continuous cashflow integral $\\int_0^n \\rho(t)e^{-\\delta t}\\,dt$ and the continuously-paid annuity $\\overline{a}_{\\overline{n}|}$ in Module 5 both lean on exactly this convenience, since $e^{-\\delta t}$ is trivial to integrate while $(1+i)^{-t}$ is comparatively awkward."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Real and money interest rates",
        "description": "Distinguishes 'money' (nominal, cash) interest rates from 'real' (inflation-adjusted) interest rates, and shows how to convert between them.",
        "cards": [
            {
                "q": "What is the difference between a 'money' rate of interest and a 'real' rate of interest?",
                "a": "The money rate reflects actual cash growth; the real rate reflects growth in purchasing power after removing the effect of inflation.",
                "explain": "This is a different kind of distinction from Module 2's rate conversions — those were all about compounding frequency for the <em>same</em> underlying growth; this is about splitting that growth into a 'real' component and an inflation component, which matters whenever what you can actually buy (not just the cash number) is the relevant question."
            },
            {
                "q": "What is the formula linking the money rate $i$, real rate $i'$, and inflation rate $e$?",
                "a": "$1+i = (1+i')(1+e)$",
                "explain": "Structurally this is exactly like combining two consecutive periods of growth (Module 1's chained accumulation factors) — money growth is real growth compounded with inflation growth, which is why it's multiplicative, not additive (see the small-rate approximation card below for when addition is close enough)."
            },
            {
                "q": "If the money rate is $8\\%$ and inflation is $3\\%$, what is the exact real rate?",
                "a": "$\\frac{1.08}{1.03}-1 \\approx 4.85\\%$",
                "explain": "Notice this is a bit less than the naive $8\\%-3\\%=5\\%$ 'approximate' answer — the exact multiplicative formula always gives a slightly lower real rate than simple subtraction when both rates are positive, which is worth checking against the approximation card below to see how good the shortcut is."
            },
            {
                "q": "Why might an investor care more about the real rate of return than the money rate?",
                "a": "The real rate shows how much their purchasing power actually grows, which is what matters for future consumption.",
                "explain": "This is the economic justification for the whole module — a large money return is meaningless if inflation has eaten it all away (see the 'can the real rate be negative' card below for the extreme case), so real rate is the number that actually answers 'am I better off'."
            },
            {
                "q": "How would you find the real yield on an index-linked bond?",
                "a": "Discount the real (inflation-adjusted) cashflows at the real rate of interest, since index-linked payments already move with inflation.",
                "explain": "The key insight: an index-linked bond's payments are automatically inflation-proofed (Module 10 covers this in more detail), so you shouldn't discount them at the money rate the way you would a fixed-coupon bond — consistently using real cashflows with the real rate (or money cashflows with the money rate) avoids double- or zero-counting inflation."
            },
            {
                "q": "What happens to the real rate of interest if money interest rates and inflation rise by the same percentage points?",
                "a": "It stays approximately the same (not exactly, because the relationship is multiplicative not additive).",
                "explain": "This tests whether you really understand the multiplicative formula above rather than just an additive rule of thumb — a small residual change in the real rate does occur even when $i$ and $e$ rise by 'the same amount', because the exact formula divides $(1+i)$ by $(1+e)$, not subtracts $e$ from $i$."
            },
            {
                "q": "Can the real rate of interest be negative even if the money rate is positive?",
                "a": "Yes — if inflation exceeds the money rate of interest.",
                "explain": "This is a real-world-relevant scenario (it happened during high-inflation periods) worth being able to picture concretely: cash sitting in a low-interest account can be growing in money terms while actually losing purchasing power every year, which is precisely why real rates matter more than money rates for long-term saving decisions."
            },
            {
                "q": "In index-linked bond calculations, what typically happens to coupon and redemption payments?",
                "a": "They are increased in line with a specified inflation index between issue and payment.",
                "explain": "This is the mechanism that makes an index-linked bond's <em>real</em> cashflows fixed even though its <em>money</em> cashflows aren't — it directly explains why the 'real yield on an index-linked bond' card above works the way it does, and this concept reappears in Module 10's fuller bond-pricing treatment."
            },
            {
                "q": "Why is estimating future inflation important for pricing index-linked bonds?",
                "a": "Because future coupon/redemption cashflows are uncertain in money terms until the relevant inflation index values are known.",
                "explain": "This highlights a subtlety: even though the <em>real</em> cashflow is fixed by design, the actual <em>money</em> amount you'll receive depends on inflation between now and each payment date, which is still unknown — pricing therefore requires either working entirely in real terms, or making an explicit inflation assumption to project money cashflows."
            },
            {
                "q": "What does it mean if the real rate of interest is exactly zero?",
                "a": "Money grows at exactly the rate of inflation — no gain or loss in purchasing power.",
                "explain": "This is the knife-edge case between the 'real return' and 'negative real return' scenarios above — useful as a quick reference point: whenever $i = e$ (approximately, or check the exact formula), the investor is treading water in real terms, neither gaining nor losing ground."
            },
            {
                "q": "How is the money rate of interest related to real rate and inflation using a small-rate approximation?",
                "a": "$i \\approx i' + e$ (ignoring the small cross term $i' \\times e$).",
                "explain": "This comes from expanding $(1+i')(1+e) = 1+i'+e+i'e$ and dropping the tiny cross-term $i'e$ when both rates are small — it's a useful mental-arithmetic shortcut, but always remember it's an approximation; use the exact multiplicative formula when precision matters (as in the worked example above, where 5% and 4.85% differ enough to matter)."
            },
            {
                "q": "What data would you need to calculate a realised real rate of return over a past period?",
                "a": "The money rate of return actually achieved, and the actual inflation rate over that period.",
                "explain": "This is the same formula as always, just applied retrospectively with observed (rather than assumed/forecast) figures — worth noting that a realised real return calculation needs <em>both</em> numbers measured over the exact same historical period for the comparison to be meaningful."
            },
            {
                "q": "Give one reason actual and expected inflation might differ.",
                "a": "Unexpected economic shocks, changes in monetary policy, or unanticipated supply/demand shifts in the economy.",
                "explain": "This connects directly to CB2's macroeconomics content (Modules 10, 15, 19 there) — CM1 takes inflation as an input to interest-rate calculations, while CB2 explains what actually drives it; worth remembering both subjects are describing the same real-world phenomenon from different angles."
            },
            {
                "q": "Why do pension schemes often care about real rates of interest?",
                "a": "Because future pension liabilities are often linked to (or intended to keep pace with) inflation/salary growth.",
                "explain": "This is a preview of why the whole CM1 syllabus eventually matters professionally: a pension promise to pay a real, inflation-protected income means the scheme's assets need to earn a real (not just nominal) return to meet that promise, tying this module directly to the reserving and valuation work later in the course."
            },
            {
                "q": "If money rate $i=6\\%$ and real rate $i'=6\\%$, what must inflation be?",
                "a": "$0\\%$ — no inflation.",
                "explain": "A direct application of $1+i=(1+i')(1+e)$: if $i=i'$, then $(1+e)$ must equal 1, so $e=0$ — a good one-line check to confirm you can manipulate the formula in any direction (solving for $i$, $i'$, or $e$ given the other two), not just the 'find the real rate' direction most examples default to."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Discounting and accumulating",
        "description": "Applies the concepts of interest rates to actual cashflow streams — evaluating the present or accumulated value of one-off or multiple non-annuity payments.",
        "cards": [
            {
                "q": "How do you find the present value of several distinct payments made at different future times?",
                "a": "Discount each payment to today separately, using the appropriate discount factor for its own timing, then sum.",
                "explain": "This 'discount each piece separately, then add' approach is the master technique that everything else in this module (and later, annuity formulas in Module 5) is just a shortcut for — an annuity formula is nothing more than this same summing process done algebraically for a whole regular series of payments at once, instead of one at a time."
            },
            {
                "q": "What is meant by 'present value' of a cashflow?",
                "a": "The value today that is equivalent (under a given interest rate) to a cashflow or set of cashflows occurring at other points in time.",
                "explain": "The word 'equivalent' is doing real work here: present value isn't a vague notion of 'worth' — it's precisely defined so that the present value amount, invested today at the stated rate, would exactly reproduce the original cashflow(s) when accumulated forward, which is why equations of value (a card below) can equate two different cashflow streams' present values."
            },
            {
                "q": "How would you find the accumulated value at time $n$ of a set of payments made at various times before $n$?",
                "a": "Accumulate each payment separately from its own payment date to time $n$, then sum the results.",
                "explain": "This is the mirror-image operation to the present-value card above (accumulating forward instead of discounting backward) — note both techniques ultimately answer the same underlying question (what is this set of cashflows worth at one common point in time), just referenced to different dates."
            },
            {
                "q": "If a rate of interest varies over time, how do you accumulate $1$ from time $0$ to time $n$?",
                "a": "Multiply together the accumulation factors for each sub-period of constant (or known) interest rate.",
                "explain": "This is the discrete-time version of the integral formula two cards below — chaining accumulation factors together for each sub-period is exactly how you'd handle, say, a savings account whose rate changes each year: accumulate at year 1's rate, then year 2's rate, and so on, multiplying the factors together."
            },
            {
                "q": "What is the present value at time 0 of $1$ due at time $t$ using a time-varying force of interest $\\delta(s)$?",
                "a": "$\\exp\\left(-\\int_0^t \\delta(s)\\,ds\\right)$",
                "explain": "This generalises Module 2's constant-force formula $v^t=e^{-\\delta t}$ to the case where $\\delta$ itself changes over time — the integral $\\int_0^t \\delta(s)\\,ds$ is just 'total accumulated force over the period', which collapses back down to the simple $\\delta t$ when $\\delta$ happens to be constant, confirming the two formulas are consistent."
            },
            {
                "q": "What is the accumulated value at time $t$ of $1$ invested at time $0$ under a time-varying force of interest?",
                "a": "$\\exp\\left(\\int_0^t \\delta(s)\\,ds\\right)$",
                "explain": "This is simply the reciprocal of the present-value formula above (positive exponent instead of negative), following the same accumulate/discount inverse relationship established back in Module 1 — recognise the pattern rather than memorising each sign separately."
            },
            {
                "q": "How do you handle a payment that occurs exactly 'now' (time 0) when finding present value?",
                "a": "It needs no discounting — its present value equals its face amount.",
                "explain": "This sounds trivial but is a common source of small exam errors, especially in annuity-due setups (Module 5) where the first payment is at time 0 — remembering that $v^0=1$ (nothing to discount) is what correctly distinguishes an annuity-due's first term from an annuity-immediate's."
            },
            {
                "q": "What's the general approach to comparing two different cashflow schedules?",
                "a": "Discount (or accumulate) both to the same point in time using a common interest rate, then compare the resulting values.",
                "explain": "This is the practical procedure behind every 'which loan/investment option is better' exam question — it's worth explicitly stating this two-step process (same valuation date, same rate) in a written answer, since comparing values discounted to different dates or at different rates is a meaningless comparison that examiners specifically probe for."
            },
            {
                "q": "How would you find the present value of a continuously paid cashflow of rate $\\rho(t)$ per unit time, from 0 to $n$, at constant force of interest $\\delta$?",
                "a": "$\\int_0^n \\rho(t)e^{-\\delta t}\\,dt$",
                "explain": "This is the continuous-payment generalisation of the 'sum of discounted payments' idea from the top of this module — where discrete payments get summed, a continuous payment <em>stream</em> $\\rho(t)$ gets integrated, each instant's payment $\\rho(t)\\,dt$ discounted by $e^{-\\delta t}$ exactly as a lump sum would be."
            },
            {
                "q": "What does 'equation of value' mean in this context?",
                "a": "An equation stating that the present value of money received equals the present value of money paid, at a given rate of interest.",
                "explain": "This concept gets a full module to itself (Module 7), but it's really just this section's present-value techniques applied to <em>two</em> cashflow streams simultaneously and set equal — loan pricing, project appraisal (Module 9) and premium calculations (Module 17) are all specific applications of exactly this one idea."
            },
            {
                "q": "If interest rates are expected to change in the future, why can't you use one accumulation factor for the whole period?",
                "a": "Because the accumulation must reflect the actual (or assumed) rate applying in each distinct sub-period.",
                "explain": "This is the same point as the chained-accumulation-factors card above, restated as a 'why not' — using a single blended rate for the whole period would silently assume that rate applied throughout, which is wrong whenever the problem explicitly gives you different rates for different sub-periods (e.g. Module 11's term structure)."
            },
            {
                "q": "Why is choosing a consistent valuation date important when comparing cashflows?",
                "a": "Because present/accumulated values depend on the timing reference point — comparing values discounted to different dates isn't meaningful.",
                "explain": "This restates the comparison-approach card above as an explicit warning — examiners sometimes set a trap where two cashflow streams are naturally quoted 'as at' different dates, and the candidate who forgets to bring both to the same date before comparing gets a wrong (and often plausible-looking) answer."
            },
            {
                "q": "What's the present value of a single payment of $500$ in 3 years at $i=4\\%$?",
                "a": "$500v^3 = 500(1.04)^{-3} \\approx 444.5$",
                "explain": "A clean worked example of Module 1's core formula in action — useful as a template: identify the payment amount, the term, and the rate, then apply $Cv^n$ directly, which is the building block every more complicated cashflow-schedule question in this module reduces to."
            },
            {
                "q": "How would a negative cashflow (a payment out) be treated in a present value calculation?",
                "a": "Included with a negative sign, so it reduces the total present value.",
                "explain": "This sign convention is what makes 'net present value' calculations (Module 9) work cleanly — outflows and inflows can simply be summed together with consistent signs rather than tracked as two separate totals, which is both computationally simpler and less error-prone."
            },
            {
                "q": "Why might actuaries discount cashflows using a different rate for different risk profiles?",
                "a": "Riskier or less certain cashflows may warrant a different (often higher) discount rate to reflect that risk.",
                "explain": "This previews the risk discount rate concept used properly in Module 24's profit testing — the core idea is that a guaranteed cashflow and an uncertain one of the same expected amount aren't actually worth the same today, and using a higher rate for the riskier stream is one standard way to build that difference into the valuation."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Level annuities",
        "description": "Introduces the standard annuity functions — level payments made annually in arrears ($a_{\\overline{n}|}$) or in advance ($\\ddot{a}_{\\overline{n}|}$) — and their accumulated-value equivalents.",
        "cards": [
            {
                "q": "What does $a_{\\overline{n}|}$ represent?",
                "a": "The present value of an annuity of $1$ per year, paid annually in arrears for $n$ years.",
                "explain": "This one symbol will appear in almost every remaining CM1 module, from loan repayments (Module 8) to premium equations (Module 17) to profit testing (Module 24) — 'arrears' (end of year) is the default annuity-immediate convention, worth contrasting immediately with the annuity-due version in the next card."
            },
            {
                "q": "What is the formula for $a_{\\overline{n}|}$ in terms of $v$ and $i$?",
                "a": "$a_{\\overline{n}|} = \\frac{1-v^n}{i}$",
                "explain": "This isn't a formula to just memorise — it falls straight out of Module 4's 'sum of discounted payments' approach applied to a geometric series ($v+v^2+\\dots+v^n$), and being able to re-derive it from the geometric series sum formula is a reliable way to recover it if memory fails under exam pressure."
            },
            {
                "q": "What does $\\ddot{a}_{\\overline{n}|}$ represent?",
                "a": "The present value of an annuity of $1$ per year, paid annually in advance for $n$ years.",
                "explain": "The dots over the $a$ signal 'in advance' throughout CM1 notation — this annuity-due convention is the default one for <em>life</em> annuities specifically (Module 14 explains why: it avoids paying for a period after someone may have died), so get comfortable with the dotted notation early."
            },
            {
                "q": "How is $\\ddot{a}_{\\overline{n}|}$ related to $a_{\\overline{n}|}$?",
                "a": "$\\ddot{a}_{\\overline{n}|} = (1+i)\\,a_{\\overline{n}|} = \\frac{1-v^n}{d}$",
                "explain": "The $(1+i)$ multiplier makes intuitive sense: an annuity-due is literally the same set of payments as an annuity-immediate, just shifted one year earlier, so its present value is the immediate annuity's value accumulated forward by one year — and swapping $i$ for $d$ in the denominator is exactly Module 2's $i$-to-$d$ conversion at work."
            },
            {
                "q": "What does $s_{\\overline{n}|}$ represent?",
                "a": "The accumulated value at time $n$ of an annuity of $1$ per year paid annually in arrears for $n$ years.",
                "explain": "This is the same annuity as $a_{\\overline{n}|}$, just valued at the <em>end</em> of the term instead of the start — $s$ for 'accumulated', $a$ for 'present value', a naming convention that carries through every annuity variant in this module."
            },
            {
                "q": "What is the formula for $s_{\\overline{n}|}$?",
                "a": "$s_{\\overline{n}|} = \\frac{(1+i)^n-1}{i}$",
                "explain": "You can get this directly from $a_{\\overline{n}|}$ by multiplying by $(1+i)^n$ (accumulating the present value forward to time $n$) — recognising $s_{\\overline{n}|} = (1+i)^n a_{\\overline{n}|}$ means you only really need to remember <em>one</em> annuity formula and derive the rest via these accumulation relationships."
            },
            {
                "q": "What does $\\ddot{s}_{\\overline{n}|}$ represent, and how does it relate to $s_{\\overline{n}|}$?",
                "a": "The accumulated value at time $n$ of an annuity-due; $\\ddot{s}_{\\overline{n}|} = (1+i)\\,s_{\\overline{n}|}$",
                "explain": "Same $(1+i)$ relationship as the present-value pair above, just applied to the accumulated versions — by this point in the module there are really only two independent facts to know (the $a_{\\overline{n}|}$ formula, and the $(1+i)$ due/immediate and $(1+i)^n$ present/accumulated relationships); everything else follows mechanically."
            },
            {
                "q": "What is a 'perpetuity', and what is the present value of a level perpetuity of $1$ per year in arrears?",
                "a": "An annuity with no end date; its present value is $a_{\\overline{\\infty}|} = \\frac{1}{i}$",
                "explain": "This falls out of $a_{\\overline{n}|}=\\frac{1-v^n}{i}$ by letting $n\\to\\infty$: since $0\\lt v\\lt 1$, $v^n\\to0$, leaving $\\frac1i$ — a useful sanity check is that a perpetuity's value must be finite despite infinite payments, precisely because each payment is discounted by an ever-shrinking factor."
            },
            {
                "q": "What does $_{m|}a_{\\overline{n}|}$ represent?",
                "a": "A deferred annuity — an annuity of $1$ per year in arrears, for $n$ years, starting $m$ years from now.",
                "explain": "This is the annuity version of the 'payment isn't due until later' idea — the same deferment concept reappears constantly in the life contingencies modules (Module 14's deferred life annuities), so it's worth mastering the plain interest-only version here first."
            },
            {
                "q": "How do you calculate $_{m|}a_{\\overline{n}|}$ in terms of standard annuity functions?",
                "a": "$_{m|}a_{\\overline{n}|} = v^m \\, a_{\\overline{n}|}$",
                "explain": "The logic: value the $n$-year annuity as if it started today (getting $a_{\\overline{n}|}$), then discount that whole present value back by $m$ more years since it doesn't actually start until then — this 'value it as if it started now, then discount the deferment period' technique is a general trick worth reusing throughout the syllabus."
            },
            {
                "q": "If payments are made $p$ times per year, what symbol is used for the present value of the annuity-immediate?",
                "a": "$a_{\\overline{n}|}^{(p)}$",
                "explain": "This links Module 2's compounding-frequency notation directly into the annuity world — the same superscript $(p)$ that meant 'convertible $p$ times a year' for interest rates now means 'paid $p$ times a year' for annuities, a deliberate notational parallel worth recognising rather than treating as coincidence."
            },
            {
                "q": "What is the relationship between $a_{\\overline{n}|}^{(p)}$ and $a_{\\overline{n}|}$ (in terms of $i$ and $i^{(p)}$)?",
                "a": "$a_{\\overline{n}|}^{(p)} = \\frac{i}{i^{(p)}}\\,a_{\\overline{n}|}$",
                "explain": "The ratio $\\frac{i}{i^{(p)}}$ is always slightly greater than 1 (since $i^{(p)}\\lt i$ from Module 2), which makes sense: paying the same total amount per year in smaller, more frequent instalments means receiving money slightly sooner on average, so it's worth slightly more — confirms $a_{\\overline{n}|}^{(p)} > a_{\\overline{n}|}$ for $p>1$."
            },
            {
                "q": "What is the present value of a continuously paid level annuity of $1$ per year for $n$ years, $\\overline{a}_{\\overline{n}|}$?",
                "a": "$\\overline{a}_{\\overline{n}|} = \\frac{1-v^n}{\\delta}$",
                "explain": "This is the $p\\to\\infty$ limit of $a_{\\overline{n}|}^{(p)}$ — exactly as $i^{(p)}\\to\\delta$ in Module 2, here the payment frequency becomes continuous and $i^{(p)}$ in the denominator is replaced by $\\delta$, giving the cleanest of all the annuity formulas thanks to $\\delta$'s exponential-friendly properties."
            },
            {
                "q": "Why is $\\ddot{a}_{\\overline{n}|}$ always greater than $a_{\\overline{n}|}$ for $i>0$?",
                "a": "Because each payment under the annuity-due is received one period earlier, so it's worth more in present value terms.",
                "explain": "This is the same 'sooner is worth more' logic underlying every present-value comparison in CM1 — it's worth being able to state this intuition in words, not just quote the $(1+i)$ formula, since 'explain why' questions specifically want the reasoning, not just the algebra."
            },
            {
                "q": "What is the present value of an annuity-immediate of $1$ per year for 10 years, if $i = 5\\%$?",
                "a": "$a_{\\overline{10}|} = \\frac{1-1.05^{-10}}{0.05} \\approx 7.722$",
                "explain": "A good number to keep as a mental benchmark: roughly 7.7 years' worth of value from 10 years of £1 payments, illustrating how discounting meaningfully shrinks the value of an annuity below its simple undiscounted total (£10) even at a modest 5% rate — useful for spot-checking whether a calculated annuity value is in a sensible range."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Increasing annuities",
        "description": "Extends level annuities to payments that increase (or decrease) by a constant amount each period, giving the $(Ia)$ and $(I\\ddot{a})$ family of functions.",
        "cards": [
            {
                "q": "What does $(Ia)_{\\overline{n}|}$ represent?",
                "a": "The present value of an annuity paid annually in arrears for $n$ years, where the payment is $1$ in year 1, $2$ in year 2, ..., $n$ in year $n$.",
                "explain": "The capital $I$ prefix signals 'increasing' throughout this module's notation — note this is arithmetically increasing (by a constant amount each year), which is a fundamentally different (and much more common in this syllabus) structure from geometric growth, flagged explicitly in a card near the end of this module."
            },
            {
                "q": "What is the formula for $(Ia)_{\\overline{n}|}$?",
                "a": "$(Ia)_{\\overline{n}|} = \\frac{\\ddot{a}_{\\overline{n}|} - nv^n}{i}$",
                "explain": "This formula is usually derived (not memorised) using the 'sum of level annuities' trick: an increasing annuity paying $1,2,3,\\dots,n$ can be seen as $n$ overlapping level annuities layered on top of each other — knowing this derivation trick is more valuable than rote memorisation, since it lets you rebuild the formula if you forget it."
            },
            {
                "q": "What does $(I\\ddot{a})_{\\overline{n}|}$ represent, and how does it relate to $(Ia)_{\\overline{n}|}$?",
                "a": "The increasing annuity-due equivalent; $(I\\ddot{a})_{\\overline{n}|} = (1+i)(Ia)_{\\overline{n}|}$",
                "explain": "Same due/immediate $(1+i)$ relationship you already know from Module 5's level annuities — the dot goes on the $a$ exactly as before, and the increasing structure doesn't change how the due/immediate conversion works at all."
            },
            {
                "q": "What does $(Da)_{\\overline{n}|}$ represent?",
                "a": "A decreasing annuity: payments of $n$ in year 1, $n-1$ in year 2, ..., down to $1$ in year $n$, paid in arrears.",
                "explain": "Notice the decreasing annuity's payments are the increasing annuity's payments read backwards (reversed order) — this mirror-image relationship is exactly what produces the elegant identity in the next card, linking $(Ia)$ and $(Da)$ together."
            },
            {
                "q": "What is the formula for $(Da)_{\\overline{n}|}$?",
                "a": "$(Da)_{\\overline{n}|} = \\frac{n - a_{\\overline{n}|}}{i}$",
                "explain": "There's a clean identity worth knowing alongside this: $(Ia)_{\\overline{n}|} + (Da)_{\\overline{n}|} = (n+1)a_{\\overline{n}|}$, since adding the increasing and decreasing payment streams together at each year gives a constant $(n+1)$ every year — a useful cross-check on both formulas at once."
            },
            {
                "q": "What does $(I\\overline{a})_{\\overline{n}|}$ represent?",
                "a": "A continuously-increasing, continuously-paid annuity, where the payment rate at time $t$ is $t$ per year.",
                "explain": "The bar (continuous payment) and the capital $I$ (increasing) combine here exactly as you'd expect from the notation conventions built up in Modules 2 and 5 — this is the continuous-time limit of the discrete increasing annuity, valued by integrating $t\\cdot e^{-\\delta t}$ rather than summing."
            },
            {
                "q": "What is a common real-world use for increasing annuity functions?",
                "a": "Modelling salary-linked or inflation-linked cashflows that step up by a fixed monetary amount each year, such as certain pension or loan structures.",
                "explain": "This is the practical payoff of the whole module — CM1's increasing annuities reappear later valuing increasing sums assured (Module 13) and salary-related benefits, so the algebra learned here directly supports real product features rather than being an abstract exercise."
            },
            {
                "q": "What is $(I\\ddot{a})_{\\overline{\\infty}|}$, the present value of a perpetuity increasing by $1$ each year, paid in advance?",
                "a": "$(I\\ddot{a})_{\\overline{\\infty}|} = \\frac{1}{d^2}$",
                "explain": "This is the increasing-annuity analogue of Module 5's level perpetuity ($a_{\\overline{\\infty}|}=\\frac1i$) — letting $n\\to\\infty$ in the increasing-annuity-due formula and simplifying (the $nv^n$ term vanishes, same reasoning as the level perpetuity case) produces this clean $\\frac{1}{d^2}$ result."
            },
            {
                "q": "How would you value an annuity that increases by a constant monetary amount each year, but is paid continuously?",
                "a": "Using the continuously-increasing, continuously-paid annuity function, integrating the increasing payment rate against the discount factor.",
                "explain": "Watch for a common trap in mixed-payment-style questions: 'increases every year' but 'paid continuously' means the payment <em>rate</em> is a step function that jumps once a year while being paid continuously within each year — this is subtly different from $(I\\overline{a})_{\\overline{n}|}$'s smoothly increasing rate, and needs its own careful setup."
            },
            {
                "q": "What is the accumulated value equivalent of $(Ia)_{\\overline{n}|}$, denoted $(Is)_{\\overline{n}|}$?",
                "a": "$(Is)_{\\overline{n}|} = (1+i)^n (Ia)_{\\overline{n}|}$",
                "explain": "Same present-to-accumulated relationship as everywhere else in this module and Module 5 — multiply by $(1+i)^n$ to move from a value at time 0 to a value at time $n$, regardless of how complicated the underlying payment pattern is."
            },
            {
                "q": "Why can't you just multiply the level annuity value by the average payment to value an increasing annuity?",
                "a": "Because each payment is discounted differently depending on when it occurs, so timing and magnitude interact — a simple average ignores this.",
                "explain": "This is worth internalising as a general principle, not just for increasing annuities: present value is <em>not</em> linear in a simple averaging sense across time, because later (larger) payments here also happen to be more heavily discounted — which is exactly why the correct formula needs the $nv^n$ correction term, not just $n\\times$(average payment)$\\times a_{\\overline{n}|}/n$."
            },
            {
                "q": "If payments increase geometrically rather than arithmetically, can you still use $(Ia)_{\\overline{n}|}$?",
                "a": "No — a geometrically increasing annuity needs a different approach (effectively discounting at a modified net rate), not the arithmetic increasing annuity formula.",
                "explain": "This is an important distinction to flag for yourself: a geometrically growing payment stream (growing by a fixed <em>percentage</em> each year, like inflation-linked increases) can instead be valued as a level annuity at an adjusted ('net of growth') discount rate — a completely different technique from the $(Ia)$ family covered in this module."
            },
            {
                "q": "What does $n$ represent in $(Ia)_{\\overline{n}|} = \\frac{\\ddot{a}_{\\overline{n}|}-nv^n}{i}$?",
                "a": "Both the number of years the annuity runs for, and the final (largest) payment amount.",
                "explain": "This double role of $n$ is a common source of confusion when adapting the formula to a scaled example (like the £100/£200/£300 card below) — always double check whether the question's payment pattern actually reaches exactly $n$ in the final year of an $n$-year term before applying the formula directly."
            },
            {
                "q": "How would you value a decreasing annuity that pays continuously and decreases continuously?",
                "a": "Using $(D\\overline{a})_{\\overline{n}|}$, the continuous decreasing annuity function, found by integration.",
                "explain": "This closes out the full family of notation built up in this module: combine any of {increasing $I$, decreasing $D$} with any of {discrete arrears, discrete advance (dot), continuous (bar)} and you get one of these functions — recognising the systematic notation pattern is far more useful than memorising each combination individually."
            },
            {
                "q": "What is the present value of an annuity paying 100 in year 1, 200 in year 2, and 300 in year 3 (arrears), at rate $i$?",
                "a": "$100\\,(Ia)_{\\overline{3}|}$ at rate $i$",
                "explain": "This is a good template for recognising increasing-annuity questions in disguise: whenever payments step up by a <em>constant</em> amount each year (here, £100 each time), factor out that constant to reveal a standard $(Ia)_{\\overline{n}|}$ underneath — 100, 200, 300 is just $100\\times(1,2,3)$, the exact pattern $(Ia)_{\\overline{3}|}$ was built for."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Equations of value",
        "description": "Formalises the 'equation of value' — setting the present value of money received equal to the present value of money paid — and the conditions needed for it to have a unique, meaningful solution.",
        "cards": [
            {
                "q": "What is an 'equation of value'?",
                "a": "An equation setting the present value of a series of payments (or receipts) equal to the present value of another series, at an unknown or specified rate of interest.",
                "explain": "This formalises the concept first previewed in Module 4 — note the phrase 'unknown OR specified': sometimes you're given $i$ and asked to check the equation balances (e.g. verifying a bond price), and sometimes $i$ itself is the unknown you're solving for (e.g. finding a yield), which is the harder and more heavily examined case this module focuses on."
            },
            {
                "q": "What two conditions are typically required for an equation of value to have a unique solution for $i$?",
                "a": "Payments in and payments out must each occur at least once, and the net cashflow's sign should change only once over time.",
                "explain": "Both conditions matter for different reasons: without at least one payment each way there's no meaningful 'rate of exchange' to solve for at all, and without a single sign change the underlying present-value function can cross zero more than once, breaking uniqueness — see the very next card for what happens when that second condition fails."
            },
            {
                "q": "What might happen if an equation of value has multiple sign changes in the net cashflow?",
                "a": "There could be more than one mathematically valid solution for the interest rate (multiple roots), making the answer ambiguous.",
                "explain": "This is an important practical warning, not just a theoretical curiosity — it directly explains the 'give one weakness of using IRR' card in Module 9's project appraisal content: a project with cashflows that switch sign more than once (e.g. outflow, then inflow, then a further outflow) can have two or more valid IRRs, none of which is uniquely 'the' answer."
            },
            {
                "q": "How is an equation of value typically solved when it can't be solved algebraically?",
                "a": "By numerical/iterative methods, such as linear interpolation between two trial rates.",
                "explain": "Most real equations of value (more than one or two cashflows) have no clean algebraic solution for $i$ — accept that iteration is the normal, expected method here, not a fallback for when you 'can't do the algebra'; linear interpolation (detailed in the cards below) is the standard exam technique for this."
            },
            {
                "q": "What does it mean for a project or loan to have an 'exact' solution for the equation of value?",
                "a": "There's a single, well-defined rate of interest at which the present value of inflows equals the present value of outflows.",
                "explain": "This is just restating the uniqueness condition from earlier in different words — worth noting that 'exact' here refers to the solution being unique and well-defined, not to whether it can be found algebraically in closed form (which, per the card above, it usually can't)."
            },
            {
                "q": "Why might a loan have both an initial payment received and periodic repayments made?",
                "a": "The lender pays out the loan amount up front (a receipt from the borrower's perspective) and receives repayments afterwards.",
                "explain": "This is a concrete illustration of exactly the two-way cashflow structure needed for a meaningful equation of value — note the deliberate perspective-flip in the answer (a payment <em>out</em> for the lender is a receipt IN for the borrower); always fix whose perspective you're valuing from before setting up the equation."
            },
            {
                "q": "If a project has 'one change of sign' in its net cashflow, what does that tell you about solving its equation of value?",
                "a": "A single, well-defined internal rate of return (root) is guaranteed to exist under standard conditions.",
                "explain": "This restates the uniqueness condition as a positive guarantee rather than a warning — most textbook loan and simple investment examples are deliberately built with exactly one sign change (money out once, then money in repeatedly, or vice versa) specifically so this guarantee applies cleanly."
            },
            {
                "q": "What's the general approach to setting up an equation of value for a loan repaid by instalments?",
                "a": "Set the loan amount (present value at outset) equal to the present value of all the repayment instalments, at the loan's interest rate.",
                "explain": "This is precisely the formula behind Module 8's $X=\\frac{L}{a_{\\overline{n}|}}$ for finding a level instalment amount — that formula is nothing more than this general equation-of-value setup, rearranged to solve for the unknown instalment $X$ instead of the unknown rate $i$."
            },
            {
                "q": "Give an example of 'payment is uncertain' in an equation of value context.",
                "a": "A cashflow that depends on a future event, e.g. a payment only made if someone survives to a certain age.",
                "explain": "This is the bridge from pure interest theory (Modules 1-11) into the life contingencies half of CM1 (Modules 12 onward) — every life assurance and annuity function later in the course is really an equation of value where the 'uncertain payment' card here has been made precise using life-table probabilities."
            },
            {
                "q": "What is linear interpolation used for when solving an equation of value?",
                "a": "Approximating the root (interest rate) by assuming the net present value function is approximately linear between two trial rates.",
                "explain": "The approximation is only as good as the assumption that NPV is roughly a straight line between your two trial rates — choosing trial rates reasonably close to the true root (so the curve doesn't bend much between them) gives a more accurate estimate than picking two widely spaced rates."
            },
            {
                "q": "Why is it useful to check the sign pattern of a cashflow before solving for a yield?",
                "a": "To ensure a unique and meaningful solution exists, avoiding a misleading or ambiguous result.",
                "explain": "This is good exam practice worth adopting as a habit: before diving into interpolation arithmetic, a quick glance at whether the net cashflow changes sign exactly once confirms you're not about to chase one of potentially several roots without realising it."
            },
            {
                "q": "In an equation of value with payment or receipt 'certain', what does 'certain' mean?",
                "a": "The amount and timing of the payment are known with certainty, not contingent on any future uncertain event.",
                "explain": "This is the direct contrast to the 'uncertain payment' card above — everything in Modules 1-11 deals with certain cashflows; the moment a cashflow becomes contingent on survival/death, you're doing the life-contingent version of exactly the same equation-of-value idea, covered from Module 12 onward."
            },
            {
                "q": "What's a practical example of an equation of value used to find an unknown interest rate?",
                "a": "Finding the annual percentage rate (APR) implied by a loan's fixed repayment schedule.",
                "explain": "This directly previews Module 8's APR card — the APR IS the solved-for $i$ in an equation of value where the amount lent equals the present value of all scheduled repayments, exactly the technique this whole module has been building toward."
            },
            {
                "q": "If two trial rates give present values of $+50$ and $-30$, roughly how would linear interpolation estimate the root?",
                "a": "Weight the two trial rates in proportion to the sizes of $50$ and $30$ (closer to the trial rate giving the smaller absolute present value)."
                ,"explain": "Concretely: estimated root $\\approx i_1 + (i_2-i_1)\\times\\frac{50}{50+30}$, where $i_1$ gave $+50$ and $i_2$ gave $-30$ — note the root sits closer to $i_2$ (the smaller NPV magnitude, $30$), not further from it, since a smaller present value means that trial rate was already closer to making NPV exactly zero."
            },
            {
                "q": "Can an equation of value be used with more than two parties/cashflow streams?",
                "a": "Yes — any number of cashflow streams can be combined into a single equation of value, as long as they're all expressed at a common valuation date and rate.",
                "explain": "This closes the loop back to Module 4's comparison-approach card ('discount both to the same point in time using a common rate') — nothing about equations of value is limited to exactly two streams; complex multi-party transactions (e.g. syndicated arrangements) reduce to the same technique, just with more terms summed on each side."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Loan schedules",
        "description": "Shows how to split each loan repayment into its capital and interest components, and build a full schedule of outstanding loan balances over time.",
        "cards": [
            {
                "q": "In a loan repayment schedule, what two components does each instalment split into?",
                "a": "Interest (on the outstanding balance) and capital repayment (reducing the outstanding balance).",
                "explain": "This split is what the whole module is about — it's worth noting this is exactly Module 7's equation of value viewed year by year rather than in one lump present-value equation: the loan amount is still the present value of all future instalments, but this module unpacks <em>how</em> each individual instalment contributes to paying that down."
            },
            {
                "q": "How is the interest portion of an instalment calculated?",
                "a": "The outstanding loan balance at the start of the period, multiplied by the interest rate for that period.",
                "explain": "This is why interest is always calculated on the <em>opening</em> balance for the period, never the closing balance — a common error is discounting an instalment using the wrong balance, which then throws off the capital/interest split for that period and every period after it."
            },
            {
                "q": "How is the capital portion of a level instalment found, once the interest portion is known?",
                "a": "Capital repaid = total instalment − interest due for that period.",
                "explain": "This is simply an application of the total-instalment identity from the first card — once you know the (fixed) instalment amount and can calculate interest due, capital repaid is just the leftover, which is the standard mechanical process for building a full loan schedule row by row."
            },
            {
                "q": "What happens to the split between interest and capital over the life of a level-instalment loan?",
                "a": "The interest portion decreases and the capital portion increases over time, as the outstanding balance falls.",
                "explain": "This is the well-known 'front-loaded interest' pattern of a standard repayment mortgage — since interest is charged on a shrinking balance (per the card above) but the total instalment stays level, an ever-larger share of each payment must go toward capital as the loan matures."
            },
            {
                "q": "How would you find the outstanding loan balance after the $t$-th instalment, using the 'prospective' method?",
                "a": "As the present value of all remaining future instalments, discounted at the loan rate.",
                "explain": "'Prospective' literally means 'looking forward' — this is Module 7's equation of value applied at time $t$ instead of time 0: the remaining balance must still equal the present value of everything left to repay, by the same equivalence-principle logic used to set the loan up in the first place."
            },
            {
                "q": "How would you find the outstanding loan balance after the $t$-th instalment, using the 'retrospective' method?",
                "a": "As the accumulated original loan amount, less the accumulated value of instalments paid so far.",
                "explain": "'Retrospective' means 'looking backward' — rather than valuing what's left to pay, this accumulates what's already happened (the original loan growing with interest, offset by instalments paid) forward to today, giving an alternative route to the same balance."
            },
            {
                "q": "Do the prospective and retrospective methods give the same outstanding balance?",
                "a": "Yes, provided the same interest rate is used for both accumulating and discounting throughout.",
                "explain": "This equivalence isn't a coincidence — it follows directly from the original equation of value (present value of instalments = loan amount) holding at outset; splitting that single equation at time $t$ into a 'past' piece and a 'future' piece necessarily gives two routes to the same answer, as long as the rate used is consistent throughout."
            },
            {
                "q": "What is the total 'capital repaid', summed over the whole loan term, equal to?",
                "a": "The original loan amount (the total capital borrowed).",
                "explain": "A useful full-schedule sanity check: however the interest/capital split varies instalment by instalment, the capital column must sum to exactly the original loan — if it doesn't, there's an arithmetic error somewhere in the schedule."
            },
            {
                "q": "How is the level instalment amount $X$ found for a loan of $L$ repaid over $n$ years at rate $i$?",
                "a": "$X = \\frac{L}{a_{\\overline{n}|}}$",
                "explain": "This is Module 7's equation of value directly solved for the unknown instalment: $L = X\\cdot a_{\\overline{n}|}$ rearranged — it's the single most common calculation in this module, and everything else (the interest/capital split, prospective/retrospective balances) builds on knowing $X$ first."
            },
            {
                "q": "What is the annual percentage rate (APR) of a loan?",
                "a": "The effective annual rate of interest implied by the loan's actual cashflows (amount lent vs. repayments), which may differ from the quoted nominal rate.",
                "explain": "This is Module 7's 'solve an equation of value for the unknown rate' technique applied specifically to a loan's real cashflows — it's the regulatory answer to the 'nominal rates can look artificially low' problem flagged back in Module 2, forcing lenders to disclose the true effective cost of borrowing."
            },
            {
                "q": "Why might a loan's APR differ from its stated nominal interest rate?",
                "a": "Because of fees or charges, or the compounding frequency used, which the APR calculation accounts for but a simple nominal rate doesn't.",
                "explain": "Both listed causes connect back to earlier material: compounding frequency is exactly Module 2's $i$ vs $i^{(p)}$ gap, while fees are an extra upfront or ongoing cashflow that effectively reduces what the borrower nets from the loan relative to what they must repay — both push the true APR above the quoted headline rate."
            },
            {
                "q": "If a borrower makes an extra lump-sum repayment partway through a loan, how does this affect future instalments (if the term stays fixed)?",
                "a": "It reduces the outstanding balance, so subsequent level instalments can be recalculated to be smaller for the same remaining term.",
                "explain": "This is a direct application of the prospective-method logic above: after the lump sum, simply re-solve $X_{\\text{new}} = \\frac{\\text{new outstanding balance}}{a_{\\overline{n-t}|}}$ for the remaining term — the same core formula, just re-applied at a later starting point with a smaller balance."
            },
            {
                "q": "How would you construct a full loan schedule table?",
                "a": "For each period, show the opening balance, interest due, instalment paid, capital repaid, and closing balance, working forward period by period.",
                "explain": "This is the mechanical, row-by-row assembly of every concept in this module: opening balance feeds the interest calculation, interest and the (fixed) instalment give capital repaid, and opening balance minus capital repaid gives the closing balance that becomes next period's opening balance — a repeating five-column cycle."
            },
            {
                "q": "If the interest rate changes partway through a loan's term, which method is more natural for finding the new outstanding balance?",
                "a": "Prospective — discount all remaining future instalments at the new rate(s) applying going forward.",
                "explain": "This is exactly why the two methods, while equal under a <em>constant</em> rate (per the earlier equivalence card), can diverge once rates change mid-term — retrospective would need to track exactly which rate applied to which past period, while prospective only needs the (simpler) new rate applying from now on."
            },
            {
                "q": "What does it mean if the capital repaid in the final instalment exactly clears the outstanding balance?",
                "a": "The loan is fully repaid (amortised) by that instalment, with zero balance remaining.",
                "explain": "This is the built-in check that a correctly-constructed loan schedule must satisfy — if the level instalment $X$ was calculated correctly using $X=\\frac{L}{a_{\\overline{n}|}}$, the closing balance after the final year's row should come out to exactly zero (allowing for rounding), confirming the whole schedule is internally consistent."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Project appraisal",
        "description": "Applies equation-of-value thinking to investment decisions — net present value, internal rate of return, payback period — and discusses when each is most appropriate.",
        "cards": [
            {
                "q": "What is the Net Present Value (NPV) of a project?",
                "a": "The present value of all its cash inflows minus the present value of all its cash outflows, at a chosen discount rate.",
                "explain": "This is Module 4's negative-cashflow-sign convention applied specifically to investment decisions — NPV is nothing more than the equation-of-value machinery from Modules 4 and 7, just given a decision-focused name and a clear accept/reject rule attached (see the next card)."
            },
            {
                "q": "What decision rule follows from a project's NPV?",
                "a": "Accept the project if NPV is positive (at the company's required rate of return); reject if negative.",
                "explain": "The 'required rate of return' matters as much as the sign rule — a positive NPV specifically means the project earns <em>more</em> than that required rate, so the rule is really comparing the project's return against the company's minimum acceptable return, not against zero growth."
            },
            {
                "q": "What is the Internal Rate of Return (IRR) of a project?",
                "a": "The discount rate at which the project's NPV equals zero.",
                "explain": "This is precisely Module 7's 'solve the equation of value for an unknown rate' technique, applied to a project's cashflows — and everything Module 7 warned about (uniqueness needing a single sign change, otherwise multiple roots) applies directly here, which is exactly the weakness flagged in a card below."
            },
            {
                "q": "What is the 'payback period' of a project?",
                "a": "The length of time until the cumulative (undiscounted) net cashflow becomes positive — i.e. the initial investment is recouped.",
                "explain": "Note the word 'undiscounted' — this measure deliberately ignores the time value of money entirely, which is both its main appeal (very easy to calculate and explain) and its main weakness (see the dedicated card below), unlike every other measure in this module."
            },
            {
                "q": "What is the 'discounted payback period'?",
                "a": "Like payback period, but using discounted cashflows — the time until cumulative discounted net cashflow becomes positive.",
                "explain": "This is a direct patch to payback period's biggest flaw: swap in discounted cashflows (Module 4's technique) and the measure now at least respects the time value of money, though it still shares the <em>other</em> weakness of ignoring everything that happens after the payback point."
            },
            {
                "q": "Give one weakness of using payback period alone to assess a project.",
                "a": "It ignores the time value of money and ignores all cashflows occurring after the payback point.",
                "explain": "Two distinct weaknesses bundled here, and it's worth being able to name both separately in an exam answer — discounted payback period (above) fixes only the first; <em>neither</em> version of payback period fixes the second, which is why a project with huge cashflows arriving just after the payback point can still look unfairly unattractive under this measure."
            },
            {
                "q": "Give one weakness of using IRR to compare two mutually exclusive projects.",
                "a": "IRR ignores the scale of the project, and can have multiple solutions if cashflows change sign more than once.",
                "explain": "The scale problem is easy to underrate: a tiny project with a 50% IRR can create far less absolute value than a huge project with a 12% IRR, yet IRR alone would rank the tiny project 'better' — this is exactly why NPV is generally preferred for comparing differently-sized mutually exclusive projects (see the card below)."
            },
            {
                "q": "When comparing two mutually exclusive projects of different sizes, which measure is usually preferred: NPV or IRR?",
                "a": "NPV, because it reflects the absolute value created and doesn't have the scale/multiple-root issues of IRR.",
                "explain": "This is the module's central takeaway, and the reasoning is worth stating in full for a 'discuss' style question: NPV directly measures the pound (or dollar) value added at the company's required rate, which is what actually matters for shareholder wealth, whereas IRR is a percentage that can favour a small, high-return project over a large, still-profitable one."
            },
            {
                "q": "What does 'accumulated profit' of a project mean?",
                "a": "The accumulated value (rather than present value) of the project's net cashflows, evaluated at a given interest rate, typically at the end of the project.",
                "explain": "This is just NPV's accumulated-value sibling, using exactly the same present/accumulated relationship from Module 1 — multiplying NPV by $(1+i)^n$ (where $n$ is the project length) converts a value-today measure into a value-at-project-end measure, useful when 'how much richer are we at completion' is the more natural question."
            },
            {
                "q": "If a project's IRR exceeds the company's cost of capital, what does that suggest?",
                "a": "The project is expected to be worthwhile — it earns a higher return than the minimum required.",
                "explain": "This is the IRR-based mirror of the NPV decision rule above, and under the 'single sign change' condition from Module 7 the two rules agree perfectly — IRR exceeding the required rate and NPV (calculated at the required rate) being positive are two ways of saying exactly the same thing."
            },
            {
                "q": "Why might discounted payback period be considered better than simple payback period?",
                "a": "It accounts for the time value of money, giving a more economically meaningful measure of how quickly the investment is recovered.",
                "explain": "Restates the fix already flagged above — worth remembering that 'better' here is limited: it fixes only <em>one</em> of payback period's two weaknesses, and still shares the other (ignoring post-payback cashflows) with the simple version."
            },
            {
                "q": "What is a 'mutually exclusive' set of projects?",
                "a": "A set of projects where choosing one means the others cannot also be undertaken (e.g. limited capital or resources).",
                "explain": "This is precisely the scenario where the NPV-vs-IRR comparison problem (above) actually bites — for a single standalone project evaluated on its own, NPV and IRR usually agree on accept/reject; it's specifically when <em>ranking</em> competing alternatives against each other that IRR's scale-blindness becomes a genuine problem."
            },
            {
                "q": "How would you calculate a project's NPV at a rate of $10\\%$ given a series of net cashflows?",
                "a": "Discount each year's net cashflow by $(1.10)^{-t}$ and sum the results.",
                "explain": "A direct, worked-example restatement of the module's opening definition — this is exactly Module 4's 'discount each payment separately, then sum' technique, with net cashflows (inflows minus outflows in each year) playing the role of the individual payments being summed."
            },
            {
                "q": "Why is choosing the 'right' discount rate important for NPV-based decisions?",
                "a": "A different discount rate can change whether NPV is positive or negative, and hence the accept/reject decision.",
                "explain": "This is the practical reason picking a sensible required rate of return matters so much in real corporate finance — a project that looks attractive at an 8% cost of capital can look unattractive at 12%, so the accept/reject conclusion is only as reliable as the discount-rate assumption feeding into it."
            },
            {
                "q": "If a project's net cashflows change sign more than once, what problem can arise when calculating IRR?",
                "a": "There may be multiple internal rates of return, making the IRR measure ambiguous or unreliable.",
                "explain": "This is Module 7's multiple-sign-change warning landing directly in this module's central weakness of IRR — a real-world example is a project with a large decommissioning cost at the end (outflow, then inflows, then a final outflow), which is exactly the kind of pattern that can produce more than one mathematically valid IRR."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Bonds, equity and property",
        "description": "Applies present value techniques to real financial instruments — fixed-interest and index-linked bonds, equities, and property — including price, yield, and the effect of taxation.",
        "cards": [
            {
                "q": "What is the 'coupon' on a fixed-interest bond?",
                "a": "The regular (usually annual or semi-annual) interest payment made to the bondholder, typically a fixed percentage of the nominal (face) value.",
                "explain": "A bond's cashflows are just a level annuity (the coupons, valued with Module 5's $a_{\\overline{n}|}$ machinery) plus a single lump sum at the end (the redemption payment) — recognising this structure means bond pricing is really a straightforward application of tools you already have, not a new topic."
            },
            {
                "q": "What is the 'redemption value' of a bond?",
                "a": "The amount repaid to the bondholder at maturity, often (but not always) equal to the nominal value.",
                "explain": "The 'often but not always' matters: a bond redeemable <em>above</em> nominal (at a premium) or <em>below</em> nominal (at a discount) changes the pricing calculation's final lump sum but not the underlying technique — always check the redemption terms rather than assuming redemption at par."
            },
            {
                "q": "How do you find the price of a bond given a required yield $i$?",
                "a": "The price equals the present value of all future coupon payments plus the present value of the redemption payment, discounted at $i$.",
                "explain": "This is precisely Module 7's equation of value, with the bond's <em>price</em> as the unknown on one side and the coupon-annuity-plus-redemption-lump-sum as the known cashflows on the other — in formula terms: Price $= C\\cdot a_{\\overline{n}|} + Rv^n$, where $C$ is the coupon and $R$ the redemption amount."
            },
            {
                "q": "What is the 'running yield' (or 'flat yield') on a bond?",
                "a": "The annual coupon payment divided by the current price of the bond, ignoring capital gain/loss at redemption.",
                "explain": "This is a deliberately crude, partial measure — it only looks at income return and completely ignores whether you'll gain or lose on the capital when the bond is redeemed, which is exactly the gap the redemption yield below is designed to close."
            },
            {
                "q": "What is the 'redemption yield' on a bond?",
                "a": "The effective rate of interest that equates the bond's current price to the present value of all its future cashflows (coupons and redemption).",
                "explain": "This is Module 7's 'solve the equation of value for the unknown rate' technique again, now with the bond's known market <em>price</em> plugged in and the yield $i$ as the unknown — unlike running yield, this properly captures the full economic return, including any capital gain or loss at redemption."
            },
            {
                "q": "How does income tax on coupon payments affect the price an investor is willing to pay for a bond, other things equal?",
                "a": "It reduces the value of the coupons received net of tax, so reduces the price the investor is willing to pay for a given yield.",
                "explain": "The technique here is simple: replace the gross coupon $C$ in the pricing equation with the after-tax coupon $C(1-t)$, where $t$ is the investor's tax rate — the underlying formula is unchanged, only the cashflow being discounted shrinks."
            },
            {
                "q": "How does capital gains tax affect bond pricing, if the redemption value exceeds the purchase price?",
                "a": "It reduces the effective (net) redemption proceeds, since tax is paid on the capital gain, reducing the price for a given required net yield.",
                "explain": "This is trickier than the income-tax adjustment above because the capital gain (and hence the tax owed) depends on the <em>price paid</em>, which is itself what you're trying to solve for — this circularity is exactly why capital-gains-tax bond pricing questions often need to be solved algebraically or iteratively rather than by simple substitution."
            },
            {
                "q": "When a bond is 'optionally redeemable' within a range of dates at the borrower's choice, how do you find price bounds?",
                "a": "Calculate the price assuming redemption at each extreme of the range, and use the more cautious (from the investor's viewpoint) of the two results.",
                "explain": "The logic: the borrower will choose whichever redemption date is <em>worst</em> for the investor (since it's their option to exercise, not the investor's), so a prudent investor should price the bond assuming the least favourable outcome for themselves — the next card gives a shortcut for spotting which extreme that is."
            },
            {
                "q": "What general rule helps decide which redemption date to test when a bond's redemption date is at the borrower's option?",
                "a": "Compare coupon rate to the required net yield: if coupon exceeds yield the borrower favours later redemption from the investor's perspective (and vice versa) — but always check both extremes explicitly.",
                "explain": "The intuition: if the coupon rate is generous relative to the yield the investor requires, the investor is happy holding the bond longer (delaying redemption is good for them, so the borrower will do the opposite and redeem early) — but this rule is a useful guide, not a substitute for the explicit both-extremes check the previous card describes, since edge cases and the exam's own conventions can differ."
            },
            {
                "q": "How would you value an index-linked bond's cashflows?",
                "a": "Increase each coupon and the redemption payment in line with the relevant inflation index between issue and payment date, then discount at the required money (or real) yield.",
                "explain": "This is Module 3's index-linked bond concept made fully concrete — note the consistency rule from that module still applies here: either inflate the cashflows to money terms and discount at the money yield, or keep cashflows in real terms and discount at the real yield, but never mix the two."
            },
            {
                "q": "How is the price of an ordinary share (equity) typically valued using dividend discounting?",
                "a": "As the present value of expected future dividends, discounted at the investor's required rate of return.",
                "explain": "The structural technique (discount future cashflows at a required rate) is identical to bond pricing — what's different is that dividends are uncertain and typically assumed to grow, unlike a bond's fixed coupons, which is exactly why the Gordon growth model below is needed as a specialised tool."
            },
            {
                "q": "What is the Gordon growth model used for?",
                "a": "Valuing a share (or property) whose dividends/rents grow at a constant rate $g$ forever: price $= \\frac{D_1}{i-g}$",
                "explain": "This can be derived as a geometrically-growing perpetuity — it's Module 5's simple perpetuity $\\frac1i$ generalised to allow the payment itself to grow at rate $g$ each year, which effectively reduces the discount rate from $i$ down to a 'net of growth' rate of $i-g$ (note this <em>requires</em> $g\\lt i$, or the perpetuity's value would be infinite)."
            },
            {
                "q": "What is a key difference between valuing a bond and valuing an equity?",
                "a": "A bond's cashflows are usually known/fixed; an equity's future dividends are uncertain and often assumed to grow.",
                "explain": "This single distinction explains why bond pricing (earlier in this module) is a mechanical present-value calculation, while equity pricing (Gordon growth model above) needs an extra assumption (the growth rate $g$) layered on top — uncertainty about that growth assumption is a major source of disagreement in real-world share valuations that a bond price simply doesn't face."
            },
            {
                "q": "How might property be valued similarly to equities in CM1?",
                "a": "By discounting expected future rental income (and possibly a terminal sale value) at a required rate of return, similarly to dividend discounting.",
                "explain": "This closes the loop on the module's three asset classes: bonds have fixed coupons plus a fixed redemption, equities have growing (uncertain) dividends with no fixed end, and property sits somewhere in between — growing (uncertain) rental income <em>plus</em> an eventual (uncertain) sale value, borrowing techniques from both of the other two."
            },
            {
                "q": "Why does a bond's price fall when the required yield rises?",
                "a": "Because future cashflows are discounted more heavily at a higher rate, reducing their present value.",
                "explain": "This is the same inverse price/yield relationship first flagged back in Module 2 ('what happens to bond prices when interest rates rise'), now derived properly from the bond pricing formula itself — it's also the seed idea behind Module 11's duration and immunisation material, which quantifies precisely <em>how</em> sensitive that price fall is."
            }
        ]
    },
    {
        "id": "m11",
        "title": "Term structure of interest rates",
        "description": "Introduces spot rates, forward rates, and yield to maturity — how interest rates vary by term — plus duration, convexity and Redington's conditions for immunisation.",
        "cards": [
            {
                "q": "What is a 'spot rate' of interest?",
                "a": "The annualised rate of return on a zero-coupon investment made now and maturing at a specific future date.",
                "explain": "'Zero-coupon' is the key word: a spot rate is the clean, single-cashflow rate for one specific term, uncontaminated by any intermediate coupon payments — this makes it the fundamental building block of the whole term structure, since any coupon-paying bond can conceptually be broken into a series of zero-coupon cashflows, each valued at its own spot rate."
            },
            {
                "q": "What is a 'forward rate' of interest?",
                "a": "The rate of interest agreed now for a loan/investment to be made over a specified future period.",
                "explain": "The crucial distinction from a spot rate: a forward rate applies to a <em>future</em> period (e.g. year 2 to year 3), agreed today, whereas a spot rate applies from <em>now</em> until some future date — the next card shows precisely how the two are linked."
            },
            {
                "q": "How are discrete spot rates and forward rates related for consecutive periods?",
                "a": "$(1+y_2)^2 = (1+y_1)(1+f_{1,2})$, where $y_1, y_2$ are spot rates and $f_{1,2}$ is the forward rate from time 1 to time 2.",
                "explain": "The intuition: investing for 2 years at the 2-year spot rate must give the <em>same</em> result as investing for 1 year at the 1-year spot rate, then reinvesting for another year at whatever the market's forward rate for that second year turns out to be — if it didn't, there'd be a risk-free arbitrage opportunity, which is why this no-arbitrage relationship holds."
            },
            {
                "q": "What is the 'yield to maturity' of a bond?",
                "a": "The single, constant rate of interest that equates the present value of a bond's cashflows to its current price (its redemption yield).",
                "explain": "This is exactly Module 10's redemption yield, renamed here to emphasise the term-structure angle — note it's a single <em>blended</em> rate, effectively averaging across all the different spot rates that actually apply to the bond's various cashflow dates, which is why two bonds with different coupon structures can have different yields to maturity even off the same underlying term structure."
            },
            {
                "q": "What does the 'par yield' represent?",
                "a": "The coupon rate at which a bond would be priced exactly at par (price equals nominal value), given the current term structure.",
                "explain": "This is a useful reference point precisely because it strips out the complication of premium/discount pricing — the par yield answers 'what coupon rate would make this bond trade at exactly its face value right now', letting you compare bonds of different coupon rates on a common, price-neutral basis."
            },
            {
                "q": "What does an upward-sloping term structure (yield curve) typically mean?",
                "a": "Longer-term spot rates are higher than shorter-term spot rates.",
                "explain": "This is the same yield curve concept from CB2's Module 15, now given a precise, formal definition using spot rates specifically — worth remembering both framings: CB2 treats it as a macro/market indicator, CM1 treats it as the raw input data that all bond and cashflow valuations here are built from."
            },
            {
                "q": "Name one factor that can influence the shape of the term structure of interest rates.",
                "a": "Expectations of future interest rate/inflation changes, liquidity preference, or supply/demand for bonds of different maturities.",
                "explain": "These are worth knowing as the standard named theories: the expectations theory (long rates reflect expected future short rates — directly related to the spot/forward relationship above), liquidity preference theory (investors demand a premium for locking up money longer), and market segmentation (supply/demand imbalances specific to each maturity band)."
            },
            {
                "q": "What is (Macaulay) duration of a cashflow sequence?",
                "a": "The weighted average time until cashflows are received, weighted by the present value of each cashflow.",
                "explain": "Think of duration as the cashflow sequence's 'centre of gravity' in time — a bond with most of its value concentrated in a large final redemption payment has a duration close to its full term, while one with substantial early coupons has a duration noticeably shorter than its term."
            },
            {
                "q": "What is the formula concept for duration?",
                "a": "$\\text{Duration} = \\frac{\\sum_t t \\cdot v^t C_t}{\\sum_t v^t C_t}$, the present-value-weighted average payment time.",
                "explain": "The denominator is just the ordinary present value of all the cashflows (Module 4's technique); the numerator does the same sum but weights each term by its own timing $t$ — dividing the two gives a present-value-weighted <em>average</em> time, exactly analogous to how you'd compute any other weighted average."
            },
            {
                "q": "What is 'convexity' of a cashflow sequence used for?",
                "a": "Measuring the curvature of how a cashflow sequence's present value changes with interest rates — a refinement beyond duration for larger rate changes.",
                "explain": "Duration alone only captures a <em>linear</em> (first-order) approximation of how price responds to a rate change — for larger rate moves, the true relationship curves away from that straight-line approximation, and convexity measures exactly how much, which is why Redington's third condition (below) specifically needs convexity, not just duration."
            },
            {
                "q": "What does duration tell you about a cashflow sequence's sensitivity to interest rate changes?",
                "a": "A higher duration means the present value is more sensitive (changes by a larger percentage) to a given change in interest rates.",
                "explain": "This follows naturally from duration being a weighted-average <em>time</em> to payment — cashflows further in the future are discounted more heavily by a rate change (since $v^t$ for large $t$ moves more than $v^t$ for small $t$ given the same shift in $i$), so a cashflow sequence weighted toward later payments is inherently more rate-sensitive."
            },
            {
                "q": "What is 'immunisation' of a portfolio of liabilities?",
                "a": "Structuring assets so that the portfolio's value is protected (to a first approximation) against small changes in the rate of interest.",
                "explain": "This is the practical payoff of duration and convexity combined — rather than trying to predict which way rates will move (impossible to do reliably), immunisation sidesteps the problem by matching assets and liabilities so that a <em>small</em> rate change affects both sides roughly equally, leaving the surplus protected either way."
            },
            {
                "q": "What are Redington's three conditions for immunisation?",
                "a": "(1) PV of assets equals PV of liabilities; (2) duration of assets equals duration of liabilities; (3) convexity of assets exceeds convexity of liabilities.",
                "explain": "These three conditions are worth memorising in exact order, since they build on each other: (1) alone just means the fund is currently solvent; (1)+(2) means a <em>small</em> rate change moves assets and liabilities by (approximately) the same percentage, keeping surplus roughly constant; (3) then ensures that residual (second-order) effect actually favours the fund, not against it."
            },
            {
                "q": "Why is condition 3 (asset convexity exceeding liability convexity) needed in Redington's theory?",
                "a": "It ensures that for both small rises and small falls in interest rates, asset value doesn't fall below liability value — a second-order protection beyond duration matching.",
                "explain": "Duration matching alone (condition 2) only guarantees the <em>first</em>-order (linear) effects cancel; without convexity also being favourable, a small rate change could still leave the fund with a shortfall due to the curvature difference the linear approximation misses — condition 3 is what turns 'roughly protected' into 'protected on both sides, to second order'."
            },
            {
                "q": "If spot rates are constant across all terms, what is the relationship between spot rates and forward rates?",
                "a": "They are all equal — the forward rate over any period equals the (constant) spot rate.",
                "explain": "This is the flat-yield-curve special case of the spot/forward relationship earlier in this module — a useful sanity check: if $y_1=y_2=y$, the formula $(1+y_2)^2=(1+y_1)(1+f_{1,2})$ simplifies directly to $f_{1,2}=y$, confirming there's nothing 'extra' happening in the second year beyond the same constant rate."
            }
        ]
    },
    {
        "id": "m12",
        "title": "The life table",
        "description": "Introduces the life table and the probability functions built from it — the foundation for every life-contingent calculation in CM1.",
        "cards": [
            {
                "q": "What does $l_x$ represent in a life table?",
                "a": "The expected number of survivors to exact age $x$, out of an initial (radix) cohort.",
                "explain": "$l_x$ is the single foundation every other symbol in this module (and every life-contingent function for the rest of CM1) is built from — the 'radix' is just the arbitrary starting cohort size (often 100,000) chosen for the table; the actual value of $l_x$ itself has no meaning in isolation, only <em>ratios</em> of $l$ values (giving probabilities) matter."
            },
            {
                "q": "What does $d_x$ represent?",
                "a": "The expected number of deaths between exact ages $x$ and $x+1$: $d_x = l_x - l_{x+1}$",
                "explain": "This is simply the <em>difference</em> between consecutive survivor counts — note $l_x$, $d_x$ share units (number of lives, out of the radix), which is different from $p_x$/$q_x$ below (probabilities), a distinction worth keeping straight when reading a life table."
            },
            {
                "q": "What does $p_x$ represent?",
                "a": "The probability that a life aged exactly $x$ survives to age $x+1$: $p_x = \\frac{l_{x+1}}{l_x}$",
                "explain": "Converting from $l$ values (counts) to $p_x$ (a probability) is just taking a ratio — this same 'ratio of $l$ values' pattern is how <em>every</em> survival/death probability in this module is derived, from the simple one-year $p_x$ here up to the multi-year and deferred versions below."
            },
            {
                "q": "What does $q_x$ represent?",
                "a": "The probability that a life aged exactly $x$ dies before reaching age $x+1$: $q_x = \\frac{d_x}{l_x} = 1-p_x$",
                "explain": "The two equivalent formulas here are worth noting: $\\frac{d_x}{l_x}$ (deaths over starting population) is the direct probabilistic definition, while $1-p_x$ follows since survival and death are complementary events over the same one-year period — use whichever form suits the given data."
            },
            {
                "q": "What does $_np_x$ represent?",
                "a": "The probability that a life aged $x$ survives at least $n$ further years, to age $x+n$: $_np_x = \\frac{l_{x+n}}{l_x}$",
                "explain": "This is just $p_x$ generalised from one year to $n$ years — note it is <em>not</em> generally equal to $(p_x)^n$ unless mortality happens to be constant across all those ages, since each year's survival probability can differ; the correct multi-year formula always goes back to the ratio of $l$ values directly."
            },
            {
                "q": "What does $_nq_x$ represent?",
                "a": "The probability that a life aged $x$ dies within the next $n$ years: $_nq_x = 1 - {_np_x}$",
                "explain": "Same complementary-events logic as the one-year $q_x$/$p_x$ pair above, just extended to $n$ years — die-within-$n$-years and survive-at-least-$n$-years are the only two possible outcomes, so their probabilities must sum to 1."
            },
            {
                "q": "What does $_{n|m}q_x$ represent?",
                "a": "The probability that a life aged $x$ survives $n$ years and then dies within the following $m$ years.",
                "explain": "The vertical bar notation ($n|m$) signals a <em>deferred</em> probability — read it as 'wait $n$ years, <em>then</em> look at the next $m$ years' — this exact same bar convention reappears for deferred annuities (Module 14) and deferred assurances (Module 13), so getting comfortable with it here pays off repeatedly."
            },
            {
                "q": "How do you express $_{n|m}q_x$ in terms of $l$ values?",
                "a": "$_{n|m}q_x = \\frac{l_{x+n} - l_{x+n+m}}{l_x}$",
                "explain": "The numerator is just $d$-style logic (survivors at the start of the window minus survivors at the end of the window = deaths during the window), and the denominator brings it back to a probability relative to the <em>original</em> age $x$, not age $x+n$ — a common error is dividing by $l_{x+n}$ instead of $l_x$, which would instead give a <em>conditional</em> probability given survival to age $x+n$."
            },
            {
                "q": "What does 'select' mortality mean, as in $l_{[x]+r}$?",
                "a": "Mortality that depends not just on current age but also on how long ago the life was selected (e.g. underwritten) — recently selected lives typically have lighter mortality.",
                "explain": "This is an important real-world refinement: a life who just passed a medical underwriting exam is (on average) healthier than a random person of the same age who wasn't recently checked — select mortality tables capture this by tracking <em>both</em> age at selection and time since selection, not just current age alone."
            },
            {
                "q": "What does $l_{[x]}$ represent, as distinct from $l_x$?",
                "a": "The number of survivors to age $x$ among lives who were selected (e.g. underwritten) at exactly age $x$, as opposed to $l_x$ which doesn't track selection.",
                "explain": "The square brackets are the notation to watch for: $l_{[x]}$ means 'just selected at age $x$' (lightest mortality), $l_{[x]+r}$ means 'selected at age $x$, now $r$ years later' (mortality gradually rising back toward normal), and plain $l_{x+r}$ (no brackets) means the general <em>ultimate</em> population at that attained age, with no memory of selection at all."
            },
            {
                "q": "Why does select mortality typically converge to 'ultimate' mortality after a few years?",
                "a": "The effect of underwriting/selection wears off over time, so mortality experience converges to that of the general population of the same attained age.",
                "explain": "This is precisely why select mortality tables have a limited 'select period' (often 2-5 years) before merging into the ultimate table — the underwriting advantage fades as unmeasured health changes accumulate, so it wouldn't be realistic (or prudent) to assume a permanent mortality advantage from a one-off medical check years ago."
            },
            {
                "q": "What assumption is commonly used for deaths occurring between integer ages, when needed for calculations?",
                "a": "The uniform distribution of deaths (UDD) assumption, or otherwise the constant force of mortality assumption.",
                "explain": "A life table only directly gives you probabilities at <em>whole</em>-year intervals — whenever a calculation needs a fractional-year probability (e.g. dying within the next 6 months), one of these two standard smoothing assumptions is needed to interpolate between the integer-age values the table actually provides."
            },
            {
                "q": "Under the constant force of mortality assumption between integer ages, how is $\\mu$ related to $q_x$?",
                "a": "$\\mu = -\\ln(1-q_x) = -\\ln p_x$, constant over the year of age.",
                "explain": "This is exactly analogous to Module 2's force of interest $\\delta$ derived from $i$ via $\\delta=\\ln(1+i)$, just applied to mortality instead of interest — recognising this parallel (a 'force' as the continuous-time version of a discrete annual rate) makes the formula far easier to remember than treating it as an unrelated new idea."
            },
            {
                "q": "If $l_{60} = 9{,}000{,}000$ and $l_{61} = 8{,}910{,}000$, what is $q_{60}$?",
                "a": "$q_{60} = \\frac{9{,}000{,}000 - 8{,}910{,}000}{9{,}000{,}000} = 0.01$",
                "explain": "A clean worked example of the $q_x$ formula from earlier in this module — useful as a template: subtract to get deaths ($d_{60}=90{,}000$), then divide by the <em>starting</em> population ($l_{60}$), never the ending one, to get a one-year mortality rate of exactly 1%."
            },
            {
                "q": "Why is the life table considered the building block for pricing life insurance and annuity products?",
                "a": "Because every assurance/annuity valuation requires the probability of survival or death at each future age, which the life table directly provides.",
                "explain": "This closes out the module by previewing the rest of the life-contingencies syllabus: Modules 13-25 all combine <em>this</em> module's survival/death probabilities with Modules 1-11's discounting techniques — an assurance or annuity 'expected present value' is nothing more than a probability-weighted sum of discounted cashflows, using exactly the $p_x$/$q_x$ values built here."
            }
        ]
    },
    {
        "id": "m13",
        "title": "Life assurance contracts",
        "description": "Defines the standard types of life assurance contract — whole life, term, endowment, pure endowment — and their expected present value ('actuarial value') functions.",
        "cards": [
            {
                "q": "What does $A_x$ represent?",
                "a": "The expected present value of a whole life assurance of $1$, payable at the end of the year of death of a life currently aged $x$.",
                "explain": "This is Module 12's mortality probabilities combined with Module 1's discounting, in one number — conceptually, $A_x = \\sum_{k=0}^{\\infty} v^{k+1}\\cdot {_{k|}q_x}$: for each possible year of death $k+1$, multiply the probability of dying in exactly that year by the discounted value of £1 paid then, and sum over every possible year."
            },
            {
                "q": "What is a 'term assurance'?",
                "a": "A policy paying a benefit only if the life dies within a specified term; nothing is paid if the life survives the term.",
                "explain": "Think of this as $A_x$ (whole life) but with the sum <em>cut off</em> after $n$ years — all the death-in-year-$k$ terms beyond year $n$ are simply dropped from the sum, since no benefit is paid for a death outside the term."
            },
            {
                "q": "What symbol is commonly used for a term assurance of $1$ for $n$ years, and what does the superscript mean?",
                "a": "$A^1_{x:\\overline{n}|}$ — the superscript '1' over the $x$ indicates the benefit is contingent on death of the life aged $x$ within the term.",
                "explain": "This '1 over the trigger life' notation convention is worth mastering now since it reappears constantly: it marks <em>exactly</em> which event triggers the benefit when a symbol could otherwise be ambiguous, and the same convention extends to two-life contingent benefits in Module 20 ($A^1_{xy}$ meaning 'benefit on $(x)$'s death before $(y)$'s')."
            },
            {
                "q": "What is a 'pure endowment'?",
                "a": "A policy paying a benefit only if the life survives to the end of a specified term; nothing is paid on earlier death.",
                "explain": "This is the mirror image of term assurance: term assurance pays <em>only</em> on death within the term, pure endowment pays <em>only</em> on survival TO the end of the term — together they cover every possible outcome, which is exactly why summing them (next card) gives you a policy that always pays out one way or another."
            },
            {
                "q": "What is an 'endowment assurance'?",
                "a": "A policy that pays a benefit on death within the term, or on survival to the end of the term, whichever occurs first.",
                "explain": "This is literally 'term assurance OR pure endowment, whichever event actually happens' — since death-within-term and survival-to-term-end are mutually exclusive and exhaustive outcomes, an endowment assurance is guaranteed to pay out exactly once, which is the intuition behind the additive formula in the next card."
            },
            {
                "q": "How does the endowment assurance function $A_{x:\\overline{n}|}$ relate to term assurance and pure endowment?",
                "a": "$A_{x:\\overline{n}|} = A^1_{x:\\overline{n}|} + A_{x:\\overline{n}|}^{\\ 1}$ (term assurance plus pure endowment).",
                "explain": "Notice where the '1' sits in each term: over the $x$ means 'benefit on death'; over the $n$ means 'benefit on survival' — this is an elegant piece of notation once you see the pattern, since it lets you build an endowment assurance's formula purely by combining the two simpler building blocks you already know."
            },
            {
                "q": "What does it mean for a death benefit to be 'payable immediately on death' rather than 'at the end of year of death'?",
                "a": "The benefit is paid as soon as death occurs, rather than being delayed until the policy anniversary following death.",
                "explain": "This is more realistic (real insurers don't literally wait until the policy anniversary to pay a claim) but mathematically trickier, since it requires knowing exactly <em>when</em> within the year death occurs, not just which year — this is precisely where the UDD/constant-force-of-mortality assumptions from Module 12 get put to use."
            },
            {
                "q": "What notation typically distinguishes an immediate-death-benefit assurance from an end-of-year one?",
                "a": "A bar over the $A$, e.g. $\\overline{A}_x$, denotes the benefit payable immediately on death.",
                "explain": "This is exactly the same bar convention as continuous annuities in Module 5 ($\\overline{a}_{\\overline{n}|}$ for continuous payment) — the bar consistently signals 'continuous/immediate' throughout CM1 notation, whether applied to payments or, as here, to a benefit trigger."
            },
            {
                "q": "What is a 'deferred' assurance benefit?",
                "a": "A benefit that only starts to apply after a deferment period — e.g. death benefit only payable if death occurs after a certain number of years.",
                "explain": "Same deferred-benefit logic as Module 5's annuities and Module 12's $_{n|m}q_x$ — the vertical bar notation from those earlier modules carries over here too, so a deferred assurance is written and reasoned about using exactly the same 'wait, then apply' pattern you've already seen twice."
            },
            {
                "q": "What does 'return of premiums' annuity/assurance mean?",
                "a": "On death (or another trigger event), the benefit paid is linked to the premiums paid so far, rather than a fixed sum assured.",
                "explain": "This is a different <em>structure</em> from the fixed-sum-assured products covered elsewhere in this module — the benefit amount itself is a running total that grows as premiums are paid, which typically requires combining assurance functions with increasing-annuity-style techniques (Module 6) rather than a simple $A_x$-type formula."
            },
            {
                "q": "How would you describe the cashflow timing of a whole life assurance versus a term assurance?",
                "a": "Whole life assurance guarantees eventual payment (on death, whenever it occurs); term assurance only pays if death occurs within the specified period.",
                "explain": "This is the plain-English version of the mathematical relationship established at the top of this module — whole life assurance is a term assurance with the term stretched out to infinity (or, in practice, to the oldest age the life table covers), which is why $A_x > A^1_{x:\\overline{n}|}$ always."
            },
            {
                "q": "Why would a pure endowment alone be an unusual product to sell on its own?",
                "a": "It provides no benefit at all if the policyholder dies before the term ends, so it's usually combined with a term assurance to form an endowment assurance.",
                "explain": "This is a genuine commercial point, not just a mathematical one: a policyholder who dies during the term gets <em>nothing</em> back under a pure pure-endowment (their premiums are simply lost), which is a hard product to sell — bundling it with term assurance (to give an endowment assurance) is what makes the product commercially viable."
            },
            {
                "q": "What does 'joint life' mean in the context of assurance contracts?",
                "a": "The contract's benefit depends on the death (or survival) status of two (or more) lives, rather than just one.",
                "explain": "This is a preview of Module 19's whole topic — for now, just note that everything in this module (assurance functions, the term/pure-endowment split, deferred benefits) has a direct two-life analogue later in the course, using subscripts like $xy$ instead of just $x$."
            },
            {
                "q": "For a term assurance, what happens to $A^1_{x:\\overline{n}|}$ as $n$ increases (with $x$ fixed)?",
                "a": "It increases, since a longer term gives more opportunity for the death benefit to become payable.",
                "explain": "This is worth confirming makes sense from the summation view at the top of this module: a longer term simply adds <em>more</em> non-negative terms to the sum (more years in which death could trigger the benefit), so the total can only stay the same or grow — and as $n\\to\\infty$, this term assurance value converges up to the whole life value $A_x$."
            },
            {
                "q": "How do variable death benefits (increasing/decreasing sums assured) generally get valued?",
                "a": "Combine the varying sum assured with the corresponding annual mortality/discounting terms, similar in spirit to increasing annuity techniques.",
                "explain": "This is Module 6's increasing/decreasing annuity technique cross-applied to assurances — instead of summing (probability of death in year $k$) $\\times$ (discount factor), you sum (probability of death in year $k$) $\\times$ (discount factor) $\\times$ (the sum assured in that particular year), which changes year by year for a varying benefit."
            }
        ]
    },
    {
        "id": "m14",
        "title": "Life annuity contracts",
        "description": "Defines annuity contracts contingent on survival — whole life, temporary, deferred, guaranteed — and their expected present value functions.",
        "cards": [
            {
                "q": "What does $\\ddot{a}_x$ represent?",
                "a": "The expected present value of a whole life annuity of $1$ per year, paid annually in advance, to a life currently aged $x$, for as long as they survive.",
                "explain": "This is Module 5's level annuity-due $\\ddot{a}_{\\overline{n}|}$ made life-contingent: instead of a certain $n$-year term, payments continue for however long the life happens to survive — formally, $\\ddot{a}_x = \\sum_{k=0}^{\\infty} v^k \\cdot {_kp_x}$, weighting each year's discount factor by the probability of still being alive to receive that payment."
            },
            {
                "q": "What is a 'temporary' (or 'term') life annuity, $\\ddot{a}_{x:\\overline{n}|}$?",
                "a": "An annuity paid annually in advance to a life aged $x$, for at most $n$ years, ceasing on earlier death.",
                "explain": "This is $\\ddot{a}_x$ (whole life) truncated at $n$ years, in exactly the same way Module 13's term assurance was $A_x$ truncated at $n$ years — the sum $\\sum_{k=0}^{\\infty} v^k\\cdot{_kp_x}$ simply stops after $k=n-1$ instead of running forever."
            },
            {
                "q": "What is a 'deferred' life annuity, e.g. $_{m|}\\ddot{a}_x$?",
                "a": "An annuity that starts paying only after a deferment period of $m$ years, provided the life survives that long, and then continues for life.",
                "explain": "Same vertical-bar deferred notation you've now seen for assurances (Module 13) and probabilities (Module 12) — note the survival condition baked in: unlike a purely time-based deferred annuity-certain, this one <em>also</em> requires the life to survive the deferment period, or nothing is ever paid at all."
            },
            {
                "q": "What is a 'guaranteed' annuity?",
                "a": "An annuity that continues to be paid for a minimum guarantee period regardless of death, and then continues (if the life survives) beyond the guarantee period.",
                "explain": "This is a different structure from temporary/deferred annuities: the guarantee period pays out <em>unconditionally</em> (whether alive or not), which is why the next card values it as two separate pieces — a certain annuity (no mortality involved at all) plus a life-contingent piece afterward."
            },
            {
                "q": "How would you value a whole life annuity guaranteed for the first $n$ years, then continuing for life?",
                "a": "As a certain annuity for $n$ years, plus a deferred whole life annuity starting after $n$ years contingent on survival.",
                "explain": "This splits cleanly into $\\ddot{a}_{\\overline{n}|}$ (Module 5's plain annuity-certain, since the guarantee period pays regardless of survival) plus $_{n|}\\ddot{a}_x$ (the deferred life annuity above) — a good general technique: whenever a benefit has an unconditional piece and a contingent piece, value each separately and add."
            },
            {
                "q": "What is the relationship between $\\ddot{a}_x$ and $a_x$ for a life aged $x$?",
                "a": "$\\ddot{a}_x = 1 + a_x$ (the annuity-due includes an immediate payment at time 0 that the annuity-immediate does not).",
                "explain": "Unlike Module 5's certain-annuity relationship $\\ddot{a}_{\\overline{n}|}=(1+i)a_{\\overline{n}|}$, here it's simple <em>addition</em>, not multiplication by $(1+i)$ — that's because the time-0 payment under an annuity-due is certain (the life is alive right now, by definition), so it contributes exactly $1$ with no discounting or mortality adjustment needed at all."
            },
            {
                "q": "What does $\\overline{a}_x$ represent?",
                "a": "A whole life annuity paid continuously (rather than annually) at rate $1$ per year, to a life aged $x$.",
                "explain": "Same bar-for-continuous convention from every earlier module — $\\overline{a}_x$ sits, as the next card confirms, between the annuity-due and annuity-immediate values, since continuous payment is like an 'average' of paying slightly early (due) and slightly late (immediate) throughout the year."
            },
            {
                "q": "How do $\\ddot{a}_x$, $\\overline{a}_x$ and $a_x$ typically compare in size, for the same $x$?",
                "a": "$\\ddot{a}_x > \\overline{a}_x > a_x$, since annuity-due payments are received earliest on average and annuity-immediate latest.",
                "explain": "This is exactly Module 5's certain-annuity ordering, carried over unchanged to the life-contingent case — the mortality contingency scales all three values down together (compared to their certain-annuity counterparts) but doesn't change the <em>relative</em> ordering between due, continuous and immediate."
            },
            {
                "q": "What is a common real-world product modelled using $\\ddot{a}_x$?",
                "a": "A pension annuity, paying a level income for as long as the pensioner survives.",
                "explain": "This is the single most direct real-world application in the whole life-contingencies syllabus — every pension annuity a retiree buys is, mathematically, exactly this function, priced by an insurer using $\\ddot{a}_x$ (or its more refined variants covered later) to determine how much level income a given purchase price can sustainably buy."
            },
            {
                "q": "How does temporary annuity value $\\ddot{a}_{x:\\overline{n}|}$ change as $n$ increases?",
                "a": "It increases, up to the limit of the whole life annuity value $\\ddot{a}_x$ as $n \\to \\infty$.",
                "explain": "Same logic as Module 13's term-assurance-increasing-with-$n$ card — more years in the term can only <em>add</em> more non-negative terms to the underlying sum, and as $n$ stretches toward infinity, the truncated sum converges up to the full whole-life value."
            },
            {
                "q": "What is the relationship between a temporary annuity and a deferred annuity using the pure endowment factor $_nE_x$?",
                "a": "$\\ddot{a}_x = \\ddot{a}_{x:\\overline{n}|} + {_n}E_x \\cdot \\ddot{a}_{x+n}$",
                "explain": "This splits the whole life annuity into 'the temporary annuity covering the first $n$ years' plus 'the deferred annuity covering everything after year $n$' — it's the annuity version of Module 13's endowment-assurance split (term assurance + pure endowment), and it's useful for building up complex annuity values from simpler pieces."
            },
            {
                "q": "What is the pure endowment factor $_nE_x$?",
                "a": "$_nE_x = v^n \\cdot {_np_x}$, the expected present value of $1$ payable in $n$ years if the life aged $x$ survives that long.",
                "explain": "This single factor is arguably the most useful shorthand in the whole life-contingencies syllabus — it's just Module 1's discount factor $v^n$ multiplied by Module 12's survival probability $_np_x$, and it appears as a building block in deferred annuities, deferred assurances, and reserving formulas throughout the rest of the course."
            },
            {
                "q": "How would you express a deferred annuity $_{m|}\\ddot{a}_x$ using $_mE_x$?",
                "a": "$_{m|}\\ddot{a}_x = {_mE_x} \\cdot \\ddot{a}_{x+m}$",
                "explain": "The logic mirrors Module 5's deferred-annuity-certain trick exactly: value the annuity as if it started at age $x+m$ (getting $\\ddot{a}_{x+m}$), then multiply by the factor $_mE_x$ that discounts <em>and</em> survival-adjusts for the deferment period — the only change from the certain-annuity version is that $v^m$ becomes $_mE_x=v^m\\cdot{_mp_x}$, adding the mortality condition."
            },
            {
                "q": "Why do life annuities typically use annuity-due (in advance) rather than annuity-immediate (in arrears) conventions?",
                "a": "Pension/annuity payments are conventionally paid at the start of each period covered, avoiding paying for a period after the annuitant may have already died.",
                "explain": "This is a practical, not just notational, reason — if a pension paid in arrears and the pensioner died partway through the final period, the insurer would owe a payment for time the pensioner didn't survive to see; paying in advance sidesteps that awkward situation entirely, which is why $\\ddot{a}_x$ (not $a_x$) is the default convention for real pension products."
            },
            {
                "q": "What is the key difference between valuing an annuity-certain and a life annuity?",
                "a": "A life annuity multiplies each period's discount factor by the relevant survival probability, since payment is contingent on the annuitant being alive.",
                "explain": "This is the one-sentence summary of everything this module has built: take any Module 5 annuity-certain formula, and wherever you see a bare $v^k$ term, insert a $_kp_x$ survival probability alongside it — that single modification is what turns interest-theory annuity mathematics into life-contingent annuity mathematics."
            }
        ]
    },
    {
        "id": "m15",
        "title": "Evaluation of assurances and annuities",
        "description": "Covers how assurance and annuity factors relate to each other via the equation of value, how to extend them to different payment frequencies, and how to compute the mean and variance of the present value of benefits.",
        "cards": [
            {
                "q": "What is the key equation of value linking a whole life assurance and whole life annuity-due at the same age?",
                "a": "$A_x = 1 - d\\,\\ddot{a}_x$",
                "explain": "This is arguably the single most useful identity in the whole life-contingencies syllabus — it means you never need to calculate <em>both</em> $A_x$ and $\\ddot{a}_x$ from scratch; given either one (plus $d$), you can derive the other directly, which saves substantial work in exam questions covering both a policy's assurance and annuity aspects."
            },
            {
                "q": "Why does the relationship $A_x = 1 - d\\,\\ddot{a}_x$ hold?",
                "a": "It follows from a standard identity linking the discounted cashflow of $1$ at outset to the assurance and annuity-due present values.",
                "explain": "The intuition: imagine investing £1 today and paying interest income of $d\\times$(current fund value) out each year while the life survives, with the remaining fund paid as a death benefit — whether the life dies or lives forever, the accounting always balances, which is exactly what this identity captures algebraically."
            },
            {
                "q": "What is meant by the 'curtate future lifetime' $K_x$?",
                "a": "The complete number of future years lived by a life aged $x$ before death (the integer number of full years survived).",
                "explain": "'Curtate' just means 'rounded down to whole years' — $K_x$ is the random variable version of the deterministic $l_x$/$q_x$ machinery from Module 12: instead of asking 'what's the probability of dying in year $k$', $K_x$ IS the (random) year of death itself, which is the natural language for the mean/variance calculations this module introduces."
            },
            {
                "q": "How is the present value of a whole life assurance benefit expressed as a random variable in terms of $K_x$?",
                "a": "$Z = v^{K_x+1}$, since the benefit is paid at the end of the year of death.",
                "explain": "The '+1' matters: if the life survives $K_x$ complete years and then dies, the end-of-year-of-death payment falls at time $K_x+1$, not $K_x$ — this is an easy place to lose a mark by forgetting the offset, so it's worth double-checking on every calculation involving $K_x$."
            },
            {
                "q": "How do you find the variance of the present value of a whole life assurance benefit?",
                "a": "$\\text{Var}(Z) = E[Z^2] - (E[Z])^2$, where $E[Z] = A_x$ and $E[Z^2]$ is found using $v^2$ in place of $v$.",
                "explain": "This is just the standard statistical variance formula (variance = second moment minus mean squared) applied to the specific random variable $Z=v^{K_x+1}$ from the card above — the new actuarial content is recognising that $E[Z^2]$ has a clean interpretation as an assurance function at <em>double</em> the force of interest, covered next."
            },
            {
                "q": "What does $^2A_x$ represent?",
                "a": "The expected present value of a whole life assurance calculated at double the force of interest (using $v^2$ instead of $v$) — used to find the second moment for variance calculations.",
                "explain": "This notation (a small superscript 2 before the $A$) is purely a bookkeeping device for the variance formula above — it's calculated using <em>exactly</em> the same technique as ordinary $A_x$, just with every $v$ replaced by $v^2$ throughout, which is why the next card explains precisely why that substitution works."
            },
            {
                "q": "How would you extend $\\ddot{a}_x$ to a monthly-in-advance annuity, $\\ddot{a}_x^{(12)}$?",
                "a": "Approximate using $\\ddot{a}_x^{(12)} \\approx \\ddot{a}_x - \\frac{11}{24}$, or calculate exactly if the underlying assumptions allow.",
                "explain": "This is the life-contingent version of Module 5's $a_{\\overline{n}|}^{(p)}=\\frac{i}{i^{(p)}}a_{\\overline{n}|}$ conversion, but note the <em>different</em> form here — the standard approximation (sometimes called the Woolhouse approximation) is additive/subtractive rather than a simple ratio, because it also has to account for the mortality risk changing within each sub-year period, not just the payment timing."
            },
            {
                "q": "What is the general logic for extending annual annuity/assurance functions to more frequent payments?",
                "a": "Adjust for the fact that payments occur more often, typically via standard approximations linking annual and $p$thly functions.",
                "explain": "This restates the point above at a higher level — the exam-relevant takeaway is that 'more frequent payments' in a life-contingent context needs its own dedicated approximation technique (not just Module 5's certain-annuity ratio), precisely because mortality doesn't behave as cleanly across fractional years as compound interest does."
            },
            {
                "q": "Why do we need both the mean and the variance of the present value of a benefit, not just the mean?",
                "a": "The mean gives the expected cost (used for pricing); the variance quantifies the uncertainty/risk around that expected cost.",
                "explain": "This is the whole reason the second half of this module exists — pricing (Module 17) only needs the <em>mean</em>, but understanding how <em>risky</em> a portfolio of policies is (how much actual claims could deviate from expected) needs the variance too, which matters for capital requirements and risk management beyond simple premium-setting."
            },
            {
                "q": "How would you find the mean and variance of the present value of a term assurance benefit?",
                "a": "Similarly to whole life assurance, but restricting the curtate future lifetime to values within the term, with zero benefit if death occurs after the term.",
                "explain": "This is Module 13's whole-life-to-term-assurance truncation trick, now applied to the <em>random variable</em> $Z$ rather than just the expected value — $Z$ becomes a mixture: $v^{K_x+1}$ if death occurs within the term, or exactly $0$ if the life survives past the term, and the mean/variance are computed from that modified random variable."
            },
            {
                "q": "What is the general relationship used to move between 'immediate' and 'due' annuity values, applied to life annuities?",
                "a": "$\\ddot{a}_x = 1 + a_x$, since the first payment under the due version occurs at time 0 with certainty.",
                "explain": "This restates Module 14's due/immediate identity — included again here because this module's mean/variance toolkit can equally be applied to $a_x$ as to $\\ddot{a}_x$, and it's useful to have this conversion at hand when a question mixes the two conventions."
            },
            {
                "q": "How does discounting at 'twice the force of interest' arise naturally when computing $E[Z^2]$ for an assurance benefit?",
                "a": "Because $Z = v^{K_x+1}$, so $Z^2 = (v^2)^{K_x+1}$ — equivalent to discounting at a rate whose discount factor is $v^2$.",
                "explain": "This is the algebraic justification behind the $^2A_x$ notation from earlier — squaring a present value random variable is the same as squaring its discount factor, and $v^2$ corresponds to a <em>new</em> effective rate $j$ where $(1+j)^{-1}=v^2$, i.e. $j=(1+i)^2-1$, which is what '$^2A_x$' is quietly using under the hood."
            },
            {
                "q": "What does it mean to evaluate assurance/annuity factors 'by table look-up'?",
                "a": "Using pre-computed values (from standard mortality/interest tables) for common ages and rates, rather than calculating from first principles each time.",
                "explain": "In real practice (and in some exam contexts), $A_x$ and $\\ddot{a}_x$ values are provided in reference tables for standard mortality bases and interest rates, rather than derived by summing an infinite series by hand — knowing <em>how</em> these values are constructed (as covered throughout Modules 12-15) is what lets you use, adapt and sanity-check tabulated values correctly."
            },
            {
                "q": "How would premiums payable 'for a limited period' (rather than the whole policy term) affect the annuity function used to value them?",
                "a": "You would use a temporary annuity function covering only the premium-paying period.",
                "explain": "This directly previews Module 17's gross premium calculations — a policy might pay benefits over a long term (say, whole life) but only require premiums for a shorter period (say, 20 years); the premium side of the equation of value then needs $\\ddot{a}_{x:\\overline{20}|}$ (Module 14's temporary annuity), not $\\ddot{a}_x$."
            },
            {
                "q": "Give one reason select mortality might be used when evaluating a newly-issued policy's assurance/annuity factors.",
                "a": "The policyholder was recently underwritten/selected, so their mortality is expected to be lighter than the general population for the first few years.",
                "explain": "This closes the loop back to Module 12's select mortality concept — pricing a <em>brand new</em> policy should reasonably use $A_{[x]}$ or $\\ddot{a}_{[x]}$ (select functions) rather than the ultimate $A_x$/$\\ddot{a}_x$, since the newly-underwritten policyholder has different (lighter) mortality than a random member of the general population at the same age."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Variable benefits and conventional with-profits policies",
        "description": "Covers policies where the benefit amount isn't fixed — increasing/decreasing sums assured, conventional with-profits bonuses, and unit-linked / accumulating with-profits structures.",
        "cards": [
            {
                "q": "What is a 'conventional with-profits' policy?",
                "a": "A policy with a basic guaranteed sum assured, to which bonuses are added over time (funded by the insurer's profits), increasing the eventual benefit paid.",
                "explain": "This module shifts from the <em>fixed</em> benefits of Modules 13-15 (a single sum assured $A_x$) to benefits whose amount is itself uncertain — conventional with-profits is the traditional way of doing this: start from a guaranteed base, then layer discretionary bonuses on top, covered in the next few cards."
            },
            {
                "q": "What is a 'reversionary bonus'?",
                "a": "A bonus added to a with-profits policy's sum assured during the policy term, which — once added — is guaranteed and cannot be taken away.",
                "explain": "The 'once added, can't be taken away' feature is the key exam point — a reversionary bonus <em>permanently</em> increases the guaranteed sum assured, ratcheting the guarantee upward year by year, which is fundamentally different from the terminal bonus in the next card, which is never guaranteed until the actual claim."
            },
            {
                "q": "What is a 'terminal bonus'?",
                "a": "An additional bonus paid only at the point the policy becomes a claim (death or maturity), not guaranteed in advance.",
                "explain": "This is the <em>discretionary</em> counterpart to the reversionary bonus's guaranteed ratchet — it lets the insurer reflect actual investment performance right up to the moment of claim, without having to lock in a permanent guarantee years in advance, which is precisely why insurers use both types together (see the smoothing card below)."
            },
            {
                "q": "Why do insurers use reversionary bonuses rather than just paying a single large terminal bonus?",
                "a": "Reversionary bonuses smooth policyholder returns over time and build in guaranteed increases, helping manage expectations and smooth investment performance.",
                "explain": "This is the design rationale connecting the two bonus types above: reversionary bonuses give policyholders visible, guaranteed progress they can trust year to year, while the terminal bonus remains flexible enough to absorb whatever investment performance actually turns out to be — a deliberate split between certainty and flexibility."
            },
            {
                "q": "What is a 'unit-linked' contract?",
                "a": "A contract where the policyholder's premiums (net of charges) buy units in an investment fund, and benefits are linked to the value of those units.",
                "explain": "This is a completely different design philosophy from with-profits: instead of smoothed, discretionary bonuses, the benefit tracks a transparent, market-based unit price directly — the policyholder bears essentially all the investment risk/reward, in contrast to with-profits where the insurer absorbs and smooths some of that volatility."
            },
            {
                "q": "How is the death benefit often structured under a unit-linked contract?",
                "a": "As a combination of a fixed (absolute) amount and an amount relative to the value of the unit fund (e.g. the higher of the two).",
                "explain": "This 'higher of a fixed floor or the fund value' structure gives the policyholder some downside protection even though the fund itself can fall in value — it's a genuine <em>insurance</em> element layered on top of what's otherwise mostly an investment product, and it's what generates the 'sum at risk' concept covered fully in Module 23."
            },
            {
                "q": "What is an 'accumulating with-profits' contract?",
                "a": "A contract where the policyholder's benefit is expressed as an accumulating fund of premiums, increased by regular bonus additions.",
                "explain": "Think of this as a hybrid: it accumulates like a unit-linked fund (a running total that grows over time), but grows via <em>smoothed</em> bonus additions like conventional with-profits, rather than directly tracking a volatile market-based unit price — the next card makes this contrast explicit."
            },
            {
                "q": "What is the key difference between accumulating with-profits and unit-linked structures?",
                "a": "Accumulating with-profits funds grow via smoothed bonus additions with no explicit unit price; unit-linked funds fluctuate directly with a market-based unit price.",
                "explain": "This is the module's central distinction to keep straight: 'smoothed bonus growth' vs 'direct market-price tracking' — both can look superficially similar (a growing fund value on a statement), but the underlying mechanism, and who bears short-term volatility, is fundamentally different."
            },
            {
                "q": "What are 'unitised with-profits' contracts?",
                "a": "A hybrid structure — benefits are expressed as a unit fund like unit-linked contracts, but the fund grows via smoothed bonus additions rather than direct market-value-linked unit prices.",
                "explain": "This is essentially the same idea as accumulating with-profits above, but deliberately dressed up in unit-linked <em>language</em> (unit prices, unit holdings) for marketing/administrative consistency with unit-linked products — worth noting the underlying economics (smoothed bonuses) is what actually matters, not the unit terminology."
            },
            {
                "q": "What does 'explicit charges' mean in the context of unit-linked contracts?",
                "a": "Charges are deducted transparently and separately from the fund, rather than being implicitly built into bonus rates.",
                "explain": "This transparency is a defining feature that distinguishes unit-linked products from with-profits ones — a with-profits policyholder can't easily see how much of their smoothed bonus was 'really' investment return versus expense recovery, while a unit-linked policyholder can see charges deducted as a distinct, visible line item, covered in full in Module 23."
            },
            {
                "q": "Why might terminal bonuses vary significantly between one claim and another?",
                "a": "They reflect the insurer's actual investment performance and profits over the specific period the policy was in force, which varies by cohort/timing.",
                "explain": "This is the direct consequence of the terminal bonus being discretionary and performance-linked (from earlier in this module) — two otherwise-identical policies that happened to mature in different years (one after a strong market, one after a weak one) can receive quite different terminal bonuses, purely due to timing."
            },
            {
                "q": "What risk does an insurer bear differently under conventional with-profits versus unit-linked contracts?",
                "a": "With conventional with-profits, the insurer bears more investment risk (guarantees + smoothing); under unit-linked, more risk passes directly to the policyholder.",
                "explain": "This is the module's overarching theme stated explicitly — every card in this module ultimately traces back to this one risk-allocation question: how much investment risk does the <em>insurer</em> retain (via guarantees and smoothing) versus pass through directly to the <em>policyholder</em>, and conventional with-profits and unit-linked sit at opposite ends of that spectrum."
            },
            {
                "q": "How might a 'guaranteed level annuity' fit within the variable benefits topic?",
                "a": "It provides a fixed, non-varying income, in contrast to with-profits or unit-linked products where the benefit level can vary with investment performance.",
                "explain": "This card is included as a deliberate contrast/anchor point — it's the plain-vanilla, Module 14-style annuity you already know, included here specifically so you can see clearly what 'variable' benefits are being contrasted <em>against</em>: a benchmark product where none of this module's variability applies at all."
            },
            {
                "q": "Why is smoothing important to policyholders in with-profits products?",
                "a": "It reduces the impact of short-term market volatility on the benefits they eventually receive, giving more stable, predictable growth.",
                "explain": "This is the policyholder-facing benefit that justifies the whole conventional with-profits design — someone who's uncomfortable with unit-linked-style direct market exposure can accept a somewhat lower expected return in exchange for the insurer absorbing (and smoothing out) the worst of the year-to-year volatility on their behalf."
            },
            {
                "q": "In an accumulating with-profits contract with a fund 'defined in monetary terms,' how are bonuses typically added?",
                "a": "As regular guaranteed and bonus interest payments credited directly to the monetary fund value, plus a terminal bonus at claim.",
                "explain": "This closes the module by tying accumulating with-profits back to the reversionary/terminal bonus split from its opening cards — the same two-tier structure (a regular, guaranteed-ish addition plus a final discretionary top-up) recurs here, just expressed as monetary fund growth rather than an increasing sum assured."
            }
        ]
    },
    {
        "id": "m17",
        "title": "Gross premiums",
        "description": "Shows how to calculate the premium an insurer charges for a policy — using the equivalence principle to balance expected premium income against expected benefit and expense outgo.",
        "cards": [
            {
                "q": "What is the 'equivalence principle' used to calculate gross premiums?",
                "a": "The premium is set so that, at the outset, the expected present value of premium income equals the expected present value of benefit outgo plus expenses.",
                "explain": "This is Module 7's equation of value, now with the premium $P$ as the unknown and the <em>whole</em> machinery of Modules 12-16 (mortality-weighted benefits) sitting on the other side — every technique built up across the life-contingencies modules so far exists to feed into exactly this one equation."
            },
            {
                "q": "What is the difference between a 'net premium' and a 'gross premium'?",
                "a": "A gross premium includes an allowance for expenses (and often profit); a net premium only covers the expected cost of benefits.",
                "explain": "Net premium is the simpler, more theoretical quantity (pure cost of benefits only); gross premium is what's actually charged in practice — this distinction resurfaces in Module 18's reserving material, where net premium reserves are used as a simplified, more conservative alternative to gross premium reserves."
            },
            {
                "q": "Give two types of expense typically allowed for in gross premium calculations.",
                "a": "Initial expenses (incurred at the start of the policy) and renewal expenses (incurred regularly throughout the policy).",
                "explain": "The <em>timing</em> distinction matters for how each is valued: initial expenses are a single lump sum at time 0 needing no discounting at all, while renewal expenses need their own annuity function (often the same $\\ddot{a}_x$ used for premiums) to value the whole recurring stream."
            },
            {
                "q": "How does a single premium contract's gross premium calculation differ from a regular premium contract's?",
                "a": "A single premium is set equal to the present value of benefits plus expenses; a regular premium's annual amount is found by dividing that total by the relevant premium annuity factor.",
                "explain": "This is exactly Module 8's loan-instalment logic ($X=\\frac{L}{a_{\\overline{n}|}}$) reapplied here: a single premium skips the annuity step entirely (no need to spread cost over time), while a regular premium divides the same total cost by an annuity factor, just now a life-contingent one like $\\ddot{a}_x$ instead of a certain-term one."
            },
            {
                "q": "How would you calculate a level annual gross premium $P$ for a whole life assurance, allowing for expenses?",
                "a": "Set $P \\cdot \\ddot{a}_x = (\\text{sum assured}) A_x + (\\text{PV of expenses})$, then solve for $P$.",
                "explain": "This is the module's central worked template — the equivalence principle from the top of this module, made fully concrete: premium income (left side) must equal benefit cost plus expenses (right side), and every other premium calculation in this module is a variation on this same structure with different assurance/annuity functions swapped in."
            },
            {
                "q": "What does it mean for death benefits to 'increase by a constant compound rate'?",
                "a": "The sum assured paid on death grows by a fixed percentage each policy year (e.g. increasing with assumed inflation).",
                "explain": "This is the <em>geometric</em> growth case flagged back in Module 6 as needing a different technique from the arithmetic $(Ia)$ family — a compound-growing sum assured is typically valued by effectively discounting at a modified 'net of growth' rate, similar in spirit to the Gordon growth model from Module 10."
            },
            {
                "q": "How would you handle a death benefit payable 'immediately on death' rather than 'at the end of year of death' in a premium calculation?",
                "a": "Use the corresponding 'immediate' assurance function (e.g. $\\overline{A}_x$ instead of $A_x$) in the equation of value.",
                "explain": "This is a direct, mechanical swap using Module 13's bar notation — nothing else about the equivalence-principle setup changes, you're simply substituting a more realistic (immediate-payment) assurance function in place of the simpler end-of-year one."
            },
            {
                "q": "What does it mean for survival benefits to be 'payable at defined intervals other than at maturity'?",
                "a": "The policy pays out at multiple points during the term if the policyholder survives to each of those points, not just a single benefit at the end.",
                "explain": "This describes a structure like a series of pure endowments at different durations, rather than one lump-sum pure endowment at the very end — valuing it means summing several $_nE_x$-style pure endowment factors (Module 14) at different values of $n$, one for each survival payment date."
            },
            {
                "q": "Why might renewal expenses be expressed 'per premium' rather than as a fixed amount?",
                "a": "Because some renewal costs (e.g. commission) are often set as a percentage of each premium collected.",
                "explain": "This creates a genuine algebraic subtlety worth watching for: if renewal expenses are a percentage OF the premium $P$ itself, then $P$ appears on <em>both</em> sides of the equivalence-principle equation (once as income, once embedded in the expense term), so solving for $P$ requires collecting terms rather than simple division."
            },
            {
                "q": "What's the effect of higher assumed initial expenses on the calculated gross premium, all else equal?",
                "a": "The gross premium increases, since more expense needs to be recovered from the same premium income.",
                "explain": "This is a direct consequence of the equivalence principle: the right-hand side of the equation (benefits plus expenses) has grown, so for the equation to still balance, the premium on the left-hand side must grow too — a useful intuition check whenever a question changes an expense assumption and asks how the premium responds."
            },
            {
                "q": "Why must the equivalence principle use expected present values rather than just nominal totals?",
                "a": "Because both premiums and benefits are contingent on survival/death and paid at different points in time, so must be discounted and probability-weighted consistently.",
                "explain": "This is the same 'why discount cashflows at all' justification from Module 1, now compounded with Module 12's mortality weighting — without <em>both</em> adjustments (timing <em>and</em> probability), premiums and benefits occurring at different future dates, with different chances of actually happening, simply couldn't be meaningfully compared or equated."
            },
            {
                "q": "What does 'regular premiums payable annually or more frequently' affect in the premium equation?",
                "a": "The choice of annuity function used for premiums — e.g. $\\ddot{a}_x^{(12)}$ for monthly premiums instead of $\\ddot{a}_x$ for annual.",
                "explain": "This is Module 15's frequency-conversion approximation put to direct use — the equivalence principle's structure doesn't change at all, only which specific annuity function ($\\ddot{a}_x$ vs $\\ddot{a}_x^{(12)}$ vs others) represents the premium income stream on the left-hand side."
            },
            {
                "q": "How would a policy allowing 'only a single premium' simplify the gross premium equation?",
                "a": "There's no premium annuity term — the single premium itself directly equals the present value of benefits plus expenses.",
                "explain": "Restates the single-vs-regular distinction from earlier in this module — worth remembering as the <em>simplest</em> possible version of the equivalence principle in this whole module, useful as a sanity-check baseline before tackling more complex regular-premium, expense-laden variants."
            },
            {
                "q": "Give one reason an insurer would want to allow for expenses when setting premiums, beyond just covering benefit cost.",
                "a": "To ensure the policy is profitable / commercially viable, since running the business has real costs beyond the benefits themselves.",
                "explain": "This is the commercial justification for why gross (not just net) premiums matter in practice — an insurer charging only the net premium (pure cost of benefits) would go out of business, since it would never recover its administration, sales, and overhead costs, however accurately it priced the mortality risk itself."
            },
            {
                "q": "How would combined death and survival benefits (an endowment assurance) be reflected in a gross premium equation?",
                "a": "The benefit side would use the endowment assurance function (sum of term assurance and pure endowment components).",
                "explain": "This is Module 13's $A_{x:\\overline{n}|}=A^1_{x:\\overline{n}|}+A^{\\ 1}_{x:\\overline{n}|}$ identity plugged directly into this module's equivalence-principle template — the premium calculation technique itself never changes; only the specific assurance function representing the benefit side of the equation does."
            }
        ]
    },
    {
        "id": "m18",
        "title": "Gross premium reserves",
        "description": "Explains why insurers hold reserves, how to calculate them prospectively and retrospectively, and the recursive relationship linking reserves at successive durations.",
        "cards": [
            {
                "q": "Why does an insurance company set up reserves for its policies?",
                "a": "To ensure it holds enough assets to meet future liabilities under existing policies, since premiums received to date may not yet cover the expected cost of future benefits/expenses.",
                "explain": "This is a direct consequence of level premiums (Module 17) combined with rising mortality risk over a lifetime — early premiums are deliberately set higher than the pure cost of risk in those early years (to keep the premium level for the whole term), and reserving is how the insurer holds onto that early 'overpayment' to fund the higher risk cost in later years."
            },
            {
                "q": "What is the 'prospective' gross premium reserve?",
                "a": "The expected present value of future benefits and expenses, minus the expected present value of future premiums, calculated at a given valuation date.",
                "explain": "This is precisely Module 8's prospective loan-balance method, applied to an insurance policy instead of a loan — 'what's left to be paid out in the future' minus 'what's left to be received in the future' at today's valuation date, using exactly the same forward-looking equation of value logic."
            },
            {
                "q": "What is the 'retrospective' gross premium reserve?",
                "a": "The accumulated value of past premiums received, minus the accumulated value of past benefits and expenses paid, up to the valuation date (per surviving policyholder).",
                "explain": "This mirrors Module 8's retrospective loan-balance method equally directly — the 'per surviving policyholder' qualifier is the new life-contingent twist: unlike a loan, some of the original cohort of policyholders will have died along the way, so past cashflows must be accumulated per <em>survivor</em>, not per original policy sold."
            },
            {
                "q": "Under what conditions are the prospective and retrospective reserves equal?",
                "a": "When the same mortality, interest and expense assumptions are used throughout (at issue and at the valuation date) as were used to set the original premium.",
                "explain": "This is Module 8's equivalence condition, generalised to require <em>all three</em> assumption types (not just interest) to stay consistent — in practice, insurers often deliberately use different (more prudent) assumptions for reserving than for original pricing, which is exactly why the two methods can diverge in real-world reserving, unlike the simple loan case."
            },
            {
                "q": "What is the 'future loss random variable' for a policy?",
                "a": "The present value of future benefits and expenses minus the present value of future premiums, viewed as a random variable at a given point in time.",
                "explain": "This is Module 15's mean/variance toolkit (built around the random variable $Z=v^{K_x+1}$) extended to a full policy including premiums and expenses, not just the death benefit alone — the prospective reserve, as the next card shows, is simply this random variable's <em>expected</em> value."
            },
            {
                "q": "How does the gross premium reserve relate to the expected future loss random variable?",
                "a": "The reserve equals the expected value of the future loss random variable (the prospective reserve).",
                "explain": "This ties the previous card directly back to the prospective reserve definition — reserving isn't a separate new calculation from Module 15's mean-and-variance work, it's simply taking the <em>expectation</em> (mean) of that same future-loss random variable, evaluated at a later point in the policy's life than time zero."
            },
            {
                "q": "What is the recursive relationship between successive annual gross premium reserves (in words)?",
                "a": "The reserve at the start of a year, plus that year's premium, less expenses, accumulated with interest, less the expected cost of death claims during the year, gives the reserve at the end of the year (per survivor).",
                "explain": "This is one of the most useful practical formulas in CM1 — it's the actuarial equivalent of Module 8's loan schedule (opening balance, interest, payment, closing balance), letting reserves be rolled forward mechanically year by year rather than recalculated from a full prospective/retrospective formula each time."
            },
            {
                "q": "Why is the recursive reserve relationship useful in practice?",
                "a": "It allows reserves to be rolled forward year by year using only the previous year's reserve and that year's assumptions, rather than recalculating from scratch.",
                "explain": "This is exactly why real insurers maintain reserves this way operationally — recalculating a full prospective reserve for every policy every year from first principles would be far more computationally expensive than simply rolling last year's held reserve forward one step using the recursive formula."
            },
            {
                "q": "What does the recursive relationship let you derive about a year's mortality profit?",
                "a": "The relationship's 'release' or 'strain' from actual versus expected deaths during the year effectively gives the mortality profit or loss for that year.",
                "explain": "This is the direct bridge into Module 21's mortality profit topic — the recursive formula already has an 'expected cost of death claims' term built in; comparing that <em>expected</em> figure to what <em>actually</em> happened during the year is precisely the expected-vs-actual death strain comparison Module 21 formalises."
            },
            {
                "q": "What is a 'net premium' reserve, and how does it differ from a gross premium reserve?",
                "a": "A net premium reserve uses only the net premium (no expense loading), ignoring both future and past expenses — a simplified, historically more conservative reserving approach.",
                "explain": "This deliberately reuses Module 17's net-vs-gross premium distinction, now applied to reserving rather than pricing — net premium reserving is a historically important simplification (still sometimes used for statutory minimum reserving) that sidesteps needing reliable expense assumptions at all."
            },
            {
                "q": "How do net premiums relate to gross premiums in reserving?",
                "a": "The net premium is calculated using the equivalence principle applied only to benefits; the net premium reserve uses this net premium, not the actual gross premium charged.",
                "explain": "This is a subtle but important point: the net premium reserve does <em>not</em> simply strip expenses out of the <em>actual</em> gross premium charged — it recalculates an entirely separate, hypothetical 'net premium' from scratch via its own equivalence principle equation (benefits only), then reserves using <em>that</em> theoretical figure."
            },
            {
                "q": "Why might a net premium reserving approach be considered more prudent than a gross premium approach?",
                "a": "It ignores the (potentially unreliable) expense loading in premiums, giving a more cautious reserve, less sensitive to expense assumption changes.",
                "explain": "The logic: gross premium reserving implicitly assumes the insurer will correctly recover its expenses as planned in every future year — if future expenses turn out higher than assumed, a gross premium reserve could understate what's really needed, whereas net premium reserving sidesteps that risk entirely by not relying on expense assumptions being right."
            },
            {
                "q": "What happens to a policy's reserve over its term for a typical whole life or endowment assurance?",
                "a": "It generally increases over time, as the policy moves closer to the eventual claim.",
                "explain": "This connects to the reserving rationale from the top of this module — as time passes, the 'overpayment' built up in early years (per the level-premium logic) keeps accumulating, and the remaining PV of future benefits (relative to remaining future premiums) grows as a proportion of the total, both pushing the reserve upward."
            },
            {
                "q": "Why is understanding equivalence between prospective and retrospective reserves useful for exam calculations?",
                "a": "It lets you choose whichever method is computationally easier for a given problem, knowing both give the same answer under consistent assumptions.",
                "explain": "This is a practical exam-technique tip, not just theory — for a policy early in its term, retrospective might involve fewer past cashflows to accumulate; late in its term, prospective might involve fewer future cashflows to discount — pick whichever direction has less to compute."
            },
            {
                "q": "How would allowing for expenses generally affect the size of the gross premium reserve compared to a net premium reserve?",
                "a": "It can increase or decrease the reserve depending on the expense pattern — high initial expenses can reduce early reserves relative to net premium reserves.",
                "explain": "This is a counterintuitive result worth understanding: you might expect 'allowing for expenses' to always mean a <em>higher</em> reserve, but if most expenses are front-loaded (heavy initial costs, light renewal costs), the gross premium's expense loading is mostly already 'spent' early on, which can actually make gross premium reserves <em>lower</em> than net premium reserves in the policy's early years."
            }
        ]
    },
    {
        "id": "m19",
        "title": "Joint life and last survivor functions",
        "description": "Extends single-life assurance and annuity functions to two (or more) lives — joint life (first death/survival) and last survivor functions.",
        "cards": [
            {
                "q": "What does $\\ddot{a}_{xy}$ represent?",
                "a": "The expected present value of an annuity of $1$ per year, paid annually in advance, while both lives $x$ and $y$ are alive (a 'joint life' annuity, ceasing on first death).",
                "explain": "This module extends every single-life function from Modules 12-15 to <em>two</em> lives at once — the subscript $xy$ (no separator) is the notation for 'both alive', and it's worth thinking of this as Module 14's $\\ddot{a}_x$ but with a stricter survival condition: <em>Both</em> lives must be alive, not just one."
            },
            {
                "q": "What does $A_{xy}$ represent?",
                "a": "The expected present value of a benefit of $1$ payable at the end of the year in which the first of the two lives $(x)$ and $(y)$ dies.",
                "explain": "The joint-life <em>assurance</em> pays on the <em>first</em> death, exactly mirroring how the joint-life <em>annuity</em> above stops at the first death — both functions are governed by the same underlying event (whichever life dies first), just triggering opposite actions (annuity stops paying; assurance starts paying)."
            },
            {
                "q": "What is a 'last survivor' annuity, $\\ddot{a}_{\\overline{xy}}$?",
                "a": "An annuity that continues to be paid as long as at least one of the two lives is still alive, ceasing only on the second (later) death.",
                "explain": "The bar over $xy$ signals 'last survivor' throughout this module's notation, in direct contrast to the un-barred joint-life ($xy$) functions above — note this is a <em>much</em> more generous annuity than the joint-life version, since it keeps paying through the whole period after the first death too."
            },
            {
                "q": "What is the key identity linking joint life and last survivor functions?",
                "a": "$\\ddot{a}_x + \\ddot{a}_y = \\ddot{a}_{xy} + \\ddot{a}_{\\overline{xy}}$ (and similarly for assurance functions).",
                "explain": "This identity is elegant and worth deriving intuitively: adding the two <em>separate</em> single-life annuities double-counts the period while <em>both</em> are alive and misses nothing else, while adding joint-life-annuity plus last-survivor-annuity <em>also</em> covers 'both alive' once (via joint life) plus 'exactly one alive' once (via the extra last-survivor period) — both sides account for the same total payment pattern, just split differently."
            },
            {
                "q": "Under the common assumption of independent future lifetimes, how do you calculate the joint survival probability $_tp_{xy}$?",
                "a": "$_tp_{xy} = {_tp_x} \\times {_tp_y}$ — the product of the individual survival probabilities.",
                "explain": "This is basic independent-events probability (Module 12's survival probabilities multiplied together) — note the word 'independent' is doing real work: in reality, spouses' lifetimes are often somewhat correlated (shared lifestyle, environment), but the standard CM1 approach assumes independence unless a question explicitly says otherwise, purely for tractability."
            },
            {
                "q": "What does $_tq_{xy}$ represent?",
                "a": "The probability that at least one of the two lives $(x)$ and $(y)$ has died within $t$ years: $_tq_{xy} = 1 - {_tp_{xy}}$",
                "explain": "Careful with the wording here — the subscript $xy$ (no bar) keeps meaning 'joint life' throughout, so $_tq_{xy}$ is the complement of <em>both</em> surviving, i.e. <em>At least one</em> has died; it's easy to misread this as 'both have died', which is actually a different, smaller probability."
            },
            {
                "q": "What does the last survivor assurance function $A_{\\overline{xy}}$ represent?",
                "a": "The expected present value of $1$ payable at the end of the year of the second (later) death of the two lives.",
                "explain": "This is the assurance-side counterpart to the last-survivor annuity above — note both $A_{\\overline{xy}}$ and $\\ddot{a}_{\\overline{xy}}$ care about the <em>second</em> (later) death, in contrast to $A_{xy}$ and $\\ddot{a}_{xy}$, which both care about the <em>first</em> death; keeping the bar/no-bar distinction straight is the single most important notational skill in this module."
            },
            {
                "q": "How would you find $_tp_{\\overline{xy}}$, the probability that at least one life survives $t$ years?",
                "a": "$_tp_{\\overline{xy}} = {_tp_x} + {_tp_y} - {_tp_{xy}}$",
                "explain": "This is the classic inclusion-exclusion formula from basic probability (P(A or B) = P(A) + P(B) − P(A and B)), applied to survival — subtracting $_tp_{xy}$ avoids double-counting the scenario where <em>both</em> lives survive, which would otherwise be counted twice (once in $_tp_x$, once in $_tp_y$)."
            },
            {
                "q": "Why is a 'joint life last survivor' annuity a common real-world product?",
                "a": "It's often used for a married couple's pension, continuing payments until both spouses have died, providing income security to the surviving spouse.",
                "explain": "This is the practical, professional payoff of the whole module — a standard couple's pension is precisely $\\ddot{a}_{\\overline{xy}}$ (possibly with a reduced amount after the first death, which Module 20's reversionary annuities refine further), ensuring the surviving spouse isn't left with no income just because their partner died first."
            },
            {
                "q": "What assumption is typically made about the two lives' future lifetimes unless stated otherwise?",
                "a": "That they are independent — the death or survival of one life doesn't affect the probability distribution of the other's future lifetime.",
                "explain": "Restates the independence assumption flagged earlier in this module as the module's <em>default</em> baseline — worth remembering this is a simplifying assumption, not a fact about the world, since it's what makes the clean multiplicative formulas throughout this module possible."
            },
            {
                "q": "How would you extend joint life functions to three or more lives?",
                "a": "The same multiplicative independence logic extends — e.g. $_tp_{xyz} = {_tp_x}\\cdot{_tp_y}\\cdot{_tp_z}$ for the probability all three survive.",
                "explain": "This confirms the two-life techniques in this module aren't a special case limited to exactly two lives — the same independence-multiplication trick scales to any number of lives, useful for e.g. a family trust or a multi-life scheme with more than a simple couple involved."
            },
            {
                "q": "What does 'contingent' mean in the phrase 'contingent and reversionary benefits'?",
                "a": "A benefit that is payable only if a specified life dies before (or after) another specified life — payment is contingent on the order of deaths.",
                "explain": "This previews Module 20's whole topic — note the key difference from <em>this</em> module's joint-life/last-survivor functions: those only cared about <em>whether</em> a death had happened (first or second); contingent benefits additionally care about <em>which</em> specific life died first, a harder question covered next."
            },
            {
                "q": "How would a term assurance on the first death of two lives, $A^1_{xy:\\overline{n}|}$, be interpreted?",
                "a": "The expected present value of $1$ payable at the end of the year of the first death of $(x)$ and $(y)$, provided that first death occurs within $n$ years.",
                "explain": "This combines <em>three</em> notational conventions you now know: the '1 over the joint subscript' meaning 'triggered by first death' (echoing Module 13's superscript-1 convention), the term $\\overline{n}|$ truncating to $n$ years (Module 13's term assurance), and the $xy$ joint-life subscript from earlier in this module."
            },
            {
                "q": "Why is the 'first death' (joint life) function always smaller than either individual single-life annuity function?",
                "a": "Because the annuity ceases as soon as either life dies, which happens no later than either individual's own death — so payments are expected to stop sooner.",
                "explain": "This gives you a quick sanity check for any calculated $\\ddot{a}_{xy}$ value: it must be <em>smaller</em> than both $\\ddot{a}_x$ and $\\ddot{a}_y$ individually — if your answer comes out larger than either single-life value, something has gone wrong in the calculation."
            },
            {
                "q": "Why is the 'last survivor' annuity always at least as large as the larger of the two individual single-life annuities?",
                "a": "Because it continues paying until the later of the two deaths, which is at least as late as either individual life's own death.",
                "explain": "The mirror-image sanity check to the joint-life card above: $\\ddot{a}_{\\overline{xy}}$ must be <em>at least</em> as large as $\\max(\\ddot{a}_x,\\ddot{a}_y)$ — together, these two bounding checks (joint life is the smallest of the three related annuities, last survivor is the largest) are a quick way to catch a bar/no-bar notation mix-up in your own working."
            }
        ]
    },
    {
        "id": "m20",
        "title": "Contingent and reversionary benefits",
        "description": "Values benefits payable only if one specified life dies before (or after) another — contingent assurances and reversionary annuities.",
        "cards": [
            {
                "q": "What is a 'contingent' assurance benefit?",
                "a": "A benefit payable on the death of one specified life, but only if that death occurs before (or after) the death of another specified life.",
                "explain": "This module takes Module 19's 'which of the two died' question and sharpens it into 'which <em>specific</em> life died first' — Module 19's $A_{xy}$ just cared that A first death happened; contingent assurances additionally care <em>whose</em> death it was, which is a finer-grained (and computationally harder) question."
            },
            {
                "q": "What does the notation $A^1_{xy}$ (with a '1' over just the $x$) mean in a two-life context?",
                "a": "A benefit payable on the death of $(x)$, but only if $(x)$ dies before $(y)$.",
                "explain": "This is exactly the same '1 over the trigger life' convention introduced back in Module 13 and reused in Module 19 — the superscript sits specifically over $x$ here (not over both, and not over $y$), precisely pinpointing which life's death is both required <em>and</em> must come first."
            },
            {
                "q": "What is a 'reversionary annuity'?",
                "a": "An annuity payable to one life (e.g. $y$), but only starting after another specified life (e.g. $x$) has died, and only while $y$ is still alive.",
                "explain": "This is a contingent <em>annuity</em> rather than a contingent assurance — note it combines <em>two</em> conditions that must both hold at each point in time: $(x)$ must already be dead (the triggering event) <em>and</em> $(y)$ must still be alive (the ongoing payment condition), unlike Module 19's simpler joint/last-survivor annuities which only track one condition at a time."
            },
            {
                "q": "What real-world product commonly uses a reversionary annuity structure?",
                "a": "A 'widow's' or dependant's pension — income starting only after the main pensioner's death, paid to the surviving dependant.",
                "explain": "This is the important real-world application that makes this whole (mathematically fiddly) module worth learning — many pension schemes provide exactly this structure: no benefit to the dependant while the main pensioner is alive, but a continuing income once they've died, for as long as the dependant survives."
            },
            {
                "q": "How is a reversionary annuity to $y$ after $x$'s death, $a_{x|y}$, related to standard joint life and single life functions?",
                "a": "$a_{x|y} = a_y - a_{xy}$ — the full annuity to $y$, minus the portion payable while both are alive.",
                "explain": "This elegant identity avoids needing any new integral or summation technique at all — the logic: $(y)$'s full lifetime annuity naturally splits into 'the period while both are alive' (which is $a_{xy}$, Module 19's joint life annuity) plus 'the period after $(x)$ has died but $(y)$ is still alive' (which is exactly the reversionary annuity you want) — subtracting isolates that second piece."
            },
            {
                "q": "Why must you be careful about the exact timing convention (annuity-due vs. immediate) when deriving reversionary annuity formulas?",
                "a": "Because the identity linking the reversionary, single-life and joint-life annuities depends on consistent timing assumptions — mixing conventions gives the wrong result.",
                "explain": "This is a genuine, common source of exam errors: the clean identity above requires $a_y$ and $a_{xy}$ to use the <em>same</em> payment convention (both immediate, or both due) — accidentally mixing $\\ddot{a}_y - a_{xy}$ (due minus immediate) breaks the subtraction logic, since the two annuities would then be measuring slightly different things."
            },
            {
                "q": "What does 'contingent probability' mean in the context of these benefits?",
                "a": "The probability of an event (e.g. death of one life) occurring, conditional on (or in a specified order relative to) an event affecting the other life.",
                "explain": "This generalises the everyday statistical idea of conditional probability to the specific <em>ordering</em> question this module cares about — not just 'does $(x)$ die within $n$ years' (Module 12's $_nq_x$), but 'does $(x)$ die within $n$ years <em>and</em> before $(y)$', which needs the joint reasoning covered in the calculation cards below."
            },
            {
                "q": "Why can't you simply say the probability $(x)$ dies first is $\\frac{1}{2}$ in general?",
                "a": "Because the probability depends on each life's specific mortality (age, health, etc.) — it's only $\\frac12$ under special symmetric assumptions.",
                "explain": "This is a useful trap-avoidance card: it's tempting to assume 'coin flip' odds for something that sounds symmetric, but a much older or sicker life is more likely to die first than a young, healthy one — the actual probability must be calculated properly using both lives' specific mortality, per the integral technique below."
            },
            {
                "q": "How would you calculate the probability that $(x)$ dies before $(y)$, within $n$ years?",
                "a": "By integrating (or summing) the probability $(x)$ dies at each future time $t$ within the term, multiplied by the probability $(y)$ is still alive at that time.",
                "explain": "The logic, in words: for $(x)$ to die <em>before</em> $(y)$ at some specific instant $t$, <em>two</em> things must both be true — $(x)$ actually dies right around time $t$, <em>and</em> $(y)$ is still alive at time $t$ (hasn't already died earlier) — multiplying these and summing/integrating over all possible values of $t$ within the term builds up the total probability."
            },
            {
                "q": "What is a 'contingent' annuity, as opposed to a contingent assurance?",
                "a": "An annuity payable to one life only while a specific ordering of survival/death between the two lives holds — the reversionary annuity is one example.",
                "explain": "This is just the general category name that the specific reversionary annuity (earlier in this module) belongs to — useful to know the broader term exists, since a question could describe a <em>different</em> ordering-dependent annuity structure and expect you to recognise it as another instance of this same general contingent-annuity idea."
            },
            {
                "q": "How would you calculate $A^1_{xy}$ (benefit on $(x)$'s death before $(y)$'s) using an integral, in continuous terms?",
                "a": "Integrate over $t$ the probability density of $(x)$'s death at $t$, multiplied by the probability $(y)$ is still alive at $t$, discounted to present value.",
                "explain": "This is exactly the probability-calculation card above, with a discount factor $v^t$ (or $e^{-\\delta t}$) now added into the integrand to convert the raw probability into a present <em>value</em> — the same 'multiply and integrate' structure as every other continuous life-contingent formula in this course, just with the two-life ordering condition folded in."
            },
            {
                "q": "Why are contingent benefit calculations generally more involved than simple joint life (first-death) calculations?",
                "a": "Because they require tracking not just whether a death has occurred, but the specific order in which the two lives died.",
                "explain": "This is the module's central theme stated directly — Module 19's joint-life functions only needed a <em>yes/no</em> answer (has the first death happened yet), while this module needs a <em>which</em> answer (whose death was it), which is a strictly harder question requiring the extra integral/summation machinery covered throughout."
            },
            {
                "q": "What identity links $A^1_{xy}$ and $A^1_{yx}$ to the joint life assurance $A_{xy}$?",
                "a": "$A^1_{xy} + A^1_{yx} = A_{xy}$ — one of the two lives must die first, and together they account for the full joint life first-death assurance.",
                "explain": "This is the assurance-side analogue of the earlier probability card ($_tp_{\\overline{xy}}$'s inclusion-exclusion logic in Module 19), but simpler here since 'x dies first' and 'y dies first' are mutually exclusive <em>and</em> exhaustive outcomes (exactly one must happen) — no double-counting correction is needed, just a straight sum."
            },
            {
                "q": "Why might contingent benefits appear less often in real products than joint life or last survivor benefits?",
                "a": "They're a more niche/specialised structure, less common than the standard joint life or last-survivor pension/insurance products.",
                "explain": "Worth knowing this is a more theoretical/exam-focused topic than a heavily-sold real product — straightforward joint-life and last-survivor products (Module 19) are common (couples' pensions, joint mortgages), while pure contingent/ordering-dependent benefits are a more specialised structure, included mainly to build your general multi-life mathematical toolkit."
            },
            {
                "q": "How does the deferred nature of a reversionary annuity affect its value compared to an equivalent immediate annuity to the same life?",
                "a": "It's smaller, since payment only begins after a triggering event (the other life's death) that may occur late or not be certain within any fixed horizon.",
                "explain": "This is the same 'sooner is worth more, and uncertain/delayed is worth less' intuition that's run through the whole course since Module 1 — a reversionary annuity to $(y)$ is always worth <em>less</em> than an ordinary $\\ddot{a}_y$ to the same life, since it might start very late (if $(x)$ lives a long time) or, in a temporary version, might never start at all."
            }
        ]
    },
    {
        "id": "m21",
        "title": "Mortality profit",
        "description": "Compares actual mortality experience to that expected under the pricing/reserving assumptions, and shows how to quantify the resulting profit or loss.",
        "cards": [
            {
                "q": "What is 'death strain at risk' (DSAR) for a policy?",
                "a": "The extra amount the insurer must pay out on death beyond what it has already reserved — benefit minus the reserve already held.",
                "explain": "This is the crucial insight underlying this whole module: an insurer doesn't need to fund the <em>full</em> sum assured out of nowhere when a claim happens, because it's already been building up a reserve (Module 18) toward that policy — DSAR isolates just the <em>incremental</em> cost death actually creates, on top of what's already been set aside."
            },
            {
                "q": "What is 'expected death strain' (EDS)?",
                "a": "The death strain at risk multiplied by the expected (assumed) probability of death during the year, summed across the portfolio.",
                "explain": "This is what the insurer <em>budgeted</em> for — exactly the death-cost term embedded in Module 18's recursive reserve formula ('less the expected cost of death claims during the year'), now isolated and named explicitly as its own quantity for comparison against what actually happens."
            },
            {
                "q": "What is 'actual death strain' (ADS)?",
                "a": "The death strain at risk, summed only over the policies where death actually occurred during the year.",
                "explain": "This is the <em>real</em> cost the insurer actually faced, as opposed to EDS's budgeted/assumed cost — note ADS sums DSAR only over policies where a claim happened, while EDS sums (DSAR × probability) across the <em>whole</em> portfolio, since before the year begins you don't know which specific policies will claim."
            },
            {
                "q": "How is 'mortality profit' calculated?",
                "a": "Mortality profit = Expected death strain − Actual death strain.",
                "explain": "This is the module's headline formula, and the direction is worth memorising precisely: <em>Expected</em> minus <em>actual</em> (not the other way round) — if actual costs come in below what was budgeted, that's a profit (a positive number), which matches the everyday intuition of 'spending less than budgeted is good'."
            },
            {
                "q": "What does it mean if actual death strain exceeds expected death strain?",
                "a": "More claims (or larger claims) occurred than assumed, resulting in a mortality loss (negative mortality profit) for the insurer.",
                "explain": "This is simply the formula above producing a negative result — worth being able to state the real-world interpretation directly: either more people died than the mortality assumption predicted, or the ones who died had larger death strains (bigger sum-at-risk relative to reserve) than typical, or some combination of both."
            },
            {
                "q": "For a whole life assurance with a level sum assured $S$ and reserve $_tV$ at the start of the year, what is the death strain at risk?",
                "a": "$S - {_tV}$, approximately (adjusted for interest/timing conventions as needed).",
                "explain": "A direct worked instance of the opening card's definition — the sum assured $S$ is the full benefit owed, and $_tV$ (using Module 18's reserve notation) is what's already been set aside, so the <em>gap</em> between them is exactly the extra cost death creates for the insurer this year."
            },
            {
                "q": "How does death strain at risk differ for an annuity in payment, compared to an assurance?",
                "a": "For an annuity, death strain is typically the reserve released (a gain to the insurer), unlike an assurance where death triggers a payment.",
                "explain": "This is an important sign-flip to understand: for an assurance, death <em>creates</em> a liability (paying the sum assured); for an annuity in payment, death <em>ends</em> a liability (no more payments needed) — so death strain at risk can be <em>negative</em> for annuities, meaning the insurer is financially better off (releases reserve) when an annuitant dies, the exact opposite of the assurance case."
            },
            {
                "q": "Why might death strain at risk be negative for certain products?",
                "a": "If the reserve held already exceeds the benefit payable on death (e.g. for annuities in payment), the insurer effectively benefits (releases reserve) on death.",
                "explain": "This directly explains the annuity case above in general terms — whenever the reserve $_tV$ held is <em>larger</em> than the benefit owed on death (zero, for a pure annuity), the formula 'benefit minus reserve' naturally goes negative, confirming the insurer keeps (releases) reserve rather than paying out."
            },
            {
                "q": "How would mortality profit be calculated for policies where death benefits are payable immediately on death rather than end of year?",
                "a": "Similarly, but adjusted for the mid-year (or exact) timing of payment, typically using a half-year interest adjustment or exact timing if known.",
                "explain": "This is Module 13's immediate-vs-end-of-year distinction resurfacing here — the underlying EDS/ADS/mortality-profit framework doesn't change at all, only the precise timing adjustment applied to each death strain calculation, similar in spirit to the UDD-based interpolation from Module 12."
            },
            {
                "q": "Why is monitoring mortality profit/loss important for an insurer?",
                "a": "It shows whether the mortality assumptions used for pricing/reserving are accurate, informing whether assumptions need to be revised.",
                "explain": "This is the whole module's practical justification — mortality profit isn't just an accounting curiosity, it's a direct <em>feedback signal</em>: a persistent pattern of mortality profit or loss over several years (see the trend-analysis card below) tells the insurer their pricing/reserving mortality table itself may need updating."
            },
            {
                "q": "If a life office assumed higher mortality than actually occurred, what would you expect for mortality profit?",
                "a": "A mortality profit (gain) — fewer/smaller claims occurred than the (pessimistic) assumption predicted.",
                "explain": "A useful direction check: assuming <em>more</em> deaths than actually happen means the insurer collected premiums/held reserves for a pessimistic scenario that didn't materialise, so paying out <em>less</em> than budgeted naturally produces a gain — this is exactly why insurers often deliberately use slightly prudent (pessimistic) mortality assumptions."
            },
            {
                "q": "How is death strain at risk affected by policies with survival (rather than death) benefits, e.g. pure endowments?",
                "a": "Death strain at risk is simply the negative of the reserve held, since the insurer keeps the reserve (no death benefit is paid).",
                "explain": "This is the pure-endowment special case of the annuity logic from earlier in this module — since a pure endowment (Module 13) pays <em>nothing</em> on death, the full reserve held is effectively released back to the insurer's benefit, giving DSAR $= 0 - {_tV} = -{_tV}$."
            },
            {
                "q": "What role does the number of policies (portfolio size) play in expected vs. actual death strain calculations?",
                "a": "Expected death strain is summed over the whole portfolio using assumed probabilities; actual death strain only involves the subset of policies where death occurred.",
                "explain": "This restates the ADS/EDS definitions from earlier with the portfolio angle made explicit — worth noting a genuine statistical point: with a <em>large</em> portfolio, actual claims tend to track expected claims more closely (a law-of-large-numbers effect), so mortality profit/loss for a big insurer tends to be smaller and steadier than for a small one, purely due to scale."
            },
            {
                "q": "How could an insurer use mortality profit analysis over several years?",
                "a": "To track trends in mortality experience versus assumptions, informing decisions on updating mortality tables or repricing products.",
                "explain": "A single year's mortality profit/loss could just be random noise — but a consistent <em>pattern</em> across several years (repeated profits, or repeated losses) is a much stronger signal that the underlying mortality assumption itself is systematically wrong and needs revisiting, which is exactly the practical use this card describes."
            },
            {
                "q": "What is the fundamental intuition behind mortality profit?",
                "a": "The insurer effectively 'insures' against the cost of death strain; if fewer or cheaper claims occur than priced for, it keeps the difference as profit.",
                "explain": "This closes the module with the one-sentence version worth having ready for any 'explain mortality profit' question — it's the same 'actual vs assumed' comparison that appears throughout actuarial work (pricing assumptions vs experience), here applied specifically to the mortality risk embedded in reserves via the death strain framework."
            }
        ]
    },
    {
        "id": "m22",
        "title": "Competing risks",
        "description": "Extends single-decrement modelling to multiple simultaneous risks (e.g. death, withdrawal, ill-health retirement) using multi-state Markov and multiple decrement models.",
        "cards": [
            {
                "q": "What is a 'multiple state model'?",
                "a": "A model describing how a life can move between different states (e.g. healthy, sick, dead) over time, with transition probabilities/forces between states.",
                "explain": "This module generalises <em>everything</em> you've learned since Module 12 — the simple life table is really just a two-state model (alive, dead) with one possible transition; a multiple state model allows any number of states and any pattern of transitions between them, of which the simple life table is the special case you already know."
            },
            {
                "q": "What is a 'multiple decrement' model?",
                "a": "A special case of a multi-state model with one starting ('active') state and several possible ways of leaving it, with no return to the active state.",
                "explain": "This sits between the simple two-state life table and the full generality of multi-state models — it adds <em>multiple</em> exit routes (e.g. death, withdrawal, retirement) but keeps the 'no return' restriction, unlike a genuine multi-state model (e.g. sickness insurance) where recovery back to the active state is possible."
            },
            {
                "q": "What is a 'dependent probability' of decrement in a multiple decrement context?",
                "a": "The probability of leaving the active state via a specific decrement, allowing for the fact that other decrements are also competing to remove the life from the active state first.",
                "explain": "'Dependent' here means dependent on the <em>other</em> decrements' presence — this is the <em>realistic</em>, observable quantity: if you watch a real population and count how many actually leave via death this year, that number is naturally reduced by the fact some people already left via withdrawal or retirement first, before death had a chance to act on them."
            },
            {
                "q": "What is an 'independent' rate of decrement, as distinct from a 'dependent' probability?",
                "a": "The rate of decrement that would apply if that decrement were the only one operating, ignoring competition from other decrements.",
                "explain": "This is a <em>hypothetical</em>, theoretical quantity — it's the same underlying mortality/withdrawal/retirement force in isolation, as if the <em>other</em> decrements simply didn't exist, useful as a clean underlying parameter to build the whole multiple decrement table from (since a person's genuine risk of death doesn't actually depend on whether withdrawal exists as a competing risk)."
            },
            {
                "q": "Why are dependent probabilities of decrement generally lower than the corresponding independent rates?",
                "a": "Because other decrements can remove the life from the active state first, so there's less exposure remaining for any single decrement to act on.",
                "explain": "This is the key relationship between the two concepts above — if some people who <em>would</em> have died this year instead withdrew first (removed from the pool by a competing decrement), the <em>observed</em> (dependent) death rate necessarily comes out lower than the <em>true</em> underlying (independent) mortality rate, since fewer people remained exposed to the risk of dying."
            },
            {
                "q": "What does it mean for forces of transition to be 'constant over single years of age' in this context?",
                "a": "A simplifying assumption used to convert between dependent probabilities and underlying forces of decrement within a given year.",
                "explain": "This is exactly Module 12's constant-force-of-mortality assumption, generalised to <em>multiple</em> simultaneous forces (one per decrement) instead of just one — it's what makes the independent-vs-dependent conversion cards above mathematically tractable, since combining several constant forces is much simpler than combining forces that vary continuously within the year."
            },
            {
                "q": "How would you construct a multiple decrement table?",
                "a": "Track, for each age, the number in the active state, and the number leaving via each separate decrement, analogous to a life table but with multiple causes of exit.",
                "explain": "This is Module 12's $l_x$/$d_x$ life table structure directly extended — instead of one $d_x$ column (deaths), you now have several columns ($d_x^{(\\text{death})}$, $d_x^{(\\text{withdrawal})}$, etc.), one for each decrement, all subtracting from the same active-state population $l_x$."
            },
            {
                "q": "How does a multiple decrement model relate to health/sickness insurance premium and benefit structures?",
                "a": "It can model transitions between healthy and sick states (and death), allowing premiums and sickness benefits to be valued based on the probability of being in each state at each future time.",
                "explain": "This actually goes <em>beyond</em> a pure multiple decrement model (since recovery from sick back to healthy is possible) into full multi-state territory — it's included here as the natural next step once you understand the multiple-exit-routes concept, even though it technically breaks the 'no return' restriction that defines a multiple decrement model specifically."
            },
            {
                "q": "What does it mean for a cashflow to be 'contingent upon multiple transition events'?",
                "a": "The cashflow's payment depends on the life having undergone a specific sequence or combination of state transitions.",
                "explain": "This generalises Module 20's contingent-benefit idea (which specific life died first) to a <em>much</em> wider range of possible triggering event sequences — e.g. a benefit that only pays if someone becomes sick, <em>then</em> recovers, <em>then</em> later dies, which needs the full state-transition machinery of this module to value properly."
            },
            {
                "q": "How is the expected present value of a benefit calculated under a multi-state model, in general terms?",
                "a": "Sum (or integrate) over all relevant future times and states, the probability of being in (or transitioning into) the triggering state, multiplied by the discounted benefit amount.",
                "explain": "This is the same 'probability times discount factor, summed over time' template used for <em>every</em> life-contingent function since Module 13 ($A_x$, $\\ddot{a}_x$, joint-life functions, contingent benefits) — multi-state models don't need a fundamentally new technique, just a richer set of probabilities (transition probabilities between states) plugged into the same underlying structure."
            },
            {
                "q": "What is the relationship between forces of transition and dependent probabilities when forces are assumed constant over a year?",
                "a": "The dependent probability of a specific decrement over the year can be derived from the constant forces of all decrements operating simultaneously.",
                "explain": "This restates the constant-force assumption card above with the calculation direction made explicit: given the (hypothetical) independent forces for each decrement, you can derive the (realistic, observable) dependent probabilities — the reverse direction (dependent probabilities to independent forces) is covered in a card below and is generally the harder direction."
            },
            {
                "q": "Why might a pension scheme use a multiple decrement model?",
                "a": "To allow for the several ways a member can leave active service — death, withdrawal, ill-health retirement, and normal retirement — each with different associated benefits.",
                "explain": "This is the module's central real-world application, and it's worth noting each exit route typically triggers a <em>different</em> benefit (a death-in-service lump sum, a withdrawal benefit, an ill-health pension, a normal retirement pension) — valuing the scheme's total liability means correctly weighting each possible exit route by its own dependent probability."
            },
            {
                "q": "How would you determine independent decrement forces given dependent (observed) probabilities?",
                "a": "Using the assumed relationship between forces and dependent probabilities, solving the equations linking them, typically requiring the dependent probabilities of all competing decrements simultaneously.",
                "explain": "This is the <em>harder</em>, reverse direction of the calculation flagged above — real-world data naturally gives you dependent (observed) probabilities, but pricing/reserving calculations often need the underlying independent forces, so this 'un-mixing' step (needing <em>all</em> the competing decrements' data at once, not just one) is an important practical technique."
            },
            {
                "q": "Why is a multiple decrement model described as 'a special case of a multi-state Markov model'?",
                "a": "Because it has a single starting state with several absorbing (exit) states and no transitions back into the active state.",
                "explain": "'Absorbing' is the technical term worth knowing: once a life has transitioned into an exit state (dead, withdrawn, retired), it stays there forever — this restriction is what makes multiple decrement models simpler to analyse than general multi-state models like the sickness example above, where movement back into the active state is possible."
            },
            {
                "q": "Give one example of a health insurance benefit structure that would need a multi-state (rather than simple two-state) model.",
                "a": "An income protection / permanent health insurance policy, which needs to model transitions between healthy, sick, and dead states (and possibly recovery).",
                "explain": "This closes the module by circling back to the healthy/sick/dead example raised earlier — note this needs the <em>full</em> multi-state framework (not just the simpler multiple-decrement special case), since recovery from sick back to healthy breaks the 'no return' restriction that defines a pure multiple decrement model."
            }
        ]
    },
    {
        "id": "m23",
        "title": "Unit-linked and accumulating with-profits contracts",
        "description": "Focuses on cashflow modelling for unit-linked and accumulating with-profits contracts, covering unit fund growth, charges, and the interaction between unit and non-unit funds.",
        "cards": [
            {
                "q": "What is the 'unit fund' in a unit-linked contract?",
                "a": "The notional pool of units purchased with (net) premiums, whose value grows or falls in line with the performance of the underlying investments.",
                "explain": "This module puts concrete numbers behind Module 16's unit-linked concept — the unit fund is what the <em>policyholder</em> effectively owns; everything else in this module (the non-unit fund, charges, sum at risk) is about the <em>insurer</em>'s own separate financial position running alongside it."
            },
            {
                "q": "What is a 'bid-offer spread' in a unit-linked contract?",
                "a": "The difference between the price at which units are bought (offer price) and sold (bid price), a source of income/charge for the insurer.",
                "explain": "This is one of several distinct charging mechanisms this module introduces — worth keeping a mental list: bid-offer spread (this card), management charges (below), and mortality charges (for the sum at risk, below) are all separate ways an insurer extracts value from a unit-linked policy, each modelled slightly differently in a cashflow projection."
            },
            {
                "q": "What is the 'non-unit fund' (or 'sterling fund') in a unit-linked contract?",
                "a": "The part of the insurer's cashflows not related to the unit fund — covering charges collected, expenses paid, and non-unit-linked benefits.",
                "explain": "This is the crucial conceptual split for the whole module: unit fund = policyholder's money; non-unit fund = insurer's <em>own</em> money — the insurer's actual profit or loss on the contract emerges entirely from the non-unit side, which is exactly why Module 24's profit testing needs to track it separately."
            },
            {
                "q": "Why might an insurer need to hold 'non-unit reserves'?",
                "a": "To cover situations where future non-unit cashflows are expected to be negative, even if the overall contract is profitable.",
                "explain": "This is Module 18's general reserving rationale (holding assets against future liabilities), applied <em>specifically</em> to the non-unit fund — a unit-linked contract can be profitable <em>overall</em> across its whole life while still having individual future <em>years</em> where charges collected don't cover that year's costs, and a reserve is needed to bridge exactly those gap years."
            },
            {
                "q": "What does it mean to 'zeroise' future negative cashflows in this context?",
                "a": "Setting up a non-unit reserve specifically to eliminate (offset) any future years' projected negative cashflows.",
                "explain": "This is the specific technique addressing the problem in the card above — rather than letting a future year's cashflow actually go negative (which regulators/prudent practice generally don't allow), the insurer holds enough reserve <em>now</em> to guarantee every future year's cashflow comes out at zero or positive."
            },
            {
                "q": "How do management charges typically affect the unit fund?",
                "a": "They are deducted regularly (e.g. as a percentage of fund value) from the unit fund, reducing its growth compared to the raw investment return.",
                "explain": "This is the <em>second</em> charging mechanism flagged earlier (alongside bid-offer spread) — note it flows in the <em>opposite</em> direction from the policyholder's perspective compared to bid-offer spread: management charges continuously erode the unit fund's growth rate, while bid-offer spread is a one-off cost at the point of buying/selling units."
            },
            {
                "q": "What are 'unallocated premiums' in a unit-linked contract?",
                "a": "The portion of a premium not used to purchase units for the policyholder, effectively retained by the insurer.",
                "explain": "This is a <em>third</em> distinct way value moves from policyholder to insurer, alongside bid-offer spread and management charges — rather than deducting a charge from the unit fund after the fact, this simply withholds part of the premium from ever becoming units in the first place, straight into the non-unit fund."
            },
            {
                "q": "How does an 'accumulating with-profits' fund differ operationally from a standard unit-linked fund?",
                "a": "Its value grows through regular guaranteed and bonus interest additions (smoothed), rather than fluctuating directly with a market-based unit price.",
                "explain": "This restates Module 16's accumulating-with-profits-vs-unit-linked distinction — included again here because this module's <em>cashflow modelling</em> techniques (charges, reserves, projections) apply similarly to both structures, just with a smoothed bonus-crediting process substituted for a directly market-linked unit price."
            },
            {
                "q": "Why is cashflow projection important for pricing and reserving unit-linked contracts?",
                "a": "Because the insurer's own (non-unit) profit emerges as the difference between charges collected and expenses/benefits paid over time, needing year-by-year projection.",
                "explain": "This is the module's central justification for <em>why</em> the equation-of-value techniques from Modules 17-18 aren't sufficient here — a unit-linked contract's profitability depends on multiple interacting streams (charge income, expense outgo, mortality cost) evolving over time, which needs the year-by-year cashflow <em>projection</em> technique that Module 24 formalises fully."
            },
            {
                "q": "What might cause unit fund growth to differ from gross investment return?",
                "a": "Deduction of management charges and other fund-based charges reduces the net growth credited to the policyholder's units.",
                "explain": "This directly restates the management-charge mechanism above from the policyholder's point of view — whatever the underlying investments actually earn (gross return), the policyholder only sees that return <em>minus</em> whatever charges were deducted along the way, which is exactly why unit fund growth and gross investment performance diverge."
            },
            {
                "q": "How would extra life cover (death benefit above the unit fund value) be funded in a unit-linked contract?",
                "a": "Through a specific mortality charge deducted from the fund, covering the 'sum at risk' (the extra amount above the fund value payable on death).",
                "explain": "This is the <em>fourth</em> charging mechanism, specifically funding the insurance element of the contract — recall Module 16's card on death benefit structure ('higher of a fixed amount or the fund value'): this mortality charge is precisely what pays for that extra guaranteed floor above the fund's own value."
            },
            {
                "q": "What does 'sum at risk' mean for unit-linked death benefits?",
                "a": "The excess of the guaranteed minimum death benefit over the current unit fund value.",
                "explain": "This is analogous to Module 21's death strain at risk concept, just applied to a unit-linked structure specifically — both measure 'how much <em>extra</em> the insurer must pay beyond what's already set aside (the reserve, or here, the unit fund)', and both shrink as the fund/reserve grows relative to the fixed benefit."
            },
            {
                "q": "Why might insurers separate unit and non-unit cashflows when modelling a unit-linked contract?",
                "a": "Because the unit fund cashflows belong to the policyholder, while the non-unit cashflows determine the insurer's own profit/loss and reserving needs.",
                "explain": "This restates the module's opening conceptual split as an explicit modelling justification — mixing the two together would obscure the actual question a profit test (Module 24) needs to answer: how profitable is this contract <em>for the insurer</em>, which is purely a non-unit-fund question, independent of how the policyholder's own unit fund happens to perform."
            },
            {
                "q": "How does a fall in investment markets typically affect a unit-linked insurer's non-unit fund position?",
                "a": "It can increase the sum at risk (if death benefits have a fixed minimum) and reduce charge income if charges are based on fund value.",
                "explain": "This is an important risk insight worth internalising: a market downturn hurts the insurer <em>twice</em> over on a unit-linked book with guaranteed minimum death benefits — the sum at risk (extra cost on death) rises as fund value falls, at the exact same time as charge income (often a percentage of that same falling fund value) also declines."
            },
            {
                "q": "Why is profit testing especially important for unit-linked products compared to simple non-profit assurances?",
                "a": "Because unit-linked profitability depends on the interaction of charges, expenses, and investment performance over time, not captured by a simple equation of value.",
                "explain": "This closes the module by directly justifying the transition into Module 24 — a simple non-profit assurance's profitability can largely be checked via Module 17's single equation of value (premium vs benefit/expense present values), but a unit-linked contract's <em>multiple</em> interacting cashflow streams need the fuller year-by-year projection technique covered next."
            }
        ]
    },
    {
        "id": "m24",
        "title": "Profit testing",
        "description": "Projects a policy's year-by-year cashflows to determine its expected profitability — the profit vector, profit signature, net present value, and profit margin.",
        "cards": [
            {
                "q": "What is a 'profit vector' in profit testing?",
                "a": "The sequence of expected end-of-year profits (per policy in force at the start of each year) projected over the policy's term.",
                "explain": "This module is where every earlier CM1 technique finally comes together into one practical tool — the profit vector is built year by year using exactly the cashflow items listed in a card below (premiums, investment income, expenses, benefit cost, reserve movements), all concepts you've already met individually since Module 17."
            },
            {
                "q": "What is a 'profit signature'?",
                "a": "The profit vector adjusted to allow for the probability of the policy still being in force at each duration — profit per policy originally issued.",
                "explain": "This is the crucial distinction from the raw profit vector: the vector's figures are 'per policy <em>in force</em> that year' (a shrinking group as people die/lapse), while the signature restates everything 'per policy <em>originally sold</em>' — you need the signature, not the vector, to get a true picture of total portfolio profitability."
            },
            {
                "q": "How do you convert a profit vector into a profit signature?",
                "a": "Multiply each year's profit (per policy in force at the start of that year) by the probability of being in force at the start of that year.",
                "explain": "This is Module 12's survival probability machinery ($_tp_x$) applied directly to policy persistency — the same 'weight by probability of still being there' logic used throughout the whole life-contingencies syllabus, just applied to a cashflow projection instead of a single lump-sum benefit."
            },
            {
                "q": "What is the Net Present Value (NPV) of a policy, in the profit testing context?",
                "a": "The present value of the profit signature, discounted at the insurer's chosen risk discount rate.",
                "explain": "This is Module 9's NPV concept, reapplied here to a stream of yearly <em>profits</em> rather than raw project cashflows — discount each year's profit signature figure back to today using Module 4's technique, then sum, exactly the same present-value-of-a-cashflow-series approach used throughout the whole course."
            },
            {
                "q": "What is the 'profit margin' of a policy?",
                "a": "The NPV of the profit signature expressed as a percentage of the present value of premium income (or another chosen base).",
                "explain": "This turns an absolute pound figure (NPV) into a relative, comparable percentage — useful because a large policy and a small policy might have similar profit <em>margins</em> even though their absolute NPVs differ hugely, making margin the more natural metric for comparing profitability across products of different sizes."
            },
            {
                "q": "What cashflows are typically included when profit testing a policy for a given year?",
                "a": "Premium income, investment income on reserves/assets, expenses, cost of any benefit, and the increase in reserve required.",
                "explain": "This list is worth memorising as the standard five-item recipe for building a profit vector row by row — note it's essentially Module 18's recursive reserve relationship rearranged: instead of solving for the closing reserve, you're now solving for the leftover <em>profit</em> after that year's reserve requirement has been funded."
            },
            {
                "q": "How is profit testing used to determine an appropriate premium?",
                "a": "The premium can be varied until the resulting NPV (or profit margin) meets a target set by the insurer, rather than relying solely on the equivalence principle.",
                "explain": "This is a different philosophy from Module 17's equivalence principle (premium = present value of costs, giving exactly zero expected profit by construction) — profit testing instead lets the insurer set a <em>positive</em> profit target and solve for whatever premium achieves it, which is closer to how premiums are actually set commercially."
            },
            {
                "q": "What is the 'risk discount rate' used in profit testing?",
                "a": "The rate used to discount the profit signature to present value, often set higher than the risk-free rate to reflect the riskiness of the profit cashflows.",
                "explain": "This is Module 4's 'discount riskier cashflows at a higher rate' idea, now given a specific name and a specific application — profit cashflows are inherently uncertain (they depend on actual mortality, lapses, expenses all matching assumptions), so a prudent insurer discounts them more heavily than a risk-free cashflow."
            },
            {
                "q": "Why might profit testing use a different (higher) discount rate than the interest rate assumed for reserving?",
                "a": "To build in a margin for risk/uncertainty in the profit projections, reflecting that actual experience may differ from assumptions.",
                "explain": "This highlights a subtlety worth keeping straight: the reserving basis and the profit-testing (risk) discount rate serve <em>different</em> purposes and can legitimately differ — reserving assumptions aim for prudent liability valuation, while the risk discount rate specifically prices in the uncertainty of the <em>profit</em> stream itself."
            },
            {
                "q": "How does profit testing show the effect of setting up reserves each year?",
                "a": "The increase in reserve required each year (funded from that year's cashflows) reduces that year's profit.",
                "explain": "This is exactly why a policy can show a first-year <em>loss</em> despite being profitable overall (see the card below) — building up a reserve isn't really a 'cost', it's setting money aside for later, but it still shows up as reducing <em>that year</em>'s profit figure, even though it reappears as later years' profit when the reserve is eventually released."
            },
            {
                "q": "How could an insurer use profit testing to compare two different premium bases for the same product?",
                "a": "Run the profit test under each premium basis and compare the resulting NPV/profit margin, choosing the basis that best meets profitability targets.",
                "explain": "This is a direct, practical application of the 'vary the premium until NPV meets a target' technique from earlier in this module — rather than a single premium calculation, profit testing lets an insurer efficiently compare multiple candidate premium structures side by side before choosing which to actually launch."
            },
            {
                "q": "What does it mean if a policy's profit vector shows a loss in its first year but profits in later years?",
                "a": "This is common where initial expenses exceed first-year premium income, but the policy becomes profitable later as expenses fall and margins are earned.",
                "explain": "This is a common, realistic pattern worth recognising — it connects directly to Module 17's initial-vs-renewal expense split: heavy upfront costs (underwriting, commission, admin setup) often exceed what one year's premium alone can cover, requiring the policy to run for several years before cumulative profit turns positive."
            },
            {
                "q": "Why is the probability of a policy remaining in force important to profit testing (via the profit signature)?",
                "a": "Because expected total profit depends on how many of the original policies are still generating profit cashflows each year.",
                "explain": "This restates why the profit <em>vector</em> alone is misleading, and the <em>signature</em> (weighted by persistency probability) is what actually matters — a policy showing huge per-policy profit in year 20 is much less valuable to the insurer's bottom line if very few of the original cohort are still in force by then."
            },
            {
                "q": "What could cause profit testing results to change even if the premium and product design stay the same?",
                "a": "A change in assumptions (e.g. mortality, expenses, lapses, investment returns) used for the projection.",
                "explain": "This is the profit-testing analogue of Module 21's mortality profit concept — the <em>projected</em> profit test result is only ever as good as its assumptions; actual experience diverging from those assumptions is exactly what generates real profit/loss relative to what was originally projected at pricing."
            },
            {
                "q": "How would profit testing be adapted for a unit-linked contract, compared to a conventional contract?",
                "a": "It would separately project unit fund growth and non-unit fund cashflows, summing the non-unit profit signature much as for a conventional contract.",
                "explain": "This is Module 23's unit/non-unit split feeding directly into this module's projection technique — the profit vector for a unit-linked contract is built almost entirely from the <em>non-unit</em> fund's cashflows (charges collected minus expenses/benefit costs), since the unit fund itself belongs to the policyholder and isn't insurer profit at all."
            }
        ]
    },
    {
        "id": "m25",
        "title": "Reserving aspects of profit testing",
        "description": "Shows how gross premium reserves can be derived from, and incorporated into, the cashflow projection used for profit testing — including 'zeroising' for unit-linked contracts.",
        "cards": [
            {
                "q": "How can gross premium reserves be computed using a cashflow projection model, rather than the standard prospective formula?",
                "a": "By projecting expected future cashflows year by year and finding the reserve needed at each duration so that, with future premiums, it exactly covers future benefits and expenses.",
                "explain": "This module closes the loop back to Module 18: the prospective reserve formula and this cashflow-projection approach answer the <em>same</em> question ('what reserve is needed at this point') using two different techniques — a closed-form equation of value versus a year-by-year projected build-up, which the validation card below confirms should agree."
            },
            {
                "q": "Why might an insurer calculate reserves via profit testing rather than the standard prospective/retrospective formulas?",
                "a": "It naturally extends to complex products (e.g. unit-linked, multiple decrements) where a simple closed-form reserve formula may not exist.",
                "explain": "This is the module's core motivation — Module 18's clean $A_x$/$\\ddot{a}_x$-based formulas work beautifully for simple conventional products, but for something like a unit-linked contract (Module 23) with interacting charges and investment performance, there's often no tidy closed-form expression, so the flexible year-by-year projection approach becomes essential rather than optional."
            },
            {
                "q": "How does including reserves in a profit test change the year-by-year profit signature compared to ignoring reserves?",
                "a": "It smooths profit emergence — reserves capture money that would otherwise appear as an early profit, releasing it as the policy progresses.",
                "explain": "This directly connects to Module 24's 'reduces first-year profit' point — without reserving, all the early premium 'surplus' (before mortality risk really bites) would show up as a large early profit spike; reserving smooths that spike out into a more level pattern of profit emergence over the policy's life, more realistically reflecting when risk is actually being carried."
            },
            {
                "q": "What is the effect on first-year profit of holding a reserve at the end of the first year (compared to holding none)?",
                "a": "First-year profit is reduced, since the increase in reserve is deducted from that year's cashflow.",
                "explain": "This restates Module 24's profit-vector construction rule ('increase in reserve required' is one of the five standard cashflow items) — worth remembering as a mechanical, formulaic effect: whatever reserve increase you choose to hold, it comes <em>straight</em> out of that year's profit figure, pound for pound."
            },
            {
                "q": "How would 'zeroising' affect a unit-linked policy's projected profit signature?",
                "a": "It removes any projected negative cashflows in later years (by holding a sufficient non-unit reserve upfront), though it reduces earlier profit to fund the reserve.",
                "explain": "This is Module 23's zeroising concept fully worked through as a profit-signature effect — note the genuine trade-off: eliminating a future problem (negative cashflows) always costs something <em>now</em> (lower earlier profit to fund the pre-emptive reserve), never a free lunch."
            },
            {
                "q": "Why is zeroising particularly relevant to unit-linked products?",
                "a": "Because unit-linked non-unit cashflows can naturally be negative in some future years, which a reserve can pre-fund to avoid future losses.",
                "explain": "This restates Module 23's point about market downturns increasing sum-at-risk while reducing charge income — conventional products rarely swing into negative yearly cashflow the way a unit-linked non-unit fund can, which is exactly why zeroising is a distinctively unit-linked reserving technique rather than a universal one."
            },
            {
                "q": "What information do you need to determine the required non-unit reserve at a given duration to zeroise future cashflows?",
                "a": "The projected non-unit cashflows in all future years, discounted appropriately, identifying the reserve needed so no future year's cashflow is negative.",
                "explain": "In practice this means finding the <em>worst</em> (most negative) discounted cumulative future cashflow position across all future years, and reserving enough today to cover exactly that worst point — a different calculation from a standard prospective reserve, which just needs one overall net present value, not a year-by-year worst-case scan."
            },
            {
                "q": "How does the reserving basis differ from the pricing/profit-testing basis, potentially?",
                "a": "The reserving basis is often chosen more prudently (e.g. more cautious mortality, lower interest) than the best-estimate assumptions used for profit testing.",
                "explain": "This restates Module 18's net-premium-reserve prudence rationale in the profit-testing context — pricing/profit testing typically wants realistic, <em>best-estimate</em> assumptions (to see genuine expected profitability), while reserving deliberately wants <em>cautious</em> assumptions (to ensure sufficient assets are held even if experience is worse than expected)."
            },
            {
                "q": "Why might a reserve calculated via cashflow projection differ from one calculated via the standard prospective formula, even for a simple product?",
                "a": "If different (e.g. more prudent) assumptions are used for reserving than for the profit-testing projection, the resulting reserve figures would differ.",
                "explain": "This is the resolution to an apparent puzzle: shouldn't the two methods always agree, per the very first card of this module? They only agree when using the <em>same</em> assumptions throughout (exactly Module 18's equivalence condition) — use different assumptions for the two calculations, and they will diverge, which is precisely what happens in practice when reserving and pricing bases differ."
            },
            {
                "q": "What role does the recursive reserve relationship play in profit testing calculations?",
                "a": "It's effectively the mechanism by which reserve movements (increase in reserve, release on death) are built into each year's profit cashflow in the projection.",
                "explain": "This makes explicit a connection implicit throughout this module and Module 24 — Module 18's recursive reserve formula and Module 24's profit-vector construction are really the <em>same</em> underlying year-by-year bookkeeping equation, just solved for different unknowns (the closing reserve, versus the leftover profit after that reserve is funded)."
            },
            {
                "q": "How would gross premium reserves computed via profit testing be validated against a formula-based reserve?",
                "a": "By checking that, under the same reserving assumptions, the reserve implied by the projected cashflows matches the standard prospective reserve formula result.",
                "explain": "This is a useful exam and practical technique — for a simple product where <em>both</em> methods apply, calculating the reserve both ways and confirming they match is an excellent way to sanity-check a cashflow projection model before trusting it for a more complex product where the formula-based check isn't available."
            },
            {
                "q": "What happens to the profit signature of a policy if reserves are set higher than the minimum needed to avoid future losses?",
                "a": "Earlier profit is further reduced, and later profit correspondingly increases as the excess reserve is released.",
                "explain": "This generalises the 'first-year profit reduced by reserve increase' card from earlier in this module — the total profit over the <em>whole</em> policy term is unaffected by how much extra reserve is held (it's just moved between years), which is a useful invariant: reserving choices reshuffle <em>when</em> profit emerges, not the total <em>amount</em> of profit."
            },
            {
                "q": "Why is it important for reserves derived via profit testing to be non-negative at each duration for a unit-linked contract?",
                "a": "A negative non-unit reserve would imply the insurer expects to extract more value than it has set aside, leaving it unable to cover a future shortfall.",
                "explain": "This is precisely the problem zeroising (earlier in this module) exists to solve — a negative reserve is effectively a promise to pay out of money you don't have yet, which is imprudent and typically not permitted; zeroising is the standard fix, pre-funding today whatever is needed to keep every future reserve at or above zero."
            },
            {
                "q": "How does the choice of risk discount rate in profit testing interact with reserve calculations?",
                "a": "The risk discount rate values the emerging profit signature (after reserving), but the reserving calculation itself typically uses separate, often more prudent, assumptions.",
                "explain": "This closes the loop on the two-different-bases theme running through this module — worth keeping the two calculations conceptually separate: <em>First</em> decide reserves using a prudent reserving basis, <em>then</em> value the resulting (post-reserving) profit stream using the risk discount rate, two distinct steps that shouldn't be conflated."
            },
            {
                "q": "What's the overall link between profit testing and reserving aspects of profit testing?",
                "a": "Profit testing introduces the cashflow projection technique itself; reserving aspects apply and extend that same technique specifically to derive and validate reserves, including zeroising for unit-linked contracts.",
                "explain": "This closes out not just this module but the <em>entire</em> CM1 syllabus — Modules 1-11 built the interest-theory toolkit, Modules 12-21 built the life-contingent probability toolkit, and Modules 22-25 show how both combine into the practical, real-world techniques (multi-state models, cashflow projection, profit testing, reserving) that actuaries actually use day to day."
            }
        ]
    }
  ],
  questions: [
    {
      id: "cm1-q1",
      title: "Nominal, effective and continuous rates",
      modules: "Modules 1, 2",
      marks: 11,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the effective annual rate of interest $i$, and state the formula for the accumulated value of $C$ invested for $n$ years at rate $i$ under compound interest.",
          answer: "The effective annual rate $i$ is the actual proportionate growth in an investment's value over one year under compound interest. The accumulated value of $C$ invested for $n$ years is $C(1+i)^n$.",
          note: "A common error is describing $i$ as \"the interest rate charged\" without the word \"actual\"/\"effective\" &mdash; markers want the definition to distinguish it from a nominal rate, since that's exactly what the rest of this question tests.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A bank offers a nominal rate of interest of 6% per annum convertible monthly. Calculate the equivalent effective annual rate of interest.",
          answer: "$1+i=\\left(1+\\frac{0.06}{12}\\right)^{12}=(1.005)^{12}=1.061678$, so $i=6.1678\\%$.",
          note: "The full method mark is for the $(1.005)^{12}$ setup; the final mark is for correctly evaluating it. A common slip is using $(1.06/12+1)$ instead of $(1+0.06/12)$, or forgetting to raise to the power 12.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the present value of a payment of &pound;10,000 due in 8 years' time, using the effective annual rate found in part (ii).",
          answer: "$PV = 10{,}000 \\times (1.061678)^{-8} = 10{,}000 \\times 0.61952 = \\pounds 6{,}195.24$",
          note: "Candidates should carry through the unrounded rate from (ii) rather than a rounded 6.17%, to avoid compounding rounding error over 8 years &mdash; markers typically allow a small tolerance either way.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the force of interest $\\delta$ consistent with the effective annual rate found in part (ii), and confirm it is smaller than the nominal rate $i^{(12)}=6\\%$ quoted at the start of the question.",
          answer: "$\\delta = \\ln(1.061678) = 5.985\\%$. This is indeed smaller than $i^{(12)}=6\\%$, consistent with the general ordering $i > i^{(p)} > \\delta$ for $p>1$.",
          note: "This is testing recognition of the standard rate ordering, not just the calculation &mdash; candidates should explicitly state the ordering result, not just report the number, since the question asks them to \"confirm\" it.",
        },
      ],
    },
    {
      id: "cm1-q2",
      title: "Level and increasing annuities",
      modules: "Modules 5, 6",
      marks: 11,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 2,
          question: "Write down the formula for $a_{\\overline{n}|}$ in terms of $v$ and $i$, and calculate its value for $n=15$, $i=4\\%$.",
          answer: "$a_{\\overline{n}|}=\\frac{1-v^n}{i}$. At $n=15$, $i=4\\%$: $a_{\\overline{15}|}=\\frac{1-1.04^{-15}}{0.04}=11.118$.",
          note: "Half a mark is typically for the formula, half for the correct numerical evaluation &mdash; candidates who only quote the formula without evaluating it lose the numerical mark.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A savings plan pays &pound;5,000 per year, in advance, for 15 years. Calculate its present value at $i=4\\%$.",
          answer: "$PV = 5{,}000 \\times \\ddot{a}_{\\overline{15}|} = 5{,}000 \\times 11.563 = \\pounds 57{,}815.61$",
          note: "\"In advance\" signals annuity-due, not annuity-immediate &mdash; a common error is using $a_{\\overline{15}|}$ from part (i) directly instead of converting to $\\ddot{a}_{\\overline{15}|}=(1+i)a_{\\overline{15}|}$.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "An alternative arrangement pays &pound;1,000 in year 1, &pound;2,000 in year 2, ..., increasing by &pound;1,000 each year up to &pound;15,000 in year 15, paid in arrears. Calculate the present value at $i=4\\%$, using $(Ia)_{\\overline{15}|}$.",
          answer:
            "$(Ia)_{\\overline{15}|}=\\frac{\\ddot{a}_{\\overline{15}|}-15v^{15}}{i}=\\frac{11.563-15(0.55526)}{0.04}=\\frac{11.563-8.329}{0.04}=80.854$. $PV = 1{,}000 \\times 80.854 = \\pounds 80{,}853.88$",
          note: "Candidates should recognise the payment pattern (1,000 &times; 1, 2, 3, ..., 15) as a scaled $(Ia)_{\\overline{15}|}$ rather than attempting to sum 15 separate discounted terms by hand.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on which of the two arrangements in parts (ii) and (iii) provides greater value today, and why this might not be the most important comparison from the policyholder's perspective.",
          answer:
            "The increasing arrangement in (iii) has the higher present value (&pound;80,854 vs &pound;57,816). However, present value alone doesn't capture a policyholder's actual cashflow needs &mdash; someone needing steady income soon (e.g. a retiree) would receive far less in early years under (iii) (&pound;1,000 vs &pound;5,000 in year 1), so the arrangement with lower PV could still be the better practical choice depending on the policyholder's circumstances.",
          note: "This rewards recognising that present value comparisons implicitly assume the recipient is indifferent to timing (beyond the discount rate itself) &mdash; a real policyholder with a specific income need may not be.",
        },
      ],
    },
    {
      id: "cm1-q3",
      title: "Loan schedule with an additional lump-sum repayment",
      modules: "Modules 7, 8",
      marks: 11,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 2,
          question:
            "A loan of &pound;50,000 is to be repaid by level annual instalments in arrears over 10 years at an effective rate of 5% per annum. Calculate the level annual instalment $X$.",
          answer: "$X = \\dfrac{50{,}000}{a_{\\overline{10}|}} = \\dfrac{50{,}000}{7.7217} = \\pounds 6{,}475.23$",
          note: "This is a direct application of $X=L/a_{\\overline{n}|}$ &mdash; full marks need the correct annuity factor at 5% for 10 years, not a mismatched term or rate.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the interest and capital components of the first instalment.",
          answer: "Interest $= 50{,}000 \\times 0.05 = \\pounds 2{,}500$. Capital $= 6{,}475.23 - 2{,}500 = \\pounds 3{,}975.23$.",
          note: "Interest must be calculated on the opening balance (the full &pound;50,000), not on any other figure &mdash; capital repaid is then found as the residual of the instalment.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the outstanding loan balance immediately after the 4th instalment, using the prospective method.",
          answer: "$Balance = X \\times a_{\\overline{6}|} = 6{,}475.23 \\times 5.0757 = \\pounds 32{,}866.27$ (6 years of instalments remaining).",
          note: "The prospective method needs the <em>remaining</em> term (6 years, not 4 or 10) &mdash; using the wrong term for the annuity factor is the most common error here.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question:
            "The borrower makes an additional lump-sum repayment of &pound;10,000 immediately after the 4th instalment. If the loan is still to be cleared over the original remaining term, calculate the new level instalment for the remaining 6 years.",
          answer:
            "New balance $= 32{,}866.27 - 10{,}000 = \\pounds 22{,}866.27$. New instalment $= \\dfrac{22{,}866.27}{a_{\\overline{6}|}} = \\dfrac{22{,}866.27}{5.0757} = \\pounds 4{,}505.05$",
          note: "This re-applies the part (i) technique at a later starting point with a reduced balance &mdash; candidates should recognise it as the same formula, not a new one, just re-solved from the post-lump-sum balance.",
        },
      ],
    },
    {
      id: "cm1-q4",
      title: "Comparing two investment projects",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question:
            "Define the internal rate of return (IRR) of a project, and state the condition on a project's net cashflow sign pattern that guarantees a unique IRR exists.",
          answer:
            "The IRR is the discount rate at which the project's NPV equals zero. A unique IRR is guaranteed to exist if the project's net cashflow changes sign exactly once over time.",
          note: "Both halves are needed for full marks &mdash; many candidates give the NPV=0 definition but omit the uniqueness condition, which is exactly what part (iv) later depends on being able to state.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Project A requires an initial outlay of &pound;100,000 and generates net cash inflows of &pound;30,000 at the end of each of the next 5 years. Calculate the project's NPV at a discount rate of 8% per annum, and state whether it should be accepted if the company requires an 8% return.",
          answer:
            "$PV(\\text{inflows}) = 30{,}000 \\times a_{\\overline{5}|8\\%} = 30{,}000 \\times 3.9927 = \\pounds 119{,}781.30$. $NPV = 119{,}781.30 - 100{,}000 = \\pounds 19{,}781.30$. Since NPV &gt; 0 at the required rate, the project should be accepted.",
          note: "The accept/reject conclusion must be explicitly stated, referencing the required rate given in the question, not just left implied by a positive number &mdash; markers give a dedicated mark for the stated decision.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "Calculate Project A's (undiscounted) payback period to 2 decimal places, and comment on why this measure alone might give misleading advice compared to the NPV found in part (ii).",
          answer:
            "Cumulative cashflow reaches &pound;90,000 after year 3 and &pound;120,000 after year 4, so payback occurs during year 4: payback $\\approx 3 + \\frac{100{,}000-90{,}000}{30{,}000} = 3.33$ years. This measure ignores the time value of money entirely, and ignores the year 4 and year 5 cashflows occurring after the payback point &mdash; both of which the NPV calculation in (ii) correctly captures.",
          note: "Both weaknesses should be named specifically (not just \"it's a simple measure\") to earn full marks, referencing the standard critique of payback period from the syllabus.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question:
            "A mutually exclusive Project B requires the same &pound;100,000 outlay but returns a single lump sum of &pound;152,000 at the end of year 5 only. Calculate Project B's IRR, and explain why comparing the two projects' IRRs alone might not be the best way to choose between them.",
          answer:
            "$100{,}000(1+i)^5 = 152{,}000 \\Rightarrow (1+i)^5 = 1.52 \\Rightarrow i = 1.52^{1/5}-1 = 8.73\\%$. Comparing IRRs alone ignores the very different cashflow patterns and reinvestment implications of the two projects (A returns cash steadily from year 1, B only at year 5) &mdash; a full comparison should use NPV at the company's actual cost of capital, which properly reflects both the scale and timing of value created, rather than relying on a single percentage figure from each project in isolation.",
          note: "This connects back to part (i)'s uniqueness condition and the general IRR-vs-NPV weakness from the syllabus &mdash; a strong answer notes IRR doesn't reflect the different reinvestment timing between the two projects, not just \"IRR has known weaknesses\" in the abstract.",
        },
      ],
    },
    {
      id: "cm1-q5",
      title: "Pricing a fixed-interest bond",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the redemption yield on a fixed-interest bond.",
          answer:
            "The redemption yield is the effective rate of interest that equates the bond's current price to the present value of all its future cashflows (coupons and redemption proceeds).",
          note: "Candidates should distinguish this from running/flat yield explicitly if asked to \"define\", since the two terms are frequently confused in exam answers.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A bond of nominal value &pound;100 pays annual coupons of 6% in arrears and is redeemable at par in exactly 10 years. Calculate the price to give a purchaser a redemption yield of 7% per annum effective.",
          answer:
            "$Price = 6 \\times a_{\\overline{10}|7\\%} + 100 \\times v^{10}_{7\\%} = 6(7.0236) + 100(0.50835) = 42.14 + 50.84 = \\pounds 92.98$ per &pound;100 nominal.",
          note: "This is a direct application of the bond pricing equation of value &mdash; the coupon annuity and the redemption lump sum must both be discounted at the <em>same</em> required yield (7%), not the coupon rate (6%).",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the running (flat) yield on the bond at the price found in part (ii), and comment on why it differs from the 7% redemption yield.",
          answer:
            "Running yield $= \\frac{6}{92.98} = 6.45\\%$. It is lower than the 7% redemption yield because the bond is trading at a discount to its &pound;100 redemption value &mdash; the running yield only reflects coupon income and ignores the capital gain (&pound;100 &minus; &pound;92.98 = &pound;7.02) the investor will also earn at redemption, which the redemption yield correctly captures.",
          note: "The direction of the discrepancy (running yield below redemption yield specifically because the bond is priced below par) is the key insight examiners want, not just the numerical gap.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question:
            "An investor pays income tax at 20% on coupon payments (no capital gains tax applies). Calculate the price they would pay for the same bond to achieve a net redemption yield of 7%.",
          answer:
            "Net coupon $= 6 \\times (1-0.20) = \\pounds 4.80$. $Price = 4.80 \\times 7.0236 + 100 \\times 0.50835 = 33.71 + 50.84 = \\pounds 84.55$",
          note: "Only the coupon is taxed here (no CGT), so only the coupon figure changes in the pricing equation &mdash; the redemption proceeds term stays exactly as in part (ii), since no capital gains tax applies to it in this scenario.",
        },
      ],
    },
    {
      id: "cm1-q6",
      title: "Term structure and single-cashflow immunisation",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define a 'spot rate' of interest and a 'forward rate' of interest.",
          answer:
            "A spot rate is the annualised rate of return on a zero-coupon investment made now and maturing at a specific future date. A forward rate is the rate of interest agreed now for a loan/investment to be made over a specified future period.",
          note: "The key distinction (spot = now-to-future; forward = future-period, agreed now) should be stated explicitly, since part (ii) tests whether candidates can actually use the relationship between them.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "The 1-year spot rate is 4% and the 2-year spot rate is 5% per annum effective. Calculate the 1-year forward rate applicable from time 1 to time 2, $f_{1,2}$.",
          answer: "$(1+y_2)^2=(1+y_1)(1+f_{1,2}) \\Rightarrow (1.05)^2 = (1.04)(1+f_{1,2}) \\Rightarrow f_{1,2} = \\frac{1.1025}{1.04}-1 = 6.01\\%$",
          note: "A common error is forgetting to square the 2-year rate before dividing &mdash; the no-arbitrage relationship compares <em>total</em> 2-year growth on the left with the <em>chained</em> 1-year rates on the right.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 4,
          question:
            "A liability of &pound;10,000 is due in exactly 3 years. State its Macaulay duration, and explain what asset structure would satisfy Redington's first two immunisation conditions if a single zero-coupon bond is used to back this liability.",
          answer:
            "For a single cashflow, its Macaulay duration equals its own term, i.e. 3 years, since the present-value-weighted average payment time trivially reduces to the time of the one payment itself. To satisfy Redington's first two conditions, hold a single 3-year zero-coupon bond with present value exactly equal to the liability's present value: this automatically matches the present values (condition 1), and since a single zero-coupon bond's duration equals its own term (3 years, matching the liability's duration), condition 2 is also satisfied.",
          note: "Candidates should recognise this as a <em>degenerate</em> (simplest possible) case of Redington's theory, not attempt unnecessary summation/integration &mdash; a single cashflow's duration calculation is trivial once recognised as such.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why, in this single-cashflow case, Redington's third condition (convexity) is automatically satisfied, and what this implies for the fund's protection against interest rate changes.",
          answer:
            "Since the asset (the 3-year zero-coupon bond) and the liability are both single cashflows of the same amount at the same time, their present values move identically for <em>any</em> change in the interest rate, not just a small one &mdash; their convexities are therefore exactly equal (not merely asset convexity exceeding liability convexity). This means the fund is perfectly matched, not just approximately immunised against small rate changes as Redington's theory guarantees in the general case.",
          note: "The key insight is that exact cashflow matching is strictly stronger than Redington immunisation &mdash; it protects against interest rate changes of <em>any</em> size, whereas Redington's conditions (in the general, non-matched case) only guarantee protection against small changes.",
        },
      ],
    },
    {
      id: "cm1-q7",
      title: "Life table probabilities and a term assurance",
      modules: "Modules 12, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 2,
          question:
            "You are given the following extract from a life table: $l_{60}=97{,}000$, $l_{61}=96{,}500$, $l_{62}=95{,}900$, $l_{63}=95{,}200$, $l_{64}=94{,}400$, $l_{65}=93{,}500$. Calculate $q_{61}$ and $q_{63}$.",
          answer:
            "$q_{61} = \\dfrac{l_{61}-l_{62}}{l_{61}} = \\dfrac{600}{96{,}500} = 0.622\\%$. $q_{63} = \\dfrac{l_{63}-l_{64}}{l_{63}} = \\dfrac{800}{95{,}200} = 0.840\\%$",
          note: "Each $q_x$ must be divided by the <em>starting</em> population at that age ($l_{61}$ and $l_{63}$ respectively), not a common base like $l_{60}$ &mdash; a frequent early-syllabus error.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "Using the same table, calculate $_2p_{61}$, the probability that a life aged 61 survives to age 63.",
          answer: "$_2p_{61} = \\dfrac{l_{63}}{l_{61}} = \\dfrac{95{,}200}{96{,}500} = 0.98653$",
          note: "This is a direct ratio of $l$ values spanning 2 years &mdash; candidates should <em>not</em> attempt to multiply $p_{61}\\times p_{62}$ from separately-rounded one-year probabilities, which introduces avoidable rounding error versus the direct ratio.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "Calculate the expected present value of a 3-year term assurance of &pound;50,000, payable at the end of the year of death, to a life aged 61, i.e. $50{,}000 \\times A^1_{61:\\overline{3}|}$, at an effective interest rate of 4% per annum.",
          answer:
            "Deaths: age 61&ndash;62: 600, age 62&ndash;63: 700, age 63&ndash;64: 800. $A^1_{61:\\overline{3}|} = \\frac{600}{96{,}500}v + \\frac{700}{96{,}500}v^2 + \\frac{800}{96{,}500}v^3 = 0.005978+0.006707+0.007370 = 0.020055$. $EPV = 50{,}000 \\times 0.020055 = \\pounds 1{,}002.75$",
          note: "Each year's death probability is calculated relative to $l_{61}$ (the life's age at the <em>start</em> of the policy), not re-based each year &mdash; this is the standard term-assurance summation technique and should be shown as three explicit terms, not just a final answer.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the calculation in part (iii) would need to change if the death benefit were payable immediately on death rather than at the end of the year of death, and why insurers might prefer to model benefits this way in practice.",
          answer:
            "The calculation would use the corresponding 'immediate' assurance function $\\overline{A}^1_{61:\\overline{3}|}$ instead, which (under the uniform distribution of deaths assumption) can be approximated as $\\frac{i}{\\delta}A^1_{61:\\overline{3}|}$, giving a slightly higher value since payment is discounted for a shorter average period than waiting until the year-end. Insurers often prefer modelling benefits this way because it's more realistic &mdash; in practice claims are paid promptly once notified and assessed, not deliberately held until the next policy anniversary.",
          note: "Candidates should name the specific approximation technique (the $i/\\delta$ adjustment under UDD, from Module 12/15) rather than just saying \"it would be discounted less\" without a concrete method.",
        },
      ],
    },
    {
      id: "cm1-q8",
      title: "Gross premium and reserve for a whole life assurance",
      modules: "Modules 14, 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 2,
          question:
            "You are given $A_{61}=0.320$ and $\\ddot{a}_{61}=17.68$ at $i=4\\%$. Verify these are consistent with the identity $A_x = 1-d\\,\\ddot{a}_x$.",
          answer: "$d = \\frac{0.04}{1.04}=0.038462$. $1-d\\,\\ddot{a}_{61} = 1-(0.038462)(17.68) = 1-0.680 = 0.320$, which matches the given $A_{61}$.",
          note: "This is a quick consistency check candidates should get into the habit of running whenever both an assurance and an annuity value are given together in a question, since it catches transcription errors early.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer issues a whole life assurance of &pound;80,000 to a life aged 61, with level annual premiums payable in advance for life. Initial expenses are &pound;500 and renewal expenses are 5% of each premium from the second policy year onward. Calculate the level annual premium $P$ using the equivalence principle.",
          answer:
            "$P\\,\\ddot{a}_{61} = 80{,}000\\,A_{61} + 500 + 0.05P(\\ddot{a}_{61}-1)$. $P(17.68) = 80{,}000(0.320)+500+0.05P(16.68)$. $P(17.68-0.834)=26{,}100 \\Rightarrow P(16.846)=26{,}100 \\Rightarrow P = \\pounds 1{,}549.33$",
          note: "Renewal expenses apply from the <em>second</em> premium onward, i.e. to $(\\ddot{a}_{61}-1)$ premiums, not all $\\ddot{a}_{61}$ of them &mdash; a common error is applying the 5% loading to the full annuity factor including the first premium.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "You are given $A_{66}=0.365$ and $\\ddot{a}_{66}=16.20$ at $i=4\\%$. Calculate the gross premium reserve, prospectively, at the end of policy year 5 (when the life is aged 66).",
          answer:
            "$_5V = 80{,}000\\,A_{66} + 0.05P\\,\\ddot{a}_{66} - P\\,\\ddot{a}_{66} = 29{,}200 - 0.95(1{,}549.33)(16.20) = 29{,}200-23{,}844.18 = \\pounds 5{,}355.82$",
          note: "No initial expense term appears here since it was a one-off cost already incurred at outset (time 0) &mdash; only future (renewal) expenses and future premiums/benefits are relevant to a reserve calculated 5 years into the policy.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain briefly why the reserve calculated in part (iii) is positive, and what this reserve is intended to protect against.",
          answer:
            "The reserve is positive because the level premium (fixed at outset to be sufficient for the whole of the policyholder's life) has, by duration 5, built up an excess over the pure cost of risk in the earlier, lower-mortality years. This reserve must be held so that future (comparatively modest) premium income, combined with the reserve itself, remains sufficient to cover the rising cost of benefits as mortality increases with age &mdash; protecting the insurer's ability to meet claims in later policy years without needing ever-increasing premiums.",
          note: "A strong answer explicitly connects the reserve to the level-premium structure (level premiums overcharging early risk, undercharging late risk) rather than just restating the general definition of a reserve from Module 18.",
        },
      ],
    },
    {
      id: "cm1-q9",
      title: "Mortality profit on a portfolio",
      modules: "Module 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define 'death strain at risk' for a policy, and state how expected death strain (EDS) is calculated for a portfolio.",
          answer:
            "Death strain at risk is the extra amount an insurer must pay out on death beyond what it has already reserved for that policy (benefit minus reserve held). Expected death strain is the death strain at risk multiplied by the assumed probability of death, summed across all policies in the portfolio.",
          note: "Both definitions should reference the <em>reserve</em> explicitly &mdash; a common error defines death strain at risk as simply \"the sum assured\", omitting the crucial \"minus the reserve already held\" that makes it a strain rather than the full benefit.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer has 1,000 in-force whole life policies on lives aged 70 at the start of a year, each with sum assured &pound;20,000. The reserve held per policy at the start of the year is &pound;9,000, and the assumed mortality rate is $q_{70}=0.02$. During the year, 18 deaths actually occurred. Calculate the expected death strain and the actual death strain for the portfolio.",
          answer:
            "Death strain at risk per policy $= 20{,}000-9{,}000=\\pounds 11{,}000$. Expected death strain $= 1{,}000 \\times 0.02 \\times 11{,}000 = \\pounds 220{,}000$. Actual death strain $=18 \\times 11{,}000 = \\pounds 198{,}000$.",
          note: "EDS is summed over the <em>whole</em> portfolio (using the assumed probability), while ADS only involves the policies where death actually occurred &mdash; the two use different \"how many policies\" bases, which is the key distinction being tested.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 2,
          question: "Calculate the mortality profit or loss for the year.",
          answer: "Mortality profit $=$ EDS $-$ ADS $= 220{,}000-198{,}000 = \\pounds 22{,}000$ (a profit, since fewer deaths occurred than assumed).",
          note: "The sign convention (EDS minus ADS, not the reverse) must be applied consistently &mdash; a positive result here correctly indicates a profit, matching the fact that actual deaths (18) were below the 20 expected.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 4,
          question:
            "The following year, the insurer revises its assumed mortality rate for age 70 down to $q_{70}=0.017$, based on this experience. Explain the reasoning behind this decision, and discuss one risk of over-reacting to a single year's favourable mortality experience.",
          answer:
            "Reasoning: a persistent mortality profit signals that the assumed mortality rate may be too pessimistic relative to the portfolio's true underlying experience &mdash; here, roughly 10% fewer deaths occurred than assumed (18 vs 20 expected), which could justify revising the assumption downward. Risk of over-reacting: a single year's favourable result can simply be random statistical sampling variation rather than a genuine shift in underlying mortality, particularly for a portfolio of this size; revising assumptions too aggressively on the basis of one year's data risks under-reserving/under-pricing if mortality experience reverts upward the following year &mdash; insurers typically look for a sustained multi-year trend before making a substantial assumption change.",
          note: "A strong answer explicitly raises the statistical-noise-versus-genuine-trend distinction, since this is the standard actuarial caution around revising assumptions from limited experience &mdash; simply saying \"more data is needed\" without explaining why is a weaker answer.",
        },
      ],
    },
    {
      id: "cm1-q10",
      title: "A joint life last survivor pension with reduction on first death",
      modules: "Modules 19, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define $\\ddot{a}_{xy}$ and $\\ddot{a}_{\\overline{xy}}$, the joint life and last survivor annuity functions for two lives $(x)$ and $(y)$.",
          answer:
            "$\\ddot{a}_{xy}$ is the expected present value of an annuity of 1 per year, paid annually in advance, while <em>both</em> lives $(x)$ and $(y)$ are alive, ceasing on the first death. $\\ddot{a}_{\\overline{xy}}$ is the expected present value of an annuity of 1 per year, paid annually in advance, continuing as long as <em>at least one</em> of the two lives is alive, ceasing only on the second (later) death.",
          note: "The bar/no-bar distinction (first death vs last survivor) must be stated explicitly and correctly &mdash; this exact distinction is what part (iv) later depends on candidates being fluent with.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "You are given $\\ddot{a}_{65}=14.50$, $\\ddot{a}_{62}=15.80$, and $\\ddot{a}_{65:62}=11.20$ (the joint life annuity for lives aged 65 and 62) at $i=4\\%$. Calculate $\\ddot{a}_{\\overline{65:62}}$, the last survivor annuity value.",
          answer: "$\\ddot{a}_{65}+\\ddot{a}_{62} = \\ddot{a}_{65:62}+\\ddot{a}_{\\overline{65:62}} \\Rightarrow 14.50+15.80 = 11.20+\\ddot{a}_{\\overline{65:62}} \\Rightarrow \\ddot{a}_{\\overline{65:62}} = 19.10$",
          note: "This is a direct application of the standard joint life / last survivor identity &mdash; candidates should quote the identity before substituting, since a bare numerical answer without the formula shown risks losing method marks if the arithmetic is wrong.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "A pension scheme provides a joint life last survivor annuity of &pound;15,000 per year (in advance) to a couple aged 65 and 62. Calculate the expected present value of this benefit.",
          answer: "$EPV = 15{,}000 \\times \\ddot{a}_{\\overline{65:62}} = 15{,}000 \\times 19.10 = \\pounds 286{,}500$",
          note: "A direct application of part (ii)'s result &mdash; the main risk here is candidates accidentally using the joint-life factor (11.20) instead of the last-survivor factor (19.10) found in part (ii).",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "The scheme rules instead specify the annuity reduces to &pound;9,000 per year after the first death, continuing at that lower rate to the survivor. Explain, without carrying out the full calculation, how you would adapt the approach in part (iii) to value this revised benefit.",
          answer:
            "Split the benefit into two pieces. First, &pound;15,000 per year while <em>both</em> lives are alive, valued using the joint life annuity: $15{,}000 \\times \\ddot{a}_{65:62}$. Second, an additional &pound;9,000 per year continuing to whichever life survives after the first death, valued using the 'survivor only' period $\\left(\\ddot{a}_{\\overline{65:62}}-\\ddot{a}_{65:62}\\right)$ &mdash; the portion of the last-survivor annuity representing 'exactly one life alive'. The total value is $15{,}000\\,\\ddot{a}_{65:62} + 9{,}000\\left(\\ddot{a}_{\\overline{65:62}}-\\ddot{a}_{65:62}\\right)$.",
          note: "The key insight is recognising $\\left(\\ddot{a}_{\\overline{xy}}-\\ddot{a}_{xy}\\right)$ as exactly the 'exactly one life alive' period &mdash; candidates who instead try to value the full &pound;15,000 for life plus a separate reduction have overcomplicated the structure relative to this clean decomposition.",
        },
      ],
    },
  ],
});

// Practice exam question bank: original, IFoA-style multi-part questions
// with model answers and marker-perspective explanations.
//
// These are NOT taken from real IFoA past papers with the numbers changed.
// They're written from scratch to target the same syllabus objectives, at
// the same depth, using the same command-verb style ("Define", "Calculate",
// "Derive", "Discuss", "Comment on") and the same mix of bookwork and
// application marks a real paper uses -- but the scenarios, numbers and
// wording are original. Syllabus content and technique aren't copyrightable;
// the specific text of a real paper is, and this site is public, so real
// questions are referenced by paper/question number rather than reproduced.
//
// For the genuine article, see IFOA_PAST_PAPERS_URL below -- past papers and
// examiners' reports moved to the IFoA's Virtual Learning Environment (VLE),
// which needs a student/member login.
const IFOA_PAST_PAPERS_URL = "https://actuaries.org.uk/past-exam-papers-and-examiners-reports/";

// code -> array of { id, title, modules, marks, parts: [{ label, command, marks, question, answer, note }] }
const QUESTIONS = {
  CB2: [
    {
      id: "cb2-q1",
      title: "Elasticity and pricing at a coffee chain",
      modules: "Modules 2, 3, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define price elasticity of demand (PED).",
          answer:
            "PED measures the responsiveness of quantity demanded to a change in price: PED = (% change in quantity demanded) &divide; (% change in price). It is usually quoted as a positive number (its magnitude), even though the underlying ratio is negative for a normal downward-sloping demand curve.",
          note: "Full marks need the formula, not just a description in words. Candidates who write only 'how sensitive demand is to price' without the ratio typically lose a mark.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "Bramble Coffee raises the price of its signature latte from &pound;3.20 to &pound;3.52. Weekly sales fall from 5,000 to 4,400 units. Calculate the price elasticity of demand for the latte, and comment on what your answer implies for the effect of the price rise on Bramble's total revenue.",
          answer:
            "% change in price = (3.52 &minus; 3.20) &divide; 3.20 = 10%. % change in quantity = (4,400 &minus; 5,000) &divide; 5,000 = &minus;12%. PED = &minus;12% &divide; 10% = &minus;1.2 (magnitude 1.2). Since |PED| &gt; 1, demand is elastic, so total revenue falls following the price rise. Checking directly: revenue before = 5,000 &times; &pound;3.20 = &pound;16,000; revenue after = 4,400 &times; &pound;3.52 = &pound;15,488 &mdash; a fall of &pound;512, confirming the prediction.",
          note: "This is a standard 'calculate PED then interpret the revenue effect' question. Marks are typically split 1 for %&Delta;P, 1 for %&Delta;Q, and 1 for correctly linking the elastic result to falling revenue &mdash; a candidate who gets the number right but doesn't state the revenue implication loses that final mark. The revenue check isn't required but is good practice for spotting an arithmetic slip.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss two factors that might explain why demand for Bramble's latte is relatively price-elastic.",
          answer:
            "(1) Availability of close substitutes &mdash; if there are several other coffee shops nearby selling a similar latte, customers can easily switch away from Bramble when its price rises, making demand more elastic. (2) The latte is not a necessity &mdash; as a discretionary purchase (rather than, say, a staple food item), customers can simply cut back or go without more easily than they could for an essential good.",
          note: "Any two of the standard elasticity determinants (substitutes, necessity vs luxury, share of income, time to adjust) score full marks provided each is explained in the context of the coffee scenario, not just listed as a bare textbook fact &mdash; 'discuss' questions specifically reward application over recitation.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 4,
          question:
            "Bramble's finance director proposes a 'student discount' &mdash; a lower price available only to customers who show a valid student ID. Explain what type of pricing strategy this is, and state the condition(s) that must hold for it to be profitable.",
          answer:
            "This is third-degree price discrimination: charging different prices to different identifiable groups of customers for the same product. For it to be profitable, two conditions must hold: (1) the two groups must be separable &mdash; Bramble must be able to identify students (via ID) and prevent resale of the discounted product to non-students, and (2) the two groups must have different price elasticities of demand &mdash; students, generally being more price-sensitive (lower income, more substitutes readily available on campus), should have more elastic demand than the general public, making it profitable to charge them less.",
          note: "Four marks typically split as: 1 for correctly naming third-degree price discrimination (not first- or second-degree &mdash; a common error is not distinguishing the type), 1&ndash;2 for the separability condition, and 1&ndash;2 for the differing-elasticity condition. Candidates should explicitly state both conditions, not just one, for full marks.",
        },
      ],
    },
    {
      id: "cb2-q2",
      title: "Market structure, efficiency and natural monopoly",
      modules: "Modules 6, 7",
      marks: 14,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 3,
          question: "Distinguish between the demand curve facing an individual firm under perfect competition and under monopoly.",
          answer:
            "Under perfect competition, an individual firm faces a perfectly horizontal (flat) demand curve at the ruling market price &mdash; it is a price-taker and can sell any quantity at that price without affecting it. Under monopoly, the firm IS the market, so it faces the whole market's downward-sloping demand curve: to sell more, it must lower the price on all units sold, not just the extra unit.",
          note: "Candidates should sketch (or clearly describe) both curves. A common mistake is describing the monopolist's curve as flat too &mdash; examiners specifically test whether students understand that market power comes from facing a downward-sloping curve.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a monopolist's marginal revenue curve lies below its demand curve, and state the profit-maximising rule for output that applies to any firm, regardless of market structure.",
          answer:
            "Because the monopolist must lower price on all units sold (not just the last one) to sell an extra unit, the revenue gained from that extra unit is less than the new price &mdash; the 'lost' revenue from the lower price on all previous units pulls marginal revenue below the price (and hence below the demand curve) at every output level. The universal profit-maximising rule is: produce where marginal revenue equals marginal cost (MR = MC).",
          note: "The MR = MC rule should be quoted precisely; some candidates confuse it with the price-taking special case MR = Price, which only holds under perfect competition (part (i) is designed to set up exactly this contrast).",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 4,
          question:
            "'UpTown Water' is a natural monopoly: its long-run average cost falls continuously across the entire feasible range of output for the region it serves. Explain why splitting UpTown into several competing regional suppliers is unlikely to reduce consumers' water bills.",
          answer:
            "A natural monopoly exists precisely because one firm can supply the whole market at lower average cost than two or more firms could &mdash; typically due to very high fixed costs (e.g. the pipe network) spread over the customer base. If UpTown were split into several smaller competing suppliers, each would serve a smaller share of the market and would therefore sit further up (left on) its falling average cost curve, meaning each supplier's average cost per customer would be higher than UpTown's was as a single provider. Introducing competition here doesn't capture the usual efficiency benefits of competition (Module 6) because the industry's cost structure means fragmentation itself raises costs, which would likely be passed on to consumers as higher, not lower, bills.",
          note: "This tests whether candidates can apply the natural monopoly concept rather than just define it &mdash; the expected answer explicitly links 'falling average cost over the whole feasible range' to why fragmentation raises average cost per firm. Candidates who just repeat 'high fixed costs' without connecting it to the specific splitting scenario described lose marks for lack of application.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two reasons a regulator might tolerate &mdash; or even encourage &mdash; some monopoly power in a market, despite the usual efficiency criticisms of monopoly.",
          answer:
            "(1) Natural monopoly cost structure (as in part (iii)) &mdash; where one firm genuinely can supply at lower cost than several, forcing competition would be inefficient; the regulator's job becomes managing (e.g. price-capping) the monopoly rather than breaking it up. (2) Dynamic efficiency/innovation &mdash; supernormal profits earned under monopoly can fund research and development that a competitive firm earning only normal profit could not afford, potentially delivering long-run benefits (new products, lower future costs) that offset the static efficiency loss from higher prices today.",
          note: "'Discuss' invites weighing a benefit against the standard monopoly criticism from Module 6 (deadweight loss, allocative inefficiency) &mdash; the strongest answers briefly acknowledge that tolerance is conditional (e.g. regulated pricing, or genuine ongoing innovation) rather than presenting monopoly power as unambiguously fine.",
        },
      ],
    },
    {
      id: "cb2-q3",
      title: "Externalities at a livestock farm",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define a negative externality, illustrating your answer with reference to Fenwold Farms, a large livestock operation whose methane emissions and odour affect a nearby town.",
          answer:
            "A negative externality is a cost imposed on a third party that is not reflected in the market price of the good or activity causing it. Here, the residents of the nearby town bear a real cost &mdash; reduced air quality and amenity from odour and emissions &mdash; that is not paid for by Fenwold Farms or reflected in the price of the meat it sells.",
          note: "Full marks require both the general definition and the specific application to the scenario named in the question &mdash; a bare textbook definition with no reference to Fenwold Farms typically loses one of the two marks.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Using the concepts of marginal private cost and marginal social cost, explain why a free market will lead to over-production from Fenwold Farms relative to the socially optimal level.",
          answer:
            "Fenwold Farms bases its production decisions on its marginal private cost (the cost it actually pays: feed, labour, land, etc.), which is lower than the true marginal social cost (private cost plus the external cost imposed on the town). Because the farm doesn't pay for the externality, it keeps producing beyond the point where marginal social cost would equal marginal social benefit &mdash; the socially efficient output &mdash; and stops only where its own marginal private cost equals price. The gap between the two cost curves at that output represents production that costs society more than it's worth.",
          note: "Examiners look for the specific mechanism (private cost understates true cost, so the firm's privately-optimal output exceeds the socially-optimal one) rather than a vague statement that 'externalities cause market failure'. A rough sketch of MPC, MSC and demand, if offered, supports the answer well.",
        },
        {
          label: "(iii)",
          command: "Compare",
          marks: 4,
          question:
            "The local council is considering two policy responses: (a) a per-unit tax on livestock numbers, or (b) a regulatory cap on herd size. Compare these two approaches, referring to efficiency and the information the council would need for each to work well.",
          answer:
            "A tax (a) works by raising Fenwold's private cost to reflect the external cost (an attempt to 'internalise' the externality), letting the farm itself decide how much to cut back &mdash; this can be efficient if the tax is set correctly, but requires the council to know the monetary value of the external cost reasonably accurately to set the right tax rate. A cap (b) directly limits herd size regardless of cost, guaranteeing a specific quantity outcome without needing to estimate the externality's monetary value, but it doesn't allow the farm any flexibility to find the cheapest way to reduce impact, and if set at the wrong level it may be more or less restrictive than the efficient outcome would require. In short: the tax is efficient but informationally demanding on price; the cap is certain on quantity but potentially inefficient and equally demanding on the 'right' quantity to set.",
          note: "This is a 'quantity tool vs price tool' comparison, directly testable in this module. Four marks are typically split 2 each for the tax and the cap, each requiring both an efficiency point and an information/practicality point &mdash; an answer that only describes what each tool is, without comparing them, loses the comparison marks even if each description is individually correct.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an economist might argue that government intervention is not always necessary to resolve this externality, referring to a named theorem.",
          answer:
            "The Coase theorem suggests that, under certain conditions &mdash; clearly defined property rights and low transaction/bargaining costs &mdash; the town's residents and Fenwold Farms could bargain privately to reach an efficient outcome without government intervention (e.g. residents could pay the farm to reduce emissions, or the farm could compensate residents, whichever is cheaper). In practice this is limited here by the large number of affected residents, making coordinated bargaining costly, and by the difficulty of clearly assigning property rights over air quality.",
          note: "Full marks require naming the Coase theorem explicitly (not just describing 'private bargaining' in vague terms) and stating its key conditions. The strongest answers, as here, note why the theorem's conditions are unlikely to hold well in this specific scenario, showing critical application rather than just bookwork recall.",
        },
      ],
    },
    {
      id: "cb2-q4",
      title: "A supply shock in Verdania",
      modules: "Modules 10, 11, 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Verdania experiences a sharp, sustained rise in global energy prices, significantly raising firms' production costs across the economy. Using the AS-AD framework, explain the effect on Verdania's price level and output in the short run.",
          answer:
            "A sharp rise in production costs shifts the short-run aggregate supply curve to the left (upward): firms are willing to supply less output at every price level than before, since it now costs more to produce the same amount. With aggregate demand unchanged, the new AS-AD intersection sits at a higher price level and a lower level of output than before &mdash; the economy experiences both rising prices and falling output simultaneously.",
          note: "Candidates should be explicit that it's aggregate SUPPLY that shifts here (not demand) &mdash; a common error is describing this as a demand-side shock. A sketch or clear verbal description of the leftward AS shift and the resulting new equilibrium earns the marks; simply asserting 'prices rise and output falls' without the AS-AD mechanism loses credit.",
        },
        {
          label: "(ii)",
          command: "State",
          marks: 2,
          question: "State, with a brief justification, whether this scenario represents demand-pull or cost-push inflation.",
          answer:
            "This is cost-push inflation: the inflation originates from rising production costs (energy prices) reducing aggregate supply, not from aggregate demand growing faster than the economy's capacity. The diagnostic sign is that output falls alongside rising prices &mdash; demand-pull inflation would instead come with rising output, at least until capacity constraints bind.",
          note: "The justification (falling output alongside rising prices) is what earns the second mark &mdash; simply stating 'cost-push' without the reasoning typically only scores 1 of the 2 marks available.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why this scenario could lead to 'stagflation', defining the term as part of your answer.",
          answer:
            "Stagflation is a combination of stagnant growth (or falling output/recession), high unemployment, and high inflation occurring simultaneously. The energy price shock described is exactly the kind of negative supply shock that can produce this combination: falling output (from the leftward AS shift) tends to raise unemployment at the same time as the shock is pushing prices up, defying the simple assumption that inflation and unemployment move in opposite directions.",
          note: "The definition (three elements: stagnant/falling output, high unemployment, high inflation) should be given explicitly, not just implied. This question is deliberately designed to test whether candidates can connect the AS-AD mechanics from parts (i)-(ii) to the stagflation concept, rather than treating stagflation as an isolated definition to memorise.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 4,
          question:
            "Verdania's government must choose between raising interest rates to control inflation, or providing fiscal support to households facing higher energy bills. Discuss the trade-off macroeconomic policymakers face in this scenario.",
          answer:
            "Raising interest rates would help control inflation (reducing aggregate demand to offset some of the price pressure) but would further reduce output and raise unemployment &mdash; worsening the 'stagnation' side of the stagflation problem at exactly the wrong moment, since output is already falling due to the supply shock itself. Providing fiscal support to households would ease the immediate cost-of-living impact and support demand/output, but does nothing to address the underlying inflation (and could arguably add to demand-side inflationary pressure), while also worsening the government's fiscal position. The core trade-off is that neither tool can address both the inflation and the output/unemployment problem simultaneously &mdash; this is precisely the kind of dilemma a supply shock creates, unlike a simple demand-side downturn where monetary/fiscal loosening helps on both fronts at once.",
          note: "This is an application of Module 11's 'objectives can conflict' theme to a concrete supply-shock scenario. Strong answers explicitly note that a supply shock is harder to respond to than a demand shock precisely because the usual policy tools each help one objective while worsening the other &mdash; simply listing the two options without identifying this underlying tension loses marks for the 'discuss' command verb, which expects genuine weighing of both sides.",
        },
      ],
    },
    {
      id: "cb2-q5",
      title: "The multiplier and an infrastructure programme",
      modules: "Modules 17, 18, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 2,
          question:
            "State the formula for the simple Keynesian multiplier in a closed economy with no government sector, and calculate its value given a marginal propensity to consume (MPC) of 0.75.",
          answer: "Multiplier = 1 &divide; (1 &minus; MPC) = 1 &divide; (1 &minus; 0.75) = 1 &divide; 0.25 = 4.",
          note: "Both the formula and the numerical evaluation are needed for full marks &mdash; a bare answer of '4' with no formula shown typically only scores partial credit if the working isn't visible.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "A newly announced &pound;2 billion infrastructure spending programme is treated as an injection of autonomous expenditure. Using the multiplier from part (i), calculate the eventual total change in national income, and briefly explain the process by which this total is reached.",
          answer:
            "Total change in national income = &pound;2bn &times; 4 = &pound;8bn. The process: the initial &pound;2bn of spending becomes income for construction firms and workers; a proportion of that (governed by the MPC = 0.75) is then re-spent by them on other goods and services, which becomes income for others in turn, and so on through successive rounds. Each round is smaller than the last (since some income leaks out as saving at each stage), so the rounds sum to a total effect larger than the initial injection, converging on &pound;8bn.",
          note: "The calculation itself (1 mark) is straightforward given part (i); the remaining marks are for correctly explaining the round-by-round mechanism, not just restating the multiplier formula a second time &mdash; candidates who only give the number without any explanation of the process lose 2 of the 3 marks.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Using the IS-LM framework, explain why the actual increase in national income may be smaller than your answer to part (ii) suggests.",
          answer:
            "The simple multiplier calculation assumes the interest rate stays constant, but in the IS-LM framework, a fiscal expansion (the &pound;2bn programme) shifts the IS curve to the right, raising both equilibrium income and the equilibrium interest rate. The higher interest rate discourages some private investment spending &mdash; 'crowding out' &mdash; partially offsetting the initial stimulus, so the actual rise in national income along the new IS-LM equilibrium is smaller than the simple multiplier (which ignores this interest-rate feedback) would predict.",
          note: "The key term examiners look for is 'crowding out', correctly linked to a rightward IS shift raising interest rates. Candidates who mention crowding out without explaining the IS-LM mechanism behind it (why interest rates rise in the first place) typically lose a mark for incomplete reasoning.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two automatic stabilisers that would partially offset the impact of a future economic downturn on Verdania's national income, without new legislation being required.",
          answer:
            "(1) Progressive/proportional income tax: as incomes fall in a downturn, tax paid falls by more than proportionally (with a progressive system), automatically cushioning the fall in households' disposable income and hence their spending, without any new policy decision needed. (2) Unemployment benefits: as unemployment rises in a downturn, benefit payments automatically increase, supporting the incomes (and hence spending) of those who lose their jobs, again without new legislation &mdash; both mechanisms partially offset the fall in aggregate demand that would otherwise deepen the downturn via the multiplier process from parts (i)-(ii).",
          note: "The word 'automatic' is central &mdash; a common error is describing a discretionary fiscal response (e.g. a new stimulus package announced in response to the downturn) instead of a built-in stabiliser that requires no new decision. Both examples should be explicitly linked back to softening the multiplier/demand-fall dynamic from earlier in the question for full marks.",
        },
      ],
    },
    {
      id: "cb2-q6",
      title: "Defending a currency peg in Meridia",
      modules: "Modules 13, 22",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Meridia operates a fixed exchange rate pegged to a major reserve currency, and also allows free movement of capital in and out of the country. Using the 'impossible trinity', explain why Meridia's central bank cannot also pursue an independent monetary policy.",
          answer:
            "The impossible trinity states that a country cannot simultaneously have a fixed exchange rate, free capital movement, and independent monetary policy &mdash; it must give up one of the three. Having already chosen a fixed peg and free capital movement, Meridia's interest rate is effectively pinned to that of the currency it's pegged to: if Meridia's central bank tried to set a different rate, capital would flow in or out (chasing the better return) in a way that would put unsustainable pressure on the peg, forcing the central bank to move its own rate back into line to defend it.",
          note: "Full marks require naming the impossible trinity/trilemma explicitly and explaining the mechanism (capital flows undermining the peg), not just stating the conclusion that Meridia 'can't do all three'. This links Module 13's interest-rate/capital-flow relationship directly to Module 22's trilemma concept.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Meridia's currency comes under sustained selling pressure. Explain two actions the central bank could take to defend the peg, and state one risk associated with each.",
          answer:
            "(1) Direct intervention: the central bank buys its own currency using its foreign exchange reserves. Risk: this depletes the central bank's reserves, which are finite &mdash; if selling pressure is sustained, the bank could run out of reserves and be forced to abandon the peg regardless. (2) Raise interest rates: higher rates make Meridia's currency more attractive to foreign capital seeking a better return, supporting demand for the currency. Risk: this conflicts with domestic objectives (per part (i)'s trilemma) &mdash; a rate rise aimed purely at defending the currency may be inappropriate for domestic conditions (e.g. if the domestic economy is already weak, a rate rise could tip it into a deeper downturn).",
          note: "Each action needs both a correct mechanism AND a genuine associated risk for full marks &mdash; simply listing 'intervene' and 'raise rates' without the risks attached only scores half credit.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how a decision to abandon the peg and allow the currency to float would affect Meridia's exporters in the short run.",
          answer:
            "Given the currency was under sustained selling pressure before the float, abandoning the peg would likely see the currency depreciate significantly once it's allowed to move freely. This would make Meridia's exports cheaper for foreign buyers (in their own currency terms), likely boosting export volumes and improving export competitiveness in the short run &mdash; though the extent of the benefit depends on the price elasticity of demand for Meridia's exports.",
          note: "The elasticity caveat at the end is worth including for full marks &mdash; a strong answer doesn't just assert 'exports benefit' but notes this depends on demand being sufficiently elastic to translate the price fall into a volume/revenue gain, tying back to Module 3.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss one advantage and one disadvantage of Meridia instead joining a monetary union with its major trading partners, rather than maintaining its own floating currency.",
          answer:
            "Advantage: joining a monetary union would eliminate exchange rate risk and transaction costs on trade with those partners entirely, going further than even a successfully-defended peg in supporting trade and investment certainty. Disadvantage: Meridia would permanently give up its own monetary policy and exchange rate as adjustment tools (a deeper version of the trilemma trade-off in part (i)) &mdash; if Meridia's economy moves out of sync with its partners' business cycles, it would be stuck with a shared interest rate that may not suit its own domestic conditions, with no ability to devalue to regain competitiveness.",
          note: "This draws on Module 23's monetary union material to extend the currency-policy discussion beyond the peg-vs-float choice already covered in parts (i)-(iii) &mdash; examiners like a final part that broadens the scope slightly to test whether candidates can bring in a related but distinct concept, not just repeat the same trilemma point a fourth time.",
        },
      ],
    },
    {
      id: "cb2-q7",
      title: "Interest rates and bank liquidity risk",
      modules: "Modules 14, 15, 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "Explain the transmission mechanism through which a rise in the central bank's policy interest rate is expected to reduce inflation.",
          answer:
            "A rise in the policy rate feeds through to higher market interest rates on loans and mortgages, raising the cost of borrowing for households and firms. This discourages consumer spending and business investment, reducing aggregate demand. A higher rate can also raise the exchange rate (attracting foreign capital seeking better returns), making imports cheaper and exports less competitive, further dampening demand. The combined fall in aggregate demand eases inflationary pressure, moving the economy back toward the inflation target over time.",
          note: "Examiners want multiple distinct channels named (borrowing costs, and ideally the exchange rate channel too), not just a single-sentence 'higher rates reduce spending'. This mirrors Module 15's and Module 21's transmission-mechanism cards combined into a fuller answer.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "'Northshire Bank' relies heavily on short-term wholesale funding to finance longer-term mortgage lending. Explain, with reference to maturity transformation, why a sudden loss of confidence in Northshire Bank could cause it to fail even if its mortgage loan book is fundamentally sound.",
          answer:
            "Northshire is performing maturity transformation: funding long-term assets (mortgages, which are repaid over many years) with short-term liabilities (wholesale funding that must be regularly rolled over). If confidence in the bank suddenly falls, wholesale lenders may refuse to renew that short-term funding. Northshire cannot quickly call in its mortgage loans to raise cash, so even though the loans themselves are perfectly good (the bank is solvent &mdash; its assets are worth more than its liabilities), it can become unable to meet its immediate funding obligations &mdash; a liquidity crisis distinct from an underlying solvency problem, which can force the bank to fail purely on a loss of confidence.",
          note: "The key distinction examiners are testing is liquidity risk versus solvency risk &mdash; a good answer explicitly notes the loan book being 'fundamentally sound' means this is NOT a solvency problem, and explains precisely why liquidity risk alone is sufficient to cause failure. Answers that muddle the two risks together lose marks for imprecision.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain one policy tool that could reduce the risk of Northshire Bank's difficulties spreading to other banks (contagion).",
          answer:
            "A deposit insurance scheme guarantees deposits up to a limit, removing depositors' incentive to panic-withdraw from OTHER banks purely out of fear that Northshire's problems might be a sign of trouble across the wider banking system &mdash; by reassuring depositors elsewhere that their own money is safe regardless, it helps prevent a loss of confidence in one bank spreading into a wider bank run and contagion across the interconnected banking sector.",
          note: "Alternative valid answers include capital adequacy requirements (ensuring other banks hold enough of a buffer to remain solvent even if exposed to Northshire) or central bank 'lender of last resort' facilities (providing emergency liquidity to solvent-but-illiquid banks) &mdash; any one tool, correctly explained and linked to preventing contagion specifically (not just 'making banks safer' in general), earns full marks.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question:
            "Using the concept of rational expectations, discuss whether an interest rate rise that financial markets had fully anticipated in advance is likely to have as large an effect on inflation as an unanticipated rise of the same size.",
          answer:
            "Under the New Classical/rational expectations view, if markets fully anticipate the rate rise, prices, wages and financial asset values may already adjust in advance of the announcement, meaning much of the real economic effect (on spending, investment, the exchange rate) has already been 'priced in' before the rise actually takes effect &mdash; so an anticipated rise may have a smaller additional effect on inflation at the moment it happens than an unanticipated rise of the same size, which catches households, firms and markets by surprise and forces a genuine behavioural adjustment. Keynesians would push back on this, arguing that sticky wages/prices and imperfect information mean even anticipated policy retains meaningful real short-run effects, so the difference between anticipated and unanticipated policy may be smaller in practice than the strict rational expectations view suggests.",
          note: "This deliberately draws on Module 19's New Classical vs Keynesian debate and applies it to a fresh scenario rather than asking for the theory in the abstract. The strongest answers, as here, present both the rational-expectations conclusion AND the Keynesian counterargument, since 'discuss' explicitly rewards weighing both sides rather than picking one school's view as simply correct.",
        },
      ],
    },
    {
      id: "cb2-q8",
      title: "Comparative advantage between Alland and Borvia",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question:
            "Alland and Borvia each produce Textiles and Machinery using labour as their only input. Alland's workers can produce either 8 units of Textiles or 4 units of Machinery per worker-day. Borvia's workers can produce either 6 units of Textiles or 2 units of Machinery per worker-day. State which country has an absolute advantage in each good.",
          answer:
            "Alland has an absolute advantage in both goods: it can produce more Textiles per worker-day (8 vs 6) AND more Machinery per worker-day (4 vs 2) than Borvia.",
          note: "This sets up the comparative-advantage twist in part (iii) &mdash; the question is deliberately designed so one country dominates on absolute advantage in everything, which is the classic setup for testing whether candidates understand that absolute advantage alone doesn't determine the pattern of beneficial trade.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Calculate the opportunity cost of producing one unit of Machinery in each country (in terms of Textiles forgone), and hence determine which country has a comparative advantage in Machinery.",
          answer:
            "Alland: producing 4 units of Machinery costs 8 units of Textiles forgone (using the same worker-day), so 1 unit of Machinery costs 8 &divide; 4 = 2 units of Textiles. Borvia: producing 2 units of Machinery costs 6 units of Textiles forgone, so 1 unit of Machinery costs 6 &divide; 2 = 3 units of Textiles. Alland's opportunity cost of Machinery (2 Textiles) is lower than Borvia's (3 Textiles), so Alland has the comparative advantage in Machinery. (It follows that Borvia, despite its absolute disadvantage in both goods, has the comparative advantage in Textiles: Alland's opportunity cost of 1 Textile is 4&divide;8 = 0.5 Machinery, versus Borvia's 2&divide;6 = 0.33 Machinery &mdash; Borvia gives up less Machinery per Textile produced.)",
          note: "Marks are typically 1 each for the two opportunity-cost calculations, 1 for correctly identifying Alland's comparative advantage in Machinery, and 1 for showing (or at least stating) the corresponding result for Textiles. A candidate who only calculates one country's opportunity cost, or forgets to state which good each country has a comparative advantage in, loses marks even with correct arithmetic.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain, referring to your answer to part (ii), how Alland and Borvia could both gain from specialising and trading, even though Alland has an absolute advantage in both goods.",
          answer:
            "Gains from trade depend on comparative (relative), not absolute, advantage. Even though Alland is more productive at everything, its resources are better used producing Machinery (where its relative efficiency advantage over Borvia is largest) and trading for Textiles, while Borvia specialises in Textiles (where its relative disadvantage is smallest) and trades for Machinery. If each country specialises according to comparative advantage and trades at a price between the two countries' opportunity costs (between 2 and 3 units of Textiles per unit of Machinery), both can end up consuming more of both goods combined than if each tried to produce everything itself.",
          note: "This is the single most commonly misunderstood result in the whole trade topic, and examiners specifically reward candidates who can explain WHY absolute advantage doesn't determine the trade pattern, not just assert that it doesn't. Reference back to the specific numbers from part (ii) (rather than a purely generic explanation) earns the strongest marks.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question:
            "Give two arguments a Borvian politician might use to justify tariffs on imported Machinery from Alland, and briefly evaluate one of them.",
          answer:
            "(1) Protecting domestic jobs in Borvia's (comparatively disadvantaged) Machinery sector from cheaper Allandian imports. (2) The 'infant industry' argument &mdash; temporarily protecting Borvia's Machinery producers to let them become more competitive over time. Evaluating (2): while superficially appealing, this argument is often criticised because 'temporary' protection frequently becomes permanent (protected firms lack the competitive pressure to actually improve), and in this specific case Borvia has a genuine comparative disadvantage in Machinery (part (ii)), not just a temporary competitiveness gap, so protection would likely just impose ongoing costs on Borvian consumers (higher machinery prices) without ever achieving a competitive domestic industry.",
          note: "The evaluation is where most of the marks sit &mdash; simply listing two arguments without critically assessing at least one of them (as the command word requires) loses roughly half the available credit. The strongest evaluation, as here, connects back to the specific comparative-advantage result calculated in part (ii) rather than giving a generic critique of protectionism.",
        },
      ],
    },
    {
      id: "cb2-q9",
      title: "Economic schools of thought and the recovery debate in Astora",
      modules: "Modules 16, 19, 21, 24",
      marks: 13,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Astora enters a deep recession following a crisis in its banking sector, triggered by a prolonged boom in mortgage lending that turned bad. Explain how a Classical economist and a Keynesian economist would differ in their view of how quickly Astora's economy will recover without government intervention.",
          answer:
            "A Classical economist would argue that prices and wages will adjust flexibly, allowing markets (including the labour market) to clear relatively quickly on their own, so the recession should be relatively short-lived without needing intervention. A Keynesian economist would argue that wages and prices can be 'sticky' &mdash; particularly wages, which don't easily fall even when labour demand drops &mdash; so the economy could settle into a prolonged period of high unemployment and low output (demand deficiency) without active government intervention to boost aggregate demand.",
          note: "Candidates should give BOTH perspectives with roughly equal depth, since the command word is 'explain how they differ' &mdash; an answer that only covers one school in detail and mentions the other in passing loses marks for imbalance.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a Monetarist economist would identify as the underlying cause of the excessive mortgage lending boom that preceded Astora's crisis, and the appropriate long-run policy response.",
          answer:
            "A Monetarist economist would point to excessive growth in the money supply (and credit) as the underlying driver of the unsustainable lending boom &mdash; too much money/credit chasing assets (in this case mortgages/property) inflating a boom that was bound to correct. The appropriate long-run policy response, from this perspective, is disciplined control of money supply growth (e.g. via central bank policy) to prevent such credit booms recurring, rather than relying on discretionary demand management to fix the resulting bust after the fact.",
          note: "This tests whether candidates can apply Module 19's Monetarist framework to a specific credit-boom scenario, not just recite Friedman's general inflation claim &mdash; the answer should connect money/credit growth specifically to the mortgage lending boom described, not just discuss inflation in the abstract.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Astora's government must choose between an austerity programme (cutting spending to reduce its budget deficit) and a fiscal stimulus programme (increased spending financed by borrowing). Discuss the case for each approach.",
          answer:
            "The case for austerity: reducing the deficit can restore investor/market confidence in Astora's public finances, keeping borrowing costs manageable and avoiding a slide into fiscal unsustainability, particularly important if markets are already nervous following a financial crisis. The case for stimulus: cutting government spending during a recession risks deepening it further (the paradox of thrift/multiplier working in reverse, per Module 17) &mdash; a stimulus instead supports aggregate demand and speeds recovery, with the resulting higher debt more manageable once growth (and tax revenue) returns, provided the initial fiscal position wasn't already unsustainable.",
          note: "Both sides of this debate must be given genuine weight for full marks under the 'discuss' command word &mdash; this is a direct real-world application of the theoretical fiscal-policy material from Module 21, and examiners specifically want to see candidates connect the abstract multiplier/confidence concepts to the concrete austerity-vs-stimulus choice, not just list the two policy names.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain why 'moral hazard' might be a concern if Astora's government bails out its largest banks following the crisis.",
          answer:
            "Moral hazard arises when a party takes on more risk because it doesn't bear the full consequences of that risk. If Astora's largest banks are bailed out, they (and other large banks observing this) may conclude that future excessive risk-taking will similarly be rescued if it goes wrong &mdash; being treated as 'too big to fail' &mdash; which could encourage exactly the kind of reckless lending behaviour (like the mortgage boom described in part (ii)) that caused this crisis in the first place, undermining the incentive for prudent risk management going forward.",
          note: "The answer needs to state the general definition of moral hazard AND explicitly connect it to the specific 'too big to fail' bailout scenario and its effect on FUTURE risk-taking incentives &mdash; a definition alone, without the forward-looking behavioural consequence, typically only scores partial credit.",
        },
      ],
    },
    {
      id: "cb2-q10",
      title: "Pricing tactics and the rational consumer at Quiddex",
      modules: "Modules 4, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question:
            "Online retailer Quiddex prices many items at, for example, &pound;19.99 rather than &pound;20.00. Define 'psychological pricing' and identify the behavioural bias it exploits.",
          answer:
            "Psychological pricing is setting a price just below a round number (e.g. &pound;19.99 instead of &pound;20.00) to make the product appear cheaper than it really is. It exploits 'anchoring' &mdash; consumers tend to focus disproportionately on the leftmost digit(s) of a price, perceiving &pound;19.99 as meaningfully closer to &pound;19 than to &pound;20, even though the actual difference from &pound;20.00 is negligible.",
          note: "Both the definition and the specific bias (anchoring) are needed for full marks; simply saying 'it makes the price look lower' without naming the underlying behavioural mechanism only scores the definitional mark.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how a time-limited 'flash sale' discount could be understood as a form of price discrimination.",
          answer:
            "A flash sale discriminates between customers based on their willingness to wait/monitor for a lower price rather than by an identifiable group characteristic. Time-sensitive or price-sensitive customers who are willing to watch for and act on the flash sale pay the lower price, while less price-sensitive customers who buy at the regular, non-discounted time pay more &mdash; achieving a similar revenue-capturing effect to third-degree discrimination, but the 'separation' between groups here is behavioural (willingness to wait and monitor) rather than an easily identifiable characteristic like being a student.",
          note: "The key insight examiners want is recognising the underlying discrimination logic (different prices to differently price-sensitive customers) even though this doesn't fit neatly into the standard first/second/third-degree taxonomy taught for identifiable-group discrimination &mdash; strong candidates note the self-selecting nature of who takes advantage of a flash sale.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two ways in which Quiddex's pricing tactics might be inconsistent with the standard 'rational consumer' model.",
          answer:
            "(1) The rational consumer model assumes consumers accurately perceive prices and make consistent utility-maximising choices based on true prices &mdash; but psychological pricing (part (i)) exploits anchoring, a systematic perception bias, meaning consumers may not be responding to the true price at all. (2) The standard model assumes stable, well-defined preferences unaffected by how a choice is presented &mdash; but a time-limited flash sale can trigger urgency/scarcity-driven purchases (a form of herd behaviour or fear-of-missing-out) that don't reflect a considered assessment of the product's true value to the consumer, contradicting the assumption of calm, fully-informed utility maximisation.",
          note: "Each point should clearly name which specific rational-consumer assumption is being violated (accurate price perception; stable preferences unaffected by framing) rather than vaguely asserting 'consumers aren't rational' &mdash; this connects directly back to Module 4's list of rational-choice-model assumptions and its behavioural-economics critique.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on whether the use of such tactics raises any ethical or regulatory concerns for a business.",
          answer:
            "There is a reasonable argument that deliberately exploiting known cognitive biases (rather than competing on genuine value, quality or informative advertising) raises ethical concerns, particularly if it leads vulnerable or less financially literate consumers to spend more than they otherwise would. From a regulatory perspective, authorities in some jurisdictions have begun restricting or requiring disclosure around manipulative pricing tactics (e.g. fake urgency countdowns, misleading 'was/now' pricing), so a business relying heavily on such tactics may face reputational and regulatory risk even where a technique is not (yet) explicitly illegal.",
          note: "'Comment on' is a more open command verb than 'discuss' &mdash; it invites a reasoned viewpoint rather than a strictly balanced weighing of two sides, but the answer should still be grounded in economic reasoning (the biases identified in part (iii)) rather than a purely moral assertion with no link back to the economics covered in the question.",
        },
      ],
    },
  ],
  CM1: [
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
          note: "The prospective method needs the REMAINING term (6 years, not 4 or 10) &mdash; using the wrong term for the annuity factor is the most common error here.",
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
          note: "This is a direct application of the bond pricing equation of value &mdash; the coupon annuity and the redemption lump sum must both be discounted at the SAME required yield (7%), not the coupon rate (6%).",
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
          note: "A common error is forgetting to square the 2-year rate before dividing &mdash; the no-arbitrage relationship compares TOTAL 2-year growth on the left with the CHAINED 1-year rates on the right.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 4,
          question:
            "A liability of &pound;10,000 is due in exactly 3 years. State its Macaulay duration, and explain what asset structure would satisfy Redington's first two immunisation conditions if a single zero-coupon bond is used to back this liability.",
          answer:
            "For a single cashflow, its Macaulay duration equals its own term, i.e. 3 years, since the present-value-weighted average payment time trivially reduces to the time of the one payment itself. To satisfy Redington's first two conditions, hold a single 3-year zero-coupon bond with present value exactly equal to the liability's present value: this automatically matches the present values (condition 1), and since a single zero-coupon bond's duration equals its own term (3 years, matching the liability's duration), condition 2 is also satisfied.",
          note: "Candidates should recognise this as a DEGENERATE (simplest possible) case of Redington's theory, not attempt unnecessary summation/integration &mdash; a single cashflow's duration calculation is trivial once recognised as such.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why, in this single-cashflow case, Redington's third condition (convexity) is automatically satisfied, and what this implies for the fund's protection against interest rate changes.",
          answer:
            "Since the asset (the 3-year zero-coupon bond) and the liability are both single cashflows of the same amount at the same time, their present values move identically for ANY change in the interest rate, not just a small one &mdash; their convexities are therefore exactly equal (not merely asset convexity exceeding liability convexity). This means the fund is perfectly matched, not just approximately immunised against small rate changes as Redington's theory guarantees in the general case.",
          note: "The key insight is that exact cashflow matching is strictly stronger than Redington immunisation &mdash; it protects against interest rate changes of ANY size, whereas Redington's conditions (in the general, non-matched case) only guarantee protection against small changes.",
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
          note: "Each $q_x$ must be divided by the STARTING population at that age ($l_{61}$ and $l_{63}$ respectively), not a common base like $l_{60}$ &mdash; a frequent early-syllabus error.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "Using the same table, calculate $_2p_{61}$, the probability that a life aged 61 survives to age 63.",
          answer: "$_2p_{61} = \\dfrac{l_{63}}{l_{61}} = \\dfrac{95{,}200}{96{,}500} = 0.98653$",
          note: "This is a direct ratio of $l$ values spanning 2 years &mdash; candidates should NOT attempt to multiply $p_{61}\\times p_{62}$ from separately-rounded one-year probabilities, which introduces avoidable rounding error versus the direct ratio.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "Calculate the expected present value of a 3-year term assurance of &pound;50,000, payable at the end of the year of death, to a life aged 61, i.e. $50{,}000 \\times A^1_{61:\\overline{3}|}$, at an effective interest rate of 4% per annum.",
          answer:
            "Deaths: age 61&ndash;62: 600, age 62&ndash;63: 700, age 63&ndash;64: 800. $A^1_{61:\\overline{3}|} = \\frac{600}{96{,}500}v + \\frac{700}{96{,}500}v^2 + \\frac{800}{96{,}500}v^3 = 0.005978+0.006707+0.007370 = 0.020055$. $EPV = 50{,}000 \\times 0.020055 = \\pounds 1{,}002.75$",
          note: "Each year's death probability is calculated relative to $l_{61}$ (the life's age at the START of the policy), not re-based each year &mdash; this is the standard term-assurance summation technique and should be shown as three explicit terms, not just a final answer.",
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
          note: "Renewal expenses apply from the SECOND premium onward, i.e. to $(\\ddot{a}_{61}-1)$ premiums, not all $\\ddot{a}_{61}$ of them &mdash; a common error is applying the 5% loading to the full annuity factor including the first premium.",
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
          note: "Both definitions should reference the RESERVE explicitly &mdash; a common error defines death strain at risk as simply \"the sum assured\", omitting the crucial \"minus the reserve already held\" that makes it a strain rather than the full benefit.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer has 1,000 in-force whole life policies on lives aged 70 at the start of a year, each with sum assured &pound;20,000. The reserve held per policy at the start of the year is &pound;9,000, and the assumed mortality rate is $q_{70}=0.02$. During the year, 18 deaths actually occurred. Calculate the expected death strain and the actual death strain for the portfolio.",
          answer:
            "Death strain at risk per policy $= 20{,}000-9{,}000=\\pounds 11{,}000$. Expected death strain $= 1{,}000 \\times 0.02 \\times 11{,}000 = \\pounds 220{,}000$. Actual death strain $=18 \\times 11{,}000 = \\pounds 198{,}000$.",
          note: "EDS is summed over the WHOLE portfolio (using the assumed probability), while ADS only involves the policies where death actually occurred &mdash; the two use different \"how many policies\" bases, which is the key distinction being tested.",
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
            "$\\ddot{a}_{xy}$ is the expected present value of an annuity of 1 per year, paid annually in advance, while BOTH lives $(x)$ and $(y)$ are alive, ceasing on the first death. $\\ddot{a}_{\\overline{xy}}$ is the expected present value of an annuity of 1 per year, paid annually in advance, continuing as long as AT LEAST ONE of the two lives is alive, ceasing only on the second (later) death.",
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
            "Split the benefit into two pieces. First, &pound;15,000 per year while BOTH lives are alive, valued using the joint life annuity: $15{,}000 \\times \\ddot{a}_{65:62}$. Second, an additional &pound;9,000 per year continuing to whichever life survives after the first death, valued using the 'survivor only' period $\\left(\\ddot{a}_{\\overline{65:62}}-\\ddot{a}_{65:62}\\right)$ &mdash; the portion of the last-survivor annuity representing 'exactly one life alive'. The total value is $15{,}000\\,\\ddot{a}_{65:62} + 9{,}000\\left(\\ddot{a}_{\\overline{65:62}}-\\ddot{a}_{65:62}\\right)$.",
          note: "The key insight is recognising $\\left(\\ddot{a}_{\\overline{xy}}-\\ddot{a}_{xy}\\right)$ as exactly the 'exactly one life alive' period &mdash; candidates who instead try to value the full &pound;15,000 for life plus a separate reduction have overcomplicated the structure relative to this clean decomposition.",
        },
      ],
    },
  ],
};

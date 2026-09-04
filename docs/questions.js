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
};

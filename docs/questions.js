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
  CS1: [
    {
      id: "cs1-q1",
      title: "Generating functions for a Poisson claim count",
      modules: "Modules 2, 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the moment generating function (MGF) of a random variable $X$, and state how $E[X]$ can be obtained from it.",
          answer: "$M_X(t) = E[e^{tX}]$. The mean is obtained as $E[X] = M_X'(0)$, the first derivative of the MGF evaluated at $t=0$.",
          note: "Both the definition and the derivative rule are needed for full marks &mdash; the rest of this question depends on being able to apply this mechanically.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The MGF of a Poisson($\\lambda$) distribution is $M(t)=\\exp[\\lambda(e^t-1)]$. Find $M'(t)$ and hence confirm that $E[X]=\\lambda$.",
          answer: "$M'(t) = \\lambda e^t \\exp[\\lambda(e^t-1)] = \\lambda e^t M(t)$. At $t=0$: $M'(0) = \\lambda(1)(1) = \\lambda$, confirming $E[X]=\\lambda$.",
          note: "Candidates should apply the chain rule correctly (differentiating the exponent $\\lambda(e^t-1)$ gives $\\lambda e^t$, multiplied by $M(t)$ itself) rather than attempting to expand the exponential as a series.",
        },
        {
          label: "(iii)",
          command: "Derive",
          marks: 4,
          question:
            "Find the cumulant generating function (CGF) $K(t)$ of the Poisson($\\lambda$) distribution, and use it to derive $\\text{Var}(X)=\\lambda$ directly. Comment on why this route is more direct than working via the MGF.",
          answer:
            "$K(t) = \\ln M(t) = \\lambda(e^t-1)$. $K'(t) = \\lambda e^t$, so $K'(0)=\\lambda$ (confirming the mean again). $K''(t) = \\lambda e^t$, so $K''(0) = \\lambda = \\text{Var}(X)$. This is more direct than the MGF route because the CGF's second derivative gives the variance in a single step, without needing to separately compute $E[X^2]=M''(0)$ and then subtract $(E[X])^2$.",
          note: "Full marks require both the correct CGF derivation and the explicit comparison to the MGF route &mdash; simply stating the variance without the 'why more direct' comparison loses the final mark.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Two independent portfolios have annual claim counts $N_1\\sim\\text{Poisson}(30)$ and $N_2\\sim\\text{Poisson}(45)$. Using generating functions, state the distribution of the combined claim count $N_1+N_2$, and briefly justify your answer.",
          answer:
            "The MGF of the sum of independent random variables is the product of their individual MGFs: $M_{N_1+N_2}(t) = \\exp[30(e^t-1)]\\times\\exp[45(e^t-1)] = \\exp[75(e^t-1)]$, which is exactly the MGF of a Poisson(75) distribution. Since two random variables sharing the same MGF must have the same distribution, $N_1+N_2 \\sim \\text{Poisson}(75)$.",
          note: "The justification must explicitly invoke the MGF-uniqueness property, not just assert the result &mdash; recognising the product as matching a known Poisson MGF is the key step examiners look for.",
        },
      ],
    },
    {
      id: "cs1-q2",
      title: "A joint distribution: covariance and conditional expectation",
      modules: "Modules 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "Two discrete random variables $X,Y \\in \\{1,2\\}$ have joint probabilities $f(1,1)=0.1$, $f(1,2)=0.3$, $f(2,1)=0.3$, $f(2,2)=0.3$. Determine the marginal distributions of $X$ and $Y$, and state, with justification, whether $X$ and $Y$ are independent.",
          answer:
            "$P(X=1)=0.1+0.3=0.4$, $P(X=2)=0.3+0.3=0.6$. $P(Y=1)=0.1+0.3=0.4$, $P(Y=2)=0.3+0.3=0.6$. $X$ and $Y$ are NOT independent: if they were, $f(1,1)$ would equal $P(X=1)P(Y=1) = 0.4\\times0.4 = 0.16$, but the actual value is $f(1,1)=0.1 \\neq 0.16$.",
          note: "Checking independence requires testing the factorisation condition at (at least) one specific point and finding it fails &mdash; simply asserting dependence without a numerical check loses marks.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Calculate $\\text{Cov}(X,Y)$ for the joint distribution given in part (i).",
          answer:
            "$E[X] = 1(0.4)+2(0.6) = 1.6$. $E[Y]=1.6$ (by the symmetry of the marginals). $E[XY] = (1)(1)(0.1)+(1)(2)(0.3)+(2)(1)(0.3)+(2)(2)(0.3) = 0.1+0.6+0.6+1.2 = 2.5$. $\\text{Cov}(X,Y) = E[XY]-E[X]E[Y] = 2.5 - (1.6)(1.6) = -0.06$.",
          note: "Marks are typically split across correctly finding $E[X]$, $E[Y]$, $E[XY]$ and the final subtraction &mdash; an arithmetic slip in any one component should still earn partial credit if the method is shown.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate $E[Y|X=1]$ and $E[Y|X=2]$, and use these to verify the tower property $E[Y]=E[E[Y|X]]$.",
          answer:
            "$f_{Y|X}(y|1) = f(1,y)/P(X=1)$: $f(1|1)=0.1/0.4=0.25$, $f(2|1)=0.3/0.4=0.75$, so $E[Y|X=1]=1(0.25)+2(0.75)=1.75$. Similarly $E[Y|X=2] = 1(0.5)+2(0.5)=1.5$. Tower property: $E[E[Y|X]] = P(X=1)(1.75)+P(X=2)(1.5) = 0.4(1.75)+0.6(1.5) = 0.7+0.9 = 1.6 = E[Y]$, confirming the identity.",
          note: "The explicit numerical verification at the end (showing the weighted average of the two conditional means equals $E[Y]$ from part (ii)) is what the command word is testing &mdash; stopping after calculating the two conditional means loses the verification mark.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on what the negative covariance found in part (ii), combined with the dependence found in part (i), suggests about the relationship between $X$ and $Y$.",
          answer:
            "The correlation coefficient is $\\rho = -0.06/\\sqrt{0.24\\times0.24} = -0.25$ (using $\\text{Var}(X)=\\text{Var}(Y)=0.24$), indicating a weak negative linear association: $X$ and $Y$ have a mild tendency to move in opposite directions, consistent with the dependence detected in part (i), but the relationship is not strong.",
          note: "A strong answer converts the raw covariance into the more interpretable correlation coefficient before commenting on strength, rather than trying to judge -0.06 in isolation without a sense of scale.",
        },
      ],
    },
    {
      id: "cs1-q3",
      title: "The Central Limit Theorem and a confidence interval for claim size",
      modules: "Modules 6, 7, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Central Limit Theorem for a sequence of i.i.d. random variables.",
          answer:
            "For i.i.d. random variables with finite mean $\\mu$ and finite variance $\\sigma^2$, the standardised sample mean $\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}$ converges in distribution to the standard normal distribution as the sample size $n$ increases.",
          note: "Candidates should state the finite mean/variance condition explicitly, since part (iii) later tests whether they understand when this approximation is exact rather than needed at all.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Individual claim amounts on a portfolio have population mean &pound;800 and population standard deviation &pound;250. For a random sample of 100 claims, use the CLT to calculate the approximate probability that the sample mean claim amount exceeds &pound;850.",
          answer:
            "By the CLT, $\\bar{X} \\approx N(800, 250^2/100) = N(800, 625)$, so the standard error is $250/\\sqrt{100}=25$. $z = \\frac{850-800}{25} = 2.0$. $P(\\bar{X}>850) = P(Z>2.0) = 1-0.9772 = 0.0228$.",
          note: "The standard error must use $\\sigma/\\sqrt{n}$ (25), not $\\sigma$ itself (250) &mdash; using the raw population standard deviation instead of the sample mean's standard error is a common and significant error here.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what would change about your approach in part (ii) if you were instead told that individual claim amounts are known to be exactly normally distributed, rather than of unspecified shape.",
          answer:
            "The numerical answer would be unchanged, since with $n=100$ the CLT approximation is already very accurate. However, the calculation would no longer be an APPROXIMATION at all: if the underlying claim amounts are exactly normal, the sample mean's distribution is exactly $N(\\mu,\\sigma^2/n)$ for any sample size, not just approximately so for large $n$.",
          note: "The key distinction examiners want is 'exact vs approximate', not just 'the answer would be the same' &mdash; candidates should explicitly reference Module 7's exact-normality result for samples from a normal population.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question:
            "The insurer instead wants a 95% confidence interval for the true mean claim amount, based on a sample of 100 claims with sample mean &pound;820 and sample standard deviation &pound;240 (population variance unknown). Calculate the interval.",
          answer:
            "With $n=100$ large, the $t$-distribution with 99 df is very close to standard normal, so $z\\approx1.96$ is used. Standard error $= 240/\\sqrt{100}=24$. Margin $=1.96\\times24=47.04$. 95% CI $= 820 \\pm 47.04 = [\\pounds772.96, \\pounds867.04]$.",
          note: "Candidates should note WHY the normal quantile is an acceptable substitute for the $t$ quantile here specifically (large $n$, so $t_{99}\\approx z$) rather than using it without justification.",
        },
      ],
    },
    {
      id: "cs1-q4",
      title: "Method of moments and maximum likelihood for exponential waiting times",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the method of moments estimator in general terms, and state how it relates to the MLE for an exponential distribution.",
          answer:
            "The method of moments estimator is found by setting sample moments equal to the corresponding theoretical population moments and solving for the unknown parameter. For the exponential distribution, the method of moments estimator and the maximum likelihood estimator coincide exactly.",
          note: "The coincidence for the exponential case is a useful fact to flag explicitly, since part (iii) derives the same numerical answer via a completely different route (differentiating the log-likelihood).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A sample of 8 policy waiting times (assumed exponential($\\lambda$)) has a total sum of 40. Calculate the method of moments estimate of $\\lambda$.",
          answer: "$\\bar{x} = 40/8 = 5$. For the exponential distribution, $E[X]=1/\\lambda$, so setting $\\bar{x}=1/\\hat\\lambda$ gives $\\hat\\lambda = 1/\\bar{x} = 1/5 = 0.2$.",
          note: "Candidates must correctly invert the mean-parameter relationship ($E[X]=1/\\lambda$, not $\\lambda$) &mdash; a common error is stating $\\hat\\lambda=\\bar{x}$ directly.",
        },
        {
          label: "(iii)",
          command: "Derive",
          marks: 4,
          question: "Derive the maximum likelihood estimator of $\\lambda$ for a random sample of size $n$ from an exponential($\\lambda$) distribution, from first principles, and confirm it matches part (ii).",
          answer:
            "Likelihood: $L(\\lambda)=\\lambda^n e^{-\\lambda\\sum x_i}$. Log-likelihood: $\\ell(\\lambda)=n\\ln\\lambda - \\lambda\\sum x_i$. Differentiating: $\\ell'(\\lambda) = \\frac{n}{\\lambda}-\\sum x_i = 0 \\Rightarrow \\hat\\lambda_{MLE} = \\frac{n}{\\sum x_i} = \\frac{1}{\\bar{x}}$. With $n=8$, $\\sum x_i=40$: $\\hat\\lambda_{MLE}=8/40=0.2$, matching part (ii).",
          note: "The full four-step recipe (likelihood, log-likelihood, differentiate, solve) should be shown explicitly for full marks &mdash; jumping straight to the answer without the differentiation step loses the method marks even if the final number is correct.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "State whether this MLE is unbiased for $\\lambda$ in finite samples, and comment briefly on its large-sample properties.",
          answer:
            "The MLE $\\hat\\lambda=1/\\bar{X}$ is biased for finite $n$ (its expectation is slightly above the true $\\lambda$, since $E[1/\\bar X]\\neq 1/E[\\bar X]$ in general). However, it is asymptotically unbiased and consistent, converging to the true $\\lambda$ as $n\\to\\infty$, and it is asymptotically normally distributed, consistent with the general large-sample properties of MLEs.",
          note: "This tests whether candidates understand that 'MLE' does not automatically mean 'unbiased' &mdash; the reciprocal-of-a-mean structure here is a classic case where finite-sample bias exists despite excellent large-sample behaviour.",
        },
      ],
    },
    {
      id: "cs1-q5",
      title: "A chi-square goodness-of-fit test",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the null and alternative hypotheses for a chi-square goodness-of-fit test in general terms.",
          answer: "$H_0$: the data come from the specified probability distribution. $H_1$: the data do not come from the specified distribution.",
          note: "Both hypotheses should be stated relative to a specific claimed distribution, not just 'there is a difference' in vague terms.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Observed frequencies across 5 categories are 18, 22, 25, 20, 15, against expected frequencies of 20 in each category under $H_0$. Calculate the chi-square test statistic.",
          answer:
            "$\\chi^2 = \\sum\\frac{(O-E)^2}{E} = \\frac{(18-20)^2}{20}+\\frac{(22-20)^2}{20}+\\frac{(25-20)^2}{20}+\\frac{(20-20)^2}{20}+\\frac{(15-20)^2}{20} = \\frac{4+4+25+0+25}{20} = \\frac{58}{20} = 2.90$",
          note: "Each of the five terms should be shown individually before summing &mdash; a bare final answer with no working shown risks losing marks even if correct, since this is a 'calculate' question with several components.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "State the degrees of freedom for this test, compare the statistic to the 5% critical value of 9.488, and state your conclusion.",
          answer:
            "Degrees of freedom $= 5-1 = 4$ (5 categories, no parameters estimated from the data). Since $\\chi^2=2.90 < 9.488$, there is insufficient evidence to reject $H_0$ at the 5% level &mdash; the data are consistent with the specified distribution.",
          note: "The conclusion must be phrased as 'insufficient evidence to reject' rather than 'accept $H_0$' &mdash; a hypothesis test never proves the null hypothesis true, only that the data don't contradict it.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the degrees of freedom in part (iii) would change if the expected frequencies had instead been calculated using a Poisson distribution whose mean was estimated from the same data, and why.",
          answer:
            "The degrees of freedom would reduce to $5-1-1=3$. This is because estimating the Poisson mean from the same data being tested uses up one additional degree of freedom &mdash; the general rule is that the degrees of freedom reduce by one for each parameter estimated from the data, on top of the usual '$k-1$' baseline for $k$ categories.",
          note: "This connects directly to the same 'degrees of freedom get used up by estimation' logic as the $n-1$ divisor for sample variance &mdash; candidates who can draw that parallel demonstrate a deeper understanding than one who just quotes the rule.",
        },
      ],
    },
    {
      id: "cs1-q6",
      title: "Correlation between claims experience and a rating factor",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the sample Pearson correlation coefficient $r$ in terms of sample covariance and sample standard deviations.",
          answer: "$r = \\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}$, where $S_{xy}=\\sum(x_i-\\bar{x})(y_i-\\bar{y})$, $S_{xx}=\\sum(x_i-\\bar{x})^2$, and $S_{yy}=\\sum(y_i-\\bar{y})^2$.",
          note: "This is the sample-data version of Module 4's theoretical correlation formula &mdash; candidates should recognise the parallel rather than treating it as an unrelated new formula.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Paired data are: $x = (2,4,6,8,10,12)$, $y=(3,5,4,9,8,11)$. Calculate the sample correlation coefficient $r$.",
          answer:
            "$\\bar{x}=7$, $\\bar{y}=6.667$. $S_{xy}=54$, $S_{xx}=70$, $S_{yy}=49.33$. $r = \\dfrac{54}{\\sqrt{70\\times49.33}} = \\dfrac{54}{58.77} = 0.919$",
          note: "Candidates should show the intermediate sums ($S_{xy}$, $S_{xx}$, $S_{yy}$) rather than jumping to the final ratio, both for method marks and to make an arithmetic error easier to spot and partially credit.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Test, at the 5% significance level, whether the population correlation coefficient is significantly different from zero.",
          answer:
            "$H_0: \\rho=0$ vs $H_1: \\rho\\neq0$. Test statistic: $t = r\\sqrt{\\frac{n-2}{1-r^2}} = 0.919\\sqrt{\\frac{4}{1-0.845}} = 4.66$, with $n-2=4$ degrees of freedom. Since $|4.66| > 2.776$ (the 5% two-sided critical value for $t_4$), reject $H_0$: there is significant evidence of a non-zero population correlation.",
          note: "Both hypotheses and the explicit comparison to the critical value are needed for full marks &mdash; quoting only the $t$-statistic without a stated conclusion against the critical value is an incomplete answer.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "The data appear to follow a consistently increasing but slightly curved (not perfectly straight-line) pattern. Explain how you would check whether Spearman's rank correlation supports the same conclusion, and what result you would expect if the relationship is strongly monotonic despite the curve.",
          answer:
            "Recalculate the correlation using the RANKS of $x$ and $y$ in place of their raw values (Spearman's is exactly Pearson's formula applied to ranks). Since a strongly monotonic relationship preserves the ordering of observations almost perfectly even when curved, Spearman's rank correlation would be expected to come out very high &mdash; likely even higher than the Pearson value found in part (ii), since rank correlation isn't penalised by the curvature the way Pearson's linear measure is.",
          note: "The key insight examiners want is the specific prediction (Spearman's $\\geq$ Pearson's here) with a stated reason (rank correlation is insensitive to curvature as long as monotonicity holds), not just 'calculate Spearman's too'.",
        },
      ],
    },
    {
      id: "cs1-q7",
      title: "Fitting a simple linear regression model",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the simple linear regression model, and the criterion used to estimate its parameters.",
          answer: "$Y_i = \\alpha+\\beta x_i+\\epsilon_i$, with $\\epsilon_i$ independent, usually assumed $N(0,\\sigma^2)$. Parameters are estimated by least squares: minimising the sum of squared residuals $\\sum(y_i-\\hat{y}_i)^2$.",
          note: "Both the model equation and the fitting criterion should be stated for full marks &mdash; the criterion is what part (ii) directly applies.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "Data are: $x=(1,2,3,4,5)$, $y=(3,5,4,6,8)$. Calculate the least squares estimates of the slope $\\hat\\beta$ and intercept $\\hat\\alpha$.",
          answer: "$\\bar{x}=3$, $\\bar{y}=5.2$. $S_{xy}=11$, $S_{xx}=10$. $\\hat\\beta = 11/10 = 1.1$. $\\hat\\alpha = \\bar{y}-\\hat\\beta\\bar{x} = 5.2-(1.1)(3) = 1.9$.",
          note: "The intercept must be found using the fitted slope and the sample means (the fitted line always passes through $(\\bar x,\\bar y)$) &mdash; attempting to derive it independently is unnecessary extra work.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate $R^2$ for the fitted model, and interpret its value.",
          answer:
            "Fitted values: 3.0, 4.1, 5.2, 6.3, 7.4. $SS_{res}=\\sum(y_i-\\hat y_i)^2 = 2.70$. $SS_{tot}=\\sum(y_i-\\bar y)^2=14.80$. $R^2 = 1-\\frac{2.70}{14.80} = 0.818$. This means approximately 81.8% of the variability in $y$ is explained by the fitted linear relationship with $x$.",
          note: "The interpretation sentence (what the number actually MEANS, not just its value) is what the 'interpret' instruction is asking for &mdash; a bare numerical answer without interpretation loses part of the available credit.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Use the fitted model to predict the response at $x=6$, and comment on a limitation of using the model for this prediction.",
          answer:
            "$\\hat{y} = 1.9+1.1(6) = 8.5$. This is an extrapolation: $x=6$ lies outside the range of the observed data (1 to 5) used to fit the model, so there is no evidence the linear relationship continues to hold there &mdash; predictions outside the observed range carry additional risk beyond the model's stated precision.",
          note: "Recognising and naming the extrapolation issue specifically (not just 'the model might be wrong') is the key point being tested &mdash; this is a standard, frequently-examined limitation of regression prediction.",
        },
      ],
    },
    {
      id: "cs1-q8",
      title: "A Poisson GLM for claim counts",
      modules: "Module 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define a generalised linear model in terms of the response distribution, linear predictor and link function.",
          answer:
            "A GLM assumes the response follows a distribution from the exponential family, with its mean $\\mu$ related to a linear predictor $\\eta$ (a linear combination of explanatory variables) via a link function $g$, such that $g(\\mu)=\\eta$.",
          note: "All three components (exponential family response, linear predictor, link function) should be named explicitly for full marks.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "An actuary models annual claim counts using a Poisson GLM with a log link, with a single explanatory factor 'driver age band' (3 levels). Write down the general form of the linear predictor, and explain what the log link ensures about the model's predicted claim counts.",
          answer:
            "Linear predictor: $\\eta = \\beta_0 + \\beta_1 I_1 + \\beta_2 I_2$, where $I_1, I_2$ are indicator variables for two of the three age bands (the third is the baseline). Since the log link gives $\\mu=e^\\eta$, and $e^\\eta$ is positive for any real value of $\\eta$, the log link guarantees the model's predicted mean claim count is always positive, regardless of the fitted coefficients.",
          note: "The indicator-variable structure for a 3-level factor (2 indicators, one baseline level) connects to Module 12's factor-variable card &mdash; candidates should recognise this rather than trying to include a separate indicator for all 3 levels, which would be over-parameterised.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "Model A (age band only) has deviance 340 on 296 degrees of freedom. Model B (age band plus vehicle type, adding 2 further parameters) has deviance 322 on 294 degrees of freedom. Test whether vehicle type significantly improves the fit.",
          answer:
            "Deviance difference $=340-322=18$, on $296-294=2$ degrees of freedom. Comparing to the chi-square critical value $\\chi^2_{0.05,2}=5.991$: since $18 > 5.991$, the improvement in fit from adding vehicle type is statistically significant at the 5% level, so vehicle type should be retained in the model.",
          note: "Candidates must correctly identify the degrees of freedom for the comparison as the DIFFERENCE in parameters (2), not either model's own degrees of freedom, and state a clear retain/reject conclusion.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Explain one practical reason an actuary might still choose not to include vehicle type in the final pricing model, despite the statistically significant result in part (iii).",
          answer:
            "Some vehicle-type categories may have very few observations (sparse data), making the estimated coefficients for those levels unstable or unreliable despite the overall test being significant &mdash; alternatively, vehicle type might be highly correlated with another factor already in the model (e.g. engine size), causing multicollinearity concerns, or there may be regulatory or commercial constraints on using that particular rating factor.",
          note: "Any one well-explained practical concern (data sparsity, multicollinearity, or regulatory/commercial constraints) earns full marks &mdash; the point is recognising that statistical significance alone doesn't automatically settle a real pricing-model decision.",
        },
      ],
    },
    {
      id: "cs1-q9",
      title: "Bayesian updating and exact credibility for a Gamma-Poisson model",
      modules: "Modules 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State Bayes' theorem in the form 'posterior is proportional to likelihood times prior', and state why the Gamma distribution is a conjugate prior for a Poisson mean.",
          answer:
            "$f(\\theta|x) \\propto f(x|\\theta)f(\\theta)$. The Gamma distribution is conjugate for a Poisson mean because combining a Gamma prior with Poisson-distributed data always produces a posterior that is itself a Gamma distribution, just with updated parameters.",
          note: "Naming the specific conjugate pairing (Gamma/Poisson) rather than describing conjugacy only in the abstract is what part (ii) then directly applies.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer assumes a Gamma(shape $=4$, rate $=2$) prior for a risk's claim frequency $\\lambda$. Given 10 years of data with total observed claims $=38$, derive the posterior distribution of $\\lambda$ and its mean.",
          answer:
            "For a Gamma(shape $\\alpha_0$, rate $\\beta_0$) prior and Poisson likelihood with $n$ years of data and total claims $S$, the posterior is Gamma($\\alpha_0+S$, $\\beta_0+n$). Here: Gamma($4+38$, $2+10$) $=$ Gamma($42$, $12$). Posterior mean $= 42/12 = 3.5$.",
          note: "The updating rule (add total claims to shape, add years of exposure to rate) should be stated explicitly, not just the final numbers &mdash; this is the standard conjugate-update formula worth memorising exactly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "Calculate the Bühlmann-style credibility factor $Z=\\frac{n}{n+\\beta_0}$ for this prior, and the resulting credibility premium, confirming it matches the posterior mean found in part (ii).",
          answer:
            "$Z = \\dfrac{10}{10+2} = 0.8333$. Sample mean $=38/10=3.8$. Prior mean $=4/2=2.0$. Credibility premium $= 0.8333(3.8)+0.1667(2.0) = 3.167+0.333 = 3.5$, exactly matching the posterior mean from part (ii).",
          note: "The explicit numerical confirmation that both routes give 3.5 is the point of this part &mdash; simply computing $Z$ without completing the credibility-weighted average and comparing it to part (ii) leaves the question incomplete.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain why this exact match between the Bayesian posterior mean and the linear credibility formula is a special property of this particular prior/likelihood pairing, rather than a general result.",
          answer:
            "This is the 'exact credibility' property specific to conjugate prior/likelihood pairs such as Gamma/Poisson (and Beta/Binomial) &mdash; for these particular families, the posterior mean happens to reduce algebraically to exactly the linear credibility-weighted form. For other, non-conjugate prior/likelihood combinations, the true Bayesian posterior mean generally does NOT simplify to a simple linear formula, and a classical credibility premium would then only be an approximation to the full Bayesian answer, not an exact match.",
          note: "The key distinction examiners want is 'special to conjugate pairs, not universal' &mdash; a common error is implying the Bayesian and classical credibility approaches always agree exactly, which is only true for these specific conjugate cases.",
        },
      ],
    },
    {
      id: "cs1-q10",
      title: "Empirical Bayes Credibility Theory Model 1",
      modules: "Module 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the key assumption 'Empirical Bayes Credibility Theory Model 1' makes about the risks in a portfolio.",
          answer: "Model 1 assumes each risk in the portfolio has the same number of years of data/exposure (a balanced data structure).",
          note: "This assumption should be explicitly checked against any given data before applying Model 1's formulas, as the next parts require.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Three risks each have 4 years of claims data: Risk 1: 10, 14, 8, 12. Risk 2: 20, 18, 22, 24. Risk 3: 15, 13, 17, 11. Calculate the estimate of the process (within-risk) variance, $s^2$.",
          answer:
            "Risk means: $\\bar X_1=11$, $\\bar X_2=21$, $\\bar X_3=14$. Sum of squared within-risk deviations: Risk 1: $1+9+9+1=20$; Risk 2: $1+9+1+9=20$; Risk 3: $1+1+9+9=20$; total $=60$. $s^2 = \\dfrac{60}{r(n-1)} = \\dfrac{60}{3(3)} = 6.667$",
          note: "The divisor is $r(n-1)$ &mdash; number of risks times (years per risk minus 1) &mdash; not simply the total number of observations; each risk's own mean is used to measure that risk's own within-risk deviations.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "Calculate the estimate of the variance of hypothetical means (between-risk variance), and hence the credibility factor $Z$ (common to all risks under Model 1).",
          answer:
            "Overall mean $= (11+21+14)/3 = 15.333$. Sum of squared deviations of risk means from overall mean: $(11-15.333)^2+(21-15.333)^2+(14-15.333)^2 = 18.78+32.11+1.78 = 52.67$. $\\hat{a} = \\dfrac{52.67}{r-1} - \\dfrac{s^2}{n} = \\dfrac{52.67}{2}-\\dfrac{6.667}{4} = 26.33-1.67=24.67$. $K = s^2/\\hat{a} = 6.667/24.67 = 0.270$. $Z = \\dfrac{n}{n+K} = \\dfrac{4}{4+0.270} = 0.937$",
          note: "The between-risk variance formula subtracts $s^2/n$ from the raw between-risk sum of squares &mdash; omitting this correction term is a common error that overstates the between-risk variance and hence $Z$.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Calculate the credibility premium for Risk 1 (own mean 11), and comment on why it is close to that risk's own observed mean.",
          answer:
            "Credibility premium $= Z\\bar X_1 + (1-Z)\\bar X = 0.937(11)+0.063(15.333) = 10.31+0.97 = 11.27$. This is close to Risk 1's own mean of 11 because $Z$ is very high (0.937): the estimated between-risk variance is large relative to the process variance, meaning risks in this portfolio genuinely differ a lot from one another, so each risk's own experience is treated as highly informative and given correspondingly heavy weight.",
          note: "The comment should connect the numerical closeness to the underlying reason (high $Z$ because between-risk variance dominates process variance), not just restate that the numbers happen to be close.",
        },
      ],
    },
  ],
  CM2: [
    {
      id: "cm2-q1",
      title: "Market efficiency and an insurance decision under exponential utility",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State the three forms of the Efficient Markets Hypothesis, and which of them is contradicted if a fund manager can consistently earn abnormal returns using only published company accounts.",
          answer:
            "The three forms are weak, semi-strong, and strong. Consistently earning abnormal returns from published accounts (public information) would contradict semi-strong form efficiency &mdash; and, since semi-strong form implies weak form, it would also mean weak form claims about technical analysis are not being tested by this evidence either way.",
          note: "Candidates should recognise that fundamental analysis of public accounts is specifically a semi-strong form question, not a weak form one (which concerns only historical price patterns).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "An individual's preferences are described by the exponential utility function $u(w) = 1 - e^{-aw}$ with $a=0.1$ (wealth in &pound;'000s). Their current wealth is &pound;50,000, and they face a 20% chance of a &pound;10,000 loss. Calculate their expected utility if they do not insure against this risk.",
          answer:
            "$u(50) = 1-e^{-5} = 0.9933$. $u(40) = 1-e^{-4} = 0.9817$. $E[u] = 0.8(0.9933) + 0.2(0.9817) = 0.9909$",
          note: "Wealth must be substituted in the SAME units as $a$ is calibrated to (here, &pound;'000s) &mdash; mixing units (e.g. using $w=50{,}000$ directly with $a=0.1$) gives a meaningless, saturated result.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "An insurer offers to fully remove this risk for a fixed premium of &pound;2,500. Calculate the individual's expected utility if they buy this insurance, and state whether they should.",
          answer:
            "With insurance, wealth is certain at $50-2.5=47.5$ (in &pound;'000s). $E[u] = u(47.5) = 1-e^{-4.75} = 0.9913$. Since $0.9913 > 0.9909$ (the uninsured expected utility from part (ii)), the individual should buy the insurance.",
          note: "The comparison must be made against the exact value from part (ii), not a rounded approximation &mdash; the two expected utilities are close enough that excessive rounding could flip the conclusion.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the certainty equivalent wealth of the uninsured position from part (ii), and use it to explain your conclusion in part (iii) without directly comparing utility values.",
          answer:
            "$CE = -\\dfrac{1}{a}\\ln(1-E[u]) = -\\dfrac{1}{0.1}\\ln(1-0.9909) = -10\\ln(0.0091) = 47.05$ (&pound;'000s). Since the certainty equivalent (&pound;47,050) is less than the guaranteed wealth after insurance (&pound;47,500), the individual is better off accepting the insurer's guaranteed outcome than facing the risky uninsured prospect, confirming insurance should be bought.",
          note: "The certainty equivalent is the guaranteed wealth level giving the SAME expected utility as the risky prospect &mdash; comparing it directly to the insured wealth level is a cleaner, more intuitive way to reach the same conclusion as part (iii) without needing to interpret raw utility numbers.",
        },
      ],
    },
    {
      id: "cm2-q2",
      title: "Value at Risk and TailVaR for a portfolio loss distribution",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define Value at Risk (VaR) and TailVaR (Expected Shortfall) at confidence level $\\alpha$.",
          answer:
            "VaR at confidence level $\\alpha$ is the loss amount that will not be exceeded with probability $\\alpha$ over the specified horizon. TailVaR is the expected loss, given that the loss exceeds the VaR threshold &mdash; the average of the losses in the worst $(1-\\alpha)$ tail of the distribution.",
          note: "Both definitions should reference a specific confidence level explicitly, since part (ii) and (iii) apply them at a stated 95% level.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio's one-year loss $L$ is assumed to be normally distributed with mean &pound;100,000 and standard deviation &pound;40,000. Calculate the 95% VaR (using $z_{0.95}=1.645$).",
          answer: "$VaR_{95\\%} = \\mu + z_{0.95}\\,\\sigma = 100{,}000 + 1.645(40{,}000) = \\pounds165{,}800$",
          note: "This is a direct normal-quantile calculation &mdash; candidates should be comfortable that VaR here is a quantile of the LOSS distribution, not of a return distribution, so no sign-flip is needed.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "Calculate the 95% TailVaR for the same loss distribution, using $TailVaR_\\alpha = \\mu + \\sigma\\,\\dfrac{\\phi(z_\\alpha)}{1-\\alpha}$, where $\\phi$ is the standard normal density function.",
          answer:
            "$\\phi(1.645) = \\dfrac{1}{\\sqrt{2\\pi}}e^{-1.645^2/2} = 0.1031$. $TailVaR_{95\\%} = 100{,}000 + 40{,}000\\times\\dfrac{0.1031}{0.05} = 100{,}000+82{,}490 = \\pounds182{,}490$",
          note: "The division by $(1-\\alpha)=0.05$, not by $\\alpha=0.95$, is the most common slip here &mdash; candidates should double check they've used the correct tail probability.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why TailVaR exceeds VaR in this example, and explain one advantage TailVaR has over VaR for a general insurer's capital-setting purposes.",
          answer:
            "TailVaR averages over ALL losses beyond the VaR threshold, including the most extreme ones, while VaR only marks where that tail begins &mdash; since the tail necessarily contains losses larger than the VaR threshold itself, TailVaR must exceed VaR. TailVaR is a coherent risk measure (satisfying sub-additivity, among other properties) and better reflects the severity of losses in the tail, making it more appropriate than VaR for setting capital to withstand genuinely extreme outcomes.",
          note: "The coherence/sub-additivity point is the key technical advantage worth naming specifically, not just 'TailVaR captures more information' in vague terms.",
        },
      ],
    },
    {
      id: "cm2-q3",
      title: "Two-asset portfolio theory and the minimum variance portfolio",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the formula for the variance of a two-asset portfolio in terms of the asset weights, variances, and covariance.",
          answer: "$\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,\\text{Cov}(R_1,R_2)$",
          note: "This is the foundation formula for the whole question &mdash; candidates should have it available without derivation, since parts (ii) and (iii) apply it directly.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "Asset 1 has expected return 8% and standard deviation 20%; Asset 2 has expected return 12% and standard deviation 30%. The correlation between them is $-0.2$. Calculate the expected return and standard deviation of a portfolio with 60% in Asset 1 and 40% in Asset 2.",
          answer:
            "Expected return $= 0.6(8\\%)+0.4(12\\%) = 9.6\\%$. $\\text{Cov} = (-0.2)(0.20)(0.30) = -0.012$. $\\sigma_p^2 = 0.6^2(0.20)^2+0.4^2(0.30)^2+2(0.6)(0.4)(-0.012) = 0.0144+0.0144-0.00576=0.02304$. $\\sigma_p = 15.18\\%$",
          note: "Note the portfolio standard deviation (15.18%) is below the SIMPLE weighted average of the individual standard deviations (0.6(20%)+0.4(30%)=24%) &mdash; this gap is the diversification benefit, worth flagging explicitly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the weights of the minimum variance portfolio for these two assets.",
          answer:
            "$w_1^{MV} = \\dfrac{\\sigma_2^2-\\text{Cov}}{\\sigma_1^2+\\sigma_2^2-2\\,\\text{Cov}} = \\dfrac{0.09-(-0.012)}{0.04+0.09-2(-0.012)} = \\dfrac{0.102}{0.154}=0.662$, so $w_2^{MV}=0.338$. This gives $\\sigma_p^{MV}=14.98\\%$.",
          note: "Candidates should quote the minimum-variance-weight formula explicitly before substituting &mdash; a bare numerical answer with no formula shown risks losing method marks.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the minimum variance portfolio's standard deviation (14.98%) is lower than that of the 60/40 portfolio (15.18%) found in part (ii), referencing the correlation between the two assets.",
          answer:
            "Because the correlation is negative ($\\rho=-0.2$), the two assets' returns tend to partially offset each other, and there exists a SPECIFIC weighting (the minimum variance weights) that maximises this offsetting effect. The 60/40 split in part (ii) is a reasonable but not optimal mix for risk minimisation; the minimum variance weights (66.2%/33.8%) are specifically chosen to minimise portfolio variance, so by construction no other weighting (including 60/40) can achieve a lower variance.",
          note: "The key insight is that diversification benefit exists across a RANGE of weightings, but is only MAXIMISED at one specific point (the minimum variance portfolio) &mdash; candidates should avoid implying 60/40 was a poor choice, just that it isn't the variance-minimising one.",
        },
      ],
    },
    {
      id: "cm2-q4",
      title: "CAPM and the security market line",
      modules: "Modules 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the CAPM formula for the expected return on an asset, and define beta.",
          answer: "$E[R_i]=R_f+\\beta_i(E[R_m]-R_f)$. Beta measures the sensitivity of an asset's excess return to the excess return of the market portfolio.",
          note: "Both the formula and the definition of beta are needed, since part (ii) requires substituting into the formula and part (iii) requires interpreting the resulting comparison.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question: "A stock has a beta of 1.4. The risk-free rate is 3% and the expected return on the market portfolio is 9%. Calculate the CAPM-required expected return on the stock.",
          answer: "$E[R_i] = 3\\% + 1.4(9\\%-3\\%) = 3\\%+1.4(6\\%) = 3\\%+8.4\\% = 11.4\\%$",
          note: "A direct substitution into the CAPM formula &mdash; the market risk premium ($9\\%-3\\%=6\\%$) should be calculated as an intermediate step, not skipped.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 3,
          question: "Analysts forecast the stock's actual expected return at 11%. State whether the stock plots above or below the security market line, and what this implies.",
          answer:
            "Since the forecast return (11%) is below the CAPM-required return (11.4%) from part (ii), the stock plots BELOW the security market line. This implies the stock appears overvalued for its level of systematic risk &mdash; it is not offering sufficient expected return to compensate for its beta, and CAPM would predict its price should fall (raising its expected return) until it is correctly priced on the line.",
          note: "Candidates commonly reverse this comparison &mdash; below the line means LOWER than required return, implying overvaluation (you're paying too much for too little expected compensation), not the reverse.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain how a single-index model's decomposition of the stock's return variance differs from CAPM's central claim about which risk is rewarded.",
          answer:
            "The single-index model decomposes total return variance into systematic variance (from the common market factor) plus idiosyncratic variance &mdash; this is a purely statistical, descriptive decomposition. CAPM makes the stronger ECONOMIC claim that only the systematic portion should be compensated with extra expected return, since idiosyncratic risk can be diversified away at no cost; the single-index model alone does not assert this economic conclusion, it merely describes the variance split.",
          note: "The key distinction is 'descriptive statistical decomposition' (single-index model) versus 'normative economic claim about pricing' (CAPM) &mdash; candidates who treat the two as interchangeable miss this important conceptual difference.",
        },
      ],
    },
    {
      id: "cm2-q5",
      title: "Brownian motion, Ito's Lemma and the log-normal model",
      modules: "Modules 7, 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the defining properties of standard Brownian motion $W_t$, and explain why it is a martingale.",
          answer:
            "$W_0=0$; independent increments; $W_t-W_s\\sim N(0,t-s)$ for $t>s$; continuous paths. It is a martingale because, by independent increments, $E[W_t|\\mathcal{F}_s]=W_s+E[W_t-W_s|\\mathcal{F}_s]=W_s+0=W_s$, i.e. zero expected drift given current information.",
          note: "The martingale justification should reference independent increments explicitly, not just assert the zero-drift property without derivation.",
        },
        {
          label: "(ii)",
          command: "State",
          marks: 2,
          question: "State the key extra term Ito's Lemma includes compared with the ordinary calculus chain rule, and briefly explain why it is needed.",
          answer:
            "The extra term is $\\frac{1}{2}\\frac{\\partial^2 f}{\\partial x^2}\\sigma^2\\,dt$. It is needed because Brownian motion has non-zero quadratic variation (equal to $t$ over $[0,t]$), unlike a smooth, ordinarily differentiable function, so the second-order term that ordinary calculus discards as negligible does not vanish here.",
          note: "Candidates should connect the extra term specifically to quadratic variation, not just state 'Brownian motion is different' without the precise mathematical reason.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "A stock price follows geometric Brownian motion with drift $\\mu=0.08$ and volatility $\\sigma=0.25$. Using the solved form of the GBM SDE, calculate the probability that the stock price after 1 year exceeds its initial value, i.e. $P(S_1>S_0)$.",
          answer:
            "$\\ln(S_1/S_0) \\sim N\\left((\\mu-\\tfrac12\\sigma^2)(1),\\ \\sigma^2(1)\\right) = N(0.04875,\\ 0.0625)$, so standard deviation $=0.25$. $P(S_1>S_0)=P(\\ln(S_1/S_0)>0)=P\\left(Z>\\dfrac{-0.04875}{0.25}\\right)=P(Z>-0.195)=\\Phi(0.195)=0.577$",
          note: "The full method (standardise, use symmetry of the normal distribution) should be shown &mdash; this connects Module 8's solved GBM formula directly to a normal-probability calculation, testing whether candidates can combine the two techniques.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "Comment on why this probability (57.7%) is greater than 50% despite the $-\\tfrac12\\sigma^2$ adjustment term reducing the drift in the exponent, and give one piece of empirical evidence that might make this log-normal model an imperfect description of real stock price behaviour.",
          answer:
            "The mean of $\\ln(S_1/S_0)$, though reduced by the $-\\tfrac12\\sigma^2$ adjustment (from 0.08 to 0.04875), remains positive, so the balance of probability still favours $S_1>S_0$ &mdash; the drift effect outweighs the variance adjustment here. Empirically, the log-normal model is imperfect because real returns often show fat tails (more extreme moves than normal predicts) and negative skewness (larger, more frequent downward moves), unlike the model's symmetric normal-distribution assumption for log returns.",
          note: "Both parts of the answer are needed for full marks: the numerical/algebraic explanation for why the probability still exceeds 50%, and a specific named empirical critique (fat tails and/or skewness) from Module 9.",
        },
      ],
    },
    {
      id: "cm2-q6",
      title: "Put-call parity, forward pricing and the Greeks",
      modules: "Modules 10, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the no-arbitrage forward price formula for a non-dividend-paying asset, and put-call parity for European options.",
          answer: "$F_0 = S_0e^{rT}$. Put-call parity: $C-P = S_0-Ke^{-rT}$",
          note: "Both formulas are used directly in parts (ii) and (iii) &mdash; candidates should have them immediately available.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A non-dividend-paying stock trades at &pound;80. The continuously-compounded risk-free rate is 5% per annum. Calculate the 6-month forward price.",
          answer: "$F_0 = 80\\,e^{0.05(0.5)} = 80\\,e^{0.025} = \\pounds82.03$",
          note: "A direct application of the forward price formula &mdash; candidates should use $T=0.5$ years, not 6 (months) directly.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "A 6-month European call option on this stock with strike &pound;75 trades at &pound;9.50. Using put-call parity, calculate the price of the corresponding European put.",
          answer: "$P = C-S_0+Ke^{-rT} = 9.50-80+75e^{-0.025} = 9.50-80+73.15 = \\pounds2.65$",
          note: "Candidates should discount $K$, not $S_0$, by $e^{-rT}$ &mdash; a common error is discounting the wrong term in the parity rearrangement.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 4,
          question:
            "A trader delta-hedges a short position of 2,000 of these call options, where the call's Delta is 0.65. State how many shares the trader must hold and in what direction, and explain why this hedge will need rebalancing if the stock price moves, referencing Gamma.",
          answer:
            "The trader must hold $0.65\\times2{,}000 = 1{,}300$ shares LONG, offsetting the negative Delta exposure created by being short the calls. This hedge will need rebalancing because Delta itself changes as the stock price moves (the rate of change of Delta is Gamma); once the stock price moves, the option's actual Delta will differ from 0.65, so 1,300 shares will no longer exactly offset the position, requiring the share holding to be adjusted (rebalanced) to match the new Delta.",
          note: "Both the direction (long shares to offset a short call position) and the Gamma-based rebalancing explanation are needed for full marks &mdash; stating only the share count without the rebalancing rationale is an incomplete answer.",
        },
      ],
    },
    {
      id: "cm2-q7",
      title: "Pricing a call option in a one-step binomial model",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the formula for the risk-neutral up-probability $p$ in a one-step binomial model, and the no-arbitrage condition the up and down factors $u,d$ must satisfy.",
          answer: "$p=\\dfrac{e^{r\\Delta t}-d}{u-d}$, requiring $d<e^{r\\Delta t}<u$ for $p$ to lie strictly between 0 and 1.",
          note: "Both the formula and the no-arbitrage condition should be stated, since part (ii) requires checking the given $u,d,r$ satisfy this condition implicitly by producing a valid $p\\in(0,1)$.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A stock priced at &pound;100 can move up by 15% or down by 10% over one year. The continuously-compounded risk-free rate is 4% per annum. Calculate the risk-neutral probability of an up-move.",
          answer: "$u=1.15$, $d=0.90$. $p = \\dfrac{e^{0.04}-0.90}{1.15-0.90} = \\dfrac{1.0408-0.90}{0.25} = \\dfrac{0.1408}{0.25} = 0.563$",
          note: "$e^{0.04}$ should be evaluated precisely (1.0408), not approximated as $1+0.04$, to avoid a small but avoidable error in the final answer.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "A European call option with strike &pound;100 matures in one year. Calculate its price using risk-neutral valuation.",
          answer:
            "$S_u=115$, $S_d=90$. Payoff$_u=\\max(115-100,0)=15$; Payoff$_d=\\max(90-100,0)=0$. Price $= e^{-0.04}[0.563(15)+0.437(0)] = e^{-0.04}(8.45) = 0.9608(8.45) = \\pounds8.12$",
          note: "The expected payoff must be discounted at the RISK-FREE rate using the risk-neutral probabilities, not the real-world probabilities (which aren't given, and aren't needed).",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the option's Delta implied by this one-step tree, and explain how it would be used to construct a replicating portfolio for the option today.",
          answer:
            "$\\Delta = \\dfrac{\\text{Payoff}_u-\\text{Payoff}_d}{S_u-S_d} = \\dfrac{15-0}{115-90} = \\dfrac{15}{25} = 0.60$. The replicating portfolio holds 0.60 shares of the stock, partly financed by borrowing at the risk-free rate, structured so that its value exactly matches the option's payoff (15 or 0) in both the up and down states; today, this portfolio's cost should equal the option price of &pound;8.12 found in part (iii).",
          note: "Delta here is calculated directly from the tree's payoffs (a discrete slope), not via a formula requiring $N(d_1)$ &mdash; that Black-Scholes-specific version comes later in the syllabus.",
        },
      ],
    },
    {
      id: "cm2-q8",
      title: "The Black-Scholes formula and the 5-step method",
      modules: "Modules 13, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Black-Scholes formula for a European call option, and define $d_1$.",
          answer: "$C=S_0N(d_1)-Ke^{-rT}N(d_2)$, where $d_1=\\dfrac{\\ln(S_0/K)+(r+\\tfrac12\\sigma^2)T}{\\sigma\\sqrt{T}}$",
          note: "Candidates should also be ready to state $d_2=d_1-\\sigma\\sqrt{T}$, needed for part (ii).",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A non-dividend-paying stock trades at &pound;50. A European call has strike &pound;48, time to maturity 9 months, volatility 25% per annum, and the continuously-compounded risk-free rate is 3% per annum. Calculate the Black-Scholes price of the call.",
          answer:
            "$d_1 = \\dfrac{\\ln(50/48)+(0.03+0.03125)(0.75)}{0.25\\sqrt{0.75}} = \\dfrac{0.0408+0.0459}{0.2165} = 0.401$. $d_2 = 0.401-0.2165 = 0.184$. $N(d_1)=0.656$, $N(d_2)=0.573$. $C = 50(0.656) - 48e^{-0.03(0.75)}(0.573) = 32.80 - 46.93(0.573) = 32.80-26.90=\\pounds5.89$",
          note: "Marks are typically split across the correct calculation of $d_1$, $d_2$, looking up/calculating both normal CDF values, and the final substitution &mdash; showing each intermediate value earns partial credit even if the final figure has a small error.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain what $N(d_2)$ represents, and comment on whether this option is likely to finish in the money.",
          answer:
            "$N(d_2)$ is (approximately) the risk-neutral probability that the option finishes in the money. Since $N(d_2)=0.573>0.5$ here, the option is more likely than not to finish in the money under the risk-neutral measure, consistent with the stock price (&pound;50) already exceeding the strike (&pound;48) at the outset.",
          note: "The word 'approximately' or a similar qualifier is worth including, since $N(d_2)$ is the EXACT risk-neutral in-the-money probability, but it's easy to conflate with $N(d_1)$ (Delta) if not careful.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "Explain, in general terms (no calculation required), how the 5-step method's numeraire choice could simplify pricing an option to exchange one risky asset for another, compared with a standard Black-Scholes-style approach.",
          answer:
            "Priced directly in cash terms, an exchange option depends on TWO sources of randomness (the movements of both underlying assets). By choosing one of the two assets itself as the numeraire, that asset's own randomness is effectively absorbed into the reference unit, reducing the problem to depending on only the RELATIVE movement between the two assets &mdash; a simpler, one-dimensional problem that can then often be solved using Black-Scholes-style machinery under the new measure.",
          note: "This tests conceptual understanding of the numeraire's role, not a memorised exchange-option formula &mdash; a strong answer explains the dimensionality reduction specifically, not just 'it makes it easier' in vague terms.",
        },
      ],
    },
    {
      id: "cm2-q9",
      title: "Term structure models and credit risk",
      modules: "Modules 15, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the SDE for the short rate under the Vasicek model, and identify its main limitation.",
          answer: "$dr_t=a(b-r_t)\\,dt+\\sigma\\,dW_t$. Its main limitation is that it allows the short rate to become negative with positive probability.",
          note: "Candidates should recognise this as an Ornstein-Uhlenbeck process (Module 8) with $r_t$ in place of the general $X_t$.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the Cox-Ingersoll-Ross (CIR) model addresses this limitation, and how the Hull-White model differs in its own approach to improving on Vasicek.",
          answer:
            "CIR replaces the constant diffusion term with $\\sigma\\sqrt{r_t}$, so volatility shrinks toward zero as $r_t$ approaches zero, keeping rates non-negative under suitable conditions. Hull-White instead keeps Vasicek's basic structure but allows the mean-reversion level (and potentially other parameters) to be time-dependent, so the model can be calibrated to exactly fit the current observed yield curve &mdash; a different kind of improvement, addressing yield-curve consistency rather than the negative-rate problem directly.",
          note: "Both models 'improve on' Vasicek in genuinely different ways &mdash; candidates should not conflate CIR's negative-rate fix with Hull-White's yield-curve-fitting fix, since they address different limitations.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "A corporate bond's default risk is modelled using a two-state model with constant default intensity $\\lambda=0.02$ per annum. The exposure is &pound;1,000,000 and the recovery rate on default is 40%. Calculate the probability of default within 5 years, and the resulting expected loss over that period.",
          answer:
            "Survival probability to 5 years $=e^{-\\lambda t}=e^{-0.02(5)}=e^{-0.1}=0.9048$. Default probability $=1-0.9048=0.0952$. Expected loss $=0.0952\\times(1-0.40)\\times\\pounds1{,}000{,}000 = 0.0952\\times0.60\\times1{,}000{,}000=\\pounds57{,}098$",
          note: "Expected loss requires all three factors multiplied together: default probability, loss-given-default (1 minus recovery rate), and exposure &mdash; omitting the $(1-\\text{recovery rate})$ adjustment is a common error.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question: "Explain how the Merton (structural) model would instead assess this firm's default risk, and give one advantage this approach has over the intensity-based calculation in part (iii).",
          answer:
            "The Merton model treats the firm's equity as a European call option on the firm's total assets, with strike equal to the face value of its debt; default occurs if asset value falls below the debt's face value at maturity, letting Black-Scholes-style option pricing techniques estimate the default probability from the firm's asset value and volatility. Its advantage over the reduced-form calculation in part (iii) is that it provides an economic EXPLANATION for why default might occur (declining or volatile asset value relative to leverage), rather than simply assuming a constant statistical default intensity with no underlying economic story.",
          note: "The key contrast to draw out is 'explains why' (structural/Merton) versus 'describes how often, statistically' (reduced-form, as used in part (iii)) &mdash; both are valid, but for different purposes.",
        },
      ],
    },
    {
      id: "cm2-q10",
      title: "Ruin theory and a chain ladder reserve estimate",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State Lundberg's inequality, defining each symbol used.",
          answer:
            "The probability of ultimate ruin $\\psi(u) \\leq e^{-Ru}$, where $u$ is the insurer's initial surplus and $R>0$ is the adjustment coefficient, determined by the premium loading and the claim size distribution.",
          note: "Candidates should note this is an upper BOUND, not an exact formula for the ruin probability.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question:
            "An insurer's claims are exponentially distributed with mean &pound;500, and premiums include a loading of 20% above the pure expected cost (i.e. $\\theta=0.20$). For exponential claims, the adjustment coefficient is $R=\\dfrac{\\theta\\beta}{1+\\theta}$, where $\\beta$ is the reciprocal of the mean claim size. Calculate $R$, and the Lundberg upper bound on the probability of ultimate ruin given an initial surplus of &pound;2,000.",
          answer:
            "$\\beta = 1/500 = 0.002$. $R = \\dfrac{0.20(0.002)}{1.20} = 0.000333$. Lundberg bound $= e^{-Ru} = e^{-0.000333(2{,}000)} = e^{-0.667} = 0.513$",
          note: "This shows the bound (51.3%) is not a tight or reassuring figure on its own &mdash; part (iii) explores what the insurer could do to improve it.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain two distinct ways the insurer could reduce this bound on the probability of ruin, referencing the formula used in part (ii).",
          answer:
            "(1) Increase initial surplus $u$: since the bound is $e^{-Ru}$, a larger $u$ directly and exponentially reduces the bound, without needing to change anything about the claims process itself. (2) Increase the premium loading $\\theta$ (e.g. by raising premiums) or purchase reinsurance to reduce claims variability: either raises the adjustment coefficient $R$, which also reduces the bound $e^{-Ru}$, though a higher $\\theta$ may reduce competitiveness and reinsurance carries its own cost.",
          note: "Both routes (increasing $u$ directly, or increasing $R$ via the premium loading/claims variability) should be identified as genuinely distinct levers, each with a real-world trade-off worth mentioning.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 4,
          question:
            "A run-off triangle shows cumulative claims (&pound;'000s) as follows: Origin year 1: 100, 150, 165 (development years 1, 2, 3). Origin year 2: 120, 175 (development years 1, 2). Origin year 3: 130 (development year 1). Using the basic chain ladder method, calculate the total outstanding claims across origin years 2 and 3.",
          answer:
            "Development factor $f_{1\\to2} = \\dfrac{150+175}{100+120} = \\dfrac{325}{220} = 1.477$. Development factor $f_{2\\to3} = \\dfrac{165}{150} = 1.100$. Origin year 2 ultimate $= 175\\times1.100 = 192.50$; outstanding $=192.50-175=17.50$. Origin year 3 projected to dev. year 2 $=130\\times1.477=192.05$; ultimate $=192.05\\times1.100=211.25$; outstanding $=211.25-130=81.25$. Total outstanding $=17.50+81.25=\\pounds98.75$ ('000s), i.e. &pound;98,750.",
          note: "Origin year 3 needs TWO development factors applied in sequence (dev. year 1 to 2, then 2 to 3) since it only has one data point so far, while origin year 2 only needs one (dev. year 2 to 3) &mdash; applying the wrong number of factors to each origin year is the most common error in this style of question.",
        },
      ],
    },
  ],
  CS2: [
    {
      id: "cs2-q1",
      title: "A two-state Markov chain model of policyholder status",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the Markov property for a discrete-time stochastic process, and explain what it means for a chain to be time-homogeneous.",
          answer:
            "The Markov property states that, given the present state, the future evolution of the process is independent of its past states: $P(X_{n+1}=j \\mid X_n=i, X_{n-1}, \\dots, X_0) = P(X_{n+1}=j \\mid X_n=i)$. A chain is time-homogeneous if this one-step transition probability does not depend on $n$ &mdash; the same transition matrix applies at every step.",
          note: "Candidates should state the conditional independence precisely (conditioning on the FULL history collapsing to conditioning on just the current state), not just say 'the future depends only on the present' without the formal statement.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A no-claims-discount-style model of policyholder status has two states, Active (A) and Suspended (S), with one-step transition matrix $P=\\begin{pmatrix}0.9 & 0.1\\\\0.4 & 0.6\\end{pmatrix}$ (rows: from A, from S; columns: to A, to S). Calculate the two-step transition matrix $P^2$.",
          answer:
            "$P^2 = P \\times P = \\begin{pmatrix}0.9(0.9)+0.1(0.4) & 0.9(0.1)+0.1(0.6)\\\\0.4(0.9)+0.6(0.4) & 0.4(0.1)+0.6(0.6)\\end{pmatrix} = \\begin{pmatrix}0.85 & 0.15\\\\0.60 & 0.40\\end{pmatrix}$",
          note: "Each entry of $P^2$ is a row-by-column dot product with $P$ itself &mdash; candidates should keep the row (from-state) and column (to-state) convention consistent throughout, since transposing it silently gives a different, wrong matrix.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Calculate the stationary distribution $(\\pi_A, \\pi_S)$ of this chain.",
          answer:
            "Solve $\\pi P = \\pi$ with $\\pi_A+\\pi_S=1$: $0.9\\pi_A+0.4\\pi_S=\\pi_A \\Rightarrow 0.4\\pi_S=0.1\\pi_A \\Rightarrow \\pi_S=0.25\\pi_A$. Substituting: $\\pi_A+0.25\\pi_A=1 \\Rightarrow \\pi_A=0.8$, $\\pi_S=0.2$.",
          note: "It's worth checking the answer by substituting back into $\\pi P=\\pi$: $0.8(0.9)+0.2(0.4)=0.8$ and $0.8(0.1)+0.2(0.6)=0.2$, confirming the solution.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on how the stationary distribution found in part (iii) should be interpreted, and on one limitation of this model for representing real policyholder behaviour.",
          answer:
            "The stationary distribution represents the long-run proportion of time the chain spends in each state (or, across a large population started from any mix of states, the long-run proportion Active/Suspended), regardless of the starting distribution &mdash; here, 80% Active and 20% Suspended in the long run. A key limitation is the time-homogeneity assumption: real transition probabilities (e.g. probability of suspension) likely change with policy duration, claims experience, or calendar time, none of which this simple constant-matrix model captures.",
          note: "Candidates should distinguish the stationary distribution's TWO valid interpretations (long-run time average for one chain, or long-run population proportions for many independent chains) rather than conflating them carelessly, and should give a concrete, specific limitation rather than a vague 'the model is too simple'.",
        },
      ],
    },
    {
      id: "cs2-q2",
      title: "The two-state sickness-health model and a Poisson claims process",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the transition intensities $\\sigma$ and $\\rho$ in the two-state (Healthy/Sick) Markov model, and state the defining property of a Poisson process.",
          answer:
            "$\\sigma$ is the force of sickness (instantaneous rate of transition from Healthy to Sick) and $\\rho$ is the force of recovery (instantaneous rate of transition from Sick to Healthy), both assumed constant. A Poisson process with rate $\\lambda$ has independent increments, and the number of events in any interval of length $t$ follows a Poisson distribution with mean $\\lambda t$.",
          note: "Both definitions should be given in terms of instantaneous, continuous-time rates, not discrete-time transition probabilities, since this module works in continuous time throughout.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "For the two-state model with constant intensities $\\sigma=0.1$ and $\\rho=0.3$, the probability of being Healthy at time $t$ given Healthy at time 0 is $p_{HH}(t) = \\dfrac{\\rho}{\\sigma+\\rho} + \\dfrac{\\sigma}{\\sigma+\\rho}e^{-(\\sigma+\\rho)t}$. Calculate $p_{HH}(2)$.",
          answer:
            "$\\sigma+\\rho=0.4$. $p_{HH}(2) = \\dfrac{0.3}{0.4} + \\dfrac{0.1}{0.4}e^{-0.4(2)} = 0.75 + 0.25\\,e^{-0.8} = 0.75+0.25(0.4493) = 0.8623$",
          note: "As $t\\to\\infty$, $p_{HH}(t)\\to\\rho/(\\sigma+\\rho)=0.75$, which is exactly this model's stationary probability of being Healthy &mdash; candidates should notice $p_{HH}(2)=0.8623$ is already fairly close to this limit.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question: "Independently, sickness claims on a separate policy arrive as a Poisson process with rate $\\lambda=4$ per year. Calculate the probability of exactly 2 claims arising in a 6-month period.",
          answer:
            "$\\lambda t = 4(0.5) = 2$. $P(N=2) = \\dfrac{e^{-2}2^2}{2!} = \\dfrac{e^{-2}(4)}{2} = 2e^{-2} = 0.2707$",
          note: "The Poisson mean must be rescaled to the 6-month window ($\\lambda t=2$), not left at the annual rate $\\lambda=4$ &mdash; using the wrong mean is the most common error in this type of calculation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on the relationship between the two-state Markov model of part (ii) and the Poisson process of part (iii), and on a situation where a two-state model with constant intensities would be a poor representation of sickness experience.",
          answer:
            "Both models are built from the same underlying assumption of constant instantaneous transition/event rates and the Markov (memoryless) property &mdash; indeed, the number of Healthy-to-Sick transitions for an individual who stays Healthy for a long period behaves like a Poisson process with rate $\\sigma$. A two-state model with constant intensities would be a poor fit where sickness risk depends on duration already sick (e.g. recovery becoming less likely the longer an illness persists), which violates the memoryless assumption underlying constant $\\sigma$ and $\\rho$.",
          note: "The strongest answers identify the shared memoryless/exponential-holding-time structure explicitly, and give a concrete duration-dependence example (rather than a generic 'sickness is complicated') for why the constant-intensity assumption can fail.",
        },
      ],
    },
    {
      id: "cs2-q3",
      title: "Markov jump processes: constant and age-dependent transition intensities",
      modules: "Modules 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "State",
          marks: 2,
          question: "State the Kolmogorov forward equations for a time-inhomogeneous Markov jump process with generator matrix $A(t)$, and explain what distinguishes a time-inhomogeneous process from a time-homogeneous one.",
          answer:
            "The Kolmogorov forward equations are $\\dfrac{d}{dt}P(s,t) = P(s,t)A(t)$, where $P(s,t)$ is the matrix of transition probabilities from time $s$ to time $t$. In a time-homogeneous process, the generator (transition intensity) matrix $A$ is constant, so transition probabilities depend only on the elapsed time $t-s$; in a time-inhomogeneous process, $A(t)$ varies with $t$ itself (e.g. with age), so transition probabilities depend on the specific times $s$ and $t$, not just their difference.",
          note: "Candidates should note the equation holds with $A(t)$ evaluated at the LATER time $t$, post-multiplying $P(s,t)$ &mdash; this is the forward equation convention, distinct from the backward equations.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A time-inhomogeneous force of mortality follows Gompertz's law, $\\mu_x = Bc^x$ with $B=0.0001$ and $c=1.1$. Using $_tp_x = \\exp\\left(-\\displaystyle\\int_0^t \\mu_{x+s}\\,ds\\right)$ and $\\displaystyle\\int_0^t Bc^{x+s}\\,ds = \\dfrac{Bc^x(c^t-1)}{\\ln c}$, calculate $_{10}p_{50}$.",
          answer:
            "$\\displaystyle\\int_0^{10}\\mu_{50+s}\\,ds = \\dfrac{0.0001(1.1^{50})(1.1^{10}-1)}{\\ln 1.1} = \\dfrac{0.0001(117.391)(1.5937-1)}{0.09531} = \\dfrac{0.0001(117.391)(0.5937)}{0.09531} = 0.19630$. $_{10}p_{50} = e^{-0.19630} = 0.8218$",
          note: "This is exactly the time-inhomogeneous analogue of the constant-force survival formula $_tp_x=e^{-\\mu t}$ from earlier CM1/CS2 material &mdash; the only difference is that the constant $\\mu t$ in the exponent is replaced by the INTEGRAL of the age-varying $\\mu_{x+s}$ over the period, using the given closed-form result for a Gompertz force.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why a time-homogeneous Markov jump process would be an inappropriate model for human mortality over a wide age range, in light of part (ii).",
          answer:
            "A time-homogeneous model assumes a constant transition intensity (force of mortality) regardless of age, implying survival probabilities depend only on elapsed time, not on the age at which that time is spent. Part (ii)'s Gompertz law shows mortality rises exponentially with age in reality, so a 10-year survival probability starting at age 50 should differ substantially from one starting at, say, age 80 &mdash; a feature only a time-inhomogeneous model (with $\\mu_x$ varying by age) can represent.",
          note: "The key point to make explicit is that a constant-intensity model forces $_tp_x$ to depend only on $t$, not on $x$ &mdash; which is exactly the feature Gompertz's law (and mortality in general) violates.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss briefly why a time-homogeneous Markov jump process remains a useful modelling simplification despite the limitation identified in part (iii).",
          answer:
            "Over a sufficiently short age range or short projection horizon, transition intensities change relatively little, so a time-homogeneous approximation can be adequate and is far more mathematically tractable (e.g. yielding simple closed-form results like $_tp_x=e^{-\\mu t}$, and simpler estimation), making it a reasonable working simplification for short-term or narrow-age-band applications.",
          note: "The point to convey is a trade-off between tractability and realism, not that time-homogeneity is simply 'wrong' &mdash; it remains a defensible approximation in the right circumstances.",
        },
      ],
    },
    {
      id: "cs2-q4",
      title: "Estimating a survival function from censored data",
      modules: "Modules 6, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define right-censoring and explain why the Kaplan-Meier estimator, rather than a simple empirical proportion, is used to estimate a survival function from censored data.",
          answer:
            "A right-censored observation is one where the individual's true event (e.g. death) time is only known to exceed some observed value &mdash; e.g. because the individual is still alive when the study ends, or withdraws early. A simple empirical proportion of survivors would treat censored individuals as if their status at censoring were their final outcome, discarding the partial survival information they do provide; the Kaplan-Meier estimator instead uses each individual's observed period at risk, correctly incorporating that information without assuming an event occurred.",
          note: "The key point is that censored individuals are NOT discarded entirely and are NOT treated as deaths &mdash; they contribute exposure up to their censoring time, then leave the risk set, which is exactly what the Kaplan-Meier construction in part (ii) reflects.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 6,
          question:
            "A study of 5 individuals records the following times (in months) since entry: 2 (death), 3 (death), 5 (censored), 6 (death), 8 (death). Calculate the Kaplan-Meier estimate of the survival function $S(t)$ at each death time.",
          answer:
            "$t=2$: at risk $n=5$, 1 death, $S(2)=1\\times(1-1/5)=0.800$. $t=3$: at risk $n=4$, 1 death, $S(3)=0.800\\times(1-1/4)=0.600$. $t=5$: censored, removed from the risk set (no change to $S$); at risk falls to $n=2$ for the next death. $t=6$: at risk $n=2$, 1 death, $S(6)=0.600\\times(1-1/2)=0.300$. $t=8$: at risk $n=1$, 1 death, $S(8)=0.300\\times(1-1/1)=0.000$.",
          note: "The risk set size must be reduced by the censored individual at $t=5$ even though $S(t)$ itself is unchanged at that point &mdash; forgetting to remove the censored individual from the at-risk count before the next death (giving $n=3$ instead of $n=2$ at $t=6$) is the most common error.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why $S(8)=0$ in part (ii), and whether this should be interpreted as meaning no individual could survive beyond 8 months.",
          answer:
            "$S(8)=0$ simply because every individual in this small sample who was not censored had died by $t=8$ &mdash; it is an artefact of the specific (small) sample observed, not evidence that survival beyond 8 months is impossible in the underlying population. With only 5 individuals, the Kaplan-Meier estimate is subject to considerable sampling variability, especially in the tail.",
          note: "Candidates should recognise this as a small-sample estimation artefact rather than a substantive finding about the true survival distribution.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain what would happen to the Kaplan-Meier estimate at $t=6$ and $t=8$ if the individual censored at $t=5$ had instead died at $t=5$.",
          answer:
            "The death at $t=5$ would itself produce a drop in $S$: $S(5)=0.600\\times(1-1/3)=0.400$ (at risk $n=3$ at that point). The subsequent risk set at $t=6$ would still be $n=2$ (unchanged from the original calculation, since the individual leaves the risk set either way), so $S(6)=0.400\\times(1-1/2)=0.200$ and $S(8)=0.200\\times(1-1/1)=0.000$ &mdash; lower throughout from $t=5$ onward than in part (ii), since this extra death removes probability mass that censoring alone would not have.",
          note: "The at-risk counts from $t=6$ onward are unaffected by whether the $t=5$ individual died or was censored (either way, they leave the risk set) &mdash; only the survival function level itself drops further, because a death (unlike censoring) directly reduces $S$.",
        },
      ],
    },
    {
      id: "cs2-q5",
      title: "Proportional hazards and estimating exposure to risk",
      modules: "Modules 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the proportional hazards assumption underlying the Cox model, and explain the interpretation of a fitted coefficient $\\beta$ for a binary covariate.",
          answer:
            "The Cox proportional hazards model assumes each individual's hazard is a fixed multiple of a common baseline hazard: $h(t\\mid \\mathbf{z}) = h_0(t)e^{\\boldsymbol{\\beta}^T\\mathbf{z}}$, so the ratio of hazards between any two individuals is constant over time, regardless of the (unspecified) baseline hazard's shape. For a binary covariate $z$ (e.g. smoker=1, non-smoker=0) with coefficient $\\beta$, $e^{\\beta}$ is the hazard ratio &mdash; the multiplicative factor by which the hazard changes for $z=1$ relative to $z=0$.",
          note: "The 'proportional' in proportional hazards refers specifically to the hazard RATIO being constant over time, not to the hazard itself being constant &mdash; the baseline hazard $h_0(t)$ is left completely unspecified and can vary with $t$ in any shape.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 2,
          question: "A Cox model fitted to lapse data gives a coefficient of $\\beta=0.5$ for a covariate indicating whether a policyholder pays annually rather than monthly. Calculate the hazard ratio, and state which payment frequency is associated with higher lapse risk.",
          answer:
            "Hazard ratio $=e^{0.5}=1.6487$. Annual payers have a lapse hazard 1.65 times that of monthly payers (holding other covariates fixed), so annual payment is associated with higher lapse risk.",
          note: "Since $\\beta>0$, the hazard ratio $e^\\beta>1$ confirms higher risk for the covariate's indicated group &mdash; a negative $\\beta$ would instead give a hazard ratio below 1, indicating lower risk.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "A mortality investigation covers exact age 50 to exact age 51, over calendar year 2020. Life A turns exact age 50 on 1 March 2020 and survives the full period. Life B is already exact age 50 at 1 January 2020 and dies on 1 July 2020 (exact age 50.5). Life C is exact age 50 at 1 January 2020 and withdraws from observation on 1 October 2020 (exact age 50.75). Calculate the total central exposed to risk (in years) across all three lives.",
          answer:
            "Life A: observed from 1 March to 31 December 2020, i.e. 10 months $=10/12=0.8333$ years. Life B: observed from 1 January to death on 1 July, i.e. 6 months $=0.5$ years. Life C: observed from 1 January to withdrawal on 1 October, i.e. 9 months $=0.75$ years. Total central exposed to risk $=0.8333+0.5+0.75=2.0833$ years.",
          note: "Each life's exposure runs only over the period they are actually both alive AND under observation within the age 50-51 rate interval &mdash; Life A only enters the interval on 1 March (turning 50), while Lives B and C are already in it from 1 January, and each life's exposure ends at death, withdrawal, or the period end, whichever comes first.",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 3,
          question: "Using the total exposure from part (iii) and the single death observed (Life B), calculate the central mortality rate $m_{50}$, and comment on the reliability of this estimate.",
          answer:
            "$m_{50} = \\dfrac{\\text{deaths}}{\\text{central exposed to risk}} = \\dfrac{1}{2.0833} = 0.480$. This estimate is based on only 3 lives and 1 death, so it is subject to very high sampling variability and should not be treated as a reliable estimate of the true underlying mortality rate &mdash; a credible estimate would require a far larger exposed-to-risk investigation.",
          note: "The formula divides the observed death COUNT by the exposure in years, giving units of 'deaths per life-year' &mdash; candidates should flag the tiny sample size explicitly rather than just quoting the number without comment.",
        },
      ],
    },
    {
      id: "cs2-q6",
      title: "Testing and constructing a graduated mortality table",
      modules: "Modules 10, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State two distinct purposes served by applying statistical tests to a graduated mortality table.",
          answer:
            "(1) To check overall goodness of fit &mdash; whether the graduated rates are, in aggregate, consistent with the crude (observed) data (e.g. via a chi-square test). (2) To check for the presence of systematic features not captured by the graduation, such as bias in a particular direction across ages (e.g. via the signs test or cumulative deviations test) or dependence between adjacent ages' deviations (e.g. via the serial correlations test).",
          note: "The two purposes are genuinely distinct: an overall chi-square test can pass even while a systematic pattern (e.g. consistent over-estimation at younger ages, under-estimation at older ages) goes undetected, which is exactly why the additional tests exist.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "A graduation is tested against 5 age groups with actual deaths $O$ and graduated (expected) deaths $E$: $O=(40,55,30,45,50)$, $E=(35,50,34,48,53)$. Calculate the chi-square test statistic $\\chi^2=\\sum\\dfrac{(O-E)^2}{E}$.",
          answer:
            "$\\dfrac{(40-35)^2}{35}+\\dfrac{(55-50)^2}{50}+\\dfrac{(30-34)^2}{34}+\\dfrac{(45-48)^2}{48}+\\dfrac{(50-53)^2}{53} = 0.714+0.500+0.471+0.188+0.170 = 2.042$",
          note: "It's worth checking $\\sum O = \\sum E = 220$ before computing &mdash; a mismatch here would indicate a data entry error, since a graduation is normally constructed to preserve the total number of deaths.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on the conclusion from the chi-square statistic in part (ii), given a 5% critical value of 9.488 on 4 degrees of freedom.",
          answer:
            "Since $\\chi^2=2.042 < 9.488$, there is no evidence to reject the null hypothesis that the graduated rates are consistent with the crude data &mdash; the graduation passes this overall goodness-of-fit test.",
          note: "Degrees of freedom here is (number of age groups) $-1$; candidates should be able to identify why 1 degree of freedom is lost (the graduation is typically constrained to reproduce the total observed deaths, as noted in part (ii)).",
        },
        {
          label: "(iv)",
          command: "Calculate",
          marks: 4,
          question:
            "A separate graduation by mathematical formula uses Makeham's law $\\mu_x=A+Bc^x$ with fitted parameters $A=0.0002$, $B=0.00005$, $c=1.09$. Calculate the graduated force of mortality $\\mu_{60}$.",
          answer:
            "$\\mu_{60} = 0.0002 + 0.00005(1.09^{60}) = 0.0002 + 0.00005(180.0) = 0.0002+0.00900 = 0.00920$",
          note: "$1.09^{60}$ grows very large ($\\approx180$) &mdash; candidates should compute this power carefully (e.g. via repeated squaring or logarithms) rather than approximating it loosely, since the whole answer is dominated by this term.",
        },
      ],
    },
    {
      id: "cs2-q7",
      title: "Projecting future mortality and an AR(1) time series model",
      modules: "Modules 12, 13, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the 'reduction factor' approach to mortality projection.",
          answer:
            "The reduction factor approach projects future mortality rates by applying a multiplicative annual improvement factor to a base-year mortality rate: $q_x^{(t)} = q_x^{(0)}\\times RF(x,t)$, where $RF(x,t)$ (often of the form $(1-r_x)^t$ for an age-specific annual reduction rate $r_x$) declines below 1 as $t$ increases, reflecting assumed continuing mortality improvement.",
          note: "The reduction factor is applied MULTIPLICATIVELY to the base rate, and typically compounds year-on-year (i.e. raised to the power of the number of years projected), not simply subtracted once.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "A base mortality rate is $q_{65}^{2000}=0.012$, with an assumed constant annual reduction factor of 1.5%. Calculate the projected rate $q_{65}^{2030}$.",
          answer:
            "$q_{65}^{2030} = 0.012\\times(1-0.015)^{30} = 0.012\\times(0.985)^{30} = 0.012\\times0.6354 = 0.007625$",
          note: "The exponent is the number of YEARS projected (30, from 2000 to 2030), applied to the single-year reduction factor $(1-0.015)$ &mdash; using 0.015 directly as a one-off percentage reduction, rather than compounding it over 30 years, is a common error.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "A time series of annual mortality improvement rates is modelled as a stationary AR(1) process $X_t=\\phi X_{t-1}+\\varepsilon_t$ with $\\phi=0.7$ and $\\text{Var}(\\varepsilon_t)=4$. Calculate the unconditional variance of $X_t$, and the autocorrelations $\\rho(1)$ and $\\rho(2)$.",
          answer:
            "$\\text{Var}(X_t) = \\dfrac{\\sigma_\\varepsilon^2}{1-\\phi^2} = \\dfrac{4}{1-0.49} = \\dfrac{4}{0.51} = 7.843$. For an AR(1), $\\rho(k)=\\phi^k$, so $\\rho(1)=0.7$ and $\\rho(2)=0.7^2=0.49$.",
          note: "The unconditional variance formula $\\sigma_\\varepsilon^2/(1-\\phi^2)$ is only valid because $|\\phi|=0.7<1$, which is exactly the stationarity condition for an AR(1) process &mdash; the formula would be meaningless (negative or undefined) for $|\\phi|\\geq1$.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Discuss briefly why the stationarity condition $|\\phi|<1$ matters for using this AR(1) model to project future mortality improvement rates.",
          answer:
            "Stationarity ensures the process has a constant, finite unconditional mean and variance, and that shocks $\\varepsilon_t$ have a diminishing (rather than ever-growing) effect on future values as $\\phi^k\\to0$ &mdash; this means projections revert toward a stable long-run mean rather than diverging or drifting without bound, which is essential for a mortality improvement model to give sensible, bounded long-term projections rather than explosive or non-mean-reverting ones.",
          note: "The key mechanism to name explicitly is that $\\phi^k\\to0$ as $k\\to\\infty$ only when $|\\phi|<1$, which is exactly what causes both the autocorrelations (part iii) and the influence of past shocks to decay over time, underpinning stable long-run projections.",
        },
      ],
    },
    {
      id: "cs2-q8",
      title: "A Pareto severity model and excess of loss reinsurance",
      modules: "Modules 15, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Explain, in terms of the hazard rate, why the Pareto distribution is described as 'heavy-tailed', and why this makes it a common choice for modelling large general insurance losses.",
          answer:
            "The Pareto distribution has a decreasing hazard rate as $x\\to\\infty$, meaning that, conditional on a loss already being large, the 'resistance' to it becoming even larger diminishes rather than increases &mdash; this produces a slowly-decaying, power-law tail. This makes it a natural choice for modelling large losses, since it does not understate the probability of extreme, catastrophic claims the way a lighter-tailed distribution (e.g. exponential or normal) would.",
          note: "The defining feature to state explicitly is the DECREASING hazard rate (linking back to the general tail-weight measures of EVT), not simply 'it has a long tail', which is imprecise.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "Claim sizes $X$ follow a Pareto distribution with survival function $P(X>x) = \\left(\\dfrac{\\lambda}{\\lambda+x}\\right)^\\alpha$, with $\\alpha=3$ and $\\lambda=2{,}000$ (&pound;). Calculate the probability that a claim exceeds &pound;5,000.",
          answer:
            "$P(X>5{,}000) = \\left(\\dfrac{2{,}000}{2{,}000+5{,}000}\\right)^3 = \\left(\\dfrac{2{,}000}{7{,}000}\\right)^3 = (0.2857)^3 = 0.02332$",
          note: "This is a direct substitution into the given survival function &mdash; candidates should keep $\\lambda$ and $x$ in the same monetary units throughout (both in &pound; here) to avoid a scaling error.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 5,
          question:
            "For this Pareto distribution ($\\alpha=3$, $\\lambda=2{,}000$), the mean is $E[X]=\\dfrac{\\lambda}{\\alpha-1}$ and the expected amount retained by the insurer under excess of loss reinsurance with retention $M$ is $E[\\min(X,M)] = \\dfrac{\\lambda}{\\alpha-1}\\left[1-\\left(\\dfrac{\\lambda}{\\lambda+M}\\right)^{\\alpha-1}\\right]$. Calculate $E[X]$ and, for a retention of $M=\\pounds3{,}000$, the reinsurer's expected payout per claim.",
          answer:
            "$E[X] = \\dfrac{2{,}000}{3-1} = \\pounds1{,}000$. $E[\\min(X,3{,}000)] = \\dfrac{2{,}000}{2}\\left[1-\\left(\\dfrac{2{,}000}{5{,}000}\\right)^{2}\\right] = 1{,}000\\left[1-(0.4)^2\\right] = 1{,}000(1-0.16) = \\pounds840$. Reinsurer's expected payout $= E[X]-E[\\min(X,M)] = 1{,}000-840 = \\pounds160$ per claim.",
          note: "The exponent in $E[\\min(X,M)]$ is $\\alpha-1=2$, NOT $\\alpha=3$ &mdash; using the wrong exponent (matching the survival function's exponent from part (ii) instead) is the most common error here.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on how the reinsurer's expected payout found in part (iii) would change if the severity distribution instead had a lighter tail than Pareto, with the same overall mean claim size of &pound;1,000.",
          answer:
            "With a lighter-tailed severity distribution but the same mean, less probability mass would sit in the extreme right tail above the retention $M=\\pounds3{,}000$, so the reinsurer's expected payout would typically be lower than the &pound;160 found for the heavy-tailed Pareto &mdash; illustrating that excess of loss reinsurance pricing depends critically on tail weight, not just on the mean claim size.",
          note: "This connects directly back to the module's opening point (part (i)): two severity distributions can share the same mean yet imply very different reinsurance costs, purely because of differing tail weight.",
        },
      ],
    },
    {
      id: "cs2-q9",
      title: "Dependence between lines of business: copulas and reinsurance",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "State Sklar's theorem, and explain what is meant by 'upper tail dependence' between two risks.",
          answer:
            "Sklar's theorem states that any joint distribution can be decomposed into its marginal distributions together with a copula function describing the dependence structure between them, independently of what those marginals are. Upper tail dependence is the tendency for both risks to take extremely high (bad, for losses) values simultaneously, more than an assumption of independence (or a dependence structure like the Gaussian copula) would suggest.",
          note: "Candidates should be precise that Sklar's theorem allows the marginals and the dependence structure to be specified SEPARATELY and then combined &mdash; it doesn't say marginals and dependence are unrelated in general, just that they can always be decomposed this way.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why using a Gaussian copula to model the dependence between an insurer's property and business-interruption claims (both of which can be triggered by the same storm event) could understate the insurer's true aggregate risk.",
          answer:
            "The Gaussian copula has zero tail dependence by construction, regardless of its correlation parameter &mdash; even with a high overall correlation, it implies that jointly extreme losses on both lines become vanishingly unlikely relative to what physically correlated risks (like storm-driven property and business-interruption claims) would actually produce. An Archimedean copula with genuine upper tail dependence (e.g. Gumbel) would better reflect the real risk of both lines producing extreme losses from the same catastrophic event simultaneously, and would imply a higher, more realistic aggregate capital requirement.",
          note: "The key technical point is that the Gaussian copula's flaw is structural (zero tail dependence at ANY correlation level), not simply that its correlation parameter might be mis-estimated &mdash; this is the same limitation historically implicated in underestimating correlated risk in the 2008 financial crisis.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question: "A line of business has individual claim mean &pound;1,000 and variance &pound;4,000,000. The insurer cedes 30% of every claim under a quota share treaty (retaining $\\alpha=0.7$). Calculate the insurer's retained mean and variance per claim.",
          answer:
            "Retained mean $=\\alpha E[X] = 0.7(1{,}000) = \\pounds700$. Retained variance $=\\alpha^2\\text{Var}(X) = 0.7^2(4{,}000{,}000) = 0.49(4{,}000{,}000) = \\pounds1{,}960{,}000$ (retained SD $\\approx\\pounds1{,}400$).",
          note: "Variance scales with $\\alpha^2$, not $\\alpha$ &mdash; a common error is to apply the same linear scaling to variance as to the mean, giving $0.7(4{,}000{,}000)$ instead of the correct $0.7^2(4{,}000{,}000)$.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on how quota share reinsurance (part (iii)) and the choice of copula (part (ii)) address different aspects of the insurer's overall risk.",
          answer:
            "Quota share reinsurance reduces the insurer's retained mean and variance on EACH individual line proportionally, regardless of how that line relates to any other; it does nothing, by itself, to address dependence BETWEEN lines. The copula, by contrast, governs how extreme outcomes on different lines co-occur, and matters specifically for assessing and managing AGGREGATE risk across the whole portfolio &mdash; an insurer could reduce each line's individual variance via proportional reinsurance and still be badly exposed to a correlated catastrophic event across both lines if the dependence structure between them is misspecified.",
          note: "The distinction to draw out clearly is per-line risk reduction (reinsurance) versus cross-line dependence modelling (copulas) &mdash; both matter for overall capital adequacy, but neither substitutes for the other.",
        },
      ],
    },
    {
      id: "cs2-q10",
      title: "Aggregate claims for a compound Poisson portfolio, and evaluating a fraud classifier",
      modules: "Modules 19, 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio generates claims as a compound Poisson process with annual claim frequency $\\lambda=50$ and individual claim sizes exponentially distributed with mean &pound;800 (so $E[X^2]=2(800)^2$ for an exponential distribution). Calculate $E[S]$ and $\\text{Var}(S)$ for annual aggregate claims $S$.",
          answer:
            "$E[S] = \\lambda E[X] = 50(800) = \\pounds40{,}000$. $E[X^2] = 2(800)^2 = 1{,}280{,}000$. $\\text{Var}(S) = \\lambda E[X^2] = 50(1{,}280{,}000) = \\pounds^2\\,64{,}000{,}000$ (SD $=\\pounds8{,}000$).",
          note: "The compound Poisson variance formula $\\text{Var}(S)=\\lambda E[X^2]$ uses the SECOND MOMENT of the severity distribution, not its variance alone &mdash; for the exponential distribution, $E[X^2]=2(\\text{mean})^2$, which is easy to substitute incorrectly as just $(\\text{mean})^2$.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 2,
          question: "Using a normal approximation to $S$ with the mean and standard deviation from part (i), calculate the approximate 95th percentile of annual aggregate claims (using $z_{0.95}=1.645$).",
          answer:
            "95th percentile $\\approx E[S] + z_{0.95}\\,SD(S) = 40{,}000 + 1.645(8{,}000) = 40{,}000+13{,}160 = \\pounds53{,}160$",
          note: "Since aggregate claims are typically right-skewed (as covered in Risk models 2), this normal approximation likely understates the true 95th percentile somewhat &mdash; a translated gamma approximation or simulation would generally be preferred for a more accurate capital-setting figure.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 4,
          question:
            "A machine learning model is used to flag potentially fraudulent claims. Tested against 1,000 claims with known outcomes, it produces: 80 true positives, 20 false positives, 30 false negatives, and 870 true negatives. Calculate the model's precision, recall, and $F_1$ score.",
          answer:
            "Precision $=\\dfrac{TP}{TP+FP}=\\dfrac{80}{100}=0.800$. Recall $=\\dfrac{TP}{TP+FN}=\\dfrac{80}{110}=0.7273$. $F_1 = \\dfrac{2\\times\\text{Precision}\\times\\text{Recall}}{\\text{Precision}+\\text{Recall}} = \\dfrac{2(0.800)(0.7273)}{0.800+0.7273} = \\dfrac{1.1636}{1.5273} = 0.7619$",
          note: "Precision's denominator is ALL predicted positives ($TP+FP=100$), while recall's denominator is ALL actual positives ($TP+FN=110$) &mdash; mixing these two denominators up is the most common error in this type of calculation.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why recall might be prioritised over precision when tuning this fraud-detection classifier's threshold, despite the resulting increase in false positives.",
          answer:
            "A missed fraudulent claim (a false negative) directly costs the insurer the full fraudulent payout, whereas a false positive (a genuine claim incorrectly flagged) typically only costs the resource of a manual review before being paid correctly &mdash; given this asymmetry in the cost of the two error types, prioritising recall (catching more true fraud, even at the cost of more false alarms) can be the more economically sensible choice, provided the manual review capacity can absorb the extra false positives.",
          note: "The strongest answers explicitly weigh the asymmetric COSTS of the two error types for this specific business context, rather than asserting recall is 'just better' in general &mdash; the right threshold choice is a business trade-off, not a universal rule.",
        },
      ],
    },
  ],
  CP1: [
    {
      id: "cp1-q1",
      title: "Advising a new entrant into a regulated insurance market",
      modules: "Modules 1, 2, 3, 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A technology company with no prior insurance experience is considering entering the market by launching a simple travel insurance product, and has asked an actuary for advice. Explain what the actuary should establish about the company's objectives before beginning any technical analysis, and why this matters.",
          answer:
            "The actuary should establish who the client actually is (the company's board, a specific division, etc.), the company's commercial objectives (market share, profitability targets, timescale), its risk appetite, and its understanding of the regulatory environment it is entering. This matters because technically sound advice that doesn't address the client's actual objectives has limited practical value &mdash; e.g. a product designed for maximum profitability may not suit a company whose stated goal is rapid market entry to build a customer base.",
          note: "Candidates should resist jumping straight to technical product/pricing analysis &mdash; the command word 'explain' here specifically targets the advice-process principle (understanding the client) that must precede any technical work.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 4,
          question:
            "Using a PESTLE-style framework, discuss two external environment factors (other than regulation) the company should consider before launching this travel insurance product.",
          answer:
            "Economic: exchange rates and global economic conditions affect both claims costs (e.g. medical treatment costs abroad) and demand for travel (and hence travel insurance) itself. Technological: the company's existing technology strength could be a genuine competitive advantage (e.g. app-based instant claims, dynamic pricing using real-time travel data), but also means underwriting/claims processes must be built essentially from scratch, unlike an established insurer. Other valid factors include social (changing travel/risk attitudes) or environmental (climate-driven disruption to travel patterns).",
          note: "Any two genuinely distinct PESTLE categories (excluding legal/regulatory, covered in part (iii)) should be accepted if well-justified and specific to this scenario, not generic statements.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the difference between prudential and conduct regulation, and identify which is likely to be the company's more immediate practical concern when designing and launching this new product.",
          answer:
            "Prudential regulation ensures firms are financially sound and able to meet obligations (e.g. capital/solvency requirements); conduct regulation governs how firms treat customers (fair treatment, disclosure, appropriate product design/sale). As a genuinely new insurer with limited scale initially, conduct regulation is likely the more immediate practical concern at product launch, since getting product design, disclosure and sales practices right for this specific customer base (potentially first-time insurance buyers via an app) is central to a technology-first entrant, though prudential requirements (e.g. minimum capital to be authorised at all) must also be met before writing any business.",
          note: "A strong answer acknowledges both matter, while still making and justifying a genuine judgement about relative immediate priority for this specific scenario, rather than refusing to choose.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the actuary's advice should identify genuine alternative approaches to entering this market, rather than simply validating the company's proposed travel insurance product.",
          answer:
            "Providing balanced advice that considers real alternatives (e.g. entering via a different product line, partnering with an established insurer, or a phased regional launch) helps the client make a genuinely informed decision, rather than the actuary simply rubber-stamping a predetermined plan &mdash; this is part of the actuary's professional duty to give substantively useful advice, not merely technically correct validation of an already-chosen course of action.",
          note: "This connects directly to the advice-process principle that good advice weighs genuine alternatives, not just the option presented by the client.",
        },
      ],
    },
    {
      id: "cp1-q2",
      title: "Designing a combined protection and savings product",
      modules: "Modules 5, 6, 7, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question:
            "A life insurer is designing a new combined protection-and-savings product for customers in their 30s and 40s. Define the three broad categories of customer financial need such a product might address, and state which combination this product is targeting.",
          answer:
            "The three broad categories are protection against risk (e.g. death, illness), saving/investment for the future, and income provision (e.g. in retirement). This product is deliberately targeting the first two &mdash; protection and saving &mdash; combined in a single contract.",
          note: "Candidates should name all three categories even though only two are relevant to this product, to demonstrate the full framework before applying it.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss one advantage and one disadvantage of bundling protection and savings into a single product, compared with offering two separate, simpler products.",
          answer:
            "Advantage: bundling can be more convenient and potentially more cost-effective for the customer than administering and paying for two separate contracts, and may also help the insurer cross-sell and retain the customer relationship. Disadvantage: the combined product is more complex, which can reduce customer understanding of what they're actually paying for and receiving, increase administration costs, and create greater mis-selling or dispute risk &mdash; a customer may not clearly understand how much of their premium funds protection versus savings.",
          note: "A strong answer explicitly weighs both sides rather than only listing benefits &mdash; the complexity-versus-customer-need trade-off is a recurring CP1 theme.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "The insurer is deciding whether to structure the savings element as unit-linked or with-profits. Explain the key difference in risk-sharing between these two structures.",
          answer:
            "In a unit-linked structure, the policyholder's benefits are directly linked to the value of units in an underlying investment fund, so investment risk is passed largely to the policyholder. In a with-profits structure, the policyholder receives smoothed investment returns via bonuses reflecting the insurer's overall investment performance, meaning the insurer retains more investment risk (and administers smoothing) on the policyholder's behalf.",
          note: "The key distinguishing concept is WHO bears the investment risk and volatility &mdash; unit-linked passes it through directly, with-profits smooths and partially retains it.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 3,
          question:
            "The insurer is also considering offering group versions of this product through employers, alongside the personal (individually purchased) version. Explain one advantage of the employer-provided route for the policyholder, and one risk it creates for them.",
          answer:
            "Advantage: employer-provided cover is often cheaper and more accessible than equivalent personal cover, since group purchasing power and employer subsidy can reduce cost, and typically involves less individual underwriting. Risk: benefits secured through an employer may be lost or reduced if the employee changes employer, or if the employer becomes insolvent (depending on how the benefits are secured), creating a continuity risk that a personally-owned policy wouldn't carry.",
          note: "Candidates should identify a genuine trade-off (cost/access advantage versus continuity risk), not just list one-sided advantages of the employer route.",
        },
      ],
    },
    {
      id: "cp1-q3",
      title: "Building a diversified investment portfolio",
      modules: "Modules 9, 10, 11, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why bonds and equities are both commonly held within an institutional investment portfolio, despite their very different risk/return characteristics.",
          answer:
            "Bonds offer relatively predictable cashflows and lower volatility, well-suited to matching predictable liabilities and preserving capital, while equities offer higher expected long-term returns in exchange for greater volatility. Holding both allows a portfolio to be positioned along the risk/return spectrum appropriate to the investor's objectives and liabilities, and because bond and equity returns are not perfectly correlated, combining them can also reduce overall portfolio risk for a given expected return relative to holding either asset class alone.",
          note: "A full answer covers both the individual risk/return rationale AND the diversification/correlation rationale for holding both asset classes together.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A portfolio holds 60% in equities (expected return 8%, standard deviation 18%) and 40% in bonds (expected return 4%, standard deviation 8%), with a correlation of &minus;0.1 between the two. Calculate the portfolio's expected return and standard deviation.",
          answer:
            "Expected return $= 0.6(8\\%) + 0.4(4\\%) = 6.4\\%$. Covariance $= -0.1(0.18)(0.08) = -0.00144$. Portfolio variance $= 0.6^2(0.18)^2 + 0.4^2(0.08)^2 + 2(0.6)(0.4)(-0.00144) = 0.011664 + 0.001024 - 0.000691 = 0.011997$. Portfolio standard deviation $= \\sqrt{0.011997} = 10.95\\%$.",
          note: "The negative correlation term REDUCES the portfolio variance below what a simple weighted average of the two standard deviations would suggest &mdash; this is the diversification effect referenced in part (i), now shown numerically.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the portfolio's standard deviation calculated in part (ii) is lower than the weighted average of the two individual standard deviations (12.8%).",
          answer:
            "This is precisely the diversification benefit of combining assets with less-than-perfect (here, negative) correlation: because equities and bonds don't move in perfect lockstep, some of each asset's individual volatility is offset by the other, reducing the combined portfolio's volatility below what a simple weighted average would suggest.",
          note: "Candidates should connect this explicitly back to the correlation figure used in part (ii), not describe diversification only in the abstract.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why the correlation used in part (ii) might not reliably hold during a period of severe market stress.",
          answer:
            "Correlations between asset classes are not fixed constants and can rise sharply during a financial crisis ('correlations go to one'), as many asset classes fall together under widespread risk-averse selling and reduced liquidity &mdash; meaning the diversification benefit calculated using a historical or normal-conditions correlation may largely disappear during exactly the periods when protection is needed most.",
          note: "This is a well-known and important limitation of diversification-based risk reduction, worth flagging explicitly whenever a portfolio risk calculation is presented as a reliable indicator of stressed-period behaviour.",
        },
      ],
    },
    {
      id: "cp1-q4",
      title: "Duration matching for a pension scheme's bond portfolio",
      modules: "Modules 13, 14, 15, 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 2,
          question: "Explain what it means to match assets and liabilities by duration, as opposed to by exact cashflow.",
          answer:
            "Duration matching means choosing assets with a similar overall interest-rate sensitivity (duration) to the liabilities, protecting against small parallel interest rate movements, even if the individual asset and liability cashflows aren't matched exactly date-for-date and amount-for-amount as cashflow matching would require.",
          note: "Candidates should be clear this is a looser, more achievable form of matching than exact cashflow matching, which is often impractical given the assets actually available in the market.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "A pension scheme has a liability with duration 12 years and present value &pound;50m. Two bonds are available: Bond A with duration 8 years, and Bond B with duration 20 years. Calculate the amount that should be invested in each bond so that the combined bond portfolio's duration matches the liability's duration.",
          answer:
            "Let $w_A$ be the proportion in Bond A. $w_A(8) + (1-w_A)(20) = 12 \\Rightarrow 8w_A + 20 - 20w_A = 12 \\Rightarrow -12w_A = -8 \\Rightarrow w_A = 0.6667$. So $w_B = 0.3333$. Amount in Bond A $= 0.6667 \\times \\pounds50\\text{m} = \\pounds33.33\\text{m}$; amount in Bond B $= 0.3333 \\times \\pounds50\\text{m} = \\pounds16.67\\text{m}$.",
          note: "This is a standard two-asset duration-matching (immunisation-style) calculation &mdash; candidates should check their weights sum to 1 and that the resulting weighted-average duration equals 12 as a sanity check.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why duration matching alone only protects the scheme against small changes in interest rates, and name the additional Redington immunisation condition needed for stronger protection.",
          answer:
            "Duration matching equalises the FIRST-order (linear) sensitivity of assets and liabilities to interest rate changes, which is a good approximation only for small rate movements. For larger movements, the CURVATURE of how present values respond to rate changes (convexity) also matters; full Redington immunisation additionally requires the asset portfolio's convexity to be at least as great as the liability's convexity, to protect against larger interest rate shifts as well.",
          note: "Candidates should name convexity explicitly as the additional condition, not just say 'more precise matching is needed' vaguely.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the scheme might choose to deliberately depart from full duration matching, accepting some mismatch risk.",
          answer:
            "Full matching (via bonds alone) typically limits the portfolio to the lower expected returns of fixed-interest assets; deliberately retaining some mismatch (e.g. holding growth assets like equities) allows the scheme to pursue higher expected returns, which could reduce required contributions from the sponsor over time, in exchange for accepting the investment risk that comes with a less-than-fully-matched position.",
          note: "This is the same risk-appetite-versus-matching trade-off that recurs throughout the investment strategy material &mdash; there is no universally 'correct' answer, only a justified trade-off.",
        },
      ],
    },
    {
      id: "cp1-q5",
      title: "Setting assumptions and validating a new pricing model",
      modules: "Modules 18, 19, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An insurer's pricing team has built a new deterministic pricing model for a health insurance product. Explain what 'model validation' involves, and why it is an essential step before the model's output is relied upon.",
          answer:
            "Model validation involves checking the model behaves sensibly and produces results consistent with expectations/reality, e.g. by testing it against known cases, checking outputs against independent benchmarks, and reviewing the model's logic and code. It is essential because a model is only as reliable as its correct construction and use &mdash; validation reduces the risk of undetected errors (in structure, coding, or application beyond the range the model was designed for) materially affecting decisions based on its output.",
          note: "A strong answer distinguishes validation (does the model work as intended) from the separate question of whether its underlying assumptions are themselves reasonable, addressed in part (iii).",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why a deterministic model may be less appropriate than a stochastic model for assessing the capital this health insurer needs to hold against this product.",
          answer:
            "A deterministic model produces a single, fixed output for a given set of inputs, showing only one possible future path, whereas capital-setting specifically needs to understand the TAIL of possible adverse outcomes (e.g. a 1-in-200 year adverse scenario). A stochastic model, which explicitly incorporates randomness and produces a range/distribution of outcomes, is much better suited to quantifying this kind of tail risk, which a single deterministic figure cannot represent.",
          note: "Candidates should connect this explicitly to the CAPITAL-setting use case specified in the question, not give a generic deterministic-versus-stochastic answer.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "The pricing team has only two years of the insurer's own claims data for this new product, alongside a larger industry-wide dataset. Explain how the concept of credibility would be used to combine these two data sources when setting the morbidity assumption.",
          answer:
            "Credibility theory determines how much weight to place on the insurer's own (sparse, only two years') data versus the wider, more stable industry data, based on the volume and reliability of the insurer's own experience. With only two years of own data, credibility would typically be low, so the assumption would place substantial weight on the industry data, with the own-experience weighting increasing as more of the insurer's own claims data accumulates over time.",
          note: "Candidates don't need the Bühlmann credibility formula itself for CP1 &mdash; the general principle (more own data warrants more weight on it) is what's being tested here.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "Comment on why the pricing team should document the assumptions and limitations underlying this model clearly, rather than presenting only the final premium rates to senior management.",
          answer:
            "Clear documentation of assumptions and limitations allows senior management (and any future reviewer) to understand the basis for the figures and assess whether the assumptions remain appropriate, particularly given the limited own-data credibility discussed in part (iii). Presenting only headline premium rates without this context risks over-reliance on the model beyond its genuine reliability, and undermines the transparency needed for genuine peer review and informed decision-making.",
          note: "This connects the module's documentation/transparency principle directly to the specific data-limitation context established earlier in the question.",
        },
      ],
    },
    {
      id: "cp1-q6",
      title: "Mortality assumptions and expense allocation for a new annuity book",
      modules: "Modules 21, 22",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An insurer is launching a new annuity product. Explain why uncertainty in future mortality improvement is a particularly significant risk for this product, more so than for a term assurance product.",
          answer:
            "For an annuity, the insurer pays income for as long as the annuitant lives, so if mortality improves faster than assumed (people living longer than priced/reserved for), the insurer's costs increase because payments continue for longer than expected. This is the opposite exposure to term assurance, where the insurer's risk is people dying SOONER than assumed (triggering an earlier-than-expected payout) &mdash; making mortality improvement uncertainty a direct, ongoing cost risk for annuities but a comparatively minor consideration for term assurance.",
          note: "Candidates should explicitly contrast the DIRECTION of mortality risk between annuities and term assurance, not just assert annuities are 'riskier'.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "The insurer's total annual expenses for this new annuity book are &pound;2,400,000, covering 20,000 in-force policies. &pound;600,000 of this is a fixed cost allocated per policy in force; the remaining &pound;1,800,000 is allocated in proportion to total premium income, which is &pound;10,000,000. Calculate the per-policy expense assumption and the variable expense rate (as a percentage of premium) implied by this allocation.",
          answer:
            "Per-policy fixed expense $= \\pounds600{,}000 / 20{,}000 = \\pounds30$ per policy. Variable expense rate $= \\pounds1{,}800{,}000 / \\pounds10{,}000{,}000 = 18\\%$ of premium. (Check: $\\pounds600{,}000 + \\pounds1{,}800{,}000 = \\pounds2{,}400{,}000$, matching the total.)",
          note: "This is a straightforward two-part allocation calculation &mdash; candidates should keep the FIXED (per-policy) and VARIABLE (per-premium) components clearly separate rather than blending them into a single average.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why this expense allocation, calculated from a new and rapidly growing book, might not be a reliable guide to the book's future steady-state expense level.",
          answer:
            "In a rapidly growing book, initial (acquisition) expenses tend to dominate relative to the (still small) in-force policy count, potentially overstating the ongoing, steady-state per-policy expense level that will apply once the book matures and its expense base becomes dominated by renewal/maintenance costs instead.",
          note: "This is a genuinely important and commonly tested trap: growth-period expense experience is not directly comparable to a mature book's expense experience."
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on why underestimating expenses in this product's pricing could undermine profitability, even if the mortality assumption in part (i) turns out to be accurate.",
          answer:
            "Pricing under the equivalence principle must cover benefits, expenses, and any profit margin; if expenses are understated, the actual cost of writing and servicing the business will exceed what premiums were designed to cover, eroding or eliminating profitability regardless of how accurately other assumptions (like mortality) were set &mdash; a single mis-set assumption can undermine an otherwise sound pricing exercise.",
          note: "The key point is that ALL major assumptions must be accurate for a product to be genuinely well-priced; accuracy in one area doesn't compensate for inaccuracy in another."
        },
      ],
    },
    {
      id: "cp1-q7",
      title: "Contract design, pricing and new business strain for a critical illness product",
      modules: "Modules 23, 24",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An insurer is designing a new critical illness product and considering whether to offer reviewable or guaranteed premiums. Explain the trade-off this choice creates between the insurer and the policyholder.",
          answer:
            "Reviewable premiums let the insurer adjust rates if future experience (e.g. claims incidence) diverges from original pricing assumptions, managing the insurer's risk over a long contract term, but this introduces uncertainty for the policyholder, who cannot be fully certain of their future costs. Guaranteed premiums give the policyholder full certainty but mean the insurer bears the full risk that future experience is worse than assumed, with no ability to reprice in response.",
          note: "A complete answer names the risk transfer explicitly in BOTH directions, not just one side of the trade-off.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 4,
          question:
            "For a single-premium version of this product, the present value of expected benefit and expense outgo is &pound;9,000. The insurer requires a profit margin equal to 5% of the premium charged. Using the equivalence principle, calculate the premium the insurer should charge.",
          answer:
            "Under the equivalence principle, $P = PV(\\text{outgo}) + 0.05P \\Rightarrow P(1 - 0.05) = 9{,}000 \\Rightarrow P = 9{,}000 / 0.95 = \\pounds9{,}473.68$.",
          note: "Since the profit margin is expressed as a percentage of the PREMIUM (not of the outgo), it must be solved for algebraically rather than simply added on top of the &pound;9,000 &mdash; a common error is to compute $9{,}000 \\times 1.05$ instead.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain what 'new business strain' means, and why it is likely to arise when this product is sold, even though the pricing in part (ii) is profitable overall.",
          answer:
            "New business strain is the initial capital cost/loss an insurer incurs when writing new business, typically because upfront expenses (e.g. commission, underwriting costs) are incurred immediately, while premium income and profit emerge only gradually. Even though the policy is profitable over its full lifetime (as confirmed by the pricing in part (ii)), the timing mismatch between the immediate upfront cost and the gradually-emerging profit still creates an initial capital drain.",
          note: "The key insight is that lifetime profitability and new business strain are not contradictory &mdash; strain is fundamentally a TIMING issue, not a profitability issue.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss one way the insurer could finance the new business strain identified in part (iii) if it plans to sell this product at a rapidly growing volume.",
          answer:
            "The insurer could use reinsurance financing, where a reinsurer provides upfront financing (effectively an advance against future profits) in exchange for a share of future profits/premiums, allowing the insurer to write the new business at scale without needing to fund the full strain from its own existing capital. Alternative valid answers include using existing free capital/surplus, or moderating the pace of new business growth to match available capital.",
          note: "Any one genuine financing option, clearly explained and linked to the rapid-growth context of the question, should be credited.",
        },
      ],
    },
    {
      id: "cp1-q8",
      title: "Risk governance and underwriting for a new general insurer",
      modules: "Modules 25, 26, 27, 28",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A newly authorised general insurer is setting up its risk management framework. Explain the 'three lines of defence' model it should adopt, and identify which line the underwriting function itself belongs to.",
          answer:
            "The three lines are: (1) business functions that own and manage risk day-to-day; (2) risk management/compliance functions providing independent oversight; (3) internal audit providing independent assurance. The underwriting function belongs to the FIRST line, since it is a business function directly taking on and managing insurance risk as part of day-to-day operations, subject to oversight from the second-line risk function.",
          note: "Candidates should correctly place underwriting in the first line, not the second &mdash; a common error is to think of any risk-related function as automatically 'the risk function' (second line).",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why 'concentration risk' and 'accumulation risk' are particularly important considerations for this new insurer to identify and manage as it builds its book of business.",
          answer:
            "Concentration risk (excessive exposure to a single counterparty, sector, or geography) and accumulation risk (many individually accepted risks turning out to be correlated, e.g. same peril or geography) both undermine the usual assumption of largely independent claims underlying standard pricing. For a new insurer building its book from scratch, there's a genuine risk of inadvertently writing a geographically or sectorally concentrated portfolio (e.g. if early growth comes disproportionately from one region or broker), which could expose it to a much larger-than-expected aggregate loss from a single event than its capital is prepared for.",
          note: "A strong answer explains WHY these risks specifically matter for a NEW insurer building a book (as opposed to an established, already-diversified one), not just define the terms generically.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the underwriting process helps ensure the risks the insurer actually accepts remain consistent with the assumptions underlying its pricing.",
          answer:
            "Underwriting assesses and classifies each risk before deciding whether, and on what terms, to accept it &mdash; using rating factors to group applicants into categories of similar risk level, so that a given premium is only charged to applicants whose risk genuinely matches the assumptions that premium was calculated on. Risks assessed as higher than standard can be accepted at loaded (adjusted) terms, or declined, rather than being accepted at a standard price that wouldn't reflect their true risk, preventing a mismatch between actual accepted risk and the population the pricing basis assumed.",
          note: "This connects the underwriting process directly back to the pricing/assumption-setting material &mdash; underwriting is the practical mechanism keeping the two consistent.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "The insurer is considering using automated/algorithmic underwriting for straightforward, low-value policies. Comment on the advantages and a key risk of this approach.",
          answer:
            "Automated underwriting can process large volumes of standard applications quickly and consistently, reserving more detailed manual underwriting resource for complex or high-value cases, and reduces the risk of inconsistent human underwriting decisions undermining the pricing basis. A key risk is that the automated model itself is a source of model risk (Module 18) &mdash; if its underlying logic or rating factors are flawed, or it's applied outside the range of risks it was designed/validated for, it could systematically mis-classify risk at scale before the error is detected, unlike a single human underwriter's isolated error.",
          note: "The strongest answers recognise automation doesn't eliminate underwriting risk, it changes its NATURE &mdash; from scattered individual errors to a potentially systematic, large-scale error if the model itself is flawed.",
        },
      ],
    },
    {
      id: "cp1-q9",
      title: "Measuring and transferring risk for a general insurance portfolio",
      modules: "Modules 29, 30, 31",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer's annual aggregate claims for a portfolio are assumed to be normally distributed with mean &pound;5,000,000 and standard deviation &pound;1,200,000. Calculate the 99.5% Value at Risk (VaR) for this portfolio, and the capital required in excess of the best estimate (mean) liability, using $z_{0.995}=2.576$.",
          answer:
            "$VaR_{99.5\\%} = \\mu + z_{0.995}\\sigma = 5{,}000{,}000 + 2.576(1{,}200{,}000) = \\pounds8{,}091{,}200$. Capital required in excess of the best estimate $= VaR_{99.5\\%} - \\mu = 2.576(1{,}200{,}000) = \\pounds3{,}091{,}200$.",
          note: "The best estimate (mean) is already assumed to be reserved for separately &mdash; the CAPITAL requirement is specifically the additional buffer above that best estimate, not the full VaR figure itself.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 2,
          question: "Explain one limitation of using VaR alone (as calculated in part (i)) to assess this portfolio's risk.",
          answer:
            "VaR indicates only the loss threshold that won't be exceeded with the given confidence level &mdash; it doesn't indicate the potential severity of losses BEYOND that threshold. Two portfolios could share an identical VaR figure yet have very different tail severity beyond it, a distinction VaR alone cannot reveal; TailVaR (Expected Shortfall) addresses this by measuring the expected loss given that the VaR threshold is exceeded.",
          note: "Candidates should name TailVaR/Expected Shortfall as the measure that addresses this specific limitation, not just describe the limitation in isolation.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "The insurer is considering purchasing excess of loss reinsurance to reduce the capital requirement calculated in part (i). Discuss how this would affect the calculation, and one cost the insurer must weigh against the resulting capital saving.",
          answer:
            "Excess of loss reinsurance caps the insurer's exposure to individual large claims above a chosen retention, which reduces the variance (and hence the standard deviation) of the insurer's RETAINED aggregate claims relative to the gross figures used in part (i), directly reducing both the retained VaR and the required capital. The cost to weigh against this saving is the reinsurance premium itself: risk transfer isn't free, so the insurer must judge whether the price charged by the reinsurer for taking on this risk is worth the resulting reduction in retained risk and capital.",
          note: "A complete answer identifies BOTH the mechanism (reduced retained variance lowering VaR/capital) AND the genuine cost trade-off (reinsurance premium), not just one side.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the insurer should use multiple reinsurers for this programme, rather than placing the whole reinsurance arrangement with a single reinsurer.",
          answer:
            "Using multiple reinsurers diversifies counterparty risk &mdash; the risk that the party to whom risk was transferred fails to honour its obligations when called upon &mdash; so the financial failure of a single reinsurer counterparty doesn't undermine the whole risk transfer programme (and leave the insurer suddenly exposed to losses it believed were reinsured). This is the same concentration risk principle discussed in part (iii) of a related question, now applied specifically to the reinsurance counterparties themselves rather than the underlying insured risks.",
          note: "Candidates should recognise that risk transfer itself introduces a NEW risk (counterparty/credit risk) that must be separately managed, ideally via diversification across several reinsurers.",
        },
      ],
    },
    {
      id: "cp1-q10",
      title: "Reserving for claims and valuing liabilities on a general insurance book",
      modules: "Modules 32, 33",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "A run-off triangle shows cumulative claims (&pound;'000s) as follows: Origin year 1: 200, 260, 280 (development years 1, 2, 3). Origin year 2: 210, 270 (development years 1, 2). Origin year 3: 220 (development year 1). Using the basic chain ladder method, calculate the total outstanding claims (IBNR plus claims development) across origin years 2 and 3.",
          answer:
            "Development factor $f_{1\\to2} = \\dfrac{260+270}{200+210} = \\dfrac{530}{410} = 1.293$. Development factor $f_{2\\to3} = \\dfrac{280}{260} = 1.077$. Origin year 2 ultimate $= 270 \\times 1.077 = 290.77$; outstanding $= 290.77 - 270 = 20.77$. Origin year 3 projected to dev. year 2 $= 220 \\times 1.293 = 284.39$; ultimate $= 284.39 \\times 1.077 = 306.27$; outstanding $= 306.27 - 220 = 86.27$. Total outstanding $= 20.77 + 86.27 = 107.04$ ('000s), i.e. &pound;107,040.",
          note: "Origin year 3 needs TWO development factors applied in sequence (dev. year 1 to 2, then 2 to 3), while origin year 2 only needs one (dev. year 2 to 3) &mdash; applying the wrong number of factors to each origin year is the most common error in this style of question.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 2,
          question: "Explain why the outstanding claims calculated in part (i) are subject to considerably more uncertainty than a 'claims outstanding' provision for claims already reported and being processed.",
          answer:
            "The figures in part (i) include an allowance for claims incurred but not yet reported (IBNR), for which the insurer has no direct record at all, so the estimate relies entirely on statistical patterns inferred from historical development. A claims outstanding provision, by contrast, covers claims that are already known and reported, even if the final settlement amount remains somewhat uncertain, making it generally more reliably estimable than the genuinely unknown IBNR component.",
          note: "The key distinction is between claims that are KNOWN to exist (reported, awaiting settlement) versus claims that are entirely UNKNOWN to the insurer (not yet reported at all).",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the discount rate used to value these outstanding claims as a liability could be a particularly sensitive assumption.",
          answer:
            "For longer-tail claims (which take longer to fully develop and settle), a small change in the discount rate can have a large effect on the present value of the liability cashflows, since the compounding effect of discounting grows with the time horizon over which cashflows are expected to emerge &mdash; making the discount rate choice especially significant for exactly the kind of long-tail, slow-developing claims this triangle exhibits.",
          note: "This connects the general discount-rate-sensitivity principle to the SPECIFIC long-tail characteristics evident in the run-off triangle from part (i).",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain why this liability might need to be valued on more than one basis (e.g. a best estimate basis and a regulatory solvency basis).",
          answer:
            "Different purposes require different levels of prudence or prescribed methodologies: a best estimate basis reflects the actuary's unbiased, most-likely view for internal management purposes, while a regulatory solvency basis may prescribe additional margins or specific methodologies to ensure a degree of comparability and appropriate prudence across the industry for solvency assessment purposes.",
          note: "Candidates should name the genuinely different PURPOSES driving the need for multiple bases, not just assert that 'different bases exist'.",
        },
      ],
    },
    {
      id: "cp1-q11",
      title: "Reported results and a run-off scenario for a struggling insurer",
      modules: "Modules 34, 35",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An insurer's board is reviewing reported results that show declining profit despite the underlying book of business remaining broadly stable. Explain how a change in reserving assumptions alone (with no change in the underlying business) could produce this effect.",
          answer:
            "Liabilities (largely actuarially calculated reserves) are a major component of the balance sheet, and changes in reserve assumptions directly affect reported profit through the income statement &mdash; strengthening reserves (e.g. adopting more prudent mortality or claims assumptions) increases the liability figure, which reduces reported profit in that period even though nothing about the underlying policies or claims experience has actually changed.",
          note: "This tests whether candidates understand that reported profit is not a pure measure of underlying business performance &mdash; it is also shaped by assumption and methodology choices.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why transparency about the assumptions underlying these reported results is particularly important for the board in this scenario.",
          answer:
            "Without transparency about what changed, the board risks misinterpreting a genuine assumption-driven change in reported profit as a sign of deteriorating underlying business performance (or vice versa), leading to poorly-targeted management action. Clear disclosure of the assumptions and methods used allows the board to understand and appropriately interpret the reported results, rather than taking the headline profit figure at face value without the context needed to judge what's actually driving it.",
          note: "The strongest answers link transparency directly to avoiding a specific, plausible MISINTERPRETATION risk in this scenario, not just asserting transparency is 'good practice' generically.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Suppose the insurer's financial position continues to weaken and the regulator becomes concerned. Explain why the regulator might intervene before the insurer reaches formal insolvency, and give one example of an early intervention measure.",
          answer:
            "Early intervention (e.g. restricting new business, requiring a recovery plan, or requiring updated realistic valuations of assets and liabilities) may prevent full insolvency and better protect policyholders than waiting until the insurer is already unable to meet its liabilities, since problems caught and corrected earlier are generally more manageable than after they've caused significant damage.",
          note: "Any genuine, specific early intervention measure (restricting new business, recovery plan, enhanced reporting requirements) should be credited if clearly explained.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "If the insurer ultimately becomes insolvent, comment on why policyholders might receive less than their full contractual entitlement, and how a policyholder protection scheme might mitigate this.",
          answer:
            "If the insurer's assets are insufficient to cover all liabilities in full, policyholders (effectively acting as creditors) may only receive a proportionate share of their entitlement, since assets have to be distributed according to a priority order rather than paying every claim in full. A policyholder protection scheme (often government or industry-backed) can provide some additional compensation to affected policyholders in this situation, though typically not a full guarantee of every contractual entitlement.",
          note: "Candidates should recognise the protection scheme as a partial mitigation, not a complete guarantee that policyholders will always be made whole after an insolvency.",
        },
      ],
    },
    {
      id: "cp1-q12",
      title: "Capital requirements, diversification and surplus for a composite insurer",
      modules: "Modules 36, 37, 38, 39",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A composite insurer calculates standalone capital requirements of &pound;40m for market risk, &pound;30m for insurance risk, and &pound;10m for operational risk. The correlation between market and insurance risk is assumed to be 0.25; operational risk is added on top without diversification benefit. Calculate the insurer's total diversified capital requirement, and the diversification benefit relative to simply summing the three standalone figures.",
          answer:
            "Combined market and insurance requirement $= \\sqrt{40^2 + 30^2 + 2(0.25)(40)(30)} = \\sqrt{1{,}600 + 900 + 600} = \\sqrt{3{,}100} = \\pounds55.68\\text{m}$. Total diversified requirement $= 55.68 + 10 = \\pounds65.68\\text{m}$ (operational risk added linearly). Sum of standalone requirements $= 40 + 30 + 10 = \\pounds80\\text{m}$. Diversification benefit $= 80 - 65.68 = \\pounds14.32\\text{m}$.",
          note: "This mirrors CM2's two-asset portfolio variance formula applied to capital charges rather than asset returns &mdash; only market and insurance risk are combined using the correlation; operational risk is added on afterwards without a diversification adjustment, as specified in the question.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 2,
          question: "Explain why the diversification benefit calculated in part (i) exists, in terms of the underlying risks.",
          answer:
            "Because market risk and insurance risk are not perfectly correlated (correlation of 0.25, well below 1), the two risk types are not likely to produce their worst outcomes simultaneously, so the combined capital needed to cover both to the required confidence level is less than simply adding the two standalone requirements together &mdash; the same diversification logic that reduces portfolio risk when combining imperfectly correlated assets.",
          note: "Candidates should connect this explicitly to the correlation figure used in the calculation, not describe diversification only in the abstract.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the insurer might choose to use an internal model rather than a regulatory standard formula to calculate its capital requirement, and one disadvantage of doing so.",
          answer:
            "An internal model can more accurately reflect the insurer's own specific risk profile (e.g. its genuine diversification benefits and risk correlations, as calculated in part (i)), potentially avoiding over- or under-stating capital needs relative to its actual risk, unlike a standardised formula applied uniformly across the industry. A key disadvantage is that internal models are more complex and costly to build, maintain, and validate, and require regulatory approval before they can be used to replace the standard formula, unlike the standard formula's comparative simplicity and industry-wide comparability.",
          note: "A complete answer weighs both the accuracy advantage AND the cost/approval-burden disadvantage, not just one side of the trade-off.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "The insurer's available capital currently exceeds its required capital, generating a surplus. Comment on why ongoing monitoring of this surplus position is essential, rather than treating the current healthy position as a fixed, permanent state.",
          answer:
            "The insurer's risk profile, business volumes, and the external environment all change over time, so a surplus position that is currently healthy could erode as conditions change (e.g. adverse claims experience, market movements, or business growth increasing required capital) &mdash; ongoing monitoring allows the insurer to compare actual experience against expectations and take timely management action (e.g. adjusting surplus distribution or risk transfer) before any deterioration becomes severe, closing the actuarial control cycle back into revised assumptions and decisions.",
          note: "This closing comment should reflect CP1's recurring ongoing-review theme &mdash; capital and surplus management is a continuous process, not a one-off calculation to be checked once and forgotten.",
        },
      ],
    },
  ],
};

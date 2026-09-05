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
  CP2: [
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
          note: "A strong answer explains the CONSEQUENCE of hard-coding (inconsistent updates), not just defines the term.",
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
          note: "This is genuinely practical exam-technique advice, not just an abstract principle &mdash; candidates should frame the answer around the time trade-off explicitly.",
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
            "A relative reference (e.g. A1) shifts automatically when a formula is copied to another cell, while an absolute reference (e.g. $A$1) stays fixed regardless of where it's copied. If the discount rate is held in one fixed input cell, that reference must be made absolute before copying the formula down the column of years, otherwise the reference would shift to point at the wrong (likely empty or incorrect) cell in each new row.",
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
          note: "The key insight is that OUTDATED documentation is actively misleading, not merely unhelpful &mdash; a reviewer has no way to know it's stale just from reading it.",
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
            "It becomes genuinely unclear which copy is the authoritative, current version, risking that outdated or incorrect results are used, or that a fix applied to one copy isn't reflected in others still in circulation &mdash; a clear naming convention or centralised change log avoids this ambiguity by making the current, correct version unambiguous.",
          note: "This is a very common, easily recognisable real-world failure mode worth describing concretely rather than abstractly.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why documentation is described as something that should be updated whenever the model changes, rather than written once at initial build and left alone.",
          answer:
            "A model's logic evolves as it's adjusted over its two years of use, so documentation frozen at the original build date will increasingly diverge from what the model actually does &mdash; keeping documentation current alongside every change is what preserves its usefulness as a genuinely accurate guide for future reviewers.",
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
          note: "The key distinction is reliability of the SENSITIVITY-TESTING PROCESS itself, separate from whether the underlying model is correct.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why the &pound;50,000 spread between the best and worst case in part (i) is a useful finding in its own right, beyond the three individual figures.",
          answer:
            "The spread quantifies exactly how much renewal income is genuinely at risk from lapse rate uncertainty, giving a decision-maker a clear sense of the assumption's materiality to this result &mdash; a single best-estimate figure alone would convey no information about this underlying sensitivity.",
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
            "The model's builder/user is the FIRST line, responsible for building and using the model correctly day-to-day; a separate risk or actuarial oversight function acts as the SECOND line, providing independent review/challenge; internal audit forms the THIRD line, periodically assessing the overall control environment around the model's use.",
          note: "Candidates should correctly place the model's day-to-day user in the first line, not mistake them for 'the risk function' simply because the topic is risk-related.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why independent peer review of this model is a valuable control, even though its builder is an experienced, careful actuary confident it's correct.",
          answer:
            "A model's own author can become blind to their own errors through over-familiarity with the model's logic, since they naturally see what they expect to see rather than testing it fresh; an independent reviewer approaches the model without that familiarity, genuinely testing its logic rather than confirming the author's existing expectations &mdash; confidence in one's own work is not the same as verified correctness.",
          note: "The strongest answers explicitly separate CONFIDENCE from VERIFICATION &mdash; these are not the same thing, however experienced the model's builder is.",
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
          note: "This is a genuine independent recalculation using a DIFFERENT method (year-by-year multiplication versus a single exponent formula) &mdash; both should agree if the model's logic is structurally sound.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why this kind of independent recalculation is a more rigorous check than simply re-reading the original formula a second time.",
          answer:
            "Re-reading the same formula again risks simply confirming the same (possibly flawed) logic a second time, since the reviewer's attention follows the same reasoning path as before. Recalculating via a genuinely different method is far more likely to catch an underlying error, since the two approaches don't share the same potential blind spot.",
          note: "The key distinction is between merely REVIEWING existing logic versus genuinely INDEPENDENTLY verifying the result via a different route.",
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
            "Documenting the check provides evidence to a reviewer or later user that appropriate checking has genuinely taken place, and specifies exactly what was and wasn't tested &mdash; an unrecorded assumption that 'this must have been checked' is itself a source of risk, since it can't be verified or relied upon later.",
          note: "This connects checking (this module) directly to documentation (Module 4) and sign-off (Module 6) &mdash; a documented check is what a sign-off decision should genuinely be based on.",
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
          note: "The key justification is that this is a REPETITIVE, MECHANICAL task, in contrast to core calculation logic that's often better left as transparent, auditable formulas.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why the resulting macro's code should be commented clearly, and why VBA code is generally considered harder to audit than an equivalent spreadsheet formula.",
          answer:
            "VBA code is hidden behind the spreadsheet interface in a separate code editor, requiring a reviewer to actively open and read it and understand programming logic rather than visible, clickable spreadsheet formulas &mdash; clear code comments explain what each section does and why, serving the same purpose code comments serve for spreadsheet documentation, without which the macro becomes a genuine black box even to a technically capable reviewer.",
          note: "A complete answer covers both the AUDIT DIFFICULTY of VBA generally and the specific role comments play in mitigating it.",
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
          note: "The key misconception to correct is that 'automated' implies 'more reliable' &mdash; automation changes HOW a task is performed, not whether its output still needs to be checked.",
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
          note: "The key point is that the DECISION about how to handle outliers matters and should be documented, not simply that outliers exist and should be removed.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why simply excluding all records with any missing field, without further investigation, could introduce bias into the resulting assumption.",
          answer:
            "If the missingness isn't random (e.g. certain policy types or claim circumstances are systematically more likely to have an incomplete record), excluding those records entirely could skew the remaining data set away from being representative of the true underlying population, biasing any assumption derived from it.",
          note: "This directly echoes CP1's point about missing data adjustments &mdash; exclusion is only safe if the missingness is genuinely random, which shouldn't simply be assumed.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why raw imported claims data should be kept on a separate sheet from the model's working calculations, rather than cleaned and used in place.",
          answer:
            "Keeping raw data distinct preserves an unaltered record of the original source data, makes clear which cells are genuinely sourced externally versus derived/cleaned within the model, and allows the cleaning steps themselves to be inspected and re-run if needed &mdash; directly supporting the input/calculation/output structural separation that underpins good model design generally.",
          note: "This connects Module 2's structural design principle specifically to data handling &mdash; raw data is effectively another category of 'input' deserving the same clear, protected treatment.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why an unexpectedly extreme result from a sensitivity analysis on this model might actually indicate a data quality issue, rather than a genuine finding about the underlying risk.",
          answer:
            "An implausible or extreme sensitivity result can sometimes be traced back to a data error (e.g. one erroneous record with an extreme value skewing an assumption) rather than a genuine feature of the underlying risk exposure &mdash; sensitivity testing can therefore double as a useful data-quality check, not just a way of exploring genuine risk sensitivity.",
          note: "This connects Module 5's sensitivity analysis material to Module 9's data-quality material, showing the two are genuinely complementary techniques.",
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
            "A reader without actuarial training won't understand specialist terms without explanation, and unexplained jargon undermines the whole purpose of the report &mdash; communicating results clearly enough that the trustees can genuinely understand the findings and use them to make an informed decision about the proposed change.",
          note: "This directly echoes CP1's principle of tailoring communication to the recipient's ability to understand it.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss how the report's structure should be organised to serve these trustees effectively, given they may not read the full document in detail.",
          answer:
            "The report should typically open with a clear, concise summary of the key findings and conclusions, before (or separately from) more detailed supporting explanation &mdash; allowing a busy trustee who only reads the opening summary to still grasp the genuinely important message, with fuller detail available for anyone who wants to go further.",
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
            "Knowing the model's results will need to be explained clearly to a non-technical audience encourages the actuary to keep the model's structure, assumptions, and logic genuinely clear and well-organised from the outset, rather than allowing avoidable complexity to creep in &mdash; anticipating the need to explain a model to someone else is a strong forcing function for keeping the model itself clear and well-structured.",
          note: "This closing comment ties the whole subject together &mdash; the discipline of communication (CP2.2) reinforces good practice in model-building (CP2.1), rather than the two being unrelated skills.",
        },
      ],
    },
  ],
  CB1: [
    {
      id: "cb1-q1",
      title: "The finance function, the balance sheet, and the income statement",
      modules: "Modules 1, 2, 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 2,
          question: "Define the 'agency problem', and give one mechanism companies commonly use to reduce it.",
          answer:
            "The agency problem is the risk that managers (agents) pursue their own interests rather than those of shareholders (principals), since ownership and control are separated in most companies of any size. A common mitigation mechanism is linking management remuneration to share price/performance (e.g. share options), aligning managers' incentives more closely with shareholders'.",
          note: "Candidates should name a genuine, specific mechanism (not just 'better oversight' vaguely) &mdash; remuneration linked to performance is the most commonly cited example.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain the fundamental accounting equation underlying the balance sheet, and state which of the three main financial statements shows a company's performance over a period rather than its position at a point in time.",
          answer:
            "The accounting equation is Assets = Liabilities + Equity. The income statement (profit and loss account) shows performance over a period; the balance sheet, by contrast, is a snapshot of financial position at a single point in time. (The cash flow statement also covers a period, reconciling cash movement.)",
          note: "A complete answer states the equation precisely and correctly distinguishes 'position' (a snapshot) from 'performance' (over a period) &mdash; a very commonly tested distinction.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 4,
          question: "Explain why a company's reported profit after tax is not the same thing as the cash it actually generated over the same period, giving one specific example of a cost that illustrates this.",
          answer:
            "The income statement uses accruals accounting, recognising revenue and costs when they're earned/incurred rather than when cash actually changes hands, so profit can differ substantially from actual cash movement. Depreciation is a clear example: it's charged as an expense reducing reported profit each period, but involves no actual cash outflow in that period &mdash; the cash was paid when the asset was originally purchased.",
          note: "The depreciation example should be explained precisely: the cash outflow happened at PURCHASE, not when the expense is later charged in the income statement.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "A company reports strong profit after tax but its finance director is concerned about the business's cash position. Comment on why this combination is genuinely possible, and name the financial statement that would reveal the concern directly.",
          answer:
            "Because profit and cash can diverge substantially (per part (iii)), a company can be genuinely profitable on an accounting basis while still facing a cash shortfall, e.g. due to growing receivables or inventory tying up cash faster than profitable trading generates it. The cash flow statement would reveal this directly, since it reports actual cash inflows and outflows rather than accruals-based profit.",
          note: "This tests whether candidates can apply the profit-versus-cash distinction to a realistic scenario, not just recite the definition.",
        },
      ],
    },
    {
      id: "cb1-q2",
      title: "Liquidity and cash flow analysis",
      modules: "Modules 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company has current assets of &pound;450,000 (of which &pound;150,000 is inventory) and current liabilities of &pound;300,000. Calculate the current ratio and the quick (acid-test) ratio.",
          answer:
            "Current ratio $= 450{,}000 / 300{,}000 = 1.50$. Quick ratio $= (450{,}000 - 150{,}000) / 300{,}000 = 300{,}000/300{,}000 = 1.00$.",
          note: "The quick ratio excludes inventory from the numerator before dividing &mdash; a common error is to forget this exclusion and simply recompute the current ratio again.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 3,
          question: "Comment on what the gap between the current ratio and quick ratio calculated in part (i) suggests about this company's liquidity, and one industry-related caveat that should accompany any conclusion.",
          answer:
            "The meaningful gap between the two ratios (1.50 versus 1.00) indicates the company holds a significant amount of inventory relative to its current liabilities, so its ability to meet short-term obligations depends materially on being able to sell that inventory reasonably quickly. However, whether this is a genuine concern depends on the industry &mdash; a company with fast-moving, easily-liquidated stock may be entirely comfortable with this gap, while one with slow-moving stock may not be.",
          note: "A strong answer explicitly avoids declaring the ratios 'good' or 'bad' in isolation, instead flagging the industry-dependence caveat.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain how an increase in trade receivables during the period would affect operating cash flow relative to reported profit, and why.",
          answer:
            "An increase in trade receivables reduces operating cash flow relative to profit, since the corresponding revenue has already been recognised in profit but the cash hasn't yet actually been collected from customers &mdash; the sale is 'on the books' as profit before the cash physically arrives.",
          note: "Candidates should be clear on the DIRECTION of the adjustment (receivables UP means cash flow LOWER relative to profit), a common point of confusion.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why a rapidly growing, profitable company might still experience a cash flow crisis (overtrading).",
          answer:
            "Growth often requires increasing investment in working capital (more inventory, more receivables as sales grow) and non-current assets, which can consume cash faster than profitable trading generates it &mdash; a genuinely profitable company can still run out of cash purely from this timing mismatch.",
          note: "This is a well-known, important real-world phenomenon worth being able to explain confidently and concisely.",
        },
      ],
    },
    {
      id: "cb1-q3",
      title: "Efficiency and gearing ratios",
      modules: "Module 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question: "A company's cost of sales for the year was &pound;2,400,000, and its average inventory held during the year was &pound;300,000. Calculate inventory days.",
          answer: "Inventory days $= (300{,}000 / 2{,}400{,}000) \\times 365 = 45.63$ days.",
          note: "The formula uses COST OF SALES (not revenue) in the denominator &mdash; using revenue instead is a common error for this specific ratio.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The same company has &pound;4,000,000 of debt and &pound;6,000,000 of equity (at market value). Calculate its gearing ratio, expressed as debt divided by (debt plus equity).",
          answer: "Gearing $= 4{,}000{,}000 / (4{,}000{,}000 + 6{,}000{,}000) = 4{,}000{,}000/10{,}000{,}000 = 40.0\\%$.",
          note: "Candidates should state clearly which gearing formula variant they're using (D/(D+E) versus D/E), since exam questions may specify either.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why a company with a gearing ratio of 40% is generally considered riskier for shareholders than an otherwise identical company with a gearing ratio of 10%.",
          answer:
            "Interest on debt must be paid regardless of how the business performs, so higher gearing means a greater proportion of profit is committed to fixed interest payments, amplifying the volatility of what's left over for shareholders &mdash; a magnifying effect known as financial risk. The 40%-geared company has substantially more of this fixed commitment relative to its capital base than the 10%-geared company.",
          note: "A strong answer explains the MECHANISM (fixed interest amplifying profit volatility for shareholders), not just asserts that higher gearing is 'riskier'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why assessing this company's 40% gearing ratio in isolation, without further context, could be misleading.",
          answer:
            "The appropriate gearing level varies significantly by industry &mdash; a capital-intensive industry with stable, predictable cashflows (e.g. utilities) can typically sustain much higher gearing safely than an industry with volatile earnings, so 40% could be entirely prudent for one company and excessive for another depending on the nature and stability of its business.",
          note: "This connects directly to the same industry-comparison caution that applies to liquidity ratios &mdash; a recurring theme worth applying consistently across ratio types.",
        },
      ],
    },
    {
      id: "cb1-q4",
      title: "Working capital management",
      modules: "Module 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question: "A company has inventory days of 45, receivables days of 60, and payables days of 40. Calculate its working capital cycle (cash conversion cycle).",
          answer: "Working capital cycle $= 45 + 60 - 40 = 65$ days.",
          note: "Payables days is SUBTRACTED (not added) &mdash; forgetting the subtraction is the most common error in this calculation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what the 65-day cycle calculated in part (i) means in practical terms, and why a shorter cycle is generally preferable.",
          answer:
            "It means, on average, 65 days pass between the company paying cash out for its inputs and receiving cash in from customers for the resulting sales. A shorter cycle is generally preferable because it means less cash is tied up in the business for a shorter period, freeing up capital that could otherwise be used productively elsewhere (reflecting the opportunity cost of capital tied up in working capital).",
          note: "A complete answer explains both WHAT the figure represents and WHY shorter is better (the opportunity cost argument), not just one or the other.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss two distinct techniques the company could use to reduce its working capital cycle.",
          answer:
            "Reducing inventory days: implementing just-in-time ordering or better demand forecasting to hold less stock. Reducing receivables days: offering an early payment discount or tightening credit control to collect from customers faster. (Increasing payables days, within agreed supplier terms, would also reduce the cycle, though this must be balanced against supplier relationship risk.)",
          note: "Any two genuinely distinct techniques targeting different components of the cycle (inventory, receivables, or payables) should be credited if clearly explained.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why aggressively extending payables days beyond agreed supplier terms, purely to shorten the working capital cycle, could be a poor strategy despite the mechanical improvement it would show.",
          answer:
            "Deliberately delaying payment beyond agreed terms can damage supplier relationships, risk losing favourable credit terms or discounts, and harm the company's reputation and ability to negotiate good terms in future &mdash; the short-term working capital improvement could be outweighed by these longer-term costs.",
          note: "This tests whether candidates recognise the difference between efficiently using AGREED credit terms and damagingly abusing supplier goodwill.",
        },
      ],
    },
    {
      id: "cb1-q5",
      title: "Choosing between sources of equity and debt finance",
      modules: "Modules 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question: "A company is planning a rights issue. Explain what a rights issue is, and why it's typically priced at a discount to the current market share price.",
          answer:
            "A rights issue is an offer of new shares to existing shareholders, in proportion to their current shareholding, typically at a discount to the current market price. The discount makes the offer attractive enough to encourage existing shareholders to take up their entitlement (providing new capital), while the proportional nature of the issue protects them from being diluted if they do so.",
          note: "Candidates should explain WHY the proportional structure specifically protects against dilution, not just describe the discount in isolation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what a 'loan covenant' is, and give one example of a financial ratio a lender might require the company to maintain.",
          answer:
            "A loan covenant is a condition attached to a loan agreement, restricting the borrower's actions or requiring certain financial ratios to be maintained, protecting the lender's position. A lender might commonly require a minimum interest cover ratio or a maximum gearing ratio to be maintained throughout the life of the loan.",
          note: "Any genuine, specific ratio example (interest cover or gearing) tied clearly to lender protection should be credited.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why equity investors generally require a higher expected return than debt investors in the same company.",
          answer:
            "Equity holders bear more risk than debt holders &mdash; they're paid only after debt obligations are met (a residual claim), have no guaranteed return, and no fixed repayment date, whereas debt holders have a priority, contractual claim to interest and principal. Investors require greater compensation for bearing this additional risk, which is precisely why equity is generally a more expensive source of finance than debt.",
          note: "A strong answer explicitly connects the RISK difference (priority of claim, certainty of payment) to the RETURN difference, rather than simply asserting equity is 'riskier'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "The company is deciding between financing a new project with equity or debt. Comment on one advantage and one disadvantage of using debt rather than equity for this purpose.",
          answer:
            "Advantage: debt is typically cheaper than equity, and interest payments are usually tax-deductible, further reducing the effective cost. Disadvantage: interest and principal repayments are contractual obligations that must be met regardless of the company's profitability, increasing financial risk and potentially leading to default if the project's cashflow is insufficient.",
          note: "A complete answer presents both sides of the trade-off, since a one-sided answer (advantage or disadvantage alone) would be incomplete for a 'comment' question of this weight.",
        },
      ],
    },
    {
      id: "cb1-q6",
      title: "Estimating the cost of equity",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company's current dividend ($D_0$) is &pound;0.25 per share, expected to grow at a constant rate of 5% per year indefinitely. Its current share price is &pound;4.00. Using the dividend growth model, calculate the company's cost of equity.",
          answer:
            "$k_e = \\dfrac{D_0(1+g)}{P_0} + g = \\dfrac{0.25(1.05)}{4.00} + 0.05 = \\dfrac{0.2625}{4.00} + 0.05 = 0.065625 + 0.05 = 11.56\\%$.",
          note: "The numerator must use $D_0(1+g)$ (the NEXT dividend expected), not $D_0$ itself &mdash; using $D_0$ directly is the most common error in this formula.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 3,
          question: "The company's beta is 1.2, the risk-free rate is 3%, and the expected return on the market is 8%. Calculate the cost of equity using CAPM.",
          answer: "$k_e = r_f + \\beta(r_m - r_f) = 0.03 + 1.2(0.08 - 0.03) = 0.03 + 1.2(0.05) = 0.03 + 0.06 = 9.00\\%$.",
          note: "A straightforward CAPM substitution &mdash; candidates should compute the risk premium $(r_m - r_f)$ first, then multiply by beta, before adding the risk-free rate.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the two cost of equity estimates from parts (i) and (ii) differ, and which (if either) should be considered 'correct'.",
          answer:
            "The dividend growth model and CAPM rely on different underlying assumptions and data (historical/assumed dividend growth versus market risk and beta), so they will rarely agree exactly in practice &mdash; neither is definitively 'correct'; both are estimates subject to genuine uncertainty, and judgement is needed in choosing between or reconciling them, rather than treating either figure as a precise, guaranteed answer.",
          note: "A strong answer resists declaring one method definitively superior, instead acknowledging both are estimates built on different, imperfect assumptions.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain one circumstance in which CAPM would be the only viable method of the two for estimating a company's cost of equity.",
          answer:
            "If the company pays no dividend at all (e.g. a young, high-growth company retaining all profit for reinvestment), the dividend growth model cannot be applied at all, since it relies entirely on a dividend stream &mdash; CAPM, which doesn't depend on dividends, remains applicable in this situation.",
          note: "This is a genuinely important, commonly tested limitation of the dividend growth model worth remembering precisely.",
        },
      ],
    },
    {
      id: "cb1-q7",
      title: "Weighted average cost of capital",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A company is financed by &pound;60m of equity (market value) with a cost of equity of 12%, and &pound;40m of debt (market value) with a pre-tax cost of debt of 6%. The corporation tax rate is 25%. Calculate the company's WACC.",
          answer:
            "$WACC = \\dfrac{E}{E+D}k_e + \\dfrac{D}{E+D}k_d(1-t) = \\dfrac{60}{100}(0.12) + \\dfrac{40}{100}(0.06)(1-0.25) = 0.072 + 0.018 = 9.00\\%$.",
          note: "The cost of debt must be adjusted by $(1-t)$ to reflect the tax deductibility of interest &mdash; forgetting this adjustment (using the pre-tax cost of debt directly) is the most common error in this calculation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why market values (rather than balance sheet book values) of equity and debt are used to calculate WACC.",
          answer:
            "Market values reflect what investors would actually require today for the risk they're bearing, whereas book values are historical accounting figures that may bear little relation to current economic value &mdash; WACC is fundamentally a forward-looking, market-based figure representing the company's true current cost of capital, not a backward-looking accounting one.",
          note: "Candidates should connect this to the broader principle (also seen in business valuation) that market values are preferred wherever genuinely available, for objectivity and relevance.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain why WACC is typically used as the discount rate for appraising a new investment project of average risk for this company.",
          answer:
            "WACC represents the minimum return required by the company's providers of finance overall, so a project earning at least the WACC is expected to satisfy those providers and create value for shareholders &mdash; making it the natural hurdle rate for a project whose risk matches the company's average existing risk.",
          note: "The word 'average risk' is important &mdash; a project materially riskier or safer than the company's typical activities would need a risk-adjusted rate instead.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the tax-deductibility of interest creates an incentive for a company to increase its gearing, and one factor that limits how far this incentive can reasonably be pursued.",
          answer:
            "Since interest is tax-deductible, increasing the proportion of (relatively cheap) debt finance reduces WACC further via a larger tax shield, all else equal. However, very high gearing introduces significant costs of financial distress (increased risk of default, higher borrowing costs, potential bankruptcy costs), which eventually outweigh the tax benefit of additional debt.",
          note: "This is Modigliani-Miller's tax-adjusted theory in brief &mdash; candidates should name financial distress costs specifically as the limiting factor.",
        },
      ],
    },
    {
      id: "cb1-q8",
      title: "Payback period and accounting rate of return",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A project requires an initial investment of &pound;80,000 and is expected to generate cash inflows of &pound;25,000, &pound;30,000, &pound;35,000 and &pound;20,000 in years 1 to 4 respectively. Calculate the project's payback period.",
          answer:
            "Cumulative cashflows: Year 1 &pound;25,000; Year 2 &pound;55,000; Year 3 &pound;90,000. Payback occurs during year 3: remaining amount needed after year 2 $= 80{,}000 - 55{,}000 = \\pounds25{,}000$; fraction of year 3 $= 25{,}000/35{,}000 = 0.71$. Payback period $= 2 + 0.71 = 2.71$ years.",
          note: "Candidates should identify the correct year in which cumulative cashflow first exceeds the initial investment, then calculate the FRACTION of that year needed, not round to a whole number of years.",
        },
        {
          label: "(ii)",
          command: "Calculate",
          marks: 5,
          question:
            "The project's asset is depreciated on a straight-line basis to zero residual value over its 4-year life. Using the average investment basis, calculate the project's accounting rate of return (ARR).",
          answer:
            "Annual depreciation $= 80{,}000/4 = \\pounds20{,}000$. Accounting profit each year (cash inflow minus depreciation): Year 1 $= \\pounds5{,}000$; Year 2 $=\\pounds10{,}000$; Year 3 $=\\pounds15{,}000$; Year 4 $=\\pounds0$. Average annual profit $= (5{,}000+10{,}000+15{,}000+0)/4 = \\pounds7{,}500$. Average investment $= (80{,}000+0)/2 = \\pounds40{,}000$. $ARR = 7{,}500/40{,}000 = 18.75\\%$.",
          note: "Candidates must first convert cash inflows into accounting PROFIT by deducting depreciation, before calculating the average &mdash; using the cash inflows directly (without deducting depreciation) is a common error.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 1,
          question: "State the ARR that would result if the INITIAL investment (rather than average investment) were used as the denominator instead.",
          answer: "$ARR = 7{,}500/80{,}000 = 9.38\\%$.",
          note: "Roughly half the average-investment-basis figure, illustrating why the choice of denominator must always be stated explicitly alongside any ARR result.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 1,
          question: "Discuss the single most significant theoretical limitation shared by both payback period and ARR.",
          answer:
            "Both methods ignore the time value of money entirely, treating cashflows or profits from different years as equally valuable without any discounting &mdash; a flaw directly corrected by NPV and IRR, which explicitly discount future cashflows.",
          note: "This is the central theme distinguishing this module's techniques from the NPV/IRR methods covered next.",
        },
      ],
    },
    {
      id: "cb1-q9",
      title: "Net present value",
      modules: "Module 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "Using the same project as the previous question (initial investment &pound;80,000; cash inflows &pound;25,000, &pound;30,000, &pound;35,000, &pound;20,000 in years 1-4), calculate the project's NPV using a discount rate of 8%.",
          answer:
            "Discount factors: year 1 $=0.9259$; year 2 $=0.8573$; year 3 $=0.7938$; year 4 $=0.7350$. Present values: $25{,}000(0.9259)=\\pounds23{,}148$; $30{,}000(0.8573)=\\pounds25{,}720$; $35{,}000(0.7938)=\\pounds27{,}784$; $20{,}000(0.7350)=\\pounds14{,}701$. Sum of present values $= \\pounds91{,}353$. $NPV = 91{,}353 - 80{,}000 = \\pounds11{,}353$.",
          note: "Candidates should keep the time-0 initial investment UNDISCOUNTED, deducting it directly from the sum of the discounted inflows.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "Comment on whether the company should accept this project, based on the NPV calculated in part (i).",
          answer:
            "Since the NPV is positive (&pound;11,353), the project should be accepted &mdash; it's expected to increase shareholder wealth by generating a return greater than the 8% required by the discount rate used.",
          note: "A simple, direct application of the NPV decision rule following correctly from part (i)'s calculation.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question: "Explain why NPV is generally considered theoretically superior to both payback period and ARR (from the previous question) as an investment appraisal technique.",
          answer:
            "NPV explicitly accounts for the time value of money (unlike both alternatives) and is based on cashflow rather than accounting profit (unlike ARR), and it directly measures the project's expected contribution to shareholder wealth, which is the company's stated financial objective.",
          note: "This directly contrasts NPV's two corrected flaws against the two methods evaluated in the previous question.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain what a 'sunk cost' is, and why it should never be included in an NPV calculation.",
          answer:
            "A sunk cost is a cost that has already been incurred and cannot be recovered regardless of the current decision. It should be excluded from NPV because it doesn't change based on whether the project proceeds or not, so it's entirely irrelevant to the decision at hand &mdash; only cashflows that genuinely change as a result of the decision belong in the calculation.",
          note: "This is one of the most commonly tested sources of error in NPV questions &mdash; a strong answer states the general principle (only relevant, incremental cashflows) alongside the specific sunk-cost definition.",
        },
      ],
    },
    {
      id: "cb1-q10",
      title: "Internal rate of return",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "Using the same project (initial investment &pound;80,000; cash inflows &pound;25,000, &pound;30,000, &pound;35,000, &pound;20,000 in years 1-4), NPV at 13% is &pound;2,141 and NPV at 14% is &pound;479. Using linear interpolation, estimate the project's IRR.",
          answer:
            "$IRR \\approx 13\\% + \\dfrac{2{,}141}{2{,}141 - 479} \\times (14\\%-13\\%) = 13\\% + \\dfrac{2{,}141}{1{,}662} \\times 1\\% = 13\\% + 1.29\\% = 14.29\\%$. (The precise IRR, found by iteration, is approximately 14.30%, confirming the interpolation is a close approximation.)",
          note: "The interpolation formula adds the LOWER rate's proportional share of the gap between the two NPVs &mdash; candidates should double-check the sign and direction of the calculation, since NPV is falling as the rate rises here.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "The company's WACC is 8%. Comment on whether this project should be accepted, based on the IRR calculated in part (i).",
          answer:
            "Since the IRR (approximately 14.3%) exceeds the company's WACC (8%), the project should be accepted under the IRR decision rule &mdash; consistent with the positive NPV found in the previous question at the 8% discount rate.",
          note: "Worth noting the IRR and NPV decision rules agree here, as they always will for a single, independent, conventional project.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why NPV and IRR can give conflicting rankings when choosing between two mutually exclusive projects, and which method's recommendation should generally be followed if they disagree.",
          answer:
            "The two methods can rank projects differently when the projects have different cashflow patterns or scales, because IRR measures a RATE of return while NPV measures an absolute VALUE created &mdash; a smaller project can have a higher IRR but a lower NPV than a larger one. NPV should generally be followed, since it directly measures the absolute increase in shareholder wealth, the company's actual financial objective.",
          note: "This is one of the most important theoretical points in investment appraisal &mdash; candidates should state clearly that NPV wins when the two methods conflict for mutually exclusive projects.",
        },
        {
          label: "(iv)",
          command: "Explain",
          marks: 2,
          question: "Explain the 'multiple IRR' problem, and identify the type of project cashflow pattern that can cause it.",
          answer:
            "A project with unconventional cashflows (e.g. an initial outflow, followed by inflows, followed by a further large outflow, such as a decommissioning cost) can have more than one discount rate at which NPV equals zero, making IRR ambiguous or meaningless as a single figure. This typically arises when a project's cashflow signs change more than once over its life.",
          note: "Candidates should name a concrete example of the sign-changing pattern (e.g. a decommissioning cost) that causes this problem.",
        },
      ],
    },
    {
      id: "cb1-q11",
      title: "Inflation and taxation in investment appraisal",
      modules: "Module 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question: "The money (nominal) discount rate is 9% and expected inflation is 4% per annum. Using the Fisher equation, calculate the equivalent real discount rate.",
          answer:
            "$(1+\\text{real rate}) = \\dfrac{1+\\text{money rate}}{1+\\text{inflation rate}} = \\dfrac{1.09}{1.04} = 1.0481$. Real rate $= 4.81\\%$.",
          note: "Candidates should use the exact multiplicative Fisher relationship (dividing, not subtracting) &mdash; the simple approximation (money rate minus inflation) would give 5%, noticeably different from the exact 4.81%.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why cashflows expressed in real terms must be discounted using a real discount rate, rather than the money discount rate, and vice versa.",
          answer:
            "Mixing a real cashflow with a money discount rate (or vice versa) would inconsistently double-count or omit the effect of inflation, distorting the resulting NPV &mdash; the cashflows and discount rate must be consistently on the same (either both real or both money) basis for the calculation to be valid.",
          note: "This consistency principle is one of the most frequently tested points in this topic &mdash; worth stating explicitly and precisely.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain what 'capital allowances' are, and why they are relevant when appraising an investment involving a new asset purchase.",
          answer:
            "Capital allowances are tax relief given on the cost of qualifying capital expenditure (broadly analogous to depreciation, but calculated under tax rules rather than accounting rules). They reduce the company's taxable profit and hence its tax payable, meaning they should be incorporated into the post-tax cashflows used in an NPV calculation involving a new asset purchase.",
          note: "Candidates should recognise capital allowances as the TAX equivalent of accounting depreciation, both reducing the cash tax actually paid.",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 2,
          question: "Discuss why the timing of a tax cashflow (e.g. tax paid one year after the profit is earned) can materially affect a project's calculated NPV.",
          answer:
            "Since NPV explicitly accounts for the time value of money, a tax payment delayed by a year is worth less in present value terms than an equivalent payment made immediately, so the exact timing assumption used for tax cashflows can materially affect the calculated NPV &mdash; a correctly-sized cashflow placed in the wrong year will still produce an incorrect NPV.",
          note: "This reinforces that NPV is sensitive to WHEN a cashflow occurs, not just its amount.",
        },
      ],
    },
    {
      id: "cb1-q12",
      title: "Business valuation, dividend policy, and mergers and acquisitions",
      modules: "Modules 16, 17, 18, 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A company's current dividend is &pound;0.30 per share, expected to grow at 4% per year indefinitely, and its cost of equity is 10%. Using the dividend growth model, calculate the theoretical value of one share. Separately, a comparable listed company trades on a P/E ratio of 15, and the target company's EPS is &pound;0.40 &mdash; calculate the implied share value using this earnings-based approach.",
          answer:
            "Dividend growth model: $P_0 = \\dfrac{D_0(1+g)}{k_e-g} = \\dfrac{0.30(1.04)}{0.10-0.04} = \\dfrac{0.312}{0.06} = \\pounds5.20$. P/E-based value: $15 \\times \\pounds0.40 = \\pounds6.00$ per share.",
          note: "Two genuinely different valuation methods applied to the same company can (and often do) give different results &mdash; both figures should be calculated and left as they are, not artificially reconciled.",
        },
        {
          label: "(ii)",
          command: "Comment",
          marks: 2,
          question: "Comment on why the two valuations calculated in part (i) differ, and why a valuer might reasonably calculate both rather than relying on a single method.",
          answer:
            "Each method relies on different underlying assumptions and data (an assumed constant dividend growth rate versus a market-based comparable earnings multiple), so they will rarely agree exactly. Using multiple methods together gives a more robust, cross-checked view of the business's likely value range than relying on any single method's output in isolation.",
          note: "This echoes the same 'use multiple methods to triangulate' principle seen elsewhere in this course (e.g. checking a model's output via independent recalculation).",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain the 'signalling effect' of a dividend cut, and why a company might be reluctant to cut its dividend even if retaining the cash would be financially sound.",
          answer:
            "Because managers typically have better information about a company's prospects than outside shareholders, a dividend cut is often interpreted by the market as a negative signal about management's genuine view of future prospects, causing the share price to fall &mdash; regardless of whether the underlying financial logic for the cut (e.g. funding a good investment opportunity) is actually sound. This negative market reaction is exactly why companies are often very reluctant to cut dividends.",
          note: "A strong answer distinguishes the genuine financial logic (which might favour retention) from the market's SIGNALLING interpretation (which can react negatively regardless).",
        },
        {
          label: "(iv)",
          command: "Discuss",
          marks: 3,
          question: "Discuss two distinct reasons why mergers and acquisitions often fail to create the value originally anticipated.",
          answer:
            "Overpaying: an excessive takeover premium, or overestimating achievable synergies, means the price paid exceeds the genuine value created by the combination. Poor integration and agency motives: difficulty integrating the two companies' operations and cultures, or management being driven by empire-building motives (a form of the agency problem) rather than genuine shareholder value creation, can both prevent anticipated benefits from actually being realised.",
          note: "Any two genuinely distinct reasons (overpaying/overestimating synergies, poor integration, empire-building/agency motives) should be credited if clearly explained.",
        },
      ],
    },
  ],
  CP3: [
    {
      id: "cp3-q1",
      title: "Why communication is examined as its own dedicated skill",
      modules: "Module 1",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A trainee actuary has produced a technically flawless piece of analysis but struggles to explain it clearly to the client who commissioned it. Explain why this represents only 'half' of a complete piece of actuarial work.",
          answer:
            "Even the most rigorous, correct technical analysis has limited practical value until it's successfully communicated to the people who need to understand and act on it. If the client cannot understand or act on the analysis, the work has not genuinely achieved its purpose, regardless of how sound the underlying technical content is &mdash; communication is the essential 'last mile' that determines whether good analysis actually achieves anything.",
          note: "A strong answer names communication as a genuinely distinct, necessary skill, not merely a nice-to-have addition to technical competence.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why CP3 is typically assessed by producing a finished written document, rather than through essay-style questions about communication theory.",
          answer:
            "CP3 tests the practical skill of producing genuinely clear, well-structured, appropriately-toned communication, which can only be properly assessed by evaluating an actual finished document, not by testing whether a candidate can describe communication principles in the abstract.",
          note: "This distinguishes CP3's assessment style from CP1's scenario-analysis essays and connects to CP2's similarly practical, artefact-based assessment approach.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why a CP3 exam question might deliberately specify an audience the candidate must write for, rather than leaving the audience for the candidate to infer or choose freely.",
          answer:
            "Specifying the audience directly determines what counts as a good answer, since the same technical content written appropriately for an actuarial colleague would very likely be an inappropriate, jargon-heavy answer for a specified non-technical audience such as a policyholder. This tests whether the candidate can genuinely tailor communication to a stated audience, not just write generically well.",
          note: "Candidates should recognise that a technically accurate answer written for the wrong audience can still lose significant marks under this exam style.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why strong CP3 skills remain valuable to an actuary throughout their career, beyond the immediate goal of passing the exam.",
          answer:
            "Actuaries regularly need to explain complex analysis to clients, boards, regulators and the public throughout their working life, so the ability to communicate clearly is a genuinely core, continuously-used professional skill, not a one-off exam hurdle to be cleared and then forgotten.",
          note: "This closing comment should connect CP3's practical, real-world value to its status as a mandatory Core Practice subject.",
        },
      ],
    },
    {
      id: "cp3-q2",
      title: "Identifying audience and purpose",
      modules: "Module 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A pensions actuary has been asked to prepare a document summarising the results of a scheme funding valuation, to be sent to the scheme's trustees (who include several non-actuarial members). Explain the two foundational questions the actuary should answer before drafting a single word.",
          answer:
            "Who is the audience, and what is the purpose of the communication. Here, the audience is a mixed group including non-technical trustees, and the purpose is likely to inform the trustees' understanding of the scheme's funding position so they can fulfil their governance duties &mdash; both must be identified clearly before any drafting begins, since they shape every subsequent structural and language choice.",
          note: "A complete answer names both questions explicitly and applies them to the specific scenario given, not just states the questions generically.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what is meant by a document's 'key message', and why it should typically be identified before the document is drafted in detail.",
          answer:
            "The key message is the single most important point the communication needs to convey. Identifying it clearly beforehand helps ensure the document's structure and content genuinely support and highlight that message, rather than the message emerging only incidentally after everything else has already been written and organised around less important detail.",
          note: "Candidates should connect the key message to structure directly &mdash; it is the thing the whole document should be organised around.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why this document, given its mixed audience of technical and non-technical trustees, presents a genuine communication challenge, and one general technique for addressing it.",
          answer:
            "A single document read by a genuinely mixed readership must serve both readers who want full technical detail and readers who need the essential message in accessible terms, which a single undifferentiated version is unlikely to do well for either group. A layered approach &mdash; e.g. a plain-language executive summary alongside more detailed technical sections &mdash; lets each reader engage with the document at their own appropriate level.",
          note: "This previews the executive summary technique developed further in the structuring module; candidates need not describe it in full detail here, just identify it as a valid approach.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why correctly identifying the audience and purpose at the very start of the writing process is difficult to fully correct later, if done incorrectly.",
          answer:
            "Structure, language, and level of detail are all built around the assumed audience and purpose from the very beginning of drafting, so a fundamental misidentification typically requires substantially rewriting the document, rather than a simple, quick edit near the end &mdash; making it far more efficient to get this right upfront.",
          note: "This is genuinely important, practical guidance worth remembering: a brief planning step before drafting is a small investment that avoids a much larger correction later.",
        },
      ],
    },
    {
      id: "cp3-q3",
      title: "Restructuring a poorly organised report",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A draft report on a proposed change to a company's investment strategy presents detailed technical calculations first, followed by background context, and only states its final recommendation in the last paragraph. Explain why this structure is likely to communicate poorly to a busy board reader.",
          answer:
            "Many readers, especially senior or time-constrained ones, want to know the outcome and recommended action first, then decide how much supporting detail they need to read to be satisfied with that conclusion. Presenting detailed calculations before any context or conclusion forces the reader to work through unexplained detail before reaching the point of the document, which is likely to lose or frustrate a busy board reader before they reach the actual recommendation.",
          note: "Candidates should identify the specific structural problem (conclusion buried at the end, detail presented before context) rather than describing the issue only vaguely.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain what an executive summary is, and what it should typically contain if added to the front of this report.",
          answer:
            "An executive summary is a brief, self-contained overview at the start of a longer document, summarising the key findings, conclusions and recommendations in plain language. For this report, it should state the recommended change to investment strategy, the key reason supporting it, and any major risk or caveat, allowing a busy board reader to grasp the essential message without reading the full technical report.",
          note: "A strong answer states both the general definition and applies it specifically to what THIS report's summary should contain.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question: "Discuss how the report should be restructured, describing a logical order of sections from start to finish.",
          answer:
            "A logical structure would run: (1) executive summary, stating the recommendation and key reasons upfront; (2) background/context, explaining what prompted the review of investment strategy; (3) analysis, presenting the detailed technical calculations and reasoning; (4) conclusions and recommendations, restating and justifying the recommended action in light of the analysis; (5) appendices, for any detailed supporting calculations not essential to the main narrative.",
          note: "Candidates should present a genuinely logical flow (context before analysis, analysis before conclusion, with the executive summary leading) rather than simply relisting the original sections in a different order without justification.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question: "Comment on why detailed supporting calculations might be better placed in an appendix rather than removed from the report entirely.",
          answer:
            "An appendix lets detailed, technical supporting material remain available for a reader who wants to verify it (e.g. a technical reviewer), without cluttering the main body and obscuring the report's key message for readers who don't need that level of detail &mdash; removing it entirely would lose this genuine verification value for readers who do want it.",
          note: "This tests whether candidates understand appendices as a solution serving multiple reader needs, not simply a place to discard unwanted content.",
        },
      ],
    },
    {
      id: "cp3-q4",
      title: "Rewriting technical content in plain language",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 2,
          question:
            "A draft letter to a policyholder states: 'Your policy's surrender value has been calculated net of the applicable market value reduction, reflecting prevailing asset share conditions.' Explain what is wrong with this sentence for its intended non-technical audience.",
          answer:
            "The sentence uses multiple pieces of unexplained technical jargon ('surrender value', 'market value reduction', 'asset share') that a policyholder without actuarial or insurance background is very unlikely to understand, undermining the whole purpose of the letter, which is for the policyholder to genuinely understand their position.",
          note: "Candidates should identify the SPECIFIC jargon terms causing the problem, not just assert generically that the sentence is 'too technical'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 4,
          question: "Rewrite the sentence in plain language suitable for a policyholder with no actuarial background, preserving its genuine meaning.",
          answer:
            "For example: 'The amount you would receive if you cashed in your policy today is &pound;X. This amount has been reduced because current market conditions mean the underlying investments backing your policy are worth less than usual.' (Any plain-language rewrite that preserves the genuine substance &mdash; a reduced surrender value due to a market-based adjustment &mdash; without introducing new jargon should be credited.)",
          note: "Model rewrites will vary in exact wording; markers should credit any answer that removes the unexplained jargon while preserving accurate meaning, not penalise minor stylistic differences from this specific example.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why plain language must never be used as an excuse to omit or distort genuinely important information, even when writing very simply.",
          answer:
            "Plain language is about HOW something is expressed, not about removing or distorting WHAT is actually true &mdash; a well-written plain-language explanation should convey the same genuine substance as a technical version, just in more accessible form. Simplifying language should never come at the cost of accuracy or completeness of genuinely important information.",
          note: "This is a key distinction candidates should draw explicitly: simplicity of language versus accuracy/completeness of substance are two separate things.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why asking someone unfamiliar with the topic to read a draft can help identify remaining plain-language problems that the original writer might miss.",
          answer:
            "The writer, having worked closely with the material, can easily forget which concepts are genuinely unfamiliar to someone encountering them for the first time. A reader without that background creates genuine distance from the writer's own familiarity, helping reveal passages that are unclear or assume knowledge the intended reader wouldn't actually have.",
          note: "This connects to the broader review/editing theme developed later in the course &mdash; independent perspective catches what self-review alone often misses.",
        },
      ],
    },
    {
      id: "cp3-q5",
      title: "Presenting numerical results clearly",
      modules: "Module 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A draft report states a projected reserve figure as '&pound;4,827,341.62' for a long-term liability with genuinely significant underlying uncertainty. Explain why this level of precision is likely to be inappropriate.",
          answer:
            "Presenting a figure with more precision than is genuinely meaningful, given the significant underlying uncertainty in a long-term projection, can mislead the reader about how confident they should be in it. Sensible rounding (e.g. to the nearest &pound;100,000 or &pound;1m) would convey a more honest impression of the figure's genuine reliability.",
          note: "Candidates should connect excessive precision directly to the risk of implying false confidence, not just assert that the figure 'looks odd'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain one genuinely useful purpose a well-designed table could serve if the report needs to present this reserve figure alongside the equivalent figures for the previous three years.",
          answer:
            "A table lets a reader compare the four years' figures systematically and at a glance, which is far harder to do when the same figures are embedded within continuous prose &mdash; comparison across multiple related figures is exactly the kind of task a table serves well.",
          note: "A strong answer explicitly names COMPARISON across multiple figures as the specific benefit, not just 'tables are clearer' in general terms.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss whether a chart or a table would better communicate a rising trend in this reserve figure over the four years, and why.",
          answer:
            "A chart would likely better communicate a rising TREND, since a chart can reveal a pattern visually and immediately in a way that can be harder to perceive from a table of raw numbers alone, especially for a non-technical reader. A table would remain more useful if the reader instead needs to look up specific, precise individual figures rather than grasp the overall pattern.",
          note: "Candidates should recognise that the right choice depends on whether the point being made is a PATTERN (favouring a chart) or precise individual VALUES (favouring a table).",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the chart or table should be accompanied by a brief written explanation of what it shows and why it matters, rather than left to 'speak for itself'.",
          answer:
            "A visual or tabular presentation alone may not make its intended significance obvious to every reader, so a brief accompanying explanation helps ensure the reader draws the genuinely intended conclusion (e.g. that the rising trend reflects a specific, named cause) rather than an unintended or unclear one.",
          note: "This tests whether candidates understand that visuals rarely fully substitute for a clear, explicit statement of the key takeaway.",
        },
      ],
    },
    {
      id: "cp3-q6",
      title: "Communicating uncertainty in a projection",
      modules: "Module 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A report states a single best-estimate figure for a company's projected profit next year, with no further context. Explain why this could be insufficient for a board making a significant strategic decision based on it.",
          answer:
            "A single figure conveys no information about how much the actual outcome might reasonably differ from that estimate, which can matter significantly for a decision where the consequences of being wrong in either direction are meaningfully different &mdash; the board cannot properly weigh the risk of the decision without some sense of the genuine uncertainty involved.",
          note: "Candidates should connect the missing uncertainty information directly to the board's ability to make a genuinely informed decision.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain a practical technique for conveying a range of possible outcomes to this non-technical board, without overwhelming them with full statistical detail.",
          answer:
            "Presenting a small number of illustrative scenarios (e.g. 'best case', 'expected case', 'worst case') with brief, plain-language descriptions of what each represents, rather than a full probability distribution or detailed statistical range &mdash; this conveys the genuine existence and rough scale of uncertainty without requiring the board to understand statistical concepts.",
          note: "The scenario approach is the standard practical technique here; a strong answer names it explicitly rather than describing uncertainty communication only vaguely.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why the report should avoid stating that the projected profit 'will' be achieved, in favour of language such as 'is expected to be'.",
          answer:
            "Language implying certainty ('will') misrepresents the genuinely uncertain, assumption-based nature of most actuarial projections, potentially misleading the board about how reliable the stated figure actually is. 'Is expected to be' more honestly conveys that the figure is a projection subject to genuine uncertainty, not a guaranteed outcome.",
          note: "This is a subtle but important point about word choice alone communicating a level of confidence, independent of the actual figures presented.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why the report should avoid the opposite failure of including so many caveats and qualifications that the board struggles to identify the genuine headline message.",
          answer:
            "A document so hedged with caveats that its genuine message becomes unclear fails just as much as one presenting false certainty &mdash; the goal is honest, proportionate acknowledgement of genuine uncertainty, not endless qualification that obscures the actual conclusion the board needs to act on.",
          note: "A strong answer recognises this as the OTHER side of the central balance in this module, not a separate, unrelated concern from overstating certainty.",
        },
      ],
    },
    {
      id: "cp3-q7",
      title: "Choosing the right document type",
      modules: "Module 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A senior actuary needs to quickly inform a director of an urgent, single finding from an ongoing investigation. Explain why a brief briefing note would likely be more appropriate than a full formal report for this purpose.",
          answer:
            "A briefing note conveys key information or a recommendation concisely, suited to a reader who needs the essential point quickly, and is usually much shorter than a full report, often omitting extensive background or detailed appendices &mdash; exactly matching the urgent, single-finding nature of this communication need.",
          note: "Candidates should connect the URGENCY and SINGLE-FINDING nature of the scenario directly to why the briefing note format specifically fits, not just assert it's 'shorter and therefore better'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the appropriate structure of a full formal report would differ from this briefing note, if the same finding later needed to be documented comprehensively.",
          answer:
            "A formal report would typically cover the topic in significantly more depth, including a fuller structure (executive summary, background, detailed analysis, conclusions, and often appendices), suited to a reader wanting a comprehensive, standalone treatment of the subject, unlike the concise, single-point focus of a briefing note.",
          note: "This directly contrasts the two document types' typical structural depth, connecting to the structuring module covered earlier.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "The finding must also be presented to a wider group at an upcoming meeting. Discuss why presentation slides would require a genuinely different writing approach from the written report covering the same material.",
          answer:
            "Slides are typically viewed alongside a live spoken explanation, so they should generally contain concise key points and visual support rather than dense prose, with the accompanying spoken commentary providing the fuller explanation &mdash; a slide as dense with prose as a written report would generally be considered a poor presentation slide, since slides and speech are meant to work together, not duplicate each other.",
          note: "A strong answer explains WHY slides differ (they're paired with live speech), not just asserts that slides should be 'shorter'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why correctly identifying the specific document type required by an exam question is itself an important part of answering it well.",
          answer:
            "Each document type carries its own conventions for structure, length, and tone, so producing the wrong type of document (e.g. a full formal report when a brief note was specifically requested) would likely be marked down, regardless of how well-written the content itself is &mdash; following the specified format is part of the actual instruction given, not an optional stylistic choice.",
          note: "This is genuinely important, practical exam guidance worth stating explicitly and directly.",
        },
      ],
    },
    {
      id: "cp3-q8",
      title: "Judging tone when delivering a difficult message",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A draft letter informing a policyholder that their claim has been declined states, bluntly: 'Your claim does not meet the policy conditions and has therefore been rejected.' Explain why the tone of this sentence is likely to be inappropriate, even though it may be factually accurate.",
          answer:
            "The reader is likely to be personally and emotionally affected by this outcome, so an unnecessarily blunt, clinical tone can cause genuine additional distress, even though the underlying factual content is communicated accurately. Tone matters most precisely in situations where the content itself is already difficult for the reader to receive.",
          note: "Candidates should recognise that factual accuracy alone does not make a communication appropriate &mdash; tone is a genuinely separate dimension that must also be judged carefully.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the sentence could be rewritten to convey the same accurate outcome with a more appropriately sensitive tone.",
          answer:
            "For example: 'We have carefully reviewed your claim against the terms of your policy, and unfortunately we are unable to approve it on this occasion, as it does not meet the specific conditions set out in your policy documents. We understand this may be disappointing news.' (Any answer that preserves the accurate outcome &mdash; the claim is declined &mdash; while adopting a more sensitive, less abrupt tone should be credited.)",
          note: "Markers should credit any genuinely more sensitive rewrite that still accurately and clearly conveys the claim has been declined, without becoming vague or misleading about the actual outcome.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question: "Explain why the rewritten letter must still clearly and unambiguously communicate that the claim has been declined, even while adopting a more sensitive tone.",
          answer:
            "A sensitive tone should never come at the cost of clarity about the genuine outcome &mdash; a policyholder needs to understand clearly and without doubt that their claim has been declined, so they can take any further action available to them (e.g. querying the decision or seeking further information), which an overly softened or ambiguous message could obscure.",
          note: "This tests the balance between sensitivity and clarity explicitly &mdash; sensitivity must not be achieved by sacrificing honest clarity about the actual outcome.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why maintaining a professional register matters even in this emotionally sensitive letter, rather than becoming overly informal in an attempt to seem more sympathetic.",
          answer:
            "Actuarial and insurance communication, regardless of the emotional sensitivity of its content, represents the writer's professional judgement and the organisation they represent, so an inappropriately casual tone could undermine confidence in the professionalism and reliability of the communication, even if intended kindly &mdash; sensitivity and professionalism should be combined, not treated as opposites.",
          note: "A strong answer recognises that 'sensitive' does not mean 'casual' &mdash; a sensitive tone can and should remain professionally toned throughout.",
        },
      ],
    },
    {
      id: "cp3-q9",
      title: "Reviewing a draft for errors and inconsistencies",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A draft report states in its text that 'reserves increased by 8% over the year', but the accompanying table shows reserves rising from &pound;10.5m to &pound;11.5m (an increase of approximately 9.5%). Explain why this kind of inconsistency is a genuinely serious problem, even if it's simply a transcription slip.",
          answer:
            "An inconsistency between the text and an accompanying table can seriously undermine a reader's confidence in the whole document's accuracy, even if it's a simple transcription slip rather than a genuine analytical error &mdash; the reader has no way of knowing which figure (if either) is correct, and the discrepancy itself raises doubt about the document's overall reliability.",
          note: "Candidates should recognise that the SEVERITY of the problem (undermining trust in the whole document) doesn't depend on whether the underlying cause was a minor slip or a genuine analytical error.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain why this kind of numerical inconsistency is a specific item worth checking deliberately during a review pass, rather than assuming it would be caught by checking for clarity or tone alone.",
          answer:
            "Accuracy, clarity, tone, and structure can each independently succeed or fail, so a thorough review should check each dimension deliberately &mdash; a document could be clearly written and appropriately toned while still containing an internal numerical inconsistency that a clarity or tone check alone would not necessarily catch.",
          note: "This tests whether candidates understand review as covering several genuinely distinct dimensions, not a single, undifferentiated check.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why leaving a short amount of time between finishing a draft and reviewing it might help catch this kind of error more reliably than reviewing immediately after writing.",
          answer:
            "A short break creates some genuine distance from the writer's immediate train of thought, making it easier to read the document with fresher, more objective eyes and notice inconsistencies or errors that would otherwise be missed reviewing it immediately, while still mentally 'inside' the writing process.",
          note: "Even within exam time constraints, candidates should recognise the practical value of even a brief pause before a final review pass.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why having an independent colleague review the report, where practically possible, might catch this kind of inconsistency more reliably than the original author reviewing it alone.",
          answer:
            "An independent reviewer approaches the document without the writer's own assumptions and prior context, making them more likely to notice inconsistencies, unclear passages, or errors that the original author, having worked closely with the figures already, might overlook through over-familiarity with their own work.",
          note: "This connects to the same peer review principle applying to written work as it does to checking a spreadsheet model or a piece of technical analysis.",
        },
      ],
    },
    {
      id: "cp3-q10",
      title: "Responding to pressure to present results misleadingly",
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A client asks an actuary to omit a significant negative finding from a report, arguing it would 'only confuse' the board. Explain why the actuary should not simply comply with this request.",
          answer:
            "Withholding or obscuring a genuine limitation or negative finding to make a document appear more favourable than is genuinely warranted would mislead the board about the true position, which is a professional integrity failure, not merely a stylistic choice &mdash; professional standards require honest, accurate communication regardless of a client's preferences.",
          note: "Candidates should recognise the client's stated justification ('it would only confuse the board') as insufficient grounds to omit genuinely material information.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question: "Explain how the actuary might address the client's genuine underlying concern (that the finding could be confusing) without simply omitting it.",
          answer:
            "The actuary could present the finding in clear, plain language with an appropriate, proportionate level of explanation (rather than dense technical detail), addressing the client's genuine concern about clarity while still ensuring the board receives the complete, honest picture &mdash; the solution to a fear of 'confusion' is clearer communication, not omission of material information.",
          note: "This directly connects plain-language and structuring techniques from earlier in the course to resolving this specific ethical tension constructively.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question: "Discuss why an actuary's duty in this situation extends beyond simply satisfying the immediate client's request.",
          answer:
            "Actuarial work often has consequences extending beyond the immediate client (e.g. affecting the board's ability to make a genuinely informed decision, and potentially wider stakeholders relying on that decision), so professional standards require considering this broader responsibility, not just satisfying the client's stated preference for what to include.",
          note: "This connects to the actuary's public interest duty, extending beyond the immediate paying client to those genuinely affected by the resulting decisions.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question: "Comment on why peer review of the final report could provide an additional safeguard in a situation like this.",
          answer:
            "Independent review helps ensure a document meets the profession's standards of honesty and completeness before it's relied upon, providing a genuine safeguard against a negative finding being inappropriately omitted or downplayed, whether through external client pressure or the original author's own unconscious bias.",
          note: "This ties the module's ethical theme directly to the practical review/peer-review safeguards developed elsewhere in the course.",
        },
      ],
    },
  ],
  SA1: [
    {
      id: "sa1-q1",
      title: "Long-term health and care products for a new market entrant",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "A general insurer with no prior health and care experience is considering launching an income protection (IP) product. Define 'deferred period' and 'moratorium underwriting', and state which of these two concepts is directly relevant to IP.",
          answer:
            "The deferred period is the waiting period between the start of incapacity and when IP benefit payments begin, during which no benefit is paid. Moratorium underwriting is an approach excluding pre-existing conditions for an initial period after the policy starts, after which they become covered if not recurring. The deferred period is the concept directly relevant to IP; moratorium underwriting is more commonly associated with PMI.",
          note: "A strong answer notes both terms precisely but correctly identifies only one as directly relevant to this specific product, rather than conflating them.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why critical illness (CI) insurance requires pricing assumptions that jointly model incidence and mortality, rather than incidence alone.",
          answer:
            "A policyholder who dies before a covered condition is diagnosed will never generate a CI claim for that condition, so mortality and CI incidence compete for the same life &mdash; pricing that ignored this competing-risks interaction and used incidence rates alone (unadjusted for the possibility of death occurring first) would overstate expected claims.",
          note: "Candidates should name the competing-risks mechanism explicitly, not just assert that 'mortality matters'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two reasons why long-term care (LTC) insurance is generally considered a materially riskier product for an insurer to price and reserve for than either IP or CI.",
          answer:
            "First, LTC combines longevity risk and care-need incidence risk, and both are genuinely long-term and compounding &mdash; an error in either assumption compounds over a potentially very long claim duration, unlike a single-trigger product. Second, LTC is highly sensitive to future medical advances and economic/care-cost inflation over a very long time horizon, both of which are genuinely difficult to project decades ahead with confidence, unlike a shorter-tail product where such assumptions need only hold over a shorter window.",
          note: "Any two genuinely distinct, well-explained reasons should be accepted, including ADL-trigger subjectivity or the moral hazard point, provided they are properly justified rather than merely asserted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this new entrant should expect underwriting and pricing for these products to require more actuarial judgement than the general insurance products it already writes.",
          answer:
            "Health and care products involve genuinely long-term, medically-driven risk drivers with limited own historical data available to a new entrant, so pricing and reserving cannot rely purely on established statistical technique; genuine actuarial judgement, blended with external data and professional standards, is required to a materially greater extent than for many general insurance lines.",
          note: "This connects directly to the credibility-theory and new-product-pricing-judgement themes developed across this course.",
        },
      ],
    },
    {
      id: "sa1-q2",
      title: "Short-term products and product analysis",
      modules: "Modules 3, 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define 'health cash plan' and 'private medical insurance' (PMI), and identify the key structural difference between them.",
          answer:
            "A health cash plan pays fixed cash benefits toward the cost of routine treatments (e.g. dental, optical) regardless of the actual cost incurred, while PMI reimburses (or pays providers directly for) the actual cost of private medical treatment, typically up to specified limits. The key structural difference is fixed-cash-benefit versus cost-reimbursement.",
          note: "A complete answer states both definitions precisely and explicitly names the fixed-versus-reimbursement distinction, not just a vague sense that they're different.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why PMI is generally considered a short-tail product, and why this affects how it can be priced compared with long-term care insurance.",
          answer:
            "PMI claims are typically reported and settled relatively quickly after treatment, and premiums are usually reviewed and reset annually, so pricing need only reflect near-term medical cost assumptions rather than needing to project decades of future experience &mdash; unlike LTC, which locks in long-term assumptions at outset that cannot be easily corrected through annual repricing.",
          note: "Candidates should connect 'short-tail' directly to the practical implication that annual repricing allows regular assumption correction.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A health and care insurer is analysing its PMI product against customer needs in a market with comprehensive, free-at-point-of-use State healthcare provision. Discuss what this product analysis needs to establish about the genuine value proposition of PMI in this market.",
          answer:
            "The analysis needs to establish precisely what gap PMI fills given the State provision already available &mdash; typically speed of access, choice of provider/consultant, and comfort/privacy of treatment, rather than access to care that would otherwise be entirely unavailable. This matters because a product's genuine value proposition, and hence its appropriate pricing and marketing, depends directly on what customers cannot already obtain for free through the State system.",
          note: "This directly tests the State-provision-interaction theme; a strong answer explicitly connects product value to what the State does NOT provide, not just what the product itself contains.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a bundled product combining PMI and health cash plan benefits might require more than simply adding the two products' standalone prices together.",
          answer:
            "Bundled benefits can have genuine interactions (e.g. overlapping benefit triggers, or combined risk correlation) that a naive sum-of-standalone-prices approach would miss, so the combined product should genuinely be priced holistically rather than as two independent components simply added together.",
          note: "This connects to the general bundling-pricing principle developed for other product combinations (e.g. CI and life cover) elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa1-q3",
      title: "General business environment: distribution and external influences",
      modules: "Modules 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the roles of the State and employers in providing health and care benefits directly shape how a private insurer should design its distribution strategy.",
          answer:
            "Where the State provides comprehensive baseline provision, private products typically need to be marketed as supplementary; where employers play a large role as group purchasers, employer relationships become a genuinely central distribution channel distinct from direct-to-individual sales. The insurer's distribution strategy must therefore be tailored to the specific balance of State, employer and private provision in its target market, not designed generically.",
          note: "A strong answer explicitly connects the market's State/employer balance to concrete distribution-channel implications, not just described in the abstract.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why many jurisdictions restrict insurers from using genetic test results in underwriting, and identify one other underwriting-related regulatory restriction relevant to health and care insurance.",
          answer:
            "Restricting genetic test results aims to prevent discrimination based on predictive information the applicant may not have fully processed themselves, and to avoid discouraging people from taking medically valuable genetic tests out of fear of losing insurability &mdash; a public-interest and fairness objective beyond pure risk assessment. Another relevant restriction is limits on the underwriting factors that can be used more generally (e.g. restrictions on using certain demographic characteristics), reflecting the same broader fairness objective.",
          note: "Any genuinely valid second restriction should be accepted provided it's properly explained, not merely named.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a pandemic represents a particularly severe risk for a health and care insurer specifically, compared with many other external business-environment shocks.",
          answer:
            "A pandemic can cause significant, correlated deviations in both mortality and morbidity across a whole population simultaneously, directly affecting multiple product lines (IP, CI, PMI) at once, unlike a shock confined to a single risk driver or product line. This correlated, multi-product impact is not well captured by assumptions of independent risk across policyholders, meaning standard diversification benefits an insurer might otherwise rely on can genuinely fail precisely when they are most needed.",
          note: "Candidates should explicitly identify the CORRELATED, multi-product nature of pandemic risk as the distinguishing feature, not just describe pandemics generically as 'bad for business'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why monitoring the external business environment needs to be an ongoing exercise for a health and care insurer, rather than a one-off assessment.",
          answer:
            "Demographic, medical, economic, political, social, pandemic and climate factors all continue to evolve over time, so an assessment conducted once and never revisited would quickly become outdated, leaving the insurer's strategy and assumptions based on a stale picture of its actual operating environment.",
          note: "This connects directly to the recurring ongoing-review theme developed throughout this course.",
        },
      ],
    },
    {
      id: "sa1-q4",
      title: "Pricing a critical illness product",
      modules: "Modules 7, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A health and care insurer is pricing a one-year renewable critical illness rider with a sum insured of £50,000. The assumed annual incidence rate is 0.004, and expenses are assumed to be 10% of the gross premium, with no other loadings and no discounting within the one-year term. Using the equivalence principle, calculate the required annual premium.",
          answer:
            "Expected cost of benefits = 0.004 &times; &pound;50,000 = &pound;200. Setting gross premium P such that P &times; (1 &minus; 0.10) = &pound;200 gives P = &pound;200 / 0.90 = &pound;222.22 (to the nearest penny).",
          note: "Verified: 0.004 × 50000 = 200; 200 / 0.9 = 222.22 (Node-verified). Full marks require setting up the equivalence-principle equation explicitly, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer might choose reviewable, rather than guaranteed, premiums for a longer-term version of this product.",
          answer:
            "Reviewable premiums let the insurer adjust rates if future incidence or medical-inflation experience diverges materially from the original pricing assumptions, managing the insurer's risk over what could be a long contract term &mdash; at the cost of introducing genuine premium uncertainty for the policyholder, a direct trade-off between insurer risk management and policyholder certainty.",
          note: "A strong answer names the trade-off explicitly (insurer risk management versus policyholder certainty), not just one side of it.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why this insurer should conduct profit testing before finalising this product's pricing, rather than relying solely on the equivalence-principle premium calculated in part (i).",
          answer:
            "Profit testing projects the product's expected cashflows over its full lifetime (including expenses, lapses, and any embedded options) to confirm the pricing genuinely achieves the insurer's target profitability, which a single equivalence-principle calculation covering only expected benefit cost and expenses does not fully verify &mdash; particularly important given the genuine complexity of real product cashflow patterns.",
          note: "Candidates should recognise profit testing as a verification step distinct from, and following on from, the initial equivalence-principle premium calculation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this product's expense assumption may need particular care compared with a simple term life insurance product.",
          answer:
            "Health and care products like this often involve genuinely significant claims-handling and medical assessment costs (e.g. verifying a claimed condition against policy definitions) beyond standard policy administration, which must be appropriately captured in the expense assumption, unlike a simpler term life product with a more straightforward claims process.",
          note: "This connects to the claims-handling-expense theme developed for health and care products specifically elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa1-q5",
      title: "Taxation and the general regulatory environment",
      modules: "Modules 9, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the tax treatment of premiums and benefits directly affects the attractiveness of a health and care product to customers.",
          answer:
            "If premiums are tax-deductible or benefits are received tax-free, the effective cost to the customer or value of the benefit changes, directly affecting demand and the price the insurer can competitively charge &mdash; the same underlying cover can be genuinely more or less attractive purely because of how it is taxed.",
          note: "A complete answer explains the mechanism (effective cost/value changes), not just asserts that tax 'matters'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why employer-paid group health and care premiums might receive different tax treatment from individually purchased premiums, and why this matters for product strategy.",
          answer:
            "Many jurisdictions treat employer-provided benefits as a form of remuneration with their own specific tax rules (e.g. benefit-in-kind charges or employer deductibility), distinct from individually purchased cover. This matters because the same underlying cover can carry genuinely different net cost depending purely on the purchase channel, directly affecting which distribution channel (Module 5) is most attractive to a given customer segment.",
          note: "A strong answer connects this back to distribution-channel strategy, not just describes the tax difference in isolation.",
        },
        {
          label: "(iii)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between prudential and conduct regulation, and explain which is more directly relevant to restrictions on using genetic test results in underwriting.",
          answer:
            "Prudential regulation focuses on an insurer's financial soundness and ability to meet obligations, while conduct regulation focuses on how insurers treat customers, including fair and non-discriminatory treatment. Restrictions on genetic test results are a conduct-regulation matter, since they concern fair treatment of applicants rather than the insurer's financial soundness.",
          note: "Candidates should give a precise definition of both terms before correctly attributing the genetic-testing restriction to conduct regulation specifically.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "Comment on why an independent regulatory body, rather than a government department directly, typically oversees insurance regulation.",
          answer:
            "An independent regulator can apply technical expertise and maintain consistency of approach somewhat insulated from short-term political pressures, though it typically still operates within a legal framework set by government, balancing genuine technical independence against democratic accountability.",
          note: "A strong answer acknowledges both the benefit (technical independence) and the constraint (remaining accountable within a legal framework), not just one side.",
        },
      ],
    },
    {
      id: "sa1-q6",
      title: "Solvency II capital requirements for a health and care insurer",
      modules: "Modules 11, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A health and care insurer's long-term care book has a best estimate liability (BEL) of &pound;10,000,000. The risk margin is assessed as 6% of BEL. The Solvency Capital Requirement (SCR) is assessed as 15% of BEL, and the Minimum Capital Requirement (MCR) is 25% of the SCR. Calculate (a) the total technical provisions, (b) the SCR, and (c) the MCR.",
          answer:
            "(a) Risk margin = 6% &times; &pound;10,000,000 = &pound;600,000, so total technical provisions = &pound;10,000,000 + &pound;600,000 = &pound;10,600,000. (b) SCR = 15% &times; &pound;10,000,000 = &pound;1,500,000. (c) MCR = 25% &times; &pound;1,500,000 = &pound;375,000.",
          note: "Verified: 0.06×10,000,000=600,000; TP=10,600,000; 0.15×10,000,000=1,500,000; 0.25×1,500,000=375,000 (Node-verified). Marks are typically split across the three sub-calculations.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the risk margin calculated in part (i) is likely to represent a proportionately larger share of total technical provisions for this long-term care book than it would for a short-tail PMI book.",
          answer:
            "The risk margin compensates for the cost of holding capital against non-hedgeable risks over the liability's remaining lifetime, and a long-duration product like LTC carries this capital cost for far longer than a short-tail product like PMI, making the risk margin proportionately larger for LTC given its genuinely extended time horizon.",
          note: "A strong answer explicitly connects duration to the capital-cost-over-time mechanism, not just asserts LTC is 'riskier'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss one reason this insurer might choose to develop an internal model rather than use the Solvency II standard formula to calculate its SCR.",
          answer:
            "An internal model can better reflect the insurer's own genuine risk profile (e.g. its specific correlation structure between morbidity risks) than a generic standard formula calibrated across the whole industry, potentially producing a more risk-sensitive and possibly lower capital requirement, though this requires regulatory approval and significant development investment.",
          note: "Any one genuinely valid, well-explained reason should be accepted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's Own Risk and Solvency Assessment (ORSA) should include forward-looking stress testing, in addition to the point-in-time calculations in part (i).",
          answer:
            "The calculations in part (i) capture the insurer's current risk position, but not how its solvency might evolve under future adverse scenarios (e.g. a pandemic or medical inflation shock), so forward-looking stress testing provides genuinely additional insight into resilience over time that a single point-in-time calculation cannot.",
          note: "This connects the numeric SCR/MCR calculation directly to the ORSA's genuinely forward-looking purpose.",
        },
      ],
    },
    {
      id: "sa1-q7",
      title: "Comparative regulation and professional standards",
      modules: "Modules 13, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a health and care insurer operating outside the Solvency II framework might still be subject to a broadly similar risk-based capital regime.",
          answer:
            "Different jurisdictions have developed their own risk-based capital frameworks (e.g. risk-based capital, RBC, systems used elsewhere) that share Solvency II's broad goal of ensuring adequate capital relative to risk, but differ in technical detail, calibration, and structure, reflecting genuinely different regulatory traditions pursuing a similar underlying objective.",
          note: "A strong answer recognises Solvency II as one example of a risk-based capital regime, not the only possible approach.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why an SA1 candidate should focus on understanding general regulatory principles, rather than memorising the detail of a single specific regulatory regime.",
          answer:
            "SA1 exam scenarios often present unfamiliar or fictional regulatory regimes, so understanding the underlying principles different approaches share (e.g. prudential soundness, fair conduct) equips candidates to reason about genuinely novel regulatory contexts, whereas memorised detail specific to one real regime may not transfer directly to an unfamiliar scenario.",
          note: "This connects directly to SA1's stated exam-format approach of testing applied judgement over memorised, jurisdiction-specific detail.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an actuary holding a statutory reporting role for this insurer may have personal professional responsibilities distinct from the insurer's general corporate obligations.",
          answer:
            "A statutory actuarial role typically carries personal accountability for specific technical opinions (e.g. on reserve adequacy), meaning the individual actuary can face professional consequences distinct from, and sometimes in tension with, the wider commercial interests of the insurer employing them.",
          note: "A strong answer names this personal-accountability structure explicitly as a deliberate design feature, not merely a technicality.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 3,
          question:
            "The insurer's finance director asks the Chief Actuary to adopt more optimistic long-term care morbidity assumptions to improve reported profit. Comment on how the Chief Actuary should respond.",
          answer:
            "Professional standards and codes of conduct place the actuary's overriding duty on sound, honest technical judgement, meaning commercial pressure to adopt a particular assumption does not override this obligation; the Chief Actuary should maintain assumptions genuinely supported by the evidence, clearly document the reasoning, and escalate through appropriate channels if pressure continues, rather than adjusting the assumption simply to satisfy the request.",
          note: "This is a directly testable ethical scenario; a strong answer explicitly refuses to simply comply while describing a constructive, professional path forward.",
        },
      ],
    },
    {
      id: "sa1-q8",
      title: "Capital management and reinsurance",
      modules: "Modules 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a health and care insurer might hold capital buffers above its calculated SCR, rather than managing capital exactly to the regulatory minimum.",
          answer:
            "A buffer provides genuine resilience against adverse experience (e.g. a pandemic morbidity shock) or assumption changes without immediately breaching regulatory thresholds, giving the insurer time and flexibility to respond before facing urgent regulatory intervention, unlike managing capital exactly to the SCR which offers no such margin for error.",
          note: "A strong answer connects the buffer directly to the stress-testing/ORSA themes developed elsewhere in this course.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why excess of loss reinsurance is particularly well suited to protecting this insurer against a pandemic-driven morbidity shock, compared with quota share reinsurance.",
          answer:
            "Excess of loss reinsurance responds when aggregate claims from an event exceed a specified threshold, directly targeting the correlated, catastrophic loss pattern a pandemic creates, whereas quota share cedes a fixed proportion of every individual policy's risk regardless of whether losses are correlated, providing less targeted protection against this specific type of aggregate, correlated shock.",
          note: "Candidates should explicitly distinguish the AGGREGATE, CORRELATED nature of the risk excess of loss targets, not just describe both structures generically.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "This insurer is considering raising its retention level (reducing reinsurance cover) on its critical illness book to increase expected retained profit. Discuss the genuine trade-off involved in this decision.",
          answer:
            "A higher retention keeps more premium and expected profit potential with the insurer, but exposes it to greater volatility and capital strain from adverse incidence experience; a lower retention (more reinsurance) reduces volatility but cedes more expected profit to the reinsurer &mdash; this is a genuine risk-return trade-off that should be assessed against the insurer's specific risk appetite and current capital position, not decided on expected profit alone.",
          note: "A strong answer explicitly frames this as a risk-return trade-off requiring judgement against risk appetite, not a straightforward 'more retention is better' conclusion.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why reinsurer counterparty risk should be considered when this insurer designs its reinsurance programme.",
          answer:
            "Ceding risk to a reinsurer only provides genuine protection if the reinsurer remains able to pay recoveries when needed, so the insurer should diversify across multiple reinsurers and monitor reinsurer credit quality, recognising that reinsurance transfers risk rather than eliminating it entirely.",
          note: "This connects to the general counterparty/credit risk theme developed elsewhere across the actuarial curriculum.",
        },
      ],
    },
    {
      id: "sa1-q9",
      title: "Asset-liability management for a long-term care book",
      modules: "Module 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 4,
          question:
            "Explain why asset-liability management (ALM) is particularly important for a long-term care insurance book, and identify one specific technique the insurer could use.",
          answer:
            "A long-duration LTC liability's value is highly sensitive to interest rate changes over a very long horizon, so ALM is needed to protect the insurer's balance sheet from adverse rate movements. One specific technique is duration matching (or immunisation) &mdash; holding assets whose value moves similarly to the liabilities in response to interest rate changes, e.g. through cashflow-matched bond portfolios.",
          note: "A strong answer names a genuine technique (duration matching, immunisation, or cashflow matching), not just asserts that 'assets and liabilities should be matched'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer might also value holding a meaningful allocation to liquid assets, even though most of its liabilities are long-duration.",
          answer:
            "Even a predominantly long-duration book has some near-term cashflow needs (claims payments, expenses), so genuine liquidity risk management requires holding sufficient liquid assets to meet these without being forced to sell less liquid, longer-duration assets at a potentially unfavourable time.",
          note: "Candidates should recognise that duration matching alone does not fully address liquidity risk; a separate, near-term liquidity allocation is also needed.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why inflation-linked assets might be a valuable component of this insurer's ALM strategy for its LTC book specifically.",
          answer:
            "If LTC benefit payments are linked to care-cost inflation, holding assets whose value also responds to inflation helps protect the insurer against inflation eroding the real matching quality of a purely nominal asset portfolio, directly addressing the genuinely important medical/care-cost inflation risk driver identified elsewhere for this product.",
          note: "A strong answer connects this directly to the specific inflation-sensitivity of LTC benefits, not inflation-linked assets in the abstract.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why ALM alone cannot fully address this insurer's overall risk position for its LTC book.",
          answer:
            "ALM is an asset-side tool addressing financial (interest rate, inflation) risk, but cannot address liability-side morbidity and longevity risk drivers, which instead require separate techniques such as reinsurance and sound reserving; ALM therefore addresses only part of the insurer's overall risk position, not the whole of it.",
          note: "This connects directly to the point that ALM and reinsurance/reserving are complementary, not substitute, risk management tools.",
        },
      ],
    },
    {
      id: "sa1-q10",
      title: "Analysis of experience and surplus",
      modules: "Modules 19, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A health and care insurer expected 500 critical illness claims in the year, each averaging &pound;2,000 in expected cost, but actually experienced 540 claims at the same average cost. Calculate the expected total claims cost, the actual total claims cost, and the resulting experience variance, stating whether it is favourable or adverse from the insurer's perspective.",
          answer:
            "Expected total claims cost = 500 &times; &pound;2,000 = &pound;1,000,000. Actual total claims cost = 540 &times; &pound;2,000 = &pound;1,080,000. The variance is &pound;1,080,000 &minus; &pound;1,000,000 = &pound;80,000, which is adverse (a loss relative to assumption) since actual claims cost exceeded the expected amount.",
          note: "Verified: 500×2000=1,000,000; 540×2000=1,080,000; difference=80,000 (Node-verified). Marks are typically split across the expected figure, actual figure, and correctly labelling the variance as adverse.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the insurer should investigate whether this variance reflects genuine random fluctuation or a persistent trend, before deciding whether to revise its incidence assumption.",
          answer:
            "A single period's adverse experience could be genuine random noise around an unchanged underlying rate, so distinguishing genuine trend change from random fluctuation avoids over-reacting to noise while still catching genuinely important shifts &mdash; revising the assumption based on noise alone could introduce unnecessary pricing or reserving change, while ignoring a genuine trend could leave the insurer under-reserved or mispriced going forward.",
          note: "A strong answer explicitly frames this as a statistical-significance judgement, not simply 'more data is needed' without explaining why.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the insurer's overall surplus analysis should separately identify the 'expected' release of margins from experience variances such as the one in part (i).",
          answer:
            "The expected component reflects prudent margins built into original pricing/reserving assumptions that are expected to emerge as profit purely through the passage of time, forming a predictable baseline; separately identifying experience variances (like the adverse claims variance above) reveals genuinely unexpected deviations from that baseline, which is what actually informs sound management action &mdash; conflating the two would obscure whether results moved as planned or due to a genuine, unexpected issue.",
          note: "A strong answer explicitly explains why conflating expected release and experience variance would reduce the analysis's diagnostic value.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this experience finding should feed back into both the insurer's pricing and reserving assumptions, not just one of the two.",
          answer:
            "The same underlying experience (higher-than-assumed incidence) affects both the pricing of new business going forward and the adequacy of reserves already held for existing business, so a genuinely complete response to this finding must consider both applications together, not address only pricing or only reserving in isolation.",
          note: "This connects directly to the theme that experience analysis is a genuinely central activity feeding into multiple other technical areas.",
        },
      ],
    },
    {
      id: "sa1-q11",
      title: "Assessing, recommending and implementing a strategic option",
      modules: "Modules 21, 22, 23",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A health and care insurer with an established PMI book is considering entering the long-term care insurance market. Discuss two factors the insurer should consider when assessing this strategic option.",
          answer:
            "First, capital impact: LTC is a materially more capital-intensive product than PMI (given its larger risk margin and long-duration risk), so the insurer must assess whether it has, or can raise, sufficient capital to support this new business. Second, risk profile fit: LTC introduces genuinely new, compounded longevity and care-need risk drivers the insurer has no existing experience managing, unlike its established, shorter-tail PMI risk, so the insurer must assess whether it has or can build the necessary underwriting, pricing and reserving expertise.",
          note: "Any two genuinely distinct, well-justified factors should be accepted, provided they are assessed against this insurer's SPECIFIC circumstances, not stated generically.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Assuming the insurer has adequate capital headroom but limited in-house LTC expertise, recommend a course of action for entering this market, with justification.",
          answer:
            "A phased entry via a reinsurance-supported launch is recommended: partnering with a reinsurer experienced in LTC provides access to pricing expertise, data and capital support the insurer currently lacks, while a phased rollout (e.g. starting with a single simplified product variant before broader expansion) limits the insurer's exposure while it builds its own capability, rather than launching a full, complex product range immediately based on borrowed expertise alone.",
          note: "Credit should be given for any well-justified, genuinely reasoned recommendation that explicitly addresses the stated capability gap, not just a plausible-sounding conclusion asserted without justification.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain one genuine implication of this recommended reinsurance-supported entry for the insurer's reported profit pattern.",
          answer:
            "Ceding a share of risk to the reinsurance partner typically also cedes a share of expected profit, so the insurer's own reported profit from this new LTC business will likely be lower and less volatile than if it retained the risk entirely itself &mdash; a genuine trade-off between reduced volatility/risk and reduced expected retained profit.",
          note: "A strong answer explicitly traces the capital/reinsurance decision through to its concrete effect on reported financial results.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this recommendation should specify how its success will be monitored going forward, rather than treating the decision as final once implemented.",
          answer:
            "A strategy's success is rarely fully knowable at the point of recommendation, so specifying how outcomes will be tracked (e.g. against experience-analysis and surplus-analysis metrics) shows the recommendation is genuinely designed to be verified and adjusted over time, rather than a one-off, unchecked decision.",
          note: "This connects directly to this course's recurring ongoing-monitoring theme, applied specifically to strategic decision-making.",
        },
      ],
    },
    {
      id: "sa1-q12",
      title: "National healthcare systems and best practice",
      modules: "Modules 24, 25, 26",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why understanding a country's national healthcare system is essential context before assessing private health and care insurance strategy in that market.",
          answer:
            "The scope, quality, and cost of State-provided healthcare directly determines what genuine gaps private insurance needs to fill, so a sound strategic assessment in any market must start from a clear understanding of that market's specific national healthcare system, rather than assuming a generic private-insurance role that applies everywhere equally.",
          note: "A complete answer connects national system understanding directly to product/strategy assessment, not just describes healthcare systems in isolation.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why identifying 'best practice' in health and care insurance requires genuine judgement about context, rather than assuming one market's approach transfers directly to another.",
          answer:
            "An approach that works well in one market's specific regulatory, cultural, and healthcare-system context may not transfer straightforwardly to a genuinely different context, so identifying best practice requires assessing WHY an approach works in its original context, not just copying it directly &mdash; 'best practice' genuinely means best-for-context, not a single universal standard.",
          note: "A strong answer explicitly explains why context-blind copying is risky, not just asserts that context 'matters'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A health and care insurer must decide how to balance highly granular, risk-reflective underwriting against broader risk-pooling for access and equity reasons in a new market. Discuss this trade-off and how the insurer might reasonably resolve it.",
          answer:
            "Very granular, individually risk-reflective underwriting maximises fairness between individual policyholders (lower-risk customers pay less) but can reduce broader risk-pooling and access for higher-risk individuals, potentially excluding those with greatest genuine need; broader pooling improves access and equity but can be perceived as less fair to lower-risk customers who effectively subsidise higher-risk ones. A reasonable resolution balances these by using risk-reflective pricing within limits (e.g. avoiding certain highly sensitive rating factors, per regulatory restrictions), combined with broader pooling for the most severe or unpredictable risks, rather than maximising either fairness-to-individuals or access-for-all in isolation.",
          note: "A strong answer explicitly frames this as a genuine trade-off with no single universally correct answer, and proposes a balanced, justified resolution rather than favouring one side without acknowledging the cost to the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving a genuinely complex health and care strategic issue like this one typically requires drawing on multiple SA1 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific trade-off genuinely required drawing on product and market understanding, regulatory constraints, and conduct/fairness principles together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once, not a single isolated calculation or rule.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA1 syllabus.",
        },
      ],
    },
  ],
  SA2: [
    {
      id: "sa2-q1",
      title: "Pricing a term assurance product",
      modules: "Modules 1, 2, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A life insurer is pricing a one-year renewable term assurance policy with a sum insured of &pound;100,000. The assumed annual mortality rate is 0.003, and expenses are assumed to be 8% of the gross premium, with no discounting within the one-year term. Using the equivalence principle, calculate the required annual premium.",
          answer:
            "Expected cost of benefits = 0.003 &times; &pound;100,000 = &pound;300. Setting gross premium P such that P &times; (1 &minus; 0.08) = &pound;300 gives P = &pound;300 / 0.92 = &pound;326.09 (to the nearest penny).",
          note: "Verified: 0.003 × 100000 = 300; 300 / 0.92 = 326.09 (Node-verified). Full marks require setting up the equivalence-principle equation explicitly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's mortality assumption should reflect projected future mortality improvement, not just current mortality rates, if pricing a longer-term version of this product.",
          answer:
            "A multi-year term assurance contract's cost depends on mortality rates throughout the whole term, and mortality has historically improved over time, so pricing using only current, unprojected mortality rates could materially overstate the product's true expected cost over a longer term.",
          note: "This connects directly to CS2's mortality-projection material applied to a genuine pricing context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why this insurer might offer a convertible term assurance option, and why it should price this option explicitly rather than folding its cost into the base premium's general margin.",
          answer:
            "A convertible option gives valuable protection against future health deterioration making later cover difficult to obtain, but since policyholders are more likely to exercise it when financially advantageous (health has genuinely worsened), it carries a genuine anti-selective cost that should be priced explicitly, rather than assumed to be self-funding within a generic margin.",
          note: "A strong answer explicitly names the anti-selection mechanism, not just asserts that options 'have a cost'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why profit testing should be carried out before finalising this product's pricing, beyond the equivalence-principle calculation in part (i).",
          answer:
            "Profit testing projects the product's expected cashflows over its full lifetime (including expenses, lapses, and any embedded options) to confirm the pricing genuinely achieves the insurer's target profitability, which a single equivalence-principle calculation covering only expected mortality cost and expenses does not fully verify.",
          note: "This connects profit testing as a verification step distinct from, and following on from, the initial pricing calculation.",
        },
      ],
    },
    {
      id: "sa2-q2",
      title: "With-profits bonus philosophy and pricing",
      modules: "Modules 3, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the role of smoothing in a with-profits fund's bonus mechanism, and why it requires genuine actuarial judgement rather than a mechanical formula.",
          answer:
            "Smoothing deliberately dampens the volatility a policyholder would otherwise experience from directly-invested returns by combining regular and final bonuses; setting bonus rates requires balancing fair treatment of policyholders (reflecting the fund's actual experience over time) against smoothing volatility and maintaining solvency, a genuine judgement call with no single mechanically correct answer.",
          note: "A strong answer names both sides of the balance (fairness versus smoothing/solvency), not just one.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why with-profits bonus-setting raises a genuine inter-generational fairness issue that most other life insurance pricing decisions do not.",
          answer:
            "A with-profits fund pools assets across policyholders who joined at different times, so bonus decisions can transfer value between generations (e.g. overly generous bonuses now could disadvantage future policyholders' claims), requiring the insurer to genuinely balance fairness across the whole fund over time, not just between the insurer and a single policyholder as in most other pricing decisions.",
          note: "Candidates should explicitly identify the MULTI-GENERATION aspect as the distinguishing feature, not just restate that fairness matters generally.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a guaranteed annuity option (GAO) embedded in an older with-profits pension policy could become severely costly to the insurer decades after the policy was sold.",
          answer:
            "A GAO guarantees conversion of the fund into an annuity at a specified rate; if market annuity rates fall well below the guaranteed rate (driven by falling interest rates and improving longevity), the guarantee becomes deeply valuable to policyholders and correspondingly costly to the insurer, even though it may have looked unlikely to bite when originally priced.",
          note: "A strong answer explains WHY the option's cost can crystallise decades later, not just that GAOs exist.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why conduct regulation for with-profits business specifically emphasises transparent governance of bonus-setting discretion.",
          answer:
            "Since with-profits bonus-setting inherently involves genuine insurer discretion affecting different generations of policyholders differently, conduct regulation requires clear governance and disclosure of how that discretion is exercised, addressing a genuinely specific risk not present in products with no comparable discretionary element.",
          note: "This connects directly to the inter-generational fairness theme raised in part (ii).",
        },
      ],
    },
    {
      id: "sa2-q3",
      title: "Annuity pricing and the guaranteed annuity option",
      modules: "Modules 4, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A pension policy with an accumulated fund of &pound;100,000 carries a guaranteed annuity option offering a guaranteed annuity rate of 10% per annum. Current market annuity rates for an equivalent annuity would provide only 6.5% per annum. Calculate the guaranteed annual income, the market-rate annual income, and the extra annual cost to the insurer of honouring the guarantee.",
          answer:
            "Guaranteed income = 10% &times; &pound;100,000 = &pound;10,000 per annum. Market-rate income = 6.5% &times; &pound;100,000 = &pound;6,500 per annum. Extra annual cost = &pound;10,000 &minus; &pound;6,500 = &pound;3,500 per annum, payable for as long as the annuitant survives.",
          note: "Verified: 100000×0.10=10,000; 100000×0.065=6,500; difference=3,500 (Node-verified). Marks are typically split across the three sub-calculations.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why annuity pricing requires the opposite mortality improvement sensitivity to term assurance pricing.",
          answer:
            "Since an annuity's cost increases the longer the annuitant survives, understating future mortality improvement would understate the annuity's true cost, exactly the opposite pricing risk to a protection product where understating improvement would overstate cost &mdash; the insurer's risk exposure is inverted between the two product types.",
          note: "A strong answer explicitly names this inversion, connecting it to CS2's mortality-improvement material.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the Solvency II matching adjustment is particularly relevant to this insurer's annuity book, and one condition it must satisfy to use it.",
          answer:
            "The matching adjustment allows discounting long-term, predictable annuity liabilities using a higher rate reflecting the return on assets held to back them, recognising the illiquidity premium available on a held-to-maturity matched portfolio; to use it, the insurer must demonstrate genuinely strict cashflow matching between assets and liabilities, since inappropriate use could materially overstate financial strength.",
          note: "A strong answer explains both why it's relevant AND the strict matching condition required to use it, not just one or the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer might combine reinsurance with the matching adjustment to manage its annuity book's risk, rather than relying on a single technique.",
          answer:
            "Reinsurance transfers longevity risk to a specialist counterparty, while the matching adjustment addresses interest rate risk through genuine asset-liability matching; each technique addresses a genuinely different risk driver, so combining them can achieve more efficient, diversified risk management than either alone.",
          note: "This connects directly to the best-practice theme of combining complementary risk management tools rather than relying on a single approach.",
        },
      ],
    },
    {
      id: "sa2-q4",
      title: "Unit-linked charging and embedded guarantees",
      modules: "Module 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why setting a unit-linked policy's annual management charge requires genuine equivalence-principle-style analysis, even though it appears to be a simple percentage fee.",
          answer:
            "The charge must be set so the expected present value of charge income covers the expected present value of expenses and required profit margin over the policy's expected lifetime, exactly the same underlying pricing logic as a traditional premium calculation, just expressed as an ongoing deduction rather than an upfront premium.",
          note: "A strong answer explicitly connects charge-setting to genuine pricing logic, not just describes it as an administrative fee.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why higher-than-assumed early lapses are particularly damaging to a unit-linked product's profitability, compared with a product priced with a larger upfront margin.",
          answer:
            "Since unit-linked profit largely derives from ongoing charges rather than an upfront margin, higher-than-assumed early lapses directly reduce the insurer's opportunity to recoup initial expenses and earn its intended margin, potentially turning an expected-profitable policy into a loss-making one.",
          note: "Candidates should connect this directly to new-business-strain and expense-recovery themes developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "This insurer is considering adding a guaranteed minimum death benefit to its unit-linked product. Discuss why pricing this guarantee requires materially more complex techniques than pricing the base unit-linked charges alone.",
          answer:
            "The guarantee only bites if the fund value falls below the guaranteed level at the point of claim, so pricing it requires modelling the genuine, path-dependent probability and cost of this scenario across many possible future market outcomes &mdash; a stochastic, option-pricing-style exercise, unlike the base charges which can be priced using simpler expected-cashflow analysis.",
          note: "A strong answer explicitly connects this to embedded-option pricing techniques (e.g. stochastic modelling), not just asserts the guarantee 'adds complexity'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the insurer might use derivatives to hedge the cost of this guarantee, rather than relying purely on the charges collected to fund it.",
          answer:
            "Derivatives (e.g. equity put options) can efficiently and directly offset the guarantee's payoff pattern under adverse market scenarios, providing a more targeted and reliable risk management tool than simply hoping collected charges are sufficient to cover the guarantee's genuinely uncertain, path-dependent cost.",
          note: "This connects directly to CM2's derivative-hedging material applied to a genuine embedded-guarantee context.",
        },
      ],
    },
    {
      id: "sa2-q5",
      title: "Taxation and the regulatory environment",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the tax treatment of a with-profits fund's investment returns must be reflected in the fund's bonus-setting philosophy.",
          answer:
            "Tax charged on the fund's investment income and gains directly reduces the returns available to support bonuses, so bonus-setting must genuinely account for the fund's after-tax investment performance, not its gross returns, or bonuses could be set at an unsustainable level relative to what is genuinely available to distribute.",
          note: "A strong answer explicitly distinguishes gross from after-tax performance, not just asserts that 'tax matters'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an insurer's own corporate tax position must be incorporated into profit testing, beyond the policyholder-level tax treatment of premiums and benefits.",
          answer:
            "Tax payable on the insurer's own profits reduces the genuine after-tax return achieved from a given pre-tax margin, so profit testing conducted on a pre-tax basis alone could materially overstate a product's genuine economic attractiveness to the insurer.",
          note: "This connects directly to CB1's after-tax cost-of-capital material applied to life insurance profit testing.",
        },
        {
          label: "(iii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between prudential and conduct regulation, and explain why with-profits business raises a conduct-regulation concern that most other life insurance products do not.",
          answer:
            "Prudential regulation focuses on an insurer's financial soundness and ability to meet obligations, while conduct regulation focuses on how insurers treat customers, including fair and transparent treatment. With-profits business raises a genuinely distinct conduct concern because bonus-setting inherently involves insurer discretion affecting different policyholder generations differently, requiring specific governance and disclosure not needed for products with fixed, contractually-determined benefits.",
          note: "A strong answer gives precise definitions of both regulatory types before correctly identifying the with-profits-specific conduct concern.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an independent regulatory body, rather than a government department directly, typically oversees life insurance regulation.",
          answer:
            "An independent regulator can apply technical expertise and maintain consistency of approach somewhat insulated from short-term political pressures, though it typically still operates within a legal framework set by government, balancing technical independence against democratic accountability.",
          note: "A strong answer acknowledges both the benefit (technical independence) and the constraint (remaining accountable within a legal framework).",
        },
      ],
    },
    {
      id: "sa2-q6",
      title: "Solvency II capital requirements for a life insurer",
      modules: "Modules 10, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A life insurer's annuity book has a best estimate liability (BEL) of &pound;20,000,000. The risk margin is assessed as 5% of BEL. The Solvency Capital Requirement (SCR) is assessed as 12% of BEL, and the Minimum Capital Requirement (MCR) is 25% of the SCR. Calculate (a) the total technical provisions, (b) the SCR, and (c) the MCR.",
          answer:
            "(a) Risk margin = 5% &times; &pound;20,000,000 = &pound;1,000,000, so total technical provisions = &pound;20,000,000 + &pound;1,000,000 = &pound;21,000,000. (b) SCR = 12% &times; &pound;20,000,000 = &pound;2,400,000. (c) MCR = 25% &times; &pound;2,400,000 = &pound;600,000.",
          note: "Verified: 0.05×20,000,000=1,000,000; TP=21,000,000; 0.12×20,000,000=2,400,000; 0.25×2,400,000=600,000 (Node-verified).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why longevity risk and mortality risk are modelled as genuinely distinct, and potentially offsetting, risk modules under Solvency II for an insurer writing both annuity and protection business.",
          answer:
            "Longevity risk (annuitants living longer than expected) and mortality risk (policyholders dying sooner than expected) move in opposite directions for the insurer's balance sheet, so an insurer with both business types has some natural diversification benefit that a pure single-product insurer would not have, which Solvency II's capital calculation should reflect.",
          note: "A strong answer explicitly explains the inverted relationship, not just names both risk types.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss one reason this insurer might develop an internal model to calculate its SCR for this annuity book, rather than using the standard formula.",
          answer:
            "An internal model can better reflect the insurer's own genuine policyholder behaviour and mortality experience (e.g. specific to its annuitant population) than a generic standard formula calibrated across the industry, potentially producing a more risk-sensitive capital requirement, though this requires regulatory approval and significant development investment.",
          note: "Any one genuinely valid, well-explained reason should be accepted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's ORSA should consider combined, correlated stress scenarios (e.g. falling interest rates alongside worsening lapse experience), rather than assessing each risk module in isolation.",
          answer:
            "These risks can interact in genuinely important ways under stress, so a forward-looking assessment of overall solvency needs must consider combined, correlated scenarios relevant to the insurer's specific risk profile, not just each standard formula risk module's standalone impact.",
          note: "This connects the numeric SCR/MCR calculation directly to the ORSA's genuinely forward-looking, combined-scenario purpose.",
        },
      ],
    },
    {
      id: "sa2-q7",
      title: "Profit and value reporting for a diversified life insurer",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A life insurer's protection business has net assets of &pound;4,000,000 and is expected to generate future profits of &pound;1,500,000, &pound;1,800,000 and &pound;2,100,000 in the next three years respectively. Using a risk discount rate of 7% per annum, calculate the present value of future profits (PVFP) and the resulting embedded value.",
          answer:
            "PVFP = &pound;1,500,000/1.07 + &pound;1,800,000/1.07&sup2; + &pound;2,100,000/1.07&sup3; = &pound;1,401,869 + &pound;1,572,301 + &pound;1,714,114 = &pound;4,688,284 (to the nearest pound). Embedded value = net assets + PVFP = &pound;4,000,000 + &pound;4,688,284 = &pound;8,688,284.",
          note: "Verified: PVFP=4,688,284.41; EV=8,688,284.41 (Node-verified, rounded to nearest pound in the model answer). Marks are typically split between the PVFP calculation and the final embedded value figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's statutory reported profit for this protection business might appear materially lower than the embedded value calculated in part (i) would suggest, particularly in the years immediately following a period of strong new business growth.",
          answer:
            "Statutory reporting requires prudent reserves to be set up at the point of sale (new business strain), depressing reported early profit even though embedded value, capturing the full expected future profit stream in present-value terms, may already be genuinely positive from inception.",
          note: "A strong answer explains this as consistent, not contradictory, results from two genuinely different reporting bases.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the contractual service margin (CSM) under IFRS 17 is likely to be a more significant reporting concept for this insurer's annuity business than for its protection business.",
          answer:
            "The CSM represents unearned future profit released gradually as service is provided, directly shaping how a product's total expected profit is spread across future reporting periods; since annuity business typically has a genuinely much longer duration than protection business, its total expected profit is spread across many more future periods, making the CSM's role in shaping the reported profit PATTERN correspondingly more significant.",
          note: "A strong answer explicitly connects the CSM's significance to product DURATION, not just names the CSM generically.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an analysis of embedded value movement broken down by product line (protection, with-profits, annuity) is more useful to this insurer's management than a single combined total.",
          answer:
            "Decomposing the year-on-year embedded value change by product line reveals which specific parts of a diversified book are genuinely driving value creation or destruction, more actionable for management decision-making than a single aggregated whole-company figure that could mask offsetting movements between product lines.",
          note: "This connects directly to the surplus-analysis decomposition theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa2-q8",
      title: "Analysis of experience and surplus",
      modules: "Module 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A life insurer's protection book of 1,000 policies had an assumed annual lapse rate of 8%, but actually experienced a lapse rate of 9.5% over the year. Calculate the expected number of lapses, the actual number of lapses, and the resulting experience variance in the number of lapses.",
          answer:
            "Expected lapses = 1,000 &times; 8% = 80. Actual lapses = 1,000 &times; 9.5% = 95. The variance is 95 &minus; 80 = 15 additional lapses above the assumed level, an adverse variance given the new-business-strain implications of higher-than-expected early lapses.",
          note: "Verified: 1000×0.08=80; 1000×0.095=95; difference=15 (Node-verified). Marks are typically split across the expected figure, actual figure, and correctly labelling the variance.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the insurer should investigate whether this lapse variance reflects genuine random fluctuation or a persistent trend before revising its lapse assumption.",
          answer:
            "A single period's adverse experience could be genuine random noise around an unchanged underlying rate, so distinguishing genuine trend change from random fluctuation avoids over-reacting to noise while still catching genuinely important shifts that should inform revised pricing and reserving assumptions.",
          note: "A strong answer frames this explicitly as a statistical-significance judgement, not simply 'more data is needed'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the insurer's overall surplus analysis should separately identify the 'expected' release of margins from the lapse experience variance calculated in part (i).",
          answer:
            "The expected component reflects prudent margins built into original pricing/reserving assumptions that are expected to emerge as profit purely through the passage of time, forming a predictable baseline; separately identifying the lapse experience variance reveals a genuinely unexpected deviation from that baseline, which is what actually informs sound management action, rather than conflating planned and unplanned sources of surplus movement.",
          note: "A strong answer explicitly explains why conflating expected release and experience variance would reduce the analysis's diagnostic value.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this lapse experience finding should feed back into both the insurer's pricing and reserving assumptions, not just one of the two.",
          answer:
            "The same underlying experience (higher-than-assumed lapses) affects both the pricing of new business going forward and the adequacy of reserves already held for existing business, so a genuinely complete response to this finding must consider both applications together.",
          note: "This connects directly to the theme that experience analysis is a genuinely central activity feeding into multiple other technical areas.",
        },
      ],
    },
    {
      id: "sa2-q9",
      title: "Strategic decision: entering the bulk annuity market",
      modules: "Modules 13, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A life insurer with strong protection business but no prior annuity experience is considering entering the bulk annuity market (taking on pension schemes' liabilities). Discuss two factors the insurer should consider when assessing this strategic option.",
          answer:
            "First, capital impact: bulk annuity business is materially more capital-intensive than protection business (given its long-duration longevity and interest rate risk), so the insurer must assess whether it has, or can raise, sufficient capital. Second, risk profile fit: bulk annuities introduce genuinely new longevity and interest rate risk drivers the insurer has no existing experience managing, unlike its established, shorter-tail protection risk, so the insurer must assess whether it has or can build the necessary pricing, ALM and reserving expertise.",
          note: "Any two genuinely distinct, well-justified factors should be accepted, provided they are assessed against this insurer's SPECIFIC circumstances.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Assuming the insurer has adequate capital headroom but limited in-house annuity and ALM expertise, recommend a course of action for entering this market, with justification.",
          answer:
            "A phased entry supported by longevity reinsurance is recommended: partnering with a reinsurer experienced in longevity risk provides access to pricing expertise and risk transfer the insurer currently lacks, while a phased rollout (starting with smaller bulk transactions before larger ones) limits exposure while the insurer builds its own ALM and pricing capability, rather than writing large transactions immediately based on borrowed expertise alone.",
          note: "Credit should be given for any well-justified, genuinely reasoned recommendation that explicitly addresses the stated capability gap.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain one genuine implication of this recommended reinsurance-supported entry for the insurer's reported profit pattern.",
          answer:
            "Ceding a share of longevity risk to the reinsurance partner typically also cedes a share of expected profit, so the insurer's own reported profit from this new bulk annuity business will likely be lower and less volatile than if it retained the risk entirely itself &mdash; a genuine trade-off between reduced volatility/risk and reduced expected retained profit.",
          note: "A strong answer explicitly traces the capital/reinsurance decision through to its concrete effect on reported financial results.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this recommendation should specify how its success will be monitored going forward, rather than treating the decision as final once implemented.",
          answer:
            "A strategy's success is rarely fully knowable at the point of recommendation, so specifying how outcomes will be tracked (e.g. against experience-analysis and surplus-analysis metrics for the new bulk annuity book) shows the recommendation is genuinely designed to be verified and adjusted over time, rather than a one-off, unchecked decision.",
          note: "This connects directly to this course's recurring ongoing-monitoring theme, applied specifically to strategic decision-making.",
        },
      ],
    },
    {
      id: "sa2-q10",
      title: "International comparison and complex problem-solving",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why identifying best practice in with-profits fund governance requires genuine judgement about context, rather than assuming one market's approach transfers directly to another.",
          answer:
            "An approach that works well in one market's specific regulatory, cultural, and product-design context may not transfer straightforwardly to a genuinely different context, so identifying best practice requires assessing WHY an approach works in its original context, not just copying it directly &mdash; 'best practice' genuinely means best-for-context, not a single universal standard.",
          note: "A strong answer explicitly explains why context-blind copying is risky, not just asserts that context 'matters'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a life insurer operating outside the Solvency II framework might still be subject to a broadly similar risk-based capital regime.",
          answer:
            "Different jurisdictions have developed their own risk-based capital frameworks (e.g. risk-based capital, RBC, systems used elsewhere) that share Solvency II's broad goal of ensuring adequate capital relative to risk, but differ in technical detail, calibration, and structure, reflecting genuinely different regulatory traditions pursuing a similar underlying objective.",
          note: "A strong answer recognises Solvency II as one example of a risk-based capital regime, not the only possible approach.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A life insurer must decide whether to close its with-profits fund to new business while managing existing policyholders' fair treatment. Discuss why this represents a genuinely complex issue requiring integrated judgement.",
          answer:
            "This decision genuinely involves competing considerations across multiple topic areas at once &mdash; conduct obligations to existing policyholders (requiring continued fair bonus-setting despite a shrinking fund), capital implications of an ageing, closed fund with no new business to dilute legacy guarantee costs, and strategic implications for the insurer's wider business and reputation &mdash; requiring integrated judgement across conduct, capital and strategy rather than a single-dimension analysis.",
          note: "A strong answer explicitly draws on multiple topic areas together (conduct, capital, strategy), not just one in isolation, reflecting the genuinely integrated nature of complex real-world issues.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving a genuinely complex issue like this typically requires drawing on multiple SA2 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue genuinely required drawing on conduct regulation, capital management, and strategic assessment together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once, not a single isolated calculation or rule.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA2 syllabus.",
        },
      ],
    },
  ],
  SA3: [
    {
      id: "sa3-q1",
      title: "Pricing a large commercial property risk",
      modules: "Modules 2, 4, 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A general insurer is asked to quote for a large, single commercial property risk with no comparable risks in its own historical portfolio. Explain why standard statistical rating techniques are poorly suited to this risk, and identify one alternative approach.",
          answer:
            "Standard statistical rating relies on the law of large numbers across a homogeneous portfolio, but this risk is a single, heterogeneous, individually significant exposure with no comparable own historical data, making such techniques unreliable. An alternative approach is exposure-based rating, assessing risk directly from the underlying exposure characteristics (e.g. construction, occupancy, location) rather than relying on historical claims experience alone.",
          note: "A strong answer explicitly names the low-volume, heterogeneous nature of the risk as the reason standard techniques fail, not just asserts they are 'not suitable'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why catastrophe modelling would be a particularly important input to pricing this specific risk, given it is a large commercial property exposure.",
          answer:
            "Large commercial property risks are often concentrated in specific locations exposed to correlated catastrophe perils (e.g. windstorm, flood), so traditional actuarial rating based on historical average claims experience alone may not adequately capture the genuine tail risk a catastrophe model is specifically designed to quantify.",
          note: "Candidates should connect this directly to the property risk's location and catastrophe exposure, not describe catastrophe modelling generically.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the insurer's premium rate for this risk should explicitly incorporate its cost of capital, and one limitation of catastrophe model output the insurer should bear in mind when doing so.",
          answer:
            "This risk carries genuinely significant capital requirements given its concentration and catastrophe exposure, so pricing that ignored the specific capital cost of writing it could understate its true economic cost to the insurer &mdash; a risk-adjusted return should be explicitly built into the rate. One limitation is model uncertainty: different catastrophe models or model versions can produce genuinely different loss estimates for the same risk, so the insurer should not rely on a single model's output without considering this uncertainty (e.g. by comparing multiple models).",
          note: "A strong answer addresses both the capital-cost point AND a genuine model limitation, not just one half of the question.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why pricing this risk genuinely requires actuarial judgement, beyond applying a formula.",
          answer:
            "Given the limited own data, heterogeneity, and bespoke risk features of this large commercial risk, no single mechanical formula can fully determine an appropriate rate, so genuine, well-reasoned professional judgement blending statistical technique, benchmark data, catastrophe model output, and underwriting insight is a necessary part of the pricing process.",
          note: "This connects directly to the theme that large commercial pricing is one of the clearest real-world examples of judgement-based actuarial work.",
        },
      ],
    },
    {
      id: "sa3-q2",
      title: "The Lloyd's market and its regulatory regime",
      modules: "Modules 3, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the Lloyd's market's underlying structure differs from a conventional general insurance company, and why this creates a genuinely more layered capital assessment.",
          answer:
            "Lloyd's is a marketplace where syndicates of underwriting members come together to underwrite risk, rather than a single company underwriting on its own balance sheet. Since capital backing a syndicate can come from many different members (each potentially participating in other syndicates too), Lloyd's and its regulators need both syndicate-level and member-level capital assessments to ensure genuine overall adequacy across this layered structure.",
          note: "A strong answer explicitly connects the marketplace structure to the layered capital assessment consequence, not just describes Lloyd's generically.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why Lloyd's operates under a dual-layer regulatory regime, combining the Council of Lloyd's internal oversight with external UK prudential regulation.",
          answer:
            "Lloyd's internal oversight applies market-specific rules tailored to its unique syndicate structure, while external regulation ensures the whole market meets the same genuine prudential standards expected of any other UK insurer under Solvency II &mdash; a direct structural consequence of Lloyd's being a marketplace rather than a single regulated company.",
          note: "Candidates should explain this as a genuine structural necessity, not a redundant or duplicative arrangement.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why Lloyd's syndicates and their members face genuinely distinct taxation considerations compared with a conventional general insurance company and its shareholders.",
          answer:
            "Since underwriting profits and losses flow through to individual or corporate members according to their specific participation in each syndicate, the tax treatment must reflect this genuinely different profit-flow structure, rather than the more straightforward corporate taxation applicable to a conventional insurer's shareholders. This requires tax rules that can attribute profit and loss at the level of each member's syndicate participation, a materially more complex structure than taxing a single corporate entity's overall profit.",
          note: "A strong answer explains WHY the profit-flow structure differs (member-level participation versus single corporate entity), not just asserts that taxation is 'different'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why Lloyd's marketplace structure might remain attractive for underwriting complex or unusual commercial risks, despite its more complex capital and regulatory structure.",
          answer:
            "The marketplace structure allows genuine specialisation and risk-sharing across many syndicates with different expertise, and its long-established reputation and broker network can provide access to complex, bespoke risks that might be harder for a single conventional insurer to source and underwrite independently.",
          note: "This connects directly to the large-commercial-risk material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa3-q3",
      title: "Catastrophe reinsurance layer design",
      modules: "Modules 5, 6, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A general insurer's catastrophe model estimates a 1-in-200-year windstorm event would cause a ground-up loss of &pound;45,000,000 to its property portfolio. The insurer retains the first &pound;10,000,000 of any such loss and has purchased an excess of loss reinsurance layer of &pound;30,000,000 excess of &pound;10,000,000. Calculate the reinsurance recovery and the insurer's net retained loss from this event.",
          answer:
            "The loss above the &pound;10,000,000 retention is &pound;45,000,000 &minus; &pound;10,000,000 = &pound;35,000,000, but the reinsurance layer is limited to &pound;30,000,000, so the reinsurance recovery is &pound;30,000,000. The insurer's net retained loss is &pound;45,000,000 &minus; &pound;30,000,000 = &pound;15,000,000 (equal to its &pound;10,000,000 retention plus the &pound;5,000,000 of loss above the layer's limit).",
          note: "Verified: min(max(45,000,000-10,000,000,0),30,000,000)=30,000,000; net loss=45,000,000-30,000,000=15,000,000 (Node-verified). Marks are typically split across identifying the layer mechanics and both final figures.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the &pound;45,000,000 loss estimate used in part (i) came from a catastrophe model rather than the insurer's own historical claims experience.",
          answer:
            "A 1-in-200-year event may have occurred rarely or never within the insurer's own historical claims data, so a catastrophe model's simulation-based approach can estimate the genuine likelihood and severity of such an extreme, rare event even without direct historical precedent within the insurer's own experience.",
          note: "This connects directly to the extreme-value/tail-risk rationale for catastrophe modelling.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why reinsurer counterparty risk is a particularly important consideration for this catastrophe reinsurance programme specifically.",
          answer:
            "A major catastrophic event affecting the insurer is likely to also affect its reinsurers' own exposures, so the insurer must genuinely assess whether its reinsurance panel remains able to pay recoveries even under the same severe, correlated event, diversifying across multiple reinsurers to manage this concentrated counterparty risk.",
          note: "A strong answer explains why this risk is especially acute HERE, not just that counterparty risk exists generally.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the insurer should not rely on a single catastrophe model's output alone when designing this reinsurance layer structure.",
          answer:
            "Different catastrophe models can embed genuinely different scientific assumptions and calibrations, so comparing output across multiple models reveals the genuine degree of model uncertainty, helping the insurer avoid over-reliance on any single model's specific assumptions when setting its retention and layer limits.",
          note: "This connects directly to the model-uncertainty limitation developed in this course's catastrophe-modelling material.",
        },
      ],
    },
    {
      id: "sa3-q4",
      title: "Solvency II capital requirements for a general insurer",
      modules: "Module 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A general insurer's motor account has a best estimate liability (BEL) of &pound;15,000,000. The risk margin is assessed as 7% of BEL. The Solvency Capital Requirement (SCR) is assessed as 30% of BEL (reflecting premium, reserve and catastrophe risk), and the Minimum Capital Requirement (MCR) is 25% of the SCR. Calculate (a) the total technical provisions, (b) the SCR, and (c) the MCR.",
          answer:
            "(a) Risk margin = 7% &times; &pound;15,000,000 = &pound;1,050,000, so total technical provisions = &pound;15,000,000 + &pound;1,050,000 = &pound;16,050,000. (b) SCR = 30% &times; &pound;15,000,000 = &pound;4,500,000. (c) MCR = 25% &times; &pound;4,500,000 = &pound;1,125,000.",
          note: "Verified: 0.07×15,000,000=1,050,000; TP=16,050,000; 0.30×15,000,000=4,500,000; 0.25×4,500,000=1,125,000 (Node-verified).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer's SCR percentage of BEL is often materially higher than a life insurer's equivalent percentage, referencing the risk modules involved.",
          answer:
            "General insurance risk (premium risk, reserve risk, and catastrophe risk) tends to carry genuinely greater volatility and estimation uncertainty than life insurance's more predictable mortality/longevity-driven risk, particularly given the correlated, catastrophic loss potential and long-tail reserving uncertainty general insurance can carry, requiring a correspondingly higher capital requirement relative to the liability base.",
          note: "A strong answer names the specific GI risk modules (premium, reserve, catastrophe) rather than asserting GI is simply 'riskier' without explanation.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss one reason this insurer might develop an internal model to calculate its SCR, rather than using the standard formula.",
          answer:
            "An internal model can better reflect the insurer's own genuine risk profile (e.g. its specific catastrophe exposure or reserving volatility) than a generic standard formula calibrated across the whole industry, potentially producing a more risk-sensitive capital requirement, though this requires regulatory approval and significant development investment.",
          note: "Any one genuinely valid, well-explained reason should be accepted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's technical provisions genuinely need a risk margin, given the reserving uncertainty inherent in general insurance business.",
          answer:
            "The risk margin compensates for the cost of holding capital against non-hedgeable reserving risk over the liability's remaining settlement period, recognising that general insurance reserves carry genuine estimation uncertainty (particularly for longer-tail claims) that itself represents a cost requiring reflection in technical provisions.",
          note: "This connects the numeric risk margin calculation directly to the genuine reserving uncertainty developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa3-q5",
      title: "Consumer protection and equality legislation",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why consumer protection legislation is genuinely distinct from regulatory conduct requirements, even though both pursue similar fair-treatment objectives.",
          answer:
            "Consumer protection legislation typically sets specific legal rights and remedies for policyholders (e.g. around unfair contract terms or misleading sales practices), operating alongside and sometimes overlapping with regulatory conduct requirements, giving policyholders a further, legally enforceable layer of protection distinct from regulatory rules.",
          note: "A strong answer explicitly distinguishes legislation (legal rights/remedies) from regulation (regulatory rules), not just treats them as interchangeable.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why equality legislation might restrict a general insurer from using a rating factor that is otherwise statistically correlated with risk.",
          answer:
            "Equality legislation can restrict or prohibit the use of certain personal characteristics (e.g. protected characteristics under relevant law) as rating factors, even where those characteristics might otherwise be statistically correlated with risk, reflecting a genuine fairness objective that constrains purely risk-based rating.",
          note: "This connects directly to the fairness-versus-risk-differentiation tension developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss how a general insurer should genuinely balance actuarially-justified risk differentiation against equality legislation's fairness constraints when designing a new rating structure.",
          answer:
            "Actuarially sound, risk-reflective pricing supports genuine fairness between policyholders of different risk levels, while equality legislation protects against discrimination on certain grounds regardless of any genuine statistical correlation. The insurer should design rating structures that are both actuarially sound AND legally compliant, for example by identifying genuinely permissible proxy factors that capture real risk differentiation without relying on prohibited characteristics, rather than treating one consideration as simply overriding the other.",
          note: "A strong answer explicitly frames this as a genuine, ongoing balance requiring judgement, not a solved problem with one universally correct answer.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why non-compliance with consumer protection or equality legislation could pose a genuinely significant reputational risk to this insurer, beyond the direct legal penalty.",
          answer:
            "Publicised breaches of consumer protection or equality requirements can damage customer trust and brand reputation well beyond the direct legal or regulatory penalty involved, potentially affecting future business volumes and relationships with distributors and regulators alike.",
          note: "This connects legal compliance and reputational risk management as genuinely linked considerations.",
        },
      ],
    },
    {
      id: "sa3-q6",
      title: "Reserving for latent and disease claims",
      modules: "Modules 12, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A general insurer's liability account has paid claims to date of &pound;6,000,000 for a particular accident year, and the actuary estimates a chain-ladder development factor to ultimate of 1.25. Calculate the estimated ultimate claims cost and the resulting outstanding claims reserve.",
          answer:
            "Ultimate claims cost = &pound;6,000,000 &times; 1.25 = &pound;7,500,000. Outstanding claims reserve = &pound;7,500,000 &minus; &pound;6,000,000 = &pound;1,500,000.",
          note: "Verified: 6,000,000×1.25=7,500,000; reserve=1,500,000 (Node-verified).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this chain-ladder-style development factor approach would be poorly suited to reserving for a latent disease claim exposure arising from the same accident year.",
          answer:
            "A latent claim may not be reported until many years or decades later, meaning the standard, reasonably short observable reporting pattern a chain-ladder development factor relies on does not exist for this exposure, making such a mechanical development-factor approach unreliable for estimating the eventual number and cost of latent claims.",
          note: "Candidates should explicitly connect the failure of chain-ladder-style methods to the genuinely long, unobservable reporting delay latent claims present.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why reserving for this latent disease exposure should draw on external data and expert judgement, beyond the insurer's own historical claims experience.",
          answer:
            "Given the genuinely limited own historical data available for a slowly-emerging, rare claim type, the reserving actuary should blend limited own experience with external data, medical/scientific understanding, and legal developments (e.g. changing case law on liability), applying credibility-theory-style judgement rather than relying on own experience alone.",
          note: "This connects directly to CS1's credibility theory material applied to a genuine reserving context.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the reserving actuary should present a range of reasonable estimates for this latent exposure, rather than a single point estimate.",
          answer:
            "Given the compounded uncertainty from long reporting delays, limited own data, and legal/scientific evolution, a single point-estimate reserve is less likely to be reliable, so presenting a genuine range of reasonable estimates better reflects the true underlying uncertainty than false precision from a single figure.",
          note: "This connects directly to the genuine-uncertainty-under-judgement theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa3-q7",
      title: "Reinsurance programme design",
      modules: "Module 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A general insurer writes &pound;5,000,000 of gross premium on a commercial property account and cedes 40% under a quota share reinsurance treaty. Calculate the ceded premium and the retained premium.",
          answer:
            "Ceded premium = 40% &times; &pound;5,000,000 = &pound;2,000,000. Retained premium = &pound;5,000,000 &minus; &pound;2,000,000 = &pound;3,000,000.",
          note: "Verified: 5,000,000×0.40=2,000,000; retained=3,000,000 (Node-verified).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer might use quota share reinsurance across its whole commercial property book, rather than surplus reinsurance.",
          answer:
            "Quota share provides straightforward, proportional risk and capital relief across the whole book by ceding a fixed proportion of every policy's risk and premium, valuable for broad-based support across an entire portfolio, whereas surplus reinsurance is better suited to portfolios with widely varying individual policy sizes where retention should vary by risk size.",
          note: "A strong answer distinguishes quota share's uniform proportional structure from surplus reinsurance's size-based retention.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss the genuine trade-off this insurer faces in choosing its reinsurance retention level for this account.",
          answer:
            "A higher retention keeps more premium and expected profit potential with the insurer, but exposes it to greater volatility and capital strain from adverse claims experience; a lower retention (more reinsurance) reduces volatility and capital requirements but cedes more expected profit to the reinsurer &mdash; a genuine risk-return trade-off that should be assessed against the insurer's specific risk appetite and capital position.",
          note: "A strong answer explicitly frames this as a risk-return trade-off requiring judgement, not a straightforward 'more retention is better' conclusion.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the insurer should diversify across multiple reinsurers for this programme, rather than placing it entirely with a single reinsurer.",
          answer:
            "Ceding risk to a reinsurer only provides genuine protection if the reinsurer remains able to pay recoveries when needed, so diversifying across multiple reinsurers and monitoring reinsurer credit quality reduces the insurer's exposure to any single reinsurer's potential failure to pay.",
          note: "This connects to the general counterparty/credit risk theme developed elsewhere across the actuarial curriculum.",
        },
      ],
    },
    {
      id: "sa3-q8",
      title: "Financial planning and modelling",
      modules: "Modules 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer's financial plan should explicitly incorporate catastrophe risk, rather than being built purely around an 'expected' loss year.",
          answer:
            "Catastrophe losses can be genuinely large and volatile relative to an insurer's typical annual result, so financial planning that ignored this risk could leave the insurer genuinely unprepared for a realistic adverse scenario, undermining the plan's usefulness as a genuine guide to the insurer's likely range of outcomes.",
          note: "A strong answer explicitly connects catastrophe volatility to the failure of a purely 'expected value' planning approach.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's financial planning models should be built at both the corporate and product level, rather than relying on a single combined model.",
          answer:
            "Corporate-level models help monitor overall solvency, profitability and strategic objectives, while product-level models help assess whether individual product lines are genuinely meeting their own profitability targets, revealing insight a purely aggregated corporate view could mask, particularly given genuinely different capital intensity across product lines.",
          note: "This connects directly to the surplus-analysis-by-product-line theme developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why this insurer's financial planning model should use stochastic, rather than purely deterministic, projections given its catastrophe-exposed property book.",
          answer:
            "A deterministic, single-scenario projection would only show one possible future outcome, while a stochastic model simulating many possible scenarios (including catastrophe events, informed by catastrophe model output) reveals the genuine range of outcomes and associated risk the insurer's financial plan must be resilient against, directly extending catastrophe modelling techniques into the broader financial planning process.",
          note: "A strong answer explicitly connects stochastic modelling's value to the catastrophe exposure specifically, not just asserts that stochastic modelling is generally 'better'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's financial plan should treat reinsurance strategy as an integrated lever alongside pricing and underwriting decisions, rather than a separate, standalone decision.",
          answer:
            "Reinsurance directly affects the insurer's expected profit, capital requirements, and volatility of results, so a genuinely coherent financial plan must treat reinsurance strategy as an integrated lever alongside pricing and underwriting decisions, not an afterthought decided independently.",
          note: "This connects directly to the integration theme running through this course's financial planning material.",
        },
      ],
    },
    {
      id: "sa3-q9",
      title: "Exiting a catastrophe-exposed property line",
      modules: "Modules 18, 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A general insurer is considering withdrawing from a catastrophe-exposed property line following several years of adverse experience. Discuss two factors the insurer should consider before deciding whether to formally transfer the portfolio or manage it in run-off.",
          answer:
            "First, valuation uncertainty: if the remaining liabilities are genuinely uncertain (e.g. long-tail exposure or unresolved catastrophe claims), it may be difficult to agree a fair transfer price acceptable to both parties, favouring run-off. Second, ongoing cost: run-off still requires capital support and specialist claims management for potentially many years, so its genuine total cost over the run-off period should be weighed against a formal transfer's clean, immediate exit, rather than assuming run-off is automatically cheaper.",
          note: "Any two genuinely distinct, well-justified factors should be accepted, provided they are assessed against this SPECIFIC scenario.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Assuming the remaining liabilities are reasonably well understood and a willing acquirer is available, recommend a course of action for this insurer, with justification.",
          answer:
            "A formal portfolio transfer is recommended: given the liabilities are reasonably well understood, an acceptable transfer price should be achievable, providing a clean, immediate exit that releases capital and management attention for the insurer's core business, rather than continuing to bear run-off's ongoing capital and management cost for a line the insurer has already decided is no longer strategically core.",
          note: "Credit should be given for any well-justified, genuinely reasoned recommendation that explicitly addresses the stated facts (well-understood liabilities, willing acquirer available).",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain why this transfer would likely require independent expert review and regulatory approval before completion.",
          answer:
            "Since affected policyholders did not choose the new insurer taking on their liabilities, this oversight helps ensure the transfer does not materially disadvantage their security or service, a genuine policyholder protection safeguard given policyholders have no direct say in the transaction.",
          note: "This connects directly to the regulatory-oversight-of-transfers material developed elsewhere in this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this decision represents a genuinely complex issue requiring judgement across multiple SA3 topic areas, not a single-dimension analysis.",
          answer:
            "This decision genuinely involves competing considerations across multiple topic areas at once &mdash; the reliability of catastrophe model output informing whether adverse experience reflects genuine trend or random fluctuation, reinsurance and capital implications of continuing versus exiting, and the strategic/financial planning consequences of withdrawal &mdash; requiring integrated judgement rather than a single-dimension analysis.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA3 syllabus.",
        },
      ],
    },
    {
      id: "sa3-q10",
      title: "Cross-jurisdiction comparison and regulatory frameworks",
      modules: "Modules 8, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer operating across multiple jurisdictions needs to understand how genuinely different regulatory and taxation environments affect its business in each specific market.",
          answer:
            "Regulatory capital requirements, permitted product features, and tax treatment can all directly shape which products are commercially viable to offer, how they are priced, and how the insurer structures its capital and reinsurance arrangements in each specific market, making the environment a genuine determinant of practical business strategy, not just a compliance backdrop.",
          note: "A strong answer connects environmental differences directly to concrete business-strategy consequences, not just asserts that 'regulation varies by country'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the role of a statutory actuarial role (e.g. Chief Actuary) at a general insurer, and why it can carry personal professional responsibilities distinct from the insurer's corporate obligations.",
          answer:
            "A statutory actuarial role carries specific, personally-accountable regulatory responsibilities, such as providing a formal actuarial opinion on the adequacy of technical provisions, meaning the individual actuary can face professional consequences distinct from, and sometimes in tension with, the insurer's own commercial interests.",
          note: "A strong answer names the specific example (opinion on reserve adequacy) rather than describing the role only in the abstract.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "The insurer's finance director asks the Chief Actuary to adopt a more optimistic reserving basis for a long-tail liability account to improve reported profit. Discuss how the Chief Actuary should respond.",
          answer:
            "Professional standards and codes of conduct place the actuary's overriding duty on sound, honest technical judgement, meaning commercial pressure to adopt a particular reserving basis does not override this obligation; the Chief Actuary should maintain a basis genuinely supported by the evidence (including the genuine reserving uncertainty inherent in long-tail claims), clearly document the reasoning, and escalate through appropriate channels if pressure continues, rather than adjusting the basis simply to satisfy the request.",
          note: "This is a directly testable ethical scenario; a strong answer explicitly refuses to simply comply while describing a constructive, professional path forward.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why actuarial professional standards apply consistently to this actuary regardless of how permissive the specific jurisdiction's own regulatory requirements happen to be.",
          answer:
            "Professional standards set out expected practice for sound, honest actuarial work that complements varying local regulation, ensuring a consistent baseline of technical and ethical practice regardless of how permissive or strict any particular jurisdiction's own regulatory requirements happen to be.",
          note: "This connects directly to the professional-standards-as-consistent-baseline theme developed elsewhere in this course.",
        },
      ],
    },
  ],
  SA4: [
    {
      id: "sa4-q1",
      title: "Designing a DB scheme benefit structure",
      modules: "Modules 1, 2",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "A member of a final salary DB scheme retires with 20 years of pensionable service and a final salary of &pound;45,000. The scheme's accrual rate is 1/60ths. Calculate the member's annual pension.",
          answer:
            "Annual pension = &pound;45,000 &times; (1/60) &times; 20 = &pound;15,000 per annum.",
          note: "Verified: 45000 × (1/60) × 20 = 15,000 (Node-verified).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a career average revalued earnings (CARE) scheme design would reduce the sponsor's exposure to a 'final salary spike' risk compared with the final salary design in part (i).",
          answer:
            "A CARE scheme accrues a pension each year based on that year's salary, revalued up to retirement, spreading the salary-linkage risk more evenly across a member's career rather than concentrating it at the end, unlike final salary where a large late-career pay rise disproportionately increases pension cost relative to contributions paid over the member's whole career.",
          note: "A strong answer explicitly names the 'final salary spike' mechanism, not just asserts that CARE is 'less risky'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the scheme's design of pension increases in payment (fixed rate versus inflation-linked) represents a genuine, deliberate risk-allocation choice, not just an administrative detail.",
          answer:
            "Inflation-linked increases directly expose the sponsor to genuine, open-ended inflation risk over a potentially long payment period, whereas fixed-rate increases cap this risk at a known level. This is a deliberate choice about who bears inflation risk &mdash; the sponsor (if the increase basis tracks inflation, however high it turns out to be) or effectively the member (if increases are capped and inflation erodes the pension's real value), directly affecting both the scheme's genuine risk profile and members' retirement income security.",
          note: "A strong answer explicitly frames this as a RISK-ALLOCATION decision between sponsor and member, not merely a description of the two increase types.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the scheme's early retirement provisions should be priced to reflect genuine anti-selection risk, rather than assumed to be self-funding within the scheme's general assumptions.",
          answer:
            "Members are more likely to exercise an early retirement option when it is financially advantageous to them, so the option carries a genuine anti-selective cost that should be reflected explicitly in the scheme's assumptions, rather than assumed to be self-funding within a generic actuarial basis.",
          note: "This connects directly to the embedded-option-cost theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q2",
      title: "DC scheme design and the default investment strategy",
      modules: "Module 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A DC scheme member contributes &pound;3,000 per annum (combined employer and employee contributions) for 25 years, with contributions assumed to grow at 5% per annum net investment return, added at the end of each year and then growing with the fund for the remaining years. Calculate the accumulated fund value at retirement (to the nearest &pound;100), given the fund value follows F(y) = (F(y-1) + 3,000) &times; 1.05 with F(0) = 0.",
          answer:
            "Applying the recursive growth formula for 25 years gives an accumulated fund value of approximately &pound;150,300 (&pound;150,340 to the nearest pound).",
          note: "Verified via iterative calculation: F(25) = 150,340.36 (Node-verified). Full marks require showing the recursive/compounding approach, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the design of this scheme's default investment strategy carries outsized real-world importance, given that most members do not actively choose their own investments.",
          answer:
            "Since most members in practice remain in the default option, its design directly shapes the retirement outcomes of the majority of the scheme's membership, so it should genuinely reflect an appropriate risk/return balance and glide path toward retirement for a typical member, not just a technically available but rarely-used default.",
          note: "A strong answer explicitly connects default design to its outsized real-world reach, not just describes what a default strategy is.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why 'sequencing risk' is a genuinely distinct concern for this member in the years immediately before retirement, compared with earlier in their 25-year saving period.",
          answer:
            "A market downturn shortly before retirement gives the member far less time to recover before needing to convert their pot into retirement income, unlike an equivalent downturn earlier in their career when ongoing contributions and time can help recover lost value, making sequencing risk a genuinely distinct late-career concern requiring a de-risking glide path as retirement approaches.",
          note: "A strong answer explains WHY timing matters (limited recovery time near retirement), not just that market downturns are bad.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why clear member communication is particularly important for this DC scheme, more so than it might be for an equivalent DB scheme.",
          answer:
            "Since DC members bear genuine investment and longevity risk and must often make their own decisions (contribution levels, investment choices, retirement income options), clear, accessible communication is essential to support genuinely informed member decision-making, more so than for a DB scheme where the sponsor bears the risk and makes most of the relevant decisions.",
          note: "This connects directly to CP3's audience-tailored-communication material applied to a genuine DC-specific context.",
        },
      ],
    },
    {
      id: "sa4-q3",
      title: "Other employee benefits alongside a pension scheme",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a death-in-service benefit should be designed and priced with genuine awareness of the pension scheme's own death benefits, rather than in isolation.",
          answer:
            "A death-in-service benefit is typically provided alongside or integrated with any pension scheme death benefits, together forming the employee's overall protection package; designing it in isolation risks either genuinely unnecessary duplication of cover or an unintended gap in overall protection.",
          note: "A strong answer explicitly frames this as a genuine INTEGRATION issue, not two independent benefits that happen to coexist.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the actuarial pricing considerations for an employer-provided income protection benefit are genuinely the same as for a directly-purchased income protection policy.",
          answer:
            "The underlying risk (incapacity preventing an employee from working) and its actuarial drivers (incidence, recovery rates, deferred period) are genuinely the same regardless of whether the cover is purchased directly or provided as an employee benefit, so the same technical pricing and design principles apply &mdash; the distribution channel does not change the underlying risk being covered.",
          note: "This connects directly to the general principle that product complexity and risk drivers, not distribution channel, determine appropriate pricing technique.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an employer should assess the combined cost and risk of its whole employee benefits package (pension, death-in-service, ill-health, medical) together, rather than assessing each benefit independently.",
          answer:
            "These benefits can genuinely interact &mdash; for example, a death-in-service payout can reduce the need for an ongoing ill-health benefit for the same event, while medical cover can reduce genuine ill-health incidence through earlier treatment and diagnosis &mdash; so a holistic view of the whole package's combined cost and risk gives a more accurate picture of the employer's true benefits spend and risk exposure than assessing each benefit in isolation, which could double-count some interacting risks or miss genuine offsetting effects.",
          note: "A strong answer identifies at least one genuine INTERACTION between benefits, not just asserts that a holistic view is 'better' in general.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the tax treatment of these employer-provided benefits may differ from a directly-purchased equivalent.",
          answer:
            "Many jurisdictions treat employer-provided benefits as a form of remuneration with their own specific tax rules (e.g. a benefit-in-kind charge on the employee, or deductibility for the employer), distinct from how an individual buying the same cover privately would be taxed.",
          note: "This connects directly to the employer-benefit-taxation theme developed elsewhere across the SA subjects.",
        },
      ],
    },
    {
      id: "sa4-q4",
      title: "Sponsor covenant and the business environment",
      modules: "Module 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what is meant by a DB scheme's 'sponsor covenant', and why it is a genuinely distinctive risk not present in a standalone insurance product.",
          answer:
            "The sponsor covenant is the sponsoring employer's financial ability and willingness to support the pension scheme (e.g. through ongoing contributions) over time. Unlike an insurance policyholder relying on the insurer's own balance sheet, a pension scheme member's security depends directly on a third party's (the sponsor's) ongoing financial health, a genuinely distinctive risk unique to DB pensions.",
          note: "A strong answer explicitly contrasts this with the insurance-company-centred risk model, not just describes covenant in isolation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why demographic change (improving longevity) poses a similar risk direction to DB pension schemes as it does to an insurer's annuity business.",
          answer:
            "Improving longevity directly increases the cost of DB pension promises, since members draw their pension for longer than assumed, exactly the same inverted mortality-improvement sensitivity that increases annuity cost for an insurer &mdash; the risk direction is genuinely the same because both pay income for as long as someone survives.",
          note: "Candidates should connect this directly to the inverted mortality-improvement sensitivity theme developed for annuity business elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A scheme's sponsor is showing signs of financial distress. Discuss why this represents a particularly acute risk to scheme members, and one action trustees might reasonably consider.",
          answer:
            "If the sponsor becomes insolvent, the scheme may be left with an underfunded position and no ongoing ability to recover the shortfall through future contributions, potentially requiring entry into a statutory pension protection arrangement that may not fully replace members' original promised benefits. Trustees might reasonably consider negotiating additional security (e.g. a charge over sponsor assets) or accelerating de-risking of the scheme's investment strategy to reduce reliance on the weakening sponsor's ongoing support.",
          note: "A strong answer explains WHY the risk is acute (potential benefit reduction via statutory protection) and proposes at least one genuinely reasonable trustee action.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why trustees should monitor sponsor covenant strength on an ongoing basis, rather than only at the point of each formal funding valuation.",
          answer:
            "Sponsor financial health can change materially between valuations, so ongoing covenant monitoring helps trustees identify a genuinely weakening covenant early enough to adjust funding or investment strategy before the sponsor's ability to support the scheme deteriorates further.",
          note: "This connects directly to the ongoing-monitoring theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q5",
      title: "Taxation and the regulatory/legislative environment",
      modules: "Modules 6, 7, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an annual or lifetime limit on tax-favoured pension saving represents a deliberate policy trade-off, rather than an arbitrary restriction.",
          answer:
            "Governments typically aim to encourage pension saving up to a level supporting adequate retirement income, while limiting the tax revenue cost of unlimited tax-favoured saving, particularly for higher earners who could otherwise use pensions primarily as a general tax shelter rather than genuine retirement provision &mdash; the limit balances these two genuine policy objectives.",
          note: "A strong answer names both sides of the trade-off (encouraging saving versus controlling tax cost), not just one.",
        },
        {
          label: "(ii)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between a pensions regulator's funding/solvency oversight role and its member-protection/conduct-style oversight role.",
          answer:
            "Funding oversight focuses on whether a scheme (and its sponsor) can genuinely meet its promised benefits over time, while conduct-style oversight focuses on whether trustees and administrators treat members fairly (e.g. in communications, transfer advice, and administration), addressing genuinely distinct risks to members.",
          note: "This directly mirrors the prudential-versus-conduct distinction developed for insurance regulation elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why legislation requiring independent financial advice before a large DB-to-DC transfer was introduced, and why auto-enrolment legislation has increased the practical importance of default DC investment strategy design.",
          answer:
            "Transfer advice legislation responds to the genuinely significant, often irreversible nature of giving up a DB scheme's guaranteed, sponsor-backed benefits in exchange for a DC transfer value, ensuring members receive genuinely informed advice before making a decision with serious, hard-to-reverse consequences for retirement security. Auto-enrolment legislation automatically enrols eligible employees into a qualifying (typically DC) scheme unless they opt out, directly increasing scheme membership among largely passive members who rarely engage with fund choice, making the DEFAULT investment strategy's design disproportionately important for the outcomes of the majority of the membership.",
          note: "A strong answer addresses both pieces of legislation and explains the genuine rationale behind each, not just describes what they require.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why changes in pension taxation legislation represent a genuine ongoing risk for schemes, sponsors and members.",
          answer:
            "A change in contribution limits, tax relief rates, or benefit taxation can suddenly alter the attractiveness and genuine cost of pension provision after a scheme has already been designed and funded on prior assumptions, a risk that is particularly prominent given how frequently pension tax rules have changed in practice.",
          note: "This connects directly to the political-and-tax-risk theme developed elsewhere across the SA subjects.",
        },
      ],
    },
    {
      id: "sa4-q6",
      title: "Funding valuation and recovery plan",
      modules: "Modules 9, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A DB scheme's funding valuation assesses technical provisions of &pound;80,000,000, against scheme assets of &pound;68,000,000. Trustees and the sponsor agree a recovery plan to eliminate the shortfall via equal annual contributions over 8 years. Calculate (a) the funding shortfall, and (b) the required annual recovery contribution.",
          answer:
            "(a) Funding shortfall = &pound;80,000,000 &minus; &pound;68,000,000 = &pound;12,000,000. (b) Required annual recovery contribution = &pound;12,000,000 / 8 = &pound;1,500,000 per annum.",
          note: "Verified: 80,000,000-68,000,000=12,000,000; 12,000,000/8=1,500,000 (Node-verified). This is a simplified calculation ignoring investment return on the recovery contributions and discounting, for illustrative purposes.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the discount rate used to calculate this scheme's technical provisions requires genuine actuarial judgement, rather than a single universally correct rate.",
          answer:
            "The discount rate should reflect the expected return on the scheme's actual (or intended) investment strategy and its genuine level of prudence, so different schemes with different investment strategies and risk appetites can reasonably adopt different discount rates, without there being one single objectively correct answer.",
          note: "A strong answer connects the discount rate directly to the scheme's OWN investment strategy and prudence level, not just asserts that judgement is required.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss the genuine trade-off in choosing an 8-year recovery period, as opposed to a shorter or longer period.",
          answer:
            "A longer recovery period spreads the additional contributions over more years, easing the sponsor's near-term cash burden, but leaves the scheme underfunded for longer, genuinely increasing the risk that adverse experience or sponsor distress could prevent the shortfall ever being fully addressed; a shorter period reduces this risk but places a greater near-term cash burden on the sponsor.",
          note: "A strong answer explicitly frames this as a genuine trade-off between sponsor affordability and member security, not a straightforward 'shorter is always better' conclusion.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the scheme actuary should assess the sponsor's covenant strength when advising trustees on an appropriate recovery plan length.",
          answer:
            "A weaker sponsor covenant may genuinely justify requiring a shorter recovery period or higher near-term contributions (since the scheme cannot rely on the sponsor's ongoing support with the same confidence), while a stronger covenant may reasonably support a longer, more gradual recovery plan.",
          note: "This connects the numeric recovery plan calculation directly to the sponsor covenant material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q7",
      title: "Investment strategy and de-risking",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a maturing DB scheme typically 'de-risks' its investment strategy over time, shifting from growth assets toward more matching assets.",
          answer:
            "As a scheme matures, its investment time horizon shortens (benefits need to be paid sooner) and its tolerance for short-term volatility genuinely reduces, so shifting toward more matching, lower-volatility assets reduces the risk of a poorly-timed market downturn coinciding with when the scheme most needs to pay benefits.",
          note: "A strong answer explicitly connects maturity to shortened time horizon and reduced volatility tolerance, not just asserts that de-risking is 'safer'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how a liability-driven investment (LDI) strategy using interest rate and inflation swaps helps a scheme manage its funding volatility, and one genuine risk this introduces.",
          answer:
            "Derivatives can efficiently adjust the scheme's sensitivity to interest rate and inflation movements without needing to buy or sell large quantities of underlying bonds directly, providing a flexible, capital-efficient tool for closely matching the scheme's specific liability profile. One genuine risk this introduces is the need for liquid assets to meet collateral calls on the derivative positions, particularly during periods of market stress when collateral requirements can increase sharply.",
          note: "A strong answer explains both the matching benefit AND names the genuine collateral/liquidity risk LDI introduces, not just describes the matching benefit alone.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a sponsor's covenant strength should directly influence the scheme's appropriate level of investment risk.",
          answer:
            "A scheme backed by a strong sponsor covenant can reasonably tolerate more investment risk, since the sponsor can support a temporary funding shortfall through additional contributions if needed, while a scheme with a weaker covenant may need a genuinely more cautious, closely-matched investment strategy to avoid relying on sponsor support that may not be reliably available, so investment strategy should reflect covenant strength rather than being decided purely on financial-market grounds in isolation.",
          note: "A strong answer explicitly connects covenant strength to appropriate risk tolerance in both directions (strong covenant supports more risk, weak covenant requires less), not just one direction.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the scheme should hold sufficient liquid assets even though its overall investment horizon is genuinely long-term.",
          answer:
            "Even a long-horizon scheme has near-term cashflow needs (benefit payments, expenses, and potentially collateral calls on derivative positions), so genuine liquidity risk management requires holding sufficient liquid assets to meet these without being forced to sell less liquid assets at a potentially unfavourable time.",
          note: "This connects directly to the liquidity-risk theme developed elsewhere across the SA subjects.",
        },
      ],
    },
    {
      id: "sa4-q8",
      title: "Integrated risk management",
      modules: "Module 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the main categories of risk a DB pension scheme and its sponsor face.",
          answer:
            "Sponsor covenant risk, longevity risk, market and interest rate risk, and inflation risk (affecting both benefit increases and asset values).",
          note: "A complete answer names all four categories, not just one or two.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a longevity swap or buy-in might be used to manage longevity risk specifically, rather than relying purely on investment strategy.",
          answer:
            "Investment strategy can manage market and interest rate risk, but does little to address genuine uncertainty in how long members will live; a longevity swap or buy-in directly transfers this specific risk to a reinsurer or insurer, addressing a risk driver investment strategy alone cannot manage.",
          note: "A strong answer explains WHY investment strategy alone is insufficient for longevity risk specifically, not just names longevity swaps as an option.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an 'integrated risk management' (IRM) framework linking funding, investment, and covenant strategy together is more valuable than managing each area independently.",
          answer:
            "These three areas are genuinely interdependent &mdash; for example, a stronger covenant can support a riskier investment strategy, which in turn affects the appropriate funding target and discount rate &mdash; so managing them through a single, integrated framework helps ensure decisions in one area appropriately reflect the current position in the other two, rather than being set independently and potentially inconsistently with each other.",
          note: "A strong answer explicitly identifies at least one genuine INTERDEPENDENCY (e.g. covenant strength affecting appropriate investment risk), not just asserts that integration is 'better'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a scheme's risk management strategy should be reviewed periodically, rather than set once and left unchanged.",
          answer:
            "As funding position, membership profile, and sponsor covenant evolve over time, a risk management strategy set for a past position may no longer be genuinely appropriate for the scheme's current circumstances, so ongoing review ensures the strategy remains aligned with the scheme's actual, current risk profile.",
          note: "This connects directly to the ongoing-review theme developed elsewhere across every SA subject.",
        },
      ],
    },
    {
      id: "sa4-q9",
      title: "Buy-in, buy-out and scheme wind-up",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A pension scheme is considering a buy-in for a group of pensioner members whose technical provisions are valued at &pound;47,000,000. An insurer quotes a buy-in premium of &pound;52,000,000 for this group. Calculate the excess of the buy-in premium over the technical provisions, and explain in one sentence what this excess broadly represents.",
          answer:
            "Excess = &pound;52,000,000 &minus; &pound;47,000,000 = &pound;5,000,000. This excess broadly represents the additional prudence, profit margin, and risk premium the insurer requires to take on the longevity, investment and expense risk of this group of members, beyond the scheme's own best-estimate-plus-margin technical provisions basis.",
          note: "Verified: 52,000,000-47,000,000=5,000,000 (Node-verified). Full marks require both the calculation and a genuine explanation of what the excess represents.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the difference between a buy-in and a buy-out, and why a buy-in is often pursued as a step before an eventual buy-out.",
          answer:
            "A buy-in involves the scheme purchasing an insurance policy matching a specified group of members' benefits, with the policy held as a scheme asset while the scheme itself remains responsible for paying members; a buy-out goes further, fully transferring the legal liability for those members' benefits to the insurer. A buy-in is often pursued first because it can be executed for a subset of membership without requiring the scheme to be immediately fully funded for a complete buy-out and wind-up.",
          note: "A strong answer explains both the structural difference AND why a phased buy-in-then-buy-out approach is often practically useful.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why legislation requiring independent financial advice before a large DB-to-DC transfer is particularly important in the context of a scheme heading toward wind-up.",
          answer:
            "Giving up a DB scheme's guaranteed, sponsor-backed benefits in exchange for a DC transfer value is a genuinely significant, often irreversible decision shifting investment and longevity risk onto the member; as a scheme approaches wind-up, members may face pressure or a limited window to decide, making independent advice particularly important to ensure they genuinely understand the consequences before an effectively final decision.",
          note: "A strong answer connects the advice requirement's importance directly to the wind-up context's time pressure and irreversibility.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a scheme facing sponsor insolvency might need to consider a statutory pension protection arrangement rather than proceeding with a standard buy-out.",
          answer:
            "If the scheme is insufficiently funded and the sponsor cannot provide additional contributions due to insolvency, a standard buy-out (requiring full funding to purchase members' benefits) may not be achievable, making a statutory protection arrangement (providing a safety-net level of benefit, potentially lower than originally promised) the genuinely necessary alternative.",
          note: "This connects directly to the sponsor-insolvency material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q10",
      title: "Mergers, restructuring and solving a complex pensions issue",
      modules: "Modules 15, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a corporate acquisition of a scheme's sponsor could directly affect the scheme's sponsor covenant, in either direction.",
          answer:
            "The acquiring company's own financial strength and strategic priorities become the scheme's new effective covenant support, which could genuinely strengthen the scheme's security (if the acquirer is financially stronger and supportive) or weaken it (if the acquirer is less committed to the scheme or has weaker finances) depending on the acquirer's own position and intentions.",
          note: "A strong answer explains BOTH possible directions of covenant change, not just assumes acquisitions are always negative or always positive for the scheme.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why trustees should typically seek to be actively involved in merger negotiations affecting their scheme's sponsor, rather than being informed only after the transaction completes.",
          answer:
            "Since trustees have a genuine fiduciary duty to protect member interests, and a merger can materially affect covenant strength, trustees typically need the opportunity to negotiate protections (e.g. additional contributions, security, or guarantees) as part of the transaction itself, rather than accepting whatever covenant position results after the deal is already complete.",
          note: "This connects directly to the trustee fiduciary-duty material developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A DB scheme's sponsor is being acquired, and the scheme is significantly underfunded. Discuss why this represents a genuinely complex issue for the trustees, requiring integrated judgement across multiple topic areas.",
          answer:
            "This decision genuinely involves competing considerations across multiple topic areas at once &mdash; assessing the acquirer's covenant strength, negotiating appropriate funding or security protections as part of the transaction, and considering longer-term strategic options like accelerated de-risking or eventual buy-out &mdash; requiring integrated judgement across covenant, funding, investment and strategic areas rather than a single-dimension analysis.",
          note: "A strong answer explicitly draws on multiple topic areas together (covenant, funding, investment, strategy), not just one in isolation, reflecting the genuinely integrated nature of complex real-world issues.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving a genuinely complex pensions issue like this typically requires drawing on multiple SA4 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue genuinely required drawing on covenant assessment, funding strategy, investment strategy, and strategic risk-transfer options together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once, not a single isolated calculation or rule.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA4 syllabus.",
        },
      ],
    },
  ],
};

// Subject-level metadata for every exam on the tracker.
// Sourced from the public IFoA syllabus / subject names.
const SUBJECTS = {
  CB1: { name: "Business Finance", blurb: "Core financial concepts for business: financial statements, investment appraisal, cost of capital, and how businesses are financed and valued." },
  CB2: { name: "Business Economics", blurb: "Micro- and macroeconomic principles applied to business and financial decision-making — markets, firms, government policy and the wider economy." },
  CB3: { name: "Business Management", blurb: "How organisations are structured, managed and governed — strategy, people, operations and change." },
  CM1: { name: "Actuarial Mathematics", blurb: "The mathematics of compound interest, cashflows and life contingencies that underpin actuarial valuations." },
  CM2: { name: "Financial Engineering and Loss Reserving", blurb: "Stochastic models of asset prices and derivatives, plus general insurance reserving techniques." },
  CP1: { name: "Actuarial Practice", blurb: "Applies core actuarial techniques to real-world modelling, pricing and reserving problems across practice areas." },
  CP2: { name: "Modelling Practice", blurb: "Hands-on data analysis and modelling using a spreadsheet/programming environment for actuarial problems." },
  CP3: { name: "Communications Practice", blurb: "Communicating actuarial analysis clearly to technical and non-technical audiences." },
  CS1: { name: "Actuarial Statistics", blurb: "Statistical theory, regression and time series methods used in actuarial modelling." },
  CS2: { name: "Risk Modelling and Survival Analysis", blurb: "Stochastic processes, survival models and machine-learning methods for risk analysis." },
  SA1: { name: "Health and Care", blurb: "Specialist application of actuarial techniques to health and care insurance products." },
  SA2: { name: "Life Insurance", blurb: "Specialist application of actuarial techniques to life insurance business." },
  SA3: { name: "General Insurance", blurb: "Specialist application of actuarial techniques to general (non-life) insurance business." },
  SA4: { name: "Pensions and Other Benefits", blurb: "Specialist application of actuarial techniques to pension schemes and other employee benefits." },
  SA7: { name: "Investment and Finance", blurb: "Specialist application of actuarial techniques to investment strategy and financial markets." },
  SP1: { name: "Health and Care Principles", blurb: "Principles of pricing, reserving and risk management for health and care insurance." },
  SP2: { name: "Life Insurance Principles", blurb: "Principles of pricing, reserving and risk management for life insurance business." },
  SP4: { name: "Pensions and Other Benefits Principles", blurb: "Principles of designing, funding and managing pension and other benefit arrangements." },
  SP5: { name: "Investment and Finance Principles", blurb: "Principles of investment management, asset allocation and financial markets." },
  SP6: { name: "Financial Derivatives Principles", blurb: "Principles of pricing and risk-managing financial derivatives." },
  SP7: { name: "General Insurance – Reserving and Capital Modelling Principles", blurb: "Principles of reserving and capital modelling for general insurance business." },
  SP8: { name: "General Insurance Pricing Principles", blurb: "Principles of pricing general insurance products." },
  SP9: { name: "Enterprise Risk Management Principles", blurb: "Principles of identifying, modelling and managing risk across an entire enterprise." },
};

// Full module descriptions + flashcard decks. Only populated where real
// study material exists in the repo (currently CB2, the subject actively
// being studied) — built from the official 2025 CB2 ActEd study guide
// module list plus the syllabus objectives it maps to each module.
const MODULES = {
  CB2: [
    {
      id: "m01", title: "Economic concepts and systems",
      description: "Introduces why economics matters for business decisions: scarcity, opportunity cost, and the core input/output/technology/location/competition choices firms face. Also draws the line between microeconomics and macroeconomics.",
      cards: [
        { q: "What is 'opportunity cost'?", a: "The value of the next-best alternative given up when a choice is made." },
        { q: "How does microeconomics differ from macroeconomics?", a: "Microeconomics studies individual markets, firms and consumers; macroeconomics studies economy-wide aggregates like output, inflation and unemployment." },
        { q: "Give two core choices a business faces because of scarcity.", a: "What to produce (outputs) and how to produce it (inputs/technology) — also location and how to compete." },
      ],
    },
    {
      id: "m02", title: "Supply and demand (1)",
      description: "The building blocks of a competitive market: how the price mechanism coordinates buyers and sellers, what shifts demand and supply curves, and how equilibrium price and quantity are reached.",
      cards: [
        { q: "What happens to the demand curve when consumer income rises (normal good)?", a: "It shifts right — demand increases at every price." },
        { q: "Distinguish a 'movement along' a demand curve from a 'shift' of it.", a: "A price change causes a movement along the curve; a change in any other determinant (income, tastes, etc.) shifts the whole curve." },
        { q: "What is market equilibrium?", a: "The price and quantity at which quantity demanded equals quantity supplied, so there's no pressure for price to change." },
      ],
    },
    {
      id: "m03", title: "Supply and demand (2)",
      description: "Builds on Module 2 with elasticity: how strongly quantity demanded or supplied responds to changes in price or income, what drives elasticity, and why it matters in the short vs long run.",
      cards: [
        { q: "How is price elasticity of demand calculated?", a: "% change in quantity demanded ÷ % change in price." },
        { q: "Name two factors that make demand more price-elastic.", a: "Availability of close substitutes and the good being a luxury rather than a necessity (also: high share of income spent, longer time to adjust)." },
        { q: "Why is supply typically more elastic in the long run than the short run?", a: "Firms have more time to adjust capacity, inputs and production methods." },
      ],
    },
    {
      id: "m04", title: "Background to demand",
      description: "Looks inside consumer choice: how utility and indifference curves represent preferences, how budget constraints determine what's affordable, and how behavioural economics and advertising complicate the 'rational consumer' picture.",
      cards: [
        { q: "What does an indifference curve represent?", a: "Combinations of two goods that give a consumer the same level of satisfaction (utility)." },
        { q: "What does a budget line show?", a: "The combinations of two goods a consumer can afford given their income and the goods' prices." },
        { q: "Give one way behavioural economics challenges the standard rational-choice model.", a: "Consumers don't always have perfect information or act rationally — biases and heuristics affect real choices." },
      ],
    },
    {
      id: "m05", title: "Background to supply",
      description: "The production and cost side of the firm: how inputs turn into outputs via the production function, how average/marginal/total costs behave, and how economies of scale and profit-maximising output are determined.",
      cards: [
        { q: "What is marginal cost?", a: "The extra cost of producing one more unit of output." },
        { q: "What are economies of scale?", a: "Falling average costs as the scale of production increases." },
        { q: "At what point does a profit-maximising firm choose its output level?", a: "Where marginal revenue equals marginal cost." },
      ],
    },
    {
      id: "m06", title: "Perfect competition and monopoly",
      description: "Two polar-opposite market structures: perfect competition (many small firms, no market power, price-takers) versus monopoly (a single firm with market power, barriers to entry, and price above marginal cost).",
      cards: [
        { q: "Name two defining features of perfect competition.", a: "Many small firms, a homogeneous product, free entry/exit, and perfect information (firms are price-takers)." },
        { q: "Why can a monopolist earn supernormal profit in the long run?", a: "Barriers to entry stop new firms competing the profit away." },
        { q: "What determines a monopolist's profit-maximising price and output?", a: "Output where marginal revenue = marginal cost; price is then read off the demand curve at that output." },
      ],
    },
    {
      id: "m07", title: "Monopolistic competition and oligopoly",
      description: "Market structures between the extremes: monopolistic competition (many firms, differentiated products, only normal profit long-run) and oligopoly (a few large interdependent firms shaped by collusion and game theory).",
      cards: [
        { q: "Why do monopolistically competitive firms only earn normal profit in the long run?", a: "Free entry lets new firms enter and compete away any supernormal profit." },
        { q: "What makes oligopoly firms 'interdependent'?", a: "Each firm's best decision depends on how rivals are expected to react." },
        { q: "What is collusion in an oligopoly?", a: "Firms coordinating (formally or tacitly) on price/output instead of competing, to raise joint profits." },
      ],
    },
    {
      id: "m08", title: "Pricing strategies",
      description: "How firms — including financial-services firms — actually set prices in practice: cost-plus/average-cost pricing, price discrimination between customer groups, and pricing across a product's life cycle or range.",
      cards: [
        { q: "What is price discrimination?", a: "Charging different customers (or segments) different prices for the same good, based on differences in willingness to pay." },
        { q: "What condition is generally needed for price discrimination to work?", a: "The firm must be able to identify/separate customer groups and prevent resale between them." },
        { q: "What is average-cost (cost-plus) pricing?", a: "Setting price by adding a margin on top of average cost per unit." },
      ],
    },
    {
      id: "m09", title: "Market failure and government intervention",
      description: "Why free markets don't always deliver a socially efficient outcome — externalities and other market failures — and the tools (taxation, regulation, subsidies) governments use, plus why intervention can itself go wrong.",
      cards: [
        { q: "What is a negative externality?", a: "A cost imposed on a third party not reflected in the market price (e.g. pollution)." },
        { q: "Give one policy tool a government can use to correct a negative externality.", a: "A tax on the activity (e.g. a carbon tax) to internalise the external cost." },
        { q: "Give one reason government intervention might fail to improve on the market outcome.", a: "Imperfect information, regulatory capture, or unintended behavioural responses (government failure)." },
      ],
    },
    {
      id: "m10", title: "The macroeconomic environment",
      description: "The big-picture variables governments track — GDP, growth, unemployment, inflation — how the circular flow of income links them, and how aggregate supply and demand together determine the overall price level.",
      cards: [
        { q: "What does GDP measure?", a: "The total value of goods and services produced in an economy over a period." },
        { q: "What's the difference between actual and potential growth?", a: "Actual growth is the real change in output; potential growth is the growth rate of the economy's productive capacity." },
        { q: "In the AS–AD model, what determines the overall price level?", a: "The interaction between aggregate supply and aggregate demand." },
      ],
    },
    {
      id: "m11", title: "Macroeconomic objectives",
      description: "The main goals governments pursue for the economy — sustainable growth, low unemployment, stable prices, and a sound balance of payments — and how business activity, unemployment and inflation interact.",
      cards: [
        { q: "Name the four classic macroeconomic policy objectives.", a: "Economic growth, low unemployment, low/stable inflation, and a sustainable balance of payments." },
        { q: "What is a business cycle?", a: "The recurring pattern of boom and recession (fluctuations in economic activity) around the long-term growth trend." },
        { q: "Give one cost of unemployment to the economy.", a: "Lost output/wasted resources (also: lower tax revenue, higher benefit spending, social costs)." },
      ],
    },
    {
      id: "m12", title: "International trade",
      description: "Why countries trade: the gains from specialisation and comparative advantage, arguments used to justify protectionism, and the role of the World Trade Organization in governing global trade rules.",
      cards: [
        { q: "What is the basis for the gains from trade between countries?", a: "Specialisation according to comparative advantage — each country produces what it's relatively most efficient at." },
        { q: "Give one argument used to justify trade protection.", a: "Protecting infant industries, or safeguarding domestic jobs (though these are debated)." },
        { q: "What is the role of the WTO?", a: "To set and enforce rules for international trade and help resolve trade disputes between member countries." },
      ],
    },
    {
      id: "m13", title: "Balance of payments and exchange rates",
      description: "How a country's balance of payments records trade and financial flows with the rest of the world, how exchange rates are determined, and how fixed versus floating regimes trade off stability against flexibility.",
      cards: [
        { q: "What does the balance of payments record?", a: "All economic transactions between a country's residents and the rest of the world." },
        { q: "What tends to happen to a currency's exchange rate if demand for its exports rises?", a: "The currency tends to appreciate (rise in value)." },
        { q: "Give one advantage of a floating exchange rate over a fixed one.", a: "It adjusts automatically to correct balance-of-payments imbalances without needing central bank intervention." },
      ],
    },
    {
      id: "m14", title: "The financial system",
      description: "The role of banks, insurers and investment funds in channelling funds through the economy, how they're exposed to credit and liquidity risk, and why systemic risk and financial innovation matter for stability.",
      cards: [
        { q: "What is 'liquidity risk' for a bank?", a: "The risk of being unable to meet short-term obligations because assets can't be converted to cash quickly enough." },
        { q: "Why is the banking sector more exposed to systemic risk than the non-bank financial sector?", a: "Banks are highly interconnected and rely on confidence/short-term funding, so one bank's failure can rapidly spread to others." },
        { q: "Give one example of how banks are exposed to credit risk.", a: "Loans, corporate bonds, securitisations, syndicated loans or credit derivatives." },
      ],
    },
    {
      id: "m15", title: "The money market and monetary policy",
      description: "How money supply and interest rates are determined, the money multiplier, and how central banks use monetary policy to influence business activity and inflation.",
      cards: [
        { q: "What is the 'money multiplier'?", a: "The factor by which an initial change in the monetary base leads to a larger change in the total money supply, via bank lending." },
        { q: "How does a rise in interest rates typically affect business activity?", a: "It raises the cost of borrowing, which tends to reduce investment and consumer spending, slowing activity." },
        { q: "What is a central bank primarily trying to achieve with monetary policy?", a: "Typically, price stability (an inflation target), alongside supporting stable growth and employment." },
      ],
    },
    {
      id: "m16", title: "Main strands of economic thinking",
      description: "A map of the major economic schools of thought — Classical, Marxian, Neo-classical/Keynesian, Monetarist and Austrian — and what distinguishes their views on how economies work.",
      cards: [
        { q: "What is the core Classical view on how markets self-correct?", a: "Prices and wages adjust flexibly, so markets clear on their own without needing government intervention." },
        { q: "What is the core Keynesian challenge to the Classical view?", a: "Prices/wages can be 'sticky', so markets may not self-correct quickly — demand deficiency can cause prolonged unemployment, justifying intervention." },
        { q: "What do Monetarists emphasise as the key driver of inflation?", a: "Growth in the money supply." },
      ],
    },
    {
      id: "m17", title: "Classical and Keynesian theory",
      description: "A deep dive comparing the Classical and Keynesian macroeconomic models — the aggregate demand-expenditure model, how equilibrium national income is determined, and the multiplier effect of a change in spending.",
      cards: [
        { q: "In the simple Keynesian model, what determines the equilibrium level of income?", a: "Where planned aggregate expenditure equals actual output/income." },
        { q: "What is the 'multiplier'?", a: "The factor by which a change in autonomous spending leads to a larger final change in national income." },
        { q: "What does a higher marginal propensity to consume do to the multiplier?", a: "It increases the multiplier's size." },
      ],
    },
    {
      id: "m18", title: "Relationship between the goods and money markets",
      description: "Links the real economy (goods market) with the financial economy (money market) to show how a change in money supply feeds through to interest rates, output and prices.",
      cards: [
        { q: "What happens to interest rates if the money supply increases (money demand unchanged)?", a: "Interest rates tend to fall." },
        { q: "How does a fall in interest rates typically affect the goods market?", a: "It stimulates investment and spending, increasing output/aggregate demand." },
        { q: "Why are the goods market and money market treated together rather than separately?", a: "Because interest rates link them — money-market conditions affect investment/spending, and goods-market activity affects money demand." },
      ],
    },
    {
      id: "m19", title: "Monetarist and new classical schools, and Keynesian responses",
      description: "Monetarist and New Classical critiques of Keynesian policy — rational expectations, the limits of demand management — and how Keynesians responded, including the debate over the stability of the unemployment-inflation relationship.",
      cards: [
        { q: "What is the 'rational expectations' idea associated with New Classical economics?", a: "People use all available information to anticipate policy effects, which can make some government policy ineffective in the short run." },
        { q: "What does the (short-run) Phillips curve suggest?", a: "A trade-off between unemployment and inflation — lower unemployment associated with higher inflation." },
        { q: "Why might the unemployment-inflation trade-off break down over time?", a: "If inflation expectations adjust, the trade-off can shift/disappear in the long run (accelerating inflation without a lasting fall in unemployment)." },
      ],
    },
    {
      id: "m20", title: "Supply-side policy",
      description: "Policies aimed at increasing the economy's productive capacity rather than managing demand — tax cuts, deregulation and competition policy — and their effect on business and growth.",
      cards: [
        { q: "What is the goal of supply-side policy?", a: "To increase the economy's productive capacity/potential output (rather than manage short-run demand)." },
        { q: "Give one example of a supply-side policy.", a: "Cutting taxes, deregulating markets, labour-market reform, or investing in education/infrastructure." },
        { q: "How might cutting business taxes affect investment?", a: "It can increase firms' post-tax returns, encouraging more investment." },
      ],
    },
    {
      id: "m21", title: "Demand-side policy",
      description: "Fiscal and monetary policy used to manage aggregate demand — how each works, what limits their effectiveness, fiscal rules, and the mechanics of monetary policy via central banks like the Bank of England.",
      cards: [
        { q: "What are the two main tools of demand-side policy?", a: "Fiscal policy (government spending/taxation) and monetary policy (interest rates/money supply)." },
        { q: "What is a 'fiscal rule'?", a: "A self-imposed constraint on government borrowing or debt, intended to keep fiscal policy sustainable and credible." },
        { q: "How does inflation targeting guide monetary policy?", a: "The central bank sets interest rates to keep inflation close to a target, adjusting rates as inflation forecasts rise or fall." },
      ],
    },
    {
      id: "m22", title: "Exchange rate policy",
      description: "How governments and central banks try to influence exchange rates, what that means for other macro policy and for business, and the purpose and effectiveness of monetary union and a single currency.",
      cards: [
        { q: "Give one way a central bank can try to influence its exchange rate.", a: "Direct intervention (buying/selling its own currency), or changing interest rates to attract/deter capital flows." },
        { q: "What is a monetary union?", a: "A group of countries sharing a single currency and (typically) a single central bank/monetary policy." },
        { q: "Give one drawback of a country joining a monetary union.", a: "It loses independent control of its own monetary policy and exchange rate as an adjustment tool." },
      ],
    },
    {
      id: "m23", title: "Global harmonisation and monetary union",
      description: "The drivers and business impact of globalisation and multinational activity, and the case for and against deeper monetary integration such as European Economic and Monetary Union.",
      cards: [
        { q: "Give one driving force of globalisation.", a: "Falling transport/communication costs, trade liberalisation, or the spread of multinational companies." },
        { q: "Give one benefit globalisation can bring to business.", a: "Access to larger markets and cheaper/more diverse inputs (also: increased competition driving efficiency)." },
        { q: "What was the Exchange Rate Mechanism (ERM)?", a: "A system that limited how much European currencies could fluctuate against each other, seen as a step toward monetary union." },
      ],
    },
    {
      id: "m24", title: "Summary of debates on theory and policy",
      description: "Ties the whole course together — how the different economic schools explain recent macroeconomic history, especially the 2008 financial crisis, and the ongoing stimulus-versus-austerity policy debate.",
      cards: [
        { q: "What triggered the 2008 global financial crisis?", a: "A banking/credit crisis originating in the US subprime mortgage market, which spread through the interconnected global financial system." },
        { q: "What is the 'stimulus vs austerity' debate about?", a: "Whether governments should increase spending/cut taxes to boost a weak economy (stimulus), or cut deficits/debt to restore confidence (austerity)." },
        { q: "Why is understanding multiple economic schools of thought useful when analysing a real crisis?", a: "Different schools highlight different causes and prescribe different remedies — no single model fully explains real-world events." },
      ],
    },
  ],
};

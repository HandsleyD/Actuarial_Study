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
        { q: "What is the 'economic system' of a market economy?", a: "Resources are allocated mainly through prices set by supply and demand, rather than central planning." },
        { q: "Name one input a business must decide on because of scarcity.", a: "Labour, capital, technology, or location (any factor of production)." },
        { q: "Why is 'ceteris paribus' (other things equal) used in economic models?", a: "It isolates the effect of one variable by holding all others constant, making cause and effect easier to analyse." },
        { q: "What is a 'positive' economic statement, as opposed to a 'normative' one?", a: "A positive statement is a testable, factual claim about how the economy works; a normative statement is a value judgement about what should happen." },
        { q: "How does economics help a business choose its location?", a: "By weighing the opportunity cost of alternative sites — access to markets, labour, and inputs — against costs." },
        { q: "What is a 'factor of production'?", a: "A resource used to produce goods and services — land, labour, capital or enterprise." },
        { q: "Why might a mixed economy combine markets and government intervention?", a: "Markets are efficient at allocating many resources, but government intervention corrects failures markets don't solve on their own (e.g. public goods, externalities)." },
        { q: "What is the 'invisible hand', as described by Adam Smith?", a: "The idea that individuals pursuing their own self-interest in a market can unintentionally produce good outcomes for society as a whole." },
        { q: "Give an example of a 'technology' choice a firm faces due to scarcity.", a: "Choosing between labour-intensive and capital-intensive production methods." },
        { q: "Why might microeconomic analysis be described as 'bottom-up' and macroeconomic analysis 'top-down'?", a: "Microeconomics builds understanding from individual decisions/markets; macroeconomics starts from economy-wide aggregates." },
        { q: "What is a 'command economy'?", a: "An economic system where the government (rather than markets) decides what, how and for whom to produce." },
        { q: "How can understanding economics help an actuary assess a business scenario?", a: "It provides a framework for evaluating trade-offs, incentives and market conditions that drive financial outcomes." },
      ],
    },
    {
      id: "m02", title: "Supply and demand (1)",
      description: "The building blocks of a competitive market: how the price mechanism coordinates buyers and sellers, what shifts demand and supply curves, and how equilibrium price and quantity are reached.",
      cards: [
        { q: "What happens to the demand curve when consumer income rises (normal good)?", a: "It shifts right — demand increases at every price." },
        { q: "Distinguish a 'movement along' a demand curve from a 'shift' of it.", a: "A price change causes a movement along the curve; a change in any other determinant (income, tastes, etc.) shifts the whole curve." },
        { q: "What is market equilibrium?", a: "The price and quantity at which quantity demanded equals quantity supplied, so there's no pressure for price to change." },
        { q: "What is the 'law of demand'?", a: "As price rises, quantity demanded falls, other things equal (and vice versa)." },
        { q: "What is the 'law of supply'?", a: "As price rises, quantity supplied rises, other things equal." },
        { q: "Give one example of a substitute good's effect on demand.", a: "If the price of tea rises, demand for coffee (a substitute) tends to increase." },
        { q: "Give one example of a complementary good's effect on demand.", a: "If the price of printers falls, demand for printer ink (a complement) tends to rise." },
        { q: "What happens to the supply curve if input costs rise?", a: "It shifts left (up) — less is supplied at every price." },
        { q: "What causes excess demand at a given price?", a: "The price is below the equilibrium price, so quantity demanded exceeds quantity supplied." },
        { q: "How does the price mechanism resolve excess supply?", a: "Price falls, which reduces quantity supplied and increases quantity demanded until equilibrium is restored." },
        { q: "What is a 'normal good'?", a: "A good for which demand rises as consumer income rises." },
        { q: "What is an 'inferior good'?", a: "A good for which demand falls as consumer income rises." },
        { q: "What happens to the equilibrium price and quantity if demand increases (supply unchanged)?", a: "Both equilibrium price and quantity rise." },
        { q: "What happens to equilibrium price if supply increases (demand unchanged)?", a: "Equilibrium price falls (and quantity rises)." },
        { q: "What role does the price mechanism play in a market economy?", a: "It signals scarcity/abundance and coordinates independent decisions of buyers and sellers without central direction." },
      ],
    },
    {
      id: "m03", title: "Supply and demand (2)",
      description: "Builds on Module 2 with elasticity: how strongly quantity demanded or supplied responds to changes in price or income, what drives elasticity, and why it matters in the short vs long run.",
      cards: [
        { q: "How is price elasticity of demand calculated?", a: "% change in quantity demanded ÷ % change in price." },
        { q: "Name two factors that make demand more price-elastic.", a: "Availability of close substitutes and the good being a luxury rather than a necessity (also: high share of income spent, longer time to adjust)." },
        { q: "Why is supply typically more elastic in the long run than the short run?", a: "Firms have more time to adjust capacity, inputs and production methods." },
        { q: "What does a price elasticity of demand value greater than 1 (in absolute terms) indicate?", a: "Demand is elastic — quantity demanded changes proportionally more than price." },
        { q: "What does a price elasticity of demand value less than 1 indicate?", a: "Demand is inelastic — quantity demanded changes proportionally less than price." },
        { q: "How is income elasticity of demand calculated?", a: "% change in quantity demanded ÷ % change in income." },
        { q: "What does a negative income elasticity of demand imply about a good?", a: "It's an inferior good — demand falls as income rises." },
        { q: "How is price elasticity of supply calculated?", a: "% change in quantity supplied ÷ % change in price." },
        { q: "Give one reason a firm might face increased uncertainty about future market movements.", a: "Volatile input costs, changing consumer tastes, or unpredictable competitor behaviour." },
        { q: "How can price expectations create a speculative bubble?", a: "If buyers expect prices to keep rising, they buy now to profit later, pushing price up further and detaching it from underlying value." },
        { q: "What is 'cross-price elasticity of demand'?", a: "The responsiveness of quantity demanded of one good to a change in the price of another good." },
        { q: "What sign does cross-price elasticity have for substitute goods?", a: "Positive — a price rise in one increases demand for the other." },
        { q: "What sign does cross-price elasticity have for complementary goods?", a: "Negative — a price rise in one decreases demand for the other." },
        { q: "Why does time matter for price elasticity of demand?", a: "Consumers have more time to find substitutes and adjust behaviour the longer a price change persists, making demand more elastic over time." },
        { q: "What is 'unitary elastic' demand?", a: "Demand where quantity demanded changes by exactly the same percentage as price (elasticity = 1)." },
      ],
    },
    {
      id: "m04", title: "Background to demand",
      description: "Looks inside consumer choice: how utility and indifference curves represent preferences, how budget constraints determine what's affordable, and how behavioural economics and advertising complicate the 'rational consumer' picture.",
      cards: [
        { q: "What does an indifference curve represent?", a: "Combinations of two goods that give a consumer the same level of satisfaction (utility)." },
        { q: "What does a budget line show?", a: "The combinations of two goods a consumer can afford given their income and the goods' prices." },
        { q: "Give one way behavioural economics challenges the standard rational-choice model.", a: "Consumers don't always have perfect information or act rationally — biases and heuristics affect real choices." },
        { q: "What is 'marginal utility'?", a: "The extra satisfaction gained from consuming one more unit of a good." },
        { q: "What does the principle of diminishing marginal utility state?", a: "Each additional unit of a good consumed tends to give less extra satisfaction than the one before." },
        { q: "What happens at the consumer's optimal choice on a graph of indifference curves and a budget line?", a: "The budget line is tangent to the highest attainable indifference curve." },
        { q: "Give one assumption of the standard rational consumer model.", a: "Consumers have complete, consistent preferences and full information, and choose to maximise utility." },
        { q: "How can advertising shift the demand curve?", a: "Persuasive advertising can increase demand at every price by changing tastes/preferences, shifting the curve right." },
        { q: "What is 'informative' advertising, as distinct from 'persuasive' advertising?", a: "Advertising that provides useful facts to help consumers make better-informed choices, rather than trying to change preferences." },
        { q: "Give one example of irrational consumer behaviour behavioural economics highlights.", a: "Anchoring on an initial price, herd behaviour, or overweighting recent/vivid information." },
        { q: "What does the slope of an indifference curve represent?", a: "The marginal rate of substitution — how much of one good a consumer will give up for one more unit of another, keeping utility constant." },
        { q: "Why do indifference curves not cross?", a: "Crossing would imply inconsistent preference rankings for the same combinations of goods." },
        { q: "What happens to the budget line if income rises (prices unchanged)?", a: "It shifts outward, parallel to the original line." },
        { q: "What happens to the budget line if the price of one good falls?", a: "It pivots outward on that good's axis, becoming flatter or steeper depending on which good's price changed." },
        { q: "What is a 'heuristic' in behavioural economics?", a: "A mental shortcut people use to make decisions quickly, which can lead to systematic biases." },
      ],
    },
    {
      id: "m05", title: "Background to supply",
      description: "The production and cost side of the firm: how inputs turn into outputs via the production function, how average/marginal/total costs behave, and how economies of scale and profit-maximising output are determined.",
      cards: [
        { q: "What is marginal cost?", a: "The extra cost of producing one more unit of output." },
        { q: "What are economies of scale?", a: "Falling average costs as the scale of production increases." },
        { q: "At what point does a profit-maximising firm choose its output level?", a: "Where marginal revenue equals marginal cost." },
        { q: "What is 'average cost'?", a: "Total cost divided by the number of units produced." },
        { q: "What is the difference between the short run and long run in production theory?", a: "In the short run at least one input (usually capital) is fixed; in the long run all inputs are variable." },
        { q: "What is the law of diminishing (marginal) returns?", a: "Adding more of a variable input to a fixed input eventually increases output by smaller and smaller amounts." },
        { q: "What is 'total revenue'?", a: "Price per unit multiplied by quantity sold." },
        { q: "Give one cause of economies of scale.", a: "Bulk-buying discounts, specialisation of labour, or spreading fixed costs over more output." },
        { q: "What is a 'diseconomy of scale'?", a: "A rise in average costs as output increases further, often due to coordination/management difficulties in very large firms." },
        { q: "What is the short-run 'shut-down point'?", a: "The output/price level where a firm's revenue no longer covers its variable costs, so it's better off producing nothing." },
        { q: "What is 'marginal physical product'?", a: "The extra output produced by adding one more unit of a variable input." },
        { q: "What is 'average physical product'?", a: "Total output divided by the quantity of the variable input used." },
        { q: "What is 'fixed cost'?", a: "A cost that does not vary with the level of output in the short run (e.g. rent)." },
        { q: "What is 'variable cost'?", a: "A cost that changes directly with the level of output (e.g. raw materials)." },
        { q: "How is marginal revenue related to a competitive firm's price?", a: "For a price-taking firm, marginal revenue equals price for every unit sold." },
      ],
    },
    {
      id: "m06", title: "Perfect competition and monopoly",
      description: "Two polar-opposite market structures: perfect competition (many small firms, no market power, price-takers) versus monopoly (a single firm with market power, barriers to entry, and price above marginal cost).",
      cards: [
        { q: "Name two defining features of perfect competition.", a: "Many small firms, a homogeneous product, free entry/exit, and perfect information (firms are price-takers)." },
        { q: "Why can a monopolist earn supernormal profit in the long run?", a: "Barriers to entry stop new firms competing the profit away." },
        { q: "What determines a monopolist's profit-maximising price and output?", a: "Output where marginal revenue = marginal cost; price is then read off the demand curve at that output." },
        { q: "Why are firms in perfect competition 'price-takers'?", a: "Each firm is so small relative to the market that it cannot influence the market price — it must accept the going price." },
        { q: "What happens to supernormal profit in perfect competition in the long run?", a: "Free entry attracts new firms until profit is competed down to normal profit." },
        { q: "What is a 'barrier to entry'?", a: "Anything that makes it difficult or costly for new firms to enter a market, e.g. high start-up costs, patents, or economies of scale." },
        { q: "What is a 'contestable market'?", a: "A market where entry and exit are easy and costless, so incumbent firms behave competitively even with few actual competitors." },
        { q: "How does a monopolist's demand curve differ from a perfectly competitive firm's?", a: "The monopolist faces the whole market's downward-sloping demand curve, not a flat (price-taking) one." },
        { q: "Give one potential benefit of monopoly despite its inefficiency.", a: "Supernormal profits can fund research and development, and economies of scale can lower costs." },
        { q: "What is 'allocative efficiency'?", a: "Resources are allocated so that price equals marginal cost, reflecting what consumers value — typically achieved under perfect competition, not monopoly." },
        { q: "In perfect competition, what does the firm's demand curve look like?", a: "Perfectly horizontal (flat) at the market price — the firm can sell any quantity at that price." },
        { q: "Why is perfect competition considered productively efficient in the long run?", a: "Firms are forced to produce at the lowest point of their average cost curve to survive against competition." },
        { q: "What is a 'natural monopoly'?", a: "A market where one firm can supply the whole market at lower cost than two or more firms could, often due to very high fixed costs." },
        { q: "Give one example of a legal barrier to entry.", a: "Patents, licences, or government-granted exclusive rights." },
        { q: "Why might a monopoly be criticised on efficiency grounds?", a: "It produces less output at a higher price than a competitive market would, creating a deadweight loss to society." },
      ],
    },
    {
      id: "m07", title: "Monopolistic competition and oligopoly",
      description: "Market structures between the extremes: monopolistic competition (many firms, differentiated products, only normal profit long-run) and oligopoly (a few large interdependent firms shaped by collusion and game theory).",
      cards: [
        { q: "Why do monopolistically competitive firms only earn normal profit in the long run?", a: "Free entry lets new firms enter and compete away any supernormal profit." },
        { q: "What makes oligopoly firms 'interdependent'?", a: "Each firm's best decision depends on how rivals are expected to react." },
        { q: "What is collusion in an oligopoly?", a: "Firms coordinating (formally or tacitly) on price/output instead of competing, to raise joint profits." },
        { q: "What is 'product differentiation'?", a: "Making a product distinct from competitors' (through branding, features, quality) so it isn't a perfect substitute." },
        { q: "Why might a monopolistically competitive firm advertise heavily?", a: "To reinforce product differentiation and build brand loyalty, since products are otherwise similar." },
        { q: "What is a 'kinked demand curve' used to explain in oligopoly?", a: "Why oligopoly prices can be sticky — rivals are assumed to match price cuts but not price rises." },
        { q: "What is game theory used for in analysing oligopoly?", a: "To model how firms' pricing/output decisions depend on anticipating rivals' strategic responses." },
        { q: "What is the 'prisoner's dilemma' in the context of oligopoly collusion?", a: "Each firm has an incentive to cheat on a collusive agreement even though both would be better off cooperating." },
        { q: "Why is collusion often unstable?", a: "Each firm has an incentive to secretly undercut the agreed price to gain market share, breaking the agreement." },
        { q: "Give one reason collusion can harm consumers.", a: "It can lead to higher prices and lower output than a competitive market would produce." },
        { q: "How many firms typically characterise an oligopoly?", a: "A small number of large firms that dominate the market." },
        { q: "What is 'non-price competition'?", a: "Firms competing through means other than price, e.g. advertising, product quality, or branding." },
        { q: "What is a 'cartel'?", a: "A formal agreement between firms to collude on price or output, often illegal under competition law." },
        { q: "Why is demand relatively elastic for a monopolistically competitive firm?", a: "Many close substitutes are available from other firms, so consumers can switch easily if price rises." },
        { q: "What is a first-mover advantage in an oligopoly?", a: "A benefit gained by the firm that acts first (e.g. setting a price or entering a market), which rivals must then react to." },
      ],
    },
    {
      id: "m08", title: "Pricing strategies",
      description: "How firms — including financial-services firms — actually set prices in practice: cost-plus/average-cost pricing, price discrimination between customer groups, and pricing across a product's life cycle or range.",
      cards: [
        { q: "What is price discrimination?", a: "Charging different customers (or segments) different prices for the same good, based on differences in willingness to pay." },
        { q: "What condition is generally needed for price discrimination to work?", a: "The firm must be able to identify/separate customer groups and prevent resale between them." },
        { q: "What is average-cost (cost-plus) pricing?", a: "Setting price by adding a margin on top of average cost per unit." },
        { q: "What is 'price skimming'?", a: "Setting a high initial price for a new product to capture early high-willingness-to-pay customers, then lowering it over time." },
        { q: "What is 'penetration pricing'?", a: "Setting a low initial price to gain market share quickly, then potentially raising it later." },
        { q: "What is 'first-degree' price discrimination?", a: "Charging each individual customer the maximum price they are willing to pay." },
        { q: "What is 'third-degree' price discrimination?", a: "Charging different prices to different identifiable groups of customers (e.g. students vs adults)." },
        { q: "Why might a financial services firm price products differently across a product's life cycle?", a: "To reflect changing demand, competition and costs as the product moves from launch to maturity to decline." },
        { q: "What is a limitation of pure cost-plus pricing?", a: "It ignores demand conditions and competitors' prices, so it may set price too high or too low relative to what the market will bear." },
        { q: "Why might bundling products together be a pricing strategy?", a: "It can increase overall revenue by capturing more of different customers' willingness to pay across a set of products." },
        { q: "What is 'psychological pricing'?", a: "Setting prices just below a round number (e.g. £9.99) to make them appear cheaper." },
        { q: "What is 'predatory pricing'?", a: "Setting prices very low, potentially below cost, to drive competitors out of the market (often restricted by competition law)." },
        { q: "What condition must hold for a firm to profitably price-discriminate between two markets?", a: "The markets must be separable, and have different price elasticities of demand." },
        { q: "Why might peak-load pricing be used?", a: "To charge higher prices when demand is highest (e.g. rush hour) and manage capacity constraints." },
        { q: "How can competitor pricing influence a firm's own pricing strategy?", a: "A firm may price close to, above, or below rivals depending on differentiation and desired market position." },
      ],
    },
    {
      id: "m09", title: "Market failure and government intervention",
      description: "Why free markets don't always deliver a socially efficient outcome — externalities and other market failures — and the tools (taxation, regulation, subsidies) governments use, plus why intervention can itself go wrong.",
      cards: [
        { q: "What is a negative externality?", a: "A cost imposed on a third party not reflected in the market price (e.g. pollution)." },
        { q: "Give one policy tool a government can use to correct a negative externality.", a: "A tax on the activity (e.g. a carbon tax) to internalise the external cost." },
        { q: "Give one reason government intervention might fail to improve on the market outcome.", a: "Imperfect information, regulatory capture, or unintended behavioural responses (government failure)." },
        { q: "What is a positive externality?", a: "A benefit to a third party not reflected in the market price (e.g. education, vaccination)." },
        { q: "Why does a positive externality lead to under-production in a free market?", a: "The market only reflects private benefit, not the extra social benefit, so less is produced than is socially optimal." },
        { q: "What is a public good, and why does the market under-provide it?", a: "A good that is non-excludable and non-rival (e.g. street lighting); free-riders can't be excluded, so private firms have little incentive to supply it." },
        { q: "What is 'social efficiency'?", a: "The output level where marginal social benefit equals marginal social cost." },
        { q: "Give one form of regulation government can use instead of taxation to correct a market failure.", a: "Setting quotas/limits, standards, or outright bans on an activity." },
        { q: "What is 'regulatory capture'?", a: "When a regulator ends up acting in the interests of the industry it regulates rather than the public." },
        { q: "Give one policy instrument used to promote environmental sustainability.", a: "A carbon tax, cap-and-trade emissions trading scheme, or subsidies for green technology." },
        { q: "What is a 'merit good'?", a: "A good that is under-consumed relative to the social optimum because people undervalue its benefits (e.g. education, healthcare)." },
        { q: "What is a 'demerit good'?", a: "A good that is over-consumed relative to the social optimum because people undervalue its costs (e.g. tobacco)." },
        { q: "How does a subsidy correct under-provision of a good with positive externalities?", a: "It lowers the effective price to consumers/producers, encouraging more consumption/production closer to the social optimum." },
        { q: "What is the 'Coase theorem' broadly about?", a: "Under certain conditions (clear property rights, low transaction costs), private parties can bargain to resolve externalities efficiently without government intervention." },
        { q: "Why might imperfect information be considered a form of market failure?", a: "If buyers/sellers lack full information, they may make decisions that don't reflect true costs/benefits, leading to inefficient outcomes." },
      ],
    },
    {
      id: "m10", title: "The macroeconomic environment",
      description: "The big-picture variables governments track — GDP, growth, unemployment, inflation — how the circular flow of income links them, and how aggregate supply and demand together determine the overall price level.",
      cards: [
        { q: "What does GDP measure?", a: "The total value of goods and services produced in an economy over a period." },
        { q: "What's the difference between actual and potential growth?", a: "Actual growth is the real change in output; potential growth is the growth rate of the economy's productive capacity." },
        { q: "In the AS–AD model, what determines the overall price level?", a: "The interaction between aggregate supply and aggregate demand." },
        { q: "What are the four components of aggregate demand?", a: "Consumption, investment, government spending, and net exports (exports minus imports)." },
        { q: "What is 'aggregate supply'?", a: "The total quantity of goods and services producers are willing to supply at each price level." },
        { q: "What is the 'circular flow of income'?", a: "A model showing how income flows between households and firms via factor and product markets, with injections (investment, government spending, exports) and withdrawals (savings, taxes, imports)." },
        { q: "What is a 'recession', in common usage?", a: "A sustained period (often defined as two consecutive quarters) of falling real GDP." },
        { q: "What is 'cost-push inflation'?", a: "Inflation caused by rising production costs (e.g. wages, input prices) pushing up the general price level." },
        { q: "What is 'demand-pull inflation'?", a: "Inflation caused by aggregate demand growing faster than the economy's productive capacity." },
        { q: "Why is GDP an imperfect measure of economic welfare?", a: "It ignores factors like income distribution, unpaid work, environmental damage and quality-of-life changes." },
        { q: "What is 'potential output'?", a: "The maximum sustainable level of output an economy can produce using all its resources efficiently, without triggering rising inflation." },
        { q: "What is the difference between a 'boom' and a 'recession' in the business cycle?", a: "A boom is a period of above-trend growth/high output; a recession is a period of falling output below trend." },
        { q: "What are 'leading indicators' used for in macroeconomics?", a: "Signalling likely future changes in economic activity, e.g. business/consumer confidence surveys." },
        { q: "Why might aggregate supply be viewed as vertical in the very long run?", a: "Because output is ultimately determined by the economy's real resources and technology, not the price level." },
        { q: "What is 'stagflation'?", a: "A combination of stagnant growth (or recession), high unemployment, and high inflation occurring simultaneously." },
      ],
    },
    {
      id: "m11", title: "Macroeconomic objectives",
      description: "The main goals governments pursue for the economy — sustainable growth, low unemployment, stable prices, and a sound balance of payments — and how business activity, unemployment and inflation interact.",
      cards: [
        { q: "Name the four classic macroeconomic policy objectives.", a: "Economic growth, low unemployment, low/stable inflation, and a sustainable balance of payments." },
        { q: "What is a business cycle?", a: "The recurring pattern of boom and recession (fluctuations in economic activity) around the long-term growth trend." },
        { q: "Give one cost of unemployment to the economy.", a: "Lost output/wasted resources (also: lower tax revenue, higher benefit spending, social costs)." },
        { q: "What is 'frictional unemployment'?", a: "Short-term unemployment as people move between jobs." },
        { q: "What is 'structural unemployment'?", a: "Unemployment caused by a mismatch between workers' skills/location and available jobs, often due to long-term shifts in the economy." },
        { q: "What is 'cyclical unemployment'?", a: "Unemployment caused by a downturn in the business cycle, when aggregate demand falls." },
        { q: "What is the difference between 'nominal' and 'real' GDP?", a: "Nominal GDP is measured at current prices; real GDP is adjusted for inflation to reflect actual output changes." },
        { q: "Why do policymakers care about the balance of payments as a macro objective?", a: "A persistent deficit can signal unsustainable borrowing from abroad and put downward pressure on the currency." },
        { q: "What is the output gap?", a: "The difference between actual output and potential output in the economy." },
        { q: "Why might macroeconomic objectives conflict with each other?", a: "Policies that reduce unemployment (boosting demand) can also raise inflation — objectives aren't always achievable simultaneously." },
        { q: "What is the 'claimant count' measure of unemployment?", a: "The number of people claiming unemployment-related benefits." },
        { q: "What is the 'ILO/labour force survey' measure of unemployment?", a: "The number of people who are out of work, available to work, and actively seeking work, based on a survey rather than benefit claims." },
        { q: "Why might official unemployment figures understate 'true' joblessness?", a: "They can exclude discouraged workers who have stopped actively searching, or those underemployed in part-time work." },
        { q: "What is 'full employment'?", a: "A situation where unemployment is at its natural rate — only frictional and structural unemployment remain, with no cyclical unemployment." },
        { q: "Why is low and stable inflation generally preferred to zero inflation as a policy objective?", a: "A small buffer avoids the risk of deflation, which can be more damaging (falling prices delaying spending, rising real debt burdens)." },
      ],
    },
    {
      id: "m12", title: "International trade",
      description: "Why countries trade: the gains from specialisation and comparative advantage, arguments used to justify protectionism, and the role of the World Trade Organization in governing global trade rules.",
      cards: [
        { q: "What is the basis for the gains from trade between countries?", a: "Specialisation according to comparative advantage — each country produces what it's relatively most efficient at." },
        { q: "Give one argument used to justify trade protection.", a: "Protecting infant industries, or safeguarding domestic jobs (though these are debated)." },
        { q: "What is the role of the WTO?", a: "To set and enforce rules for international trade and help resolve trade disputes between member countries." },
        { q: "What is 'comparative advantage'?", a: "The ability to produce a good at a lower opportunity cost than another country, even without an absolute advantage." },
        { q: "How does comparative advantage differ from absolute advantage?", a: "Absolute advantage means producing more with the same resources; comparative advantage is about relative opportunity cost, which is what actually generates gains from trade." },
        { q: "What is a tariff?", a: "A tax imposed on imported goods, raising their price to consumers." },
        { q: "What is a quota, in trade policy?", a: "A limit on the physical quantity of a good that can be imported." },
        { q: "Give one cost of protectionism to the protecting country.", a: "Higher prices and less choice for consumers, and potential retaliation from trading partners." },
        { q: "What is the 'infant industry' argument for protection?", a: "Temporarily protecting a new domestic industry from foreign competition until it becomes competitive." },
        { q: "How can international trade increase a country's productive efficiency?", a: "By allowing countries to specialise in what they produce most efficiently and trade for the rest, rather than producing everything themselves." },
        { q: "What is a 'trade bloc'?", a: "A group of countries that agree to reduce trade barriers between themselves (e.g. a free trade area or customs union)." },
        { q: "What is the difference between a free trade area and a customs union?", a: "A customs union also applies a common external tariff to non-members, while a free trade area does not." },
        { q: "Give one non-tariff barrier to trade.", a: "Quotas, subsidies to domestic producers, or regulatory/technical standards that disadvantage foreign goods." },
        { q: "Why might a country run a persistent trade deficit?", a: "It imports more than it exports, often financed by capital inflows or borrowing from abroad." },
        { q: "How can trade increase consumer choice?", a: "It gives consumers access to a wider range of goods and services than domestic production alone could offer." },
      ],
    },
    {
      id: "m13", title: "Balance of payments and exchange rates",
      description: "How a country's balance of payments records trade and financial flows with the rest of the world, how exchange rates are determined, and how fixed versus floating regimes trade off stability against flexibility.",
      cards: [
        { q: "What does the balance of payments record?", a: "All economic transactions between a country's residents and the rest of the world." },
        { q: "What tends to happen to a currency's exchange rate if demand for its exports rises?", a: "The currency tends to appreciate (rise in value)." },
        { q: "Give one advantage of a floating exchange rate over a fixed one.", a: "It adjusts automatically to correct balance-of-payments imbalances without needing central bank intervention." },
        { q: "What are the two main components of the balance of payments?", a: "The current account (trade in goods/services, income, transfers) and the capital/financial account (investment and financial flows)." },
        { q: "What is a 'current account deficit'?", a: "When a country's imports of goods, services and income outflows exceed its exports and income inflows." },
        { q: "What is a 'floating' exchange rate?", a: "An exchange rate determined by market forces of supply and demand for the currency, without government/central bank intervention." },
        { q: "What is a 'fixed' exchange rate?", a: "An exchange rate pegged by the government/central bank to another currency or asset, maintained through intervention." },
        { q: "What tends to happen to a currency if a country's interest rates rise relative to others?", a: "The currency tends to appreciate, as higher rates attract foreign capital inflows seeking better returns." },
        { q: "Give one disadvantage of a floating exchange rate for business.", a: "Exchange rate volatility creates uncertainty for firms trading internationally, complicating pricing and planning." },
        { q: "How does currency depreciation affect a country's exports?", a: "Exports become cheaper for foreign buyers, which can increase export volumes (all else equal)." },
        { q: "What is 'purchasing power parity' (PPP)?", a: "A theory that exchange rates should adjust so that identical goods cost the same in different countries when converted to a common currency." },
        { q: "What is 'currency speculation'?", a: "Buying or selling currency based on expectations of future exchange rate movements, aiming to profit from the change." },
        { q: "How might a large current account deficit put downward pressure on a currency?", a: "It means more of the currency is being sold to buy foreign goods/assets than is being bought from abroad, increasing its supply relative to demand." },
        { q: "What is a 'devaluation'?", a: "A deliberate reduction in the official value of a fixed exchange rate by the government/central bank." },
        { q: "Why might a country intervene to prevent excessive currency appreciation?", a: "To protect the competitiveness of its exporters, who would otherwise become more expensive to foreign buyers." },
      ],
    },
    {
      id: "m14", title: "The financial system",
      description: "The role of banks, insurers and investment funds in channelling funds through the economy, how they're exposed to credit and liquidity risk, and why systemic risk and financial innovation matter for stability.",
      cards: [
        { q: "What is 'liquidity risk' for a bank?", a: "The risk of being unable to meet short-term obligations because assets can't be converted to cash quickly enough." },
        { q: "Why is the banking sector more exposed to systemic risk than the non-bank financial sector?", a: "Banks are highly interconnected and rely on confidence/short-term funding, so one bank's failure can rapidly spread to others." },
        { q: "Give one example of how banks are exposed to credit risk.", a: "Loans, corporate bonds, securitisations, syndicated loans or credit derivatives." },
        { q: "What is the main function of a commercial bank?", a: "To take deposits and make loans, channelling funds from savers to borrowers." },
        { q: "What is 'maturity transformation'?", a: "Banks funding long-term loans with short-term deposits, which is profitable but a source of liquidity risk." },
        { q: "What is 'securitisation'?", a: "Pooling loans (e.g. mortgages) and selling them as tradeable securities to investors." },
        { q: "What is 'shadow banking'?", a: "Credit intermediation carried out by non-bank institutions, outside the traditional regulated banking system." },
        { q: "What is the role of an insurance company in the financial system?", a: "Pooling and transferring risk from individuals/firms in exchange for premiums, and investing those premiums in financial markets." },
        { q: "Why do regulators worry about interconnectedness between banks?", a: "Because one bank's failure can trigger losses at counterparties, spreading distress through the system (contagion)." },
        { q: "Give one example of financial innovation potentially shifting activity to non-banks.", a: "Peer-to-peer lending or fintech payment platforms performing functions traditionally done by banks." },
        { q: "What is 'capital adequacy' for a bank?", a: "The requirement that a bank hold enough capital relative to its risk-weighted assets to absorb potential losses." },
        { q: "What is a 'run on a bank'?", a: "When many depositors withdraw funds simultaneously, fearing the bank's failure, which can itself cause the bank to fail." },
        { q: "What is the role of a deposit insurance scheme?", a: "To guarantee deposits up to a limit, reducing the incentive for depositors to panic-withdraw and helping prevent bank runs." },
        { q: "What is a 'syndicated loan'?", a: "A large loan provided jointly by a group of lenders to a single borrower, spreading the credit risk." },
        { q: "Why are insurance companies generally considered less prone to systemic risk than banks?", a: "They are funded mainly by premiums rather than short-term deposits/wholesale funding, so they are less exposed to sudden liquidity demands." },
      ],
    },
    {
      id: "m15", title: "The money market and monetary policy",
      description: "How money supply and interest rates are determined, the money multiplier, and how central banks use monetary policy to influence business activity and inflation.",
      cards: [
        { q: "What is the 'money multiplier'?", a: "The factor by which an initial change in the monetary base leads to a larger change in the total money supply, via bank lending." },
        { q: "How does a rise in interest rates typically affect business activity?", a: "It raises the cost of borrowing, which tends to reduce investment and consumer spending, slowing activity." },
        { q: "What is a central bank primarily trying to achieve with monetary policy?", a: "Typically, price stability (an inflation target), alongside supporting stable growth and employment." },
        { q: "What are the main functions of money?", a: "A medium of exchange, a unit of account, and a store of value." },
        { q: "How do commercial banks create money?", a: "By lending out a proportion of deposits, which get re-deposited and lent again, expanding the money supply." },
        { q: "What is the 'monetary base'?", a: "The central bank money in an economy — cash in circulation plus commercial banks' reserves at the central bank." },
        { q: "What tool does a central bank most commonly use to implement monetary policy?", a: "Setting the base/policy interest rate." },
        { q: "What is 'quantitative easing'?", a: "A central bank creating money to buy financial assets (e.g. government bonds), aiming to lower long-term interest rates and boost the money supply." },
        { q: "Why might a central bank be independent of government?", a: "To make interest-rate decisions based on economic conditions rather than short-term political pressure, improving policy credibility." },
        { q: "How does a lower interest rate affect the exchange rate, typically?", a: "It tends to make the currency less attractive to foreign investors, causing it to depreciate." },
        { q: "What is 'narrow money'?", a: "The most liquid forms of money, such as cash and instant-access deposits." },
        { q: "What is 'broad money'?", a: "A wider measure of the money supply including narrow money plus less liquid assets like savings accounts and time deposits." },
        { q: "What happens to bond prices when interest rates rise?", a: "Bond prices fall — existing bonds with lower fixed coupons become less attractive relative to new, higher-yielding bonds." },
        { q: "What is the 'yield curve'?", a: "A graph showing interest rates on bonds of the same credit quality but different maturities." },
        { q: "Why might an inverted yield curve be watched as a recession signal?", a: "It suggests investors expect lower interest rates/economic weakness in the future relative to now." },
      ],
    },
    {
      id: "m16", title: "Main strands of economic thinking",
      description: "A map of the major economic schools of thought — Classical, Marxian, Neo-classical/Keynesian, Monetarist and Austrian — and what distinguishes their views on how economies work.",
      cards: [
        { q: "What is the core Classical view on how markets self-correct?", a: "Prices and wages adjust flexibly, so markets clear on their own without needing government intervention." },
        { q: "What is the core Keynesian challenge to the Classical view?", a: "Prices/wages can be 'sticky', so markets may not self-correct quickly — demand deficiency can cause prolonged unemployment, justifying intervention." },
        { q: "What do Monetarists emphasise as the key driver of inflation?", a: "Growth in the money supply." },
        { q: "What is the core idea of Marxian economics regarding capitalism?", a: "That capitalism is inherently exploitative of labour and prone to internal crises/class conflict." },
        { q: "What distinguishes 'Austrian' economics from mainstream approaches?", a: "Emphasis on individual choice, scepticism of central planning/intervention, and reliance on qualitative rather than mathematical/statistical analysis." },
        { q: "What is 'neo-classical' economics broadly concerned with?", a: "Explaining prices, outputs and income distribution through supply and demand, based on rational optimising behaviour." },
        { q: "What does 'post-Keynesian' economics emphasise, relative to mainstream Keynesianism?", a: "Greater uncertainty, the role of money/credit, and scepticism about markets self-correcting even in the long run." },
        { q: "Why is it useful for an actuary to understand multiple economic schools rather than just one?", a: "Real-world events and policy debates draw on different schools' assumptions — understanding several improves judgement on economic scenarios." },
        { q: "What common thread links Classical and Monetarist economists?", a: "Both broadly trust markets to self-correct and are wary of excessive government intervention." },
        { q: "What is 'laissez-faire'?", a: "A policy stance of minimal government intervention in the economy, letting markets operate freely." },
        { q: "What is 'general equilibrium' analysis?", a: "Analysing how all markets in an economy interact and reach equilibrium simultaneously, rather than looking at one market in isolation." },
        { q: "What is 'partial equilibrium' analysis?", a: "Analysing equilibrium in a single market, holding conditions in all other markets constant." },
        { q: "Why did the Great Depression challenge Classical economic thinking?", a: "Markets did not self-correct quickly as Classical theory predicted — unemployment remained high for a prolonged period." },
        { q: "What is 'institutional economics' broadly concerned with?", a: "How laws, norms and institutions shape economic behaviour and outcomes, beyond pure price/market mechanisms." },
        { q: "Why might different economic schools disagree about the right policy response to a recession?", a: "They hold different assumptions about how quickly markets self-correct and how effective government intervention is." },
      ],
    },
    {
      id: "m17", title: "Classical and Keynesian theory",
      description: "A deep dive comparing the Classical and Keynesian macroeconomic models — the aggregate demand-expenditure model, how equilibrium national income is determined, and the multiplier effect of a change in spending.",
      cards: [
        { q: "In the simple Keynesian model, what determines the equilibrium level of income?", a: "Where planned aggregate expenditure equals actual output/income." },
        { q: "What is the 'multiplier'?", a: "The factor by which a change in autonomous spending leads to a larger final change in national income." },
        { q: "What does a higher marginal propensity to consume do to the multiplier?", a: "It increases the multiplier's size." },
        { q: "What does the Classical model assume about wages and prices that Keynes challenged?", a: "That they are flexible and adjust quickly to clear markets; Keynes argued they can be 'sticky', especially wages." },
        { q: "What is 'aggregate expenditure' in the Keynesian model?", a: "The total planned spending in the economy — consumption, investment, government spending and net exports." },
        { q: "What happens if planned aggregate expenditure exceeds actual output?", a: "Firms run down inventories and increase production, raising output/income until they're equal again." },
        { q: "What is the 'marginal propensity to consume' (MPC)?", a: "The proportion of an extra unit of income that is spent on consumption rather than saved." },
        { q: "What is the simple multiplier formula in a closed economy with no government?", a: "1 ÷ (1 − MPC)." },
        { q: "Why might Keynes have argued government spending can lift an economy out of recession?", a: "Because the multiplier effect means an initial injection of spending raises national income by more than the initial amount." },
        { q: "What is 'the paradox of thrift'?", a: "If everyone tries to save more during a downturn, aggregate demand can fall, reducing income and potentially reducing total saving." },
        { q: "What is 'planned' versus 'actual' investment in the Keynesian model?", a: "Planned investment is what firms intend to spend; actual investment can differ due to unplanned changes in inventories." },
        { q: "What is the 'consumption function'?", a: "A relationship showing how consumption spending depends on the level of income." },
        { q: "What is 'autonomous expenditure'?", a: "Spending that does not depend on the current level of income (e.g. a fixed amount of investment or government spending)." },
        { q: "Why can a fall in exports reduce national income by more than the initial fall itself?", a: "The multiplier effect — the initial fall in spending reduces income, which reduces further rounds of spending too." },
        { q: "What is the 'savings function'?", a: "A relationship showing how saving depends on the level of income (usually the complement of the consumption function)." },
      ],
    },
    {
      id: "m18", title: "Relationship between the goods and money markets",
      description: "Links the real economy (goods market) with the financial economy (money market) to show how a change in money supply feeds through to interest rates, output and prices.",
      cards: [
        { q: "What happens to interest rates if the money supply increases (money demand unchanged)?", a: "Interest rates tend to fall." },
        { q: "How does a fall in interest rates typically affect the goods market?", a: "It stimulates investment and spending, increasing output/aggregate demand." },
        { q: "Why are the goods market and money market treated together rather than separately?", a: "Because interest rates link them — money-market conditions affect investment/spending, and goods-market activity affects money demand." },
        { q: "What does the LM curve represent?", a: "Combinations of interest rate and income at which the money market is in equilibrium (money demand equals money supply)." },
        { q: "What does the IS curve represent?", a: "Combinations of interest rate and income at which the goods market is in equilibrium (planned spending equals output)." },
        { q: "What happens to the IS-LM equilibrium if the government increases spending?", a: "The IS curve shifts right, raising both equilibrium income and the interest rate." },
        { q: "What happens to the IS-LM equilibrium if the central bank increases the money supply?", a: "The LM curve shifts right, lowering the interest rate and raising equilibrium income." },
        { q: "Why does a lower interest rate increase money demand at a given income level?", a: "The opportunity cost of holding money (rather than interest-bearing assets) falls, so people are willing to hold more money." },
        { q: "What is 'crowding out'?", a: "Government borrowing/spending raising interest rates and reducing private investment, partly offsetting the stimulus." },
        { q: "Why is understanding both the goods and money markets together important for policy?", a: "Because fiscal and monetary policy interact — the effect of one can depend on how the other market responds." },
        { q: "What does a flatter LM curve imply about the responsiveness of money demand to interest rates?", a: "Money demand is very sensitive to interest rates (highly interest-elastic), so a given change in income requires only a small interest-rate change to keep money market equilibrium." },
        { q: "What is the 'liquidity trap'?", a: "A situation where interest rates are so low that further increases in money supply fail to lower them further or stimulate demand, since people simply hold the extra money." },
        { q: "How does an increase in the price level affect the LM curve (real money supply)?", a: "A higher price level reduces the real money supply, shifting the LM curve left (raising interest rates at each income level)." },
        { q: "Why might fiscal policy be less effective if the LM curve is very steep?", a: "A steep LM curve means a fiscal expansion raises interest rates a lot, crowding out private investment and dampening the effect on income." },
        { q: "What is the practical value of the IS-LM framework for policy analysis?", a: "It helps predict how combinations of fiscal and monetary policy affect both output and interest rates together, not in isolation." },
      ],
    },
    {
      id: "m19", title: "Monetarist and new classical schools, and Keynesian responses",
      description: "Monetarist and New Classical critiques of Keynesian policy — rational expectations, the limits of demand management — and how Keynesians responded, including the debate over the stability of the unemployment-inflation relationship.",
      cards: [
        { q: "What is the 'rational expectations' idea associated with New Classical economics?", a: "People use all available information to anticipate policy effects, which can make some government policy ineffective in the short run." },
        { q: "What does the (short-run) Phillips curve suggest?", a: "A trade-off between unemployment and inflation — lower unemployment associated with higher inflation." },
        { q: "Why might the unemployment-inflation trade-off break down over time?", a: "If inflation expectations adjust, the trade-off can shift/disappear in the long run (accelerating inflation without a lasting fall in unemployment)." },
        { q: "What is the key monetarist claim about the long-run effect of increasing the money supply?", a: "It raises prices (inflation) rather than real output in the long run, since output is determined by real factors." },
        { q: "What is the 'natural rate of unemployment'?", a: "The unemployment rate consistent with stable inflation, once cyclical factors are stripped out." },
        { q: "According to New Classical economics, why might anticipated policy have little effect on output?", a: "If people rationally expect the policy's effects and adjust prices/wages/behaviour in advance, only unanticipated policy shifts real variables." },
        { q: "What did Keynesians argue against strict rational expectations / New Classical conclusions?", a: "That information is imperfect and wages/prices are sticky, so even anticipated policy can have real short-run effects." },
        { q: "What is 'adaptive expectations'?", a: "Expectations formed by looking at past experience/trends, adjusting gradually as new information arrives (contrasted with rational expectations)." },
        { q: "Why did stagflation in the 1970s challenge the simple Phillips curve?", a: "It showed high inflation and high unemployment occurring together, contradicting a stable inverse trade-off." },
        { q: "What is the 'long-run Phillips curve' typically assumed to look like?", a: "Vertical at the natural rate of unemployment — no permanent trade-off between inflation and unemployment." },
        { q: "What is 'demand management', as criticised by Monetarists?", a: "Using fiscal/monetary policy to actively manage the level of aggregate demand to control unemployment/output in the short run." },
        { q: "What did Milton Friedman argue was the main long-run determinant of inflation?", a: "Growth in the money supply exceeding growth in real output." },
        { q: "What is the 'accelerationist' hypothesis?", a: "That trying to hold unemployment below its natural rate leads to ever-accelerating inflation, not a stable trade-off." },
        { q: "Why might 'credibility' matter for a central bank fighting inflation?", a: "If the public believes the bank's commitment to low inflation, expectations adjust faster, allowing inflation to fall with less cost in lost output/unemployment." },
        { q: "What is a 'supply shock', and how can it complicate the unemployment-inflation relationship?", a: "An unexpected event affecting production costs/capacity (e.g. an oil price spike) that can raise inflation and unemployment simultaneously." },
      ],
    },
    {
      id: "m20", title: "Supply-side policy",
      description: "Policies aimed at increasing the economy's productive capacity rather than managing demand — tax cuts, deregulation and competition policy — and their effect on business and growth.",
      cards: [
        { q: "What is the goal of supply-side policy?", a: "To increase the economy's productive capacity/potential output (rather than manage short-run demand)." },
        { q: "Give one example of a supply-side policy.", a: "Cutting taxes, deregulating markets, labour-market reform, or investing in education/infrastructure." },
        { q: "How might cutting business taxes affect investment?", a: "It can increase firms' post-tax returns, encouraging more investment." },
        { q: "Give one labour-market supply-side policy.", a: "Reducing unemployment benefits, improving training, or relaxing restrictive labour regulations to increase labour supply/flexibility." },
        { q: "How can investment in education and infrastructure be a supply-side policy?", a: "It raises the economy's long-run productive capacity by improving human capital and reducing production/transport bottlenecks." },
        { q: "Give one criticism of supply-side policies.", a: "Benefits can take a long time to materialise, and some policies (e.g. deregulation) may increase inequality or reduce protections." },
        { q: "How can privatisation be viewed as a supply-side policy?", a: "It's argued to increase efficiency and competition by moving production from state-run monopolies to private, profit-driven firms." },
        { q: "What is the goal of competition policy as a supply-side tool?", a: "To prevent anti-competitive behaviour (e.g. monopoly abuse, cartels) so markets remain efficient and innovative." },
        { q: "Why might deregulation raise business investment?", a: "Lower compliance costs and fewer restrictions can make investment more attractive/profitable." },
        { q: "What's a possible downside of cutting corporate taxes as a supply-side measure?", a: "It reduces government revenue, potentially requiring cuts elsewhere or increased borrowing, and may not guarantee firms reinvest the savings." },
        { q: "What is 'human capital'?", a: "The skills, knowledge and experience possessed by workers that contribute to their productivity." },
        { q: "How can improving healthcare provision be viewed as a supply-side policy?", a: "A healthier workforce is more productive and has lower absenteeism, raising the economy's productive capacity." },
        { q: "What is 'labour market flexibility'?", a: "The ease with which wages, hours and employment levels can adjust to changing economic conditions." },
        { q: "Give one interventionist (as opposed to market-based) supply-side policy.", a: "Direct government investment in infrastructure, education, or industrial strategy/subsidies for key sectors." },
        { q: "Why do supply-side policies tend to work over a longer time horizon than demand-side policies?", a: "They aim to change the economy's underlying productive capacity (capital, skills, technology), which takes time to build, rather than just shifting spending in the short run." },
      ],
    },
    {
      id: "m21", title: "Demand-side policy",
      description: "Fiscal and monetary policy used to manage aggregate demand — how each works, what limits their effectiveness, fiscal rules, and the mechanics of monetary policy via central banks like the Bank of England.",
      cards: [
        { q: "What are the two main tools of demand-side policy?", a: "Fiscal policy (government spending/taxation) and monetary policy (interest rates/money supply)." },
        { q: "What is a 'fiscal rule'?", a: "A self-imposed constraint on government borrowing or debt, intended to keep fiscal policy sustainable and credible." },
        { q: "How does inflation targeting guide monetary policy?", a: "The central bank sets interest rates to keep inflation close to a target, adjusting rates as inflation forecasts rise or fall." },
        { q: "What is 'expansionary fiscal policy'?", a: "Increasing government spending and/or cutting taxes to boost aggregate demand." },
        { q: "What is 'contractionary fiscal policy'?", a: "Cutting government spending and/or raising taxes to reduce aggregate demand." },
        { q: "What is an 'automatic stabiliser'?", a: "A fiscal mechanism (like unemployment benefits or progressive taxes) that automatically counteracts economic fluctuations without new legislation." },
        { q: "Give one factor limiting the effectiveness of fiscal policy in smoothing the economy.", a: "Time lags in recognising problems and implementing policy, or crowding out of private investment." },
        { q: "What is a 'balanced budget rule'?", a: "A fiscal rule requiring government spending not to exceed revenue over a given period (or economic cycle)." },
        { q: "Why do governments sometimes prefer monetary policy over fiscal policy for short-term demand management?", a: "Monetary policy (interest rate changes) can typically be implemented and adjusted faster, without needing legislative approval." },
        { q: "What is the transmission mechanism of monetary policy, in brief?", a: "A change in the policy rate affects market interest rates, asset prices, the exchange rate and confidence, which in turn affect spending and ultimately inflation/output." },
        { q: "What is the 'output/spending' effect used to define the size of the fiscal multiplier?", a: "The ratio of the change in national income to the initial change in government spending/taxation that caused it." },
        { q: "What is 'discretionary' fiscal policy, as opposed to automatic stabilisers?", a: "Deliberate, one-off changes to spending or tax rates decided by government, rather than built-in mechanisms that respond automatically." },
        { q: "Why might time lags reduce the effectiveness of discretionary fiscal policy?", a: "By the time a problem is recognised, a policy is legislated and its effects are felt, economic conditions may have already changed." },
        { q: "What is the Bank of England's Monetary Policy Committee responsible for?", a: "Setting the UK's official interest rate (and other monetary tools) to meet the inflation target." },
        { q: "Why might a government adopt a fiscal rule limiting borrowing?", a: "To maintain credibility with financial markets and avoid unsustainable growth in government debt." },
      ],
    },
    {
      id: "m22", title: "Exchange rate policy",
      description: "How governments and central banks try to influence exchange rates, what that means for other macro policy and for business, and the purpose and effectiveness of monetary union and a single currency.",
      cards: [
        { q: "Give one way a central bank can try to influence its exchange rate.", a: "Direct intervention (buying/selling its own currency), or changing interest rates to attract/deter capital flows." },
        { q: "What is a monetary union?", a: "A group of countries sharing a single currency and (typically) a single central bank/monetary policy." },
        { q: "Give one drawback of a country joining a monetary union.", a: "It loses independent control of its own monetary policy and exchange rate as an adjustment tool." },
        { q: "What is 'sterilised' foreign exchange intervention?", a: "When a central bank buys/sells its currency but offsets the effect on the domestic money supply through other operations." },
        { q: "Why might a government want a weaker currency?", a: "To make exports more competitive and imports more expensive, potentially boosting domestic output and jobs." },
        { q: "Why might a government want a stronger currency?", a: "To reduce import costs (helping control inflation) and increase the purchasing power of consumers and firms buying abroad." },
        { q: "What is a 'managed float' exchange rate regime?", a: "A largely market-determined exchange rate that the central bank occasionally intervenes in to smooth excessive volatility." },
        { q: "How can raising interest rates be used as exchange rate policy?", a: "Higher rates attract foreign capital seeking better returns, increasing demand for the currency and causing it to appreciate." },
        { q: "What is a risk of using interest rates primarily to manage the exchange rate?", a: "It may conflict with what interest rates need to be for domestic objectives like controlling inflation or supporting growth." },
        { q: "Why do exporters generally dislike a rapidly appreciating currency?", a: "Their goods become more expensive for foreign buyers, potentially reducing overseas sales." },
        { q: "What is a 'currency peg'?", a: "An exchange rate policy where a currency's value is fixed relative to another currency or basket of currencies." },
        { q: "What is 'competitive devaluation'?", a: "Countries deliberately weakening their currencies to boost export competitiveness, potentially triggering retaliatory devaluations elsewhere." },
        { q: "How can capital controls be used as part of exchange rate policy?", a: "Restricting the flow of capital in/out of a country to reduce pressure on the exchange rate from speculative flows." },
        { q: "What is the 'impossible trinity' (trilemma) in international macroeconomics?", a: "A country cannot simultaneously have a fixed exchange rate, free capital movement, and independent monetary policy — it must give up one of the three." },
        { q: "Why might joining a currency union remove exchange rate policy as a tool entirely?", a: "Members share a single currency and central bank, so no individual member can devalue/revalue or set its own interest rate." },
      ],
    },
    {
      id: "m23", title: "Global harmonisation and monetary union",
      description: "The drivers and business impact of globalisation and multinational activity, and the case for and against deeper monetary integration such as European Economic and Monetary Union.",
      cards: [
        { q: "Give one driving force of globalisation.", a: "Falling transport/communication costs, trade liberalisation, or the spread of multinational companies." },
        { q: "Give one benefit globalisation can bring to business.", a: "Access to larger markets and cheaper/more diverse inputs (also: increased competition driving efficiency)." },
        { q: "What was the Exchange Rate Mechanism (ERM)?", a: "A system that limited how much European currencies could fluctuate against each other, seen as a step toward monetary union." },
        { q: "What is a 'multinational corporation'?", a: "A company that owns or controls production/service operations in more than one country." },
        { q: "Give one criticism of globalisation.", a: "It can increase inequality within countries, threaten domestic jobs in some industries, and increase exposure to global economic shocks." },
        { q: "What is 'monetary union' meant to achieve for member countries?", a: "Eliminating exchange rate risk and transaction costs between members, and deepening economic integration." },
        { q: "What convergence criteria might countries need to meet before joining a monetary union?", a: "Constraints on inflation, government deficit/debt, interest rates and exchange rate stability (e.g. the Eurozone's Maastricht criteria)." },
        { q: "Why can a 'one-size-fits-all' monetary policy be a problem within a monetary union?", a: "Member economies can be at different points in the business cycle, so a single interest rate may suit some members but not others." },
        { q: "What is 'harmonisation' in the context of global economic policy?", a: "Aligning regulations, standards or policies across countries to reduce barriers and inconsistencies in cross-border business." },
        { q: "How can global supply chains increase business risk?", a: "Disruptions in one country (e.g. a shock or trade dispute) can ripple through to firms and consumers in other countries that depend on those supply chains." },
        { q: "What is 'foreign direct investment' (FDI)?", a: "Investment by a firm from one country in productive assets (e.g. a factory or subsidiary) in another country." },
        { q: "Give one benefit FDI can bring to a host country.", a: "Jobs, technology transfer, and increased tax revenue/capital investment." },
        { q: "What is 'offshoring'?", a: "Relocating part of a business's operations (e.g. manufacturing or services) to another country, often to reduce costs." },
        { q: "How might trade agreements support global harmonisation?", a: "By aligning standards, tariffs and regulations between countries, reducing frictions for cross-border business." },
        { q: "What is a risk of deeper economic integration (e.g. monetary union) for national sovereignty?", a: "Member states cede control over certain policy tools (like exchange rates or interest rates) to a shared body." },
      ],
    },
    {
      id: "m24", title: "Summary of debates on theory and policy",
      description: "Ties the whole course together — how the different economic schools explain recent macroeconomic history, especially the 2008 financial crisis, and the ongoing stimulus-versus-austerity policy debate.",
      cards: [
        { q: "What triggered the 2008 global financial crisis?", a: "A banking/credit crisis originating in the US subprime mortgage market, which spread through the interconnected global financial system." },
        { q: "What is the 'stimulus vs austerity' debate about?", a: "Whether governments should increase spending/cut taxes to boost a weak economy (stimulus), or cut deficits/debt to restore confidence (austerity)." },
        { q: "Why is understanding multiple economic schools of thought useful when analysing a real crisis?", a: "Different schools highlight different causes and prescribe different remedies — no single model fully explains real-world events." },
        { q: "What role did irrational behaviour play in past banking crises, according to some economists?", a: "Excessive optimism/herding during booms and panic-driven withdrawals during busts can amplify financial instability beyond what fundamentals justify." },
        { q: "What was one major government response to the 2008 crisis?", a: "Bailing out/recapitalising banks, plus fiscal stimulus and aggressive interest rate cuts/quantitative easing." },
        { q: "How did the 2008 crisis affect the Eurozone specifically ('aftershocks in Europe')?", a: "It exposed high sovereign debt levels in some member states, triggering a separate sovereign debt crisis and austerity programmes." },
        { q: "What is the core argument for austerity after a crisis?", a: "Reducing government deficits/debt restores investor confidence and long-run fiscal sustainability." },
        { q: "What is the core argument for stimulus after a crisis?", a: "Cutting spending during a downturn can deepen the recession; spending supports demand and speeds recovery, with debt manageable once growth returns." },
        { q: "What regulatory changes commonly followed the 2008 crisis?", a: "Tighter bank capital/liquidity requirements and stronger oversight of systemically important financial institutions." },
        { q: "Why is the 2008 crisis often used as a case study across several economic schools?", a: "It illustrates monetarist concerns (credit growth), Keynesian responses (stimulus), and classical/market-failure debates about regulation — a single event, multiple lenses." },
        { q: "What is 'moral hazard', and how did it feature in the 2008 crisis?", a: "When a party takes on more risk because it doesn't bear the full consequences — banks considered 'too big to fail' may have taken excessive risks expecting a bailout." },
        { q: "What is 'systemic risk', in the context of the 2008 crisis?", a: "The risk that the failure of one financial institution triggers cascading failures across the wider financial system." },
        { q: "How did the crisis change how central banks think about financial stability?", a: "It prompted a shift toward 'macroprudential' regulation — monitoring and managing risk in the financial system as a whole, not just individual institutions." },
        { q: "Why is the debate over the 2008 crisis still relevant to economic policy today?", a: "It continues to shape views on financial regulation, the limits of monetary policy, and the appropriate role of fiscal stimulus during downturns." },
        { q: "What is a practical takeaway from comparing economic schools' explanations of the 2008 crisis?", a: "No single theory fully explains a real crisis — good economic judgement draws on multiple frameworks rather than dogmatically following one." },
      ],
    },
  ],
  CM1: [
    {
        "id": "m01",
        "title": "The time value of money",
        "description": "Introduces compound and simple interest, and why money today is worth more than the same amount in the future — the foundation for every CM1 calculation.",
        "cards": [
            {
                "q": "What is the accumulated value of $C$ invested for $n$ years at effective annual rate $i$ under compound interest?",
                "a": "$C(1+i)^n$"
            },
            {
                "q": "What is the accumulated value of $C$ invested for $n$ years under simple interest at rate $i$?",
                "a": "$C(1+in)$"
            },
            {
                "q": "What is the present value of a payment of $C$ due in $n$ years, at effective rate $i$?",
                "a": "$Cv^n$, where $v=\\frac{1}{1+i}$"
            },
            {
                "q": "How does compound interest differ from simple interest over multiple periods?",
                "a": "Compound interest earns interest on previously accumulated interest; simple interest only ever earns interest on the original principal."
            },
            {
                "q": "What is the 'time value of money'?",
                "a": "The principle that a given sum of money is worth more now than the same sum received in the future, because it can be invested to earn interest."
            },
            {
                "q": "For $n<1$, does simple or compound interest give a higher accumulated value?",
                "a": "Simple interest gives a slightly higher accumulated value than compound interest for periods less than one year."
            },
            {
                "q": "What is the discount factor $v$?",
                "a": "$v = \\frac{1}{1+i}$, the present value of $1$ due in one year's time."
            },
            {
                "q": "If $i = 5\\%$, what is $v$?",
                "a": "$v = \\frac{1}{1.05} \\approx 0.9524$"
            },
            {
                "q": "Why is discounting the reverse operation of accumulating?",
                "a": "Accumulating moves a value forward in time by multiplying by $(1+i)^n$; discounting moves it backward by multiplying by $v^n$."
            },
            {
                "q": "What assumption underlies most CM1 compound interest calculations unless stated otherwise?",
                "a": "That the effective rate of interest is constant over the period considered."
            },
            {
                "q": "What is a 'cashflow'?",
                "a": "A payment or receipt of money at a specified point (or points) in time."
            },
            {
                "q": "Why might an actuary need to compare cashflows occurring at different times?",
                "a": "Because money at different times isn't directly comparable \\u2014 it must first be accumulated or discounted to a common point in time."
            },
            {
                "q": "What does it mean for interest to be 'effective'?",
                "a": "It's the actual amount of interest earned over the full period (e.g. a year), as opposed to a nominal rate that must be converted."
            },
            {
                "q": "True or false: doubling the interest rate $i$ exactly doubles the accumulated value $(1+i)^n$ for $n>1$.",
                "a": "False \\u2014 because of compounding, the relationship is not linear once $n>1$."
            },
            {
                "q": "What single quantity lets you move a cashflow both forwards and backwards in time?",
                "a": "The effective rate of interest $i$ (equivalently, $v$)."
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
                "a": "$d = \\frac{i}{1+i}$, or equivalently $1-d = \\frac{1}{1+i} = v$"
            },
            {
                "q": "What does $i^{(p)}$ represent?",
                "a": "The nominal rate of interest per year, convertible (compounded) $p$ times per year."
            },
            {
                "q": "How do you convert $i^{(p)}$ to the effective annual rate $i$?",
                "a": "$1+i = \\left(1+\\frac{i^{(p)}}{p}\\right)^p$"
            },
            {
                "q": "What is the force of interest $\\delta$?",
                "a": "The instantaneous, continuously-compounded rate of interest, defined so that $1+i = e^{\\delta}$."
            },
            {
                "q": "As $p \\to \\infty$, what does $i^{(p)}$ converge to?",
                "a": "The force of interest $\\delta$."
            },
            {
                "q": "What is $d^{(p)}$?",
                "a": "The nominal rate of discount per year, convertible $p$ times per year."
            },
            {
                "q": "Which is larger for the same effective annual rate: $i$, $i^{(p)}$, or $\\delta$ (for $p>1$)?",
                "a": "$i$ is largest, then $i^{(p)}$ (decreasing as $p$ increases), with $\\delta$ the smallest limiting value."
            },
            {
                "q": "How do you accumulate $C$ for $n$ years at nominal rate $i^{(p)}$ convertible $p$thly?",
                "a": "$C\\left(1+\\frac{i^{(p)}}{p}\\right)^{pn}$"
            },
            {
                "q": "What is the relationship between $\\delta$ and $d$?",
                "a": "$\\delta = -\\ln(1-d)$, equivalently $1-d = e^{-\\delta}$"
            },
            {
                "q": "If the force of interest is constant, how do you find the present value of $1$ due at time $t$?",
                "a": "$v^t = e^{-\\delta t}$"
            },
            {
                "q": "Why might a bank quote a 'nominal' rather than 'effective' interest rate?",
                "a": "It's a convention for rates compounded more frequently than annually, and can make quoted rates look lower than the true effective rate."
            },
            {
                "q": "What happens to the accumulated value as compounding frequency $p$ increases, holding $i^{(p)}$ fixed?",
                "a": "The accumulated value increases, approaching continuous compounding (using $\\delta$) in the limit."
            },
            {
                "q": "Express $i$ in terms of $d$.",
                "a": "$i = \\frac{d}{1-d}$"
            },
            {
                "q": "What is the effective annual rate equivalent to a force of interest of $\\delta = 0.05$?",
                "a": "$i = e^{0.05} - 1 \\approx 5.13\\%$"
            },
            {
                "q": "Why is $\\delta$ particularly convenient for continuous cashflow calculations?",
                "a": "Because integrals of continuously paid cashflows discount/accumulate cleanly using $e^{-\\delta t}$ or $e^{\\delta t}$."
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
                "a": "The money rate reflects actual cash growth; the real rate reflects growth in purchasing power after removing the effect of inflation."
            },
            {
                "q": "What is the formula linking the money rate $i$, real rate $i'$, and inflation rate $e$?",
                "a": "$1+i = (1+i')(1+e)$"
            },
            {
                "q": "If the money rate is $8\\%$ and inflation is $3\\%$, what is the exact real rate?",
                "a": "$\\frac{1.08}{1.03}-1 \\approx 4.85\\%$"
            },
            {
                "q": "Why might an investor care more about the real rate of return than the money rate?",
                "a": "The real rate shows how much their purchasing power actually grows, which is what matters for future consumption."
            },
            {
                "q": "How would you find the real yield on an index-linked bond?",
                "a": "Discount the real (inflation-adjusted) cashflows at the real rate of interest, since index-linked payments already move with inflation."
            },
            {
                "q": "What happens to the real rate of interest if money interest rates and inflation rise by the same percentage points?",
                "a": "It stays approximately the same (not exactly, because the relationship is multiplicative not additive)."
            },
            {
                "q": "Can the real rate of interest be negative even if the money rate is positive?",
                "a": "Yes \\u2014 if inflation exceeds the money rate of interest."
            },
            {
                "q": "In index-linked bond calculations, what typically happens to coupon and redemption payments?",
                "a": "They are increased in line with a specified inflation index between issue and payment."
            },
            {
                "q": "Why is estimating future inflation important for pricing index-linked bonds?",
                "a": "Because future coupon/redemption cashflows are uncertain in money terms until the relevant inflation index values are known."
            },
            {
                "q": "What does it mean if the real rate of interest is exactly zero?",
                "a": "Money grows at exactly the rate of inflation \\u2014 no gain or loss in purchasing power."
            },
            {
                "q": "How is the money rate of interest related to real rate and inflation using a small-rate approximation?",
                "a": "$i \\approx i' + e$ (ignoring the small cross term $i' \\times e$)."
            },
            {
                "q": "What data would you need to calculate a realised real rate of return over a past period?",
                "a": "The money rate of return actually achieved, and the actual inflation rate over that period."
            },
            {
                "q": "Give one reason actual and expected inflation might differ.",
                "a": "Unexpected economic shocks, changes in monetary policy, or unanticipated supply/demand shifts in the economy."
            },
            {
                "q": "Why do pension schemes often care about real rates of interest?",
                "a": "Because future pension liabilities are often linked to (or intended to keep pace with) inflation/salary growth."
            },
            {
                "q": "If money rate $i=6\\%$ and real rate $i'=6\\%$, what must inflation be?",
                "a": "$0\\%$ \\u2014 no inflation."
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
                "a": "Discount each payment to today separately, using the appropriate discount factor for its own timing, then sum."
            },
            {
                "q": "What is meant by 'present value' of a cashflow?",
                "a": "The value today that is equivalent (under a given interest rate) to a cashflow or set of cashflows occurring at other points in time."
            },
            {
                "q": "How would you find the accumulated value at time $n$ of a set of payments made at various times before $n$?",
                "a": "Accumulate each payment separately from its own payment date to time $n$, then sum the results."
            },
            {
                "q": "If a rate of interest varies over time, how do you accumulate $1$ from time $0$ to time $n$?",
                "a": "Multiply together the accumulation factors for each sub-period of constant (or known) interest rate."
            },
            {
                "q": "What is the present value at time 0 of $1$ due at time $t$ using a time-varying force of interest $\\delta(s)$?",
                "a": "$\\exp\\left(-\\int_0^t \\delta(s)\\,ds\\right)$"
            },
            {
                "q": "What is the accumulated value at time $t$ of $1$ invested at time $0$ under a time-varying force of interest?",
                "a": "$\\exp\\left(\\int_0^t \\delta(s)\\,ds\\right)$"
            },
            {
                "q": "How do you handle a payment that occurs exactly 'now' (time 0) when finding present value?",
                "a": "It needs no discounting \\u2014 its present value equals its face amount."
            },
            {
                "q": "What's the general approach to comparing two different cashflow schedules?",
                "a": "Discount (or accumulate) both to the same point in time using a common interest rate, then compare the resulting values."
            },
            {
                "q": "How would you find the present value of a continuously paid cashflow of rate $\\rho(t)$ per unit time, from 0 to $n$, at constant force of interest $\\delta$?",
                "a": "$\\int_0^n \\rho(t)e^{-\\delta t}\\,dt$"
            },
            {
                "q": "What does 'equation of value' mean in this context?",
                "a": "An equation stating that the present value of money received equals the present value of money paid, at a given rate of interest."
            },
            {
                "q": "If interest rates are expected to change in the future, why can't you use one accumulation factor for the whole period?",
                "a": "Because the accumulation must reflect the actual (or assumed) rate applying in each distinct sub-period."
            },
            {
                "q": "Why is choosing a consistent valuation date important when comparing cashflows?",
                "a": "Because present/accumulated values depend on the timing reference point \\u2014 comparing values discounted to different dates isn't meaningful."
            },
            {
                "q": "What's the present value of a single payment of $500$ in 3 years at $i=4\\%$?",
                "a": "$500v^3 = 500(1.04)^{-3} \\approx 444.5$"
            },
            {
                "q": "How would a negative cashflow (a payment out) be treated in a present value calculation?",
                "a": "Included with a negative sign, so it reduces the total present value."
            },
            {
                "q": "Why might actuaries discount cashflows using a different rate for different risk profiles?",
                "a": "Riskier or less certain cashflows may warrant a different (often higher) discount rate to reflect that risk."
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
                "a": "The present value of an annuity of $1$ per year, paid annually in arrears for $n$ years."
            },
            {
                "q": "What is the formula for $a_{\\overline{n}|}$ in terms of $v$ and $i$?",
                "a": "$a_{\\overline{n}|} = \\frac{1-v^n}{i}$"
            },
            {
                "q": "What does $\\ddot{a}_{\\overline{n}|}$ represent?",
                "a": "The present value of an annuity of $1$ per year, paid annually in advance for $n$ years."
            },
            {
                "q": "How is $\\ddot{a}_{\\overline{n}|}$ related to $a_{\\overline{n}|}$?",
                "a": "$\\ddot{a}_{\\overline{n}|} = (1+i)\\,a_{\\overline{n}|} = \\frac{1-v^n}{d}$"
            },
            {
                "q": "What does $s_{\\overline{n}|}$ represent?",
                "a": "The accumulated value at time $n$ of an annuity of $1$ per year paid annually in arrears for $n$ years."
            },
            {
                "q": "What is the formula for $s_{\\overline{n}|}$?",
                "a": "$s_{\\overline{n}|} = \\frac{(1+i)^n-1}{i}$"
            },
            {
                "q": "What does $\\ddot{s}_{\\overline{n}|}$ represent, and how does it relate to $s_{\\overline{n}|}$?",
                "a": "The accumulated value at time $n$ of an annuity-due; $\\ddot{s}_{\\overline{n}|} = (1+i)\\,s_{\\overline{n}|}$"
            },
            {
                "q": "What is a 'perpetuity', and what is the present value of a level perpetuity of $1$ per year in arrears?",
                "a": "An annuity with no end date; its present value is $a_{\\overline{\\infty}|} = \\frac{1}{i}$"
            },
            {
                "q": "What does $_{m|}a_{\\overline{n}|}$ represent?",
                "a": "A deferred annuity \\u2014 an annuity of $1$ per year in arrears, for $n$ years, starting $m$ years from now."
            },
            {
                "q": "How do you calculate $_{m|}a_{\\overline{n}|}$ in terms of standard annuity functions?",
                "a": "$_{m|}a_{\\overline{n}|} = v^m \\, a_{\\overline{n}|}$"
            },
            {
                "q": "If payments are made $p$ times per year, what symbol is used for the present value of the annuity-immediate?",
                "a": "$a_{\\overline{n}|}^{(p)}$"
            },
            {
                "q": "What is the relationship between $a_{\\overline{n}|}^{(p)}$ and $a_{\\overline{n}|}$ (in terms of $i$ and $i^{(p)}$)?",
                "a": "$a_{\\overline{n}|}^{(p)} = \\frac{i}{i^{(p)}}\\,a_{\\overline{n}|}$"
            },
            {
                "q": "What is the present value of a continuously paid level annuity of $1$ per year for $n$ years, $\\overline{a}_{\\overline{n}|}$?",
                "a": "$\\overline{a}_{\\overline{n}|} = \\frac{1-v^n}{\\delta}$"
            },
            {
                "q": "Why is $\\ddot{a}_{\\overline{n}|}$ always greater than $a_{\\overline{n}|}$ for $i>0$?",
                "a": "Because each payment under the annuity-due is received one period earlier, so it's worth more in present value terms."
            },
            {
                "q": "What is the present value of an annuity-immediate of $1$ per year for 10 years, if $i = 5\\%$?",
                "a": "$a_{\\overline{10}|} = \\frac{1-1.05^{-10}}{0.05} \\approx 7.722$"
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
                "a": "The present value of an annuity paid annually in arrears for $n$ years, where the payment is $1$ in year 1, $2$ in year 2, ..., $n$ in year $n$."
            },
            {
                "q": "What is the formula for $(Ia)_{\\overline{n}|}$?",
                "a": "$(Ia)_{\\overline{n}|} = \\frac{\\ddot{a}_{\\overline{n}|} - nv^n}{i}$"
            },
            {
                "q": "What does $(I\\ddot{a})_{\\overline{n}|}$ represent, and how does it relate to $(Ia)_{\\overline{n}|}$?",
                "a": "The increasing annuity-due equivalent; $(I\\ddot{a})_{\\overline{n}|} = (1+i)(Ia)_{\\overline{n}|}$"
            },
            {
                "q": "What does $(Da)_{\\overline{n}|}$ represent?",
                "a": "A decreasing annuity: payments of $n$ in year 1, $n-1$ in year 2, ..., down to $1$ in year $n$, paid in arrears."
            },
            {
                "q": "What is the formula for $(Da)_{\\overline{n}|}$?",
                "a": "$(Da)_{\\overline{n}|} = \\frac{n - a_{\\overline{n}|}}{i}$"
            },
            {
                "q": "What does $(I\\overline{a})_{\\overline{n}|}$ represent?",
                "a": "A continuously-increasing, continuously-paid annuity, where the payment rate at time $t$ is $t$ per year."
            },
            {
                "q": "What is a common real-world use for increasing annuity functions?",
                "a": "Modelling salary-linked or inflation-linked cashflows that step up by a fixed monetary amount each year, such as certain pension or loan structures."
            },
            {
                "q": "What is $(I\\ddot{a})_{\\overline{\\infty}|}$, the present value of a perpetuity increasing by $1$ each year, paid in advance?",
                "a": "$(I\\ddot{a})_{\\overline{\\infty}|} = \\frac{1}{d^2}$"
            },
            {
                "q": "How would you value an annuity that increases by a constant monetary amount each year, but is paid continuously?",
                "a": "Using the continuously-increasing, continuously-paid annuity function, integrating the increasing payment rate against the discount factor."
            },
            {
                "q": "What is the accumulated value equivalent of $(Ia)_{\\overline{n}|}$, denoted $(Is)_{\\overline{n}|}$?",
                "a": "$(Is)_{\\overline{n}|} = (1+i)^n (Ia)_{\\overline{n}|}$"
            },
            {
                "q": "Why can't you just multiply the level annuity value by the average payment to value an increasing annuity?",
                "a": "Because each payment is discounted differently depending on when it occurs, so timing and magnitude interact \\u2014 a simple average ignores this."
            },
            {
                "q": "If payments increase geometrically rather than arithmetically, can you still use $(Ia)_{\\overline{n}|}$?",
                "a": "No \\u2014 a geometrically increasing annuity needs a different approach (effectively discounting at a modified net rate), not the arithmetic increasing annuity formula."
            },
            {
                "q": "What does $n$ represent in $(Ia)_{\\overline{n}|} = \\frac{\\ddot{a}_{\\overline{n}|}-nv^n}{i}$?",
                "a": "Both the number of years the annuity runs for, and the final (largest) payment amount."
            },
            {
                "q": "How would you value a decreasing annuity that pays continuously and decreases continuously?",
                "a": "Using $(D\\overline{a})_{\\overline{n}|}$, the continuous decreasing annuity function, found by integration."
            },
            {
                "q": "What is the present value of an annuity paying 100 in year 1, 200 in year 2, and 300 in year 3 (arrears), at rate $i$?",
                "a": "$100\\,(Ia)_{\\overline{3}|}$ at rate $i$"
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
                "a": "An equation setting the present value of a series of payments (or receipts) equal to the present value of another series, at an unknown or specified rate of interest."
            },
            {
                "q": "What two conditions are typically required for an equation of value to have a unique solution for $i$?",
                "a": "Payments in and payments out must each occur at least once, and the net cashflow's sign should change only once over time."
            },
            {
                "q": "What might happen if an equation of value has multiple sign changes in the net cashflow?",
                "a": "There could be more than one mathematically valid solution for the interest rate (multiple roots), making the answer ambiguous."
            },
            {
                "q": "How is an equation of value typically solved when it can't be solved algebraically?",
                "a": "By numerical/iterative methods, such as linear interpolation between two trial rates."
            },
            {
                "q": "What does it mean for a project or loan to have an 'exact' solution for the equation of value?",
                "a": "There's a single, well-defined rate of interest at which the present value of inflows equals the present value of outflows."
            },
            {
                "q": "Why might a loan have both an initial payment received and periodic repayments made?",
                "a": "The lender pays out the loan amount up front (a receipt from the borrower's perspective) and receives repayments afterwards."
            },
            {
                "q": "If a project has 'one change of sign' in its net cashflow, what does that tell you about solving its equation of value?",
                "a": "A single, well-defined internal rate of return (root) is guaranteed to exist under standard conditions."
            },
            {
                "q": "What's the general approach to setting up an equation of value for a loan repaid by instalments?",
                "a": "Set the loan amount (present value at outset) equal to the present value of all the repayment instalments, at the loan's interest rate."
            },
            {
                "q": "Give an example of 'payment is uncertain' in an equation of value context.",
                "a": "A cashflow that depends on a future event, e.g. a payment only made if someone survives to a certain age."
            },
            {
                "q": "What is linear interpolation used for when solving an equation of value?",
                "a": "Approximating the root (interest rate) by assuming the net present value function is approximately linear between two trial rates."
            },
            {
                "q": "Why is it useful to check the sign pattern of a cashflow before solving for a yield?",
                "a": "To ensure a unique and meaningful solution exists, avoiding a misleading or ambiguous result."
            },
            {
                "q": "In an equation of value with payment or receipt 'certain', what does 'certain' mean?",
                "a": "The amount and timing of the payment are known with certainty, not contingent on any future uncertain event."
            },
            {
                "q": "What's a practical example of an equation of value used to find an unknown interest rate?",
                "a": "Finding the annual percentage rate (APR) implied by a loan's fixed repayment schedule."
            },
            {
                "q": "If two trial rates give present values of $+50$ and $-30$, roughly how would linear interpolation estimate the root?",
                "a": "Weight the two trial rates in proportion to the sizes of $50$ and $30$ (closer to the trial rate giving the smaller absolute present value)."
            },
            {
                "q": "Can an equation of value be used with more than two parties/cashflow streams?",
                "a": "Yes \\u2014 any number of cashflow streams can be combined into a single equation of value, as long as they're all expressed at a common valuation date and rate."
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
                "a": "Interest (on the outstanding balance) and capital repayment (reducing the outstanding balance)."
            },
            {
                "q": "How is the interest portion of an instalment calculated?",
                "a": "The outstanding loan balance at the start of the period, multiplied by the interest rate for that period."
            },
            {
                "q": "How is the capital portion of a level instalment found, once the interest portion is known?",
                "a": "Capital repaid = total instalment \\u2212 interest due for that period."
            },
            {
                "q": "What happens to the split between interest and capital over the life of a level-instalment loan?",
                "a": "The interest portion decreases and the capital portion increases over time, as the outstanding balance falls."
            },
            {
                "q": "How would you find the outstanding loan balance after the $t$-th instalment, using the 'prospective' method?",
                "a": "As the present value of all remaining future instalments, discounted at the loan rate."
            },
            {
                "q": "How would you find the outstanding loan balance after the $t$-th instalment, using the 'retrospective' method?",
                "a": "As the accumulated original loan amount, less the accumulated value of instalments paid so far."
            },
            {
                "q": "Do the prospective and retrospective methods give the same outstanding balance?",
                "a": "Yes, provided the same interest rate is used for both accumulating and discounting throughout."
            },
            {
                "q": "What is the total 'capital repaid', summed over the whole loan term, equal to?",
                "a": "The original loan amount (the total capital borrowed)."
            },
            {
                "q": "How is the level instalment amount $X$ found for a loan of $L$ repaid over $n$ years at rate $i$?",
                "a": "$X = \\frac{L}{a_{\\overline{n}|}}$"
            },
            {
                "q": "What is the annual percentage rate (APR) of a loan?",
                "a": "The effective annual rate of interest implied by the loan's actual cashflows (amount lent vs. repayments), which may differ from the quoted nominal rate."
            },
            {
                "q": "Why might a loan's APR differ from its stated nominal interest rate?",
                "a": "Because of fees or charges, or the compounding frequency used, which the APR calculation accounts for but a simple nominal rate doesn't."
            },
            {
                "q": "If a borrower makes an extra lump-sum repayment partway through a loan, how does this affect future instalments (if the term stays fixed)?",
                "a": "It reduces the outstanding balance, so subsequent level instalments can be recalculated to be smaller for the same remaining term."
            },
            {
                "q": "How would you construct a full loan schedule table?",
                "a": "For each period, show the opening balance, interest due, instalment paid, capital repaid, and closing balance, working forward period by period."
            },
            {
                "q": "If the interest rate changes partway through a loan's term, which method is more natural for finding the new outstanding balance?",
                "a": "Prospective \\u2014 discount all remaining future instalments at the new rate(s) applying going forward."
            },
            {
                "q": "What does it mean if the capital repaid in the final instalment exactly clears the outstanding balance?",
                "a": "The loan is fully repaid (amortised) by that instalment, with zero balance remaining."
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
                "a": "The present value of all its cash inflows minus the present value of all its cash outflows, at a chosen discount rate."
            },
            {
                "q": "What decision rule follows from a project's NPV?",
                "a": "Accept the project if NPV is positive (at the company's required rate of return); reject if negative."
            },
            {
                "q": "What is the Internal Rate of Return (IRR) of a project?",
                "a": "The discount rate at which the project's NPV equals zero."
            },
            {
                "q": "What is the 'payback period' of a project?",
                "a": "The length of time until the cumulative (undiscounted) net cashflow becomes positive \\u2014 i.e. the initial investment is recouped."
            },
            {
                "q": "What is the 'discounted payback period'?",
                "a": "Like payback period, but using discounted cashflows \\u2014 the time until cumulative discounted net cashflow becomes positive."
            },
            {
                "q": "Give one weakness of using payback period alone to assess a project.",
                "a": "It ignores the time value of money and ignores all cashflows occurring after the payback point."
            },
            {
                "q": "Give one weakness of using IRR to compare two mutually exclusive projects.",
                "a": "IRR ignores the scale of the project, and can have multiple solutions if cashflows change sign more than once."
            },
            {
                "q": "When comparing two mutually exclusive projects of different sizes, which measure is usually preferred: NPV or IRR?",
                "a": "NPV, because it reflects the absolute value created and doesn't have the scale/multiple-root issues of IRR."
            },
            {
                "q": "What does 'accumulated profit' of a project mean?",
                "a": "The accumulated value (rather than present value) of the project's net cashflows, evaluated at a given interest rate, typically at the end of the project."
            },
            {
                "q": "If a project's IRR exceeds the company's cost of capital, what does that suggest?",
                "a": "The project is expected to be worthwhile \\u2014 it earns a higher return than the minimum required."
            },
            {
                "q": "Why might discounted payback period be considered better than simple payback period?",
                "a": "It accounts for the time value of money, giving a more economically meaningful measure of how quickly the investment is recovered."
            },
            {
                "q": "What is a 'mutually exclusive' set of projects?",
                "a": "A set of projects where choosing one means the others cannot also be undertaken (e.g. limited capital or resources)."
            },
            {
                "q": "How would you calculate a project's NPV at a rate of $10\\%$ given a series of net cashflows?",
                "a": "Discount each year's net cashflow by $(1.10)^{-t}$ and sum the results."
            },
            {
                "q": "Why is choosing the 'right' discount rate important for NPV-based decisions?",
                "a": "A different discount rate can change whether NPV is positive or negative, and hence the accept/reject decision."
            },
            {
                "q": "If a project's net cashflows change sign more than once, what problem can arise when calculating IRR?",
                "a": "There may be multiple internal rates of return, making the IRR measure ambiguous or unreliable."
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
                "a": "The regular (usually annual or semi-annual) interest payment made to the bondholder, typically a fixed percentage of the nominal (face) value."
            },
            {
                "q": "What is the 'redemption value' of a bond?",
                "a": "The amount repaid to the bondholder at maturity, often (but not always) equal to the nominal value."
            },
            {
                "q": "How do you find the price of a bond given a required yield $i$?",
                "a": "The price equals the present value of all future coupon payments plus the present value of the redemption payment, discounted at $i$."
            },
            {
                "q": "What is the 'running yield' (or 'flat yield') on a bond?",
                "a": "The annual coupon payment divided by the current price of the bond, ignoring capital gain/loss at redemption."
            },
            {
                "q": "What is the 'redemption yield' on a bond?",
                "a": "The effective rate of interest that equates the bond's current price to the present value of all its future cashflows (coupons and redemption)."
            },
            {
                "q": "How does income tax on coupon payments affect the price an investor is willing to pay for a bond, other things equal?",
                "a": "It reduces the value of the coupons received net of tax, so reduces the price the investor is willing to pay for a given yield."
            },
            {
                "q": "How does capital gains tax affect bond pricing, if the redemption value exceeds the purchase price?",
                "a": "It reduces the effective (net) redemption proceeds, since tax is paid on the capital gain, reducing the price for a given required net yield."
            },
            {
                "q": "When a bond is 'optionally redeemable' within a range of dates at the borrower's choice, how do you find price bounds?",
                "a": "Calculate the price assuming redemption at each extreme of the range, and use the more cautious (from the investor's viewpoint) of the two results."
            },
            {
                "q": "What general rule helps decide which redemption date to test when a bond's redemption date is at the borrower's option?",
                "a": "Compare coupon rate to the required net yield: if coupon exceeds yield the borrower favours later redemption from the investor's perspective (and vice versa) \\u2014 but always check both extremes explicitly."
            },
            {
                "q": "How would you value an index-linked bond's cashflows?",
                "a": "Increase each coupon and the redemption payment in line with the relevant inflation index between issue and payment date, then discount at the required money (or real) yield."
            },
            {
                "q": "How is the price of an ordinary share (equity) typically valued using dividend discounting?",
                "a": "As the present value of expected future dividends, discounted at the investor's required rate of return."
            },
            {
                "q": "What is the Gordon growth model used for?",
                "a": "Valuing a share (or property) whose dividends/rents grow at a constant rate $g$ forever: price $= \\frac{D_1}{i-g}$"
            },
            {
                "q": "What is a key difference between valuing a bond and valuing an equity?",
                "a": "A bond's cashflows are usually known/fixed; an equity's future dividends are uncertain and often assumed to grow."
            },
            {
                "q": "How might property be valued similarly to equities in CM1?",
                "a": "By discounting expected future rental income (and possibly a terminal sale value) at a required rate of return, similarly to dividend discounting."
            },
            {
                "q": "Why does a bond's price fall when the required yield rises?",
                "a": "Because future cashflows are discounted more heavily at a higher rate, reducing their present value."
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
                "a": "The annualised rate of return on a zero-coupon investment made now and maturing at a specific future date."
            },
            {
                "q": "What is a 'forward rate' of interest?",
                "a": "The rate of interest agreed now for a loan/investment to be made over a specified future period."
            },
            {
                "q": "How are discrete spot rates and forward rates related for consecutive periods?",
                "a": "$(1+y_2)^2 = (1+y_1)(1+f_{1,2})$, where $y_1, y_2$ are spot rates and $f_{1,2}$ is the forward rate from time 1 to time 2."
            },
            {
                "q": "What is the 'yield to maturity' of a bond?",
                "a": "The single, constant rate of interest that equates the present value of a bond's cashflows to its current price (its redemption yield)."
            },
            {
                "q": "What does the 'par yield' represent?",
                "a": "The coupon rate at which a bond would be priced exactly at par (price equals nominal value), given the current term structure."
            },
            {
                "q": "What does an upward-sloping term structure (yield curve) typically mean?",
                "a": "Longer-term spot rates are higher than shorter-term spot rates."
            },
            {
                "q": "Name one factor that can influence the shape of the term structure of interest rates.",
                "a": "Expectations of future interest rate/inflation changes, liquidity preference, or supply/demand for bonds of different maturities."
            },
            {
                "q": "What is (Macaulay) duration of a cashflow sequence?",
                "a": "The weighted average time until cashflows are received, weighted by the present value of each cashflow."
            },
            {
                "q": "What is the formula concept for duration?",
                "a": "$\\text{Duration} = \\frac{\\sum_t t \\cdot v^t C_t}{\\sum_t v^t C_t}$, the present-value-weighted average payment time."
            },
            {
                "q": "What is 'convexity' of a cashflow sequence used for?",
                "a": "Measuring the curvature of how a cashflow sequence's present value changes with interest rates \\u2014 a refinement beyond duration for larger rate changes."
            },
            {
                "q": "What does duration tell you about a cashflow sequence's sensitivity to interest rate changes?",
                "a": "A higher duration means the present value is more sensitive (changes by a larger percentage) to a given change in interest rates."
            },
            {
                "q": "What is 'immunisation' of a portfolio of liabilities?",
                "a": "Structuring assets so that the portfolio's value is protected (to a first approximation) against small changes in the rate of interest."
            },
            {
                "q": "What are Redington's three conditions for immunisation?",
                "a": "(1) PV of assets equals PV of liabilities; (2) duration of assets equals duration of liabilities; (3) convexity of assets exceeds convexity of liabilities."
            },
            {
                "q": "Why is condition 3 (asset convexity exceeding liability convexity) needed in Redington's theory?",
                "a": "It ensures that for both small rises and small falls in interest rates, asset value doesn't fall below liability value \\u2014 a second-order protection beyond duration matching."
            },
            {
                "q": "If spot rates are constant across all terms, what is the relationship between spot rates and forward rates?",
                "a": "They are all equal \\u2014 the forward rate over any period equals the (constant) spot rate."
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
                "a": "The expected number of survivors to exact age $x$, out of an initial (radix) cohort."
            },
            {
                "q": "What does $d_x$ represent?",
                "a": "The expected number of deaths between exact ages $x$ and $x+1$: $d_x = l_x - l_{x+1}$"
            },
            {
                "q": "What does $p_x$ represent?",
                "a": "The probability that a life aged exactly $x$ survives to age $x+1$: $p_x = \\frac{l_{x+1}}{l_x}$"
            },
            {
                "q": "What does $q_x$ represent?",
                "a": "The probability that a life aged exactly $x$ dies before reaching age $x+1$: $q_x = \\frac{d_x}{l_x} = 1-p_x$"
            },
            {
                "q": "What does $_np_x$ represent?",
                "a": "The probability that a life aged $x$ survives at least $n$ further years, to age $x+n$: $_np_x = \\frac{l_{x+n}}{l_x}$"
            },
            {
                "q": "What does $_nq_x$ represent?",
                "a": "The probability that a life aged $x$ dies within the next $n$ years: $_nq_x = 1 - {_np_x}$"
            },
            {
                "q": "What does $_{n|m}q_x$ represent?",
                "a": "The probability that a life aged $x$ survives $n$ years and then dies within the following $m$ years."
            },
            {
                "q": "How do you express $_{n|m}q_x$ in terms of $l$ values?",
                "a": "$_{n|m}q_x = \\frac{l_{x+n} - l_{x+n+m}}{l_x}$"
            },
            {
                "q": "What does 'select' mortality mean, as in $l_{[x]+r}$?",
                "a": "Mortality that depends not just on current age but also on how long ago the life was selected (e.g. underwritten) \\u2014 recently selected lives typically have lighter mortality."
            },
            {
                "q": "What does $l_{[x]}$ represent, as distinct from $l_x$?",
                "a": "The number of survivors to age $x$ among lives who were selected (e.g. underwritten) at exactly age $x$, as opposed to $l_x$ which doesn't track selection."
            },
            {
                "q": "Why does select mortality typically converge to 'ultimate' mortality after a few years?",
                "a": "The effect of underwriting/selection wears off over time, so mortality experience converges to that of the general population of the same attained age."
            },
            {
                "q": "What assumption is commonly used for deaths occurring between integer ages, when needed for calculations?",
                "a": "The uniform distribution of deaths (UDD) assumption, or otherwise the constant force of mortality assumption."
            },
            {
                "q": "Under the constant force of mortality assumption between integer ages, how is $\\mu$ related to $q_x$?",
                "a": "$\\mu = -\\ln(1-q_x) = -\\ln p_x$, constant over the year of age."
            },
            {
                "q": "If $l_{60} = 9{,}000{,}000$ and $l_{61} = 8{,}910{,}000$, what is $q_{60}$?",
                "a": "$q_{60} = \\frac{9{,}000{,}000 - 8{,}910{,}000}{9{,}000{,}000} = 0.01$"
            },
            {
                "q": "Why is the life table considered the building block for pricing life insurance and annuity products?",
                "a": "Because every assurance/annuity valuation requires the probability of survival or death at each future age, which the life table directly provides."
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
                "a": "The expected present value of a whole life assurance of $1$, payable at the end of the year of death of a life currently aged $x$."
            },
            {
                "q": "What is a 'term assurance'?",
                "a": "A policy paying a benefit only if the life dies within a specified term; nothing is paid if the life survives the term."
            },
            {
                "q": "What symbol is commonly used for a term assurance of $1$ for $n$ years, and what does the superscript mean?",
                "a": "$A^1_{x:\\overline{n}|}$ \\u2014 the superscript '1' over the $x$ indicates the benefit is contingent on death of the life aged $x$ within the term."
            },
            {
                "q": "What is a 'pure endowment'?",
                "a": "A policy paying a benefit only if the life survives to the end of a specified term; nothing is paid on earlier death."
            },
            {
                "q": "What is an 'endowment assurance'?",
                "a": "A policy that pays a benefit on death within the term, or on survival to the end of the term, whichever occurs first."
            },
            {
                "q": "How does the endowment assurance function $A_{x:\\overline{n}|}$ relate to term assurance and pure endowment?",
                "a": "$A_{x:\\overline{n}|} = A^1_{x:\\overline{n}|} + A_{x:\\overline{n}|}^{\\ 1}$ (term assurance plus pure endowment)."
            },
            {
                "q": "What does it mean for a death benefit to be 'payable immediately on death' rather than 'at the end of year of death'?",
                "a": "The benefit is paid as soon as death occurs, rather than being delayed until the policy anniversary following death."
            },
            {
                "q": "What notation typically distinguishes an immediate-death-benefit assurance from an end-of-year one?",
                "a": "A bar over the $A$, e.g. $\\overline{A}_x$, denotes the benefit payable immediately on death."
            },
            {
                "q": "What is a 'deferred' assurance benefit?",
                "a": "A benefit that only starts to apply after a deferment period \\u2014 e.g. death benefit only payable if death occurs after a certain number of years."
            },
            {
                "q": "What does 'return of premiums' annuity/assurance mean?",
                "a": "On death (or another trigger event), the benefit paid is linked to the premiums paid so far, rather than a fixed sum assured."
            },
            {
                "q": "How would you describe the cashflow timing of a whole life assurance versus a term assurance?",
                "a": "Whole life assurance guarantees eventual payment (on death, whenever it occurs); term assurance only pays if death occurs within the specified period."
            },
            {
                "q": "Why would a pure endowment alone be an unusual product to sell on its own?",
                "a": "It provides no benefit at all if the policyholder dies before the term ends, so it's usually combined with a term assurance to form an endowment assurance."
            },
            {
                "q": "What does 'joint life' mean in the context of assurance contracts?",
                "a": "The contract's benefit depends on the death (or survival) status of two (or more) lives, rather than just one."
            },
            {
                "q": "For a term assurance, what happens to $A^1_{x:\\overline{n}|}$ as $n$ increases (with $x$ fixed)?",
                "a": "It increases, since a longer term gives more opportunity for the death benefit to become payable."
            },
            {
                "q": "How do variable death benefits (increasing/decreasing sums assured) generally get valued?",
                "a": "Combine the varying sum assured with the corresponding annual mortality/discounting terms, similar in spirit to increasing annuity techniques."
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
                "a": "The expected present value of a whole life annuity of $1$ per year, paid annually in advance, to a life currently aged $x$, for as long as they survive."
            },
            {
                "q": "What is a 'temporary' (or 'term') life annuity, $\\ddot{a}_{x:\\overline{n}|}$?",
                "a": "An annuity paid annually in advance to a life aged $x$, for at most $n$ years, ceasing on earlier death."
            },
            {
                "q": "What is a 'deferred' life annuity, e.g. $_{m|}\\ddot{a}_x$?",
                "a": "An annuity that starts paying only after a deferment period of $m$ years, provided the life survives that long, and then continues for life."
            },
            {
                "q": "What is a 'guaranteed' annuity?",
                "a": "An annuity that continues to be paid for a minimum guarantee period regardless of death, and then continues (if the life survives) beyond the guarantee period."
            },
            {
                "q": "How would you value a whole life annuity guaranteed for the first $n$ years, then continuing for life?",
                "a": "As a certain annuity for $n$ years, plus a deferred whole life annuity starting after $n$ years contingent on survival."
            },
            {
                "q": "What is the relationship between $\\ddot{a}_x$ and $a_x$ for a life aged $x$?",
                "a": "$\\ddot{a}_x = 1 + a_x$ (the annuity-due includes an immediate payment at time 0 that the annuity-immediate does not)."
            },
            {
                "q": "What does $\\overline{a}_x$ represent?",
                "a": "A whole life annuity paid continuously (rather than annually) at rate $1$ per year, to a life aged $x$."
            },
            {
                "q": "How do $\\ddot{a}_x$, $\\overline{a}_x$ and $a_x$ typically compare in size, for the same $x$?",
                "a": "$\\ddot{a}_x > \\overline{a}_x > a_x$, since annuity-due payments are received earliest on average and annuity-immediate latest."
            },
            {
                "q": "What is a common real-world product modelled using $\\ddot{a}_x$?",
                "a": "A pension annuity, paying a level income for as long as the pensioner survives."
            },
            {
                "q": "How does temporary annuity value $\\ddot{a}_{x:\\overline{n}|}$ change as $n$ increases?",
                "a": "It increases, up to the limit of the whole life annuity value $\\ddot{a}_x$ as $n \\to \\infty$."
            },
            {
                "q": "What is the relationship between a temporary annuity and a deferred annuity using the pure endowment factor $_nE_x$?",
                "a": "$\\ddot{a}_x = \\ddot{a}_{x:\\overline{n}|} + {_n}E_x \\cdot \\ddot{a}_{x+n}$"
            },
            {
                "q": "What is the pure endowment factor $_nE_x$?",
                "a": "$_nE_x = v^n \\cdot {_np_x}$, the expected present value of $1$ payable in $n$ years if the life aged $x$ survives that long."
            },
            {
                "q": "How would you express a deferred annuity $_{m|}\\ddot{a}_x$ using $_mE_x$?",
                "a": "$_{m|}\\ddot{a}_x = {_mE_x} \\cdot \\ddot{a}_{x+m}$"
            },
            {
                "q": "Why do life annuities typically use annuity-due (in advance) rather than annuity-immediate (in arrears) conventions?",
                "a": "Pension/annuity payments are conventionally paid at the start of each period covered, avoiding paying for a period after the annuitant may have already died."
            },
            {
                "q": "What is the key difference between valuing an annuity-certain and a life annuity?",
                "a": "A life annuity multiplies each period's discount factor by the relevant survival probability, since payment is contingent on the annuitant being alive."
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
                "a": "$A_x = 1 - d\\,\\ddot{a}_x$"
            },
            {
                "q": "Why does the relationship $A_x = 1 - d\\,\\ddot{a}_x$ hold?",
                "a": "It follows from a standard identity linking the discounted cashflow of $1$ at outset to the assurance and annuity-due present values."
            },
            {
                "q": "What is meant by the 'curtate future lifetime' $K_x$?",
                "a": "The complete number of future years lived by a life aged $x$ before death (the integer number of full years survived)."
            },
            {
                "q": "How is the present value of a whole life assurance benefit expressed as a random variable in terms of $K_x$?",
                "a": "$Z = v^{K_x+1}$, since the benefit is paid at the end of the year of death."
            },
            {
                "q": "How do you find the variance of the present value of a whole life assurance benefit?",
                "a": "$\\text{Var}(Z) = E[Z^2] - (E[Z])^2$, where $E[Z] = A_x$ and $E[Z^2]$ is found using $v^2$ in place of $v$."
            },
            {
                "q": "What does $^2A_x$ represent?",
                "a": "The expected present value of a whole life assurance calculated at double the force of interest (using $v^2$ instead of $v$) \\u2014 used to find the second moment for variance calculations."
            },
            {
                "q": "How would you extend $\\ddot{a}_x$ to a monthly-in-advance annuity, $\\ddot{a}_x^{(12)}$?",
                "a": "Approximate using $\\ddot{a}_x^{(12)} \\approx \\ddot{a}_x - \\frac{11}{24}$, or calculate exactly if the underlying assumptions allow."
            },
            {
                "q": "What is the general logic for extending annual annuity/assurance functions to more frequent payments?",
                "a": "Adjust for the fact that payments occur more often, typically via standard approximations linking annual and $p$thly functions."
            },
            {
                "q": "Why do we need both the mean and the variance of the present value of a benefit, not just the mean?",
                "a": "The mean gives the expected cost (used for pricing); the variance quantifies the uncertainty/risk around that expected cost."
            },
            {
                "q": "How would you find the mean and variance of the present value of a term assurance benefit?",
                "a": "Similarly to whole life assurance, but restricting the curtate future lifetime to values within the term, with zero benefit if death occurs after the term."
            },
            {
                "q": "What is the general relationship used to move between 'immediate' and 'due' annuity values, applied to life annuities?",
                "a": "$\\ddot{a}_x = 1 + a_x$, since the first payment under the due version occurs at time 0 with certainty."
            },
            {
                "q": "How does discounting at 'twice the force of interest' arise naturally when computing $E[Z^2]$ for an assurance benefit?",
                "a": "Because $Z = v^{K_x+1}$, so $Z^2 = (v^2)^{K_x+1}$ \\u2014 equivalent to discounting at a rate whose discount factor is $v^2$."
            },
            {
                "q": "What does it mean to evaluate assurance/annuity factors 'by table look-up'?",
                "a": "Using pre-computed values (from standard mortality/interest tables) for common ages and rates, rather than calculating from first principles each time."
            },
            {
                "q": "How would premiums payable 'for a limited period' (rather than the whole policy term) affect the annuity function used to value them?",
                "a": "You would use a temporary annuity function covering only the premium-paying period."
            },
            {
                "q": "Give one reason select mortality might be used when evaluating a newly-issued policy's assurance/annuity factors.",
                "a": "The policyholder was recently underwritten/selected, so their mortality is expected to be lighter than the general population for the first few years."
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
                "a": "A policy with a basic guaranteed sum assured, to which bonuses are added over time (funded by the insurer's profits), increasing the eventual benefit paid."
            },
            {
                "q": "What is a 'reversionary bonus'?",
                "a": "A bonus added to a with-profits policy's sum assured during the policy term, which \\u2014 once added \\u2014 is guaranteed and cannot be taken away."
            },
            {
                "q": "What is a 'terminal bonus'?",
                "a": "An additional bonus paid only at the point the policy becomes a claim (death or maturity), not guaranteed in advance."
            },
            {
                "q": "Why do insurers use reversionary bonuses rather than just paying a single large terminal bonus?",
                "a": "Reversionary bonuses smooth policyholder returns over time and build in guaranteed increases, helping manage expectations and smooth investment performance."
            },
            {
                "q": "What is a 'unit-linked' contract?",
                "a": "A contract where the policyholder's premiums (net of charges) buy units in an investment fund, and benefits are linked to the value of those units."
            },
            {
                "q": "How is the death benefit often structured under a unit-linked contract?",
                "a": "As a combination of a fixed (absolute) amount and an amount relative to the value of the unit fund (e.g. the higher of the two)."
            },
            {
                "q": "What is an 'accumulating with-profits' contract?",
                "a": "A contract where the policyholder's benefit is expressed as an accumulating fund of premiums, increased by regular bonus additions."
            },
            {
                "q": "What is the key difference between accumulating with-profits and unit-linked structures?",
                "a": "Accumulating with-profits funds grow via smoothed bonus additions with no explicit unit price; unit-linked funds fluctuate directly with a market-based unit price."
            },
            {
                "q": "What are 'unitised with-profits' contracts?",
                "a": "A hybrid structure \\u2014 benefits are expressed as a unit fund like unit-linked contracts, but the fund grows via smoothed bonus additions rather than direct market-value-linked unit prices."
            },
            {
                "q": "What does 'explicit charges' mean in the context of unit-linked contracts?",
                "a": "Charges are deducted transparently and separately from the fund, rather than being implicitly built into bonus rates."
            },
            {
                "q": "Why might terminal bonuses vary significantly between one claim and another?",
                "a": "They reflect the insurer's actual investment performance and profits over the specific period the policy was in force, which varies by cohort/timing."
            },
            {
                "q": "What risk does an insurer bear differently under conventional with-profits versus unit-linked contracts?",
                "a": "With conventional with-profits, the insurer bears more investment risk (guarantees + smoothing); under unit-linked, more risk passes directly to the policyholder."
            },
            {
                "q": "How might a 'guaranteed level annuity' fit within the variable benefits topic?",
                "a": "It provides a fixed, non-varying income, in contrast to with-profits or unit-linked products where the benefit level can vary with investment performance."
            },
            {
                "q": "Why is smoothing important to policyholders in with-profits products?",
                "a": "It reduces the impact of short-term market volatility on the benefits they eventually receive, giving more stable, predictable growth."
            },
            {
                "q": "In an accumulating with-profits contract with a fund 'defined in monetary terms,' how are bonuses typically added?",
                "a": "As regular guaranteed and bonus interest payments credited directly to the monetary fund value, plus a terminal bonus at claim."
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
                "a": "The premium is set so that, at the outset, the expected present value of premium income equals the expected present value of benefit outgo plus expenses."
            },
            {
                "q": "What is the difference between a 'net premium' and a 'gross premium'?",
                "a": "A gross premium includes an allowance for expenses (and often profit); a net premium only covers the expected cost of benefits."
            },
            {
                "q": "Give two types of expense typically allowed for in gross premium calculations.",
                "a": "Initial expenses (incurred at the start of the policy) and renewal expenses (incurred regularly throughout the policy)."
            },
            {
                "q": "How does a single premium contract's gross premium calculation differ from a regular premium contract's?",
                "a": "A single premium is set equal to the present value of benefits plus expenses; a regular premium's annual amount is found by dividing that total by the relevant premium annuity factor."
            },
            {
                "q": "How would you calculate a level annual gross premium $P$ for a whole life assurance, allowing for expenses?",
                "a": "Set $P \\cdot \\ddot{a}_x = (\\text{sum assured}) A_x + (\\text{PV of expenses})$, then solve for $P$."
            },
            {
                "q": "What does it mean for death benefits to 'increase by a constant compound rate'?",
                "a": "The sum assured paid on death grows by a fixed percentage each policy year (e.g. increasing with assumed inflation)."
            },
            {
                "q": "How would you handle a death benefit payable 'immediately on death' rather than 'at the end of year of death' in a premium calculation?",
                "a": "Use the corresponding 'immediate' assurance function (e.g. $\\overline{A}_x$ instead of $A_x$) in the equation of value."
            },
            {
                "q": "What does it mean for survival benefits to be 'payable at defined intervals other than at maturity'?",
                "a": "The policy pays out at multiple points during the term if the policyholder survives to each of those points, not just a single benefit at the end."
            },
            {
                "q": "Why might renewal expenses be expressed 'per premium' rather than as a fixed amount?",
                "a": "Because some renewal costs (e.g. commission) are often set as a percentage of each premium collected."
            },
            {
                "q": "What's the effect of higher assumed initial expenses on the calculated gross premium, all else equal?",
                "a": "The gross premium increases, since more expense needs to be recovered from the same premium income."
            },
            {
                "q": "Why must the equivalence principle use expected present values rather than just nominal totals?",
                "a": "Because both premiums and benefits are contingent on survival/death and paid at different points in time, so must be discounted and probability-weighted consistently."
            },
            {
                "q": "What does 'regular premiums payable annually or more frequently' affect in the premium equation?",
                "a": "The choice of annuity function used for premiums \\u2014 e.g. $\\ddot{a}_x^{(12)}$ for monthly premiums instead of $\\ddot{a}_x$ for annual."
            },
            {
                "q": "How would a policy allowing 'only a single premium' simplify the gross premium equation?",
                "a": "There's no premium annuity term \\u2014 the single premium itself directly equals the present value of benefits plus expenses."
            },
            {
                "q": "Give one reason an insurer would want to allow for expenses when setting premiums, beyond just covering benefit cost.",
                "a": "To ensure the policy is profitable / commercially viable, since running the business has real costs beyond the benefits themselves."
            },
            {
                "q": "How would combined death and survival benefits (an endowment assurance) be reflected in a gross premium equation?",
                "a": "The benefit side would use the endowment assurance function (sum of term assurance and pure endowment components)."
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
                "a": "To ensure it holds enough assets to meet future liabilities under existing policies, since premiums received to date may not yet cover the expected cost of future benefits/expenses."
            },
            {
                "q": "What is the 'prospective' gross premium reserve?",
                "a": "The expected present value of future benefits and expenses, minus the expected present value of future premiums, calculated at a given valuation date."
            },
            {
                "q": "What is the 'retrospective' gross premium reserve?",
                "a": "The accumulated value of past premiums received, minus the accumulated value of past benefits and expenses paid, up to the valuation date (per surviving policyholder)."
            },
            {
                "q": "Under what conditions are the prospective and retrospective reserves equal?",
                "a": "When the same mortality, interest and expense assumptions are used throughout (at issue and at the valuation date) as were used to set the original premium."
            },
            {
                "q": "What is the 'future loss random variable' for a policy?",
                "a": "The present value of future benefits and expenses minus the present value of future premiums, viewed as a random variable at a given point in time."
            },
            {
                "q": "How does the gross premium reserve relate to the expected future loss random variable?",
                "a": "The reserve equals the expected value of the future loss random variable (the prospective reserve)."
            },
            {
                "q": "What is the recursive relationship between successive annual gross premium reserves (in words)?",
                "a": "The reserve at the start of a year, plus that year's premium, less expenses, accumulated with interest, less the expected cost of death claims during the year, gives the reserve at the end of the year (per survivor)."
            },
            {
                "q": "Why is the recursive reserve relationship useful in practice?",
                "a": "It allows reserves to be rolled forward year by year using only the previous year's reserve and that year's assumptions, rather than recalculating from scratch."
            },
            {
                "q": "What does the recursive relationship let you derive about a year's mortality profit?",
                "a": "The relationship's 'release' or 'strain' from actual versus expected deaths during the year effectively gives the mortality profit or loss for that year."
            },
            {
                "q": "What is a 'net premium' reserve, and how does it differ from a gross premium reserve?",
                "a": "A net premium reserve uses only the net premium (no expense loading), ignoring both future and past expenses \\u2014 a simplified, historically more conservative reserving approach."
            },
            {
                "q": "How do net premiums relate to gross premiums in reserving?",
                "a": "The net premium is calculated using the equivalence principle applied only to benefits; the net premium reserve uses this net premium, not the actual gross premium charged."
            },
            {
                "q": "Why might a net premium reserving approach be considered more prudent than a gross premium approach?",
                "a": "It ignores the (potentially unreliable) expense loading in premiums, giving a more cautious reserve, less sensitive to expense assumption changes."
            },
            {
                "q": "What happens to a policy's reserve over its term for a typical whole life or endowment assurance?",
                "a": "It generally increases over time, as the policy moves closer to the eventual claim."
            },
            {
                "q": "Why is understanding equivalence between prospective and retrospective reserves useful for exam calculations?",
                "a": "It lets you choose whichever method is computationally easier for a given problem, knowing both give the same answer under consistent assumptions."
            },
            {
                "q": "How would allowing for expenses generally affect the size of the gross premium reserve compared to a net premium reserve?",
                "a": "It can increase or decrease the reserve depending on the expense pattern \\u2014 high initial expenses can reduce early reserves relative to net premium reserves."
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
                "a": "The expected present value of an annuity of $1$ per year, paid annually in advance, while both lives $x$ and $y$ are alive (a 'joint life' annuity, ceasing on first death)."
            },
            {
                "q": "What does $A_{xy}$ represent?",
                "a": "The expected present value of a benefit of $1$ payable at the end of the year in which the first of the two lives $(x)$ and $(y)$ dies."
            },
            {
                "q": "What is a 'last survivor' annuity, $\\ddot{a}_{\\overline{xy}}$?",
                "a": "An annuity that continues to be paid as long as at least one of the two lives is still alive, ceasing only on the second (later) death."
            },
            {
                "q": "What is the key identity linking joint life and last survivor functions?",
                "a": "$\\ddot{a}_x + \\ddot{a}_y = \\ddot{a}_{xy} + \\ddot{a}_{\\overline{xy}}$ (and similarly for assurance functions)."
            },
            {
                "q": "Under the common assumption of independent future lifetimes, how do you calculate the joint survival probability $_tp_{xy}$?",
                "a": "$_tp_{xy} = {_tp_x} \\times {_tp_y}$ \\u2014 the product of the individual survival probabilities."
            },
            {
                "q": "What does $_tq_{xy}$ represent?",
                "a": "The probability that at least one of the two lives $(x)$ and $(y)$ has died within $t$ years: $_tq_{xy} = 1 - {_tp_{xy}}$"
            },
            {
                "q": "What does the last survivor assurance function $A_{\\overline{xy}}$ represent?",
                "a": "The expected present value of $1$ payable at the end of the year of the second (later) death of the two lives."
            },
            {
                "q": "How would you find $_tp_{\\overline{xy}}$, the probability that at least one life survives $t$ years?",
                "a": "$_tp_{\\overline{xy}} = {_tp_x} + {_tp_y} - {_tp_{xy}}$"
            },
            {
                "q": "Why is a 'joint life last survivor' annuity a common real-world product?",
                "a": "It's often used for a married couple's pension, continuing payments until both spouses have died, providing income security to the surviving spouse."
            },
            {
                "q": "What assumption is typically made about the two lives' future lifetimes unless stated otherwise?",
                "a": "That they are independent \\u2014 the death or survival of one life doesn't affect the probability distribution of the other's future lifetime."
            },
            {
                "q": "How would you extend joint life functions to three or more lives?",
                "a": "The same multiplicative independence logic extends \\u2014 e.g. $_tp_{xyz} = {_tp_x}\\cdot{_tp_y}\\cdot{_tp_z}$ for the probability all three survive."
            },
            {
                "q": "What does 'contingent' mean in the phrase 'contingent and reversionary benefits'?",
                "a": "A benefit that is payable only if a specified life dies before (or after) another specified life \\u2014 payment is contingent on the order of deaths."
            },
            {
                "q": "How would a term assurance on the first death of two lives, $A^1_{xy:\\overline{n}|}$, be interpreted?",
                "a": "The expected present value of $1$ payable at the end of the year of the first death of $(x)$ and $(y)$, provided that first death occurs within $n$ years."
            },
            {
                "q": "Why is the 'first death' (joint life) function always smaller than either individual single-life annuity function?",
                "a": "Because the annuity ceases as soon as either life dies, which happens no later than either individual's own death \\u2014 so payments are expected to stop sooner."
            },
            {
                "q": "Why is the 'last survivor' annuity always at least as large as the larger of the two individual single-life annuities?",
                "a": "Because it continues paying until the later of the two deaths, which is at least as late as either individual life's own death."
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
                "a": "A benefit payable on the death of one specified life, but only if that death occurs before (or after) the death of another specified life."
            },
            {
                "q": "What does the notation $A^1_{xy}$ (with a '1' over just the $x$) mean in a two-life context?",
                "a": "A benefit payable on the death of $(x)$, but only if $(x)$ dies before $(y)$."
            },
            {
                "q": "What is a 'reversionary annuity'?",
                "a": "An annuity payable to one life (e.g. $y$), but only starting after another specified life (e.g. $x$) has died, and only while $y$ is still alive."
            },
            {
                "q": "What real-world product commonly uses a reversionary annuity structure?",
                "a": "A 'widow's' or dependant's pension \\u2014 income starting only after the main pensioner's death, paid to the surviving dependant."
            },
            {
                "q": "How is a reversionary annuity to $y$ after $x$'s death, $a_{x|y}$, related to standard joint life and single life functions?",
                "a": "$a_{x|y} = a_y - a_{xy}$ \\u2014 the full annuity to $y$, minus the portion payable while both are alive."
            },
            {
                "q": "Why must you be careful about the exact timing convention (annuity-due vs. immediate) when deriving reversionary annuity formulas?",
                "a": "Because the identity linking the reversionary, single-life and joint-life annuities depends on consistent timing assumptions \\u2014 mixing conventions gives the wrong result."
            },
            {
                "q": "What does 'contingent probability' mean in the context of these benefits?",
                "a": "The probability of an event (e.g. death of one life) occurring, conditional on (or in a specified order relative to) an event affecting the other life."
            },
            {
                "q": "Why can't you simply say the probability $(x)$ dies first is $\\frac{1}{2}$ in general?",
                "a": "Because the probability depends on each life's specific mortality (age, health, etc.) \\u2014 it's only $\\frac12$ under special symmetric assumptions."
            },
            {
                "q": "How would you calculate the probability that $(x)$ dies before $(y)$, within $n$ years?",
                "a": "By integrating (or summing) the probability $(x)$ dies at each future time $t$ within the term, multiplied by the probability $(y)$ is still alive at that time."
            },
            {
                "q": "What is a 'contingent' annuity, as opposed to a contingent assurance?",
                "a": "An annuity payable to one life only while a specific ordering of survival/death between the two lives holds \\u2014 the reversionary annuity is one example."
            },
            {
                "q": "How would you calculate $A^1_{xy}$ (benefit on $(x)$'s death before $(y)$'s) using an integral, in continuous terms?",
                "a": "Integrate over $t$ the probability density of $(x)$'s death at $t$, multiplied by the probability $(y)$ is still alive at $t$, discounted to present value."
            },
            {
                "q": "Why are contingent benefit calculations generally more involved than simple joint life (first-death) calculations?",
                "a": "Because they require tracking not just whether a death has occurred, but the specific order in which the two lives died."
            },
            {
                "q": "What identity links $A^1_{xy}$ and $A^1_{yx}$ to the joint life assurance $A_{xy}$?",
                "a": "$A^1_{xy} + A^1_{yx} = A_{xy}$ \\u2014 one of the two lives must die first, and together they account for the full joint life first-death assurance."
            },
            {
                "q": "Why might contingent benefits appear less often in real products than joint life or last survivor benefits?",
                "a": "They're a more niche/specialised structure, less common than the standard joint life or last-survivor pension/insurance products."
            },
            {
                "q": "How does the deferred nature of a reversionary annuity affect its value compared to an equivalent immediate annuity to the same life?",
                "a": "It's smaller, since payment only begins after a triggering event (the other life's death) that may occur late or not be certain within any fixed horizon."
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
                "a": "The extra amount the insurer must pay out on death beyond what it has already reserved \\u2014 benefit minus the reserve already held."
            },
            {
                "q": "What is 'expected death strain' (EDS)?",
                "a": "The death strain at risk multiplied by the expected (assumed) probability of death during the year, summed across the portfolio."
            },
            {
                "q": "What is 'actual death strain' (ADS)?",
                "a": "The death strain at risk, summed only over the policies where death actually occurred during the year."
            },
            {
                "q": "How is 'mortality profit' calculated?",
                "a": "Mortality profit = Expected death strain \\u2212 Actual death strain."
            },
            {
                "q": "What does it mean if actual death strain exceeds expected death strain?",
                "a": "More claims (or larger claims) occurred than assumed, resulting in a mortality loss (negative mortality profit) for the insurer."
            },
            {
                "q": "For a whole life assurance with a level sum assured $S$ and reserve $_tV$ at the start of the year, what is the death strain at risk?",
                "a": "$S - {_tV}$, approximately (adjusted for interest/timing conventions as needed)."
            },
            {
                "q": "How does death strain at risk differ for an annuity in payment, compared to an assurance?",
                "a": "For an annuity, death strain is typically the reserve released (a gain to the insurer), unlike an assurance where death triggers a payment."
            },
            {
                "q": "Why might death strain at risk be negative for certain products?",
                "a": "If the reserve held already exceeds the benefit payable on death (e.g. for annuities in payment), the insurer effectively benefits (releases reserve) on death."
            },
            {
                "q": "How would mortality profit be calculated for policies where death benefits are payable immediately on death rather than end of year?",
                "a": "Similarly, but adjusted for the mid-year (or exact) timing of payment, typically using a half-year interest adjustment or exact timing if known."
            },
            {
                "q": "Why is monitoring mortality profit/loss important for an insurer?",
                "a": "It shows whether the mortality assumptions used for pricing/reserving are accurate, informing whether assumptions need to be revised."
            },
            {
                "q": "If a life office assumed higher mortality than actually occurred, what would you expect for mortality profit?",
                "a": "A mortality profit (gain) \\u2014 fewer/smaller claims occurred than the (pessimistic) assumption predicted."
            },
            {
                "q": "How is death strain at risk affected by policies with survival (rather than death) benefits, e.g. pure endowments?",
                "a": "Death strain at risk is simply the negative of the reserve held, since the insurer keeps the reserve (no death benefit is paid)."
            },
            {
                "q": "What role does the number of policies (portfolio size) play in expected vs. actual death strain calculations?",
                "a": "Expected death strain is summed over the whole portfolio using assumed probabilities; actual death strain only involves the subset of policies where death genuinely occurred."
            },
            {
                "q": "How could an insurer use mortality profit analysis over several years?",
                "a": "To track trends in mortality experience versus assumptions, informing decisions on updating mortality tables or repricing products."
            },
            {
                "q": "What is the fundamental intuition behind mortality profit?",
                "a": "The insurer effectively 'insures' against the cost of death strain; if fewer or cheaper claims occur than priced for, it keeps the difference as profit."
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
                "a": "A model describing how a life can move between different states (e.g. healthy, sick, dead) over time, with transition probabilities/forces between states."
            },
            {
                "q": "What is a 'multiple decrement' model?",
                "a": "A special case of a multi-state model with one starting ('active') state and several possible ways of leaving it, with no return to the active state."
            },
            {
                "q": "What is a 'dependent probability' of decrement in a multiple decrement context?",
                "a": "The probability of leaving the active state via a specific decrement, allowing for the fact that other decrements are also competing to remove the life from the active state first."
            },
            {
                "q": "What is an 'independent' rate of decrement, as distinct from a 'dependent' probability?",
                "a": "The rate of decrement that would apply if that decrement were the only one operating, ignoring competition from other decrements."
            },
            {
                "q": "Why are dependent probabilities of decrement generally lower than the corresponding independent rates?",
                "a": "Because other decrements can remove the life from the active state first, so there's less exposure remaining for any single decrement to act on."
            },
            {
                "q": "What does it mean for forces of transition to be 'constant over single years of age' in this context?",
                "a": "A simplifying assumption used to convert between dependent probabilities and underlying forces of decrement within a given year."
            },
            {
                "q": "How would you construct a multiple decrement table?",
                "a": "Track, for each age, the number in the active state, and the number leaving via each separate decrement, analogous to a life table but with multiple causes of exit."
            },
            {
                "q": "How does a multiple decrement model relate to health/sickness insurance premium and benefit structures?",
                "a": "It can model transitions between healthy and sick states (and death), allowing premiums and sickness benefits to be valued based on the probability of being in each state at each future time."
            },
            {
                "q": "What does it mean for a cashflow to be 'contingent upon multiple transition events'?",
                "a": "The cashflow's payment depends on the life having undergone a specific sequence or combination of state transitions."
            },
            {
                "q": "How is the expected present value of a benefit calculated under a multi-state model, in general terms?",
                "a": "Sum (or integrate) over all relevant future times and states, the probability of being in (or transitioning into) the triggering state, multiplied by the discounted benefit amount."
            },
            {
                "q": "What is the relationship between forces of transition and dependent probabilities when forces are assumed constant over a year?",
                "a": "The dependent probability of a specific decrement over the year can be derived from the constant forces of all decrements operating simultaneously."
            },
            {
                "q": "Why might a pension scheme use a multiple decrement model?",
                "a": "To allow for the several ways a member can leave active service \\u2014 death, withdrawal, ill-health retirement, and normal retirement \\u2014 each with different associated benefits."
            },
            {
                "q": "How would you determine independent decrement forces given dependent (observed) probabilities?",
                "a": "Using the assumed relationship between forces and dependent probabilities, solving the equations linking them, typically requiring the dependent probabilities of all competing decrements simultaneously."
            },
            {
                "q": "Why is a multiple decrement model described as 'a special case of a multi-state Markov model'?",
                "a": "Because it has a single starting state with several absorbing (exit) states and no transitions back into the active state."
            },
            {
                "q": "Give one example of a health insurance benefit structure that would need a multi-state (rather than simple two-state) model.",
                "a": "An income protection / permanent health insurance policy, which needs to model transitions between healthy, sick, and dead states (and possibly recovery)."
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
                "a": "The notional pool of units purchased with (net) premiums, whose value grows or falls in line with the performance of the underlying investments."
            },
            {
                "q": "What is a 'bid-offer spread' in a unit-linked contract?",
                "a": "The difference between the price at which units are bought (offer price) and sold (bid price), a source of income/charge for the insurer."
            },
            {
                "q": "What is the 'non-unit fund' (or 'sterling fund') in a unit-linked contract?",
                "a": "The part of the insurer's cashflows not related to the unit fund \\u2014 covering charges collected, expenses paid, and non-unit-linked benefits."
            },
            {
                "q": "Why might an insurer need to hold 'non-unit reserves'?",
                "a": "To cover situations where future non-unit cashflows are expected to be negative, even if the overall contract is profitable."
            },
            {
                "q": "What does it mean to 'zeroise' future negative cashflows in this context?",
                "a": "Setting up a non-unit reserve specifically to eliminate (offset) any future years' projected negative cashflows."
            },
            {
                "q": "How do management charges typically affect the unit fund?",
                "a": "They are deducted regularly (e.g. as a percentage of fund value) from the unit fund, reducing its growth compared to the raw investment return."
            },
            {
                "q": "What are 'unallocated premiums' in a unit-linked contract?",
                "a": "The portion of a premium not used to purchase units for the policyholder, effectively retained by the insurer."
            },
            {
                "q": "How does an 'accumulating with-profits' fund differ operationally from a standard unit-linked fund?",
                "a": "Its value grows through regular guaranteed and bonus interest additions (smoothed), rather than fluctuating directly with a market-based unit price."
            },
            {
                "q": "Why is cashflow projection important for pricing and reserving unit-linked contracts?",
                "a": "Because the insurer's own (non-unit) profit emerges as the difference between charges collected and expenses/benefits paid over time, needing year-by-year projection."
            },
            {
                "q": "What might cause unit fund growth to differ from gross investment return?",
                "a": "Deduction of management charges and other fund-based charges reduces the net growth credited to the policyholder's units."
            },
            {
                "q": "How would extra life cover (death benefit above the unit fund value) be funded in a unit-linked contract?",
                "a": "Through a specific mortality charge deducted from the fund, covering the 'sum at risk' (the extra amount above the fund value payable on death)."
            },
            {
                "q": "What does 'sum at risk' mean for unit-linked death benefits?",
                "a": "The excess of the guaranteed minimum death benefit over the current unit fund value."
            },
            {
                "q": "Why might insurers separate unit and non-unit cashflows when modelling a unit-linked contract?",
                "a": "Because the unit fund cashflows belong to the policyholder, while the non-unit cashflows determine the insurer's own profit/loss and reserving needs."
            },
            {
                "q": "How does a fall in investment markets typically affect a unit-linked insurer's non-unit fund position?",
                "a": "It can increase the sum at risk (if death benefits have a fixed minimum) and reduce charge income if charges are based on fund value."
            },
            {
                "q": "Why is profit testing especially important for unit-linked products compared to simple non-profit assurances?",
                "a": "Because unit-linked profitability depends on the interaction of charges, expenses, and investment performance over time, not captured by a simple equation of value."
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
                "a": "The sequence of expected end-of-year profits (per policy in force at the start of each year) projected over the policy's term."
            },
            {
                "q": "What is a 'profit signature'?",
                "a": "The profit vector adjusted to allow for the probability of the policy still being in force at each duration \\u2014 profit per policy originally issued."
            },
            {
                "q": "How do you convert a profit vector into a profit signature?",
                "a": "Multiply each year's profit (per policy in force at the start of that year) by the probability of being in force at the start of that year."
            },
            {
                "q": "What is the Net Present Value (NPV) of a policy, in the profit testing context?",
                "a": "The present value of the profit signature, discounted at the insurer's chosen risk discount rate."
            },
            {
                "q": "What is the 'profit margin' of a policy?",
                "a": "The NPV of the profit signature expressed as a percentage of the present value of premium income (or another chosen base)."
            },
            {
                "q": "What cashflows are typically included when profit testing a policy for a given year?",
                "a": "Premium income, investment income on reserves/assets, expenses, cost of any benefit, and the increase in reserve required."
            },
            {
                "q": "How is profit testing used to determine an appropriate premium?",
                "a": "The premium can be varied until the resulting NPV (or profit margin) meets a target set by the insurer, rather than relying solely on the equivalence principle."
            },
            {
                "q": "What is the 'risk discount rate' used in profit testing?",
                "a": "The rate used to discount the profit signature to present value, often set higher than the risk-free rate to reflect the riskiness of the profit cashflows."
            },
            {
                "q": "Why might profit testing use a different (higher) discount rate than the interest rate assumed for reserving?",
                "a": "To build in a margin for risk/uncertainty in the profit projections, reflecting that actual experience may differ from assumptions."
            },
            {
                "q": "How does profit testing show the effect of setting up reserves each year?",
                "a": "The increase in reserve required each year (funded from that year's cashflows) reduces that year's profit."
            },
            {
                "q": "How could an insurer use profit testing to compare two different premium bases for the same product?",
                "a": "Run the profit test under each premium basis and compare the resulting NPV/profit margin, choosing the basis that best meets profitability targets."
            },
            {
                "q": "What does it mean if a policy's profit vector shows a loss in its first year but profits in later years?",
                "a": "This is common where initial expenses exceed first-year premium income, but the policy becomes profitable later as expenses fall and margins are earned."
            },
            {
                "q": "Why is the probability of a policy remaining in force important to profit testing (via the profit signature)?",
                "a": "Because expected total profit depends on how many of the original policies are still generating profit cashflows each year."
            },
            {
                "q": "What could cause profit testing results to change even if the premium and product design stay the same?",
                "a": "A change in assumptions (e.g. mortality, expenses, lapses, investment returns) used for the projection."
            },
            {
                "q": "How would profit testing be adapted for a unit-linked contract, compared to a conventional contract?",
                "a": "It would separately project unit fund growth and non-unit fund cashflows, summing the non-unit profit signature much as for a conventional contract."
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
                "a": "By projecting expected future cashflows year by year and finding the reserve needed at each duration so that, with future premiums, it exactly covers future benefits and expenses."
            },
            {
                "q": "Why might an insurer calculate reserves via profit testing rather than the standard prospective/retrospective formulas?",
                "a": "It naturally extends to complex products (e.g. unit-linked, multiple decrements) where a simple closed-form reserve formula may not exist."
            },
            {
                "q": "How does including reserves in a profit test change the year-by-year profit signature compared to ignoring reserves?",
                "a": "It smooths profit emergence \\u2014 reserves capture money that would otherwise appear as an early profit, releasing it as the policy progresses."
            },
            {
                "q": "What is the effect on first-year profit of holding a reserve at the end of the first year (compared to holding none)?",
                "a": "First-year profit is reduced, since the increase in reserve is deducted from that year's cashflow."
            },
            {
                "q": "How would 'zeroising' affect a unit-linked policy's projected profit signature?",
                "a": "It removes any projected negative cashflows in later years (by holding a sufficient non-unit reserve upfront), though it reduces earlier profit to fund the reserve."
            },
            {
                "q": "Why is zeroising particularly relevant to unit-linked products?",
                "a": "Because unit-linked non-unit cashflows can naturally be negative in some future years, which a reserve can pre-fund to avoid future losses."
            },
            {
                "q": "What information do you need to determine the required non-unit reserve at a given duration to zeroise future cashflows?",
                "a": "The projected non-unit cashflows in all future years, discounted appropriately, identifying the reserve needed so no future year's cashflow is negative."
            },
            {
                "q": "How does the reserving basis differ from the pricing/profit-testing basis, potentially?",
                "a": "The reserving basis is often chosen more prudently (e.g. more cautious mortality, lower interest) than the best-estimate assumptions used for profit testing."
            },
            {
                "q": "Why might a reserve calculated via cashflow projection differ from one calculated via the standard prospective formula, even for a simple product?",
                "a": "If different (e.g. more prudent) assumptions are used for reserving than for the profit-testing projection, the resulting reserve figures would differ."
            },
            {
                "q": "What role does the recursive reserve relationship play in profit testing calculations?",
                "a": "It's effectively the mechanism by which reserve movements (increase in reserve, release on death) are built into each year's profit cashflow in the projection."
            },
            {
                "q": "How would gross premium reserves computed via profit testing be validated against a formula-based reserve?",
                "a": "By checking that, under the same reserving assumptions, the reserve implied by the projected cashflows matches the standard prospective reserve formula result."
            },
            {
                "q": "What happens to the profit signature of a policy if reserves are set higher than the minimum needed to avoid future losses?",
                "a": "Earlier profit is further reduced, and later profit correspondingly increases as the excess reserve is released."
            },
            {
                "q": "Why is it important for reserves derived via profit testing to be non-negative at each duration for a unit-linked contract?",
                "a": "A negative non-unit reserve would imply the insurer expects to extract more value than it has set aside, leaving it unable to cover a future shortfall."
            },
            {
                "q": "How does the choice of risk discount rate in profit testing interact with reserve calculations?",
                "a": "The risk discount rate values the emerging profit signature (after reserving), but the reserving calculation itself typically uses separate, often more prudent, assumptions."
            },
            {
                "q": "What's the overall link between profit testing and reserving aspects of profit testing?",
                "a": "Profit testing introduces the cashflow projection technique itself; reserving aspects apply and extend that same technique specifically to derive and validate reserves, including zeroising for unit-linked contracts."
            }
        ]
    }
],
  CM2: [
    {
        "id": "m01",
        "title": "The Efficient Markets Hypothesis",
        "description": "Introduces the EMH's three forms (weak, semi-strong, strong) and what each implies about whether investors can beat the market using different types of information.",
        "cards": [
            {
                "q": "What are the three forms of the Efficient Markets Hypothesis?",
                "a": "Weak form, semi-strong form, and strong form."
            },
            {
                "q": "What does the weak form of EMH state?",
                "a": "Current prices reflect all information contained in the historical price series — technical analysis cannot generate abnormal returns."
            },
            {
                "q": "What does the semi-strong form of EMH state?",
                "a": "Current prices reflect all publicly available information, not just historical prices — fundamental analysis of public information cannot generate abnormal returns."
            },
            {
                "q": "What does the strong form of EMH state?",
                "a": "Current prices reflect all information, public and private (inside) — even insider information cannot generate abnormal returns."
            },
            {
                "q": "If markets are semi-strong form efficient, can an investor profit from insider information?",
                "a": "Yes — semi-strong form only covers publicly available information, so private/inside information could still generate abnormal returns."
            },
            {
                "q": "What is one piece of evidence often cited against weak form efficiency?",
                "a": "Momentum or mean-reversion patterns found in some studies of historical stock returns."
            },
            {
                "q": "What is one piece of evidence often cited against semi-strong form efficiency?",
                "a": "Anomalies such as the small-firm effect or post-earnings-announcement drift, where returns following public announcements are partly predictable."
            },
            {
                "q": "What is the 'rational expectations' hypothesis?",
                "a": "The idea that market participants form expectations optimally, using all available information, without systematic bias."
            },
            {
                "q": "What is 'technical analysis'?",
                "a": "Using patterns in historical prices/volumes to try to predict future price movements."
            },
            {
                "q": "What is 'fundamental analysis'?",
                "a": "Using publicly available information (accounts, economic data, etc.) to estimate an asset's intrinsic value."
            },
            {
                "q": "Why is testing for strong form efficiency inherently difficult?",
                "a": "It requires observing outcomes from genuine inside information, which is hard to identify and often illegal to trade on."
            },
            {
                "q": "What does the 'joint hypothesis problem' refer to in testing market efficiency?",
                "a": "Any test of market efficiency is also a test of the asset pricing model used to define 'abnormal' returns, so a rejection could mean either is wrong."
            },
            {
                "q": "If a market is EMH-efficient, what happens to prices when new information arrives?",
                "a": "Prices adjust quickly and accurately to reflect the new information."
            },
            {
                "q": "Give one implication of weak form efficiency for investment strategy.",
                "a": "There's no value in trying to predict future prices purely from past price patterns (technical analysis is futile)."
            },
            {
                "q": "Why is understanding EMH important for actuaries pricing financial guarantees?",
                "a": "It underpins assumptions about how quickly and accurately markets price risk, which affects valuation and hedging assumptions."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Utility theory",
        "description": "Introduces utility functions as a way to model investor preferences and risk attitudes, the expected utility theorem, and common utility function forms.",
        "cards": [
            {
                "q": "What is a 'utility function'?",
                "a": "A mathematical function representing an investor's preferences over different levels of wealth or outcomes."
            },
            {
                "q": "What is the expected utility theorem?",
                "a": "Under certain axioms of rational choice, an investor's preferences over uncertain outcomes can be represented by maximising expected utility."
            },
            {
                "q": "What does 'non-satiation' mean for a utility function?",
                "a": "More wealth is always preferred to less — the utility function is increasing (positive marginal utility)."
            },
            {
                "q": "How is risk aversion characterised in terms of a utility function's shape?",
                "a": "A risk-averse investor has a concave utility function (diminishing marginal utility of wealth)."
            },
            {
                "q": "What distinguishes risk aversion, risk neutrality, and risk seeking in terms of utility function curvature?",
                "a": "Risk aversion is concave, risk neutrality is linear, and risk seeking is convex."
            },
            {
                "q": "What does it mean for an investor to display 'declining absolute risk aversion'?",
                "a": "They become less risk-averse (in absolute monetary terms) as their wealth increases."
            },
            {
                "q": "How is the Arrow-Pratt measure of absolute risk aversion defined?",
                "a": "$A(w) = -\\frac{u''(w)}{u'(w)}$"
            },
            {
                "q": "How is relative risk aversion defined?",
                "a": "$R(w) = -\\frac{w\\,u''(w)}{u'(w)} = w\\,A(w)$"
            },
            {
                "q": "What is a 'state-dependent' utility function?",
                "a": "A utility function that depends not just on wealth but also on which state of the world has occurred."
            },
            {
                "q": "Give one commonly used utility function with constant relative risk aversion.",
                "a": "The power utility function (isoelastic utility)."
            },
            {
                "q": "Give one commonly used utility function with constant absolute risk aversion.",
                "a": "The exponential utility function."
            },
            {
                "q": "How can utility theory be used to analyse a simple insurance problem?",
                "a": "By comparing the expected utility of wealth with and without insurance, to see whether purchasing insurance increases expected utility."
            },
            {
                "q": "Why might a risk-averse individual pay a premium for insurance greater than the expected loss?",
                "a": "The certainty of a smaller, known loss gives higher expected utility than an uncertain, potentially large loss, even at a premium above the expected claim cost."
            },
            {
                "q": "What is quadratic utility, and what is one criticism of it?",
                "a": "$u(w) = w - bw^2$; it implies increasing absolute risk aversion and has a maximum, beyond which more wealth reduces utility — unrealistic."
            },
            {
                "q": "How does log utility ($u(w) = \\ln w$) behave in terms of risk aversion?",
                "a": "It displays constant relative risk aversion equal to 1, a special case of the power utility family."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Measures of investment risk",
        "description": "Covers different ways to quantify investment risk beyond simple variance — semi-variance, shortfall probabilities, Value at Risk, TailVaR — and how insurers help mitigate risk.",
        "cards": [
            {
                "q": "What is the 'variance of return' as a risk measure?",
                "a": "The expected squared deviation of the return from its mean, treating upside and downside deviations symmetrically."
            },
            {
                "q": "What is 'downside semi-variance'?",
                "a": "A risk measure only counting deviations below the mean (or a target return), ignoring upside variability."
            },
            {
                "q": "What is a 'shortfall probability'?",
                "a": "The probability that returns fall below some specified target or threshold level."
            },
            {
                "q": "What is 'Value at Risk' (VaR)?",
                "a": "The loss amount that will not be exceeded with a given confidence level over a specified time horizon."
            },
            {
                "q": "What is 'TailVaR' (also called Expected Shortfall)?",
                "a": "The expected loss, given that the loss exceeds the VaR threshold — the average of the losses in the worst tail of the distribution."
            },
            {
                "q": "Give one criticism of VaR as a risk measure.",
                "a": "It doesn't indicate how large losses could be beyond the threshold, and it isn't always sub-additive across a diversified portfolio."
            },
            {
                "q": "Why is TailVaR generally considered a better risk measure than VaR?",
                "a": "It captures the severity of losses in the tail beyond the threshold, and satisfies coherent risk measure properties including sub-additivity."
            },
            {
                "q": "How does the choice of risk measure relate to an investor's utility function?",
                "a": "Risk measures implicitly assume something about what an investor cares about, which should be consistent with the shape of their utility function."
            },
            {
                "q": "Why might variance be a poor risk measure for a skewed return distribution?",
                "a": "It treats upside and downside deviations symmetrically, but investors typically care more about downside risk for skewed distributions."
            },
            {
                "q": "How does the thickness of a return distribution's tails affect risk assessment?",
                "a": "Fat-tailed distributions have a higher chance of extreme outcomes than the normal distribution suggests, understating true tail risk if ignored."
            },
            {
                "q": "How can insurance companies help reduce or remove risk for policyholders?",
                "a": "By pooling many independent risks, diversifying away idiosyncratic risk, and charging a premium to cover expected cost plus a margin."
            },
            {
                "q": "What is 'moral hazard'?",
                "a": "The tendency for a party to take on more risk (or behave less carefully) once they are insured against the consequences of that risk."
            },
            {
                "q": "What is 'adverse selection'?",
                "a": "The tendency for those most likely to claim (highest risk) to be more likely to seek insurance, if the insurer cannot fully distinguish risk levels."
            },
            {
                "q": "How might an insurer mitigate adverse selection?",
                "a": "Through underwriting (using available information to price risk accurately) or by requiring evidence of insurability."
            },
            {
                "q": "How would you compare two investment opportunities using multiple risk measures at once?",
                "a": "Calculate each measure for both opportunities and compare — different measures can give different rankings."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Portfolio theory",
        "description": "Covers mean-variance portfolio theory — how combining risky assets can reduce risk through diversification, and how to construct an optimal portfolio.",
        "cards": [
            {
                "q": "What are the key assumptions of mean-variance portfolio theory?",
                "a": "Investors care only about the expected return and variance of returns, and choose portfolios to maximise return for a given variance (or minimise variance for a given return)."
            },
            {
                "q": "How is the expected return of a portfolio of two assets calculated?",
                "a": "As the weighted average of the individual assets' expected returns, weighted by their portfolio proportions."
            },
            {
                "q": "How is the variance of a two-asset portfolio calculated?",
                "a": "$\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1w_2\\,\\text{Cov}(R_1,R_2)$"
            },
            {
                "q": "What is the 'efficient frontier'?",
                "a": "The set of portfolios offering the highest expected return for each level of risk (variance/standard deviation)."
            },
            {
                "q": "What benefit does diversification provide, according to mean-variance theory?",
                "a": "Combining assets that aren't perfectly positively correlated reduces overall portfolio variance below the weighted average of individual variances."
            },
            {
                "q": "What happens to the potential diversification benefit as the correlation between two assets decreases?",
                "a": "The diversification benefit increases — lower (especially negative) correlation gives greater risk reduction for a given expected return."
            },
            {
                "q": "When does mean-variance portfolio theory lead to a unique 'optimum' portfolio for an investor?",
                "a": "When combined with the investor's specific indifference curves (from their utility function/risk aversion), which pick a single point on the efficient frontier."
            },
            {
                "q": "What is the 'minimum variance portfolio'?",
                "a": "The portfolio on the efficient frontier (or feasible set) with the lowest possible variance, regardless of expected return."
            },
            {
                "q": "Why can adding a poorly-performing asset to a portfolio sometimes still be beneficial?",
                "a": "If its returns are weakly or negatively correlated with the rest of the portfolio, it can reduce overall variance more than it reduces expected return."
            },
            {
                "q": "How does mean-variance theory extend from two assets to $n$ assets?",
                "a": "Portfolio variance depends on all pairwise covariances between assets, requiring a full covariance matrix."
            },
            {
                "q": "What is a key limitation of mean-variance portfolio theory?",
                "a": "It assumes returns are adequately described by mean and variance alone, ignoring skewness/kurtosis and other risk aspects."
            },
            {
                "q": "What does it mean for a portfolio to be 'dominated' in mean-variance space?",
                "a": "There exists another portfolio with at least as high expected return and no higher variance — a rational investor would never choose the dominated one."
            },
            {
                "q": "Why might mean-variance theory be less appropriate for assets with highly skewed or fat-tailed return distributions?",
                "a": "Two moments (mean and variance) don't fully capture risk when distributions are skewed or have fat tails."
            },
            {
                "q": "Give one practical benefit of mean-variance theory for investors, despite its simplifying assumptions.",
                "a": "It provides a tractable, quantifiable framework for balancing risk and return, and demonstrates the benefit of diversification clearly."
            },
            {
                "q": "If two assets are perfectly positively correlated, what happens to the diversification benefit of combining them?",
                "a": "There is none — portfolio risk is simply the weighted average of the individual risks."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Models of asset returns",
        "description": "Introduces multifactor models for explaining and predicting asset returns — macroeconomic, fundamental, and statistical factor models — and the single-index model.",
        "cards": [
            {
                "q": "What is a 'multifactor model' of asset returns?",
                "a": "A model expressing an asset's return as a linear function of several underlying risk factors, plus an asset-specific (idiosyncratic) term."
            },
            {
                "q": "What is a 'macroeconomic factor model'?",
                "a": "A multifactor model where the factors are observable macroeconomic variables, such as GDP growth, inflation, or interest rates."
            },
            {
                "q": "What is a 'fundamental factor model'?",
                "a": "A multifactor model where the factors are company/security-specific characteristics, such as size, dividend yield, or industry."
            },
            {
                "q": "What is a 'statistical factor model'?",
                "a": "A multifactor model where the factors are derived statistically from the historical covariance structure of returns, without being pre-specified as economic variables."
            },
            {
                "q": "What is the 'single-index model' of asset returns?",
                "a": "A simplified model where an asset's return depends on a single common factor (often the market return) plus an idiosyncratic term."
            },
            {
                "q": "In the single-index model, what does 'beta' represent?",
                "a": "The sensitivity of an asset's return to the common (market) factor."
            },
            {
                "q": "What is 'diversifiable' (or idiosyncratic) risk?",
                "a": "Risk specific to an individual asset that can be reduced or eliminated by holding a diversified portfolio."
            },
            {
                "q": "What is 'non-diversifiable' (or systematic) risk?",
                "a": "Risk common to all assets, which cannot be eliminated through diversification."
            },
            {
                "q": "Why does diversification reduce idiosyncratic risk but not systematic risk?",
                "a": "Idiosyncratic shocks are (assumed) uncorrelated and average out across a large portfolio; systematic risk affects all assets simultaneously."
            },
            {
                "q": "How is the variance of an asset's return decomposed in a single-index model?",
                "a": "Into systematic variance (from the common factor) plus idiosyncratic (specific) variance."
            },
            {
                "q": "What is one advantage of a fundamental factor model over a macroeconomic factor model?",
                "a": "Fundamental factors can often explain a larger share of return variation and are directly observable at the security level."
            },
            {
                "q": "What is one disadvantage of a statistical factor model?",
                "a": "The derived statistical factors often lack a clear economic interpretation, making the model's outputs harder to explain."
            },
            {
                "q": "How would you use a multifactor model to estimate a portfolio's exposure to a particular risk factor?",
                "a": "Sum the (weighted) factor sensitivities (loadings) of each asset in the portfolio for that factor."
            },
            {
                "q": "Why might an investment manager prefer a multifactor model over a single-index model?",
                "a": "A multifactor model can capture multiple distinct sources of systematic risk, giving a richer description of return drivers."
            },
            {
                "q": "What data would you need to estimate the parameters of a macroeconomic factor model?",
                "a": "Historical time series of both the security returns and the chosen macroeconomic variables, estimating sensitivities via regression."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Asset pricing models",
        "description": "Introduces the Capital Asset Pricing Model (CAPM) — its assumptions, main results, uses, and limitations.",
        "cards": [
            {
                "q": "What is the Capital Asset Pricing Model (CAPM) used for?",
                "a": "To determine the expected/required return on an asset, given its systematic risk (beta) relative to the market portfolio."
            },
            {
                "q": "What is the CAPM formula for expected return?",
                "a": "$E[R_i] = R_f + \\beta_i\\,(E[R_m]-R_f)$"
            },
            {
                "q": "What does beta ($\\beta_i$) measure in the CAPM?",
                "a": "The sensitivity of an asset's excess return to the excess return of the market portfolio."
            },
            {
                "q": "Name one key assumption of the basic CAPM.",
                "a": "All investors have homogeneous expectations about returns, risk and correlations; investors can borrow/lend unlimited amounts at a risk-free rate."
            },
            {
                "q": "What is the 'market portfolio' in CAPM?",
                "a": "A portfolio containing all risky assets in the market, weighted by their market values."
            },
            {
                "q": "What is the 'security market line' (SML)?",
                "a": "A graphical representation of the CAPM, plotting expected return against beta — all correctly priced assets should lie on this line."
            },
            {
                "q": "What does it mean for an asset to plot above the security market line?",
                "a": "It's offering a higher expected return than CAPM predicts for its level of systematic risk — it appears undervalued."
            },
            {
                "q": "Give one limitation of the basic CAPM.",
                "a": "Its assumptions are unrealistic, and empirical tests often find beta alone doesn't fully explain observed returns."
            },
            {
                "q": "How have researchers tried to extend/develop CAPM to address its limitations?",
                "a": "By relaxing assumptions, or developing multifactor extensions like the Arbitrage Pricing Theory (APT)."
            },
            {
                "q": "What is a major issue in estimating parameters for CAPM in practice?",
                "a": "Identifying and measuring the true 'market portfolio', and estimating beta reliably from limited historical data."
            },
            {
                "q": "According to CAPM, should investors be compensated for holding idiosyncratic (diversifiable) risk?",
                "a": "No — only systematic risk (beta) is rewarded, since idiosyncratic risk can be diversified away at no cost."
            },
            {
                "q": "What is the risk-free rate's role in the CAPM formula?",
                "a": "It represents the baseline return available with no risk, against which the market risk premium (scaled by beta) is added."
            },
            {
                "q": "If an asset has a beta of zero, what does CAPM predict its expected return should be?",
                "a": "Equal to the risk-free rate, since it has no systematic risk exposure."
            },
            {
                "q": "If an asset has a beta greater than 1, what does that imply?",
                "a": "The asset's returns are more volatile than (amplify) the market's returns — more systematic risk than the market portfolio."
            },
            {
                "q": "How is beta typically estimated in practice?",
                "a": "By regressing an asset's historical excess returns against the market portfolio's historical excess returns; the slope is the estimated beta."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Brownian motion and martingales",
        "description": "Introduces standard Brownian motion (the Wiener process) and its defining properties, plus the concept of a martingale — foundations for modelling security prices continuously through time.",
        "cards": [
            {
                "q": "What are the defining properties of standard Brownian motion $W_t$?",
                "a": "$W_0 = 0$; independent increments; increments $W_t - W_s \\sim N(0, t-s)$ for $t>s$; and continuous paths."
            },
            {
                "q": "What is the distribution of $W_t$ for a standard Brownian motion?",
                "a": "$W_t \\sim N(0, t)$"
            },
            {
                "q": "What does it mean for Brownian motion to have 'independent increments'?",
                "a": "The change in the process over any time interval is independent of the change over any other non-overlapping time interval."
            },
            {
                "q": "Why are the paths of Brownian motion described as continuous but 'nowhere differentiable'?",
                "a": "The process moves continuously (no jumps) but is so erratic at every point that it has no well-defined instantaneous slope."
            },
            {
                "q": "What is a 'martingale'?",
                "a": "A stochastic process where the expected future value, given all information up to now, equals the current value: $E[X_t \\mid \\mathcal{F}_s] = X_s$ for $t>s$."
            },
            {
                "q": "Is standard Brownian motion a martingale?",
                "a": "Yes — its expected future value, given current information, equals its current value (zero drift)."
            },
            {
                "q": "What role does the martingale property play in 'fair game' pricing intuition?",
                "a": "A martingale reflects no predictable drift, consistent with discounted asset prices not being systematically predictable under the risk-neutral measure."
            },
            {
                "q": "What is meant by a 'filtration' $\\mathcal{F}_t$ in this context?",
                "a": "The information available up to time $t$, representing the history of the process observed so far."
            },
            {
                "q": "What is the variance of the increment $W_t - W_s$ for standard Brownian motion?",
                "a": "$t - s$"
            },
            {
                "q": "How does Brownian motion relate to a random walk?",
                "a": "Brownian motion is the limit of a discrete-time random walk as time steps become infinitesimally small and numerous, appropriately scaled."
            },
            {
                "q": "What is a key reason Brownian motion is used to model asset price randomness?",
                "a": "Its independent, normally-distributed increments provide a tractable way to model continuous, unpredictable price movements."
            },
            {
                "q": "Give one property that would disqualify a process from being a martingale.",
                "a": "Having a non-zero expected drift given current information, i.e. $E[X_t \\mid \\mathcal{F}_s] \\neq X_s$."
            },
            {
                "q": "What does 'quadratic variation' of Brownian motion over $[0,t]$ equal?",
                "a": "$t$ — a distinctive feature exploited in stochastic calculus (e.g. Ito's Lemma)."
            },
            {
                "q": "Why can't standard calculus techniques be applied directly to functions of Brownian motion?",
                "a": "Because Brownian motion is nowhere differentiable and has non-zero quadratic variation — stochastic (Ito) calculus is needed instead."
            },
            {
                "q": "What is the covariance $\\text{Cov}(W_s, W_t)$ for standard Brownian motion, with $s<t$?",
                "a": "$\\min(s,t) = s$"
            }
        ]
    },
    {
        "id": "m08",
        "title": "Stochastic calculus and Ito processes",
        "description": "Introduces stochastic differential equations, the Ito integral, Ito's Lemma, and key example processes — geometric Brownian motion and the Ornstein-Uhlenbeck process.",
        "cards": [
            {
                "q": "What is a 'stochastic differential equation' (SDE)?",
                "a": "An equation describing how a process evolves over time, involving a deterministic (drift) term and a random (diffusion) term driven by Brownian motion."
            },
            {
                "q": "What is the general form of an Ito process SDE?",
                "a": "$dX_t = \\mu(X_t,t)\\,dt + \\sigma(X_t,t)\\,dW_t$"
            },
            {
                "q": "What does the 'drift' term in an SDE represent?",
                "a": "The deterministic (expected, per unit time) rate of change of the process."
            },
            {
                "q": "What does the 'diffusion' term in an SDE represent?",
                "a": "The magnitude/scale of the random fluctuations driven by Brownian motion."
            },
            {
                "q": "What is Ito's Lemma used for?",
                "a": "Finding the SDE satisfied by a (twice-differentiable) function of an Ito process — the stochastic calculus analogue of the chain rule."
            },
            {
                "q": "What is the key extra term in Ito's Lemma compared with the ordinary chain rule?",
                "a": "A second-order term $\\frac{1}{2}\\frac{\\partial^2 f}{\\partial x^2}\\sigma^2\\,dt$, arising from the non-zero quadratic variation of Brownian motion."
            },
            {
                "q": "What is the SDE for geometric Brownian motion (GBM)?",
                "a": "$dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t$"
            },
            {
                "q": "Why is GBM commonly used to model security prices?",
                "a": "It ensures prices stay positive and gives log-normally distributed prices, broadly consistent with observed return behaviour."
            },
            {
                "q": "What is a 'mean-reverting' process?",
                "a": "A process whose drift pulls it back towards a long-run mean level whenever it deviates from that level."
            },
            {
                "q": "What is the SDE for the Ornstein-Uhlenbeck process?",
                "a": "$dX_t = \\alpha(\\mu - X_t)\\,dt + \\sigma\\,dW_t$, where the drift pulls $X_t$ back towards the long-run mean $\\mu$."
            },
            {
                "q": "What does the parameter $\\alpha$ represent in the Ornstein-Uhlenbeck process?",
                "a": "The speed of mean reversion — how quickly the process is pulled back towards its long-run mean."
            },
            {
                "q": "What is the 'Ito integral'?",
                "a": "A way of defining integrals with respect to Brownian motion (e.g. $\\int_0^t \\sigma_s\\,dW_s$), needed since Brownian motion isn't differentiable in the ordinary sense."
            },
            {
                "q": "Solve the GBM SDE to express $S_t$ in terms of $S_0$.",
                "a": "$S_t = S_0 \\exp\\left[\\left(\\mu - \\tfrac{1}{2}\\sigma^2\\right)t + \\sigma W_t\\right]$"
            },
            {
                "q": "Why does GBM's solution feature a $-\\frac{1}{2}\\sigma^2 t$ adjustment relative to the naive exponential of the drift?",
                "a": "It arises from applying Ito's Lemma to $\\ln S_t$, correcting for the extra second-order term in stochastic calculus."
            },
            {
                "q": "Why might a mean-reverting process (like Ornstein-Uhlenbeck) be more appropriate than GBM for modelling short-term interest rates?",
                "a": "Interest rates fluctuate around a long-run economic equilibrium rather than drifting indefinitely, which mean reversion captures but GBM does not."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Stochastic models of security prices",
        "description": "Focuses on the continuous-time log-normal model of security prices — its structure, implications, and the empirical evidence for and against it.",
        "cards": [
            {
                "q": "What does the continuous-time log-normal model assume about security prices?",
                "a": "That prices follow geometric Brownian motion, so log returns over any period are normally distributed."
            },
            {
                "q": "If $S_t$ follows the log-normal model, what is the distribution of $\\ln(S_t/S_0)$?",
                "a": "Normal, with mean $(\\mu - \\tfrac12\\sigma^2)t$ and variance $\\sigma^2 t$."
            },
            {
                "q": "What does the log-normal model imply about the possible range of future prices?",
                "a": "Prices remain strictly positive (can never go negative), consistent with limited liability of shares."
            },
            {
                "q": "Give one piece of empirical evidence against the log-normal model.",
                "a": "Observed asset returns often show 'fat tails' (more extreme moves than a normal distribution predicts) and negative skewness."
            },
            {
                "q": "What is 'volatility clustering,' and how does it challenge the log-normal model?",
                "a": "Periods of high volatility tend to cluster together; the simple log-normal model assumes constant volatility, which doesn't capture this."
            },
            {
                "q": "What does 'skewness' in observed return distributions typically show, compared to the log-normal model assumption?",
                "a": "Many equity return distributions show negative skewness (large downward moves more common/severe), unlike the symmetric assumption."
            },
            {
                "q": "What is 'kurtosis,' and why is it relevant when testing the log-normal model?",
                "a": "A measure of the 'fatness' of a distribution's tails; observed returns typically have higher kurtosis than the normal distribution predicts."
            },
            {
                "q": "Why might the log-normal model still be widely used despite its known limitations?",
                "a": "It is mathematically tractable, provides a reasonable first approximation, and underlies foundational results such as Black-Scholes."
            },
            {
                "q": "What alternative models have been proposed to address fat tails not captured by the log-normal model?",
                "a": "Models incorporating jumps (jump-diffusion models) or stochastic volatility."
            },
            {
                "q": "How would you test whether historical returns are consistent with the log-normal model?",
                "a": "Statistically test whether log returns are normally distributed (e.g. skewness/kurtosis tests), and check for constant volatility over time."
            },
            {
                "q": "What does the log-normal model assume about the independence of returns over non-overlapping periods?",
                "a": "That they are independent (and identically distributed), consistent with the independent increments of the underlying Brownian motion."
            },
            {
                "q": "Why is independence of returns a strong (and often violated) assumption?",
                "a": "Empirical evidence shows some serial correlation and volatility clustering in real markets."
            },
            {
                "q": "What would 'excess kurtosis' of zero indicate about a return distribution?",
                "a": "The distribution's tails match those of a normal distribution."
            },
            {
                "q": "Why is the log-normal model considered a 'continuous-time' model?",
                "a": "Prices are modelled as evolving continuously through time (via a diffusion process), rather than only at discrete intervals."
            },
            {
                "q": "What is one practical consequence of using the log-normal model when real markets exhibit fat tails?",
                "a": "Risk measures (e.g. VaR) based on the log-normal assumption can understate the true probability/severity of extreme losses."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Characteristics of derivative securities",
        "description": "Covers the basic building blocks of derivatives pricing — arbitrage, complete markets, forward contracts, and model-independent bounds and relationships for options.",
        "cards": [
            {
                "q": "What is 'arbitrage'?",
                "a": "A trading strategy that guarantees a profit with no risk and no net initial investment."
            },
            {
                "q": "What is a 'complete market'?",
                "a": "A market in which every contingent claim (payoff pattern) can be replicated using a combination of the available traded assets."
            },
            {
                "q": "How is the fair (no-arbitrage) forward price of an asset with no income derived?",
                "a": "$F_0 = S_0\\,e^{rT}$, the spot price accumulated at the risk-free rate to the forward's maturity."
            },
            {
                "q": "How does the forward price formula change if the underlying asset pays a continuous dividend yield $q$?",
                "a": "$F_0 = S_0\\,e^{(r-q)T}$"
            },
            {
                "q": "What are the general upper and lower bounds for a European call option's price (no dividends)?",
                "a": "Lower bound: $\\max(S_0 - Ke^{-rT}, 0)$; upper bound: $S_0$."
            },
            {
                "q": "What is 'put-call parity' for European options (no dividends)?",
                "a": "$C - P = S_0 - Ke^{-rT}$, linking the prices of a call and put with the same strike and maturity."
            },
            {
                "q": "Why does put-call parity hold without needing any specific pricing model?",
                "a": "It follows purely from a no-arbitrage argument comparing two portfolios with identical payoffs at maturity."
            },
            {
                "q": "What is the key difference between a European and an American option?",
                "a": "A European option can only be exercised at maturity; an American option can be exercised at any time up to and including maturity."
            },
            {
                "q": "Why is it (generally) never optimal to exercise an American call option early on a non-dividend-paying stock?",
                "a": "Holding the option (with its time value and deferred payment of the strike) is worth at least as much as exercising early."
            },
            {
                "q": "How does an upper bound for an American put option compare with a European put?",
                "a": "An American put's upper bound is the strike price $K$ itself, since it can be exercised early."
            },
            {
                "q": "What does 'factors that affect option prices' typically include?",
                "a": "The underlying asset price, strike price, time to maturity, volatility, risk-free interest rate, and any dividends."
            },
            {
                "q": "How does higher volatility of the underlying asset affect both call and put option prices, all else equal?",
                "a": "It increases both, since greater uncertainty increases the value of the option's asymmetric (limited downside) payoff."
            },
            {
                "q": "What is meant by 'long' and 'short' positions in a forward contract?",
                "a": "The long position agrees to buy the underlying at the forward price at maturity; the short position agrees to sell."
            },
            {
                "q": "What is the payoff to the holder of a European call option at maturity?",
                "a": "$\\max(S_T - K, 0)$"
            },
            {
                "q": "What is the payoff to the holder of a European put option at maturity?",
                "a": "$\\max(K - S_T, 0)$"
            }
        ]
    },
    {
        "id": "m11",
        "title": "The Greeks",
        "description": "Introduces the standard sensitivity measures ('the Greeks') describing how an option's price changes with respect to underlying market variables.",
        "cards": [
            {
                "q": "What does 'Delta' ($\\Delta$) measure?",
                "a": "The sensitivity of an option's price to a small change in the price of the underlying asset: $\\Delta = \\frac{\\partial V}{\\partial S}$"
            },
            {
                "q": "What does 'Gamma' ($\\Gamma$) measure?",
                "a": "The rate of change of Delta with respect to the underlying asset price: $\\Gamma = \\frac{\\partial^2 V}{\\partial S^2}$"
            },
            {
                "q": "What does 'Vega' measure?",
                "a": "The sensitivity of an option's price to a small change in the volatility of the underlying asset."
            },
            {
                "q": "What does 'Theta' ($\\Theta$) measure?",
                "a": "The sensitivity of an option's price to the passage of time (time decay), holding other factors constant."
            },
            {
                "q": "What does 'Rho' ($\\rho$) measure?",
                "a": "The sensitivity of an option's price to a small change in the risk-free interest rate."
            },
            {
                "q": "What is the range of Delta for a European call option?",
                "a": "Between 0 and 1."
            },
            {
                "q": "What is the range of Delta for a European put option?",
                "a": "Between -1 and 0."
            },
            {
                "q": "Why is Theta typically negative for a long option position?",
                "a": "As time passes, there's less time for the underlying to move favourably, so the option's time value erodes."
            },
            {
                "q": "What does it mean to 'delta-hedge' a derivative position?",
                "a": "Holding an offsetting position in the underlying asset (equal to Delta) so the combined portfolio is insensitive to small moves in the underlying."
            },
            {
                "q": "Why does a delta-hedged position need to be rebalanced over time?",
                "a": "Delta itself changes as the underlying price and time to maturity change (this rate is Gamma), needing periodic adjustment."
            },
            {
                "q": "Why is Gamma particularly important for assessing hedging risk?",
                "a": "High Gamma means Delta can change rapidly, so a delta-hedge can quickly become outdated, requiring more frequent rebalancing."
            },
            {
                "q": "For a European call option (no dividends), how does Delta relate to the risk-neutral probability the option finishes in the money?",
                "a": "They're closely related — in the Black-Scholes model, call Delta equals $N(d_1)$."
            },
            {
                "q": "How does an option's Vega typically behave as the option approaches maturity?",
                "a": "It tends to decrease towards zero — there's less time remaining for volatility to have an effect."
            },
            {
                "q": "What second-order derivative measures the sensitivity of Vega to changes in volatility?",
                "a": "'Vomma' (or volga) — a more advanced Greek beyond the basic set."
            },
            {
                "q": "Why might a trader want a portfolio that is both 'delta-neutral' and 'gamma-neutral'?",
                "a": "To be protected against both small and larger moves in the underlying price, reducing the need for frequent rebalancing."
            }
        ]
    },
    {
        "id": "m12",
        "title": "The binomial model",
        "description": "Introduces binomial trees for option pricing, the risk-neutral probability measure, and the equivalent state-price deflator approach.",
        "cards": [
            {
                "q": "What is the basic structure of a one-step binomial model?",
                "a": "The underlying asset price can move to one of two possible values (up or down) over one time step, from a known starting price."
            },
            {
                "q": "What is the 'risk-neutral probability' in a binomial model?",
                "a": "The (hypothetical) probability of an up-move under which the discounted expected value of the asset (and any derivative) equals its current price."
            },
            {
                "q": "How is the risk-neutral up-probability $p$ derived in a simple one-step binomial model?",
                "a": "$p = \\frac{e^{r\\Delta t} - d}{u - d}$, from the no-arbitrage condition that the stock's expected return under $p$ equals the risk-free rate."
            },
            {
                "q": "How is a derivative's price found using risk-neutral valuation in the binomial model?",
                "a": "Discount the expected payoff of the derivative, calculated using the risk-neutral probabilities, at the risk-free rate."
            },
            {
                "q": "Why is the risk-neutral measure described as 'a computational tool' rather than the real-world probability?",
                "a": "It doesn't represent investors' actual beliefs — it's a mathematical device making discounted prices martingales, simplifying valuation."
            },
            {
                "q": "What is the key advantage of using risk-neutral valuation?",
                "a": "It allows derivatives to be priced without needing to know investors' risk preferences or the real-world probability of price movements."
            },
            {
                "q": "How does a multi-step binomial 'lattice' extend the one-step model?",
                "a": "By chaining together many one-step up/down moves over successive time intervals, building a tree of possible price paths to expiry."
            },
            {
                "q": "What is a 'state-price deflator'?",
                "a": "A stochastic process used to convert real-world expected payoffs into current prices by discounting with state-dependent factors."
            },
            {
                "q": "How does the state-price deflator approach relate to the risk-neutral approach?",
                "a": "They are equivalent — the deflator re-weights real-world probabilities in exactly the way the risk-neutral measure does, giving the same prices."
            },
            {
                "q": "What no-arbitrage condition must the up and down factors ($u, d$) satisfy relative to the risk-free rate?",
                "a": "$d < e^{r\\Delta t} < u$, for the risk-neutral probability to lie strictly between 0 and 1."
            },
            {
                "q": "How would you value an American option within a binomial tree?",
                "a": "Work backwards through the tree, at each node taking the greater of the discounted continuation value and the immediate exercise value."
            },
            {
                "q": "Why does increasing the number of steps in a binomial tree improve pricing accuracy?",
                "a": "It better approximates continuous-time price movements, converging towards continuous-time models like Black-Scholes."
            },
            {
                "q": "What determines a security's price under the state-price deflator approach?",
                "a": "The expected value, under the real-world measure, of the state-price deflator multiplied by the security's future payoff."
            },
            {
                "q": "How is delta hedging naturally derived from a one-step binomial model?",
                "a": "By solving for the number of shares (combined with risk-free borrowing/lending) needed to exactly replicate the derivative's payoff in both states."
            },
            {
                "q": "Why is the binomial model considered pedagogically useful, despite being an approximation?",
                "a": "It illustrates no-arbitrage pricing, risk-neutral valuation and replication in a simple, discrete setting that generalises to continuous-time models."
            }
        ]
    },
    {
        "id": "m13",
        "title": "The Black-Scholes option pricing formula",
        "description": "Covers the Black-Scholes partial differential equation and formula, the martingale (risk-neutral) approach to pricing, and the model's underlying assumptions.",
        "cards": [
            {
                "q": "What is the Black-Scholes formula for a European call option price?",
                "a": "$C = S_0 N(d_1) - Ke^{-rT}N(d_2)$, where $N(\\cdot)$ is the standard normal CDF."
            },
            {
                "q": "What are $d_1$ and $d_2$ in the Black-Scholes formula?",
                "a": "$d_1 = \\frac{\\ln(S_0/K) + (r+\\tfrac12\\sigma^2)T}{\\sigma\\sqrt{T}}$, and $d_2 = d_1 - \\sigma\\sqrt{T}$"
            },
            {
                "q": "What is the Black-Scholes partial differential equation?",
                "a": "$\\frac{\\partial V}{\\partial t} + rS\\frac{\\partial V}{\\partial S} + \\tfrac12\\sigma^2 S^2\\frac{\\partial^2 V}{\\partial S^2} = rV$"
            },
            {
                "q": "What is the 'Garman-Kohlhagen' form of the Black-Scholes model used for?",
                "a": "Pricing options on foreign currencies, adjusting for a continuous dividend-like yield equal to the foreign risk-free rate."
            },
            {
                "q": "What is the 'martingale approach' to derivative pricing?",
                "a": "Pricing a derivative as the discounted expected payoff under the risk-neutral measure, since discounted asset prices are martingales under that measure."
            },
            {
                "q": "List two key assumptions underlying the basic Black-Scholes model.",
                "a": "Constant volatility and constant risk-free rate (also: no dividends, frictionless markets, continuous trading, log-normal price dynamics)."
            },
            {
                "q": "Why is the assumption of constant volatility considered unrealistic in practice?",
                "a": "Observed volatility varies over time and differs by strike/maturity (the volatility smile/skew), unlike the model's single constant parameter."
            },
            {
                "q": "How would you use the Black-Scholes model to hedge a written call option?",
                "a": "Continuously hold Delta shares of the underlying asset (delta-hedging), financed at the risk-free rate, rebalancing as Delta changes."
            },
            {
                "q": "What does it mean for a market to be 'frictionless' in the Black-Scholes assumptions?",
                "a": "No transaction costs, no taxes, and assets are infinitely divisible and can be traded continuously."
            },
            {
                "q": "How does the Black-Scholes formula for a put option relate to the call formula?",
                "a": "Via put-call parity: $P = Ke^{-rT}N(-d_2) - S_0N(-d_1)$"
            },
            {
                "q": "What does the martingale representation theorem provide, conceptually?",
                "a": "A justification that, under the risk-neutral measure, any attainable payoff can be replicated by a self-financing trading strategy."
            },
            {
                "q": "What happens to a European call's Black-Scholes price as time to maturity $T$ approaches zero?",
                "a": "It converges to the option's intrinsic value, $\\max(S_0 - K, 0)$."
            },
            {
                "q": "How does the Black-Scholes formula need to be adjusted for an underlying paying a continuous dividend yield $q$?",
                "a": "Replace $S_0$ with $S_0e^{-qT}$ in the formula (and correspondingly in $d_1$)."
            },
            {
                "q": "Why is validity of the Black-Scholes assumptions important to consider when applying the model in practice?",
                "a": "If assumptions like constant volatility or frictionless markets are significantly violated, the model's prices/hedges can be materially inaccurate."
            },
            {
                "q": "What connects the Black-Scholes PDE approach and the martingale (risk-neutral expectation) approach?",
                "a": "The Feynman-Kac theorem — the PDE's solution can be represented as a discounted risk-neutral expectation."
            }
        ]
    },
    {
        "id": "m14",
        "title": "The 5-step method",
        "description": "Introduces a systematic risk-neutral valuation procedure — the '5-step method' — for pricing derivatives using a general change-of-measure/numeraire approach.",
        "cards": [
            {
                "q": "What is the general purpose of the '5-step method'?",
                "a": "To provide a systematic procedure for pricing a derivative by risk-neutral valuation, choosing a convenient numeraire and change of measure."
            },
            {
                "q": "What is a 'numeraire'?",
                "a": "A reference asset used to express the prices of all other assets in relative terms — chosen so the pricing calculation becomes simpler."
            },
            {
                "q": "Why might a different numeraire (rather than the cash/money-market account) sometimes simplify a pricing problem?",
                "a": "Expressing payoffs relative to a well-chosen numeraire can turn a complex expectation into a much simpler one."
            },
            {
                "q": "What is the first general step in the 5-step method (in broad terms)?",
                "a": "Express the derivative's payoff in terms of the chosen numeraire."
            },
            {
                "q": "What does 'changing measure' (via Girsanov's theorem, conceptually) achieve in this method?",
                "a": "It adjusts the probability measure so that asset prices expressed in the new numeraire become martingales."
            },
            {
                "q": "Why is the risk-neutral measure associated with the money-market account often the most common numeraire choice?",
                "a": "It's a natural, intuitive default, directly giving the standard discounted-expected-payoff pricing formula."
            },
            {
                "q": "What must be true of the process for an asset price expressed in units of the chosen numeraire?",
                "a": "It must be a martingale, under the corresponding measure."
            },
            {
                "q": "How does the 5-step method relate to the standard risk-neutral pricing formula used with the money-market account?",
                "a": "The standard formula is a special case of the 5-step method, using the money-market account as the numeraire."
            },
            {
                "q": "Give an example of an alternative numeraire that might be useful for pricing an exchange option.",
                "a": "Using one of the two underlying assets itself as the numeraire, rather than cash."
            },
            {
                "q": "What is the final step of the 5-step method typically concerned with?",
                "a": "Evaluating the resulting expectation (often reducing to a standard distributional calculation) to obtain the price."
            },
            {
                "q": "Why can choosing a well-suited numeraire reduce the dimensionality or complexity of a pricing problem?",
                "a": "It can eliminate one source of randomness, simplifying the remaining expectation."
            },
            {
                "q": "What mathematical tool underlies the change of numeraire/measure technique?",
                "a": "The Radon-Nikodym derivative, which relates probabilities under one measure to probabilities under another."
            },
            {
                "q": "Why is the 5-step method described as a general procedure rather than a single formula?",
                "a": "It's a systematic approach applicable to a wide range of payoffs and numeraire choices, not a single closed-form result like Black-Scholes."
            },
            {
                "q": "How does the 5-step method help when a derivative's payoff depends on more than one underlying asset?",
                "a": "By choosing a numeraire that simplifies the relationship between the assets, reducing a multi-asset problem to a simpler one."
            },
            {
                "q": "Why is understanding the 5-step method valuable beyond just memorising the Black-Scholes formula?",
                "a": "It provides a flexible, general framework applicable to a much wider range of derivative pricing problems."
            }
        ]
    },
    {
        "id": "m15",
        "title": "The term structure of interest rates",
        "description": "Covers models describing how interest rates vary by term — desirable characteristics, risk-neutral bond pricing, and the Vasicek, Cox-Ingersoll-Ross and Hull-White models.",
        "cards": [
            {
                "q": "What does a 'model of the term structure of interest rates' attempt to describe?",
                "a": "How interest rates (or bond prices/yields) of different maturities are related and evolve over time, typically via a short-rate model."
            },
            {
                "q": "Give one desirable characteristic of a good term structure model.",
                "a": "Non-negative interest rates, mean reversion, and analytical tractability for bond/derivative pricing."
            },
            {
                "q": "What is the 'risk-neutral approach' to pricing a zero-coupon bond?",
                "a": "The bond price equals the risk-neutral expectation of the discounted (at the stochastic short rate) payoff of $1$ at maturity."
            },
            {
                "q": "What is the SDE for the short rate under the Vasicek model?",
                "a": "$dr_t = a(b - r_t)\\,dt + \\sigma\\,dW_t$ — an Ornstein-Uhlenbeck (mean-reverting) process."
            },
            {
                "q": "What is a key limitation of the Vasicek model?",
                "a": "It allows the short rate to become negative with positive probability."
            },
            {
                "q": "What is the SDE for the short rate under the Cox-Ingersoll-Ross (CIR) model?",
                "a": "$dr_t = a(b - r_t)\\,dt + \\sigma\\sqrt{r_t}\\,dW_t$ — mean-reverting, with volatility proportional to $\\sqrt{r_t}$."
            },
            {
                "q": "How does the CIR model address the Vasicek model's main limitation?",
                "a": "The $\\sqrt{r_t}$ term means volatility shrinks to zero as rates approach zero, keeping rates non-negative under suitable conditions."
            },
            {
                "q": "What distinguishes the Hull-White model from the Vasicek model?",
                "a": "Hull-White allows the mean-reversion level (and potentially other parameters) to be time-dependent, exactly fitting the current yield curve."
            },
            {
                "q": "Why is exactly fitting the current yield curve (as Hull-White allows) often desirable in practice?",
                "a": "It ensures the model's bond prices match observed market prices today, important for consistent pricing and hedging."
            },
            {
                "q": "What is a 'one-factor' model of the term structure?",
                "a": "A model where all interest rates of different maturities are driven by a single source of randomness (typically the short rate)."
            },
            {
                "q": "What is a limitation of one-factor short-rate models generally?",
                "a": "They imply all points on the yield curve are perfectly (or near-perfectly) correlated, unlike real yield curve movements."
            },
            {
                "q": "How would you use a term structure model to price an interest-rate derivative?",
                "a": "Use the risk-neutral dynamics of the short rate to compute the discounted expected payoff of the derivative."
            },
            {
                "q": "What are 'principal concepts and terms' typically covered when introducing term structure models?",
                "a": "Concepts such as the short rate, the yield curve, forward rates, and the risk-neutral valuation framework linking them."
            },
            {
                "q": "Why might the Vasicek model still be used in practice despite allowing negative rates?",
                "a": "It's analytically tractable (closed-form bond prices), and negative rates became less of a concern once real rates occasionally went negative."
            },
            {
                "q": "What role does mean reversion play in all three models (Vasicek, CIR, Hull-White)?",
                "a": "It reflects the empirical observation that rates fluctuate around a long-run level rather than drifting off indefinitely."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Credit risk",
        "description": "Introduces simple models for credit risk — credit events, recovery rates, structural models (like Merton's), and reduced-form/intensity-based models.",
        "cards": [
            {
                "q": "What is a 'credit event'?",
                "a": "An event (default, bankruptcy, failure to pay) that triggers a loss or change in status for a debt obligation."
            },
            {
                "q": "What is the 'recovery rate'?",
                "a": "The proportion of a debt's face value that is recovered by creditors following a credit event (default)."
            },
            {
                "q": "What are the two broad approaches to modelling credit risk?",
                "a": "Structural models (based on the firm's asset value) and reduced-form (intensity-based) models (based on a statistical default intensity)."
            },
            {
                "q": "What is the core idea of the Merton (structural) model?",
                "a": "A firm defaults if the value of its assets falls below the face value of its debt at maturity; equity is modelled as a call option on the firm's assets."
            },
            {
                "q": "In the Merton model, what financial instrument is a firm's equity analogous to?",
                "a": "A European call option on the firm's assets, with strike price equal to the face value of the debt."
            },
            {
                "q": "What does the Merton model imply about the firm's debt value?",
                "a": "It's equivalent to a risk-free bond minus a put option on the firm's assets."
            },
            {
                "q": "What is a key input needed to apply the Merton model?",
                "a": "The current value and volatility of the firm's assets (often estimated indirectly from observable equity value and volatility)."
            },
            {
                "q": "What is a 'reduced-form' (intensity-based) credit risk model?",
                "a": "A model where default occurs according to a statistical hazard rate/intensity process, without explicitly modelling the firm's asset value."
            },
            {
                "q": "What is the 'two-state model' for credit rating with constant transition intensity?",
                "a": "A simple model where a bond/issuer is in one of two states (non-default or default), moving to default at a constant intensity $\\lambda$."
            },
            {
                "q": "Under the two-state model with constant intensity $\\lambda$, what is the probability of surviving (no default) to time $t$?",
                "a": "$e^{-\\lambda t}$"
            },
            {
                "q": "What is one advantage of reduced-form models over structural models?",
                "a": "They don't require modelling the firm's underlying asset value, and can be calibrated directly to observed credit spreads/bond prices."
            },
            {
                "q": "What is one advantage of structural models over reduced-form models?",
                "a": "They provide an economic explanation for why default occurs, giving more intuitive insight into default drivers."
            },
            {
                "q": "How does a higher recovery rate affect the expected loss from a credit event, all else equal?",
                "a": "It reduces the expected loss, since a larger fraction of the debt's value is recovered."
            },
            {
                "q": "Why might credit spreads on corporate bonds be higher than what expected default losses alone would suggest?",
                "a": "Additional compensation for illiquidity, uncertainty in recovery rates, and risk premia demanded by investors."
            },
            {
                "q": "How could the two-state constant-intensity model be extended to reflect changing credit quality over time?",
                "a": "By using a multi-state model with several credit rating states and transition intensities between them."
            }
        ]
    },
    {
        "id": "m17",
        "title": "Ruin theory",
        "description": "Models an insurer's aggregate claims and cashflow process to assess the probability of ruin — using the Poisson process, the adjustment coefficient, Lundberg's inequality, and the effect of reinsurance.",
        "cards": [
            {
                "q": "What does 'ruin' mean in ruin theory?",
                "a": "The insurer's surplus (assets minus liabilities, broadly) falling below zero at some point."
            },
            {
                "q": "What is the 'aggregate claim process'?",
                "a": "The cumulative total of claim amounts paid by an insurer up to time $t$, as a stochastic process."
            },
            {
                "q": "What is a Poisson process used to model in this context?",
                "a": "The number of claim events occurring over time, assuming events occur independently at a constant average rate."
            },
            {
                "q": "What is the distribution of the number of events of a Poisson process with rate $\\lambda$ in an interval of length $t$?",
                "a": "Poisson with mean $\\lambda t$."
            },
            {
                "q": "What is the distribution of the waiting time between events in a Poisson process?",
                "a": "Exponential with rate $\\lambda$ (mean $1/\\lambda$)."
            },
            {
                "q": "What is a 'compound Poisson process,' as used to model aggregate claims?",
                "a": "A process where the number of claims follows a Poisson process, and each claim has a random size, giving a total that's the sum of a Poisson-distributed number of claim sizes."
            },
            {
                "q": "What is the 'probability of ruin'?",
                "a": "The probability that the insurer's surplus falls below zero at some point, either within a finite time horizon or ever (infinite time)."
            },
            {
                "q": "How does the probability of ruin in finite time relate to the probability of ruin in infinite time?",
                "a": "The infinite-time ruin probability is always at least as large as the probability within any finite time horizon."
            },
            {
                "q": "What is the 'adjustment coefficient' (Lundberg's coefficient)?",
                "a": "A parameter $R>0$ appearing in bounds/approximations for the probability of ruin, determined by the premium loading and claim size distribution."
            },
            {
                "q": "What does Lundberg's inequality state?",
                "a": "The probability of ultimate ruin is bounded above by $e^{-Ru}$, where $u$ is the initial surplus and $R$ is the adjustment coefficient."
            },
            {
                "q": "How does increasing initial surplus $u$ affect the (Lundberg) bound on the probability of ruin?",
                "a": "It decreases the bound, since $e^{-Ru}$ falls as $u$ increases."
            },
            {
                "q": "How does proportional reinsurance typically affect the adjustment coefficient (and hence the probability of ruin)?",
                "a": "It can increase the adjustment coefficient (reducing ruin probability) by reducing retained claims variability, though it also reduces retained premium income."
            },
            {
                "q": "How can the probability of ruin be estimated when no closed-form solution is available?",
                "a": "By simulation — repeatedly simulating the claims and premium process and estimating the proportion of paths resulting in ruin."
            },
            {
                "q": "What is the effect of excess of loss reinsurance on an insurer's aggregate claims variability?",
                "a": "It caps exposure to very large individual claims, reducing the variability (and tail risk) of retained aggregate claims."
            },
            {
                "q": "Why might an insurer choose a level of reinsurance that maximises the adjustment coefficient?",
                "a": "A higher adjustment coefficient corresponds to a lower bound on the probability of ruin, a natural way to manage solvency risk against reinsurance cost."
            }
        ]
    },
    {
        "id": "m18",
        "title": "Run-off triangles",
        "description": "Covers actuarial reserving techniques for estimating outstanding general insurance claims — the chain ladder method, average cost per claim, and the Bornhuetter-Ferguson method.",
        "cards": [
            {
                "q": "What is a 'run-off triangle' (or 'delay triangle')?",
                "a": "A table showing claims data by origin year and development year, used to project how claims for each origin year will develop to their ultimate value."
            },
            {
                "q": "What is a 'development factor' in the chain ladder method?",
                "a": "A ratio, estimated from historical data, used to project cumulative claims from one development period to the next."
            },
            {
                "q": "How is a development factor typically estimated from a run-off triangle?",
                "a": "As the ratio of the sum of cumulative claims at one development year to the sum at the previous development year, across origin years with data for both."
            },
            {
                "q": "What is the basic chain ladder method used for?",
                "a": "Projecting the future development of a run-off triangle, using development factors, to estimate ultimate claims for each origin year."
            },
            {
                "q": "What key assumption underlies the basic chain ladder method?",
                "a": "That development patterns are consistent across all origin years."
            },
            {
                "q": "How can the basic chain ladder method be adjusted to allow explicitly for inflation?",
                "a": "By separating out an assumed inflation index from the development factors, so projected future claims incorporate an explicit inflation assumption."
            },
            {
                "q": "What is the 'average cost per claim' method for estimating outstanding claims?",
                "a": "Estimating outstanding claims as the projected number of outstanding claims multiplied by an assumed average cost per claim."
            },
            {
                "q": "What is the 'Bornhuetter-Ferguson' method used for?",
                "a": "Estimating outstanding claims by combining a prior estimate of ultimate claims with the chain-ladder-implied proportion of claims still to emerge."
            },
            {
                "q": "How does the Bornhuetter-Ferguson method differ in philosophy from the pure chain ladder method?",
                "a": "It blends an independent prior view of ultimate claims with the observed data pattern, rather than relying entirely on the chain ladder projection."
            },
            {
                "q": "Why might Bornhuetter-Ferguson be preferred over pure chain ladder for the most recent origin year?",
                "a": "The most recent year has little data, so a pure chain ladder projection can be very sensitive to random fluctuation — blending stabilises the estimate."
            },
            {
                "q": "What is a 'statistical model' underlying run-off triangle methods generally used for?",
                "a": "To provide a probabilistic framework justifying and generalising the deterministic chain-ladder-type calculations, and allowing uncertainty to be quantified."
            },
            {
                "q": "Name one assumption underlying the basic chain ladder method (beyond consistent development patterns).",
                "a": "That there are no changes in the claims process (legal environment, claims handling) over time that would invalidate using historical patterns."
            },
            {
                "q": "How would a change in claims handling processes partway through the historical data affect chain ladder projections?",
                "a": "It could distort the development pattern, potentially requiring an adjustment or a different approach for affected years."
            },
            {
                "q": "What is 'delay' (development) year, in the context of a run-off triangle?",
                "a": "The number of years (or periods) since the origin (accident/underwriting) year, tracking how claims for that origin year have developed."
            },
            {
                "q": "Why is estimating outstanding claims important for a general insurer?",
                "a": "To hold adequate reserves for claims that have occurred but are not yet fully paid/settled, ensuring it can meet future obligations."
            }
        ]
    }
],
};

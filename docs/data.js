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
  CS1: [
    {
        "id": "m01",
        "title": "Data analysis",
        "description": "Covers the purpose of data analysis (descriptive, inferential, predictive), sources and characteristics of data, reproducible research, exploratory data analysis, and correlation/PCA techniques.",
        "cards": [
            {
                "q": "What are the three main aims of a data analysis?",
                "a": "Descriptive (summarising data), inferential (drawing conclusions about a population), and predictive (forecasting future/unseen outcomes)."
            },
            {
                "q": "What is 'reproducible research'?",
                "a": "Research where the analysis can be independently repeated and verified by others, given the same data and code/methods."
            },
            {
                "q": "Name one element required to ensure a data analysis is reproducible.",
                "a": "Documented, shareable code/scripts, and access to the same data and software versions."
            },
            {
                "q": "What does 'Pearson's correlation coefficient' measure?",
                "a": "The strength and direction of the linear relationship between two variables."
            },
            {
                "q": "What does 'Spearman's rank correlation' measure, and how does it differ from Pearson's?",
                "a": "The strength of a monotonic (not necessarily linear) relationship, calculated using the ranks of the data rather than raw values."
            },
            {
                "q": "What does 'Kendall's tau' measure?",
                "a": "The association between two variables based on the number of concordant versus discordant pairs of observations."
            },
            {
                "q": "Why might Spearman's or Kendall's correlation be preferred over Pearson's for some data sets?",
                "a": "They don't assume a linear relationship and are less sensitive to outliers, since they use ranks rather than raw values."
            },
            {
                "q": "What is 'principal components analysis' (PCA) used for?",
                "a": "Reducing the dimensionality of a complex data set by finding a smaller number of uncorrelated components that capture most of the variation."
            },
            {
                "q": "What are 'extremely large data sets' likely to present as a data source challenge?",
                "a": "Issues of storage, processing power, and potentially messier/less structured data requiring more preprocessing."
            },
            {
                "q": "Give one example of an appropriate data visualisation for exploring a single continuous variable.",
                "a": "A histogram or box plot."
            },
            {
                "q": "What summary statistics might you calculate as part of exploratory data analysis?",
                "a": "Measures of central tendency (mean, median) and spread (variance, standard deviation, interquartile range)."
            },
            {
                "q": "Why is exploratory data analysis typically performed before formal statistical modelling?",
                "a": "To understand the data's structure, spot anomalies/outliers, and inform appropriate modelling choices."
            },
            {
                "q": "What might cause you to question the reliability of a data source?",
                "a": "Inconsistent recording methods, missing data, known biases in collection, or an unclear/undocumented provenance."
            },
            {
                "q": "How can principal components analysis help before fitting a predictive model?",
                "a": "By reducing many correlated explanatory variables to a smaller set of uncorrelated components, simplifying the model and reducing overfitting risk."
            },
            {
                "q": "What is the difference between descriptive and inferential data analysis aims?",
                "a": "Descriptive analysis summarises the data itself; inferential analysis uses the data to draw conclusions about a broader population."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Probability distributions",
        "description": "Covers the standard discrete and continuous probability distributions used in actuarial work, their properties, and how to generate random samples from them.",
        "cards": [
            {
                "q": "What is the probability function of a Binomial($n,p$) distribution?",
                "a": "$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ for $k=0,1,\\dots,n$"
            },
            {
                "q": "What is the mean and variance of a Poisson($\\lambda$) distribution?",
                "a": "Mean $=\\lambda$, variance $=\\lambda$"
            },
            {
                "q": "What is the relationship between the Poisson process and the Poisson distribution?",
                "a": "The number of events of a Poisson process in a fixed time interval follows a Poisson distribution with mean equal to the rate times the interval length."
            },
            {
                "q": "What is a 'negative binomial' distribution typically used to model?",
                "a": "The number of failures before a fixed number of successes in a sequence of independent trials (or an over-dispersed alternative to the Poisson)."
            },
            {
                "q": "What is the key difference between the binomial and hypergeometric distributions?",
                "a": "The binomial assumes sampling with replacement; the hypergeometric assumes sampling without replacement from a finite population."
            },
            {
                "q": "What distribution results from summing the squares of $k$ independent standard normal random variables?",
                "a": "The chi-square distribution with $k$ degrees of freedom."
            },
            {
                "q": "What is the relationship between the normal and log-normal distributions?",
                "a": "If $X$ is normally distributed, then $Y = e^X$ is log-normally distributed."
            },
            {
                "q": "What is the 'inverse transform method' used for?",
                "a": "Generating a random sample from a distribution by applying the inverse of its CDF to a uniform(0,1) random variable."
            },
            {
                "q": "What is the $t$-distribution typically used for?",
                "a": "Inference about a normal population's mean when the population variance is unknown and estimated from the sample."
            },
            {
                "q": "What is the $F$-distribution typically used for?",
                "a": "Comparing the ratio of two sample variances from independent normal samples."
            },
            {
                "q": "Why is the exponential distribution described as 'memoryless'?",
                "a": "The probability of waiting an additional time $t$ given no event has occurred yet is the same as waiting $t$ from the start."
            },
            {
                "q": "How would you generate a sample from an exponential distribution using the inverse transform method?",
                "a": "$x = -\\frac{1}{\\lambda}\\ln(1-u)$, setting $u$ equal to the CDF and solving for $x$."
            },
            {
                "q": "What is the beta distribution commonly used to model?",
                "a": "A random variable restricted to the interval $[0,1]$, such as a probability or proportion."
            },
            {
                "q": "What is the gamma distribution, and what is one common actuarial use?",
                "a": "A flexible continuous distribution for positive values, often used to model claim sizes or waiting times; generalises the exponential and chi-square."
            },
            {
                "q": "How would statistical software typically be used to generate samples from these distributions?",
                "a": "Using built-in random number generator functions for each distribution, implementing efficient/exact sampling algorithms internally."
            }
        ]
    },
    {
        "id": "m03",
        "title": "Generating functions",
        "description": "Introduces moment generating functions and cumulant generating functions, and how to use them to derive moments of a distribution.",
        "cards": [
            {
                "q": "What is the moment generating function (MGF) of a random variable $X$?",
                "a": "$M_X(t) = E[e^{tX}]$"
            },
            {
                "q": "How do you find the mean of $X$ from its MGF?",
                "a": "$E[X] = M_X'(0)$, the first derivative of the MGF evaluated at $t=0$."
            },
            {
                "q": "How do you find $E[X^2]$ from the MGF?",
                "a": "$E[X^2] = M_X''(0)$, the second derivative of the MGF evaluated at $t=0$."
            },
            {
                "q": "What is the cumulant generating function (CGF)?",
                "a": "$K_X(t) = \\ln M_X(t)$, the natural log of the moment generating function."
            },
            {
                "q": "How is the variance of $X$ obtained from the CGF?",
                "a": "$\\text{Var}(X) = K_X''(0)$, the second derivative of the CGF evaluated at $t=0$."
            },
            {
                "q": "What is a key property of MGFs for sums of independent random variables?",
                "a": "The MGF of a sum of independent random variables equals the product of their individual MGFs."
            },
            {
                "q": "What is the corresponding property of CGFs for sums of independent random variables?",
                "a": "The CGF of a sum of independent random variables equals the sum of their individual CGFs."
            },
            {
                "q": "What is the MGF of a Poisson($\\lambda$) distribution?",
                "a": "$M_X(t) = \\exp[\\lambda(e^t-1)]$"
            },
            {
                "q": "How can generating functions help identify a distribution?",
                "a": "If two random variables have the same MGF (where it exists), they have the same distribution."
            },
            {
                "q": "How would you find moments of a distribution using a series expansion of the MGF?",
                "a": "Expand $M_X(t)$ as a power series in $t$; the coefficient of $\\frac{t^n}{n!}$ gives $E[X^n]$."
            },
            {
                "q": "Why might the CGF be more convenient than the MGF for finding variance?",
                "a": "Its second derivative directly gives the variance, without separately computing and combining the first and second moments."
            },
            {
                "q": "What does it mean if a distribution's MGF doesn't exist for any $t\\neq 0$?",
                "a": "The distribution's moments may not all be finite (e.g. heavy-tailed distributions), so the MGF approach can't be used."
            },
            {
                "q": "How can generating functions derive the distribution of a sum of independent Poisson random variables?",
                "a": "Multiply their MGFs (or add their CGFs); the result matches a Poisson MGF/CGF with the summed rate."
            },
            {
                "q": "What is the third derivative of the CGF at zero related to?",
                "a": "The third central moment (related to skewness) of the distribution."
            },
            {
                "q": "Why are generating functions particularly useful in actuarial applications like aggregate claims modelling?",
                "a": "They provide a convenient way to combine distributions and extract moments without complex direct integration/summation."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Joint distributions",
        "description": "Covers the properties of jointly distributed random variables — marginal and conditional distributions, independence, covariance and correlation, and combining random variables.",
        "cards": [
            {
                "q": "What is a 'marginal distribution'?",
                "a": "The probability distribution of one variable from a joint distribution, obtained by summing/integrating out the other variable(s)."
            },
            {
                "q": "What is a 'conditional distribution'?",
                "a": "The probability distribution of one variable given a specific (fixed) value of another variable."
            },
            {
                "q": "What condition must hold for two random variables $X$ and $Y$ to be independent?",
                "a": "$f_{X,Y}(x,y) = f_X(x)f_Y(y)$ for all $x,y$ — the joint function factorises as the product of marginals."
            },
            {
                "q": "How is the covariance of two random variables defined?",
                "a": "$\\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$"
            },
            {
                "q": "How is the correlation coefficient related to covariance?",
                "a": "$\\rho = \\frac{\\text{Cov}(X,Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}}$, a standardised (unit-free) version of covariance."
            },
            {
                "q": "If $X$ and $Y$ are independent, what is $\\text{Cov}(X,Y)$?",
                "a": "Zero."
            },
            {
                "q": "Does zero covariance imply independence?",
                "a": "No — zero covariance means no linear relationship, but there could still be non-linear dependence."
            },
            {
                "q": "What is the formula for the variance of a linear combination $aX+bY$?",
                "a": "$\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + 2ab\\,\\text{Cov}(X,Y)$"
            },
            {
                "q": "How does the formula for $\\text{Var}(aX+bY)$ simplify if $X$ and $Y$ are independent?",
                "a": "The covariance term drops out: $\\text{Var}(aX+bY) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$"
            },
            {
                "q": "How would you find the marginal distribution of $X$ from a joint discrete distribution?",
                "a": "Sum the joint probabilities over all values of $Y$, for each value of $X$."
            },
            {
                "q": "How would you find the conditional probability function of $Y$ given $X=x$?",
                "a": "$f_{Y|X}(y|x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}$"
            },
            {
                "q": "What is $E[XY]$ used for in calculating covariance?",
                "a": "It's the expected value of the product of the two random variables, needed alongside the means to compute covariance."
            },
            {
                "q": "Give an example of two random variables that are dependent but have zero correlation.",
                "a": "$X$ uniform on $[-1,1]$ and $Y=X^2$ — dependent, but correlation is zero due to the symmetric, non-linear relationship."
            },
            {
                "q": "How is the expected value of a function of two jointly distributed random variables calculated?",
                "a": "By summing/integrating the function's value at each point, weighted by the joint probability/density."
            },
            {
                "q": "Why is understanding joint distributions important for actuarial applications like reinsurance or portfolio risk?",
                "a": "Many real quantities depend on the joint behaviour of several random variables, not just their individual behaviour."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Conditional expectation",
        "description": "Covers conditional expectation of one random variable given another, and how to use the 'tower property' to find unconditional means and variances via conditioning.",
        "cards": [
            {
                "q": "What is $E[Y|X=x]$?",
                "a": "The expected value of $Y$, calculated using the conditional distribution of $Y$ given that $X$ takes the specific value $x$."
            },
            {
                "q": "What is the 'tower property' (law of total expectation)?",
                "a": "$E[Y] = E[E[Y|X]]$ — the overall mean equals the expectation, over $X$, of the conditional mean of $Y$ given $X$."
            },
            {
                "q": "What is the 'law of total variance' (conditional variance formula)?",
                "a": "$\\text{Var}(Y) = E[\\text{Var}(Y|X)] + \\text{Var}(E[Y|X])$"
            },
            {
                "q": "What does the first term, $E[\\text{Var}(Y|X)]$, in the law of total variance represent?",
                "a": "The average 'within-group' variance — variability in $Y$ remaining after accounting for $X$."
            },
            {
                "q": "What does the second term, $\\text{Var}(E[Y|X])$, in the law of total variance represent?",
                "a": "The 'between-group' variance — variability in the conditional means as $X$ varies."
            },
            {
                "q": "Why is the law of total variance useful in actuarial applications like credibility theory?",
                "a": "It decomposes total variability into within-risk and between-risk components, central to how credibility weights are derived."
            },
            {
                "q": "If $Y$ and $X$ are independent, what does $E[Y|X=x]$ equal?",
                "a": "$E[Y]$ — the conditional mean doesn't depend on $x$."
            },
            {
                "q": "How would you use conditioning to find the unconditional mean of a compound distribution?",
                "a": "Condition on the number of claims $N$, find the expected total given $N$, then take the expectation over $N$ using the tower property."
            },
            {
                "q": "What is $E[Y|X]$ as a random variable (rather than $E[Y|X=x]$ as a number)?",
                "a": "A function of the random variable $X$ itself — its value depends on the (random) outcome of $X$."
            },
            {
                "q": "Give an example of a practical actuarial scenario where conditional expectation would naturally be used.",
                "a": "Finding the expected total claim amount for a risk, conditioning on an unknown/random underlying claim frequency or severity parameter."
            },
            {
                "q": "How does the tower property help simplify calculating $E[XY]$?",
                "a": "You can write $E[XY] = E[X \\cdot E[Y|X]]$, replacing $Y$ with its conditional mean given $X$."
            },
            {
                "q": "Why might conditioning on a variable simplify an otherwise complex expectation calculation?",
                "a": "Breaking a calculation into simpler conditional pieces can be much easier than working with the full joint distribution directly."
            },
            {
                "q": "What is meant by 'iterated expectation'?",
                "a": "Another name for the tower property — taking an expectation of a conditional expectation gives back the overall (unconditional) expectation."
            },
            {
                "q": "How would you verify the law of total variance using a simple two-group example?",
                "a": "Calculate the overall variance directly, then separately the within-group and between-group variance of the group means, and check they sum correctly."
            },
            {
                "q": "Why is conditional expectation described as itself a random variable when written as $E[Y|X]$?",
                "a": "Because its value changes depending on the (random) value that $X$ takes, so it inherits randomness from $X$."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Central Limit Theorem",
        "description": "States the Central Limit Theorem for sums/means of independent, identically distributed random variables, and compares simulated sample distributions with the normal approximation.",
        "cards": [
            {
                "q": "What does the Central Limit Theorem (CLT) state?",
                "a": "For i.i.d. random variables with finite mean and variance, the standardised sample mean converges in distribution to standard normal as sample size increases."
            },
            {
                "q": "What is the approximate distribution of the sample mean $\\bar{X}$ for large $n$?",
                "a": "Approximately $N(\\mu, \\sigma^2/n)$"
            },
            {
                "q": "Does the CLT require the underlying distribution to be normal?",
                "a": "No — it applies to almost any distribution with finite mean and variance."
            },
            {
                "q": "How does the accuracy of the normal approximation from the CLT typically depend on sample size?",
                "a": "It generally improves as sample size increases; smaller samples need the underlying distribution closer to normal for a good approximation."
            },
            {
                "q": "Why might the CLT approximation be poor for small samples from a highly skewed distribution?",
                "a": "Skewness takes a larger sample size to 'average out' via the CLT, so small samples can still show noticeable skewness."
            },
            {
                "q": "How is the CLT used to justify approximating a Binomial distribution with a Normal distribution?",
                "a": "A binomial is a sum of many independent Bernoulli trials, so for large $n$ the CLT justifies a normal approximation with matching mean and variance."
            },
            {
                "q": "What continuity correction is often applied when approximating a discrete distribution with a normal distribution?",
                "a": "Adjusting the boundary by $0.5$ to account for the discrete-to-continuous approximation."
            },
            {
                "q": "How would you use simulation to check the CLT's accuracy for a given sample size and distribution?",
                "a": "Simulate many samples, compute the sample mean for each, and compare the empirical distribution to the theoretical normal approximation."
            },
            {
                "q": "Why is the CLT considered foundational for much of classical statistical inference?",
                "a": "Many inference procedures rely on the approximate normality of sample means/estimators, which the CLT justifies even when the underlying data isn't normal."
            },
            {
                "q": "What happens to the variance of the sample mean as sample size $n$ increases?",
                "a": "It decreases, proportionally to $1/n$."
            },
            {
                "q": "Does the CLT say anything about the distribution of individual observations, or only about sums/means?",
                "a": "Only about sums/means (and similar aggregated statistics) — individual observations retain their original distribution."
            },
            {
                "q": "How does the CLT apply to the distribution of a sum (rather than a mean) of i.i.d. random variables?",
                "a": "The sum is also approximately normal for large $n$, with mean $n\\mu$ and variance $n\\sigma^2$."
            },
            {
                "q": "What condition on the underlying distribution is required for the CLT to apply?",
                "a": "The distribution must have a finite mean and finite variance."
            },
            {
                "q": "Give an example of a distribution for which the CLT would not apply in its standard form.",
                "a": "A distribution with infinite variance, such as a Cauchy distribution."
            },
            {
                "q": "Why is comparing simulated sample means to the normal distribution a useful practical check?",
                "a": "It helps assess how large a sample size is actually needed in practice for the normal approximation to be adequate."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Sampling and statistical inference",
        "description": "Covers random sampling from a population, sampling distributions of statistics, and the key sampling distributions used for inference about a normal population's mean and variance.",
        "cards": [
            {
                "q": "What is a 'random sample'?",
                "a": "A set of observations drawn such that each is independent and identically distributed according to the population distribution."
            },
            {
                "q": "What is a 'sampling distribution'?",
                "a": "The probability distribution of a statistic (e.g. the sample mean), across all possible samples of a given size from the population."
            },
            {
                "q": "What is the mean of the sampling distribution of the sample mean $\\bar{X}$?",
                "a": "Equal to the population mean $\\mu$."
            },
            {
                "q": "What is the variance of the sampling distribution of the sample mean $\\bar{X}$, for a sample of size $n$?",
                "a": "$\\sigma^2/n$, where $\\sigma^2$ is the population variance."
            },
            {
                "q": "What is the mean of the sampling distribution of the sample variance $S^2$?",
                "a": "Equal to the population variance $\\sigma^2$."
            },
            {
                "q": "For a random sample from a Normal distribution, what is the exact distribution of the sample mean $\\bar{X}$?",
                "a": "Exactly normal, $N(\\mu, \\sigma^2/n)$ — not just approximately."
            },
            {
                "q": "For a random sample of size $n$ from $N(\\mu,\\sigma^2)$, what is the distribution of $\\frac{(n-1)S^2}{\\sigma^2}$?",
                "a": "Chi-square with $n-1$ degrees of freedom."
            },
            {
                "q": "For a random sample from a normal distribution with unknown variance, what distribution does the standardised sample mean follow?",
                "a": "The $t$-distribution with $n-1$ degrees of freedom."
            },
            {
                "q": "Why is the $t$-distribution used instead of the normal distribution when the population variance is unknown?",
                "a": "Estimating the variance from the sample introduces extra uncertainty, which the heavier-tailed $t$-distribution accounts for."
            },
            {
                "q": "What happens to the $t$-distribution as the degrees of freedom increase?",
                "a": "It converges to the standard normal distribution."
            },
            {
                "q": "What is the $F$-distribution used for, in terms of two independent samples?",
                "a": "Comparing the ratio of two independent sample variances, used e.g. to test equality of variances."
            },
            {
                "q": "Are the sample mean and sample variance independent for a random sample from a normal distribution?",
                "a": "Yes — a special property that holds for normal samples."
            },
            {
                "q": "What is meant by 'degrees of freedom' for the sample variance's chi-square distribution?",
                "a": "$n-1$ — one degree of freedom is 'used up' estimating the mean from the same sample."
            },
            {
                "q": "Why is understanding the sampling distribution of a statistic essential for statistical inference?",
                "a": "It tells us how much a statistic varies from sample to sample, underpinning confidence intervals and hypothesis tests."
            },
            {
                "q": "If you take repeated samples of the same size and calculate the sample mean each time, what pattern would you expect?",
                "a": "The sample means would vary, following the sampling distribution of the mean (approximately normal, centred on the population mean)."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Point estimation",
        "description": "Covers methods for constructing estimators — method of moments and maximum likelihood — and criteria for assessing estimator quality such as bias, efficiency, consistency, and mean square error.",
        "cards": [
            {
                "q": "What is the 'method of moments' for constructing an estimator?",
                "a": "Setting sample moments equal to the corresponding theoretical population moments, and solving for the unknown parameter(s)."
            },
            {
                "q": "What is the 'method of maximum likelihood' for constructing an estimator?",
                "a": "Choosing the parameter value(s) that maximise the likelihood of observing the actual sample data."
            },
            {
                "q": "What does it mean for an estimator to be 'unbiased'?",
                "a": "$E[\\hat\\theta] = \\theta$ — its expected value equals the true population parameter."
            },
            {
                "q": "What is the 'mean square error' (MSE) of an estimator?",
                "a": "$\\text{MSE}(\\hat\\theta) = E[(\\hat\\theta-\\theta)^2] = \\text{Var}(\\hat\\theta) + \\text{Bias}(\\hat\\theta)^2$"
            },
            {
                "q": "What does it mean for an estimator to be 'efficient'?",
                "a": "Among a class of estimators, it has the smallest variance."
            },
            {
                "q": "What does it mean for an estimator to be 'consistent'?",
                "a": "As sample size increases, the estimator converges (in probability) to the true parameter value."
            },
            {
                "q": "How can an estimator be biased but still have a lower MSE than an unbiased estimator?",
                "a": "If its variance is sufficiently smaller, the reduction in variance can outweigh the squared bias in the MSE formula."
            },
            {
                "q": "What is the 'asymptotic distribution' of a maximum likelihood estimator, for large samples?",
                "a": "Approximately normal, centred on the true value, with variance given by the inverse of the Fisher information."
            },
            {
                "q": "Why are maximum likelihood estimators often preferred despite sometimes being biased in small samples?",
                "a": "They are asymptotically efficient and consistent, with well-understood large-sample properties."
            },
            {
                "q": "What is the 'bootstrap method' used for in estimating an estimator's properties?",
                "a": "Resampling (with replacement) from the observed sample to empirically approximate the sampling distribution of an estimator."
            },
            {
                "q": "How would you compare two competing estimators of the same parameter?",
                "a": "Compare their bias, variance, and/or mean square error — the estimator with the smaller MSE is generally preferred."
            },
            {
                "q": "What is a potential drawback of the method of moments compared to maximum likelihood?",
                "a": "It can be less statistically efficient (higher variance), especially where moments don't fully capture the information in the data."
            },
            {
                "q": "How would you find the maximum likelihood estimator in practice?",
                "a": "Write the log-likelihood function, differentiate with respect to the parameter(s), set equal to zero, and solve."
            },
            {
                "q": "Why is the log-likelihood function typically used instead of the likelihood function directly when finding MLEs?",
                "a": "Taking logs turns products into sums, easier to differentiate, with the maximum at the same parameter value."
            },
            {
                "q": "If an estimator's bias tends to zero as sample size increases, does that guarantee it is consistent?",
                "a": "Not necessarily alone — consistency also typically requires the variance to shrink appropriately."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Confidence intervals and prediction intervals",
        "description": "Covers how to construct confidence intervals for unknown parameters and prediction intervals for future observations, including standard cases and the bootstrap method.",
        "cards": [
            {
                "q": "What is a 'confidence interval'?",
                "a": "A range of plausible values for an unknown population parameter, containing the true parameter in a specified proportion of repeated samples."
            },
            {
                "q": "What is a 'prediction interval'?",
                "a": "A range of plausible values for a single future observation, based on a fitted model, rather than for a population parameter."
            },
            {
                "q": "What is the general form of a 95% confidence interval for a normal population mean with known variance?",
                "a": "$\\bar{x} \\pm 1.96\\frac{\\sigma}{\\sqrt{n}}$"
            },
            {
                "q": "How does the confidence interval formula change if the population variance is unknown?",
                "a": "Replace the normal quantile with a $t$-distribution quantile ($n-1$ df), and use the sample standard deviation in place of $\\sigma$."
            },
            {
                "q": "How would you construct a confidence interval for a binomial proportion using the normal approximation?",
                "a": "$\\hat{p} \\pm z\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$"
            },
            {
                "q": "How would you construct a confidence interval for a Poisson mean using the normal approximation?",
                "a": "Using the sample mean's approximate normal sampling distribution, e.g. $\\bar{x} \\pm z\\sqrt{\\bar{x}/n}$"
            },
            {
                "q": "What is different about a two-sample confidence interval compared with a one-sample interval?",
                "a": "It's for the difference between two population parameters, requiring the variance of the difference of the two sample statistics."
            },
            {
                "q": "How would you construct a confidence interval for the difference between two means from paired data?",
                "a": "Treat the paired differences as a single sample, and construct a standard one-sample interval for the mean of the differences."
            },
            {
                "q": "How does the bootstrap method construct a confidence interval?",
                "a": "By resampling from the data many times and using the empirical distribution of the resulting bootstrap statistics (e.g. its percentiles)."
            },
            {
                "q": "Why is a prediction interval generally wider than a confidence interval for the mean, at the same confidence level?",
                "a": "It accounts for both the uncertainty in estimating the mean and the additional individual variability of a single future observation."
            },
            {
                "q": "What happens to the width of a confidence interval as sample size $n$ increases, all else equal?",
                "a": "It narrows, since the standard error decreases as $n$ increases."
            },
            {
                "q": "What happens to the width of a confidence interval as the confidence level increases?",
                "a": "It widens, since a higher confidence level requires a larger quantile/multiplier."
            },
            {
                "q": "Why might you use the bootstrap method rather than a standard formula for a confidence interval?",
                "a": "When the underlying distribution is unknown or complex, or no simple closed-form formula exists."
            },
            {
                "q": "What confidence interval formula would you use for the variance of a normal population?",
                "a": "One based on the chi-square distribution of $\\frac{(n-1)S^2}{\\sigma^2}$."
            },
            {
                "q": "Why is it important to interpret a 95% confidence interval correctly?",
                "a": "The true parameter is fixed (not random); the 95% refers to the long-run proportion of such intervals that would contain the true value."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Hypothesis testing",
        "description": "Covers the framework of hypothesis testing — null/alternative hypotheses, type I/II errors, test statistics, and standard tests including chi-square goodness-of-fit and tests of independence.",
        "cards": [
            {
                "q": "What is a 'null hypothesis'?",
                "a": "A default or baseline statement (often of 'no effect') that is tested against an alternative hypothesis."
            },
            {
                "q": "What is a 'Type I error'?",
                "a": "Rejecting the null hypothesis when it is actually true (a 'false positive')."
            },
            {
                "q": "What is a 'Type II error'?",
                "a": "Failing to reject the null hypothesis when it is actually false (a 'false negative')."
            },
            {
                "q": "What is the 'significance level' of a test?",
                "a": "The probability of making a Type I error, chosen in advance (commonly 5% or 1%)."
            },
            {
                "q": "What is the 'power' of a test?",
                "a": "The probability of correctly rejecting the null hypothesis when it is false."
            },
            {
                "q": "What is a 'p-value'?",
                "a": "The probability, assuming the null hypothesis is true, of obtaining a test statistic at least as extreme as the one observed."
            },
            {
                "q": "What decision rule is typically used with a p-value?",
                "a": "Reject the null hypothesis if the p-value is less than the chosen significance level."
            },
            {
                "q": "What is the 'critical region' of a test?",
                "a": "The set of values of the test statistic for which the null hypothesis would be rejected."
            },
            {
                "q": "What is the difference between a 'simple' and a 'composite' hypothesis?",
                "a": "A simple hypothesis fully specifies the distribution; a composite hypothesis allows a range of possible parameter values."
            },
            {
                "q": "What does the 'likelihood ratio' compare, in hypothesis testing?",
                "a": "The likelihood of the data under the null hypothesis versus under the alternative hypothesis."
            },
            {
                "q": "What are 'sensitivity' and 'specificity' in the context of a diagnostic/statistical test?",
                "a": "Sensitivity is the probability of correctly identifying a true positive; specificity of correctly identifying a true negative."
            },
            {
                "q": "What is the chi-square goodness-of-fit test used for?",
                "a": "Testing whether observed data is consistent with coming from a specified probability distribution."
            },
            {
                "q": "How does the chi-square test's degrees of freedom change if parameters are estimated from the data?",
                "a": "The degrees of freedom are reduced by one for each parameter estimated from the data."
            },
            {
                "q": "What is a 'contingency table' used for?",
                "a": "Summarising the joint frequency distribution of two categorical variables, often to test independence using a chi-square test."
            },
            {
                "q": "What is the 'permutation approach' to a non-parametric hypothesis test?",
                "a": "Comparing the observed test statistic to the distribution obtained by randomly permuting the data labels, without a specific parametric assumption."
            }
        ]
    },
    {
        "id": "m11",
        "title": "Correlation",
        "description": "Covers exploratory analysis and inference for measures of association between two variables — Pearson's, Spearman's, and Kendall's correlation coefficients.",
        "cards": [
            {
                "q": "What does a Pearson correlation coefficient of $+1$ indicate?",
                "a": "A perfect positive linear relationship between the two variables."
            },
            {
                "q": "What does a Pearson correlation coefficient of $0$ indicate?",
                "a": "No linear relationship between the two variables (though there could still be a non-linear relationship)."
            },
            {
                "q": "How is the sample Pearson correlation coefficient calculated?",
                "a": "The sample covariance of the two variables, divided by the product of their sample standard deviations."
            },
            {
                "q": "How would you test whether a population correlation coefficient is significantly different from zero?",
                "a": "Using a $t$-test based on the sample correlation coefficient and sample size (assuming bivariate normality)."
            },
            {
                "q": "What is Spearman's rank correlation coefficient based on?",
                "a": "The Pearson correlation coefficient applied to the ranks of the data, rather than the raw values."
            },
            {
                "q": "Why might Spearman's correlation be more robust to outliers than Pearson's?",
                "a": "Because it uses ranks, an extreme value only affects its rank position, not the magnitude of its influence."
            },
            {
                "q": "What does Kendall's tau measure conceptually?",
                "a": "The tendency for pairs of observations to be 'concordant' versus 'discordant'."
            },
            {
                "q": "How is a pair of observations classified as 'concordant' under Kendall's tau?",
                "a": "If the observation with the higher value of $X$ also has the higher value of $Y$."
            },
            {
                "q": "Can Pearson's correlation be misleading for data with a strong non-linear (but monotonic) relationship?",
                "a": "Yes — it can understate the strength of association since it only captures the linear component."
            },
            {
                "q": "What assumption does the standard significance test for Pearson's correlation coefficient typically rely on?",
                "a": "That the underlying data follows a bivariate normal distribution."
            },
            {
                "q": "How does sample size affect the significance of an observed correlation coefficient?",
                "a": "Larger samples make smaller correlation coefficients statistically significant, since the standard error decreases."
            },
            {
                "q": "What could cause two variables to show a high correlation despite having no causal relationship?",
                "a": "A confounding third variable influencing both, or pure coincidence (spurious correlation)."
            },
            {
                "q": "Why might you calculate Pearson's, Spearman's, and Kendall's correlations all together for the same pair of variables?",
                "a": "To compare linear versus monotonic association, and check robustness to outliers or non-linearity."
            },
            {
                "q": "What range of values can any of these three correlation coefficients take?",
                "a": "Between $-1$ and $+1$ inclusive."
            },
            {
                "q": "How would you interpret a Kendall's tau close to zero, alongside a high Pearson's correlation?",
                "a": "Unusual and worth investigating, but generally a low Kendall's tau suggests little consistent ordering association despite a linear trend driven by a few points."
            }
        ]
    },
    {
        "id": "m12",
        "title": "Linear regression",
        "description": "Covers simple and multiple linear regression models — fitting, inference on parameters, measures of goodness of fit, prediction, and using residuals to check model validity.",
        "cards": [
            {
                "q": "What is the simple linear regression model?",
                "a": "$Y_i = \\alpha + \\beta x_i + \\epsilon_i$, with independent error terms usually assumed $N(0,\\sigma^2)$."
            },
            {
                "q": "What method is typically used to estimate the slope and intercept in linear regression?",
                "a": "Least squares — minimising the sum of squared residuals."
            },
            {
                "q": "What is the least squares estimate of the slope $\\beta$ in simple linear regression?",
                "a": "$\\hat\\beta = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}$"
            },
            {
                "q": "What is $R^2$ (the coefficient of determination) a measure of?",
                "a": "The proportion of the total variability in the response explained by the fitted regression model."
            },
            {
                "q": "How would you perform statistical inference on the slope parameter $\\beta$?",
                "a": "Using a $t$-test (or confidence interval) based on the estimated slope, its standard error, and the $t$-distribution with $n-2$ df."
            },
            {
                "q": "What is a 'residual' in regression?",
                "a": "The difference between an observed value and the value predicted by the model, $e_i = y_i - \\hat{y}_i$"
            },
            {
                "q": "How can residuals be used to check the validity of a linear regression model?",
                "a": "By plotting them against fitted values or explanatory variables to check for patterns violating model assumptions."
            },
            {
                "q": "What pattern in a residual plot would suggest non-constant error variance (heteroscedasticity)?",
                "a": "A 'funnel' or fan shape, where the spread of residuals changes systematically with the fitted values."
            },
            {
                "q": "What is the difference between a confidence interval for a 'mean response' and a prediction interval for an 'individual response'?",
                "a": "The mean response interval only reflects estimation uncertainty; the prediction interval also includes individual variability, so it's wider."
            },
            {
                "q": "How does multiple linear regression differ from simple linear regression?",
                "a": "It includes more than one explanatory variable, modelling the response as a linear combination of several predictors."
            },
            {
                "q": "What issue can arise in multiple regression if explanatory variables are highly correlated with each other?",
                "a": "Multicollinearity, which can make individual coefficient estimates unstable and hard to interpret."
            },
            {
                "q": "What is an 'interaction term' in a regression model?",
                "a": "A term (typically the product of two explanatory variables) allowing one variable's effect to depend on the level of another."
            },
            {
                "q": "How would you use measures of model fit to select an appropriate set of explanatory variables?",
                "a": "Compare models using criteria like adjusted $R^2$, AIC, or significance tests, favouring good fit without unnecessary complexity."
            },
            {
                "q": "What does it mean for an explanatory variable to be a 'factor' (as opposed to continuous)?",
                "a": "It takes categorical values, typically represented using indicator/dummy variables for each level."
            },
            {
                "q": "Why is checking residuals important even if $R^2$ is high?",
                "a": "A high $R^2$ doesn't guarantee the model's assumptions are valid — residual analysis can reveal issues a summary statistic would miss."
            }
        ]
    },
    {
        "id": "m13",
        "title": "Generalised linear models",
        "description": "Extends linear regression to the exponential family of distributions via generalised linear models (GLMs) — link functions, deviance, and model selection.",
        "cards": [
            {
                "q": "What is a 'generalised linear model' (GLM)?",
                "a": "A regression model where the response follows an exponential family distribution, related to a linear predictor via a link function."
            },
            {
                "q": "What is the 'linear predictor' in a GLM?",
                "a": "The linear combination of explanatory variables and coefficients that, via the link function, determines the mean of the response."
            },
            {
                "q": "What is the 'link function'?",
                "a": "A function relating the mean of the response distribution to the linear predictor: $g(\\mu) = \\eta$"
            },
            {
                "q": "What is the 'canonical link function'?",
                "a": "The link function naturally associated with a given exponential family distribution (e.g. log link for Poisson, logit for binomial)."
            },
            {
                "q": "Give two distributions that are members of the exponential family, used as GLM response distributions.",
                "a": "Binomial and Poisson (also: exponential, gamma, and normal)."
            },
            {
                "q": "What is the 'variance function' in a GLM?",
                "a": "A function describing how the variance of the response depends on its mean, specific to the chosen distribution."
            },
            {
                "q": "What is 'deviance' in a GLM?",
                "a": "A measure of discrepancy between the fitted model and a 'saturated' model, used to assess goodness of fit."
            },
            {
                "q": "What is 'scaled deviance'?",
                "a": "The deviance divided by the dispersion (scale) parameter, used in significance testing and model comparison."
            },
            {
                "q": "How is deviance used to compare two nested GLMs?",
                "a": "The difference in (scaled) deviance approximately follows a chi-square distribution, testing whether extra terms significantly improve fit."
            },
            {
                "q": "What are 'Pearson residuals' in a GLM?",
                "a": "Residuals standardised by the estimated standard deviation implied by the model's variance function."
            },
            {
                "q": "What are 'deviance residuals'?",
                "a": "Residuals based on each observation's individual contribution to the total deviance."
            },
            {
                "q": "What is the purpose of the 'likelihood-ratio test' in the context of GLMs?",
                "a": "To formally test whether adding/removing explanatory variables significantly improves fit, based on the change in deviance."
            },
            {
                "q": "How would you fit a Poisson GLM with a log link function, conceptually?",
                "a": "Model the log of the expected count as a linear function of the explanatory variables, estimating coefficients via maximum likelihood."
            },
            {
                "q": "Why might a Poisson GLM be a natural choice for modelling claim counts in general insurance?",
                "a": "Claim counts are non-negative integers, and a log-link Poisson model naturally ensures positive predicted means."
            },
            {
                "q": "How would you use an analysis of deviance to choose a suitable GLM?",
                "a": "Compare the reduction in deviance from adding each variable against its degrees of freedom, retaining significant improvements."
            }
        ]
    },
    {
        "id": "m14",
        "title": "Bayesian statistics",
        "description": "Introduces the Bayesian approach to statistical inference — using Bayes' theorem to combine prior beliefs with observed data to obtain a posterior distribution, and Bayesian point/interval estimation.",
        "cards": [
            {
                "q": "What is Bayes' theorem, in terms of a parameter $\\theta$ and data $x$?",
                "a": "$f(\\theta|x) \\propto f(x|\\theta)\\,f(\\theta)$ — posterior is proportional to likelihood times prior."
            },
            {
                "q": "What is the 'prior distribution'?",
                "a": "A probability distribution representing beliefs about a parameter before observing the data."
            },
            {
                "q": "What is the 'posterior distribution'?",
                "a": "The updated distribution of the parameter after combining the prior with the observed data via Bayes' theorem."
            },
            {
                "q": "What is a 'conjugate prior'?",
                "a": "A prior that, when combined with a given likelihood, produces a posterior from the same family as the prior."
            },
            {
                "q": "Give an example of a conjugate prior/likelihood pair commonly used in actuarial applications.",
                "a": "A Gamma prior for a Poisson mean (giving a Gamma posterior), or a Beta prior for a binomial probability (giving a Beta posterior)."
            },
            {
                "q": "How is a Bayesian point estimate typically derived from the posterior distribution?",
                "a": "By minimising the expected value of a chosen loss function under the posterior — e.g. the posterior mean minimises squared-error loss."
            },
            {
                "q": "What loss function leads to the posterior median as the optimal Bayesian point estimate?",
                "a": "Absolute error loss."
            },
            {
                "q": "What loss function leads to the posterior mode as the optimal Bayesian point estimate?",
                "a": "The 'zero-one' (all-or-nothing) loss function."
            },
            {
                "q": "What is a 'credible interval'?",
                "a": "A Bayesian interval, derived from the posterior distribution, within which the parameter lies with a specified posterior probability."
            },
            {
                "q": "How does a credible interval's interpretation differ from a classical confidence interval's?",
                "a": "A credible interval directly states 'the probability the parameter lies here is X%', unlike a confidence interval's long-run frequency interpretation."
            },
            {
                "q": "What is the 'credibility premium formula'?",
                "a": "$\\text{Premium} = Z \\times (\\text{own experience}) + (1-Z) \\times (\\text{prior mean})$"
            },
            {
                "q": "What role does the credibility factor $Z$ play?",
                "a": "It determines how much weight is given to the individual risk's own data versus the wider prior/collective information."
            },
            {
                "q": "How does the Bayesian approach to credibility theory derive the credibility premium?",
                "a": "As the posterior mean, combining a prior distribution for the risk parameter with the observed individual experience."
            },
            {
                "q": "What happens to the credibility factor $Z$ as the amount of individual data increases?",
                "a": "It increases towards 1, giving more weight to the individual's own experience."
            },
            {
                "q": "Why is Bayesian credibility theory particularly relevant to actuarial pricing?",
                "a": "It provides a principled way to blend an individual risk's own experience with wider portfolio experience, especially when individual data is sparse."
            }
        ]
    },
    {
        "id": "m15",
        "title": "Credibility theory",
        "description": "Covers the Bayesian and classical approaches to credibility theory, and the role of the credibility factor in blending individual and collective experience.",
        "cards": [
            {
                "q": "What is the fundamental idea behind credibility theory?",
                "a": "Combining an individual risk's own claims experience with wider (collective) experience, weighted by how credible/reliable the individual data is."
            },
            {
                "q": "What is the 'credibility factor' $Z$ constrained to?",
                "a": "A value between 0 and 1."
            },
            {
                "q": "What happens to the estimated premium if $Z=0$?",
                "a": "The premium equals the collective (prior/overall) mean entirely, ignoring the individual's own experience."
            },
            {
                "q": "What happens to the estimated premium if $Z=1$?",
                "a": "The premium equals the individual's own observed experience entirely, ignoring the wider collective information."
            },
            {
                "q": "What factors typically increase the credibility factor $Z$ for a given risk?",
                "a": "More individual data, and lower variability in the individual's own claims relative to variability between different risks."
            },
            {
                "q": "How does 'between-risk' variance affect the credibility factor, relative to 'within-risk' variance?",
                "a": "Higher between-risk variance increases $Z$, since individual experience is then more informative relative to the average."
            },
            {
                "q": "How does the Bayesian approach to credibility theory determine $Z$?",
                "a": "Implicitly, through the shape of the posterior distribution derived from the prior and likelihood of the observed data."
            },
            {
                "q": "What does it mean for the Bayesian credibility premium to be 'exact' in certain cases?",
                "a": "For specific conjugate prior/likelihood pairs, the posterior mean takes exactly the linear credibility-weighted form."
            },
            {
                "q": "Why is credibility theory particularly useful for pricing risks with limited individual claims history?",
                "a": "It avoids over-relying on sparse, noisy individual data by blending it with more stable collective experience."
            },
            {
                "q": "What is a practical example of using credibility theory in insurance pricing?",
                "a": "Setting a commercial policyholder's renewal premium by blending their own claims history with the insurer's overall experience."
            },
            {
                "q": "How does credibility theory relate to the law of total variance covered under conditional expectation?",
                "a": "The within-risk and between-risk variance components directly determine the credibility factor in classical credibility theory."
            },
            {
                "q": "What would happen to premiums across a portfolio if $Z$ were set too high for all risks?",
                "a": "Premiums would be too heavily influenced by random fluctuations in individual experience, becoming more volatile than appropriate."
            },
            {
                "q": "What would happen to premiums across a portfolio if $Z$ were set too low for all risks?",
                "a": "Premiums would fail to reflect genuine differences between risks, becoming too similar across dissimilar policyholders."
            },
            {
                "q": "How does increasing the volume of individual exposure/data typically affect $Z$ in classical credibility formulas?",
                "a": "It increases $Z$, since $Z$ is typically an increasing function of the amount of individual data/exposure."
            },
            {
                "q": "Why might an actuary need to justify their choice of credibility approach for a given pricing problem?",
                "a": "The methods rest on different assumptions and can give different results, so the choice should suit the data and context available."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Empirical Bayes credibility theory",
        "description": "Covers the empirical Bayes approach to credibility theory, which estimates the credibility parameters directly from the observed data rather than assuming a fully specified prior.",
        "cards": [
            {
                "q": "What is the key difference between the (fully) Bayesian and empirical Bayes approaches to credibility theory?",
                "a": "Empirical Bayes estimates the prior's parameters from the observed data itself, rather than assuming a fully specified prior in advance."
            },
            {
                "q": "What does 'Empirical Bayes Credibility Theory Model 1' typically assume about the risks in a portfolio?",
                "a": "Each risk has the same number of years of data/exposure (a balanced data structure)."
            },
            {
                "q": "What does 'Empirical Bayes Credibility Theory Model 2' allow for, that Model 1 does not?",
                "a": "Different risks having different (unequal) amounts of exposure/data."
            },
            {
                "q": "How are the within-risk and between-risk variance components estimated in empirical Bayes credibility theory?",
                "a": "Using sample variance-type estimators calculated directly from the observed claims data across the risks."
            },
            {
                "q": "Why is it called 'empirical' Bayes?",
                "a": "Because the prior's parameters are estimated empirically from the data, rather than specified from external judgement or theory."
            },
            {
                "q": "What is a practical advantage of the empirical Bayes approach over the full Bayesian approach?",
                "a": "It doesn't require specifying a full prior distribution in advance — the observed portfolio data determines the credibility weighting."
            },
            {
                "q": "What data structure issue does 'Model 2' specifically address that 'Model 1' cannot handle well?",
                "a": "Risks with differing volumes of exposure, since the credibility factor formula needs to reflect each risk's different information."
            },
            {
                "q": "How does the credibility factor formula typically depend on exposure/data volume in empirical Bayes models?",
                "a": "It increases with an individual risk's exposure/data volume relative to the estimated variance components."
            },
            {
                "q": "Why might estimating variance components from limited data be a practical challenge in empirical Bayes credibility theory?",
                "a": "With few risks or little data per risk, the estimated variances can themselves be noisy/unreliable."
            },
            {
                "q": "What assumption is generally made about the risk parameters of different risks within a portfolio?",
                "a": "That they are drawn independently from some common (but not fully specified) underlying distribution across the portfolio."
            },
            {
                "q": "How does empirical Bayes credibility theory relate to conditional expectation and the law of total variance?",
                "a": "It applies the same within/between variance decomposition, but estimates those components directly from data."
            },
            {
                "q": "What would you check before applying 'Model 1' (equal exposure) rather than 'Model 2' to a data set?",
                "a": "Whether all the risks genuinely have the same amount of exposure — if not, Model 2's unequal-exposure approach is more appropriate."
            },
            {
                "q": "Why is empirical Bayes credibility theory particularly useful in general insurance ratemaking?",
                "a": "Real portfolios often have many risks with varying claims histories and no natural, fully specified prior — empirical Bayes lets data calibrate the weighting."
            },
            {
                "q": "What happens to the empirical Bayes credibility factor for a risk with an unusually large amount of exposure?",
                "a": "It tends to be higher, giving that risk's own experience more relative weight in its premium estimate."
            },
            {
                "q": "How would you interpret an estimated between-risk variance of (approximately) zero in an empirical Bayes analysis?",
                "a": "Risks in the portfolio are quite homogeneous, so credibility factors would tend to be low, favouring the collective mean."
            }
        ]
    }
],
  CS2: [
    {
        "id": "m01",
        "title": "Stochastic processes",
        "description": "Introduces the general concept of a stochastic process, classifying processes by state space and time (discrete/continuous), and the Markov property.",
        "cards": [
            {
                "q": "What is a 'stochastic process'?",
                "a": "A collection of random variables indexed by time (or another parameter), representing how a system evolves under uncertainty."
            },
            {
                "q": "What is a 'counting process'?",
                "a": "A stochastic process that counts the number of events that have occurred by time $t$, non-decreasing and integer-valued."
            },
            {
                "q": "What does it mean for a process to have a 'discrete state space'?",
                "a": "The process can only take values from a countable set of possible states."
            },
            {
                "q": "What does it mean for a process to have a 'continuous state space'?",
                "a": "The process can take any value within a continuous range."
            },
            {
                "q": "What does it mean for a process to operate in 'discrete time'?",
                "a": "The process is only observed/defined at a countable sequence of time points."
            },
            {
                "q": "What does it mean for a process to operate in 'continuous time'?",
                "a": "The process is defined at every point in time within an interval."
            },
            {
                "q": "What is a 'mixed type' process, in terms of state space and time?",
                "a": "A process combining aspects of discrete and continuous state spaces or time (e.g. continuous time but a discrete state space)."
            },
            {
                "q": "What is the 'Markov property'?",
                "a": "The future evolution of the process, given its present state, is independent of its past history."
            },
            {
                "q": "How is the Markov property expressed in terms of a filtration $\\mathcal{F}_t$?",
                "a": "$P(X_{t+s} = j \\mid \\mathcal{F}_t) = P(X_{t+s} = j \\mid X_t)$"
            },
            {
                "q": "Give an example of a discrete-time, discrete-state stochastic process.",
                "a": "A Markov chain, e.g. modelling a policyholder's no-claims-discount category year by year."
            },
            {
                "q": "Give an example of a continuous-time, discrete-state stochastic process.",
                "a": "A Markov jump process, e.g. modelling an individual's health state over continuous time."
            },
            {
                "q": "Why is the Markov property a useful simplifying assumption in actuarial modelling?",
                "a": "It greatly simplifies calculations, since only the current state (not the full history) is needed to determine future probabilities."
            },
            {
                "q": "What is a 'filtration'?",
                "a": "An increasing sequence of information sets over time, representing everything known/observable up to each point in time."
            },
            {
                "q": "Give an example of a real-world process that is NOT well-approximated by the Markov property.",
                "a": "A no-claims-discount system with memory of multiple past years, or a process where recent trend affects future behaviour."
            },
            {
                "q": "Why might insurance/actuarial models often use 'mixed type' processes?",
                "a": "Real-world events (e.g. claims) often occur at random continuous times, but affect a discrete state (e.g. a claims category)."
            }
        ]
    },
    {
        "id": "m02",
        "title": "Markov chains",
        "description": "Covers discrete-time Markov chains — transition matrices, the Chapman-Kolmogorov equations, stationary distributions, and applications like no-claims-discount systems.",
        "cards": [
            {
                "q": "What is a 'transition matrix' for a Markov chain?",
                "a": "A matrix whose $(i,j)$ entry gives the probability of moving from state $i$ to state $j$ in one time step."
            },
            {
                "q": "What must each row of a transition matrix sum to?",
                "a": "1, since the chain must move to some state, including possibly staying in the same state."
            },
            {
                "q": "What are the Chapman-Kolmogorov equations?",
                "a": "Equations expressing $n$-step transition probabilities as the matrix product of one-step transition probabilities: $P^{(n)} = P^n$"
            },
            {
                "q": "What is a 'stationary distribution' of a Markov chain?",
                "a": "A probability distribution $\\pi$ over the states such that $\\pi P = \\pi$."
            },
            {
                "q": "Under what condition does a Markov chain have a unique stationary distribution that it converges to?",
                "a": "If the chain is irreducible and aperiodic (with a finite state space)."
            },
            {
                "q": "What does it mean for a Markov chain to be 'irreducible'?",
                "a": "Every state can be reached from every other state with positive probability."
            },
            {
                "q": "What does it mean for a state in a Markov chain to be 'periodic'?",
                "a": "The chain can only return to that state at multiples of some period greater than 1."
            },
            {
                "q": "How would you calculate the stationary distribution of a Markov chain in a simple case?",
                "a": "Solve $\\pi P = \\pi$ together with the constraint that the probabilities in $\\pi$ sum to 1."
            },
            {
                "q": "What is a 'no-claims-discount' (NCD) system, modelled as a Markov chain?",
                "a": "A system where a policyholder's premium discount category changes each year based on claims, following fixed transition probabilities."
            },
            {
                "q": "How would frequency-based experience rating be modelled using a Markov chain?",
                "a": "Each policyholder's rating category is a state, and claims experience each period determines transition probabilities between categories."
            },
            {
                "q": "What is a 'time-inhomogeneous' Markov chain?",
                "a": "A Markov chain where the transition probabilities can change over time, not just depend on the current state."
            },
            {
                "q": "How would you simulate a Markov chain?",
                "a": "At each step, generate a random number to determine the next state according to the probabilities in the current state's row of the transition matrix."
            },
            {
                "q": "What information is lost when only the one-step transition matrix is retained?",
                "a": "Any information about how the chain arrived at its current state, which is irrelevant to future transitions under the Markov property."
            },
            {
                "q": "How would the $n$-step transition matrix be used to find the probability of being in state $j$ after $n$ steps, starting in state $i$?",
                "a": "Take the $(i,j)$ entry of the matrix $P^n$."
            },
            {
                "q": "Why might an actuary use a Markov chain model for a no-claims-discount system rather than tracking full claims history?",
                "a": "It's a tractable simplification that captures the essential dynamics without needing the full history."
            }
        ]
    },
    {
        "id": "m03",
        "title": "The two-state Markov model and the Poisson model",
        "description": "Covers the simplest continuous-time Markov models — a two-state (alive/dead) model with constant transition intensity, and the Poisson process, including inter-event time distributions.",
        "cards": [
            {
                "q": "What are the two states in the basic two-state Markov model of mortality?",
                "a": "'Alive' and 'Dead.'"
            },
            {
                "q": "What is the transition intensity $\\mu$ in the two-state model?",
                "a": "The instantaneous rate (force of mortality) of transitioning from alive to dead."
            },
            {
                "q": "How does the two-state Markov model relate to the random lifetime model?",
                "a": "It's an alternative formulation giving equivalent results for a single decrement — mortality only, no competing risks."
            },
            {
                "q": "What is the probability of remaining in the 'alive' state for $t$ years, under a constant transition intensity $\\mu$?",
                "a": "$e^{-\\mu t}$"
            },
            {
                "q": "What is a 'Poisson process'?",
                "a": "A counting process where events occur independently over time at a constant average rate $\\lambda$, with the number of events in any interval Poisson distributed."
            },
            {
                "q": "What is the distribution of the number of events of a Poisson process in an interval of length $t$?",
                "a": "Poisson with mean $\\lambda t$."
            },
            {
                "q": "What is the distribution of the time between consecutive events (inter-event times) of a Poisson process?",
                "a": "Exponential with rate $\\lambda$."
            },
            {
                "q": "What is the distribution of the waiting time until the $k$-th event of a Poisson process?",
                "a": "Gamma (Erlang) distribution with shape $k$ and rate $\\lambda$."
            },
            {
                "q": "What key property do the increments of a Poisson process have?",
                "a": "Independent increments — the number of events in non-overlapping intervals are independent of each other."
            },
            {
                "q": "How is the Poisson process related to the Poisson model of mortality?",
                "a": "Deaths under a constant-intensity two-state model can be viewed as a Poisson process with rate equal to the transition intensity."
            },
            {
                "q": "What is the key assumption of 'constant transition intensity' in these simple models?",
                "a": "The rate of transitioning between states doesn't change over time (or age), giving exponential holding times."
            },
            {
                "q": "How would you derive the maximum likelihood estimator of $\\mu$ in the two-state model?",
                "a": "$\\hat\\mu = \\frac{\\text{number of deaths observed}}{\\text{total waiting time (central exposed to risk) observed}}$"
            },
            {
                "q": "What is the asymptotic distribution of the maximum likelihood estimator of a constant transition intensity?",
                "a": "Approximately normal, with variance related to the inverse of the total exposure/information observed."
            },
            {
                "q": "Why is the two-state model considered a special/simple case of the general Markov jump process framework?",
                "a": "It has only two states and a single constant intensity, whereas general Markov jump processes can have many states and time-varying intensities."
            },
            {
                "q": "How would the Poisson process be used to model claim arrivals in general insurance?",
                "a": "Treating each claim as an event of a Poisson process with a given claim frequency rate."
            }
        ]
    },
    {
        "id": "m04",
        "title": "Time-homogeneous Markov jump processes",
        "description": "Extends the two-state model to multi-state continuous-time Markov processes with constant (time-independent) transition intensities, using the Kolmogorov equations.",
        "cards": [
            {
                "q": "What is a 'Markov jump process'?",
                "a": "A continuous-time stochastic process that moves between a discrete set of states, with the Markov property, changing state at random jump times."
            },
            {
                "q": "What does 'time-homogeneous' mean for a Markov jump process?",
                "a": "The transition intensities between states don't depend on the current time — only on the states involved."
            },
            {
                "q": "What is the 'transition intensity' $\\mu_{ij}$ between states $i$ and $j$?",
                "a": "The instantaneous rate of transitioning directly from state $i$ to state $j$, given currently in state $i$."
            },
            {
                "q": "What are the (forward) Kolmogorov equations used for?",
                "a": "Describing how the transition probabilities of a Markov jump process evolve over time via a system of differential equations."
            },
            {
                "q": "What is the general form of the Kolmogorov forward equations?",
                "a": "$\\frac{d}{dt}p_{ij}(t) = \\sum_{k \\neq j} p_{ik}(t)\\mu_{kj} - p_{ij}(t)\\mu_j$, where $\\mu_j$ is the total rate of leaving state $j$."
            },
            {
                "q": "How would you use the Kolmogorov equations in a simple case?",
                "a": "Set up and solve the system of differential equations directly, or use known closed-form solutions for standard small models."
            },
            {
                "q": "What does it mean for transition intensities to be 'time-independent' in this context?",
                "a": "They remain constant regardless of elapsed or calendar time, depending only on current/destination state."
            },
            {
                "q": "Give an example of a multi-state model that could be a time-homogeneous Markov jump process.",
                "a": "A simple sickness model with 'healthy,' 'sick,' and 'dead' states, with constant transition rates between them."
            },
            {
                "q": "How would you simulate a Markov jump process?",
                "a": "Simulate an exponential holding time (using the total exit rate) before jumping, then choose the destination state proportional to each transition intensity."
            },
            {
                "q": "What is the total 'exit rate' from a state $i$ in a Markov jump process?",
                "a": "The sum of all transition intensities out of state $i$ to every other reachable state."
            },
            {
                "q": "How is the holding time in a given state distributed, under time-homogeneous intensities?",
                "a": "Exponentially distributed, with rate equal to the total exit rate from that state."
            },
            {
                "q": "Why is the exponential holding time a natural consequence of the Markov property?",
                "a": "The memoryless property of the exponential distribution matches the requirement that future transitions don't depend on elapsed time in the current state."
            },
            {
                "q": "What data would you need to estimate the transition intensities of a time-homogeneous Markov jump process?",
                "a": "The number of observed transitions between each pair of states, and the total waiting time individuals spent exposed in each state."
            },
            {
                "q": "How does a time-homogeneous multi-state model generalise the simple two-state (alive/dead) model?",
                "a": "It allows more than two states and more complex transition patterns (e.g. recovery, multiple causes of exit)."
            },
            {
                "q": "Why might 'time-homogeneous' be an unrealistic assumption for modelling mortality across a wide age range?",
                "a": "Mortality rates genuinely change with age, so a constant intensity would poorly approximate this."
            }
        ]
    },
    {
        "id": "m05",
        "title": "Time-inhomogeneous Markov jump processes",
        "description": "Extends the Markov jump process framework to allow transition intensities that depend on time (e.g. age) and, more generally, on duration in a state.",
        "cards": [
            {
                "q": "What does 'time-inhomogeneous' mean for a Markov jump process?",
                "a": "The transition intensities can depend on the current time (e.g. age), not just the states involved."
            },
            {
                "q": "How do the Kolmogorov equations change for a time-inhomogeneous process?",
                "a": "The transition intensities $\\mu_{ij}(t)$ become functions of time $t$, giving differential equations with time-varying coefficients."
            },
            {
                "q": "Why is a time-inhomogeneous model more realistic for modelling human mortality across ages?",
                "a": "Mortality rates genuinely vary systematically with age, which a constant-intensity model cannot capture."
            },
            {
                "q": "What is a 'duration-dependent' Markov process?",
                "a": "A process where transition intensities depend on how long the individual has already spent in their current state, not just age/time."
            },
            {
                "q": "Give an example of a real-world scenario where duration dependence matters.",
                "a": "A sickness model, where recovery probability might depend on how long someone has already been sick."
            },
            {
                "q": "How can duration dependence be incorporated into a Markov model while retaining a Markov structure?",
                "a": "By expanding the state space to include duration as part of the state, restoring the Markov property."
            },
            {
                "q": "What is a 'marriage model,' as an example of a Markov process application?",
                "a": "A model tracking transitions between single, married, widowed, and divorced states, used e.g. in pension valuations."
            },
            {
                "q": "How would you write the Kolmogorov equations for a model where intensities depend on both age and duration?",
                "a": "Include both age $t$ and duration $z$ as arguments, e.g. $\\mu_{ij}(t,z)$, within the differential equation framework."
            },
            {
                "q": "Why might sickness models need duration-dependent intensities specifically for the 'recovery' transition?",
                "a": "Recovery chance often changes systematically the longer someone has already been ill."
            },
            {
                "q": "How would you simulate a time-inhomogeneous Markov jump process?",
                "a": "Simulate holding times using the time-varying intensities applicable at each point, since exact exponential holding times only apply under time-homogeneity."
            },
            {
                "q": "What complicates solving the Kolmogorov equations for time-inhomogeneous models?",
                "a": "The equations no longer have simple constant-coefficient closed-form solutions in general, often requiring numerical methods."
            },
            {
                "q": "How does mortality projection relate to time-inhomogeneous Markov modelling?",
                "a": "Mortality projection explicitly models how mortality intensities change over calendar time, an application of time-inhomogeneous ideas."
            },
            {
                "q": "What data challenge arises when estimating duration-dependent transition intensities?",
                "a": "You need data broken down by both age/time and duration in state, requiring more granular (and often sparser) data."
            },
            {
                "q": "Why is understanding age- and duration-dependence important for health/income protection insurance?",
                "a": "Both age and time already spent claiming genuinely affect recovery probability, affecting reserving and pricing."
            },
            {
                "q": "How would a Markov jump process model be simulated as a tool for modelling more generally?",
                "a": "By repeatedly simulating individual paths according to the model's intensities, and aggregating results across many simulated paths."
            }
        ]
    },
    {
        "id": "m06",
        "title": "Survival models",
        "description": "Introduces the mathematical framework for modelling time until an event (e.g. death) as a random variable — survival function, force of mortality, and key relationships including Gompertz and Makeham's laws.",
        "cards": [
            {
                "q": "What is the survival function $_tp_x$ for a life aged $x$?",
                "a": "The probability that the life survives at least $t$ further years."
            },
            {
                "q": "What is the force of mortality $\\mu_x$?",
                "a": "The instantaneous rate of mortality at exact age $x$, defined so that $\\mu_x = -\\frac{d}{dx}\\ln S(x)$."
            },
            {
                "q": "How is the survival function related to the force of mortality via an integral?",
                "a": "$_tp_x = \\exp\\left(-\\int_0^t \\mu_{x+s}\\,ds\\right)$"
            },
            {
                "q": "What is the 'consistency condition' for random lifetime models across different starting ages?",
                "a": "$_{t+s}p_x = {_tp_x}\\cdot{_sp_{x+t}}$"
            },
            {
                "q": "What does Gompertz's law of mortality state?",
                "a": "The force of mortality increases exponentially with age: $\\mu_x = Bc^x$"
            },
            {
                "q": "What does Makeham's law of mortality state?",
                "a": "$\\mu_x = A + Bc^x$ — a constant background component plus an exponentially increasing component."
            },
            {
                "q": "What is the 'curtate future lifetime' $K_x$?",
                "a": "The integer number of complete future years lived by a life aged $x$ before death."
            },
            {
                "q": "What is the probability function of the curtate future lifetime $K_x$?",
                "a": "$P(K_x = k) = {_kp_x}\\cdot q_{x+k}$"
            },
            {
                "q": "What does $e_x$ (the 'curtate expectation of life') represent?",
                "a": "The expected number of complete future years lived by a life aged $x$."
            },
            {
                "q": "What does $\\overset{\\circ}{e}_x$ (the 'complete expectation of life') represent?",
                "a": "The expected complete future lifetime (not restricted to whole years) of a life aged $x$."
            },
            {
                "q": "What is the approximate relationship between $e_x$ and $\\overset{\\circ}{e}_x$?",
                "a": "$\\overset{\\circ}{e}_x \\approx e_x + 0.5$"
            },
            {
                "q": "What is the 'two-state model of a single decrement', and how does it compare to the random lifetime model?",
                "a": "A continuous-time Markov model with 'alive' and 'dead' states, mathematically equivalent to the random future lifetime model."
            },
            {
                "q": "How would you derive the variance of the curtate future lifetime $K_x$?",
                "a": "$\\text{Var}(K_x) = E[K_x^2] - (E[K_x])^2$, calculated from the probability function of $K_x$."
            },
            {
                "q": "Why is the force of mortality a more fundamental quantity than $q_x$ for continuous-time modelling?",
                "a": "It's defined instantaneously and directly links to the survival function via integration."
            },
            {
                "q": "What advantage does Makeham's law have over Gompertz's law?",
                "a": "The added constant term $A$ better captures a background level of mortality risk, improving fit especially at younger ages."
            }
        ]
    },
    {
        "id": "m07",
        "title": "Estimating the lifetime distribution",
        "description": "Covers non-parametric estimation of survival functions from censored data — the Kaplan-Meier and Nelson-Aalen estimators.",
        "cards": [
            {
                "q": "What is 'censoring' in survival data?",
                "a": "When the exact event time is not observed for some individuals, only that it occurred after (or before) a certain point."
            },
            {
                "q": "What is 'right censoring'?",
                "a": "When an individual is known to have survived to a certain point, but their exact time of death beyond that is unknown."
            },
            {
                "q": "Why can't the empirical survival function simply be estimated by the proportion still alive, when censoring is present?",
                "a": "Censored individuals' true event times are unknown, so excluding or misclassifying them would bias the estimate."
            },
            {
                "q": "What is the Kaplan-Meier (product-limit) estimator used for?",
                "a": "Estimating the survival function non-parametrically from censored data."
            },
            {
                "q": "What is the general form of the Kaplan-Meier estimator?",
                "a": "$\\hat{S}(t) = \\prod_{t_i \\le t} \\left(1 - \\frac{d_i}{n_i}\\right)$"
            },
            {
                "q": "What does $d_i$ represent in the Kaplan-Meier formula?",
                "a": "The number of deaths observed at time $t_i$."
            },
            {
                "q": "What does $n_i$ represent in the Kaplan-Meier formula?",
                "a": "The number of individuals still 'at risk' just before time $t_i$."
            },
            {
                "q": "What is the Nelson-Aalen estimator used for?",
                "a": "Estimating the cumulative hazard function non-parametrically from censored data."
            },
            {
                "q": "What is the general form of the Nelson-Aalen estimator?",
                "a": "$\\hat{H}(t) = \\sum_{t_i \\le t} \\frac{d_i}{n_i}$"
            },
            {
                "q": "How is the Nelson-Aalen estimator related to an alternative survival function estimate?",
                "a": "$\\hat{S}(t) = e^{-\\hat{H}(t)}$"
            },
            {
                "q": "How is the variance of the Kaplan-Meier estimator typically estimated?",
                "a": "Using Greenwood's formula, summing contributions from each observed death time."
            },
            {
                "q": "What happens to confidence in the Kaplan-Meier estimate as time increases beyond the range of most of the data?",
                "a": "It becomes less reliable (wider confidence intervals), since fewer individuals remain at risk."
            },
            {
                "q": "What do 'proportional hazards models' (like the Cox model) add beyond Kaplan-Meier/Nelson-Aalen?",
                "a": "They allow the hazard to depend on covariates, rather than just estimating a single overall survival curve."
            },
            {
                "q": "What is the Cox proportional hazards model's key structural assumption?",
                "a": "The hazard is the baseline hazard multiplied by a factor depending on covariates, constant (proportional) over time."
            },
            {
                "q": "Why is partial likelihood used to estimate the Cox model's coefficients, rather than full likelihood?",
                "a": "It allows estimation of covariate effects without needing to specify the unknown baseline hazard function."
            }
        ]
    },
    {
        "id": "m08",
        "title": "Proportional hazards models",
        "description": "Covers the Cox proportional hazards model for incorporating covariates into survival analysis, including partial likelihood estimation.",
        "cards": [
            {
                "q": "What is the general form of the Cox proportional hazards model?",
                "a": "$h_i(t) = h_0(t)\\exp(\\beta^T z_i)$, where $h_0(t)$ is the baseline hazard and $z_i$ are covariates."
            },
            {
                "q": "What does 'proportional hazards' mean?",
                "a": "The ratio of hazards between any two individuals with different covariates is constant over time."
            },
            {
                "q": "Why is the Cox model described as 'semi-parametric'?",
                "a": "Covariate effects are modelled parametrically, but the baseline hazard $h_0(t)$ is left unspecified."
            },
            {
                "q": "What is the 'partial likelihood' in the Cox model?",
                "a": "A likelihood based only on the order of events (and who was at risk), allowing estimation of $\\beta$ without specifying $h_0(t)$."
            },
            {
                "q": "What are 'ties' in the context of the Cox model's partial likelihood?",
                "a": "When two or more individuals experience the event at exactly the same observed time."
            },
            {
                "q": "What is the asymptotic distribution of the Cox model's partial likelihood estimator $\\hat\\beta$?",
                "a": "Approximately normal, for large samples, allowing standard hypothesis tests and confidence intervals."
            },
            {
                "q": "How would you interpret a positive coefficient $\\beta_j$ for a covariate in the Cox model?",
                "a": "An increase in that covariate is associated with a higher hazard, holding other covariates constant."
            },
            {
                "q": "How would you interpret $e^{\\beta_j}$ in the Cox model?",
                "a": "The 'hazard ratio' — the multiplicative change in hazard for a one-unit increase in $z_j$."
            },
            {
                "q": "What is a key assumption of the Cox model that should be checked in practice?",
                "a": "That the proportional hazards assumption actually holds — covariate effects don't change over time."
            },
            {
                "q": "How could a time-varying covariate effect be incorporated into an extended Cox model?",
                "a": "By including a time-dependent covariate or interaction term (covariate times a function of time)."
            },
            {
                "q": "What is the role of covariates in a proportional hazards model, compared with the basic survival model?",
                "a": "They allow the hazard to vary by individual characteristics, rather than assuming everyone shares the same survival distribution."
            },
            {
                "q": "Why might the Cox model be preferred over fitting a fully parametric survival model with covariates?",
                "a": "It avoids needing to correctly specify the baseline hazard's functional form."
            },
            {
                "q": "What data would you need to fit a Cox proportional hazards model?",
                "a": "Event/censoring times, censoring indicators, and covariate values for each individual."
            },
            {
                "q": "How does the Cox model use 'risk sets' in its partial likelihood construction?",
                "a": "At each event time, the risk set is used to compute the probability that the specific individual who failed did so, given everyone at risk."
            },
            {
                "q": "Why is understanding proportional hazards models valuable for pricing life or health insurance?",
                "a": "They allow risk factors to be incorporated directly into mortality/morbidity risk assessment, improving pricing accuracy."
            }
        ]
    },
    {
        "id": "m09",
        "title": "Exposed to risk",
        "description": "Covers how to estimate transition intensities from observed data using maximum likelihood, and the concept of 'central exposed to risk.'",
        "cards": [
            {
                "q": "What is the 'central exposed to risk'?",
                "a": "The total time individuals in a study were observed while in a particular state, used as the denominator in estimating transition rates."
            },
            {
                "q": "How is the maximum likelihood estimator of a constant transition intensity $\\mu$ calculated?",
                "a": "$\\hat\\mu = \\frac{\\text{observed number of transitions}}{\\text{total central exposed to risk}}$"
            },
            {
                "q": "What is the 'principle of correspondence'?",
                "a": "The requirement that the definition of exposure (denominator) must exactly match the definition of the events being counted (numerator)."
            },
            {
                "q": "Why is the principle of correspondence fundamentally important in exposed-to-risk calculations?",
                "a": "Mismatches between exposure and event definitions lead to systematically biased estimates."
            },
            {
                "q": "What is meant by 'dividing the data into homogeneous classes'?",
                "a": "Splitting the population into groups (e.g. by age, sex) believed to have similar transition intensities."
            },
            {
                "q": "What is the 'rate interval'?",
                "a": "The interval of time (typically one year) over which the transition intensity is assumed constant."
            },
            {
                "q": "What is the 'census approximation' method of estimating exposed to risk?",
                "a": "Approximating central exposed to risk using snapshot counts of the population at specific census points."
            },
            {
                "q": "What assumptions underlie the census approximation of waiting times?",
                "a": "That entries and exits are, on average, spread evenly over the period."
            },
            {
                "q": "How would you calculate a central exposed to risk given exact entry and exit dates?",
                "a": "Sum, for each individual, the exact amount of time they were observed within the relevant age/state band."
            },
            {
                "q": "What is the difference between 'exact age' and 'age nearest/last birthday' in exposure calculations?",
                "a": "Exact age uses precise age at any moment; age nearest/last birthday groups individuals into whole-year bands by convention."
            },
            {
                "q": "What is the asymptotic distribution of the maximum likelihood estimator of a transition intensity?",
                "a": "Approximately normal, with variance approximately inversely proportional to the total exposure."
            },
            {
                "q": "How does the amount of central exposed to risk affect the precision of an estimated transition intensity?",
                "a": "More exposure gives a more precise (lower variance) estimate."
            },
            {
                "q": "Why might subdividing data by age and sex reduce bias in transition intensity estimates?",
                "a": "Rates genuinely vary by age and sex, so pooling without subdivision distorts estimates for individual subgroups."
            },
            {
                "q": "What data would be needed to calculate an exact central exposed to risk for a mortality investigation?",
                "a": "Exact dates of entry into and exit from observation (and reason for exit) for each individual."
            },
            {
                "q": "Why is the 'waiting time' statistic important in the maximum likelihood framework for Markov jump processes?",
                "a": "It directly forms the denominator (central exposed to risk) in the maximum likelihood estimator of a transition intensity."
            }
        ]
    },
    {
        "id": "m10",
        "title": "Graduation and statistical tests",
        "description": "Covers statistical tests used to compare a set of crude mortality/transition estimates against a standard table, checking overall fit, bias, and smoothness.",
        "cards": [
            {
                "q": "What is 'graduation' of mortality estimates?",
                "a": "The process of smoothing crude (statistically noisy) estimates of mortality/transition rates."
            },
            {
                "q": "Why is graduation performed, rather than just using crude estimates directly?",
                "a": "Crude estimates from limited data are noisy; graduation produces smoother, more stable and plausible estimates."
            },
            {
                "q": "What does a chi-square test for 'overall fit' of graduated rates to crude data test?",
                "a": "Whether differences between crude and graduated rates are consistent with random sampling variation."
            },
            {
                "q": "What does a 'test for the presence of consistent bias' (e.g. the signs test) check?",
                "a": "Whether graduated rates are systematically too high or too low compared to the crude data."
            },
            {
                "q": "What is the 'signs test' used for?",
                "a": "Testing whether there's an unusually large or small number of positive/negative deviations, as a check for bias."
            },
            {
                "q": "What does a 'test for individual ages where the fit is poor' check?",
                "a": "Whether any specific ages show a standardised deviation large enough to suggest a poor fit at that age."
            },
            {
                "q": "What does the 'cumulative deviations test' check?",
                "a": "Whether deviations tend to accumulate in one direction rather than fluctuating randomly around zero."
            },
            {
                "q": "What does the 'grouping of signs test' (runs test) check?",
                "a": "Whether the pattern of positive/negative deviations shows too few or too many 'runs.'"
            },
            {
                "q": "What does 'the consistency of the shape' of crude estimates and a standard table refer to?",
                "a": "Whether the graduated curve follows the same overall pattern with age as the crude data, not just matching on average."
            },
            {
                "q": "What is a 'desirable property' of a set of graduated estimates, beyond just fitting the data well?",
                "a": "Smoothness — the rates should progress steadily with age, without implausible jumps."
            },
            {
                "q": "How would you test for 'smoothness' of a set of graduated estimates?",
                "a": "Examine higher-order differences of the graduated rates — a smooth progression should show small, steadily varying differences."
            },
            {
                "q": "How should tests for fit be amended when comparing crude estimates to a graduation of the same data?",
                "a": "Adjust degrees of freedom to account for the number of parameters used in the graduation."
            },
            {
                "q": "How should statistical tests be adjusted to allow for the presence of duplicate policies in the data?",
                "a": "Inflate the variance of the test statistic to reflect the reduced effective sample size."
            },
            {
                "q": "Why is a hypothesis test's distribution important to specify correctly for these graduation tests?",
                "a": "An incorrect distributional assumption gives an inaccurate critical value/p-value, leading to wrong conclusions."
            },
            {
                "q": "Why would an actuary compare crude estimates against both a standard table and a graduated version?",
                "a": "To assess both how well an in-house smoothed model fits and how the population compares to an external benchmark."
            }
        ]
    },
    {
        "id": "m11",
        "title": "Methods of graduation",
        "description": "Covers practical methods for graduating (smoothing) crude mortality/transition estimates — parametric formulae, reference to a standard table, and spline functions.",
        "cards": [
            {
                "q": "What is 'graduation by parametric formula'?",
                "a": "Fitting a mathematical formula (e.g. Gompertz or Makeham) with a small number of parameters to the crude data."
            },
            {
                "q": "Give one advantage of graduation by parametric formula.",
                "a": "A smooth, compact representation requiring few parameters, extrapolable beyond the data range."
            },
            {
                "q": "Give one disadvantage of graduation by parametric formula.",
                "a": "It might not be flexible enough to capture the true pattern across all ages."
            },
            {
                "q": "What is 'graduation by reference to a standard table'?",
                "a": "Adjusting a recognised standard mortality table (e.g. by a multiplicative factor) to fit the crude data."
            },
            {
                "q": "Give one advantage of graduation by reference to a standard table.",
                "a": "It leverages a well-established, smooth external table, requiring less data to calibrate."
            },
            {
                "q": "Give one disadvantage of graduation by reference to a standard table.",
                "a": "The standard table's shape may not match the true pattern of the population being studied."
            },
            {
                "q": "What is 'graduation using spline functions'?",
                "a": "Fitting piecewise polynomial functions, smoothly joined together, to the crude data."
            },
            {
                "q": "Give one advantage of graduation by spline functions.",
                "a": "More flexibility to capture the true shape of the data than a single global formula."
            },
            {
                "q": "Give one disadvantage of graduation by spline functions.",
                "a": "More complex, requiring more parameters, and may extrapolate poorly beyond the data range."
            },
            {
                "q": "Are candidates typically required to carry out a full graduation calculation in the exam?",
                "a": "No — the syllabus notes candidates are not required to carry out a graduation, but should understand the methods."
            },
            {
                "q": "How would you choose between these three graduation methods for a given data set?",
                "a": "Consider data volume/quality, whether a suitable standard table exists, and the robustness-vs-flexibility trade-off."
            },
            {
                "q": "Why might combining approaches (e.g. standard table plus a smooth adjustment) sometimes be used?",
                "a": "To get robustness from the standard table while still reflecting genuine differences in the specific population."
            },
            {
                "q": "How does the number of parameters used in a graduation method affect subsequent statistical tests?",
                "a": "More parameters typically reduces the effective degrees of freedom in goodness-of-fit tests."
            },
            {
                "q": "Why might an actuary prefer a graduation method with fewer parameters, all else equal?",
                "a": "Less prone to overfitting the noise in the crude data, and more parsimonious/interpretable."
            },
            {
                "q": "How does the balance between 'smoothness' and 'fit to the data' inform the choice of graduation method?",
                "a": "Too flexible risks overfitting noise; too rigid risks poor fit — the method should balance both."
            }
        ]
    },
    {
        "id": "m12",
        "title": "Mortality projection",
        "description": "Covers approaches to forecasting future mortality rates, including extrapolative, explanatory, and expectation-based approaches, and specific models like Lee-Carter.",
        "cards": [
            {
                "q": "What are the three broad approaches to forecasting future mortality mentioned in the syllabus?",
                "a": "Extrapolation, explanation (modelling underlying causes), and expectation (expert judgement)."
            },
            {
                "q": "What is an 'extrapolative' approach to mortality forecasting?",
                "a": "Projecting observed historical trends in mortality rates forward into the future."
            },
            {
                "q": "Give one advantage of extrapolative mortality forecasting methods.",
                "a": "Relatively simple, objective, and directly grounded in observed historical data."
            },
            {
                "q": "Give one disadvantage of extrapolative mortality forecasting methods.",
                "a": "They assume past trends continue, which may not hold given structural changes."
            },
            {
                "q": "What is the Lee-Carter model?",
                "a": "A statistical model decomposing log mortality into an age-specific pattern, a time-varying mortality index, and age-specific sensitivity to that index."
            },
            {
                "q": "What is the general structure of the Lee-Carter model?",
                "a": "$\\ln(m_{x,t}) = a_x + b_x k_t + \\epsilon_{x,t}$"
            },
            {
                "q": "How is the Lee-Carter model typically used for forecasting?",
                "a": "The time index $k_t$ is projected forward (often via a simple time series model), combined with fixed age effects."
            },
            {
                "q": "What is an 'age-period-cohort' model, as an extension beyond Lee-Carter?",
                "a": "A model that also allows for a cohort (year of birth) effect, capturing generation-specific mortality patterns."
            },
            {
                "q": "What is a '$p$-spline regression model' used for in mortality projection?",
                "a": "Smoothing and forecasting mortality surfaces using penalized spline techniques."
            },
            {
                "q": "What software-related skill does the syllabus specify for mortality projection models?",
                "a": "The ability to use an appropriate computer package to apply models like Lee-Carter to a real mortality data set."
            },
            {
                "q": "What is a major source of error in mortality forecasts?",
                "a": "Uncertainty in extrapolating trends that may not continue, and unforeseen future shocks or medical advances."
            },
            {
                "q": "Why is mortality projection important for pricing and reserving in annuity and pension business?",
                "a": "Future mortality improvements mean annuitants are expected to live longer, increasing the expected cost."
            },
            {
                "q": "What does 'explanation-based' mortality forecasting attempt to do, distinct from extrapolation?",
                "a": "Model the underlying causes/drivers of mortality change to forecast future rates based on those drivers."
            },
            {
                "q": "Why might different mortality forecasting approaches give materially different projections?",
                "a": "They rely on different assumptions, and mortality trends are inherently uncertain over longer horizons."
            },
            {
                "q": "What would cause an insurer/actuary to revise a Lee-Carter-based mortality forecast?",
                "a": "New data suggesting a change in the time index trend, or evidence of a structural break."
            }
        ]
    },
    {
        "id": "m13",
        "title": "Time Series 1",
        "description": "Introduces core concepts of time series modelling — stationarity, the backwards shift/difference operators, and the basic AR, MA, ARMA and ARIMA model families.",
        "cards": [
            {
                "q": "What does it mean for a time series to be 'stationary'?",
                "a": "Its statistical properties (mean, variance, autocovariance structure) don't change over time."
            },
            {
                "q": "What is meant by a series being '$I(0)$'?",
                "a": "The series is already stationary (integrated of order zero)."
            },
            {
                "q": "What is meant by a series being '$I(1)$'?",
                "a": "The series becomes stationary after taking first differences."
            },
            {
                "q": "What is the 'backwards shift operator' $B$?",
                "a": "An operator such that $BX_t = X_{t-1}$, shifting the series back by one period."
            },
            {
                "q": "What is the 'backwards difference operator'?",
                "a": "$\\nabla X_t = X_t - X_{t-1} = (1-B)X_t$"
            },
            {
                "q": "What is an autoregressive (AR) model?",
                "a": "A model expressing the current value as a linear function of its own past values, plus a random error term."
            },
            {
                "q": "What is a moving average (MA) model?",
                "a": "A model expressing the current value as a linear function of current and past random error (white noise) terms."
            },
            {
                "q": "What is an ARMA model?",
                "a": "A model combining both autoregressive and moving average components to describe a stationary time series."
            },
            {
                "q": "What is an ARIMA model?",
                "a": "An ARMA model applied to a differenced series, used to model non-stationary series that become stationary after differencing."
            },
            {
                "q": "What are the 'roots of the characteristic equation' used for in time series analysis?",
                "a": "Determining whether an AR (or ARMA) process is stationary — stationary if all roots lie outside the unit circle."
            },
            {
                "q": "What is a 'random walk'?",
                "a": "A time series where each value equals the previous value plus a random error term: $X_t = X_{t-1} + \\epsilon_t$"
            },
            {
                "q": "What is a 'random walk with drift'?",
                "a": "A random walk with an added constant term, giving a systematic trend: $X_t = X_{t-1} + c + \\epsilon_t$"
            },
            {
                "q": "Is a random walk stationary?",
                "a": "No — its variance grows over time, though its first differences are stationary."
            },
            {
                "q": "What is a 'multivariate autoregressive model'?",
                "a": "An extension of the AR model to several time series simultaneously, where each depends on past values of itself and the others."
            },
            {
                "q": "What does it mean for two (or more) time series to be 'cointegrated'?",
                "a": "Each is individually non-stationary, but a particular linear combination of them is stationary."
            }
        ]
    },
    {
        "id": "m14",
        "title": "Time Series 2",
        "description": "Covers applying time series models in practice — identification, estimation and diagnosis, forecasting, and applications to security prices and economic variables.",
        "cards": [
            {
                "q": "What does 'identification' mean in the Box-Jenkins approach to time series modelling?",
                "a": "Selecting an appropriate model structure based on the observed data's characteristics."
            },
            {
                "q": "What does 'estimation' mean in this context?",
                "a": "Fitting the chosen model's parameters to the observed data, typically via maximum likelihood or least squares."
            },
            {
                "q": "What does 'diagnosis' (diagnostic checking) mean in this context?",
                "a": "Checking whether the fitted model's residuals behave like white noise, validating model adequacy."
            },
            {
                "q": "What criteria might be used to choose between candidate time series models?",
                "a": "Information criteria (AIC, BIC), goodness of fit, and parsimony."
            },
            {
                "q": "What diagnostic tests might be applied to the residuals of a fitted time series model?",
                "a": "Tests for autocorrelation in the residuals, e.g. the Ljung-Box test."
            },
            {
                "q": "Give an example of a 'non-stationary, non-linear' time series model beyond the standard ARIMA family.",
                "a": "A GARCH model, allowing time-varying volatility, or a threshold/regime-switching model."
            },
            {
                "q": "How would a random walk model be applied to security prices?",
                "a": "Modelling the log price as a random walk, consistent with weak-form market efficiency."
            },
            {
                "q": "How would an autoregressive model be applied to an economic variable like inflation?",
                "a": "Modelling current inflation as depending on its own recent past values, capturing persistence."
            },
            {
                "q": "What is a 'deterministic forecast' using simple extrapolation?",
                "a": "A forecast projecting an identified pattern forward without incorporating the model's inherent random uncertainty."
            },
            {
                "q": "What is a 'moving average' forecasting/smoothing technique, distinct from the MA model?",
                "a": "Averaging recent observations to smooth out short-term fluctuations and estimate an underlying trend."
            },
            {
                "q": "What is 'seasonal adjustment,' and why might it be applied before analysis?",
                "a": "Removing a regular repeating seasonal pattern, so underlying trend/cyclical behaviour can be seen more clearly."
            },
            {
                "q": "How would you check whether a cointegrated model is appropriate for two economic time series?",
                "a": "Test each series for non-stationarity, then test whether a linear combination of them is stationary."
            },
            {
                "q": "Why might cointegrated models be useful for modelling pairs of related economic/financial series?",
                "a": "They capture a stable long-run equilibrium relationship even though each series individually wanders."
            },
            {
                "q": "How might a univariate time series with the Markov property be rearranged as a multivariate Markov model?",
                "a": "By including enough lagged values as additional 'state' variables."
            },
            {
                "q": "Why is diagnostic checking an essential final step in the time series modelling process?",
                "a": "A model with structured (non-white-noise) residuals suggests genuine patterns weren't captured, undermining forecasts."
            }
        ]
    },
    {
        "id": "m15",
        "title": "Loss distributions",
        "description": "Covers statistical distributions suitable for modelling individual and aggregate insurance losses, the effect of excesses/deductibles and reinsurance, and parameter estimation and goodness of fit.",
        "cards": [
            {
                "q": "What properties make a distribution suitable for modelling individual insurance losses?",
                "a": "Non-negative support, and typically a right-skewed shape — e.g. lognormal, gamma, or Pareto."
            },
            {
                "q": "What is an 'excess' (or 'deductible')?",
                "a": "An amount the policyholder bears themselves before the insurer pays anything on a claim."
            },
            {
                "q": "What is a 'retention limit'?",
                "a": "The maximum amount an insurer (or reinsurer) retains/pays, with any excess passed on."
            },
            {
                "q": "How does an excess of $d$ affect the distribution of amounts actually paid by the insurer?",
                "a": "The insurer pays the loss amount minus $d$, so the paid amount is truncated/shifted, conditional on the loss exceeding $d$."
            },
            {
                "q": "What is 'proportional reinsurance'?",
                "a": "A reinsurance arrangement where the reinsurer pays a fixed proportion of every claim, and receives the same proportion of premium."
            },
            {
                "q": "What is 'excess of loss reinsurance'?",
                "a": "A reinsurance arrangement where the reinsurer pays the amount of any claim exceeding a specified retention level."
            },
            {
                "q": "How would you calculate the distribution of claim amounts paid by the insurer under excess of loss reinsurance with retention $M$?",
                "a": "The insurer pays $\\min(X, M)$ for each claim of size $X$."
            },
            {
                "q": "How would you estimate parameters of a loss distribution using maximum likelihood, when data is incomplete (censored/truncated)?",
                "a": "Adjust the likelihood function to reflect the actual observation scheme, then maximise as usual."
            },
            {
                "q": "What is the 'method of moments' applied to loss distribution parameter estimation?",
                "a": "Equating sample moments of the observed losses to theoretical moments of the assumed distribution, solving for parameters."
            },
            {
                "q": "How would you assess 'goodness of fit' of a fitted loss distribution to a data set?",
                "a": "Using tests like chi-square goodness of fit, or graphical methods (comparing empirical and fitted CDFs)."
            },
            {
                "q": "Why might the choice of loss distribution matter significantly for reinsurance pricing?",
                "a": "Reinsurance often covers the tail, so assumed tail behaviour strongly affects the reinsurer's required premium."
            },
            {
                "q": "What is 'left truncation' of loss data, in the context of an excess?",
                "a": "Only losses exceeding the excess are recorded/observed at all, truncating the observable data from below."
            },
            {
                "q": "How does the presence of an excess complicate estimating the parameters of the ground-up loss distribution?",
                "a": "Only losses above the excess are observed, so estimation must account for truncation to recover the true parameters."
            },
            {
                "q": "What is the effect of applying both an excess and a reinsurance retention limit to a claim?",
                "a": "The insurer pays the claim amount between the excess and the retention limit."
            },
            {
                "q": "Why might an actuary calculate both mean and variance of insurer/reinsurer loss distributions under a reinsurance arrangement?",
                "a": "To understand not just expected cost, but also variability/risk each party bears, informing pricing."
            }
        ]
    },
    {
        "id": "m16",
        "title": "Extreme value theory",
        "description": "Introduces distributions and measures suitable for modelling the extreme tail (severity) of loss distributions, and how to compare their tail weight.",
        "cards": [
            {
                "q": "What is 'extreme value theory' (EVT) used for in an actuarial context?",
                "a": "Modelling the behaviour of extreme (very large) losses in the tail of a distribution."
            },
            {
                "q": "What is the 'generalised extreme value' (GEV) distribution?",
                "a": "A family of distributions describing the limiting distribution of the maximum of a large number of i.i.d. random variables."
            },
            {
                "q": "What is the 'generalised Pareto distribution' (GPD) used for in EVT?",
                "a": "Modelling the distribution of exceedances over a high threshold — the 'peaks over threshold' approach."
            },
            {
                "q": "What are the three types (domains of attraction) within the GEV family?",
                "a": "Gumbel, Fréchet, and (reversed) Weibull, corresponding to light-tailed, heavy-tailed, and bounded-tailed distributions."
            },
            {
                "q": "What is meant by a 'heavy-tailed' distribution?",
                "a": "A distribution where extreme values are relatively more likely compared to a light-tailed distribution."
            },
            {
                "q": "Give an example of a heavy-tailed distribution commonly used for modelling large losses.",
                "a": "The Pareto distribution."
            },
            {
                "q": "What is a common measure of 'tail weight' used to compare distributions?",
                "a": "The ratio of higher to lower moments, or examining the hazard rate's behaviour as $x \\to \\infty$."
            },
            {
                "q": "How does a decreasing hazard rate (as $x$ increases) relate to tail weight?",
                "a": "Associated with a heavier tail — large values remain relatively likely."
            },
            {
                "q": "How does an increasing hazard rate (as $x$ increases) relate to tail weight?",
                "a": "Associated with a lighter tail — extreme values become rarer more quickly."
            },
            {
                "q": "Why is comparing tail weight important when choosing a distribution for reinsurance pricing?",
                "a": "Underestimating tail weight could significantly understate the true risk for high-layer reinsurance."
            },
            {
                "q": "What is the 'peaks over threshold' approach in extreme value theory?",
                "a": "Modelling only exceedances above a chosen high threshold using the generalised Pareto distribution."
            },
            {
                "q": "What practical challenge arises from having limited historical data on extreme events?",
                "a": "Extreme events are rare, so little data is available to reliably estimate tail behaviour, leading to estimation uncertainty."
            },
            {
                "q": "How might you use extreme value theory to estimate a high quantile beyond the range of observed data?",
                "a": "Fit an appropriate extreme value distribution to the tail, then extrapolate using the fitted model."
            },
            {
                "q": "Why is extreme value theory particularly relevant for catastrophe risk modelling?",
                "a": "Catastrophic losses are by nature in the extreme tail, critical for solvency and reinsurance decisions."
            },
            {
                "q": "How does the choice of threshold in the peaks-over-threshold approach affect the resulting model?",
                "a": "Too low violates the theoretical justification; too high leaves too little data — a bias-variance trade-off."
            }
        ]
    },
    {
        "id": "m17",
        "title": "Copulas",
        "description": "Introduces copulas as a way of modelling the dependence structure between random variables separately from their marginal distributions, including the Gaussian copula and the Archimedean family.",
        "cards": [
            {
                "q": "What is a 'copula'?",
                "a": "A multivariate distribution function on $[0,1]^n$ that captures the dependence structure between random variables, separate from their marginals."
            },
            {
                "q": "What does Sklar's theorem state (conceptually)?",
                "a": "Any multivariate joint distribution can be decomposed into its marginal distributions and a copula describing dependence between them."
            },
            {
                "q": "Why is it useful to model dependence via a copula, separately from the marginals?",
                "a": "It allows flexible combination of any chosen marginals with any chosen dependence structure."
            },
            {
                "q": "What is 'concordance' between two random variables, loosely speaking?",
                "a": "A tendency for large values of one variable to be associated with large values of the other."
            },
            {
                "q": "What is 'tail dependence'?",
                "a": "The tendency for extreme values of two variables to occur together, more or less than average dependence would suggest."
            },
            {
                "q": "What is 'upper tail dependence'?",
                "a": "The tendency for both variables to take extremely high values simultaneously."
            },
            {
                "q": "What is 'lower tail dependence'?",
                "a": "The tendency for both variables to take extremely low values simultaneously."
            },
            {
                "q": "Why is tail dependence particularly important for actuarial risk modelling?",
                "a": "It captures whether extreme losses in different risks tend to occur together, critical for aggregate risk under stress."
            },
            {
                "q": "What is the Gaussian copula?",
                "a": "A copula derived from the multivariate normal distribution, characterised by a correlation matrix, with zero tail dependence."
            },
            {
                "q": "What is a key limitation of the Gaussian copula for modelling financial/insurance risk?",
                "a": "Its lack of tail dependence can understate simultaneous extreme events, implicated in the 2008 financial crisis."
            },
            {
                "q": "What is the 'Archimedean' family of copulas?",
                "a": "A class constructed from a generator function, including the Gumbel, Clayton, and Frank copulas, with varying tail dependence."
            },
            {
                "q": "How does the Clayton copula typically behave in terms of tail dependence?",
                "a": "It exhibits lower tail dependence but no upper tail dependence."
            },
            {
                "q": "How does the Gumbel copula typically behave in terms of tail dependence?",
                "a": "It exhibits upper tail dependence but no lower tail dependence."
            },
            {
                "q": "How would you select a copula suitable for modelling a particular pair of risks?",
                "a": "Consider the type of tail dependence expected, and choose a family whose properties match that expectation."
            },
            {
                "q": "Why might an insurer model the dependence between two lines of business using a copula?",
                "a": "Losses across lines are often correlated (e.g. a common event), and independence would understate aggregate risk."
            }
        ]
    },
    {
        "id": "m18",
        "title": "Reinsurance",
        "description": "Covers the main forms of reinsurance — proportional and excess of loss — and how they affect the distribution of claims retained by the insurer and ceded to the reinsurer.",
        "cards": [
            {
                "q": "What is 'reinsurance'?",
                "a": "Insurance purchased by an insurer to transfer part of its risk to another party (the reinsurer)."
            },
            {
                "q": "What is 'proportional reinsurance'?",
                "a": "An arrangement where the reinsurer receives a fixed proportion of premium and pays the same proportion of every claim."
            },
            {
                "q": "What is 'quota share' reinsurance?",
                "a": "A form of proportional reinsurance where the same fixed proportion applies to every policy in a defined portfolio."
            },
            {
                "q": "What is 'surplus' reinsurance?",
                "a": "A form of proportional reinsurance where the proportion ceded varies by policy, often based on risk size relative to the insurer's retention."
            },
            {
                "q": "What is 'excess of loss' (non-proportional) reinsurance?",
                "a": "An arrangement where the reinsurer pays the amount by which a claim exceeds a specified retention level."
            },
            {
                "q": "What is 'aggregate excess of loss' reinsurance?",
                "a": "A form of excess of loss reinsurance where the retention applies to total aggregate claims over a period."
            },
            {
                "q": "How does excess of loss reinsurance affect the insurer's retained claim amount for a claim of size $X$, with retention $M$?",
                "a": "The insurer retains $\\min(X,M)$; the reinsurer pays $\\max(X-M,0)$."
            },
            {
                "q": "How does proportional reinsurance (retained proportion $\\alpha$) affect the insurer's retained claim amount?",
                "a": "The insurer retains $\\alpha X$; the reinsurer pays $(1-\\alpha)X$."
            },
            {
                "q": "What is the effect of excess of loss reinsurance on the skewness of the insurer's retained aggregate claims?",
                "a": "It reduces skewness (and variance), removing the largest, most extreme individual claims."
            },
            {
                "q": "Why might an insurer choose excess of loss reinsurance over proportional reinsurance?",
                "a": "To specifically protect against large individual claims (tail risk), while retaining more premium/profit from smaller claims."
            },
            {
                "q": "How would you calculate the moments of claims paid by the insurer versus the reinsurer?",
                "a": "Apply the reinsurance transformation to the underlying claim distribution, and calculate the relevant moments."
            },
            {
                "q": "How does excess of loss reinsurance interact with a compound distribution model of aggregate claims?",
                "a": "It's applied at the individual claim severity level before aggregating, changing the severity feeding into the compound model."
            },
            {
                "q": "What is the effect on the reinsurer's claims of a very high retention level $M$?",
                "a": "Fewer claims exceed the retention, so the reinsurer pays out less frequently."
            },
            {
                "q": "Why might an insurer use a combination of both proportional and excess of loss reinsurance?",
                "a": "To get proportional risk/profit sharing plus specific protection against very large individual claims."
            },
            {
                "q": "How does reinsurance reduce an insurer's regulatory capital requirements, broadly speaking?",
                "a": "By transferring some of the variability/tail risk of claims, reducing the capital needed to support retained risk."
            }
        ]
    },
    {
        "id": "m19",
        "title": "Risk models 1",
        "description": "Introduces models for the number of claims (frequency) and total claim amounts (aggregate/compound distributions) arising from a portfolio of insurance risks.",
        "cards": [
            {
                "q": "What is the 'individual risk model' for total claims?",
                "a": "A model treating total claims as the sum of a fixed number of individual policies' claim amounts (each possibly zero)."
            },
            {
                "q": "What is the 'collective risk model' for total claims?",
                "a": "A model treating total claims as the sum of a random number of claims, each of random size — a compound distribution."
            },
            {
                "q": "What is a 'compound distribution'?",
                "a": "The distribution of $S = X_1 + X_2 + \\dots + X_N$, where $N$ (claim count) and each $X_i$ (claim size) are random, typically independent."
            },
            {
                "q": "What is a 'compound Poisson distribution'?",
                "a": "A compound distribution where the number of claims $N$ follows a Poisson distribution."
            },
            {
                "q": "What key result holds for the sum of independent compound Poisson random variables?",
                "a": "The sum is itself compound Poisson, with rate parameters and severity distributions combined appropriately."
            },
            {
                "q": "How is the mean of a compound distribution $S$ calculated (in terms of $N$ and $X$)?",
                "a": "$E[S] = E[N]\\cdot E[X]$"
            },
            {
                "q": "How is the variance of a compound distribution $S$ calculated?",
                "a": "$\\text{Var}(S) = E[N]\\text{Var}(X) + \\text{Var}(N)(E[X])^2$"
            },
            {
                "q": "What is the formula for the variance of a compound Poisson distribution, specifically?",
                "a": "$\\text{Var}(S) = \\lambda E[X^2]$"
            },
            {
                "q": "What is the coefficient of skewness used to describe about a compound distribution?",
                "a": "The asymmetry of the distribution — actuarial claim distributions are typically positively (right) skewed."
            },
            {
                "q": "What are the major simplifying assumptions typically underlying compound distribution models?",
                "a": "Individual claim amounts are i.i.d. and independent of the number of claims."
            },
            {
                "q": "What is a 'compound binomial' distribution?",
                "a": "A compound distribution where the number of claims $N$ follows a binomial distribution."
            },
            {
                "q": "What is a 'compound negative binomial' distribution, and why might it be used instead of compound Poisson?",
                "a": "$N$ follows a negative binomial; often used to model claim frequency showing overdispersion beyond what Poisson allows."
            },
            {
                "q": "How would excess of loss reinsurance be incorporated into a compound distribution model?",
                "a": "Apply the reinsurance transformation to the individual claim severity distribution before combining with the claim count distribution."
            },
            {
                "q": "Why is the compound Poisson distribution particularly mathematically convenient for actuarial applications?",
                "a": "Its additive property under independent sums and tractable moment formulas make combining risks/reinsurance easy."
            },
            {
                "q": "How would you calculate the probability that aggregate claims $S$ exceed a certain amount, in general?",
                "a": "Using the (often approximated, e.g. via simulation or recursion) distribution of $S$ derived from frequency and severity."
            }
        ]
    },
    {
        "id": "m20",
        "title": "Risk models 2",
        "description": "Extends risk model theory further — approximating aggregate claims distributions, and applying compound distribution results to reinsurance and portfolio risk assessment.",
        "cards": [
            {
                "q": "What is one common method for approximating the distribution of aggregate claims $S$ when an exact formula is intractable?",
                "a": "A normal approximation using the mean and variance of $S$, or simulation."
            },
            {
                "q": "Why might a normal approximation be poor for aggregate claims from a small or highly skewed portfolio?",
                "a": "Aggregate claims are often positively skewed, so a symmetric normal approximation can be inaccurate, especially in the tails."
            },
            {
                "q": "What is a translated gamma approximation used for?",
                "a": "A more accurate approximation to a skewed aggregate claims distribution than normal, matching the first three moments."
            },
            {
                "q": "How would simulation be used to estimate the distribution of aggregate claims?",
                "a": "Repeatedly simulate claim numbers and sizes, sum to get simulated aggregate claims, and use the empirical distribution."
            },
            {
                "q": "How does reinsurance affect the mean and variance of an insurer's retained aggregate claims?",
                "a": "It typically reduces both, since reinsurance removes some claim amount from the insurer's exposure."
            },
            {
                "q": "How would you calculate the reinsurer's expected aggregate claims under excess of loss reinsurance with retention $M$?",
                "a": "Apply $\\max(X-M,0)$ to the individual claim severity distribution, then combine with the claim frequency distribution."
            },
            {
                "q": "What effect does increasing the retention level $M$ have on the insurer's retained variance?",
                "a": "It increases the insurer's retained variance, though it also reduces the reinsurance premium cost."
            },
            {
                "q": "How might an insurer decide on an appropriate retention level for excess of loss reinsurance?",
                "a": "Balancing reinsurance premium cost against reduced retained risk/capital, informed by risk appetite."
            },
            {
                "q": "Why is understanding both frequency and severity distributions separately important, rather than just modelling aggregate claims?",
                "a": "Different risk mitigation tools act on severity (reinsurance) versus frequency (underwriting)."
            },
            {
                "q": "How would a change in claim frequency affect the aggregate claims distribution, holding severity fixed?",
                "a": "It shifts the mean and variance of $N$, correspondingly changing the mean and variance of $S$."
            },
            {
                "q": "What role does correlation between different risks/policies play in aggregate portfolio risk?",
                "a": "Positive correlation (e.g. from a common catastrophic event) increases variance beyond independent-claims assumptions."
            },
            {
                "q": "How might copulas be combined with risk models to assess portfolio-level risk?",
                "a": "By modelling dependence between lines of business, then combining with each line's aggregate claims distribution."
            },
            {
                "q": "Why might an insurer calculate risk measures like VaR or TailVaR on the aggregate claims distribution?",
                "a": "To quantify capital needed to withstand adverse claims experience at a given confidence level."
            },
            {
                "q": "How does the choice of severity distribution affect the accuracy of a normal approximation to aggregate claims?",
                "a": "A heavier-tailed severity makes aggregate claims more skewed, worsening the normal approximation."
            },
            {
                "q": "Why is risk model theory foundational to general insurance pricing and reserving work?",
                "a": "It provides the mathematical framework for quantifying claims cost and variability, underlying premiums, reserving and capital."
            }
        ]
    },
    {
        "id": "m21",
        "title": "Machine learning",
        "description": "Introduces elementary machine learning principles relevant to actuarial work — the bias-variance trade-off, cross-validation, regularisation, supervised/unsupervised learning, and evaluation metrics.",
        "cards": [
            {
                "q": "What is the 'bias-variance trade-off'?",
                "a": "The tension between a model's bias and variance — increasing complexity typically reduces bias but increases variance."
            },
            {
                "q": "How does model complexity typically relate to overfitting?",
                "a": "More complex/flexible models are more prone to overfitting — fitting noise rather than the true underlying pattern."
            },
            {
                "q": "What is 'cross-validation' used for?",
                "a": "Evaluating a model's performance on unseen data (and tuning hyperparameters) by repeatedly splitting into training/validation sets."
            },
            {
                "q": "How does k-fold cross-validation work?",
                "a": "Split into $k$ parts; train on $k-1$, validate on the remaining one, repeated $k$ times, then average results."
            },
            {
                "q": "What is 'regularisation' used for?",
                "a": "Reducing overfitting in highly parameterised models by penalising model complexity within the fitting process."
            },
            {
                "q": "Give two common types of regularisation.",
                "a": "Ridge regression (L2 penalty) and Lasso (L1 penalty, which can shrink some coefficients to exactly zero)."
            },
            {
                "q": "What is 'supervised learning'?",
                "a": "Machine learning where models are trained on data with known outcomes (labels), to predict outcomes for new data."
            },
            {
                "q": "What is 'unsupervised learning'?",
                "a": "Machine learning where models find structure/patterns in data without pre-labelled outcomes, e.g. clustering."
            },
            {
                "q": "What is 'precision' in evaluating a binary classifier?",
                "a": "Of the cases predicted positive, the proportion that are actually positive."
            },
            {
                "q": "What is 'recall' (sensitivity) in evaluating a binary classifier?",
                "a": "Of the actual positive cases, the proportion correctly predicted as positive."
            },
            {
                "q": "What is the '$F_1$ score'?",
                "a": "The harmonic mean of precision and recall, providing a single combined measure."
            },
            {
                "q": "What is a 'ROC curve' used for?",
                "a": "Visualising a classifier's performance across thresholds, plotting true positive rate against false positive rate."
            },
            {
                "q": "What is a 'confusion matrix'?",
                "a": "A table summarising a classifier's predictions versus actual outcomes."
            },
            {
                "q": "What is 'K-means clustering'?",
                "a": "An unsupervised technique partitioning data into $K$ groups by minimising within-cluster variation."
            },
            {
                "q": "How does principal component analysis (PCA) relate to its earlier mention in Data Analysis (CS1)?",
                "a": "Same underlying technique — reducing dimensionality by finding uncorrelated components — applied here for identifying latent structure or anomalies."
            }
        ]
    }
],
};

// SP8 General Insurance Pricing Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP8", {
  modules: [
      {
          "id": "m01",
          "title": "Insurance companies",
          "description": "How general insurance companies operate: why insurance exists, insurable risks, the insurance cycle of premiums, claims, reserves and investment, types of insurer (proprietary, mutual, captive, Lloyd's syndicates), and the main functions and stakeholders in a GI company.",
          "cards": [
              {
                  "q": "What makes a risk insurable?",
                  "a": "Independent exposures, a clear definition of loss, quantifiable probability and severity, no moral hazard or anti-selection beyond control, a premium affordable to the buyer, and an insurable interest.",
                  "explain": "Few real risks meet all conditions perfectly."
              },
              {
                  "q": "How does a general insurer make profit?",
                  "a": "Underwriting profit (premiums exceed claims and expenses) plus investment income on premiums and reserves held before claims are paid.",
                  "explain": "Long-tail business earns more investment income."
              },
              {
                  "q": "What is a proprietary insurer?",
                  "a": "An insurer owned by shareholders who receive profits and provide capital.",
                  "explain": "Contrast mutuals owned by policyholders."
              },
              {
                  "q": "What is a mutual insurer?",
                  "a": "An insurer owned by its policyholders, with profits retained or returned to members.",
                  "explain": "Limited ways to raise capital."
              },
              {
                  "q": "What is a captive insurer?",
                  "a": "An insurer owned by a non-insurance company to insure the parent's own risks.",
                  "explain": "Access to reinsurance, tax and cost benefits."
              },
              {
                  "q": "What are the main functions in a GI company?",
                  "a": "Underwriting, claims, actuarial (pricing, reserving, capital), finance, investment, reinsurance, risk management, compliance, distribution.",
                  "explain": "Actuaries interact with most."
              },
              {
                  "q": "What is the underwriting cycle?",
                  "a": "Recurring periods of soft (falling rates, loose terms) and hard (rising rates, tight terms) markets.",
                  "explain": "Driven by capacity and competition."
              },
              {
                  "q": "Why do insurers hold reserves?",
                  "a": "Claims are paid after premiums are received; reserves represent obligations for unexpired cover and outstanding claims.",
                  "explain": "Chapter 14 onwards."
              },
              {
                  "q": "What is the role of capital in a GI company?",
                  "a": "To absorb unexpected losses and meet regulatory requirements, supporting policyholder security.",
                  "explain": "Cost of capital is part of price."
              },
              {
                  "q": "What are the main stakeholders of an insurer?",
                  "a": "Policyholders, shareholders/members, regulators, brokers, reinsurers, employees, rating agencies, tax authorities.",
                  "explain": "Conflicting interests."
              },
              {
                  "q": "What is the difference between short-tail and long-tail business?",
                  "a": "Short-tail claims are reported and settled quickly (e.g. property); long-tail take years (e.g. liability).",
                  "explain": "Affects reserving and investment."
              },
              {
                  "q": "What is an MGA?",
                  "a": "A managing general agent — an intermediary with delegated authority to underwrite on an insurer's behalf.",
                  "explain": "Delegated authority risk."
              },
              {
                  "q": "How can an insurer's business plan affect actuarial work?",
                  "a": "Growth targets, product mix and capital constraints shape pricing, reserving and reinsurance decisions.",
                  "explain": "Actuaries support planning."
              },
              {
                  "q": "What are the main risks to a general insurer?",
                  "a": "Underwriting, reserving, catastrophe, market, credit (incl. reinsurance), operational, liquidity risks.",
                  "explain": "Chapter 11."
              },
              {
                  "q": "Why is investment income important in GI?",
                  "a": "It can allow underwriting losses to be sustained while remaining profitable overall.",
                  "explain": "Cash-flow underwriting in soft markets."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Insurance products – background",
          "description": "Background to general insurance products: how products are classified, perils and hazards, types of cover and policy features (excess, limits, deductibles), policy bases (losses occurring, claims made), and factors that affect claim frequency and severity.",
          "cards": [
              {
                  "q": "What is the difference between a peril and a hazard?",
                  "a": "A peril is the cause of loss (e.g. fire); a hazard is a factor increasing the likelihood or severity of loss (e.g. poor wiring).",
                  "explain": "Rating factors often measure hazards."
              },
              {
                  "q": "What is an excess (deductible)?",
                  "a": "The amount of each loss borne by the policyholder before the insurer pays.",
                  "explain": "Removes small claims and encourages care."
              },
              {
                  "q": "What is a policy limit?",
                  "a": "The maximum amount the insurer will pay per claim or in aggregate.",
                  "explain": "Caps exposure."
              },
              {
                  "q": "What is a losses-occurring basis?",
                  "a": "The policy covers losses that occur during the policy period, whenever reported.",
                  "explain": "Creates IBNR for long-tail classes."
              },
              {
                  "q": "What is a claims-made basis?",
                  "a": "The policy covers claims first made during the policy period, regardless of when the loss occurred (subject to retroactive date).",
                  "explain": "Reduces IBNR for the insurer."
              },
              {
                  "q": "What is first-party cover?",
                  "a": "Cover for the policyholder's own loss (e.g. property damage).",
                  "explain": "Short-tail usually."
              },
              {
                  "q": "What is third-party (liability) cover?",
                  "a": "Cover for the policyholder's legal liability to others.",
                  "explain": "Long-tail usually."
              },
              {
                  "q": "What is indemnity?",
                  "a": "Restoring the insured to the financial position they were in before the loss, no better.",
                  "explain": "Principle of property insurance."
              },
              {
                  "q": "What is 'new for old' cover?",
                  "a": "Replacement cost without deduction for wear and tear.",
                  "explain": "Beyond strict indemnity."
              },
              {
                  "q": "What is average (underinsurance) clause?",
                  "a": "Reduces claims proportionally if the sum insured is less than the value at risk.",
                  "explain": "Encourages adequate sums insured."
              },
              {
                  "q": "What is a franchise?",
                  "a": "A threshold below which nothing is paid but above which the whole loss is paid.",
                  "explain": "Contrast with a deductible."
              },
              {
                  "q": "What drives claim frequency?",
                  "a": "Exposure, hazards, policy terms, claimant behaviour, economic and legal conditions.",
                  "explain": "Rating factors."
              },
              {
                  "q": "What drives claim severity?",
                  "a": "Values at risk, inflation (economic, social, legal), policy limits and excesses.",
                  "explain": "Claims inflation."
              },
              {
                  "q": "What is exposure measure?",
                  "a": "A measure proportional to risk, e.g. vehicle-years, sum insured, payroll, turnover.",
                  "explain": "Basis for pricing."
              },
              {
                  "q": "What is social inflation?",
                  "a": "Increase in claim costs from changing legal and social attitudes (e.g. higher court awards).",
                  "explain": "Liability classes."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Insurance products – types",
          "description": "The main classes of general insurance — motor, household, commercial property, business interruption, employers' and public liability, professional indemnity, D&O, product liability, marine, aviation and transport, credit and surety, travel, pet, extended warranty, cyber — with their perils, claim characteristics and tail length.",
          "cards": [
              {
                  "q": "What are the main covers in private motor insurance?",
                  "a": "Third-party liability (compulsory), fire and theft, comprehensive (own damage).",
                  "explain": "Bodily injury drives long tail."
              },
              {
                  "q": "What does household insurance cover?",
                  "a": "Buildings and contents against perils like fire, flood, storm, theft, escape of water, often with accidental damage options.",
                  "explain": "Short-tail, catastrophe exposed."
              },
              {
                  "q": "What is business interruption insurance?",
                  "a": "Covers loss of profits following insured damage that disrupts business.",
                  "explain": "Indemnity period; linked to property damage."
              },
              {
                  "q": "What is employers' liability insurance?",
                  "a": "Covers employers' liability for injury or disease to employees.",
                  "explain": "Long-tail; latent disease claims."
              },
              {
                  "q": "What is public liability insurance?",
                  "a": "Covers liability to the public for injury or property damage.",
                  "explain": "Long-tail."
              },
              {
                  "q": "What is professional indemnity insurance?",
                  "a": "Covers professionals' liability for negligent advice or services.",
                  "explain": "Claims-made basis common."
              },
              {
                  "q": "What is D&O insurance?",
                  "a": "Covers directors and officers against claims for wrongful acts in managing a company.",
                  "explain": "Long-tail, volatile."
              },
              {
                  "q": "What is product liability insurance?",
                  "a": "Covers liability for injury or damage caused by products supplied.",
                  "explain": "Series claims possible."
              },
              {
                  "q": "What is marine hull insurance?",
                  "a": "Covers physical damage to ships.",
                  "explain": "Specialist market."
              },
              {
                  "q": "What is cargo insurance?",
                  "a": "Covers goods in transit.",
                  "explain": "Short-tail."
              },
              {
                  "q": "What is aviation insurance?",
                  "a": "Covers aircraft hull and liabilities.",
                  "explain": "High severity, low frequency."
              },
              {
                  "q": "What is credit insurance?",
                  "a": "Covers losses from non-payment of trade debts.",
                  "explain": "Correlated with economic cycle."
              },
              {
                  "q": "What is cyber insurance?",
                  "a": "Covers losses from cyber incidents: data breach costs, business interruption, liability, extortion.",
                  "explain": "Accumulation risk."
              },
              {
                  "q": "What is extended warranty insurance?",
                  "a": "Covers repair costs of goods after manufacturer's warranty expires.",
                  "explain": "Short-tail, high frequency."
              },
              {
                  "q": "Why does tail length matter by class?",
                  "a": "Long-tail classes have more reserving uncertainty, more investment income and more inflation exposure.",
                  "explain": "Reserving method choice."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Problem solving",
          "description": "An early problem-solving chapter: approaching SP7/SP8 exam questions on insurance products and companies — identifying perils, claim characteristics and stakeholders for unfamiliar products, and structuring answers.",
          "cards": [
              {
                  "q": "How should you analyse an unfamiliar GI product?",
                  "a": "Identify insured, perils, cover triggers, exposure measure, claim frequency and severity drivers, tail length, catastrophe exposure, and policy features.",
                  "explain": "Structured approach."
              },
              {
                  "q": "Which frameworks help generate points?",
                  "a": "Stakeholders, risks, products features, environment (PESTLE-style), control cycle.",
                  "explain": "Breadth."
              },
              {
                  "q": "How should marks guide answers?",
                  "a": "Roughly one point per half-mark to mark.",
                  "explain": "Breadth matters."
              },
              {
                  "q": "Why consider claims inflation in product questions?",
                  "a": "It affects both pricing and reserving.",
                  "explain": "Economic and social."
              },
              {
                  "q": "How do you identify catastrophe exposure?",
                  "a": "Look for correlated perils (weather, pandemic, cyber) affecting many policies.",
                  "explain": "Accumulation."
              },
              {
                  "q": "What makes a good exam answer?",
                  "a": "Relevant, specific points applied to the scenario.",
                  "explain": "Avoid generic lists."
              },
              {
                  "q": "How do you consider data availability?",
                  "a": "Ask what data would be needed and whether it exists for the product.",
                  "explain": "New products lack data."
              },
              {
                  "q": "How do you assess tail length?",
                  "a": "Consider reporting and settlement delays, liability vs property.",
                  "explain": "Reserving implications."
              },
              {
                  "q": "Why consider moral hazard?",
                  "a": "Policy design can change behaviour.",
                  "explain": "Excesses and conditions."
              },
              {
                  "q": "How should calculations be presented?",
                  "a": "Clear method and assumptions.",
                  "explain": "Method marks."
              },
              {
                  "q": "Why consider regulatory issues?",
                  "a": "Compulsory covers, conduct rules, capital.",
                  "explain": "Environment."
              },
              {
                  "q": "How do you consider reinsurance in product questions?",
                  "a": "Large or catastrophe exposures may require reinsurance.",
                  "explain": "Chapter 24."
              },
              {
                  "q": "How can examiners' reports help?",
                  "a": "Show typical weaknesses and marking.",
                  "explain": "Past papers."
              },
              {
                  "q": "Why think about the insurer's objectives?",
                  "a": "Profit, growth, risk appetite shape answers.",
                  "explain": "Context."
              },
              {
                  "q": "How to manage time?",
                  "a": "Allocate by marks.",
                  "explain": "Complete all parts."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Reinsurance products – background",
          "description": "Background to reinsurance: why insurers buy it, the parties and market, proportional versus non-proportional bases, treaty versus facultative placement, and key terms (retention, limit, layer, reinstatement, event, hours clause).",
          "cards": [
              {
                  "q": "Why do insurers buy reinsurance?",
                  "a": "Limit large and catastrophe losses, smooth results, increase capacity, provide capital relief, financial assistance, and access expertise.",
                  "explain": "Purposes."
              },
              {
                  "q": "What is proportional reinsurance?",
                  "a": "Reinsurer shares premiums and claims in fixed proportions.",
                  "explain": "Quota share, surplus."
              },
              {
                  "q": "What is non-proportional reinsurance?",
                  "a": "Reinsurer pays losses above a retention up to a limit.",
                  "explain": "Excess of loss, stop loss."
              },
              {
                  "q": "What is treaty reinsurance?",
                  "a": "An agreement covering a defined portfolio automatically.",
                  "explain": "Efficient."
              },
              {
                  "q": "What is facultative reinsurance?",
                  "a": "Reinsurance of individual risks, negotiated case by case.",
                  "explain": "Large or unusual risks."
              },
              {
                  "q": "What is a layer?",
                  "a": "A band of cover between a retention (deductible) and an upper limit.",
                  "explain": "E.g. £5m xs £5m."
              },
              {
                  "q": "What is a reinstatement?",
                  "a": "Restoring cover after a loss, often for an additional premium.",
                  "explain": "Catastrophe XoL."
              },
              {
                  "q": "What is an hours clause?",
                  "a": "Defines the period within which losses count as one event.",
                  "explain": "E.g. 72 hours for storms."
              },
              {
                  "q": "What is reinsurance commission?",
                  "a": "Payment from reinsurer to cedant under proportional treaties to cover acquisition costs.",
                  "explain": "Sliding scale possible."
              },
              {
                  "q": "What is retrocession?",
                  "a": "Reinsurance bought by reinsurers.",
                  "explain": "Spiral risk."
              },
              {
                  "q": "What is a cedant?",
                  "a": "The insurer ceding risk.",
                  "explain": "Reinsured."
              },
              {
                  "q": "What is burning cost?",
                  "a": "Historical losses to a layer relative to premium.",
                  "explain": "Pricing method."
              },
              {
                  "q": "What is a broker's role in reinsurance?",
                  "a": "Placing programmes, advice and market access.",
                  "explain": "Most placements via brokers."
              },
              {
                  "q": "What is capacity?",
                  "a": "The amount of risk the market or insurer can accept.",
                  "explain": "Reinsurance increases it."
              },
              {
                  "q": "What is counterparty risk in reinsurance?",
                  "a": "Reinsurer failing to pay.",
                  "explain": "Security assessment."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Reinsurance products – types",
          "description": "Types of reinsurance in detail: quota share, surplus, risk excess of loss, catastrophe excess of loss, aggregate excess of loss and stop loss, clash cover, financial and finite reinsurance, and alternative risk transfer (cat bonds, ILWs, sidecars, collateralised reinsurance).",
          "cards": [
              {
                  "q": "What is quota share reinsurance?",
                  "a": "A fixed percentage of every risk ceded.",
                  "explain": "Capital relief, new portfolios."
              },
              {
                  "q": "What is surplus reinsurance?",
                  "a": "Cedes the part of each risk above a retention line, up to a number of lines.",
                  "explain": "Varies proportion by risk size."
              },
              {
                  "q": "What is risk excess of loss?",
                  "a": "Covers losses on any one risk above a retention.",
                  "explain": "Protects against large individual losses."
              },
              {
                  "q": "What is catastrophe excess of loss?",
                  "a": "Covers aggregated losses from one event above a retention.",
                  "explain": "Natural catastrophes."
              },
              {
                  "q": "What is aggregate excess of loss?",
                  "a": "Covers total losses over a period above an aggregate retention.",
                  "explain": "Frequency protection."
              },
              {
                  "q": "What is stop loss?",
                  "a": "Covers loss ratio above a threshold.",
                  "explain": "Protects results."
              },
              {
                  "q": "What is clash cover?",
                  "a": "Covers multiple policies/classes affected by one event (e.g. liability).",
                  "explain": "Accumulation."
              },
              {
                  "q": "What is finite reinsurance?",
                  "a": "Limited risk transfer, emphasising financing and time value.",
                  "explain": "Regulatory scrutiny."
              },
              {
                  "q": "What is a catastrophe bond?",
                  "a": "Securitised catastrophe risk where investors lose principal on trigger.",
                  "explain": "Alternative capital."
              },
              {
                  "q": "What is an industry loss warranty?",
                  "a": "Pays if industry losses exceed a trigger.",
                  "explain": "Basis risk."
              },
              {
                  "q": "What is a sidecar?",
                  "a": "Vehicle letting investors share a reinsurer's portfolio.",
                  "explain": "Capacity."
              },
              {
                  "q": "What is collateralised reinsurance?",
                  "a": "Reinsurance fully backed by collateral from capital market investors.",
                  "explain": "Low credit risk."
              },
              {
                  "q": "What is an adverse development cover?",
                  "a": "Reinsurance of reserves against deterioration.",
                  "explain": "Legacy management."
              },
              {
                  "q": "What is a loss portfolio transfer?",
                  "a": "Transfer of existing claim liabilities to a reinsurer.",
                  "explain": "Finality."
              },
              {
                  "q": "What are trigger types in ART?",
                  "a": "Indemnity, industry index, parametric, modelled loss.",
                  "explain": "Trade-off basis risk vs moral hazard."
              }
          ]
      },
      {
          "id": "m07",
          "title": "General insurance markets",
          "description": "How GI markets are structured: personal, commercial and specialty lines, distribution (brokers, direct, aggregators, MGAs, bancassurance), the London and Lloyd's markets, reinsurance markets, and competitive dynamics and the underwriting cycle.",
          "cards": [
              {
                  "q": "What are personal lines?",
                  "a": "Insurance for individuals: motor, household, travel, pet.",
                  "explain": "High volume, commoditised."
              },
              {
                  "q": "What are commercial lines?",
                  "a": "Insurance for businesses: property, liability, BI.",
                  "explain": "Broker-led."
              },
              {
                  "q": "What are specialty lines?",
                  "a": "Complex or unusual risks: marine, aviation, energy, political risk.",
                  "explain": "London market."
              },
              {
                  "q": "What are the main distribution channels?",
                  "a": "Brokers, direct (phone/web), aggregators, MGAs, affinity, bancassurance.",
                  "explain": "Channel shapes pricing."
              },
              {
                  "q": "How have aggregators changed personal lines?",
                  "a": "Increased price competition, switching and price optimisation.",
                  "explain": "Regulatory interventions on pricing."
              },
              {
                  "q": "What is the London market?",
                  "a": "Specialty and wholesale insurance and reinsurance centred on Lloyd's and London companies.",
                  "explain": "Subscription market."
              },
              {
                  "q": "What is a subscription market?",
                  "a": "Several insurers each take a share of a risk, led by a lead underwriter.",
                  "explain": "Lloyd's model."
              },
              {
                  "q": "What drives the underwriting cycle?",
                  "a": "Capital inflows/outflows, catastrophe losses, reserve releases, investment returns, competition.",
                  "explain": "Soft and hard markets."
              },
              {
                  "q": "What is market capacity?",
                  "a": "Total capital available to write risk.",
                  "explain": "Affects price."
              },
              {
                  "q": "How do reinsurance markets affect primary markets?",
                  "a": "Reinsurance cost and availability feed into primary pricing and capacity.",
                  "explain": "Hard reinsurance markets."
              },
              {
                  "q": "What is a delegated authority arrangement?",
                  "a": "Coverholders/MGAs underwriting on behalf of insurers.",
                  "explain": "Oversight needed."
              },
              {
                  "q": "How does competition affect profitability?",
                  "a": "Soft markets reduce premium adequacy.",
                  "explain": "Pricing discipline."
              },
              {
                  "q": "What are barriers to entry in GI?",
                  "a": "Capital requirements, regulation, data, distribution, brand.",
                  "explain": "Lower in some lines."
              },
              {
                  "q": "What is the role of insurance brokers?",
                  "a": "Advising clients, placing risks, negotiating terms.",
                  "explain": "Commission or fees."
              },
              {
                  "q": "What is market consolidation?",
                  "a": "Mergers reducing number of insurers.",
                  "explain": "Economies of scale."
              }
          ]
      },
      {
          "id": "m08",
          "title": "External environment",
          "description": "The external environment for general insurers: legal and legislative changes, regulation and conduct, taxation, economic conditions and inflation, social and demographic trends, technology, climate change and emerging risks, and their effects on claims, pricing and reserving.",
          "cards": [
              {
                  "q": "How can legal changes affect GI claims?",
                  "a": "Changes in liability law, court awards, discount rates for personal injury (e.g. Ogden rate) can increase claims retrospectively.",
                  "explain": "Reserving uncertainty."
              },
              {
                  "q": "What is the Ogden discount rate?",
                  "a": "The rate used in the UK to calculate lump sum personal injury awards; lower rates increase awards.",
                  "explain": "Big effect on motor/EL reserves."
              },
              {
                  "q": "How does economic inflation affect GI?",
                  "a": "Increases claim costs (repairs, wages) and reserves.",
                  "explain": "Claims inflation."
              },
              {
                  "q": "How can recessions affect GI?",
                  "a": "Fraud and some claims rise (e.g. theft, credit), exposures fall.",
                  "explain": "Economic cycle."
              },
              {
                  "q": "How does technology affect GI?",
                  "a": "Telematics, data analytics, autonomous vehicles, cyber risks.",
                  "explain": "New risks and pricing."
              },
              {
                  "q": "How does climate change affect GI?",
                  "a": "More frequent/severe weather events, changing flood risk, transition risks.",
                  "explain": "Catastrophe modelling."
              },
              {
                  "q": "What are emerging risks?",
                  "a": "New or changing risks with uncertain effects (e.g. cyber, PFAS, AI liability).",
                  "explain": "Monitoring."
              },
              {
                  "q": "How do conduct regulations affect GI?",
                  "a": "Pricing practices rules (e.g. banning price walking), fair value, claims handling standards.",
                  "explain": "Profit impact."
              },
              {
                  "q": "How does taxation affect GI?",
                  "a": "Insurance premium tax, corporation tax, reserve taxation.",
                  "explain": "Pricing."
              },
              {
                  "q": "How do social trends affect claims?",
                  "a": "Claims culture, compensation expectations, litigation funding.",
                  "explain": "Social inflation."
              },
              {
                  "q": "How does demography affect GI?",
                  "a": "Ageing population, urbanisation, changing household structures.",
                  "explain": "Exposure changes."
              },
              {
                  "q": "What is PESTLE?",
                  "a": "Political, economic, social, technological, legal, environmental analysis.",
                  "explain": "Framework."
              },
              {
                  "q": "How can government schemes affect GI?",
                  "a": "Flood Re, terrorism pools, compulsory covers.",
                  "explain": "Market structure."
              },
              {
                  "q": "How can pandemics affect GI?",
                  "a": "Business interruption, event cancellation, travel claims; reduced motor claims.",
                  "explain": "COVID-19 BI test case."
              },
              {
                  "q": "Why monitor the environment?",
                  "a": "Changes affect pricing and reserving assumptions.",
                  "explain": "Control cycle."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Risk and uncertainty",
          "description": "Risks faced by a general insurer and sources of uncertainty: underwriting, reserving, catastrophe, market, credit, liquidity, operational, strategic and regulatory risks; model, parameter and process uncertainty; and how they affect pricing, reserving and capital.",
          "cards": [
              {
                  "q": "List the main risks for a general insurer.",
                  "a": "Underwriting (premium), reserving, catastrophe, market, credit (reinsurance, brokers), liquidity, operational, strategic, regulatory/legal, reputational.",
                  "explain": "Risk categories."
              },
              {
                  "q": "What is premium (underwriting) risk?",
                  "a": "Risk that future claims on business written exceed premiums.",
                  "explain": "Pricing adequacy."
              },
              {
                  "q": "What is reserving risk?",
                  "a": "Risk that reserves for existing claims prove inadequate.",
                  "explain": "Deterioration."
              },
              {
                  "q": "What is catastrophe risk?",
                  "a": "Risk of large losses from single events affecting many policies.",
                  "explain": "Accumulation."
              },
              {
                  "q": "What is process uncertainty?",
                  "a": "Randomness in outcomes even if the model and parameters are correct.",
                  "explain": "Irreducible."
              },
              {
                  "q": "What is parameter uncertainty?",
                  "a": "Uncertainty in estimated parameters.",
                  "explain": "Data limitations."
              },
              {
                  "q": "What is model uncertainty?",
                  "a": "Risk the model structure is wrong.",
                  "explain": "Model risk."
              },
              {
                  "q": "What is credit risk for a GI insurer?",
                  "a": "Reinsurer default, broker default, bond default.",
                  "explain": "Security."
              },
              {
                  "q": "What is liquidity risk?",
                  "a": "Inability to pay claims when due without loss.",
                  "explain": "Catastrophes."
              },
              {
                  "q": "What is operational risk?",
                  "a": "Losses from failed processes, people, systems or external events.",
                  "explain": "Cyber, fraud."
              },
              {
                  "q": "What is systemic risk in GI?",
                  "a": "Risks affecting many insurers simultaneously (e.g. legal changes, pandemics).",
                  "explain": "Correlation."
              },
              {
                  "q": "What is anti-selection in GI?",
                  "a": "Higher risks buying cover disproportionately.",
                  "explain": "Rating and underwriting."
              },
              {
                  "q": "What is moral hazard?",
                  "a": "Behaviour changes because of insurance.",
                  "explain": "Excesses."
              },
              {
                  "q": "What is uncertainty vs risk?",
                  "a": "Risk can be quantified; uncertainty cannot reliably.",
                  "explain": "Judgement."
              },
              {
                  "q": "How can uncertainty be communicated?",
                  "a": "Ranges, scenarios, sensitivities.",
                  "explain": "Stakeholders."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Data",
          "description": "Data for general insurance actuarial work: sources and types (policy, claims, exposure, external), data requirements for pricing and reserving, data quality checks and reconciliations, grouping and homogeneity, and dealing with data problems.",
          "cards": [
              {
                  "q": "What policy data is needed?",
                  "a": "Policy details, exposure, rating factors, premiums, cover details, dates.",
                  "explain": "Pricing."
              },
              {
                  "q": "What claims data is needed?",
                  "a": "Dates of loss, report, settlement; paid and incurred amounts; claim status; cause; reserves.",
                  "explain": "Reserving triangles."
              },
              {
                  "q": "What external data can be used?",
                  "a": "Industry data, reinsurer data, census, weather, credit, geocoding.",
                  "explain": "Enhance models."
              },
              {
                  "q": "What data checks should be performed?",
                  "a": "Reconciliation to accounts, consistency checks, reasonableness, duplicates, missing values, comparisons with previous data.",
                  "explain": "Quality."
              },
              {
                  "q": "Why group data into homogeneous cells?",
                  "a": "To ensure similar risks are analysed together while keeping credible volumes.",
                  "explain": "Balance."
              },
              {
                  "q": "What is the trade-off in data grouping?",
                  "a": "More granular = homogeneous but less credible; coarser = credible but heterogeneous.",
                  "explain": "Judgement."
              },
              {
                  "q": "What problems arise with claims data?",
                  "a": "Changes in reserving practice, reopened claims, large claims, coding changes.",
                  "explain": "Distort triangles."
              },
              {
                  "q": "How do case reserving changes affect data?",
                  "a": "Incurred triangles show changed development patterns.",
                  "explain": "Adjust or use paid data."
              },
              {
                  "q": "What is exposure data?",
                  "a": "Measures of risk volume (e.g. vehicle-years).",
                  "explain": "Frequency calculation."
              },
              {
                  "q": "Why reconcile data to accounts?",
                  "a": "Ensures completeness and consistency.",
                  "explain": "Control."
              },
              {
                  "q": "How are large claims handled in data?",
                  "a": "Separated or capped to avoid distorting results.",
                  "explain": "Large loss loading."
              },
              {
                  "q": "What is data granularity?",
                  "a": "Level of detail (individual vs aggregated).",
                  "explain": "Model choice."
              },
              {
                  "q": "What are data protection considerations?",
                  "a": "Legal limits on using personal data.",
                  "explain": "GDPR."
              },
              {
                  "q": "How can poor data be mitigated?",
                  "a": "Industry data, prudence, reviewing sources, improving systems.",
                  "explain": "Disclose limitations."
              },
              {
                  "q": "Why is data important for capital modelling?",
                  "a": "Parameter estimation for distributions and dependencies.",
                  "explain": "Tail data scarce."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Aggregate claim distribution models",
          "description": "Modelling aggregate claims: the collective risk model with compound Poisson, negative binomial and binomial frequencies, moments of aggregate claims, severity distributions (lognormal, gamma, Pareto, Weibull), approximations and simulation, and the effect of reinsurance and deductibles.",
          "cards": [
              {
                  "q": "What is the collective risk model?",
                  "a": "$S = X_1 + \\dots + X_N$ with $N$ the claim count and $X_i$ iid severities independent of $N$.",
                  "explain": "Basis of aggregate modelling."
              },
              {
                  "q": "What is the mean of a compound distribution?",
                  "a": "$E[S] = E[N]\\,E[X]$.",
                  "explain": "Frequency × severity."
              },
              {
                  "q": "What is the variance of a compound distribution?",
                  "a": "$\\mathrm{Var}(S) = E[N]\\mathrm{Var}(X) + \\mathrm{Var}(N)(E[X])^2$.",
                  "explain": "Both sources."
              },
              {
                  "q": "What is the variance of a compound Poisson?",
                  "a": "$\\lambda E[X^2]$.",
                  "explain": "Simplification."
              },
              {
                  "q": "When is the negative binomial used for frequency?",
                  "a": "When claim counts are over-dispersed (variance > mean), e.g. heterogeneous risks.",
                  "explain": "Poisson-gamma mixture."
              },
              {
                  "q": "Which severity distributions have heavy tails?",
                  "a": "Pareto, lognormal (moderately), Burr.",
                  "explain": "Large losses."
              },
              {
                  "q": "How can aggregate distributions be computed?",
                  "a": "Panjer recursion, Fast Fourier Transform, simulation, normal/translated gamma approximations.",
                  "explain": "Methods."
              },
              {
                  "q": "What is Panjer recursion?",
                  "a": "A recursive method for compound distributions with (a,b,0) frequency distributions and discrete severities.",
                  "explain": "Exact computation."
              },
              {
                  "q": "How does a deductible affect frequency and severity?",
                  "a": "Reduces number of claims (only those above deductible) and changes severity to the excess.",
                  "explain": "Truncation."
              },
              {
                  "q": "How does an XoL layer affect severity?",
                  "a": "Claims to layer are min(max(X − d, 0), l).",
                  "explain": "Layer loss cost."
              },
              {
                  "q": "What is the limited expected value?",
                  "a": "$E[\\min(X, u)]$ — used to price limits and layers.",
                  "explain": "ILFs."
              },
              {
                  "q": "What is the method of moments?",
                  "a": "Fitting parameters by matching sample moments.",
                  "explain": "Simple fitting."
              },
              {
                  "q": "What is maximum likelihood estimation?",
                  "a": "Choosing parameters that maximise the likelihood of the data.",
                  "explain": "Preferred for fitting."
              },
              {
                  "q": "How is goodness of fit tested?",
                  "a": "Q-Q plots, chi-square, Kolmogorov-Smirnov, AIC.",
                  "explain": "Validation."
              },
              {
                  "q": "Why simulate aggregate claims?",
                  "a": "Flexibility for complex structures (reinsurance, dependencies).",
                  "explain": "Monte Carlo."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Rating methodologies and bases",
          "description": "Building up premiums: risk premium (pure premium), office premium loadings for expenses, commission, profit and contingencies, investment income, reinsurance and capital costs, and the main rating methodologies (burning cost, frequency-severity, GLMs, exposure rating).",
          "cards": [
              {
                  "q": "What is the risk (pure) premium?",
                  "a": "Expected claims cost per unit of exposure.",
                  "explain": "Frequency × severity."
              },
              {
                  "q": "What loadings are added to reach the office premium?",
                  "a": "Expenses (fixed and variable), commission, profit, contingency margins, reinsurance costs, cost of capital, less investment income credit.",
                  "explain": "Build-up."
              },
              {
                  "q": "Give the standard office premium formula.",
                  "a": "$P = \\frac{RP + F}{1 - c - v - p}$ with fixed expense $F$, commission $c$, variable expense $v$, profit $p$ as proportions of premium.",
                  "explain": "Solve for P."
              },
              {
                  "q": "How is investment income allowed for?",
                  "a": "Discounting expected claims payments or crediting interest on premiums held.",
                  "explain": "More for long-tail."
              },
              {
                  "q": "What is the burning cost approach?",
                  "a": "Historical claims (adjusted) divided by historical exposure.",
                  "explain": "Simple, needs stable data."
              },
              {
                  "q": "What is frequency-severity rating?",
                  "a": "Modelling claim frequency and average severity separately, then combining.",
                  "explain": "Different trends."
              },
              {
                  "q": "What is exposure rating?",
                  "a": "Pricing using benchmark loss curves applied to exposure (e.g. sums insured).",
                  "explain": "Chapter 15."
              },
              {
                  "q": "What are rating factors?",
                  "a": "Characteristics used to vary premium by risk (e.g. age, location, vehicle).",
                  "explain": "Must be predictive and permitted."
              },
              {
                  "q": "What is a base rate?",
                  "a": "Rate for the reference risk, adjusted by relativities.",
                  "explain": "Multiplicative tariff."
              },
              {
                  "q": "What is the rating basis?",
                  "a": "The set of assumptions and methodology for pricing.",
                  "explain": "Documented."
              },
              {
                  "q": "How is cost of capital included?",
                  "a": "Required return on capital allocated to the policy.",
                  "explain": "Capital intensive lines."
              },
              {
                  "q": "What is contingency loading?",
                  "a": "Margin for uncertainty in estimates.",
                  "explain": "Prudence."
              },
              {
                  "q": "How is reinsurance cost allocated?",
                  "a": "Net cost of reinsurance allocated to classes/policies.",
                  "explain": "Chapter 13."
              },
              {
                  "q": "What is a technical price?",
                  "a": "Price derived from actuarial analysis before commercial adjustment.",
                  "explain": "Contrast with market price."
              },
              {
                  "q": "Why might the final premium differ from technical price?",
                  "a": "Competition, strategy, customer lifetime value, regulation.",
                  "explain": "Commercial."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Further considerations when rating",
          "description": "Other factors in setting premiums: competition and the underwriting cycle, marketing and distribution, regulation and fairness, reinsurance, capital, anti-selection, customer behaviour and lifetime value, and monitoring the adequacy of rates.",
          "cards": [
              {
                  "q": "How does competition affect rating?",
                  "a": "Market prices constrain premiums; insurers may accept lower margins.",
                  "explain": "Cycle."
              },
              {
                  "q": "How does the underwriting cycle affect rating?",
                  "a": "Soft markets push rates down; hard markets allow increases.",
                  "explain": "Monitor adequacy."
              },
              {
                  "q": "What is anti-selection in rating?",
                  "a": "If an insurer's rates are too low for some risks relative to competitors, it attracts those risks.",
                  "explain": "Rate segmentation."
              },
              {
                  "q": "How can regulation constrain rating?",
                  "a": "Banned factors (e.g. gender), fair value and pricing practice rules.",
                  "explain": "Compliance."
              },
              {
                  "q": "What was the UK price walking ban?",
                  "a": "Renewal prices for home and motor cannot exceed equivalent new business prices (from 2022).",
                  "explain": "FCA rules."
              },
              {
                  "q": "How does distribution affect rating?",
                  "a": "Commission and channel-specific experience.",
                  "explain": "Aggregators."
              },
              {
                  "q": "What is customer lifetime value?",
                  "a": "Expected profit over a customer's relationship including renewals.",
                  "explain": "Pricing strategy."
              },
              {
                  "q": "What is price elasticity?",
                  "a": "Sensitivity of demand or retention to price changes.",
                  "explain": "Demand modelling."
              },
              {
                  "q": "How can reinsurance affect rating?",
                  "a": "Cost and availability of reinsurance feeds into price.",
                  "explain": "Capacity."
              },
              {
                  "q": "What is portfolio management?",
                  "a": "Adjusting rates by segment to achieve target mix.",
                  "explain": "Strategy."
              },
              {
                  "q": "How can inflation be allowed for?",
                  "a": "Projecting claims costs to the period of cover.",
                  "explain": "Trending."
              },
              {
                  "q": "What is the effect of large claim loading?",
                  "a": "Spreading cost of large claims across the portfolio.",
                  "explain": "Stability."
              },
              {
                  "q": "How can underwriting judgement modify rates?",
                  "a": "Schedule rating, debits/credits for risk features.",
                  "explain": "Commercial lines."
              },
              {
                  "q": "How do expenses vary by channel and size?",
                  "a": "Fixed costs matter more for small policies.",
                  "explain": "Rating structure."
              },
              {
                  "q": "Why monitor rate adequacy?",
                  "a": "To ensure rates keep pace with claims trends.",
                  "explain": "Rate monitoring."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Rating using frequency-severity and burning cost approaches",
          "description": "Experience rating with burning cost and frequency-severity methods: adjusting historical data for inflation, development (IBNR), exposure changes, policy changes and large losses, projecting to the rating period, and strengths and weaknesses of each approach.",
          "cards": [
              {
                  "q": "What adjustments are made to historical claims in burning cost?",
                  "a": "Inflate to rating period, develop to ultimate, adjust for exposure and policy changes, treat large claims.",
                  "explain": "As-if data."
              },
              {
                  "q": "How is claims inflation applied?",
                  "a": "Trend each claim from its occurrence date to the midpoint of the future policy period.",
                  "explain": "Compound inflation."
              },
              {
                  "q": "Why develop claims to ultimate?",
                  "a": "Recent years are immature and understate ultimate costs.",
                  "explain": "IBNR."
              },
              {
                  "q": "How are exposure changes allowed for?",
                  "a": "Divide by exposure to get rates per unit.",
                  "explain": "Normalisation."
              },
              {
                  "q": "How are policy changes (e.g. deductibles) allowed for?",
                  "a": "Restate historical claims as if under current terms.",
                  "explain": "As-if."
              },
              {
                  "q": "What is the advantage of frequency-severity over burning cost?",
                  "a": "Separates drivers, allowing different trends and better modelling of layers.",
                  "explain": "More insight."
              },
              {
                  "q": "When is burning cost appropriate?",
                  "a": "Stable portfolios with credible data.",
                  "explain": "Simplicity."
              },
              {
                  "q": "What are weaknesses of burning cost?",
                  "a": "Sensitive to large claims, data limitations, changes in portfolio.",
                  "explain": "Volatility."
              },
              {
                  "q": "How are large claims treated?",
                  "a": "Capped and a large loss loading added, or modelled separately.",
                  "explain": "Stability."
              },
              {
                  "q": "What is the midpoint of exposure?",
                  "a": "Average date of loss in the future policy period, used for trending.",
                  "explain": "Inflation."
              },
              {
                  "q": "How are frequency trends estimated?",
                  "a": "Regression of claim frequency over time.",
                  "explain": "Trends."
              },
              {
                  "q": "How are severity trends estimated?",
                  "a": "Regression of average cost, economic indices.",
                  "explain": "Inflation."
              },
              {
                  "q": "What is on-levelling premium?",
                  "a": "Restating historical premium at current rates.",
                  "explain": "Loss ratio approach."
              },
              {
                  "q": "What is the loss ratio method?",
                  "a": "New rate change = projected loss ratio / target loss ratio − 1.",
                  "explain": "Rate adjustment."
              },
              {
                  "q": "Why credibility-weight experience?",
                  "a": "Small portfolios' experience is volatile.",
                  "explain": "Chapter 18."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Rating using original loss curves",
          "description": "Exposure rating with original loss curves: exposure curves (e.g. MBBEFD/Swiss Re curves) for property per-risk layers, increased limit factors for liability, their derivation and use when experience data is sparse, and limitations.",
          "cards": [
              {
                  "q": "What is an exposure curve?",
                  "a": "A curve giving the proportion of expected loss below a deductible as a fraction of sum insured (or MPL).",
                  "explain": "Property."
              },
              {
                  "q": "How are exposure curves used to price layers?",
                  "a": "The share of expected loss in a layer = G(upper/SI) − G(lower/SI), applied to risk premium.",
                  "explain": "Per risk."
              },
              {
                  "q": "What are MBBEFD curves?",
                  "a": "A parametric family of exposure curves (Bernegger) including Swiss Re curves.",
                  "explain": "Industry standard."
              },
              {
                  "q": "What is an increased limit factor (ILF)?",
                  "a": "Ratio of expected losses at a higher limit to a basic limit.",
                  "explain": "Liability pricing."
              },
              {
                  "q": "How are ILFs derived?",
                  "a": "From limited expected values of severity distributions: ILF(u) = E[min(X,u)]/E[min(X,b)].",
                  "explain": "Severity."
              },
              {
                  "q": "When is exposure rating useful?",
                  "a": "When experience data is sparse or not relevant (new layers).",
                  "explain": "Benchmarks."
              },
              {
                  "q": "What data is needed for exposure rating?",
                  "a": "Risk profile: sums insured/limits, premiums, occupancy.",
                  "explain": "Bordereaux."
              },
              {
                  "q": "What are limitations of exposure curves?",
                  "a": "Generic curves may not match the portfolio; sum insured quality issues.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is the difference between exposure and experience rating?",
                  "a": "Exposure uses benchmark curves applied to current exposure; experience uses the portfolio's own history.",
                  "explain": "Blend."
              },
              {
                  "q": "What is the MPL?",
                  "a": "Maximum possible loss for a risk.",
                  "explain": "Denominator for curves."
              },
              {
                  "q": "Why do curves depend on risk type?",
                  "a": "Different loss severity profiles (e.g. residential vs industrial).",
                  "explain": "Curve choice."
              },
              {
                  "q": "How are ILFs used in primary liability?",
                  "a": "Pricing higher limits relative to basic limit premium.",
                  "explain": "Limits pricing."
              },
              {
                  "q": "What is the risk profile?",
                  "a": "Distribution of risks by sum insured band.",
                  "explain": "Input."
              },
              {
                  "q": "How can exposure and experience rates be combined?",
                  "a": "Credibility weighting.",
                  "explain": "Chapter 18."
              },
              {
                  "q": "What is first loss scale?",
                  "a": "Another name for exposure curve.",
                  "explain": "Terminology."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Generalised linear modelling and machine learning",
          "description": "GLMs for pricing: exponential family distributions, link functions, offsets and weights, frequency (Poisson), severity (gamma), Tweedie pure premium models, model selection and diagnostics; and machine learning methods (GBMs, random forests, neural networks), overfitting, validation and interpretability.",
          "cards": [
              {
                  "q": "What are the components of a GLM?",
                  "a": "A distribution from the exponential family, a linear predictor $\\eta = X\\beta$, and a link function $g(\\mu) = \\eta$.",
                  "explain": "Generalises linear regression."
              },
              {
                  "q": "Which GLM is used for claim frequency?",
                  "a": "Poisson with log link and log exposure offset.",
                  "explain": "Multiplicative."
              },
              {
                  "q": "Which GLM is used for severity?",
                  "a": "Gamma with log link, weighted by claim count.",
                  "explain": "Multiplicative."
              },
              {
                  "q": "What is a Tweedie model?",
                  "a": "Compound Poisson-gamma distribution modelling pure premium directly.",
                  "explain": "Power parameter 1–2."
              },
              {
                  "q": "What is an offset?",
                  "a": "A term with fixed coefficient 1, e.g. log(exposure).",
                  "explain": "Rates per exposure."
              },
              {
                  "q": "How are GLM factors assessed?",
                  "a": "Significance tests, deviance, AIC/BIC, consistency over time, parameter standard errors.",
                  "explain": "Model selection."
              },
              {
                  "q": "What is deviance?",
                  "a": "A goodness-of-fit measure comparing the model to a saturated model.",
                  "explain": "Nested model tests."
              },
              {
                  "q": "What are interaction terms?",
                  "a": "Terms allowing one factor's effect to depend on another.",
                  "explain": "E.g. age × vehicle."
              },
              {
                  "q": "What is a gradient boosting machine?",
                  "a": "An ensemble of decision trees fitted sequentially to residuals.",
                  "explain": "High predictive power."
              },
              {
                  "q": "What is overfitting?",
                  "a": "Model captures noise rather than signal, performing poorly on new data.",
                  "explain": "Validation data."
              },
              {
                  "q": "How is overfitting avoided?",
                  "a": "Hold-out and cross-validation, regularisation, parsimony.",
                  "explain": "Out-of-sample testing."
              },
              {
                  "q": "What is regularisation?",
                  "a": "Penalising model complexity (lasso, ridge).",
                  "explain": "Stability."
              },
              {
                  "q": "Why is interpretability important?",
                  "a": "Regulators, underwriters and customers need to understand price drivers; fairness concerns.",
                  "explain": "GLMs more transparent."
              },
              {
                  "q": "How can ML models be explained?",
                  "a": "Partial dependence plots, SHAP values, feature importance.",
                  "explain": "Explainability tools."
              },
              {
                  "q": "What are fairness concerns with ML pricing?",
                  "a": "Proxy discrimination via correlated variables.",
                  "explain": "Regulatory scrutiny."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Use of multivariate models in pricing",
          "description": "Using multivariate models in practice: data preparation, factor selection and grouping, smoothing, spatial and vehicle classifications, combining frequency and severity models, building the tariff, demand and retention models, and price optimisation within regulatory limits.",
          "cards": [
              {
                  "q": "Why use multivariate models rather than one-way analysis?",
                  "a": "One-way analysis ignores correlations between factors, double-counting effects.",
                  "explain": "GLMs adjust simultaneously."
              },
              {
                  "q": "How are frequency and severity models combined?",
                  "a": "Multiply fitted relativities to produce pure premium relativities.",
                  "explain": "Or Tweedie."
              },
              {
                  "q": "What is factor grouping?",
                  "a": "Combining levels with similar effects to improve credibility.",
                  "explain": "Parsimony."
              },
              {
                  "q": "What is smoothing?",
                  "a": "Fitting curves to ordered factors (e.g. age) to avoid erratic relativities.",
                  "explain": "Polynomials, splines."
              },
              {
                  "q": "How is postcode handled?",
                  "a": "Spatial smoothing or clustering into risk zones.",
                  "explain": "Geographic rating."
              },
              {
                  "q": "What is a vehicle classification?",
                  "a": "Grouping vehicles by risk (e.g. group rating).",
                  "explain": "Motor."
              },
              {
                  "q": "How is the tariff built?",
                  "a": "Base rate × relativities, adjusted to hit target average premium.",
                  "explain": "Implementation."
              },
              {
                  "q": "What is a demand (conversion) model?",
                  "a": "Predicts probability of a quote converting to a sale given price.",
                  "explain": "Price optimisation."
              },
              {
                  "q": "What is a retention model?",
                  "a": "Predicts probability of renewal given price change.",
                  "explain": "Elasticity."
              },
              {
                  "q": "What is price optimisation?",
                  "a": "Setting prices to maximise objectives given cost and demand models.",
                  "explain": "Regulatory constraints."
              },
              {
                  "q": "What constraints apply to optimisation?",
                  "a": "Fairness rules, price walking bans, rate change caps.",
                  "explain": "FCA."
              },
              {
                  "q": "How are models validated?",
                  "a": "Hold-out tests, lift charts, Gini coefficients, actual vs expected.",
                  "explain": "Performance."
              },
              {
                  "q": "What is a lift chart?",
                  "a": "Compares predicted vs actual by predicted risk band.",
                  "explain": "Discrimination power."
              },
              {
                  "q": "Why cap rate changes?",
                  "a": "Avoid customer shock and retention losses.",
                  "explain": "Implementation."
              },
              {
                  "q": "How are external data sources used?",
                  "a": "Enrich models (credit, telematics, geodata).",
                  "explain": "Data."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Credibility theory",
          "description": "Credibility in pricing: limited fluctuation (full and partial credibility), Bühlmann and Bühlmann-Straub empirical Bayes credibility, Bayesian interpretation, and applications to experience rating, reinsurance and blending exposure and experience rates.",
          "cards": [
              {
                  "q": "What is credibility?",
                  "a": "The weight given to a risk's own experience versus a prior/collective estimate.",
                  "explain": "$Z \\times$ own + $(1-Z) \\times$ collective."
              },
              {
                  "q": "What is limited fluctuation credibility?",
                  "a": "Full credibility if claim count exceeds a standard so estimates are within a tolerance with given probability; partial credibility via square-root rule.",
                  "explain": "Classical approach."
              },
              {
                  "q": "What is the square-root rule?",
                  "a": "$Z = \\sqrt{n / n_F}$ for partial credibility.",
                  "explain": "Limited fluctuation."
              },
              {
                  "q": "What is Bühlmann credibility?",
                  "a": "$Z = \\frac{n}{n + k}$ with $k = \\frac{E[s^2(\\theta)]}{\\mathrm{Var}[m(\\theta)]}$.",
                  "explain": "Empirical Bayes."
              },
              {
                  "q": "What is Bühlmann-Straub?",
                  "a": "Extension allowing different exposure volumes across years.",
                  "explain": "Weights."
              },
              {
                  "q": "What does k represent?",
                  "a": "Ratio of expected process variance to variance of hypothetical means.",
                  "explain": "Heterogeneity."
              },
              {
                  "q": "When does Z approach 1?",
                  "a": "Large volumes of data or high heterogeneity between risks.",
                  "explain": "Own experience dominates."
              },
              {
                  "q": "What is the Bayesian interpretation?",
                  "a": "Credibility estimate equals posterior mean for certain conjugate models (e.g. Poisson-gamma).",
                  "explain": "Exact credibility."
              },
              {
                  "q": "How is credibility used in experience rating?",
                  "a": "Blending group experience with book rates.",
                  "explain": "Group schemes."
              },
              {
                  "q": "How is credibility used in reinsurance pricing?",
                  "a": "Blending experience and exposure rates.",
                  "explain": "Layers."
              },
              {
                  "q": "What are limitations of credibility?",
                  "a": "Parameter estimation, assumes stable risks, subjectivity.",
                  "explain": "Judgement."
              },
              {
                  "q": "Worked example: n=3 years, k=6. Z?",
                  "a": "$Z = 3/(3+6) = 1/3$.",
                  "explain": "Arithmetic check."
              },
              {
                  "q": "What is the collective premium?",
                  "a": "The mean for the whole portfolio.",
                  "explain": "Prior estimate."
              },
              {
                  "q": "How does exposure volume affect credibility?",
                  "a": "More exposure gives higher Z.",
                  "explain": "Bühlmann-Straub."
              },
              {
                  "q": "What is the effect of heterogeneity on credibility?",
                  "a": "More heterogeneity increases Z since collective is less informative.",
                  "explain": "Variance of means."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Actuarial investigations",
          "description": "Pricing-related actuarial investigations: rate monitoring, portfolio and profitability analysis, renewal and new business analysis, claims trend studies, reviewing rating structures, and monitoring the effectiveness of pricing changes.",
          "cards": [
              {
                  "q": "What is rate monitoring?",
                  "a": "Measuring changes in price per unit of exposure on renewing business, adjusted for terms.",
                  "explain": "Market cycle."
              },
              {
                  "q": "What is a portfolio profitability analysis?",
                  "a": "Comparing actual loss ratios and profitability by segment.",
                  "explain": "Rating review."
              },
              {
                  "q": "Why analyse new business versus renewals?",
                  "a": "Different experience and selection effects.",
                  "explain": "Anti-selection."
              },
              {
                  "q": "What is a claims trend study?",
                  "a": "Estimating frequency and severity trends over time.",
                  "explain": "Inflation input."
              },
              {
                  "q": "How are pricing changes monitored?",
                  "a": "Comparing actual volumes, mix, retention and loss ratios with expectations.",
                  "explain": "Feedback."
              },
              {
                  "q": "What is mix analysis?",
                  "a": "Understanding changes in portfolio composition.",
                  "explain": "Average premium changes."
              },
              {
                  "q": "Why investigate retention rates?",
                  "a": "Price elasticity and customer behaviour.",
                  "explain": "Retention models."
              },
              {
                  "q": "What is an actual vs expected analysis in pricing?",
                  "a": "Comparing actual claims with those predicted by the rating model.",
                  "explain": "Model monitoring."
              },
              {
                  "q": "How can underwriters' input help?",
                  "a": "Explaining anomalies and changes in risk.",
                  "explain": "Qualitative."
              },
              {
                  "q": "What is a rate adequacy review?",
                  "a": "Assessing whether rates cover expected costs and profit.",
                  "explain": "Periodic."
              },
              {
                  "q": "What is a competitor analysis?",
                  "a": "Comparing prices with competitors.",
                  "explain": "Market positioning."
              },
              {
                  "q": "How are large losses investigated?",
                  "a": "Individually, for causes and pricing implications.",
                  "explain": "Underwriting feedback."
              },
              {
                  "q": "Why monitor conversion rates?",
                  "a": "Indicates competitiveness.",
                  "explain": "Demand."
              },
              {
                  "q": "What is a loss ratio analysis by channel?",
                  "a": "Identifies profitable distribution channels.",
                  "explain": "Strategy."
              },
              {
                  "q": "How should findings be communicated?",
                  "a": "Clear recommendations with supporting analysis.",
                  "explain": "TAS."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Reinsurance pricing",
          "description": "Pricing reinsurance: proportional treaty pricing (commission, loss ratios), experience rating of XoL layers (as-if burning cost with trending and development), exposure rating and ILFs, catastrophe XoL pricing with cat models, rate on line and payback, reinstatements and loadings.",
          "cards": [
              {
                  "q": "How is proportional reinsurance priced?",
                  "a": "Mainly by setting ceding commission, based on expected loss ratio and reinsurer margin.",
                  "explain": "Sliding scales."
              },
              {
                  "q": "How is an XoL layer experience-rated?",
                  "a": "Trend and develop historical large claims, apply layer terms, divide by exposure (as-if burning cost).",
                  "explain": "Large claims data."
              },
              {
                  "q": "Why does inflation leverage affect XoL layers?",
                  "a": "Claims inflation pushes more losses into and through layers, so layer costs grow faster than inflation.",
                  "explain": "Leveraging effect."
              },
              {
                  "q": "How is exposure rating used for XoL?",
                  "a": "Apply exposure curves or ILFs to the risk profile.",
                  "explain": "Sparse data."
              },
              {
                  "q": "How is cat XoL priced?",
                  "a": "Using cat model EP curves to compute expected layer loss plus loadings.",
                  "explain": "Model uncertainty."
              },
              {
                  "q": "What is rate on line?",
                  "a": "Reinsurance premium / layer limit.",
                  "explain": "Market metric."
              },
              {
                  "q": "What is payback period?",
                  "a": "Limit / premium — years of premium to pay for one full loss.",
                  "explain": "Inverse of ROL."
              },
              {
                  "q": "How do reinstatements affect pricing?",
                  "a": "Reinstatement premiums reduce net cost; free or paid reinstatements affect expected premium.",
                  "explain": "Adjust."
              },
              {
                  "q": "What loadings are added to reinsurance risk premium?",
                  "a": "Expenses, brokerage, cost of capital, uncertainty.",
                  "explain": "Build-up."
              },
              {
                  "q": "How is credibility used in reinsurance pricing?",
                  "a": "Blend experience and exposure results.",
                  "explain": "Chapter 18."
              },
              {
                  "q": "What is an as-if loss?",
                  "a": "Historical loss adjusted to current conditions.",
                  "explain": "Experience rating."
              },
              {
                  "q": "What is a Pareto severity for layers?",
                  "a": "Common heavy-tailed fit for large losses.",
                  "explain": "Layer pricing."
              },
              {
                  "q": "What is aggregate deductible pricing?",
                  "a": "Modelling aggregate losses with simulation.",
                  "explain": "Complex terms."
              },
              {
                  "q": "How do market conditions affect reinsurance pricing?",
                  "a": "Capacity, recent catastrophes, capital inflows.",
                  "explain": "Cycle."
              },
              {
                  "q": "What data is needed for reinsurance pricing?",
                  "a": "Large loss listings, risk profiles, premium history, exposure data.",
                  "explain": "Submission."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Use of catastrophe models",
          "description": "Catastrophe models in pricing: hazard, vulnerability and financial modules, event loss tables, exceedance probability curves (OEP and AEP), average annual loss and PMLs, model uncertainty and non-modelled perils, and using model output in primary and reinsurance pricing.",
          "cards": [
              {
                  "q": "What are the modules of a catastrophe model?",
                  "a": "Hazard (event catalogue), vulnerability (damage functions), financial (policy terms).",
                  "explain": "Structure."
              },
              {
                  "q": "What is an event loss table?",
                  "a": "Events with annual rates and modelled losses.",
                  "explain": "Model output."
              },
              {
                  "q": "What is the average annual loss (AAL)?",
                  "a": "Expected annual catastrophe loss.",
                  "explain": "Technical cat load."
              },
              {
                  "q": "What is an OEP curve?",
                  "a": "Occurrence exceedance probability — probability the largest event loss in a year exceeds a value.",
                  "explain": "Per-occurrence covers."
              },
              {
                  "q": "What is an AEP curve?",
                  "a": "Aggregate exceedance probability — probability total annual losses exceed a value.",
                  "explain": "Aggregate covers."
              },
              {
                  "q": "What is a PML?",
                  "a": "Probable maximum loss at a return period (e.g. 1-in-200).",
                  "explain": "Capital and limits."
              },
              {
                  "q": "How is cat model output used in primary pricing?",
                  "a": "Cat load per policy based on location AAL plus risk margin.",
                  "explain": "Property pricing."
              },
              {
                  "q": "How is cat model output used in reinsurance pricing?",
                  "a": "Expected layer losses and volatility from event losses.",
                  "explain": "Cat XoL."
              },
              {
                  "q": "What is model uncertainty in cat modelling?",
                  "a": "Different vendor models give different results; secondary uncertainty.",
                  "explain": "Blend or adjust."
              },
              {
                  "q": "What are non-modelled perils?",
                  "a": "Perils or regions not covered by models; need loadings.",
                  "explain": "E.g. some floods."
              },
              {
                  "q": "What data quality issues affect cat models?",
                  "a": "Location accuracy, construction details, sums insured.",
                  "explain": "Garbage in."
              },
              {
                  "q": "What is secondary uncertainty?",
                  "a": "Uncertainty in loss given an event.",
                  "explain": "Vulnerability."
              },
              {
                  "q": "How does climate change affect cat models?",
                  "a": "Historical catalogues may understate current risk.",
                  "explain": "Adjustments."
              },
              {
                  "q": "What is demand surge?",
                  "a": "Increase in repair costs after large events.",
                  "explain": "Loss amplification."
              },
              {
                  "q": "Why not rely solely on cat models?",
                  "a": "Model risk, data issues; combine with experience and judgement.",
                  "explain": "Blending."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Principal terms",
          "description": "Key SP8 terminology — pricing, credibility, GLM, reinsurance and catastrophe modelling terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'risk premium'.",
                  "a": "Expected claims cost per exposure unit.",
                  "explain": "Pricing."
              },
              {
                  "q": "Define 'burning cost'.",
                  "a": "Historical adjusted claims per exposure.",
                  "explain": "Experience rating."
              },
              {
                  "q": "Define 'ILF'.",
                  "a": "Increased limit factor.",
                  "explain": "Liability pricing."
              },
              {
                  "q": "Define 'exposure curve'.",
                  "a": "Proportion of loss below a deductible as fraction of SI.",
                  "explain": "Property XoL."
              },
              {
                  "q": "Define 'credibility factor'.",
                  "a": "Weight given to own experience.",
                  "explain": "Z."
              },
              {
                  "q": "Define 'Tweedie distribution'.",
                  "a": "Compound Poisson-gamma for pure premium.",
                  "explain": "GLMs."
              },
              {
                  "q": "Define 'offset'.",
                  "a": "Fixed-coefficient term in a GLM.",
                  "explain": "Exposure."
              },
              {
                  "q": "Define 'rate on line'.",
                  "a": "Premium divided by layer limit.",
                  "explain": "Reinsurance."
              },
              {
                  "q": "Define 'AAL'.",
                  "a": "Average annual loss.",
                  "explain": "Cat models."
              },
              {
                  "q": "Define 'OEP'.",
                  "a": "Occurrence exceedance probability.",
                  "explain": "Cat models."
              },
              {
                  "q": "Define 'price elasticity'.",
                  "a": "Responsiveness of demand to price.",
                  "explain": "Optimisation."
              },
              {
                  "q": "Define 'as-if claims'.",
                  "a": "Historical claims restated to current terms.",
                  "explain": "Experience rating."
              },
              {
                  "q": "Define 'office premium'.",
                  "a": "Premium including all loadings.",
                  "explain": "Pricing."
              },
              {
                  "q": "Define 'on-levelling'.",
                  "a": "Restating premium at current rates.",
                  "explain": "Loss ratios."
              },
              {
                  "q": "Define 'large loss loading'.",
                  "a": "Allowance for capped large claims.",
                  "explain": "Stability."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp8-q1",
      title: "Premium components and gross premium calculation",
      modules: "Modules 12, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A rating actuary estimates a pure risk premium of £320 for a given risk. The rating basis includes an expense loading of 20% of gross premium and a profit margin loading of 8% of gross premium. Calculate the required gross premium.",
          answer:
            "Setting gross premium P such that P &times; (1 &minus; 0.20 &minus; 0.08) = £320 gives P = £320 / 0.72 = £444.44 (to the nearest penny).",
          note: "Arithmetic check: 320/(1-0.20-0.08)=444.44. Full marks require setting up the equation explicitly, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the pure risk premium must be calculated before the expense and profit margin loadings can meaningfully be added.",
          answer:
            "The pure risk premium represents the genuine expected cost of claims alone; since expenses and profit margin are typically expressed as loadings <em>on top</em> of this underlying risk cost, the pure risk premium must be estimated first as the foundational building block the rest of the premium structure is built upon.",
          note: "A strong answer explains the foundational/sequential relationship, not just names the components.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why an insurer might reasonably allow for investment income when setting this rating basis, and how this could affect the calculation in part (i).",
          answer:
            "Since premiums are typically received before claims are eventually paid, the insurer earns genuine investment income on this float in the intervening period, so a fully sound rating basis may reasonably allow for this genuine investment income as an offset reducing the required premium loading — in this case, potentially reducing the profit margin loading needed below 8%, since some of the required return would already come from investment income on the premium float.",
          note: "A strong answer explains the genuine mechanism (investment income on premium float) and how it could offset the calculated loading.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the pure risk premium calculation should combine claim frequency and severity, rather than being estimated as a single aggregate figure.",
          answer:
            "The basic rating methodology estimates expected claims cost as the product of claim frequency (the expected number of claims) and claim severity (the expected average cost per claim), since these two components can be driven by different underlying factors and understanding them separately provides more actionable insight than a single combined figure.",
          note: "This connects directly to the frequency-times-severity decomposition theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q2",
      title: "The burning cost approach",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A large commercial risk had total historical claims of £2,400,000 over a period with total exposure of 12,000 exposure units. An inflation/trend factor of 1.05 is assumed to project this experience forward to the future policy period. Using the burning cost approach, calculate the historical burning cost rate and the projected burning cost rate.",
          answer:
            "Historical burning cost = £2,400,000 / 12,000 = £200.00 per exposure unit. Projected burning cost = £200.00 &times; 1.05 = £210.00 per exposure unit.",
          note: "Arithmetic check: 2,400,000/12,000=200.00; 200.00×1.05=210.00.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the burning cost approach might be well-suited to rating this large commercial risk, given its limited own claims history.",
          answer:
            "For a large commercial risk with limited own claims data, a simple, aggregated burning cost ratio (rather than attempting a more granular, data-intensive frequency-severity decomposition the limited data cannot reliably support) can provide a practical, defensible starting point for rating.",
          note: "A strong answer connects burning cost's simplicity directly to the genuine data limitation this specific risk presents.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss how credibility theory might be used to refine the projected burning cost rate calculated in part (i).",
          answer:
            "Credibility theory would blend this risk's own limited burning cost experience with a broader, more statistically stable external benchmark (e.g. an industry-wide or portfolio-wide rate for similar risks), weighting the own experience by a genuine credibility factor reflecting how statistically reliable the own experience actually is, producing a more robust final rate than the burning cost figure alone.",
          note: "A strong answer explicitly connects burning cost's own-experience-only limitation to credibility theory's blending solution.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the burning cost approach does not explicitly decompose experience into frequency and severity components.",
          answer:
            "The burning cost approach calculates historical claims experience as a simple ratio of claims to exposure over a past period, projecting this historical ratio forward <em>without</em> explicitly decomposing it into separate frequency and severity components, trading some analytical insight for genuine calculation simplicity.",
          note: "This connects directly to the burning-cost-as-simpler-alternative theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q3",
      title: "Frequency-severity models and GLMs",
      modules: "Modules 14, 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a frequency-severity model is, and how it develops the basic frequency-times-severity decomposition into a more sophisticated statistical framework.",
          answer:
            "A frequency-severity model fits separate statistical distributions to claim frequency (e.g. a Poisson or negative binomial distribution) and claim severity (e.g. a gamma or lognormal distribution), allowing rating factors to be estimated for each component separately using appropriate statistical technique.",
          note: "A strong answer names genuine example distributions for both frequency and severity, not just describes the general concept.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why assessing rating factors one at a time (univariate analysis) can produce systematically misleading results, and how a GLM addresses this.",
          answer:
            "If two rating factors are correlated with each other, a univariate analysis of either factor alone would confound that factor's own true effect with the correlated factor's effect, while a multivariate GLM can isolate each factor's own distinct, independent contribution, controlling for the other correlated factors simultaneously.",
          note: "A strong answer explicitly names the confounding mechanism, not just asserts that GLMs are 'more accurate'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss what an original loss curve technique is, and why it might be useful for pricing different limit or excess structures for the same underlying risk.",
          answer:
            "An original loss curve describes the genuine relationship between a policy's limit of indemnity (or excess/retention level) and the expected proportion of ground-up losses that a given limit would cover, allowing an actuary to price different limit or excess structures for the same underlying risk using a single, calibrated curve, rather than requiring entirely separate pricing exercises for each different limit structure considered.",
          note: "A strong answer explains both what the curve represents <em>and</em> why it enables efficient pricing across multiple structures.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on the genuine trade-off between using machine learning techniques and traditional GLMs for general insurance pricing.",
          answer:
            "Machine learning techniques can capture more complex, non-linear relationships and interactions between rating factors than a standard GLM's typically more constrained functional form allows, potentially improving genuine predictive accuracy, though often at some cost to the interpretability that GLMs typically offer more readily when needing to explain and justify the resulting rates.",
          note: "This connects directly to the accuracy-versus-interpretability trade-off theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q4",
      title: "General insurance products, direct and reinsurance business",
      modules: "Modules 2, 3, 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a rating actuary must understand a product's core features before applying rating technique to it.",
          answer:
            "Different products carry different claim frequency, severity, and development characteristics, so the specific rating factors, data requirements, and appropriate technique choice depend on the specific product being priced, meaning product understanding is a genuine precursor to sound rating, not a separate, unrelated topic.",
          note: "A strong answer explains <em>why</em> product understanding is necessary, not just that it is.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why pricing a reinsurance product requires different considerations from pricing the underlying direct insurance product it sits above.",
          answer:
            "A reinsurance treaty's genuine payoff depends on whether aggregate or individual underlying claims exceed a specified attachment point, requiring the reinsurance pricing actuary to understand the full severity distribution of the underlying direct business, a more complex pricing problem than pricing the direct policies themselves.",
          note: "This connects directly to the reinsurance-requires-severity-distribution theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a rating actuary must understand an insurer's aggregate portfolio-level exposure, beyond simply calculating adequate premiums for each individual policy.",
          answer:
            "Individually well-priced policies can still aggregate into concerning concentration risk, since many policies might all be exposed to the same underlying peril or geographic concentration (e.g. many property policies all exposed to the same flood plain). Understanding the insurer's genuine portfolio-level exposure, not just individual policy adequacy, is essential for sound overall pricing and risk management strategy, connecting directly to reinsurance purchasing and capital adequacy decisions.",
          note: "A strong answer explicitly explains <em>why</em> individual adequacy doesn't guarantee aggregate soundness, giving a concrete example.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why customer requirements must be considered alongside technical claim cost drivers when setting a premium.",
          answer:
            "Since a premium must be commercially viable (customers willing to pay it) as well as technically adequate (covering expected costs), understanding what customers value directly shapes both product design and the acceptable range within which a technically-derived rate must fall to remain commercially competitive.",
          note: "This connects directly to the dual technical-and-commercial-perspective theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q5",
      title: "External factors affecting pricing",
      modules: "Modules 8, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why claims inflation requires different treatment in pricing compared with its treatment in reserving.",
          answer:
            "While reserving addresses claims inflation's effect on already-incurred claims still developing, pricing must project claims inflation forward across the future policy period being priced, requiring a forward-looking inflation assumption distinct from (though informed by) the historical inflation experience reserving analysis reveals.",
          note: "A strong answer explains the direction of the assumption (forward-looking for pricing versus backward-informed) explicitly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the two distinct channels through which regulatory and legal developments can affect general insurance pricing.",
          answer:
            "Regulatory and legal changes can alter the underlying claims cost itself (e.g. changing court awards for bodily injury, or new consumer protection requirements affecting claims handling costs), directly affecting the genuine pure risk premium calculation, <em>and</em> they can constrain which rating factors an insurer is permitted to use, affecting how that premium can be differentiated across customers.",
          note: "A strong answer identifies both distinct channels, not just one.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why climate change has become an important pricing consideration for general insurers, and why historical weather data alone may no longer be a reliable guide.",
          answer:
            "Climate change can alter the frequency and severity of weather-related perils, directly affecting the catastrophe risk assumptions underlying pricing for exposed property and other lines. This requires forward-looking climate-adjusted assumptions because relying purely on historical weather patterns may no longer reliably represent genuine future risk, since the underlying climate conditions driving those historical patterns are themselves changing over time.",
          note: "A strong answer explains <em>why</em> historical reliance specifically breaks down, not just that climate change 'matters'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why social and technological trends can affect both claim frequency and severity, sometimes in opposite directions.",
          answer:
            "Social trends can affect claim frequency (e.g. changing driving behaviours) or severity (e.g. changing attitudes toward litigation), while technological developments can affect both frequency (e.g. autonomous vehicle safety features reducing accidents) and severity (e.g. more expensive vehicle repair costs from advanced sensor technology), requiring pricing assumptions to evolve alongside these ongoing external trends.",
          note: "This connects directly to the PESTLE-style external-factor theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q6",
      title: "Pricing uncertainty and data quality",
      modules: "Modules 9, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between process, parameter and model uncertainty in general insurance pricing, with a brief example of each.",
          answer:
            "Process uncertainty is genuine random variation in actual future claims experience even given perfectly correct assumptions (e.g. the natural year-to-year variability in claim counts). Parameter uncertainty is genuine imprecision in estimating the rating model's own parameters from limited historical data (e.g. an imprecisely estimated frequency rate from a small sample). Model uncertainty is the genuine risk that the chosen rating approach itself is inappropriate (e.g. using a burning cost approach when a more granular frequency-severity model would be more suitable).",
          note: "A complete answer distinguishes all three types <em>and</em> gives a genuine, distinct example of each.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why pricing uncertainty is greater for a new or unusual risk with limited own historical experience.",
          answer:
            "Without substantial own experience data, pricing must rely more heavily on external data, comparable risks, and genuine actuarial judgement, introducing greater parameter and model uncertainty than pricing a well-established, high-volume risk with abundant own historical data supporting more statistically reliable estimation.",
          note: "This connects directly to the new-risk-limited-data-uncertainty theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why a rating actuary must assess data quality, not just data availability, before relying on data for pricing.",
          answer:
            "Since every rating technique depends directly on the genuine accuracy and completeness of underlying data, poor-quality data (e.g. inconsistent rating factor recording, incomplete exposure records) can silently undermine even the most technically sophisticated rating model, making genuine data quality assessment an essential precondition for sound pricing, not merely confirming that data exists in sufficient volume.",
          note: "A strong answer distinguishes availability from quality explicitly, not treating them as the same thing.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why data quality issues might be particularly acute for a newly-introduced rating factor.",
          answer:
            "A newly-introduced rating factor typically has less historical data available, meaning statistical estimation of that factor's genuine effect is inherently based on a smaller, potentially less reliable dataset than more long-established rating factors with deeper historical records.",
          note: "This connects directly to the new-rating-factor-data-limitation theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q7",
      title: "Actuarial investigations of pricing results",
      modules: "Module 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a rating actuary must monitor actual experience against pricing assumptions after a rate has been implemented.",
          answer:
            "Comparing actual claims experience against the assumptions used in setting a rate reveals whether those pricing assumptions remain appropriate, allowing timely correction before mispriced business accumulates to a materially damaging scale.",
          note: "This connects directly to the experience-monitoring-purpose theme developed elsewhere in this course.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a rating actuary should investigate whether an observed pricing variance reflects random fluctuation or a persistent trend, before revising rates.",
          answer:
            "A single period's adverse variance could reflect genuine random noise or a genuine one-off event, so investigating the underlying cause before revising rates avoids both over-reacting to noise (unnecessarily disrupting competitive positioning) and under-reacting to an important emerging trend requiring genuine rate correction.",
          note: "A strong answer explains both risks of premature action (over-reacting and under-reacting).",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why investigating pricing results at a granular level (by rating factor or segment), rather than only at the aggregate level, might reveal important information.",
          answer:
            "An aggregate loss ratio consistent with expectations could still mask offsetting variances across different segments (e.g. one segment performing better than expected while another performs worse, netting out to an apparently unremarkable aggregate figure), so granular investigation by segment or rating factor is necessary to reveal these individually important, offsetting patterns that would otherwise go undetected.",
          note: "A strong answer gives a concrete example of how offsetting variances could hide at the aggregate level.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how the results of a pricing investigation should feed back into the GLM rating model.",
          answer:
            "Where a genuine, persistent variance is identified for a specific rating factor or segment, this should inform a revision to that factor's estimated effect within the pricing GLM, closing the actuarial control cycle loop between investigation and model refinement, rather than treating pricing investigation as a standalone, disconnected activity.",
          note: "This connects directly to the investigation-feeds-back-into-model theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q8",
      title: "The collective risk model and aggregate claims",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A portfolio's claim count follows a Poisson-like distribution with expected value 400. Claim severity has mean £1,500 and variance £900,000. For a compound distribution, the aggregate claims variance is given by $\\text{Var}(S) = E[N] \\times E[X^2]$, where $E[X^2] = \\text{Var}(X) + (E[X])^2$. Calculate the mean aggregate claims, and the aggregate claims standard deviation.",
          answer:
            "Mean aggregate claims = $E[N] \\times E[X] = 400 \\times £1,500 = £600,000$. $E[X^2] = 900,000 + 1,500^2 = 900,000 + 2,250,000 = 3,150,000$. Variance of aggregate claims = $400 \\times 3,150,000 = 1,260,000,000$. Standard deviation = $\\sqrt{1,260,000,000} \\approx £35,496$ (to the nearest pound).",
          note: "Arithmetic check: meanAggregate=600,000; varAggregate=1,260,000,000; sdAggregate≈35,496.48. Marks are typically split across the mean, the E[X²] calculation, and the final standard deviation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why deriving the exact aggregate claims distribution analytically is often difficult, and why stochastic simulation provides a practical alternative.",
          answer:
            "Combining a realistic frequency distribution with a realistic severity distribution typically does not produce a mathematically tractable, closed-form aggregate claims distribution. Stochastic simulation repeats a two-step process many thousands of times — simulating a random claim count, then simulating that many random claim severities and summing them — building up a genuine, empirical distribution of simulated aggregate claims outcomes.",
          note: "A strong answer explains both the genuine analytical difficulty <em>and</em> how simulation practically addresses it.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why a rating actuary might value having the full simulated aggregate claims distribution, rather than just the mean calculated in part (i).",
          answer:
            "The full distribution reveals genuine information about the spread and tail risk of possible aggregate outcomes, informing capital requirements or reinsurance purchasing decisions, insight a single mean figure (the pure risk premium alone) cannot provide.",
          note: "This connects the numeric mean calculation directly to the broader value of the full distribution.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how the collective risk model differs from a simpler individual-risk-model approach.",
          answer:
            "The collective risk model represents total aggregate claims as the sum of a random number of individual claims, rather than a simpler individual-risk-model approach summing a fixed number of individual policy outcomes, providing a more flexible framework better suited to lines where claim count itself is uncertain.",
          note: "This connects directly to the collective-risk-model-versus-individual-risk-model theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q9",
      title: "Credibility theory",
      modules: "Module 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A risk has 850 own claims, against a full credibility standard of 1,082 claims. Using classical credibility with $Z = \\sqrt{n / n_{full}}$, calculate the credibility factor Z. The own experience indicates a loss ratio of 62%, while the external/portfolio benchmark loss ratio is 55%. Calculate the credibility-weighted loss ratio.",
          answer:
            "$Z = \\sqrt{850/1082} = \\sqrt{0.7856} = 0.8863$. Credibility-weighted loss ratio = $(0.8863 \\times 62\\%) + ((1-0.8863) \\times 55\\%) = 54.95\\% + 6.25\\% = 61.20\\%$ (to 2 decimal places).",
          note: "Arithmetic check: Z=0.8863; credibilityWeightedRate=0.6120 (61.20%). Marks are typically split across the Z calculation and the final weighted rate.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why classical credibility is described as a 'threshold-based' approach, and how this differs from Bayesian credibility's approach to setting Z.",
          answer:
            "Classical credibility sets a credibility factor based on whether the own data has reached a specified minimum volume considered sufficient to limit random fluctuation to an acceptable level, applying full credibility once this threshold is reached and partial credibility below it. Bayesian credibility instead derives the credibility weighting from formal Bayesian statistical principles, updating a prior belief with observed data, with the weighting emerging from the relative statistical precision of the prior and data, rather than a fixed volume threshold.",
          note: "A strong answer explicitly contrasts the threshold mechanism against the Bayesian precision-based mechanism.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why Bayesian credibility might be considered more theoretically elegant than classical credibility, despite classical credibility's practical simplicity.",
          answer:
            "Bayesian credibility derives its credibility weighting directly from the underlying statistical properties of the prior and data, rather than an essentially arbitrary volume threshold, providing a more theoretically justified blending weight, though classical credibility's genuine simplicity and ease of practical application can make it a reasonable, pragmatic choice in many real-world pricing contexts.",
          note: "A strong answer acknowledges both the theoretical advantage <em>and</em> the practical trade-off, not just one side.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why credibility theory is useful for pricing a new rating factor with limited own data.",
          answer:
            "Credibility theory allows a rating actuary to blend a new rating factor's limited own data with broader portfolio or market benchmark experience, producing a more statistically robust rate than relying on either the limited own data alone or an entirely generic market rate ignoring the factor's own genuine, specific experience.",
          note: "This connects directly to the credibility-for-limited-data theme developed in this course.",
        },
      ],
    },
    {
      id: "sp8-q10",
      title: "Reinsurance pricing and catastrophe modelling",
      modules: "Modules 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why pricing a non-proportional reinsurance treaty is more complex than pricing a proportional treaty.",
          answer:
            "A proportional treaty's premium and claims scale directly with the underlying direct business, so pricing largely involves agreeing the appropriate ceding commission and any risk margin, while a non-proportional treaty's pricing requires understanding the full severity distribution of underlying claims to price the specific layer being reinsured, a materially more complex exercise.",
          note: "A strong answer explains <em>why</em> the non-proportional case requires distributional information, not just that it is 'more complex'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a reinsurer's pricing margin might need to reflect a higher risk-adjusted return than a direct insurer's margin for economically similar business.",
          answer:
            "A reinsurer often takes on more concentrated, correlated risk (e.g. providing catastrophe cover across many direct insurers' exposures to the same peril), requiring a higher risk-adjusted margin to compensate for this concentrated risk exposure, compared with a direct insurer's typically more diversified, individual-policy-level risk pool.",
          note: "This connects directly to the risk-adjusted-margin theme developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why catastrophe model output must be incorporated alongside, not instead of, traditional frequency-severity rating technique when pricing a catastrophe-exposed property risk.",
          answer:
            "Catastrophe model output specifically addresses the catastrophe peril component of a property risk's total expected cost, while frequency-severity technique remains necessary for pricing the non-catastrophe (attritional) claims that risk also generates, meaning a complete pricing approach combines both catastrophe model output and traditional frequency-severity technique, addressing different components of the same risk's total cost. Ignoring either component would leave a genuine gap in the overall pricing approach.",
          note: "A strong answer explains that the two techniques address <em>different</em> components of total cost, not competing approaches to the same problem.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a rating actuary should acknowledge catastrophe model uncertainty rather than treating a single model's output as unquestionably precise.",
          answer:
            "Different catastrophe models or model versions can produce different loss estimates for the same portfolio, so a rating actuary should acknowledge this model uncertainty, for example by comparing multiple models or applying genuine judgement-based adjustment, rather than treating a single model's output as unquestionably precise.",
          note: "This connects directly to the critical-model-awareness theme developed throughout this course.",
        },
      ],
    },
  ],
});

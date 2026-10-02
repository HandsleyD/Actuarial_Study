// SP7 General Insurance – Reserving and Capital Modelling Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP7", {
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
          "title": "Regulation",
          "description": "Regulation of general insurers relevant to reserving and capital: aims of regulation, Solvency II's three pillars, technical provisions and SCR/MCR, the actuarial function, ORSA, conduct regulation, and professional standards for reserving actuaries.",
          "cards": [
              {
                  "q": "What are the three pillars of Solvency II?",
                  "a": "Pillar 1 quantitative requirements (technical provisions, SCR, MCR); Pillar 2 governance and supervisory review (including ORSA); Pillar 3 disclosure and reporting.",
                  "explain": "UK equivalent after Brexit: Solvency UK."
              },
              {
                  "q": "What are Solvency II technical provisions?",
                  "a": "Best estimate of liabilities (discounted probability-weighted cash flows) plus a risk margin.",
                  "explain": "Premium and claims provisions."
              },
              {
                  "q": "What is the SCR?",
                  "a": "Solvency Capital Requirement: capital to withstand a 1-in-200 one-year loss (99.5% VaR).",
                  "explain": "Standard formula or internal model."
              },
              {
                  "q": "What is the MCR?",
                  "a": "Minimum Capital Requirement — lower threshold triggering severe intervention.",
                  "explain": "85% VaR roughly."
              },
              {
                  "q": "What does the actuarial function do under Solvency II?",
                  "a": "Coordinates technical provisions, assesses data quality, opines on underwriting policy and reinsurance, contributes to risk management.",
                  "explain": "Key role for reserving actuaries."
              },
              {
                  "q": "What is the ORSA?",
                  "a": "Own Risk and Solvency Assessment — the insurer's assessment of its risks and capital needs over the business plan.",
                  "explain": "Pillar 2."
              },
              {
                  "q": "What is a premium provision?",
                  "a": "Best estimate of future cash flows on unexpired cover (claims, expenses, less future premiums).",
                  "explain": "Replaces UPR concept."
              },
              {
                  "q": "What is a claims provision?",
                  "a": "Best estimate of cash flows on claims already incurred (reported and IBNR).",
                  "explain": "Discounted."
              },
              {
                  "q": "How is the risk margin calculated?",
                  "a": "Cost-of-capital approach: cost of holding SCR (non-hedgeable) over run-off, discounted.",
                  "explain": "Reduced under Solvency UK reforms."
              },
              {
                  "q": "What are ENIDs?",
                  "a": "Events not in data — allowance for unusual events not captured in historical data.",
                  "explain": "Best estimate completeness."
              },
              {
                  "q": "Why does conduct regulation matter to GI?",
                  "a": "Pricing practices, claims handling and fair value rules affect profitability and reserves.",
                  "explain": "FCA rules."
              },
              {
                  "q": "What professional standards apply to reserving?",
                  "a": "TAS 100 and TAS 200 (insurance), actuarial codes.",
                  "explain": "Documentation and communication."
              },
              {
                  "q": "What is the role of the regulator in reserving?",
                  "a": "Reviewing adequacy of technical provisions and challenging assumptions.",
                  "explain": "Supervisory review."
              },
              {
                  "q": "What are capital tiers?",
                  "a": "Quality classification of own funds (Tier 1–3).",
                  "explain": "Loss absorbency."
              },
              {
                  "q": "What is Pillar 3 reporting?",
                  "a": "SFCR (public) and RSR/QRTs (regulatory).",
                  "explain": "Transparency."
              }
          ]
      },
      {
          "id": "m09",
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
          "id": "m10",
          "title": "The Lloyd's market",
          "description": "The structure and operation of Lloyd's: Names and corporate members, syndicates and managing agents, the chain of security (syndicate assets, members' funds at Lloyd's, Central Fund), the franchise and its oversight, the three-year accounting history, reinsurance to close and run-off.",
          "cards": [
              {
                  "q": "What is Lloyd's?",
                  "a": "A market where members underwrite through syndicates managed by managing agents, not an insurance company.",
                  "explain": "Subscription market."
              },
              {
                  "q": "What is a syndicate?",
                  "a": "A group of members providing capital to underwrite, managed by a managing agent, annually venturing.",
                  "explain": "Year of account."
              },
              {
                  "q": "What is a managing agent?",
                  "a": "A company that manages syndicates' underwriting and operations.",
                  "explain": "Lloyd's-approved."
              },
              {
                  "q": "What is the chain of security?",
                  "a": "Syndicate premium trust funds, members' funds at Lloyd's, the Central Fund.",
                  "explain": "Three links."
              },
              {
                  "q": "What is the Central Fund?",
                  "a": "A mutual fund at Lloyd's to meet claims if members can't.",
                  "explain": "Mutualisation."
              },
              {
                  "q": "What is reinsurance to close (RITC)?",
                  "a": "Closing a year of account by reinsuring its remaining liabilities into a later year (usually after three years).",
                  "explain": "Key reserving event."
              },
              {
                  "q": "Why is RITC a critical reserving exercise?",
                  "a": "It transfers liabilities between different capital providers, so fairness requires an accurate estimate.",
                  "explain": "Equity between years."
              },
              {
                  "q": "What is a year of account?",
                  "a": "The underwriting year for which a syndicate's results are determined.",
                  "explain": "Closed after 3 years usually."
              },
              {
                  "q": "What is the Lloyd's franchise?",
                  "a": "Lloyd's as franchisor oversees syndicates' business plans, capital and performance.",
                  "explain": "Performance management."
              },
              {
                  "q": "How is capital set at Lloyd's?",
                  "a": "Syndicate SCR via internal model, uplifted (e.g. +35%) to set members' capital.",
                  "explain": "Economic capital assessment."
              },
              {
                  "q": "What is a run-off year of account?",
                  "a": "A year that cannot be closed by RITC due to uncertainty.",
                  "explain": "Remains open."
              },
              {
                  "q": "What are corporate members?",
                  "a": "Companies providing capital to syndicates.",
                  "explain": "Most capital today."
              },
              {
                  "q": "What are Names?",
                  "a": "Individual members with unlimited (historically) or limited liability.",
                  "explain": "Declining share."
              },
              {
                  "q": "What is a coverholder?",
                  "a": "An intermediary authorised to bind cover on behalf of syndicates.",
                  "explain": "Delegated authority."
              },
              {
                  "q": "What is Lloyd's Performance Management?",
                  "a": "Oversight of syndicate plans and results.",
                  "explain": "Franchise board."
              }
          ]
      },
      {
          "id": "m11",
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
          "id": "m12",
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
          "id": "m13",
          "title": "Actuarial investigations and analyses",
          "description": "The actuarial investigations a general insurer carries out — reserving reviews, pricing reviews, experience analyses, rate monitoring, claims and large-loss analyses — their purposes, the information they use and how results are communicated.",
          "cards": [
              {
                  "q": "What is a reserving review?",
                  "a": "An investigation to estimate outstanding liabilities and assess reserve adequacy.",
                  "explain": "Regular (e.g. quarterly)."
              },
              {
                  "q": "What is an actual vs expected analysis?",
                  "a": "Comparing actual claims development with that expected from the previous review.",
                  "explain": "Early warning."
              },
              {
                  "q": "What is rate monitoring?",
                  "a": "Tracking changes in premium rates on renewals relative to exposure and terms.",
                  "explain": "Input to reserving loss ratios."
              },
              {
                  "q": "Why does rate monitoring matter for reserving?",
                  "a": "BF and ELR methods rely on expected loss ratios adjusted for rate changes.",
                  "explain": "Soft market risk."
              },
              {
                  "q": "What is a large loss analysis?",
                  "a": "Separate investigation of large claims, often by individual review.",
                  "explain": "Distort triangles."
              },
              {
                  "q": "What is a claims analysis?",
                  "a": "Examining frequency, severity, settlement patterns and trends.",
                  "explain": "Understand drivers."
              },
              {
                  "q": "What is an expense analysis?",
                  "a": "Allocating expenses to classes and activities.",
                  "explain": "ULAE reserves."
              },
              {
                  "q": "Why involve claims and underwriting teams?",
                  "a": "Soft information on case reserving practice and portfolio changes.",
                  "explain": "Qualitative input."
              },
              {
                  "q": "What is a peer review?",
                  "a": "Independent review of actuarial work.",
                  "explain": "Quality control."
              },
              {
                  "q": "How should results be communicated?",
                  "a": "Clear ranges, key assumptions, sensitivities, changes since last review.",
                  "explain": "TAS requirements."
              },
              {
                  "q": "What is a reserve adequacy review?",
                  "a": "Assessing whether booked reserves are sufficient.",
                  "explain": "Audit and board."
              },
              {
                  "q": "What is an event-specific analysis?",
                  "a": "Estimating losses from a catastrophe or major event.",
                  "explain": "Exposure-based."
              },
              {
                  "q": "What are qualitative inputs to investigations?",
                  "a": "Changes in claims handling, legal environment, business mix.",
                  "explain": "Adjust methods."
              },
              {
                  "q": "How often are reserving investigations done?",
                  "a": "Typically quarterly with a full annual review.",
                  "explain": "Governance."
              },
              {
                  "q": "What is a portfolio review?",
                  "a": "Assessing profitability of lines/segments.",
                  "explain": "Business decisions."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Reserving bases",
          "description": "The bases on which reserves are held — best estimate versus prudent, discounted versus undiscounted, gross versus net — and the reserve components: case reserves, IBNR, IBNER, UPR, URR/AURR, ULAE, and technical provisions under Solvency II and IFRS 17.",
          "cards": [
              {
                  "q": "What is a case reserve?",
                  "a": "An estimate by claims handlers of the outstanding amount on an individual reported claim.",
                  "explain": "Subjective."
              },
              {
                  "q": "What is IBNR?",
                  "a": "Incurred but not reported claims (and, broadly, IBNER as well).",
                  "explain": "Estimated statistically."
              },
              {
                  "q": "What is IBNER?",
                  "a": "Incurred but not enough reported — future development on reported claims' case reserves.",
                  "explain": "Part of broad IBNR."
              },
              {
                  "q": "What is UPR?",
                  "a": "Unearned premium reserve — premium relating to unexpired cover.",
                  "explain": "Pro rata or other patterns."
              },
              {
                  "q": "What is URR?",
                  "a": "Unexpired risk reserve — expected claims and expenses on unexpired cover.",
                  "explain": "If URR > UPR, hold AURR."
              },
              {
                  "q": "What is AURR?",
                  "a": "Additional unexpired risk reserve where UPR is insufficient.",
                  "explain": "Premium deficiency."
              },
              {
                  "q": "What is ULAE?",
                  "a": "Unallocated loss adjustment expenses — claims handling costs not attributable to specific claims.",
                  "explain": "Reserve needed."
              },
              {
                  "q": "What is a best estimate reserve?",
                  "a": "Mean of the distribution of outcomes, without deliberate margins.",
                  "explain": "Solvency II basis."
              },
              {
                  "q": "What is a prudent reserve?",
                  "a": "Including margins for adverse deviation.",
                  "explain": "Accounting practice."
              },
              {
                  "q": "Why discount reserves?",
                  "a": "Reflects time value of money; required under Solvency II and IFRS 17.",
                  "explain": "Long-tail impact large."
              },
              {
                  "q": "What is gross versus net reserving?",
                  "a": "Gross is before reinsurance; net deducts reinsurance recoveries.",
                  "explain": "Chapter 25."
              },
              {
                  "q": "What is the IFRS 17 risk adjustment?",
                  "a": "Compensation for non-financial risk uncertainty.",
                  "explain": "Confidence level disclosure."
              },
              {
                  "q": "What is the liability for incurred claims (IFRS 17)?",
                  "a": "Fulfilment cash flows for past claims.",
                  "explain": "Discounted + RA."
              },
              {
                  "q": "What is a claims handling expense reserve approach?",
                  "a": "E.g. percentage of paid claims, split open/closed claims.",
                  "explain": "ULAE methods."
              },
              {
                  "q": "How do reserve bases differ by purpose?",
                  "a": "Accounting, regulatory, pricing, M&A — different margins and discounting.",
                  "explain": "Purpose-driven."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Triangulation methods",
          "description": "Deterministic reserving methods on claims triangles: chain ladder (paid and incurred), development factor selection and tail factors, inflation-adjusted chain ladder, average cost per claim, expected loss ratio, Bornhuetter-Ferguson and Cape Cod methods, and their strengths and weaknesses.",
          "cards": [
              {
                  "q": "What is the chain ladder method?",
                  "a": "Projects cumulative claims to ultimate using development factors derived from past development patterns.",
                  "explain": "Assumes stable development."
              },
              {
                  "q": "How is a volume-weighted development factor calculated?",
                  "a": "$f_j = \\frac{\\sum_i C_{i,j+1}}{\\sum_i C_{i,j}}$ over origin years with both values.",
                  "explain": "Standard estimator."
              },
              {
                  "q": "What are the chain ladder's key assumptions?",
                  "a": "Future development follows past patterns; each origin year develops similarly; consistent claims handling and reserving practice.",
                  "explain": "Breaks down with changes."
              },
              {
                  "q": "When is chain ladder unreliable?",
                  "a": "Immature years (small base), changing case reserving, large claims, mix changes, inflation shifts.",
                  "explain": "Use BF for recent years."
              },
              {
                  "q": "What is the Bornhuetter-Ferguson method?",
                  "a": "Ultimate = paid/incurred to date + (1 − 1/cumulative factor) × expected ultimate (premium × initial ELR).",
                  "explain": "Blends data with prior."
              },
              {
                  "q": "What is the BF credibility interpretation?",
                  "a": "Credibility-weighted average of chain ladder and ELR ultimates, with weight = proportion developed.",
                  "explain": "Stability for immature years."
              },
              {
                  "q": "What is the Cape Cod method?",
                  "a": "Like BF but estimates the expected loss ratio from the data using 'used-up' premium.",
                  "explain": "Less subjective ELR."
              },
              {
                  "q": "What is the expected loss ratio method?",
                  "a": "Ultimate = premium × ELR, ignoring actual experience.",
                  "explain": "New business/immature years."
              },
              {
                  "q": "What is the average cost per claim (ACPC) method?",
                  "a": "Projects claim numbers and average costs separately to ultimate.",
                  "explain": "Useful when frequency/severity trends differ."
              },
              {
                  "q": "What is an inflation-adjusted chain ladder?",
                  "a": "Converts payments to current values, projects, then reinflates with future inflation.",
                  "explain": "Explicit inflation."
              },
              {
                  "q": "What is a tail factor?",
                  "a": "Development beyond the triangle's last observed period.",
                  "explain": "Curve fitting or benchmarks."
              },
              {
                  "q": "Paid versus incurred chain ladder?",
                  "a": "Paid is objective but slower; incurred uses case reserves, faster but affected by reserving practice changes.",
                  "explain": "Compare both."
              },
              {
                  "q": "What is Benktander's method?",
                  "a": "An iterated BF using BF ultimate as the new prior.",
                  "explain": "Between BF and chain ladder."
              },
              {
                  "q": "How are large claims handled?",
                  "a": "Removed and projected separately, or capped.",
                  "explain": "Stability."
              },
              {
                  "q": "Why compare methods?",
                  "a": "Different assumptions; divergence reveals issues.",
                  "explain": "Judgement in selection."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Stochastic reserving",
          "description": "Stochastic reserving methods to quantify uncertainty: the Mack model and its standard error, the over-dispersed Poisson model and bootstrapping, Bayesian methods, and interpreting reserve distributions and percentiles.",
          "cards": [
              {
                  "q": "Why use stochastic reserving?",
                  "a": "To estimate the distribution (variability) of reserves, not just the central estimate.",
                  "explain": "Capital and communication."
              },
              {
                  "q": "What is the Mack model?",
                  "a": "A distribution-free model underlying chain ladder, giving analytic standard errors of reserves.",
                  "explain": "Mean equals chain ladder."
              },
              {
                  "q": "What are Mack's assumptions?",
                  "a": "$E[C_{i,j+1}|C_{i,j}] = f_j C_{i,j}$, $\\mathrm{Var}[C_{i,j+1}|C_{i,j}] = \\sigma_j^2 C_{i,j}$, independent origin years.",
                  "explain": "Testable."
              },
              {
                  "q": "What is the ODP model?",
                  "a": "Incremental claims are over-dispersed Poisson with mean depending on origin and development factors; reproduces chain ladder.",
                  "explain": "GLM framework."
              },
              {
                  "q": "What is bootstrapping?",
                  "a": "Resampling residuals to create pseudo-triangles, re-fitting, and adding process variance to get a predictive distribution.",
                  "explain": "ODP bootstrap."
              },
              {
                  "q": "What residuals are used in the ODP bootstrap?",
                  "a": "Scaled Pearson residuals.",
                  "explain": "Adjust for degrees of freedom."
              },
              {
                  "q": "What is prediction error?",
                  "a": "Combination of parameter (estimation) error and process error.",
                  "explain": "Total uncertainty."
              },
              {
                  "q": "What are limitations of stochastic methods?",
                  "a": "Rely on model assumptions, may understate uncertainty (model risk, ENIDs), need stable data.",
                  "explain": "Supplement with judgement."
              },
              {
                  "q": "What is a Bayesian reserving method?",
                  "a": "Uses prior distributions (e.g. for ELR) updated with data via Bayes' theorem.",
                  "explain": "BF has Bayesian interpretation."
              },
              {
                  "q": "How are one-year and ultimate views different?",
                  "a": "Ultimate view: full run-off uncertainty; one-year: change in best estimate over next year (Solvency II).",
                  "explain": "Capital purposes."
              },
              {
                  "q": "How can bootstrap results be used?",
                  "a": "Percentiles for capital, ranges for communication, reserve risk calibration.",
                  "explain": "Uses."
              },
              {
                  "q": "What is the coefficient of variation in reserving?",
                  "a": "Standard deviation / mean of reserves.",
                  "explain": "Comparing classes."
              },
              {
                  "q": "Why might negative incremental claims be a problem?",
                  "a": "ODP requires non-negative column sums; adjustments needed.",
                  "explain": "Salvage and recoveries."
              },
              {
                  "q": "How can stochastic results be checked?",
                  "a": "Compare with Mack, reasonableness of percentiles, residual plots.",
                  "explain": "Validation."
              },
              {
                  "q": "What is model error?",
                  "a": "Risk the chosen model is wrong.",
                  "explain": "Not captured by bootstrap."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Assessment of reserving results",
          "description": "Assessing and selecting reserving results: diagnostics and reasonableness checks (ultimate loss ratios, frequency and severity, paid-to-incurred, IBNR to case), actual versus expected, comparison of methods, back-testing, and documenting and communicating the selection.",
          "cards": [
              {
                  "q": "What diagnostics check reserving results?",
                  "a": "Implied loss ratios by year, average costs, claim frequencies, paid/incurred ratios, IBNR/case ratios, development trends.",
                  "explain": "Reasonableness."
              },
              {
                  "q": "Why review ultimate loss ratios by origin year?",
                  "a": "Should be consistent with rate changes, market cycle and known events.",
                  "explain": "Trend sense-check."
              },
              {
                  "q": "What is back-testing?",
                  "a": "Comparing past reserve estimates with subsequent actual development.",
                  "explain": "Assesses methods."
              },
              {
                  "q": "How is the final selection made?",
                  "a": "Choosing methods by origin year and class, based on maturity, data quality and diagnostics.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is an actual vs expected analysis?",
                  "a": "Compares emerged claims to expected since last review.",
                  "explain": "Early warning."
              },
              {
                  "q": "What is the paid-to-incurred ratio check?",
                  "a": "Changes signal case reserving or settlement speed shifts.",
                  "explain": "Data diagnostic."
              },
              {
                  "q": "How should large divergence between methods be handled?",
                  "a": "Investigate causes (changes in practice, mix) before selecting.",
                  "explain": "Don't average blindly."
              },
              {
                  "q": "What is reserve strengthening?",
                  "a": "Increasing reserves due to adverse development.",
                  "explain": "Profit impact."
              },
              {
                  "q": "What is reserve release?",
                  "a": "Decreasing reserves due to favourable development.",
                  "explain": "Earnings impact."
              },
              {
                  "q": "How should results be documented?",
                  "a": "Methods, assumptions, data, judgements, changes, sensitivities.",
                  "explain": "TAS."
              },
              {
                  "q": "How should results be communicated to the board?",
                  "a": "Best estimate, range, key uncertainties, movements.",
                  "explain": "Clear messages."
              },
              {
                  "q": "What is the reserve range?",
                  "a": "Plausible range of reserve estimates.",
                  "explain": "Uncertainty."
              },
              {
                  "q": "Why check consistency with pricing?",
                  "a": "Pricing loss ratios and reserving loss ratios should reconcile.",
                  "explain": "Feedback."
              },
              {
                  "q": "How can external benchmarks help?",
                  "a": "Industry development patterns and loss ratios.",
                  "explain": "Sparse data."
              },
              {
                  "q": "What is a reserving committee?",
                  "a": "Governance body approving booked reserves.",
                  "explain": "Oversight."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Reserving uncertainty",
          "description": "Sources of uncertainty in reserves — process, parameter and model uncertainty, data issues, legal and inflation changes, latent claims, catastrophes — and techniques for assessing and communicating it (sensitivity and scenario testing, ranges, stochastic methods).",
          "cards": [
              {
                  "q": "List sources of reserving uncertainty.",
                  "a": "Random fluctuation, parameter estimation, model choice, data quality, changes in claims handling, inflation, legal changes, latent claims, large claims, reinsurance recoveries.",
                  "explain": "Broad list."
              },
              {
                  "q": "What are latent claims?",
                  "a": "Claims arising long after exposure (e.g. asbestos, industrial disease).",
                  "explain": "Very uncertain."
              },
              {
                  "q": "How can sensitivity testing help?",
                  "a": "Shows impact of changing key assumptions (tail factors, ELRs, inflation).",
                  "explain": "Communicate."
              },
              {
                  "q": "What is scenario testing in reserving?",
                  "a": "Assessing reserves under specific adverse scenarios (e.g. Ogden change).",
                  "explain": "Concrete."
              },
              {
                  "q": "How does inflation create uncertainty?",
                  "a": "Unexpected claims inflation increases future payments.",
                  "explain": "2022-23 inflation shock."
              },
              {
                  "q": "How can legal changes affect reserves?",
                  "a": "Court decisions or legislation change liability retrospectively.",
                  "explain": "Unpredictable."
              },
              {
                  "q": "Why are long-tail classes more uncertain?",
                  "a": "More time for changes, larger proportion unreported.",
                  "explain": "Liability classes."
              },
              {
                  "q": "How do reinsurance recoveries create uncertainty?",
                  "a": "Bad debt, disputes, complex layers.",
                  "explain": "Net uncertainty."
              },
              {
                  "q": "How is uncertainty communicated?",
                  "a": "Ranges, percentiles, scenarios, key drivers.",
                  "explain": "TAS 200."
              },
              {
                  "q": "What is model risk in reserving?",
                  "a": "Wrong method choice.",
                  "explain": "Compare methods."
              },
              {
                  "q": "How do periodic payment orders affect uncertainty?",
                  "a": "Long-term annuity-like payments exposed to longevity and inflation.",
                  "explain": "PPOs in UK motor."
              },
              {
                  "q": "What is reserve risk in capital modelling?",
                  "a": "Risk of adverse reserve development over one year.",
                  "explain": "SCR component."
              },
              {
                  "q": "How do claims handling changes affect uncertainty?",
                  "a": "Distort development patterns.",
                  "explain": "Adjust data."
              },
              {
                  "q": "What is the effect of catastrophes on reserves?",
                  "a": "Early estimates highly uncertain.",
                  "explain": "Exposure-based methods."
              },
              {
                  "q": "Why can uncertainty never be fully quantified?",
                  "a": "Unknown unknowns, ENIDs, structural breaks.",
                  "explain": "Judgement."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Investment principles and asset liability matching",
          "description": "Investment principles for general insurers: nature and term of GI liabilities, matching by term, currency and inflation sensitivity, liquidity needs, capital and regulatory constraints, and the ALM trade-off between return and risk.",
          "cards": [
              {
                  "q": "What are the characteristics of GI liabilities?",
                  "a": "Short to medium term (long for liability), uncertain amounts and timing, often inflation-linked, multiple currencies.",
                  "explain": "Drives strategy."
              },
              {
                  "q": "How should short-tail liabilities be matched?",
                  "a": "Cash and short-term bonds for liquidity.",
                  "explain": "Property claims."
              },
              {
                  "q": "How should long-tail liabilities be matched?",
                  "a": "Longer bonds, possibly index-linked for inflation-sensitive claims.",
                  "explain": "Liability claims."
              },
              {
                  "q": "Why is currency matching important?",
                  "a": "Claims in foreign currencies create FX risk if assets are domestic.",
                  "explain": "Match currency."
              },
              {
                  "q": "Why is liquidity important for GI insurers?",
                  "a": "Catastrophes can require large, sudden payments.",
                  "explain": "Liquid asset buffer."
              },
              {
                  "q": "What role do free assets play?",
                  "a": "Allow investment in higher-return, riskier assets.",
                  "explain": "Risk appetite."
              },
              {
                  "q": "How do capital requirements affect investment?",
                  "a": "Market risk charges make risky assets capital-intensive.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How is claims inflation hedged?",
                  "a": "Imperfectly — index-linked bonds hedge price inflation, not claims inflation.",
                  "explain": "Basis risk."
              },
              {
                  "q": "What is duration matching?",
                  "a": "Matching asset and liability durations to reduce interest rate risk.",
                  "explain": "Discounted reserves."
              },
              {
                  "q": "Why might insurers hold equities?",
                  "a": "Long-term return on free assets.",
                  "explain": "Volatility."
              },
              {
                  "q": "What is the effect of discounting on ALM?",
                  "a": "Discounted reserves are rate-sensitive, increasing the need to match.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How can ALM models help?",
                  "a": "Projecting assets and liabilities under scenarios.",
                  "explain": "Strategy choice."
              },
              {
                  "q": "What are regulatory investment constraints?",
                  "a": "Prudent person principle.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How does reinsurance affect ALM?",
                  "a": "Recoverables are assets with credit risk and timing.",
                  "explain": "Net cash flows."
              },
              {
                  "q": "What is a cash flow matching approach?",
                  "a": "Assets whose cash flows match expected claim payments.",
                  "explain": "Expected payment pattern."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Capital modelling – methodologies",
          "description": "Approaches to assessing capital for a general insurer: regulatory standard formula versus internal models, economic capital, one-year versus ultimate horizons, risk measures (VaR, TVaR), stochastic simulation and dynamic financial analysis, and uses of capital models.",
          "cards": [
              {
                  "q": "What is the standard formula?",
                  "a": "Prescribed factor/stress-based SCR calculation under Solvency II.",
                  "explain": "Simple, not tailored."
              },
              {
                  "q": "What is an internal model?",
                  "a": "An insurer's own capital model, approved by the regulator.",
                  "explain": "Tailored to risk profile."
              },
              {
                  "q": "What is economic capital?",
                  "a": "Capital an insurer judges it needs to meet its own risk appetite.",
                  "explain": "May differ from regulatory."
              },
              {
                  "q": "What risk measure does Solvency II use?",
                  "a": "99.5% VaR over one year.",
                  "explain": "1-in-200."
              },
              {
                  "q": "What is TVaR?",
                  "a": "Average loss beyond VaR.",
                  "explain": "Coherent."
              },
              {
                  "q": "What is a one-year horizon?",
                  "a": "Losses emerging over the next year, including change in reserves.",
                  "explain": "Solvency II."
              },
              {
                  "q": "What is an ultimate horizon?",
                  "a": "Losses over full run-off.",
                  "explain": "Economic capital."
              },
              {
                  "q": "What is DFA?",
                  "a": "Dynamic financial analysis — stochastic simulation of the insurer's finances.",
                  "explain": "Capital models."
              },
              {
                  "q": "What are uses of capital models?",
                  "a": "Regulatory capital, capital allocation, pricing, reinsurance decisions, business planning, risk appetite.",
                  "explain": "Use test."
              },
              {
                  "q": "What is the use test?",
                  "a": "Requirement that an internal model is widely used in decision-making.",
                  "explain": "Solvency II."
              },
              {
                  "q": "What is a partial internal model?",
                  "a": "Internal model for some risks, standard formula for others.",
                  "explain": "Flexibility."
              },
              {
                  "q": "What are the components of a capital model?",
                  "a": "Premium, reserve, cat, market, credit, operational risk modules plus aggregation.",
                  "explain": "Modular."
              },
              {
                  "q": "How is capital allocated?",
                  "a": "To lines by contribution to total risk (e.g. Euler, marginal).",
                  "explain": "Pricing."
              },
              {
                  "q": "What is an ESG in capital modelling?",
                  "a": "Economic scenario generator for market risks.",
                  "explain": "Consistent scenarios."
              },
              {
                  "q": "What are limitations of capital models?",
                  "a": "Tail data scarcity, dependency assumptions, model risk, expert judgement.",
                  "explain": "Validation."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Capital modelling – risk types",
          "description": "Modelling each risk type in a GI capital model: premium (attritional and large loss) risk, catastrophe risk (cat models), reserve risk, market risk, credit risk (reinsurance and other counterparties) and operational risk, with calibration approaches.",
          "cards": [
              {
                  "q": "How is attritional loss risk modelled?",
                  "a": "Aggregate loss ratio distributions (e.g. lognormal) calibrated to history.",
                  "explain": "Premium risk."
              },
              {
                  "q": "How are large losses modelled?",
                  "a": "Frequency-severity with Poisson/negative binomial frequency and Pareto severity.",
                  "explain": "Heavy tails."
              },
              {
                  "q": "How is catastrophe risk modelled?",
                  "a": "Using catastrophe models (hazard, vulnerability, financial modules) producing event loss tables.",
                  "explain": "Vendor models."
              },
              {
                  "q": "How is reserve risk modelled?",
                  "a": "Bootstrap/Mack distributions adjusted to one-year view.",
                  "explain": "Calibration."
              },
              {
                  "q": "How is market risk modelled?",
                  "a": "ESG scenarios for interest rates, spreads, equities, FX applied to assets and discounted liabilities.",
                  "explain": "Correlated."
              },
              {
                  "q": "How is reinsurance credit risk modelled?",
                  "a": "Default probabilities by rating, exposure at default, recovery rates, correlation with catastrophes.",
                  "explain": "Wrong-way risk."
              },
              {
                  "q": "How is operational risk modelled?",
                  "a": "Scenario analysis and loss data with frequency-severity models.",
                  "explain": "Expert judgement."
              },
              {
                  "q": "What is an event loss table?",
                  "a": "Catalogue of events with probabilities and losses.",
                  "explain": "Cat model output."
              },
              {
                  "q": "What is attritional vs large loss split?",
                  "a": "Separating frequent small losses from rare large ones for modelling.",
                  "explain": "Threshold choice."
              },
              {
                  "q": "How is premium risk defined?",
                  "a": "Risk that future claims from next year's business exceed expectations.",
                  "explain": "One-year."
              },
              {
                  "q": "How is expense risk modelled?",
                  "a": "Variation in expenses relative to plan.",
                  "explain": "Minor."
              },
              {
                  "q": "What is emergence pattern?",
                  "a": "How ultimate uncertainty emerges over time.",
                  "explain": "One-year conversion."
              },
              {
                  "q": "How is inflation risk captured?",
                  "a": "Via ESG-linked claims inflation in premium/reserve risk.",
                  "explain": "Dependency."
              },
              {
                  "q": "How is pandemic risk modelled for GI?",
                  "a": "Scenarios affecting BI, travel, event cancellation.",
                  "explain": "Expert judgement."
              },
              {
                  "q": "Why validate risk calibrations?",
                  "a": "To ensure appropriateness and regulatory approval.",
                  "explain": "Back-testing, benchmarking."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Capital modelling – diversification",
          "description": "Aggregating risks and diversification in capital models: correlation matrices, copulas and tail dependence, simulation-based aggregation, diversification benefits and their allocation, and the sensitivity of capital to dependency assumptions.",
          "cards": [
              {
                  "q": "What is diversification benefit?",
                  "a": "Total capital less than the sum of standalone capitals.",
                  "explain": "Risks not perfectly correlated."
              },
              {
                  "q": "How does the standard formula aggregate risks?",
                  "a": "Correlation matrices applied to standalone capital amounts.",
                  "explain": "Square root formula."
              },
              {
                  "q": "What is a copula?",
                  "a": "A function linking marginal distributions to form a joint distribution with a specified dependency.",
                  "explain": "Separates marginals from dependence."
              },
              {
                  "q": "What is tail dependence?",
                  "a": "Tendency for extreme events to occur together.",
                  "explain": "Gaussian copula has none."
              },
              {
                  "q": "Which copulas have tail dependence?",
                  "a": "t-copula (both tails), Gumbel (upper), Clayton (lower).",
                  "explain": "Choice matters."
              },
              {
                  "q": "Why is correlation calibration difficult?",
                  "a": "Limited data in tails; relationships change in stress.",
                  "explain": "Expert judgement."
              },
              {
                  "q": "How are diversification benefits allocated?",
                  "a": "Euler/marginal contribution, proportional, or other methods.",
                  "explain": "Pricing."
              },
              {
                  "q": "What is the sensitivity of capital to dependencies?",
                  "a": "Often large — capital can change significantly with correlation assumptions.",
                  "explain": "Sensitivity testing."
              },
              {
                  "q": "What are sources of dependency?",
                  "a": "Common drivers (inflation, catastrophes, legal changes, economic cycle).",
                  "explain": "Causal modelling."
              },
              {
                  "q": "What is a causal dependency approach?",
                  "a": "Modelling common drivers explicitly.",
                  "explain": "Alternative to copulas."
              },
              {
                  "q": "Why might linear correlation be misleading?",
                  "a": "Doesn't capture non-linear or tail dependence.",
                  "explain": "Rank correlation alternatives."
              },
              {
                  "q": "What is geographical diversification?",
                  "a": "Spreading exposure across regions to reduce cat accumulation.",
                  "explain": "Business strategy."
              },
              {
                  "q": "What is line-of-business diversification?",
                  "a": "Writing uncorrelated classes.",
                  "explain": "Capital efficiency."
              },
              {
                  "q": "How can diversification be overstated?",
                  "a": "Ignoring tail dependence or common shocks.",
                  "explain": "Model risk."
              },
              {
                  "q": "What is a correlation matrix positive definiteness issue?",
                  "a": "Expert-set matrices may not be valid; need adjustment.",
                  "explain": "Technical."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Capital modelling – practical considerations",
          "description": "Practical issues in building and using capital models: governance, validation, documentation, expert judgement, data limitations, parameter uncertainty, communication of results, and embedding the model in decision-making.",
          "cards": [
              {
                  "q": "What governance is needed for capital models?",
                  "a": "Board ownership, model change policy, independent validation, documentation.",
                  "explain": "Solvency II requirements."
              },
              {
                  "q": "What is model validation?",
                  "a": "Independent testing of model appropriateness, including back-testing, sensitivity, benchmarking.",
                  "explain": "Ongoing."
              },
              {
                  "q": "What is expert judgement?",
                  "a": "Informed opinion used where data is insufficient.",
                  "explain": "Documented and validated."
              },
              {
                  "q": "Why document the model?",
                  "a": "For understanding, review, approval, maintenance.",
                  "explain": "Transparency."
              },
              {
                  "q": "How can parameter uncertainty be allowed for?",
                  "a": "Parameter uncertainty loadings or Bayesian approaches.",
                  "explain": "Tail calibration."
              },
              {
                  "q": "How should results be communicated?",
                  "a": "Key drivers, sensitivities, limitations.",
                  "explain": "Board understanding."
              },
              {
                  "q": "What is a model change policy?",
                  "a": "Rules for approving and reporting model changes.",
                  "explain": "Regulatory."
              },
              {
                  "q": "What is profit and loss attribution?",
                  "a": "Explaining actual P&L with model risk drivers.",
                  "explain": "Validation."
              },
              {
                  "q": "What are stress and scenario tests used for?",
                  "a": "Validating tail outcomes against plausible events.",
                  "explain": "Reverse stress."
              },
              {
                  "q": "How do business changes affect models?",
                  "a": "Need recalibration for new lines or reinsurance.",
                  "explain": "Keep current."
              },
              {
                  "q": "What is the use test's practical meaning?",
                  "a": "Model outputs used in pricing, reinsurance, planning, risk appetite.",
                  "explain": "Embedding."
              },
              {
                  "q": "What are computational considerations?",
                  "a": "Run times, number of simulations, convergence.",
                  "explain": "Efficiency."
              },
              {
                  "q": "How is data limitation handled?",
                  "a": "External data, expert judgement, prudence.",
                  "explain": "Transparency."
              },
              {
                  "q": "Why involve the business?",
                  "a": "Ensures realism and buy-in.",
                  "explain": "Ownership."
              },
              {
                  "q": "What is a model risk register?",
                  "a": "Record of known model limitations and their impacts.",
                  "explain": "Governance."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Determining appropriate reinsurance",
          "description": "Choosing a reinsurance programme: objectives and risk appetite, types and structures, retention and limit selection, cost-benefit analysis using capital models, security of reinsurers, and alternatives to traditional reinsurance.",
          "cards": [
              {
                  "q": "What objectives drive reinsurance purchase?",
                  "a": "Reduce volatility, protect capital, meet risk appetite, increase capacity, access expertise.",
                  "explain": "Start from objectives."
              },
              {
                  "q": "How are retentions chosen?",
                  "a": "Based on risk appetite, capital, cost of reinsurance, and loss distributions.",
                  "explain": "Modelling."
              },
              {
                  "q": "How are catastrophe limits chosen?",
                  "a": "To cover a return period (e.g. 1-in-200 PML) consistent with appetite and regulation.",
                  "explain": "Cat models."
              },
              {
                  "q": "How can capital models evaluate reinsurance?",
                  "a": "Compare capital savings and volatility reduction against reinsurance cost (net cost of reinsurance vs cost of capital).",
                  "explain": "Efficiency."
              },
              {
                  "q": "What is the net cost of reinsurance?",
                  "a": "Premium minus expected recoveries.",
                  "explain": "Reinsurer margin."
              },
              {
                  "q": "Why consider reinsurer security?",
                  "a": "Recoveries depend on reinsurer solvency.",
                  "explain": "Ratings, collateral."
              },
              {
                  "q": "What alternatives to reinsurance exist?",
                  "a": "Capital raising, cat bonds, diversification, underwriting changes.",
                  "explain": "Compare costs."
              },
              {
                  "q": "How does reinsurance affect pricing?",
                  "a": "Reinsurance costs feed into gross pricing.",
                  "explain": "Allocation."
              },
              {
                  "q": "What is a reinsurance programme structure?",
                  "a": "Combination of proportional and non-proportional covers by class.",
                  "explain": "Layered."
              },
              {
                  "q": "What is the effect of reinsurance on SCR?",
                  "a": "Reduces underwriting risk, adds credit risk.",
                  "explain": "Net effect."
              },
              {
                  "q": "Why test reinsurance against scenarios?",
                  "a": "Check performance in realistic events.",
                  "explain": "Stress tests."
              },
              {
                  "q": "How can quota share help growth?",
                  "a": "Provides capital relief and commission.",
                  "explain": "New business."
              },
              {
                  "q": "What is the role of brokers in programme design?",
                  "a": "Market access, structuring, pricing benchmarks.",
                  "explain": "Advice."
              },
              {
                  "q": "What contract wording issues matter?",
                  "a": "Event definitions, exclusions, reinstatements.",
                  "explain": "Basis risk."
              },
              {
                  "q": "Why review reinsurance annually?",
                  "a": "Changing risk profile, prices and appetite.",
                  "explain": "Renewal cycle."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Reinsurance reserving",
          "description": "Reserving for reinsurance: estimating ceded recoveries and net reserves, gross-to-net approaches, applying treaty terms to large and catastrophe losses, reinstatement premiums, reinsurance bad debt, and reserving for inwards reinsurance business.",
          "cards": [
              {
                  "q": "How are net reserves estimated?",
                  "a": "Either by projecting net data directly or estimating gross and deducting projected recoveries.",
                  "explain": "Choice depends on reinsurance structure."
              },
              {
                  "q": "Why can net triangles be problematic?",
                  "a": "Changing reinsurance programmes distort development.",
                  "explain": "Use gross-to-net."
              },
              {
                  "q": "How are XoL recoveries estimated?",
                  "a": "Apply treaty terms to projected large claims individually or via distributions.",
                  "explain": "Large loss modelling."
              },
              {
                  "q": "What are reinstatement premiums?",
                  "a": "Premiums payable to restore XoL cover after losses.",
                  "explain": "Reserve for them."
              },
              {
                  "q": "What is reinsurance bad debt?",
                  "a": "Expected non-recovery due to reinsurer default or disputes.",
                  "explain": "Provision."
              },
              {
                  "q": "How is quota share netted?",
                  "a": "Apply the ceded percentage.",
                  "explain": "Simple."
              },
              {
                  "q": "What are the challenges of inwards reinsurance reserving?",
                  "a": "Reporting delays, limited data, heterogeneous contracts, long tails.",
                  "explain": "Lags."
              },
              {
                  "q": "What is ceded IBNR?",
                  "a": "Expected recoveries on IBNR claims.",
                  "explain": "Depends on layer."
              },
              {
                  "q": "How does aggregation affect recoveries?",
                  "a": "Event definitions determine whether losses aggregate to hit layers.",
                  "explain": "Hours clauses."
              },
              {
                  "q": "Why reserve for profit commission?",
                  "a": "Profit-sharing terms on reinsurance may be payable.",
                  "explain": "Contract terms."
              },
              {
                  "q": "How do commutations affect reserves?",
                  "a": "Settlement of reinsurance obligations for lump sum.",
                  "explain": "Finality."
              },
              {
                  "q": "What is the effect of discounting on reinsurance reserves?",
                  "a": "Recoveries also discounted.",
                  "explain": "Timing."
              },
              {
                  "q": "What data is needed for reinsurance reserving?",
                  "a": "Individual large claims, treaty details, programme history.",
                  "explain": "Detail."
              },
              {
                  "q": "How is catastrophe recovery reserved?",
                  "a": "Apply cat XoL to event estimates.",
                  "explain": "Exposure-based."
              },
              {
                  "q": "What is a sliding scale commission?",
                  "a": "Commission varying inversely with loss ratio.",
                  "explain": "Reserve adjustment."
              }
          ]
      },
      {
          "id": "m26",
          "title": "Accounting methods",
          "description": "Accounting for general insurance: earned premium and incurred claims, annual accounting, historical funded/three-year accounting at Lloyd's, deferred acquisition costs, IFRS 17 (premium allocation approach and general model), reinsurance accounting, and discounting.",
          "cards": [
              {
                  "q": "What is earned premium?",
                  "a": "Premium relating to the expired portion of cover.",
                  "explain": "Written less change in UPR."
              },
              {
                  "q": "What are incurred claims?",
                  "a": "Paid claims plus change in outstanding reserves.",
                  "explain": "Accounting period."
              },
              {
                  "q": "What is annual accounting?",
                  "a": "Recognising profit on the business earned in each financial year.",
                  "explain": "Standard."
              },
              {
                  "q": "What was three-year (funded) accounting?",
                  "a": "Deferring profit recognition until a year of account closes (Lloyd's historically).",
                  "explain": "Replaced."
              },
              {
                  "q": "What are deferred acquisition costs?",
                  "a": "Acquisition costs deferred in line with unearned premium.",
                  "explain": "Matching."
              },
              {
                  "q": "What is the IFRS 17 premium allocation approach (PAA)?",
                  "a": "A simplified approach for short-duration contracts similar to unearned premium accounting.",
                  "explain": "Most GI."
              },
              {
                  "q": "What is the IFRS 17 general measurement model?",
                  "a": "Fulfilment cash flows plus contractual service margin.",
                  "explain": "Long contracts."
              },
              {
                  "q": "What is the contractual service margin?",
                  "a": "Unearned profit released over coverage.",
                  "explain": "IFRS 17."
              },
              {
                  "q": "How is reinsurance accounted under IFRS 17?",
                  "a": "Separately from underlying contracts, with its own measurement.",
                  "explain": "Mismatch possible."
              },
              {
                  "q": "What is the effect of discounting on accounts?",
                  "a": "Lowers reserves; unwind of discount in finance expense.",
                  "explain": "IFRS 17."
              },
              {
                  "q": "What is an onerous contract?",
                  "a": "Where expected costs exceed premiums; loss recognised immediately.",
                  "explain": "IFRS 17."
              },
              {
                  "q": "What is the underwriting result?",
                  "a": "Earned premium minus incurred claims and expenses.",
                  "explain": "Before investment."
              },
              {
                  "q": "What is the technical account?",
                  "a": "Accounts showing underwriting results.",
                  "explain": "UK GAAP format."
              },
              {
                  "q": "How are prior-year movements reported?",
                  "a": "Reserve releases or strengthening affect current-year results.",
                  "explain": "Transparency."
              },
              {
                  "q": "How does accounting affect reserving?",
                  "a": "Basis (undiscounted/discounted, margins) set by accounting rules.",
                  "explain": "Purpose-specific."
              }
          ]
      },
      {
          "id": "m27",
          "title": "Interpreting accounts",
          "description": "Interpreting a general insurer's financial statements and regulatory returns: key ratios (loss, expense, combined, operating), reserve development and prior-year releases, solvency ratios and SFCR, investment returns, and using accounts to assess an insurer's performance and strength.",
          "cards": [
              {
                  "q": "What is the loss ratio?",
                  "a": "Incurred claims / earned premium.",
                  "explain": "Underwriting performance."
              },
              {
                  "q": "What is the expense ratio?",
                  "a": "Expenses / premium (written or earned).",
                  "explain": "Efficiency."
              },
              {
                  "q": "What is the combined ratio?",
                  "a": "Loss ratio + expense ratio; below 100% means underwriting profit.",
                  "explain": "Key metric."
              },
              {
                  "q": "What is the operating ratio?",
                  "a": "Combined ratio minus investment income ratio.",
                  "explain": "Overall."
              },
              {
                  "q": "What is the solvency ratio?",
                  "a": "Own funds / SCR.",
                  "explain": "Capital strength."
              },
              {
                  "q": "What does reserve development show?",
                  "a": "Whether prior-year reserves were adequate.",
                  "explain": "Triangles in notes."
              },
              {
                  "q": "Why can prior-year releases flatter results?",
                  "a": "Releases boost profit without reflecting current-year performance.",
                  "explain": "Quality of earnings."
              },
              {
                  "q": "What is the SFCR?",
                  "a": "Solvency and Financial Condition Report — public disclosure.",
                  "explain": "Pillar 3."
              },
              {
                  "q": "What can be learnt from accident-year loss ratios?",
                  "a": "Underlying pricing adequacy.",
                  "explain": "Versus calendar-year."
              },
              {
                  "q": "How can premium growth be interpreted?",
                  "a": "Rate increases vs volume growth vs mix.",
                  "explain": "Rate monitoring."
              },
              {
                  "q": "What indicates reserve weakness?",
                  "a": "Adverse development, low IBNR ratios, falling paid-to-incurred.",
                  "explain": "Red flags."
              },
              {
                  "q": "How do reinsurance costs affect ratios?",
                  "a": "Gross vs net ratios differ.",
                  "explain": "Reinsurance dependency."
              },
              {
                  "q": "Why compare with peers?",
                  "a": "Benchmarks for performance.",
                  "explain": "Context."
              },
              {
                  "q": "What is return on equity?",
                  "a": "Profit / shareholders' equity.",
                  "explain": "Shareholder return."
              },
              {
                  "q": "What are limitations of accounts?",
                  "a": "Accounting choices, lagging information, aggregation.",
                  "explain": "Use with other data."
              }
          ]
      },
      {
          "id": "m28",
          "title": "Principal terms",
          "description": "Key SP7 terminology — reserving, capital, reinsurance, market and accounting terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'IBNR'.",
                  "a": "Incurred but not reported claims.",
                  "explain": "Reserving."
              },
              {
                  "q": "Define 'development factor'.",
                  "a": "Ratio of cumulative claims at successive development periods.",
                  "explain": "Chain ladder."
              },
              {
                  "q": "Define 'ultimate loss ratio'.",
                  "a": "Ultimate claims / premium for an origin period.",
                  "explain": "Reserving."
              },
              {
                  "q": "Define 'RITC'.",
                  "a": "Reinsurance to close — closing a Lloyd's year of account.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "Define 'SCR'.",
                  "a": "Solvency Capital Requirement at 99.5% one-year VaR.",
                  "explain": "Solvency II."
              },
              {
                  "q": "Define 'risk margin'.",
                  "a": "Cost-of-capital addition to best estimate liabilities.",
                  "explain": "Solvency II."
              },
              {
                  "q": "Define 'Cape Cod'.",
                  "a": "BF variant estimating ELR from data using used-up premium.",
                  "explain": "Reserving."
              },
              {
                  "q": "Define 'tail factor'.",
                  "a": "Development beyond the triangle.",
                  "explain": "Reserving."
              },
              {
                  "q": "Define 'combined ratio'.",
                  "a": "Loss ratio plus expense ratio.",
                  "explain": "Accounts."
              },
              {
                  "q": "Define 'copula'.",
                  "a": "Function joining marginals into a joint distribution.",
                  "explain": "Diversification."
              },
              {
                  "q": "Define 'AURR'.",
                  "a": "Additional unexpired risk reserve.",
                  "explain": "Premium deficiency."
              },
              {
                  "q": "Define 'reinstatement premium'.",
                  "a": "Premium to restore XoL cover after a loss.",
                  "explain": "Reinsurance."
              },
              {
                  "q": "Define 'PML'.",
                  "a": "Probable maximum loss.",
                  "explain": "Catastrophe."
              },
              {
                  "q": "Define 'ENIDs'.",
                  "a": "Events not in data.",
                  "explain": "Best estimate."
              },
              {
                  "q": "Define 'ULAE'.",
                  "a": "Unallocated loss adjustment expenses.",
                  "explain": "Reserving."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp7-q1",
      title: "The underwriting cycle and long-tail business",
      modules: "Modules 1, 3, 7",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what the underwriting cycle is, and why historical claims experience must be interpreted in light of which cycle phase it was written in.",
          answer:
            "The underwriting cycle describes the genuine, recurring pattern of insurance market conditions moving between 'soft' phases (intense competition, lower premium rates, looser terms) and 'hard' phases (reduced competition, higher premium rates, tighter terms), meaning historical claims experience must be interpreted in light of <em>which</em> cycle phase it was written in, not treated as a uniform, comparable series across time.",
          note: "A strong answer explains both cycle phases and why this affects data interpretation, not just names the concept.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine difference between an 'occurrence' and a 'claims-made' policy wording, and why this distinction directly affects reserving.",
          answer:
            "An occurrence policy covers claims arising from an event that occurred during the policy period, regardless of when the claim is eventually reported, while a claims-made policy covers claims reported during the policy period, regardless of when the underlying event occurred; this affects which policy period bears responsibility for a given claim, directly shaping how reserves should be allocated across accident/underwriting years.",
          note: "A strong answer explains the reserving implication, not just the definitional difference.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a latent claim represents one of the most challenging reserving problems in general insurance, and why claims-made wordings might reduce an insurer's exposure to this challenge.",
          answer:
            "A latent claim arises from an event or exposure that may not be reported until many years or decades later, meaning standard reserving techniques relying on a reasonably short, observable reporting pattern are poorly suited to estimating these claims' eventual number and cost, requiring different, more judgement-based reserving approaches. Since a claims-made policy only covers claims reported during its own policy period (plus any extended reporting period), the insurer's exposure for that policy year is capped, unlike occurrence wordings where claims from events occurring in a given year could still emerge decades later.",
          note: "A strong answer explains both the genuine latent-claims challenge <em>and</em> the claims-made mitigation mechanism, not just one.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why competitive pressure during a soft market phase might create reserving risk that only becomes apparent years later.",
          answer:
            "Competitive pressure during a soft market can lead to looser underwriting standards or broader policy terms being accepted to retain market share, potentially creating worse-than-historical claims experience on business written during that period, a risk that may not become fully apparent until claims from that period mature years later.",
          note: "This connects directly to the delayed-reserving-risk-from-soft-market-business theme developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q2",
      title: "Reserving uncertainty and model risk",
      modules: "Modules 11, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between systematic and independent reserving uncertainty.",
          answer:
            "Systematic uncertainty reflects genuine, correlated sources of error affecting an insurer's whole reserving estimate simultaneously, while independent uncertainty reflects genuine, uncorrelated random variation specific to individual claims or accident years that would average out to some degree across a larger, more diversified book.",
          note: "A complete answer distinguishes both types clearly, not just names them.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why systematic reserving uncertainty is more concerning to an insurer's overall solvency than independent uncertainty of a similar apparent magnitude.",
          answer:
            "Since systematic uncertainty affects the whole reserve estimate in a correlated way, it cannot be diversified away across a larger book of business, meaning it directly translates into genuine, undiluted risk to the insurer's overall reserve adequacy, unlike independent uncertainty which reduces in relative significance as the book of business grows larger.",
          note: "A strong answer explains the diversification mechanism explicitly.",
        },
        {
          label: "(iii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between model risk and parameter risk in general insurance reserving, with an example of each.",
          answer:
            "Model risk is the genuine risk that the chosen reserving method (e.g. chain ladder versus Bornhuetter-Ferguson) is itself inappropriate for the specific data or situation — for example, applying a chain ladder to an immature accident year where development factors are highly unreliable. Parameter risk is the genuine risk that the specific parameter values used within an otherwise appropriately-chosen method are estimated inaccurately — for example, a mis-estimated development factor within a correctly-chosen chain ladder approach.",
          note: "A complete answer distinguishes both risk types <em>and</em> provides a genuine, distinct example of each.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a sound reserving process requires an explicit risk appetite, rather than simply aiming to minimise uncertainty as much as possible.",
          answer:
            "Since reserving uncertainty can never be eliminated entirely, a sound reserving process requires an explicit, deliberate decision about how much residual uncertainty and what level of prudence is acceptable, balancing the cost of excessive prudence against the risk of inadequate reserves.",
          note: "This connects directly to the risk-appetite-as-deliberate-balance theme developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q3",
      title: "The chain ladder method",
      modules: "Module 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "An accident year's cumulative claims stand at &pound;4,000,000 at the latest observed development period. The remaining development factors to ultimate for this year are 1.50, 1.20 and 1.05 (applied successively). Calculate the estimated ultimate claims and the resulting chain ladder reserve for this accident year.",
          answer:
            "Combined development factor to ultimate = 1.50 &times; 1.20 &times; 1.05 = 1.89. Estimated ultimate claims = &pound;4,000,000 &times; 1.89 = &pound;7,560,000. Chain ladder reserve = &pound;7,560,000 &minus; &pound;4,000,000 = &pound;3,560,000.",
          note: "Arithmetic check: 1.5×1.2×1.05=1.89; 4,000,000×1.89=7,560,000; reserve=3,560,000. Marks are typically split across the combined development factor and the final reserve figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine core assumption underlying the chain ladder calculation in part (i).",
          answer:
            "The chain ladder assumes that claims development patterns (the proportional relationship between cumulative claims at successive development periods) are consistent across different accident years, even though the absolute level of claims may differ between years.",
          note: "A strong answer explicitly distinguishes consistent development <em>pattern</em> from consistent claims <em>level</em>.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why this chain ladder estimate might be less reliable if this accident year is the most recent, least mature year in the triangle.",
          answer:
            "The most recent accident years have fewer development periods of observed data, meaning their projection to ultimate relies on applying larger development factors to a smaller, less mature base of observed claims, amplifying the genuine impact of any random fluctuation or estimation error in those later development factors.",
          note: "This connects the numeric calculation directly to the chain ladder's known limitation for immature years.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the underwriting cycle could threaten the reliability of the development factors used in part (i).",
          answer:
            "If underwriting conditions have shifted materially between accident years (e.g. tighter terms in a hard market altering claims development speed), the historical development pattern used to derive these factors may no longer represent how this specific, differently-underwritten year will develop.",
          note: "This connects directly to the underwriting-cycle-threatens-chain-ladder-assumptions theme developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q4",
      title: "The Bornhuetter-Ferguson method",
      modules: "Module 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "For the same accident year as the previous question (cumulative claims of &pound;4,000,000 at latest development, combined development factor to ultimate of 1.89), an independent a priori estimate of ultimate claims is &pound;5,000,000. Using the Bornhuetter-Ferguson method, calculate the percentage developed, the BF reserve, and the resulting BF estimate of ultimate claims.",
          answer:
            "Percentage developed = 1 / 1.89 = 52.91%. BF reserve = a priori ultimate &times; (1 &minus; % developed) = &pound;5,000,000 &times; (1 &minus; 0.5291) = &pound;5,000,000 &times; 0.4709 = &pound;2,354,497. BF ultimate = &pound;4,000,000 + &pound;2,354,497 = &pound;6,354,497 (to the nearest pound).",
          note: "Arithmetic check: pctDeveloped=52.91%; bfReserve=2,354,497.35; bfUltimate=6,354,497.35. Marks are typically split across the percentage-developed calculation, the BF reserve, and the final BF ultimate.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the chain ladder ultimate calculated in the previous question (&pound;7,560,000) differs from the Bornhuetter-Ferguson ultimate calculated in part (i) (&pound;6,354,497), and which is likely to be more reliable for this accident year.",
          answer:
            "The chain ladder relies purely on this accident year's own claims-based projection (applying development factors to observed claims), while BF blends this with an independent a priori estimate, weighting the a priori estimate more heavily for immature years where chain-ladder-implied development factors are least reliable. Since a chain ladder ultimate derived from applying a large development factor (1.89) to a relatively immature year is more exposed to estimation error, the BF estimate, which dampens this exposure by blending in the a priori view, is likely to be more reliable here.",
          note: "A strong answer explains <em>why</em> the figures differ (the blending mechanism) <em>and</em> makes a genuine, justified judgement about relative reliability.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why the quality of the &pound;5,000,000 a priori estimate used in part (i) matters more for this accident year than it would for a much more mature accident year.",
          answer:
            "Since BF weights the a priori estimate most heavily precisely for immature years, a poor a priori estimate would have its greatest distorting effect on exactly this kind of immature year, while for a mature year (where the chain-ladder-based component dominates the blend) a poor a priori estimate would have comparatively little effect on the final result.",
          note: "This connects the numeric example directly to BF's own weighting-mechanism logic.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 1,
          question:
            "Comment on how the Cape Cod method would derive its a priori estimate differently from the Bornhuetter-Ferguson approach used in part (i).",
          answer:
            "Rather than using an externally-supplied a priori estimate (as BF does), the Cape Cod method derives its a priori loss ratio directly from the insurer's own historical claims and premium data, reducing reliance on a purely external assumption.",
          note: "This connects directly to the Cape Cod-as-hybrid-method material developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q5",
      title: "IBNR, IBNER and claims inflation",
      modules: "Modules 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between IBNR and IBNER, and explain why these represent two different reserving gaps.",
          answer:
            "IBNR stands for 'Incurred But Not Reported' — claims that have already occurred but which the insurer has not yet been notified of, representing a genuine, entirely unknown future liability. IBNER stands for 'Incurred But Not Enough Reported' (or 'Reserved') — claims the insurer already knows about and has an existing case reserve for, but where that existing reserve may prove insufficient as the claim continues to develop. IBNR concerns claims the insurer doesn't yet <em>know</em> about at all, while IBNER concerns claims already known but potentially under-<em>reserved</em>.",
          note: "A complete answer distinguishes both concepts precisely, not just expands the acronyms.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a tail factor is, and why it might be particularly important for a long-tail line of business.",
          answer:
            "A tail factor extends a chain-ladder-style projection beyond the last development period actually observed in the data, capturing genuine, further expected claims development that the triangle's own limited historical data does not yet show, particularly important for long-tail lines where claims can continue developing for many years beyond the observed data window.",
          note: "This connects directly to the long-tail-business material developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the average cost per claim (ACPC) method's decomposition into frequency and severity might reveal insight the chain ladder's aggregate approach could miss.",
          answer:
            "Frequency and severity can be driven by different underlying factors and can move in different directions (e.g. claim frequency falling while average severity rises due to claims inflation), so decomposing them allows a reserving actuary to investigate and understand each driver separately, rather than seeing only their combined, potentially offsetting net effect in an aggregate figure.",
          note: "A strong answer gives a genuine, concrete example of frequency and severity moving in offsetting directions.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why claims inflation must be explicitly and separately incorporated into reserving projections, rather than assumed to be implicitly captured within standard development factors.",
          answer:
            "If claims inflation varies over time, development factors calculated from historical periods with different inflation experience may not reflect the inflation rate expected to apply to future claims payments, requiring explicit, separate treatment rather than assuming historical development factors implicitly and correctly capture future inflation trends.",
          note: "This connects directly to the explicit-inflation-treatment theme developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q6",
      title: "Stochastic reserving: Mack and ODP bootstrap",
      modules: "Module 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine relationship between the Mack model's reserve estimates and the standard chain ladder's reserve estimates.",
          answer:
            "The Mack model reproduces the same central reserve estimates as the standard chain ladder method, while additionally providing a genuine estimate of the standard error (and hence a measure of uncertainty) around those chain ladder estimates, without requiring a full distributional assumption for the underlying claims.",
          note: "A strong answer explains the additive (not replacing) relationship between Mack and the standard chain ladder.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what 'over-dispersion' means in the context of the ODP bootstrap model, and why it is necessary.",
          answer:
            "A standard Poisson distribution assumes its variance equals its mean, but real claims data typically exhibits greater variance than a standard Poisson would predict (genuine over-dispersion), so the ODP model introduces an additional scaling parameter allowing variance to exceed the mean, providing a more realistic fit to actual claims data's typically greater-than-Poisson variability.",
          note: "A strong answer explains <em>why</em> over-dispersion is needed (real data's greater variability), not just defines the term.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss how bootstrapping is applied within the ODP bootstrap reserving method, and why this method might be considered more flexible than the Mack model.",
          answer:
            "Bootstrapping resamples (with replacement) from residuals of an initial ODP model fit to the claims triangle to generate many simulated alternative 'pseudo-triangles', each producing its own chain-ladder-style reserve estimate; repeating this process many times builds up a genuine, empirical distribution of possible reserve outcomes. This is more flexible than Mack because it directly provides percentiles and full distributional shape information, while Mack's analytical approach provides only the mean and variance without a full distributional picture.",
          note: "A strong answer explains both the genuine bootstrapping mechanism <em>and</em> the flexibility comparison against Mack.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why residuals from the initial ODP model fit might require adjustment before being used in the bootstrap resampling process.",
          answer:
            "Raw residuals from a fitted model can understate the true underlying variability, since fitting a model to data inherently uses up some of that variability in estimating the model's own parameters, so an adjustment helps ensure the bootstrap resampling process produces a realistic, not artificially narrow, range of simulated outcomes.",
          note: "This connects directly to the residual-adjustment-for-degrees-of-freedom theme developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q7",
      title: "Internal models and the standard formula",
      modules: "Modules 8, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine trade-off a general insurer faces when deciding between the Solvency II standard formula and developing an internal capital model.",
          answer:
            "An internal model can better reflect the insurer's own genuine risk profile than a generic standard formula calibrated across the whole industry, potentially producing a more risk-sensitive (and possibly lower) capital requirement, though this requires regulatory approval and significant development investment.",
          note: "A strong answer names both sides of the trade-off (risk-sensitivity benefit versus development cost).",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the standard formula's genuine, industry-wide calibration might be particularly poorly suited to capturing a specific general insurer's catastrophe risk exposure.",
          answer:
            "The standard formula's catastrophe risk module reflects generic, industry-average assumptions about catastrophe exposure, while a specific insurer's actual geographic concentration and specific perils covered can differ materially from this industry average, making an internal model's more tailored catastrophe assessment particularly valuable for insurers with unusual or concentrated catastrophe exposure profiles.",
          note: "This connects directly to the catastrophe-risk-as-clearest-example theme developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a smaller general insurer might reasonably choose to remain on the standard formula, and what a 'partial internal model' might offer as a middle ground.",
          answer:
            "Developing and maintaining an internal model requires significant actuarial and technical resources, so for a smaller insurer whose risk profile does not diverge dramatically from industry-average assumptions, the genuine cost of internal model development may reasonably outweigh the potential benefit. A partial internal model allows an insurer to develop tailored internal modelling for specific risk modules where its own risk profile most diverges from standard formula assumptions (e.g. catastrophe risk), while continuing to use the standard formula for other, less distinctive risk modules, balancing genuine development effort against where tailored modelling adds most value.",
          note: "A strong answer explains both the proportionality rationale for staying on the standard formula <em>and</em> the genuine middle-ground value of a partial internal model.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an internal model requires genuine, ongoing validation and governance, beyond the initial regulatory approval process.",
          answer:
            "An internal model's genuine reliability depends on its underlying assumptions and calibration remaining appropriate over time, so ongoing validation and sound governance around model changes are essential, since a model's genuine value depends on ongoing maintenance, not simply on achieving initial regulatory approval.",
          note: "This connects directly to the ongoing-model-validation theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sp7-q8",
      title: "Diversification benefit and capital allocation",
      modules: "Module 22",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "An insurer's two business lines have standalone capital requirements of &pound;8,000,000 (Line A) and &pound;6,000,000 (Line B), with an assumed correlation of 0.4 between them. Using the formula $\\sqrt{C_A^2 + C_B^2 + 2\\rho C_A C_B}$, calculate the diversified aggregate capital requirement and the resulting diversification benefit.",
          answer:
            "Diversified capital = $\\sqrt{8,000,000^2 + 6,000,000^2 + 2 \\times 0.4 \\times 8,000,000 \\times 6,000,000} = \\sqrt{64,000,000,000,000 + 36,000,000,000,000 + 38,400,000,000,000} = \\sqrt{138,400,000,000,000} \\approx £11,764,353$. Diversification benefit = (£8,000,000 + £6,000,000) &minus; £11,764,353 = £2,235,647 (to the nearest pound).",
          note: "Arithmetic check: diversifiedCap≈11,764,352.94; benefit≈2,235,647.06. Marks are typically split across the diversified capital calculation and the final benefit figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the diversified capital requirement calculated in part (i) is lower than the simple sum of the two lines' standalone capital requirements.",
          answer:
            "Since the two business lines are not perfectly correlated (correlation of 0.4, less than 1), adverse outcomes across both lines simultaneously at their individual worst-case levels are less likely than each line's own individual worst case occurring in isolation, so the insurer's genuine aggregate capital requirement is typically lower than the simple sum of each line's standalone capital requirement.",
          note: "A strong answer explicitly connects the diversification benefit to the correlation being less than 1.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why a copula might be used instead of a simple correlation coefficient when aggregating these two risk sources in a genuine capital model.",
          answer:
            "A copula models the dependence structure between multiple risk sources separately from each variable's own individual distribution, allowing a capital model to combine risks with realistic, potentially non-linear dependence patterns (including genuine tail dependence, where risks become more correlated in extreme scenarios) rather than assuming a simple, constant linear correlation throughout.",
          note: "This connects the numeric correlation-based example directly to the more sophisticated copula material developed in this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why allocating the £11,764,353 diversified capital back to Lines A and B using the Euler principle would be more theoretically sound than a simple proportional allocation based on standalone capital.",
          answer:
            "The Euler principle allocates capital based on each risk source's genuine marginal contribution to the total, diversified capital requirement, while simple proportional allocation ignores these genuine interaction effects, potentially over- or under-allocating capital to a business line whose risk is more or less correlated with the rest of the portfolio than its standalone size alone would suggest.",
          note: "This connects the numeric diversification example directly to the Euler-allocation-principle material developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q9",
      title: "Value at Risk and Tail Value at Risk",
      modules: "Modules 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer's simulated aggregate loss distribution (5 equally likely outcomes, sorted ascending) is: £100,000, £200,000, £300,000, £400,000, £1,000,000. Calculate the 80% Value at Risk (VaR) and the 80% Tail Value at Risk (TVaR).",
          answer:
            "80% VaR is the 4th of 5 equally-likely, sorted outcomes = £400,000. 80% TVaR is the average of all outcomes at or above the VaR threshold: (£400,000 + £1,000,000) / 2 = £700,000.",
          note: "Arithmetic check: VaR80=400,000; TVaR80=700,000. Definitions matter with discrete outcomes: this answer uses TVaR = E[X | X &ge; VaR], which includes the VaR outcome itself. Under the expected-shortfall definition (the average of the worst 20% of outcomes) the answer would be &pound;1,000,000 &mdash; state which definition you use. This is a simplified discrete illustration; marks are typically split across correctly identifying VaR and correctly averaging the tail outcomes for TVaR.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the TVaR figure calculated in part (i) reveals genuine information the VaR figure alone does not.",
          answer:
            "VaR alone says nothing about how much worse losses could be beyond its threshold — here, VaR of £400,000 gives no indication that the worst outcome is actually £1,000,000. TVaR captures the average severity of losses beyond the threshold, directly revealing that the genuine tail risk (£700,000 average, driven by the £1,000,000 outcome) is materially worse than the £400,000 VaR figure alone would suggest.",
          note: "A strong answer uses the specific numbers from part (i) to illustrate the genuine information gap VaR leaves.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why TVaR is considered a more 'coherent' risk measure than VaR.",
          answer:
            "TVaR satisfies the mathematical property of sub-additivity (the risk measure of a combined portfolio is never greater than the sum of its individual components' risk measures, correctly reflecting genuine diversification benefit), while VaR can, in certain circumstances, violate this property, producing the counter-intuitive result that diversification appears to increase measured risk under VaR.",
          note: "A strong answer names sub-additivity specifically as the technical property distinguishing TVaR's coherence.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how Solvency II's SCR calculation applies the VaR concept.",
          answer:
            "Solvency II's SCR is calibrated to a 99.5% VaR over a one-year horizon, meaning the SCR represents the capital needed so that the insurer's basic own funds would remain non-negative with 99.5% confidence over the following year.",
          note: "This connects directly to the SCR's precise VaR calibration developed in this course.",
        },
      ],
    },
    {
      id: "sp7-q10",
      title: "Reinsurance modelling, counterparty risk and discounting",
      modules: "Modules 19, 24, 25",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why modelling a non-proportional (excess of loss) reinsurance treaty's recoveries requires understanding the full claims severity distribution, not just the aggregate claims total.",
          answer:
            "Since excess of loss recoveries depend on whether individual claims (or aggregate claims from a specific event) exceed a specified threshold, an actuary must understand how claims are distributed across different sizes to estimate how much of the total claims will fall above versus below the treaty's attachment point, information a simple aggregate total alone cannot provide.",
          note: "A strong answer explains <em>why</em> the distribution (not just the total) is needed, connecting to the attachment-point mechanism.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what counterparty default risk means for a general insurer's reinsurance programme, and why it could directly affect the insurer's genuine net reserve position.",
          answer:
            "Counterparty default risk is the genuine risk that a reinsurer fails to pay recoveries the ceding insurer is entitled to, meaning the insurer's net reserve position (assuming full recovery) could understate its true potential liability if a reinsurer's own financial weakness is not adequately reflected, requiring a genuine allowance for reinsurer credit risk when reserving on a net basis.",
          note: "This connects directly to the reserving-level impact of reinsurer counterparty risk developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a general insurer might discount its technical provisions to reflect the time value of money, and why the choice of discount rate requires genuine care.",
          answer:
            "Since claims (particularly for long-tail lines) may not be paid for years after the reserve is established, discounting reflects the genuine economic reality that a liability payable in the future is worth less today than its nominal, undiscounted amount. The discount rate requires genuine care because an excessively high rate would understate technical provisions, potentially masking genuine reserve inadequacy, so the rate should reflect the actual investment return the insurer can reliably expect to earn on assets backing these liabilities, rather than an arbitrary or overly optimistic assumption.",
          note: "A strong answer explains both <em>why</em> discounting is applied <em>and</em> why the rate choice requires genuine prudence.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an insurer's investment strategy for assets backing its technical provisions should reflect the specific duration and certainty of the underlying liabilities.",
          answer:
            "Since different lines of business carry different claim payment timing and predictability (short-tail versus long-tail), investment strategy should match assets to the specific duration and liquidity needs of the liabilities being backed, rather than applying a single, undifferentiated investment approach across an insurer's whole reserve base.",
          note: "This connects directly to CM2's and SA3's asset-liability matching material.",
        },
      ],
    },
  ],
});

// SA3 General Insurance: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SA3", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction to Subject SA3",
          "description": "SA3's aims and structure: applying general insurance principles to complex practical problems in the UK market and London/Lloyd's, the syllabus topics, the case-study chapters, and what examiners expect.",
          "cards": [
              {
                  "q": "What is the aim of SA3?",
                  "a": "To apply GI knowledge to complex practical situations, giving advice and recommendations in the context of the UK and international GI environment.",
                  "explain": "Specialist Advanced."
              },
              {
                  "q": "How does SA3 build on SP7 and SP8?",
                  "a": "It assumes their reserving, capital and pricing techniques and applies them to business decisions.",
                  "explain": "Integration."
              },
              {
                  "q": "Why are case studies included?",
                  "a": "To practise integrated problem-solving across reserving, reinsurance and strategy.",
                  "explain": "Chapters 14–16."
              },
              {
                  "q": "What market does SA3 focus on?",
                  "a": "The UK, including the London market and Lloyd's.",
                  "explain": "Context."
              },
              {
                  "q": "What skills are tested?",
                  "a": "Analysis, judgement, recommendations, communication.",
                  "explain": "Higher-order."
              },
              {
                  "q": "What topics feature strongly?",
                  "a": "Legislation and regulation, pricing large risks, cat models, capital returns, valuation bases, latent claims, exit strategies.",
                  "explain": "Chapters."
              },
              {
                  "q": "Why is legislation a large chapter?",
                  "a": "UK legal changes (e.g. Ogden, whiplash reforms, Insurance Act) strongly affect GI.",
                  "explain": "74 pages."
              },
              {
                  "q": "How should SA3 answers be structured?",
                  "a": "Identify issues, stakeholders, options, analysis, recommendation.",
                  "explain": "Structure."
              },
              {
                  "q": "What role does the Lloyd's market play?",
                  "a": "Many SA3 scenarios involve syndicates, RITC and Lloyd's oversight.",
                  "explain": "Specialist."
              },
              {
                  "q": "Why consider stakeholders?",
                  "a": "Policyholders, shareholders, regulators, Names, brokers, reinsurers.",
                  "explain": "Balance."
              },
              {
                  "q": "What exam format applies?",
                  "a": "Two papers with long scenario questions.",
                  "explain": "Stamina."
              },
              {
                  "q": "Why is commercial awareness important?",
                  "a": "Advice must consider business realities.",
                  "explain": "Practicality."
              },
              {
                  "q": "What is the Core Reading date for 2025?",
                  "a": "31 May 2024.",
                  "explain": "Currency."
              },
              {
                  "q": "What appendices support SA3?",
                  "a": "Decision-making tools and insurance products appendices.",
                  "explain": "Reference."
              },
              {
                  "q": "Why read further material?",
                  "a": "The course includes further reading on current issues.",
                  "explain": "Topicality."
              }
          ]
      },
      {
          "id": "m02",
          "title": "The general insurance market",
          "description": "The structure of the UK and international GI market: personal, commercial and London market business, Lloyd's, distribution and intermediaries, delegated authority, reinsurance and alternative capital, market cycles, and current market issues.",
          "cards": [
              {
                  "q": "What are the main segments of the UK GI market?",
                  "a": "Personal lines, commercial (SME and large corporate), London market specialty and reinsurance.",
                  "explain": "Structure."
              },
              {
                  "q": "What is the London market?",
                  "a": "Wholesale specialty market including Lloyd's and company market in London.",
                  "explain": "Global risks."
              },
              {
                  "q": "What role do brokers play?",
                  "a": "Place risks, advise clients, negotiate terms; major brokers have significant influence.",
                  "explain": "Distribution."
              },
              {
                  "q": "What is delegated authority?",
                  "a": "Underwriting authority given to coverholders/MGAs.",
                  "explain": "Oversight risk."
              },
              {
                  "q": "What is alternative capital?",
                  "a": "Capital from investors via ILS, cat bonds, sidecars, collateralised reinsurance.",
                  "explain": "Reinsurance capacity."
              },
              {
                  "q": "How do market cycles affect GI?",
                  "a": "Hard and soft markets change pricing and capacity.",
                  "explain": "Cycle management."
              },
              {
                  "q": "What are current market issues?",
                  "a": "Inflation, climate, cyber, pricing regulation, social inflation, reserve adequacy.",
                  "explain": "Topical."
              },
              {
                  "q": "What are captives?",
                  "a": "Insurers owned by corporates to insure own risks.",
                  "explain": "Risk financing."
              },
              {
                  "q": "What are MGAs?",
                  "a": "Managing general agents with underwriting authority.",
                  "explain": "Growth area."
              },
              {
                  "q": "What are aggregators?",
                  "a": "Price comparison websites dominating personal lines distribution.",
                  "explain": "Competition."
              },
              {
                  "q": "How has the FCA intervened in personal lines pricing?",
                  "a": "GIPP rules banning price walking (2022).",
                  "explain": "Market change."
              },
              {
                  "q": "What is facultative placement?",
                  "a": "Individual risk reinsurance.",
                  "explain": "Large risks."
              },
              {
                  "q": "What is the subscription market?",
                  "a": "Multiple insurers share large risks, with lead/follow roles.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "What drives GI profitability?",
                  "a": "Underwriting discipline, claims management, investment returns, expenses.",
                  "explain": "Combined ratio."
              },
              {
                  "q": "Why consider international markets?",
                  "a": "Global risks, regulatory comparisons.",
                  "explain": "Context."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Taxation",
          "description": "Taxation affecting UK general insurers: insurance premium tax, corporation tax on insurers (technical provisions, discounting, equalisation), taxation at Lloyd's, VAT exemption, tax on captives and cross-border issues, and tax effects on pricing and strategy.",
          "cards": [
              {
                  "q": "What is insurance premium tax (IPT)?",
                  "a": "A tax on GI premiums: standard rate 12%, higher rate 20% on certain products (e.g. travel, some add-ons).",
                  "explain": "Customer cost."
              },
              {
                  "q": "How are GI companies taxed on profits?",
                  "a": "Corporation tax (25% main rate) on profits including underwriting and investment results.",
                  "explain": "Accounting-based."
              },
              {
                  "q": "How are technical provisions treated for tax?",
                  "a": "Generally deductible if calculated on a proper accounting basis.",
                  "explain": "Timing."
              },
              {
                  "q": "How are Lloyd's members taxed?",
                  "a": "Profits taxed per year of account as members' income, with special rules.",
                  "explain": "Corporate and individual."
              },
              {
                  "q": "Why is VAT relevant?",
                  "a": "Insurance is exempt from VAT, so insurers can't recover input VAT on costs.",
                  "explain": "Cost."
              },
              {
                  "q": "How does tax affect captive location?",
                  "a": "Captives may be domiciled in low-tax jurisdictions, subject to anti-avoidance rules.",
                  "explain": "CFC rules."
              },
              {
                  "q": "How does IPT affect pricing?",
                  "a": "Adds to customer price; may influence product structuring.",
                  "explain": "Rates."
              },
              {
                  "q": "What is double taxation relief?",
                  "a": "Relief for foreign taxes on overseas profits.",
                  "explain": "Cross-border."
              },
              {
                  "q": "How does tax affect reinsurance?",
                  "a": "Reinsurance premiums deductible; cross-border reinsurance tax considerations.",
                  "explain": "Planning."
              },
              {
                  "q": "How are claims equalisation reserves treated?",
                  "a": "Historically tax-deductible; abolished under Solvency II framework in UK.",
                  "explain": "Legacy."
              },
              {
                  "q": "How does discounting of reserves affect tax?",
                  "a": "Tax computations may follow accounting basis.",
                  "explain": "IFRS 17."
              },
              {
                  "q": "What is the effect of tax on reserve strengthening?",
                  "a": "Deduction reduces tax on profits.",
                  "explain": "Timing."
              },
              {
                  "q": "How can tax changes affect insurers?",
                  "a": "Rates, IPT changes affect demand and profits.",
                  "explain": "Risk."
              },
              {
                  "q": "What tax issues arise in M&A?",
                  "a": "Losses carried forward, reserve adequacy, deferred tax.",
                  "explain": "Due diligence."
              },
              {
                  "q": "How do different jurisdictions tax insurers?",
                  "a": "Varied approaches to reserves and profits.",
                  "explain": "Comparison."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Legislation",
          "description": "UK legislation affecting general insurance: compulsory covers (motor, employers' liability), the Insurance Act 2015 and CIDRA, personal injury law and the Ogden discount rate, the Civil Liability Act and whiplash reforms, periodical payment orders, third-party rights, equality and data law, flood and terrorism schemes, and legal developments' effect on reserving and pricing.",
          "cards": [
              {
                  "q": "Which GI covers are compulsory in the UK?",
                  "a": "Third-party motor liability and employers' liability.",
                  "explain": "Legal minimums."
              },
              {
                  "q": "What is the Insurance Act 2015?",
                  "a": "Commercial insurance law introducing the duty of fair presentation and proportionate remedies.",
                  "explain": "Replaced utmost good faith rules."
              },
              {
                  "q": "What is CIDRA?",
                  "a": "Consumer Insurance (Disclosure and Representations) Act 2012 — duty to take reasonable care not to misrepresent.",
                  "explain": "Consumers."
              },
              {
                  "q": "What is the Ogden discount rate?",
                  "a": "Rate used to calculate lump sum personal injury awards; −0.25% from 2019 (as at the Core Reading date).",
                  "explain": "Large reserving impact."
              },
              {
                  "q": "How does the Ogden rate affect reserves?",
                  "a": "Lower rates increase lump sum awards, particularly for young, seriously injured claimants.",
                  "explain": "Motor and EL."
              },
              {
                  "q": "What are periodical payment orders (PPOs)?",
                  "a": "Court-ordered annual payments for future care costs, often indexed to ASHE 6115.",
                  "explain": "Longevity and inflation risk."
              },
              {
                  "q": "What did the Civil Liability Act 2018 do?",
                  "a": "Introduced whiplash tariffs and a new process for setting the Ogden rate.",
                  "explain": "Motor claims."
              },
              {
                  "q": "What was the effect of whiplash reforms (2021)?",
                  "a": "Fixed tariffs and raised small claims limit, reducing claim costs.",
                  "explain": "Frequency and severity."
              },
              {
                  "q": "What is the Third Parties (Rights against Insurers) Act 2010?",
                  "a": "Allows claimants to proceed directly against insurers of insolvent insureds.",
                  "explain": "Liability."
              },
              {
                  "q": "What is Flood Re?",
                  "a": "A reinsurance scheme making flood cover affordable for high-risk homes.",
                  "explain": "Market intervention."
              },
              {
                  "q": "What is Pool Re?",
                  "a": "Government-backed terrorism reinsurer for commercial property.",
                  "explain": "Terrorism."
              },
              {
                  "q": "How does data law affect GI?",
                  "a": "UK GDPR restricts personal data use in pricing and claims.",
                  "explain": "Compliance."
              },
              {
                  "q": "How can equality law affect pricing?",
                  "a": "Prohibits gender-based pricing; other protected characteristics.",
                  "explain": "Fairness."
              },
              {
                  "q": "How do legal changes create reserving risk?",
                  "a": "Retrospective effects on outstanding claims.",
                  "explain": "Uncertainty."
              },
              {
                  "q": "What is the Motor Insurers' Bureau?",
                  "a": "Compensates victims of uninsured and untraced drivers, funded by insurers.",
                  "explain": "Levy."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Professional guidance",
          "description": "Professional standards for GI actuaries: the Actuaries' Code, TAS 100 and TAS 200, IFoA APSs and guidance on reserving and pricing work, Lloyd's requirements for Statements of Actuarial Opinion, and communicating uncertainty.",
          "cards": [
              {
                  "q": "What is TAS 200?",
                  "a": "Technical Actuarial Standard for insurance work.",
                  "explain": "GI and life."
              },
              {
                  "q": "What does TAS 100 require?",
                  "a": "Appropriate judgement, data, assumptions, models and communication in technical actuarial work.",
                  "explain": "Generic."
              },
              {
                  "q": "What is a Statement of Actuarial Opinion (SAO) at Lloyd's?",
                  "a": "An opinion on the reasonableness of syndicate reserves, required annually.",
                  "explain": "Lloyd's requirement."
              },
              {
                  "q": "What must actuaries communicate about uncertainty?",
                  "a": "Nature and extent of uncertainty in results.",
                  "explain": "TAS."
              },
              {
                  "q": "How should data limitations be handled?",
                  "a": "Disclosed with their effect on results.",
                  "explain": "Transparency."
              },
              {
                  "q": "What is the Actuaries' Code?",
                  "a": "Ethical principles for IFoA members.",
                  "explain": "Integrity."
              },
              {
                  "q": "How should conflicts be managed?",
                  "a": "Identify, disclose, manage or decline.",
                  "explain": "Independence."
              },
              {
                  "q": "What is peer review?",
                  "a": "Independent review of work for quality.",
                  "explain": "APS X2."
              },
              {
                  "q": "How does guidance apply to pricing?",
                  "a": "Pricing work must meet TAS standards on assumptions and communication.",
                  "explain": "Consistency."
              },
              {
                  "q": "What are Lloyd's reserving guidelines?",
                  "a": "Requirements for syndicate reserving and SAOs.",
                  "explain": "Oversight."
              },
              {
                  "q": "Why is documentation important?",
                  "a": "Allows review and reproduction.",
                  "explain": "TAS 100."
              },
              {
                  "q": "What is the role of the actuarial function holder?",
                  "a": "Senior responsibility for actuarial function under Solvency UK.",
                  "explain": "SMF20."
              },
              {
                  "q": "How should results be presented to boards?",
                  "a": "Clear key messages and ranges.",
                  "explain": "Communication."
              },
              {
                  "q": "What is materiality in actuarial work?",
                  "a": "Whether an item could influence decisions.",
                  "explain": "Proportionality."
              },
              {
                  "q": "Why follow professional guidance?",
                  "a": "Protects users and profession's reputation.",
                  "explain": "Trust."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Pricing large commercial risks",
          "description": "Pricing large commercial and London market risks: data (submissions, loss histories, exposure information), experience and exposure rating, layers and deductibles, captives and alternative structures, underwriting judgement, broker negotiation, and pricing adequacy monitoring.",
          "cards": [
              {
                  "q": "What data is typically in a large risk submission?",
                  "a": "Loss history (often 5–10 years), exposure details, risk information, current terms, reinsurance, broker narrative.",
                  "explain": "Varied quality."
              },
              {
                  "q": "How is experience rating applied?",
                  "a": "Trend and develop past losses, adjust for exposure, apply layer terms.",
                  "explain": "Burning cost."
              },
              {
                  "q": "How is exposure rating applied?",
                  "a": "Using exposure curves or ILFs to allocate expected loss to layers.",
                  "explain": "Sparse data."
              },
              {
                  "q": "Why blend experience and exposure rates?",
                  "a": "Balance credibility of the risk's own data with benchmarks.",
                  "explain": "Credibility."
              },
              {
                  "q": "How are deductibles priced?",
                  "a": "Estimating loss elimination from the deductible via severity distributions.",
                  "explain": "Loss elimination ratio."
              },
              {
                  "q": "What is a large deductible programme?",
                  "a": "Insured retains large deductible, insurer handles claims.",
                  "explain": "Credit risk on reimbursement."
              },
              {
                  "q": "How do captives affect pricing?",
                  "a": "Insurer may front and reinsure to captive; pricing for fronting and credit risk.",
                  "explain": "Structures."
              },
              {
                  "q": "What role does underwriting judgement play?",
                  "a": "Adjusting for risk quality, management, loss control.",
                  "explain": "Schedule rating."
              },
              {
                  "q": "How do brokers influence pricing?",
                  "a": "Negotiate terms and market price; distinguish technical vs market price.",
                  "explain": "Negotiation."
              },
              {
                  "q": "What is a layered programme?",
                  "a": "Multiple insurers taking different layers of cover.",
                  "explain": "Tower."
              },
              {
                  "q": "How is pricing adequacy monitored?",
                  "a": "Comparing charged vs technical price, rate monitoring.",
                  "explain": "Portfolio management."
              },
              {
                  "q": "What are the challenges of pricing unique risks?",
                  "a": "Little data, heterogeneous exposures, catastrophe potential.",
                  "explain": "Judgement."
              },
              {
                  "q": "How are multi-year policies priced?",
                  "a": "Allowing for trend and uncertainty over longer terms.",
                  "explain": "Rate guarantees."
              },
              {
                  "q": "What is loss sensitivity analysis?",
                  "a": "Testing price sensitivity to assumptions.",
                  "explain": "Robustness."
              },
              {
                  "q": "How is catastrophe exposure included?",
                  "a": "Cat model loadings for property.",
                  "explain": "Chapter 7."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Catastrophe models",
          "description": "Catastrophe models in practice: model structure, key outputs (AAL, OEP/AEP, PML), uses (pricing, reinsurance purchase, capital, accumulation management), limitations and uncertainty, model evaluation and adjustment, non-modelled risks and climate change.",
          "cards": [
              {
                  "q": "What are the main uses of cat models?",
                  "a": "Pricing, reinsurance purchasing, capital modelling, accumulation management, portfolio optimisation.",
                  "explain": "Uses."
              },
              {
                  "q": "What are cat model limitations?",
                  "a": "Model uncertainty, data quality, non-modelled perils, secondary uncertainty, climate trends.",
                  "explain": "Limitations."
              },
              {
                  "q": "What is model evaluation?",
                  "a": "Assessing a vendor model's suitability for the portfolio (validation, back-testing against events).",
                  "explain": "Regulatory expectation."
              },
              {
                  "q": "How can models be adjusted?",
                  "a": "Loadings for non-modelled perils, blending models, adjusting vulnerability.",
                  "explain": "Own view of risk."
              },
              {
                  "q": "What is an own view of risk?",
                  "a": "Insurer's adjusted view rather than raw vendor output.",
                  "explain": "Lloyd's requirement."
              },
              {
                  "q": "What is accumulation management?",
                  "a": "Monitoring and limiting concentrated exposures.",
                  "explain": "Realistic disaster scenarios."
              },
              {
                  "q": "What are Lloyd's realistic disaster scenarios?",
                  "a": "Prescribed catastrophe scenarios syndicates must estimate losses for.",
                  "explain": "Oversight."
              },
              {
                  "q": "How does climate change affect models?",
                  "a": "Historical catalogues may understate current and future risk.",
                  "explain": "Adjustments."
              },
              {
                  "q": "What is demand surge?",
                  "a": "Post-event inflation in repair costs.",
                  "explain": "Loss amplification."
              },
              {
                  "q": "What are non-modelled perils?",
                  "a": "Perils without vendor models (e.g. some floods, wildfire in some regions).",
                  "explain": "Loadings."
              },
              {
                  "q": "How do data quality issues affect models?",
                  "a": "Poor geocoding or construction data mislead results.",
                  "explain": "Garbage in."
              },
              {
                  "q": "What is secondary uncertainty?",
                  "a": "Uncertainty in damage given an event.",
                  "explain": "Distribution."
              },
              {
                  "q": "How are cat models used for reinsurance?",
                  "a": "Setting retention and limit, pricing layers.",
                  "explain": "Programme design."
              },
              {
                  "q": "What is a PML?",
                  "a": "Loss at a given return period.",
                  "explain": "Capital."
              },
              {
                  "q": "Why use multiple models?",
                  "a": "Reduce model risk.",
                  "explain": "Blending."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Return on capital",
          "description": "Measuring and targeting return on capital in GI: capital allocation to lines and policies, risk-adjusted pricing, target returns and hurdle rates, economic value added, and using return on capital in underwriting, reinsurance and strategic decisions.",
          "cards": [
              {
                  "q": "Why measure return on capital?",
                  "a": "To assess whether business earns adequate returns for the risk taken.",
                  "explain": "Value."
              },
              {
                  "q": "How is capital allocated to lines?",
                  "a": "By contribution to total risk (Euler, marginal, proportional).",
                  "explain": "Capital model."
              },
              {
                  "q": "What is a hurdle rate?",
                  "a": "Minimum required return on allocated capital.",
                  "explain": "Cost of capital."
              },
              {
                  "q": "How is return on capital used in pricing?",
                  "a": "Premiums set to achieve target return on allocated capital.",
                  "explain": "Risk-adjusted pricing."
              },
              {
                  "q": "What is RAROC in GI?",
                  "a": "Risk-adjusted profit / allocated capital.",
                  "explain": "Performance."
              },
              {
                  "q": "What is EVA?",
                  "a": "Profit minus cost of capital.",
                  "explain": "Value creation."
              },
              {
                  "q": "How does reinsurance affect return on capital?",
                  "a": "Reduces capital but costs premium; net effect assessed.",
                  "explain": "Efficiency."
              },
              {
                  "q": "How can returns differ by line?",
                  "a": "Different risk profiles and margins.",
                  "explain": "Portfolio."
              },
              {
                  "q": "What is the effect of long-tail business?",
                  "a": "Capital tied up for longer; investment income offset.",
                  "explain": "Timing."
              },
              {
                  "q": "How is capital measured over time?",
                  "a": "Projecting capital requirements over run-off.",
                  "explain": "Multi-period."
              },
              {
                  "q": "What are limitations of return on capital?",
                  "a": "Capital allocation subjectivity, model risk.",
                  "explain": "Judgement."
              },
              {
                  "q": "How are diversification benefits allocated?",
                  "a": "Across lines by allocation method.",
                  "explain": "Fairness."
              },
              {
                  "q": "What is the cost of capital?",
                  "a": "Return required by capital providers.",
                  "explain": "CAPM or target."
              },
              {
                  "q": "How does ROC inform strategy?",
                  "a": "Grow lines exceeding hurdle, shrink others.",
                  "explain": "Allocation."
              },
              {
                  "q": "How do rating agencies influence capital?",
                  "a": "Rating capital requirements may bind.",
                  "explain": "Constraints."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Valuation bases",
          "description": "Valuing GI liabilities for different purposes: Solvency UK technical provisions, IFRS 17, UK GAAP, Lloyd's RITC and SAOs, M&A, commutations and portfolio transfers, tax — and why methods, assumptions, discounting and margins differ between them.",
          "cards": [
              {
                  "q": "Why do valuation bases differ?",
                  "a": "Different purposes and users require different prudence, discounting and scope.",
                  "explain": "Purpose-driven."
              },
              {
                  "q": "What is the Solvency UK technical provisions basis?",
                  "a": "Discounted best estimate (claims and premium provisions) plus risk margin, including ENIDs.",
                  "explain": "Regulatory."
              },
              {
                  "q": "What is the IFRS 17 basis?",
                  "a": "Discounted fulfilment cash flows plus risk adjustment (PAA for most GI).",
                  "explain": "Accounting."
              },
              {
                  "q": "What is a best estimate for M&A?",
                  "a": "Realistic view of reserves for pricing a transaction, possibly with buyer's margin.",
                  "explain": "Negotiation."
              },
              {
                  "q": "How are reserves valued for commutations?",
                  "a": "Discounted expected liabilities plus risk loading, negotiated with counterparties.",
                  "explain": "Settlement."
              },
              {
                  "q": "How is RITC priced?",
                  "a": "Estimated liabilities plus appropriate margin, fair between years of account.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "What are ENIDs?",
                  "a": "Events not in data included in Solvency II best estimates.",
                  "explain": "Completeness."
              },
              {
                  "q": "How are premium provisions calculated?",
                  "a": "Expected claims and expenses on unexpired cover and bound but not incepted business, less future premiums.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How does discounting differ?",
                  "a": "Solvency II uses PRA risk-free curve; IFRS 17 may add illiquidity premium.",
                  "explain": "Rates."
              },
              {
                  "q": "What margins are held in accounting reserves?",
                  "a": "Management margins above best estimate in some regimes.",
                  "explain": "Prudence."
              },
              {
                  "q": "How do bases differ for tax?",
                  "a": "Follow accounting with adjustments.",
                  "explain": "Timing."
              },
              {
                  "q": "How is uncertainty reflected?",
                  "a": "Risk margin (SII), risk adjustment (IFRS 17), margins (GAAP).",
                  "explain": "Different."
              },
              {
                  "q": "What is the role of the actuary in valuations?",
                  "a": "Estimating liabilities and explaining differences.",
                  "explain": "Communication."
              },
              {
                  "q": "What is a portfolio transfer valuation?",
                  "a": "Valuing liabilities for transfer to another insurer.",
                  "explain": "Part VII."
              },
              {
                  "q": "Why reconcile bases?",
                  "a": "Explain differences to stakeholders.",
                  "explain": "Transparency."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Financial planning",
          "description": "Business and financial planning for general insurers: business plans, premium and claims projections, capital and solvency projections, ORSA, stress and scenario testing, reinsurance and investment planning, and monitoring performance against plan.",
          "cards": [
              {
                  "q": "What does a GI business plan include?",
                  "a": "Premium volumes and rates, loss ratios, expenses, reinsurance, investment income, capital and solvency projections.",
                  "explain": "Planning."
              },
              {
                  "q": "What is the role of actuaries in planning?",
                  "a": "Projecting loss ratios, reserves, capital, and assessing plan risks.",
                  "explain": "Support."
              },
              {
                  "q": "What is the ORSA's role in planning?",
                  "a": "Assessing risks and capital needs over the plan horizon.",
                  "explain": "Forward-looking."
              },
              {
                  "q": "How are stress tests used?",
                  "a": "Testing plan resilience to adverse scenarios.",
                  "explain": "Capital adequacy."
              },
              {
                  "q": "What is Lloyd's syndicate business planning (SBF)?",
                  "a": "Syndicates submit business forecasts for approval by Lloyd's.",
                  "explain": "Oversight."
              },
              {
                  "q": "How are plan loss ratios set?",
                  "a": "From pricing, rate changes, trends, and reserving experience.",
                  "explain": "Consistency."
              },
              {
                  "q": "Why monitor performance against plan?",
                  "a": "Early identification of deviations.",
                  "explain": "Control."
              },
              {
                  "q": "How does reinsurance planning fit?",
                  "a": "Cost and structure affect net results and capital.",
                  "explain": "Integrated."
              },
              {
                  "q": "What is capital planning?",
                  "a": "Ensuring sufficient capital for the plan and buffers.",
                  "explain": "Risk appetite."
              },
              {
                  "q": "How do market cycles affect plans?",
                  "a": "Rate adequacy assumptions must reflect cycle.",
                  "explain": "Realism."
              },
              {
                  "q": "What is scenario analysis in planning?",
                  "a": "Considering alternative futures.",
                  "explain": "Strategy."
              },
              {
                  "q": "How are expenses planned?",
                  "a": "Budgets by function, allocation to lines.",
                  "explain": "Ratios."
              },
              {
                  "q": "What role does investment planning play?",
                  "a": "Investment income projection and ALM.",
                  "explain": "Returns."
              },
              {
                  "q": "What is reverse stress testing?",
                  "a": "Identifying scenarios that would break the plan.",
                  "explain": "Required."
              },
              {
                  "q": "Why involve underwriters in planning?",
                  "a": "Realistic volume and rate assumptions.",
                  "explain": "Buy-in."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Latent and disease claims",
          "description": "Latent and disease claims: nature (asbestos, industrial deafness, other industrial diseases, abuse, emerging latent risks), legal and exposure drivers, reserving methods (exposure-based, survival ratio, benchmark, curve fitting to notifications), and uncertainty.",
          "cards": [
              {
                  "q": "What are latent claims?",
                  "a": "Claims from exposures long ago that manifest years later (e.g. asbestos-related disease).",
                  "explain": "Long latency."
              },
              {
                  "q": "Why are latent claims hard to reserve?",
                  "a": "Long latency, legal changes, sparse data, uncertain exposure and disease incidence.",
                  "explain": "Uncertainty."
              },
              {
                  "q": "What asbestos-related diseases drive claims?",
                  "a": "Mesothelioma, asbestosis, lung cancer, pleural thickening.",
                  "explain": "Types."
              },
              {
                  "q": "What is the survival ratio method?",
                  "a": "Reserve = survival ratio × current annual payments (years of payments covered).",
                  "explain": "Benchmark."
              },
              {
                  "q": "What is an exposure-based method?",
                  "a": "Modelling claims from exposed populations and disease incidence projections.",
                  "explain": "Epidemiological."
              },
              {
                  "q": "How are notification curves used?",
                  "a": "Fitting curves to past notifications to project future claims.",
                  "explain": "Projection."
              },
              {
                  "q": "What is benchmarking?",
                  "a": "Comparing to market share of industry estimates.",
                  "explain": "Market share."
              },
              {
                  "q": "What is noise-induced hearing loss?",
                  "a": "Industrial deafness claims, affected by claims management behaviour.",
                  "explain": "Latent-type."
              },
              {
                  "q": "What legal factors affect latent claims?",
                  "a": "Court rulings on liability allocation (e.g. Fairchild, Barker, Compensation Act 2006).",
                  "explain": "Legal risk."
              },
              {
                  "q": "What emerging latent risks exist?",
                  "a": "PFAS, microplastics, EMF, social media harm.",
                  "explain": "Monitoring."
              },
              {
                  "q": "How does claims inflation affect latent claims?",
                  "a": "Legal costs and award increases.",
                  "explain": "Severity."
              },
              {
                  "q": "Why is reinsurance important for latent claims?",
                  "a": "Old policies may have reinsurance recoveries; disputes common.",
                  "explain": "Recoveries."
              },
              {
                  "q": "What is the role of coverage disputes?",
                  "a": "Uncertain which policies respond.",
                  "explain": "Allocation."
              },
              {
                  "q": "How is uncertainty communicated?",
                  "a": "Scenario ranges and sensitivity to disease projections.",
                  "explain": "Transparency."
              },
              {
                  "q": "How can latent liabilities be exited?",
                  "a": "LPTs, ADCs, Part VII transfers to run-off specialists.",
                  "explain": "Chapter 12."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Exit strategies",
          "description": "Exit strategies for general insurance business: run-off, sale of the company or portfolio, loss portfolio transfers, adverse development covers, Part VII transfers, schemes of arrangement, commutations, and the considerations for each.",
          "cards": [
              {
                  "q": "What is run-off?",
                  "a": "Continuing to manage and pay claims on business no longer written.",
                  "explain": "Default exit."
              },
              {
                  "q": "What is a loss portfolio transfer (LPT)?",
                  "a": "Transferring reserves and risk of existing claims to a reinsurer for a premium.",
                  "explain": "Finality."
              },
              {
                  "q": "What is an adverse development cover (ADC)?",
                  "a": "Reinsurance protecting against reserve deterioration above a level.",
                  "explain": "Tail protection."
              },
              {
                  "q": "What is a Part VII transfer?",
                  "a": "Court-approved transfer of insurance business to another insurer.",
                  "explain": "Legal finality."
              },
              {
                  "q": "What is a scheme of arrangement?",
                  "a": "Court-sanctioned compromise with creditors, often to crystallise liabilities and close.",
                  "explain": "Solvent schemes."
              },
              {
                  "q": "What are commutations?",
                  "a": "Negotiated settlements of reinsurance or policy obligations for a lump sum.",
                  "explain": "Finality."
              },
              {
                  "q": "What are considerations in choosing an exit?",
                  "a": "Cost, finality, capital release, policyholder protection, regulatory approval, timing, tax.",
                  "explain": "Trade-offs."
              },
              {
                  "q": "Who are run-off consolidators?",
                  "a": "Specialist acquirers of legacy business.",
                  "explain": "Market."
              },
              {
                  "q": "What are the benefits of exiting legacy business?",
                  "a": "Capital release, management focus, reduced volatility.",
                  "explain": "Strategy."
              },
              {
                  "q": "What are the risks of an LPT?",
                  "a": "Counterparty risk, price, residual liability.",
                  "explain": "Assessment."
              },
              {
                  "q": "What does the independent expert consider in Part VII?",
                  "a": "Security and fair treatment of policyholders.",
                  "explain": "Court."
              },
              {
                  "q": "What is an RITC at Lloyd's in exit context?",
                  "a": "Closing a year into another; third-party RITC to run-off specialists.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "How is an exit priced?",
                  "a": "Best estimate liabilities plus risk margin and cost of capital.",
                  "explain": "Valuation."
              },
              {
                  "q": "Why might a buyer pay more than best estimate?",
                  "a": "Investment income, expense efficiency, diversification.",
                  "explain": "Economics."
              },
              {
                  "q": "How do exits affect reinsurance?",
                  "a": "Existing reinsurance may transfer or be commuted.",
                  "explain": "Recoveries."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Problem solving",
          "description": "Approaching SA3 questions: identifying the issues and stakeholders, applying reserving, pricing, capital and reinsurance knowledge to business problems, using decision-making tools, and making justified recommendations.",
          "cards": [
              {
                  "q": "How should SA3 questions be approached?",
                  "a": "Understand context, identify stakeholders and issues, analyse options, recommend.",
                  "explain": "Structure."
              },
              {
                  "q": "What decision-making tools can help?",
                  "a": "Cost-benefit analysis, SWOT, PESTLE, scenario analysis, decision trees.",
                  "explain": "Appendix."
              },
              {
                  "q": "Why consider stakeholders?",
                  "a": "Different interests (shareholders, regulators, policyholders, brokers).",
                  "explain": "Breadth."
              },
              {
                  "q": "How should recommendations be justified?",
                  "a": "With clear reasoning, quantification where possible, and risks.",
                  "explain": "Marks."
              },
              {
                  "q": "What are common weaknesses?",
                  "a": "Generic answers, missing UK/Lloyd's specifics, lack of breadth.",
                  "explain": "Examiners."
              },
              {
                  "q": "How to handle calculation parts?",
                  "a": "State method and assumptions, check reasonableness.",
                  "explain": "Method marks."
              },
              {
                  "q": "Why consider practicalities?",
                  "a": "Data, systems, time, cost, people.",
                  "explain": "Realism."
              },
              {
                  "q": "How can the control cycle help?",
                  "a": "Frame problems as specify, develop, monitor.",
                  "explain": "Framework."
              },
              {
                  "q": "How to manage time?",
                  "a": "Allocate by marks.",
                  "explain": "Complete all."
              },
              {
                  "q": "Why use headings?",
                  "a": "Clarity and structure for markers.",
                  "explain": "Presentation."
              },
              {
                  "q": "How to discuss uncertainty?",
                  "a": "Ranges, sensitivities, scenarios.",
                  "explain": "Communication."
              },
              {
                  "q": "How to address regulatory issues?",
                  "a": "Consider PRA, FCA, Lloyd's requirements.",
                  "explain": "Compliance."
              },
              {
                  "q": "How to use the insurance products appendix?",
                  "a": "Refresh product knowledge for scenarios.",
                  "explain": "Reference."
              },
              {
                  "q": "Why consider alternatives?",
                  "a": "Shows judgement.",
                  "explain": "Compare options."
              },
              {
                  "q": "How to finish an answer?",
                  "a": "Summarise recommendation and next steps.",
                  "explain": "Conclusion."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Case study 1 – reserving",
          "description": "A reserving case study: applying reserving methods and judgement to a realistic portfolio — data issues, method selection by class and year, allowing for changes in claims handling and inflation, large and latent claims, reinsurance, and communicating results and uncertainty to the board.",
          "cards": [
              {
                  "q": "What are the first steps in a reserving case study?",
                  "a": "Understand the portfolio, data, changes, and purpose of the review.",
                  "explain": "Context."
              },
              {
                  "q": "How should methods be selected?",
                  "a": "Based on class tail, maturity, data quality and diagnostics.",
                  "explain": "Judgement."
              },
              {
                  "q": "How to handle a change in claims handling?",
                  "a": "Adjust incurred data or rely on paid/BF methods.",
                  "explain": "Diagnostics."
              },
              {
                  "q": "How to allow for recent high inflation?",
                  "a": "Explicit inflation adjustments, separating past and future inflation.",
                  "explain": "Inflation-adjusted chain ladder."
              },
              {
                  "q": "How to treat large claims?",
                  "a": "Individual review and separate projection.",
                  "explain": "Stability."
              },
              {
                  "q": "How to reserve for new classes?",
                  "a": "ELR/BF using pricing assumptions and benchmarks.",
                  "explain": "Little data."
              },
              {
                  "q": "How to allow for reinsurance?",
                  "a": "Gross-to-net, considering programme changes and bad debt.",
                  "explain": "Recoveries."
              },
              {
                  "q": "What diagnostics should be reviewed?",
                  "a": "Loss ratios, frequencies, severities, paid/incurred ratios.",
                  "explain": "Checks."
              },
              {
                  "q": "How to communicate results?",
                  "a": "Best estimate, range, key drivers, changes since last review.",
                  "explain": "Board."
              },
              {
                  "q": "What if results differ from management expectations?",
                  "a": "Explain evidence and uncertainty; maintain independence.",
                  "explain": "Professionalism."
              },
              {
                  "q": "How to address data errors discovered?",
                  "a": "Correct, document, quantify impact.",
                  "explain": "Quality."
              },
              {
                  "q": "How to handle Ogden changes?",
                  "a": "Scenario revaluation of large bodily injury claims.",
                  "explain": "Legal."
              },
              {
                  "q": "How to allow for PPOs?",
                  "a": "Separate reserving with longevity and ASHE inflation assumptions.",
                  "explain": "Specialist."
              },
              {
                  "q": "How to set the Solvency UK best estimate?",
                  "a": "Discounted cash flows with ENIDs and expenses.",
                  "explain": "Regulatory."
              },
              {
                  "q": "What lessons does the case study teach?",
                  "a": "Integrate data, methods, judgement and communication.",
                  "explain": "Practice."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Case study 2 – reinsurance",
          "description": "A reinsurance case study: assessing an insurer's reinsurance needs, designing and pricing alternative programmes, using capital and cat models to compare options, counterparty security, cost-benefit and recommending a programme.",
          "cards": [
              {
                  "q": "What is the starting point in reinsurance design?",
                  "a": "Objectives and risk appetite (volatility, capital, cat protection).",
                  "explain": "Needs."
              },
              {
                  "q": "How are options compared?",
                  "a": "Net cost, capital relief, volatility reduction, return on capital.",
                  "explain": "Metrics."
              },
              {
                  "q": "How are cat limits chosen?",
                  "a": "Return period target (e.g. 1-in-200) from cat models.",
                  "explain": "Appetite."
              },
              {
                  "q": "How is retention chosen?",
                  "a": "Balancing cost against retained risk and capital.",
                  "explain": "Optimisation."
              },
              {
                  "q": "How is reinsurance priced in the case study?",
                  "a": "Experience and exposure rating, market quotes.",
                  "explain": "Pricing."
              },
              {
                  "q": "How is counterparty security assessed?",
                  "a": "Ratings, collateral, diversification of panel.",
                  "explain": "Credit risk."
              },
              {
                  "q": "What is the effect on the SCR?",
                  "a": "Reduced underwriting and cat risk, increased counterparty risk.",
                  "explain": "Net effect."
              },
              {
                  "q": "What alternatives might be considered?",
                  "a": "Quota share for growth, ADC for reserves, cat bonds.",
                  "explain": "Options."
              },
              {
                  "q": "How does reinsurance affect pricing of direct business?",
                  "a": "Cost passed into gross premiums.",
                  "explain": "Allocation."
              },
              {
                  "q": "How are results communicated?",
                  "a": "Comparison tables and recommendation.",
                  "explain": "Board."
              },
              {
                  "q": "What market conditions matter?",
                  "a": "Hard reinsurance market raises costs.",
                  "explain": "Timing."
              },
              {
                  "q": "What contract terms need attention?",
                  "a": "Hours clauses, exclusions, reinstatements.",
                  "explain": "Wording."
              },
              {
                  "q": "How does reinsurance interact with investment strategy?",
                  "a": "Liquidity after catastrophes.",
                  "explain": "ALM."
              },
              {
                  "q": "Why stress test the programme?",
                  "a": "Check performance in realistic events.",
                  "explain": "RDS."
              },
              {
                  "q": "What is the final recommendation's basis?",
                  "a": "Best balance of cost, risk reduction and capital efficiency within appetite.",
                  "explain": "Justified."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Case study 3 – strategic decision-making",
          "description": "A strategic decision case study: evaluating options such as entering a new line or market, acquiring a business, exiting legacy business or restructuring — using business planning, capital modelling, return on capital, regulatory and stakeholder analysis to reach a recommendation.",
          "cards": [
              {
                  "q": "What frameworks support strategic decisions?",
                  "a": "SWOT, PESTLE, capital and return analysis, scenario testing, stakeholder analysis.",
                  "explain": "Tools."
              },
              {
                  "q": "How should a new line be evaluated?",
                  "a": "Market attractiveness, expertise, data, pricing adequacy, capital needs, distribution, reinsurance.",
                  "explain": "Due diligence."
              },
              {
                  "q": "How should an acquisition be evaluated?",
                  "a": "Reserves adequacy, pricing quality, capital, integration, culture, price.",
                  "explain": "M&A."
              },
              {
                  "q": "What regulatory issues arise in strategy?",
                  "a": "Approvals, capital requirements, conduct considerations.",
                  "explain": "PRA/FCA/Lloyd's."
              },
              {
                  "q": "How is return on capital used?",
                  "a": "Compare expected returns against hurdle.",
                  "explain": "Value."
              },
              {
                  "q": "What risks accompany growth?",
                  "a": "Underpricing, adverse selection, operational strain.",
                  "explain": "Discipline."
              },
              {
                  "q": "How are options compared?",
                  "a": "Quantitative metrics plus qualitative factors.",
                  "explain": "Balanced."
              },
              {
                  "q": "How is uncertainty addressed?",
                  "a": "Scenarios and sensitivities.",
                  "explain": "Robustness."
              },
              {
                  "q": "What role does reinsurance play in strategy?",
                  "a": "Supports entry into new lines and capital efficiency.",
                  "explain": "Enabler."
              },
              {
                  "q": "How do stakeholders affect strategy?",
                  "a": "Shareholders, regulators, brokers, employees.",
                  "explain": "Buy-in."
              },
              {
                  "q": "What practical issues arise?",
                  "a": "Staff, systems, data, timescales.",
                  "explain": "Implementation."
              },
              {
                  "q": "How should recommendations be presented?",
                  "a": "Clear preferred option with rationale and risks.",
                  "explain": "Board paper."
              },
              {
                  "q": "How can exit strategies feature?",
                  "a": "Exiting underperforming lines or legacy.",
                  "explain": "Chapter 12."
              },
              {
                  "q": "Why consider timing?",
                  "a": "Market cycle and capital conditions.",
                  "explain": "Opportunity."
              },
              {
                  "q": "What lessons does the case study teach?",
                  "a": "Integrate technical analysis with business judgement.",
                  "explain": "SA3 skill."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Principal terms",
          "description": "Key SA3 terminology — UK legislation, Lloyd's, catastrophe modelling, valuation and exit terms — as a recall deck. (ActEd's Chapter 17, a further-reading list, is not turned into cards.)",
          "cards": [
              {
                  "q": "Define 'Ogden rate'.",
                  "a": "Discount rate for personal injury lump sums.",
                  "explain": "UK."
              },
              {
                  "q": "Define 'PPO'.",
                  "a": "Periodical payment order.",
                  "explain": "Bodily injury."
              },
              {
                  "q": "Define 'IPT'.",
                  "a": "Insurance premium tax.",
                  "explain": "UK tax."
              },
              {
                  "q": "Define 'duty of fair presentation'.",
                  "a": "Commercial insured's disclosure duty under Insurance Act 2015.",
                  "explain": "Law."
              },
              {
                  "q": "Define 'LPT'.",
                  "a": "Loss portfolio transfer.",
                  "explain": "Exit."
              },
              {
                  "q": "Define 'ADC'.",
                  "a": "Adverse development cover.",
                  "explain": "Exit."
              },
              {
                  "q": "Define 'RDS'.",
                  "a": "Realistic disaster scenario.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "Define 'SAO'.",
                  "a": "Statement of Actuarial Opinion.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "Define 'own view of risk'.",
                  "a": "Insurer's adjusted cat risk view.",
                  "explain": "Cat models."
              },
              {
                  "q": "Define 'survival ratio'.",
                  "a": "Reserves ÷ annual payments.",
                  "explain": "Latent claims."
              },
              {
                  "q": "Define 'scheme of arrangement'.",
                  "a": "Court-sanctioned compromise with creditors.",
                  "explain": "Exit."
              },
              {
                  "q": "Define 'Flood Re'.",
                  "a": "UK flood reinsurance scheme.",
                  "explain": "Market."
              },
              {
                  "q": "Define 'hurdle rate'.",
                  "a": "Minimum return on capital.",
                  "explain": "ROC."
              },
              {
                  "q": "Define 'third-party RITC'.",
                  "a": "Reinsurance to close into a different syndicate/run-off specialist.",
                  "explain": "Lloyd's."
              },
              {
                  "q": "Define 'fronting'.",
                  "a": "Insurer issuing policy and reinsuring most risk to another (e.g. captive).",
                  "explain": "Structures."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sa3-q1",
      title: "Pricing a large commercial property risk",
      modules: "Modules 6, 7",
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
            "This risk carries significant capital requirements given its concentration and catastrophe exposure, so pricing that ignored the specific capital cost of writing it could understate its true economic cost to the insurer &mdash; a risk-adjusted return should be explicitly built into the rate. One limitation is model uncertainty: different catastrophe models or model versions can produce different loss estimates for the same risk, so the insurer should not rely on a single model's output without considering this uncertainty (e.g. by comparing multiple models).",
          note: "A strong answer addresses both the capital-cost point <em>and</em> a genuine model limitation, not just one half of the question.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why pricing this risk requires actuarial judgement, beyond applying a formula.",
          answer:
            "Given the limited own data, heterogeneity, and bespoke risk features of this large commercial risk, no single mechanical formula can fully determine an appropriate rate, so genuine, well-reasoned professional judgement blending statistical technique, benchmark data, catastrophe model output, and underwriting insight is a necessary part of the pricing process.",
          note: "This connects directly to the theme that large commercial pricing is one of the clearest real-world examples of judgement-based actuarial work.",
        },
      ],
    },
    {
      id: "sa3-q2",
      title: "The Lloyd's market and its regulatory regime",
      modules: "Modules 2, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain how the Lloyd's market's underlying structure differs from a conventional general insurance company, and why this creates a more layered capital assessment.",
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
            "Discuss why Lloyd's syndicates and their members face distinct taxation considerations compared with a conventional general insurance company and its shareholders.",
          answer:
            "Since underwriting profits and losses flow through to individual or corporate members according to their specific participation in each syndicate, the tax treatment must reflect this different profit-flow structure, rather than the more straightforward corporate taxation applicable to a conventional insurer's shareholders. This requires tax rules that can attribute profit and loss at the level of each member's syndicate participation, a materially more complex structure than taxing a single corporate entity's overall profit.",
          note: "A strong answer explains <em>why</em> the profit-flow structure differs (member-level participation versus single corporate entity), not just asserts that taxation is 'different'.",
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
      modules: "Modules 7, 15",
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
          note: "Arithmetic check: min(max(45,000,000-10,000,000,0),30,000,000)=30,000,000; net loss=45,000,000-30,000,000=15,000,000. Marks are typically split across identifying the layer mechanics and both final figures.",
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
            "A major catastrophic event affecting the insurer is likely to also affect its reinsurers' own exposures, so the insurer must assess whether its reinsurance panel remains able to pay recoveries even under the same severe, correlated event, diversifying across multiple reinsurers to manage this concentrated counterparty risk.",
          note: "A strong answer explains why this risk is especially acute <em>here</em>, not just that counterparty risk exists generally.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the insurer should not rely on a single catastrophe model's output alone when designing this reinsurance layer structure.",
          answer:
            "Different catastrophe models can embed different scientific assumptions and calibrations, so comparing output across multiple models reveals the genuine degree of model uncertainty, helping the insurer avoid over-reliance on any single model's specific assumptions when setting its retention and layer limits.",
          note: "This connects directly to the model-uncertainty limitation developed in this course's catastrophe-modelling material.",
        },
      ],
    },
    {
      id: "sa3-q4",
      title: "Solvency II capital requirements for a general insurer",
      modules: "Modules 8, 9",
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
          note: "Arithmetic check: 0.07×15,000,000=1,050,000; TP=16,050,000; 0.30×15,000,000=4,500,000; 0.25×4,500,000=1,125,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer's SCR percentage of BEL is often materially higher than a life insurer's equivalent percentage, referencing the risk modules involved.",
          answer:
            "General insurance risk (premium risk, reserve risk, and catastrophe risk) tends to carry greater volatility and estimation uncertainty than life insurance's more predictable mortality/longevity-driven risk, particularly given the correlated, catastrophic loss potential and long-tail reserving uncertainty general insurance can carry, requiring a correspondingly higher capital requirement relative to the liability base.",
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
          note: "Any one valid, well-explained reason should be accepted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's technical provisions need a risk margin, given the reserving uncertainty inherent in general insurance business.",
          answer:
            "The risk margin compensates for the cost of holding capital against non-hedgeable reserving risk over the liability's remaining settlement period, recognising that general insurance reserves carry genuine estimation uncertainty (particularly for longer-tail claims) that itself represents a cost requiring reflection in technical provisions.",
          note: "This connects the numeric risk margin calculation directly to the genuine reserving uncertainty developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa3-q5",
      title: "Consumer protection and equality legislation",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why consumer protection legislation is distinct from regulatory conduct requirements, even though both pursue similar fair-treatment objectives.",
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
            "Discuss how a general insurer should balance actuarially-justified risk differentiation against equality legislation's fairness constraints when designing a new rating structure.",
          answer:
            "Actuarially sound, risk-reflective pricing supports genuine fairness between policyholders of different risk levels, while equality legislation protects against discrimination on certain grounds regardless of any genuine statistical correlation. The insurer should design rating structures that are both actuarially sound <em>and</em> legally compliant, for example by identifying permissible proxy factors that capture real risk differentiation without relying on prohibited characteristics, rather than treating one consideration as simply overriding the other.",
          note: "A strong answer explicitly frames this as a genuine, ongoing balance requiring judgement, not a solved problem with one universally correct answer.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why non-compliance with consumer protection or equality legislation could pose a significant reputational risk to this insurer, beyond the direct legal penalty.",
          answer:
            "Publicised breaches of consumer protection or equality requirements can damage customer trust and brand reputation well beyond the direct legal or regulatory penalty involved, potentially affecting future business volumes and relationships with distributors and regulators alike.",
          note: "This connects legal compliance and reputational risk management as linked considerations.",
        },
      ],
    },
    {
      id: "sa3-q6",
      title: "Reserving for latent and disease claims",
      modules: "Module 11",
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
          note: "Arithmetic check: 6,000,000×1.25=7,500,000; reserve=1,500,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this chain-ladder-style development factor approach would be poorly suited to reserving for a latent disease claim exposure arising from the same accident year.",
          answer:
            "A latent claim may not be reported until many years or decades later, meaning the standard, reasonably short observable reporting pattern a chain-ladder development factor relies on does not exist for this exposure, making such a mechanical development-factor approach unreliable for estimating the eventual number and cost of latent claims.",
          note: "Candidates should explicitly connect the failure of chain-ladder-style methods to the long, unobservable reporting delay latent claims present.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why reserving for this latent disease exposure should draw on external data and expert judgement, beyond the insurer's own historical claims experience.",
          answer:
            "Given the limited own historical data available for a slowly-emerging, rare claim type, the reserving actuary should blend limited own experience with external data, medical/scientific understanding, and legal developments (e.g. changing case law on liability), applying credibility-theory-style judgement rather than relying on own experience alone.",
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
          note: "Arithmetic check: 5,000,000×0.40=2,000,000; retained=3,000,000.",
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
      modules: "Module 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer's financial plan should explicitly incorporate catastrophe risk, rather than being built purely around an 'expected' loss year.",
          answer:
            "Catastrophe losses can be large and volatile relative to an insurer's typical annual result, so financial planning that ignored this risk could leave the insurer unprepared for a realistic adverse scenario, undermining the plan's usefulness as a genuine guide to the insurer's likely range of outcomes.",
          note: "A strong answer explicitly connects catastrophe volatility to the failure of a purely 'expected value' planning approach.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's financial planning models should be built at both the corporate and product level, rather than relying on a single combined model.",
          answer:
            "Corporate-level models help monitor overall solvency, profitability and strategic objectives, while product-level models help assess whether individual product lines are meeting their own profitability targets, revealing insight a purely aggregated corporate view could mask, particularly given different capital intensity across product lines.",
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
            "Reinsurance directly affects the insurer's expected profit, capital requirements, and volatility of results, so a coherent financial plan must treat reinsurance strategy as an integrated lever alongside pricing and underwriting decisions, not an afterthought decided independently.",
          note: "This connects directly to the integration theme running through this course's financial planning material.",
        },
      ],
    },
    {
      id: "sa3-q9",
      title: "Exiting a catastrophe-exposed property line",
      modules: "Modules 12, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A general insurer is considering withdrawing from a catastrophe-exposed property line following several years of adverse experience. Discuss two factors the insurer should consider before deciding whether to formally transfer the portfolio or manage it in run-off.",
          answer:
            "First, valuation uncertainty: if the remaining liabilities are uncertain (e.g. long-tail exposure or unresolved catastrophe claims), it may be difficult to agree a fair transfer price acceptable to both parties, favouring run-off. Second, ongoing cost: run-off still requires capital support and specialist claims management for potentially many years, so its genuine total cost over the run-off period should be weighed against a formal transfer's clean, immediate exit, rather than assuming run-off is automatically cheaper.",
          note: "Any two distinct, well-justified factors should be accepted, provided they are assessed against this <em>specific</em> scenario.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Assuming the remaining liabilities are reasonably well understood and a willing acquirer is available, recommend a course of action for this insurer, with justification.",
          answer:
            "A formal portfolio transfer is recommended: given the liabilities are reasonably well understood, an acceptable transfer price should be achievable, providing a clean, immediate exit that releases capital and management attention for the insurer's core business, rather than continuing to bear run-off's ongoing capital and management cost for a line the insurer has already decided is no longer strategically core.",
          note: "Credit should be given for any well-justified, reasoned recommendation that explicitly addresses the stated facts (well-understood liabilities, willing acquirer available).",
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
            "Comment on why this decision represents a complex issue requiring judgement across multiple SA3 topic areas, not a single-dimension analysis.",
          answer:
            "This decision involves competing considerations across multiple topic areas at once &mdash; the reliability of catastrophe model output informing whether adverse experience reflects genuine trend or random fluctuation, reinsurance and capital implications of continuing versus exiting, and the strategic/financial planning consequences of withdrawal &mdash; requiring integrated judgement rather than a single-dimension analysis.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA3 syllabus.",
        },
      ],
    },
    {
      id: "sa3-q10",
      title: "Cross-jurisdiction comparison and regulatory frameworks",
      modules: "Modules 3, 4, 5",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a general insurer operating across multiple jurisdictions needs to understand how different regulatory and taxation environments affect its business in each specific market.",
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
            "Professional standards and codes of conduct place the actuary's overriding duty on sound, honest technical judgement, meaning commercial pressure to adopt a particular reserving basis does not override this obligation; the Chief Actuary should maintain a basis supported by the evidence (including the genuine reserving uncertainty inherent in long-tail claims), clearly document the reasoning, and escalate through appropriate channels if pressure continues, rather than adjusting the basis simply to satisfy the request.",
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
});

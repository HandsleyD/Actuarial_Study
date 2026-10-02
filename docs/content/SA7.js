// SA7 Investment and Finance: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SA7", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction",
          "description": "SA7's aims and structure: the framework for investment management (30%), meeting investor requirements (35%), and management and risk control for an investment manager (35%), with how SA7 builds on SP5 and what examiners expect.",
          "cards": [
              {
                  "q": "What are SA7's three syllabus topics?",
                  "a": "Framework for investment management (30%); meeting investor requirements (35%); management and risk control for an investment manager (35%).",
                  "explain": "Balanced."
              },
              {
                  "q": "How does SA7 build on SP5?",
                  "a": "Applies SP5's principles to complex practical investment problems and advice.",
                  "explain": "Application."
              },
              {
                  "q": "What jurisdictions does SA7 cover?",
                  "a": "UK primarily, with other jurisdictions and emerging markets.",
                  "explain": "Global context."
              },
              {
                  "q": "What investors are covered?",
                  "a": "Individuals, life and non-life insurers, DB and DC pensions, endowments/charities, banks, hedge funds, sovereign wealth funds.",
                  "explain": "Chapter 2–3."
              },
              {
                  "q": "What skills are tested?",
                  "a": "Analysing investor needs, proposing strategies, evaluating managers, communicating advice.",
                  "explain": "Higher-order."
              },
              {
                  "q": "Why is regulation included?",
                  "a": "Capital and conduct rules shape investment policies.",
                  "explain": "Basel, Solvency II."
              },
              {
                  "q": "What is the role of technology in SA7?",
                  "a": "Trading, product development and investment management operations.",
                  "explain": "Syllabus 3.3."
              },
              {
                  "q": "Why is ESG covered?",
                  "a": "Impact on performance and approaches to integrate ESG.",
                  "explain": "Syllabus 3.1.4."
              },
              {
                  "q": "What role does behavioural finance play?",
                  "a": "Explains investor and market behaviour.",
                  "explain": "Chapter 10."
              },
              {
                  "q": "How should SA7 answers be structured?",
                  "a": "Understand client, objectives and constraints; analyse; recommend.",
                  "explain": "Structure."
              },
              {
                  "q": "What is the investment consulting chapter about?",
                  "a": "Manager selection, fiduciary management, performance measurement services.",
                  "explain": "Chapter 13."
              },
              {
                  "q": "Why is corporate finance included?",
                  "a": "Capital structure and financing relate to asset classes.",
                  "explain": "Chapter 6."
              },
              {
                  "q": "What is the Core Reading date for 2025?",
                  "a": "31 May 2024.",
                  "explain": "Currency."
              },
              {
                  "q": "Why study historic asset behaviour?",
                  "a": "Informs expected returns and risk assumptions.",
                  "explain": "Syllabus 1.1."
              },
              {
                  "q": "What exam technique helps in SA7?",
                  "a": "Breadth of relevant points, applied to the scenario.",
                  "explain": "Examiners."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Individual investors",
          "description": "Investment needs of individual investors: life-cycle stages, objectives and constraints (risk tolerance, liquidity, time horizon, tax, legal), financial planning, retail products and platforms, advice and regulation, and the impact of technology.",
          "cards": [
              {
                  "q": "What determines an individual's investment needs?",
                  "a": "Objectives, time horizon, risk tolerance and capacity, liquidity needs, tax position, other assets and liabilities.",
                  "explain": "Profile."
              },
              {
                  "q": "What is risk capacity vs risk tolerance?",
                  "a": "Capacity: ability to bear losses financially; tolerance: psychological willingness.",
                  "explain": "Both matter."
              },
              {
                  "q": "How do needs change over the life cycle?",
                  "a": "Accumulation (growth), pre-retirement (de-risking), decumulation (income, longevity).",
                  "explain": "Life-cycle."
              },
              {
                  "q": "What retail investment vehicles exist?",
                  "a": "ISAs, pensions, unit trusts/OEICs, investment trusts, ETFs, bonds, direct shares.",
                  "explain": "UK."
              },
              {
                  "q": "What are platforms?",
                  "a": "Online services holding investments across wrappers.",
                  "explain": "Technology."
              },
              {
                  "q": "What is robo-advice?",
                  "a": "Automated, algorithm-based investment advice.",
                  "explain": "Low cost."
              },
              {
                  "q": "How does tax shape individual investing?",
                  "a": "Use of ISAs and pensions to shelter returns.",
                  "explain": "Wrappers."
              },
              {
                  "q": "What is the role of financial advice?",
                  "a": "Assessing needs and recommending suitable investments.",
                  "explain": "Suitability."
              },
              {
                  "q": "What regulation protects individual investors?",
                  "a": "Suitability rules, disclosure, Consumer Duty, FSCS, FOS.",
                  "explain": "Conduct."
              },
              {
                  "q": "What behavioural issues affect individuals?",
                  "a": "Loss aversion, overconfidence, inertia, herding.",
                  "explain": "Chapter 10."
              },
              {
                  "q": "How should decumulation be planned?",
                  "a": "Balancing income, longevity risk, flexibility (annuities vs drawdown).",
                  "explain": "Pension freedoms."
              },
              {
                  "q": "How can technology change product development?",
                  "a": "Digital platforms, fractional investing, model portfolios.",
                  "explain": "Syllabus 3.3."
              },
              {
                  "q": "What are high-net-worth considerations?",
                  "a": "Complex tax, estate planning, alternative assets.",
                  "explain": "Wealth management."
              },
              {
                  "q": "What is a model portfolio?",
                  "a": "Pre-set asset allocation matched to risk profiles.",
                  "explain": "Scalable advice."
              },
              {
                  "q": "How should risk profiling be done?",
                  "a": "Questionnaires plus discussion, capacity checks.",
                  "explain": "Suitability."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Institutional investors",
          "description": "Investment needs of institutions: liability characteristics, requirements and regulatory influences for life insurers (with-profits, non-profit, unit-linked), non-life insurers, DB and DC pension funds, endowments and charities, banks, hedge funds and sovereign wealth funds, and the influence of central banks and capital regimes (Basel, Solvency II).",
          "cards": [
              {
                  "q": "How do non-profit life liabilities shape investment?",
                  "a": "Fixed long-term liabilities matched with bonds; MA portfolios for annuities.",
                  "explain": "Matching."
              },
              {
                  "q": "How do with-profits liabilities shape investment?",
                  "a": "Guarantees plus discretion allow real assets, limited by guarantees and estate.",
                  "explain": "Balance."
              },
              {
                  "q": "How do unit-linked liabilities shape investment?",
                  "a": "Assets follow unit fund mandates; insurer bears little investment risk.",
                  "explain": "Mandates."
              },
              {
                  "q": "How do non-life liabilities shape investment?",
                  "a": "Shorter, uncertain liabilities; liquidity; matching by currency and term.",
                  "explain": "GI."
              },
              {
                  "q": "How do DB pension liabilities shape investment?",
                  "a": "Long-term, often inflation-linked; LDI plus growth assets; covenant matters.",
                  "explain": "Pensions."
              },
              {
                  "q": "How do DC schemes shape investment?",
                  "a": "Member-driven; default strategies and lifestyling.",
                  "explain": "DC."
              },
              {
                  "q": "What are endowments' investment needs?",
                  "a": "Perpetual horizon, spending rules, real return targets.",
                  "explain": "Charities."
              },
              {
                  "q": "How do banks invest?",
                  "a": "Liquidity and capital rules drive holdings of high-quality liquid assets.",
                  "explain": "Basel."
              },
              {
                  "q": "How do hedge funds invest?",
                  "a": "Absolute return, leverage, flexible mandates.",
                  "explain": "Unconstrained."
              },
              {
                  "q": "What are sovereign wealth funds' objectives?",
                  "a": "Long-term wealth preservation, stabilisation, intergenerational saving.",
                  "explain": "Unconstrained."
              },
              {
                  "q": "How does Solvency II affect insurers' investment?",
                  "a": "Capital charges by asset risk; MA incentives.",
                  "explain": "Regulation."
              },
              {
                  "q": "How does Basel affect banks' investment?",
                  "a": "Risk weights and liquidity ratios.",
                  "explain": "Regulation."
              },
              {
                  "q": "How do central banks affect institutional investors?",
                  "a": "Interest rates, QE affecting yields and asset prices.",
                  "explain": "Influence."
              },
              {
                  "q": "What is a spending rule?",
                  "a": "Rule for withdrawals from endowments (e.g. % of average assets).",
                  "explain": "Sustainability."
              },
              {
                  "q": "How does maturity affect institutions?",
                  "a": "Mature funds need liquidity and matching.",
                  "explain": "Cash flows."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Asset markets",
          "description": "Financial markets in developed and emerging economies: public and private market assets (equities, bonds, property, private equity and debt, infrastructure), market structure and trading, historic behaviour of asset classes and indices, global economic trends, and technology in trading.",
          "cards": [
              {
                  "q": "What are public market assets?",
                  "a": "Listed equities, government and corporate bonds, REITs.",
                  "explain": "Liquid."
              },
              {
                  "q": "What are private market assets?",
                  "a": "Private equity, private debt, direct property, infrastructure.",
                  "explain": "Illiquid."
              },
              {
                  "q": "How have equities behaved historically?",
                  "a": "Higher long-term real returns than bonds with high volatility and occasional large drawdowns.",
                  "explain": "Equity risk premium."
              },
              {
                  "q": "How have bonds behaved historically?",
                  "a": "Lower returns; long rate decline to 2020 then sharp rise in 2022.",
                  "explain": "Rate cycle."
              },
              {
                  "q": "What are emerging market features?",
                  "a": "Higher growth, higher risk (political, currency, governance), lower liquidity.",
                  "explain": "Diversification."
              },
              {
                  "q": "How has technology affected trading?",
                  "a": "Electronic and algorithmic trading, lower costs, faster markets.",
                  "explain": "Syllabus 3.3."
              },
              {
                  "q": "What is high-frequency trading?",
                  "a": "Automated trading at very high speed.",
                  "explain": "Liquidity and risks."
              },
              {
                  "q": "What are global economic trends affecting markets?",
                  "a": "Demographics, deglobalisation, inflation regimes, technology, climate transition.",
                  "explain": "Macro."
              },
              {
                  "q": "What is market liquidity?",
                  "a": "Ease of trading without affecting price.",
                  "explain": "Varies by asset."
              },
              {
                  "q": "What is the equity risk premium?",
                  "a": "Excess expected return of equities over risk-free.",
                  "explain": "Key assumption."
              },
              {
                  "q": "How are indices used?",
                  "a": "Benchmarks, passive investing, measuring markets.",
                  "explain": "Syllabus 1.1."
              },
              {
                  "q": "What are the features of property markets?",
                  "a": "Heterogeneous, illiquid, income-producing.",
                  "explain": "Real asset."
              },
              {
                  "q": "What is private credit?",
                  "a": "Non-bank lending to companies.",
                  "explain": "Growth area."
              },
              {
                  "q": "What is market fragmentation?",
                  "a": "Trading spread across venues.",
                  "explain": "Structure."
              },
              {
                  "q": "What are dark pools?",
                  "a": "Venues where orders aren't displayed publicly.",
                  "explain": "Large trades."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Derivatives and structured products",
          "description": "OTC and exchange-traded derivatives in investment management: futures, forwards, swaps, options, credit and inflation derivatives, structured products, their uses for risk taking or mitigation, collateral and counterparty issues, and technology's effect on derivative trading and product development.",
          "cards": [
              {
                  "q": "How are derivatives used for risk mitigation?",
                  "a": "Hedging interest rate, inflation, equity, currency and credit exposures.",
                  "explain": "Syllabus 3.1.5."
              },
              {
                  "q": "How are derivatives used for risk taking?",
                  "a": "Gaining leveraged or synthetic exposure, relative value trades.",
                  "explain": "Syllabus 3.1.5."
              },
              {
                  "q": "What is the difference between OTC and exchange-traded?",
                  "a": "OTC bilateral and customised; exchange standardised and centrally cleared.",
                  "explain": "Syllabus 1.1."
              },
              {
                  "q": "What are structured products?",
                  "a": "Combinations of bonds and derivatives with tailored payoffs.",
                  "explain": "Retail and institutional."
              },
              {
                  "q": "What is collateral management?",
                  "a": "Posting and receiving margin to mitigate counterparty risk.",
                  "explain": "Operational."
              },
              {
                  "q": "What is counterparty risk?",
                  "a": "Risk counterparty fails to perform.",
                  "explain": "Clearing reduces."
              },
              {
                  "q": "How are inflation swaps used by pension funds?",
                  "a": "Hedging inflation-linked liabilities.",
                  "explain": "LDI."
              },
              {
                  "q": "How are equity options used?",
                  "a": "Protecting downside or enhancing income.",
                  "explain": "Collars."
              },
              {
                  "q": "What are credit derivatives used for?",
                  "a": "Hedging or taking credit risk.",
                  "explain": "CDS."
              },
              {
                  "q": "How has technology changed derivatives trading?",
                  "a": "Electronic platforms, faster execution, better risk systems.",
                  "explain": "Syllabus 3.3."
              },
              {
                  "q": "What regulation applies to derivatives?",
                  "a": "Clearing mandates, reporting, margin rules.",
                  "explain": "EMIR."
              },
              {
                  "q": "What is basis risk?",
                  "a": "Hedge doesn't perfectly track exposure.",
                  "explain": "Imperfect."
              },
              {
                  "q": "What are risks of structured products?",
                  "a": "Complexity, liquidity, issuer credit, hidden costs.",
                  "explain": "Suitability."
              },
              {
                  "q": "What is a total return swap?",
                  "a": "Exchange of total return for funding rate.",
                  "explain": "Synthetic exposure."
              },
              {
                  "q": "Why is liquidity important for derivative users?",
                  "a": "Collateral calls in stress (2022 LDI).",
                  "explain": "Buffers."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Corporate finance",
          "description": "Corporate finance principles relevant to investment: capital structure theory (Modigliani-Miller, trade-off and pecking order), cost of capital, sources of finance (equity, debt, hybrid), dividend policy, corporate actions, and how corporate financing relates to different asset classes.",
          "cards": [
              {
                  "q": "What is the Modigliani-Miller proposition?",
                  "a": "In perfect markets, firm value is independent of capital structure.",
                  "explain": "Baseline."
              },
              {
                  "q": "What is the trade-off theory?",
                  "a": "Optimal leverage balances tax benefits of debt against distress costs.",
                  "explain": "Capital structure."
              },
              {
                  "q": "What is the pecking order theory?",
                  "a": "Firms prefer internal funds, then debt, then equity due to information asymmetry.",
                  "explain": "Financing choices."
              },
              {
                  "q": "What is WACC?",
                  "a": "Weighted average cost of capital across debt and equity.",
                  "explain": "Discount rate."
              },
              {
                  "q": "What sources of finance exist?",
                  "a": "Equity (ordinary, preference), debt (loans, bonds), hybrids (convertibles), leasing.",
                  "explain": "Asset classes."
              },
              {
                  "q": "How does capital structure relate to asset classes?",
                  "a": "Equity and debt of the same firm have different risk-return profiles and claims.",
                  "explain": "Syllabus 1.4."
              },
              {
                  "q": "What is a convertible bond?",
                  "a": "Bond convertible into equity.",
                  "explain": "Hybrid."
              },
              {
                  "q": "What is dividend policy?",
                  "a": "Decisions on distributing profits vs retaining.",
                  "explain": "Signalling."
              },
              {
                  "q": "What are share buybacks?",
                  "a": "Company repurchasing shares.",
                  "explain": "Return capital."
              },
              {
                  "q": "What are corporate actions?",
                  "a": "Rights issues, splits, mergers, spin-offs.",
                  "explain": "Investor impact."
              },
              {
                  "q": "What is leverage's effect on equity risk?",
                  "a": "Higher leverage increases equity volatility.",
                  "explain": "Beta."
              },
              {
                  "q": "What is a leveraged buyout?",
                  "a": "Acquisition financed largely by debt.",
                  "explain": "Private equity."
              },
              {
                  "q": "How do credit ratings affect financing?",
                  "a": "Lower ratings raise cost of debt.",
                  "explain": "Access."
              },
              {
                  "q": "What is the agency cost of debt?",
                  "a": "Conflicts between shareholders and bondholders.",
                  "explain": "Covenants."
              },
              {
                  "q": "What is project finance?",
                  "a": "Financing based on project cash flows.",
                  "explain": "Infrastructure."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Regulation",
          "description": "Regulation of investment management in the UK and elsewhere: conduct regulation (FCA, MiFID-derived rules, Consumer Duty, SM&CR), fund regulation (UCITS, AIFMD), market regulation, prudential capital requirements (Basel, Solvency II), and legislative and tax frameworks.",
          "cards": [
              {
                  "q": "What are aims of investment regulation?",
                  "a": "Investor protection, market integrity, financial stability, competition.",
                  "explain": "Objectives."
              },
              {
                  "q": "What is MiFID?",
                  "a": "EU framework (onshored in UK) for investment services: conduct, transparency, best execution.",
                  "explain": "Conduct."
              },
              {
                  "q": "What is UCITS?",
                  "a": "Regulated retail fund framework with diversification and liquidity rules.",
                  "explain": "Funds."
              },
              {
                  "q": "What is AIFMD?",
                  "a": "Regulation of alternative investment fund managers.",
                  "explain": "Alternatives."
              },
              {
                  "q": "How does the Consumer Duty affect managers?",
                  "a": "Fair value and good outcomes for retail investors.",
                  "explain": "UK."
              },
              {
                  "q": "What is SM&CR?",
                  "a": "Senior Managers and Certification Regime.",
                  "explain": "Accountability."
              },
              {
                  "q": "How do capital requirements affect investors?",
                  "a": "Basel and Solvency II shape bank and insurer investments.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What is best execution?",
                  "a": "Obtaining best possible result for clients.",
                  "explain": "Duty."
              },
              {
                  "q": "What is market abuse regulation?",
                  "a": "Prohibits insider dealing and manipulation.",
                  "explain": "Integrity."
              },
              {
                  "q": "What are stewardship codes?",
                  "a": "Expectations for institutional investor engagement.",
                  "explain": "Governance."
              },
              {
                  "q": "What are sustainability disclosure rules?",
                  "a": "E.g. UK SDR, TCFD reporting.",
                  "explain": "ESG."
              },
              {
                  "q": "How does tax regulation affect investment?",
                  "a": "Fund taxation, withholding taxes.",
                  "explain": "Net returns."
              },
              {
                  "q": "What is the role of depositaries?",
                  "a": "Oversee fund compliance and safekeep assets.",
                  "explain": "Protection."
              },
              {
                  "q": "How do regimes differ internationally?",
                  "a": "US SEC regime, EU rules, Asian regulators.",
                  "explain": "Comparison."
              },
              {
                  "q": "What is liquidity regulation for funds?",
                  "a": "Rules on liquidity management, e.g. property fund suspensions.",
                  "explain": "Investor protection."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Economic, monetary and political influences",
          "description": "Influences on capital markets: monetary policy and central banks (interest rates, QE/QT, forward guidance), fiscal and government policy, inflation and growth, exchange rates, political events and geopolitical risk, and their effects on asset returns.",
          "cards": [
              {
                  "q": "How does monetary policy affect asset prices?",
                  "a": "Lower rates and QE raise asset prices; tightening lowers them.",
                  "explain": "Central banks."
              },
              {
                  "q": "What is quantitative tightening?",
                  "a": "Central banks reducing bond holdings.",
                  "explain": "Upward yield pressure."
              },
              {
                  "q": "What is forward guidance?",
                  "a": "Central bank communication about future policy.",
                  "explain": "Expectations."
              },
              {
                  "q": "How does fiscal policy affect markets?",
                  "a": "Borrowing affects gilt supply and yields; credibility matters (2022 mini-budget).",
                  "explain": "UK example."
              },
              {
                  "q": "How does inflation affect asset classes?",
                  "a": "Negative for nominal bonds; mixed for equities; real assets partially hedge.",
                  "explain": "Regime."
              },
              {
                  "q": "How do exchange rates affect investors?",
                  "a": "Change value of overseas assets; affect companies' earnings.",
                  "explain": "Currency."
              },
              {
                  "q": "What are political risks?",
                  "a": "Elections, policy changes, sanctions, geopolitical conflict.",
                  "explain": "Risk premium."
              },
              {
                  "q": "How do economic cycles affect sectors?",
                  "a": "Cyclicals outperform in expansions; defensives in slowdowns.",
                  "explain": "Rotation."
              },
              {
                  "q": "What is the yield curve's signal?",
                  "a": "Inversion often precedes recession.",
                  "explain": "Indicator."
              },
              {
                  "q": "What was the 2022 UK gilt crisis?",
                  "a": "Rapid gilt yield rises after fiscal announcements triggered LDI collateral calls and BoE intervention.",
                  "explain": "Case."
              },
              {
                  "q": "How do commodity shocks affect markets?",
                  "a": "Inflation and growth effects.",
                  "explain": "Energy."
              },
              {
                  "q": "What is the role of central bank independence?",
                  "a": "Credibility of inflation control.",
                  "explain": "Expectations."
              },
              {
                  "q": "How does globalisation affect markets?",
                  "a": "Integrated capital flows and correlations.",
                  "explain": "Contagion."
              },
              {
                  "q": "How can demographic trends affect returns?",
                  "a": "Savings patterns and labour supply.",
                  "explain": "Long-term."
              },
              {
                  "q": "How should investors respond to macro uncertainty?",
                  "a": "Diversification, scenario analysis, hedging.",
                  "explain": "Robustness."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Investment analysis",
          "description": "Investment analysis for active management: fundamental analysis of equities and bonds, valuation models, technical analysis, quantitative and factor analysis, macro and asset allocation analysis, and analysis across different time horizons.",
          "cards": [
              {
                  "q": "What is fundamental analysis?",
                  "a": "Valuing securities from financial statements, prospects and economic conditions.",
                  "explain": "Intrinsic value."
              },
              {
                  "q": "What is technical analysis?",
                  "a": "Using price and volume patterns to predict movements.",
                  "explain": "Contested."
              },
              {
                  "q": "What is quantitative analysis?",
                  "a": "Statistical models and factors to select securities.",
                  "explain": "Systematic."
              },
              {
                  "q": "What valuation models are used for equities?",
                  "a": "DCF, dividend discount, multiples (P/E, EV/EBITDA).",
                  "explain": "Methods."
              },
              {
                  "q": "How are bonds analysed?",
                  "a": "Credit analysis, yield curve analysis, duration and spread assessment.",
                  "explain": "Fixed income."
              },
              {
                  "q": "What is top-down analysis?",
                  "a": "Macro to sectors to securities.",
                  "explain": "Asset allocation."
              },
              {
                  "q": "What is bottom-up analysis?",
                  "a": "Security-level analysis first.",
                  "explain": "Stock picking."
              },
              {
                  "q": "What is factor investing?",
                  "a": "Targeting systematic return drivers (value, momentum, quality, low volatility, size).",
                  "explain": "Smart beta."
              },
              {
                  "q": "How do time horizons affect analysis?",
                  "a": "Short-term: momentum, sentiment; long-term: fundamentals, valuation.",
                  "explain": "Syllabus 3.1.1."
              },
              {
                  "q": "What is relative value analysis?",
                  "a": "Comparing securities to find mispricing.",
                  "explain": "Pairs."
              },
              {
                  "q": "What is scenario analysis in investment?",
                  "a": "Assessing outcomes under different economic scenarios.",
                  "explain": "Robustness."
              },
              {
                  "q": "How is ESG integrated in analysis?",
                  "a": "Assessing material ESG factors in valuation.",
                  "explain": "Syllabus 3.1.4."
              },
              {
                  "q": "What is alternative data?",
                  "a": "Non-traditional data (satellite, web, transactions) for insights.",
                  "explain": "Technology."
              },
              {
                  "q": "What is the role of sell-side research?",
                  "a": "Broker research to support investment decisions.",
                  "explain": "Information."
              },
              {
                  "q": "Why is analysis limited by market efficiency?",
                  "a": "Public information quickly priced.",
                  "explain": "Alpha scarce."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Investment psychology",
          "description": "Psychological aspects influencing investors: behavioural finance biases and heuristics, prospect theory, market anomalies and bubbles, institutional behaviour (herding, career risk), and applying behavioural insights to active management and client advice.",
          "cards": [
              {
                  "q": "What is behavioural finance?",
                  "a": "Study of psychological influences on investors and markets.",
                  "explain": "Syllabus 3.1.7."
              },
              {
                  "q": "What is prospect theory?",
                  "a": "Losses loom larger than gains; decisions relative to reference points.",
                  "explain": "Kahneman–Tversky."
              },
              {
                  "q": "What is overconfidence?",
                  "a": "Overestimating knowledge or skill.",
                  "explain": "Excess trading."
              },
              {
                  "q": "What is anchoring?",
                  "a": "Relying on an initial reference value.",
                  "explain": "Valuation bias."
              },
              {
                  "q": "What is herding?",
                  "a": "Following others' actions.",
                  "explain": "Bubbles."
              },
              {
                  "q": "What is the disposition effect?",
                  "a": "Selling winners too early, holding losers too long.",
                  "explain": "Loss aversion."
              },
              {
                  "q": "What is confirmation bias?",
                  "a": "Seeking information confirming beliefs.",
                  "explain": "Research bias."
              },
              {
                  "q": "What is mental accounting?",
                  "a": "Treating money differently by category.",
                  "explain": "Suboptimal."
              },
              {
                  "q": "How do institutions show behavioural biases?",
                  "a": "Career risk leads to benchmark hugging and herding.",
                  "explain": "Agency."
              },
              {
                  "q": "How can behavioural insights help active management?",
                  "a": "Exploiting anomalies like momentum or overreaction.",
                  "explain": "Strategies."
              },
              {
                  "q": "How can advisers use behavioural insights?",
                  "a": "Framing, defaults, commitment devices to improve client outcomes.",
                  "explain": "Nudges."
              },
              {
                  "q": "What are bubbles?",
                  "a": "Prices far above fundamentals driven by speculation and sentiment.",
                  "explain": "Dot-com."
              },
              {
                  "q": "What is recency bias?",
                  "a": "Overweighting recent events.",
                  "explain": "Trend chasing."
              },
              {
                  "q": "What is myopic loss aversion?",
                  "a": "Frequent evaluation increases aversion to risky assets.",
                  "explain": "Long-term investors."
              },
              {
                  "q": "How can investment committees reduce bias?",
                  "a": "Structured processes, diverse views, pre-mortems.",
                  "explain": "Governance."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Investment strategy",
          "description": "Designing investment strategy: strategic and tactical asset allocation, active and passive (including factor-based) approaches, risk control and risk-based portfolio construction, ESG integration, derivative strategies, liability benchmarks and replicating portfolios, and historic asset behaviour.",
          "cards": [
              {
                  "q": "What is strategic asset allocation?",
                  "a": "Long-term policy mix aligned to objectives and liabilities.",
                  "explain": "Main driver of returns."
              },
              {
                  "q": "What is tactical asset allocation?",
                  "a": "Short-term deviations to exploit opportunities.",
                  "explain": "Active."
              },
              {
                  "q": "What is passive management?",
                  "a": "Tracking an index at low cost.",
                  "explain": "Syllabus 3.1.2."
              },
              {
                  "q": "What is quasi-passive/factor-based management?",
                  "a": "Rules-based exposure to factors.",
                  "explain": "Smart beta."
              },
              {
                  "q": "What is risk-based portfolio construction?",
                  "a": "Allocating by risk contribution (e.g. risk parity, minimum variance).",
                  "explain": "Syllabus 3.1.3."
              },
              {
                  "q": "What is risk parity?",
                  "a": "Equalising risk contributions across asset classes.",
                  "explain": "Leverage often used."
              },
              {
                  "q": "How is ESG incorporated into strategy?",
                  "a": "Exclusions, integration, tilts, engagement, impact.",
                  "explain": "Syllabus 3.1.4."
              },
              {
                  "q": "What is a liability benchmark?",
                  "a": "Portfolio replicating liabilities, the minimum-risk position.",
                  "explain": "Syllabus 3.1.6."
              },
              {
                  "q": "What is a replicating portfolio?",
                  "a": "Assets designed to match liability cash flows or sensitivities.",
                  "explain": "LDI."
              },
              {
                  "q": "How are derivatives used in strategy?",
                  "a": "Overlays, hedging, synthetic exposure.",
                  "explain": "Syllabus 3.1.5."
              },
              {
                  "q": "What risk control techniques are used?",
                  "a": "Tracking error limits, VaR, stress testing, diversification.",
                  "explain": "Syllabus 3.1.3."
              },
              {
                  "q": "How is active risk budgeted?",
                  "a": "Allocating tracking error across managers/strategies.",
                  "explain": "Risk budgets."
              },
              {
                  "q": "What is core-satellite?",
                  "a": "Passive core with active satellites.",
                  "explain": "Cost-efficient."
              },
              {
                  "q": "How does history inform strategy?",
                  "a": "Long-run returns, volatilities and correlations as inputs.",
                  "explain": "Syllabus 1.1."
              },
              {
                  "q": "How should strategy be reviewed?",
                  "a": "Regularly against objectives, liabilities and markets.",
                  "explain": "Governance."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Investment management",
          "description": "How an investment management company operates: organising management of a large portfolio (in-house vs external, specialist vs balanced, multi-manager), structure of an institutional investment department, operations and risk control, fees, and legislative and conduct frameworks for managers.",
          "cards": [
              {
                  "q": "How can a large portfolio be organised?",
                  "a": "In-house or external; balanced or specialist mandates; multi-manager; core-satellite.",
                  "explain": "Syllabus 3.2.1."
              },
              {
                  "q": "What is a balanced mandate?",
                  "a": "One manager handles asset allocation and selection across classes.",
                  "explain": "Simple."
              },
              {
                  "q": "What are specialist mandates?",
                  "a": "Separate managers for each asset class.",
                  "explain": "Expertise."
              },
              {
                  "q": "What is the typical structure of an institutional investment department?",
                  "a": "CIO, asset allocation team, asset class teams, risk, operations, compliance.",
                  "explain": "Syllabus 3.2.2."
              },
              {
                  "q": "What are pros of in-house management?",
                  "a": "Lower costs, control, alignment.",
                  "explain": "Scale needed."
              },
              {
                  "q": "What are cons of in-house management?",
                  "a": "Talent, systems, governance costs.",
                  "explain": "Scale."
              },
              {
                  "q": "What is a multi-manager approach?",
                  "a": "Using several managers to diversify manager risk.",
                  "explain": "Oversight."
              },
              {
                  "q": "How are managers paid?",
                  "a": "Ad valorem fees, performance fees.",
                  "explain": "Alignment."
              },
              {
                  "q": "What are performance fee issues?",
                  "a": "Asymmetric incentives, high-water marks.",
                  "explain": "Design."
              },
              {
                  "q": "What operational risks do managers face?",
                  "a": "Trading errors, compliance breaches, cyber.",
                  "explain": "Controls."
              },
              {
                  "q": "What is the role of compliance?",
                  "a": "Ensuring mandates and regulations are followed.",
                  "explain": "Oversight."
              },
              {
                  "q": "How do managers control investment risk?",
                  "a": "Risk systems, limits, independent risk function.",
                  "explain": "Governance."
              },
              {
                  "q": "What is a mandate?",
                  "a": "Agreement setting objectives, benchmark, constraints.",
                  "explain": "Contract."
              },
              {
                  "q": "What is investment governance?",
                  "a": "Committees and processes overseeing investment decisions.",
                  "explain": "Structure."
              },
              {
                  "q": "How does technology affect managers?",
                  "a": "Data, automation, product development.",
                  "explain": "Syllabus 3.3."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Investment consulting",
          "description": "The investment consulting role: manager research and selection, fund-of-funds, fiduciary management and outsourced CIOs, performance measurement services, investment governance advice, and conflicts of interest and regulation of consultants.",
          "cards": [
              {
                  "q": "What do investment consultants do?",
                  "a": "Advise on strategy, manager selection, monitoring, governance.",
                  "explain": "Institutions."
              },
              {
                  "q": "How are managers researched and selected?",
                  "a": "Philosophy, process, people, performance, risk, fees, operational due diligence.",
                  "explain": "4Ps."
              },
              {
                  "q": "What is a fund-of-funds?",
                  "a": "A fund investing in other funds.",
                  "explain": "Diversification, extra fees."
              },
              {
                  "q": "What is fiduciary management?",
                  "a": "Delegating implementation (and some strategy) decisions to a provider.",
                  "explain": "Syllabus 3.2.3."
              },
              {
                  "q": "What is an outsourced CIO?",
                  "a": "External provider acting as the investor's CIO.",
                  "explain": "Delegation."
              },
              {
                  "q": "What does a performance measurement service do?",
                  "a": "Calculates returns, attribution, risk, and peer comparisons.",
                  "explain": "Syllabus 3.2.4."
              },
              {
                  "q": "What conflicts arise in consulting?",
                  "a": "Advising on and selling fiduciary services.",
                  "explain": "CMA remedies."
              },
              {
                  "q": "What did the CMA investigation require?",
                  "a": "Competitive tendering for fiduciary management and objectives for consultants (UK pensions).",
                  "explain": "Regulation."
              },
              {
                  "q": "How should fiduciary managers be evaluated?",
                  "a": "Performance against objectives, fees, transparency.",
                  "explain": "Oversight."
              },
              {
                  "q": "What is operational due diligence?",
                  "a": "Assessing managers' operations, controls and risks.",
                  "explain": "Selection."
              },
              {
                  "q": "Why monitor managers?",
                  "a": "Detect changes in people, process, performance.",
                  "explain": "Ongoing."
              },
              {
                  "q": "What is a manager watch list?",
                  "a": "List of managers under review.",
                  "explain": "Governance."
              },
              {
                  "q": "How are consultants paid?",
                  "a": "Fees (retainer, project).",
                  "explain": "Conflicts."
              },
              {
                  "q": "What governance advice do consultants give?",
                  "a": "Structure of committees, delegation, policies.",
                  "explain": "Governance."
              },
              {
                  "q": "What are limitations of performance measurement?",
                  "a": "Short periods, benchmark choice, survivorship.",
                  "explain": "Interpretation."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Problem solving",
          "description": "Approaching SA7 questions: understanding the investor, objectives and constraints; applying frameworks to propose strategies and structures; evaluating managers and risks; and communicating clear, justified recommendations.",
          "cards": [
              {
                  "q": "How should SA7 questions be approached?",
                  "a": "Identify investor type, objectives, constraints, liabilities; propose and justify strategy.",
                  "explain": "Structure."
              },
              {
                  "q": "Which frameworks help?",
                  "a": "Objectives/constraints, stakeholders, risk types, regulation, implementation.",
                  "explain": "Breadth."
              },
              {
                  "q": "Why consider liabilities?",
                  "a": "Institutional strategy starts from liabilities.",
                  "explain": "Liability benchmark."
              },
              {
                  "q": "How to handle manager selection questions?",
                  "a": "4Ps, fees, governance, fit with strategy.",
                  "explain": "Criteria."
              },
              {
                  "q": "How to discuss ESG?",
                  "a": "Financial materiality, approaches, trade-offs.",
                  "explain": "Topical."
              },
              {
                  "q": "How to handle derivatives questions?",
                  "a": "Purpose, instrument, risks, governance, collateral.",
                  "explain": "Practical."
              },
              {
                  "q": "What are common weaknesses?",
                  "a": "Generic lists, not tailoring to investor, missing implementation issues.",
                  "explain": "Examiners."
              },
              {
                  "q": "How to present calculations?",
                  "a": "Clear method, assumptions, interpretation.",
                  "explain": "Marks."
              },
              {
                  "q": "How to make recommendations?",
                  "a": "Clear, justified, with alternatives.",
                  "explain": "Advice."
              },
              {
                  "q": "Why consider regulation?",
                  "a": "Constraints on institutions and managers.",
                  "explain": "Compliance."
              },
              {
                  "q": "How to manage time?",
                  "a": "Allocate by marks.",
                  "explain": "Complete all."
              },
              {
                  "q": "How to consider behavioural aspects?",
                  "a": "Client biases and governance.",
                  "explain": "Chapter 10."
              },
              {
                  "q": "Why consider costs?",
                  "a": "Fees reduce net returns.",
                  "explain": "Value for money."
              },
              {
                  "q": "How to structure a written advice answer?",
                  "a": "Summary, analysis, recommendation, next steps.",
                  "explain": "Communication."
              },
              {
                  "q": "How can past papers help?",
                  "a": "Show typical investors and marking.",
                  "explain": "Practice."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sa7-q1",
      title: "Investment management industry structure and governance",
      modules: "Modules 12, 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a pension scheme typically uses an independent custodian to hold its investment assets, rather than allowing its asset manager to hold them directly.",
          answer:
            "Separating asset management (decision-making) from custody (safekeeping) reduces the risk of a single party having both control over investment decisions <em>and</em> physical/legal control of the assets, providing a genuine safeguard against fraud or error.",
          note: "A strong answer explicitly names the segregation-of-duties rationale, not just asserts that custodians 'keep assets safe'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an investment mandate must set a clear and specific benchmark, agreed independently in advance, rather than allowing the manager to select or change its own performance comparison after the fact.",
          answer:
            "A benchmark set independently and in advance provides an objective, unbiased basis for assessing whether the manager has added value, whereas a benchmark chosen or changed by the manager itself after seeing results could be selected specifically to flatter poor performance.",
          note: "This connects directly to the independent-assessment/governance-safeguard theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why potential conflicts of interest might arise within the investment management industry's multi-party structure (managers, custodians, consultants), and one way a pension scheme's governance could mitigate this.",
          answer:
            "An asset manager's fee structure, a consultant's relationships with multiple asset managers, or a custodian offering additional services could all create genuine incentives that may not perfectly align with the underlying investor's best interests. A governing body could mitigate this by requiring genuine disclosure of any such relationships or incentives, and periodically reviewing whether advice or services received remain independent and in the scheme's best interests.",
          note: "A strong answer identifies a genuine, specific conflict source (not just asserts conflicts 'can arise') and proposes a workable mitigation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a governing body typically retains responsibility for setting strategic asset allocation itself, while delegating day-to-day security selection to its manager.",
          answer:
            "Strategic asset allocation decisions directly reflect the investor's own risk appetite and objectives, which the governing body itself is best placed to determine, while day-to-day security selection within that framework benefits from the manager's specialist expertise and market access.",
          note: "This connects directly to the division-of-responsibility governance theme developed in this course.",
        },
      ],
    },
    {
      id: "sa7-q2",
      title: "The investment decision-making process",
      modules: "Modules 9, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an investment manager's process typically separates 'research' from 'portfolio construction', rather than allowing a single individual to move directly from a market view to a trade.",
          answer:
            "Separating these stages allows genuine specialisation and provides a check that a compelling research view is actually translated into an appropriate, risk-controlled portfolio position, rather than an unconstrained bet based purely on one individual's conviction.",
          note: "A strong answer explicitly names the <em>check-and-balance</em> this separation provides, not just describes the two stages.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss one genuine advantage and one genuine limitation of a systematic, rules-based investment process compared with a purely discretionary process.",
          answer:
            "Advantage: a systematic process can apply its rules consistently across a large universe of assets without emotional or behavioural bias. Limitation: a fixed model calibrated on historical data may fail to anticipate novel market conditions not represented in that historical data, a form of model risk that a skilled discretionary manager might be better placed to respond to.",
          note: "A strong answer addresses <em>both</em> sides explicitly, not just one.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a discretionary investment process typically requires robust internal challenge (e.g. an investment committee), rather than relying purely on individual manager judgement.",
          answer:
            "Individual judgement, however skilled, can be subject to genuine behavioural biases (e.g. overconfidence, anchoring), so internal challenge and review processes provide a check against these biases, improving the overall quality and consistency of investment decisions.",
          note: "This connects directly to the judgement-needs-challenge theme developed elsewhere across the actuarial curriculum.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why implementation quality (efficient trade execution) is a distinct skill from investment decision-making quality.",
          answer:
            "Trading costs and execution risk can erode the value of an otherwise sound investment decision, so a good decision poorly implemented can still produce a disappointing outcome, meaning efficient implementation is itself an important, distinct skill rather than a mechanical afterthought.",
          note: "This connects directly to the performance-attribution material developed later in this course.",
        },
      ],
    },
    {
      id: "sa7-q3",
      title: "Investor objectives across institution types",
      modules: "Modules 2, 3",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a DB pension scheme's investment objectives differ fundamentally from a DC pension scheme's.",
          answer:
            "A DB scheme invests to meet a defined set of promised liabilities, so its objectives centre on funding adequacy relative to those specific liabilities, while a DC scheme's objectives centre on maximising appropriate risk-adjusted returns for individual members' own accumulating pots, a fundamentally different investment problem reflecting who bears the investment risk in each case.",
          note: "A strong answer explicitly connects the objective difference to <em>who</em> bears the investment risk (sponsor versus member), not just describes DB and DC generically.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a life insurer's annuity business typically favours long-dated matching assets, while a general insurer typically emphasises liquidity more heavily.",
          answer:
            "A life insurer's annuity business has long-duration, interest-rate-sensitive liabilities favouring long-dated matching assets, while a general insurer's typically shorter-tail, more volatile and less predictable claims payment pattern favours a different balance emphasising liquidity and capital preservation over long-duration matching.",
          note: "This connects directly to the ALM-duration material developed for life and general insurance elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an individual investor's investment advice needs to be more personalised than the more standardised frameworks often applicable to institutional investors.",
          answer:
            "An individual investor typically has a more concentrated, personal set of goals (e.g. their own retirement, a specific purchase) and may have less capacity to bear risk or absorb losses than a large institution with diversified objectives and a longer collective time horizon, requiring more personalised, risk-tolerance-sensitive advice rather than a standardised institutional template.",
          note: "A strong answer explicitly contrasts individual and institutional circumstances (concentrated goals, lower risk capacity), not just asserts individuals need 'more personal' advice.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a manager must understand a specific investor's objectives and constraints before proposing an investment strategy, rather than applying a generic 'best practice' template.",
          answer:
            "The same asset allocation or strategy could be excellent for one investor type and unsuitable for another, depending entirely on their specific liabilities, risk tolerance, and objectives, so sound strategy proposals must be anchored in the specific investor's circumstances.",
          note: "This connects directly to the context-specific-assessment theme developed across every SA subject.",
        },
      ],
    },
    {
      id: "sa7-q4",
      title: "Liability-driven investing and hedge ratio impact",
      modules: "Modules 5, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A pension scheme has liabilities valued at &pound;100,000,000 with an effective duration of 18 years, and hedges 75% of its interest rate exposure using an LDI strategy. If interest rates fall by 1%, calculate (a) the increase in the value of the scheme's liabilities, (b) the increase in the value of the hedged assets (assuming they move in line with the hedged portion of the liability), and (c) the net impact on the scheme's funding position.",
          answer:
            "(a) Liability increase = &pound;100,000,000 &times; 18 &times; 1% = &pound;18,000,000. (b) Hedged asset increase = (&pound;100,000,000 &times; 75%) &times; 18 &times; 1% = &pound;75,000,000 &times; 18 &times; 1% = &pound;13,500,000. (c) Net impact on funding position = &pound;13,500,000 &minus; &pound;18,000,000 = &minus;&pound;4,500,000 (the funding position worsens by &pound;4,500,000 due to the unhedged 25% exposure).",
          note: "Arithmetic check: 100,000,000×18×0.01=18,000,000; 75,000,000×18×0.01=13,500,000; 13,500,000-18,000,000=-4,500,000. Marks are typically split across all three sub-calculations, with credit for correctly identifying the funding position <em>worsens</em>.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this scheme might deliberately choose to hedge only 75%, rather than 100%, of its interest rate exposure.",
          answer:
            "Full hedging would fully protect against interest rate risk but forgo any potential upside from rates moving favourably and typically requires holding more matching assets at the expense of growth assets, so a partial hedge ratio reflects a deliberate trade-off between reducing funding volatility and retaining some growth potential, calibrated to the scheme's specific risk appetite and covenant strength.",
          note: "A strong answer frames this as a genuine, deliberate risk-appetite trade-off, not an oversight or failure to fully hedge.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why this scheme's hedge ratio should be reviewed periodically, rather than set once and left unchanged.",
          answer:
            "The scheme's funding position, sponsor covenant, and the wider market environment can all change materially over time, so a hedge ratio set for a past set of circumstances may no longer be appropriate, requiring periodic reassessment rather than indefinite persistence.",
          note: "This connects directly to the ongoing-review theme developed throughout this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why implementing this LDI strategy using interest rate swaps introduces a genuine liquidity consideration the scheme must manage.",
          answer:
            "Derivative-based LDI positions typically require posting collateral, which can increase sharply during periods of market stress (e.g. a sharp rise in rates moving against the swap position), so the scheme must hold sufficient liquid assets to meet these collateral calls without being forced to sell other assets at an unfavourable time.",
          note: "This connects directly to the LDI-derivative-liquidity-risk material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa7-q5",
      title: "Alternative asset classes",
      modules: "Module 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an institutional investor might allocate to infrastructure as an alternative asset class specifically, beyond simply seeking a higher expected return.",
          answer:
            "Infrastructure assets can offer genuine diversification benefits (returns less correlated with traditional listed markets) and, in some cases, inflation-linked revenue streams whose cashflow characteristics can usefully match specific liability profiles, not merely provide a higher-risk version of traditional equity returns.",
          note: "A strong answer names the <em>different</em> cashflow/correlation characteristics, not just asserts alternatives offer 'higher returns'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why valuing an illiquid private equity holding requires different techniques from valuing a listed equity holding.",
          answer:
            "Illiquid assets typically lack a continuously observable market price, so valuation relies on periodic appraisals, comparable transaction analysis, or discounted cashflow techniques involving genuine estimation uncertainty, unlike listed assets whose market price is directly and continuously observable.",
          note: "This connects directly to the valuation-technique material developed elsewhere across the actuarial curriculum.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an investor's governance process should scrutinise a private equity manager's 'two and twenty' fee structure, and why this allocation should be assessed within the context of the whole portfolio rather than in isolation.",
          answer:
            "Higher, performance-linked fee structures directly reduce the net return delivered to the investor, so governance should assess whether the manager's demonstrated skill and the asset class's genuine diversification benefit justify this higher cost relative to lower-cost traditional alternatives. The allocation should also be assessed within the whole portfolio because alternative assets' genuine diversification value depends on how their returns interact with the rest of the portfolio, not on their standalone characteristics alone.",
          note: "A strong answer addresses <em>both</em> the fee-scrutiny point <em>and</em> the whole-portfolio-context point, not just one half of the question.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an investor with genuine near-term liquidity needs should limit its allocation to illiquid alternative assets.",
          answer:
            "Illiquid assets cannot be readily sold to meet near-term cashflow needs, so an investor with genuine near-term liquidity requirements must ensure sufficient allocation remains in liquid assets, reserving illiquid alternatives for long-term, patient capital.",
          note: "This connects directly to the liquidity-risk theme developed elsewhere across the SA subjects.",
        },
      ],
    },
    {
      id: "sa7-q6",
      title: "ESG and responsible investment",
      modules: "Modules 7, 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why ESG considerations can be understood as relevant to investment risk and return, not solely as an ethical overlay.",
          answer:
            "Environmental, social, and governance factors can affect a company's or asset's long-term financial performance and risk (e.g. climate transition risk, poor governance leading to fraud), making ESG analysis a genuine extension of fundamental investment analysis, not solely a values-based consideration layered on top.",
          note: "A strong answer explicitly makes the dual-framing argument (financial materiality, not just ethics), not just asserts that ESG 'matters'.",
        },
        {
          label: "(ii)",
          command: "Distinguish",
          marks: 3,
          question:
            "Distinguish between 'exclusion' and 'stewardship' as responsible investment approaches, and explain one genuine trade-off between them.",
          answer:
            "Exclusion removes certain assets from the portfolio entirely, while stewardship retains an ownership stake and uses that position to engage with and influence company behaviour. The trade-off is that exclusion removes an investor's ability to influence a company's practices entirely, while stewardship retains this influence but requires genuine, sustained engagement effort and does not guarantee the company will actually change its behaviour.",
          note: "A strong answer explicitly names the trade-off (lost influence versus effort without guaranteed outcome), not just describes the two approaches.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why different ESG rating providers might produce inconsistent assessments of the same company, and why this matters for an investor relying on a single provider's rating.",
          answer:
            "Different ESG rating providers can use different methodologies and weightings for various ESG factors (e.g. how much weight is given to carbon emissions versus board diversity), producing inconsistent scores for the same company. This matters because an investor relying on a single provider's rating without awareness of this genuine methodological variation could treat that score as an objective, universally agreed truth, when it in fact reflects one provider's specific, contestable methodology.",
          note: "A strong answer explains <em>why</em> inconsistency arises (differing methodology/weightings) and the genuine practical consequence of over-reliance on a single source.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a pension scheme's governing body should establish a clear responsible investment policy, rather than leaving ESG considerations to individual portfolio managers' discretion.",
          answer:
            "A clear policy ensures ESG considerations are applied consistently across the whole portfolio in line with the investor's own genuine objectives and values, rather than varying unpredictably by individual manager discretion.",
          note: "This connects directly to the mandate-clarity governance theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa7-q7",
      title: "Risk measurement: Value at Risk and tracking error",
      modules: "Module 11",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A &pound;50,000,000 portfolio has an annual return volatility of 12%. Assuming returns are normally distributed, calculate the 1-year 95% Value at Risk (VaR), using a z-score of 1.645 for the 95% confidence level.",
          answer:
            "VaR = &pound;50,000,000 &times; 12% &times; 1.645 = &pound;9,870,000 (to the nearest &pound;10,000, approximately &pound;9.87 million). This means there is a 5% chance the portfolio loses more than approximately &pound;9.87 million over the year.",
          note: "Arithmetic check: 50,000,000×0.12×1.645=9,870,000. Full marks require both the calculation and a correct statement of what the resulting VaR figure represents.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain one genuine limitation of the VaR figure calculated in part (i), and why stress testing provides complementary insight.",
          answer:
            "VaR says nothing about how much <em>worse</em> losses could be beyond the stated threshold (i.e. in the 5% of outcomes worse than the VaR figure), potentially understating genuine tail risk. Stress testing directly reveals how the portfolio would perform under specific, named adverse scenarios, providing more concrete, interpretable insight into the portfolio's genuine vulnerabilities than a single probabilistic VaR figure alone.",
          note: "A strong answer explicitly names the 'beyond the threshold' limitation, not just asserts VaR is 'imperfect'.",
        },
        {
          label: "(iii)",
          command: "Calculate",
          marks: 3,
          question:
            "An actively-managed portfolio's active returns (portfolio return minus benchmark return) over five periods were: 2.0%, -1.0%, 1.5%, 0.5%, and -0.8%. Calculate the mean active return and the tracking error (sample standard deviation of the active returns).",
          answer:
            "Mean active return = (2.0% &minus; 1.0% + 1.5% + 0.5% &minus; 0.8%) / 5 = 0.44%. Tracking error (sample standard deviation) &asymp; 1.34%.",
          note: "Arithmetic check: mean=0.44%, sample stdev≈1.339% (using n-1 divisor). Accept answers using either sample (n-1) or population (n) standard deviation provided the method is stated.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why tracking error is a more mandate-relevant risk measure than absolute portfolio volatility for this actively-managed portfolio.",
          answer:
            "Since an active manager's mandate is typically judged against a specified benchmark, tracking error directly measures how much the manager's actual portfolio has deviated from that benchmark, a more mandate-relevant risk measure than absolute volatility alone for assessing whether the manager is operating within agreed risk parameters.",
          note: "This connects the numeric tracking error calculation directly to the mandate-governance material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa7-q8",
      title: "Performance attribution",
      modules: "Module 13",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A portfolio returned 8.2% over a year, against a benchmark return of 6.5%. Attribution analysis identifies an asset allocation effect of 1.0%. Calculate the total active return and the resulting security selection effect.",
          answer:
            "Total active return = 8.2% &minus; 6.5% = 1.7%. Security selection effect = 1.7% &minus; 1.0% (asset allocation effect) = 0.7%.",
          note: "Arithmetic check: 8.2%-6.5%=1.7%; 1.7%-1.0%=0.7%.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why decomposing the 1.7% total active return calculated in part (i) into asset allocation and security selection components is more informative to trustees than the single 1.7% figure alone.",
          answer:
            "Performance attribution reveals <em>why</em> the manager outperformed, rather than just confirming <em>that</em> they did, allowing trustees to assess whether the outperformance came from decisions within the manager's mandate (e.g. security selection within agreed asset classes) or from asset allocation deviations that may raise mandate compliance questions.",
          note: "A strong answer explicitly explains the <em>why</em>-versus-<em>that</em> distinction, not just asserts that decomposition is 'more detailed'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the governing body should investigate whether the 1.0% asset allocation effect in part (i) reflected decisions authorised by the manager's mandate.",
          answer:
            "If the manager's mandate specified a fixed strategic asset allocation with security selection delegated for implementation only, a 1.0% asset allocation effect could reveal the manager made unauthorised allocation deviations beyond its intended mandate, which even if favourable this time raises a genuine governance concern about whether the manager is operating within agreed limits.",
          note: "A strong answer explicitly connects the attribution finding to a genuine mandate-compliance concern, not just treats the favourable outcome as unambiguously good news.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this portfolio's performance should be assessed over a longer time horizon before drawing firm conclusions about the manager's skill.",
          answer:
            "Short-term performance can be heavily influenced by genuine random market fluctuation rather than manager skill, so assessing performance over a longer, more statistically meaningful period gives a more reliable picture of the manager's true, sustained skill than a single year's result alone.",
          note: "This connects directly to the statistical-significance-versus-random-fluctuation theme developed elsewhere across the actuarial curriculum.",
        },
      ],
    },
    {
      id: "sa7-q9",
      title: "Regulation and operational risk",
      modules: "Modules 7, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why regulation of investment management typically emphasises conduct requirements particularly heavily, given the agency relationship between manager and client.",
          answer:
            "Since the manager acts on behalf of, but does not itself bear the risk of, the client's assets, conduct regulation aims to ensure the manager acts in the client's best interests despite this separation of decision-making from risk-bearing, addressing the genuine potential for misaligned incentives this agency structure creates.",
          note: "A strong answer explicitly connects conduct regulation's emphasis to the specific agency-relationship risk, not just asserts that conduct 'matters'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what is meant by 'key-person risk' for an investment management firm, and one mitigant against it.",
          answer:
            "Key-person risk arises where a firm's investment process and client relationships depend heavily on one individual's expertise or judgement, so that individual's departure, illness, or error could cause significant disruption. Well-documented, repeatable investment processes are a direct mitigant, reducing the firm's dependence on any single individual's undocumented, tacit expertise.",
          note: "A strong answer names a specific mitigant (documented process), not just asserts that firms should 'reduce key-person risk' generically.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an investment management firm's governance structure should include an independent risk management function, separate from its portfolio management teams.",
          answer:
            "An independent risk function can objectively monitor and challenge portfolio managers' risk-taking against agreed limits without the same incentive to prioritise short-term performance that portfolio managers themselves might have, providing a genuine check-and-balance within the firm's internal governance. Without this independence, risk oversight could be compromised by the same incentives (e.g. performance fees, career advancement tied to short-term results) that drive the risk-taking behaviour it is meant to oversee.",
          note: "A strong answer explains <em>why</em> independence specifically matters here (avoiding conflicted incentives), not just asserts that risk management is 'important'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why cyber-security has become a growing operational risk concern for investment management firms specifically.",
          answer:
            "Investment managers hold and process sensitive client data and control significant client assets, making them an attractive target for cyber-attacks that could result in financial loss, data breaches, or disruption to critical trading and settlement systems, a risk that has grown as reliance on digital systems has increased.",
          note: "This connects directly to the contemporary, evolving operational risk theme developed in this course.",
        },
      ],
    },
    {
      id: "sa7-q10",
      title: "Solving a complex investment management issue",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A DB pension scheme's investment manager has significantly outperformed its benchmark, but attribution analysis reveals this came primarily from unauthorised asset allocation deviations beyond the agreed mandate. Discuss why this represents a complex issue for the scheme's governing body.",
          answer:
            "This situation involves competing considerations across multiple topic areas at once &mdash; the manager has delivered a strong financial outcome, but the attribution finding reveals a mandate compliance failure, raising genuine governance and conduct questions about whether the manager can be trusted to operate within agreed limits going forward, even though the specific outcome this time happened to be favourable. A purely outcome-focused view would celebrate the result, while a purely compliance-focused view would treat it as a serious breach; the governing body must weigh both.",
          note: "A strong answer explicitly draws on both performance attribution <em>and</em> mandate governance material together, not treating the favourable outcome as unambiguously good news or the breach as automatically disqualifying regardless of outcome.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Recommend a course of action for the governing body in response to this finding, with justification.",
          answer:
            "The governing body should require the manager to explain the unauthorised deviations and provide reassurance (e.g. enhanced reporting or tighter risk limits monitoring) that future decisions will remain within the agreed mandate, rather than either ignoring the breach because the outcome was favourable, or immediately terminating the mandate without investigating whether this was a genuine one-off lapse or a pattern of behaviour. A formal review period with more frequent attribution and compliance monitoring would allow the governing body to assess whether trust in the manager's mandate adherence can be restored.",
          note: "Credit should be given for any well-justified, reasoned recommendation that explicitly addresses the tension between the favourable outcome and the compliance failure, rather than dismissing either consideration.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain why the governing body should specify how the manager's future mandate adherence will be monitored, rather than treating this decision as final once made.",
          answer:
            "Whether the manager changes its behaviour is rarely fully knowable at the point of the decision, so specifying how future adherence will be tracked (e.g. through enhanced attribution reporting) shows the decision is designed to be verified and adjusted over time, rather than a one-off, unchecked judgement.",
          note: "This connects directly to the ongoing-monitoring-of-decisions theme developed across every SA subject.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving this issue required drawing on multiple SA7 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue required drawing on performance attribution, mandate and governance material, and conduct/regulatory considerations together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA7 syllabus.",
        },
      ],
    },
  ],
});

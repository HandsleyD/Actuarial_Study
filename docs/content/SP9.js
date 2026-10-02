// SP9 Enterprise Risk Management Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP9", {
  modules: [
      {
          "id": "m01",
          "title": "What is ERM?",
          "description": "Defining enterprise risk management: risk as uncertainty of outcomes, the move from silo to enterprise-wide risk management, the components of an ERM framework, and SP9's link to the CERA credential.",
          "cards": [
              {
                  "q": "What is ERM?",
                  "a": "A structured, enterprise-wide approach to identifying, assessing, managing and monitoring all risks in pursuit of an organisation's objectives.",
                  "explain": "Holistic rather than silo-based."
              },
              {
                  "q": "How does ERM differ from traditional risk management?",
                  "a": "It considers all risks together, including interactions and aggregation, and links risk to strategy and value, rather than managing each risk in isolation.",
                  "explain": "Portfolio view of risk."
              },
              {
                  "q": "What is 'risk' in ERM?",
                  "a": "Uncertainty in outcomes that may be adverse or favourable relative to objectives.",
                  "explain": "Upside risk matters too."
              },
              {
                  "q": "What are the main components of ERM?",
                  "a": "Governance and culture, risk appetite, risk identification, assessment and measurement, management/response, monitoring and reporting.",
                  "explain": "The ERM cycle."
              },
              {
                  "q": "What is the CERA credential?",
                  "a": "Chartered Enterprise Risk Actuary — a global ERM qualification; SP9 is required for it.",
                  "explain": "CERA Global Association syllabus."
              },
              {
                  "q": "What are SP9's topic weightings?",
                  "a": "ERM concept and framework 15%; ERM process 10%; risk categories and identification 10%; risk modelling and aggregation 15%; risk measurement and assessment 15%; risk management tools 20%; capital management 15%.",
                  "explain": "Tools is largest."
              },
              {
                  "q": "Why is ERM relevant beyond financial services?",
                  "a": "All organisations face strategic, operational and financial risks that interact.",
                  "explain": "Non-financial firms too."
              },
              {
                  "q": "What is a holistic view of risk?",
                  "a": "Considering all risk types and their interdependencies across the organisation.",
                  "explain": "Aggregation."
              },
              {
                  "q": "What is risk culture?",
                  "a": "Shared values and behaviours influencing risk decisions.",
                  "explain": "Tone from the top."
              },
              {
                  "q": "What is the relationship between risk and return?",
                  "a": "Taking risk is necessary to earn return; ERM aims for optimal risk-return.",
                  "explain": "Value creation."
              },
              {
                  "q": "What is a silo approach's weakness?",
                  "a": "Misses correlations, concentrations and gaps between risk areas.",
                  "explain": "ERM fixes."
              },
              {
                  "q": "What is risk management's role in strategy?",
                  "a": "Informs strategic choices and ensures they fit risk appetite.",
                  "explain": "Integrated."
              },
              {
                  "q": "What is the role of the board in ERM?",
                  "a": "Setting risk appetite, overseeing framework, and challenging management.",
                  "explain": "Governance."
              },
              {
                  "q": "How has ERM evolved?",
                  "a": "From insurance/hedging of specific risks to integrated, strategic enterprise-wide frameworks, driven by crises and regulation.",
                  "explain": "History."
              },
              {
                  "q": "What does SP9 require candidates to read beyond Core Reading?",
                  "a": "Material in textbooks (e.g. Sweeting's Financial Enterprise Risk Management).",
                  "explain": "Study guide note."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Why (E)RM?",
          "description": "The rationale for risk management and ERM: value creation (reducing costs of financial distress, taxes, agency costs), stakeholder demands, regulatory requirements, rating agency expectations, and the limits of ERM.",
          "cards": [
              {
                  "q": "Why should firms manage risk if shareholders can diversify?",
                  "a": "Frictional costs — financial distress costs, tax convexity, agency costs, cost of external capital — mean reducing volatility can add value.",
                  "explain": "Modigliani-Miller violations."
              },
              {
                  "q": "How can ERM reduce financial distress costs?",
                  "a": "Lower probability of insolvency reduces costs like lost customers, supplier terms and bankruptcy costs.",
                  "explain": "Value."
              },
              {
                  "q": "How can ERM reduce tax costs?",
                  "a": "Smoothing profits reduces expected taxes when tax schedules are convex.",
                  "explain": "Tax convexity."
              },
              {
                  "q": "How can ERM help with agency problems?",
                  "a": "Aligns managers' incentives with shareholders by clarifying risk-taking.",
                  "explain": "Governance."
              },
              {
                  "q": "What do regulators expect?",
                  "a": "Robust risk management frameworks, ORSA, stress testing.",
                  "explain": "Solvency II, Basel."
              },
              {
                  "q": "What do rating agencies expect?",
                  "a": "Evidence of ERM strength in ratings assessments.",
                  "explain": "Better ratings, lower costs."
              },
              {
                  "q": "What do other stakeholders want?",
                  "a": "Customers want security; employees want stability; creditors want repayment.",
                  "explain": "Stakeholder value."
              },
              {
                  "q": "What are limits of ERM?",
                  "a": "Can't eliminate risk; models can fail; costs of implementation; false sense of security.",
                  "explain": "Judgement."
              },
              {
                  "q": "How does ERM support strategic decisions?",
                  "a": "Risk-adjusted performance measures allocate capital to best opportunities.",
                  "explain": "RAROC."
              },
              {
                  "q": "How can ERM improve capital efficiency?",
                  "a": "Understanding diversification allows holding capital where needed.",
                  "explain": "Capital management."
              },
              {
                  "q": "What is the business case for ERM?",
                  "a": "Reduced earnings volatility, better decisions, lower capital costs, regulatory compliance.",
                  "explain": "Benefits."
              },
              {
                  "q": "How can ERM help avoid disasters?",
                  "a": "Identifying concentrations and emerging risks early.",
                  "explain": "Case studies."
              },
              {
                  "q": "What costs does ERM impose?",
                  "a": "Systems, staff, governance, model development.",
                  "explain": "Proportionality."
              },
              {
                  "q": "Why do ERM failures occur?",
                  "a": "Poor culture, ignoring warnings, model overreliance, incentives.",
                  "explain": "Chapter 32."
              },
              {
                  "q": "What is the upside of risk?",
                  "a": "Opportunities pursued with understanding of risk.",
                  "explain": "Not just loss avoidance."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Risk taxonomy",
          "description": "Classifying risks: market, credit, liquidity, insurance, operational, strategic, reputational, regulatory, conduct, climate and emerging risks; systematic versus diversifiable risk; and concentration and interdependence of risks.",
          "cards": [
              {
                  "q": "List the main risk categories in a taxonomy.",
                  "a": "Market, credit, liquidity, insurance/demographic, operational, strategic, business, reputational, regulatory/legal, conduct, climate/environmental, emerging risks.",
                  "explain": "Comprehensive list."
              },
              {
                  "q": "What is market risk?",
                  "a": "Losses from changes in market prices: interest rates, equities, FX, property, spreads.",
                  "explain": "Financial."
              },
              {
                  "q": "What is credit risk?",
                  "a": "Loss from a counterparty failing to meet obligations, including downgrade and spread risk.",
                  "explain": "Default."
              },
              {
                  "q": "What is liquidity risk?",
                  "a": "Inability to meet obligations as they fall due or to sell assets without loss.",
                  "explain": "Funding and market liquidity."
              },
              {
                  "q": "What is operational risk?",
                  "a": "Loss from inadequate or failed processes, people, systems or external events.",
                  "explain": "Basel definition."
              },
              {
                  "q": "What is strategic risk?",
                  "a": "Risk from poor business decisions or failure to adapt.",
                  "explain": "Hard to quantify."
              },
              {
                  "q": "What is reputational risk?",
                  "a": "Loss from damage to reputation.",
                  "explain": "Often consequential."
              },
              {
                  "q": "What is systematic risk?",
                  "a": "Risk that cannot be diversified away (market-wide).",
                  "explain": "Priced."
              },
              {
                  "q": "What is diversifiable (specific) risk?",
                  "a": "Risk unique to an entity that can be diversified.",
                  "explain": "Not rewarded."
              },
              {
                  "q": "What is concentration risk?",
                  "a": "Excessive exposure to a single source of risk.",
                  "explain": "Aggregation."
              },
              {
                  "q": "What is conduct risk?",
                  "a": "Risk of poor customer outcomes from firm behaviour.",
                  "explain": "Regulatory focus."
              },
              {
                  "q": "What are emerging risks?",
                  "a": "New or evolving risks with uncertain impact (e.g. AI, cyber).",
                  "explain": "Horizon scanning."
              },
              {
                  "q": "What is climate risk?",
                  "a": "Physical, transition and liability risks from climate change.",
                  "explain": "Cross-cutting."
              },
              {
                  "q": "Why is a taxonomy useful?",
                  "a": "Ensures consistent identification, reporting and aggregation.",
                  "explain": "Common language."
              },
              {
                  "q": "What is model risk?",
                  "a": "Loss from errors in models or their use.",
                  "explain": "Operational subset."
              }
          ]
      },
      {
          "id": "m04",
          "title": "How to do ERM – internal risk frameworks",
          "description": "Designing an internal ERM framework: governance structures, risk appetite and policies, the ERM process cycle, three lines of defence, risk ownership, reporting and culture, and embedding ERM in decision-making.",
          "cards": [
              {
                  "q": "What are the elements of an internal ERM framework?",
                  "a": "Governance, risk appetite, policies, processes (identify, assess, respond, monitor), infrastructure (data, systems), culture.",
                  "explain": "Framework."
              },
              {
                  "q": "What are the three lines of defence?",
                  "a": "1st: business units owning risks; 2nd: risk management and compliance oversight; 3rd: internal audit assurance.",
                  "explain": "Separation of duties."
              },
              {
                  "q": "What is risk ownership?",
                  "a": "Assigning each risk to an accountable individual.",
                  "explain": "Accountability."
              },
              {
                  "q": "What is a risk policy?",
                  "a": "Document setting rules and limits for managing a risk type.",
                  "explain": "Chapter 9."
              },
              {
                  "q": "What is embedding ERM?",
                  "a": "Making risk considerations part of everyday decisions and incentives.",
                  "explain": "Use test."
              },
              {
                  "q": "What role does the CRO play?",
                  "a": "Leads the risk function and provides independent oversight.",
                  "explain": "Chapter 12."
              },
              {
                  "q": "What is a risk committee?",
                  "a": "Board or executive committee overseeing risk.",
                  "explain": "Governance."
              },
              {
                  "q": "What infrastructure supports ERM?",
                  "a": "Data, systems, models, reporting tools.",
                  "explain": "Enablers."
              },
              {
                  "q": "Why is risk culture important?",
                  "a": "Frameworks fail if behaviours don't follow.",
                  "explain": "Tone from top."
              },
              {
                  "q": "How are incentives linked to ERM?",
                  "a": "Remuneration adjusted for risk (e.g. deferral, clawback).",
                  "explain": "Aligns behaviour."
              },
              {
                  "q": "What is proportionality in ERM?",
                  "a": "Framework complexity matched to organisation's size and risk.",
                  "explain": "Regulators expect."
              },
              {
                  "q": "How is ERM integrated with strategy?",
                  "a": "Risk appetite informs business plans; plans assessed against appetite.",
                  "explain": "Integration."
              },
              {
                  "q": "What is risk reporting?",
                  "a": "Regular information on risk profile vs appetite to management and board.",
                  "explain": "Chapter 10."
              },
              {
                  "q": "What is ERM maturity?",
                  "a": "Stages of development from basic to advanced integrated ERM.",
                  "explain": "Assessment."
              },
              {
                  "q": "How should an ERM framework be reviewed?",
                  "a": "Periodically by internal audit and externally.",
                  "explain": "Continuous improvement."
              }
          ]
      },
      {
          "id": "m05",
          "title": "External risk frameworks (mandatory)",
          "description": "Mandatory external frameworks: Solvency II/UK for insurers, Basel III for banks, pension regulation, and their requirements for capital, governance, ORSA/ICAAP, and disclosure.",
          "cards": [
              {
                  "q": "What is Solvency II's approach?",
                  "a": "Risk-based capital (SCR at 99.5% VaR), governance requirements (system of governance, ORSA), and disclosure.",
                  "explain": "Three pillars."
              },
              {
                  "q": "What is Basel III?",
                  "a": "Banking framework with minimum capital ratios, capital buffers, leverage ratio, liquidity ratios (LCR, NSFR).",
                  "explain": "Three pillars."
              },
              {
                  "q": "What is the ICAAP?",
                  "a": "Internal Capital Adequacy Assessment Process for banks.",
                  "explain": "Pillar 2."
              },
              {
                  "q": "What is the ORSA?",
                  "a": "Own Risk and Solvency Assessment for insurers.",
                  "explain": "Forward-looking."
              },
              {
                  "q": "What is the LCR?",
                  "a": "Liquidity Coverage Ratio: high-quality liquid assets covering 30-day stressed outflows.",
                  "explain": "Basel III."
              },
              {
                  "q": "What is the NSFR?",
                  "a": "Net Stable Funding Ratio: available stable funding vs required over one year.",
                  "explain": "Basel III."
              },
              {
                  "q": "What is the leverage ratio?",
                  "a": "Tier 1 capital / total exposure, non-risk-based backstop.",
                  "explain": "Basel III."
              },
              {
                  "q": "What governance does Solvency II require?",
                  "a": "Risk management, compliance, internal audit and actuarial functions; fit and proper requirements.",
                  "explain": "Key functions."
              },
              {
                  "q": "What disclosure does Solvency II require?",
                  "a": "SFCR (public) and regulatory reporting.",
                  "explain": "Pillar 3."
              },
              {
                  "q": "How do pension schemes face mandatory frameworks?",
                  "a": "Funding regulations, governance codes, risk management requirements (e.g. ESOG in UK).",
                  "explain": "Effective system of governance."
              },
              {
                  "q": "What are the pros of mandatory frameworks?",
                  "a": "Consistency, minimum standards, comparability.",
                  "explain": "Protection."
              },
              {
                  "q": "What are the cons?",
                  "a": "Box-ticking, procyclicality, may not reflect firm-specific risks.",
                  "explain": "Limitations."
              },
              {
                  "q": "What is procyclicality?",
                  "a": "Rules amplifying economic cycles (e.g. forced selling in downturns).",
                  "explain": "Counter-cyclical buffers."
              },
              {
                  "q": "What is the countercyclical capital buffer?",
                  "a": "Extra bank capital built in good times.",
                  "explain": "Basel III."
              },
              {
                  "q": "How do mandatory frameworks relate to internal ERM?",
                  "a": "Set minimum requirements; good ERM goes beyond them.",
                  "explain": "Complementary."
              }
          ]
      },
      {
          "id": "m06",
          "title": "External risk frameworks (non-mandatory)",
          "description": "Voluntary ERM standards and guidance: COSO ERM, ISO 31000, rating agency ERM criteria, IAIS ICPs, and industry best practice, with their structures and uses.",
          "cards": [
              {
                  "q": "What is COSO ERM?",
                  "a": "A framework (Enterprise Risk Management – Integrating with Strategy and Performance) with components: governance and culture; strategy and objective-setting; performance; review and revision; information, communication and reporting.",
                  "explain": "2017 update."
              },
              {
                  "q": "What is ISO 31000?",
                  "a": "International standard with principles, framework and process for risk management.",
                  "explain": "Generic."
              },
              {
                  "q": "How do rating agencies assess ERM?",
                  "a": "Evaluate risk culture, controls, emerging risk management, strategic risk management, and capital models.",
                  "explain": "Affects ratings."
              },
              {
                  "q": "What are IAIS ICPs?",
                  "a": "Insurance Core Principles from the International Association of Insurance Supervisors.",
                  "explain": "Global standards."
              },
              {
                  "q": "Why adopt voluntary frameworks?",
                  "a": "Best practice structure, credibility with stakeholders, benchmarking.",
                  "explain": "Benefits."
              },
              {
                  "q": "What is the ISO 31000 risk process?",
                  "a": "Communication, scope/context/criteria, assessment (identify, analyse, evaluate), treatment, monitoring, recording.",
                  "explain": "Cycle."
              },
              {
                  "q": "What does COSO emphasise?",
                  "a": "Link between risk, strategy and performance.",
                  "explain": "Value focus."
              },
              {
                  "q": "How can frameworks be tailored?",
                  "a": "Adapting to the organisation's size, sector and culture.",
                  "explain": "Proportionality."
              },
              {
                  "q": "What are limitations of generic frameworks?",
                  "a": "May lack detail for financial risks; risk of box-ticking.",
                  "explain": "Supplement."
              },
              {
                  "q": "What is the role of industry bodies?",
                  "a": "Issue guidance and share practice (e.g. IRM, CRO Forum).",
                  "explain": "Knowledge."
              },
              {
                  "q": "How do frameworks support board oversight?",
                  "a": "Clear structures for reporting and accountability.",
                  "explain": "Governance."
              },
              {
                  "q": "What is a maturity model?",
                  "a": "Assessing ERM development against defined levels.",
                  "explain": "Improvement."
              },
              {
                  "q": "How do frameworks treat risk appetite?",
                  "a": "Central element linking strategy and risk-taking.",
                  "explain": "Common."
              },
              {
                  "q": "How do rating agencies use ERM scores?",
                  "a": "Adjust capital adequacy expectations and ratings.",
                  "explain": "Incentive."
              },
              {
                  "q": "Why compare mandatory and voluntary frameworks?",
                  "a": "Understand gaps and design internal frameworks.",
                  "explain": "Exam theme."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Financial statements",
          "description": "Using financial statements in ERM: the balance sheet, income statement and cash flow statement, accounting versus economic and regulatory views, key ratios, and how accounting choices can hide or reveal risk.",
          "cards": [
              {
                  "q": "What are the three main financial statements?",
                  "a": "Balance sheet, income statement (P&L), cash flow statement.",
                  "explain": "Plus notes."
              },
              {
                  "q": "How can the balance sheet reveal risk?",
                  "a": "Leverage, liquidity, asset quality, concentrations, off-balance sheet items.",
                  "explain": "Structure."
              },
              {
                  "q": "How can the cash flow statement reveal risk?",
                  "a": "Reliance on financing, operating cash generation versus profit.",
                  "explain": "Liquidity."
              },
              {
                  "q": "What is an economic balance sheet?",
                  "a": "Assets and liabilities at market-consistent values.",
                  "explain": "Solvency II."
              },
              {
                  "q": "Why can accounting profit mislead?",
                  "a": "Accruals, valuation choices, smoothing, off-balance sheet items.",
                  "explain": "Earnings quality."
              },
              {
                  "q": "What ratios indicate liquidity risk?",
                  "a": "Current ratio, quick ratio, cash ratio.",
                  "explain": "Short-term."
              },
              {
                  "q": "What ratios indicate leverage?",
                  "a": "Debt/equity, interest cover, gearing.",
                  "explain": "Solvency."
              },
              {
                  "q": "What are off-balance sheet exposures?",
                  "a": "Guarantees, derivatives, SPVs, commitments.",
                  "explain": "Hidden risk."
              },
              {
                  "q": "How do regulatory balance sheets differ?",
                  "a": "Prescribed valuation and capital rules.",
                  "explain": "Solvency view."
              },
              {
                  "q": "How can financial statements be used in credit analysis?",
                  "a": "Assess counterparties' ability to pay.",
                  "explain": "Credit risk."
              },
              {
                  "q": "What is fair value accounting?",
                  "a": "Measuring assets/liabilities at market-based values.",
                  "explain": "Volatility."
              },
              {
                  "q": "How can accounting mismatches create risk?",
                  "a": "Assets and liabilities measured differently creating P&L volatility.",
                  "explain": "IFRS 17/9."
              },
              {
                  "q": "What is earnings management?",
                  "a": "Using accounting discretion to smooth or inflate profits.",
                  "explain": "Red flag."
              },
              {
                  "q": "Why is the notes section important?",
                  "a": "Contains risk disclosures, sensitivities, contingent liabilities.",
                  "explain": "Detail."
              },
              {
                  "q": "How can ERM use financial statements?",
                  "a": "Identifying risks, setting metrics and monitoring.",
                  "explain": "Integration."
              }
          ]
      },
      {
          "id": "m08",
          "title": "ERM processes and structures",
          "description": "Organising ERM: the ERM process cycle, organisational structures (centralised, decentralised, hub-and-spoke), roles and responsibilities, risk committees, and integrating ERM into planning and performance management.",
          "cards": [
              {
                  "q": "What is the ERM process cycle?",
                  "a": "Establish context → identify → assess → respond → monitor and report → review.",
                  "explain": "Continuous."
              },
              {
                  "q": "What is a centralised ERM structure?",
                  "a": "Risk management concentrated in a central function.",
                  "explain": "Consistency."
              },
              {
                  "q": "What is a decentralised structure?",
                  "a": "Risk managed within business units.",
                  "explain": "Closer to risks."
              },
              {
                  "q": "What is hub-and-spoke?",
                  "a": "Central risk function with embedded risk staff in business units.",
                  "explain": "Balance."
              },
              {
                  "q": "What roles do business units play?",
                  "a": "Own and manage their risks within appetite (first line).",
                  "explain": "Ownership."
              },
              {
                  "q": "What is the role of internal audit?",
                  "a": "Independent assurance on effectiveness of risk management.",
                  "explain": "Third line."
              },
              {
                  "q": "How is ERM integrated with planning?",
                  "a": "Risk assessment of business plans and capital projections.",
                  "explain": "Strategy."
              },
              {
                  "q": "What is a risk management function?",
                  "a": "Second-line function designing frameworks and challenging risks.",
                  "explain": "Oversight."
              },
              {
                  "q": "What committees support ERM?",
                  "a": "Board risk committee, executive risk committee, ALCO, underwriting committees.",
                  "explain": "Governance."
              },
              {
                  "q": "How does ERM relate to performance management?",
                  "a": "Risk-adjusted performance measures and incentives.",
                  "explain": "RAROC."
              },
              {
                  "q": "What are key risk indicators?",
                  "a": "Metrics providing early warning of rising risk.",
                  "explain": "Monitoring."
              },
              {
                  "q": "What is escalation?",
                  "a": "Process for raising breaches or issues to appropriate levels.",
                  "explain": "Governance."
              },
              {
                  "q": "How is ERM documented?",
                  "a": "Framework documents, policies, risk registers.",
                  "explain": "Evidence."
              },
              {
                  "q": "How can structures fail?",
                  "a": "Unclear responsibilities, lack of independence, poor communication.",
                  "explain": "Case studies."
              },
              {
                  "q": "Why must ERM be resourced adequately?",
                  "a": "Effective oversight needs skilled staff and systems.",
                  "explain": "Proportionality."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Risk policy",
          "description": "Risk appetite, tolerance and limits: articulating risk appetite statements, quantitative and qualitative measures, cascading into limits, risk policies by risk type, and the desired risk profile and risk objectives.",
          "cards": [
              {
                  "q": "What is risk appetite?",
                  "a": "The amount and type of risk an organisation is willing to accept in pursuit of its objectives.",
                  "explain": "Board-set."
              },
              {
                  "q": "What is risk tolerance?",
                  "a": "The acceptable variation around objectives or limits for specific risks.",
                  "explain": "Operational."
              },
              {
                  "q": "What is a risk limit?",
                  "a": "A quantitative boundary on exposure (e.g. VaR limit, counterparty limit).",
                  "explain": "Cascaded from appetite."
              },
              {
                  "q": "What makes a good risk appetite statement?",
                  "a": "Linked to strategy, measurable, covers all material risks, understood, cascaded, monitored.",
                  "explain": "Qualities."
              },
              {
                  "q": "Give examples of risk appetite metrics.",
                  "a": "Solvency ratio target, earnings volatility, probability of ruin, rating target, liquidity coverage.",
                  "explain": "Quantitative."
              },
              {
                  "q": "What are qualitative appetite statements?",
                  "a": "E.g. zero tolerance for regulatory breaches or reputational damage.",
                  "explain": "Non-quantifiable risks."
              },
              {
                  "q": "What is the desired risk profile?",
                  "a": "The mix of risks the organisation wants to hold.",
                  "explain": "Strategy."
              },
              {
                  "q": "What is a risk policy?",
                  "a": "Rules for managing a risk type, including limits, responsibilities, reporting.",
                  "explain": "Implementation."
              },
              {
                  "q": "How is appetite cascaded?",
                  "a": "From enterprise level to business units and risk types via limits.",
                  "explain": "Consistency."
              },
              {
                  "q": "What happens when limits are breached?",
                  "a": "Escalation and remedial action per policy.",
                  "explain": "Governance."
              },
              {
                  "q": "Why link appetite to capital?",
                  "a": "Capital determines capacity to absorb losses.",
                  "explain": "Risk capacity."
              },
              {
                  "q": "What is risk capacity?",
                  "a": "Maximum risk that can be borne before breaching constraints.",
                  "explain": "Upper bound."
              },
              {
                  "q": "How often is appetite reviewed?",
                  "a": "At least annually or on strategic change.",
                  "explain": "Dynamic."
              },
              {
                  "q": "What stakeholders influence appetite?",
                  "a": "Shareholders, regulators, rating agencies, policyholders.",
                  "explain": "Expectations."
              },
              {
                  "q": "What are risk objectives?",
                  "a": "Targets for managing risk to support business goals.",
                  "explain": "Alignment."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Monitoring and communication of risk",
          "description": "Monitoring the risk profile against appetite and communicating risk: key risk indicators, risk dashboards, risk reporting to boards and stakeholders, disclosure, and tailoring communications to the audience.",
          "cards": [
              {
                  "q": "What is risk monitoring?",
                  "a": "Ongoing tracking of risks and controls against appetite and limits.",
                  "explain": "Early warning."
              },
              {
                  "q": "What are key risk indicators (KRIs)?",
                  "a": "Metrics signalling changes in risk levels (e.g. lapse rates, staff turnover).",
                  "explain": "Leading indicators."
              },
              {
                  "q": "What is a risk dashboard?",
                  "a": "A summary report of key risks, metrics and trends.",
                  "explain": "Board reporting."
              },
              {
                  "q": "What should board risk reports include?",
                  "a": "Risk profile vs appetite, breaches, emerging risks, key changes, actions.",
                  "explain": "Decision-useful."
              },
              {
                  "q": "How should communications vary by audience?",
                  "a": "Technical detail for risk specialists; key messages for board; public disclosures for investors.",
                  "explain": "Tailoring."
              },
              {
                  "q": "What are external risk disclosures?",
                  "a": "Annual report risk sections, SFCR, Pillar 3 reports.",
                  "explain": "Transparency."
              },
              {
                  "q": "Why is timeliness important?",
                  "a": "Late information limits response.",
                  "explain": "Frequency."
              },
              {
                  "q": "What is a heat map?",
                  "a": "Visual display of risks by likelihood and impact.",
                  "explain": "Communication."
              },
              {
                  "q": "What are limitations of heat maps?",
                  "a": "Oversimplify, ignore correlations and tails.",
                  "explain": "Use with care."
              },
              {
                  "q": "What is escalation reporting?",
                  "a": "Reporting significant issues outside regular cycles.",
                  "explain": "Urgency."
              },
              {
                  "q": "How can risk communication fail?",
                  "a": "Too complex, too late, overly optimistic.",
                  "explain": "Case studies."
              },
              {
                  "q": "What is the role of the CRO in communication?",
                  "a": "Presents independent view of risk to board.",
                  "explain": "Challenge."
              },
              {
                  "q": "How are emerging risks communicated?",
                  "a": "Horizon scanning reports and scenario narratives.",
                  "explain": "Uncertainty."
              },
              {
                  "q": "What is risk transparency?",
                  "a": "Clear, honest reporting of risks.",
                  "explain": "Culture."
              },
              {
                  "q": "How can KRIs be chosen?",
                  "a": "Relevance, predictiveness, measurability, thresholds.",
                  "explain": "Design."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Stakeholders",
          "description": "Stakeholders in ERM — shareholders, policyholders and customers, employees, management, creditors, regulators, rating agencies, auditors, government and society — their interests in the organisation's risk management and how ERM responds.",
          "cards": [
              {
                  "q": "List the main ERM stakeholders.",
                  "a": "Shareholders, debt holders, customers/policyholders, employees, management, board, regulators, rating agencies, auditors, government, society.",
                  "explain": "Broad."
              },
              {
                  "q": "What do shareholders want from ERM?",
                  "a": "Value creation, optimal risk-return, avoidance of ruin.",
                  "explain": "Return focus."
              },
              {
                  "q": "What do debt holders want?",
                  "a": "Low default risk, protective covenants.",
                  "explain": "Downside focus."
              },
              {
                  "q": "What do policyholders want?",
                  "a": "Security of claims and fair treatment.",
                  "explain": "Protection."
              },
              {
                  "q": "What do regulators want?",
                  "a": "Solvency, market stability, consumer protection.",
                  "explain": "Minimum standards."
              },
              {
                  "q": "What do rating agencies want?",
                  "a": "Strong capital and ERM to support ratings.",
                  "explain": "Creditworthiness."
              },
              {
                  "q": "What do employees want?",
                  "a": "Job security, fair incentives.",
                  "explain": "Stability."
              },
              {
                  "q": "How can stakeholder interests conflict?",
                  "a": "Shareholders may prefer risk for return; debt holders and regulators prefer safety.",
                  "explain": "Balance."
              },
              {
                  "q": "What is agency risk?",
                  "a": "Managers acting in their own interests rather than owners'.",
                  "explain": "Incentives."
              },
              {
                  "q": "How does ERM manage stakeholder conflicts?",
                  "a": "Clear appetite, transparent reporting, governance.",
                  "explain": "Balance."
              },
              {
                  "q": "What is the role of auditors?",
                  "a": "Assurance on financial statements and controls.",
                  "explain": "Independence."
              },
              {
                  "q": "What is the role of government?",
                  "a": "Legislation, bailouts, taxation.",
                  "explain": "Systemic."
              },
              {
                  "q": "Why consider society as a stakeholder?",
                  "a": "ESG expectations and reputational risk.",
                  "explain": "Licence to operate."
              },
              {
                  "q": "How do stakeholders affect risk appetite?",
                  "a": "Their expectations define acceptable risk.",
                  "explain": "Appetite setting."
              },
              {
                  "q": "How can communication address stakeholder needs?",
                  "a": "Tailored disclosures.",
                  "explain": "Chapter 10."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Governance functions and the role of the CRO",
          "description": "Governance of risk: the board and its committees, key functions (risk management, compliance, internal audit, actuarial), the Chief Risk Officer's role, independence and reporting lines, and remuneration and culture.",
          "cards": [
              {
                  "q": "What is the board's role in risk governance?",
                  "a": "Set strategy and appetite, oversee framework, ensure adequate resources and culture.",
                  "explain": "Ultimate responsibility."
              },
              {
                  "q": "What does a board risk committee do?",
                  "a": "Oversees risk profile, appetite, framework and CRO.",
                  "explain": "Non-executive."
              },
              {
                  "q": "What is the CRO's role?",
                  "a": "Lead the risk function, provide independent oversight and challenge, report to board.",
                  "explain": "Second line."
              },
              {
                  "q": "Why must the CRO be independent?",
                  "a": "To challenge business decisions without conflicts.",
                  "explain": "Reporting line to board/risk committee."
              },
              {
                  "q": "What is the compliance function?",
                  "a": "Ensures adherence to laws and regulations.",
                  "explain": "Second line."
              },
              {
                  "q": "What is the actuarial function (insurers)?",
                  "a": "Oversees technical provisions and opines on underwriting and reinsurance.",
                  "explain": "Solvency II."
              },
              {
                  "q": "What is internal audit?",
                  "a": "Independent assurance on governance, risk and controls.",
                  "explain": "Third line."
              },
              {
                  "q": "How should remuneration support governance?",
                  "a": "Risk-adjusted, deferred, with malus/clawback.",
                  "explain": "Incentives."
              },
              {
                  "q": "What is tone from the top?",
                  "a": "Leadership demonstrating commitment to risk management.",
                  "explain": "Culture."
              },
              {
                  "q": "What is the risk of a weak CRO?",
                  "a": "Risk function ignored, excessive risk-taking.",
                  "explain": "Case studies."
              },
              {
                  "q": "What should the CRO report on?",
                  "a": "Risk profile, breaches, emerging risks, capital adequacy.",
                  "explain": "Board."
              },
              {
                  "q": "What skills does a CRO need?",
                  "a": "Technical risk knowledge, business understanding, communication, independence.",
                  "explain": "Profile."
              },
              {
                  "q": "What are fit and proper requirements?",
                  "a": "Senior individuals must be competent and honest.",
                  "explain": "Regulation."
              },
              {
                  "q": "What is the senior managers regime?",
                  "a": "UK accountability regime assigning responsibilities to individuals.",
                  "explain": "SM&CR."
              },
              {
                  "q": "How can governance fail?",
                  "a": "Groupthink, dominant CEO, weak challenge.",
                  "explain": "Chapter 32."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Business analysis, risk id and initial assessment",
          "description": "Identifying and initially assessing risks: business analysis (PESTLE, SWOT, Porter), risk identification tools (brainstorming, checklists, interviews, process mapping, scenario workshops), risk registers, qualitative assessment and emerging risk identification.",
          "cards": [
              {
                  "q": "What is PESTLE analysis?",
                  "a": "Examining political, economic, social, technological, legal and environmental factors.",
                  "explain": "External risks."
              },
              {
                  "q": "What is SWOT analysis?",
                  "a": "Strengths, weaknesses, opportunities, threats.",
                  "explain": "Strategic."
              },
              {
                  "q": "What is Porter's five forces?",
                  "a": "Competitive rivalry, supplier power, buyer power, threat of substitutes, threat of new entrants.",
                  "explain": "Industry risk."
              },
              {
                  "q": "List risk identification techniques.",
                  "a": "Brainstorming, checklists, interviews, questionnaires, process mapping, scenario analysis, Delphi, fault trees, HAZOP, SWIFT.",
                  "explain": "Toolkit."
              },
              {
                  "q": "What is the Delphi technique?",
                  "a": "Anonymous expert opinions refined over rounds to reach consensus.",
                  "explain": "Reduces groupthink."
              },
              {
                  "q": "What is a risk register?",
                  "a": "Record of risks with owners, assessments, controls and actions.",
                  "explain": "Central tool."
              },
              {
                  "q": "What is initial (qualitative) assessment?",
                  "a": "Rating risks by likelihood and impact on scales.",
                  "explain": "Prioritisation."
              },
              {
                  "q": "What is a fault tree?",
                  "a": "Diagram tracing causes leading to an event.",
                  "explain": "Operational risk."
              },
              {
                  "q": "What is an event tree?",
                  "a": "Diagram tracing consequences following an event.",
                  "explain": "Scenario."
              },
              {
                  "q": "How are emerging risks identified?",
                  "a": "Horizon scanning, expert panels, external research.",
                  "explain": "Uncertainty."
              },
              {
                  "q": "What is gross vs net risk?",
                  "a": "Before and after controls.",
                  "explain": "Assessment."
              },
              {
                  "q": "What is a risk bow-tie?",
                  "a": "Diagram of causes, event, consequences, with preventive and mitigating controls.",
                  "explain": "Visualisation."
              },
              {
                  "q": "Why involve many staff in identification?",
                  "a": "Broader knowledge and ownership.",
                  "explain": "Completeness."
              },
              {
                  "q": "What is process mapping?",
                  "a": "Charting processes to find failure points.",
                  "explain": "Operational."
              },
              {
                  "q": "How often should risk identification occur?",
                  "a": "Continuously and at least annually.",
                  "explain": "Dynamic."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Introduction to risk measurement",
          "description": "Measuring risk: deviation measures (standard deviation, tracking error), tail measures (VaR, TVaR/expected shortfall, probability of ruin), coherence properties, time horizons and confidence levels, and choosing measures for different purposes.",
          "cards": [
              {
                  "q": "What is standard deviation as a risk measure?",
                  "a": "Dispersion around the mean; penalises upside and downside.",
                  "explain": "Symmetric."
              },
              {
                  "q": "What is Value at Risk?",
                  "a": "Loss level not exceeded with probability α over a horizon.",
                  "explain": "Quantile."
              },
              {
                  "q": "What is TVaR (expected shortfall)?",
                  "a": "Expected loss given loss exceeds VaR.",
                  "explain": "Tail average."
              },
              {
                  "q": "What are the coherence properties?",
                  "a": "Monotonicity, sub-additivity, positive homogeneity, translation invariance.",
                  "explain": "Artzner et al."
              },
              {
                  "q": "Is VaR coherent?",
                  "a": "No — it can fail sub-additivity.",
                  "explain": "Diversification issue."
              },
              {
                  "q": "Is TVaR coherent?",
                  "a": "Yes.",
                  "explain": "Preferred."
              },
              {
                  "q": "What is probability of ruin?",
                  "a": "Probability that surplus falls below zero.",
                  "explain": "Solvency."
              },
              {
                  "q": "What is tracking error?",
                  "a": "Standard deviation of returns relative to a benchmark.",
                  "explain": "Relative risk."
              },
              {
                  "q": "How is the time horizon chosen?",
                  "a": "Reflecting how long to recognise and respond to losses (e.g. one year for insurers, 10 days for trading).",
                  "explain": "Purpose."
              },
              {
                  "q": "How is the confidence level chosen?",
                  "a": "Reflecting risk appetite or rating target (e.g. 99.5%).",
                  "explain": "Calibration."
              },
              {
                  "q": "What is semi-variance?",
                  "a": "Variance of outcomes below the mean.",
                  "explain": "Downside."
              },
              {
                  "q": "What is a spectral risk measure?",
                  "a": "Weighted average of quantiles with increasing weights for worse outcomes.",
                  "explain": "Generalisation."
              },
              {
                  "q": "What are limitations of VaR?",
                  "a": "Ignores tail beyond quantile, not sub-additive, estimation error.",
                  "explain": "Supplement."
              },
              {
                  "q": "What is a stress test as a measure?",
                  "a": "Loss under a specified scenario.",
                  "explain": "Complement."
              },
              {
                  "q": "What is expected loss vs unexpected loss?",
                  "a": "Expected covered by pricing/provisions; unexpected by capital.",
                  "explain": "Credit risk."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Introduction to risk modelling",
          "description": "Modelling risk: deterministic versus stochastic models, correlation measures (Pearson, Spearman, Kendall), their properties and limitations, model building process, choice of distributions, and the advantages and disadvantages of different modelling approaches.",
          "cards": [
              {
                  "q": "What is Pearson correlation?",
                  "a": "Measure of linear dependence between two variables.",
                  "explain": "Sensitive to outliers."
              },
              {
                  "q": "What is Spearman's rho?",
                  "a": "Correlation of ranks.",
                  "explain": "Monotonic dependence."
              },
              {
                  "q": "What is Kendall's tau?",
                  "a": "Concordance-based rank correlation.",
                  "explain": "Copula-friendly."
              },
              {
                  "q": "What are limitations of linear correlation?",
                  "a": "Only captures linear dependence; not invariant to transformations; zero correlation doesn't imply independence; misleading in tails.",
                  "explain": "Use rank measures."
              },
              {
                  "q": "What is a deterministic model?",
                  "a": "Single projection with fixed assumptions.",
                  "explain": "Simple."
              },
              {
                  "q": "What is a stochastic model?",
                  "a": "Uses random variables to produce distributions of outcomes.",
                  "explain": "Captures variability."
              },
              {
                  "q": "What are the steps in building a model?",
                  "a": "Define objectives, choose structure, collect data, fit parameters, validate, document, use and review.",
                  "explain": "Process."
              },
              {
                  "q": "How are distributions chosen?",
                  "a": "Based on data features (skew, tails), theory, fit tests.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is a factor-based model?",
                  "a": "Outcomes driven by common factors.",
                  "explain": "Dimension reduction."
              },
              {
                  "q": "What is historical simulation?",
                  "a": "Using past data directly as scenarios.",
                  "explain": "No distribution assumption."
              },
              {
                  "q": "What is Monte Carlo simulation?",
                  "a": "Generating random scenarios from fitted distributions.",
                  "explain": "Flexible."
              },
              {
                  "q": "What is model risk?",
                  "a": "Wrong model or misuse.",
                  "explain": "Validation."
              },
              {
                  "q": "What is parameter risk?",
                  "a": "Uncertainty in fitted parameters.",
                  "explain": "Estimation."
              },
              {
                  "q": "What is a correlation matrix?",
                  "a": "Matrix of pairwise correlations; must be positive semi-definite.",
                  "explain": "Aggregation."
              },
              {
                  "q": "Why might correlations change in stress?",
                  "a": "Common shocks cause assets to fall together.",
                  "explain": "Tail dependence."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Statistical distributions",
          "description": "Distributions used in risk modelling: normal and lognormal, Student's t, heavy-tailed distributions (Pareto, generalised Pareto), gamma and Weibull, discrete distributions for counts, multivariate distributions, and choosing and fitting distributions.",
          "cards": [
              {
                  "q": "Why is the normal distribution often inadequate?",
                  "a": "Financial returns show fat tails and skewness.",
                  "explain": "Underestimates extremes."
              },
              {
                  "q": "What is the lognormal distribution used for?",
                  "a": "Asset prices and claim sizes (positive, skewed).",
                  "explain": "Log is normal."
              },
              {
                  "q": "What is Student's t used for?",
                  "a": "Returns with fat tails; degrees of freedom control tail weight.",
                  "explain": "Heavier than normal."
              },
              {
                  "q": "What is the Pareto distribution?",
                  "a": "Heavy-tailed distribution for large losses.",
                  "explain": "Power-law tail."
              },
              {
                  "q": "What is the generalised Pareto distribution?",
                  "a": "Distribution for exceedances over a high threshold.",
                  "explain": "EVT."
              },
              {
                  "q": "What is the gamma distribution used for?",
                  "a": "Positive skewed quantities like claim amounts.",
                  "explain": "Flexible."
              },
              {
                  "q": "What is the Weibull distribution?",
                  "a": "Flexible distribution for positive values (e.g. lifetimes, losses).",
                  "explain": "Tail shape."
              },
              {
                  "q": "Which distributions model counts?",
                  "a": "Poisson, binomial, negative binomial.",
                  "explain": "Frequency."
              },
              {
                  "q": "What is the multivariate normal?",
                  "a": "Joint normal distribution defined by means and covariance matrix.",
                  "explain": "Elliptical."
              },
              {
                  "q": "What is a mixture distribution?",
                  "a": "Combining distributions to capture regimes or heterogeneity.",
                  "explain": "Fat tails."
              },
              {
                  "q": "How are distributions fitted?",
                  "a": "Maximum likelihood, method of moments.",
                  "explain": "Estimation."
              },
              {
                  "q": "How is fit assessed?",
                  "a": "Q-Q plots, goodness-of-fit tests, AIC/BIC.",
                  "explain": "Validation."
              },
              {
                  "q": "What is skewness?",
                  "a": "Asymmetry of a distribution.",
                  "explain": "Third moment."
              },
              {
                  "q": "What is kurtosis?",
                  "a": "Tail heaviness relative to normal.",
                  "explain": "Fourth moment."
              },
              {
                  "q": "Why use multivariate t?",
                  "a": "Captures joint fat tails and tail dependence.",
                  "explain": "Better than normal."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Time series analysis",
          "description": "Time series in risk modelling: stationarity, autoregressive and moving average models, random walks, volatility clustering and GARCH models, cointegration, and using time series to project economic and financial variables.",
          "cards": [
              {
                  "q": "What is stationarity?",
                  "a": "Statistical properties (mean, variance, autocorrelation) constant over time.",
                  "explain": "Required for many models."
              },
              {
                  "q": "What is an AR(1) model?",
                  "a": "$X_t = \\mu + \\phi(X_{t-1} - \\mu) + \\varepsilon_t$.",
                  "explain": "Stationary if $|\\phi| \\lt 1$."
              },
              {
                  "q": "What is a random walk?",
                  "a": "$X_t = X_{t-1} + \\varepsilon_t$ — non-stationary.",
                  "explain": "Share prices (log)."
              },
              {
                  "q": "What is an MA(q) model?",
                  "a": "Current value depends on current and past q shocks.",
                  "explain": "Short memory."
              },
              {
                  "q": "What is ARIMA?",
                  "a": "AR and MA models applied to differenced data.",
                  "explain": "Non-stationary series."
              },
              {
                  "q": "What is volatility clustering?",
                  "a": "Large changes tend to be followed by large changes.",
                  "explain": "Financial returns."
              },
              {
                  "q": "What is a GARCH model?",
                  "a": "Variance depends on past squared shocks and past variances: $\\sigma_t^2 = \\omega + \\alpha\\varepsilon_{t-1}^2 + \\beta\\sigma_{t-1}^2$.",
                  "explain": "Captures clustering."
              },
              {
                  "q": "What is cointegration?",
                  "a": "Non-stationary series with a stationary linear combination.",
                  "explain": "Long-run relationship."
              },
              {
                  "q": "What is autocorrelation?",
                  "a": "Correlation of a series with its lagged values.",
                  "explain": "ACF."
              },
              {
                  "q": "How are time series models used in ERM?",
                  "a": "Projecting interest rates, inflation, returns for scenario generation.",
                  "explain": "ESGs."
              },
              {
                  "q": "What is mean reversion?",
                  "a": "Tendency to revert to a long-run level.",
                  "explain": "Interest rates."
              },
              {
                  "q": "What is the Wilkie model?",
                  "a": "A cascade stochastic model for UK economic variables (inflation, yields, equities).",
                  "explain": "Actuarial ESG."
              },
              {
                  "q": "What are limitations of time series models?",
                  "a": "Structural breaks, parameter instability, fat tails.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is a structural break?",
                  "a": "A sudden change in the underlying process.",
                  "explain": "Regime shifts."
              },
              {
                  "q": "What is a regime-switching model?",
                  "a": "Parameters switch between states (e.g. calm/crisis).",
                  "explain": "Captures fat tails."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Copulas",
          "description": "Modelling dependence with copulas: Sklar's theorem, Gaussian and t copulas, Archimedean copulas (Clayton, Gumbel, Frank), tail dependence, fitting copulas, simulation, and their use in aggregating risks.",
          "cards": [
              {
                  "q": "What is Sklar's theorem?",
                  "a": "Any joint distribution can be written as a copula applied to its marginal distributions.",
                  "explain": "Separates marginals from dependence."
              },
              {
                  "q": "What is the Gaussian copula?",
                  "a": "Copula implied by the multivariate normal.",
                  "explain": "No tail dependence."
              },
              {
                  "q": "What is the t copula?",
                  "a": "Copula from the multivariate t; symmetric tail dependence.",
                  "explain": "Degrees of freedom."
              },
              {
                  "q": "What is the Clayton copula?",
                  "a": "Archimedean copula with lower tail dependence.",
                  "explain": "Joint crashes."
              },
              {
                  "q": "What is the Gumbel copula?",
                  "a": "Archimedean copula with upper tail dependence.",
                  "explain": "Joint extreme losses."
              },
              {
                  "q": "What is the Frank copula?",
                  "a": "Archimedean copula with no tail dependence.",
                  "explain": "Symmetric."
              },
              {
                  "q": "What is tail dependence?",
                  "a": "Probability of extreme outcome in one variable given extreme in another.",
                  "explain": "Coefficient λ."
              },
              {
                  "q": "How are copulas fitted?",
                  "a": "Maximum likelihood (full or pseudo), inference functions for margins, rank correlation matching.",
                  "explain": "Estimation."
              },
              {
                  "q": "How is a copula simulated?",
                  "a": "Generate dependent uniforms from the copula, then transform with inverse marginals.",
                  "explain": "Simulation."
              },
              {
                  "q": "Why use copulas in ERM?",
                  "a": "Aggregate risks with realistic dependence, especially in tails.",
                  "explain": "Capital."
              },
              {
                  "q": "What was the criticism of the Gaussian copula in 2008?",
                  "a": "Underestimated joint defaults due to no tail dependence.",
                  "explain": "CDO pricing."
              },
              {
                  "q": "What is the empirical copula?",
                  "a": "Copula estimated directly from ranked data.",
                  "explain": "Diagnostics."
              },
              {
                  "q": "What are limitations of copulas?",
                  "a": "Parameter uncertainty, limited tail data, choice of family.",
                  "explain": "Model risk."
              },
              {
                  "q": "What is a vine copula?",
                  "a": "Building high-dimensional dependence from bivariate copulas.",
                  "explain": "Flexibility."
              },
              {
                  "q": "How does Kendall's tau relate to copulas?",
                  "a": "Depends only on the copula, not marginals.",
                  "explain": "Calibration."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Fitting models",
          "description": "Fitting and validating risk models: data preparation, estimation methods (MLE, method of moments, Bayesian), model selection criteria (AIC, BIC), goodness-of-fit, back-testing, parameter and model uncertainty, and expert judgement.",
          "cards": [
              {
                  "q": "What is maximum likelihood estimation?",
                  "a": "Choosing parameters that maximise the probability of observed data.",
                  "explain": "Efficient."
              },
              {
                  "q": "What is the method of moments?",
                  "a": "Equating sample and theoretical moments.",
                  "explain": "Simple."
              },
              {
                  "q": "What is Bayesian estimation?",
                  "a": "Combining prior beliefs with data to get a posterior distribution.",
                  "explain": "Parameter uncertainty."
              },
              {
                  "q": "What is AIC?",
                  "a": "$2k - 2\\ln L$ — trades off fit and complexity.",
                  "explain": "Lower is better."
              },
              {
                  "q": "What is BIC?",
                  "a": "$k\\ln n - 2\\ln L$ — heavier penalty for complexity.",
                  "explain": "Parsimony."
              },
              {
                  "q": "What is back-testing?",
                  "a": "Comparing model predictions to actual outcomes (e.g. VaR exceedances).",
                  "explain": "Validation."
              },
              {
                  "q": "What is a Q-Q plot?",
                  "a": "Plot of sample vs theoretical quantiles.",
                  "explain": "Tail fit."
              },
              {
                  "q": "What is parameter uncertainty?",
                  "a": "Uncertainty in fitted parameters due to limited data.",
                  "explain": "Bootstrap, Bayesian."
              },
              {
                  "q": "What is model uncertainty?",
                  "a": "Uncertainty about model form.",
                  "explain": "Compare models."
              },
              {
                  "q": "How is data prepared?",
                  "a": "Cleaning, adjusting for inflation/changes, checking consistency.",
                  "explain": "Quality."
              },
              {
                  "q": "What is overfitting?",
                  "a": "Model captures noise.",
                  "explain": "Out-of-sample tests."
              },
              {
                  "q": "What is expert judgement?",
                  "a": "Using expertise where data is insufficient.",
                  "explain": "Documented."
              },
              {
                  "q": "What is the Kupiec test?",
                  "a": "Test of VaR exceedance frequency.",
                  "explain": "Back-testing."
              },
              {
                  "q": "How can small tail data be handled?",
                  "a": "EVT, external data, expert judgement.",
                  "explain": "Tails."
              },
              {
                  "q": "Why document model fitting?",
                  "a": "Transparency and validation.",
                  "explain": "Governance."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Extreme value theory",
          "description": "Extreme value theory for tail risk: block maxima and the GEV distribution, peaks-over-threshold and the generalised Pareto distribution, threshold selection, estimating extreme quantiles, and modelling events with low probability.",
          "cards": [
              {
                  "q": "What is extreme value theory?",
                  "a": "Statistical theory for modelling the tails of distributions.",
                  "explain": "Rare events."
              },
              {
                  "q": "What is the block maxima approach?",
                  "a": "Modelling maxima of blocks (e.g. annual maxima) with the GEV distribution.",
                  "explain": "Fisher-Tippett."
              },
              {
                  "q": "What are the GEV types?",
                  "a": "Gumbel (light tail), Fréchet (heavy tail), Weibull (bounded).",
                  "explain": "Shape parameter."
              },
              {
                  "q": "What is peaks-over-threshold?",
                  "a": "Modelling exceedances above a high threshold with the GPD.",
                  "explain": "Uses more data."
              },
              {
                  "q": "How is the threshold chosen?",
                  "a": "Mean excess plots, stability of parameter estimates.",
                  "explain": "Bias-variance trade-off."
              },
              {
                  "q": "What is a mean excess plot?",
                  "a": "Mean excess over threshold vs threshold; linear for GPD.",
                  "explain": "Diagnostic."
              },
              {
                  "q": "What does a positive GPD shape parameter imply?",
                  "a": "Heavy (Pareto-type) tail.",
                  "explain": "Infinite moments possible."
              },
              {
                  "q": "How are extreme quantiles estimated?",
                  "a": "From fitted GPD tail formula.",
                  "explain": "VaR at high levels."
              },
              {
                  "q": "What are limitations of EVT?",
                  "a": "Little data, threshold choice, assumes iid, non-stationarity.",
                  "explain": "Judgement."
              },
              {
                  "q": "How is EVT used in ERM?",
                  "a": "Estimating tail risk for capital, stress testing.",
                  "explain": "Operational and market risk."
              },
              {
                  "q": "What is the return level?",
                  "a": "Value expected to be exceeded once per return period.",
                  "explain": "Catastrophe."
              },
              {
                  "q": "Why not just use normal distributions?",
                  "a": "They understate extremes.",
                  "explain": "Fat tails."
              },
              {
                  "q": "How does EVT link to stress testing?",
                  "a": "Helps calibrate severity of extreme scenarios.",
                  "explain": "Integration."
              },
              {
                  "q": "What is the Hill estimator?",
                  "a": "Estimator of tail index for heavy tails.",
                  "explain": "EVT."
              },
              {
                  "q": "What is a low-probability, high-impact event?",
                  "a": "Event with tiny probability but severe consequences.",
                  "explain": "Syllabus 4.6."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Use of models in ERM",
          "description": "How models support ERM decisions — capital, pricing, strategy, risk appetite — and model risk and parameter risk: sources, governance and validation, the limitations of models, and the role of judgement.",
          "cards": [
              {
                  "q": "How are models used in ERM?",
                  "a": "Capital assessment, risk aggregation, pricing, strategic planning, stress testing, hedging.",
                  "explain": "Decisions."
              },
              {
                  "q": "What is model risk?",
                  "a": "Losses from incorrect models or inappropriate use.",
                  "explain": "Syllabus 4.7."
              },
              {
                  "q": "What is parameter risk?",
                  "a": "Risk from uncertain parameter values.",
                  "explain": "Syllabus 4.7."
              },
              {
                  "q": "How is model risk managed?",
                  "a": "Model governance, validation, documentation, inventory, limits on use, challenger models.",
                  "explain": "Framework."
              },
              {
                  "q": "What is a model inventory?",
                  "a": "Register of all models with owners and status.",
                  "explain": "Governance."
              },
              {
                  "q": "What is independent validation?",
                  "a": "Review by staff not involved in building the model.",
                  "explain": "Challenge."
              },
              {
                  "q": "What is a challenger model?",
                  "a": "Alternative model to test the main one.",
                  "explain": "Benchmark."
              },
              {
                  "q": "What are limitations of models?",
                  "a": "Simplifications, data limits, assumptions, can't foresee structural change.",
                  "explain": "Humility."
              },
              {
                  "q": "What is the role of judgement?",
                  "a": "Interpreting and overriding models where appropriate.",
                  "explain": "Documented."
              },
              {
                  "q": "How can model outputs be misused?",
                  "a": "False precision, used outside intended purpose.",
                  "explain": "Communication."
              },
              {
                  "q": "What is model drift?",
                  "a": "Model becoming inaccurate as conditions change.",
                  "explain": "Monitoring."
              },
              {
                  "q": "How can sensitivity analysis reduce model risk?",
                  "a": "Shows dependence on assumptions.",
                  "explain": "Robustness."
              },
              {
                  "q": "What is the use test?",
                  "a": "Models used in actual decisions.",
                  "explain": "Embedding."
              },
              {
                  "q": "What is model documentation?",
                  "a": "Description of purpose, methodology, assumptions, limitations.",
                  "explain": "Governance."
              },
              {
                  "q": "Why are simple models sometimes better?",
                  "a": "Transparent, robust, easier to understand.",
                  "explain": "Parsimony."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Assessment of market risks",
          "description": "Assessing market risks: interest rate risk (duration, convexity, key rates, yield curve models), equity, property, currency and commodity risk, spread risk, asset-liability mismatch, and the use of scenarios and stochastic models.",
          "cards": [
              {
                  "q": "How is interest rate risk measured?",
                  "a": "Duration, convexity, PV01, key rate durations.",
                  "explain": "Sensitivity."
              },
              {
                  "q": "What is key rate duration?",
                  "a": "Sensitivity to specific points on the yield curve.",
                  "explain": "Non-parallel shifts."
              },
              {
                  "q": "How is equity risk assessed?",
                  "a": "Volatility, beta, VaR, stress tests.",
                  "explain": "Market."
              },
              {
                  "q": "How is currency risk assessed?",
                  "a": "Net FX exposures, VaR, stress tests.",
                  "explain": "Mismatch."
              },
              {
                  "q": "What is spread risk?",
                  "a": "Risk from changes in credit spreads.",
                  "explain": "Corporate bonds."
              },
              {
                  "q": "What is asset-liability mismatch risk?",
                  "a": "Assets and liabilities responding differently to market changes.",
                  "explain": "ALM."
              },
              {
                  "q": "How are yield curve models used?",
                  "a": "Simulate rate scenarios for risk assessment.",
                  "explain": "Stochastic."
              },
              {
                  "q": "What is basis risk?",
                  "a": "Hedge and exposure not moving together.",
                  "explain": "Imperfect hedges."
              },
              {
                  "q": "What is property risk?",
                  "a": "Changes in property values.",
                  "explain": "Illiquid."
              },
              {
                  "q": "What is commodity risk?",
                  "a": "Exposure to commodity price changes.",
                  "explain": "Non-financial firms."
              },
              {
                  "q": "How are market risks aggregated?",
                  "a": "Correlation matrices or joint simulation.",
                  "explain": "Diversification."
              },
              {
                  "q": "What is a principal component analysis for yield curves?",
                  "a": "Decomposing curve moves into level, slope, curvature.",
                  "explain": "Dimension reduction."
              },
              {
                  "q": "Why are scenarios useful for market risk?",
                  "a": "Capture joint moves and extreme events.",
                  "explain": "Stress."
              },
              {
                  "q": "How do embedded options affect market risk?",
                  "a": "Guarantees create non-linear exposure.",
                  "explain": "Greeks."
              },
              {
                  "q": "What is inflation risk?",
                  "a": "Changes in inflation affecting real values.",
                  "explain": "Index-linked."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Assessment of credit risks",
          "description": "Assessing credit risk: default probability, loss given default and exposure at default, credit ratings, structural (Merton) and reduced-form models, credit portfolio models (CreditMetrics, CreditRisk+), counterparty risk, and concentration.",
          "cards": [
              {
                  "q": "What are the components of credit loss?",
                  "a": "PD × LGD × EAD.",
                  "explain": "Expected loss."
              },
              {
                  "q": "What is a structural credit model?",
                  "a": "Default occurs when asset value falls below liabilities (Merton).",
                  "explain": "Equity as option."
              },
              {
                  "q": "What is a reduced-form model?",
                  "a": "Default as a random event with hazard rate.",
                  "explain": "Market spreads."
              },
              {
                  "q": "What is CreditMetrics?",
                  "a": "A portfolio model using rating migrations and correlations.",
                  "explain": "Mark-to-market."
              },
              {
                  "q": "What is CreditRisk+?",
                  "a": "An actuarial default-mode model using Poisson-type default counts.",
                  "explain": "Default only."
              },
              {
                  "q": "What is a credit rating transition matrix?",
                  "a": "Probabilities of moving between ratings.",
                  "explain": "Migration risk."
              },
              {
                  "q": "What is counterparty risk?",
                  "a": "Risk counterparty fails on obligations (e.g. derivatives, reinsurance).",
                  "explain": "Exposure varies."
              },
              {
                  "q": "What is concentration risk in credit?",
                  "a": "Large exposures to single names or sectors.",
                  "explain": "Limits."
              },
              {
                  "q": "What is default correlation?",
                  "a": "Tendency of defaults to cluster.",
                  "explain": "Portfolio risk."
              },
              {
                  "q": "What is recovery risk?",
                  "a": "Uncertainty in LGD.",
                  "explain": "Collateral."
              },
              {
                  "q": "What is wrong-way risk?",
                  "a": "Exposure rises as counterparty credit worsens.",
                  "explain": "Correlation."
              },
              {
                  "q": "How are credit spreads decomposed?",
                  "a": "Expected loss, risk premium, liquidity premium.",
                  "explain": "Valuation."
              },
              {
                  "q": "What is the KMV approach?",
                  "a": "Distance-to-default from equity prices.",
                  "explain": "Structural."
              },
              {
                  "q": "How are credit risks stressed?",
                  "a": "Downgrade and default scenarios, spread widening.",
                  "explain": "Stress tests."
              },
              {
                  "q": "What data is used for credit risk?",
                  "a": "Ratings, spreads, default histories, financial statements.",
                  "explain": "Inputs."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Assessment of operational risks",
          "description": "Assessing operational risk: categories (people, process, systems, external events), loss data collection, scenario analysis, risk and control self-assessment, KRIs, quantification via loss distribution approach, and limitations.",
          "cards": [
              {
                  "q": "What are the categories of operational risk?",
                  "a": "Internal fraud, external fraud, employment practices, clients/products, damage to assets, business disruption/systems, execution/process management.",
                  "explain": "Basel categories."
              },
              {
                  "q": "What is a loss distribution approach?",
                  "a": "Modelling frequency and severity of operational losses, aggregated by simulation.",
                  "explain": "Quantification."
              },
              {
                  "q": "What is risk and control self-assessment (RCSA)?",
                  "a": "Business units assess their risks and control effectiveness.",
                  "explain": "Qualitative."
              },
              {
                  "q": "What is scenario analysis for operational risk?",
                  "a": "Expert estimation of plausible severe events.",
                  "explain": "Tail data."
              },
              {
                  "q": "Why is operational risk data limited?",
                  "a": "Rare large losses, underreporting.",
                  "explain": "External databases."
              },
              {
                  "q": "What are KRIs for operational risk?",
                  "a": "Staff turnover, system outages, complaints, error rates.",
                  "explain": "Early warning."
              },
              {
                  "q": "What is cyber risk?",
                  "a": "Losses from cyber attacks or IT failures.",
                  "explain": "Growing."
              },
              {
                  "q": "What is conduct risk?",
                  "a": "Losses from poor treatment of customers.",
                  "explain": "Redress."
              },
              {
                  "q": "How is external loss data used?",
                  "a": "Supplements internal data for severity.",
                  "explain": "Scaling."
              },
              {
                  "q": "What is outsourcing risk?",
                  "a": "Failure of third parties.",
                  "explain": "Oversight."
              },
              {
                  "q": "What is business continuity risk?",
                  "a": "Disruption to operations.",
                  "explain": "BCP."
              },
              {
                  "q": "What are limitations of op risk quantification?",
                  "a": "Heavy tails, poor data, subjectivity.",
                  "explain": "Judgement."
              },
              {
                  "q": "How can near misses help?",
                  "a": "Reveal control weaknesses before losses.",
                  "explain": "Learning."
              },
              {
                  "q": "What is people risk?",
                  "a": "Errors, key person dependency, misconduct.",
                  "explain": "HR."
              },
              {
                  "q": "What is legal risk?",
                  "a": "Losses from legal actions or unenforceable contracts.",
                  "explain": "Op risk subset."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Assessment of other risks",
          "description": "Assessing other risks: insurance and demographic risks, liquidity risk, strategic and business risks, reputational risk, regulatory and political risk, climate and ESG risks, and contagion and systemic risks.",
          "cards": [
              {
                  "q": "How are insurance risks assessed?",
                  "a": "Frequency-severity models, mortality/longevity models, catastrophe models.",
                  "explain": "Underwriting risk."
              },
              {
                  "q": "How is liquidity risk assessed?",
                  "a": "Cash flow projections, liquidity stress tests, coverage ratios.",
                  "explain": "Funding."
              },
              {
                  "q": "What is funding liquidity vs market liquidity?",
                  "a": "Funding: ability to raise cash; market: ability to sell assets without loss.",
                  "explain": "Two types."
              },
              {
                  "q": "How is strategic risk assessed?",
                  "a": "Scenario analysis, business plan stress testing.",
                  "explain": "Qualitative."
              },
              {
                  "q": "How is reputational risk assessed?",
                  "a": "Scenarios, media monitoring, stakeholder surveys.",
                  "explain": "Hard to quantify."
              },
              {
                  "q": "What is contagion risk?",
                  "a": "Distress spreading between entities or markets.",
                  "explain": "Syllabus 5.4."
              },
              {
                  "q": "What is systemic risk?",
                  "a": "Risk of failure of the financial system.",
                  "explain": "Interconnectedness."
              },
              {
                  "q": "How are climate risks assessed?",
                  "a": "Scenario analysis (e.g. NGFS scenarios), carbon footprinting.",
                  "explain": "Long horizon."
              },
              {
                  "q": "What is political risk?",
                  "a": "Losses from political events (expropriation, sanctions).",
                  "explain": "International."
              },
              {
                  "q": "What is regulatory risk?",
                  "a": "Changes in regulation affecting business.",
                  "explain": "Monitoring."
              },
              {
                  "q": "What is longevity risk?",
                  "a": "People living longer than expected.",
                  "explain": "Pensions/annuities."
              },
              {
                  "q": "What is pandemic risk?",
                  "a": "Mortality/morbidity and economic disruption from pandemics.",
                  "explain": "Scenario."
              },
              {
                  "q": "How can group risk arise?",
                  "a": "Intra-group exposures and contagion.",
                  "explain": "Group structure."
              },
              {
                  "q": "What is sustainability risk?",
                  "a": "ESG events causing value loss.",
                  "explain": "Regulation."
              },
              {
                  "q": "How are interactions between risks considered?",
                  "a": "Scenarios linking multiple risks.",
                  "explain": "Holistic."
              }
          ]
      },
      {
          "id": "m26",
          "title": "Risk optimisation and risk responses",
          "description": "Responding to risk: accept/retain, avoid, reduce/mitigate, transfer and exploit; risk optimisation using risk-adjusted return measures; cost-benefit analysis of responses; and managing an organisation's overall risk profile.",
          "cards": [
              {
                  "q": "List the main risk responses.",
                  "a": "Accept/retain, avoid, reduce (mitigate), transfer (insure, hedge), exploit (take more).",
                  "explain": "4Ts plus exploit."
              },
              {
                  "q": "When should a risk be avoided?",
                  "a": "When outside appetite and not worth the return.",
                  "explain": "Exit activity."
              },
              {
                  "q": "When should a risk be retained?",
                  "a": "When within appetite, cheap to hold, or diversifiable internally.",
                  "explain": "Capital."
              },
              {
                  "q": "What is risk transfer?",
                  "a": "Shifting risk to another party via insurance, reinsurance, derivatives, securitisation.",
                  "explain": "Cost and counterparty risk."
              },
              {
                  "q": "What is risk reduction?",
                  "a": "Controls, diversification, limits.",
                  "explain": "Mitigation."
              },
              {
                  "q": "What is risk optimisation?",
                  "a": "Choosing the risk profile that maximises value subject to appetite.",
                  "explain": "Risk-return."
              },
              {
                  "q": "How is cost-benefit analysis used?",
                  "a": "Comparing cost of response with reduction in expected loss and capital.",
                  "explain": "Efficiency."
              },
              {
                  "q": "What is RAROC?",
                  "a": "Risk-adjusted return on capital: risk-adjusted profit / economic capital.",
                  "explain": "Performance."
              },
              {
                  "q": "What is EVA?",
                  "a": "Economic value added: profit minus cost of capital.",
                  "explain": "Value."
              },
              {
                  "q": "How is the overall risk profile managed?",
                  "a": "Aggregating exposures and adjusting via responses to stay within appetite.",
                  "explain": "Portfolio view."
              },
              {
                  "q": "What is diversification as a response?",
                  "a": "Spreading exposures to reduce aggregate risk.",
                  "explain": "Uncorrelated risks."
              },
              {
                  "q": "What is hedging?",
                  "a": "Taking offsetting positions.",
                  "explain": "Market risk."
              },
              {
                  "q": "What is residual risk?",
                  "a": "Risk remaining after responses.",
                  "explain": "Monitor."
              },
              {
                  "q": "Why might a firm exploit a risk?",
                  "a": "Competitive advantage in understanding or managing it.",
                  "explain": "Upside."
              },
              {
                  "q": "What is a natural hedge?",
                  "a": "Offsetting exposures within the business (e.g. life vs annuity).",
                  "explain": "Internal."
              }
          ]
      },
      {
          "id": "m27",
          "title": "Management of market risk",
          "description": "Managing market risk: asset-liability matching and immunisation, hedging with derivatives (swaps, futures, options), dynamic hedging, diversification, limits, liability-driven investment, and managing interest rate, equity, currency and inflation risks.",
          "cards": [
              {
                  "q": "What is immunisation?",
                  "a": "Matching duration and ensuring asset convexity ≥ liability convexity.",
                  "explain": "Redington."
              },
              {
                  "q": "How can interest rate risk be hedged?",
                  "a": "Matching bonds, interest rate swaps, swaptions.",
                  "explain": "LDI."
              },
              {
                  "q": "How can equity risk be hedged?",
                  "a": "Futures, put options, collars.",
                  "explain": "Downside."
              },
              {
                  "q": "How can currency risk be hedged?",
                  "a": "Forwards, currency swaps, options.",
                  "explain": "FX."
              },
              {
                  "q": "How can inflation risk be hedged?",
                  "a": "Index-linked bonds, inflation swaps.",
                  "explain": "Real liabilities."
              },
              {
                  "q": "What is dynamic hedging?",
                  "a": "Continuously rebalancing hedges (e.g. delta hedging).",
                  "explain": "Guarantees."
              },
              {
                  "q": "What is static hedging?",
                  "a": "Set-and-forget hedges matching exposures.",
                  "explain": "Simple."
              },
              {
                  "q": "What are the costs of hedging?",
                  "a": "Premiums, transaction costs, collateral, basis risk, reduced upside.",
                  "explain": "Trade-offs."
              },
              {
                  "q": "What is LDI?",
                  "a": "Investment strategy hedging liabilities' rate and inflation exposure.",
                  "explain": "Pensions."
              },
              {
                  "q": "What limits control market risk?",
                  "a": "VaR limits, sensitivity limits, concentration limits.",
                  "explain": "Policies."
              },
              {
                  "q": "How does diversification manage market risk?",
                  "a": "Across asset classes, regions, sectors.",
                  "explain": "Reduces specific risk."
              },
              {
                  "q": "What is a CPPI strategy?",
                  "a": "Dynamic allocation protecting a floor.",
                  "explain": "Portfolio insurance."
              },
              {
                  "q": "What is collateral risk in hedging?",
                  "a": "Need to post collateral on derivatives.",
                  "explain": "Liquidity."
              },
              {
                  "q": "How can product design manage market risk?",
                  "a": "Reducing guarantees, sharing risk with customers.",
                  "explain": "Insurers."
              },
              {
                  "q": "What is ALM governance?",
                  "a": "ALCO oversight of matching and hedging.",
                  "explain": "Structure."
              }
          ]
      },
      {
          "id": "m28",
          "title": "Management of credit risk",
          "description": "Managing credit and counterparty risk: credit limits and diversification, collateral and netting, credit derivatives, securitisation, credit insurance, covenants, monitoring and early warning, and managing reinsurance counterparty risk.",
          "cards": [
              {
                  "q": "How can credit risk be reduced?",
                  "a": "Limits, diversification, collateral, netting, guarantees, credit derivatives, covenants.",
                  "explain": "Toolkit."
              },
              {
                  "q": "What are credit limits?",
                  "a": "Maximum exposure to a counterparty, sector or rating.",
                  "explain": "Concentration."
              },
              {
                  "q": "How does collateral reduce credit risk?",
                  "a": "Provides recovery on default.",
                  "explain": "Haircuts."
              },
              {
                  "q": "How does netting reduce credit risk?",
                  "a": "Offsets exposures on default.",
                  "explain": "ISDA."
              },
              {
                  "q": "How can CDS manage credit risk?",
                  "a": "Buying protection transfers default risk.",
                  "explain": "Counterparty risk remains."
              },
              {
                  "q": "How does securitisation manage credit risk?",
                  "a": "Transfers loan risk to investors.",
                  "explain": "Originator."
              },
              {
                  "q": "What is credit insurance?",
                  "a": "Insurance against non-payment.",
                  "explain": "Trade credit."
              },
              {
                  "q": "What are covenants?",
                  "a": "Contractual protections in loans/bonds.",
                  "explain": "Early warning."
              },
              {
                  "q": "How is reinsurance counterparty risk managed?",
                  "a": "Rating requirements, diversification, collateral, funds withheld.",
                  "explain": "Insurers."
              },
              {
                  "q": "What is credit monitoring?",
                  "a": "Tracking ratings, spreads, financials.",
                  "explain": "Early action."
              },
              {
                  "q": "What is a credit rating trigger?",
                  "a": "Contract term requiring action if rating falls.",
                  "explain": "Collateral calls."
              },
              {
                  "q": "What is central clearing's effect?",
                  "a": "Replaces bilateral with CCP exposure.",
                  "explain": "Standardisation."
              },
              {
                  "q": "How can pricing reflect credit risk?",
                  "a": "Risk-based pricing of loans.",
                  "explain": "Expected loss."
              },
              {
                  "q": "What is a credit portfolio management function?",
                  "a": "Active management of aggregate credit exposure.",
                  "explain": "Banks."
              },
              {
                  "q": "How can concentration be addressed?",
                  "a": "Selling exposures, hedging, limits.",
                  "explain": "Diversify."
              }
          ]
      },
      {
          "id": "m29",
          "title": "Management of operational and other risks",
          "description": "Managing operational, liquidity, insurance and other risks: controls, process design, business continuity, insurance, outsourcing oversight, liquidity management, underwriting and reinsurance, and remediation of customer harm.",
          "cards": [
              {
                  "q": "How can operational risk be managed?",
                  "a": "Controls, segregation of duties, automation, training, insurance, business continuity plans.",
                  "explain": "Toolkit."
              },
              {
                  "q": "What is a business continuity plan?",
                  "a": "Plan to maintain critical operations during disruption.",
                  "explain": "Resilience."
              },
              {
                  "q": "How can cyber risk be managed?",
                  "a": "Security controls, testing, incident response, cyber insurance.",
                  "explain": "Defence."
              },
              {
                  "q": "How is liquidity risk managed?",
                  "a": "Liquidity buffers, contingency funding plans, stress testing, diverse funding.",
                  "explain": "Cash."
              },
              {
                  "q": "How are insurance risks managed?",
                  "a": "Underwriting, pricing, reinsurance, diversification, product design.",
                  "explain": "Insurers."
              },
              {
                  "q": "How is outsourcing risk managed?",
                  "a": "Due diligence, contracts, SLAs, monitoring, exit plans.",
                  "explain": "Third parties."
              },
              {
                  "q": "What is customer remediation?",
                  "a": "Correcting harm to customers from failures, including compensation.",
                  "explain": "Syllabus 6.4."
              },
              {
                  "q": "How is reputational risk managed?",
                  "a": "Strong culture, crisis communication, ethical conduct.",
                  "explain": "Prevention."
              },
              {
                  "q": "How is strategic risk managed?",
                  "a": "Scenario planning, diversification, governance.",
                  "explain": "Board."
              },
              {
                  "q": "How is legal risk managed?",
                  "a": "Legal review, contract standards, compliance.",
                  "explain": "Controls."
              },
              {
                  "q": "How is fraud managed?",
                  "a": "Controls, whistleblowing, audits, analytics.",
                  "explain": "Detection."
              },
              {
                  "q": "What is operational resilience?",
                  "a": "Ability to prevent, adapt and recover from disruption to important services.",
                  "explain": "Regulatory focus."
              },
              {
                  "q": "How is people risk managed?",
                  "a": "Succession planning, training, culture.",
                  "explain": "HR."
              },
              {
                  "q": "How can insurance mitigate operational risk?",
                  "a": "Transferring losses (e.g. fidelity, cyber, D&O).",
                  "explain": "Transfer."
              },
              {
                  "q": "Why test controls?",
                  "a": "Ensure they work as intended.",
                  "explain": "Assurance."
              }
          ]
      },
      {
          "id": "m30",
          "title": "Capital management",
          "description": "Capital management: purposes of capital, regulatory, economic and rating agency capital, capital calculations (VaR, TVaR, standard formula, internal models), capital allocation methods (proportional, marginal, Euler), capital planning and sources of capital.",
          "cards": [
              {
                  "q": "What are the purposes of capital?",
                  "a": "Absorb unexpected losses, meet regulatory requirements, support ratings and growth.",
                  "explain": "Security."
              },
              {
                  "q": "What is economic capital?",
                  "a": "Capital needed to meet the firm's own risk appetite (e.g. 99.5% one-year).",
                  "explain": "Internal view."
              },
              {
                  "q": "What is regulatory capital?",
                  "a": "Capital required by regulators (e.g. SCR).",
                  "explain": "Minimum."
              },
              {
                  "q": "What is rating agency capital?",
                  "a": "Capital needed for a target rating under agency models.",
                  "explain": "Often binding."
              },
              {
                  "q": "How is capital calculated?",
                  "a": "Risk measures (VaR/TVaR) applied to aggregate loss distributions or stress-based formulas.",
                  "explain": "Syllabus 7.1."
              },
              {
                  "q": "What is capital allocation?",
                  "a": "Assigning total capital to business units or risks.",
                  "explain": "Syllabus 7.2."
              },
              {
                  "q": "What is proportional allocation?",
                  "a": "Allocating in proportion to standalone capital.",
                  "explain": "Simple."
              },
              {
                  "q": "What is marginal allocation?",
                  "a": "Allocating based on change in total capital when a unit is removed.",
                  "explain": "May not add up."
              },
              {
                  "q": "What is Euler allocation?",
                  "a": "Allocation via partial derivatives of risk measure; sums to total for homogeneous measures.",
                  "explain": "Theoretically sound."
              },
              {
                  "q": "What are sources of capital?",
                  "a": "Equity, retained earnings, subordinated debt, contingent capital, reinsurance.",
                  "explain": "Tiers."
              },
              {
                  "q": "What is capital planning?",
                  "a": "Projecting capital needs and resources over the business plan.",
                  "explain": "ORSA."
              },
              {
                  "q": "What is contingent capital?",
                  "a": "Capital available on trigger events (e.g. CoCos).",
                  "explain": "Flexibility."
              },
              {
                  "q": "How does diversification affect allocation?",
                  "a": "Allocated capital reflects contribution to diversified total.",
                  "explain": "Benefit sharing."
              },
              {
                  "q": "What is return on risk-adjusted capital?",
                  "a": "Profit relative to allocated capital.",
                  "explain": "Performance."
              },
              {
                  "q": "How can capital be released?",
                  "a": "Reinsurance, securitisation, run-off, sales.",
                  "explain": "Efficiency."
              }
          ]
      },
      {
          "id": "m31",
          "title": "ERM implementation",
          "description": "Implementing ERM in practice: developing the framework, gaining buy-in, phasing implementation, systems and data, embedding in culture and incentives, measuring ERM effectiveness, and adapting to changes including emerging risks and cyber.",
          "cards": [
              {
                  "q": "What are the steps to implement ERM?",
                  "a": "Secure board sponsorship, define framework and appetite, assign responsibilities, build processes and systems, embed culture, monitor and refine.",
                  "explain": "Phased."
              },
              {
                  "q": "Why is buy-in important?",
                  "a": "ERM fails without management and staff engagement.",
                  "explain": "Culture."
              },
              {
                  "q": "What are common implementation challenges?",
                  "a": "Silos, data gaps, resistance, cost, complexity.",
                  "explain": "Barriers."
              },
              {
                  "q": "How can ERM be embedded?",
                  "a": "Link to planning, incentives, decision-making and performance measures.",
                  "explain": "Use test."
              },
              {
                  "q": "How is ERM effectiveness measured?",
                  "a": "Maturity assessments, audit findings, incidents, achievement of objectives.",
                  "explain": "Evaluation."
              },
              {
                  "q": "What role do systems play?",
                  "a": "Data aggregation, reporting, modelling.",
                  "explain": "Infrastructure."
              },
              {
                  "q": "How should ERM adapt to emerging risks?",
                  "a": "Horizon scanning and flexible frameworks.",
                  "explain": "Cyber, climate."
              },
              {
                  "q": "What is the importance of communication in implementation?",
                  "a": "Explaining purpose and roles.",
                  "explain": "Engagement."
              },
              {
                  "q": "How can quick wins help?",
                  "a": "Demonstrate value early.",
                  "explain": "Momentum."
              },
              {
                  "q": "What is ERM integration in M&A?",
                  "a": "Assessing and aligning risk frameworks of merged entities.",
                  "explain": "Due diligence."
              },
              {
                  "q": "How can ERM be proportionate for small firms?",
                  "a": "Simpler processes and tools.",
                  "explain": "Proportionality."
              },
              {
                  "q": "What training is needed?",
                  "a": "Risk awareness for all staff, specialist training for risk functions.",
                  "explain": "Capability."
              },
              {
                  "q": "What is the role of internal audit in implementation?",
                  "a": "Assessing framework design and operation.",
                  "explain": "Assurance."
              },
              {
                  "q": "How is cyber risk incorporated?",
                  "a": "Specific appetite, controls, scenarios.",
                  "explain": "Syllabus 2.4."
              },
              {
                  "q": "Why review ERM continuously?",
                  "a": "Changing business and environment.",
                  "explain": "Evolution."
              }
          ]
      },
      {
          "id": "m32",
          "title": "Case studies",
          "description": "Learning from risk management failures and successes — banking crises, insurer failures, rogue trading, operational disasters and conduct scandals — identifying the ERM lessons, how better risk management might have prevented them, and proposing ERM processes that create value.",
          "cards": [
              {
                  "q": "What ERM lessons came from the 2008 financial crisis?",
                  "a": "Excessive leverage, liquidity risk, model overreliance, poor incentives, concentration in mortgage-related assets, weak governance.",
                  "explain": "Syllabus 2.8."
              },
              {
                  "q": "What was the lesson from Barings?",
                  "a": "Lack of segregation of duties and oversight allowed rogue trading.",
                  "explain": "Operational risk."
              },
              {
                  "q": "What was the lesson from AIG?",
                  "a": "Concentrated credit derivative exposures and collateral triggers created a liquidity crisis.",
                  "explain": "Counterparty/liquidity."
              },
              {
                  "q": "What was the lesson from Equitable Life?",
                  "a": "Unhedged guaranteed annuity rates and inadequate reserving.",
                  "explain": "Guarantees."
              },
              {
                  "q": "What was the lesson from LTCM?",
                  "a": "Leverage and model reliance with liquidity and correlation breakdown.",
                  "explain": "Model risk."
              },
              {
                  "q": "What was the lesson from Northern Rock?",
                  "a": "Reliance on wholesale funding exposed liquidity risk.",
                  "explain": "Funding."
              },
              {
                  "q": "What was the lesson from the UK LDI crisis (2022)?",
                  "a": "Leverage and collateral liquidity risk in pension hedging.",
                  "explain": "Liquidity."
              },
              {
                  "q": "What was the lesson from Enron?",
                  "a": "Governance failures and accounting manipulation.",
                  "explain": "Culture."
              },
              {
                  "q": "What common themes appear in failures?",
                  "a": "Poor culture, weak governance, incentives, concentration, liquidity, model overreliance, ignoring warnings.",
                  "explain": "Patterns."
              },
              {
                  "q": "What lessons came from PPI mis-selling?",
                  "a": "Conduct risk and incentive-driven sales.",
                  "explain": "Remediation."
              },
              {
                  "q": "How could better ERM have helped?",
                  "a": "Stronger challenge, limits, stress testing, liquidity planning.",
                  "explain": "Syllabus 2.8."
              },
              {
                  "q": "What is an ERM process that creates value?",
                  "a": "Integrating risk into strategy, capital allocation and pricing.",
                  "explain": "Syllabus 2.9."
              },
              {
                  "q": "What was the lesson from Silicon Valley Bank (2023)?",
                  "a": "Interest rate risk on bond holdings and concentrated, flighty deposits.",
                  "explain": "ALM."
              },
              {
                  "q": "How can case studies be used in exams?",
                  "a": "Apply lessons to new scenarios.",
                  "explain": "Application."
              },
              {
                  "q": "What is the role of culture in failures?",
                  "a": "Risk-taking rewarded, challenge discouraged.",
                  "explain": "Recurring."
              }
          ]
      },
      {
          "id": "m33",
          "title": "Principal terms",
          "description": "Key SP9 terminology — ERM, risk measure, modelling and capital terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'risk appetite'.",
                  "a": "Amount and type of risk an organisation is willing to accept.",
                  "explain": "Board-set."
              },
              {
                  "q": "Define 'three lines of defence'.",
                  "a": "Business, risk oversight, internal audit.",
                  "explain": "Governance model."
              },
              {
                  "q": "Define 'VaR'.",
                  "a": "Loss not exceeded with given probability over a horizon.",
                  "explain": "Quantile."
              },
              {
                  "q": "Define 'TVaR'.",
                  "a": "Expected loss beyond VaR.",
                  "explain": "Coherent."
              },
              {
                  "q": "Define 'copula'.",
                  "a": "Function linking marginals to a joint distribution.",
                  "explain": "Dependence."
              },
              {
                  "q": "Define 'tail dependence'.",
                  "a": "Joint extreme behaviour.",
                  "explain": "Copulas."
              },
              {
                  "q": "Define 'RAROC'.",
                  "a": "Risk-adjusted return on capital.",
                  "explain": "Performance."
              },
              {
                  "q": "Define 'Euler allocation'.",
                  "a": "Capital allocation via risk measure gradients.",
                  "explain": "Adds up."
              },
              {
                  "q": "Define 'KRI'.",
                  "a": "Key risk indicator.",
                  "explain": "Monitoring."
              },
              {
                  "q": "Define 'ORSA'.",
                  "a": "Own Risk and Solvency Assessment.",
                  "explain": "Solvency II."
              },
              {
                  "q": "Define 'GPD'.",
                  "a": "Generalised Pareto distribution for exceedances.",
                  "explain": "EVT."
              },
              {
                  "q": "Define 'model risk'.",
                  "a": "Loss from model errors or misuse.",
                  "explain": "Governance."
              },
              {
                  "q": "Define 'economic capital'.",
                  "a": "Capital required per firm's own risk assessment.",
                  "explain": "Internal."
              },
              {
                  "q": "Define 'risk register'.",
                  "a": "Record of identified risks and controls.",
                  "explain": "Identification."
              },
              {
                  "q": "Define 'contagion'.",
                  "a": "Spread of distress between entities.",
                  "explain": "Systemic."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp9-q1",
      title: "ERM concepts, governance and the use test",
      modules: "Modules 1, 2, 4, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define Enterprise Risk Management (ERM), and explain how it differs from managing an organisation's risks separately, in isolation from one another.",
          answer:
            "ERM is the coordinated, organisation-wide management of <em>all</em> of an organisation's material risks together, explicitly considering how different risks interact and aggregate. This differs from managing risks in isolation (e.g. each department managing its own risks independently with no coordination), since ERM provides a more complete, holistic view of the organisation's overall risk position, including risk interactions that a siloed approach would miss entirely.",
          note: "A strong answer emphasises the <em>integrated</em>, cross-organisational nature of ERM as its defining feature, not merely a list of risk types covered.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 4,
          question:
            "Explain the 'three lines of defence' model for risk governance, describing the distinct role played by each line.",
          answer:
            "The first line comprises operational management, who own and manage risk directly in their day-to-day activities. The second line comprises risk management and compliance functions, who provide oversight, challenge, and set risk policy across the organisation. The third line comprises internal audit, who provide independent assurance that the first two lines are operating effectively. Each successive line stands more removed from day-to-day risk-taking, providing an escalating series of independent checks.",
          note: "Full marks require describing all three lines <em>and</em> explaining the genuine logic of increasing independence, not simply naming the three lines.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 5,
          question:
            "A large insurer has recently implemented a formal ERM framework, including a detailed economic capital model. However, senior management continues to make major strategic decisions (such as entering new markets) without referring to the risk model's output. Discuss what this suggests about the insurer's ERM framework, and how this could be assessed and addressed.",
          answer:
            "This scenario suggests the insurer's ERM framework would <em>fail</em> the 'use test' — the practical test of whether risk models and risk management outputs are actually used in real, material business decisions, rather than being produced purely for compliance purposes and then ignored. A technically well-designed framework delivers little genuine value if senior management does not actually consult it when making consequential decisions. This could be assessed by reviewing board and executive committee minutes and decision papers for genuine evidence that risk analysis was considered, and addressed by ensuring the CRO holds sufficient organisational seniority and influence to require risk input into strategic decision-making, and by embedding a genuine risk-aware culture (e.g. via training, incentives and tone from the top) rather than relying on formal process alone.",
          note: "A strong answer explicitly identifies the use-test failure, links it to the CRO's organisational standing and culture, and proposes concrete remedial steps, not just a generic description of the use test.",
        },
      ],
    },
    {
      id: "sp9-q2",
      title: "The ERM process and risk appetite, capacity and tolerance",
      modules: "Modules 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the four genuine, recurring stages of the ERM process.",
          answer:
            "Risk identification (recognising what risks the organisation faces); risk assessment (understanding their likelihood and impact); risk response/management (deciding how to address identified risks); and monitoring (tracking outcomes and feeding insight back into renewed identification).",
          note: "Full marks require all four stages in a coherent, cyclical order.",
        },
        {
          label: "(ii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between risk appetite, risk capacity and risk tolerance.",
          answer:
            "Risk appetite is the amount and type of risk an organisation is <em>willing</em> to accept in pursuit of its objectives — a strategic choice reflecting organisational preference. Risk capacity is the maximum risk the organisation is <em>able</em> to bear given its financial resources — an objective constraint. Risk tolerance translates the high-level appetite into more granular, specific, measurable limits or thresholds for particular risk categories or business units, giving the broader appetite practical, operational effect. Appetite should always sit within capacity.",
          note: "A strong answer draws the choice-versus-constraint distinction between appetite and capacity explicitly, and explains tolerance as the operational translation of appetite, not merely define the three terms in isolation.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 5,
          question:
            "Explain why an organisation's risk appetite should be set and approved by the board, rather than being determined purely by operational management.",
          answer:
            "Risk appetite reflects a fundamental strategic choice about how much risk the organisation should accept in pursuit of its objectives, and materially affects the interests of stakeholders such as shareholders, policyholders and members. Board-level ownership ensures this choice receives appropriately senior, accountable oversight, reflecting the board's ultimate responsibility for the organisation's strategic direction and long-term sustainability, rather than being set unilaterally by management closer to day-to-day operations, who may face incentives (such as short-term performance targets) that could bias appetite-setting if left unchecked by senior, independent oversight.",
          note: "A strong answer explains <em>why</em> board ownership matters (accountability, stakeholder protection, avoiding potential management bias), not just asserts that the board should be involved.",
        },
      ],
    },
    {
      id: "sp9-q3",
      title: "Risk categories, heat maps and the four Ts",
      modules: "Modules 3, 10, 13, 26",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define operational risk, and explain why it may be harder to identify and quantify than market or credit risk.",
          answer:
            "Operational risk is the risk of loss from inadequate or failed internal processes, people, and systems, or from external events (e.g. fraud, IT failure, human error). It is harder to quantify than market or credit risk because it lacks the rich historical market-price or default data available for financial risks, and its causes are more varied and organisation-specific, making statistical modelling more difficult.",
          note: "Full marks require both the definition and a genuine explanation of the data-scarcity reason, not just a list of example causes.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 4,
          question:
            "Explain what a risk heat map is, and describe the 'four Ts' of risk response.",
          answer:
            "A heat map plots identified risks on a two-dimensional grid, typically with likelihood on one axis and impact on the other, using colour-coding to visually highlight which risks are highest priority. The four Ts of risk response are: Tolerate (accept the risk as within appetite); Treat (take action to reduce likelihood or impact); Transfer (pass the risk to a third party, e.g. via insurance); and Terminate (stop the activity giving rise to the risk entirely).",
          note: "Full marks require explaining the heat map's two dimensions <em>and</em> naming and briefly describing all four Ts.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 5,
          question:
            "A risk manager proposes deprioritising a particular risk on the basis that its heat-map position shows low likelihood. Comment on this proposal, given that the risk in question also carries a catastrophic potential impact.",
          answer:
            "This proposal is questionable: a low-likelihood but high-impact risk can still warrant serious, even disproportionate, management attention relative to its likelihood alone, since a catastrophic impact could threaten the organisation's continued existence even if it occurs rarely. Prioritisation based on likelihood alone ignores the genuine severity dimension entirely. The risk manager should instead weigh likelihood <em>and</em> impact together (as the heat map's two-dimensional structure is designed to support), and should also consider whether reverse stress testing or scenario analysis might reveal the risk's true materiality more fully than likelihood-based prioritisation alone.",
          note: "A strong answer explicitly challenges the likelihood-only reasoning and connects to the general principle that severity can outweigh low probability for tail risks, rather than simply agreeing or disagreeing without justification.",
        },
      ],
    },
    {
      id: "sp9-q4",
      title: "Diversification benefit from risk aggregation",
      modules: "Modules 15, 18, 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "An organisation's stand-alone economic capital requirements are £40m for market risk and £25m for credit risk. The correlation between the two risks is estimated at 0.25. Assuming aggregate capital is given by $C_{\\text{agg}} = \\sqrt{C_M^2 + C_C^2 + 2 \\rho C_M C_C}$, calculate the aggregate capital requirement and the resulting diversification benefit.",
          answer:
            "$C_{\\text{agg}} = \\sqrt{40^2 + 25^2 + 2 \\times 0.25 \\times 40 \\times 25} = \\sqrt{1600 + 625 + 500} = \\sqrt{2725} = £52.20m$ (to 2 decimal places). The diversification benefit is the sum of stand-alone capital less the aggregate capital: £40m + £25m &minus; £52.20m = £12.80m.",
          note: "Arithmetic check: sqrt(1600+625+500)=52.2015...; 65-52.2015=12.7985 (rounds to £52.20m and £12.80m). Full marks require both the aggregate capital figure and the diversification benefit, correctly derived.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the aggregate capital requirement calculated in part (i) is lower than the simple sum of the two risks' stand-alone capital requirements.",
          answer:
            "Since the two risks are imperfectly correlated ($\\rho = 0.25$, well below 1), they are unlikely to both materialise at their worst simultaneously. A properly modelled aggregate capital requirement reflects this genuine diversification benefit, whereas simply summing the stand-alone requirements would implicitly assume perfect correlation between the risks, overstating the organisation's true combined risk.",
          note: "A strong answer explicitly connects the diversification benefit to the correlation being below 1, not just asserts that diversification exists.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss a genuine limitation of using a single, constant correlation parameter (as in part (i)) to model the dependence between two risks.",
          answer:
            "A single, constant correlation parameter typically reflects dependence under normal or 'typical' conditions, but many genuine risk pairs exhibit tail dependence — a tendency to become more strongly correlated specifically in extreme, tail scenarios (e.g. a severe market shock triggering simultaneous credit defaults). A constant correlation assumption can therefore understate genuine dependence, and hence understate required capital, precisely in the extreme scenarios that matter most for solvency. A copula-based approach may better capture this tail dependence than a single correlation parameter alone.",
          note: "A strong answer identifies tail dependence specifically as the limitation, and may reference copulas as a more sophisticated alternative.",
        },
      ],
    },
    {
      id: "sp9-q5",
      title: "Value at Risk and Tail Value at Risk",
      modules: "Module 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A CRO's risk model produces the following discrete aggregate loss distribution for next year: L = £0m with probability 0.70; L = £10m with probability 0.15; L = £30m with probability 0.08; L = £80m with probability 0.05; L = £150m with probability 0.02. Calculate the Value at Risk (VaR) at the 90% confidence level, and the Tail Value at Risk (TVaR) at the 90% confidence level.",
          answer:
            "Cumulative probabilities are: L &le; £0m: 0.70; L &le; £10m: 0.85; L &le; £30m: 0.93; L &le; £80m: 0.98; L &le; £150m: 1.00. VaR at the 90% confidence level is the smallest loss level with cumulative probability at least 0.90, which is L = £30m. The losses exceeding this VaR threshold are £80m (probability 0.05) and £150m (probability 0.02), with combined probability 0.07. TVaR90 is the probability-weighted average of these tail losses: (£80m &times; 0.05 + £150m &times; 0.02) / 0.07 = (£4m + £3m) / 0.07 = £100m.",
          note: "Arithmetic check: cumulative probabilities 0.70/0.85/0.93/0.98/1.00; VaR90=£30m; TVaR90=(80*0.05+150*0.02)/0.07=100 exactly. This uses TVaR = E[L | L &gt; VaR]. Under the expected-shortfall definition (the average of the worst 10% of outcomes, which takes 0.03 of probability from the &pound;30m outcome) the answer is (150&times;0.02 + 80&times;0.05 + 30&times;0.03)/0.10 = &pound;79m &mdash; with discrete distributions, state the definition you use. Full marks require correctly identifying the VaR threshold from the cumulative distribution and correctly computing the conditional tail average for TVaR.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the key difference between what VaR and TVaR each tell a risk manager about the loss distribution in part (i).",
          answer:
            "VaR only identifies the loss <em>threshold</em> itself (£30m) that is exceeded with 10% probability; it says nothing about how severe losses beyond that threshold might be. TVaR instead gives the <em>average</em> loss, given that the threshold is exceeded (£100m here), so it incorporates the severity of the tail beyond the threshold, providing materially more information about the potential scale of extreme losses than VaR alone.",
          note: "A strong answer explicitly contrasts VaR's threshold-only nature with TVaR's severity-incorporating nature, referencing the specific figures from part (i).",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 4,
          question:
            "Comment on why TVaR is generally considered a 'coherent' risk measure while VaR is not, and why VaR nonetheless remains widely used in regulatory capital calculations such as Solvency II's SCR.",
          answer:
            "A coherent risk measure satisfies monotonicity, subadditivity, positive homogeneity and translation invariance. TVaR satisfies all four, but VaR can fail subadditivity — the VaR of a combined portfolio can, in some cases, exceed the sum of its parts' individual VaRs, understating the true diversification benefit of combining risks. Despite this theoretical weakness, VaR remains widely used in regulatory practice because it is simpler to calculate, communicate and calibrate consistently across firms than TVaR, which requires modelling the full tail beyond the threshold rather than just the threshold itself; regulators have generally judged this practical advantage to outweigh VaR's theoretical subadditivity failure.",
          note: "Full marks require naming subadditivity as the specific axiom VaR can fail, and explaining the practicality-versus-theoretical-purity trade-off behind VaR's continued regulatory use.",
        },
      ],
    },
    {
      id: "sp9-q6",
      title: "Extreme value theory and stress testing",
      modules: "Modules 20, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define Extreme Value Theory (EVT), and explain its genuine purpose relative to fitting a single distribution across a whole dataset.",
          answer:
            "EVT is a branch of statistics specifically focused on modelling the behaviour of extreme, tail observations. Its purpose is to address the fact that a single distribution fitted to capture an entire dataset's typical, central behaviour may fit the tail poorly, whereas EVT-specific distributions are designed to fit tail behaviour more accurately, since the tail is what matters most for assessing extreme risk outcomes.",
          note: "Full marks require explaining <em>why</em> EVT exists (the whole-distribution fit's tail weakness), not just stating that EVT models tails.",
        },
        {
          label: "(ii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between stress testing and reverse stress testing.",
          answer:
            "Stress testing starts from a specified, predefined adverse scenario and calculates its impact on the organisation's financial position, without necessarily attaching a probability to that scenario. Reverse stress testing instead starts from a defined, severe <em>outcome</em> (such as the organisation's failure) and works backwards to identify what combination of circumstances could plausibly cause that outcome. Ordinary stress testing therefore proceeds scenario-to-outcome, while reverse stress testing proceeds outcome-to-scenario.",
          note: "A strong answer explicitly identifies the reversed direction of reasoning as the key distinction, not just that both relate to adverse scenarios.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 5,
          question:
            "Discuss why reverse stress testing may be particularly valuable for uncovering risk combinations that ordinary, forward-looking stress testing might miss.",
          answer:
            "Ordinary stress testing requires the risk manager to first imagine a plausible adverse scenario before testing it, so it can miss risk combinations that were never considered in the first place. Reverse stress testing's backwards approach can reveal surprising, previously unconsidered combinations of circumstances capable of causing a severe outcome, precisely because it works back from the defined outcome rather than requiring the scenario to be imagined upfront. This makes it a valuable complement to forward stress testing, helping surface unknown-unknowns that conventional scenario-imagination would likely never generate, though it can still be limited by the imagination and expertise of those conducting the exercise in working backwards from the outcome.",
          note: "A strong answer explains the specific mechanism by which reverse stress testing surfaces unanticipated combinations, and may note that it is not immune to its own judgement limitations.",
        },
      ],
    },
    {
      id: "sp9-q7",
      title: "Risk management tools and alternative risk transfer",
      modules: "Modules 26, 27, 28, 29",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the four Ts of risk response, giving a brief description of each.",
          answer:
            "Tolerate (accept the risk as within appetite, taking no further action); Treat (take action to reduce likelihood or impact, e.g. via controls or mitigation); Transfer (pass the risk to a third party, e.g. via insurance or reinsurance); Terminate (stop the activity giving rise to the risk entirely).",
          note: "Full marks require all four Ts with a correct, if brief, description of each.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 4,
          question:
            "Explain how a catastrophe bond transfers risk from the issuing insurer to bond investors, and explain the genuine basis risk that can arise from an index-based (parametric) trigger.",
          answer:
            "A catastrophe bond pays investors an attractive coupon in exchange for investors' capital being at risk: if a predefined catastrophic trigger event occurs, the bond's principal is reduced or forfeited, and the freed-up funds are used by the issuing insurer to cover its own catastrophe losses. Where the trigger is index-based (e.g. modelled industry-wide losses or a physical parameter such as wind speed) rather than based on the issuer's own actual losses, the issuer bears basis risk: the risk that the index-based payout may not precisely match its own actual loss experience, potentially leaving a shortfall (or windfall) relative to its real losses.",
          note: "Full marks require explaining the coupon-for-principal-at-risk mechanism <em>and</em> the specific index-versus-own-losses basis risk.",
        },
        {
          label: "(iii)",
          command: "Recommend",
          marks: 5,
          question:
            "An insurer faces frequent, modest-sized claims from a well-understood peril, and separately faces rare but potentially catastrophic losses from a large-scale natural catastrophe. Recommend, with justification, an appropriate risk management approach for each of these two exposures.",
          answer:
            "For the frequent, modest-sized, well-understood claims, retention (potentially via a deductible or excess) is likely appropriate: these losses are relatively predictable, and the insurer can typically absorb them from ongoing operations more cheaply than paying a risk-transfer premium loaded for the transferee's own costs and profit margin. For the rare but potentially catastrophic natural catastrophe exposure, transfer via reinsurance or alternative risk transfer (such as a catastrophe bond) is likely more appropriate: the insurer's own capacity to bear such a severe, low-frequency loss may be limited relative to its risk appetite and capacity, and catastrophe bonds in particular can access capital markets' substantially larger capacity than traditional reinsurance alone, at the cost of accepting some basis risk if an index-based trigger is used.",
          note: "A strong answer recommends different tools for the two exposures and justifies each recommendation by reference to the exposure's specific characteristics (frequency/severity, predictability, capacity), not a generic list of available tools.",
        },
      ],
    },
    {
      id: "sp9-q8",
      title: "Euler capital allocation",
      modules: "Module 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 6,
          question:
            "An organisation has two business units, A and B, with stand-alone economic capital of £60m and £20m respectively, and a correlation of 0.4 between their risks. Using the Euler allocation formula $C_i = \\dfrac{C_i^2 + \\rho C_A C_B}{C_{\\text{agg}}}$ (applied to each unit in turn, with $C_{\\text{agg}} = \\sqrt{C_A^2 + C_B^2 + 2 \\rho C_A C_B}$), calculate the aggregate capital requirement and the Euler-allocated capital for each business unit.",
          answer:
            "$C_{\\text{agg}} = \\sqrt{60^2 + 20^2 + 2 \\times 0.4 \\times 60 \\times 20} = \\sqrt{3600 + 400 + 960} = \\sqrt{4960} = £70.43m$ (to 2 decimal places). Euler allocation to A: $(60^2 + 0.4 \\times 60 \\times 20) / 70.43 = (3600 + 480) / 70.43 = 4080 / 70.43 = £57.93m$. Euler allocation to B: $(20^2 + 0.4 \\times 60 \\times 20) / 70.43 = (400 + 480) / 70.43 = 880 / 70.43 = £12.50m$. As a check, £57.93m + £12.50m = £70.43m, matching the aggregate capital requirement exactly.",
          note: "Arithmetic check: sqrt(3600+400+960)=70.4273; Euler A=57.93, Euler B=12.50, sum=70.43 (full allocation property holds exactly). Full marks require both individual allocations <em>and</em> the confirming check that they sum to the aggregate figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the two Euler allocations calculated in part (i) sum exactly to the aggregate capital requirement, with no residual left over.",
          answer:
            "This 'full allocation' property arises because the Euler principle allocates capital according to each unit's marginal contribution to the aggregate risk measure, and for risk measures that are positively homogeneous of degree one (such as the square-root formula used here), the sum of these marginal contributions is mathematically guaranteed to equal the total. This is a genuine mathematical property of Euler's homogeneous function theorem applied to the aggregate capital formula, not a coincidence specific to these particular numbers.",
          note: "A strong answer references the positive homogeneity property and explains that full allocation is guaranteed generally, not just verified for this specific example.",
        },
        {
          label: "(iii)",
          command: "Comment",
          marks: 3,
          question:
            "Comment on a genuine practical difficulty an organisation might face in applying the Euler allocation approach used in part (i) across many more than two business units.",
          answer:
            "Calculating each unit's genuine marginal contribution requires a fully specified, granular aggregate risk model capturing how every business unit's risk correlates with every other unit, not just a single pairwise correlation as used in this simplified two-unit example. With many business units, this requires estimating a large correlation (or copula) structure, which inherits all the data scarcity, correlation-estimation and computational challenges of aggregate risk modelling more broadly, making the Euler principle's elegant formula considerably harder to apply reliably in practice than this stylised example suggests.",
          note: "A strong answer connects the difficulty specifically to the scaling burden of estimating a full correlation/dependence structure across many units, not just a generic 'it's complicated' comment.",
        },
      ],
    },
    {
      id: "sp9-q9",
      title: "RAROC and Economic Value Added",
      modules: "Modules 26, 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A business unit generates a risk-adjusted return of £8m for the year, and has been allocated economic capital of £50m. The organisation's cost of capital rate is 10% per annum. Calculate the business unit's RAROC and its Economic Value Added (EVA) for the year.",
          answer:
            "RAROC = risk-adjusted return / economic capital allocated = £8m / £50m = 16%. EVA = return &minus; (cost of capital rate &times; economic capital allocated) = £8m &minus; (0.10 &times; £50m) = £8m &minus; £5m = £3m.",
          note: "Arithmetic check: 8/50=0.16 (16%); 8-0.10*50=3. Full marks require both RAROC and EVA correctly calculated, with EVA expressed as a monetary amount and RAROC as a percentage.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why RAROC provides a fairer basis for comparing business units' performance than a simple, unadjusted return on capital.",
          answer:
            "RAROC divides a business unit's return by the economic capital allocated to it, which reflects the genuine risk taken on to generate that return. A simple, unadjusted return figure would allow a unit generating high returns purely by taking on disproportionate risk to appear more attractive than it is; RAROC appropriately penalises such a unit through its correspondingly higher allocated capital in the denominator, giving a risk-adjusted, and therefore fairer, basis for comparison.",
          note: "A strong answer explicitly explains the risk-penalisation mechanism via the capital denominator, not just states that RAROC is 'risk-adjusted' without explaining how.",
        },
        {
          label: "(iii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between RAROC and EVA as performance measures, and explain how they could give different rankings when comparing a small business unit against a much larger one.",
          answer:
            "RAROC produces a ratio (a percentage return figure), while EVA produces a monetary amount, measuring the genuine value created above and beyond the cost of capital. A small business unit could have a high RAROC percentage (a high return relative to its own, small allocated capital) while creating relatively little absolute value in monetary terms, whereas a much larger unit with a lower RAROC percentage could still generate a substantially larger EVA, since its much bigger capital base means even a modest percentage return translates into a larger absolute monetary surplus above the cost of capital. The two measures can therefore rank business units differently, and using RAROC alone risks understating the genuine value created by larger units.",
          note: "Full marks require the ratio-versus-absolute-amount distinction <em>and</em> a genuine worked-through explanation of why rankings can differ (small-high-percentage versus large-lower-percentage-but-bigger-absolute-value), not just an assertion that they can differ.",
        },
      ],
    },
    {
      id: "sp9-q10",
      title: "Solvency II, ORSA and the regulatory landscape for ERM",
      modules: "Modules 5, 6",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 4,
          question:
            "Explain the three-pillar structure of the Solvency II regulatory regime.",
          answer:
            "Pillar 1 sets quantitative capital requirements, such as the Solvency Capital Requirement (SCR), calculated either via a standard formula or an approved internal model. Pillar 2 sets governance and risk management requirements, including the Own Risk and Solvency Assessment (ORSA) and requirements around the effectiveness of the risk management system more broadly. Pillar 3 sets disclosure and reporting requirements, requiring insurers to report information to regulators and, in part, to the wider market.",
          note: "Full marks require correctly naming and describing all three pillars, not just naming them.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 4,
          question:
            "Explain what the ORSA is, and explain how it embodies the 'use test' principle.",
          answer:
            "The ORSA is a regular, forward-looking internal assessment an insurer must conduct of its own overall solvency needs, considering its own specific risk profile rather than relying purely on a generic regulatory formula's calibration. It embodies the use test because it explicitly requires the organisation to use its own risk assessment and models in a real governance process — feeding into actual business planning and decision-making — rather than treating regulatory capital as a purely mechanical, compliance-only calculation divorced from how the business is actually run.",
          note: "A strong answer explicitly draws the connection to the use test, not just describes the ORSA in isolation.",
        },
        {
          label: "(iii)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between the Solvency II and Basel regulatory frameworks, noting both their structural similarity and a key difference in what each is calibrated to address.",
          answer:
            "Solvency II (for insurers) and Basel (for banks) share a broadly similar three-pillar structure: quantitative capital requirements, supervisory review of governance and risk management, and market discipline through disclosure. However, each is calibrated to its own sector's distinct risk profile: Solvency II is calibrated to insurance-specific risks such as long-term underwriting and reserving risk, while Basel is calibrated to banking-specific risks such as credit risk from loan portfolios and short-term liquidity risk arising from deposit withdrawals.",
          note: "Full marks require identifying both the shared three-pillar architecture <em>and</em> the sector-specific calibration difference, not just naming the two frameworks.",
        },
      ],
    },
  ],
});

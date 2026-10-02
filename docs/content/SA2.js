// SA2 Life Insurance: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SA2", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction to Subject SA2",
          "description": "ActEd's Chapter 0: SA2's aims, its four syllabus topics and weightings, the UK context of the Core Reading, and how SA2 builds on SP2 towards advising on complex life insurance problems.",
          "cards": [
              {
                  "q": "What are SA2's four syllabus topics?",
                  "a": "Products and business environment (20%); regulatory, legislative and taxation environment (25%); reporting and management of capital and profit (25%); business management (30%).",
                  "explain": "Business management is largest."
              },
              {
                  "q": "How does SA2 differ from SP2?",
                  "a": "SA2 applies principles to complex, practical problems in a specific (mainly UK) environment, requiring recommendations.",
                  "explain": "Application."
              },
              {
                  "q": "What jurisdiction does SA2 focus on?",
                  "a": "Primarily the UK, with comparisons to other jurisdictions (syllabus 2.5, 3.1.2, 3.3.2).",
                  "explain": "Know UK rules."
              },
              {
                  "q": "What skills does SA2 test?",
                  "a": "Analysing complex problems, integrating factors, evaluating critically, proposing solutions.",
                  "explain": "Higher-order."
              },
              {
                  "q": "Why is regulation heavily weighted?",
                  "a": "Life insurance is highly regulated; regulation drives capital, products and conduct.",
                  "explain": "25%."
              },
              {
                  "q": "What is the Core Reading date for 2025 exams?",
                  "a": "31 May 2024.",
                  "explain": "Later changes not required."
              },
              {
                  "q": "What are typical SA2 exam scenarios?",
                  "a": "Product launches, capital actions, with-profits management, M&A, closed funds, regulatory changes.",
                  "explain": "Strategic."
              },
              {
                  "q": "Why must SA2 answers consider stakeholders?",
                  "a": "Policyholders, shareholders, regulators, distributors and staff are affected differently.",
                  "explain": "Balance."
              },
              {
                  "q": "What role does Solvency UK play?",
                  "a": "Framework for capital and governance of UK insurers post-Brexit (reformed Solvency II).",
                  "explain": "Chapters 9–10."
              },
              {
                  "q": "What is the role of the Consumer Duty?",
                  "a": "FCA rules requiring good customer outcomes.",
                  "explain": "Chapter 12."
              },
              {
                  "q": "Why are with-profits chapters significant?",
                  "a": "Legacy with-profits business remains material in UK insurers.",
                  "explain": "Chapters 18–20."
              },
              {
                  "q": "What is the link between capital and profit?",
                  "a": "Profit emerges from releasing capital and margins; capital constrains growth.",
                  "explain": "Topic 3."
              },
              {
                  "q": "How should SA2 answers be structured?",
                  "a": "Identify issues, analyse with frameworks, recommend with justification.",
                  "explain": "Chapter 23."
              },
              {
                  "q": "What is the importance of UK tax in SA2?",
                  "a": "Tax affects product design and profitability.",
                  "explain": "Chapters 6–7."
              },
              {
                  "q": "Why know other jurisdictions?",
                  "a": "Syllabus asks for comparisons of regimes.",
                  "explain": "Principles."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Life insurance products (1)",
          "description": "Protection and flexible products: individual and group term assurance, income protection, critical illness and universal life — benefits, features, purpose, and key risks to policyholder and insurer.",
          "cards": [
              {
                  "q": "What is group life insurance?",
                  "a": "Employer-arranged death-in-service cover, typically a multiple of salary, often via trust with free cover limits.",
                  "explain": "Annually renewable, experience-rated."
              },
              {
                  "q": "What is income protection?",
                  "a": "Regular income during incapacity after a deferred period.",
                  "explain": "Morbidity risk."
              },
              {
                  "q": "What is critical illness insurance?",
                  "a": "Lump sum on diagnosis of specified conditions.",
                  "explain": "Definitional risk."
              },
              {
                  "q": "What is universal life?",
                  "a": "Flexible-premium policy with an account value credited with interest, from which cost of insurance and charges are deducted.",
                  "explain": "US-style."
              },
              {
                  "q": "What are key insurer risks on level-premium term?",
                  "a": "Mortality/anti-selection, lapse (esp. selective), reviewable vs guaranteed rates.",
                  "explain": "Reinsurance common."
              },
              {
                  "q": "What are key policyholder risks on protection?",
                  "a": "Claim not meeting definitions, premium increases, lapsing when cover needed.",
                  "explain": "Communication."
              },
              {
                  "q": "Why might term cover be reviewable?",
                  "a": "Transfers trend risk to policyholders, reducing price.",
                  "explain": "Conduct scrutiny."
              },
              {
                  "q": "What is a relevant life policy?",
                  "a": "Employer-paid individual death-in-service cover for an employee, outside the pension regime.",
                  "explain": "Tax efficiency."
              },
              {
                  "q": "What are group IP features?",
                  "a": "Benefit % of salary after deferred period, rehabilitation services, rate guarantees.",
                  "explain": "Employer benefit."
              },
              {
                  "q": "What is the insurer's risk in universal life?",
                  "a": "Interest guarantees, cost of insurance changes, persistency.",
                  "explain": "Guarantees."
              },
              {
                  "q": "How do protection products use reinsurance?",
                  "a": "Heavy reinsurance (often quota share/risk premium) for capacity and expertise.",
                  "explain": "UK market."
              },
              {
                  "q": "What is the purpose of protection products for insurers?",
                  "a": "Profitable, capital-light business diversifying longevity exposure.",
                  "explain": "Natural hedge."
              },
              {
                  "q": "What drives protection pricing competition?",
                  "a": "Aggregators and advisers, commission levels.",
                  "explain": "Price-sensitive."
              },
              {
                  "q": "What is family income benefit?",
                  "a": "Decreasing term paying income until term end.",
                  "explain": "Income replacement."
              },
              {
                  "q": "What are key risks on CI to the insurer?",
                  "a": "Medical advances increasing claims, definitional changes.",
                  "explain": "Trend risk."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Life insurance products (2)",
          "description": "Savings, retirement and specialist products: endowments, investment bonds, individual and group pensions, annuities and income drawdown, wraps, variable annuities, equity release, Takaful and microinsurance — features, purpose and key risks.",
          "cards": [
              {
                  "q": "What is an investment bond?",
                  "a": "Single-premium unit-linked (or with-profits) life policy for investment, with small death benefit.",
                  "explain": "UK tax wrapper."
              },
              {
                  "q": "What are individual and group pension products?",
                  "a": "Personal pensions, group personal pensions, SIPPs, workplace DC schemes (master trusts).",
                  "explain": "Tax-advantaged."
              },
              {
                  "q": "What is income drawdown?",
                  "a": "Drawing income from an invested pension fund.",
                  "explain": "Member bears risk."
              },
              {
                  "q": "What is a wrap/platform?",
                  "a": "An administration service holding a range of investments and tax wrappers in one account.",
                  "explain": "Charges and flexibility."
              },
              {
                  "q": "What is a variable annuity?",
                  "a": "Unit-linked product with guarantees (e.g. GMDB, GMAB, GMIB, GMWB).",
                  "explain": "Hedging needed."
              },
              {
                  "q": "What is a GMWB?",
                  "a": "Guaranteed minimum withdrawal benefit — guaranteed withdrawals regardless of fund performance.",
                  "explain": "Longevity and market risk."
              },
              {
                  "q": "What is equity release?",
                  "a": "Products releasing home equity, mainly lifetime mortgages repaid on death or care entry.",
                  "explain": "Long-term assets for annuity backing."
              },
              {
                  "q": "What is the no-negative-equity guarantee?",
                  "a": "Borrower never owes more than the house value.",
                  "explain": "Put option on property."
              },
              {
                  "q": "What is Takaful?",
                  "a": "Sharia-compliant cooperative insurance where participants contribute to a fund managed by an operator.",
                  "explain": "Wakala, mudaraba models."
              },
              {
                  "q": "What is microinsurance?",
                  "a": "Low-cost insurance for low-income populations, with simple products and distribution.",
                  "explain": "Financial inclusion."
              },
              {
                  "q": "What are bulk annuities?",
                  "a": "Buy-ins and buy-outs of pension scheme liabilities.",
                  "explain": "Major UK market."
              },
              {
                  "q": "What is the insurer's risk on annuities?",
                  "a": "Longevity, credit, reinvestment, expenses.",
                  "explain": "Matching adjustment."
              },
              {
                  "q": "What is an enhanced annuity?",
                  "a": "Higher payments for impaired lives, underwritten.",
                  "explain": "Selection."
              },
              {
                  "q": "What risks do equity release products bring?",
                  "a": "NNEG (property risk), longevity, prepayment, interest rate.",
                  "explain": "Valuation."
              },
              {
                  "q": "Why do insurers value wraps/platforms?",
                  "a": "Fee income and customer relationships.",
                  "explain": "Scale economics."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Life insurance bases",
          "description": "The product bases — conventional with-profits, accumulating (unitised) with-profits, unit-linked and index-linked — their key features, purpose and key risks to policyholders and insurers.",
          "cards": [
              {
                  "q": "What is conventional with-profits?",
                  "a": "Guaranteed sum assured plus reversionary and terminal bonuses.",
                  "explain": "Smoothing and discretion."
              },
              {
                  "q": "What is accumulating with-profits?",
                  "a": "Units growing with regular bonus rates, terminal bonus, MVR on exit.",
                  "explain": "Unitised."
              },
              {
                  "q": "What is unit-linked?",
                  "a": "Benefits linked to unit fund values; policyholder bears investment risk.",
                  "explain": "Charges."
              },
              {
                  "q": "What is index-linked?",
                  "a": "Benefits linked to an index (e.g. RPI annuities or equity index bonds).",
                  "explain": "Hedging."
              },
              {
                  "q": "What are the policyholder risks of with-profits?",
                  "a": "Discretion, bonus cuts, MVRs, opacity.",
                  "explain": "PPFM."
              },
              {
                  "q": "What are the insurer risks of with-profits?",
                  "a": "Guarantees biting, estate depletion, PRE compliance.",
                  "explain": "Capital."
              },
              {
                  "q": "What are the policyholder risks of unit-linked?",
                  "a": "Investment risk, charges.",
                  "explain": "Transparency."
              },
              {
                  "q": "What are the insurer risks of unit-linked?",
                  "a": "Expense, persistency, unit pricing, guarantees if any.",
                  "explain": "Operational."
              },
              {
                  "q": "Why have with-profits sales declined?",
                  "a": "Low interest rates, opacity, capital intensity, regulatory scrutiny.",
                  "explain": "Legacy books."
              },
              {
                  "q": "What is an MVR?",
                  "a": "Market value reduction on surrender of accumulating with-profits.",
                  "explain": "Protects remaining."
              },
              {
                  "q": "What is smoothing?",
                  "a": "Limiting payout volatility relative to asset shares.",
                  "explain": "Estate supports."
              },
              {
                  "q": "What is the purpose of index-linked annuities?",
                  "a": "Protection against inflation.",
                  "explain": "Matched with index-linked gilts."
              },
              {
                  "q": "How does the basis affect capital?",
                  "a": "Guaranteed bases need more capital.",
                  "explain": "Solvency."
              },
              {
                  "q": "What is a hybrid basis?",
                  "a": "Unit-linked with guarantees.",
                  "explain": "Variable annuities."
              },
              {
                  "q": "How is PRE relevant to bases?",
                  "a": "Governs with-profits discretion.",
                  "explain": "Regulation."
              }
          ]
      },
      {
          "id": "m05",
          "title": "General business environment",
          "description": "The business environment for UK life insurers: competition and new business, distribution, outsourcing, corporate finance (M&A, closed funds, consolidators), climate change, pandemics and data science, and their effect on managing life business.",
          "cards": [
              {
                  "q": "How does competition affect life insurers?",
                  "a": "Price pressure, product innovation, margins.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What distribution channels are used?",
                  "a": "IFAs, restricted advisers, direct/digital, workplace, bancassurance, platforms.",
                  "explain": "RDR banned commission on advised investments."
              },
              {
                  "q": "What was the Retail Distribution Review?",
                  "a": "UK reform (2013) banning commission on advised investment products and raising adviser standards.",
                  "explain": "Fee-based advice."
              },
              {
                  "q": "Why do insurers outsource?",
                  "a": "Cost reduction, expertise, scalability (administration, IT, investment).",
                  "explain": "Oversight still needed."
              },
              {
                  "q": "What are risks of outsourcing?",
                  "a": "Service failure, data protection, concentration, loss of control.",
                  "explain": "Regulatory expectations."
              },
              {
                  "q": "What are closed funds?",
                  "a": "Blocks of business no longer writing new policies.",
                  "explain": "Run-off."
              },
              {
                  "q": "What are consolidators?",
                  "a": "Firms acquiring closed books to achieve scale efficiencies.",
                  "explain": "E.g. heritage books."
              },
              {
                  "q": "How do M&A affect life insurers?",
                  "a": "Part VII transfers, integration, capital synergies.",
                  "explain": "Corporate finance."
              },
              {
                  "q": "How does climate change affect life insurers?",
                  "a": "Investment transition risk, mortality changes, disclosure requirements.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "How did COVID-19 affect life insurers?",
                  "a": "Excess mortality, market volatility, operational disruption, uncertainty in longevity assumptions.",
                  "explain": "Pandemic."
              },
              {
                  "q": "How is data science used?",
                  "a": "Underwriting, pricing, retention, fraud detection, customer insights.",
                  "explain": "Ethics and regulation."
              },
              {
                  "q": "What are new business considerations?",
                  "a": "Profitability, capital strain, strategic fit, distribution.",
                  "explain": "Growth."
              },
              {
                  "q": "What is the bulk annuity market's driver?",
                  "a": "DB pension schemes de-risking.",
                  "explain": "Growth area."
              },
              {
                  "q": "How do interest rates affect the business?",
                  "a": "Guarantees costs, annuity pricing, demand for savings.",
                  "explain": "Economic."
              },
              {
                  "q": "How does technology change distribution?",
                  "a": "Digital sales, robo-advice, platforms.",
                  "explain": "Disruption."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Legislation",
          "description": "Legislation relevant to UK life insurance: consumer protection (contract law, misrepresentation, cancellation rights, ombudsman and compensation schemes), equality legislation (gender-neutral pricing, disability), and data protection regulation (UK GDPR).",
          "cards": [
              {
                  "q": "What consumer protection applies to life insurance?",
                  "a": "Insurance Act/CIDRA disclosure rules, cancellation rights, Financial Ombudsman Service, FSCS.",
                  "explain": "Syllabus 2.1."
              },
              {
                  "q": "What is CIDRA?",
                  "a": "Consumer Insurance (Disclosure and Representations) Act 2012 — consumers must take reasonable care not to misrepresent; remedies proportionate.",
                  "explain": "Replaced strict disclosure duty."
              },
              {
                  "q": "What does the FSCS cover for life insurance?",
                  "a": "100% of claims for long-term insurance if insurer fails.",
                  "explain": "Protection."
              },
              {
                  "q": "What is the Financial Ombudsman Service?",
                  "a": "Free dispute resolution for consumers.",
                  "explain": "Binding on firms."
              },
              {
                  "q": "How does equality legislation affect pricing?",
                  "a": "Gender-neutral pricing required since 2012 (Test-Achats); disability considerations.",
                  "explain": "Syllabus 2.1."
              },
              {
                  "q": "What is the effect of gender-neutral pricing?",
                  "a": "Unisex rates; mix risk if sales skew by gender.",
                  "explain": "Pricing risk."
              },
              {
                  "q": "How does UK GDPR affect insurers?",
                  "a": "Rules on processing personal and health data, consent, rights of individuals.",
                  "explain": "Data regulations."
              },
              {
                  "q": "What is special category data?",
                  "a": "Sensitive data like health information requiring extra protection.",
                  "explain": "Underwriting."
              },
              {
                  "q": "How can genetic testing be regulated?",
                  "a": "Code on Genetic Testing restricts insurers' use of predictive tests.",
                  "explain": "UK code."
              },
              {
                  "q": "What is a cooling-off period?",
                  "a": "Right to cancel within a period (e.g. 30 days) after purchase.",
                  "explain": "Consumer protection."
              },
              {
                  "q": "How does legislation affect claims?",
                  "a": "Proportionate remedies for misrepresentation.",
                  "explain": "CIDRA."
              },
              {
                  "q": "What is data subject access?",
                  "a": "Right of individuals to see their data.",
                  "explain": "GDPR."
              },
              {
                  "q": "How do trusts interact with life policies?",
                  "a": "Policies written in trust avoid probate and IHT.",
                  "explain": "Legal structure."
              },
              {
                  "q": "Why comply with legislation proactively?",
                  "a": "Avoid fines, redress and reputational damage.",
                  "explain": "Risk management."
              },
              {
                  "q": "What legislation governs unfair terms?",
                  "a": "Consumer Rights Act 2015.",
                  "explain": "Fairness."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Taxation (1)",
          "description": "General principles of life insurance taxation from the perspectives of government, policyholders and insurers: the aims of taxing savings, tax treatment of premiums, benefits and funds, and how tax shapes product design and consumer behaviour.",
          "cards": [
              {
                  "q": "What are the government's objectives in taxing life insurance?",
                  "a": "Raise revenue, encourage saving and protection, fairness between savings vehicles, prevent avoidance.",
                  "explain": "Syllabus 2.2."
              },
              {
                  "q": "How can tax encourage pension saving?",
                  "a": "Relief on contributions, tax-free growth, tax-free lump sum.",
                  "explain": "EET."
              },
              {
                  "q": "How are UK investment bonds taxed for policyholders?",
                  "a": "Chargeable event gains taxed as income, with a basic-rate credit for onshore bonds and top-slicing relief.",
                  "explain": "Deferral."
              },
              {
                  "q": "What is top-slicing relief?",
                  "a": "Spreading a chargeable gain over the years held to determine the rate band.",
                  "explain": "Reduces higher-rate tax."
              },
              {
                  "q": "What is the 5% withdrawal allowance?",
                  "a": "Policyholders can withdraw up to 5% of premiums per year tax-deferred.",
                  "explain": "Investment bonds."
              },
              {
                  "q": "How are protection benefits taxed?",
                  "a": "Generally tax-free lump sums; policies in trust avoid IHT.",
                  "explain": "Individual IP benefits tax-free."
              },
              {
                  "q": "How do offshore bonds differ?",
                  "a": "Gross roll-up without insurer tax; full income tax on gains.",
                  "explain": "No basic-rate credit."
              },
              {
                  "q": "How does tax affect product design?",
                  "a": "Products structured to fit favourable tax treatments.",
                  "explain": "Tax-driven."
              },
              {
                  "q": "What is tax neutrality?",
                  "a": "Tax not distorting choices between savings vehicles.",
                  "explain": "Policy aim."
              },
              {
                  "q": "How are pension annuities taxed?",
                  "a": "As income.",
                  "explain": "PAYE."
              },
              {
                  "q": "How are purchased life annuities taxed?",
                  "a": "Only the interest element is taxed.",
                  "explain": "Capital element exempt."
              },
              {
                  "q": "What is the policyholder perspective on tax?",
                  "a": "After-tax return and flexibility matter.",
                  "explain": "Behaviour."
              },
              {
                  "q": "How can tax change risk affect insurers?",
                  "a": "Products become uncompetitive, in-force profits change.",
                  "explain": "Risk."
              },
              {
                  "q": "Why might tax differ between onshore and offshore?",
                  "a": "Different fund taxation.",
                  "explain": "Competition."
              },
              {
                  "q": "How do ISAs compete with bonds?",
                  "a": "Tax-free returns, simple, limited allowance.",
                  "explain": "Alternatives."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Taxation (2)",
          "description": "Taxation of UK life insurance companies: the I−E basis for basic life assurance and general annuity business (BLAGAB), trading profits basis, policyholder and shareholder tax, deferred tax and its effect on pricing, reserving and profitability.",
          "cards": [
              {
                  "q": "What is the I−E basis?",
                  "a": "Taxing investment income and gains less expenses on BLAGAB, representing policyholder tax.",
                  "explain": "UK specific."
              },
              {
                  "q": "What is BLAGAB?",
                  "a": "Basic life assurance and general annuity business — mainly non-pension life business.",
                  "explain": "I−E applies."
              },
              {
                  "q": "How is pensions business taxed in the insurer?",
                  "a": "Gross roll-up: no tax on policyholder returns.",
                  "explain": "Trading profits for shareholders."
              },
              {
                  "q": "What is the minimum profits test?",
                  "a": "Ensures I−E tax is at least equal to tax on trading profits of BLAGAB.",
                  "explain": "Anti-avoidance."
              },
              {
                  "q": "What is the policyholder rate of tax?",
                  "a": "Basic rate (20%) on BLAGAB policyholder income/gains.",
                  "explain": "Credited on bond gains."
              },
              {
                  "q": "How is shareholder profit taxed?",
                  "a": "Corporation tax on trading profits.",
                  "explain": "Shareholder share."
              },
              {
                  "q": "How does tax affect pricing?",
                  "a": "Tax on investment returns reduces net yields in BLAGAB pricing.",
                  "explain": "Assumptions."
              },
              {
                  "q": "What is excess expenses (XSE)?",
                  "a": "Expenses exceeding income under I−E carried forward.",
                  "explain": "Tax asset."
              },
              {
                  "q": "What is deferred tax?",
                  "a": "Tax on timing differences between accounting and tax profits.",
                  "explain": "Balance sheet."
              },
              {
                  "q": "How does tax affect with-profits funds?",
                  "a": "Tax charged to the fund affects asset shares.",
                  "explain": "Allocation."
              },
              {
                  "q": "What is the effect of IFRS 17 on tax?",
                  "a": "Transition adjustments spread for tax.",
                  "explain": "Implementation."
              },
              {
                  "q": "How does tax treatment affect reserving?",
                  "a": "Tax on future profits reflected in reserves/EV.",
                  "explain": "Assumptions."
              },
              {
                  "q": "What is the role of the actuary in tax?",
                  "a": "Estimating tax on projections, allocating to funds.",
                  "explain": "Modelling."
              },
              {
                  "q": "How can tax changes affect in-force business?",
                  "a": "Changes in rates alter future profits.",
                  "explain": "EV sensitivity."
              },
              {
                  "q": "How does tax vary between jurisdictions?",
                  "a": "Some tax only shareholders; others policyholders.",
                  "explain": "Comparison."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Regulatory environment",
          "description": "UK regulatory framework for life insurers: PRA and FCA objectives, rulebooks and supervisory tools, reporting requirements, statutory actuarial roles (chief actuary, with-profits actuary), Part VII transfers, comparison with other jurisdictions, and practical effects on business.",
          "cards": [
              {
                  "q": "What are the PRA's objectives for insurers?",
                  "a": "Safety and soundness of firms; appropriate protection for policyholders; secondary competitiveness and growth objectives.",
                  "explain": "Prudential."
              },
              {
                  "q": "What are the FCA's objectives?",
                  "a": "Consumer protection, market integrity, competition.",
                  "explain": "Conduct."
              },
              {
                  "q": "What supervisory tools do regulators use?",
                  "a": "Rulebooks, supervisory statements, reporting, stress tests, skilled person reviews, enforcement.",
                  "explain": "Syllabus 2.3."
              },
              {
                  "q": "What is the chief actuary role?",
                  "a": "Senior Management Function (SMF20) responsible for actuarial function advice.",
                  "explain": "Statutory role."
              },
              {
                  "q": "What is the with-profits actuary?",
                  "a": "Advises on the fair treatment of with-profits policyholders and exercise of discretion.",
                  "explain": "SMF20a."
              },
              {
                  "q": "What is a Part VII transfer?",
                  "a": "Court-approved transfer of insurance business between firms, with an independent expert report.",
                  "explain": "Liability transfers."
              },
              {
                  "q": "What does the independent expert assess?",
                  "a": "Whether policyholders' security and benefit expectations are adversely affected.",
                  "explain": "Report to court."
              },
              {
                  "q": "What is the Senior Managers & Certification Regime?",
                  "a": "Accountability framework assigning responsibilities to senior individuals.",
                  "explain": "SM&CR."
              },
              {
                  "q": "What reporting is required?",
                  "a": "QRTs, SFCR, RSR, ORSA reports.",
                  "explain": "Solvency UK."
              },
              {
                  "q": "How do regulators compare across jurisdictions?",
                  "a": "Risk-based (Solvency II/UK), rules-based (e.g. US statutory RBC), principles vs prescription.",
                  "explain": "Syllabus 2.5."
              },
              {
                  "q": "What is US RBC?",
                  "a": "Risk-based capital formula from statutory accounts.",
                  "explain": "Comparison."
              },
              {
                  "q": "How does regulation affect business in practice?",
                  "a": "Capital requirements shape products; conduct rules shape sales and servicing.",
                  "explain": "Syllabus 2.6."
              },
              {
                  "q": "What is a skilled person review?",
                  "a": "Regulator-commissioned independent review of an issue.",
                  "explain": "Supervisory tool."
              },
              {
                  "q": "What are PRA stress tests?",
                  "a": "Insurance stress tests (e.g. LIST) assessing resilience.",
                  "explain": "Industry-wide."
              },
              {
                  "q": "What is the Bermuda regime used for?",
                  "a": "Reinsurance of UK annuities; regulatory arbitrage concerns.",
                  "explain": "Funded re."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Solvency assessment (1)",
          "description": "The Solvency II / Solvency UK framework: background and scope, the three-pillar structure, Pillar 2 governance (system of governance, key functions, ORSA, prudent person principle), Pillar 3 disclosure and reporting, group supervision, and impact on culture and strategy.",
          "cards": [
              {
                  "q": "What is the background of Solvency II?",
                  "a": "EU risk-based regime from 2016 replacing Solvency I; UK version reformed as Solvency UK.",
                  "explain": "Harmonisation."
              },
              {
                  "q": "What are the three pillars?",
                  "a": "Quantitative requirements; governance and supervisory review; disclosure.",
                  "explain": "Structure."
              },
              {
                  "q": "What are the key functions under Pillar 2?",
                  "a": "Risk management, compliance, internal audit, actuarial.",
                  "explain": "Governance."
              },
              {
                  "q": "What is the ORSA?",
                  "a": "Own Risk and Solvency Assessment of risks and capital over the business plan.",
                  "explain": "Forward-looking."
              },
              {
                  "q": "What is the prudent person principle?",
                  "a": "Invest only in assets whose risks can be properly identified, measured and managed.",
                  "explain": "Investment."
              },
              {
                  "q": "What are Pillar 3 reports?",
                  "a": "SFCR (public), RSR (private), QRTs.",
                  "explain": "Transparency."
              },
              {
                  "q": "What is group supervision?",
                  "a": "Solvency assessment of insurance groups, including group SCR and governance.",
                  "explain": "Consolidation."
              },
              {
                  "q": "How did Solvency II change culture?",
                  "a": "Risk-based decision-making, use test, stronger governance.",
                  "explain": "Strategy."
              },
              {
                  "q": "What is the use test?",
                  "a": "Internal model must be used in decision-making.",
                  "explain": "Embedding."
              },
              {
                  "q": "What are fit and proper requirements?",
                  "a": "Key persons must be competent and honest.",
                  "explain": "Governance."
              },
              {
                  "q": "What is the system of governance?",
                  "a": "Structures, policies and controls ensuring sound management.",
                  "explain": "Pillar 2."
              },
              {
                  "q": "How did Solvency UK reform reporting?",
                  "a": "Reduced some reporting burdens.",
                  "explain": "Reforms."
              },
              {
                  "q": "What is the scope of Solvency II?",
                  "a": "Insurers and reinsurers above size thresholds.",
                  "explain": "Exemptions small firms."
              },
              {
                  "q": "How does Solvency II affect strategy?",
                  "a": "Capital-efficient products, reinsurance, asset choice.",
                  "explain": "Behaviour."
              },
              {
                  "q": "What is supervisory review process?",
                  "a": "Regulator evaluation of risk, governance and capital.",
                  "explain": "Pillar 2."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Solvency assessment (2)",
          "description": "Solvency II / UK valuation and capital: market-consistent valuation of assets and liabilities, best estimate liabilities and risk margin, matching and volatility adjustments, transitional measures, SCR by standard formula or internal model, MCR, own funds, and solvency approaches in other jurisdictions.",
          "cards": [
              {
                  "q": "How are assets valued under Solvency II?",
                  "a": "At market value (fair value).",
                  "explain": "Market-consistent."
              },
              {
                  "q": "What are technical provisions?",
                  "a": "Best estimate liability plus risk margin.",
                  "explain": "Liabilities."
              },
              {
                  "q": "What is the best estimate liability?",
                  "a": "Probability-weighted present value of future cash flows using the risk-free curve.",
                  "explain": "No prudence."
              },
              {
                  "q": "What is the risk margin?",
                  "a": "Cost of capital for non-hedgeable risks; reduced by Solvency UK reforms.",
                  "explain": "Transfer value."
              },
              {
                  "q": "What is the matching adjustment?",
                  "a": "An addition to the discount rate for liabilities matched by eligible fixed cash flow assets held to maturity.",
                  "explain": "Annuities."
              },
              {
                  "q": "What is the volatility adjustment?",
                  "a": "An addition to the discount rate reflecting spread movements.",
                  "explain": "Less used in UK."
              },
              {
                  "q": "What is TMTP?",
                  "a": "Transitional measure on technical provisions smoothing the move from Solvency I.",
                  "explain": "Runs off to 2032."
              },
              {
                  "q": "How is the SCR calculated?",
                  "a": "Standard formula (modular stresses and correlations) or approved internal model, at 99.5% one-year VaR.",
                  "explain": "Capital."
              },
              {
                  "q": "What is the MCR?",
                  "a": "Minimum capital requirement, ultimate intervention point.",
                  "explain": "Lower."
              },
              {
                  "q": "What are own funds?",
                  "a": "Capital resources, tiered by quality.",
                  "explain": "Tier 1–3."
              },
              {
                  "q": "What is the solvency ratio?",
                  "a": "Own funds / SCR.",
                  "explain": "Key metric."
              },
              {
                  "q": "How do other jurisdictions assess solvency?",
                  "a": "US RBC, Bermuda BSCR, ICS globally, Asian regimes.",
                  "explain": "Syllabus 3.1.2."
              },
              {
                  "q": "What is the fundamental spread?",
                  "a": "Deduction from asset spread for default and downgrade risk in MA.",
                  "explain": "PRA-prescribed."
              },
              {
                  "q": "What is the effect of MA on annuity business?",
                  "a": "Reduces BEL significantly, releasing capital.",
                  "explain": "Business model."
              },
              {
                  "q": "What is a contract boundary?",
                  "a": "Limits future premiums/cash flows recognised.",
                  "explain": "Valuation."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Professional standards and guidance",
          "description": "Actuarial standards for actuaries in or advising UK life insurers: the Actuaries' Code, FRC TAS 100 and TAS 200, IFoA APS (including those for with-profits and chief actuaries), and their practical effect on actuarial work and communication.",
          "cards": [
              {
                  "q": "What is TAS 100?",
                  "a": "Generic technical actuarial standard covering judgement, data, assumptions, models and communication.",
                  "explain": "All work."
              },
              {
                  "q": "What is TAS 200?",
                  "a": "Insurance technical actuarial standard.",
                  "explain": "Life and GI."
              },
              {
                  "q": "What is the Actuaries' Code?",
                  "a": "IFoA principles: integrity, competence, impartiality, compliance, speaking up, communication.",
                  "explain": "Ethics."
              },
              {
                  "q": "What do IFoA APSs cover for life actuaries?",
                  "a": "Duties of actuaries in statutory roles (e.g. chief actuary, with-profits actuary).",
                  "explain": "Practice standards."
              },
              {
                  "q": "What is the whistleblowing duty?",
                  "a": "Actuaries must report material concerns to regulators where required.",
                  "explain": "Speaking up."
              },
              {
                  "q": "Why is communication important?",
                  "a": "Users must understand results, uncertainty and limitations.",
                  "explain": "TAS."
              },
              {
                  "q": "What is peer review?",
                  "a": "Independent check of actuarial work.",
                  "explain": "APS X2."
              },
              {
                  "q": "How should conflicts be handled?",
                  "a": "Identify, disclose, manage.",
                  "explain": "Code."
              },
              {
                  "q": "How do standards affect Part VII work?",
                  "a": "Independent expert reports follow specific requirements.",
                  "explain": "Rigour."
              },
              {
                  "q": "What documentation is required?",
                  "a": "Sufficient for another actuary to understand and reproduce work.",
                  "explain": "TAS 100."
              },
              {
                  "q": "What is materiality?",
                  "a": "Whether an issue could affect users' decisions.",
                  "explain": "Proportionality."
              },
              {
                  "q": "How do standards apply to EV work?",
                  "a": "Assumptions and methods must be appropriate and documented.",
                  "explain": "Reporting."
              },
              {
                  "q": "Why is independence important for the with-profits actuary?",
                  "a": "To advise fairly on policyholder interests.",
                  "explain": "Governance."
              },
              {
                  "q": "What is CPD?",
                  "a": "Continuing professional development requirements.",
                  "explain": "Competence."
              },
              {
                  "q": "How do standards interact with regulation?",
                  "a": "Complementary — regulators rely on actuarial standards.",
                  "explain": "Framework."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Treating customers fairly",
          "description": "Fair treatment of customers in UK life insurance: TCF outcomes, the FCA Consumer Duty (products and services, price and value, consumer understanding, consumer support), fair value assessments, vulnerable customers, legacy book fairness and remediation.",
          "cards": [
              {
                  "q": "What is the Consumer Duty?",
                  "a": "FCA rule (from July 2023) requiring firms to deliver good outcomes for retail customers.",
                  "explain": "Higher standard."
              },
              {
                  "q": "What are the four Consumer Duty outcomes?",
                  "a": "Products and services; price and value; consumer understanding; consumer support.",
                  "explain": "Framework."
              },
              {
                  "q": "What is a fair value assessment?",
                  "a": "Assessing whether product benefits are reasonable relative to price.",
                  "explain": "Price and value."
              },
              {
                  "q": "How does the Duty apply to closed books?",
                  "a": "Applies to existing products from July 2024.",
                  "explain": "Legacy fairness."
              },
              {
                  "q": "What are vulnerable customers?",
                  "a": "Customers susceptible to harm due to circumstances.",
                  "explain": "Extra care."
              },
              {
                  "q": "What actions support fair treatment?",
                  "a": "Product governance, clear communication, fair charges, good claims handling, monitoring outcomes.",
                  "explain": "Syllabus 4.1."
              },
              {
                  "q": "What was TCF?",
                  "a": "Treating Customers Fairly — earlier FCA initiative with six outcomes.",
                  "explain": "Predecessor."
              },
              {
                  "q": "How can legacy products be unfair?",
                  "a": "High charges, outdated features, poor value.",
                  "explain": "Remediation."
              },
              {
                  "q": "What is remediation?",
                  "a": "Correcting past harm, including compensation.",
                  "explain": "Conduct risk."
              },
              {
                  "q": "How does TCF apply to with-profits?",
                  "a": "Fair discretion, PPFM adherence, communication.",
                  "explain": "COBS 20."
              },
              {
                  "q": "How is consumer understanding tested?",
                  "a": "Communications testing, comprehension checks.",
                  "explain": "Evidence."
              },
              {
                  "q": "What is consumer support?",
                  "a": "Making it easy to use products, switch, claim, complain.",
                  "explain": "No sludge."
              },
              {
                  "q": "What is the board's responsibility?",
                  "a": "Annual Consumer Duty report and champion.",
                  "explain": "Governance."
              },
              {
                  "q": "How can data monitor outcomes?",
                  "a": "MI on complaints, claims, lapses, value.",
                  "explain": "Evidence."
              },
              {
                  "q": "What are penalties for failures?",
                  "a": "Fines, redress, restrictions.",
                  "explain": "Enforcement."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Capital management",
          "description": "Capital management in life insurers: types of capital assessment (regulatory, economic, rating agency), sources of capital, ongoing solvency assessment and practical modelling, the link between risk, capital and value, and techniques such as reinsurance, securitisation, debt issuance and hedging.",
          "cards": [
              {
                  "q": "What types of capital assessment are there?",
                  "a": "Regulatory (SCR), economic capital, rating agency capital, ORSA view.",
                  "explain": "Syllabus 3.2.1."
              },
              {
                  "q": "What are sources of capital?",
                  "a": "Shareholder equity, retained profits, subordinated debt, contingent capital, reinsurance, value of in-force securitisation.",
                  "explain": "Syllabus 3.2.2."
              },
              {
                  "q": "What is capital management?",
                  "a": "Managing capital levels and uses to support strategy and solvency.",
                  "explain": "Syllabus 3.2.5."
              },
              {
                  "q": "Give capital management techniques.",
                  "a": "Reinsurance (including financial reinsurance), securitisation, hedging, debt issuance, product redesign, reducing new business strain, management actions, dividends policy.",
                  "explain": "Toolkit."
              },
              {
                  "q": "How can reinsurance manage capital?",
                  "a": "Transfers risk (e.g. longevity) reducing SCR; financial reinsurance funds strain.",
                  "explain": "Common."
              },
              {
                  "q": "What is VIF securitisation?",
                  "a": "Monetising value of in-force business by selling future profits.",
                  "explain": "Capital raising."
              },
              {
                  "q": "What is the link between risk, capital and value?",
                  "a": "Capital supports risk; value created if returns exceed cost of capital.",
                  "explain": "Syllabus 3.2.4."
              },
              {
                  "q": "What is ongoing solvency assessment?",
                  "a": "Projecting solvency over the business plan under base and stress scenarios.",
                  "explain": "ORSA."
              },
              {
                  "q": "What are practical modelling considerations?",
                  "a": "Model points, run times, proxy models, management actions, dynamic policyholder behaviour.",
                  "explain": "Syllabus 3.2.3."
              },
              {
                  "q": "What is a proxy model?",
                  "a": "Simplified model (e.g. curve fitting, LSMC) approximating full model outputs.",
                  "explain": "Speed."
              },
              {
                  "q": "What is a capital buffer?",
                  "a": "Capital above SCR held to withstand stress without breaching.",
                  "explain": "Risk appetite."
              },
              {
                  "q": "What is Tier 2 capital?",
                  "a": "Subordinated debt and similar instruments of lower loss-absorbency.",
                  "explain": "Own funds."
              },
              {
                  "q": "How do dividends relate to capital management?",
                  "a": "Dividends paid from surplus above target capital.",
                  "explain": "Policy."
              },
              {
                  "q": "How can hedging reduce capital?",
                  "a": "Reduces market risk SCR.",
                  "explain": "Derivatives."
              },
              {
                  "q": "What is return on capital?",
                  "a": "Profit relative to capital employed.",
                  "explain": "Performance."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Asset-liability management",
          "description": "ALM for life insurers: principles of matching, liability categorisation, cash flow and duration matching, the matching adjustment portfolio, use of derivatives (swaps, options, inflation swaps), liquidity risk management and ALM governance.",
          "cards": [
              {
                  "q": "What are the principles of ALM?",
                  "a": "Match assets to liabilities by nature, term and currency; manage mismatches within appetite.",
                  "explain": "Syllabus 3.2.6."
              },
              {
                  "q": "How are annuities matched?",
                  "a": "Long bonds, illiquid assets (MA portfolio), inflation swaps for indexed annuities.",
                  "explain": "Cash flow matching."
              },
              {
                  "q": "How are unit-linked liabilities matched?",
                  "a": "Holding the unit fund assets.",
                  "explain": "Minimal ALM."
              },
              {
                  "q": "How are with-profits liabilities matched?",
                  "a": "Mix reflecting guarantees and smoothing; derivatives to hedge guarantees.",
                  "explain": "Discretion."
              },
              {
                  "q": "How are derivatives used in ALM?",
                  "a": "Interest rate swaps, swaptions, inflation swaps, equity options, currency hedges.",
                  "explain": "Syllabus 3.2.6."
              },
              {
                  "q": "What is the MA portfolio requirement?",
                  "a": "Assets with fixed cash flows matched to eligible liabilities, held to maturity.",
                  "explain": "Solvency UK."
              },
              {
                  "q": "What is liquidity risk in ALM?",
                  "a": "Collateral calls on derivatives, mass lapses.",
                  "explain": "Liquidity buffer."
              },
              {
                  "q": "What is duration matching?",
                  "a": "Equating asset and liability durations.",
                  "explain": "Interest rate risk."
              },
              {
                  "q": "What is convexity management?",
                  "a": "Ensuring asset convexity sufficient relative to liabilities.",
                  "explain": "Second-order."
              },
              {
                  "q": "What is reinvestment risk?",
                  "a": "Future cash must be reinvested at unknown rates.",
                  "explain": "Mismatch."
              },
              {
                  "q": "How does ALM relate to capital?",
                  "a": "Mismatches increase market risk SCR.",
                  "explain": "Efficiency."
              },
              {
                  "q": "What is ALM governance?",
                  "a": "ALCO, policies, limits, reporting.",
                  "explain": "Oversight."
              },
              {
                  "q": "What are illiquid assets used in annuity backing?",
                  "a": "Equity release mortgages, infrastructure debt, private placements, commercial real estate loans.",
                  "explain": "Yield."
              },
              {
                  "q": "What is dynamic hedging?",
                  "a": "Adjusting hedges as markets move (e.g. for VA guarantees).",
                  "explain": "Delta."
              },
              {
                  "q": "Why consider collateral in hedging?",
                  "a": "Derivatives require margin, creating liquidity needs.",
                  "explain": "2022 lessons."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Analysis of surplus",
          "description": "Analysing supervisory surplus arising over a period, including under Solvency II/UK: sources (expected return, experience variances, assumption changes, new business strain, economic variances), method, and actions following the analysis.",
          "cards": [
              {
                  "q": "What is an analysis of surplus?",
                  "a": "Breaking down the change in surplus into sources.",
                  "explain": "Syllabus 3.4.1."
              },
              {
                  "q": "What are sources of Solvency II surplus change?",
                  "a": "Expected release of risk margin and SCR, unwind, experience variances, assumption changes, new business, economic variances, model changes.",
                  "explain": "Own funds movement."
              },
              {
                  "q": "What is new business strain under Solvency II?",
                  "a": "Often a day-one gain or loss depending on BEL, risk margin and SCR.",
                  "explain": "Capital strain."
              },
              {
                  "q": "How is the analysis carried out?",
                  "a": "Stepwise changes from opening to closing with one factor changed at a time.",
                  "explain": "Order matters."
              },
              {
                  "q": "What actions might follow an analysis?",
                  "a": "Reprice, change assumptions, redesign products, improve expense control, change investment strategy, retention activity.",
                  "explain": "Syllabus 3.4.3."
              },
              {
                  "q": "What is an experience variance?",
                  "a": "Difference between actual and expected experience.",
                  "explain": "Mortality, lapses, expenses."
              },
              {
                  "q": "What is an economic variance?",
                  "a": "Effect of market movements differing from assumptions.",
                  "explain": "Interest rates, equities."
              },
              {
                  "q": "Why analyse surplus?",
                  "a": "Validate assumptions and models, explain results, inform management.",
                  "explain": "Control cycle."
              },
              {
                  "q": "What is surplus emergence?",
                  "a": "Pattern over time of surplus arising from business.",
                  "explain": "Capital generation."
              },
              {
                  "q": "What is capital generation?",
                  "a": "Surplus arising above SCR requirements available for dividends.",
                  "explain": "Key metric."
              },
              {
                  "q": "How are management actions reflected?",
                  "a": "Separate item in analysis.",
                  "explain": "Transparency."
              },
              {
                  "q": "What is the role of the actuarial function?",
                  "a": "Oversees technical provisions movements.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How does MA affect surplus analysis?",
                  "a": "Spread movements and MA changes produce economic variances.",
                  "explain": "Annuities."
              },
              {
                  "q": "What is the unexplained residual?",
                  "a": "Portion not attributed to identified sources.",
                  "explain": "Should be small."
              },
              {
                  "q": "How can results inform pricing?",
                  "a": "Persistent variances suggest pricing assumptions need change.",
                  "explain": "Feedback."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Profit reporting",
          "description": "Profit reporting for life insurers: IFRS 17 (general measurement model, VFA, PAA, CSM, risk adjustment), US GAAP (LDTI), local statutory approaches in other jurisdictions, and the implications for how profit emerges.",
          "cards": [
              {
                  "q": "What is IFRS 17's general measurement model?",
                  "a": "Fulfilment cash flows (PV future cash flows + risk adjustment) plus contractual service margin.",
                  "explain": "Default model."
              },
              {
                  "q": "What is the CSM?",
                  "a": "Unearned profit recognised over coverage.",
                  "explain": "No day-one profit."
              },
              {
                  "q": "What is the variable fee approach (VFA)?",
                  "a": "IFRS 17 model for direct participating contracts (e.g. with-profits, unit-linked).",
                  "explain": "Shareholder fee."
              },
              {
                  "q": "What is the premium allocation approach?",
                  "a": "Simplified model for short contracts.",
                  "explain": "Group protection."
              },
              {
                  "q": "What is the IFRS 17 risk adjustment?",
                  "a": "Compensation for non-financial risk.",
                  "explain": "Confidence level disclosure."
              },
              {
                  "q": "What are onerous contracts?",
                  "a": "Contracts with expected losses — recognised immediately.",
                  "explain": "Loss component."
              },
              {
                  "q": "What is US GAAP LDTI?",
                  "a": "Long-duration targeted improvements: updated assumptions, market risk benefits at fair value.",
                  "explain": "US standard."
              },
              {
                  "q": "How does profit emergence differ under IFRS 17?",
                  "a": "Profits released via CSM over time, smoother than some prior regimes.",
                  "explain": "Pattern."
              },
              {
                  "q": "What is the contract group level?",
                  "a": "Portfolios split by cohort and profitability.",
                  "explain": "Aggregation."
              },
              {
                  "q": "What are profit reporting approaches in other jurisdictions?",
                  "a": "Statutory accounting bases (e.g. US STAT), local GAAPs.",
                  "explain": "Syllabus 3.3.2."
              },
              {
                  "q": "How is IFRS 17 different from Solvency II?",
                  "a": "IFRS 17 has CSM (no day-one gain); Solvency II recognises future profits in own funds.",
                  "explain": "Different purposes."
              },
              {
                  "q": "What is insurance revenue under IFRS 17?",
                  "a": "Release of expected claims, expenses, RA, CSM — not premiums.",
                  "explain": "Presentation."
              },
              {
                  "q": "What is insurance finance income/expense?",
                  "a": "Effect of time value and financial risk.",
                  "explain": "OCI option."
              },
              {
                  "q": "Why did IFRS 17 matter for comparability?",
                  "a": "Consistent global accounting for insurance.",
                  "explain": "Transparency."
              },
              {
                  "q": "How does reinsurance accounting work under IFRS 17?",
                  "a": "Separate reinsurance contracts held measured with own CSM.",
                  "explain": "Mismatch."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Embedded value",
          "description": "Embedded value reporting: traditional EV, European Embedded Value and Market-Consistent Embedded Value, components (net worth, VIF, cost of capital, time value of options), EV under Solvency II (own funds-based metrics), value of new business, and analysis of change in EV.",
          "cards": [
              {
                  "q": "What is embedded value?",
                  "a": "Shareholders' interest in the in-force business: adjusted net worth plus value of in-force less cost of capital.",
                  "explain": "Excludes future new business."
              },
              {
                  "q": "What is traditional EV?",
                  "a": "Uses a risk discount rate to value future profits.",
                  "explain": "Subjective."
              },
              {
                  "q": "What is EEV?",
                  "a": "European Embedded Value principles adding explicit time value of options and frictional costs.",
                  "explain": "CFO Forum."
              },
              {
                  "q": "What is MCEV?",
                  "a": "Market-consistent EV using risk-free rates and allowances for non-hedgeable risks.",
                  "explain": "Consistent."
              },
              {
                  "q": "What are EV components?",
                  "a": "Free surplus, required capital, PV future profits, time value of options, frictional costs, cost of non-hedgeable risks.",
                  "explain": "Build-up."
              },
              {
                  "q": "How is EV related to Solvency II?",
                  "a": "Own funds include future profits, so insurers report Solvency II-based EV metrics.",
                  "explain": "Syllabus 3.3.3."
              },
              {
                  "q": "What is value of new business?",
                  "a": "PV of future profits from new business less cost of capital.",
                  "explain": "Sales value."
              },
              {
                  "q": "What is analysis of change in EV?",
                  "a": "Expected return, experience and assumption variances, new business, economic variances, capital movements.",
                  "explain": "Syllabus 3.4.2."
              },
              {
                  "q": "What is free surplus?",
                  "a": "Net worth above required capital.",
                  "explain": "Distributable."
              },
              {
                  "q": "What is the cost of capital in EV?",
                  "a": "Cost of holding required capital (frictional costs).",
                  "explain": "Tax and investment costs."
              },
              {
                  "q": "What is the time value of options?",
                  "a": "Additional cost of guarantees from market volatility.",
                  "explain": "Stochastic."
              },
              {
                  "q": "How is EV used?",
                  "a": "Valuing companies, M&A, management performance.",
                  "explain": "Investors."
              },
              {
                  "q": "What are EV limitations?",
                  "a": "Assumption sensitivity, excludes franchise value.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is expected return on EV?",
                  "a": "Unwind of discount and expected profit.",
                  "explain": "Analysis item."
              },
              {
                  "q": "What is appraisal value?",
                  "a": "EV plus value of future new business (goodwill).",
                  "explain": "M&A."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Asset shares",
          "description": "Asset shares in with-profits management: components of an asset share calculation (premiums, expenses, investment return, cost of guarantees, charges for capital, mortality, tax, miscellaneous profits and losses), data and approximations, and uses in setting payouts.",
          "cards": [
              {
                  "q": "What are the components of an asset share?",
                  "a": "Premiums less expenses and commission, plus investment return, less cost of death benefits and guarantees, less tax, less charges for capital support, plus/minus miscellaneous surplus.",
                  "explain": "Syllabus 4.3.1."
              },
              {
                  "q": "Why charge asset shares for guarantees?",
                  "a": "To reflect the cost of guarantees borne by the estate.",
                  "explain": "Fairness."
              },
              {
                  "q": "What is a charge for capital support?",
                  "a": "A deduction compensating the estate/shareholders for capital supporting the policy.",
                  "explain": "Estate use."
              },
              {
                  "q": "How are miscellaneous profits allocated?",
                  "a": "Profits from non-profit business or other sources may be credited to asset shares.",
                  "explain": "Policy choice."
              },
              {
                  "q": "What investment return is used?",
                  "a": "Actual return on the with-profits fund's assets (possibly by asset mix).",
                  "explain": "Hypothecation."
              },
              {
                  "q": "What data is needed?",
                  "a": "Historical premiums, expenses, returns, tax, mortality.",
                  "explain": "Model points."
              },
              {
                  "q": "How are asset shares approximated?",
                  "a": "Using model points and average experience.",
                  "explain": "Practical."
              },
              {
                  "q": "How are asset shares used?",
                  "a": "Setting terminal bonuses, surrender values, testing bonus sustainability, assessing the estate.",
                  "explain": "Uses."
              },
              {
                  "q": "What is the relationship between asset shares and the estate?",
                  "a": "Estate = assets − (asset shares + other liabilities).",
                  "explain": "Surplus."
              },
              {
                  "q": "Why might payouts differ from asset shares?",
                  "a": "Smoothing, guarantees, estate distribution.",
                  "explain": "Target range."
              },
              {
                  "q": "What is a target payout range?",
                  "a": "E.g. payouts within 80–120% of asset share.",
                  "explain": "PPFM."
              },
              {
                  "q": "How does tax enter asset shares?",
                  "a": "Tax on investment return and I−E charged.",
                  "explain": "UK."
              },
              {
                  "q": "What is hypothecation?",
                  "a": "Allocating specific assets to groups of policies.",
                  "explain": "Investment returns."
              },
              {
                  "q": "How are expenses allocated?",
                  "a": "Actual expenses allocated by policy type and duration.",
                  "explain": "Fairness."
              },
              {
                  "q": "Why is PRE relevant?",
                  "a": "Asset share methods must meet reasonable expectations.",
                  "explain": "Governance."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Surplus distribution",
          "description": "Distributing with-profits surplus: smoothing concepts and costs, bonus distribution approaches (reversionary, terminal, accumulating), bonus-setting investigations, shareholder transfers, and fairness between generations.",
          "cards": [
              {
                  "q": "What is smoothing?",
                  "a": "Limiting changes in payouts over time relative to asset shares.",
                  "explain": "Syllabus 4.3.2."
              },
              {
                  "q": "What is the cost of smoothing?",
                  "a": "Difference between smoothed payouts and asset shares, borne by estate.",
                  "explain": "Neutral long-term."
              },
              {
                  "q": "What investigations inform bonus setting?",
                  "a": "Asset share projections, guarantee tests, estate analysis, stochastic projections, smoothing account.",
                  "explain": "Syllabus 4.3.3."
              },
              {
                  "q": "What bonus approaches exist?",
                  "a": "Reversionary (simple, compound, super-compound), terminal, accumulating regular bonus rates.",
                  "explain": "Syllabus 4.3.4."
              },
              {
                  "q": "What is a smoothing account?",
                  "a": "Running record of smoothing costs/profits.",
                  "explain": "Monitoring."
              },
              {
                  "q": "How are shareholder transfers determined?",
                  "a": "Typically a fixed proportion (e.g. 1/9th of bonuses) in proprietary funds.",
                  "explain": "90:10."
              },
              {
                  "q": "What is fairness between generations?",
                  "a": "Avoid one cohort subsidising another.",
                  "explain": "Estate use."
              },
              {
                  "q": "What is an inherited estate?",
                  "a": "Surplus built up over past generations.",
                  "explain": "Distribution policy."
              },
              {
                  "q": "How are regular bonuses set?",
                  "a": "At levels sustainable given guarantees and expected returns.",
                  "explain": "Prudence."
              },
              {
                  "q": "How are terminal bonuses set?",
                  "a": "To bring payouts close to smoothed asset shares.",
                  "explain": "Target range."
              },
              {
                  "q": "What is a special distribution?",
                  "a": "Distributing excess estate to policyholders.",
                  "explain": "Orphan estates."
              },
              {
                  "q": "How do market falls affect bonuses?",
                  "a": "Terminal bonus cuts, possible MVRs, smoothing limits.",
                  "explain": "Communication."
              },
              {
                  "q": "What role does the with-profits committee play?",
                  "a": "Independent oversight of fairness.",
                  "explain": "Governance."
              },
              {
                  "q": "What constraints apply to bonus changes?",
                  "a": "PPFM limits, PRE, regulatory rules.",
                  "explain": "COBS 20."
              },
              {
                  "q": "Why use stochastic projections?",
                  "a": "To test sustainability of bonuses and guarantees.",
                  "explain": "Risk."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Management of with-profits business",
          "description": "General with-profits management: regulatory requirements (COBS 20, PPFM, with-profits committee, with-profits actuary), policyholder protection, management actions in stress, investment strategy, and managing closed with-profits funds (tontine risk, run-off planning, reattribution).",
          "cards": [
              {
                  "q": "What is COBS 20?",
                  "a": "FCA rules for with-profits business covering fair treatment, PPFM, distributions, closed funds.",
                  "explain": "UK regulation."
              },
              {
                  "q": "What is the PPFM?",
                  "a": "Principles and Practices of Financial Management — how the firm runs its with-profits fund.",
                  "explain": "Public document."
              },
              {
                  "q": "What are management actions?",
                  "a": "Planned actions in adverse scenarios (e.g. cutting bonuses, changing asset mix).",
                  "explain": "Modelled in capital."
              },
              {
                  "q": "How are closed with-profits funds managed?",
                  "a": "Run-off plans, distribution of estate over remaining policies, cost control, avoiding tontine effects.",
                  "explain": "Syllabus 4.3.5."
              },
              {
                  "q": "What is the tontine effect?",
                  "a": "Last policyholders receiving excessive estate distributions.",
                  "explain": "Avoid."
              },
              {
                  "q": "What is a reattribution?",
                  "a": "Transfer of part of the inherited estate to shareholders in return for payments to policyholders.",
                  "explain": "Rare now."
              },
              {
                  "q": "What policyholder protections exist?",
                  "a": "PRE, PPFM, committees, regulatory oversight, Part VII safeguards.",
                  "explain": "Syllabus 4.3.5."
              },
              {
                  "q": "How is investment strategy set for with-profits?",
                  "a": "Balancing return and guarantee protection, considering estate size.",
                  "explain": "Equity backing ratio."
              },
              {
                  "q": "What is the equity backing ratio?",
                  "a": "Proportion of with-profits assets in equities/property.",
                  "explain": "Risk."
              },
              {
                  "q": "What issues arise in with-profits mergers?",
                  "a": "Ring-fencing funds, fairness to both sets of policyholders.",
                  "explain": "Part VII."
              },
              {
                  "q": "How are expenses managed in closed funds?",
                  "a": "Per-policy costs rise; outsourcing, fixed-price contracts.",
                  "explain": "Expense risk."
              },
              {
                  "q": "What is a with-profits committee's role?",
                  "a": "Independent judgement on fairness of discretion.",
                  "explain": "Governance."
              },
              {
                  "q": "How are guarantees managed?",
                  "a": "Hedging, capital, bonus policy.",
                  "explain": "Risk."
              },
              {
                  "q": "When might a fund be converted?",
                  "a": "Offer policyholders conversion to unit-linked or other products.",
                  "explain": "Run-off acceleration."
              },
              {
                  "q": "How should changes be communicated?",
                  "a": "Clear, timely information on bonus changes and fund plans.",
                  "explain": "Consumer Duty."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Risk management and controls",
          "description": "Risk management for life insurers: a risk management framework, key risk types (credit, market, liquidity, operational incl. conduct, model and unit pricing risk, insurance incl. longevity, group risk) and appropriate strategies and controls for each.",
          "cards": [
              {
                  "q": "What is an appropriate risk management framework?",
                  "a": "Governance, appetite, identification, measurement, management, monitoring, reporting, culture.",
                  "explain": "Syllabus 4.2.1."
              },
              {
                  "q": "How is credit risk managed?",
                  "a": "Limits, diversification, collateral, rating requirements, credit derivatives.",
                  "explain": "Annuity assets."
              },
              {
                  "q": "How is market risk managed?",
                  "a": "ALM, hedging, limits, diversification.",
                  "explain": "Guarantees."
              },
              {
                  "q": "How is liquidity risk managed?",
                  "a": "Buffers, contingency funding, collateral management, stress testing.",
                  "explain": "Derivatives."
              },
              {
                  "q": "What is conduct risk?",
                  "a": "Risk of poor customer outcomes.",
                  "explain": "Consumer Duty."
              },
              {
                  "q": "What is model risk?",
                  "a": "Errors in models used for valuation, pricing or capital.",
                  "explain": "Validation."
              },
              {
                  "q": "What is unit pricing risk?",
                  "a": "Errors in unit prices harming customers.",
                  "explain": "Controls and compensation."
              },
              {
                  "q": "How is longevity risk managed?",
                  "a": "Reinsurance, longevity swaps, pricing, diversification with protection.",
                  "explain": "Annuities."
              },
              {
                  "q": "What is group risk?",
                  "a": "Risks arising from membership of a group (contagion, intra-group exposures).",
                  "explain": "Syllabus 4.2.2."
              },
              {
                  "q": "How is operational risk controlled?",
                  "a": "Process controls, business continuity, outsourcing oversight.",
                  "explain": "Resilience."
              },
              {
                  "q": "How is insurance risk managed?",
                  "a": "Underwriting, reinsurance, pricing reviews.",
                  "explain": "Mortality/morbidity."
              },
              {
                  "q": "What are key risk indicators?",
                  "a": "Metrics signalling increasing risk.",
                  "explain": "Monitoring."
              },
              {
                  "q": "What is a stress and scenario testing programme?",
                  "a": "Regular testing of adverse conditions.",
                  "explain": "ORSA."
              },
              {
                  "q": "What is reverse stress testing?",
                  "a": "Identifying scenarios causing business failure.",
                  "explain": "Required."
              },
              {
                  "q": "How are controls tested?",
                  "a": "Internal audit, second-line reviews.",
                  "explain": "Assurance."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Product design and pricing",
          "description": "Designing and pricing life products in practice: design factors (customer needs, Consumer Duty, distribution, capital, risk, tax, regulation), pricing methods (profit testing, market-consistent pricing, cost of capital, IRR/VNB criteria), and bases for different products.",
          "cards": [
              {
                  "q": "What factors affect product design?",
                  "a": "Customer needs and outcomes, distribution, competition, capital and risk, tax, regulation, reinsurance, systems, profitability.",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "How does the Consumer Duty affect design?",
                  "a": "Products must meet target market needs and offer fair value.",
                  "explain": "Product governance."
              },
              {
                  "q": "What pricing methods are used?",
                  "a": "Profit testing with risk discount rate, market-consistent pricing, cost-of-capital approaches.",
                  "explain": "Syllabus 4.4.2."
              },
              {
                  "q": "What profit criteria are used?",
                  "a": "IRR, VNB margin, payback period, return on capital.",
                  "explain": "Criteria."
              },
              {
                  "q": "How are annuities priced?",
                  "a": "Mortality, expenses, investment yield (including MA and illiquidity), capital, reinsurance.",
                  "explain": "Competitive."
              },
              {
                  "q": "How is protection priced?",
                  "a": "Reinsurance rates, underwriting, lapse, commission.",
                  "explain": "Aggregators."
              },
              {
                  "q": "How is a unit-linked product priced?",
                  "a": "Charges to cover expenses and profit, non-unit reserves, persistency.",
                  "explain": "Charges."
              },
              {
                  "q": "How does Solvency II affect pricing?",
                  "a": "Day-one gains/losses, risk margin and SCR costs.",
                  "explain": "Capital efficiency."
              },
              {
                  "q": "How are guarantees priced?",
                  "a": "Market-consistent option costs and hedging.",
                  "explain": "Variable annuities."
              },
              {
                  "q": "How is the pricing basis chosen?",
                  "a": "Best estimate plus margins reflecting risk and competition.",
                  "explain": "Judgement."
              },
              {
                  "q": "What is marginal pricing?",
                  "a": "Covering incremental costs only.",
                  "explain": "Competitive risk."
              },
              {
                  "q": "Why test sensitivity in pricing?",
                  "a": "Identify key risks and robustness.",
                  "explain": "Stress."
              },
              {
                  "q": "How does reinsurance affect pricing?",
                  "a": "Cost and capital relief incorporated.",
                  "explain": "Protection."
              },
              {
                  "q": "What is the role of distribution costs?",
                  "a": "Commission or adviser charges affect product economics.",
                  "explain": "Channel."
              },
              {
                  "q": "How is product performance monitored?",
                  "a": "Sales, profitability, customer outcomes vs expectations.",
                  "explain": "Control cycle."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Problem solving",
          "description": "Applying the SA2 course to exam scenarios: identifying the issues, using frameworks (stakeholders, risks, capital, regulation, customers), making justified recommendations, and handling calculations and communication questions.",
          "cards": [
              {
                  "q": "How should SA2 questions be approached?",
                  "a": "Identify client, issues and constraints; apply frameworks; recommend and justify.",
                  "explain": "Structure."
              },
              {
                  "q": "Which frameworks help SA2 answers?",
                  "a": "Stakeholders, risk types, capital/solvency impact, regulatory and conduct, tax, practicalities.",
                  "explain": "Breadth."
              },
              {
                  "q": "Why consider the Consumer Duty in answers?",
                  "a": "Customer outcomes must be considered in most decisions.",
                  "explain": "Current regime."
              },
              {
                  "q": "How should capital impacts be discussed?",
                  "a": "Effects on BEL, risk margin, SCR, own funds, solvency ratio.",
                  "explain": "Quantitative."
              },
              {
                  "q": "How should recommendations be made?",
                  "a": "Clear, justified, with alternatives and next steps.",
                  "explain": "Marks."
              },
              {
                  "q": "What are common weaknesses?",
                  "a": "Generic answers, missing UK specifics, insufficient breadth.",
                  "explain": "Examiners."
              },
              {
                  "q": "How should calculations be presented?",
                  "a": "Clear assumptions and interpretation.",
                  "explain": "Method."
              },
              {
                  "q": "How to manage time?",
                  "a": "Allocate by marks.",
                  "explain": "Two papers."
              },
              {
                  "q": "Why consider practicalities?",
                  "a": "Systems, data, timescales, costs.",
                  "explain": "Realism."
              },
              {
                  "q": "How to handle M&A questions?",
                  "a": "Part VII, due diligence, capital, policyholder fairness, integration.",
                  "explain": "Frameworks."
              },
              {
                  "q": "How to handle with-profits questions?",
                  "a": "PRE, PPFM, fairness, estate, governance.",
                  "explain": "Specialist."
              },
              {
                  "q": "How to handle product questions?",
                  "a": "Customer needs, design, pricing, capital, distribution.",
                  "explain": "Chapter 22."
              },
              {
                  "q": "What is the role of communication questions?",
                  "a": "Drafting advice clearly to specified audience.",
                  "explain": "Tone."
              },
              {
                  "q": "Why read the question carefully?",
                  "a": "Details signal key issues.",
                  "explain": "Relevance."
              },
              {
                  "q": "How can past papers help?",
                  "a": "Show scenarios and marking.",
                  "explain": "Practice."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Glossary",
          "description": "Key SA2 terminology — UK regulation, Solvency UK, with-profits, accounting and embedded value terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'matching adjustment'.",
                  "a": "Discount rate uplift for matched illiquid liabilities.",
                  "explain": "Solvency UK."
              },
              {
                  "q": "Define 'TMTP'.",
                  "a": "Transitional measure on technical provisions.",
                  "explain": "Runs off to 2032."
              },
              {
                  "q": "Define 'CSM'.",
                  "a": "Contractual service margin under IFRS 17.",
                  "explain": "Unearned profit."
              },
              {
                  "q": "Define 'MCEV'.",
                  "a": "Market-consistent embedded value.",
                  "explain": "EV."
              },
              {
                  "q": "Define 'PPFM'.",
                  "a": "Principles and Practices of Financial Management.",
                  "explain": "With-profits."
              },
              {
                  "q": "Define 'Part VII transfer'.",
                  "a": "Court-approved transfer of insurance business.",
                  "explain": "UK."
              },
              {
                  "q": "Define 'BLAGAB'.",
                  "a": "Basic life assurance and general annuity business.",
                  "explain": "Tax."
              },
              {
                  "q": "Define 'I−E basis'.",
                  "a": "Taxing income less expenses for BLAGAB.",
                  "explain": "UK tax."
              },
              {
                  "q": "Define 'Consumer Duty'.",
                  "a": "FCA rule requiring good customer outcomes.",
                  "explain": "Conduct."
              },
              {
                  "q": "Define 'NNEG'.",
                  "a": "No-negative-equity guarantee.",
                  "explain": "Equity release."
              },
              {
                  "q": "Define 'VNB'.",
                  "a": "Value of new business.",
                  "explain": "EV."
              },
              {
                  "q": "Define 'smoothing'.",
                  "a": "Limiting payout volatility relative to asset shares.",
                  "explain": "With-profits."
              },
              {
                  "q": "Define 'fundamental spread'.",
                  "a": "Allowance for default/downgrade in MA.",
                  "explain": "Solvency UK."
              },
              {
                  "q": "Define 'Takaful'.",
                  "a": "Sharia-compliant cooperative insurance.",
                  "explain": "Products."
              },
              {
                  "q": "Define 'GMWB'.",
                  "a": "Guaranteed minimum withdrawal benefit.",
                  "explain": "Variable annuities."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sa2-q1",
      title: "Pricing a term assurance product",
      modules: "Modules 2, 23",
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
          note: "Arithmetic check: 0.003 × 100000 = 300; 300 / 0.92 = 326.09. Full marks require setting up the equivalence-principle equation explicitly.",
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
            "A convertible option gives valuable protection against future health deterioration making later cover difficult to obtain, but since policyholders are more likely to exercise it when financially advantageous (health has worsened), it carries a genuine anti-selective cost that should be priced explicitly, rather than assumed to be self-funding within a generic margin.",
          note: "A strong answer explicitly names the anti-selection mechanism, not just asserts that options 'have a cost'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why profit testing should be carried out before finalising this product's pricing, beyond the equivalence-principle calculation in part (i).",
          answer:
            "Profit testing projects the product's expected cashflows over its full lifetime (including expenses, lapses, and any embedded options) to confirm the pricing achieves the insurer's target profitability, which a single equivalence-principle calculation covering only expected mortality cost and expenses does not fully verify.",
          note: "This connects profit testing as a verification step distinct from, and following on from, the initial pricing calculation.",
        },
      ],
    },
    {
      id: "sa2-q2",
      title: "With-profits bonus philosophy and pricing",
      modules: "Modules 19, 20, 21",
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
            "A with-profits fund pools assets across policyholders who joined at different times, so bonus decisions can transfer value between generations (e.g. overly generous bonuses now could disadvantage future policyholders' claims), requiring the insurer to balance fairness across the whole fund over time, not just between the insurer and a single policyholder as in most other pricing decisions.",
          note: "Candidates should explicitly identify the <em>multi-generation</em> aspect as the distinguishing feature, not just restate that fairness matters generally.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a guaranteed annuity option (GAO) embedded in an older with-profits pension policy could become severely costly to the insurer decades after the policy was sold.",
          answer:
            "A GAO guarantees conversion of the fund into an annuity at a specified rate; if market annuity rates fall well below the guaranteed rate (driven by falling interest rates and improving longevity), the guarantee becomes deeply valuable to policyholders and correspondingly costly to the insurer, even though it may have looked unlikely to bite when originally priced.",
          note: "A strong answer explains <em>why</em> the option's cost can crystallise decades later, not just that GAOs exist.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why conduct regulation for with-profits business specifically emphasises transparent governance of bonus-setting discretion.",
          answer:
            "Since with-profits bonus-setting inherently involves genuine insurer discretion affecting different generations of policyholders differently, conduct regulation requires clear governance and disclosure of how that discretion is exercised, addressing a specific risk not present in products with no comparable discretionary element.",
          note: "This connects directly to the inter-generational fairness theme raised in part (ii).",
        },
      ],
    },
    {
      id: "sa2-q3",
      title: "Annuity pricing and the guaranteed annuity option",
      modules: "Modules 3, 11, 23",
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
          note: "Arithmetic check: 100000×0.10=10,000; 100000×0.065=6,500; difference=3,500. Marks are typically split across the three sub-calculations.",
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
            "The matching adjustment allows discounting long-term, predictable annuity liabilities using a higher rate reflecting the return on assets held to back them, recognising the illiquidity premium available on a held-to-maturity matched portfolio; to use it, the insurer must demonstrate strict cashflow matching between assets and liabilities, since inappropriate use could materially overstate financial strength.",
          note: "A strong answer explains both why it's relevant <em>and</em> the strict matching condition required to use it, not just one or the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer might combine reinsurance with the matching adjustment to manage its annuity book's risk, rather than relying on a single technique.",
          answer:
            "Reinsurance transfers longevity risk to a specialist counterparty, while the matching adjustment addresses interest rate risk through genuine asset-liability matching; each technique addresses a different risk driver, so combining them can achieve more efficient, diversified risk management than either alone.",
          note: "This connects directly to the best-practice theme of combining complementary risk management tools rather than relying on a single approach.",
        },
      ],
    },
    {
      id: "sa2-q4",
      title: "Unit-linked charging and embedded guarantees",
      modules: "Modules 4, 23",
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
            "Derivatives (e.g. equity put options) can efficiently and directly offset the guarantee's payoff pattern under adverse market scenarios, providing a more targeted and reliable risk management tool than simply hoping collected charges are sufficient to cover the guarantee's uncertain, path-dependent cost.",
          note: "This connects directly to CM2's derivative-hedging material applied to a genuine embedded-guarantee context.",
        },
      ],
    },
    {
      id: "sa2-q5",
      title: "Taxation and the regulatory environment",
      modules: "Modules 7, 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the tax treatment of a with-profits fund's investment returns must be reflected in the fund's bonus-setting philosophy.",
          answer:
            "Tax charged on the fund's investment income and gains directly reduces the returns available to support bonuses, so bonus-setting must account for the fund's after-tax investment performance, not its gross returns, or bonuses could be set at an unsustainable level relative to what is available to distribute.",
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
            "Prudential regulation focuses on an insurer's financial soundness and ability to meet obligations, while conduct regulation focuses on how insurers treat customers, including fair and transparent treatment. With-profits business raises a distinct conduct concern because bonus-setting inherently involves insurer discretion affecting different policyholder generations differently, requiring specific governance and disclosure not needed for products with fixed, contractually-determined benefits.",
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
          note: "Arithmetic check: 0.05×20,000,000=1,000,000; TP=21,000,000; 0.12×20,000,000=2,400,000; 0.25×2,400,000=600,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why longevity risk and mortality risk are modelled as distinct, and potentially offsetting, risk modules under Solvency II for an insurer writing both annuity and protection business.",
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
          note: "Any one valid, well-explained reason should be accepted.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this insurer's ORSA should consider combined, correlated stress scenarios (e.g. falling interest rates alongside worsening lapse experience), rather than assessing each risk module in isolation.",
          answer:
            "These risks can interact in important ways under stress, so a forward-looking assessment of overall solvency needs must consider combined, correlated scenarios relevant to the insurer's specific risk profile, not just each standard formula risk module's standalone impact.",
          note: "This connects the numeric SCR/MCR calculation directly to the ORSA's forward-looking, combined-scenario purpose.",
        },
      ],
    },
    {
      id: "sa2-q7",
      title: "Profit and value reporting for a diversified life insurer",
      modules: "Modules 17, 18",
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
          note: "Arithmetic check: PVFP=4,688,284.41; EV=8,688,284.41 (rounded to nearest pound in the model answer). Marks are typically split between the PVFP calculation and the final embedded value figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's statutory reported profit for this protection business might appear materially lower than the embedded value calculated in part (i) would suggest, particularly in the years immediately following a period of strong new business growth.",
          answer:
            "Statutory reporting requires prudent reserves to be set up at the point of sale (new business strain), depressing reported early profit even though embedded value, capturing the full expected future profit stream in present-value terms, may already be positive from inception.",
          note: "A strong answer explains this as consistent, not contradictory, results from two different reporting bases.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the contractual service margin (CSM) under IFRS 17 is likely to be a more significant reporting concept for this insurer's annuity business than for its protection business.",
          answer:
            "The CSM represents unearned future profit released gradually as service is provided, directly shaping how a product's total expected profit is spread across future reporting periods; since annuity business typically has a much longer duration than protection business, its total expected profit is spread across many more future periods, making the CSM's role in shaping the reported profit <em>pattern</em> correspondingly more significant.",
          note: "A strong answer explicitly connects the CSM's significance to product <em>duration</em>, not just names the CSM generically.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why an analysis of embedded value movement broken down by product line (protection, with-profits, annuity) is more useful to this insurer's management than a single combined total.",
          answer:
            "Decomposing the year-on-year embedded value change by product line reveals which specific parts of a diversified book are driving value creation or destruction, more actionable for management decision-making than a single aggregated whole-company figure that could mask offsetting movements between product lines.",
          note: "This connects directly to the surplus-analysis decomposition theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa2-q8",
      title: "Analysis of experience and surplus",
      modules: "Module 16",
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
          note: "Arithmetic check: 1000×0.08=80; 1000×0.095=95; difference=15. Marks are typically split across the expected figure, actual figure, and correctly labelling the variance.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the insurer should investigate whether this lapse variance reflects genuine random fluctuation or a persistent trend before revising its lapse assumption.",
          answer:
            "A single period's adverse experience could be genuine random noise around an unchanged underlying rate, so distinguishing genuine trend change from random fluctuation avoids over-reacting to noise while still catching important shifts that should inform revised pricing and reserving assumptions.",
          note: "A strong answer frames this explicitly as a statistical-significance judgement, not simply 'more data is needed'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the insurer's overall surplus analysis should separately identify the 'expected' release of margins from the lapse experience variance calculated in part (i).",
          answer:
            "The expected component reflects prudent margins built into original pricing/reserving assumptions that are expected to emerge as profit purely through the passage of time, forming a predictable baseline; separately identifying the lapse experience variance reveals an unexpected deviation from that baseline, which is what actually informs sound management action, rather than conflating planned and unplanned sources of surplus movement.",
          note: "A strong answer explicitly explains why conflating expected release and experience variance would reduce the analysis's diagnostic value.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this lapse experience finding should feed back into both the insurer's pricing and reserving assumptions, not just one of the two.",
          answer:
            "The same underlying experience (higher-than-assumed lapses) affects both the pricing of new business going forward and the adequacy of reserves already held for existing business, so a complete response to this finding must consider both applications together.",
          note: "This connects directly to the theme that experience analysis is a central activity feeding into multiple other technical areas.",
        },
      ],
    },
    {
      id: "sa2-q9",
      title: "Strategic decision: entering the bulk annuity market",
      modules: "Modules 5, 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A life insurer with strong protection business but no prior annuity experience is considering entering the bulk annuity market (taking on pension schemes' liabilities). Discuss two factors the insurer should consider when assessing this strategic option.",
          answer:
            "First, capital impact: bulk annuity business is materially more capital-intensive than protection business (given its long-duration longevity and interest rate risk), so the insurer must assess whether it has, or can raise, sufficient capital. Second, risk profile fit: bulk annuities introduce new longevity and interest rate risk drivers the insurer has no existing experience managing, unlike its established, shorter-tail protection risk, so the insurer must assess whether it has or can build the necessary pricing, ALM and reserving expertise.",
          note: "Any two distinct, well-justified factors should be accepted, provided they are assessed against this insurer's <em>specific</em> circumstances.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Assuming the insurer has adequate capital headroom but limited in-house annuity and ALM expertise, recommend a course of action for entering this market, with justification.",
          answer:
            "A phased entry supported by longevity reinsurance is recommended: partnering with a reinsurer experienced in longevity risk provides access to pricing expertise and risk transfer the insurer currently lacks, while a phased rollout (starting with smaller bulk transactions before larger ones) limits exposure while the insurer builds its own ALM and pricing capability, rather than writing large transactions immediately based on borrowed expertise alone.",
          note: "Credit should be given for any well-justified, reasoned recommendation that explicitly addresses the stated capability gap.",
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
            "A strategy's success is rarely fully knowable at the point of recommendation, so specifying how outcomes will be tracked (e.g. against experience-analysis and surplus-analysis metrics for the new bulk annuity book) shows the recommendation is designed to be verified and adjusted over time, rather than a one-off, unchecked decision.",
          note: "This connects directly to this course's recurring ongoing-monitoring theme, applied specifically to strategic decision-making.",
        },
      ],
    },
    {
      id: "sa2-q10",
      title: "International comparison and complex problem-solving",
      modules: "Modules 9, 11, 24",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why identifying best practice in with-profits fund governance requires genuine judgement about context, rather than assuming one market's approach transfers directly to another.",
          answer:
            "An approach that works well in one market's specific regulatory, cultural, and product-design context may not transfer straightforwardly to a different context, so identifying best practice requires assessing <em>why</em> an approach works in its original context, not just copying it directly &mdash; 'best practice' means best-for-context, not a single universal standard.",
          note: "A strong answer explicitly explains why context-blind copying is risky, not just asserts that context 'matters'.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a life insurer operating outside the Solvency II framework might still be subject to a broadly similar risk-based capital regime.",
          answer:
            "Different jurisdictions have developed their own risk-based capital frameworks (e.g. risk-based capital, RBC, systems used elsewhere) that share Solvency II's broad goal of ensuring adequate capital relative to risk, but differ in technical detail, calibration, and structure, reflecting different regulatory traditions pursuing a similar underlying objective.",
          note: "A strong answer recognises Solvency II as one example of a risk-based capital regime, not the only possible approach.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A life insurer must decide whether to close its with-profits fund to new business while managing existing policyholders' fair treatment. Discuss why this represents a complex issue requiring integrated judgement.",
          answer:
            "This decision involves competing considerations across multiple topic areas at once &mdash; conduct obligations to existing policyholders (requiring continued fair bonus-setting despite a shrinking fund), capital implications of an ageing, closed fund with no new business to dilute legacy guarantee costs, and strategic implications for the insurer's wider business and reputation &mdash; requiring integrated judgement across conduct, capital and strategy rather than a single-dimension analysis.",
          note: "A strong answer explicitly draws on multiple topic areas together (conduct, capital, strategy), not just one in isolation, reflecting the integrated nature of complex real-world issues.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving a complex issue like this typically requires drawing on multiple SA2 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue required drawing on conduct regulation, capital management, and strategic assessment together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once, not a single isolated calculation or rule.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA2 syllabus.",
        },
      ],
    },
  ],
});

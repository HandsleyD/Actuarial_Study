// SA4 Pensions and Other Benefits: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SA4", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction",
          "description": "What SA4 adds to SP4: applying pensions principles to complex, practical problems in the UK regulatory, legislative and business environment, the five syllabus topics and their weightings, and what examiners expect from Specialist Advanced answers.",
          "cards": [
              {
                  "q": "What are the aims of SA4?",
                  "a": "To apply the main principles of providing pensions and other benefits to managing benefit arrangements in the context of the regulatory, legislative and business environment and professional requirements, and to provide solutions and recommendations to business problems relating to benefit arrangements and risk management.",
                  "explain": "SP4 asks 'what are the principles?'; SA4 asks 'what would you recommend here, and why?'."
              },
              {
                  "q": "List SA4's five topics and weightings.",
                  "a": "Pension and benefit provision and general business environment (30%); regulatory, legislative and taxation environment (15%); design and financing (20%); reporting/valuation and management (15%); general business and risk management (20%).",
                  "explain": "The largest topic is provision and the business environment — context-heavy questions dominate."
              },
              {
                  "q": "In which jurisdiction is SA4 primarily set?",
                  "a": "The UK — the Core Reading uses UK legislation, regulation and taxation, though candidates should also be able to compare other jurisdictions (syllabus 2.3).",
                  "explain": "Know the UK framework well, but reason from principles when a question describes another country."
              },
              {
                  "q": "How does an SA4 exam question typically differ from SP4?",
                  "a": "It sets a detailed, realistic scenario (e.g. a sponsor merger, a funding negotiation) and asks for advice, analysis and recommendations with justification.",
                  "explain": "Marks reward judgement and application: which issues matter most in this case, and what should be done."
              },
              {
                  "q": "What higher-order skills does SA4 test?",
                  "a": "Analysing complex problems; assessing the relevance of actuarial, economic and financial factors; evaluating results critically; proposing solutions and ranges of solutions.",
                  "explain": "Always finish with a recommendation or next steps when the question asks for advice."
              },
              {
                  "q": "How much of SA4 is about corporate activity and risk management?",
                  "a": "Corporate activity (Chapters 22–23), risk management (24) and incentive exercises (25) form a large part of the 'reporting and management' and 'business and risk management' topics.",
                  "explain": "These chapters have no direct SP4 equivalent and are frequently examined."
              },
              {
                  "q": "What should an SA4 candidate know about the Core Reading date?",
                  "a": "Exams are set on legislation and practice as at the Core Reading date (31 May 2024 for 2025 exams); later changes are not required knowledge.",
                  "explain": "Mentioning a relevant more recent development can still earn credit if applied sensibly."
              },
              {
                  "q": "Why is professional guidance central in SA4?",
                  "a": "UK pensions actuaries must comply with Technical Actuarial Standards (e.g. TAS 100, TAS 300) and the Actuaries' Code; advice to trustees and sponsors is shaped by these.",
                  "explain": "Chapter 5 covers guidance; exam answers should reference it where advice is being given."
              },
              {
                  "q": "Who are the typical 'clients' in SA4 scenarios?",
                  "a": "Trustees of DB or DC schemes, sponsoring employers (including corporate finance teams), individuals, insurers, and regulators.",
                  "explain": "Identify the client first — the right advice depends on whose interests you represent."
              },
              {
                  "q": "What is meant by 'emerging types of benefit provision' in SA4?",
                  "a": "Newer arrangements such as collective defined contribution (CDC), master trusts, superfunds/consolidators and flexible retirement income products.",
                  "explain": "Examiners like questions about how new structures change risk-sharing and security."
              },
              {
                  "q": "Why must SA4 answers consider the sponsor's business?",
                  "a": "Pension decisions affect the sponsor's cash, balance sheet, credit rating, corporate transactions and workforce; the best pensions solution must also work for the business.",
                  "explain": "Syllabus 5.2 even mentions 'adding value to the shareholders of the business'."
              },
              {
                  "q": "How should SA4 answers handle numbers?",
                  "a": "Show clear, reasonable calculations with stated assumptions, then interpret them — what they imply for the decision.",
                  "explain": "SA4 calculations are usually approximate ('estimate the effect of...'); the interpretation carries the marks."
              },
              {
                  "q": "What is the benefit of structured planning in SA4 answers?",
                  "a": "Long scenario questions reward breadth and relevance; a brief plan using frameworks (stakeholders, risks, options, pros/cons, recommendation) prevents omissions.",
                  "explain": "Chapter 27 covers problem-solving technique in detail."
              },
              {
                  "q": "What does 'other benefits' cover in SA4?",
                  "a": "Death-in-service, ill-health and income protection, healthcare, and other employee benefits alongside pensions, plus State benefits.",
                  "explain": "Questions sometimes ask about benefit packages as a whole, not only the pension scheme."
              },
              {
                  "q": "Why is SA4 considered demanding?",
                  "a": "It needs up-to-date UK knowledge, integration of many topics and commercial judgement, all under time pressure.",
                  "explain": "Practising full past-paper questions under timed conditions is the best preparation."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Key stakeholders",
          "description": "The roles and responsibilities of the State, the Pensions Regulator and other central bodies, employers, individuals, trustees, actuaries, investment advisers and other advisers in UK benefit provision, and how their interests interact in current and emerging arrangements.",
          "cards": [
              {
                  "q": "List the stakeholders named in SA4 syllabus 1.1.",
                  "a": "The State; any other central body within the jurisdiction; employers; individuals; trustees; actuaries; investment advisers; other advisers.",
                  "explain": "A ready framework for any 'consider the parties involved' question."
              },
              {
                  "q": "What is the role of the Pensions Regulator (TPR)?",
                  "a": "To protect members' benefits, reduce the risk of calls on the Pension Protection Fund, promote good scheme governance and administration, maximise employer compliance with auto-enrolment, and (for DB funding) minimise adverse impact on the sustainable growth of employers.",
                  "explain": "TPR's objectives can conflict — e.g. member security versus employer growth."
              },
              {
                  "q": "What is the role of the Pension Protection Fund (PPF)?",
                  "a": "To pay compensation to members of eligible DB schemes whose sponsoring employer becomes insolvent and whose scheme cannot secure at least PPF-level benefits, funded by a levy on eligible schemes and by the assets of schemes it takes on.",
                  "explain": "The PPF levy is risk-based, depending on insolvency risk and underfunding."
              },
              {
                  "q": "What does the Financial Conduct Authority regulate in pensions?",
                  "a": "Contract-based pensions (personal and group personal pensions), advice to individuals (e.g. on DB transfers) and financial services firms.",
                  "explain": "Trust-based schemes are regulated mainly by TPR, contract-based by the FCA."
              },
              {
                  "q": "What is the role of the Pensions Ombudsman?",
                  "a": "To investigate complaints and disputes about the administration of pension schemes, with decisions binding (subject to appeal on points of law).",
                  "explain": "A route for members to challenge maladministration."
              },
              {
                  "q": "What are trustees' main duties?",
                  "a": "Act in accordance with the trust deed and rules and the law; act in members' best interests; act prudently, impartially and with care; invest assets appropriately; take advice; keep records and pay benefits correctly.",
                  "explain": "Trustees must also have knowledge and understanding of the scheme and pensions law."
              },
              {
                  "q": "What statutory role does the scheme actuary have in UK DB schemes?",
                  "a": "Appointed by trustees, the scheme actuary advises on funding (technical provisions, recovery plans), certifies the schedule of contributions, and must whistleblow to TPR on material breaches.",
                  "explain": "The actuary advises; trustees (usually with employer agreement) decide."
              },
              {
                  "q": "What is the role of the sponsoring employer in a UK DB scheme?",
                  "a": "To pay contributions agreed in the schedule of contributions, agree funding assumptions and recovery plans (in most schemes), and stand behind the scheme financially, including section 75 debts.",
                  "explain": "Employer consent requirements vary with the scheme rules."
              },
              {
                  "q": "What is the role of investment advisers?",
                  "a": "Advising trustees on investment strategy, manager selection and monitoring; trustees must obtain written advice before preparing the Statement of Investment Principles.",
                  "explain": "Investment consultants to trust schemes are subject to CMA-derived objectives requirements."
              },
              {
                  "q": "What is a master trust?",
                  "a": "A multi-employer occupational trust-based scheme (usually DC) where unconnected employers participate, run by a single trustee board and subject to TPR authorisation.",
                  "explain": "Authorisation tests fitness and propriety, systems, financial sustainability and continuity strategy."
              },
              {
                  "q": "What is a DB superfund?",
                  "a": "A consolidation vehicle that takes over DB liabilities and replaces the sponsor covenant with a capital buffer, aiming to provide greater security than the ceding employer at lower cost than buy-out.",
                  "explain": "Subject to TPR's interim regime; trustees must assess whether transfer improves member security."
              },
              {
                  "q": "How do individuals interact with the pension system?",
                  "a": "As scheme members, as savers in personal pensions, as recipients of State pension, and increasingly as decision-makers on DC investment and retirement income choices.",
                  "explain": "Pension freedoms shifted more responsibility to individuals."
              },
              {
                  "q": "What are the responsibilities of an employer under auto-enrolment?",
                  "a": "Automatically enrol eligible jobholders into a qualifying scheme, pay minimum contributions, re-enrol periodically and keep records, and not induce employees to opt out.",
                  "explain": "TPR enforces these duties with fines."
              },
              {
                  "q": "Why might member-nominated trustees be required?",
                  "a": "At least one-third of trustees must be member-nominated in most trust-based schemes, giving members a voice in governance.",
                  "explain": "Balances employer influence on the trustee board."
              },
              {
                  "q": "How do the State's roles interact in UK pensions?",
                  "a": "The State provides the State Pension, legislates and regulates private provision (via TPR, FCA), grants tax relief, and underpins the PPF framework.",
                  "explain": "Changes in State Pension age or tax relief ripple into private scheme design."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Taxation",
          "description": "The UK tax regime for registered pension schemes: tax relief on contributions, the annual allowance and its variants, lump sum allowances after the abolition of the lifetime allowance, taxation of benefits and investment returns, National Insurance and salary sacrifice, and comparison with other jurisdictions.",
          "cards": [
              {
                  "q": "What is the general UK tax treatment of registered pension schemes?",
                  "a": "Broadly EET: relief on contributions (within limits), investment returns largely exempt, benefits taxed as income except a tax-free lump sum.",
                  "explain": "The tax advantages are the main reason for registered schemes' structure and limits."
              },
              {
                  "q": "How do employees get tax relief on their pension contributions?",
                  "a": "Via net pay (contributions deducted before income tax) or relief at source (contributions paid net of basic rate tax, with the provider reclaiming it, and higher-rate relief claimed via self-assessment).",
                  "explain": "Net pay arrangements disadvantaged some low earners, which led to a top-up for affected individuals."
              },
              {
                  "q": "What is the annual allowance (as at 2024/25)?",
                  "a": "£60,000 a year of pension input across all registered schemes; excess is taxed via the annual allowance charge, with carry forward of unused allowance from the previous three years.",
                  "explain": "For DB, pension input is measured as the increase in accrued benefit (×16) adjusted for inflation."
              },
              {
                  "q": "What is the tapered annual allowance?",
                  "a": "A reduction of the annual allowance for high earners with adjusted income above £260,000, by £1 for every £2 over, down to a minimum of £10,000.",
                  "explain": "It creates complexity and can disincentivise senior staff from accruing benefits."
              },
              {
                  "q": "What is the money purchase annual allowance (MPAA)?",
                  "a": "A reduced annual allowance (£10,000) for DC contributions once an individual has flexibly accessed DC benefits.",
                  "explain": "Prevents recycling of withdrawn pension savings for extra tax relief."
              },
              {
                  "q": "What replaced the lifetime allowance from April 2024?",
                  "a": "The lump sum allowance (£268,275 — the maximum tax-free lump sum in total) and the lump sum and death benefit allowance (£1,073,100 — covering tax-free lump sums including certain death benefits).",
                  "explain": "Pension income itself is no longer subject to an overall lifetime limit."
              },
              {
                  "q": "How are pensions in payment taxed?",
                  "a": "As earned income under PAYE, at the individual's marginal income tax rate.",
                  "explain": "No National Insurance is payable on pension income."
              },
              {
                  "q": "What is salary sacrifice?",
                  "a": "An arrangement where the employee gives up salary in exchange for an equal employer pension contribution, saving employee and employer National Insurance contributions.",
                  "explain": "Popular for efficiency; must be properly documented and can affect salary-linked benefits."
              },
              {
                  "q": "What are the tax implications of a refund of surplus to the employer?",
                  "a": "Surplus refunds to employers from registered schemes are subject to a special tax charge (reduced to 25% from April 2024), and require trustee agreement and legislative conditions.",
                  "explain": "Tax cost is a factor when trustees and sponsors consider surplus release."
              },
              {
                  "q": "How is a DB transfer out treated for tax?",
                  "a": "Transfers between registered schemes are tax-neutral; transfers to overseas schemes may incur an overseas transfer charge unless conditions are met.",
                  "explain": "Recognised overseas scheme rules exist to prevent tax leakage."
              },
              {
                  "q": "Why do tax rules affect scheme design?",
                  "a": "Designs are shaped to stay within allowances, use tax-free lump sums efficiently and avoid unauthorised payment charges.",
                  "explain": "E.g. offering higher earners cash alternatives when they hit the annual allowance."
              },
              {
                  "q": "What are unauthorised payments?",
                  "a": "Payments from a registered scheme that are not permitted by tax rules, attracting heavy tax charges on the member and the scheme.",
                  "explain": "Schemes must ensure options and benefit payments comply."
              },
              {
                  "q": "How are death benefits taxed in the UK (broad principle)?",
                  "a": "Death benefits from pensions are generally paid free of income tax if the member dies before 75 (subject to allowances), and taxed at the recipient's marginal rate if after 75.",
                  "explain": "Pension pots are usually outside the estate for inheritance tax (as at the Core Reading date)."
              },
              {
                  "q": "How might taxation differ in other jurisdictions?",
                  "a": "Some use TEE (taxing contributions, exempting benefits), others EET or ETT; limits may be on contributions or benefits; some require annuitisation.",
                  "explain": "Syllabus 2.3 asks candidates to compare jurisdictions."
              },
              {
                  "q": "What role does National Insurance play in pensions?",
                  "a": "NI contributions fund State benefits including the State Pension; employer contributions to pensions are generally NI-free, which drives salary sacrifice.",
                  "explain": "Changes in NI rates alter the value of salary sacrifice."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Security",
          "description": "How UK legislation seeks to secure non-State benefits: the scheme-specific funding regime, section 75 employer debt, the Pension Protection Fund and its levy, TPR's moral hazard powers, notifiable events and clearance, restrictions on employer-related investment, and DC protections.",
          "cards": [
              {
                  "q": "What is the statutory funding objective for UK DB schemes?",
                  "a": "Every scheme must have sufficient and appropriate assets to cover its technical provisions.",
                  "explain": "Technical provisions are calculated on prudent assumptions chosen by the trustees (usually with employer agreement)."
              },
              {
                  "q": "What documents must be produced under the scheme funding regime?",
                  "a": "Statement of funding principles; actuarial valuation (at least every three years) with annual reports in between; schedule of contributions; recovery plan if there's a deficit.",
                  "explain": "The revised regime (Pension Schemes Act 2021) adds a funding and investment strategy with a long-term objective."
              },
              {
                  "q": "By when must a UK DB valuation and any recovery plan be completed?",
                  "a": "Within 15 months of the effective date of the valuation, and sent to TPR.",
                  "explain": "A common deadline question — and a practical constraint in negotiations."
              },
              {
                  "q": "What is a section 75 debt?",
                  "a": "A debt due from the employer to the scheme equal to the deficit on a buy-out basis, triggered by events such as scheme wind-up, employer insolvency or an employer ceasing to participate in a multi-employer scheme.",
                  "explain": "Buy-out-based debts can be very large relative to ongoing funding deficits."
              },
              {
                  "q": "What is a section 179 valuation?",
                  "a": "A valuation on the PPF's compensation basis, used to calculate the risk-based PPF levy.",
                  "explain": "Schemes with assets above the section 179 liabilities pay only a small levy on underfunding."
              },
              {
                  "q": "What level of compensation does the PPF typically pay?",
                  "a": "100% of the pension for members over normal pension age at the assessment date (and ill-health/survivor pensions), and 90% for those below normal pension age (historically subject to a cap), with limited increases.",
                  "explain": "Compensation is less than full benefits for many members, so sponsor covenant still matters."
              },
              {
                  "q": "What are TPR's moral hazard powers?",
                  "a": "Contribution notices (requiring a payment from a person involved in an act that detrimentally affects a scheme) and financial support directions (requiring support for schemes of insufficiently resourced employers).",
                  "explain": "They discourage corporate actions that dump pension liabilities."
              },
              {
                  "q": "What is clearance?",
                  "a": "A voluntary process where parties to a corporate transaction ask TPR to confirm it will not use its moral hazard powers in relation to that transaction.",
                  "explain": "Relevant in Chapter 22's corporate activity."
              },
              {
                  "q": "What are notifiable events?",
                  "a": "Specified employer and scheme events (e.g. decision to wind up, certain corporate changes) that must be reported to TPR promptly.",
                  "explain": "Early notice lets TPR intervene where security is threatened."
              },
              {
                  "q": "What limit applies to employer-related investment?",
                  "a": "No more than 5% of a scheme's assets may be invested in employer-related investments (with some prohibited outright, e.g. employer loans).",
                  "explain": "Avoids concentration of risk in the sponsor."
              },
              {
                  "q": "What criminal offences did the Pension Schemes Act 2021 introduce?",
                  "a": "Offences of avoidance of employer debt and conduct risking accrued scheme benefits, with potential imprisonment and fines.",
                  "explain": "Increases the stakes for corporate decisions affecting DB schemes."
              },
              {
                  "q": "How are DC members' savings protected?",
                  "a": "Assets held in trust or with regulated providers; master trust authorisation; governance and value-for-money requirements; charge cap on default funds; Financial Services Compensation Scheme for some contract-based products.",
                  "explain": "Security in DC is about governance, charges and provider solvency, not funding."
              },
              {
                  "q": "What is a contingent asset in UK practice?",
                  "a": "A guarantee, security over assets or escrow that supports the scheme; certain types can reduce the PPF levy if they meet PPF requirements.",
                  "explain": "Integrates with covenant and funding (Chapters 11–12)."
              },
              {
                  "q": "How does legislation encourage appropriate non-State provision?",
                  "a": "Tax relief, auto-enrolment, flexible access to DC, and protections that increase confidence in saving.",
                  "explain": "Syllabus 2.1 pairs 'encouraging' provision with 'ensuring security'."
              },
              {
                  "q": "What is the role of the independent trustee in distressed schemes?",
                  "a": "TPR can appoint independent trustees where needed to protect members, e.g. on employer insolvency.",
                  "explain": "Independent trustees often run schemes through PPF assessment."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Professional guidance",
          "description": "Professional requirements for UK pensions actuaries — the Actuaries' Code, the FRC's Technical Actuarial Standards (TAS 100 and TAS 300), the statutory roles of scheme actuaries and the IFoA's practice standards — and how they shape advice to trustees and sponsors.",
          "cards": [
              {
                  "q": "What is the Actuaries' Code?",
                  "a": "The IFoA's principles-based code covering integrity, competence and care, impartiality, compliance, speaking up, and communication.",
                  "explain": "Applies to all actuarial work; exam answers can cite it when discussing conflicts or whistleblowing."
              },
              {
                  "q": "What is TAS 100?",
                  "a": "The FRC's generic Technical Actuarial Standard setting principles for technical actuarial work: judgement, data, assumptions, models and communication.",
                  "explain": "Applies to all actuarial work in its scope, including pensions."
              },
              {
                  "q": "What is TAS 300?",
                  "a": "The FRC's pensions-specific Technical Actuarial Standard covering funding, bulk transfers, benefit changes, member options and other pensions work.",
                  "explain": "It sets additional requirements, e.g. on information for trustees in funding decisions and communications on options."
              },
              {
                  "q": "Why must actuaries manage conflicts of interest?",
                  "a": "Advising both trustees and sponsor, or having firm-wide interests, could compromise impartiality; the Code requires identifying and managing conflicts.",
                  "explain": "Many firms separate trustee and employer advisory teams."
              },
              {
                  "q": "What is the scheme actuary's whistleblowing duty?",
                  "a": "To report to TPR where they have reasonable cause to believe a legal duty has not been complied with and the breach is likely to be of material significance.",
                  "explain": "Overrides confidentiality obligations."
              },
              {
                  "q": "What does TAS 300 require for member option communications?",
                  "a": "Clear information about the options, the factors used, risks and consequences, so members can make informed decisions.",
                  "explain": "Links to incentive exercises (Chapter 25)."
              },
              {
                  "q": "What practice standards apply to scheme actuaries?",
                  "a": "IFoA Actuarial Profession Standards (e.g. on the role of the scheme actuary and conflicts) and practising certificates for scheme actuaries.",
                  "explain": "Scheme actuaries must hold a practising certificate."
              },
              {
                  "q": "How does professional guidance affect funding advice?",
                  "a": "Actuaries must explain assumptions, their prudence, the effect of alternative choices and the risks, so trustees understand the implications.",
                  "explain": "Sensitivity analysis is a key requirement."
              },
              {
                  "q": "What is the importance of documentation under TAS 100?",
                  "a": "Work must be documented so that another actuary could understand and reproduce it.",
                  "explain": "Supports review and regulatory scrutiny."
              },
              {
                  "q": "How should actuaries communicate with lay trustees?",
                  "a": "Clearly, avoiding unnecessary jargon, highlighting key messages, uncertainty and risks.",
                  "explain": "The Code's communication principle and TAS 100 both apply."
              },
              {
                  "q": "What is the role of peer review?",
                  "a": "An independent check of work by another suitably qualified actuary, required for certain work under IFoA standards.",
                  "explain": "Reduces errors and bias."
              },
              {
                  "q": "How do accounting standards interact with professional guidance?",
                  "a": "Actuaries providing IAS 19 or FRS 102 figures must comply with TAS 100 while following the accounting standard's requirements.",
                  "explain": "The accounting standard governs the numbers; TAS governs the quality of the actuarial work."
              },
              {
                  "q": "What should an actuary do if asked by a sponsor to justify weaker assumptions?",
                  "a": "Give objective advice, explain the implications and risks, not simply agree; if acting for trustees, advise in their interest.",
                  "explain": "Integrity and impartiality principles."
              },
              {
                  "q": "Why is continuing professional development required?",
                  "a": "To keep knowledge up to date with changing legislation and practice.",
                  "explain": "UK pensions law changes frequently."
              },
              {
                  "q": "How do professional standards differ across jurisdictions?",
                  "a": "Other countries have different actuarial standards and statutory roles; the principles of competence, integrity and communication are common.",
                  "explain": "Syllabus 2.3 includes comparing environments."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Benefit provision",
          "description": "Factors influencing provision by the State, public and private sector employers and individuals in the UK — the new State Pension, public service schemes, auto-enrolment, DB decline and DC growth — and the main saving alternatives to pensions for individuals.",
          "cards": [
              {
                  "q": "What is the UK new State Pension?",
                  "a": "A flat-rate pension (introduced April 2016) for people reaching State Pension age after that date, based on National Insurance record (35 qualifying years for full amount, minimum 10).",
                  "explain": "Uprated under the 'triple lock' (highest of earnings growth, CPI or 2.5%) in recent years."
              },
              {
                  "q": "What is State Pension age heading towards?",
                  "a": "66 currently, rising to 67 between 2026 and 2028, with a further rise to 68 legislated for later.",
                  "explain": "Many schemes link normal pension age to State Pension age."
              },
              {
                  "q": "What factors influence State provision?",
                  "a": "Affordability (demographics, public finances), poverty prevention goals, political choices, and the balance with private provision.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "How are public service pension schemes provided?",
                  "a": "Mostly unfunded DB (e.g. NHS, teachers, civil service), career-average since 2015 reforms, with the Local Government Pension Scheme funded.",
                  "explain": "The McCloud remedy addressed age discrimination in the 2015 transitional protections."
              },
              {
                  "q": "Why have private-sector DB schemes declined?",
                  "a": "Rising costs from longevity and low interest rates, regulation and funding requirements, accounting volatility, and employers' desire for cost certainty.",
                  "explain": "Most private DB schemes are now closed to new members or accrual."
              },
              {
                  "q": "What are the minimum auto-enrolment contributions?",
                  "a": "8% of qualifying earnings in total, of which the employer pays at least 3%.",
                  "explain": "Qualifying earnings is a band (lower and upper thresholds) rather than full pay."
              },
              {
                  "q": "What factors influence employer provision?",
                  "a": "Recruitment and retention, cost and risk appetite, legal requirements (auto-enrolment), industry norms, tax efficiency and paternalism.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What are the main saving alternatives to pensions for individuals?",
                  "a": "ISAs (including Lifetime ISA), direct investments, property (including home ownership), bank savings, and paying off debt.",
                  "explain": "Syllabus 1.3 — compare on tax, access, flexibility and employer contributions."
              },
              {
                  "q": "How does a Lifetime ISA compare with a pension?",
                  "a": "Government bonus of 25% on contributions up to a limit, withdrawals tax-free for first home or after 60, but penalty on other withdrawals; no employer contribution usually.",
                  "explain": "For basic-rate taxpayers the incentive can be similar to pension relief, but pensions usually win with employer contributions."
              },
              {
                  "q": "Why do pensions usually beat ISAs for employees?",
                  "a": "Employer contributions, tax relief at marginal rate and a tax-free lump sum, versus ISAs' tax-free withdrawals but no relief on contributions.",
                  "explain": "Flexibility and access favour ISAs."
              },
              {
                  "q": "What are pension freedoms?",
                  "a": "From April 2015, DC members aged 55+ (57 from 2028) can take their fund flexibly — lump sums, drawdown or annuity — rather than being effectively required to buy an annuity.",
                  "explain": "Changed DC investment strategies and member risk."
              },
              {
                  "q": "What factors influence individuals' provision?",
                  "a": "Income, awareness, trust, behavioural biases, other assets (e.g. property), State pension expectations and tax incentives.",
                  "explain": "Auto-enrolment addresses inertia."
              },
              {
                  "q": "What is a group personal pension?",
                  "a": "A contract-based DC arrangement where the employer arranges individual personal pensions for employees with a provider.",
                  "explain": "FCA regulated; the employer may not have trustee responsibilities."
              },
              {
                  "q": "How can data analysis inform benefit design?",
                  "a": "Analysing membership data (ages, salaries, contribution choices, retirement behaviour) gives insight into current and future behaviour to target design.",
                  "explain": "Syllabus 3.2 explicitly includes this."
              },
              {
                  "q": "What is collective defined contribution (CDC) in the UK?",
                  "a": "A scheme (enabled by the Pension Schemes Act 2021) with fixed contributions and target benefits adjusted annually to balance the scheme; the first (Royal Mail) was authorised in 2024.",
                  "explain": "Pools longevity and investment risk across members."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Scheme design – general",
          "description": "Discussing the general design of pension arrangements in UK practice: DB, DC, hybrid, CDC and risk-sharing structures, governance requirements, affordability, risk sharing between parties, and how employer objectives and member data shape the choice.",
          "cards": [
              {
                  "q": "List the design factors in SA4 syllabus 3.2.",
                  "a": "Type of scheme (DB, DC, risk-sharing); governance requirements; level and form of benefits/contributions; method of financing; how risk is shared; choice of assets.",
                  "explain": "Plus using membership and other data to inform design."
              },
              {
                  "q": "How would you advise an employer choosing between DB and DC for new staff?",
                  "a": "Consider objectives (recruitment, retention), cost and risk appetite, affordability, competitors, workforce profile, governance capacity and legal minimums (auto-enrolment).",
                  "explain": "Most UK private employers choose DC for cost certainty."
              },
              {
                  "q": "What governance options exist for DC provision?",
                  "a": "Own trust-based scheme, master trust, or group personal pension.",
                  "explain": "Master trusts and GPPs offload governance burden from the employer."
              },
              {
                  "q": "What is a cash balance scheme in UK practice?",
                  "a": "A DB scheme providing a guaranteed lump sum at retirement (e.g. % of salary per year revalued), which members convert to income.",
                  "explain": "Employer bears pre-retirement investment risk."
              },
              {
                  "q": "How can risk sharing be achieved in DB design?",
                  "a": "Capped indexation, conditional increases, career-average, linking NPA to SPA, member contributions varying with cost.",
                  "explain": "Each shifts part of the risk to members."
              },
              {
                  "q": "What governance requirements apply to UK trust-based DC schemes?",
                  "a": "Chair's statement, value for members assessment, default fund design and review, charge cap, core financial transactions processed promptly and accurately.",
                  "explain": "Small schemes face consolidation pressure from value-for-members tests."
              },
              {
                  "q": "Why might an employer choose a master trust?",
                  "a": "Lower cost via scale, professional governance, reduced employer burden, and authorisation provides assurance.",
                  "explain": "Employers must still monitor the provider."
              },
              {
                  "q": "What is an employer's key risk in offering CDC?",
                  "a": "Minimal financial risk (contributions fixed), but reputational risk if benefits are cut and complexity of governance and communication.",
                  "explain": "Members bear the risk collectively."
              },
              {
                  "q": "How can membership data inform design?",
                  "a": "Age and salary profiles, turnover, retirement ages and contribution take-up show what benefits members value and how they behave.",
                  "explain": "E.g. low engagement argues for strong defaults."
              },
              {
                  "q": "What is the impact of workforce profile on design?",
                  "a": "Younger, mobile workforces value portable DC; older, long-serving ones value DB-style security.",
                  "explain": "Design should fit the people it serves."
              },
              {
                  "q": "How can an employer reduce DB cost without closing the scheme?",
                  "a": "Move to career-average, reduce accrual, increase member contributions, cap pensionable pay increases, raise NPA.",
                  "explain": "Consultation requirements apply to changes for active members."
              },
              {
                  "q": "What consultation is required for detrimental changes?",
                  "a": "Employers with 50+ employees must consult affected members for at least 60 days on listed changes (e.g. closure to accrual, increasing NPA).",
                  "explain": "Consultation affects timing and employee relations."
              },
              {
                  "q": "What are the governance implications of complex designs?",
                  "a": "More administration cost, communication difficulty and risk of error.",
                  "explain": "Simplicity has real value."
              },
              {
                  "q": "What are hybrid 'underpin' designs?",
                  "a": "DC benefit with a DB minimum, or vice versa.",
                  "explain": "Underpins create option-like employer costs."
              },
              {
                  "q": "How should an actuary present design options?",
                  "a": "Compare options on cost, risk, member outcomes, governance and administration, with a recommendation linked to the employer's objectives.",
                  "explain": "Tables of pros and cons help trustees and employers decide."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Scheme design – specific features",
          "description": "Specific benefit features in UK schemes: pensionable pay and service, accrual and normal pension age, statutory revaluation and indexation (LPI), GMPs and their equalisation, death and ill-health benefits, lump sums, and DC contribution and default fund structures.",
          "cards": [
              {
                  "q": "What is the statutory minimum revaluation for UK deferred DB pensions?",
                  "a": "In line with CPI capped at 5% a year for service before 6 April 2009 and 2.5% for later service (applied over the whole deferment period).",
                  "explain": "Scheme rules can be more generous; the index change from RPI to CPI reduced costs."
              },
              {
                  "q": "What is Limited Price Indexation (LPI) in payment?",
                  "a": "Statutory minimum increases on pensions in payment: inflation capped at 5% for service 6 April 1997 to 5 April 2005 and 2.5% for service after 5 April 2005.",
                  "explain": "Pre-1997 non-GMP pension has no statutory increase requirement."
              },
              {
                  "q": "What is a Guaranteed Minimum Pension (GMP)?",
                  "a": "The minimum pension that contracted-out DB schemes had to provide for service 1978–1997 in place of part of the State earnings-related pension.",
                  "explain": "GMPs have their own revaluation and increase rules and differ by sex."
              },
              {
                  "q": "What is GMP equalisation?",
                  "a": "The requirement (confirmed by the 2018 Lloyds Banking Group judgment) to equalise benefits between men and women for the effect of unequal GMPs for service 1990–1997.",
                  "explain": "Complex and costly; schemes can use conversion or dual-records methods."
              },
              {
                  "q": "When did contracting-out end?",
                  "a": "April 2016, with the introduction of the new State Pension.",
                  "explain": "Removal of the NI rebate increased employer and member costs."
              },
              {
                  "q": "What death benefits are typical in UK DB schemes?",
                  "a": "Lump sum death-in-service (often 2–4× salary), spouse's pension (commonly 50%), and five-year guarantee in payment.",
                  "explain": "Lump sums may be insured and paid under trustee discretion (to avoid IHT)."
              },
              {
                  "q": "What is the maximum tax-free lump sum?",
                  "a": "Generally 25% of the value of benefits, subject to the lump sum allowance (£268,275).",
                  "explain": "Many DB schemes allow commutation up to this limit."
              },
              {
                  "q": "How are ill-health benefits designed in UK DB schemes?",
                  "a": "Often tiered (e.g. unreduced accrued pension for partial incapacity, enhanced with prospective service for total incapacity), with trustee/employer consent and medical evidence.",
                  "explain": "Tiers control cost and anti-selection."
              },
              {
                  "q": "What are typical UK DC contribution structures?",
                  "a": "Fixed employer rate, matching (employer matches member up to a cap), tiered by age or service, or auto-enrolment minimums.",
                  "explain": "Matching encourages member saving."
              },
              {
                  "q": "What is the DC default fund charge cap?",
                  "a": "0.75% a year of funds under management for default arrangements in qualifying auto-enrolment schemes.",
                  "explain": "Performance fees are subject to specific rules."
              },
              {
                  "q": "How should a DC default fund be designed?",
                  "a": "Reflect membership profile and likely retirement choices, with growth phase and de-risking glide path targeting drawdown, annuity or cash as appropriate.",
                  "explain": "Post-2015, glide paths target flexible access for many."
              },
              {
                  "q": "What is pensionable salary in UK schemes?",
                  "a": "Defined by the rules — basic pay, possibly excluding bonuses and overtime, sometimes with an offset for State Pension integration.",
                  "explain": "Capping pensionable pay increases is a cost control."
              },
              {
                  "q": "Why might an employer link NPA to State Pension age?",
                  "a": "To keep scheme retirement ages aligned with longevity improvements and reduce cost.",
                  "explain": "Needs consultation for existing members."
              },
              {
                  "q": "What are Additional Voluntary Contributions (AVCs)?",
                  "a": "Extra member contributions to buy additional benefits, usually DC.",
                  "explain": "Can be used to top up lump sums tax-efficiently."
              },
              {
                  "q": "Why do bridging pensions exist?",
                  "a": "To provide extra income between early retirement and State Pension age.",
                  "explain": "Now less common but still in legacy schemes."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Designing options",
          "description": "Benefit options available before, at and after retirement in UK schemes — transfers, early and late retirement, commutation, PIE, flexible access and drawdown, dependants' options — and how to set terms and consent requirements balancing risk and reward for members, trustees and sponsors.",
          "cards": [
              {
                  "q": "List options typically available before retirement.",
                  "a": "Transfer out (cash equivalent transfer value), early retirement, AVCs, opting out, flexible retirement (partial retirement).",
                  "explain": "Syllabus 5.3 splits options before, at and after retirement."
              },
              {
                  "q": "List options typically available at retirement.",
                  "a": "Commutation for lump sum; pension increase exchange; dependant's pension choices; early/late retirement factors; DC choices (annuity, drawdown, UFPLS).",
                  "explain": "DC members also have flexible access choices."
              },
              {
                  "q": "List options typically available after retirement.",
                  "a": "Few in DB (e.g. trivial commutation); in DC drawdown, changing income levels, buying an annuity later.",
                  "explain": "Post-retirement options are mainly a DC feature."
              },
              {
                  "q": "How are cash equivalent transfer values calculated in the UK?",
                  "a": "On a best-estimate basis set by trustees after actuarial advice, reflecting the scheme's investment strategy; can be reduced if the scheme is underfunded (with an insufficiency report).",
                  "explain": "The trustees must give statements of entitlement and the value is guaranteed for three months."
              },
              {
                  "q": "What advice requirement applies to DB transfers?",
                  "a": "Members transferring safeguarded benefits worth more than £30,000 must take independent regulated advice.",
                  "explain": "Protects members giving up valuable guarantees."
              },
              {
                  "q": "What is a pension increase exchange (PIE)?",
                  "a": "An option at retirement to exchange non-statutory future increases for a higher initial pension.",
                  "explain": "Covered by an industry code of practice for incentive exercises."
              },
              {
                  "q": "What factors determine commutation factors?",
                  "a": "Cost to scheme (funding basis), competitors/market practice, simplicity, member fairness, legislative constraints (e.g. GMP), and employer policy.",
                  "explain": "Many schemes' factors are below the funding value of pension given up."
              },
              {
                  "q": "What consent requirements might apply to options?",
                  "a": "Employer or trustee consent for early retirement before a certain age or on unreduced terms; medical evidence for ill-health.",
                  "explain": "Consent controls cost and anti-selection."
              },
              {
                  "q": "How do options create risk and reward?",
                  "a": "Members gain flexibility; schemes may gain (e.g. commutation surpluses) or lose (e.g. subsidised early retirement), and anti-selection can increase costs.",
                  "explain": "Syllabus 5.3 — risk and reward for all parties."
              },
              {
                  "q": "What is uncrystallised funds pension lump sum (UFPLS)?",
                  "a": "A DC lump sum withdrawal where 25% is tax-free and 75% taxed as income.",
                  "explain": "Triggers the MPAA."
              },
              {
                  "q": "What is flexi-access drawdown?",
                  "a": "Keeping DC funds invested and drawing income as needed, with 25% tax-free lump sum available at start.",
                  "explain": "Members retain investment and longevity risk."
              },
              {
                  "q": "What is a late retirement factor?",
                  "a": "An uplift to a pension deferred after NPA, reflecting later start and shorter payment period.",
                  "explain": "Should be broadly cost-neutral."
              },
              {
                  "q": "Why might an employer subsidise early retirement?",
                  "a": "To manage workforce restructuring or as a benefit, but it creates scheme strain.",
                  "explain": "Strains may need to be paid by the employer."
              },
              {
                  "q": "How should options be communicated?",
                  "a": "Clearly, with risks and consequences, value information, and signposting to guidance (e.g. Pension Wise for DC).",
                  "explain": "TAS 300 and FCA rules apply."
              },
              {
                  "q": "How can anti-selection be limited in DB options?",
                  "a": "Terms close to cost-neutral, evidence requirements, time limits for choices.",
                  "explain": "E.g. ill-health commutation requires medical evidence."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Risks",
          "description": "The main risks to benefit arrangements in UK practice — to benefits, contributions, asset returns, exhaustion of assets in drawdown, and overall security — and appropriate mitigation strategies, including which risks can and cannot be insured.",
          "cards": [
              {
                  "q": "List the risk areas in SA4 syllabus 5.1.",
                  "a": "Level and incidence of benefits; of contributions; of return on assets; extent to which assets are exhausted during a member's lifetime; overall security of benefits.",
                  "explain": "Including which risks can be mitigated by insurance."
              },
              {
                  "q": "How can longevity risk be mitigated for a UK DB scheme?",
                  "a": "Buy-ins, buy-outs, longevity swaps, linking NPA to SPA, reducing dependants' benefits for future service.",
                  "explain": "Insurance-based solutions are widely used."
              },
              {
                  "q": "How can inflation risk be mitigated?",
                  "a": "Index-linked gilts, inflation swaps, capping increases for future service.",
                  "explain": "Liability hedging programmes via LDI."
              },
              {
                  "q": "How can interest rate risk be mitigated?",
                  "a": "Long gilts and swaps (LDI) matching liability duration.",
                  "explain": "The 2022 gilt crisis showed leverage/collateral risks."
              },
              {
                  "q": "What lessons came from the September 2022 LDI crisis?",
                  "a": "Rapid gilt yield rises triggered collateral calls on leveraged LDI funds, forcing asset sales; schemes needed larger liquidity buffers and better governance of leverage.",
                  "explain": "Regulators then required larger collateral buffers."
              },
              {
                  "q": "What risks affect DC members' outcomes?",
                  "a": "Investment risk, inflation, charges, longevity (in drawdown), poor decisions, and annuity price risk.",
                  "explain": "Defaults and guidance mitigate these."
              },
              {
                  "q": "How can the risk of exhausting drawdown funds be mitigated?",
                  "a": "Sustainable withdrawal rates, partial annuitisation, later-life annuity purchase, guidance and default decumulation pathways.",
                  "explain": "Investment pathways help non-advised drawdown users."
              },
              {
                  "q": "What risks affect the level of contributions for a DB sponsor?",
                  "a": "Market falls, lower yields, longevity, regulatory changes (e.g. funding code), and covenant changes affecting recovery plans.",
                  "explain": "Contingent funding can smooth contributions."
              },
              {
                  "q": "What are the main security risks for DB members?",
                  "a": "Sponsor insolvency with a deficit, fraud, poor governance, and operational failure.",
                  "explain": "The PPF provides a safety net."
              },
              {
                  "q": "Which risks can be insured in UK practice?",
                  "a": "Longevity (buy-in/out, swaps), death benefits (group life), ill-health (income protection), some investment guarantees.",
                  "explain": "Covenant, regulatory and reputational risks generally cannot."
              },
              {
                  "q": "What is operational risk in UK pensions?",
                  "a": "Errors in administration, data (GMP, benefit specs), cyber attacks, and scams.",
                  "explain": "TPR's general code sets governance expectations."
              },
              {
                  "q": "How can pension scams be mitigated?",
                  "a": "Due diligence on transfers, red flag checks under transfer regulations (2021), member warnings.",
                  "explain": "Trustees can refuse transfers with red flags."
              },
              {
                  "q": "What is climate risk for pension schemes?",
                  "a": "Physical and transition risks to investments and to sponsor covenants; larger schemes must report under TCFD-aligned requirements.",
                  "explain": "Governance and disclosure of climate risk are mandatory for larger schemes."
              },
              {
                  "q": "How can sponsor covenant risk be mitigated?",
                  "a": "Contingent assets, guarantees, negative pledges, stronger funding, and monitoring.",
                  "explain": "Integrated risk management."
              },
              {
                  "q": "Why should risk mitigation be proportionate?",
                  "a": "Costs of hedging or insurance must be weighed against risk reduction and affordability.",
                  "explain": "Risk appetite of trustees and sponsor guides choice."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Financing benefits",
          "description": "How UK benefit providers finance benefits: funding approaches and contribution timing, recovery plans, contingent funding arrangements (guarantees, escrows, asset-backed funding), insurance products, and the revised DB funding regime with a long-term objective.",
          "cards": [
              {
                  "q": "What contingent funding arrangements are used in UK DB schemes?",
                  "a": "Parent company guarantees, escrow accounts, charges over assets, letters of credit, surety bonds, asset-backed funding structures.",
                  "explain": "Syllabus 3.1 includes contingent funding."
              },
              {
                  "q": "What is asset-backed funding?",
                  "a": "An arrangement where the sponsor transfers income-producing assets (e.g. property) into a partnership whose income stream is paid to the scheme over time.",
                  "explain": "Tax-efficient for sponsors but complex and illiquid for trustees."
              },
              {
                  "q": "What does the revised UK DB funding regime require?",
                  "a": "A funding and investment strategy with a long-term objective of low dependency on the employer by the time the scheme is significantly mature, and a statement of strategy.",
                  "explain": "Introduced via the Pension Schemes Act 2021 and a new code of practice."
              },
              {
                  "q": "What is 'low dependency' funding?",
                  "a": "A funding level at which the scheme needs no further employer contributions under reasonably foreseeable circumstances, with assets invested in a low-risk way.",
                  "explain": "Typically gilts plus a small margin."
              },
              {
                  "q": "What factors affect the length of a recovery plan?",
                  "a": "Employer affordability and covenant, maturity, investment strategy, TPR expectations, and fairness to members.",
                  "explain": "TPR expects deficits to be removed as soon as the employer can reasonably afford."
              },
              {
                  "q": "What are the pros and cons of escrow accounts?",
                  "a": "Pros: addresses trapped surplus concerns; provides security. Cons: assets not invested for the scheme; conditions can be complex.",
                  "explain": "Useful where funding level is uncertain."
              },
              {
                  "q": "How can insurance products finance benefits?",
                  "a": "Buy-ins/buy-outs for pensions, group life for death benefits, income protection for ill-health.",
                  "explain": "Transfers risk at a price."
              },
              {
                  "q": "How does DC financing differ?",
                  "a": "Contributions are fixed; the financing question is about adequacy rather than funding deficits.",
                  "explain": "Auto-enrolment minimums set the floor."
              },
              {
                  "q": "What is a schedule of contributions?",
                  "a": "A document certified by the scheme actuary showing contributions payable by the employer and members.",
                  "explain": "Missed contributions must be reported to TPR."
              },
              {
                  "q": "Why might a sponsor pay contributions faster than required?",
                  "a": "Tax relief, improving security, reducing PPF levy, or to reach buy-out sooner.",
                  "explain": "Trapped surplus risk counterbalances."
              },
              {
                  "q": "How can the timing of contributions be managed?",
                  "a": "Upfront lump sums, level recovery contributions, back-end loading (if justified), or contingent triggers.",
                  "explain": "TPR scrutinises back-end loading."
              },
              {
                  "q": "What is surplus release?",
                  "a": "Returning surplus to the employer where rules permit, subject to tax and trustee agreement.",
                  "explain": "Recent policy discussions consider easing restrictions."
              },
              {
                  "q": "How does financing link to investment strategy?",
                  "a": "Investment risk taken should reflect the sponsor's ability to support it; strategy affects the discount rate and contributions.",
                  "explain": "Integrated risk management."
              },
              {
                  "q": "What is the effect of the PPF levy on financing?",
                  "a": "It is an additional cost; contingent assets and higher funding reduce it.",
                  "explain": "Levy has fallen significantly recently."
              },
              {
                  "q": "How can multi-employer schemes finance deficits?",
                  "a": "Via allocated contributions per employer, with section 75 debts on exit or flexible apportionment arrangements.",
                  "explain": "Complex apportionment options exist."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Sponsor covenant",
          "description": "Sponsor covenant in UK practice: what it is, when and how it is assessed (including TPR expectations), covenant grading, reliance periods, and integrating covenant with funding and investment decisions under the DB funding code.",
          "cards": [
              {
                  "q": "What does TPR expect in covenant assessment?",
                  "a": "An assessment of the employer's cash flow, prospects, and resilience; reliability and longevity periods; and support from contingent assets.",
                  "explain": "Covenant is a key input to funding and investment."
              },
              {
                  "q": "What is 'covenant reliability period'?",
                  "a": "The period over which trustees can have reasonable certainty about the employer's cash flow.",
                  "explain": "Recovery plans beyond this carry more uncertainty."
              },
              {
                  "q": "What is 'covenant longevity'?",
                  "a": "The period over which trustees can reasonably assume the employer will continue to support the scheme.",
                  "explain": "Used to judge how long to rely on covenant for risk."
              },
              {
                  "q": "When should covenant be assessed?",
                  "a": "At each valuation, on significant corporate events, and monitored regularly between valuations.",
                  "explain": "Syllabus 1.4 includes 'when/how it may be measured'."
              },
              {
                  "q": "What information is used to assess covenant?",
                  "a": "Financial statements, forecasts, cash flows, credit ratings, group structure, market position, management plans.",
                  "explain": "May require confidentiality agreements."
              },
              {
                  "q": "How does covenant integrate with investment?",
                  "a": "Stronger covenant supports more investment risk; weak covenant calls for de-risking.",
                  "explain": "Consider correlation between covenant and assets."
              },
              {
                  "q": "How does covenant integrate with funding?",
                  "a": "Weaker covenant supports more prudent technical provisions and shorter recovery plans.",
                  "explain": "TPR's integrated risk management guidance."
              },
              {
                  "q": "What is a covenant grade?",
                  "a": "A classification (e.g. strong, tending to strong, tending to weak, weak) used to summarise covenant strength.",
                  "explain": "Used by TPR and advisers."
              },
              {
                  "q": "How can covenant be strengthened?",
                  "a": "Guarantees, contingent assets, negative pledges, dividend-sharing arrangements.",
                  "explain": "Mitigates covenant leakage."
              },
              {
                  "q": "What is covenant leakage?",
                  "a": "Cash leaving the employer group (e.g. dividends) that could have supported the scheme.",
                  "explain": "TPR expects fair treatment relative to shareholders."
              },
              {
                  "q": "How do corporate events affect covenant?",
                  "a": "Takeovers, leveraged buyouts, restructurings may weaken covenant; trustees may seek mitigation.",
                  "explain": "Chapter 22 detail."
              },
              {
                  "q": "Why is covenant important for PPF levy?",
                  "a": "Insolvency risk scores affect the levy.",
                  "explain": "Links to Chapter 4."
              },
              {
                  "q": "What are the limitations of covenant assessment?",
                  "a": "Future uncertainty, information limitations, subjectivity.",
                  "explain": "Regular monitoring mitigates."
              },
              {
                  "q": "How can trustees monitor covenant?",
                  "a": "Information-sharing protocols, regular reporting, triggers for events.",
                  "explain": "Covenant is dynamic."
              },
              {
                  "q": "How should covenant affect the long-term objective?",
                  "a": "Weaker covenant may require reaching low dependency faster.",
                  "explain": "Revised funding code principle."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Investment classes",
          "description": "Asset classes available to UK pension schemes — gilts and index-linked gilts, corporate bonds, equities, property, infrastructure, private markets, hedge funds, LDI funds and derivatives, and insurance policies — and their characteristics relative to pension liabilities.",
          "cards": [
              {
                  "q": "Why are gilts important for UK pension schemes?",
                  "a": "They closely match pension liabilities (fixed and index-linked), are liquid, and are used in LDI.",
                  "explain": "Long index-linked gilts match inflation-linked pensions."
              },
              {
                  "q": "What is an LDI pooled fund?",
                  "a": "A fund using gilts, gilt repo and swaps (often leveraged) to hedge interest rate and inflation risk for smaller schemes.",
                  "explain": "Post-2022, leverage limits and collateral buffers were tightened."
              },
              {
                  "q": "What are the characteristics of buy-in policies as assets?",
                  "a": "Perfectly match covered liabilities; illiquid; counterparty risk to the insurer.",
                  "explain": "Often used for pensioners."
              },
              {
                  "q": "Why might a scheme hold private credit?",
                  "a": "Higher yields than public bonds, contractual cash flows, and diversification.",
                  "explain": "Illiquidity and valuation uncertainty."
              },
              {
                  "q": "How do equities fit in a UK DB portfolio?",
                  "a": "Return-seeking assets, reduced in mature schemes but still held for growth in immature schemes.",
                  "explain": "Global diversification common."
              },
              {
                  "q": "What are cashflow-driven investment (CDI) assets?",
                  "a": "Bonds and other contractual income assets selected to match the scheme's benefit payments.",
                  "explain": "Used by mature schemes approaching run-off."
              },
              {
                  "q": "Why is liquidity important for UK DB schemes post-2022?",
                  "a": "To meet collateral calls and benefit payments without forced sales.",
                  "explain": "Liquidity waterfalls and buffers are now standard."
              },
              {
                  "q": "What is the role of infrastructure in UK schemes?",
                  "a": "Long-term inflation-linked cash flows matching liabilities.",
                  "explain": "Government policy encourages productive finance."
              },
              {
                  "q": "What are the risks of hedge funds for schemes?",
                  "a": "High fees, complexity, opacity, liquidity restrictions.",
                  "explain": "Diversification benefits may be modest."
              },
              {
                  "q": "How are annuity policies used in DC?",
                  "a": "Purchased by members at retirement to secure income.",
                  "explain": "Lifestyle strategies target annuity prices."
              },
              {
                  "q": "What are illiquid assets' pros for DC defaults?",
                  "a": "Potential higher returns; government encourages via charge cap changes.",
                  "explain": "Daily dealing requirements are a barrier."
              },
              {
                  "q": "What are swaps used for in pension schemes?",
                  "a": "Hedging interest rates and inflation without holding physical bonds.",
                  "explain": "Counterparty and collateral risk."
              },
              {
                  "q": "What are the characteristics of property?",
                  "a": "Real returns, income, illiquidity, high transaction costs.",
                  "explain": "Long leases can match liabilities."
              },
              {
                  "q": "What is the role of cash?",
                  "a": "Liquidity and collateral.",
                  "explain": "Low return."
              },
              {
                  "q": "What are ESG considerations for asset classes?",
                  "a": "Carbon intensity, stewardship, social impact; statement of investment principles must cover ESG policy.",
                  "explain": "Mandatory disclosures for larger schemes."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Investment strategy",
          "description": "Analysing or proposing an investment strategy for a UK benefit provider: asset-liability matching, the risk–reward trade-off, adding value for the sponsor's shareholders, the Statement of Investment Principles, de-risking and end-game planning, DC default design, and the use of projection models.",
          "cards": [
              {
                  "q": "What must a UK trust-based scheme's Statement of Investment Principles cover?",
                  "a": "Investment objectives, risk policies, kinds of investments, balance, expected return, realisation, ESG and stewardship policies, and (for DC) default arrangement details.",
                  "explain": "Must be reviewed at least every three years."
              },
              {
                  "q": "How should a DB investment strategy balance risk and reward?",
                  "a": "Against the scheme's funding objectives, covenant strength, maturity and liquidity needs, and the sponsor's appetite for contribution volatility.",
                  "explain": "Syllabus 5.2."
              },
              {
                  "q": "What does 'adding value to shareholders' mean in pension investment?",
                  "a": "Choosing strategies that reduce the sponsor's cost of capital, balance sheet volatility or cash demands, e.g. hedging to reduce accounting volatility.",
                  "explain": "Syllabus 5.2 explicitly includes this."
              },
              {
                  "q": "What is a journey plan?",
                  "a": "A plan to move from the current funding level to a long-term objective (e.g. buy-out or low dependency) over time, with de-risking triggers.",
                  "explain": "Central to the revised funding code."
              },
              {
                  "q": "What are the end-game options for a UK DB scheme?",
                  "a": "Buy-out; run-off with low dependency; superfund transfer; surplus extraction.",
                  "explain": "Choice depends on funding, covenant and member interests."
              },
              {
                  "q": "How can projection models support strategy?",
                  "a": "Stochastic ALM showing funding level distributions, contribution requirements and probability of reaching targets.",
                  "explain": "Syllabus 5.2."
              },
              {
                  "q": "What should trustees consider when setting hedge ratios?",
                  "a": "Funding level, covenant, collateral availability, liquidity, and cost of hedging.",
                  "explain": "Typically hedge on a technical provisions or buy-out basis."
              },
              {
                  "q": "How is a DC default strategy set?",
                  "a": "Based on membership analysis, expected retirement options, risk tolerance, charges and value for members.",
                  "explain": "Target date funds are increasingly common."
              },
              {
                  "q": "What is a target date fund?",
                  "a": "A DC fund designed for members retiring around a certain date, automatically de-risking.",
                  "explain": "Simplifies default design."
              },
              {
                  "q": "Why consider illiquid assets in DC?",
                  "a": "Potential for higher net returns; government policy and Mansion House compact.",
                  "explain": "Must fit charge cap and liquidity requirements."
              },
              {
                  "q": "How should trustees monitor investment managers?",
                  "a": "Performance against benchmarks, fees, risk, ESG stewardship, and operational due diligence.",
                  "explain": "Investment consultant objectives are required."
              },
              {
                  "q": "What is the effect of maturity on strategy?",
                  "a": "Mature schemes need cash flow and liquidity; CDI and buy-ins become attractive.",
                  "explain": "Immature schemes can hold growth assets."
              },
              {
                  "q": "How should strategy consider covenant?",
                  "a": "Investment risk should be supportable by the employer.",
                  "explain": "Integrated risk management."
              },
              {
                  "q": "What is the role of stress testing in investment strategy?",
                  "a": "Test outcomes under severe scenarios (e.g. 2022-like yield spike) to ensure resilience.",
                  "explain": "Complements stochastic models."
              },
              {
                  "q": "How often should strategy be reviewed?",
                  "a": "At least every three years and after significant changes in funding level, covenant or markets.",
                  "explain": "SIP review cycle."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Valuations",
          "description": "Valuing assets, past and future benefits and contributions in UK practice for different purposes — technical provisions, solvency (buy-out), section 179, accounting, transfer values — why methods and assumptions differ, valuing guarantees and options, and sensitivity and reasonableness checks.",
          "cards": [
              {
                  "q": "List the main valuation purposes for a UK DB scheme.",
                  "a": "Scheme funding (technical provisions); solvency/buy-out estimate; section 179 (PPF levy); accounting (IAS 19/FRS 102); transfer values; section 75 debt; benefit change costings.",
                  "explain": "Each has a different basis."
              },
              {
                  "q": "What are technical provisions?",
                  "a": "The amount required, on an actuarial calculation, to make provision for the scheme's liabilities, using prudent assumptions chosen by the trustees.",
                  "explain": "The funding target under the statutory funding objective."
              },
              {
                  "q": "Why must a solvency estimate be included in the actuarial valuation report?",
                  "a": "To show members and trustees the funding position if the scheme were wound up and benefits secured with an insurer.",
                  "explain": "Required disclosure under the funding regime."
              },
              {
                  "q": "How do accounting and funding valuations differ?",
                  "a": "Accounting uses best-estimate assumptions and an AA corporate bond discount rate; funding uses prudent trustee-chosen assumptions reflecting investment strategy and covenant.",
                  "explain": "Different users, different purposes."
              },
              {
                  "q": "How can guarantees and options be valued?",
                  "a": "Deterministically at expected take-up or most costly exercise, or stochastically (e.g. LPI caps and floors valued via inflation option pricing).",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "How is LPI valued market-consistently?",
                  "a": "Using inflation option models (e.g. Black-type on inflation) to value caps and floors, or LPI swap prices where available.",
                  "explain": "Deterministic approach ignores volatility."
              },
              {
                  "q": "What reasonableness checks apply to valuation results?",
                  "a": "Roll-forward comparisons, analysis of surplus reconciliation, per-member values, comparison with similar schemes.",
                  "explain": "Catch errors."
              },
              {
                  "q": "Why present sensitivities in a valuation report?",
                  "a": "To show trustees and sponsors how results move under changes in key assumptions.",
                  "explain": "TAS 300 requirement to explain risk."
              },
              {
                  "q": "How should the valuation reflect investment strategy?",
                  "a": "Discount rate linked to expected returns on the actual strategy (with prudence), and adjusting over time as the scheme de-risks.",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "What is a gilts-plus discount rate?",
                  "a": "Discount rate set at gilt yields plus a margin reflecting expected outperformance of scheme assets, adjusted for prudence.",
                  "explain": "Common in UK practice."
              },
              {
                  "q": "What is a dual discount rate approach?",
                  "a": "Different discount rates pre- and post-retirement, reflecting de-risking at retirement.",
                  "explain": "Captures maturity effect."
              },
              {
                  "q": "How are assets valued for UK funding?",
                  "a": "At market value (bid value) as at the valuation date, including buy-ins at value of the liabilities they cover.",
                  "explain": "Consistency with liabilities."
              },
              {
                  "q": "What is a section 75 debt calculation basis?",
                  "a": "Buy-out basis, estimating the cost of securing benefits with an insurer.",
                  "explain": "Usually higher than technical provisions."
              },
              {
                  "q": "Why do transfer value bases differ from funding bases?",
                  "a": "Transfer values are best-estimate, not prudent; funding includes prudence.",
                  "explain": "Transfers on best estimate can create funding surpluses."
              },
              {
                  "q": "How can the valuation of future benefits inform contribution decisions?",
                  "a": "Future service contribution rate calculated from the value of benefits accruing.",
                  "explain": "Links to method choice (Chapter 16)."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Methods and models",
          "description": "Choosing an appropriate funding method and models for specific UK scenarios — projected unit, attained age, low-dependency and gilts-based approaches, future service costs — and using projection and ALM models for strategy and decision-making.",
          "cards": [
              {
                  "q": "Which funding method is most common for UK technical provisions?",
                  "a": "The projected unit method (with salary projection for actives) for past service liabilities.",
                  "explain": "Future service contribution rates often calculated on PUM with a one-year control period."
              },
              {
                  "q": "When might the attained age method be appropriate?",
                  "a": "For schemes closed to new entrants, to give more stable future service contribution rates.",
                  "explain": "PUM rates rise as the closed membership ages."
              },
              {
                  "q": "What are the implications of choosing PUM for a closed scheme?",
                  "a": "Future service contribution rate will increase over time as the active population ages.",
                  "explain": "Employers must plan for rising costs."
              },
              {
                  "q": "What is a low-dependency funding target?",
                  "a": "A funding level on a low-risk basis (e.g. gilts + small margin) at which employer support is unlikely to be needed.",
                  "explain": "Long-term objective under the revised regime."
              },
              {
                  "q": "How can models be used in funding negotiations?",
                  "a": "Projecting funding levels and contributions under alternative recovery plans and investment strategies.",
                  "explain": "Supports trustee–employer agreement."
              },
              {
                  "q": "What is an ALM model?",
                  "a": "A stochastic model projecting assets and liabilities together to evaluate strategies.",
                  "explain": "Syllabus 5.2 includes projection models."
              },
              {
                  "q": "What should be considered in choosing a method?",
                  "a": "Stability, security, simplicity, consistency with objectives, membership profile and regulatory requirements.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "How are future service costs typically communicated?",
                  "a": "As a percentage of pensionable salary, split between employer and members.",
                  "explain": "Include expenses and PPF levy where relevant."
              },
              {
                  "q": "What models are used for DC?",
                  "a": "Projection models for member outcomes, glide path design and value for members analysis.",
                  "explain": "Stochastic models show outcome ranges."
              },
              {
                  "q": "How can models support benefit change decisions?",
                  "a": "Cost projections of options (e.g. closure, career average) with sensitivities.",
                  "explain": "Informs consultation."
              },
              {
                  "q": "What are model risks in pensions?",
                  "a": "Errors, inappropriate assumptions, oversimplified benefits, misinterpretation.",
                  "explain": "TAS 100 governance."
              },
              {
                  "q": "What is a roll-forward model?",
                  "a": "Approximating valuation results between full valuations.",
                  "explain": "Used for monitoring and accounting."
              },
              {
                  "q": "Why use a yield curve in UK valuations?",
                  "a": "For accuracy with non-flat curves and consistency with hedging.",
                  "explain": "Single rates are simpler."
              },
              {
                  "q": "How can models test covenant scenarios?",
                  "a": "Combine investment and employer stress scenarios.",
                  "explain": "Integrated risk management."
              },
              {
                  "q": "How should model outputs be presented?",
                  "a": "Clearly, with key messages, ranges and limitations.",
                  "explain": "Communication principles."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Valuation data",
          "description": "Data requirements for UK pension valuations and exercises — member, benefit, asset and accounting data — data quality issues (GMPs, benefit specifications, missing records), TPR expectations on record-keeping, and data cleansing ahead of buy-out.",
          "cards": [
              {
                  "q": "What data is needed for a UK DB valuation?",
                  "a": "Member data (DOB, sex, service, salary, pension amounts, GMP split, tranches with different increases), benefit rules, asset data, and accounting cash flows.",
                  "explain": "Tranches by service period are essential for LPI and revaluation."
              },
              {
                  "q": "Why is GMP data important?",
                  "a": "GMP affects increase rules and equalisation; errors lead to incorrect liabilities and payments.",
                  "explain": "GMP reconciliation with HMRC was a major exercise."
              },
              {
                  "q": "What is a benefit specification?",
                  "a": "A detailed document setting out exactly how benefits are calculated for each member category.",
                  "explain": "Essential before buy-out."
              },
              {
                  "q": "What are common data issues in UK schemes?",
                  "a": "Missing addresses, incorrect GMPs, incomplete historic benefit changes, marital status unknown.",
                  "explain": "Data cleansing improves insurer pricing."
              },
              {
                  "q": "What does TPR expect on data?",
                  "a": "Regular measurement of common and scheme-specific data scores, and improvement plans.",
                  "explain": "Part of TPR's governance expectations."
              },
              {
                  "q": "How should an actuary deal with missing data?",
                  "a": "Obtain corrections, use prudent assumptions, disclose limitations.",
                  "explain": "TAS 100 requirement."
              },
              {
                  "q": "Why is marital status data important?",
                  "a": "Determines spouse's pension liabilities.",
                  "explain": "Proportion married assumption used if unknown."
              },
              {
                  "q": "What data do insurers need for buy-in pricing?",
                  "a": "Full individual data, postcodes, benefit specs, historic experience.",
                  "explain": "Better data reduces premiums."
              },
              {
                  "q": "What checks are performed on data?",
                  "a": "Movement reconciliation, consistency checks, comparison with previous data, reconciliation to payroll and accounts.",
                  "explain": "Standard checks."
              },
              {
                  "q": "How does data quality affect accounting valuations?",
                  "a": "Poor data introduces errors in reported liabilities.",
                  "explain": "Accounting may use roll-forward."
              },
              {
                  "q": "What is a data cleanse?",
                  "a": "A project to correct and complete member records.",
                  "explain": "Common before buy-out."
              },
              {
                  "q": "Why is dependant data important in buy-out?",
                  "a": "Insurers price dependant pensions; unknown dependant details introduce margins.",
                  "explain": "Collecting it reduces cost."
              },
              {
                  "q": "How can data inform benefit design?",
                  "a": "Analysing behaviours (options take-up, retirement ages).",
                  "explain": "Syllabus 3.2."
              },
              {
                  "q": "What are the risks of poor data at wind-up?",
                  "a": "Incorrect benefits secured, residual risk, insurer disputes.",
                  "explain": "Trustees seek residual risk cover."
              },
              {
                  "q": "What is 'residual risk' cover?",
                  "a": "Insurance protecting trustees against unknown liabilities after buy-out (e.g. data errors).",
                  "explain": "Often part of buy-out contracts."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Assumptions",
          "description": "Setting financial and demographic assumptions for UK valuations in specific scenarios — discount rates, RPI/CPI inflation and the RPI reform, LPI, salary growth, mortality (CMI model), commutation, withdrawal and early retirement — with the prudence and stakeholder considerations for each purpose.",
          "cards": [
              {
                  "q": "How is UK inflation assumption derived?",
                  "a": "From market-implied RPI (gilt breakeven) less an inflation risk premium, with CPI derived by deducting an RPI–CPI wedge.",
                  "explain": "RPI reform from 2030 aligns RPI with CPIH, narrowing the wedge after 2030."
              },
              {
                  "q": "What is the RPI reform?",
                  "a": "From 2030, RPI will be calculated using CPIH methods, effectively removing the gap between RPI and CPIH.",
                  "explain": "Affects valuation of RPI-linked liabilities and index-linked gilts."
              },
              {
                  "q": "What mortality tables are commonly used in UK pensions?",
                  "a": "Self-administered pension scheme (SAPS) base tables with adjustments, and CMI projection model for improvements.",
                  "explain": "Postcode or scheme experience adjustments refine base tables."
              },
              {
                  "q": "What is the CMI model?",
                  "a": "The Continuous Mortality Investigation's model for projecting mortality improvements, with a long-term rate chosen by the user.",
                  "explain": "Recent versions address COVID-19 period weighting."
              },
              {
                  "q": "How is the discount rate set for UK technical provisions?",
                  "a": "Gilts plus a prudent margin reflecting investment strategy, or dual rates pre/post retirement.",
                  "explain": "Prudence and covenant considered."
              },
              {
                  "q": "What commutation assumption is typically made?",
                  "a": "A proportion of maximum commutation taken, based on experience, using the scheme's factors.",
                  "explain": "Commutation can reduce liabilities if factors are below cost."
              },
              {
                  "q": "How are salary growth assumptions set?",
                  "a": "CPI or RPI plus a margin based on sponsor pay policy.",
                  "explain": "Less relevant for closed schemes."
              },
              {
                  "q": "Why might prudence differ across assumptions?",
                  "a": "Trustees may put prudence in the discount rate but best estimate elsewhere.",
                  "explain": "Must be documented in the statement of funding principles."
              },
              {
                  "q": "What demographic assumptions matter most for a mature scheme?",
                  "a": "Mortality (base and improvements), proportion married and spouse ages.",
                  "explain": "Withdrawal is less relevant."
              },
              {
                  "q": "How are transfer value assumptions set?",
                  "a": "Best estimate with regard to the scheme's investment strategy.",
                  "explain": "Trustees' responsibility."
              },
              {
                  "q": "How are accounting assumptions set?",
                  "a": "By the employer with actuarial advice, best estimate, AA corporate bond discount rate.",
                  "explain": "Auditors review them."
              },
              {
                  "q": "Why consider stakeholder objectives in setting assumptions?",
                  "a": "Trustees want security, employers want affordability, regulators want adequate funding.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "How is expense allowance made?",
                  "a": "Explicit reserve or addition to future service rate; PPF levy included.",
                  "explain": "Depends on who pays expenses."
              },
              {
                  "q": "What is the effect of COVID-19 on mortality assumptions?",
                  "a": "Excess deaths in 2020–22 and uncertainty about future trends led to adjustments in CMI weighting.",
                  "explain": "Judgement required."
              },
              {
                  "q": "How should buy-out assumptions be estimated?",
                  "a": "Using insurer pricing indications: low discount rate (gilts/swaps + margin), prudent mortality, expense loading.",
                  "explain": "Buy-out market conditions vary."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Managing experience",
          "description": "Issues concerning surplus and deficit in UK schemes — identifying sources, factors affecting how a surplus or deficit is treated (rules, tax, TPR, covenant, member expectations), surplus extraction, discretionary increases and trapped surplus — and managing experience between valuations.",
          "cards": [
              {
                  "q": "What are the main sources of surplus/deficit in UK DB schemes?",
                  "a": "Investment returns versus discount rate, inflation, mortality, commutation, transfers, early retirements, contributions, assumption changes, GMP equalisation, data corrections.",
                  "explain": "Syllabus 4.5."
              },
              {
                  "q": "What factors affect how a surplus is treated?",
                  "a": "Scheme rules (powers over surplus), tax on refunds, TPR guidance, funding level on other bases, covenant, member expectations, trustees' duties.",
                  "explain": "Syllabus 4.5."
              },
              {
                  "q": "What is trapped surplus?",
                  "a": "Surplus that the sponsor cannot recover (e.g. due to rules or tax), making overfunding costly.",
                  "explain": "Contingent funding helps avoid it."
              },
              {
                  "q": "How might a surplus be used?",
                  "a": "Contribution holidays, benefit improvements, discretionary increases, surplus refund, de-risking, funding DC contributions (where allowed).",
                  "explain": "Each has stakeholder implications."
              },
              {
                  "q": "What are the implications of paying discretionary increases?",
                  "a": "Improves member benefits, uses surplus, may create expectations.",
                  "explain": "Should be documented as discretionary."
              },
              {
                  "q": "How should a deficit be managed?",
                  "a": "Recovery plan contributions, contingent assets, investment changes, benefit changes for future service.",
                  "explain": "Covenant-dependent."
              },
              {
                  "q": "How can experience be managed between valuations?",
                  "a": "Regular funding updates, triggers for action, contribution adjustments.",
                  "explain": "Journey plan monitoring."
              },
              {
                  "q": "What is a funding trigger?",
                  "a": "A pre-agreed funding level at which action is taken (e.g. de-risking or contribution change).",
                  "explain": "Automates responses."
              },
              {
                  "q": "How do commutation factors affect experience?",
                  "a": "Low factors generate surplus on commutation.",
                  "explain": "Links to options."
              },
              {
                  "q": "How does GMP equalisation affect funding?",
                  "a": "Increases liabilities, typically small but administratively complex.",
                  "explain": "Recognised as an experience item or assumption change."
              },
              {
                  "q": "What is the role of TPR in surplus extraction?",
                  "a": "Ensuring security of benefits before surplus is returned; policy discussions on easing surplus release.",
                  "explain": "Legislation requires trustees to be satisfied."
              },
              {
                  "q": "How should surplus be communicated?",
                  "a": "Clearly, explaining basis, uncertainty and intended use.",
                  "explain": "Avoid raising unrealistic expectations."
              },
              {
                  "q": "Why might trustees keep surplus as a buffer?",
                  "a": "To protect against adverse experience, especially if buy-out not yet affordable.",
                  "explain": "Prudence."
              },
              {
                  "q": "How does surplus affect PPF levy?",
                  "a": "Better funding reduces the underfunding-risk element of the levy.",
                  "explain": "Section 179 basis."
              },
              {
                  "q": "What are the risks of contribution holidays?",
                  "a": "Surplus may disappear with markets; restarting contributions can be hard.",
                  "explain": "Consider covenant."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Analysis of experience",
          "description": "Monitoring and assessing the financial significance of deviations from expectations in UK schemes — data required, methods for analysis of surplus and experience studies, quantifying key items (mortality, investment, inflation, member options) and using results to identify issues and develop solutions.",
          "cards": [
              {
                  "q": "What is the purpose of an analysis of surplus in UK schemes?",
                  "a": "To explain the change in funding position between valuations by source, validate calculations and inform assumptions.",
                  "explain": "Syllabus 4.5."
              },
              {
                  "q": "What data is required for analysis of experience?",
                  "a": "Membership movements, benefit payments, contributions, investment returns, salary increases, pension increases, option take-up.",
                  "explain": "Syllabus 4.5 lists data required."
              },
              {
                  "q": "How is mortality experience quantified?",
                  "a": "Actual versus expected deaths (lives and amounts), and the financial effect (reserves released minus benefits paid).",
                  "explain": "Amounts-weighted analysis."
              },
              {
                  "q": "How is investment experience quantified?",
                  "a": "Actual return versus assumed discount rate on assets, applied to asset values.",
                  "explain": "Often the largest item."
              },
              {
                  "q": "How is inflation experience quantified?",
                  "a": "Actual increases versus assumed, applied to relevant liabilities.",
                  "explain": "Recent high inflation created large deficits for uncapped schemes, less so for capped."
              },
              {
                  "q": "How are option take-up effects measured?",
                  "a": "Compare actual commutation/transfer/early retirement values with reserves released.",
                  "explain": "Shows option term generosity."
              },
              {
                  "q": "How can results be used?",
                  "a": "Update assumptions, change option terms, adjust investment strategy, identify data issues.",
                  "explain": "Syllabus 4.5."
              },
              {
                  "q": "What is a methods-based approach to analysis of surplus?",
                  "a": "Step-by-step revaluation changing one item at a time, attributing the change to each item.",
                  "explain": "Order of steps affects attribution."
              },
              {
                  "q": "Why is order important in the analysis?",
                  "a": "Interactions between items mean attribution depends on sequence.",
                  "explain": "Use consistent ordering."
              },
              {
                  "q": "How is membership experience analysed?",
                  "a": "Reconcile member numbers by category and compare actual decrements with expected.",
                  "explain": "Identifies data errors."
              },
              {
                  "q": "What is a 'miscellaneous' item in analysis?",
                  "a": "Residual unexplained change, which should be small.",
                  "explain": "Large residuals indicate errors."
              },
              {
                  "q": "How should one-off events be treated?",
                  "a": "Separately identified, not used to change assumptions.",
                  "explain": "E.g. a bulk transfer."
              },
              {
                  "q": "Why analyse experience for DC schemes?",
                  "a": "Assess value for members, investment performance, charges, member behaviours.",
                  "explain": "Governance reporting."
              },
              {
                  "q": "How does experience analysis support covenant discussions?",
                  "a": "Shows the extent of employer support needed and emerging risks.",
                  "explain": "Informs negotiations."
              },
              {
                  "q": "What is the link to the actuarial control cycle?",
                  "a": "Monitoring feeds back into assumptions and decisions.",
                  "explain": "Completes the cycle."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Accounting",
          "description": "Pension accounting in UK practice under IAS 19 and FRS 102: objectives, recognition and disclosure requirements (including directors' remuneration), calculating the cost of benefit provision, key assumptions, asset ceiling, and the interaction between accounting and funding.",
          "cards": [
              {
                  "q": "Which accounting standards apply to UK company pension costs?",
                  "a": "IAS 19 for companies using IFRS; FRS 102 (section 28) for UK GAAP.",
                  "explain": "Both broadly similar for DB."
              },
              {
                  "q": "What discount rate does IAS 19 require?",
                  "a": "Market yields on high-quality (AA) corporate bonds of appropriate term and currency.",
                  "explain": "Leads to different results from funding bases."
              },
              {
                  "q": "What are the components of IAS 19 pension cost?",
                  "a": "Service cost (current and past), net interest on the net defined benefit liability/asset, and remeasurements (in OCI).",
                  "explain": "Settlements and curtailments recognised in P&L."
              },
              {
                  "q": "What is the asset ceiling in IAS 19?",
                  "a": "A limit on recognising a pension surplus to the economic benefit available (refunds or reduced contributions).",
                  "explain": "IFRIC 14 guidance; minimum funding requirements can create liabilities."
              },
              {
                  "q": "What disclosures are required under IAS 19?",
                  "a": "Description of plans, reconciliation of obligations and assets, assumptions, sensitivities, maturity profile, funding arrangements.",
                  "explain": "Syllabus 4.4 includes disclosure requirements."
              },
              {
                  "q": "What directors' remuneration disclosures relate to pensions?",
                  "a": "Pension entitlements and increases for directors in remuneration reports (e.g. single total figure, changes in accrued pension).",
                  "explain": "Syllabus 4.4 mentions directors' remuneration."
              },
              {
                  "q": "How do accounting and funding interact?",
                  "a": "Different bases can show surplus in accounts while funding shows deficit, affecting company decisions.",
                  "explain": "Explaining differences is common."
              },
              {
                  "q": "How are DC costs accounted for?",
                  "a": "Contributions payable in the period are expensed.",
                  "explain": "No balance sheet liability."
              },
              {
                  "q": "What are the objectives of pension accounting?",
                  "a": "Faithful representation of the cost and obligations of benefits for investors.",
                  "explain": "Syllabus 4.4."
              },
              {
                  "q": "What is a settlement under IAS 19?",
                  "a": "A transaction eliminating further obligations for part or all benefits (e.g. buy-out).",
                  "explain": "Gain or loss recognised in P&L."
              },
              {
                  "q": "What is a curtailment?",
                  "a": "A significant reduction in the number of employees covered or benefits accrued (e.g. closure).",
                  "explain": "Past service cost recognised."
              },
              {
                  "q": "How does hedging affect accounting volatility?",
                  "a": "Hedging interest and inflation reduces volatility, but corporate bond discount rate creates credit spread mismatch.",
                  "explain": "Holding corporate bonds can reduce this."
              },
              {
                  "q": "Who sets accounting assumptions?",
                  "a": "The company's directors with actuarial advice, reviewed by auditors.",
                  "explain": "Best estimate required."
              },
              {
                  "q": "How does a buy-in affect the accounts?",
                  "a": "The buy-in asset is valued at the obligation it covers; the difference between premium and IAS 19 value hits OCI.",
                  "explain": "Buy-out is a settlement."
              },
              {
                  "q": "How might accounting drive corporate pension decisions?",
                  "a": "Companies may de-risk or close schemes to reduce balance sheet volatility.",
                  "explain": "Shareholder value focus."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Corporate activity – general",
          "description": "Pensions issues arising from corporate activity — acquisitions, disposals, mergers, restructurings, scheme mergers — the interests and responsibilities of the parties, sale and purchase agreement terms, TPR clearance and moral hazard, section 75 triggers, and TUPE.",
          "cards": [
              {
                  "q": "What pensions issues arise when a company is sold?",
                  "a": "Whether the scheme moves with the business, section 75 triggers, covenant changes, price adjustments for deficits, transfer of members, and TPR involvement.",
                  "explain": "Syllabus 4.1."
              },
              {
                  "q": "Who are the parties in a corporate transaction involving pensions?",
                  "a": "Vendor, purchaser, trustees of the vendor's and purchaser's schemes, members, TPR, advisers.",
                  "explain": "Each has different interests."
              },
              {
                  "q": "What is a sale and purchase agreement (SPA) pension clause?",
                  "a": "Terms setting out how pensions are treated: transfer arrangements, bulk transfer value basis, warranties, indemnities and price adjustments.",
                  "explain": "Syllabus 4.1 — terms in legal documentation."
              },
              {
                  "q": "What is the purchaser's main pension concern?",
                  "a": "Hidden or understated liabilities, future cost, covenant obligations and moral hazard exposure.",
                  "explain": "Due diligence addresses this."
              },
              {
                  "q": "What is the trustees' main concern in a transaction?",
                  "a": "Whether the transaction weakens the covenant or security of members' benefits, and seeking mitigation.",
                  "explain": "Trustees may seek extra contributions or guarantees."
              },
              {
                  "q": "What is TUPE in pensions context?",
                  "a": "When a business transfers, employees' contracts transfer, but occupational DB pension rights generally don't; the new employer must provide minimum pension provision under the Pensions Act 2004.",
                  "explain": "Public sector transfers have special protections (e.g. Fair Deal)."
              },
              {
                  "q": "What is a Type A event?",
                  "a": "A corporate event materially detrimental to the scheme's ability to meet its liabilities (e.g. change in covenant, return of capital), for which clearance may be sought.",
                  "explain": "TPR guidance."
              },
              {
                  "q": "What mitigation might trustees seek in a leveraged buyout?",
                  "a": "Cash contributions, guarantees, security over assets, negative pledges, shorter recovery plans.",
                  "explain": "Debt ranks ahead of the scheme in insolvency."
              },
              {
                  "q": "What is a scheme merger?",
                  "a": "Combining two or more schemes into one, usually following a corporate merger.",
                  "explain": "Issues: funding equalisation, benefit harmonisation, cross-subsidy."
              },
              {
                  "q": "What is flexible apportionment?",
                  "a": "An arrangement allowing a departing employer's section 75 debt to be apportioned to another employer in a multi-employer scheme.",
                  "explain": "Used in group restructurings."
              },
              {
                  "q": "How does corporate activity affect covenant?",
                  "a": "Changes group structure, debt levels and cash flows, possibly weakening support.",
                  "explain": "Covenant review needed."
              },
              {
                  "q": "Why is due diligence important?",
                  "a": "To identify the true pension liabilities, funding position, benefit issues and data problems before price is agreed.",
                  "explain": "Protects the purchaser."
              },
              {
                  "q": "What role does clearance play?",
                  "a": "Gives certainty that TPR won't issue moral hazard notices for the transaction.",
                  "explain": "Voluntary but common in material transactions."
              },
              {
                  "q": "How does an acquisition affect the purchaser's accounts?",
                  "a": "Net pension deficit becomes part of acquired liabilities under accounting standards.",
                  "explain": "Price reflects this."
              },
              {
                  "q": "What is benefit harmonisation after a merger?",
                  "a": "Aligning benefits across employee groups, often for future service only.",
                  "explain": "Consultation needed."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Corporate activity – calculations",
          "description": "Calculations in corporate activity: bulk transfer values (past service reserve versus share of fund), adjustments for funding level, price adjustments, section 75 debt estimates, and comparing benefits provided in the receiving scheme.",
          "cards": [
              {
                  "q": "What is a bulk transfer value?",
                  "a": "The amount transferred from one scheme to another for a group of members moving following a corporate transaction.",
                  "explain": "Syllabus 4.1."
              },
              {
                  "q": "What is the 'past service reserve' basis?",
                  "a": "The transfer amount equals the value of the transferring members' accrued benefits (with salary projection) on a specified basis, e.g. the receiving scheme's funding basis.",
                  "explain": "Allows full past service credit in the receiving scheme."
              },
              {
                  "q": "What is the 'share of fund' basis?",
                  "a": "The transfer amount is the transferring members' proportionate share of the scheme's assets (e.g. assets × their liabilities / total liabilities).",
                  "explain": "Reflects the transferring scheme's funding level."
              },
              {
                  "q": "Who prefers which basis?",
                  "a": "Receiving scheme trustees prefer a full past service reserve; transferring scheme trustees prefer share of fund if underfunded (to protect remaining members).",
                  "explain": "Negotiated in the SPA."
              },
              {
                  "q": "What is a 'shortfall' payment?",
                  "a": "A payment from the vendor (or price adjustment) to cover the difference between the bulk transfer amount and the value of benefits to be provided.",
                  "explain": "Common SPA mechanism."
              },
              {
                  "q": "How are benefits in the receiving scheme determined?",
                  "a": "Either full service credit (if bulk transfer sufficient) or reduced credit based on the amount received.",
                  "explain": "Members' consent may be required without actuarial certificate."
              },
              {
                  "q": "What is an actuarial certificate for bulk transfer without consent?",
                  "a": "Certification that members' rights in the receiving scheme are broadly no less favourable.",
                  "explain": "Needed for transfers without consent."
              },
              {
                  "q": "How is a section 75 debt estimated?",
                  "a": "Buy-out cost of liabilities minus assets, plus expenses, for the employer's share.",
                  "explain": "Buy-out basis approximations use insurer pricing."
              },
              {
                  "q": "How might a price adjustment be calculated?",
                  "a": "Difference between deficit on agreed basis and assumed in price, possibly net of tax relief.",
                  "explain": "Negotiated in transaction."
              },
              {
                  "q": "Why might tax be allowed for in price adjustments?",
                  "a": "Contributions to meet deficits are tax-deductible, so the true cost is lower than the gross deficit.",
                  "explain": "Parties may argue about the rate."
              },
              {
                  "q": "What is a 'top-up' in bulk transfers?",
                  "a": "An additional amount paid by the vendor to bring the transfer up to the full past service reserve.",
                  "explain": "Relevant if vendor's scheme is underfunded."
              },
              {
                  "q": "How can salary projections affect bulk transfer amounts?",
                  "a": "Including projection increases the amount; excluding it lowers it.",
                  "explain": "Definition in SPA critical."
              },
              {
                  "q": "How should transferring members' benefits be compared?",
                  "a": "Value of old and new benefits on consistent basis, considering guarantees and options.",
                  "explain": "Ensures fair treatment."
              },
              {
                  "q": "Why are sensitivities useful in corporate calculations?",
                  "a": "Parties need to understand how results change with assumptions.",
                  "explain": "Negotiation tool."
              },
              {
                  "q": "How can data issues affect bulk transfer calculations?",
                  "a": "Incorrect member data leads to wrong transfer amounts; warranties and true-up mechanisms deal with errors.",
                  "explain": "Data reconciliation post-transfer."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Managing risks",
          "description": "Proposing risk mitigation strategies for UK schemes: investment de-risking, liability hedging and LDI governance, buy-ins, buy-outs and longevity swaps, liability management exercises, benefit changes, contingent assets, and integrated risk management.",
          "cards": [
              {
                  "q": "List risk management tools available to UK DB schemes.",
                  "a": "LDI hedging; buy-ins/buy-outs; longevity swaps; liability management (transfers, PIE); benefit changes (closure, caps); contingent assets; diversification.",
                  "explain": "Syllabus 5.1."
              },
              {
                  "q": "When is a buy-in preferable to a buy-out?",
                  "a": "When the scheme can't afford full buy-out but wants to secure part of the liabilities (e.g. pensioners) and remove risk.",
                  "explain": "Buy-in can later convert to buy-out."
              },
              {
                  "q": "What are the pros of longevity swaps?",
                  "a": "Hedge longevity while retaining investment control; cheaper than buy-in capital.",
                  "explain": "Counterparty and collateral issues."
              },
              {
                  "q": "What are liability management exercises?",
                  "a": "Offers to members (e.g. enhanced transfers, PIE) to reduce liabilities or risks.",
                  "explain": "Chapter 25 covers incentive exercises."
              },
              {
                  "q": "How can closure to accrual reduce risk?",
                  "a": "Stops liabilities growing and removes salary risk.",
                  "explain": "Consultation needed."
              },
              {
                  "q": "What governance is needed for LDI after 2022?",
                  "a": "Collateral buffers, liquidity waterfalls, stress testing, monitoring leverage.",
                  "explain": "TPR guidance."
              },
              {
                  "q": "How can integrated risk management be applied?",
                  "a": "Assessing covenant, funding and investment risks together and their interactions.",
                  "explain": "TPR framework."
              },
              {
                  "q": "What are the costs of risk reduction?",
                  "a": "Lower expected returns, insurer margins, fees.",
                  "explain": "Weighed against risk reduction."
              },
              {
                  "q": "How do superfunds manage risk?",
                  "a": "Capital buffer replacing covenant, risk-based investment.",
                  "explain": "Regulated by TPR."
              },
              {
                  "q": "What risks remain after buy-in?",
                  "a": "Insurer counterparty risk, residual data risk, other members' liabilities.",
                  "explain": "Trustees retain responsibility."
              },
              {
                  "q": "How can employers reduce PPF levy risk?",
                  "a": "Contingent assets, deficit reduction, improving insolvency scores.",
                  "explain": "Levy has fallen."
              },
              {
                  "q": "How can DC risks be managed?",
                  "a": "Default design, glide paths, decumulation options, guidance.",
                  "explain": "Value for members."
              },
              {
                  "q": "What is an insurer's due diligence in buy-in?",
                  "a": "Data review, benefit specification, pricing, risk assessment.",
                  "explain": "Trustee preparation."
              },
              {
                  "q": "What is a 'buy-in' for deferreds?",
                  "a": "Securing deferred members' benefits; more expensive due to uncertainty.",
                  "explain": "Less common."
              },
              {
                  "q": "How can hedge ratios be set?",
                  "a": "Based on funding position, collateral availability and risk appetite.",
                  "explain": "Hedging relative to a liability measure."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Incentive exercises",
          "description": "Incentive and liability management exercises — enhanced transfer values, pension increase exchange, flexible retirement options, trivial commutation — the industry code of practice, member communication and advice, and the risks and rewards for sponsors, trustees and members.",
          "cards": [
              {
                  "q": "What is an incentive exercise?",
                  "a": "An offer by a sponsor to members to change their benefits (e.g. transfer out or exchange increases), often with an incentive.",
                  "explain": "Aims to reduce scheme risk and cost."
              },
              {
                  "q": "What code governs UK incentive exercises?",
                  "a": "The industry Code of Good Practice on incentive exercises (2012, updated), which bans cash incentives and requires advice or guidance and clear communication.",
                  "explain": "TPR guidance reinforces it."
              },
              {
                  "q": "What is an enhanced transfer value exercise?",
                  "a": "Offering members a higher transfer value to move out of the DB scheme.",
                  "explain": "Now limited by the code and advice requirements."
              },
              {
                  "q": "What is a pension increase exchange (PIE)?",
                  "a": "Offering pensioners a higher level pension in exchange for giving up non-statutory increases.",
                  "explain": "Reduces inflation risk and liabilities."
              },
              {
                  "q": "What are the benefits of PIE to the sponsor?",
                  "a": "Reduced inflation risk and liability value, possibly cheaper buy-out.",
                  "explain": "Members gain higher early income."
              },
              {
                  "q": "What are the risks to members of PIE?",
                  "a": "Loss of inflation protection, especially in high inflation.",
                  "explain": "Advice or guidance required."
              },
              {
                  "q": "What is a flexible retirement option?",
                  "a": "Allowing members to retire early or take benefits more flexibly, sometimes with enhanced terms.",
                  "explain": "Can reduce liabilities."
              },
              {
                  "q": "What is trivial commutation?",
                  "a": "Paying small pensions as lump sums (subject to limits).",
                  "explain": "Reduces administrative costs."
              },
              {
                  "q": "What communication requirements apply?",
                  "a": "Clear, balanced information, no pressure, adequate time to decide, advice or guidance.",
                  "explain": "Code of practice."
              },
              {
                  "q": "What is the role of the actuary in incentive exercises?",
                  "a": "Advising on terms, cost savings, and member fairness.",
                  "explain": "TAS 300 requirements."
              },
              {
                  "q": "What is a DB to DC transfer at retirement option?",
                  "a": "Offering members the option to transfer at retirement to access flexibilities.",
                  "explain": "Advice required above £30,000."
              },
              {
                  "q": "How should the success of an exercise be measured?",
                  "a": "Take-up rates, liability reduction, cost versus benefit, member outcomes.",
                  "explain": "Post-exercise review."
              },
              {
                  "q": "What are reputational risks of incentive exercises?",
                  "a": "Accusations of pressuring members or poor value.",
                  "explain": "Code compliance mitigates."
              },
              {
                  "q": "How do trustees view incentive exercises?",
                  "a": "Must consider members' interests, ensure fairness and consistency with funding.",
                  "explain": "Trustees may insist on advice."
              },
              {
                  "q": "How do incentive exercises affect funding?",
                  "a": "Can reduce liabilities and improve funding if terms are below funding value.",
                  "explain": "Also reduces risk."
              }
          ]
      },
      {
          "id": "m26",
          "title": "Discontinuance",
          "description": "Discontinuance of UK benefit arrangements: wind-up and the statutory priority order, buy-out, PPF assessment and entry, section 75 debts, run-off versus buy-out, superfund transfers, and the rights and expectations of beneficiaries.",
          "cards": [
              {
                  "q": "What is the UK statutory priority order on wind-up?",
                  "a": "Assets are applied first to PPF-level benefits, then to full benefits, with remaining surplus distributed according to rules.",
                  "explain": "Protects members' PPF-equivalent entitlements."
              },
              {
                  "q": "What happens in PPF assessment?",
                  "a": "After employer insolvency, the scheme enters a period of assessment during which benefits are reduced to PPF levels; if assets can't secure PPF benefits, the scheme transfers to the PPF.",
                  "explain": "If assets exceed PPF level, the scheme winds up outside the PPF."
              },
              {
                  "q": "What are members' rights on discontinuance?",
                  "a": "Accrued benefits under the rules, subject to available assets and priority order.",
                  "explain": "Syllabus 5.4."
              },
              {
                  "q": "What are members' expectations on discontinuance?",
                  "a": "Discretionary increases or benefits previously granted, which may be honoured if assets allow.",
                  "explain": "Rights take precedence."
              },
              {
                  "q": "How is a buy-out procured?",
                  "a": "Data cleansing, benefit specification, broker-led insurer process, pricing, buy-in then conversion to individual policies.",
                  "explain": "Timescale often 1–2 years."
              },
              {
                  "q": "What is run-off?",
                  "a": "Continuing the scheme with the aim of paying benefits as they fall due, rather than buying out.",
                  "explain": "Allows surplus generation and investment returns."
              },
              {
                  "q": "When is superfund transfer appropriate?",
                  "a": "When buy-out is unaffordable in a reasonable time and the superfund improves security relative to the employer covenant.",
                  "explain": "TPR gateway tests."
              },
              {
                  "q": "What is a section 75 debt on wind-up?",
                  "a": "The employer's debt equal to the buy-out deficit.",
                  "explain": "Often cannot be paid in insolvency."
              },
              {
                  "q": "What issues arise with winding up a DC scheme?",
                  "a": "Transferring members' funds, communication, choosing a receiving arrangement (e.g. master trust).",
                  "explain": "Charges and value for members."
              },
              {
                  "q": "What are residual risks after buy-out?",
                  "a": "Data errors, unknown beneficiaries, GMP equalisation.",
                  "explain": "Residual risk insurance."
              },
              {
                  "q": "How should surplus on wind-up be distributed?",
                  "a": "According to rules — augmentation or refund to employer (subject to tax and notice).",
                  "explain": "Member expectations considered."
              },
              {
                  "q": "What is the role of trustees in discontinuance?",
                  "a": "Ensure fair treatment of members, select appropriate method, manage the process.",
                  "explain": "Syllabus 5.4."
              },
              {
                  "q": "What is a Fraud Compensation Fund?",
                  "a": "PPF-administered fund compensating schemes that lose assets due to dishonesty.",
                  "explain": "Security safety net."
              },
              {
                  "q": "What is the effect of discontinuance on members' options?",
                  "a": "Options may be restricted or changed once wind-up begins.",
                  "explain": "Communication essential."
              },
              {
                  "q": "Why might employers choose run-off over buy-out?",
                  "a": "Potential surplus, lower cost, strong covenant.",
                  "explain": "Revised funding code supports low dependency run-off."
              }
          ]
      },
      {
          "id": "m27",
          "title": "Problem solving and analysis",
          "description": "Applying SA4 in the exam: planning answers to long scenario questions, identifying the client and the key issues, using frameworks to generate breadth, making and justifying recommendations, handling approximate calculations, and managing time across the paper.",
          "cards": [
              {
                  "q": "How should an SA4 scenario question be approached?",
                  "a": "Identify the client and their objectives, the key facts and constraints, the issues, then generate points using frameworks, and conclude with recommendations.",
                  "explain": "Planning time is well spent."
              },
              {
                  "q": "Why is identifying the client important?",
                  "a": "Advice differs depending on whether you represent trustees, the sponsor or members.",
                  "explain": "Conflicts need managing."
              },
              {
                  "q": "What frameworks help generate breadth in SA4?",
                  "a": "Stakeholders; risks; design factors; regulatory/tax/accounting; covenant–funding–investment; options; communication.",
                  "explain": "Broad coverage wins marks."
              },
              {
                  "q": "How should recommendations be made?",
                  "a": "Clearly, with reasons, and consider alternatives and next steps.",
                  "explain": "Examiners reward justified recommendations."
              },
              {
                  "q": "How should approximate calculations be handled?",
                  "a": "State assumptions, use simple methods, check reasonableness, interpret results.",
                  "explain": "Speed and clarity matter."
              },
              {
                  "q": "What are common weaknesses in SA4 answers?",
                  "a": "Generic lists, lack of UK specifics, not answering the question, insufficient breadth.",
                  "explain": "Examiners' reports highlight these."
              },
              {
                  "q": "How should time be managed?",
                  "a": "Proportionally to marks; avoid overrunning early questions.",
                  "explain": "Two papers require stamina."
              },
              {
                  "q": "Why include UK legislation in answers?",
                  "a": "SA4 is UK-based, and applying specific rules shows depth.",
                  "explain": "Keep to principles if uncertain."
              },
              {
                  "q": "How can past papers help?",
                  "a": "Show typical scenarios and marking; practise planning and timing.",
                  "explain": "Examiners' reports are key."
              },
              {
                  "q": "What is the role of communication in SA4?",
                  "a": "Answers may require drafting advice to lay audiences clearly.",
                  "explain": "Tone and clarity count."
              },
              {
                  "q": "How should conflicting objectives be addressed?",
                  "a": "Identify them, discuss trade-offs, and propose balanced solutions.",
                  "explain": "E.g. security vs affordability."
              },
              {
                  "q": "How can the control cycle be applied?",
                  "a": "Specify, develop, monitor within environment.",
                  "explain": "Structure for strategic questions."
              },
              {
                  "q": "Why consider practical issues?",
                  "a": "Administration, data, timescales, costs.",
                  "explain": "Examiners reward practicality."
              },
              {
                  "q": "Why consider alternative solutions?",
                  "a": "Shows judgement and breadth.",
                  "explain": "Compare pros and cons."
              },
              {
                  "q": "How can a candidate check an answer?",
                  "a": "Reread question, ensure all parts answered, check calculations.",
                  "explain": "Final review."
              }
          ]
      },
      {
          "id": "m28",
          "title": "Glossary",
          "description": "Key UK pensions terminology for SA4 — funding regime, PPF, tax, accounting and corporate activity terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'technical provisions'.",
                  "a": "The amount required, on prudent assumptions chosen by trustees, to make provision for a scheme's liabilities.",
                  "explain": "UK funding target."
              },
              {
                  "q": "Define 'section 75 debt'.",
                  "a": "Employer debt equal to the scheme's deficit on a buy-out basis, triggered by specified events.",
                  "explain": "Pensions Act 1995."
              },
              {
                  "q": "Define 'section 179 valuation'.",
                  "a": "Valuation on the PPF's compensation basis used for levy calculations.",
                  "explain": "Pensions Act 2004."
              },
              {
                  "q": "Define 'contribution notice'.",
                  "a": "TPR power requiring a person to pay a sum to a scheme where they were party to an act detrimental to the scheme.",
                  "explain": "Moral hazard power."
              },
              {
                  "q": "Define 'financial support direction'.",
                  "a": "TPR power requiring financial support for a scheme whose employer is a service company or insufficiently resourced.",
                  "explain": "Moral hazard power."
              },
              {
                  "q": "Define 'GMP'.",
                  "a": "Guaranteed Minimum Pension from contracting-out (1978–1997).",
                  "explain": "Subject to equalisation."
              },
              {
                  "q": "Define 'LPI'.",
                  "a": "Limited Price Indexation — capped inflation increases.",
                  "explain": "Statutory minima."
              },
              {
                  "q": "Define 'annual allowance'.",
                  "a": "The limit (£60,000) on annual pension input before a tax charge.",
                  "explain": "With carry forward."
              },
              {
                  "q": "Define 'lump sum allowance'.",
                  "a": "The limit (£268,275) on tax-free lump sums.",
                  "explain": "From April 2024."
              },
              {
                  "q": "Define 'master trust'.",
                  "a": "A multi-employer occupational trust scheme for unconnected employers, requiring TPR authorisation.",
                  "explain": "DC mainly."
              },
              {
                  "q": "Define 'superfund'.",
                  "a": "A DB consolidator replacing the employer covenant with capital.",
                  "explain": "TPR regime."
              },
              {
                  "q": "Define 'bulk transfer'.",
                  "a": "Transfer of a group of members' benefits from one scheme to another.",
                  "explain": "Corporate activity."
              },
              {
                  "q": "Define 'PIE'.",
                  "a": "Pension increase exchange — exchange of future increases for higher initial pension.",
                  "explain": "Incentive exercise."
              },
              {
                  "q": "Define 'low dependency'.",
                  "a": "Funding position requiring no further employer contributions under reasonably foreseeable circumstances.",
                  "explain": "Revised funding code."
              },
              {
                  "q": "Define 'CDC'.",
                  "a": "Collective defined contribution — pooled scheme with target benefits adjusted to balance.",
                  "explain": "Pension Schemes Act 2021."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sa4-q1",
      title: "Designing a DB scheme benefit structure",
      modules: "Modules 7, 8",
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
          note: "Arithmetic check: 45000 × (1/60) × 20 = 15,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a career average revalued earnings (<em>care</em>) scheme design would reduce the sponsor's exposure to a 'final salary spike' risk compared with the final salary design in part (i).",
          answer:
            "A <em>care</em> scheme accrues a pension each year based on that year's salary, revalued up to retirement, spreading the salary-linkage risk more evenly across a member's career rather than concentrating it at the end, unlike final salary where a large late-career pay rise disproportionately increases pension cost relative to contributions paid over the member's whole career.",
          note: "A strong answer explicitly names the 'final salary spike' mechanism, not just asserts that <em>care</em> is 'less risky'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the scheme's design of pension increases in payment (fixed rate versus inflation-linked) represents a genuine, deliberate risk-allocation choice, not just an administrative detail.",
          answer:
            "Inflation-linked increases directly expose the sponsor to genuine, open-ended inflation risk over a potentially long payment period, whereas fixed-rate increases cap this risk at a known level. This is a deliberate choice about who bears inflation risk &mdash; the sponsor (if the increase basis tracks inflation, however high it turns out to be) or effectively the member (if increases are capped and inflation erodes the pension's real value), directly affecting both the scheme's genuine risk profile and members' retirement income security.",
          note: "A strong answer explicitly frames this as a <em>risk-allocation</em> decision between sponsor and member, not merely a description of the two increase types.",
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
      modules: "Modules 7, 8, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A DC scheme member contributes &pound;3,000 per annum (combined employer and employee contributions) for 25 years, with the fund assumed to grow at 5% per annum net investment return and contributions paid at the start of each year. Calculate the accumulated fund value at retirement (to the nearest &pound;100), given the fund value follows F(y) = (F(y-1) + 3,000) &times; 1.05 with F(0) = 0.",
          answer:
            "Applying the recursive growth formula for 25 years gives an accumulated fund value of approximately &pound;150,300 (&pound;150,340 to the nearest pound).",
          note: "Check by iterating year by year: F(25) = 150,340.36. Full marks require showing the recursive/compounding approach, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the design of this scheme's default investment strategy carries outsized real-world importance, given that most members do not actively choose their own investments.",
          answer:
            "Since most members in practice remain in the default option, its design directly shapes the retirement outcomes of the majority of the scheme's membership, so it should reflect an appropriate risk/return balance and glide path toward retirement for a typical member, not just a technically available but rarely-used default.",
          note: "A strong answer explicitly connects default design to its outsized real-world reach, not just describes what a default strategy is.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why 'sequencing risk' is a distinct concern for this member in the years immediately before retirement, compared with earlier in their 25-year saving period.",
          answer:
            "A market downturn shortly before retirement gives the member far less time to recover before needing to convert their pot into retirement income, unlike an equivalent downturn earlier in their career when ongoing contributions and time can help recover lost value, making sequencing risk a distinct late-career concern requiring a de-risking glide path as retirement approaches.",
          note: "A strong answer explains <em>why</em> timing matters (limited recovery time near retirement), not just that market downturns are bad.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why clear member communication is particularly important for this DC scheme, more so than it might be for an equivalent DB scheme.",
          answer:
            "Since DC members bear genuine investment and longevity risk and must often make their own decisions (contribution levels, investment choices, retirement income options), clear, accessible communication is essential to support informed member decision-making, more so than for a DB scheme where the sponsor bears the risk and makes most of the relevant decisions.",
          note: "This connects directly to CP3's audience-tailored-communication material applied to a genuine DC-specific context.",
        },
      ],
    },
    {
      id: "sa4-q3",
      title: "Other employee benefits alongside a pension scheme",
      modules: "Modules 6, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a death-in-service benefit should be designed and priced with genuine awareness of the pension scheme's own death benefits, rather than in isolation.",
          answer:
            "A death-in-service benefit is typically provided alongside or integrated with any pension scheme death benefits, together forming the employee's overall protection package; designing it in isolation risks either unnecessary duplication of cover or an unintended gap in overall protection.",
          note: "A strong answer explicitly frames this as a genuine <em>integration</em> issue, not two independent benefits that happen to coexist.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the actuarial pricing considerations for an employer-provided income protection benefit are the same as for a directly-purchased income protection policy.",
          answer:
            "The underlying risk (incapacity preventing an employee from working) and its actuarial drivers (incidence, recovery rates, deferred period) are the same regardless of whether the cover is purchased directly or provided as an employee benefit, so the same technical pricing and design principles apply &mdash; the distribution channel does not change the underlying risk being covered.",
          note: "This connects directly to the general principle that product complexity and risk drivers, not distribution channel, determine appropriate pricing technique.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an employer should assess the combined cost and risk of its whole employee benefits package (pension, death-in-service, ill-health, medical) together, rather than assessing each benefit independently.",
          answer:
            "These benefits can interact &mdash; for example, a death-in-service payout can reduce the need for an ongoing ill-health benefit for the same event, while medical cover can reduce genuine ill-health incidence through earlier treatment and diagnosis &mdash; so a holistic view of the whole package's combined cost and risk gives a more accurate picture of the employer's true benefits spend and risk exposure than assessing each benefit in isolation, which could double-count some interacting risks or miss genuine offsetting effects.",
          note: "A strong answer identifies at least one genuine <em>interaction</em> between benefits, not just asserts that a holistic view is 'better' in general.",
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
      modules: "Modules 6, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what is meant by a DB scheme's 'sponsor covenant', and why it is a distinctive risk not present in a standalone insurance product.",
          answer:
            "The sponsor covenant is the sponsoring employer's financial ability and willingness to support the pension scheme (e.g. through ongoing contributions) over time. Unlike an insurance policyholder relying on the insurer's own balance sheet, a pension scheme member's security depends directly on a third party's (the sponsor's) ongoing financial health, a distinctive risk unique to DB pensions.",
          note: "A strong answer explicitly contrasts this with the insurance-company-centred risk model, not just describes covenant in isolation.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why demographic change (improving longevity) poses a similar risk direction to DB pension schemes as it does to an insurer's annuity business.",
          answer:
            "Improving longevity directly increases the cost of DB pension promises, since members draw their pension for longer than assumed, exactly the same inverted mortality-improvement sensitivity that increases annuity cost for an insurer &mdash; the risk direction is the same because both pay income for as long as someone survives.",
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
          note: "A strong answer explains <em>why</em> the risk is acute (potential benefit reduction via statutory protection) and proposes at least one reasonable trustee action.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why trustees should monitor sponsor covenant strength on an ongoing basis, rather than only at the point of each formal funding valuation.",
          answer:
            "Sponsor financial health can change materially between valuations, so ongoing covenant monitoring helps trustees identify a weakening covenant early enough to adjust funding or investment strategy before the sponsor's ability to support the scheme deteriorates further.",
          note: "This connects directly to the ongoing-monitoring theme developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q5",
      title: "Taxation and the regulatory/legislative environment",
      modules: "Modules 3, 4, 5",
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
            "Funding oversight focuses on whether a scheme (and its sponsor) can meet its promised benefits over time, while conduct-style oversight focuses on whether trustees and administrators treat members fairly (e.g. in communications, transfer advice, and administration), addressing distinct risks to members.",
          note: "This directly mirrors the prudential-versus-conduct distinction developed for insurance regulation elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why legislation requiring independent financial advice before a large DB-to-DC transfer was introduced, and why auto-enrolment legislation has increased the practical importance of default DC investment strategy design.",
          answer:
            "Transfer advice legislation responds to the significant, often irreversible nature of giving up a DB scheme's guaranteed, sponsor-backed benefits in exchange for a DC transfer value, ensuring members receive informed advice before making a decision with serious, hard-to-reverse consequences for retirement security. Auto-enrolment legislation automatically enrols eligible employees into a qualifying (typically DC) scheme unless they opt out, directly increasing scheme membership among largely passive members who rarely engage with fund choice, making the <em>default</em> investment strategy's design disproportionately important for the outcomes of the majority of the membership.",
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
      modules: "Modules 11, 15, 16, 18",
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
          note: "Arithmetic check: 80,000,000-68,000,000=12,000,000; 12,000,000/8=1,500,000. This is a simplified calculation ignoring investment return on the recovery contributions and discounting, for illustrative purposes.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the discount rate used to calculate this scheme's technical provisions requires genuine actuarial judgement, rather than a single universally correct rate.",
          answer:
            "The discount rate should reflect the expected return on the scheme's actual (or intended) investment strategy and its genuine level of prudence, so different schemes with different investment strategies and risk appetites can reasonably adopt different discount rates, without there being one single objectively correct answer.",
          note: "A strong answer connects the discount rate directly to the scheme's <em>own</em> investment strategy and prudence level, not just asserts that judgement is required.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss the genuine trade-off in choosing an 8-year recovery period, as opposed to a shorter or longer period.",
          answer:
            "A longer recovery period spreads the additional contributions over more years, easing the sponsor's near-term cash burden, but leaves the scheme underfunded for longer, increasing the risk that adverse experience or sponsor distress could prevent the shortfall ever being fully addressed; a shorter period reduces this risk but places a greater near-term cash burden on the sponsor.",
          note: "A strong answer explicitly frames this as a genuine trade-off between sponsor affordability and member security, not a straightforward 'shorter is always better' conclusion.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the scheme actuary should assess the sponsor's covenant strength when advising trustees on an appropriate recovery plan length.",
          answer:
            "A weaker sponsor covenant may justify requiring a shorter recovery period or higher near-term contributions (since the scheme cannot rely on the sponsor's ongoing support with the same confidence), while a stronger covenant may reasonably support a longer, more gradual recovery plan.",
          note: "This connects the numeric recovery plan calculation directly to the sponsor covenant material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q7",
      title: "Investment strategy and de-risking",
      modules: "Modules 13, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a maturing DB scheme typically 'de-risks' its investment strategy over time, shifting from growth assets toward more matching assets.",
          answer:
            "As a scheme matures, its investment time horizon shortens (benefits need to be paid sooner) and its tolerance for short-term volatility reduces, so shifting toward more matching, lower-volatility assets reduces the risk of a poorly-timed market downturn coinciding with when the scheme most needs to pay benefits.",
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
          note: "A strong answer explains both the matching benefit <em>and</em> names the genuine collateral/liquidity risk LDI introduces, not just describes the matching benefit alone.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why a sponsor's covenant strength should directly influence the scheme's appropriate level of investment risk.",
          answer:
            "A scheme backed by a strong sponsor covenant can reasonably tolerate more investment risk, since the sponsor can support a temporary funding shortfall through additional contributions if needed, while a scheme with a weaker covenant may need a more cautious, closely-matched investment strategy to avoid relying on sponsor support that may not be reliably available, so investment strategy should reflect covenant strength rather than being decided purely on financial-market grounds in isolation.",
          note: "A strong answer explicitly connects covenant strength to appropriate risk tolerance in both directions (strong covenant supports more risk, weak covenant requires less), not just one direction.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the scheme should hold sufficient liquid assets even though its overall investment horizon is long-term.",
          answer:
            "Even a long-horizon scheme has near-term cashflow needs (benefit payments, expenses, and potentially collateral calls on derivative positions), so genuine liquidity risk management requires holding sufficient liquid assets to meet these without being forced to sell less liquid assets at a potentially unfavourable time.",
          note: "This connects directly to the liquidity-risk theme developed elsewhere across the SA subjects.",
        },
      ],
    },
    {
      id: "sa4-q8",
      title: "Integrated risk management",
      modules: "Modules 10, 12, 24",
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
          note: "A strong answer explains <em>why</em> investment strategy alone is insufficient for longevity risk specifically, not just names longevity swaps as an option.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why an 'integrated risk management' (IRM) framework linking funding, investment, and covenant strategy together is more valuable than managing each area independently.",
          answer:
            "These three areas are interdependent &mdash; for example, a stronger covenant can support a riskier investment strategy, which in turn affects the appropriate funding target and discount rate &mdash; so managing them through a single, integrated framework helps ensure decisions in one area appropriately reflect the current position in the other two, rather than being set independently and potentially inconsistently with each other.",
          note: "A strong answer explicitly identifies at least one genuine <em>interdependency</em> (e.g. covenant strength affecting appropriate investment risk), not just asserts that integration is 'better'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a scheme's risk management strategy should be reviewed periodically, rather than set once and left unchanged.",
          answer:
            "As funding position, membership profile, and sponsor covenant evolve over time, a risk management strategy set for a past position may no longer be appropriate for the scheme's current circumstances, so ongoing review ensures the strategy remains aligned with the scheme's actual, current risk profile.",
          note: "This connects directly to the ongoing-review theme developed elsewhere across every SA subject.",
        },
      ],
    },
    {
      id: "sa4-q9",
      title: "Buy-in, buy-out and scheme wind-up",
      modules: "Modules 24, 26",
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
          note: "Arithmetic check: 52,000,000-47,000,000=5,000,000. Full marks require both the calculation and a genuine explanation of what the excess represents.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the difference between a buy-in and a buy-out, and why a buy-in is often pursued as a step before an eventual buy-out.",
          answer:
            "A buy-in involves the scheme purchasing an insurance policy matching a specified group of members' benefits, with the policy held as a scheme asset while the scheme itself remains responsible for paying members; a buy-out goes further, fully transferring the legal liability for those members' benefits to the insurer. A buy-in is often pursued first because it can be executed for a subset of membership without requiring the scheme to be immediately fully funded for a complete buy-out and wind-up.",
          note: "A strong answer explains both the structural difference <em>and</em> why a phased buy-in-then-buy-out approach is often practically useful.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why legislation requiring independent financial advice before a large DB-to-DC transfer is particularly important in the context of a scheme heading toward wind-up.",
          answer:
            "Giving up a DB scheme's guaranteed, sponsor-backed benefits in exchange for a DC transfer value is a significant, often irreversible decision shifting investment and longevity risk onto the member; as a scheme approaches wind-up, members may face pressure or a limited window to decide, making independent advice particularly important to ensure they understand the consequences before an effectively final decision.",
          note: "A strong answer connects the advice requirement's importance directly to the wind-up context's time pressure and irreversibility.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a scheme facing sponsor insolvency might need to consider a statutory pension protection arrangement rather than proceeding with a standard buy-out.",
          answer:
            "If the scheme is insufficiently funded and the sponsor cannot provide additional contributions due to insolvency, a standard buy-out (requiring full funding to purchase members' benefits) may not be achievable, making a statutory protection arrangement (providing a safety-net level of benefit, potentially lower than originally promised) the necessary alternative.",
          note: "This connects directly to the sponsor-insolvency material developed elsewhere in this course.",
        },
      ],
    },
    {
      id: "sa4-q10",
      title: "Mergers, restructuring and solving a complex pensions issue",
      modules: "Modules 22, 23, 27",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a corporate acquisition of a scheme's sponsor could directly affect the scheme's sponsor covenant, in either direction.",
          answer:
            "The acquiring company's own financial strength and strategic priorities become the scheme's new effective covenant support, which could strengthen the scheme's security (if the acquirer is financially stronger and supportive) or weaken it (if the acquirer is less committed to the scheme or has weaker finances) depending on the acquirer's own position and intentions.",
          note: "A strong answer explains <em>both</em> possible directions of covenant change, not just assumes acquisitions are always negative or always positive for the scheme.",
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
            "A DB scheme's sponsor is being acquired, and the scheme is significantly underfunded. Discuss why this represents a complex issue for the trustees, requiring integrated judgement across multiple topic areas.",
          answer:
            "This decision involves competing considerations across multiple topic areas at once &mdash; assessing the acquirer's covenant strength, negotiating appropriate funding or security protections as part of the transaction, and considering longer-term strategic options like accelerated de-risking or eventual buy-out &mdash; requiring integrated judgement across covenant, funding, investment and strategic areas rather than a single-dimension analysis.",
          note: "A strong answer explicitly draws on multiple topic areas together (covenant, funding, investment, strategy), not just one in isolation, reflecting the integrated nature of complex real-world issues.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving a complex pensions issue like this typically requires drawing on multiple SA4 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue required drawing on covenant assessment, funding strategy, investment strategy, and strategic risk-transfer options together, reflecting how complex issues in practice typically require integrated judgement across several technical areas at once, not a single isolated calculation or rule.",
          note: "This connects directly to the integrated, capstone nature of complex problem-solving as tested throughout the later parts of the SA4 syllabus.",
        },
      ],
    },
  ],
});

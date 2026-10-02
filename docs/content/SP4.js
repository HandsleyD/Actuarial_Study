// SP4 Pensions and Other Benefits Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP4", {
  modules: [
      {
          "id": "m01",
          "title": "Overview",
          "description": "Where SP4 sits in the qualification and how it is organised: the aim of the subject, its five topic areas and their weightings, the link from CM1/CP1 below it to SA4 above it, and the Actuarial Control Cycle that ties the course together.",
          "cards": [
              {
                  "q": "What is the aim of Subject SP4?",
                  "a": "To understand the main principles relevant to providing pensions and other benefits: designing and financing benefit arrangements, methods of valuation, and managing and monitoring the risks relevant to those arrangements.",
                  "explain": "Note the breadth: SP4 is about pensions <em>and</em> other benefits (death, ill-health, healthcare, State provision), and it is principles-based — the exam sets unfamiliar scenarios in no particular country, so answers should reason from principles rather than recite local rules."
              },
              {
                  "q": "List SP4's five syllabus topics with their approximate weightings.",
                  "a": "Pension provision and the general business environment (20%); scheme design and financing (20%); managing schemes and risks (20%); models, valuations and setting assumptions (30%); monitoring experience and the Actuarial Control Cycle (10%).",
                  "explain": "The weightings indicate the share of exam marks. Valuation, models and assumptions is the largest block, which is why the funding methods chapter (Chapter 16) is the longest in the course."
              },
              {
                  "q": "What does SP4 build on from earlier subjects?",
                  "a": "CM1 supplies the financial mathematics and life contingencies used to value benefits; CP1 supplies the general actuarial practice framework — stakeholders, risk, the control cycle — applied here to benefit provision.",
                  "explain": "If a question asks you to value or project benefits, the mechanics are CM1; the judgement about what to value, for whom and why is CP1-style reasoning applied to pensions."
              },
              {
                  "q": "How does SP4 relate to SA4?",
                  "a": "SP4 sets out the principles of benefit provision; SA4 applies them in more depth to complex, practical situations, typically in a specific (UK) regulatory context.",
                  "explain": "A useful mental split: SP4 asks 'what are the issues and how do the principles work?', SA4 asks 'what would you actually advise this client to do, given this regime?'."
              },
              {
                  "q": "Describe the Actuarial Control Cycle as it applies to a pension scheme.",
                  "a": "Specify the problem (e.g. what benefits to provide and how to fund them); develop a solution (design, funding method, assumptions, investment strategy); monitor the experience against the assumptions; feed the findings back into the next round of decisions, all within the general economic, commercial and professional environment.",
                  "explain": "The control cycle is the thread through the whole course: design and financing chapters are 'specify', models/funding/valuation chapters are 'develop the solution', and sources of surplus and analysis of experience (Chapters 20-21) are 'monitor'."
              },
              {
                  "q": "What is meant by 'benefits' in SP4?",
                  "a": "Any provision made to meet the financial needs of individuals arising from retirement, death, ill-health, disability, unemployment or medical costs, whether provided by the State, an employer or the individual.",
                  "explain": "Keeping the wide definition in mind avoids a common exam weakness: answering only about retirement pensions when the question is about, say, a group death-in-service benefit or a healthcare arrangement."
              },
              {
                  "q": "Name three broad types of provider of benefits.",
                  "a": "The State (social security and public-sector schemes), employers (occupational schemes, singly or in groups) and individuals (personal saving and insurance products).",
                  "explain": "Exam scenarios often turn on how these three interact — e.g. a generous State pension reduces the need for employer provision, and the employer scheme may be designed to integrate with it."
              },
              {
                  "q": "Why does SP4 describe itself as 'principles-based'?",
                  "a": "The Core Reading is not tied to any one country's legislation; it describes the issues any benefit provider faces so that candidates can apply them to whatever environment an exam question describes.",
                  "explain": "Where a question does describe a regime ('the Regulator requires...'), use its rules; otherwise, a good answer names the kind of rule that might apply ('legislation may require...') rather than quoting a specific country's law."
              },
              {
                  "q": "What higher-order skills does the SP4 exam expect beyond recall?",
                  "a": "Analysing a complex benefits problem, assessing the relevance of economic, financial and demographic factors, evaluating results critically in context, and proposing a solution or range of solutions.",
                  "explain": "Examiners' reports repeatedly note that candidates lose marks by listing generic points instead of applying them to the scenario given — the 'apply to the question' skill is where most marks sit."
              },
              {
                  "q": "Why is SP4 relevant to actuaries outside pensions consulting?",
                  "a": "Benefit provision touches insurers (buy-outs, annuities, group risk), employers' accounts, investment managers (liability-driven strategies) and public policy (State pensions), so the principles recur across practice areas.",
                  "explain": "Chapter 22 (insurance) and Chapter 23 (discontinuance) are where the insurer's perspective appears most directly — a buy-out quotation question is essentially an insurer pricing exercise."
              },
              {
                  "q": "What makes pensions a long-term financial problem?",
                  "a": "Contributions may be paid for 40 years and benefits for 30 more, so decisions made today depend on assumptions about investment returns, inflation, salary growth and longevity many decades ahead.",
                  "explain": "The long horizon is why assumptions, their prudence and their monitoring dominate the course: small changes in, say, the discount rate compound into large changes in liability values."
              },
              {
                  "q": "What is a 'defined benefit' arrangement in outline?",
                  "a": "One where the benefit is defined by a formula (typically linked to salary and service), so the cost is uncertain and the risk of that cost sits mainly with the sponsor.",
                  "explain": "The DB/DC distinction is about who bears the risk; much of the course (funding methods, sponsor covenant, surplus analysis) exists because the sponsor bears it in DB."
              },
              {
                  "q": "What is a 'defined contribution' arrangement in outline?",
                  "a": "One where the contribution is defined and the benefit is whatever the accumulated fund buys, so investment, annuity-price and longevity risks sit mainly with the member.",
                  "explain": "DC shifts the actuarial questions from 'what contribution funds this benefit?' to 'what benefit is this contribution likely to buy, and how certain is it?' — see the Net Replacement Ratio style of question."
              },
              {
                  "q": "Why must an SP4 answer usually consider several stakeholders?",
                  "a": "Any decision — a benefit change, a funding plan, an investment switch — affects the sponsor, members, trustees, regulators and possibly the State differently, and their objectives often conflict.",
                  "explain": "Chapter 2 is the checklist: running through stakeholders is one of the most reliable ways to generate a broad range of relevant points in a 'discuss' question."
              },
              {
                  "q": "What is the role of the glossary at the end of the SP4 course?",
                  "a": "It defines the principal terms used across the Core Reading; the exam expects candidates to understand and use these terms precisely.",
                  "explain": "Terms such as 'accrued benefits', 'standard contribution rate', 'control period' and 'discontinuance' have specific meanings — using them loosely costs marks in definition-style questions."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Key stakeholders",
          "description": "Who is involved in providing benefits — the State and statutory bodies, employers, trustees or scheme managers, members and other beneficiaries, and professional advisers — what each is responsible for, and where their interests pull in different directions.",
          "cards": [
              {
                  "q": "List the main stakeholders in the provision of benefits.",
                  "a": "The State and statutory bodies; employers (sponsors) or groups of employers; trustees or scheme managers; individuals (members, dependants, other beneficiaries) and their representatives; financial advisers to individuals; consultants and other professional advisers (actuaries, investment consultants, lawyers, auditors).",
                  "explain": "This list is a ready-made structure for 'discuss the implications' questions: taking each stakeholder in turn produces breadth, which is what examiners reward."
              },
              {
                  "q": "What roles can the State play in benefit provision?",
                  "a": "Provider (social security and public-sector schemes), regulator and legislator (setting rules for private provision), tax authority (granting or withholding tax relief) and sometimes guarantor (e.g. a compensation or protection fund).",
                  "explain": "The same government can wear several hats at once, and they can conflict — e.g. generous tax relief encourages private saving but costs revenue."
              },
              {
                  "q": "Why might an employer provide benefits at all?",
                  "a": "To attract, retain and motivate staff; to manage the workforce (e.g. facilitating retirement); paternalism or social responsibility; tax efficiency; to meet legal or collective-bargaining requirements; and to match competitors.",
                  "explain": "The employer's reasons drive the design: an employer wanting retention may favour benefits that reward long service, whereas one prioritising cost certainty will prefer DC."
              },
              {
                  "q": "What is the role of trustees (or a scheme manager)?",
                  "a": "To run the scheme in the interests of the beneficiaries in line with the governing documents and the law: collecting contributions, investing assets, paying benefits, keeping records and taking professional advice where needed.",
                  "explain": "Trustees owe duties to members, not to the sponsor, even if the sponsor appoints them — this is the root of many conflicts in funding and investment negotiations."
              },
              {
                  "q": "Give two ways a trustee's objectives may conflict with the sponsor's.",
                  "a": "Trustees want security, so prefer higher contributions and lower-risk investments; the sponsor wants lower and stable cost, so may prefer lower contributions and higher expected-return assets. They may also disagree on using surplus or granting discretionary increases.",
                  "explain": "Exam answers score well when they explain <em>why</em> the conflict exists (who bears the risk, who benefits from surplus) rather than just stating that it does."
              },
              {
                  "q": "What are members' main objectives from a pension arrangement?",
                  "a": "Adequate benefits, security of those benefits, flexibility (options on retirement, transfer, lump sums), low personal cost, and clear information.",
                  "explain": "Different member groups want different things — actives care about accrual and contributions, pensioners about security and increases, deferreds about transfer terms."
              },
              {
                  "q": "Why might members' interests differ between member groups?",
                  "a": "Resources are shared: using surplus to improve pensioner increases benefits pensioners but not actives; a funding strategy that defers contributions exposes younger members' benefits to more risk.",
                  "explain": "Equity between groups of members is a recurring consideration when trustees exercise discretion or set option terms (Chapter 8)."
              },
              {
                  "q": "What does the scheme actuary typically do?",
                  "a": "Advises on funding (valuations, contribution rates), on terms for options and transfers, on the effect of benefit changes, and on discontinuance; may have statutory duties such as certifying valuations or reporting to a regulator.",
                  "explain": "Note who the client is: the scheme actuary usually advises trustees, and the sponsor may appoint its own actuary — professional guidance requires managing such conflicts of interest."
              },
              {
                  "q": "Name three other professional advisers a scheme may use besides an actuary.",
                  "a": "Investment consultants and managers, lawyers, auditors, administrators, covenant advisers, and insurers or brokers for insured benefits.",
                  "explain": "Covenant advisers link directly to Chapter 11 — the assessment of the sponsor's strength has become a specialist discipline in its own right."
              },
              {
                  "q": "What role do financial advisers play for individuals?",
                  "a": "Helping individuals decide how much to save, which products to use, whether to take options such as transfers or lump sums, and how to draw retirement income.",
                  "explain": "Where individuals bear the risk (DC, personal pensions), the quality of advice is a key protection — hence regulators often require advice before valuable guarantees are given up."
              },
              {
                  "q": "Why might trade unions or member representatives be stakeholders?",
                  "a": "They negotiate benefit levels and changes on members' behalf, may nominate trustees, and represent members in consultations on scheme closures or benefit reductions.",
                  "explain": "Their involvement can constrain a sponsor's options — a closure proposal may need consultation periods and can affect industrial relations."
              },
              {
                  "q": "How can the sponsor's shareholders be affected by a DB scheme?",
                  "a": "Deficit contributions reduce cash available for dividends and investment; volatility in the pension balance sheet affects reported profits and the company's valuation and credit rating.",
                  "explain": "This is why sponsors care about accounting measures (Chapter 4) as well as funding measures, even though they are calculated differently."
              },
              {
                  "q": "Who ultimately bears the cost if a DB sponsor fails with the scheme in deficit?",
                  "a": "Members (through reduced benefits), and possibly other schemes or taxpayers if a protection fund or State guarantee pays compensation, often financed by levies on other schemes.",
                  "explain": "This chain explains why regulators focus on sponsor covenant and funding levels: the cost of failure spreads beyond the sponsor."
              },
              {
                  "q": "What is a multi-employer (industry-wide) scheme, and one stakeholder issue it raises?",
                  "a": "A scheme covering the employees of several employers, often in one industry. It raises cross-subsidy issues: strong employers may end up funding deficits relating to weaker employers' members ('last man standing' risk).",
                  "explain": "Questions on multi-employer schemes often want discussion of how liabilities and contributions are allocated between employers and what happens when one leaves."
              },
              {
                  "q": "Why do regulators care about the stakeholders' relative bargaining power?",
                  "a": "Members are usually the weakest party and have long-term, illiquid claims on the scheme; regulation (funding standards, disclosure, trustee duties) rebalances power to protect them.",
                  "explain": "When asked why a rule exists, identifying which stakeholder it protects and from what risk is usually the key to the answer."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Regulation",
          "description": "Why and how benefit provision is regulated: the aims of regulation, the forms it takes (legislation, a regulator, professional bodies, self-regulation), regulation of actuaries themselves, and how taxation shapes what is provided.",
          "cards": [
              {
                  "q": "Give four aims of regulating benefit provision.",
                  "a": "Protecting members' benefits and security; ensuring schemes are well governed and adequately funded; ensuring fair treatment and adequate information for members; encouraging adequate provision for retirement; limiting tax abuse; maintaining confidence in the system.",
                  "explain": "A question asking 'why might the regulator impose X?' is usually answered by tying X to one or more of these aims."
              },
              {
                  "q": "What forms can regulation take?",
                  "a": "Legislation; a statutory regulator with powers to issue codes and intervene; professional regulation of advisers (e.g. actuarial standards); self-regulation by the industry; and market discipline through disclosure.",
                  "explain": "Regimes typically combine several — e.g. law sets minimum funding, a regulator issues a code on how to meet it, and actuarial standards govern the actuary's advice."
              },
              {
                  "q": "Give three examples of how actuaries may be regulated.",
                  "a": "By their professional body (qualification, continuing professional development, codes of conduct, disciplinary schemes, practising certificates); by actuarial or technical standards on work and reporting; by statute (e.g. a legal role such as scheme actuary requiring approval); and by peer review or monitoring of work.",
                  "explain": "Examiners accept regulation at several levels — the profession, a standards board and the State — so a good answer covers more than one."
              },
              {
                  "q": "What is prescriptive regulation, and a drawback?",
                  "a": "Regulation that lays down detailed rules (e.g. a fixed discount rate or minimum funding formula). It is clear and easy to check, but can be inflexible, produce inappropriate results for unusual schemes, and encourage box-ticking.",
                  "explain": "Compare the 'freedom with publicity' alternative in the next card — exam answers often ask for the pros and cons of each."
              },
              {
                  "q": "What is 'freedom with publicity'?",
                  "a": "A lighter-touch approach where providers can choose methods and assumptions but must disclose them, so that members, regulators and markets can scrutinise and challenge the choices.",
                  "explain": "It relies on disclosure and on someone being able to understand and act on it — it works less well where members are unsophisticated."
              },
              {
                  "q": "Give three typical regulatory requirements on DB funding.",
                  "a": "A minimum funding standard or funding target; regular actuarial valuations by a qualified actuary; recovery plans with a maximum period for eliminating deficits; restrictions on employer-related investment; and requirements to report to a regulator.",
                  "explain": "When a question describes 'the regulator requires...', use these as the building blocks for discussing their effect on contributions and investment."
              },
              {
                  "q": "Why might regulation restrict investment in the sponsoring employer?",
                  "a": "If the sponsor fails, members lose both the sponsor's support and the value of assets invested in it at the same time — concentrating the risk.",
                  "explain": "The general principle is correlation between the sponsor covenant and scheme assets, which links to Chapter 11."
              },
              {
                  "q": "How can taxation shape benefit design?",
                  "a": "Tax relief on contributions and investment returns, and tax treatment of benefits (e.g. tax-free lump sums), make certain designs attractive; limits on relief cap benefit levels; conditions for tax approval dictate permitted benefits and options.",
                  "explain": "Benefits are often designed around tax limits — e.g. the lump sum proportion or maximum accrual rate matching what qualifies for relief."
              },
              {
                  "q": "What are the three stages at which benefits can be taxed?",
                  "a": "When contributions are paid, on investment income and gains within the fund, and when benefits are paid (often summarised as E/T for exempt/taxed at each stage, e.g. 'EET').",
                  "explain": "EET — relief on contributions, exempt growth, taxed benefits — is the common pattern for pensions, deferring tax to when income is likely to be lower."
              },
              {
                  "q": "Why might a government encourage private pension provision through tax?",
                  "a": "To reduce future reliance on State benefits, encourage long-term saving, support capital markets, and help an ageing population maintain living standards.",
                  "explain": "The cost to the government (revenue forgone) is why reliefs are usually capped and why tax rules change over time — a source of scheme design risk."
              },
              {
                  "q": "What is a protection (compensation) fund, and one moral hazard it creates?",
                  "a": "A scheme that pays compensation to members of DB schemes whose sponsors become insolvent with the scheme underfunded, funded by levies on schemes. Moral hazard: sponsors or trustees may take more investment or funding risk knowing that members are partly protected.",
                  "explain": "Risk-based levies (charging more to weaker or riskier schemes) are the usual mitigation."
              },
              {
                  "q": "Why might regulation require schemes to be run separately from the sponsor?",
                  "a": "Placing assets in a separate legal entity (e.g. a trust) ring-fences them from the sponsor's creditors, so they remain available to pay benefits if the sponsor fails.",
                  "explain": "This is the basic security mechanism of funded schemes; unfunded (book-reserve) schemes depend entirely on the sponsor's solvency."
              },
              {
                  "q": "What regulatory issues arise with DC schemes specifically?",
                  "a": "Charges and value for money, default investment strategy suitability, governance of investment choices, clear communication of risks, and protection of members at the point of retirement (drawdown and annuity choices).",
                  "explain": "Because members bear the risk, DC regulation concentrates on governance, charges and information rather than funding."
              },
              {
                  "q": "Why might equality legislation affect benefit design?",
                  "a": "Benefits must not discriminate unlawfully (e.g. by sex, age or part-time status), which can force equalisation of retirement ages or benefit terms and change the cost of the scheme.",
                  "explain": "Equalisation exercises can be expensive because the usual legal outcome is to 'level up' the less favourable group."
              },
              {
                  "q": "Why might regulation change, and why is that a risk for schemes?",
                  "a": "Governments respond to demographic pressures, political priorities, fiscal needs and scheme failures. Changes to funding rules, tax relief or benefit requirements can alter costs retrospectively and make long-term planning harder.",
                  "explain": "Regulatory risk appears again in Chapter 9 as one of the risks affecting benefit design and financing."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Disclosure and guidance",
          "description": "What information schemes must disclose and to whom, the purpose of accounting standards for benefit costs and how they differ from funding measures, and the professional guidance that governs the actuary's own advice.",
          "cards": [
              {
                  "q": "Why is disclosure of information important in benefit provision?",
                  "a": "It lets members understand and plan around their benefits, allows stakeholders to scrutinise how the scheme is run and funded, supports regulatory oversight, and informs investors about the sponsor's pension obligations.",
                  "explain": "Disclosure is the counterpart of 'freedom with publicity' regulation from Chapter 3 — flexibility is tolerated because choices are made visible."
              },
              {
                  "q": "Give examples of key information to disclose to members after a valuation.",
                  "a": "The funding level and deficit or surplus on the scheme's measure; the contributions agreed (including any recovery plan); the solvency or buy-out position; any payments made to the sponsor; and how members can get further information.",
                  "explain": "Pick items members can understand and act on — the aim is security and transparency, not a copy of the actuarial report."
              },
              {
                  "q": "What information should a member receive on joining a scheme?",
                  "a": "Eligibility, contribution rates, the benefits provided and how they are calculated, options available, how the scheme is governed and funded, and whom to contact.",
                  "explain": "Good answers relate the information to decisions the member faces: whether to join, how much to contribute, which investment options to choose."
              },
              {
                  "q": "What are the purposes of accounting standards for benefit costs?",
                  "a": "To give a consistent, comparable and transparent measure of the cost of benefits and of the obligations on the sponsor's balance sheet, so that investors can assess the company's financial position and performance.",
                  "explain": "Accounting measures are for the sponsor's shareholders; funding measures are for the security of members. The two serve different purposes, so they use different assumptions."
              },
              {
                  "q": "Why might the accounting liability differ from the funding liability for the same scheme?",
                  "a": "Accounting standards often prescribe the method and some assumptions (e.g. a discount rate based on high-quality corporate bond yields, best-estimate other assumptions), whereas funding assumptions are set by the trustees and actuary with prudence and reflect the investment strategy and covenant.",
                  "explain": "Expect exam questions to ask why the sponsor sees a different number in its accounts from the one the trustees are negotiating over."
              },
              {
                  "q": "Which funding method do accounting standards typically require for DB costs?",
                  "a": "The projected unit (credit) method, allowing for future salary increases in accrued benefits.",
                  "explain": "This keeps accrued liabilities consistent across companies. The mechanics are those of Chapter 16's projected unit method."
              },
              {
                  "q": "Name the main components of a DB pension cost in a typical accounting standard.",
                  "a": "Service cost (value of benefits accrued in the year); net interest on the net liability (or asset); and remeasurement gains or losses arising from experience and assumption changes — plus past service costs and settlement effects where relevant.",
                  "explain": "The split matters to sponsors because it determines what hits the profit and loss account versus other comprehensive income."
              },
              {
                  "q": "Why does using a market-related discount rate make accounting results volatile?",
                  "a": "Liabilities are revalued at each reporting date using current bond yields, so movements in yields change the reported deficit even if nothing else about the scheme has changed; asset values move with markets too, often not in step with liabilities.",
                  "explain": "This volatility is one reason sponsors have pushed schemes towards liability-matching investment strategies (Chapter 13)."
              },
              {
                  "q": "What is 'defined contribution accounting' in outline?",
                  "a": "The sponsor simply recognises the contributions payable for the period as the cost; there is no liability beyond contributions due.",
                  "explain": "This is one reason employers find DC attractive — the balance sheet carries no long-term pension obligation."
              },
              {
                  "q": "What does professional guidance for actuaries typically cover?",
                  "a": "Standards on the quality of data, assumptions, models and reporting; requirements for documentation, communication and conflict management; and specific requirements for statutory roles.",
                  "explain": "Chapter 17's data checks and Chapter 18's assumption-setting both have professional standards behind them — cite them in 'what should the actuary consider' answers."
              },
              {
                  "q": "Why must an actuary manage conflicts of interest in pensions work?",
                  "a": "The same firm may advise trustees and sponsor, whose interests differ; the actuary's advice must be seen to be objective, so conflicts need identifying, disclosing and managing (e.g. separate teams or declining one role).",
                  "explain": "A classic scenario: the scheme actuary is asked by the sponsor to justify a weaker funding basis — professionalism requires advice in the client's (trustees') interest."
              },
              {
                  "q": "What should an actuarial report for a funding valuation communicate?",
                  "a": "Purpose and scope, data and its limitations, the method and assumptions and why they were chosen, results and their sensitivity to key assumptions, recommended contributions, and any material risks or uncertainties.",
                  "explain": "Sensitivity analysis is particularly important — readers need to know how far the results could move if assumptions are wrong."
              },
              {
                  "q": "How should information be pitched for different audiences?",
                  "a": "Members need clear, jargon-free summaries focused on their benefits; trustees need enough technical content to make decisions; regulators need standardised data; sponsors need financial impact and cash implications.",
                  "explain": "This echoes CP3's audience principle: the same result is communicated differently to different stakeholders."
              },
              {
                  "q": "Why might a scheme need to disclose charges clearly to DC members?",
                  "a": "Charges reduce the fund that buys the pension; small differences compound over decades into large differences in outcomes, and members cannot judge value for money without knowing them.",
                  "explain": "Charges are often a central theme in DC governance and default-fund design questions."
              },
              {
                  "q": "What is the risk of disclosing too much information to members?",
                  "a": "Information overload: key messages get lost, members disengage, and complex information may be misunderstood, leading to poor decisions.",
                  "explain": "Layered disclosure — a short summary with more detail available — is the usual answer."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Benefit provision",
          "description": "How benefits are provided by the State, public-sector employers, private-sector employers and individuals, the different forms of provision (pay-as-you-go, funded, insured), and how the pillars of provision fit together to meet people's needs.",
          "cards": [
              {
                  "q": "What financial needs do benefits aim to meet?",
                  "a": "Income in retirement; income on death (for dependants) or ill-health and disability; support in unemployment; and the cost of medical or long-term care.",
                  "explain": "Each need can be met by the State, the employer or the individual, and the mix differs widely between countries."
              },
              {
                  "q": "Why is State provision typically financed on a pay-as-you-go basis?",
                  "a": "The State can rely on future taxation, so it need not build up assets; PAYG lets benefits start immediately without an accumulation period, and avoids the State owning large amounts of capital.",
                  "explain": "The drawback is demographic: as the ratio of workers to pensioners falls, the contribution rate needed rises."
              },
              {
                  "q": "How does an ageing population affect a PAYG system?",
                  "a": "Fewer workers support more pensioners, so either contributions (taxes) must rise, benefits must fall, or pension ages must increase.",
                  "explain": "This demographic pressure is the main reason governments encourage private funded provision."
              },
              {
                  "q": "What is the difference between social insurance and social assistance?",
                  "a": "Social insurance pays benefits based on contributions made (entitlement earned by contributing); social assistance pays means-tested benefits to those in need, regardless of contribution history.",
                  "explain": "Means-tested benefits can discourage private saving if saving reduces entitlement — an interaction worth raising in design questions."
              },
              {
                  "q": "How can public-sector employer schemes differ from private-sector schemes?",
                  "a": "They are often unfunded or notionally funded (paid from government revenue), may be defined by statute, often remain DB when private schemes have closed, and are backed by the taxpayer rather than a commercial sponsor.",
                  "explain": "Because the sponsor is the State, covenant risk is low, but political and affordability risk (benefit changes by legislation) is higher."
              },
              {
                  "q": "Give three ways an employer can provide benefits.",
                  "a": "Through a funded occupational scheme (DB, DC or hybrid); by buying insurance policies for employees (group life, group income protection, annuities); through book-reserve (unfunded) promises; or by contributing to individual arrangements chosen by employees.",
                  "explain": "The choice depends on the employer's attitude to risk, cash flow, tax treatment and administrative capacity."
              },
              {
                  "q": "How can individuals provide for their own benefits?",
                  "a": "Through personal pension products, general savings and investments, insurance (life, income protection, critical illness), property, and family support.",
                  "explain": "Individual provision gives flexibility but members bear all risks and costs, and many people under-save — hence auto-enrolment style policies."
              },
              {
                  "q": "What is meant by the 'pillars' of retirement provision?",
                  "a": "A framework dividing provision into State (basic or earnings-related), mandatory or quasi-mandatory occupational, and voluntary individual saving (sometimes with further pillars for non-financial support).",
                  "explain": "Framing an answer by pillars helps show how a change in one (e.g. a cut in State pension) increases the need for another."
              },
              {
                  "q": "What is auto-enrolment, and why might a government adopt it?",
                  "a": "Employers must enrol eligible workers into a scheme automatically, with the right to opt out. It uses inertia to raise participation in private saving without making it compulsory.",
                  "explain": "It is a behavioural-economics solution: default choices strongly affect outcomes, so setting the default to 'saving' raises coverage."
              },
              {
                  "q": "What is the difference between funded and unfunded provision?",
                  "a": "Funded: assets are set aside in advance to meet benefits. Unfunded: benefits are paid out of current revenue as they fall due, with no assets built up (PAYG or book reserve).",
                  "explain": "Chapter 10 develops the pros and cons in detail; the key trade-offs are security versus cash flow and investment risk."
              },
              {
                  "q": "What is a book-reserve scheme?",
                  "a": "An arrangement where the employer recognises the liability on its balance sheet but does not set aside separate assets — benefits are paid from the company's own resources.",
                  "explain": "Security depends entirely on the employer's solvency, so book-reserve schemes are often backed by compulsory insolvency insurance."
              },
              {
                  "q": "Why might the State provide only a basic flat-rate pension?",
                  "a": "To prevent poverty in old age at a manageable cost, leaving earnings replacement to employer and individual provision.",
                  "explain": "The level of State provision is a key input when designing an employer scheme: it defines the gap the scheme is meant to fill."
              },
              {
                  "q": "What is 'integration' of an employer scheme with State benefits?",
                  "a": "Designing the scheme's benefits or contributions to take account of State provision — e.g. deducting an offset from pensionable salary so the combined benefit, not the scheme alone, reaches the target.",
                  "explain": "Integration keeps total provision appropriate across earnings levels but can make low earners' scheme benefits very small."
              },
              {
                  "q": "Compare State, employer and individual provision on security.",
                  "a": "State: backed by taxation but subject to political change. Employer DB: depends on funding level and sponsor covenant. Individual/DC: no sponsor risk, but exposed to investment and annuity-price risk.",
                  "explain": "No form of provision is risk-free — the risks are just different and borne by different people."
              },
              {
                  "q": "How might high inflation affect the different forms of provision?",
                  "a": "Unindexed DB pensions lose real value; indexed DB pensions become more expensive for sponsors; DC funds' real value depends on asset returns relative to inflation; State pensions may be uprated, increasing taxpayer cost.",
                  "explain": "Inflation risk shows how design choices (indexation, investment) decide who bears an economic risk."
              }
          ]
      },
      {
          "id": "m06",
          "title": "Scheme design – general",
          "description": "The general factors that shape the design of a pension or other benefit arrangement: the sponsor's objectives, the type of scheme (DB, DC, hybrid, risk-sharing), governance, affordability and cost, and how risk is shared between the parties.",
          "cards": [
              {
                  "q": "List the main factors to consider when designing a benefit scheme.",
                  "a": "The sponsor's objectives and attitude to risk; members' needs; type of scheme (DB, DC, hybrid); level and form of benefits and contributions; how benefits will be financed; how risk is shared; choice of assets; governance; State provision and competitors; tax and regulation; administration cost and complexity.",
                  "explain": "This matches syllabus objective 2.2 closely — use it as a skeleton for any 'suggest a design' question."
              },
              {
                  "q": "What are the main advantages of DB schemes for members?",
                  "a": "A predictable benefit linked to earnings; investment, longevity and inflation (if indexed) risks borne by the sponsor; often valuable ancillary benefits.",
                  "explain": "From the member's side DB is simple to understand in outcome terms: the benefit is known, the cost is not."
              },
              {
                  "q": "Why have many private-sector employers moved from DB to DC?",
                  "a": "DB costs are uncertain and volatile, deficits hit the balance sheet, regulation and longevity improvements have raised costs, and DC gives cost certainty and simpler accounting.",
                  "explain": "The shift transfers risk to members, which raises questions about adequacy and members' ability to manage those risks."
              },
              {
                  "q": "What is a hybrid scheme? Give two examples.",
                  "a": "A scheme combining DB and DC features. Examples: a DB scheme with a DC top-up; 'better of' DB and DC; a cash-balance scheme (a guaranteed lump sum credit growing at a defined rate); DB up to a salary threshold with DC above it.",
                  "explain": "Hybrids share risk between sponsor and members rather than putting it all on one side."
              },
              {
                  "q": "What is a cash-balance scheme?",
                  "a": "An arrangement where members are credited with a defined amount (e.g. a percentage of salary each year) which grows at a rate set by the scheme, not by actual asset returns; the sponsor bears the investment risk up to retirement, but the member bears annuity-conversion and longevity risk thereafter.",
                  "explain": "A good example of splitting risks by phase: pre-retirement risk with the sponsor, post-retirement with the member."
              },
              {
                  "q": "What is a collective defined contribution (risk-sharing) scheme?",
                  "a": "A scheme where contributions are fixed but benefits are targeted rather than guaranteed; assets are pooled, and benefits are adjusted up or down collectively depending on experience.",
                  "explain": "Pooling gives members longevity and investment smoothing that individual DC lacks, but benefits can be cut — clear communication is essential."
              },
              {
                  "q": "Why does governance matter in scheme design?",
                  "a": "Complex designs need capable trustees and administrators; decisions on discretion, investment and options need clear responsibility; poor governance leads to errors, poor member outcomes and regulatory breaches.",
                  "explain": "A design that the sponsor cannot administer well is a bad design, however elegant."
              },
              {
                  "q": "How does the sponsor's attitude to risk affect design?",
                  "a": "A risk-averse sponsor will prefer DC or tightly capped DB (e.g. limited indexation, career-average salary) to limit cost volatility; a risk-tolerant, financially strong sponsor may accept DB in return for its recruitment and retention value.",
                  "explain": "Always link the recommended design to the sponsor's stated objectives in the scenario."
              },
              {
                  "q": "What factors determine the appropriate level of benefits?",
                  "a": "Target replacement ratio, State benefits, what competitors provide, affordability, tax limits, members' other provision and the sponsor's objectives (e.g. recruitment).",
                  "explain": "Replacement ratio questions often ask why a target below 100% of pay might be appropriate — see the next card."
              },
              {
                  "q": "Why might a net replacement ratio below 100% be appropriate?",
                  "a": "In retirement, work-related costs stop, mortgages may be paid off, children may be independent, tax and social security contributions may be lower, and State benefits add to the scheme pension.",
                  "explain": "'Net' means after tax: comparing net income before and after retirement is what matters for living standards."
              },
              {
                  "q": "What is the trade-off between final salary and career-average benefits?",
                  "a": "Final salary links benefits to pay at retirement, protecting members against inflation during service but making cost sensitive to late-career pay rises; career-average bases benefits on pay throughout service (usually revalued), which is cheaper and fairer between high and low flyers but less generous to those promoted late.",
                  "explain": "Career-average also reduces the sponsor's exposure to salary-inflation risk — a design lever for cost control."
              },
              {
                  "q": "Why might contributions be shared between employer and member?",
                  "a": "It spreads the cost, gives members a stake in the scheme, may be tax-efficient, and can be used to share risk (e.g. member contributions varying with funding level).",
                  "explain": "Member contribution rates also affect participation — high rates can deter lower earners from joining a voluntary scheme."
              },
              {
                  "q": "What is meant by 'risk sharing' in scheme design?",
                  "a": "Deciding which party bears each risk — investment, longevity, inflation, salary growth — and to what extent, e.g. through capped indexation, variable member contributions, conditional benefits or hybrid designs.",
                  "explain": "Designs are best compared by listing each risk and saying who bears it under each option."
              },
              {
                  "q": "Why must asset choice be considered at the design stage?",
                  "a": "For funded schemes, the liabilities created by the design (e.g. inflation-linked pensions) determine which assets would match them, and a design whose liabilities cannot be matched carries more risk.",
                  "explain": "This links design (Chapter 6) to investment (Chapter 13): a good design considers how it could be backed."
              },
              {
                  "q": "Why must administration be considered in design?",
                  "a": "Complex benefit rules raise administration cost, the risk of errors and the difficulty of communicating benefits clearly, and can require systems the sponsor does not have.",
                  "explain": "Simplicity is a design objective in its own right — often under-weighted in exam answers."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Scheme design – specifics",
          "description": "The specific benefit features that make up a scheme: eligibility, pensionable pay and service, accrual rates, normal pension age, benefits on death, ill-health and leaving service, increases in deferment and in payment, and contribution structures.",
          "cards": [
              {
                  "q": "List the specific features that define a DB pension benefit.",
                  "a": "Eligibility; definition of pensionable salary; pensionable service; accrual rate; normal pension age; form of benefit (pension, lump sum); revaluation in deferment; increases in payment; death, ill-health and leaving-service benefits; member contribution rate.",
                  "explain": "Each feature is a lever on cost and risk — e.g. a higher normal pension age or lower accrual rate reduces cost."
              },
              {
                  "q": "What is the accrual rate?",
                  "a": "The fraction of pensionable salary earned as pension for each year of pensionable service, e.g. 1/60th of final pensionable salary per year of service.",
                  "explain": "A 1/60 scheme gives two-thirds of salary after 40 years' service — a common historical benchmark for a full career pension."
              },
              {
                  "q": "Why might pensionable salary exclude some elements of pay?",
                  "a": "To limit cost and volatility (excluding overtime, bonuses or benefits in kind), to integrate with State benefits (deducting an offset), or because some pay elements are irregular and hard to administer.",
                  "explain": "Averaging pensionable pay over several years is another way to dampen the effect of one-off pay spikes."
              },
              {
                  "q": "What is normal pension age, and why does it matter for cost?",
                  "a": "The age at which a member can take an unreduced pension. A higher age means fewer years of payment and more years of contributions and investment returns, reducing cost.",
                  "explain": "Longevity improvements have pushed many schemes to raise pension ages or link them to State pension age."
              },
              {
                  "q": "Give three benefits commonly payable on death before retirement.",
                  "a": "A lump sum (often a multiple of salary); a dependant's pension; a refund of member contributions (possibly with interest).",
                  "explain": "Death-in-service lump sums are often insured (Chapter 22) because the cost is volatile for a small scheme."
              },
              {
                  "q": "Give two benefits commonly payable on death after retirement.",
                  "a": "A spouse's or dependant's pension (often a fraction such as 50% of the member's pension) and a guarantee that pension payments continue for a minimum period (e.g. five years) regardless of death.",
                  "explain": "Guarantee periods protect against early death straight after retirement — a comfort feature that adds modest cost."
              },
              {
                  "q": "What are ill-health retirement benefits, and a design issue they raise?",
                  "a": "An immediate pension paid if a member retires early due to ill-health, often with service credited to normal pension age. Design issue: defining eligibility (which degree of incapacity) and controlling selection and cost.",
                  "explain": "Strict medical evidence and a clear definition reduce anti-selection; generous terms can be used as a disguised redundancy tool."
              },
              {
                  "q": "What happens to a DB member's benefits on leaving service before retirement?",
                  "a": "Typically a deferred pension payable from normal pension age, revalued between leaving and retirement; possibly an option to transfer out a cash equivalent; for very short service, perhaps a refund of contributions.",
                  "explain": "Leaving-service terms matter for equity between leavers and stayers, and revaluation in deferment is a significant cost."
              },
              {
                  "q": "Why might increases on pensions in payment be capped?",
                  "a": "Full inflation indexation is expensive and exposes the sponsor to high-inflation risk; a cap (e.g. inflation up to 5% a year) limits the cost and risk while protecting against moderate inflation.",
                  "explain": "Capped increases create option-like liabilities that are harder to hedge exactly with standard index-linked assets."
              },
              {
                  "q": "What is revaluation in deferment?",
                  "a": "Increases applied to a deferred member's pension between leaving service and retirement, e.g. in line with prices, possibly capped.",
                  "explain": "Without revaluation, early leavers' pensions lose real value — which is why legislation often mandates a minimum."
              },
              {
                  "q": "What is the difference between guaranteed and discretionary increases?",
                  "a": "Guaranteed increases are required by the rules or law, so must be funded. Discretionary increases are granted by trustees or sponsor when affordable, often out of surplus.",
                  "explain": "Discretionary increases can be allowed for in the funding assumptions — or not; that choice affects both cost and members' expectations."
              },
              {
                  "q": "What is a lump-sum commutation option at retirement?",
                  "a": "The member can give up part of the pension in exchange for a cash lump sum, using commutation factors set by the scheme.",
                  "explain": "Commutation factors below the actuarial value of pension given up produce a profit to the scheme — this links to option terms in Chapter 8."
              },
              {
                  "q": "How can member contribution structures vary?",
                  "a": "A fixed percentage of salary; tiered rates linked to benefit levels; contributions linked to the funding level (sharing risk); or a choice of contribution and benefit levels.",
                  "explain": "Variable contributions linked to funding share investment risk with members, but make budgeting harder for them."
              },
              {
                  "q": "Why do DC schemes need design decisions even though benefits are not defined?",
                  "a": "Contribution rates (employer and member, matching structures), default investment strategy, investment choices, charges, options at retirement and death benefits all determine member outcomes.",
                  "explain": "In DC, the default fund design is arguably the most important decision, because most members never make an active choice."
              },
              {
                  "q": "What is a 'matching' contribution structure in DC?",
                  "a": "The employer contributes more if the member chooses to contribute more (e.g. matching the member's contributions up to a limit).",
                  "explain": "Matching encourages higher saving but can increase inequality between engaged and disengaged members."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Scheme design – options",
          "description": "Options offered to members — early and late retirement, commutation, transfers out, dependants' benefit choices, flexible retirement income — how their terms are set, when consent is needed, and the risk and reward they create for members, sponsor and scheme.",
          "cards": [
              {
                  "q": "Give five options commonly offered to DB members.",
                  "a": "Early retirement; late retirement; commutation of pension for cash; transfer of benefits to another arrangement; surrender of pension for a dependant's pension; exchanging increases for a higher starting pension; additional voluntary contributions.",
                  "explain": "Syllabus objective 3.3 asks for the factors in setting terms and consent requirements for options — a very common exam area."
              },
              {
                  "q": "What factors should be considered when setting terms for a member option?",
                  "a": "Cost neutrality versus generosity; the assumptions (discount rate, mortality) used; selection risk; consistency with other terms and the funding basis; simplicity; legal requirements; the effect on scheme funding; fairness to members who don't take the option; administration.",
                  "explain": "Answers score well when they explain how each factor would push terms up or down, not just list them."
              },
              {
                  "q": "What is anti-selection in the context of member options?",
                  "a": "Members choose options that benefit them given private information — e.g. those in poor health take cash rather than pension — which makes the option cost more than expected if terms assume average mortality.",
                  "explain": "Mitigations: less generous terms, medical evidence for options that favour the healthy, or restricting when options can be exercised."
              },
              {
                  "q": "Why might consent from trustees or the sponsor be required before an option is exercised?",
                  "a": "To control cost (e.g. unreduced early retirement), to prevent anti-selection, to protect scheme funding, and to allow the scheme to decline options that would harm other members.",
                  "explain": "Consent requirements trade member flexibility for scheme control — a classic risk-and-reward balance."
              },
              {
                  "q": "How are early retirement terms usually set?",
                  "a": "By applying a reduction factor to the accrued pension to reflect earlier and longer payment; factors may be actuarially neutral, subsidised (cheaper than neutral) or penal.",
                  "explain": "Subsidised early retirement can be used by a sponsor to manage workforce reductions, at a cost to the scheme."
              },
              {
                  "q": "What is a cash equivalent transfer value?",
                  "a": "The lump sum a member can transfer to another arrangement in place of their deferred benefits, usually calculated as the value of those benefits on a specified basis.",
                  "explain": "The basis may be best-estimate, funding or market-related; paying transfers above the funding value weakens the scheme for remaining members."
              },
              {
                  "q": "Why might transfer values be reduced when a scheme is underfunded?",
                  "a": "Paying the full value of benefits to leavers would take more than their share of the assets, worsening security for those who remain.",
                  "explain": "This is an equity-between-members argument; legislation often permits reductions only with actuarial advice."
              },
              {
                  "q": "Why might a sponsor encourage members to transfer out?",
                  "a": "To reduce the size of the scheme's liabilities and associated risks (investment, longevity, inflation) and potentially at a cost below the funding value.",
                  "explain": "Enhanced transfer exercises raise conduct issues: members may give up valuable guarantees, so independent advice is often required."
              },
              {
                  "q": "What is the effect of commutation terms on scheme funding?",
                  "a": "If the cash offered is less than the value of pension given up on the funding basis, commutation generates a surplus; if more, a strain.",
                  "explain": "Commutation factors are often set with simplicity and past practice in mind, and can be well below market value — making commutation a source of surplus (Chapter 20)."
              },
              {
                  "q": "What is a pension increase exchange option?",
                  "a": "Members give up future non-statutory increases in return for a higher, flat (or less indexed) pension now.",
                  "explain": "It reduces inflation and longevity risk for the sponsor; members may value the higher immediate income, but it is a complex choice needing clear information."
              },
              {
                  "q": "How can late retirement be handled?",
                  "a": "Either the pension is increased by a late retirement factor to reflect the deferred start, or the member continues accruing benefits, or the deferred payments are accumulated with interest.",
                  "explain": "Late retirement is usually less valuable to anti-select than early retirement, but terms still need to be broadly cost-neutral."
              },
              {
                  "q": "Why should options be communicated carefully?",
                  "a": "Members often lack the information or expertise to judge value — e.g. whether a transfer or lump sum is good value — so poor communication can lead to decisions they regret.",
                  "explain": "Regulators increasingly require risk warnings and advice for irreversible, high-value decisions."
              },
              {
                  "q": "What options do DC members typically have at retirement?",
                  "a": "Buy an annuity (level, increasing, joint life); drawdown (keeping the fund invested and taking income); take cash (fully or partly); or combine these.",
                  "explain": "Each option shifts longevity and investment risk differently between the member and an insurer."
              },
              {
                  "q": "What are the risks to a DC member of taking income drawdown?",
                  "a": "Investment risk, running out of money if they live longer than expected (longevity risk), sequence-of-returns risk and poor decision-making in later life.",
                  "explain": "Annuities remove these risks at the cost of flexibility and, often, a lower perceived value."
              },
              {
                  "q": "How should option terms be reviewed over time?",
                  "a": "Regularly (e.g. at each valuation) against the current funding basis and market conditions, allowing for changes in longevity, interest rates and experience of how members exercise options.",
                  "explain": "Stale option terms can quietly generate large strains or surpluses — monitoring them is part of the control cycle."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Risks and uncertainty",
          "description": "The risks affecting benefit provision — to the level and timing of benefits, contributions and asset returns, to the exhaustion of assets in a member's lifetime and to the overall security of benefits — who bears each risk, and which can or cannot be insured.",
          "cards": [
              {
                  "q": "Name the five areas of risk the SP4 syllabus highlights.",
                  "a": "Risks to the level and incidence of benefits; of contributions; of the return on assets; the extent to which assets are exhausted during a member's lifetime; and the overall security of benefits.",
                  "explain": "These five headings make a good structure for any 'describe the risks' question — then say who bears each risk under the design in the scenario."
              },
              {
                  "q": "Give four risks affecting the level of DB benefits.",
                  "a": "Salary growth higher than expected; inflation (for indexed benefits); longevity improvements; option take-up; benefit changes from legislation or equalisation; data errors.",
                  "explain": "In DB these mostly fall on the sponsor as higher cost; in DC they fall on the member as lower benefits."
              },
              {
                  "q": "What is longevity risk, and why is it hard to manage?",
                  "a": "The risk that people live longer than assumed, so pensions are paid for longer. It is systematic (affects all members together), long-term and hard to diversify within one scheme.",
                  "explain": "Mitigations include longevity swaps, buy-ins and buy-outs (Chapter 22), and linking pension ages to life expectancy."
              },
              {
                  "q": "What is investment risk for a DB scheme?",
                  "a": "The risk that assets return less than assumed or fall in value relative to the liabilities — including mismatch risk where asset values do not move with liability values.",
                  "explain": "For DB the key measure is assets relative to liabilities, not absolute returns: a gilt fall can be harmless if liabilities fall too."
              },
              {
                  "q": "What risks affect the contributions a sponsor must pay?",
                  "a": "Poor investment returns, adverse demographic experience, changes in assumptions or funding rules, benefit improvements, and the sponsor's own financial position affecting what is affordable.",
                  "explain": "Contribution volatility matters to the sponsor as much as the average cost — funding methods and smoothing (Chapter 16) exist partly to manage it."
              },
              {
                  "q": "What is meant by the risk that assets are exhausted during a member's lifetime?",
                  "a": "In arrangements where the member draws income from their own fund (e.g. drawdown), the fund may run out before death if returns are poor or the member lives long.",
                  "explain": "Pooling via annuities or collective schemes removes this individual risk by sharing longevity across many lives."
              },
              {
                  "q": "What risks affect the overall security of DB benefits?",
                  "a": "Sponsor insolvency while the scheme is underfunded; poor governance or fraud; concentration of investment risk; regulatory change; operational failures.",
                  "explain": "Security is where sponsor covenant (Chapter 11) and funding level combine — a weak sponsor with a deficit is the worst case."
              },
              {
                  "q": "What is inflation risk, and who bears it?",
                  "a": "The risk that price or wage inflation erodes benefits or raises costs. In indexed DB schemes the sponsor bears it; in unindexed schemes and many DC arrangements members bear it through lower real benefits.",
                  "explain": "Inflation also affects asset returns, so the net risk depends on the asset-liability match."
              },
              {
                  "q": "What is operational risk in a pension scheme?",
                  "a": "Loss from inadequate processes, people or systems: administration errors, incorrect benefit payments, fraud, cyber attacks, poor record keeping.",
                  "explain": "Data quality problems (Chapter 17) are an operational risk that feeds straight into valuation errors."
              },
              {
                  "q": "Which pension risks can be insured?",
                  "a": "Mortality on death benefits, ill-health and disability, longevity (via annuities, buy-ins, longevity swaps), and to some extent investment risk through guaranteed products.",
                  "explain": "The syllabus explicitly asks for risks that can and cannot be insured — see the next card."
              },
              {
                  "q": "Give three pension risks that are hard or impossible to insure.",
                  "a": "Regulatory and legislative change; sponsor-specific covenant risk (except partially via credit instruments); inflation in unusual forms; reputational risk; the risk of poor decisions by members.",
                  "explain": "Where insurance is unavailable, mitigation relies on design, governance and diversification."
              },
              {
                  "q": "What is 'mismatch risk'?",
                  "a": "The risk arising because the assets held do not have the same characteristics (term, currency, inflation-linkage) as the liabilities, so their values move differently.",
                  "explain": "Mismatch can be deliberate — to seek higher returns — but should be a conscious, measured decision."
              },
              {
                  "q": "What is the difference between risk and uncertainty in this context?",
                  "a": "Risk is variability that can be modelled with reasonable probabilities (e.g. investment returns); uncertainty covers outcomes that cannot be well quantified (e.g. future legislation or long-term longevity trends).",
                  "explain": "Unquantifiable uncertainty is handled by prudence, scenario testing and flexible designs rather than by probabilistic models alone."
              },
              {
                  "q": "How can scheme design reduce risk for the sponsor?",
                  "a": "Moving to DC or hybrid designs; capping indexation; using career-average pay; linking pension age to life expectancy; sharing contributions; making benefits conditional.",
                  "explain": "Each of these shifts rather than eliminates risk — say to whom."
              },
              {
                  "q": "Why is concentration risk relevant to pension schemes?",
                  "a": "Holding too much in one asset, sector or counterparty (including the sponsor) means a single failure can cause large losses.",
                  "explain": "Diversification and limits on employer-related investment are the standard mitigations."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Financing benefits",
          "description": "How and when benefits can be paid for: pay-as-you-go, terminal funding, advance funding and just-in-time approaches, the advantages and disadvantages of each, and the financial instruments (including contingent assets) that can back benefit promises.",
          "cards": [
              {
                  "q": "List the main methods of financing benefits by timing of contributions.",
                  "a": "Pay-as-you-go (pay benefits as they fall due); terminal funding (pay the full value when a benefit starts, e.g. buy an annuity at retirement); regular advance funding over working lifetime; lump-sum funding in advance; just-in-time funding (fund only when a trigger occurs).",
                  "explain": "The key distinction is whether assets are built up before benefits start and by how much."
              },
              {
                  "q": "Give two advantages of pay-as-you-go financing.",
                  "a": "No need to set aside capital, so cash is kept in the business or economy; no investment risk from holding assets; simple; benefits can start immediately for existing members.",
                  "explain": "PAYG suits the State (which can tax future generations) far better than a private employer (which may not exist in future)."
              },
              {
                  "q": "Give two disadvantages of pay-as-you-go financing for an employer.",
                  "a": "No security for members if the employer fails; costs rise as the membership matures; costs fall on future owners and workers rather than those who benefited from the employees' service; no investment income to reduce cost.",
                  "explain": "The maturity effect is the key technical point: the PAYG cost rate rises steeply as pensioners accumulate."
              },
              {
                  "q": "What is terminal funding?",
                  "a": "Paying the whole capital cost of a benefit at the point it comes into payment, typically by buying an annuity or transferring a lump sum to a separate fund.",
                  "explain": "It gives security once in payment, but no security for accrued benefits of active members, and costs fluctuate with the number and timing of retirements."
              },
              {
                  "q": "What are the advantages of advance funding?",
                  "a": "Security for members, independent of the sponsor; costs spread over the working lifetime of the members who earn the benefits; investment returns reduce the ultimate cost; cost is more stable as the scheme matures.",
                  "explain": "Advance funding matches cost with the period of service, which is also how accounting standards view the cost."
              },
              {
                  "q": "What are the disadvantages of advance funding for a sponsor?",
                  "a": "Cash is tied up in a separate fund rather than used in the business; investment risk and potential mismatch; possible trapped surplus if the fund proves too large; administration and governance cost.",
                  "explain": "The opportunity cost of cash matters most to a sponsor with good internal investment opportunities or cash-flow constraints."
              },
              {
                  "q": "What is 'just-in-time' funding?",
                  "a": "Holding little or no advance funding but committing to pay contributions (or provide assets) only when a trigger occurs, such as sponsor distress or scheme wind-up.",
                  "explain": "It relies heavily on the trigger working and the sponsor being able to pay at that moment — often exactly when it cannot."
              },
              {
                  "q": "What is a contingent asset?",
                  "a": "An asset that becomes available to the scheme only if a specified event happens, such as a charge over property, a parent company guarantee, a letter of credit or escrow account.",
                  "explain": "Contingent assets let a sponsor improve security without paying cash now; their value depends on being legally enforceable and available when needed."
              },
              {
                  "q": "Give three types of financial instrument that can back benefit promises.",
                  "a": "Conventional and index-linked bonds; equities and property; derivatives (swaps) for hedging; insurance policies (annuities, buy-ins); contingent assets; escrow accounts.",
                  "explain": "The syllabus includes contingent assets and insurance products explicitly — show you know they sit alongside ordinary investments."
              },
              {
                  "q": "How does the choice of financing method depend on the sponsor?",
                  "a": "A strong, stable sponsor can tolerate less advance funding; a weaker or cyclical sponsor should fund in advance to protect members; tax and regulation may favour or require funding.",
                  "explain": "Always relate the financing choice to covenant strength (Chapter 11) and regulation (Chapter 3)."
              },
              {
                  "q": "Why does maturity matter when choosing a financing method?",
                  "a": "In a mature scheme with many pensioners, PAYG costs are high and the benefit outgo is large relative to contributions; advance funding keeps the cost rate stable across the scheme's life.",
                  "explain": "A new scheme under PAYG looks cheap at first — a trap for sponsors who ignore the future cost profile."
              },
              {
                  "q": "How can insurance products be used to finance benefits?",
                  "a": "By buying annuities at retirement (terminal funding), insuring death and ill-health benefits, or buying bulk annuities (buy-ins) as scheme assets.",
                  "explain": "Insurance converts uncertain future costs into a known premium now, at the price of the insurer's margins."
              },
              {
                  "q": "What is the role of member contributions in financing?",
                  "a": "They reduce the sponsor's cost, may attract tax relief and can be used to share risk if they vary with the funding position.",
                  "explain": "Member contributions change the equity between members and sponsor — relevant when surplus or deficit is shared."
              },
              {
                  "q": "What is an escrow account in a pensions context?",
                  "a": "A sum set aside by the sponsor with an independent party, payable to the scheme if agreed conditions arise (e.g. the deficit persists), otherwise returned to the sponsor.",
                  "explain": "It addresses the sponsor's fear of trapped surplus while giving trustees extra security — a compromise instrument."
              },
              {
                  "q": "How does financing interact with benefit design?",
                  "a": "Benefits that are hard to value or volatile (e.g. final salary, uncapped indexation) make advance funding more uncertain; simpler, more certain benefits are easier to fund and to insure.",
                  "explain": "This is the design-financing feedback loop the syllabus pairs together in topic 2."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Sponsor covenant",
          "description": "What the sponsor covenant is, why it matters for the security of DB benefits, how its strength can be measured, and how covenant assessment is integrated with funding and investment decisions.",
          "cards": [
              {
                  "q": "What is the sponsor covenant?",
                  "a": "The sponsor's legal obligation and financial ability to support the scheme now and in the future, i.e. to pay the contributions needed to fund the promised benefits.",
                  "explain": "Covenant is effectively the scheme's biggest unsecured 'asset' — its value is the sponsor's future ability to pay."
              },
              {
                  "q": "Why does covenant strength matter to trustees?",
                  "a": "If the scheme is underfunded, members' benefits depend on the sponsor continuing to pay; a weaker covenant means more risk that deficits will never be made good.",
                  "explain": "A strong covenant can justify more investment risk or a longer recovery plan; a weak one points the other way."
              },
              {
                  "q": "Give four methods for measuring sponsor covenant.",
                  "a": "Credit ratings and credit spreads; financial ratios (profitability, gearing, cash flow, interest cover); comparison of the deficit to the sponsor's size and cash generation; covenant adviser reviews; insolvency outcome analysis (what members would get on insolvency).",
                  "explain": "The syllabus asks for 'methods by which sponsor covenant can be measured' — examiners reward a range from market-based to accounting-based to qualitative."
              },
              {
                  "q": "Give three qualitative factors in assessing sponsor covenant.",
                  "a": "Industry outlook and competitive position; quality of management and strategy; the group structure and whether the parent will support the subsidiary; legal priority of the scheme relative to other creditors.",
                  "explain": "Quantitative measures describe the past; qualitative factors help judge the future ability to pay."
              },
              {
                  "q": "Why does the legal structure of the sponsor matter for covenant?",
                  "a": "The legal obligation may sit with a subsidiary with few assets, while the group's strength is elsewhere; without a parent guarantee, the scheme may not be able to call on group resources.",
                  "explain": "Parent company guarantees are therefore a common way to strengthen a weak covenant."
              },
              {
                  "q": "How is covenant integrated with funding decisions?",
                  "a": "A weaker covenant supports more prudent funding assumptions, shorter recovery plans and higher contributions now; a stronger covenant can support less prudence and longer recovery periods.",
                  "explain": "This 'integrated risk management' approach considers covenant, funding and investment together rather than separately."
              },
              {
                  "q": "How is covenant integrated with investment decisions?",
                  "a": "A scheme can only take investment risk that the sponsor could make good if things go wrong; a weak covenant supports lower-risk, better-matched assets.",
                  "explain": "Also consider correlation: if poor markets hit the sponsor and the assets at the same time, the effective risk is higher."
              },
              {
                  "q": "What is 'covenant leakage'?",
                  "a": "Value flowing out of the sponsor in ways that weaken its ability to support the scheme, e.g. large dividends, intra-group transfers or asset disposals.",
                  "explain": "Trustees may seek negative pledges or agreements that deficit contributions rise if dividends exceed a threshold."
              },
              {
                  "q": "How can a sponsor strengthen its covenant without paying cash immediately?",
                  "a": "Through parent company guarantees, contingent assets, charges over property, escrow accounts or agreed contribution triggers.",
                  "explain": "These instruments appear again in Chapter 10's financing discussion — they convert covenant into something more certain."
              },
              {
                  "q": "What is the covenant 'visibility' period?",
                  "a": "The period over which trustees can reasonably assess the sponsor's future ability to pay, beyond which forecasts are too uncertain to rely on.",
                  "explain": "Recovery plans extending well beyond this period place reliance on covenant that cannot be reasonably judged."
              },
              {
                  "q": "Why is covenant particularly relevant for a scheme near buy-out?",
                  "a": "The gap between the funding level and the buy-out cost must be met by the sponsor; a strong covenant makes it realistic to close that gap, while a weak covenant makes locking in gains through buy-ins more urgent.",
                  "explain": "Covenant drives the 'end-game' choice between buy-out and running off (Chapter 23)."
              },
              {
                  "q": "Why might corporate events trigger a covenant review?",
                  "a": "Mergers, acquisitions, restructurings, large borrowing or disposals can change the sponsor's ability to pay; trustees may need mitigation (e.g. extra contributions or guarantees).",
                  "explain": "Regulators may also have powers to intervene where corporate activity is detrimental to the scheme."
              },
              {
                  "q": "How does a protection fund change the relevance of covenant for members?",
                  "a": "Members' downside is partly protected by compensation, but compensation is often lower than full benefits, so covenant still matters for full benefit security.",
                  "explain": "Covenant also affects the levy paid to the protection fund in risk-based systems."
              },
              {
                  "q": "Why is covenant assessment inherently uncertain?",
                  "a": "It requires forecasting the sponsor's business over many years, in changing markets, using information the sponsor may not fully disclose.",
                  "explain": "Hence the value of monitoring and triggers rather than relying on a one-off assessment."
              },
              {
                  "q": "How does covenant differ for multi-employer schemes?",
                  "a": "The covenant is the combined support of all participating employers, which depends on how liabilities are shared and whether employers are jointly liable for others' deficits.",
                  "explain": "A strong employer may be exposed to weaker employers' liabilities — a 'last man standing' effect."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Asset classes",
          "description": "The characteristics of the main asset classes available to benefit schemes — bonds (conventional and index-linked), equities, property, cash, alternatives and derivatives — and how each relates to the nature of pension liabilities.",
          "cards": [
              {
                  "q": "Why do pension schemes consider the characteristics of asset classes?",
                  "a": "To choose assets whose return, risk, liquidity, term and inflation-linkage suit the nature and term of the liabilities and the stakeholders' attitude to risk.",
                  "explain": "Chapter 13 applies these characteristics to strategy; this chapter is the building block."
              },
              {
                  "q": "Which asset best matches fixed pension payments?",
                  "a": "High-quality conventional (fixed-interest) bonds with cash flows timed to match the payments.",
                  "explain": "Government bonds are usually the lowest-risk match; corporate bonds add yield in exchange for credit risk."
              },
              {
                  "q": "Which asset best matches inflation-linked pensions?",
                  "a": "Index-linked government bonds of suitable term, possibly supplemented by inflation swaps.",
                  "explain": "If increases are capped, the match is imperfect — index-linked bonds pay uncapped inflation, while the liability has a cap."
              },
              {
                  "q": "What are the main characteristics of equities for a pension scheme?",
                  "a": "Higher expected long-term returns than bonds; high volatility; real returns expected to beat inflation over the long term but not reliably in the short term; income that tends to grow.",
                  "explain": "Equities suit schemes that can wait out volatility — typically immature schemes with strong sponsors."
              },
              {
                  "q": "What are the main characteristics of property?",
                  "a": "Real-type returns with rental income; low liquidity and high dealing costs; large, indivisible units; valuation based on appraisals (smoothed); diversification benefits.",
                  "explain": "Long leases with inflation-linked rents can behave somewhat like index-linked bonds, which is useful for pensions."
              },
              {
                  "q": "Why might a scheme hold cash?",
                  "a": "Liquidity for benefit payments and collateral for derivatives, and as a temporary home for funds between investments.",
                  "explain": "Cash is low-risk in absolute terms but a poor match for long-term pension liabilities."
              },
              {
                  "q": "What is credit risk in corporate bonds?",
                  "a": "The risk that the issuer defaults or is downgraded, reducing the value of the bond; investors are compensated by a yield spread over government bonds.",
                  "explain": "Credit spreads reflect default risk plus liquidity and risk premiums, so part of the spread is expected return."
              },
              {
                  "q": "Why might a pension scheme use interest rate swaps?",
                  "a": "To hedge the sensitivity of liabilities to interest rates without tying up large amounts of capital in bonds, leaving assets free for return-seeking investments.",
                  "explain": "Swaps are central to liability-driven investment (LDI), discussed in Chapter 13."
              },
              {
                  "q": "What risks come with using derivatives?",
                  "a": "Counterparty risk, collateral (liquidity) requirements when markets move, basis risk between hedge and liability, operational and legal risk, and complexity for governance.",
                  "explain": "Collateral calls can force asset sales at bad times — sufficient liquid assets must be held."
              },
              {
                  "q": "Name three alternative asset classes schemes may consider.",
                  "a": "Infrastructure, private equity, hedge funds, private credit, commodities, insurance-linked securities.",
                  "explain": "Alternatives can add diversification and illiquidity premiums, but bring complexity, higher fees and valuation uncertainty."
              },
              {
                  "q": "Why is infrastructure attractive for pension schemes?",
                  "a": "Long-term, often inflation-linked cash flows that can match pension liabilities, plus an illiquidity premium; long-term investors can tolerate low liquidity.",
                  "explain": "Illiquidity is a cost for most investors but less so for immature schemes with predictable outgo."
              },
              {
                  "q": "What is an annuity (buy-in) policy as a scheme asset?",
                  "a": "An insurance policy held by the scheme that pays cash flows matching specified members' benefits, removing investment, inflation and longevity risk for those members.",
                  "explain": "Buy-ins are covered further in Chapter 22; as an asset they are illiquid and expensive to unwind."
              },
              {
                  "q": "How do asset classes differ in liquidity?",
                  "a": "Cash and government bonds are highly liquid; equities are generally liquid; corporate bonds less so; property, infrastructure and private assets are illiquid.",
                  "explain": "Liquidity matters more for mature schemes with large outgo, and for those with derivative collateral needs."
              },
              {
                  "q": "Why does the currency of assets matter?",
                  "a": "Overseas assets introduce currency risk relative to domestic-currency liabilities unless hedged; they also offer diversification.",
                  "explain": "Currency hedging reduces mismatch but has costs and can require collateral."
              },
              {
                  "q": "How do asset classes differ in their expected return and risk relative to liabilities?",
                  "a": "Matching assets (bonds, index-linked) have low risk relative to liabilities and low expected excess return; return-seeking assets (equities, property, alternatives) have higher expected returns but high risk relative to liabilities.",
                  "explain": "Measure risk relative to liabilities, not in isolation — a 'safe' cash holding is risky against long-dated liabilities."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Investment",
          "description": "Setting the investment strategy of a benefit provider: objectives and constraints, the matching versus return-seeking trade-off, liability-driven investment, the influence of maturity, covenant and funding level, ESG considerations, and investment choices in DC schemes.",
          "cards": [
              {
                  "q": "List the main factors in setting a DB scheme's investment strategy.",
                  "a": "Nature, term and currency of liabilities; maturity and cash-flow needs; funding level; sponsor covenant and attitude to risk; trustees' risk appetite; regulation and tax; expected returns and risks of asset classes; diversification; liquidity; ESG considerations; costs; existing portfolio.",
                  "explain": "Syllabus objective 3.4 — expect a 'discuss the factors' question. Relate each factor back to the scenario's scheme."
              },
              {
                  "q": "What is the 'matching' portfolio for a DB scheme?",
                  "a": "The portfolio whose cash flows (or values) most closely replicate the liabilities — typically fixed and index-linked bonds (or swaps) matching the term and inflation-linkage of benefit payments.",
                  "explain": "Deviation from the matched position is the scheme's investment risk; the question is how much deviation the stakeholders can bear."
              },
              {
                  "q": "Why might a scheme not hold the fully matched portfolio?",
                  "a": "Return-seeking assets are expected to reduce the long-run cost of benefits and help close deficits; the sponsor may prefer lower expected contributions; the matched portfolio may be unavailable or illiquid.",
                  "explain": "The decision is a trade-off between expected cost and risk, and whose risk appetite governs it."
              },
              {
                  "q": "What is liability-driven investment (LDI)?",
                  "a": "A strategy that uses bonds and derivatives (e.g. interest rate and inflation swaps, often leveraged) to hedge a chosen proportion of liability interest-rate and inflation risk, leaving other assets to seek return.",
                  "explain": "LDI separates the 'hedging' decision from the 'growth' decision, but leverage creates collateral and liquidity risk when yields rise sharply."
              },
              {
                  "q": "How does scheme maturity affect investment strategy?",
                  "a": "Mature schemes (many pensioners, large outgo) need liquidity and more predictable returns, so tend towards bonds; immature schemes can take a longer view and hold more return-seeking assets.",
                  "explain": "A mature scheme forced to sell assets after a market fall locks in losses — the maturity point links to liquidity."
              },
              {
                  "q": "How does funding level affect investment strategy?",
                  "a": "A well-funded scheme may reduce risk to lock in its position ('de-risking'); a poorly funded scheme may need return-seeking assets to close the gap, but only if the sponsor can support the risk.",
                  "explain": "Many schemes use a de-risking 'flight path' that moves to matching assets as the funding level improves."
              },
              {
                  "q": "What is a de-risking flight path?",
                  "a": "A plan to reduce investment risk progressively as pre-set funding-level (or time) triggers are reached, shifting from growth assets to matching assets.",
                  "explain": "It turns a one-off decision into a governed process, capturing gains when markets are favourable."
              },
              {
                  "q": "How can projection models support investment strategy decisions?",
                  "a": "Asset-liability models project assets and liabilities under many economic scenarios for alternative strategies, showing the distribution of outcomes for funding level, contributions and deficit risk.",
                  "explain": "See Chapter 15; the output informs the choice rather than dictating it — stakeholders still weigh risk against reward."
              },
              {
                  "q": "What ESG considerations can affect a scheme's investment strategy?",
                  "a": "Financially material environmental, social and governance risks (e.g. climate transition risk); members' views; regulatory requirements to disclose ESG policies; stewardship and engagement; exclusions or tilts in portfolios.",
                  "explain": "Frame ESG as risk management for a long-term investor, not just ethics — examiners reward both angles."
              },
              {
                  "q": "What ESG options might a DC scheme offer members?",
                  "a": "An ESG-screened or sustainable fund option; a default fund incorporating ESG factors; climate-aligned funds; clear information on how funds address ESG.",
                  "explain": "Consider cost, diversification, how 'ESG' is defined, members' understanding and whether the default should include ESG for disengaged members."
              },
              {
                  "q": "What is the role of the default fund in a DC scheme?",
                  "a": "The fund used for members who make no investment choice — usually the majority — so its design largely determines member outcomes.",
                  "explain": "Default design should reflect the membership as a whole: risk tolerance, expected retirement options and charges."
              },
              {
                  "q": "What is lifestyling (a glide path) in DC?",
                  "a": "Automatically moving a member's fund from growth assets towards lower-risk assets (bonds, cash) as retirement approaches, to reduce the risk of a fall just before retirement.",
                  "explain": "The target assets should match how members will take benefits — annuity-linked bonds for annuitants, diversified funds for drawdown."
              },
              {
                  "q": "Why is diversification important for pension investment?",
                  "a": "It reduces exposure to any single asset or risk without sacrificing much expected return, making outcomes more predictable.",
                  "explain": "Diversification is less effective in crises when correlations rise, which is why stress testing matters too."
              },
              {
                  "q": "What constraints might limit a scheme's investment choices?",
                  "a": "Legislation (e.g. limits on employer-related or unregulated investments); trust deed restrictions; liquidity needs; trustees' expertise and governance capacity; costs; tax.",
                  "explain": "Governance capacity is often overlooked: complex strategies need trustees who understand them."
              },
              {
                  "q": "Why should investment strategy be reviewed regularly?",
                  "a": "Funding level, maturity, covenant, market conditions and regulation all change; strategy should be reviewed with each valuation and after significant events.",
                  "explain": "This is the 'monitor' step of the control cycle applied to investment."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Models",
          "description": "Actuarial models for the financial management of benefit provision: objectives and requirements of a model, the features of a model projecting income and outgo, its use in setting contributions, targeting benefits and assessing asset returns, and sensitivity analysis.",
          "cards": [
              {
                  "q": "What are the objectives of a model for the financial management of a benefit scheme?",
                  "a": "To project future income and outgo, assess the cost of benefits and contributions, test funding and investment strategies, value benefits and options, and understand the risks to the scheme and stakeholders.",
                  "explain": "Syllabus objective 4.1 — models serve decisions, so start by identifying the decision the model supports."
              },
              {
                  "q": "List requirements of a good model (as in CP1 terms, applied to pensions).",
                  "a": "Valid and rigorous for its purpose; adequately documented; reflects the risk profile of the scheme; parameters allow for all relevant features; outputs are easy to interpret and communicate; can be tested and refined; not overly complex; able to run sensitivity tests; results reproducible.",
                  "explain": "These requirements reappear in every SP subject — the pensions version emphasises long time horizons and demographic features."
              },
              {
                  "q": "What are the basic features of a model projecting a scheme's income and outgo?",
                  "a": "Membership data and demographic decrements (retirement, death, withdrawal, ill-health); salary and inflation projections; benefit rules; contribution rules; asset values and returns; expenses; projected cash flows each year; and results such as funding levels and contribution rates.",
                  "explain": "Think of it as projecting each cash flow the scheme will actually pay or receive, then discounting or accumulating as needed."
              },
              {
                  "q": "How can a model be used to set contributions?",
                  "a": "By projecting benefits and assets and solving for the contribution rate that meets a funding objective (e.g. reaching full funding on a target basis within a recovery period).",
                  "explain": "The answer depends on the funding method and assumptions — Chapters 16 and 18."
              },
              {
                  "q": "How can a model be used to target benefit levels in DC?",
                  "a": "By projecting contributions and investment returns to retirement, converting the projected fund to income, and testing which contribution rate gives a target replacement ratio with a given probability.",
                  "explain": "Stochastic projections show the range of outcomes, which is more honest than a single deterministic figure."
              },
              {
                  "q": "Outline the steps to estimate the DC contribution rate needed for a target net replacement ratio.",
                  "a": "Set assumptions (salary growth, investment return before and after retirement, charges, annuity rate or drawdown yield, State benefits, tax); project salary to retirement; derive target income; convert to the required fund at retirement; solve for the level contribution that accumulates to that fund.",
                  "explain": "State the assumptions clearly — examiners reward method and reasonableness more than the precise number."
              },
              {
                  "q": "What is a deterministic model?",
                  "a": "A model that projects one set of assumptions (possibly several scenarios) to produce a single outcome per scenario.",
                  "explain": "Deterministic models are transparent and cheap, but give no probability distribution of outcomes."
              },
              {
                  "q": "What is a stochastic model, and when is it valuable?",
                  "a": "A model where key variables (e.g. investment returns, inflation) are random, producing a distribution of outcomes. It is valuable for assessing risk, options and guarantees, and investment strategies.",
                  "explain": "Stochastic output needs careful communication — percentiles and probabilities rather than a single answer."
              },
              {
                  "q": "How can a model assess the return on assets needed?",
                  "a": "By solving for the rate of return that makes projected assets plus contributions exactly meet projected benefit outgo — the 'required return' — and comparing it with expected returns of possible strategies.",
                  "explain": "If the required return exceeds what realistic strategies can deliver, contributions or benefits need to change."
              },
              {
                  "q": "What is sensitivity analysis, and why is it used?",
                  "a": "Varying one assumption at a time (or several together) to see how the results change. It shows which assumptions matter most and how uncertain the results are.",
                  "explain": "Syllabus 4.1 specifically mentions sensitivity analysis; always recommend it when results depend on uncertain assumptions."
              },
              {
                  "q": "What is scenario testing?",
                  "a": "Projecting the scheme under specified combinations of assumptions representing plausible future states (e.g. high inflation with low returns).",
                  "explain": "Scenarios capture the joint effect of related assumptions, which one-at-a-time sensitivities miss."
              },
              {
                  "q": "Why must models be checked?",
                  "a": "Errors in data, code, assumptions or interpretation can produce misleading results; checks include reconciling to previous results, checking cash flows against benefit rules, and reasonableness tests.",
                  "explain": "Model risk is part of operational risk — documentation and peer review are the standard controls."
              },
              {
                  "q": "Why might different models be used for different purposes in the same scheme?",
                  "a": "A funding valuation, accounting disclosure, investment strategy review and option-term calculation need different levels of detail, assumptions and outputs.",
                  "explain": "A model fit for one purpose may be inappropriate for another — always ask what the model is for."
              },
              {
                  "q": "What are the limitations of models for pension schemes?",
                  "a": "Dependence on assumptions that may prove wrong over long horizons; simplifications of benefit rules; difficulty modelling regulatory change and sponsor behaviour; parameter and model uncertainty.",
                  "explain": "Good practice is to state limitations clearly alongside results."
              },
              {
                  "q": "How can a model help with benefit design decisions?",
                  "a": "By projecting the cost and risk of alternative designs (e.g. final salary versus career-average, capped increases) to show the effect on contributions and risk under different scenarios.",
                  "explain": "This closes the loop between Chapter 6 design and Chapter 14 modelling."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Asset liability modelling",
          "description": "Asset-liability modelling (ALM) for pension schemes: why it is used, how a stochastic ALM study is built, the economic scenario generator, the outputs used to choose between investment and funding strategies, and the limitations of the approach.",
          "cards": [
              {
                  "q": "What is asset-liability modelling (ALM)?",
                  "a": "Projecting a scheme's assets and liabilities together, usually stochastically, to assess the joint effect of investment, funding and benefit decisions on outcomes such as funding level and contributions.",
                  "explain": "ALM is how the abstract 'risk versus return' of Chapter 13 is quantified for a specific scheme."
              },
              {
                  "q": "Why is ALM used by pension schemes?",
                  "a": "To choose investment strategies, set funding and contribution policies, assess the risk of deficits or contribution increases, test de-risking plans and inform negotiations between trustees and sponsor.",
                  "explain": "The value is in comparing strategies on a consistent basis, not in predicting the future."
              },
              {
                  "q": "What is an economic scenario generator (ESG) in ALM?",
                  "a": "A stochastic model that simulates consistent future paths of economic variables — interest rates, inflation, asset returns, salary growth — used to project assets and liabilities.",
                  "explain": "The ESG's calibration largely drives the results, so its assumptions must be reasonable and documented."
              },
              {
                  "q": "Give four outputs of an ALM study.",
                  "a": "Distribution of funding levels over time; probability of falling below a threshold funding level; distribution of required contributions; expected surplus or deficit; value at risk; probability of reaching full funding or buy-out by a target date.",
                  "explain": "Stakeholders care about different outputs — trustees about deficit risk, the sponsor about contribution volatility."
              },
              {
                  "q": "What is an 'efficient frontier' in pension ALM?",
                  "a": "The set of strategies giving the highest expected outcome (e.g. lowest expected contributions) for each level of risk (e.g. variability of funding level) — others are dominated.",
                  "explain": "The frontier narrows the choice; the final choice depends on stakeholders' risk appetite."
              },
              {
                  "q": "Why should ALM measure risk relative to liabilities?",
                  "a": "What matters is whether assets are sufficient to meet liabilities; an asset strategy with low absolute volatility can still produce a volatile funding level if it does not match the liabilities.",
                  "explain": "Surplus (assets minus liabilities) volatility is the key risk measure in pension ALM."
              },
              {
                  "q": "How are liabilities modelled in a stochastic ALM study?",
                  "a": "Projecting benefit cash flows using demographic assumptions and the simulated economic variables (salary growth, inflation), and valuing them at each future date using a discount rate consistent with each scenario.",
                  "explain": "Liabilities must respond to the same economic scenarios as assets, or the correlation between them is lost."
              },
              {
                  "q": "What are the main limitations of ALM?",
                  "a": "Results depend heavily on the ESG calibration; model and parameter risk; difficulty capturing extreme events and structural change; sponsor behaviour and regulatory change are hard to model; results can give false precision.",
                  "explain": "Present ALM results alongside deterministic stress tests to show what the model may miss."
              },
              {
                  "q": "How can ALM inform contribution policy?",
                  "a": "By projecting contributions under different funding methods, recovery periods and smoothing rules, showing the trade-off between the level and volatility of contributions and the risk of underfunding.",
                  "explain": "ALM can compare investment and contribution strategies jointly rather than one at a time."
              },
              {
                  "q": "What is the difference between a deterministic and stochastic ALM approach?",
                  "a": "Deterministic: projects a few specified scenarios. Stochastic: projects thousands of randomly generated scenarios to derive probability distributions.",
                  "explain": "Stochastic ALM gives probabilities; deterministic scenarios are easier to understand and to use for stress tests."
              },
              {
                  "q": "Why is the time horizon important in ALM?",
                  "a": "Short horizons emphasise volatility; long horizons let expected returns dominate, making risky strategies look better. The horizon should match the decision (e.g. the next valuation, the recovery period, or run-off).",
                  "explain": "Different stakeholders may care about different horizons — worth raising in exam answers."
              },
              {
                  "q": "How might ALM help a scheme decide whether to buy a buy-in policy?",
                  "a": "By comparing the risk reduction and cost of the buy-in against keeping the assets invested, showing the effect on funding level volatility and the probability of reaching buy-out.",
                  "explain": "This links ALM to the insurance options in Chapter 22."
              },
              {
                  "q": "Why is communication of ALM results challenging?",
                  "a": "Stochastic output involves probabilities and distributions that many stakeholders find hard to interpret; results can be misread as forecasts.",
                  "explain": "Use simple charts, percentiles and plain-language statements like 'a 1-in-20 chance of...'"
              },
              {
                  "q": "What checks should be made on an ALM model?",
                  "a": "Reconcile starting values to the valuation; check ESG outputs against historical and market data; test sensitivity to calibration; check liability cash flows against benefit rules; review for reasonableness.",
                  "explain": "Validation is especially important because ALM outputs feed high-value decisions."
              },
              {
                  "q": "How does ALM relate to integrated risk management?",
                  "a": "It brings investment, funding and covenant together, showing how strategies perform in scenarios where the sponsor is also under stress.",
                  "explain": "Linking covenant into ALM is an advanced technique, but even a qualitative overlay improves decisions."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Funding methods",
          "description": "The funding methods used to value DB benefits and set contributions — projected unit, current unit, attained age, entry age, aggregate and defined accrued benefit methods — how each defines the standard contribution rate and actuarial liability, and how stable contributions are for open and closed schemes.",
          "cards": [
              {
                  "q": "What is a funding method?",
                  "a": "The method used to determine the pattern of contributions over time to fund benefits — in particular how the cost of benefits is allocated between past service (actuarial liability) and future service (standard contribution rate).",
                  "explain": "The funding method sets the timing of contributions; the assumptions set their overall level."
              },
              {
                  "q": "What is the standard contribution rate?",
                  "a": "The contribution rate (usually as a percentage of salary) needed to fund benefits accruing in a specified period, ignoring any surplus or deficit on past service.",
                  "explain": "Total contributions = standard contribution rate plus any adjustment to remove a deficit or surplus (e.g. a recovery plan)."
              },
              {
                  "q": "What is the actuarial liability?",
                  "a": "The value, under the funding method and assumptions, of the benefits attributed to service before the valuation date — the target amount of assets.",
                  "explain": "Comparing assets with the actuarial liability gives the funding level and any surplus or deficit."
              },
              {
                  "q": "Describe the projected unit method (PUM).",
                  "a": "Accrued liability: value of benefits earned for past service, based on salaries projected to the date benefits are paid. Standard contribution rate: value of benefits accruing over the control period (usually one year), with projected salaries, divided by the value of members' salaries over that period.",
                  "explain": "Also used for accounting (Chapter 4). The control period is the key feature — PUM looks only a year ahead for the contribution rate."
              },
              {
                  "q": "Under PUM, what happens to the standard contribution rate for a closed scheme?",
                  "a": "It tends to rise over time, because the average age of the active membership increases and the cost of a year's accrual (with projected salary) is higher for older members.",
                  "explain": "For an open scheme with a stable age profile, the PUM contribution rate is broadly stable."
              },
              {
                  "q": "Describe the current unit method (CUM).",
                  "a": "Accrued liability: value of past-service benefits based on salaries at the valuation date (no future salary increases allowed for). Standard contribution rate: value of the new year's accrual plus the cost of revaluing past-service benefits for salary growth over the control period, divided by the value of salaries.",
                  "explain": "CUM targets a smaller liability than PUM, so it funds more slowly in the early years; its contribution rate rises more steeply as the membership ages."
              },
              {
                  "q": "Describe the attained age method (AAM).",
                  "a": "Accrued liability: the same as under PUM (past service with projected salaries). Standard contribution rate: value of benefits accruing over the whole expected future membership of current members (with projected salaries), divided by the value of their future salaries.",
                  "explain": "By averaging over each member's remaining service, AAM gives a more stable contribution rate for a closed scheme than PUM."
              },
              {
                  "q": "Describe the entry age method (EAM).",
                  "a": "Standard contribution rate: the rate that would fund the benefits of a typical new entrant at an assumed entry age over their whole membership. Actuarial liability: value of all future benefits for current members minus the value of future standard contributions.",
                  "explain": "EAM's contribution rate depends only on the assumed new entrant, so it is stable if new entrants resemble that profile; the liability is a prospective (balancing) item."
              },
              {
                  "q": "Describe the aggregate method.",
                  "a": "No separate actuarial liability is calculated. The contribution rate equals (value of all future benefits for current members, past and future service, minus the value of assets) divided by the value of future salaries of current members.",
                  "explain": "Any surplus or deficit is automatically spread over the future working lifetime of the current members."
              },
              {
                  "q": "What is the defined accrued benefit method?",
                  "a": "A method whose funding target is the value of benefits accrued to date (e.g. using PUM or CUM for accrued benefits), with contributions set to fund each year's accrual and remove shortfalls.",
                  "explain": "Accrued-benefits methods align with discontinuance-style funding targets, making the funding level easy to interpret."
              },
              {
                  "q": "What is the difference between accrued benefits methods and prospective benefits methods?",
                  "a": "Accrued benefits methods (PUM, CUM) value only benefits earned to date as the liability and set contributions for benefits accruing in the control period. Prospective methods (AAM, EAM, aggregate) set contributions by considering benefits over members' whole future service.",
                  "explain": "Prospective methods tend to produce more stable contribution rates; accrued methods relate more directly to benefit security."
              },
              {
                  "q": "When will a funding method produce a stable contribution rate?",
                  "a": "Broadly, when the membership profile (age and salary distribution) is stable over time, e.g. an open scheme with new entrants replacing leavers and retirees, and when experience matches the assumptions.",
                  "explain": "For a closed scheme, AAM and aggregate give more stable rates than PUM or CUM."
              },
              {
                  "q": "Why does the choice of funding method matter to the sponsor?",
                  "a": "It determines the pattern of contributions over time — faster funding improves security but costs more now; slower funding keeps early costs down but builds up later costs.",
                  "explain": "The long-run total cost is determined by actual experience, not the method; the method mainly changes timing."
              },
              {
                  "q": "What is a control period?",
                  "a": "The period over which the standard contribution rate is calculated to fund accruing benefits (e.g. one year under PUM).",
                  "explain": "Longer control periods smooth the rate across time; one-year periods track changes in the membership quickly."
              },
              {
                  "q": "What is a recovery plan?",
                  "a": "An agreed schedule of additional contributions to eliminate a funding deficit over a specified period, on top of the standard contribution rate.",
                  "explain": "The length of the recovery period is a negotiation between trustees and sponsor, informed by covenant (Chapter 11) and regulation."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Valuation data",
          "description": "The data needed for a pension valuation — membership, benefit, asset and accounting data — the checks performed on it, how to deal with missing or unreliable data, and how data requirements differ between purposes.",
          "cards": [
              {
                  "q": "List the membership data needed for a DB valuation.",
                  "a": "For actives: date of birth, sex, date joined, pensionable service, pensionable salary (and history), contribution details. For deferreds: dates, deferred pension amounts and revaluation. For pensioners: pension amounts, increases, dependants' details. Also any benefit options or special terms.",
                  "explain": "Data requirements depend on the benefit structure — a career-average scheme needs revalued earnings history, for example."
              },
              {
                  "q": "What asset data is needed for a valuation?",
                  "a": "Market values of assets at the valuation date by asset class; income and cash flows over the period; details of any insurance policies, derivatives and contingent assets; audited accounts.",
                  "explain": "Asset data is reconciled with scheme accounts to ensure consistency."
              },
              {
                  "q": "What accounting data is needed for a valuation?",
                  "a": "Contributions received, benefits paid, transfers in and out, expenses and investment income over the inter-valuation period, from the scheme's audited accounts.",
                  "explain": "These cash flows are used to reconcile asset values and to analyse surplus (Chapter 20)."
              },
              {
                  "q": "Give four checks on membership data.",
                  "a": "Reconcile member numbers between valuations (movements in and out); check dates are consistent (e.g. date of birth before date joined); check salaries and pensions for reasonableness and changes against expectations; check benefit amounts against a sample of records; check totals against payroll.",
                  "explain": "Syllabus 4.3 includes data requirements — checks demonstrate you know data quality drives valuation quality."
              },
              {
                  "q": "What is a membership reconciliation?",
                  "a": "A check that the number of members at the start of the period plus new entrants, minus exits (by cause), equals the number at the end, for each membership category.",
                  "explain": "It identifies missing or duplicate records and provides movement data for experience analysis (Chapter 21)."
              },
              {
                  "q": "How should an actuary deal with missing or unreliable data?",
                  "a": "Obtain corrected data where possible; otherwise make prudent or best-estimate assumptions for missing items, use group records or averages, and disclose the limitations and their possible effect on results.",
                  "explain": "Professional standards require the actuary to comment on data reliability in the report."
              },
              {
                  "q": "Why might grouped data be used instead of individual data?",
                  "a": "For speed or simplicity, for large schemes, or where individual data is unavailable; grouping by age and sex can give acceptable accuracy for some purposes.",
                  "explain": "Grouping loses detail, so it may be inappropriate for valuing options or small, heterogeneous schemes."
              },
              {
                  "q": "Why is data quality particularly important for pensioner liabilities in mature schemes?",
                  "a": "Pensioners may be the bulk of the liability; errors in pension amounts or dependant details directly misstate the liability and may lead to wrong payments.",
                  "explain": "Insurers pricing buy-outs will scrutinise pensioner data closely and add margins for uncertainty."
              },
              {
                  "q": "What data would an insurer request for a buy-out quotation?",
                  "a": "Full individual member data (dates of birth, sex, pension amounts, increases, dependants' details, postcode), benefit specifications, past experience data (e.g. mortality), and details of any options or discretionary practices.",
                  "explain": "The more complete and clean the data, the lower the insurer's margins — data cleansing before approaching the market is standard practice."
              },
              {
                  "q": "How do data requirements differ for an accounting valuation versus a funding valuation?",
                  "a": "Accounting valuations may accept rolled-forward or approximate data between full valuations; funding valuations generally require full, checked data at the valuation date.",
                  "explain": "The purpose determines the level of accuracy required."
              },
              {
                  "q": "Why might postcode data be requested?",
                  "a": "Because life expectancy varies with socio-economic status, which correlates with where people live; postcode-based mortality models can refine assumptions.",
                  "explain": "This is a data-driven refinement of the mortality assumption (Chapter 18)."
              },
              {
                  "q": "What is 'rolling forward' a valuation?",
                  "a": "Updating previous valuation results to a later date approximately, allowing for cash flows, interest and assumption changes, rather than doing a full calculation with new data.",
                  "explain": "Common for interim or accounting updates; accuracy falls as the gap from the last full valuation grows."
              },
              {
                  "q": "Why check the data against the previous valuation's data?",
                  "a": "Unexpected changes (e.g. large salary jumps, benefit changes, missing members) may indicate errors or events requiring investigation.",
                  "explain": "Consistency checks are cheap and catch most gross errors."
              },
              {
                  "q": "What are the consequences of poor data for a valuation?",
                  "a": "Misstated liabilities and contributions, wrong benefit payments, unreliable experience analysis, higher insurer pricing, and possible regulatory breaches.",
                  "explain": "Poor data creates uncertainty that must be covered by margins — a real cost to the sponsor."
              },
              {
                  "q": "What data is needed on scheme benefits besides membership records?",
                  "a": "The trust deed and rules (current and historical), announcements, discretionary practices, special terms for groups of members, and legislative overrides.",
                  "explain": "Benefit specification errors — valuing the wrong benefits — are as serious as data errors."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Valuation assumptions",
          "description": "Setting the financial and demographic assumptions for valuing benefits: discount rates, inflation, salary growth, pension increases, mortality and other decrements, expenses — the information available to set them, prudence, consistency, and the different objectives of stakeholders.",
          "cards": [
              {
                  "q": "List the main financial assumptions for a DB valuation.",
                  "a": "Discount rate (or investment return); price inflation; salary growth; pension increases in payment and revaluation in deferment; expenses; possibly asset-specific returns.",
                  "explain": "The discount rate is usually the most significant; inflation-related assumptions should be internally consistent with it."
              },
              {
                  "q": "List the main demographic assumptions for a DB valuation.",
                  "a": "Mortality before and after retirement (base tables and future improvements); withdrawal; ill-health retirement; early and late retirement rates; proportion married or with dependants and age differences; option take-up (e.g. commutation).",
                  "explain": "The relative importance of each depends on the membership — mortality dominates for pensioners, withdrawal for young actives."
              },
              {
                  "q": "What approaches can be used to set the discount rate?",
                  "a": "Based on expected returns on the scheme's actual assets; on bond yields (government or corporate) plus or minus a margin; on a risk-free swap curve; or a combination (e.g. gilts plus a risk premium reducing over time).",
                  "explain": "Different approaches suit different purposes — a market-based rate for solvency, an expected-return rate for ongoing funding."
              },
              {
                  "q": "What issues should the actuary consider when setting a discount rate referenced to bond yields plus a risk premium?",
                  "a": "The purpose of the valuation and any regulatory rules; the scheme's actual and planned investment strategy; the size of the premium and how prudent it is; the term structure (single rate versus yield curve); covenant strength; consistency with other assumptions; market conditions at the valuation date; and how the premium might change as the scheme de-risks.",
                  "explain": "A common exam theme — examiners reward linking the premium to the investment strategy and covenant, and discussing prudence."
              },
              {
                  "q": "What is prudence in the context of valuation assumptions?",
                  "a": "Choosing assumptions that are more likely than not to overstate the cost of benefits, to give a margin for adverse experience — e.g. a lower discount rate or lighter mortality than best estimate.",
                  "explain": "Prudence can be applied to individual assumptions or overall; it should be explicit enough to be understood and disclosed."
              },
              {
                  "q": "Why might different stakeholders want different assumptions?",
                  "a": "Trustees seek security (more prudence); the sponsor wants lower, stable contributions (less prudence); regulators want adequate funding; accountants want best estimates on a standardised basis; members want security and fairness in option terms.",
                  "explain": "Syllabus 4.2 mentions 'objectives of stakeholders' — this is the standard framing."
              },
              {
                  "q": "What information can be used to set assumptions?",
                  "a": "Market data (bond yields, inflation expectations from index-linked bonds and swaps); the scheme's own past experience; national or industry experience studies and standard tables; economic forecasts; the sponsor's plans (e.g. salary policy, redundancy programmes); regulatory guidance.",
                  "explain": "Scheme experience is most credible for large schemes; small schemes rely more on standard tables."
              },
              {
                  "q": "How can the market-implied inflation assumption be derived?",
                  "a": "From the difference between yields on conventional and index-linked government bonds of similar term (breakeven inflation), possibly adjusted for an inflation risk premium and differences between inflation indices.",
                  "explain": "Using market-implied inflation keeps the inflation assumption consistent with the market-based discount rate."
              },
              {
                  "q": "How is the salary growth assumption usually set?",
                  "a": "As price inflation plus an allowance for real salary growth, reflecting the sponsor's pay policy, industry trends and promotional increases (often via a promotional salary scale by age).",
                  "explain": "Salary growth only affects active members' final-salary-linked benefits, so its impact shrinks as schemes close."
              },
              {
                  "q": "Why is the mortality improvement assumption important?",
                  "a": "Pensions are paid for life, so assumed future improvements in longevity significantly affect the value of pensions, especially for younger members whose payments are further in the future.",
                  "explain": "Improvements are uncertain, so they are a key area for prudence and sensitivity testing."
              },
              {
                  "q": "Why should assumptions be internally consistent?",
                  "a": "Related assumptions (e.g. discount rate, inflation, salary growth, pension increases) depend on the same economic conditions; inconsistent choices can distort results, e.g. a high real discount rate from mismatched inflation.",
                  "explain": "Real (inflation-adjusted) comparisons are a good consistency check."
              },
              {
                  "q": "What is a best-estimate assumption?",
                  "a": "One that is equally likely to overstate or understate the true outcome — no deliberate margin for prudence.",
                  "explain": "Best estimates are used for accounting, some transfer values and experience comparisons."
              },
              {
                  "q": "How should assumptions allow for the investment strategy?",
                  "a": "If the discount rate is based on expected asset returns, a change in strategy (e.g. de-risking) should change the discount rate; the funding basis should reflect the risk actually taken.",
                  "explain": "Syllabus 4.3 asks to what extent values should reflect the investment strategy — a common discussion point."
              },
              {
                  "q": "How can expenses be allowed for in a valuation?",
                  "a": "As an explicit reserve (value of future expenses), as a loading on the contribution rate, or by reducing the discount rate; the sponsor may instead pay expenses directly.",
                  "explain": "The approach should be consistent with who actually pays expenses under the scheme's practice."
              },
              {
                  "q": "Why should assumptions be reviewed at each valuation?",
                  "a": "Markets, experience, the membership and the sponsor's plans change; stale assumptions misstate liabilities and contributions.",
                  "explain": "Changes in assumptions appear as a separate item in the analysis of surplus (Chapter 20)."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Valuation considerations",
          "description": "Practical considerations in valuing assets and benefits: consistency between asset and liability values, smoothing, valuing guarantees and options, why methods and assumptions differ between purposes, sensitivity analysis and reasonableness checks on results.",
          "cards": [
              {
                  "q": "Why must asset and liability values be consistent?",
                  "a": "The funding level compares the two; if assets are at market value but liabilities use a discount rate unrelated to market conditions, the result can move for reasons that do not reflect the true position.",
                  "explain": "Consistency is the main principle of this chapter — mismatched bases produce misleading surpluses or deficits."
              },
              {
                  "q": "Give three ways assets can be valued for a pension valuation.",
                  "a": "Market value; smoothed market value (averaging over a period); discounted cash flow value using the same discount rate as the liabilities; or book value (rarely appropriate).",
                  "explain": "Market value is objective and consistent with market-related liability bases; the DCF approach ensures consistency with an expected-return basis."
              },
              {
                  "q": "What is the discounted cash flow method for valuing assets?",
                  "a": "Projecting the income (dividends, coupons, rents) and capital proceeds from the assets and discounting them at the valuation discount rate.",
                  "explain": "It avoids distortions from temporary market movements, but relies on assumed income growth, which introduces subjectivity."
              },
              {
                  "q": "What are the advantages and disadvantages of smoothing asset values?",
                  "a": "Advantages: reduces volatility of results and contributions. Disadvantages: departs from realisable values, may hide a real deterioration, and can be inconsistent with market-based liability values.",
                  "explain": "If smoothing is used, liabilities should be smoothed consistently — or the funding level can become meaningless."
              },
              {
                  "q": "Why might valuation methods and assumptions differ between purposes?",
                  "a": "Different purposes have different users and objectives: ongoing funding (security with realistic long-term view), discontinuance (cost of securing benefits now), accounting (standardised best estimate), transfer values (fair value to the individual), and option terms (neutrality or subsidy).",
                  "explain": "Syllabus 4.3 explicitly lists 'reasons why assumptions and methods may differ' — a favourite exam area."
              },
              {
                  "q": "How can guarantees and options be valued?",
                  "a": "Deterministically, by assuming the option is exercised in the way most costly to the scheme or at expected take-up rates; or stochastically / using option-pricing techniques to allow for the time value of the guarantee.",
                  "explain": "Deterministic methods may miss the time value of an option that is out of the money today but could become valuable."
              },
              {
                  "q": "Give an example of a guarantee within a pension scheme.",
                  "a": "A guaranteed annuity rate on converting a DC fund; a minimum pension guarantee; an underpin in a hybrid scheme; a cap-and-floor on pension increases; a guaranteed minimum return in a cash-balance scheme.",
                  "explain": "These guarantees have option-like payoffs, so their cost depends on volatility, not just expected values."
              },
              {
                  "q": "What reasonableness checks can be made on valuation results?",
                  "a": "Compare with the previous valuation and roll-forward expectations; check the analysis of surplus reconciles; check values per member and contribution rates against similar schemes; review sensitivities for plausibility.",
                  "explain": "Reasonableness checks catch errors that detailed data checks miss."
              },
              {
                  "q": "Why present sensitivity analysis with valuation results?",
                  "a": "Results depend on uncertain assumptions; sensitivities (e.g. discount rate −0.5%, life expectancy +1 year) show stakeholders how much the results could move and which assumptions matter most.",
                  "explain": "Also highlights the scheme's key risks, informing investment and funding decisions."
              },
              {
                  "q": "What is the effect of a lower discount rate on liabilities?",
                  "a": "Liabilities increase, and the effect is larger for longer-duration liabilities (younger members, indexed pensions).",
                  "explain": "Duration links the sensitivity to the membership profile — useful for estimating effects quickly."
              },
              {
                  "q": "How is the solvency or discontinuance position assessed differently from the ongoing position?",
                  "a": "It values the benefits that would be payable if the scheme were wound up now (no future salary growth for actives), usually on assumptions close to insurer buy-out pricing.",
                  "explain": "The solvency position is a key disclosure to members, showing security if the sponsor disappeared."
              },
              {
                  "q": "Why might an actuary value benefits using a yield curve rather than a single rate?",
                  "a": "A curve discounts each cash flow at the rate for its term, giving a more accurate market-consistent value where the curve is not flat, especially for schemes with unusual cash-flow profiles.",
                  "explain": "A single equivalent rate is simpler to communicate but may misstate sensitivity."
              },
              {
                  "q": "What is the effect of mortality improvements on the valuation of pensions in payment?",
                  "a": "Higher assumed improvements increase expected payment periods and liabilities; the effect is larger for younger pensioners and for indexed pensions.",
                  "explain": "Longevity sensitivity is often expressed as 'liabilities rise by x% for each extra year of life expectancy'."
              },
              {
                  "q": "Why value discretionary benefits carefully?",
                  "a": "If discretionary increases are routinely granted, members may expect them; excluding them understates the likely cost, while including them may create expectations of entitlement.",
                  "explain": "The treatment should be clearly stated and consistent with the scheme's funding policy."
              },
              {
                  "q": "How might the valuation allow for a planned change in investment strategy?",
                  "a": "By using a discount rate that varies over time to reflect the expected shift from return-seeking to matching assets (e.g. a declining risk premium).",
                  "explain": "This keeps the valuation consistent with the de-risking plan agreed with the sponsor."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Sources of surplus",
          "description": "Where surpluses and deficits come from — investment returns, salary and pension increases, demographic experience, contributions, expenses, benefit changes and assumption changes — and the factors that affect how a surplus or deficit should be applied.",
          "cards": [
              {
                  "q": "What is a surplus in a pension scheme?",
                  "a": "The excess of the value of assets over the value of liabilities on a given basis; a deficit is the reverse.",
                  "explain": "A surplus on one basis (e.g. ongoing funding) may be a deficit on another (e.g. buy-out) — always specify the basis."
              },
              {
                  "q": "List the main sources of surplus or deficit between valuations.",
                  "a": "Investment returns different from assumed; salary increases different from assumed; pension increases and revaluation different from assumed; mortality, withdrawal, ill-health and early-retirement experience; contributions paid different from those recommended; expenses; option take-up (e.g. commutation, transfers); benefit changes; data corrections; changes in assumptions and method.",
                  "explain": "Syllabus objective 5.1 — present these as a structured list and relate each to the assumption it tests."
              },
              {
                  "q": "How does investment experience create a surplus?",
                  "a": "If assets earn more than the valuation discount rate (or assumed return), assets grow faster than the liabilities' unwinding interest, creating a surplus.",
                  "explain": "If liabilities are market-related, compare asset returns with the change in the liability discount rate too."
              },
              {
                  "q": "How can salary growth create a surplus?",
                  "a": "If salaries rise less than assumed, final-salary-linked liabilities for active members are lower than expected.",
                  "explain": "The reverse (large pay rises) creates a deficit — one reason sponsors may limit pensionable pay increases."
              },
              {
                  "q": "How can mortality experience create a surplus or deficit?",
                  "a": "Pensioners dying sooner than assumed releases reserves (surplus); living longer creates a deficit. Deaths in service can create a surplus or strain depending on the value of death benefits compared with the reserve released.",
                  "explain": "Consider each decrement's effect separately: the result depends on benefit paid versus reserve held."
              },
              {
                  "q": "How can withdrawal experience create a surplus?",
                  "a": "If withdrawal benefits (deferred pensions or transfer values) are worth less than the reserve held for the member's ongoing benefits (e.g. because salary growth is lost), more withdrawals than expected create a surplus.",
                  "explain": "The effect depends on how generous withdrawal terms are compared with the funding basis."
              },
              {
                  "q": "How can early retirement create a surplus or strain?",
                  "a": "If early retirement reduction factors are less than actuarially fair, each early retirement costs more than the reserve held (strain); if more than fair, a surplus arises.",
                  "explain": "Subsidised early retirements are a common cause of deficits during corporate restructurings."
              },
              {
                  "q": "How can commutation create a surplus?",
                  "a": "If the cash paid for each unit of pension given up is less than the value of that pension on the valuation basis, each commutation generates a surplus.",
                  "explain": "This links to Chapter 8's option terms — generous or mean terms show up here."
              },
              {
                  "q": "How can a change in assumptions create a surplus or deficit?",
                  "a": "Strengthening assumptions (e.g. lower discount rate, higher life expectancy) increases liabilities (deficit); weakening them releases a surplus.",
                  "explain": "Assumption changes are often the largest item — distinguish them from experience items when explaining results."
              },
              {
                  "q": "What factors affect how a surplus should be used?",
                  "a": "Scheme rules and who has powers over surplus; legislation and tax; the funding level on other bases (e.g. solvency); sponsor covenant; members' reasonable expectations; the likelihood the surplus is temporary; the investment strategy; equity between member groups and between members and sponsor.",
                  "explain": "The syllabus pairs identifying surplus with 'factors affecting its application' — examiners expect both."
              },
              {
                  "q": "Give four ways a surplus could be used.",
                  "a": "Reduce sponsor contributions (contribution holiday); reduce member contributions; improve benefits (e.g. discretionary increases); refund to the sponsor (where permitted); de-risk investment; hold as a reserve against future adverse experience.",
                  "explain": "Each option benefits a different stakeholder — explain who gains and who bears the risk."
              },
              {
                  "q": "Why might trustees be reluctant to use a surplus?",
                  "a": "The surplus may be temporary (e.g. market-driven); it may not exist on a more prudent or buy-out basis; future adverse experience could reverse it; covenant may be weak.",
                  "explain": "Prudence about surplus usage is a recurring theme after periods of market volatility."
              },
              {
                  "q": "How should a deficit be dealt with?",
                  "a": "Through additional sponsor contributions (recovery plan), higher member contributions, benefit changes for future service, changes to investment strategy, or contingent assets — depending on covenant, regulation and affordability.",
                  "explain": "The length of the recovery plan balances affordability for the sponsor against risk to members."
              },
              {
                  "q": "Why is identifying sources of surplus useful?",
                  "a": "It shows which assumptions were borne out and which were not, informing changes to assumptions, investment strategy and option terms, and validates the valuation's calculations.",
                  "explain": "This is the 'monitor' part of the control cycle — lessons feed into the next valuation."
              },
              {
                  "q": "What is the 'interest on surplus' item in an analysis?",
                  "a": "The expected growth of the opening surplus or deficit at the valuation discount rate over the inter-valuation period.",
                  "explain": "Without it, the analysis would not reconcile opening and closing positions."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Analysis of experience",
          "description": "Monitoring actual experience against assumptions: the purposes of an experience analysis, how to carry it out for demographic and financial assumptions, how to use the results, and the limitations of small-scheme data.",
          "cards": [
              {
                  "q": "What are the purposes of analysing experience?",
                  "a": "To check whether assumptions are appropriate; to identify the sources of surplus or deficit; to inform future assumption setting; to monitor trends; to check data quality; to explain the change in the funding position to stakeholders.",
                  "explain": "It is the 'monitoring' stage of the Actuarial Control Cycle."
              },
              {
                  "q": "How is mortality experience analysed?",
                  "a": "Compare actual deaths with expected deaths (exposed-to-risk multiplied by the assumed mortality rates), often by age and sex, and possibly weighted by pension amount (amounts-weighted).",
                  "explain": "Amounts-weighted analysis matters because higher pensioners tend to live longer and carry more liability."
              },
              {
                  "q": "Why might mortality be analysed by amount rather than by lives?",
                  "a": "Liability depends on pension amounts, and wealthier members (larger pensions) tend to have lighter mortality; a lives-based analysis may understate the liability impact.",
                  "explain": "This is a standard pensions refinement that exam answers can mention for credit."
              },
              {
                  "q": "How can withdrawal experience be analysed?",
                  "a": "Compare actual withdrawals with expected, by age and length of service, and investigate reasons for differences (e.g. restructuring, economic conditions).",
                  "explain": "Withdrawal is sensitive to one-off events — a single redundancy programme can distort the data."
              },
              {
                  "q": "How should one-off events be treated in an experience analysis?",
                  "a": "Identified and separated from underlying experience, so that assumptions reflect expected future experience rather than a non-recurring event.",
                  "explain": "Using distorted experience to set assumptions leads to wrong future costs."
              },
              {
                  "q": "Why is scheme experience often not credible on its own?",
                  "a": "Small schemes have few decrements, so random fluctuation dominates; experience may be pooled over several years or combined with industry data using credibility weighting.",
                  "explain": "Credibility weighting blends scheme and standard experience according to data volume."
              },
              {
                  "q": "How is financial experience (e.g. investment return) analysed?",
                  "a": "Compare actual returns with the assumed return or the change in liabilities, analysing by asset class and against benchmarks, and separate the effect of market movements from strategy decisions.",
                  "explain": "This overlaps with investment performance monitoring and with the analysis of surplus."
              },
              {
                  "q": "How can salary experience be analysed?",
                  "a": "Compare actual pensionable salary increases for continuing members with those assumed, and examine whether promotional scales are appropriate by age.",
                  "explain": "Salary experience depends heavily on the sponsor's pay policy, so discussion with the sponsor is useful."
              },
              {
                  "q": "What is 'exposed to risk' in an experience analysis?",
                  "a": "The total time members were at risk of a decrement during the period (e.g. member-years exposed to death), used to compute expected numbers of decrements.",
                  "explain": "Getting exposure right requires accurate dates of entry and exit — dependent on good data."
              },
              {
                  "q": "What should be done with the results of an experience analysis?",
                  "a": "Adjust assumptions where experience is credible and expected to persist; investigate unexpected results; communicate findings; adjust option terms or benefit design if needed.",
                  "explain": "Results feed back into Chapter 18's assumption setting."
              },
              {
                  "q": "What is an 'actual versus expected' ratio?",
                  "a": "Actual number (or amount) of events divided by expected under the assumptions; a ratio above 100% means more events than assumed.",
                  "explain": "Report ratios with confidence intervals or credibility comments for small schemes."
              },
              {
                  "q": "How can option take-up be monitored?",
                  "a": "Record the proportion of members exercising each option (e.g. commutation, early retirement, transfers) and the terms used, compared with assumptions.",
                  "explain": "Changes in take-up can signal anti-selection or changes in member behaviour after regulatory reforms."
              },
              {
                  "q": "Why is experience analysis important for DC schemes too?",
                  "a": "Monitoring investment performance, charges, default fund outcomes, member choices and retirement behaviour helps governance and design decisions.",
                  "explain": "In DC, the 'experience' is about member outcomes rather than funding surplus."
              },
              {
                  "q": "What limitations apply to experience analysis?",
                  "a": "Small data volumes; changing membership profile; one-off events; data errors; time lags; past experience may not predict the future (e.g. longevity trends).",
                  "explain": "Judgement is needed to decide how much weight to give past experience."
              },
              {
                  "q": "How often should experience be analysed?",
                  "a": "Typically at each funding valuation (e.g. every one to three years), with more frequent monitoring of key items such as investment performance and mortality for large schemes.",
                  "explain": "Frequency should reflect the scheme's size, risk and the pace of change in the environment."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Insurance",
          "description": "How insurance is used in benefit provision: insuring death and ill-health benefits, annuities, buy-ins and buy-outs, longevity swaps, the factors an insurer considers in pricing, and the advantages and disadvantages of insuring.",
          "cards": [
              {
                  "q": "Give four ways insurance can be used in benefit provision.",
                  "a": "Insuring lump-sum death benefits; insuring dependants' pensions on death; income protection for ill-health; buying individual annuities at retirement; bulk annuities (buy-ins and buy-outs); longevity swaps.",
                  "explain": "Syllabus objective 2.1 lists insurance products (protection and annuity policies) as a financing method."
              },
              {
                  "q": "Why might a scheme insure death-in-service benefits?",
                  "a": "Death benefits are volatile for small or medium schemes — one death can cost a large lump sum; insurance smooths the cost and removes the risk.",
                  "explain": "Large schemes may self-insure because their experience is more predictable."
              },
              {
                  "q": "What is a buy-in?",
                  "a": "A bulk annuity policy bought by the scheme's trustees and held as an asset, paying cash flows that match the benefits of a defined group of members (often pensioners).",
                  "explain": "The members remain in the scheme; the trustees retain responsibility for paying benefits, using the policy income."
              },
              {
                  "q": "What is a buy-out?",
                  "a": "The transfer of scheme liabilities to an insurer, with individual annuity policies issued to members, so the scheme no longer holds the liability and can be wound up.",
                  "explain": "Buy-out removes all risk from the sponsor but is usually the most expensive way to secure benefits."
              },
              {
                  "q": "What is a longevity swap?",
                  "a": "A contract where the scheme pays a fixed series of payments (based on expected mortality plus a fee) and receives payments based on actual pension outgo, hedging longevity risk while keeping the assets.",
                  "explain": "It isolates longevity risk; investment risk remains with the scheme."
              },
              {
                  "q": "What key information would an insurer need to quote for buying out a scheme?",
                  "a": "Full membership data (ages, sex, pension amounts, dependants), benefit specification (increases, guarantees, options, discretionary practices), past mortality experience, postcode data, and the data's quality and completeness.",
                  "explain": "Poorly specified benefits or data raise the insurer's price — preparation matters."
              },
              {
                  "q": "What factors, besides the data, influence an insurer's buy-out price?",
                  "a": "Market interest rates and inflation expectations; the insurer's investment strategy and available yields; longevity assumptions; capital requirements and cost of capital; expenses; profit margin; competition and the insurer's appetite; the size of the transaction; reinsurance availability; the scheme's benefit complexity.",
                  "explain": "Exam answers score well by covering both the insurer's economics and market conditions."
              },
              {
                  "q": "Why is a buy-out usually more expensive than the scheme's ongoing funding liability?",
                  "a": "Insurers use prudent assumptions, invest in matching assets with lower expected returns, must hold regulatory capital, and include expenses and profit.",
                  "explain": "The gap between funding and buy-out is the cost of removing all risk."
              },
              {
                  "q": "What are the advantages of a buy-in for trustees?",
                  "a": "Removes investment, inflation and longevity risk for the covered members; the policy is a matching asset; can be a step towards buy-out; can be done when pricing is favourable.",
                  "explain": "Disadvantages include illiquidity, concentration on one insurer, and using a large share of assets."
              },
              {
                  "q": "What is insurer counterparty risk in a buy-in?",
                  "a": "The risk that the insurer fails and cannot pay; mitigated by insurer regulation and capital requirements, compensation schemes and, sometimes, collateral arrangements.",
                  "explain": "Counterparty risk replaces the risks removed — trustees must assess the insurer's strength."
              },
              {
                  "q": "Why might a scheme buy individual annuities at retirement instead of paying pensions from the fund?",
                  "a": "It secures each pension in full, removing longevity and investment risk, and simplifies administration; this is terminal funding in effect.",
                  "explain": "The cost depends on annuity prices at the time, so it fluctuates."
              },
              {
                  "q": "What factors affect whether a scheme should insure a risk or self-insure?",
                  "a": "Scheme size and ability to absorb volatility; cost of insurance relative to expected claims; the sponsor's risk appetite; availability of insurance; administrative convenience; regulatory requirements.",
                  "explain": "Insurance is valuable where the risk is large relative to the scheme's resources."
              },
              {
                  "q": "What are the disadvantages of insuring benefits?",
                  "a": "Insurer margins make it more expensive than expected cost; loss of control and flexibility; counterparty risk; possible difficulty covering unusual benefits; irreversibility.",
                  "explain": "The cost is certain but higher — a classic insurance trade-off."
              },
              {
                  "q": "How can insurance help with ill-health benefits?",
                  "a": "Income protection policies pay a replacement income during incapacity, removing the volatile cost of ill-health retirement from the scheme.",
                  "explain": "Insurers bring claims management expertise that reduces the cost of long-term absence."
              },
              {
                  "q": "Why is timing important when buying bulk annuities?",
                  "a": "Pricing varies with market yields, insurer capacity and competition; schemes that are prepared (clean data, clear benefits) can act when pricing is attractive.",
                  "explain": "Many schemes monitor 'buy-out affordability' continuously to spot such opportunities."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Discontinuance",
          "description": "What happens when a benefit arrangement is discontinued: the rights and expectations of beneficiaries, the options for providing discontinuance benefits (buy-out, run-off, transfer to another scheme), priority orders when assets are insufficient, and the principles for setting discontinuance terms.",
          "cards": [
              {
                  "q": "What is meant by discontinuance of a scheme?",
                  "a": "The scheme stops operating in its current form — e.g. wound up, closed to accrual, or the sponsor fails — so that benefits must be secured or settled.",
                  "explain": "Discontinuance terms determine what members actually get when the promise ends."
              },
              {
                  "q": "What principles govern discontinuance terms?",
                  "a": "The rights of beneficiaries under the rules and law; their reasonable expectations; the assets available; the methods available to provide benefits; and equity between different groups of members.",
                  "explain": "Syllabus 4.4 lists rights and expectations, availability and selection of a method, and the level of available assets."
              },
              {
                  "q": "What options exist for providing benefits on discontinuance?",
                  "a": "Buying out with an insurer; transferring members to another scheme; running off the scheme as a closed fund; paying cash transfer values; or entering a protection fund if the sponsor is insolvent.",
                  "explain": "The choice depends on assets, the sponsor's position, cost and members' interests."
              },
              {
                  "q": "What is a priority order on wind-up?",
                  "a": "A legally or rule-defined order in which assets are applied to benefit categories when assets are insufficient to secure all benefits in full — e.g. pensioners first, then accrued benefits of actives and deferreds, then discretionary benefits.",
                  "explain": "Priority orders protect those most dependent on their benefits, but can be very unfair to younger members."
              },
              {
                  "q": "What is the difference between rights and reasonable expectations?",
                  "a": "Rights are benefits members are legally entitled to under the rules; reasonable expectations include benefits that have been regularly granted in practice (e.g. discretionary increases) and which members may expect.",
                  "explain": "Trustees may consider expectations if assets allow, but rights take precedence."
              },
              {
                  "q": "Why might a scheme choose to run off rather than buy out?",
                  "a": "Buy-out may be unaffordable or poor value; a strong sponsor may prefer to retain risk and expected returns; running off keeps flexibility.",
                  "explain": "Run-off continues the scheme's exposure to risk and ongoing costs, so covenant must be strong enough to support it."
              },
              {
                  "q": "What should be considered when transferring members to another scheme?",
                  "a": "The benefits offered in the new scheme compared with the old; the funding and security of the receiving scheme; the transfer value basis; member consent requirements; legal and regulatory constraints.",
                  "explain": "Past-service benefits should generally be protected in value, even if future benefits change."
              },
              {
                  "q": "How is a surplus on discontinuance typically handled?",
                  "a": "According to the rules: benefit augmentation, return to the sponsor (possibly subject to tax), or a combination; trustees consider members' expectations before refunding.",
                  "explain": "Surplus refunds are controversial because members may feel entitled to them."
              },
              {
                  "q": "What happens to members' benefits if the sponsor is insolvent and the scheme is underfunded?",
                  "a": "Benefits are reduced to what the assets can secure following the priority order, or compensated by a protection fund (typically at a reduced level), with any debt claimed against the sponsor's estate.",
                  "explain": "The debt claim usually ranks as an unsecured creditor — recoveries may be small."
              },
              {
                  "q": "Why is discontinuance relevant to ongoing funding?",
                  "a": "The discontinuance (solvency) position shows how secure benefits are if the sponsor disappears; many regimes require it to be disclosed or used as a funding target minimum.",
                  "explain": "Comparing ongoing and discontinuance positions shows the reliance placed on the sponsor."
              },
              {
                  "q": "What is a 'section 75-style' employer debt on discontinuance (in general terms)?",
                  "a": "A legal requirement that an employer leaving a scheme or winding it up pays a debt equal to the shortfall between the assets and the cost of securing benefits (often on a buy-out basis).",
                  "explain": "Such debts can be very large and may be triggered by corporate events."
              },
              {
                  "q": "Why might trustees consider partial buy-outs before discontinuance?",
                  "a": "To secure the benefits of some members (e.g. pensioners) while pricing is favourable, reducing risk and simplifying eventual wind-up.",
                  "explain": "Partial buy-outs can change the relative security of remaining members — equity must be considered."
              },
              {
                  "q": "What administrative issues arise on discontinuance?",
                  "a": "Data cleansing and benefit specification; tracing members; equalisation corrections; communications; insurer selection; settling expenses; legal documentation.",
                  "explain": "Wind-ups often take years because of these practical issues."
              },
              {
                  "q": "How does discontinuance differ for DC schemes?",
                  "a": "Members' accumulated funds are transferred to another arrangement or used to buy benefits; there is no funding shortfall, but charges, investment options and communication are key.",
                  "explain": "DC discontinuance is simpler technically but still requires careful member protection."
              },
              {
                  "q": "Why might members' reasonable expectations be met only partly?",
                  "a": "Assets may be insufficient to cover discretionary benefits after rights are secured, or the rules may give the sponsor rights over surplus.",
                  "explain": "Trustees need to balance fairness with legal constraints and communicate clearly."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Problem solving",
          "description": "Bringing the course together to answer SP4 exam questions: structuring answers, using stakeholder and risk frameworks, generating a breadth of relevant points, applying principles to unfamiliar scenarios, and the command verbs the examiners use.",
          "cards": [
              {
                  "q": "What is the key to scoring well on SP4 'discuss' questions?",
                  "a": "Generating a breadth of relevant, distinct points applied to the scenario, rather than a few points in great depth or generic lists.",
                  "explain": "Examiners' reports regularly note that candidates who apply points to the question's facts score much better than those writing generically."
              },
              {
                  "q": "Give three frameworks that help structure SP4 answers.",
                  "a": "Stakeholders (who is affected and how); risks (benefits, contributions, assets, exhaustion, security); the Actuarial Control Cycle (specify, develop, monitor); design factors (type, level, financing, risk sharing, assets, governance).",
                  "explain": "Having frameworks ready turns an unfamiliar question into a checklist exercise."
              },
              {
                  "q": "What does the command verb 'outline' require?",
                  "a": "A brief description of the main points without detailed explanation.",
                  "explain": "Match the depth to the verb and the marks: an 'outline' for 4 marks needs several short points."
              },
              {
                  "q": "What does the command verb 'explain' require?",
                  "a": "Why or how something happens — reasoning, not just statements.",
                  "explain": "An 'explain' answer that merely lists points will score poorly."
              },
              {
                  "q": "What does 'discuss' require?",
                  "a": "Consideration of different aspects or viewpoints, pros and cons, and a reasoned conclusion where appropriate.",
                  "explain": "Discussion benefits from considering different stakeholders' perspectives."
              },
              {
                  "q": "How should marks guide the length of an answer?",
                  "a": "As a rule of thumb, around one distinct, relevant point per half-mark to one mark, depending on the verb — so a 10-mark question needs many points.",
                  "explain": "Examiners reward breadth — running short of ideas is the most common reason for low scores."
              },
              {
                  "q": "How should calculations be presented in SP4?",
                  "a": "State assumptions clearly, set out the method step by step, and comment on the results and their limitations.",
                  "explain": "Method marks are available even if arithmetic slips — clear working protects marks."
              },
              {
                  "q": "How can a candidate generate ideas under exam conditions?",
                  "a": "Use frameworks (stakeholders, risks, control cycle), think about the scenario's specific features, consider opposite cases, and ask 'who, what, when, why, how much'.",
                  "explain": "Brainstorming briefly before writing leads to more complete answers."
              },
              {
                  "q": "Why is it important to apply knowledge to the scenario in SP4?",
                  "a": "Most marks are for application and higher-order skills; generic answers that ignore the scenario's details miss those marks.",
                  "explain": "Highlight scenario details (e.g. 'large, mature, well-funded scheme') and reference them in your points."
              },
              {
                  "q": "What is a common weakness in SP4 answers identified by examiners?",
                  "a": "Writing around the subject rather than answering the question asked, insufficient breadth, and ignoring key information in the question.",
                  "explain": "Rereading the question before answering helps avoid these."
              },
              {
                  "q": "How should an SP4 answer handle unfamiliar regulatory contexts?",
                  "a": "Use principles and state assumptions about what regulation might require, rather than relying on specific national rules.",
                  "explain": "The exam is set in a 'generic' country — flexible reasoning is expected."
              },
              {
                  "q": "How can previous chapters be linked in one answer?",
                  "a": "A question on a buy-out quotation, for example, draws on data (Chapter 17), assumptions (Chapter 18), insurance (Chapter 22) and discontinuance (Chapter 23).",
                  "explain": "Connecting chapters demonstrates higher-order understanding and generates more points."
              },
              {
                  "q": "How should time be managed in the SP4 exam?",
                  "a": "Allocate time in proportion to marks and move on when the allocation is used; return if time allows.",
                  "explain": "Unanswered parts cost more marks than slightly shorter answers across all parts."
              },
              {
                  "q": "What role do examiners' reports play in preparation?",
                  "a": "They show what the examiners were looking for, common mistakes, and how marks were distributed.",
                  "explain": "Reading reports alongside past papers is one of the most efficient forms of revision."
              },
              {
                  "q": "Why should SP4 answers consider both qualitative and quantitative aspects?",
                  "a": "Most real problems involve numbers (costs, funding levels) and judgement (stakeholder impacts, risks); good answers address both.",
                  "explain": "Even calculation questions usually have a 'comment on' part asking for judgement."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Glossary",
          "description": "Terminology used throughout SP4 — funding, valuation, benefit design and discontinuance terms — as a recall deck so the vocabulary is precise in definitions and explanations.",
          "cards": [
              {
                  "q": "Define 'accrued benefits'.",
                  "a": "Benefits earned for service up to a given date, calculated under the scheme rules (with or without allowance for future salary increases, depending on the definition used).",
                  "explain": "Whether future salary growth is included is the difference between the PUM and CUM approaches."
              },
              {
                  "q": "Define 'actuarial liability'.",
                  "a": "The value of benefits attributed to past service under a given funding method and assumptions.",
                  "explain": "The funding target against which assets are compared."
              },
              {
                  "q": "Define 'funding level'.",
                  "a": "The ratio of the value of assets to the value of liabilities on a given basis.",
                  "explain": "Always quote the basis — ongoing, solvency, or accounting."
              },
              {
                  "q": "Define 'buy-out'.",
                  "a": "Securing members' benefits by buying individual annuity policies from an insurer, transferring the liability out of the scheme.",
                  "explain": "Contrast buy-in, where the policy is held by the scheme as an asset."
              },
              {
                  "q": "Define 'transfer value'.",
                  "a": "A lump sum paid from a scheme to another arrangement in place of a member's accrued benefits.",
                  "explain": "Its basis determines whether it is fair to the transferring member and to those remaining."
              },
              {
                  "q": "Define 'commutation'.",
                  "a": "Exchanging part of a pension for a lump sum at retirement.",
                  "explain": "Commutation factors determine the exchange rate and hence surplus or strain."
              },
              {
                  "q": "Define 'revaluation'.",
                  "a": "Increases applied to deferred benefits between leaving service and retirement.",
                  "explain": "Distinguish from increases in payment, which apply after the pension starts."
              },
              {
                  "q": "Define 'contingent asset'.",
                  "a": "An asset available to the scheme only if a specified event occurs, such as a guarantee, charge over property or escrow.",
                  "explain": "Used to strengthen covenant without immediate cash."
              },
              {
                  "q": "Define 'recovery plan'.",
                  "a": "A plan of additional contributions to eliminate a funding deficit over a specified period.",
                  "explain": "Its length reflects affordability and covenant strength."
              },
              {
                  "q": "Define 'net replacement ratio'.",
                  "a": "The ratio of a person's net (after-tax) income in retirement to their net income just before retirement.",
                  "explain": "Often used to set targets for DC contribution rates."
              },
              {
                  "q": "Define 'sponsor covenant'.",
                  "a": "The sponsor's legal obligation and financial ability to support the scheme.",
                  "explain": "Central to integrated risk management of DB schemes."
              },
              {
                  "q": "Define 'control period'.",
                  "a": "The period over which a funding method's standard contribution rate is calculated.",
                  "explain": "One year under the projected unit method."
              },
              {
                  "q": "Define 'priority order'.",
                  "a": "The order in which assets are applied to benefits on wind-up when they are insufficient to secure all benefits.",
                  "explain": "Usually protects pensioners first."
              },
              {
                  "q": "Define 'lifestyling'.",
                  "a": "Automatically switching a DC member's investments from growth assets to lower-risk assets as retirement approaches.",
                  "explain": "Also called a glide path."
              },
              {
                  "q": "Define 'longevity swap'.",
                  "a": "A contract exchanging fixed payments for payments based on actual pension outgo, hedging longevity risk.",
                  "explain": "Investment risk stays with the scheme."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp4-q1",
      title: "Stakeholders and the general business environment",
      modules: "Modules 2, 3, 4",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the six genuine stakeholder categories named in the official SP4 syllabus as having roles and responsibilities in the provision of benefits.",
          answer:
            "State and statutory bodies, employers or groups of employers, trustees or scheme managers, financial advisers for individuals, consultants and other professional advisers, and individuals or groups of individuals.",
          note: "A complete answer names all six categories precisely.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why trustees must be understood as occupying a distinct role from the employer that sponsors a pension scheme.",
          answer:
            "Trustees typically hold a genuine fiduciary duty to act in the best interests of scheme members and beneficiaries, which can require them to exercise independent judgement (e.g. on funding, investment strategy) that may not always align with the sponsoring employer's own commercial interests, a structurally distinct role from the employer's own management.",
          note: "A strong answer explicitly names the fiduciary duty concept, not just asserts that trustees and employers are 'different'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss what 'sponsor covenant' means, and why its integration with a scheme's funding and investment strategy matters.",
          answer:
            "Sponsor covenant is the sponsoring employer's financial ability and willingness to support a pension scheme over time. Covenant strength should inform both funding strategy (e.g. how quickly a shortfall should be recovered) and investment strategy (e.g. how much investment risk the scheme can reasonably tolerate given the covenant's ability to absorb any resulting shortfall), meaning covenant assessment is only useful when actively connected to these other decisions, not conducted in isolation. A scheme with a strong covenant can reasonably support a longer recovery period and more investment risk than an identical scheme with a weak covenant.",
          note: "A strong answer defines covenant <em>and</em> explains the genuine integration principle with a concrete example, not just one or the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why public sector pension provision might be financed on an unfunded, pay-as-you-go basis while most private sector schemes are funded.",
          answer:
            "Public sector schemes are sometimes financed on an unfunded basis, backed by the State's ongoing taxation power, while private sector schemes are typically funded, requiring assets to be accumulated in advance to meet promised benefits, reflecting the different underlying financial backing available to each sector.",
          note: "This connects directly to the public-versus-private financing distinction developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q2",
      title: "Financing methods and scheme design for a new arrangement",
      modules: "Modules 6, 7, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A new employer is considering how to finance a benefit promise to its employees. Explain the genuine difference between pay-as-you-go and funded financing.",
          answer:
            "Pay-as-you-go financing pays benefits from current income as they fall due, with no significant advance asset accumulation, while funded financing accumulates genuine assets in advance, specifically earmarked to meet promised future benefits.",
          note: "A strong answer explains both approaches precisely, not just names them.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a 'contingent asset' is, and why this employer might use one rather than making an immediate cash contribution.",
          answer:
            "A contingent asset is a genuine claim on specific sponsor (or related-party) assets that only becomes available to the scheme under specified trigger conditions (e.g. sponsor insolvency), providing additional genuine security to the scheme without requiring the sponsor to make an immediate cash contribution.",
          note: "This connects directly to the flexible-financing-tool theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the six genuine design factors this employer should consider when determining a suitable benefit design, per the official syllabus.",
          answer:
            "Type of pension scheme (e.g. DB, DC, risk-sharing), governance requirements, level and form of benefits and/or contributions, method of financing the benefits, how risk is shared between parties, and choice of assets (when benefits are to be funded and when assets are to be invested) — all six should be considered together, since they interact (e.g. scheme type strongly shapes risk-sharing, and financing method shapes asset choice timing).",
          note: "A complete answer names all six factors and shows awareness that they interact, not just lists them independently.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a 'risk-sharing' scheme design might be considered a distinct category alongside pure DB and pure DC.",
          answer:
            "A risk-sharing scheme splits investment and/or longevity risk between the sponsor and members, rather than allocating it entirely to one side as pure DB (sponsor bears risk) or pure DC (member bears risk) do.",
          note: "This connects directly to the risk-sharing-as-genuine-third-category theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q3",
      title: "Risks affecting a benefit arrangement",
      modules: "Module 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List the five genuine risk categories named in the official SP4 syllabus as affecting a benefit arrangement.",
          answer:
            "Risks affecting the level and incidence of benefits, the level and incidence of contributions, the level and incidence of return on assets, the extent to which assets are exhausted during a member's lifetime, and the overall security of benefits.",
          note: "A complete answer names all five categories precisely.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why 'the extent to which assets are exhausted during a member's lifetime' is a distinctive risk primarily relevant to DC arrangements, rather than DB schemes.",
          answer:
            "A DC member drawing down their own accumulated pot faces genuine longevity risk that their assets could run out before they die (unless converted to a guaranteed income), while a DB scheme's promised benefit is paid for as long as the member lives regardless of any underlying asset exhaustion, since the sponsor bears this risk in a DB arrangement.",
          note: "A strong answer explicitly connects this risk to DC's individual-risk-bearing structure.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss which of these five risks can be mitigated through insurance products, and one genuine limitation of insurance-based mitigation.",
          answer:
            "Longevity risk (via annuity purchase or longevity swap) and death-in-service risk (via life insurance) can be mitigated through insurance products, transferring these specific risks to a specialist insurer. A genuine limitation is that this transfer introduces new counterparty/credit risk — the insurer must itself remain financially able to honour the transferred obligation — so insurance mitigation transforms rather than eliminates risk, and not every listed risk (e.g. some investment or inflation risks) has a readily available insurance solution.",
          note: "A strong answer names at least one insurable risk <em>and</em> explains the counterparty-risk limitation, not just asserts that insurance 'helps'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why 'overall security of benefits' should be assessed as a distinct, higher-level risk category beyond simply summing the other four listed risks.",
          answer:
            "Overall security depends on how these individual risks interact and are backed by the wider provider's financial strength, so a scheme could have well-managed individual risk components yet still face genuine overall security concerns if the sponsor backing those components is itself financially weak.",
          note: "This connects directly to the holistic-versus-additive risk assessment theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q4",
      title: "Accounting standards and member options",
      modules: "Modules 4, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the genuine purpose of accounting standards for pension and other benefit provision.",
          answer:
            "Accounting standards ensure a sponsoring employer's financial statements and consistently reflect the cost and obligations arising from its benefit arrangements, allowing stakeholders to assess the sponsor's true financial position on a comparable basis across different companies and reporting periods.",
          note: "A strong answer explicitly names the comparability/transparency purpose.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the accounting basis used to value a sponsor's pension obligation might differ from the scheme's own funding basis.",
          answer:
            "Accounting standards aim for a consistent, comparable measurement basis across companies (often using a prescribed discount rate methodology), while the funding basis reflects the scheme's own specific investment strategy and prudence requirements, so the same underlying liability can be measured differently under each basis.",
          note: "This connects directly to the multiple-reporting-bases theme developed elsewhere in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "A scheme is considering the terms it should offer members exercising a large transfer-value option. Discuss why setting these terms requires balancing member interests against the interests of the wider scheme.",
          answer:
            "Terms must consider the genuine risk and reward for all stakeholders affected, not just the member exercising the option — terms that are unfairly generous could create genuine anti-selection risk to the scheme (members with weaker health or lower expected longevity being more likely to transfer), while unfairly restrictive terms would fail to serve genuine member interests. This is why schemes often require independent financial advice before a large transfer, since giving up guaranteed benefits is a significant, often irreversible decision shifting investment and longevity risk onto the member.",
          note: "A strong answer identifies the genuine anti-selection concern <em>and</em> the member-protection rationale for advice requirements, not just one or the other.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a maturing DB scheme's investment strategy might need to change over time, even without any change in sponsor covenant.",
          answer:
            "As a scheme matures, its investment time horizon shortens and its tolerance for short-term volatility reduces, so investment strategy should evolve in response to this genuine change in the scheme's own liability profile over time, independent of any other change in circumstances.",
          note: "This connects directly to the de-risking-as-scheme-matures theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q5",
      title: "Calculating a defined benefit pension",
      modules: "Modules 7, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "A member of a final salary DB scheme retires with 25 years of pensionable service and a final salary of &pound;60,000. The scheme's accrual rate is 1/80ths. Calculate the member's annual pension.",
          answer:
            "Annual pension = &pound;60,000 &times; (1/80) &times; 25 = &pound;18,750 per annum.",
          note: "Arithmetic check: 60000 × (1/80) × 25 = 18,750.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the model used to project this member's future benefit and the scheme's future income and outgo needs to incorporate assumptions about both membership movements and financial factors.",
          answer:
            "The model should project genuine future contribution income and benefit outgo cashflows over time, incorporating assumptions about membership movements (new entrants, leavers, retirements, deaths) and financial assumptions (investment returns, salary growth, inflation) that together determine the arrangement's projected financial position at future points in time.",
          note: "A strong answer names both categories of assumption, not just one.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the choice of discount rate assumption for valuing this member's pension requires genuine judgement, rather than a single universally correct rate.",
          answer:
            "The discount rate should reflect the expected return on the scheme's actual (or intended) investment strategy and its genuine level of prudence, so different schemes with different investment strategies and risk appetites can reasonably adopt different discount rates. It must also reflect the requirements for prudence and the objectives of stakeholders (trustees prioritising member security may prefer more prudent assumptions, while sponsors prioritising affordability may prefer less prudent ones), meaning discount rate setting is a genuine, multi-factor judgement, not a single mechanically correct calculation.",
          note: "A strong answer connects the discount rate to <em>both</em> investment strategy <em>and</em> stakeholder-objective/prudence considerations.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why sensitivity analysis should be carried out alongside the pension calculation in part (i) if it were extended into a full funding projection.",
          answer:
            "Sensitivity analysis reveals how much the projected outcome changes when key assumptions (e.g. salary growth, investment return) are varied, showing which assumptions the result is most exposed to — without this, a single-point projection could give false confidence, since the projection is only as reliable as the assumptions used.",
          note: "This connects directly to the sensitivity-analysis theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q6",
      title: "Funding valuation and recovery plan",
      modules: "Modules 16, 18, 19",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A DB scheme's funding valuation assesses technical provisions of &pound;40,000,000, against scheme assets of &pound;34,000,000. Trustees and the sponsor agree a recovery plan to eliminate the shortfall via equal annual contributions over 6 years. Calculate (a) the funding shortfall, and (b) the required annual recovery contribution.",
          answer:
            "(a) Funding shortfall = &pound;40,000,000 &minus; &pound;34,000,000 = &pound;6,000,000. (b) Required annual recovery contribution = &pound;6,000,000 / 6 = &pound;1,000,000 per annum.",
          note: "Arithmetic check: 40,000,000-34,000,000=6,000,000; 6,000,000/6=1,000,000. This is a simplified calculation ignoring investment return on recovery contributions and discounting, for illustrative purposes.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the recovery plan length in part (i) involves a genuine trade-off between sponsor affordability and member security.",
          answer:
            "A longer recovery period spreads the additional contributions over more years, easing the sponsor's near-term cash burden, but leaves the scheme underfunded for longer, increasing the risk that adverse experience or sponsor distress could prevent the shortfall ever being fully addressed.",
          note: "A strong answer explicitly frames this as a genuine trade-off, not a straightforward 'shorter is always better' conclusion.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why the actuary should consider the sponsor's covenant strength when advising on this recovery plan's length.",
          answer:
            "A weaker sponsor covenant may justify requiring a shorter recovery period or higher near-term contributions (since the scheme cannot rely on the sponsor's ongoing support with the same confidence), while a stronger covenant may reasonably support a longer, more gradual recovery plan.",
          note: "This connects the numeric recovery plan calculation directly to the covenant material developed elsewhere in this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the data used to calculate the &pound;40,000,000 technical provisions figure must be accurate for this valuation to be reliable.",
          answer:
            "Since the valuation's genuine reliability depends directly on accurate membership data, scheme rules, and asset values, poor-quality or incomplete data can produce misleading valuation results regardless of how sound the calculation technique applied to that data otherwise is.",
          note: "This connects directly to the data-as-foundational-input theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q7",
      title: "Valuing a DC accumulation and comparing designs",
      modules: "Modules 6, 14",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A DC scheme member contributes &pound;4,000 per annum (combined employer and employee contributions) for 20 years, with the fund assumed to grow at 4.5% per annum net investment return, contributions paid at the start of each year. Using the recursive relationship F(y) = (F(y-1) + 4,000) &times; 1.045 with F(0) = 0, calculate the accumulated fund value at the end of year 20 (to the nearest &pound;100).",
          answer:
            "Applying the recursive growth formula for 20 years gives an accumulated fund value of approximately &pound;131,100 (&pound;131,132.55 to the nearest penny).",
          note: "Check by iterating year by year: F(20) = 131,132.55. Full marks require showing the recursive/compounding approach, not just stating the final figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the 'extent to which assets are exhausted during a member's lifetime' risk applies to this DC member's accumulated fund but would not apply in the same way to a DB pension of equivalent starting value.",
          answer:
            "This DC member draws down their own accumulated pot in retirement, facing genuine longevity risk that the pot could run out before they die (unless converted to a guaranteed income), while a DB pension of equivalent value is paid for as long as the member lives regardless of the notional 'pot' being exhausted, since the sponsor bears this risk in a DB arrangement.",
          note: "This connects directly to the DC-specific asset-exhaustion risk material developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why valuing guarantees or options that might be added to this DC arrangement (e.g. a guaranteed minimum fund value at retirement) would require different techniques from the straightforward accumulation calculation in part (i).",
          answer:
            "A guarantee only bites under certain, adverse future market outcomes, so its true cost depends on the full probability-weighted range of possible future market paths, requiring stochastic modelling or option-pricing techniques capturing this genuine range, unlike the single deterministic accumulation calculation used in part (i) which assumes one fixed growth rate throughout.",
          note: "This connects directly to CM2's option-pricing material applied to a genuine pension guarantee-costing context.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why reasonableness checking should be applied to the result in part (i), beyond confirming the arithmetic is correct.",
          answer:
            "Reasonableness checking (e.g. comparing the result against a simplified approximation or prior similar calculations) provides a genuine, practical sanity check catching potential input or methodology errors that a technically correct but unchecked calculation might otherwise miss.",
          note: "This connects directly to the reasonableness-checking-as-practical-safeguard theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q8",
      title: "Discontinuance of a benefit arrangement",
      modules: "Module 23",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "A DB scheme is discontinuing following its sponsor's insolvency. Explain why the 'rights and expectations of beneficiaries' must constrain the discontinuance terms offered, rather than being set purely for administrative convenience.",
          answer:
            "Beneficiaries have genuine, often legally-protected rights to accrued benefits, and their reasonable expectations (formed based on how the arrangement was originally communicated and administered) carry genuine weight in determining fair discontinuance treatment, meaning discontinuance terms cannot simply be set to minimise administrative cost regardless of beneficiary interests.",
          note: "A strong answer explicitly frames rights and expectations as a genuine constraint, not a secondary consideration.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the level of available assets might constrain which discontinuance method is actually feasible for this scheme.",
          answer:
            "If the scheme's available assets are insufficient to fully fund the preferred discontinuance method (e.g. a full buy-out requiring complete funding), the provider may need to consider a more modest method, or accept a shortfall requiring some other resolution, making available assets a genuine, binding constraint on method selection, not an afterthought.",
          note: "This connects directly to the asset-adequacy-as-constraint theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why the actuary would need genuine professional judgement, not just mechanical calculation, to determine how a limited pool of available assets should be allocated across different beneficiary groups (e.g. pensioners in payment versus deferred members).",
          answer:
            "Allocating a limited pool of assets fairly across different beneficiary groups involves genuine, difficult trade-offs with no single objectively correct answer, requiring the actuary's professional judgement to propose a fair, defensible allocation approach reflecting the arrangement's rules and beneficiaries' genuine relative positions, rather than a purely mechanical, formulaic split.",
          note: "A strong answer explicitly names this as a genuine judgement call requiring professional reasoning, not a calculation with one correct numeric answer.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why discontinuance for a DC arrangement is typically more straightforward than for a DB arrangement.",
          answer:
            "A DC arrangement's discontinuance is typically more straightforward — the member's own accumulated pot value is clear and can usually be transferred or paid out directly — while a DB arrangement requires valuing complex, uncertain future benefit promises and determining how any funding shortfall across the whole membership should be allocated.",
          note: "This connects directly to the DB-versus-DC discontinuance-complexity theme developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q9",
      title: "Sources of surplus for a pension scheme",
      modules: "Module 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A pension scheme's actual surplus for the year was &pound;410,000, against an expected surplus of &pound;300,000 under its original assumptions. Of the total variance, &pound;90,000 is attributed to favourable investment experience. Calculate the total variance and the resulting variance attributable to other (e.g. mortality) sources.",
          answer:
            "Total variance = &pound;410,000 &minus; &pound;300,000 = &pound;110,000. Variance attributable to other sources = &pound;110,000 &minus; &pound;90,000 (investment) = &pound;20,000.",
          note: "Arithmetic check: 410,000-300,000=110,000; 110,000-90,000=20,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the &pound;90,000 investment variance and the &pound;20,000 remaining variance in part (i) should be reported separately, rather than combined into a single 'total experience variance' figure.",
          answer:
            "Different experience sources can move in offsetting or reinforcing directions and require different management responses (e.g. an investment variance might prompt reviewing investment strategy, while a mortality variance might prompt reviewing longevity assumptions), so combining them would obscure which specific underlying driver actually requires attention.",
          note: "A strong answer explains <em>why</em> separate reporting matters for management response, not just that decomposition is 'more detailed'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss the genuine factors that would affect how this &pound;110,000 surplus should be applied, once identified.",
          answer:
            "The scheme's own rules governing surplus use, the relative interests of different stakeholders (members might favour benefit improvements, while the sponsor might favour reduced future contributions), regulatory constraints on permissible surplus applications, and the scheme's ongoing funding risk appetite going forward — a genuine, multi-factor decision, not a single automatic outcome.",
          note: "A strong answer names multiple genuine factors, reflecting the real complexity of surplus-application decisions.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how this module's source-of-surplus analysis relates to the Actuarial Control Cycle.",
          answer:
            "The Actuarial Control Cycle describes the recurring process of setting assumptions and a funding approach, monitoring actual experience against those assumptions, and feeding the resulting insight back into revised assumptions and approach — this surplus analysis is the monitoring step whose findings directly feed back into the cycle's next iteration of assumption-setting.",
          note: "This connects the numeric decomposition directly to the Actuarial Control Cycle framework developed in this course.",
        },
      ],
    },
    {
      id: "sp4-q10",
      title: "Solving a complex pension scheme issue",
      modules: "Modules 9, 23, 24",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Discuss",
          marks: 4,
          question:
            "A DB scheme's sponsor covenant has weakened, and the scheme is significantly underfunded. Discuss why this represents a complex issue requiring integrated judgement across multiple areas.",
          answer:
            "This situation involves competing considerations across multiple topic areas at once — reassessing sponsor covenant strength and its integration with funding and investment strategy, evaluating the genuine risks to overall benefit security given the weakened covenant, and considering whether discontinuance-related protections might eventually be needed if the sponsor's position deteriorates further — requiring integrated judgement across covenant, risk-management and discontinuance-planning material, not a single-dimension analysis.",
          note: "A strong answer explicitly draws on covenant, risk, and discontinuance material together, reflecting the integrated nature of complex real-world pension issues.",
        },
        {
          label: "(ii)",
          command: "Recommend",
          marks: 4,
          question:
            "Recommend a course of action for the trustees in response to this situation, with justification.",
          answer:
            "The trustees should reassess the appropriate funding and investment strategy in light of the weakened covenant (likely favouring a shorter recovery period and more cautious investment approach, per the covenant integration principle (Module 11)), while also proactively engaging with the sponsor to understand its genuine prospects and negotiate any additional security available (e.g. contingent assets), rather than continuing with the scheme's existing funding and investment plan unchanged despite the altered circumstances.",
          note: "Credit should be given for any well-justified, reasoned recommendation that explicitly addresses the weakened covenant, not a generic response.",
        },
        {
          label: "(iii)",
          command: "Explain",
          marks: 2,
          question:
            "Explain why the trustees should specify how the sponsor's covenant will be monitored going forward, rather than treating this reassessment as a one-off exercise.",
          answer:
            "Sponsor financial health can continue to change over time, so ongoing covenant monitoring helps trustees identify any further genuine deterioration early enough to adjust funding or investment strategy again if needed, rather than relying on a single, now potentially outdated assessment.",
          note: "This connects directly to the ongoing-monitoring theme developed throughout this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why solving this issue required drawing on multiple SP4 topic areas simultaneously, rather than a single technique in isolation.",
          answer:
            "Real strategic problems rarely fall neatly into a single topic area; resolving this specific issue required drawing on sponsor covenant assessment, funding and investment strategy, and risk management material together, reflecting how complex pension issues in practice typically require integrated judgement across several technical areas at once.",
          note: "This connects directly to the integrated nature of complex problem-solving as tested throughout the later parts of this course.",
        },
      ],
    },
  ],
});

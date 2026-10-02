// SP1 Health and Care Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP1", {
  modules: [
      {
          "id": "m01",
          "title": "Introduction to health and care",
          "description": "ActEd's Chapter 0: what health and care insurance covers, the needs it meets, how it differs from life insurance, the main product families (IP, CI, LTC, PMI and group covers), and the structure and weightings of SP1.",
          "cards": [
              {
                  "q": "What are SP1's five syllabus topics and weightings?",
                  "a": "Health and care products and business environment (15%); product design (25%); risks and risk management (30%); models and valuation (15%); monitoring experience and setting assumptions (15%).",
                  "explain": "Risk management is the largest block — expect risk-list and reinsurance/underwriting questions."
              },
              {
                  "q": "List the main health and care products in the syllabus.",
                  "a": "Critical illness; income protection; long-term care; health cash plans; major medical expenses; private medical insurance; in group and individual forms.",
                  "explain": "Syllabus 1.1 — the product chapters (1–5) follow this list."
              },
              {
                  "q": "What broad financial needs does health and care insurance meet?",
                  "a": "Replacing income lost through illness or disability; paying for medical treatment; paying for long-term care; providing a lump sum on serious illness.",
                  "explain": "Each product maps to one of these needs."
              },
              {
                  "q": "How does health insurance risk differ from life insurance risk?",
                  "a": "Claims depend on morbidity (sickness), which is harder to define and measure than death, can recur, has variable duration and amount, and is influenced by claimant behaviour and medical practice.",
                  "explain": "Definitional and behavioural risks are the distinctive features of health business."
              },
              {
                  "q": "What is morbidity?",
                  "a": "The incidence and duration of sickness or disability in a population.",
                  "explain": "Measured through claim inception rates and claim termination (recovery) rates."
              },
              {
                  "q": "What is the difference between indemnity and fixed-benefit products?",
                  "a": "Indemnity products reimburse actual costs incurred (e.g. PMI); fixed-benefit products pay a pre-agreed amount on a defined event (e.g. CI lump sum, cash plan benefits).",
                  "explain": "Indemnity products carry claims-inflation and cost-control risk."
              },
              {
                  "q": "Why are short-term and long-term health products managed differently?",
                  "a": "Short-term products (e.g. PMI, annually renewable) can be repriced each year, so pricing and reserving focus on claim costs and inflation; long-term products (IP, CI, LTC) involve long guarantees and reserves.",
                  "explain": "Long-term health business resembles life business; short-term resembles general insurance."
              },
              {
                  "q": "Who are the main stakeholders in health and care insurance?",
                  "a": "Policyholders, employers (group schemes), insurers and their shareholders, distributors, healthcare providers, reinsurers, regulators and the State.",
                  "explain": "Healthcare providers are a stakeholder unique to health business."
              },
              {
                  "q": "What is the role of the State in health and care?",
                  "a": "It may provide healthcare directly, fund it through social insurance, regulate private provision, and determine the gap private insurance fills.",
                  "explain": "Chapter 10 covers State provision."
              },
              {
                  "q": "Why is claims management particularly important in health insurance?",
                  "a": "Claim costs depend on how claims are assessed, how long they last, and treatment costs, all of which can be influenced by active management.",
                  "explain": "Rehabilitation for IP and provider networks for PMI are examples."
              },
              {
                  "q": "What is anti-selection in health insurance?",
                  "a": "People who expect to claim are more likely to buy cover or buy more of it.",
                  "explain": "Underwriting and product design counter it."
              },
              {
                  "q": "What is the actuarial control cycle in SP1?",
                  "a": "Specify the problem, develop solutions (design, pricing, reserving), monitor experience, feed back, within the environment.",
                  "explain": "Chapter 29 covers monitoring and feedback."
              },
              {
                  "q": "Why is health insurance sensitive to medical advances?",
                  "a": "Earlier diagnosis increases CI claims; new treatments raise PMI costs; improved survival lengthens LTC claims.",
                  "explain": "Trend risk is significant."
              },
              {
                  "q": "What are the higher-order skills tested in SP1?",
                  "a": "Analysing unfamiliar product scenarios, assessing relevant factors, evaluating results and proposing solutions.",
                  "explain": "Apply knowledge to the scenario."
              },
              {
                  "q": "How does SP1 link to SA1?",
                  "a": "SP1 covers principles; SA1 applies them to complex, practical situations with more detailed environment knowledge.",
                  "explain": "Similar to other SP/SA pairs."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Income protection insurance",
          "description": "Individual income protection: the benefit replacing lost earnings during incapacity, definitions of incapacity, the deferred period, benefit limits, escalation, proportionate and rehabilitation benefits, linked claims, and the risks for the insurer and the insured.",
          "cards": [
              {
                  "q": "What is income protection (IP) insurance?",
                  "a": "Insurance paying a regular income while the insured is unable to work due to sickness or injury, after a deferred period, until recovery, death, retirement age or the end of the benefit period.",
                  "explain": "Also called permanent health insurance in the UK."
              },
              {
                  "q": "What is the deferred period?",
                  "a": "The period of continuous incapacity that must pass before benefit starts (e.g. 4, 13, 26 or 52 weeks).",
                  "explain": "Longer deferred periods mean lower premiums and fewer short claims."
              },
              {
                  "q": "Why is IP benefit usually limited to a proportion of earnings?",
                  "a": "To keep an incentive to return to work and avoid moral hazard; typically 50–70% of pre-incapacity earnings less State and other benefits.",
                  "explain": "Over-insurance increases claim rates and durations."
              },
              {
                  "q": "Give three definitions of incapacity used in IP.",
                  "a": "Own occupation (unable to do own job); suited occupation (unable to do any job suited by education, training, experience); any occupation (unable to do any work); or activities of daily work.",
                  "explain": "Own occupation is most generous and expensive."
              },
              {
                  "q": "What is a proportionate benefit?",
                  "a": "Reduced benefit paid when the claimant returns to work at lower earnings due to their condition.",
                  "explain": "Encourages partial return to work."
              },
              {
                  "q": "What is a rehabilitation benefit?",
                  "a": "Continued partial benefit during a phased return to work.",
                  "explain": "Reduces claim durations."
              },
              {
                  "q": "What is a linked claim?",
                  "a": "A new claim for the same (or related) condition within a set period after a previous claim ends, treated as a continuation without a new deferred period.",
                  "explain": "Protects claimants with relapses; costs the insurer."
              },
              {
                  "q": "What is benefit escalation?",
                  "a": "Increases in benefit during a claim (e.g. in line with inflation or a fixed rate).",
                  "explain": "Protects real value; increases cost."
              },
              {
                  "q": "What is the insurer's key risk in IP?",
                  "a": "Morbidity risk: claim inception and especially claim duration (termination rates) being worse than assumed.",
                  "explain": "Long claims are very costly."
              },
              {
                  "q": "What is the risk to the insured?",
                  "a": "Definitional risk (claim declined because incapacity doesn't meet the definition), benefit being inadequate, premium increases on reviewable policies.",
                  "explain": "Clear definitions reduce disputes."
              },
              {
                  "q": "How can economic conditions affect IP claims?",
                  "a": "In recessions, claim rates tend to rise and recoveries slow, as work is less available and job insecurity affects health and behaviour.",
                  "explain": "An important correlation for risk management."
              },
              {
                  "q": "Why are IP premiums rated by occupation class?",
                  "a": "Claim rates vary greatly with occupation — manual workers claim more than office workers.",
                  "explain": "Occupation class is a key rating factor."
              },
              {
                  "q": "What is a waiver of premium on IP?",
                  "a": "Premiums stop while a claim is being paid.",
                  "explain": "Standard feature."
              },
              {
                  "q": "What is a limited payment term IP policy?",
                  "a": "A policy paying benefit for a maximum period (e.g. 2 years) rather than to retirement age.",
                  "explain": "Cheaper, lower long-term risk."
              },
              {
                  "q": "How is IP premium typically structured?",
                  "a": "Level guaranteed, reviewable, or age-costed (increasing with age).",
                  "explain": "Reviewable premiums share trend risk."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Critical illness insurance",
          "description": "Critical illness insurance: lump sums on diagnosis of specified conditions, standalone and accelerated forms, condition definitions and survival periods, severity-based designs, add-on covers such as TPD and children's cover, and the risks arising from definitions and medical advances.",
          "cards": [
              {
                  "q": "What is critical illness (CI) insurance?",
                  "a": "Insurance paying a lump sum on diagnosis of a specified serious illness (e.g. cancer, heart attack, stroke) meeting defined criteria.",
                  "explain": "Pays regardless of actual costs or loss of income."
              },
              {
                  "q": "What is the difference between accelerated and standalone CI?",
                  "a": "Accelerated CI pays the death benefit early on CI diagnosis (so pays once); standalone CI pays a separate benefit on CI with no reduction of any life cover.",
                  "explain": "Standalone is more expensive."
              },
              {
                  "q": "What is a survival period?",
                  "a": "A requirement that the claimant survives a period (e.g. 14 days) after diagnosis before benefit is paid.",
                  "explain": "Distinguishes CI from death cover in standalone products."
              },
              {
                  "q": "Why are condition definitions important?",
                  "a": "Claims depend on precise medical definitions; ambiguity leads to disputes and inconsistent claims costs.",
                  "explain": "Standardised industry definitions help comparability."
              },
              {
                  "q": "What is definitional risk for the insurer?",
                  "a": "The risk that medical practice or legal interpretation widens what qualifies as a claim beyond what was priced.",
                  "explain": "E.g. more sensitive heart attack tests."
              },
              {
                  "q": "How can medical advances increase CI claims?",
                  "a": "Earlier and more sensitive diagnosis (e.g. troponin tests, screening) identifies conditions that would previously not have qualified.",
                  "explain": "Trend risk not captured in past data."
              },
              {
                  "q": "What is severity-based CI?",
                  "a": "A design paying different proportions of the sum assured depending on the severity of the condition.",
                  "explain": "Allows cover for less severe conditions with lower payouts."
              },
              {
                  "q": "What is total permanent disability (TPD) cover?",
                  "a": "Pays a lump sum if the insured is permanently unable to work (definition varies), often added to CI.",
                  "explain": "Definition strictness drives cost."
              },
              {
                  "q": "What is children's cover in CI?",
                  "a": "Benefit for specified conditions affecting the policyholder's children.",
                  "explain": "Added value feature."
              },
              {
                  "q": "What premium structures are used for CI?",
                  "a": "Guaranteed or reviewable level premiums.",
                  "explain": "Reviewable premiums mitigate trend risk."
              },
              {
                  "q": "What is the main risk to the insured with CI?",
                  "a": "Their condition may not meet the definition; premiums may rise on reviewable policies.",
                  "explain": "Communication and clear definitions are key."
              },
              {
                  "q": "Which conditions dominate CI claims?",
                  "a": "Cancer, followed by heart attack and stroke.",
                  "explain": "Cancer incidence and diagnosis trends matter most."
              },
              {
                  "q": "How does smoking affect CI pricing?",
                  "a": "Smokers have much higher incidence, so premiums differ by smoker status.",
                  "explain": "Key rating factor."
              },
              {
                  "q": "Why is CI subject to non-disclosure risk?",
                  "a": "Applicants may conceal symptoms or history; claims investigation may find non-disclosure.",
                  "explain": "Leads to disputes and reputational issues."
              },
              {
                  "q": "What is a buy-back option in accelerated CI?",
                  "a": "Right to reinstate life cover after a CI claim, without evidence.",
                  "explain": "An option with anti-selection cost."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Long-term care insurance",
          "description": "Long-term care insurance: pre-funded and immediate-needs designs, benefit triggers based on activities of daily living and cognitive impairment, benefit types, and the substantial uncertainties of long durations, care cost inflation and State policy.",
          "cards": [
              {
                  "q": "What is long-term care (LTC) insurance?",
                  "a": "Insurance meeting the cost of care for people unable to look after themselves due to chronic illness, disability or frailty.",
                  "explain": "Care may be at home or in a care home."
              },
              {
                  "q": "What is a pre-funded LTC policy?",
                  "a": "Bought in advance of need (regular or single premium) to provide benefits if care is later needed.",
                  "explain": "Few markets have succeeded with pre-funded LTC."
              },
              {
                  "q": "What is an immediate needs annuity?",
                  "a": "An annuity bought at the point of need, paying care costs for life, underwritten based on the individual's health.",
                  "explain": "Also called point-of-need or disability-linked annuity."
              },
              {
                  "q": "What are activities of daily living (ADLs)?",
                  "a": "Basic tasks such as washing, dressing, feeding, toileting, mobility and continence, used to define benefit triggers.",
                  "explain": "E.g. unable to perform 2 or 3 of 6 ADLs."
              },
              {
                  "q": "Why is cognitive impairment included as a trigger?",
                  "a": "Conditions like dementia may not prevent ADLs physically but require supervision and care.",
                  "explain": "Dementia is a major driver of LTC costs."
              },
              {
                  "q": "What benefit types can LTC provide?",
                  "a": "Reimbursement of actual care costs, a fixed cash benefit, or care services provided directly.",
                  "explain": "Cash benefits simplify claims."
              },
              {
                  "q": "What are the main risks for LTC insurers?",
                  "a": "Long and uncertain claim durations, care cost inflation, changing incidence and mortality, changes in State provision, and lapse risk.",
                  "explain": "Very long-term risks with limited data."
              },
              {
                  "q": "Why is data scarce for LTC?",
                  "a": "Few products have been sold over long periods; care needs and definitions differ between countries.",
                  "explain": "Assumptions rely on population data."
              },
              {
                  "q": "How can State provision affect LTC demand?",
                  "a": "Means-tested State support reduces the benefit of insurance for those with fewer assets; policy changes alter demand.",
                  "explain": "Political risk."
              },
              {
                  "q": "What is the effect of inflation on LTC?",
                  "a": "Care costs tend to rise faster than general inflation, eroding fixed benefits.",
                  "explain": "Indexed benefits are costly."
              },
              {
                  "q": "Why is LTC hard to sell?",
                  "a": "Consumers underestimate need, products are expensive, and State provision is uncertain.",
                  "explain": "Behavioural biases limit demand."
              },
              {
                  "q": "What is a deferred period in LTC?",
                  "a": "A period after the trigger before benefit starts.",
                  "explain": "Reduces cost."
              },
              {
                  "q": "How do disability-linked annuities work?",
                  "a": "Annuities paying higher income if the annuitant becomes disabled or needs care.",
                  "explain": "Combine longevity and care risks."
              },
              {
                  "q": "Why do LTC insurers face longevity risk?",
                  "a": "Claimants may live longer than expected in care.",
                  "explain": "Mortality improvements increase costs."
              },
              {
                  "q": "What is the risk to the insured with LTC?",
                  "a": "Benefits may not keep up with costs; lapses before need lose value; premium increases.",
                  "explain": "Indexed benefits help."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Private medical insurance & related products",
          "description": "Private medical insurance, health cash plans, major medical expenses and dental plans: indemnity for medical costs, underwriting approaches (full, moratorium), excesses and limits, claims inflation and cost control, and the risks for insurer and insured.",
          "cards": [
              {
                  "q": "What is private medical insurance (PMI)?",
                  "a": "Short-term (usually annually renewable) insurance covering the cost of private medical treatment for acute conditions.",
                  "explain": "Indemnity product; exposed to medical inflation."
              },
              {
                  "q": "What is moratorium underwriting?",
                  "a": "No medical questions at application; pre-existing conditions within a set look-back period are excluded until the insured has a period (e.g. 2 years) free of symptoms/treatment.",
                  "explain": "Quick sale, claims assessed later."
              },
              {
                  "q": "What is full medical underwriting?",
                  "a": "Medical history is disclosed at application and specific exclusions are applied.",
                  "explain": "More certainty for both parties."
              },
              {
                  "q": "What is a health cash plan?",
                  "a": "A product paying fixed cash amounts for everyday health costs (e.g. dental, optical, physiotherapy), up to limits.",
                  "explain": "Low premiums, high claim frequency."
              },
              {
                  "q": "What is major medical expenses insurance?",
                  "a": "Cover for large medical costs above a high deductible, common where State provision is limited.",
                  "explain": "Protects against catastrophic costs."
              },
              {
                  "q": "What cost-sharing features are used in PMI?",
                  "a": "Excesses, co-payments, outpatient limits, hospital lists, six-week options (use State if wait is short).",
                  "explain": "Reduce premiums and claims."
              },
              {
                  "q": "What is medical inflation?",
                  "a": "The rate at which medical claim costs rise, typically above general price inflation due to new technology, drugs and increased utilisation.",
                  "explain": "Key pricing assumption."
              },
              {
                  "q": "What is claims utilisation?",
                  "a": "The frequency with which insured people use medical services.",
                  "explain": "Influenced by availability and behaviour."
              },
              {
                  "q": "How can PMI insurers control costs?",
                  "a": "Provider networks, negotiated prices, pre-authorisation, case management, guided consultant choice.",
                  "explain": "Claims management is a key lever."
              },
              {
                  "q": "What is a no-claims discount in PMI?",
                  "a": "A reduction in premium for not claiming.",
                  "explain": "Discourages small claims."
              },
              {
                  "q": "Why is PMI annually renewable?",
                  "a": "Allows premiums to reflect medical inflation and experience each year.",
                  "explain": "Lower long-term risk than IP."
              },
              {
                  "q": "What are the risks to PMI insurers?",
                  "a": "Claims inflation, utilisation increases, anti-selection, provider pricing, reliance on State provision.",
                  "explain": "Short-term but volatile."
              },
              {
                  "q": "What is a dental plan?",
                  "a": "Insurance or capitation arrangement covering dental treatment.",
                  "explain": "Often high frequency, low severity."
              },
              {
                  "q": "Why might PMI exclude chronic conditions?",
                  "a": "They are long-term and costly; PMI covers acute conditions.",
                  "explain": "Chronic care usually falls to the State."
              },
              {
                  "q": "What are the risks to the insured with PMI?",
                  "a": "Exclusions, premium increases with age and inflation, limits on cover.",
                  "explain": "Communication is important."
              }
          ]
      },
      {
          "id": "m06",
          "title": "H&C insurance products – group products",
          "description": "Group health and care covers — group income protection, group critical illness, group PMI and group life — how they differ from individual covers: underwriting (free cover limits), experience rating, rate guarantees, and employer and employee perspectives.",
          "cards": [
              {
                  "q": "What is group income protection?",
                  "a": "IP arranged by an employer for employees, usually paying a proportion of salary after a deferred period to retirement or a fixed period.",
                  "explain": "Often includes rehabilitation services."
              },
              {
                  "q": "How is underwriting done for group products?",
                  "a": "Usually minimal: a free cover limit below which cover is granted without evidence, with individual underwriting above it.",
                  "explain": "Relies on employment as evidence of health (actively at work)."
              },
              {
                  "q": "What is a free cover limit?",
                  "a": "The maximum benefit level per member granted without medical evidence.",
                  "explain": "Depends on scheme size and experience."
              },
              {
                  "q": "What is experience rating?",
                  "a": "Setting a group's premium partly on its own claims experience, weighted by credibility.",
                  "explain": "Large groups get more weight on own experience."
              },
              {
                  "q": "What is a rate guarantee?",
                  "a": "A commitment to keep premium rates unchanged for a period (e.g. 2–3 years).",
                  "explain": "Insurer bears experience risk during the guarantee."
              },
              {
                  "q": "What is a unit rate?",
                  "a": "Premium expressed per unit of benefit or salary roll.",
                  "explain": "Simplifies administration."
              },
              {
                  "q": "Why do employers provide group health benefits?",
                  "a": "Attract and retain staff, reduce absence, meet duty of care, tax efficiency.",
                  "explain": "Employer objectives drive design."
              },
              {
                  "q": "What is group PMI?",
                  "a": "PMI provided by an employer, often with medical history disregarded.",
                  "explain": "Higher claims than individual PMI due to no underwriting."
              },
              {
                  "q": "What is medical history disregarded?",
                  "a": "Group PMI terms covering pre-existing conditions.",
                  "explain": "Increases cost."
              },
              {
                  "q": "What is group critical illness?",
                  "a": "CI cover for employees provided by an employer.",
                  "explain": "Less common than group IP."
              },
              {
                  "q": "How does anti-selection differ for group business?",
                  "a": "Lower, as cover is compulsory or employer-driven; but voluntary schemes have more anti-selection.",
                  "explain": "Participation rates matter."
              },
              {
                  "q": "What is profit sharing in group business?",
                  "a": "Returning part of surplus to the employer if experience is favourable.",
                  "explain": "Encourages good claims management."
              },
              {
                  "q": "How does group business differ in pricing?",
                  "a": "Uses group data, experience rating and census data rather than individual underwriting.",
                  "explain": "Chapter 18 detail."
              },
              {
                  "q": "What are the main risks in group business?",
                  "a": "Concentration (many lives in one location), claim experience volatility, rate guarantees, employer's industry risk.",
                  "explain": "Catastrophe cover may be needed."
              },
              {
                  "q": "What is an administrative services only (ASO) arrangement?",
                  "a": "The employer self-funds claims, with the insurer providing administration.",
                  "explain": "Common for large employers' healthcare trusts."
              }
          ]
      },
      {
          "id": "m07",
          "title": "Product design and stakeholder interests (1)",
          "description": "The principles of health and care product design and the interests of stakeholders — customers, insurer, shareholders, distributors, healthcare providers, employers, regulators and the State — and how each shapes the design.",
          "cards": [
              {
                  "q": "List the main stakeholders in product design.",
                  "a": "Customers; insurer and shareholders; distributors; healthcare providers; employers; reinsurers; regulators; the State.",
                  "explain": "Syllabus 2.1.1."
              },
              {
                  "q": "What do customers want from a health product?",
                  "a": "Adequate cover, affordability, clear terms, flexibility, good service and fair claims handling.",
                  "explain": "Customers vary in needs and risk tolerance."
              },
              {
                  "q": "What does the insurer want?",
                  "a": "Profitability, manageable risk, capital efficiency, marketability, competitiveness and administrative simplicity.",
                  "explain": "Must balance with customer needs."
              },
              {
                  "q": "What do distributors want?",
                  "a": "Products that are easy to sell, competitive, with attractive remuneration and low complaint risk.",
                  "explain": "Distributor needs affect design."
              },
              {
                  "q": "What do healthcare providers want?",
                  "a": "Fair reimbursement, predictable volumes, minimal administrative burden.",
                  "explain": "Relevant for PMI."
              },
              {
                  "q": "What do employers want from group health products?",
                  "a": "Cost control, employee satisfaction, reduced absence, simple administration.",
                  "explain": "Group product design."
              },
              {
                  "q": "What do regulators want?",
                  "a": "Fair treatment of customers, clear disclosure, solvency, no unfair discrimination.",
                  "explain": "Constraint on design."
              },
              {
                  "q": "What is the State's interest?",
                  "a": "Private cover reducing pressure on State services; ensuring fair access.",
                  "explain": "State provision affects design."
              },
              {
                  "q": "List factors in product design.",
                  "a": "Customer needs; competition; distribution; profitability and capital; risk; regulation and tax; underwriting and claims management; administration; reinsurance availability; data availability.",
                  "explain": "Checklist for design questions."
              },
              {
                  "q": "How can product design manage risk?",
                  "a": "Deferred periods, benefit limits, exclusions, reviewable premiums, definitions.",
                  "explain": "First line of risk management."
              },
              {
                  "q": "Why does data availability affect design?",
                  "a": "Products with limited data are hard to price; simpler or reviewable designs mitigate.",
                  "explain": "E.g. new CI conditions."
              },
              {
                  "q": "How do tax rules affect design?",
                  "a": "Tax treatment of premiums/benefits can make products attractive or not.",
                  "explain": "E.g. individual IP benefits tax-free in UK."
              },
              {
                  "q": "What is the role of reinsurers in design?",
                  "a": "They provide data, pricing support and capacity for new products.",
                  "explain": "Reinsurer input is common for CI."
              },
              {
                  "q": "How can competition affect design?",
                  "a": "Competitors' features pressure insurers to match or differentiate.",
                  "explain": "Features race can increase risk."
              },
              {
                  "q": "Why consider administration in design?",
                  "a": "Complex products increase costs and error risk.",
                  "explain": "Simplicity has value."
              }
          ]
      },
      {
          "id": "m08",
          "title": "Product design and stakeholder interests (2)",
          "description": "Applying design principles to create a suitable product in a given situation and comparing the relative merits of alternative designs — premium structures, benefit definitions, options, and balancing customer value against insurer risk.",
          "cards": [
              {
                  "q": "How would you approach designing a new health product?",
                  "a": "Identify target market and needs, consider stakeholders, choose benefits and definitions, premium structure, underwriting, distribution, pricing and risk management.",
                  "explain": "Syllabus 2.1.2."
              },
              {
                  "q": "Compare guaranteed and reviewable premiums.",
                  "a": "Guaranteed: certainty for customers, insurer bears trend risk, higher price. Reviewable: lower initial price, risk shared, less certainty for customers.",
                  "explain": "Syllabus 2.1.3 relative merits."
              },
              {
                  "q": "Compare own-occupation and any-occupation IP definitions.",
                  "a": "Own-occupation: more valuable to customers, higher claims and price. Any-occupation: cheaper, but more claims declined and complaints.",
                  "explain": "Balance value and cost."
              },
              {
                  "q": "Compare accelerated and standalone CI.",
                  "a": "Accelerated is cheaper and simpler; standalone provides two separate benefits but costs more.",
                  "explain": "Customer needs drive choice."
              },
              {
                  "q": "What design features encourage return to work?",
                  "a": "Benefit limits, proportionate and rehabilitation benefits, case management.",
                  "explain": "Reduce claim durations."
              },
              {
                  "q": "How can options add value?",
                  "a": "Guaranteed insurability or indexation options allow cover to grow with needs.",
                  "explain": "Priced for anti-selection."
              },
              {
                  "q": "How can design control PMI costs?",
                  "a": "Excesses, hospital lists, outpatient limits, guided care.",
                  "explain": "Balance with customer value."
              },
              {
                  "q": "How can LTC design reduce insurer risk?",
                  "a": "Benefit caps, limited benefit periods, cash benefits, reviewable premiums.",
                  "explain": "Long-term uncertainty."
              },
              {
                  "q": "What is the trade-off in deferred period choice?",
                  "a": "Longer deferred period lowers premium but leaves customers uncovered for longer.",
                  "explain": "Match to employer sick pay or savings."
              },
              {
                  "q": "How should design reflect distribution channel?",
                  "a": "Direct: simple products; advised: complex products.",
                  "explain": "Channel matters."
              },
              {
                  "q": "Why consider underwriting in design?",
                  "a": "Design influences anti-selection and the level of underwriting needed.",
                  "explain": "E.g. guaranteed acceptance products."
              },
              {
                  "q": "How can design reflect State provision?",
                  "a": "Integrate with State benefits (e.g. offsets), avoid duplication.",
                  "explain": "Chapter 10."
              },
              {
                  "q": "How can design reduce definitional risk?",
                  "a": "Clear, standardised definitions and severity-based benefits.",
                  "explain": "Reduces disputes."
              },
              {
                  "q": "What is a hybrid health product?",
                  "a": "Combining covers (e.g. IP and CI), often with shared benefits.",
                  "explain": "May improve value and persistency."
              },
              {
                  "q": "How can product design support persistency?",
                  "a": "Loyalty features, reviewable pricing fairness, flexible options.",
                  "explain": "Improves profitability."
              }
          ]
      },
      {
          "id": "m09",
          "title": "Distribution channels",
          "description": "How health and care products reach customers — brokers and independent advisers, tied agents, direct sales, bancassurance, affinity groups, employee benefit consultants and aggregators — with their costs, remuneration and effects on risk and persistency.",
          "cards": [
              {
                  "q": "List the main distribution channels for health and care insurance.",
                  "a": "Independent intermediaries (brokers, IFAs); tied agents; direct (phone, internet); bancassurance; affinity groups; employee benefit consultants; aggregators/comparison sites; worksite marketing.",
                  "explain": "Syllabus 1.2."
              },
              {
                  "q": "What are the advantages of intermediaries?",
                  "a": "Advice for complex products, access to customers, market knowledge.",
                  "explain": "Higher distribution costs."
              },
              {
                  "q": "What are the advantages of direct sales?",
                  "a": "Lower cost, control of customer relationship.",
                  "explain": "Suits simple products; anti-selection risk may be higher."
              },
              {
                  "q": "What is affinity distribution?",
                  "a": "Selling through an organisation with a customer base (e.g. a trade union or professional body).",
                  "explain": "Low cost; group-like characteristics."
              },
              {
                  "q": "What is the role of employee benefit consultants?",
                  "a": "Advising employers on group health benefits, running tenders, negotiating terms.",
                  "explain": "Key channel for group business."
              },
              {
                  "q": "How do aggregators affect the market?",
                  "a": "Increase price competition and switching; favour simple, price-driven products.",
                  "explain": "Lower persistency."
              },
              {
                  "q": "How does commission structure affect risk?",
                  "a": "High initial commission can encourage churning and mis-selling.",
                  "explain": "Clawback arrangements mitigate."
              },
              {
                  "q": "How can channels affect claims experience?",
                  "a": "Advised channels may attract better risks and better disclosure; direct channels may have more anti-selection.",
                  "explain": "Pricing may vary by channel."
              },
              {
                  "q": "What regulatory issues affect distribution?",
                  "a": "Suitability of advice, disclosure of commission, fair treatment.",
                  "explain": "Conduct risk."
              },
              {
                  "q": "How can insurers manage distributor risk?",
                  "a": "Oversight, training, monitoring persistency and complaints by distributor.",
                  "explain": "Distributor risk is in syllabus 3.1."
              },
              {
                  "q": "What is bancassurance's suitability for health products?",
                  "a": "Good access to customers, but products must be simple; bank staff may lack health insurance expertise.",
                  "explain": "Simple CI or cash plans."
              },
              {
                  "q": "Why might an insurer use multiple channels?",
                  "a": "Reach different segments and diversify distribution risk.",
                  "explain": "Channel conflict must be managed."
              },
              {
                  "q": "How can distribution affect expenses?",
                  "a": "Commission and marketing costs vary widely by channel.",
                  "explain": "Pricing reflects channel costs."
              },
              {
                  "q": "What is worksite marketing?",
                  "a": "Selling voluntary individual products to employees at the workplace.",
                  "explain": "Lower cost, some group features."
              },
              {
                  "q": "Why is persistency channel-dependent?",
                  "a": "Customers sold via advice may understand the product better and lapse less.",
                  "explain": "Monitor lapses by channel."
              }
          ]
      },
      {
          "id": "m10",
          "title": "The general business environment",
          "description": "The operating environment for health and care insurers: regulatory and taxation regimes, professional guidance, economic and political influences, and their effects on products, pricing and management.",
          "cards": [
              {
                  "q": "List elements of the operating environment in syllabus 1.2.",
                  "a": "Distribution channels; regulatory and taxation regimes; professional guidance; economic and political influences.",
                  "explain": "Chapter 9 covers the non-distribution elements."
              },
              {
                  "q": "How does prudential regulation affect health insurers?",
                  "a": "Capital and reserving requirements (e.g. Solvency II), governance and risk management.",
                  "explain": "Affects cost of capital and pricing."
              },
              {
                  "q": "How does conduct regulation affect health insurers?",
                  "a": "Fair treatment, disclosure, claims handling standards, product governance.",
                  "explain": "Complaints and redress risk."
              },
              {
                  "q": "How can taxation affect health products?",
                  "a": "Tax relief or taxation of premiums and benefits changes attractiveness; e.g. insurance premium tax on PMI, taxable group IP benefits.",
                  "explain": "Tax changes alter demand."
              },
              {
                  "q": "How do economic conditions affect health insurance?",
                  "a": "Unemployment affects IP claims and group scheme sizes; inflation affects medical costs; interest rates affect reserves.",
                  "explain": "Correlation with the business cycle."
              },
              {
                  "q": "How can politics affect health insurance?",
                  "a": "Changes in State healthcare funding or policy alter demand and claims.",
                  "explain": "Political risk."
              },
              {
                  "q": "What professional guidance applies?",
                  "a": "Actuarial standards (data, models, assumptions, reporting), code of conduct.",
                  "explain": "Ensures quality of advice."
              },
              {
                  "q": "How can anti-discrimination law affect pricing?",
                  "a": "Restrictions on rating factors such as gender or genetic information.",
                  "explain": "May increase anti-selection."
              },
              {
                  "q": "How does regulation affect product design?",
                  "a": "Rules on definitions, cooling-off, disclosure and claims handling.",
                  "explain": "Constrains design."
              },
              {
                  "q": "How can the legal environment affect claims?",
                  "a": "Court decisions on definitions or non-disclosure can widen claims.",
                  "explain": "Legal risk."
              },
              {
                  "q": "What is insurance premium tax?",
                  "a": "A tax on general insurance premiums including PMI in some markets.",
                  "explain": "Increases customer cost."
              },
              {
                  "q": "How can medical practice changes affect insurers?",
                  "a": "New treatments and diagnostic practices change claim frequency and cost.",
                  "explain": "Monitor trends."
              },
              {
                  "q": "How can demographic changes affect health insurance?",
                  "a": "Ageing populations raise demand and claims for LTC and PMI.",
                  "explain": "Long-term trends."
              },
              {
                  "q": "How can competition affect the environment?",
                  "a": "Price competition squeezes margins; innovation changes customer expectations.",
                  "explain": "Market cycle."
              },
              {
                  "q": "Why monitor the environment continuously?",
                  "a": "Changes can alter profitability and risk.",
                  "explain": "Part of the control cycle."
              }
          ]
      },
      {
          "id": "m11",
          "title": "State healthcare provision",
          "description": "The role of the State in health and care: objectives of State provision, methods (direct provision, social insurance, regulated private insurance, subsidies), funding approaches, and how State provision complements or substitutes for private insurance.",
          "cards": [
              {
                  "q": "What are the objectives of State healthcare provision?",
                  "a": "Universal access, equity, protecting against catastrophic costs, public health, cost control, and quality of care.",
                  "explain": "Syllabus 1.3."
              },
              {
                  "q": "What methods can the State use to provide healthcare?",
                  "a": "Direct provision (State-run services); social health insurance (mandatory contributions to funds); regulated private insurance with subsidies; means-tested assistance.",
                  "explain": "Countries mix methods."
              },
              {
                  "q": "How can State healthcare be funded?",
                  "a": "General taxation; social insurance contributions; out-of-pocket charges; private insurance mandates.",
                  "explain": "Funding approach affects private market."
              },
              {
                  "q": "How does a tax-funded national health service affect private insurance?",
                  "a": "Private insurance is supplementary (faster access, choice), so demand depends on waiting times and quality of State services.",
                  "explain": "E.g. UK PMI."
              },
              {
                  "q": "What is social health insurance?",
                  "a": "Compulsory contributions (often earnings-related) to health funds that pay for care.",
                  "explain": "E.g. Germany."
              },
              {
                  "q": "What is complementary private insurance?",
                  "a": "Covering costs not met by the State (e.g. co-payments).",
                  "explain": "E.g. France."
              },
              {
                  "q": "What is substitutive private insurance?",
                  "a": "Cover for people excluded or opting out of the State system.",
                  "explain": "Some countries allow high earners to opt out."
              },
              {
                  "q": "How does State provision affect LTC insurance?",
                  "a": "Means-tested State funding reduces demand for private LTC.",
                  "explain": "Policy uncertainty deters buyers."
              },
              {
                  "q": "What are problems with State provision?",
                  "a": "Rising costs, waiting lists, rationing, political pressures.",
                  "explain": "Create demand for private insurance."
              },
              {
                  "q": "How can the State encourage private health insurance?",
                  "a": "Tax relief, subsidies, mandates.",
                  "explain": "Affects market size."
              },
              {
                  "q": "What is rationing in State healthcare?",
                  "a": "Limiting access to treatments due to budget constraints.",
                  "explain": "Drives supplementary demand."
              },
              {
                  "q": "Why is PAYG common for State healthcare?",
                  "a": "Healthcare costs are current, and the State can tax each year.",
                  "explain": "Demographic pressure on future budgets."
              },
              {
                  "q": "How does State provision affect IP?",
                  "a": "State sickness benefits set a baseline; IP tops up income.",
                  "explain": "Benefit limits allow for State benefits."
              },
              {
                  "q": "How does an ageing population affect State systems?",
                  "a": "Higher demand for care and medical services.",
                  "explain": "Increases fiscal pressure."
              },
              {
                  "q": "How should insurers monitor State policy?",
                  "a": "Changes can alter demand, claims and product viability.",
                  "explain": "Political risk management."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Modelling",
          "description": "Health and care models: objectives and features, deterministic and stochastic approaches, formula and cash flow approaches, multi-state models (healthy–sick–dead), inception and disability annuity methods, sensitivity analysis and uses in decision-making.",
          "cards": [
              {
                  "q": "What are the objectives of a health insurance model?",
                  "a": "Pricing, reserving, capital, investment strategy, embedded value and risk assessment.",
                  "explain": "Syllabus 4.1 and 4.3."
              },
              {
                  "q": "What is a multi-state model?",
                  "a": "A model with states (e.g. healthy, sick, dead) and transition intensities between them.",
                  "explain": "Captures recovery and relapse for IP."
              },
              {
                  "q": "What are transition intensities?",
                  "a": "Instantaneous rates of moving between states, e.g. sickness inception, recovery, death.",
                  "explain": "Estimated from data."
              },
              {
                  "q": "What is the inception/disability annuity approach for IP?",
                  "a": "Expected cost = inception rate × value of a claim annuity (depending on termination rates), summed over ages/durations.",
                  "explain": "Common pricing approach."
              },
              {
                  "q": "What is the formula approach?",
                  "a": "Using commutation-style formulas or equations of value to calculate premiums or reserves.",
                  "explain": "Simple but inflexible."
              },
              {
                  "q": "What is the cash flow approach?",
                  "a": "Projecting cash flows year by year, allowing for all components and reserves.",
                  "explain": "Flexible and used for profit testing."
              },
              {
                  "q": "When is a stochastic model needed?",
                  "a": "For valuing options and guarantees, assessing capital and tail risk.",
                  "explain": "Deterministic misses asymmetric risk."
              },
              {
                  "q": "What is sensitivity analysis?",
                  "a": "Varying assumptions to see impact.",
                  "explain": "Identifies key assumptions."
              },
              {
                  "q": "How are models used in pricing?",
                  "a": "Project claims and expenses to determine premiums meeting profit criteria.",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "How are models used for investment strategy?",
                  "a": "Project liabilities and assets to choose matching strategies.",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "How are models used for solvency projection?",
                  "a": "Project capital under plans and stress scenarios.",
                  "explain": "ORSA."
              },
              {
                  "q": "How are models used for embedded value?",
                  "a": "Project future profits from in-force business.",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "What are basic features of a good model?",
                  "a": "Valid, well documented, reflects risks, clear output, testable, not too complex.",
                  "explain": "Standard list."
              },
              {
                  "q": "What are the limitations of multi-state models?",
                  "a": "Data requirements for transition rates, complexity, Markov assumption may not hold (duration dependence).",
                  "explain": "Semi-Markov models add duration."
              },
              {
                  "q": "Why are model points used?",
                  "a": "To reduce run time while representing the portfolio.",
                  "explain": "Group by product, age, deferred period, occupation."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Data",
          "description": "Data for health and care insurance: sources (own experience, industry studies, reinsurers, population and medical data), data quality and credibility, the data needed for pricing, reserving and experience analysis, and dealing with limited or unreliable data.",
          "cards": [
              {
                  "q": "List sources of data for health insurance pricing.",
                  "a": "Own experience; industry studies (e.g. CMI); reinsurers; population statistics; medical research; overseas data; consultants.",
                  "explain": "Syllabus 4.2 — data availability."
              },
              {
                  "q": "Why is data a particular problem in health insurance?",
                  "a": "Products are heterogeneous, definitions differ, claims vary by duration and severity, and experience is limited for new products.",
                  "explain": "Credibility is often low."
              },
              {
                  "q": "What data is needed for IP pricing?",
                  "a": "Claim inceptions and terminations by age, sex, occupation class, deferred period, benefit level and duration.",
                  "explain": "Duration-dependent data is essential."
              },
              {
                  "q": "What data is needed for CI pricing?",
                  "a": "Incidence rates by condition, age, sex, smoker status, with allowance for definitions.",
                  "explain": "Population cancer registries help."
              },
              {
                  "q": "What data is needed for PMI pricing?",
                  "a": "Claim frequency and average cost by treatment type, age, region and provider.",
                  "explain": "Plus medical inflation trends."
              },
              {
                  "q": "How should data from other sources be adjusted?",
                  "a": "For differences in definitions, underwriting, target market, distribution and time period.",
                  "explain": "Avoid applying unadjusted data."
              },
              {
                  "q": "What is credibility in data?",
                  "a": "The reliance that can be placed on own experience given its volume.",
                  "explain": "Blend own and industry data."
              },
              {
                  "q": "What checks should be done on data?",
                  "a": "Completeness, consistency, reasonableness, reconciliation to accounts.",
                  "explain": "Chapter 27 includes data checks."
              },
              {
                  "q": "How can limited data be handled?",
                  "a": "Use industry or reinsurer data, prudent margins, reviewable premiums, reinsurance.",
                  "explain": "Mitigate uncertainty."
              },
              {
                  "q": "Why do reinsurers have valuable data?",
                  "a": "They pool experience across many insurers.",
                  "explain": "Useful for new products."
              },
              {
                  "q": "What are data issues for LTC?",
                  "a": "Very limited experience; population disability data used with adjustments.",
                  "explain": "Large uncertainty."
              },
              {
                  "q": "What is heterogeneity in data?",
                  "a": "Differences in risk within groups (e.g. occupation), which can bias results if not allowed for.",
                  "explain": "Segment where possible."
              },
              {
                  "q": "Why is data grouping important?",
                  "a": "To obtain adequate volumes while keeping homogeneity.",
                  "explain": "Balance credibility and accuracy."
              },
              {
                  "q": "How can data be used in reserving?",
                  "a": "Claim triangles for IBNR, claims in payment data for DLR.",
                  "explain": "Chapter 22."
              },
              {
                  "q": "What data is needed for experience monitoring?",
                  "a": "Exposure, claims, terminations, expenses, lapses, investment.",
                  "explain": "Chapter 29."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Assumptions (1) – General considerations",
          "description": "General principles for setting health and care assumptions: purpose (pricing, reserving, embedded value), sources of information, consistency, prudence and margins, and why supervisory reserving assumptions may differ from pricing assumptions.",
          "cards": [
              {
                  "q": "What general principles apply to setting assumptions?",
                  "a": "Appropriate to purpose; based on relevant data; consistent with each other; allow for trends; include margins as required; documented.",
                  "explain": "Syllabus 5.1."
              },
              {
                  "q": "Why might reserving assumptions differ from pricing?",
                  "a": "Reserves require prudence or prescribed bases; pricing uses best estimates with profit margins; experience changes after pricing.",
                  "explain": "Syllabus 5.1.3."
              },
              {
                  "q": "What assumptions are used for embedded value?",
                  "a": "Best estimate demographic, expense and economic assumptions, with risk discount or market-consistent approach.",
                  "explain": "Syllabus 5.1.4."
              },
              {
                  "q": "What is prudence?",
                  "a": "Margins making assumptions more likely to produce adequate reserves or prices.",
                  "explain": "Level depends on purpose."
              },
              {
                  "q": "How does competition affect pricing assumptions?",
                  "a": "Pressure to reduce margins.",
                  "explain": "Insurer judgement."
              },
              {
                  "q": "Why allow for trends?",
                  "a": "Morbidity and costs change over time (e.g. medical inflation, diagnosis trends).",
                  "explain": "Future experience may differ from past."
              },
              {
                  "q": "How is consistency ensured?",
                  "a": "Economic assumptions linked; demographic assumptions consistent with underwriting and design.",
                  "explain": "Avoid contradictions."
              },
              {
                  "q": "What is the role of expert judgement?",
                  "a": "Necessary where data is limited or trends uncertain.",
                  "explain": "Documented and reviewed."
              },
              {
                  "q": "How should assumptions be documented?",
                  "a": "With rationale, data sources and sensitivities.",
                  "explain": "Professional standards."
              },
              {
                  "q": "Why is sensitivity testing important?",
                  "a": "Identifies which assumptions matter most.",
                  "explain": "Guides margins."
              },
              {
                  "q": "How often should assumptions be reviewed?",
                  "a": "Regularly, e.g. annually, and when experience deviates.",
                  "explain": "Control cycle."
              },
              {
                  "q": "What is a best-estimate assumption?",
                  "a": "Equally likely to be too high or too low.",
                  "explain": "Used for EV and some reserves."
              },
              {
                  "q": "How can reinsurers help assumption setting?",
                  "a": "Provide data and industry benchmarks.",
                  "explain": "Valuable for new products."
              },
              {
                  "q": "Why might different products need different assumptions?",
                  "a": "Different target markets, designs, underwriting.",
                  "explain": "Avoid one-size assumptions."
              },
              {
                  "q": "What is the effect of product design on assumptions?",
                  "a": "Deferred periods, definitions and underwriting affect claim rates.",
                  "explain": "Assumptions must reflect design."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Assumptions (2) – Demographic assumptions",
          "description": "Setting demographic assumptions for health and care business: claim inception and termination (recovery and death) rates, CI incidence, mortality, LTC transitions, lapse rates, and the rating factors and trends that affect them.",
          "cards": [
              {
                  "q": "What demographic assumptions are needed for IP?",
                  "a": "Claim inception rates, claim termination rates (recovery and death), mortality of healthy lives, lapse rates.",
                  "explain": "Duration since claim start is key for terminations."
              },
              {
                  "q": "What factors affect IP inception rates?",
                  "a": "Age, sex, occupation class, deferred period, benefit level (replacement ratio), smoker status, economic conditions, underwriting.",
                  "explain": "Rating factors."
              },
              {
                  "q": "What factors affect IP termination rates?",
                  "a": "Duration of claim, age at inception, cause of claim, deferred period, occupation, claims management, economic conditions.",
                  "explain": "Termination rates fall sharply with duration."
              },
              {
                  "q": "How are CI incidence rates derived?",
                  "a": "From population data (e.g. cancer registries, hospital data) adjusted for definitions, underwriting and insured population.",
                  "explain": "Adjust for smoker status."
              },
              {
                  "q": "What is the selection effect in health insurance?",
                  "a": "Recently underwritten lives have lower claim rates than average.",
                  "explain": "Select rates apply in early years."
              },
              {
                  "q": "What demographic assumptions are needed for LTC?",
                  "a": "Incidence of care needs, mortality in care and healthy states, recovery (rare), lapses.",
                  "explain": "Very uncertain."
              },
              {
                  "q": "What assumptions are needed for PMI?",
                  "a": "Claim frequency by age and treatment type, lapse rates.",
                  "explain": "Plus average cost (financial)."
              },
              {
                  "q": "How should lapse assumptions be set?",
                  "a": "By product, duration, channel and premium type, reflecting whether lapses create profit or loss.",
                  "explain": "Direction of prudence depends on product."
              },
              {
                  "q": "Why is mortality relevant in health products?",
                  "a": "It terminates cover and claims, and affects CI accelerated products.",
                  "explain": "Relevant to multi-state models."
              },
              {
                  "q": "What trends affect demographic assumptions?",
                  "a": "Medical advances, diagnosis improvements, lifestyle changes, economic conditions.",
                  "explain": "Trend assumptions are judgemental."
              },
              {
                  "q": "What is the effect of the deferred period on inception rates?",
                  "a": "Longer deferred periods reduce claim inception rates (short claims excluded).",
                  "explain": "Data by deferred period needed."
              },
              {
                  "q": "How does the replacement ratio affect claims?",
                  "a": "Higher replacement ratios increase inception and durations (moral hazard).",
                  "explain": "Benefit limits matter."
              },
              {
                  "q": "How can claims management affect termination rates?",
                  "a": "Rehabilitation and case management increase recovery rates.",
                  "explain": "Assumptions should reflect practice."
              },
              {
                  "q": "Why is smoker status a key factor?",
                  "a": "Smokers have higher morbidity and mortality.",
                  "explain": "Separate rates."
              },
              {
                  "q": "How might group demographic assumptions differ?",
                  "a": "Group experience depends on industry, employer policies and absence management.",
                  "explain": "Experience rating."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Assumptions (3) – Financial assumptions",
          "description": "Financial assumptions for health and care business: investment returns and discount rates, claims and benefit inflation, medical inflation for indemnity products, expenses and expense inflation, tax, and consistency between them.",
          "cards": [
              {
                  "q": "List the main financial assumptions.",
                  "a": "Investment return/discount rate; general inflation; medical/claims inflation; benefit escalation; expenses and expense inflation; tax; commission.",
                  "explain": "Syllabus 5.1."
              },
              {
                  "q": "How is the discount rate set for pricing?",
                  "a": "Based on expected returns on backing assets or risk-free rates plus margins.",
                  "explain": "Depends on pricing approach."
              },
              {
                  "q": "Why is medical inflation important for PMI?",
                  "a": "Claim costs rise faster than general inflation due to technology, drugs and utilisation.",
                  "explain": "Major pricing driver."
              },
              {
                  "q": "How is expense inflation assumed?",
                  "a": "Typically general price inflation or earnings inflation plus a margin.",
                  "explain": "Salaries drive expenses."
              },
              {
                  "q": "How does inflation affect IP benefits?",
                  "a": "If benefits escalate, claim costs rise with inflation.",
                  "explain": "Match with index-linked assets."
              },
              {
                  "q": "How does inflation affect LTC?",
                  "a": "Care costs rise with wages, often above general inflation.",
                  "explain": "Indexed benefits costly."
              },
              {
                  "q": "What expenses must be allowed for?",
                  "a": "Initial (acquisition, underwriting), renewal (administration), claims (assessment, management), investment and overheads.",
                  "explain": "Claims expenses are significant in health."
              },
              {
                  "q": "How is tax allowed for?",
                  "a": "Tax on insurer profits and investment income, policyholder taxation of benefits.",
                  "explain": "Affects product attractiveness."
              },
              {
                  "q": "Why must financial assumptions be consistent?",
                  "a": "Investment return, inflation and expenses relate to the same economic environment.",
                  "explain": "Avoid inconsistent real returns."
              },
              {
                  "q": "How is the risk discount rate set?",
                  "a": "Shareholder required return including risk margin.",
                  "explain": "Used in profit testing."
              },
              {
                  "q": "How can interest rates affect IP reserves?",
                  "a": "Lower rates increase reserves for claims in payment.",
                  "explain": "Long-term liabilities."
              },
              {
                  "q": "What is commission's role in pricing?",
                  "a": "A significant initial cost, varying by channel.",
                  "explain": "Include clawback assumptions."
              },
              {
                  "q": "How can currency affect financial assumptions?",
                  "a": "Foreign claims or assets introduce currency risk.",
                  "explain": "Relevant for international PMI."
              },
              {
                  "q": "What is the effect of claims inflation on reserves?",
                  "a": "Higher inflation increases outstanding claims reserves for indemnity products.",
                  "explain": "Reserve inflation assumptions."
              },
              {
                  "q": "How should expense assumptions reflect new business volumes?",
                  "a": "Fixed costs spread over expected volumes.",
                  "explain": "Volume risk."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Assumptions (4) – Other assumptions",
          "description": "Other assumptions for health and care business: new business volume and mix, commission and distribution costs, reinsurance costs and recoveries, claims management effects, profit requirements and cost of capital, and allowance for options and anti-selection.",
          "cards": [
              {
                  "q": "List 'other' assumptions needed in health pricing.",
                  "a": "New business volume and mix; commission; reinsurance terms; claims management effectiveness; profit requirement; capital requirements and cost of capital; option take-up.",
                  "explain": "Complements demographic and financial assumptions."
              },
              {
                  "q": "Why is new business mix an assumption?",
                  "a": "Profitability and expenses depend on the mix of products, ages, occupations and channels.",
                  "explain": "Deviations affect profit."
              },
              {
                  "q": "How is the profit requirement set?",
                  "a": "From shareholders' required return, reflecting risk and capital; expressed as NPV, IRR or margin.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "How is the cost of capital allowed for?",
                  "a": "By projecting required capital and charging the required return on it.",
                  "explain": "Capital-intensive products cost more."
              },
              {
                  "q": "How are reinsurance costs included?",
                  "a": "Reinsurance premiums and expected recoveries projected per reinsurance terms.",
                  "explain": "Net pricing."
              },
              {
                  "q": "How is option take-up assumed?",
                  "a": "Based on experience and expected anti-selection.",
                  "explain": "Chapter 21 (options and guarantees)."
              },
              {
                  "q": "How can claims management be reflected?",
                  "a": "Through lower durations or claim costs if effective processes are in place.",
                  "explain": "Must be realistic."
              },
              {
                  "q": "How is anti-selection allowed for?",
                  "a": "Loading claim rates for products with lighter underwriting or voluntary purchase.",
                  "explain": "E.g. guaranteed acceptance."
              },
              {
                  "q": "How are commission clawbacks allowed for?",
                  "a": "Expected recoveries on early lapses, net of credit risk.",
                  "explain": "Affects net acquisition costs."
              },
              {
                  "q": "What volume assumption affects expenses?",
                  "a": "Expected sales to spread fixed costs.",
                  "explain": "Volume risk."
              },
              {
                  "q": "How can capital requirements affect pricing?",
                  "a": "Higher requirements increase cost of capital, raising premiums.",
                  "explain": "Solvency regime matters."
              },
              {
                  "q": "What are the risks of optimistic other assumptions?",
                  "a": "Underpricing and losses if volumes, mix or claims management don't materialise.",
                  "explain": "Sensitivity test."
              },
              {
                  "q": "How should distribution cost assumptions vary?",
                  "a": "By channel and product.",
                  "explain": "Channel-specific pricing."
              },
              {
                  "q": "How might tax affect other assumptions?",
                  "a": "Tax treatment of reinsurance or profits.",
                  "explain": "Include in cash flows."
              },
              {
                  "q": "Why document other assumptions?",
                  "a": "They can materially affect profitability and are often judgemental.",
                  "explain": "Professional standards."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Pricing (1) – Individual business",
          "description": "Pricing individual health and care products: risk premiums from inception and claim-cost models, the equation of value and formula approaches, cash flow profit testing, loadings for expenses, commission, profit and contingencies, and pricing IP, CI, LTC and PMI.",
          "cards": [
              {
                  "q": "What is the basic structure of a health premium?",
                  "a": "Risk premium (expected claims) plus loadings for expenses, commission, profit, contingencies and cost of capital.",
                  "explain": "Or derived via profit testing."
              },
              {
                  "q": "How is an IP risk premium calculated?",
                  "a": "Sum over ages of inception rate × value of claim annuity (reflecting terminations and benefit), discounted.",
                  "explain": "Inception/disability annuity approach."
              },
              {
                  "q": "How is a CI risk premium calculated?",
                  "a": "Incidence rate × sum assured, discounted, summed over the term.",
                  "explain": "Adjust for survival period."
              },
              {
                  "q": "How is a PMI risk premium calculated?",
                  "a": "Claim frequency × average cost per claim, projected with medical inflation.",
                  "explain": "Burning cost style."
              },
              {
                  "q": "What is the equation of value?",
                  "a": "Present value of premiums = present value of benefits + expenses + profit.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "What is profit testing?",
                  "a": "Projecting cash flows and reserves to derive profits and test against criteria.",
                  "explain": "Cash flow technique."
              },
              {
                  "q": "Why might level premiums be charged for age-increasing risks?",
                  "a": "Customer preference for stability; creates reserves and lapse risk.",
                  "explain": "Reviewable designs reduce risk."
              },
              {
                  "q": "How is the contingency margin set?",
                  "a": "Reflecting uncertainty in assumptions and data.",
                  "explain": "Larger for new products."
              },
              {
                  "q": "What external influences affect pricing?",
                  "a": "Competition, regulation, tax, State provision, reinsurer rates.",
                  "explain": "Syllabus 4.2."
              },
              {
                  "q": "How are rating factors chosen?",
                  "a": "Factors that predict risk, are verifiable, permitted, and practical (age, sex where allowed, smoker, occupation, deferred period).",
                  "explain": "Balance accuracy and simplicity."
              },
              {
                  "q": "How is LTC priced?",
                  "a": "Multi-state model of transitions into care and mortality, with care cost inflation.",
                  "explain": "High uncertainty margins."
              },
              {
                  "q": "How are pricing results tested?",
                  "a": "Sensitivity analysis on key assumptions, competitor comparison.",
                  "explain": "Robustness."
              },
              {
                  "q": "What is the role of reinsurance rates in pricing?",
                  "a": "Reinsurers often provide risk rates for CI and IP.",
                  "explain": "Market standard."
              },
              {
                  "q": "Why price by deferred period?",
                  "a": "Claims costs differ materially.",
                  "explain": "Separate rate tables."
              },
              {
                  "q": "How should expenses be loaded?",
                  "a": "Per policy, per premium or per benefit, reflecting incidence of costs.",
                  "explain": "Fixed costs per policy."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Pricing (2) – Group business",
          "description": "Pricing group health and care business: data from the group (census, claims history), experience rating and credibility, book rates, unit rates, free cover limits, rate guarantees, profit sharing and the risk assessment of a group.",
          "cards": [
              {
                  "q": "What data is used to price group business?",
                  "a": "Membership census (ages, sex, salaries, occupations), past claims experience, scheme benefits, industry and location.",
                  "explain": "Syllabus 4.2 — group risk assessments."
              },
              {
                  "q": "What is a book rate?",
                  "a": "The insurer's standard rate for a group of given characteristics, before experience adjustment.",
                  "explain": "Used for small or new groups."
              },
              {
                  "q": "How is experience rating applied?",
                  "a": "Blend group's own experience with book rate using credibility: P = Z × own + (1 − Z) × book.",
                  "explain": "Z increases with group size."
              },
              {
                  "q": "What factors affect credibility?",
                  "a": "Size of group, length of experience, stability of membership and benefits.",
                  "explain": "Large groups mostly self-rated."
              },
              {
                  "q": "How are free cover limits set?",
                  "a": "Based on group size, average benefit, spread of benefits and underwriting cost.",
                  "explain": "Larger groups get higher limits."
              },
              {
                  "q": "How do rate guarantees affect pricing?",
                  "a": "Insurer bears experience changes; margins needed for longer guarantees.",
                  "explain": "Competitive feature."
              },
              {
                  "q": "What risk assessment factors matter for a group?",
                  "a": "Industry and occupation, location (concentration), absence management, employer's financial health, previous insurer's experience.",
                  "explain": "Qualitative and quantitative."
              },
              {
                  "q": "What is profit sharing?",
                  "a": "Returning part of favourable experience to the employer.",
                  "explain": "Encourages good management."
              },
              {
                  "q": "How is group IP priced?",
                  "a": "Using inception and termination rates by occupation/industry applied to the census, adjusted for experience.",
                  "explain": "Deferred period and benefit definitions."
              },
              {
                  "q": "How are large claims handled in experience rating?",
                  "a": "Capping or pooling large claims to avoid distorting rates.",
                  "explain": "Stability."
              },
              {
                  "q": "What is the effect of a young workforce on group PMI?",
                  "a": "Lower claim frequency but maternity-related costs where covered.",
                  "explain": "Age profile matters."
              },
              {
                  "q": "How do employer policies affect claims?",
                  "a": "Sick pay policies, absence management and HR practices influence IP claims.",
                  "explain": "Qualitative adjustment."
              },
              {
                  "q": "How is anti-selection controlled in group business?",
                  "a": "Compulsory membership, actively-at-work requirements, free cover limits.",
                  "explain": "Voluntary schemes need more care."
              },
              {
                  "q": "What is a unit rate premium?",
                  "a": "Rate per unit of salary roll or benefit.",
                  "explain": "Adjusted at renewal."
              },
              {
                  "q": "Why consider the previous insurer's experience?",
                  "a": "Reveals claims history and possible reasons for switching.",
                  "explain": "Anti-selection by employers."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Pricing (3) – Other considerations",
          "description": "Further pricing considerations: competition and market positioning, regulation and discrimination rules, underwriting and anti-selection, distribution costs, reinsurance, capital, and reviewing prices after launch.",
          "cards": [
              {
                  "q": "How does competition influence pricing?",
                  "a": "Market rates limit the premium achievable; insurer may accept lower margins or differentiate.",
                  "explain": "Pricing is not only technical."
              },
              {
                  "q": "What regulatory constraints affect pricing?",
                  "a": "Anti-discrimination rules, price walking bans, fair value requirements.",
                  "explain": "Constrain rating factors."
              },
              {
                  "q": "How does underwriting affect pricing?",
                  "a": "Stricter underwriting lowers expected claims; lighter underwriting requires loadings.",
                  "explain": "Trade-off with sales."
              },
              {
                  "q": "How can anti-selection be priced for?",
                  "a": "Loadings, limited benefits, waiting periods.",
                  "explain": "Guaranteed acceptance products."
              },
              {
                  "q": "How does distribution affect pricing?",
                  "a": "Commission and marketing costs, and channel-specific experience.",
                  "explain": "Price by channel if permitted."
              },
              {
                  "q": "How can reinsurance affect pricing?",
                  "a": "Reinsurance cost and capital relief feed into premiums.",
                  "explain": "Reinsurer rates set market levels."
              },
              {
                  "q": "Why review prices after launch?",
                  "a": "To compare experience with assumptions and adjust.",
                  "explain": "Control cycle."
              },
              {
                  "q": "What is price optimisation?",
                  "a": "Setting prices considering demand elasticity as well as cost.",
                  "explain": "Regulatory scrutiny for fairness."
              },
              {
                  "q": "How do capital requirements affect pricing?",
                  "a": "Cost of capital is part of price.",
                  "explain": "Solvency II capital."
              },
              {
                  "q": "What is the effect of tax on pricing?",
                  "a": "Premium taxes and profit taxes.",
                  "explain": "Customer and insurer impacts."
              },
              {
                  "q": "How should new products be priced?",
                  "a": "With prudent margins, reinsurer support, reviewable premiums where possible.",
                  "explain": "Limited data."
              },
              {
                  "q": "How can pricing reflect claims management?",
                  "a": "Better management justifies lower rates.",
                  "explain": "Must be evidenced."
              },
              {
                  "q": "What is cross-subsidy in pricing?",
                  "a": "Some groups paying more than their risk to subsidise others.",
                  "explain": "Can lead to anti-selection."
              },
              {
                  "q": "How does persistency affect pricing?",
                  "a": "Lapses affect expense recovery and selection.",
                  "explain": "Assumption drives price."
              },
              {
                  "q": "What is the pricing cycle in group health?",
                  "a": "Periods of soft and hard pricing driven by competition and experience.",
                  "explain": "Market cycle awareness."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Pricing (4) – Options and guarantees",
          "description": "Pricing options and guarantees in health and care products: guaranteed premiums, guaranteed insurability and indexation options, conversion and continuation options, and methods (deterministic and stochastic) for costing them.",
          "cards": [
              {
                  "q": "List common options and guarantees in health products.",
                  "a": "Guaranteed premium rates; guaranteed insurability (increase cover without evidence); indexation options; conversion/continuation options (e.g. group to individual); buy-back options.",
                  "explain": "Syllabus 4.2 options and guarantees."
              },
              {
                  "q": "What is the cost of guaranteed premiums?",
                  "a": "Insurer bears risk of adverse trends in morbidity or costs over the guarantee period.",
                  "explain": "Needs margins or capital."
              },
              {
                  "q": "How can guaranteed insurability options be costed?",
                  "a": "Estimate take-up and extra claims from anti-selective exercisers.",
                  "explain": "Conventional-style method."
              },
              {
                  "q": "What is a continuation option?",
                  "a": "Allowing a member leaving a group scheme to take individual cover without evidence.",
                  "explain": "Anti-selection by those in poor health."
              },
              {
                  "q": "What is an indexation option?",
                  "a": "Increasing benefits with inflation without evidence.",
                  "explain": "Those declining may be healthier."
              },
              {
                  "q": "How can option costs be reduced?",
                  "a": "Limits on increases, age limits, time limits, some evidence.",
                  "explain": "Design controls."
              },
              {
                  "q": "When is stochastic costing needed?",
                  "a": "When option value depends on variable factors (e.g. interest rates, claims trends).",
                  "explain": "Captures asymmetry."
              },
              {
                  "q": "How are option costs charged?",
                  "a": "Explicit charge or loading within premiums.",
                  "explain": "Must be transparent."
              },
              {
                  "q": "What is the risk from rate guarantees in group business?",
                  "a": "Experience deteriorating during the guarantee.",
                  "explain": "Margins or shorter guarantees."
              },
              {
                  "q": "How can reinsurance help with guarantees?",
                  "a": "Reinsurers may share risk or provide guaranteed rates.",
                  "explain": "Reinsurer guarantees have costs."
              },
              {
                  "q": "Why monitor option take-up?",
                  "a": "To check pricing assumptions and anti-selection.",
                  "explain": "Chapter 29."
              },
              {
                  "q": "What is a guarantee in LTC?",
                  "a": "Guaranteed premiums or benefit levels over long periods.",
                  "explain": "Very costly; often reviewable."
              },
              {
                  "q": "How can options increase attractiveness?",
                  "a": "Flexibility to adapt cover to life changes.",
                  "explain": "Customer value."
              },
              {
                  "q": "What is the time value of an option?",
                  "a": "Value from possible future changes making it valuable.",
                  "explain": "Even if not currently in the money."
              },
              {
                  "q": "How do definitions interact with guarantees?",
                  "a": "Guaranteed definitions may widen claims as medicine changes.",
                  "explain": "Definition review clauses."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Reserves and embedded value",
          "description": "The purposes of reserves, solvency capital and embedded value for a health and care insurer, the types of reserve (active life, claims in payment, IBNR, UPR), statistical versus individual case estimates, and how embedded value is calculated.",
          "cards": [
              {
                  "q": "What are the purposes of reserves?",
                  "a": "To ensure future obligations can be met, recognise profits appropriately, and meet regulatory requirements.",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "What is an active life reserve?",
                  "a": "Reserve for future claims on policies not currently claiming (for long-term products with level premiums).",
                  "explain": "Prospective valuation."
              },
              {
                  "q": "What is a disabled life reserve?",
                  "a": "Reserve for claims in payment (e.g. IP), the present value of future benefits for current claimants.",
                  "explain": "Depends on termination assumptions."
              },
              {
                  "q": "What is an IBNR reserve?",
                  "a": "Reserve for claims incurred but not reported.",
                  "explain": "Statistical methods like chain ladder."
              },
              {
                  "q": "What is an unearned premium reserve?",
                  "a": "The portion of premiums relating to unexpired cover.",
                  "explain": "Short-term products."
              },
              {
                  "q": "What is the difference between statistical and individual case estimates?",
                  "a": "Statistical estimates use aggregate data and methods; case estimates assess each claim individually (e.g. large or complex claims).",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "When are case estimates appropriate?",
                  "a": "For large, unusual or long-tail claims with specific information.",
                  "explain": "E.g. large IP claims."
              },
              {
                  "q": "What is embedded value?",
                  "a": "Adjusted net worth plus present value of future profits from in-force business less cost of capital.",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "How are reserving assumptions compared with pricing?",
                  "a": "Reserving may include prudence or prescribed bases; pricing uses best estimates plus margins.",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "What reserve is needed for PMI?",
                  "a": "Outstanding claims and IBNR, UPR, possibly unexpired risk reserve.",
                  "explain": "Short-term focus."
              },
              {
                  "q": "What is an additional unexpired risk reserve?",
                  "a": "Held if UPR is insufficient to cover expected claims on unexpired cover.",
                  "explain": "Premium deficiency."
              },
              {
                  "q": "How is the DLR calculated for IP?",
                  "a": "Present value of future benefit payments using claim termination rates by duration.",
                  "explain": "Key assumption."
              },
              {
                  "q": "What reserves are needed for LTC?",
                  "a": "Active life reserves and claims in payment reserves.",
                  "explain": "Long-duration."
              },
              {
                  "q": "Why are reserves important for profit recognition?",
                  "a": "They determine when profits emerge in accounts.",
                  "explain": "Reserving basis matters."
              },
              {
                  "q": "What is a market-consistent reserve?",
                  "a": "Best estimate plus risk margin using risk-free discount rates.",
                  "explain": "Solvency II approach."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Approaches to setting reserves and solvency capital requirements",
          "description": "Methodologies for supervisory reserves and capital: market-consistent valuation, Value at Risk capital assessment, stress tests, the interplay between reserve strength and capital, and passive versus active valuation approaches.",
          "cards": [
              {
                  "q": "What is a VaR capital assessment?",
                  "a": "Capital sufficient to cover losses over a period (e.g. one year) with a specified confidence (e.g. 99.5%).",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "What is market-consistent valuation?",
                  "a": "Valuing liabilities consistently with market prices: risk-free discounting, best estimates, risk margin.",
                  "explain": "Syllabus 4.4.1."
              },
              {
                  "q": "What is the interplay between reserves and capital?",
                  "a": "Stronger reserves reduce additional capital needed for a given security level.",
                  "explain": "Syllabus 4.4.2."
              },
              {
                  "q": "What is a passive valuation approach?",
                  "a": "Assumptions fixed at outset, assets at book value; stable but less realistic.",
                  "explain": "Syllabus 4.4.3."
              },
              {
                  "q": "What is an active valuation approach?",
                  "a": "Assumptions updated to current conditions, assets at market value; realistic but volatile.",
                  "explain": "Syllabus 4.4.3."
              },
              {
                  "q": "What risk modules apply to health insurers under Solvency II?",
                  "a": "Health underwriting risk (SLT and non-SLT), market, counterparty, operational.",
                  "explain": "Health split by technique."
              },
              {
                  "q": "What is SLT health?",
                  "a": "Health business pursued on a similar technical basis to life (e.g. IP, LTC).",
                  "explain": "Uses life-style stresses."
              },
              {
                  "q": "What is non-SLT health?",
                  "a": "Health business pursued like non-life (e.g. PMI).",
                  "explain": "Premium and reserve risk."
              },
              {
                  "q": "How are stress tests used?",
                  "a": "Applying shocks to assumptions (e.g. morbidity increase) to assess capital.",
                  "explain": "Standard formula uses prescribed stresses."
              },
              {
                  "q": "What is diversification in capital?",
                  "a": "Recognising that risks don't all crystallise together.",
                  "explain": "Correlation matrices."
              },
              {
                  "q": "What is an internal model?",
                  "a": "Insurer's own model for capital, subject to regulatory approval.",
                  "explain": "More tailored."
              },
              {
                  "q": "How does reinsurance affect capital?",
                  "a": "Reduces risk and capital, adds counterparty risk.",
                  "explain": "Capital relief."
              },
              {
                  "q": "What is the risk margin?",
                  "a": "Cost of capital needed to transfer liabilities.",
                  "explain": "Part of technical provisions."
              },
              {
                  "q": "Why might passive approaches be preferred?",
                  "a": "Stability of results.",
                  "explain": "But may hide risks."
              },
              {
                  "q": "Why is capital important for pricing?",
                  "a": "Cost of capital is part of product price.",
                  "explain": "Links to Chapter 17."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Nature of risks (1)",
          "description": "Sources of risk to a health and care insurer, part 1: data, claim rates, claim amounts, investment performance, expenses and inflation, and persistency. (Syllabus 3.1; ActEd splits the risk list across three chapters.)",
          "cards": [
              {
                  "q": "List the risks in SP1 syllabus 3.1.",
                  "a": "Data; claim rates; claim amounts; investment; expenses and inflation; persistency; new business mix and volume; guarantees and options; competition; management actions; distributor actions; counterparties; legal/regulatory/tax; reputation; internal audit failures/fraud; physical risks; aggregation/concentration; catastrophes; non-disclosure/anti-selection; climate.",
                  "explain": "Memorise this list."
              },
              {
                  "q": "How can data be a source of risk?",
                  "a": "Poor data leads to wrong pricing, reserves and experience analysis.",
                  "explain": "Data checks mitigate."
              },
              {
                  "q": "How can claim rates be a source of risk?",
                  "a": "Higher incidence or longer durations than assumed.",
                  "explain": "Economic and medical trends."
              },
              {
                  "q": "How can claim amounts be a source of risk?",
                  "a": "Medical inflation, higher treatment costs, benefit escalation.",
                  "explain": "Indemnity products especially."
              },
              {
                  "q": "How can investment performance be a source of risk?",
                  "a": "Lower returns than assumed or asset value falls relative to liabilities.",
                  "explain": "Long-term reserves."
              },
              {
                  "q": "How can expenses and inflation be a source of risk?",
                  "a": "Expenses exceeding assumptions, higher inflation.",
                  "explain": "Claims management costs."
              },
              {
                  "q": "How can persistency be a source of risk?",
                  "a": "Early lapses before recovering initial costs; selective lapses; lower lapses on lapse-supported products.",
                  "explain": "Direction depends on design."
              },
              {
                  "q": "Why is claim duration risk significant for IP?",
                  "a": "Long claims are costly and hard to predict.",
                  "explain": "Termination assumptions."
              },
              {
                  "q": "How can medical inflation vary?",
                  "a": "New technologies and drugs can cause sudden cost jumps.",
                  "explain": "PMI repricing."
              },
              {
                  "q": "What is selective lapsation in health?",
                  "a": "Healthy policyholders lapse, leaving worse risks.",
                  "explain": "Reviewable premiums increase this."
              },
              {
                  "q": "How can economic conditions increase claim rates?",
                  "a": "Unemployment and insecurity increase IP claims.",
                  "explain": "Correlation."
              },
              {
                  "q": "How can data errors affect reserves?",
                  "a": "Wrong claim durations or benefit amounts misstate DLR.",
                  "explain": "Data quality."
              },
              {
                  "q": "Why does expense risk matter in health?",
                  "a": "Claims management is expensive; volumes may fall.",
                  "explain": "Budget control."
              },
              {
                  "q": "How can reinsurance affect claim amount risk?",
                  "a": "Excess of loss limits large claims.",
                  "explain": "Chapter 26."
              },
              {
                  "q": "How can inflation risk be mitigated?",
                  "a": "Index-linked assets, reviewable premiums, benefit caps.",
                  "explain": "Design and ALM."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Nature of risks (2)",
          "description": "Sources of risk to a health and care insurer, part 2: mix and volume of new business, guarantees and options, competition, actions of management and distributors, counterparties, and legal, regulatory and tax developments. (Syllabus 3.1.)",
          "cards": [
              {
                  "q": "How can new business mix be a source of risk?",
                  "a": "If the mix differs from pricing assumptions, profits and capital needs change.",
                  "explain": "E.g. more high-risk occupations than expected."
              },
              {
                  "q": "How can new business volume be a source of risk?",
                  "a": "Low volumes leave fixed costs uncovered; high volumes strain capital and administration.",
                  "explain": "New business strain."
              },
              {
                  "q": "How can guarantees and options be a source of risk?",
                  "a": "Guaranteed premiums and options can become costly with adverse trends or anti-selection.",
                  "explain": "Chapter 21."
              },
              {
                  "q": "How can competition be a source of risk?",
                  "a": "Forces lower premiums, looser underwriting or riskier features.",
                  "explain": "Market cycle."
              },
              {
                  "q": "How can actions of management be a source of risk?",
                  "a": "Poor strategy, weak controls, inadequate pricing decisions.",
                  "explain": "Governance."
              },
              {
                  "q": "How can distributors be a source of risk?",
                  "a": "Mis-selling, poor disclosure, churning, concentration of distribution.",
                  "explain": "Oversight."
              },
              {
                  "q": "How can counterparties be a source of risk?",
                  "a": "Reinsurers, healthcare providers, outsourcers or banks failing.",
                  "explain": "Credit and operational risk."
              },
              {
                  "q": "How can legal developments be a source of risk?",
                  "a": "Court decisions widening definitions or restricting non-disclosure defences.",
                  "explain": "Legal risk."
              },
              {
                  "q": "How can regulatory developments be a source of risk?",
                  "a": "New capital rules, conduct rules, restrictions on rating factors.",
                  "explain": "Regulatory risk."
              },
              {
                  "q": "How can tax changes be a source of risk?",
                  "a": "Changes in tax on premiums or benefits affect demand and profitability.",
                  "explain": "E.g. IPT rises."
              },
              {
                  "q": "Why are healthcare providers a counterparty risk?",
                  "a": "Provider failure or price increases affect PMI claims and service.",
                  "explain": "Network management."
              },
              {
                  "q": "How can distribution concentration create risk?",
                  "a": "Losing a major distributor can collapse sales.",
                  "explain": "Diversify channels."
              },
              {
                  "q": "How can management incentives create risk?",
                  "a": "Volume-based incentives may encourage underpricing.",
                  "explain": "Align incentives."
              },
              {
                  "q": "How can outsourcing claims handling create risk?",
                  "a": "Poor claims decisions, cost overruns, reputational damage.",
                  "explain": "Oversight."
              },
              {
                  "q": "Why do regulatory changes affect in-force business?",
                  "a": "New rules may apply to existing policies (e.g. definition changes, pricing practices).",
                  "explain": "Retrospective effects."
              }
          ]
      },
      {
          "id": "m26",
          "title": "Nature of risks (3)",
          "description": "Sources of risk to a health and care insurer, part 3: reputation, internal audit failures and fraud, physical risks, aggregation and concentration, catastrophes (including pandemics), non-disclosure and anti-selection, and climate risks. (Syllabus 3.1.)",
          "cards": [
              {
                  "q": "How can reputation be a source of risk?",
                  "a": "Poor claims handling or controversial declines damage trust, affecting sales and persistency.",
                  "explain": "Reputational risk is significant in health."
              },
              {
                  "q": "How can internal audit failures/fraud be a source of risk?",
                  "a": "Undetected errors or fraud (internal or external) cause losses.",
                  "explain": "Controls and audit."
              },
              {
                  "q": "What are physical risks?",
                  "a": "Damage to premises, systems or people disrupting operations.",
                  "explain": "Business continuity planning."
              },
              {
                  "q": "What is aggregation risk in health?",
                  "a": "Many claims from one event (e.g. pandemic, workplace incident).",
                  "explain": "Group business concentration."
              },
              {
                  "q": "What catastrophes affect health insurers?",
                  "a": "Pandemics, epidemics, major accidents, terrorism.",
                  "explain": "Catastrophe reinsurance."
              },
              {
                  "q": "How can pandemics affect health insurers differently by product?",
                  "a": "Increase IP and PMI claims (or delay elective PMI treatment), affect CI through delayed diagnosis, and affect mortality on LTC.",
                  "explain": "Mixed effects."
              },
              {
                  "q": "What is non-disclosure?",
                  "a": "Applicants failing to disclose relevant information at application.",
                  "explain": "Leads to claim disputes."
              },
              {
                  "q": "What is anti-selection?",
                  "a": "Higher-risk individuals being more likely to buy or keep cover.",
                  "explain": "Underwriting and design counter it."
              },
              {
                  "q": "How can climate risks affect health insurers?",
                  "a": "Heatwaves and pollution affect morbidity; transition risks affect assets.",
                  "explain": "Emerging risk."
              },
              {
                  "q": "What is concentration risk?",
                  "a": "Excessive exposure to one employer, region, provider or asset.",
                  "explain": "Limits and diversification."
              },
              {
                  "q": "How can fraud occur in health claims?",
                  "a": "Exaggerated claims, false claims, provider billing fraud.",
                  "explain": "Claims investigation."
              },
              {
                  "q": "How can reputational risk affect group business?",
                  "a": "Employers may switch insurers after poor claims experiences.",
                  "explain": "Service quality."
              },
              {
                  "q": "How can cyber risk affect health insurers?",
                  "a": "Sensitive medical data breaches.",
                  "explain": "Data protection regulation."
              },
              {
                  "q": "Why is anti-selection greater for voluntary products?",
                  "a": "Individuals self-select based on their health.",
                  "explain": "Pricing loadings."
              },
              {
                  "q": "How can catastrophe risk be mitigated?",
                  "a": "Catastrophe excess of loss reinsurance, limits on concentrations.",
                  "explain": "Chapter 26."
              }
          ]
      },
      {
          "id": "m27",
          "title": "Reinsurance",
          "description": "Reinsurance for health and care insurers: purposes, types and structures (quota share, surplus, excess of loss, stop loss, catastrophe, risk premium and original terms, financial reinsurance) and the factors in determining the level of retention.",
          "cards": [
              {
                  "q": "What are the purposes of reinsurance for health insurers?",
                  "a": "Limit large claims, reduce volatility, catastrophe protection, capacity, financial assistance, expertise, capital relief.",
                  "explain": "Syllabus 3.2.1."
              },
              {
                  "q": "What is quota share reinsurance?",
                  "a": "A fixed proportion of each risk ceded.",
                  "explain": "Useful for new products."
              },
              {
                  "q": "What is surplus reinsurance?",
                  "a": "Insurer retains up to a limit per risk; excess ceded.",
                  "explain": "Limits large benefits."
              },
              {
                  "q": "What is excess of loss reinsurance for IP?",
                  "a": "Covers claim amounts or durations above a threshold.",
                  "explain": "Protects against long claims."
              },
              {
                  "q": "What is stop loss reinsurance?",
                  "a": "Covers aggregate claims above a level.",
                  "explain": "Protects overall results."
              },
              {
                  "q": "What is catastrophe reinsurance?",
                  "a": "Covers multiple claims from one event.",
                  "explain": "Group business."
              },
              {
                  "q": "What is risk premium reinsurance?",
                  "a": "Premium based on risk cover only.",
                  "explain": "Insurer keeps investment."
              },
              {
                  "q": "What is original terms reinsurance?",
                  "a": "Reinsurer shares premiums and claims proportionally.",
                  "explain": "Shares all risks."
              },
              {
                  "q": "What is financial reinsurance?",
                  "a": "Primarily provides financing or capital relief.",
                  "explain": "Regulatory scrutiny."
              },
              {
                  "q": "What factors determine the retention level?",
                  "a": "Capital, risk appetite, portfolio size, claim size distribution, reinsurance cost, regulatory capital effects.",
                  "explain": "Syllabus 3.2.3."
              },
              {
                  "q": "Why might a new health insurer reinsure heavily?",
                  "a": "Limited data and capital, need for expertise.",
                  "explain": "Quota share."
              },
              {
                  "q": "What services do health reinsurers provide?",
                  "a": "Pricing data, underwriting and claims support, product development.",
                  "explain": "Valuable for CI."
              },
              {
                  "q": "What is reinsurer counterparty risk?",
                  "a": "Reinsurer failure leaves insurer liable.",
                  "explain": "Assess security."
              },
              {
                  "q": "How can reinsurance help with LTC?",
                  "a": "Sharing long-duration risk; limited availability.",
                  "explain": "Capacity constrained."
              },
              {
                  "q": "How does reinsurance affect capital?",
                  "a": "Reduces required capital via risk transfer.",
                  "explain": "Capital efficiency."
              }
          ]
      },
      {
          "id": "m28",
          "title": "Other risk management techniques",
          "description": "Underwriting and other techniques for managing health and care risks: purposes and approaches of underwriting, factors in choosing its level, claims management, data checks, product design, managing distribution and customer relationships, other counterparties and internal processes.",
          "cards": [
              {
                  "q": "What are the purposes of underwriting?",
                  "a": "Classify risks, protect against anti-selection, set fair premiums, prevent over-insurance.",
                  "explain": "Syllabus 3.3.1."
              },
              {
                  "q": "What approaches to underwriting are used?",
                  "a": "Application questions, medical questionnaires, medical exams/tests, doctor reports, tele-underwriting, moratorium, financial underwriting, claims underwriting.",
                  "explain": "Syllabus 3.3.2."
              },
              {
                  "q": "What factors determine the level of underwriting?",
                  "a": "Benefit size, product, age, distribution channel, cost, competition, reinsurer requirements, target market.",
                  "explain": "Syllabus 3.3.3."
              },
              {
                  "q": "What is claims management?",
                  "a": "Processes to assess, control and reduce claims: verification, case management, rehabilitation, provider management.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "How can claims management reduce IP costs?",
                  "a": "Early intervention, rehabilitation, vocational support, regular reviews.",
                  "explain": "Shorter durations."
              },
              {
                  "q": "How can PMI claims be managed?",
                  "a": "Pre-authorisation, networks, guided pathways, price negotiation.",
                  "explain": "Cost control."
              },
              {
                  "q": "How can data checks manage risk?",
                  "a": "Ensure accurate pricing, reserving and claims.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "How can product design manage risk?",
                  "a": "Definitions, deferred periods, benefit limits, reviewable premiums.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "How can managing distribution reduce risk?",
                  "a": "Training, oversight, commission design, persistency monitoring.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "How can customer relationship management reduce risk?",
                  "a": "Better communication and service improve persistency and reduce complaints.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "How can other counterparties be managed?",
                  "a": "Due diligence, contracts, monitoring of providers and outsourcers.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "What internal processes help manage risk?",
                  "a": "Governance, controls, audit, risk registers.",
                  "explain": "Syllabus 3.4."
              },
              {
                  "q": "What is financial underwriting?",
                  "a": "Ensuring benefits are proportionate to income or need.",
                  "explain": "Prevents over-insurance."
              },
              {
                  "q": "What are the risks of claims underwriting?",
                  "a": "Claims disputes and reputational damage.",
                  "explain": "Balance with up-front cost."
              },
              {
                  "q": "What is the role of medical underwriting guidelines?",
                  "a": "Consistent decisions using reinsurer manuals.",
                  "explain": "Quality control."
              }
          ]
      },
      {
          "id": "m29",
          "title": "Investment",
          "description": "Asset-liability matching for health and care insurers: principles of investment, categorising liabilities (short-term indemnity claims, long-term claims in payment, real and nominal, unexpired risk), and matching strategies for each.",
          "cards": [
              {
                  "q": "What are the principles of investment for a health insurer?",
                  "a": "Match liabilities by nature, term and currency; maximise return subject to risk; meet regulatory constraints; maintain liquidity.",
                  "explain": "Syllabus 3.5.1."
              },
              {
                  "q": "How can health liabilities be categorised?",
                  "a": "Short-term (PMI claims, UPR); long-term fixed (level IP benefits in payment); long-term real (indexed IP benefits, LTC costs); unit-linked (rare).",
                  "explain": "Syllabus 3.5.2."
              },
              {
                  "q": "How should PMI liabilities be matched?",
                  "a": "Short-term, liquid assets such as cash and short bonds.",
                  "explain": "Liabilities settle quickly."
              },
              {
                  "q": "How should IP claims in payment be matched?",
                  "a": "Bonds of matching term; index-linked if benefits escalate.",
                  "explain": "Syllabus 3.5.3."
              },
              {
                  "q": "How should LTC liabilities be matched?",
                  "a": "Long-dated index-linked bonds or real assets.",
                  "explain": "Care cost inflation."
              },
              {
                  "q": "Why is liquidity important for health insurers?",
                  "a": "Claims are frequent and short-term for PMI.",
                  "explain": "Cash flow management."
              },
              {
                  "q": "What is the role of free assets?",
                  "a": "Allow some mismatching for higher returns.",
                  "explain": "Risk appetite."
              },
              {
                  "q": "What regulatory constraints apply?",
                  "a": "Prudent person principle, capital charges.",
                  "explain": "Solvency II."
              },
              {
                  "q": "How does medical inflation affect matching?",
                  "a": "Hard to match; real assets provide partial hedge.",
                  "explain": "Basis risk."
              },
              {
                  "q": "What currency considerations apply?",
                  "a": "International PMI claims in foreign currencies.",
                  "explain": "Currency matching."
              },
              {
                  "q": "How can models support investment strategy?",
                  "a": "Projecting liabilities and assets under scenarios.",
                  "explain": "Syllabus 4.3."
              },
              {
                  "q": "Why might equities be held?",
                  "a": "For free assets or long-term real liabilities.",
                  "explain": "Volatility."
              },
              {
                  "q": "How does reinsurance affect investment?",
                  "a": "Reinsurance recoverables are assets with credit risk.",
                  "explain": "Consider in ALM."
              },
              {
                  "q": "What is immunisation?",
                  "a": "Matching duration to protect against interest rate changes.",
                  "explain": "For fixed liabilities."
              },
              {
                  "q": "How does the term of liabilities affect strategy?",
                  "a": "Long-term liabilities allow longer bonds and real assets.",
                  "explain": "Match term."
              }
          ]
      },
      {
          "id": "m30",
          "title": "Monitoring and feedback into the control cycle",
          "description": "Why and how a health and care insurer monitors mortality, morbidity, claim amounts, persistency, expense, new business and investment experience (with the data required), and how analyses of surplus and embedded value profit feed back into the control cycle.",
          "cards": [
              {
                  "q": "Why monitor experience?",
                  "a": "To check assumptions, detect trends, identify profit sources, inform pricing and reserving, and support management.",
                  "explain": "Syllabus 5.2.1."
              },
              {
                  "q": "How is morbidity experience monitored for IP?",
                  "a": "Actual vs expected inceptions and terminations by age, occupation, deferred period, duration and cause.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "How are claim amounts monitored for PMI?",
                  "a": "Average costs by treatment and provider, frequency, medical inflation.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "How is persistency monitored?",
                  "a": "Lapse rates by product, duration, channel.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "How are expenses monitored?",
                  "a": "Actual vs assumed, by function and product.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "How is new business monitored?",
                  "a": "Volumes, mix and profitability against plan.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "How is investment experience monitored?",
                  "a": "Returns vs assumptions, credit events.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "What data is needed for monitoring?",
                  "a": "Exposure, claims, lapses, expenses, sales, investment data.",
                  "explain": "Syllabus 5.2.2."
              },
              {
                  "q": "What is an analysis of surplus?",
                  "a": "Attributing profit/surplus to sources (claims, expenses, lapses, investment, new business, assumption changes).",
                  "explain": "Syllabus 5.3.1."
              },
              {
                  "q": "What is an analysis of EV profit?",
                  "a": "Explaining EV change: expected return, experience variances, assumption changes, new business value, economic variances.",
                  "explain": "Syllabus 5.3.1."
              },
              {
                  "q": "How can analysis results be used?",
                  "a": "Revise assumptions, reprice, redesign, change underwriting or claims management, inform reserving.",
                  "explain": "Syllabus 5.3.2."
              },
              {
                  "q": "Why separate random from systematic variation?",
                  "a": "Only systematic changes should change assumptions.",
                  "explain": "Credibility."
              },
              {
                  "q": "How does monitoring feed into the control cycle?",
                  "a": "Findings update assumptions and decisions.",
                  "explain": "Completes the cycle."
              },
              {
                  "q": "How is mortality monitored in health business?",
                  "a": "Actual vs expected deaths of claimants and healthy lives.",
                  "explain": "Affects claims terminations."
              },
              {
                  "q": "Why monitor claims management effectiveness?",
                  "a": "To check if rehabilitation and case management reduce durations as assumed.",
                  "explain": "Assumption validation."
              }
          ]
      },
      {
          "id": "m31",
          "title": "Problem solving",
          "description": "Applying SP1 to exam questions: structuring answers with the course's lists (products, risks, design factors, stakeholders), generating breadth, dealing with unfamiliar products and markets, and presenting calculations clearly.",
          "cards": [
              {
                  "q": "What frameworks help answer SP1 questions?",
                  "a": "Risk list (3.1); design factors; stakeholders; control cycle; environment factors.",
                  "explain": "Structure answers."
              },
              {
                  "q": "How to approach an unfamiliar health product?",
                  "a": "Break it into components (benefit trigger, amount, duration), identify needs and risks for each.",
                  "explain": "Apply principles."
              },
              {
                  "q": "Why apply points to the scenario?",
                  "a": "Marks reward relevance.",
                  "explain": "Generic answers score poorly."
              },
              {
                  "q": "How should calculations be presented?",
                  "a": "Clear method, assumptions, and interpretation.",
                  "explain": "Method marks."
              },
              {
                  "q": "What does 'discuss' require?",
                  "a": "Balanced consideration of issues.",
                  "explain": "Pros and cons."
              },
              {
                  "q": "How to generate breadth?",
                  "a": "Use frameworks and think about all stakeholders and risks.",
                  "explain": "More distinct points."
              },
              {
                  "q": "How should marks guide length?",
                  "a": "About one point per half to one mark.",
                  "explain": "Breadth over depth."
              },
              {
                  "q": "Why consider State provision in answers?",
                  "a": "It shapes demand and product design.",
                  "explain": "Health-specific."
              },
              {
                  "q": "Why consider claims management?",
                  "a": "Distinctive health risk control.",
                  "explain": "Often overlooked."
              },
              {
                  "q": "How to handle group product questions?",
                  "a": "Consider employer, employees, experience rating and underwriting.",
                  "explain": "Group-specific issues."
              },
              {
                  "q": "What are common weaknesses?",
                  "a": "Too few points, not applying to context, vague statements.",
                  "explain": "Examiners' reports."
              },
              {
                  "q": "How to manage time?",
                  "a": "Allocate by marks.",
                  "explain": "Complete all questions."
              },
              {
                  "q": "How to use examiners' reports?",
                  "a": "Learn marking expectations.",
                  "explain": "Practice past papers."
              },
              {
                  "q": "Why link chapters?",
                  "a": "Real problems involve design, pricing, risk and reserving together.",
                  "explain": "Higher-order skill."
              },
              {
                  "q": "How to answer 'suggest' questions?",
                  "a": "Offer a range of sensible ideas with brief justification.",
                  "explain": "Credit for reasoning."
              }
          ]
      },
      {
          "id": "m32",
          "title": "Glossary",
          "description": "Key SP1 terminology — product, underwriting, claims, pricing and reserving terms — as a recall deck.",
          "cards": [
              {
                  "q": "Define 'deferred period'.",
                  "a": "Period of incapacity before IP benefit starts.",
                  "explain": "Reduces cost."
              },
              {
                  "q": "Define 'moratorium underwriting'.",
                  "a": "Excluding pre-existing conditions until a symptom-free period passes, without upfront medical questions.",
                  "explain": "PMI."
              },
              {
                  "q": "Define 'free cover limit'.",
                  "a": "Maximum benefit granted without evidence in group schemes.",
                  "explain": "Group underwriting."
              },
              {
                  "q": "Define 'claim inception rate'.",
                  "a": "Rate at which healthy lives start claiming.",
                  "explain": "IP pricing."
              },
              {
                  "q": "Define 'claim termination rate'.",
                  "a": "Rate at which claims end through recovery or death.",
                  "explain": "IP reserving."
              },
              {
                  "q": "Define 'ADL'.",
                  "a": "Activity of daily living — used as LTC trigger.",
                  "explain": "E.g. washing, dressing."
              },
              {
                  "q": "Define 'survival period'.",
                  "a": "Period a CI claimant must survive after diagnosis.",
                  "explain": "E.g. 14 days."
              },
              {
                  "q": "Define 'medical inflation'.",
                  "a": "Rate of increase in medical costs.",
                  "explain": "PMI pricing."
              },
              {
                  "q": "Define 'experience rating'.",
                  "a": "Pricing a group on its own experience with credibility weighting.",
                  "explain": "Group business."
              },
              {
                  "q": "Define 'disabled life reserve'.",
                  "a": "Reserve for claims in payment.",
                  "explain": "IP."
              },
              {
                  "q": "Define 'IBNR'.",
                  "a": "Incurred but not reported claims.",
                  "explain": "Reserving."
              },
              {
                  "q": "Define 'replacement ratio'.",
                  "a": "Benefit as proportion of pre-incapacity earnings.",
                  "explain": "Moral hazard control."
              },
              {
                  "q": "Define 'linked claim'.",
                  "a": "Recurrence treated as continuation of an earlier claim.",
                  "explain": "IP."
              },
              {
                  "q": "Define 'health cash plan'.",
                  "a": "Fixed cash benefits for routine health costs.",
                  "explain": "Low cost product."
              },
              {
                  "q": "Define 'SLT health'.",
                  "a": "Health business on a similar technical basis to life insurance.",
                  "explain": "Solvency II classification."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp1-q1",
      title: "Health and care products and the operating environment",
      modules: "Modules 2, 5, 9, 10",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define 'deferred period' in the context of income protection insurance, and state which two other named health and care products in the SP1 syllabus most closely resemble income protection in requiring long-term incidence assumptions.",
          answer:
            "The deferred period is the waiting period between the start of incapacity and when IP benefit payments begin, during which no benefit is paid. Critical illness insurance and long term care insurance most closely resemble income protection in requiring long-term incidence assumptions.",
          note: "A complete answer states the definition precisely and correctly names both comparable long-term products.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the genuine scope and generosity of State healthcare provision directly shapes what a private health and care insurer's products need to achieve in a given market.",
          answer:
            "Where the State provides comprehensive baseline provision, private products typically need to be marketed as supplementary (speed, choice, comfort), while in markets with minimal State provision, private products must be positioned as primary, comprehensive cover — the same private product concept can have a different real-world role depending on the State backdrop.",
          note: "A strong answer explicitly connects State provision to concrete product positioning, not just states that 'the State matters'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two operating-environment factors (other than the role of the State) that could affect whether a new critical illness product succeeds in a given market.",
          answer:
            "Distribution channels: if the market lacks advisers experienced in explaining CI's condition-specific definitions, direct/online distribution may lead to poor customer understanding and higher complaint or non-disclosure rates. Regulatory and taxation regime: if benefits are not tax-favoured or regulation imposes onerous disclosure/underwriting requirements, the product's effective cost and complexity could reduce its genuine attractiveness relative to alternative uses of a customer's money.",
          note: "Any two distinct, well-justified operating-environment factors should be accepted, provided they are applied to this specific CI product scenario, not stated generically.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why economic and political influences might be harder for an insurer to anticipate than regulatory or taxation changes.",
          answer:
            "Regulatory and tax rules are typically published and change through a known, formal process, while economic conditions and political shifts can move less predictably and with less formal advance notice, requiring genuine ongoing vigilance rather than a one-off compliance check.",
          note: "This connects directly to the procedural-predictability distinction developed in this course.",
        },
      ],
    },
    {
      id: "sp1-q2",
      title: "Product design for a new long term care product",
      modules: "Modules 4, 7, 8",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "An insurer is designing a new long term care insurance product. Explain why policyholders, distributors, the insurer, and shareholders might have different interests in how this product is designed.",
          answer:
            "Policyholders want genuine value and appropriate cover for their care needs, distributors want a product that is straightforward to sell and adequately remunerated, the insurer wants a product that is profitable and manageable from a risk perspective given LTC's long-term, compounding risk, and shareholders want an adequate return on the capital this capital-intensive product requires.",
          note: "A strong answer names all four stakeholder groups and their distinct interests, not just one or two.",
        },
        {
          label: "(ii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why determining a 'suitable design' for this LTC product depends on the specific market it will be sold in, rather than following one universally best template.",
          answer:
            "The same underlying product concept could be well-suited to one market (e.g. a fully-underwritten product in a market with sophisticated advice-based distribution and high care-cost awareness) and poorly suited to another (e.g. that same design in a market needing simpler, more accessible cover with less individual underwriting), so the design decision must be anchored in the specific market's distribution capability, customer sophistication, and State-provision backdrop.",
          note: "A strong answer explicitly connects design suitability to at least two specific market characteristics, not just asserts that context 'matters' in the abstract.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss the relative merits of a guaranteed-premium design versus a reviewable-premium design for this LTC product.",
          answer:
            "A guaranteed premium gives policyholders certainty over their long-term cost, supporting persistency and customer trust, but exposes the insurer to genuine, open-ended risk if incidence or cost assumptions prove too optimistic over LTC's very long duration. A reviewable premium lets the insurer adjust rates if experience diverges from assumptions, managing insurer risk over this long contract term, but introduces genuine premium uncertainty for policyholders that could damage persistency or trust.",
          note: "A strong answer identifies the genuine trade-off (insurer risk management versus policyholder certainty) for both design options, not just describes one option favourably.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this product's premium, benefit, and charge structure should be designed together as an integrated whole, rather than each element decided independently.",
          answer:
            "The premium a customer is willing to pay, the benefits delivered, and any charges levied are all interconnected — a benefit-rich design typically requires a correspondingly higher premium or charge structure to remain viable, so these elements must be designed coherently together rather than in isolation.",
          note: "This connects directly to the integrated-design-and-pricing theme developed in this course.",
        },
      ],
    },
    {
      id: "sp1-q3",
      title: "Identifying sources of risk",
      modules: "Modules 24, 25, 26",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List six genuine sources of risk to a health and care insurance company named in the official syllabus, other than claim rates and claim amounts.",
          answer:
            "Any six of: data, investment performance, expenses and inflation, persistency, mix of new business, volume of new business, guarantees and options, competition, actions of management, actions of distributors, counterparties, legal/regulatory/tax developments, reputation, internal audit failures/fraud, physical risks, aggregation and concentration of risk, catastrophes, non-disclosure and anti-selection.",
          note: "A complete answer names six distinct sources from the official list, not vague restatements of the same underlying idea.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why 'aggregation and concentration of risk' and 'catastrophes' are distinct risk sources, despite both relating to correlated, large-scale losses.",
          answer:
            "Aggregation/concentration risk concerns the insurer's own portfolio structure (e.g. too much business concentrated in one region or risk type, creating vulnerability even without any single triggering event), while catastrophe risk concerns a specific, discrete event (e.g. a pandemic) capable of triggering correlated claims across that concentrated exposure — the underlying structural vulnerability and the triggering event are separate concepts.",
          note: "A strong answer explicitly distinguishes the underlying structural vulnerability from the triggering event, not just describes both as 'big risks'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why 'non-disclosure and anti-selection' is a distinct risk source from 'data' quality, and one way each risk might be managed differently.",
          answer:
            "Data quality risk concerns unintentional errors, gaps or inaccuracies in the insurer's own records, managed through data governance and quality checks. Non-disclosure and anti-selection concern a different mechanism — applicants deliberately withholding or misrepresenting information because they have a financial incentive to do so, a behavioural risk managed through underwriting rigour and pricing safeguards rather than data governance alone.",
          note: "A strong answer explains both the conceptual distinction <em>and</em> names a different management response for each.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why 'actions of management' and 'actions of distributors' are included as risk sources alongside more technical, statistically-modellable risks like claim rates.",
          answer:
            "These recognise that genuine risk can arise from human decisions by parties within or connected to the insurer (e.g. management pursuing an overly aggressive growth strategy, or a distributor mis-selling products), not only from external, statistically-modellable factors, broadening risk assessment to include genuine governance and conduct risks.",
          note: "This connects directly to the governance-and-conduct-risk theme developed in this course.",
        },
      ],
    },
    {
      id: "sp1-q4",
      title: "Reinsurance and underwriting as risk management",
      modules: "Modules 27, 28",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "A health and care insurer writes &pound;2,000,000 of gross premium on a critical illness account and retains 65% under a quota share reinsurance treaty. Calculate the retained premium and the ceded premium.",
          answer:
            "Retained premium = &pound;2,000,000 &times; 65% = &pound;1,300,000. Ceded premium = &pound;2,000,000 &minus; &pound;1,300,000 = &pound;700,000.",
          note: "Arithmetic check: 2,000,000×0.65=1,300,000; ceded=700,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer might prefer quota share reinsurance across its whole CI book rather than surplus reinsurance.",
          answer:
            "Quota share provides straightforward, proportional risk and capital relief across the whole book by ceding a fixed proportion of every policy's risk and premium, valuable for broad-based support across an entire portfolio, whereas surplus reinsurance is better suited to portfolios with widely varying individual policy sizes where retention should vary by risk size.",
          note: "A strong answer distinguishes quota share's uniform proportional structure from surplus reinsurance's size-based retention.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine factors this insurer should consider when determining its underwriting approach for this CI product.",
          answer:
            "The genuine cost of underwriting relative to the risk being assessed, the size and duration of the policy (a long-duration CI product warrants more rigorous underwriting than a short one-year product, since mispricing cannot easily be corrected through repricing), the insurer's own risk appetite and pricing confidence without full underwriting, and the competitive/distribution implications of a more or less rigorous underwriting process (more rigorous underwriting can deter time-pressed applicants).",
          note: "A strong answer addresses multiple genuine factors (cost, policy characteristics, risk appetite, distribution implications), not just one in isolation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why underwriting and reinsurance are complementary, rather than substitute, risk management techniques.",
          answer:
            "Underwriting manages risk at the point of individual policy selection (deciding who to insure and at what price), while reinsurance manages risk after that selection has been made (transferring some of the resulting portfolio risk to a third party) — together they address different stages of the risk management process, not the same underlying problem twice.",
          note: "This connects directly to the complementary-techniques theme developed in this course.",
        },
      ],
    },
    {
      id: "sp1-q5",
      title: "Asset-liability matching for a mixed health and care book",
      modules: "Module 29",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an insurer with both a PMI book and a long term care book should categorise its liabilities into different types before setting an asset-liability matching strategy.",
          answer:
            "Different liability types (short-tail PMI claims versus long-tail LTC benefit payments) have different duration and cashflow certainty characteristics, so a single, undifferentiated matching strategy applied to all liabilities together would fail to appropriately match any of them individually — categorisation is the essential precursor to sound matching strategy.",
          note: "A strong answer explicitly explains <em>why</em> categorisation is necessary before matching, not just states that liabilities should be categorised.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the PMI book's matching strategy should differ from the LTC book's.",
          answer:
            "PMI's short claim tail and annual repricing mean its liabilities are far less interest-rate sensitive over a long horizon, so its matching strategy can reasonably prioritise liquidity for near-term claims payment, while LTC's long-duration liabilities require genuine long-duration matching (e.g. long-dated bonds) to protect against interest rate risk over a much longer horizon.",
          note: "A strong answer explicitly contrasts the two books' duration characteristics and resulting strategy implications.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two further ways (beyond reinsurance, underwriting, and asset-liability matching) this insurer could manage the risks it faces across its mixed book.",
          answer:
            "Claims management: sound claims handling processes (e.g. rigorous validation of claimed conditions against policy definitions) can reduce the risk of overpayment or fraud. Data checks: robust data quality controls reduce the genuine foundational risk that poor data undermines pricing, reserving, and experience monitoring across the whole book. Product design itself (Modules 7–8) is also a genuine risk management tool, shaping the risk the insurer takes on before it is even written.",
          note: "Any two distinct, well-explained further risk management approaches should be accepted from the official syllabus list.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the genuine principles of investment for this insurer should balance security against return, rather than simply maximising expected return.",
          answer:
            "Investment strategy should reflect the nature, term and currency of the insurer's liabilities, balancing security against return and providing sufficient liquidity to meet claims and expenses as they fall due, since maximising expected return alone (ignoring liability matching) could expose the insurer to genuine solvency risk if asset values and liability values move unfavourably out of step.",
          note: "This connects directly to CM2's core matching-versus-return-maximisation principle.",
        },
      ],
    },
    {
      id: "sp1-q6",
      title: "Modelling and pricing an income protection product",
      modules: "Modules 12, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "An insurer is pricing a one-year renewable income protection rider with an annual benefit of &pound;20,000 payable on claim. The assumed annual claim incidence rate is 0.006, and expenses are assumed to be 12% of the gross premium, with no discounting within the one-year term. Using the equation of value, calculate the required annual premium.",
          answer:
            "Expected cost of benefits = 0.006 &times; &pound;20,000 = &pound;120. Setting gross premium P such that P &times; (1 &minus; 0.12) = &pound;120 gives P = &pound;120 / 0.88 = &pound;136.36 (to the nearest penny).",
          note: "Arithmetic check: 0.006×20000=120; 120/0.88=136.36. Full marks require setting up the equation of value explicitly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why a multi-state model, rather than a single formula-based equation of value, would be needed to price a longer-term version of this IP product with duration-dependent recovery rates.",
          answer:
            "A multi-state model represents a policyholder as moving between distinct states (e.g. healthy, claiming, recovered) with defined transition probabilities that can vary by duration since claim onset, capturing this complexity in a way a simple, closed-form equation of value cannot, since IP claims involve multiple possible states and transitions, not a single binary trigger.",
          note: "This connects directly to CS2's multi-state modelling material applied to a genuine IP pricing context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why sensitivity analysis should be carried out alongside the pricing calculation in part (i), rather than treating the calculated premium as a single, fixed answer.",
          answer:
            "Sensitivity analysis reveals how much the calculated premium changes when key assumptions (e.g. the incidence rate or expense loading) are varied, showing which assumptions the result is most exposed to — without this, a single-point premium could give false confidence, since the premium is only as reliable as the assumptions used to calculate it.",
          note: "A strong answer explicitly connects sensitivity analysis to the genuine uncertainty in the underlying assumptions, not just asserts it is 'good practice'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this same underlying model might need different assumptions if it were being used to project solvency rather than to price this product.",
          answer:
            "Pricing typically uses best-estimate or lightly-margined assumptions to determine a competitive, sustainable premium, while solvency projection typically requires more prudent assumptions reflecting genuine concern for policyholder protection under adverse conditions, so the same model structure can require different assumption inputs depending on its specific purpose.",
          note: "This connects the numeric pricing calculation directly to the assumption-purpose material developed later in this course.",
        },
      ],
    },
    {
      id: "sp1-q7",
      title: "Supervisory reserves and solvency capital",
      modules: "Modules 22, 23",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A health and care insurer's best estimate reserve for a block of business is &pound;15,000,000, with an assumed standard deviation of outcomes of 8% of the reserve. Using a Value at Risk approach with a 99.5% confidence level (z-score of 2.576), calculate the solvency capital requirement.",
          answer:
            "Standard deviation = 8% &times; &pound;15,000,000 = &pound;1,200,000. Solvency capital requirement = &pound;1,200,000 &times; 2.576 = &pound;3,091,200 (to the nearest &pound;100).",
          note: "Arithmetic check: 15,000,000×0.08=1,200,000; 1,200,000×2.576=3,091,200. Marks are typically split across identifying the standard deviation and the final VaR-based capital figure.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain the difference between the purpose of the &pound;15,000,000 best estimate reserve and the &pound;3,091,200 solvency capital requirement calculated in part (i).",
          answer:
            "The reserve ensures the insurer holds sufficient assets to meet its genuine expected liabilities, while the solvency capital requirement provides an additional buffer protecting against the genuine risk that actual experience diverges adversely from that expectation — the two figures address different levels of protection.",
          note: "A strong answer explicitly distinguishes the <em>expected</em> liability cover from the <em>additional</em> buffer against adverse deviation.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why the strength of this insurer's reserving basis and the level of solvency capital required interact, rather than being determined in complete isolation from each other.",
          answer:
            "A more prudently-set reserve already provides some of the genuine protection against adverse deviation that solvency capital is otherwise meant to provide, so the appropriate level of solvency capital depends on how prudent the reserving basis already is — the two figures interact rather than being determined independently.",
          note: "This directly tests the official syllabus's explicit interplay objective.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on the difference between a 'passive' and an 'active' valuation approach in the context of determining this insurer's reserves.",
          answer:
            "A passive valuation approach applies a fixed, prescribed set of rules or assumptions consistently regardless of the insurer's own specific circumstances, while an active approach allows the insurer's own genuine judgement and specific experience to inform the valuation basis, within any regulatory constraints that apply.",
          note: "This connects directly to the standard-formula-versus-internal-model distinction developed further at SA1 level.",
        },
      ],
    },
    {
      id: "sp1-q8",
      title: "Setting assumptions for pricing, reserving and embedded value",
      modules: "Modules 14, 15, 16, 17",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between the genuine purpose of assumptions used for pricing, for determining liabilities, and for determining embedded value, for the same underlying health and care risk.",
          answer:
            "Pricing assumptions must recover the insurer's cost of capital and target margin to be commercially sustainable, so they typically include an explicit profit requirement. Liability (reserving) assumptions are typically set with genuine prudence to protect policyholders, reflecting what the insurer expects to pay out plus a margin. Embedded value assumptions should be realistic, best-estimate expectations of future experience, since embedded value aims to capture the true expected economic value of in-force business, which prudent reserving assumptions would understate.",
          note: "A complete answer distinguishes all three purposes clearly (profit-inclusive, prudent, and best-estimate respectively), not just contrasts two of the three.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why setting assumptions for a new health and care product with limited own claims experience requires particular judgement.",
          answer:
            "Without substantial own experience data, assumption-setting must rely more heavily on external data, comparable products, and genuine actuarial judgement, blending limited own information with external sources according to credibility-theory principles rather than relying on a purely statistical, own-experience-based estimate.",
          note: "This connects directly to CS1's credibility theory material applied to a genuine assumption-setting context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why an actuary should be able to justify their assumption choices with genuine, documented reasoning, rather than simply asserting a figure.",
          answer:
            "Since assumption-setting involves judgement rather than purely mechanical calculation, transparent, well-documented reasoning allows the assumption to be reviewed, challenged, and understood by others (e.g. peer reviewers, auditors, regulators), supporting the professional accountability expected of actuarial work and helping ensure the assumption is sound rather than arbitrary.",
          note: "A strong answer connects documentation to genuine professional accountability, not just describes it as good administrative practice.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why reserving assumptions for a health and care insurer may be different from those used in pricing for the same product.",
          answer:
            "Supervisory reserves are typically set with genuine prudence to protect policyholders under a regulator's oversight, while pricing assumptions are typically best-estimate (or lightly margined) to remain competitive, so the same underlying risk can warrant a more cautious figure for reserving than for pricing.",
          note: "This connects directly to the reserving-versus-pricing-purpose distinction developed in this module.",
        },
      ],
    },
    {
      id: "sp1-q9",
      title: "Monitoring experience for a critical illness account",
      modules: "Module 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why it is important for a health and care insurer to monitor its actual claims experience against its pricing and reserving assumptions.",
          answer:
            "Comparing actual experience against the assumptions used in pricing and reserving reveals whether those assumptions remain appropriate, allowing timely correction before mispriced or under-reserved business accumulates to a materially damaging scale.",
          note: "This directly recalls the assumption-verification purpose of experience monitoring.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer's experience monitoring should track incidence rates separately for each covered CI condition, rather than a single combined incidence rate.",
          answer:
            "Different conditions can experience different trends (e.g. medical advances improving cancer survival while other conditions remain stable), so a single combined rate could mask offsetting movements that each individually warrant distinct assumption review.",
          note: "A strong answer explains <em>why</em> aggregation can mislead, not just asserts that granular monitoring is 'better'.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why this insurer should investigate whether an observed adverse incidence variance reflects genuine random fluctuation or a persistent trend, before deciding whether to revise its pricing assumption.",
          answer:
            "A single period's adverse experience could be genuine random noise around an unchanged underlying rate, so distinguishing genuine trend change from random fluctuation avoids over-reacting to noise while still catching important shifts — revising the assumption based on noise alone could introduce unnecessary pricing change, while ignoring a genuine trend could leave the insurer mispriced going forward. This requires genuine statistical judgement about the significance of the observed variance relative to what random fluctuation alone would typically produce.",
          note: "A strong answer explicitly frames this as a statistical-significance judgement, connecting to CS1's hypothesis-testing material.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why poor data quality could undermine this whole experience monitoring exercise.",
          answer:
            "Since experience monitoring's conclusions depend entirely on the underlying exposure and claims data, poor data quality can produce misleading conclusions about whether assumptions need revision, regardless of how sound the statistical analysis technique applied to that data actually is.",
          note: "This connects directly to data as the foundational risk source identified elsewhere in this course.",
        },
      ],
    },
    {
      id: "sp1-q10",
      title: "Analysis of surplus for a health and care insurer",
      modules: "Module 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A health and care insurer's total surplus for the year was &pound;620,000, against an expected surplus of &pound;500,000 under its original assumptions. Of the total variance, &pound;80,000 is attributed to a deliberate assumption change made during the year. Calculate the total variance and the resulting experience variance.",
          answer:
            "Total variance = &pound;620,000 &minus; &pound;500,000 = &pound;120,000. Experience variance = &pound;120,000 &minus; &pound;80,000 (assumption change) = &pound;40,000.",
          note: "Arithmetic check: 620,000-500,000=120,000; 120,000-80,000=40,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the &pound;500,000 expected surplus in part (i) typically represents the largest, most predictable component of a surplus analysis.",
          answer:
            "Prudent pricing and reserving assumptions build in margins that are expected to emerge as surplus over time purely through the passage of time and survival of the assumptions, forming a predictable baseline against which actual variances can be meaningfully compared.",
          note: "A strong answer connects the expected component to prudent margins built into the original assumptions.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the &pound;80,000 assumption change and the &pound;40,000 experience variance calculated in part (i) should be reported as distinct components, rather than a single combined 'unexpected' figure.",
          answer:
            "An experience variance reflects a single period's actual outcome differing from assumption (which may or may not persist), while an assumption change reflects a genuine, deliberate revision to future expectations — conflating them would obscure whether the total unexpected movement is a one-off (experience variance) or a persistent, forward-looking change (assumption change), reducing the analysis's diagnostic value for management.",
          note: "A strong answer explicitly explains why conflating these two components would reduce the analysis's usefulness, not just states they should be kept separate.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on how the results of this surplus analysis could be used by the insurer's management.",
          answer:
            "The results can inform whether pricing or reserving assumptions need revision, highlight areas of the business requiring closer management attention, support the ongoing solvency and capital assessment process, and provide genuine evidence supporting decisions about strategy and product mix going forward.",
          note: "This connects the numeric decomposition directly to its genuine, practical management value.",
        },
      ],
    },
  ],
});

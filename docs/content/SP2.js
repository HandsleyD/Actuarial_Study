// SP2 Life Insurance Principles: flashcards and practice questions.
//
// Hand-edited. docs/content/README.md describes the format and its rules,
// above all that cards are append-only: a card's identity is its position.
// After editing, run: node scripts/build-catalog.mjs
registerContent("SP2", {
  modules: [
      {
          "id": "m01",
          "title": "Life insurance products 1",
          "description": "Products paying benefits on death — term assurance in its various forms and whole life assurance — with the consumer needs they meet, the risks to the insured, and the purpose and key risks for the insurer. (Syllabus 1.1–1.2; ActEd numbers the four product chapters rather than naming them, so this deck groups the death-benefit products here.)",
          "cards": [
              {
                  "q": "What is term assurance?",
                  "a": "A contract paying a sum assured if the life insured dies within a specified term; nothing is paid on survival to the end of the term.",
                  "explain": "Pure protection: cheap because most policies expire without a claim, so premiums are mostly the cost of mortality risk plus expenses and profit."
              },
              {
                  "q": "What consumer need does level term assurance meet?",
                  "a": "Protection of dependants against the financial loss caused by the policyholder's death during a period of need, e.g. while children are young.",
                  "explain": "The benefit is fixed in money terms, so inflation erodes it — hence increasing-term variants."
              },
              {
                  "q": "What is decreasing term assurance, and a typical use?",
                  "a": "Term assurance whose sum assured falls over the term, typically in line with the outstanding balance of a repayment mortgage.",
                  "explain": "The insurer's risk falls over time, so premiums are lower than for level term and often payable for a shorter period than the term to limit lapse anti-selection."
              },
              {
                  "q": "What is a renewable term assurance?",
                  "a": "Term assurance giving the right to take out a new term policy at the end of the term without further evidence of health, at the premium rates then applying for the attained age.",
                  "explain": "The option creates anti-selection risk: those in poor health are more likely to renew — see the cost of options chapter."
              },
              {
                  "q": "What is a convertible term assurance?",
                  "a": "Term assurance with an option to convert to a whole life or endowment policy without evidence of health, during the term.",
                  "explain": "Lives in poor health are more likely to convert, so the insurer must charge for the option."
              },
              {
                  "q": "What is whole life assurance?",
                  "a": "A contract paying the sum assured on death whenever it occurs.",
                  "explain": "Because death is certain, the policy builds up a reserve and usually a surrender value — part protection, part savings."
              },
              {
                  "q": "What consumer needs can whole life assurance meet?",
                  "a": "Lifelong protection for dependants, providing funds for inheritance tax or funeral costs, and (for with-profits or unit-linked versions) a long-term savings element.",
                  "explain": "The insured's risk is paying premiums for a long time; lapsing early can lose value if surrender values are low."
              },
              {
                  "q": "What is the main risk to the insurer from term assurance?",
                  "a": "Mortality risk — more deaths than assumed — including anti-selection by those who know they are in poor health, and catastrophe risk (e.g. pandemic).",
                  "explain": "Underwriting and reinsurance are the main risk management tools for term business."
              },
              {
                  "q": "Why might an insurer lose money if term assurance policies lapse late in the term?",
                  "a": "Level premiums exceed the mortality cost early and fall short later for some designs; if healthy lives lapse, the remaining lives are worse risks (selective lapsation).",
                  "explain": "Persistency risk for protection products is about the quality of the remaining lives as well as expense recovery."
              },
              {
                  "q": "What is a 'joint life' assurance?",
                  "a": "A policy covering two lives, typically paying on the first death (joint life first death) or on the second (last survivor).",
                  "explain": "Last survivor whole life policies are often used for inheritance tax planning, since tax typically falls due on the second death."
              },
              {
                  "q": "What is a family income benefit policy?",
                  "a": "A decreasing term assurance paying a regular income from death until the end of the term, rather than a lump sum.",
                  "explain": "Matches the need to replace lost income for the remaining years that dependants need support."
              },
              {
                  "q": "What is the purpose of a whole life policy for the insurer?",
                  "a": "To provide a long-term product that generates profit through margins on mortality, investment and expenses, and to build customer relationships.",
                  "explain": "Long-term guarantees expose the insurer to investment and mortality risk over decades."
              },
              {
                  "q": "What is the key risk to the insured from a without-profits whole life policy?",
                  "a": "Inflation eroding the real value of a fixed sum assured, and poor value if the policy is surrendered early.",
                  "explain": "With-profits or unit-linked versions share investment returns with the policyholder to address the inflation issue."
              },
              {
                  "q": "Why might a term assurance premium be guaranteed or reviewable?",
                  "a": "Guaranteed premiums give policyholders certainty but leave the insurer bearing mortality-trend risk; reviewable premiums let the insurer adjust if experience worsens, reducing its risk and the price.",
                  "explain": "Reviewable premiums are a design lever that shifts risk from insurer to policyholder."
              },
              {
                  "q": "What is accelerated critical illness cover in a term policy?",
                  "a": "A benefit paying the sum assured early if the life insured is diagnosed with a specified serious illness, with the death benefit reduced accordingly.",
                  "explain": "It adds morbidity risk and definitional risk (claims depend on precise illness definitions)."
              }
          ]
      },
      {
          "id": "m02",
          "title": "Life insurance products 2",
          "description": "Products paying benefits on survival — endowment assurances, pure endowments, immediate and deferred annuities and savings products — with their consumer needs, the risks to the insured and the insurer's purpose and key risks. (Syllabus 1.1–1.2.)",
          "cards": [
              {
                  "q": "What is an endowment assurance?",
                  "a": "A contract paying the sum assured on the earlier of death within the term and survival to the end of the term.",
                  "explain": "Largely a savings product with life cover attached; premiums are much higher than for term assurance."
              },
              {
                  "q": "What is a pure endowment?",
                  "a": "A contract paying a benefit only on survival to the end of the term; nothing is paid on earlier death (or only a return of premiums).",
                  "explain": "Rarely sold alone; its survival-contingent structure appears within deferred annuities and pension products."
              },
              {
                  "q": "What is an immediate annuity?",
                  "a": "A contract bought with a single premium that pays a regular income for life (or a specified period), starting immediately.",
                  "explain": "The main risk for the insurer is longevity: pensioners living longer than assumed."
              },
              {
                  "q": "Name three variations of immediate annuities.",
                  "a": "Level or escalating (fixed rate or index-linked) payments; joint life/last survivor annuities continuing to a spouse; guaranteed payment periods; capital-protected annuities; impaired-life (enhanced) annuities.",
                  "explain": "Each variation changes the insurer's longevity, inflation or investment risk profile."
              },
              {
                  "q": "What is an impaired-life (enhanced) annuity?",
                  "a": "An annuity paying a higher income to someone whose health or lifestyle suggests below-average life expectancy.",
                  "explain": "It requires underwriting at the point of sale; it lets insurers compete for poorer-health lives, affecting the mortality of the standard annuity pool."
              },
              {
                  "q": "What is a deferred annuity?",
                  "a": "A contract under which an annuity starts at a future date, bought by single or regular premiums.",
                  "explain": "Long deferral periods mean big exposure to interest-rate and longevity assumptions made far in advance."
              },
              {
                  "q": "What needs do savings endowments meet?",
                  "a": "Regular disciplined saving for a future target (e.g. repaying a mortgage or funding education), with life cover in case of earlier death.",
                  "explain": "Tax treatment historically drove much of the demand for endowments."
              },
              {
                  "q": "What is the main risk to the insurer from an annuity?",
                  "a": "Longevity risk and investment risk (reinvestment and default risk on the backing assets).",
                  "explain": "Annuity business is typically backed by long-dated bonds matched to the expected payments."
              },
              {
                  "q": "What is the main risk to the policyholder from buying an annuity?",
                  "a": "Irreversibility and the risk of dying early (poor value), plus inflation eroding level annuities; also insurer insolvency.",
                  "explain": "Guarantee periods and value protection features address early-death concerns."
              },
              {
                  "q": "What is an income drawdown product?",
                  "a": "An arrangement keeping a retirement fund invested while the policyholder draws an income from it, rather than buying an annuity.",
                  "explain": "The policyholder keeps investment and longevity risk; the insurer mainly earns charges."
              },
              {
                  "q": "What is a single-premium investment bond?",
                  "a": "A unit-linked (or with-profits) contract where a lump sum is invested and the value depends on the underlying fund, often with a small death benefit.",
                  "explain": "Low insurance risk; the insurer's risks are mainly expense and persistency."
              },
              {
                  "q": "Why might an insurer sell annuities despite longevity risk?",
                  "a": "Annuities provide steady income from investment margins on large, stable funds, diversify against mortality risk from protection business, and meet customer demand from pension savers.",
                  "explain": "Diversification between protection (loses on deaths) and annuities (loses on survival) is a natural hedge."
              },
              {
                  "q": "What is a 'with-profits' endowment?",
                  "a": "An endowment whose sum assured is increased by bonuses reflecting the insurer's investment and other experience.",
                  "explain": "The bonus mechanism and its management are covered in the with-profits chapters."
              },
              {
                  "q": "What is the risk to the insured of an endowment for mortgage repayment?",
                  "a": "The maturity value may be less than the loan if investment returns disappoint (for with-profits or unit-linked endowments).",
                  "explain": "This risk led to widespread complaints in some markets when returns fell short of the illustrations used at sale."
              },
              {
                  "q": "How do annuity products link to consumer needs in retirement?",
                  "a": "They convert a capital sum into secure lifetime income, removing longevity risk from the individual.",
                  "explain": "The alternative, drawdown, gives flexibility at the cost of retaining risk."
              }
          ]
      },
      {
          "id": "m03",
          "title": "Life insurance products 3",
          "description": "The product bases — conventional without-profits, with-profits (conventional and accumulating), unit-linked and index-linked — how each shares risk between policyholder and insurer, and the charging structures of unit-linked contracts. (Syllabus 1.1.2.)",
          "cards": [
              {
                  "q": "List the four main product bases in SP2.",
                  "a": "Conventional without-profits; with-profits; unit-linked; index-linked.",
                  "explain": "The basis determines how investment (and other) risks are shared between the policyholder and insurer."
              },
              {
                  "q": "What is a conventional without-profits contract?",
                  "a": "One where premiums and benefits are fixed in money terms at the outset; the insurer bears all the investment, mortality and expense risk.",
                  "explain": "Pricing needs prudent assumptions since nothing can be recouped later."
              },
              {
                  "q": "What is a conventional with-profits contract?",
                  "a": "One with a guaranteed sum assured to which bonuses are added (reversionary during the term, terminal at claim), reflecting the insurer's experience.",
                  "explain": "Policyholders share in profits (and losses through lower bonuses); the insurer uses discretion to smooth returns."
              },
              {
                  "q": "What is an accumulating (unitised) with-profits contract?",
                  "a": "One where premiums buy units in a with-profits fund whose value grows with declared bonus rates (often guaranteed not to fall), plus terminal bonus, with market value reductions possible on surrender.",
                  "explain": "Combines the transparency of unit-linked with the smoothing of with-profits."
              },
              {
                  "q": "What is a unit-linked contract?",
                  "a": "One where premiums (after charges) buy units in an investment fund; the policy value is the value of the units, so the policyholder bears the investment risk.",
                  "explain": "The insurer earns charges; its main risks are expenses and persistency, not investment."
              },
              {
                  "q": "Name five charges that may be applied to a unit-linked contract.",
                  "a": "Less than 100% allocation; bid-offer spread; annual management charge; policy fee; mortality (and morbidity) charges for death cover; surrender penalties; switching charges.",
                  "explain": "Charges are designed to recover expenses and profit over the policy's life."
              },
              {
                  "q": "What is an index-linked contract?",
                  "a": "A contract whose benefits (and possibly premiums) are linked to an index — typically a price index (e.g. index-linked annuity) or an equity index (e.g. a guaranteed equity bond).",
                  "explain": "The insurer needs assets or derivatives that replicate the index to manage risk."
              },
              {
                  "q": "What is a guaranteed equity bond?",
                  "a": "A product returning the initial investment plus a share of any rise in an equity index over a fixed term, with capital guaranteed.",
                  "explain": "Usually backed by a zero-coupon bond plus a call option on the index."
              },
              {
                  "q": "How does risk sharing differ between without-profits and unit-linked contracts?",
                  "a": "Without-profits: insurer bears investment risk. Unit-linked: policyholder bears investment risk, insurer bears expense and some mortality risk.",
                  "explain": "Capital requirements are therefore much higher for guaranteed without-profits business."
              },
              {
                  "q": "Why do unit-linked contracts need non-unit reserves?",
                  "a": "Future charges might not cover future expenses and benefits in some years (e.g. mortality costs rising with age), so reserves outside the unit fund are needed to avoid future negative cash flows.",
                  "explain": "Covered further in the supervisory reserves chapters."
              },
              {
                  "q": "What is a market value reduction (MVR)?",
                  "a": "A reduction applied to the value of an accumulating with-profits policy on surrender, when the underlying asset value is below the policy's accumulated value.",
                  "explain": "It protects remaining policyholders from those leaving when asset values are low."
              },
              {
                  "q": "Why might an insurer prefer unit-linked business?",
                  "a": "Lower capital needs and investment risk; transparency attracts customers; profits come from charges.",
                  "explain": "Profitability depends on persistency and expense control."
              },
              {
                  "q": "Why might a policyholder prefer with-profits?",
                  "a": "Smoothed returns, guarantees and participation in investment gains with less volatility than unit-linked.",
                  "explain": "The cost is less transparency and the insurer's discretion in bonus declarations."
              },
              {
                  "q": "What is a 'unit-linked with guarantee' product?",
                  "a": "A unit-linked policy with a minimum benefit (e.g. return of premiums on maturity or death).",
                  "explain": "Such guarantees are investment options valued in the cost-of-guarantees chapter."
              },
              {
                  "q": "Why does the product basis affect the insurer's investment strategy?",
                  "a": "Guaranteed money liabilities call for bonds; unit-linked liabilities are matched by holding the units; with-profits allows more freedom to hold equities because bonuses can adjust.",
                  "explain": "This is the liability categorisation used in the investment chapter."
              }
          ]
      },
      {
          "id": "m04",
          "title": "Life insurance products 4",
          "description": "Guarantees and options commonly offered on life insurance products — guaranteed surrender values, guaranteed annuity rates, guaranteed insurability, conversion and renewal options, premium waiver — and how products, consumer needs and insurer risks fit together across the range. (Syllabus 1.1.3 and 1.2.)",
          "cards": [
              {
                  "q": "Give five typical guarantees or options on life insurance products.",
                  "a": "Guaranteed surrender or paid-up values; guaranteed maturity values; guaranteed annuity rates; options to increase cover without evidence; renewal and conversion options; waiver of premium; guaranteed premium rates.",
                  "explain": "Guarantees shift risk to the insurer; options give the policyholder choice that may be exercised against the insurer."
              },
              {
                  "q": "What is a guaranteed insurability option?",
                  "a": "The right to increase the sum assured on specified events (e.g. marriage, birth of a child, moving house) without further medical evidence.",
                  "explain": "Those in poor health are more likely to exercise it — a mortality option with anti-selection cost."
              },
              {
                  "q": "What is a guaranteed annuity rate (GAR)?",
                  "a": "A guaranteed rate for converting a maturing fund into an annuity; valuable to the policyholder if market annuity rates fall below it.",
                  "explain": "GARs became very costly when interest rates fell and longevity rose — a classic example of an underpriced option."
              },
              {
                  "q": "What is a waiver of premium benefit?",
                  "a": "A benefit under which future premiums are paid by the insurer if the policyholder becomes disabled (or dies, for a payer benefit).",
                  "explain": "Adds morbidity risk and definitional risk for the insurer."
              },
              {
                  "q": "Why are options valuable to policyholders?",
                  "a": "They give flexibility to adapt to changing circumstances without new underwriting or at guaranteed terms.",
                  "explain": "Their value to the policyholder is a cost to the insurer, which should be priced."
              },
              {
                  "q": "What is the link between consumer needs and product types?",
                  "a": "Protection needs → term and whole life; savings needs → endowments, bonds; retirement income → annuities; flexibility → options; certainty → guarantees.",
                  "explain": "Syllabus 1.2 asks for this link together with key risks for the insured and insurer."
              },
              {
                  "q": "What are the key risks for the insurer from guarantees?",
                  "a": "Investment risk (e.g. returns below guaranteed levels), interest-rate risk, longevity risk (GARs), and the risk of mispricing because guarantees look cheap when out of the money.",
                  "explain": "Stochastic methods help value them (see the cost of guarantees chapter)."
              },
              {
                  "q": "What is a guaranteed surrender value?",
                  "a": "A surrender value fixed in advance under the policy terms, rather than set at the insurer's discretion at the time of surrender.",
                  "explain": "It exposes the insurer to asset values being low when surrenders occur."
              },
              {
                  "q": "What is a 'paid-up' option?",
                  "a": "The right to stop paying premiums and keep a reduced benefit in force.",
                  "explain": "Paid-up values need to be fair and consistent with surrender values."
              },
              {
                  "q": "Why might a product include a capital guarantee on death?",
                  "a": "To ensure that beneficiaries receive at least the premiums paid if death occurs soon after purchase, making investment products more attractive.",
                  "explain": "The cost is a combination of mortality and investment risk."
              },
              {
                  "q": "What is a 'free switch' option in unit-linked products?",
                  "a": "The right to move between unit funds without charge (up to a limit).",
                  "explain": "It creates administration cost and possible selection against the insurer's dealing costs."
              },
              {
                  "q": "Why might an insurer restrict options?",
                  "a": "To limit anti-selection, reduce cost, and control exposure — e.g. limiting the amount that can be increased or setting age limits.",
                  "explain": "Restrictions reduce the product's attractiveness, so a balance is needed."
              },
              {
                  "q": "What is meant by an option being 'in the money'?",
                  "a": "The option currently has positive value to the policyholder if exercised (e.g. a GAR above the market annuity rate).",
                  "explain": "Out-of-the-money options still have time value — they may become valuable later."
              },
              {
                  "q": "Why should product literature explain guarantees and options clearly?",
                  "a": "So customers understand the value they receive and the conditions for exercising options; also to avoid mis-selling and complaints.",
                  "explain": "Regulatory conduct rules require clear communication."
              },
              {
                  "q": "How do guarantees affect capital requirements?",
                  "a": "Guarantees increase the capital needed to cover adverse scenarios where they bite.",
                  "explain": "This cost must be reflected in pricing (cost of capital)."
              }
          ]
      },
      {
          "id": "m05",
          "title": "Asset shares",
          "description": "What an asset share is, how it is built up recursively from premiums, expenses, claims costs and investment returns, and its main uses in managing with-profits business — terminal bonus, surrender values, bonus policy and the estate. (Syllabus 2.2.2.)",
          "cards": [
              {
                  "q": "What is an asset share?",
                  "a": "The accumulated value of premiums paid by a policy (or group of policies), less expenses, charges for the cost of benefits and other deductions, plus investment return actually earned.",
                  "explain": "It represents the policy's share of the fund, based on actual experience."
              },
              {
                  "q": "Write the basic recursive formula for an asset share.",
                  "a": "$AS_{t+1} = (AS_t + P_t - E_t)(1 + i_t) - q_t (S_t - AS_{t+1}) - \\ldots$, i.e. the previous asset share plus premium less expenses, rolled up at the actual return, less the cost of death benefits in excess of the asset share (and other deductions such as tax and cost of guarantees).",
                  "explain": "Different offices use different conventions for the cost of cover; the principle is 'what has this policy contributed and earned'."
              },
              {
                  "q": "What items can be deducted in an asset share calculation?",
                  "a": "Expenses and commission; cost of death (and other) benefits in excess of the asset share; tax; charges for guarantees and capital support; and possibly a contribution to the estate.",
                  "explain": "Whether to charge for guarantees is an important policy decision."
              },
              {
                  "q": "What is the main use of asset shares for with-profits business?",
                  "a": "Setting terminal bonuses so that maturity payouts are close to asset shares (subject to smoothing).",
                  "explain": "This is the fairness principle: policyholders receive broadly what their premiums have earned."
              },
              {
                  "q": "How can asset shares be used for surrender values?",
                  "a": "Surrender values can be set close to asset shares (perhaps less a deduction), ensuring fairness between leaving and continuing policyholders.",
                  "explain": "Paying more than asset share would transfer value from continuing policyholders."
              },
              {
                  "q": "How are asset shares used in bonus policy?",
                  "a": "Comparing guaranteed benefits (sum assured plus reversionary bonuses) with asset shares shows whether reversionary bonus rates are sustainable.",
                  "explain": "If guarantees approach or exceed asset shares, reversionary rates must fall."
              },
              {
                  "q": "What is the estate in a with-profits fund?",
                  "a": "The excess of assets over the amount needed to meet policyholders' reasonable expectations, i.e. assets minus total asset shares (and other liabilities).",
                  "explain": "The estate provides working capital and smoothing support; its fair use is a governance issue."
              },
              {
                  "q": "Why might asset shares be calculated for model points rather than individual policies?",
                  "a": "Individual calculations are complex; model points representing groups of similar policies give adequate accuracy more cheaply.",
                  "explain": "Results are then scaled to the whole portfolio."
              },
              {
                  "q": "What data is needed for asset share calculations?",
                  "a": "Premium history, expenses, investment returns by period, mortality experience, tax and charges, for each policy or group.",
                  "explain": "Historical data may be approximated where records are incomplete."
              },
              {
                  "q": "How do asset shares help assess the solvency of a with-profits fund?",
                  "a": "Total asset shares compared with assets show the size of the estate; comparing with guaranteed liabilities shows the cushion available.",
                  "explain": "A shrinking estate may require bonus cuts or capital injection."
              },
              {
                  "q": "What is 'smoothing' of payouts?",
                  "a": "Limiting year-on-year changes in payouts so that they do not fully reflect short-term asset movements, keeping them close to asset shares over the long run.",
                  "explain": "Smoothing costs (or profits) are borne by the estate."
              },
              {
                  "q": "Why might payouts deliberately differ from asset shares?",
                  "a": "Smoothing, guarantees biting, or distributing part of the estate.",
                  "explain": "Policies differ in duration and timing, so exact equality isn't feasible or desirable."
              },
              {
                  "q": "How are expenses allocated in asset share calculations?",
                  "a": "Using the office's actual expenses allocated to policies by type, duration and size, or using the expense charges assumed.",
                  "explain": "Allocation choice affects fairness between different policy types."
              },
              {
                  "q": "What is the effect of high investment returns on asset shares?",
                  "a": "Asset shares grow faster, supporting higher terminal bonuses.",
                  "explain": "Terminal bonus rates tend to rise after strong markets and fall after weak ones."
              },
              {
                  "q": "Why is the asset share a 'retrospective' measure?",
                  "a": "It accumulates actual past experience rather than projecting future cash flows.",
                  "explain": "Contrast prospective reserves, which look forward."
              }
          ]
      },
      {
          "id": "m06",
          "title": "With-profits surplus distribution 1",
          "description": "Methods of distributing profits to with-profits policyholders — reversionary bonus (simple, compound, super-compound), terminal bonus, cash and premium-reduction methods — and the factors that determine an insurer's choice. (Syllabus 2.2.1.)",
          "cards": [
              {
                  "q": "List the main methods of distributing profits to with-profits policyholders.",
                  "a": "Reversionary bonus (simple, compound, super-compound); terminal bonus; revalorisation; contribution method (cash dividends); premium reductions; bonus added to accumulating policies via bonus interest rates.",
                  "explain": "Each method differs in timing of distribution, flexibility and investment freedom."
              },
              {
                  "q": "What is a simple reversionary bonus?",
                  "a": "A bonus declared as a percentage of the basic sum assured only, added each year and guaranteed once added.",
                  "explain": "It distributes surplus slowly and evenly, giving flexibility to the insurer."
              },
              {
                  "q": "What is a compound reversionary bonus?",
                  "a": "A bonus declared as a percentage of the sum assured plus previously declared bonuses.",
                  "explain": "It gives a faster growth in guarantees than simple bonus."
              },
              {
                  "q": "What is a super-compound reversionary bonus?",
                  "a": "Two bonus rates: a lower rate on the sum assured and a higher rate on accumulated bonuses.",
                  "explain": "It defers distribution more to long-duration policies, retaining more flexibility early."
              },
              {
                  "q": "What is a terminal bonus?",
                  "a": "A bonus added at claim (death, maturity, possibly surrender), not guaranteed in advance, often set to bring payouts close to asset shares.",
                  "explain": "It gives the insurer flexibility to invest in equities and adjust for market conditions."
              },
              {
                  "q": "Why might an insurer defer distribution to terminal bonus?",
                  "a": "It maintains investment freedom, avoids locking in guarantees, and allows payouts to reflect actual returns.",
                  "explain": "Too much reliance on terminal bonus makes payouts volatile and less transparent."
              },
              {
                  "q": "What is the contribution method?",
                  "a": "Surplus is distributed as cash dividends each year based on each policy's contribution to surplus from interest, mortality and expenses.",
                  "explain": "Common in North America; distributes surplus quickly and fairly, but limits investment freedom."
              },
              {
                  "q": "What is revalorisation?",
                  "a": "A method where premiums and benefits are both increased periodically in line with a declared rate.",
                  "explain": "Used where profits are distributed by increasing both sides of the contract."
              },
              {
                  "q": "What factors influence the choice of distribution method?",
                  "a": "Investment freedom desired; policyholder expectations and marketing; fairness between generations; the need for smoothing; tax; regulation; systems; competitors.",
                  "explain": "The choice interacts with investment strategy and capital needs."
              },
              {
                  "q": "Why do reversionary bonuses constrain investment freedom?",
                  "a": "Once added, they are guaranteed, so the insurer must back them with suitable assets, limiting equity exposure.",
                  "explain": "Higher reversionary rates mean more guarantees and more matching assets."
              },
              {
                  "q": "What is policyholders' reasonable expectations (PRE)?",
                  "a": "The expectations a with-profits policyholder can reasonably have about the insurer's exercise of discretion, based on literature, past practice and regulation.",
                  "explain": "PRE constrains bonus policy and the use of the estate."
              },
              {
                  "q": "What is the difference between guaranteed and non-guaranteed benefits in with-profits?",
                  "a": "Sum assured and declared reversionary bonuses are guaranteed; terminal bonuses and future bonuses are not.",
                  "explain": "The balance between them determines the insurer's risk."
              },
              {
                  "q": "Why might a with-profits fund cut bonuses?",
                  "a": "Poor investment returns, reduced estate, or high guarantees relative to asset shares.",
                  "explain": "Communication and fairness considerations are central when cutting bonuses."
              },
              {
                  "q": "What is a cash bonus?",
                  "a": "A distribution paid directly in cash to policyholders rather than added to benefits.",
                  "explain": "It reduces the fund immediately and is less common for long-term savings products."
              },
              {
                  "q": "How can profits be used to reduce premiums?",
                  "a": "Surplus is applied to reduce future premiums rather than increase benefits.",
                  "explain": "It suits customers wanting lower outgoings rather than higher benefits."
              }
          ]
      },
      {
          "id": "m07",
          "title": "With-profits surplus distribution 2",
          "description": "Managing with-profits business in practice: bonus-setting processes, smoothing and its cost, use and fairness of the estate, the choice of bonus method as a risk management tool, and the governance of discretion. (Syllabus 2.2 and 3.5.)",
          "cards": [
              {
                  "q": "How is the reversionary bonus rate usually set?",
                  "a": "By comparing projected asset shares with guaranteed benefits under various scenarios and ensuring the bonus is sustainable, while meeting PRE and smoothing objectives.",
                  "explain": "Stochastic projections help test sustainability."
              },
              {
                  "q": "What is the cost of smoothing?",
                  "a": "The difference between smoothed payouts and asset shares, borne or funded by the estate.",
                  "explain": "Over time smoothing should be roughly cost-neutral; persistent costs deplete the estate."
              },
              {
                  "q": "How does the choice of bonus method act as a risk management tool?",
                  "a": "Favouring terminal over reversionary bonus keeps fewer guarantees, allowing more investment freedom and reducing capital strain.",
                  "explain": "Syllabus 3.5 lists 'choice of with-profits bonus method' as a risk management technique."
              },
              {
                  "q": "What is an inherited (orphan) estate?",
                  "a": "Part of the estate built up from past generations of policyholders that is not needed for current policyholders' expectations.",
                  "explain": "Its ownership and distribution are often contentious."
              },
              {
                  "q": "Why might an insurer use the estate to support new business?",
                  "a": "The estate can finance new business strain, allowing the fund to grow.",
                  "explain": "This must be weighed against fairness to existing policyholders."
              },
              {
                  "q": "What governance applies to with-profits discretion?",
                  "a": "Principles and practices of financial management documents, with-profits committees or actuaries, board oversight, and regulatory requirements.",
                  "explain": "Governance makes discretion accountable and transparent."
              },
              {
                  "q": "What is a Principles and Practices of Financial Management (PPFM) style document?",
                  "a": "A document setting out how the insurer manages its with-profits business, including bonus policy, smoothing and use of the estate.",
                  "explain": "It supports PRE by making policies explicit."
              },
              {
                  "q": "How should surplus be divided between shareholders and policyholders in a proprietary office?",
                  "a": "According to the fund's rules (e.g. 90:10), with shareholders receiving a fixed share of distributed surplus.",
                  "explain": "Deferring distribution to terminal bonus also defers shareholder transfers."
              },
              {
                  "q": "Why might terminal bonus rates vary by policy duration?",
                  "a": "Asset shares depend on the investment returns experienced over each policy's term; different start dates give different asset shares.",
                  "explain": "Terminal bonus scales are usually set by year of entry or duration."
              },
              {
                  "q": "What is the effect of guaranteed benefits exceeding asset shares?",
                  "a": "The insurer must fund the shortfall from the estate or shareholders, limiting future bonuses.",
                  "explain": "This happened widely after prolonged low interest rates and equity falls."
              },
              {
                  "q": "How can with-profits funds be closed to new business?",
                  "a": "The fund continues to run off existing policies, with the estate distributed gradually.",
                  "explain": "Closed funds must manage the tontine effect: the last policyholders shouldn't receive excessive distributions."
              },
              {
                  "q": "What is fairness between generations in with-profits?",
                  "a": "Ensuring each generation of policyholders receives a fair share of profits, not subsidised by or subsidising other generations.",
                  "explain": "Smoothing and estate use must balance this across generations."
              },
              {
                  "q": "How do market conditions affect terminal bonus?",
                  "a": "Strong markets increase asset shares and terminal bonuses; falling markets cause cuts, possibly with MVRs on surrender.",
                  "explain": "Smoothing limits the speed of changes."
              },
              {
                  "q": "Why is communication important in with-profits management?",
                  "a": "Policyholders need to understand non-guaranteed benefits and the discretion exercised; poor communication fuels complaints and regulatory action.",
                  "explain": "Annual bonus statements and PPFM summaries serve this role."
              },
              {
                  "q": "What is the link between bonus policy and capital requirements?",
                  "a": "Higher guaranteed benefits increase capital requirements; lower reversionary rates reduce them.",
                  "explain": "Capital constraints often drive bonus rate decisions."
              }
          ]
      },
      {
          "id": "m08",
          "title": "The general business environment 1",
          "description": "The commercial environment for life insurance: consumers' propensity to buy, local culture, methods of sale, remuneration of sales channels and the types of expenses and commission — including the effect of inflation. (Syllabus 1.3.)",
          "cards": [
              {
                  "q": "List the environmental factors affecting a life insurer (syllabus 1.3).",
                  "a": "Propensity to purchase; local culture; methods of sale; remuneration of sales channels; types of expenses and commission (including inflation); economic, legal, regulatory and tax environments; professional guidance.",
                  "explain": "This list is a ready structure for business-environment questions."
              },
              {
                  "q": "What factors influence consumers' propensity to buy life insurance?",
                  "a": "Wealth and income, State benefit levels, tax incentives, awareness and financial education, trust in insurers, cultural attitudes, and product availability.",
                  "explain": "Generous State provision reduces demand for private cover."
              },
              {
                  "q": "How can local culture affect life insurance business?",
                  "a": "Attitudes to risk, saving, discussing death, religion (e.g. demand for Islamic-compliant products), family structures and trust in institutions.",
                  "explain": "Products successful in one country may fail in another for cultural reasons."
              },
              {
                  "q": "List the main methods of sale for life insurance.",
                  "a": "Tied agents; independent financial advisers; direct sales (phone, internet, mail); bancassurance; employer-sponsored channels; aggregators/comparison sites.",
                  "explain": "Each channel has different costs, persistency and mis-selling risks."
              },
              {
                  "q": "What is bancassurance?",
                  "a": "Selling insurance products through a bank's customer base and branches.",
                  "explain": "Low acquisition cost and access to customers, but products must be simple and the bank relationship managed."
              },
              {
                  "q": "What is initial commission?",
                  "a": "A payment to the intermediary at the start of the policy, often a large proportion of the first year's premium.",
                  "explain": "It creates new business strain and a clawback risk if the policy lapses early."
              },
              {
                  "q": "What is renewal commission?",
                  "a": "Commission paid to the intermediary on subsequent premiums, often a small percentage.",
                  "explain": "It encourages intermediaries to maintain the relationship and support persistency."
              },
              {
                  "q": "What is indemnity commission?",
                  "a": "Commission paid up front on the expectation of future premiums, with clawback if the policy lapses within a specified period.",
                  "explain": "The insurer bears credit risk on clawbacks if the intermediary cannot repay."
              },
              {
                  "q": "What types of expenses does a life insurer incur?",
                  "a": "Initial expenses (underwriting, policy issue, marketing, commission); renewal expenses (administration, premium collection); claim expenses; investment expenses; overheads.",
                  "explain": "Allocation between fixed and variable, initial and renewal, matters for pricing."
              },
              {
                  "q": "How does inflation affect a life insurer's expenses?",
                  "a": "Renewal expenses rise with salary and price inflation, increasing the cost of maintaining policies over long terms.",
                  "explain": "Expense inflation is often assumed to exceed price inflation."
              },
              {
                  "q": "Why might commission structures affect persistency?",
                  "a": "High initial commission can encourage churning or mis-selling, leading to early lapses; level or renewal commission aligns intermediary incentives with persistency.",
                  "explain": "Commission design is a risk management tool for persistency."
              },
              {
                  "q": "How does distribution channel affect product design?",
                  "a": "Direct channels need simple products; advised channels can sell complex products; bancassurance suits packaged, simple products.",
                  "explain": "Design and channel must be chosen together."
              },
              {
                  "q": "Why might an insurer use a fee-based rather than commission-based channel?",
                  "a": "To reduce conflicts of interest, meet regulation banning commission, and improve customer trust.",
                  "explain": "Changes the insurer's expense pattern and product charges."
              },
              {
                  "q": "What are overhead expenses?",
                  "a": "Expenses not directly attributable to policies, e.g. head office costs, which must still be recovered through pricing.",
                  "explain": "Allocation of overheads is a key pricing judgement."
              },
              {
                  "q": "How can competition affect expenses and pricing?",
                  "a": "Pressure to reduce premiums or charges limits the margins available for expenses, forcing efficiency improvements.",
                  "explain": "Insurers may accept lower margins for strategic reasons."
              }
          ]
      },
      {
          "id": "m09",
          "title": "The general business environment 2",
          "description": "The economic, legal, regulatory and taxation environment in which life insurers operate, and the professional guidance governing actuaries' work, with their effect on products, pricing and management. (Syllabus 1.3.)",
          "cards": [
              {
                  "q": "How does the economic environment affect a life insurer?",
                  "a": "Interest rates, inflation, economic growth, unemployment and asset market performance affect demand for products, investment returns, expenses, persistency and the cost of guarantees.",
                  "explain": "Low interest rates make guarantees and annuities expensive and squeeze margins."
              },
              {
                  "q": "What are the two broad aims of regulating life insurers?",
                  "a": "Prudential regulation (ensuring insurers can meet their obligations — solvency) and conduct regulation (treating customers fairly, appropriate sales and disclosure).",
                  "explain": "Both shape product design and pricing."
              },
              {
                  "q": "Give four examples of prudential regulation of life insurers.",
                  "a": "Minimum capital requirements; reserving rules; restrictions on assets; requirements for risk management and governance; regular reporting; supervisory intervention powers.",
                  "explain": "These set the capital cost of writing business."
              },
              {
                  "q": "Give four examples of conduct regulation.",
                  "a": "Rules on disclosure of charges and features; suitability of advice; cooling-off periods; restrictions on commission; complaint-handling and ombudsman schemes; fair treatment of customers in product design.",
                  "explain": "Conduct failures can be very expensive through redress."
              },
              {
                  "q": "How can taxation affect life insurance products?",
                  "a": "Tax relief on premiums or tax-free benefits makes products more attractive; the tax on the insurer's investment income and profits affects pricing; tax changes can make products uncompetitive.",
                  "explain": "Many products exist largely because of their tax treatment."
              },
              {
                  "q": "What legal environment factors matter to a life insurer?",
                  "a": "Contract law (policy terms), consumer protection, data protection, discrimination law (e.g. use of gender in pricing), trust law and insolvency law.",
                  "explain": "Legal changes such as gender-neutral pricing rules can change product economics."
              },
              {
                  "q": "What professional guidance applies to life actuaries?",
                  "a": "Actuarial standards on data, modelling, assumptions and reporting; codes of conduct; guidance on specific roles (e.g. with-profits actuary, actuarial function holder).",
                  "explain": "Guidance ensures consistent, high-quality advice and professional independence."
              },
              {
                  "q": "How can regulation affect product design?",
                  "a": "Rules can require minimum surrender values, limit charges, prescribe disclosure, or restrict certain features, shaping what can be sold.",
                  "explain": "Designs must comply in every market where they are sold."
              },
              {
                  "q": "What is 'treating customers fairly'?",
                  "a": "A regulatory principle requiring firms to consider customers' interests at all stages of a product's life — design, sale, after-sale service and claims.",
                  "explain": "It influences product governance and literature."
              },
              {
                  "q": "How can changes in interest rates affect demand for annuities?",
                  "a": "Higher rates increase annuity payouts, making them more attractive; lower rates reduce payouts and demand.",
                  "explain": "Also changes the insurer's profit margins on existing business."
              },
              {
                  "q": "Why might a regulator restrict the use of certain rating factors?",
                  "a": "To prevent unfair discrimination (e.g. by gender or genetic test results) or to protect access to insurance.",
                  "explain": "Restrictions can increase anti-selection risk."
              },
              {
                  "q": "How does the legal environment affect claims?",
                  "a": "Laws determine policy interpretation, time limits, disclosure duties and remedies for non-disclosure, affecting claim costs.",
                  "explain": "Changes in consumer law can reduce an insurer's ability to decline claims for non-disclosure."
              },
              {
                  "q": "What is the effect of inflation on long-term products?",
                  "a": "Erodes the real value of fixed benefits (reducing demand) and raises expenses; indexed products become more expensive.",
                  "explain": "Insurers may offer indexed benefits to counter this."
              },
              {
                  "q": "How can the regulatory regime affect capital requirements?",
                  "a": "Risk-based regimes require capital proportional to the risks taken; stricter regimes raise the cost of guarantees.",
                  "explain": "Capital cost is a key input to pricing."
              },
              {
                  "q": "Why must insurers monitor the business environment continually?",
                  "a": "Changes can alter product profitability, customer demand, regulatory compliance and risk exposure.",
                  "explain": "Part of the control cycle's 'general environment' layer."
              }
          ]
      },
      {
          "id": "m10",
          "title": "Risk 1",
          "description": "Sources of risk to a life insurer, part 1: policy and other data, mortality, investment performance, expenses (including inflation) and persistency — how each can cause losses. (Syllabus 3.1; ActEd splits the risk list across three chapters, and this deck takes the first five items.)",
          "cards": [
              {
                  "q": "List the sources of risk to a life insurer in syllabus 3.1.",
                  "a": "Policy and other data; mortality; investment performance; expenses (incl. inflation); persistency; mix of new business; volume of new business; guarantees and options; competition; actions of the board; actions of distributors; failure of systems and controls; counterparties; legal, regulatory and tax developments; fraud; aggregation and concentration; climate risks.",
                  "explain": "Memorise this list — it is the backbone of risk questions."
              },
              {
                  "q": "How can policy data be a source of risk?",
                  "a": "Incorrect or incomplete data leads to wrong reserves, pricing, claims payments and experience analysis.",
                  "explain": "Policy data checks (Chapter 27) mitigate this."
              },
              {
                  "q": "How can mortality be a source of risk?",
                  "a": "Higher-than-expected deaths increase claims on assurance business; lower-than-expected deaths increase costs on annuities; mortality may also vary due to anti-selection, epidemics or trends.",
                  "explain": "The direction of the risk depends on the product."
              },
              {
                  "q": "What are the three components of mortality risk?",
                  "a": "Level risk (base mortality wrong), trend risk (future improvements different), and volatility or catastrophe risk (random fluctuations, pandemics).",
                  "explain": "Each needs different mitigations (e.g. reinsurance for volatility)."
              },
              {
                  "q": "How can investment performance be a source of risk?",
                  "a": "Returns lower than assumed reduce profits; asset values falling below guaranteed liabilities; reinvestment risk; default risk on bonds; mismatching between assets and liabilities.",
                  "explain": "Investment risk is greatest for guaranteed without-profits business."
              },
              {
                  "q": "How can expenses be a source of risk?",
                  "a": "Actual expenses higher than assumed (per policy or overall), expense inflation higher than expected, or lower new business volumes spreading fixed costs over fewer policies.",
                  "explain": "Expense overruns are common after systems projects or restructuring."
              },
              {
                  "q": "How can persistency be a source of risk?",
                  "a": "Early lapses mean initial expenses aren't recovered; lapses may be selective; high surrenders may force asset sales at low values; lower-than-expected lapses on products with lapse-supported pricing also cause losses.",
                  "explain": "The direction depends on whether the product is lapse-supported."
              },
              {
                  "q": "What is a lapse-supported product?",
                  "a": "One priced assuming some policyholders will lapse, so the insurer profits from lapses (e.g. level-premium term with no surrender value).",
                  "explain": "If fewer policyholders lapse than expected, the product loses money."
              },
              {
                  "q": "How does inflation affect expense risk?",
                  "a": "Renewal expenses grow with inflation, so higher-than-expected inflation raises costs over the policy term.",
                  "explain": "Especially important for long-term products with fixed charges."
              },
              {
                  "q": "Why can persistency risk be linked to economic conditions?",
                  "a": "In recessions policyholders may lapse to save money or access cash, and rising interest rates may make surrendering attractive.",
                  "explain": "Mass lapse events can create liquidity strain."
              },
              {
                  "q": "What is selective withdrawal?",
                  "a": "Policyholders who are healthier or have better alternatives are more likely to lapse, leaving a worse remaining group.",
                  "explain": "Especially relevant for term assurance with reviewable premiums."
              },
              {
                  "q": "How can investment risk affect with-profits business?",
                  "a": "Poor returns reduce asset shares and bonuses; if guarantees exceed asset shares, the estate or shareholders absorb losses.",
                  "explain": "With-profits funds can often absorb some risk through bonus changes."
              },
              {
                  "q": "What is data risk in reinsurance?",
                  "a": "Mismatches between insurer and reinsurer data can lead to disputes or incorrect recoveries.",
                  "explain": "Regular data reconciliations with reinsurers help."
              },
              {
                  "q": "Why is expense risk greater for small insurers?",
                  "a": "Fixed costs are spread over fewer policies, so per-policy expenses are higher and more sensitive to volume shortfalls.",
                  "explain": "Scale economies are a competitive advantage."
              },
              {
                  "q": "How can mortality experience differ by distribution channel?",
                  "a": "Direct channels may attract more anti-selective lives (less underwriting), while advised channels may have better mortality.",
                  "explain": "Pricing may vary by channel accordingly."
              }
          ]
      },
      {
          "id": "m11",
          "title": "Risk 2",
          "description": "Sources of risk to a life insurer, part 2: mix and volume of new business, guarantees and options, competition, actions of the board and of distributors, and failure of management systems and controls. (Syllabus 3.1.)",
          "cards": [
              {
                  "q": "How can the mix of new business be a source of risk?",
                  "a": "If the actual mix of products, ages, sizes or channels differs from that assumed in pricing, profits and capital needs will differ; some products are more capital-intensive.",
                  "explain": "Pricing assumes a mix; deviations change the overall profitability."
              },
              {
                  "q": "How can the volume of new business be a source of risk?",
                  "a": "Too little: fixed expenses aren't covered. Too much: new business strain may exhaust capital.",
                  "explain": "Both directions matter — capital constraints can cap growth."
              },
              {
                  "q": "What is new business strain?",
                  "a": "The initial loss when writing a policy because initial expenses and reserves exceed the first premium received.",
                  "explain": "It requires capital support until recouped by future profits."
              },
              {
                  "q": "How can guarantees and options be a source of risk?",
                  "a": "They may become valuable to policyholders when conditions change (e.g. falling interest rates), creating large costs, especially if underpriced.",
                  "explain": "Options also create anti-selection risk."
              },
              {
                  "q": "How can competition be a source of risk?",
                  "a": "It may force lower premiums or charges, reduce new business volumes, or lead to riskier product features.",
                  "explain": "Competition can make an insurer's pricing assumptions unattainable."
              },
              {
                  "q": "How can actions of the board be a source of risk?",
                  "a": "Poor strategic decisions, inadequate risk appetite, lack of oversight, or pursuing growth without adequate capital.",
                  "explain": "Governance frameworks aim to control this."
              },
              {
                  "q": "How can actions of distributors be a source of risk?",
                  "a": "Mis-selling leading to redress and reputational damage; poor persistency from inappropriate sales; fraud; concentration of sales through one channel.",
                  "explain": "Distributor oversight is a key conduct control."
              },
              {
                  "q": "How can failure of management systems and controls be a source of risk?",
                  "a": "Inadequate systems can cause errors in pricing, reserving, administration or claims, and fail to detect problems early.",
                  "explain": "This falls under operational risk."
              },
              {
                  "q": "Why is mis-selling a significant risk for life insurers?",
                  "a": "It leads to compensation payments, regulatory fines and reputational damage, which can exceed original profits.",
                  "explain": "Redress can extend back many years."
              },
              {
                  "q": "How can a sudden large increase in sales be dangerous?",
                  "a": "It may signal underpricing, strain capital and administration, and attract anti-selective lives.",
                  "explain": "Rapid growth warrants investigation."
              },
              {
                  "q": "What is concentration of distribution risk?",
                  "a": "Relying on one distributor means losing it could collapse new business volumes, and it can exert pricing pressure.",
                  "explain": "Diversifying channels reduces this risk."
              },
              {
                  "q": "How does new business mix affect capital?",
                  "a": "Guaranteed products need more capital than unit-linked; a shift toward guaranteed products raises capital needs.",
                  "explain": "Capital budgeting controls mix."
              },
              {
                  "q": "Why do guarantees and options need regular monitoring?",
                  "a": "Their cost changes with markets; regular review ensures reserves and hedges remain adequate.",
                  "explain": "Links to the cost of guarantees chapter."
              },
              {
                  "q": "How can competitor actions affect persistency?",
                  "a": "Competitors may offer better terms, encouraging policyholders to switch.",
                  "explain": "Retention activity can mitigate."
              },
              {
                  "q": "How can poor management information be a source of risk?",
                  "a": "Management may not detect adverse trends in experience, sales or expenses in time to act.",
                  "explain": "Timely, accurate MI supports the control cycle."
              }
          ]
      },
      {
          "id": "m12",
          "title": "Risk 3",
          "description": "Sources of risk to a life insurer, part 3: counterparties, legal, regulatory and tax developments, fraud, aggregation and concentration of risk, and climate risks. (Syllabus 3.1.)",
          "cards": [
              {
                  "q": "How can counterparties be a source of risk?",
                  "a": "Reinsurers, derivative counterparties, bond issuers, banks and outsourcers may fail to meet obligations.",
                  "explain": "Collateral, diversification and credit assessment mitigate this."
              },
              {
                  "q": "How can legal developments be a source of risk?",
                  "a": "Court rulings or new laws may change contract interpretation, increase benefits or restrict practices retrospectively.",
                  "explain": "Legal risk is hard to quantify."
              },
              {
                  "q": "How can regulatory developments be a source of risk?",
                  "a": "Changes in capital or reserving rules, conduct regulation or product restrictions can increase costs or reduce profitability.",
                  "explain": "Insurers monitor and engage with regulatory consultations."
              },
              {
                  "q": "How can tax developments be a source of risk?",
                  "a": "Changes in tax on policyholder benefits or on the insurer can reduce demand, profits, or the value of in-force business.",
                  "explain": "Tax changes can affect existing policies if not grandfathered."
              },
              {
                  "q": "How can fraud be a source of risk?",
                  "a": "Fraudulent claims, non-disclosure at application, internal fraud by staff or agents.",
                  "explain": "Underwriting, claims investigation and internal controls mitigate fraud."
              },
              {
                  "q": "What is aggregation risk?",
                  "a": "The risk that many policies are affected by a single event (e.g. a pandemic or a disaster affecting many insured lives).",
                  "explain": "Catastrophe reinsurance addresses aggregation."
              },
              {
                  "q": "What is concentration risk in a life insurer?",
                  "a": "Excessive exposure to a single counterparty, asset, geographical area, product or distribution channel.",
                  "explain": "Limits and diversification mitigate concentration."
              },
              {
                  "q": "How can climate risks affect a life insurer?",
                  "a": "Physical risks (e.g. heatwaves affecting mortality), transition risks (asset values falling due to policy changes) and liability risks (litigation).",
                  "explain": "Climate is mainly an investment and strategic risk for life insurers."
              },
              {
                  "q": "Why is aggregation relevant to group life business?",
                  "a": "Many employees at one location can die in a single event, causing a large claim.",
                  "explain": "Catastrophe excess of loss reinsurance is often used."
              },
              {
                  "q": "Why is reinsurer counterparty risk important?",
                  "a": "Reinsurance recoveries may be large; if the reinsurer fails, the insurer bears the full claim.",
                  "explain": "Reinsurer credit ratings and diversification help."
              },
              {
                  "q": "What is legal risk in policy wording?",
                  "a": "Ambiguous wording may be interpreted in the policyholder's favour, increasing claims.",
                  "explain": "Clear drafting and legal review mitigate this."
              },
              {
                  "q": "How can outsourcing create risk?",
                  "a": "Outsourced administration or investment management may fail, causing operational losses and reputational damage.",
                  "explain": "Oversight and contingency plans are required."
              },
              {
                  "q": "Why might a pandemic affect a life insurer in several ways?",
                  "a": "Higher mortality claims, lower annuity costs, market falls affecting assets, operational disruption and changes in persistency.",
                  "explain": "Risks can interact, so scenario tests are useful."
              },
              {
                  "q": "How can transition risk from climate change affect assets?",
                  "a": "Carbon-intensive investments may lose value as regulation and markets change.",
                  "explain": "ESG screening and scenario analysis manage this."
              },
              {
                  "q": "Why should insurers consider emerging risks?",
                  "a": "New risks (e.g. cyber, new diseases) may not be captured by historical data.",
                  "explain": "Horizon scanning is part of ERM."
              }
          ]
      },
      {
          "id": "m13",
          "title": "Unit pricing",
          "description": "Pricing units in internal unit-linked funds: bid and offer prices, appropriation and expropriation prices, the box, forward versus historic pricing, and the fairness issues between incoming, outgoing and continuing unitholders. (Syllabus 2.3.)",
          "cards": [
              {
                  "q": "What is the purpose of unit pricing?",
                  "a": "To determine the prices at which units are created and cancelled so that incoming, outgoing and continuing unitholders are treated fairly.",
                  "explain": "A fair price reflects the value of the underlying assets."
              },
              {
                  "q": "What is the appropriation price?",
                  "a": "The price per unit reflecting the cost of buying the underlying assets when the fund is expanding (including purchase costs).",
                  "explain": "Used when new money flows into the fund."
              },
              {
                  "q": "What is the expropriation price?",
                  "a": "The price per unit reflecting the proceeds from selling the underlying assets when the fund is contracting (net of sale costs).",
                  "explain": "Used when money flows out of the fund."
              },
              {
                  "q": "Why do unit prices differ between expanding and contracting funds?",
                  "a": "Dealing costs mean buying assets costs more than their mid-value, and selling them realises less; prices should reflect the cost of the actual transactions.",
                  "explain": "Using the wrong basis transfers value between unitholders."
              },
              {
                  "q": "What is the bid-offer spread?",
                  "a": "The difference between the offer price (at which units are bought) and bid price (at which units are sold), covering dealing costs and initial charges.",
                  "explain": "It is both a charge and a mechanism to protect existing unitholders."
              },
              {
                  "q": "What is the 'box' in unit pricing?",
                  "a": "A holding of units owned by the insurer, used to manage timing differences between unit creation and cancellation.",
                  "explain": "The box can generate profits or losses for the insurer."
              },
              {
                  "q": "What is forward pricing?",
                  "a": "Dealing at the price determined at the next valuation point after an order is received.",
                  "explain": "It prevents investors trading on known prices."
              },
              {
                  "q": "What is historic pricing?",
                  "a": "Dealing at the price determined at the previous valuation point.",
                  "explain": "It allows arbitrage if prices are stale — policyholders could buy knowing markets have risen."
              },
              {
                  "q": "Why is fairness important in unit pricing?",
                  "a": "Incorrect prices transfer value between groups of unitholders or between unitholders and the insurer.",
                  "explain": "Unit pricing errors often require compensation."
              },
              {
                  "q": "What is a dilution levy?",
                  "a": "A charge on large deals to cover the dealing costs they impose, protecting other unitholders.",
                  "explain": "An alternative to changing the pricing basis."
              },
              {
                  "q": "What is swing pricing?",
                  "a": "Adjusting the unit price to the appropriation or expropriation basis depending on net flows on the day.",
                  "explain": "Protects remaining unitholders from dilution."
              },
              {
                  "q": "How are unit prices calculated in practice?",
                  "a": "Value the fund's assets (on the chosen basis), deduct liabilities and charges, and divide by the number of units in issue.",
                  "explain": "Asset valuation must be consistent with the pricing basis."
              },
              {
                  "q": "What is the effect of using expropriation pricing for an expanding fund?",
                  "a": "New unitholders pay too little, diluting existing unitholders.",
                  "explain": "Consistency with actual fund flows is key."
              },
              {
                  "q": "How can the insurer profit from unit pricing?",
                  "a": "From the bid-offer spread, box management gains and annual management charges.",
                  "explain": "Profits should be transparent and fair."
              },
              {
                  "q": "What controls are needed over unit pricing?",
                  "a": "Independent checks, reconciliations, error thresholds and compensation procedures.",
                  "explain": "Unit pricing is an operational risk area."
              }
          ]
      },
      {
          "id": "m14",
          "title": "Models 1",
          "description": "The objectives and basic features of a life insurance model, deterministic versus stochastic approaches, model points, and the use of sensitivity analysis. (Syllabus 4.1.)",
          "cards": [
              {
                  "q": "What are the objectives of a life insurance model?",
                  "a": "To project cash flows for pricing, reserving, capital assessment, investment strategy and embedded value, and to assess risk.",
                  "explain": "A model is a tool to support decision-making."
              },
              {
                  "q": "List basic features of a good life insurance model.",
                  "a": "Valid and rigorous; well documented; reflects the risk profile; parameters for all relevant features; clear outputs; testable; not overly complex; allows sensitivity analysis; efficient to run.",
                  "explain": "Standard CP1-style model requirements applied to life insurance."
              },
              {
                  "q": "What is a model point?",
                  "a": "A representative policy used to stand for a group of similar policies in a model.",
                  "explain": "Model points reduce run time while retaining accuracy."
              },
              {
                  "q": "How should model points be chosen?",
                  "a": "Grouping policies by key characteristics (product, age, term, sum assured, duration) so the model points represent the business adequately.",
                  "explain": "The number chosen balances accuracy and speed."
              },
              {
                  "q": "What is a deterministic model?",
                  "a": "One where assumptions are fixed and the model produces a single outcome for each set.",
                  "explain": "Useful for pricing and scenario testing."
              },
              {
                  "q": "What is a stochastic model?",
                  "a": "One where some assumptions are random variables, producing a distribution of outcomes.",
                  "explain": "Needed for valuing guarantees and assessing capital."
              },
              {
                  "q": "When is a stochastic model particularly useful?",
                  "a": "When outcomes are asymmetric, e.g. valuing options and guarantees, or assessing tail risk for capital.",
                  "explain": "Deterministic models may miss the cost of options."
              },
              {
                  "q": "What is sensitivity analysis in a life model?",
                  "a": "Changing one assumption at a time to see its effect on results.",
                  "explain": "Identifies the key assumptions to set carefully."
              },
              {
                  "q": "What is scenario analysis?",
                  "a": "Changing several related assumptions together to reflect a plausible future state.",
                  "explain": "Captures correlated effects of economic changes."
              },
              {
                  "q": "What are the limitations of deterministic models?",
                  "a": "They give no probability of outcomes, may understate risk and ignore the time value of options.",
                  "explain": "Stochastic methods complement them."
              },
              {
                  "q": "Why is documentation of a model important?",
                  "a": "It allows others to understand, check and maintain the model, and supports regulatory review.",
                  "explain": "Poor documentation is a model risk."
              },
              {
                  "q": "How should a model be validated?",
                  "a": "Checks against actual data, reconciliation with previous results, testing individual cash flows, peer review.",
                  "explain": "Validation reduces the chance of errors."
              },
              {
                  "q": "What is the difference between a cash flow model and a formula approach?",
                  "a": "A cash flow model projects each year's income and outgo; a formula approach uses commutation-style formulas.",
                  "explain": "Cash flow models handle complex products and non-level cash flows."
              },
              {
                  "q": "What outputs might a life model produce?",
                  "a": "Projected cash flows, profits, reserves, capital requirements, embedded value, IRR and profit margins.",
                  "explain": "Outputs should suit the decision being made."
              },
              {
                  "q": "Why might different models be used for different purposes?",
                  "a": "Pricing, reserving and capital purposes need different assumptions, granularity and outputs.",
                  "explain": "Consistency between models is still desirable."
              }
          ]
      },
      {
          "id": "m15",
          "title": "Models 2",
          "description": "Uses of actuarial models in life insurance decision-making: pricing by profit testing (profit signature, NPV, IRR, profit margin, discounted payback), developing investment strategy, projecting solvency and calculating embedded value. (Syllabus 4.2.)",
          "cards": [
              {
                  "q": "What is profit testing?",
                  "a": "Projecting a policy's cash flows and reserves to derive the expected profit emerging each year, then assessing it against profit criteria.",
                  "explain": "The standard pricing method for life insurance."
              },
              {
                  "q": "What is a profit signature?",
                  "a": "The expected profit emerging in each year per policy at issue, after allowing for reserves and capital.",
                  "explain": "Usually negative in year one (new business strain), then positive."
              },
              {
                  "q": "What profit criteria are used in pricing?",
                  "a": "Net present value at the risk discount rate; internal rate of return; profit margin (NPV as a percentage of premiums); discounted payback period.",
                  "explain": "Different criteria highlight different aspects — IRR ignores scale, NPV depends on the discount rate."
              },
              {
                  "q": "What is the risk discount rate?",
                  "a": "The rate used to discount future profits, reflecting the return required by shareholders given the riskiness of the profits.",
                  "explain": "Higher-risk products warrant a higher discount rate."
              },
              {
                  "q": "What is the internal rate of return in profit testing?",
                  "a": "The discount rate at which the NPV of the profit signature is zero.",
                  "explain": "Meaningful only when the signature has one sign change."
              },
              {
                  "q": "What is the discounted payback period?",
                  "a": "The time until the accumulated discounted profits first become positive.",
                  "explain": "It measures how long capital is tied up."
              },
              {
                  "q": "How can models be used to develop investment strategy?",
                  "a": "By projecting assets and liabilities under different strategies and scenarios to compare returns, risk and capital.",
                  "explain": "Asset-liability models show mismatching risk."
              },
              {
                  "q": "How can models project solvency?",
                  "a": "By projecting assets, liabilities and capital requirements under business plans and adverse scenarios, to assess future capital adequacy.",
                  "explain": "Supports business planning and ORSA-type assessments."
              },
              {
                  "q": "What is embedded value?",
                  "a": "The value of shareholders' interests in the in-force business: net worth (adjusted) plus the present value of future profits from in-force business, less the cost of capital.",
                  "explain": "Excludes the value of future new business."
              },
              {
                  "q": "How is value of new business calculated?",
                  "a": "As the present value of future profits from new business written in the period, less cost of capital.",
                  "explain": "Measures the value added by sales."
              },
              {
                  "q": "Why are non-unit reserves included in profit tests of unit-linked products?",
                  "a": "To remove negative future cash flows and reflect when capital is required.",
                  "explain": "Including reserves changes the timing of profits."
              },
              {
                  "q": "What is sensitivity testing in pricing?",
                  "a": "Varying assumptions to see how profitability changes, identifying the key risks in the product.",
                  "explain": "Helps decide margins and design features."
              },
              {
                  "q": "How does capital affect profit testing?",
                  "a": "Capital requirements must be financed; the cost of holding capital reduces the profit to shareholders.",
                  "explain": "Including capital in the profit signature gives a more realistic result."
              },
              {
                  "q": "Why might a model be used for product design decisions?",
                  "a": "To test alternative charging structures or guarantees for profitability and risk.",
                  "explain": "Profit tests guide design choices."
              },
              {
                  "q": "What is the difference between an in-force and new business model?",
                  "a": "An in-force model projects existing business; a new business model projects future sales.",
                  "explain": "Both are needed for business planning."
              }
          ]
      },
      {
          "id": "m16",
          "title": "Product design",
          "description": "Designing life insurance products: the factors to consider (customer needs, profitability, risk, capital, regulation, tax, distribution, competition, administration), the design of premiums, benefits and charges, and the relative merits of alternative designs. (Syllabus 2.1.)",
          "cards": [
              {
                  "q": "List the main factors in designing a life insurance product.",
                  "a": "Customer needs; profitability; risk to the insurer; financing requirement and capital; regulatory and tax constraints; competition; distribution channel; administration and systems; marketability; consistency with other products; simplicity.",
                  "explain": "Syllabus 2.1.1 — a key checklist for design questions."
              },
              {
                  "q": "Why does the financing requirement matter in product design?",
                  "a": "Products with high new business strain require capital; a capital-constrained insurer may prefer designs with lower strain.",
                  "explain": "Charging structures can reduce strain (e.g. front-end charges)."
              },
              {
                  "q": "How can charges be designed for a unit-linked product?",
                  "a": "Allocation rate, bid-offer spread, annual management charge, policy fee, mortality charges, surrender penalties — balanced to cover expenses and profits over the policy's life.",
                  "explain": "Charges should match expense incidence where possible."
              },
              {
                  "q": "Why might charges be designed to match expense incidence?",
                  "a": "To reduce risk from early lapses and minimise capital strain.",
                  "explain": "Front-end charges recover initial expenses early."
              },
              {
                  "q": "What is the trade-off in designing premium structures?",
                  "a": "Level premiums are simple and affordable but create reserves and lapse risk; increasing premiums match risk more closely but may cause lapses as premiums rise.",
                  "explain": "Design affects anti-selection and persistency."
              },
              {
                  "q": "How does competition influence product design?",
                  "a": "Products must be competitive on price, features and service; may force inclusion of features like guarantees.",
                  "explain": "An insurer may differentiate through features rather than price."
              },
              {
                  "q": "Why is simplicity a design objective?",
                  "a": "Simple products are easier to understand, sell, administer and regulate, reducing mis-selling risk.",
                  "explain": "Complex features increase costs and risks."
              },
              {
                  "q": "How does the distribution channel affect design?",
                  "a": "Direct channels need simple products with low underwriting; advised channels support complex products.",
                  "explain": "Commission structures must suit the channel."
              },
              {
                  "q": "What is meant by 'relative merits of different product designs'?",
                  "a": "Comparing designs on customer value, profitability, risk, capital and marketability.",
                  "explain": "Syllabus 2.1.3 — expect 'compare designs A and B' questions."
              },
              {
                  "q": "How can product design manage risk?",
                  "a": "Including reviewable premiums, limiting options, adding surrender penalties, or choosing unit-linked rather than guaranteed benefits.",
                  "explain": "Design is the first line of risk management."
              },
              {
                  "q": "Why must product design consider regulation?",
                  "a": "Products must comply with conduct and prudential rules, disclosure requirements and product regulation.",
                  "explain": "Non-compliant products face redress risk."
              },
              {
                  "q": "How does tax affect product design?",
                  "a": "Designs may be chosen to maximise tax efficiency for customers or insurers.",
                  "explain": "Tax changes can make designs obsolete."
              },
              {
                  "q": "What is the role of profit testing in design?",
                  "a": "Testing designs for profitability and sensitivity to assumptions.",
                  "explain": "Links design to Chapter 15."
              },
              {
                  "q": "Why consider consistency with other products?",
                  "a": "To avoid cannibalisation, administrative complexity and inconsistent treatment of customers.",
                  "explain": "Portfolio coherence matters."
              },
              {
                  "q": "What factors affect the design of a guarantee?",
                  "a": "Cost, customer demand, capital requirements, hedging availability and competitive pressure.",
                  "explain": "Guarantees should be priced and hedged where possible."
              }
          ]
      },
      {
          "id": "m17",
          "title": "Setting assumptions 1",
          "description": "Setting assumptions for pricing life insurance contracts: mortality, investment return, expenses and inflation, persistency, tax and the risk discount rate, the information available, and the profit requirements a price must meet. (Syllabus 5.1.1.)",
          "cards": [
              {
                  "q": "List the main assumptions needed to price a life insurance contract.",
                  "a": "Mortality (and morbidity); investment return; expenses and expense inflation; persistency; tax; risk discount rate or profit requirement; reserving and capital basis; new business mix and volume.",
                  "explain": "The same list structures most assumption questions."
              },
              {
                  "q": "What information can be used to set a pricing mortality assumption?",
                  "a": "The insurer's own experience; industry tables and studies; reinsurers' data; population statistics; allowance for underwriting, distribution channel, target market and future improvements.",
                  "explain": "Adjust standard tables for the product's target market."
              },
              {
                  "q": "How is the investment return assumption set for pricing?",
                  "a": "Based on the expected returns on the assets that will back the product, allowing for tax, default risk and expenses, with prudence depending on guarantees.",
                  "explain": "For unit-linked business, the return affects charges and non-unit cash flows only."
              },
              {
                  "q": "How is the expense assumption set?",
                  "a": "From an expense analysis allocating costs to products and activities (initial, renewal, claims), projected with inflation, possibly with allowance for expected volumes and planned efficiencies.",
                  "explain": "Marginal versus full costing is a key pricing decision."
              },
              {
                  "q": "What is marginal costing?",
                  "a": "Pricing new business to cover only the extra (variable) expenses it causes, not overheads.",
                  "explain": "Can be competitive but risky if overheads are not covered overall."
              },
              {
                  "q": "How is the persistency assumption set?",
                  "a": "From the insurer's own lapse experience by product, duration and channel, industry data, and allowance for economic conditions and product features.",
                  "explain": "Should be prudent in the direction that hurts the product."
              },
              {
                  "q": "What are profit requirements in pricing?",
                  "a": "The criteria a product must meet, e.g. a minimum NPV, IRR above the cost of capital, or profit margin, reflecting shareholders' required return and risk.",
                  "explain": "Syllabus 5.1.1 includes profit requirements explicitly."
              },
              {
                  "q": "How should the risk discount rate reflect risk?",
                  "a": "It should be higher for more uncertain profits, reflecting the cost of capital plus a risk margin.",
                  "explain": "Market-consistent approaches instead allow for risk in the cash flows."
              },
              {
                  "q": "Why might pricing assumptions differ between products?",
                  "a": "Different target markets, underwriting, distribution channels and risk profiles lead to different experience.",
                  "explain": "One-size assumptions misprice some products."
              },
              {
                  "q": "Why must assumptions be internally consistent?",
                  "a": "Investment return, inflation and expense inflation depend on the same economic conditions; inconsistent assumptions distort prices.",
                  "explain": "Consistency checks are part of good practice."
              },
              {
                  "q": "How can competition affect pricing assumptions?",
                  "a": "Pressure to reduce margins may lead to less prudent assumptions; the insurer must decide whether to accept lower profits.",
                  "explain": "Assumptions should not be weakened just to compete."
              },
              {
                  "q": "How is tax allowed for in pricing?",
                  "a": "Allow for tax on investment income and profits according to the tax regime, and for policyholder tax where relevant.",
                  "explain": "Tax can materially affect product attractiveness."
              },
              {
                  "q": "What is the role of margins in pricing assumptions?",
                  "a": "Margins provide protection against adverse experience and are part of profit.",
                  "explain": "The size depends on uncertainty and competitive position."
              },
              {
                  "q": "How might new business volume affect pricing?",
                  "a": "Expected volumes affect per-policy fixed expense allocations; lower volumes increase per-policy costs.",
                  "explain": "Volume assumptions should be realistic."
              },
              {
                  "q": "Why is the mortality improvement assumption important for annuity pricing?",
                  "a": "Annuities pay for life, so future improvements significantly increase cost.",
                  "explain": "Improvements are uncertain; prudence may be applied."
              }
          ]
      },
      {
          "id": "m18",
          "title": "Setting assumptions 2",
          "description": "Setting assumptions for determining liabilities and embedded value: why supervisory reserving assumptions differ from pricing assumptions, best-estimate and market-consistent bases, and the principles for embedded value assumptions. (Syllabus 5.1.2–5.1.4.)",
          "cards": [
              {
                  "q": "Why might supervisory reserve assumptions differ from pricing assumptions?",
                  "a": "Reserves need to be prudent (or prescribed by regulation) to ensure solvency, while pricing uses best estimates plus a profit margin; assumptions also change over time after pricing.",
                  "explain": "Syllabus 5.1.3 explicitly asks this."
              },
              {
                  "q": "What is a best-estimate assumption for liabilities?",
                  "a": "An assumption equally likely to be too high or too low, with no deliberate margin.",
                  "explain": "Market-consistent regimes use best estimates plus a risk margin."
              },
              {
                  "q": "What is a market-consistent valuation?",
                  "a": "Valuing liabilities consistently with market prices of assets — using risk-free discount rates and market-implied values for guarantees.",
                  "explain": "Removes subjective assumptions about asset returns."
              },
              {
                  "q": "How are assumptions set for embedded value?",
                  "a": "Best-estimate demographic and expense assumptions, economic assumptions consistent with market conditions or expected returns, and a risk discount rate (traditional) or market-consistent approach.",
                  "explain": "Syllabus 5.1.4 — EV assumptions should be realistic, not prudent."
              },
              {
                  "q": "Why are EV assumptions best estimate rather than prudent?",
                  "a": "EV aims to represent the true value of the business to shareholders; prudence would understate it.",
                  "explain": "Risk is allowed for through the discount rate or cost of capital."
              },
              {
                  "q": "How is the discount rate set in a traditional EV?",
                  "a": "A risk-free rate plus a risk margin reflecting the riskiness of the future profits.",
                  "explain": "Criticised for subjectivity; market-consistent EV addresses this."
              },
              {
                  "q": "How is the discount rate set for supervisory reserves?",
                  "a": "Often prescribed — e.g. a risk-free rate, possibly with adjustments — or based on prudent expected asset yields.",
                  "explain": "Depends on the regulatory regime."
              },
              {
                  "q": "Why should reserving assumptions be reviewed each year?",
                  "a": "Experience, market conditions and regulation change; stale assumptions misstate liabilities.",
                  "explain": "Experience analysis (Chapter 30) informs updates."
              },
              {
                  "q": "What is prudence in reserving?",
                  "a": "Choosing assumptions that make reserves more likely to be adequate than not, via margins in individual assumptions or overall.",
                  "explain": "The level of prudence may be prescribed."
              },
              {
                  "q": "How do reserving assumptions interact with capital?",
                  "a": "More prudent reserves reduce the additional capital needed for a given level of security.",
                  "explain": "The total (reserves + capital) matters for solvency."
              },
              {
                  "q": "Why is the expense assumption for reserves often based on per-policy costs?",
                  "a": "To ensure reserves cover the future costs of maintaining in-force policies, including if the business closes to new business.",
                  "explain": "Closed-fund expense bases are more prudent."
              },
              {
                  "q": "How should persistency be allowed for in reserves?",
                  "a": "Prudently in the direction that increases reserves — e.g. assuming no lapses if lapses reduce the liability.",
                  "explain": "Direction depends on product design."
              },
              {
                  "q": "What data informs liability assumptions?",
                  "a": "Internal experience studies, industry data, market data for economic assumptions, and regulatory guidance.",
                  "explain": "Credibility weighting combines sources."
              },
              {
                  "q": "Why may assumption changes create profits or losses?",
                  "a": "Changing assumptions revalues liabilities, releasing or increasing reserves.",
                  "explain": "These appear in the analysis of surplus as assumption changes."
              },
              {
                  "q": "How does the purpose of a valuation determine the assumptions?",
                  "a": "Pricing (best estimate + margins), reserves (prudent/prescribed), EV (best estimate), capital (stress scenarios) each require different bases.",
                  "explain": "Always start from the purpose."
              }
          ]
      },
      {
          "id": "m19",
          "title": "Supervisory reserves & capital requirements 1",
          "description": "How supervisory reserves are determined: prospective gross and net premium approaches, market-consistent valuation with a best-estimate liability and risk margin, and non-unit reserves for unit-linked business. (Syllabus 4.4.1.)",
          "cards": [
              {
                  "q": "What is the purpose of supervisory reserves?",
                  "a": "To ensure the insurer holds enough assets to meet its obligations to policyholders with an appropriate level of confidence.",
                  "explain": "Reserves plus capital provide policyholder protection."
              },
              {
                  "q": "What is a market-consistent valuation of liabilities?",
                  "a": "Valuing liabilities as a market participant would, using risk-free discount rates, best-estimate cash flows and allowing for the market value of guarantees, plus a risk margin.",
                  "explain": "The basis of many modern regimes."
              },
              {
                  "q": "What is a best-estimate liability?",
                  "a": "The probability-weighted average of future cash flows discounted at risk-free rates.",
                  "explain": "Contains no margins for prudence."
              },
              {
                  "q": "What is a risk margin?",
                  "a": "An addition to the best-estimate liability representing the cost of transferring the liabilities to another party, often calculated via a cost-of-capital approach.",
                  "explain": "Reflects non-hedgeable risks."
              },
              {
                  "q": "What is a non-unit reserve?",
                  "a": "A reserve held outside the unit fund for unit-linked business to cover future negative non-unit cash flows (e.g. expenses exceeding charges).",
                  "explain": "Calculated by projecting non-unit cash flows and zeroising negative ones."
              },
              {
                  "q": "How is a non-unit reserve calculated?",
                  "a": "Project non-unit cash flows; working backwards, hold reserves so that future negative cash flows are covered by earlier positive ones and reserves.",
                  "explain": "This is 'zeroisation' of negative cash flows."
              },
              {
                  "q": "What is a gross premium valuation?",
                  "a": "A prospective reserve valuing actual future benefits and expenses less actual gross premiums.",
                  "explain": "Allows explicitly for expenses and future premiums."
              },
              {
                  "q": "What is a net premium valuation?",
                  "a": "A prospective valuation using a notional net premium (calculated on the valuation basis) rather than the actual premium, implicitly leaving future margins to cover expenses and profits.",
                  "explain": "The margin between the actual and net premiums implicitly funds future expenses (and, for with-profits, future bonuses); valuing only the net premium also stops future profits being capitalised in the reserve."
              },
              {
                  "q": "Why might a regulator prescribe the valuation basis?",
                  "a": "To ensure consistency and adequate prudence across insurers.",
                  "explain": "Prescription reduces flexibility but increases comparability."
              },
              {
                  "q": "What is a unit reserve?",
                  "a": "The value of the units allocated to a unit-linked policy.",
                  "explain": "Matched by holding the corresponding assets."
              },
              {
                  "q": "Why might negative reserves be disallowed?",
                  "a": "A negative reserve treats future profits as an asset, which would not be available if the policy lapsed.",
                  "explain": "Regulators often require reserves to be at least zero or the surrender value."
              },
              {
                  "q": "How are reserves affected by guarantees?",
                  "a": "Reserves must include the value of guarantees, which may require stochastic calculation.",
                  "explain": "Market-consistent approaches value guarantees as options."
              },
              {
                  "q": "Why might reserves be held at a minimum of the surrender value?",
                  "a": "To ensure the insurer can pay surrenders if all policyholders surrendered.",
                  "explain": "Protects against mass lapse."
              },
              {
                  "q": "What is a passive valuation approach?",
                  "a": "One where assumptions are rarely changed and reserves are less sensitive to market conditions (e.g. book value assets and fixed discount rate).",
                  "explain": "Stable but can misrepresent true value."
              },
              {
                  "q": "What is an active valuation approach?",
                  "a": "One where assumptions are updated to reflect current market conditions, with assets at market value.",
                  "explain": "More realistic but results are more volatile."
              }
          ]
      },
      {
          "id": "m20",
          "title": "Supervisory reserves & capital requirements 2",
          "description": "Solvency capital requirements: Value at Risk capital assessment, stress and scenario approaches, the interplay between the strength of reserves and the capital required, passive and active valuation of assets and liabilities, and capital management. (Syllabus 4.4.)",
          "cards": [
              {
                  "q": "What is a Value at Risk (VaR) capital assessment?",
                  "a": "Setting capital so that the probability of assets falling below liabilities over a period (e.g. one year) is no more than a specified level (e.g. 0.5%).",
                  "explain": "A common basis for risk-based capital regimes."
              },
              {
                  "q": "How can VaR capital be calculated?",
                  "a": "Using stress tests for each risk and aggregating with correlations (a standard formula), or using a full stochastic internal model.",
                  "explain": "Internal models need regulatory approval."
              },
              {
                  "q": "What is the interplay between reserves and capital?",
                  "a": "If reserves are strong (prudent), less additional capital is needed; if weak, more capital is needed for the same overall security.",
                  "explain": "Syllabus 4.4.2 — the total balance sheet strength is what matters."
              },
              {
                  "q": "What are the main risk modules in a VaR capital assessment?",
                  "a": "Market risk (interest, equity, property, spread, currency), insurance risk (mortality, longevity, lapse, expense, catastrophe), counterparty risk, and operational risk.",
                  "explain": "Diversification between modules reduces the total."
              },
              {
                  "q": "Why is diversification allowed for in capital?",
                  "a": "Not all risks will crystallise at the same time, so the combined capital is less than the sum.",
                  "explain": "Correlation assumptions are key and uncertain."
              },
              {
                  "q": "How are assets valued in an active approach?",
                  "a": "At market value, consistent with market-based liability valuation.",
                  "explain": "Ensures consistency between assets and liabilities."
              },
              {
                  "q": "How are assets valued in a passive approach?",
                  "a": "Often at book value or using a smoothed value.",
                  "explain": "Stable results but may hide losses."
              },
              {
                  "q": "What is capital management?",
                  "a": "Managing the amount and quality of capital relative to requirements through strategies like reinsurance, raising capital, adjusting new business or investment strategy.",
                  "explain": "Syllabus 3.5 includes capital management."
              },
              {
                  "q": "Give three ways a life insurer can reduce capital requirements.",
                  "a": "Reinsurance; hedging; changing investment strategy; reducing guarantees in new products; selling or closing business; securitisation.",
                  "explain": "Each has costs and trade-offs."
              },
              {
                  "q": "What is the minimum capital requirement concept?",
                  "a": "A lower threshold below which supervisory intervention is severe (e.g. withdrawal of authorisation).",
                  "explain": "Contrast with the higher solvency capital requirement."
              },
              {
                  "q": "What is ORSA-style own risk and solvency assessment?",
                  "a": "The insurer's own assessment of its risk profile and capital needs over its business planning horizon.",
                  "explain": "Links capital management to strategy."
              },
              {
                  "q": "Why might an insurer hold capital above the regulatory minimum?",
                  "a": "To maintain a buffer against volatility, support credit rating, finance new business and avoid regulatory intervention.",
                  "explain": "Target capital is usually set by risk appetite."
              },
              {
                  "q": "How do guarantees affect capital requirements?",
                  "a": "Guarantees increase exposure in stress scenarios, raising capital requirements.",
                  "explain": "Hedging can reduce this."
              },
              {
                  "q": "How does the market-consistent approach affect capital volatility?",
                  "a": "Changes in market conditions directly affect assets and liabilities, making capital more volatile.",
                  "explain": "Matching reduces this volatility."
              },
              {
                  "q": "What is a stress test?",
                  "a": "Assessing the effect of a specified adverse event (e.g. equity fall of 40%) on the balance sheet.",
                  "explain": "Used to calculate capital and test resilience."
              }
          ]
      },
      {
          "id": "m21",
          "title": "Surrender values",
          "description": "Discontinuance terms for without-profits contracts: principles for setting surrender and paid-up values, methods (asset share, retrospective, prospective reserve, formula), how well each meets the principles, and calculating values by using reserves or equating policy values. (Syllabus 2.4.)",
          "cards": [
              {
                  "q": "List the principles for setting surrender values.",
                  "a": "Fair to surrendering and continuing policyholders; not exceeding asset shares by much (to avoid anti-selection); consistent with other values and over time; not unduly penal; simple to calculate and explain; meet regulatory minimums and PRE; covered by reserves; competitive.",
                  "explain": "Syllabus 2.4.1 — a common 'state the principles' question."
              },
              {
                  "q": "What is the asset share method for surrender values?",
                  "a": "Setting surrender values close to the policy's asset share, possibly less a deduction for expenses or profit.",
                  "explain": "Closely meets fairness but requires good data."
              },
              {
                  "q": "What is the prospective reserve method?",
                  "a": "Setting the surrender value as the reserve on a specified basis (future benefits less future premiums), possibly less a deduction.",
                  "explain": "Easy to compute from valuation systems."
              },
              {
                  "q": "What is the retrospective method?",
                  "a": "Accumulating past premiums less expenses and cost of cover at a specified interest rate.",
                  "explain": "Similar to asset share but uses assumed rather than actual experience."
              },
              {
                  "q": "Why should surrender values not exceed asset shares?",
                  "a": "Paying more than the policy has earned transfers value from remaining policyholders and encourages surrenders when advantageous.",
                  "explain": "Also creates liquidity risk."
              },
              {
                  "q": "Why might surrender values be lower in early years?",
                  "a": "Initial expenses have not been recovered; paying full asset share (possibly negative) would not be feasible.",
                  "explain": "Many products have zero surrender value in early years."
              },
              {
                  "q": "What is a paid-up value?",
                  "a": "A reduced benefit kept in force after premiums stop.",
                  "explain": "Should be consistent with surrender values."
              },
              {
                  "q": "How can a paid-up value be calculated by equating policy values?",
                  "a": "Setting the value of the paid-up benefit equal to the surrender value (or reserve) at that point.",
                  "explain": "Syllabus 2.4.4 — equating policy values."
              },
              {
                  "q": "What is a formula method for surrender values?",
                  "a": "A simple formula (e.g. proportion of premiums paid) approximating fair values.",
                  "explain": "Simple but may be inaccurate."
              },
              {
                  "q": "How well does the prospective reserve method meet the principles?",
                  "a": "Simple and consistent with reserves; but may not reflect actual experience and can differ from asset shares.",
                  "explain": "Syllabus 2.4.3 — evaluating methods against principles."
              },
              {
                  "q": "How can surrender values protect against anti-selection?",
                  "a": "Setting values that don't make surrendering attractive in unusual market conditions, e.g. using market value adjustments.",
                  "explain": "Prevents policyholders exploiting timing."
              },
              {
                  "q": "Why should surrender values be consistent over time?",
                  "a": "Large jumps in values at different durations would be unfair and could encourage surrenders at specific times.",
                  "explain": "Smooth scales are preferred."
              },
              {
                  "q": "How might market conditions affect surrender values?",
                  "a": "If assets have fallen, paying book values would be unfair to remaining policyholders; values may need adjustment.",
                  "explain": "MVRs apply for accumulating with-profits."
              },
              {
                  "q": "What is the effect of a high surrender value on persistency?",
                  "a": "It may encourage surrenders and reduce persistency.",
                  "explain": "Balance attractiveness against retention."
              },
              {
                  "q": "Why do regulators sometimes set minimum surrender values?",
                  "a": "To protect policyholders from unfair loss of value.",
                  "explain": "Minimums constrain design."
              }
          ]
      },
      {
          "id": "m22",
          "title": "Alterations",
          "description": "Alterations to without-profits contracts — changes to term, premium, sum assured or product type — the principles and methods for setting alteration terms, and calculating altered benefits by equating policy values before and after. (Syllabus 2.4.)",
          "cards": [
              {
                  "q": "What is an alteration to a policy?",
                  "a": "A change in the terms of an existing contract, e.g. changing the term, premium, sum assured or type of cover.",
                  "explain": "Alterations are common as policyholders' needs change."
              },
              {
                  "q": "What principles apply to alteration terms?",
                  "a": "Fair to the altering policyholder and to others; consistent with surrender values and new business terms; no anti-selection; simple; covered by reserves.",
                  "explain": "Similar to surrender value principles."
              },
              {
                  "q": "What is the equating policy values method?",
                  "a": "Set the value of the policy after alteration (future benefits less future premiums) equal to the value before alteration (e.g. its surrender value or reserve), plus any alteration charge.",
                  "explain": "The standard method for alterations."
              },
              {
                  "q": "Why might the pre-alteration value be the surrender value rather than the reserve?",
                  "a": "Using the surrender value treats an alteration like a surrender and new policy, ensuring consistency and no advantage over surrendering.",
                  "explain": "Using reserves may be more generous."
              },
              {
                  "q": "Why might an alteration charge be applied?",
                  "a": "To cover administrative costs and possible anti-selection.",
                  "explain": "Should be reasonable and disclosed."
              },
              {
                  "q": "What is the risk of increasing the sum assured without underwriting?",
                  "a": "Anti-selection by those in poor health.",
                  "explain": "Evidence of health may be required for increases."
              },
              {
                  "q": "How can a change in term be handled?",
                  "a": "By equating policy values using the new term, adjusting premium or benefit accordingly.",
                  "explain": "Also consider the effect on reserves."
              },
              {
                  "q": "Why must alteration terms be consistent with new business terms?",
                  "a": "Otherwise policyholders might surrender and buy new policies, or alter rather than buy new, to exploit differences.",
                  "explain": "Consistency prevents arbitrage."
              },
              {
                  "q": "What is converting a policy to paid-up status?",
                  "a": "Stopping premiums and reducing the benefit — an alteration valued by equating policy values.",
                  "explain": "Links to Chapter 21."
              },
              {
                  "q": "Why might an insurer offer alterations?",
                  "a": "To retain customers whose needs change, improving persistency.",
                  "explain": "Retention activity is a risk management tool."
              },
              {
                  "q": "How can alterations affect reserves?",
                  "a": "The new policy terms require reserves on the new basis; the difference may create a profit or loss.",
                  "explain": "Terms should ensure reserves are covered."
              },
              {
                  "q": "What are the administrative issues with alterations?",
                  "a": "System changes, recalculation of values, communication and ensuring correct records.",
                  "explain": "Complexity increases operational risk."
              },
              {
                  "q": "How do alterations for with-profits policies differ?",
                  "a": "Bonuses and asset shares must be considered; alterations may be based on asset shares.",
                  "explain": "Fairness to the with-profits fund is key."
              },
              {
                  "q": "What happens if a policyholder wants to reduce premium but keep cover?",
                  "a": "The benefit must fall or the term change, determined by equating values.",
                  "explain": "Explain the trade-off clearly to the customer."
              },
              {
                  "q": "Why might an insurer restrict alterations?",
                  "a": "To control costs, anti-selection and administrative complexity.",
                  "explain": "Restrictions should be clear in policy terms."
              }
          ]
      },
      {
          "id": "m23",
          "title": "Cost of guarantees and options",
          "description": "Methods for determining the cost of guarantees and options: stochastic simulation and option pricing for investment guarantees, and the conventional and other methods for simple mortality options such as guaranteed insurability and conversion options. (Syllabus 4.3 and 1.1.3.)",
          "cards": [
              {
                  "q": "How can stochastic simulation be used to cost an investment guarantee?",
                  "a": "Simulate many future investment scenarios, calculate the guarantee cost in each (shortfall of fund versus guarantee), discount and average, or choose a reserve at a percentile.",
                  "explain": "Captures asymmetric costs that deterministic methods miss."
              },
              {
                  "q": "How can option pricing be used to cost an investment guarantee?",
                  "a": "Recognise the guarantee as a put option on the fund and value it using option pricing models (e.g. Black-Scholes) or market prices of options.",
                  "explain": "Gives a market-consistent value and hedging strategy."
              },
              {
                  "q": "What is the advantage of using option prices?",
                  "a": "Market-consistent, objective, and indicates how to hedge the guarantee.",
                  "explain": "Requires suitable market options or assumptions for volatility."
              },
              {
                  "q": "What are the drawbacks of stochastic simulation?",
                  "a": "Results depend on the model and parameters; computationally intensive; results may be hard to communicate.",
                  "explain": "Calibration is critical."
              },
              {
                  "q": "What is a mortality option?",
                  "a": "An option allowing the policyholder to buy further insurance without evidence of health, e.g. guaranteed insurability or conversion options.",
                  "explain": "The cost arises from anti-selection."
              },
              {
                  "q": "What is the conventional method for costing a mortality option?",
                  "a": "Assume all eligible policyholders exercise the option; calculate the extra cost as the difference between premiums on select mortality and the cost of mortality for lives exercising (assumed to experience ultimate or worse mortality).",
                  "explain": "Simple but may overstate cost if not all exercise."
              },
              {
                  "q": "What is the North American method?",
                  "a": "Assumes a proportion of lives exercise the option and those that do are in poorer health, modelling the extra mortality of exercisers.",
                  "explain": "More refined but needs assumptions on exercise rates."
              },
              {
                  "q": "Why do options have a cost even if not in the money now?",
                  "a": "Future conditions may make them valuable (time value).",
                  "explain": "Stochastic or option-pricing methods capture this."
              },
              {
                  "q": "How can the insurer manage the cost of investment guarantees?",
                  "a": "Charging for them, hedging with derivatives, holding capital, reinsurance, or limiting guarantee terms.",
                  "explain": "Choice depends on market availability and cost."
              },
              {
                  "q": "Why were guaranteed annuity rates costly?",
                  "a": "Interest rates fell and longevity improved, making the guaranteed rates far above market annuity rates.",
                  "explain": "Illustrates the danger of pricing options deterministically."
              },
              {
                  "q": "What factors affect the cost of an investment guarantee?",
                  "a": "Level of guarantee, term, volatility of the fund, interest rates, and charges.",
                  "explain": "Longer terms and higher volatility increase cost."
              },
              {
                  "q": "How can the cost of a mortality option be reduced?",
                  "a": "Limiting the amount and frequency of increases, age limits, restricting events that trigger options, requiring some evidence.",
                  "explain": "Design controls anti-selection."
              },
              {
                  "q": "What is the percentile approach to reserving for guarantees?",
                  "a": "Hold a reserve equal to the cost of the guarantee at a high percentile (e.g. 95th) of simulated outcomes.",
                  "explain": "Gives confidence of adequacy but not market-consistent."
              },
              {
                  "q": "Why is hedging of guarantees not perfect?",
                  "a": "Basis risk, model risk, transaction costs, and unhedgeable policyholder behaviour.",
                  "explain": "Hedging reduces but does not remove risk."
              },
              {
                  "q": "How should guarantee costs be reflected in pricing?",
                  "a": "Include explicit charges or margins covering the expected cost and the capital needed.",
                  "explain": "Underpricing guarantees has historically caused major losses."
              }
          ]
      },
      {
          "id": "m24",
          "title": "Reinsurance 1",
          "description": "The purposes of reinsurance for a life insurer and the main types and structures: individual surplus and quota share, original terms and risk premium bases, excess of loss and catastrophe covers, and treaty versus facultative arrangements. (Syllabus 3.2.1–3.2.2.)",
          "cards": [
              {
                  "q": "List the main purposes of reinsurance for a life insurer.",
                  "a": "Limit exposure to large individual claims; reduce claim fluctuations; protect against catastrophes; increase capacity to write business; obtain financial assistance; access reinsurer expertise; reduce capital requirements.",
                  "explain": "Syllabus 3.2.1 — core list."
              },
              {
                  "q": "What is individual surplus reinsurance?",
                  "a": "The insurer retains up to a fixed amount (retention) on each life and reinsures the excess.",
                  "explain": "Limits exposure to large sums assured."
              },
              {
                  "q": "What is quota share reinsurance?",
                  "a": "The insurer cedes a fixed proportion of every risk to the reinsurer.",
                  "explain": "Shares all risks proportionally; useful for new products or capital relief."
              },
              {
                  "q": "What is original terms reinsurance?",
                  "a": "The reinsurer receives a share of the original premium and pays the same share of claims, usually paying commission to the insurer.",
                  "explain": "Reinsurer shares all risks including investment and persistency."
              },
              {
                  "q": "What is risk premium reinsurance?",
                  "a": "The insurer pays a premium for mortality cover only, based on the sum at risk (sum assured less reserve), usually yearly renewable.",
                  "explain": "The insurer retains investment and persistency risks."
              },
              {
                  "q": "What is catastrophe excess of loss reinsurance?",
                  "a": "Covers aggregate claims from a single event exceeding a threshold, up to a limit.",
                  "explain": "Protects against events causing many deaths."
              },
              {
                  "q": "What is stop loss reinsurance?",
                  "a": "Covers total claims over a period exceeding a specified level.",
                  "explain": "Protects overall results from adverse experience."
              },
              {
                  "q": "What is facultative reinsurance?",
                  "a": "Reinsurance arranged individually for a specific risk, which the reinsurer can accept or decline.",
                  "explain": "Used for unusual or very large risks."
              },
              {
                  "q": "What is treaty reinsurance?",
                  "a": "An agreement under which the reinsurer automatically accepts risks within specified limits.",
                  "explain": "Efficient for large volumes of standard business."
              },
              {
                  "q": "What is financial reinsurance?",
                  "a": "Reinsurance designed mainly to provide capital or financing (e.g. to fund new business strain) rather than risk transfer.",
                  "explain": "Regulators scrutinise whether risk transfer is genuine."
              },
              {
                  "q": "What is a longevity swap in reinsurance?",
                  "a": "A contract transferring longevity risk on annuities to a reinsurer in exchange for fixed payments.",
                  "explain": "Used by insurers and pension schemes."
              },
              {
                  "q": "What is the retention level?",
                  "a": "The maximum amount the insurer keeps on any one life.",
                  "explain": "Set according to risk appetite and capital."
              },
              {
                  "q": "What is facultative obligatory reinsurance?",
                  "a": "The insurer may choose to cede risks, but the reinsurer must accept those ceded within the terms.",
                  "explain": "Gives the insurer flexibility."
              },
              {
                  "q": "How can reinsurance increase capacity?",
                  "a": "By transferring part of the risk, allowing the insurer to write larger policies or more business without increasing risk beyond appetite.",
                  "explain": "Important for small insurers."
              },
              {
                  "q": "Why might reinsurers provide expertise?",
                  "a": "They see experience across many insurers and can advise on underwriting, pricing and product design.",
                  "explain": "Valuable for new products or markets."
              }
          ]
      },
      {
          "id": "m25",
          "title": "Reinsurance 2",
          "description": "The factors an insurer should consider before taking out reinsurance — cost, security, capital relief, retention setting, alternatives, reinsurer relationship and service — and how reinsurance is used in practice across different product lines. (Syllabus 3.2.3.)",
          "cards": [
              {
                  "q": "List factors to consider before taking out reinsurance.",
                  "a": "Cost versus expected recoveries; reinsurer's financial strength (counterparty risk); capital relief obtained; appropriate retention levels; type of reinsurance best suited; alternatives (e.g. capital raising); reinsurer expertise and services; administration; regulatory treatment; long-term relationship.",
                  "explain": "Syllabus 3.2.3 — the 'factors before reinsuring' list."
              },
              {
                  "q": "How should the retention level be set?",
                  "a": "Based on the insurer's capital, risk appetite, size of portfolio, cost of reinsurance, and the variability of claims.",
                  "explain": "Larger insurers can retain more."
              },
              {
                  "q": "Why is reinsurer security important?",
                  "a": "The insurer remains liable to policyholders even if the reinsurer fails.",
                  "explain": "Credit ratings, collateral and diversification help."
              },
              {
                  "q": "How does reinsurance provide capital relief?",
                  "a": "By transferring risk, reducing required capital, or by financing new business strain.",
                  "explain": "Regulators must accept the risk transfer."
              },
              {
                  "q": "Why might an insurer not reinsure?",
                  "a": "Reinsurance costs exceed expected claims plus the value of risk reduction; the insurer has enough capital and diversification.",
                  "explain": "Large insurers often retain more risk."
              },
              {
                  "q": "How is reinsurance used for new products?",
                  "a": "Quota share reinsurance shares the risk of uncertain experience and gives access to reinsurer pricing and underwriting expertise.",
                  "explain": "Reduces the risk of mispricing."
              },
              {
                  "q": "How can reinsurance help with annuity business?",
                  "a": "Longevity reinsurance or swaps transfer longevity risk, reducing capital requirements.",
                  "explain": "Common in bulk annuity markets."
              },
              {
                  "q": "What are the disadvantages of reinsurance?",
                  "a": "Cost (reinsurer margins), counterparty risk, loss of profit potential, administrative burden, possible dependence on the reinsurer.",
                  "explain": "Balance against benefits."
              },
              {
                  "q": "What is recapture?",
                  "a": "The insurer taking back risks previously ceded, often permitted after a certain period.",
                  "explain": "Allows the insurer to retain more as it grows."
              },
              {
                  "q": "How can reinsurance affect product pricing?",
                  "a": "Reinsurance premium rates feed directly into the insurer's pricing for protection products.",
                  "explain": "Reinsurer rates often set the market."
              },
              {
                  "q": "What services might reinsurers provide besides risk transfer?",
                  "a": "Underwriting manuals, claims assistance, pricing data, product development, training.",
                  "explain": "Especially valuable for smaller insurers."
              },
              {
                  "q": "Why might regulators scrutinise financial reinsurance?",
                  "a": "It may not transfer significant risk and could mask weak capital positions.",
                  "explain": "Risk transfer tests apply."
              },
              {
                  "q": "How is reinsurance used to manage catastrophe risk?",
                  "a": "Catastrophe excess of loss covers limit losses from events affecting many lives.",
                  "explain": "Particularly for group life business."
              },
              {
                  "q": "How does reinsurance affect reserves?",
                  "a": "Reserves may be reduced by reinsurance recoverables, subject to regulatory rules.",
                  "explain": "Reinsurance assets carry credit risk."
              },
              {
                  "q": "Why maintain long-term relationships with reinsurers?",
                  "a": "Stable reinsurance capacity and terms, better support in claims and pricing, and willingness to cover unusual risks.",
                  "explain": "Frequent switching can harm the relationship."
              }
          ]
      },
      {
          "id": "m26",
          "title": "Underwriting",
          "description": "Underwriting as a risk management technique: its purposes, the approaches by which it is applied (medical, financial, lifestyle, at claim), classification of risks, and the factors that determine how much underwriting to use. (Syllabus 3.3.)",
          "cards": [
              {
                  "q": "What are the purposes of underwriting?",
                  "a": "To classify risks into homogeneous groups so they can be charged appropriate premiums; to protect against anti-selection; to prevent over-insurance (financial underwriting); to ensure the mortality experience is consistent with pricing assumptions.",
                  "explain": "Syllabus 3.3.1."
              },
              {
                  "q": "List approaches to underwriting.",
                  "a": "Proposal form questions; medical questionnaires; medical examinations and tests; reports from the applicant's doctor; financial evidence; lifestyle questions; tele-underwriting; claims underwriting.",
                  "explain": "Level of evidence rises with sum assured and age."
              },
              {
                  "q": "What is financial underwriting?",
                  "a": "Checking that the sum assured is reasonable relative to the applicant's financial circumstances, to prevent over-insurance and fraud.",
                  "explain": "Particularly important for large sums."
              },
              {
                  "q": "What is claims underwriting?",
                  "a": "Checking information at the time of claim (e.g. non-disclosure) instead of fully at application.",
                  "explain": "Reduces upfront cost but can increase disputes and reputational risk."
              },
              {
                  "q": "What factors determine the level of underwriting?",
                  "a": "Sum assured, age, product type, distribution channel, cost versus benefit, competition, reinsurer requirements, regulation, and target market.",
                  "explain": "Syllabus 3.3.3."
              },
              {
                  "q": "Why might underwriting be lighter for small sums assured?",
                  "a": "The cost of full underwriting may exceed the expected benefit of better risk selection.",
                  "explain": "Pricing allows for the resulting anti-selection."
              },
              {
                  "q": "What are the outcomes of underwriting?",
                  "a": "Accept at standard rates; accept with extra premium or exclusions (substandard); postpone; decline.",
                  "explain": "Classification into risk groups."
              },
              {
                  "q": "How can extra risk be charged for?",
                  "a": "Percentage extra mortality, fixed extra premium per unit of sum assured, age rating, exclusions or reduced benefits.",
                  "explain": "Choice depends on the nature of the extra risk."
              },
              {
                  "q": "Why is underwriting less relevant for annuities?",
                  "a": "For standard annuities, poorer health is favourable to the insurer; underwriting is used mainly for enhanced annuities.",
                  "explain": "Anti-selection risk runs in the other direction."
              },
              {
                  "q": "How can distribution channel affect underwriting?",
                  "a": "Direct channels may use simplified underwriting; advised channels support full underwriting.",
                  "explain": "Mortality may differ by channel."
              },
              {
                  "q": "What is the trade-off in underwriting intensity?",
                  "a": "More underwriting reduces anti-selection but increases costs and delays, and may lose sales.",
                  "explain": "Balance based on sum assured and competition."
              },
              {
                  "q": "What is guaranteed acceptance?",
                  "a": "Cover offered without underwriting, usually with limited benefits (e.g. return of premiums in early years).",
                  "explain": "Priced for anti-selection."
              },
              {
                  "q": "How do reinsurers influence underwriting?",
                  "a": "They often set underwriting limits and manuals as a condition of reinsurance.",
                  "explain": "Reinsurers see wide experience."
              },
              {
                  "q": "How might genetic testing affect underwriting?",
                  "a": "Applicants may know more than insurers; restrictions on using test results increase anti-selection risk.",
                  "explain": "Regulation varies by country."
              },
              {
                  "q": "Why monitor underwriting decisions?",
                  "a": "To ensure consistency, assess effectiveness and identify training needs, comparing experience with expectations.",
                  "explain": "Links to experience monitoring."
              }
          ]
      },
      {
          "id": "m27",
          "title": "Policy data checks",
          "description": "Why policy data must be checked, the checks performed (movement reconciliations, accounting reconciliations, consistency and reasonableness checks, spot checks) and how data errors are resolved — a key risk management technique. (Syllabus 3.5.)",
          "cards": [
              {
                  "q": "Why are policy data checks important?",
                  "a": "Reserves, pricing, experience analysis, claims payments and regulatory returns all depend on accurate data.",
                  "explain": "Data risk appears in syllabus 3.1, and checks are listed in 3.5."
              },
              {
                  "q": "What is a movement reconciliation?",
                  "a": "Checking that policies in force at the start plus new business less exits (deaths, lapses, maturities) equals policies in force at the end.",
                  "explain": "Identifies missing or duplicate records."
              },
              {
                  "q": "What is an accounting reconciliation?",
                  "a": "Checking data totals (e.g. premiums, claims) against the accounts.",
                  "explain": "Ensures consistency between administration and finance systems."
              },
              {
                  "q": "Give four consistency checks on policy data.",
                  "a": "Dates in logical order; ages within limits; sums assured and premiums consistent with product terms; unit holdings match fund records; no duplicate policy numbers.",
                  "explain": "Automated validation rules catch many issues."
              },
              {
                  "q": "What are spot checks?",
                  "a": "Detailed checks of a sample of individual records against source documents.",
                  "explain": "Confirm the accuracy of data fields."
              },
              {
                  "q": "Why check average values between periods?",
                  "a": "Unexpected changes in average sum assured or premium may indicate data errors.",
                  "explain": "Simple but effective."
              },
              {
                  "q": "How should data errors be dealt with?",
                  "a": "Investigate and correct at source; where not possible, make assumptions and document the impact.",
                  "explain": "Report material issues to management."
              },
              {
                  "q": "Why are unit-linked data checks important?",
                  "a": "Unit holdings must match the unit fund records, or the insurer may be under- or over-matched.",
                  "explain": "Unit reconciliation is a key control."
              },
              {
                  "q": "Who is responsible for data quality?",
                  "a": "Administration teams, with oversight by actuarial and finance functions.",
                  "explain": "Clear responsibility improves quality."
              },
              {
                  "q": "Why is data quality important for reinsurance?",
                  "a": "Reinsurance recoveries depend on accurate records of ceded risks.",
                  "explain": "Regular reconciliations with reinsurers are needed."
              },
              {
                  "q": "How can systems help data quality?",
                  "a": "Automated validation at entry, integrated systems and audit trails reduce errors.",
                  "explain": "Legacy systems increase risk."
              },
              {
                  "q": "What is the effect of poor data on experience analysis?",
                  "a": "Incorrect exposure or claims leads to wrong assumptions.",
                  "explain": "Data checks precede experience investigations."
              },
              {
                  "q": "Why check data before a valuation?",
                  "a": "Errors lead directly to mis-stated reserves and capital.",
                  "explain": "Valuation data checks are part of professional standards."
              },
              {
                  "q": "What are grouping checks?",
                  "a": "Checking that model points reproduce key totals of the underlying policy data.",
                  "explain": "Ensures model accuracy."
              },
              {
                  "q": "Why document data limitations?",
                  "a": "Users need to know how reliable the results are.",
                  "explain": "Professional standards require disclosure."
              }
          ]
      },
      {
          "id": "m28",
          "title": "Investment",
          "description": "Asset-liability matching for a life insurer: principles of investment, categorising liabilities (guaranteed in money terms, real terms, unit-linked, with-profits, non-unit), matching strategies for each, and the use of models in setting investment strategy. (Syllabus 3.4 and 4.2.)",
          "cards": [
              {
                  "q": "What are the principles of investment for a life insurer?",
                  "a": "Invest to meet liabilities as they fall due by matching their nature, term and currency, and seek to maximise return subject to the risk appetite and regulatory constraints.",
                  "explain": "Syllabus 3.4.1."
              },
              {
                  "q": "How can liabilities be categorised for matching?",
                  "a": "Guaranteed in money terms; guaranteed in real terms; unit-linked; with-profits (discretionary); non-unit liabilities.",
                  "explain": "Syllabus 3.4.2."
              },
              {
                  "q": "How should money-guaranteed liabilities be matched?",
                  "a": "With fixed-interest bonds of matching term, cash flow matching or immunisation.",
                  "explain": "E.g. without-profits annuities and endowments."
              },
              {
                  "q": "How should real-term liabilities be matched?",
                  "a": "With index-linked bonds or inflation swaps.",
                  "explain": "E.g. index-linked annuities."
              },
              {
                  "q": "How should unit-linked liabilities be matched?",
                  "a": "By holding the assets underlying the units.",
                  "explain": "The insurer bears little investment risk on the unit part."
              },
              {
                  "q": "How should with-profits liabilities be invested?",
                  "a": "With a mix of real and fixed assets reflecting guarantees and the freedom provided by discretion over bonuses; equities and property to enhance returns.",
                  "explain": "Guarantees limit how much can be in equities."
              },
              {
                  "q": "How should non-unit liabilities be matched?",
                  "a": "Usually with fixed-interest assets or cash, depending on the nature of the cash flows.",
                  "explain": "They are small relative to unit liabilities."
              },
              {
                  "q": "What is immunisation?",
                  "a": "Matching the duration (and convexity) of assets and liabilities so that small interest rate changes do not affect surplus.",
                  "explain": "Requires regular rebalancing."
              },
              {
                  "q": "What is cash flow matching?",
                  "a": "Choosing assets whose cash flows exactly match liability cash flows.",
                  "explain": "Rarely perfectly possible for long liabilities."
              },
              {
                  "q": "How can models help set investment strategy?",
                  "a": "By projecting assets and liabilities stochastically under different strategies to assess return, risk and capital.",
                  "explain": "Syllabus 4.2 includes developing investment strategy."
              },
              {
                  "q": "Why might a life insurer deliberately mismatch?",
                  "a": "To seek higher returns, if it has free assets and risk appetite.",
                  "explain": "Capital requirements increase with mismatch."
              },
              {
                  "q": "What regulatory constraints may apply to investment?",
                  "a": "Admissibility rules, concentration limits, prudent person principle, and capital charges on risky assets.",
                  "explain": "Shape the feasible strategy."
              },
              {
                  "q": "How does the size of free assets affect investment strategy?",
                  "a": "Larger free assets allow more mismatching and higher-return assets.",
                  "explain": "Small free assets require close matching."
              },
              {
                  "q": "What is reinvestment risk?",
                  "a": "Risk that future investment income must be reinvested at lower rates than assumed.",
                  "explain": "Relevant for long-term guaranteed products."
              },
              {
                  "q": "Why consider liquidity in investment?",
                  "a": "To meet claims, surrenders and collateral calls without forced sales.",
                  "explain": "Unit-linked funds need liquid assets for redemptions."
              }
          ]
      },
      {
          "id": "m29",
          "title": "Further risk management",
          "description": "Further ways of managing a life insurer's risks: capital management, expense control, policy retention activity, managing new business mix and volumes, managing options, and systematic risk assessment and management strategies. (Syllabus 3.5.)",
          "cards": [
              {
                  "q": "List further risk management techniques in syllabus 3.5.",
                  "a": "Policy data checks; choice of with-profits bonus method; capital management; expense control; policy retention activity; management of new business mix and volumes; management of options; systematic risk assessment and management strategies.",
                  "explain": "Each maps to risks listed in 3.1."
              },
              {
                  "q": "How can expense control manage risk?",
                  "a": "Budgeting, monitoring expenses against assumptions, efficiency programmes, outsourcing, and pricing with realistic assumptions.",
                  "explain": "Expense overruns erode profits."
              },
              {
                  "q": "What is policy retention activity?",
                  "a": "Actions to reduce lapses, e.g. contacting policyholders considering surrender, offering alterations, improving service.",
                  "explain": "Improves persistency and recovers initial expenses."
              },
              {
                  "q": "How can new business mix and volume be managed?",
                  "a": "Setting sales targets by product, adjusting pricing and commission, restricting capital-intensive products.",
                  "explain": "Ensures business plan and capital constraints are met."
              },
              {
                  "q": "How can options be managed?",
                  "a": "Pricing them properly, restricting exercise, hedging, monitoring take-up and designing new products without costly options.",
                  "explain": "Management of options is explicit in syllabus 3.5."
              },
              {
                  "q": "What is systematic risk assessment?",
                  "a": "Identifying, measuring, monitoring and managing all risks consistently through an ERM framework — risk registers, risk appetite, limits and reporting.",
                  "explain": "Ensures risks aren't overlooked."
              },
              {
                  "q": "What is a risk register?",
                  "a": "A record of identified risks with their likelihood, impact, owners and mitigations.",
                  "explain": "A basic ERM tool."
              },
              {
                  "q": "What is risk appetite?",
                  "a": "The amount and type of risk the insurer is willing to accept in pursuit of its objectives.",
                  "explain": "Guides limits and decisions."
              },
              {
                  "q": "How can capital management reduce risk?",
                  "a": "Holding adequate capital buffers, using reinsurance or hedging to reduce capital needs, raising capital when needed.",
                  "explain": "Supports solvency and growth."
              },
              {
                  "q": "How can hedging be used for risk management?",
                  "a": "Derivatives can hedge interest rate, equity and inflation risks, especially on guarantees.",
                  "explain": "Introduces basis and counterparty risk."
              },
              {
                  "q": "How can diversification reduce risk?",
                  "a": "Writing a mix of products (e.g. protection and annuities) diversifies mortality and longevity risk.",
                  "explain": "Also diversifies across markets."
              },
              {
                  "q": "Why monitor key risk indicators?",
                  "a": "Early warning of adverse trends lets management act before losses grow.",
                  "explain": "Examples: lapse rates, expense ratios, claims frequency."
              },
              {
                  "q": "How can product withdrawal be a risk management tool?",
                  "a": "Stopping sales of unprofitable or risky products limits losses.",
                  "explain": "A drastic but sometimes necessary step."
              },
              {
                  "q": "How can governance manage risk?",
                  "a": "Clear responsibilities, board oversight, independent risk and actuarial functions, internal audit.",
                  "explain": "Addresses the 'actions of the board' risk."
              },
              {
                  "q": "How can the insurer manage distributor risk?",
                  "a": "Oversight, training, commission design, monitoring of sales quality and persistency by distributor.",
                  "explain": "Reduces mis-selling and poor persistency."
              }
          ]
      },
      {
          "id": "m30",
          "title": "Monitoring experience",
          "description": "Why and how a life insurer monitors mortality, persistency, expense and investment experience (including the data required), and how to carry out and use an analysis of surplus and an analysis of embedded value profit. (Syllabus 5.2–5.3.)",
          "cards": [
              {
                  "q": "Why is it important to monitor experience?",
                  "a": "To check assumptions, identify trends and emerging risks, inform pricing and reserving, identify sources of profit and loss, and support management decisions.",
                  "explain": "Syllabus 5.2.1."
              },
              {
                  "q": "How is mortality experience monitored?",
                  "a": "Compare actual deaths with expected deaths (by lives and amounts) by age, sex, product, duration, underwriting class and channel.",
                  "explain": "Data needed: exposure and claims by these categories."
              },
              {
                  "q": "How is persistency monitored?",
                  "a": "Compare actual lapses and surrenders with expected rates by product, duration, channel and distributor.",
                  "explain": "Early-duration lapses are key for expense recovery."
              },
              {
                  "q": "How is expense experience monitored?",
                  "a": "Compare actual expenses with those assumed, analysed by type (initial, renewal, claims) and product; investigate overruns.",
                  "explain": "Requires an expense allocation exercise."
              },
              {
                  "q": "How is investment experience monitored?",
                  "a": "Compare actual returns with assumed returns by asset class and against benchmarks; monitor defaults.",
                  "explain": "Identify effects of strategy and market conditions."
              },
              {
                  "q": "What data is needed for experience monitoring?",
                  "a": "Policy data (exposure, movements), claims data, expense data, investment data — accurate and consistent.",
                  "explain": "Syllabus 5.2.2 includes the data required."
              },
              {
                  "q": "What is an analysis of surplus?",
                  "a": "Breaking down the change in surplus over a period into sources: investment, mortality, expenses, persistency, new business, changes in assumptions, and other items.",
                  "explain": "Syllabus 5.3.1."
              },
              {
                  "q": "What is an analysis of embedded value profit?",
                  "a": "Explaining the change in embedded value over a period: expected return, experience variances, assumption changes, value of new business, economic variances, capital movements.",
                  "explain": "Shows the value added by management."
              },
              {
                  "q": "How can the results of an analysis of surplus be used?",
                  "a": "To check assumptions and reserves, validate models, inform pricing and bonus declarations, and report to management and regulators.",
                  "explain": "Syllabus 5.3.2."
              },
              {
                  "q": "Why separate one-off items in the analysis?",
                  "a": "They should not influence assumptions for future experience.",
                  "explain": "E.g. a one-off expense or data correction."
              },
              {
                  "q": "What is the 'expected return' item in EV profit?",
                  "a": "The unwinding of the discount rate on the opening EV — the profit expected if experience matches assumptions.",
                  "explain": "Separates expected from unexpected profits."
              },
              {
                  "q": "Why might experience differ from assumptions?",
                  "a": "Random fluctuations, trends, changes in business mix, underwriting practice or economic conditions.",
                  "explain": "Distinguish random from systematic differences."
              },
              {
                  "q": "How can credibility be addressed in experience analysis?",
                  "a": "Pool experience over several years or use credibility weighting with industry data.",
                  "explain": "Small portfolios have noisy experience."
              },
              {
                  "q": "How can experience analysis support product management?",
                  "a": "Identifying loss-making products or channels, informing repricing or redesign.",
                  "explain": "Completes the control cycle."
              },
              {
                  "q": "Why investigate large variances promptly?",
                  "a": "They may indicate data errors, emerging risks or failures of controls.",
                  "explain": "Early action limits losses."
              }
          ]
      },
      {
          "id": "m31",
          "title": "Problem solving",
          "description": "Applying the whole SP2 course to exam questions: structuring answers with the course's lists and frameworks, generating breadth, applying principles to unfamiliar products and markets, and handling calculations and command verbs.",
          "cards": [
              {
                  "q": "What is the key to scoring well in SP2?",
                  "a": "Applying knowledge to the scenario with a breadth of relevant points, rather than reciting lists generically.",
                  "explain": "Examiners reward relevant application."
              },
              {
                  "q": "Give three frameworks for structuring SP2 answers.",
                  "a": "The list of risks (syllabus 3.1); product design factors (2.1.1); business environment factors (1.3); the control cycle; stakeholders (policyholders, shareholders, regulator, distributors).",
                  "explain": "Frameworks generate breadth quickly."
              },
              {
                  "q": "How should you approach an unfamiliar product question?",
                  "a": "Break the product into its components (death, survival, investment, options), identify the risks and needs each creates, and apply the course's principles.",
                  "explain": "Unfamiliar products are just combinations of familiar features."
              },
              {
                  "q": "How should numerical questions be answered?",
                  "a": "Show clear workings, state assumptions and interpret results.",
                  "explain": "Method marks are available even with arithmetic slips."
              },
              {
                  "q": "What does 'discuss' mean?",
                  "a": "Consider different aspects and viewpoints, weighing pros and cons.",
                  "explain": "Include both sides."
              },
              {
                  "q": "What does 'describe' mean?",
                  "a": "Give an account of the key features.",
                  "explain": "More than a list, less than an evaluation."
              },
              {
                  "q": "How should marks guide answer length?",
                  "a": "Roughly one valid point per half to one mark.",
                  "explain": "Breadth matters."
              },
              {
                  "q": "Why consider both policyholder and insurer perspectives?",
                  "a": "Many questions involve fairness and risk sharing between them.",
                  "explain": "Doubles the range of points."
              },
              {
                  "q": "How can the control cycle help answers?",
                  "a": "Frame problems as specify, develop solution, monitor, within the environment.",
                  "explain": "Useful for 'what should the insurer do' questions."
              },
              {
                  "q": "Why read the question carefully?",
                  "a": "Scenario details (market, product, channel) determine which points are relevant.",
                  "explain": "Examiners penalise generic answers."
              },
              {
                  "q": "How can past examiners' reports help?",
                  "a": "They show marking approaches and common weaknesses.",
                  "explain": "Use them alongside past papers."
              },
              {
                  "q": "Why link chapters in answers?",
                  "a": "Real problems span pricing, reserving, risk and capital.",
                  "explain": "Shows higher-order understanding."
              },
              {
                  "q": "How to manage time in SP2?",
                  "a": "Allocate time by marks and move on when used.",
                  "explain": "Complete all parts for better scores."
              },
              {
                  "q": "What is a common weakness in SP2 answers?",
                  "a": "Insufficient breadth, not addressing the question's context, and vague points.",
                  "explain": "Specific, applied points score best."
              },
              {
                  "q": "How to handle 'suggest' questions?",
                  "a": "Offer a range of sensible ideas, not necessarily from the Core Reading, justified briefly.",
                  "explain": "Credit for well-reasoned points."
              }
          ]
      },
      {
          "id": "m32",
          "title": "Glossary",
          "description": "Key SP2 terminology as a recall deck — product, with-profits, unit-linked, reserving, capital and reinsurance terms — so definitions can be given precisely.",
          "cards": [
              {
                  "q": "Define 'sum at risk'.",
                  "a": "The sum assured less the reserve held for the policy.",
                  "explain": "Basis for risk premium reinsurance."
              },
              {
                  "q": "Define 'asset share'.",
                  "a": "The accumulation of premiums less expenses and costs, plus actual investment returns, for a policy or group of policies.",
                  "explain": "Used for terminal bonus and surrender values."
              },
              {
                  "q": "Define 'new business strain'.",
                  "a": "The initial loss on writing a policy when initial expenses and reserves exceed initial premiums.",
                  "explain": "Requires capital."
              },
              {
                  "q": "Define 'reversionary bonus'.",
                  "a": "A bonus added to the sum assured of a with-profits policy, payable at claim and guaranteed once added.",
                  "explain": "Simple, compound or super-compound."
              },
              {
                  "q": "Define 'terminal bonus'.",
                  "a": "A non-guaranteed bonus added at claim.",
                  "explain": "Brings payouts closer to asset shares."
              },
              {
                  "q": "Define 'embedded value'.",
                  "a": "Adjusted net worth plus the present value of future profits on in-force business, less the cost of capital.",
                  "explain": "Excludes future new business."
              },
              {
                  "q": "Define 'non-unit reserve'.",
                  "a": "A reserve held outside the unit fund to cover future negative non-unit cash flows.",
                  "explain": "Unit-linked business."
              },
              {
                  "q": "Define 'market value reduction'.",
                  "a": "A reduction applied on surrender of accumulating with-profits policies when asset values are low.",
                  "explain": "Protects remaining policyholders."
              },
              {
                  "q": "Define 'profit signature'.",
                  "a": "The expected profit emerging each year per policy issued.",
                  "explain": "Output of profit testing."
              },
              {
                  "q": "Define 'anti-selection'.",
                  "a": "Individuals acting on private information to their own advantage, to the insurer's detriment.",
                  "explain": "E.g. those in poor health buying cover."
              },
              {
                  "q": "Define 'appropriation price'.",
                  "a": "Unit price based on the cost of buying the fund's assets.",
                  "explain": "Used when the fund is expanding."
              },
              {
                  "q": "Define 'facultative reinsurance'.",
                  "a": "Reinsurance arranged case by case.",
                  "explain": "Reinsurer can accept or decline."
              },
              {
                  "q": "Define 'estate'.",
                  "a": "Assets in a with-profits fund in excess of those needed to meet policyholders' reasonable expectations.",
                  "explain": "Provides smoothing and working capital."
              },
              {
                  "q": "Define 'risk discount rate'.",
                  "a": "The rate used to discount future profits, reflecting required return and risk.",
                  "explain": "Used in profit testing and traditional EV."
              },
              {
                  "q": "Define 'paid-up policy'.",
                  "a": "A policy on which premiums have stopped but a reduced benefit continues.",
                  "explain": "Value set by equating policy values."
              }
          ]
      }
  ],
  questions: [
    {
      id: "sp2-q1",
      title: "Life insurance products and the operating environment",
      modules: "Modules 1, 2, 8, 9",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Define",
          marks: 3,
          question:
            "Define the three broad benefit triggers used to categorise life insurance products, and the four product bases named in the official SP2 syllabus.",
          answer:
            "Benefit triggers: on death, on survival to a specified point in time, or on continued survival. Product bases: conventional without-profits, with-profits, unit-linked, and index-linked.",
          note: "A complete answer names all three triggers and all four bases precisely, not a partial list.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why understanding a life insurance product requires seeing it from both the consumer's needs and the insurer's risks simultaneously, rather than describing the product purely from the customer's perspective.",
          answer:
            "A complete understanding of any product requires seeing it from both sides at once — what genuine need it meets for the customer, and what genuine risk exposure it creates for the insurer — since these two perspectives directly shape appropriate design, pricing and risk management decisions.",
          note: "A strong answer explicitly frames this as a <em>dual</em> perspective requirement, not just describes the product's customer-facing features.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two operating-environment factors (from the official syllabus's list) that could affect the success of a new with-profits savings product launched in an unfamiliar market.",
          answer:
            "Local culture: if the target market has limited cultural familiarity with pooled, discretionary-bonus savings products, take-up could be lower than in a market with an established with-profits tradition, regardless of the product's technical merits. Remuneration of sales channels: if the local distribution market's commission structures do not adequately reward the genuine effort involved in explaining a with-profits product's smoothing mechanism, distributors may be incentivised to favour simpler, easier-to-sell alternatives instead.",
          note: "Any two distinct, well-justified operating-environment factors should be accepted, provided they are applied to this specific with-profits scenario.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why professional guidance is listed as a distinct environmental influence from the regulatory environment.",
          answer:
            "Professional guidance sets expected standards of actuarial practice that complement, but are distinct from, statutory regulation — an actuary must comply with both the legal regulatory framework and the profession's own guidance, which can sometimes set a higher or more specific bar than regulation alone requires.",
          note: "This connects directly to the professional-standards-as-distinct-layer theme developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q2",
      title: "Product design and asset shares for a with-profits contract",
      modules: "Modules 5, 16",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A with-profits policy has a starting asset share of &pound;0. Each year, a premium of &pound;2,000 is received. Expenses of &pound;300 are deducted in year 1 and &pound;100 in year 2 (deducted before applying investment return). The fund achieves an investment return of 6% per annum. Using the recursive formula AS(t) = (AS(t-1) + premium - expenses) &times; (1 + investment return), calculate the asset share at the end of year 1 and at the end of year 2.",
          answer:
            "AS(1) = (&pound;0 + &pound;2,000 &minus; &pound;300) &times; 1.06 = &pound;1,700 &times; 1.06 = &pound;1,802.00. AS(2) = (&pound;1,802.00 + &pound;2,000 &minus; &pound;100) &times; 1.06 = &pound;3,702.00 &times; 1.06 = &pound;3,924.12.",
          note: "Arithmetic check: AS(1)=1,802.00; AS(2)=3,924.12. Marks are typically split across correctly applying the recursion for each year.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the asset share calculated in part (i) does not automatically determine the exact bonus this policyholder receives.",
          answer:
            "Bonus-setting must balance paying a fair reflection of the policy's own asset share against smoothing volatility across different years and maintaining fund solvency for remaining policyholders, so the insurer exercises genuine discretion rather than mechanically paying out the calculated asset share figure precisely.",
          note: "A strong answer explicitly names the genuine discretion involved, not just restates that asset shares are 'used' for bonus-setting.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why bonus-setting for this with-profits fund raises a genuine inter-generational fairness issue.",
          answer:
            "A with-profits fund pools assets across policyholders who joined at different times, so bonus decisions can transfer value between generations (e.g. overly generous bonuses now could disadvantage future policyholders' claims), requiring the insurer to balance fairness across the whole fund over time.",
          note: "This connects directly to the inter-generational fairness theme developed in this course.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this product's premium, benefit, and charge structure should be designed together as an integrated whole, rather than each element decided independently.",
          answer:
            "The premium a customer is willing to pay, the benefit delivered, and any charges levied are all interconnected — a benefit-rich design typically requires a correspondingly higher premium or charge structure to remain commercially viable, so these elements cannot be soundly decided in isolation from each other.",
          note: "This connects directly to the integrated-design theme developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q3",
      title: "Unit pricing and discontinuance terms",
      modules: "Modules 13, 21",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why unit pricing for an internal unit-linked fund must be applied consistently and fairly across policyholders, and why a bid-offer spread might be used.",
          answer:
            "Unit pricing must ensure that policyholders buying or selling units at any given time receive a fair price reflecting the fund's true current value, protecting both entering and existing policyholders from unfair dilution or advantage. A bid-offer spread reflects genuine dealing costs incurred when the fund manager buys or sells underlying assets to accommodate transacting policyholders, ensuring those causing the dealing activity bear its genuine cost rather than spreading it unfairly across all fund policyholders.",
          note: "A strong answer addresses both the fairness principle <em>and</em> the specific bid-offer spread mechanism.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why discontinuance terms for a without-profits contract must reflect the insurer's changed financial position on early exit, rather than simply returning premiums paid.",
          answer:
            "Discontinuing early changes the insurer's expected future cashflows and expense recovery (since expenses are typically front-loaded relative to premium income), so discontinuance terms must be set using genuine, defensible principles that fairly reflect this change, not simply return premiums paid regardless of the insurer's actual altered position.",
          note: "This connects directly to CB1's expense-recovery material applied to a genuine discontinuance context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why discontinuance terms should be set with genuine care to avoid creating an incentive for anti-selective early discontinuance.",
          answer:
            "If surrender terms are more generous than the policy's true remaining value, healthier or lower-risk policyholders might be incentivised to surrender and re-purchase more advantageous new cover elsewhere, leaving the insurer with a worse-than-average remaining book. This requires the insurer to set surrender values reflecting the policy's true remaining economic value (e.g. via reserves or equating policy values) rather than an overly generous formula that could be exploited by policyholders whose own circumstances have changed.",
          note: "A strong answer explains the genuine anti-selection <em>mechanism</em>, not just asserts that terms should be 'fair'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the syllabus requires discussing the extent to which discontinuance calculation methods meet their underlying principles, rather than simply describing the methods.",
          answer:
            "This tests a higher-order skill — critically evaluating whether a specific calculation method actually achieves the underlying fairness and defensibility principles it is meant to serve, not merely being able to perform the calculation mechanically without judging its adequacy.",
          note: "This connects directly to SP2's higher-order skill requirement.",
        },
      ],
    },
    {
      id: "sp2-q4",
      title: "Identifying sources of risk in life insurance",
      modules: "Modules 10, 11, 12",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "List",
          marks: 3,
          question:
            "List six genuine sources of risk to a life insurance company named in the official syllabus, other than mortality rates and investment performance.",
          answer:
            "Any six of: policy and other data, expenses (including the effect of inflation), persistency, mix of new business, volume of new business, guarantees and options, competition, actions of the board of directors, actions of distributors, failure of appropriate management systems and controls, counterparties, legal/regulatory/tax developments, fraud, aggregation and concentration of risk, climate risks.",
          note: "A complete answer names six distinct sources from the official list.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why mortality rate risk points in opposite directions for a life insurer's protection business and its annuity business.",
          answer:
            "Mortality improving faster than assumed reduces protection-business cost (fewer deaths than priced for) but increases annuity-business cost (annuitants living longer than priced for), meaning the same underlying mortality trend risk can be a genuine tailwind for one product line and a headwind for the other within the same insurer.",
          note: "A strong answer explicitly explains the inverted relationship, not just names both product lines.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss why climate risks have become an explicitly named risk source for life insurers, and how they might affect the insurer through two different channels.",
          answer:
            "Climate risk reflects the actuarial profession's evolving understanding of emerging risk categories. It can affect a life insurer through physical risk (e.g. climate change affecting mortality via extreme weather or heat-related illness, directly affecting the liability side) and transition risk (e.g. affecting the value of the insurer's own investment portfolio as economies shift away from carbon-intensive activities, affecting the asset side), two distinct channels through which the same underlying climate trend can reach the insurer's balance sheet.",
          note: "A strong answer identifies both channels (physical and transition risk) explicitly, not just asserts that climate change 'matters'.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why 'failure of appropriate management systems and controls' is a distinct risk source from 'actions of the board of directors'.",
          answer:
            "Board actions concern genuine strategic or governance decisions, while failure of management systems and controls concerns a different, more operational risk — the insurer's internal processes failing to detect or prevent problems, even where board-level strategic decisions were themselves entirely sound.",
          note: "This connects directly to the strategic-versus-operational risk distinction developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q5",
      title: "Reinsurance and underwriting for a new protection product",
      modules: "Modules 24, 25, 26",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 3,
          question:
            "A life insurer writes &pound;3,000,000 of gross premium on a new term assurance account and retains 70% under a quota share reinsurance treaty. Calculate the retained premium and the ceded premium.",
          answer:
            "Retained premium = &pound;3,000,000 &times; 70% = &pound;2,100,000. Ceded premium = &pound;3,000,000 &minus; &pound;2,100,000 = &pound;900,000.",
          note: "Arithmetic check: 3,000,000×0.70=2,100,000; ceded=900,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer, having limited own experience with this new product, might particularly value reinsurance beyond its risk-transfer purpose.",
          answer:
            "Reinsurers often hold significant mortality pricing expertise and data pooled across many insurers' experience, making them a valuable partner for pricing this new or unusual mortality risk, not merely a pure risk-transfer counterparty, given the insurer's own limited experience with this specific product.",
          note: "This connects directly to the reinsurer-as-expertise-source theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss the genuine factors this insurer should consider when determining its underwriting approach for this new term assurance product.",
          answer:
            "The genuine cost of underwriting relative to the sum insured being assessed, the size and duration of the policy (a longer-duration commitment warrants more rigorous underwriting since mispricing cannot easily be corrected through repricing), the insurer's own risk appetite and pricing confidence given its limited own experience, and the competitive/distribution implications of a more or less rigorous underwriting process on genuine customer take-up.",
          note: "A strong answer addresses multiple genuine factors together, not just one in isolation.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why a guaranteed acceptance version of this product would typically carry a lower sum insured than a fully-underwritten equivalent.",
          answer:
            "Without individual underwriting, the insurer faces genuine anti-selection risk from applicants who know they have poor health choosing this product specifically, so limiting the sum insured reduces the insurer's genuine financial exposure to this anti-selection risk while still offering broadly accessible cover.",
          note: "This connects directly to the guaranteed-acceptance anti-selection theme developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q6",
      title: "Asset-liability matching for a mixed life insurance book",
      modules: "Module 28",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why an insurer with both annuity business and unit-linked business should categorise its liabilities into different types before setting an asset-liability matching strategy.",
          answer:
            "Different liability types have different duration, cashflow certainty, and risk-bearing characteristics — annuity liabilities are long-duration and insurer-borne, while unit-linked liabilities pass investment risk directly to the policyholder — so a single, undifferentiated matching strategy applied to all liabilities together would fail to appropriately match any of them individually.",
          note: "A strong answer explicitly explains <em>why</em> categorisation is necessary before matching, not just states that liabilities should be categorised.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the unit-linked book requires a different ALM approach from the annuity book.",
          answer:
            "Since unit-linked investment risk and return pass directly to the policyholder, the insurer's own ALM concern is largely limited to managing charges, expenses, and any embedded guarantees, rather than managing a large pool of insurer-owned assets against insurer-owned liabilities, unlike the annuity book where the insurer itself bears the long-duration interest rate risk.",
          note: "A strong answer explicitly contrasts the two books' risk-bearing structures.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 4,
          question:
            "Discuss two further ways (beyond reinsurance, underwriting, and asset-liability matching) this insurer could manage the risks it faces.",
          answer:
            "Choice of with-profits bonus method: for any with-profits business, the bonus-setting approach itself is a genuine risk management lever affecting both member fairness and fund solvency. Policy retention activity: proactive retention activity directly manages persistency risk, since higher-than-assumed lapses can damage profitability given typically front-loaded expenses relative to premium income.",
          note: "Any two distinct, well-explained further risk management approaches should be accepted from the official syllabus list.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why the genuine principles of investment for this insurer should balance security against return, rather than simply maximising expected return.",
          answer:
            "Investment strategy should reflect the nature, term and currency of the insurer's liabilities, balancing security against return and providing sufficient liquidity to meet claims and expenses as they fall due, since maximising expected return alone could expose the insurer to genuine solvency risk if asset and liability values move unfavourably out of step.",
          note: "This connects directly to CM2's core matching principle.",
        },
      ],
    },
    {
      id: "sp2-q7",
      title: "Pricing and modelling a term assurance product",
      modules: "Modules 14, 15",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A life insurer is pricing a one-year renewable term assurance policy with a sum insured of &pound;150,000. The assumed annual mortality rate is 0.0025, and expenses are assumed to be 9% of the gross premium, with no discounting within the one-year term. Using the equation of value, calculate the required annual premium.",
          answer:
            "Expected cost of benefits = 0.0025 &times; &pound;150,000 = &pound;375. Setting gross premium P such that P &times; (1 &minus; 0.09) = &pound;375 gives P = &pound;375 / 0.91 = &pound;412.09 (to the nearest penny).",
          note: "Arithmetic check: 0.0025×150000=375; 375/0.91=412.09.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why this insurer might use stochastic simulation, rather than the deterministic calculation in part (i), if this product included a guaranteed minimum investment-linked benefit.",
          answer:
            "An investment guarantee only bites under certain, adverse future market outcomes, so its true cost depends on the full probability-weighted range of possible future market paths, which stochastic simulation and option-pricing techniques are specifically designed to capture, unlike the single deterministic calculation used for the fixed-benefit product in part (i).",
          note: "This connects directly to CM2's option-pricing material applied to a genuine guarantee-costing context.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why sensitivity analysis should be carried out alongside the pricing calculation in part (i).",
          answer:
            "Sensitivity analysis reveals how much the calculated premium changes when key assumptions (e.g. the mortality rate or expense loading) are varied, showing which assumptions the result is most exposed to — without this, a single-point premium could give false confidence, since the premium is only as reliable as the assumptions used to calculate it.",
          note: "A strong answer explicitly connects sensitivity analysis to the genuine uncertainty in underlying assumptions.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why this same underlying model might need different assumptions if used to calculate embedded value rather than to price this product.",
          answer:
            "Pricing typically uses best-estimate or lightly-margined assumptions (including a profit requirement) to determine a competitive, sustainable premium, while embedded value calculation requires realistic, best-estimate assumptions reflecting the true expected value of in-force business, so the same model structure can require different assumption inputs depending on its specific purpose.",
          note: "This connects the numeric pricing calculation directly to the assumption-purpose material developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q8",
      title: "Supervisory reserves and solvency capital",
      modules: "Modules 19, 20",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 5,
          question:
            "A life insurer's best estimate reserve for a block of business is &pound;25,000,000, with an assumed standard deviation of outcomes of 6% of the reserve. Using a Value at Risk approach with a 99.5% confidence level (z-score of 2.576), calculate the solvency capital requirement.",
          answer:
            "Standard deviation = 6% &times; &pound;25,000,000 = &pound;1,500,000. Solvency capital requirement = &pound;1,500,000 &times; 2.576 = &pound;3,864,000.",
          note: "Arithmetic check: 25,000,000×0.06=1,500,000; 1,500,000×2.576=3,864,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain what a 'non-unit reserve' is, and why this concept is specific to unit-linked business.",
          answer:
            "A non-unit reserve is an additional reserve held for a unit-linked contract's non-unit-linked elements (e.g. mortality risk cover, or the risk that future charges won't cover future expenses), needed because the unit-linked fund value itself only covers the investment-linked element of the contract, not these additional non-investment risk elements.",
          note: "A strong answer explicitly explains <em>why</em> the unit fund alone is insufficient, not just names the term.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 2,
          question:
            "Discuss why the strength of this insurer's reserving basis and the level of solvency capital required interact, rather than being determined in complete isolation from each other.",
          answer:
            "A more prudently-set reserve already provides some of the genuine protection against adverse deviation that solvency capital is otherwise meant to provide, so the appropriate level of solvency capital depends on how prudent the reserving basis already is.",
          note: "This directly tests the official syllabus's explicit interplay objective.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why stochastic simulation combined with option pricing techniques might be used to determine the cost of an investment guarantee embedded in this insurer's reserving basis.",
          answer:
            "An investment guarantee's true cost depends on the full probability-weighted range of possible future market paths, which stochastic simulation and option-pricing techniques are specifically designed to capture, providing a more reliable basis for the reserve than a single deterministic scenario.",
          note: "This connects the numeric capital calculation directly to the guarantee-costing material developed in this course.",
        },
      ],
    },
    {
      id: "sp2-q9",
      title: "Setting assumptions for pricing, reserving and embedded value",
      modules: "Modules 17, 18",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Distinguish",
          marks: 4,
          question:
            "Distinguish between the genuine purpose of assumptions used for pricing, for determining liabilities, and for determining embedded value, for the same underlying life insurance mortality risk.",
          answer:
            "Pricing assumptions must recover the insurer's cost of capital and target margin to be commercially sustainable, so they typically include an explicit profit requirement. Liability (reserving) assumptions are typically set with genuine prudence to protect policyholders, reflecting what the insurer expects to pay out plus a margin. Embedded value assumptions should be realistic, best-estimate expectations of future experience, since embedded value aims to capture the true expected economic value of in-force business, which prudent reserving assumptions would understate.",
          note: "A complete answer distinguishes all three purposes clearly.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why mortality assumption-setting for a life insurer's annuity book requires opposite caution to its protection book.",
          answer:
            "Since annuity cost increases the longer annuitants survive, understating future mortality improvement would understate annuity cost, exactly the opposite pricing risk to a protection product where understating improvement would overstate cost — the direction of assumption-setting caution inverts between the two product lines.",
          note: "This connects directly to the inverted-mortality-improvement theme developed in this course.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why an actuary should be able to justify their assumption choices with genuine, documented reasoning, rather than simply asserting a figure.",
          answer:
            "Since assumption-setting involves judgement rather than purely mechanical calculation, transparent, well-documented reasoning allows the assumption to be reviewed, challenged, and understood by others (e.g. peer reviewers, auditors, regulators), supporting the professional accountability expected of actuarial work and helping ensure the assumption is sound rather than arbitrary.",
          note: "A strong answer connects documentation to genuine professional accountability.",
        },
        {
          label: "(iv)",
          command: "Comment",
          marks: 2,
          question:
            "Comment on why supervisory reserve assumptions may differ from pricing assumptions for the same product.",
          answer:
            "Supervisory reserves are typically set with genuine prudence to protect policyholders under a regulator's oversight, while pricing assumptions are typically best-estimate (or lightly margined) to remain competitive, so the same underlying risk can warrant a more cautious figure for reserving than for pricing.",
          note: "This connects directly to the reserving-versus-pricing-purpose distinction developed in this module.",
        },
      ],
    },
    {
      id: "sp2-q10",
      title: "Monitoring experience and analysis of surplus",
      modules: "Module 30",
      marks: 12,
      parts: [
        {
          label: "(i)",
          command: "Calculate",
          marks: 4,
          question:
            "A life insurer's total surplus for the year was &pound;950,000, against an expected surplus of &pound;800,000 under its original assumptions. Of the total variance, &pound;60,000 is attributed to a deliberate assumption change made during the year. Calculate the total variance and the resulting experience variance.",
          answer:
            "Total variance = &pound;950,000 &minus; &pound;800,000 = &pound;150,000. Experience variance = &pound;150,000 &minus; &pound;60,000 (assumption change) = &pound;90,000.",
          note: "Arithmetic check: 950,000-800,000=150,000; 150,000-60,000=90,000.",
        },
        {
          label: "(ii)",
          command: "Explain",
          marks: 3,
          question:
            "Explain why the &pound;800,000 expected surplus typically represents the largest, most predictable component of a surplus analysis.",
          answer:
            "Prudent pricing and reserving assumptions build in margins that are expected to emerge as surplus over time purely through the passage of time and survival of the assumptions, forming a predictable baseline against which actual variances can be meaningfully compared.",
          note: "A strong answer connects the expected component to prudent margins built into the original assumptions.",
        },
        {
          label: "(iii)",
          command: "Discuss",
          marks: 3,
          question:
            "Discuss why the &pound;60,000 assumption change and the &pound;90,000 experience variance should be reported as distinct components, rather than a single combined 'unexpected' figure.",
          answer:
            "An experience variance reflects a single period's actual outcome differing from assumption (which may or may not persist), while an assumption change reflects a genuine, deliberate revision to future expectations — conflating them would obscure whether the total unexpected movement is a one-off or a persistent, forward-looking change, reducing the analysis's diagnostic value for management.",
          note: "A strong answer explicitly explains why conflating these two components would reduce the analysis's usefulness.",
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

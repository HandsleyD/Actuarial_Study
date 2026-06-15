---
normalized_id: cp2-2021-april-question-paper-121-cp2-p2-summary-v15
exam_code: CP2
year: 2021
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr21/121_CP2-P2_Summary v15.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2021-april-question-paper-121-cp2-p2-summary-v15

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

> April 2021

## Subject CP2 – Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**

This is an example solution. It should be noted that this document and
the associated spreadsheet model include more detail than would
ordinarily be possible within the time allowed for the examination. They
contain a wide range of responses to parts of the marking schedule
however they should not be considered exhaustive either – it would not
be necessary to produce the level of detail contained in this document
to perform well on CP2.

**Institute and Faculty of Actuaries**

**Objective**

The Chief Executive Officer (CEO) of our insurance company is
considering the company’s future strategy. All insurance companies must
hold a minimum level of assets in excess of their net present outgo,
which is known as the Minimum Capital Requirement. The Minimum Capital
Requirement is calculated using a formula and parameters prescribed by
the Regulator and is risk based. The company currently only sell term
assurance products. The CEO is looking to see if there is rationale to
expand and diversify by looking at alternative products in the market ‑
namely critical illness or annuity products.

The modelling has looked at:

- Current Minimum Capital Requirements under the following scenarios:

  - Term assurance products only

  - Term assurance and annuity products

  - Term assurance and critical illness products

Minimum Capital Requirements are calculated applying a stress scenario
whereby:

- Term Assurance calculations see a 20% increase in mortality rates

- Annuities calculations see a 15% decrease in mortality rates

- Critical illness calculations see a 25% increase in incidence rates

- Expenses (for all products) increase by 10%.

The calculations determine expected net present outgo which are defined
as the net present value (NPV) of the expected future claim payments and
expenses. 

In addition the Minimum Capital Requirement calculations are repeated to
allow for change in diversification factor, which the Regulator are
rumoured to be moving to.

**Data**

The CEO has supplied details of the current portfolio of term assurance
policies, including the age, gender, and the number of policies for each
age/gender band. Additionally, the CEO has provided the expected mix of
business for annuity and critical illness products.

The characteristics of the products are as follows.

|  | **Term Assurance** | **Annuities** | **Critical Illness** |
|----|----|----|----|
| **Term** | 30 years | N/A – Payments are made until policyholders die | 25 years |
| **Start date where benefit is payable** | Immediate | Age 60 for males and age 63 for females | Immediate |
| **Event whereby benefit is payable** | If policyholders die within the term | N/A – Regular payments are made from the start date until policyholders die | If policyholders are diagnosed with a defined critical illness within the term |
| **Benefit amount** | One-off payment, varies by age and gender band | Annual payments of £1k per year | One-off payment, assumed to be £100k |
| **Expenses** | \$10 per policy per year, no inflation, for whole duration of term | \$10 per policy per year, no inflation, only when policy is in force | \$10 per policy per year, no inflation, only when policy is in force |

Data has been checked at a high level and deemed to be sensible for use.

The manager provided tables of mortality probabilities and standard
critical illness incidence probabilities. The mortality table assumes
that all policyholders will die by age 115.

A chart of the mortality rates show that these are smooth and increasing
to 1 as we would expect ‑ female mortality is also lower than males as
expected:

A chart of the critical illness incidence rates also show that these are
smooth and increasing to 1 as we would expect – in this case there is
less of a difference between the male and female rates:

Additionally, the Regulator provided the stresses as set out above.

The current diversification factors are also defined by the Regulator,
and the CEO has provided the rumoured new diversification factors as
well. Note that the diversification factor for the product with the
largest expected net present outgo is set to 100%, and the additional
products will have the diversification factors as specified below.

|  | **Original Diversification Factor** | **Rumoured Diversification Factor** |
|----|:--:|:--:|
| **Term Assurance** | 40% | 60% |
| **Annuity** | -25% | -50% |
| **Critical Illness** | 40% | 50% |

**Assumptions**

- **Data provided is valid for use**

- **No allowance is made for mortality improvements in the future**

- **No allowance for expense inflation**

- No competition in market to prevent level of sales of products

- Regulator will support expansion of the business to diversify products

- Minimum Capital Requirement calculations are not expected to change in
  the near future aside from the rumoured scenario.

- We do not expect extra sales of the term assurance products during the
  analysis period considered

- Assume expense levels don't change from the flat rate per policy even
  though the portfolio diversifies into different product structures

- Discount rate of 3% per annum is appropriate for the market conditions
  and for all terms

- No allowance made for investments of the company and therefore any
  market stress scenarios linked to asset-liability matching

- No lapses of policies

- Assume premiums are paid up front and not part of the future cashflow
  projections

**Methodology**

*Mortality tables and Critical Illness incidence rates*

In addition to the mortality and critical illness incidence rates
provided, we have created stressed mortality tables by multiplying the
base mortality rates by 120% for the term assurance stress, 85% for the
annuity stress. Similarly for the stressed critical illness incidence
rates, we have multiplied the base critical illness incidence rates by
125%.

*Term assurance projection of claims*

A projection of the claims per year is calculated for the term assurance
policies ‑ this was completed for each group (split by sex and age).
First the in-force probabilities are found for each group. For the
starting year of the projections, 2022, it is assumed that the in-force
probability was 1. Each subsequent year this is reduced by the
probability of mortality using the unadjusted mortality rates i.e.
probability alive next year = probability alive this year x (1 –
mortality rate for age this year and sex).

The claims are found by taking the in-force probability, multiplying by
the base mortality rate at that age and then multiplying by the number
of policies and the average benefit amount.

The claim projections are repeated for the stressed scenario using these
increased mortality rates.

Expenses are projected by taking the total number of policies at outset
and multiplying by the expense value of \$10. This amount is fixed for
the duration of the projections.

The stressed expenses are found by taking the fixed expenses and
increasing these by 10%.

The net present value of the base and stressed expenses are calculated
using the defined discount rate.

*Annuity projection of payments*

To project the expected annuity payments, the probability of an
individual policyholder being alive each year is calculated. This is
known as the in-force probability and is calculated consistently with
the approach described for term assurance policies. It is ensured that
policies cannot be in-force after age 115 as this is the age by which it
is assumed all policyholders have died.

The annuity cashflows are calculated by multiplying the in-force
probability with the number of annuities and annuity benefit amount ‑
allowing for starting age of payment, which was 60 for males and 63 for
females i.e. before the policyholder turns 60 or 63 for males and
females respectively, no payment is made.

Expenses are calculated by taking the in-force probability multiplied by
the number of policies at outset and then the \$10 expense per policy
amount.

The stressed scenario follows the same modelling approach but uses the
stressed mortality rates.

The stressed expenses use the stressed in-force probabilities in their
calculation and then are uplifted by 10%.

The net present value of the unstressed and stressed payments and
expenses are calculated using the defined discount rate.

*Critical illness projection of claims*

The in-force probabilities of the policies are calculated by starting
with an in-force probability of 1 in 2022. For subsequent years, the
in-force probability is calculated from the in-force probability for the
previous year multiplied by (1 – the critical incidence rate for an
individual whose age is determined at the beginning of that year).

The critical illness claims are calculated each year by taking the
in-force probability multiplied by the critical illness incidence rate
for that age and the number of policies and the assumed benefit amount.

The expenses are then calculated by taking the in-force probability
multiplied by number of policies at outset multiplied by the \$10 per
policy expense cost each year.

The stressed cashflows are calculated by repeating the projections but
allowing for the critical illness incidence rates to have increased by
25%. The stressed expenses use the stressed in-force probabilities in
their calculation and an uplift of 10% is then applied.

The net present value of the unstressed and stressed claims and the
expenses are calculated using the defined discount rate.

*Minimum Capital Requirement calculations*

The net present value of each set of product and expense projections
were then used to calculate the Minimum Capital Requirement for each of
the scenarios:

1.  Only selling term assurance products

2.  Selling term assurance and annuity products

3.  Selling term assurance and critical illness products

The Minimum Capital Requirement is found using the following formula:

``` math
\sum_{j}^{}{A_{j}X_{j}}
```

Where:

$`A_{j}\`$is the diversification factor prescribed by the Regulator. The
largest Xj is found, and a diversification factor of 100% allocated,
over riding the diversification factor which would otherwise be
applicable.

X<sub>j</sub> is the total expected net present outgo for j under the
stressed scenario less the total expected net present outgo under the
base scenario

X<sub>j</sub> was found for each product by taking the NPV of the
stressed cashflows minus the NPV of the base cashflows.

The formula has then been applied to each of the three scenarios.

For each scenario a ratio which compares the expected net present outgo
across the products under consideration plus the MCR for the scenario to
the expected net present outgo across the products is calculated.

*Rumoured changes*

The Minimum Capital Requirement calculations have been repeated but
picking up the rumoured diversification factors. All other elements of
the calculations remain unchanged.

**\**

**Results**

As the following graph illustrates, the stresses serve to increase the
expected net present outgo as a higher level of benefit is expected to
be paid out i.e.:

- for the term assurance products, the stress has increased the
  mortality rates and so more benefit is expected to be paid out;

- for the annuity products, the stress has decreased the mortality rates
  and so the pension benefit is expected to be paid out for a longer
  period; and

- for the critical illness products, the incidence rates have increased
  and so more benefits are expected to be paid out.

The base case reflects the average likely outgo whereas the stresses are
designed to demonstrate a ‘worst case’ style scenario (say 1 in 20). So
roughly 5% of the time the company may expect outgo to be higher than
those output by the stressed parameters.

|               | Term Assurance | Annuity | Critical illness |
|:-------------:|:--------------:|:-------:|:----------------:|
|     Base      |    24,659k     | 21,724k |     27,025k      |
|   Stressed    |    28,697k     | 22,618k |     33,212k      |
| Stressed/Base |      116%      |  104%   |       123%       |

The net present outgo for all product types increases, however it can be
seen that the increase from the base net present outgo to the stressed
net present outgo is lower than the underlying change to the mortality
or critical illness rates. This is as a result of:

- how the cashflows interact with the underlying tables e.g. it delays
  the end of annuity payments rather than removing that end point
  altogether.

- the additional interaction of the stress on the expenses.

Overall the Minimum Capital Requirement under the scenarios are:

| Scenario | Minimum Capital Requirement USD | Ratio |
|----|----|----|
| A (Term Assurance only) | 4,038k | 116% |
| B (Term Assurance and annuities) | 3,814k | 108% |
| C (Term Assurance and critical illness) | 7,802k | 115% |

Overall, we can see that option B allows the company to introduce a
different product line while also reducing the Minimum Capital
Requirement. This makes sense as there is a diversification benefit of
having both mortality and longevity risk in the portfolio i.e. if
mortality increases, people are dying younger and the cost to the
company of term assurance policies will increase, however at the same
time, the payments for annuities will cease sooner and therefore the
cost of these policies will reduce – they act in opposite directions.

Despite the fact that the overall level of Minimum Capital Requirement
does increase for scenario C (i.e. term assurance and critical illness)
the ratio reduces. We would expect the Minimum Capital Requirement to
increase because the risks to the two products are positively correlated
i.e. if the likelihood of dying increases we may also expect more
individuals to be diagnosed with a critical illness. The consequences of
these two risks is to increase the cost of term assurance policies at
the same time as increasing the cost of critical illness policies.

However, as the risks to the two products are not 100% correlated the
regulator does not require all of the increase in liabilities shown by
the stress tests to be held in the form of the Minimum Capital
Requirement, as the result is being spread slightly. This means that the
relative risk across the total liabilities is reducing.

Overall this suggests that if the company is willing to expand, then
subject to charging an appropriate premium option C would reduce the
relative risks the company are exposed to even though it has increased
the absolute amount of risk. Note that the net present outgo here does
not include premiums, so the company will need to account for their
profit margins to ensure appropriate premiums are charged for the risk
and Minimum Capital Requirements.

If the company does decide to diversify then they need to think about
the shape of the future cashflows associated with the products being
sold. By offering annuity products the company will be exposed to the
future longer tail cashflows associated with this ‑ as can be seen from
the graph below:

Both term assurance products and critical illness products have a smooth
increase in cashflows over time as the policyholders’ age and therefore
are increasingly likely to be diagnosed with a critical illness or die,
and therefore their policy providing a payout. The critical illness
claims cease 5 years earlier than the term assurance claims as we have
assumed a 30 year term for term assurance products compared to a 25 year
term for critical illness products.

Annuities differ as they provide a payout to all policyholders from the
time they fall due, and they cease when the member dies. This means that
the term of the policies is not fixed as it is with the other products
at outset. There is therefore a slow reduction in payouts as
policyholders die. The payouts start at zero as it is assumed all
policyholders are under the initial payment age, it then steps up as the
males reach 60 and females reach 63.

**\**

**Allowing for the rumours**

Overall the Minimum Capital Requirement under the scenarios, after
allowing for the rumour, are:

| Scenario | Minimum Capital Requirement USD | Ratio |
|----|----|----|
| A (Term Assurance only) | 4,038k | 116% |
| B (Term Assurance and annuities) | 3,509k | 108% |
| C (Term Assurance and critical illness) | 8,609k | 117% |

The graphs comparing the Minimum Capital Requirements and the ratios
demonstrate that while the magnitude of the changes are sensitive to the
adjustments specified in the stress tests and the diversification
factors, the conclusions would remain broadly unchanged:

- The absolute amount of the Minimum Capital Requirement for option B is
  lower under the rumoured position, which is to be expected as the
  diversification factor for the annuity products has changed from -25%
  to -50%.

- Meanwhile the absolute amount of the Minimum Capital Requirement for
  option C is higher under the rumoured position, which is to be
  expected as the diversification factor for the term assurance policies
  has increased from 40% to 60%.

- The ratios for option C is now higher than under option A as the
  diversification factor has increased which implies that the risks are
  more highly correlated than suggested by the current factors.

Although diversifying the portfolio will result in changes to the future
cashflows the amount of these cashflows and therefore net present outgo
will be dependent on sales volumes and actual mortality and morbidity
rates.

The company would also need to consider changes in underwriting and risk
management practices, not just the impact on the Minimum Capital
Requirement.

**Next steps**

- Validate the data.

- Expand the business mix to allow for different ages.

- Model mortality more accurately for risks e.g. allow differences due
  to smoker status.

- Expand modelling of mortality to allow for mortality improvements over
  time.

- Allow for expense inflation over time using the local inflation rates.

- Allow for changes in expenses as the portfolio diversifies.

- Allow for different terms of the term assurance portfolio.

- Expand model to allow for discount rate to vary over time to provide
  more realistic outputs of the scenarios (and therefore better reflect
  the potential risk particularly of the longer-term business).

- Allow for investments within the company and any potential impacts
  this has on claim payments ‑ allow for asset risk in the Minimum
  Capital Requirements.

- Consider a mixture of scenario B & C.

- Obtain a peer review of the model.

- Allow for critical illness deterioration over time.

- Update the model over time with experience.

- Allow for the term assurance and critical illness policies to lapse
  over the projection period.

- No allowance has been made for premiums and how these may change over
  time in the projection period so allowance to be made for these to see
  if it offsets the claim impacts e.g. if premiums are possibly reviewed
  if experience changes.

- Obtain data from industry with regards to volumes of policies likely
  to sell and update the projections to give a more accurate fit of the
  analysis.

- Complete more analysis across the full projection period i.e. how do
  the Minimum Capital Requirements change over time.

- Consider the impacts of new policies being written over the projection
  period as well so a more fluid impact on capital.

- Investigate if any other products are available in the market that the
  company may wish to consider e.g. do they want to remain as purely an
  insurance company covering Life risks.

- Consider the target market that selling products to ensure that they
  don't get selected against.

- Consider changes in the Minimum Capital Requirement calculations e.g.
  what if can define own parameters rather than using prescribed
  amounts.

- Allow for tax on the cashflow calculations.

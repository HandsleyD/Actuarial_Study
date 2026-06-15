---
normalized_id: cp2-2021-april-question-paper-cp2-2-121-exam-clean-proof
exam_code: CP2
year: 2021
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr21/CP2-2_121_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2021-april-question-paper-cp2-2-121-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                                 13 April 2021 (am)


                    Subject CP2 - Modelling Practice
                             Core Practices
                                     Paper Two
                       Time allowed: Three hours and fifteen minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.

If you encounter any issues during the examination, please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP22 A2021                                               © Institute and Faculty of Actuaries
Exam requirements
Read the background document, which describes the scenarios that have been modelled and
documented for this project, and the work that remains outstanding.

Read the audit trail that has been written by your colleague, another actuarial student, for the
calculations that they performed. This will assist you in following and understanding the
calculations performed in the Excel model provided.

You are not required to add to or amend the audit trail.

You should assume that your colleague’s calculations have been checked and are
correct.

1      Spreadsheet model

       Expand the spreadsheet model to produce the minimum capital requirement
       calculations. The model should include the following:

       (i)      Minimum capital requirement calculations (including calculation of the ratio)
                for selling:

                (a)    term assurance and annuity products.

                (b)    term assurance and critical illness products.
                                                                                              [6]

       (ii)     Repeated minimum capital requirement calculations (including calculation of
                the ratio) allowing for the rumoured change in diversification factors.   [2]

You should ensure that the additional work you undertake on the spreadsheet contains
appropriate self-checks and you should not overwrite the existing calculations.


2      Charts

       Construct, for each of the following, a suitable chart(s) to illustrate:

       (i)      how the expected net present outgo for each product (term assurance, annuity
                and critical illness) compare before and after allowing for the stress.    [3]

       (ii)     expected annual claim/benefits payments (i.e. excluding expenses) under the
                three products (term assurance, annuity and critical illness) to see the cashflow
                profile of payments.                                                           [3]

       (iii)    a comparison of the minimum capital requirements (as amounts) under the
                three options (A, B and C) between the original and rumoured scenario.  [2]

       (iv)     a comparison of the ratios (as percentages) under the three options (A, B and
                C), between the original and rumoured scenario.                             [2]
                                                                                 [Sub-total 18]



CP22 A2021–2
3    Summary document

     Prepare a summary document of around five to seven pages, capturing the main
     features and results of the work done by you and your colleague. You can assume that
     the summary is being prepared for your manager, a senior actuary, who will present
     the work to the CEO.

     Your summary should include the following:

           purpose of the project, data, method and assumptions used by you and your
            colleague
           results, including relevant tables and charts
           commentary on the results
           key conclusions
           suggested next steps.

     Commentary on the results should cover, but not be limited to:

           analytical comments on each stage of the results, including explaining patterns in
            the results and any unusual features.
           an explanation of the differences between the results under the various scenarios
            modelled.

     Next steps need to be specific to the project, with some mention of why each is a valid
     next step. The summary should cover the full scope of the project, including the
     current approach that was modelled in the spreadsheet provided.

     You are not required to add to or amend the audit trail.

     Marks available for the summary:

     (i)       Methodology (including purpose, data, method and assumptions).              [25]

     (ii)      Results, including charts.                                                   [5]

     (iii)     Commentary on results and conclusions.                                      [22]

     (iv)      Next steps.                                                                 [20]

     (v)       Drafting.                                                                  [10]
                                                                                [Sub-total 82]
                                                                                   [Total 100]




CP22 A2021–3
Background
You work for an insurance company in Country Z. The company is currently selling life
insurance products.

The insurance company’s expected net present outgo is defined as the Net Present Value
(NPV) of the expected future claim payments plus expenses. The NPV is determined using a
discount rate of 3% p.a.

The Regulator in Country Z requires insurance companies to hold a minimum amount of
assets in excess of their expected net present outgo. The aim is to ensure that companies have
sufficient assets to meet future policyholders’ claims in the event that an insurance
company’s claims and expenses are higher than expected.

The minimum amount of assets in excess of expected net present outgo is known as the
minimum capital requirement. The minimum capital requirement is risk based. The amount
of capital held by an insurance company will depend on the risks of the products they sell.
The minimum capital requirement is determined using a standardised formula and parameters
that are prescribed by the Regulator.

The company is interested in the following ratio:

             Total Expected Net Present Outgo + Minimum Capital Requirement
                             Total Expected Net Present Outgo

This ratio helps to compare the degree of risk between strategies.

Current business portfolio

The company currently only sells term assurance products. These products provide a payout
to the policyholder’s estate in the event of their death before the end of the policy term. If the
policyholder survives to the end of the policy term, no benefit is paid.

Proposed business portfolio

The company’s Chief Executive Officer (CEO) is considering changes to the company’s
future business strategy.

In particular, the CEO would like to understand the impact on the insurance company’s
expected net present outgo and minimum capital requirements (as at 1 January 2022) of
launching one of the following products from 1 January 2022:

   a critical illness product – this is similar to the term assurance product, except payments
    are made upon diagnosis of a defined critical illness within the term of the policy
   an annuity product – in return for a single premium, a policyholder receives a regular
    payment, which starts at a specified date in the future and continues until they die.




CP22 A2021–4
Product details

For each of the products above, the CEO has provided details of the age, sex and benefit
amounts for the expected policyholders (see spreadsheet). They have also informed you that:

   existing term assurance products have a remaining term of 30 years.
   critical illness products will have a term of 25 years.
   annuities start paying out from age 60 for males and age 63 for females.

For all products, expenses incurred by the insurance company are $10 per policy per year,
with no allowance for inflation. For term assurance products, expenses apply for the whole
duration of the term (i.e. expenses do not reduce when a policyholder dies).

However, for critical illness and annuity products, the annual amount of expenses reduces
each year in line with the in-force probabilities (i.e. expenses are only incurred for policies
still liable for potential future claim payments).

The CEO has asked that you assume that all new critical illness and annuity policies come
into force on the start date of the projection.

Your manager has provided the following tables for the calculations:

   mortality probabilities for the term assurance and annuity products
   standard critical illness incidence tables.

For annuity products, your manager has stated that the maximum age is 115 years (i.e.
assume all policyholders still alive will die at age 115).

Minimum capital requirement

To calculate the minimum capital requirement, companies first need to calculate the impact
on expected net present outgo by applying prescribed shocks to particular risks.

The list of shocks for each product type (which are applied to all future years and policies
that are in-force) are outlined below:

   term assurance: 20% increase in the rate of mortality – to be applied as a percentage
    increase to the base mortality rate for each age
   annuity: 15% decrease in the rate of mortality – to be applied as a percentage decrease to
    the base mortality rate for each age
   critical illness: 25% increase in the incidence of a critical illness – to be applied as a
    percentage increase to the base critical illness rates

plus a stress to the level of expenses for each product:

   expenses: 10% increase in expenses (after allowing for the effects of the stress on the
    underlying product).




CP22 A2021–5
The minimum capital requirement is defined as:

                                                    Aj Xj
                                                j


where a diversification factor adjusts the minimum capital requirement for each risk to allow
for diversification between risks.

Aj is the diversification factor for risk j (where j is term assurance, annuity or critical illness).
Xj is the total expected net present outgo for risk j under the stressed scenario less the total
expected net present outgo under the base scenario.

For any particular minimum capital requirement calculation, the diversification factor (Aj) for
the risk, j, agreed with the Regulator for the company abides by the following rule:

The diversification factor (Aj) for the risk with the largest Xj is always 100%.

For the other risks, the diversification factor (Aj) is taken from the below table:

                                                             Diversification
                         Risk (j)
                                                               factor (Aj)
                         Term assurance                           40%
                         Annuity                                 –25%
                         Critical illness                         40%

For example, if the company was selling term assurance and annuity products and Xj was
largest for term assurance, then Aterm assurance would be 100% and Aannuity would be –25%.

Options to investigate

The CEO would like to understand the additional expected net present outgo and the
minimum capital requirements, under each of the following options:

A       Remain selling term assurance products only.
B       Sell term assurance and annuity products.
C       Sell term assurance and critical illness products.

The CEO has heard rumours that the Regulator is considering changing the minimum capital
requirement calculations. The CEO would like to understand how the minimum capital
requirements, and, therefore, their view of which option would be the best strategy for the
company, may change if this were to happen. Your manager would consequently like you to
re-run the analysis with the following updated diversification factors:

                                                             Diversification
                         Risk (j)
                                                               factor (Aj)
                         Term assurance                           60%
                         Annuity                                 –50%
                         Critical illness                         50%

The diversification factor (Aj) for the risk with the largest Xj remains at 100%.


CP22 A2021–6
Your colleague has started the modelling and completed:

    the base scenario’s expected net present outgo (i.e. before any stress has been applied).
    the stress test calculations for the three options A, B and C.
    the minimum capital requirement calculation for option A.

Your manager has asked you to complete the following additional calculations:

1.      Minimum capital requirement calculations (including calculation of the ratio) for:

        (a)     Option B – selling term assurance and annuity products

        (b)     Option C – selling term assurance and critical illness products.

2.      Repeat the minimum capital requirement calculations (including calculation of the
        ratio) allowing for the rumoured changes to the diversification factors.

Your manager has also asked for graphical representation of the following:

1.      how the expected net present outgo for each product (term assurance, annuity and
        critical illness) compares before and after allowing for the stress test
2.      expected annual claim/benefits payments (i.e. excluding expenses) under the three
        products (term assurance, annuity and critical illness) to see the cashflow profile of
        payments
3.      a comparison of the minimum capital requirements (as amounts), under the three
        options (A, B and C), between the original and rumoured scenario
4.      a comparison of the ratios (as percentages), under the three options (A, B and C),
        between the original and rumoured scenario.

Your manager has asked you to prepare a summary covering all elements of the work (both
the original work your colleague completed and the additional modelling you are
undertaking).

Your summary should include the following:

    purpose of the project, data, method and assumptions used by you and your colleague
    results, including charts
    commentary on the results and key conclusions
    suggested next steps.

You are not expected to include the additional modelling you undertake in the audit
trail, but your results should be included in the summary.




CP22 A2021–7
Audit trail
The following audit trail should be read alongside the model provided.

Objective
The company currently only sells term assurance products, but the CEO is considering
expanding this to other product types.

We have been asked to consider the effects of diversifying the portfolio, particularly
considering the capital requirements of three options:

A      Maintaining only the current product of term assurance
B      Expanding to sell annuities as well as term assurance
C      Expanding to sell critical illness products as well as term assurance.

Data
Our manager has provided data on the current business mix of term assurance policies, as
well as information on the proposed critical illness and annuities products.

The probabilities of mortality and critical illness incidence have also been provided.

Data checks
Checks on mortality rates show an increase in probability as age increases for both males and
females, with probability of 1 at age 115, which makes sense overall, especially given the
statement that all lives will die at age 115.

Checks on the critical illness incidence rates also show an increase in probability as age
increases for both males and females. These also increase to a probability of 1, though at an
earlier age of 110; it makes sense that these rates also increase with age but the age at which
the probability reaches 1 is lower than the age for mortality probabilities to reach 1.

Assumptions
   Data is valid and suitable for use.
   No allowance is made for mortality improvements in the future.
   No allowance for expense inflation.
   All new CI and annuity policies come into force at the start of the projection.

Methodology
Parameters
This sheet contains all the parameters used in the model, i.e. the term assurance business mix,
the stress scenario information and the minimum capital requirement diversification factors.




CP22 A2021–8
Mortality tables
This sheet contains the base mortality tables supplied and then creates the stress probabilities
for both term assurance and annuity stresses.

Column A contains the age. Columns B and C contain the male and female mortality rates as
supplied.

Columns D and E calculate the male and female mortality stress by taking the provided rates
and increasing them by 20% using the parameter in the parameter sheet. The maximum rate
is set to 1 and all ages 115 or older are set to 1.

Columns F and G calculate the male and female annuity stress by taking the base mortality
rates and reducing them by 15% using the parameter in the parameter sheet. The maximum
rate is set to 1 and all ages 115 or older are set to 1.

CI tables
This sheet contains the base critical illness incidence rates and then creates the stress rates.

Column A contains age. Columns B and C contain the base critical illness incidence rates for
males and females as provided.

Columns D and E calculate the stressed incidence rates by taking the base rates and
increasing them by 25%, applying a maximum rate of 1.

Term assurance projections
This sheet is used to calculate the projected claims for the term assurance business under the
base and stress scenarios. It then calculates the present value of these cashflows.

Columns A–AB calculate the cashflows for the base scenario.

Column A contains the year of the projection. Column B calculates the term of the policy by
taking the year of projection less the starting year from the parameter sheet and adding 1 to
assume at the end of the projection year.

Columns C–N calculate the projected claims for males for each of the ages, i.e. 30, 35, 40,
45, 50 and 55. First, for each age group the in-force probabilities are calculated. The in-force
probability for the first year is 1. Following years take the previous year’s in-force
probability and reduce this by multiplying it by (1 – the mortality rate for the prior year’s age
at that point in the projection). The mortality rate is calculated using a VLOOKUP function
based on the prior year’s age and the male base mortality table (from the ‘Mortality tables’
worksheet).

The expected benefit payments are then calculated by:

   taking the in-force probability.
   multiplying it by the probability of mortality for the applicable age in the current year,
    which is looked up from the base mortality probabilities, again using the VLOOKUP
    function.
   multiplying by the average benefit and number of policies from the data supplied in the
    parameters.



CP22 A2021–9
Columns O–Z do the same for the females’ data points.

Expenses are calculated in column AA as the number of policies from the parameters and
then multiplied by $10 per policy for each year. This is constant over the remaining life of the
policies.

Total outgoes are calculated in column AB as the sum of the expected benefit and expenses
columns. In row 6, the NPV of these cashflows is calculated using the NPV function and
discount rate as defined in the parameters tab.

Columns AD–BE calculate the same cashflows as for the base scenario (Columns A–AB) but
using the stressed mortality rates from the mortality tables sheet. Column BD calculates the
stressed expenses by taking the base expenses and multiplying them by the stress factor
(10%).

Annuity projections
This sheet is used to calculate the claims and expense cashflows for the annuity product.

Columns A–I calculate the base scenario cashflows.

Column A contains the year of projection. Columns B and C show the age progression for
males and females.

Columns D and E calculate the in-force probabilities for males and females. The starting
point is 1 in year 2022 and then following years take the previous year’s in-force probability
and reduces this by multiplying it by 1 minus the mortality rate for the previous year’s age at
that point in the projection. The mortality rate is determined using the VLOOKUP function.

Columns F and G calculate the annuity stream cashflows by taking the in-force probability
and multiplying by the number of annuities and the annuity amount. An IF function is used
so that if the member is younger than the age at which payments begin it returns zero,
otherwise it returns the calculated amount. Cashflows start to be paid when males reach age
60 and females age 63.

Column H calculates the expenses by taking the in-force probabilities and multiplying by the
number of policies and the expense amount of $10 per policy for each year.

Column I calculates the net cashflows as the sum of columns F to H. The NPV is calculated
in cell I4 using the NPV function, using the discount rate from the parameters sheet.

Columns K–Q complete the same calculations as the base scenario but instead look up the
mortality rates for the stress.

CI capital projection
This sheet is used to calculate the cashflows for the critical illness product.

Columns A–H contain the base scenario calculations.

Column A contains the year of projection and column B shows the term projection by
calculating the year less the starting year as per parameters plus 1.




CP22 A2021–10
Columns C and D calculate the in-force probability using a similar approach as the annuity
sheet, but instead using the critical illness incidence probabilities.

Columns E and F calculate the critical illness claim amounts by:

   taking the in-force probability.
   multiplying by the incidence probability for the relevant age based on the year of
    projection.
   multiplying by the number of policies and benefit amount.

Column G contains the calculation of expenses; this takes the in-force probabilities and
multiplies it by the number of policies and $10 expense charge.

Column H calculates the total outgo for each year by summing the critical illness claim
amounts for both males and females and adding the expenses. The total NPV of the outgo is
calculated in cell H4 using the NPV function, using the discount rate as per the parameters
worksheet.

Columns J–Q complete the same calculations as the base scenario but instead look up the
critical illness rates for the stress and allow for the expense stress too.

Overall capital calculations
This sheet is used to calculate the overall capital amount requirement, using the results from
the previous sheets and then using the diversification matrix to calculate the final capital
amount requirement.

Rows 6–8 contain the net present values of outgo for each of the products based on looking
up the results from the previous sheets.

Row 16–19 calculate the minimum capital requirement based on term assurance policies
only. This is calculated using the Regulator’s formula.

In G17, the ratio is found by taking the sum of the minimum capital requirement and the
expected net present outgo, divided by the expected net present outgo.


                                    END OF PAPER




CP22 A2021–11


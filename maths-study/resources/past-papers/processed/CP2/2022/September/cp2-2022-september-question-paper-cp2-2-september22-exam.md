---
normalized_id: cp2-2022-september-question-paper-cp2-2-september22-exam
exam_code: CP2
year: 2022
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Sep22/CP2-2_September22_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2022-september-question-paper-cp2-2-september22-exam

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             13 September 2022 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper Two
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP22 S2022                                               © Institute and Faculty of Actuaries
Exam requirements
Read the background document, which describes the scenarios that have been modelled and
documented for this project, and the work that remains outstanding.

Read the audit trail that has been written by your colleague, another actuarial student, for the
calculations that they performed. This will assist you in following and understanding the
calculations performed in the Excel model provided.

You are not required to add to or amend the audit trail.

You should assume that your colleague’s calculations have been checked and are
correct.

1      Expand the spreadsheet model to:

       Calculate the cost of the change in legislation to the company at 1 January 2023, using
       the annuity factors provided. You should allow for the Chief Executive Officer’s
       (CEO’s) proposed method that if annuitants are worse off after amendment, when
       considering the net present value (NPV) of each annuitant’s remaining annuity, their
       annuity is not amended.

       You should ensure that the additional work you undertake on the spreadsheet
       contains appropriate self-checks.                                           [5]


2      Charts

       Data manipulation work will be required to create these charts. The marks
       available include marks for this.

       (i)      Construct one suitable chart to illustrate the increase in NPV of the total
                remaining payments for the 100 annuities as a result of the amendment, for:

                   all annuities.
                   just current 5% p.a. increasing annuities.
                   just current 3% p.a. increasing annuities.
                                                                                               [3]

       (ii)     Construct a suitable chart to illustrate, by grouping all 100 affected annuitants
                by the remaining term of their annuity and calculating subtotals, for each group:

                   the average proportion of their payment affected.
                   the percentage increase, as a result of the amendment, in annual annuity
                    payment projected to the end of term.

                You should show the remaining term of annuity on the x-axis.                   [6]

       (iii)    Construct a chart as in part (ii) above for current 5% increasing annuitants
                only.                                                                        [2]

       (iv)     Construct a chart as in part (ii) above for current 3% increasing annuitants
                only.                                                                        [2]
                                                                                  [Sub-total 18]


CP22 S2022–2
3    Summary document

     Prepare a summary document of around five to seven pages, capturing the main
     features and results of the work done by you and your colleague. You can assume that
     the summary is being prepared for your manager, a senior actuary, who will present
     the work to the CEO.

     Your summary should include the following:

           The purpose of the project, data, method and assumptions used by you and your
            colleague
           Results, including charts
           Commentary on the results
           Key conclusions
           Suggested next steps.

     Commentary on the results should cover, but not be limited to:

           analytical comments on each stage of the results, including explaining patterns in
            the results and any unusual features.
           an explanation of the differences between the results under the various strategies
            modelled.

     Next steps need to be specific to the project, with some mention of why each is valid.

     The summary should cover the full scope of the project, including the current
     approach that was modelled in the spreadsheet provided.

     You are not required to add to or amend the audit trail.

     Marks available for the summary:

     (i)       Methodology (including purpose, data, method and assumptions).              [26]

     (ii)      Results, including charts.                                                    [5]

     (iii)     Commentary on results and conclusions.                                       [22]

     (iv)      Next steps.                                                                 [19]

     (v)       Drafting.                                                                   [10]
                                                                                 [Sub-total 82]
                                                                                    [Total 100]




CP22 S2022–3
Background
You are an actuarial student working for XYZ insurance company (‘XYZ Insurance’). XYZ
Insurance sells fixed-term annuities to individual consumers.

Individuals buying annuities from XYZ Insurance can choose, at the outset of their policy:

   the fixed term of the annuity – which can be from 15 years up to 25 years.
   the annual rate of increase of the annuity – which can be either 3% p.a. or 5% p.a.
   the starting amount of the annuity payments – from $10,000 p.a. up to $40,000 p.a.

All annuity policies begin on 1 January in the year the policy is set up. Annuity payments are
made annually in advance each 1 January. Increases in annuity payments occur annually on
1 January, starting 1 year from the date the policy is set up.

A recent change in legislation means that XYZ Insurance will need to amend the annuity
payment amounts for a small number of annuity policies that are currently in payment.

After the change in legislation, each annuity policy that is impacted will have two different
portions of their annuity payments increasing at different annual rates.

The annuity payment for each annuity policy that requires amendment will be impacted in the
following way:

   A proportion of the annuity in payment at 1 January 2023 (before allowing for the
    1 January increase) will be increased by a flat, one-off 10% (as specified by the
    legislation). This affects the annuity from the 1 January 2023 payment onwards.
   Future annual increases (including the 1 January 2023 increase) applied to the affected
    proportion of the annuity will also need to be amended to 4% p.a. This impacts all annual
    increases from the 1 January 2023 increase onwards.
   The unaffected proportion of the annuity payment will not receive the flat one-off
    percentage and will continue to grow at the rate of increase chosen at the outset of the
    policy (i.e. 3% p.a. or 5% p.a.).

The proportion of the annuity amount receiving the flat one-off percentage and change to
future annual increases will vary by annuitant.

XYZ Insurance’s administration department has identified, and provided data for, 100
annuity policies that will be impacted by the change in legislation and hence will require
amendment. This data is described further in the audit trail below.

It has been determined that XYZ Insurance will have to meet 100% of any additional costs of
amending the annuities.

It has been decided that XYZ Insurance will not amend an individual annuity if the annuitant
would be worse off after the amendment. The CEO of XYZ Insurance has proposed
determining whether an individual annuitant would be worse off by comparing the NPV of
the remaining annuity payments before and after amendment (the ‘value check’). They have
requested that a discount rate of 6.5% p.a. is used for the NPV calculations.




CP22 S2022–4
The CEO has instructed that no allowance for mortality is applied in the calculations and
therefore it can be assumed that all annuitants will survive for the duration of the remaining
term of their annuity.

The CEO wishes the following to be calculated:

   A projection of all annuities that require amendment to the end of their terms both
    without adjustment and after adjusting to allow for the change in legislation
   Charts, using the above projection calculations, to illustrate if annuities with a) different
    terms remaining and b) different annual increases are affected by the change in legislation
    differently
   The NPV of the overall additional cost to XYZ Insurance of having to amend the benefits
    after allowing for retaining, without adjustment, the annuities of annuitants who would be
    worse off using the CEO’s proposed method above.
Another actuarial student in your team has been working on the project to analyse the effect
of the legislation changes requested by the CEO and has already calculated:

   the individual annuity amounts after 1 January 2023 increases on both the current annuity
    details and after the amendments.
   the individual annuity amounts at the end of each annuity’s term both on the current
    annuity details and after the amendments.
   individual annuity in advance factors at 1 January 2023 for both the current and amended
    annual increases for each annuity.

Your manager has asked you to complete the project by calculating the NPV of the total
remaining payments from 1 January 2023 for all 100 annuities, both before and after the
amendment. They have asked that you allow for the CEO’s proposed method of retaining,
without adjustment, the original annuities for annuitants where the NPV of the remaining
annuity payments would be lower after amendment.

Your manager has also asked for charts to illustrate the results of the calculations that are set
out in detail in the ‘Exam requirements’ section.

Your manager has asked you to prepare a summary document covering all elements of the
work (both the original work your colleague completed and the additional modelling you are
undertaking).

Your summary document should include the following:

   Purpose of the project, data, method and assumptions used by you and your colleague
   Results, including charts
   Commentary on the results and key conclusions
   Suggested next steps.

You are not expected to include the additional modelling you undertake in the audit
trail, but the methodology and results for all of the modelling should be included in the
summary.




CP22 S2022–5
Audit trail – Modelling annuity amendments
The following audit trail should be read alongside the model provided.

Objective
XYZ Insurance has determined that 100 of the fixed term, increasing annuity policies it has
previously provided will need to be amended from 1 January 2023 to allow for a change in
legislation.

A proportion of the current annuity in payment at 1 January 2023 (before the 1 January 2023
increase) must have its amount increased by 10% and the annual increase applied to that
proportion amended from 1 January 2023 onwards.

The purpose of the model is to perform the following:

   Determine the projected level of the annuity payments p.a. after the 1 January 2023
    increase for each annuitant before and after amending the annuity payments.
   Determine the projected level of the annuity payments p.a. at the end of the term of each
    annuitant before and after amending the annuity payments. The CEO’s proposed
    method – of retaining without adjustment the annuities for annuitants where the
    NPV of the remaining annuity payments would be lower after amendment – has not
    yet been applied in the model.
   Calculate annuity in advance factors from 1 January 2023 on both current and amended
    annual increases for each annuity.

Data
This sheet contains details for 100 annuities in payment, annuity start date, starting amount,
total term, annual increases p.a. and the proportion of the annuity payment affected by the
amendment. This data was provided by the company’s administration department.

Parameters
This sheet summarises the parameters used in the calculations.

These include details of the annuity structure, details provided by the regulator including the
date of the amendment, the new annual increase rate for the affected proportion of annuities
and the percentage uplift to be applied.

The discount rate to use for NPV calculations was provided by the CEO.




CP22 S2022–6
Data checks
This sheet performs checks on the data. All checks were as expected and no changes were
made to the data in the ‘Data’ tab.

The following checks are made:

   All annual increases p.a. are either 3% or 5% as expected.
   The annuity is still in payment.
   There are 100 records, and no items of data are missing.
   The starting annuity amounts are within the expected range of $10,000 to $40,000 p.a.
   The total terms are between 15 and 25 years.

Assumptions
The following assumptions are made in the model:

   There is no allowance for mortality before the end of each annuity’s term.
   The data is complete and correct, in particular, the proportion of the annuity payment
    affected by the amendment.
   Any other annuities in payment with the company, other than the 100 analysed, are not
    affected.




CP22 S2022–7
‘Annuity projection’ sheet
This sheet projects the annuity amounts to 1 January 2022 by applying existing annual
annuity increases and then projects both the original and amended annual annuity
amounts to the end of each policy.

It also calculates annuity in advance factors as at 1 January 2023 using current and
amended annual increases for each annuity.

Projections to 1 January 2023 before and after amendment
(to be used with annuity factors to determine value)

Data is pulled from the ‘Raw Data’ sheet into the ‘Basic Information’ section in columns B:G.

Column J deducts the year of the annuity start date from the year of the amendment date for
each of the policies to calculate the number of payments that have been made up to 1 January
2022. Column I checks that both the annuity start date and the amendment date are the same
day (1 January).

Column K calculates the number of annual increases that have been made up to and including
1 January 2022 by deducting one from the payments to that date (column J). There was no
increase applied to the first payment because it was made immediately.

Column L calculates the payment amount p.a. after the 1 January 2022 increase as:

       Starting annuity amount (column F) × (1 + each annuitant’s increase rate from
                   column G) ^ number of increases to that date (column K).

Column M calculates the total annuity payment p.a. after the 1 January 2023 increase before
amendment by applying one further increase to the annuity value at 1 January 2022 (column
L). This is to be used alongside annuity in advance factors at 1 January 2023 to calculate the
value of annuities before amendment.

Column N calculates the annuity payment p.a. after the 1 January 2023 increase for the
unaffected proportion of the annuity by multiplying the annuity payment after
1 January 2022 increase by (1 – the proportion affected from column E) and applying one
further increase. This is to be used alongside annuity in advance factors at 1 January 2023 to
calculate the value of the proportion of annuities not amended.

Column O calculates the annuity payment p.a. after the 1 January 2023 increase for the
proportion of the annuity that is amended by multiplying the annuity payment after
1 January 2022 increase by the proportion affected from column E and applying one increase
at the amended rate (from the ‘Parameter’ sheet). This is to be used alongside annuity in
advance factors at 1 January 2023 to calculate the value of the proportion of annuities that
is amended.




CP22 S2022–8
Projections to end of annuity terms for analysis

Column Q calculates the number of increases remaining from 1 January 2024 onwards by
taking total increases over term (total term less one) less increases to 1 January 2022
(column K) less one 1 January 2023 increase.

Column R calculates the payment p.a. projected to the end of each annuitant’s term before the
amendment as:

           Total annuity payment p.a. before amendment, after the 1 January 2023
         increase (column M) × (1 + annual increase (column G)) ^ no. of increases
                                  remaining (column Q).

Column S calculates the payment p.a. (before any check on the value before and after
amendment) projected to the end of each annuitant’s term after the amendment as:

        Proportion of the annuity payment p.a. unaffected by amendment after the
      1 January 2023 increase (column N) × (1 + annual increase (column G)) ^ no. of
                             increases remaining (column Q)

                                                   plus

               Proportion of the annuity payment p.a. that is affected by amendment
            after the 1 January 2023 increase (column O) × (1 + amended annual increase
                 from the ‘Parameter’ sheet) ^ no. of increases remaining (column Q).

Annuity factors for CEO check on value

Column U calculates the number of payments remaining from 1 January 2023 to the end of
term (inclusive) by deducting payments made to 1 January 2022 (column J) from the total
term.

Columns V and W calculate the current and amended net discount rates respectively for use
in the annuity factor calculations. These are calculated as:

         (1 + discount rate p.a. (from the parameter tab)) ÷ (1 + annual increase rate (either
               annuitant’s current increase or the amended increase respectively)) – 1.

Columns X and Y calculate the current and amended annuity in advance factors respectively
to value the remaining annuity payments from 1 January 2023 onwards. These are calculated
as:

            (1 – (1 + applicable net discount rate from column V or W) ^ – Annuity term
           remaining (column U)) ÷ applicable net discount rate × (1 + net discount rate)

These factors are intended to be applied to the annuity payments after the applicable
1 January 2023 increases have been applied.


                                       END OF PAPER



CP22 S2022–9



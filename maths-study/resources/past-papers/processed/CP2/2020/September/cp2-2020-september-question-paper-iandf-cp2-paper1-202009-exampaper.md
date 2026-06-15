---
normalized_id: cp2-2020-september-question-paper-iandf-cp2-paper1-202009-exampaper
exam_code: CP2
year: 2020
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep20/IandF_CP2_paper1_202009_ExamPaper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2020-september-question-paper-iandf-cp2-paper1-202009-exampaper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             21 September 2020 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper One
                       Time allowed: Three hours and fifteen minutes




If you encounter any issues during the examination please contact the Examination team at
T. 0044 (0) 1865 268 873.




CP21 S2020                                              © Institute and Faculty of Actuaries
This page has been left blank.




CP21 S2020–2
Exam requirements

1     Modelling steps and data checks

      Read the background document that describes the scenarios that need to be modelled
      and documented for this project.

      Construct a spreadsheet model that produces the following calculations and charts.
      You should ensure that your spreadsheet contains appropriate self-checks and that you
      have performed robust reasonableness checks at each stage of your calculations.

      (i)     Perform checks on the validity of the following data items provided in the
              sample policy data:

              (a)     start date

              (b)     annual premium

              (c)     term.
                                                                                              [3]

      (ii)    Validate the current fund value of the policies by calculating an estimate,
              using the sample policy data and return information provided. Make
              appropriate assumptions regarding the timing of returns earned on premiums
              paid during any given year.                                                 [6]

      (iii)   Make adjustments to the data using a level of tolerance you consider to be
              appropriate, where the results of your checks in part (i) and calculations in part
              (ii) indicate the data may not be correct.                                     [4]

              [Note: the remaining modelling steps do not depend on (ii) being successfully
              completed.]

      (iv)    (a)     Calculate the current guaranteed value of each policy in the provided
                      sample.

              (b)     Estimate the total excess of the guarantee over the current value
                      (i.e. cost of guarantee) for all 8,000 policies.
                                                                                              [4]

      (v)     Produce summary tables that group the policies and the cost of guarantee by
              the three grouping options suggested.                                      [4]

      (vi)    Calculate the total uplift cost to the company for each of the three grouping
              options to compensate policyholders for the proposed loss of guarantee.       [5]

      (vii)   Produce a suitable chart to illustrate the results in parts (iv)(b) and (vi).   [3]

              [Note: all scenarios outlined above should be modelled separately in your
              spreadsheet. The user should not need to change the parameters to see the
              results.]
                                                                             [Sub-total 29]


CP21 S2020–3
2    Modelling technique and practice

     (i)       Auto checks on the modelling completed in stages 1(ii) to 1(iv).              [2]

     (ii)      Demonstration of good modelling techniques and practice                       [7]

     (iii)     Other checks.                                                                 [4]
                                                                                  [Sub-total 13]


3    Audit trail

     Produce an audit trail for your spreadsheet model that includes the following aspects:

          purpose of the model
          data, including checks, the results of the checks and any action taken as a
           consequence
          assumptions used
          methodology, i.e. description of how each calculation stage in the model has been
           produced
          explanation of any further checks performed.

     You should ensure that your audit trail is suitable for both a senior actuary, who has
     been asked to approve your work, and a fellow student, who has been asked to peer
     review and correct your model, to continue work on it or to use it again for a similar
     purpose in the future.

     Marks available for audit trail:

     Audit approach

     (i)       Communication skills (the audit trail provides enough detail to be read as a
               stand-alone document)                                                        [4]

     (ii)      Fellow student can review and check methods used in the model                 [7]

     (iii)     Senior actuary can scrutinise and understand what has been done               [7]

     (iv)      Written in clear English                                                      [4]

     (v)       Written in a logical order                                                    [3]

     Audit content

     (vi)      All steps clearly explained                                                   [8]

     (vii)     Clear signposting included throughout                                         [4]

     (viii) Statement of assumptions made                                                    [5]

     (ix)      All model steps accurately covered                                           [16]
                                                                                  [Sub-total 58]
                                                                                    [Total 100]


CP21 S2020–4
Background

You are an actuarial student working at ABC Life (‘ABC’).

ABC sold a number of regular savings policies between 1990 and 2010. Approximately 8,000
of these policies have not yet reached maturity. The main features of the product are outlined
below.

The product enables policyholders to invest regular monthly premiums over the term of the
policy.

At maturity the policyholder receives a payout equal to the accumulated value of the fund for
their policy based on the actual return on the assets underlying the policy, provided the
accumulated value of the fund is greater than or equal to a minimum guaranteed fund value.
If the accumulated value of the fund at maturity is lower than the minimum guaranteed fund
value at maturity, then the policyholder receives a payout equal to the minimum guaranteed
fund value.

The minimum guaranteed fund value at maturity, for an n-year policy with a monthly
premium of P is calculated as

                                     P ×12 × ((1+i(12))n – 1) / d(12)

where i(12) is the annual minimum guaranteed investment return and d(12) is the effective
discount rate per year, both compounded monthly. (See additional guidance for further
details.)

The difference between the guaranteed maturity value and the accumulated maturity value for
a policy is the cost of the guarantee to ABC for that policy. The cost of the guarantee is
subject to a minimum of zero.

Other features of this product are as follows:

   Policyholders can pay premiums at the start of each month of between $20 and $500 per
    month.
   The maximum term of the product is 30 years.
   The actual investment return on the fund is credited to the policy monthly.
   The annual minimum guaranteed investment return is 2% p.a. over the entire term of the
    policy.
   No alterations to the policy are allowed once the policy starts (such as changes to premium
    or term).
   The minimum guarantee only applies at the policyholder’s chosen maturity date – if a
    policyholder surrenders early, they only get the accumulated fund value at the date of
    surrender.

The company monitors the current guarantee value (that is, premiums accumulated using the
formula above to the current date at the guaranteed rate) to assess the likelihood of there
being a cost of guarantee at maturity.




CP21 S2020–5
Due to lower than expected investment returns achieved by the assets underlying the policy in
several years over the past 20 years, the current fund value for some policies is below the
current guaranteed value. Unless actual future returns are higher than expected, the benefits
paid to policyholders at maturity will be higher than the accumulated fund value, and the
company could be facing a larger than expected guarantee cost.

Your boss has been asked to run a project to analyse the options available to reduce the level
of the cost of the guarantee. He has asked you to undertake an initial investigation into the
cost of guarantee position for ABC as at the last valuation date of 31 December 2019, based
on data from a sample of policies. This investigation involves comparing the current
accumulated fund value to the current guaranteed value if each policy were to mature now.

In addition, your boss has asked you to consider various options for making an offer to
policyholders to accept an increased fund value now in exchange for a removal of the
guarantee. The options for you to consider are as follows:

1.       Policies grouped by year of issue: all policies issued in a single year get the same
         percentage uplift.
2.       Policies grouped by term to maturity: all policies with the same number of full years
         remaining get the same percentage uplift.
3.       Policies grouped by fund size: all policies are grouped into 10 fund size bands, and
         policies in the same band get the same percentage uplift.

Under each option, for each group, the uplift will be set at a level such that the increase in
fund value will be equal to the average cost of guarantee (expressed as a percentage of the
fund value) across policies in the group that have a cost of guarantee. For example, if there
were 10 policies with 20 years remaining to maturity, and three of these have an average cost
of guarantee (expressed as a percentage of fund value) of 8%, then the proposal would be to
offer all 10 policies an uplift of 8% of their fund value, even though seven policies have a
zero expected cost of guarantee. Your investigation should help identify which method will
result in the lowest overall uplift cost.

Information provided

You have obtained an Excel file from a junior student in your team. It contains a sample of
the policies that were active as at the last valuation date (31 December 2019), obtained by
taking every 80th policy from the full list of policies. You suspect that some manual
manipulation of the file was undertaken to produce this list. You have also heard that the
process used to extract fund values from the administration system has issues for certain
categories of policy, but you do not know the exact details. There are therefore some
concerns over the quality of the data.

The data provided is a modified extract from the administration system, and includes the
following data for each policy:

    start date
    annual premium
    policy term
    current fund value.




CP21 S2020–6
Separately, you have sourced a record of annual investment returns per calendar year for the
fund for the period. These have come from the Investment Team, and can be relied on to be
correct.

Due to the concerns regarding the quality of the data, your boss has asked you to check the
policy data thoroughly. He has suggested you use reasonable estimates instead of the
provided data where you believe that there are errors.

Modelling

Your task is to construct a model that produces the following checks, calculations and charts:

   Perform checks on the data provided.
   Validate the current fund value of each policy. To do this you should calculate an estimate
    of the current policy value using the premium, start date and fund returns, making
    appropriate simplifying assumptions where necessary. Because investment returns vary
    each year, you will not be able to use the formula provided, and will need to find a way to
    appropriately accumulate each year’s premiums to the valuation date. You will need to
    compare this estimate with the value given in the data, and decide on a suitable level of
    tolerance to determine whether your estimate is more reliable than the provided value.
   Calculate the current guaranteed value of each policy using the formula provided. Then
    calculate the cost of guarantee for the portfolio as the difference between the current
    guaranteed value and the current fund value, subject to a minimum of zero for each policy.
   Summarise the cost of guarantee by the three grouping options proposed (by year of issue,
    term to maturity and fund size bands).
   Calculate the cost to the company of each of the three proposals, assuming all policies in
    each group take up the offer.
   Produce a graph that compares the actual cost of guarantee for all policies to the cost of
    the three uplift options your boss has proposed.

Additional Guidance

For calculating the average cost of guarantee per policy, summarising by group, the
AVERAGEIFS function may be useful. This works similarly to the SUMIFS function, but
calculates the average over a range where a certain condition is met, as follows:

AVERAGEIFS(range to average over, range for condition, condition)

Additional conditions may be added if required.

IFERROR(formula, result if error) can be used to check whether a formula returns an error,
and provide an alternative result if this is the case.

Actuarial formulae:

                                        i(12) = (1+i/12)12

                                      d(12) = i(12)/(1+i(12))


                                    END OF PAPER


CP21 S2020–7


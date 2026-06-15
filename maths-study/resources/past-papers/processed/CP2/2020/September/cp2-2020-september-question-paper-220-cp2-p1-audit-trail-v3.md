---
normalized_id: cp2-2020-september-question-paper-220-cp2-p1-audit-trail-v3
exam_code: CP2
year: 2020
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep20/220_CP2-P1_Audit trail v3.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2020-september-question-paper-220-cp2-p1-audit-trail-v3

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

September 2020

AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

Paper One

>  Institute and Faculty of Actuaries

Analysis of Cost of Guarantees for ABC Life

**Purpose**

ABC Life is undertaking an analysis of a portfolio of regular savings
products to gauge the impact of the investment guarantees. A sample of
policy data has been taken to estimate the current value and guaranteed
value for the portfolio. Three options to provide an uplift to
policyholder values to try and reduce the future cost of guarantees have
been suggested.

This spreadsheet does the following:

- Performs checks on the data provided

- Estimates the current fund value as a further check on the provided
  data

- Calculates the current cost of the guarantee

- Analyses the three options suggested for providing an uplift to the
  policyholders

**Data**

Two sets of data were provided:

- A sample of policy data, including start date, annual premium, term,
  and current value (**Policy Data** sheet). This was provided by a
  junior student in my team, and there are a number of concerns with the
  quality of this data.\
  \
  The checks performed and amendments made are dealt with in the next
  section.

- Investment returns on the fund that these policies are invested in
  (**Investment returns** sheet). These are annual returns for each year
  since 1990, when the first of the policies was issued. These returns
  were provided by the Investment team.\
  \
  While the returns do vary quite significantly from year to year, they
  are within a range of -32% to +25%, which is within reason. I have no
  reason to doubt the accuracy of this data, and have assumed that it is
  correct.

In addition, other parameters (such as sample size and valuation date)
and product specification information (max / min premium) has been
provided – these are all entered on the **Parameters** sheet.

**Data Checks**

The policy data was copied from the **Policy Data** sheet to the
**Amended Data** sheet using formula references.

The following checks were performed on the policy data:

1.  Start date\
    In column F, we check whether the start date is outside the range
    that these policies were sold. This is from 1990 to 2010, and the
    check uses the first and last start dates on the **Parameters**
    sheet to compare to the provided start date.\
    In row 2, there is a sum which tallies up the number of errors.\
    There is only one error – on policy 34, which has a start date
    in 1910. I have assumed that this should be 2010.

2.  Premium\
    In column G, the premium is checked to see whether it’s within the
    range of the product specification (minimum 20 and maximum 500 per
    month – linked from the **Parameters** sheet). The annual premium is
    divided by 12 and the formula returns 1 if it’s bigger than the max
    or smaller than the min premium.\
    Again, there’s a tally in row three which counts the errors. There’s
    only one – policy 42, which has an annual premium of 6,940. I have
    assumed that this should be limited to the maximum of 6,000.

3.  Term\
    In column H, the term is checked to see if the policy should still
    be active at the valuation date given the start date and the
    provided term. That is, if start date + term years \< valuation
    date, then mark as an error, as this policy should not be treated as
    active.\
    The tally in row three shows two errors. One is policy 34, due to
    the incorrect start date. The other is policy 61, which matures a
    year prior to the valuation date.\
    This policy could be excluded from the analysis, but I have decided
    to increase the start date by one year to keep it included in order
    to keep a sample of 100 policies. This should be reviewed with a
    check on the administration system of why this policy is still
    showing as active.

The changes described above were implemented in columns J (premium) and
K (start date) respectively, and the changed data is highlighted yellow
(all other cells are just referencing the provided data). Note that no
changes were made to Term.

The checks were copied across and applied to the amended data (with
another set of tallies in row three above) to ensure that there are no
errors remaining.

There was a requirement to do a check on the fund value provided – this
was done on the following two sheets.

**Assumptions**

- Assume that apart from the data errors discovered, the policy data
  supplied is correct

- Assume that annual returns provided are earned uniformly throughout
  the year.

- Assume that monthly premiums are paid, on average, half-way through
  the year.

- Assume that a 5% tolerance level is appropriate to determine whether
  the policy fund value provided is correct

- Assume that the sample policies provided are a representative
  selection of all 8000 policies.

**Return Calcs**

This sheet performs calculations on the Investment Returns provided to
adjust them so they can be used in subsequent policy calculations.

Columns A to E link to the provided data on the **Investment Returns**
sheet.

In order to calculate returns for premiums paid in a given year, we
assume that they’re paid on average half-way through the year.
Therefore, when accumulating them to the valuation date, we need half of
the current year’s return, plus the cumulative return to the valuation
date. This calculation is done in column E as the square root of the
current years return factor (column C) multiplied by the cumulative
return from the beginning of the next year to the valuation date (column
D).

**Fund Value Calcs**

This sheet calculates an estimate of the current fund value as a check
against the provided fund value. It also calculates the guaranteed fund
value, and from that, the current cost of guarantee. There is a heading
for each section in line 3 which is used as a heading here in the audit
trail for clarity.

**Policy Data**

The first five columns link back to the Amended Data sheet, and link to
the corrected data (for start date and premium) and the original data
(for term and current value).

**First year’s premiums**

Columns F and G calculate the value of the first year’s premiums at the
end of the first year. Column F works out how many monthly premiums were
paid in the first year by subtracting the month the policy started from
12, and adding 1 (so a policy starting in December pays 12 – 12 + 1 = 1
premium that year).

If we let the number of premiums paid in the year by n, then Column G
accumulates these premiums to the end of the year as:

Annual premium \* n / 12 \* (1 + return)^(n / 24)

The divisor is 24 in the formula as on average, the return will apply to
half the period that the premiums were paid over. This is the same as
n/12 \* 1/2.

**Value of premiums in each year accumulated to valuation date**

This section calculates the value as at the valuation date of the
premiums paid in each calendar year. For each year from 1990 to the
valuation year (2019) the following formula is applied:

If it is the first year of the policy (year in column matches year of
start date), then the value of the first years’ premiums in column G is
accumulated to the valuation date using the cumulative return from the
start of the following year (from column D on **Return Calcs** sheet).

If not, then we assume premiums are paid half-way through the year, and
we use the cumulative return from the midpoint of this year to the
valuation date (from column E on **Return Calcs** sheet)

In column AL we sum all these premiums up to get a total estimated value
of the current fund.

**Compare to Data Value**

In this section we compare the calculated value to the provided value.

Column AM has the difference between the calculated value (AL) and the
provided value (column E).

Column AN expresses this as a percentage of the provided value, with the
absolute value taken to make it easier to analyse.

Below the main table, I have counted the number of policies in 5% bands,
using COUNTIF and COUNTIFS functions. This shows that the majority of
policies have an error less than 5%, which would indicate that the
provided fund value for these policies is correct. Given the reasonably
volatile returns, it is reasonable that our assumption of uniform
returns over each year would lead to a 5% error quite easily.

There is only one policy in the 5-10% band, and the remainder have an
error higher than 10%. Looking at a few of these, it appears that the
policies with high errors are all older policies issued in 1996 or
earlier. Given the information provided that there may be something
wrong with the extraction routine, it seems likely that this is related
to the issue year of the policy.

Therefore, I have set a tolerance level of 5% as appropriate to
determine whether the provided data value is correct or not in column
AO. If the error is less than 5%, the provided fund value is used, but
if the error is greater than that, the calculated value in column AL is
used. The 5% tolerance is entered on the **Parameters** sheet.

**Guaranteed Returns**

This section calculates the guaranteed fund value, and the cost of
guarantee.

Column AP uses the formula provided to calculate the guaranteed fund
value:

> Annual premium \* ((1+i<sup>(12)</sup>)<sup>n</sup> ‑ 1) /
> d<sup>(12)</sup>

i<sup>(12)</sup> is calculated as (1 + 2%/12)<sup>12</sup> on the
Parameters sheet (range name Gtee)

d<sup>(12)</sup> is calculated as i<sup>(12)</sup> / (1 +
i<sup>(12)</sup>)

The cost of guarantee is the guaranteed value less the current value (in
column AO), subject to a minimum of zero. The majority of policies seem
to have a cost of guarantee, which is reasonable given the desire of the
company to do something about this.

In column AR, this cost is expressed as a percentage of fund value.

**Data Fields**

The three columns in this section are used to group the results in the
following sheet.

Year of entry is the year from the start date.

Outstanding term is the policy term less the duration of the policy,
rounded up.

Fund value band is the current fund value, divided by the fund band
size, rounded down, and then adding 1. The fund band size is on the
parameters sheet, and was obtained by finding the maximum fund value
(around 193,000) and dividing by 10, then rounding up to the next 5,000.

**Data Analysis Sheet**

This sheet does the grouping of the results using the three grouping
options, and calculates the cost of each option for applying an uplift
to policyholder funds.

The first table analyses the cost if the uplift is done by year of
entry.

Column A has the year of entry from 1990 to 2010.

Column B uses SUMIF to sum up the cost of guarantee for policies with
each year of entry.

Column C uses AVERAGEIFS to calculate the average percentage for
policies with a positive cost of guarantee. The percentage is from
column AQ on the Fund Value Calcs sheet.

Because AVERAGEIFS returns an error if there are no records that qualify
the condition, IFERROR is used to return zero if this is the case.

Column D then applies this average percentage to the sum of the fund
value for policies in each year of entry.

Underneath, the total cost of guarantee and the cost of uplift is
summed.

These totals are then multiplied by the sample multiplier from the
Parameters sheet (which is the 8000 policies divided by the provided 100
policies = 80)

The cost of the uplift is higher than the cost of guarantee, which is
reasonable, as the uplift is applied to all policies in each group
whether or not they have a guarantee cost. There will be some policies
with a zero cost of guarantee, which still get an uplift.

In columns H to K, the same calculations are done, but using Term to
Maturity. The SUMIF and AVERAGEIF formulas therefore reference the Term
to maturity column (AT) on the Fund Value Calcs sheet instead of the
year of entry column.

Similarly, columns N to Q do the same analysis using the Fund Band
column (AU).

As a check, the total cost of guarantee for all three methods is the
same – this shows that we have included all policies in the three
different groupings.

As a reasonability check, it makes sense that the uplift cost for year
of entry is the lowest. This is because the policies issued in each year
will be subject to similar returns, and are therefore more likely to all
have (or not have) a cost of guarantee at present.

Fund size banding is the next smallest. As fund size is correlated to
duration in force (older policies are more likely to have high fund
values, and vice versa), there is a similar effect to issue year. Fund
size is also affected by premium size, which will not align with issue
year.

Term to maturity has the highest cost, as there is no link to returns at
all.

**Graphs**

The graphs sheet brings in the total cost of guarantee, and the cost of
the uplift for the three different options. These four are presented on
a bar graph. The numbers have been divided by 1,000, and the scale of
the graph has been truncated to better illustrate the variation.

**END OF AUDIT TRAIL**



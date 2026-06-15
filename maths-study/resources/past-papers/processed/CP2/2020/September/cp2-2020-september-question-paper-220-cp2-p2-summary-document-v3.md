---
normalized_id: cp2-2020-september-question-paper-220-cp2-p2-summary-document-v3
exam_code: CP2
year: 2020
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Sep20/220_CP2-P2_Summary Document v3.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2020-september-question-paper-220-cp2-p2-summary-document-v3

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

> September 2020

## Subject CP2 – Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**
>
> ** Institute and Faculty of Actuaries**

**Purpose**

Accidents Happen (AH) offer insurance policies for electronic goods. The
company is considering developing a new insurance product for mobile
phones to offer customers from 2021. The policies will provide insurance
cover for repairs on a policyholder’s mobile phone following accidental
damage e.g. a cracked screen, water damage.

In order to assess the potential cost implications of this new product,
AH has sourced data from another insurer and has been advised that
claims for this type of product follows the exponential distribution.

The purpose of our model is to assess whether the claims data does
follow this distribution and to use this data to assess the potential
cashflows and the projected profit for AH over the 2021 policy year.

New regulations are also being implemented in 2020 and this will involve
AH holding a reserve for policies sold. This is likely to reduce the
policy’s profitability. Therefore AH would like to consider increasing
the policy premium or increasing the policy excess in order to maintain
profitability levels.

**Data**

The Pricing Team has advised that:

- Each policy is sold at a price of \$20 per annum;

- Premiums are paid by the policyholder to the insurer on a monthly
  basis at the beginning at each month;

- There is an excess of \$50 for each claim;

- If a claim is made by a policyholder, the policy will continue for the
  remainder of the year.

Another insurance company, Never Worry (NW) has provided the monthly
claims information for 10,000 policies that were sold in 2019 and that
offered similar cover. The claims reported only include claims which
were higher than the claim excess amount. NW has also advised that is
expected that claims follow an exponential distribution with parameter
(λ) 0.01.

The Operations Team has advised that:

- Initial expenses for writing each policy is \$1.

- Monthly expenses for each policy will be \$0.75.

- Claim expenses are expected to be \$10 per claim.

- An interest rate of 10% p.a. should be used for the cashflow analysis.

When new regulations are implemented, the reserve required will be 110%
of the expected claims and corresponding claim expenses from the
policies written.

**Assumptions**

- The number of claims between \$0 and \$50, i.e. claims not reported,
  is in line with the number you would expect from the exponential
  distribution with parameter 0.01.

- Premiums received and initial expenses are assumed to occur at the
  beginning of the month.

- Monthly expenses are assumed to occur uniformly over each month and
  therefore can be assumed to occur half way through the month.

- Claims are assumed to be paid out at the end of each month.

- The reserve will released at the end of the policy year and there will
  be no change in the reserve amount over the policy year.

- **Even if a claim is slightly over the excess amount, all
  policyholders will still submit the claim.**

- **The claims data received from NW does not need to be adjusted for
  inflation.**

- **The expenses quoted do not need to be adjusted for inflation.**

- **No policies will lapse over the policy year.**

- **The approximation for the expected incurred claim continues to be
  appropriate even if the policy excess is changed.**

- **AH will sell 10,000 policies in the 2021 policy year and the
  characteristics of the customers that AH will attract will be similar
  to that of the policyholder of NW.**

- **The number of claims for AH’s policies sold will follow the same
  distribution as those experienced by NW.**

- **Demand for the policies will not be impacted by any change in policy
  premium or policy excess.**

**Verification of the claims data**

Checks have been applied to the claims data provided by NW. The minimum
claim is \$52. This is reasonable as we would not to see any claims
below \$50 as this is the policy excess amount.

The maximum claim is \$494. This is again reasonable given the likely
cost of repairing a mobile phone.

The average claim amount from the incurred claims is \$146. Given the
claim amounts are from the exponential distribution with parameter 0.01,
we would expect the average claim amount to be \$100. However, claims
under \$50 are not included in the data provided. Therefore it is
reasonable that the average of incurred claims is higher than \$100.

In order to assess whether the claims data is from an exponential
distribution, we have completed a chi-squared test. We have considered
claim amounts from \$0 to \$500, using buckets of \$50. This results in
10 buckets and therefore our test uses 9 degrees of freedom. Assuming a
95% confidence interval, we would expect a test statistic under 3.325.
We have calculated a test statistic of 2.618 and therefore the
Chi-squared test has been met and we can conclude that the claims data
does come from the exponential distribution with parameter 0.01.

The chart below illustrates the distribution of the claims data – note
that this does not include claims between \$0 to \$50 as these have not
have been reported.

The shape of the number of claims reported does follow an exponential
curve. Given this and the chi-squared test, we can conclude that it is
reasonable to assume that the claims data follows the exponential
distribution.

**Methodology**

We have projected the cashflows for the expected policies sold over a
full policy year. For each month, we have determined the cashflows that
will occur. These cashflows include:

- The income received which is the monthly premium received from the
  10,000 policies.

- The initial expenses incurred by the insurance company – these are
  only incurred at the beginning of the policy i.e. in January.

- The monthly expenses borne by the insurance company (monthly expenses
  x number of claims).

- The claims incurred in the month – this is calculated by:

  - summing the claims incurred in that particular month; and
    subtracting

  - the policy excess multiplied by the number of claims incurred in
    that month.

- The claims expenses borne by the insurance company – this is
  calculated by multiplying the expense per claim by the number of
  claims incurred in that month.

The net cashflow for each month is then determined by taking the income
and subtracting all other items.

The accumulated profit is also projected on a month-by-month basis. It
is assumed that the profit at the beginning of the policy year is \$0.
The accumulated profit at the end of each month is determined by taking
the accumulated profit at the beginning of each month and allowing for
the income and outgoings that occur in that month. The projections allow
for the assumed interest rate, taking into account the assumed timing of
each cashflow.

*Additional Reserve Requirement*

To allow for the additional reserve requirement, we have introduced two
new cashflows:

1.  The reserve created – this is a negative cashflow in the first month
    only.

2.  The reserve released – this is a positive cashflow in the twelfth
    month only and the nominal amount is set equal to the reserve
    created.

We have calculated the reserve required by first calculating the
‘expected claim with excess deducted’ and multiplying this plus the
claim expense amount by the ‘expected annual number of claims in a
policy year’. This amount is then multiplied by the reserve requirement
of 110%. The ‘expected claim with excess deducted’ is calculated by:

- taking the expected claim reported, which is equal to the mean of the
  exponential distribution plus the policy excess; and subtracting

- the policy excess.

The expected annual number of claims in a policy year has been
calculated by summing the actual number of claims in the claims data
provided by NW.

For this scenario, the net cashflows and accumulated profit at the month
end has been calculated in the same way as the methodology adopted for
the base scenario. For this calculation, it is assumed that the reserve
is created at the beginning of the month while the reserve is released
at the end of the month.

*Mitigation options*

The first mitigation option of increasing the policy premium was found
by adjusting the cashflow projections to allow for an alternative policy
premium. The only cashflow impacted was the monthly income. In order to
find the increased policy premium, a goal seek was completed.

For the second mitigation of increasing the policy excess, it was
necessary to first calculate the new reserve based on an alternative
policy excess amount. The expected claim reported increased but the net
expected claim with excess deducted did not change. The number of
expected claims did reduce as some reported claims were lower than the
new policy excess.

In relation to the cashflows, the net claims and claim expenses needed
to be amended to reflect the new policy excess. Again this impacted the
net cashflows and the accumulated profit at each month end. In order to
ensure that there was no reduction in profit, a goal seek was again
completed.

**Results**

The chart below illustrates the expected monthly cashflows and the
progression of the accumulated profit over the policy year.

The accumulated profit at the end of December is \$12,952.

<img src="media/image1.png" style="width:6.52778in;height:4.26775in" />

The net cashflows are negative in January because the initial expenses
are borne by the insurance company in that month and this results in a
greater outgo than the income received for that month.

Subsequent cashflows are positive but quite volatile. This is due to the
fact that claims vary significantly month to month.

As expected, the accumulated profit starts off negative due to the
initial higher outgo in January but gradually reached zero as positive
net cashflows are expected in subsequent months. The accumulated profit
then grows further due to additional positive cashflows and the interest
received on these.

*Revised cashflows following introduction of reserve*

The chart below illustrates the change in the monthly cashflows as a
result of the introduction of the reserve requirement.

<img src="media/image2.emf" style="width:6.5in;height:4.24761in" />

As expected, the only change is the larger negative cashflow in January.
Between February and November, there is no change in the net cashflows
as the reserve has no impact on the claims incurred or expenses. The
cashflow in December increases as the reserve is released at the end of
the policy year. The positive cashflow in December is of a similar
magnitude to the negative cashflow in January which is reasonable given
the size of the reserve to other cashflows in those months.

The impact of the allowance for the reserve is to reduce the profit at
the end of December from \$12,952 to \$2,849.

This is primarily a result of the interest incurred on the reserve over
the year. The reserve under this scenario is \$101,035 and given the
discount rate of 10%, it is expected that the interest cost will be
around \$10,000. The reduction in the profit by the end of the year is
consistent with this.

*Mitigation options*

In order to ensure that the profit is not impacted by the allowance for
the reserve requirement, AH could either

1.  Increase the policy premium to \$20.96; or

2.  Increase the policy excess to \$60.01.

The above changes represents a 5% increase to the policy premium while
the policy excess would have to increase by 20%.

The chart shows how the accumulated profit varies between the options
considered.

<img src="media/image3.emf" style="width:6.5in;height:4.24164in" />

The accumulated profit at the end of January is significantly lower for
the ‘with reserve’ and ‘updated policy cost’ scenarios due to the high
cash outflow in relation to the reserve.

For the ‘updated policy excess’ scenario, the accumulated profit at the
end of January is less negative as the reserve requirement is lower.
While the expected claim incurred does not increase under this scenario,
it is expected that there will be a lower number of claims as more
claims will now fall under the excess amount.

The shape of the ‘with reserve’, ‘updated policy cost’ and ‘updated
policy excess’ scenario curves are very similar. The ‘update policy
cost’ curve increases slightly quicker due to the higher income received
each month due to the higher policy premium.

As expected the accumulated profit at the end of December is the same
for the ‘base’, ‘updated policy cost’ and ‘updated policy excess’
scenarios.

**Conclusions**

The introduction of the reserve has a significant impact on the
profitability of the business. This is expected due to the size of the
reserve and the high interest rate assumed.

The options available to mitigate the impact of the allowance for the
reserve do not change the attributes of the policy significantly.
However, it may be easier to implement the change in the policy premium
as this involves a lower proportional increase and therefore may not
impact the marketability of the product significantly. However AH will
have to consider whether this change will not make the product
competitive in the market.

The actual profitability of the policies will depend on the actual
number of policies sold, the actual number of claims, the level of these
claims and the costs incurred. These could all vary significantly from
those assumed here and therefore so could the profit made.

**Next steps**

- Confirm that the data provided is representative of the expected
  claims that may be incurred if AH introduce this product i.e. are all
  the terms adopted by NW the same as those proposed by AH.

- Source additional data from other sources (e.g. another insurance
  company offering similar products or a reinsurer, if applicable) that
  cover a greater number of policies.

- Try to obtain data in relation to claims under the policy excess
  amount.

- Confirm that the expenses per policy and per claim are reasonable.

- Complete the chi-squared test to a higher level of confidence.

- Allow for inflation between 2019 and 2021 on both the premiums and
  expected claim costs and expenses.

- Confirm that the interest rate of 10% is appropriate for this period
  of projection.

- Consider alternative scenarios such as reduced policy term, limit the
  number of claims, etc. to assess impact on the accumulated fund
  amount.

- Sensitivity test the results of the analysis to allow for a different
  interest rate or an alternative reserve formula.

- Sensitivity test the impact of the change in the policy premium and
  the policy reserve to changes to the proportion of reserve required by
  the Regulator.

- Confirm that the formula adopted for the expected claim incurred is
  appropriate or whether some alternative formula should be used.

- Determine the distribution of the number of claims incurred and
  complete stochastic projections using the exponential distribution for
  claim amounts.

- Project the cashflows over a longer period to consider if the product
  will be profitable in the longer term.

- Consider amending both the policy cost and the policy excess in order
  to mitigate the impact of the allowance for the reserve requirement.

- Assess whether the alternative policies have been offered in the
  market and investigate if they are profitable.

- Consider the impact on the cashflow projections if the premium is paid
  as an annual amount at the beginning of the year – this may enable to
  company to reduce premiums and given a lower premium, customers may be
  willing to make a one-off payment.

- Investigate whether the Regulator will permit the reserve to be
  released gradually over the policy year and update the model.

- Obtain a peer review of the model.

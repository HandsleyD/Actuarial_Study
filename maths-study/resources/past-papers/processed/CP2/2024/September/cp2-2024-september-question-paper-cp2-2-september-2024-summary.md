---
normalized_id: cp2-2024-september-question-paper-cp2-2-september-2024-summary
exam_code: CP2
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Sep24/CP2-2_September 2024_Summary.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2024-september-question-paper-cp2-2-september-2024-summary

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

> September 2024

## Subject CP2 ‑ Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**

**Actuarial Scholarship Fund Analysis**

**Overview**

The university has received a donation from a local businessperson and
it would like to invest this donation in a fund from which two students
in their final year will be awarded a scholarship payment to complete
their actuarial degree at the university.

The university wishes to consider the potential period over which the
scholarship payments can be made and to determine the Money Weighted
Rate of Return (“MWWR”) if the donation is invested in a passive equity
fund, which is expected to achieve returns in line with the All Share
Index i.e. ASI (Total Returns).

We have completed some analysis of the historic returns on the ASI
(Total Returns) to determine likely future returns for the Equity Fund.

We have then completed fund projections under two different scenarios:

1.  The scholarship payments remain flat in the future.

2.  The scholarship payments increase annually with inflation.

To illustrate the potential volatility in these projections we have also
completed ten simulations under both scenarios above to determine the
fund projections pertaining to the minimum and maximum terms over which
the scholarship payments can be made and their respective MWRRs.

**Data**

The university has confirmed that the donation is \$250,000 and the
scholarship payment made to each student in 2024 will be a lump sum of
\$10,000. Scholarship payments will continue in future years provided
there is enough money left in the fund to make full payments.

We have obtained the historic values of the ASI from the Internet. The
future inflation curve has been taken from the local central bank’s
website.

Checks have been completed on the ASI data. In particular:

- There do not appear to be any missing periods from the data other than
  weekends and public holidays

- There are no negative entries in the historic index values.

- The highest and lowest increase between consecutive time periods are
  reasonable.

We have also generated 250 random numbers from the Uniform \[0,1\]
distributions for the simulations exercise. We have applied checks on
the random numbers which confirms they come from this distribution.

**\
Assumptions**

- *It is assumed that the donation will be invested from 1 September
  2024.*

- *It is possible to make withdrawals from the passive equity fund to
  make the scholarship payments.*

- *The daily observations are independent.*

- *The data obtained from the internet is correct.*

- In particular, the historic values of the ASI are based on the Total
  Return Index.

- It is reasonable to use this period for the analysis noting that the
  end of our historic analysis is 30 December 2022 but our projections
  are starting from 1 September 2024.

- The future return on equities is expected to follow a linear equation.

- It is appropriate to continue to use the future return on equities
  when the fund value drops below zero.

- The inflation curve is assumed to be based on forward rates.

- There is no exchange rate risk between the underlying investments and
  the cashflow currencies.

- The inflation rates for each year will apply throughout the whole of
  that calendar year.

- There will be no expenses incurred by the fund and the returns on the
  funds are net of any investment expenses.

**Methodology**

*Regression analysis*

The logarithms with base 10 of the historic ASI values are analysed to
determine a linear equation that could be used to estimate future values
of the ASI. This analysis is completed using excel’s regression analysis
function, based on the date and the historic values of the index.

The results of this analysis output the variables for the linear
equation, goodness of fit parameters and the historic residuals.

*Equity core projection*

Using this linear equation, we have projected the future log (base 10)
All Share Index values for a period of 25 years from 1 September 2024.
The future values of the log (base 10) All Share Index are converted to
future values of the index at the 1 September each year in the
projection.

The annual scholarship paid each year is calculated as the individual
scholarship amount multiplied by the number of scholarships awarded.

A scholarship indicator is then determined to assess whether the fund
value at the beginning of that year is greater than the scholarship that
will be paid that year.

The initial donation is then projected on an annual basis. For years
when a scholarship is paid at the beginning of the year, the fund value
at the end of the year is taken as the opening fund value less the
scholarship paid (as scholarship payments are made at the beginning of
the year), and then the change in the ASI over that year is applied.
This end-of-year fund value then becomes the opening value fund value
for the next year. If there are insufficient funds to make the
scholarship payment in a particular year, the fund value reduces to zero
and the money in the fund is returned to the university.

An analysis is then completed on the results of this projection. The
term over which payments can be made is determined using the scholarship
indicator by counting the number of years in which scholarship payments
are made.

When scholarship payments can no longer be made, the residual assets are
taken as the fund value at the beginning of that year.

The MWRR for the scenario can then be calculated. The present value of
the scholarship payments (calculated from a temporary annuity) and the
present value of the residual assets are calculated based on this MWRR.
A goal seek is then performed, which varies the MWRR until the total
present value is equal to the donation received.

*Equity simulations*

To allow for the volatility of future equity returns, the same analysis
is completed for 10 simulations. Random numbers from the uniform \[0,1\]
distribution have been converted into random numbers from the normal
distribution, with mean and variance equal to the observed mean and
variance of the residuals from the regression analysis. These simulated
random numbers (i.e. the residuals) are then added to the linear
equation for determining future values of the log (base 10) ASI. The key
statistics (i.e. the expected payment term, residual assets and MWRR)
are calculated for the projections that produce the minimum and maximum
term for which the scholarship can be funded over the 25 projection
period.

*Scholarship payments increase with inflation*

The same analysis as above is repeated for the Equity core projection
and the Equity simulations but on the assumption that future scholarship
payments are increased in line with inflation each year.

To allow for this, the annual scholarship payment is increased from 1
September 2025 by applying the forward inflation rate to the payment in
the previous year since the first payment on 1 September 2024 will not
be subject to inflation.

We have considered the simulations which have the minimum and maximum
terms (where simulations have the same term, consideration is given to
the residual assets). For these minimum-term and maximum-term
simulations, the MWRR and the present value of the scholarship payments
and residual assets are calculated. As scholarship payments are
increasing at a variable rate, it is no longer possible to calculate the
present value of the scholarship payments using a temporary annuity. As
an alternative, the discounted value of the scholarship payment in each
year is calculated by discounting the amount by the MWRR for the term
between 1 September 2024 and the payment date. The present value of the
scholarship payments is then calculated as the sum of these present
values in years where scholarship payments are made.

**Results**

The historic values of the log (base 10) All Share Index Values are
shown in the chart below.

<img src="media/image1.png" style="width:6.59047in;height:4.30044in" />

We can see from the chart that (excluding more recent year) there
appears to be a linear increase in the logarithm values, which suggests
that it might be possible to use a linear equation. We can see however
that there is volatility in this series and we would also note that
there is some extreme volatility in the most recent history i.e. in
2022.

The regression analysis produces the following linear equation:

Log (base 10) ASI at time t = 1.038559 + date \* 0.000058 + residual

The regression analysis produces a R-square level of 0.94 which is
sufficiently high to indicate that a well fitted linear equation has
been produced.

The below chart shows the residuals from the regression analysis over
the same period.

<img src="media/image2.png" style="width:6.55284in;height:4.27588in" />

Over the period between 2003 to the end of 2021, we see that the
residuals oscillate around zero and have values between -0.05 and 0.05,
which indicates that the linear equation is a relatively good fit.
However, we note in 2022 that the residuals have been much more
negative, indicating that there have been significant observed
variations from the linear equation over that year.

*\*

*Projected Fund values*

The below chart shows the projected fund values (for the core and
min/max term simulations) for the 25-year period from 1 September 2024,
both with and without inflation.

<img src="media/image3.png" style="width:6.51611in;height:4.25192in" />

As expected, each projection starts from \$250,000 and reduces to zero.
The minimum-term projection with no inflation reaches the x axis at an
earlier time than the core projection indicating that the expected
payment term will be lower. The maximum-term projection with no
inflation reaches the x axis at a later time than the core projection
indicating that the expected payment term will be higher – these are
both as expected.

For the projections without inflation, we see that the spread between
the minimum-term and maximum-term projections widens as time progresses
as the impact of the volatility in returns builds up. This means there
is more uncertainty on the expected period over which the scholarship
payments will be made.

The curves for the minimum-term and maximum-term projections with no
inflation have more stepped changes as the volatility (i.e. the
residuals) is only allowed for at the beginning of each year.

The spread between the minimum-term and maximum-term simulations under
the with inflation scenario is smaller than the spread under the no
inflation scenario.

The core projection with no inflation is higher than the core projection
with inflation.

Furthermore, the core projection with inflation reduces more quickly.
This is expected because future scholarship payments will be higher
under the with inflation projection and therefore more money is
extracted from the funds.

As a result of this, the curve crosses the x axis under the core
projection with no inflation at a later date, which means the expected
payment term is higher.

For the projections with inflation, we again see that the spread between
the minimum-term and maximum-term projections widens as time progresses
and the curves also have more stepped changes.

The minimum/maximum-term projections with no inflation do not follow a
similar path to the minimum/maximum-term projections with inflation as
these are based on different simulations.

The below table shows a comparison of the payment terms and MWRR under
the projections illustrated in the chart above.

| No inflation   |     | **Payment term** | **MWRR** |
|----------------|-----|:----------------:|:--------:|
| Minimum-term   |     |        15        |  3.42%   |
| Core           |     |        18        |  5.00%   |
| Maximum-term   |     |        21        |  5.98%   |
| With inflation |     |                  |          |
| Minimum-term   |     |        12        |  3.02%   |
| Core           |     |        13        |  4.99%   |
| Maximum-term   |     |        15        |  6.21%   |

The expected payment terms under the no inflation projections are higher
than the expected payments under the with inflation projections due to
the lower future scholarship payments when inflation is not applied.

*\*

*No inflation analysis*

The MWRR under the core projection is 5.0% p.a. Under the minimum-term
projection, which produces the lowest expected payment term, the MWRR
reduces to 3.42% p.a. Given this the minimum-term projection, we would
expect the MWRR to be lower than the MWRR under the core projection.
However, we note that this simulation is still producing positive rates
of return.

For the maximum-term projection, which produces the highest expected
payment term, the MWRR increases to 5.98% p.a. Again, given this is the
maximum projection, we would expect the MWRR to be higher than that
under the core projection.

*With inflation analysis*

The expected payment term for the equity with inflation scenario is 13
years. This is 5 years lower than the equity scenario because the future
scholarship payments will be higher and therefore the fund will reduce
more quickly. The MWRR for this scenario is also 4.99% per annum i.e.
almost the same as the core projection with no inflation because no
changes have been made to the proposed investment strategy and there is
no allowance for volatility of returns in the core equity scenarios.

We also note from the statistics above that the expected term under the
with inflation scenarios only ranges between 12 and 15 years and the
MWRR covers a wider range, 3.02% to 6.21%. The narrower range of
expected terms under the “with inflation” scenario is a result of the
funds reducing to zero more quickly due to higher withdrawals being made
from the fund in future years as a result of the scholarship payments
increasing in line with inflation.

**Conclusions**

The expected payment terms will be higher when the scholarship does not
increase annually in line with inflation.

There is greater variance in the expected payment term under the “no
inflation” scenario as the lower payments being made under this scenario
means the fund value remains higher as time progresses and therefore is
more exposed to the volatility of returns.

If future scholarship payments are inflation linked, the payment terms
will reduce but given the payments could be made for more than the next
ten years, it may be fairer on future beneficiaries that the scholarship
payments are inflation linked.

**\**

**Next steps**

- Validate that the values for the ASI is based on Total Returns.

- Validate the values of the ASI against an alternative source.

- Obtain additional data for the ASI for 2023 and any information from
  2024.

- We could investigate whether the data from 2022 is suitable to be
  included in this analysis or whether adjustment to our analysis is
  required.

- Incorporate additional returns for the donation between the date the
  donation is made and 1 September 2024.

- Consider a more polynomial model (additional variables) that could be
  incorporated into the equation for future values of the ASI.

- Increase the number of simulations and consider 5<sup>th</sup> and
  95<sup>th</sup> percentiles.

- Consider alternative investment strategies that may include
  alternative investments e.g. bonds, property.

- Complete some sensitivity analysis on the future inflation rates to
  determine the impact on the expected term over which scholarship
  payments will be made.

- Model the inflation rates stochastically, allowing for any correlation
  with future equity returns.

- Consider the impact of providing lower scholarship payments.

- Consider a shock scenario where equity markets fall by 20% in a
  particular year to see the impact on the expected term over which
  payments are made.

- Allow for the expected expenses that may be incurred to operate the
  Fund.

- Investigate alternative options for the residual investment funds as
  opposed to returning the money to the university.

- Check if other local universities are also operating scholarship funds
  and how they are investing the amount for the best returns.

- Update the model for the actual ASI values as time progresses.

- Obtain a peer review of the model.

---
normalized_id: cp2-2022-april-question-paper-122-cp2-p1-audit-trail
exam_code: CP2
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr22/122_CP2_P1_Audit trail.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2022-april-question-paper-122-cp2-p1-audit-trail

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

> April 2022
>
> AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

> Paper One
>
> Institute and Faculty of Actuaries

# **Objective**

The Bank wishes to consider offering a new mortgage product, which
combines a savings account and a mortgage. The Bank wants to consider
the difference between the total mortgage repayments for the fixed rate
option and those that would be due if a variable interest rate was used.

We have been asked to produce a model that will calculate:

- the deposit that is expected to be accumulated by the customer over
  the two year initial period under both the fixed rate approach and the
  variable rate approach (multiple simulations are completed for the
  variable rate approach);

- the expected monthly mortgage repayment under both the fixed rate
  approach and the variable rate approach (multiple simulations are
  completed for the variable rate approach);

- the difference between the total mortgage repayments under the fixed
  rate option and the variable rate option.

We also consider an alternative mortgage product (for both the fixed
rate and variable rate options) that has a shorter savings period and an
initial five-year term for the mortgage, after which the client will be
given an option to re-assess the remaining mortgage (re-assessment is
not in the scope of our project).

# **Data**

Our actuarial colleagues have provided us with a set of 4,800 random
numbers. These are in the format of 200 rows by 24 columns. We have been
advised that these numbers come from the Normal (0,1) distribution.

For the original scenario, the marketing team of the Bank advised that:

- a customer will be able to save \$1,000 per month;

- the average house price is \$200,000; and

- the term of the mortgage is expected to be 25 years.

For the alternative scenario, the operation team has advised that the
customer would be expected to make monthly savings of \$2,000 per month.

The Bank has suggested that a fixed interest rate of 5.0% per annum is
appropriate for the fixed interest option.

The operations team of the Bank has confirmed that the current base
interest rate is 4.5% per annum and this should be used for the variable
rate option. The operations team has also confirmed that the expected
movement in the variable rate can be determined as follows:

Interest rate at t+1 = Interest rate at t + 0.50% if X ≥ 2.0

\+ 0.25% if 2.0 \> X ≥ 1.5

\+ 0.00% if 1.5 \> X ≥ -1.5

- 0.25% if -1.5 \> X ≥ -2.0

- 0.50% if -2.0 \> X

Where t is measured in months and X is a random number from the Normal
(0,1) distribution.

# **Assumptions**

- The random numbers provided are suitable to simulate the variations in
  interest rate during the savings phase of the product.

- The formula for the movement in the variable interest is accurate and
  will apply for the full two-year projection.

- The monthly deposits into the savings account have been assumed to be
  made in advance.

- Customers will make the saving payment during each month of the
  savings phase and there will no withdrawals.

- Customers only use the funds they will have in the savings account of
  the product towards their house purchase i.e. no additional funds are
  used for the house purchase (like some other savings).

- The marketability of both products is similar.

- There is no need to consider defaults on mortgage repayments.

- There is no regulations that prevent the setting interest rates under
  the proposed approaches.

- No additional costs need to be considered for the purchase of the home
  i.e. bank fees, solicitor fees.

- Mortgage repayments have been assumed to be made in arrears.

- There will be no increase in house prices between the inception of the
  product and the end of the two-year savings period.

- Customers will be able to afford the increased monthly saving amount
  for the alternative product.

The following sections describe each part of the model.

**\**

# **Raw data**

This tab includes the 4,800 random numbers in 200 rows by 24 columns.

Checks on this data are completed from column Z onwards.

In AA4, we have counted the number of random numbers using the COUNT
function. We would expect there to be 4,800 numbers and so an automatic
check is included in cell AE4.

In AA5 and AA6, we have also counted the number of random numbers which
are less than 0 and greater than 0 respectively. This is completed using
the COUNTIF function. Again, automatic checks are included in cells AE5
and AE6 to ensure that the total number in each ‘bucket’ is
approximately equal to half the total random numbers. This check
calculates the actual total divided by the expected total less 1 and
then ensures that the absolute value of the result is less than the
assumed tolerance of 2%.

We have also calculated the mean and standard deviation from all the
random numbers in cells AA8 and AA9 using the AVERAGE and STDEVA
functions respectively. We have included the expected values for the
Normal (0,1) in cells AC8 and AC9 (we expect the mean to be 0 and the
standard deviation to be 1). An automatic check has been included in AE8
and AE9 to ensure that the calculated values are within a level of
tolerance (included in cells AD8 and AD9) to the expected values.

We have also produced a histogram to show the distribution of the random
numbers. We have determined 16 buckets (the 2 outer buckets are less
than -3.5 and more than 3.5, the remaining buckets have 0.5 intervals).
The upper limits of these buckets are included in Z14 to Z29. The
cumulative number of random numbers under each of these limits is
calculated in column AA using the COUNTIF function. However, for cell
AA29, the total number of random numbers is included. The frequency for
each bucket is then calculated in column AC and this data is used to
plot the histogram, shown on the same tab.

A chi-squared test is completed in cells AF12 to AI35. The same buckets
are used as per the histogram. Column AF shows the observed frequency in
each bucket, which was calculated in column AC. The expected cumulative
frequency is then calculated in column AG using the NORM.DIST function
and multiplying this figure by the total number of random numbers in the
sample. From these cumulative values, the expected number in each bucket
is calculated in column AH. Column AI then calculates
(actual-expected)<sup>2</sup>/expected for each range and then sums
these values across all ranges. This total has been compared with the
chi-squared test statistic (CHIINV) calculated in cell AI33 at the
appropriate degrees of freedom (cell AI31 = number of ranges ‑ 1) and a
given test level (85%). If the total is less than the test statistic,
then we cannot reject the hypothesis that the random numbers come from a
N\[0,1\] distribution at the chosen confidence level*.* An automatic
check is included in AI35.

All automatic checks are passed and the histogram illustrates that the
random numbers broadly reflect the normal distribution N(0,1).

This evidence therefore supports that the random numbers provided are
from the Normal (0,1) distribution.

**Parameters**

*This worksheet provides a list of all parameters to support the
calculations. Parameters are split into those which apply to the first
mortgage product and the alternative mortgage product.*

Most parameters were provided by different departments in the Bank as
described in the data section.

# **Fixed rate projection**

*This worksheet calculates the expected accumulated deposit and the
expected monthly mortgage repayment amounts for the fixed rate option.*

Initially, the fixed annual interest rate (cell B4 taken from the
parameters worksheet) is converted to an interest rate convertible
monthly in cell C4 using the formula:

$`i^{(12)} = \ 12*((1 + i)^{\frac{1}{12}} - 1)`$

An annuity rate based on this interest rate is calculated in C5 using
the formula:

$`annuity = \ \frac{{1 - (1 + i)}^{- Mort\_ term}}{i^{(12)}}`$

# 

The accumulated deposit is calculated in rows 9 and 10 for a period of
24 months. Row 9 sets out the months over the initial savings period
from the first month to the last month. The initial deposit accumulation
amount is set at the monthly payment for the beginning of month 1 in
cell C10, which is flagged in yellow and shouldn’t be copied across. For
subsequent months (2 to 24) in cells D10 to Z10, the deposit
accumulation is calculated as:

Deposit acc. at previous month \* (1 + $`\frac{i^{(12)}}{12}`$) +
monthly payment

The total deposit accumulated at the start of the mortgage phase is then
calculated in cell AA10. This is equal to the deposit accumulation
amount at the beginning at the previous month multiplied by
$`\left( 1 + \frac{i^{(12)}}{12} \right)`$.

An automatic check is included in cells AA3 and AA4. AA3 calculates an
estimated total deposit (assuming even repayments over the period) using
the following formula:

Estimated total deposit = Monthly deposit \* 12 \* Deposit Term \*
(1+i)<sup>(Deposit term/2)</sup>

The automatic check passes if the difference between the estimated total
deposit and the total deposit calculated in AA10 is less than 1%.

The mortgage amount required is then calculated in cell AC10 as the
expected house price less the total deposit. The monthly mortgage
repayment is then calculated in cell AE10 as the mortgage amount divided
by the annuity rate (C5) divided by 12.

The total monthly repayments over the term of the mortgage are
calculated in cell AE3 by multiplying the monthly payment by 12 times
the term of the mortgage product.

**Reasonableness check:** A mortgage of c\$175,000 is to be repaid in 25
years. Allowing for the 5%pa interest over the mortgage term and
assuming even repayments over the period we have 175,000 \* (1.05)^12.5
= \$322,000 (vs \$303,069).

# **Interest rate projection**

*This worksheet projects the variable interest rates (annualised and
convertible monthly)*

Each row of 24 random numbers is used for one simulation. Therefore, we
have produced 200 simulations. Column A indicates the simulation number.

**Annual variable interest rate**

For each simulation, columns B to Z calculate the projected annual
variable interest rate on a monthly basis. For each simulation, column B
is set equal to the initial interest rate provided by the Bank. For each
subsequent month, the annual interest rate is equal to:

Interest rate from previous month + the monthly movement for that month

The monthly increase for that month is calculated using a vlookup based
on the corresponding random number in the “Rawdata” worksheet and the
interest rate movements array in the “Parameters” worksheet. For the
vlookup, the last parameter is set at TRUE so that the closest match in
ascending order is found.

In rows 3 and 4, an automatic check is included. Row 3 calculates the
average annual interest rate for that month of projection and row 4
checks that this is no greater than a reasonable tolerance level (0.1%)
of the initial interest rate.

In columns AB to AZ, the annual interest rates are converted to interest
rates convertible monthly for each simulation (using the same formula as
described above).

# **Variable rate projection**

*This worksheet is used to calculate the expected accumulated deposit
under each simulation for the variable interest rate and calculate the
resulting monthly mortgage payment to compare against the fixed interest
rate mortgage payment.*

In columns B to Z, the customer’s deposit is projected.

The initial deposit accumulation amount is set at the monthly payment
for the beginning of month 1 in column B. For subsequent months (2 to
24) in columns C to Y, the deposit accumulation is calculated as:

Deposit acc. at previous month \* (1 + $`\frac{i^{(12)}}{12}`$) +
monthly payment

where $`i^{(12)}`$ is taken from the variable interest rate convertible
monthly projection for that month for that simulation.

The total deposit accumulated at the start of the mortgage phase is then
calculated in column Z. This is equal to the deposit accumulation amount
at the beginning at the previous month multiplied by
$`\left( 1 + \frac{i^{(12)}}{12} \right)`$ for the last month for that
simulation.

Columns AB to AE then calculate the annuity rate for that simulation.
For each simulation, column AB shows the annual interest rate for month
25 pulled through from the “Interest rate projection” worksheet. Column
AC shows the interest rate convertible monthly for month 25 also pulled
from the “Interest rate projection” worksheet. A check is included in
column AD to ensure that these rates are consistent. The annuity rate
for that simulation is then calculated using the formula:

``` math
annuity = \ \frac{{1 - (1 + i)}^{- Mort\_ term}}{i^{(12)}}
```

Where *i* is the annual interest rate in month 25 for that simulation
and $`i^{(12)}\`$is the variable interest rate convertible monthly in
month 25 for that simulation.

The monthly variable rate mortgage repayment is then calculated in
columns AG to AI. AG shows the deposit with interest taken from column
Z. The mortgage amount is then calculated in column AH as the expected
house price less the deposit with interest. The monthly payment is then
calculated in column AI by dividing the mortgage amount by the annuity
rate for each simulation and dividing this amount by 12.

**Reasonableness check**

The minimum mortgage repayment amount is 762 while the maximum is 1,133
and the average is 965. These amounts seem reasonable given the
repayment amount under the fixed rate option was 1,010.

Column AK calculates the total repayments under the fixed rate option
less the total repayments under the variable interest rate option. This
is calculated for each simulation by subtracting:

the monthly variable payment in column AI multiplied by the product term
and 12

*less*

the monthly payment in the “Fixed rate projection” worksheet multiplied
by the product term and 12.

Summary statistics of these differences are then included in cells AN7
to AN9, in particular the minimum, maximum and average – all calculated
using the standard excel functions.

The probability that the total mortgage repayments under the fixed rate
option will be less than the total mortgage repayments under the
variable rate option is calculated in cell AN11 by:

- Using the COUNTIF function to calculate the number of entries in
  column AK which are less than zero;

- Dividing this number by the total number of entries in column AK i.e.
  the total number of simulations.

**Scenario 2 “Alternative Product” - Fixed rate projection Alt**

*This worksheet recalculates the monthly mortgage payment under the
fixed rate option based on the revised mortgage terms.*

This is a copy of the “Fixed rate projection” worksheet but the
projection of the deposit in the savings account is completed for 12
months only. Column O therefore includes the deposit available. This is
then used to calculate the monthly payment as per the original
worksheet.

**Reasonableness checks**

The deposit available is broadly similar to that under the original
scenario. This is reasonable because while the period over which the
deposit is saved has halved, the monthly deposit savings have doubled.

**\**

# **Scenario 2 “Alternative Product” - Variable rate projection Alt**

*This worksheet is used to calculate the expected accumulated deposit
under each simulation for the variable interest rate using the shorter
saving term and calculates the resulting monthly mortgage payment for
the shorter period to compare against the fixed interest rate mortgage
payment.*

This is a copy of the “Variable rate projection” worksheet but the
projection of the deposit is completed for only 12 months. The variable
interest rates for the first 12 months are therefore only required in
columns B to M. The accumulated deposit is then shown in column N.

The annual interest rate for the mortgage annuity is then taken from
month 13 (column N) of the “Interest rate projection” worksheet and the
monthly interest rate is obtained from column AN of the same worksheet.
These rates are shown in columns P and Q of the “Variable projection
Alt” worksheet.

To compare the total repayments under the fixed option with those under
the variable option, the difference of the monthly payment from the
“Fixed rate projection Alt” worksheet and the monthly payment for each
simulation is calculated and multiplied by the fixed mortgage period
under this alternative option (i.e. 5 years) multiplied by 12. This
calculation is included in column Y. Summary statistics (cells AA7 to
AB11) are produced as per the “Variable projection” worksheet.

**Reasonableness checks**

The summary statistics are significantly lower as the term of the
alternative scenario is only 6 years in total compared to 27 years in
the original scenario.

The probability that the total repayments under the fixed interest
option are lower than the repayments under the variable interest option
has reduced due to the shorter period over which interest rates have
been projected.

**END OF AUDIT TRAIL**



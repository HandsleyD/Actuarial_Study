---
normalized_id: cp2-2024-april-question-paper-cp2-1-audit-trail
exam_code: CP2
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr24/CP2-1_Audit trail.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2024-april-question-paper-cp2-1-audit-trail

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

April 2024

AUDIT TRAIL

Subject CP2 ‑ Modelling Practice

Core Practices

Paper One

>  Institute and Faculty of Actuaries

Analysis of share option profits for Banking Inc

**Purpose**

Banking Inc. is planning to offer employees a series of tranches of
share options throughout 2025 which will give them an option to purchase
shares in Banking Inc at a date in the future.

Banking Inc, has requested we analyse the profits and costs to employees
of exercising the planned share options. In particular, Banking Inc. are
interested in the impact of varying the exercise date of the options
from either 1 January 2028 or 1 January 2031.

In particular, the model:

- Uses data from a uniform distribution to create 1,000 sets of six
  values from the standard Normal distribution.

- Performs checks on the Normal distribution simulated data to check
  that it does indeed come from a Normal distribution

- Creates 1,000 simulations of Banking Inc’s share price for the
  required period and charts the range of these share prices.

- Calculates the notional profit, cost and profit margin percentage of
  exercising the share options at both potential exercise dates.

- Illustrates other key statistics and charts the expected distribution
  of profits between the 2 potential exercise dates & the 2 different
  employee types.

**Data**

The Chief Financial Officer (CFO) of Banking Inc. has provided us with
6,000 random numbers from a uniform distribution. This data is shown in
the **Raw Data** sheet. The CFO has also provided a model to simulate
the future movements in Banking Inc’s share price S(t).

Additionally, the HR department has provided the following schedule of
share options:

| **Option Tranche Details** | **Exercise Price per share (\$)** | **Number of shares offered per employee** |
|----|:--:|:--:|
| Senior Managers Tranche 1 | 70 | 100 |
| Senior Managers Tranche 2 | 80 | 100 |
| Senior Managers Tranche 3 | 90 | 100 |

| **Option Tranche Details** | **Exercise Price per share (\$)** | **Number of shares offered per employee** |
|----|:--:|:--:|
| Associates Tranche 1 | 90 | 100 |
| Associates Tranche 2 | 100 | 100 |

The HR department have also advised the following:

- There will be no cost to employees for receiving or holding the share
  options, but they will have to pay the exercise price for the shares
  if they exercise the option ‑ this will be the only cost to be borne
  by them.

- The exercise date will be either 1 January 2028 or 1 January 2031.

- Employees should be assumed to exercise the options if there is a
  profit to them to do so based on share price ‑ exercise price, with a
  minimum of \$0.

- The Banking Inc. share price is expected to be \$100 as at 31 December
  2024.

Relevant parameters are entered in the **Parameters** sheet.

**Z(t)**

1,000 simulations of six standard normal values (i.e. 6,000 simulations)
are created in cells A4:G1003 using the excel NORMINV function with
probability set to use the relevant U(0,1) random data from the Raw data
tab, mean = 0 and standard deviation = 1.

**Data Checks**

The following checks were performed on the 6,000 items of Z(t) standard
normal data referencing the data in Z(t) sheet:

- Minimum, maximum, mean, standard deviation and count of the total set
  of data in cells D5:D9.

- Comparisons of the above sample data to the expected values (in cells
  E5:E9) with a tolerance of 0 for minimum, maximum and count and 1% for
  mean and standard deviation. An auto check in cells G5:G9 shows if the
  data is “OK” or “outside tolerance”.

- A chi-square test is constructed in cells C15:H45 with results below.

<!-- -->

- The actual count of the standard normal data in Z(t) in brackets of
  size 0.5 from -5 to +5 is constructed in column G.

- The expected count of 6,000 values from the standard normal
  distribution in each bracket is calculated in column F by using the
  NORM.DIST function with lower bound of the bracket as the probability
  input and mean 0, standard deviation 1 to calculate the cumulative
  normal distribution deducted from the same calculation using the upper
  bound of the bracket.

- Column H calculates (Actual ‑ Expected)^2/ Expected for each bracket
  and H38 sums these to calculate the chi square test statistic.

- The chi square test statistic is less than the chi square value with
  95% probability (calculated using degrees of freedom of count of
  brackets less one = 19) and so we accept that the data is from a
  Standard Normal distribution with 95% probability.

<!-- -->

- To the right of the data checks a chart of the count of actual (as a
  bar chart) and expected (as a line chart) number of values in each
  bracket is created to show the goodness of fit of the data to the
  Standard Normal distribution.

It appears the uniform distribution random numbers were fit for the
purpose our projections. We go on to use the Z(t) data created in the
following calculations.

**Assumptions**

- The share price remains at \$100 per share until 1 January 2025.

- Employees have sufficient funds at the exercise date to exercise
  options.

- Employees will exercise all options in profit (in the money) and not
  exercise profits not in profit (out of the money).

- The log normal model (and its parameters) for S(t) stock price
  projection is appropriate.

- The offer of options meets all relevant employment and investment
  regulations.

- Employees are assumed to hold the newly purchased stock indefinitely
  so capital gains tax is not considered.

- There are no costs (for example transaction costs) associated with the
  exercise of the options.

- The expenses of conducting the offering and any ongoing administration
  type expenses will be borne by the Company and are not considered as
  part of the simulations.

- There are no conflicts of interest for the HR manager, CFO and
  ourselves if they/we are to be offered the options.

- No other exercise dates or share option offer schedules are to be
  considered.

- There will be sufficient shares available for purchase for all
  employees who wish to exercise their share options.

**S(t) modelling**

This sheet carries out 1,000 six year projections of the share price,
using the following model provided by the CFO and then illustrates the
distribution in share prices after three years and six years.

``` math
S_{(t)} = S_{(t - 1)}*\ \exp^{\lbrack\mu - \frac{1}{2}\sigma^{2} + \sigma Z_{(t)}\rbrack}
```

Where $`\mu = 0.01\`$and $`\sigma = 0.05\`$

And where $`Z_{(t)} =`$ a random number from the Normal (0,1)
distribution

Cells B6:H6 show the time in years from 1 January 2025, with t=3
representing the 1 January 2028 exercise date and t=6 representing the 1
January 2031 exercise date.

Column B shows the given share price of \$100 assumed at t=0.

Columns C to H then show six projections of the share price using the
iterative formula above, picking up the prior year S<sub>(t-1)</sub> and
picking up Z<sub>(t)</sub> from the same simulation and time on the
Z<sub>(t)</sub> sheet.

Cells J12:M34 contains a table to create a chart to show the range of
the share price by calculating the count of the number of simulations
with S<sub>(3)</sub> and S<sub>(6)</sub> in share price brackets of size
\$5 from the minimum \$65-\$70 to the maximum \$165 - \$170.

The chart is created below the table showing lines for the share price
distribution at both S<sub>(3)</sub> and S<sub>(6).</sub>

*Reasonableness checks:*

The range of expected share prices from \$77.17 to \$137.76 at
S<sub>(3)</sub> and \$65.77 to \$167.83 at S<sub>(6)</sub> appears to be
an acceptable range.

The range is wider at S<sub>(6)</sub> which is reasonable because the
share price has had more time to diverge from the starting share price
of \$100.

The mean share prices of \$103.18 at S<sub>(3)</sub> and \$106.54 at
S<sub>(6)</sub> also appears conceivable ‑ with some share price
increase expected.

**Option Strategy analysis**

*\*
This sheet contains two main tables ‑ one for Senior Manager share
option profit simulation and one for Associate share option profit
simulation.

**Senior Managers**

Column B shows the 1000 simulation numbers.

<u>1 January 2028 exercise date</u>

Column C shows the share price for each simulation at the 1 January 2028
exercise date choice S<sub>(3)</sub>.

Columns D:F show the notional profit for each simulation for each of the
three Senior Manager share price tranches at exercise price 1 January
2028. This is calculated as:

Max (0, Share price S<sub>(3)</sub> for simulation from column C less
exercise price for tranche from the ‘parameter’ sheet) \* number of
shares in tranche.

Column G shows the total notional profit at 1 January 2028 for Senior
Managers for each simulation calculated as the sum of profit for each
tranche (columns D to F).

Column H shows the total cost of exercising the Senior Managers options
at 1 January 2028 which is the sum for each of the three tranches (if a
tranche has a positive profit) of the exercise price of the tranche x
number of shares offered in tranche.

Column I calculates the profit margin at 1 January 2028 exercise date
for each simulation as the sum of profit for simulation (column G)
divided by the cost of exercising options (Column H) and shown as a
percentage.

<u>1 January 2031 exercise date</u>

Columns J:P show the same calculations as columns C:I for Senior
Managers but at exercise date 1 January 2031. The only change is share
price in Column J is at the 1 January 2031 exercise date
S<sub>(6)</sub>.

**Associates**

Column R shows the 1,000 simulation numbers.

Columns S:T show the notional profit for each simulation for each of the
two Associate share price tranches at exercise price 1 January 2028.
This is calculated as:

Max (0, Share price S<sub>(3)</sub> from column C, less exercise price
for tranche from the ‘parameter’ sheet) \* number of shares in tranche.

Column U shows the total notional profit at 1 January 2028 for
Associates for each simulation calculated as the sum of profit for each
tranche (columns S:T).

Column V shows the total cost of exercising the Associate options at 1
January 2028 which is the sum for both tranches (if a tranche has a
positive profit) of the exercise price of the tranche x number of shares
offered in tranche.

Column W calculates the profit margin at 1 January 2028 exercise date
for each simulation as the sum of profit for simulation (column U)
divided by the cost of exercising options (Column V) and shown as a
percentage.

Columns X:AB show the same calculations as columns S:W for Associates
but at exercise date 1 January 2031. The only change is that the profit
calculations in columns X:Y pick up the share price at the 1 January
2031 exercise date S<sub>(6)</sub> from column J.

**Summary statistics**

Summary statistics are calculated in D3:G9 and include the following for
both Senior Managers and Associates at both 1 January 2028 and 1 January
2031 exercise dates:

Count of simulations, minimum profit, mean profit, maximum profit,
average cost of exercising the options and average profit margin.

*Reasonableness checks:*

The count for all simulations is 1,000 as expected.

The mean expected notional profit for both Senior Managers and
Associates is higher at 1 January 2031 exercise date than at 1 January
2028 which is reasonable as the mean share price was higher at 1 January
2031 and the higher the share price the higher the notional profit on
the share options.

The range between the minimum and maximum expected notional profit for
both Senior Managers and Associates is larger at 1 January 2031 which is
reasonable as the share price has more time (twice as long as at 1
January 2028) to diverge from the start value of \$100. They also have
access to more tranches and hence the spread of the profit will be
larger.

The expected average cost at 1 January 2028 for Senior Managers is
higher than the equivalent at 1 January 2031. This appears to be because
the exercise price which affects the cost is fixed so does not increase
the cost over time, but less of the options are expected to be in the
profit at 1 January 2031 due to increased variability in the share price
at 1 January 2031 compared to 1 January 2028.The same pattern is not
seen for Associates possibly because the exercise prices are higher for
Associates and so the above effect is cancelled out by more options
becoming in profit at 1 January 2031 that were not at 1 January 2028.

The expected notional profits for Senior Managers are higher than for
Associates, this is reasonable because the exercise prices for Senior
Manager share option tranches are lower than the Associate share option
tranches. This means that the Senior Manager exercise prices are more
likely to be below the share price at exercise date and therefore give a
higher profit. The Senior Managers also have a total of 300 share
options compared to 200 for Associate share options.

The expected average cost of exercising options is higher for Senior
Managers. Partly because they are to be issued more share options and
partly because their share options exercise prices were lower and
therefore more likely to be in notional profit and exercised ‑ causing
the cost. However, this is slightly offset by the fact that the cost
(exercise price) of the senior managers share options are lower on
average than the Associate’s.

1 January 2031 profit margins are higher than 1 January 2028 profit
margins. This is reasonable because the exercise price is fixed but the
share price is expected to increase over time (as the mean is higher at
1 January 2031).

Senior Manager profit margins are higher than those for Associates, this
is reasonable because the exercise prices for Senior Managers are lower,
while the share prices in each simulation are the same.

**Charts**

This worksheet produces a line chart to show the distribution of the
profit projections.

To enable this a table is created in B5:G59 showing the count of the
simulations falling into total profit bands, in \$500 intervals, at both
1 January 2028 and 1 January 2031 exercise dates and for both Senior
Managers and Associates.

*Reasonableness checks:*

Associate profits are concentrated at the lower ranges of profit, this
makes sense as their exercise prices are higher and they have fewer
options. They peak around the \$1,000 level which is the expected profit
at the current share price of \$100 however the upper tail does extend
to the \$8,500 -\$9,000 level which can be explained by the upper share
price simulations. As a check ‑ the highest share price at 1 January
2028 is \$137.75 which would imply an Associate profit of \$8,551.

Both the 1 January 2031 lines show more simulations in mid-range profit
bands, which is reasonable as the share price has had time to increase
more by then.

Senior Manager’s profits peak in the mid-range profits between \$5,000
to \$7,500. Tailing off at lower and higher profits. This is reasonable
as the exercise prices are lower than the current share price and are
expected to give a \$6,000 profit at the current share price of \$100.

At Exercise date 1 January 2028 Senior Managers profits are more
concentrated around \$6,000 (with narrower tails), whereas by 1 January
2031 they are less concentrated and have fatter tails. This is
reasonable as the share price has had more time to diverge from \$100
and from the \$6,000 profit at that level.

**END OF AUDIT TRAIL**



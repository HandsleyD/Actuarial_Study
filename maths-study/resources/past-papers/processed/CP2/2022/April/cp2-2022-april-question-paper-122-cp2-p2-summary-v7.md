---
normalized_id: cp2-2022-april-question-paper-122-cp2-p2-summary-v7
exam_code: CP2
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr22/122_CP2_P2_Summary_v7.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2022-april-question-paper-122-cp2-p2-summary-v7

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

April 2022

## Subject CP2 – Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**
>
> ** Institute and Faculty of Actuaries**

**Pizza delivery business strategy project**

**Objective**

The purpose of this project is to assess the profitability of two
business strategies, the existing ‘budget’ strategy and an alternative
‘luxury’ strategy, for Mr Rolfe the owner of the pizza delivery business
‘Fresh Pizzas’.

To assess the profitability of the strategies, 100 simulations of ten
years of Gross Domestic Product (GDP) are performed for each strategy.
The number of pizzas sold is modelled with respect to GDP and finally
costs and revenues are modelled to arrive at 100 simulations of ten-year
profit. Statistics relating to the total ten-year profits over the 100
simulations and charts are created to illustrate the distribution of
profits on the various strategies.

An additional strategy, offering side orders for sale with pizza
deliveries, is modelled for each strategy. The number of side orders
sold varies with GDP and ‘budget’ or ‘luxury’ strategies. Additional
graphs are created to show the impact of offering side orders.

**Data**

The Statistics Department of Business Planning Ltd has provided 1,100
random numbers from a standard uniform distribution *U*(0,1). The
following checks were done to confirm that the data is as expected.

The minimum, maximum, mean and standard deviation of the random numbers
were calculated and compared to what would be expected of a standard
uniform distribution, namely a minimum of 0, maximum of 1, mean of 0.5
and a standard deviation of 0.289. The actual figures were within 1% of
the expected results therefore the data was accepted as being from a
standard uniform distribution.

Also, a Chi-squared test was performed. The number of data entries in
each band of 0.1 from 0 to 1 was counted and compared to that expected
with a Chi-squared test. The resultant *p*-value was 96% which supports
the conclusion at the 95% confidence level that the random numbers are
from a standard uniform distribution.

In addition, Mr Rolfe provided details of:

- the cost per pizza, delivery costs, overheads, advertising costs,
  development costs and selling prices of pizzas and side orders on each
  strategy.

- The required start date and duration of the modelling.

- the relationship between the number of pizzas and side orders sold on
  each strategy and GDP.

The data provided seems reasonable, for example the selling price and
variable costs of luxury pizzas are higher than for budget pizzas as you
would expect higher quality ingredients and better delivery for luxury
pizzas. There is nothing to suggest the relationship of number of pizzas
sold to GDP is unreasonable.

**Assumptions**

The following assumptions were made in the model:

- The model provided by the statistics department for the relationship
  between pizza sales and GDP is suitable to model the demand for pizzas
  over the next ten years (i.e. pizza sales are related to GDP and the
  parameters are appropriate).

- The costs and selling prices of pizzas provided by Mr Rolfe are
  suitable for the next ten years and no allowance for inflation is
  needed.

- The time series GDP projection model created by Business Planning Ltd
  gives a fair representation of the ten-year expected distribution of
  GDP p.a..

- There are no other costs associated with the change to the luxury
  strategy.

- No allowance is made for any investment returns on profit.

- **No factors other than GDP and strategy type influence the number of
  pizzas and sides sold, for example local competition, changes to
  healthy eating is not considered.**

- **‘Fresh Pizzas’ has sufficient funds to invest in the development
  costs for either the ‘luxury’ strategy or to introduce side orders.**

<!-- -->

- **That 100 simulations are sufficient to produce statistically
  reliable results.**

- **The impact of tax on scenarios with positive profit is not
  included.**

- **The values of the GDP index are only dependent on the previous
  year’s GDP index value.**

- **Pizzas and side orders are only sold in the ratio of one pizza plus
  one side or one pizza plus no sides, no other combinations are
  considered.**

- **Fresh Pizza is open for all 365 days throughout the year and does
  not close for any holidays.**

- **No other products, for example drinks are considered.**

- **No special offers are considered.**

**Methodology**

***GDP simulation***

First, we model 100 simulations of ten years of GDP index values from 1
January 2023, starting at an index level of 100 at 1 January 2022. The
following time series model is used and the random numbers from the
uniform distribution are used to calculate eleven years of the random
error z(i,t) values, which are used to construct ten years of log GDP
index simulations:

Log (GDP index (i,t)) = log (1.03) + log (GDP index (i, t-1)) + z(i,t)
+0.45 x z(i, t-1)

- where z(i,t) = 0.2 x (0.5 – random number (i,t))

- where i = 1 to 100

- where t = 1 to 10

- where GDP index (i,0) = 100

The exponential was applied to the projections to arrive at the GDP
index. The projected GDP index for each year is then subtracted from the
2022 GDP index value.

Summary statistics are calculated on the final 100 projected values for
the GDP index for each of the eleven years from 2022 to 2032. These are
the median, minimum, maximum, 25<sup>th</sup> centile, 75<sup>th</sup>
centile, standard deviation and expected value of the GDP index.

***Pizza sales per day***

Pizza sales per day are calculated for 100 simulations for t=1 to 10 for
both strategies as:

pizza sales per day (*i,t*) = A + B x (GDP index (*i,t*) – GDP index
(i,0))

Where for ‘budget’ strategy A=110, B=0.15 and for ‘luxury’ strategy
A=52, B=0.55

GDP index (*i,0*) = 100

***Cashflows and profit projections with no side orders***

Annual revenue is calculated by multiplying the pizza sales per day (for
each simulation and year) by 365 days and the selling price per pizza.

Annual costs are calculated by multiplying the pizza sales per day (for
each simulation and year) by 365 days and the variable costs per pizza
including delivery cost, plus annual overhead costs for strategy, plus
annual advertising costs.

Annual costs are deducted from annual revenue to calculate annual profit
for each strategy for each simulation over 10 years.

The sum of ten years total profit is calculated for each of 100
simulations and the minimum,

average, median, maximum and standard deviation of ten-year total
profits is calculated.

The same calculations are completed for both the budget and luxury
pizzas. For the luxury pizzas, there is an additional development cost
included for year 1.

***Side order take up percentages***

The percentage of pizza orders that would also include a side order on
Mr Rolfe’s additional side order strategy are calculated using the
following formula:

percentage of pizzas sold with one side (i,t) = C + D x (GDP index (i,t)
– GDP index (i,0))

GDP index (i,0) = 100

Where for ‘budget’ strategy C=50%, D=0.13% and for ‘luxury’ strategy
C=85%, D=0.03%

***Cashflows and profit projections with side orders***

For each strategy the additional annual costs from side orders are
calculated for each year and simulation by multiplying side order take
up percentages explained above with the number of pizza sold in the same
year and simulation and the cost per side order, plus the additional one
off side order development cost for time t=1 only.

For each strategy the additional annual revenue from side orders are
calculated for each year and simulation by multiplying the side order
take up percentages explained above by the number of pizzas sold in the
same time and simulation and the selling price per side order.

For each strategy the total annual profit with side orders for each
simulation is calculated as:

Profit without sides + additional revenue from side orders – additional
costs from side orders

The sum of total ten-year profits with side orders per simulation and
the same statistics as for the cashflow and profit projection with no
sides are calculated.

**Results**

***Distribution of GDP simulation***

The progression of the distribution of the quartiles of the GDP index
over the next ten years is shown in the table below:

<img src="media/image1.png" style="width:6.73472in;height:3.25217in" />

It can be seen that the median GDP index projection is smoothly
increasing. The median projection should follow a similar pattern to the
projection of the expected value of the GDP index but with random
variation. And the projection of expected value will increase by 3% per
annum.

The expected value based on the formula for GDP index progression would
be expected to be 100\*1.03^10 = 134.4 due to the factor of 1.03 applied
to the previous year’s GDP index in the formula. The value of the median
projection after ten years is 141.0 and the average value of the
projected index after ten years is 138.9. This seems reasonable and
would be expected to be closer to 134.4 if a larger number of
simulations were carried out.

The middle two quartiles follow a similar slope above and below the mean
as expected. The 25<sup>th</sup> centile remains mainly above the
starting level of the index (100). This shows that the majority of GDP
progressions do not project a sustained fall below the 2022 index
level.50% of projections result in an index level of between 111 and 163
by 2032.

The minimum and maximum lines show the upper and lower bounds of
projected GDP. This indicates that the distribution has relatively long
tails with most projections concentrated around the expected values.

The general pattern seems reasonable for the projection of GDP in a
country as it can be influenced by a number of unknown influences both
positively and negatively (for example war, terrorism, trade agreements,
politics, climate change, health challenges and natural disasters) but
is usually expected to follow a general small upward trend.

**Total ten-year profit statistics**

The chart below shows key statistics from the ten-year total profit with
no side orders.

<table style="width:63%;">
<colgroup>
<col style="width: 21%" />
<col style="width: 19%" />
<col style="width: 21%" />
</colgroup>
<thead>
<tr>
<th> </th>
<th colspan="2"><strong>Ten-year total profit no side orders
($)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><strong>Budget strategy</strong></td>
<td style="text-align: right;"><strong>Luxury strategy</strong></td>
</tr>
<tr>
<td>Average profit</td>
<td>624,629</td>
<td style="text-align: right;">660,124</td>
</tr>
<tr>
<td>Standard deviation</td>
<td>45,838</td>
<td style="text-align: right;">315,504</td>
</tr>
<tr>
<td>Minimum profit</td>
<td>521,963</td>
<td style="text-align: right;">(46,530)</td>
</tr>
<tr>
<td>Maximum profit</td>
<td>757,123</td>
<td style="text-align: right;">1,572,084</td>
</tr>
</tbody>
</table>

The average profit on both strategies is quite close with the luxury
strategy average profit being slightly higher.

It can be seen that on the budget strategy all outcomes, including the
minimum, are positive and they are distributed closely around the mean
with a range of \$521,963 to \$757,123. The standard deviation of
\$45,838 is relatively low. This shows that the number of budget pizzas
sold is not very sensitive to the level of GDP.

The chart shows that the luxury strategy has a much larger range of
profits, with the minimum being a small loss of \$46,530 and the maximum
being approximately twice as high as the budget scenario maximum profit
at \$1,572,084. The standard deviation of the luxury strategy is over
six times higher than the budget strategy standard deviation. This shows
that the number of luxury pizzas sold is more sensitive to the level of
GDP than the budget pizzas.

This could be explained by the theory that many customers are only
likely to buy luxury pizzas when the economy is strong and their
disposable income high, with a smaller number of customers being able to
afford luxury pizzas whatever the economic situation. Whereas there are
likely to be a broader customer base buying budget pizzas and customers
who can no longer afford luxury pizzas may switch to budget pizzas when
GDP falls.

The chart below shows key statistics from the ten-year total profit with
side orders.

<img src="media/image2.png" style="width:5.48546in;height:2.70833in" />

<table style="width:67%;">
<colgroup>
<col style="width: 23%" />
<col style="width: 20%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr>
<th> </th>
<th colspan="2"><strong>Ten-year total profit with side orders
($)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td><strong>Budget strategy</strong></td>
<td style="text-align: center;"><strong>Luxury strategy</strong></td>
</tr>
<tr>
<td>Average profit</td>
<td style="text-align: center;">921,377</td>
<td style="text-align: center;">1,387,273 1,387,273456,</td>
</tr>
<tr>
<td>Standard deviation</td>
<td style="text-align: center;">70,297</td>
<td style="text-align: center;">456,726 456,726370</td>
</tr>
<tr>
<td>Minimum profit</td>
<td style="text-align: center;">766,517</td>
<td style="text-align: center;">370,196 370,196</td>
</tr>
<tr>
<td>Maximum profit</td>
<td style="text-align: center;">1,128,004</td>
<td style="text-align: center;">2,715,268 2,715,268</td>
</tr>
</tbody>
</table>

The chart above shows that the average profit increases for both
strategies when side orders are included. This could be explained by the
fact that the fixed overheads, advertising and delivery costs and
one-off luxury strategy development costs are not increased by the
addition of side orders. As the side orders’ selling price is greater
than the side order variable costs, if the expected side order sales
cover the relatively small one-off side order development costs, they
will increase the overall profit.

The mean ten-year profit on the luxury strategy with side orders is now
materially higher than on the budget strategy. This could be explained
because side orders are profitable and Mr Rolfe expects a higher
percentage of luxury pizzas to be sold with a side as reflected by the
85% base percentage in the luxury side order formula, compared to 50% on
the budget strategy.

The higher base percentage on luxury side orders might be explained by
the fact that customers who can afford luxury pizzas have additional
funds to purchase side orders.

The standard deviations of both strategies have increased by a similar
percentage. This is because the side orders add an additional
variability in profit with respect to the GDP. The increase to the
budget strategy standard deviation is slightly larger as the factor
parameter in the formula for sensitivity for one unit of GDP index
change is higher at 0.13 for the budget strategy.

The minimum ten-year profit on both scenarios have increased. The luxury
strategy minimum profit has increased and is now positive. Although it
is still lower than the minimum on the budget scenario it may make the
luxury strategy more attractive if it removes the possibility of making
a loss over ten years.

The maximum ten-year profit on both strategies has increased due to the
potential for extra profit from side orders.

**Ten-year annual profit progression**

The chart below shows the range of ten-year projection of annual profit
on the budget and luxury strategies with no side orders.

<img src="media/image3.png" style="width:5.46736in;height:3.38056in" />

**OR**

<img src="media/image4.emf" style="width:6.29861in;height:0.94306in" />

The luxury strategy’s profit is reduced at time 1 (2023) by the initial
one-off development costs.

The chart/table illustrates the greater variation under the luxury
strategy and the greater likelihood of the luxury strategy to generate
negative profits over ten years. This is because the overall sale of
luxury pizzas is more sensitive to the level of the GDP index than the
budget pizzas. This is reflected in the model for the number of pizzas
sold per day which has a parameter of 0.55 on the GDP index variable
compared to 0.15 for the same parameter in the budget strategy model.

The chart below shows the range of ten-year projection of annual profit
on the budget and luxury strategies with side orders.

<img src="media/image5.png" style="width:5.78056in;height:3.38681in" />

**OR**

<img src="media/image6.emf" style="width:6.29861in;height:0.94306in" />

Adding side orders to both models increases the range of profits on both
strategies.

The median annual profit on the luxury strategy with sides is
consistently above that of the budget strategy. This is because a higher
percentage of luxury strategy pizzas are expected to be sold with a
profitable side order and this percentage varies less with GDP index
fluctuations on the luxury strategy.

However, the greater variance in the luxury strategy annual profits
compared to those of the budget strategy can be seen by the wider range
of the minimum and maximum annual profit on the luxury strategy with
sides compared to that of the budget strategy with sides. The minimum
profit on the luxury with sides strategy is consistently below that of
the budget with sides strategy. This is because the overall sale of
luxury pizzas is still more sensitive to the level of the GDP index than
the budget pizzas.

In particular the minimum profit on the luxury with sides strategy is
consistently below that of the budget with sides strategy and falls
close to zero profits on the worst projected GDP index outcomes.

**Conclusions**

The budget and luxury strategies without side orders have similar mean
total profits over ten years but the luxury strategy has much larger
variability, therefore the choice between strategies depends largely on
Mr Rolfe’s attitude to risk. Mr Rolfe should consider both his attitude
to risk and the ability of the business to cope with the possibility of
losses on the luxury strategy. As the expected mean ten-year profit is
not materially higher perhaps the additional risk due to profit
variability on the luxury strategy is not worth accepting.

The mean ten-year profit increases on both strategies when side orders
are added without a material change in the variability of profits. This
suggests that adding side orders to either strategy should be
recommended.

In addition, when side orders are added into the models, the mean
ten-year total profit on the luxury strategy increases above that of the
budget strategy and suggest that the luxury strategy with side orders
should be considered as the potential strategy to pursue, as long as Mr
Rolfe is able to accept the additional variability in profit of this
strategy over the more stable budget strategy.

Mr Rolfe should be made aware that the actual future GDP index and its
interaction with the sales of either strategies pizzas and side orders
may not be in line with the models created for this analysis, which
could mean future profits are not as expected by this model.

**Next steps**

- Validate the parameters Mr Rolfe provided, for example compared to
  other luxury pizza company prices and Fresh Pizza’s previous business
  accounts and records.

- Validate that a linear model of number of pizzas sold with respect to
  GDP is appropriate.

- Validate the appropriateness of the use of the normal distribution for
  investment returns.

- Consider modelling other factors affecting the number of pizzas sold,
  for example the number of competitors in the local market to determine
  the potential impact on profits.

- Back test the time series model for GDP to check that the model fits
  the recent past GDP index, unless adjustments have been intentionally
  made to reflect forecast changes.

- Consider the effect on profit projections of modelling the possibility
  of more than one side order per pizza order at different prices, or
  offering drinks for sale.

- Consider the impact of offering discounts on more than one pizza per
  order (as long as the price offered is greater than the variable costs
  per pizza).

- Sensitivity test the profit outcomes for different overheads or
  delivery costs.

- Expand the model to allow for the option of selling both budget and
  luxury pizzas at the same time.

- Consider the potential for a change in the demand for pizzas, for
  example due a national chain entering the local market or campaigns
  for healthy eating. Carry out stress testing to establish the minimum
  level of pizzas sold for each scenario to break even on average and
  consider the likelihood of these levels of demand.

- Consider potential for changes to food business regulations and the
  associated costs, for example increased hygiene regulations or minimum
  wages for delivery drivers and include these in the profit
  simulations.

- Consider extending the model for a longer time period.

- Consider modelling on a monthly or quarterly basis to allow for
  seasonal changes in demand for pizzas and identify any potential
  periods of negative cashflow.

- Confirm that the funds to develop a luxury pizza brand or offer side
  orders are available or if alternative funding would be required.

- Discount profit projections to arrive at a net present value of
  ten-year profit to understand if the time value of money of different
  patterns of profits makes a difference.

- Allow for inflation within the model on both the costs of materials
  and the price of pizzas (potentially at different rates) to assess the
  potential impact on the profit.

- Allow for tax on scenarios with positive profit.

- Calculate the IRR of the investment into developing the luxury
  strategy and/or side order offering to check if the investment is
  worthwhile.

- Investigate the possibility of whether the country is likely to
  introduce higher taxes on non-healthy food products.

- Test the model against emerging experience, for example actual levels
  of GDP index against actual pizza sales and side orders on the chosen
  strategy to check the validity of the models and adjust them if
  necessary.

- Obtain a peer review of the work done to date.

**END OF SUMMARY**



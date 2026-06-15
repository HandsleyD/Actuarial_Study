---
normalized_id: cp2-2022-september-question-paper-222-cp2-p1-audit-trail-1
exam_code: CP2
year: 2022
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep22/222_CP2_P1_Audit trail (1).docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2022-september-question-paper-222-cp2-p1-audit-trail-1

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

> September 2022
>
> AUDIT TRAIL

Subject CP2 ‑ Modelling Practice

Core Practices

> Paper One

This is an example solution. It should be noted that this document and
the associated spreadsheet model include more detail than would
ordinarily be possible within the time allowed for the examination. They
contain a wide range of responses to parts of the marking schedule
however they should not be considered exhaustive either ‑ it would not
be necessary to produce the level of detail contained in this document
to perform well on CP2.

> Institute and Faculty of Actuaries

# **Objective**

The purpose of this model is to project the value of a notional
portfolio using four different trading techniques. The projection is
done over the calendar year of 2021, using a notional \$1,000 divided
equally between five stocks, and daily price data. The following trading
techniques are used:

- Hold ‑ stay invested in each stock for the whole year

- Profit taking ‑ assume that a price will move in an opposite direction
  for one day after moving the same way for three days

- Following trend ‑ assume that a price will continue to move in the
  same direction after moving the same way for three days

- Moving average ‑ assume that a price will revert to a long-term
  average if it moves away from this over the short term.

# **Data (Prices Sheet)**

Stock prices have been provided for five stocks (from banking,
technology, mining, energy and insurance sectors) by my manager. These
were downloaded by him from the internet. The names of the individual
stocks were not provided. The dates at which prices are provided range
from 1/3/2020 to 30/12/2021.

The original data received can be found on the Prices sheet.

**Data Checks**

The data is copied (by formula reference) into this sheet, and
statistical analysis is performed in order to verify the data. As the
names of the stocks and the source website were not provided, I could
not independently check that the prices are correct.

Columns G-K calculate a comparable index for each stock, where the price
on 1/3/2020 is taken to be 100. This is done by setting:

> Index on day t = index on day t-1 \* price on day t / price on day t-1

The index on 1/3/2020 is hard coded as 100, and highlighted to avoid
being copied down.

Columns L-P calculate the daily returns for each stock. This is

> Daily return for day t = (price for day t / price for day t-1) - 1

The return for 1/3/2020 is hard coded to zero, and highlighted.

In columns U to Z, two tables are set up with the following statistics
for each stock’s daily returns, using standard Excel functions:

Average: this varies from -0.1% to 0.2%, with Technology being the
highest, and Banking and Energy being the lowest.

Standard deviation: This ranges from 2% to 3% and is an indication of
volatility of the stock price.

Max: the highest daily return for each stock varies from 7.9% to 19.7%

Min: The lowest daily return has a similar range, from -7.9% to -17.2%

Count: The number of prices.

The upper table covers the full range of prices provided, while a second
table below covers only the year of 2021. The values in this table are
very similar to the upper one, except that the volatility (standard
deviation) is higher (ranging from 2.4% to 4%)

The data looks reasonable, in that:

- Average daily returns are very small ‑ close to zero.

- The stock with the lowest maximum and highest minimum has the lowest
  volatility

- The stock with the highest max and the lowest min has the highest
  volatility

A line graph is created from the indexed prices, to show the difference
in stock value over the full period that prices are provided. This shows
that the returns are very similar during 2020, but diverge quite notably
in 2021. The lines are more jagged in 2021, showing that the increase in
standard deviation when looking at 2021 in isolation appears reasonable.

Also, stocks with a positive average return have a final index price of
above 100, while those with a negative average return are below 100. A
check for this is done below the table, and returns “OK” or “Not OK” as
appropriate.

Another chart is found to the right: a histogram of all daily returns
has been created using the calculations in columns L to P. This shows
that the returns appear to be normally distributed, being symmetrical
around zero, and with a rough bell shape. I have done a chi-sq test
below this. Here, the PERCENTILE function is used to split the
observations into ten bands, and the COUNTIFs function used to count the
number of actual observations in each (as expected, these (bar rounding)
are equal in each band). The expected column uses the NORM.DIST function
(with the observed mean and standard deviation) to count the expected
observations in each band, using the upper bound of each band as the
probability input to the function. For rows 2 onwards, the previous
observations are deducted as this function is cumulative. Below the
table, the CHISQ.TEST function calculates the probability that the
actual observations came from the expected distribution, which is very
low. So the returns are not normally distributed. Further analysis would
be needed to determine an appropriate distribution.

Overall, the data appears reasonable. There are no notable outliers, and
the statistics are within what I would expect from stock price data.

# **Assumptions**

The following assumptions have been made:

- No transaction costs are considered.

- Where a strategy requires looking at prices prior to the current date,
  for days in early January 2021, this has been done by going back to
  December 2020 prices.

- There is no limit on the time that a short selling transaction can be
  held for.

- The return for a given day is the movement from the price of the
  previous day to the price of the given day.

- 50 day and 200 day moving averages ignore weekends and public
  holidays.

- The final day of the year is 30/12/2021.

**Parameters**

*This worksheet provides a list of all parameters to support the
calculations.*

There is only one parameter used in the model ‑ the notional starting
portfolio of \$1,000 on 1 January 2021 which each student is given and
which is divided equally among the five stocks. i.e. the notional
starting capital per stock is \$200.

**Method**

Each sheet in the model is dealt with in turn below.

**Moving Average**

This sheet calculates the 50-day and 200-day moving averages.

The first six columns reference the Prices sheet to bring in the date
and price information.

Columns G-K calculate the 50-day moving average. As this is only
required from the start of 2021, the formulas only start on row 216 ‑
this is highlighted at the top of the table. The average formula is
used, with the range including 50 rows for each column.

Columns L-P is similar, except that it calculates a 200-day moving
average, and the range for the average function is 200 rows.

**Modelling**

This sheet does the modelling of the four trading strategies.

In column A, the date is referenced from the Prices sheet, but starting
from 2 January 2021.

**Strategy A: Hold**

This strategy involves buying the stock on the first day, and then
holding it until the end of the year with no further trading taking
place.

The value for the first day is linked to the starting capital per stock
from the parameters sheet. From the second day onwards, the notional
fund value is

> Value day t = value day t-1 \* (price day t / price day t-1)

This is done for each of the five stocks.

Column G adds the five fund values together to give the total fund value
for strategy A.

Column H calculates a daily return for the total fund, by dividing the
current value by the previous value, and subtracting 1. The first day’s
return is hardcoded as 0.

**Strategy B: Profit Taking**

For the rest of the strategies, we firstly need to determine what action
to take, and then calculate the fund value. For Profit Taking, we watch
for a sustained increase or decrease in the price, and assume that the
price will reverse if it moves in the same direction for three days in a
row.

Columns J-N give the trading instruction for each stock for each day.
The logic is:

> If the stock price has increased for three days, then we should sell
> short (return ‘SELL’)
>
> If the price has decreased for three days in a row, then we should buy
> (return ‘BUY’)

The check for increasing or decreasing stock prices is done using the
AND function, and pairs of prices for the three days leading up to the
current days’ price. That is, to check for three days of increase on day
t, we check if

> Price t\> price t-1 AND price t-1 \> price t-2 AND price t-2 \> price
> t-3

And similarly for decreases in stock prices.

Columns O to S calculate the fund value for each stock, based on what
the trading instruction from columns J to N says. If it’s a BUY, then

> Value t = value t-1 \* (price t / price t-1)

If it’s a SELL transaction, then

> Value t = value t-1 \* (price t-1 / price t)

Otherwise (i.e. if it is neither a BUY or SELL), no transaction is being
made, and the fund value is set equal to the previous day’s value.

In the same way as for Strategy A, columns T and U hold the total value
for this strategy, and the daily return for the total value,
respectively.

**Strategy C: Following Trend**

For this strategy, instead of assuming a reversal after three days of
similar movement, we assume that the trend will continue for a fourth
day.

Columns W to AA determine the trading instructions. The formula here is
almost identical to that for Profit Taking, except that the BUY and SELL
results are switched. That is, if the price increases for three days,
it’s a BUY, and if it falls for three days, it’s a SELL.

Columns AB to AF then implement the trading instructions ‑ the formulas
here are identical to the Profit Taking ones.

As a reasonableness check, the outcome for each stock should be opposite
and roughly equal to that of Profit Taking. That is, if Profit Taking
ends up with a fund value above 200 for a stock, this result should be
below 200, as exactly the opposite transaction is taking place on the
same day.

Again, Columns AG and AH hold total value and daily return for this
strategy.

**Strategy D: Moving average**

Here, the strategy relies on a reversion to mean ‑ so if the short term
(50-day) average price increases above a longer-term trend (200-day
average price), it is assumed the price will fall, and vice versa.

Columns AJ to AN determine the trading instruction. The moving averages
on the Moving Average sheet are referred to: if the 50-day value is
higher than the 200 day value, this indicates a short term
over-valuation, and we pick a SELL transaction as we expect the price to
drop. If the reverse is true (50-day value is less than or equal to the
200-day value), then we perform a BUY transaction, as we expect the
price to increase.

Columns AO to AS implement the trading instruction in the same way as
before, except that here there is no option of not being invested in the
market. There’s always either a BUY or a SELL transaction implemented.

Columns AT and AU give total value and daily return, respectively, on
the total portfolio calculated as before.

**Summary Sheet**

This sheet collects the results in order to produce the required charts.

The first table has the value of each stock for each strategy at the end
of the year.

This is generated by linking to the last row of each strategy section on
the Modelling tab.

This table is charted in a stacked bar chart to the right ‑ the columns
give the total value at the end of the year, broken down by each stock.
The initial investment is graphed as a line, so it’s easy to see which
strategies made money over the year (only A and B).

Another bar chart is produced which shows the value of each strategy for
each stock. This allows you to see which strategy produced the highest
value for the different stocks. Interestingly, strategy A (Technology
and Mining), strategy B (Banking & Energy) and Strategy D (insurance)
all perform best in at least one stock. Only Strategy C is never the
best.

Under this is a calculation of the average and standard deviation of the
daily returns for each strategy. This is done using AVERAGE and STDEV.S
functions on the last column on the Modelling sheet calculations for
each strategy.

Not only does strategy B give the best return, it also has the lowest
standard deviation (which is a measure of risk). Apart from a small
deficit for insurance, it provides a small profit in all stocks.

Reasonableness checks:

The Technology price rose sharply at the beginning of the year, and then
continued to rise thereafter. This explains why Strategy D performed so
poorly: the expectation after that initial rise was that it would fall,
which it didn’t.

Strategy B performed best for the two stocks that performed the worst
i.e. Banking and Energy. This is reasonable because if the predominant
movement is down, with occasional up movements in between, this strategy
is most likely to collect all those up movements.

The final fund values for each strategy are within reasonable bounds.
They range from +14% to -16%, which is within the upper and lower limits
for the annual returns on the individual stocks.

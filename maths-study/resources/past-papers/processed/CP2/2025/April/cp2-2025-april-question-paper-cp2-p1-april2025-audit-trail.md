---
normalized_id: cp2-2025-april-question-paper-cp2-p1-april2025-audit-trail
exam_code: CP2
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr25/CP2_P1_April2025_Audit trail.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2025-april-question-paper-cp2-p1-april2025-audit-trail

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

April 2025

AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

Paper One

**Budget review of the Clean Transport (CT) program**

# **Purpose**

The government of our country is concerned about the increasing
pollution levels from petrol cars. Therefore, it is going to launch an
Clean Transport (CT) program wherein it will offer a subsidy on the
purchase price of electric cars and build charging stations across the
country for the recharge of the electric car batteries.

We have been asked to produce a model that will project the future
cashflows of the CT program over the next 20 years, and assess whether
the budget of the government (\$3 billion as of 1 January 2026) will be
sufficient to implement this program. In particular, the model:

- Performs checks on the sales data provided and makes corrections to
  it.

- Projects the car sales and the total number of cars at end of each
  year, for both petrol and electric cars (post-CT program launch).

- Base scenario ‑ Projects the cashflows of the CT program for 20 years
  and compares the resulting Net Present Value (NPV) to the government
  budget at 1 January 2026.

- Additional scenario – To meet some of the costs of the CT program,
  models the income from the tax charged on petrol price and then
  repeats the analysis done in the base scenario.

- Plots a chart showing the proportion of the total budget split into
  the component costs under the additional scenario.

# **Data and Parameters**

The transport department of the government has provided the expected
monthly sales of petrol cars over the next 20 years (2026 to 2045) as
per the original plan (i.e. before CT program launch). This can be seen
in the **‘Raw_data’** worksheet (cells B4: C244).

The transport department has also provided the below data that is
entered on the **‘Parameters’** sheet.

- The number of petrol cars in the country as of 1 January 2026 is 5
  million.

- 5% of the expected sales of petrol cars will be replaced by the sales
  of electric cars in 2026, thereafter increasing by 1% absolute p.a.

- 4% of petrol cars will be scrapped at the end of each year.

- 3% of electric cars will be scrapped at the end of each year from 2041
  onwards but no scrapping will happen before that.

The valuation date (‘val_date’ = 1/1/26), projection period (= 20
years), the budget (=\$3 billion) and the subsidy on the purchase of an
electric car (‘subsidy’ = \$3,000) have been input in the
‘**Parameters**’ tab. These are program-specific details provided by the
Government.

The finance department has advised on the following costs and
requirements, which are all entered on the **‘Parameters’** sheet, as
noted below. The named ranges are mentioned in the brackets.

- **Costs**

| Cost of building one recharge station *(‘station_build_cost’)* | \$30,000 p.a. |
|----|----|
| Inflation for the cost of building station (‘station_build_cost_inflation’) | 3% p.a. from 2027 |
| Program administration expenses *(‘admin_cost’)* | \$150,000 p.a. |
| Advertising and other costs *(‘advert_cost’)* | \$50,000 p.a. |
| Inflation for the above expenses *(‘expense_inflation’)* | 3% p.a. from 2027 |

- **Energy capacity/requirements**

| Energy supply from one charging station *(‘energy_supply_per_station_pa’)* | 438,000 kWh p.a. |
|----|----|
| Energy requirement for a full recharge of one electric car battery *(‘energy_req_fullrecharge_per_car’)* | 50 kWh |
| No. of full recharges needed by an electric car *(‘no_of_recharges_per_car_pa’)* | 90 per year |

- A discount rate of 7% will be used (named range created called
  ‘disc_rate’)

In the **additional scenario**, a 10% tax rate (*‘tax-rate_petrol’*)
will be applied to the per-litre cost of petrol (\$1.20 per litre in
2026, then inflating at 1.5% p.a. - *‘petrol_cost_per_litre’*) and the
average petrol consumption of a car is 300 litres p.a.
*(‘avg_petrol_consump_pa’*). These inputs and their named ranges can be
seen in the ‘Parameters’ sheet.

# **Assumptions**

- Inflation assumptions stay constant over the projection period.

- Program expenses (admin and advertisement) and cost of building
  stations are spread evenly over a year.

- The discount rate is assumed to be fixed over the projection period.

- Each electric car will visit a charging station only when it requires
  a full recharge.

- The tax income from petrol will be spread evenly over a year.

- Cars are scrapped at the end of each year, so the full scrap rate
  applies to the new cars in the year in which they are sold.

- The per-litre cost of petrol is taken as the average cost at the
  mid-point of the year.

<!-- -->

- There are no other costs associated with the implementation of the CT
  program e.g. no costs incurred in maintaining existing charging
  stations.

<!-- -->

- There will be sufficient demand and all electric cars expected to be
  sold will actually be sold each year during the CT program.

- Over the projection period, there will be no extreme/special events
  (like economic turmoil, technological developments, regulatory
  changes, pandemic etc.) that could impact the estimates of future
  costs and sales involved in the CT program.

- The CT program will continue as expected over the next 20 years. There
  will be no events (such as political party change etc.) that could
  cause hindrance in the smooth progression and ultimate completion of
  the program.

# **Data checks and analysis**

***‘Data_correction’ work*sheet**

*In this worksheet, the data is checked and corrected for any errors
identified.*

The expected monthly sales data of petrol cars over the next 20 years is
copied from the **Raw_data** worksheet to the **Data_correction**
worksheet (in cells B9:C249) using cell references.

This monthly sales data is then summarised using a line chart (using the
Insert -\> Charts option in MS Excel) in columns E to N. The X-axis
shows calendar time (month and year from January 2026 to December 2045)
and the Y-axis shows the number of cars sold.

The chart shows an increasing trend in car sales over the next 20 years.
However, there are three data points where the graph either shows a
spike or a sudden fall (outliers) which looks odd. These are identified
as potential **data errors** (highlighted in yellow colour in the data)
as noted below.

- The sales figure of 11,654 in February 2029 seems too low. The graph
  has a dip at this point.

- The sales in November 2032 is negative (= -52,248) and the line graph
  falls below zero at this data point. This looks incorrect as car sales
  cannot be negative.

- The sale of 234,567 in June 2037 is quite high as the graph shoots up
  at this point.

Some **data checks** have also been done, as noted below.

- The number of data entries in column C is calculated to be 240 (using
  the COUNT function) in cell C1. A check is carried out in cell D1 to
  check that this is equal to the ‘projection_period’ in the Parameters
  tab in years multiplied by 12.

- Cells B2:C4 use standard Excel functions to calculate the minimum,
  maximum, and average of the sales of petrol cars.

- Cell D4 checks that the minimum value of sales should be greater than
  zero. This check fails.

- The number of negative values for sales is counted in cell C5 using
  the COUNTIF function and came out to be 1.

*Data correction*

The data is copied onto cells P9:Q249 in the same tab using cell
references, and the following corrections are made. The corrected
figures are highlighted in green in the spreadsheet.

- The low sales (outlier) in Feb’29 is changed to the average of the
  sales in the preceding and succeeding years. The value obtained is
  31,601 in cell Q47.

- The negative sales figure in Nov’32 is changed to positive in cell Q92
  (= 52,248) as car sales data cannot be negative.

- The significantly high sales (outlier) in Jun’37 is changed to the
  average of the sales in the preceding and succeeding years. Hence, the
  value is changed to 91,360 in cell Q147

- 

The checks are repeated in cells P1:Q5 based on the corrected data -
they are now passing and the values look fine.

# **Method**

***‘Conversion to annual sales’ worksheet***

*In this worksheet, the corrected monthly sales data is converted into
annual sales.*

Columns B and D pull the corrected sales data from the ‘Data_correction’
worksheet.

Column C calculates the calendar year against each month in the data in
column B, by using the YEAR function in Excel.

Cell D3 calculates the sum of the sales data present in column D.

Column G contains the unique values of calendar years i.e. from 2026 to
2045. Column H counts the occurrence of each of these calendar years in
column C. Column I then checks that the count should be equal to 12 for
each year.

Column J uses a SUMIF function to sum the sales in column D for all the
months of a particular year so that the annual sales data is obtained.

*Auto check:* Cell J3 calculates the sum of annual sales data obtained
in column D and then cell K3 checks that this value is equal to the
total of the monthly sales obtained in cell D3.

***‘Revised sales & total cars’ worksheet***

*This worksheet projects the expected yearly sales of electric and
petrol cars (after CT program launch) and the total number of electric
and petrol cars in the country for each of the next 20 years.*

######### Projection of yearly sales of electric and petrol cars (after CT program launch)

Cell B6 contains the valuation date (=01/01/26) which is linked to the
named range ‘VAL_DATE’ on the Parameters sheet. This cell is highlighted
in orange colour as the formula is different.

The rest of column B contains the calendar year, starting from 2026 in
cell B7 (highlighted in orange as the formula is different from the rest
of the column). This is obtained by extracting the year of the valuation
date from the preceding cell. Thereafter, the value is projected forward
by adding ‘1’ to the value of the previous year until 2045 is reached.

Column C pulls the annual sales data of petrol cars (pre CT program
launch) from column J of the ‘Conversion to annual sales’ worksheet.

Column D projects the sales of new electric cars for each year. This is
calculated by multiplying the expected petrol car sales in column C by
the proportion of these sales that will be replaced by electric cars
which are looked up from the ‘Parameters’ sheet (B14:C33) based on the
calendar year (using VLOOKUP function).

Column E calculates the revised petrol car sales by subtracting column D
(i.e. sale of electric cars) from column C (i.e. sales of petrol cars
pre-CT program launch).

The sum totals of each of the columns are calculated in row 2.

***Checks:***

- An automatic check is performed in cell C4 to check that cell C2 (i.e.
  the sum of petrol cars in column C) equals cell J3 from the
  ‘Conversion to annual sales’ sheet. This confirms that the data has
  been pulled correctly.

- An automatic check is performed in cell E4 to check that the sum of
  sales of electric cars (cell D2) and petrol cars sales after the CT
  program launch (cell E2) is equal to the sum of the sales of petrol
  cars before the CT program (cell C2).

######### Projection of the number of petrol cars at the end of the year (after CT program launch)

Column G calculates the number of petrol cars at the start of each year.
The first value (in cell G7) is pulled from the Parameters sheet and is
highlighted in orange colour as the formula is different from the rest
of the column. For each future year, this is set equal to the preceding
year’s value of column K.

Column H is the petrol car sales after the CT program launch and is set
equal to column E.

Column I calculates the petrol cars at the end of the year before
scrapping. This is calculated as the sum of columns G and H.

Column J calculates the petrol cars scrapped at the end of the year.
This is obtained by multiplying column I by the scrappage % for petrol
cars which is pulled from the Parameters sheet.

Column K calculates the number of petrol cars at the end of the year.
This is calculated by subtracting the scrapped petrol cars (in column J)
from the end-of-year petrol cars before scrapping (in column I).

The sum totals of each of the columns are calculated in row 2.

***Check:***

An auto check is performed in cell K4 to check that the total of petrol
cars at the end of the year (cell K2) is equal to the total petrol cars
at the start of the year (cell G2) *plus* total petrol car sales (cell
H2) *less* total petrol cars scrapped (cell J2).

######### Projection of the number of electric cars at the end of the year (after CT program launch)

Column M calculates the number of electric cars at the start of each
year. The first value (in cell G7) is manually set to zero and is
highlighted in orange colour as the formula is different from the rest
of the column. For each future year, this is set equal to the preceding
year’s value of column Q.

Column N is the electric car sales after the CT program launch and is
set equal to column D.

Column O calculates the electric cars at the end of the year before
scrapping. This is calculated as the sum of columns M and N.

Column P calculates the electric cars scrapped at the end of the year.
This is obtained by multiplying column O by the scrappage % for electric
cars which is looked up from the Parameters sheet based on the calendar
year (using VLOOKUP function).

Column Q calculates the number of electric cars at the end of the year.
This is calculated by subtracting the scrapped electric cars (in column
P) from the end-of-year electric cars before scrapping (in column O).

The sum totals of each of the columns are calculated in row 2.

***Check:***

An auto check is performed in cell Q4 to check that the total electric
cars at the end of the year (cell Q2) is equal to the total electric
cars at the start of the year (cell M2) *plus* total electric car sales
(cell N2) *less* total electric cars scrapped (cell P2).

######### Graph for sales of cars

A stacked column chart is plotted in Columns S to V showing the revised
sales of petrol cars and the sales of electric cars (i.e. columns D and
E) from 2026 to 2045.

**Reasonableness checks:**

- The car sales graph is trending upwards which is in line with the
  sales data (after correction)

- The blue part of the bars represents the electric car sales and it
  seems to be a small proportion of the original total sales but
  increasing over time. This looks in line with the underlying
  assumption that 5% of the total sales will be converted into electric
  car sales in 2026 and that this proportion will increase by 1% each
  year.

- The cumulative number of petrol cars at the end of the year sees an
  increasing trend (see column K). This is expected because the number
  of new cars sold outweighs the cars scrapped in each projection year.
  \[The car sales in 2026 is 5% of the starting cars (= 0.26m/5m = 5%)
  and this rate increases in each future year. Whereas, the scrap rate
  is lower than this (4% p.a. for petrol cars)\].

- A similar observation is made for electric cars. They have only new
  sales for the first 15 years with a 0% scrap rate. Further, in the
  last 5 years of the projection, the number of new cars sold each year
  outweighs the cars scrapped.

***‘Cashflow model ‑ base’ sheet***

*This worksheet projects the yearly cashflows of the program and
calculates their NPV under the base scenario followed by a comparison
against the budget.*

Column B contains the projected calendar years. This column is copied
from ‘Revised sales & total cars’ worksheet (column B) using cell
references.

######### Projecting the cost of building charging stations (assumed to be evenly spread over the year)

Column C calculates the average of columns M and O of the sheet ‘Revised
sales & total cars’. This gives the average number of electric cars
visiting the charging stations each year.

Column D calculates the energy requirement (in kWh) for the full
recharge of electric cars. This is obtained by multiplying the average
number of electric cars (column C) by the number of times a recharge is
required by one electric car in a year and the energy requirement for
the recharge of one electric car (where these values are pulled from the
Parameters sheet).

Column E calculates the total number of stations needed to meet the
annual energy requirement for the recharge of electric cars. This is
done by dividing the annual energy requirement (column D) by the energy
capacity of one station (pulled from the Parameters sheet) and rounding
up to the next integer.

Column F calculates the number of new stations required to be built in
each projection year. For the first year, this is equal to the total
number of stations needed in 2026 (i.e. linked to cell E10), and is
highlighted in orange colour. For the rest of the years, it is
calculated by taking the difference between the total number of stations
needed in the current year (column E) and the corresponding value in the
preceding year, and then flooring this to zero by using the MAX function
in Excel.

***Check:*** An auto check is performed in cell F7 to check that the
total of the new stations to be built equals the cumulative number of
stations needed in the last year of the projection i.e. 2045.

Column G calculates the cost of building charging stations in each
projection year. This is obtained by multiplying the number of new
stations that will be built (column F) by the cost of building one
station (pulled from the Parameters sheet) and then applying expense
inflation by multiplying this cost by an additional factor ‘(1+
inflation rate)^(current year *less 2026*)’, where the inflation rate is
pulled from the Parameters sheet.

######### Projecting the expenses involved in the program (assumed to be evenly spread over the year)

Column I projects the admin cost. The cost, taken from the Parameters
sheet, is multiplied by the factor (1+ inflation rate)^(current year
*less 2026*) where the inflation rate is pulled from the Parameters
sheet.

Column J projects the ‘advertisement and other costs’. The calculation
is the same as the ‘program admin costs calculated in column I’ but
using the advertisement cost from the Parameters sheet (instead of admin
cost).

Column K calculates the ‘total expenses’ by adding columns I and J.

######### Projecting the cost of subsidy on electric cars (assumed to be evenly spread over the year)

Column M pulls the sales of new electric cars from column D of the
‘Revised sales & total cars’ sheet.

Column N projects the cost of subsidy on electric cars over the year.
This is calculated by multiplying the sales of electric cars in column M
by the subsidy amount for one electric car (‘subsidy’ from the
Parameters sheet).

######### Projection of the net cashflow and calculation of the NPV under the base scenario

Column Q calculates the net cashflow for each year from 2026 to 2045. It
is calculated by summing the cost of building stations (column G), total
expenses (column K) and the cost of subsidy on electric cars (column N),
and then multiplying this by ‘-1’ to reflect that these are all outflows
(or costs).

Column R calculates the discount factor for each year. This is obtained
as (1 *+* discount rate)^-(current year *-* year of valuation *+* 0.5).
Here, the discount rate of 7% is pulled using the named range
‘disc_factor’ from the Parameters sheet. An adjustment of 0.5 is used
because the costs will be discounted for half a year, given that they
are assumed to be, on average, halfway through the year.

**Cell R2 calculates the net present value of the net cashflows as at
1<sup>st</sup> January 2026.** This is calculated by multiplying the net
cashflows from year 1 onwards (column Q) by the corresponding discount
factor (column S) and summing it up (using SUMPRODUCT).

Cell R3 contains the budget amount which is pulled using the named range
‘budget’ from the Parameters sheet.

Cell R4 calculates any shortfall/excess in the budget as compared to the
NPV of the program. This is calculated as the sum of the budget (cell
R3) and the NPV of costs (cell R2).

Comment: The NPV of the program costs is higher than the budget, hence
the current budget is insufficient to implement the CT program.

Cells G2, K2 and N2 calculate the NPVs of cost of building station
(column G), total expenses (column K) and the cost of subsidy on
electric cars (column N) respectively. This is done using the SUMPRODUCT
formula based on the discount factors in column R.

***Check:*** An auto check is performed in cell S2 to check that the sum
of the NPVs in cells G2, K2, and N2 equals the negative of the NPV of
the net cashflow calculated in cell R2.

***“Cashflow model ‑ additional” worksheet***

*This worksheet projects the tax income expected to be earned on the
petrol cars and hence calculates the net cash flow and the resulting NPV
under the additional scenario. This is then compared to the proposed
budget.*

This sheet is a copy of the sheet ‘Cashflow model ‑ base’ but with the
following updates:

1)  <u>Projecting tax income on petrol cars</u>

- New column(s) are inserted after the column for the cost of subsidy on
  electric cars and before the net cashflow column.

> Column P calculates the average of columns G and I of the sheet
> ‘Revised sales & total cars’. This gives the average number of petrol
> cars in a year before scrapping happens at the end of the year.
>
> Column Q calculates the tax income expected from petrol cars in each
> projection year. This is obtained by multiplying the average number of
> petrol cars in a year (i.e. column P) by a factor. This factor is the
> product of the cost of one litre of petrol, the tax rate on petrol
> price and the average litres of petrol consumed by one petrol car in a
> year and an inflation factor of ‘(1+ inflation rate)^(current year
> *less 2026*)’. These values are pulled from the ‘Parameters’ sheet
> using named ranges.
>
> Cell Q2 calculates the NPV of the tax income using SUMPRODUCT based on
> the discount factors in column U.

2)  <u>Net cashflow calculation is updated (see column T).</u> It is
    calculated by adding the cost of building stations (column G), total
    expenses (column K) and the cost of subsidy on electric cars (column
    N), and this sum is then multiplied by ‘-1’ to reflect that these
    are all outflows (or costs), and further to this, we add the tax
    income expected on petrol cars (i.e. column Q).

> Note that the NPV of the program’s cashflows, budget, and the
> shortfall/excess in the budget are being calculated in the same way as
> done in the base scenario ‑ no changes have been made to these
> calculations.
>
> **Reasonableness checks:**

- The NPV under the additional scenario is greater than that under base,
  as checked in cell V2, and the difference in NPVs is equal to the NPV
  of the tax income, as checked in cell W2 This is expected because the
  tax income on petrol cars will offset some of the costs of the CT
  program.

- In this scenario, the entire budget will not be used to meet the
  program costs as the budget exceeds the NPV of the program cashflows

***“Results summary” worksheet***

*This worksheet summarises the budget and any shortfall/excess in the
budget under the base and additional scenarios.*

A results table is created in cells B4:F6 containing:

- The budget amount - pulled from the ‘*budget*’ input on the Parameters
  sheet.

- The NPV of the program costs under the base scenario (pulled from cell
  R2 of ‘Cashflow model ‑ base’ sheet).

- The shortfall in the budget in the base scenario (pulled from cell R4
  of ‘Cashflow model ‑ base’ sheet).

- The NPV of the program costs under the additional scenario (pulled
  from cell U2 of ‘Cashflow model - additional’ sheet).

- The excess budget in the additional scenario (pulled from cell U4 of
  ‘Cashflow model - additional’ sheet).

***“Pie_chart” worksheet***

This worksheet contains a pie chart (in columns G to Q) showing the
split of the budget into the different components under the additional
scenario.

The data for the chart is obtained in cells B4:C7 as follows.

1)  *NPV of total expense cashflow* – pulls cell K2 from the ‘Cashflow
    model ‑ additional’ worksheet

2)  *NPV of net subsidy cost* – difference of the NPV of the subsidy on
    electric cars and the NPV of the tax income on petrol cars i.e. cell
    N2 less cell Q2 from the ‘Cashflow model ‑ additional’ worksheet

3)  *NPV of the cost of building charging stations* ‑ pulls cell G2 from
    the ‘Cashflow model ‑ additional’ worksheet

4)  *Excess budget under the additional scenario* - pulls cell U4 from
    the ‘Cashflow model ‑ additional’ worksheet

**Check:** Cell C8 calculates the sum of the above four components (i.e.
the NPVs listed above) and cell C9 checks that this equals the budget
amount of £3 billion (‘*budget’)* input in the Parameters tab.

Using the above data i.e. the four component NPVs, a pie chart is
plotted in columns G to H. The data labels and the titles for the chart
and axes are added.

Comments:

The largest contributor to the cost of the CT program is the subsidy
offered by the government on the purchase of electric cars. The smallest
cost component is the admin and advertising costs of the CT program.

The inclusion of tax income to offset the costs of the CT program has
significantly reduced the overall funding requirement for the program.
Therefore, we see an excess budget of \$1.56bn i.e. 52% of the proposed
budget shall remain unused.

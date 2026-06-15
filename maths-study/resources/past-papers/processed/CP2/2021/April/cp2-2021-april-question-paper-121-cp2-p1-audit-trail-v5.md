---
normalized_id: cp2-2021-april-question-paper-121-cp2-p1-audit-trail-v5
exam_code: CP2
year: 2021
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr21/121_CP2-P1_Audit trail v5.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2021-april-question-paper-121-cp2-p1-audit-trail-v5

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

> April 2021
>
> AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

> Paper One

This is an example solution. It should be noted that this document and
the associated spreadsheet model include more detail than would
ordinarily be possible within the time allowed for the examination. They
contain a wide range of responses to parts of the marking schedule
however they should not be considered exhaustive either – it would not
be necessary to produce the level of detail contained in this document
to perform well on CP2.

>  Institute and Faculty of Actuaries

**Analysis of potential savings from installing solar battery**

**Audit trail**

**Objective**

An individual, Naomi, has installed solar panels on the roof of her
house to generate solar electricity to reduce the amount of electricity
she buys from her electricity provider. She is considering installing a
battery to store excess solar electricity to further reduce the amount
of electricity purchased.

Naomi has asked us to analyse her electricity data to understand the
potential savings from the reduction in electricity purchased from her
electricity provider due to installing the battery. Naomi has also
requested that we calculate the net present value (NPV) and the internal
rate of return (IRR) for the investment in the battery on two different
scenarios.

The purpose of this spreadsheet is to calculate the following:

- Carry out checks on the data to confirm the data is complete and fit
  for use.

- Model the potential battery storage level over the year and the
  electricity purchased before and after a battery is installed.

- Calculate the annual \$ saving in electricity purchased if a battery
  is installed.

- Project the annual savings and calculate the net present value of the
  future savings from installing a battery on the following scenarios:

<!-- -->

- Electricity prices increase by 4% p.a.

- Electricity prices increases start at 4% p.a. and rise each year by an
  additional 0.25% p.a. and

<!-- -->

- Calculate the NPV and IRR for each of the two scenarios.

**Data and Parameters**

The data provided by Naomi can be found on the “Raw Data” worksheet.

It consists of 8,760 data entries for both solar generation and solar
usage for each hour in the 2020 calendar year.

Additional information provided by Naomi can be found in the
“Parameters” worksheet, including:

- Details of the battery

- The price of electricity purchased externally

- Financial metrics (inflation and discount rate)

Naomi also stated that she expects electricity price inflation to rise
by an additional 0.25% p.a. each year.

These parameters are assumed to be correct but should be independently
verified.

**Assumptions**

- Other than the data changes described in ‘Data checks’ worksheet the
  data is accurate.

- The battery storage capacity is accurate, for example there is not a
  natural variation between batteries with 12.5 kWh being the average
  advertised by the manufacturer.

- The battery cannot discharge below 0 kWh. i.e. the minimum capacity is
  0 kWh

- The expected lifetime of the battery is correct. There is no
  possibility of a shortened life which would affect the IRR
  calculations.

- The electricity usage and solar electricity generation data from the
  2020 calendar year is a good representation of future calendar years
  during the batteries working lifetime. They will not be affected by
  heatwaves, cold winters or a change in lifestyle affecting the
  electricity usage patterns.

- Naomi has sufficient funds to purchase the battery.

- The battery can be installed in working order by 1 January 2022.

- There is no possibility of a battery or solar panel malfunction over
  the 20 year assumed battery working lifetime.

- The battery is compatible with the solar panels already installed.

- The electricity inflation assumptions are within reasonable ranges and
  the fixed or linear increasing patterns assumed are both acceptable.

**Method**

**‘Data Analysis’**

*In this worksheet the data is checked for reasonableness*

The sheet ‘data analysis’ carries out the following checks on the data:

- Cells W9:W12 use standard excel functions to calculate the minimum,
  maximum, average and standard deviation of solar electricity
  generation measured in kWh.

- Cells W15:W18 use standard excel functions to calculate the minimum,
  maximum, average and standard deviation of electricity usage measured
  in kWh.

- The number of data entries is calculated as 8,760 in cell W6. A check
  is carried out in cell X6 that this is equal to 365 days multiplied by
  24 hours and is correct.

- Cells K6:M30 contain a table of 2020 annual average solar electricity
  generation in kWh and average electricity usage in kWh for each hour
  of the day.

These checks highlighted the following possible errors:

- Cell W15 shows the minimum electricity usage per hour is negative,
  cell H5 shows there are five hours where electricity was recorded as
  negative.

- Cell W16 shows the maximum electricity usage per hour is 46,000 which
  seems high when compared by eye to most other hourly electricity
  usage.

- Cell L8 shows there is solar electricity generation between the hours
  of 1am and 2am. On inspection by filtering the data by hour one and
  non-negative data there is only one positive entry.

A graph of the average solar electricity generation and average
electricity usage over each hour of the day was plot. This highlighted
an error around the middle of the day.

**‘Corrected Data’**

*In this worksheet the data is corrected for any errors identified in
‘data analysis’.*

This sheet links through the original data provided on the ‘raw data’
sheet and has the following changes made to it:

- The negative electricity usage in cells D24, D940, D942, D3600 and
  D6471 are changed to be nil entries as it is assumed there cannot be
  negative electricity usage. Also, need to mention the correction to
  cell D24 as average of before/after (as it is not made nil in the
  model) for consistency with model.

- In cell D283 the exceptionally high electricity usage is changed to be
  the average of the two adjacent hours.

- In cell C2576 the unusual night time solar electricity generation is
  assumed to be an error and amended to be a nil entry.

Where changes are made a note is made in column E of the affected row
and the changes cell is highlighted yellow. Care should be taken not to
copy down formulae in columns C or D.

Corrected data statistics are calculated in cells W9:W12, W15:W18, W6:X6
and K6:M30 and appear to be reasonable.

The data in this sheet is the data that is used in the calculations
below.

Apart from the changes detailed above, the data provided is assumed to
be correct but should be independently verified and the calculations
corrected if any errors are found.

The 2020 annual average solar electricity generation in kWh and
electricity usage in kWh for each hour of the day calculated in the
‘Corrected Data’ sheet in cells L7:M30 is graphed using a line chart.

*Reasonableness checks*

- The average electricity usage in kWh is highest in the evening hours,
  with a smaller peak between 06:00 to 08:00. These could be attributed
  to a normal daily pattern of using electricity to get ready for the
  day in the morning and using more electricity at home in the evening.

- The solar generation follows a smooth bell curve, peaking at around
  midday and falling to near zero between 20:00 to 04:00. This appears
  reasonable as the sun is strongest around midday and no sun would be
  expected in the night time hours.

- The period between approximately 09:00 to 16:00 when average solar
  electricity generation is higher than average electricity usage is the
  period when the battery would build up storage of electricity.

- The period after approximately 16:00 when average electricity usage is
  higher than average solar electricity generation is when any
  electricity stored in the battery could be used to power the excess of
  electricity usage over solar electricity generated.

**‘Solar & usage Calculations’ worksheet**

*In this worksheet the battery storage and the excess of electricity
used (measured in kWh) over the combination of solar electricity
generated during the hour and battery storage available is modelled for
each hour in the 2020 calendar year.*

Columns C and D pull in the hourly solar electricity generated and
electricity usage from the ‘Corrected data’ worksheet.

Column E calculates the electricity purchased from the electricity
provider before a battery is allowed for. This is calculated by
subtracting the hourly solar electricity generated from the electricity
used, with a minimum of 0.

Column F calculates the excess of solar electricity generated (measured
in kWh) over the electricity used for each hour. This is calculated by
subtracting the hourly electricity used from the solar electricity
generated, with a minimum of 0.

Column G calculates the cumulative battery storage level (measured in
kWh) for each hour over the whole year as follows:

- starts at a level of 0 kWh at 0:00 on 1 January 2020. *This cell is
  hard coded and shaded grey, care should be taken not to copy this cell
  down.*

- for each subsequent hour of the 2020 calendar year (subject to a
  minimum of 0 kWh and a maximum of the battery storage capacity 12.5
  kWh).

<!-- -->

- the cumulative battery storage from the preceding hour

- plus the current hour’s excess of solar electricity generation over
  electricity used (column F)

- less the electricity used which is not covered by solar generation
  (column E).

Column H calculates the excess of electricity used over the combination
of solar electricity generated and battery storage available (kWh). This
is calculated as follows:

- starts as the level of electricity purchased in the hour starting 0:00
  on 1 January 2020. *This cell is hard coded and shaded grey, care
  should be taken not to copy this cell down.*

- For each subsequent hour of the 2020 calendar year, subtracting the
  cumulative battery storage level (kWh) for the previous hour
  (column G) from the electricity used (kWh) which is not covered by
  solar generation for the current hour (column E) subject to a minimum
  of 0.

As a check, column I calculates electricity which is generated by the
solar panels, but not used or stored in the battery. This is calculated
as the battery capacity from the previous hour, plus the electricity
generated, less the electricity used, less the maximum battery capacity,
with a floor of zero.

Column J calculates the month of the year from 1 to 12 using the ‘month’
excel function.

*Checks*

- The maximum battery storage capacity is 12.5 kWh.

- The maximum hourly battery storage increase is less than or equal to
  12.5 kWh.

**‘Solar and Usage results’ worksheet**

*In this worksheet the results are summarised to enable reasonableness
checks to be completed and potential annual \$ saving from the battery
calculated.*

*The Annual Solar Electricity generated (in kWh) is calculated as
follows:*

- The hourly solar electricity generated is summed for each hour of the
  2020 calendar year from column C in the ‘Solar & usage Calculations’
  worksheet.

*The Annual Electricity Usage (in kWh) is then calculated as follows:*

- The hourly electricity usage is summed for each hour of the 2020
  calendar year from column D in the ‘Solar & usage Calculations’
  worksheet.

*The Annual Electricity purchased from the electricity provider with no
battery (in kWh) is then calculated as follows:*

- The hourly ‘Electricity purchased from electricity provider - no
  battery (kWh)’ is summed for each hour of the 2020 calendar year from
  column E in the ‘Solar & usage Calculations’ worksheet.

*The Potential Electricity purchased from the electricity provider with
a battery (in kWh) is then calculated as follows:*

- The hourly ‘Electricity purchased from electricity provider - with
  battery (kWh)’ is summed for each hour of the 2020 calendar year from
  column H in the ‘Solar & usage Calculations’ worksheet.

*The Potential annual saving (in kWh) from installing a battery is
calculated as follows:*

- Annual Electricity purchased from the electricity provider with no
  battery less Potential Annual Electricity purchased from the
  electricity provider with a battery.

- Column E then multiplies the result of each of the calculations in
  column C with the price of 1 kWh electricity (as at 1<sup>st</sup>
  Jan 2022) from the parameters worksheet to convert the savings from
  kWh into \$.

*Finally, a check is implemented on the electricity generated:*

- The total electricity generated, but not used or stored is calculated
  as the sum of column I on the ‘Solar & usage Calculations’ worksheet.

- The check then takes the total electricity generated, less the
  electricity saved (electricity usage less electricity purchased with a
  battery), less the electricity neither used or stored. This should
  equal zero.

**‘Annual Graphs’ worksheet**

*A line chart is produced to show the total monthly solar electricity
generated, total monthly electricity used, monthly electricity purchased
from the electricity provider with and without a battery.*

Cells A4:F16 contains a table used to generate the graph. The months 1
to 12 are set out in A5:A16. The table uses the excel function ‘SUMIF’
to sum data from the ’Solar & usage Calculations’ worksheet if the month
calculated in column J of ’Solar & usage Calculations’ is equal to the
month in cells A5:A16.

‘Solar electricity generated’, ‘Electricity usage’, ‘Electricity
purchased from electricity provider - no battery’ and ‘Electricity
purchased from electricity provider - with battery’ are charted (in kWh)
for each month in the calendar year using a line chart.

*Reasonableness checks*

- The solar electricity generation follows a smooth bell curve peaking
  in the Northern Hemisphere summer months which would be expected to be
  the sunniest months with longest daylight hours.

- Electricity usage is highest in Northern Hemisphere winter months
  which could be expected due to additional heating and more time spent
  indoors.

- Electricity purchased from the electricity supplier with no battery
  closely follows electricity usage but is lower in all months which
  would be expected as some electricity usage is met by the solar
  electricity generation during daylight hours.

- Electricity usage purchased from the electricity with battery also
  closely follows electricity usage but is lower still than the
  equivalent measure with no battery. This could be expected due to the
  battery enabling storage of excess solar generation allowing it to
  cover electricity usage at other times.

**‘Battery NPV and IRR’ worksheet**

*This worksheet projects the expected annual \$ saving of installing the
battery on the two required scenarios and calculates the NPV and IRR for
each scenario.*

<u>Scenario 1 – Fixed inflation</u>

- Cells B10:B30 contain the calendar years from 2021 continuing for the
  20 years of expected working lifetime until 31 December 2041.

- Cell C10 contains the negative cashflow of the cost of installing the
  battery (assumed to be at the end of calendar year 2021. This cell is
  shaded yellow as it is a different formula to the rest of the column.

- Cells C11:C30 contain the projection of annual \$ saving using the
  formula:

\$ saving in 2021 obtained from cell C10 in “Solar and usage results” x
(1+electricity price inflation) ^ (calendar year – 2022)

- The Net Present Value (NPV) of all expected future saving is
  calculated in cell C4 by using the excel function NPV() and referring
  to the discount rate provided by Naomi from the parameters sheet and
  the cashflows in C10:C30. This amount is accumulated by 1 year to
  bring it up to 31 December 2021/1 January 2022.

- The IRR is found in cell C5 by using the excel function IRR() and
  referring to the cashflows in C10:C30.

- A check is included in cell C7 using the excel function NPV() using
  the IRR result in C6 and the cashflows in cells C10:C30 is equal to
  zero and returns a result of “OK” if C6 is equal to 0 or “check IRR
  calculation” if not.

<u>Scenario 2 - Increasing inflation</u>

The Scenario 1 calculations are copied into columns E:H with the
following amendments

- Column F calculates the annual inflation that is applied as

1+electricity price inflation+ additional rise in price inflation p.a. x
(calendar year – 2023)

- Column G calculates the compound inflation to be applied to the annual
  \$ saving by calculating the product of inflation in column G for all
  future years to the current year.

- Column H calculates the estimated annual saving from installing the
  battery by multiplying the 2020 saving by the compound inflation.

- The NPV and IRR and check on IRR are calculated in H4:H7 using the
  same method as scenario 1.

*Reasonableness checks*

- The IRR for Scenario 2 with increasing electricity price inflation is
  higher than Scenario 1 with fixed inflation because the \$ savings
  increase faster in Scenario 2 which means the battery investment
  provides a higher return.

- The IRRs are in the range of 6% p.a. - 11% p.a. which seems reasonable
  for an investment with the expected risks and returns explained by
  Naomi.

**END OF AUDIT TRAIL**

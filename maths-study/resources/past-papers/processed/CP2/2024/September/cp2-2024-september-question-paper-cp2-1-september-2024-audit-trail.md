---
normalized_id: cp2-2024-september-question-paper-cp2-1-september-2024-audit-trail
exam_code: CP2
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep24/CP2-1_September 2024_Audit trail.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2024-september-question-paper-cp2-1-september-2024-audit-trail

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

September 2024

AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

Paper One

>  Institute and Faculty of Actuaries

Analysis of taxi journeys in a city

**Purpose**

Our client is looking at a city (the “City”) taxi market to understand
consumer behaviour and to solve the congestion issue in the City.

We have been asked to produce a model that will analyse the number of
taxi journeys in the City. In particular, the model:

- Performs checks on the data provided and amends or deletes where
  appropriate

- Produces two charts to show the taxi pickups by day of the week and by
  hour of the day separately, and produces a chart showing the
  relationship between journey distance and journey duration

- Calculates the expected fare using the formula provided and validates
  whether the formula provided is a good fit to the fare amount data
  provided at 95% confidence level

- Calculates the expected fare after the proposed neighbourhood
  surcharge is introduced and the impact on the number of taxi journeys
  due to the increased fare

- Calculates the additional adjustment in fare needed to reduce the
  number of taxi journeys that begin or end in neighbourhood A to 80% of
  the original scenario

**Data**

There are two datasets used in the model. The first dataset
(“taxi_journeydata”) is sourced from the City’s Taxi Commission and it
contains 2.5% of the journeys in the City’s taxis in the month of July
2021.

The second dataset (“taxi_location&demand”) is provided by the client.
It contains additional information that helps identity whether a journey
starts or ends in neighbourhood A and the impact on demand as a result
of increase in fare.

Using the data, my manager has determined that the following formula
would be a good proxy to the actual fare formula used:

\$1.7 + \$1.8 x journey distance (in miles) + 0.37 x journey duration
(in mins)

Additionally, my manager has provided the following additional
information:

- Passenger count should be at least one and at most six, as the maximum
  number of passengers allowed by law is six.

- Journey distance should be at least 0.1 miles with a maximum of 100
  miles.

- Fare amount should be at least \$2.5 but at most \$250.

- Journey duration should be more than or equal to a minute but less
  than or equal to three hours

**Assumptions**

- The sampled data provided is representative to the unsampled data

- The formula works on both standard and airport rate codes

- July data is representative of the City’s taxi usage, i.e. there are
  no holidays or seasonality effect which might skew the data

- The taxi demand is not weather specific, e.g. more demand when it
  rains

- The proxy formula provided is a good fit to the actual fare formula
  used, i.e. there are not hidden fees such as tips, luggage or airport
  surcharge etc.

- Non-integer number of rides are permissible

**Data Checks**

The data was copied from the **“taxi_journeydata”** sheet to the
“**data_checks”** sheet using cell references.

The following checks were performed on the data:

1.  Drop off time is after pickup time (Column K)

A simple Boolean check that dropoff time \> pick up time if both times
are on the same date. If not, a Boolean check that drop off date is at
most one day after the pick-up date (i.e. over midnight). This check
shows no errors

2.  Check journey duration is more than a minute but less than three
    hours (Column L)

journey duration is calculated as if the pick-up and drop-off are on the
same day (Drop off time - Pickup time) , else if drop-off is one day
after pick-up, we add the minutes that elapsed past midnight on the new
day and the minutes that elapsed before midnight on the prior day, else
the formula returns 9999 which serves as a flag for error. This is then
all multiplied by 1440 (1440 being 60 mins in an hour and 24 hours in a
day).

The check in cell L7 (which checks if the journey duration is more than
a minute but less than three hours) flags up one error. This journey
only lasted 0.63 minutes

3.  Check that the pickup and drop off zones are in the
    taxi_location&demand data provided (columns M and N)\
    In columns M and N we use a match function to check if the pickup or
    drop off zones matches with the ones in the Taxi_zone data. This
    match function returns \#N/A if the zones are not in the data
    provided as a result we overlay NOT and ISNA functions to the match
    function such that the check will return true if the zones are
    present in the data. This check flags up no errors.

4.  Check that the number of passengers per ride is between one and six
    (column O)

This check returns true if the number of passengers is between one and
six and false if not. This check returns one error as there is one ride
with 0 passengers.

5.  Check that the journeys distance is between 0.1 miles and 100 miles
    (column P)

This check returns true if the journey distance is between 0.1 miles and
100 miles and false if not. This check returns no errors.

6.  Check that fare amount is between \$2.5 and \$250 (column Q)

This check returns true is the fare amount is between \$2.5 and \$250
and false if not. This check returns no errors.

7.  Check that all journey data entries are in July (column R)

This check returns true is both the pick-up and drop-off journey
occurred in July. This check returns one error. There is one journey
that occurred in June.

The three offending data entries were filtered out. The data without
these three offending entries are then copied and pasted value into
“Clean_data” tab.

We continue our check on the taxi_location&demand data. We have copied
from the taxi_location&demand sheet to the “taxi_location&demand_checks”
sheet using cell references. We check whether the impact on demand data
is decreasing demand and also plotted a chart to look at the shape of
the impact on demand on increasing fare. Both look sensible.

*Reasonableness checks:*

The impact of fare increase on demand is increasing as the fare goes up
which is expected. It is decreasing as the fare increases when it is
near the maximum increase, which may suggest people who really need
taxis may not have much of a choice. The impact on demand as fare
increases is worth further investigation.

The data is now clean and fit for purpose for our projection.

**Clean_data**

The data was copied from the **Data_checks** sheet to the **Clean_data**
sheet by copying and pasting the cleaned data.

In this sheet, in column K we determine if a journey begins or ends in
neighbourhood A by using a Boolean function, Or(Pickup zone in A,
Dropoff zone in A) which returns true in the journey begins or ends in
neighbourhood A.

In column L we calculate the pickup hour by using the hour() function.

In column M we calculate the day of the pick up by using “Text(pickup
date stamp, “dddd”).

In column N we work out the journey duration as we have done in point 2
under “Data Checks” section above.

To plot the chart showing the number of taxi pickups by the day of the
week we use a sumif function to sum up all the journey in each day.

*Reasonableness checks:*

We would expect taxi demand to drop as the weekend closes which is in
line with the shape of the chart.

Similarly to plot the chart showing the number of taxi pickups by the
pick-up hour of the day, we use a sumif function to sum up all the
journeys in each hour of pick-up.

*Reasonableness checks:*

We would expect taxi demand throughout the day to go through peak and
trough, higher demand during the day and lower demand during the small
hours, which is in line with the shape of the chart.

We also plot a scatter chart of journey distance (x-axis) and journey
time (y-axis).

*Reasonableness checks:*

As implied by the shape of the chart we expect distance and journey
duration to be correlated.

**Hypothesis_Test**

This sheet performs a goodness of fit test to check if the proposed fare
formula is a good fit to the fare amount data at 95% confidence level.

We have:

H<sub>0</sub>: There are no significant differences between the observed
and the expected value.

H<sub>1</sub>: There are significant differences between the observed
and the expected value.

In columns A to N, we reference the data from the Clean_data tab. Col O
calculates the expected fare amount using the formula provided:

\$1.7 + \$1.8 x journey distance (Col I) + 0.37 x journey duration (Col
N)

Col P calculates (O – E)<sup>2</sup>/E; we take the difference between
the observed fare amount and the expected fare amount, square it and
divided the product by the expected fare amount.

In cell S2 we calculate the chi-squared statistic which is the sum of
the (O – E)<sup>2</sup>/E from column P. The degree of freedom,
calculated in cell S3, is the number of observations less one. The
critical value is calculated in cell S4 using the CHISQ.INV.RT function
at 95% confidence level and the degree of freedom calculated in S3.

Given the test statistics is less than the critical value, we should not
reject the null hypothesis. The provided formula is a good fit of the
observed fare amount at 95% confidence level.

**Surcharge**

This sheet calculates the number of taxi journey that begins or ends in
A following the increase in fare and decrease in demand.

In columns A to N, we reference the data from the Clean_data tab.

In column O, we use an ‘IF’ statement to calculate the increase in fare
using \[1 + 1/exp(journey distance)\] if the journey begins or ends in A
and no adjustments otherwise.

Similarly in column P, we calculate the revised decreased demand, the
original demand being 1 (or 100%). We use an ‘IF’ statement to index the
decrease in demand based on the increase in fare calculated in column O
for journeys that begin and end in neighbourhood A. Note that the index
match formula used here is off by one reference cell intentionally in
order to reference the right data. No adjustments needed if the journey
does not begin or end in A.

The expected fare, calculated in column Q is then:

(\$1.7 + \$1.8 x journey distance (Col I) + 0.37 x journey duration (Col
N)) x increase in fare (col O) x decrease in demand (col P)

The number of journeys that begin or end in A before the increase in
fare is calculated in cell U6 by using a ‘countif’ statement which only
counts if the neighbourhood A indicator (col I) is true.

The number of journeys that begin or end in A after the increase in fare
and decrease in demand is calculated in cell U7 by using a ‘sumif’
function, which only sums over the revised number of rides from column P
(i.e. after the decrease in demand) if it begins or ends in A.

*Reasonableness checks:*

The number of taxi journeys decrease as the fare goes up as demand is
reduced.

**Surcharge_goalseek**

This worksheet finds the additional adjustment factor R which is needed
to be applied to the fare increase factor, so that the number of taxi
journeys that begin or end in neighbourhood A are reduced to 80% of that
before the fare increase.

This worksheet is a copy of “Surcharge” worksheet, with the following
adjustments:

- We have introduced a new parameter R, the additional increase in the
  Parameters tab

- The fare increase formula is now revised to:

1 + R/Exp (journey distance)

No other changes are made compared to the Surcharge worksheet.

We do a goal seek by varying R such that the number of journeys after
the fare increase is 80% of that before the fare increase, i.e. the
ratio of after-to-before journeys in cell V7 is set to 80%.

*Reasonableness checks:*

If we set the additional fare increase adjustment factor R to 1, we get
back to the original surcharge scenario.

A goal seek check is done in cell W7.

**END OF AUDIT TRAIL**



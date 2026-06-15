---
normalized_id: cp2-2021-september-question-paper-221-cp2-p1-audit-trail-v3
exam_code: CP2
year: 2021
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Sep21/221_CP2_P1_Audit trail_v3.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2021-september-question-paper-221-cp2-p1-audit-trail-v3

   INSTITUTE AND FACULTY OF ACTUARIES


                         EXAMINATION


                            September 2021

                          AUDIT TRAIL

                   Subject CP2 – Modelling Practice
                            Core Practices

                             Paper One




                                         Institute and Faculty of Actuaries


CP2 Paper 1, 221
Route Review for JIT Airline
Purpose
Just In Time (JIT) is an airline company which is currently reviewing their route between
London and New York.

We have been asked to produce a model that will evaluate the profit or loss that the airline
will generate. In particular, the model:

      Performs checks on the data provided
      Calculates the revenue and cost per flight
      Calculates various profit metrics including the percentage of flights that produce a
       profit, the profit per occupied seat and the profit margin
      Estimates the impact on profits of moving the route to business class only
Data
JIT provided us with a set of 720 flight data points. This includes the occupancy rate of
business class seats and economy class seats per flight. The data has a peak and non-peak
season indicator. JIT also provided us with data on wind speed.

Additionally, JIT has advised that
    Fuel cost per gallon is $1.30.
    Fuel usage per mile is 4 gallons.
    Distance between London and New York is 3,470 miles.
    There are 30 business class seats and 240 economy class seats.
    There are 720 flights per year (2 flights per day for 360 days)
    Q2 and Q3 are peak season quarters while Q1 and Q4 are off-peak
    The aircraft costs $200 million each and JIT has two planes running the London –
       New York route. The planes will take 25 years to pay off at an interest rate of 5% p.a.
    The pilot salary is $100,000 p.a. and the cabin crew salary is $20,000 p.a. each.
    Each crew contains two pilots and 8 cabin crew.
    The cost of using the London airport and the New York airport is $15,000 and
       $25,000 respectively per take off.
    A business class ticket costs $2,000 and an economy class ticket cost $500. Business
       and economy class share of cost is split 20%/80%. These are subject to a high season
       adjustment of 15% and 35% for business/economy class tickets.
    Overhead cost is $20,000 per flight.
    There is an environmental tax of 25% of the revenue.
These are all entered on the Parameters sheet. For the alternative scenario, three economy
class seats can be converted to one business class seat and twice the number of cabin crew
will be required on the business class only flights.

Data Checks
The data was copied from the Data sheet to the Data Checks sheet using cell references.
The following checks were performed on the flight data:



CP2 Paper 1, 221
   1. Quarter
      In column N, we check whether the quarter data provided is in the format of Q1, Q2,
      Q3 and Q4.

   2. Day
      In column O, we check whether there are two flights per day

   3. Seat occupancy
      In columns P and Q, we check whether the number of seats occupied in business class
      and economy class is between 0 and the maximum told by JIT

   4. Wind speed
      In column R, we check whether the wind speed is between -2 and 2. In column S we
      check whether the wind speed follows the jet stream pattern, i.e. we check whether all
      the odd numbered flights have a non-positive wind speed factor and the even
      numbered a non-negative factor

In Columns U to X, summary statistics (min, max, sum, average, standard deviation) for
occupied seats are produced. These are splits between business and economy class, and peak
and non-peak season.

In the checks mentioned above it is noted that:
    - The maximum number of occupied seats do not exceed the stated maxima for each
        travel class
    - The minimum number of occupied seats are non-negative
    - The average number of occupied seats during peak season is higher than non-peak
        seasons. This is reasonable as the name peak season suggests more seats would be
        occupied.
    - The statistics for the economy occupancy are all greater than those for business class
        by a proportion of at least that reflected by the seats available.

A chart for the occupancy rate (the number of occupied seats divided by the number of
available seats) for each travel class is plotted which confirms the above observations.


Assumptions

   •   Fuel usage does not depend on the weight of the aircraft
      All aircrafts are operational throughout the entire year (i.e. no down time)
      Past data (passenger occupancy rate and weather) is a good indicator to future
       performance for this exercise
      No inflation or other taxes are allowed for
      The fuel cost is hedged and remains constant for the year
      Other than the seasonal adjustment, the ticket prices are constant throughout the year
      The crew will work as expected throughout the year (e.g. no sick days or strike
       actions)


Base_Scenario


CP2 Paper 1, 221
This sheet performs calculations on the income, cost and profit of the airline.

We have included the flight number, quarter, day, number of business and economy class
seats occupied and wind speed factor in columns A – F for ease of reference. These are
exactly the same as provided by the data.

Columns G and H calculate the income from business class and economy class tickets per
flight. This is done by multiplying the number of occupied seats (from columns D and E
respectively) by the ticket price and 1 + the seasonal adjustment if the flight is in the peak
season quarters i.e. Q2 or Q3.
Column I calculates the total income per flight which is the sum of the income from business
class and economy class.
Columns J to P calculate the costs for each flight:
Column J determines the fuel cost per flight. This is calculated using:
        Miles flown x fuel usage per mile x fuel cost per gallon x (1 + impact on fuel)
The Impact on fuel is looked up from the table provided (in cells H3:I8 on the parameters
sheet), based on the windspeed factor applicable to that flight.
The number of crew were determined by considering how many sets of crew would be needed
to meet the requirements stated. That being that crew can only serve one flight in any three
day period. As there are 6 flights in each three day period, 6 sets of crew are needed. This is
set as a parameter. The per flight salary will then be Annual Salary / number of flights in a year
x 6.
The salary per flight for the pilot and crew is calculated in D41 (Pilot per flight salary x number
of pilots needed) and D42 (cabin crew per flight salary x number of cabin crew needed)
respectively on the parameters work sheet. These are then brought through to this sheet and
added together in column.
Column L is the cost of using the airport. We have been told by JIT that every odd number
flight departs from New York which has a charge of $25,000 and every even number flight
departs from London which has a charge of $15,000. The respective airport fee is calculated
depending on whether the flight number in column A is odd or even.
Column M calculates the cost of leasing the two aircraft. In order for us to compute this we
first need to calculate the annuity factor for the lease. This is done in cell B4 using the formula
provided:
                            Annuity = (1 – 1/(1 + i) ^no of years)/d
                 Where d = i / (1 + i) and i is the interest rate provided by JIT
The number of flights an aircraft will make during its 25 years of working life is the total
number of flights by JIT in this particular route divided by 2 (as we are told there are two
flights per day). The leasing cost for the aircraft is then
                   Cost per aircraft/(annuity x number of flights per aircraft)


CP2 Paper 1, 221
The above calculation is done in cell B6 and is used in column M.
Column N calculates the environmental tax which is a fixed 25% of the revenue (column I).
Column O is the overhead cost which is fixed at $20,000 per flight.
Column P shows the total cost which is the sum between column J and Column O.
Overall profit is calculated in column Q which is the difference between the total
income/revenue per flight (column I) and total cost per flight (column P)
Profits from business class flight is the income from business class less 20% of the total cost
(column R)
Profits from economy class flight is the income from economy class less 80% of the total cost
(column S)
Summary statistics (min, max, sum, average and standard deviation) for each component of the
revenue and cost are calculated in rows 3 to 7.
A summary of the profit margin is in Columns U to Y:
Sumif function is used to sum up the number of occupied seats in each quarter and ticket prices
in each quarter are shown according to the peak/off-peak quarter. This is done separately for
business and economy class.
The total number of occupied seats and total income are then the sum and sumproduct (seats x
ticket price) respectively of their components in each quarter.
The average ticket price over the year is calculated by dividing the total income by the total
number of occupied seats. This is done separately for business and economy class.
The average profit per seat is calculated by dividing the profit by the total number of occupied
seats. This is done separately for business and economy class.
The profit margin is the average profit per seat divided by the average ticket price. This is done
separately for business and economy class.
The percentage of flights which produce a profit is calculated by counting the number of flights
that produces a profit divided by the total number of flights in the year. This is done using a
countif function on the overall profit in column Q.
Reasonableness checks:
The probability of making a loss is reasonably low which is reasonable given the mean of the
profit is positive and that the maximum of profit is higher than the minimum.
Profit per seat in business class is higher than economy class because business class fare is four
times the economy class fare but only accounts for a fifth of the total cost




CP2 Paper 1, 221
Alt_scenario
This worksheet is a copy of “Base Scenario” worksheet, with the following adjustments:
(these are indicated in the spreadsheet using green shaded cells)

In Column E, the number of economy class seat is now converted to the number of additional
business class seats. This is calculated by dividing the number of occupied economy seats by
3 and round it down to the nearest integer.
In Column H, the income from the additional business class is calculated by multiplying the
number of additional business class seats by the ticket price and the seasonal adjustment if the
flight happens to be in Q2 or Q3.
In Column K, the formula is adjusted to allow for double the number of cabin crew required:
 (Pilot per flight salary x number of pilots needed + cabin crew per flight salary x number of
                                    cabin crew needed x 2)
The split of costs (20% vs 80% for business vs. economy class) is removed from the profit
calculation since there is only business class in this scenario.
All the key profit metrics were calculated again in the same way as the base scenario except
that now there is only business class to be considered.


Reasonableness checks:
The total profit has gone up compared to the Base Scenario which is expected as the business
class fare to economy class fare is 4:1 but the business class to economy class seat conversion
is at less than 3:1
The percentage of flights that produces of profit has gone up which makes sense, as the
increase in income from business class ticket sale is more than enough to cover the additional
crew cost




                                 END OF AUDIT TRAIL




CP2 Paper 1, 221



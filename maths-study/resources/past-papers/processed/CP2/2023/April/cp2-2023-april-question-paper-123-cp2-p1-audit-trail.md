---
normalized_id: cp2-2023-april-question-paper-123-cp2-p1-audit-trail
exam_code: CP2
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 1/Apr23/123_CP2_P1_Audit trail.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2023-april-question-paper-123-cp2-p1-audit-trail

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

April 2023

AUDIT TRAIL

Subject CP2 – Modelling Practice

Core Practices

Paper One

>  Institute and Faculty of Actuaries

Health Programme Review for NHA

**Purpose**

The National Health Agency (NHA) provides health care to its citizens.
It is currently reviewing the effectiveness of its health programme.

We have been asked to produce a model that will evaluate the success and
cost of this programme. In particular, the model:

- Performs checks on the data provided and amend or delete where
  appropriate

- Calculates the number of lives at each of the healthy (H), sick (S),
  very sick (I) and dead (D) states and the transition probabilities
  between states

- Base Scenario – calculates the number of lives in each state during
  the projection period, their associated costs, the total cost of the
  programme (present value) and hence the present value of cost per life
  alive.

- Alt Scenario 1 - Repeats the projection using the transition
  probabilities derived from using Pangloss's (a pharmaceutical company)
  drugs

- Alt Scenario 2 - Determines the price needed for Pangloss's drugs for
  the NHA to keep the total spending constant as base scenario.

**Data**

NHA provided us with a set of health statuses at the start and at the
end of the year, totalling 24,006 data points for 12,003 individuals.
This set of data shows the movement between different health states over
the course of the year.

NHA also provided us with a matrix showing the change to transition
probabilities to be applied in the alternative scenario.

Additionally, they have advised on the following costs:

- Overheads of \$50, \$200 and \$3,000 in H, S, I states respectively
  each year

- A one-off cost of \$250 for individuals who die during the year

- Drug costs of \$150 and \$4,000 in the S and I states respectively
  each year

- There are 1,000,000 healthy individuals at the start of the programme

- For the alternate scenario, drug costs of \$250 and \$6,000 in the S
  and I states

- Overheads and the one-off cost of death inflate at 2% p.a. and the
  drug costs inflate at 5% p.a.

- A discount rate of 4% p.a. is suitable

These are all entered on the **Parameters** sheet.

**Data Checks**

The data was copied from the **Raw_Data** sheet to the **Data_Checks**
sheet using cell references.

The following checks were performed on the data:

1.  No missing statuses

In cells C13 and D13, we count the total statuses at the start and end
of the year and they each add up to the total number of lives so there
are no missing statuses

2.  Check statuses only contain the four health statuses (H, S, I, D)

These are done at columns E and F for the statuses at the start and at
the end of the year respectively. The check shows that there are two
errors: individuals 7107 and 11995 both have statuses that are not one
of the H, S, I or D at the start of the year. In addition 7107’s status
at the end of the year is not in one of the four states either. We
believe the data is corrupted and propose to remove it as a result. We
do not believe this would affect the analysis carried out given it only
affects 2 people out of c12,000.

3.  Check that D is an absorbing state\
    In column G we check that once the member is dead they remain dead.
    The status for 4453 is D at the start of the year and H at the end
    of the year. This is not possible. We believe the data is corrupted
    and propose to remove it as a result.

The three offending data entries were filtered out. The data without
these three offending entries are then copied and pasted in columns K to
L, with the same checks listed above carried out again. The checks show
no errors.

The data is now clean and fit for purpose for our projection.

**Clean data**

The data was copied from the **Data_checks** sheet to the **Clean_data**
sheet using cell references for ease of reference.

In this sheet, we determine frequencies to enable us to calculate the
transition probabilities between states and come up with a transition
matrix (as found on the **Parameters** sheet). There are 16 transitions
in total (between the H, S, I and D states).

To work out the transition probabilities, we first use a countif
function to find the frequency of lives in each transition status. For
example, for the H to H transition, we only count the number of lives
who are healthy at the start of the year **and** at the end of the year
for columns B and C respectively. Similarly for all the other
transitions.

*Reasonableness checks:*

We observed that D is an absorbing state which makes sense as we do not
expect the dead to suddenly become alive.

Most healthy individuals stay healthy over the year which seems
reasonable.

We would typically expect individuals with minor illnesses to recover
and the data appears to reflect this which seems reasonable.

The probability of dying increases the more ill an individual becomes –
this also seems logical.

A chart is plotted for the number of people in each of these four states
at the end of the year. The distribution looks sensible. We expect on
average the healthy will stay healthy and the majority of ‘sick’ people
will recover and become healthy. The transition for people who are in
the ‘very sick’ state is a bit less clear cut. We are not told by NHA
what diseases constitutes as ‘very sick’ but the transitions do not look
unreasonable.

Within the **Parameters** tab of the model, each of the rows in the
above matrix is then divided by the sum of its row to convert the number
of lives at each state into transition probabilities. A check is
performed to show that each of the row sums to 1 – all the transition
probabilities to different states are accounted for.

**Assumptions**

- Inflation assumptions stay constant over the projection period

<!-- -->

- The data provided to us is representative of the population that is
  being projected

- Non-integer number of lives in each state is allowed

- The transition probabilities provided by Pangloss is fit for purpose

- The transition between states happens at the middle of the year

- There is only one transition per individual each year

- Over the projection period, there are no extreme/special events such
  as an epidemic or pandemic.

- The discount rate is assumed to be level over the projection period.

**Base_Scenario**

This sheet projects the number of lives in each of the four states over
the 30-year projection period and calculates the total cost of the
programme (both overall and per life alive).

Columns C to F calculate the number of people in each of these states.
In the first row, we are told that there are 1,000,000 healthy
individuals (and 0 individuals in each of the other three states) at the
start of the programme. From year 1 (row 14) onwards, we multiply the
transition probabilities with the number of individuals in the previous
row to get the number of lives in each of these four states after one
year.

Column G calculates the number of lives alive. This is the sum of the
number of lives in the H, S, I states.

Column H calculates the number of excess deaths in each year by
subtracting the cumulative number of deaths at time t – 1 from time t.

Columns I to L calculates the overhead costs at each state. The first
row uses the costs provided to us by NHA. These costs are then inflated
each year at the inflation rate provided (2% p.a.) from the second row
onwards.

Columns M and N calculates the drug cost at the S state and I state.
Again, the first row uses the drug cost with inflation being allowed for
from the second row onwards.

In columns O to R we sum the overheads and drug costs for each state to
find the combined cost for each state.

The cost for an individual for each year is the average of the costs of
the opening and closing state except where the closing state is dead
(D), in this case the annual cost is half the cost of the opening state
plus the full one-off cost of \$250 per death.

To work out the overall cost each year we multiply the number of people
in each state by the total cost spent at each state (columns S to V).

Column W sums up the total costs in each of the four states every year
to get the total cost of the programme.

The discount rate is calculated to be 1 / (1.04)^(number of years) in
column X.

Column Y works out the present value of the total cost of each year by
multiplying the discount rate in column X by the overall cost in Column
W. The total PV of the programme is then calculated in cell Y9 by
summing the PVs of all years.

The real cost per life alive (column Z) is then the overall PV of cost
at the start of each year (column Y) divided by the number of lives
alive at the start of each period.

*Reasonableness checks:*

The present value of the cost of the programme came to c\$8.8bn. This
seems to be consistent with the NHA budget of \$9bn.

**Alt_scenario_1**

This worksheet is a copy of “Base Scenario” worksheet, with the
following adjustments:

- The transition probabilities used in columns C to F are now linked to
  the transition improvements provided by Pangloss (cells C32:F35 in the
  parameters tab), in addition to the one we derived using the data
  provided by NHA in the base scenario. This is calculated as:

original transition probabilities + (t - 1) \* transition improvements

- Similar change is made to the cost per state times population
  calculation in columns S to V.

- The drug costs in columns M and N now reference the drug cost provided
  by Pangloss (cells B37 and B38 in the parameter tab)

No other changes are made compared to the base scenario.

*Reasonableness checks:*

More people are alive at each year in the projection period. This is
consistent with the transition matrix provided by Pangloss. So, using
Pangloss’s drugs NHA is likely to achieve a better result (as measured
by the number of lives alive) for its programme.

However, the cost has gone up to \$10bn which is over NHA’s budget. This
is not unreasonable given the new drugs cost significantly more than
those in the base scenario.

**Alt_scenario_2**

This worksheet is a copy of “Alt_Scenario_1” worksheet, with the
following adjustments:

- The drug costs for the S and I states in cells M14 and N14 now refer
  to the new drug cost in the parameters tab (cells B41 & B42). The new
  drug cost is set up such that the drug cost in the I state is 20 times
  that in the S state

- The initial drug cost in the I state (cell B41 in the parameters tab)
  does not matter and I have left it at \$250 as an initial guess

- Cell Z9 now calculates the difference between the PV of the total cost
  between the base and this scenario

- A goal seek is performed to make cell Z9 to 0 by changing the drug
  cost in the I state in cell B45 in the parameters tab

- A check on the goal seek is carried out in cell AA9. If the absolute
  difference between our new total cost in this scenario and that in the
  original scenario is less than 0.1, then it would show “goal seek
  okay”, otherwise it will prompt the user to goal seek again.

*Reasonableness checks:*

The drug costs using goal seek is less than that in the alternative
scenario 1, which is reasonable, given the total real costs in the
alternative scenario 1 exceeds that of the original scenario.

**Charts**

This worksheet produces two charts:

- One chart to illustrate the number of lives alive throughout the
  projection period under the base and alternative scenario

- One chart to illustrate the real cost per individual alive under each
  of these three scenarios

**END OF AUDIT TRAIL**



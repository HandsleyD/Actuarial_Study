---
normalized_id: cp2-2023-september-question-paper-223-cp2-p2-summary-document-v1
exam_code: CP2
year: 2023
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Sep23/223_CP2-P2_Summary Document_v1.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2023-september-question-paper-223-cp2-p2-summary-document-v1

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

> September 2023

## Subject CP2 ‑ Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**
>
> ** Institute and Faculty of Actuaries**

**Overview**

Our client, Dr Hilbert, the owner of the Hilbert’s Hotel, has engaged
our firm to help him look for ways to increase profits. Hilbert’s Hotel
currently has 100 standard rooms.

We propose that Hilbert’s Hotel should convert some of its standard
rooms into premium rooms which command a higher price. We look at
different standard room to premium room ratios and determine the
combination that yields the highest profits.

The profits and room utilisation rate pre-renovation and post-renovation
are calculated to validate our analysis.

Our understanding is that Dr Hilbert is risk averse and would not like
the average 5<sup>th</sup> largest daily loss in a month (“Risk Metric
1”) and the average of the average five largest daily losses (“Risk
Metric 2”) to exceed those in the pre-renovation scenario. So we have
considered two additional scenarios where we increase the nightly room
rates to maintain this relationship.

**Data**

An external consultancy has provided us with the projected demand for
standard rooms and premium rooms across 500 daily simulations over a
month.

Our market research has determined that:

- The average nightly rates are \$150 for a standard room and \$375 for
  a premium room (i.e. 2.5 times the standard room).

- The cost of servicing these rooms is \$20 per day for standard and
  \$35 per day for premium rooms. Only occupied rooms need servicing.

- Overheads are \$30 per day for a standard room and \$70 per day for
  premium. Overheads are a fixed charge based on the number of rooms
  (whether occupied or not) in the hotel.

- The renovation cost is \$100 per day for every two standard rooms
  converted to a premium room. A premium room is twice the size of a
  standard room.

**Assumptions**

- The simulations provided are correct and fit for purpose

- Renovation cost is spread equally between standard and premium rooms

- There are no additional overheads for room upgrade

- There are only 30 days in a month.

- Day 1 simulations used for the renovation analysis are representative
  of monthly results.

- **The demand simulations are independently distributed.**

- **There is no impact on the demand of the standard rooms when premium
  rooms are introduced.**

- **There are no seasonality effects.**

- **The demand for standard and premium room is inelastic/price
  insensitive.**

- **Any change in price of the standard or premium rooms will not impact
  demand.**

**Data verification**

Summary statistics (minimum, maximum and average) are calculated for the
simulation data provided. There are no negative or non-integer demand
figures. The minimum, maximum and average all look sensible for both the
standard and premium rooms.

Dr Hilbert has also been consulted and confirmed that the projected
demands look reasonable.

**Methodology**

*<u>Pre-renovation</u>*

We have projected the profits for the standard rooms for the expected
demand over 500 daily simulations for a month. These projections
include:

- An allowance for a cap on the demand. The hotel only has 100 standard
  rooms. If the demand in a particular simulation is over 100, the
  number of standard rooms occupied will be capped at 100.

- Profit is then calculated as the capped demand x (standard room price
  ‑ standard room servicing cost) ‑ number of standard rooms in the
  hotel x overheads

- The average daily profit is calculated as the average over the 500
  daily simulations.

- The 5<sup>th</sup> largest daily loss is calculated by identifying the
  5<sup>th</sup> worst loss in the 500 simulations for each day.

- The average five largest daily losses is calculated by identifying the
  five largest daily losses amongst the 500 simulations and taking
  average of those five losses.

The monthly projected profit is then the sum of the average daily profit
across the month. Risk Metric 1 is calculated by taking the average of
the 5<sup>th</sup> largest daily losses across the month and Risk Metric
2 is calculated by taking the average of the average five largest losses
over the moth.

The utilisation rate, which is the average of the capped demand across
all simulations on each day divided by total number of rooms of that
category, is also calculated.

*<u>Renovation</u>*

Note we are only considering the Day 1 simulations for the renovation
analysis.

We consider converting some of the standard rooms into premium room at a
2:1 ratio (so a standard room occupies one unit and a premium room two
and the number of units in the hotel must add up to 100).

First, we need to consider the profits from standard rooms. The
calculation is the same as above, namely:

Capped standard room demand x (standard room price – standard room
servicing cost) – number of standard rooms in the hotel x standard room
overheads

Next, we need to consider the Day 1 profits from premium rooms. The
calculation is exactly as the formula for standard rooms above, except
we replace the standard room parameters with those of premium rooms.

The hotel guests can be upgraded from a standard room to a premium room
at no additional cost if all standard rooms are occupied and there is
excess standard room demand and there are still premium rooms available
after all the premium room demand has been met.

The number of rooms available for upgrade is the difference between the
number of premium rooms available and the number of occupied premium
rooms.

The excess demand for standard rooms is calculated as the difference
between the standard room demand and the number of standard rooms
available; this difference is floored at 0.

The number of upgrades filled is the minimum of the number of premium
rooms available for upgrade and the excess demand for standard rooms.

The profit from the upgrades is the number of upgrades filled x
(standard room price ‑ premium room servicing cost).

The renovation cost is the number of premium rooms converted x
renovation cost.

The overall profit is then:

Profits from standard rooms + profits from premium rooms + profits from
upgrade ‑ renovation cost

To find out the optimal rate of premium room conversion we project the
profits calculation for each scenario from 0 to 50 premium rooms at a
step of 5 premium rooms. There are 11 scenarios ranging from 100
standard rooms, 0 premium rooms to 0 standard rooms, 50 premium rooms.

It is found that having 20 premium rooms and 60 standard rooms will
maximise the profits.

*<u>Post-renovation</u>*

We repeat the projection that we have done for pre-renovation but this
time using 60 standard rooms and 20 premium rooms as the basis for the
projection and allowing for any profits from upgrades.

The utilisation rates are calculated separately for standard rooms,
premium rooms and upgrades.

Summary statistics (the average monthly profit, Risk Metric 1 and Risk
Metric 2) are calculated at the overall level, split between standard,
premium room and upgrades.

*Additional requirements*

Our understanding is that Dr Hilbert is risk averse and he would not
like Risk Metric 1 or Risk Metric 2 to exceed those in the pre-renovated
hotel. In the first scenario, we repeat the post-renovation calculation
above, but we vary the nightly room rates using goal-seek (while leaving
the premium room rate to standard room rate ratio of 2.5 unchanged) such
that Risk Metric 1 in this scenario equals that in the pre-renovation
scenario.

For the second scenario, we repeat the same calculation as above, except
we vary the nightly room rates using goal seek such that Risk Metric 2
in this scenario equals that in the pre-renovation scenario.

Note that the two goal seeks are independent to each other.

**Results**

The chart below illustrates the relationship between profits and the
number of premium rooms converted:

<img src="media/image1.emf" style="width:5.27222in;height:3.25625in" />

The pre-renovation scenario is where there are 0 premium rooms in the
hotel.

Up to 20 premium rooms conversion: the more premium rooms converted, the
more profit the hotel will make because reducing the number of standard
rooms have limited impact on profit as their utilisation rate was low
and the introduction of premium rooms brings in more profits. This
explains why the line is upward sloping.

Beyond 20 premium rooms conversion: profits start to decrease and
eventually becomes worse than pre-renovation because of diminishing
marginal return. When the supply of standard rooms outstrips that of the
demand, more upgrades from standard to premium room will be available at
no extra cost, reducing profits. This explains why the line is downward
sloping.

Converting 40 standard rooms into 20 premium rooms is the optimal
conversion as it maximises profits. The projected monthly profit has, as
expected, increased from the original scenario where there were 100
standard rooms in the hotel.

The chart below illustrates the room utilisation rates of the hotel:

<img src="media/image2.emf" style="width:5.00833in;height:3.00833in" />

The utilisation rate profile is flat and fluctuates within a narrow
range. This indicates demand doesn’t fluctuate within the ‘typical
month’ provided. We would however typically expect demand to surge
during the weekends but this is not observed in the chart because
average is taken across each day of the month which will average
weekends out over a year.

The utilisation rate pre-renovation is not great as the hotel is only
occupied on average 50% of the time. This means overheads, which is a
fixed cost, will eat into profits.

The utilisation rate post-renovation has improved significantly because
some of the standard rooms are converted into premium rooms. This allows
a better matching between their respective supply and demand and
improves utilisation rate.

The upgrade has further increased utilisation rate of premium rooms by
c2%-3%, bringing in additional profit (albeit lower than that of premium
rooms but still better than turning guests away due to unavailability of
standard rooms).

The following chart illustrates the ranked day 1 profit by simulation in
the post-renovation scenario:

<img src="media/image3.emf" style="width:6.5in;height:2.9in" />

One immediate observation is that the distribution is fat-tailed as a
few losses are significant. Those losses happen when there is a very low
demand for rooms and the hotel will still incur overheads.

The rest of the curve follows a steady upward sloping pattern as we
would expect given that we have ranked them in ascending order and the
utilisation rate is broadly steady from the previous chart.

The curve eventually becomes level, and the profit is capped at \$9,400.
This happens when the hotel is at full occupancy.

The nightly rates for the standard and premium rooms for each of the
scenarios are as follows:

| Nightly rate | Pre-renovation | Post-renovation | Post-renovation RM1 | Post-renovation RM2 |
|----|:--:|:--:|:--:|:--:|
| Standard room | \$ 150 | \$ 150 | \$ 152 | \$ 157 |
| Premium room |  | \$ 375 | \$ 379 | \$ 392 |

The nightly rate for the pre-renovation and post-renovation are based on
market research. Since Risk Metric 1 and Risk Metric 2 are higher than
those in the pre-renovation scenario, higher prices needed to be charged
in the post-renovation scenario to compensate such that the two loss
metrics are no worse than before.

The following chart illustrates the monthly profits pre-renovation,
post-renovation and post-renovation updated for each of the two Risk
Metrics, split by standard rooms, premium rooms and upgrades.

<img src="media/image4.emf" style="width:6.20833in;height:3.00833in" />

Pre-renovation: the hotel can meet all demands most of the time, but the
utilisation rate remains low, limiting profits.

Post-renovation: standard room profit has gone down slightly even though
demand for standard rooms has remained unchanged. This is because some
guests may now be turned away given there are not as many standard rooms
as before and that renovation cost will need to be accounted for. This
is partially offset by reducing overheads wastage (previously the hotel
was paying overheads on unoccupied rooms).

Even though the demand for premium rooms is lower than that of standard
rooms, the higher price means premium rooms still bring in decent
profits.

Profits from upgrades are small but positive, reflecting the fact that
the occurrence of an upgrade is not very high. An upgrade always makes a
profit, as the cost of cleaning a premium room is lower than the rate
paid for a standard room.

Profits from both the Risk Metric 1 and Risk Metric 2 scenarios are
higher than that in the post-renovation scenario because of the highly
nightly rates they are able to charge.

The following chart illustrates Risk Metric 1 and Risk Metric 2, split
by scenarios.

<img src="media/image5.emf" style="width:5.00833in;height:3.00833in" />

Risk Metric 2 results are lower (more negative) than Risk Metric 1 in
all scenarios. This is reasonable given Risk Metric 1 only captures the
5<sup>th</sup> worst loss whereas Risk Metric 2 captures the average of
the five worst losses. The loss metrics are lower in pre-renovation as
the hotel is very unlikely to have to turn away guests.

Losses mainly come from overheads when the hotel is not sufficiently
occupied. Both Risk Metric 1 and Risk Metric 2 are higher in the post
renovation scenario compared to the pre-renovation scenario. Here again,
losses come from overheads when the hotel is not sufficiently occupied.
However, there is also the renovation cost to pay, resulting in higher
losses.

Risk Metric 1 and Risk Metric 2 are set to be the same as that in the
pre-renovation in their respective post-renovation scenario as required,
which will push up the nightly rates as seen in he rates table above.

**Conclusions**

Converting 40 standard rooms to 20 premium rooms will help Hilbert’s
Hotel maximise its profits. To make sure that the losses are not worse
off after renovation, the nightly room rates will have to be increased.

Our analysis is based on the assumption that the demand for hotel rooms
is inelastic. This assumption will need to be revisited in future to see
if it gets borne out in practice.

If any of these assumptions changes, we would need to redo the
conversion analysis to see if having 20 premium rooms in the hotel is
still the optimal option.

The actual profits will depend on the actual demand and these could vary
significantly from those assumed here.

**Next steps**

- Check that the data provided is correct and fit for purpose.

- Verify the simulation data from an independent source.

- More realistic modelling of demand assumption:

  - Model guest demand as a price-demand curve as in reality guests will
    be price sensitive

  - Consider other factors that might affect demand, e.g. seasonality,
    weekends, sporting events, conferences etc

- The simulation data provided assumes demand for rooms is independent ‑
  in practice guests are likely to stay for more than one night during
  their stay so will need more granular data for this analysis. Groups
  travelling together will also affect demand in a dependent way.

- Repeat the renovation projection in a smaller step size to find the
  most optimal premium to standard room split

- Consider if conversion ratio other than 2:1 premium/standard room
  split is possible. Perhaps three standard rooms could be converted
  into 2 mid-level rooms, or three standard rooms converted into a
  luxury suite.

- Consider impact to hotel during the renovation, e.g. would the hotel
  be able to operate at normal capacity during the renovation

- If the risk of large potential losses is a concern, consider
  converting the rooms based on optimising the Risk Metrics or some form
  of risk-adjusted profit measure

- Check source of funding and if debt servicing cost or cost of capital
  will need to be allowed for

- Extend the analysis for a longer time horizon. This will be more
  likely to bring out the impact of seasonality.

- Perform cashflow analysis to see if there is sufficient liquidity to
  absorb the worst 5 average largest losses

- Check if modelling the average or worst five largest losses is a
  reasonable approach. Other approaches could be the number of losses,
  or median profit.

- Explore and confirm if seasonality is a factor to demand

- Consider dynamic pricing to increase utilisation rate and profits

- Stress testing ‑ consider shock events such as war or pandemic on
  occupancy and profit

- Update the model with actual demand experience as it emerges

- Allow for tax in the modelling of profit, e.g. renovation cost may be
  tax deductible

- Obtain a peer review of the model.

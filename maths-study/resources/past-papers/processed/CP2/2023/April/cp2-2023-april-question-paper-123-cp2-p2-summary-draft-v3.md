---
normalized_id: cp2-2023-april-question-paper-123-cp2-p2-summary-draft-v3
exam_code: CP2
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr23/123_CP2-P2_Summary_Draft v3.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2023-april-question-paper-123-cp2-p2-summary-draft-v3

> **INSTITUTE AND FACULTY OF ACTUARIES**

**EXAMINATION**

April 2023

## Subject CP2 – Modelling Practice

## Core Practices

## 

## Paper 2

> **SUMMARY**
>
> ** Institute and Faculty of Actuaries**

**Chinchilla farming project**

**Purpose**

The purpose of this project is to assess the profitability of a
chinchilla farm. The farmer breeds chinchillas for sale to a local
market. After being born, the farmer will look after the chinchillas for
a period of 12 months. After 12 months, the chinchillas will be sold at
market if they weigh between 5kgs and 6.5kgs. Chinchillas weighing more
than 6.5kgs are kept by the farmer for breeding. Expenses are incurred
for the birthing and care of the chinchillas and so the farmer wishes us
to consider 30 cohorts of chinchillas to determine the profit and profit
margin that is expected to be made.

The farmer is also worried about the impact of adverse weather (defined
as a scenario when the average temperature over a 12-month period is
less than 20<sup>o</sup>C) as this will impact the growth and survival
of the chinchillas. The project will also calculate the impact on
expected revenue, expenses, profit and profit margin if there is adverse
weather. Finally, the project will calculate a revised monthly cost per
cohort such that the profit margin under the adverse weather scenario
will be the same as the profit margin as that calculated under the base
scenario (where there will be normal weather conditions).

**Data**

The farmer has provided us with the birth weights (in kilograms) for 10
cohorts of chinchillas. Each cohort has 30 chinchillas. The farmer has
advised that the birth weights of the chinchillas are expected to follow
a lognormal distribution with parameters mu = 1.15 and sigma = 0.1. A
reputable agricultural journal has also specified that the chinchillas
should have a minimum birth weight of 2.4 kgs and a maximum birth weight
of 4.0kgs.

The farmer has also provided us with the following costs that are
expected to be incurred for the birth and care over the 12-month period
for the chinchillas:

- The birthing cost is a fixed amount of \$2.00 per chinchilla.

- The variable feed cost is \$0.50 per kilogram of the maturity weight.

- The monthly cost, per cohort, is \$30.00 for labour and utilities.
  Part of the labour cost is a discretionary bonus that the farmer
  awards his workers based on the outcome of the sales season.

The farmer has provided the expected monthly growth rates from birth to
maturity at month 12.

The current market price of chinchillas is \$5.00 per kg.

Our firm’s analytics team has provided the survival probabilities over
the 12-month period (related to the natural logarithm of the
chinchilla’s birth weight) under normal weather conditions. They have
also advised on how the growth rates are affected by adverse weather
conditions.

**Data checks**

The data provided has been checked against the information provided and
the data is reasonable. In particular:

- All probabilities of survival are between 0 and 1.

- All birth weights provided by the farmer are between 2.4kgs and 4.0
  kgs.

- Growth rates per month are between 0% and 100%.

**Assumptions**

- **Interest rate earned on the cashflows can be ignored given the
  cashflows span over a relatively short period.**

- **Expense inflation can be ignored.**

- **Data provided and decrements will be appropriate for the future
  periods.**

- Other decrement (apart from mortality) have negligible impact on
  profits and can be ignored (e.g. stock theft and morbidity).

- No other material expense components will be incurred.

- For purposes of variable feed cost calculations, deaths are assumed to
  occur halfway through the 12- month period.

- All chinchillas that meet the weight requirement will be sold at the
  market i.e. there will be sufficient demand for the number of
  chinchillas that make it to the market.

- There is no further reduction in growth rates or probabilities of
  survival if the average temperature is significantly below
  20<sup>o</sup>C.

- Other factors affecting the growth and survival rate of the animals
  remain unchanged.

- Any reduction to the discretionary bonus would not result in lower
  productivity, which would require more labourers.

- No future costs in relation to the chinchillas that are less than 5kgs
  or more than 6.5kgs after the 12-month period needs to be factored
  into the profit calculations.

**Methodology**

***Calculation Under Normal Weather***

The growth factors for each of the 12 months for each of the 30
chinchillas in a cohort has been calculated based on the data provided
by the farmer i.e. (1+growth rate). The survival probabilities for each
chinchilla in each cohort is also looked up based on ln() of the birth
weight of each chinchilla.

The maturity weight for each chinchilla is then calculated by
multiplying each chinchilla’s birth weight by the product of growth
factors over the 12-month period. The expected survival weight is
calculated as the maturity weight multiplied by the expected probability
of survival for each chinchilla.

From this information, the total maturity weight for each cohort
(ignoring the probability of survival) has been calculated. The expected
survival weight is then calculated for each chinchilla in each cohort.
If the maturity weight is outside the weight range that can be sold in
the market, then the expected survival weight is set to zero. Otherwise,
the expected survival weight is calculated as the maturity weight
multiplied by the probability of survival. The total survival weight
that will be sold at the market for each cohort is then calculated by
summing the expected survival weights for each cohort.

The revenue for each cohort is calculated by multiplying the sum of the
expected survival weights by the selling price per kilogram.

The expenses of raising the chinchillas incorporates:

- Birthing cost – calculated as the sum of animals born multiplied by a
  fixed \$2 per animal.

- Feeding cost – this is directly proportional to maturity weight,
  therefore the feeding cost is calculated as total maturity weight
  (adjusted for deaths) multiplied by cost per kilogram of maturity
  weight (\$0.5 per kg).

- Monthly costs – to cover bills and labour, the farmer incurs a monthly
  cost \$30 over a raring period of 12 months which totals \$360.

The profit from each cohort is determined as the difference between
Revenue and Expenses. Furthermore, a profit margin for all the cohorts
is calculated as sum of profits for all cohorts divided by the sum of
revenue for all cohorts.

***Calculation Under Adverse Weather***

The calculations above are repeated but with the following adjustments.

- Survival probability is reduced by 7.5% for each weight category

> i.e. Survival Probability under adverse weather = Survival Probability
> Under Fair Weather X (1- 7.5%)

- Growth rates are lower by 10% for all months

i.e. Growth Factor under normal weather X (1-10%)

This produces revised profits and profit margin.

The level of monthly costs are then amended by linking to a new
parameter so that the revised profit margin is the same as the profit
margin under fair weather. This is calculated using a goal seek.

**Results**

The chart below shows the distribution of the natural logarithm of the
birth weights of all 360 Chinchillas (i.e. 30 Chinchillas in the 10
cohorts)

<img src="media/image1.png" style="width:5.27361in;height:3.12708in" />

The distribution of natural logarithm of birth weights forms a bell
shape with highest frequency around 1.15 and 1.2. This suggests a normal
distribution is appropriate for the log of birth weights and therefore
validating the assumption that weights follow lognormal distribution. We
were advised that the mu of this distribution was 1.15 and this
corresponds to where the highest frequency is.

The frequency is nil below 0.9 and above 1.4. This is consistent with
the information from the agricultural journal that stated the minimum
weight is 2.4kgs \[ln(2.4) = 0.875\] and the maximum weight is 4.0kgs
\[ln(4.0) = 1.386\].

The chart below provides the cost components and the profit under normal
weather (blue), under adverse weather before expense adjustment (orange)
and under adverse weather after lowering monthly expense (green).

<img src="media/image2.png" style="width:5.31184in;height:3.37458in" />

|  | Normal weather | Adverse weather | Adverse weather & lower expenses |
|----|----|----|----|
| Revenue | 5,498 | 5,269 | 5,269 |
| Birthing Cost | 600 | 600 | 600 |
| Feeding cost | 855 | 775 | 775 |
| Monthly cost | 3,600 | 3,600 | 3,469 |
| **Profit** | **443** | **294** | **424** |
| **Profit Margin** | **8.1%** | **5.6%** | **8.1%** |

The revenue has reduced from between the normal weather and adverse
weather scenarios because growth rates and survival rates have both
reduced. Therefore, the number of chinchillas surviving the 12-month
period will have fallen and the weights of chinchillas at the end of the
12-month period will be lower. As the revenue generated is based on the
weight of surviving chinchillas at the end of the 12-month period, the
above factors will cause the revenue to reduce.

The feeding costs are lower under adverse weather as this is a function
of maturity weight which is lower due to low growth rates. Colder
temperatures also cause lower survival probability which translates to
lower feeding cost as fewer animals will need to be fed for the full 12
months period.

The monthly cost does not change between the normal weather and adverse
weather scenarios because this is a fixed monthly cost and is not
dependent on the surviving chinchilla weights (except for 3rd scenario
where a lower monthly cost has deliberately been found using goal seek).

As expected, birthing costs are unchanged as this is a based on the
number of animals born at the start of the season and the chinchillas
born does not vary between scenarios.

The project makes a profit of \$443 under normal weather which
deteriorates to about two thirds of that under adverse weather if the
monthly costs remain unchanged.

The profit margin under the adverse weather scenario has also reduced
compared to that of the normal weather scenario. The proportionate
reduction of the profit and the profit margin is not the same.

The reduction in profit and profit margin under adverse scenario shows
that the reduction in feeding expenses under adverse weather is not
adequate to offset the impact of lower revenue under this scenario.

In order for the project under adverse weather conditions to make the
same profit margin as that under normal weather conditions, the monthly
cost needs to reduce from \$30 per month to \$28.91 per month. The
revenue under the “adverse weather and lower expenses” scenario is the
same as the adverse weather scenario. This is appropriate as there is no
change to the growth rates or the survival probabilities. This expense
reduction together with the reduction in feeding cost will offset the
impact of lower revenue in the profit margin calculation.

The chart below provides the cost components and profits as proportions
of revenue collected.

As expected, the profit margin under the normal weather is the same as
the profit margin under adverse weather and after implementing cost
control measures.

Monthly costs represent a significant proportion of the revenue. If
expenses are not adjusted under adverse weather, the profit margins
reduce significantly but remain positive.

Because the revenue under adverse weather is lower than under normal
weather, the proportion of birthing costs is higher even though the
nominal amount is the same across all scenarios.

The feeding cost as a proportion of revenue show a decrease of about 1%
from 15.6% under normal weather to 14.7% under adverse weather.

**Conclusion**

The chinchillas project could result in profit margins of 8.1% in normal
weather.

Adverse weather results in significantly lower profits due to poorer
growth rate and lower chances of survival to maturity.

A reduction in discretionary expense would improve profitability in the
event of adverse weather. Monthly costs represent a significant
proportion of the revenue.

The model provides some valuable insights but the actual cashflows would
be based on actual growth experience and prevailing market prices.

**Next steps**

1.  The model needs to be peer reviewed.

2.  Allow for time value of money in the cashflow.

3.  Allow for inflation on expenses

4.  Use a different profit measure e.g. IRR?

5.  Validate breeding data by comparing data with market data from other
    farms.

6.  Validate market prices and weight restriction with other sources
    e.g. other published sources.

7.  Verify suitability of underlying log normal distribution for the
    chinchillas birth weights and the parameters

8.  Perform sensitivity analysis on the costs incurred by the farmer to
    identify how much the profits may vary.

9.  Perform sensitivity analysis on the reduction in growth rates and
    probabilities of survival under the adverse weather conditions
    scenario i.e. how much will the profit change if the reduction in
    these rates are higher than 10%.

10. Allow for future costs/revenue from chinchillas that weigh less than
    5kg or more than 6.5kgs after the 12-month period.

11. For the adverse weather scenario, investigate other remediation
    mechanism e.g. investigate the additional costs and impact on profit
    margins of raising the chinchillas in a heated environment i.e. do
    the heating costs outweigh benefit of generating the original level
    of revenue.

12. Check how competitors are dealing with variability of weather to
    reduce the impact on project cashflow.

13. Is there a breed that thrives in lower temperature environment that
    can be kept at the farm to diversify cashflows?

14. What other risks could affect the project. Morbidity perhaps? Expand
    the model to investigate how morbidity could affect the project’s
    cashflows and together with mitigating options.

15. Investigate the use of futures to hedge the risk of poor yield or
    investing in weather index which pays out in the event of cold
    weather and therefore smooths out the cashflows from the animal
    project.

16. The farmer should consider lobbying the market to accept lower
    weight animals or higher sale price especially when weather is
    adverse in order to increase the sales revenue

17. Can the feeding cost be reduced by growing own feed onsite?

18. Consider the impact of extending the breeding period under adverse
    weather to allow chinchillas more time to grow.

19. Update the model over time with experience



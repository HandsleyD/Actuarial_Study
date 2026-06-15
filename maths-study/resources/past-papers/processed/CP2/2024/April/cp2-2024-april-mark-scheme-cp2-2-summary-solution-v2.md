---
normalized_id: cp2-2024-april-mark-scheme-cp2-2-summary-solution-v2
exam_code: CP2
year: 2024
sitting: April
document_type: mark-scheme
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr24/CP2-2_Summary Solution_v2.docx
conversion_method: pandoc
qa_status: pending
---
# cp2-2024-april-mark-scheme-cp2-2-summary-solution-v2

INSTITUTE AND FACULTY OF ACTUARIES

EXAMINATION

April 2024

SUMMARY SOLUTION

Subject CP2 – Modelling Practice

Core Practices

Paper Two

> Institute and Faculty of Actuaries

**Model Solutions - Summary**

**Background**

A computer manufacturing company is considering moving its production to
a new factory. The objective of this project is to assess the impact of
this proposal on the company’s profits over the next five years.

It is believed that the demand for computers will be driven by the
Interbank Interest Rate (“IIR”). Therefore, historic data (of IIRs and
actual demand of computers) has been used to determine a linear
regression model and this has been used to determine future demand for
computers. A cashflow projection model has then been prepared to
calculate the net present value of the two options:

- Continue production in the existing factory (Plant A); and

- Build a new factory for production of these computers (Plant B).

The model has been further developed to limit the production of
computers to meet the demand for the computers. An adverse economic
scenario has also been considered.

**Data and data checks**

The computer manufacturing company has provided us with the historic
demand data of computers for the last 60 months. In addition, the
historical IIRs for the same period has been obtained from the Reserve
Bank’s website.

Data checks have been completed on this data and the data seems
reasonable. The checks confirm that demand is always expected to be
non-negative and suggests that demand for computers will increase when
IIRs increase.

The forecasted IIRs under normal economic scenario for the future 5
years were obtained from the annual report of a reputable econometrics
consulting firm.

The manufacturing company has also confirmed production capacity levels,
costs and revenue for each of the manufacturing plants, namely:

|                                 |     Plant A     |     Plant B     |
|:-------------------------------:|:---------------:|:---------------:|
| Production capacity (per month) | 1,020 computers | 2,040 computers |
| Average staff Costs (per month) |     \$8,000     |    \$10,000     |
|       Number of employees       |       80        |       20        |
|   Raw materials per computer    |      \$200      |      \$200      |
|   Construction costs of Plant   |       n/a       |  \$100million   |
|      Revenue per computer       |     \$2,000     |     \$2,100     |

**Assumptions**

1.  The variance of the residuals of the interbank rates is the same.

2.  The monthly observations are independent.

3.  There are no other costs associated with the manufacture of the
    computers.

4.  Capital expense outlay occurs at the beginning of the period.

5.  Raw material costs, staff costs and revenue are assumed to be spread
    evenly over the year.

6.  **The computers are only produced by this company and the demand
    only relates to these computers. There are no substitutes to meet
    this demand.**

7.  **All computers produced will be suitable for sale – there will be
    no computers produced that are unsaleable.**

8.  **Demand in a month is not impacted by the number of days in a
    month.**

9.  **The sale price of the computers and raw material costs will not
    increase over the five-year projection.**

10. **60 months data points are sufficient to estimate the linear
    regression parameters**

11. **Linear regression is sufficient to model the relationship between
    demand and IIR.**

12. **Employees who resigned are replaced immediately at about the same
    salary levels.**

13. **Staff costs are not reduced when production is capped according to
    demand.**

14. **There are no other costs associated with setting up the new plant
    e.g. licenses, regulatory costs.**

**Methodology**

*Linear regression*

Using the demand data and the IIRs for the historic five-year period
standard Excel Linear Regression functionality was used to find the
intercept and the slope for the linear regression equation.

To assess the goodness of fit of the linear relation the T-test values
were reviewed, which indicate that there is no reason to doubt that a
relationship between IIR and demand exists.

In addition, the coefficient of determination indicates that about 65%
of the variability in explained by the liner regression equation fitted.

*Cashflow projection*

The cashflow projection has been completed for both plant A and Plant B
in the same manner, using their respective parameters. Using the linear
regression equation, the expected demand of computers for each of the
next five years is calculated based on the expected IIR for each year.
As the formula calculates monthly demand, the annual demand is
calculated by multiplying the monthly demand by 12. The expected demand
will be the same for both plants.

The maximum production capacity is considered for each plant (this is
calculated as the monthly capacity multiplied by 12). The number of
computers sold is determined as the minimum of the number of computers
produced and the expected demand level for the year.

The revenue for each year is then calculated based on the number of
computers sold and the expected sale price of the computers (which
varies by plant).

The annual costs for each year is also calculated and this includes:

- Capital expense incurred which is the cost of building a plant for
  Plant B and zero for Plant A.

- The cost of raw materials which is calculated as the number of
  computers produced multiplied by cost of components required to
  produce each computer.

- Staff costs calculated as number of employees for the respective plant
  multiplied by the monthly salary for that plant, multiplied by 12.
  These costs are assumed to increase from year 2 onwards in line with
  the salary inflation rate.

The net cashflow for each year is then calculated as the revenue less
costs. A discount factor for each year is calculated assuming cashflows
occur on average half way through the year.

To determine the net present value of the profits over the five-year
period, the net cashflow for each year multiplied by its respective
discount factor and summed, with an adjustment made to the capital
expense cashflow as this is known to occur at the start of year 1.

*Cashflow projection for capped production*

The same calculations are repeated as before but in this case, the
number of computers produced is capped at the expected level of demand
for both Plant A and B.

*Adverse economic scenario*

The “cashflow projection for capped production” calculations are
repeated for both Plant A and Plant B but the following adjustments are
made:

- The IIR for each year in the five-year projection is reduced to 50% of
  the rate under normal economic conditions.

- Production capacity is lower with the number of computers produced by
  Plant A and B being 40% and 10% lower respectively than under normal
  economic scenario for all 5 years projected.

- the salary increases have been reduced by 75%.

**Results**

*Linear regression*

Based on the data provided, we have completed some regression analysis
and the relationship between the market demand for the computers and the
IIR can be defined using the following formula:

Expected monthly demand = 4,032 x IIR<sub>t</sub>+ 1,812

This suggests that there is a base demand for the computers of 1,812
units and the demand increases based on the IIR in that particular year.
However, the variability of demand is quite small. For example, an
increase in the IIR of 1% would only increase expected monthly demand by
40 computers.

The chart below shows the historic demand against historic interest
rates and includes the regression line.

The chart again confirms that demand for the computers increases as the
IIR increases.

In general, the historic experience is relatively close to the
regression line.

There are a few outliers at around 4% and 6.5% where demand is
significantly lower than predicted which could be explained by other
economic factors that occurred at those periods of time.

The P-values are sufficiently small (less than 5%) to reject the null
hypothesis that there is no relationship between the IIR and the demand

The R-squared factor is about 0.65 which suggests that the linear
equation accounts for about 65% of the variability in demand. As
mentioned before, it is likely that other economic factors will impact
demand for computers.

*Predicted demand*

Using the regression analysis, we have predicted the level of demand for
the next five years, based on the expected IIR for this period as
follows:

| Year | Predicted IIR | Expected Demand (computers) |
|:----:|:-------------:|:---------------------------:|
|  1   |     5.00%     |           24,168            |
|  2   |     5.50%     |           24,410            |
|  3   |     5.75%     |           24,531            |
|  4   |     6.00%     |           24,652            |
|  5   |     6.00%     |           24,652            |

The variability of the expected annual demand is relatively small at
less than 500 computers. This is reasonable given the predicted IIR is
only expected to move by 1.0%.

Given the capacity of each plant, Plant A would be only able to meet
roughly half of the demand for computers. Plant B would be able to meet
most of the demand – in years 3 to 5, a small amount of demand would not
be met.

*Cashflow projections – normal economic conditions*

**Plant A**

Based on the predicted demand above, the expected net present value of
the profits for Plant A is \$57.0m.

The following chart shows that cashflows for Plant A under a normal
economic environment, with capped production:

The revenue from Plant A is constant over the years at \$24.5m because
the same number of computers are sold each year (given the production
capacity is significantly lower than demand for all years) and the price
of the computers is fixed for all years.

The cost of raw materials is level over the projection period at \$2.4m
as the number of computers produced are also flat in that period and so
is the cost.

Staff costs represent the largest outgo in each year and the costs
increase with time due to salary inflation from \$7.7m in Year 1 to
\$9.7m in Year 5.

Given revenue and raw material costs are level while salary costs
increase each year, the net cashflow is reducing from \$14.4m in Year 1
to \$12.3m in Year 5.

**Plant B**

The expected net present value of the profits for Plant B is \$85.1m.

The following chart shows the cashflow projection for Plant B under a
normal economic environment, with capped production:

The revenue starts off at \$50.8m in Year 1, increases to \$51.3m in
Year 2 and plateaus at \$51.4m for the rest of the projection period.
The increasing pattern in the first two years is due to the increase in
demand. The number of units produced is higher than demand for this
period, therefore the number of units sold is driven by the demand level
for this period.

From projection Year 3 to Year 5, the number of units produced is
slightly less than demand therefore the units sold are equal to the
number of units produced. The revenue for this later period is flat as
units produced are flat as well.

However, the variability in the revenue is small as the production
capacity of Plant B is at similar levels to the demand in each of the
five years.

In comparison to Plant A, the revenue for Plant B is more than double in
each year. This is because almost double the number of computers are
sold in each year and the selling price of the computers produced by
Plant B is \$100 higher than Plant A.

In year one, there is a significant negative cashflow from the capital
outlay of \$100m for building the plant.

In each year there is a negative cashflow in relation to the cost of raw
materials. As per Plant A, this is level but the magnitude of the
negative cashflow is double that of Plant A as Plant B produces twice as
many computers.

Similar to Plant A, the staff costs increase each year in line with
inflation. The annual staff costs for Plant B are 31% of the staff costs
of Plant A. This is because Plant B only requires 25% of the number of
employees in Plant A but average salary costs are 25% higher.

The net cashflow for Plant B starts off at negative \$56.5m reflecting
the initial capital outlay partially offset by the revenue in excess of
the cost of raw materials and staff cost in the same period. This turns
positive in Year 2 at \$43.8m and gradually decrease but stays positive
to \$43.5m in Year 5.

**Comparison of Net Cashflows for Plant A against Plant B**

The chart below shows the comparison of the net cash flow from Plant A
against Plant B once the production has been capped to according to
demand:

The net cash flows for Plant A are always positive for the projection
period and only reduce due to staff costs.

Plant B has a negative net cashflow in Year 1 due to capital outlay for
building the plant. While the net cashflows for Plant B do reduce
slightly between years 2 and 5, the reduction is smaller than that of
Plant A because the staff costs (which increase with inflation) are a
smaller proportion of outgo in these years.

The net present value of profit for Plant A over the five-year
projection period of \$57.0m is lower than the net present value of
profit for Plant B of \$85.2m for Plant B.

Despite the large initial outlay for constructing Plant B, the other net
cashflows in each year are higher due to:

- Increased revenue from selling more computers at a higher price; and

- Reduced staff costs.

The benefit of the higher net cashflows (excluding the initial outlay)
is greater than the large initial outlay and therefore Plant B should be
more profitable.

*\*

*Impact of Capping Production at Demand Level*

Introducing a cap on production of the level of demand has no impact on
the net present value of profits for Plant A, which remain at \$57.0m.
This is because the number of computers produced is already less than
the demand in all years. The cashflows and NPV are therefore unimpacted.

For Plant B, the production capacity is slightly higher than demand for
Year 1 and Year 2. Introducing a maximum production equal to the
expected demand for computers will reduce the number of units produced
which reduces the cost of production. The revenue remains unchanged
because the number of computers sold will still be the same but raw
material costs will reduce.

For Year 3 to Year 5, the cap will not have an impact on the number sold
as demand is higher than production capacity.

The overall impact of the demand cap on Plant B results in a small
improvement in NPV of \$73k.

*Cashflow projections – adverse economic scenario*

Under the adverse economic scenario, the net present value of profit for
both plants reduces as follows:

|         | NPV Base economic conditions | NPV Adverse economic conditions |
|---------|:----------------------------:|:-------------------------------:|
| Plant A |           \$57.0m            |             \$22.6m             |
| Plant B |           \$85.2m            |             \$67.1m             |

The net present value of cashflows are positive for both plants under
both conditions.

The NPV profit for Plant A has reduced by around 60%. This is a result
of the 40% reduction in production but the reduction in profit for Plant
A is greater than this because staff costs are assumed to be fixed and
so this reduces the profit by a greater proportion.

Plant B shows more resilience under the adverse economic scenario with
the NPV reducing by 21%. This can be explained by:

- Production reducing by 10%; and

- The fixed costs of the capital outlay and staff costs being spread
  over a lower number of computers produced.

The below chart shows a comparison of the net cashflows for each year
for both plants and under both economic scenarios (once production has
been capped according to demand).

For both Plants, the net cashflow is lower under the adverse scenario
for all projection years.

The impact on Plant A is more significant due to the higher drop in
production due to breakdown of 40% compared to only 10% on Plant B.

The staff costs for Plant A are more sensitive to the lower salary
inflation than the staff costs for Plant B. However, the magnitude of
the savings from lower staff costs were overshadowed by the impact of
the loss in revenue due to lower production in both Plants.

**Conclusion**

The regression results confirm that there is sufficient evidence to
reject the hypothesis that there is no linear relationship between the
IIR and Demand for computers.

The cashflow projection model shows that the net present value is higher
and more resilient under Plant B than Plant A. However, Plant B will
require some funding in Year 1.

Capping production at demand level only has marginal benefit on Plant B
and does not affect Plant A results.

Actual outcome will depend on experience, particularly of the Demand,
Costs and Revenue.

**\**

**Next steps**

1.  Validate the historic demand for computers against independent
    sources e.g. look at other reliable industry sources.

2.  Consider other measures of project viability other than NPV (e.g.
    target Internal Rate of Return, environmental impact, employment
    etc).

3.  Consider multivariate regression which considers more than one
    independent variable e.g. adding GDP to the model.

4.  Confirm that variance of the residuals of the IIRs is the same, one
    of the underlying assumptions for linearity (homoscedasticity test).

5.  Perform normality test for residuals – a requirement for regression
    model fit testing.

6.  Collect more data over a longer period and refine projection
    parameters as more data is collected.

7.  Back test the linear regression model as data becomes available
    within the five-year projection period.

8.  Allow for other expenses e.g.

    1.  non-salary admin costs e.g. licenses and patent costs,
        regulatory fees.

    2.  Allow for depreciation cost on plant and equipment.

    3.  Allow for energy costs.

9.  Allow for the possibility of some computers being defective and
    therefore unsaleable.

10. Produce a stochastic model in order to produce a pdf of NPVs, which
    can be used to communicate the variability of result better.

11. Consider a longer projection period than 5 years.

12. For the five-year projection, obtain the monthly IIRs rather than
    annual IIRs.

13. Consider more granular cashflow projection, say monthly, to capture
    seasonality in cashflows.

14. Allow for tax on the profits to assess the NPV of profits after tax.

15. Allow for storage costs under the base scenario when production
    exceeds demand.

16. Consider the impact of a competitor entering the market, producing
    the same types of computers and therefore reducing the demand
    experienced by our company.

17. Consider a scenario of gradually reducing capacity in old plant and
    increasing in the new plant.

18. Confirm that the funds to develop the new plant are readily
    available or if alternative funding would be required.

19. Update the model with actual demand experience as it emerges

20. Consider offering discounts when production is more than demand to
    recover fixed costs

21. Sensitivity test the profit outcomes for different raw material
    costs, salary costs, discount rates, staff numbers, production
    capacity

22. Allow for inflation on the price of the computers over the 5 year
    projection period

23. Allow for any break in operations while transitioning to the new
    manufacturing site and the associated costs

24. Allow for any additional costs associated with setting up the new
    plant e.g. licenses, regulatory costs

25. Allow for the cost of capital (which could be higher than the
    discount rate used to discount other cashflows) for as long as the
    accumulated cashflow is still negative for Plant B.

26. Get the model peer reviewed by an appropriately qualified and
    independent person.

---
normalized_id: cp2-2022-april-question-paper-cp2-2-april22-exam-clean-proof
exam_code: CP2
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CP2/CP2 Paper 2/Apr22/CP2-2_April22_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cp2-2022-april-question-paper-cp2-2-april22-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 12 April 2022 (am)


                   Subject CP2 – Modelling Practice
                            Core Practices
                                     Paper Two
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CP22 A2022                                               © Institute and Faculty of Actuaries
Exam requirements
Read the background document, which describes the scenarios that have been modelled and
documented for this project, and the work that remains outstanding.

Read the audit trail that has been written by your colleague, another actuarial student, for the
calculations that they performed. This will assist you in following and understanding the
calculations performed in the Excel model provided.

You are not required to add to or amend the audit trail.

You should assume that your colleague’s calculations have been checked and are
correct.

1      Spreadsheet model

       (i)      For the Gross Domestic Product (GDP) index simulations and for each year
                from 2022 to 2032, calculate the following statistics (this information will be
                required for chart 2(i)):

                   The expected value of the projected GDP index
                   The minimum and maximum values, for each year, of the projected GDP
                    index
                   The quartiles, for each year, of the projected GDP index.
                                                                                      [2]

       (ii)     Expand the spreadsheet model for both ‘budget’ and ‘luxury’ strategies, to
                determine how the 10-year profit simulations change when side orders are
                allowed for.                                                               [7]

                You should ensure that the additional work you undertake on the
                spreadsheet contains appropriate self-checks.


2      Charts

       Construct, for each of the following, a suitable chart to illustrate:

       (i)      the projected distribution of the GDP index over the next 10 years by plotting
                the minimum, maximum and quartiles of the projected GDP index, while also
                showing the progression of the expected values of the GDP index over this
                period.                                                                      [2]

       (ii)     the minimum, maximum and average total 10-year profit, and the standard
                deviation of the total 10-year profit simulations on the budget and luxury
                strategies with no side orders.                                            [2]

       (iii)    the minimum, maximum and average total 10-year profit, and the standard
                deviation of the total 10-year profit simulations on the budget and luxury
                strategies with the additional side order modelling.                       [2]



CP22 A2022–2
3    Analysis

     Analyse, by chart, table of appropriate results or otherwise, the change in the annual
     profit on the minimum, median and maximum simulations over the 10-year period for
     both the budget and luxury strategies with no side orders and with side orders.
                                                                                          [4]
                                                                               [Sub-total 19]

4    Summary document

     Prepare a summary document of around five to seven pages, capturing the main
     features and results of the work done by you and your colleague. You can assume
     that the summary is being prepared for your manager, a senior actuary, who will
     present the work to Mr Rolfe.

     Your summary should include the following:

           Purpose of the project, data, method and assumptions used by you and your
            colleague
           Results, including charts
           Commentary on the results
           Key conclusions
           Suggested next steps.

     Commentary on the results should cover, but not be limited to:

           analytical comments on each stage of the results, including explaining patterns in
            the results and any unusual features.
           an explanation of the differences between the results under the various strategies
            modelled.

     Next steps need to be specific to the project, with some mention of why each is valid.

     The summary should cover the full scope of the project, including the current
     approach that was modelled in the spreadsheet provided.

     You are not required to add to or amend the audit trail.

     Marks available for the summary:

     (i)       Methodology (including purpose, data, method and assumptions).              [26]

     (ii)      Results, including charts.                                                   [5]

     (iii)     Commentary on results and conclusions.                                      [22]

     (iv)      Next steps.                                                                 [18]

     (v)       Drafting.                                                                  [10]
                                                                                [Sub-total 81]
                                                                                   [Total 100]


CP22 A2022–3
Background
You are an actuarial student working for Business Planning Ltd, a company specialising in
helping businesses develop their future strategies. Another actuarial student in your team has
been working on a project to advise Mr Rolfe, the owner of Fresh Pizzas, on the expected
future profits for the next 10 years of two alternative business strategies.

Fresh Pizzas is currently operating as a budget pizza delivery company, offering simple and
cheap pizzas. Mr Rolfe is considering whether to maintain this strategy (‘budget strategy’) or
to improve the pizza quality and provide a faster and more reliable delivery to become a
luxury pizza delivery company from 1 January 2023 (‘luxury strategy’). He has asked
Business Planning Ltd to recommend which strategy Fresh Pizzas should follow.

The manufacturing costs of making the pizzas, advertising costs and delivery costs, as well as
the price that customers would pay for the pizzas, would increase for the luxury strategy.

Mr Rolfe has provided data and estimates of the prices and costs for both strategies, based on
information from the current business and his pizza delivery market knowledge.

 Budget pizzas                                        Luxury pizzas
 Manufacturing cost per pizza: $1.00                  Manufacturing cost per pizza: $2.50
 Selling price per pizza: $7.99                       Selling price per pizza: $14.99
 Delivery cost per pizza*: $3.00                      Delivery cost per pizza*: $5.00
 Advertising cost per year: $6,000                    Advertising cost per year: $8,000
                                                      One-off development costs in first year: $15,000
*The delivery cost is a cost to Fresh Pizzas. It is not a charge levied on the customer.

Both strategies

Annual overheads including rent, salaries and miscellaneous fixed costs: $96,000

Days open per year: 365

The modelling should be produced over calendar years, beginning on 1 January 2023.

GDP

Mr Rolfe expects that consumer demand for pizza will be sensitive to the performance of the
economy. Therefore, the performance of the economy will potentially impact which strategy
is the most profitable for Fresh Pizzas. Mr Rolfe believes that the annual level of GDP for the
country can be used as a proxy for the performance of the economy.

Mr Rolfe is concerned that the economy could be particularly volatile over the next 10 years
and has asked that Business Planning Ltd model the demand for pizzas with respect to the
level of GDP in the country to understand the potential volatility in Fresh Pizzas’ profits.




CP22 A2022–4
Number of pizzas sold per day

The statistics department of Business Planning Ltd has constructed a model based on
information from Mr Rolfe, which states that the number of pizzas sold per day in year t
should be modelled as:

              Budget strategy: 110 + 0.15 × (GDP index (i,t) – GDP index (i,0)),

               Luxury strategy: 52 + 0.55 × (GDP index (i,t) – GDP index (i,0)),

where:

   i = simulations 1 to 100.
   t = time 1 to 10 years.
   GDP index (i,t) = the GDP index amount for simulation i, at time t.
   GDP index (i,0) = 100 for all simulations and t = 0 is 1 January 2022.

GDP

Your manager has instructed that the GDP index should be modelled using the following time
series model and that 100 simulations of the 10-year progression of GDP be simulated. The
statistics department has provided 1,100 random numbers from the Uniform (0,1) distribution
to enable the modelling of 11 years of the GDP index (to allow for the 1-year lag of the error
variable in the time series model).

    Log (GDP index (i,t)) = log (1.03) + log (GDP index (i,t – 1)) + z(i,t) + 0.45 × z(i,t – 1)

where:

   the random error variable z(i,t) = 0.2 × (0.5 – random number (i,t)).
   i = simulations 1 to 100.
   t = time 1 to 10 years.
   GDP (i,0) = 100 for all simulations and t = 0 is 1 January 2022.

Your colleague has created 100 10-year GDP simulations and modelled the resulting demand
for budget and luxury pizzas and the respective annual revenue, costs and annual profits for
10 years.

Further development

Mr Rolfe has been provided with the initial results and has requested some additional
modelling that your colleague is handing over to you to complete. Your colleague has
provided you with the current model and the audit trail.

Mr Rolfe is considering expanding Fresh Pizzas’ menu to include a range of side orders (e.g.
garlic bread) to be sold with pizzas to improve profitability and would like to understand the
impact on the budget and luxury strategies’ profits. Mr Rolfe has asked that you update the
modelling to include this additional strategy and recommend whether to offer side orders.




CP22 A2022–5
Mr Rolfe has provided the following information:

   A maximum of one side order per pizza sold should be modelled.
   Budget pizzas would be offered with side orders priced at $1.99 each, with a manufacturing
    cost to the business of $0.60 for each side order sold. The percentage of budget pizzas sold
    that would add one side in year t is:

                         50% + 0.13% × (GDP index (i,t) – GDP index (i,0))

There would be a one-off development cost of $5,000 to develop budget side orders.

   Luxury pizzas would be offered with side orders priced at $4.99 each, with a manufacturing
    cost to the business of $1.25 for each side order sold. The percentage of luxury pizzas sold
    that would add one side in year t is:

                         85% + 0.03% × (GDP index (i,t) – GDP index (i,0))

There would be a one-off development cost of $7,500 to develop luxury side orders.

Summary report

Your manager has asked you to prepare a summary covering all elements of the work (both
the original work your colleague completed and the additional modelling you are
undertaking) namely:

   the calculation of the 100 10-year GDP simulations.
   the simulations of the revenue, costs and profit for the next 10 years under both the
    budget and luxury strategies.
   the additional modelling for adding side orders in the revenue, costs and profit
    simulations for both strategies.

In this summary, your manager wishes you to include charts as outlined in the examination
instructions above and to include some analysis of the change in the annual profit on the
minimum, median and maximum simulations over the 10-year period for both the budget and
luxury strategies with no side orders and with side orders.

Your summary should include the following:

   Purpose of the project, data, method and assumptions used by you and your colleague
   Results, including charts
   Commentary on the results and key conclusions
   Suggested next steps.

You are not expected to include the additional modelling you undertake in the audit
trail, but your results should be included in the summary.




CP22 A2022–6
Audit trail
The following audit trail should be read alongside the model provided.

Objective
Mr Rolfe is the owner of a budget pizza delivery business, ‘Fresh Pizzas’. He has requested
that Business Planning Ltd provide modelling and advice on the impact on Fresh Pizzas’
profits of an alternative business strategy that would involve changing to deliver improved
quality ‘luxury’ pizzas that would increase the costs and selling prices of the pizzas.

The purpose of the model is to perform the following:

   Model the projection of the GDP index over 10 years from 1 January 2022 for 100
    random simulations.
   Calculate the number of pizzas sold per day under the 100 simulations for both the
    current budget and proposed luxury strategies, which are dependent on the modelled GDP
    index.
   Calculate the total profit over the 10 years from 1 January 2023 on the current budget
    strategy and the proposed luxury strategy.

Data
This sheet contains 1,100 random numbers from the U(0,1) distributions provided by
Business Planning Ltd’s statistics department in columns B:L representing 11 years and rows
2:101 representing 100 simulations.

Data checks
This sheet performs checks on the Uniform distribution data to confirm that they are random
numbers from a U(0,1) distribution.

In cells C4:C7, the actual minimum, maximum, mean and standard deviation of the data are
calculated using the standard Excel functions MIN, MAX, AVERAGE and STDEV.S. The
expected values of these statistics from the U(0,1) distribution are shown in D4:D7 and the
difference between actual and expected is shown in E4:E7. These are compared to a tolerance
of 1% difference in G4:G7 and all checks suggest the data is from a U(0,1) distribution.

A chi-squared test is also performed. The actual frequency and expected frequency in bands
of 0.1 from zero to one are calculated in cells A12:D21. The Excel function CHISQ.TEST is
used in E12 to calculate the P-value, which is greater than 95%, which shows there is less
than a 5% chance of the differences seen being due to the numbers not being from a random
U(0,1) distribution.

No change was made to the data in the ‘Data’ tab.

Parameters
This sheet summarises the parameters used in the calculations.



CP22 A2022–7
Assumptions
The following assumptions are made in the model:

   The model provided by the statistics department for the relationship between pizza sales
    and GDP is suitable to model the demand for pizzas due to GDP (i.e. pizza sales are
    related to GDP and the parameters are appropriate).
   The costs and selling prices of pizzas provided by Mr Rolfe are correct and applicable for
    the next 10 years with no allowance for inflation needed.
   The time series GDP projection model created by Business Planning Ltd gives a fair
    representation of the 10-year expected distribution of GDP p.a.
   There are no other costs associated with the change to the luxury strategy.
   No allowance is made for any investment returns on profit.

GDP simulation sheet
This sheet performs the 100 simulations of 10 years of GDP index using the following time
series formula:

    Log (GDP index (i,t)) = log (1.03) + log (GDP index (i,t – 1)) + z(i,t) + 0.45 × z(i,t – 1)

where z(i,t) = 0.2 × (0.5 – random number (i,t))

First, z(i,t) is calculated in B11:M110 linking to the corresponding random U(0,1) entry in the
‘Data’ tab. The minimum, maximum and mean of the z(i,t) are calculated for each year in
rows 4 to 6. The overall mean for all z(i,t)’s is calculated in cell D8 and there is a check to
ensure that this overall mean is close to zero (less than 0.1%).

Then the log GDP index is modelled in O11:Z110 starting at log(100) at 1 January 2022 (i.e.
GDP index (i,0) = 100)) and using the z(i,t) and z(i,t – 1) calculated above.

The exponential of the log GDP index is taken to calculate the GDP index values in
AB11:AM110 and the difference from the GDP index at t = 0 (100) is calculated in
AO11:AY110.

Budget pizza per day
This sheet calculates the number of budget pizzas sold per day in B5:K104 using the
following formula and linking to the GDP index results for each year or each scenario in the
‘GDP simulation sheet’:

            Projected number of budget pizzas sold per day for each scenario (i) =
                      110 + 0.15 × (GDP index (i,t) – GDP index (i,0))

Luxury pizza per day
This sheet calculates the number of luxury pizzas sold per day in B5:K104 using the
following formula and linking to the GDP index results for each year or each scenario in the
‘GDP simulation sheet’:

            Projected number of luxury pizzas sold per day for each scenario (i) =
                       52 + 0.55 × (GDP index (i,t) – GDP index (i,0))


CP22 A2022–8
Budget profit
This sheet projects the costs, revenue and profit from pizza sales for each year on each
scenario on the budget strategy.

The total number of pizzas sold each year in each scenario is calculated in B9:L108 by
multiplying the daily figures from sheet ‘Budget pizza per day’ with the days worked per
year parameter.

Total costs per year per scenario are calculated in N9:W108 by multiplying the number of
pizzas sold each year by the budget variable cost parameters (costs per pizza plus delivery
costs) and adding the fixed yearly overheads and budget advertising costs.

Revenue per year per scenario is calculated in Y9:AH108 by multiplying the number of
pizzas sold each year by the selling price per budget pizza.

Profit per year per scenario is calculated in AJ9:AT108 by deducting costs per year per
scenario from revenue per year per scenario.

Finally, the 10-year total profit per scenario is calculated by summing the 10 years of profit
per scenario with no discounting.

Summary statistics are calculated in AY8:AZ12 including average, standard deviation,
minimum and maximum total 10-year profit for the 100 simulations, using standard Excel
functions. The median total 10-year profit is hardcoded as the 50th simulation.

Luxury profit
This sheet projects the costs, revenue and profit from pizza sales for each year on each
scenario on the luxury strategy. It uses the same method as the ‘budget profit’ sheet but
referring to the ‘luxury pizza per day’ sheet and luxury parameters.

The costs for each scenario in year t = 1 (2023) include the additional development costs for
the luxury strategy in column N.

Summary statistics are calculated in AY8:AZ12 including average, standard deviation,
minimum and maximum total 10-year profit for the 100 simulations, using standard Excel
functions. The median total 10-year profit is hardcoded as the 50th simulation.


                                    END OF PAPER




CP22 A2022–9


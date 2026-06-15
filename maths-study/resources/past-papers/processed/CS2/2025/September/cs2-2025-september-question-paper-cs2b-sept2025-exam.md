---
normalized_id: cs2-2025-september-question-paper-cs2b-sept2025-exam
exam_code: CS2
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2B/Sep25/CS2B_Sept2025_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-september-question-paper-cs2b-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                           9 September 2025


      Subject CS2 – Risk Modelling and Survival Analysis
                       Core Principles
                                                  Paper B
                                Time allowed: One hour and fifty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CS2B S2025                                                             © Institute and Faculty of Actuaries
1    An insurance company assumes that the number of claims arising from a portfolio of
     insurance policies follows a Poisson distribution with parameter 140. Individual claim
     amounts in US dollars are assumed to follow a Gamma distribution with shape
     parameter α = 650 and rate parameter λ = 0.35. The insurance company has a
     proportional reinsurance arrangement in place for these policies where the retained
     proportion is 92.5% of each claim.

     (i)     Construct R code to generate a simulation of 20,000 values for aggregate
             claims paid by the insurance company using the Compound Poisson
             distribution. You should use set.seed(200) and display the first
             20 simulated values for both the number of claims and the aggregate
             claim amount.                                                            [11]

     (ii)    Calculate the mean and standard deviation of the aggregate claims from the
             simulated values.                                                          [2]

     (iii)   Estimate the probability that the aggregate claims are greater than $300,000.
                                                                                          [3]

     (iv)    Plot the simulated values as a histogram where the vertical axis shows density.
             You should ensure that your plot has a suitable title and axes labels.      [3]

     (v)     Construct R code to add the density function of a Normal distribution with
             mean and standard deviation equal to the sample values calculated in part (ii).
             The density function should be displayed as a red line in addition to the
             histogram of simulated values.                                               [4]

     (vi)    Generate and display a Q-Q plot to check how appropriate the Normal
             approximation to the Compound Poisson is in this case.                       [2]

     (vii)   Comment on your results from part (v) and part (vi).                         [3]

     (viii) Explain how your conclusions in part (vii) would be different if individual
            claims were assumed to follow a Weibull instead of a Gamma distribution.
            You are not required to generate the Weibull simulations or plots.           [2]
                                                                                  [Total 30]




CS2B S2025–2
2    Before answering this question, the survival package should be loaded into R with
     the following code:

     install.packages("survival")
     library(survival)

     An engineer specialising in solar energy wishes to evaluate the performance and
     reliability of a solar electric power system. Systems can vary according to the
     following specifications:

           System technology: Some use old inverter technology and others use new
            inverters.
           Panel technology: Some solar panels are ‘half-cut’ (which means they can still
            generate energy when partially shaded), while others are ‘full-cut’.

     The engineer wishes to assess how new inverter technology impacts the overall
     survival probability of solar electric power systems.

     A random sample of 2,000 systems is selected and observed for 120 months from the
     date of installation. The engineer records the time (in months) at which a system is
     replaced together with whether the replacement is due to failure of the inverter or not.

     The Kaplan–Meier estimator is used to calculate the survival function S(t), which
     estimates the probability that the system will not need to be replaced at time t.

     The details of the observations are found in the file ‘CS2B_Q2_Data.csv’ that
     contains five columns:

     System:               The ID number for each system.

     Inverter_flag:        = 1 if the inverter technology used is new and 0 otherwise.

     Panel_type:           = 1 if the panel used is half-cut and 0 otherwise.

     Failure_event:        = 1 if the system is replaced because of the inverter failure and 0
                           otherwise.

     Time_in_months: The completed number of months after installation when the
                     system is replaced or the observations cease.

     (i)       Construct R code to load the dataset from ‘CS2B_Q2_Data.csv’ into R.          [1]

     (ii)      Plot the Kaplan–Meier estimate of the survival function for all systems in the
               sample including a 95% confidence interval for the estimate. You should
               ensure that your plot is appropriately labelled.                             [5]

     (iii)     Calculate the probability that a system does not need to be replaced for any
               reason within 10 years of installation.                                      [2]




CS2B S2025–3
     Consider four types of solar energy systems:

           Old inverter and full-cut panel
           Old inverter and half-cut panel
           New inverter and full-cut panel
           New inverter and half-cut panel.

     (iv)      Plot the Kaplan–Meier estimates of the survival function for each type of solar
               energy system on the same plot. Use a different coloured line for each type of
               system and add a legend.                                                    [8]

     (v)       Comment on the plot in part (iv).                                           [2]

     (vi)      Construct R code to calculate a Cox’s proportional hazard model for this
               data with two covariates ‘Inverter_flag’ and ‘Panel_type’ but without their
               interaction term.                                                           [2]

     (vii)     Comment on the effect of these two covariates based on both the plot in
               part (iv) and the model output in part (vi).                                [4]

     (viii) Construct R code to calculate Cox’s proportional hazard model with the same
            two covariates but this time with the interaction effect.                 [3]

     (ix)      Determine the extent to which new inverter technology reduces the rate of
               system failure for:

                  systems with half-cut panels.
                  systems with full-cut panels.
                                                                                          [7]
                                                                                   [Total 34]




CS2B S2025–4
3    The marketing department of a company is looking for a model that can project future
     sales. The data file ‘CS2B_Q3_sales.csv’ contains monthly sales figures for the past
     15 years with the first sales amount from the month of January. You should import the
     data from ‘CS2B_Q3_sales.csv’ into R.

     The manager decides to calculate the change in sales per 1 million units. This is
     calculated using the formula:

                                               monthly sales
                       excess sales     100                      1
                                                1,000,000

     (i)     Calculate ‘excess sales’ for each month storing the values in a vector named
             ‘ex_sales’ and display the first five values.                               [4]

     (ii)    Construct R code to show the Autocorrelation Function (ACF) and Partial
             Autocorrelation Function (PACF) of ‘ex_sales’. Paste both your code and any
             output into your Word document and use this to comment on the seasonality
             of this series.                                                           [3]

     The manager has decided to use the following random coefficient AR(1) model to
     project future sales:

                                      Yt = ϕt Yt−1 + ϵt

     where Yt is ‘excess sales’, ϵt ∼ N(0, σϵ2) and Φt ∼ N(ϕ0, σϕ2) with ϕ0 = sin(πm/12)
     where m represents the month of the year, for example for January m = 1, for
     February m = 2, …, for December m = 12. The standard deviations of the normal
     distributions for ϵt and Φt are σϵ = 0.80 and σϕ = 0.05.

     (iii)   Construct a matrix of size 10,000 × 13 and fill the first column with the
             180th value (the last value) of ‘ex_sales’. Display the final row of this
             matrix.                                                                       [4]

     (iv)    Construct R code to populate columns 2 to 13 of the matrix in part (iii) by
             producing 10,000 simulated values for ‘ex_sales’ for each of the next
             12 months based on the AR(1) time series model chosen by the manager.
             You should use set.seed(345). Calculate and display the mean ‘ex_sales’
             projected value for each of the 12 months from these simulations as well as
             the 180th (the last) value of ‘ex_sales’.                                   [10]

     (v)     Plot the average monthly sales figures for the next 12 months in a suitably
             labelled line graph.                                                        [4]




CS2B S2025–5
     A colleague proposes a simpler model for sales projections and suggests the following
     five steps:

     Step 1:     Calculate the first difference of the original monthly sales figures (not the
                 ‘excess sales’) using a lag of 24 months.

     Step 2:     Calculate the first difference of the output from Step 1 with lag 1 month.

     Step 3:     Fit an ARIMA(1,0,0) time series model to the output data from Step 3.

     Step 4:     Perform three Box–Ljung tests on this time series model using lags 1, 2
                 and 3.

     Step 5:     Plot the ACF and the PACF for the residuals of the model fitted at Step 3.

     (vi)      Construct R code that follows the above five step approach. Display the results
               of the Box–Ljung tests and the plots of the ACF and PACF.                   [8]

     (vii)     Comment on the results in part (vi) and on whether this simpler model can be
               used to project sales or not.                                              [3]
                                                                                  [Total 36]


                                   END OF PAPER




CS2B S2025–6


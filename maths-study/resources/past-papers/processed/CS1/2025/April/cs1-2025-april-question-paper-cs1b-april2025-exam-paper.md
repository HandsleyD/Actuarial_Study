---
normalized_id: cs1-2025-april-question-paper-cs1b-april2025-exam-paper
exam_code: CS1
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1B/Apr25/CS1B_April2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2025-april-question-paper-cs1b-april2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                              16 April 2025


                        Subject CS1 – Actuarial Statistics
                                 Core Principles
                                                  Paper B
                                Time allowed: One hour and fifty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CS1B A2025                                                             © Institute and Faculty of Actuaries
1    A consultancy firm has created an index, denoted by I, used to summarise the health
     status of individuals in a single number. They have asserted that this index can be
     used to predict annual healthcare costs, Y, using linear regression. As evidence for
     their assertion, they provide a sample of observed healthcare costs yi, and the
     predicted values 𝑦    𝑎𝐼 𝑏. For data protection and commercial reasons, they do
     not provide the values of Ii or the estimated values 𝑎 and 𝑏.

     This dataset is saved in the file ‘CS1B HealthCareIndex.Rdata’. After loading the data
     into R, using the command load("CS1B HealthCareIndex.Rdata"), the
     following two variables will be available:

           Predicted_costs – the predicted annual healthcare costs, 𝑦 , calculated as
            𝑦  𝑎𝐼 𝑏 using the company’s healthcare index.
           Realised_costs – the observed annual healthcare costs yi.

     (i)       Plot the residuals of the linear regression model against the predicted annual
               healthcare costs, 𝑦 .                                                         [4]

     (ii)      Suggest, with reasons, what can be concluded from the plot in part (i).       [2]

     (iii)     Determine the correlation coefficient between the predicted annual healthcare
               costs, 𝑦 , and the realised annual healthcare costs, yi, based on the provided
               data.                                                                          [2]

     (iv)      Determine an estimate of the correlation coefficient between the healthcare
               index, I, and the realised annual healthcare costs, Y, based on the provided
               data.                                                                         [3]
                                                                                      [Total 11]




CS1B A2025–2
2    A racing car driver is interested in the relationship between the speed of a car and its
     stopping distance (the distance required for the car to come to a complete stop after
     applying the brakes). They have carried out a series of tests of the stopping distance at
     different speeds. This data is recorded in the file ‘CS1B StoppingDistance.RData’.

     After loading the data into R, using
     load("CS1B StoppingDistance.RData"), the following two variables will
     be available:

           speed – the speed of the car (in kilometres per hour) when the driver applied the
            brakes.
           stopping_dist – the stopping distance (in metres).

     (i)       Fit a linear model to the data, with stopping_dist as the response variable
               and speed as the explanatory variable.                                  [2]

     (ii)      Plot, on the same graph:

               (a)     The sample quantiles of the residuals of the model fitted in part (i)
                       against the theoretical Normal quantiles.

               (b)     A line that passes through the first and third quartiles of the quantile-
                       quantile plot in part (ii)(a).

                       [Hint: Use the qqline() function.]
                                                                                               [5]

     (iii)     Plot the residuals of the model fitted in part (i) against the explanatory
               variable.                                                                       [3]

     (iv)      Comment on the suitability of the model fitted in part (i), based on the plots
               produced in parts (ii) and (iii). Your answer should include suggested
               improvements where appropriate.                                                [6]
                                                                                      [Total 16]




CS1B A2025–3
3    A random variable is assumed to follow a uniform distribution: X ~ U(0.5, 2.5).

     (i)     Calculate the mean of X.                                                     [1]

     Use the command set.seed(7) to initialise the random number generator.

     (ii)    (a)    Perform two separate simulations of X, one for 10 and then one for
                    10,000 simulations.

                    You should store these simulations as sim_x1 and sim_x2
                    respectively, for later use.                                          [4]

             (b)    Estimate, for each of the two simulations in part (ii)(a), the mean of X.
                                                                                           [3]

             (c)    Comment on your results from part (ii)(b) and part (i).               [2]

     (iii)   (a)    Plot, on the same graph, the density of X based on the 10,000 simulated
                    values from part (ii)(a) and the theoretical probability density function
                    of X.

                    [Hint: You may find the following R commands useful: density()
                    and curve().]
                                                                                 [8]

             (b)    Comment on your plot in part (iii)(a).                                [2]
                                                                                   [Total 20]




CS1B A2025–4
4    Let X1, …, Xn be independent identically distributed random variables with a density
     function given by:

                                                     𝜃𝑥       , 𝑥 ∈ 0,1
                                    𝑓 𝑥, 𝜃
                                                     0,        otherwise

     where θ > 0.

     You are given that if X follows the distribution defined above, Y = log(X) follows an
     exponential distribution with parameter θ.

     (i)     Generate n = 20 random values from the exponential distribution with
             parameter 5. Use the command set.seed(222) to initialise the random
             number generator before you start the simulation.                    [1]

     (ii)    Generate n = 20 random values from the distribution of X with probability
             density function f (x, θ) as given above, when θ = 5, using your answer in
             part (i).                                                                  [2]

     You are given four different estimators of θ: the method of moments estimator 𝜃 , the
     maximum likelihood estimator 𝜃 , a Bayes estimator 𝜃 and a further estimator 𝜃 ,
     such that:

                                                     𝑋
                                        𝜃
                                                 1        𝑋
                                                       𝑛
                                    𝜃
                                             ∑        log 𝑋

                                             2 𝑛           1
                                𝜃
                                        1    2∑           log 𝑋

                                                     𝑛      1
                                    𝜃
                                             ∑           log 𝑋

     where 𝑋        ∑   𝑋.

     (iii)   (a)    Perform a simulation to obtain 1,000 values of each of the
                    four estimators when n = 20 and θ = 5. Use the command
                    set.seed(222) to initialise the random number generator
                    before you start the simulation.                                     [7]

             (b)    Calculate the mean square error estimate for each of these estimators
                    based on part (iii)(a).                                            [13]

             (c)    Comment on which of the four estimators appears to be the most
                    efficient using part (iii)(b).                                    [2]
                                                                               [Total 25]




CS1B A2025–5
5    An estate agent wants to understand what factors affect the sale price of properties in
     their area. They have collected data for 20 houses sold recently.

     Use the command load("CS1B_houses.RData") to load the observed data into
     R. This will create the following variables in R:

           days to agree sale
           price of the property, in thousands
           sqft the area (in square feet) of the property
           bedrooms indicating if the property has more than three bedrooms (1 = yes,
            0 = no).

     (i)       Fit a Generalised Linear Model (GLM), using a normal distribution, to the sale
               price with days, sqft and bedrooms as the main effect explanatory
               variables. Use the identity function as the link function. Your answer should
               include a summary of the fitted model. You should save this model as
               Model1.                                                                      [4]

     (ii)      Comment on the significance of the parameters of the model fitted in part (i).
                                                                                           [4]

     (iii)     Fit a second GLM as in part (i), but excluding days from the covariates,
               showing the summary. You should save this model as Model2.                    [3]

     The estate agent is concerned that this model isn’t suitable and would like to
     investigate the impact of the covariates further.

     (iv)      Plot the observed sale price against the square footage sqft for properties
               with at least three bedrooms and for properties with fewer than three bedrooms
               using two different colours to distinguish the properties with respect to the
               number of bedrooms.                                                           [3]

     (v)       Comment on your plot in part (iv) focussing on the relationship between
               square footage and sale price.                                                [2]

     The estate agent also has doubts about the suitability of the normal distribution and
     the identity link function.

     (vi)      Fit a third model using the gamma distribution with its canonical link function,
               and sqft and bedrooms as the main effect explanatory variables. You
               should save this model as Model3.                                            [3]

     (vii)     Comment on whether Model2 from part (iii) or Model3 from part (vi) is a
               better fit, based on the Akaike information criterion.                 [2]

     (viii) Plot the residuals of Model2 from part (iii) against the fitted values.          [3]




CS1B A2025–6
     (ix)   Comment on the residuals plotted in part (viii).                             [2]

     (x)    Calculate the predicted sale price using Model2 from part (iii) of a new
            property about to be listed. The new property has two bedrooms and its area
            is 1,500 square feet.                                                        [2]
                                                                                  [Total 28]


                                END OF PAPER




CS1B A2025–7



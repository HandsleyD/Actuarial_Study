---
normalized_id: cs2-2025-april-question-paper-cs2b-april2025-exam-paper
exam_code: CS2
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2B/Apr25/CS2B_April2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-april-question-paper-cs2b-april2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                      EXAMINATION

                                              11 April 2025


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



CS2B A2025                                                             © Institute and Faculty of Actuaries
1    To complete this question you will need to load the survival package into R.

     install.packages("survival")
     library(survival)

     The government of a certain country is interested in the rate at which school children
     learn basic mathematical techniques, such as times tables. A study was carried out in
     which the time taken for pupils to learn and recite the 7 times table (1 × 7 = 7, 2 × 7 =
     14, …, 12 × 7 = 84) was measured.

     Included in the study were 725 children, all of which were entering the same year of
     school and were based in the same city. Weekly monitoring started on the first week
     of the school year and the study lasted 52 weeks.

     The data for this study is found in the CSV file ‘CS2B_Q1_data.csv’ where there is
     one row for each pupil in the study. The second column ‘fut_time’ gives the number
     of weeks before the pupil leaves the study. The third column ‘statusvv’ is set to 1 or 0,
     where:

     1 = the pupil successfully learnt the 7 times table.
     0 = the pupil left the study for some other reason.

     A large number of pupils left the study part way through the year (all in the same
     week) because they were making slow progress in mathematics and were moved to a
     different type of school. In addition, a number of pupils left the study at various times
     due to moving to another area.

     (i)     Define the event of interest in the study.                                     [1]

     (ii)    Construct R code to import the data from ‘CS2B_Q1_data.csv’, save it as a
             dataframe called ‘kap_m_data’, and show both the top six and bottom six
             rows in the data.                                                         [3]

     (iii)   Plot a histogram showing the distribution of times at which pupils left the
             study to all events. Your plot should have a suitable title and axes labels.   [2]

     (iv)    Plot a histogram showing the distribution of times at which only censored
             pupils left the study. Your plot should have a suitable title and axes labels. [5]

     (v)     Comment on the key characteristics of the complete data held in ‘kap_m_data’
             (using both the histogram and the data itself). Your answer should include
             brief comments about the various censoring processes present and the number
             of pupils subject to each censoring type. Include any R code you use to query
             the data as well as your comments in your answer script.                    [6]

     (vi)    Create a survival object with name ‘survobjx’ from the data ‘kap_m_data’
             using the surv function and display the first ten values.                [3]

     (vii)   Construct R code to complete Kaplan–Meier lifetime distribution
             calculations using the survfit function and plot the results using
             conf.type="plain".                                                             [5]


CS2B A2025–2
     (viii) Estimate the probability that a pupil has learnt the 7 times table by Week 50.
                                                                                         [1]

     A politician has seen draft results from this study and intends to discuss the key
     results in a radio interview shortly. You are concerned about the censoring at
     Week 30 and advise the politician not to discuss the results at this point.

     (ix)   Discuss the issues with this investigation with respect to the censored pupils
            at Week 30.                                                                   [5]
                                                                                   [Total 31]




CS2B A2025–3
2    A river flows through a town and weather conditions mean that the height of the river
     varies each day. The maximum height of river water in centimetres at a specific
     location on the river is measured each day for 500 days and the data is recorded in the
     file ‘CS2B_Q2_river_data.csv’.

     (i)     Construct R code to download the data from ‘CS2B_Q2_river_data.csv’ into
             R and display the last 10 days of data.                                [2]

     (ii)    Calculate the sample mean and variance for the river height.                        [2]

     (iii)   Plot the river height data as a histogram with 50 cm bands ensuring that your
             plot has a suitable title and axes labels.                                  [5]

     A flood risk analyst wishes to fit a suitable distribution to the data. The analyst first
     considers the exponential distribution.

     (iv)    Calculate the parameter of the exponential distribution such that the
             distribution mean equals the sample mean.                                           [2]

     (v)     Construct R code to add a line to your plot from part (iii) showing the
             frequency distribution for the river height over 500 days if the height follows
             this exponential distribution. The line should be on the same graph as that
             with the sample histogram.                                                    [5]

     (vi)    Comment on the graph in part (v).                                                   [2]

     Flood defences are to be built at a height such that river water is expected to rise
     above the flood defences once every 1,000 days. The height is to be determined using
     the exponential distribution in part (iv).

     (vii)   Calculate the height of the flood defences in centimetres.                          [4]

     (viii) Construct R code to calculate the threshold exceedances for the original river
            height data, save these in a vector named ‘exceed’ and display this vector. [3]

     (ix)    Comment on your results in part (viii).                                             [3]

     The analyst decides to model river height above the flood defence level with a
     generalised Pareto distribution with scale parameter β = 1 and shape parameter γ to be
     determined.
                                                                          γ
     The expected value under this generalised Pareto distribution is         .
                                                                         γ-1


     (x)     Calculate the shape parameter γ if the expected threshold exceedance is the
             same as that under the exponential distribution in part (iv).               [5]
                                                                                 [Total 33]




CS2B A2025–4
3    A bank is looking to analyse loan defaults in a portfolio of loans over time. The
     dataset in the CSV file ‘CS2B_Q3_loans.csv’ shows the aggregated number of loan
     accounts (the second column headed ‘accounts’) by calendar year along with the
     number of accounts that defaulted each year (the third column headed ‘defaults’).

     (i)     Construct R code to load the dataset from ‘CS2B_Q3_loans.csv’ into R, assign
             it to a dataframe named ‘loan_data’, and display the first five rows and last
             five rows in this dataset.                                                    [3]

     The default rate for each calendar year is defined as the number of defaults divided by
     the number of accounts.

     (ii)    Construct R code to add a new column to ‘loan_data’ called ‘def_rate’,
             consisting of the default rates to the dataset and display a scatterplot of the
             default rates over time.                                                        [3]

     (iii)   Comment on the graph in part (ii).                                             [2]

     The bank would like to use the data to infer what the default rates would have been in
     1998 and 1999 (before the dataset starts) as well as in 2021 and 2022 (after the dataset
     finishes).

     (iv)    Construct R code to fit the cubic polynomial regression model for default rates
             by calendar year.                                                           [3]

     (v)     Plot two graphs side-by-side:

             (a)    the fitted curve on top of the data

             (b)    the residuals from the polynomial regression model.
                                                                                            [3]

     (vi)    Comment on the suitability of this model.                                      [2]

     An analyst has recently joined this bank and their first task is to look for ways to
     improve the model. A colleague suggests that they could split the data into disjoint
     segments and fit separate curves for each segment. Following that advice, they
     consider the following three segments: 2000 to 2008, 2009 to 2013 and 2014 to 2020.

     (vii)   Write an R function called def_poly_curve, which takes as input the
             response data vector, y, the covariate vector, x and then fits four separate
             polynomial regression models of degrees 0, 1, 2, 3 and then outputs a vector
             of length 4 containing the Akaike Information Criterion (AIC) of these
             models.                                                                      [9]




CS2B A2025–5
     (viii) Construct R code to determine the best (in terms of AIC) polynomial
            regression models for default rate by calendar year, separately for each
            segment, considering only polynomials regression models on degree p =
            0,1,2,3 and using the def_poly_curve function written in part (vii).          [8]

     (ix)   Construct R code to predict the default rates for each of the calendar years
            1998, 1999, 2021 and 2022. Display your results.                              [3]
                                                                                   [Total 36]


                                 END OF PAPER




CS2B A2025–6


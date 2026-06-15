---
normalized_id: cs1-2025-september-question-paper-cs1b-sept2025-exam
exam_code: CS1
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1B/Sep25/CS1B_Sept2025_Exam.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2025-september-question-paper-cs1b-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                            September 2025


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



CS1B S2025                                                             © Institute and Faculty of Actuaries
1    (i)     Simulate 200 values from a gamma(6, 0.5) distribution. Use the command
             set.seed(1234) to initialise the random number generator before you
             start the simulation.                                                  [2]

     (ii)    Explain in words an alternative method for simulating values from a
             gamma(6, 0.5) distribution based on a suitable exponential distribution.
             You are not required to implement this method in R.                          [3]

     (iii)   Plot a histogram of the values generated in part (i), making sure that the
             histogram is plotted on the probability density scale.                       [3]

     (iv)    Plot the curve of the Probability Density Function (PDF) of the gamma(6, 0.5)
             distribution on the same graph as the histogram in part (iii).             [3]

             [Hint: Use the line() function, or the curve() function, with the option
             add = TRUE.]

     (v)     Comment on the accuracy of the simulation in part (i), using your answers in
             parts (iii) and (iv).                                                      [2]

     The R code below, when completed correctly, can be used to simulate values from a
     Poisson distribution:

      x = numeric(A)
      for (j in 1:A){
        k=1
        u = runif(1,B,1)
        while (ppois(k-1,C) < D){
          k = k+1
        }
        x[j] = E
      }

     (vi)    State what A, B, C, D and E should be replaced with in the R code above, so
             that the code simulates 1,000 values from a Poisson(5) distribution, which are
             stored in the vector denoted by x.                                           [5]
                                                                                   [Total 18]




CS1B S2025–2
2    An analyst is investigating the delay period between an insurance claim being made
     and the claim’s settlement in a health insurance portfolio. In particular, the analyst is
     interested in the dependence of the delay period on a number of covariates. A data
     sample is available in the file ‘CS1B_settlement_times.RData’, which contains the
     following variables for each of 200 claims:

           delay: the delay period (in weeks) between the claim being made and its
            settlement
           age: the age of the policyholder associated with the claim
           duration: the duration for which the policy has been in force (recorded as
            categorical for analysis purposes, with two levels: low, high)
           size: the size of the claim (recorded as categorical for analysis purposes, with
            two levels: low, high)
           cause: the cause of the claim, indicating a certain health condition (categorical
            with two causes: c1, c2).

     The analyst first wants to consider the dependence of the delay period on all four
     covariates.

     (i)       Fit a gamma Generalised Linear Model (GLM), using all four covariates with
               no interaction terms and a logarithmic link.                             [3]

     (ii)      Comment on the fit of the model fitted in part (i), using a plot of the deviance
               residuals of the model against age.                                            [3]

     (iii)     Comment on the dependence of the delay period on each of the four covariates
               used in the model fitted in part (i).                                    [3]

     (iv)      Explain, using the model in part (i), the impact of a 10-year increase in a
               policyholder’s age on the mean delay period.                                  [2]

     The analyst then wishes to use a model with fewer covariates.

     (v)       Perform backward variable selection, based on the GLM fitted in part (i), to
               select an optimal set of covariates.                                         [9]
                                                                                  [Total 20]




CS1B S2025–3
3    An analyst at a medium-sized insurance company has randomly selected 40 claims
     in an attempt to study if the average claim size for a particular class of insurance
     policy does not exceed £15,000 p.a. The data is available in the file
     ‘CS1B_ClaimsData.RData’, which can be loaded into R using the command
     load("CS1B_ClaimsData.RData").

     The analyst has assumed that claim size is Normally distributed with unknown mean
     𝜇 and unknown variance 𝜎2.

     (i)     (a)    Plot a histogram of the data.

             (b)    Comment on the assumption of Normality.
                                                                                            [4]

     (ii)    Determine a 99% confidence interval for 𝜇 based on the 40 claims.              [4]

     (iii)   Test the hypothesis that the expected claim size is greater than £15,000 at
             the 1% significance level.                                                     [6]

     (iv)    Comment on whether or not there is contradiction between the answers in
             parts (ii) and (iii).                                                   [3]

     The analyst is also concerned about the number of claims per policy received each
     year. The data in file ‘CS1B_ClaimNumbers.RData’ contains the number of claims
     for 100 policies for the years 2022 (NClaims2022) and 2023 (NClaims2023),
     and can be loaded into R using the command
     load("CS1B_ClaimNumbers.RData").

     (v)     Perform a test to decide if the mean number of claims per policy is the same
             for both years at the 1% significance level.                                [6]

     The analyst has now begun gathering further information in an attempt to fit a
     generalised linear model to the claims data. It is now assumed that the data on the
     number of claims per policy come from a Poisson distribution. Two choices for the
     link function are being considered, the identity link function and the log link function,
     respectively.

     (vi)    (a)    State the necessary requirements a link function must have in order to
                    fit a model.                                                         [1]

             (b)    Justify which of the two link functions should be used.                [4]
                                                                                    [Total 28]




CS1B S2025–4
4    An insurance company is analysing the time until claims are filed for a specific type
     of insurance policy. The company believes that the time until a claim is filed, X,
     follows a specific distribution with a fixed parameter k and an unknown parameter λ.

     The Probability Density Function (PDF) of this distribution is given by:

                            𝑓 𝑥; 𝑘, 𝜆       𝑘𝜆𝑥       𝑒           , for 𝑥    0

     where:

           k = 1.5
           λ > 0 is the unknown parameter.

     For data x1, …, xn, the log-likelihood function is given by:


                  𝑙 𝜆     𝑛 ln 𝑘     𝑛 ln 𝜆       𝑘           1       ln 𝑥       𝜆𝑥


     where n is the number of observations.

     The company’s historical data of claim times (in months) are given below:

     data <- c(2.4, 1.1, 3.2, 0.9, 4.7, 1.6, 2.2, 3.8, 2.7,
     1.4, 3.3, 0.5, 4.0, 2.0, 1.8)

     (i)       Plot a histogram of the data at density scale.                                [3]

     (ii)      Plot the values of the log-likelihood function for the parameter λ based on the
               historical data. Your plot of the log-likelihood function must be for values
               of λ = 0, 0.01, …, 1.99, 2.                                                   [6]

     The Maximum Likelihood Estimator (MLE) for the parameter λ based on a random
     sample X1, …, Xn is given by:

                                                          𝑛
                                        𝜆
                                                  ∑           𝑋

     where n is the sample size.

     (iii)     Estimate the value of λ using the MLE and the company’s historical data of
               claim times given above.                                                   [1]

     (iv)      Comment on the plot in part (ii) using your answer in part (iii).             [1]

     (v)       Plot the PDF 𝑓 𝑥; 𝑘, 𝜆 of X as a function of x for x = 0, 0.1, 0.2, …, 5 using
               the estimated value of λ in part (iii). The graph of the PDF should be
               superimposed on the histogram produced in part (i).                           [5]




CS1B S2025–5
     For the parameter λ of this distribution, the Cramér–Rao Lower Bound (CRLB) is
     given by:

                                       CRLB

     (vi)    Calculate the value of the CRLB using your estimate for λ from part (iii).   [3]

     An approximate confidence interval for λ can be obtained by using the approximate
     distribution of the MLE, 𝜆, which is a normal distribution with mean λ and variance
     given by the CRLB.

     (vii)   Calculate an approximate 95% confidence interval for λ using the normal
             distribution above and your answers from parts (iii) and (vi).               [2]

     The company wants to incorporate prior knowledge about the parameter λ and assume
     that the prior is a gamma distribution with parameters a = 12.6, b = 30.

     The posterior distribution of λ follows a gamma distribution with parameters a + n
     and 𝑏 ∑ 𝑥 .

     (viii) Calculate the values of the parameters of the posterior distribution of λ.    [3]

     (ix)    Calculate the Bayesian estimate of parameter λ under the quadratic loss
             function.                                                                    [2]

     (x)     Simulate 10,000 values from the posterior distribution of λ and store the
             simulated values in a vector in R for later use.

             You should use the command set.seed(123) to initialise the random
             number generator before you start the simulation.                            [3]

     (xi)    Determine a 95% credible interval for λ using your answer in part (x).       [3]

             [Hint: You may find the R command quantile() useful.]

     (xii)   Comment on the intervals in parts (vii) and (xi).                            [2]
                                                                                   [Total 34]


                                 END OF PAPER




CS1B S2025–6



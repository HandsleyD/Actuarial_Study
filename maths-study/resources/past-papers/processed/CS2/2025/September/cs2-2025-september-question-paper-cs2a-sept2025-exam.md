---
normalized_id: cs2-2025-september-question-paper-cs2a-sept2025-exam
exam_code: CS2
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep25/CS2A_Sept2025_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-september-question-paper-cs2a-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                            September 2025


      Subject CS2 – Risk Modelling and Survival Analysis
                       Core Principles
                                                  Paper A
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CS2A S2025                                                             © Institute and Faculty of Actuaries
1    An insurance company sells policies that cover accidental damage of mobile phones.
     The policy duration is 1 year with the premium payable in advance. At the end of the
     policy year, when the policy is due for renewal, the insurance company will make one
     of the following decisions:

           offer renewal at the standard premium rate
           offer renewal at a higher premium rate
           decline to offer renewal.

     Three quarters of policies on the standard premium rate are renewed on the same rate.
     Of the remainder, the number offered renewal on higher premiums is four times the
     number declined. Half of the policies on the higher premium rate are renewed on the
     same, higher premium rate. Of the remainder, a return to the standard premium rate
     and decline of cover are equally likely.

     None of the policies declined renewal are offered cover on any rates in the future. It is
     assumed that all offers of renewal are accepted.

     (i)       Write down the transition matrix needed to model policy renewal terms using
               a Markov chain.                                                           [2]

     (ii)      Calculate the probability that a policyholder who begins with cover on the
               standard premium rate is declined cover at their second renewal.           [2]

     A policyholder owns a mobile phone for 4 years.

     (iii)     Derive the expected number of premiums paid.                                  [5]
                                                                                       [Total 9]


2    An insurance company has for many years modelled claims for flood damage from its
     property insurance policies using a gamma distribution. Because of climate change
     the company believes it may need to change to a distribution with a thicker tail. The
     company has started considering the Pareto distribution with two parameters (𝛼 and
     𝜆) and a density function given by 𝑓 𝑥                .

     (i)       Explain how it can be shown quantitatively that the Pareto distribution has a
               thicker tail than the gamma through:

               (a)     the moments of the distributions.                                     [3]

               (b)     the limiting density ratio.                                           [4]

               In each case you should detail what calculations are necessary and how they
               evidence a thicker tail.

     (ii)      Demonstrate that the Pareto distribution with 𝛼    1 has a thicker tail than that
               with 𝛼 2 using the limiting density ratio.                                     [3]
                                                                                      [Total 10]




CS2A S2025–2
3    Consider the following AR(1) time series model:

                                       Xt    0.9 Xt-1   et

     where et is a white noise process with variance equal to 1.

     (i)       Derive expressions for the autocovariance and Autocorrelation Functions
               (ACF) for this model.                                                            [5]

     (ii)      Calculate the variance of the sample mean (X1 + X2 + X3 )/3 using the
               autocovariance function in part (i).                                             [4]
                                                                                          [Total 9]


4    A university in a certain country has recently completed a mortality study of dogs and
     has obtained the results summarised in the table below. Crude rates μx were calculated
     using a Poisson model for ages last, x = 0, 1, …, 9 years. Standard table rates μsx are
     based on a study by the National Veterinary Institute many years ago.

           Age, x Crude rates, μx Exposure (Ecx) in years Standard table rates, μsx
             0      0.0265500            9,653                    0.0270
             1      0.0107002            7,991                    0.0107
             2      0.0092844            9,421                    0.0096
             3      0.0102735            8,747                    0.0105
             4      0.0120844            8,536                       m
             5      0.0184969            8,064                    0.0160
             6      0.0217086            7,482                    0.0210
             7      0.0310028            7,102                    0.0297
             8      0.0453510            6,480                    0.0440
             9      0.0678304            5,664                    0.0639

     The team graduated μx by reference to the standard table using the function
     μox = μsx + k where μox are the graduated rates. They found k to be equal to 0.00068952
     using the exposure-weighted least squares method.

     (i)       Estimate m, the standard table rate at age x = 4, by first deriving an expression
               for k.                                                                         [9]

     The graduated rates are being checked for goodness-of-fit.

     (ii)      Calculate standardised deviations for each age x = 0, 1, …, 9.                   [3]

     (iii)     State, with reasons for each of the following tests of the standardised
               deviations in part (ii), if that test is required:

                  signs test
                  grouping of signs test.

               [Note: You are not required to perform these tests.]                             [3]
                                                                                         [Total 15]


CS2A S2025–3
5    In a ‘roll-of-dice’ game yn represents the number shown after the dice is thrown. yn
     can take values from 1 to 6. Xn is defined as the maximum of {yn, Xn−1}. The state
     space of Xn is {1 to 6}. The probability of throwing any particular number at any
     time is .

     (i)     Explain why Xn can be modelled using a Markov chain with the transition
             matrix as follows:

                                     1   1   1   1   1   1
                                     6   6   6   6   6   6
                                                            
                                         2   1   1   1   1
                                         6   6   6   6   6
                                                            
                                             1   1   1   1
                                             2   6   6   6
                                                 2   1   1
                                                            
                                                 3   6   6
                                                     5   1
                                                            
                                                     6   6
                                                         1 
                                     
                                                                                            [4]

     (ii)    State the initial distribution for Xn.                                         [1]

     (iii)   Calculate the probability that X4 = 4 if X1 = 3.                               [4]

     The value of Xn now equals 5.

     (iv)    Explain what the expected number of throws is for which the value of X
             remains at 5 before moving to 6.                                               [3]

             [Hint: You may find it useful to consider this as an application of the
             geometric distribution.]
                                                                                    [Total 12]




CS2A S2025–4
6    An actuary is asked to model a set of 150 time series observations: 𝑥 , 𝑥 , … , 𝑥    .
     The following numerical summaries are obtained:

              1
     𝑥̅                   𝑥     3.47
             150


             𝑥       𝑥̅       517.5



             𝑥       𝑥̅ 𝑥        𝑥̅      362.25



             𝑥       𝑥̅ 𝑥        𝑥̅          103.5


     (i)         Derive the estimate for 𝛾 using these results as well as the sample ACF for
                 the first two lags: 𝜌 and 𝜌 .                                              [3]

     The actuary considers two different time series models:

     A           𝑥        𝑎 𝑥          𝑒
     B           𝑥        𝑎 𝑥          𝑎 𝑥      𝑒

     where 𝑒 is assumed to follow a Normal distribution with zero mean and some
     variance 𝜎 to be estimated. The actuary uses the Yule–Walker equations and the
     results from part (i) to estimate the parameters.

     (ii)        Estimate the parameters 𝑎 and 𝜎 in model A.                                  [3]

     (iii)       Estimate the parameters 𝑎 , 𝑎 and 𝜎 in model B.                              [6]

     (iv)        Outline the main methods used in diagnostics checking for time series models
                 of this type.                                                              [3]
                                                                                     [Total 15]




CS2A S2025–5
7    Each year a football association organises a tournament in which each team plays one
     game per week for all 52 weeks of the year. Tournament scoring is straightforward: a
     win earns 1 point, a loss deducts 1 point and a draw awards 0 points. All teams start
     the season with zero points. At the end of the year, the team with the highest total is
     crowned the champion of the year.

     Consider a team called Piment Noir, and let St denote the accumulated number of
     points by this team at the end of week t.

     (i)     Write down the state space of the process St.                                    [1]

     A new year’s tournament is about to begin. Historic data shows that Piment Noir has a
     probability α of winning each game, where 0 < α < 1 and they never draw any games.

     (ii)    Determine the expected number of points Piment Noir will accumulate over
             the next year.                                                           [2]

     Consider the period from week t1 to week t2 and let St1 = N1 and St2 = N2.

     (iii)   Derive expressions for the number of games won and the number of games
             lost in the period assuming that no games are drawn.                   [2]

     (iv)    Derive expressions for the m-step transition probabilities for the process St.
                                                                                              [4]

     The fans of Piment Noir are unhappy with the team’s results, and they want the team
     to appoint Smith as the coach. Historic data shows that Smith’s teams have never lost
     a match. The probability that the team with Smith as coach draw their match in week t
     is .

     (v)     Calculate the expected number of points accumulated by Piment Noir if they
             hire Smith for the next year.                                             [2]

     (vi)    Comment on your result in part (v).                                           [2]
                                                                                    [Total 13]




CS2A S2025–6
8    A data analyst is seeking to fit multiple linear regression models to a training data set
     that contains weekly observations over a year with data for many variables. After
     using a stepwise selection process, the analyst finds a suitable model with four
     explanatory variables, X1 , X2 , X3 and X4 , for the response variable Y.

     (i)     Explain carefully the conditions under which this four-variable model would
             have been preferred to a five-variable model with the additional explanatory
             variable X5 if selection had been using:

             (a)     the Akaike information criterion.                                         [2]

             (b)     the Bayesian information criterion.                                       [2]

     After presenting their results, the analyst is asked to revise their model so that a
     maximum of three explanatory variables are used to help non-statisticians understand
     the interpretation of the results. There are four models fitted, each using three
     variables, and these are summarised in the table below that shows the value of the
     βI regression coefficients and the Residual Sum of Squares (RSS) for each model.

               Excluded variable β1          β2        β3         β4 Model RSS
                      X1           –        −2.48     1.02       1.19 1,040
                      X2         1.73         –       1.02       0.99  736
                      X3         1.70       −1.53       –        1.01  848
                      X4         2.03       −1.99     1.11         –  1,008

     The analyst decides to select the three-variable model by using a penalised regression
     method seeking to minimise:

                              Model RSS       λ g(β1 , β2 , β3 , β4 )

     where λ ≥ 0 is a regularisation parameter and g(β1 , β2 , β3 , β4 ) is the penalty function.

     (ii)    Determine the best three-variable model using:

             (a)     ridge regression with λ = 0.1,                                            [5]

             (b)     lasso regression with λ = 10,                                             [5]

             showing all of your working.

     (iii)   Describe the conditions under which the analyst would select a small value for
             the regularisation parameter, λ.                                            [3]
                                                                                 [Total 17]


                                   END OF PAPER




CS2A S2025–7


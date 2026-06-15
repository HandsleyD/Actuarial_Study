---
normalized_id: cs1-2024-september-question-paper-cs1a-september-2024-exam-paper
exam_code: CS1
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep24/CS1A _September 2024_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2024-september-question-paper-cs1a-september-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             11 September 2024 (am)


                   Subject CS1 – Actuarial Statistics
                            Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A S2024                                               © Institute and Faculty of Actuaries
1    An insurance company sells policies that provide coverage for 1 year for car
     accidents. The number of accidents per policy follows a Poisson distribution with a
     mean of 0.5 accidents per policy. Let X be the number of accidents in a randomly
     selected policy.

     (i)    Calculate the probability that X is at least 2.                                [3]

     The same insurance company proposes a life insurance policy that pays out a benefit
     on the death of the policyholder. The lifetime of the policyholder is assumed to follow
     an exponential distribution with a mean of 75 years.

     (ii)   Calculate the conditional probability that the policyholder will live beyond the
            age of 80, given that they have already reached the age of 70.                [4]
                                                                                    [Total 7]


2    In a Bayesian analysis a sample 𝑥 , …, 𝑥 is drawn from an exponential distribution
     with unknown parameter 𝜆. Prior knowledge about 𝜆 is available and a prior
     distribution is chosen with probability density function 𝑝 𝜆 𝑘𝜆     for 0 𝜆 1
     and 𝑝 𝜆      0 for 𝜆 0 or 𝜆 1. The parameter 𝑘 is a positive integer.

     (i)    Identify which one of the following expressions gives the Bayesian estimate
            for 𝜆 under all-or-nothing loss:

            A       𝜆    min 1, ∑


            B       𝜆    min 1, ∑

                                  ∑
            C       𝜆    min 1,

                                  ∑
            D       𝜆    min 1,          .
                                                                                           [3]

     (ii)   Comment on why the answer in part (i) needs to involve the minimum.     [1]
                                                                              [Total 4]




CS1A S2024–2
3    An actuary working at an investment bank is responsible for a portfolio of 300
     corporate bonds. The number of defaults in the portfolio in a given year is assumed to
     follow a binomial distribution with parameter p. In this portfolio, five bonds defaulted
     in the previous year.

     It is assumed that the prior distribution for the probability of default of a single bond,
     p, is a beta distribution. External analysis suggests that p has a mean of 0.6 and a
     standard deviation of 0.2.

     (i)     Verify that the parameters of the beta prior distribution are: α = 3 and β = 2.
                                                                                               [3]

     The actuary determines that the credibility factor Z can be derived using the following
     equation:
                                                   𝑛
                                      𝑍
                                           𝑛       𝛼   𝛽

     where n is the number of bonds in the portfolio.

     (ii)    Calculate the credibility factor Z.                                               [1]

     (iii)   Calculate the Bayesian credibility estimate for the probability of default.       [2]

     (iv)    Comment on your answers to parts (ii) and (iii).                                [2]
                                                                                       [Total 8]




CS1A S2024–3
4    A wooden stick is broken at a particular point, chosen at random, along its length. The
     length X, of the shorter piece follows a uniform distribution. You may assume that
     𝑋      , where L is the length of the wooden stick.

     (i)     State the probability 𝑃 𝑋      𝑥 in terms of x and L.                              [1]

     Let R be the ratio of the length of the shorter piece to the length of the longer piece.

     (ii)    Show that the probability that the ratio, R, is less than r, is:

                                                          2𝑟
                                        𝑃 𝑅     𝑟
                                                      1        𝑟

             where r is a given positive number.                                                [3]

     (iii)   Justify that the probability in part (ii) satisfies the conditions for a cumulative
             distribution function.                                                            [3]

     (iv)    Calculate the mean of R.                                                           [4]

     (v)     Identify which one of the following values gives the variance of R:

             A       0.4971
             B       0.0185
             C       0.0782
             D       0.1369.
                                                                                              [3]
                                                                                       [Total 14]




CS1A S2024–4
5    Let X1, X2 … Xn be a random sample from a distribution with probability density
     function given as:

                         𝑓 𝑥     𝜃 1    𝑥         , for 0   𝑥      ∞

     where 0 < θ < ∞ is an unknown parameter.

     Consider a gamma prior distribution for 𝜃 with parameters a, b > 0,
     i.e. θ ~ Gamma(a,b).

     (i)     Demonstrate that the posterior distribution of θ is
             Gamma 𝑎 𝑛, 𝑏 ∑ ln 1 𝑥 .                                                        [6]

     (ii)    Comment on the relationship between the prior and posterior distribution of θ.
                                                                                        [1]

     A random sample gives ∑ ln 1           𝑥     5.1 and the prior distribution for θ is
     assumed to be Gamma(1,0.4).

     (iii)   Determine the Bayes estimate of parameter θ under the quadratic loss
             function.                                                                      [2]

     (iv)    Determine a 95% equal-tailed credible interval for θ.                          [4]
                                                                                     [Total 13]




CS1A S2024–5
6    A data science actuary is analysing the relationship between the age of a policyholder
     (x) and the number of claims that the policyholder made over the past year (y). The
     actuary collects data from 100 policyholders and performs a linear regression
     analysis.

     The linear regression model is given by:

                                           y = a + bx + e

     (i)     Explain what a, b and e represent in the regression model.                     [2]

     The results of the regression analysis are given as

               𝑎   60, 𝑏      0.5, 𝑆𝑆       2521.416 and 𝑆        17970.44

     (ii)    Comment on the values of 𝑎 and 𝑏.                                              [2]

     (iii)   Calculate the coefficient of determination for this regression model.          [2]

     (iv)    Comment on the coefficient of determination calculated in part (iii).          [1]

     You are given 𝑆       67844 and 𝑥̅     61.8.

     (v)     Determine a 95% confidence interval for the coefficient b.                     [3]

     (vi)    Perform a statistical test for the hypotheses 𝑏   0 versus 𝑏   0 at 5% level
             using your answer to part (v).                                                 [1]

     (vii)   Determine a 95% prediction interval for the number of claims made over the
             past year for a 50 year old policyholder.                                 [4]
                                                                               [Total 15]




CS1A S2024–6
7     An art dealer is evaluating the performance of an art valuation expert. For this
      purpose, the dealer has collected a sample of expert valuations (in £1,000s), 𝑉 , and
      achieved auction prices (in £1,000s), 𝑃 , of ten paintings. The valuations and achieved
      auction prices are given in the following table together with the differences, 𝐷
      𝑃 𝑉 , and relative differences, 𝑅         (relative to the achieved price). The
      paintings are ordered according to the value suggested by the expert.

Valuation 𝑉            89        95        123    149        158      239     244   294   327   365
Price 𝑃                68.1     113.4 155.8 172.6        70.3        399.2 369.4 526.5 450.9 473.7
𝐷    𝑃        𝑉     −20.9       18.4       32.8   23.6   −87.7       160.2 125.4 232.5 123.9 108.7
𝑅    𝐷 /𝑃           −0.307      0.162 0.211 0.137 −1.248 0.401 0.339 0.442 0.275 0.229



                   𝐷        716.9,     𝑅      0.641,     𝐷         132,712,    𝑅    2.3404


      (i)         Calculate the mean and sample standard deviation of the differences 𝐷 .         [3]

      (ii)        Calculate a 95% confidence interval for the mean difference between achieved
                  auction price and valuation.                                              [2]

      (iii)       Perform a test of the null hypothesis that the mean difference between
                  achieved auction price and valuation is zero against the alternative that the
                  mean difference is not zero based on your answer to part (ii). Use a
                  significance level of 5% for your test decision.                              [2]

      (iv)        Comment on the assumption required for the confidence interval in part (ii)
                  and the test in part (iii) to be appropriate.                               [2]

      It is suggested that the differences 𝐷 are not a suitable quantity to judge if the expert
      is biased. Instead, relative differences should be used.

      (v)         Perform a test of the null hypothesis that the mean relative difference is zero
                  against the alternative that the mean relative difference is not zero. Use a
                  significance level of 5%.                                                      [4]

      (vi)        Comment on your answers in parts (iii) and (v).                                 [2]

      (vii)       Determine a 95% prediction interval for the price that can be achieved at an
                  auction for a painting that is valued at £200 by the expert. Base the prediction
                  interval on the sample 𝑅 , …, 𝑅 of the relative difference. As an
                  approximation you may assume that the 𝑅 , …, 𝑅 are independent of each
                  other and normally distributed with unknown mean but known standard
                  deviation of 0.25.                                                             [5]
                                                                                         [Total 20]




CS1A S2024–7
8    An actuary working for an insurance company wishes to model the size of claims on a
     particular type of insurance policy, based on the recorded sizes of past claims. The
     insurance policy has a limit, M, which is the maximum amount the insurance
     company will pay for a single claim. Whereas sizes of claims are unlimited, recorded
     sizes of claims are limited to M.

     Let 𝑋 be a random variable denoting the size of claim i, where all 𝑋 are
     independent. The actuary wishes to model the size of claims using an exponential
     distribution with parameter 𝜆. The collected data consists of n + k claims where n is
     the number of claims whose recorded size is below the limit and k is the number of
     claims whose recorded size equals the limit.

     (i)     Explain why the collected data is an example of censored data.                   [2]

     (ii)    Show that the log-likelihood function is given by:


                          𝑙 λ; 𝑥    𝑛 ∙ ln λ    λ kM         𝑥

                                                                                              [5]

     (iii)   Derive the maximum likelihood estimator, 𝜆 of 𝜆. In your answer you should
             verify that it maximises the likelihood function.                        [4]

     For the insurance policy that the actuary is considering, the limit is £50,000. Of the
     past 300 recorded claims, nine were at the limit and the remaining claims totalled
     £750,000.

     (iv)    Calculate the maximum likelihood estimate of 𝜆 for the given data.               [2]

     (v)     Calculate, using your answer to part (iv), the maximum likelihood estimate of
             the mean claim size.                                                       [1]

     The actuary wishes to obtain a confidence interval for the mean claim size.

     (vi)    Calculate the Cramer–Rao Lower Bound of 𝜆.                                       [2]

     (vii)   Calculate, using your answer to part (vi), an approximate 95% confidence
             interval for the mean claim size.                                          [3]
                                                                                 [Total 19]


                                   END OF PAPER




CS1A S2024–8



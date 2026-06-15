---
normalized_id: cs1-2021-september-question-paper-cs1a-221-exam-final-clean
exam_code: CS1
year: 2021
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep21/CS1A_221_EXAM_Final Clean.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2021-september-question-paper-cs1a-221-exam-final-clean

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             17 September 2021 (am)


                   Subject CS1 – Actuarial Statistics
                            Core Principles
                                         Paper A
                       Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A S2021                                               © Institute and Faculty of Actuaries
1    A random sample of size 15 is taken from a Normal distribution with mean 19 and
     variance 2.

     (i)     Write down the sampling distribution of S2 .                                           [2]

     (ii)    Explain why your answer in part (i) is valid for this random sample.                 [1]
                                                                                            [Total 3]


2    A statistician wants to simulate values from certain distributions and has available
     only a random number generator that yields independent samples from a N(0,1)
     distribution.

     (i)     Describe an algorithm to simulate random numbers from a t distribution with
             1 degree of freedom.                                                      [3]

     (ii)    Describe an algorithm to simulate random numbers from a gamma distribution
                                     3     1
             with parameters and .                                                                  [3]
                                     2     2

     (iii)   Describe an algorithm to simulate random numbers from an F distribution
             with (1,1) degrees of freedom.                                           [2]
                                                                                [Total 8]

                                                                                b
3    The random variable X follows a distribution with mean E X
                                                                               a–1
                                                                                     and variance
                          2
                     ab
     Var X =                       where a = 4 and b = 6 are the parameters of the distribution.
                 a – 1 2 (a – 2)


     Y is a random variable such that

     E (Y | X = x) = 3x + 6

     and

     Var (Y | X = x) = x2 + 4

     Calculate the unconditional standard deviation of Y.
                                                                                                    [6]




CS1A S2021–2
4    The number of pizzas ordered in a restaurant each day follows a Poisson distribution
     with unknown mean m. The prior distribution for m follows a gamma distribution
     with mean 35 and standard deviation 5. The restaurant receives 135 pizza orders over
     7 days.

     (i)     Write down an expression of the prior probability density function for m
             leaving out any coefficient of proportionality.                               [3]

     (ii)    Identify which one of the following expressions gives the correct posterior
             probability density function for m.

             A      fposterior m ∝ m135 e – 7m

             B      fposterior m ∝ m183 e – 7.7m

             C      fposterior m ∝ m184 e – 8.4m

             D      fposterior m ∝ m183 e – 8.4m
                                                                                           [3]

     (iii)   Calculate a point estimate for the number of pizzas ordered each day, using
             Bayesian estimation under all-or-nothing loss.                              [4]

     (iv)    Calculate a point estimate for the number of pizzas ordered each day, using
             Bayesian estimation under squared-error loss.                               [2]
                                                                                  [Total 12]


5    The probability that a claim is made on a car insurance policy in a particular year is
     0.06. The policies are assumed to be independent among them. 500 of these policies
     are selected at random.

     (i)     Calculate the probability that no more than 40 of these policies will result in a
             claim during the year, stating any approximations you make.                    [5]

     Past data from the insurer indicate that the standard deviation of claim amounts is
     £75. The insurer wishes to construct a 95% confidence interval for the mean claim
     amount, with an interval width of £10.

     (ii)    Calculate the sample size needed to achieve this level of accuracy for a 95%
             confidence interval.                                                         [4]
                                                                                    [Total 9]




CS1A S2021–3
6    Consider independent observations y1 , y2 , …, yn of a random variable Y with
     probability density function

                                     f y = 2cy exp –cy2 , y > 0,

     where c > 0 is an unknown parameter. Let F(y) denote the cumulative distribution
     function (CDF) of Y.

     (i)     Identify which one of the following expressions gives the inverse of the CDF
             of Y:
                            1
             A       y = – log (1 – F(y))
                            c

                                 1
             B       y = 1 – – log (1 – F(y))
                                 c

                             1                1/2
             C       y = – log (1 – F(y))
                             c

                                 1                  1/2
             D       y = 1 – – log (1 – F(y))
                                 c
                                                                                            [2]

     (ii)    Determine how values of this random variable can be generated using the
             inverse transform method.                                                      [2]

     A gamma prior distribution is assumed for 𝑐 with parameters a and b.

     (iii)   Identify which one of the following expressions is correct for the posterior
             density of parameter c:

             A       p c | y) ∝ cn + a – 1 exp – ab + ∑ni= 1 y2i c

             B       p c | y) ∝ cn + a – 1 exp – b + ∑ni= 1 y2i c

             C       p c | y) ∝ cn + a exp – ab + ∑ni= 1 y2i c

             D       p c | y) ∝ cn + a exp – b + ∑ni= 1 y2i c
                                                                                            [2]

     (iv)    Determine the posterior distribution of parameter c with all relevant
             parameters.                                                                   [2]
                                                                                     [Total 8]




CS1A S2021–4
7    Let Xi , i = 1, 2, …, n be independent random variables, each following an exponential
     distribution with parameter b. We consider the random variable Y = ∑ni= 1 Xi.

     (i)    Justify why MY t , the moment generating function (MGF) of variable Y, is
            given by
                                                     –n
                                   MY t = 1 – t b                                        [2]

     Let Z be a random variable such that the MGF of Z is Mz t = MY t .

     (ii)   Determine the value of b for which Z follows a chi-square distribution,
            specifying the degrees of freedom of the chi-square distribution.           [3]
                                                                                  [Total 5]




CS1A S2021–5
8    The number of hospital admissions for respiratory conditions in a big city was
     recorded over 150 days. The level of the concentration of a certain pollutant was also
     recorded (‘low’, ‘medium’, ‘high’), together with the mean temperature (in degrees
     Celsius) on the day. Part of the data is shown below.

                                            Pollutant    Hospital
                              Temperature
                       Day                concentration admissions
                                  X1           X2          (Y)
                        1           10            Low               26
                        2           8             Low               37
                         .           .              .                .
                         .           .              .                .
                         .           .              .                .
                        50          12            Low               32
                        51          7            Medium             31
                         .           .              .                .
                         .           .              .                .
                         .           .              .                .
                       120          3            Medium             28
                       121          5             High              35
                         .           .              .                .
                         .           .              .                .
                         .           .              .                .
                       150          6             High              31

     A generalised linear model is to be fitted to investigate the dependence of the number
     of hospital admissions on mean temperature and pollutant concentration.

     (i)       Write down a suitable model for the number of hospital admissions.            [3]

     (ii)      Justify the inclusion of the terms that you have used in the linear predictor in
               part (i).                                                                      [2]

     A statistician fitted a GLM, and obtained the following summary:

             Coefficients:
                                Estimate    Std. error z value      Pr(>|z|)
             (Intercept)         –0.372       0.053       –6.916    4.66e-12 ***
             X1                   0.090       0.015        5.676    1.38e-08 ***
             X2 Medium           –0.100       0.080       –1.244    0.213570
             X2 High              0.298       0.082        3.614    0.000301 ***
             X1 : X2 Medium       0.036       0.023        1.551    0.120933
             X1 : X2 High        –0.076       0.028       –2.705    0.006825 **

     Suppose that, on a different day, the pollutant concentration is High and the mean
     temperature is 19 degrees Celsius.

     (iii)     Write down the linear function of the parameters the statistician should use in
               constructing a predictor of the number of hospital admissions on that day. [1]

CS1A S2021–6
        (iv)     Explain why estimates for X2 Low and X1 : X2 Low are not shown in the
                 summary of the results above.                                                 [1]

        (v)      Comment on the impact of the pollutant concentration on the number of
                 hospital admissions, based on the summary of results above.              [2]
                                                                                    [Total 9]


9       An actuarial analyst working in an investment bank believes that a firm’s first year
        percentage return (y) depends on its revenues (x). The table below provides a
        summary of x, y and the natural logarithmic revenue (z) for 110 firms.

                                                      Sample
                        Mean         Median          standard    Minimum        Maximum
                                                     deviation
    y                    0.106        –0.130            0.824      –0.938            4.333
    x (£ million)      134.487        39.971         261.881        0.099       1455.761
    z = log(x)           3.686         3.688            1.698      –2.316            7.283

        The analyst determined that the correlation between y and x is −0.0175 and that the
        linear regression line of the return on the revenue is

                                              y = a + bx.

        (i)      (a)    Identify which one of the following options gives the correct values of
                        the coefficient estimates a and b:

                        A        a = 0.113             and       b = –5.506 × 10–5

                        B        a = –5.506 × 10–5     and       b = 0.113

                        C        a = 748.1227          and       b = –5.562

                        D        a = –5.562            and       b = 748.1227

                 (b)    Calculate the fitted return for a firm with revenue 95.55.
                                                                                               [3]




CS1A S2021–7
     The analyst estimated the regression using the logarithm revenues (z) and y as

                                     y = 0.438 – 0.090z

     (ii)    (a)    Calculate the fitted return for the firm with revenue 95.55 (£ million)
                    using the regression model with the logarithmic revenues.

             (b)    Comment on the result in parts (ii)(a) and (i)(b).

             (c)    Calculate the value of the sum Szy .
                                                                                            [3]

     (iii)   Perform a statistical test at the 10% significance level to determine if the
             logarithmic revenues significantly affect the percentage returns.              [5]

     The analyst speculated that, other things being equal, firms with greater revenues will
     be more stable and thus enjoy a larger return. They considered the null hypothesis of
     no relation between z and y.

     (iv)    Perform a statistical test at the 10% significance level to determine whether
             the analyst’s speculation is correct. Your answer should include the
             hypotheses of the test.                                                       [3]

     (v)     Calculate Pearson’s correlation coefficient between z and y.                   [1]

     A client is considering investing in a firm that has z = 2.

     (vi)    (a)    Calculate the client’s predicted first year percentage return.

             (b)    Calculate an approximate 95% confidence interval corresponding to
                    the predicted percentage return in part (vi)(a).
                                                                                            [4]

     A firm in the data has logarithmic revenue z = 1.76 and the highest first year
     percentage return y = 4.333.

     (vii)   (a)    Calculate the residual for this observation.

             (b)    Comment on the observed data for this firm using part (vii)(a).
                                                                                             [3]
                                                                                     [Total 22]




CS1A S2021–8
10   Total yearly aggregate claims in a particular company are modelled as a random
     variable X, where X is assumed to follow a Normal distribution with unknown mean µ
     and variance σ2 = 12,0002 . Aggregate claims from the last 5 years are as follows:

            146,000            142,000                  153,000                127,000            132,000

     An analyst wishes to estimate the unknown parameter µ.

     (i)       Identify which one of the following gives the correct expression of the
               derivative of the log-likelihood function:
                         dl μ
               A                = – ∑ni= 1 xi – μ
                          dμ

                         dl μ
               B                = ∑ni= 1 xi – μ
                          dμ

                         dl μ       1
               C                =        ∑ni= 1 xi – μ
                          dμ        σ2

                         dl μ           1
               D                = – 2 ∑ni= 1 xi – μ
                          dμ          σ
                                                                                                            [2]

     (ii)      Calculate the maximum likelihood estimate for µ, using your answer to
               part (i).                                                                                    [1]

     (iii)     Calculate a 95% confidence interval for µ.                                                   [4]


     The analyst assumes a Normal prior distribution for μ with density function

                                                             2
                                                    μ – μ0
                                                –
                                                      2σ20
                                    f μ ∝e                       ,   μ0 > 0 and σ0 > 0.

     For such a prior, the analyst derives the posterior distribution for μ as

                                                             1                    nτx + τ0 μ0 2
                                 p μ x ∝ exp –                 nτ + τ0       μ–
                                                             2                     nτ + τ0

                   1                  1
     where τ =          and τ0 =            .
                   σ2                σ20


     Prior information about µ suggests that μ0 = 150,000 and σ20 = 10,204.082 .

     (iv)      Write down the distribution corresponding to the density p μ x above, with
               all its parameters values.                                                [2]

     (v)       Comment on the relationship between the prior distribution and the posterior
               distribution of μ.                                                         [1]

     (vi)      Calculate the value of the Bayesian credibility estimate for μ under quadratic
               loss.                                                                        [2]

CS1A S2021–9
     (vii)   Calculate an approximate 95% Bayesian interval for μ, based on its posterior
             distribution.                                                              [2]

     (viii) Comment on the intervals estimated in parts (iii) and (vii).                 [1]

     Another analyst assumes a Uniform prior distribution for μ with mean μ0 = 150,000
     and variance σ20 = 10,204.082 .

     (ix)    Identify which one of the following gives the correct expression of the
             posterior distribution for μ:

                               μ – μ0               n
             A       p μx ∝             exp –             μ–x 2
                                 σ20               2σ2

                                         n
             B       p μ x ∝ exp –            μ–x 2
                                        2σ2

                                                                   nx μ0    2
                                                                      +
                                        1     n    1               σ2 σ2
             C       p μ x ∝ exp –                + 2         μ–    n
                                                                        0
                                                                        1
                                        2 σ2       σ0                 +
                                                                   σ2 σ2
                                                                        0


                                         2                n
             D       p μ x ∝ μ – μ0           exp –            μ–x 2
                                                         2σ2
                                                                                         [3]
                                                                                  [Total 18]


                                  END OF PAPER




CS1A S2021–10



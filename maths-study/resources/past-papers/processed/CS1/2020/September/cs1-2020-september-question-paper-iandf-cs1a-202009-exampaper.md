---
normalized_id: cs1-2020-september-question-paper-iandf-cs1a-202009-exampaper
exam_code: CS1
year: 2020
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep20/IandF_CS1A_202009_ExamPaper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2020-september-question-paper-iandf-cs1a-202009-exampaper

   INSTITUTE AND FACULTY OF ACTUARIES




                                EXAMINATION

                               24 September 2020 (am)


                  Subject CS1A – Actuarial Statistics
                           Core Principles
                         Time allowed: Three hours and fifteen minutes




      In addition to this paper you should have available the 2002 edition of the Formulae
             and Tables and your own electronic calculator from the approved list.


If you encounter any issues during the examination please contact the Examination Team
on T. 0044 (0) 1865 268 873


CS1A S2020                                                   © Institute and Faculty of Actuaries
1    Let X1 , X2 ,…, X81 be independent and identically distributed continuous random
     variables, each with expected value μ = E Xi = 5, and variance σ2 = V Xi = 4.

     (i)     Determine the sampling distribution of the statistic T = ∑81
                                                                       i=1 Xi .            [2]

     (ii)    Calculate the probability P(T > 369) using your answer to part (i).           [2]
                                                                                     [Total 4]


2    A pair of fair six-sided dice is rolled once.

     (i)     Identify which one of the following options gives the probability that the sum
             of the two dice is seven:
                     1
             A1
                    36
                    1
             A2
                    6
                     1
             A3
                    12
                    1
             A4
                    3
                                                                                           [2]

     (ii)    Identify which one of the following options gives the probability that at least
             one dice shows three:

                    25
             A1
                    36
                     1
             A2
                    36
                    11
             A3
                    36
                     5
             A4
                    36
                                                                                           [2]

     (iii)   Identify which one of the following options gives the probability that at least
             one dice shows an odd number:
                    1
             A1
                    4
                    3
             A2
                    4
                    1
             A3
                    2
                     1
             A4
                    12
                                                                                           [2]




CS1A S2020–2
     The random variables representing the numbers on the first and second dice are
     denoted by X and Y respectively.

     (iv)   (a)     Identify which one of the following options gives the correct
                    expression of E (X + Y | X = 4), that is the conditional expectation of the
                    sum of the two dice given that X = 4:

                    A1        E(Y)
                    A2        E X + E(Y)
                    A3        4E(X) + E(Y)
                    A4        4 + E(Y)
                                                                                                                  [1]

            (b)     State a necessary assumption for deriving the answer in part (iv)(a).
                                                                                                                  [1]

            (c)     Determine the value of E(X + Y | X = 4), using your answer to part
                    (iv)(a).                                                            [2]
                                                                                 [Total 10]


3    The following data are available on three television factories that produce all the
     televisions used in a country.

                                          % of total                   Probability of
                  Factory
                                          production                    defect (Def)
                     A                       0.35                          0.020
                     B                       0.40                          0.015
                     C                       0.25                          0.010

     A television is selected at random and found to have a defect (Def).

     (i)    Identify which one of the following expressions gives the required expression
            to correctly calculate the probability that the selected television was made in
            factory B.
                                             P(made in B | Def) × P(Def)
            A1
                    P(made in A | Def)P(Def) + P(made in B | Def)P(Def) + P(made in C | Def)P(Def)

                                                    P(Def | made in B) × P(made in B)
            A2
                    P(Def | made in A)P(made in A) + P(Def | made in B)P(made in B) + P(Def | made in C)P(made in C)

                                                           P(Def | made in B) + P(made in B)
            A3
                    [P(Def | made in A) + P(made in A)] × [P(Def | made in B) + P(made in B)] × [P(Def | made in C) + P(made in C)]

                                        P(Def | made in B)
            A4
                    P(Def | made in A) + P(Def | made in B) + P(Def | made in C)
                                                                                                                  [2]

     (ii)   Calculate, by using your answer to part (i), the probability that the selected
            television was produced by Manufacturer B.                                      [2]
                                                                                      [Total 4]


CS1A S2020–3
4    A random variable Y has probability density function

                                            f y = ae – 5y , y > b,

     where a, b are positive constants.

     The moment generating function of Y is denoted by MY (t).

     (i)     Write down the bounds of the integration required to calculate MY (t).       [1]

     (ii)    Identify which one of the following options gives the correct expression for
             MY (t).                                                                      [2]

                        e – 1 – 5t b
             A1     a
                          1 – 5t

                    a e – 1 – 5t b
             A2
                    b     1 – 5t


                    ae– 5–t b
             A3
                    b     5–t

                        e– 5–t b
             A4     a
                           5–t


     (iii)   Write down the condition on t for MY (t) to be finite.                       [1]

     (iv)    Determine an expression giving the constant a in terms of b, using your
             answer for MY (t) from part (ii).                                           [3]
                                                                                   [Total 7]




CS1A S2020–4
5    Consider a regression model in which the response variable Yi is linked to the
     explanatory variable Xi by the following equation:

                                  Yi = a + bXi + ei, i = 1, ..., n

     assuming that the error terms ei are independent and Normally distributed with
     expectation 0 and variance 2. In a sample of size n = 10, the following statistics have
     been observed:
                                        n                   n

                                             xi = 141,           yi = 127 ,
                                       i=1                 i=1

                          n                     n                      n

                               x2i = 2,014,          y2i = 1,629 ,          xiyi = 1,810.
                         i=1                   i=1                    i=1



     (i)     Calculate values for Sxx , Syy , and Sxy .                                           [3]

     (ii)    Write down, using your answers to part (i), the value of Pearson’s correlation
             coefficient between the variables Xi and Yi.                                 [1]

     (iii)   Calculate estimates of the parameters a and b in the regression model.               [2]
                                                                                            [Total 6]




CS1A S2020–5
6    (i)     State the three components of a Generalised Linear Model (GLM).                              [3]

     In a mortality model, the number of deaths Dx at age x is modelled with a GLM. Dx is
     assumed to have a Poisson distribution with expectation mx = exp(a + bx) for each age
     x, such that Dx ~ Poisson(exp(a + bx)).

     (ii)    State the specific form of each of the three components of the GLM for the
             above mortality model.                                                     [3]

     (iii)   Identify which one of the following expressions gives the correct likelihood
             function as a function of the unknown parameters a and b based on the
             observed number of deaths for all ages 20 to 80 given by d20 ,…, d80 , assuming
             that the numbers of deaths at different ages are independent.

                                    80                       80
                                                                     1 – e a + bx a + bx d .
             A1       L a, b =             P[Dx = dx ] =                 e       e        x
                                                                    dx !
                                  x = 20                   x = 20

                                   80                       80
                                                                        a + bx                 .
             A2       L a, b =            P[Dx = dx ] =            ee            e a + bx dx
                                 x = 20                   x = 20

                                  80                       80
                                                                    1 – e a – bx a – bx d .
             A3       L a, b =            P[Dx = dx ] =                 e       e        x
                                                                   dx !
                                 x = 20                   x = 20

                                  80                       80
                                                                    1 e a+ bx dx – a + bx .
             A4       L a, b =            P[Dx = dx ] =                 e       e
                                                                   dx !
                                 x = 20                   x = 20
                                                                                                          [2]

     An analyst is reviewing the mortality model and is considering deaths only for ages
     between 40 to 43 inclusive.

     The analyst collects data for deaths and estimates the parameters for 𝑎 and 𝑏 as
     follows:
                           d40 = 2      d41 = 3    d42 = 1      d43 = 0

                                   a = 0.01512               b = –0.00686

     (iv)    Identify, using your answer to part (iii), which one of the following options
             gives the correct value of the likelihood function, based on the analyst’s data
             and parameter estimates.

             A1     0.00222
             A2     4.05473
             A3     0.0008
             A4     4.32729
                                                                                                          [2]
                                                                                                   [Total 10]


CS1A S2020–6
7    The probability density function of a Normal distribution is given as follows:

                                                          1                         1
                           f x; m, s2 =                            exp –               x–m 2
                                                      s√2π                         2s2

     with –∞ < x < ∞, –∞ < m < ∞, s > 0.

     (i)     Identify which one of the following options gives the correct expression for
             the exponential family of the density f.                                     [2]

                     1           xm – m2 ⁄2              x2
             A1           exp                     –            – ln s
                    √2π                s2                2s2

                           xm – m2 ⁄2            x2       ln (2πs2 )
             A2     exp                     –      2–
                                 s2              2s                2

                           x 2m – x             m 2 ⁄2        ln( 2πs2 )
             A3     exp                     –            –
                                2s2              s2                2

                           1                                  x2           ln( 2πs2 )
             A4     exp          xm – m2 ⁄2 –                          –
                           s2                                  2               2



     (ii)    Identify which one of the following options gives the natural parameter θ, the
             scale parameter ϕ, and the relevant functions b θ , a ϕ and c(x, ϕ) of the
             exponential family for this distribution, using your answer to part (i).

                                                                                   s2                  1
             A1      θ = m, ϕ = s2 , b θ = m2 , a ϕ =
                                                                                   2
                                                                                        , c x, ϕ = –
                                                                                                       2
                                                                                                           x2 + ln( 2πs2 )

                                      s2                                           s2                  1 x2
             A2      θ = m, ϕ = , b θ = m2 , a ϕ = , c x, ϕ = –
                                      2                                            2                   2 ss
                                                                                                              + ln( 2πs2 )

                                                                                   s2                  1          ln( 2πs2 )
             A3      θ = s2 , ϕ = m, b θ = m2 , a ϕ = , c x, ϕ = –
                                                                                   2                   2
                                                                                                           x2 +
                                                                                                                      2

                                                          m2                                       1 x2
             A4      θ = m, ϕ = s2 , b θ =
                                                           2
                                                                , a ϕ = s2 , c x, ϕ = –
                                                                                                   2 s2
                                                                                                              + ln( 2πs2 )
                                                                                                                               [3]

     An analyst found that the mean and standard deviation of this distribution are
     E X = m and SD X = s2 . In your answer you may denote θ by theta and ϕ by phi.

     (iii)   Justify, using the properties of the exponential family, whether or not the
             analyst is right about the mean and standard deviation of this distribution.                                      [3]


     (iv)    Contrast a numerical variable and a factor covariate in the context of a
             generalised linear model.                                                     [2]
                                                                                    [Total 10]




CS1A S2020–7
8    A statistician has recorded the number of advertising telephone calls that their office
     received over 2 years. The statistician has recorded data Xij, which is the number of
     calls received in the ith quarter of the jth year (where i = 1, 2, 3, 4 and j = 1, 2):

                                Xi1       Xi2         X̅ i      ∑j ( Xij – X̅ i)2
                   i=1          43        29          36              98
                   i=2          38        42          40               8
                   i=3          22        18          20               8
                   i=4          68        56          62              72

     (i)     Calculate values for:

             (a)     E m(θ)

             (b)     E s2 (θ)

             (c)     Var m θ .
                                                                                              [4]

     (ii)    Calculate an estimate for X13, the number of advertising telephone calls that the
             statistician’s office expects to receive in the first quarter of year 3, using your
             answers to part (i) and the assumptions of the Empirical Bayes Credibility
             Theory Model 1 (EBCT Model 1).                                                    [2]

     (iii)   (a)     State two key assumptions underlying the EBCT Model 1.

             (b)     Explain what these assumptions mean for the data Xij above.
                                                                                              [4]
                                                                                       [Total 10]




CS1A S2020–8
9    For an empirical investigation into the amount of rent paid by tenants in a town, data
     on income X and rent Y have been collected. Data for a total of 300 tenants of one-
     bedroom flats have been recorded. Assume that X and Y are both Normally distributed
     with expectations μX and μY ,and variancesσ2X and σ2Y . SX and SY are the sample
     standard deviation for random samples of X and Y, respectively.

     The random variable ZX is defined as

                                                   S2
                                         ZX = 299 X2 .
                                                   σX


     (i)     State the distribution of ZX and all of its parameters.                       [2]

     (ii)    Write down the expectation and variance of ZX .                               [2]

     (iii)   Explain why the distribution of ZX is approximately Normal.                   [2]

     (iv)    Calculate values of an approximate 2.5% quantile and 97.5% quantile of the
             distribution of ZX using your answers to parts (ii) and (iii).            [3]

     In the collected sample, the mean income is $1,838 with a realised sample standard
     deviation of $211, the mean rent is $608 with a realised sample standard deviation of
     $275 and Σxiyi = 348 × 106 .

     (v)     Calculate a 95% confidence interval for the mean income.                      [2]

     (vi)    Calculate a 95% confidence interval for the mean rent.                        [2]

     (vii)   Calculate an approximate 95% confidence interval for the variance of income
             using your answer to part (iv).                                           [2]

     (viii) Identify which one of the following options gives the correct form of the
            equation for the simple linear regression model of rent on income, including
            any assumptions required for statistical inference.                         [2]

             A1      yi = a + bxi
             A2      yi = a + bxi + zi with E zi = 0
             A3      yi = a + bxi + zi with zi ~ χ2 , 299 df
             A4      yi = a + bxi + zi with zi ~ N(0, σ2 )

     (ix)    Calculate estimates of the slope and the intercept of the model in part (viii)
             based on the above data for the 300 tenants.                                   [4]
                                                                                    [Total 21]




CS1A S2020–9
10       It is thought that house prices in certain areas are correlated with the quality of
         schools in the same areas. A study has been carried out in ten regions where average
         house prices and school quality indices ranging from 1 (very poor) to 10 (excellent)
         have been recorded:

     Region i            1      2       3     4        5        6         7          8    9    10
     School index xi     9      5       7     6        4        9         7          8    5    6
     House prices yi
                       210    185    190     190      170      195       180     195     160   150
     (£1,000s)

                             xiyi =12,240;        x2i = 462;        y2i = 335,975.

         (i)     State what is meant by response and explanatory variables in a linear
                 regression.                                                                         [1]

         A plot of the data is given below.




         (ii)    Comment on the relationship between school quality index and house price,
                 using the plot.                                                           [2]

         Pearson’s correlation coefficient between the data is given as r = 0.7.

         (iii)   A statistical test is performed, using Fisher’s transformation, to determine
                 whether Pearson’s population correlation coefficient is significantly different
                 from zero, i.e. for
                                        H0 : ρ = 0 vs H1 : ρ ≠ 0.

                 (a)    Identify which one of the following options gives the correct value of
                        the test statistic for this test:

                        A1      2.295
                        A2      6.071
                        A3      2.743
                        A4      4.009
                                                                                                     [2]

CS1A S2020–10
            (b)     Write down the conclusion of the test at the 5% level of significance,
                    including the relevant critical value(s) from the Actuarial Formulae
                    and Tables.                                                          [3]

     The linear regression line, of house prices (y) on school index (x), is given as

                                    y = 133.8 + 7.386x.

     (iv)   A t test is performed to determine if the slope parameter is significantly
            different from 0.

            (a)     Identify which one of the following options gives the correct values of
                    the sums Sxx , Syy , Sxy for the house prices (y) and school index (x) data:

                    A1      Sxx = 32.8;    Syy = 2,415.4;    Sxy = 235
                    A2      Sxx = 20.5;    Syy = 3,131.2;    Sxy = 182
                    A3      Sxx = 26.4;    Syy = 2,912.5;    Sxy = 195
                    A4      Sxx = 35.2;    Syy = 2,817.4;    Sxy = 247
                                                                                             [2]

            (b)     Calculate the value of the test statistic.                               [2]

            (c)     Write down the distribution of the test statistic, if the null hypothesis of
                    the test is correct.                                                     [1]

            (d)     Write down the conclusion of the test at the 5% level of significance,
                    including the relevant critical value(s) from the Actuarial Formulae
                    and Tables.                                                          [3]

     (v)    Comment on the results in parts (iii)(b) and (iv)(d).                           [2]
                                                                                     [Total 18]


                                 END OF PAPER




CS1A S2020–11


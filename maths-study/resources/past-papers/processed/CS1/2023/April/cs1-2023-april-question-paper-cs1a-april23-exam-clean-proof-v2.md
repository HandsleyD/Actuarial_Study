---
normalized_id: cs1-2023-april-question-paper-cs1a-april23-exam-clean-proof-v2
exam_code: CS1
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr23/CS1A_April23_EXAM_Clean Proof_v2.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2023-april-question-paper-cs1a-april23-exam-clean-proof-v2

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 21 April 2023 (am)


                   Subject CS1 – Actuarial Statistics
                            Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A A2023                                               © Institute and Faculty of Actuaries
1    Two independent random variables, X and Y, have densities fX x = λ2 xe –λx and
     fY y = λe –λy respectively, where λ > 0, x ≥ 0 and y ≥ 0. The random variable Z is
     defined as the sum of X and Y (Z = X + Y).

     (i)    Identify the distribution of Y with its parameter.                            [1]

     (ii)   Identify which one of the following expressions gives the probability density
            function of Z:

                             λ3
            A       fZ z =        ze –λz
                             2

                             λ3 2 –λz
            B       fZ z =     ze
                             2

                             λ2 3 –λz
            C       fZ z =     ze
                             2

                             λ
            D       fZ z = z2 e –λz .
                             2
                                                                                          [3]
                                                                                    [Total 4]


2    Two friends are chatting on a social media platform: the first friend has a typing speed
     equal to three messages per minute while the second friend has a typing speed of two
     messages per minute. The process of writing the messages for each of the two friends
     is modelled with a Poisson process and these processes are assumed independent.

     Calculate the probability that only two messages in total are exchanged between
     the two friends during the first minute.                                             [4]


3    An Actuary determines that the claim size for a certain class of accident is a random
     variable, X, with moment-generating function:

                                                1                    1
                             MX t =                  4
                                                       , where t <
                                           1 – 2500t               2500

     Determine, using MX t , the standard deviation of the claim size for this class of
     accident.                                                                            [4]




CS1A A2023–2
4    Statisticians A and B obtain independent samples X1 , …, X10 and Y1 , …, Y17
     respectively, both from a Normal distribution with expectation μ and variance σ2 ,
     with both μ and σ unknown. The variance, σ2 , can be estimated by the sample
     variance of each sample, denoted as S2X and S2Y .

     (i)    Identify which one of the following options gives the correct probability that
            S2X exceeds 1.5σ2:

            A       P(S2X > 1.5σ2) = 0.14

            B       P(S2X > 1.5σ2) = 0.18

            C       P(S2X > 1.5σ2) = 0.10

            D       P(S2X > 1.5σ2) = 0.21.
                                                                                          [3]

     (ii)   Calculate the probability that S2Y exceeds 1.5σ2.                             [3]
                                                                                    [Total 6]


5    Two people are playing a game together, involving the toss of a single coin. The coin
     used is biased so that the probability of throwing a head is an unknown constant, h. It
     is known that h must be either 0.35 or 0.85. Prior beliefs about h are given by the
     following distribution:

                        P h = 0.35 = 0.7        P h = 0.85 = 0.3

     The coin is tossed 15 times, and nine heads are observed.

     Determine the posterior probabilities for the two possible values of h.              [7]




CS1A A2023–3
6    An Analyst concludes from an empirical study that the number of children, X, per
     family in a certain region has the following distribution:

      Number of children, x               0      1       2       3     More than 3
      Probability px = P[X = x]         0.05    0.42    0.4     0.1        0.03

     When asked for the expected number of children per family, the Analyst claims that
     an exact value cannot be calculated for the expectation, but that a lower limit can be
     provided.

     (i)     Explain whether the Analyst is right.                                         [3]

     (ii)    Calculate a lower limit for E[X], the expected number of children per family
             in this region.                                                             [3]

     From a further study of families with more than three children, it is concluded that the
     conditional expectation E X|X > 3 = 4.5.

     (iii)   Identify which one of the following options gives the expectation of X:

             A      E[X = 1.915
             B      E[X = 1.175
             C      E[X = 1.655
             D      E[X = 1.325.
                                                                                           [3]
                                                                                     [Total 9]




CS1A A2023–4
7    Let X1 , Y1 , …, (Xn , Yn ) be pairs of random variables with each pair Xi , Yi being
     independent of all other pairs. The distribution of Xi is N(0, 1), for i = 1, …, n. The
     conditional distribution of Yi , given that Xi takes a particular value xi , is N xi θ, 1 ,
     for i = 1, …, n where θ ∈(−∞,+∞) is an unknown parameter.

     (i)     Identify which one of the following options gives the correct expression of the
             likelihood function:
                               n                        2
                                            yi + xi θ       – x2i
             A        L θ =         exp
                                                    2
                              i=1

                               n
                                                                    2       2
                                    1
             B        L θ =               exp    – yi – xi2θ + xi
                              i=1   2π
                               n
                                                                    2           2
                                     π
             C        L θ =               exp    – yi – xiθ2 – xi
                              i=1    2
                               n
                                                                        2
                                     1                                      + x2i
             D        L θ =                exp     – yi + xi2θ                      .
                              i=1   √2π
                                                                                                   [3]

     (ii)    Determine the maximum likelihood estimator θ of θ. You do not need to check
             that your solution is a maximum of the likelihood function.              [4]

     (iii)   Determine the Cramer–Rao lower bound for θ.                                           [4]

     (iv)    Write down the asymptotic distribution of θ.                                       [2]
                                                                                         [Total 13]




CS1A A2023–5
8    A space rocket contains six identical mechanical components that work independently
     of each other and need to be in operation for a successful launch. Data from simulated
     launches are available to establish the relationship between the number of damaged
     components (Y) on the rocket and air temperature (X, in degrees Fahrenheit). It is
     suggested to analyse the simulated data using a binomial Generalised Linear Model
     (GLM) with the canonical link function, where Y ~ Binomial (6, p), p is the
     probability of a component being damaged, and the linear predictor has the form:

                                             β0 + β1 X.

     The analysis of the simulated data gave the following estimates for the model:

                                  Estimate    Standard error
                             β0   11.6630         3.2963
                             β1   −0.2162         0.0532

     (i)     Determine whether air temperature significantly affects the number of
             damaged components on the rocket by computing a suitable p-value.              [5]

     (ii)    Estimate (to two decimal places) the probability that a component will be
             damaged when the air temperature is 31 degrees Fahrenheit.                     [2]

     (iii)   Estimate the expected value of the number of components that will be
             damaged when the air temperature is 31 degrees Fahrenheit.                     [1]

     It is believed that the launch is safe when at least five of these six components are not
     damaged.

     (iv)    (a)    Calculate the probability that the launch is safe when the air
                    temperature is 31 degrees Fahrenheit.                                   [3]

             (b)    Comment on the safety of the launch when the air temperature is
                    31 degrees Fahrenheit.                                                  [1]

     A second approach for analysing the simulated data was suggested, where a
     logarithmic link function would be used with the same GLM as used before.

     (v)     Comment on the suitability of the second approach.                             [2]
                                                                                     [Total 14]




CS1A A2023–6
9    An insurer models the number of cars owned by a single policyholder as a discrete
     random variable with the following distribution, where p is an unknown parameter:

           Number of cars               0       1        2         3        More than 3
                                      1                 1         1
           Probability                  p       p         p         p         1 – 2p
                                      2                 4         4

     In an empirical study, the number nk of policyholders owning k cars is recorded,
     for k = 0, …, 3, and n4 is the number of policyholders with more than three cars.

     (i)       Identify which one of the following functions is the log likelihood function for
               p using the recorded numbers n0 , …, n4 , where C is a constant independent
               of p:
                                            1
               A          n0 + n1 + n2 + n3 ) log p + n4 log 1 – 2p + C
                                            4

                                                    1
               B          n0 + n1 + n2 + n3 log log p + n4 log 1 – 2p + C
                                                    4

               C         log (n0 + n1 + n2 + n3 ) log p + log n4 log 1 – 2p + C

               D          n0 + n1 + n2 + n3 ) log p + n4 log 1 – 2p + C.
                                                                                            [3]

     (ii)      Derive the maximum likelihood estimator for the parameter p. You do not
               need to check that your solution is a maximum of the likelihood function. [4]

     In a larger study, the insurer has to restrict the information held for each policyholder
     due to data protection. The insurer records only the number of policyholders with no
     car, m0 , and the number of policyholders with at least one car, m1 .

     (iii)     Show that the log likelihood function for the parameter p based on the
               observations m0 and m1 , and the above distribution for the number of cars is
               given by:

                                                1            2–p
                                l p = m0 log      p + m1 log
                                                2             2
                                                                                            [4]

     (iv)      Identify which one of the following estimators is the maximum likelihood
               estimator for the parameter p:
                                m0
               A         p=
                              2m0 + m1

                                2m0
               B         p=
                              2m0 + m1

                               2m0
               C         p=
                              m0 + m1
                                m0
               D         p=             .
                              m0 + m1

                                                                                            [3]

CS1A A2023–7
     The following data have been observed:

                     n0 = 50, n1 = 37, n2 = 17, n3 = 16, n4 = 10

     (v)    Estimate the value of p using the estimator derived in part (ii).          [1]

     (vi)   Estimate the value of p using the estimator found in part (iv).            [1]
                                                                                [Total 16]




CS1A A2023–8
10   A Banking Analyst is assessing the performance of a newly developed credit risk
     model against experts’ knowledge. The credit scores produced on a sample of twelve
     customers by the experts (x) and the model (y) are the following:

 x   65.8 63.7           67.6   64.4      68.2    62.9      70.5   66.4    68.0    67.1   69.5   71.8
 y   68.2 66.2           68.1   66.0      69.1    66.1      68.7   65.9    69.3    67.2   67.9   70.4

     Summary statistics of the data are given below:

                                    xi = 805.9        yi = 813.1    x2i = 54,203.21

                                          y2i = 55,118.71      xi yi = 54,643.17

     (i)        Fit a linear regression line of y on x.                                                 [4]

     (ii)       Calculate Pearson’s correlation coefficient between the experts’ and the
                model’s scores.                                                                         [1]

     (iii)      Perform a statistical test, using Fisher’s transformation, to determine whether
                the population Pearson’s correlation coefficient is significantly different from
                0.8. Your answer should include the p-value of the test.                       [5]

     (iv)       Construct a 99% confidence interval for the slope parameter of the linear
                regression line fitted in part (i).                                                     [3]

     (v)        Comment on your answers to parts (iii) and (iv).                                        [2]

     The Analyst is informed that the scores on their own are not the most important aspect
     of the model. Instead, the performance of the model is assessed by how well it is able
     to predict the rank order of the twelve customers provided by the experts. A higher
     score corresponds to a better customer. The rankings of the customers based on their
     above scores are provided in the table below:

             Rank (xi)    4     2     7     3     9     1    11    5       8   6   10     12
             Rank (yi)    8     4     7     2    10     3    9     1      11   5    6     12

     (vi)       Calculate Spearman’s rank correlation for the data between the model’s and
                experts’ scores.                                                           [6]

     (vii)      Comment on the model’s alignment with the experts’ opinion, based on your
                results from parts (ii) and (vi).                                        [2]
                                                                                  [Total 23]


                                          END OF PAPER




CS1A A2023–9


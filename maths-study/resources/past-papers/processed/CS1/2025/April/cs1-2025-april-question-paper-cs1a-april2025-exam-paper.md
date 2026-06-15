---
normalized_id: cs1-2025-april-question-paper-cs1a-april2025-exam-paper
exam_code: CS1
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr25/CS1A_April2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2025-april-question-paper-cs1a-april2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                              15 April 2025


                        Subject CS1 – Actuarial Statistics
                                 Core Principles
                                                 Paper A
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CS1A A2025                                                             © Institute and Faculty of Actuaries
1    The marketing department of a vehicle breakdown recovery company has carried out a
     survey, which asked a random sample of people how many cars were in their
     household.

     Due to a data corruption error, the frequency for the category of four cars has been
     lost and is denoted below by 𝑥, but the sample mean is known (to three decimal
     places).

                         Number of cars in household Frequency
                                     0                      6
                                     1                     13
                                     2                     11
                                     3                      6
                                     4                      x
                         Sample mean: 1.667 (three decimal places).

     (i)     Identify which one of the following options gives the correct value of x:

             A      6
             B      5
             C      4
             D      3.
                                                                                            [2]

     (ii)    Determine:

             (a)    the mode of the sample.                                                 [1]

             (b)    the median of the sample.                                               [2]

     One of the company’s analysts says that both the mode and median of the sample
     could have been determined without knowing the value of x or the sample mean by
     assuming that x was small.

     (iii)   Justify whether the analyst’s statements are correct or not.                 [4]
                                                                                    [Total 9]




CS1A A2025–2
2    A random variable, X, taking values 1, 2, 3, …, follows a geometric distribution with
     unknown parameter, p, where 0 < p < 1. It is assumed that the prior distribution of p
     has probability density function given as:

                                  Γ 12
                                             𝑝 1     𝑝
                                 Γ 5 Γ 7

     A random sample of X, with size 20 has a sample mean 26.

     (i)    State the distribution family to which the prior distribution of p belongs.   [1]

     (ii)   Determine the posterior distribution of p together with all its parameters. [4]
                                                                                    [Total 5]




CS1A A2025–3
3    Consider the following function:

                                       1          1
                                         𝜆𝑒         𝜇𝑒      for 𝑥    0
                               𝑓 𝑥     2          2
                                       0                    for 𝑥    0

     where λ > 0 and µ > 0 are parameters.

     (i)     Determine the range of values for µ > 0 for which f (x) is a probability density
             function for any positive value of λ.                                         [3]

     Assuming that λ and µ are chosen such that f (x) is a probability density function, let X
     be a random variable with probability density function f (x).

     (ii)    Identify which one of the following expressions gives the expectation of X:

             A         𝜆       𝜇

             B

             C

             D             .

                                                                                           [2]

     (iii)   Identify which one of the following expressions gives the second moment
             of X:

             A

             B

             C

             D                     .

                                                                                           [3]

     (iv)    Determine the variance of X in terms of λ and µ.                              [2]
                                                                                    [Total 10]




CS1A A2025–4
4    Consider the random variable X with probability density function:

                                   f (x) = x e−x, for x > 0.

     (i)     Identify which one of the following options gives the moment generating
             function of X for t <1:

             A      M (t) = (1 – t)−1
             B      M (t) = (1 – t)−2
             C      M (t) = (1 – t)2
             D      M (t) = (1 – t).
                                                                                         [2]

     (ii)    Determine the expected value and the variance of X, using your answer to
             part (i).                                                                [3]

     (iii)   Show that the cumulative distribution function of X is given by:

                              F (x) = 1 – (1 + x)e−x, for x > 0.
                                                                                         [3]

     (iv)    Determine the probability P(1 ≤ X ≤ 2).                                     [2]
                                                                                  [Total 10]


5    In a Generalised Linear Model (GLM) analysis, the number of claims per year (Y) on
     an insurance policy follows a Poisson distribution. The linear predictor is given as:

                                        ln(µ) = β0 + β1x

     where µ is the expected number of claims and x is a policyholder’s age.

     (i)     Explain the purpose of the link function in a GLM, also referring to the
             particular function used for the linear predictor above.                    [2]

     (ii)    Determine the expected number of claims, µ1, when the policyholder’s age
             is x + 1, in terms of µ and β1.                                          [2]

     (iii)   Comment, using your answer in part (ii), on how the regression coefficient β1
             differs from the slope coefficient in a linear regression model.            [3]
                                                                                  [Total 7]




CS1A A2025–5
6       A climate scientist is studying the number of floods in different areas. In each area,
        floods are believed to occur at a constant yearly rate θ > 0, which is the same in all
        areas. The scientist assumes that the yearly number of floods, Y, in an area follows a
        Poisson(θ) distribution.

        The following sample data have been collected from ten areas, giving the number of
        floods during the past year:

    Area 1 Area 2 Area 3 Area 4 Area 5 Area 6 Area 7 Area 8 Area 9 Area 10
      0      1      0      1      5      3      1      4      1       0

        You can assume that the number of floods in one area is independent of floods in
        other areas.

        (i)     Calculate the sample mean and the sample variance of this data.                 [1]

        (ii)    Explain briefly why the assumption of a Poisson distribution for Y may not be
                appropriate in the light of the observed data.                             [1]

        The scientist now wants to adopt a Bayesian approach. In addition to Y ~ Poisson(θ),
        the scientist also assumes that θ has a gamma prior distribution with parameters (a, b).

        (iii)   Determine the posterior distribution of θ, together with all its parameters, in
                terms of a and b.                                                               [4]

        The scientist also wants to explore a different prior distribution and assumes that θ
        follows a lognormal prior distribution with parameters m and s2.

        (iv)    Determine an expression for the posterior density of θ, in terms of m and s2,
                up to an appropriate constant of proportionality.                             [4]

        (v)     Discuss why, from a practical point of view, the scientist may prefer to use a
                gamma prior distribution for θ, as opposed to a lognormal prior distribution.
                Your answer should refer to the form of the posterior distribution based on the
                choice of the prior distribution.                                             [2]
                                                                                      [Total 12]




CS1A A2025–6
7    It is assumed that the speed of vehicles on a certain rural road can be modelled
     as a normally distributed random variable denoted by X. An insurer has installed a
     ‘black box’ device in each of its customers’ vehicles, which records various data
     including speed. The insurer has used these to obtain a random sample of X denoted
     by x1, …, xn. The sample size is n = 64, the sample mean is 𝑥̅ = 64.2 mph and the
     sample standard deviation is s = 4.8 mph.

     [Hint: When calculating confidence intervals below, you can use the nearest
     percentage point available in statistical tables, where appropriate.]

     (i)     Calculate a two-sided 95% confidence interval for the expectation of X,
             assuming that the variance of X is known and given by σ2 = 4.82.            [1]

     (ii)    Calculate a 95% confidence interval for the expectation of X, assuming that
             the variance of X is unknown.                                               [1]

     (iii)   Compare, and comment on, the results in parts (i) and (ii).                 [3]

     An analyst has calculated the upper limit of a one-sided 99% confidence interval
     based on the sample to be 65.6 mph.

     (iv)    Show that the upper limit of the one-sided 99% confidence interval is
             65.634 to three decimal places.                                             [1]

     The analyst has made the following statement:

     ‘Based on a sample of 64 recorded speed measurements obtained from our black
     boxes, we found that the average speed on this road is less than 65.6 mph with a
     probability of 0.99.’

     (v)     Comment on the validity of the analyst’s statement.                         [1]

     The insurer wants to repeat the investigation for a similar road using the knowledge
     they have gained from the above analysis. The insurer wishes to take a random
     sample from this second road. Denote the speed on this road by Y and assume a
     normal distribution with expectation µY and variance 𝜎 , i.e. 𝑌 ∼ 𝑁 𝜇 , 𝜎 .

     (vi)    Calculate the minimum sample size to give a 95% confidence interval for the
             expectation of Y with a width of less than 5 mph, assuming that the variance of
             Y is known and equal to σ2 = 4.82.                                          [3]

     The analyst suggests that the variance of Y can be estimated instead of assuming it is
     known. However, the insurer’s management, who wish to control costs, have
     responded to say this would increase the sample size required to meet the target
     confidence interval.

     (vii)   Comment on the validity of the management’s response.                       [2]
                                                                                  [Total 12]




CS1A A2025–7
8    A teacher runs a summer school and is trying to justify the cost to their local council.

     To support their justification, the teacher tested ten students before and after attending
     summer school, and obtained the scores shown below (x and y, respectively):

             Student (i)               1 2 3 4 5 6 7 8 9 10
             Exam score before (xi)    63 41 45 63 53 55 56 49 61 32
             Exam score after (yi)     70 52 51 66 58 61 61 54 65 45

     For these data:

     ∑𝑥        518       ∑𝑦      583     ∑𝑥      27,760    ∑𝑦      34,533     ∑𝑥 𝑦      30,891

     (i)        Fit a linear regression of y on x.                                           [4]

     (ii)       Calculate Pearson’s correlation coefficient between the two sets of exam
                scores.                                                                      [1]

     (iii)      Comment on the relationship between the two sets of exam scores, based on
                your answer to part (ii).                                                [2]

     (iv)       Calculate the proportion of the variance that can be explained by the linear
                model in part (i).                                                           [1]

     A student has scored 45 in the exam before attending the summer school.

     (v)        Construct a 95% prediction interval for this student’s score after attending
                summer school.                                                                [6]
                                                                                       [Total 14]




CS1A A2025–8
9    A large insurance company sells policies that pay out in the event of a cyber attack.
     The insurance claims (in $) received at their claims centre over the last year have been
     analysed. The results of this analysis are as follows:

Size of claim, S 0 ≤ S < 250 250 ≤ S < 500 500 ≤ S < 750 750 ≤ S < 1,000 Over 1,000
Number of claims     102          59            34             23            9

     (i)    Identify which one of the following data labels is appropriate for the above
            analysis:

            A       cross-sectional data
            B       truncated data
            C       longitudinal data
            D       censored data.
                                                                                             [1]

     (ii)   You are given that the maximum claim size is $5,000.

            (a)     Determine the sample mean of the data, stating any assumptions that
                    you make.                                                           [2]

            (b)     Determine the expected claim size in each of the five ranges for S in the
                    analysis above, if an exponential distribution with parameter λ is used as
                    the distribution of the claim sizes.                                      [4]

                    [Hint: The value of λ can be estimated using the method of moments.]

            (c)     Test at the 1% level if an exponential distribution with parameter λ is
                    an appropriate distribution for the claim sizes.                      [4]




CS1A A2025–9
     An actuary is investigating if sizes of claims vary according to the region in which the
     claimant is located. The data is split into four different regions. The results of these
     are given below:

 Region 1:
Size of claim, S 0 ≤ S < 250 250 ≤ S < 500 500 ≤ S < 750 750 ≤ S < 1,000 Over 1,000
Number of claims      29          11             9              5            3

 Region 2:
Size of claim, S 0 ≤ S < 250 250 ≤ S < 500 500 ≤ S < 750 750 ≤ S < 1,000 Over 1,000
Number of claims      31          18             6              4            1

 Region 3:
Size of claim, S 0 ≤ S < 250 250 ≤ S < 500 500 ≤ S < 750 750 ≤ S < 1,000 Over 1,000
Number of claims      17          14             8              6            2

 Region 4:
Size of claim, S 0 ≤ S < 250 250 ≤ S < 500 500 ≤ S < 750 750 ≤ S < 1,000 Over 1,000
Number of claims      25          16            11              8            3

     (iii)   (a)    Determine the expected claim sizes if claim size is independent of
                    region.                                                               [2]

             (b)    Test at the 1% level if claim size is independent of region.          [8]
                                                                                   [Total 21]


                                 END OF PAPER




CS1A A2025–10


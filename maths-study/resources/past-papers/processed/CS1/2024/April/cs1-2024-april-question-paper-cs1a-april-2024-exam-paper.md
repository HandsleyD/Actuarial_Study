---
normalized_id: cs1-2024-april-question-paper-cs1a-april-2024-exam-paper
exam_code: CS1
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr24/CS1A_April_2024_Exam_Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2024-april-question-paper-cs1a-april-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 11 April 2024 (am)


                   Subject CS1 – Actuarial Statistics
                            Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS1A A2024                                               © Institute and Faculty of Actuaries
1    The following table shows possible realisations, 𝑥, of a random variable, 𝑋, the
     probabilities for these realisations and the conditional expectations and variances of a
     random variable, 𝑌, conditionally on 𝑋 𝑥.

                             Realisation x               10        20    40
                             𝑃𝑋 𝑥                        0.4       0.4   0.2
                             𝐸 𝑌|𝑋 𝑥                      2         8    10
                             Var 𝑌|𝑋 𝑥                    1         2     3

     (i)    Identify which one of the following options gives the correct values of the
            unconditional expectations of 𝑋 and 𝑌:

            A       𝐸𝑋           20        and     𝐸𝑌          6
            B       𝐸𝑋           20        and     𝐸𝑌          4
            C       𝐸𝑋           24        and     𝐸𝑌          6
            D       𝐸𝑋           24        and     𝐸𝑌          4.
                                                                                            [2]

     (ii)   Calculate the unconditional variance of 𝑌.                                      [3]
                                                                                      [Total 5]


2    The preparation time, in minutes, for coffees in a popular coffee shop has the
     following density:

                                       8
                          𝑓 𝑦            𝑦𝑒          ,         𝑦     0, 𝑚      0
                                       𝑚

     (i)    Show that this density can be written in the form of the exponential family,
            also determining 𝑏 θ , 𝑎 φ and 𝑐 𝑦, φ .                                      [4]

     Two models, A and B, are proposed for the parameter m, the mean preparation time,
     for different types of coffee.

     Model A:            𝑢       i = 1, 2, 3, 4

                                 𝑢         𝑖     1
     Model B:
                             𝑢       𝑣 𝑖       2, 3, 4

     where i = 1, 2, 3, 4 correspond to different types of coffee.

     (ii)   Comment on the mean preparation times for different types of coffee,
            proposed by the two models.                                                     [2]
                                                                                      [Total 6]




CS1A A2024–2
3    X and Y are discrete random variables with joint distribution given in the table below.

                              Y = −3      Y = −2       Y = −1       Y=0
                                2                        1
                   X=1                          0                     0
                                5                        10
                                1           1                         1
                   X=2                                      0
                                5           10                        5

     (i)     Identify which one of the following options gives the correct value of the
             conditional expectation 𝐸 𝑌|𝑋 2 :

             A      −2.2
             B      −1.8
             C      −1.6
             D      −0.3.
                                                                                           [2]

     (ii)    Determine the conditional expectation 𝐸 𝑋|𝑌        𝑦 for each value of 𝑦.     [4]

     (iii)   Calculate the expected value of 𝑋 using your result from part (ii).           [2]
                                                                                     [Total 8]


4    Consider random variables 𝑋, 𝑌 and 𝑍, each of which has variance equal to 1.

     Suppose that Cov 𝑋, 𝑌      0.9 and Cov 𝑌, 𝑍       0.8.

     Let 𝐴     𝑋   0.9𝑌 and 𝐵     𝑍    0.8𝑌.

     (i)     Calculate:

             (a)    Var 𝐴

             (b)    Var 𝐵 .
                                                                                           [3]

     (ii)    Show that Cov 𝐴, 𝐵        Cov 𝑋, 𝑍     0.72.                                  [3]

     (iii)   Show that Cov 𝑋, 𝑍        0.458.                                              [3]

             [Hint: use the fact that cor 𝐴, 𝐵      1, where cor 𝐴, 𝐵 is the correlation
             coefficient between A and B.]
                                                                                     [Total 9]




CS1A A2024–3
5    Let 𝑥     𝑥 , 𝑥 , … , 𝑥 be independent observations from a distribution of a random
     variable, 𝑋, that has parameter 𝑢. Let 𝑓 𝑢|𝑥 be the posterior distribution of 𝑢|𝑥 and
     𝑔 𝑥 be an estimator of 𝑢.

     (i)     State two properties that a loss function should satisfy.                      [1]

     Consider the loss function 𝐿 𝑔, 𝑢 given by:

                                                  𝑔   𝑢 ,       𝑢     𝑔
                               𝐿 𝑔, 𝑢
                                                3 𝑢   𝑔 ,       𝑢     𝑔

     (ii)    Verify that this loss function satisfies the properties in part (i).           [2]

     (iii)   Identify which one of the following options gives the correct expression for
             the expected posterior loss:

             A       4         𝑔    𝑢 𝑓 𝑢|𝑥 𝑑𝑢              𝑢   𝑔 𝑓 𝑢|𝑥 𝑑𝑢

             B             𝑔       𝑢 𝑓 𝑢|𝑥 𝑑𝑢         4     𝑢   𝑔 𝑓 𝑢|𝑥 𝑑𝑢

             C       3         𝑔    𝑢 𝑓 𝑢|𝑥 𝑑𝑢              𝑢   𝑔 𝑓 𝑢|𝑥 𝑑𝑢

             D             𝑔       𝑢 𝑓 𝑢|𝑥 𝑑𝑢         3     𝑢   𝑔 𝑓 𝑢|𝑥 𝑑𝑢.
                                                                                            [3]

     (iv)    Identify which one of the following options gives the correct quantile for the
             Bayesian estimator, 𝑏, of 𝑢 under this loss function:

             A       𝑃 𝑢       𝑏𝑋        0.2

             B       𝑃 𝑢       𝑏𝑋        0.25

             C       𝑃 𝑢       𝑏𝑋        0.75

             D       𝑃 𝑢       𝑏𝑋        0.8.

             [Note: you may assume that, for any differentiable function ℎ 𝑥, 𝑦 such that
             ℎ 𝑥, 𝑥    0:
                                𝑑                         𝜕
                                      ℎ 𝑥, 𝑦 𝑑𝑦             ℎ 𝑥, 𝑦 𝑑𝑦
                               𝑑𝑥                        𝜕𝑥

             and:

                                    𝑑                               𝜕
                                               ℎ 𝑥, 𝑦 𝑑𝑦               ℎ 𝑥, 𝑦 𝑑𝑦
                                    𝑑𝑥                              𝜕𝑥

                                                                                          [3]
                                                                                    [Total 9]




CS1A A2024–4
6    A lecturer wants to investigate the proportion, p, of students in a large class that are in
     favour of online lectures. The lecturer conducts two small surveys, where students can
     vote in favour or against online lectures, and the results are as follows:

                          Survey     Sample size       In favour
                            1           10                 4
                            2           20                 9

     The two samples are assumed to be independent.

     The lecturer does not initially have any prior information about the proportion, p, and
     assumes a suitable uniform distribution as the prior distribution in order to estimate p.

     (i)     State the parameters of a suitable prior distribution for p, justifying your
             answer.                                                                         [2]

     (ii)    Determine the Bayes estimate of p under the quadratic loss function.            [5]

     The lecturer later decides instead to use a beta distribution as the prior, with
     parameters a and b, where a = 2b.

     (iii)   Determine the new Bayes estimate of p under the quadratic loss function, in
             terms of parameter b.                                                       [4]

     The lecturer is interested in obtaining a posterior estimate involving low uncertainty.

     (iv)    Determine whether the estimate in part (ii) or part (iii) produces a posterior
             estimate with lower uncertainty, in the case where b = 1.                      [2]
                                                                                    [Total 13]




CS1A A2024–5
7    (i)     Explain what is meant by a conjugate prior distribution.                     [1]

     Let 𝑋 , 𝑋 , … , 𝑋 be independent and identically distributed random variables from
     the Poisson distribution with parameter m, and m follows, a priori, a gamma
     distribution with probability density function given by 𝑓 𝑚         𝑚     𝑒      , with
     a, s > 0.

     (ii)    Show that this prior distribution is conjugate for m.                        [3]

     (iii)   Determine the mean and variance of the posterior distribution of m.          [2]

     (iv)    Comment on how the prior distribution affects the posterior for large sample
             sizes, 𝑛.                                                                   [2]

     Consider now the parameter 1/m.

     (v)     (a)    Identify which one of the following options gives the prior mean for
                    parameter 1/m:

                    A       𝐸

                    B       𝐸

                    C       𝐸

                    D       𝐸             .
                                                                                         [3]

             (b)    Identify which one of the following options gives the posterior mean
                    for parameter 1/m:

                    A       𝐸     |𝑥           ̅

                                                       ̅
                    B       𝐸     |𝑥

                    C       𝐸     |𝑥               ̅

                                                       ̅
                    D       𝐸     |𝑥                       .
                                                                                          [3]
                                                                                   [Total 14]




CS1A A2024–6
8    In a particular year, the members of a regional oil organisation decide to increase the
     production of oil. An analyst wishes to model the effect of this increase on the market
     price of oil and recorded the monthly average volume produced, x, in litres (l), and its
     price per litre, y (£) for eight consecutive months. The data are summarised as
     follows:

            𝑆      3,535,237.5       𝑦    181      𝑦     4305    𝑆        23,726.25

     (i)        Calculate Pearson’s correlation coefficient between x and y.                  [3]

     (ii)       Comment on your answer to part (i).                                          [1]

     A second analyst thought that converting the volume to cubic metres (m3), as
     𝑧      , would make the computation more efficient.

     (iii)      Write down 𝑆     expressed in terms of 𝑆 .                                    [2]

     (iv)       Calculate the new Pearson’s correlation coefficient between z and y.          [2]

     (v)        Comment on your answers to parts (i) and (iv).                                [1]

     (vi)       Determine the least squares fitted regression line between y and z given that
                ∑𝑧 0.16.                                                                      [3]

     (vii)      Determine a 95% prediction interval for the price of oil, when the oil
                production is 1.5 m3, based on the observed data.                            [4]
                                                                                      [Total 16]




CS1A A2024–7
9    A small vehicle repair shop, Repair Shop 1, has recently merged with another nearby
     vehicle repair shop, Repair Shop 2, and the owner wishes to analyse the number of
     customers that visit each shop.

     The owner has recorded the following data over the past 30 days:

                                        Number of customers
                    Day            Repair Shop 1   Repair Shop 2
                    1                   30              22
                    2                   31              24
                    …
                    30                   29                26
                    Total               781                707

     (i)     Calculate the sample means of the number of daily customers for each repair
             shop.                                                                     [1]

     The owner believes that the number of customers arriving at Repair Shop 1 and
     Repair Shop 2 per day follow separate Poisson distributions with unknown parameters
     𝑘 and 𝑘 , respectively.

     (ii)    Calculate a 95% confidence interval for the difference between the parameters
             𝑘 and 𝑘 , stating any assumptions you make.                               [5]

     (iii)   Test at the 5% significance level whether 𝑘 and 𝑘 are equal.                 [2]

     The owner later believes it may instead be more appropriate to consider the recorded
     data as being paired data.

     (iv)    Explain why it may be more appropriate to treat the data as paired.          [3]

     The sample standard deviation of the paired differences has been recorded as 6.55.

     (v)     Test at the 5% significance level whether 𝑘 and 𝑘 are equal, assuming the
             data is paired, stating any additional assumptions you make.              [5]

     (vi)    Comment on your answers to parts (iii) and (v).                              [4]
                                                                                   [Total 20]


                                 END OF PAPER




CS1A A2024–8


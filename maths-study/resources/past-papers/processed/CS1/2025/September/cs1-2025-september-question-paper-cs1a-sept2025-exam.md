---
normalized_id: cs1-2025-september-question-paper-cs1a-sept2025-exam
exam_code: CS1
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep25/CS1A_Sept2025_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2025-september-question-paper-cs1a-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                            September 2025


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



CS1A S2025                                                             © Institute and Faculty of Actuaries
1    Consider discrete random variables 𝑋 and 𝑌, with joint probability function given by:

                                       𝑒 𝑦
                    𝑝 , 𝑥, 𝑦                 ,𝑥   0, 1, 2, … ; 𝑦     1, 2, 3, …
                                        2 𝑥!

     The marginal distribution of 𝑌 is Geometric(p) with probability function
     𝑝 𝑦    𝑝 1 𝑝 1 , with p = 0.5. (You are not required to check this result.)

     (i)     Identify which one of the following options gives the correct expression for
             the conditional probability function 𝑝 |    𝑥|𝑦 :

             A
                               !


             B
                       !



             C
                           !


             D                     .
                           !
                                                                                                 [2]

     (ii)    State the distribution of 𝑋 conditional on 𝑌          𝑦, and its parameter.        [1]

     (iii)   Calculate the expected value of 𝑋.                                                  [2]
                                                                                           [Total 5]


2    A random sample of size 𝑛 50 is taken from a normal distribution with unknown
     expectation 𝜇 and known variance 𝜎   16. The sample mean is used to estimate the
     parameter 𝜇.

     (i)     Determine if the sample mean is an unbiased estimator of 𝜇 justifying your
             answer.                                                                    [2]

     (ii)    Calculate the variance of the sample mean.                                          [2]

     (iii)   Determine the mean square error of the sample mean.                                 [1]
                                                                                           [Total 5]




CS1A S2025–2
3    A random variable, X, has a moment generating function MX(𝑡) given by:

                                     𝑀 𝑡        1   𝑎

     where a > 0 is a fixed parameter.

     (i)       Determine the cumulant generating function, 𝐶X(𝑡).                            [2]

     (ii)      Determine, using your answer to part (i), the mean and variance of X in terms
               of a.                                                                       [3]
                                                                                     [Total 5]


4    An actuary is analysing the variance in monthly claim amounts (in units of £1,000)
     reported in two insurance portfolios, Portfolio A and Portfolio B. The actuary collects
     two independent random samples:

           Sample A: a sample of 25 months from Portfolio A with a sample variance of 25.
           Sample B: a sample of 13 months from Portfolio B with a sample variance of 15.

     The actuary wants to determine if the variances of the claim amounts in the two
     portfolios, 𝜎 and 𝜎 , are significantly different.

     (i)       Determine a 90% confidence interval for the ratio of the population variances
                 .                                                                           [4]


     (ii)      Test the hypothesis       1 versus       1 at the 10% level of significance
               using your answer to part (i).                                                [2]

     (iii)     State the two assumptions required for the confidence interval in part (i) and
               the test in part (ii) to be appropriate.                                      [1]
                                                                                       [Total 7]




CS1A S2025–3
5    An insurance company wishes to use the normal/normal Bayesian model to estimate
     the expected aggregate claims cost for a particular risk for the coming year.

     Let 𝑋i be random variables representing the aggregate claims cost for years
     i = 1, 2, 3, ….

     The distribution of each 𝑋i depends on the fixed, but unknown, value of a
     parameter, 𝜃.

     The conditional distribution of 𝑋i given 𝜃 is 𝑁(𝜃, 𝜎 ). Given 𝜃, the random variables
     {𝑋i} are independent.

     The prior distribution of 𝜃 is 𝑁(𝜇, 𝜎 ).

     (i)     Discuss if the normal/normal Bayesian model, including its parameters, is
             suitable for modelling aggregate claims cost.                             [2]

     (ii)    Show that for all i, Var[𝑋i] = 𝜎 + 𝜎 .                                         [2]

             [Hint: Use the result involving the conditional expectation and variance from
             Formulae and Tables for Examinations of The Institute and Faculty of
             Actuaries.]

     Let 𝜌i,j be the (unconditional) correlation coefficient between 𝑋i and 𝑋j.

     (iii)   Identify which one of the following options gives the correct expression for
             𝜌i,j, where 𝑖 𝑗:

             A      𝜌,



             B      𝜌,


             C      𝜌,



             D      𝜌,              .
                                                                                            [3]

     (iv)    State the value of 𝜌i,j for each of the following extreme cases and explain the
             validity of your answers in the context of the normal/normal Bayesian model:

             (a)    𝜎 =0

             (b)    𝜎 = 0.
                                                                                          [4]
                                                                                   [Total 11]


CS1A S2025–4
6    An insurance company has recently launched a policy covering a specific medical
     condition. It collected data for the first 100 policyholders and found that 15 of them
     made claims in the first year of coverage. It is assumed that policyholders make
     claims independently from one another.

     The company wants to estimate the probability, 𝜃, of a policyholder making a claim
     for the condition in the first year of coverage. It uses Bayesian inference with a prior
     belief that 𝜃 follows a Beta(a, b) distribution, with parameters a > 0 and b > 0.

     (i)     Determine the posterior distribution of 𝜃, including its parameters, in terms
             of a and b.                                                                   [5]

     (ii)    Comment on the relationship between the prior and the posterior distribution
             of 𝜃 using your answer in part (i).                                        [1]

     (iii)   Show that the Bayesian estimate of parameter 𝜃 under all-or-nothing loss is:

                                        𝜃            .
                                                                                            [3]

     (iv)    Calculate 𝜃′ for a prior distribution Beta(1, 1).                              [1]

     The company has also calculated the Maximum Likelihood Estimate (MLE) of
     𝜃 as 𝜃 0.15.

     (v)     Comment on the comparison of the MLE and your answer in part (iv).     [2]
                                                                             [Total 12]




CS1A S2025–5
7    A chain of fast-food restaurants is experiencing issues with their burgers, with some
     customers suffering from food poisoning. A sample of five customers has been
     surveyed in each of the 100 restaurants in this chain.

     The table below shows the number of sampled customers, 𝑥, who have experienced
     food poisoning in the past month and the corresponding frequency, f, in terms of the
     number of restaurants.

       Number of customers with food poisoning, 𝑥       0     1     2     3    4    5
       Number of restaurants, 𝑓                        40    35    19     4    1    1

     Assume that for each restaurant, the number of sampled customers that have suffered
     from food poisoning during the last month follows a binomial distribution, i.e.:

                                          𝑋 ~ Bin(5, 𝑝)

     where p is the probability that a customer has suffered food poisoning during the last
     month.

     (i)     State the assumptions needed to justify the use of the binomial distribution
             for X.                                                                       [1]

     (ii)    Identify which one of the following gives the likelihood function for the
             parameter, 𝑝, based on the above data. For all options, 𝑐 denotes a constant
             that does not depend on the parameter 𝑝.

             A      𝐿(𝑝) = 𝑐 × 𝑝94 × (1 − 𝑝)406

             B      𝐿(𝑝) = 𝑐 × 𝑝90 × (1 − 𝑝)410

             C      𝐿(𝑝) = 𝑐 × 𝑝406 × (1 − 𝑝)94

             D      𝐿(𝑝) = 𝑐 × 𝑝410 × (1 − 𝑝)90.
                                                                                            [3]

     (iii)   Derive the maximum likelihood estimate of 𝑝 and verify that the obtained
             estimate maximises the likelihood function.                              [4]

     (iv)    Determine, for each value of 𝑥, the corresponding expected number of
             restaurants based on the assumed binomial model and the estimate found
             in part (iii).                                                                 [3]




CS1A S2025–6
     Each food poisoning incident costs the restaurant money in refunds and
     compensation. Data collected for 30 food poisoning incidents reveals:

                               𝑦     975 ,         𝑦     34062

     where 𝑦1, …, 𝑦30 denote the costs per incident for each of the 30 incidents.

     (v)    Calculate an approximate 95% confidence interval for the mean cost per
            incident, stating any necessary assumptions.                              [5]
                                                                               [Total 16]




CS1A S2025–7
8    A quality control inspector at an electronics manufacturing plant checks electronic
     components coming off an assembly line. For each component, there is a 7% chance
     of it being defective, independent of other components.

     Let X represent the number of components required to be checked to find the first
     defective component. X will therefore have a geometric distribution with probability
     function 𝑝 𝑥     𝑝 1 𝑝 1 , x = 1, 2, …, for a suitable parameter p.

     (i)     Calculate the expected value of X.                                           [2]

     (ii)    Calculate the probability that the inspector does not find a defective
             component in the first four checks.                                          [2]

     (iii)   Describe what is meant by the ‘memoryless’ property of the geometric
             distribution.                                                                [2]

     (iv)    Calculate the probability that the inspector does not find a defective
             component in the first ten checks, given that a defect has not been found in
             the first four checks.                                                       [2]

     The managers of the manufacturing plant decide to implement a new automated
     quality control system involving two robotic scanners. If a scanner does not detect a
     defect when scanning a component, it is said to ‘pass’ the component, otherwise it
     ‘fails’ the component.

     Scanner A checks components first. It has a 75% chance of correctly identifying a
     defective component and a 95% chance of correctly identifying a non-defective
     component.

     If a component is passed by Scanner A, it moves on to Scanner B. Scanner B has an
     85% chance of correctly identifying a defective component and a 90% chance of
     correctly identifying a non-defective component, independently of Scanner A.

     A component is accepted if it is passed by both scanners.

     (v)     Calculate the probability that a component is accepted (passed by both
             scanners) when:

             (a)    the component is defective.

             (b)    the component is non-defective.
                                                                                          [3]




CS1A S2025–8
     (vi)    Identify which one of the following options gives the correct probability that
             an accepted component is actually defective:

             A      0.263%

             B      0.329%

             C      0.525%

             D      0.658%.
                                                                                            [3]

     On a particular day, the automated system of both scanners has scanned a number of
     components, of which 4,512 were accepted.

     Each incorrectly accepted component results in a liability cost to the manufacturing
     plant of $200.

     (vii)   Calculate the expected total liability cost of the incorrectly accepted
             components.                                                                    [1]

     (viii) Calculate, using a suitable approximation, the probability that the total liability
            cost of the incorrectly accepted components will exceed $5,000.                 [4]
                                                                                   [Total 19]




CS1A S2025–9
9    An actuary at a health insurer is initiating an investigation to model its claim costs for
     critical illness cover using a simple generalised linear model with the following
     factors used:

           NWL      Net Wealth Level
           SMK      Smoker Status
           CRR      Main Residency.

     The factors are defined as follows:

                                   NWL ∈ 1, 2, 3, 4, 5

     where 1 is lowest net wealth level and 5 is the highest net wealth level.

                                         0,       Non˗smoker
                                 SMK
                                         1,       Smoker

                                    0,        City main residency
                           CRR
                                    1,        Rural main residency

     The actuary is considering four potential models for the linear predictor as shown
     below:

     Model 1:        NWL + SMK
     Model 2:        NWL + SMK + CRR
     Model 3:        NWL + SMK + NWL:SMK + CRR
     Model 4:        NWL*SMK*CRR

     where:

     NWL:SMK denotes the interaction term between these respective variables.
     NWL*SMK*CRR denotes the main effects and the interaction terms between these
     respective variables.

     (i)      Determine the number of parameters in each of the four models, justifying
              your answer.                                                              [4]

     (ii)     Discuss the suitability of models 1, 2 and 4 for modelling claim costs, in terms
              of inclusion of the three variables NWL, SMK and CRR.                         [3]




CS1A S2025–10
     The actuary has produced the summary table below, which shows the values of the
     scaled deviances for these four models including the constant model (denoted as
     Model 0).

                                                                                Degrees of
       Model number    Model                                Scaled deviance
                                                                                 freedom
             0                                                   86.5               19
             1         NWL + SMK                                 68.6
             2         NWL + SMK + CRR                           45.7
             3         NWL + SMK + NWL:SMK + CRR                 11.3
             4         NWL*SMK*CRR                                0

     (iii)   Calculate the missing entries for the degrees of freedom column.                [2]

     (iv)    Determine, by sequentially comparing each model to the next one (starting
             with Model 0), which model should be chosen based on differences of the
             scaled deviances at the 5% level.                                         [9]

     (v)     Outline extra information the actuary could consider before any of the four
             models are chosen.                                                          [2]
                                                                                  [Total 20]


                                 END OF PAPER




CS1A S2025–11



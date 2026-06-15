---
normalized_id: cs2-2024-september-question-paper-cs2a-september-2024-exam-paper
exam_code: CS2
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CS2/CS2A/Sep24/CS2A_September 2024_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-september-question-paper-cs2a-september-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             19 September 2024 (am)


    Subject CS2 – Risk Modelling and Survival Analysis
                     Core Principles
                                       Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CS2A S2024                                               © Institute and Faculty of Actuaries
1    An insurance company has a portfolio of policies where the loss amounts follow an
     exponential distribution (with parameter λ). The company has an individual excess of
     loss reinsurance arrangement with a retention level $12,000.

     The following twelve claim amounts (all in $ and net of reinsurance) are observed:

                 8,760    10,510     7,800      6,900     11,000     9,000
                 9,500    11,570    10,400     12,000     12,000    12,000

     (i)     Calculate the maximum likelihood estimate of parameter λ.                        [4]

     The insurance company wishes to replace the current reinsurance treaty with a
     proportional reinsurance arrangement such that the population mean claim amount
     after retention arising from the new treaty is the same as that of the current treaty.

     (ii)    Derive the retained percentage for the proportional reinsurance arrangement.
                                                                                         [7]
                                                                                  [Total 11]


2    The mortality of the population of a particular country has been studied. A recent
     investigation suggests that for individuals aged 10 exact and over, the force of
     mortality is constant, µ. Further, the study suggests that 25% of those born survived to
     exact age 20 and 20% of those born survived to exact age 25 years.

     (i)     Calculate:

                the constant force of mortality, µ.
                the survival probability, 10 p0.
                                                                                              [3]

     A new study suggests that mortality at older ages follows Makeham’s Law and that:

     μ70 = 0.026742
     μ75 = 0.149824
     μ80 = 0.358927.

     (ii)    Determine the probability that a life age 72 exact will survive 15 years.        [6]

     (iii)   Comment on the validity of the assumptions made about forces of mortality in
             parts (i) and (ii) above.                                                 [2]
                                                                              [Total 11]




CS2A S2024–2
3    Consider the following time series process:

                                       yt = a7yt−7 + εt

     where 𝜀t represents a white noise process with zero mean.

     (i)     Identify the value of a7 for which yt is stationary.                            [2]

     (ii)    Derive the autocovariance function (ACF) for yt .                               [4]

     (iii)   Comment, with reference to this ACF, on the suitability of the process for
             modelling seasonal data.                                                   [2]

     (iv)    Specify the value of a7 for which seasonal differencing is applicable.          [2]
                                                                                      [Total 10]


4    An insurance company has a portfolio of 350 policies and assumes that the policies
     exist in three possible states of claim costs: low, moderate and high. For each of these
     states the overall claim sizes are assumed to be £200, £300 and £500, respectively.
     The policies change states according to a Markov jump process with the generator
     matrix:

                                          *    0.1     0.5
                                  𝐴      0.3    *      0.4
                                         0.1    *     -0.2

     (i)     State the missing entries A11 , A22 and A32 marked * in the generator matrix A
             above.                                                                        [2]

     (ii)    Derive the transition matrix, P, for the corresponding Markov jump process.
                                                                                        [2]

     (iii)   Derive the stationary distribution related to the matrix P.                     [4]

     (iv)    Calculate the expected value and the standard deviation of the total claims for
             this portfolio based on the distribution in part (iii).                      [7]
                                                                                   [Total 15]




CS2A S2024–3
5    The generating function for the Clayton copula is given by the following expression:

                                        1
                                          𝑡       1
                                        𝛼

     (i)     Derive the Clayton copula function C(u,v) using the above generating function
             and showing each step clearly.                                             [3]

     The annual returns from two investment portfolios, X and Y, are assumed to follow the
     following Normal distributions:

                        X ~ N(0.05, 0.052) and Y ~ N(0.05, 0.152)

     Their dependant behaviour can be modelled using a Gumbel(2) copula.

     (ii)    Calculate the probability that both funds fall in value over the next year.   [3]

     (iii)   Calculate the probability that both funds return more than 10% over the next
             year.                                                                      [3]

     (iv)    Explain why the answers to parts (ii) and (iii) are different.                [2]

     A junior analyst wants to build a new model that does not incorporate any allowance
     for dependent behaviour between portfolios X and Y. They will then use both models
     to estimate the total return from a fund consisting of equal amounts of portfolios X
     and Y.

     (v)     Identify the simplest adjustment the analyst could make to the original
             Gumbel(2) model to obtain the new model.                                      [1]

     (vi)    Discuss, with reference to the difference between the two model approaches,
             the consequences of using an inappropriate model in this scenario.         [4]
                                                                                 [Total 16]


6    The number of customers arriving at a bank branch after time t = 0 is modelled as a
     Poisson process at the rate of 120 per hour. It is known that exactly one customer
     arrives between t = 1 and t = 2 minutes.

     Determine, explaining your reasoning, the joint probability that exactly two customers
     arrive between t = 0 and t = 2 minutes and three customers arrive between t = 1
     minute and t = 4 minutes.                                                          [9]




CS2A S2024–4
7    The graph below shows the crude mortality rates from age 1 to 65 on a logarithmic
     scale in a population.




     You have recently joined an insurance company as a risk analyst and your team is
     interested in using this data to project mortality rates into ages above 65.

     One of your colleagues proposes a model of the form:

                         𝑦 = exp(α + βx + εx ) with εx ∼ N(0, σ2)                  (Model 1)

     where x represents age, yx represents the mortality rate at age x, and α and β are two
     unknown parameters that can be estimated.

     (i)    Comment on the suitability of Model 1 for projecting mortality rates into ages
            above 65 years.                                                             [3]

     After fitting Model 1, your line manager suggests exploring alternative models in the
     following form:


                        𝑦     exp       𝑓 𝑥 𝑎      𝜀                               (Model 2)


     where fk () are known functions of your choice and the ak are unknown coefficients
     that can be estimated.

     (ii)   Discuss two variants of Model 2 that can be used to tackle the shortcomings of
            Model 1 stating the advantages and limitations of each.                    [6]




CS2A S2024–5
     Your company has recently acquired new mortality data, separate from the graph
     above. These data include aggregated death counts and exposed-to-risk by age x and
     calendar year t. Your company aims to use these data for forecasting future mortality
     rates.

     Your manager recently participated in a mortality modelling seminar where the
     presenter successfully used the following simplified Lee–Carter model to forecast
     mortality rates:

                      𝑦 , = exp(𝑎 + kt + 𝜀 , ) with 𝜀 , ∼ N(0, σ2)               (Model 3)

     where 𝑎 and kt are unknown parameters that can be estimated.

     Based on that experience, your line manager suggests that the team should consider
     Model 3.

     (iii)   Demonstrate that Model 3 is not identifiable.                                [1]

     (iv)    Describe how you would achieve identifiability when fitting Model 3.         [2]

     (v)     Comment on the suitability of Model 3.                                     [3]
                                                                                 [Total 15]




CS2A S2024–6
8    Three friends, X, Y and Z, are throwing a ball to each other. They usually throw it
     only in one circular direction, from X to Y to Z to X to Y and so on, with the
     following exceptions:

           Occasionally Y throws the ball to X.
           All three are allowed to throw the ball to themselves (with no limit).
           Every so often Y mis-throws the ball into a nearby river (R), after which the ball
            is lost.

     There are no other ball transitions except the ones described above.

     A teacher wishes to model this game as a Markov chain and observes the friends
     playing for an hour. The teacher estimates the following two-step probabilities:

           P2ZZ = 0.5625
           P2XX = 0.4
           P2ZY = 0.125
           P2YR = 0.1.

     The teacher also estimates that the one-step probability that Y throws the ball to
     themself is the same as the one-step probability of mis-throwing it into the river.

     (i)       Derive the one-step transition matrix from the two-step probabilities above.
                                                                                               [8]

     (ii)      Calculate the probability that, if Z currently has the ball, Z will have it again
               after exactly four subsequent throws.                                            [3]

     (iii)     State, with a reason, if this Markov chain is irreducible.                      [1]

     (iv)      State the stationary probability distribution of this Markov chain.             [1]
                                                                                        [Total 13]


                                    END OF PAPER




CS2A S2024–7



---
normalized_id: cm2-2023-april-question-paper-cm2a-april23-exam-final-clean-proof
exam_code: CM2
year: 2023
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2A/Apr23/CM2A_April23_EXAM_Final Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2023-april-question-paper-cm2a-april23-exam-final-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 26 April 2023 (am)


Subject CM2 – Financial Engineering and Loss Reserving
                   Core Principles
                                        Paper A
                       Time allowed: Three hours and twenty minutes




           In addition to this paper you should have available the 2002 edition of
                the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CM2A A2023                                               © Institute and Faculty of Actuaries
1    A singer has the following utility function:

                                   U(w) = ln(w) (w ˃ 0).

     (i)     Show that this utility function is iso-elastic.                                 [3]

     The singer measures their wealth as the present value of their future earnings. They
     are concerned about possible future damage to their voice and consider the following
     scenarios:

      Scenario                       Probability          Present value of earnings
                                        (%)                          ($)
      No damage                         94.9                     1,500,000
      Slight damage                     5.0                      1,300,000
      Severe damage                      0.1                        10,000

     The singer is considering buying insurance to cover their loss of earnings if their
     voice is damaged. The insurance will pay a lump sum equal to the reduction in the
     present value of earnings compared to the ‘no damage’ scenario.

     (ii)    Calculate the singer’s expected loss when compared to no damage.                [1]

     (iii)   Calculate the maximum premium the singer would be willing to pay for this
             insurance based on their utility function.                                [3]

     (iv)    Discuss briefly what your answers to parts (ii) and (iii) suggest about the
             singer’s appetite to risk.                                                      [3]

     (v)     Suggest two reasons why an insurer may not want to cover this risk.             [5]
                                                                                      [Total 15]




CM2A A2023–2
2              (i)    State three potential uses for stochastic security price models. For each use,
                      explain why the model should be stochastic.                                    [3]

               The charts below show sample paths for three different stochastic processes.

                                                     Path 1
         20

         15

         10

          5
    Wt




          0
               0               50              100              150              200              250
          ‐5

         ‐10

         ‐15
                                                        Time




                                                     Path 2
         15

         10

          5

          0
    Wt




               0               50              100              150              200              250
          ‐5

         ‐10

         ‐15

         ‐20
                                                        Time




                                                     Path 3
         15

         10

          5
    Wt




          0
               0               50              100              150              200              250
          ‐5

         ‐10

         ‐15
                                                        Time




               (ii)   For each chart explain if, and why, the path is likely to be a Wiener process.
                                                                                                        [3]




CM2A A2023–3
         The chart below shows a single sample path of a Vasicek model represented by the
         following stochastic differential equation:

                                       drt = κ(θ – rt)dt + σdWt

         6%

         5%

         4%

         3%
    rt




         2%

         1%

         0%
               0             50               100           150             200             250
                                                    Time



         (iii)     Describe the likely impact on the chart of the following parameter changes:

                   (a)    An increase in σ

                   (b)    An increase in θ

                   (c)    A reduction in κ.
                                                                                               [4]
                                                                                        [Total 10]


3        A company specialises in long-term insurance contracts. It holds reserves in respect of
         these contracts and it wants to build a model of its future investment returns.

         (i)       Identify the similarities and differences between a deterministic and stochastic
                   model of investment returns.                                                 [3]

         (ii)      Explain why the company may prefer to use a stochastic model.                  [3]

         The company has decided to build a stochastic model. It assumes that the rate of
         return in each calendar year is Normally distributed and independent of the rates of
         return in previous years. The company plans to review this model once every 2 years.

         (iii)     Set out two possible disadvantages of using this stochastic model.             [2]

         (iv)      Suggest how the company may overcome each disadvantage identified in
                   part (iii).                                                           [2]
                                                                                  [Total 10]




CM2A A2023–4
4    A biologist is modelling the population of a group of tortoises on an island over the
     next 5 years. There are currently 100 tortoises and the biologist has decided it is
     appropriate to model the population after n years as:

                               Sn = 100 1 + i1 1 + i2 …. 1 + in

     where:

           ik is the growth rate of the tortoise population in year k.
           ik are independent and identically distributed.
           log(1 + ik) ~ N(μ, σ2) for each k.

     (i)        Write down the distribution of log(S5 ).                                      [1]

     The biologist has calculated that:

           there is a 99% chance that S5 ≥ 75.
           there is a 99% chance that S5 ≤ 140.

     (ii)       Determine the values of μ and σ.                                              [5]

     A university research team has asked the biologist to determine how likely it is that
     there will be at least 100 tortoises after 10 years. The biologist assumes that the model
     can be extended to S10 with i6 , i7 , … i10 having the same properties as i1 , i2 , … i5 .

     (iii)      Calculate the probability that S10 ≥ 100.                                     [3]

     (iv)       Identify the risks of the biologist using this model to produce the answer in
                part (iii).                                                                   [2]
                                                                                       [Total 11]


5    In a Black–Scholes market, the stock price is given by:

                                     St = S0 exp(0.2Bt + 0.2t)

     where Bt is a standard Brownian motion under the real-world probability measure.

     A derivative security written on the stock in the same market at time t has price:

                                Dt = 2 exp 0.6 Bt – ct + 0.39t

     where Bt is a standard Brownian motion under the equivalent martingale measure.

     (i)        Determine the value of c such that Bt + ct is a standard Brownian motion under
                the equivalent martingale measure.                                         [7]

     (ii)       Calculate the risk-free rate of interest.                                    [1]
                                                                                       [Total 8]




CM2A A2023–5
6    An insurer has been offered two possible investments.

     Investment A: a derivative that will produce a payoff $XA as set out below:

                                   XA          Probability
                                                   1
                                   3.0               /3
                                                   1
                                   2.6               /3
                                                   1
                                   1.0               /3

     Investment B: a diversified portfolio that will produce a payoff of $XB , where

                                           XB = 0.2 + N

     and N is a Normal random variable with μ = 2 and σ = 2.

     The insurer uses a quadratic utility function.

     (i)     Calculate, for each investment:

             (a)    the expected payoff.

             (b)    the variance of the payoff.
                                                                                               [3]

     (ii)    State, with reasons, which investment the insurer would choose.                   [2]

     (iii)   Calculate, for each investment, the shortfall probability of the payoff falling
             below:

             (a)    $0.5

             (b)    $2.0.
                                                                                               [3]

     (iv)    Explain whether either investment would be more attractive for this investor in
             all circumstances.                                                          [2]
                                                                                  [Total 10]




CM2A A2023–6
7    An investor is considering investing in an asset with a payoff of X, where X has a
     probability density function f, given by:

                                          f(s) = 0 for s < 1

                                         f(s) = 4/s5 for s ≥ 1

     (i)     Calculate the semi-variance of return.                                        [5]

     (ii)    Calculate the value at risk in the:

             (a)    worst 5% of outcomes.

             (b)    worst 10% of outcomes.
                                                                                           [4]

     (iii)   Discuss the differences between your answers to part (ii).                   [3]
                                                                                   [Total 12]


8    The run-off triangle below shows the incremental claims incurred on a portfolio of car
     insurance policies.

                                   0          1          2        3
                       2018       362        272        506      350
                       2019       444        116        165
                       2020       487        195
                       2021       518

     (i)     Calculate the outstanding claims using the basic chain ladder method.         [6]

     (ii)    Discuss whether the chain ladder method is likely to be suitable for this
             pattern of claims.                                                           [4]

     (iii)   Discuss, with reference to the pattern of claims, whether any other methods
             would be better than the basic chain ladder method for this portfolio.        [2]
                                                                                    [Total 12]




CM2A A2023–7
9    Consider a market that satisfies the assumptions of the capital asset pricing model.

     The market contains only three assets, with the following attributes:

                             Market capitalisation        Expected return (p.a.)
                                     ($m)                         (%)
            Asset 1                    6                          5.0
            Asset 2                    4                          7.0
            Asset 3                   10                          8.5

     The variance/covariance matrix is as follows:

                                      Asset 1        Asset 2        Asset 3
                 Asset 1              0.0005         0.0006         0.0005
                 Asset 2              0.0006         0.0015         0.0026
                 Asset 3              0.0005         0.0026         0.0042

     (i)       Show, using the figures provided, that the market portfolio has a beta of 1. [4]

     A portfolio, P, on the efficient frontier is invested 30% in Asset 1 and 70% in Asset 3.

     (ii)      Calculate the expected return and standard deviation of portfolio P.         [2]

     (iii)     Determine the market price of risk and the risk-free rate.                   [3]

     (iv)      Suggest reasons why it may not be appropriate to estimate parameters for an
               asset pricing model using past data.                                       [3]
                                                                                  [Total 12]


                                    END OF PAPER




CM2A A2023–8


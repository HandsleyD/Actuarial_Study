---
normalized_id: cm2-2021-september-question-paper-cm2a-221-exam-clean-proof
exam_code: CM2
year: 2021
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep21/CM2A_221_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2021-september-question-paper-cm2a-221-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                             27 September 2021 (am)


                Subject CM2 - Financial Engineering
                        and Loss Reserving
                          Core Principles

                                        Paper A
                       Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


CM2A S2021                                               © Institute and Faculty of Actuaries
1    An investor makes decisions using the utility function U(w) = ln(w) where w > 0.

     The investor is going to invest $100 now for a period of 1 year, and has identified the
     following two assets to invest in:

           Asset A is risk-free and will not change in value over the year.
           Asset B will increase in value by 50% over the year with probability 0.6 or
            decrease in value by 50% over the year with probability 0.4.

     The investor does not make any allowance for discounting when making investment
     decisions. They are going to invest a proportion, x, of their wealth in Asset A and the
     remaining proportion, (1 – x), in Asset B.

     (i)       Construct a formula, in terms of x, for their expected utility at the end of the
               year.                                                                            [2]

     (ii)      Determine, using your result from part (ii), the amount that the investor should
               invest in each asset to maximise their expected utility.                      [5]
                                                                                       [Total 7]


2    Consider an exponential distribution with parameter λ = 2, and a lognormal
     distribution with parameters μ = –1.04, σ = 0.833.

     (i)       Calculate for each distribution:

               (a)     the mean.

               (b)     the variance.

               (c)     the 99th percentile.
                                                                                               [8]

     (ii)      Comment on your answers to part (i) in the context of choosing a distribution
               for financial modelling.                                                    [2]

     (iii)     Comment on why the lognormal distribution may be preferred to the
               exponential distribution for modelling a security price.                        [2]
                                                                                        [Total 12]


3    Claims on a portfolio of insurance policies arise as a Poisson process with rate λ.

     The insurance company calculates premiums using a loading of θ and has an initial
     surplus of U. The probability of ruin before time t is defined as Ψ U, t .

     Suppose that θ = 0.1 and the claim amounts follow an exponential distribution with
     mean µ = 0.5.

     Calculate the numerical value of R, the adjustment coefficient.                           [6]




CM2A S2021–2
4    A non-dividend paying share, with price St at time t, has a European call option
     written on it with value ct at time t. The call matures at time T and has a strike price of
     K. The continuously compounded risk-free rate is r.

     (i)     State an upper bound for the value of the call option, ct .                     [1]

     Consider a portfolio containing one call option and Ke – T – t r cash.

     (ii)    Demonstrate that, at time T, the value of the portfolio will always be greater
             than or equal to the value of the share, ST .                                  [3]

     (iii)   Determine, using the result in part (ii), a lower bound for the value of the call
             option:

                                     ct ≥ St – Ke – T – t r .                                [1]

     An investor holds an American call option on the same share. Assume that r > 0.

     (iv)    Explain, using the result in part (iii), why it would never be optimal for the
             investor to exercise this option before its maturity date.                     [4]

     (v)     Discuss how your answer to part (iv) would change if the share paid
             dividends.                                                                     [2]
                                                                                     [Total 11]


5    Consider the following assets in a world where the Capital Asset Pricing Model
     (CAPM) holds. There are three risky assets and one risk-free asset. No other assets
     exist in the market.

                                                     Total value of
                                  Expected
             Asset                                  assets in market       Beta
                               return (% p.a.)
                                                          ($m)
             Risky asset A            5                         10          β
             Risky asset B           10                         50          1
             Risky asset C            x                         20          2
             Risk-free asset          3                         40         n/a

     (i)     Calculate the expected return on the market portfolio.                          [4]

     (ii)    Calculate x.                                                                    [1]

     (iii)   Calculate β.                                                                    [1]

     (iv)    Discuss the limitations of the CAPM.                                           [3]
                                                                                      [Total 9]




CM2A S2021–3
6    The annual rates of return from a particular investment, Investment A, are
     independently and identically distributed. Each year the distribution of 1 + it ,
     where it is the return earned on Investment A in year t, is log-normal with parameters
     µ and σ2 .

     The mean and standard deviation of it are 0.04 and 0.03, respectively.

     (i)     Calculate µ and σ2 .                                                              [4]

     An insurance company has liabilities of $20m to meet in 3 years’ time. It currently
     has assets of $17.5m, which are invested in Investment A.

     (ii)    Determine the probability that the insurance company will be unable to meet
             its liabilities.                                                           [5]
                                                                                  [Total 9]


7    A one-period binomial tree has been constructed. In it, a stock with initial value S0
     can evolve over a single time period to be worth either S0 u or S0 d, where u > d. The
     continuously compounded risk-free rate of return is r.

     (i)     Demonstrate that, to avoid arbitrage, the relationship d < er < u must hold. [3]

     (ii)    State the formula for the risk-neutral probability, q, of an up movement.         [1]

     (iii)   Demonstrate that the relationship in part (i) is equivalent to 0 < q < 1.         [2]
                                                                                         [Total 6]




CM2A S2021–4
8    Consider a random variable X with probability density function fX (x).

     (i)     Write down the formula for the following in terms of fX (x):

             (a)     Variance

             (b)     Downside semi-variance

             (c)     Expected shortfall relative to a level.
                                                                                               [3]

     A trader has built a Value at Risk (VaR) model of a security that fits a distribution to
     underlying historical data.

     The modelled 1-day 99% VaR for this security is $L, meaning that there is a 1%
     chance that the trader loses more than $L in 1 working day by holding this security.

     The trader is examining the effectiveness of their model over a month with 20
     working days in it. They have assumed that day-on-day movements of the security are
     all independent from one another.

     (ii)    Demonstrate that, assuming the VaR model is correct, the probability the
             trader loses more than $L on at least 3 working days in the month is 0.001. [3]

     Over this month, a market crash occurs. On each of 10 separate working days during
     the month, the security generates losses in excess of $L per day.

     (iii)   Discuss, without any further calculations, the effectiveness of VaR as a risk
             measure, given this information and your answer to part (ii).                 [4]
                                                                                  [Total 10]


9    In any year, the effective interest rate per annum has mean value j and standard
     deviation s and is independent of the interest rates in all previous years.

     Let Sn be the accumulated amount after n years of a single investment of one at time t = 0.

     You are given that:

                                             E[Sn ] = (1 + j)n .
                                                               n
                                 Var Sn = (1 + 2j + j2 + s2 ) – (1 + j)2n .

     The interest rate per annum in any year is equally likely to be i1 or i2 (i1 > i2 ). No
     other values are possible.

     (i)     Derive expressions for j and s2 in terms of i1 and i2 .                           [3]

     Consider the accumulated value at time t = 20 of $2 million invested at time t = 0.
     This amount has an expected value of $4.5 million and a standard deviation of
     $0.75 million.

     (ii)    Calculate the values of i1 and i2 .                                              [6]
                                                                                        [Total 9]



CM2A S2021–5
10   Consider a Poisson process with parameter λ. Let the random variable T1 denote the
     time of the first claim.

     (i)     Show that T1 follows an exponential distribution with parameter λ.           [2]

     (ii)    Prove that the inter-event times between subsequent claims also follow an
             exponential distribution with parameter λ.                                [3]

     You are given below, the formula for the ultimate probability of ruin, Ψ(U), where
     individual claim amounts are exponentially distributed with mean 1, the premium
     loading factor is θ, and the initial surplus is U:

                                            1      –θU
                                 Ψ U =         exp
                                           1+θ     1+θ

     (iii)   Comment on what can be inferred from this result about the relationship
             between the ultimate probability of ruin and:

             (a)    the initial surplus.

             (b)    the premium loading factor.
                                                                                         [5]
                                                                                  [Total 10]




CM2A S2021–6
11   Academic studies have shown that lemurs (primates from the island of Madagascar),
     are risk averse and non-satiated. A zoologist is trying to determine an appropriate
     utility function, U(w), to model their behaviour in an experiment.

     (i)       Determine, for each of the following functions, whether the zoologist could
               use it as a valid utility function:

               (a)     U w = w + w2 for –∞ < w ≤ 3

                               (wγ – 1)
               (b)     U w =              for 0 < w < ∞ and γ < 1
                                  γ


               (c)     U w = w – 2w2 for – ∞ < w ≤ 3
                                                                                             [8]

     The zoologist has chosen the function U w = ln 1 + w . The zoologist now carries out
     an experiment, and presents the lemurs with two options:

           Scenario A: w = 3 or w = 0 with equal probability
           Scenario B: w = 1.1 with certainty.

     The zoologist finds that the lemurs prefer Scenario B. Assume that the initial wealth
     of the lemurs is w = 0, and that they behave rationally in the experiment.

     (ii)      Show that the utility function the zoologist has chosen is consistent with the
               behaviour of the lemurs in the experiment                                      [3]
                                                                                      [Total 11]


                                      END OF PAPER




CM2A S2021–7


---
normalized_id: cm2-2025-september-question-paper-cm2b-sept2025-exam
exam_code: CM2
year: 2025
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/CM2/CM2B/Sep25/CM2B_Sept2025_Exam.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2025-september-question-paper-cm2b-sept2025-exam

    INSTITUTE AND FACULTY OF ACTUARIES




                                       EXAMINATION

                                          18 September 2025


                      Subject CM2 – Economic Modelling
                               Core Principles
                                                  Paper B
                                Time allowed: One hour and fifty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.



CM2B S2025                                                             © Institute and Faculty of Actuaries
1    An investor is considering investing in one of two assets. You have been given 1,000
     simulations of the 1-year return for each asset in the ‘Q1 Data’ worksheet.

     The investor has initial wealth of $100 and uses the utility function:

                                                              1
                                         𝑈 𝑤         𝑤           𝑤
                                                             500

     (i)     Calculate the mean and variance of the value of each asset at time t = 1.      [6]

     (ii)    Calculate the expected utility to the investor of each asset at time t = 1.    [4]

     (iii)   Justify why your answers to parts (i) and (ii) are consistent with each other in
             the context of which asset the investor is likely to prefer.                   [4]

     The investor has a liability of $150 to meet in 1 year’s time and is now considering
     risk measures for the two assets.

     (iv)    Calculate the 99% Value at Risk (VaR) of the value of each asset at
             time t = 1.                                                                    [4]

     (v)     Calculate the expected shortfall of the value of each asset at time t = 1
             relative to $150.                                                              [4]

     (vi)    Comment on what your solutions to parts (iv) and (v) tell us about which asset
             the investor may prefer.                                                   [4]

     The investor wishes to model the returns on each asset using a Beta(𝛼, 𝛽) distribution,
     assuming that each of the two assets follows a separate distribution with its own
     parameters.

     For the Beta distribution, the mean and variance are:

                                     𝛼                           𝛼𝛽
                           𝑚                 ,   𝑠
                                 𝛼       𝛽               𝛼     𝛽 𝛼    𝛽   1

     (vii)   Derive, using your answer to part (i), estimates of 𝛼 and 𝛽 for each asset. [10]
                                                                                   [Total 36]




CM2B S2025–2
2    Consider two risk-free zero-coupon bonds, each with a nominal value of $100. Bond
     X matures at time t = 1 and Bond Y matures at time t = 3 where t is measured in years.

     Assume that the Vasicek model holds:

                                   𝑑𝑟     𝜅 𝜃    𝑟 𝑑𝑡     𝜎𝑑𝑊

     where

     𝑟 is the short rate at time t
     𝑊 is a Weiner process under the martingale measure
     𝜅 = 0.7
     𝜃 = 3%
     𝜎 = 9%
     𝑟 = 3%.

     Under this model the price at time 0 of a zero-coupon bond paying an amount of
     $1 at time T is:

                                     𝑃 0, 𝑇      𝑒

     where

                                         𝜎                    𝜎
                          𝐴 𝑇       𝜃           𝐵 𝑇       𝑇      𝐵 𝑇
                                         2𝜅                   4𝜅

                                                 1    𝑒
                                        𝐵 𝑇
                                                      𝜅

     (i)     Calculate:

             (a)    the fair price of Bond X at time t = 0.

             (b)    the risk-free 1-year continuously compounded spot rate at time t = 0.
                                                                                         [6]

     The fair price of Bond Y at time t = 0 is $92.

     (ii)    Calculate:

             (a)    the risk-free 3-year continuously compounded spot rate at time t = 0.

             (b)    the risk-free 2-year continuously compounded forward rate at time
                    t = 1.
                                                                                         [4]




CM2B S2025–3
     Assume now that the parameters given above for the Vasicek model also apply for the
     Cox–Ingersoll–Ross (CIR) model.

     On the worksheet ‘Q2 Data’ you have been provided with a set of U(0,1) random
     variables to simulate three sample interest rate paths over a 5-year period.

     (iii)   Using the CIR model and the simulated random variables provided:

             (a)    Generate three Monte-Carlo simulated paths for the 1-year short
                    rate rt for the next 5 years.

                    [Hint: Discretise the CIR short rate equation and take ∆t = 1.]

             (b)    Plot a chart showing your results from part (iii)(a).
                                                                                       [14]

     (iv)    Comment on how the simulated paths for rt show consistency with the key
             characteristics of the CIR model.                                       [4]

     (v)     Comment, without performing any further calculations, on the impact on the
             1-year short rate produced by the CIR model if:

             (a)    𝜅 increases.                                                         [2]

             (b)    σ decreases.                                                         [2]
                                                                                  [Total 32]




CM2B S2025–4
3    An index based on real estate values currently has a value of $40,000. The 2-year
     forward price on the index is $42,051.

     Assume that no dividends are paid.

     (i)     Calculate the risk-free force of interest.                                      [3]

     A European put option on the index is currently priced at $2,000. The option has a
     strike price of $39,000 and matures in 5 years’ time.

     (ii)    Calculate the value of a call option on the index with the same strike price and
             maturity.                                                                     [3]

     (iii)   Calculate the volatility of the index implied by its current value.             [4]

     (iv)    Estimate the value of Vega for the put option.                                  [3]

     An analyst wants to investigate the value of the option under different volatility
     values.

     (v)     Calculate the updated value of the put option for a range of volatilities
             between 5% and 15%, assuming that all other parameters stay the same:

             (a)     using your estimated value of Vega from part (iv) to approximate the
                     option value.

             (b)     using the Black–Scholes model.
                                                                                             [8]

     (vi)    Plot a suitable chart showing the option prices from parts (v)(a) and (v)(b).
                                                                                             [4]

     (vii)   Comment on the differences between the option values calculated by
             estimation compared to those calculated using the Black–Scholes model,
             as shown on your chart in part (vi).                                            [4]

     (viii) Explain, with reference to your answers to part (vii), the significance of
            volatility when pricing real world options.                                   [3]
                                                                                   [Total 32]


                                  END OF PAPER




CM2B S2025–5


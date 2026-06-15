---
normalized_id: sp6-2025-april-question-paper-sp6-april2025-exam-paper
exam_code: SP6
year: 2025
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Apr25/SP6_April2025_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2025-april-question-paper-sp6-april2025-exam-paper

    INSTITUTE AND FACULTY OF ACTUARIES




                                      EXAMINATION

                                              23 April 2025


                      Subject SP6 – Financial Derivatives
                             Specialist Principles
                             Time allowed: Three hours and twenty minutes




              In addition to this paper you should have available the 2002 edition of
                   the Formulae and Tables and your own electronic calculator.


All material in this document is the copyright material of the Institute and Faculty of Actuaries. No part of this
document may be reproduced in any material form, whether by publication, translation, storage in a retrieval
system or transmission by electronic, mechanical, photocopying, recording or other means, without the prior
permission of the Institute and Faculty of Actuaries.


SP6 A2025                                                              © Institute and Faculty of Actuaries
1    (i)      Outline the key features of an equilibrium model of the short-term interest
              rate, r.                                                                    [2]

     The Cox, Ingersoll and Ross model is an equilibrium model of the short rate with a
     risk-neutral process for r as follows:

                                 dr = a(b − r) dt + σ√(rdz)

     where a, b and σ are constants and dz is standard Brownian motion.

     (ii)     Explain why the constants a and b must be non-negative.                         [2]

     In the model, the price of a zero coupon bond at time t with maturity T, P(t, T) is
     given by:

                             P(t, T) = A(t, T)exp(−B(t, T) × r(t))

     The duration of a T-year zero coupon bond in the model can be calculated as the
     sensitivity of the bond price with respect to the short rate.

     (iii)    Show that there is a duration measure of an 8-year zero coupon bond that is
              equal to B(0,8).                                                            [3]

     The following model parameters are chosen in the risk neutral world: a = 0.3,
     b = 0.035 and σ = 0.04.

     (iv)     Explain why the market price of risk for interest rates is normally negative.
                                                                                              [1]

     (v)      Determine the real-world process using a market price of risk of −1.3√r.        [2]

     (vi)     Comment on the suitability of the Cox, Ingersoll and Ross model for an
              analyst who is pricing interest rate derivatives in an ultra-low-interest rate
              environment.                                                                   [3]
                                                                                      [Total 13]




SP6 A2025–2
2    On 1 January, a small chocolate manufacturing company purchased, via an exchange,
     ten contracts each for 10 tonnes of cocoa beans, for delivery in 6 months’ time.

     (i)      State the type of derivative the company has purchased.                      [1]

     (ii)     Explain why the manufacturing company is likely to be purchasing derivative
              contracts.                                                                [2]

     The contracts are priced per tonne and specify that following expiry the seller can
     deliver the beans to one of three different ports.

     The price of each cocoa beans contract has increased from £4,250 on 1 January to
     £9,575 on 31 March.

     (iii)    Calculate, showing all your workings, the value of the contracts to the
              manufacturing company on 31 March.                                           [2]

     (iv)     Comment on the change in price of the contract over the 3-month period.      [2]

     (v)      Discuss the practical considerations that the manufacturer may have made
              prior to purchasing the derivative contracts.                              [4]
                                                                                  [Total 11]


3    A continuous process is used to model stock behaviour.

     (i)      Describe a continuous process.                                               [1]

     (ii)     Describe the benefits of using geometric Brownian motion with drift instead
              of simple Brownian motion for modelling stock behaviour.                   [2]

     (iii)    Derive dXt given that Xt = exp(σWt + (μ − 0.3σ2)t).                          [3]

     The stochastic process can be rewritten in the form of dXt = Xt(σdWt + vdt) where
     Wt is a P-Brownian motion and suppose we find an equivalent process in the form
     dXt = Xt(σdW̃ t + wdt) where W̃ t is a Q-Brownian motion.

     (iv)     Derive the difference in drift between W̃ t and Wt using the Cameron-Martin–
              Girsanov theorem.                                                           [3]

     (v)      Comment on the importance of the Cameron-Martin–Girsanov theorem for
              option pricing using the Black–Scholes model.                        [4]
                                                                            [Total 13]




SP6 A2025–3
4    A market has only one security and a risk-free cash bond. Consider a portfolio in this
     market consisting of 𝜗, F-previsible units of the security, St, and ψ units of the cash
     bond, Bt.

     (i)      State what it means for the process 𝜗 to be F-previsible.                      [1]

     (ii)     Outline what it means for the portfolio strategy (𝜗,ψ) to be self-financing. [2]

     Let stock price, St = S0 exp(σWt + μt), with a constant dividend stream, δ, follow the
     Black–Scholes model and let the risk-free bond price, Bt = exp(rt), where r is the risk-
     free interest rate, μ is the stock drift, σ is the stock volatility and Wt is geometric
     Brownian motion.

     Define Tt to be the price of a portfolio that consists of the stock St with the dividends,
     δ, reinvested.

     (iii)    Show that the value of a portfolio (𝜗,ψ) can be expressed in terms of (χ,ψ)
              where χ is the number of units of T.                                        [3]

     (iv)     Show that the stochastic differential equation of Yt = Bt−1Tt is
              dY(t) = Y(t){σdWt + (μ + δ + × σ2 − r)dt}.
                                             1
                                                                                             [4]
                                             2

     Assume an option contract is for 100 times the value of the index, the US risk-free
     rate is 4% p.a. continuously compounded, the dividend yield is 5% p.a. continuously
     compounded, the volatility of the S&P500 stock index is 22% and the latest index
     value is 4,250.

     (v)      Calculate, showing all workings, the impact of dividends on the value of a
              1 year call option on the S&P500 stock index with strike 4,750.            [3]
                                                                                  [Total 13]




SP6 A2025–4
5    (i)      Suggest possible reasons why risk-neutral short-rate interest models are used
              in financial modelling.                                                     [3]

     A quantitative modeller is concerned about the limitations of single factor Cox–
     Ingersoll–Ross (CIR) short-rate interest model. As a result, the modeller is proposing
     a new extension to this model.

     New model (risk-neutral): r(t) = x(t) + φ(t), where r is the short rate, x represents a
     CIR process (with 𝑑𝑥     𝑎 𝑏 𝑥 𝑑𝑡 𝜎 𝑥 𝑑𝑍 , a, b and 𝜎 are constants and Z is
     the Brownian motion for this process) and φ(t) is a deterministic function of time t.

     Let P(t,T) be the price of a zero-coupon bond at time 𝑡 ∈ 0, 𝑇 maturing at time T and
     with unit face value evaluated using the new model. Let f (t,T) be the instantaneous
     forward interest rates at time t associated to the bond prices P(t,T).

     Similarly, let PCIR(t,T) be the price of a zero-coupon bond at time t ∈ [0,T] maturing at
     time T and with unit face value evaluated using a CIR short rate interest rate model.
     Let fCIR(t,T) be the instantaneous forward interest rates at time t associated to the bond
     prices PCIR(t,T).

     (ii)     Show that f(t,T) = φ(T) + fCIR(t,T), defining any terms used and stating any
              assumptions made.                                                            [6]

     The modeller notes that the observed current prices of zero-coupon bonds with unit
     face value in a market form a smooth function: u → PM (0,u).

     (iii)    Determine a condition on φ(T) such that the new model fits the observed
              current prices PM (0,u), for all u ≥ 0.                                        [3]

     (iv)     Discuss why it is beneficial if a short rate interest model can be calibrated to
              any observed yield curve.                                                       [4]
                                                                                      [Total 16]




SP6 A2025–5
6    An investor has a positive view on the stock of a US technology company currently
     trading at a share price of $1,000. The investor wants to gain exposure to the stock by
     using exchange traded at-the-money call options with a premium of $75.

     (i)      State which side of the call option trade the investor should take to achieve its
              objective.                                                                     [1]

     (ii)     Calculate the profit or loss for the seller of this call option if the share price is
              $1,050 at expiry.                                                                  [2]

     (iii)    Suggest another derivative strategy that the investor could use to gain
              exposure to the stock.                                                            [3]

     The company decides to do a 10-for-1 stock split during the term of the call options,
     so that the share price after the split should be $100.

     (iv)     Explain the impact of the stock split on the call option price and contract
              terms.                                                                            [3]

     (v)      Discuss potential issues that may arise from corporate actions when trading
              options.                                                                    [3]
                                                                                   [Total 12]




SP6 A2025–6
7    An institution is seeking to hedge its downside exposure to equities, but management
     are worried about the cost of using options. Management are therefore considering
     using alternative hedging strategies.

     (i)       State two benefits of a delta hedging strategy compared to purchasing options.
                                                                                           [2]

     (ii)      Compare a stop-loss strategy with a delta hedging strategy to achieve the
               institution’s objectives.                                                     [5]

     The institution decides to delta hedge its risk by replicating a European stock index
     put option with the following properties:

           3 years to maturity
           strike price of 85% of the current market price
           volatility of 20% p.a.
           dividend yield of 3% p.a.
           risk-free interest rate of 5% p.a. (all continuously compounded).

     (iii)     Describe how the institution would likely implement the hedge.                [3]

     (iv)      Calculate the delta of this European put option.                              [4]

     (v)       Outline the advantages and disadvantages of gamma hedging this position in
               addition to the delta hedge.                                              [4]

     (vi)      Describe, without performing further calculations, the impact of a sudden fall
               in equity markets on the delta and gamma of the put option that is being
               replicated.                                                                 [4]
                                                                                    [Total 22]


                                    END OF PAPER




SP6 A2025–7


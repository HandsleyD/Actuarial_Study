---
normalized_id: sp6-2021-april-question-paper-sp6-121-exam
exam_code: SP6
year: 2021
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Apr21/SP6_121_EXAM.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2021-april-question-paper-sp6-121-exam

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                                  19 April 2021 (am)


                Subject SP6 - Financial Derivatives
                       Specialist Principles
                       Time allowed: Three hours and fifteen minutes




     In addition to this paper you should have available the 2002 edition of the Formulae
            and Tables and your own electronic calculator.

If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 A2021                                                 © Institute and Faculty of Actuaries
1    A stock has a current price of $70. There is a call option written on this stock that has
     a strike price of $80, a time to expiry of 90 days, a trading calendar year of 260 days,
     a volatility of 32% p.a., a continuously compounded risk-free rate of 2.3% p.a. and no
     dividends.

     (i)      Calculate the delta of this option.                                          [2]

     (ii)     Calculate the number of underlying stocks required to make a delta neutral
              portfolio comprising four of these options shorted and the underlying stocks.
                                                                                          [1]

     An investor sells a call option at time 0 receiving a premium of V(0). The underlying
     stock has price S(0) at time 0. The investor delta hedges this position using the
     underlying stock at time 0 only. At time t, the investor closes out their position with
     no cashflows between times 0 and t. Assume no dividends, taxes or transaction costs.

     (iii)    Determine the value of this portfolio:

              (a)    at time 0.

              (b)    at time t.
                                                                                           [3]

     The continuously compounded risk-free rate is denoted by r.

     (iv)     Demonstrate that the profit to the investor at time t is given by

                                  Profit  (0)  S (t )  S (0)
                                           V (t )  V (0) 
                                          – (ert – 1)[  (0)S(0) – V(0)]                   [3]

     (v)      Describe in words the three terms in the equation in part (iv).              [3]
                                                                                    [Total 12]




SP6 A2021–2
2    (i)      Describe, in your own words, the following interest rates:

              (a)     Treasury rate

              (b)     London Interbank Offered Rate (LIBOR) rate

              (c)     Overnight Indexed Swap (OIS) rate

              (d)     repo rate.
                                                                                         [4]

     (ii)     Discuss the credit risk inherent in each of these interest rates.          [4]

     An investment bank derives an OIS curve to value its portfolio of swaps. Where OIS
     data are not available, the investment bank assumes a fixed LIBOR-OIS spread,
     consistent with what is available at the longest term.

     (iii)    State an alternative approach to deriving the OIS curve where data are not
              available.                                                                 [1]

     (iv)     Set out why a LIBOR forward curve consistent with OIS discounting must be
              derived when swaps are being valued using OIS discounting.              [2]

     The bank’s rates desk provides the following interest rate data:

                                          1 year      2 year       3 year
                    Annual spot rate
                                           (%)         (%)          (%)
                    OIS                    0.90        1.25          n/a
                    LIBOR                  1.25        1.75         2.50

     The 2-year and 3-year LIBOR for fixed par swap rates are 1.75% and 2.48%,
     respectively.

     (v)      Calculate, using the data provided, the 1-year forward LIBOR rates at
              t = 1 and t = 2, consistent with OIS discounting.                          [4]
                                                                                  [Total 15]




SP6 A2021–3
3    The Vasicek model for the term-structure of interest rates is an equilibrium model that
     incorporates mean reversion.

     (i)      Describe, in your own words, the key features of an equilibrium model.        [2]

     (ii)     Explain why mean reversion is a desirable feature of a short-rate model.      [1]

     An insurer has decided to use the Vasicek model to value the interest rate guarantees
     embedded in some of its life insurance products. The risk department proposes to
     calibrate the model by fitting it to historical data.

     (iii)    Discuss the considerations that the risk department should make when
              selecting the historical data set used to fit the model.                      [4]

     The insurer offers a single premium 10-year product that provides a return linked to
     the value of a portfolio of corporate bonds. Based on its analysis, the risk department
     has determined the following parameters for the Vasicek model:

     a = 0.05

     b = 0.03

     σ = 0.02.

     The Vasicek model is governed by the stochastic differential equation:

                                     drt = a(b – rt)dt + σ dWt,

     where rt is the short rate at time t and Wt is standard Brownian motion.

     (iv)     Calculate the price of a 10-year zero-coupon bond with a notional value of
              100 under the Vasicek model, assuming an initial short rate, r, of 2%.     [3]

     As part of the product, the insurer also offers a guaranteed return of the invested
     premium at the end of the life of the product. The insurer must calculate and report
     the cost of the guarantee as part of its regulatory reporting.

     (v)      Explain what changes are needed to the model to enable the insurer to value
              the guarantee.                                                              [2]

     (vi)     Comment on the suitability of the Vasicek model for fulfilling regulatory
              requirements.                                                               [2]
                                                                                   [Total 14]




SP6 A2021–4
4    (i)      List the stakeholders in a defined benefit pension scheme who may be
              concerned with tail risk.                                                    [2]

     A defined benefit pension scheme has a financial plan to become fully funded in
     10 years’ time. It currently has a significant exposure to domestic equities. A part of
     its plan is a strategy to manage equity tail risk.

     (ii)     Explain why the pension scheme may be concerned with this risk.              [3]

     The investment advisors to the pension scheme have suggested hedging against this
     risk.

     (iii)    Describe why purchasing index call options written on the main domestic
              equity index would NOT be a suitable hedge.                                  [2]

     As a basic hedge the pension scheme buys European-style index put options written
     on the main domestic equity index with a strike price equal to the current spot level
     and a time to maturity of 10 years.

     The notional value of the put options is equal to the current market value of the equity
     investments of the pension scheme. It can be assumed that there are no cashflows to
     the equity investments of the scheme over the 10 years.

     (iv)     Demonstrate that the potential profit/loss of the hedged equity investments of
              the scheme in 10 years’ time, relative to their current market value, can be
              written as a call option. State any other assumptions made.                  [4]

     (v)      Evaluate the strategy as a way of hedging the equity tail risks.             [6]
                                                                                    [Total 17]




SP6 A2021–5
5    Consider an asset with price S t at time t that follows geometric Brownian motion.

     Let Bt be the risk-free bond price at time t satisfying Bt = B0ert with r being the
     constant risk-free rate. A portfolio  t , t  consists of t units of S t and t units of
      Bt . The value of this portfolio is Vt at time t.

     (i)         Define a self-replicating strategy both in your own words and algebraically
                 using t and t .                                                           [3]

     (ii)        Prove that a strategy is self-financing if, and only if, dVt  t d St , where
                 Vt = e rt Vt and St = e rt St , stating any assumptions made.                  [7]

     (iii)       Justify algebraically that t is determined from V0 , Bt , St and t so that the
                 strategy is self-replicating. [Hint: consider integrating the equation in part
                 (ii).]                                                                           [2]

     A strategy has been set-up with:

            t  V0 S0 for t  [0, t1 ) ,

            t  30 for t  [t1, t2 ) , and

            t2  0 ,

     where 0  t1  t2 are all fixed at time 0.

     (iv)        Explain in words what this strategy represents.                                  [2]
                                                                                           [Total 14]




SP6 A2021–6
6    A stock with price St at time t goes ex-dividend at times 0  t1  t2  ...  tn  T with
     corresponding dividend amounts of D1, D2, …, Dn at these times.

     An American call option is written on this stock with maturity date T.

     (i)      State, in your own words, how American derivatives with discrete dividends
              can be valued.                                                            [2]

     The current stock price is $100. The stock is expected to pay dividends of $1 in
     6 months’ time and $2 in 9 months’ time. These dates are also the ex-dividend dates.
     An American call option is written on this stock with a maturity date of 12 months.
     The call option has a strike price of $110 and a volatility of 20% p.a., and the
     continuously compounded risk-free discount rate is 6% p.a.

     (ii)     Calculate the current value of the equivalent European call option.            [3]

     (iii)    Explain whether or not it will be optimal to exercise the American option
              immediately prior to t1 (in 6 months’ time).                                   [2]

     A stock has current price of $100 and a dividend of $1 in 6 months’ time. A European
     call option written on this stock has a maturity date of 9 months, a strike price of $110
     and the same volatility and interest rate as above.

     (iv)     Calculate the current value of this European call option.                      [3]

     (v)      Demonstrate that the value of the American option with a maturity date of
              12 months in part (iii) is approximately $5.17, stating any assumptions made.
                                                                                          [2]
                                                                                   [Total 12]




SP6 A2021–7
7    A regulatory capital framework requires insurers to use credit ratings, sourced from
     approved Credit Rating Agencies (CRAs), in the calculation of their capital
     requirements.

     As part of a review of its regulatory system, the regulatory authorities are
     investigating alternatives to using credit ratings, sourced from CRAs.

     (i)      Discuss why the regulator may wish to replace the use of credit ratings in
              insurers’ capital calculations.                                               [4]

     One proposal being considered is for insurers to make use of their own internal credit
     assessments in the calculations.

     (ii)     Evaluate this proposal from the point of view of an insurer.                  [3]

     An insurer that operates under this regulatory capital framework would like to reduce
     its regulatory capital requirement by mitigating its credit risk exposure to its
     non-investment grade corporate bonds.

     (iii)    Explain how Credit Default Swaps (CDSs) can be used to achieve this
              insurer’s objective.                                                          [2]

     (iv)     List two other derivatives that could be used to achieve this objective.      [1]

     The insurer is particularly concerned with the credit risk relating to a single
     non-investment grade corporate bond it owns and wishes to purchase 2-year
     protection against default.

     The insurer’s risk team has calculated a conditional default probability of 4.5% p.a.
     and uses a recovery rate assumption of 50%. Risk-free interest rates are 2% p.a. with
     continuous compounding.

     (v)      Calculate the theoretical CDS spread. You should assume that defaults occur
              mid-way through the year and CDS payments are made annually at the end of
              each year.                                                                [6]
                                                                                 [Total 16]


                                   END OF PAPER




SP6 A2021–8



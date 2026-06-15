---
normalized_id: sp6-2024-september-question-paper-sp6-september-2024-exam-paper
exam_code: SP6
year: 2024
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Sep24/SP6_September 2024_Exam Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2024-september-question-paper-sp6-september-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                              19 September 2024 (am)


                  Subject SP6 – Financial Derivatives
                         Specialist Principles
                        Time allowed: Three hours and twenty minutes




            In addition to this paper you should have available the 2002 edition of
                 the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 S2024                                                 © Institute and Faculty of Actuaries
1     An investor is worried about the impact of deteriorating economic conditions on its
      portfolio of corporate bonds. The investor considers using single-name or index
      Credit Default Swaps (CDS) to provide some protection.

      (i)     Outline changes to the CDS market after the financial crisis in 2008.          [3]

      (ii)    Describe the cash flows involved with a single-name CDS.                       [3]

      (iii)   Compare the use of single-name and index CDSs for this investor.               [6]

      (iv)    State two standard portfolios used for index CDSs.                             [1]

      (v)     Describe factors that impact the recovery rate of an individual bond
              underlying a single-name CDS.                                                  [4]
                                                                                      [Total 17]


2     A hedge fund manager is expecting a large move in a stock price but does not know
      which direction the move may be in. To express their view, the hedge fund manager
      purchases a put option with a strike price of $95 for a premium of $3 and a call
      option with a strike price of $95 for a premium of $6, both with an expiration date
      of 3 months from today.

      (i)     Give the name of this option trading strategy.                                 [1]

      (ii)    Calculate, showing all workings, the net profit or loss of the option strategy if
              the underlying stock price is $160 after 3 months.                             [2]

      (iii)   Outline two possible explanations for why the call option premium is twice as
              high as the put option premium.                                            [4]

      (iv)    Propose an alternative option trading strategy to express the same view but
              with a lower initial premium.                                                [3]
                                                                                    [Total 10]




SP6 S2024–2
3     Following a recent improvement in the funding position of a UK-based pension
      scheme, the trustees and sponsoring employer are investigating the possibility of
      transferring the liabilities to an insurance company. The investigation and subsequent
      decision are expected to take 6 months to complete.

      To preserve the funding position, the sponsoring employer has asked the trustees to
      consider hedging the downside risk on the scheme’s equity portfolio. The equity
      portfolio is passively managed, benchmarked to the MSCI World Equity Index and
      has a current value of £200 million.

      The current MSCI World Equity Index level is 5,500. An exchange offers the
      following equity index options:

            MSCI World Equity Index options
            Contract value: £100 per index point
            Contract terms: 3 month, 6 month and 12 month expiry dates
            Contract range: Strikes at 50 index points intervals.

      (i)       Propose a suitable hedging portfolio for the pension scheme’s equity portfolio,
                using the options offered by the exchange and assuming the trustees can
                accept a £20 million loss.                                                  [3]

      (ii)      Discuss the risks that the trustees would be exposed to if they implemented
                this hedging strategy.                                                      [3]

      (iii)     Recommend, with reasons, an alternative strategy the trustees could
                implement to protect the funding position of the pension scheme from declines
                in equity markets during the 6 month period.                              [3]
                                                                                    [Total 9]




SP6 S2024–3
4     (i)     State the difference between American options and European options.                                     [1]

      (ii)    Explain why the finite difference method is a suitable approach for valuing
              American options.                                                           [2]

      An analyst is using the implicit finite difference method to value a 1 year American
      put option with a strike price of $80 on a non-divided paying stock, currently valued
      at $100, which has volatility of 25%. The risk-free rate is 5% p.a. continuously
      compounded.

      The analyst plans to model the stock price in increments of $10, from $0 to $200, and
      to assess the changes in the option price over five equal time periods.

      After approximating Δf/ΔS, Δf/Δt and 2f/ΔS2, the analyst has substituted these into the
      Black–Scholes partial differential equation that has yielded the following equation of
      value:

               ,               ,                         ,        ,                       ,        ,     ,
                                          + (r − q)jΔS                  + 𝜎 𝑗 ∆𝑆                             = 𝑟𝑓 ,
               ∆                                             ∆                                 ∆

      where j = 0, 1, …, 19 and i = 1, …, 5.

      The equation of value can be rearranged to express fi + 1, j in terms of fi, j−1, fij and fi, j + 1.

      (iii)   Write down the coefficients of fi, j−1, fij and fi, j + 1 in the rearranged equation.
                                                                                                                      [2]

      (iv)    Calculate the three coefficients when j = 3.                                                            [3]

      Using the above information, the analyst has derived the following matrix of option
      values.

                                                       1          0.8     0.6       0.4        0.2        0
                                             200     0.0          0.0     0.0       0.0        0.0      0.0
                                             190     0.0          0.0     0.0       0.0        0.0      0.0
                                             180     0.0          0.0     0.0       0.0        0.0      0.0
                                             170     0.0          0.0     0.0       0.0        0.0      0.0
                                             160     0.0          0.0     0.0       0.0        0.0      0.0
                                             150     0.1          0.0     0.0       0.0        0.0      0.0
                                             140     0.1          0.1     0.0       0.0        0.0      0.0
                                             130     0.2          0.1     0.1       0.0        0.0      0.0
                   Stock price – j × 10




                                             120     0.4          0.2     0.1       0.1        0.0      0.0
                                             110     0.7          0.5     0.3       0.1        0.0      0.0
                                             100     1.4          1.1     0.7       0.4        0.1      0.0
                                              90     2.8          2.3     1.8       1.1        0.5      0.0
                                              80     5.7          5.1     4.4       3.4        2.1      0.0
                                              70    11.1         10.8    10.4      10.1       10.0     10.0
                                              60    20.0         20.0    20.0      20.0       20.0     20.0
                                              50    30.0         30.0    30.0      30.0       30.0     30.0
                                              40    40.0         40.0    40.0      40.0       40.0     40.0
                                              30    50.0         50.0    50.0      50.0       50.0     50.0
                                              20    60.0         60.0    60.0      60.0       60.0     60.0
                                              10    70.0         70.0    70.0      70.0       70.0     70.0
                                               0    80.0         80.0    80.0      80.0       80.0     80.0
                                                                            Δt − i



SP6 S2024–4
      (v)     Explain why the payoff is projected to be $60 across all time periods when the
              stock price is $20, i.e. when j = 2.                                        [2]

      (vi)    State the value of the option, according to the model.                        [1]

      The analyst is considering valuing the option using Monte Carlo simulation.

      (vii)   Compare the finite difference method and Monte Carlo simulation approaches
              for the valuation of the American option.                                [3]
                                                                                [Total 14]


5     (i)     Derive an estimate of the volatility, σ, of a financial security, St, from a
              historical data set of n + 1 observations, assuming the distribution of stock
              prices is lognormal.                                                          [3]

      (ii)    Define, in your own words, the term ‘implied volatility’.                     [1]

      (iii)   Calculate, showing all workings, the implied volatility of a 2 year European
              call option with a strike price of $120 on a dividend paying stock valued at
              $10. The stock price is currently $100, the risk-free rate is 5% p.a.
              continuously compounded and the dividend yield is 3% p.a. continuously
              compounded.                                                                  [3]

      An analyst would like to estimate the value of a 6 month call option that is at the
      money on a technology stock, X, currently valued at $100. They have calculated the
      following historical and implied volatilities relating to the stock.

      Historical volatilities:

                                      5 years of data,     10 years of data,
                                     assessed monthly      assessed annually
                                            (%)                   (%)
               Stock X                       62                   n/a
               Tech stock index              43                    35

      Implied volatilities for put/call options on X:

                                  1 month      3 months     1 year
                                    (%)          (%)         (%)
                            150     43.3         44.5        46.9
                            125     43.4         46.2        47.5
                            100     44.2         47.5        48.6
                             75     45.1         48.0        49.7
                             50     47.2         48.4        50.1

      (iv)    Discuss how the information could be used by the analyst in their estimation.
                                                                                          [3]
                                                                                   [Total 10]




SP6 S2024–5
6     (i)     Explain, in your own words, the differences between an investor owning a
              receiver swaption and a payer swaption.                                  [3]

      An investor buys a payer European swaption that has an exercise date in 𝑇 years. The
      fixed rate is 𝐾 and the length of the swap is n years with payments at the end of the
      year.

      (ii)    Derive an equation for the value of this swap in terms of the forward swap
              rate, stating any assumptions made and defining any terms used.            [6]

      A bank is conducting a large review of its internal models for pricing and hedging
      swaptions.

      (iii)   Set out the important factors that the bank should consider in reviewing the
              suitability of these models.                                                 [6]
                                                                                    [Total 15]


7     (i)     Describe different ways in which basis risk can arise for an investor hedging
              using futures contracts.                                                     [4]

      (ii)    Explain how basis risk can be reduced in a commercial bank.                  [5]

      A platinum mining company would like to sell a commercial bank a large amount of
      platinum in 14 months for a fixed price.

      (iii)   Outline the issues the commercial bank should consider in setting a fixed price
              for the platinum (the issue of hedging does not need to be raised).         [3]

      (iv)    Comment on how the bank could hedge the risk of meeting this obligation for
              a fixed price using a derivatives strategy.                              [2]
                                                                                [Total 14]


8     A risk manager calculates a portfolio Value at Risk (VaR) using both a parametric
      method and a historical simulated method and finds different values.

      (i)     Describe the steps involved in calculating VaR using the parametric method.
                                                                                        [2]

      (ii)    Suggest why the two methods of calculating VaR may result in a different
              value.                                                                   [3]

      (iii)   State two weaknesses of VaR.                                                 [2]

      (iv)    Comment on the use of stress tests as an additional risk measure.           [4]
                                                                                   [Total 11]


                                  END OF PAPER



SP6 S2024–6



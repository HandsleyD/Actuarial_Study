---
normalized_id: sp6-2022-april-question-paper-sp6-april22-exam-clean-proof
exam_code: SP6
year: 2022
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Apr22/SP6_April22_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2022-april-question-paper-sp6-april22-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                              EXAMINATION

                                 28 April 2022 (am)


                  Subject SP6 - Financial Derivatives
                         Specialist Principles
                      Time allowed: Three hours and twenty minutes




         In addition to this paper you should have available the 2002 edition of the
                  Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 A2022                                                © Institute and Faculty of Actuaries
1    A trader in exotic derivatives working for an investment bank has sold a binary cash-
     or-nothing call option on stock S to an insurance company.

     (i)      (a)    State two examples of other exotic derivatives.

              (b)    Describe why each of these may be useful to an insurance company.
                                                                                            [3]

     (ii)     (a)    Suggest two possible reasons why some investment banks may engage
                     in exotic options business.

              (b)    Suggest two possible reasons why some investment banks may choose
                     not to do so.
                                                                                    [4]

     The trader observes the following market information in relation to derivatives on
     stock S.

                                               Delta              Gamma
              Binary cash-or-nothing
                                               1.7104             –0.0070
              call at strike K
              Call option at strike K          0.6248              0.0178
              Future                           1.0000              0.0000

     (iii)    Calculate, showing all workings, the number of futures and call options the
              trader would need to enter into in order to hedge their short position in the
              binary cash-or-nothing call option.                                           [3]

     (iv)     Comment on the hedge effectiveness using futures and call options to hedge
              this binary option, compared to using futures on stock S only.            [3]

     (v)      State the range of possible values for the delta and gamma of a binary cash-or-
              nothing call option.                                                        [2]

     Call options and futures on stock S are traded and cleared on an exchange, whereas
     the exotic binary option is traded Over-The-Counter (OTC) with bilateral clearing.
     The differences in collateral arrangements between these cause collateral
     inefficiencies for the investment bank.

     (vi)     Describe key differences in relation to collateral arrangements for derivatives
              that are exchange traded and cleared versus derivatives that are OTC traded
              with bilateral clearing.                                                      [5]

     (vii)    Suggest possible actions that the bank could take to reduce the impact of these
              collateral inefficiencies.                                                   [3]
                                                                                   [Total 23]




SP6 A2022–2
2    Consider a Credit Default Swap (CDS) with a term of 5 years, assuming a 1% p.a.
     risk-free rate and that defaults and payments only occur at the end of each year.
     Spread payments are only made if there are no defaults.

     Credit risk characteristics:

           recovery rate: 60%
           implied probability of default: 3%.

     (i)       Calculate, showing all workings, the CDS spread at which the CDS has zero
               value at outset.                                                         [4]

     Consider a 5-year first-to-default swap on a basket of 10 corporate issuers that have
     the same credit risk characteristics as shown above and assume that their credit risk is
     uncorrelated.

     (ii)      Calculate, showing all workings, the probability of the first-to-default CDS
               triggering over its lifetime.                                                [3]

     (iii)     Explain the impact of the corporate issuers having a higher credit risk
               correlation than assumed on the first-to-default swap valuation.                [2]
                                                                                         [Total 9]




SP6 A2022–3
3    In a developed country, all 10-year fixed interest government bonds are being issued
     with a negative bond yield.

     (i)      Describe the term ‘bond yield’.                                               [2]

     (ii)     Explain what it means to a bondholder for a bond yield to be negative.        [1]

     Additionally, in the country the interest rates are also negative at some durations.

     (iii)    Discuss the impact of negative interest rates on derivatives.                 [4]

     Negative interest rates and negative bond yields have caused problems with using
     Black’s model for valuing some interest rate derivatives. One solution proposed by an
     academic is to consider modelling forward prices ( F ) under a risk-neutral measure
     using

                                     dF  s ( F  s)dBt .

     Here, s and  s are fixed constant values and Bt is Brownian motion.

     (iv)     Derive the value of a vanilla call option with forward price F using this
              stochastic model. The model with s  0 can be used as a starting point.       [5]

     (v)      Explain why the model with s  0 cannot be used for modelling negative
              forward rates.                                                                [1]

     (vi)     Assess the suitability of using this model for valuing interest rate derivatives
              with negative forward rates.                                                   [4]

     In this country, some financial services firms choose NOT to model the possibility of
     negative interest rates.

     (vii)    Discuss the implications of NOT being able to model negative interest rates.
                                                                                          [3]
                                                                                 [Total 20]




SP6 A2022–4
4    (i)      Describe how a DB or DC pension scheme may use Value at Risk (VaR) to
              manage financial risk.                                                [4]

     (ii)     Describe some of the limitations that a pension scheme may face in using
              VaR to manage financial risk.                                                 [3]

     A defined benefit pension scheme has a foreign currency exposure. To manage the
     risk of currency fluctuations, it has a portfolio of options relating to the exchange rate
     between the local currency and the foreign currency. The current exchange rate is 3
     (that is, one unit of the local currency is equal to three units of the foreign currency).
     The current delta of the option portfolio is 1,350 and the daily return volatility of the
     exchange rate is 0.5%.

     Let the daily change in the value of the portfolio of the options be P , the daily
     change in the exchange rate be S and  be the delta of the portfolio. It is assumed
     that P  S and that the daily returns of the exchange rate have a normal
     distribution with mean 0.

     (iii)    Demonstrate that the 1-day 95% VaR of this portfolio is 33.308.               [4]

     (iv)     Select and then communicate a method that a defined benefit pension scheme
              might use for calculating VaR.                                            [2]
                                                                                 [Total 13]




SP6 A2022–5
5    (i)        Describe, in your own words, how the control variate technique can be used to
                improve the pricing of American options.                                  [3]

     A stock, S, is currently valued at 130. It has a dividend yield of 2% p.a. and volatility
     of 40% p.a. The risk-free rate is 3% p.a.

     A two-step binomial model has the following structure:

                              t=       0          0.5           1

                                                                 d
                                                    b
                                       a                         e
                                                    c
                                                                 f

     (ii)       Calculate, showing all workings, the value of a 12-month American put option
                on stock S with a strike price of 135, using the control variate technique and
                the node naming conventions given in the two-step binomial model.             [8]

     An investment bank trades a range of derivatives. It uses Monte Carlo simulation to
     value Asian options and binomial trees to value American options.

     (iii)      Explain why the investment bank may opt to use different approaches to value
                Asian and American options.                                               [3]

     (iv)       State an approach that could enable the investment bank to use Monte Carlo
                simulation to value American options.                                      [1]
                                                                                   [Total 15]


6    (i)        Describe how Black–Scholes pricing formulae for non-dividend paying stocks
                are adjusted to value currency options.                                 [2]

     A UK-based retailer is considering ordering Bluetooth headphones from a US-based
     manufacturer. The Finance Director of the retailer proposes using currency options to
     ensure that sales of the headphones generate a profit of at least £100,000.

     The Finance Director has asked you to prepare the profit projections for discussion at
     the next Board meeting. Their team send you the following data:

            The unit cost is $50.
            The order needs to be placed 6 months in advance of delivery and payment.

     Market data:

            USD/GBP spot rate: 0.65, i.e. 1 US Dollar = 0.65 GB Pounds.
            GBP risk-free interest rate: 2% p.a. at all durations.
            USD risk-free interest rate: 3% p.a. at all durations.
            Volatility of USD/GBP exchange rate: 20% p.a.



SP6 A2022–6
     The Sales Manager has also provided you with the following sales scenario estimates:

            If the retail price is £40, the retailer expects to sell 20,000 units.
            If the retail price is £35, the retailer expects to sell 70,000 units.

     You should assume that the profit is calculated as the gross profit less the cost of the
     options.

     (ii)       Demonstrate, showing all calculations, that the minimum profit can be
                achieved by purchasing call options at the following strike prices:

                (a)     USD/GBP 0.67 if headphones are sold at £40

                (b)     USD/GBP 0.62 if headphones are sold at £35.
                                                                                              [7]

     (iii)      Recommend, with reasons, whether the Finance Director should propose to
                order 20,000 or 70,000 units, assuming that the sales forecasts provided are
                correct.                                                                     [3]

     The Finance Director receives a research note that suggests that USD/GBP 0.70 is
     expected to be the maximum level that could be reached over the next 12 months and
     asks whether this research would have any impact on your recommendations.

     (iv)       Explain how a bull call spread could be used to alter the profit profile from the
                headphones sales.                                                              [2]

     (v)        Calculate, showing all workings, the revised option premiums for both
                scenarios if bull call spreads are implemented with the following strike prices:

                (a)     USD/GBP 0.67 and USD/GBP 0.70 if headphones are sold at £40

                (b)     USD/GBP 0.62 and USD/GBP 0.70 if headphones are sold at £35.
                                                                                              [3]

     (vi)       Comment on your recommendation given in part (iii), in light of your
                calculations in part (v).                                                 [3]
                                                                                   [Total 20]


                                       END OF PAPER




SP6 A2022–7



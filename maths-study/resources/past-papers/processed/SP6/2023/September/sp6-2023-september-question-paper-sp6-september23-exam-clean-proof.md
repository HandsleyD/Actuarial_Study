---
normalized_id: sp6-2023-september-question-paper-sp6-september23-exam-clean-proof
exam_code: SP6
year: 2023
sitting: September
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Sep23/SP6_September23_EXAM_Clean Proof.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2023-september-question-paper-sp6-september23-exam-clean-proof

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                               21 September 2023 (am)


                  Subject SP6 – Financial Derivatives
                         Specialist Principles
                        Time allowed: Three hours and twenty minutes




            In addition to this paper you should have available the 2002 edition of
                 the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 S2023                                                 © Institute and Faculty of Actuaries
1     (i)     Describe the use of forward contracts on foreign exchange by hedgers.         [2]

      A European company expects to receive $1,000,000 in 3 months’ time and decides to
      hedge the foreign currency risk inherent in this expected receipt using a
      3-month forward contract at a rate of 0.9767 EUR/USD (number of EUR per USD).

      (ii)    Calculate the payoff of this forward contract at maturity if the exchange rate is
              then equal to 0.9523 EUR/USD.                                                 [3]

      (iii)   Give two examples of basis risk that may occur for this company.              [2]

      (iv)    Compare the use of forward contracts with the use of currency options for
              hedging foreign exchange risk.                                             [4]
                                                                                  [Total 11]


2     A pension fund is currently hedging its inflation-linked pension payments using
      index-linked bonds.

      (i)     Outline three benefits of using inflation swaps instead of index-linked bonds.
                                                                                           [3]

      (ii)    Explain the cash flows involved for the pension fund when executing a
              20-year zero-coupon inflation swap to hedge its inflation exposure.           [3]

      (iii)   Write down, for a speculator and an arbitrageur, one example each of how
              inflation swaps can be used to achieve their objectives.                   [3]
                                                                                   [Total 9]


3     (i)     Describe the difference between equilibrium and no-arbitrage models for the
              short rate.                                                               [3]

      In Vasicek’s model for the short rate, the risk-neutral process for r is dr = a(b – r) dt
      + σ dz, where a, b and σ are nonnegative constants. Suppose that a = 0.1 and b = 0.03
      and σ = 0.01 in Vasicek’s model, with an initial value of the short rate r = 0.02.

      (ii)    State to which level the short rate mean reverts under this model.            [1]

      (iii)   Calculate, showing all workings, the price of a zero-coupon bond with a
              principal of $100 that matures in 10 years.                                   [5]

      (iv)    Comment on the economic rationale that the price of the zero-coupon bond
              would decrease when the value of a increases.                             [4]
                                                                                 [Total 13]




SP6 S2023–2
4     (i)     Describe why a binomial tree may be used to value an American put option.
                                                                                            [2]

      (ii)    Define, in your own words, a ‘warrant’.                                       [1]

      A company operates a small executive scheme consisting of put American warrants
      on a non-dividend paying stock. There is no expiration date for these warrants and
      there is a single fixed strike price K.

      (iii)   Comment on the risks to an investor of holding such an option.                [3]

      A banking actuary valuing one of these warrants notes that under the Black–Scholes
      model, the value of the warrant has no explicit time dependence.

      (iv)    Show that the Black–Scholes differential equation for one of these warrants
              simplifies to:

                                         1 2 2 d2 V  dV
                                           σ S 2 + rS – rV = 0,
                                         2     dS    dS

              where S is the underlying stock price, V is the value of the warrant, r is the
              interest rate and σ is the volatility of the underlying stock price.           [2]

      The simplified Black–Scholes equation given in part (iv) has a general solution of the
      form:
                                                             2
                                       V S = AS + BS – 2r⁄σ ,

      where A and B are constants.

      (v)     Show that A = 0 by considering the value of V(S) as S → ∞, or otherwise.      [3]

      The banking actuary assumes that there is an optimal stock price in future (S' < K), at
      which point the warrant will be exercised. It is assumed that S is currently greater than
      S'.

      (vi)    Show that V S' = K – S' by using a no arbitrage argument, or otherwise.       [3]

      (vii)   Derive an expression for V(S) in terms of K, r, σ and S.

              [Hint: V(S) is maximised when S = S' from part (vi) but there is no
              requirement to check that this is a maximum.]                                 [4]
                                                                                     [Total 18]




SP6 S2023–3
5     (i)     Describe, in your own words, how the Greeks of an option can be calculated
              using a Monte Carlo simulation.                                           [3]

      An asset with price St is assumed to follow a stochastic process in a risk-neutral world of:

                                         dSt = μSt dt + σSt dWt ,

      where μ and σ are constants and Wt is Brownian motion under the risk-neutral
      measure. Let ϵ be a random sample from a normal distribution with mean 0 and
      standard deviation 1 and let ∆t be a short time interval.

      (ii)    Determine an approximation for St + ∆t – St in terms of μ, σ, ∆t, St and ϵ, stating
              any approximations made.                                                         [4]

      (iii)   Describe the standard error of an estimated option value derived from Monte
              Carlo simulations.                                                        [2]

      An option with St as the underlying asset has an estimated value calculated from a
      Monte Carlo simulation with 4,000 trials. This estimated option value is set equal to
      the mean of the option values calculated from the 4,000 trials and is equal to 11.15.
      The standard deviation of the option values from the 4,000 trials is 5.99.

      (iv)    Calculate the 99% confidence interval for the option value.                      [2]

      (v)     Set out how the 99% confidence interval for the option value can be made
              smaller.                                                                   [5]
                                                                                  [Total 16]




SP6 S2023–4
6     (i)     Describe the payoffs of a floating lookback option.                              [2]

      Consider a simple portfolio, V, consisting of φ units of stock, S, and ψ units of cash
      bond, B, which accumulates at continuously compounding rate, r.

      The path of stock, S, over a single time period is given below:

                                                1.0905

                             1

                                                0.9170

      (ii)    Show that φ and ψ can be chosen so that V has a value of f if the stock price
              increases and g if the stock price decreases.                                 [3]

      (iii)   Calculate, using a two-branch binomial model, the value of a 2-month floating
              lookback call option on a non-dividend paying stock, S, which has an initial
              value of 100, stock price volatility of 30% p.a. and a risk-free rate of 3.0% p.a.
              continuously compounded.                                                       [4]

      (iv)    Comment on the factors that may limit the use of lookback options by pension
              schemes.                                                                  [2]
                                                                                 [Total 11]




SP6 S2023–5
7     (i)     Define, in your own words, arbitrage.                                           [1]

      (ii)    Explain, in your own words, the intrinsic value of an option.                   [2]

      An insurer invests in a diverse portfolio of bonds, equities and property. In addition,
      the insurer holds a portfolio of European call and put equity options.

      (iii)   Suggest reasons why the insurer may use equity options.                         [3]

      The insurer’s risk department is undertaking a sensitivity analysis on its investment
      portfolio. This involves calculating the instantaneous impact of changes in single
      variables on the value of the portfolio.

      In addition to the sensitivity analysis, the risk department undertakes scenario analysis
      that assesses the instantaneous impact of changes in multiple variables as well as their
      interactions on the portfolio value.

      (iv)    Explain how the value of the insurer’s equity call options should react to a
              sensitivity analysis on the risk-free interest rate.                         [1]

      The following model output is generated from the scenario analysis.

                                                 Scenario
      Stock price, St                            $110.50
      3-year risk-free rate                      5% p.a. continuously compounding
      3-year European call with strike of 115    $8.43

      (v)     Show that the model output is not arbitrage free by identifying an arbitrage
              opportunity.                                                                 [3]
                                                                                    [Total 10]


8     (i)     Describe, in your own words, a Credit Default Swap (CDS).                       [2]

      A large private wealth fund is considering investing in the bonds of an insurance
      company.

      (ii)    Explain how the private wealth fund could use a CDS to create a synthetic
              exposure that is similar to the purchase of bonds.                        [2]

      (iii)   Suggest reasons why a private wealth fund may choose to gain exposure to the
              insurance company using a CDS.                                            [2]

      (iv)    Contrast the risks to the CDS seller with those to the CDS buyer.               [3]

      (v)     Explain how International Swaps and Derivatives Association (ISDA)
              documentation could be used to mitigate some of these risks.            [3]
                                                                               [Total 12]


                                  END OF PAPER


SP6 S2023–6


---
normalized_id: sp6-2024-april-question-paper-sp6-april-2024-exam-paper
exam_code: SP6
year: 2024
sitting: April
document_type: question-paper
source_repo_path: resources/past-papers/raw/SP6/Apr24/SP6_April_2024_Exam_Paper.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2024-april-question-paper-sp6-april-2024-exam-paper

   INSTITUTE AND FACULTY OF ACTUARIES




                               EXAMINATION

                                   8 April 2024 (am)


                  Subject SP6 – Financial Derivatives
                         Specialist Principles
                        Time allowed: Three hours and twenty minutes




            In addition to this paper you should have available the 2002 edition of
                 the Formulae and Tables and your own electronic calculator.


If you encounter any issues during the examination please contact the Assessment Team on
T. 0044 (0) 1865 268 873.


SP6 A2024                                                 © Institute and Faculty of Actuaries
1    A callable bond is a bond with an embedded option for the issuer to buy back the
     bond at a specific time in the future at a predetermined price.

     (i)      Comment on why an issuer may issue bonds with embedded options.              [3]

     Consider a 1-year European call option on a 6.75-year bond with a face value of £100
     and a current cash price of £96, with a cash strike price of £105 and 3-month,
     6-month and 1-year continuously compounded risk-free interest rates all equal to 2%.
     The bond pays a coupon of 3% per year (with payments made semi-annually). The
     volatility for the forward bond price, F, which is assumed to be lognormally
     distributed, in 1 year is 8% p.a.

     (ii)     Show that the forward bond price F = £94.91.                                 [3]

     (iii)    Calculate the value of this European call bond option using Black’s model. [5]

     (iv)     Comment on the assumptions underlying Black’s model.                        [3]
                                                                                   [Total 14]


2    An investor previously exempt from central clearing will in due course have to clear
     its over-the-counter derivatives using a Central Counter Party (CCP) clearing house.

     (i)      Describe the operation of a CCP.                                             [4]

     (ii)     Outline the practical considerations arising from the requirement to clear. [5]
                                                                                     [Total 9]




SP6 A2024–2
3    (i)        Outline why calculating vega using the Black–Scholes model may be
                inconsistent with this model.                                                  [2]

     (ii)       State, in your own words, how the vega of a long vanilla European put option
                varies with respect to the underlying asset price.                         [2]

     (iii)      Describe how the vega of a long vanilla European put option varies with
                respect to the time to maturity.                                               [2]

     A company has a portfolio of options on the same underlying stock but with different
     times to expiry. A summary is provided in the table below:

                                                                 Time to     Number of long
                              Delta of         Vega of
      Option type                                               expiry of     options in the
                              option           option
                                                                 option         portfolio
             Call              0.62                 0.45        6 months          2,100
             Put              –0.35                 0.55        3 months          3,200
             Put              –0.41                 1.24          1 year            800
             Call              0.83                 0.97          1 year          3,250

     (iv)       Calculate the delta and vega of this portfolio.                                [2]

     The board of the company is concerned about the levels of vega and delta within the
     portfolio. The board is considering using the following option for hedging:

                                         Delta of          Vega of     Time to expiry
                    Option type
                                         option            option        of option
                       Call               0.44              0.41         6 months

     (v)        Calculate the investment in the above option and in the underlying asset to
                make the company’s portfolio both delta and vega neutral.                   [3]

     An investment advisor to the company has suggested that using the standard
     definition of vega for calculating the overall vega of the portfolio in part (iv) is not
     appropriate. Instead, they have recommended using a scaled version of an option’s
     vega by dividing the standard vega of an option by the square root of the option’s time
     to expiry.

     (vi)       Comment on the investment advisor’s suggestion to use this scaled vega for
                calculating the vega of the company’s portfolio.                           [3]
                                                                                   [Total 14]




SP6 A2024–3
4    (i)      Explain, in your own words and without using any mathematical symbols,
              Ito’s lemma.                                                           [2]

     A financial modeller is currently using geometric Brownian motion in a
     Black–Scholes framework to model a non-dividend paying asset with fixed
     parameters – μ and σ, and price St at time t, satisfying:

                                        dSt = μSt dt + σSt dWt

     where Wt is a Brownian motion process under the real probability measure P.

     A banking actuary working with the financial modeller has suggested modifying this
     stochastic differential equation to allow for discrete jumps in the asset price over the
     time period dt.

     (ii)     Comment on the banking actuary’s suggestion.                                      [3]

     The banking actuary’s modification is to include an additional term in the stochastic
     differential equation:

                                    dSt = μSt dt + σSt dWt + Jump

     Here, Jump = St (Jt – 1)dNt , where Jt is the value of the jump at time t and Nt is the
     probability of a jump at time t. Explicitly, dNt = 1 with probability γdt and dNt = 0
     with probability 1 – γdt, and γ is a positive non-zero-constant. It is assumed that Jt , Nt
     and Wt are independent.

     (iii)    Describe what would happen to the asset price (dSt ) over a period dt assuming
              there is a single jump at time t (dNt = 1 and Jt = 0.8.                     [3]

     (iv)     Show that E Jt – 1 dNt = k γdt, where E is the expectation and
              k = E Jt – 1 .                                                                    [2]

     (v)      Determine whether the stochastic differential equation for dSt , allowing for
              jumps, has the same drift as the original geometric Brownian motion process
              for dSt (dSt = μSt dt + σSt dWt ).                                            [2]

     In order to apply Ito’s lemma to a function g(St , t) (where St satisfies the stochastic
     differential with jumps), an additional term is added to the standard Ito’s lemma:

                                        g St Jt ,t – g St ,t dNt

     (vi)     Show that d log St = μ – 0.5 σ2 dt + σ dWt + log (Jt ) dNt .                   [4]
                                                                                      [Total 16]




SP6 A2024–4
5    (i)      Define, in your own words, a ‘numeraire’.                                     [1]

     (ii)     Write down an example of a numeraire.                                         [1]

     (iii)    Define, in your own words, a ‘martingale’.                                    [2]

     (iv)     Describe, in your own words, the relationship between tradeable assets and
              martingales.                                                               [2]

     St is a tradeable asset such that St = exp (σWt + r – 0.5σ2 t), with Wt the Brownian
     motion under the risk-neutral measure, Q, and r, the risk-free rate. Further,
     Bt = exp(rt) is the cash bond. Using Ito’s lemma:

                        dZt = Zt (wσdWt + wr – r – 0.5wσ2 dt + 0.5(wσ)2 dt)

     where Zt is the discounted value of Yt = Swt .

     (v)      Determine for which values of w the process Yt is tradeable, stating any
              assumptions made.                                                             [3]

     Consider an option with underlying asset price St .

     (vi)     Comment on the relationship between the market price of risk for the option
              and the market price of risk for the underlying asset in a Black–Scholes
              framework.                                                                  [2]
                                                                                   [Total 11]


6    (i)      Explain how inflation swaps can be used to hedge a pension scheme’s
              inflation-linked liabilities.                                                 [2]

     (ii)     Outline the risks that a pension scheme would be exposed to if it did use
              inflation swaps to hedge the scheme’s inflation risk.                         [3]

     A final salary pension scheme offers its members pension payments in euros. The
     pension payments are increased annually by national average wage inflation, capped
     at 5%.

     One year ago, the trustees of the pension scheme implemented inflation hedging using
     Eurozone Harmonised Index of Consumer Prices (HICP) inflation swaps.

     Recent geopolitical tensions have resulted in significant increases in global inflation
     rates. The national average wage inflation is currently 8% p.a., and 10-year HICP
     inflation expectations have also increased to 6% p.a.

     (iii)    Discuss the impact of the increased inflationary environment on the pension
              scheme’s funding position.                                                  [5]
                                                                                   [Total 10]




SP6 A2024–5
7    (i)      Describe a Collateralised Debt Obligation (CDO).                            [2]

     (ii)     Explain how CDOs restructure credit risk.                                   [3]

     (iii)    Contrast cash CDOs and synthetic CDOs.                                      [2]

     A 5-year synthetic CDO with principal of $100 million is held within a Special
     Purpose Vehicle (SPV) and structured as follows:

                    Tranche                Principal              Spread
              (ranked by seniority)          ($m)                  (p.a.)
                     Senior                   40              150 basis points
                   Mezzanine                  50              350 basis points
                     Equity                   10              750 basis points

     Payments are made to investors on an annual basis, calculated as the remaining
     principal at the end of each 12-month period multiplied by the agreed return. The
     equity and mezzanine tranches only are required to provide collateral equal to the
     value of their exposure. The collateral is invested by the SPV into high-quality
     government bonds and attracts interest, paid monthly, at the Secured Overnight
     Financing Rate (SOFR).

     (iv)     Determine the SPV cashflows at inception.                                   [1]

     The CDO suffers losses of $12 million after 2.5 years.

     (v)      Determine the SPV cashflows at this point.                                  [1]

     No further losses are incurred during the remainder of the life of the SPV. SOFR has
     been annually compounded at 3% p.a.

     (vi)     Calculate the total amount of return paid to each tranche of the CDO over the
              5-year period.                                                              [4]

     (vii)    Comment on the effectiveness of the collateral arrangement.                [2]
                                                                                  [Total 15]




SP6 A2024–6
8    (i)      Define, in your own words, ‘systematic risk’ and ‘non-systematic risk’.      [2]

     A vehicle manufacturer has been producing and selling a range of battery-powered
     electric vehicles for the past 5 years.

     Preliminary modelling of the battery technology indicated that the average battery life
     should be in excess of 12 years. As part of its marketing strategy, the manufacturer
     offers a 10-year guarantee on the life of each car’s batteries. The anticipated cost of
     the guarantee is included in the price of each vehicle. The strategy has been very
     successful, and the guarantee is now considered an integral part of the manufacturer’s
     offer.

     (ii)     Explain and give two examples of the systematic risks to the manufacturer
              arising from the guarantee.                                               [3]

     Recent projections suggest that this area of the manufacturer’s business will grow
     significantly.

     The finance director has recently become concerned about the risks arising from the
     issuance of the guarantees and has asked the risk department to investigate different
     ways of reducing this risk.

     To assist with the analysis, the manufacturer has some internal data as well as access
     to an industry-wide database that can be used to create a reference index for car
     battery life.

     (iii)    Outline how a principal-at-risk bond could be used to transfer the systematic
              risk.                                                                        [4]

     (iv)     Suggest other ways the manufacturer could address the systematic risk of the
              guarantee.                                                                 [2]
                                                                                  [Total 11]


                                  END OF PAPER




SP6 A2024–7



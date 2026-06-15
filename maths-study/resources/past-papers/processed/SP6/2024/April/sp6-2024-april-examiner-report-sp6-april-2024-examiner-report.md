---
normalized_id: sp6-2024-april-examiner-report-sp6-april-2024-examiner-report
exam_code: SP6
year: 2024
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/SP6/Apr24/SP6_April 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2024-april-examiner-report-sp6-april-2024-examiner-report

EXAMINERS’ REPORT
SP6 - Financial Derivatives
Specialist Principle




                              April 2024
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates, both
those who are sitting the examination for the first time and using past papers as a revision aid and
also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The Examiners
have access to the Core Reading, which is designed to interpret the syllabus, and will generally
base questions around it but are not required to examine the content of Core Reading specifically
or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in this
report; other valid approaches are given appropriate credit. For essay-style questions, particularly
the open-ended questions in the later subjects, the report may contain more points than the
Examiners will expect from a solution that scores full marks.

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge and
understanding of the topics and therefore candidates should not be overly dependent on open book
materials. In our experience, candidates that spend too long researching answers in their materials
will not be successful either because of time management issues or because they do not properly
answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be exercised
in doing so because each exam question is unique. As with all professional examinations, it is
insufficient to repeat points of principle, formula or other text book works. The examinations are
designed to test “higher order” thinking including candidates’ ability to apply their knowledge to
the facts presented in detail, synthesise and analyse their findings, and present conclusions or
advice. Successful candidates concentrate on answering the questions asked rather than repeating
their knowledge without application.


The report is written based on the legislative and regulatory context pertaining to the date that the
examination was set. Candidates should take into account the possibility that circumstances may
have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
June 2024




SP6 A2024                                                                © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


   A. General comments on the aims of this subject and how it is marked

   The aim of Financial Derivatives Principles (SP6) is to develop a candidate’s ability to
   understand different types of financial derivatives and their uses, the markets in which they are
   traded, methods of valuation of financial derivatives, and the assessment and management of
   risks associated with a portfolio of derivatives. It builds on material covered in earlier
   subjects, particularly Loss Reserving and Financial Engineering (CM2).

   Candidates are reminded to ensure that their answers are sufficiently detailed to demonstrate
   their understanding, as well as to make sure that more obvious points are still made to be
   awarded full marks. The model solutions are intended to reflect the level of detail that a well-
   prepared candidate might be able to produce. For many questions there are more marks
   available than the question requires to achieve full marks. This reflects that the examiners will
   give credit for valid alternative solutions, particularly in questions focussed on higher level
   skills.

   Candidates who give well-reasoned points, not in the marking schedule, are awarded marks
   for doing so.


   B. Comments on candidate performance in this diet of the examination.

   Overall, this paper was very well attempted by most candidates who were able to make a good
   attempt at most questions. In general, candidates demonstrated good knowledge of the core
   reading material and its application to a range of situations.

   To achieve a good pass mark, candidates must not only state points of principle and make a
   basic analysis. Candidates are also required to synthesise their application into advice which
   considers best options, pros and cons, and otherwise demonstrate the higher order thinking
   skills as required by the questions.

   Questions 1, 2, 3, 5, 6 and 8 were well answered by most candidates. Questions 4 and 7
   proved to be the most challenging with only a select number of candidates scoring highly in
   these questions. Further comment on the individual questions is provided below.



   C. Pass Mark

   The Pass Mark for this exam was 60.
   22 presented themselves and 17 passed.




SP6 A2024                                                               © Institute and Faculty of Actuaries
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


Solutions for Subject SP6 – April 2024

 Q1
 (i)
 An issuer might issue bonds with embedded options:                                                             [1]
 To make them more attractive to either the issuer or the bond holder                                           [1]
 To lower the cost of issuing the bond by giving the bond holder options                       [1]
 To increase flexibility to refinance by giving the issuer options                             [1]
 Because it might have a view on the relative value of the embedded option being               [1]
 priced
 Because it might otherwise not be able to borrow at the same interest cost                    [1]
 To increase yield for investors (who appreciate yield) in return for options to the issuer    [1]
                                                                    [Marks available 7, maximum 3]

 (ii)
 FB = (B0 - I) / P(0,T)
 B0 = 96
                                                                                                                [1]
 I = 1.5 exp(-0.25 * 0.02) + 1.5 exp(-0.75 * 0.02)
 I = 2.9702                                                                                                     [1]
 P(0,T) = exp(-0.02)                                                                                            [1]
 P(0,T) = 0.980199
 FB = 94.91
                                                                           [Marks available 3, maximum 3]

 (iii)
 C = P(0,T)[FBN(d1) - K*N(d2)]
 d1 = (ln(FB/K)+sigmaB^2/2) / (sigmaB*sqrt(T))
 = (ln(94.91/105)+0.08^2/2) / (0.08)
 = -1.223                                                                                                       [1]

 N(d1) = 0.110664                                                                                               [½]
 d2 = d1 - sigmaB*sqrt(T)
 = -1.223 - 0.08
 = -1.303
                                                                                                                 [1]
 N(d2) = 0.096287                                                                                               [½]
 C = exp(-0.02)[94.91*0.110664-105*0.096287]
 C = 0.38515                                                                                                    [1]
 The price of the option is €0.39                                                                               [1]
                                                                           [Marks available 5, maximum 5]

SP6 A2024                                                                © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 (iv)
 The assumptions underlying Black’s model
 Are that bond prices are lognormally distributed                                                [½]
 The expected value of the underlying is assumed to be its forward price                         [½]
 Discounting and the bond prices are independent                                                 [½]
 Constant volatility                                                                             [½]
 Constant risk-free rate                                                                         [½]
 That volatility is observable as an input, in reality this is an output of observed option
 prices                                                                                          [½]
 These assumptions may be viewed as unrealistic to real market dynamics                           [1]
 and therefore a model using the rate curve might be more appropriate                             [1]
                                                                      [Marks available 5, maximum 3]

                                                                                                     [Total 14]

 Commentary:
 This question was well answered with most candidates scoring high marks in each part.



 Q2
 (i)
 Central counterparties are:
 clearing houses for OTC derivatives                                                         [½]
 they have initial and variation margin and rules around these                                [1]
 there is a default fund                                                                     [½]
 OTC derivatives can still be agreed bilaterally and then presented to the CCP                [1]
 If the CCP accepts the trade it becomes the counterparty to each party                       [1]
 Credit risk is in relation to the CCP                                                        [1]
 Market participants not a member, need to arrange clearing through a member                 [½]
 The use of CCPs is strongly encouraged by regulation                                        [½]
                                                                  [Marks available 6, maximum 4]

 (ii)
 Perhaps (more) initial margin would be required                                                                [1]
 Which might introduce a cash drag                                                                             [½]
 Or less flexible variation margin arrangements would apply                                                    [½]
 such as prescribed cash and non-cash collateral                                                               [½]
 with applicable haircuts                                                                                      [½]
 Operational clearing arrangements need to be put in place                                                      [1]
 Increased reporting requirements are likely                                                                   [½]
 Costs might change/go up, new costs for clearing introduced                                                    [1]
 Cash held at the exchange might not get much or any interest paid on it                                       [½]
 Administration requirements might change                                                                      [½]


SP6 A2024                                                               © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Valuation of derivatives will most likely be done by the exchange                          [½]
 The investor might lose confidentiality of its trades                                      [½]
 Liquidity of the positions might change, perhaps improve                                   [½]
 Counterparty credit risk will change, likely improve                                       [½]
 The ability to close out early will likely improve                                         [½]
                                                                 [Marks available 9, maximum 5]

                                                                                                      [Total 9]

 Commentary:
 This question was well answered with most candidates scoring high marks in each part and it
 was the best answered question on the paper.


 Q3
 (i)
 One of the assumptions underlying the Black-Scholes model is that volatility is              [1]
 constant.
 Theoretically it then does not make sense to explicitly calculate vega under this            [1]
 model as it is a fixed parameter.
                                                                   [Marks available 2, maximum 2]

 (ii)
 Vega has a positive value.                                                                     [½]
 It has a maximum value at the strike price.                                                    [½]
 When the underlying asset price is significantly higher or lower than the strike price
 then vega is close to zero.                                                                    [½]
 As the underlying asset price gets closer to the strike price then vega rises.                 [½]
                                                                     [Marks available 4, maximum 2]

 (iii)
 Vega decreases as the time to maturity decreases.                                              [1]
 This is due to the time value being a smaller proportion of the option price as the time      [½]
 to maturity decreases.
 That is, there is less uncertainty about how the underlying asset price will change as a      [½]
 result of the volatility.
                                                                    [Marks available 2, maximum 2]

 (iv)
 The delta (vega) of the portfolio is the weighted sum of the deltas (vegas) weighted
 by the size of the long position.

 Delta of the portfolio = 0.62 × 2,100 − 0.35 × 3,200 − 0.41 × 800 +
 0.83 × 3,250 = 2,552 .                                                                                        [1]


SP6 A2024                                                               © Institute and Faculty of Actuaries
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Vega of the portfolio = 0.45 × 2,100 + 0.55 × 3,200 + 1.24 × 800 +
 0.97 × 3,250 = 6,850 .                                                                                         [1]

                                                                           [Marks available 2, maximum 2]

 (v)
                                                                                         6,850
 The vega of the hedging option is 0.41 so the number of options required is: 0.41 =

 16,706(𝑜𝑟 16,707 𝑢𝑠𝑖𝑛𝑔 𝑚𝑜𝑟𝑒 𝑑𝑒𝑐𝑖𝑚𝑎𝑙 𝑝𝑙𝑎𝑐𝑒𝑠 𝑖𝑛 (𝑖𝑣)).                                                           [1]
 As the vega of the portfolio is positive 16,706 options will need to be shorted.                               [½]
 These additional 16,706 options in the portfolio creates a delta for the vega neutral
 portfolio of 2,552 − 16,706 × 0.44 = −4,799.
                                                                                                                [1]
 In order to make the vega neutral portfolio delta neutral a long position in the
 underlying stock of −4,799 is needed.                                                                          [½]

                                                                           [Marks available 3, maximum 3]

 (vi)
 Empirical evidence suggests there is a term structure to the implied volatility of stock
 options.
                                                                                                                [½]
 This means that the underlying implied volatility will be different for options of
 different maturities.                                                                          [½]
 As the original unhedged portfolio has options with different maturities then the
 implied volatility will be different for each maturity in this portfolio.                      [½]
 The aim of managing implied volatility risk by making the portfolio vega neutral is
 that the portfolio is neutral to small changes in implied volatility.                          [½]
 The main problem with this approach is that due to the implied volatility term                  [1]
 structure the implied volatility will not move by the same amount for the options in
 the portfolio due to the different times to expiry.
 The investment advisor’s suggestion appears to be trying to take account of this term           [1]
 structure in the vega.
 By allowing for this term structure in the calculations, it may enable a better estimate       [½]
 of the portfolio’s vega
 and hence the portfolio risk to implied volatility will be reduced further.                    [½]
                                                                     [Marks available 5, maximum 3]

                                                                                                      [Total 14]




SP6 A2024                                                                © Institute and Faculty of Actuaries
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report



 Commentary:
 Candidates were able to attempt all parts of this question and generally scored well over half
 marks. The general theme of this question was around understanding volatility of derivatives
 (and vega) within the Black-Scholes model. Candidates should be familiar with the behaviour of
 the Greeks for simple options. Some candidates struggled with the behaviour of vega in parts (ii)
 and (iii). Part (iv) was difficult for most candidates with few able to generate a sufficient range
 of responses. The key part here was to think about how the term structure of volatility impacts a
 portfolio of options in different ways.


 Q4
 (i)
 Ito’s lemma is a theorem in stochastic calculus.                                             [½]
 It can be considered as the stochastic calculus version of the chain rule from standard
 differential calculus.                                                                       [½]
 It enables time-dependent functions of stochastic processes to be differentiated.             [1]
 It is used in the derivation of the Black-Scholes equation and throughout quantitative
 finance.                                                                                     [½]
                                                                  [Marks available 2½, maximum 2]

 (ii)
 One of the assumptions under the Black-Scholes model is that the underlying asset price is
 continuous.                                                                                                    [½]
 In reality, this is not the case.                                                                              [½]
 Empirical evidence suggests that there are discontinuities, or jumps, in asset prices.                         [½]
 These jumps are often downwards, for example during market crashes.                                            [½]
 They can also occur when significant new information becomes available in a market relating
 to the asset.                                                                                                  [½]
 Under geometric Brownian motion where all of the asset price paths are continuous and
 lognormal these jumps are not captured.                                                             [½]
 This could because the jumps are too large,                                                         [½]
 … or occur too often to be captured in a lognormal model.                                           [½]
 In addition, these jumps may be unhedgeable with continuous hedging.                                [½]
 For example, it is very difficult to delta hedge during a market crash.                             [½]
 As a result, the colleague is suggesting that these jumps are captured in a new model.              [½]
                                                                         [Marks available 5½, maximum 3]

 (iii)
 Using the stochastic differential equation given in the question.
 The first two terms are due to the geometric Brownian motion and are standard.                                 [½]
 The first term represents the drift of the asset price and the second term the volatility.                     [½]
 The final term represents the jump.                                                                            [½]
 In this case there is a jump as 𝑑𝑁𝑡 = 1, and                                                                   [½]
 the size of it is: 𝑆𝑡 (0.8 − 1) × 1 = −0.2𝑆𝑡 .                                                                 [½]
 This represents a decrease to the asset price of twenty percent as a result of the jump.                       [½]

SP6 A2024                                                                © Institute and Faculty of Actuaries
                  SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Overall, the asset price would have continuously evolved under geometric Brownian           [1]
 motion but there is now an extra decrease of twenty percent of the asset price due to
 the jump.
                                                                  [Marks available 4, maximum 3]

 (iv)
 As 𝐽𝑡 and 𝑁𝑡 are independent: 𝐸[(𝐽𝑡 − 1)𝑑𝑁𝑡 ] = 𝐸(𝐽𝑡 − 1) × 𝐸(𝑑𝑁𝑡 ).                                                 [½]
 From the definition of 𝑑𝑁𝑡 : 𝐸(𝑑𝑁𝑡 ) = 1 × 𝛾𝑑𝑡 + 0 × (1 − 𝛾𝑑𝑡) = 𝛾𝑑𝑡.                                                [1]
 Using the definition of k as given I the question: 𝐸[(𝐽𝑡 − 1)𝑑𝑁𝑡 ] = 𝑘 𝛾𝑑𝑡.                                          [½]
                                                                                   [Marks available 2, maximum 2]

 (v)
 The drift in the original process is 𝜇.                                                                              [½]
                                                                                         𝑑𝑆                           [1]
 In the new process over an infinitesimal interval dt the mean change in 𝑆 𝑡 due to
                                                                                           𝑡

 jumps only is 𝑘 𝛾𝑑𝑡, as calculated in part (iv).
 This is therefore an additional component to the drift of the process and so the new         [½]
 process has a different drift to the original geometric Brownian motion.
 The exception is if k=0, and the drift would be the same.                                     [1]
                                                                   [Marks available 3, maximum 2]

 (vi)
 Applying Ito’s lemma as described in the text before the question to the function
 𝑔(𝑆𝑡 , 𝑡) = log(𝑆𝑡 ).                                                                                                [½]
                  𝜕𝑔       𝜕𝑔                𝜕2𝑔              𝜕𝑔
 𝑑𝑔(𝑆𝑡 , 𝑡) = (      + 𝜇𝑆𝑡     + 0.5 𝜎 2 𝑆𝑡2     2 ) 𝑑𝑡 + 𝜎𝑆𝑡     𝑑𝑊𝑡 + [𝑔(𝑆𝑡 + 𝐽𝑡 , 𝑡) − 𝑔(𝑆𝑡 , 𝑡)]𝑑𝑁𝑡
                  𝜕𝑡       𝜕𝑆𝑡               𝜕𝑆𝑡              𝜕𝑆𝑡                                                     [½]
 𝜕𝑔         𝜕𝑔      1       𝜕2𝑔        1                                 1[½] with [½] marks for each derivative
    = 0 , 𝜕𝑆 = 𝑆 and 𝜕𝑆 2 = − 𝑆2 .
 𝜕𝑡           𝑡      𝑡         𝑡        𝑡

                                                             𝑆𝐽                                                       [½]
 𝑔(𝑆𝑡 𝐽𝑡 , 𝑡) − 𝑔(𝑆𝑡 , 𝑡) = log(𝑆𝑡 𝐽𝑡 ) − log ( 𝑆𝑡 ) = log ( 𝑆𝑡 𝑡 ) = log (𝐽𝑡 ).
                                                               𝑡

                           1                   1                1                                                     [½]
 𝑑 log(𝑆𝑡 ) = (0 + 𝜇𝑆𝑡 𝑆 + 0.5 𝜎 2 𝑆𝑡2 (− 𝑆 2 )) 𝑑𝑡 + 𝜎𝑆𝑡 𝑆 𝑑𝑊𝑡 + log (𝐽𝑡 ) 𝑑𝑁𝑡 .
                           𝑡                    𝑡                  𝑡


 𝑑 log(𝑆𝑡 ) = (𝜇 − 0.5 𝜎 2 )𝑑𝑡 + 𝜎 𝑑𝑊𝑡 + log (𝐽𝑡 ) 𝑑𝑁𝑡 .                                                              [½]
                                                                                   [Marks available 4, maximum 4]

                                                                                                            [Total 16]




SP6 A2024                                                                      © Institute and Faculty of Actuaries
                SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report



Commentary:
The ability to describe technical concepts in plain language without using formulas is important
and demonstrates a good understanding of that concept. Candidates did struggle with part (i)
and it may be useful for future candidates to not only be able to derive formulas in their revision
but to think about what those formulas mean.

Around half the candidates did not attempt part (vi) but those who did scored well. They realised
this was essentially an Ito’s lemma question and proceeded accordingly. The key to these
questions is spending a small amount of time reading them to determine the underlying area of
syllabus as often they are not as difficult as they seem.

The rest of the parts had good attempts and candidates were able to use their knowledge of
probability in answering parts (iii) and (iv).




 Q5
 (i)
 A numeraire is a security                                                                             [½]
 relative to which the worth of other securities can be assessed.                                      [½]
                                                                            [Marks available 1, maximum 1]


 (ii)
 A common example is a cash bond.                                                                      [1]
                                                                            [Marks available 1, maximum 1]

 (iii)
 A martingale is a process such that the expected future value                                         [1]
 conditional on the past is its current value.                                                         [1]
                                                                            [Marks available 2, maximum 2]

 (iv)
 Consider a numeraire 𝐵𝑡 , and a tradeable asset 𝑆𝑡 .                                                            [½]
 Let Q be a probability measure for which 𝐵𝑡−1 𝑆𝑡 (the discounted asset) is a                                    [½]
 martingale.
 A stochastic process 𝑉𝑡 represents a tradable asset if and only if its discounted value                         [1]
 𝐵𝑡−1 𝑉𝑡    is a Q-martingale.
                                                                            [Marks available 2, maximum 2]




SP6 A2024                                                                 © Institute and Faculty of Actuaries
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 (v)
 For this to be a Q martingale it is required that the process for 𝑍𝑡 is driftless.                             [½]
 As a result the coefficient of the dt term is required to be 0.                                                [½]
 (𝑤𝑟 − 𝑟 − 0.5𝑤𝜎 2 ) + 0.5(𝑤𝜎)2 = 0 , this is a quadratic in w:                                                 [½]
 𝜎 2 𝑤 2 + (2𝑟 − 𝜎 2 )𝑤 − 2𝑟 = 0 .
 This can be solved in the usual way using the quadratic formula, but it can also be                            [½]
 noted that w=1 has to be a solution by the definition of 𝑆𝑡 . This is readily checked.
 Factoring out this root gives: (𝑤 − 1)(𝜎 2 𝑤 + 2𝑟) = 0.                                                        [½]
                                         2𝑟                                                                     [½]
 This gives the second root: 𝑤 = − 𝜎2 .

 It should be noted that this assumes that 𝜎 ≠ 0, which is reasonable as if this is not     [½]
 true then the asset price would be purely deterministic.
                                                                [Marks available 3½, maximum 3]

 (vi)
 In the Black-Scholes framework the option can be hedged continuously by a
 combination of the underlying asset and cash/bond, self-financing and replicating
 portfolio.                                                                                      [½]
 As a result, the option is essentially equivalent to this portfolio.                            [½]
 As the market price of risk for the cash/bond is zero then                                      [½]
 the market price of risk for the option is therefore equal to the market price of the
 underlying asset.                                                                               [½]
 Alternative answers: using a no-arbitrage argument or that all tradeable assets have
 the same market price of risk were awarded full marks.
                                                                      [Marks available 2, maximum 2]

                                                                                                      [Total 11]

 Commentary:
 The first four parts of this question were well answered by nearly all candidates. Parts (v) and
 (vi) generally only scored one mark each. Most candidates did not attempt part (v), those who
 did scored highly. This part was just looking for the definition of a martingale and applying this
 to the coefficient of the dt term.

 Part (vi) required candidates to think more broadly about different areas of the course. This is
 an important skill to have in SP6, in being able to think about how different areas of the course
 link together.




SP6 A2024                                                                © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Q6
 (i)
 Inflation swaps enable the pension scheme to swap fixed cashflows for inflation
 linked cashflows.                                                                              [½]
 The pension scheme can therefore change the expected income from a portfolio of
 fixed income bonds (or other assets) into cashflows which will be linked to the rate of        [½]
 inflation underlying the swap.
 The trustees can structure the inflation swaps to provide a good match for the pension
 scheme in terms of duration and sensitivity to inflation.                                      [½]
 Assuming appropriate structuring, changes in the value of the pension scheme’s
 liabilities due to changes in historical or expected inflation will be offset by changes
 in the value of the value of the inflation swaps, creating a hedge against inflation.           [1]
                                                                    [Marks available 2½, maximum 2]

 (ii)
 Basis risk                                                                                   [½]
 Different inflation measures (eg. national average wages vs HICP) will not change
 exactly in line. This is likely to create some basis risk.                                   [½]
 The timing of inflationary increases may also create some small basis risk.                  [½]
 Caps and floors may also create some basis risk.                                             [½]
 Counterparty risk                                                                            [½]
 The pension scheme will be entering into derivative contracts which could create
 counterparty risk.                                                                           [½]
 This may be mitigated through collateralisation and central clearing.                        [½]
 Model risk                                                                                   [½]
 The structuring of the inflation swap portfolio will be based on modelling of the
 inflation sensitivity of the pension scheme liabilities.                                     [½]
 There may also be errors in the data or calculations.                                        [½]
 Operational risk                                                                             [½]
 The pension scheme may require additional expertise to implement the inflation
 hedging.                                                                                     [½]
 Liquidity risks                                                                              [½]
 Collateralisation/central clearing may create liquidity needs which need to be
 managed.                                                                                     [½]
                                                                   [Marks available 7, maximum 3]

 (iii)
 Liabilities
 The pension scheme liabilities will have increased by due to the increases in the wage
 inflation.                                                                                                     [1]
 The pension payments for the current year will have increased by 5%.                                          [½]
 The value of the future liabilities will have increased.                                                      [½]
 although the % increase will depend on the assumptions that the actuary makes about
 the future wage inflation                                                                                     [½]


SP6 A2024                                                               © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 this could be linked in some way to HICP expectations, eg HICP +2%, or it could be
 based on another method.                                                                       [½]
 however, given 10 year HICP inflation expectations are 6%, it is reasonable to
 assume that the future liabilities have been assumed to increase by 5% p.a. for the
 next 10 years a least.                                                                         [½]
 The assumed impact of inflation beyond 10 years will be dependent on the duration
 of the liabilities and inflation expectations beyond 10 years                                   [1]
 The actuary may also adjust the assumed inflation rate for an inflation risk premium.          [½]
 Assets
 The increased inflation expectations will have increased the value of the inflation             [1]
 swaps
 As well as on other “real” assets, such as equities, real estate or infrastructure             [½]
 This will have offset the increases in the value of the liabilities                            [½]
 The overall impact on the funding position will be dependent on a number of factors
 including
 Extent of the hedging eg did the trustees hedge 100% or less                                   [½]
 The impact of the assumption used for national wage inflation (basis risk)                     [½]
 Whether the dynamic hedging was used to manage the impact of the 5% cap                        [½]
 Impact on other “real” assets, such as equities, real estate or infrastructure                 [½]
 Overall, it would be expected that the HICP hedging should have offset the majority             [1]
 of the increases in the value of the liabilities (assuming 100% hedging).
 It is possible that, due to the 5% cap on the inflation increases, the funding position
 has improved due to larger increases in the value of the assets relative to the
 liabilities.                                                                                   [½]
                                                                   [Marks available 10½, maximum 5]

                                                                                                     [Total 10]

 Commentary:
 This question was well answered. The only part where candidates dropped marks was in part
 (iii). There are a wide range of marks available for this part, but most answers given were quite
 narrow or repetitive.


 Q7
 (i)
 A collateralised debt obligation a structured product                                         [½]
 which is backed by a portfolio of fixed income securities.                                    [½]
 The fixed income products are held in a special purpose vehicle (SPV).                        [½]
 Income from the pool of FI products is allocated to different tranches (segments)
 within the SPV according to a pre-agreed set of rules.                                        [½]
 Losses from the pool of FI products is similarly allocated to the tranches via pre-
 agreed rules.                                                                                 [½]
 Investors purchase the different tranches depending on their risk appetite.                   [½]
                                                                    [Marks available 3, maximum 2]

SP6 A2024                                                               © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 (ii)
 The tranching process reallocates the credit risk of the underlying portfolio                 [½]
 By segregating the overall risk of the FI portfolio into different segments with               [1]
 different levels of riskiness.
 This is achieved by giving priority to the returns promised to those investors who            [½]
 invested in more senior tranches over those who invested in lower rated tranches
 and by allocating losses to lower rated tranches before impacting more senior
 tranches .                                                                                    [½]
 This contrasts to the credit risk that an investor would be exposed to if they just
 purchased a pro-rata portion of the underlying FI portfolio.                                  [½]
 Senior tranches offer investors the lowest credit risk…. with the lowest returns.             [½]
 Mezzanine tranches have increased credit risk….but increased returns.                         [½]
 Equity tranches have the more credit risk…but offer investors the highest returns.            [½]
                                                                   [Marks available 4½, maximum 3]

 (iii)
 Differences
 Underlying portfolio of assets
 in cash CDO is physical bonds/loans etc                                                       [½]
 in synthetic CDO is a portfolio of short credit default swaps.                                [½]
 Investors in cash CDOs have to fund the SPV (to allow it to buy the assets)                   [½]
 whereas investors in synthetic CDOs have to provide collateral.                               [½]
 Similarities
 Both use SPVs and returns are based on the credit risk of a portfolio of underlying
 assets.                                                                                       [½]
 Both use tranching to structure credit risk using a set of preagreed rules to allocate
 income and losses across the tranches.                                                        [½]
                                                                    [Marks available 3, maximum 2]

 (iv)
 Senior tranche investors -> SPV ($0m) - no cashflow                                                 [½]
 Mezzanine tranche investors -> SPV ($50m)                                                           [½]
 Equity tranche investors -> SPV ($10m)                                                              [½]
 SPV - > Government bonds ($60m)                                                                     [½]
                                                                          [Marks available 2, maximum 1]

 (v)
 Bond portfolio -> SPV ($12m)                                                                       [½]
 SPV - > CDS protection buyers (third parties) ($12m)                                                [1]
                                                                        [Marks available 1½, maximum 1]

 (vi)
 Senior tranche:
 Annual return: 40m * (1.5%) = 0.6m                                                                            [½]
 5 year return: 5* 0.6m = $3m                                                                                  [½]


SP6 A2024                                                               © Institute and Faculty of Actuaries
               SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Mezzanine tranche:
 Years 1-2: 50m * (3.5% + SOFR (int on collateral) = (3.5%+3.0%) = 3.25m                 [½]
 Years 3-5: 48m * (6.5%) = 3.12m                                                         [½]
 Collateral adj: 0.5*2*3.0% = 0.03m                                                      [½]
 5 year return: 2* 3.25m + 3*3.12m+ 0.03m = $15.89m                                      [½]
 Equity tranche:
 Years 1-2: 10m * (3.0%+7.5%) = 1.05m                                                    [½]
 Collateral adj: 0.5*10*3.0% = 0.15m                                                     [½]
 5 year return: 2* 1.05m + 0.15m = $2.25m                                                [½]
                                                             [Marks available 4½, maximum 4]

 (vii)
 The total value of the collateral was $60m, split across the equity and mezzanine
 tranches.
 This was far in excess of the losses incurred by the SPV of $12m.                             [1]
 This indicates the collateral arrangement was more than sufficient.                           [1]
 Although, the size of the losses relative to the equity tranche suggests a relatively
 significant credit event occurred.                                                            [1]
                                                                    [Marks available 3, maximum 2]

                                                                                                      [Total 15]

 Commentary:
 This was seen to be the most difficult question on the paper with candidates on average only
 scoring half of the marks. This was mainly due to the last three parts. In the first three parts
 candidates successfully demonstrated their knowledge of CDOs and SPVs but in general they
 were not comfortable in the details when it came to the numerical questions.

 Candidates may benefit from spending time understanding the various financial products from a
 numerical perspective and how the cashflows work. For simpler products like options, futures
 and forwards most candidates can answer these questions well but for more complex products
 there is a lack of understanding shown.


 Q8
 (i)
 Systematic risks are risks that cannot be diversified                                        [½]
 They can be considered to be the risk of exposure to a portfolio or market                   [½]
 Non-systematic risks arise from exposure to specific risks                                   [½]
 They can be mitigated through appropriate diversification                                    [½]
                                                                   [Marks available 2, maximum 2]

 (ii)
 The systematic risk of the guarantee is the failure of car batteries, on average, to
 provide over 10 years of service.                                                                              [1]
 This could be due to a number of factors, including:

SP6 A2024                                                                © Institute and Faculty of Actuaries
              SP6 ‑ Financial Derivatives‑ Specialist Principle - April 2024 - Examiners’ Report


 Defective manufacturing processes or materials                                                 [1]
 Incorrect modelling of the battery life at the outset                                          [1]
 Environmental conditions, eg a heatwave which result in widespread failure                     [1]
 Inflation, such as costs of raw materials needed to make batteries.                            [1]
                                               [Marks available 5, maximum 2 for examples, total 3]

 (iii)
 The manufacturer could sell a principal at risk bond.                                         [½]
 Which could be structured to provide a payoff which would meet the additional costs
 of replacing or repairing vehicle batteries should this be needed.                             [1]
 Possible structure for the bond could be as follows:
 Term: 10 years                                                                                [½]
 Notional value: Expected costs of replacing batteries x number of car sales                   [½]
 Coupon: Fixed annual coupon of X%                                                             [½]
 Principal repayment: Notional - Notional*max{S(10)-T(10),0} where S(10) is actual
 number of failures and T(10) is the expected number of failures.                               [1]
 The reduced principal payment that would need to be made by the manufacturer                  [½]
 would help to offset the costs of defective batteries for that particular cohort.
 This could be replicated for other years and also for the previous 5 years.                   [½]
 The manufacturer would still be exposed to the risks of the expected costs of repair or       [½]
 replacement eg due to inflation.
 And it may be exposed to basis risks if S(10) and T(10) were based on a reference              [1]
 index rather than the manufacturer’s own data.
                                                                   [Marks available 6½, maximum 4]

 (iv)
 Accept the risk and ensure it charges an appropriate premium                                 [½]
 Stop offering the guarantee                                                                  [½]
 It could attempt to pass on some of the risk to the battery manufacturer e.g. as part of
 a contract renegotiation.                                                                    [½]
 It could seek to insure some of the risk.                                                    [½]
                                                                   [Marks available 2, maximum 2]

                                                                                                     [Total 11]

 Commentary:
 This question was well attempted with most candidates scoring well. Some marks were dropped
 in the final parts due to lack of breadth in the answers.

                                                                                           [Paper Total 100]



                         END OF EXAMINERS’ REPORT


SP6 A2024                                                               © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



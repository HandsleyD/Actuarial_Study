---
normalized_id: sp6-2021-april-examiner-report-iandf-sp6-202104-examiners-report
exam_code: SP6
year: 2021
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/SP6/Apr21/IandF_SP6_202104_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2021-april-examiner-report-iandf-sp6-202104-examiners-report

   INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                         April 2021

                    Subject SP6 Financial Derivatives
                          Specialist Principles

Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates,
both those who are sitting the examination for the first time and using past papers as a
revision aid and also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The
Examiners have access to the Core Reading, which is designed to interpret the syllabus, and
will generally base questions around it but are not required to examine the content of Core
Reading specifically or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in
this report; other valid approaches are given appropriate credit. For essay-style questions,
particularly the open-ended questions in the later subjects, the report may contain more points
than the Examiners will expect from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Paul Nicholas
Chair of the Board of Examiners
July 2021




                                                            Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   1. The aim of Financial Derivatives Principles (SP6) is to develop a candidate’s ability
      to understand different types of financial derivatives and their uses, the markets in
      which they are traded, methods of valuation of financial derivatives, and the
      assessment and management of risks associated with a portfolio of derivatives. It
      builds on material covered in earlier subjects, particularly Loss Reserving and
      Financial Engineering (CM2).

   2. Candidates are reminded to ensure that their answers are sufficiently detailed to
      demonstrate understanding, as there were instances where inadequate explanations led
      to candidates scoring less well on questions than they might have done. The model
      solutions are intended to reflect the level of detail that a high scoring candidate might
      be able to produce. For many questions there are more marks available than the
      question requires to achieve full marks. This reflects that the examiners will give
      credit for valid alternative solutions, particularly in questions focussed on higher level
      skills.

   3. Candidates who give well-reasoned points, not in the marking schedule, are awarded
      marks for doing so.

   B. Comments on candidate performance in this diet of the examination.

   1. The majority of candidates made a good attempt at the exam and were able to score at
      least some marks in each of the 7 questions. However, only well-prepared candidates
      managed to score above the required pass mark.

   2. In general, candidates demonstrated good knowledge of the core reading material and
      its application to familiar situations. This was evident in nearly all of the questions as
      most candidates managed to pick up at least half of the available marks. Additional
      comments are provided after each question below.


   C. Pass Mark

   The Pass Mark for this exam was 60.
   49 candidates presented themselves and 19 passed.




SP6 A2021                                                                 © Institute and Faculty of Actuaries
             SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


Solutions for Subject SP6 – April 2021

Q1
(i)
From unit 12 page 2 of the core reading (using the notation in there)
      Delta = ∆ = Φ (d1 ) .

                                                                               
         ∆ = Φ log(70 / 80) + (0.023 + 0.5 × 0.32 ) × 90 / 260)
                                                  2

                                                                 0.32 90 / 260 
                                                                                  ,                           [1]
               

         ∆ = Φ (−0.57283),                                                                                    [½]
         ∆ =0.28338                                                                                           [½]

(ii)
                                       =( 0.28338 × 4 ) of the underlying stocks need to
To make the portfolio delta neutral, 1.13352
be purchased                                                                          [1]

(iii)
(a)
At time 0 the investor is short in an option which has a value of V(0)                    [½]
To delta hedge this position the investor needs to buy ∆(0) shares of the underlyingstock
This has a value of ∆(0) S (0)                                                            [½]
The value of the portfolio is ∆(0) S (0) − V (0)                                          [½]

(An alternative argument was also awarded full marks: the investor has to borrow
        V (0) − ∆ (0) S (0) to set-up this position, so the value is
        −(V (0) − ∆(0) S (0)) = ∆(0) S (0) − V (0) .)

(b)
To close the position the investor needs to buy an identical option to reverse the initial option
holding. This has a value of -V(t)                                                            [½]
The delta hedge is removed by selling ∆(0) shares resulting in a cash inflow of ∆(0) S (t ) [½]
The value of the portfolio is ∆(0) S (t ) − V (t )                                            [½]

(iv)
In words, the profit is equal to the value of the portfolio at time t minus the value of the
portfolio at time 0 (increased by the interest rate)                                           [1]
The value of the portfolio at time 0 is increased by the interest rate because there will be a net
cash holding at this point unless ∆(0) S (t ) =V (t ) , in setting-up the portfolio            [1]
       [ ∆(0) S (t ) − V (t )] − ert [ ∆(0) S (0) − V (0)] ,
Profit =
       ∆(0) [ S (t ) − V (t ) ] − [ ∆(0) S (0) − V (0) ] − (e rt − 1) [ ∆(0) S (0) − V (0) ] ,
       =                                                                                                      [1]
       ∆(0) [ S (t ) − S (0) ] − [V (t ) − V (0) ] − (e rt − 1) [ ∆(0) S (0) − V (0) ] .
       =




SP6 A2021                                                                      © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


(v)
The first term represents the profit due to the change in value of the shares                    [1]
The second term represents the profit due to the change in the value of the derivative           [1]
This is negative due to initial investment being short in an option                             [½]
The final term is the interest as a result of the initial borrowing to set-up the portfolio      [1]
                                                                [Marks available 3½, maximum 3]
                                                                                          [Total 12]

   Most candidates were confident with parts (i) and (ii), and were able to use the stated
   result of part (iv) to answer part (v) well. Many struggled with parts (iii) and (iv) to
   get close to full marks. Those who did score well set out clearly the cashflows at the
   different times and were able to apply these to the question.



Q2
(i)
(a)
The treasury rate is the rate of interest applicable to borrowing by a government in its own
currency                                                                                     [1]

(b)
LIBOR is a reference rate which represents the rate at which large international banks, which
are active in a particular money market                                                   [½]
agree that they would lend to each other at for a particular term                         [½]

(c)
The overnight indexed swap (OIS) rate is the fixed rate in an OIS swap                                   [½]

It is is a swap where a fixed rate for a period (e.g., 1 month or 3 months) is exchanged for the
geometric average of the overnight rates during the period                                   [½]

(d)
The repo rate is the rate of interest which reflects the difference between the sale and
repurchase prices in a repo transaction                                                                  [1]

(ii)
(a)
Treasury rates can be considered to be risk-free in their country of reference. For example,
the gilt yield in the UK                                                                   [½]
This is because it is assumed that there is no risk of the government defaulting on an
obligation denominated in its own currency                                                 [½]
This has not always been the case (eg Argentina) and may not be considered to be the case
for countries which are part of a currency union                                           [½]
                                                              [Marks available 1½, maximum 1]

(b)
LIBOR rates have historically been considered to be risk-free                                            [½]



SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


However, there is usually an element of credit risk inherent in these rates due to their term
For example, for 3 month borrowing, there is a risk of default during the 3 months           [½]
To create a truly risk-free rate, market practitioners often make an adjustment to the LIBOR
curve to reflect credit risk, for example a 10 basis point deduction                         [½]
                                                              [Marks available 1½, maximum 1]

(c)
The OIS rate reflects the expected cost of overnight unsecured borrowing between financial
institutions                                                                                 [½]
The OIS rate is not totally risk free, but it is very close to risk-free                     [½]
Two sources of risk can be identified, both very small:
    • The first is that there might be a default on an overnight loan between two financial
         institutions. The chance of this is very small because any hint of an imminent credit
         problem is likely to lead to a financial institution being excluded from the overnight
         market                                                                              [½]
    • The second is that there might be a default on the OIS swap itself                     [½]
                                                                   [Marks available 2, maximum 1]

(d)
Repo rates reflect the cost of short-term collateralised borrowing between two financial
institutions                                                                                [½]
Credit risk is mitigated by the provision of collateral which is normally required to be highly
liquid and marketable securities such as gilts                                              [½]
Therefore, Repo rates are typically only marginally higher than corresponding treasury rates.
                                                                                            [½]
                                                              [Marks available 1½, maximum 1]
                                                              [Marks available 6½, maximum 4]

(iii)
Basis swaps can be used to extend the OIS curve where data is not available                              [1]

(iv)
LIBOR for fixed swaps are valued under the assumption that forward rates are realised      [1]
Therefore, it is necessary to calculate the prevailing LIBOR forward rates which are different
under LIBOR and OIS discounting. This is because the swap contracts are all assumed to
have zero value at the outset and the discount factors are different                       [1]

(v)
       36 month OIS = 2.50%-(1.75%-1.25%) = 2.00%                                                        [½]

       1y1y LIBOR forward

       (1.75 − 1.25) (1.75 − 𝑋𝑋)
                    +            =0
          (1.009)     (1.0125)2
                                                                                                   [1]
Therefore
       𝑋𝑋 = 2.26%
                                                                                                   [1]
       1y2y LIBOR forward


SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


       (2.48 − 1.25) (2.48 − 2.26) (2.48 − 𝑌𝑌)
                    +             +            =0
          (1.009)      (1.0125)2    (1.02)3
                                                                                                         [1]
Therefore
       𝑌𝑌 = 4.00%
                                                                                                 [1]
                                                                    [Marks available 4½, maximum 4]
                                                                                          [Total 15]


   Parts (i) and (ii) proved straight forward for nearly all candidates. Most candidates
   then struggled with the remaining three parts. In particular, parts (iii) and (iv) were
   quite binary in that candidates either scored full marks or zero. This potentially
   highlights an area of the syllabus for future candidates to be familiar with. Part (v)
   was one of the more challenging questions on the paper. Some credible attempts
   were made but very few candidates scored full marks on this, mainly due to being
   unfamiliar with this part of the syllabus.



Q3
(i)
An equilibrium model is based on assumptions about economic variables                  [½]
These economic variables are then used to create a process for the short rate          [½]
The output of the model is an interest rate term-structure                             [½]
which can be used to value interest rate derivatives                                   [½]
Equilibrium models can provide term structures which are similar to prevailing term
structures but they are not usually an exact fit                                        [1]
                                                             [Marks available 3, maximum 2]

(ii)
Over the long run, it can be observed that interest rates tend to a long-term average      [½]
This can be justified through the economic rationale that when the cost of money is low, there
is increased demand for money and rates increase. On the contrary, when the cost of money is
high, there is reduced demand for money which slows economic activity and leads to
reductions in the cost of money                                                             [1]
Mean reversion towards the average is a way of reflecting this trend within the model      [½]
The inclusion of mean reversion in the model therefore makes the model more realistic,
particularly for long-time analyses                                                        [½]
                                                  [Many other answers were also given credit.]
                                                              [Marks available 2½, maximum 1]
(iii)
The time horizon over which the data is collected may have a big influence on the calibration
of the model                                                                                [1]
The insurer should consider the time horizon it wishes to assess when using the model when
choosing the length of the data set                                                        [½]
For example, if the insurer is doing some short-term scenario analysis, it may wish to use
more recent data which would better reflect the current economic environment               [½]




SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


Or if the insurer is assessing a much longer time horizon eg assessing the how its product
range could change over the long term, it may wish to use more historical data which
captures different economic periods                                                        [½]
The quality of the data is also likely to be a key consideration                           [½]
Missing data may cause problems, and suitable techniques may be needed to deal with such
data                                                                                       [½]
While more recent data sets are likely to be robust, more historical data sets may require
cleaning or adjustments                                                                    [½]
The frequency of the available data (for example daily or monthly) needs to be considered as
different frequencies of data can have different dynamics                                  [½]

Other considerations include:
The availability of data                                                                        [½]
Adjustments needed to remove distortions in the data                                            [½]
                                                                     [Marks available 5½, maximum 4]

(iv)
The value of the bond under the Vasicek model is given by
       100 x P(0,10) = A(0,10) exp (-B(0,10)*r(0))                                                         [½]
Where
       B (0,10) = 1- exp(-0.05*10))/0.05 = 7.87                                                            [1]
                          (7.87−10)∗(0.052 ∗0.03−0.022 /2)   0.022 ∗7.872
        A (0,10) = exp(              0.052
                                                    - 4∗0.05 ) = 0.983                      [1]
Therefore,
        100 x P(0.10) = 100 x 0.983 * exp (-7.87*0.02) = 83.97                              [1]
                                                             [Marks available 3½, maximum 3]
(v)
To value interest rate derivatives, the model needs to be changed into the risk neutral measure
                                                                                            [1]
When changing to the risk neutral model, the volatility remains the same                   [½]
but the drift is reduced by the σλ where λ is the market price of risk                     [½]

(vi)
The Vasicek model does not generally provide a good fit for the prevailing term structures
                                                                                             [½]
Therefore, the price of the guarantee may be different to the price of any hedging that the
insurer has in place. This could create a discrepancy in the insurers balance sheet if the
guarantee was hedged which would be undesirable/unacceptable for regulatory requirements
                                                                                              [1]
A no-arbitrage model (for example Hull-White) may be preferable as it would give a value
which would be market consistent which is a feature of many regulatory systems               [½]
If the Vasicek approach was permitted, the insurer would likely have to provide justification
for the data sets that were used to calibrate the model                                      [½]
It may also be required to provide a sensitivity analysis of the parameters                  [½]
Theoretically the Vasicek model allows for negative interest rates which may be unsuitable
for regulatory purposes                                                                      [½]
                                                              [Marks available 3½, maximum 2]
                                                                                       [Total 14]




SP6 A2021                                                                   © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report



   Interest rates have historically been an area well studied by candidates and it was the
   same with this paper. Candidates were well prepared and scored highly across all
   parts of the question apart from part (v), which was the lowest scoring part on the
   paper. Nearly all candidates did not realise that the guarantee needs to be valued
   using a risk neutral measure.



Q4
(i)
Trustees                                                                                        [½]
A contributing employer (or employers)                                                          [½]
Investment advisors                                                                             [½]
Regulators                                                                                      [½]
Consulting actuaries                                                                            [½]
Protection funds                                                                                [½]
Investment managers                                                                             [½]
Members                                                                                         [½]
                                                                      [Marks available 4, maximum 2]

(ii)
Any investor in the equity market is exposed to this downside risk, including the pension
scheme. It is the size of this risk which is important and how much tolerance an investor has.
                                                                                            [½]
For a pension scheme the risk tolerance is likely to be low due to the nature of these schemes.
                                                                                            [½]
The maturity of the scheme is an important consideration. For a mature scheme they are
particularly exposed to the downside risk as there may be less time to reduce any funding
shortfalls compared to an immature scheme                                                   [½]
Given the size of the equity exposure, the realisation of the downside risk could disrupt and
severally affect their plan to be fully funded                                               [1]
Downside risk might also affect funding levels                                              [½]
and increase any contributions from a sponsoring employer                                   [½]
Overall this could impact the solvency of both the pension scheme and the sponsoring
employer                                                                                    [½]
Markets usually take a long time to recover from several downside events resulting in lower
funding levels (and not meeting their funding plan) for longer than expected                 [1]
The cashflows from the equities could also be impacted which may also impact on meeting
cashflows within the pension scheme                                                         [½]
                                                              [Marks available 5½, maximum 3]

(iii)
Call options will not provide a hedge for equity tail risk. Even though the options would be
written on the domestic equity index the pay-off from these options would not form a hedge
                                                                                           [½]
Indeed, the cash pay-off at expiry would be of the form:
max {( Index Level – Strike Index Level ) × Multiplier , 0}                                              [½]
The Multiplier is often 100, but it can depend on the average level of an index                          [½]



SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


This type of derivative may also not be suitable due to basis risk arising from any mismatch
between the scheme’s equity assets and the equity index                                          [½]
In the region of equity tail risk (that is the values of equities fall) the value of the index call
option is always going to decrease (to a minimum of 0) and hence will not compensate for a
fall in equity prices                                                                             [1]
                                                                   [Marks available 3, maximum 2]

(iv)
For the hedged profit/loss of the equity investments of the scheme, it is the payoff from a put
option and the profit/loss on the equity investments:
        ( S10 + 100 X max {I0 − I10 , 0}) − ( S0 + Fees )                                                [1]
Here St is the value of the underlying equity investments of the scheme at time t and I t is the
index value at time t. The strike price is the current index value: I 0 and the number of
options purchased is X                                                                       [½]
It is assumed that the index and the equity portfolio are perfectly correlated               [½]
From the set-up of the hedge, S0 = 100 XI 0 ,                                                [½]
and in general St = 100 XI t                                                                 [½]
         This then simplifies the above equation to:
        ( S10 + max {S0 − S10 , 0}) − ( S0 + Fees
                                              =   ) max {S10 − S0 , 0} − Fees.                           [½]
The resulting profit/loss is that of a call option                                        [½]
              Note: full marks were awarded if an assumption stated that fees can be ignored.
                       Full marks were awarded if X was used rather than the multiplier 100X.

(v)
Overall
The strategy provides a broad hedge against the equity investments of the pension scheme
losing their current value over the next ten years                                      [½]
This is particularly true if the basis risk is low                                      [½]
The nominal amount is suitable as it covers all the value of the equities held          [½]
The pension scheme may change its equity exposure over the next 10 years and this could
lead to over or under hedging                                                           [½]
This is compounded by the options being European in nature. There is therefore no
flexibility to reduce the hedge if needed                                               [½]

Basis Risk
There is likely to be basis risk between the underlying domestic equity index and the equity
investments of the pension scheme                                                            [½]
This is a result of the differences between the equity investments of the pension scheme and
the constituents of the main domestic index                                                  [½]
There may be more suitable domestic indices that closely track the performance of the equity
investments of the scheme, or at least at a strong correlation                               [½]
To reduce the basis risk a portfolio of put options on individual equities or several equity
indices may be more suitable                                                                 [½]
The time to maturity is equal to the length of the funding plan, which will provide a hedge
over this whole period                                                                       [½]
As the time to maturity is 10 years, there is no protection after this date                  [½]




SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


This may not be a problem if the pension scheme is successful in becoming fully funded by
this time                                                                                   [½]
If protection is needed after this time then the pension scheme may be able to roll the options
to new options                                                                              [½]
The price to be paid for these options is unknown and may be more expensive than currently
                                                                                            [½]
The hedge is relative to the current equity index value, via the strike price               [½]
This means that any future returns on the equity investments of the pension scheme will not
be hedged                                                                                   [½]
For example, if there are significant returns on the equity investments over the early period of
the hedge then these will not be protected if there is a later fall in equity prices        [½]
The hedging is therefore highly sensitive to the underlying index, the strike price and
maturity date                                                                               [½]
The hedging strategy introduces counterparty risk                                           [½]

Costs
The transaction costs should be relatively small                                                         [½]
as index options should be available in the domestic derivatives markets                                 [½]
although long dated options tend to be more expensive                                                    [½]

Profit
There is an additional bonus that there is an unlimited upside to hedging this risk                      [½]
This is due to the equity price being able to rise indefinitely                                          [½]
Any actual profit would be reduced by the cost of the puts and any commission                            [½]

Governance
It is a simple strategy for the pension scheme to understand given that they or the company
may not have experience in derivatives                                                       [1]
                                                           [Marks available 13½, maximum 6]
                                                                                      [Total 17]

   Most candidates scored highly on the first three parts.

   Part (iv) was a good example of areas of the syllabus where few candidates had
   studied it in detail. In this case most had not got beyond the definition of a stock
   option. In particular, understanding how an index option actually works from a
   mathematical perspective is important as these options are widely traded and used.

   The breadth of points covered in part (v) was generally low, resulting in less than half
   marks for many candidates. For these types of question, breaking down the answer
   into different areas (like the underlined parts of the above solution) can be useful in
   generating a wide range of points and avoiding repetition.




SP6 A2021                                                                 © Institute and Faculty of Actuaries
             SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


Q5
(i)
The equation for Vt is given by: Vt = φt St + ϕt Bt                                            [½]
In words the portfolio is self-financing if and only if changes in the value of the portfolio
depends only on changes in the prices of the underlying asset and risk-free bond                [1]
That is, there is no net inflow or outflow of cash in or out of the portfolio                  [½]
Algebraically the portfolio ( φt , ϕt ) is self-financing if and only if dVt = φt dSt + ϕt dBt  [1]

(ii)
Firstly, assume that is the portfolio is self-financing.
Assume that the product rule can be used without proof (page 62 of Baxter and Rennie) [½]
Using the product rule:
                    (
        dVt = d e− rtVt ,       )
   = e− rt d (Vt ) + d e− rt Vt ,        ( )                                                              [½]

   = e− rt d (Vt ) − re− rtVt dt.
                                                                                                          [½]

Substituting in the definitions of Vt and, as the portfolio is self-financing
        dVt = φt dSt + ϕt dBt                                                                             [½]
        =
        dVt e
              − rt
                   ( φt dSt + ϕt dBt ) − re−rt ( φt St + ϕt Bt ) dt                                       [½]


Recalling that Bt = B0e so dBt = rBt dt , then
                                rt
                                                                                                          [½]
        =
        dVt e
              − rt
                   ( φt dSt + ϕt rBt dt ) − re− rt ( φt St + ϕt Bt ) dt                                   [½]

Gathering together terms:
        dVt e− rt ( φt dSt − r φt St dt ) − re− rt ( +ϕt Bt − ϕt Bt ) dt
        =                                                                                                 [½]


                                                   φt e− rt ( dSt − rSt dt ) .Using the product
The terms in the final bracket cancel leaving: dVt =

                (
                − rt
rules again, d e=           )
                     St e− rt dSt − re− rt St dt , then dVt = φt d St                                     [½]

To prove the other direction assume dVt = φt d St . Using the product rule with dVt = d ert Vt        (      )
gives: dVt =e dVt + re Vt dt =e dVt + rVt dt
               rt                   rt     rt
                                                                                                          [½]

Substituting dVt = φt d St into this gives:
        dVt =ert φt d St + rVt dt                                                                         [½]

Using the product rule for d St , as above and the portfolio formula for Vt leads to:

                        (                       )
        dVt= ert φt e− rt dSt − re− rt St dt + r ( φt St + ϕt Bt ) dt                                     [½]



SP6 A2021                                                                  © Institute and Faculty of Actuaries
             SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


Gathering together terms and cancelling out the exponentials in the first bracket:
        dVt = ( φt dSt + ϕt rBt dt ) + r ( φt St − φt St ) dt                                             [½]

Cancelling the terms in the final bracket and noting dBt = rBt dt gives the result:
       dVt = φt dSt + ϕt dBt and the portfolio is self-financing                                          [½]

(iii)
Using the hint in the question and noting that V0 = V0 :
                     t
        Vt = V0 + ∫ φu d Su                                                                               [½]
                    0


Using Vt = e Vt = φt St + ϕt Bt and rearranging the equation:
              rt
                                                                                                          [½]
              1  rt                           
                   e V0 + ∫ φu d Su  − φt St 
                            t
=ϕt                                                                                                      [1]
              Bt          0                  

(iv)
At the start all the money is invested in the underlying asset as V0 = φ0 S0                               [1]
At time t1 the amount of the underlying assets is trebled                                                 [½]
At time t2 all of the underlying asset is sold                                                            [½]
                                                                                                    [Total 14]

   Part (i) was well answered but the remaining parts of the question proved to be more
   challenging. The algebraic derivations and underlying mathematical theory are an
   important part of SP6 and are well covered in Baxter and Rennie. Candidates do
   need to be familiar with these and to have practised these derivations under exam
   conditions.

   As described in the marking schedule, the product rule as given on page 62 of Baxter
   and Rennie is a useful tool which has been used several times in previous exams and
   may be useful in future exams.



Q6
(i)
Black’s approximation is an approximate procedure for taking account of early exercise in
American call options, and is applicable to options with discrete dividends               [1]
Other suitable methods also include:
Monte Carlo                                                                              [½]
Trinomial tree                                                                           [½]
Binomial tree                                                                            [½]
Control Variate techniques                                                               [½]
Finite Differences                                                                       [½]




SP6 A2021                                                                  © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


     Note: Other suitably defined techniques were awarded marks, including a more detailed
                                                     description of Black’s approximation.
                                                        [Marks available 3½, maximum 2]

(ii)
The present value of the dividends is:
       1× exp(−0.06 × 6 / 12) + 2 × exp(−0.06 × 9 / 12) =
                                                        2.88244                                          [½]

The European option can be valued using the Black-Scholes formula with:
       T = 1,
       S0 =−100 2.88244 =  97.11756 ,                                                                    [½]
           ln(97.11756 110) + (0.06 + 0.202 / 2) ×1
        d1 =
                                                               ( 0.20 × 1 ) =
                                                                              −0.22279 ,                 [½]

        d 2 =−
            d1 0.2 × 1 =
                       −0.42279                                                                          [½]
        Φ (d1 ) =
                −0.41185 and Φ (d 2 ) =
                                      −0.33622                                                           [½]

The value of the call option is 97.11756 × −0.41185 − 110 × exp(-0.06) × -0.33622=5.16697
                                                                                         [½]

(iii)
The condition is that it is not optimal to exercise immediately prior to time t1 if:
        D1 ≤ K [ − exp(−r (t2 − t1 ))] , where K is the strike price                                     [1]

In the option in the question: D1 = 1 and K [1 − exp(−r (t2 − t1 )) ] =
                                                                      1.63769                            [½]
Therefore it is not optimal to exercise immediately prior to time t1                                     [½]

(iv)
The present value of the dividends is:
       1× exp(−0.06 × 6 / 12) =0.97045                                                                   [½]

The European option can be valued using the Black-Scholes formula with:
       T = 0.75 ,
       S0 =−100 0.97045 =   99.02955 ,                                                                   [½]
           ln(99.02955 110) + (0.06 + 0.202 / 2) × 0.75
        d1 =
                                                                   ( 0.20 × 0.75 ) =
                                                                                     −0.26017 , [½]

        d 2 =−
            d1 0.2 × 0.75 =
                          −0.43337                                                                       [½]
        Φ (d1 ) =
                0.39737 and Φ (d 2 ) =
                                     0.33237                                                             [½]

The value of the call option is
       99.02955 × 0.39737 − 110 × exp(-0.06 × 0.75) × 0.33237=4.39852                                    [½]

(v)
Assuming Black’s approximation can be used                                                [1]
Then, the approximate value of the option is the maximum of the answers in parts (ii) and (iv)
which is 5.17                                                                             [1]
                                                                                  [Total 12]


SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report




   This was a well answered question by candidates with many scoring well over half
   marks. Candidates clearly understood how dividends could be valued within these
   types of options.



Q7
(i)
Credit ratings facilitate straightforward capital calculations which is desirable, both from a
practitioner’s and supervisory perspective                                                     [1]
However, a credit rating is a simple comparator statistic which represents a diverse amount of
input information                                                                              [1]
Mechanistic reliance on credit ratings reduces the incentive for insurers to make their own
assessment of the risks                                                                       [½]
The use of credit ratings can lead to large segments of the market relying on the same (or
similar) assessments of credit risk. This creates increased systemic risk and was a feature of
the 2008 GFC                                                                                  [½]
The regulator may not consider the ratings provided by CRAs to be robust given that some
believe their business models to have inherent conflicts of interest because parts of their
revenue stream are sourced from the very companies whose debt they are rating                 [½]
There may also be political pressure to reduce the reliance on credit ratings-governments
have known to be critical of CRAs, particularly when their own debt is being downgraded
                                                                                              [½]
The use of credit ratings may also penalise unrated investments                               [½]
It may be costly for insurers to source the ratings information needed for their capital
assessments                                                                                   [½]
Credit ratings may not be updated often enough for use by the regulator                       [½]
                                                               [Marks available 5½, maximum 4]

(ii)
The derivation of a credit rating is a time and resource intensive process                      [½]
The creation of individual credit assessments for each individual investment is likely to be
beyond the capability of most (particularly small and medium-sized) insurers                     [1]
As significant investment would need to be made by each insurer to build a team of
specialists who had the requisite skills and experience                                         [½]
As all insurers would be creating internal teams at the same time, it could lead to a demand
surge in the costs                                                                              [½]
The proposal is therefore likely to favour larger insurers who already have large resource or
who could afford to make the investment                                                         [½]
The use of internal credit ratings as part of their capital calculations also incentivises insurers
to make an optimistic assessment of their investments                                            [1]
                                                                 [Marks available 4, maximum 3]

(iii)
A credit default swap (CDS) is a contract that provides insurance against the risk of a default
by particular company                                                                       [½]
The buyer of the insurance obtains the right to sell bonds issued by the company for their face
value when a credit event occurs                                                            [½]


SP6 A2021                                                                 © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


The seller of the insurance agrees to buy the bonds for their face value when a credit event
occurs                                                                                     [½]
The CDS effectively removes the insurer’s exposure to the credit risk of the bond. The
remaining economic exposure is consistent with a risk-free bond                            [½]
In so far as CDS are recognised within the regulatory framework, it will reduce the credit risk
that the insurer is exposed to and therefore should also reduce the regulatory capital
requirements                                                                               [½]
                                                             [Marks available 2½, maximum 2]

(iv)
Total return swap                                                                              [½]
Basket credit default swaps                                                                    [½]
Credit default obligations                                                                     [½]
                                                                    [Marks available 1½, maximum 1]

(v)
            Year        Default           Survival
                     probability          probability
            1           4.5%              0.955
            2           4.3%              0.9120
                                                                                                          [1]

       PV of expected payment
           Year           Prob.                   Expected             DF                PV of
                       Survival                payment                                payment
           1              0.955                   0.955a               0.9802            0.936a
           2              0.9120                  0.9120a              0.9608            0.876a
           Total                                                                         1.812a
                                                                                                          [2]

       PV of payoff
           Year          Prob.                Recovery       Expected            DF         PV of
                      Default          rate               payoff                         payment
            0.5          4.5%                 50%            0.0225              0.99005    0.0223
            1.5          4.3%                 50%            0.0215              0.9704     0.0209
            Total                                                                           0.0431
                                                                                                  [1]

       PV of accrued payment
             Year        Prob.                   Expected             DF              PV of
                      Default                 payoff                               payment
             0.5         4.5%                    0.0225a              0.99005         0.0223a
             1.5         4.3%                    0.0215a              0.9704          0.0209a
             Total                                                                    0.0431a
                                                                                                          [1]




SP6 A2021                                                                  © Institute and Faculty of Actuaries
            SP6 - Financial Derivatives - Specialist Principles - April 2021 - Examiners’ report


                 0.0431
Therefore a=(0.0431+1.812) = 2.32%                                                                       [1]
                                                                                                   [Total 16]

   This was another well attempted question with most candidates scoring over half
   marks. There was good knowledge demonstrated of this area of the syllabus. Part (v)
   was the only area in which candidates struggled to get high marks, despite some good
   attempts. To help future candidates, tackling the question in a clear way, as set out
   above, definitely helps avoid mistakes and breaks down the numerical answers into
   smaller parts.


                                                                                       [Paper Total 100]




                        END OF EXAMINERS’ REPORT




SP6 A2021                                                                 © Institute and Faculty of Actuaries


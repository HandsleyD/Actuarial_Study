---
normalized_id: sp6-2022-september-examiner-report-iandf-sp6-202209-examiner-report
exam_code: SP6
year: 2022
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/SP6/Sep22/IandF_SP6_202209_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# sp6-2022-september-examiner-report-iandf-sp6-202209-examiner-report

EXAMINERS’ REPORT
SP6 – Financial Derivatives
Specialist Principles




                              September 2022
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


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




Sarah Hutchinson
Chair of the Board of Examiners
December 2022




SP6 S2022                                                             © Institute and Faculty of Actuaries
        SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of Financial Derivatives Principles (SP6) is to develop a candidate’s ability to
   understand different types of financial derivatives and their uses, the markets in which
   they are traded, methods of valuation of financial derivatives, and the assessment and
   management of risks associated with a portfolio of derivatives. It builds on material
   covered in earlier subjects, particularly Loss Reserving and Financial Engineering (CM2).

   Candidates are reminded to ensure that their answers are sufficiently detailed to
   demonstrate their understanding, as well as to make sure that more obvious points are still
   made to be awarded full marks. The model solutions are intended to reflect the level of
   detail that a well prepared candidate might be able to produce. For many questions there
   are more marks available than the question requires to achieve full marks. This reflects
   that the examiners will give credit for valid alternative solutions, particularly in questions
   focussed on higher level skills.

   Candidates who give well-reasoned points, not in the marking schedule, are awarded
   marks for doing so.


   B. Comments on candidate performance in this diet of the examination.
   Most candidates were able to make a reasonable attempt at parts of each of the 9
   questions. However, only a limited number of candidates scored well in each of the
   questions.

   In general, candidates demonstrated good knowledge of the core reading material and its
   application to familiar situations. However, candidates found challenging less
   familiar situations and areas of the syllabus that have been examined less frequently. This
   was evident particularly in question 4 and question 6. Additional comments are provided
   after each question below.


   C. Pass Mark

   The Pass Mark for this exam was 60
   53 presented themselves and 18 passed.




SP6 S2022                                                            © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


Solutions for Subject SP6 – September 2022

Q1
(i)
S 0 = 100
T=1
Long K 1 = 110
Short K 2 = 120
r=0
q=0
Sigma = 0.2 at K 1 and
Sigma = 0.15 at K 2
c = S 0 * N(d 1 ) - K * exp (-rT) N(d 2 )
For the long call with strike K 1 = 110 this gives
d 1 = (ln(100/110)+0.5*0.2^2)/0.2 = -0.37655
d 2 = (ln(100/110)-0.5*0.2^2)/0.2 = -0.57655
N(d 1 ) = 0.353254 and N(d 2 ) = 0.282121                                                           [1]

c 1 = 100 * 0. 353254 - 110 * 0. 282121= 4.292011 (price to pay)                      [½]
For the short call with strike K 2 = 120 this gives
d 1 = (ln(100/120)+0.5*0.15^2)/0.15 = -1.14048
d 2 = (ln(100/120)-0.5*0.15^2)/0.15 = -1.29048
N(d 1 ) = 0.127044 and N(d 2 ) = 0.098443                                              [1]
C 2 = 100 * 0. 127044 - 120 * 0.098443= 0.891276 (price to receive)                   [½]
Hence, call-spread price at time 0 = 4.292011 - 0.891276 = 3.400735                    [1]
(Note: full marks are awarded for using a non Black-Scholes model to get a correct answer)

(ii)
Current stock price S 0 - increase                                                          [½]
Time to expiration T - increase                                                             [½]
Volatility Sigma - increase                                                                 [½]
Risk free rate r - increase                                                                 [½]
Dividend yield q - decrease                                                                 [½]
                                                                [Marks available 2½, maximum 2]

(iii)
At maturity the maximum pay-off is
Long S T - K 1
Short S T - K 2
Equals K 2 - K 1
Or 120 - 110 = 10
Therefore as the risk-free rate is 0%                                                               [½]
is 10 * exp(-rT) = 10                                                                                [1]

The lower bound of each call option is c >= max (S 0 - K exp(-rT), 0), which in this case
means that c >=0 and as K > S for each option, the worst that can happen is that the call
options expire worthless                                                                   [1]
Lower bound = 0                                                                           [½]

(iv)


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


The call option spread is effective at achieving limited upside participation between the
two strike levels of the call options                                                        [1]
The current volatility surface is such that the implied volatility for the option bought at
K 1 is higher than that of the option sold at K 2                                           [½]
Making the call spread more expensive compared to when the volatility would be
constant                                                                                     [1]
As the premium received from the sold call is relatively lower (due to lower implied
volatility) compared to the call option bought (which has a higher implied volatility)       [1]
Arguably, the volatility surface makes purchasing call-spreads less attractive for
investors                                                                                   [½]
                                                             [Marks available 4, maximum 3]
                                                                                     [Total 12]

 The first two parts of this question were well answered, with only minor calculation errors
 seen in part (i).

 Candidates struggled with parts (iii) and (iv) in providing the required detail to achieve
 the available marks. Higher scoring candidates approached these questions logically by
 using the information available and applying their knowledge.



Q2
(i)
This could be an in-the-money put option                                                            [1]
(Marks were awarded for other valid explanations)

(ii)
Measures P and Q are equivalent.                                                   [½]
Because they operate on the same sample space                                       [1]
And agree what is possible                                                          [1]
As each node has a non-zero probability being reached under each measure           [½]
                                                        [Marks available 3, maximum 2]

(iii)
First we calculate the probabilities under P of each node to be
High X 2 = 0: p * p = 0.25                                                                          [½]
Mid X 2 = 5: p * (1-p) + (1-p) * p = 0.5                                                            [½]
Low X 2 = 20: (1-p) * (1-p) = 0.25                                                                  [½]

Then calculating the Radon-Nikodym derivatives of dQ/dP
High dQ/dP @ X 2 = 0: (q * q) / (p * p) = 0.8^2 = 0.64                                              [½]
Mid dQ/dP @ X 2 = 5: = (q * ( 1- q))/ (p * ( 1- p)) = 0.4*0.6 / 0.5*0.5 = 0.96                      [½]
Low dQ/dP @ X 2 = 20: (1-q)/(1-p) * (1-q)/(1-p) = 1.44                                              [½]

Hence:
E[Q] = 5 * 0.5 * 0.96 + 20 * 0.25 * 1.44                                                            [½]
= 9.6                                                                                               [½]

(iv)

SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


After an up move the tree becomes just one step, with up probabilities of p and q and hence
the:
dQ/dP for an up move: 0.4/0.5 = 0.8 and                                                 [1]
dQ/dP for a down move: 0.6/0.5 = 1.2                                                    [1]

(v)
The real world expected value of this derivative is lower compared to the risk neutral
valuation                                                                                [1]
This is because the derivative pays out more in down scenarios and the risk neutral
probability measure places a higher probability on down moves (0.6 for a down move
under risk neutral versus 0.5 under real world)                                          [1]
This is logical as the derivative seems to be a hedging derivative and hence there is a
hedging cost or in other words a negative exposure to this risk premium                  [1]
                                                                                  [Total 12]

 Parts (i) and (ii) were well answered. Some calculation errors were made in parts (iii)
 and (iv) but most candidates still scored highly as they understood the underlying theory.

 Part (v) was more difficult and required candidates to think about the risk-neutral and
 real-world probabilities explicitly. Candidates are reminded to consider all the
 information that has been made available in the question and in previous parts of the
 question.



Q3
(i)
We note that implied volatility is higher for lower strike prices, this can be explained
by:
The leverage effect                                                                                 [1]
Crashophobia                                                                                        [1]
We also note that over time implied volatility is decreasing, this can be explained by
Mean-reversion after a recent risk event                                                            [1]

(ii)
For a 1.6 year option with strike 1.04 the trade would interpolate from the table, using
simple linear interpolation we get for 1.6 years:
K/S0 = 1: 0.4 * 22.6 + 0.6 * 16.3 = 18.82                                                [½]
K/S0 = 1.1: 0.4 * 21 + 0.6 * 14.8 = 17.28                                                [½]
For K/S0 of 1.04 that gives: 0.6 * 18.82 + 0.4 * 17.28 = 18.204                           [1]

(iii)
Using from the table 16.3 for implied volatility
S 0 = 100
T=2
K = 100
r=0
q=0
c = S 0 * N(d 1 ) - K * N(d 2 )
d 1 = (ln(1)+0.5*0.163^2*2)/(0.163*sqrt(2)) = 0.1153                                                [½]


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


d 2 = (ln(1)-0.5*0.163^2*2)/(0.163*sqrt(2)) = -0.1153                                               [½]
N(d 1 ) = 0.5459 and N(d 2 ) = 0.4541                                                               [½]

c = 9.1760                                                                                          [½]

(iv)
If a central government announces unexpected new policies providing assurances on
the level of the equity index this will likely impact market expectations on the market
index as the probability of market falls would decrease based on this implicit support. [1]
The current volatility surface has higher implied volatilities at lower strike prices and
these are expected to reduce                                                                [1]
Thereby flattening the volatility surface, and                                              [1]
Overall lowering the absolute level of implied volatility                                   [1]
                                                             [Marks available 4, maximum 3]
                                                                                     [Total 10]

 The only part of this question where candidates struggled was part (iv). For the other
 parts many scored highly and understood the area of the syllabus being examined.

 The higher order type question presented in part (iv) does require some thought and
 whilst many candidates made attempts at it, most were only able to generate 1 mark worth
 of comments.



Q4
(i)
1y/15y = ((1+3.25%)^20/(1+3.05%)^15))^(1/5)-1 = 3.85%                                               [1]
1y/10y = (((1+3.05%) ^15 / ((1+1.90%) ^ 10)))^(1/5) - 1 = 5.39%                                     [1]

(ii)
Assume constant forward rate of 3.85%                                                               [½]
30yr spot rate = ((1+3.25%) ^ 20 * (1+3.85%) ^10) ^(1/30) = 3.45%                                   [½]
Calculate LLFR = 0.6* 5.39% +0.4* 3.85% = 4.77%                                                     [½]
30yr spot rate = ((1+4.77%) ^20 * (1+4.77%) ^10))^(1/30) = 3.76%                                    [½]

(iii)
Pension funds have long-term liabilities (members benefits which they expect to pay
for many years) which are typically valued using market interest rates and inflation
rates                                                                                       [1]
Hedging the interest rate risks is typically part of an investment strategy which seeks to
reduce the volatility of the scheme’s funding position due to adverse changes in
interest rates.                                                                             [1]
this can reduce the volatility of contributions for the scheme sponsor                     [½]
Interest rate risk is usually hedged using bonds (sovereign bonds or corporate bonds)
interest rate swaps or repos                                                               [½]
Derivatives can provide capital efficient hedging solutions                                [½]
                                                            [Marks available 3½, maximum 2]

(iv)


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


Choice of hedging basis:
The pension scheme may already have a hedging programme in place, which may be
based on a different economic basis                                                     [1]
the pension scheme’s interest rate sensitivities may therefore differ from those
calculated under the proposed regulatory approach which may result in basis risk       [½]
For example, the pension scheme’s hedging programme could be based on a
Sovereign bond curve which could create basis risk relative to the proposed regulatory
curve                                                                                  [½]
Or the pension scheme may have an objective to buy-out the liabilities and therefore
may be hedging the IR risk on a buy-out basis                                          [½]
The risk manager would then have to consider whether to change the hedging
programme to reflect the regulatory curve.                                             [½]

Liquidity:
The regulator has assessed there to be a limited number of “liquid” swaps. However,
the risk manager may be using swaps which are not considered to be liquid
(e.g. 30y swaps)                                                                                    [½]
which could create some basis risk relative to the regulatory curve                                 [½]

Sensitivity of long-dated liabilities:
Under (a), the value of long-term liabilities (20+ years) would be dependent on the
15y and 20y swap rates. This creates a high sensitivity to these swap rates                [1]
Under (b), the value of the long-term liabilities (20+years) would be dependent on the
10y, 15y and 20y swap rates. This creates less sensitivity to the last two swap rates but
may increase the complexity of hedging the risks                                          [½]
Any updates to the weighting of the last liquid forward rates would need to be taken
into account and may require rebalancing of the hedging portfolio which could
increase costs                                                                            [½]

Costs:
The risk manager would need to take any costs into account when assessing the hedging
strategy                                                                             [½]
                                                       [Marks available 6½, maximum 4]
                                                                              [Total 10]

 This was the lowest scoring question on the paper. The question was fundamentally one
 around interest rate calculations in the context of a pension scheme. Many candidates
 made significant mistakes in their calculation of parts (i) and (ii). Many marks were
 available in (iii) and (iv) but most candidates did not attempt large parts of these
 questions.

 Candidates are reminded to focus on the area of the syllabus being examined as this can
 help to generate ideas for solutions.



Q5
(i)
Mandatory reporting of open derivative positions                                                    [½]
Mandatory clearing of certain OTC derivatives                                                       [½]


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report




For non-cleared derivatives:
Additional operational risk management requirements                                      [½]
Bilateral collateralisation for financial counterparties                                 [½]
Bilateral collateralisation for non-financial counterparties if derivative positions are
large and not used for risk management or treasury activities                            [½]
                                                           [Marks available 2½, maximum 2]

(ii)
The objective of the initial margin is to protect the CCP from losses arising default by a
member                                                                                     [½]
by ensuring it has enough margin to cover potential losses during the period between
default and closure of the positions                                                       [½]

General approach:
The historical simulation method assesses the loss distribution of the portfolio over a
given time period (i.e. 5 days in this case) based on a set of actual historical scenarios
from the recent past                                                                        [½]
The VaR is calculated by ordering the simulated returns and then selecting the relevant
percentile loss i.e. the 99th worst loss in this case                                       [½]
It does not assume normality of returns and therefore can reflect leptokurtosis (fat tails)
to some degree in the loss distribution                                                     [½]
The Monte Carlo simulation method involves modelling future price returns of the
portfolio and running many hypothetical trials to obtain a distribution of portfolio
losses                                                                                      [½]
Both of these approaches would be suitable for calculating the basic initial margin for
the CCP                                                                                     [½]

Data:
The historical simulation method relies on the existence of a relative rich source of
input data i.e. interest rate time series                                                           [½]
These are widely available for many currencies which means it should be an
appropriate method to use for the CCP                                                               [½]
Monte Carlo method will also use the historical series but often it is the preferred
approach when there is more limited data available                                                  [½]

Calibration of the models:
For both methods, the CCP will need to ensure that the calibration of the model gives
an appropriate level of risk                                                             [½]
For historical simulation method, the CCP may wish to filter the data to ensure that the
time series data being used is reflective of the market environment                      [½]
e.g. it contains sufficient stress periods.                                              [½]
Alternatively, it could scale the volatility inherent in the data                        [½]
For the Monte Carlo simulation, the CCP must ensure that the underlying
Distributions and correlations between instruments are representative of the IR market
dynamics                                                                                 [½]

Speed of calculation:
The calculation of initial margin will need to be required on an intra-day basis across
many portfolios and positions. The historical calculation method may therefore be


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


favourable given the ease of calculation                                              [½]
Overall, the historical simulation method may be the preferred approach to the
calculation of VaR given the availability of good data and its relative simplicity     [1]
                                                           [Marks available 9, maximum 5]

(iii)
Individual adjustments for liquidity risk or concentration risks may also need to be
Made if the member has a significant portfolio or a very complex portfolio of
derivatives.                                                                             [1]
An adjustment could also be made to reduce potential systemic risk i.e. that the
margining requirements increase during periods of stress thereby creating additional
stress in the financial system.                                                          [1]
The CCP may also use stress testing to benchmark the basic VaR number or to give a
floor to the calculations                                                                [1]
                                                                                  [Total 10]

  The first two parts were well answered and there were plenty of marks available in part
  (ii).

  Part (iii) was more challenging, but most candidates were able to identify one adjustment
  and reason.



Q6
(i)
Standard pattern used as the basis for the trinomial tree                                           [½]
[up, along, down]                                                                                   [½]
Alternative 1 is used to incorporate mean reversion when rates are low                              [½]
 [up x 2, up , along]                                                                               [½]
Alternative 2 is used to incorporate mean reversion when rates are high                             [½]
[along, down, down x2]                                                                              [½]

(ii)
The risk neutral probabilities at each node are chosen to match the expected mean and
volatility of the change in R* over the following time period.                         [1]
Equation a represents the change in the mean                                          [½]
Equation b represents the change in standard deviation                                [½]
Equation c is needed to ensure the probabilities sum to 1                             [½]
                                                          [Marks available 2½, maximum 2]

(iii)


          (0, 0)      (1, 1)      (1, 0)      (1, -1)     (2, 2)       (2, 1)      (2, 0)      (2, -1)    (2, -2)
 R*
          0.0000      0.1414      0.0000      -0.1414     0.2828       0.1414      0.000       -0.1414    -0.2828
 Pu
          0.1667      0.1605      0.1667      0.1730      0.1545       0.1605      0.1667      0.1730     0.1795



SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


 Pm
          0.6667      0.6665      0.6667      0.6665      0.6660       0.6665      0.6667      0.6665       0.6660
 Pd
          0.1667 0.1730 0.1667 0.1605 0.1795 0.1730 0.1667 0.1605                                           0.1545
(Note: 3 marks for correct table. ½ mark subtracted for each incorrect cell subject to a
maximum of 1 mark per highlighted rectangle)                                             [3]

(iv)
To convert the R* tree into a tree for R and fit the prevailing term structure, we need to take
the following steps:
First, define a(t) = R(t) - R*(t) and a(i Δ t)= R (i Δ t) - R*(i Δ t)                       [½]
Then define B(i,j) as the present value of a bond of value 1 if node (i,j) is reached and 0
otherwise                                                                                   [½]
This gives us that B(0,0) = 1                                                               [½]
a0 is then chosen to be consistent with the first Δ t time period                           [½]
An iterative forward induction is then set up to calculate a(i Δ t) and B(I,j)               [1]
B(i,j) are calculated by discounting the probability weighted value of the bond using a
(i-1)                                                                                        [1]
a(i) is then calculated by setting the equation of value equal to the price of a zero-coupon
bond maturing at the end of the (i+1) time period.                                           [1]
                                                               [Marks available 5, maximum 4]
                                                                                     [Total 12]

 It should be noted that there were two typographical errors in the wording before part (ii).
 In the second equation the – should be a + and in the last bullet point the 2 should be a 3.
 This did not have any impact on the performance of candidates as no candidate identified
 the errors and this did not have an impact on marks awarded.

 Overall this was a difficult question. Part (i) was reasonably straightforward but parts
 (ii) and (iii) demonstrated that candidates were not familiar with this area of the course.
 Only the very well prepared candidates scored highly in part (iv).



Q7
(i)
The main reason is due to default correlation                                                         [1]
This is a measure of whether credit risky assets are more likely to default together                 [½]
or separately                                                                                        [½]

(ii) (a)
An example is if company B is a creditor of company A                                      [1]
In this case if company A defaults then it is more likely that company B will be unable to
pay any outstanding obligations                                                            [1]

(ii) (b)
An example is if company A and company B are competitors in the same industry.          [1]
If company A defaults then it may be the case that company B can expand into the market
of company A, with increased market share. As a result company B is less likely to
default a result of company A defaulting                                                [1]

SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report




(iii)
The assumption of a common correlation between credit assets                                         [½]
and that the 1-year probability of default is the same for all credit assets significantly
simplifies the one-factor Gaussian copula model                                                      [½]
It should also be noted that the assumption of a common factor also simplifies the
general case of the Gaussian copula model                                                            [½]
Working with a Gaussian copula is generally simpler than with more complex
copulas                                                                                              [½]

Moreover, it enables a closed formula to be obtained which can be used to estimate the
worst case default rate (as derived by Vasicek)                                            [½]
That is, the default rate during the next year that will not be exceeded with a given
probability                                                                                [½]
In turn this can be used to easily estimate the credit value at risk                       [½]
                                                               [Marks available 3½, maximum 2]

(iv)
Using the formula given in Hull in section 24.9 enables the worst case default rate over
the next year to be calculated at the 99.9% confidence level, V(99.9%, 1):                 [½]
                   N ( 0.5% ) + 0.15 N ( 99.9% ) 
                     −1                   −1
V (99.9%,1) N=                                        6.74%.                              [1]
                                1 − 0.15             
                                                     
Further, an estimate of the credit value at risk can also be found using the formula given
in section 24.9 of Hull: L(1-R)V(X,T), where L is the size of the loan portfolio and R is
the recovery rate                                                                          [½]
In this case as X=9.9.9% and R=65%, an estimate of the credit value at risk at the 99.9%
confidence level over the next year is: = 105 × (1 − 0.65) × 6.74%= 2.48million.            [1]

(v)
Credit risk is an important (if not the most important) risk for a bank to monitor and
manage                                                                                         [½]
In order to manage this risk having a way of calculating it is also important, and credit
value at risk is one way of doing this                                                         [½]
As the previous two answers demonstrate the estimate of the credit value at risk at the
99.9% confidence level over the next year is highly sensitive to the assumptions relating
to the portfolio                                                                               [½]
The bank will need to take care in selecting assumptions which enable it to comply with
regulations                                                                                    [½]
and hence remain solvent and a viable financial institution                                    [½]
and to ensure that they are not too prudent and limit its activities, for example in holding
too much capital                                                                               [½]
It may want to consider a more sophisticated model, for example CreditMetrics                  [½]
Care will also need to be taken with credit value at risk across different credit portfolios
of the bank as correlations between the different credit portfolios will be important As
a result the credit value at risks for different portfolios may not be additive in order to
obtain a bank wide credit value at risk                                                         [1]
                                                               [Marks available 4½, maximum 3]
                                                                                        [Total 14]



SP6 S2022                                                             © Institute and Faculty of Actuaries
          SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report



 This was another question where candidates appeared to be less familiar with the course.

 Part (ii) was the highest scoring part on the paper with most getting full marks.

 For the other three parts candidates made attempts but a lack of background knowledge
 in this area made it difficult for them to score highly.



Q8
(i)
An interest rate swap is an interest rate derivative                                        [½]
It is an over-the-counter contract                                                          [½]
The characteristics of the contract are subject to agreement by the two parties             [½]
In a vanilla interest rate derivative one company (the ‘payer’) agrees to pay another
company (the ‘receiver’) cash flows                                                         [½]
equal to interest at a predetermined fixed rate on a notional principal for a number of
years                                                                                       [½]
At the same time, the receiver agrees to pay the payer cash flows equal to interest at a
floating rate on the same notional principal for the same period of time                    [½]
If the cash flows occur on the same date then they are often netted. This means only the
difference is paid by the company who owes the higher amount                                [½]
The currencies of the two sets of cash flows are the same                                   [½]
The notional principal is used only for the calculation of interest payments. The principal
itself is not exchanged                                                                     [½]
At the start of the swap the fixed rate is usually chosen to make the present value of both
sets of cashflows in the swap equal                                                         [½]
Vanilla interest rate derivatives are the most commonly traded                              [½]

Other variations include:
trading one floating rate for another                                                          [½]
asset swap                                                                                     [½]
the legs of the swap are in different currencies; and                                          [½]
forward swap agreements.                                                                       [½]
                                                                    [Marks available 7½, maximum 3]

(ii)
Interest rate risk                                                                                    [½]
Credit risk                                                                                           [½]

(iii)
It could be argued that any deviation from the optimal hedging position using interest rate
swaps could be classed as speculation                                                       [½]
In this way the company can take a view on the future interest rate environment             [½]
Also, using non-vanilla based swaps they could take a view on future exchange rates as
a result of overseas currency exposure                                                      [½]
The use of interest rate swaps for speculation could also stem from executives who have
compensation packages linked to the performance of a company                                [½]
They may be more incentivised to take speculative risks                                     [½]



SP6 S2022                                                              © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


For example interest rate swaps can adjust exposure to floating-rate debt which may help
with meeting earning forecasts                                                             [½]
It may be cheaper to enter into any speculative interest rate activity using a swap rather
than issuing any new debt                                                                  [½]
The company may believe that speculation is a profitable activity, and not purely a risky
activity with some upside potential                                                        [½]
This may be as a result of some form of extra information not captured in the market, or [½]
some form of low transaction cost for trading in interest rate swaps                       [½]
Weak internal controls or governance may inadvertently enable speculation to take place
without proper oversight                                                                   [½]
                                                             [Marks available 5½, maximum 3]

(iv)
Interest rate swaps could be particularly useful for speculating on directional movements in
future interest rates                                                                             [1]
as well as the future shape or slope of the yield curve                                          [½]
The movement of future interest rates is important for fixed income trading                      [½]
One way of speculating on movements in future interests is by taking long and short
positions in government bonds. This can be capital intensive compared to interest rate
swaps which require little initial capital                                                        [1]
For example if a fixed income trader believes the yield curve is currently too steep, they
can sell the front end of the yield curve in one interest rate swap (with the expectation that
this interest rate will rise) or buy the back end of the yield curve in an interest rate swap
(with the expectation that this interest rate will fall)                                          [1]
Some fixed income assets can be illiquid and fixed income traders may be able to create
proxies for these assets using interest rate swaps, and hence allow for greater speculation on
these types of assets.                                                                            [1]
                                                                 [Marks available 5, maximum 3]
                                                                                          [Total 10]

 Most candidates were close to full marks in parts (i) and (ii).

 For parts (iii) and (iv) there were some basic ideas which scored 1 mark in each part but
 many candidates were not able to generate more ideas.



Q9
(i)
The investment manager will need to specify the following details:
Precise details about the movie:
the exact movie                                                                            [½]
the definition of worldwide                                                                [½]
transparency over the spot price (that is the source of the worldwide revenue information) [½]
any foreign exchange considerations in converting revenue back into US dollars             [½]
how the revenue is defined (for example is it only in movies or via subscription
platforms)                                                                                 [½]
the date contracts become available (for example is it when production starts or the day
the movie is premiered)                                                                     [1]
length of the future (that is the delivery month)                                          [½]


SP6 S2022                                                             © Institute and Faculty of Actuaries
         SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report


the range of strike prices                                                             [½]
any daily price limit                                                                  [½]
position limits                                                                        [½]
how the price is quoted (for example price increments or number of decimal places) and [½]
margin requirements.                                                                   [½]
                                                            [Marks available 7, maximum 4]

(ii)
Movie studios:
This could enable them to hedge the risk of a movie not being successful                             [½]
That means a given movie underperforms and does not generate the expected revenues                   [½]
This is currently a difficult risk to hedge because movies are generally financed and
produced on the assumptions that they will be financially successful                                  [1]
They would take a short position in a futures contract                                               [½]

People interested in movies:
This would be a form of speculation and may reflect an emotional response to a movie                 [½]
or wanting to take a position in order to make a profit                                              [½]

Other traders:
There may be limited interest from other traders, potentially as some form of
diversification                                                                          [½]
                                                              [Marks available 4, maximum 3]

(iii)
The investment firm may not get regulatory approval for these types of futures                   [½]
The investment firm may be concerned that movie studios may be able to manipulate this
market based on when or where they release a movie                                                [1]
For example, movie studies may only choose certain dates to release a film in given
countries to test audience reactions                                                             [½]
They then may enter a future before widespread release to hedge this risk with insider
knowledge                                                                                        [½]
There may be concern over the lack of liquidity in the futures after any initial interest.       [½]
Beyond the main potential traders listed in part (iii) it is unlikely that there will be other
interested parties to maintain liquidity in these markets, in particular for less popular
films                                                                                            [½]
Moreover, if movie studios were going to hedge the risk using these futures, then the size
of the trades are likely to orders of magnitude different                                        [½]
Movie studios may be trying to hedge millions of US dollars, while speculators are likely
to be trading in tens of US dollars                                                              [½]
Movie studios may not be interested in hedging this risk using futures                           [½]
This would leave this market as one for speculation, or almost like a betting exchange,
which could be unpopular and an unintentional consequence of the market, leading to
reputational risk                                                                                [½]
                                                               [Marks available 5½, maximum 3]
                                                                                          [Total 10]




SP6 S2022                                                             © Institute and Faculty of Actuaries
        SP6 – Financial Derivatives – Specialist Principles – September 2022 - Examiners’ report



 This was the best answered question on the paper. There were many good answers and a
 good demonstration of idea generation for parts (ii) and (iii).

                                                                                    [Paper Total 100]

                       END OF EXAMINERS’ REPORT




SP6 S2022                                                            © Institute and Faculty of Actuaries
Beijing
14F China World Office 1 · 1 Jianwai Avenue · Beijing · China 100004
Tel: +86 (10) 6535 0248

Edinburgh
Level 2 · Exchange Crescent · 7 Conference Square · Edinburgh · EH3 8RA
Tel: +44 (0) 131 240 1300

Hong Kong
1803 Tower One · Lippo Centre · 89 Queensway · Hong Kong
Tel: +852 2147 9418

London (registered office)
7th Floor · Holborn Gate · 326-330 High Holborn · London · WC1V 7PP
Tel: +44 (0) 20 7632 2100

Oxford
1st Floor · Belsyre Court · 57 Woodstock Road · Oxford · OX2 6HJ
Tel: +44 (0) 1865 268 200

Singapore
5 Shenton Way · UIC Building · #10-01 · Singapore 068808
Tel: +65 8778 1784




www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


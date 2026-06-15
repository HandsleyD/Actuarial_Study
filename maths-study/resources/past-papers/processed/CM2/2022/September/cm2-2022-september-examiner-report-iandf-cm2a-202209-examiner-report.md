---
normalized_id: cm2-2022-september-examiner-report-iandf-cm2a-202209-examiner-report
exam_code: CM2
year: 2022
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep22/IandF_CM2A_202209_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2022-september-examiner-report-iandf-cm2a-202209-examiner-report

EXAMINERS’ REPORT
CM2 - Financial Engineering and Loss
Reserving
Core Principles
Paper A




                            September 2022
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


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




CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report




   A. General comments on the aims of this subject and how it is marked

   The aim of Subject CM2 is to develop the necessary skills to construct asset liability
   models, value financial derivatives and calculate reserves for insurance or guarantees.
   These skills are also required to communicate with other financial professionals and to
   critically evaluate modern financial theories.

   The marking approach for CM2 is flexible in the sense that different answers to those
   shown in the solution can earn marks if they are relevant and appropriate. Marks for the
   methodology are also awarded including marks for using the right method even if an error
   in an earlier part of the question prevents the final answer from being correct. The
   marking focusses on rewarding candidates’ understanding of the concepts, including their
   ability to articulate algebra and arguments clearly.



   B. Comments on candidate performance in this diet of the examination

   This exam was sat online and most questions focussed on applied calculations and
   analysis of the results. Some of the questions required students to apply concepts from
   the Core Reading to scenarios they might not have seen before and the stronger students
   scored highly here. Average marks were slightly lower than the historic norm for the
   subject but the pass mark was also set slightly lower.

   As in previous sessions, there was evidence that some students found algebra tricky when
   answering questions in Word. Students should note that rearranging and solving algebra
   on screen can sometimes be hard if you are used to using pen and paper, so this is a
   worthwhile skill to practice before the exams. It’s also worth saying that using the
   equation editor in Word to set out formulae is not necessary, your workings just need to
   be clear enough for the examiner to follow them.

   Q4 proved to be the most challenging. The algebra required here was fairly brief but the
   content was quite technical.
   .


   C. Pass Mark

   The Pass Mark for this exam was 58
   1301 presented themselves and 528 passed.




CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


Solutions for CM2A - September 2022


Q1
(i)
U(w) = (8^0.01 - 1) / 0.01 = 2.1012                                                                 [1]

(ii)
U’(w) = w^(-0.99)                                                                                   [½]
U’’(w) = -0.99w^(-1.99)                                                                             [½]
A(w) = 0.99/w                                                                                       [½]
A’(w) = -0.99/w^2 <0                                                                                [½]
Therefore it exhibits declining absolute risk aversion
R(w) = 0.99                                                                                         [½]
R’(w) = 0                                                                                           [½]
Therefore it exhibits constant relative risk version

(iii)
Maximum P solves the following equation, where X represents the win from the lottery
and w is current wealth (w=8):
E(U(w-P+X)) = U(w)                                                                                  [1]
1/10,000*U(8-P+1,000) + 9,999/10,000*U(8-P) = 2.1012                                                [1]
P = 0.004                                                                                           [½]
Therefore the maximum price he will pay is $4.                                                      [½]

(iv)
If γ>1 then U’’(w)>0                                                                       [½]
The function would not satisfy the principle of diminishing marginal utility of wealth.   [½]
This would suggest the individual was risk seeking (i.e. not risk averse).                 [½]
Common utility theory assumes that individuals are risk averse.                            [½]
If γ>1 then the utility function would exhibit increasing absolute risk aversion.          [½]
This is not plausible.                                                                     [½]
                                                               [Marks available 3, maximum 2]
                                                                                      [Total 9]

 Parts (i) and (ii) of this question were generally answered well. Fewer candidates
 identified the equation they needed to solve in part (iii), with common mistakes including
 using the wrong units for wealth or solving for utility of expected wealth rather than
 expected utility of wealth.

 Part (iv) was answered well, although some candidates suggested that U’(w) would
 become negative which will not happen for any value of γ.



Q2
(i)
Structural, or firm-value, models are used to represent a firm’s assets and liabilities
(or capital and debt) and define a mechanism for default.                                           [½]
These models deliver an explicit link between a firm’s default and the economic

CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


conditions and provide a sound basis for estimating default correlations amongst
different firms.                                                                         [½]
The Merton model is an example of a structural model.                                    [½]
The disadvantage is identifying the correct model and estimating its parameters.         [½]
Reduced form models do not attempt to deliver a representation of a firm, like
structural models do.                                                                    [1]
Rather they are statistical models that use observed data, both macro and micro, and
so can usually be ‘fitted’ to data.                                                      [½]
The market statistics most commonly used are the credit ratings.                         [½]
Default is no longer tied to the firm value falling below a threshold-level, as in
structural models.                                                                       [1]
Rather, default occurs according to some exogenous hazard rate process.                  [½]
                                                             [Marks available 5½, maximum 4]

(ii)
The value of a firm (V) is the sum of its debt (D) and equity (E), therefore the value of
the debt is calculated as D = V - E = 150 - E                                                 [½]
The value of a firm’s equity is a call option on the value of the firm with a strike of the
face value of the debt, and can be calculated using Black-Scholes:                            [½]
d 1 = 1.0736                                                                                  [½]
d 2 = -0.2044                                                                                 [½]
N(d 1 ) = 0.8585                                                                              [½]
N(d 2 ) = 0.4190                                                                              [½]
E = 92.712                                                                                    [½]
D = 150 - E = 57.29                                                                           [½]
Bond yield = -ln(P(t,T))/(T-t)                                                                [½]
-ln(57.29/100)/15 = 3.71%                                                                     [½]
Spread = yield - risk-free rate                                                               [½]
= 2.71%                                                                                       [½]
                                                                                        [Total 10]

 Many candidates performed well in this question, making good points in part (i), some
 only described the models rather than providing the required comparison to score
 strongly.

 Part (ii) was answered well, except from some errors towards the end when calculating
 the bond yield from its value.



Q3
(i)(a) = $100 * exp(0.009) = $100.90                                                                [1]
(i)(b) = ln(exp(0.018*2)/exp(.009)) = 2.7%                                                          [1]
(i)(c) = $100 * exp(-3*.023) = $93.33                                                               [1]
(i)(d) = ln(exp(3*.023)*exp(0.031))/4 = 2.5%                                                        [1]

(ii)
P(2,3) = 100*exp(-0.025) = $97.53                                                                   [½]
P(2,4) = 100*exp(-0.025)*exp(-0.02) = $95.60                                                        [½]
At time zero investor buys 5 bonds with maturity 3 and 10 bonds with maturity 4

CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


Cost = 5*93.33 + 10*90.48 = $1,371.50                                                               [1]
At time 2 they are worth 5*97.53 + 10*95.60 = $1,443.65                                             [1]
Therefore investor makes a profit of $72.15                                                         [1]

(iii)(a)
An inverted yield curve is when rates are higher at the shorter term                                [½]
i.e. the curve is downward sloping                                                                  [½]

(iii)(b)
Usually the yield curve increases with maturity                                         [½]
Reflecting uncertainty about future rates                                               [½]
And as compensation for investing money for a longer time                               [½]
Liquidity preference theory also notes that investors might prefer shorter-dated assets [½]
                                                              [Marks available 2, maximum 1]

(iii)(c)
Market segmentation theory argues that different agents in the market have
different objectives                                                                        [½]
And rates are determined by supply and demand                                               [½]
Therefore high demand for longer term bonds might drive rates down                          [1]
An inverted yield curve is an indicator of an impending recession                           [1]
An inverted yield curve suggests that investors believe short-term interest rates are
going to fall sharply at some point in the future                                           [1]
                                                              [Marks available 4, maximum 3]
                                                                                      [Total 13]

 Some candidates did not perform well in this question, with fewer candidates correctly
 calculating the values in part (i) and fewer still correctly calculating the profit in part (ii).

 Many candidates made some good points in part (iii), but to score highly, it was important
 to look beyond the supply/demand imbalance at different durations and think about the
 reasons for this.



Q4
(i)
                                                                                                    [½]
                                                                                                    [½]
                                                                                                    [½]
                    by symmetry of the Normal distribution                                          [½]
The probability of a continuous random variable being observed over a range is the
integral of its pdf over the range:


                                                                                                    [½]



CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report




                                                                                                    [½]

(ii)
Using the substitution                                                                              [½]
We note that                                                                                        [½]
So then the integral becomes:


                                                                                                    [½]


                                         , where                                                    [1]
This is the integral of a Gamma distribution with 𝛼𝛼 and 𝜆𝜆 parameters set out above                [½]
Because the Gamma distribution is bounded below by 0                                                [½]
this integral is exactly 𝑃𝑃(𝐺𝐺 ≤ 𝑘𝑘),), where 𝐺𝐺 is as set out in the question                      [½]

(iii)
From the tables:

                                                                                                    [1]

                                                                                                    [1]

(iv)
Pros:
The model is simple to understand                                                       [½]
It uses a tractable distribution, which means the owner may be able to use it more
easily                                                                                  [½]
The model produces non-negative accumulated values, which is a useful ‘inbuilt feature’ [½]

Cons:
The model is only valid over two-year periods                                             [½]
which is quite a long time for a single period…                                           [½]
and may not be useful for e.g. looking at the results on a common basis like annual       [½]
The model also assumes that the same rate applies across each year in the two-year
period                                                                                    [½]
But in practice, investment rates are sometimes correlated with rates in the past.        [½]
So that this assumption may not be reasonable                                             [½]
The Normal distribution might not be appropriate for modelling the annual return          [½]
for example because it understates the likelihood of extreme events                       [½]
The analyst is assuming a symmetrical distribution of returns                             [½]
which might not apply in practice                                                         [½]
                                                             [Marks available 6½, maximum 4]
                                                                                    [Total 13]




CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report



 This proved to be the most challenging question on the paper, perhaps because of the
 technical content or perhaps because of the algebra. The CM2 exam will always need to
 include some algebra and the examiners will mark it leniently as long as they can follow
 your workings.

 Parts (iii) and (iv) were answered better, although in part (iv), some candidates
 overfocused on the disadvantages of using a Normal distribution, when many of the marks
 on offer are for broader concepts as would be expected for a "discuss" question.



Q5
(i)
Under Q the expected return on the risky stock is the same as that on a risk-free
investment in cash                                                                       [1]
In other words, under the probability measure Q investors are neutral with regard to
risk: they require no additional return for taking on more risk                          [1]
Under the risk-neutral probability measure the discounted stock price is a martingale    [1]
                                                              [Marks available 3, maximum 2]

(ii)
We use the standard formula for q but with (1+i) instead of ei:
q = (1.04 - 0.8)/(1.25 - 0.8) = 8/15
So the risk neutral probability measure has:
An up jump probability of q = 8/15                                                                  [½]
A down jump probability of (1-q) = 7/15.                                                            [½]

(iii)
There are three possible stock prices at t=2
       1.     = $8 x 1.25 x 1.25 = $12.5
               [½]
       2.     = $8 x 1.25 x 0.8 = $8
               [½]
       3.     = $8 x 0.8 x 0.8 = $5.12
               [½]
The corresponding payoffs are:
1. $10
2. $0
3. $10                                                                                              [½]

So the option price is:
                                                                                                    [½]

                                                                                                  [½]
                                                                                                   [1]
                                                                                             [Total 7]




CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report



 This question was mainly answered well. The most common errors were treating the
 interest rate as continuously compounded in part (ii) instead of annually compounded.
 Although it was still possible to score full marks in part (iii) using the value of q from part
 (ii).

 Question 3 saw some similar issues so it is always worth checking the type of interest rate
 in each question.



Q6
(i)(a)
Consider two portfolios at time t as follows:

1. Consisting of a European Call Option with price 𝑐𝑐𝑡𝑡 , strike price K, strike price K and strike
date T,
on a non-dividend-paying stock with price 𝑆𝑆𝑡𝑡 , plus a cash lump sum equal to the
discounted present value of the strike price K                                                 [½]
2. Consisting of one share of the same non-dividend paying stock with price 𝑆𝑆𝑡𝑡 , plus a
European put option with price 𝑝𝑝𝑡𝑡 , strike price K and strike date T, on the same stock      [½]

If the stock price at the strike date exceeds the strike price, ie 𝑆𝑆𝑇𝑇 > 𝐾𝐾, then:
The call option will be exercised by handing over the cash, which will have
accumulated in value to K, giving a portfolio of one share worth 𝑆𝑆𝑇𝑇                               [½]
The put option will expire worthless and the second portfolio will consist of one share
worth S T                                                                                           [½]

If 𝑆𝑆𝑇𝑇 ≤ 𝐾𝐾 then:
The call option will expire worthless leaving a portfolio of cash worth K                           [½]
The put option will be exercised and the stock sold for K, again giving a portfolio of
cash worth K                                                                                        [½]

So irrespective of 𝑆𝑆𝑇𝑇 , the portfolios will have the same value at time T. Thus, if the
investment market is arbitrage free and there are no transaction costs or taxes, the two
portfolios must also have equal value now:
                                                                                                    [1]
This is the put-call parity relationship.

(b)
Partially differentiating this with respect to 𝑆𝑆𝑡𝑡 gives:
                                                                                                    [1]

(c)
Partially differentiating this again with respect to 𝑆𝑆𝑡𝑡 gives:
                                                                                                    [1]

(ii)
For a portfolio with n put options like P and one million shares to have a delta of zero
we need:

CM2A S2022                                                          © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report



                                                                                                     [1]


so                                                                                                   [1]

(iii)
                                                                                                    [½]
                                                                                                     [½]
As the original portfolio has a delta of zero we need:
                                                                                                     [1]
In addition, given that cash and the stock both have a gamma of zero, we require that:

                                                                                                     [1]
From above n = 4,716,981
Solving simultaneously:
C = 104,605,990                                                                                     [1]
D = -371,304,147                                                                                    [1]
                                                                                              [Total 13]

  In this question, most candidates correctly identified the portfolios in part (i), although not
  all were able to differentiate the put-call parity formula to derive the relationships for
  Delta and Gamma.

  Candidates' performance was lower in parts (ii) and (iii), but the stronger candidates
  were able to identify the portfolios needed.

  The question contained a minor typo before part (ii) where the colon should have been a
  comma, but candidate scripts suggest that the meaning was still clear.



Q7
(i)
Incremental Claim Amounts:                                                                           [1]
          0        1       2                3
  2018    1355     521     264              148
  2019    1456     551     225
  2020    1412     574
  2021    1347

Incremental Claim Amounts in mid-2021 prices:                                                        [1]
          0        1       2       3
 2018     1440.7 543.1     270.3   148.0
 2019     1517.8 564.2     225.0
 2020     1445.9 574.0
 2021     1347.0


CM2A S2022                                                           © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report




Cumulative Claim Amounts in mid-2021 prices:                                                        [1]
         0        1       2        3
 2018    1440.7 1983.9 2254.2 2402.2
 2019    1517.8 2082.0 2307.0
 2020    1445.9 2019.9
 2021    1347.0

Development Factors:
DF(0,1) = (1983.9 + 2082 + 2019.9) / (1440.7 + 1517.8+ 1445.9) = 1.3817                             [1]
DF(1,2) = (2254.2 + 2307) / (1983.9 + 2082) = 1.1218                                                [1]
DF(2,3) = 2402.2 / 2254.2 = 1.0657                                                                  [1]

Completed Cumulative Claims in mid-2021 prices:                                                     [1]
         0       1        2        3
 2018
 2019                              2458.5
 2020                     2266.0 2414.7
 2021            1861.2 2087.9 2225.0

Incremental Claims in mid-2021 prices:                                                              [1]
          0        1        2        3
 2018
 2019                                151.5
 2020                       246.1    148.8
 2021              514.2    226.7    137.1

Incremental Claims adjusted for inflation:                                                          [1]
          0        1         2         3
 2018
 2019                                  155.7
 2020                        253.0     156.9
 2021              528.6     239.2     147.3

Outstanding Claims = 1,480.68                                                                       [1]

(ii)
To check how well the inflation adjusted chain ladder technique performs:
The cumulative claim payments in years for which data is already available can be
estimated using the development factors calculated in (i)                                           [1]
These estimates can be compared to the actual claim values and the differences can be
reviewed to assess if errors are large enough to suggest that the model is inaccurate               [1]
Similarly, the actual claims experience for each accident year in 2022 could be
compared to the estimates produced by the model                                                     [1]
The model assumes claims arise uniformly throughout the year. Depending on the type
of general insurance this may not be valid and therefore the inflation adjustments are
inaccurate                                                                                          [1]

CM2A S2022                                                          © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


                                                                  [Marks available 4, maximum 2]

(iii)
The reduction in staff might lead to increased claim settlement times.                      [½]
It would be sensible to reflect this in the estimate of future claim payments               [½]
The insurer may need to adjust the calculated development factors in the light of this
information                                                                                 [1]
An increased number of development years may be required                                    [½]
Claims might increase in absolute terms as claims underwriting might be less stringent [½]
                                                                 [Marks available 3, maximum 2]

(iv)(a)
1.75 * ((528.6 + 253.0 + 155.7) * 1.03^-0.5 + (239.2+156.9) * 1.03^-1.5 + 147.3 * 1.03^-2.5
                                                                                        [½]
= 2,518.75                                                                              [½]

(iv)(b)
1.75 * ((528.6 + 253.0 + 155.7) * 1.04^-0.5 + (239.2+156.9) * 1.04^-1.5 + 147.3 * 1.04^-2.5
                                                                                        [½]
= 2,495.69                                                                              [½]

(v)
(2518.74 - 2495.69) / 2518.74 = 0.01*D                                                              [½]
So D = 0.92 years                                                                                   [½]

(vi)
The asset should deliver at least the rate of return used to calculate the reserve          [1]
The asset should have an interest rate duration of around 0.92 years                        [1]
The asset might also need to have inflation sensitivity to minimise the insurer’s exposure
to this                                                                                     [1]
The asset should have minimal probability of default                                        [1]
The asset should be in the same currency as the reserve and expected claims                 [1]
The asset should be liquid enough to pay claims when needed                                 [1]
                                                                [Marks available 6, maximum 4]
                                                                                      [Total 21]

 Candidates performed well on part (i) of this question, with some mistakes creeping in but
 only being penalised in the specific step where they appeared.

 In parts (ii) and (iii) often needed candidates to make more distinct points to score full
 marks. The later question parts saw generally lower marks awarded, but most candidates
 made some good points in part (vi) and those that scored highest were those who were
 able to think broadly around the topic.



Q8
(i)
We know that E i = r + β i * (E M - r)                                                              [½]
So 3.5 = r + 1.5 * (E M - r)                                                                        [½]

CM2A S2022                                                          © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report


And 2.2 = r + 0.2 * (E M - r)                                                                        [½]

Subtracting the second equation from the first:
3.5 - 2.2 = 1.3 * (E M - r)                                                                          [½]
So E M - r = 1                                                                                       [½]

Also subtracting 7.5 times the second equation from the first:
3.5 - 7.5 * 2.2 = -6.5r                                                                              [½]
So r = 2%                                                                                            [½]
And E M = 3%                                                                                         [½]

(ii)
MPR = (E M - r) / σ M = (3% - 2%) / 10% = 0.1                                                        [1]

(iii)
Every asset must have an expected return at least as high as the risk-free rate                 [½]
So the return on asset B must increase to at least 3%                                           [½]
Intuitively if the risk-free rate increases, then investors will require a higher return on
risky assets as well                                                                            [½]
If the market price of risk remains unchanged, then the returns on all assets might just
increase by 1%                                                                                  [½]
                                                                                           [Total 7]

 Candidates performed well in this question as it was a straightforward question and saw
 some of the highest average marks in this paper. Most candidates correctly solved the
 risk-free rate and market return, and most correctly identified the likely impacts of the
 risk-free rate increasing.



Q9
(a)
Var A (3B%) = 8.64%%                                                                                 [½]
Var B (4P%) = 32%%                                                                                   [½]

(b)
µ A = 3x4x0.4 = 4.8%                                                                                 [1]
                                2                    2
Semi-variance A = (4.8 - 0) x 81/625 + (4.8 - 3) x 216/625 = 4.106%%                                 [1]
µ B = 4x2 = 8%                                                                                       [1]
Semi-variance B (4P%) = (8 - 0)2 x e-2 + (8 - 4)2 x e-2 x 21 / 1! = 12.992%%                         [1]

(c)
Prob A (3B < 4) = Prob A (B < 1.333) = Prob A (B = 0) + Prob A (B = 1) = 0.4752                      [1]
Prob B (4P < 4) = Prob B (P < 1) = Prob B (P = 0) = 0.13534
         [1]
                                                                                               [Total 7]




CM2A S2022                                                           © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2022 - Examiners’ Report



 Most candidates answered part (a) of this question correctly, but parts (b) and (c) proved
 more of a challenge. Some candidates used their answer from part (a) to answer part (b)
 and this was also a valid approach.

                                                                                   [Paper Total 100]

                        END OF EXAMINERS’ REPORT




CM2A S2022                                                          © Institute and Faculty of Actuaries
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


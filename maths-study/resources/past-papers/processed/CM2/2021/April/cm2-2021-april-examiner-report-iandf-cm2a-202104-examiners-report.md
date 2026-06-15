---
normalized_id: cm2-2021-april-examiner-report-iandf-cm2a-202104-examiners-report
exam_code: CM2
year: 2021
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Apr21/IandF_CM2A_202104_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2021-april-examiner-report-iandf-cm2a-202104-examiners-report

   INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                         April 2021

                 Subject CM2 – Financial Mathematics and
                             Loss Reserving
                             Core Principles
                                Paper A

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




                                                            © Institute and Faculty of Actuaries
   CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


  A. General comments on the aims of this subject and how it is marked

  1. The aim of Subject CM2 is to develop the necessary skills to construct asset liability
     models, value financial derivatives and calculate reserves for insurance or guarantees.
     These skills are also required to communicate with other financial professionals and
     to critically evaluate modern financial theories.

  2. The marking approach for CM2 is flexible in the sense that different answers to those
     shown in the solution can earn marks if they are relevant and appropriate. Marks for
     the methodology are also awarded including marks for using the right method even if
     an error in an earlier part of the question prevents the final answer from being correct.
     The marking focusses on rewarding candidates’ understanding of the concepts,
     including their ability to articulate algebra and arguments clearly.


  B. Comments on candidates’ performance in this diet of the examination.

  1. Some of the questions required candidates to apply concepts from the Core Reading
     to scenarios they might not have seen before and the stronger candidates scored
     highly here. Average marks were a little lower than the last couple of sittings but
     within the historic norm for the subject.

  2. Because of the format of the exam paper there was less algebra, but even so there was
     evidence that some candidates found the algebra tricky when answering questions in
     Word. The examiners were lenient with notation when marking these questions.
     Candidates should note that rearranging and solving algebra on screen can sometimes
     be hard if you are used to using pen and paper, so this is a worthwhile skill to practice
     before the exams.



  C. Pass Mark

       The Pass Mark for this exam was 60.
       1,309 candidates presented themselves and 445 passed.




CM2A A2021                                                             © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


Solutions for CM2A - April 2021

Q1
(i)(a)
X = 720/800 – 1 = -10%                                                                                   [1]
P(X<-10%) = P(Z<(-10% - 7%)/5.5%) = P(Z<-3.09) = 0.1%                                                    [1]

(b)
P(Z<(t – 7%)/5.5%) = 0.005                                                                             [½]
(t – 7%)/5.5% = -2.5758                                                                                [½]
t = -7.1669%                                                                                            [1]
800 * (1-7.1669%) = $742.66                                                                             [1]

(ii)
P(X≤-7.1%) = P(Z≤-2.56)
=0.00518                                                                                                 [1]
P(X>7%) = 0.5 (as 7% is the mean)                                                                        [1]
P(-7.1%<X≤7%) = 1-0.5-0.00518 = 0.49482                                                                  [1]
Expected pay out = 730*0.00518 + 750*0.49482 + 962*0.5 = $855.90                                         [1]

(iii)(a)
0%                                                                                                       [1]

(b)
Probability pay out is ≤ 730 is 0.52% therefore the 99.5% VaR is $730                                    [1]

(iv)
The expected return from investing in the index is 800*1.07 = $856                           [½]
So the expected returns are very similar for each investment                                 [½]
Based on the expected shortfall below $720 the derivative is less risky as there is no
possibility of this                                                                          [½]
If the investor has a utility function with a discontinuity at the minimum required return then
he may base his decision on this measure                                                     [½]
The 99.5% VaR is higher (i.e. a greater loss) for the derivative, so based on this measure the
investor may prefer to invest in the stock index                                              [1]
The pay off on the derivative is significantly higher than the index when the return is slightly
above the mean, so the investor may prefer this                                               [1]
                                                                 [Marks available 4, maximum 3]
                                                                                      [Total 14]


    This question was answered well on the whole, with many candidates scoring full
    marks in parts (i) to (iii). Part (iv) was not answered quite so well, with some
    candidates not making enough distinct points for the number of marks on offer.



Q2
(i)
A European option is an option that can only be exercised at expiry                                    [½]
An American option is one that can be exercised on any date before its expiry                          [½]

CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


(ii)
Risk neutral ‘up’ move probability q = (er – d) / (u – d) = 0.2 / 0.45 = 0.44                            [1]




                                                          for all pre-dividend share prices in tree [1]
                                                              for correct allowance for dividends [1]
                                                                       for all option values in tree [1]

Final option value = 12.54                                                                               [1]

(iii)
Using step 1 in the tree: First we check that ud = 1                                        [½]
u = 1.25 = eσ*sqrt(3/12)
Re-arranging and solving for σ = 44.6%.                                                      [2]
[Note: The question asked for the volatility of the share price implied by the option price and
students were also awarded marks for calculating an implied volatility using the Black-
Scholes model.]
                                                             [Marks available 2½, maximum 2]

(iv)
The risk neutral approaches offers a convenient computational tool                     [1]
Investors are assumed to be indifferent to risk                                       [½]
All assets are assumed to earn a risk-free return                                     [½]
No assumptions need to be made about an asset’s expected return                        [1]
The price produced is the no-arbitrage price                                          [½]
A wide range of derivatives can be priced in this way                                 [½]
                                                            [Marks available 4, maximum 2]

(v)
The Black-Scholes model assumes that the share price follows a lognormal distribution
whereas the price here is binomial                                                     [1]
The Black-Scholes model assumes that dividends are continuous whereas here there is a one-
off assumed dividend at a set time                                                     [1]
The Black-Scholes constant volatility assumption is flawed here as well because of the
dividend                                                                               [1]
                                                            [Marks available 3, maximum 2]




CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


(vi)
It could be optimal to exercise the American call option before maturity in order to capture
the dividend                                                                                 [1]
This is because you have to own the stock on the ex-dividend date in order to receive the
dividend                                                                                    [½]
The ability to exercise represents an additional benefit of holding the American-style call
option compared to the European-style call option                                           [½]
Therefore, the value of an American-style call option will be higher than the equivalent
European-style call option                                                                  [½]
                                                             [Marks available 2½, maximum 2]

(vii)
Exercising the put option early will never be optimal. No interest will be earned on the
proceeds for doing so                                                                       [1]
Therefore, we can apply put-call parity:
C – P = S – K + r – D => P = 12.54 – 120 + 120 + 4 = 16.54                                  [1]
                                                                                     [Total 16]


   This question was answered fairly well by most candidates. Many did not manage to
   allow for the dividend payment correctly but it was still possible to earn most of the
   marks on offer. Some of the answers provided to parts (v) and (vi) were rather
   generic and needed to be tailored more to the scenario in the question to score full
   marks.



Q3
(i)(a)
Asset A
Variance = 22 * npq = 5.76%%                                                                             [1]
Asset B
Variance = 1.52 * σ2 = 9%%                                                                               [1]

(b)
Asset A
P(2X<3) = P(X<1.5) = P(X≤1) = 0.2333                                                                     [1]
Asset B
P(1.5Y<3) = P(Y<2) = P(Z<-0.6) = 0.27425                                                                 [1]

(ii)
Mean returns: Asset A = 2*6*0.4 = 4.8%, Asset B = 1.5*3.2 = 4.8%.                         [1]
Both assets have same mean therefore investor will choose the asset with the lowest variance.
                                                                                          [1]
The investor will choose Asset A.                                                         [1]
The quadratic utility function also implies variance as the risk measure                  [1]
                                                               [Marks available 4, maximum 3]




CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


(iii)(a)
If the assets are independent then a combination of both assets will give a lower variance than
either asset on its own                                                                      [1]
But with the same expected return                                                           [½]
So the investor would prefer to invest partially in each asset                              [½]

(b)
If the assets exhibit correlation and short selling is not allowed then the variance of a
combined portfolio will be higher than if they were uncorrelated                               [1]
But it will still be lower than investing in a single asset                                   [½]
So the investor would still prefer to invest partially in each asset                          [½]
Or, if short selling is allowed, the investor could short one asset in order to achieve a lower
portfolio variance                                                                             [2]
                                                     [Marks available 4, maximum 2 for part (b)]
                                                                                        [Total 11]

   Parts (i) and (ii) of this question were answered well, with many candidates scoring
   full marks. Part (iii) caused more difficulty with many candidates failing to identify
   the opportunity to reduce risk through diversification, with some risk reduction still
   possible if the assets are correlated as long as the correlation is not perfect.



Q4
(i)
Similarities
Both methods are based on the same assumption that payments from each accident year will
develop in the same way.                                                                   [½]
Or in effect, the same development factors are used to project outstanding claims for each
accident year                                                                               [1]
Changes in the rate at which claims emerge can only be incorporated by adjusting those
development factors                                                                        [½]
Both methods assume that the first year is fully run off                                   [½]

Differences
The basic chain ladder method assumes that weighted average past inflation will be repeated
in the future                                                                               [½]
The inflation-adjusted approach does not do this and instead modifies historic claims to be
consistent (in real terms) with one another                                                 [½]
It does this with the use of historic inflation rates, which are a key input to the model   [½]
However, the method does not automatically allow for future inflation                       [½]
And this is normally given as an input for inflation-adjusted chain ladder                  [½]
                                                                  [Marks available 5, maximum 3]

(ii)
The advantages of inflation-adjusted chain ladder are its ability to make all history consistent
in real terms                                                                                [½]
This will be most useful when inflation has historically been large                           [1]
so that the adjustment will be bigger                                                        [½]


CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


For example if inflation has historically been 0.5% for several years and is expected to stay at
that rate for the foreseeable future, there may be very little reason to use inflation-adjusted
chain ladder over basic chain ladder                                                            [1]
                                                                 [Marks available 3, maximum 2]

(iii)
Both methods assume that all years behave and develop identically                          [1]
So they should not be used in situations where this is less likely to be true             [½]
For example if the business entity has changed from start-up to major market player… [½]
… or one year experienced particularly severe claims due to a catastrophe                 [½]
                                                              [Marks available 2½, maximum 2]
                                                                                     [Total 7]


   This question saw a variety of responses, with many candidates making some valid
   points but not enough for all of the marks on offer. Most candidates gave some
   credible examples for when the inflation-adjusted method might be the best method to
   use, which was encouraging.



Q5
(i)
For a utility function to be valid, it must respect the fact that the investor is non-satiated         [½]
This is equivalent to requiring that 𝑈𝑈′(𝑤𝑤)>0                                                         [½]
Substituting the given form of (𝑤𝑤) we find the following:
𝑈𝑈′(𝑤𝑤) = 1+2𝑑𝑑𝑤𝑤 > 0                                                                                  [½]
𝑤𝑤 < −1 / 2𝑑𝑑                                                                                          [½]

(ii)
For a utility function to be valid, it must also respect the investor being risk-averse                [½]
This is equivalent to requiring that 𝑈𝑈′′(𝑤𝑤)<0                                                        [½]
Substituting the given form of (𝑤𝑤) we find the following:
𝑈𝑈′′(𝑤𝑤) = 2𝑑𝑑 < 0, which requires that 𝑑𝑑 is negative                                                   [1]

(iii)
If the investor buys 7 boxes of vegetables, they have £30 remaining in cash                            [½]
For each of the payoffs, their final wealth will be:




                                                                                  [½ per correct value]


CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


So their expected utility is:
 (𝑤𝑤) = 0.25(240 + 114 + 100 + 33.5) + 0.25(2402 + 1142 + 1002 + 33.52)                                 [1]
(𝑤𝑤) = 121.875 + 20429.5625𝑑𝑑 = 50                                                                     [½]
𝑑𝑑 = (50−121.875) / 20429.5625 = −0.003518                                                              [1]

(iv)
(100) = 100 − 0.003518∗1002 = 64.82                                                                      [1]

(v)
The investor bought the vegetables despite this strategy having lower expected utility
according to the utility function they chose                                                  [½]
The investor is risk-averse, so they should make the decision with higher expected utility [½]
So the utility function may not be appropriate for the investor                               [½]
because it is not consistent with the decisions they are making                               [½]
or because for this decision the investor is not as risk-averse i.e. they may be risk-seeking
when it comes to buying these vegetable                                                       [½]
Also, the maximum wealth this utility function can be used with is £142                       [½]
The investor can easily exceed this wealth in the highest payoff scenario                     [½]
                                                              [Marks available 3½, maximum 2]
                                                                                        [Total 12]


   Parts (i) and (ii) of this question were answered well with many candidates scoring
   full marks. Part (iii) caused more difficulty and many candidates were not able to
   correctly calculate the wealth in each scenario, which then led to finding the wrong
   value for d. Parts (iv) and (v) were answered well on the whole and it was possible to
   score full marks here even if part (iii) had been answered incorrectly.



Q6
(i)
𝑐𝑐 denotes the rate of premium income of the insurer.                                                    [1]

(ii)
From the tables, (𝑥𝑥)=(1−𝑥𝑥)−2                                                                           [1]

(iii)
Given the information in the question:
(1−𝑅𝑅)2=𝜇𝜇+𝑐𝑐𝑅𝑅                                                                                        [½]
𝜇𝜇=(𝜇𝜇+𝑐𝑐𝑅𝑅)(1−𝑅𝑅)2=(𝜇𝜇+𝑐𝑐𝑅𝑅)(1−2𝑅𝑅+𝑅𝑅2)                                                               [½]
𝜇𝜇=𝜇𝜇+(𝑐𝑐−2𝜇𝜇)+𝑅𝑅2(𝜇𝜇−2𝑐𝑐)+𝑐𝑐𝑅𝑅3                                                                       [½]
0=(𝑐𝑐𝑅𝑅2+𝑅𝑅(𝜇𝜇−2𝑐𝑐)+(𝑐𝑐−2𝜇𝜇))                                                                           [1]
So 𝑅𝑅=0 or 𝑐𝑐𝑅𝑅2+(𝜇𝜇−2𝑐𝑐)+(𝑐𝑐−2𝜇𝜇)=0                                                                   [½]
As 𝑅𝑅>0, we can reject the former so 𝑐𝑐𝑅𝑅2+(𝜇𝜇−2𝑐𝑐)+(𝑐𝑐−2𝜇𝜇)= 0                                         [1]

(iv)
𝑅𝑅2+1.5𝑅𝑅−6=0                                                                                        [1]
The roots are R = -3.312 or R = 1.812                                                                [1]
                                                                                                [Total 8]

CM2A A2021                                                              © Institute and Faculty of Actuaries
   CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report




   This question was mostly answered well, with many candidates scoring full marks or
   close to full marks. The most common areas where marks were lost were not applying
   the MGF to the specific scenario in (ii) and not noting that we can divide by R
   because it’s greater than zero in (iii).



Q7
(i)
This is an example of self-serving bias                                               [½]
Where people credit favourable events to their own credit or skills                   [½]
while attributing negative events to external forces                                  [½]
                                                           [Marks available 1½, maximum 1]

(ii)
 This is an example of confirmation bias                                                  [½]
Where people look for evidence that confirms their point of view                          [½]
or dismiss evidence that does not                                                         [½]
It is likely the investor is also being overconfident                                     [½]
they are overestimating their own skills and abilities to pick stocks                     [½]
because they are claiming they have ‘very strong’ skills                                  [½]
but have lost half the value of a quarter of their portfolio                              [½]
In fact, confirmation bias is a specific manifestation of overconfidence                  [½]
                                                                [Marks available 4, maximum 2]

(iii)
There is status quo bias here                                                                 [½]
the team is sticking with the current situation                                               [½]
even in the face of a favourable alternative                                                  [½]
The team are also showing herd behaviour                                                      [½]
They are following/mimicking the actions of others                                            [½]
in order to manage an uncertain situation                                                     [½]
                                                                    [Marks available 3, maximum 2]

(iv)
The actuary is anchoring and adjusting                                                     [½]
They have started with an idea of an answer                                                [½]
(in this case the previous model output)                                                   [½]
and are then adjusting away from this to arrive at their final judgement                   [½]
The actuary is also overconfident                                                          [½]
because they are offering strong critique of an area in which they have no expertise       [½]
The actuary is arguably also following status quo bias                                     [½]
again because they are seeking to stay with the current model output                       [½]
They may also be engaging in familiarity bias                                              [½]
where the ‘known’ model is preferred to the ‘new’ one                                      [½]
                                                                [Marks available 5, maximum 3]
                                                                                      [Total 8]




CM2A A2021                                                             © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report



   This question saw plenty of good answers from candidates, but few made enough
   distinct points to score full marks. Some candidates gave generic definitions of each
   of the biases without applying them to the specific scenarios in the question, and this
   was not enough to score full marks.



Q8
(i)(a)
No time has elapsed and we know that the insurer is currently solvent                                  [½]
So the probability of solvency is 1                                                                    [½]

(b)
(𝑆𝑆𝑜𝑜𝑙𝑙𝑣𝑣𝑒𝑒𝑛𝑛𝑐𝑐𝑦𝑦)=(𝐸𝐸𝑥𝑥𝑝𝑝(1)<3)                                                                       [½]
Using the tables for the CDF of the Exponential distribution, this is 1−𝑒𝑒−1∗3 = 0.95021               [½]

(ii)
The answer to part (a) would be unchanged                                                              [½]
The answer to part (b) would increase                                                                  [½]

(iii)
There are many issues with the modelling approach the insurer is proposing:
The insurer specialises in catastrophe insurance                                           [½]
so the Exponential distribution may not be appropriate for this business                   [½]
for example because it does not have the high kurtosis/’fat tails’ commonly seen in
catastrophe events                                                                          [1]
for example because catastrophe events tend to be ‘low frequency, high impact’, so
modelling them with a continuous distribution may not even be appropriate in the first place
                                                                                            [1]
The insurer is also assuming that net claims are independent in each annual period         [½]
In practice this is unlikely to be true                                                    [½]
because the number/size of claims are likely to be highly correlated to the previous year’s [1]
The insurer has also assumed its initial surplus is constant                               [½]
in practice it could invest these funds to generate return at e.g. the risk-free rate      [½]
Solvency is only assessed on an annual basis, but ruin can occur in reality at any time.   [½]
                                                               [Marks available 6½, maximum 4]
                                                                                      [Total 7]


   Parts (i) and (ii) of this question were answered well by many candidates. Part (iii)
   generated lots of good ideas but few candidates scored full marks. To score highly in
   part (iii) needed plenty of ideas and they needed to be specific to the scenario in the
   question.




CM2A A2021                                                              © Institute and Faculty of Actuaries
      CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


Q9
(i)

                                                                                                           [1]

(ii)
The expected return on the portfolio is:

                                                                                                         [½]

Substituting 𝑥𝑥𝐴𝐴=1−𝑥𝑥𝐵𝐵 into this gives:

                                                                                                         [½]

Rearranging this gives:

                                                                                                         [½]

We also have:

                                                                                                         [½]


                                                                                                         [½]


                                                                                                         [½]

Substituting our formula for 𝑥𝑥𝐴𝐴 into this gives the equation of the efficient frontier as:

                                                                                                         [½]

This is a straight line in 𝐸𝐸−𝜎𝜎 space                                                                   [½]
Furthermore:
when 𝐸𝐸=0.05,𝜎𝜎=0 and                                                                                    [½]
when 𝐸𝐸=0.075,𝜎𝜎=0.1 as required                                                                         [½]

(iii)
Asset B is risk-free, so it has zero standard deviation, and any combination of Asset B and a
portfolio of assets involving A and C only will lie somewhere along the straight line in the 𝐸𝐸−
𝜎𝜎 space joining Asset B and the other portfolio.                                           [1]

The efficient frontier involving all three assets will be the one that maximises the market
price of the risk (MPR). This must be the straight-line through Asset B that is tangential to
the efficient frontier involving Assets A and C only.                                         [1]

At the point of tangency:

                                                                                                         [½]

CM2A A2021                                                                © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report




                                                                                                       [½]

Here:

                                                                                                       [½]



                                                                                                       [½]

So, the equation of the efficient frontier involving all three assets is:


                                                                                                         [1]

When 𝜎𝜎=0.1:


                                                                                                       [½]

So the efficient frontier involving all three assets passes through the point (0.1, 0.0769) as
required.                                                                                      [½]
                                                                                        [Total 12]


   This was probably the trickiest question in the paper and few candidates scored really
   strongly. A number of candidates worked through the algebra in parts (ii) and (iii)
   with some success but didn’t explain their steps clearly or skipped some key steps
   which meant they scored well but did not receive full marks.



Q10
(i)(a)
For all possible returns on the portfolio (𝑥𝑥)                                                         [½]
B is at least as likely as A to produce a return smaller than that 𝑥𝑥                                  [½]
For some return 𝑥𝑥, B is more likely to produce a return smaller than that 𝑥𝑥                          [½]

(b)
A non-satiated investor will prefer portfolio A because they can be sure that it improves) their
expected return and expected utility                                                        [½]

(ii)
For second order stochastic dominance to matter, the investor must be risk-averse                      [½]
and prefer more to less (be non-satiated)                                                              [½]

(iii)
The requirement for second order stochastic dominance is that:

                                                                                                       [½]

CM2A A2021                                                              © Institute and Faculty of Actuaries
    CM2A - Financial Mathematics and Loss Reserving - Core Principles - April 2021 - Examiners’ report


For all values of 𝑥𝑥, with strict inequality holding for at least one 𝑥𝑥. 𝑎𝑎 is the lowest value either
portfolio can take.                                                                                [½]

Given the form of B, many distributions meet this condition – a simple example is 𝐴𝐴 offering
a return of 11% guaranteed (or any value above 10%). This needs to be checked only at -5%
(the integral of A is 0, of B it is 0.5), 10% (at A it is still 0, at B is it 1) and 11% (1 for both A
and B)                                                                                              [1]
                                                                                              [Total 5]


   Parts (i) and (ii) of this question were answered fairly well, though part (i) required
   an explanation in words so candidates who answered it with only algebra did not
   score highly. Part (iii) required an example distribution for full marks, and there
   were lots of possible options here but only the stronger students score full marks.


                                                                                     [Paper Total 100]



                        END OF EXAMINERS’ REPORT




CM2A A2021                                                              © Institute and Faculty of Actuaries


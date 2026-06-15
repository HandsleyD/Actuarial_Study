---
normalized_id: cm2-2021-september-examiner-report-iandf-cm2a-202109-examiner-report
exam_code: CM2
year: 2021
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep21/IandF_CM2A_202109_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2021-september-examiner-report-iandf-cm2a-202109-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                     September 2021

       CM2 – Financial Engineering and Loss Reserving
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




Sarah Hutchinson
Chair of the Board of Examiners
December 2021



CM2A S2021                                                        © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


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


   B. Comments on candidate performance in this diet of the examination.

   This exam was sat online and as a result most questions focussed on applying bookwork
   and analysing the results. Some of the questions required candidates to apply concepts
   from the Core Reading to scenarios they might not have seen before and the stronger
   candidates scored highly here. Average marks were fairly high relative to recent sittings
   but within the historic norm for the subject.

   There was evidence that some candidates found algebra tricky when answering questions
   in Word. The examiners were lenient with notation when marking these questions, but
   some candidates missed out on scoring full marks through not explaining their steps.
   Candidates should note that a pure algebra answer might not always be enough to score
   full marks.

   Candidates should note that rearranging and solving algebra on screen can sometimes be
   hard if you are used to using pen and paper, so this is a worthwhile skill to practice before
   the exams.


   C. Pass Mark

   The Pass Mark for this exam was 63
   1,398 presented themselves and 682 passed.




CM2A S2021                                                             © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Solutions for Subject CM2A – September 2021

Q1
(i)
At the end of one year the investment will be worth 100(𝑥𝑥 + (1 − 𝑥𝑥) ∗ 1.5) = 150 − 50𝑥𝑥
with probability 0.6                                                                    [½]
or 100(𝑥𝑥 + (1 − 𝑥𝑥) ∗ 0.5) = 50 + 50𝑥𝑥 with probability 0.4                            [½]

Therefore, the expected utility is 0.6 ∗ ln(150 − 50𝑥𝑥) + 0.4 ∗ ln(50 + 50𝑥𝑥)                           [1]

(ii)
                                                 0.6            0.4
Differentiate expected utility: U’(x) = −50 ∗ 150−50𝑥𝑥 + 50 ∗ 50+50𝑥𝑥                                   [1]
Set equal to zero and solve for x:
0.4(150-50x)=0.6(50+50x)                                                                                [1]
=> x=0.6                                                                                                [1]
Check that this is a maximum:
                       0.6                0.4
U’’(x) = - 2500 ∗ (150−50𝑥𝑥)2 − 2500 ∗ (50+50𝑥𝑥)2 < 0                                                   [1]
Therefore, the investor should invest $60 in Asset A and $40 in Asset B                               [1]
                                                                                                 [Total 7]

 Part (i) of this question was answered fairly well, but some candidates failed to include
 the 100 initial wealth in the two scenarios correctly. When calculating expected utility it
 is important to calculate the total wealth in each scenario before calculating the expected
 utility of this wealth. Part (ii) was answered well though not all candidates checked the
 second derivative to score full marks.



Q2
(i)(a)
                                         1
For the exponential distribution, mean = 𝜆𝜆 = 0.5           [1]
                                         𝜎𝜎2          0.8332
For the lognormal distribution, 𝑒𝑒 𝜇𝜇+ 2 = 𝑒𝑒 −1.04+    2      = 0.500 (3𝑠𝑠𝑠𝑠)                          [1]

(b)
                                         1
For the exponential distribution, var = 𝜆𝜆2 = 0.25
                                                                                                        [1]
For the lognormal distribution,
           2      2                     2         2
 𝑒𝑒 2𝜇𝜇+ 𝜎𝜎 �𝑒𝑒 𝜎𝜎 − 1� = 𝑒𝑒 −2.08+0.833 �𝑒𝑒 0.833 − 1� = 0.250 (3𝑠𝑠𝑠𝑠)                                 [1]
(c)
For the exponential distribution, the CDF is 𝐹𝐹(𝑥𝑥) = 1 − 𝑒𝑒 −2𝑥𝑥                                       [1]
                                                                1
Inverting this and solving, the 99th percentile is at 𝑥𝑥 = − 2 log(0.01) = 2.30259                      [1]

For the lognormal distribution:
𝑃𝑃(𝑋𝑋 < 𝑥𝑥) = 0.99
𝑃𝑃(log(𝑋𝑋) < log(𝑥𝑥)) = 0.99                                                                            [½]
     𝑙𝑙𝑙𝑙𝑙𝑙𝑙𝑙−(−1.04)   log(𝑥𝑥)−(−1.04)
𝑃𝑃 �                  <                � = 0.99                                                         [½]
        0.833             0.833



CM2A S2021                                                               © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


log(𝑥𝑥)+1.04
     0.833
               = 2.3263                                                                                [½]
         0.833∗2.3263−1.04
𝑥𝑥 = 𝑒𝑒                      = 2.45 (3𝑠𝑠𝑠𝑠)                                                            [½]

(ii)
The two distributions have the same mean and variance                                                  [½]
But different 99th percentiles                                                                         [½]
This shows that it is important to consider not just mean and variance                                 [½]
But also tail behaviour of a distribution                                                              [½]

(iii)
The lognormal distribution has a higher 99th percentile, which suggests it models the
tails of the security’s behaviour more appropriately than the exponential distribution        [1]
The lognormal distribution has more parameters, so may be more flexible when fitting
to historic data                                                                              [1]
The lognormal distribution in general is a more well-established choice in financial
modelling and can lead to useful frameworks like Black-Scholes valuation                      [1]
The exponential distribution does not have such a framework                                   [1]
Part (i) shows that the lognormal distribution has the heavier upper tail, and this might
be a better fit to the heavy upper tail of security prices                                    [1]
Part (i) does not consider the lower tail of the distributions, but the density function for
the exponential distribution is largest for the smallest values, which does not fit the
observation that security prices cluster around the mean                                      [1]
                                                                 [Marks available 6, maximum 2]
                                                                                        [Total 12]

 Part (i) of this question was answered well by most candidates. Parts (ii) and (iii) tended
 to be weaker, with many candidates listing generic points about the exponential and
 lognormal distributions with not enough focus on the specific question asked. These
 points often scored some marks but could have scored more if tailored to the question.



Q3
For an exponential distribution E(X)=1/α. The mean is 0.5 so α = 2                                     [1]
R is given by 𝜆𝜆𝑀𝑀𝑋𝑋 (𝑅𝑅) = 𝜆𝜆 + 𝑐𝑐𝑐𝑐                                                                  [1]
Using 𝑐𝑐 = (1 + 𝜃𝜃)𝜆𝜆𝜆𝜆1 gives 𝑀𝑀𝑋𝑋 (𝑅𝑅) = 1 + (1 + 𝜃𝜃)𝑚𝑚1 𝑅𝑅                                          [1]
                                              2
For the exponential distribution 𝑀𝑀𝑋𝑋 (𝑅𝑅) = 2−𝑅𝑅 therefore                                            [1]
 2
2−𝑅𝑅
    = 1 + 1.1 ∗ 0.5 ∗ 𝑅𝑅                                                                               [½]
𝑅𝑅(0.1 − 0.55𝑅𝑅) = 0                                                                                   [½]
𝑅𝑅 = 0.1818                                                                                            [1]

 This question was answered well on the whole, even candidates who reached the wrong
 final answer did manage to score partial marks for the early steps in the process.




CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Q4
(i)
𝑐𝑐𝑡𝑡 ≤ 𝑆𝑆𝑡𝑡                                                                                            [1]

(ii)
At time T, the call either expires worthless or is exercised                                           [½]
if the call is not exercised, then this is because 𝐾𝐾 > 𝑆𝑆𝑇𝑇 .                                         [½]
Then the value of the portfolio is 𝐾𝐾 > 𝑆𝑆𝑇𝑇                                                           [½]
If the call is exercised, then the portfolio value is 𝑆𝑆𝑇𝑇 − 𝐾𝐾 + 𝐾𝐾 = 𝑆𝑆𝑇𝑇                            [½]
In either case, the portfolio value is greater than or equal to the share                              [1]

(iii)
The portfolio is greater than or equal to the value of the share at time 𝑇𝑇.
By the principle of no arbitrage, it must also be the case that at time 𝑡𝑡, the portfolio
value is greater than or equal to the value of the share: 𝑐𝑐𝑡𝑡 + 𝐾𝐾𝑒𝑒 −(𝑇𝑇−𝑡𝑡)𝑟𝑟 ≥ 𝑆𝑆𝑡𝑡                [1]

(iv)
An American option is worth at least as much as a European option                           [½]
Because an American option includes a European in its exercise points                       [½]
From part (iii), we know that a European option exceeds 𝑆𝑆𝑡𝑡 − 𝐾𝐾𝑒𝑒 (𝑇𝑇−𝑡𝑡)𝑟𝑟               [½]
so an American call’s value exceeds this too                                                [½]
If this option were exercised, it would pay out max(𝑆𝑆𝑡𝑡 − 𝐾𝐾, 0)                           [½]
If 𝑆𝑆𝑡𝑡 > 𝐾𝐾, then the exercise value is less than the bound                                [½]
So the investor would not exercise this option                                              [½]
because it would be better to sell it instead                                               [½]
If 𝑆𝑆𝑡𝑡 ≤ 𝐾𝐾, then the option would not be exercised because it is worthless                [½]
So in no situation is it optimal for the investor to exercise the option                    [½]
                                                                 [Marks available 5, maximum 4]
(v)
The investor may now choose to exercise the option early                                    [1]
The formula in part (iii) does not apply                                                    [½]
Because the share accumulates dividends, which was not previously allowed for               [½]
Early exercise may also occur if the investor wants to take part in future dividends        [½]
This is especially likely to occur if the share is paying out large dividends               [½]
                                                                 [Marks available 3, maximum 2]
                                                                                      [Total 11]

  This question was answered well by many candidates. Where marks were lost this tended
  to be through not explaining steps clearly enough in part (ii) or not giving enough distinct
  points in part (iv).



Q5
(i)
(10/80)*5% + (50/80)*10% + (20/80)*x = R M                                                             [1]
x – 3% = 2(RM – 3%) => x = 2*RM – 3%                                                                   [1]
=> 10*5% + 50*10% + 20*(2*RM – 3%) = 80* R M                                                           [1]
=> R M = (10*5% + 50*10% - 20*3%) / 40 = 12.25%                                                        [1]


CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report




OR
(10% - 3%) / (E M – 3%) = 1                                                                            [2]
=> R M = 10%                                                                                           [2]

Or full credit for any other valid approach.

(ii)
x – 3% = 2*(12.25% - 3%)                                                                               [½]
=> x = 21.5%                                                                                           [½]

OR
x – 3% = 2*(10% - 3%)                                                                                  [½]
=> x = 17%                                                                                             [½]

Or full credit for any other valid approach.

(iii)
5% - 3% = β*(12.25% - 3%)                                                                              [½]
=> β = 0.216                                                                                           [½]

OR
5% – 3% = β *(10% - 3%)                                                                                [½]
=> β = 0.286                                                                                           [½]

Or full credit for any other valid approach.

(iv)
There are basic problems in testing the model since, in theory, account has to be taken
of the entire investment universe open to investors, not just capital markets                   [1]
An important asset of most investors, for example, is their human capital (i.e. the
value of their future earnings). Models have been developed which allow for decisions
over multiple periods and for the optimisation of consumption over time to take
account of this                                                                                 [1]
Other versions of the basic CAPM have been produced which allow for taxes, inflation,
and also for a situation where there is no riskless asset                                       [1]
In the international situation there is no asset which is riskless for all investors (due to
currency risks) so a model has been developed which allows for groups of investors in
different countries, each of which considers their domestic currency to be risk-free            [1]
There is a discrepancy between the values obtained for the expected return on the
market using the security market line and the weightings by market capitalisation               [1]
Some other assumptions of CAPM are unrealistic, e.g. everyone has the same estimates
for the means/variances/covariances, everyone has the same single time horizon                  [1]
                                                                 [Marks available 6, maximum 3]
                                                                                           [Total 9]

 Parts (i) to (iii) were answered well by most candidates. There was unfortunately an
 error in the table provided in the exam paper which meant there was more than one



CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report



  possible correct answer to parts (i) through (iii). Credit was given for any valid
  approach.

  Part (iv) tended to be weaker, with many candidates listing generic points about CAPM
  with not enough focus on the specifics of the question. These points often scored some
  marks but could have scored more if tailored to the question.



Q6
(i)
𝐸𝐸[(1 + 𝑖𝑖𝑡𝑡 )] = 1.04
𝑉𝑉𝑉𝑉𝑉𝑉[(1 + 𝑖𝑖𝑡𝑡 )] = 0.032

Therefore:
               𝜎𝜎 2
1.04 = exp(µ + )
                2
0.032 = exp(2µ + 𝜎𝜎 2 ) [exp(𝜎𝜎 2 ) − 1]                                                               [1]

So:
                  0.032
exp(𝜎𝜎 2 ) − 1 =
                  1.042
           0.032
𝜎𝜎 2 = ln �1.042 + 1� = 0.00083175                                                                     [1]

And:
               0.00083175
1.04 = exp(µ +      2
                         )                                                                             [1]
                            0.00083175
µ = ln(1.04) −                    2
                                         = 0.038805                                                    [1]

(ii)
Working in $m.
(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿(𝜇𝜇, 𝜎𝜎 2 )
𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝑁𝑁(𝜇𝜇, 𝜎𝜎 2 )
             𝑡𝑡=𝑛𝑛                       𝑡𝑡=𝑛𝑛
𝑙𝑙𝑙𝑙 ��             (1 + 𝑖𝑖𝑡𝑡 ) � = �            𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 )
             𝑡𝑡=1                        𝑡𝑡=1
                                                                                                       [1]

As {𝑖𝑖𝑡𝑡 } are independent:
    𝑡𝑡=𝑛𝑛
�        𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝑁𝑁(𝑛𝑛𝑛𝑛, 𝑛𝑛𝜎𝜎 2 )
    𝑡𝑡=1
     𝑡𝑡=𝑛𝑛
�            (1 + 𝑖𝑖𝑡𝑡 ) ~ 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿(𝑛𝑛𝑛𝑛, 𝑛𝑛𝜎𝜎 2 )
      𝑡𝑡=1
                                                                                                       [1]

Let 𝑆𝑆𝑛𝑛 be the accumulated amount after n years of a single investment of one.
                𝑡𝑡=𝑛𝑛
𝑆𝑆𝑛𝑛 = �                (1 + 𝑖𝑖𝑡𝑡 )
                𝑡𝑡=1




CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


So we want the probability that $17.5𝑚𝑚 × 𝑆𝑆3 is less than $20m. i.e.
           20
𝑃𝑃 �𝑆𝑆3 <      � = 𝑃𝑃(𝑆𝑆3 < 1.1429) = 𝑃𝑃(ln(𝑆𝑆3 ) < ln(1.1429))
          17.5
                                                                                                        [1]

where ln(𝑆𝑆3 )~𝑁𝑁(3𝜇𝜇, 3𝜎𝜎 2 ) = 𝑁𝑁(3 × 0.038805 ,3 × 0.00083175) =
𝑁𝑁(0.11641,0.0024953)                                                                                   [1]

                   ln(1.1429) − 0.11641
= 𝑃𝑃 �𝑁𝑁(0,1)) <                              �
                     √0.0024953
= 𝑃𝑃(𝑁𝑁(0,1)) < 0.34266) = 0.63407
                                                                                                        [1]
                                                                                                   [Total 9]

  This was one of the more difficult questions on the paper, with many candidates slipping
  up in the algebra for part (i). Part (ii) caused similar problems, and some correct
  answers were also very brief with not enough workings shown for a five mark question.



Q7
(i)
Suppose that this is not the case: for example, if 𝑒𝑒 𝑟𝑟 ≤ 𝑑𝑑 ≤ 𝑢𝑢                                      [½]
Then we could borrow 𝑆𝑆0 of cash and buy 𝑆𝑆0 of stock                                                   [½]
At time 0 this would have a net cost of 0                                                               [½]
At time 1 our portfolio would be worth 𝑆𝑆0 (𝑑𝑑 − 𝑒𝑒 𝑟𝑟 ) or 𝑆𝑆0 (𝑢𝑢 − 𝑒𝑒 𝑟𝑟 ), both of which are
greater than 0: an example of arbitrage                                                                 [½]
Similarly if 𝑑𝑑 ≤ 𝑢𝑢 ≤ 𝑒𝑒 𝑟𝑟 , then we short 𝑆𝑆0 of stock and hold 𝑆𝑆0 of cash                          [½]
This would be worth 0 at time 0 and 𝑆𝑆0 (𝑒𝑒 𝑟𝑟 − 𝑑𝑑) or 𝑆𝑆0 (𝑒𝑒 𝑟𝑟 − 𝑢𝑢), both of which are
greater than 0: another example of arbitrage                                                            [½]

(ii)

       𝑒𝑒 𝑟𝑟 −𝑑𝑑
𝑞𝑞 = 𝑢𝑢−𝑑𝑑                                                                                              [1]

(iii)
Starting from the relationship in part (i):
𝑑𝑑 < 𝑒𝑒 𝑟𝑟 < 𝑢𝑢                                                                                         [½]
0 < 𝑒𝑒 𝑟𝑟 − 𝑑𝑑 < 𝑢𝑢 − 𝑑𝑑                                                                                [½]
       𝑒𝑒 𝑟𝑟 −𝑑𝑑
0 < 𝑢𝑢−𝑑𝑑 < 1                                                                                           [½]
0 < 𝑞𝑞 < 1                                                                                              [½]
                                                                                                   [Total 6]

  This question was generally answered well. Some candidates lost marks in part (i) by
  only considering one of the two ways in which the inequality could not hold – it was
  important to consider 𝑒𝑒 𝑟𝑟 ≤ 𝑑𝑑 ≤ 𝑢𝑢 and 𝑑𝑑 ≤ 𝑢𝑢 ≤ 𝑒𝑒 𝑟𝑟 to score full marks.




CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Q8
(i)(a)
  ∞
∫−∞(𝜇𝜇 − 𝑥𝑥)2 𝑓𝑓𝑋𝑋 (𝑥𝑥)𝑑𝑑𝑑𝑑, where 𝜇𝜇 = 𝐸𝐸(𝑋𝑋)                                                         [1]

(b)
  𝜇𝜇
∫−∞(𝜇𝜇 − 𝑥𝑥)2 𝑓𝑓𝑋𝑋 (𝑥𝑥)𝑑𝑑𝑑𝑑                                                                            [1]

(c)
  𝐿𝐿
∫−∞(𝐿𝐿 − 𝑥𝑥) 𝑓𝑓𝑋𝑋 (𝑥𝑥) 𝑑𝑑𝑑𝑑                                                                            [1]

(ii)
Since different days are independent, we can use the binomial distribution                             [1]
𝑃𝑃(𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁 𝑜𝑜𝑜𝑜 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿 ≥ 3) = 1 − 𝑃𝑃(𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁𝑁 𝑜𝑜𝑜𝑜 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿 ≤ 2)                    [1]
From the actuarial tables (or by direct calculation), this is 0.001                                    [1]

(iii)
From part (ii), we know that the chances of this happening are very slim                      [½]
This suggests that VaR has not been an effective risk measure                                 [½]
Because it has predicted that real-world events were highly unlikely                          [½]
And because this in practice has cost the trader more money than expected                     [½]
This may be because the model was not appropriately fitted                                    [½]
e.g. the trader chose an inappropriate approach to fit the distribution to the data           [½]
Alternatively, it may be that VaR struggles to appropriately measure tail risk                [½]
Many distributions lack sufficiently ‘fat tails’ to model the extreme behaviour of a
market crash                                                                                  [½]
It is possible that the model has only been fitted to historical data and does not include
an event similar to the market crash that just occurred                                       [½]
e.g. because the historical data is ‘milder’ than the event that has just occurred            [½]
Alternatively, it may be that other assumptions are inappropriate                             [½]
e.g. the assumption that different days are independent                                       [½]
e.g. using a one-day VaR did not cover a long-enough timeframe to capture the
security’s risk and a one-week/one-month VaR may have been better                             [½]
The exact model used by the trader might be overly complex                                    [½]
There might be a problem with the software tools used to run the VaR model                    [½]
VaR doesn’t give a measure of how bad things could get if the level L is breached – this
doesn’t make it a very effective risk measure                                                 [½]
                                                                 [Marks available 8, maximum 4]
                                                                                        [Total 10]

 Most candidates answered part (i) well here. Part (ii) tended to be weaker with some
 candidates calculating 0.1^3 = 0.001, which appears to give the right answer but is not a
 valid calculation. Part (iii) was answered fairly well, though many candidates did not
 make enough distinct and valid points for full marks.




CM2A S2021                                                              © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Q9
(i)
                   1
𝐸𝐸[𝑖𝑖𝑡𝑡 ] = 𝑗𝑗 = 2 (𝑖𝑖1 + 𝑖𝑖2 )                                                                        [½]
𝑉𝑉𝑉𝑉𝑉𝑉[𝑖𝑖𝑡𝑡 ] = 𝑠𝑠 2 = 𝐸𝐸�𝑖𝑖𝑡𝑡 2 � − 𝐸𝐸[𝑖𝑖𝑡𝑡 ]2                                                        [½]
    1                     1
= �𝑖𝑖1 2 + 𝑖𝑖2 2 � − ( (𝑖𝑖1 + 𝑖𝑖2 ))2
   2                          2
                                                                                                       [½]
   1                      1
= 2 �𝑖𝑖1 2 + 𝑖𝑖2 2 � − 4 �𝑖𝑖1 2 + 𝑖𝑖2 2 + 2𝑖𝑖1 𝑖𝑖2 �                                                   [½]
   1                      1
= 4 �𝑖𝑖1 2 + 𝑖𝑖2 2 � − 2 𝑖𝑖1 𝑖𝑖2                                                                       [½]
       1
= (2 (𝑖𝑖1 − 𝑖𝑖2 ))2                                                                                    [½]

(ii)
𝐸𝐸[𝑆𝑆20 ] = (1 + 𝑗𝑗)20 = 4.5/2 = 2.25                                            [½]
                  20
Therefore 𝑗𝑗 = √2.25 − 1 = 0.0413797                                             [1]
𝑉𝑉𝑉𝑉𝑉𝑉[𝑆𝑆20 ] = (1 + 2𝑗𝑗 + 𝑗𝑗 2 + 𝑠𝑠 2 )20 − (1 + 𝑗𝑗)40 = (0.75/2)2 = 0.3752     [½]
   2     20       2                  40                                    2
𝑠𝑠 = √0.375 + 1.0413797 − 1 − 2 × 0.0413797 − 0.0413797 = 0.0014867              [½]
   2                     1               2
𝑠𝑠 = 0.0014867 = (2 (𝑖𝑖1 − 𝑖𝑖2 ))                                                [1]
𝑖𝑖1 >𝑖𝑖2 therefore take the positive root:
𝑖𝑖1 − 𝑖𝑖2 = 2 × √0.0014867 = 0.077115                                            [½]
𝑖𝑖1 + 𝑖𝑖2 = 2 × 𝑗𝑗 = 2 × 0.0413797 = 0.082759                                    [½]
2𝑖𝑖1 = 0.077115 + 0.082759 = 0.159874                                            [½]
𝑖𝑖1 = 0.079937                                                                   [½]
𝑖𝑖2 = 𝑖𝑖1 − 0.077115 = 0.002822                                                  [½]
                                                                             [Total 9]

  This was the most difficult question on the paper. Most candidates scored some marks for
  the initial algebra, but only the better prepared candidates managed to work through to
  the correct final answers.



Q10
(i)
We can use N(t), the claim number process at time t. For a fixed value of t, if no claims
have occurred by time t, T 1 >t, hence:
𝑃𝑃(𝑇𝑇1 > 𝑡𝑡) = 𝑃𝑃(𝑁𝑁(𝑡𝑡) = 0) = exp(−𝜆𝜆𝜆𝜆)                                                [1]
Therefore 𝑃𝑃(𝑇𝑇1 ≤ 𝑡𝑡) = 1 − exp(−𝜆𝜆𝜆𝜆)                                                   [½]
Which is the CDF of an exponential distribution, therefore T 1 has an exponential
distribution with parameter λ                                                             [½]

(ii)
For i = 2, 3, … let the random variable T i denote the time between the (i-1)-th and
the i-th claims. Then:
𝑃𝑃(𝑇𝑇𝑛𝑛+1 > 𝑡𝑡 | ∑𝑛𝑛𝑖𝑖=1 𝑇𝑇𝑖𝑖 = 𝑟𝑟) = 𝑃𝑃( ∑𝑛𝑛+1                   𝑛𝑛
                                           𝑖𝑖=1 𝑇𝑇𝑖𝑖 > 𝑇𝑇 + 𝑟𝑟 | ∑𝑖𝑖=1 𝑇𝑇𝑖𝑖 = 𝑟𝑟 )                     [½]
= 𝑃𝑃( 𝑁𝑁(𝑡𝑡 + 𝑟𝑟) = 𝑛𝑛 | 𝑁𝑁(𝑟𝑟) = 𝑛𝑛)
= 𝑃𝑃( 𝑁𝑁(𝑡𝑡 + 𝑟𝑟) − 𝑁𝑁(𝑟𝑟) = 0 | 𝑁𝑁(𝑟𝑟) = 𝑛𝑛)                                                          [½]




CM2A S2021                                                              © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Because we are working with a Poisson process, when s < t, the number of claims in
the time interval (s, t] is independent of the number of claims up to time s.                         [½]
Therefore = 𝑃𝑃( 𝑁𝑁(𝑡𝑡 + 𝑟𝑟) − 𝑁𝑁(𝑟𝑟) = 0 | 𝑁𝑁(𝑟𝑟) = 𝑛𝑛) = 𝑃𝑃( 𝑁𝑁(𝑡𝑡 + 𝑟𝑟) − 𝑁𝑁(𝑟𝑟) = 0)               [½]

Finally:
𝑃𝑃( 𝑁𝑁(𝑡𝑡 + 𝑟𝑟) − 𝑁𝑁(𝑟𝑟) = 0) = 𝑃𝑃( 𝑁𝑁(𝑡𝑡) = 0) = 𝑒𝑒𝑒𝑒𝑒𝑒{−𝜆𝜆𝜆𝜆}                                       [½]
since the number of claims in a time interval of length r does not depend on when that
time interval starts. Thus, inter-event times also have an exponential distribution with
parameter λ                                                                                           [½]

(iii)(a)
In general, 𝛹𝛹(𝑈𝑈) is a non-increasing function of U                                      [½]
Taking the derivative with respect to U of the result in the question gives:
 𝑑𝑑            −𝜃𝜃
𝑑𝑑𝑑𝑑
     𝛹𝛹(𝑈𝑈) = 1+𝜃𝜃 𝛹𝛹(𝑈𝑈)                                                                 [1]
Which is negative since θ>0 (or just by inspection)                                       [½]
Hence 𝛹𝛹(𝑈𝑈) is a decreasing function of U                                                [½]
This is a more precise statement than the general case                                    [½]
It is intuitively sensible that 𝛹𝛹(𝑈𝑈) should be a decreasing function of U               [½]
An increase in U represents an increase in the insurer’s surplus without any
corresponding increase in claim amounts. Thus, an increase in U represents an increase
in the insurer’s security and hence will reduce the probability of ruin                   [1]
                                                             [Marks available 4½, maximum 2½]

(b)
In general, 𝛹𝛹(𝑈𝑈) is a non-increasing function of θ                                       [½]
Taking the derivative with respect to θ of the result in the question gives:
 𝑑𝑑
𝑑𝑑𝑑𝑑
     𝛹𝛹(𝑈𝑈) = −(1 + 𝜃𝜃)−1 𝛹𝛹(𝑈𝑈) − 𝑈𝑈(1 + 𝜃𝜃)−2 𝛹𝛹(𝑈𝑈)                                     [1]
Which is negative since θ, U and 𝛹𝛹(𝑈𝑈) are all positive quantities                        [½]
Alternatively, rearranging the RHS to give Psi(U) = 1/(1+theta) * exp(U*(1/(1+theta)-1))
shows that both 1/(1+theta) and exp(U*(1/(1+theta)-1)) decrease with theta                 [1]
Therefore the product must also decrease, without the need to differentiate                [½]
Hence 𝛹𝛹(𝑈𝑈) is a decreasing function of θ                                                 [½]
Logically this makes sense as increasing θ increases the rate of premium income for the
insurer                                                                                    [½]
So the insurer would be more able to withstand claims, hence the probability of ruin
would be lower                                                                             [½]
                                                              [Marks available 5, maximum 2½]
                                                                                     [Total 10]

 This question was answered well by most candidates. Part (iii) caused the most difficulty,
 with some candidates just stating the relationships which was not enough to score strongly
 in a question that requires explanation and logical reasoning.




CM2A S2021                                                             © Institute and Faculty of Actuaries
  CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report


Q11
(i)
For the utility function to respect the lemurs being risk-averse and non-satiated, it must
have the following properties:
𝑈𝑈 ′ (𝑤𝑤) > 0                                                                                          [½]
𝑈𝑈 ′′ (𝑤𝑤) < 0                                                                                         [½]

Going through each function we find the following:

(a)
𝑈𝑈 ′ (𝑤𝑤) = 1 + 2𝑤𝑤                                                                                    [½]
This is smaller than 0 when 𝑤𝑤 < −0.5                                                                  [1]
𝑈𝑈 ′′ (𝑤𝑤) = 2                                                                                         [½]

Hence 𝑈𝑈 ′′ (𝑤𝑤) > 0                                                                         [1]
This cannot be a valid utility function                                                      [1]
according to either measure                                                                  [½]
                                                                [Marks available 4½, maximum 2½]

(b)
              𝛾𝛾𝑤𝑤 𝛾𝛾−1
𝑈𝑈 ′ (𝑤𝑤) =               = 𝑤𝑤 𝛾𝛾−1                                                                    [½]
                 𝛾𝛾
This is positive                                                                             [½]
because 𝑤𝑤 > 0                                                                               [½]
𝑈𝑈 ′′ (𝑤𝑤) = (𝛾𝛾 − 1)𝑤𝑤 𝛾𝛾−2                                                                 [½]
This is negative                                                                             [½]
because we are told that 𝛾𝛾 < 1                                                              [½]
So this could be a valid function                                                            [½]
                                                                [Marks available 3½, maximum 2½]

(c)
𝑈𝑈 ′ (𝑤𝑤) = 1 − 4𝑤𝑤                                                                         [½]
𝑈𝑈 ′′ (𝑤𝑤) = −4 < 0                                                                         [½]
The second derivative is acceptable                                                         [½]
but the first is not acceptable                                                             [½]
because it is not valid at e.g 𝑤𝑤 = 1, where the first derivative is −3 (or any other
                         1
counterexample using 4 ≤ 𝑤𝑤 ≤ 3)                                                            [½]
So this cannot be a valid utility function                                                  [½]
                                                                 [Marks available 3, maximum 2]
(ii)
Scenario A: expected utility is 𝐸𝐸�𝑈𝑈(𝑤𝑤)� = 0.5(ln(4) + ln(1))                             [½]
𝐸𝐸�𝑈𝑈(𝑤𝑤)� = ln(2)                                                                          [½]
Scenario B: expected utility is 𝐸𝐸�𝑈𝑈(𝑤𝑤)� = ln(2.1)                                        [½]
The expected utility to the lemurs is larger under scenario B                               [½]
So if the utility function is appropriate, they should prefer scenario B                    [½]
This is consistent with the experiment’s findings                                           [½]
                                                                                      [Total 11]




CM2A S2021                                                              © Institute and Faculty of Actuaries
 CM2A - Financial Engineering and Loss Reserving - Core Principles - September 2021 - Examiners’ report



 This question was answered well apart from some slip-ups with differentiating utility
 functions. In parts (i)(a) and (i)(c) candidates only had to give one proof that the function
 was invalid to score full marks in that part. In part (ii) some candidates calculated U’(w)
 and U’’(w) which does not answer the question about the findings of the experiment.


                                                                                    [Paper Total 100]

                       END OF EXAMINERS’ REPORT




CM2A S2021                                                             © Institute and Faculty of Actuaries



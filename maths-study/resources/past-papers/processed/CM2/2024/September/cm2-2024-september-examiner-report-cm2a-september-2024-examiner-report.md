---
normalized_id: cm2-2024-september-examiner-report-cm2a-september-2024-examiner-report
exam_code: CM2
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Sep24/CM2A_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2024-september-examiner-report-cm2a-september-2024-examiner-report

EXAMINERS’ REPORT
CM2 - Economic Modelling
Core Principles
Paper A




                           September 2024
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



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

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge
and understanding of the topics and therefore candidates should not be overly dependent on
open book materials. In our experience, candidates that spend too long researching answers
in their materials will not be successful either because of time management issues or because
they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be
exercised in doing so because each exam question is unique. As with all professional
examinations, it is insufficient to repeat points of principle, formula or other text book
works. The examinations are designed to test “higher order” thinking including candidates’
ability to apply their knowledge to the facts presented in detail, synthesise and analyse their
findings, and present conclusions or advice. Successful candidates concentrate on answering
the questions asked rather than repeating their knowledge without application.

Candidates should note that from the April 2025 exam session, all examinations will
continue to be delivered virtually and will have online proctoring. Exams will be closed
book and closed web. The ability to refer to past examiner reports and past papers
during the exam is not permitted. Candidates attempting to do so will be in breach of
the Assessment Regulations and subject to inappropriate conduct investigations.
Further details of the new exams can be found on the IFOA website.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Sarah Hutchinson
Chair of the Board of Examiners
December 2024




CM2A S2024                                                         © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



   A. General comments on the aims of this subject and how it is marked

The aim of subject CM2 is to develop the necessary skills to construct asset liability models,
value financial derivatives and calculate reserves for insurance or guarantees. These skills are
also required to communicate with other financial professionals and to critically evaluate
modern financial theories.

The marking approach for CM2 is flexible in the sense that different answers to those shown
in the solution can earn marks if they are relevant and appropriate. Marks for the
methodology are also awarded including marks for using the right method even if an error in
an earlier part of the question prevents the final answer from being correct. The marking
focusses on rewarding candidates’ understanding of the concepts, including their ability to
articulate arguments clearly.

   B. Comments on candidate performance in this diet of the examination

This exam was sat online and most questions focussed on applied calculations and analysis of
the results. Some of the questions required students to apply concepts in the Syllabus to
scenarios they might not have seen before and the stronger students scored highly here.
Average marks were roughly in line with the historic norm for the subject and the pass mark
was also within a normal range for CM2.

This exam included less algebra than some previous CM2 papers, but there was still evidence
that some students found algebra tricky when answering questions in Word. Students should
note that rearranging and solving algebra on screen can sometimes be hard if you are used to
using pen and paper, so this is a worthwhile skill to practise before the exams. It’s also worth
saying that using the equation editor in Word to set out formulae is not necessary, your
workings just need to be clear enough for the examiner to follow them.

Q2 proved to be the most challenging question on the paper. This question required
candidates to work with the Merton model to derive default probabilities and describe how
the impact share and debt values. Most candidates completed the early calculations correctly
but struggled with the later analysis which required a deeper understanding of the Merton
model.

   C. Pass Mark

The Pass Mark for this exam was 60.
1,426 presented themselves and 661 passed.




CM2A S2024                                                         © Institute and Faculty of Actuaries
                        CM2A - Economic Modelling- September 2024 - Examiners’ report



Solutions for Subject CM2A - September 2024

 Q1
(i)
      𝑡−𝜇
𝑃 (𝑍 < 𝜎 ) = 5%
                                                                                                          [½]
 𝑡−𝜇
           = −1.64485
  𝜎                                                                                                       [½]
 𝑉𝑎𝑅=−𝑡=1.64485𝜎−𝜇                                                                                        [1]

(ii)
           −1 −𝑉𝑎𝑅
TailVaR =      ∫      𝑟𝑓(𝑟)𝑑𝑟
           5% −∞                                                                                          [½]
We change the variable using 𝑟 = 𝜇 + 𝜎𝑧 𝑠𝑜 𝑓(𝑟)𝑑𝑟 = 𝑓(𝜇 + 𝜎𝑧)𝜎𝑑𝑧 =
       −𝑉𝑎𝑅−𝜇
 −1
       ∫  𝜎    (𝜇 + 𝜎𝑧)𝜎𝑓(𝜇+𝜎𝑧)𝑑𝑧
5% −∞
                                                                                                          [½]
But 𝜎𝑓(𝜇+𝜎𝑧)=𝑓0,1(𝑧) so
             −𝑉𝑎𝑅−𝜇
  −1    𝜎
=    ∫                (𝜇 + 𝜎𝑧) 𝑓0,1 (𝑧)𝑑𝑧
  5% −∞
                                                                                                          [½]
               −𝑉𝑎𝑅−𝜇                    −𝑉𝑎𝑅−𝜇
      −1
= 5% (𝜇 ∫−∞       𝜎     𝑓0,1 (𝑧)𝑑𝑧 + 𝜎 ∫−∞  𝜎     𝑧𝑓0,1 (𝑧)𝑑𝑧)                                            [½]
Then applying the hint to 𝑧𝑓0,1 (𝑧)
                                       −𝑉𝑎𝑅−𝜇
  −1       −𝑉𝑎𝑅 − 𝜇        𝜎                    𝑑
=    (𝜇Φ (          )−𝜎∫                           𝑓 (𝑧)𝑑𝑧 )
  5%          𝜎         −∞                      𝑑𝑧 0,1
                                                                                                          [½]
      −1       −𝑉𝑎𝑅 − 𝜇              −𝑉𝑎𝑅 − 𝜇
=        (𝜇Φ (          ) − 𝜎 𝑓0,1 (          ))
      5%          𝜎                     𝜎                                                                 [½]
Then using part (i)


  −1
=    (𝜇Φ(−1.64485) − 𝜎 𝑓0,1 (−1.64485))
  5%                                                                                                      [½]
  −1
=    (0.05𝜇 − 𝜎 𝑓0,1 (−1.64485))
  5%
   𝜎
=    𝑓 (−1.64485) − 𝜇
  5% 0,1                                                                                                  [½]

(iii)
a. 𝑉𝑎𝑅 = 1.64485√60 − 4 = 8.742%                                                                          [1]
                        𝜎
b. 𝑇𝑎𝑖𝑙𝑉𝑎𝑅 = 5% 𝑓0,1 (−1.64485) − 𝜇
                                                                                                          [1]


CM2A S2024                                                              © Institute and Faculty of Actuaries
                           CM2A - Economic Modelling- September 2024 - Examiners’ report



          √60 1
      =          exp(−0.5 × (−1.64485)2) − 4
          5% √2𝜋
      = 11.98%
                                                                                                             [1]

(iv)
Value at Risk does not give an indication of the size of the loss in the tail of the
distribution, only the likelihood.                                                                           [½]
The availability of data to determine the tail of the distribution may limit usefulness
of Value at Risk.                                                                                            [½]
TailVar is useful for monitoring exposure to risk because the expected
underperformance relative to a benchmark is easy to understand.                                              [½]
TailVar gives one a single figure representing the average of the worst x% of losses,
but does not reveal how these losses are distributed.                                                      [½]
                                                                                                    [Total 11]

 Commentary:
  Part (i) was generally well answered, and the examiners were lenient with whether VaR
 should be expressed as t or -t.

 Part (ii) required students to work with the integral definition of TailVar and change the
 variable using the hint provided. This proved to be the poorest answered question part in the
 paper, with many candidates either trying to work with an expected value definition of TailVar
 or not setting out their workings clearly.

 Parts (iii) and (iv) were generally answered well, though in (iii) some candidates were only
 able to calculate the VaR and not the TailVaR.


 Q2
(i)
Under the Merton model the risk neutral probability of default can be calculated as
N(-d2) where N is the normal distribution and
         𝑉        𝜎2
     𝑙𝑛 ( ) + (𝑟 − ) 𝑇
         𝐷        2
𝑑2 =
            𝜎 √𝑇                                                                                             [1]
For Company A
            𝑉         𝜎2           60        0.252
          𝑙𝑛(𝐷)+(𝑟− 2 )𝑇         𝑙𝑛(50)+(0.03− 2 )×2
𝑑2 =                         =                       = 0.5086
                𝜎√𝑇                     0.25√2
                                                                                                             [1]
Prob(default) = N(-0.5086)= 0.3055=30.55%
                                                                                                             [1]
For Company B
         𝑉        𝜎2         80           0.252
     𝑙𝑛 ( ) + (𝑟 − ) 𝑇   𝑙𝑛 ( ) + (0.03 −       ×3
         𝐷        2          50             2 )
𝑑2 =                   =                           = 1.0768
            𝜎√𝑇                    0.25√3                                                                    [1]

CM2A S2024                                                                 © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



Prob(default) = N(-1.0768)=0.1408=14.08%
                                                                                                     [1]


(ii)
Under put-call parity the share price is:
𝑆𝑡 = 𝑐 + 𝐾𝑒 −𝑟𝑇 − 𝑝 = 65.6 + 100𝑒 −0.06 − 35.2 = 124.58                                               [1]
𝑇𝑜𝑡𝑎𝑙 𝑠ℎ𝑎𝑟𝑒𝑠 = 124.58 × 100,000 = 12,458,000                                                         [½]
𝑇𝑜𝑡𝑎𝑙 𝐷𝑒𝑏𝑡 = 60,000,000 − 12,458,000 = 47,542,000                                                    [½]
This is $95.08 per $100 nominal                                                                       [1]

(iii)
The sensitivity of the share price to a change in the company’s gross value is
𝑑𝑆𝑡 /𝑑𝑉𝑡 .                                                                                           [1]
If we regard St as a call option on the asset value Vt (current value $60m,
strike $50m) then this is the Greek delta.                                                           [1]
From the Black-Scholes formula and the volatility above we find that
d1 = 0.8622                                                                                          [1]
Delta = N(d1) = 0.8057                                                                               [1]
So a $1m increase in asset value will give a $805,700 increase in the total share
value                                                                                           [½]
and a $194,300 increase in total bond value.                                                    [½]
This is an increase of $8.06 in the share price                                                 [½]
and an increase of $0.39 in the bond price per $100 nominal.                                    [½]
                                                                                        [Maximum 4]

(iv)
The total value of the company’s assets is not significantly larger than the nominal
value of the bonds                                                                                   [½]
This means that an increase in the company’s assets improves the likelihood that the
full nominal amount will be paid to debtholders on maturity                                          [½]
The bond price therefore has some sensitivity to changes in the value of the
company                                                                                              [½]
Therefore the improvement in the value of shares is smaller than the increase in the
value of the company’s assets.                                                                     [½]
                                                                                              [Total 14]

 Commentary:
 Part (i) of this question was answered well by most candidates.

 In part (ii) many candidates were able to calculate the share price but failed to calculate the
 total share and debt values.

 Parts (iii) and (iv) were not answered well, with many candidates failing to recall Delta as
 N(d1) or making general comments in part (iv) that were not specific to the scenario in the
 question.


CM2A S2024                                                         © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report




Q3
 (i)
 High correlation between risks means little pooling advantage                             [1]
 Small number of policies, only ten                                                        [1]
 Risk is potentially quite large depending on nature of holidays                           [1]
 Moral hazard – holidaymakers might be more likely to behave in way that increases
 risk due to having insurance                                                              [1]
 Adverse selection – more likely to take out insurance if they already know that there
 is risk associated with their holiday.                                                    [1]
                                                                                   [Maximum 3]

 (ii)
 Tighten definition of payable event                                                             [1]
 Diversify policies between different destinations                                               [1]
 Diversify policies between different times of year                                              [1]
 Introduce policy excess.                                                                        [1]
                                                                                        [Maximum 2]
                                                                                           [Total 5]

 Commentary:
  This question was answered well by most candidates. Some repeated the same points
 multiple times in part (i) – correlation of risk is a key issue here but there are also other issues
 that the insurer needs to consider.


Q4
 (i)
 u = 1.15, d = 0.9, r = .06/12
 risk-neutral probability q = (er – d)/ (u-d) = (exp(.06/12)- .9)/ (1.15-0.9) =
 (1.005013-.9)/.25 = .42005                                                                          [1]




 (ii)
 𝑉1 (1) = 𝑒𝑥𝑝(−𝑟) ∗ [ 𝑞1 (1) ∗ 𝑐2 (1) + (1 − 𝑞1 (1)) ∗ 𝑐2 (2)]
      = 𝑒𝑥𝑝(−.06/12) ∗ [ .42005 ∗ 7.25 + (1 − .42005) ∗ 0] = 3.030174
                                                                                                     [1]

 𝑉1 (2) = 𝑒𝑥𝑝(−.06/12) ∗ [ .42005 ∗ 0 + (1 − .42005) ∗ 0] = 0                                        [1]
  𝑉0 = 𝑒𝑥𝑝(−.06/12) ∗ [ .42005 ∗ 3.030124 + (1 − .42005) ∗ 0] = $1.2664                              [1]



CM2A S2024                                                         © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



(iii)
Given that an up-movement occurs over the first time period, a portfolio of
𝜃11 shares and 𝜓11 cash set up at time 1 will replicate the value of the call option at
time 2 if:

132.25 ∗ 𝜃11 + 𝜓11 ∗ 𝑒𝑥𝑝(.06/12) = 7.25 𝑎𝑛𝑑 103.5 ∗ 𝜃11 + 𝜓11 ∗ 𝑒𝑥𝑝(.06/12)
=0                                                                                                   [1]
𝜃11 = (7.25 − 0)/ 28.75 = 0.252174
𝜓11 = -25.96983
Thus, the value of the replicating portfolio and hence the option at (1,1) is
𝜃11 ∗ 115 + 𝜓11 = 0.252174 ∗ 115 − 25.96983 = 3.030165                                               [1]
Given that a down-movement occurs over the first time period, a portfolio of 𝜃12
shares and 𝜓12 cash set up at time 1 will replicate the value of call option at time 2
if:
103.5 ∗ 𝜃12 + 𝜓12 ∗ 𝑒𝑥𝑝 (.06/12) = 0 𝑎𝑛𝑑
81 ∗ 𝜃12 + 𝜓12 ∗ 𝑒𝑥𝑝 (.06/12) = 0
𝜃12 = 0
𝜓12 = 0                                                                                              [1]
Thus, the value of the replicating portfolio and hence the option at (1,2) is
0 ∗ 90 + 0 = 0
Finally, a portfolio of 𝜃01 shares and 𝜓01 cash set up at time 0 will replicate the value
of the call option at time 1 if:
𝜃01 ∗ 115 + 𝜓01 ∗ 𝑒𝑥𝑝 (.06/12) = 3.030165 and
𝜃01 ∗ 90 + 𝜓01 ∗ 𝑒𝑥𝑝 (.06/12) = 0                                                                    [1]
Solving these two equations we get
𝜃01 ∗ 25 = 3.030165
𝜃01 = 0.121207
𝜓01 = −10.8542                                                                                       [1]

(iv)
The value of the replicating portfolio at time 0 is given by
𝜃01 ∗ 100 + 𝜓01 = .121207 ∗ 100 + −10.8542 = $1.2665                                                 [1]
                                                                                            [Total 10]



 Commentary:
  Parts (i) and (ii) of this question were straightforward and most candidates scored well.
 Some used a monthly interest rate and scored zero for part (i) but it was still possible to score
 full marks in the rest of the question following through the incorrect value of q.

 Stronger candidates performed well in part (iii) but many failed to attempt it. Part (iv) was
 generally answered well by those who had attempted part (iii).



CM2A S2024                                                         © Institute and Faculty of Actuaries
                  CM2A - Economic Modelling- September 2024 - Examiners’ report



Q5

(i)
 𝑈(𝑤) = 𝑏𝑤 + 𝑐𝑤 2
𝑈′(𝑤) = 𝑏 + 2𝑐𝑤                                                                                     [½]
𝑈′′(𝑤) = 2𝑐                                                                                         [½]
         −𝑈′′(𝑤)     −2𝑐
𝐴(𝑤) =           =
          𝑈′(𝑤)    𝑏 + 2𝑐𝑤                                                                          [1]
                     −2𝑐𝑤
𝑅(𝑤) = 𝑤𝐴(𝑤) =
                    𝑏 + 2𝑐𝑤                                                                         [1]

(ii)
This shows that the investor would reject a fair gamble                                             [½]
Which implies the investor is risk averse                                                           [½]

(iii)
The investor’s current wealth is $150 and utility is 6,750, therefore:
𝑈(𝑤) = 150𝑏 + 1502 𝑐 = 6750
                                                                                                    [1]
The minimum p at which they will accept the gamble will satisfy the equation
where current utility is equal to the expected utility of the gamble,                               [1]
i.e.:
6750 = 𝑝𝑈(175) + (1 − 𝑝)𝑈(125)                                                                      [1]
= 0.54167(175𝑏 + 1752 𝑐) + 0.45833(125𝑏 + 1252 𝑐)                                                   [1]
Solving simultaneous equations gives c=-0.1                                                         [1]
And b=60                                                                                            [1]

(iv)
To satisfy the principle of non-satiation 𝑈′(𝑤) > 0                                                 [1]
60 − 0.2𝑤 > 0
𝑤 < 300                                                                                             [1]




(v)
The utility function exhibits increasing absolute risk aversion                                   [1]
Therefore at a higher level of wealth they are more risk averse                                   [1]
And so need a higher probability of a win to accept the gamble                                    [1]
So we will need p > 0.54167                                                                       [1]
                                                                                           [Total 16]

 Commentary:


CM2A S2024                                                        © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



  This question caused little difficulty for most candidates, though there were some algebraic
 slips in part (iii). A significant number of candidates reached the wrong conclusion in part (v)
 about whether p should increase or reduce.


Q6

(i)
a. From the core reading:



                                                                                                     [½]
     where 𝑥𝐴 is the proportion invested in security A.
               4𝑉𝐴
     𝑥𝐴 =
            𝑉𝐴 + 4𝑉𝐴
     𝑥𝐴 = 0.8                                                                                        [½]
     𝑥𝐵 = 1 – 𝑥𝐴 = 0.2                                                                               [½]
     𝐸𝑃 = 𝑥𝐴 𝐸𝐴 + 𝑥𝐵 𝐸𝐵 = 0.8𝐸𝐴 + 0.2 ∗ 4𝐸𝐴 = 1.6𝐸𝐴                                                  [½]
b. 𝐶𝐴𝐵 = √𝑉𝐴 𝑉𝐵 = √𝑉𝐴 ∗ 4𝑉𝐴 = 2𝑉𝐴                                                                    [1]
               4𝑉𝐴 − 2𝑉𝐴
     𝑥𝐴 =
            𝑉𝐴 − 4𝑉𝐴 + 4𝑉𝐴
     𝑥𝐴 = 2                                                                                          [½]
     𝑥𝐵 = −1                                                                                         [½]
     𝐸𝑃 = 𝑥𝐴 𝐸𝐴 + 𝑥𝐵 𝐸𝐵 = 2𝐸𝐴 − 4𝐸𝐴 = −2𝐸𝐴                                                           [1]

(ii)
𝑉𝑃 = 𝑥𝐴2 𝑉𝐴 + 𝑥𝐵2 𝑉𝐵 + 2𝑥𝐴 𝑥𝐵 𝐶𝐴𝐵                                                                    [1]
= 4𝑉𝐴 + 4𝑉𝐴 − 8𝑉𝐴 = 0                                                                                [1]




(iii)
The variance is zero therefore the portfolio is risk-free.                                           [1]
Either the expected return on the portfolio is negative, or 𝐸𝐴 is negative, both of
which feel like unusual scenarios.                                                                  [1]
                                                                                              [Total 9]

 Commentary:


CM2A S2024                                                         © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report



 In part (i) most candidates calculated the portfolio correctly when rho = 0 but failed to
 calculate it when rho =1.

 Parts (ii) and (iii) were generally answered well, and some credit was given in part (iii) for
 answers that do not match the model solution but were consistent with the candidate’s
 incorrect answers to parts (i) and (ii). Some candidates struggled with part (i) then did not
 attempts parts (ii) or (iii), but there were marks that could be picked up in both these parts
 even without an answer to part (i).


Q7

(i)
This property means that, in a given interval, the number of claims is unaffected by
the number of claims in the past.                                                                    [1]
This is also known as the process being ‘memoryless’.

(ii)
On the one hand, using a Poisson process leads to tractable mathematics in the field
of ruin theory                                                                                       [½]
And on the surface it appears intuitive e.g. we would not expect the number of
claims e.g. ten years ago to affect the number of claims now                                         [½]
However, it is easy to imagine scenarios in which the assumption of independence
breaks down                                                                                          [½]
e.g. during a mass claims event, it is highly likely that there will be more claims
next week given there were a large number of claims this week                                         [1]
This means the assumption may in practice be questionable                                            [½]

(iii)
The insurer will be ruined if they receive three or more claims.                                     [½]
So the probability is 1 - P(N(5)=0) - P(N(5)=1) - P(N(5)=2)                                          [½]
= 1 – 0.368 – 0.368 – 0.184                                                                           [1]
= 1 – 0.920                                                                                          [½]
= 0.080                                                                                              [½]




(iv)
The probability of ruin will increase with time                                                    [½]
because there is more time for claims to be received                                               [½]
but no more premium income.                                                                        [½]
The probability of ruin will tend towards 1                                                        [½]
It will never quite hit 1 in finite time                                                           [½]
Though the ultimate probability of ruin will be 1                                                  [½]
                                                                                            [Total 10]

CM2A S2024                                                         © Institute and Faculty of Actuaries
                   CM2A - Economic Modelling- September 2024 - Examiners’ report




 Commentary:
  This question was mostly answered well. In part (ii) some answers were too theoretical to
 score full marks and needed more of a link to the real world situation of an insurer. Some
 candidates used a continuous approximation to the distribution of claims in part (iii) but this
 was not needed given that the discrete calculation is fairly simple when we are dealing with
 small numbers of claims.

 In part (iv) most candidates identified that the lack of future premium income is key to
 considering how the probability of ruin will change.


Q8

(i)
(a)
The current value of the bond is (100 – L) * exp(-0.05), where L is the expected loss
due to default.
Therefore 85.61 = (100 – L) * exp(-0.05)                                                             [½]
So L = $10                                                                                           [½]
But L = $100 x Prob of default x Loss given default
If the loss given default is 50% then the probability of default must be 20%.                        [½]
(b)
The current value of the bond is (100 – L) * exp(-2 * 0.05), where L is the expected
loss due to default.
Therefore 76.91 = (100 – L) * exp(-2 * 0.05)                                                         [½]
So L = $15                                                                                           [½]
But L = $100 x Prob of default x Loss given default
If the loss given default is 50% then the probability of default must be 30%.                        [½]

(ii)
(a)
Yield = ln(100/85.61) = 15.5%                                                                        [1]
(b)
Yield = ln(100/76.91)/2 = 13.1%                                                                      [1]



(iii)
The probability of the two year bond defaulting is higher than the one-year bond                   [½]
But the probability of default in year 2 is actually lower                                         [½]
So the yield from t=1 to t=2 should be lower than the yield from t=0 to t=1                         [1]
Giving a lower overall yield on the two year bond than the one year bond                            [1]
                                                                                              [Total 8]



CM2A S2024                                                         © Institute and Faculty of Actuaries
                  CM2A - Economic Modelling- September 2024 - Examiners’ report



 Commentary:
  Parts (i) and (ii) were generally answered well, with most candidates calculating correct
 probabilities and yields.

 In part (iii) many candidates made a simple remark that higher risk = higher yield but failed
 to relate their answer to the scenario and how the probability of default differs between year 1
 and year 2.

Q9

(i)
There might be regulatory rules requiring the insurer to hold capital of at least x                 [½]
So that any level of wealth below x is equally bad for the insurer                                  [½]

(ii)
(a)
This function satisfies risk-aversion for w>x                                                       [½]
But not for w<x                                                                                     [½]
Because for w<x u’(w)=0                                                                              [1]
(b)
It satisfies non-satiation for w>x                                                                  [½]
Because u’(w) > 0                                                                                   [½]

(iii)
Current utility = (100 / 100) ^ 0.5 = 1                                                             [1]
For a premium of 39:
E(U) = 0.75 * U(139) + 0.25 * U(139 – 50)                                                           [½]
= 0.75 * (139/100)^0.5 + 0.25 * 0
= 0.8842                                                                                            [1]
For a premium of 40:
E(U) = 0.75 * U(140) + 0.25 * U(140 – 50)                                                           [½]
= 0.75 * (140/100)^0.5 + 0.25 * (90/100)^0.5
= 1.1246                                                                                            [1]




(iv)
The expected loss on the policy is 25% * $50 = $12.50                                             [½]
So the premium is over 3x larger than the expected loss                                           [½]
This might work for a very risk-averse customer                                                   [½]
But it is not likely that anyone would pay this premium                                           [½]
                                                                                           [Total 10]


CM2A S2024                                                        © Institute and Faculty of Actuaries
                  CM2A - Economic Modelling- September 2024 - Examiners’ report



 Commentary:
  Parts (i) and (ii) of this question were mostly answered well, though in part (ii) some
 candidates only considered the situation when w>x which was not enough to score full marks.

 In part (iii) many candidates completed calculations for a premium of $40 but only the
 stronger candidates also considered a premium of $39 to show that $40 is the lowest that fits
 the criteria.

Q10

(i)
The put-call parity relationship states that:
𝑐𝑡 + 𝐾𝑒 −𝑟(𝑇−𝑡) = 𝑝𝑡 + 𝑆𝑡
Substituting the values given:
𝑐𝑡 + 9,500 ∗ 𝑒 −.06 = 307 + 10,000                                                                  [1]
𝑐𝑡 + 8946.763 = 10,307
𝑐𝑡 = $1,360.24                                                                                      [1]

(ii)
The price of the $10,500 call option is 𝑐𝑡 = 𝑠𝑡 𝛷(𝑑1 ) − 𝐾𝑒 −𝑟(𝑇−𝑡) ∗ 𝛷(𝑑2 )
= 10000 ∗ 𝛷(𝑑1 ) − 10500 ∗ 𝑒 −0.06 ∗ 𝛷(𝑑2 )                                                         [1]
= 10000 ∗ 𝛷(0.1538) − 10500 ∗ 𝑒 −0.06 ∗ 𝛷(−0.0352)
= 10000 ∗ 0.561134 − 10500 ∗ 𝑒 −0.06 ∗ 0.485978                                                     [1]
= $805.73                                                                                           [1]

(iii)
(a)
The value of the option would increase, because the option allows us to buy the
share for a fixed value so an increase in the share price increases the intrinsic value
of the option.                                                                                      [1]
(b)
The value of the option would increase, because holding the option and cash instead
of the share is more valuable when interest rates are higher.                                      [1]
                                                                                             [Total 7]

 Commentary:
 This was the bme missed oest-answered question on the paper, with many candidates scoring
 full marks. Sout on marks in part (iii) for explaining how the call option value would change
 but not explaining why.


                                                                                  [Paper Total 100]




CM2A S2024                                                        © Institute and Faculty of Actuaries
             CM2A - Economic Modelling- September 2024 - Examiners’ report




                END OF EXAMINERS’ REPORT




CM2A S2024                                                   © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


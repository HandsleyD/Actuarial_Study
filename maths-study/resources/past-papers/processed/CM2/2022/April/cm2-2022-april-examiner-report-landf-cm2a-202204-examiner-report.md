---
normalized_id: cm2-2022-april-examiner-report-landf-cm2a-202204-examiner-report
exam_code: CM2
year: 2022
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM2/CM2A/Apr22/landF_CM2A_202204_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm2-2022-april-examiner-report-landf-cm2a-202204-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT


                                         April 2022

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
particularly the open-ended questions in the Specialist Advanced (SA) and Specialist
Principles (SP) subjects, the report may contain more points than the Examiners will expect
from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
July 2022



CM2A A2022                                                        © Institute and Faculty of Actuaries
  CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


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

   This exam some of the questions required candidates to apply concepts from the Core
   Reading to scenarios they might not have seen before and the stronger students scored
   highly here.

   There was evidence that some candidates found algebra difficult when answering
   questions in Word. The examiners were lenient with notation when marking these
   questions, but some students missed out on scoring full marks through not explaining
   their steps, especially in Question 5. Candidates should note that a pure algebra answer
   might not always be enough to score full marks.

   Candidates should note that rearranging and solving algebra on screen can sometimes be
   hard if you are used to using pen and paper, so this is a worthwhile skill to practice before
   the exams.



   C. Pass Mark

   The Pass Mark for this exam was 60
   1338 presented themselves and 506 passed.




CM2A A2022                                                            © Institute and Faculty of Actuaries
       CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


Solutions for CM2A – April 2022

Q1
(i)
                              𝜎𝜎2
𝐸𝐸[1 + 𝑖𝑖𝑡𝑡 ] = exp �𝜇𝜇 + 2 � = 1.05                                                                      [½]
𝑣𝑣𝑣𝑣𝑣𝑣[1 + 𝑖𝑖𝑡𝑡 ] = exp(2𝜇𝜇 + 𝜎𝜎 2 ) × (exp(𝜎𝜎 2 ) − 1) = 0.032 = 0.0009                                  [½]

As (𝐸𝐸[1 + 𝑖𝑖𝑡𝑡 ])2 = exp(2𝜇𝜇 + 𝜎𝜎 2 )
exp(2𝜇𝜇 + 𝜎𝜎 2 ) × (exp(𝜎𝜎 2 ) − 1) = 1.052 × (exp(𝜎𝜎 2 ) − 1)                                            [½]
                0.0009
=> 𝜎𝜎 2 = ln � 1.052 + 1� = 0.00081599                                                                    [½]
i.e. 𝜎𝜎 = 0.0285655
                0.00081599
=> exp �𝜇𝜇 +         2
                          � = 1.05
                     0.00081599
𝜇𝜇 = ln(1.05) −           2
                                    = 0.0483822                                                           [1]

(ii)

𝑃𝑃(0.01 < 𝑖𝑖𝑡𝑡 < 0.03)
= 𝑃𝑃(1.01 < 1 + 𝑖𝑖𝑡𝑡 < 1.03)
𝑃𝑃(ln (1.01) < ln (1 + 𝑖𝑖𝑡𝑡 ) < ln (1.03))                                       [1]
          ln(1.01) − 0.0483822 (ln (1 + 𝑖𝑖𝑡𝑡 ) − 0.0483822) ln(1.03) − 0.0483822
   = 𝑃𝑃 �                           <                      <                     �
               √0.00081599                 √0.00081599          √0.00081599
= 𝑃𝑃(−1.34539 < 𝑍𝑍 < −0.658955) where 𝑍𝑍~𝑁𝑁(0,1)                                 [1]
= 0.254962 - 0.089250 = 16.6%                                                    [1]

(iii)
The probability calculated in part (ii) is small.                                                         [½]
This is reasonable as the expected return in any year is 5%, and we are being asked to
calculate the probability that the return is within a range which does not include the
expected value.                                                                                           [½]

(iv)
If Sn represents the accumulated value of £1 invested in the fund at the end of year n,
Sn is log-normally distributed with parameters nµ and nσ2                                                 [½]
𝑃𝑃(10000𝑆𝑆3 < 11000)
= 𝑃𝑃(𝑆𝑆3 < 1.1)
= 𝑃𝑃(ln(𝑆𝑆3 ) < ln(1.1))
          ln(1.1)−3×0.0483822
= 𝑃𝑃(𝑍𝑍 <                     ) where 𝑍𝑍~𝑁𝑁(0,1)                                                          [½]
                √3×0.00081599
= 𝑃𝑃(𝑍𝑍 < −1.00732)
= 0.15689                                                                                               [1]
                                                                                                   [Total 9]

  This was a straightforward question and most candidates scored well. The weakest part
  of this question tended to be (iii) which required candidates to relate the probability
  calculated to the mean and variance of the distribution.




CM2A A2022                                                                 © Institute and Faculty of Actuaries
       CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report




Q2
(i)
Loss ratio = the ratio of incurred claims to earned premiums over a defined period.                       [1]

(ii)
DF(1,2) = 1072/1011 = 1.0603                                                                              [1]
DF(0,1) = (1011+915)/(864+798) = 1.1588                                                                   [1]
Initial ultimate loss = 92.5% * 1520 = 1406                                                               [½]
Total emerging liability = initial UL * (1-1/f)                                                           [½]
= 1406 * (1-1/(1.0603*1.1588))
= 261.68                                                                                                  [1]
Total claims for 2019 = 261.68 + 820 = 1081.68                                                            [1]

(iii)
DF(1,2) = 1320/915 = 1.4426                                                                               [1]
Initial ultimate loss = 92.5% * 1520 = 1406
Total emerging liability = initial UL * (1-1/f)
= 1406 * (1-1/1.4426)
= 431.37                                                                                                  [1]
Total claims for 2019 = 431.37 + 1412 = 1843.37                                                           [1]

(iv)
Projected total claims for 2019 now exceed the premiums collected                       [½]
This will result in a loss for the insurance company                                    [½]
It might make a loss on policies written in 2018…                                       [½]
and 2020 as well                                                                        [½]
And possibly on earlier accident years that it thought were run off.                    [½]
It might need to revise its premiums                                                    [½]
And/or revise the expected loss ratio                                                   [½]
This challenges all of the underlying assumptions of the model                          [½]
e.g. need to take inflation into account                                                [½]
                                                            [Marks available 4½, maximum 3]
                                                                                  [Total 12]

  Most candidates answered this question well apart from the odd mistake in algebra. Part
  (iv) was weaker with few candidates making enough points or explaining them clearly
  enough to score full marks



Q3
(i)
For the given derivative:
Delta is the rate of change of the derivative with respect to the underlying                              [1]
Gamma is the rate of change of Δ with respect to the underlying                                           [1]
Vega is the rate of change of the derivative with respect to the volatility of the
underlying                                                                                                [1]

(ii)


CM2A A2022                                                                 © Institute and Faculty of Actuaries
     CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


𝐾𝐾 = 𝐴𝐴0 𝑒𝑒 𝑟𝑟𝑟𝑟                                                                                            [1]

(iii)
The expected present value is given by:
𝑒𝑒 −𝑟𝑟(𝑇𝑇−𝑡𝑡) 𝐸𝐸𝑄𝑄 (𝐴𝐴𝑇𝑇 − 𝐾𝐾 | 𝐹𝐹𝑡𝑡 )                                                                      [1]
= 𝑒𝑒 −𝑟𝑟(𝑇𝑇−𝑡𝑡) (𝐴𝐴𝑡𝑡 𝑒𝑒 𝑟𝑟(𝑇𝑇−𝑡𝑡) − 𝐾𝐾)                                                                    [½]
= 𝐴𝐴𝑡𝑡 − 𝑒𝑒 −𝑟𝑟(𝑇𝑇−𝑡𝑡) 𝐾𝐾                                                                                   [½]

(iv)
Combining parts (i) and (iii):
      𝜕𝜕
Δ = 𝜕𝜕𝐴𝐴 �𝐴𝐴𝑡𝑡 − 𝑒𝑒 −𝑟𝑟(𝑇𝑇−𝑡𝑡) 𝐾𝐾� = 1                                                                      [1]
             𝑡𝑡
       𝜕𝜕Δ
Γ = 𝜕𝜕𝐴𝐴 = 0                                                                                                [½]
             𝑡𝑡
        𝜕𝜕
𝜈𝜈 = 𝜕𝜕𝜕𝜕 �𝐴𝐴𝑡𝑡 − 𝑒𝑒 −𝑟𝑟(𝑇𝑇−𝑡𝑡) 𝐾𝐾� = 0                                                                     [½]

(v)
For the underlying share Δ=1, Γ=0 and ν=0.                                                                  [1]
This is the same as for the forward contract                                                                [½]
Because a forward is effectively the same as owning the share if it pays no dividends                       [½]

(vi)
In theory, a forward contract could be used to delta-hedge a European call              [1]
By shorting a number of forwards equal to the delta of the call                         [1]
However, there would be no control of the gamma of the hedge over time                  [½]
This would make it likely that regular rebalancing is required                          [½]
As Delta of the call would be changing regularly                                        [½]
But the delta of the ‘hedging’ forwards would not change with them                      [½]
This could be costly in terms of time and resources                                     [½]
The hedge would also have no control of the Vega over time.                             [½]
This would mean that the hedger would be more exposed to changes in the volatility
of the asset                                                                            [½]
                                                            [Marks available 5½, maximum 3]
                                                                                  [Total 13]

  This question was answered well overall, though the calculation of Vega caused more
  difficulty than Delta or Gamma. As in the previous question, the final part was weaker
  with few candidates making enough points or explaining them clearly enough to score full
  marks.



Q4
(i)
We start from the fact that the SDE for 𝑋𝑋𝑡𝑡 is 𝑑𝑑𝑑𝑑𝑡𝑡 = 𝐴𝐴𝑡𝑡 𝑑𝑑𝑑𝑑 + 𝐵𝐵𝑡𝑡 𝑑𝑑𝑍𝑍𝑡𝑡 , where 𝐴𝐴𝑡𝑡 = 𝛼𝛼𝛼𝛼𝛼𝛼(𝑇𝑇 − 𝑡𝑡)
and 𝐵𝐵𝑡𝑡 = 𝜎𝜎𝜎𝜎(𝑇𝑇 − 𝑡𝑡).
We can now apply Ito’s lemma to the function 𝑓𝑓(𝑥𝑥, 𝑡𝑡) = exp(𝑎𝑎(𝑇𝑇 − 𝑡𝑡) − 𝑥𝑥), whose
derivatives are:




CM2A A2022                                                                   © Institute and Faculty of Actuaries
         CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


𝜕𝜕𝜕𝜕
𝜕𝜕𝜕𝜕
       = −𝑒𝑒 𝑎𝑎(𝑇𝑇−𝑡𝑡)−𝑥𝑥 = −𝑓𝑓                                                                                          [½]

𝜕𝜕2 𝑓𝑓
𝜕𝜕𝑥𝑥 2
         = 𝑓𝑓                                                                                                            [½]

𝜕𝜕𝜕𝜕
 = −𝑎𝑎′(𝑇𝑇 − 𝑡𝑡)𝑒𝑒 𝑎𝑎(𝑇𝑇−𝑡𝑡)−𝑥𝑥 = −𝑎𝑎′(𝑇𝑇 − 𝑡𝑡)𝑓𝑓
𝜕𝜕𝜕𝜕
                                                                                                                         [1]
We then have:
                   𝜕𝜕𝜕𝜕          1 𝜕𝜕2 𝑓𝑓                 𝜕𝜕𝜕𝜕
𝑑𝑑𝑑𝑑(𝑋𝑋𝑡𝑡 , 𝑡𝑡) = 𝜕𝜕𝜕𝜕 𝑑𝑑𝑋𝑋𝑡𝑡 + 2 𝜕𝜕𝑥𝑥 2 �𝑑𝑑𝑋𝑋𝑡𝑡 2 � + 𝜕𝜕𝜕𝜕 𝑑𝑑𝑑𝑑                                                         [1]
       𝜕𝜕𝜕𝜕                           1 𝜕𝜕2 𝑓𝑓                                 𝜕𝜕𝜕𝜕
= 𝜕𝜕𝜕𝜕 (𝐴𝐴𝑡𝑡 𝑑𝑑𝑑𝑑 + 𝐵𝐵𝑡𝑡 𝑑𝑑𝑍𝑍𝑡𝑡 ) + 2 𝜕𝜕𝑥𝑥 2 ((𝐴𝐴𝑡𝑡 𝑑𝑑𝑑𝑑 + 𝐵𝐵𝑡𝑡 𝑑𝑑𝑍𝑍𝑡𝑡 )2 ) + 𝜕𝜕𝜕𝜕 𝑑𝑑𝑑𝑑                                  [1]
                                       1         2
= −𝑓𝑓(𝐴𝐴𝑡𝑡 𝑑𝑑𝑑𝑑 + 𝐵𝐵𝑡𝑡 𝑑𝑑𝑍𝑍𝑡𝑡 ) + 2 𝑓𝑓𝐵𝐵𝑡𝑡 𝑑𝑑𝑑𝑑 + −𝑎𝑎′(𝑇𝑇 − 𝑡𝑡)𝑓𝑓𝑓𝑓𝑓𝑓                                                    [1]
                   1
= 𝑓𝑓 �−𝐴𝐴𝑡𝑡 + 2 𝐵𝐵𝑡𝑡 2 − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡)� 𝑑𝑑𝑑𝑑 − 𝑓𝑓𝐵𝐵𝑡𝑡 𝑑𝑑𝑍𝑍𝑡𝑡                                                             [1]
The factor in brackets can be written as:
        1                                             1
−𝐴𝐴𝑡𝑡 + 2 𝐵𝐵𝑡𝑡 2 − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡) = −𝛼𝛼𝛼𝛼𝛼𝛼(𝑇𝑇 − 𝑡𝑡) + 2 (𝜎𝜎𝜎𝜎(𝑇𝑇 − 𝑡𝑡))2 − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡)                                 [½]
                                      𝜎𝜎2
= −𝜇𝜇�1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) � + 2𝛼𝛼2 (1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) )2 − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡)                                                   [½]
So we get:
                                                          𝜎𝜎2                         2
𝑑𝑑𝑑𝑑(𝑋𝑋𝑡𝑡 , 𝑡𝑡) = 𝑓𝑓 �−𝜇𝜇�1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) � + 2𝛼𝛼2 �1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) � − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡)� 𝑑𝑑𝑑𝑑 − 𝑓𝑓𝑓𝑓𝑓𝑓(𝑇𝑇 − 𝑡𝑡)𝑑𝑑𝑍𝑍𝑡𝑡
                                                                                                                    [1]
                                                                               [Marks available 8, maximum 6]

(ii)
In order for 𝑓𝑓(𝑋𝑋𝑡𝑡 , 𝑡𝑡) to be a martingale, the drift coefficient must be zero.                                       [1]
So the function a must satisfy the (ordinary) differential equation:
                                𝜎𝜎2                             2
−𝜇𝜇�1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) � + 2𝛼𝛼2 �1 − 𝑒𝑒 −𝛼𝛼(𝑇𝑇−𝑡𝑡) � − 𝑎𝑎′ (𝑇𝑇 − 𝑡𝑡) = 0                                                  [1]


(iii)
Note that the equation given in the question can be rearranged as:
                                  𝑡𝑡
𝑓𝑓(𝑋𝑋𝑡𝑡 , 𝑡𝑡) = 𝐵𝐵(𝑡𝑡, 𝑇𝑇)exp �− ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑�                                                                           [1]
The payoff from the zero-coupon bond is:
𝐵𝐵(𝑇𝑇, 𝑇𝑇) = 1                                                                                                           [½]
If we let t=T in the equation above, we get:
                                     𝑇𝑇                   𝑇𝑇
𝑓𝑓(𝑋𝑋𝑇𝑇 , 𝑇𝑇) = 𝐵𝐵(𝑇𝑇, 𝑇𝑇) exp �− ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑� = exp �− ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑�                                                   [½]
                                                     𝑇𝑇
i.e. exp[𝑎𝑎(0) − 𝑋𝑋𝑇𝑇 ] = exp �− ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑�                                                                           [½]
                   𝑇𝑇
Or 𝑎𝑎(0) = 𝑋𝑋𝑇𝑇 − ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑                                                                                           [1]
Using the definition of the process 𝑋𝑋𝑡𝑡 ,this is:
                      𝑇𝑇             𝑇𝑇
𝑎𝑎(0) = 𝑟𝑟𝑇𝑇 𝑏𝑏(0) + ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑 − ∫0 𝑟𝑟𝑠𝑠 𝑑𝑑𝑑𝑑                                                                       [½]
Since 𝑏𝑏(0) = 0, the extra condition required is 𝑎𝑎(0) = 0.                                                            [1]
                                                                                                                 [Total 13]

   Question 4 proved to be challenging for many candidates, with many making mistakes
   when finding the partial derivatives at the start of part (i). Marks were awarded for later



CM2A A2022                                                                                © Institute and Faculty of Actuaries
      CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report



 correct steps in the algebra so most candidates scored partial marks. In part (ii) it was
 still possible to score full marks even if part (i) was not correct



Q5
(i)
                                  𝜎𝜎2
𝐸𝐸[(1 + 𝑖𝑖𝑡𝑡 )] = exp � 𝜇𝜇 + 2 � = 1.035                                                                   [1]
𝑉𝑉𝑉𝑉𝑉𝑉[(1 + 𝑖𝑖𝑡𝑡 )] = exp( 2𝜇𝜇 + 𝜎𝜎 2 )[exp(𝜎𝜎 2 ) − 1] = 0.022                                            [1]
Therefore:
                     0.022
exp(𝜎𝜎 2 ) − 1 = 1.0352                                                                                  [½]
             0.022
𝜎𝜎 2 = ln �1.0352 + 1� = 0.00037333
𝜎𝜎 = 0.0193                                                                                              [½]
            0.00037333
exp � 𝜇𝜇 +       2
                      � = 1.035                                                                          [½]
                      0.00037333
𝜇𝜇 = ln(1.035) −             2
                                         = 0.0342                                                        [½]

(ii)
Option A:
(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿(𝜇𝜇, 𝜎𝜎 2 )
𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝑁𝑁(𝜇𝜇, 𝜎𝜎 2 )                                                                          [½]
𝑙𝑙𝑙𝑙 ∏𝑡𝑡=15                     𝑡𝑡=15
        𝑡𝑡=1 (1 + 𝑖𝑖𝑡𝑡 ) = ∑𝑡𝑡=1 𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 )                                                         [1]
As {𝑖𝑖𝑡𝑡 } are independent:                                                                              [½]
∑𝑡𝑡=15
   𝑡𝑡=1 𝑙𝑙𝑙𝑙(1 + 𝑖𝑖𝑡𝑡 ) ~ 𝑁𝑁(15𝜇𝜇, 15𝜎𝜎 )
                                            2
                                                                                                         [½]
∏𝑡𝑡=15                                              2
    𝑡𝑡=1 (1 + 𝑖𝑖𝑡𝑡 ) ~ 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿(15𝜇𝜇, 15𝜎𝜎 )                                                   [½]
15𝜇𝜇 = 0.513                                                                                             [½]
15𝜎𝜎 2 = 0.0056                                                                                          [½]
Let 𝑆𝑆15 be the accumulated amount after 15 years of a single investment of one:
                                 15𝜎𝜎2                 0.00560
𝐸𝐸[𝑆𝑆15 ] = exp � 15𝜇𝜇 + 2 � = exp � 0.513 + 2 � = 1.6750                                                [1]
The accumulated sum is 500 × 𝐸𝐸[𝑆𝑆15 ] = £837.49 (or 837.67 with full precision)                         [½]
𝑉𝑉𝑉𝑉𝑉𝑉[𝑆𝑆15 ] = exp( 30𝜇𝜇 + 15𝜎𝜎 2 )[exp(15𝜎𝜎 2 ) − 1]                                                   [1]
= exp(2 × 0.513 + 0.0056)[exp(0.0056) − 1] = 0.0157                                                      [½]
Therefore, the standard deviation of £500 is 500 × �𝑉𝑉𝑉𝑉𝑉𝑉[𝑆𝑆15 ] = £62.65 (or £62.77
with full precision)                                                                                     [½]

Option B:
The accumulated sum after 10 years is:
500 × (1.04)10 = £740.12                                                                                 [1]
The expected value of the accumulated sum at the end of 15 years is:
740.12 × [0.15 × 1.0055 + 0.25 × 1.015 + 0.4 × 1.0455 + 0.2 × 1.075 ] = £884.83                          [1]
To find the variance of the accumulation we first find the expected value of the square
of the accumulation as follows:
740.122 × [0.15 × 1.00510 + 0.25 × 1.0110 + 0.4 × 1.04510 + 0.2 × 1.0710 ] =
793,430.11                                                                                               [1]
[Or 793,425.50 using rounded figures.]
The variance of the accumulation is:
793,430.11 − 884.832 = 10500.179                                                                         [1]


CM2A A2022                                                                © Institute and Faculty of Actuaries
    CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report



The standard deviation is √10500.179 = £102.47                                                           [½]

(iii)
                                      775
For Option A we require 𝑃𝑃 �𝑆𝑆15 < 500�                                                                  [½]
= 𝑃𝑃(𝑆𝑆15 < 1.55)                                                                                        [½]
= 𝑃𝑃(ln (𝑆𝑆15 ) < ln (1.55))                                                                             [½]
where ln (𝑆𝑆15 )~𝑁𝑁(15𝜇𝜇, 15𝜎𝜎 2 ) = 𝑁𝑁(0.513 , 0.00560)                                                 [½]
                   ln(1.55)−0.513
= 𝑃𝑃 �𝑁𝑁(0,1)) <                 �                                                                       [½]
                      √0.00560
= 𝑃𝑃(𝑁𝑁(0,1)) < −0.9988) = 15.9% (or 15.8% with full precision)                                          [½]

For Option B we examine the lowest possible pay out.
There is a 15% probability that the amount will be 500 × 1.0410 × 1.0055 = £758.81 <
£775. This is the minimum value that the policyholder will receive.                  [½]
There is a 25% probability that the amount will be 500 × 1.0410 × 1.015 = £777.87 >
£775                                                                                 [½]
Therefore the probability of a payment less than £775 is 15%.                        [1]

(iv)
Option A is riskier in term of a lower minimum possible pay out                            [1]
but Option B is riskier in terms of having a larger standard deviation.                    [1]
The risk of a shortfall relative to £775 is greater for Option A.                          [1]
                                                                [Marks available 3, maximum 2]
                                                                                     [Total 23]

 Many candidates reached the correct final answers in this question, but to score full
 marks in part (ii) candidates needed to explain their steps, especially where the
 independence of the returns is important.

 In part (iii) some candidates made mistakes by calculating the expected one-year return
 then raising it to the power of the investment term, which does not give the same answer
 as calculating each ‘path’ for the returns then applying the probabilities at the end.




Q6
(i)
Consider two portfolios:
Portfolio A = one long share and one short forward                                                       [½]
Portfolio B = 𝐾𝐾𝑒𝑒 −𝑟𝑟𝑟𝑟 + 𝑋𝑋𝑒𝑒 −𝑟𝑟 + 𝑋𝑋𝑒𝑒 −2𝑟𝑟 in cash                                                  [½]

At time T, these portfolios are worth:
Portfolio A = 𝑆𝑆𝑇𝑇 + 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−1) + 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−2) − (𝑆𝑆𝑇𝑇 − 𝐾𝐾) = 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−1) + 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−2) + 𝐾𝐾    [½]
Portfolio B = 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−1) + 𝑋𝑋𝑒𝑒 𝑟𝑟(𝑇𝑇−2) + 𝐾𝐾                                                         [½]
These portfolios have the same value at time T                                                           [½]
By the principle of no-arbitrage, these portfolios must have the same values at all times
including time 0.                                                                                        [½]
At time 0, the forward has value 0, so:



CM2A A2022                                                                © Institute and Faculty of Actuaries
    CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


𝑃𝑃𝑃𝑃𝑃𝑃𝑃𝑃 𝐴𝐴 = 𝑃𝑃𝑃𝑃𝑃𝑃𝑃𝑃 𝐵𝐵 ∴ 𝑆𝑆0 − 0 = 𝐾𝐾𝑒𝑒 −𝑟𝑟𝑟𝑟 + 𝑋𝑋𝑒𝑒 −𝑟𝑟 + 𝑋𝑋𝑒𝑒 −2𝑟𝑟 = 𝐾𝐾𝑒𝑒 −𝑟𝑟𝑟𝑟 + 𝐼𝐼                      [½]
Where 𝐼𝐼 is the present value of future cash payments.
Finally, rearranging the previous line: 𝐾𝐾 = (𝑆𝑆0 − 𝐼𝐼)𝑒𝑒 𝑟𝑟𝑟𝑟                                                 [½]

(ii)
Using the answer in part (i)
𝐼𝐼 = 5(𝑒𝑒 −0.05 + 𝑒𝑒 −2∗0.05 ) = 9.28033                                                                       [1]
𝐾𝐾 = (100 − 𝐼𝐼)𝑒𝑒 0.15                                                                                         [½]
𝐾𝐾 = $105.40                                                                                                   [½]

(iii)
In isolation, the new forward price will be higher without any dividends                   [½]
But the investor has already contracted to buy the share for the old, lower forward price [½]
So the investor’s long position in the forward contract will now have a positive value     [½]
The investor might also consider why the dividends have been cancelled                     [½]
If the share price has also moved because of the announcement, then this will also
change the value of the investor’s position                                                [½]
                                                             [Marks available 2½, maximum 2]
                                                                                      [Total 8]

 Part (i) of this question caused difficulty for some candidates, with many trying to
 incorporate the dividends but producing a pair of portfolios that did not have equal value.
 Partial marks were often earned though, and parts (ii) and (iii) were answered well.



Q7
(i)
𝑈𝑈(𝑤𝑤) = 𝑤𝑤 − 6𝑤𝑤 2
𝑈𝑈 ′ (𝑤𝑤) = 1 − 12𝑤𝑤                                                                                           [½]
𝑈𝑈 ′′ (𝑤𝑤) = −12                                                                                               [½]
            −𝑈𝑈′′(𝑤𝑤) 12
𝐴𝐴(𝑤𝑤) = 𝑈𝑈′(𝑤𝑤) = (1−12𝑤𝑤)                                                                                    [½]
               144
𝐴𝐴′ (𝑤𝑤) = (1−12𝑤𝑤)2 > 0                                                                                       [½]
              −𝑈𝑈′′(𝑤𝑤)      12𝑤𝑤
𝑅𝑅(𝑤𝑤) = 𝑤𝑤 𝑈𝑈′(𝑤𝑤) = (1−12𝑤𝑤)                                                                                 [½]
               12          144𝑤𝑤           12
𝑅𝑅 ′ (𝑤𝑤) = (1−12𝑤𝑤) + (1−12𝑤𝑤)2 = (1−12𝑤𝑤)2 > 0                                                               [½]

(ii)
Option A:
w = 0.05
E(U(w)) = 0.05-6*0.052 = 0.035                                                                                 [1]

Option B:
w = 0.08 with probability 0.2, w = 0.06 with probability 0.7, w = 0.03 with
probability 0.1                                                                        [½]
E(U(w)) = 0.2 * (0.08-6*0.082) + 0.7 * (0.06-6*0.062) + 0.1 * (0.03-6*0.032) = 0.03766 [1]

Option C:


CM2A A2022                                                                      © Institute and Faculty of Actuaries
   CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


w = 0.065 with probability 0.5, w = 0.06 with probability 0.5                                         [½]
E(U(w)) = 0.5 * (0.065-6*0.0652) + 0.5 * (0.06-6*0.062) = 0.039025                                    [1]
The investor is likely to choose option C as it gives the highest expected utility.                   [1]

(iii)
One of the assumptions of the expected utility theorem is non-satiation.                    [½]
In terms of utility functions this means U’(w)>0.                                           [½]
For this investor U’(w) = 1-12w. If 1-12w>0 then w<0.08333, i.e. £83,333.                   [½]
If the investor had £65,000 then his wealth would exceed £83,333 under any outcome
with a return over 28% (e.g. in option 2 if the return was 60% or in option 3 if the return
was 30%).                                                                                   [½]
Therefore this utility function could not be used to assess the preferred option.           [½]
                                                              [Marks available 2½, maximum 2]
                                                                                      [Total 10]

 Many candidates answered parts (i) and (ii) of this question well and scored full, or close
 to full, marks.

 Part (iii) was more challenging with some candidates making vague points that did not
 relate to the specifics of the question, the key being how high the final wealth can be in
 options 2 and 3 under some scenarios.



Q8
(i)
20e7 x 0.08 = £35.013m                                                                                [1]

(ii)
We use the Black-Scholes model with a share price of 40 and a strike price of 35
d1 = 1.1647                                                                                           [1]
d2 = 0.9001                                                                                           [1]
N(d1) = 0.8779                                                                                        [1]
N(d2) = 0.8160                                                                                        [1]
Call price = 10.280                                                                                   [1]
So the implied equity value for the company is $10.280m

(iii)
This is N(d2) = 0.8160                                                                                [1]

(iv)
This is 40 – 10.28 = £29.7m                                                                           [1]

(v)
The value is the outstanding amount, rolled up to maturity at 8% pa, adjusted to allow
for defaults, and discounted back at 2% pa.                                                           [1]
So the values differ because the debt has a chance of default and has a higher interest
rate than the risk-free rate.                                                                         [1]

(vi)


CM2A A2022                                                             © Institute and Faculty of Actuaries
   CM2A – Financial Engineering and Loss Reserving – Core Principles - April 2022 - Examiners’ Report


We need e-7λ = 0.8160                                                                               [1]
So λ = 0.0291                                                                                       [1]
                                                                                              [Total 12]

 This question was answered well by many candidates. Applying the debt interest annually
 instead of continuously was a common mistake in part (i), but marks were still awarded in
 later parts if the working there was correct.



                                                                                    [Paper Total 100]

                        END OF EXAMINERS’ REPORT




CM2A A2022                                                             © Institute and Faculty of Actuaries


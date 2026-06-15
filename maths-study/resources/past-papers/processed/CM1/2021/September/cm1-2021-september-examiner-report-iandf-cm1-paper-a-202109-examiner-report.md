---
normalized_id: cm1-2021-september-examiner-report-iandf-cm1-paper-a-202109-examiner-report
exam_code: CM1
year: 2021
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM1/CM1A/Sep21/IandF_CM1_Paper A_202109_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm1-2021-september-examiner-report-iandf-cm1-paper-a-202109-examiner-report

INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                     September 2021

                Subject CM1 – Actuarial Mathematics
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

For numerical questions the Examiners’ approach to the solution is reproduced in this report;
other valid approaches are given appropriate credit. For essay-style questions, particularly
the open-ended questions in the later subjects, the report may contain more points than the
Examiners will expect from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.




Sarah Hutchinson
Chair of the Board of Examiners
December 2021



CM1A S2021                                                        © Institute and Faculty of Actuaries
         CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   CM1 provides a grounding in the principles of modelling as applied to actuarial
   work - focusing particularly on deterministic models which can be used to model and
   value known cashflows as well as those which are dependent on death, survival, or other
   uncertain risks.

   Please note that different answers may be obtained to those shown in these solutions
   depending on whether figures obtained from tables or from calculators are used in the
   calculations but candidates are not penalised for this. However, candidates may lose
   marks where excessive rounding has been used or where insufficient working is shown.

   Although the solutions show full actuarial notation, candidates were generally expected to
   use standard keystrokes in their solutions.

   Candidates should pay attention to any instructions included in questions; failure to do so
   can lead to fewer marks being awarded.

   In particular, where the instruction, “showing all working” is included and the candidate
   shows little or no working, then the candidate will be awarded very few marks.

   Where a question specifies a method to use (e.g. determine the present value of income
   using annuity functions) then when a candidate uses a different method the candidate will
   not be awarded full marks.

   Candidates are advised to familiarise themselves with the meaning of the command verbs
   (e.g. state, determine, calculate). These identify what needs to be included in answers in
   order to be awarded full marks.

   B. Comments on candidate performance in this diet of the examination.

   The comments that follow the questions concentrate on areas where candidates could
   have improved their performance. Where no comment is made, the question was
   generally answered well. The examiners look most closely at the performance of the
   candidates close to the pass mark and the comments therefore often relate to those scripts.

   A large number of candidates appeared to be inadequately prepared, in terms of not
   having sufficiently covered the entire breadth of the subject. We would advise candidates
   not to underestimate the quantity of study required for this subject.

   Candidates should be aware that the questions cannot be answered using knowledge alone
   and well prepared candidates will demonstrate application of their knowledge to the
   questions asked.

   Where candidates made numerical errors, the examiners awarded marks for the correct
   method used and also for the parts of the calculation that were correct. However, many
   candidates often did not show enough of their working to fully benefit from this.




CM1A S2021                                                           © Institute and Faculty of Actuaries
             CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


     The Examiners felt that the “open book” nature of the online exam led some candidates to
     rely on their notes much more than if the exam had been “closed book”. The Examiners
     strongly recommend that candidates prepare for online exams just as thoroughly as they
     would do if the exam were of the traditional “closed book” format. Candidates are
     recommended to use their notes only as a tool to check or confirm answers where
     necessary, rather than as a source for looking up the answers.

     C. Pass Mark

     The Pass Mark for this exam was 53.
     1344 presented themselves and 533 passed.

     Whilst the paper was of a similar standard to previous sittings there were questions within
     this paper that covered areas of the syllabus which hadn’t been examined recently. It was
     apparent that many candidates were not adequately prepared for this and therefore the
     examiners took this into consideration when setting the pass mark.

     Candidates need to be aware that examiners can ask questions from across the breadth of
     the syllabus and that they will be asked to apply their knowledge in different situations.
     Candidates are advised to access as much learning material as available to them and not
     rely on past papers alone when preparing to sit the examination.


Solutions for Subject CM1 Paper A– September 2021

Q1

         t     1 2         3      4     5 6         7    8 9 10
               +1 -1       +1     +1    +1 -1       0    -1 +1 +1

t=10 and 9: adjusted cashflows = +1 and +1

t=8: zeroise cashflow, adjusted cashflow = 0, need reserves @ t=7 of +1

t=7: adjusted cashflow =0 -1 = -1 (after reserve),
Zeroise cashflow, adjusted cashflow = 0, need reserves @ t=6 of +1

t=6: adjusted cashflow = -1-1= -2 (after reserve),
Zeroise cashflow, adjusted cashflow = 0, need reserves @ t=5 of +2

t=5: adjusted cashflow = 1-2=-1 (after reserve),
Zeroise cashflow, adjusted cashflow = 0, need reserves @ t=4 of +1

t=4: adjusted cashflow = 1-1 = 0 (after reserve),
STOP THIS RUN OF ZEROISING

t=3: cashflow = +1

t=2: zeroise cashflow, adjusted cashflow = 0, need reserves @ t=1 of +1



CM1A S2021                                                               © Institute and Faculty of Actuaries
                     CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


 t=1: adjusted cashflow = +1-1=0 (after reserve)

 Reserve

                 t   V   1        2    3        4    5        6    7       8    9   10
                         +1       0    0       +1   +2       +1   +1       0    0    0                                [1]

 Revised profit signature is
                 t       1    2       3    4        5    6        7    8       9 10
                         0    0       +1   0        0    0        0    0       +1 +1
                                                                                                                       [2]

      Generally well answered.

      Candidates needed to include some explanation on the derivation of the revised profit
      signature to gain full marks since the command word was “determine”.



 Q2
 (a)
µ55:60 µ=
=       55 + µ 60 0.000976 + 0.001918 =
                                      0.002894                                                                        [1]

 (b)
              l l       l     9703.708
  5   p55:60 = 60 × 65 = 65 =          = 0.97843082
              l55 l60 l55 9917.623                                                                                    [1]

 (c)
                 1                 1                   1
  2
       1
      q60:60 =     × ( 2 q60:60 ) = × (1 − 2 p60:60 ) = × (1 − 2 p60 × 2 p60 )
                 2                 2                   2                                                              [1]

           1   l62   1   9804.173  
                      2                   2

          = × 1 −    = × 1 −         = 0.004483816
           2   l60   2   9848.431  
                                                                                                                  [1]
                                                                                                               [Total 4]
      Well answered.



 Q3
 In all parts we are calculating expected present values                                                              [½]
 and the life is healthy at t = 0 (x = 40)                                                                            [½]

 (a)
 2,000 per annum payable continuously                                                                                 [½]
 when the life is in the sick state                                                                                   [½]
 for the first and any subsequent bouts of sickness                                                                   [½]


 CM1A S2021                                                                            © Institute and Faculty of Actuaries
           CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


All payments cease at time 20 (age 60)                                                                [½]

(b)
1,000 per annum payable continuously                                                                  [½]
while the life remains in the healthy state                                                           [½]
The contract ceases when the life leaves the healthy state for the first time or at
time 20 (or when life attains age 60)                                                                 [½]

(c)
20,000 lump sum payable immediately                                                                   [½]
on death from the sick state                                                                          [½]
if death occurs before time 20 (age 60)                                                               [½]
                                                                                                 [Total 6]

 Few candidates scored full marks. Most candidates omitted important elements in their
 descriptions such as the initial states of the life (healthy), annuity payments being made
 continuously, lump sums being paid immediately, whether return to the healthy state was
 permitted.

 A number of candidates were unable to demonstrate they understood the difference
 between an annuity type benefit and a lump sum benefit payable immediately when a
 transition occurs.



Q4
Working in $m
(a)   PV of outgo = 10 + 8𝑣𝑣 = 17.5472                                                                [1]
(b)   PV of income
    = v ( 0.5 ( Ia )6 + 3.5a6 ) + v 7 ( 8a7 − ( Ia )7 )
                                                                                                      [3]

       = v ( 0.5 ×16.3767 + 3.5 × 4.9173) + v 7 ( 8 × 5.5824 − 21.0321)
        = 23.9612 + 15.7134 = 39.6746                                                               [1½]
        NPV = 39.6746 – 17.5472 =$22.1274m                                                           [½]

 Generally well answered.

 This question specified that candidates should use annuity functions; those that did not
 were heavily penalised.

 Some candidates were unable to determine as to when annuity cashflows started. This led
 them to include erroneous discount factors.



Q5
The price is given by the present value of the expected future dividend payments:


CM1A S2021                                                             © Institute and Faculty of Actuaries
                       CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



        =              (
        P v 2 D0 1 + 1.06v + 1.062 v 2 + ... + 1.0610 v10 (1 + 1.03v + 1.032 v 2 + ...) @ 7% p.a.  )
                   (
= v 2 D0 a10j % + 1.0610 v10 a∞i %
                                                    *

                                                        )                                                                 [3]
               1.06   1
         where    =        j 0.94340% and 1.03
                          ⇒=                 =
                                                 1
                                                      ⇒ i=
                                                         *
                                                           3.88350%                                                       [1]
               1.07 1 + j                 1.07 1 + i*
 and
= D0                   =
                      $0.20     10
                            and a i'
                                        =
                                     9.58975     ∞i*
                                             and a                                      26.75                             [2]
                0.20
   =P                 ( 9.58975 + 0.910376 ×=
                                            26.75 ) 5.929
               1.1449                                                                                                     [½]
         Therefore, the required price is $5.93                                                                           [½]

           Many candidates failed to demonstrate how to translate a description of cashflows into
           an actuarial equation that accurately valued those cashflows.

           A common error was leaving out the second (6%) growth rate.

           A number of candidates missed out on marks by not giving their final answer to 2 decimal
           places.



         Q6
         Let it = annual effective spot rate for t-year period
           f t ,1 = annual effective one-year forward rate at time t

         107.60 = 6(vi1 + vi2 + vi3 ) + 100vi3
                                        2      3             3
                                                                                  (1)                                     [1]
         100 = 6.5(vi1 + vi2 ) + 100vi2
                                    2               2
                                                                                  (2)                                     [1]
          (1 + i2 ) = (1 + i1 ) × (1 + f1,1 ) = (1 + i1 ) × 1.045
                  2
                                                                                  (3)                                     [1]
                                              1
         From (3), vi2= vi ×
                           2        1
                                            1.045
         ⇒ from (2), 100 = 6.5 × v + ( 6.5 + 100 ) × v ×i1           i1
                                                                                1
                                                                              1.045
         ⇒ 100 = v × (6.5 + 6.5 + 100 )
                               i1
                                              1.045 1.045
         ⇒ i1 = 8.41388% p.a.                                                                                             [2]
         And from (3), i2 = 6.43895% p.a.                                                                                 [1]
         And from (1), 107.60 = 6 × (vi1 + vi2 ) + 106 × vi3 ⇒ i3 = 3.08345% p.a.
                                                                 2        3
                                                                                                                          [1]



           Poorly answered.




         CM1A S2021                                                                        © Institute and Faculty of Actuaries
                 CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



    Many candidates appeared to not understand the relationship between spot rates and
    forward rates, nor the meaning of par yield. This led many candidates to setting up
    incorrect formulae.

    Many candidates also calculated the gross redemption yield for the 3-year fixed interest
    bond. This provided no additional information to solve the question and therefore no
    marks for awarded for this.



  Q7                  = 30, 000 × 0.03 × Z + 250
             EPV Expenses                                                                                   [1]

             Where Z= EPV of $1 pa of the reversionary annuities
                  (12) m
                 a65:15  + a65:15
                            (12) f
                                   − 2a65:65:15
                                       (12) mf
             =                                                                                              [2]

                   l80m             m 13  15 l80  m 13 
                                                       m
 a   = a
    (12) m
            − v × m × a80 =  a65 −  − v × m ×  a80 − 
                 (12) m
                 65
                           15
                            (12) m

                                          24        l65   24 
    65:15
                   l65
          13          6,953.536              13 
= 13.666 −  − v15 ×              ×  7.506 − =    10.3372
          24          9, 647.797             24 

                   l80f             f 13  15 l80  f 13 
                                                       f
 a   = a
    (12) f
            − v × f × a80 =  a65 −  − v × f ×  a80 − 
                 (12) f
                 65
                            (12) f
                           15

                                          24       l65    24 
    65:15
                   l65
          13          7, 724.737             13 
= 14.871 −  − v15 ×               ×  8.989 − =   10.5954
          24          9, 703.708             24 

                           lm l f                 mf       13       l m l f  mf             13 
         = a65:65
   (12) mf
  a65:65:15 (12) mf
                    − v15 × 80m × 80f × a80:80=  a65:65
                                         (12) mf
                                                           −  − v15 × 80m × 80f ×  a80:80 − 
                           l65 l65                         24       l65 l65                 24 
                13           lm l f             13 
 =
 = 11.958 −  − v15 × 80m × 80f ×  5.857 − =           9.7230                                          [5½]
                24           l65 l65            24 
   ⇒ Z = 10.3372 + 10.5954 – 2 × 9.7230 = 1.4867                                                            [½]
  Single Premium = EPV Expenses + EPV annuity
  30, 000 × 1.03 × 1.4867 + 250 =
                                46,189.13
  Single Premium is $46,189                                                                                 [1]

    Poorly answered.

    Many candidates appeared to not understand how to value a reversionary annuity.

    Several candidates missed part of the annuity payment details when valuing the benefit.
    For example, assuming the benefit was payable in advance, or annually, or assuming the
    benefit was payable for the whole of the policyholder’s life.




  CM1A S2021                                                                 © Institute and Faculty of Actuaries
                       CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



  One common error was using an incorrect adjustment to the tabulated annuity rates to
  arrive at the monthly in arrears annuity rate.



 Q8
 (i)
 If 0 < t ≤ 4 then accumulation to time t is
      t                           t

  ∫       δ ( t ) dt         ∫ (0.06 + 0.02 t ) dt
                                                   e (0.06 t + 0.01t )
                                                                   2

=
e    0
                           =
                           e      0

                                                                                                                               [1]
 If 4 < t then accumulation to time t is
     4                     t                  
     ∫                               ∫
      (0.06 + 0.02 t ) dt + (0.08− 0.01t ) dt 
                                               
     0                     4                  
 e                                                                                                                             [1]
    ( 0.06×4 + 0.01×42 ) 0.08t −0.005t 2 
                                                           t
                                                                                          (          )
                                                                         0.08t −0.005t 2 − 0.32−0.08                        2
                                                                                                           0.16+ 0.08t −0.005t 
 =e                     .e = e=
                              0.4 
                                 .e  
                                        e      4                                                                               

                                                                                                                               [1]
 So:
 a = 0,                                                                                                                        [½]
 b = 0.06                                                                                                                      [½]
 c = 0.01                                                                                                                      [½]
 f = 0.16                                                                                                                      [½]
 g = 0.08                                                                                                                      [½]
 h= -0.005                                                                                                                     [½]

 (ii)
 Accumulated amount at t=13 is:
       A ( 0,13)         A ( 0,13)
 600 ×           + 900 ×
       A ( 0,3)          A ( 0,9 )
                                                                                                                               [2]
         e             0.355 
                           e                 0.355 
 = 600 ×  0.270  + 900 ×  0.475                                                                                            [1]
         e               e      
                                

 = 653.23 + 798.23 = £1,451.46                                                                                                 [1]

 (iii)
 Let j% per monthly yield
 Then 600(1 + j )120 + 900(1 + j ) 48 =
                                      1, 451.46                                                                                [1]

 It can be seen that j = 0% gives a left-hand side value of 1,500 which implies that j must
 be slightly negative                                                                       [½]
 Try j = -0.1% and left-hand side value is 1,389.92 (which is further from 1451.46
 than 1500)                                                                                 [1]
 Hence, answer is 0.0 % per month                                                           [½]



 CM1A S2021                                                                                   © Institute and Faculty of Actuaries
          CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


(iv)
The force of interest is negative for all times after time 8                            [½]
So the 900 decreases in value from the time of investment onwards. Whereas the 600
increases for a period and then decreases                                               [½]
The overall effect is that the accumulated value of the investments returns roughly to
the original amounts invested, hence the overall yield is approximately 0.0% per annum [½]
                                                             [Marks available 1½, maximum 1]

  Part (i) Generally well answered. Candidates should remember that the command verb
 “Determine” means that candidates will only be awarded full marks if they made clear
 their reasoning. Listing the numeric answers is not sufficient to gain full marks.

 Part (ii) Many candidates appeared to be unfamiliar with how the accumulation factors
 derived in part (i) could be used to answer part (ii), and so used a valid alternative but
 more time-consuming approach.

 A common error was to use the accumulation factors derive in part (i) but not to apply it
 from time zero.

 Part (iii) Poorly answered. A common error was to calculate the effective interest rate per
 annum instead of per month.

 Part (iv) Poorly answered.



Q9
(i)
                                    l
              =
EPV Premiums Pa30:30
                 4%
                       50,000 × v30 60
                                    l30
                                      9, 287.2164
P × 17.756 = 50,000 × 0.30832 ×                   = 14, 425.00 ⇒ P =
                                                                   812.40
                                      9,925.2094                                                     [½]
                           l
Reserve:=
        25V  50, 000 × v5 × 60 − 812.40 × a55:5                                                    [½]
                           l55
                     9, 287.2164
=50,000 × 0.821927 ×              − 812.40 × 4.585 =
                                                   36, 207.97
                     9,557.8179                                                                      [½]

Mortality profit

DSAR= 0 − 36, 207.97 = −36, 207.97                                                                   [1]

E ( death)= (315 + 2) × q54= 317 × 0.003976 = 1.2604                                                 [1]

EDS = 1.2604 × ( −36, 207.97 ) =−45, 636.24
                                                                                                     [½]




CM1A S2021                                                            © Institute and Faculty of Actuaries
               CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



     ADS = 2 × ( −36, 207.97 ) = −72, 415.95
                                                                                                          [½]

     EDS − ADS =
               26,779.71
     Mortality profit is $26,780.                                                                         [½]

     (ii)
     A death leads to a release of reserve which contributes to profit                       [1]
     With a Pure Endowment no death benefit is paid                                          [1]
     So higher than expected deaths leads to higher than expected profit                     [½]
     The company expected approximately 1.3 deaths whereas 2 deaths actually occurred
     So, mortality was heavier than expected                                                 [1]
     Thus higher mortality led to a mortality profit                                         [½]
                                                                   [Marks available 4, maximum 3]

      Well answered.

      Common errors included using a mortality rate when calculating the number of expected
      deaths for an age that did not correspond to the reserve calculated and including a sum
      assured when calculating the death sum at risk.

      In part (ii) well prepared candidates covered the importance of the release of the reserve



 Q10
 (i)
 (Denoting the revised rates with a ’ suffix)
 If we assume forces of decrement are constant over individual years of age                               [½]
 and that independent and dependent forces of decrement are equal,                                        [½]
 Then we can use: -
             ( ad )47
                   w

= µ47
    w

       ( ad ) + ( ad )
              d        w
                         × − ln
                              =     (
                                ( ap )47
                                           1,500
                                         390 + 1,500
                                                    )× ( − ln (=
                                                               0.9622 ) ) 0.0305817
                  47          47                                                                          [2]
     q47w =(
           1− e   − µ47
                     w

                          )=
                           (1 − e   −0.0305817
                                                 )=
                                                  0.0301188
                                                                                                          [1]

     The revised independent probability of withdrawal, 𝑞𝑞′𝑤𝑤
                                                           47 , is therefore
     2.5 × 0.0301188 = 0.0752970                                                                          [½]

     And
            − ln (1 − q47
     µ47' w =          'w
                          )=
                           0.0782827
                                                                                                          [1]

     The force of mortality at age 47 implied by the ELT15 Females rates will be:
     − ln (1 − q47
                ELT 15( F )
                            )=
                             − ln (1 − 0.00219 ) =
                                                 0.00219240
                                                                                                          [1]
     and the revised independent force of mortality,



     CM1A S2021                                                            © Institute and Faculty of Actuaries
                 CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



     µ47
      'd
         =
         0.6 × 0.00219240 =
                          0.00131544                                                                             [½]

     (ii)
     We have
                     µ47
                      'd
                                   −( µ47 + µ47 )
 ( aq )47
                                        'd    'w
            'd
 =                       'w 
                              1 − e               
                 µ47 + µ47 
                  'd
                                                                                                                [1]
=
        0.00131544
  0.00131544 + 0.0782827
                         1− e (            (
                             − 0.00131544 + 0.0782827 )
                                               = 0.00126445            )                                         [1]

             µ47
 ( aq )47 ' d ' w 1 − e ( 47 47 ) 
               'w
            'w           − µ' d +µ' w
 =
          µ47 + µ47                  
=
              0.078287
       0.00131544 + 0.0782827
                              1− e (       (
                                  − 0.00131544 + 0.0782827 )
                                                    = 0.0752482        )                                         [1]

     Thus
                 Age (𝑥𝑥)     Number of               Number of            Number of
                              employees               deaths               withdrawals
                                   (𝑎𝑎𝑎𝑎)𝑥𝑥               (𝑎𝑎𝑎𝑎)𝑑𝑑𝑥𝑥            (𝑎𝑎𝑎𝑎)𝑤𝑤
                                                                                      𝑥𝑥
                 47           50,000.00               63.22                3,762.41
                                                                                                                 [2]

     (iii)
     Concerns with the use of the revised multiple decrement table:
     The population in the future may be different to the past population on which the
     analysis was conducted                                                                     [1]
     No allowance is made for future improvements in mortality or company initiatives
     that may reduce withdrawals                                                                [1]
     There may be group events (such as workplace fire, outbreak of Covid) which may
     occur in the future but did not occur in the investigation period                          [1]
     The investigation estimates may not be accurate                                            [½]
     The assumptions underlying the calculations in part (i) may not be valid                   [½]
     The new table is significantly different from the original table                           [½]
     Other valid points on why using the past to model the future may not be valid              [½]
                                                                     [Marks available 5, maximum 3]
                                                                                          [Total 15]

      Part (i) Very poorly answered.

      Most candidates did not appear to appreciate the difference between dependent and
      independent decrement rates, nor the difference between forces and rates of decrement.
      Most candidates missed out steps when deriving the required results. Many candidates
      lost out on marks as they did not quote the results to 6 significant figures.

      Part (ii) Many candidates made a good attempt, even if they had struggled in part (i).




     CM1A S2021                                                                   © Institute and Faculty of Actuaries
                       CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



         Part (iii) Poorly answered.



       Q11
       (i)
       6,000a50:15
               (12)
                     6%                                             (
                        =0.6 × (6,000) + 0.04 × (6,000) × a50:15 6% − 1         )
              1                           l                 1.019231  1
        +            × S × A50:15
                            1
                                     + S × 65 × v15j % with        =      ⇒=
                                                                           j 0.04
         1.019231                 j%
                                          l50                 1.06   1+ j
             1.019231 1
        with          =         ⇒ =j 0.04
                1.06      1+ j
                                                                                                                     [5]

                        l65 8,821.2612
    a50:15 6% 10.038;
    =            =                   = ; A50:15 4% 0.56719;
                        l50 9,712.0728
                               l
         1
        A50:15 4%
                  = A50:15 4% − 65 v15
                                    4% = 0.06286
                                                                                                                   [2½]
                               l50
                                      11  l65 15 
        a50:15
           (12)
                 6%
                    = a50:15 6% −      1 − v6% = 9.753
                                      24  l50    
        ⇒ 6000 × 9.753 = 3, 600 + 0.04 × 6, 000 × 9.038 + S ( 0.06167 + 0.50433)
       ⇒S=    93,199
       $93,199 rounded to the nearest $1,000 is $93,000.                                                             [½]

       (ii)
                    93, 000 = 6, 000
                                    s15(12)@ i
       Require                                                                                                       [1]
       Now
                     (1.00434)15 − 1
        s
          (12)
                   =
         15 @ 0.434%
                           d (12)
                         −12
               d (12) 
        where 1 −       = 1.00434 ⇒ d = 0.004329828
                                       (12)

                   12 
        s15(12)@ 0.434% = 15.5007
                                                                                                                     [1]
        6,000
             s    (12)
                        = 6,000 × 15.50071
                  15 @ 0.434%
= 93,004.2 ≈ 93,000                                                                                                  [½]
 Therefore rate of return at least 0.434% per annum                                                                  [½]

       (iii)
       Policyholder would expect a higher maturity benefit than basic sum assured of $93,000                         [½]
       as they would expect bonuses to be declared every year                                                        [1]
       A higher maturity benefit will give a higher return                                                           [½]




       CM1A S2021                                                                     © Institute and Faculty of Actuaries
                     CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report


        In addition to the survival benefit the policyholder will receive death cover during the
        term of the contact which is not measured by the return calculated in part (ii) but has
        value to the policyholder                                                                               [1]

        The policy may be obligatory, for example to back a mortgage                                            [½]

        This policy may be cheaper than others on the market                                                    [½]

        Although 0.434% is low, it is guaranteed over 15 years and this guarantee might be
        important, for example for those planning to retire at 65                            [½]
                                                                  [Marks available 4½, maximum 3]

        (iv)
 SA = 93, 000(1.05)5 = 118, 694                                                                                 [1]
    118, 694 1                       l65
=5V          A55:10 4% + 118, 694v10
                                  4%     + 0.04 × 6, 000a55:10 6% − 6, 000a55:10
                                                                               (12)
                                                                                     6%
    1.019231                         l55                                                                        [3]

                             l     8,821.2612
    =             =
    a55:10 6% 7.610    ; 65                 =
                                              ; A55:10 4% 0.68388;
                             l55 9,557.8179
                               l
       1
     A55:10     = A55:10 4% − 65 v10  = 0.06037
             4%
                               l55 4%
                                      11  l65 10 
        a55:10
           (12)
                    = a55:10 6% −      1 − v = 7.388
                 6%
                                      24  l55 6% 
                                                                                                                [1]

        5V = 7, 031.18 + 74, 006.18 + 1826.40 − 44,327.25 = 38,536.51
        Reserve is $38,537                                                                                    [1]
                                                                                                        [Total 20]

            Part (i) Generally well answered.

            Common errors centred on how the benefits were valued, with many candidates not
            splitting the benefits into those payable on death and those on survival, in order to be able
            to apply the bonus adjustment only to the benefit on death. Another common error was
            valuing the renewal expenses using a monthly annuity rate.

            Part (ii) Poorly answered.

            Many candidates attempted to include mortality in their calculations. Candidates did not
            seem able to switch between the mathematics of finance and life contingencies within one
            question.

            Part (iii) Many candidates failed to consider the nature of the benefits provided by a with
            profit endowment assurance and instead concentrated on the size of the premium.




        CM1A S2021                                                               © Institute and Faculty of Actuaries
         CM1A - Actuarial Mathematics - Core Principles - September 2021 - Examiners’ report



 Part (iv) Common errors included using a sum assured that ignored historic bonuses,
 using expense elements taken from the initial equation of value (e.g., including a
 deduction from the renewal expense annuity, or including an initial expense).

                                                                                  [Paper Total 100]

                      END OF EXAMINERS’ REPORT




CM1A S2021                                                           © Institute and Faculty of Actuaries



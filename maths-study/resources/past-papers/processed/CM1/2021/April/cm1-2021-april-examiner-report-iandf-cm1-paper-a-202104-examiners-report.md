---
normalized_id: cm1-2021-april-examiner-report-iandf-cm1-paper-a-202104-examiners-report
exam_code: CM1
year: 2021
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM1/CM1A/Apr21/IandF_CM1_Paper A_202104_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm1-2021-april-examiner-report-iandf-cm1-paper-a-202104-examiners-report

    INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                         April 2021

                    Subject CM1 - Actuarial Mathematics
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
circumstances may have changed if using these reports for revision


Paul Nicholas
Chair of the Board of Examiners
July 2021




                                                            © Institute and Faculty of Actuaries
             CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   1. CM1 provides a grounding in the principles of modelling as applied to actuarial
      work - focusing particularly on deterministic models which can be used to model and
      value known cashflows as well as those which are dependent on death, survival, or
      other uncertain risks.

   2. Please note that different answers may be obtained to those shown in these solutions
      depending on whether figures obtained from tables or from calculators are used in the
      calculations, but candidates are not penalised for this. However, candidates may not
      be awarded marks where excessive rounding has been used or where insufficient
      working is shown.

   3. These solutions use full actuarial notation although candidates who used notation
      based on standard keystrokes were given full credit.


   B. Comments on candidate performance in this diet of the examination.

   1. The comments that follow the questions concentrate on areas where candidates could
      have improved their performance. Where no comment is made, the question was
      generally answered well by most candidates. The examiners look most closely at the
      performance of the candidates close to the pass mark and the comments therefore
      often relate to those candidates.
   2. There appeared to be a large number of ill-prepared candidates who had
      underestimated the quantity of study required for the subject.
   3. The nature of the online exam format meant that there was little on the paper that
      could be answered via knowledge based alone.
   4. Where candidates made numerical errors, examiners awarded marks for the correct
      method used and also for the parts of the calculation that were correct. However,
      many candidates often did not show enough of their working to fully benefit from
      this.
   5. The examiners felt that the “open book” nature of the online exam led some
      candidates to rely on their notes much more than if the exam had been “closed book”.
      The examiners strongly recommend that candidates prepare for online exams just as
      thoroughly as they would do if the exam were of the traditional “closed book” format.
      Candidates should treat it as a bonus that they can refer to their notes but they should
      not be relying on being able to do so.


   C. Pass Mark
   The Pass Mark was 58.
   1,856 presented themselves and 941 passed.




CM1A A2021                                                             © Institute and Faculty of Actuaries
                        CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


     Solutions for CM1A – April 2021

                              l48 × l48 1           l48 × l48 1  l53 × l53 
     Q1              q=  1
                                       × × 5 q=              × × 1 −                                            [2]
                              l45 × l45 2           l45 × l45 2  l48 × l48 
                35    45:45                   48:48


                     (9, 753.4714) 2 1  (9, 630.0522) 2 
  =                                 × × 1 −                                                                     [1]
                     (9,801.3123) 2 2  (9, 753.4714) 2 
               1
= 0.990261683 × × ( 0.02514763)                                                                                   [1]
               2
 = 0.012451366


            This question was generally well-answered.



     Q2
     (i)
                a=0,
                b=30                                                                         [a and b together ½]
                m= 150,000                                                                                    [½]
                n=0.02                                                                                         [1]
                z=− ln (1.03) − 0.01 − 0.02 =
                                            −0.059559
                                                                                                                  [1]
     (ii)
                    150000 × 0.02 −0.059559t 30
                =−                 e                                                                          [1½]
                      0.059559             0
                = 50,370.22 [1 – 0.167500]                                                                        [1]

                = 41, 933.21 (without rounding 41,933.28)                                                       [½]
                                                                                                           [Total 6]


            Most candidates scored some marks in part (i) and a significant number of candidates
            were then able to use the answers to part (i) to make an attempt at part (ii). However,
            a surprising number of candidates struggled to perform the straightforward
            integration in part (ii)

            A common error in part (i) was to confuse the effective rate of interest, i, with the
            force of interest, δ .



     Q3
     (i)
     Interest paid per year is 0.04 × 100,000 =
                                              4,000                                                              [½]


     Hence, by expressing cash flows in 1 March 2017 purchasing power, the effective annual real
     rate of return achieved, i , is found by solving:


     CM1A A2021                                                                   © Institute and Faculty of Actuaries
              CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


                           240.5                    240.5 2                             240.5 3
              100,000= 4,000 ×     × vi % + 4,000 ×       × vi % + ( 4,000 + 100,000) ×       × vi %
                           256.0                    272.8                               286.6
        ⇒ 100,000 = 3,757.81vi % + 3,526.39vi2% + 87,271.46vi3%
                                                                                                                [3]

Then, we have:
        i=
         −2%   ⇒ RHS =
                     100,230.69
                               
        i=
         −1.5% ⇒ RHS =
                     98,769.15 
                                                    100,230.69 − 100,000
        ⇒ i ≈ −0.02 + [ −0.015 − ( −0.02)] ×                              ≈ −1.9%
                                                   100,230.69 − 98,769.15                                     [1½]

(ii)
High actual inflation over the term of the loan has eroded the real return achieved.       [1]
The nominal rate of return achieved is 4% per annum. However, as average inflation over the
term of the loan (i.e. 6.02% pa) has exceeded 4% per annum, the real rate of return achieved
by the lender is negative.                                                                 [2]
                                                                                     [Total 8]


   Part (i) was generally well answered. Common errors included: -
   not discounting the individual cashflows back to time t=0,
   ignoring the amounts of the cashflows and using an average inflation over the entire
   period,
   getting the ratios of the inflation indices the wrong way round.

   The question omitted to say that the bond was issued at par. In practice, nearly all the
   candidates assumed this to be the case; where an alternative assumption was made
   candidates were not penalised.

   Where candidates made comments in part (ii), they were often of insufficient quality to
   demonstrate understanding. Candidates often failed to distinguish between nominal
   return and real return.



Q4
(i)
For 0 ≤ t ≤ 6 :
    A(0, t ) exp ∫=
    =                  (           )           (
                  δ ( s ) ds exp ∫ 0.03 + 0.005s ds
                           t

                           0                       0
                                                    t
                                                                    )
                                       t
        =exp 0.03s + 0.0025s 2  =e0.03t + 0.0025t
                                                            2

                                       0
                    0.03×6 + 0.0025×36
       =
       and A(0, 6) e=                  e0.27

For t > 6 :
        A(0, t ) =     (
                 exp ∫ δ ( s ) ds + ∫ δ ( s ) ds =
                           6

                           0
                                           t

                                           6            )               (   t
                                                 A(0, 6) × exp ∫ 0.1 − 0.01s ds
                                                                            6                )


CM1A A2021                                                                      © Institute and Faculty of Actuaries
                     CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report



                           s 2  e0.27 exp 0.1t − 0.005t 2 − ( 0.6 − 0.18 ) 
                                                           t
= e0.27 exp 0.1s − 0.005
                        =
                                                           6
                  0.1t − 0.005t 2 − 0.15
           =e

           𝑎𝑎 = 0                                                                                                                      [½]
           𝑏𝑏 = 0.03                                                                                                                   [½]
           𝑐𝑐 = 0.0025                                                                                                                  [1]
           𝑓𝑓 = −0.15                                                                                                                   [1]
           𝑔𝑔 = 0.1                                                                                                                     [1]
           ℎ = −0.005                                                                                                                   [1]

(ii)
                                                                                  60
                                                                        𝑖𝑖 (12)            𝐴𝐴(7)
Nominal rate of return is 𝑖𝑖 (12) where �1 + 12 �                                      =                                                [1]
                                                                                           𝐴𝐴(2)
         e0.1×7 −0.005×49−0.15 e0.305
   =                        = =
              0.03×2 + 0.0025×4        0.07
                                              e0.235                                                                                    [1]
            e                        e
             (12)               0.235⁄60
Therefore 𝑖𝑖       = 12�𝑒𝑒                  − 1� = 4.709%                                                                              [1]
                                                                                                                                  [Total 8]


       Part (i) was generally well answered. A common error was to evaluate A(0,6)
       incorrectly or omit it entirely in the derivation of f, g and h. It was not necessary to
       show the derivation of the numerical results in order to gain full marks. The
       derivation is included here to aid candidates’ understanding.

       In part (ii) some candidates did not appreciate that the accumulation factors derived
       in part (i) were only applicable if accumulated from time t=0. Many candidates
       attempted to derive new accumulation factors from time t=2, which is a perfectly
       valid approach but takes more time. Common errors included:
       Integrating over an incorrect time period;
       Using a formula for δ(t) over a time period for which it was not relevant.




Q5
(i)
           µ*x = 1.2µ x                                where t ≤ 1
                              t

               p*x = e ∫0
                          −       µ *x+ s ds
           t                                           where t ≤ 1
                                         t

           ⇒ t p*x = e ∫
                                     − 1.2 µ x+ s ds
                                         0
                                                       where t ≤ 1                                                                      [1]
           ⇒ p*x = ( px )1.2                                                                                                            [1]

               a*70:3 = 1 + v × p70
                                   *
                                      + v 2 × 2 p70
                                                 *
                                                                     at 7% pa                                                           [1]
                                                               1.2                                 1.2
                                                9112.449     2  8968.099 
           ⇒ a*70:3 = 1 + v ×                           + v ×                                                                     [1]
                                                9238.134        9238.134 
           = 2.762234                                                                                                                   [1]


CM1A A2021                                                                                               © Institute and Faculty of Actuaries
                 CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report



                                      0.07 
(ii)     A70:3 = 1 − da*70:3 = 1 −        × (2.762234)                                              [1½]
                                      1.07 
         = 0.819293                                                                                     [½]
                                                                                                    [Total 7]


       This question was poorly answered. Many candidates did not appreciate that the
       values of μx shown in the tables are values at exact age x and do not apply over the
       whole period of x to x+1. It is therefore necessary to derive an average value of µx for
       age x from the tabulated value of px.

       In part (i) many candidates forgot that the first payment in a life annuity in advance is
       1 at time t=0, and that to receive the 3rd payment the life only needs to survive 2
       years.
       Another common error was to use only a one-year survival probability, rather than
       the survival probability from outset.

       In part (ii) where candidates used the valid (but unnecessarily time consuming)
       approach of deriving the endowment assurance factor from first principles, a
       common error was to miss out the pure endowment benefit.



Q6
(i)
                                                l
            = 40, 000 × A45:15
           EPV           1
                               + 50, 000 × v6%
                                            15
                                               × 60 × A60                                                 [1]
                                                l45
Where
                                  l                         9287.2164
             1
            A45:15= A45:15 − v6%
                              15
                                 × 60= 0.42556 − 0.417265 ×
                                  l45                       9801.3123
                                                                                                          [1]
           = 0.030181218

                                                                      9287.2164
          EPV = 40, 000 × 0.030181218 + 50, 000 × 0.417265 ×                    × 0.32692
                                                                      9801.3123
         = $7, 670.11                                                                                     [1]

(ii)
To get the variance, we calculate the 2nd moment by defining the benefit as a combination of
a temporary assurance and a deferred whole life assurance.
Therefore:
Benefit from age 45 to 60:
        40,0002 × 2 A145:15 with i at 6%                                                 [1]
                                        l           
       = 40 , 0002 ×  2 A45 - v12
                                15
                                   .36%
                                        × 60 × 2 A60 
                                        l45         




CM1A A2021                                                                 © Institute and Faculty of Actuaries
             CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report



                                       9287.2164          
       =40,0002 × 0.04172 − 0.174110 ×           × 0.14098                                        [1½]
                                       9801.3123          
       =1,600,000,000 × 0.018461 = $29,537,600.                                                      [½]

Benefit from age 60:
                            l
        50, 0002 × v12.36%
                    15
                           × 60 2 A60 with i at 6%                                                    [1]
                            l45
                                    9287.2164
        =50, 0002 × 0.174110 ×                  × 0.14098
                                    9801.3123
        =50, 0002 × 0.023259 =$58,147,500                                                            [½]

Then total 2nd moment = 29,537,600 + 58,147,500

       = 87,685,100 (with no rounding 87,684,707)                                                    [½]

       Variance = 87,685,100 – (7,670.11)2 = $228,854,513 = ($5,372)2                                [1]
                                                                                                [Total 9]


   Part (i) was generally well answered. Common errors included: -
   Using an endowment assurance factor rather than a term assurance factor for the first
   benefit.
   Missing out the survival probability to age 60 in the second benefit.

   Part (ii) was poorly answered. The simplest approach is to treat the benefit payments
   as a term assurance and deferred whole life, which are independent and therefore the
   covariance between them is zero.

   Candidates who treated the benefits as a whole life benefit plus a deferred whole life
   failed to appreciate that these are not independent and hence failed to address the
   covariance between them.

   Other common errors when calculating the second moment in part (ii) included: -
   Omitting the square of the sums assured,
   Squaring the survival probability for the deferred whole life benefit.



Q7
EPV Premiums Pa[6%
                  45]:20
                         = 11.888 P                                                                   [1]
                                                         1.0192308     1
The interest rate for valuing the benefits is 4% p.a.              =                                  [1]
                                                            1.06     1.04
EPV Benefit

                         1                           
          $150, 000            A[145]:20 + A[45]:201  at 4%                                         [2]
                     1.0192308                       




CM1A A2021                                                             © Institute and Faculty of Actuaries
                           CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report



                                                   20 l 
                    1                     20 l65
= $150, 000                 A[45]:20 − v4%         + v 65 
              1.0192308                    l              l[45] 
                                            [ 45]               
                   1                               −20 8,821.2612  
                            0.46982 − (1.04 )                         
              1.0192308                                9, 798.0837  
 = $150, 000                                                            [1½]
                                                                       
              + (1.04 )−20 8,821.2612                                  
                           9, 798.0837                                 
                                                                       
         = $150, 000 ( 0.057821 + 0.41089
                                  =       ) $70, 306                                                                 [½]

           EPV Expenses
                    = $200 + 0.75 P + 0.025 P a[6%(
                                                  45]:20      )
                                                         − 1 + 140 A[6%
                                                                     45]:20

                      = $200 + 0.75 P + 0.025 ×10.888 P + 140 × 0.32711= $245.80 + 1.0222 P                          [3]

           Thus
                          =
                      10.866 P $70,552 ⇒
                                       = P $6493.03                                                                 [1]
                                                                                                             [Total 10]


                  This question was generally well answered. Common errors included: -
                  Not splitting the death and survival benefits to correctly allow for bonuses vesting at
                  the end of the policy year if a policyholder survives to the end of that policy year.
                  Using annuity and assurance factors at the adjusted interest rate to value cashflows
                  that do not attract bonuses, in particular the claim expense



         Q8
         (i)
         $15, 000 X ( Ia )60 @ j + 60 Xv 60
         =                               j a60 @ j                                                                  [2]
                         𝑖𝑖 (12)
           where 𝑗𝑗 = 12

           Alternative
            15, 000 X ( Ia )60 @ j + 12 × 60 Xvi5 a5(12@)i
           $=


           (ii)
                                          1 − 1.0094888−60
                      a60 j − 60v 60                      − 60 ×1.0094888−60
                                       0.0094888 1.0094888
         ( Ia )60 @ j =
                                    j
         =                                                          = 1261.989
                               j                      0.0094888
                                                                                                                     [2]
                                                        0.12
                                   a5(12@)i =3.6048 ×         =3.7990     OR          a60 @ j = 45.58779473          [1]
                                                      0.11387



           CM1A A2021                                                                © Institute and Faculty of Actuaries
              CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


                                    𝑖𝑖 (12)         1
        where 𝑖𝑖 = 12% and 𝑗𝑗 = 12 = 1.12 �12 − 1 = 0.0094888                                            [1]

               000 1261.989 × X + 60 × 45.58779473 × (1.0094888 )
                                                                               −60
        So $15,=                                                                     ×X

                  15, 000
        =
        ⇒X          = $5.33                                                                              [1]
                 2,814.053

(iii)
Loan outstanding at the end of December 2026
      15,000 (1.12 ) − 5.33 × ( Ia )60 @ j (1.12 )
                    5                              5
                                                                                                         [2]
(iv)
        $26, 435.13 − $11,855.09 =
                                 $14,580                                                                 [1]

(v)
As interest exceeds repayments at early durations the loan outstanding will increase      [1]
Repayments will only start to reduce loan outstanding once the repayments increase beyond a
certain amount                                                                           [½]
Therefore by halfway through the term the loan outstanding has barely reduced - thus very
little of the initial loan has been paid off.                                            [½]

(vi)
Interest repaid during 2027 = Total repayments less capital repaid
        12 × 60 X − (loan o/s Dec 2026 − loan o/s Dec 2027)                                              [1]
        =              (
         12 × 60 X − 15, 000 (1.12 ) − 5.33 × ( Ia )60 @ j (1.12 )  − 60 Xa48 @ j
                     
                                     5                             5
                                                                                     )
        =              (
        12 × 60 X − $14,580 − 60 Xa48 @ j       )                                                        [1]
Alternative

                      (
        = 12 × 60 X − 15, 000 (1.12 ) − 5.33 × ( Ia )60 @ j (1.12 )  − 12 × 60 Xa4( @)i
                                      5                             5
                                                                      
                                                                                     12
                                                                                            )
                       (
        = 12 × 60 X − $14,580 − 12 × 60 Xa4(12@)i       )                                                [2]

(vii)
        60 Xa48 @ j =60 × 5.33 × 38.411832159 =$12, 284                                                  [1]
Total repayments during 2027 =   12 × 60 X =$3,837.88                                                   [½]
So interest repaid during 2027 = Total repayments less capital repaid
        = $3,837.88 − ( $14,580 − $12, 284 ) = $1,542                                                   [½]
Alternative
                                                0.12
        12 × 60 Xa4(12@)i = 720 × 5.33 × 3.0373 ×     = $12, 285
                                              0.11387
So interest repaid during 2027 = Total repayments less capital repaid
        = $3,837.88 − ( $14,580 − $12, 285 ) = $1,543




CM1A A2021                                                               © Institute and Faculty of Actuaries
                 CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


(viii)
Under the revised repayment schedule, more of the loan will be repaid earlier and so the loan
outstanding at any one time will be less than under the original schedule                  [1]
and so less interest will be paid in total.                                                [1]
                                                                                   [Total 18]


       The early parts of this question were generally well answered.

       In parts (i) and (ii) common errors included: -
                    (12)
       Using ( Ia )5 to value the first 60 payments. This is incorrect as it allows for annual
       increases and not the monthly increases required. (This compound interest function is
       not currently covered by the CM1 syllabus.)
                 (12)
       Where a5 was used in the alternative solution many candidates missed that the
       payment needed to be multiplied by 12 to reflect the total annual payment was now 12
       × 60X.
       The commentary given by candidates for part (v) was often unclear.

       For parts (vi) and (vii) many candidates attempted to calculate the interest by
       calculating (loan outstanding × interest rate) as you would do for a single payment.

       The question asked for equations in parts (i), (iii) and (vi) to be used to calculate parts
       (ii), (iv) and (vii) respectively. Where this was not done, limited credit was given for
       (ii), (iv) and (vii).



Q9
(i)
$450, 000= X 1 + (1.03)v9%
                          1
                             + (1.03) 2 v9%
                                         2
                                            +  + (1.03)19 v9%
                                                            19
                                                                + $450, 000v9%
                                                                              20
                                                                                                          [1]
             1.03      1
       With     =         ⇒=  j 0.058252427                                                               [½]
             1.09 1 + j
          =
       $450, 000 Xa20 j % + $450, 000v9% 20

                                                                                                          [½]
           $450, 000 =
                     X ×12.31216704 + $80, 293.9004 ⇒ X =
                                                        $30, 027.70 per annum                              [1]

(ii)
           i =9% ⇒ d (12) =8.58689942%
           $44, 600 × a10(12)9% + $44, 600 ×1.5 × a10(12)9% × v9%
                                                                   10
                                                                                                        [1½]
       = $44, 600 × 6.72639989 + $44, 600 ×1.5 × 6.72639989 × 0.42241081

           = $299,997.4351 + $190, 083.2379 = $490, 080.67 > $400, 000 Purchase price
                                                                                                          [1]
           ⇒ IRR > 9% per annum                                                                          [½]




CM1A A2021                                                                 © Institute and Faculty of Actuaries
                 CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report


(iii)
Profit = $44, 600 × a10(12)9.5% + $44, 600 ×1.5 × a10(12)9.5% × (1.095) −10 − 400, 000  × (1.095) 20       [2½]
          a
            (12)
            10 9.5%
                      = 6.5974

       = [ 472,342.60 − 400, 000] × (1.095) 20= 72,342.60 × (1.095) 20= 444,300.21                                  [1½]
                                                                                                               [Total 10]


    Parts (i) and (ii) were generally well answered.

    In part (iii) candidates who used a discounted payback period approach were given
    credit, but most candidates over-simplified the calculation and so did not score full
    marks.



Q10
(i)
          $50, 000     = P (11.386 ) ⇒=
                = Pa45:15           P $4,391.36                                                                    [2]

          $4,391.36a45:15 = SA45:15 OR $50, 000 = SA45:15                                                        [1½]

                     000 S (1.04)0.5 × A45:15
                 50, =                   1
                                               + A45:151                                                            [1]
                                                       
                where
                (1.04)0.5 A45:15
                           1
                                 + A45:151 =
                                           (1.04)0.5 × 0.035920087 + 0.526139912 = 0.562771357 [2]
                50, 000 = S [ 0.562771357 ]
                S = $88,846.03                                                                                      [½]

(ii)
Endowment:
         = $90, 000 A55:5 − $4, 450a55:5 90, 000 × 0.824144965 − 4, 450 × 4.585
     10V =
                                                                                                                     [1]
          = $53, 769.80
         Where (1.04) A55:5 + A55:5= (1.04) × 0.024993342 + 0.798656658 =
                     0.5 1         1       0.5
                                                                        0.824144965
                                                                                   [1]
         DSAR = $90, 000(1.04) − $53, 769.80 = $38, 012.55
                               0.5
                                                                                   [2]
                        × ( 550 + 6 ) 0.0039
         E(deaths)= q54 =                 =  76 × 556 2.210656                                                       [1]
         EDS = 2.210656 × $38, 012.55 = $84, 032.67                                                                 [½]
         ADS = 6 × $38, 012.55 =$228, 075.30                                                                        [½]
         EDS-ADS = −$144, 042.63                                                                                    [½]

Annuity:
          10V = $4, 450 × a55:5 =
                                  $20, 403.25                                                                        [1]
         DSAR = −$20, 403.25                                                                                        [½]


CM1A A2021                                                                         © Institute and Faculty of Actuaries
             CM1A - Actuarial Mathematics - Core Principles - April 2021 - Examiners’ report



                      × ( 550 + 6 ) 0.0039
       E(deaths)= q54 =                 = 76 × 556 2.210656
       EDS = 2.210656 × −$20, 403.25 = −$45,104.57                                                   [½]
       ADS = 6 × −$20, 403.25 =   −$122, 419.5                                                       [½]
       EDS-ADS = $77,314.93                                                                          [½]
       Total mortality profit: −$144, 042.64 + $77,314.93 =
                                                          −$66, 727.70                               [½]

(iii)
The insurance company expected approximately 2.21 deaths, whereas 6 deaths actually
occurred. So actual mortality was heavier than expected.                                       [1]
With endowment assurances, earlier-than-expected deaths lead to an earlier payment of the
benefit - the benefit is paid as a death benefit rather than as a maturity benefit. This implies
earlier than expected deaths lead to a mortality loss. Here, as actual mortality was heavier
than expected, there is a mortality loss on the endowments.                                     [1]

With an annuity, early deaths imply no future benefits are paid. Thus earlier-than-expected
deaths lead to a mortality profit. Here, as actual mortality was heavier than expected, there is
a mortality profit on the annuities.                                                          [1]

The mortality loss on the endowments > the mortality profit on the annuities, thus overall
there is a total mortality loss.                                                           [1]
                                                             [Marks available 4, maximum 3]

   Part (i) was generally well answered. A common error was applying the claim
   acceleration adjustment to both the death benefit and the survival benefit when
   calculating A45:15 . (This also applied in part (ii)).

   In part (ii) many candidates only calculated the mortality profit arising from the
   endowment assurance and ignored the mortality profit of the annuity policy. Other
   common errors included: -
   Making no adjustment to the sum assured to allow for the immediate payment on
   death when calculating the DSAR.
   Using the number of policies in force at end of the year (550) rather than at the start
   of the year (550+6=556);
   Using the mortality rate for the age at the end of year instead of the age at the start of
   year when calculating the expected number of deaths.

   In part (iii) many candidates lost marks as they only commented on the results for the
   endowment assurance and not the annuity policy.


                                                                                    [Paper Total 100]


                        END OF EXAMINERS’ REPORT




CM1A A2021                                                             © Institute and Faculty of Actuaries



---
normalized_id: cm1-2020-september-examiner-report-iandf-cm1a-202009-examiners-report
exam_code: CM1
year: 2020
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CM1/CM1A/Sep20/IandF_CM1A_202009_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cm1-2020-september-examiner-report-iandf-cm1a-202009-examiners-report

    INSTITUTE AND FACULTY OF ACTUARIES




                        EXAMINERS’ REPORTS
                                     September 2020

                   Subject CM1A - Actuarial Mathematics



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


Mike Hammer
Chair of the Board of Examiners
September 2020




                                                            © Institute and Faculty of Actuaries
                  CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report


     A. General comments on the aims of this subject and how it is marked

1.   CM1 provides a grounding in the principles of modelling as applied to actuarial
     work - focusing particularly on deterministic models which can be used to model and
     value known cashflows as well as those which are dependent on death, survival, or other
     uncertain risks.

2.   Please note that different answers may be obtained to those shown in these solutions
     depending on whether figures obtained from tables or from calculators are used in the
     calculations but candidates are not penalised for this. However, candidates may lose
     marks where excessive rounding has been used or where insufficient working is shown.

3.   These solutions use full actuarial notation although candidates who used notation based
     on standard keystrokes were given full credit.


     B. Comments on candidates’ performance in this diet of the examination.

1. The comments that follow the questions concentrate on areas where candidates could
   have improved their performance. Where no comment is made, the question was
   generally answered well by most candidates. The examiners look most closely at the
   performance of the candidates close to the pass mark and the comments therefore often
   relate to those candidates.
2. The move to an online exam meant that there were less knowledge based questions on the
   paper. The examiners included new types of questions (Qs 3 and 7) which reduced the
   need for typing of long formulae although these questions proved to be among the more
   challenging on the paper. In addition, the longest question (Q10) was designed so that it
   should not take longer to answer in a typed format rather than a handwritten format. Other
   questions offered more marks than would have been offered in previous years to allow for
   the greater length of time to type the answers. Despite this, there was some limited
   evidence that the typing requirement led to greater time pressure for the marginal
   candidate and the pass mark was slightly lowered to allow for this.
3. Where candidates made numerical errors, examiners would award marks for the correct
   method used and also for the parts of the calculation that were correct. However, many
   candidates often did not show enough of their working to fully benefit from this.
4. The Examiners felt that the “open book” nature of the online exam led some candidates to
   rely on their notes much more than if the exam had been “closed book”. The Examiners
   strongly recommend that candidates prepare for online exams just as thoroughly as they
   would do if the exam were of the traditional “closed book” format. Candidates should
   treat it as a bonus that they can refer to their notes but they should not be relying on being
   able to do so.

     C. Pass Mark
       The Pass Mark for this exam in combination with CM1B was 58.
       1717 presented themselves and 797 passed.




CM1A S2020                                                            @Institute and Faculty of Actuaries
                          CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report




     Q1

     The investor has an initial negative cashflow.                                                          [½]
     In return the investor receives…
             … a series of regular interest payments…                                              [½]
             …which are linked to an ‘index’…                                                      [½]
             …which reflects the effects of inflation…                                             [½]
             …and a final capital repayment…                                                       [½]
             …that is also linked to the index.                                                    [½]
     The indexation might be subject to a time lag                                                 [½]
                                                                      [Marks available 3 ½, maximum 3]

       This Questions was generally well-answered although some candidates chose to include
       non-cashflow related characteristics in their answer.




     Q2

     (a)
                           l46 − l50
            10 4 q[36] =                                                                             [1 formula]
                             l[36]
               9, 786.9534 − 9, 712.0728
             =
                      9,886.0395
             = 0.007574                                                                                      [1]



     (b)
                 0.5          l       
         (1 + i )  A46 − v 25 71 A71 
                 1
        =    A                                                                                     [1.5 formula]
  46:25
                             l46      
                                7,854.4508          
= 1.04  0.28605 − 0.375117                  0.61548 
                                9, 786.9534         
=                    1.04 ( 0.10076 ) 0.10276
                     =                                                                          [1.5 calculation]




                                                                                                       [Total 5]


       This question was well-answered by the candidates.




     CM1A S2020                                                               @Institute and Faculty of Actuaries
                      CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report




 Q3

 (i)     𝑎𝑎 = 0, 𝑏𝑏 = 6, 𝑐𝑐 = 0, 𝑑𝑑 = 𝑡𝑡, 𝑝𝑝 = 0.03, 𝑞𝑞 = 0.04, 𝑋𝑋 = 0.03 × 0.04 = 0.0012
                  [or 𝑎𝑎 = 0, 𝑏𝑏 = 6, 𝑐𝑐 = 𝑡𝑡, 𝑑𝑑 = 6, 𝑝𝑝 = 0.04, 𝑞𝑞 = 0.03, 𝑋𝑋 = 0.03 × 0.04 =
                  0.0012 – see end of part (ii) for solution with these numbers]
                                                            [3, deduct 0.5 mark for each error, min(0)]

                          6    t             
                                                 −0.04t
 (ii) Answer = ∫ 0.03 × 0.04e  ∫ e −0.03s ds dt
                                             
 =t 0 =                       s 0            
                  6                                                  6
       = 0.04 ∫ e      −0.04t
                                  (1 − e   −0.03t
                                                    )                    (
                                                 dt 0.04 ∫ e−0.04t − e−0.07t dt
                                                 =                                   )                                  [1]
=t 0=t 0
                                  6                              6
                 e −0.04t          e −0.07t                      0.04
         = 0.04            − 0.04            =  (1 − 0.786628) −      (1 − 0.657047 )                               [2]
         =       −0.04  t 0=     −0.07  t 0                  0.07

           = 0.017399                                                                                                   [1]

                              6  6          
                                                            −0.03t
 [or Answer = ∫ 0.03 × 0.04e  ∫ e−0.04 s ds dt
                                            
     =t 0 =                  s t            
                              6                                                  6
                                             (
              = 0.03 ∫ e−0.03t e−0.04t − e−0.24=                         )
                                               dt 0.03 ∫ e−0.07t − e−0.03t −0.24 dt
=t 0 =t 0

                  =
                      0.03 
                      0.07                             (
                            1 − e−0.42  − e−0.24 − e−0.42 = 0.017399]
                                                                            )
                                                                                                                 [Total 7]


   Part (i) was a new style of question which aimed to reduce the amount of typing required
   from candidates. Most candidates scored some marks on part (i) and a significant number
   of candidates were then able to use the answers from part (i) to make an attempt at part
   (ii).



 Q4      Let 𝑃𝑃 denote the the monthly premium, then the present value of future premiums is
         given by
                                            11   v × l75:73  
                                                        20
                                
                       = 12 P  a55:53:20 −   × 1 −             
         12Pa(12)
               55:53:20                     24        l                                                          [2]
                                                         55:53   
                            11                    
         = 12 P × 13.463 − × (1 − 0.353725 ) 
                            24                    
          = 12 × P ×13.16683
          = 158.002P                                                                                                   [1]



 CM1A S2020                                                                              @Institute and Faculty of Actuaries
                  CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report



                                        v 20 × l75:73 
       where a55:53:20 = a55:53 −                 × a75:73 = 16.284 − 0.353725 × 7.975 = 13.463
                                           l55:53      
       and
        v 20 × l75:73  20  l75 m
                                    × l73f              8, 405.160 × 9, 073.650 
                      =
                          v ×              =
                                             0.456387 ×                          =0.353725
            l                    m
                                    ×   f 
                                                         9,904.805  × 9,934.574  
         55:53                l     l
                               55 53 
                                                                                                             [2]

       The present value of death benefits is given by
                                       v 20 × l75:73  
       150000 × 1 − d × a55:53:20 −                  
                                       l55:53  
                                                      
                                                                                                             [2]
                0.04                       
  = 150,000 × 1 −       ×13.463 − 0.353725 
                1.04                       
   =150, 000 × ( 0.482191 − 0.353725 ) =150, 000 × 0.128465 = 19269.82                                       [1]


       Alternativly present value of death benefit is given by :
                           v 20 × l75:73           
       150000 ×  A55:53 −                 × A75:73 
                           l55:53                  
                                                   
                                        v × l75:73                       
                     (               )                       (            )
                                           20
       = 150000 ×  1 − d × a55:53 −               × 1 − d × a75:73 
                                                                           
                                        l55:53                           
                     0.04                                   0.04               
       = 150000 ×  1 −          ×16.284  − 0.353725 × 1 −              × 7.975  
                     1.04                                   1.04               

       Using the principle of equivalence the monthly premium is found by equating the
       present values of premiums and benefits.

       ⇒ 158.002 P =
                   19269.82
                                                                                                             [1]
       ⇒P=
         $121.96




                                                                                                      [Total 9]

 Common errors here were
   • to incorrectly apply the monthly premium adjustment (or to ignore the adjustment
      completely)
   • to calculate the benefit as an endowment assurance




CM1A S2020                                                                    @Institute and Faculty of Actuaries
                  CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report




Q5

Equation of value is given by:
        =  000 4, 000a4( ) + Xa4( ) × v 4 + 12, 000a4 × v8
                         4       2
       50,                                                                                           [2]
        where the effective rate of interest per annum is i such that i (12) = 9% .
                                 i (12) 
                                          12           12
                                               0.09 
        Thus, we have: 1 + i = 1 +      = 1 +     ⇒ i = 9.38069% per annum                     [1]
                                 12             12 
        Thus, we have:
          1 − v 4 1 − 0.6986141
         ( 4)
       =
       a4  =               = 3.323742 , where
           i ( 4)   0.0906767
                            4                  4
                 1           1     
             =v =4
                                =    0.6986141
                 1 + i   1.0938069 
         i ( 4) 
                  4
                                           ( 4)
        1 +     = 1 + i = 1.0938069 ⇒ i = 0.0906767
             4 
                                                                                                   [2½]
                1 − v 4 1 − 0.6986141
       a4( 2)
       =         =               = 3.286491 , where
                 i ( 2)   0.0917045
         i ( 2) 
                  2
                                           ( 2)
        1 +     = 1 + i = 1.0938069 ⇒ i = 0.0917045                                              [2]
             2 


         1 − v 4 1 − 0.6986141
      =
      a4 =                = 3.361274 , where
           δ       0.0896642
                 eδ = 1 + i = 1.0938069 ⇒ δ = 0.0896642
                                                                                                   [1½]
        Thus, we have:
        50, 000 =4, 000 × 3.323742 + 0.6986141× 3.286491X
                                           8
                                1     
                +12, 000 ×             × 3.361274
                            1.0938069 
                =13, 294.968 + 2.2959890 X + 19, 686.109
                ⇒X=    $7, 412.46
                                                                                                    [2]
                                                                                            [Total 11]

 Candidates generally answered this question well Common errors were




CM1A S2020                                                            @Institute and Faculty of Actuaries
                     CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report



     •     to assume that the effective interest rate was 9% per annum which simplified the
           calculations significantly and so was penalised accordingly
     •     to omit the deferral factors for the second and third elements of the annuity




Q6

         (i)     Let DPP be 𝑡𝑡. Working is $000’s, we want

                 39,500 = 5,000 a (4)
                                   t
                                      at 8% pa                                                                     [1]
                          i
               = 5, 000 (4) at
                        i
                     39, 500
         =⇒ at       = 7.67349                                                                                     [1]
               5000 × 1.029519
                 ⇒ vt =1 − 7.67349 × 0.08
                          ln 0.38612
                =⇒t          = 12.365                                                                              [1]
                          ln (1/1.08)

                 So DPP is 12 years 6 months                                                                      [1]
                                                                                                            [Total 4]

         (ii)    Profit at the end of 15 years is:
                 −39500 × (1.08 )          × (1.06 )         + 5000 s12.5     (1.06) 2.5 + 5000 s2.5
                                    12.5               2.5           (4)                         (4)
                                                                          @8%                        @ 6%
                                                                                                                   [2]
                 where:
                             (1.08)12.5 − 1 (1.08)12.5 − 1
                   (4)
                  s12.5    =  =              = 20.80868                                                          [1½]
                        8%
                                 i (4)       0.077706

                              (1.06) 2.5 − 1 (1.06)2.5 − 1
                 s(4)
                            = =               = 2.67173                                                          [1½]
                  2.5 @6%
                                  i (4)       0.058695
                 Profit = -119,580 + 120,359 + 13,359 =14,138 (=$14,138,000)                                      [1]
                                                                                                            [Total 6]


 Part (i) was answered well although many candidates did not recognise that the end of the
 DPP would be measured in a whole number of quarters i.e. the investment would only
 become profitable at the time of an income payment.
 Part (ii) was answered less well with many candidates incorrectly assuming that the
 accumulated profit would be zero at the end of the DPP.



Q7




CM1A S2020                                                                          @Institute and Faculty of Actuaries
                  CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report


       (i)     Since the policy will terminate on a critical illness claim, we do not need to
               model 𝜌𝜌𝑥𝑥 and 𝜈𝜈𝑥𝑥 and these can be assumed to be zero.                       [1]
       (ii)
               𝑎𝑎 = 100,000                                                                          [½]
               𝑏𝑏 = 0.04                                                                             [½]
               𝑐𝑐 = 0                                                                                [½]
               𝑑𝑑 = 20                                                                               [½]
               𝑧𝑧 = −𝑙𝑙𝑙𝑙(1.03) − 0.04 = −0.069559                                                    [1]
                 4,000
       (iii)                 [𝑒𝑒 −0.069559𝑡𝑡 ]20
                                              0                                                      [1]
               −0.069559

               = $43,199                                                                             [1]


       (iv)    𝑓𝑓 = 0
               𝑔𝑔 = 19                                                                  [1 for f and g]

               ℎ = −𝑙𝑙𝑙𝑙(1.03) − 0.04 = −0.069559                                                    [1]

                      1−𝑒𝑒 −0.069559×20
       (v)     𝑃𝑃 �                       � = 11.1797𝑃𝑃                                             [½]
                       1−𝑒𝑒 −0.069559

               43,199 = 11.1797P
               P = $3,864                                                                            [½]


               Alternatively:
                a20 with δ = 0.069559


                                                                                              [Total 9]

 Some of the points highlighted in Q3 also apply here with many candidates struggling to
 use the equations developed in parts (ii) and (iv) to obtain answers to parts (iii) and (v). In
 general this question was not answered well with many candidates making errors without
 showing much intermediate working, especially in part (iii).



Q8

       (i)     Loan = 185 a16 + 15 ( Ia )16 at
               5%                                                                                  [1½]

               = 185 ×10.8378 + 15 × 80.9975
                                                                                                   [1½]
               = $3, 219.96




CM1A S2020                                                            @Institute and Faculty of Actuaries
                   CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report


       (ii)      Capital o/s after 4 payments comes from:

                 5th payment =$260                                                                    [½]
                 ⇒ Capital
                         = o/s 245a12 + 15 ( Ia )12 at 5%
                 = 245 × 8.8633 + 15 × 52.4873 = 2958.82                                              [2]


        Year        Capital o/s      Instalment Interest        Capital         Capital
                    at start                                    repaid          o/s at end
        5           2958.82          260.00        147.94       112.06          2846.76
        6           2846.76          275.00        142.34       132.66          2714.10
        7           2714.10          290.00
                                                                                                    [2½]
       (iii)     Final instalment =$425
                 ⇒ Loan o/s at start of final year = 425v = $404.76                                   [1]
                 = capital paid in final payment
                 ⇒ Interest = 425 – 404.76 = $20.24                                                   [1]

                                                                                             [Total 10]


 This question was well answered by candidates. Many candidates seemed to use Excel to
 help with their calculations although their final answers needed to be typed into their
 script in order to receive credit.



Q9

       (i)
               =          (
               i ( 4) 4 1.049=
                             4
                                     )
                               − 1 4.812%
                                1




                  D                 6
                       (1 − t1 )=      × 0.8= 4.571%                                                  [3]
                  R               1.05
                           D
                 i ( 4) > (1 − t1 ) ⇒ Capital gain
                           R



       (ii)      Since there is a capital gain, the security is least valuable to the investor if the
                 repayment is made by the borrower at the latest possible date.                     [1]
                 Since that decision is beyond the control of the investor, we must assume that
                 the redemption occurs after 25 years to find the minimum yield obtained. [1]

       (iii)     If P is the price per $100 of the security:

                                     ( )
                 P =100 × 0.06 × 0.8a25  + (105 − 0.25 (105 − P ) ) v 25 at 4.9%
                                              4
                                                                                                      [2]
                 where:



CM1A S2020                                                             @Institute and Faculty of Actuaries
                  CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report



                ( 4)     1 − v 25
              =a25       = 14.4966                                                                   [1]
                        0.04812

                ⇒ P = 4.8 ×14.4966 + (105 − 0.25 (105 − P ) ) × 0.30242

                         69.5837 + 23.8156
  =⇒P                        = $101.03157                                                            [2]
                         1 − 0.25 × 0.30242


       (iv)     If the coupons were paid less frequently (i.e. half-yearly not quarterly) then the
                investor would have to wait longer, on average, for the coupon payments to be
                made. This will make the investment less valuable, and therefore the price
                would be lower than in (iii).                                                  [2]

                                                                                             [Total 12]


 The calculation elements of the question were answered well but the explanations given as
 part of answers to parts (ii) and (iv) were often unclear.




Q10


       (i)      Mortality Table

                          [½]                 [1]                [½]                    [1]
        x                 q x base            120% q x base      px                     t-1 (ap)
        62                0.010112            0.012134           0.987866               1
        63                0.011344            0.013613           0.986387               0.987866
        64                0.012716            0.015259           0.984741               0.974418

               Year                  1      2         3
               Death Benefit    15,000 15,300    15,606 [1½]
               Maturity Benefit               17,509.93 [1½]

                Profit Test
        Year                                  1                    2                         3
        Premium                               P                    P                         P              [½]
        Commission                        0.15P               0.015P                    0.015P          �[½]
        Expenses                            200                   30                        30
        Interest                       0.017P-4          0.0197P-0.6               0.0197P-0.6               [1]
        Death Outgo                      182.02               208.28                    238.14               [1]
        Maturity Outgo                                                               17,242.74              [½]
        Claim Expense                       0.61                 0.68                       50              [½]


CM1A S2020                                                            @Institute and Faculty of Actuaries
                 CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report


         Profit Vector         0.867P-386.62       1.0047P-239.56         1.0047P-17,561.48                [1]



        Probability in force                         1            0.987866               0.974418
        Profit Signature                 0.867P-386.62       0.993P-236.65       0.979P-17,112.22
        Discount Factor                       0.934579            0.873439               0.816298
        Present Value of Future          0.810P-361.33       0.867P-206.70       0.799P-13,968.67
        Profits
                                                                                                    [2]

               Total Present Value of Future Profits is 2.47633P-14,536.70
                                                                                                    [½]
               Thus the annual premium is found by:
                   14,536.70
        =P          = 5,870.26
                    2.47633
               i.e. the annual premium is approximately $5,871                                      [½]




(ii)    Taking the profit vector from above and allowing for the transfer to reserves.


Year                                       1                2                 3
Profit Vector                 0.867P-386.62   1.0047P-239.56 1.0047P-17,561.48 [½]
Reserve at start                           0            5,000            10,000 [½]
Interest on reserve                        0              100               200 [½]
Reserve at end                      4,939.33         9,863.87                 0 [1]
Transfer to Reserves               -4,939.33        -4,763.87            10,200 [1]
Revised Profit Vector       0.867P-5,325.95 1.0047P-5,003.43 1.0047P-7,361.48 [½]
Probability in force                       1        0.987866          0.974418
Revised Profit Signature    0.867P-5,325.95 0.993P-4,4942.71    0.979P-7,173.16 [½]
Discount Factor                    0.934579         0.873439          0.816298
Present Value of Future     0.810P-4,977.52 0.867P-4,317.16     0.799P-5,855.43 [½]
Profits

               Total Present Value of Future Profits is 2.47633P - 15,150.11

                   15,150.11
        =P          = $6,117.87                                                                     [1]
                    2.47633
(iii)   With the premium calculated in (ii) we can calculate the expected cashflows arising in
        each policy year.

                         Year                 1       2      3
                         Profit Vector        -$21 $1,144 -$1,214
                                                                                                    [1]
        Here we see negative cashflows arising in policy years 1 and 3 and a positive
        cashflow for policy year 2.                                                                 [1]


CM1A S2020                                                           @Institute and Faculty of Actuaries
                CM1A - (Actuarial Mathematics) - September 2020 - Examiners’ report


       Despite having set up reserves the life insurance company is facing a negative
       cashflow in policy year 3. The company may find itself with insufficient funds to
       meet all the claims that fall due in policy year 3.                                   [1]
       This implies that the reserves set up are not sufficient. It would be prudent to hold
       larger reserves.                                                                      [1]

                                                                                          [Total 24]

 This question seemed to discriminate well between the stronger and weaker candidates
 although some candidates seemed to be under time pressure. Despite the instruction to use
 a discounted cash-flow approach, many candidates used an equation of value approach in
 part (i) and were given partial credit for this.
 In parts (i) and (ii), a zero profit- criterion was implicitly assumed although candidates
 who used other criteria were given full credit.
 Common errors in part (i) were
     • to incorrectly calculate the maturity benefit (although full credit was given for
          candidates who did not include the final reversionary bonus)
     • to ignore claims expenses

 There was a significant amount of calculation work and it was not surprising that even the
 strongest candidates made the occasional numerical error.
 Many candidates failed to score any marks at all on parts (ii) and (iii) although it was not
 clear whether this was due to time pressure.




                      END OF MARKING SCHEDULE




CM1A S2020                                                          @Institute and Faculty of Actuaries



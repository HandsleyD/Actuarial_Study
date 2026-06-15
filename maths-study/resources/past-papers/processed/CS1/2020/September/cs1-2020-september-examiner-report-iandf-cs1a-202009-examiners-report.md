---
normalized_id: cs1-2020-september-examiner-report-iandf-cs1a-202009-examiners-report
exam_code: CS1
year: 2020
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep20/IandF_CS1A_202009_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2020-september-examiner-report-iandf-cs1a-202009-examiners-report

       INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                    September 2020

             Subject CS1 Paper A – Actuarial Statistics
                         Core Principles


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


Mike Hammer
Chair of the Board of Examiners
December 2020



                                                            Institute and Faculty of Actuaries
     Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


   A. General comments on the aims of this subject and how it is marked

1. The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
   statistical techniques that are of particular relevance to actuarial work.

2. Some of the questions in the examination paper admit alternative solutions from these
   presented in this report, or different ways in which the provided answer can be
   determined. All mathematically correct and valid alternative solutions or answers
   received credit as appropriate.

3. Rounding errors were not penalised, but candidates lost marks where excessive rounding
   led to significantly different answers.

4. In cases where the same error was carried forward to later parts of the answer, candidates
   were given appropriate credit for the later parts.

5. In questions where comments were required, valid comments that were different from
   those provided in the solutions also received full credit where appropriate.

6. The paper included a number of multiple choice questions, where showing working was
   not required as part of the answer.
   In all multiple choice questions, the details provided in the answers below (e.g.
   calculations) are for information. Candidates were not be required to show working.

7. In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

8. Standard keyboard typing was accepted for mathematical notation.


   B. Comments on candidate’ performance in this diet of the examination.

1. Performance was very satisfactory in general, with most candidates showing very good
   understanding of the topics in this subject. Well prepared candidates were able to score
   highly.

2. A smaller number of candidates appeared to be inadequately prepared, in terms of not
   having covered sufficiently the entire breadth of the subject.

3. Topics that were not particularly well answered in this paper include moment generating
   functions (Q4), GLMs (Q6) and non-standard CIs (Q9(iv), (vii)).

4. Questions that required higher order skills and comments were generally not well
   answered (e.g. Q8(iii)(b), Q9(iii), Q10(v)).

5. Questions corresponding to parts of the syllabus that had not been recently examined
   were generally poorly answered (e.g. Q4). This highlights the need for candidates to
   cover the whole syllabus when they revise for the exam and not only rely on themes
   appearing in past papers.



CS1A S2020                                                               ©Institute and Faculty of Actuaries
    Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


   C. Pass Mark

      The Pass Mark for this exam was 60.
      1189 presented themselves and 823 passed.




CS1A S2020                                                              ©Institute and Faculty of Actuaries
      Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


Solutions for Subject CS1 Paper A September 2020

Q1
(i)
From the Central Limit Theorem, approximately

𝑇𝑇 ~ 𝑁𝑁(81 x 5 , 81 x 4), 𝑖𝑖. 𝑒𝑒. 𝑁𝑁(405,182 ), 𝑜𝑜𝑜𝑜𝑜𝑜(405, 324)                                          [2]


(ii)
Standardising, we get:
                    𝑇𝑇−405   369−405
𝑃𝑃(𝑇𝑇 > 369) = 𝑃𝑃 �        >        �                                                                     [1]
                        18         18


≈ 𝑃𝑃(𝑍𝑍 > −2)                                                                                             [½]

= 0.97725                                                                                                 [½]

using tables.
                                                                                                 [Total 4]

 Generally very well answered. In part (ii) some candidates applied a continuity correction,
 which was not needed.


Q2
     (i)     Ans: A2                                                                                      [2]

             𝑃𝑃[𝑋𝑋 + 𝑌𝑌 = 7] = 𝑃𝑃[𝑋𝑋 = 1, 𝑌𝑌 = 6] + 𝑃𝑃[𝑋𝑋 = 2, 𝑌𝑌 = 5] + 𝑃𝑃[𝑋𝑋 = 3, 𝑌𝑌 = 4] +
              𝑃𝑃[𝑋𝑋 = 4, 𝑌𝑌 = 3]𝑃𝑃 + [𝑋𝑋 = 5, 𝑌𝑌 = 2] + 𝑃𝑃[𝑋𝑋 = 6, 𝑌𝑌 = 1]
                                                                                  1     1
                        = 𝑃𝑃[𝑋𝑋 = 1]𝑃𝑃[𝑌𝑌 = 6] + ⋯ + 𝑃𝑃[𝑋𝑋 = 6]𝑃𝑃[𝑌𝑌 = 1] = 6 ×       =
                                                                                 36 6

     (ii)    Ans: A3                                                                                      [2]

             𝑃𝑃[𝑋𝑋 = 3, 𝑌𝑌 = 3] + 𝑃𝑃[𝑋𝑋 = 3, 𝑌𝑌 ≠ 3] + 𝑃𝑃[𝑋𝑋 ≠ 3, 𝑌𝑌 = 3] =
                                           5    5    11
             1 − 𝑃𝑃[𝑋𝑋 ≠ 3, 𝑌𝑌 ≠ 3] = 1 − × =
                                              6   6    36

     (iii)   Ans: A2                                                                                      [2]
                                                       1 1 3
             1 − 𝑃𝑃[𝑋𝑋 ∈ {2,4,6}]𝑃𝑃[𝑌𝑌 ∈ {2,4,6}] = 1 − × =
                                                       2 2 4


     (iv)    (a) Ans: A4                                                                                  [1]

             𝐸𝐸[𝑋𝑋 + 𝑌𝑌|𝑋𝑋 = 4] = 𝐸𝐸[𝑋𝑋|𝑋𝑋 = 4] + 𝐸𝐸[𝑌𝑌|𝑋𝑋 = 4] = 4 + 𝐸𝐸[𝑌𝑌]

             (b) We assume that 𝑋𝑋 and 𝑌𝑌 are independent (pair of fair dice).                            [1]




CS1A S2020                                                                ©Institute and Faculty of Actuaries
        Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


                                                            1                 21
                 (c) 𝐸𝐸[𝑋𝑋 + 𝑌𝑌|𝑋𝑋 = 4] = 4 + (1 + 2 + ⋯ + 6) = 4 +                = 7.5                    [2]
                                                            6                 6



                                                                                                  [Total 10]
 The question was very well answered by candidates.




Q3

(i) Ans: A2                                                                                                 [2]

The required probability is: P(TV made in Factory B | defective)


           Using Bayes’ theorem:

                              P(defective|made in factory B) × P(made in factory B)
=
    P(defective|factory A)P(factory A) + P(defective|factory B)P(factory B)+P(defective|factory C)P(factory C)


(ii) P(TV made in Factory B | defective)

                                                   0.015 × 0.4
                                 =                                           = 0.38710
                                     0.02 × 0.35 + 0.015 × 0.4 + 0.01 × 0.25
                                                                                                            [2]

                                                                                                   [Total 4]
 Part (i) was well answered. In part (ii), a number of candidates despite identifying the correct
 answer in (i), went on to calculate incorrect probabilities. In some cases this was due to
 misinterpreting the probabilities in the table.




Q4

(i) Integrate from b to plus infinity.                                                                      [1]


(ii) Ans: A4                                                                                                [2]

Moment generating function of Y is:
                                    ∞
    𝑀𝑀𝑌𝑌 (𝑡𝑡) = 𝐸𝐸(𝑒𝑒 𝑡𝑡𝑡𝑡 ) = ∫𝑏𝑏 𝑒𝑒 𝑡𝑡𝑡𝑡 𝑎𝑎𝑒𝑒 −5𝑦𝑦 𝑑𝑑𝑑𝑑

                                ∞
                      = 𝑎𝑎 ∫𝑏𝑏 𝑒𝑒 −(5−𝑡𝑡)𝑦𝑦 𝑑𝑑𝑑𝑑



CS1A S2020                                                                  ©Institute and Faculty of Actuaries
      Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


                                     𝑒𝑒 −(5−𝑡𝑡)𝑦𝑦 ∞         𝑎𝑎𝑒𝑒 −(5−𝑡𝑡)𝑏𝑏
                           = 𝑎𝑎 �−               � 𝑏𝑏   =
                                         5−𝑡𝑡                   5−𝑡𝑡



(iii) t < 5                                                                                                [1]

(iv) Evaluating the function at t = 0 gives 1.                                                             [1]

We obtain a = 5e^(5b)                                                                                      [2]

                                                                                                   [Total 7]

  This question was not answerd well in general – particulalrly parts (iii) and (iv). This was a
  type of question that is not examined very often. Candidates are advised to cover the whole
  syllabus when they revise for the exam and not only rely on themes appearing in past
  papers.



Q5
                                 1412
     (i) 𝑆𝑆𝑥𝑥𝑥𝑥 = 2014 −                 = 25.9                                                            [1]
                                  10
                                 1272
            𝑆𝑆𝑦𝑦𝑦𝑦 = 1629 −                = 16.1                                                          [1]
                                  10
                                 141×127
            𝑆𝑆𝑥𝑥𝑥𝑥 = 1810 −                      = 19.3                                                    [1]
                                      10

                         19.3
     (ii) 𝑟𝑟 =                   = 0.9451364                                                               [1]
                    √25.9×16.1

                    19.3
     (iii) 𝑏𝑏� =           = 0.745                                                                         [1]
                    25.9
                    127                    141
            𝑎𝑎� =          − 0.745 ×             = 2.193                                                   [1]
                    10                     10


                                                                                                   [Total 6]


 This is a typical regression/correlation question and was answered very well.
Q6


Q6

     (i)       A distribution of the response variable 𝑌𝑌.                                                 [1]
               A “linear predictor” 𝜂𝜂                                                                     [1]
               A “link function” 𝑔𝑔                                                                        [1]

     (ii)      The distribution of the response 𝐷𝐷𝑥𝑥 is a Poisson distribution.                            [1]
               The linear predictor 𝜂𝜂𝑥𝑥 = 𝑎𝑎 + 𝑏𝑏𝑏𝑏.                                                      [1]
               The link function is the logarithm since 𝑙𝑙𝑙𝑙𝑙𝑙(𝐸𝐸[𝐷𝐷𝑥𝑥 ]) = 𝜂𝜂𝑥𝑥 .                         [1]



CS1A S2020                                                                   ©Institute and Faculty of Actuaries
       Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




      (iii)      Ans: A1                                                                                          [2]

      (iv)       Ans: A3                                                                                          [2]

                                                                                                         [Total 10]

  Parts (i) and (ii) were well answered, whereas many candidates gave wrong answers in parts
  (iii) and (iv). These concerned a direct application of likelihood estimation in a less typical
  scenario, as compared to the setting usually appearing in estimation questions.


Q7
      (i)        Ans: A2                                                                                          [2]

      (ii)       Ans: A4                                                                                          [3]

      (iii)      The expectation of X is correct.
                 This is obtained by taking the derivative of b(theta).                                           [1]

                 The standard deviation is not correct. In fact it is the variance that is s squared. [1]
                 It is obtained by taking the second derivative of b(theta) and multiply by
                 a(phi).                                                                             [1]


      (iv)       A factor takes a categorical value and for a factor with k levels, there are generally
                 k parameters.                                                                     [1]
                 For a numerical variable, the value is included as such in the linear predictor and
                 there is a single parameter in the model for each numerical variable.            [1]
                                                                                                         [Total 10]

Parts (i) and (ii) were well answered. Part (iii) was overall answered well, with a common
problem of failing to identify that the standard deviation is incorrect, or not making any
comments. Part (iv) was poorly answered, often with no mention regarding parameters and
levels.
        (i )      i l                    i   f ll     k h               i


Q8

(i)          In this case, n = 2 and N = 4. Therefore the estimates are:
                                          1             1
             (a) E[m(𝜃𝜃)] = 𝑥𝑥̅ = ∑4𝑖𝑖=1 𝑥𝑥̅𝑖𝑖 = (36 + 40 + 20 + 62) = 39.5                                       [1]
                                          4             4

                                1         1
             (b) E[s2(𝜃𝜃)] =        ∑4𝑖𝑖=1 ∑2𝑗𝑗=1(𝑥𝑥𝑖𝑖𝑖𝑖 − 𝑥𝑥̅𝑖𝑖 )2 = (98 + 8 + 8 + 72)/4 = 46.5                  [1]
                                4         1

                                    1                 1 1        1
             (c) Var[m(𝜃𝜃)] = ∑4𝑖𝑖=1( 𝑥𝑥̅ i -𝑥𝑥̅ )2 - � ∑4𝑖𝑖=1 ∑2𝑗𝑗=1(𝑥𝑥𝑖𝑖𝑖𝑖 − 𝑥𝑥̅𝑖𝑖 2 )�
                                    3                 2 4        1



CS1A S2020                                                                          ©Institute and Faculty of Actuaries
        Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


                        1                                                                  1
                      = [(36 – 39.5)2 + (40 – 39.5)2 + (20 – 39.5)2 + (62 – 39.5)2] - (46.5)
                        3                                                                  2
                            2          1
                      = 299 − 23
                           3     4
                      = 276.42                                                                              [2]


(ii)          The credibility factor is:
                                   2
                                   46.5    = 0.92241                                                        [1]
                                2+276.41


              And the estimate of X13 is (0.92241 x 36) + (1 – 0.92241) x 39.5 = 36.272                     [1]

(iii)(a) Assumption 1
         The distribution of each Xij (i = 1, 2, 3, 4 and j = 1, 2) depends on the value of a
         parameter 𝜃𝜃i, whose value is fixed, unknown, and the same for each value of j.  [1]

              Assumption 2
              Given 𝜃𝜃i (i = 1, 2, 3, 4), Xij (j = 1, 2) are independent and identically distributed. [1]


(iii)(b) For the given data, the assumptions can be interpreted as saying:
         - The number of calls received follows a distribution with a parameter that varies
            according to the time of year, but that is constant between years.         [2]

                                                                                                 [Total 10]

  Parts (i) and (ii) were well answerd – except from (i)(c) where the calculation of the
  variance was often incorrect. Part (iii)(b) was poorly answered, with the interpretation in
  the context of the question scenario being handled poorly. Note that alternative
  assumptions (as in the Core Reading) were given credit as appropriate.


Q9

       (i)        𝑍𝑍𝑋𝑋 has a chi-squared distribution                                                       [1]
                  with 𝑛𝑛 − 1 = 299 degrees of freedom                                                      [1]

       (ii)       𝐸𝐸[𝑍𝑍𝑋𝑋 ] = 299                                                                           [1]
                  and 𝑉𝑉𝑉𝑉𝑉𝑉(𝑍𝑍𝑋𝑋 ) = 598                                                                   [1]

       (iii)      A chi-squared distribution with 299 degrees of freedom is the distribution of a
                  sum of 299 independent random variable that are all squared standard normally
                  distributed.                                                                    [1]

                  It follows from the CLT that a chi-squared distribution with a large number of
                  degrees of freedom can be approximated with a normal distribution.             [1]




CS1A S2020                                                                  ©Institute and Faculty of Actuaries
      Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


                                          𝑍𝑍 −299            𝑞𝑞−299                         𝑞𝑞−299
   (iv)      𝑃𝑃[𝑍𝑍𝑥𝑥 ≤ 𝑞𝑞] = 𝑃𝑃 � 𝑥𝑥                     ≤            � = 𝑃𝑃 �𝑍𝑍 ≤                   �
                                              √598            √598                          √598
             𝑞𝑞97.5 −299
                              = 1.96 and 𝑞𝑞97.5 = 299 + 1.96 × √598 = 346.93                                                         [1½]
                √598
             𝑞𝑞2.5 −299
                              = −1.96 and 𝑞𝑞2.5 = 299 − 1.96 × √598 = 251.07                                                         [1½]
                 √598



   (v)       95% confidence interval (using normal approximation of 𝑡𝑡-distribution):
                                                         211                             211
             Income: �1838 − 1.96                              , 1838 + 1.96                   �                                       [1]
                                                        √300                            √300
             = [1814.12, 1861.88]                                                                                                      [1]


   (vi)      95% confidence interval (using normal approximation of 𝑡𝑡-distribution):
                                                  275                        275
             Rent: �608 − 1.96                           , 608 + 1.96               �                                                  [1]
                                                  √300                      √300


             = [576.88,639.12]                                                                                                         [1]


                 299×2112 299×2112                       299×2112 299×2112
   (vii)     �      2          ,      2           �≈�                  ,                �                                              [1]
                  𝜒𝜒0.975           𝜒𝜒0.025                  346.93        251.07
             = [38370.22, 53020.19]                                                                                                    [1]


   (viii) Ans: A4                                                                                                                      [2]

   (ix)      𝑆𝑆𝑥𝑥𝑥𝑥 = ∑ 𝑥𝑥𝑖𝑖 𝑦𝑦𝑖𝑖 − (∑ 𝑥𝑥𝑖𝑖 )(∑ 𝑦𝑦𝑖𝑖 )/𝑛𝑛 = 348 × 106 − 1838 × 300 × 608
             = 12,748,800
                                                                                                                                       [1]
                                              2
             𝑆𝑆𝑥𝑥𝑥𝑥 = 299 × 211 = 13,311,779
                                                                                                                                       [1]
                     𝑆𝑆𝑥𝑥𝑥𝑥        12,748,800
             𝑏𝑏� =            =                    = 0.9577082
                     𝑆𝑆𝑥𝑥𝑥𝑥        13,311,779
                                                                                                                                       [1]
             𝑎𝑎� = 𝑦𝑦� − 𝑏𝑏�𝑥𝑥̅ = 608 − 0.9577082 × 1838 = −1152.268
                                                                                                                                     [1]
                                                                                                                              [Total 21]

 Parts (i) and (ii) were well answered. In part (iii) the reasoning was often inadequate. Parts
 (iv) and (vii) were poorly answered or unattempted, with many candidates failing to
 calculate the quantiles required. Parts (viii) and (ix) were reasonably well answered.


Q10

   (i)       In bivariate data, the response variable is a random variable whose value is
             influenced by the explanatory variable.                                                                                   [1]

  (ii) There is an increasing and relatively linear relationship.                                                                      [1]
       However the trend and linearity are not very clear around values x = 5, 6.                                                      [1]


CS1A S2020                                                                                               ©Institute and Faculty of Actuaries
     Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




 (iii) (a) Ans: A1                                                                                       [2]

                1     1+𝑟𝑟                                          1      1+𝜌𝜌
        𝑊𝑊 = log �           � is normally distributed with mean log �            � and standard deviation
                2     1−𝑟𝑟                                          2      1−𝜌𝜌
       1⁄√𝑛𝑛 − 3. 𝑊𝑊 = 0.8673 and 𝑊𝑊~𝑁𝑁(0, 1⁄7).
                                       1 0.5
       Test statistic = 0.867�� �              = 2.295.
                                       7



       (b) This is a two-sided test with the 2.5% critical values being -1.96 and 1.96   [2]
       So we reject 𝐻𝐻0 at 5% significance level and conclude that Pearson’s correlation
       coefficient is significantly different from zero.                                 [1]
       [Alternatively, use p-value = 0.022 for same conclusion.]


 (iv) (a) Ans: A3                                                                                        [2]
                        662
       𝑆𝑆𝑥𝑥𝑥𝑥 = 462 −          = 26.4
                        10
                               18252
       𝑆𝑆𝑦𝑦𝑦𝑦 = 335975 −               = 2912.5
                                10

                              66×1825
       𝑆𝑆𝑥𝑥𝑥𝑥 = 12240 −                    = 195
                                10



       (b)
               1                1952
       𝜎𝜎� 2 = �2912.5 −                � = 184.02
               8                   26.4
       s.e.�𝛽𝛽̂� = (𝜎𝜎� 2 ⁄𝑆𝑆𝑥𝑥𝑥𝑥 )1⁄2 = (184.02⁄26.4)1⁄2 = 2.64

               195
       𝛽𝛽̂ =        = 7.386
               26.4

       Test statistic = 7.386⁄2.64 = 2.80                                                                [2]

       (c)
       The test statistic follows a t-distribution with 8 df under the null hypothesis.                  [1]

       (d)
       This is a two-sided test with the 2.5% critical values being -2.306 and 2.306.                    [2]
       We have evidence at 5% significance level to reject the null hypothesis that
        𝛽𝛽 = 0.                                                                                          [1]


  (v) The two tests are actually similar therefore it is not surprising that they yield to the
      same conclusion that there is a linear relationship between house prices and school
      indices.                                                                                [2]

                                                                                              [Total 18]



CS1A S2020                                                               ©Institute and Faculty of Actuaries
    Subject CS1 Paper A (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




 There were no particular isues with part (i). In part (ii), many candidates failed to make
 any comment regarding the unclear trend in part of the data. A common error in parts (iii)
 and (iv) was to not use a two sided test. Part (v) was poorly answered, often with no
 mention of the two tests being similar.




                       END OF EXAMINERS’ REPORT




CS1A S2020                                                              ©Institute and Faculty of Actuaries



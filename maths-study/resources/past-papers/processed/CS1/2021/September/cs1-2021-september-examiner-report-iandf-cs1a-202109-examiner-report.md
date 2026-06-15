---
normalized_id: cs1-2021-september-examiner-report-iandf-cs1a-202109-examiner-report
exam_code: CS1
year: 2021
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep21/IandF_CS1A_202109_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2021-september-examiner-report-iandf-cs1a-202109-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                     September 2021

                           CS1 – Actuarial Statistics
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



CS1A S2021                                                        © Institute and Faculty of Actuaries
             CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
   statistical techniques that are of particular relevance to actuarial work.

   Some of the questions in the examination paper accept alternative solutions from those
   presented in this report, or different ways in which the provided answer can be
   determined. All mathematically correct and valid alternative solutions or answers
   received credit as appropriate.

   Rounding errors were not penalised. However, candidates may have lost marks where
   excessive rounding led to significantly different answers.

   In cases where the same error was carried forward to later parts of the answer, candidates
   were given appropriate credit for the later parts.

   In questions where comments were required, valid comments that were different from
   those provided in the solutions also received full credit where appropriate.

   The paper included a number of multiple choice questions, where showing working was
   not required as part of the answer.
   In all multiple choice questions, the details provided in the answers below (e.g.
   calculations) are for information.

   In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

   Standard keyboard typing was accepted for mathematical notation.


   B. Comments on candidate performance in this diet of the examination.

   Performance was satisfactory in general, with many candidates showing good
   understanding of the topics in this subject. Well prepared candidates were able to score
   highly.

   A smaller number of candidates appeared to be inadequately prepared, in terms of not
   having covered sufficiently the entire breadth of the subject.

   Questions corresponding to parts of the syllabus that are not frequently examined
   were generally poorly answered (e.g. Question 2, parts of Question 8). This highlights the
   need for candidates to cover the whole syllabus when they revise for the exam and not
   only rely on themes appearing in past papers.


   C. Pass Mark

   The Pass Mark for this exam was 58
   1372 presented themselves and 578 passed.



CS1A S2021                                                                © Institute and Faculty of Actuaries
                     CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


Solutions for Subject CS1A – September 2021

Q1
(i)
(𝑛𝑛−1)𝑆𝑆 2  2
       ~𝜒𝜒𝑛𝑛−1 ,                                                                                                [½]
   𝜎𝜎2
                              2
𝑛𝑛 = 15, 𝜎𝜎 = 2 𝑠𝑠𝑠𝑠 7𝑆𝑆 2 ~𝜒𝜒14
           2
                                 .                                                                             [1½]

(ii)
The underlying sample is from the Normal distribution, hence the chi-squared
distributional assumption for the sample variance holds true                                                   [1]
                                                                                                          [Total 3]

  Generally well answered.
  (i) Common errors included candidates using the wrong expression.
  (ii) A number of candidates did not answer this part. Those who answered, did so well.



Q2
(i)
      𝑍𝑍
 𝑡𝑡1 = , where Z ~ N(0,1) and Y ~ 𝜒𝜒12 are independent                                                           [1]
          √𝑌𝑌


Simulate 𝑍𝑍1 , 𝑍𝑍2 from N(0,1) independently,                                                                    [½]
then 𝑍𝑍22 ~ 𝜒𝜒12 .                                                                                               [½]
    𝑍𝑍      𝑍𝑍
So 1 = 𝑍𝑍1 ~ 𝑡𝑡1                                                                                                 [1]
      �𝑍𝑍22     2




(ii)
Simulate iid 𝑍𝑍1 , 𝑍𝑍2 , 𝑍𝑍3 ~𝑁𝑁(0,1), so that 𝑍𝑍12 + 𝑍𝑍22 + 𝑍𝑍32 ~ 𝜒𝜒32 .                                       [2]
This is the same as a Gamma (3/2, 1/2) distribution                                                              [1]

(iii)
Simulate iid 𝑍𝑍1 , 𝑍𝑍2 ~𝑁𝑁(0,1), so that 𝑍𝑍12 , 𝑍𝑍22 ~ 𝜒𝜒12 independently                                        [1]
         𝑍𝑍12
Then𝑍𝑍 2 ~𝐹𝐹1,1                                                                                                  [1]
          2
                                                                                                          [Total 8]

  This question was not well answered, with many candidates not attempting it.
  In many cases candidates attempted to provide answers using incorrect (or not sufficiently
  explained) references to the inverse CDF method. Notice that the inverse CDF method is
  not directly applicable here.



Q3
The mean and variance of the distribution are given by

                𝑏𝑏         6
𝐸𝐸 [𝑋𝑋] = 𝑎𝑎−1 = 4 – 1 = 2                                                                                       [½]


CS1A S2021                                                                        © Institute and Faculty of Actuaries
                CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


                    𝑎𝑎𝑏𝑏 2              4(6)2
𝑉𝑉𝑉𝑉𝑉𝑉 [𝑋𝑋] = (𝑎𝑎−1)2 (𝑎𝑎−2) = (4 − 1)2 (4 − 2) = 8                                                                   [½]
𝑉𝑉𝑉𝑉𝑉𝑉 (𝑌𝑌) = 𝑉𝑉𝑉𝑉𝑉𝑉 [𝐸𝐸 (𝑌𝑌 | 𝑋𝑋)] + 𝐸𝐸 [𝑉𝑉𝑉𝑉𝑉𝑉 (𝑌𝑌 | 𝑋𝑋)], so
𝑉𝑉𝑉𝑉𝑉𝑉 (𝑌𝑌) = 𝑉𝑉𝑉𝑉𝑉𝑉 [3𝑋𝑋 + 6 ] + 𝐸𝐸 [𝑋𝑋 2 + 4]                                                                       [1]
            = 9 𝑉𝑉𝑉𝑉𝑉𝑉 [𝑋𝑋] + 𝐸𝐸 [𝑋𝑋 2 ] + 4                                                                          [1]
Also 𝐸𝐸 [𝑋𝑋 2 ] = 𝑉𝑉𝑉𝑉𝑉𝑉[𝑋𝑋] + (𝐸𝐸 [𝑋𝑋])2 = 8 + 22 = 12                                                               [1]
So, 𝑉𝑉𝑉𝑉𝑉𝑉 (𝑌𝑌) = 9 (8) + 12 + 4 = 88                                                                                 [1]
The standard deviations is          √88 = 9.381                                                                       [1]

  Generally answered very well.
  Common issues involved not providing the standard deviation and calculation errors.
  Also, some candidates did not provide sufficient intermediate steps and this may have
  impacted partial credit given.



Q4
(i)
A gamma distribution with mean 35 and standard deviation 5 has the following parameters:
𝛼𝛼           𝛼𝛼
𝜆𝜆
   = 35 and 𝜆𝜆2
                = 25

So: 𝛼𝛼 = 25𝜆𝜆2 and 𝛼𝛼 = 35𝜆𝜆
Solving these equations gives: 𝛼𝛼 = 49 and 𝜆𝜆 = 1.4                                                                   [1]

So the prior distribution of 𝑚𝑚 is Gamma(49, 1.4)                                                                     [1]
The prior PDF of 𝑚𝑚 is therefore: 𝑓𝑓𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝 (𝑚𝑚) ∝ 𝑚𝑚48 𝑒𝑒 −1.4𝑚𝑚                                                  [1]

(ii)
Answer: D                                                                                                             [3]
Likelihood function L ∝ 𝑒𝑒 −7𝑚𝑚 𝑚𝑚135
The posterior PDF of 𝑚𝑚 is given by:
𝑓𝑓𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝 (𝑚𝑚) ∝ 𝑓𝑓𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝 (𝑚𝑚) × 𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿𝐿ℎ𝑜𝑜𝑜𝑜𝑜𝑜 𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓
So 𝑓𝑓𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝 (𝑚𝑚) ∝ 𝑚𝑚48 𝑒𝑒 −1.4𝑚𝑚 × 𝑒𝑒 −7𝑚𝑚 𝑚𝑚135 = 𝑚𝑚183 𝑒𝑒 −8.4𝑚𝑚

(iii)
Under all or nothing loss, the Bayesian estimate is given by the mode of this
Gamma(184, 8.4) distribution, which can be obtained by finding the value of 𝑚𝑚 that
maximises the PDF                                                                                                     [1]
Finding the maximum:
 𝑑𝑑                                    𝑑𝑑                         183
     �log(𝑓𝑓
           𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝𝑝 (𝑚𝑚)� =      (183 log 𝑚𝑚 − 8.4𝑚𝑚) =     − 8.4                                           [1]
𝑑𝑑𝑑𝑑                                  𝑑𝑑𝑑𝑑                         𝑚𝑚
                                            183
Setting equal to zero gives 𝑚𝑚 = 8.4 = 21.786                                                                         [2]

(iv)
Correctly identify mean of gamma posterior distribution as:                                                         [1]
𝛼𝛼   184
𝜆𝜆
   = 8.4 = 21.905                                                                                                   [1]
                                                                                                              [Total 12]




CS1A S2021                                                                             © Institute and Faculty of Actuaries
                     CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report



  The question was well answered.
  Please note that in all multiple choice questions, the details provided in the answers (e.g.
  calculations) are for information. Candidates were not required to show working.



Q5
(i)
𝑋𝑋 = number of policies where a claim is made, so
𝑋𝑋~𝐵𝐵𝐵𝐵𝐵𝐵(500, 0.06)                                                                                             [1]

Use the Normal approximation: 𝑋𝑋 ∼̇ N(30, 28.2),                                                                 [2]
as n is sufficiently large

𝑃𝑃(𝑋𝑋 ≤ 40) = 𝑃𝑃(𝑋𝑋 ≤ 40.5) using continuity correction                                                          [1]
       40.5−30       10.5
= Φ�          � = Φ�      � = Φ(1.97726) = 0.97599                                                               [1]
            √28.2               √28.2

(ii)
                                                                     𝜎𝜎
The 95% confidence interval for the mean claim amount is: 𝑥𝑥̅ ± 1.96                                             [1]
                                                                                        √𝑛𝑛
       𝜎𝜎
1.96         = 5 for a total confidence width of £10                                                             [1]
       √𝑛𝑛
Solve for n, using 𝜎𝜎 = £75, gives n = 864.36, i.e. sample size of 865                                         [2]
                                                                                                          [Total 9]

  Generally answered well.
  A common issue in part (i) was not using or applying a continuity correction correctly.



Q6
(i)
Answer: C                                                                                                        [2]
First derive the cdf of Y as
                𝑦𝑦
                                                                     𝑦𝑦
𝐹𝐹(𝑦𝑦) = � 2𝑐𝑐𝑐𝑐 exp(−𝑐𝑐𝑡𝑡 2 ) 𝑑𝑑𝑑𝑑 = [−exp(−𝑐𝑐𝑡𝑡 2 )]0
               0
= 1 − exp(−𝑐𝑐𝑦𝑦 2 ), 𝑦𝑦 > 0.
                                   1                 1/2
So, 𝑦𝑦 = 𝐹𝐹 −1 (𝑢𝑢) = �− 𝑐𝑐 log(1 − 𝑢𝑢)�

(ii)
To generate values of Y:
1. Generate a random variate u from U(0, 1)                                                                      [½]
                            1                1/2
2. Return 𝑦𝑦 = �− 𝑐𝑐 log(1 − 𝑢𝑢)�                                                                              [1½]

(iii)
Answer: B                                                                                                        [2]
                                                                            2
𝑝𝑝(𝑐𝑐 | 𝑦𝑦) ∝ 𝜋𝜋(𝑐𝑐)𝐿𝐿(𝑐𝑐; 𝑦𝑦) ∝ 𝑐𝑐 𝑎𝑎−1 𝑒𝑒 −𝑐𝑐𝑐𝑐 (2𝑐𝑐)𝑛𝑛 ∏𝑖𝑖 𝑦𝑦𝑖𝑖 𝑒𝑒 −𝑐𝑐𝑦𝑦𝑖𝑖
∝ 𝑐𝑐 𝑛𝑛+𝑎𝑎−1 exp{−(𝑏𝑏 + ∑𝑛𝑛𝑖𝑖=1 𝑦𝑦𝑖𝑖2 )𝑐𝑐}


CS1A S2021                                                                        © Institute and Faculty of Actuaries
             CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


(iv)
This is the density of a gamma distribution                                                            [1]
with parameters 𝑛𝑛 + 𝑎𝑎 and 𝑏𝑏 + ∑𝑛𝑛𝑖𝑖=1 𝑦𝑦𝑖𝑖2                                                         [1]
                                                                                                  [Total 8]

  There were mixed answers here, with a number of candidates not attempting parts of the
  question.
  In part (iv) some candidates failed to identify the parameters of the gamma distribution
  correctly.



Q7
(i)
Since 𝑋𝑋𝑖𝑖 are independent, we have that 𝑌𝑌 = ∑𝑛𝑛𝑖𝑖 𝑋𝑋𝑖𝑖 follows a gamma distribution with
parameters n and 𝑏𝑏                                                                                      [1]
                                           −𝑛𝑛
So MGF is given by 𝑀𝑀𝑌𝑌 (𝑡𝑡) = �1 − 𝑡𝑡�𝑏𝑏�                                                               [1]

(ii)
                                   −𝑛𝑛/2
𝑀𝑀𝑧𝑧 (𝑡𝑡) = �𝑀𝑀𝑌𝑌 (𝑡𝑡) = �1 − 𝑡𝑡�𝑏𝑏�                                                                     [½]
The MGF of a chi-square distribution with n degrees of freedom
is (1 − 2𝑡𝑡)−𝑛𝑛/2                                                                                        [½]

So 𝑀𝑀𝑧𝑧 (𝑡𝑡) is the MGF of a chi-square distribution with n degrees of freedom                         [1]
and 𝑏𝑏 = 0.5                                                                                           [1]
                                                                                                  [Total 5]

  There were mixed answers in this question, often with unclear justification.
  In part (i) reference to independence of the variables is required to fully justify the answer
  and obtain full marks.



Q8
(i)
Y follows a Poisson distribution                                                                         [1]
log(𝜇𝜇) = 𝛼𝛼𝑖𝑖 + 𝛽𝛽𝑖𝑖 𝑋𝑋1 ; where 𝑖𝑖 = 1,2,3 for low, medium and high pollutant respectively             [1]
𝜇𝜇 = 𝐸𝐸(𝑌𝑌)                                                                                              [1]

Alternative forms for the linear predictor:
The linear predictor above can also be written as:
log(𝜇𝜇) = 𝛽𝛽0 + 𝛽𝛽1 𝑋𝑋1 + 𝛽𝛽2,𝑖𝑖 + 𝛽𝛽3,𝑖𝑖 𝑋𝑋1; where 𝑖𝑖 = 2,3 for medium and high pollutant
Or, a model without the interaction term can be given
log(𝜇𝜇) = 𝛽𝛽0 + 𝛽𝛽1 𝑋𝑋1 + 𝛽𝛽2,𝑖𝑖 ; where 𝑖𝑖 = 2,3 for medium and high pollutant

(ii)
 𝛼𝛼𝑖𝑖 , 𝑖𝑖 = 1,2,3 are the coefficients of the main effect for pollutant concentration                   [1]



CS1A S2021                                                                © Institute and Faculty of Actuaries
                 CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


We may also need the interaction term 𝛽𝛽𝑖𝑖 𝑋𝑋1 if the effect of temperature on number of
hospitalisations is different for each level of pollutant concentration                                      [1]

Under alternative forms for the linear predictor in (i):
𝛽𝛽0 is the intercept
𝛽𝛽1 is the coefficient for the main effect for temperature
𝛽𝛽2,𝑖𝑖 the coefficients of the main effect for pollutant concentration where 𝑖𝑖 = 2,3 for
medium and high pollutant
𝛽𝛽3,𝑖𝑖 the coefficients of the effect of temperature on number of hospitalizations
where 𝑖𝑖 = 2,3 for medium and high pollutant

(iii)
log(𝜇𝜇) = −0.372 + 0.09 × 19 + 0.298 − 0.076 × 19                                                            [1]

(iv)
These are not listed as X_2Low is used as the reference category                                             [1]
or, equivalently, their effect is included in the intercept estimate

(v)
Medium concentration has no significant effect, as compared to low concentration,                            [1]
while high concentration has a significant increasing effect for the number of hospital
admissions                                                                                                   [1]

Alternative comments include:
The sign of 𝑋𝑋1 : 𝑋𝑋2 𝐻𝐻𝐻𝐻𝐻𝐻ℎ suggests that temperature becomes less important when pollutant
concentration is High (but 0.09-0.076 is still positive)
                                                                                        [Total 9]

 Again, the quality of answers given here was mixed.
 In part (i) there was no mention of the distribution in many cases.
 Parts (iii), (iv) were well answered for candidates that attempted them.



Q9
(i)(a)
Answer: A                                                                                                    [2]
 𝑛𝑛 = 110
 𝑆𝑆𝑥𝑥𝑥𝑥 = 𝑉𝑉𝑉𝑉𝑉𝑉(𝑥𝑥) (𝑛𝑛 − 1) = 261.8812 × 109 = 7475401
 𝑆𝑆𝑦𝑦𝑦𝑦 = 𝑉𝑉𝑉𝑉𝑉𝑉(𝑦𝑦) (𝑛𝑛 − 1) = 0.8242 × 109 = 74.008

         𝑺𝑺𝒚𝒚𝒚𝒚        0.824
𝑏𝑏� = 𝑟𝑟�𝑺𝑺 = −0.0175 261.881 = −5.506 × 10−5
          𝒙𝒙𝒙𝒙

�𝑎𝑎 = 𝑦𝑦� − 𝑏𝑏�𝑥𝑥̅ = 0.106 + 5.506 × 10−5 × 134.487 = 0.113

(b)
The fitted return for a firm with 𝑥𝑥 = 95.55 is
 𝑦𝑦 ∗ = 0.113 − 5.506 × 10−5 × 95.55 = 0.108                                                                 [1]



CS1A S2021                                                                    © Institute and Faculty of Actuaries
                      CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


(ii)(a)
Using the logarithmic regression,
𝑦𝑦 ∗ = 0.438 − 0.090 × 𝑙𝑙𝑙𝑙𝑙𝑙(95.55) = 0.028                                                                      [1]

(b)
The return estimated with the log revenue is different from the return in part (i)(b) as
expected                                                                                                          [1]

(c)
𝑆𝑆𝑧𝑧𝑧𝑧 = 𝑉𝑉𝑉𝑉𝑉𝑉(𝑧𝑧) (𝑛𝑛 − 1) = 1.6982 × 109 = 314.269                                                             [½]
𝑆𝑆𝑧𝑧𝑧𝑧 = β𝑆𝑆𝑧𝑧𝑧𝑧 = −0.09 × 314.269 = −28.284                                                                      [½]

(iii)
𝐻𝐻0 : β = 0 𝑣𝑣𝑣𝑣 𝐻𝐻1 : β ≠ 0                                                                                      [½]

           1                      28.2842
𝜎𝜎� 2 = 108 �74.008 − 314.269� = 0.662                                                                            [1]
s.e.�𝛽𝛽̂ � = (𝜎𝜎� 2 ⁄𝑆𝑆𝑧𝑧𝑧𝑧 )1⁄2 = (0.662⁄314.269)1⁄2 = 0.046                                                     [½]

Test statistic = −0.09⁄0.046 = −1.956                                                                             [1]

The test statistic follows a t-distribution with 108 df under the null hypothesis                                 [½]
This is a two-sided test with the 5% critical value being −1.658 for 120 df
( −1.661 using linear interpolation and −1.659 using R)                                                           [½]

We have evidence at 10% significance level to reject the null hypothesis that
β = 0 and we conclude that the logarithmic revenues affect returns                                                [1]

(iv)
𝐻𝐻0 : β = 0 𝑣𝑣𝑣𝑣 𝐻𝐻1 : β > 0                                                                                      [1]

From (iii), the test statistic is − 1.956
The test statistic follows a t-distribution with 108 df under the null hypothesis
This is a one-sided test with the 10% critical value approximating 1.289 for
120 df (1.290 using linear interpolation and 1.289 using R)                                                       [1]

We do not have evidence to reject 𝐻𝐻0 at 10% significance level. Firms with greater
revenues do not necessary enjoy a larger return                                                                   [1]

(v)
          𝑆𝑆𝑧𝑧𝑧𝑧         −28.284
𝑟𝑟 = (𝑆𝑆 𝑆𝑆 )1/2 = (314.269×74.008)1/2 = −0.185                                                                   [1]
          𝑧𝑧𝑧𝑧 𝑦𝑦𝑦𝑦


(vi)(a)
𝑧𝑧 = 2, the estimated percentage return is
𝑦𝑦 ∗ = 0.438 − 0.09 × 2 = 0.258                                                                                   [1]

(b)
                                                         1
          ∗)                1     (2−3.686)2             2
𝑆𝑆𝑆𝑆(𝑦𝑦        = ��1 + 110 +                   � 0.662 � = 0.821                                                [1½]
                                    314.269



CS1A S2021                                                                         © Institute and Faculty of Actuaries
                CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report




Confidence interval: 0.258 ± 1.98 × 0.821 i.e. (−1.367 , 1.883)                                           [1½]
if approximating the percentage points for 𝑡𝑡108 𝑡𝑡𝑡𝑡 𝑡𝑡120 .

(vii)(a)
The expected return is 𝑦𝑦 ∗ = 0.438 − 0.09 × 1.76 = 0.28 .                                                  [1]
The residual is 𝑒𝑒̃ = 4.333 − 0.28 = 4.053 .                                                                [1]

(b)
The residual is way above 0 and from the table the percentage return is 3 times
the median                                                                                                  [1]

Alternative:
This observation seems to be an outlier. Or, the residual appears large given the size
of the sample SD of the y data
                                                                                     [Total 22]

 Generally well answered.
 Some common issues included:
 (ii)(b) Attention to detail was required here, often candidates made inconsistent
 comments.
 (ii)(c), (iii): Calculation errors.
 (iv) Using a two-tailed test was a common error here.
 (v) A number of candidates showed lack of understanding where incorrect values for Szy,
 Szz led to an obviously incorrect Pearson’s correlation coefficient, i.e. r < -1 or r > 1.
 In parts (iii), (iv), (vi) full credit was given for using alternative critical point values,
 including values resulting from linear interpolation, extracted form R, or the appropriate
 critical points of the standard normal distribution with justification – i.e. high df.



Q10
(i)
Answer: C                                                                                                   [2]
                   𝑛𝑛                   𝑛𝑛

𝑙𝑙(𝜇𝜇) = log �� 𝑓𝑓(𝑥𝑥𝑖𝑖 |𝜇𝜇)� = � log 𝑓𝑓(𝑥𝑥𝑖𝑖 |𝜇𝜇)
                  𝑖𝑖=1                 𝑖𝑖=1
       𝑛𝑛                𝑛𝑛               1
= − 2 log(2𝜋𝜋) − 2 log(𝜎𝜎       2)
                                     − 2𝜎𝜎2 ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝜇𝜇)2
Therefore
𝑑𝑑𝑑𝑑(µ)   1
        = 2 ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − µ)
 𝑑𝑑µ        σ




(ii)
From part (i):

𝑑𝑑𝑑𝑑(µ)           1
          = 0  σ2 ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − µ) = 0
 𝑑𝑑µ



CS1A S2021                                                                   © Institute and Faculty of Actuaries
                      CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report




Therefore,
        𝑛𝑛
     1
𝜇𝜇̂ = � 𝑥𝑥𝑖𝑖 = 𝑥𝑥̅
     𝑛𝑛
              𝑖𝑖=1

𝜇𝜇̂ = 140,000                                                                                                     [1]

(iii)
Given that 𝜇𝜇̂ is the sample mean,
                     𝜎𝜎2
𝜇𝜇̂ ~ 𝒩𝒩(𝜇𝜇, 𝑛𝑛 )                                                                                               [1½]

Confidence interval:
                           2
𝜇𝜇̂ ± 𝑍𝑍0.025 �𝜎𝜎 �𝑛𝑛                                                                                             [1]

                               12,000                           12,000
140,000 − 1.96                          ≤ 𝜇𝜇 ≤ 140,000 + 1.96                                                     [1]
                                √5                               √5


95% CI: (129,481.54 , 150,518.46)                                                                                 [½]

(iv)
The posterior distribution is a normal distribution with mean:                                                    [1]

𝑛𝑛𝑛𝑛𝑥𝑥̅ +𝜏𝜏0 𝜇𝜇0
                   = 142166.7                                                                                     [½]
   𝑛𝑛𝑛𝑛+𝜏𝜏0


and variance:
1/(𝑛𝑛𝑛𝑛 + 𝜏𝜏0 ) = 4749.772 = 22,560,315                                                                           [½]

Hence,
𝜇𝜇̂ ~ 𝒩𝒩(142166.7 , 4749.772 )

(v)
The prior and the posterior distribution are of the same type                                                     [½]
The normal distribution is the conjugate prior for the mean of a normal distribution                              [½]

(vi)
Bayesian credible estimate for 𝜇𝜇 under quadratic loss is the expectation of the posterior
distribution:                                                                                                     [1]
𝜇𝜇� = 142166.67                                                                                                   [1]

(vii)
𝜇𝜇� ∼ 𝑁𝑁(142166.67,4749.772 ), therefore the Bayesian interval is

�142,166.67 − 1.96√4749.772 , 142,166.67 + 1.96√4749.772 �                                                      [1½]
i.e. (132857.1, 151476.2).                                                                                       [½]




CS1A S2021                                                                         © Institute and Faculty of Actuaries
               CS1A - Actuarial Statistics - Core Principles - September 2021 - Examiners’ report


(viii)
The Bayesian interval is different (narrower) than the CI of the MLE                                           [½]
The prior belief has impacted on the estimation of the posterior                                               [½]

(ix)
Answer: B                                                                                                      [3]
Given that the prior density of the uniform distribution 𝑓𝑓(𝜇𝜇) does not
depend on μ, we have:

𝑝𝑝(𝜇𝜇|𝑥𝑥� ) ∝ 𝐿𝐿(𝜇𝜇)𝑓𝑓(𝜇𝜇)
                1
 ∝ exp �− 2𝜎𝜎2 (∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝜇𝜇)2 )�
              1
 ∝ exp �− 2𝜎𝜎2 (∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝑥𝑥̅ )2 + 2 ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝑥𝑥̅ )(𝑥𝑥̅ − 𝜇𝜇) + n(𝑥𝑥̅ − 𝜇𝜇)2 )�
                                                                𝑛𝑛
                                              ∝ exp �− 2 (𝑥𝑥̅ − 𝜇𝜇)2 �
                                                             2𝜎𝜎
Since
 ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝑥𝑥̅ )(𝑥𝑥̅ − 𝜇𝜇) = (𝑥𝑥̅ − 𝜇𝜇) ∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝑥𝑥̅ ) = 0
and
∑𝑛𝑛𝑖𝑖=1(𝑥𝑥𝑖𝑖 − 𝑥𝑥̅ )2 does not depends on 𝜇𝜇.
                                                                                                       [Total 18]

 Very well answered.
 Comments in part (viii) varied, with many candidates failing to mention the impact of the
 prior distribution.

                                                                                             [Paper Total 100]

                            END OF EXAMINERS’ REPORT




CS1A S2021                                                                      © Institute and Faculty of Actuaries



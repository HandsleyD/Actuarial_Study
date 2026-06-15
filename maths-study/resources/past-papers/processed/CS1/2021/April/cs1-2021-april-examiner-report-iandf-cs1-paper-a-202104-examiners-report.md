---
normalized_id: cs1-2021-april-examiner-report-iandf-cs1-paper-a-202104-examiners-report
exam_code: CS1
year: 2021
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr21/IandF_CS1 Paper A_202104_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2021-april-examiner-report-iandf-cs1-paper-a-202104-examiners-report

   INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                         April 2021

                    Subject CS1 – Actuarial Statistics
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


                                                            Institute and Faculty of Actuaries
               CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   1. The aim of the Actuarial Statistics subject is to provide a grounding in mathematical
      and statistical techniques that are of particular relevance to actuarial work.

   2. Some of the questions in the examination paper admit alternative solutions from these
      presented in this report, or different ways in which the provided answer can be
      determined. All mathematically correct and valid alternative solutions or answers
      received credit as appropriate.

   3. Rounding errors were not penalised, but candidates lost marks where excessive
      rounding led to significantly different answers.

   4. In cases where the same error was carried forward to later parts of the answer,
      candidates were given appropriate credit for the later parts.

   5. In questions where comments were required, valid comments that were different from
      those provided in the solutions also received full credit where appropriate.

   6. The paper included a number of multiple choice questions, where showing working
      was not required as part of the answer.
   7. In all multiple choice questions, the details provided in the answers below (e.g.
      calculations) are for information. Candidates were not be required to show working.

   8. In all numerical questions that were not multiple-choice, full credit was given for
      correct answers that also included appropriate workings.

   9. Standard keyboard typing was accepted for mathematical notation.

   B. Comments on candidate’ performance in this diet of the examination.

   1. Performance was satisfactory in general, with many candidates showing very good
      understanding of the topics in this subject. Well prepared candidates were able to
      score highly.

   2. A smaller number of candidates appeared to be inadequately prepared, in terms of not
      having covered sufficiently the entire breadth of the subject.

   3. Questions that required higher order skills and comments were generally not well
      answered (e.g. Q1(iii)(b), Q8(v),(vi)).

   4. Questions corresponding to parts of the syllabus that are not frequently examined
      were generally poorly answered (e.g. Q5). This highlights the need for candidates to
      cover the whole syllabus when they revise for the exam and not only rely on themes
      appearing in past papers.

   5. There was a typing error in Q5(v) of the paper, where the correct answer should be
                  ∞                  ∞
      shown as ∫0 2𝑡𝑡𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 + ∫0 6𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑. This is also related to the answers in parts (vii)
      and (viii) of the question. The error was taken into account when marking the


CS1A A2021                                                                © Institute and Faculty of Actuaries
                  CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


           question, with the Examiners applying flexibility in awarding credit where
           appropriate. The pass mark for this exam was adjusted accordingly, to reflect the
           marks that affected candidates might not have had the opportunity to score. The
           Examiners did not find any evidence that the error had any further impact on
           performance on the remainder of the paper.


       C. Pass Mark

       The Pass Mark for this exam was 56.
       1,482 candidates presented themselves and 779 passed.

Solutions for Subject CS1 Paper A April 2021

Q1
(i)
                                                                          2
           X ~ Gamma(50, 0.25), and using X ~ Gamma(𝛼𝛼, 𝜆𝜆) ⇒ 2𝜆𝜆𝜆𝜆~𝜒𝜒2𝛼𝛼   :                               [1]
                                                                    2
           P(X > 270) = P(2𝜆𝜆X > 2𝜆𝜆 × 270) = P(0.5X > 135) = P(𝜒𝜒100 > 135) ≈ 0.01                         [1]
           (using the Actuarial Tables for chi-square probabilities)

(ii)
The mean and variance of the given gamma distribution are
                𝛼𝛼    50                       𝛼𝛼    50
       𝐸𝐸(𝑋𝑋) = 𝜆𝜆 = 0.25 = 200, 𝑣𝑣𝑣𝑣𝑣𝑣(𝑋𝑋) = 𝜆𝜆2 = 0.252 = 800                           [1]
Using the normal approximation for large 𝛼𝛼, X ~ Gamma(50, 0.25) can be approximated as
       X ~ N(200, 800):                                                                   [1]
                                270−200
       P(X > 270) = 𝑃𝑃 = �𝑍𝑍 >           � = P(Z > 2.4749) = 1 – P(Z < 2.4749) = 0.0066642
                                         √800
           Alternatively, use tables to interpolate, giving 0.00667
                                                                                                            [2]

(iii)
The gamma distribution converges to the normal distribution as 𝛼𝛼 → ∞.                                     [1]
But for 𝛼𝛼 = 50, the gamma distribution exhibits positive skew,                                           [½]
and gives a higher tail probability than the symmetric normal distribution                                [½]
                                                                                                     [Total 8]

       Generally well answered. In part (i) some candidates did not calculate the probability
       using the chi-square distribution, as the question asked. In (iii) a number of
       candidates did not provide any comments.



Q2
(i)        𝐸𝐸[𝑈𝑈] = 𝐸𝐸�𝐸𝐸[𝑌𝑌|𝑋𝑋]� = 𝐸𝐸[𝑌𝑌] = 5                                                              [1]

(ii)       𝑉𝑉𝑉𝑉𝑉𝑉(𝑈𝑈) = 𝑉𝑉𝑉𝑉𝑉𝑉(𝐸𝐸[𝑌𝑌|𝑋𝑋]) = 𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌) − 𝐸𝐸[𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌|𝑋𝑋)] = 4 − 2 = 2                     [2]
                                                                                                     [Total 3]




CS1A A2021                                                                   © Institute and Faculty of Actuaries
                     CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report



       Generally well answered. There were a few slips in the derivation, resulting in
       incorrect answers.


Q3
(i)
       Answer B
                                      1
          𝑀𝑀𝑋𝑋 (𝑡𝑡) = 𝐸𝐸[𝑒𝑒 𝑡𝑡𝑡𝑡 ] = ∫0 𝑒𝑒 𝑡𝑡𝑡𝑡 𝑑𝑑𝑑𝑑
                         1
            𝑀𝑀𝑋𝑋 (𝑡𝑡) = 𝑡𝑡 (𝑒𝑒 𝑡𝑡 − 1) for 𝑡𝑡 ≠ 0                                                                       [2]

(ii)
            𝑀𝑀𝑥𝑥 (0) = expectation of exp(0*X) = 1                                                                      [1]

(iii)
For a 𝑈𝑈(0,2) distributed RV 𝑍𝑍, we have:
        𝑀𝑀𝑍𝑍 (𝑡𝑡) = 𝐸𝐸[𝑒𝑒 𝑡𝑡𝑡𝑡 ]                                                                                       [½]
                    1 2                 1
                  = 2 ∫0 𝑒𝑒 𝑡𝑡𝑡𝑡 𝑑𝑑𝑑𝑑 = 2𝑡𝑡 (𝑒𝑒 2𝑡𝑡 − 1)                                                              [1½]

(iv)
Since 𝑋𝑋 and 𝑌𝑌 are independent,                                                                    [1]
        the MGF of 𝑋𝑋 + 𝑌𝑌 is given by the product of the MGFs:
                                                   1
        𝑀𝑀𝑋𝑋+𝑌𝑌 (𝑡𝑡) = 𝐸𝐸[𝑒𝑒 𝑡𝑡𝑡𝑡 ]𝐸𝐸[𝑒𝑒 𝑡𝑡𝑡𝑡 ] = 𝑡𝑡 2 (𝑒𝑒 𝑡𝑡 − 1)2 .                               [1]
        So, 𝑀𝑀𝑋𝑋+𝑌𝑌 (𝑡𝑡) ≠ 𝑀𝑀𝑈𝑈(0,2) (𝑡𝑡), and therefore 𝑋𝑋 + 𝑌𝑌 does not have a 𝑈𝑈(0,2) distribution
[1]
                                                                                              [Total 8]

        Part (i) was well answered. In part (ii), a common error was to state that the MGF is
        undefined. Common errors in part (iv) involved not stating that X and Y are
        independent, incorrectly deriving MGF(X+Y) and not summarising a response to the
        assertion.



Q4
(i)
                                                  (𝑛𝑛−1)𝑆𝑆 2      2
The sampling distribution of 𝑆𝑆 2 is:                          ~𝜒𝜒𝑛𝑛−1     with 𝑛𝑛 = 25 and 𝑑𝑑 2 = 4
                                                       𝑑𝑑2
                                                                  25 − 1                    2
Therefore the sampling distribution of 𝑆𝑆 2 is:                     4
                                                                           𝑆𝑆 2 = 6 𝑆𝑆 2 ~𝜒𝜒24                          [2]

(ii)
            So 𝐸𝐸[6𝑆𝑆 2 ] = 24
            And: 𝐸𝐸[𝑆𝑆 2 ] = 4                                                                                          [1]

(iii)
            var[6𝑆𝑆 2 ] = 48
                            48   4
            So var[𝑆𝑆 2 ] = 36 = 3                                                                                    [1]
                                                                                                                 [Total 4]


CS1A A2021                                                                               © Institute and Faculty of Actuaries
                     CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report



      The question was well answered. In part (i) a number of candidates failed to specify
      the sampling distribution, as the question asked.



Q5
(i)
          𝑓𝑓(𝑥𝑥, 𝑦𝑦) = 𝑘𝑘𝑒𝑒 −(𝑥𝑥+2𝑦𝑦) = 𝑘𝑘𝑒𝑒 −𝑥𝑥 𝑒𝑒 −2𝑦𝑦 , 𝑥𝑥 > 0, 𝑦𝑦 > 0
          [Or, f(x,y) = k g_X(x) g_Y(y).]                                                                            [½]

The density function is expressed as a product of a function of x and y. Therefore, the joint
probability function is a product of the two marginal probability functions for all (𝑥𝑥, 𝑦𝑦) in the
range of the variables hence 𝑋𝑋 and 𝑌𝑌 are independent                                         [½]

(ii)
The integral over the domain
              ∞                                      ∞                       ∞           ∞
          � 𝑓𝑓(𝑥𝑥, 𝑦𝑦)𝑑𝑑𝑑𝑑𝑑𝑑𝑑𝑑 = 𝑘𝑘 � 𝑒𝑒 −(𝑥𝑥+2𝑦𝑦) 𝑑𝑑𝑑𝑑𝑑𝑑𝑑𝑑 = 𝑘𝑘 � 𝑒𝑒 −𝑥𝑥 𝑑𝑑𝑑𝑑 � 𝑒𝑒 −2𝑦𝑦 𝑑𝑑𝑑𝑑
              0                                     0                       0           0

          Or, the integral of f(x,y) is k times the integral of g_X times the integral of g_Y
           ∞
          ∫0 𝑒𝑒 −𝑥𝑥 𝑑𝑑𝑑𝑑 = −𝑒𝑒 −𝑥𝑥 |∞
                                    0 = 1, that is, the integral of g_X is one                                       [1]

           ∞                          1                     1
          ∫0 𝑒𝑒 −2𝑦𝑦 𝑑𝑑𝑑𝑑 = − 2 𝑒𝑒 −2𝑦𝑦 |∞
                                         0 = 2 , that is, the integral of g_Y is 0.5                                 [1]

The integral of f(x,y) is 1 only for k=2 since,                                                                      [1]
           ∞                                                1
          ∫0 𝑓𝑓(𝑥𝑥, 𝑦𝑦)𝑑𝑑𝑑𝑑𝑑𝑑𝑑𝑑 = 𝑘𝑘 × 1 × 2 = 1, hence 𝑘𝑘 = 2

(iii)
The marginal density is
                              ∞                                  ∞
          𝑓𝑓𝑌𝑌 (𝑦𝑦) = 2 ∫0 𝑒𝑒 −𝑥𝑥 𝑒𝑒 −2𝑦𝑦 𝑑𝑑𝑑𝑑 = 2𝑒𝑒 −2𝑦𝑦 ∫0 𝑒𝑒 −𝑥𝑥 𝑑𝑑𝑑𝑑 = 2𝑒𝑒 −2𝑦𝑦                                  [1]

(iv)
The conditional probability 𝑃𝑃(𝑌𝑌 ≤ 𝑦𝑦|𝑌𝑌 > 3) is
                                             𝑃𝑃(𝑌𝑌≤𝑦𝑦,𝑌𝑌>3)
          𝑃𝑃(𝑌𝑌 ≤ 𝑦𝑦|𝑌𝑌 > 3) =
                                                 𝑃𝑃(𝑌𝑌>3)

              𝑃𝑃(3<𝑌𝑌≤𝑦𝑦)
          =
                𝑃𝑃(𝑌𝑌>3)
              𝐹𝐹𝑌𝑌 (𝑦𝑦)−𝐹𝐹𝑌𝑌 (3)
          =       𝑃𝑃(𝑌𝑌>3)
                                   , 𝑦𝑦 > 3.
                                                                                                                     [1]
Therefore,
                                     𝑓𝑓𝑌𝑌 (𝑦𝑦)      2𝑒𝑒 −2𝑦𝑦
          𝑓𝑓(𝑦𝑦|𝑌𝑌 > 3) =                        = 𝑒𝑒 −6 = 2𝑒𝑒 6−2𝑦𝑦 , 𝑦𝑦 > 3,                                       [1]
                                    𝑃𝑃(𝑌𝑌>3)




CS1A A2021                                                                            © Institute and Faculty of Actuaries
                  CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


since
                            ∞
          𝑃𝑃(𝑌𝑌 > 3) = ∫3 𝑓𝑓𝑌𝑌 (𝑦𝑦)𝑑𝑑𝑑𝑑 = −𝑒𝑒 −2𝑦𝑦 |∞
                                                    3 = 𝑒𝑒
                                                           −6
                                                              .                                                 [1]

(v)
   Answer D                                                                                                     [1]
The conditional expectation is given as
                       ∞                        ∞
      𝐸𝐸[𝑌𝑌|𝑌𝑌 > 3] = ∫3 𝑦𝑦𝑦𝑦(𝑦𝑦|𝑌𝑌 > 3)𝑑𝑑𝑑𝑑 = ∫3 2𝑦𝑦𝑒𝑒 6−2𝑦𝑦 𝑑𝑑𝑑𝑑

By taking 𝑡𝑡 = 𝑦𝑦 − 3,
                        ∞                          ∞                    ∞
       𝐸𝐸[𝑌𝑌|𝑌𝑌 > 3] = ∫0 2(𝑡𝑡 + 3)𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 = ∫0 2𝑡𝑡𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 + ∫0 6𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑

(vi)
           ∞                     𝑒𝑒 −2𝑡𝑡 (−2𝑡𝑡−1) ∞           1    1
          ∫0 2𝑡𝑡𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 =            2
                                                 |0 = (0) − �− � =
                                                              2    2
                                                                                                                [1]

           ∞
          ∫0 6𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 = 3                                                                                  [½]

          𝐸𝐸[𝑌𝑌|𝑌𝑌 > 3] = 3.5                                                                                   [½]

(vii)
    Answer D                                                                                                    [2]
                                  ∞                            ∞
          𝐸𝐸[𝑌𝑌 2 |𝑌𝑌 > 3] = ∫3 𝑦𝑦 2 𝑓𝑓(𝑦𝑦|𝑌𝑌 > 3)𝑑𝑑𝑑𝑑 = ∫3 2𝑦𝑦 2 𝑒𝑒 6−2𝑦𝑦 𝑑𝑑𝑑𝑑

Similar to (v),
           ∞                              ∞                     ∞                     ∞
          ∫0 2(𝑡𝑡 + 3)2 𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 = ∫0 2𝑡𝑡 2 𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 + ∫0 12𝑡𝑡𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑 + ∫0 18𝑒𝑒 −2𝑡𝑡 𝑑𝑑𝑑𝑑

          𝐸𝐸[𝑌𝑌 2 |𝑌𝑌 > 3] = 0.5 + 6 × 0.5 + 9 = 12.5

The first integral is the moment of order 2 for the exponential distribution with parameter 2

(viii)
The variance of Y given 𝑌𝑌 > 3
       Var[Y|Y > 3] = 𝐸𝐸[𝑌𝑌 2 |𝑌𝑌 > 3] − ( 𝐸𝐸[𝑌𝑌|𝑌𝑌 > 3])2 = 12.5 − 3.52 = 0.25                                 [1]
                                                                                                         [Total 14]

      There were mixed answers in this question. This type of question has not appeared
      frequently in the presented form and many candidates found it challenging. Parts (i) -
      (iii) were well answered, while in part (iv) the justification for the conditional
      probability required was often missed. Parts (v), (vii), v(iii) were not well answered.
      These parts were potentially affected by the typing error in part (v). Part (vi) was
      poorly answered.




CS1A A2021                                                                       © Institute and Faculty of Actuaries
                CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


Q6
(i)(a)
     Answer A

The likelihood function is:
       L =[(1 – p)3]40 × [3p(1 – p)2]60 × [3p2(1 – p)]15 × [p3]5
        ∝ (1 – p)120 p60 (1 – p)120 p30 (1 – p)15 p15
       = (1 – p)255 p105

Taking logs:
       log L ∝ 255 log (1 – p) + 105 log p                                                                [2]

(b)
Using the answer from (i)(a):
Then differentiate with respect to p:
        𝑑𝑑 𝑙𝑙𝑙𝑙𝑙𝑙 𝐿𝐿     255   105
            𝑑𝑑𝑑𝑑
                     = − 1−𝑝𝑝 + 𝑝𝑝                                                                        [1]

Setting this equal to zero gives:
        255𝑝𝑝̂ = 105(1 − 𝑝𝑝̂ )
        360𝑝𝑝̂ = 105                                                                                      [1]
              105
        𝑝𝑝̂ = 360 = 0.2917                                                                                [1]

(ii)
Specify the hypotheses using a χ2 goodness of fit test:
       H 0 – the probabilities follow a binomial bin(3, p) distribution
       H 1 – the probabilities do not follow a binomial bin(3, p) distribution                            [1]

Using the MLE estimate for p above (0.29166):
       P(X = 0) = (1 – p)3 = 0.35540
       P(X = 1) = 3p(1 – p)2 = 0.43902
       P(X = 2) = 3p2(1 – p) = 0.18077
       P(X = 3) = p3 = 0.024812                                                                           [1]

Therefore we get the following:

  Number of
                                 0                     1                     2                     3
  exam passes
  Observed no.
                                40                    60                     15                    5
  of passes
  Expected no.         0.35540 x 120          0.43902 x 120         0.18077 x 120        0.024812 x 120
  of passes               = 42.648               =52.682               = 21.693             = 2.9774
                                                                                                          [2]




CS1A A2021                                                                 © Institute and Faculty of Actuaries
                   CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report




Combining last two columns, as expected no. of students with 3 exam passes < 5:

      Number of
                                            0                                    1                                         2 and 3
      exam passes
      Observed no.
                                           40                                   60                                             20
      of passes
      Expected no.
                                        42.648                            52.682                                           24.670
      of passes
                                                                                                                                          [1]

So: degrees of freedom = 3 – 1 – 1 = 1                                                                                                    [1]

The test statistic is:
          (𝑂𝑂 − 𝐸𝐸)2     (40 − 42.648)2 (60 − 52.682)2 (20 − 24.670)2
     �                 =               +              +               = 2.0649
              𝐸𝐸             42.648         52.682         24.670
                                                                                                   [1]
The test statistic is less than the 5% 𝜒𝜒12 critival value of 3.841 – therefore there is insufficient
evidence at the 5% level to reject H 0 . Therefore there is no evidence to conclude that the
model is not a good fit                                                                            [1]
                                                                                           [Total 13]

      Part (i) was well answered. Part (ii) was reasonably well answered, but with a
      number of common errors, including: incorrect hypotheses stated, incorrect expected
      numbers calculated, no attempt at combining final 2 cells, incorrect degrees of
      freedom and a number of candidates not clearly showing their working.



Q7
(i)
          𝑡𝑡 distribution would be suitable, with 33 df.                                                                                  [1]

(ii)
Assumed that the variances (rural and urban) are equal                                        [1]
Equal variances seem to be justified given the 𝑆𝑆𝑦𝑦 values for rural and urban areas are similar
given the small sample sizes                                                                  [1]
Assumption of Normality                                                                      [½]
                                                              [Marks available 2½, maximum 2]

(iii)
     Answer A
                                                                          1                 1
          Test statistic 𝑡𝑡 = (𝑌𝑌�𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟 − 𝑌𝑌�𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢 )/ �𝑆𝑆𝑃𝑃 �𝑛𝑛            + 𝑛𝑛            � ~𝑡𝑡𝑛𝑛𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟 +𝑛𝑛𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢 −2
                                                                        𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟      𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢
          under the null hypothesis that phone usage is equal.




CS1A A2021                                                                                       © Institute and Faculty of Actuaries
                    CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


                      2               2
                  14𝑆𝑆𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟 +19𝑆𝑆𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢𝑢     1
        𝑆𝑆𝑃𝑃2 =                                    = 33 (14 × 2.12 + 19 × 1.92 ) = 3.949
                          33
                    3.7−4.4
        𝑡𝑡 =               1  1
                                       = −1.031                                                                  [2]
               �3.95×( + )
                           15 20
(iv)
We are applying a two-sided test                                                                 [1]
Critical values for 𝑡𝑡33 are not in the tables, but at the 2.5% level they are between 2.032 (𝑡𝑡34 )
and 2.037 (𝑡𝑡32 )                                                                                [1]

Since the test statistic lies in-between the table values,
i.e. −2.032 < −1.031 < 2.037,
[Or, as t33;2.5% is between 2.032 and 2.037, we have
t33;97.5% < -1.031 < t33;2.5%)]
we conclude that the null hypothesis of equal phone usage being equal cannot be rejected
                                                                                                                 [1]

(v)
Assume 𝑌𝑌𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟𝑟 ~𝑁𝑁(𝜇𝜇, 𝜎𝜎 2 ).                                                                              [1]
Critical values for 𝑡𝑡14 at the 2.5% level are: -2.145 and +2.145                                                [1]
                                    𝑡𝑡     2.1
Confidence interval = 3.7 ± 14,0.025
                                       √15
        = [3.7 − 2.145 × 0.542 , 3.7 + 2.145 × 0.542]                                                           [1]
        = [2.537, 4.863]                                                                                        [1]
                                                                                                         [Total 12]

   Parts (i)-(iii) were generally well answered – common errors here included the
   justification of equal variances often being omitted. In part (iv), a number of
   candidates did not clearly refer to the critical values required, while in (v) the
   assumption of Normality was often missed.



Q8
(i)
There appears to be a number of possible outliers,                                             [½]
(i.e. c0 or c365 days, these should be rechecked as they may be an error in the data or
analysis.)
The plot exhibits a strong positive linear relationship between days and year                   [1]
𝑅𝑅 2 percentage looks too high when compared to the scatterplot and the several outliers [½]
𝛼𝛼 value looks too high, we would expect it lower than 100 days, looking at the scatterplot
                                                                                               [½]
𝛽𝛽 value sign looks to be the wrong way around, i.e. should be a positive                      [½]
The number of days is bounded in the interval [0,366]. If the intention is to project into
future years, it may have been better to fit a model that respects this restriction, e.g. do a
logistic transformation on the number of days first (although the relationship may no longer
be linear)                                                                                      [1]
                                                               [Marks available 4, maximum 2]

(ii)
The required values are:


CS1A A2021                                                                        © Institute and Faculty of Actuaries
                         CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


           𝑠𝑠𝑡𝑡𝑡𝑡 = ∑ 𝑡𝑡 2 − 𝑛𝑛𝑡𝑡̅ 2
           = 42,925 – 50 * (1,275 / 50)^2 = 10,412.50                                                              [½]
           𝑠𝑠𝑡𝑡𝑡𝑡 = ∑ 𝑡𝑡𝑡𝑡 − 𝑛𝑛𝑡𝑡̅𝑑𝑑̅
       = 282,724 – 50 * (1,275 / 50) * (8,502 / 50) = 65,923.00                                                    [½]
Therefore:
             𝑠𝑠
       𝛽𝛽̂ = 𝑠𝑠𝑡𝑡𝑡𝑡
                      𝑡𝑡𝑡𝑡

           = 65,923.00 / 10,412.50 = 6.331                                                                         [1]
           𝛼𝛼� = 𝑑𝑑̅ − 𝛽𝛽̂ 𝑡𝑡̅
       = 8,502 / 50 – 6.331 * (1,275 / 50) = 8.596                                                                 [1]
Hence the regression line equation as given in the question

(iii)(a)
           𝑠𝑠𝑑𝑑𝑑𝑑 = ∑ 𝑑𝑑 2 − 𝑛𝑛𝑑𝑑̅ 2
           = 1,911,378 – 50 * (8,502 / 50)^2 = 465,697.92                                                          [1]
                                       2
                             1       𝑠𝑠𝑡𝑡𝑡𝑡
           𝜎𝜎� 2 = 𝑛𝑛−2 �𝑠𝑠𝑑𝑑𝑑𝑑 − 𝑠𝑠 �
                                       𝑡𝑡𝑡𝑡

           = (1 / 48) * (465,697.92 – 65,923^2 / 10,412.50) = 1,006.878                                            [1]

So the standard error of 𝛽𝛽̂ is:
               �2
               𝜎𝜎
           �𝑠𝑠
               𝑡𝑡𝑡𝑡

           = sqrt(1,006.878 / 10,412.50) = 0.311                                                                   [1]

(iii)(b)
The test is as follows:
         𝐻𝐻0 ∶ 𝛽𝛽 = 0 𝑣𝑣𝑣𝑣 𝐻𝐻1 ∶ 𝛽𝛽 ≠ 0                                                                            [½]

Under the null hypothesis, the corresponding test statistic is:
           � −0
           𝛽𝛽
             �2
            𝜎𝜎
                      = 6.331 / 0.311 = 20.360                                                                     [½]
           �
            𝑠𝑠𝑡𝑡𝑡𝑡




The 1% critical values from the 𝑡𝑡48 distribution are circa ±2.678 (using 𝑡𝑡50 for simplicity)
                                                                                             [½]
Or, interpolate to find critical values ±2.6832

Since 20.35998 > 2.678 there is strong evidence to reject 𝐻𝐻0 at the 1% level,
i.e. there is sufficient evidence to suggest that there is a strong linear relationship                            [½]

(iii)(c)
Using the same standard error and percentage point in (iii)(b), the confidence interval is
found by:



CS1A A2021                                                                          © Institute and Faculty of Actuaries
                CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report



                    �
                    𝜎𝜎   2
        𝛽𝛽̂ ± 2.678�𝑠𝑠
                       𝑡𝑡𝑡𝑡

        = 6.331 ± 2.678 × 0.311                                                                           [1]
        = (5.498 , 7.164)                                                                                 [1]

(iv)(a)
The test is as follows:
        𝐻𝐻0 ∶ 𝛽𝛽 = 0 𝑣𝑣𝑣𝑣 𝐻𝐻1 ∶ 𝛽𝛽 ≠ 0                                                                    [½]
Under the null hypothesis, the corresponding test statistic is:
        = 5.215 / 1.983 = 2.630                                                                           [½]

The 1% critical values from the 𝑡𝑡48 distribution are circa ±2.678 (using 𝑡𝑡50 for simplicity)
Since 2.62995 < 2.678 we have no evidence to reject 𝐻𝐻0 at the 1% level                      [½]
We conclude that there is insufficient evidence of a linear relationship                     [½]

(iv)(b)
Using the same standard error and percentage point in (iv)(a), the confidence interval is:
        5.215 ± 2.678 × 1.983                                                              [1]
        = (−0.095 , 10.524)                                                                               [1]
(v)
The two confidence intervals overlap, with one being a subset of the other                 [1]
This suggests that we cannot confidently conclude that the underlying slope coefficients are
different                                                                                  [1]
However, the large standard error leads to a wide confidence interval, meaning we lack
evidence in the conclusion to the above bullet points                                      [1]

Alternative comments:
For deciding if the two underlying slope parameters are equal, a formal test would be
required for the difference between the two parameters                                   [1]
where the variance of the difference should also be taken into account properly          [1]
                                                              [Marks available 5, maximum 3]

(vi)
The test conclusions in (iii)(b) and (iv)(a) appear to disagree                                      [1]
The test statistic in (iii)(b) lies well over the critical value whereas the test statistic in (iv)(a)
lies just under the critical value                                                                   [1]
So this suggests that the slope coefficients may be different for the two sets of climate change
data                                                                                                 [1]
Recording of past data, method of collection, errors in collection / the data etc from the
alternative sources, treatment of outliers, differences in definition (e.g. location used) of
extreme weather, may lead to the apparent differences observed                                       [1]
Alternative comments:
We reject this hypothesis of the slope parameter being significantly different from 0 in part
(iii)(b) but not in part (iv)(a)                                                                     [1]




CS1A A2021                                                                 © Institute and Faculty of Actuaries
                     CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


From these results alone it appears that the two parameters are therefore different, which
seems to contradict the conclusion in part (v)                                               [1]
However, for deciding if the two underlying slope parameters are equal, a formal test would
be required for the difference between the two parameters, where the variance of the
difference should also be taken into account properly                                        [1]
                                                              [Marks available 7, maximum 4]
                                                                                      [Total 23]

       Part (i) required more analysis and judgement from candidates, compared to the
       usual comments required for this question type. Many candidates made generic
       comments regarding the plot, with very little challenge or comment regarding the
       statistics given in the question. Parts (ii)-(iv) were generally answered well, with the
       only issue being numerical errors. Parts (v)-(vi) were poorly answered.



Q9
(i)
       Answer C                                                                                                              [3]
The likelihood is
                                u𝑥𝑥𝑖𝑖 𝑒𝑒 −u
           𝑓𝑓(𝑥𝑥|u) = ∏𝑛𝑛𝑖𝑖=1                 and prior for u is 𝑓𝑓(u) ∝ ua−1 𝑒𝑒 −bu
                                    𝑥𝑥𝑖𝑖 !


So the posterior density is given by
                                                             u𝑥𝑥𝑖𝑖 𝑒𝑒 −u
           𝑓𝑓(u|𝑥𝑥) ∝ 𝑓𝑓(𝑥𝑥|u) × 𝑓𝑓(u) ∝ ∏𝑛𝑛𝑖𝑖=1                           × ua−1 𝑒𝑒 −bu ∝ ua+∑ 𝑥𝑥𝑖𝑖 −1 𝑒𝑒 −(b+n)u
                                                                  𝑥𝑥𝑖𝑖 !


(ii)
           𝑢𝑢|𝑥𝑥 follows a gamma(a+ ∑ 𝑥𝑥𝑖𝑖 , b+n) distribution                                                               [2]

(iii)(a)
The Bayesian estimate of μ under quadratic loss is the posterior mean and so:
                         a+∑ 𝑥𝑥
         u� = 𝐸𝐸(u|𝑥𝑥) = b+n 𝑖𝑖 .                                                                                            [2]
(b)
This can be written as:
                𝑎𝑎  b     ∑ 𝑥𝑥    n
           u� = b b+n + n 𝑖𝑖 b+n                                                                                             [1]

                           a
            = (1 − 𝑍𝑍) b + 𝑍𝑍𝑥𝑥̅ ,

                 n
where 𝑍𝑍 = b+n is the credibility factor                                                                                     [1]

(iv)
                               a+∑ 𝑥𝑥𝑖𝑖          9+320       329
         u� = 𝐸𝐸(u|𝑥𝑥) =                     =           =          = 36.56
                                b+n                3+6        9
                                                                                                                             [2]

                           a+∑ 𝑥𝑥            329
(v)        𝑉𝑉(𝑢𝑢|𝑥𝑥) = (b+n)2𝑖𝑖 =             92
                                                   = 4.06                                                                    [2]




CS1A A2021                                                                                    © Institute and Faculty of Actuaries
              CS1A - Actuarial Statistics - Core Principles - April 2021 - Examiners’ report


(vi)
The prior variance of 𝑢𝑢 has changed from 9/9 = 1 to 18/36 = 0.5. With the data (and hence the
likelihood) being unchanged                                                                 [1]
this means that the posterior variance will also be reduced (but not necessarily halved)    [1]
                                                                                     [Total 15]

   Answered very well by most candidates. A common error in part (ii) was specifying an
   incorrect Gamma distribution.


                                                                                      [Paper Total 100]


                       END OF EXAMINERS’ REPORT




CS1A A2021                                                               © Institute and Faculty of Actuaries



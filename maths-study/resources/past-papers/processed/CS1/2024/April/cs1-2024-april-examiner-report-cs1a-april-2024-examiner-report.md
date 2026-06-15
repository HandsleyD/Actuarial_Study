---
normalized_id: cs1-2024-april-examiner-report-cs1a-april-2024-examiner-report
exam_code: CS1
year: 2024
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr24/CS1A_April 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2024-april-examiner-report-cs1a-april-2024-examiner-report

EXAMINERS’ REPORT
CS1 - Actuarial Statistics
Core Principles
Paper A




                             April 2024
                CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates, both
those who are sitting the examination for the first time and using past papers as a revision aid and
also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The Examiners
have access to the Core Reading, which is designed to interpret the syllabus, and will generally
base questions around it but are not required to examine the content of Core Reading specifically
or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in this
report; other valid approaches are given appropriate credit. For essay-style questions, particularly
the open-ended questions in the later subjects, the report may contain more points than the
Examiners will expect from a solution that scores full marks.

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge and
understanding of the topics and therefore candidates should not be overly dependent on open book
materials. In our experience, candidates that spend too long researching answers in their materials
will not be successful either because of time management issues or because they do not properly
answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be exercised
in doing so because each exam question is unique. As with all professional examinations, it is
insufficient to repeat points of principle, formula or other text book works. The examinations are
designed to test “higher order” thinking including candidates’ ability to apply their knowledge to
the facts presented in detail, synthesise and analyse their findings, and present conclusions or
advice. Successful candidates concentrate on answering the questions asked rather than repeating
their knowledge without application.


The report is written based on the legislative and regulatory context pertaining to the date that the
examination was set. Candidates should take into account the possibility that circumstances may
have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
June 2024




CS1A A2024                                                              © Institute and Faculty of Actuaries
               CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


   A. General comments on the aims of this subject and how it is marked

   The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
   statistical techniques that are of particular relevance to actuarial work.

   Some of the questions in the examination paper accept alternative solutions from those
   presented in this report, or different ways in which the provided answer can be determined.
   All mathematically correct and valid alternative solutions or answers received credit as
   appropriate.

   Rounding errors were not penalised. However, candidates may have lost marks where
   excessive rounding led to significantly different answers.

   In cases where the same error was carried forward to later parts of the answer, candidates were
   given appropriate credit for the later parts.

   In questions where comments were required, valid comments that were different from those
   provided in the solutions also received full credit where appropriate.

   The paper included a number of multiple choice questions, where showing working was not
   required as part of the answer. In all multiple choice questions, the details provided in the
   answers in this report (e.g. calculations) are for information.

   In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

   Standard keyboard typing was accepted for mathematical notation.


   B. Comments on candidate performance in this diet of the examination.

   Performance was satisfactory in general, with some candidates showing good understanding
   of the topics in this subject. Well prepared candidates were able to achieve high marks.

   Some candidates appeared to be inadequately prepared, in terms of not having covered
   sufficiently the entire breadth of the subject.

   In questions requiring to show or verify a result it is important that candidates provide answers
   that show clearly how various steps in the answers follow on from the preceding steps (e.g.
   Q4(ii),(iii)).

   In a number of questions requiring commentary, the provided comments and explanations
   were often unclear (e.g. Q7(iv), Q9(vi)).


   C. Pass Mark

   The Pass Mark for this exam was 59.
   1613 presented themselves and 771 passed.



CS1A A2024                                                             © Institute and Faculty of Actuaries
                     CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


 Solutions for Subject CS1A – April 2024

 Q1
 (i)
 Correct option is A                                                                                        [2]
 𝐸𝐸[𝑋𝑋] = 10 × 0.4 + 20 × 0.4 + 40 × 0.2 = 4 + 8 + 8 = 20
 𝐸𝐸[𝑌𝑌] = 2 × 0.4 + 8 × 0.4 + 10 × 0.2 = 0.8 + 3.2 + 2 = 6


 (ii)
 𝑉𝑉(𝑌𝑌) = 𝐸𝐸[𝑉𝑉(𝑌𝑌|𝑋𝑋)] + 𝑉𝑉[𝐸𝐸(𝑌𝑌|𝑋𝑋)]                                                                    [½]
 𝐸𝐸[𝑉𝑉(𝑌𝑌|𝑋𝑋)] = 1 × 0.4 + 2 × 0.4 + 3 × 0.2 = 1.8                                                          [1]
 𝑉𝑉[𝐸𝐸(𝑌𝑌|𝑋𝑋)] = (−4)2 × 0.4 + 22 × 0.4 + 42 × 0.2 = 6.4 + 1.6 + 1.6 = 11.2                                 [1]
 𝑉𝑉(𝑌𝑌) = 1.8 + 11.2 = 13                                                                                  [½]
                                                                                                      [Total 5]

 Commentary:
 (i) Very well answered in general.
 (ii) There were mixed answers here. A number of candidates only considered one of the two
 conditional parts and failed to give a full answer.



 Q2
 (i)
   8       −
             4𝑦𝑦                                   4𝑦𝑦                                                      [1]
      𝑦𝑦𝑒𝑒   𝑚𝑚 = exp �𝑙𝑙𝑙𝑙8 − 𝑙𝑙𝑙𝑙𝑚𝑚 4 + 𝑙𝑙𝑙𝑙𝑙𝑙 −     �
 𝑚𝑚 4                                              𝑚𝑚
                 𝑦𝑦
              − 𝑚𝑚 − 𝑙𝑙𝑙𝑙𝑙𝑙
 = exp �                     + 𝑙𝑙𝑙𝑙8 + 𝑙𝑙𝑙𝑙𝑙𝑙�                                                              [1]
                    1
                    4
Therefore:
            1
 𝜃𝜃 = −                                                                                                    [½]
           𝑚𝑚
                                 1
 𝑏𝑏(𝜃𝜃) = ln (𝑚𝑚) = ln �− �
                                𝜃𝜃                                                                         [½]
 𝜑𝜑 = 1
              1
 𝑎𝑎(𝜑𝜑) =                                                                                                  [½]
              4
 𝑐𝑐(𝑦𝑦, 𝜑𝜑) = 𝑙𝑙𝑙𝑙8 + 𝑙𝑙𝑙𝑙𝑙𝑙                                                                               [½]




 CS1A A2024                                                                  © Institute and Faculty of Actuaries
                CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


(ii)
Model A:
All four mean preparation times are different from each other.                                         [1]
Model B:
The mean preparation times for types i = 2, i = 3 and i = 4 are the same.                             [½]
On the other hand, the mean preparation time for type i = 1 could potentially be
different (due to the absence of the 𝑣𝑣 term).                                                        [½]
                                                                                                 [Total 6]

Commentary:
(i) Not very well answered, with various errors in determining the correct quantities. [The
probability density function provided in the question is a valid density function for a
specific value of m that is greater than zero. The exact value of m was not required to
answer the question. added text 30/8/24] A number of candidates gave alternative equivalent
answers and these were awarded full marks when correct.
(ii) Generally well answered. A common error was to comment that Model A gave the same
times for all types.


Q3
(i)
Correct option is C.                                                                                   [2]
                     1          1                    1      4
                �−3 × � + �−2 × 10� + (−1 × 0) + �0 × �          8
𝐸𝐸[𝑌𝑌|𝑋𝑋 = 2] =      5                               5  = − 5 = − = −1.6
                              1 1 1                         1    5
                                + +
                              5 5 10                        2

(ii)
                       2         1
                  �1 × � + �2 × � 4
𝐸𝐸[𝑋𝑋|𝑌𝑌 = −3] =       5         5 =
                          3           3
                          5                                                                            [1]
                                  1
                  (1 × 0) + �2 × �
𝐸𝐸[𝑋𝑋|𝑌𝑌 = −2] =                 10  =2
                           1
                          10                                                                           [1]
                        1
                  �1 × 10� + (2 × 0)
𝐸𝐸[𝑋𝑋|𝑌𝑌 = −1] =                     =1
                           1                                                                           [1]
                          10
                               1
                (1 × 0) + �2 × �
𝐸𝐸[𝑋𝑋|𝑌𝑌 = 0] =                5 =2
                        1                                                                              [1]
                        5


                Y = -3      Y = -2       Y = -1       Y=0
                       4
E[X |Y = y ]                     2            1            2
                       3

CS1A A2024                                                              © Institute and Faculty of Actuaries
                CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report




(iii)
E[X] = E[X|Y = −3] × P(Y = −3) + E[X|Y = −2] × P(Y = −2)
+E[X|Y = −1] × P(Y = −1) + E[X|Y = 0] × P(Y = 0)
                                                                                                       [1]
   4 3         1        1       1    3
= � × � + �2 × � + �1 × � + �2 × � =
   3 5        10       10       5    2                                                                 [1]
                                                                                                 [Total 8]


Commentary:
(i),(ii) Very well answered.
(iii) Well answered in general. A common error was failing to put together all the different
parts of the calculation.



Q4
(i) (a)
Var(A) = Var(X) + (0.9^2)*Var(Y) – 2*0.9*Cov(X,Y)
= 1 + 0.9^2 – 2*0.9^2                                                                                  [1]
= 1 – 0.9^2
= 0.19                                                                                                [½]

(b)
Var(B) = Var(Z) + (0.8^2)*Var(Y) – 2*0.8*Cov(Y,Z)
= 1 + 0.8^2 – 2*0.8^2                                                                                  [1]
= 1 – 0.8^2
= 0.36                                                                                                [½]
(ii)
Cov(A,B) = Cov(X – 0.9*Y, Z – 0.8*Y)
= Cov(X,Z) – 0.8*Cov(X,Y) – 0.9*Cov(Y,Z) + 0.9*0.8*Cov(Y,Y)
= Cov(X,Z) – 0.8*0.9 – 0.9*0.8 + 0.9*0.8*1                                                             [2]
= Cov(X,Z) – 0.72                                                                                      [1]


(iii)
cor(A,B) = Cov(A,B)/sqrt(Var(A)*Var(B))
Therefore:
Cov(A,B) >= –sqrt(Var(A)*Var(B))                                                                       [1]
Cov(X,Z) – 0.72 = Cov(A,B) >= –sqrt(0.19*0.36)                                                         [1]
Therefore:
Cov(X,Z) >= 0.72 – sqrt(0.19*0.36) = 0.458                                                           [1]
                                                                                                 [Total 9]


CS1A A2024                                                              © Institute and Faculty of Actuaries
                    CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report



Commentary:
(i), (ii) Well answered in general.
(iii) Mixed answers. In many cases it was not clear how various steps in the answers
followed on from the preceding steps.


Q5
(i)
A loss function should
equal zero when the estimation is exactly correct, that is, g = u,                                     [½]
and be positive,                                                                                       [½]
and not decrease as g gets further away from u.                                                        [½]
                                                                                               [Max 1 mark]
(ii)
If g = u then L(g,u) = u – u = 0.                                                                      [1]
If g > u then L(g,u) = g – u which is clearly positive.                                               [½]
If g < u then L(g,u) = 3(u – g) which is clearly positive.                                            [½]
If g > u then L(g,u) = g – u which increases as g increases.                                          [½]
If g < u then L(g,u) = 3(u – g) which increases as g decreases.                                       [½]
                                                                                              [Max 2 marks]
(iii)
Correct option is D.                                                                                       [3]
          ∞
𝐸𝐸𝐸𝐸𝐸𝐸 = ∫−∞ 𝐿𝐿(𝑔𝑔, 𝑢𝑢)𝑓𝑓(𝑢𝑢|𝑥𝑥) 𝑑𝑑𝑑𝑑
     𝑔𝑔                                  ∞
= � (𝑔𝑔 − 𝑢𝑢)𝑓𝑓�𝑢𝑢�𝑥𝑥� 𝑑𝑑𝑑𝑑 + 3 � (𝑢𝑢 − 𝑔𝑔)𝑓𝑓�𝑢𝑢�𝑥𝑥� 𝑑𝑑𝑑𝑑
     −∞                                 𝑔𝑔

(iv)
Correct option is C.                                                                                       [3]
𝑑𝑑              𝑔𝑔                      ∞
     𝐸𝐸𝐸𝐸𝐸𝐸 = ∫−∞
                   𝑓𝑓(𝑢𝑢|𝑥𝑥) 𝑑𝑑𝑑𝑑 − 3 ∫𝑔𝑔
                                          𝑓𝑓(𝑢𝑢|𝑥𝑥) 𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑

= 𝑃𝑃�𝑢𝑢 < 𝑔𝑔�𝑋𝑋� − 3𝑃𝑃�𝑢𝑢 > 𝑔𝑔�𝑋𝑋�
= 4𝑃𝑃�𝑢𝑢 < 𝑔𝑔�𝑋𝑋� − 3
Equating to zero (with b = g):
                   3
𝑃𝑃�𝑢𝑢 < 𝑏𝑏�𝑋𝑋� =     = 0.75
                   4
                                                                                                     [Total 9]
Commentary:
(i) Well answered in general.
(ii) Not well answered. A number of candidates failed to fully verify the properties they had
stated in part (i).
(iii) Well answered in general.
(iv) Mixed answers in this MCQ part.



CS1A A2024                                                                  © Institute and Faculty of Actuaries
                       CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


Q6
(i)
A suitable prior is U(0,1)                                                                                    [1]
as it assigns equal probability to intervals of same length within (0,1).                                     [1]


(ii)
With U(0,1) prior, we have prior density 𝜋𝜋(𝑝𝑝) = 1.                                                         [½]
Data (x) come from binomial distributions with independent observations, so the
likelihood is:
𝐿𝐿(𝑝𝑝) ∝ 𝑝𝑝4 (1 − 𝑝𝑝)6 × 𝑝𝑝9 (1 − 𝑝𝑝)11 = 𝑝𝑝13 (1 − 𝑝𝑝)17                                                     [1]
Posterior density:
𝜋𝜋(𝑝𝑝|𝑥𝑥) ∝ 𝜋𝜋(𝑝𝑝)𝐿𝐿(𝑝𝑝) ∝ 𝑝𝑝13 (1 − 𝑝𝑝)17.                                                                   [1]

This is the density of a Beta(14, 18) distribution.                                                           [1]
Therefore, the estimate of p under quadratic loss is the mean of the posterior, i.e.                         [½]
                14
𝐸𝐸(𝑝𝑝|𝑥𝑥) =           = 0.4375
              14 + 18                                                                                         [1]


(iii)
With a Beta(2b, b) prior, we have 𝜋𝜋(𝑝𝑝) ∝ 𝑝𝑝2𝑏𝑏−1 (1 − 𝑝𝑝)𝑏𝑏−1                                               [1]
The likelihood is the same as before,                                                                        [½]
so posterior density is given as:
𝜋𝜋(𝑝𝑝|𝑥𝑥) ∝ 𝜋𝜋(𝑝𝑝)𝐿𝐿(𝑝𝑝) ∝ 𝑝𝑝2𝑏𝑏−1 (1 − 𝑝𝑝)𝑏𝑏−1 × 𝑝𝑝13 (1 − 𝑝𝑝)17 = 𝑝𝑝2𝑏𝑏+12 (1 −                             [1]

𝑝𝑝)𝑏𝑏+16.

This is the density of a Beta(2b+13, b+17) distribution.                                                     [½]
Therefore, the estimate of p under quadratic loss is the mean of the posterior, i.e.                         [½]
              2𝑏𝑏+13
𝐸𝐸(𝑝𝑝|𝑥𝑥) = 3𝑏𝑏+30 .
                                                                                                             [½]
(iv)
                                                               𝑎𝑎𝑎𝑎        2    1                            [½]
When b = 1, the prior is Beta(2,1) and its variance is (𝑎𝑎+𝑏𝑏)2(𝑎𝑎+𝑏𝑏+1) = 36 = 18.
                                                                                  1                          [½]
This is smaller than the variance under the U(0,1) prior, which is 12 .
With the likelihood being the same, this implies that when b = 1 the variance of                             [½]
the posterior is smaller,
and therefore the estimate in part (iii) has smaller variability and involves lower                          [½]
uncertainty.
                                                                                                        [Total 13]



CS1A A2024                                                                     © Institute and Faculty of Actuaries
                       CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report



Commentary:
(i) Mixed answers. Most candidates identified the distribution correctly, but many failed to
justify it properly.
(ii) Very well answered in general.
(iii) Mixed answers. A common error was failing to use a=2b in the final answer.
(iv) Well answered in general. A number of candidates alternatively used the posterior
variance of the two distributions to provide the correct answer, and this was given full
credit.


Q7
(i)
The prior distribution of a parameter is called conjugate if the posterior distribution
is of the same family as the prior.                                                                           [1]


(ii)
The posterior distribution can be written as
𝑓𝑓(𝑚𝑚|𝒙𝒙) ∝ 𝑓𝑓(𝒙𝒙|𝑚𝑚)𝑓𝑓(𝑚𝑚)

       𝑛𝑛
    𝑚𝑚 𝑥𝑥𝑖𝑖 𝑒𝑒 −𝑚𝑚 𝑠𝑠 𝑎𝑎
= ��              �       𝑚𝑚𝑎𝑎−1 𝑒𝑒 −𝑠𝑠𝑠𝑠                                                                     [1]
        𝑥𝑥𝑖𝑖 !      Γ(𝑎𝑎)
     𝑖𝑖=1

∝ 𝑚𝑚𝑎𝑎+𝑛𝑛𝑥𝑥̅ −1 𝑒𝑒 −(𝑠𝑠+𝑛𝑛)𝑚𝑚 ,                                                                               [1]
which implies that 𝑚𝑚|𝒙𝒙 follows a Gamma (𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ , 𝑠𝑠 + 𝑛𝑛).                                              [1]


(iii)
The posterior mean is given by
           𝑎𝑎 + 𝑛𝑛𝑥𝑥̅
𝐸𝐸[𝑚𝑚|𝒙𝒙] =           ,
            𝑠𝑠 + 𝑛𝑛                                                                                           [1]
and the posterior variance
                𝑎𝑎 + 𝑛𝑛𝑥𝑥̅
𝑉𝑉[𝑚𝑚|𝒙𝒙] =                .
               (𝑠𝑠 + 𝑛𝑛)2                                                                                     [1]


(iv)
                                                                       𝑥𝑥̅
As 𝑛𝑛 tends to ∞, 𝐸𝐸[𝑚𝑚|𝒙𝒙] tends to 𝑥𝑥̅ and 𝑉𝑉[𝑚𝑚|𝒙𝒙] tends to 𝑛𝑛. For large values of 𝑛𝑛,
the posterior mean and variance are not affected by the prior specified for m through
                                                                                                              [2]
a and s.




CS1A A2024                                                                     © Institute and Faculty of Actuaries
                      CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


(v) (a)
Correct answer is D.                                                                                              [3]
    1        𝑠𝑠
𝐸𝐸 � � =
    𝑚𝑚    𝑎𝑎 − 1
We can write:
               ∞                   ∞ 𝑎𝑎 𝑎𝑎−1 −𝑠𝑠𝑠𝑠          ∞ 𝑎𝑎 𝑎𝑎−2 −𝑠𝑠𝑠𝑠
                   𝑓𝑓(𝑚𝑚)           𝑠𝑠 𝑚𝑚 𝑒𝑒                 𝑠𝑠 𝑚𝑚 𝑒𝑒
𝐸𝐸[1/𝑚𝑚] = �              𝑑𝑑𝑑𝑑 = �                 𝑑𝑑𝑑𝑑 = �                 𝑑𝑑𝑑𝑑
              0      𝑚𝑚           0     𝑚𝑚Γ(𝑎𝑎)            0      Γ(𝑎𝑎)
              ∞ 𝑎𝑎−1
       𝑠𝑠    𝑠𝑠 𝑚𝑚𝑎𝑎−2 𝑒𝑒 −𝑠𝑠𝑠𝑠           𝑠𝑠
=         �                     𝑑𝑑𝑑𝑑 =        ×1
    𝑎𝑎 − 1 0    Γ(𝑎𝑎 − 1)              𝑎𝑎 − 1


Since the last integral is the pdf of a Gamma (𝛼𝛼 − 1, 𝑠𝑠).


(b)
Correct answer is A.                                                                                              [3]
    1            𝑠𝑠 + 𝑛𝑛
𝐸𝐸 � | 𝑥𝑥� =
    𝑚𝑚       𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ − 1
We have:
               ∞                      ∞
    1            𝑓𝑓(𝑚𝑚 | 𝑥𝑥)            (𝑠𝑠 + 𝑛𝑛)(𝑎𝑎+𝑛𝑛𝑥𝑥̅ ) 𝑚𝑚𝑎𝑎+𝑛𝑛𝑥𝑥̅ −2 𝑒𝑒 −(𝑠𝑠+𝑛𝑛)𝑚𝑚
𝐸𝐸 � | 𝑥𝑥� = �               𝑑𝑑𝑑𝑑 = �                                                    𝑑𝑑𝑑𝑑
    𝑚𝑚        0      𝑚𝑚              0               Γ(𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ )
                    ∞ (𝑠𝑠
        𝑠𝑠 + 𝑛𝑛           + 𝑛𝑛)𝑎𝑎+𝑛𝑛𝑥𝑥̅ −1 𝑎𝑎+𝑛𝑛𝑥𝑥̅ −2 −(𝑠𝑠+𝑛𝑛)𝑚𝑚
=                 �                       𝑚𝑚          𝑒𝑒          𝑑𝑑𝑑𝑑
    𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ − 1 0 Γ(𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ − 1)
        𝑠𝑠 + 𝑛𝑛
=                  ×1
    𝑎𝑎 + 𝑛𝑛𝑥𝑥̅ − 1


Since the last integral is the pdf of a Gamma (𝛼𝛼 + 𝑛𝑛𝑥𝑥̅ − 1, 𝑠𝑠 + 𝑛𝑛).
                                                                                                          [Total 14]



Commentary:
(i)-(iii) Very well answered in general. A common error in part (ii) was failing to use
proportionality when introducing the posterior density.
(iv) Not very well answered. A number of candidates provided generic answers, without
specific reference to the distributions that we have here.
(v) Mixed answers in these MCQ parts.




CS1A A2024                                                                         © Institute and Faculty of Actuaries
                               CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


Q8
(i)
               (∑𝑦𝑦)2
                    2
                               1812
𝑆𝑆𝑦𝑦𝑦𝑦 = ∑𝑦𝑦 −        = 4305 −      = 209.875
                 𝑛𝑛             8                                                                                     [1]
           𝑆𝑆𝑥𝑥𝑥𝑥                    23726.25
𝑟𝑟 =                    =−
       �𝑆𝑆𝑥𝑥𝑥𝑥 𝑆𝑆𝑦𝑦𝑦𝑦          �(3535237.5)(209.875)
                                                                                                                      [1]

= −0.871                                                                                                              [1]


(ii)
The correlation coefficient is negative, thus as the volume of the production                                         [1]
increases the price decreases.
The correlation is quite strong.                                                                                  [½]
                                                                                                          [Max 1 mark]


(iii)
Value of 𝑆𝑆𝑧𝑧𝑧𝑧
                             (∑𝑧𝑧)2    ∑𝑥𝑥 2      (∑𝑥𝑥)2    1             (∑𝑥𝑥)2      1
𝑆𝑆𝑧𝑧𝑧𝑧 = ∑𝑧𝑧 2 −                    =          −          =      �∑𝑥𝑥 2
                                                                        −        �=      𝑆𝑆
                               8      1000   2   8(1000 ) 1000
                                                        2      2            8       10002 𝑥𝑥𝑥𝑥                        [2]


(iv)
The new correlation coefficient
                             (∑𝑧𝑧)(∑𝑦𝑦)     1           (∑𝑥𝑥)(∑𝑦𝑦)      1
𝑆𝑆𝑧𝑧𝑧𝑧 = ∑𝑧𝑧𝑧𝑧 −                        =      �∑𝑥𝑥𝑥𝑥 −            �=     𝑆𝑆                                          [1]
                                 𝑛𝑛       1000              𝑛𝑛        1000 𝑥𝑥𝑥𝑥
                                   1
𝑟𝑟𝑛𝑛𝑛𝑛𝑛𝑛 =
                    𝑆𝑆𝑧𝑧𝑧𝑧
                          =−     1000 𝑆𝑆𝑥𝑥𝑥𝑥    = 𝑟𝑟 = −0.871
           �𝑆𝑆𝑧𝑧𝑧𝑧 𝑆𝑆𝑦𝑦𝑦𝑦    ��   1                                                                                   [1]
                                     𝑆𝑆 � 𝑆𝑆
                                10002 𝑥𝑥𝑥𝑥 𝑦𝑦𝑦𝑦


(v)
Parts (i) and (iv) give the same value. The Pearson correlation coefficient is                                        [1]
invariant to this transformation.


(vi)
The least squares fitted line
           1
𝑆𝑆𝑧𝑧𝑧𝑧 =       3535237.5 = 3.535
         10002
                                                                                                                     [½]

𝑆𝑆𝑧𝑧𝑧𝑧 = −23.726


CS1A A2024                                                                             © Institute and Faculty of Actuaries
                  CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


        𝑆𝑆𝑧𝑧𝑧𝑧   23.726                                                                                  [1]
𝛽𝛽̂ =          =        = −6.712
        𝑆𝑆𝑧𝑧𝑧𝑧 −3.535
        181             0.16                                                                             [1]
𝛼𝛼� =       − (−6.712) �    � = 22.759
         8               8
Thus the regression line is 𝑦𝑦� = −6.712𝑧𝑧 + 22.759                                                     [½]


(vii)
95% prediction interval for the price of oil
          1                                                                                             [½]
𝜎𝜎� 2 =     (209.875 − (−23.726)^2 /3.535) = 8.439
          6
Estimate of expected price = 22.759 + (−6.712) × (1.5) = 12.691                                          [1]
                                              0.16 2
                                                              1/2
                                 1    �1.5−       �
                                                8
St. error of estimate = ��1 + 8 +                      � 8.439�     = 3.837
                                         3.535
                                                                                                         [1]
𝑡𝑡0.025,6 = 2.447 so prediction interval for the price is                                               [½]
12.691 ± (2.447 × 3.837)                                                                                [½]
i.e. (3.302, 22.080)                                                                                    [½]
                                                                                                   [Total 16]

Commentary:
(i) Very well answered in general.
(ii) Well answered. Many candidates only commented on either the strength or the direction
of the relationship.
(iii) Mixed answers, with some candidates not presenting a mathematically clear argument
in the answer.
(iv) Well answered in general.
(v) Well answered in general. A number of candidates failed to explain their answer clearly.
(vi) Very well answered in general.
(vii) Mixed answers, with various errors in the calculations. A common error was
calculating the standard error for the mean response, rather than for an individual response
required here for a prediction interval.




CS1A A2024                                                                © Institute and Faculty of Actuaries
                 CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


Q9
(i)
Sample means are:
X_1_bar = 781/30 = 26.03                                                                               [½]
X_2_bar = 707/30 = 23.57                                                                               [½]


(ii)
We are comparing two Poisson parameters.
Assuming a normal approximation/distribution,                                                           [1]
and assuming that the two distributions/sets of data are independent,                                   [1]
the confidence interval for k_1 – k_2 is:
X_1_bar – X_2_bar +/- 1.96*sqrt(X_1_bar/n_1 + X_2_bar/n_2)
which equals:
26.03 – 23.57 +/- 1.96*sqrt(26.03/30 + 23.57/30)
                                                                                                        [2]
The confidence interval is therefore:
(-0.06,4.98)                                                                                            [1]


(iii)
The confidence interval for k_1 – k_2 in part (ii) contains 0.                                          [1]
Therefore, there is insufficient evidence at the 5% significance level to reject the
hypothesis that k_1 equals k_2.                                                                         [1]

(iv)
The samples are recorded for each shop on the same day and may not be
independent, in which case the data would be paired.                                   [1]
This could happen because the shops are nearby so would attract similar customers.     [1]
A single customer may visit both shops on the same day for quotes.                     [1]
External factors may also affect both shops’ customer numbers in the same way,
such as:
the weather                                                                            [1]
roadworks or closures limiting access to the shops                                     [1]
                                                                              [Max 3 marks]

(v)
H_0: k_1 = k_2
H_1: k_1 != k_2                                                                                         [1]
Under H_0, and assuming normality of the differences:                                                   [1]
the test statistic D_bar / (S_D / sqrt(n)) follows a t distribution with n-1 degrees of
freedom.
The sample value of this is (26.03 – 23.57) / (6.55 / sqrt(30))= 2.06                                   [1]
As this is a two-sided test, the critical value t_29;0.025 is 2.045.                                    [1]


CS1A A2024                                                               © Institute and Faculty of Actuaries
                CS1A ‑ Actuarial Statistics ‑ Core Principles - April 2024 - Examiners’ Report


The test statistic is greater than the critical value.                                                [½]
Therefore, we have sufficient evidence to reject H_0 at the 5% level, and conclude
that k_1 does not equal k_2.                                                                          [½]


(vi)
In part (iii) we treated the data as unpaired and failed to reject the hypothesis that
k_1 and k_2 are equal.                                                                      [½]
In part (v) we treated the data as paired and found sufficient evidence to reject the
same hypothesis.                                                                            [½]
If the samples are not truly independent, then treating them as such would produce
invalid results. However, treating them as paired always produces valid results,
although it would make inefficient use of the data.                                          [2]
However, the evidence in part (v) was not very strong, as the test statistic was only
slightly above the critical value.                                                           [1]
In both cases we used a normal approximation to the Poisson distribution, which
would have introduced some error in the testing. Using the exact distributions may
have produced different conclusions.                                                         [1]
                                                                                    [Max 4 marks]

                                                                                                 [Total 20]



Commentary:
(i) Very well answered in general.
(ii) Well answered in general. A number of candidates failed to state both the necessary
assumptions.
(iii) Very well answered in general. Some candidates performed a full test, rather than using
the confidence interval from part (ii).
(iv) Not well answered. Many candidates failed to provide clear explanations.
(v) Well answered in general. A number of candidates used the wrong percentile of the t
distribution.
(vi) Mixed answers. Comments were often unclear.




                                                                                      [Paper Total 100]



                         END OF EXAMINERS’ REPORT




CS1A A2024                                                              © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



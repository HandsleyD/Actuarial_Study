---
normalized_id: cs1-2023-april-examiner-report-iandf-cs1a-202304-examiner-report
exam_code: CS1
year: 2023
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr23/IandF_CS1A_202304_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2023-april-examiner-report-iandf-cs1a-202304-examiner-report

EXAMINERS’ REPORT
CS1A – Actuarial Statistics
Core Principles
Paper A




                              April 2023
             CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   Introduction

   The Examiners’ Report is written by the Chief Examiner with the aim of helping
   candidates, both those who are sitting the examination for the first time and using past
   papers as a revision aid and also those who have previously failed the subject.

   The Examiners are charged by Council with examining the published syllabus. The
   Examiners have access to the Core Reading, which is designed to interpret the syllabus,
   and will generally base questions around it but are not required to examine the content of
   Core Reading specifically or exclusively.

   For numerical questions the Examiners’ preferred approach to the solution is reproduced
   in this report; other valid approaches are given appropriate credit. For essay-style
   questions, particularly the open-ended questions in the later subjects, the report may
   contain more points than the Examiners will expect from a solution that scores full marks.

   For some candidates, this may be their first attempt at answering an examination using
   open books and online. The Examiners expect all candidates to have a good level of
   knowledge and understanding of the topics and therefore candidates should not be overly
   dependent on open book materials. In our experience, candidates that spend too long
   researching answers in their materials will not be successful either because of time
   management issues or because they do not properly answer the questions.

   Many candidates rely on past exam papers and examiner reports. Great caution must be
   exercised in doing so because each exam question is unique. As with all professional
   examinations, it is insufficient to repeat points of principle, formula or other text book
   works. The examinations are designed to test “higher order” thinking including
   candidates’ ability to apply their knowledge to the facts presented in detail, synthesise and
   analyse their findings, and present conclusions or advice. Successful candidates
   concentrate on answering the questions asked rather than repeating their knowledge
   without application.

   The report is written based on the legislative and regulatory context pertaining to the date
   that the examination was set. Candidates should take into account the possibility that
   circumstances may have changed if using these reports for revision.



   Sarah Hutchinson
   Chair of the Board of Examiners
   July 2023




CS1A A2023                                                              © Institute and Faculty of Actuaries
             CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
   statistical techniques that are of particular relevance to actuarial work.

   Some of the questions in the examination paper accept alternative solutions from those
   presented in this report, or different ways in which the provided answer can be determined.
   All mathematically correct and valid alternative solutions or answers received credit as
   appropriate.

   Rounding errors were not penalised. However, candidates may have lost marks where
   excessive rounding led to significantly different answers.

   In cases where the same error was carried forward to later parts of the answer, candidates
   were given appropriate credit for the later parts.

   In questions where comments were required, valid comments that were different from those
   provided in the solutions also received full credit where appropriate.

   The paper included a number of multiple choice questions, where showing working was
   not required as part of the answer. In all multiple choice questions, the details provided in
   the answers in this report (e.g. calculations) are for information.

   In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

   Standard keyboard typing was accepted for mathematical notation.

   B. Comments on candidate performance in this diet of the examination.

   Well prepared candidates were able to score highly, however, a number of candidates
   appeared to be inadequately prepared, in terms of not having covered sufficiently the entire
   breadth of the subject.

   Candidates are encouraged to practise more on the fundamentals of mathematical calculus
   and probability. For example, mixed answers in Question 7 suggest that a number of
   candidates would benefit from additional work on the derivation of the likelihood function,
   as well as standard calculus (e.g. differentiation).

   Candidates are reminded that in questions requiring numerical answers, sufficient details
   must be shown in the calculations for achieving full marks (e.g. Question 6(ii), Question
   10(vi)).

   C. Pass Mark

   The Pass Mark for this exam was 62.
   1460 presented themselves and 746 passed.




CS1A A2023                                                              © Institute and Faculty of Actuaries
                CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   Solutions for Subject CS1A – April 2023

   Q1
   (i)
   𝑌𝑌 follows an exponential distribution with rate 𝜆𝜆                                                           [1]

   (ii)
   The Correct answer is B.                                                                                      [3]

   The two random variables 𝑋𝑋 and 𝑌𝑌 are independent, therefore the density of their sum
   can be calculated by convolution
                    ∞                                   𝑧𝑧
   𝑓𝑓𝑋𝑋+𝑌𝑌 (𝑧𝑧) = � 𝑓𝑓𝑋𝑋 (𝑧𝑧 − 𝑦𝑦)𝑓𝑓𝑌𝑌 (𝑦𝑦) 𝑑𝑑𝑑𝑑 = � 𝜆𝜆2 (𝑧𝑧 − 𝑦𝑦)𝑒𝑒 −𝜆𝜆(𝑧𝑧−𝑦𝑦) 𝜆𝜆𝑒𝑒 −𝜆𝜆𝜆𝜆 𝑑𝑑𝑑𝑑,
                   −∞                                  0
   since 𝑧𝑧 − 𝑦𝑦 ≥ 0 and 𝑦𝑦 ≥ 0.
                            𝑧𝑧
                                                 𝜆𝜆3 2 −𝜆𝜆𝜆𝜆
   𝑓𝑓𝑍𝑍 (𝑧𝑧) = 𝜆𝜆3 𝑒𝑒 −𝜆𝜆𝜆𝜆 � (𝑧𝑧 − 𝑦𝑦) 𝑑𝑑𝑑𝑑 =      𝑧𝑧 𝑒𝑒 .
                          0                       2
                                                                                                          [Total 4]

   Part (i) was very well answered. A number of candidates failed to state the
   parameter of the distribution.

   Part (ii)was generally well answered.



   Q2
   Two messages are sent in the first minute from the options:
   both from the first friend or
   both from the second friend or
   one from each friend.
                                                                                                                 [1]
   The probability is therefore:
   𝑃𝑃 = 𝑃𝑃(𝑁𝑁 𝐴𝐴 = 2, 𝑁𝑁 𝐵𝐵 = 0) + 𝑃𝑃(𝑁𝑁 𝐴𝐴 = 0, 𝑁𝑁 𝐵𝐵 = 2) + 𝑃𝑃(𝑁𝑁 𝐴𝐴 = 1, 𝑁𝑁 𝐵𝐵 = 1).                          [1]
   Hence
                32 20     30 22     31 21
   𝑃𝑃 = 𝑒𝑒 −5 � 2! 0! + 0! 2! + 1! 1! �                                                                          [1]
           25
   = 𝑒𝑒 −5 2 = 0.084                                                                                             [1]


   Alternative answer:
   NA ~ Poi(3), NB ~ Poi(2) independently
   N = NA + NB ~ Poi (5),
   by independence
   P(N = 2) = exp(-5) * 5^2 / 2!
   = 0.084
                                                                                                          [Total 4]




CS1A A2023                                                                        © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report



   Very well answered by the majority of candidates. A common error in the alternative
   answer was not mentioning independence.



   Q3
   𝑀𝑀𝑋𝑋′ (𝑡𝑡) = 4(2500)(1 − 2500𝑡𝑡)−5                                                                    [½]
   𝑀𝑀𝑋𝑋′′ (𝑡𝑡) = 20(2500)2 (1 − 2500𝑡𝑡)−6                                                                [1]
   𝐸𝐸(𝑋𝑋) = 𝑀𝑀𝑋𝑋′ (0) = 10,000                                                                           [½]
   𝐸𝐸(𝑋𝑋 2 ) = 𝑀𝑀𝑥𝑥′ ′(0) = 125,000,000                                                                  [1]

   𝑉𝑉𝑉𝑉𝑉𝑉(𝑋𝑋) = 125,000,000 − 10,0002 = 25,000,000
   𝑆𝑆𝑆𝑆(𝑋𝑋) = �𝑉𝑉𝑉𝑉𝑉𝑉(𝑋𝑋) = 5,000                                                                        [1]

   Alternative answer:
   MGFs are unique –
   this is a gamma(4,1/2500) .
   Variance(X) = 4/(1/2500)^2=25,000,000
   SD(X)=5,000
                                                                                                  [Total 4]

   Generally well answered. There were errors with the derivation of the derivatives.
   For the alternative, only a small number of candidates mentioned the uniqueness
   property.



   Q4
   (i)
   The correct answer is A.                                                                              [3]

                         9𝑆𝑆 2
   We know that 𝜎𝜎2𝑋𝑋 ∼ 𝜒𝜒92
   Hence
                                    9𝑆𝑆 2
   𝑃𝑃(𝑆𝑆𝑋𝑋2 > 1.5𝜎𝜎 2 ) = 𝑃𝑃 � 𝜎𝜎2𝑋𝑋 > 9 × 1.5� = 1 − 𝑃𝑃(𝜒𝜒92 ≤ 13.5) = 0.14

   (ii)
               16𝑆𝑆𝑌𝑌2       2
   We have               ∼ 𝜒𝜒16 .                                                                        [1]
                𝜎𝜎2
                                    16𝑆𝑆𝑌𝑌2
   𝑃𝑃(𝑆𝑆𝑌𝑌2 > 1.5𝜎𝜎 2 ) = 𝑃𝑃 �                > 16 × 1.5�                                                [1]
                                     𝜎𝜎2
              2
   = 1 − 𝑃𝑃(𝜒𝜒16 ≤ 24) = 0.09                                                                          [1]
                                                                                                 [Total 6]

   Both parts were well answered, with no particular issues.



   Q5


CS1A A2023                                                                © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   The random variable h has a discrete prior distribution. Therefore, the posterior
   distribution of h must also have a discrete distribution.

   Let X denote the number of heads obtained when the coin is tossed 15 times.
   Then 𝑋𝑋 ~ 𝐵𝐵𝐵𝐵𝐵𝐵(15, ℎ) and:                                                                          [1]

                                𝑃𝑃(ℎ=0.35 𝑎𝑎𝑎𝑎𝑎𝑎 𝑋𝑋=9)
   𝑃𝑃(ℎ = 0.35 | 𝑋𝑋 = 9) =             𝑃𝑃(𝑋𝑋=9)

                    𝑃𝑃(𝑋𝑋=9 | ℎ=0.35) 𝑃𝑃(ℎ=0.35)
   = 𝑃𝑃(𝑋𝑋=9 | ℎ=0.35) 𝑃𝑃(ℎ=0.35)+𝑃𝑃(𝑋𝑋=9 | ℎ=0.85) 𝑃𝑃(ℎ=0.85)                                           [2]

   Given 𝑋𝑋~ 𝐵𝐵𝐵𝐵𝐵𝐵(15, ℎ) , the required probabilities are:

   𝑃𝑃(𝑋𝑋 = 9 | ℎ = 0.35) = �15
                             9
                               �0.359 . 0.656 = 0.02975                                                  [1]

   𝑃𝑃(𝑋𝑋 = 9 | ℎ = 0.85) = �15
                             9
                               �0.859 . 0.156 = 0.01320                                                  [1]

   Therefore, the posterior probabilities for h are:
                                 0.02975×0.7
   𝑃𝑃(ℎ = 0.35 | 𝑋𝑋 = 9) = 0.02975×0.7+0.0132×0.3 = 0.84023                                              [1]

                                       0.0132×0.3
   𝑃𝑃(ℎ = 0.85 | 𝑋𝑋 = 9) = 0.02975×0.7+0.0132×0.3 = 0.15977                                              [1]

   Alternative answer for P(h = 0.85 | X = 9) is:
       𝑃𝑃(ℎ = 0.85 | 𝑋𝑋 = 9) = 1 − 𝑃𝑃(ℎ = 0.35 | 𝑋𝑋 = 9) = 1 − 0.84023 = 0.15977
                                                                               [Total 7]

   Many candidates answered this question well. However, a number of candidates did
   not attempt it. There were some calculation errors and some candidates did not
   present enough details in the various steps of the answer.



   Q6
   (i)
   Yes, the analyst is right.                                                                            [1]

   The distribution of 𝑋𝑋 for 𝑋𝑋 > 3 is not known, so the exact expectation of 𝑋𝑋 cannot
   be determined.                                                                                        [1]

   The expectation will be smallest if we assume that 𝑋𝑋 = 4 whenever 𝑋𝑋 > 3, that is,
   there are no families with more than 4 children. In that case we can calculate the
   expectation.                                                                                          [1]

   (ii)
   𝐸𝐸[𝑋𝑋] = 1 × 0.42 + 2 × 0.4 + 3 × 0.1 + 4 × 𝑝𝑝4 + 5 × 𝑝𝑝5 + ⋯                                         [1]
   ≥ 1 × 0.42 + 2 × 0.4 + 3 × 0.1 + 4 × (𝑝𝑝4 + 𝑝𝑝5 + ⋯ )                                                 [1]
   = 0.42 + 0.8 + 0.3 + 4 × 0.03 = 1.64                                                                  [1]



CS1A A2023                                                                © Institute and Faculty of Actuaries
                 CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   (iii)
   The correct answer is C                                                                                 [3]

   𝐸𝐸[𝑋𝑋|𝑋𝑋 > 3] = 4𝑃𝑃[𝑋𝑋 = 4|𝑋𝑋 > 3] + 5𝑃𝑃[𝑋𝑋 = 5|𝑋𝑋 > 3] + ⋯
        𝑃𝑃[𝑋𝑋=4]    𝑃𝑃[𝑋𝑋=5]           1
   = 4 𝑃𝑃[𝑋𝑋>3] + 5 𝑃𝑃[𝑋𝑋>3] + ⋯ = 𝑃𝑃[𝑋𝑋>3] (4𝑝𝑝4 + 5𝑝𝑝5 + ⋯ )

   Therefore, (4𝑝𝑝4 + 5𝑝𝑝5 + ⋯ ) = 4.5 ∗ 0.03 = 0.135.

   So, the expectation of 𝑋𝑋 is: 0.42 + 0.8 + 0.3 + 0.135 = 1.655.
                                                                                                    [Total 9]

    In part (i), the justification of the existence of a lower limit was frequently missed.

    Part (ii): in many cases candidates did not show sufficient workings to justify their
    numerical answer. A common error was ignoring the part for X > 3 in the calculation.

    Part (iii): There were mixed answers in this part.



   Q7
   (i)
   The correct answer is B.                                                                                [3]

   Likelihood:
   𝐿𝐿(𝜃𝜃) = ∏𝑖𝑖=1 𝑓𝑓(𝑌𝑌𝑖𝑖 , 𝑋𝑋𝑖𝑖 ; 𝜃𝜃)      (jointly independent)
   = ∏𝑖𝑖=1 𝑓𝑓(𝑌𝑌𝑖𝑖 |𝑋𝑋𝑖𝑖 = 𝑥𝑥𝑖𝑖 ; 𝜃𝜃) × 𝑓𝑓(𝑥𝑥𝑖𝑖 ),
                                   2                        2
   = ∏𝑛𝑛𝑖𝑖=1 √2𝜋𝜋
              1        �𝑦𝑦 −𝑥𝑥 𝜃𝜃�
                  exp�− 𝑖𝑖 𝑖𝑖
                            2
                                   �×
                                       1
                                      √2𝜋𝜋
                                                𝑥𝑥
                                           exp�− 2𝑖𝑖 �



   Therefore:
                𝑛𝑛
                                           2
               1              �𝑦𝑦 −𝑥𝑥𝑖𝑖 𝜃𝜃� +𝑥𝑥2
   𝐿𝐿(𝜃𝜃) = � 2𝜋𝜋 exp �−
                         𝑖𝑖
                                       2
                                               𝑖𝑖   �

               𝑖𝑖=1

   (ii)
   Log-likelihood:
   𝑙𝑙(𝜃𝜃) = log�𝐿𝐿(𝜃𝜃)�
                                                        2       𝑥𝑥 2
          = −𝑛𝑛log(2𝜋𝜋) − ∑�𝑦𝑦𝑖𝑖 −𝑥𝑥2 𝑖𝑖 𝜃𝜃� − ∑ 2𝑖𝑖                                                       [1]

   Taking the first derivative gives
   𝑙𝑙 ′ (𝜃𝜃) = ∑𝑥𝑥𝑖𝑖 (𝑦𝑦𝑖𝑖 − 𝑥𝑥𝑖𝑖 𝜃𝜃)                                                                   [1½]

                             ∑𝑥𝑥 𝑦𝑦
   Equating to 0 gives 𝜃𝜃� = ∑𝑥𝑥𝑖𝑖 2 𝑖𝑖                                                                 [1½]
                                             𝑖𝑖


   (iii)
   Second derivative
   𝑙𝑙 ′′ (𝜃𝜃) = − ∑𝑖𝑖 𝑋𝑋𝑖𝑖2                                                                                [1]

CS1A A2023                                                                  © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   𝐸𝐸�𝑙𝑙 ′′ (𝜃𝜃)� = − ∑𝑖𝑖 𝐸𝐸(𝑋𝑋𝑖𝑖2 ) = −𝑛𝑛,                                                            [1½]
    𝑋𝑋𝑖𝑖 identically distributed 𝑁𝑁(0,1).                                                               [½]

   Therefore 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 = 1/𝑛𝑛.                                                                            [1]

  (iv)
                                                                                   1
   The asymptotic distribution is 𝜃𝜃� ∼̇ 𝑁𝑁(𝜃𝜃, 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶) therefore 𝜃𝜃� ∼̇ 𝑁𝑁 �𝜃𝜃, 𝑛𝑛�                 [2]
                                                                                                 [Total 13]

   Parts (i)-(iii): there were mixed answers here, with many candidates failing to
   identify the correct form of the likelihood function. There were also frequent errors
   with the mathematics parts, e.g. taking the logarithm of the function and calculating
   the first and second derivatives.

   Part (iv) was well answered.



   Q8
   (i)
   Test H0: beta_1 = 0 v. H1: beta_1 ≠ 0.                                                                [1]

   Test statistic = - 0.2162 / 0.0532 = - 4.06.                                                          [1]

   p-value = 2*P(Z < - 4.06) = 2 * 0.00002 = 0.00004                                                     [1]

   We have very strong evidence against H0                                                               [1]
   and conclude that air temperature significantly affects the number of damaged
   components.                                                                                           [1]

   (ii)
   Using the parameter estimates, the linear predictor is:
   11.6630-0.2162*31 = 4.9608.                                                                           [½]

   Using the natural link for the binomial GLM we have:
   p.hat = exp(4.9608) / {1+exp(4.9608)}                                                                 [1]
   i.e. p.hat = 0.99                                                                                     [½]

   (iii)
   The expected value of the number of components that will be damaged is
   6*0.99 = 5.94.                                                                                        [1]

   (iv)(a)
   P(at least 5 not damaged) = P(at most 1 damaged)                                                      [½]
   with number damaged components following Binomial(6, 0.99).                                           [½]

   So, P(at least 5 not damaged) = P(at most 1 damaged) =
   P(0 damaged) + P(1 damaged) =
   (1-0.99)^6 + 6*0.99*(1-0.99)^5 = 5.95e-10                                                             [2]


CS1A A2023                                                                © Institute and Faculty of Actuaries
                 CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report




   (b)
   Launch is not safe when the air temperature is as cold as 31 degrees Fahrenheit                          [1]

   (v)
   This approach is not suitable                                                                          [1]
   as the analysis may give probability estimates that are greater than 1                                 [1]
                                                                                                   [Total 14]

   Part (i): Mixed answers, with common errors including incorrect p-values (often
   involving a t distribution).

   Part (ii): Most candidates calculated the value of the linear predictor. However,
   many answers did not use the logistic link function for the required probability.

   Part (iii): Generally well answered.

   Part (iv): Mixed answers, with many comments being inconsistent with earlier
   answers.

   Part (v): A number of candidates failed to give the correct justification for the
   approach not being suitable.



   Q9
   (i)
   Correct answer is D                                                                                      [3]

                                           1   𝑛𝑛0     1     𝑛𝑛2   1   𝑛𝑛3
   Likelihood function: 𝐿𝐿(𝑝𝑝) ∝ �2 𝑝𝑝� 𝑝𝑝𝑛𝑛1 �4 𝑝𝑝� �4 𝑝𝑝� (1 − 2𝑝𝑝)𝑛𝑛4
   Log-likelihood:
                                        1                            1               1
   𝑙𝑙(𝑝𝑝) = 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 + 𝑛𝑛0 log � 𝑝𝑝� + 𝑛𝑛1 log 𝑝𝑝 + 𝑛𝑛2 log � 𝑝𝑝� + 𝑛𝑛3 log � 𝑝𝑝�
                                        2                            4               4
                       + 𝑛𝑛4 log(1 − 2𝑝𝑝)
                                  1             1               1
   = 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 + 𝑛𝑛0 log � � + 𝑛𝑛2 log � � + 𝑛𝑛3 log � � + (𝑛𝑛0 + 𝑛𝑛1 + 𝑛𝑛2 + 𝑛𝑛3 ) log 𝑝𝑝
                                  2             4               4
                       + 𝑛𝑛4 log(1 − 2𝑝𝑝)
   = 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 + (𝑛𝑛0 + 𝑛𝑛1 + 𝑛𝑛2 + 𝑛𝑛3 ) log 𝑝𝑝 + 𝑛𝑛4 log(1 − 2𝑝𝑝)

   (ii)
   First derivative:
                                        1         −2
   𝑙𝑙 ′ (𝑝𝑝) = (𝑛𝑛0 + 𝑛𝑛1 + 𝑛𝑛2 + 𝑛𝑛3 ) 𝑝𝑝 + 𝑛𝑛4 1−2𝑝𝑝 = 0                                                [2½]


             𝑛𝑛 +𝑛𝑛 +𝑛𝑛 +𝑛𝑛
              0   1   2   3         𝑛𝑛−𝑛𝑛4
   𝑝𝑝̂ = 2(𝑛𝑛 +𝑛𝑛               =                                                                         [1½]
             0   1+𝑛𝑛 +𝑛𝑛 +𝑛𝑛 )
                     2   3    4      2𝑛𝑛


   where 𝑛𝑛 = 𝑛𝑛0 + 𝑛𝑛1 + 𝑛𝑛2 + 𝑛𝑛3 + 𝑛𝑛4 is the total number of policyholder in the sample


CS1A A2023                                                                   © Institute and Faculty of Actuaries
                CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report




   (iii)
   The probability for having at least one car is:
                        1      1                               1
   𝑃𝑃[𝑋𝑋 ≥ 1] = 𝑝𝑝 + 4 𝑝𝑝 + 4 𝑝𝑝 + (1 − 2𝑝𝑝) = 1 − 2 𝑝𝑝

                                                    1
   Or 𝑃𝑃[𝑋𝑋 ≥ 1] = 1 − 𝑃𝑃[𝑋𝑋 = 0] = 1 − 2 𝑝𝑝                                                            [1½]

                                         1    𝑚𝑚0          1       𝑚𝑚1
   Likelihood function: 𝐿𝐿(𝑝𝑝) ∝ �2 𝑝𝑝�             �1 − 2 𝑝𝑝�                                          [1½]

   Log-likelihood:
                     1                2−𝑝𝑝
   𝑙𝑙(𝑝𝑝) = 𝑚𝑚0 log �2 𝑝𝑝� + 𝑚𝑚1 log � 2 � + 𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶                                             [1]

   (iv)
   Correct answer is C                                                                                    [3]

   First derivative:
               1     2    1      2         1         1
   𝑙𝑙 ′ (𝑝𝑝) = 2 𝑚𝑚0 𝑝𝑝 − 2 𝑚𝑚1 2−𝑝𝑝 = 𝑚𝑚0 𝑝𝑝 − 𝑚𝑚1 2−𝑝𝑝 = 0

   (2 − 𝑝𝑝)𝑚𝑚0 − 𝑝𝑝𝑚𝑚1 = 0

   2𝑚𝑚0 = 𝑝𝑝(𝑚𝑚0 + 𝑚𝑚1 )
          2𝑚𝑚0
   𝑝𝑝̂ = 𝑚𝑚 +𝑚𝑚
          0     1


   (v)
        𝑛𝑛−𝑛𝑛       50+37+17+16      6
   𝑝𝑝̂ = 2𝑛𝑛 4 = 2(50+37+17+16+10) = 13 = 0.4615                                                          [1]

   (vi)
           2𝑚𝑚0         100        10
   𝑝𝑝̂ = 𝑚𝑚 +𝑚𝑚 = 50+37+17+16+10 = 13 = 0.769                                                             [1]
          0     1


                                                                                                  [Total 16]

   This question was answered well generally.

   In part (ii), there were various derivation errors for p_hat.



   Q10
   (i)
    𝑆𝑆𝑥𝑥𝑥𝑥 = ∑ 𝑥𝑥𝑖𝑖2 − (∑ 𝑥𝑥𝑖𝑖 )2 ⁄𝑛𝑛 = 80.309                                                            [½]

   𝑆𝑆𝑥𝑥𝑥𝑥 = ∑ 𝑥𝑥𝑖𝑖 𝑦𝑦𝑖𝑖 − (∑ 𝑥𝑥𝑖𝑖 )(∑ 𝑦𝑦𝑖𝑖 )⁄𝑛𝑛 = 36.729                                                  [½]



CS1A A2023                                                                 © Institute and Faculty of Actuaries
                       CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


         𝑆𝑆𝑥𝑥𝑥𝑥
   𝛽𝛽̂ = 𝑆𝑆 = 0.457, 𝛼𝛼� = 𝑦𝑦� − 𝛽𝛽̂ 𝑥𝑥̅ = 37.067                                                                [2]
            𝑥𝑥𝑥𝑥


   The fitted regression line is
   𝑦𝑦� = 37.067 + 0.457𝑥𝑥                                                                                        [1]

   (ii)
                                       2
   𝑆𝑆𝑦𝑦𝑦𝑦 = � 𝑦𝑦𝑖𝑖2 − �� 𝑦𝑦𝑖𝑖 � �𝑛𝑛 = 24.409

   Pearson’s correlation coefficient is:
              𝑆𝑆𝑥𝑥𝑥𝑥
   𝑟𝑟 =                    = 0.830                                                                               [1]
          �𝑆𝑆𝑥𝑥𝑥𝑥 𝑆𝑆𝑦𝑦𝑦𝑦


   (iii)
   𝐻𝐻0 : 𝜌𝜌 = 0.8 vs 𝐻𝐻1 : 𝜌𝜌 ≠ 0.8                                                                              [1]

                              1      1+𝑟𝑟
   Under 𝐻𝐻0 , 𝑊𝑊 = 2 log �1−𝑟𝑟� has (approximately) a normal distribution with mean
   1         1+𝜌𝜌                                    1
   2
       log �1−𝜌𝜌� and standard deviation                 .                                                       [1]
                                                   √𝑛𝑛−3


   With 𝑟𝑟 = 0.83, we obtain 𝑊𝑊 = 1.188 and under 𝐻𝐻0 𝑊𝑊 has a normal distribution
   with mean 1.099 and standard deviation 1⁄3                                                                    [1]

   Hence the p-value (since this is a two-sided test) is
   2𝑃𝑃(𝑊𝑊 > 1.188) = 2𝑃𝑃(𝑍𝑍 > (1.188 − 1.099)⁄(1⁄3)) = 2𝑃𝑃(𝑍𝑍 > 0.267) = 0.790                                   [1]

   We have no evidence even at 1% against the null hypothesis that 𝜌𝜌 = 0.8                                      [1]

   (iv)
             1                              1
                            2 ⁄
   𝜎𝜎� 2 = 𝑛𝑛−2 �𝑆𝑆𝑦𝑦𝑦𝑦 − 𝑆𝑆𝑥𝑥𝑥𝑥 𝑆𝑆𝑥𝑥𝑥𝑥 � = 10 (24.409 − 36.7292 ⁄80.309) = 0.761                                [1]

   Hence, s.e.�𝛽𝛽̂ � = (𝜎𝜎� 2 ⁄𝑆𝑆𝑥𝑥𝑥𝑥 )0.5 = 0.097                                                               [½]

   The 99% confidence interval for β is

   𝛽𝛽̂ ± �𝑡𝑡0.005,10 × s.e.�𝛽𝛽̂ �� = 0.457 ± 3.169 × 0.097                                                       [1]
   = (0.150, 0.764)                                                                                              [½]

   (v)
   In part (iv), the confidence interval does not contain 0 and we can conclude there is a
   linear relationship between the model and experts scores                                [1]

   The test in part (iii) concluded no evidence against 0.8 correlation between the model’s
   scores and experts’ scores                                                             [½]

   The two results are consistent                                                                                [½]

   (vi)

CS1A A2023                                                                        © Institute and Faculty of Actuaries
                 CS1A – Actuarial Statistics – Core Principles – April 2023 - Examiners’ report


   Since all model scores are unique and separately all experts scores are also unique,
   the Spearman’s rank correlation coefficient can be calculated as:
                 6 ∑ 𝑑𝑑2
   𝑟𝑟𝑠𝑠 = 1 − 𝑛𝑛(𝑛𝑛2𝑖𝑖 −1)
                        𝑖𝑖
                           , where 𝑑𝑑𝑖𝑖 = rank(𝑥𝑥𝑖𝑖 ) − rank(𝑦𝑦𝑖𝑖 )                                           [1]


      rank(𝑥𝑥𝑖𝑖 ) 4        2    7    3    9       1    11      5      8    6      10     12

      rank(𝑦𝑦𝑖𝑖 ) 8        4    7    2    10      3    9       1      11 5        6      12

         𝑑𝑑𝑖𝑖       -4     -2   0    1    -1      -2 2         4      -3   1      4      0

         𝑑𝑑𝑖𝑖2      16     4    0    1    1       4    4       16     9    1      16     0

                                                                                                              [4]

   𝑟𝑟𝑠𝑠 = 0.748                                                                                               [1]

   (vii)
   The Spearman correlation seems slightly lower than the Pearson’s correlation                               [1]
   but the model’s alignment with the experts’ opinion is good                                                [1]

   Alternative comment:
   Both measures are high and positive, suggesting strong alignment
                                                                                                     [Total 23]

 The question was answered well overall.

 In part (iii), a common error was calculating the p-value incorrectly, often using a one-
 sided test.
 The comments in parts (v) and (vii) were unclear in many cases.

 In part (vi) many candidates did not show sufficient details in their calculations.

                                                                                             [Paper Total 100]

                           END OF EXAMINERS’ REPORT




CS1A A2023                                                                     © Institute and Faculty of Actuaries
Beijing
14F China World Office 1 · 1 Jianwai Avenue · Beijing · China 100004
Tel: +86 (10) 6535 0248

Edinburgh
Level 2 · Exchange Crescent · 7 Conference Square · Edinburgh · EH3 8RA
Tel: +44 (0) 131 240 1300

Hong Kong
1803 Tower One · Lippo Centre · 89 Queensway · Hong Kong
Tel: +852 2147 9418

London (registered office)
7th Floor · Holborn Gate · 326-330 High Holborn · London · WC1V 7PP
Tel: +44 (0) 20 7632 2100

Oxford
1st Floor · Belsyre Court · 57 Woodstock Road · Oxford · OX2 6HJ
Tel: +44 (0) 1865 268 200

Singapore
5 Shenton Way · UIC Building · #10-01 · Singapore 068808
Tel: +65 8778 1784




www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


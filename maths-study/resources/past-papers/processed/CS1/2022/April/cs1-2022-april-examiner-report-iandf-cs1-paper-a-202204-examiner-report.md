---
normalized_id: cs1-2022-april-examiner-report-iandf-cs1-paper-a-202204-examiner-report
exam_code: CS1
year: 2022
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Apr22/IandF_CS1_Paper A_202204_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2022-april-examiner-report-iandf-cs1-paper-a-202204-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT


                                         April 2022

                   Subject CS1A – Actuarial Statistics
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
particularly the open-ended questions in the Specialist Advanced (SA) and Specialist
Principles (SP) subjects, the report may contain more points than the Examiners will expect
from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
July 2022


CS1A A2022                                                        © Institute and Faculty of Actuaries
             CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


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
   not required as part of the answer. In all multiple choice questions, the details provided in
   the answers below (e.g. calculations) are for information.

   In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

   Standard keyboard typing was accepted for mathematical notation.


   B. Comments on candidate performance in this diet of the examination.

   Performance was generally satisfactory, with many candidates showing good
   understanding of the topics in this subject. Well prepared candidates were able to achieve
   high scores.

   A smaller number of candidates appeared to be inadequately prepared, in terms of not
   having covered sufficiently the entire breadth of the subject.

   Candidates scored lower in questions with unusual style (e.g. Question 4) despite the
   tested topics being standard basic statistical concepts from the CS1 Core Reading. This
   highlights the need for candidates to cover the whole syllabus when they revise for the
   exam and not rely heavily on questions appearing in recent papers.

   Candidates are encouraged to practise more on the fundamentals of mathematical calculus
   and probability. For example, mixed answers in Question 3 suggest that a number of
   candidates would benefit from additional work on joint and conditional probability, as
   well as standard integration.




CS1A A2022                                                              © Institute and Faculty of Actuaries
                  CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


       There was an error in multiple choice Question 8 of the paper, where the value of ∑𝑡𝑡𝑖𝑖 =
       60 was not specified in the question. As a result, the term “60” appeared as part of the
       given answers, instead of ∑𝑡𝑡𝑖𝑖 . As this appeared identically in all four possible answers, it
       did not distinguish any of the given answers. The error was taken into account when
       marking the question, with the Examiners applying flexibility in awarding full credit
       where appropriate.


       C. Pass Mark

       The Pass Mark for this exam was 59.
       1311 presented themselves and 579 passed.




Solutions for Subject CS1A – April 2022

Q1
Firstly, to calculate 𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌) the following result is required:
𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌) = 𝑉𝑉𝑉𝑉𝑉𝑉[𝐸𝐸(𝑌𝑌 | 𝑋𝑋)] + 𝐸𝐸[𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌 | 𝑋𝑋)]                                                      [½]

which gives:
𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌) = 𝑉𝑉𝑉𝑉𝑉𝑉(3𝑋𝑋 + 11) + 𝐸𝐸(𝑋𝑋 + 9)
= 32 𝑉𝑉𝑉𝑉𝑉𝑉(𝑋𝑋) + 𝐸𝐸(𝑋𝑋) + 9.                                                                               [1]

Using the information in the question, 𝑋𝑋~𝑃𝑃𝑃𝑃𝑃𝑃(25), 𝐸𝐸(𝑋𝑋) = 25 and 𝑉𝑉𝑉𝑉𝑉𝑉(𝑋𝑋) = 25 .                     [½]

Therefore:
𝑉𝑉𝑉𝑉𝑉𝑉(𝑌𝑌) = 32 × 25 + 25 + 9
= 225 + 34
= 259                                                                                                     [1]
                                                                                                     [Total 3]

 The question was very well answered.



Q2
(i)
𝑁𝑁(1)~Poisson(𝑚𝑚) , i.e. Poisson (2).                                                                       [1]

(ii)
𝑃𝑃(𝑁𝑁(2) > 7|𝑁𝑁(1) = 5) = 𝑃𝑃(𝑁𝑁(2) − 𝑁𝑁(1) > 2) = 𝑃𝑃(𝑁𝑁(1) > 2)                                             [1]
                   = 1 − 𝑃𝑃(𝑁𝑁(1) ≤ 2) = 1 − 0.67668 = 0.323                                                [1]

(iii)
𝑃𝑃(𝑁𝑁(2) > 2|𝑁𝑁(1) = 0) = 𝑃𝑃(𝑁𝑁(1) > 2) = 0.323                                                             [1]

(iv)


CS1A A2022                                                                   © Institute and Faculty of Actuaries
                     CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


Both probabilities are the same as a direct consequence of the Poisson process i.e. the number
of events in the time interval (s, t] is independent of the number of events up to time s. [1]

(v)
The time to the nth event in a Poisson process with rate λ is the sum of n individual
inter-event times.                                                                                                        [½]
Since the inter-event time is an Exp(𝑚𝑚) random variable,                                                                 [½]
the distribution of interest is Gamma(𝑛𝑛, m).                                                                             [1]

(vi)
The CDF of an exponential distribution is given by 𝐹𝐹(𝑥𝑥) = 1 − 𝑒𝑒 −𝑚𝑚𝑚𝑚 .
The random number can be generated by solving for 𝑥𝑥 the equation 𝐹𝐹(𝑥𝑥) = 𝑢𝑢.                                         [1]
This gives 𝑥𝑥 = − log(1 − 𝑢𝑢)/ 𝑚𝑚 i.e. 𝑥𝑥 =0.1121972.                                                                   [1]
                                                                                                                   [Total 9]

 Candidates did not perform well in this question.

 In part (iv), alternative answers mentioning the memory-less property of Poisson process
 were given credit as appropriate

 In part (v), only a small number of candidates identified correctly the Gamma(n, m)
 distribution.

 Part (vi) was answered well by the majority of candidates..



Q3
(i)
Answer: D                                                                                                                 [1]
              ∞                          ∞                                           ∞
𝑓𝑓𝑋𝑋 (𝑥𝑥) = � 𝑓𝑓𝑋𝑋𝑋𝑋 (𝑥𝑥, 𝑦𝑦) 𝑑𝑑𝑑𝑑 = � 6𝑒𝑒 −(2𝑥𝑥+3𝑦𝑦) 𝑑𝑑𝑑𝑑 = 6𝑒𝑒 −2𝑥𝑥 � 𝑒𝑒 −3𝑦𝑦 𝑑𝑑𝑑𝑑
             0                          0                                           0
                          ∞
      −2𝑥𝑥
              𝑒𝑒 −3𝑦𝑦
= 6𝑒𝑒      �−         � = 2𝑒𝑒 −2𝑥𝑥 .
                 3 0

Therefore,
                −2𝑥𝑥
𝑓𝑓𝑋𝑋 (𝑥𝑥) = �2𝑒𝑒 ,               𝑥𝑥 ≥ 0
             0                otherwise.

(ii)
Answer: C                                                                                                                 [1]
                 ∞
𝑓𝑓𝑌𝑌 (𝑦𝑦) = � 𝑓𝑓𝑋𝑋𝑋𝑋 (𝑥𝑥, 𝑦𝑦) 𝑑𝑑𝑑𝑑
             0
     ∞                                        ∞                                          ∞
           −(2𝑥𝑥+3𝑦𝑦)                 −3𝑦𝑦          −2𝑥𝑥                −3𝑦𝑦
                                                                                  𝑒𝑒 −2𝑥𝑥
= � 6𝑒𝑒                  𝑑𝑑𝑑𝑑 = 6𝑒𝑒          � 𝑒𝑒          𝑑𝑑𝑑𝑑 = 6𝑒𝑒          �−         � = 3𝑒𝑒 −3𝑦𝑦 .
    0                                        0                                       2 0




CS1A A2022                                                                                 © Institute and Faculty of Actuaries
                   CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


Therefore,
                   −3𝑦𝑦
𝑓𝑓𝑌𝑌 (𝑦𝑦) = �3𝑒𝑒          ,          𝑦𝑦 ≥ 0
             0                    otherwise.

(iii)
𝑓𝑓𝑋𝑋𝑋𝑋 (𝑥𝑥, 𝑦𝑦) = 𝑓𝑓𝑋𝑋 (𝑥𝑥) × 𝑓𝑓𝑌𝑌 (𝑦𝑦) for all 𝑥𝑥 and 𝑦𝑦.                                                   [½]
Therefore, 𝑋𝑋 and 𝑌𝑌 are independent.                                                                        [½]

(iv)
Since 𝑋𝑋 and 𝑌𝑌 are independent, 𝐸𝐸[𝑌𝑌|𝑋𝑋 > 2] = 𝐸𝐸[𝑌𝑌].                                                     [1]
                                           1
𝑌𝑌~Exp(3). Therefore 𝐸𝐸[𝑌𝑌|𝑋𝑋 > 2] = 3.                                                                      [1]

(v)
Answer: B                                                                                                    [2]
                     ∞            ∞                          ∞        ∞
𝑃𝑃(𝑋𝑋 > 𝑌𝑌) = � � 6𝑒𝑒 −(2𝑥𝑥+3𝑦𝑦) 𝑑𝑑𝑑𝑑 𝑑𝑑𝑑𝑑 = � 6𝑒𝑒 −3𝑦𝑦 �� 𝑒𝑒 −2𝑥𝑥 𝑑𝑑𝑑𝑑� 𝑑𝑑𝑑𝑑
                    0          𝑦𝑦                            0       𝑦𝑦
      ∞                       −2𝑥𝑥 ∞           ∞
                        𝑒𝑒                                       3
= � 6𝑒𝑒 −3𝑦𝑦 �−                   � 𝑑𝑑𝑑𝑑 = � 3𝑒𝑒 −5𝑦𝑦 𝑑𝑑𝑑𝑑 =
    0                         2       𝑦𝑦       0                 5
                                                                                                      [Total 7]

  Performance in this question was mixed. Candidates are recommended to practice the
  mechanics of integration.



Q4
(i)(a)
A random sample is made up of independent                                                                    [½]
and identically distributed random variables,                                                                [½]
typically denoted as 𝑋𝑋1 , … , 𝑋𝑋𝑛𝑛 .

(i)(b)
A statistic is a function of random variables.                                               [1]
It will be a random variable itself and will have a distribution, its sampling distribution. [½]
A statistic does not involve any unknown parameters.                                         [½]

(ii)(a)
A suitable population in this case is the set of all voters.                                                 [1]

In terms of the random variable 𝑋𝑋 it will consist of a series of 1s and 0s depending on
whether an individual voter would or would not support the new party.

The parameter of interest is 𝑝𝑝, representing the proportion of 1s in the population,                        [1]
i.e. the proportion of voters in the population that support the party.

(ii)(b)
𝑌𝑌 is the number of voters who would support the party.


CS1A A2022                                                                    © Institute and Faculty of Actuaries
                        CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


Since the sample is random, therefore each observation is independent, 𝑝𝑝 is constant and the
responses are either success (1) or failure (0), then                                           [1]
𝑌𝑌 will have a binomial distribution with 𝑛𝑛 = 50 and parameter 𝑝𝑝 , i.e. 𝑌𝑌~𝐵𝐵𝐵𝐵𝐵𝐵(50 , 𝑝𝑝).  [1]
                                                                                           [Total 7]

  A number of candidates found the question challenging.

  The question examines basic statistical concepts from the CS1 Core Reading.
  In part (ii)(b), alternative answers referring to the sum of n independent Bernoulli trials
  received credit as appropriate.



Q5
(i)
𝑌𝑌𝑖𝑖 are independent random variables with only two outcomes.                                                     [½]
The two outcomes are 0 and 1 with 1 having a “success” probability of
𝑝𝑝 = 1 − 𝑒𝑒 −𝑚𝑚 .                                                                                                 [½]

This is the definition of the Bernoulli(p) distribution.

(ii)
Answer: C                                                                                                         [2]

The likelihood function, in terms of 𝑦𝑦𝑖𝑖 , i =1, 2, …, n, is given as
                𝑛𝑛                       𝑛𝑛

𝐿𝐿(𝑚𝑚) = � 𝑃𝑃(𝑌𝑌𝑖𝑖 = 𝑦𝑦𝑖𝑖 ) = �(1 − 𝑒𝑒 −𝑚𝑚 )𝑦𝑦𝑖𝑖 (𝑒𝑒 −𝑚𝑚 )1−𝑦𝑦𝑖𝑖
               𝑖𝑖=1                     𝑖𝑖=1
                                    = (1 − 𝑒𝑒 −𝑚𝑚 )∑ 𝑦𝑦𝑖𝑖 (𝑒𝑒 −𝑚𝑚 )𝑛𝑛−∑ 𝑦𝑦𝑖𝑖
                                    = (1 − 𝑒𝑒 −𝑚𝑚 )𝑛𝑛𝑦𝑦� (𝑒𝑒 −𝑚𝑚 )𝑛𝑛−𝑛𝑛𝑦𝑦�

(iii)
Taking logarithms we have:

𝑙𝑙(𝑚𝑚) = ∑ 𝑦𝑦𝑖𝑖 log(1 − 𝑒𝑒 −𝑚𝑚 ) − 𝑚𝑚(𝑛𝑛 − ∑ 𝑦𝑦𝑖𝑖 )                                                               [1]

and
𝑑𝑑𝑑𝑑      𝑒𝑒 −𝑚𝑚 ∑ 𝑦𝑦
𝑑𝑑𝑑𝑑
     = 1−𝑒𝑒 −𝑚𝑚 𝑖𝑖 − 𝑛𝑛 + ∑ 𝑦𝑦𝑖𝑖                                                                                  [1]

The MLE, in terms of 𝑦𝑦𝑖𝑖 , will be given by
𝑑𝑑𝑑𝑑
𝑑𝑑𝑑𝑑
       = 0 ⇒ 𝑒𝑒 −𝑚𝑚� ∑ 𝑦𝑦𝑖𝑖 − 𝑛𝑛�1 − 𝑒𝑒 −𝑚𝑚� � + ∑ 𝑦𝑦𝑖𝑖 �1 − 𝑒𝑒 −𝑚𝑚� � = 0                                        [1]

=> 𝑒𝑒 −𝑚𝑚� = 1 − 𝑦𝑦� ⇒ 𝑚𝑚
                       � = −log (1 − 𝑦𝑦�)                                                                         [1]
            ∑ 𝑦𝑦𝑖𝑖
where 𝑦𝑦� = 𝑛𝑛 .

(iv)



CS1A A2022                                                                         © Institute and Faculty of Actuaries
                         CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


The second derivative of 𝐿𝐿 evaluated at 𝑚𝑚
                                         � must be strictly negative, that is
 𝜕𝜕2
           � , 𝑦𝑦1 , … , 𝑦𝑦𝑛𝑛 ) < 0
        𝐿𝐿(𝑚𝑚                                                                                                    [1]
𝜕𝜕𝑚𝑚2
                                                                                                            [Total 8]

  Candidates generally answered this question well.

  In part (iv) alternative answers in terms of the log likelihood were given credit as
  appropriate.



Q6
(i)
Answer: D                                                                                                          [2]

The likelihood of the model is given by
             𝑛𝑛                    𝑛𝑛                    𝑛𝑛
                                         𝛽𝛽 𝛼𝛼   𝑛𝑛 𝛼𝛼𝛼𝛼
                                                                1
𝐿𝐿(𝛼𝛼, 𝛽𝛽) = � 𝑓𝑓(𝑥𝑥𝑖𝑖 , 𝛼𝛼, 𝛽𝛽) = � 𝛼𝛼 𝛼𝛼+1 = 𝛼𝛼 𝛽𝛽 � 𝛼𝛼+1 .
                                       𝑥𝑥𝑖𝑖                 𝑥𝑥𝑖𝑖
                      𝑖𝑖=1                  𝑖𝑖=1                      𝑖𝑖=1

Taking the log leads to
                                                                             𝑛𝑛

log 𝐿𝐿(𝛼𝛼, 𝛽𝛽) = 𝑙𝑙(𝛼𝛼, 𝛽𝛽) = 𝑛𝑛 log 𝛼𝛼 + 𝑛𝑛𝑛𝑛 log 𝛽𝛽 − (𝛼𝛼 + 1) � log 𝑥𝑥𝑖𝑖 .
                                                                         𝑖𝑖=1

(ii)
Differentiating the log-likelihood with respect to 𝛼𝛼 gives

𝜕𝜕𝜕𝜕(𝛼𝛼,𝛽𝛽)      𝑛𝑛
   𝜕𝜕𝜕𝜕
              = 𝛼𝛼 + 𝑛𝑛 log 𝛽𝛽 − ∑𝑛𝑛𝑖𝑖=1 log 𝑥𝑥𝑖𝑖 .                                                                [1]

Hence the MLE of 𝛼𝛼 is
                       𝑛𝑛
𝛼𝛼� = −𝑛𝑛 log 𝛽𝛽+∑𝑛𝑛 log 𝑥𝑥 .                                                                                      [1]
                             𝑖𝑖=1   𝑖𝑖




(iii)
The PDF increases as 𝛽𝛽 increases.                                                                                 [½]
Also, the support of the PDF (i.e. {𝑥𝑥: 𝑥𝑥 ≥ 𝛽𝛽}) moves to the right.                                              [½]

(iv)
The increase in the PDF when 𝛽𝛽 increases implies that the likelihood is higher for higher
values of 𝛽𝛽. This means that the likelihood is maximised for the highest value of 𝛽𝛽. Since
𝛽𝛽 ≤ 𝑥𝑥𝑖𝑖 for all 𝑖𝑖,                                                                        [1]
the MLE of 𝛽𝛽 is the smallest value of 𝑥𝑥𝑖𝑖 .                                                [1]

(v)
              log 𝑥𝑥𝑖𝑖
meanlog = ∑10
           𝑖𝑖          = 9.508.                                                                                    [1]
                𝑛𝑛




CS1A A2022                                                                          © Institute and Faculty of Actuaries
                  CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report



              1
sdlog = �𝑛𝑛−1 ∑𝑛𝑛𝑖𝑖=1(log 𝑥𝑥𝑖𝑖 − meanlog)2 = 0.476                                                          [1]

(vi)
𝛽𝛽̂ is the smallest value of 𝑥𝑥𝑖𝑖 : 𝛽𝛽̂ = 5000                                                              [1]
                  10
𝛼𝛼� = −10×log 5000+ ∑10 log 𝑥𝑥 = 1.009                                                                      [1]
                        𝑖𝑖=1    𝑖𝑖
                                                                                                    [Total 11]

 Candidates generally answered this question well.

 In part (iv) many candidates failed to determine the MLE of beta. Credit was given for
 partial answers referring to standard MLE methods not working here.




Q7
(i)
Using the properties of the exponential family, the derivative w.r.t. 𝜃𝜃 of the 𝑏𝑏(𝜃𝜃) function
gives the mean:

Mean = 𝑏𝑏 ′ (𝜃𝜃)                                                                                            [½]
= − 1⁄𝜃𝜃 i.e. 𝑏𝑏 ′ (𝜃𝜃) = 𝜇𝜇.                                                                               [½]

The second derivative w.r.t. 𝜃𝜃 of the 𝑏𝑏(𝜃𝜃) function multiplied by the 𝑎𝑎(𝜙𝜙) function gives the
variance:

Variance = 𝑏𝑏 ′′ (𝜃𝜃)𝑎𝑎(𝜙𝜙)                                                                                 [½]
= (1⁄𝜃𝜃 2 )(𝜎𝜎 2 ⁄𝜇𝜇 2 )                                                                                    [1]
= 𝜇𝜇 2 × 𝜎𝜎 2 ⁄𝜇𝜇 2 = 𝜎𝜎 2 .                                                                                [½]


(ii)
The gamma distribution is more suitable because claim sizes are always positive                             [1]
and their distribution is usually non-symmetrical.                                                          [1]

(iii)
The model output suggests that:

parameter estimate > 2*(standard error) since 0.06084 > 2*0.00296 = 0.00592.                                [1]

We conclude that the covariate operational time is significant.                                             [1]

(iv)
The variable “legal representation” is a factor that takes a categorical value (yes/no),                    [1]
while the operational time is a continuous covariate (or a variable taking a numerical
value).                                                                                                     [1]


CS1A A2022                                                                   © Institute and Faculty of Actuaries
                CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report




(v)
The deviance improved significantly when using the legal representation as a second
covariate.                                                                                                [1]

Therefore, legal representation is a significant covariate of the claim sizes and Model 2 is
preferred.                                                                                   [1]
                                                                                     [Total 11]

 Most candidates answered well this question.

 In part (ii) many candidates failed to make the point of the suitability of the Gamma
 distribution due to claim sizes being positive.

 In part (v) stating a significant change in the deviance is important for receiving full
 marks.

 Also in part (v), correct answers included reference to the p-value or the appropriate
 quantile involving the 𝜒𝜒 2 statistic and 𝜒𝜒 2 distribution with 1 degree of freedom.



Q8
(i)
Answer: A                                                                                                 [1]

𝐿𝐿(𝜆𝜆|𝑇𝑇) = 𝜆𝜆𝑛𝑛 exp (−𝜆𝜆∑𝑡𝑡𝑖𝑖 ) where 𝑡𝑡𝑖𝑖 are the observed times between the arrival of two lorries.

(ii)
Density of gamma distribution with parameters 𝛼𝛼 and 𝛽𝛽: 𝑓𝑓(𝜆𝜆) = 𝐶𝐶𝜆𝜆𝛼𝛼−1 𝑒𝑒 −𝛽𝛽𝛽𝛽                       [1]

Posterior distribution:
𝑓𝑓(𝜆𝜆|𝑇𝑇) ∝ 𝑓𝑓(𝜆𝜆)𝐿𝐿(𝜆𝜆|𝑇𝑇)
∝ 𝜆𝜆𝛼𝛼−1 𝑒𝑒 −𝛽𝛽𝛽𝛽 𝜆𝜆𝑛𝑛 exp(−𝜆𝜆∑𝑡𝑡𝑖𝑖 )                                                                     [1]
= 𝜆𝜆𝛼𝛼+𝑛𝑛−1 exp [−𝜆𝜆(𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 )] .                                                                      [1]

We recognise this as the density function of a gamma distribution
with parameters 𝛼𝛼 + 𝑛𝑛 and 𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 .                                                                  [1]

(iii)
Under quadratic loss, the Bayesian estimator is the mean of the posterior distribution.                   [1]
                             𝛼𝛼+20
In this case the mean is 𝛽𝛽+∑𝑡𝑡 .                                                                         [1]
                                   𝑖𝑖


(iv)
Under all-or-nothing loss, the Bayesian estimator is the mode of the posterior                [1]
To find the mode we need to maximise the density.                                             [1]
To maximise the density, we need to differentiate the density or log-density w.r.t 𝜆𝜆, set this
expression to zero and solve for 𝜆𝜆.                                                          [1]


CS1A A2022                                                                 © Institute and Faculty of Actuaries
                       CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report




(v)
Answer: B                                                                                                        [2]

𝑓𝑓 ′ (𝜆𝜆|𝑇𝑇) = (𝛼𝛼 + 𝑛𝑛 − 1)𝜆𝜆𝛼𝛼+𝑛𝑛−2 exp[−𝜆𝜆(𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 )]
                   + 𝜆𝜆𝛼𝛼+𝑛𝑛−1 exp[−𝜆𝜆(𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 )]�−(𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 )� = 0

(𝛼𝛼 + 𝑛𝑛 − 1) − 𝜆𝜆(𝛽𝛽 + ∑𝑡𝑡𝑖𝑖 ) = 0

                                𝛼𝛼+𝑛𝑛−1
Solve for 𝜆𝜆: 𝜆𝜆 = 𝛽𝛽+∑𝑡𝑡 .
                                       𝑖𝑖
                                                        𝛼𝛼+19
And for the given sample we obtain: 𝜆𝜆 = 𝛽𝛽+60

(vi)
For fixed n=20, the estimator in part (iii) will give a higher value than that in part (v) as the
numerator is bigger. The difference will be affected by the denominator.                        [1]
                                                                                         [Total 13]

 Candidates answered well this question.

 In part (iv) candidates who quoted the mode of the gamma distribution received credit as
 appropriate.

 For part (v) see also the comment in Section B, regarding ∑𝑡𝑡𝑖𝑖 = 60 not being specified in
 the question. In part (vi) alternative answers were given credit, including answers
 mentioning that the two estimators will give almost identical estimated value for large
 sample size n.



Q9
(i)
As it stands the model cannot be used for inference.                                                             [1]
We need further assumptions:                                                                                     [½]
the errors 𝑒𝑒𝑖𝑖 are independent                                                                                  [½]
and 𝑒𝑒𝑖𝑖 ~𝑁𝑁(0, 𝜎𝜎 2 ).                                                                                          [1]

(ii)
We have 𝑆𝑆𝑦𝑦𝑦𝑦 = 𝑆𝑆𝑆𝑆𝑇𝑇𝑇𝑇𝑇𝑇                                                                                      [1]
       2
     𝑆𝑆𝑥𝑥𝑥𝑥
and 𝑆𝑆        = 𝑆𝑆𝑆𝑆𝑅𝑅𝑅𝑅𝑅𝑅                                                                                       [1]
      𝑥𝑥𝑥𝑥

                     2
                   𝑆𝑆𝑥𝑥𝑥𝑥            𝑆𝑆𝑆𝑆
So, 𝑅𝑅 2 = 𝑆𝑆                   = 𝑆𝑆𝑆𝑆 𝑅𝑅𝑅𝑅𝑅𝑅                                                                    [1]
                  𝑥𝑥𝑥𝑥 𝑆𝑆𝑦𝑦𝑦𝑦           𝑇𝑇𝑇𝑇𝑇𝑇



This verifies that R2 gives the proportion of the total variability of Y “explained” by the linear
regression.




CS1A A2022                                                                        © Institute and Faculty of Actuaries
              CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


(iii)
Possible approaches:
Use 𝑅𝑅 2                                                                                                [1]
Use adjusted 𝑅𝑅 2                                                                                       [1]
Plot residuals against fitted values (or explanatory variables)                                         [1]

(iv)
𝑅𝑅 2 cannot be used                                                                                     [1]
Although increased values show a better fit of the model,                                               [1]
it cannot decrease as more explanatory variables are added to the model.                                [1]

So, we do not have a “stopping rule” for the process.

(v)
The adjusted 𝑅𝑅 2 should be used as a criterion.                                                        [1]

So, the model maximising the adjusted 𝑅𝑅 2 has explanatory variables X1 + X4 + X3 .     [1]
                                                                                  [Total 14]

 Candidates answered well this question.

 A common error in part (i) was the omission of the assumptions required for the error
 terms.

 A number of alternative answers received credit, including the following:
 Part (i):answers worded in terms of the model being suitable for inference, provided that
 the assumptions are satisfied.
 Part (iii): answers mentioning QQ-plot for residuals.
 Part (iv):answers mentioning that 𝑅𝑅 2 does not take into account the number of
 covariates/complexity of the model.



Q10
(i)
There appears to exist a strong, linear relationship between annual family income and length
of stay.                                                                                  [1]
The length of stay decreases with the Annual family income (negative association).        [½]

At some point this relationship cannot hold since length of stay is positive and annual family
income is not bounded above.                                                               [½]

(ii)
Start by calculating the sum of squares
                         82,5002
𝑆𝑆𝑎𝑎𝑎𝑎 = 523,750,000 −             = 70,000,000                                                         [½]
                            15

                  82,500∗107
𝑆𝑆𝑎𝑎𝑎𝑎 = 510,500 −     15
                                 = −78,000                                                              [½]
        𝑆𝑆
𝛽𝛽̂ = 𝑎𝑎𝑎𝑎 = −0.001                                                                                     [½]
     𝑆𝑆𝑎𝑎𝑎𝑎



CS1A A2022                                                               © Institute and Faculty of Actuaries
                      CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report



                       107         82500
𝛼𝛼� = 𝑙𝑙 ̅ − 𝛽𝛽̂ 𝑎𝑎� = 15 + 0.001 ∗ 15 = 12.63                                                                   [½]

Hence, the fitted regression equation of 𝑙𝑙 on 𝑎𝑎 is:
𝑙𝑙̂ = 12.63 − 0.001𝑎𝑎                                                                                            [1]

(iii)
𝐻𝐻0 ∶ 𝛽𝛽 = 0           𝑣𝑣𝑣𝑣      𝐻𝐻1 ∶ 𝛽𝛽 ≠ 0                                                                    [½]
                           1072
𝑆𝑆𝑆𝑆𝑇𝑇𝑇𝑇𝑇𝑇 = 871 − 15 = 107.733                                                                                  [½]
                   78,0002
𝑆𝑆𝑆𝑆𝑅𝑅𝑅𝑅𝑅𝑅 = 70,000,000 = 86.914                                                                                 [½]
                                     78,0002
𝑆𝑆𝑆𝑆𝑅𝑅𝑅𝑅𝑅𝑅 = 107.733 − 70,000,000 = 20.819                                                                       [½]

Under 𝐻𝐻0 ∶ 𝛽𝛽 = 0, we have:
      𝑆𝑆𝑆𝑆𝑅𝑅𝑅𝑅𝑅𝑅

𝐹𝐹 = 𝑆𝑆𝑆𝑆𝑅𝑅𝑅𝑅𝑅𝑅
         1
                = 54.27                  on (1,13) degrees of freedom                                            [1]
         13


This is a significant result which exceeds the 0.01 critical value of 𝐹𝐹1,13 = 9.074. So, there
is sufficient evidence at the 0.01 level to reject 𝐻𝐻0 in favour of 𝛽𝛽 ≠ 0.                  [1]

(iv)
Correlation coefficient 𝜌𝜌
                   𝑆𝑆𝑎𝑎𝑎𝑎
𝜌𝜌(𝐴𝐴, 𝐿𝐿) =                 1
             (𝑆𝑆𝑎𝑎𝑎𝑎 𝑆𝑆𝑙𝑙𝑙𝑙 ) �2
                         −78000
           =                                    = −0.898                                                         [1]
                   �(70,000,000∗107.733)


(v)
Hypotheses:
𝐻𝐻0 ∶ 𝜌𝜌 = −0.8               𝑣𝑣𝑣𝑣   𝐻𝐻1 ∶ 𝜌𝜌 ≠ −0.8                                                             [½]
                                                           1
Under 𝐻𝐻0 , the test statistic 𝑍𝑍𝑟𝑟 has a 𝑁𝑁(𝑍𝑍𝜌𝜌 ,            ) distribution, where:
                                                           √12
       1           1−0.8
𝑍𝑍𝜌𝜌 = 2 𝑙𝑙𝑙𝑙𝑙𝑙 1+0.8 = −1.098612 ≈ −1.099.                                                                      [½]

The observed value of this statistic is:
       1        1−0.898
𝑍𝑍𝑟𝑟 = 2 𝑙𝑙𝑙𝑙𝑙𝑙 1+0.898 = −1.461792 ≈ −1.462.                                                                    [½]

                                                                 −1.462+1.099
These correspond to a value of the test statistic:                     1
                                                                                = −1.257                         [1]
                                                                      �
                                                                       12
which under the null hypothesis should be a value from the 𝑁𝑁(0,1) distribution.                                 [½]

The absolute value is less than 1.96, the upper 2.5% point of the standard normal
distribution.                                                                                                    [1]




CS1A A2022                                                                        © Institute and Faculty of Actuaries
                   CS1A – Actuarial Statistics – Core Principles - April 2022 - Examiners’ report


So, there is insufficient evidence to reject 𝐻𝐻0 at the 5% level, i.e. the data do not provide
enough evidence to conclude that the correlation parameter is different from −0.8.             [1]

(vi)
Answer: B                                                                                                    [2]

95% confidence interval
                  1
𝑍𝑍𝑟𝑟 ± 𝑍𝑍𝛼𝛼 ∗ �       �
         2     √𝑛𝑛 − 3
Then:
                        1
−1.462 ± 1.96 ∗ �             �
                      √15 − 3

−1.462 ± 0.566
𝑍𝑍𝑟𝑟 ∈ [−2.0278, −0.8962]

Given that:
1 1 + 𝑟𝑟
   𝑙𝑙𝑙𝑙         = 𝑍𝑍𝑟𝑟
2 1 − 𝑟𝑟
          2𝑍𝑍𝑟𝑟
        𝑒𝑒 − 1
𝑟𝑟 =
        1 + 𝑒𝑒 2𝑍𝑍𝑟𝑟

Converting these limits which are values of 𝑍𝑍𝑟𝑟 into values of 𝑟𝑟 gives:
𝑍𝑍𝑟𝑟 = −2.0278 then 𝑟𝑟 = −0.966
𝑍𝑍𝑟𝑟 = −0.8962 then 𝑟𝑟 = −0.714

Therefore, the 95% confidence interval for 𝜌𝜌 is [−0.966, −0.714].
                                                                                                     [Total 17]

  Candidates overall answered well this question.

  In Part (iii) an ANOVA test is required; a small number of candidates attempted different
  tests and received partial credit where appropriate. Part (vi) was answered correctly by
  candidates who seemed to be well prepared.

  A number of alternative answers received credit, including the following:
  Part (ii) and throughout the question: work using a higher number of decimal places
  resulting in answers of varying accuracy – these received full credit where appropriate.
  Part (v): answers using the inverse hyperbolic tangent function and/or referring to the p-
  value of the test.

                                                                                           [Paper Total 100]

                            END OF EXAMINERS’ REPORT




CS1A A2022                                                                    © Institute and Faculty of Actuaries



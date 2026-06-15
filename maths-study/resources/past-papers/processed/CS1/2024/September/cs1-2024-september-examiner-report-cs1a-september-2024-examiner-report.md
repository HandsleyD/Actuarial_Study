---
normalized_id: cs1-2024-september-examiner-report-cs1a-september-2024-examiner-report
exam_code: CS1
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep24/CS1A_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2024-september-examiner-report-cs1a-september-2024-examiner-report

EXAMINERS’ REPORT
CS1 - Actuarial Statistics
Core Principles
Paper A




                             September 2024
             CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates,
both those who are sitting the examination for the first time and using past papers as a revision
aid and also those who have previously failed the subject.

The Examiners are charged by Council with examining the published syllabus. The Examiners
have access to the Core Reading, which is designed to interpret the syllabus, and will generally
base questions around it but are not required to examine the content of Core Reading specifically
or exclusively.

For numerical questions the Examiners’ preferred approach to the solution is reproduced in this
report; other valid approaches are given appropriate credit. For essay-style questions,
particularly the open-ended questions in the later subjects, the report may contain more points
than the Examiners will expect from a solution that scores full marks.

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge and
understanding of the topics and therefore candidates should not be overly dependent on open
book materials. In our experience, candidates that spend too long researching answers in their
materials will not be successful either because of time management issues or because they do not
properly answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be
exercised in doing so because each exam question is unique. As with all professional
examinations, it is insufficient to repeat points of principle, formula or other text book
works. The examinations are designed to test “higher order” thinking including candidates’
ability to apply their knowledge to the facts presented in detail, synthesise and analyse their
findings, and present conclusions or advice. Successful candidates concentrate on answering the
questions asked rather than repeating their knowledge without application.

Candidates should note that from the April 2025 exam session, all examinations will
continue to be delivered virtually and will have online proctoring. Exams will be closed
book and closed web. The ability to refer to past examiner reports and past papers during
the exam is not permitted. Candidates attempting to do so will be in breach of the
Assessment Regulations and subject to inappropriate conduct investigations. Further
details of the new exams can be found on the IFOA website.


The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that circumstances
may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
December 2024



CS1A S2024                                                             © Institute and Faculty of Actuaries
             CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


A.     General comments on the aims of this subject and how it is marked

The aim of the Actuarial Statistics subject is to provide a grounding in statistical techniques that
are of particular relevance to actuarial work.

Some of the questions in the examination paper accept alternative solutions from those presented
in this report or different ways in which the provided answer can be determined. All
mathematically correct and valid alternative solutions or answers received credit as appropriate.

Rounding errors were not penalised. However, candidates may have lost marks where excessive
rounding led to significantly different answers.

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

B.     Comments on candidate performance in this diet of the examination

Performance was satisfactory in general, with many candidates showing a good understanding of
the topics in this subject. Well prepared candidates were able to achieve high scores.

Questions requiring to show or demonstrate a given result were often not answered
particularly well (e.g. Q4(ii), Q5(i), Q8(ii)). Candidates must provide full details in their
answers and follow all the appropriate steps fully, before arriving at the given result.

Candidates are encouraged to practice more on the fundamentals of mathematical calculus and
probability. For example, mixed answers in Q4(iv), and Q4(v), suggest that a number of
candidates would benefit from additional work on integration.

Questions corresponding to parts of the syllabus that are not frequently examined were answered
inadequately in general (e.g. Q7(vii)). This highlights the need for candidates to cover the whole
syllabus when they revise for the exam and not only rely on themes appearing in recent papers.

C.     Pass Mark

The Pass Mark for this exam was 59.
1672 presented themselves and 849 passed.




CS1A S2024                                                             © Institute and Faculty of Actuaries
                CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


Solutions for Subject CS1A – September 2024

Q1
(i)
                                            𝜆𝑘 𝑒 −𝜆
𝑋 ∼ 𝑃𝑜𝑖(𝜆) therefore 𝑃(𝑋 = 𝑘) =               𝑘!


𝑃(𝑋 ≥ 2) = 1 − 𝑃(𝑋 < 2)
                                                                                                         [1]

𝑃(𝑋 < 2) = 𝑃(𝑋 = 0) + 𝑃(𝑋 = 1)

                0.50 𝑒 −0.5 0.51 𝑒 −0.5
            =              +
                   0!          1!

            = 0.607 + 0.303 = 0.91
                                                                                                         [1]
therefore

𝑃(𝑋 ≥ 2) = 1 − 0.91 = 0.09                                                                               [1]



(ii)
The conditional probability that the policyholder will live beyond the age of 80,
given that they have already reached the age of 70 is given by

                           𝑃(𝑋 > 80 ∩ 𝑋 > 70) 𝑃(𝑋 > 80)
𝑃(𝑋 > 80|𝑋 > 70) =                           =
                               𝑃(𝑋 > 70)       𝑃(𝑋 > 70)                                                 [1]

Since 𝑋 follows an exponential distribution,

𝑃(𝑋 > 80) = 1 − 𝑃(𝑋 ≤ 80) = 1 − 𝐹𝑋 (80)
                    80
             = 𝑒 −75

             = 0.344                                                                                     [1]
                                 70
Similarly, 𝑃(𝑋 > 70) = 𝑒 −75 = 0.393
                                                                                                         [1]
                                  0.344
Thus 𝑃(𝑋 > 80|𝑋 > 70) = 0.393 = 0.875
                                                                                                         [1]
                                                                                                 [Total 7]

Commentary:
Part (i): Very well answered, with no particular issues.
Part (ii): Well answered in general. A common error was not applying correctly the

CS1A S2024                                                                © Institute and Faculty of Actuaries
                   CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



numerator in the conditional probability at the start.


Q2
(i)
Correct Answer: A

The Bayesian estimate under all-or-nothing loss is the mode of the posterior
distribution.

𝑓(𝑥) = 𝜆𝑒 −𝜆𝑥 , 𝑝(𝜆) = 𝑘𝜆𝑘−1
                                                                            𝑛
Posterior density: 𝜋(𝑥) = 𝑘𝜆𝑘−1 ∏𝑛𝑖=1(𝜆𝑒 −𝜆𝑥𝑖 ) ∝ 𝜆𝑛+𝑘−1 𝑒 −𝜆 ∑𝑖=1 𝑥𝑖 .

Log Posterior distribution:

(𝑛 + 𝑘 − 1)log (𝜆) − 𝜆 ∑𝑛𝑖=1 𝑥𝑖 + 𝐶.

Set the first derivative equal to zero:

(𝑛 + 𝑘 − 1)    𝑛
            − ∑ 𝑥𝑖 = 0
     λ         𝑖=1

which gives
    𝑛+𝑘−1
𝜆 = ∑𝑛         .
      𝑖=1 𝑥𝑖


The support for the posterior is 0 ≤ 𝜆 ≤ 1 therefore the estimate is

                   𝑛+𝑘−1
𝜆̂ = 𝑚𝑖𝑛 (1,                 )                                                                                 [3]
                    ∑𝑛𝑖=1 𝑥𝑖



(ii)
The answer in part (i) needs to involve the minimum because the support for the
posterior distribution is 0 ≤ 𝜆 ≤ 1                                                                           [½]
as the prior suggests but 𝑛 + 𝑘 − 1 may be greater that ∑𝑛𝑖=1 𝑥𝑖 .
                                                                                                            [½]
                                                                                                       [Total 4]

Commentary:
Part (i): Very well answered in general.
Part (ii): Mixed answers. A number of candidates failed to explain and justify their answer
clearly.



CS1A S2024                                                                      © Institute and Faculty of Actuaries
               CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


Q3
(i)
To verify the values of 𝛼 and 𝛽 we can use the mean and sd of the prior:

            𝛼  3
𝑀𝑒𝑎𝑛 =        = = 0.6
           𝛼+𝛽 5                                                                                         [1]
                        𝛼𝛽            6
𝑉𝑎𝑟𝑖𝑎𝑛𝑐𝑒 =                         =       = 0.04
               (𝛼 + 𝛽)2 (𝛼 + 𝛽 + 1) 25 ∗ 6                                                               [1]

and 𝑠𝑑 = √0.04 = 0.2                                                                                     [1]



(ii)
           300
𝑍=                  = 0.98361
        300 + 3 + 2
                                                                                                         [1]


(iii)
(𝑍 × 𝑋̅) + (1 − 𝑍)𝜇

                  5
= (0.98361 ×         ) + (1 − 0.98361) × 0.6
                 300                                                                                     [1]
= 0.02623                                                                                                [1]




(iv)
The credibility estimate Z is very close to 1,                                                          [½]
reflecting more reliance on the actuary’s observed experience, 𝑋̅.                                      [½]
Hence the credibility estimate is weighted more towards the observed experience
  5                                                                                                     [½]
(300),
taking little account of the prior mean (0.6).                                                          [½]
                                                                                                    [Total 8]


Commentary:
Part (i): Very well answered in general. A small number of candidates attempted
unsuccessfully to solve the mean and variance equations for the two parameters.
Part (ii): Very well answered, with no particular issues.
Part (iii): Very well answered in general, with some calculation errors.
Part (iv): Mixed answers, with many candidates not providing adequate comments on the


CS1A S2024                                                               © Institute and Faculty of Actuaries
                    CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



direction of the credibility estimate.


Q4
(i)
                    𝑥       2𝑥
𝑃(𝑋 < 𝑥) = 𝐿 = 𝐿 .
                    2                                                                                        [1]


(ii)
The ratio R is given by:
         𝑋
𝑅 = 𝐿−𝑋 .
                                                                                                            [½]
Therefore, the cumulative distribution function for R is:

               𝑋
𝑃(𝑅 < 𝑟) = 𝑃 (    < 𝑟) = 𝑃(𝑋 < (𝐿 − 𝑋)𝑟 )
              𝐿−𝑋                                                                                            [1]
                                           𝐿𝑟
= 𝑃(𝑋(1 + 𝑟) < 𝐿𝑟) = 𝑃 (𝑋 <                   )
                                          1+𝑟
                                                                                                             [1]
        𝐿𝑟           2𝑟
=             𝐿   = 1+𝑟 .
    (1+𝑟)( )
              2


                                                                                                            [½]


(iii)
The ratio r is bounded in [0 , 1].

𝑃(𝑅 < 𝑟) is continuous at every point in [0, 1] with

𝑑       2𝑟           2
    (        ) = (1+𝑟)2
𝑑𝑟 1+𝑟
                                                                                                            [½]
       2
with (1+𝑟)2 > 0.            Therefore 𝑃(𝑅 < 𝑟) is a non-decreasing function of 𝑟.
                                                                                                             [1]
𝑃(𝑅 < 𝑟) = 0 at 𝑟 = 0 and 𝑃(𝑅 < 𝑟) = 1 at 𝑟 = 1 thus 0 ≤ 𝑃(𝑅 < 𝑟) ≤ 1 .
                                                                                                             [1]
This implies that 𝑃(𝑅 ≤ 𝑟) = 0 for 𝑟 ≤ 0 and 𝑃(𝑅 ≤ 𝑟) = 1 for 𝑟 ≥ 1 .
                                                                                                            [½]


(iv)
Integrating to calculate the mean of R:



CS1A S2024                                                                    © Institute and Faculty of Actuaries
                         CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


                 1       2𝑟
𝐸[𝑅] = ∫0 (1+𝑟)2 𝑑𝑟.

                                                                                                                   [½]
Integrating by parts, using the definition in the Actuarial Tables,

𝑢 = 2𝑟

𝑑𝑢 = 2. 𝑑𝑟

𝑑𝑣         1
   = (1+𝑟)2
𝑑𝑟

           1
𝑣 = − 1+𝑟

               1                                         1
            2𝑟             2𝑟 1       −2
𝐸(𝑅) = ∫          𝑑𝑟 = [−     ] − ∫         𝑑𝑟
         (1 + 𝑟)2         1+𝑟 0     (1 + 𝑟)
            0                                           0                                                        [1½]
      2𝑟 1
= [−     ] − [2 ln(𝑟 + 1)]10                                                                                       [1]
     1+𝑟 0

= (−1 − 0) − (−2 ln(2) + 0)
                                                                                                                   [½]
= 2𝑙𝑛2 − 1 = 0.3863
                                                                                                                   [½]


(v)
Correct answer: C

                     1   2𝑟 2
𝐸[𝑅 2 ] = ∫0 (1+𝑟)2 𝑑𝑟.

Integrating by parts, using the definition in the Actuarial Tables,

𝑢 = 2𝑟 2

𝑑𝑢 = 4𝑟. 𝑑𝑟

𝑑𝑣         1
     = (1+𝑟)2
𝑑𝑟

           1
𝑣 = − 1+𝑟

                                        1                               1
      1   2𝑟 2                   2𝑟 2          1   𝑟             2𝑟 2
= ∫0 (1+𝑟)2 𝑑𝑟 = [− 1+𝑟] + 4 ∫0 (1+𝑟) 𝑑𝑟 = [− 1+𝑟] + 4[− ln(𝑟 + 1) + 𝑟]10
                                        0                               0

= −1 + 4(− ln(2) + 1)


CS1A S2024                                                                         © Institute and Faculty of Actuaries
              CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


= 3 − 4𝑙𝑛2 = 0.2274

Therefore, Var (R) is:

𝑉𝑎𝑟[𝑅] = 𝐸(𝑅 2 ) − 𝐸 2 [𝑅] = 3 − 4𝑙𝑛2 − (2𝑙𝑛2 − 1)2

= 3 − 4𝑙𝑛2 + 4𝑙𝑛2 − 4(𝑙𝑛2)2 − 1

= 2 − 4(𝑙𝑛2)2 = 0.0782.

                                                                                                         [3]
                                                                                                  [Total 14]


Commentary:
Part (i): Very well answered.
Part (ii): Well answered in general. A number of candidates did not follow all steps correctly
when attempting to show the given result.
Part (iii): Not well answered, with many incomplete answers.
Part (iv): Not well answered. Most candidates obtained the probability function correctly,
but many then failed to fully solve the required integral and provide the final answer.
Part (v): Mixed answers. This required solving an integral similar to that in (iv), which
many candidates found challenging.


Q5
(i)
Let x denote the vector of the observed data.
Likelihood function:
                   𝑛                                    𝑛
𝐿(𝜃; 𝑥) = ∏            𝜃(1 + 𝑥𝑖 )−(𝜃 + 1) = 𝜃 𝑛 ∏           (1 + 𝑥𝑖 )−(𝜃 + 1) .
                   𝑖=1                                  𝑖=1                                              [1]

Prior density:

             𝑏𝑎
𝜋(𝜃) =            𝜃 𝑎−1 𝑒 −𝑏𝜃 .
          Γ(𝑎)
                                                                                                        [½]
Posterior density:
                                  𝑛
𝜋(𝜃|𝑥) ∝ 𝜃 (𝑎+𝑛)−1 𝑒 −𝑏𝜃 ∏              (1 + 𝑥𝑖 )−(𝜃 + 1)
                                  𝑖=1                                                                    [1]
                                  𝑛
= 𝜃 (𝑎+𝑛)−1 exp {−𝑏𝜃 + ∑              𝑙𝑛(1 + 𝑥𝑖 )−(𝜃 + 1) }
                                  𝑖=1                                                                    [1]

                                              𝑖=1
= 𝜃 (𝑎+𝑛)−1 exp {−𝑏𝜃 − (𝜃 + 1) ∑                  𝑙𝑛(1 + 𝑥𝑖 )}                                           [1]
                                              𝑛




CS1A S2024                                                                © Institute and Faculty of Actuaries
             CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


∝ 𝜃 (𝑎+𝑛)−1 exp {−(𝑏 + ∑𝑖=1
                        𝑛 𝑙𝑛(1 + 𝑥𝑖 )) 𝜃}.

                                                                                                      [1]
So,   𝜃|𝑥 Gamma (𝑎 + 𝑛, 𝑏 + ∑𝑖=1
                             𝑛 𝑙𝑛(1 + 𝑥𝑖 )).
                                                                                                      [½]


(ii)
Prior and posterior are both gamma distributions, so we have a conjugate prior.                       [1]

(iii)
The posterior now is: theta | x ~ Gamma(16, 5.5).                                                    [½]
The Bayes estimate is given by the posterior mean,                                                   [½]
so, Bayes estimate = 16/5.5 = 2.909.                                                                  [1]

(iv)
We can express the posterior theta | x ~ Gamma(16, 5.5) as:
11*theta | x ~ chi-square(32).                                                                        [2]
From statistical tables we find that a 95% credible interval for 11*theta is (18.29,                  [1]
49.48).
So, 95% credible interval for theta is (18.29/11, 49.48/11) = (1.663, 4.498).                        [1]
                                                                                               [Total 13]

Commentary:
Part (i): Well answered in general. A number of candidates did not follow all steps correctly
when attempting to show the given result.
Part (ii): Very well answered in general.
Part (iii): Very well answered in general.
Part (iv): Not well answered. Many candidates failed to use the chi-square distribution
correctly. A number of candidates provided the quantiles of the gamma distribution, without
fully explaining how these were determined.


Q6

(i)
𝑎 is the intercept ,                                                                                 [½]
b is the slope,                                                                                      [½]
e is a random variable,                                                                              [½]
representing the error term.                                                                         [½]

(ii)
The intercept 60 represents the estimated number of claims made by a policyholder
over the past year when the age of the policyholder is 0.                                            [½]
Here, an age of 0 does not make practical sense since policyholders are typically
                                                                                                     [½]

CS1A S2024                                                             © Institute and Faculty of Actuaries
                    CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


adults.
The slope coefficient −0.5 represents the estimated change in the number of claims
for each one-unit increase in the age of the policyholder.                                                     [½]
It suggests that as policyholders get one year older, they are expected to file on
average 0.5 fewer claims.                                                                                      [½]


(iii)

The coefficient of determination

          2
         𝑆𝑥𝑦                                2
                                           𝑆𝑥𝑦
𝑅2 =                and 𝑆𝑆𝑅𝐸𝑆 = 𝑠𝑦𝑦 −
        𝑆𝑥𝑥 𝑆𝑦𝑦                            𝑆𝑥𝑥


Thus 𝑆𝑆𝑅𝐸𝑆 = 𝑆𝑦𝑦 − 𝑆𝑦𝑦 𝑅 2 .
                                                                                                                [1]

The coefficient of determination is then derived as

               𝑆𝑆               2521.416
𝑅 2 = 1 − 𝑆𝑅𝐸𝑆 = 1 − 17970.44 = 0.86.
                  𝑦𝑦
                                                                                                                [1]
(iv)
𝑅 2 is 86% indicating that 86% of the variation in the number of claims made
during the past year is explained by the age of the policyholder.                                               [1]

(v)


        𝑆𝑆           2521.416
𝜎̂ 2 = 𝑛−2
        𝑅𝐸𝑆
            =                   = 25.729.
                        98

                                                                                                               [½]
                                                             1/2
                                                       ̂2
                                                       𝜎              25.729 1/2
Estimated standard error of 𝑏: 𝑠. 𝑒. (𝑏̂) = (𝑆 )                   = ( 67844 )     = 0.019.                     [1]
                                                        𝑥𝑥


95% confidence interval for the slope b is 𝑏̂ ± {𝑡0.025,98 × 𝑠. 𝑒. (𝑏̂)}

i.e. −0.5 ± (1.98 × 0.019) i.e. −0.5 ± 0.038.                                                                   [1]

So 95% confidence interval is (−0.538 , −0.462).                                                               [½]

(vi)
The 95% two-sided confidence interval in (v) does not contain the value ‘0’, so the
two-sided test conducted at the 5% level results in there being sufficient evidence to
reject 𝐻0 .                                                                                                     [1]




CS1A S2024                                                                       © Institute and Faculty of Actuaries
                  CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


(vii)

   Estimate of the number of claims = 60 + (−0.5)(50) = 35.

                                                                                                           [1]
                                             (50−61.8)2            1/2                                     [1]
                                        1
   St. error of estimate =[{1 + 100 +                     } 25.729]      = 5.103
                                               67844


   𝑡0.025,98 = 1.98, so the 95% prediction interval is 35 ± (1.98 × 5.103),                                [1]

   ie (24.896, 45.104).                                                                                    [1]

                                                                                                    [Total 15]

Commentary:
Parts (i), (iii), (iv), (v), (vi): Very well answered in general with no particular issues.
Part (ii): Mixed attempts, with some answers not providing clear comments.
Part (vi): Well answered in general. A common error was omitting the term “1+” in the
calculation of the standard error, and therefore giving a confidence interval instead of the
required prediction interval.


Q7
(i)
        716.9
𝑥̅ =            = 71.69.
         10
                                                                                                           [1]
         1
𝑆 2 = 9 (132,712 − 10 × 71.692 ) = 9035.271 .
                                                                                                           [1]
𝑆 = 95.054 .                                                                                               [1]



(ii)
𝑡0.025,9 = 2.262                                                                                          [½]


                   𝑆                         9035.271
𝑥̅ ± 𝑡0.025,9          = 71.69 ± 2.262√
                 √10                            10
                                                                                                           [1]
= [3.697, 139.683].                                                                                       [½]



(iii)
The 95% confidence interval does not include 0.                                                            [1]
Therefore, we reject the null hypothesis that the mean difference is 0.                                    [1]



CS1A S2024                                                                  © Institute and Faculty of Actuaries
                 CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


(iv)
The data must represent an iid sample from a normal distribution, since the sample
size is small.                                                                              [1]
For this sample, it seems unlikely that the data are iid since the differences for high
value paintings seem to be larger than those for paintings with a lower value.              [1]
It is difficult to say something about the assumption of a normal distribution since
the sample size is very small.                                                              [1]
                                                                                    [Max 2 marks]

(v)
     0.641
𝑅̅ =       = 0.0641.
      10
                                                                                                         [½]
      1
𝑆 2 = 9 (2.3404 − 10 × 0.06412 ) = 0.255.
                                                                                                          [1]
𝑡0.025,9 = 2.262
                                                                                                         [½]
                      0.0641
Test statistic: 𝑡 =        0.255
                                   = 0.4014.
                       √
                             10
                                                                                                          [1]
This means the 𝑝-value will be greater than 0.05.                                                        [½]
There is no evidence to reject the null hypothesis that the mean relative difference is
0.                                                                                                       [½]


(vi)
The two results seem to suggest different conclusions:                                                   [½]
in (iii) the null hypothesis of the mean difference to be 0 is rejected; and in (v) it is
not rejected when the mean relative difference is considered.                                            [½]
The reason for the different conclusions is that in (iii) the very large positive
differences for the expensive paintings suggest a large mean difference.                                  [1]


(vii)
Prediction interval for the relative difference, 𝑅:

                                          1                           1
(𝑅̅ − 1.96 × 0.25 × √1 +                    , 𝑅̅ + 1.96 × 0.25 × √1 + )
                                         10                          10


                                                                                                          [2]
= (−0.45, 0.58).
                                                                                                          [1]
                                                               𝑉
This means we are 95% confident that −0.45 < 1 − 𝑃 < 0.58,
                                                                                                          [1]
             𝑉
or 0.42 < 𝑃 < 1.45,

           200                     200         200
0.42 <       < 1.45, or 1.45 < 𝑃 < 0.42 , or 137.9 < 𝑃 < 476.2.                                           [1]
           𝑃


CS1A S2024                                                                 © Institute and Faculty of Actuaries
                 CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




                                                                                                   [Total 20]

Commentary:
Parts (i), (ii), (iii), (v): Very well answered in general, with no particular issues.
Part (iv): Not very well answered. Many candidates provided the required assumption, but
failed to clearly comment on it.
Part (vi): Not well answered. Many candidates did not identify the key point here, which was
the distinction between mean differences and mean relative differences.
Part (vii): Mixed answers. Many candidates failed to apply the correct prediction interval in
this case (given in the CR, unit 9, section 2.1). Also, a number of candidates failed to then
follow up to convert the interval and provide an answer for P.


Q8
(i)
Censored data occurs when the value of a variable is only partially known.                                [1]
As the size of claims above the limit are not exactly known, only that they
are at least M, this is an example of censored data.                                                      [1]


(ii)
The likelihood function is given by:
                 𝑛

𝐿(𝜆; 𝑥) = (∏ 𝑓(𝑥𝑖 ; 𝜆)) ⋅ 𝑃[𝑋 > 𝑀]𝑘
                                                                                                          [2]
                𝑖=1

      𝑛
                                𝑘
= (∏ 𝜆𝑒 −𝜆𝑥𝑖 ) ⋅ (𝑒 −𝜆𝑀 )
     𝑖=1                                                                                                  [1]
         −𝜆 ∑𝑛
= 𝜆𝑛 𝑒       𝑖=1 𝑥𝑖   𝑒 −𝜆𝑘𝑀                                                                              [1]

                      𝑛
= 𝜆𝑛 𝑒 −𝜆(𝑘𝑀+∑𝑖=1 𝑥𝑖 ) .
                                                                                                         [½]

Taking the natural logarithm of both sides:

                                                                                                         [½]
𝑙(𝜆; 𝑥) = 𝑛 ln 𝜆 − 𝜆(𝑘𝑀 + ∑𝑛𝑖=1 𝑥𝑖 ).



(iii)
Differentiating the log-likelihood with respect to lambda gives:
                          𝑛
𝑑𝑙 𝑛
  = − (𝑘𝑀 + ∑ 𝑥𝑖 )
𝑑𝜆 𝜆
                          𝑖=1


CS1A S2024                                                                 © Institute and Faculty of Actuaries
               CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report


                                                                                                        [1]
Setting this to zero implies:
                 𝑛
𝑛
  = k ∗ M + ∑ 𝑥𝑖
𝜆
                𝑖=1                                                                                     [1]
            𝑛
and 𝜆̂ = 𝑘𝑀+∑𝑛            .
                 𝑖=1 𝑥𝑖                                                                                 [1]
Checking this yields a maximum:

𝑑2 𝑙       𝑛                                                                                            [1]
       = − 𝜆2 < 0.
𝑑𝜆2


Clearly the second derivative is negative for all λ, hence this is indeed a maximum.



(iv)
M = 50,000
k=9
n = 300 – 9 = 291
Sum(1,n): x_i = 750,000 .                                                                               [1]
Substituting these into the equation from part (iii):

lambda = 291 / (9*50,000 + 750,000) = 2.425*10^-4 .                                                     [1]


(v)
For an Exponential distribution with parameter lambda, the mean is 1/ lambda.
Using the invariance property of the MLE                                                               [½]
the MLE of the mean claim size is 1 / (2.425*10^-4) = £4,124.                                          [½]


(vi)
By definition:
CRLB = 1 / ( - E(d^2l/d(lambda)^2) ) evaluated at the maximum likelihood
estimate.
From part (iii):
d^2l/d(lambda)^2 = -n/(lambda^2).
Hence:
CRLB = 1 / ( n/(lambda^2) ) = (lambda^2)/n
evaluated at lambda = 2.425*10^-4 .                                                                     [1]

Therefore:                                                                                              [1]
CRLB = (2.425*10^-4)^2 / 291 = 2.02×10^(-10)

CS1A S2024                                                               © Institute and Faculty of Actuaries
             CS1A ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




(vii)
The asymptotic distribution of lambda_hat is normal with mean lambda and
variance equal to CRLB.
Therefore:
lambda_hat ~ N(2.425*10^-4, 2.02*10^-10) .                                                              [1]

95% confidence interval for lambda:
2.425*10^-4 +/- 1.96*sqrt(2.02*10^-10)
i.e. (2.146*10^-4, 2.704*10^-4) .                                                                       [1]

Using the fact that mean = 1/ lambda, this gives the 95% confidence interval for the
mean claim size:
(£3,699, £4,659).
                                                                                                        [1]
                                                                                                  [Total 19]

Commentary:
Part (i): Very well answered in general. No particular issues.
Part (ii): Well answered in most cases. A number of candidates did not follow all steps
correctly when attempting to show the given result.
Parts (iii)-(v): Well answered in general, with no particular issues.
Part (vi): Mixed answers, with many calculation errors.
Part (vii): Not well answered. The normal approximation was not correctly applied in many
cases, while there were also many calculation errors.


                                                                                   [Paper Total 100]




                         END OF EXAMINERS’ REPORT




CS1A S2024                                                             © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


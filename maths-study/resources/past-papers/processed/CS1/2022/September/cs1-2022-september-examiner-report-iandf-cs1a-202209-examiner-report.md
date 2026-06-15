---
normalized_id: cs1-2022-september-examiner-report-iandf-cs1a-202209-examiner-report
exam_code: CS1
year: 2022
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1A/Sep22/IandF_CS1A_202209_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2022-september-examiner-report-iandf-cs1a-202209-examiner-report

EXAMINERS’ REPORT
CS1A – Actuarial Statistics
Core Principles
Paper A




                              September 2022
            CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


Introduction

The Examiners’ Report is written by the Chief Examiner with the aim of helping candidates,
both those who are sitting the examination for the first time and using past papers as a
revision aid and those who have previously failed the subject.

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
December 2022




CS1A S2022                                                            © Institute and Faculty of Actuaries
           CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


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
   the answers in this report (e.g. calculations) are for information.

   In all numerical questions that were not multiple-choice, full credit was given for correct
   answers that also included appropriate workings.

   Standard keyboard typing was accepted for mathematical notation.


   B. Comments on candidate performance in this diet of the examination.

   Performance was satisfactory in general, with many candidates showing good
   understanding of the topics in this subject. Well prepared candidates were able to score
   highly.

   A smaller number of candidates appeared to be inadequately prepared, in terms of not
   having covered sufficiently the entire breadth of the subject.

   Questions corresponding to parts of the syllabus that are not frequently examined, and
   questions that deviated from similar questions appearing in past papers, were generally
   not well answered (e.g. Q7, parts of Q8). This highlights the need for candidates to cover
   the whole syllabus when they revise for the exam and not only rely on themes appearing
   in past papers.


   C. Pass Mark

   The Pass Mark for this exam was 55
   1302 presented themselves and 539 passed.



CS1A S2022                                                           © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


Solutions for Subject CS1A – September 2022

Q1
(i)
                    𝑃𝑃[𝐴𝐴∩𝑌𝑌]       𝑃𝑃�𝑌𝑌 �𝐴𝐴�×𝑃𝑃[𝐴𝐴]
      𝑃𝑃[𝐴𝐴|𝑌𝑌] =               =                                                                       [1]
                     𝑃𝑃[𝑌𝑌]              𝑃𝑃[𝑌𝑌]

                                       0.18
                                    = 0.07 𝑃𝑃[𝐴𝐴]                                                       [1]

(ii)
Therefore, the probability for young drivers to be involved in an accident is almost three
times (18/7) as high as it is for drivers in general.                                       [1]
                                                                                       [Total 3]

 The question was well answered. A common mistake in part (i) was omitting P(A) in the
 numerator.



Q2
(i)
The random variable (𝑋𝑋) of interest here is the number of trials among independent trials
performed before the first success occurs, i.e. product fails. Therefore, 𝑋𝑋 follows a geometric
distribution with parameter p                                                                [1]
such that:

𝑃𝑃(𝑋𝑋 = 𝑘𝑘) = (1 − 𝑝𝑝)𝑘𝑘−1 𝑝𝑝
with 𝑝𝑝 = 𝑃𝑃(𝑓𝑓𝑓𝑓𝑓𝑓𝑓𝑓) = 0.1 .                                                                          [½]
Probability p is same for all trials                                                                    [½]

(ii)
Let Y be the random variable representing the warranty. The probability mass is then derived
as:
(a) 𝑃𝑃(𝑌𝑌 = 8000) = 𝑃𝑃(𝑋𝑋 = 1) = (1 − 0.1)1−1 0.1 = 0.1                                   [½]
                                  (1       2−1
(b) 𝑃𝑃(𝑌𝑌 = 6000) = 𝑃𝑃(𝑋𝑋 = 2) = − 0.1) 0.1 = 0.09                                        [½]
(c) 𝑃𝑃(𝑌𝑌 = 4000) = 𝑃𝑃(𝑋𝑋 = 3) = (1 − 0.1)3−1 0.1 = 0.081                                 [½]
                                           4−1
(d) 𝑃𝑃(𝑌𝑌 = 2000) = 𝑃𝑃(𝑋𝑋 = 4) = (1 − 0.1) 0.1 = 0.0729                                   [½]
(e) 𝑃𝑃(𝑌𝑌 = 0) = 1 − 𝑃𝑃(𝑌𝑌 > 0) = 1 − (0.1 + 0.09 + 0.081 + 0.0729) = 0.6561              [1]

 y      £8000                          £6000            £4000       £2000                 £0
 P(Y=y) 0.1                            0.09             0.081       0.0729                0.6561

(iii)
The expected value of Y is
𝐸𝐸(𝑌𝑌) = ∑𝑦𝑦𝑦𝑦(𝑌𝑌 = 𝑦𝑦)
𝐸𝐸(𝑌𝑌) = 8000 × 0.1 + 6000 × 0.09 + 4000 × 0.081 + 2000 × 0.0729 + 0 × 0.6561 [1]
𝐸𝐸(𝑌𝑌) = 800 + 540 + 324 + 145.8 + 0                                            [½]
         𝐸𝐸(𝑌𝑌) = £1809.8                                                       [½]
                                                                           [Total 7]

CS1A S2022                                                               © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report




  Answered very well by the majority of candidates.

  In part (i), the alternative answer that X follows a Negative Binomial Type 1 with k = 1,
  received full credit.

  In part (iii), a common error was to use X instead of the £ values.



Q3
(i)
The proportion passing appears to increase somewhat with age for males,                                 [½]
and to a lesser extent for females                                                                      [½]

(ii)
Y follows a binomial distribution                                                                       [1]
           𝜇𝜇
𝜂𝜂 = log �1−𝜇𝜇� = 𝛼𝛼𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔 + 𝛽𝛽𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔𝑔 × 𝐴𝐴𝐴𝐴𝐴𝐴                                              [1]

where gender is either male or female,
𝜇𝜇 = 𝐸𝐸(𝑌𝑌/𝑛𝑛).                                                                                         [1]

(iii)
The linear predictor for a 22-year-old female would be −0.968 + 0.056 × 22 = 0.264                      [1]

Using the link function defined in (ii) we obtain:
       𝑒𝑒 𝜂𝜂      𝑒𝑒 0.264
𝜇𝜇̂ = 1+𝑒𝑒 𝜂𝜂 = 1+𝑒𝑒 0.264 = 0.566                                                                      [1]

Hence the proportion of 22-year-old females predicted by the model to pass the test would be
about 56.6%

(iv)
This expression means that for each additional year of age for a male, the ratio of the
probability of passing against failing increases by a factor of 𝑒𝑒 0.209 = 1.232            [1]
                                                                                       [Total 7]

  Performance in this question was mixed, with many candidates not attempting to calculate
  the proportion asked for in part (iii).

  In part (iv) comments often failed to consider the probability of passing the test.



Q4
(i)
All entries in the table are greater than 0                                                             [½]
The sum of all entries is equal to 1                                                                   [1½]



CS1A S2022                                                               © Institute and Faculty of Actuaries
            CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


(ii)
𝑃𝑃[𝑋𝑋 = 1] = 0.35, 𝑃𝑃[𝑋𝑋 = 2] = 0.3, 𝑃𝑃[𝑋𝑋 = 3] = 0.35                                              [1½]
𝐸𝐸[𝑋𝑋] = 0.35 + 2 × 0.3 + 3 × 0.35 = 2                                                              [1½]

(iii)
𝑃𝑃[𝑌𝑌 = 0] = 0.7, 𝑃𝑃[𝑋𝑋 = 1] = 0.35                                                                  [1]
𝑃𝑃[𝑋𝑋 = 1, 𝑌𝑌 = 0] = 0.3 ≠ 0.35 × 0.7 = 𝑃𝑃[𝑋𝑋 = 1]𝑃𝑃[𝑌𝑌 = 0]                                         [1]

(Or, alternatively, other suitable combinations of values of 𝑋𝑋 and 𝑌𝑌.)

 Very well answered. In part (i) answers often failed to mention that all the entries are
 greater than 0.



Q5
(i)
The linear predictor is
ai + betaj + gammak+ delta*x                                                                         [1]

(ii)
ai is the gender effect on claim amount, for i = 1 – male, 2 – female                                [½]
betaj is the experience effect, for j = 1,2,3,4                                                      [½]
gammak is the car group effect, for k = 1, …, 20                                                     [½]
delta is the coefficient for the effect of numerical variable age (x)                                [½]


(iii)
The linear predictor changes to
ai + betaj + gammak+ deltak*x                                                                        [1]

where
ai, betaj, gammak are as before,                                                                     [½]
deltak is the effect of age on claim amount, for different car groups, k = 1, …, 20                  [½]

(iv)
Test hypotheses:
H0: the interaction model is not an improvement v. H1: the interaction model is an
improvement                                                                                          [½]

Using the model with the interaction, the deviance reduces by 422.5-310.3 = 112.2                    [½]

Under H0, the decrease in deviance should asymptotically follow a chi-square
distribution with 20-1=19 degrees of freedom                                                         [½]

The upper 1% point of the chi-square distribution with 19 df is 36.19
(the 5% point is 30.14)                                                                              [½]

We have strong evidence against H0                                                                   [½]


CS1A S2022                                                            © Institute and Faculty of Actuaries
            CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


and conclude that the model with the interaction term improves the fit significantly and
should be preferred                                                                        [½]
                                                                                      [Total 8]

 The question was generally well answered.

 In part (i), the linear predictor for the GLM was often specified incorrectly. Also in part
 (i), a number of candidates gave parts of the answer required in part (ii), and received
 credit where appropriate.



Q6
(i)
Likelihood function:
L(p) = product(i in1:n) {p^x_i * (1-p)^(1-x_i)}
= p^{sum(i in1:n) x_i} * (1-p)^{n- sum(i in1:n) x_i }                                                 [1]

Prior density:
f(p) is proportional to: p^(a-1) * (1-p)^(b-1)                                                        [1]

Posterior density:
f(p|x) proportional to L(p) * f(p)                                                                    [½]
= p^{sum(i in1:n) x_i} * (1-p)^{n- sum(i in1:n) x_i } * p^(a-1) * (1-p)^(b-1)
= p^{sum(i in1:n) x_i+ a-1}} * (1-p)^{n+b - sum(i in1:n) x_i -1}                                    [1½]

So, the posterior is a beta distribution                                                              [1]
with parameters sum(i in1:n) x_i+ a and           n+b - sum(i in1:n) x_i                              [1]

(ii)
The Bayes estimate under quadratic loss is the posterior mean, i.e.                                   [½]
{sum(i in1:n) x_i+ a} / (a+b+n)                                                                       [½]

(iii)
We can write the estimate as
{sum(i in1:n) x_i+ a} / (a+b+n) = {n/(n+a+b) * {sum(i in1:n) x_i / n} + (a+b)/(n+a+b) *
{a/(a+b)}
= Z * xbar + (1-Z) * prior mean,                                                     [1½]

where Z = n/(n+a+b) is the credibility factor                                                         [½]
                                                                                                 [Total 9]

 Very well answered by the majority of candidates.



Q7
(i)
P(N) = P(N | D) * P(D) + P(N | H) * P(H)                                                              [1]


CS1A S2022                                                            © Institute and Faculty of Actuaries
             CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report




We have that:
P(N | D) = 1 – P(T | D) = 1- p
P(N | H) = 1 – P(T | H) = 1
P(D) = r and P(H) = 1 - r                                                                             [2]

So :
P(N) = (1 – p) * r + 1 * (1 – r) = 1 - p*r                                                            [1]

Alternatively:
P[N] = 1-P[T]
= 1- ( P[T|D]*P[D] + P[T|H]*P[H]
=1- (p*r + 0*(1-r))
=1-pr

(ii)
P(D | N) = P(N | D) * P(D) / P(N)                                                                     [1]

= (1 – p ) * r / (1 - p*r )                                                                           [1]

(iii)(a)
Let N_i denote the event that the i test is negative, i = 1, …, k.

We have
P(D | N*) = P(N* | D) * P(D) / { P(N* | D) * P(D) + P(N* | H) * P(H) }                                [1]

with
P(N* | D) = P(N_1 | D) * … * P(N_k | D) = (1- p)^k (because test results are
conditionally independent)                                                                           [1½]

and
P(N* | H) = P(N_1 | H) * … * P(N_k | H) (because test results are conditionally
independent)
= 1* …* 1 = 1                                                                                        [1½]

So, we obtain:
P(D | N*) = (1 – p)^k * r / { (1 – p)^k * r + (1 – r) }                                               [1]

(b)
As k increases the numerator decreases faster than the denominator.                                   [½]
So the probability of having the disease decreases (as expected)                                      [½]

(iv)
Other possible assumptions:
Prevalence remains constant during the testing period                                                 [1]
This can be realistic in a large population                                                           [1]

Or:
The probability of a positive test, p, is assumed to be the same for everyone. This may not be
appropriate

CS1A S2022                                                             © Institute and Faculty of Actuaries
                  CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report




Or:
Disease status of individual does not change between tests
This may be less realistic, especially if intervals between tests are long
                                                                                                       [Total 14]

 This question was not well answered, with many candidates not attempting parts of it.
 Alternative answers received credit where appropriate.

 In part (iv), credit was given for a range of other reasonable suggestions.



Q8
[Equation view is also provided along with the ‘typed’ answer to help with readability.]

(i)(a)

Let 𝑋𝑋 ~ 𝑈𝑈(0, 𝑣𝑣)
f_x(x) = 1 / (v – 0) = 1 / v
              1    1
𝑓𝑓𝑋𝑋 (𝑥𝑥) = 𝑣𝑣−0 = 𝑣𝑣                                                                                        [½]
F_x(x) = (x – 0) / (v – 0) = x / v
            𝑥𝑥−0    𝑥𝑥
𝐹𝐹𝑋𝑋 (𝑥𝑥) = 𝑣𝑣−0 = 𝑣𝑣                                                                                        [½]

Therefore the probability that a single measurement is less than 1 is:
P( X<1 ) = F_x(1) = 1 / v
                        1
𝑃𝑃(𝑋𝑋 < 1) = 𝐹𝐹𝑋𝑋 (1) = 𝑣𝑣                                                                                   [1]

(b)
Specifying the likelihood function using the information given in the question and from part
(i)(a):
L(v) = choose(n,r) * [ P( X<1) ]^r * [ P( X>1 )]^(n – r)
𝐿𝐿(𝑣𝑣) = �𝑛𝑛𝑟𝑟�[𝑃𝑃(𝑋𝑋 < 1)]𝑟𝑟 [𝑃𝑃(𝑋𝑋 > 1)]𝑛𝑛−𝑟𝑟                                          [1]
= (1/v)^r * ((v – 1)/v)^(n-r) * constant
                                        1 𝑟𝑟 𝑣𝑣 − 1 𝑛𝑛−𝑟𝑟
                                     =� � �        �      × 𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐
                                        𝑣𝑣      𝑣𝑣
= (v – 1)^(n – r) / v^n * constant
    (𝑣𝑣−1)𝑛𝑛−𝑟𝑟
=                 × 𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐                                                                         [1]
         𝑣𝑣 𝑛𝑛

Taking logs gives:
Ln L(v) = (n – r) * ln(v – 1) – n*ln(v) + constant
𝐿𝐿𝐿𝐿 𝐿𝐿(𝑣𝑣) = (𝑛𝑛 − 𝑟𝑟). ln(𝑣𝑣 − 1) − 𝑛𝑛 ln (𝑣𝑣) + 𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐𝑐                                          [½]

Differentiating with respect to v and setting equal to zero gives:
d/dv ln L(v) = (n – r)/(v – 1) – n/v = 0
 𝑑𝑑              𝑛𝑛−𝑟𝑟  𝑛𝑛
𝑑𝑑𝑑𝑑
     ln 𝐿𝐿(𝑣𝑣) = 𝑣𝑣−1 − 𝑣𝑣 = 0                                                                               [1]



CS1A S2022                                                                  © Institute and Faculty of Actuaries
                 CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


(n – r) / (v_hat – 1) = n / v_hat
𝑛𝑛−𝑟𝑟   𝑛𝑛
𝑣𝑣�−1
      = 𝑣𝑣�
                                                                                                          [½]

n*v_hat – r*v_hat = n*v_hat – n
r*v_hat = n
v_hat = n / r
                                              𝑛𝑛𝑣𝑣� − 𝑟𝑟𝑣𝑣� = 𝑛𝑛𝑣𝑣� − 𝑛𝑛
                                                      𝑟𝑟𝑣𝑣� = 𝑛𝑛
                                                                 𝑛𝑛
                                                           𝑣𝑣� = 𝑟𝑟                                       [1]

                                                                                            1
[Alternative solution: R has a Binomial distribution with parameters n and 𝑣𝑣 . Therefore the
                                  1                                  𝑟𝑟
MLE of the proportion 𝑣𝑣 is the sample proportion of 𝑛𝑛 . Which leads to the MLE of v being
𝑛𝑛
𝑟𝑟
     .]

(c)
The correct answer is D.                                                                                  [3]

The second derivative of the log likelihood from part (i)(b) is:

                                       𝑑𝑑 2                 (𝑛𝑛 − 𝑟𝑟)    𝑛𝑛
                                             ln 𝐿𝐿(𝜗𝜗) = −             + 2
                                      𝑑𝑑𝑣𝑣 2               (𝑣𝑣 − 1)  2  𝑣𝑣

The Cramer-Rao lower bound (CRLB) is:
                                          1                     1
              𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶(𝑣𝑣�) = −                   =−                      .
                                     𝑑𝑑 2                  (𝑛𝑛 − 𝑅𝑅)  𝑛𝑛
                                𝐸𝐸 � 2 ln 𝐿𝐿(𝑣𝑣)�    𝐸𝐸 �−           + �
                                    𝑑𝑑𝑣𝑣                   (𝑣𝑣 − 1)2 𝑣𝑣 2
                                                                           1
R is a Binomial random variable with parameters n and 𝑝𝑝 = 𝑣𝑣 . Therefore:
                                                                𝑛𝑛
                                            𝐸𝐸(𝑅𝑅) = 𝑛𝑛𝑛𝑛 =
                                                                𝑣𝑣
Substituting for 𝐸𝐸(𝑅𝑅) gives:
                                               𝑛𝑛
                (𝑛𝑛 − 𝑅𝑅) 𝑛𝑛             �𝑛𝑛 − 𝑣𝑣 �      𝑛𝑛     −𝑣𝑣 2 𝑛𝑛 + 𝑣𝑣𝑣𝑣 + 𝑣𝑣 2 𝑛𝑛 − 2𝑣𝑣𝑣𝑣 + 𝑛𝑛
          𝐸𝐸 �−           +    � =  −                +        =
                (𝑣𝑣 − 1)2 𝑣𝑣            (𝑣𝑣 − 1)2 𝑣𝑣 2                       𝑣𝑣 2 (𝑣𝑣 − 1)2
                                         −𝑣𝑣𝑣𝑣 + 𝑛𝑛         −𝑛𝑛(𝑣𝑣 − 1)
                                   = 2                  = 2
                                       𝑣𝑣 (𝑣𝑣 − 1)   2      𝑣𝑣 (𝑣𝑣 − 1)2
                                                       −𝑛𝑛
                                              = 2
                                                 𝑣𝑣 (𝑣𝑣 − 1)
Finally, the CRLB for v_hat is:
                                                       1           𝑣𝑣 2 (𝑣𝑣 − 1)
                            𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶(𝑣𝑣�) = −         −𝑛𝑛       =
                                                                          𝑛𝑛
                                                𝑣𝑣 2 (𝑣𝑣 − 1)

(d)
v_hat ~= N ( v , (v^2 * (v – 1)) / n )
                𝑣𝑣 2 (𝑣𝑣−1)
𝑣𝑣� ∻ 𝑁𝑁 �𝑣𝑣,                 �                                                                           [2]
                    𝑛𝑛




CS1A S2022                                                                 © Institute and Faculty of Actuaries
                  CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report




(ii)(a)
v_hat = n / r = 500 / 75 = 6.66667                                                                             [½]
                                                        𝑛𝑛 500
                                                𝑣𝑣� =      =    (= 6. 6� )
                                                        𝑟𝑟   75

S.E. (v_hat) = sqrt(CRLB) = sqrt((v^2 * (v – 1)) / n)                                                          [½]
= sqrt(((500/75)^2 * (500/75 – 1)) / 500)                                                                      [½]
= 0.70972                                                                                                      [½]

                                                                         500 2 500
                                                𝑣𝑣 2 (𝑣𝑣 − 1)       ��   75
                                                                            � �
                                                                                75
                                                                                   − 1�
                𝑆𝑆. 𝐸𝐸. (𝑣𝑣�) = √𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 = �                   =                       = 0.70972
                                                     𝑛𝑛                       500

(b)
v_hat +/- 2.5758 * sqrt(CRLB) = 500 / 75 +/- 2.5758 * 0.70972

                                  500
𝑣𝑣� ± 2.5758 . √𝐶𝐶𝐶𝐶𝐶𝐶𝐶𝐶 = 75 ± 2.5758 × 0.70972                                                               [1]
= (4.83857 , 8.49477)                                                                                          [1]

(c)
Under the Null Hypothesis, 𝑣𝑣 = 10 , and:

v_hat ~= N ( 10 , (10^2 * ( 10 – 1 )) / n ) = N ( 10 , 900/n )
                  102 (10−1)              900
𝑣𝑣� ∻ 𝑁𝑁 �10,                  � = 𝑁𝑁 �10, 𝑛𝑛 �                                                                [1]
                      𝑛𝑛


Z = ( v_hat – 10 ) / sqrt(900/n) ~= N(0,1)
     𝑣𝑣�−10
𝑍𝑍 = 900 ∻ 𝑁𝑁(0,1)                                                                                             [1]
       �
           𝑛𝑛


With the given sample data from the question:

Z = ( 500/75 – 10 ) / sqrt( 900 / 500 ) = -2.48452
       500
           −10
𝑍𝑍 =   75
          900
                 = −2.48452                                                                                    [1]
        �
          500


This is a (lower) one-sided test.
Critical value at 1% is -2.32635                                                                               [½]

-2.48452 < critical value of -2.32635                                                                          [½]

Therefore reject 𝐻𝐻0 at the 1% level (and conclude 𝑣𝑣 < 10 ).                                                  [1]

(Alternatively, work out the p-value of the test instead. P(Z < -2.48452) = 0.00649, and
therefore reject 𝐻𝐻0 as above)
                                                                                    [Total 21]



CS1A S2022                                                                      © Institute and Faculty of Actuaries
               CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report



  This question was not well answered.

  In part (i), many answers provided the value of the probability density function, instead of
  the required cumulative distribution function. Also, a number of answers failed to use the
  uniform distribution given in the question.

  In part (ii)( c), a common error was to use the standard error from part (ii)(a).



Q9
(i)
The plot exhibits a positive linear relationship between the price and the living space of a
property however                                                                             [1]
There appear to be possible outliers (that could affect inferences).                         [1]

(ii)
                             1,519.6322
𝑆𝑆𝑥𝑥𝑥𝑥 = 11,583.92 −            200
                                          = 37.513                                                      [1]

                                      1,519.632×2,616.206
         𝑆𝑆𝑥𝑥𝑥𝑥 = 19,908.94 −                200
                                                            = 30.588                                    [1]

      30.588
𝛽𝛽̂ = 37.513 = 0.815                                                                                   [1½]
𝛼𝛼� = 13.081 − 7.598 × 0.815 = 6.889                                                                   [1½]

The fitted regression line is 𝑦𝑦� = 6.889 + 0.815𝑥𝑥                                                     [1]

(iii)
                            2,616.2062
𝑆𝑆𝑦𝑦𝑦𝑦 = 34,283.44 −                     = 60.771                                                       [1]
                               200

Coefficient of determination:

           30.588 2
𝑅𝑅 2 = 37.513×60.771 = 0.41.                                                                            [1]


(iv)
         1
𝜎𝜎� 2 = 198 (60.771 − 30.5882 /37.513) = 0.181                                                          [1]

                  0.181 1/2
𝑠𝑠. 𝑒𝑒. �𝛽𝛽̂ � = �37.513�     = 0.069                                                                   [½]

95% confidence interval for 𝛽𝛽 is 𝛽𝛽̂ ± �𝑡𝑡0.025,198 × 𝑠𝑠. 𝑒𝑒. (𝛽𝛽̂ )�
i.e. 0.815 ± (1.960 × 0.069)                                                                            [1]

(The calculation above is approximating the percentage points for 𝑡𝑡198 with 𝑡𝑡∞ .
Using R, the percentage point is 𝑡𝑡198 = 1.972)



CS1A S2022                                                               © Institute and Faculty of Actuaries
            CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


So 95% confidence interval is (0.680, 0.950)                                                           [½]

(Alternative solution: Using the exact t_198 value (1.972) gives a confidence interval of
(0.678 , 0.952))

(v)
The 95% two-sided confidence interval in (iv) does not contain the value 1,                            [½]
so the two-sided test conducted at the 5% level results in H0 being rejected                           [½]

(vi)
Estimate of expected price = 6.889 + 0.815 × log (1930) = 13.055                                       [½]

                                 (log (1930)−7.598 )2           1/2
                           1
St. error of estimate =��200 +                          � 0.181�      = 0.030                          [1]
                                       37.513


𝑡𝑡0.025,198 = 1.960 so confidence interval is 13.055 ± (1.960 × 0.03),
i.e. (12.996, 13.114)                                                                                  [1]

Therefore CI for the price is (440647.3, 495835.7)                                                     [½]

(Alternative solution : Using the exact t_198 (1.972) value gives a confidence interval of
(12.995 , 13.114) and a confidence interval for the price is (440131.9 , 485737.8).)

(vii)
                                      (log (1930)−7.598 )2            1/2
                                1
St. error of estimate =��1 + 200 +                           � 0.181�       = 0.427                   [1½]
                                            37.513


𝑡𝑡0.025,198 = 1.960 so confidence interval for the log price is 13.055 ± (1.960 × 0.427),
i.e. (12.218, 13.892)                                                                     [1]

Therefore CI for the price is (202399.8, 1079490.8                                                     [½]

(Alternative solution:
Using the exact t_198 (1.972) value gives a confidence interval of (12.213 , 13.895) and a
confidence interval for the price is (201458.3 , 1083053.4).)

(viii)
The variance for the predicted value is higher                                                         [½]
Therefore, the CI is much wider (and contains the expected CI).                                        [½]

The predicted CI accounts for both the uncertainty in estimating the population mean and the
random variation of the individual values .                                              [1]

(ix)
The coefficient of determination for the simple linear regression model in (iii) is lower than
that of the multiple linear regression model.                                                [1]

The year a property is built might be a good predictor for a property price.                           [½]

Additional metrics e.g. AIC (OR adjusted R-Squared) should be used to confirm this                     [½]

CS1A S2022                                                              © Institute and Faculty of Actuaries
           CS1A – Actuarial Statistics – Core Principles – September 2022 - Examiners’ report


                                                                                                [Total 24]

 Generally answered well by most candidates. Common errors involved errors in
 numerical calculations (e.g. in standard errors).

 In part (iv) and later parts, full credit was given where appropriate, if the provided
 answers used the exact percentage point of 𝑡𝑡198 distribution.

                                                                                    [Paper Total 100]

                       END OF EXAMINERS’ REPORT




CS1A S2022                                                           © Institute and Faculty of Actuaries
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


---
normalized_id: cs2-2022-april-examiner-report-iandf-cs2-paper-a-202204-examiner-report
exam_code: CS2
year: 2022
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2A/Apr22/IandF_CS2_Paper A_202204_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2022-april-examiner-report-iandf-cs2-paper-a-202204-examiner-report

   INSTITUTE AND FACULTY OF ACTUARIES



                         EXAMINERS’ REPORT


                                         April 2022

             CS2 – Risk Modelling and Survival Analysis
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
particularly the open-ended questions in the Specialist Advanced (SA) and Specialist
Principles (SP) subjects, the report may contain more points than the Examiners will expect
from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
July 2022



CS2A A2022                                                        © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked

   The aim of the Risk Modelling and Survival Analysis Core Principles subject is to
   provide a grounding in mathematical and statistical modelling techniques that are of
   particular relevance to actuarial work, including stochastic processes and survival models.

   Some of the questions in this paper admit alternative solutions from those presented in
   this report, or different ways in which the provided answer can be determined. All
   mathematically correct and valid alternative solutions received credit as appropriate.

   In cases where the same error was carried forward to later parts of the answer, candidates
   were given full credit for the later parts.

   In higher order skills questions, where comments were required, well-reasoned comments
   that differed from those provided in the solutions also received credit as appropriate.

   Candidates are advised to take careful note of all instructions that are provided with the
   exam in order to maximise their performance in future CS2A examinations. The
   instructions applicable to this diet can be found at the beginning of the solutions
   contained within this document.


   B. Comments on candidate performance in this diet of the examination.

   Performance was generally satisfactory. Most candidates demonstrated a reasonable
   understanding and application of core topics in mathematical and statistical modelling
   techniques.

   The most poorly answered question on this paper was Question 9, on Time Series. Lack
   of time may have affected candidates’ performance on this question. Candidates are
   reminded of the need to plan their time so that they are able to make a reasonable attempt
   at all the questions.

   Question 2, on Exposed to Risk, was also relatively poorly answered. Candidates are
   reminded that examination questions will often test their ability to apply the concepts in
   the Core Reading to unfamiliar situations.

   It is important that candidates heed all of the instructions provided with the examination
   paper. A number of candidates lost marks because they did not include workings for
   numerical questions despite being forewarned about this in the instructions.

   Higher order skills questions were generally answered poorly. Candidates should
   recognise that these are generally the questions which differentiate those candidates with
   a good grasp and understanding of the subject.

   The comments that follow the questions in the marking schedule below, concentrate on
   areas where candidates could have improved their performance. Candidates approaching
   the subject for the first time are advised to concentrate their revision in these areas.




CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


   C. Pass Mark

   The Pass Mark for this exam was 57
   1175 presented themselves and 452 passed.


Solutions for Subject CS2A – April 2022

Q1
(i)
The two-factor Lee-Carter model may be written:
ln m(x,t) = a_x + b_x * k_t + epsilon(x, t)                                                            [1]
where:
m(x,t) is the central mortality rate at age x in year t                                   [1]
a_x describes the general shape of mortality at age x / a_x is the mean of the time-
averaged logarithms of the central mortality rate at age x                                [½]
b_x measures the change in the rates in response to an underlying time trend in the
level of mortality of k_t.                                                                [½]
epsilon(x, t) are independently distributed normal random variables with means of
zero and some variance to be estimated.                                                   [½]
                                                               [Marks available 3½, maximum 3]
(ii)
k parameters
The lack of regularity by calendar year is likely to be a genuine feature of the
underlying process                                                                        [1]
Mortality is subject to fluctuations from year to year, due to factors such as epidemics
and harsh winters                                                                         [½]
If the k parameters are smoothed using penalised spline regression and the penalty is
used to project future mortality, then the projection is likely to place too much weight
on the last few years of data                                                             [½]

a parameters
The a parameters represent the general shape of the mortality rates, which would be
expected to vary in a regular manner with age                                                          [½]
This would suggest that smoothing might be required                                                    [½]
However, in this case, the fact that the fitted mortality rates vary regularly with age
suggests that the a parameters also vary regularly enough to obviate the need for
smoothing                                                                                              [½]
Smoothing of the a parameters would be more likely to be necessary for a small data set                [½]

b parameters
The b parameters represent the variation of mortality improvements with age, which
would be expected to be regular                                                                        [½]
This would suggest that smoothing might be required                                                    [½]
Although the fitted mortality rates vary regularly with age in this case, it cannot be
assumed that the b parameters also vary regularly enough to obviate the need for
smoothing                                                                                              [½]
The b parameters require a higher volume of data to estimate reliably than the a
parameters, increasing the likely need for smoothing                                                   [½]


CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


If the b parameters are not smoothed, then the projected mortality rates at
successive ages may cross over in the later years of the projection, which is not
intuitively reasonable                                                                  [½]
                                                             [Marks available 6½, maximum 3]
                                                                                    [Total 6]

 Part (i) was very well answered.

 Part (ii) was extremely poorly answered. Many candidates commented on the advantages
 and disadvantages of smoothing in general, without specific reference to the model in the
 question. Alternative comments that were clear, distinct and relevant to the context of the
 question were also awarded credit.



Q2
Let d_x = the total number of deaths aged x last birthday over the period
1st January 2017 to 1st January 2020                                                                   [½]
d_x = deaths aged x last birthday in 2017
     + deaths aged x last birthday in 2018
     + deaths aged x last birthday in 2019                                                             [½]
Crude force of mortality (mu_x+1/2)^hat = d_x / (c_E_x)                                                [½]
where c_E_x is the central exposed to risk corresponding to the deaths data                            [½]
Since deaths are classified by age last birthday at date of death,
c_E_x = INT(0,3):[P(x,1/1/2017+t)] dt                                                                  [½]
where P(x, t) denotes the population aged x last birthday measured at time t                           [½]

This integral can be broken into the relevant four pieces as follows:
c_E_x
= INT(0,1/2):[P(x,1/1/2017+t)] dt + INT(1/2,3/2):[P(x,1/1/2017+t)] dt
+ INT(3/2,5/2):[P(x,1/1/2017+t)] dt + INT(5/2,3):[P(x,1/1/2017+t)] dt                                  [½]
Assuming that population varies linearly between census dates                                          [½]
we can use the trapezium rule which gives:                                                             [½]
c_E_x
= (1/4) * (P(x,1/1/2017) + P(x,30/6/2017))
     + (1/2) * (P(x,30/6/2017) + P(x,30/6/2018))
     + (1/2) * (P(x,30/6/2018) + P(x,30/6/2019))
     + (1/4) * (P(x,30/6/2019) + P(x,1/1/2020))                                                        [1]
But P(x,1/1/2017) and P(x,1/1/2020) are unknown. They can be approximated by linear
interpolation as follows:
P(x,1/1/2017) = (1/2) * (P(x,30/6/2016) + P(x,30/6/2017))                                              [½]
P(x,1/1/2020) = (1/2) * (P(x,30/6/2019) + P(x,30/6/2020))                                              [½]

Therefore,
c_E_x
= (1/8) * P(x,30/6/2016) + (7/8) * P(x,30/6/2017) + P(x,30/6/2018)
 + (7/8) * P(x,30/6/2019) + (1/8) * P(x,30/6/2020)                                                   [½]
                                                                                                 [Total 7]




CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report



 This question was poorly answered. Some candidates may not previously have
 encountered a question on Exposed to Risk where the census dates, between which the
 trapezium rule was to be applied, were different from the ends of the annual periods over
 which mortality rates were to be estimated. Candidates are reminded that examination
 questions will often test their ability to apply the concepts in the Core Reading to
 unfamiliar situations.



Q3
(i)
Generator matrix A of Markov jump process =
            U                  Y                          R                    S
   U     – 11 / 40            1/8                       1 / 20               1 / 10
   Y         0             – 17 / 60                    1 / 12                1/5
   R         0                 0                           0                    0
   S         0                 0                           0                    0
                                                                                                        [2]

(ii)
dP_UU (t) / dt = (– 11 / 40) * P_UU (t)                                                                 [1]
P_UU (t) = exp ((– 11 / 40) t) * constant                                                               [½]
   = exp ((– 11 / 40) t) since P_UU (0) = 1 q                                                           [½]

At the end of the match t = 3/2,                                                                        [½]
so P_UU (3/2) = exp (−33/80) = 66.20%                                                                   [½]

(iii)
Prob[sent off without being cautioned]
= INT(0,3/2):[P_UU (s) * (1 / 20)] ds                                                                [1]
= INT(0,3/2):[exp ((– 11 / 40) s) * (1 / 20)] ds                                                     [½]
= [-(2/11) * exp ((– 11 / 40) s)]:(0,3/2)                                                            [1]
= (2/11) * (1 – exp (−33/80))                                                                        [1]
= 6.15%                                                                                              [½]
                                                                                                 [Total 9]

 Parts (i) and (ii) were very well answered.

 Answers to part (iii) were generally satisfactory. Candidates who calculated P_UR(3/2)
 were not awarded credit since this does not take account of the requirement that the
 player must not have been cautioned before being sent off.



Q4
(i)
exp(Beta_1 + Beta_2) /                                                                                  [½]
(100 * [exp(Beta_1 + 2 * Beta_2) + exp(Beta_1) + exp(Beta_2)
+ exp(2 * Beta_2) + 1] + 99 * exp(Beta_1 + Beta_2))                                                    [2½]



CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


Where:
Beta_1 = coefficient for the Medication Indicator covariate                                            [½]
Beta_2 = coefficient for the Treatment Delay Indicator covariate                                       [½]

(ii)
Treating with the medication increases the rate at which patients recover                [½]
by exp (0.15) – 1 = 16.2%                                                                [1]
Given that the coefficient of the Medication Indicator covariate is not within two
standard errors of the estimated coefficient                                             [½]
we have sufficient evidence to reject the hypothesis that the medication has no impact
on the recovery rate                                                                     [½]
Delaying treatment reduces the rate at which patients recover                            [½]
by around 2% each day (1 – exp (-0.02))                                                  [1]
However, given that the coefficient of the Treatment Delay Indicator covariate is
within two standard errors of the estimated coefficient                                  [½]
we have insufficient evidence to reject the hypothesis that delaying the medication
has no impact on the recovery rate                                                       [½]
                                                                                     [Total 9]

 Part (i) was poorly answered. Common errors were:
    • Including a separate covariate for treatment after the second day, whereas the
         question specifies that this scenario is to be dealt with by setting the covariate X_2
         equal to 2.
    • Using a numerator that did not reflect the fact that the second individual
         recovering had X_1 = X_2 = 1.
    • Using a denominator that did not reflect the fact that the first individual
         recovering had X_1 = X_2 = 1, so that the term exp(Beta_1 + Beta_2) should have
         a coefficient of 99 rather than 100.

 Part (ii) was very poorly answered. Many candidates lost marks for:
    • Referring to the impacts of the covariates as impacts on the hazard rate, without
         specifying what the hazard rate represents in the context of the question, i.e. the
         recovery rate.
    • Not quantifying the percentage impacts on the recovery rate implied by the
         parameter estimates.
    • Stating that the covariate X_1 is significant and X_2 is not significant without
         justifying this conclusion by reference to the parameter estimates and their
         standard errors.

 Alternative comments that were clear, distinct and relevant to the context of the question
 were also awarded credit.



Q5
(i)
1 in 200 (or 0.5%) is a correct estimate of the probability of both banks becoming
insolvent IF the two insolvency events are independent
(0.1*0.05 = 0.5%)                                                                                      [1]



CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


If the two insolvency events were perfectly positively dependent / correlated then
the correct estimate would take its maximum value of min(10%, 5%) = 5%                     [½]
If the two insolvency events were perfectly negatively correlated then the correct
estimate would take its minimum value of max(10% + 5% -1, 0) = 0%                          [½]
It is most likely that the true estimate is greater than 0.5%                              [½]
as it is very likely that the insolvency of one of the “very large” banks would
increase the probability of insolvency of the other “very large” bank                      [½]
because both banks are likely to be impacted by wider economic conditions                  [½]
and the strength of this positive association is likely to increase during times of
financial crisis or poor economic conditions                                               [½]
We need to understand more of the level of dependency / correlation before we
can determine a more robust estimate                                                       [1]
                                                                 [Marks available 5, maximum 4]

(ii)
C(u_1, …, u_4) = psi^[-1] ( psi(u_1) + psi(u_2) + psi(u_3) + psi(u_4))                                 [1]
Where psi^[-1] is the pseudo-inverse function of the generator function psi                            [1]
Now, psi^[-1] (t) = (lambda * t + 1)^(-1 / lambda)                                                     [1]

Here,
t = (u_1^(-lambda) – 1 + u_2^(-lambda) – 1 + u_3^(-lambda) – 1
+ u_4^(-lambda) – 1) / lambda                                                                          [1]

Therefore,
C(u_1, …, u_4) = (u_1^(-lambda) + u_2^(-lambda) + u_3^(-lambda)
     + u_4^(-lambda) – 3)^(-1 / lambda)                                                                [1]
Using the values from the question:
C(u_1, …, u_4)
= (0.1^(-6) + 0.05^(-6) + 0.03^(-6) + 0.08^(-6) – 3)^(-1 / 6)                                        [1]
= 2.976%                                                                                             [1]
                                                                                               [Total 11]

 Part (i) was poorly answered. Most candidates recognised that the probability of 1 in 200
 had been obtained by assuming independence. Many candidates identified reasons why
 the assumption of independence might not hold, but many did not state that the true
 probability would be expected to be greater than 1 in 200. Few candidates explained that
 the strength of the positive association is likely to increase under poor economic
 conditions, making a copula with positive tail dependence appropriate. Alternative
 comments that were clear, distinct and relevant to the context of the question were also
 awarded credit.

 Part (ii) was well answered.



Q6
(i)
Including a very large number of covariates in the model could introduce over-fitting
into the model                                                                                         [½]



CS2A A2022                                                              © Institute and Faculty of Actuaries
       CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


leading to identification of patterns specific to the training data that do not generalize
to other data sets                                                                                      [½]
and hence to poor prediction accuracy on other data sets                                                [½]
Too many covariates could cause the model to become complex and
computationally expensive to run                                                                        [1]
The model might become unstable

OR:
The parameter estimates of the model might have high variances                         [½]
due to high correlation among the variables                                            [½]
In some cases, the optimisation of the likelihood function might not converge          [1]
                                                            [Marks available 4½, maximum 3]

(ii)
EITHER:
When lambda = 0, the penalised log-likelihood reduces to the standard log-likelihood                    [1]
Too small a value of lambda can therefore lead to the problems associated with using
just the maximum likelihood estimates                                                                   [1]

OR:
Any 2 marks from the marking schedule for part (i), with reference to small values
of lambda                                                                                               [2]

THEN:
Too large a value of lambda means only gross effects of the covariates will be
included in the final model (underfitting) and many important effects of the covariates
on the outcome may be missed                                                             [1]
As lambda tends to infinity, the parameter estimates tend to zero                        [½]
and so the model captures no relationships at all in the limit                           [½]
                                                               [Marks available 4, maximum 3]

(iii)
If a = 0, then the model is a LASSO regression model                                                    [1]
If a = 1, then the model is a ridge regression model.                                                   [1]

(iv)
The actuary should use a higher value of a for data set B                                   [1]
For data set A, the parameters of lower significance will then be forced to zero, since
the penalty P will outweigh the improvement in log-likelihood from including them           [1]
For data set B, non-zero values will be fitted for the parameters of lower significance
as well as those of higher significance, since the squaring of these parameters in the
function P results in only a small penalty                                                  [1]
                                                                                      [Total 11]

 Many candidates did not attempt this question and it was therefore poorly answered
 overall, apart from part (iii). Candidates are reminded of the need to be familiar with all
 aspects of the syllabus.




CS2A A2022                                                               © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report



 In part (i), alternative comments that were clear, distinct and relevant to the context of the
 question were also awarded credit.

 Part (iv) was particularly poorly answered. Of those candidates who correctly identified
 that a higher value of a should be used for data set B, few gave an explanation
 demonstrating an understanding of the issues involved. Partial marks were awarded to
 candidates who demonstrated some understanding but reached the wrong conclusion.



Q7
(i)
For the sample mean we have
lambda_hat / (alpha_hat – 1) = 10,000                                                                  [1]
and for the sample variance we have
(alpha_hat * lambda_hat^2) / (((alpha_hat – 1)^2) * (alpha_hat – 2))
= 15,000^2                                                                                             [1]

Substituting gives
(alpha_hat * 10,000^2) / (alpha_hat – 2) = 15,000^2                                                    [1]
Hence, alpha_hat = 3.6                                                                                 [1]
       And, lambda_hat = 10,000 * (alpha_hat – 1) = 26,000                                             [1]

(ii)
Let X denote the individual claim amount
Then, we have
E[X^2] = var[X] + E^2[X] = 15,0002 + 10,0002 = 3.25 * 10^8                                             [1]

Using the formula on page 14 of the Tables,
E[X^3]
= (GAMMA(alpha_hat – 3) * GAMMA(1 + 3) * lambda_hat ^3)
/ GAMMA(alpha_hat)                                                                                     [1]
= (3! * lambda_hat^3) / ((alpha_hat-1)*(alpha_hat-2)*(alpha_hat-3))                                    [1]
= (6 * 26,000^3) / ((2.6)*(1.6)*(0.6))                                                                 [½]
= 4.225 * 10^13                                                                                        [½]

Therefore, using the formulae on page 16 of the Tables,
var[S] = 5 * 3.25 * 10^8 = 1.625 * 10^9                                                              [1]
Third central moment of S = 5 * 4.225 * 10^13 = 2.1125 * 10^14                                       [1]
                                                                                               [Total 11]

 Part (i) was the best answered question part on the whole paper.

 Answers to part (ii) were generally satisfactory, with most candidates determining the
 variance correctly but making incorrect or incomplete attempts to determine the third
 central moment. Candidates who evaluated the gamma functions using R or Excel, rather
 than using the recurrence relation GAMMA(x + 1) = x * GAMMA(x), were not penalised




CS2A A2022                                                              © Institute and Faculty of Actuaries
       CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


Q8
(i)
The Poisson assumption for the distribution of the number of customers joining the
queue might be violated e.g. if customers join in groups rather than individually          [1]
The Poisson assumption for the distribution of the number of customers being
served might be violated e.g. if there is a lower limit on the time taken for a customer
to be served                                                                               [1]
The assumption of time-homogeneity might be violated e.g. if more customers join
the queue at certain times of day                                                          [1]
Customers might leave the queue without being served                                       [1]
In practice, customers will join and leave the queue continuously rather than at
integer times                                                                              [1]
In practice, there will not be a fixed upper limit to the number of customers in
the queue                                                                                  [1]
                                                                 [Marks available 6, maximum 2]

(ii)
Transition matrix, A, for customers joining the queue:
                 0                         1                                     2
   0    exp(-0.5) = 0.60653 0.5*exp(-0.5) = 0.30327                 1–0.60653–0.30327 = 0.09020
   1             0               exp(-0.5) = 0.60653                    1–0.60653 = 0.39347
   2             0                         0                                     1
                                                                                                        [3]
Transition matrix, B, for customers leaving the queue:
                       0                            1                                 2
  0                    1                            0                                 0
  1         1–0.36788 = 0.63212             exp(-1) = 0.36788                         0
  2    1–0.36788–0.36788 = 0.26424         1*exp(-1) = 0.36788                exp(-1) = 0.36788
                                                                                                        [3]

Hence, transition matrix for N_t = (A)(B):                                                              [1]
                  0                           1                                    2
 0             0.82207                     0.14475                              0.03318
 1             0.48737                     0.36788                              0.14475
 2             0.26424                     0.36788                              0.36788
                                                                                                        [1]

(iii)
The probabilities pi(i) for the stationary distribution satisfy:
0.82207 * pi(0) + 0.48737 * pi(1) + 0.26424 * pi(2) = pi(0)                  (1)
0.14475 * pi(0) + 0.36788 * pi(1) + 0.36788 * pi(2) = pi(1)                  (2)
0.03318 * pi(0) + 0.14475 * pi(1) + 0.36788 * pi(2) = pi(2)                  (3)                        [1]
Also pi(0) + pi(1) + pi(2) = 1                                               (4)                        [1]

Substituting (4) into (1) and (2):
0.82207 * (1 – pi(1) – pi(2)) + 0.48737 * pi(1) + 0.26424 * pi(2)
= 1 – pi(1) – pi(2)                                                                                     [½]
0.14475 * (1 – pi(1) – pi(2)) + 0.36788 * pi(1) + 0.36788 * pi(2) = pi(1)                               [½]

Giving:


CS2A A2022                                                               © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


0.66530 * pi(1) + 0.44217 * pi(2) = 0.17793                (5)                                         [1]
0.77687 * pi(1) – 0.22313 * pi(2) = 0.14475                (6)                                         [1]

From 0.22313 * (5) + 0.44217 * (6), 0.49196 * pi(1) = 0.10371                                          [½]
i.e. pi(1) = 0.2108                                                                                    [½]

Substituting in (5), 0.66530 * 0.2108 + 0.44217 * pi(2) = 0.17793                                      [½]
i.e. pi(2) = 0.0852                                                                                    [½]

Substituting in (4), pi(0) = 1 – 0.2108 – 0.0852 = 0.7040                                              [1]
Hence, the required stationary distribution is (0.7040, 0.2108, 0.0852)
                                                                                               [Total 18]

 Part (i) was surprisingly poorly answered, despite the fact that a wide range of limitations
 would have gained credit. Many candidates stated assumptions of the model, with no
 reason given as to why they may be violated, which did not constitute limitations.
 Candidates are reminded of the need to read the question carefully. Alternative comments
 that were clear, distinct and relevant to the context of the question were also awarded
 credit.

 Part (ii) was very poorly answered. Many candidates obtained the correct probabilities
 from the Poisson distributions but were unable to insert the probabilities into the correct
 cells of the transition matrices. Many candidates also failed to recognise that, since the
 rows of a transition matrix must sum to 1, the last column of the matrix A and the first
 column of the matrix B should be calculated as 1 less the sum of the other columns.

 Part (iii) was fairly well answered, although some candidates lost marks for not showing
 sufficient workings to demonstrate that a valid method had been used.



Q9
(i)
EITHER:
E[(X_t – pX_t-1)^2] = E[(e_t + be_t-1 - p(e_t-1 + be_t-2))^2]                                          [½]
= E[(e_t + (b - p)e_t-1 – bpe_t-2)^2]                                                                  [½]
= E[e_t^2] + (b - p)^2E[(e_t-1)^2] + b^2p^2E[(e_t-2)^2]                                                [1]
where the cross terms vanish since the e_t are uncorrelated                                            [½]

OR:
E[(X_t – pX_t-1)^2] = var[X_t – pX_t-1]                                                                [½]
since E[X_t – pX_t-1] = 0                                                                              [½]
= var[e_t + be_t-1 – p(e_t-1 + be_t-2)]                                                                [½]
= var[e_t + (b – p)e_t-1 – bpe_t-2]                                                                    [½]
= var[e_t] + (b – p)^2var[e_t-1] + b^2p^2var[e_t-2]                                                    [½]

THEN:
Hence,
E[(X_t – pX_t-1)^2] = (1 + (b - p)^2 + b^2p^2) sigma^2                                                 [1]
and we need to minimise f (p) = 1 + (b - p)^2 + b^2p^2.                                                [1]


CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


df (p)/dp = -2(b - p) + 2b^2p                                                                          [½]
which is equal to zero at p = b / (1 + b^2).                                                           [1]
Since d^2f (p)/dp^2 = 2(1 + b^2) > 0,                                                                  [½]
we have a minimum.                                                                                     [½]
Hence the required value of p is p = b / (1 + b^2)

(ii)
When b = 1, p = 1 / (1 + 1^2) = ½                                                                      [½]
This is stating that the best linear predictor (in mean squared error terms) of X_t given
X_t-1 is ½ X_t-1                                                                                       [1]
This is intuitively reasonable                                                                         [½]
since the contribution to X_t-1 from e_t-1 will be reflected in X_t, but the contribution
from e_t-2 will not                                                                                    [1]

(iii)
EITHER:
E[(X_t – qX_t-1 – rX_t-2)^2]
= E[(e_t + e_t-1 – q(e_t-1 + e_t-2) – r (e_t-2 + e_t-3))^2]                                            [½]
= E[(e_t + (1 – q)e_t-1 – (q + r)e_t-2 – re_t-3)^2]                                                    [½]
= E[e_t^2] + (1 – q)^2E[(e_t-1)^2] + (q + r)^2E[(e_t-2)^2] + r^2E[(e_t-3)^2]                           [1]
where the cross terms vanish since the e_t are uncorrelated                                            [½]

OR:
E[(X_t – qX_t-1 – rX_t-2)^2]
= var[X_t – qX_t-1 – rX_t-2]                                                                           [½]
since E[X_t – qX_t-1 – rX_t-2] = 0                                                                     [½]
= var[e_t + e_t-1 – q(e_t-1 + e_t-2) – r(e_t-2 + e_t-3)]                                               [½]
= var[e_t + (1 – q)e_t-1 – (q + r)e_t-2 – re_t-3]                                                      [½]
= var[e_t] + (1 – q)^2var[e_t-1] + (q + r)^2var[e_t-2] + r^2var[e_t-3]                                 [½]

THEN:
Hence, E[(X_t – qX_t-1 – rX_t-2)^2]
= (1 + (1 - q)^2 + (q + r)^2 + r^2) sigma^2                                                            [1]
and we need to minimise g (q, r) = 1 + (1 - q)^2 + (q + r)^2 + r^2                                     [½]
The partial derivative of g with respect to q is -2(1 – q) + 2(q + r)                                  [1]
and the partial derivative with respect to r is 2(q + r) + 2r                                          [1]
Equating the partial derivatives to zero gives 2q + r – 1 = 0, q + 2r = 0                              [1]
Solving these equations simultaneously gives q = 2/3, r = -1/3                                         [1]

ALTERNATIVE SOLUTION:
r is the PACF at lag 2                                                                                 [½]
Using the formula on page 41 of the Tables,
r = -(1 – b^2) b^2 / (1 – b^6)                                                                         [½]
i.e. r = -b^2 / (1 + b^2 + b^4).                                                                       [½]

Substituting b = 1 gives r = -1/3.                                                                     [½]
E[(X_t – qX_t-1 – rX_t-2)^2]
= E[(e_t + e_t-1 – q(e_t-1 + e_t-2) + 1/3 (e_t-2 + e_t-3))^2]                                          [½]
= E[(e_t + (1 – q)e_t-1 – (q – 1/3)e_t-2 + 1/3 e_t-3)^2]                                               [½]
= E[e_t^2] + (1 – q)^2E[(e_t-1)^2] + (q – 1/3)^2E[(e_t-2)^2]


CS2A A2022                                                              © Institute and Faculty of Actuaries
      CS2A - Risk Modelling and Survival Analysis - Core Principles - April 2022 - Examiners’ report


+ 1/9 E[(e_t-3)^2]                                                                                     [1]

where the cross terms vanish since the e_t are uncorrelated                                            [½]
= (1 + (1 - q)^2 + (q – 1/3)^2 + 1/9) sigma^2                                                          [1]
and we need to minimise g(q) = 1 + (1 - q)^2 + (q – 1/3)^2 + 1/9.                                      [½]
dg(q)/dq = -2(1 – q) + 2(q – 1/3) = 4q – 8/3                                                           [½]
which is equal to zero at q = 2/3.                                                                     [½]
Since d^2g(q)/dq^2 = 4 > 0,                                                                            [½]
we have a minimum.                                                                                     [½]
Hence q = 2/3 and r = -1/3.
                                                                                               [Total 18]

 Part (i) was poorly answered. Many candidates used E(X_t * X_t-1) = E(X_t) * E(X_t-1),
 which is not correct since X_t and X_t-1 are correlated. Many candidates also failed to
 check that the stationary point they derived was a minimum. Lack of time may have
 affected candidates’ performance here. Since the command verb was “Derive”,
 candidates who recognised that p is the PACF at lag 1 and used the formula on page 41 of
 the Tables received very few marks.

 Part (ii) was the most poorly answered question part on the whole paper. Of those
 candidates who obtained an expression for p in part (i), most evaluated it correctly at b =
 1, but very few provided comments demonstrating an understanding of the significance of
 their result. Alternative comments that were clear, distinct and relevant to the context of
 the question were also awarded credit.

 Part (iii) was very poorly answered. Many candidates who gave satisfactory answers to
 part (i) received few or no marks on part (iii), despite the similarities between the two
 parts. Lack of time may again have affected candidates’ performance here.

                                                                                     [Paper Total 100]

                        END OF EXAMINERS’ REPORT




CS2A A2022                                                              © Institute and Faculty of Actuaries


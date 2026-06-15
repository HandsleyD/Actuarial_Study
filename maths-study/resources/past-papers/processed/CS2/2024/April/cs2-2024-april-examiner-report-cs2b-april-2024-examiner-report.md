---
normalized_id: cs2-2024-april-examiner-report-cs2b-april-2024-examiner-report
exam_code: CS2
year: 2024
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2B/Apr24/CS2B_April 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-april-examiner-report-cs2b-april-2024-examiner-report

EXAMINERS’ REPORT
CS2 Risk Modelling and Survival Analysis
Paper B
Core Principles




                                  April 2024
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


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

For some candidates, this may be their first attempt at answering an examination using open
books and online. The Examiners expect all candidates to have a good level of knowledge
and understanding of the topics and therefore candidates should not be overly dependent on
open book materials. In our experience, candidates that spend too long researching answers
in their materials will not be successful either because of time management issues or because
they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports. Great caution must be
exercised in doing so because each exam question is unique. As with all professional
examinations, it is insufficient to repeat points of principle, formula or other text book
works. The examinations are designed to test “higher order” thinking including candidates’
ability to apply their knowledge to the facts presented in detail, synthesise and analyse their
findings, and present conclusions or advice. Successful candidates concentrate on answering
the questions asked rather than repeating their knowledge without application.


The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
June 2024




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


   A. General comments on the aims of this subject and how it is marked
   The aim of the Risk Modelling and Survival Analysis subject is to provide a grounding in
   mathematical and statistical modelling techniques that are of particular relevance to
   actuarial work, including stochastic processes and survival models.
   Candidates are reminded of the need to include the R code, that they have used to
   generate their solutions, together with the main R output produced, in their answer script.
   Where the R code was missing from a particular question part, no marks were awarded
   even if the output (e.g. a graph) was included. Partial credit was awarded in the cases
   where the R code was included but the R output was not. The marking schedule below
   sets out potential R code solutions for each question. Other appropriate R code solutions
   gained full credit unless one specific approach had been explicitly requested in the
   question paper.
   In cases where the same error was carried forward to later parts of the answer, candidates
   were given full credit for the later parts.
   In higher order skills questions, where comments were required, well-reasoned comments
   that differed from those provided in the solutions also received credit as appropriate.
   B. Comments on candidate performance in this diet of the examination.
   Performance in the B paper with R programming continues to improve slightly session by
   session. In particular the majority of candidates demonstrate an ability to perform
   statistical and modelling calculations accurately in R. Many candidates would be able to
   improve their marks in this paper by paying more attention to the interpretation of these
   results and in general it is the parts of questions that require commentary on assumptions
   or results rather than the calculations themselves that are poorly answered. In this diet of
   the examination examples included consideration of censoring in non-parametric survival
   models and application of a penalty function in multiple regression. However the syllabus
   of CS2 is extensive and similar commentary type questions could be asked in time series,
   extreme value theory or many other areas of the syllabus in future assessments.
   Candidates are reminded that this assessment is not primarily an examination of R
   programming skill but rather of competency in statistics and modelling using R to
   generate results for interpretation.
   Candidates are also reminded that these longer R programming questions do require a
   careful reading of the problem scenario set out in the question. Many candidates lost
   marks in this session by answering a simpler problem with just a Gamma claims
   distribution rather than the actual question that had a compound distribution with both a
   Gamma and a binomial component.
   C. Pass Mark
   The Pass Mark for this exam was 55
   1286 presented themselves and 463 passed.



CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


Solutions for Subject CS2B – April 2024

Q1
(i)
policies<-10                                                                                            [½]
qqii<-seq(.12,by=.02,length.out = policies)                                                             [½]
qqii                                                                                                    [½]
[1] 0.12 0.14 0.16 0.18 0.20 0.22 0.24 0.26 0.28 0.30                                                   [½]
(ii)
mean_theory<-function(prob_vec,gamma1_vec,gamma2_vec){                                                   [1]
sum(prob_vec*gamma1_vec/gamma2_vec)                                                                     [½]
}
sd_theory<-function(prob_vec,gamma1_vec,gamma2_vec){
  (sum(prob_vec*gamma1_vec/gamma2_vec^2+prob_vec*(1-
prob_vec)*(gamma1_vec/gamma2_vec)^2))^0.5                                                              [1½]
}
mean_theory(qqii,rep(10,policies),rep(2,policies))                                                      [½]
[1] 10.5                                                                                                [½]
sd_theory(qqii,rep(10,policies),rep(2,policies))                                                        [½]
[1] 6.774954                                                                                            [½]
(iii)
set.seed(500)                                                                                           [½]
sims_ind<-1000000                                                                                       [½]
b<-matrix(0,nrow=policies,ncol=sims_ind)                                                                [½]
c<-matrix(0,nrow=policies,ncol=sims_ind)                                                                [½]
for(tt in 1:policies){                                                                                  [½]
b[tt,]<-rbinom(sims_ind,1,qqii[tt])                                                                      [1]
c[tt,]<-rgamma(sims_ind,10,2)                                                                            [1]
}
ddd<-b*c                                                                                                [½]
ddd[,1:5]                                                                                               [½]

       [,1] [,2] [,3] [,4] [,5]
 [1,] 0.000000 0.000000 4.827437 0.000000 0.000000
 [2,] 0.000000 0.000000 0.000000 4.564424 0.000000
 [3,] 2.007491 0.000000 0.000000 0.000000 0.000000
 [4,] 5.240021 0.000000 0.000000 0.000000 0.000000
 [5,] 6.720731 8.423826 0.000000 5.117893 0.000000
 [6,] 0.000000 0.000000 0.000000 0.000000 0.000000
 [7,] 3.389280 0.000000 0.000000 0.000000 0.000000
 [8,] 0.000000 0.000000 5.246338 0.000000 0.000000
 [9,] 5.729025 5.888418 0.000000 0.000000 4.860155
[10,] 0.000000 0.000000 0.000000 0.000000 6.000620                                                      [½]


CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


(iv)
apply(ddd,1,mean)                                                                                      [1]
[1] 0.6010395 0.7015810 0.7965419 0.8992430 1.0003041 1.0993863 1.1978513
1.2982740 1.4016419 1.4974438                                                                          [½]
apply(ddd,1,sd)                                                                                         [1]
[1] 1.715502 1.834814 1.935596 2.033105 2.120199 2.198602 2.270792 2.333793
2.397368 2.448901                                                                                      [½]
(v)
sim_sum<-apply(ddd,2,sum)                                                                              [1]
mean(sim_sum)); sd(sim_sum)                                                                            [1]
[1] 10.49331
[1] 6.780088                                                                                           [½]
The mean of the total claims is 10.49331 and the standard deviation is 6.780088                        [½]
The mean and standard deviation are consistent with the theoretical values from
part(ii)                                                                                               [1]
(vi)
sum(sim_sum==0)/sims_ind                                                                                [1]
[1] 0.092458                                                                                           [½]
The probability of no claims is 0.092458                                                               [½]
(vii)
quantile(sim_sum,0.99)                                                                                 [1]
99%
28.76049                                                                                               [½]
The 99th percentile is 28.76049                                                                        [½]
(viii)
hist(                                                                                                  [½]
sim_sum,                                                                                               [½]
freq=FALSE)
                                                                                                       [½]




                                                                                                       [½]


CS2B A2024
                                                                      © Institute and Faculty of Actuaries
       CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


(ix)
lines(dnorm(seq(1,max(sim_sum)),mean_theory(qqii,rep(10,10),rep(2,10)),sd_theory(qqii,re
p(10,10),rep(2,10))))                                                                                   [1½]




                                                                                                         [½]
(x)
Percentile <-
mean_theory(qqii,rep(10,policies),rep(2,policies))+qnorm(.99)*sd_theory(qqii,rep
 (10,policies),rep(2,policies))
Percentile                                                                                 [1]
[1] 26.2609                                                                               [½]
        th
The 99 percentile is 26.2609                                                              [½]
(xi)
The Normal distribution gives a non-zero probability of negative claims.                  [½]
It also does not capture the higher relative probability of no claims being incurred.     [½]
The actual distribution has a thicker right tail than the Normal distribution.            [½]
Hence there is considerable error in estimating the 99th percentile.                      [½]
Overall, the Normal approximation is NOT appropriate here.                                [½]
                                                              [Marks available 2½, maximum 2]




CS2B A2024
                                                                       © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


(xii)
qqii<-seq(.42,by=.02,length.out = policies)                                                            [½]
set.seed(500)sims_ind<-1000000
b<-matrix(0,nrow=policies,ncol=sims_ind)
c<-matrix(0,nrow=policies,ncol=sims_ind)

for(tt in 1:policies){
  b[tt,]<-rbinom(sims_ind,1,qqii[tt])
  c[tt,]<-rgamma(sims_ind,10,2)
}

ddd<-b*c
sim_sum<-apply(ddd,2,sum)
hist(sim_sum, freq=FALSE)
lines(dnorm(seq(1,max(sim_sum)),mean_theory(qqii,rep(10,10),rep(2,10)),
sd_theory(qqii,rep(10,10),rep(2,10))))                                                                 [2]




                                                                                                        [½]




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


(xiii)
The probability of no claims is now negligible                                                         [½]
This probability may be calculated as 0.000757 using the same method as in part(vi)                    [½]
The thickness of the right tail is now similar for the actual distribution and for the
Normal approximation                                                                                   [½]
Hence we would expect the estimate of the 99th percentile to be more accurate than
before                                                                                                 [½]
In fact, the actual distribution has a 99th percentile of 46.24829                                     [½]
compared with 45.56601 from the Normal approximation                                                   [½]
Overall, the Normal approximation is more appropriate than before                                      [½]
Credit given for other sensible comments, in particular:
Comments on the effect of the P_i term shifting from 0.1 to 0.4 having the effect of           [up to
a linear shift in claim amounts                                                                    1]
Discussion of the issue of heterogeneity between policies                                      [up to
                                                                                                   1]
                                                                               [Marks 5½, maximum 3]
                                                                                                [Total 38]


Commentary:
Candidates generally fell into two broad groups with respect to this question depending on
whether they included the binomial element of the question in part (iii). This is a compound
distribution question that involves both the probability of a claim (developed in part (i) and
then revised in part (xii)) and the Gamma distribution of claim amounts. Candidates who read
the question carefully and applied the two probability distributions performed well at least in
the first eleven parts of the question. The second group is candidates who applied only the
Gamma distribution in part (iii) and they generally performed poorly in this question.




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


Q2
(i)
If alpha=1 we have lasso regression                                                                    [1]
if alpha=0 we have ridge regression.                                                                   [1]
(ii)
BFI <-                                                                                                 [1]
read.csv("~/CS2B_A24_Q2.csv")                                                                          [1]
(iii)
The first line of code creates a matrix X                                                              [½]
consisting of the whole data frame BFI apart from the first column                                     [½]
The second line of code creates a vector Y consisting of the first column of the data
frame BFI                                                                                              [1]
(iv)
Penalty                                                                                                [½]
=function(B, alpha, lambda)                                                                            [½]
{
Des=cbind(1,X)                                                                                         [1]
Dd=Y-Des%*%B                                                                                           [2]
sum(Dd^2)                                                                                              [2]
+lambda*(1-alpha)/2*sum(B[-1]^2)                                                                       [2]
+lambda*alpha*sum(abs(B[-1]))                                                                          [2]
}
(v)
Penalty(c(1,1/2,1/3,1),1/2,0.8)                                                                         [1]
[1] 4571285                                                                                            [½]
The value of the Penalty function is 4571285                                                           [½]
(vi)
It is clear from the expression of 𝐿(𝑩, 𝛼, 𝜆 ) that for any given alpha the function
increases                                                                                              [1]
and therefore lambda=0 provides the minimal value.                                                     [2]
And that is achieved regardless of any value of alpha.                                                 [1]
(vii)
For example the lines
Penalty(c(1,1/2,1/3,1),2,0)
or Penalty(c(1,1/2,1/3,1),1/2,0)                                                                       [1]
Give the same value 4571284.                                                                           [1]




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


(viii)
For lambda=0 the penalty function is the same as that of the linear regression                         [1]
lm(Y~X)$coef
produces                                                                                               [1]
B=
 (Intercept)     Xage Xweight Xheight
17.7214202 0.1558283 0.1837303 -0.5509873                                                              [1]
therefore those values for B and values lambda=0, alpha=any value are the optimal
values.                                                                                                [1]
(ix)
This is NOT a valid method of choosing alpha and lambda                                                [1]
The Penalty function is then independent of alpha                                                      [1]
alpha and lambda should instead be chosen before minimising the Penalty function
over the beta parameters                                                                               [2]
This is usually done by cross-validation                                                               [1]
This would be just simply the linear regression estimates for B.                                       [1]
                                                                                                  [max 5]
                                                                                                [Total 33]

Commentary:
The first six parts of this penalised regression question were generally well answered whilst
the last three parts that relied more on understanding of penalty functions were less well
answered. Part (iv) requires the careful translation of an algebraic expression into R
programming code. The later parts require understanding of how the Core Reading material
introducing Machine Learning techniques might be applied to a regression problem.




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


Q3
(i)
study <-                                                                                               [½]
read.csv("~/CS2B_A24_Q3.csv")                                                                          [½]
head(study,12)                                                                                         [½]
         time leave route prior
       1 2 1 1 0
       2 8 0 0 0
       3 2 1 1 1
       4 6 1 0 0
       5 7 1 0 1
       6 2 1 0 0
       7 4 1 1 0
       8 4 1 0 0
       9 3 1 1 0
       10 2 1 0 0
       11 4 1 0 0
       12 2 1 1 1
                                                                                                       [½]
(ii)
non-informative censoring for the drug treatment would be people who forget to
take the drug                                                                                          [½]
informative censoring for the drug treatment would be people who drop out because
of side effects                                                                                        [½]
non-informative censoring for the physio treatment would be people who are unable
to follow the exercise routine because of other commitments                                            [½]
informative censoring for the physio treatment would be people who sustain another
injury due to the exercises                                                                            [½]
(iii)
KM <- survfit(                                                                                          [1]
Surv(study$time, study$leave)                                                                           [1]
~ study$route,)                                                                                         [1]
plot(                                                                                                  [½]
KM,                                                                                                    [½]
main = "Comparison of Kaplan Meier S(t) for ankle injury treatments",                                  [½]
xlab = "weeks (t)",                                                                                    [½]
ylab = "S(t)",                                                                                         [½]
col = c("blue", "red"))                                                                                [½]
legend(legend = c("drug","physio"),                                                                    [½]
col = c("blue", "red"),                                                                                [½]
x = “topright”, pch = 0)                                                                               [½]




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report




                                                                                                       [½]

(iv)
from the study KM plot
We seek to minimise the survival function (faster recovery for more athletes)           [1]
The 2 survival functions for drug and physio treatments have a similar shape           [½]
Survival probabilities are very similar for t < 4 weeks                                [½]
suggesting little difference in shorter term outcomes                                  [½]
However at t >= 4 weeks S(t) lower (better) for the physio treatment than the drug
treatment                                                                              [½]
suggesting physio might be more effective for the more severe injuries                 [½]
                                                           [Marks Available 3½, Maximum 3]
(v)
for the Cox model
Cox <-                                                                                 [½]
coxph(                                                                                  [1]
Surv(study$time, study$leave) ~ study$route + study$prior,                            [2½]
ties = "breslow")                                                                       [1]
Cox                                                                                    [½]
Call:
coxph(formula = Surv(study$time, study$leave) ~ study$route +
        study$prior, ties = "breslow")

      coef exp(coef) se(coef) z p
study$route 0.2804 1.3236 0.2186 1.283 0.1996
study$prior -0.5431 0.5809 0.2909 -1.867 0.0619

Likelihood ratio test=6.45 on 2 df, p=0.03968
       n= 100, number of events= 93                                                                    [½]
The two regression coefficients are

CS2B A2024
                                                                      © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2024 - Examiners’ report


+0.2804 for route
-0.5431 for prior
(vi)
route 1=physio, 0=drug therefore a positive coefficient means that the hazard is
higher for physio treatment, that is the probability of recovery is higher for physio                  [½]
This accords with the KM analysis                                                                      [½]
prior =1 when there was a prior injury, so the hazard is lower when there has been a
previous injury and the probability of recovery is lower                                               [½]
This is in line with our intuition                                                                     [½]
the negative prior coefficient has a larger impact on the change in hazard than the
positive route coefficient                                                                             [½]
given that both covariates are 0/1 indicators and thus scale the same in the model                      [1]
suggesting that prior injury is more important than treatment route when analysing
recovery time                                                                                          [½]
(vii)
We would need to test the likelihood ratio statistics                                                  [1]
One way to do this would be to construct two separate one-covariate Cox models                         [2]
and compare their maximised log-likelihoods                                                            [1]
other sensible comments (1 mark each)
                                                                                                [Total 29]

Commentary:
The main modelling parts of this question (iii) for Kaplan Meier and (v) for Cox PH were very
well answered. The parts that required application of censoring to this scenario or discussion
of the results (parts (ii), (iv) and (vi)) were generally poorly answered. Candidates are
reminded that survival model calculations alone are not sufficient for these examinations, but
understanding the assumptions and interpretation of results are also needed. In particular,
different types of censoring are an important consideration in these models.


                                                                                        [Paper Total 100]



                        END OF EXAMINERS’ REPORT




CS2B A2024
                                                                      © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



---
normalized_id: cs2-2025-april-examiner-report-cs2b-april2025-examiners-report
exam_code: CS2
year: 2025
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2B/Apr25/CS2B_April2025_Examiners' Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2025-april-examiner-report-cs2b-april2025-examiners-report

EXAMINERS’ REPORT
CS2 Risk Modelling and Survival Analysis
Core Principles
Paper B




                                April 2025
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


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

For some candidates, this may be their first attempt at a professional
qualification examination. The Examiners expect all candidates to have a good level of
knowledge and understanding of the topics and therefore candidates should revise thoroughly
to prepare for closed- book and in-person examinations. In our experience, candidates that
are insufficiently prepared are not successful because of lack of knowledge, time
management issues and/or because they do not properly answer the questions.

Many candidates rely on past exam papers and examiner reports in preparing for
exams. Great caution must be exercised in doing so because each exam question is
unique. As with all professional examinations, it is insufficient to repeat points of principle,
formula or other textbook works. The examinations are designed to test “higher order”
thinking including candidates’ ability to apply their knowledge to the facts presented in
detail, synthesise and analyse their findings, and present conclusions or advice. Successful
candidates concentrate on answering the questions asked rather than repeating their
knowledge without application.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.



Sarah Hutchinson
Chair of the Board of Examiners
June 2025




CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


A.     General comments on the aims of this subject and how it is marked
The aim of the Risk Modelling and Survival Analysis Core Principles subject is to provide a
grounding in mathematical and statistical modelling techniques that are of particular
relevance to actuarial work, including stochastic processes and survival models.

Candidates are reminded of the need to include the R code, that they have used to generate
their solutions, together with the main R output produced, in their answer script. Where the R
code was missing from a particular question part, no marks were awarded even if the output
(e.g. a graph) was included. Partial credit was awarded in the cases where the R code was
included but the R output was not.

The marking schedule below sets out one set of R code solutions for each question. Other
appropriate R code solutions gained full credit unless one specific approach had been
explicitly requested in the question paper. Candidates may use R packages in answering
questions however, knowledge of packages beyond those specified in the subject Core
Reading is not expected for this examination. The questions are designed to be an assessment
of modelling and analysis using R rather than a test of knowledge of R packages.

In cases where an error was carried forward to later parts of the answer, candidates were not
penalised a second time for the same error if those later parts were otherwise answered
correctly.

In higher order skills questions, where comments were required, well-reasoned comments
that differed from those provided in the solutions also received credit as appropriate.


B.     Comments on candidate performance in this diet of the examination
Performance in the B paper continues to improve with each examination session in CS2 and
with this session being in “closed book” format, this suggests there is evidence that
candidates are better prepared to solve modelling problems using R programming. Whilst the
average mark was higher than previous sessions, in this particular paper, performance varied
by question, with mean marks obtained as a proportion of those available falling with each
successive question on the paper.

In question 1 on the Kaplan-Meier Estimate and the issue of censoring in data, the mean
score was 70% of the available marks. A large majority of candidates were able to produce
histograms, the survival object, and the estimate of the survival function in R. The best
answers combined this with evidence of understanding the importance of censoring in
survival data.

The mean score in question 2 was 57% of the available marks and therefore at a pass
standard. The question combined some analysis of a risk distribution with a little extreme
value work in the later parts. This is the first time we have put extreme value distributions in
the B paper and serves as a reminder that the whole of the syllabus is examinable in either
exam paper.

The third question using polynomial regression as a simple application of machine learning
techniques was less well answered with the mean score being just 38% of the available


CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


marks. The later parts in particular were found to be more challenging where candidates were
asked to write a function in R to perform calculations evaluating modelling alternatives.
However, the underlying statistical analysis to the modelling scenario: linear regression and
use of the AIC is, we are sure, well understood by the majority of actuarial students. In these
types of problem questions candidates are encouraged to evidence their understanding of the
underlying statistical techniques in lines of R code as credit for this will be given even where
a fully working R function cannot be developed.



C.     Pass Mark
The Pass Mark for this exam was 57.
948 presented themselves and 456 passed.




CS2B A2025                                                              © Institute and Faculty of Actuaries
       CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


Solutions for Subject CS2B - April 2025

Q1
(i)
The ability of the pupil to recite the 7 times table.                                                  [1]
                                                                                                  [1 mark]
(ii)
Download the data
kap_m_data<-read.csv("CS2B_Q1_data.csv")                                                                  [1]
head(kap_m_data)                                                                                         [½]
X fut_time statusvv
11       0    0
22       0    0
33       0    0
44       0    0
55       0    0
66      36     0                                                                                         [½]
> tail(kap_m_data)                                                                                       [½]
   X fut_time statusvv
720 720      30     0
721 721      30     0
722 722      30     0
723 723      30     0
724 724      30     0
725 725      30     0                                                                                [½]
                                                                                                [3 marks]
(iii)
Plot a histogram
hist                                                                                                     [½]
(kap_m_data$fut_time,                                                                                    [½]
ylab="No of pupils", xlab="weeks", main="Time taken to learn table (or earlier
censoring)")                                                                                             [½]




                                                                                                        [½]



CS2B A2025                                                               © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


                                                                                               [2 marks]
(iv)
Plot a histogram showing only censored pupils
hist                                                                                                   [½]
(kap_m_data                                                                                            [½]
[kap_m_data$statusvv==0,]                                                                               [2]
$fut_time,                                                                                             [½]
ylab="No of pupils", xlab="weeks", main="Censoring times")                                              [1]




                                                                                                    [½]
                                                                                               [5 marks]
(v)
Outline briefly the key characteristics of the complete data

sum(kap_m_data$statusvv==1)
sum(kap_m_data$statusvv==0)
sum(kap_m_data[kap_m_data$statusvv==0,]$fut_time==30)
sum(kap_m_data[kap_m_data$statusvv==0,]$fut_time==0)
sum(kap_m_data[kap_m_data$statusvv==0,]$fut_time==53)                                                  [2]
The number learning the table each week steadily increases throughout the early / mid
part of the year.                                                                                      [1]
There was left censoring/truncation at the start of the study. (5 pupils)                              [1]
There is a jump/anomaly at time 30 weeks implying a different process here (100
pupils).                                                                                               [1]
It is due to pupils leaving to join a different school- this is likely to be informative
such that those pupils will have a lower rate of learning than those remaining in the
study                                                                                                  [1]
Likely to be right censoring (Type 1) at the study end (time 53 weeks) where there are
66 censored events.                                                                                    [1]
There is random censoring throughout the study probably due to children leaving the
area e.g. time 36 weeks (20 pupils).                                                                   [1]


CS2B A2025                                                              © Institute and Faculty of Actuaries
        CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


534 pupils learn the 7 times table during the study.
                                                                                               [1]
                                      [Marks available 9, Max 6 (2 for R code, 4 for explanation)]
(vi)
Create a survival object with name “survobjx”
survobjx <- with(kap_m_data, Surv(fut_time, statusvv==1))                                                  [2]
head(survobjx,10)                                                                                         [½]
0+ 0+ 0+ 0+ 0+ 36+ 32+ 13+ 36+ 37+                                                                    [½]
                                                                                                 [3 marks]
(vii)
Carry out Kaplan Meier lifetime distribution calculations using the survfit function
and plot the results, using, conf.type="plain" to produce Greenwood type variance
calculations.
calculationsq <- survfit                                                                                  [1]
(survobjx~1,                                                                                             [1½]
conf.type="plain")                                                                                        [½]
plot(calculationsq,                                                                                       [1]
xlab="Weeks from start of study",
ylab="% pupils not learnt table", yscale=100,
                                                                                                          [½]
main="KM estimate of Lifetime Distribution")




                                                                                                          [½]
                                                                                                 [5 marks]
(viii)
State the estimated probability calculated in (g) that a pupil has learnt the table by
Week 50.

Survival function at week 50 = 0.167                                                                   [½]
So probability is 1 - 0.167 = 0.833                                                                    [½]
                                                                                                   [1 mark]

CS2B A2025                                                                © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


(ix)
Discuss the issues with this investigation with respect to the censored pupils at time
30 weeks.

The leavers at time 30 were not random, these pupils are unlikely to exhibit the same
learning rates as lives left in the investigation                                            [1]
and should be removed from the study and analysed separately.                                [1]
The KM plot in is not representative of the learning characteristics of the group of
lives which commenced the study due to the presence of informative censoring at
Week 30.                                                                                     [1]
By using the censored data we are making poor quality conclusions                            [1]
(e.g. only 16.7% of pupils haven’t learn the table within 50 weeks) by saying that the
group of pupils we started observing all behave in this way                                  [1]
- this is incorrect- the 100 lives censored at day 30 are different and if we had
observed them fully we would have seen worse results                                         [1]
Advisable to look at more homogenous groups and analyse them separately.                     [1]
                                                                      [Marks available 7, Max 5]
                                                                                      [Total 31]


Commentary:
This question was generally very well answered. The best answers showed both technical
modelling in R using Kaplan-Meier estimation and an understanding of the different types of
censoring and the importance of whether censoring is informative or not.
A large majority of candidates identified that the correct R code for the surv object in part
(vi) is Surv().
Where survival models are assessed in novel scenarios such as the one in this question, it is
always important to be clear what the hazard and survival probabilities represent. Thus, the
probability required in part (viii) is 1 - S(50) not S(50) and the risk in part (ix) is
underestimation of the survival function due to informative censoring.


Q2
(i)
river_data <- read.csv("~//CS2B_Q2_river_data.csv")                                                     [1]
tail(river_data,10)                                                                                    [½]
             day height
        491 491 176.0
        492 492      77.8
        493 493      33.1
        494 494       9.8
        495 495      57.9
        496 496      25.3
        497 497      43.8
        498 498 150.9
        499 499      14.9
        500 500      47.6
                                                                                                    [½]
                                                                                               [2 marks]



CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


(ii)
mean(river_data$height)                                                                                 [1]
[1] 72.0914
var(river_data$height)                                                                                  [1]
[1] 7815.429
The mean height is 72.1 cm and the variance is 7815 cm2
                                                                                               [2 marks]
(iii)
Histogram
height <- river_data$height
max(height)                                                                                             [½]
[1] 833.6
# so the histogram breaks at 10, 50, …, 850                                                              [1]
hist                                                                                                     [1]
(height,                                                                                                [½]
breaks = 50*c(0:17),                                                                                    [½]
xlab="River height in cm", ylab = "Number of days", main = "Frequency chart
for river height")                                                                                      [1]




                                                                                                        [½]

                                                                                               [5 marks]
(iv)
> lambda = 1/mean(height)                                                                                [1]
> lambda                                                                                                [½]
[1] 0.01387128
The parameter value = 0.01387128                                                                    [½]
                                                                                               [2 marks]
(v)
> x <- c(1:850)                                                                                         [½]
> exp_frequency <- 50*500*dexp(x, lambda)                                                              [2½]
> *500 days and *50 for equivalence with histogram
> lines(exp_frequency, col="blue")                                                                     [1½]

CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report




                                                                                                    [½]
                                                                                               [5 marks]
(vi)
The exponential assumption seems to capture the general shape of the observed data          [1]
Although there is some evidence that the tail is fatter than the exponential curve          [1]
                                                                                      [2 marks]
(vii)
The height of the flood defence is d such that
exp(-d * lambda) = 1/1000                                                                   [1]
> d = log(0.001)/(-1*lambda)                                                              [1½]
>d                                                                                         [½]
[1] 497.9897
The flood defences should be set at 498 cm (or accept 5 metres)                             [1]
                                                                                      [4 marks]
(viii)
> exceed = height [height>d] - d                                                            [2]
> exceed                                                                                   [½]
[1] 335.610251 4.910251 159.210251                                                         [½]
                                                                                      [3 marks]
(ix)
We have three exceedances in 500 days compared to the assumption of 1 in 1000               [1]
The average exceedance is 166.6 cm much higher than the exponential mean                    [1]
Which suggests that the use of the exponential distribution is inadequate in the tail       [1]
                                                                                      [3 marks]
(x)
Under the exponential distribution the mean threshold exceedance is the same as the
mean of the original exponential distribution                                               [1]
> MTE <- 1/lambda                                                                          [½]
> MTE                                                                                      [½]
[1] 72.0914
Which is the original sample mean of height                                                [½]
Then 72.0914 =                                                                             [½]
              .
So 𝛾 =    .



CS2B A2025                                                              © Institute and Faculty of Actuaries
       CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


> gamma <- MTE / (MTE -1)                                                                                [1]
> gamma                                                                                                 [½]
[1] 1.014066
𝛾 = 1.014                                                                                              [½]
                                                                                                 [5 marks]
                                                                                                [Total 33]


Commentary:
This question was somewhat well answered. The earlier parts on fitting a risk distribution
are quite straightforward, particularly with the distribution being the exponential rather than
one of the more complicated distributions found in the syllabus. Candidates should make
sure they understand when the dexp(), pexp(), qexp() and rexp() functions are appropriate
and ensure that the correct one is selected.
Extreme Value Theory has not been examined in the B paper recently, but the code needed
here is quite straightforward and does not require any advanced knowledge of EV
distributions.


Q3
(i)
loan_data <- read.csv("…/CS2B_Q3_loans.csv")                                                             [1]
head(loan_data, 5)                                                                                      [½]

year accounts defaults
2000     649       2
2001    1580         9
2002    1925       12
2003    1993         6
2004    1765       11
                                                                                                        [½]
tail(loan_data, 5)                                                                                      [½]

year accounts defaults
2016    5024       23
2017    5173       34
2018    5478       25
2019    5836       23
2020    5807       28
                                                                                                     [½]
                                                                                                [3 marks]
(ii)
loan_data$def_rate <- loan_data$defaults/loan_data$accounts                                             [1]


CS2B A2025                                                               © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


plot(loan_data$def_rate ~ loan_data$year,                                                               [1]
xlab="year", ylab="default rate",                                                                      [½]

main="Default rate over time")




                                                                                                    [½]
                                                                                               [3 marks]
(iii)
The default rate shows peak around 2009/2010                                                        [½]
as a result of the 2008/2009 global financial crisis                                                 [1]
Apart from that, the overall patterns is almost flat                                                [½]
                                                                                               [2 marks]
(iv)
loan_data$year2 <- loan_data$year^2                                                                    [½]
loan_data$year3 <- loan_data$year^3                                                                    [½]
Model0 <- lm(def_rate ~ year+year2+year3, data=loan_data)                                            [2]
                                                                                               [3 marks]
(v)
par(mfrow=c(1,2))                                                                                      [½]
plot(loan_data$def_rate ~ loan_data$year,                                                              [½]

xlab="year", ylab="default rate",
main="Default rate over time")
lines(loan_data$year, Model0$fitted.values)                                                            [½]
plot(loan_data$year, Model0$residuals)                                                                  [1]




CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report




                                                                                                    [½]
                                                                                               [3 marks]
(vi)
The model does not fit the data very well                                                      [½]
it underestimates the increase in 2009-10                                                      [½]
some pattern can be seen in the residuals                                                      [½]
The model is not suitable for the whole time period                                            [½]
It could give negative default rates                                                           [½]
                                                                        [Marks available 2½, Max 2]

(vii)
def_poly_curve =                                                                                        [½]
 function(x, y){                                                                                         [1]
x0 = rep(1, length(x))
 x1 = x
 x2 = x^2
 x3 = x^3
                                                                                                       [2½]
 X_mat = cbind(x0, x1, x2, x3)
vec_aic <- rep(NA, 4)                                                                                   [1]
names(vec_aic) = 0:3
for(p in c(0:3)){                                                                                       [½]
M = lm(y ~ X_mat[,c(1:(p+1))])                                                                           [2]
vec_aic[p+1] = AIC(M)                                                                                    [1]
}
 vec_aic                                                                                                [½]
}
                                                                                               [9 marks]



CS2B A2025                                                              © Institute and Faculty of Actuaries
      CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - April 2025 - Examiners’ report


(viii)
loan_data_segment1 <- loan_data[loan_data$year>=2000 &
loan_data$year<=2008, ]                                                                                [1]
loan_data_segment2 <- loan_data[loan_data$year>=2009 &
loan_data$year<=2013, ]                                                                                [1]
loan_data_segment3 <- loan_data[loan_data$year>=2014 &
loan_data$year<=2020, ]                                                                                [1]
aic_segment1 <- def_poly_curve(loan_data_segment1$year,
loan_data_segment1$def_rate)                                                                           [1]
aic_segment2 <- def_poly_curve(loan_data_segment2$year,
loan_data_segment2$def_rate)                                                                           [1]
aic_segment3 <- def_poly_curve(loan_data_segment3$year,
loan_data_segment3$def_rate)                                                                           [1]
aic_segment1
aic_segment2
aic_segment3                                                                                           [½]
The best models in terms of AIC are
- degree 0 for segment 1,                                                                           [½]
- degree 2 for segment 2                                                                            [½]
- degree 0 for segment 3.                                                                           [½]
                                                                                               [8 marks]
(xi)
predict(M1, data.frame(year=c(1998, 1999)))                                                           [1]
0.004452138 0.004452138                                                                              [½]
predict(M3, data.frame(year=c(2021, 2022)))                                                           [1]
0.005110476 0.005110476                                                                              [½]
                                                                                               [3 marks]
                                                                                              [Total 36]


Commentary:
This question was generally poorly answered, particularly the later parts that asked for the
development and use of a function. The component parts of that function and the analysis are
actually quite straightforward: regression using a simple lm() function and evaluation of
different AIC output for model selection. These should be familiar to all candidates. The
majority of marks were available for applying these two statistical modelling techniques with
some additional marks for wrapping them in a single R function.
The Machine Learning questions on CS2 paper B covering syllabus area 5 and unit 18 of the
Core Reading will generally be in the area of “use of software to apply supervised learning
techniques, to solve regression and classification problems” and candidates would be well
advised to ensure they are familiar with the range of regression and classification methods
covered and how these can be applied in R.

                                                                                        [Paper Total 100]


                        END OF EXAMINERS’ REPORT

CS2B A2025                                                              © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


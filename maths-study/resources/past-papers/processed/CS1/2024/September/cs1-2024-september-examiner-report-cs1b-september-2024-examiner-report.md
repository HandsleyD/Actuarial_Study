---
normalized_id: cs1-2024-september-examiner-report-cs1b-september-2024-examiner-report
exam_code: CS1
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1B/Sep24/CS1B_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2024-september-examiner-report-cs1b-september-2024-examiner-report

EXAMINERS’ REPORT
CS1 - Actuarial Statistics
Core Principles
Paper B




                             September 2024
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



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

Candidates should note that from the April 2025 exam session, all examinations will
continue to be delivered virtually and will have online proctoring. Exams will be closed
book and closed web. The ability to refer to past examiner reports and past papers
during the exam is not permitted. Candidates attempting to do so will be in breach of
the Assessment Regulations and subject to inappropriate conduct
investigations. Further details of the new exams can be found on the IFOA website.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Sarah Hutchinson
Chair of the Board of Examiners
December 2024




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



A.     General comments on the aims of this subject and how it is marked

The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
statistical techniques that are of particular relevance to actuarial work.

In particular, the CS1B paper is a problem-based examination and focuses on the assessment
of computer-based data analysis and statistical modelling skills.

For the CS1B exam candidates are expected to include the R code that they have used to
obtain the answers, together with the main R output produced, such as charts or tables.

When a question requires a particular numerical answer or conclusion, this should be stated
explicitly and clearly, separately from, and in addition to, the R output that may contain the
relevant numerical information.

Some of the questions in the examination paper accept alternative solutions from those
presented in this report or different ways in which the provided answer can be determined. In
particular, there are variations of the R code presented here, which are valid and can produce
the correct output. All mathematically and computationally valid solutions or answers
received credit as appropriate.

In cases where the same error was carried forward to later parts of the answer, candidates
were given full credit for the later parts.

In questions where comments were required, valid comments that were different from those
provided in the solutions also received credit where appropriate.

B.     Comments on candidate performance in this diet of the examination

Overall performance in CS1B was satisfactory. Well prepared candidates were able to
achieve high marks.
Most candidates demonstrated sufficient knowledge of the key R commands required for the
application of the statistical techniques involved in this subject.

On some occasions, candidates failed to provide appropriate and informative annotation on
produced graphs (e.g. parts of Q3). Comments given alongside the R output were not always
clear or adequate.


C.     Pass Mark
The Pass Mark for this exam was 59.
1672 presented themselves and 849 passed.




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
                 CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



    Solutions for Subject CS1B - September 2024

    Q1

    (i)
•   load("onlineShop.Rdata")
    m1 = glm(purchases_per_year ~ age + time_spent_on_website,
•   family = poisson(link = "log"),
                                                                                                             [2]
•   data = onlineShop)


    summary(m1)
    Call:
    glm(formula = purchases_per_year ~ age + time_spent_on_website,
        family = poisson(link = "log"), data = onlineShop)


    Deviance Residuals:
      Min       1Q   Median                  3Q          Max
    -3.1785 -0.5430     0.0131             0.6822       2.4685


    Coefficients:
                           Estimate Std. Error z value Pr(>|z|)
    (Intercept)           -0.048701   0.193547 -0.252     0.801
    age                    0.021756   0.003352   6.490 8.58e-11 ***
    time_spent_on_website 0.196640    0.008820 22.296 < 2e-16 ***
    ---
    Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1


    (Dispersion parameter for poisson family taken to be 1)

        Null deviance: 629.429             on 98      degrees of freedom
    Residual deviance: 96.399              on 96      degrees of freedom
    AIC: 485.03


    Number of Fisher Scoring iterations: 4



    Coefficient estimates:
    Intercept: -0.0487; age:              0.021756;      time_spent_on_website: 0.196640                     [1]
•   AIC: 485.03; Residual deviance: 96.399                                                                   [1]


    (ii)
    Expected number of purchases:




    CS1B S2024
                                                                             © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



exp⁡(−0.0487 + 0.021756*age + 0.196640*time)                                                             [1]

where “age” is the age of the customer and “time” is the time spent on the website (in
hours).

(iii)
m2 = glm(purchases_per_year ~ age + time_spent_on_website,
family = poisson(link = "sqrt"),
data = onlineShop)                                                                                       [2]

summary(m2)
Call:
glm(formula = purchases_per_year ~ age + time_spent_on_website,
    family = poisson(link = "sqrt"), data = onlineShop)

Deviance Residuals:
    Min       1Q    Median                 3Q          Max
-3.5661 -0.6739 -0.0740                0.6753       2.2289

Coefficients:
                       Estimate Std. Error z value Pr(>|z|)
(Intercept)           -0.220231   0.270989 -0.813     0.416
age                    0.029890   0.004932   6.060 1.36e-09 ***
time_spent_on_website 0.329327    0.016165 20.372 < 2e-16 ***
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

(Dispersion parameter for poisson family taken to be 1)

    Null deviance: 629.43             on 98     degrees of freedom
Residual deviance: 117.84             on 96     degrees of freedom
AIC: 506.47

Number of Fisher Scoring iterations: 6



Coefficient estimates:
Intercept :     -0.220231 ; age:    0.029890;               time_spent_on_website:
0.329327                                                                                                 [1]
AIC: 506.47; Residual deviance: 117.84                                                                   [1]

(iv)
Expected number of purchases:

(−0.220231⁡ + 0.029890 ∗ 𝑎𝑔𝑒⁡ + ⁡0.329327 ∗ 𝑡𝑖𝑚𝑒)2                                                       [1]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




(v)
Model m1 has a smaller deviance than m2 and we therefore prefer the log link
function.                                                                                                [1]

(vi)
In this situation, comparing the deviances and AICs will always result in the same
preferred model                                                                                          [1]
since the AIC is a penalised deviance where the penalty term is determined by the
number of parameters, and the number of parameters in models m1 and m2 are the
same.                                                                                                    [1]


                                                                                                  [Total 13]

Commentary:
Part (i): Very well answered. A small number of candidates failed to use the “data =
onlineShop” argument in the glm() code, and therefore had difficulties in using the
individual variables for the analysis.
Part (ii): Mixed answers. Many candidates failed to provide the expression with the
numerical values and on the exponential scale.
Part (iii): Very well answered, with no particular issues.
Part (iv): Not well answered. Many candidates failed to provide the expression with the
numerical values and on the squared format.
Part (v): Very well answered in general, with no particular issues.
Part (vi): Mixed answers, with comments often being unclear.


Q2

(i)
Load the data:
> load("CompanySample.Rdata")
> model1 <- lm(price ~ EPS, data = CompanySample)                                                        [1]
> summary(model1)                                                                                        [1]

Call:
lm(formula = price ~ EPS, data = CompanySample)

Residuals:
  Min      1Q Median   3Q Max
-31.369 -19.826 -2.390 8.919 54.838




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




Coefficients:
        Estimate Std. Error t value Pr(>|t|)
(Intercept) 40.5425 22.2660 1.821 0.118
EPS         0.6961 0.8752 0.795 0.457

Residual standard error: 30.03 on 6 degrees of freedom
Multiple R-squared: 0.09538,         Adjusted R-squared: -0.05539
F-statistic: 0.6326 on 1 and 6 DF, p-value: 0.4567

The estimated coefficient for EPS is 0.6961
and for the intercept it is 40.5425.                                                                     [1]


(ii)
0.09538                                                                                                  [1]


(iii)
𝐻0 : there is no linear relationship between price and EPS
𝐻1 : there is a linear relationship between price and EPS                                                [1]
> anova(model1)
Analysis of Variance Table
Response: price
       Df Sum Sq Mean Sq F value Pr(>F)
EPS       1 570.4 570.37 0.6326 0.4567
Residuals 6 5409.5 901.58
                                                                                                         [1]
The F-statistic value is 0.6326 and the p-value is 0.4567.                                               [1]
Therefore, we do not have evidence to reject 𝐻0 even at 45% significance.
We conclude that there is no linear relationship between price and EPS.                                  [1]


(iv)
The coefficient of determination from part (ii) is very low.
In part (iii) we concluded that were was no linear relationship between price and
EPS.                                                                                                     [1]
Therefore, the linear model s a poor fit to the data.                                                    [1]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



(v)
> ModifiedSample <- CompanySample[-4,]                                                                   [1]
> model2 <- lm(price ~ EPS, data = ModifiedSample)                                                       [1]
> summary(model2)
Call:
lm(formula = price ~ EPS, data = ModifiedSample)

Residuals:
   1     2   3    5    6    7   8
-2.130 9.951 -16.221 -6.766 7.540 10.800 -3.174

Coefficients:
        Estimate Std. Error t value Pr(>|t|)
(Intercept) 0.9469 10.2163 0.093 0.92975
EPS         1.9761 0.3766 5.247 0.00333 **
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 10.92 on 5 degrees of freedom
Multiple R-squared: 0.8463,           Adjusted R-squared: 0.8155
F-statistic: 27.53 on 1 and 5 DF, p-value: 0.003335

The value of 𝑅 2 is 0.8463.                                                                              [1]



(vi)
The value of 𝑅 2 is much higher for the model in part (v) than the model in part (i).                    [1]
Therefore, the model in part (v) is a better fit to the smaller data sample than the
model in part (i) is to the full data sample.                                                            [2]


(vii)
One of the key stages of data analysis is cleaning the data, which is to address
unusual, missing, or inconsistent values.                                                                [1]
However, it may be difficult to justify classifying price = 99 as unusual based only on
this small sample.                                                                                       [1]
From part (vi) we saw that the linear model on the reduced sample is a much better fit
than the linear model to the full sample.                                                                [½]
Therefore, it may be appropriate to remove the data point where price = 99.                              [½]
However, there is no guarantee that the model on the reduced sample will better                           [1]
predict a company’s share price.
The full sample size is already quite small, so removing a data point would reduce




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



credibility of the model even further.                                                                   [1]


                                                                                     [Maximum 3 marks]
                                                                                                  [Total 19]

Commentary:
Part (i): Very well answered. A small number of candidates failed to use the “data =
CompanySample” argument in the lm() code, and therefore had difficulties in using the
individual variables for the analysis.
Part (ii): Very well answered, with no particular issues.
Part (iii): Well answered in general. Some common errors included the incorrect
specification of the hypotheses, leading to incorrect or inaccurate conclusions.
Part (iv): Well answered in general.
Part (v): Very well answered, with no particular issues.
Part (vi): Reasonably well answered in general. In many cases, candidates did not indicate in
their answer that the fit of the models refers to different data.
Part (vii): Mixed answers. Many candidates failed to discuss adequately the various aspects
of removing a point form the data.


Q3
CDF: 𝐹(𝑥) = 1 − (1 − 𝑥 𝑎 )𝑏
                                              1
                                            1 𝑎
Inverse CDF: 𝐹 −1 (𝑢) = (1 − (1 − 𝑢) )      𝑏

(i)
a = 0.7
b = 0.5
u = seq(0,1,by=0.01)                                                                                     [1]
invF = (1-(1-u)^(1/b))^(1/a)                                                                             [1]
plot(u, invF, type="l",                                                                                  [1]
ylab = "inverse CDF", main = "Inverse CDF")                                                              [1]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




                                                                                                         [1]
(ii)
set.seed(123)
a=0.7
b=0.5
u = runif(1000)                                                                                          [1]
X=( 1-(1-u)^(1/b) )^(1/a)                                                                                [2]


(iii)
hist(X, freq = FALSE,
main="Sampling distribution of the inverse CDF", xlab = "Inverse CDF")




                                                                                                         [2]



CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



(iv)
x = seq(0,1,by=0.01)
f = a*b*x^(a-1)*(1-x^a)^(b-1)                                                                            [1]
lines(x,f)                                                                                               [1]




                                                                                                         [1]



The curve shows the exact pdf of the sampling distribution.                                              [1]


(v)
The histogram is consistent with the pdf.                                                                [1]
1000 simulated values have produced a good approximation to the true distribution.
This indicates that our answer to part (i) seems to be correct.                                          [1]


(vi)
x = seq(0,1,by=0.01)
a=0.7
b=0.5
f1 = a*b*x^(a-1)*(1-x^a)^(b-1)
plot(x,f1,type="l",
ylim=c(0,4), main="Two pdfs of X", ylab="f(x)")
a=3
b=2
f2 = a*b*x^(a-1)*(1-x^a)^(b-1)                                                                           [2]



CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



lines(x,f2,col="red")                                                                                    [1]




                                                                                                         [½]
The black curve shows the pdf with a = 0.7 and b = 0.5, and the red curve shows the
PDF with a = 3 and b = 2.
                                                                                                         [½]
(vii)
Both prior distributions express the belief that the parameter is between 0 and 1.
                                                                                                         [1]
In addition the first density (black line) expresses the belief that the parameter is
either close to 0 or close to 1 with a slight preference for 1,                                          [1]
while the second density forces the estimated parameter away from 0 and 1, with a
preference for about ¾.                                                                                [1]
                                                                                                  [Total 23]

Commentary:
Parts (i), (ii): Well answered in general.
Part (iii): Well answered in general. A number of candidates did not provide appropriate
annotation on the graph.
Part (iv): Mixed answers. Common errors included using incorrect scale on the y axis and not
providing appropriate annotation on the graph.
Part (v): Not particularly well answered. Many candidates failed to comment on the good
performance of the simulation.
Part (vi): Mixed answers. Common errors included using incorrect scale on the y axis and not
providing appropriate annotation on the graph - in particular failing to explicitly indicate
what each of the two curves appearing on the graph corresponds to.
Part (vii): Not well answered. Many answers failed to address both the similarities and the
differences in the two densities.




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



Q4
(i)
R code:
plot(SA, SB, main="Scatterplot of scores")                                                               [1]




                                                                                                         [1]

(ii)
There seems to be some agreement,                                                                        [1]
but its strength is not clear from the graph.                                                            [1]


(iii)
R code:
cor(SA,SB,method="pearson")
r = 0.7536687                                                                                            [½]


(iv)
R code:
cor(SA,SB,method="spearman")                                                                             [½]
rs = 0.6853147                                                                                           [½]


(v)
R code:
cor(SA,SB,method="kendall")                                                                              [½]
tau = 0.5151515                                                                                          [½]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



(vi)
Pearson’s coefficient measures the strength of the (linear) relationship between the 2
sets of scores by using the numerical values in the samples, rather than agreement in                    [1]
the rankings.
Spearman’s and Kendall’s coefficients use the ranks of the measurements and may                          [1]
therefore have more general applicability here.


(vii)
Test hypotheses:
H0: the population correlation is zero (no association between the scores); v. H1: the
population correlation is different from zero (association between the scores).                          [½]
R code using Pearson’s coefficient:
cor.test(SA,SB,method="pearson")                                                                          [1]
                                                                                                           .
p-value = 0.004642                                                                                       [½]
We have (very) strong evidence against the null hypothesis, and therefore we reject
it.                                                                                                      [1]
We conclude that there is linear relationship between the 2 sets of scores at any level
of significance greater than 0.004642.                                                                   [1]
R code using Spearman’s coefficient:
cor.test(SA,SB,method="spearman")                                                                         [1]
p-value = 0.01731                                                                                        [½]
We have some evidence against the null hypothesis, but it is not very strong.                             [1]
We conclude that we would not reject the “no association” hypothesis at any level of
significance lower than 0.01731.                                                                         [1]
R code using Kendall’s coefficient:
cor.test(SA,SB,method="kendall")                                                                          [1]
p-value = 0.02098                                                                                        [½]
We have some evidence against the null hypothesis, but it is not very strong.                             [1]
We conclude that we would not reject the “no association” hypothesis at any level of
significance lower than 0.02098.                                                                         [1]


(viii)
Pearson’s test depends on the assumption of bivariate normality in the populations of
the two sets of scores which is not easily assessed here, and may not be valid.            [1]
Spearman’s and Kendall’s tests are non-parametric and may be more valid here.              [1]
                                                                                    [Total 22]



Commentary:
Parts (i),(iii),(iv),(v): Very well answered, with no particular issues.
Part (ii): Well answered in general, with some candidates failing to comment on the strength




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




of the relationship being unclear on the graph.
Part (vi): Mixed answers, with comments not being clear in some cases.
Part (vii): Well answered in general. Common errors included not referring to the strength of
the evidence against the null hypothesis.
Part (viii): Not well answered. Many answers failed to associate the validity of the test with
the normal assumption for the parametric test.


Q5
(i)
R code:
boxplot(sales.amount ~ discount, main="Daily sales amounts by discount                                   [1]
availability")




                                                                                                         [2]

(ii)
The plot suggests that daily sales amounts are somewhat higher on discount days
(when d=1).                                                                                              [1]
It is not clear from the graph if the effect is significant.                                             [1]    .


(iii)
R code for normal model:
mod1 = glm(sales.amount ~ discount, family = gaussian())                                                  [1]
summary(mod1)                                                                                             [1]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




Output:

Deviance Residuals:

      Min             1Q         Median            3Q           Max

-0.93659     -0.36899           -0.04446      0.39473      1.29954

Coefficients:

                Estimate Std. Error t value Pr(>|t|)

(Intercept)      9.95171            0.06693 148.678        < 2e-16 ***

discount         0.29651           0.10091      2.938     0.00411 **

---

Signif. codes:        0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1



(Dispersion parameter for gaussian family taken to be 0.2508952)

      Null deviance: 26.754           on 99     degrees of freedom

Residual deviance: 24.588             on 98     degrees of freedom

AIC: 149.5



 R code for normal model:
 mod2 = glm(sales.amount ~ discount, family = Gamma())                                                      [1]
 summary(mod2)                                                                                              [1]


Output:

Deviance Residuals:

       Min                 1Q       Median               3Q            Max

-0.097239     -0.036564           -0.004345      0.038385       0.121811



Coefficients:

                   Estimate Std. Error t value Pr(>|t|)

(Intercept)      0.1004852          0.0006672 150.606         < 2e-16 ***

discount        -0.0029073         0.0009897      -2.938      0.00412 **




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report



---

Signif. codes:        0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1



(Dispersion parameter for Gamma family taken to be 0.002468929)



      Null deviance: 0.26282           on 99      degrees of freedom

Residual deviance: 0.24156             on 98      degrees of freedom

AIC: 149.14




(iv)
Model 1 (normal):
The discount variable has a significant effect (p-value = 0.00411).                           [1]
The estimate of the coefficient of discount is positive, showing a positive effect
(increase of sales amounts on discount days).                                                 [1]
Model 2 (gamma):
The discount variable has a significant effect (p-value = 0.00412).                           [1]
The estimate of the coefficient of discount is negative,                                     [½]
showing again a positive effect,                                                             [½]
since we now use the inverse link function for the mean of the response variable.             [2]
(v)
The gamma model has a slightly smaller AIC value (149.14), compared to the
normal model (149.5).                                                                         [1]
So, the gamma model fits the data (slightly) better,                                          [1]
although with a very small difference, together with the easier interpretation of the
parameters under the normal model, it could be argued that the normal model
should be preferred.                                                                          [1]
(vi)
#mod1
mod1.pred = 9.95171 + 0.29651; mod1.pred                                                      [1]
Expected value is: 10.24822                                                                   [1]
#mod2
mod2.pred = 1/(0.1004852 - 0.0029073); mod2.pred                                              [1]
Expected value is: 10.24822                                                                   [1]
(vii)
The expected value is identical (to 5dp) under the two models.                               [½]
This is consistent with the findings in part (v) where the fit of the models was found
to be very similar.                                                                          [½]
                                                                                      [Total 23]




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - September 2024 - Examiners’ Report




Commentary:
Part (i): Very well answered in general, with no particular issues.
Part (ii): Mixed answers. A number of candidates failed to acknowledge that it is not clear
from the graph if the effect is significant.
Part (iii): Very well answered in general, with no particular issues.
Part (iv): Not very well answered. Common errors included not referring to the p-value
explicitly and failing to interpret the estimate of the coefficient of the discount variable
accurately for the gamma model (by referring to the inverse link function).
Part (v): Mixed answers, with many candidates failing to comment on the easier
interpretation of the parameters under the normal model.
Part (vi): Mixed answers. Many candidates did not use the inverse link function correctly for
the Gamma model.
Part(vii): Not well answered, with comments not being clear in many cases.

                                                                                       [Paper Total 100]




                         END OF EXAMINERS’ REPORT




CS1B S2024
                                                                         © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


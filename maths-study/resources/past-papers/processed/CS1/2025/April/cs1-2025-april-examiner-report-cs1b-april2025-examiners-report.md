---
normalized_id: cs1-2025-april-examiner-report-cs1b-april2025-examiners-report
exam_code: CS1
year: 2025
sitting: April
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1B/Apr25/CS1B_April2025_Examiners' Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2025-april-examiner-report-cs1b-april2025-examiners-report

EXAMINERS’ REPORT
CS1 - Actuarial Statistics
Core Principles
Paper B




                             April 2025
               CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



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
For some candidates, this may be their first attempt at a professional qualification
examination. The Examiners expect all candidates to have a good level of knowledge and
understanding of the topics and therefore candidates should revise thoroughly to prepare for
closed- book and in-person examinations. In our experience, candidates who are insufficiently
prepared are not successful because of lack of knowledge, time management issues and/or
because they do not properly answer the questions.
Many candidates rely on past exam papers and examiners’ reports in preparing for
exams. Great caution must be exercised in doing so because each exam question is
unique. As with all professional examinations, it is insufficient to repeat points of principle,
formula or other textbook works. The examinations are designed to test “higher order”
thinking including candidates’ ability to apply their knowledge to the facts presented in detail,
synthesise and analyse their findings, and present conclusions or advice. Successful
candidates concentrate on answering the questions asked rather than repeating their
knowledge without application.
The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.




Sarah Hutchinson
Chair of the Board of Examiners
June 2025




CS1B A2025
                                                                          © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



A.     General comments on the aims of this subject and how it is marked

The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
statistical techniques that are of particular relevance to actuarial work.

In particular, the CS1B paper is a problem-based examination and focuses on the assessment
of computer-based data analysis and statistical modelling skills.

For the CS1B exam candidates are expected to include the R code that they have used to obtain
the answers, together with the main R output produced, such as charts or tables.

When a question requires a particular numerical answer or conclusion, this should be stated
explicitly and clearly, separately from, and in addition to, the R output that may contain the
relevant numerical information.

Some of the questions in the examination paper accept alternative solutions from those
presented in this report, or different ways in which the provided answer can be determined. In
particular, there are variations of the R code presented here, which are valid and can produce
the correct output. All mathematically and computationally valid solutions or answers received
credit as appropriate.

In cases where the same error was carried forward to later parts of the answer, candidates were
given full credit for the later parts.

In questions where comments were required, valid comments that were different from those
provided in the solutions also received credit where appropriate.


B.     Comments on candidate performance in this diet of the examination

Performance was overall satisfactory, but not as strong as in previous sessions. Many
candidates demonstrated sufficient knowledge of the key R commands required for the
application of the statistical techniques involved in this subject.

Comments given alongside the R output were not always clear or adequate. In some
occasions candidates failed to provide appropriate and informative annotation on produced
graphs (e.g. Q3(iii), Q5(iv)).

Also, full R code was lacking in some cases. Candidates must include the R code, in full, used
to obtain their answers, together with the main R output produced in their answers.

There was a typographical error in Q4 of the paper, where Y = log(X) should have read Y = -
log(X). This involves part (ii) onwards of the question. The entire question can be fully
answered without issues and allowed for different numerical answers obtained under the error
to be given full credit. Also, there was some ambiguity in part Q5(iv) where the wording
refers to “properties with at least three bedrooms”, where it should be “properties with more




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



than three bedrooms”. The data given in the question make it clear that the question refers to
the latter. These issues were taken into account when marking the paper, with the Examiners
applying flexibility in awarding credit where appropriate. The pass mark for this exam was
adjusted accordingly, to reflect the marks that candidates might not have had the opportunity
to score. The Examiners did not find evidence that the errors had further impact on
performance in the remainder of the paper.

Candidates are encouraged to ensure that they are prepared for the ‘closed-book’ exam
format. In this session, there were instances of weaker-than-expected performance in parts of
the paper involving a relatively large number of standard steps, similar examples of which
can be found in the Core Reading (e.g. Q4(iii)(b)).

C.     Pass Mark

The Pass Mark for this exam was set as 55, as that was the threshold at which the minimally
competent candidate was performing, based on a review of the candidates’ performance
across the paper.

1070 presented themselves and 469 passed.




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



Solutions for Subject CS1B – April 2025

 Q1
 (i)
 res = Realised_costs - Predicted_costs                                                                    [1]
 plot(Predicted_costs,res, main="Residuals",
      xlab = "predicted health care costs",
      ylab="residuals")                                                                                    [2]




                                                                                                       [1]
                                                                                               [Maximum 4]
 (ii)
  The residuals look random (or have no pattern).
  The residuals appear to have constant variance (homoscedasticity).
  They are centred around 0, and
  have no outliers.

 (Marking: 0.5 marks each, maximum 1 mark)                                                             [1]
 The predicted health care costs are good estimates for realised health care costs.                    [1]
                                                                                               [Maximum 2]




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



(iii)
cor(Predicted_costs, Realised_costs, method = "pearson")                                   [1]
[1] 0.9151032                                                                              [1]
                                                                                [Maximum 2]
(iv)
 For a randomly selected individual, the value of the predicted health care costs 𝑌       [1]
      is a linear function of 𝐼…
 …and therefore the correlation between 𝑌 and 𝐼 is the same as the correlation
      between 𝑌 and 𝑌.
                                                                                           [1]
 That correlation can be estimated with the correlation in (iii).
 Therefore, the correlation between 𝐼 and 𝑌 is 0.9151032.                                 [1]
                                                                                [Maximum 3]
                                                                                    [Total 11]

 Commentary:
 Parts (i)-(iii) were very well answered. In part (iv) many candidates failed to recognise the
 linear relationship between the healthcare index, I, and the predicted health care costs , 𝑌,
 and therefore failed to provide a correct answer.


Q2
(i)
Load the data:

 > load("StoppingDistance.Rdata")

 > model1 = lm(stopping_dist~speed)
                                                                                                           [1]
 > summary(model1)

 Call:
 lm(formula = stopping_dist ~ speed, data =
 stopping_dist_data)

 Residuals:
     Min      1Q Median                       3Q            Max
 -1.4505 -0.9947 -0.3737                  0.7790         2.6442

 Coefficients:
             Estimate Std. Error t value Pr(>|t|)
 (Intercept) -8.23684    0.84068 -9.798 2.09e-08 ***




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
                              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



 speed        0.25411   0.01053 24.134 1.36e-14 ***
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1
 ‘ ’ 1

 Residual standard error: 1.257 on 17 degrees of freedom
 Multiple R-squared: 0.9716,     Adjusted R-squared:
 0.97
 F-statistic: 582.4 on 1 and 17 DF, p-value: 1.361e-14                                                                     [1]
 (ii)
                    (a) > r1 = residuals(model1)                                                                           [1]
                         > qqnorm(r1)                                                                                      [1]
                    (b) > qqline(r1)                                                                                       [1]

                                                   Normal Q-Q Plot
                    2
 Sample Quantiles

                    1
                    0
                    -1




                         -2                -1               0                 1                 2

                                                   Theoretical Quantiles



                                                                                                                       [2]
                                                                                                               [Maximum 5]
(iii)
> plot(speed, r1, xlab = "Speed (km/h)", ylab =
"Residuals", main = "Plot of Residuals against Speed")                                                                     [1]




CS1B A2025
                                                                                         © Institute and Faculty of Actuaries
                  CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report




             2                Plot of Residuals against Speed
 Residuals

             1
             0
             -1




                     40              60             80            100            120

                                           Speed (km/h)



                                                                                                           [2]
                                                                                                   [Maximum 3]
 (iv)
 The Q-Q plot should show a straight line if the errors follow a normal distribution.       [½]
 The Q-Q plot shows that most quantiles of the data fit the assumption of normality
 fairly well,                                                                               [½]
 as they are close to the theoretical line.                                                 [½]
 However, the data point corresponding to the lowest quantile shows significant
 deviation from the assumption of normality,                                                 [1]
 as it is considerably above where the theoretical line would be.                            [1]
 The sample size is small, however, making interpretation difficult.                        [½]
 The residuals plotted against the explanatory variable should not show any pattern.         [1]
 The errors appear to have a constant variance.                                             [½]
 However, the plot of the residuals against the explanatory variable shows a ‘V’-
 shaped/parabolic pattern.                                                                   [1]
 This suggests a transformation of the responses may be needed.                              [1]
 In particular, a square-root transformation is likely to be suitable.                       [1]
 Or a quadratic model / term could be attempted.                                             [1]
                                                               [Marks available 9½, Maximum 6]
                                                                                      [Total 16]

 Commentary:




CS1B A2025
                                                                             © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report




 Parts (i)-(iii) were very well answered. A common error in part (iii) was plotting the residuals
 against the fitted values instead of the ‘Speed’ variable.
 Part (iv) involved critical comments and was not particularly well answered, with many
 candidates not providing clear and informative comments.


Q3
(i)
> mean_X <- (0.5+2.5)/2                                                                                   [½]
> mean_X
[1] 1.5                                                                                               [½]
                                                                                               [Maximum1]
(ii)
(a)    > set.seed(7)

       > n1 <- 10

       > n2 <-10000

       > sim_x1 <- runif(n1,0.5,2.5)                                                                   [2]
       > sim_x2 <- runif(n2,0.5,2.5)                                                                   [2]
                                                                                               [Maximum 4]
 (b)   > estimated_mean_1 <- mean(sim_x1)                                                              [1]
       > estimated_mean_2 <- mean(sim_x2)                                                              [1]
       > estimated_mean_1
                                                                                                          [½]
        [1] 1.408989
       > estimated_mean_2

        [1] 1.500889
                                                                                            [½]
                                                                                    [Maximum 3]
 (c) Both estimated means are close the exact mean of X.                                     [1]
 As the number of simulations increases, the estimated mean tends towards the exact
 mean of X.                                                                                  [2]
 Even with 10 simulated values, the first estimate is reasonably close to the exact
 mean.                                                                                       [1]
                                                               [Marks available 4, Maximum 2]
 (iii)
       (a)  > plot(density(sim_x2),                                                          [1]
 main = "Distribution",xlab="X",ylim=c(0,0.8))                                               [1]
 > curve(dunif(x,0.5,2.5),add=TRUE,col="red",lwd=3)                                          [3]




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report




 > legend("topright", legend=c("simulated distribution",
 "theoretical density"), col=c("black", "red"), lty=1:1)


                                                                                               [3]
                                                                                   [Maximum 8]
   (b)     The simulated distribution remains close to the theoretical density of 0.5          [1]
           for the range of 0.5 to 2.5.
 The simulated distribution is a fairly accurate estimation for the theoretical density.       [1]
                                                                                   [Maximum 2]
                                                                                        [Total 20]

 Commentary:
 Parts (i)-(iii)(a) were well answered. In part (iii)(a) a number of candidates failed to provide
 a clear description to distinguish between the two curves on the graph (e.g. a graph key).
 Answers in part (iii)(b) were mixed, with a number of candidates not providing sufficient
 comparison between the two distributions on the graph.




 Q4
 (i)
 set.seed(222)
 samp_Y<- rexp(20,5)                                                                                       [1]




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
               CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



                                                                                                [Maximum 1]
 (ii)
 samp_X <- exp(-samp_Y)                                                                                 [2]
                                                                                                [Maximum 2]
 (iii)
         (a) set.seed(222)
             n <- 20

      thetahat_A<- thetahat_B<- thetahat_C<- thetahat_D<-
      rep(0,1000)                                                                                           [1]
 for(i in 1:1000){                                                                                          [1]
 samp_Y <- rexp(n,5)                                                                                       [½]
 samp_X <- exp(-samp_Y)                                                                                    [½]
 thetahat_A[i] <- mean(samp_X)/(1-mean(samp_X))                                                             [1]
 thetahat_B[i] <- -n/sum(log(samp_X))                                                                       [1]
 thetahat_C[i] <- 2*(n+1)/(1-2*sum(log(samp_X)))                                                            [1]
 thetahat_D[i] <- -(n-1)/sum(log(samp_X)) }                                                                 [1]

                                                                                                [Maximum 7]
         (b) Mean square error
             mean(thetahat_A)
             5.233578
                                                                                                            [1]
 sd(thetahat_A)
 1.334069                                                                                                   [1]
 mean(thetahat_B)
 5.275062                                                                                                   [1]
 sd(thetahat_B)
 1.313612                                                                                                   [1]
 mean(thetahat_C)
 4.863234                                                                                                   [1]
 sd(thetahat_C)
 1.044771                                                                                                   [1]
 mean(thetahat_D)
 5.011309                                                                                                   [1]
 sd(thetahat_D)
 1.247931                                                                                                   [1]
 Mean <-
 c(mean(thetahat_A),mean(thetahat_B),mean(thetahat_C),mean
 (thetahat_D))




CS1B A2025
                                                                          © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



 Stde <-
 c(sd(thetahat_A),sd(thetahat_B),sd(thetahat_C),sd(thetaha
 t_D))
                                                                                                           [1]
 MSE <- (Mean -5)^2 + Stde^2
 MSE
 # 1.834300 1.801236 1.110252 1.557461

  Estimator              Mean             Standard                      Mean Square
                                          deviation                     error
  𝜃                      5.23357          1.334069                      1.834300
  (thetahat_A)           8
  𝜃                      5.27506          1.313612                      1.801236
  (thetahat_B)           2
  𝜃                      4.86323          1.044771                      1.110252
  (thetahat_C)           4
  𝜃                      5.01130          1.247931                      1.557461
  (thetahat_D)           9

                                                                                              [4]
                                                                                   [Maximum 13]
 (c) The Bayesian estimator 𝜃 is the best estimator for 𝜃 because it has lower MSE
 than the other estimators. It is asymptotically close to 5 and has smaller standard          [2]
 error.
                                                                                    [Maximum 2]
                                                                                      [Total 25]

 Commentary
 Part (i) was answered well.
 Answers in part (ii) were mixed, with a number of candidates not using the direct relationship
 between X and Y provided in the question, and instead attempting unsuccessfully to generate
 values of X using its probability function directly.
 Part (iii)(a) was given satisfactory answers by most candidates.
 Part (iii)(b) was answered poorly. A large number of candidates failed to use a meaningful
 expression for calculating the mean square error, and in many cases the provided answers
 were largely incomplete.
 Answers in part (iii)(c) were mixed. A number of candidates were able to comment by
 identifying the estimator with the smaller MSE, but many did not provide clear comments.
 All parts of the question can be fully answered under the typographical error mentioned
 earlier in this report (resulting in different numerical answers).




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



Q5
(i)
Model1<-glm(price~ days+sqft+bedrooms, family = gaussian(
))                                                                                                         [2]
summary(Model1)                                                                                            [1]
Call:
glm(formula = price ~ days + sqft + bedrooms, family =
gaussian())

 Coefficients:
              Estimate Std. Error t value Pr(>|t|)
 (Intercept) 133.74720   36.08400   3.707 0.000351 ***
 days         -0.25343    0.36215 -0.700 0.485750
 sqft          0.35609    0.02276 15.647 < 2e-16 ***
 bedrooms     93.70133   30.21176   3.101 0.002528 **
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1
 ‘ ’ 1

 (Dispersion parameter for gaussian family taken to be 184
 51.88)

     Null deviance: 8370725                     on 99       degrees of freedom
 Residual deviance: 1771380                     on 96       degrees of freedom
 AIC: 1272

 Number of Fisher Scoring iterations: 2                                                                [1]
                                                                                               [Maximum 4]
 (ii)
 The intercept has a p value of 0.0003 and is (very) significant                                       [1]
 Days has a p value of 0.486 and is not significant                                                    [1]
 sqft has a p value of 2e-16 and is (very) significant                                                 [1]
 Bedrooms has a p value of 0.0025 and is (very) significant                                            [1]
                                                                                               [Maximum 4]
 (iii)
 Model2<-glm(price~ sqft+bedrooms, family = gaussian())                                                    [2]
 summary(Model2)

 Call:
 glm(formula = price ~ sqft + bedrooms, family = gaussian(
 ))




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report




 Coefficients:
              Estimate Std. Error t value Pr(>|t|)
 (Intercept) 117.53610   27.59313   4.260 4.74e-05 ***
 sqft          0.35507    0.02265 15.675 < 2e-16 ***
 bedrooms     95.75650   29.98949   3.193   0.0019 **
 ---
 Signif. Codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1
 ‘ ’ 1

 (Dispersion parameter for gaussian family taken to be 183
 54.81)

     Null deviance: 8370725                    on 99       degrees of freedom
 Residual deviance: 1780416                    on 97       degrees of freedom
 AIC: 1270.5

 Number of Fisher Scoring iterations: 2                                                               [1]
                                                                                              [Maximum 3]
 (iv)
 plot(sqft,price, xlab = "square footage", ylab="price",
 main="property prices")                                                                                  [1]
 points(sqft[bedrooms==1], price[bedrooms==1], col="red")                                                 [1]




 Properties with more than three bedrooms are shown in red, others in black

                                                                                                          [1]




CS1B A2025
                                                                        © Institute and Faculty of Actuaries
             CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



                                                                                              [Maximum 3]
 (v)
 Both prices increase with square footage.                                               [1]
 Properties with more than three bedrooms seem to achieve higher prices but the
 relationship is not very strong.                                                        [1]
 The variance of prices seems to increase with square footage.                           [1]
                                                              [Marks available 3, Maximum 2]
 (vi)
 Model3<-glm(price~ sqft+bedrooms, family = Gamma())                                     [2]
 summary(Model3)

 Call:
 glm(formula = price ~ sqft + bedrooms, family = Gamma())

 Deviance Residuals:
     Min       1Q    Median                        3Q             Max
 -1.0144 -0.3411     0.0278                    0.2248          0.7886

 Coefficients:
               Estimate Std. Error t value Pr(>|t|)
 (Intercept) 3.065e-03 1.518e-04 20.187 < 2e-16 ***
 sqft        -7.014e-07 7.766e-08 -9.032 1.65e-14 ***
 bedrooms    -4.664e-04 1.692e-04 -2.756 0.00699 **
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1
 ‘ ’ 1

 (Dispersion parameter for Gamma family taken to be 0.1320
 478)

     Null deviance: 31.268                   on 99       degrees of freedom
 Residual deviance: 14.883                   on 97       degrees of freedom
 AIC: 1342

 Number of Fisher Scoring iterations: 5
                                                                                                      [1]
                                                                                              [Maximum 3]
 (vii)
 The AIC from model2 is 1270.5, the AIC from Model3 is 1342.0                                         [1]
 so we prefer Model2 (since it has a lower AIC).                                                      [1]
                                                                                              [Maximum 2]




CS1B A2025
                                                                        © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report



 (viii)
 fitted.values = fitted(Model2)                                                                           [½]
 res.values = residuals(Model2)                                                                           [½]
 plot(fitted.values, res.values, main=”residuals vs
 fitted”)                                                                                                  [1]




                                                                                                       [1]
                                                                                               [Maximum 3]
 (ix)
 The residual plot shows patterns, and the scatter isn’t random.                             [½]
 The variance is not constant.                                                               [½]
 Our model needs to be improved.                                                              [1]
 A transformation of the observations before fitting the model might be useful.               [1]
 A different link function could also be tried to improve the fit.                            [1]
 Could investigate the interaction between the variables.                                     [1]
                                                                [Marks available 5, Maximum 2]
 (x)
 predict(Model2, data.frame(sqft=1500,bedrooms=0))                                            [1]
 650.1429                                                                                     [1]
                                                                                   [Maximum 2]
                                                                                     [Total 28]

 Commentary:
 Parts (i)-(iv), (vi)-(viii) and (x) were answered very well. Common errors included using
 plots that were not suitable for comparison (e.g. separate plots on different scales) in part




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
              CS1B ‑ Actuarial Statistics ‑ Core Principles - April 2025 - Examiners’ Report




 (iv) and plotting residuals against the default index (instead of the predicted values) in part
 (viii).
 Answers in part (v) were mixed, with many answers failing to capture comments on both
 types of properties.
 Part (ix) was not well answered, with a number of comments not providing a rounded
 commentary on the residuals and related implications on the model.

                                                                                      [Paper Total 100]




                       END OF EXAMINERS’ REPORT




CS1B A2025
                                                                         © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries



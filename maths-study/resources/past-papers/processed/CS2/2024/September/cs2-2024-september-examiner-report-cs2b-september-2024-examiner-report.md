---
normalized_id: cs2-2024-september-examiner-report-cs2b-september-2024-examiner-report
exam_code: CS2
year: 2024
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS2/CS2B/Sep24/CS2B_September 2024_Examiner Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs2-2024-september-examiner-report-cs2b-september-2024-examiner-report

EXAMINERS’ REPORT
CS2 Risk Modelling and Survival Analysis
Core Principles
Paper B
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report



                                                                  September 2024
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


CS2B S2024                                                              © Institute and Faculty of Actuaries
     CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


A.      General comments on the aims of this subject and how it is marked
The aim of the Risk Modelling and Survival Analysis subject is to provide a grounding in
mathematical and statistical modelling techniques that are of particular relevance to actuarial
work, including stochastic processes and survival models.

Candidates are reminded of the need to include the R code, that they have used to generate
their solutions, together with the main R output produced, in their answer script. Where the R
code was missing from a particular question part, no marks were awarded even if the output
(e.g. a graph) was included. Partial credit was awarded in the cases where the R code was
included but the R output was not.

The marking schedule below sets out one set of R code solutions for each question. Other
appropriate R code solutions gained full credit unless one specific approach had been
explicitly requested in the question paper. Candidates may use R packages in answering
questions however knowledge of packages beyond those specified in the subject Core
Reading is not expected for this examination. The questions are designed to be an assessment
of modelling and analysis using R rather than a test of knowledge of R packages.

In cases where an error was carried forward to later parts of the answer, candidates were not
penalised a second time for the same error if those later parts were otherwise answered
correctly.

In higher order skills questions, where comments were required, well-reasoned comments
that differed from those provided in the solutions also received credit as appropriate.


B.      Comments on candidate performance in this diet of the examination
Performance in the CS2B paper continues to improve with the mean mark equal to the pass
mark in this session and average marks for the B paper higher than those for the A paper this
time around. Candidates generally evidence the ability to complete statistical calculations and
modelling tasks in R as well as to manipulate simple data structures and generate properly
labelled plots.

The first question on time series models was very well answered with a mean mark of more
than 27 out of 35. Fitting and then plotting time series models was completed with accuracy.
The other two questions were quite well answered in parts. In the survival models question,
candidates struggled with the exposed-to-risk calculation and the application of statistical
tests. The quality of many answers to the last question on penalised multiple regression was
markedly better than those for the Introduction to Machine Learning section of the CS2
syllabus in recent years. This is welcome. However, many candidates did not pay careful
attention to the penalty function defined in the question. This, like the exposed-to-risk
calculation in the previous question, was not mathematically complex but did require
attention to detail and a proper reading of the question actually being asked.




CS2B S2024                                                               © Institute and Faculty of Actuaries
     CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


C.      Pass Mark
The Pass Mark for this exam was 55.
1167 candidates presented themselves and 549 passed.

The pass mark reflects the level attained by a minimally competent candidate in this
examination setting. The pass mark may therefore vary between different examination
sessions. The minimally competent candidate is first assessed through a “bottom-up”
summation of marks appropriate to each part question in each examination paper. This is then
confirmed during marking with both quantitative and qualitative analysis of individual
question performance.




CS2B S2024                                                               © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


Solutions for Subject CS2B – September 2024

 Q1
 (i)
 sales_data <-                                                                                           [½]
 read.csv("sales_volume.csv")                                                                             [1]
 tail(sales_data, 5)                                                                                     [½]

             day products_sold
  386        386           383
  387        387           386
  388        388           394
  389        389           396
  390        390           400                                                                           [½]

 (ii)
 sum( sort(sales_data$day) != sales_data$day )                                                            [2]
 0                                                                                                       [½]
 Hence, the numbers are in ascending order                                                               [½]

 (iii)
 plot(sales_data$products_sold ~ sales_data$day,                                                          [1]
 type="l",                                                                                               [½]
 xlab="day", ylab="Product sold",                                                                        [½]
 main="Number of product sold over time")                                                                [½]




                                                                                                         [½]

 (iv)
 Overall, the daily sale volume has increased over time                                                  [½]
 Sales volume varies over time, with periods of increasing sales followed by periods
 of reduction.                                                                                           [½]

CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report




 (v)
 products_sold_0 <- sales_data$products_sold                                                             [½]
 products_sold_1 <- diff(products_sold_0)                                                                 [1]
 products_sold_2 <- diff(products_sold_1)                                                                [½]
 products_sold_0 is not stationary because there is a clear upward trend in the sales
 volume.                                                                                                  [1]
 acf(products_sold_1)                                                                                    [½]




                                                                                                         [½]
 products_sold_1 is not stationary as the acf is not decreasing fast enough.
                                                                                                         [1]
 acf(products_sold_2)                                                                                    [½]




                                                                                                         [½]


CS2B S2024                                                              © Institute and Faculty of Actuaries
         CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 products_sold_2 is stationary as acf decaying very fast                                                       [1]

 (vi)
 aic_matrix <- matrix(NA, 4, 4)                                                                                [1]
 colnames(aic_matrix) = rownames(aic_matrix) = 0:3                                                             [1]
 for(p in 0:3){                                                                                                [½]
 for(q in 0:3){                                                                                                [½]
 fit=arima(products_sold_0,order=c(p,2,q))                                                                     [2]
 aic_matrix[p+1,q+1] <- fit$aic                                                                                [2]
     }
 }
 aic_matrix                                                                                                    [½]

                0             1              2             3
 0       2136.506      2074.782       2071.671      2070.710
 1       2093.780      2069.713       2057.123      2058.549
 2       2085.268      2060.349       2058.422      2058.013
 3       2078.455      2060.390       2060.315      2066.222                                                   [½]

 (vii)
 The lowest AIC is achieved with p=1 and q=2.
 Hence, the best model is ARIMA(1,2,2)                                                                         [1]


 (viii)
 selected_model = arima(products_sold_0,order=c(1,2,2))                                                        [½]
 forecast_volume = predict(selected_model, n.ahead=60)$pred                                                    [2]
 forecast_volume[0:10]                                                                                         [1]
 [1] 403.0683 405.7941 408.2296 410.4191 412.4002 414.2045 415.8590                                            [½]
 417.3866 418.8067 420.1355



 (ix)
 plot(sales_data$products_sold ~ sales_data$day,
             type="l",
             xlab="day", ylab="Product sold",
             main="Number of product sold over time",
             xlim=c(0, 450))                                                                                   [1]
            x_proj <- 390+c(1:60)                                                                              [1]
 lines(forecast_volume ~ x_proj, col="blue")                                                                  [1½]




CS2B S2024                                                                   © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report




                                                                                                         [½]


 (x)
 The model predicts increasing sales volume.                                                         [1]
 The forecast is mean reverting                                                                      [1]
 but does not show the variability of the original series                                            [1]
 However, that prediction is subject to uncertainty.                                                 [1]
 We should check if the model fits the data well in the first place.                                 [1]
                                                                                            [Maximum 2]
                                                                                              [Total 35]


 Commentary:
 This question was well answered with most candidates scoring well throughout the question.
 In parts (iii) and (ix) a number of different plots styles were acceptable. Candidates do not
 need to use specialist plot-generating packages (e.g. ggplot) for this examination as a simple
 plot() function in basic R will suffice. However, plots must be properly labelled with a title,
 legend (where appropriate) and axis labels for full marks. The tests of stationarity in part (v)
 could be completed in a number of ways to secure full marks. The code above uses ACF plots
 and their interpretation. Candidates that used the Dickey-Fuller or other statistical tests
 were eligible for full marks as long as the interpretation of the tests was clearly spelt out in
 the Word document. Simply comparing the computed variances of different series only
 gained one quarter of the available marks.


 Q2
 (i)
 my_data<-read.csv("~/S24_Q2_MortData1.csv")                                                             [1]



CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 (ii)
 #calculate etr in each year of age
 sim_lives <- length(my_data$X)
 bn<-matrix(0,sim_livesx,10)                                                                             [1]
 for (agezz in 1:10) {                                                                                   [1]
   for (ss in 1:sim_livesx) {                                                                            [1]
  bn[ss,agezz]<-max(min(my_data[ss,4],(agezz))-max(my_data[ss,3],(agezz-1)),0)                           [3]
 }
 }
 etr1<-colSums(bn)                                                                                       [½]
 etr1                                                                                                    [½]
 [1] 5737.507 15630.348 19255.943 18669.125 17763.585 16698.656
 [7] 15586.883 14364.160 8334.790 1713.752


 (iii)
 death_data<-NULL
 data_x<-as.data.frame(my_data)                                                                          [½]
 death_data<-data_x%>%filter(data_x[,6]==1)                                                               [1]
 death_age<-floor(death_data[,4])                                                                         [1]
 death_summr<-table(death_age)                                                                            [1]
 death_summr                                                                                             [½]
 [1] 1256 3996 5770 6455 7406 8052 8878 9653 6464 1531

 (iv)
 crudx<-death_summr/etr1                                                                                 [1]
 crudx                                                                                                   [1]
 [1] 0.2189104 0.2556565 0.2996478 0.3457580 0.4169203 0.4821945
 [7] 0.5695815 0.6720198 0.7755445 0.8933613

 (v)
 table1<-read.csv("~/ S24_Q2_Table1.csv")
 table2<-read.csv("~/ S24_Q2_Table2.csv")                                                                [½]
 xq <- seq(0,9)
 plot(xq, crudx, ylim = c(0,1.2), xlab = “age last”, ylab = “mortality rate”, main =
 “Comparison of crude and table rates”)                                                                   [2]
 lines(xq,table1[,3],col="green")                                                                        [½]
 lines(xq,table2[,3],col="red")                                                                          [½]




CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report




                                                                                                         [½]



 (vi)
 H0 the table 1 rates are the true underlying mortality rates                                             [½]
 Chi squared test
 exp_deaths<-table1[,3]*etr1                                                                              [½]
 z_markov1<-(death_summr-exp_deaths)/exp_deaths^0.5                                                        [1]
 z_markov1
 [1] 2.9145873 4.1228317 3.9353158 1.8280894 3.2470752
  [6] 0.9871812 0.5064923 -0.1393811 -2.4378918 -2.3901350

 z2_Markov1<-z_markov1^2                                                                                  [½]
 sum(z2_Markov1)                                                                                          [½]
 [1] 67.77123

 degrees of freedom = number of ages = 10
 qchisq(0.95,length(z_markov1))                                                                           [½]
 [1] 18.30704
 #test statistics is greater than the chi-aq critical value therefore we reject H0                        [½]

 Signs test
 sum(z_markov1 > 0)                                                                                      [1½]
 [1] 7


 pbinom(sum(z_markov1 > 0),length(z_markov1),0.5)                                                        [1½]
 [1] 0.9453125


 #the binomial probability is less than 0.95 therefore we do not reject H0                                [½]

 Serial correlations test
 r<-cor(z_markov1[1:9],z_markov1[2:10])                                                                   [2]

CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 test_stat<-r*(length(z_markov1)-1)^0.5                                                                  [1½]
 test_stat
 [1] 2.470238


 round(qnorm(0.99),3)                                                                                     [½]
 [1] 2.326
 # the test stat is greater than the Normal critical value therefore we reject H0                         [½]

 (vii)
 H0 the table 2 rates are the true underlying mortality rates                                             [½]

 Chi squared test
 exp_deaths2<-table2[,3]*etr1
 z_markov1<-(death_summr-exp_deaths2)/exp_deaths^0.5
 z_markov1
 [1]     0.91126821     1.24295072       1.31741660 -0.06241698             2.20324631
  [6]     0.89358365      1.45900307       1.94464129       0.18503641 -0.65758106


 z2_Markov1<-z_markov1^2
 sum(z2_Markov1)
 [1] 16.14458


 qchisq(0.95,length(z_markov1))                                                                          [1½]
 [1] 18.30704


 # test statistic less than Chi sq critical value therefore do not reject H0                              [½]

 Signs test
 sum(z_markov1 > 0)
 [1] 8
 pbinom(sum(z_markov1 > 0),length(z_markov1),0.5)                                                         [1]
 [1] 0.9892578


 #the binomial probability is greater than 0.95 therefore reject H0                                       [½]

 Serial correlations test
 r<-cor(z_markov1[1:9],z_markov1[2:10])
 test_stat<-r*(length(z_markov1)-1)^0.5
 test_stat
 [1] -0.3537501


 round(qnorm(0.99),3)                                                                                    [1½]
 [1] 2.326


 #therefore we do not reject H0                                                                           [½]

CS2B S2024                                                              © Institute and Faculty of Actuaries
     CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


                                                                                                 [Total 36]


 Commentary:
 Some parts of this question were very well answered including the calculation of crude rates
 and the plot of crude and table rates. Many candidates struggled with the calculation of
 exposed to risk in part (ii). This is not mathematically complicated but does require attention
 to detail including definitions of age. In parts (vi) and (vii) common errors included not
 having the correct degrees of freedom for the Chi-squared test. Candidates are reminded
 that where tests of hypothesis are examined the answer should include a clear statement of
 H0 at the beginning and a clear conclusion in relation to that H0 at the end. Answers that
 only included calculations of test statistics and critical values in R only gained partial marks.



 Q3
 (i)
 fund_data <- read.csv("~//S24_Q3_Data.csv")                                                               [1]
 head(fund_data, 9)                                                                                       [½]
      fund return rating risk size experience inflow holdings
 1      1   8.11      3    5 523           1     24       26
 2      2   4.81      4    5 362           2      1       34
 3      3   4.20      3    5 284           7     -3       49
 4      4   9.19      5    3 223           7     22       35
 5      5   3.30      5    7 268           8      6       42
 6      6 11.46       1    7 546          14     -8       27
 7      7   7.93      4    5 179           2     23       48
 8      8   7.03      3    4 444          10     11       42
 9      9   5.69      3    3 113          14     24       51

     turnover
 1       53.6
 2       85.1
 3       39.7
 4       78.4
 5       69.2
 6       25.0
 7       19.4
 8       54.0
 9       91.0                                                                                             [½]

 (ii)
 y <- fund_data$return
 x1 <- fund_data$rating
 x2 <- fund_data$risk
 x3 <- fund_data$size
 x4 <- fund_data$experience
 x5 <- fund_data$inflow
 x6 <- fund_data$holdings
 x7 <- fund_data$turnover
 mlrm <- lm(y ~ x1 + x2 + x3 + x4 + x5 + x6 + x7)                                                         [2]


CS2B S2024                                                               © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 summary(mlrm)                                                                                            [½]

 Call:
 lm(formula = y ~ x1 + x2 + x3 + x4 + x5 + x6 + x7)

 Residuals:
     Min      1Q        Median          3Q        Max
 -4.4513 -1.2861        0.0826      1.2346     4.5671

 Coefficients:
              Estimate Std. Error t value Pr(>|t|)
 (Intercept) 3.935926    2.669987   1.474 0.14790
 x1           0.677807   0.341385   1.985 0.05365 .
 x2           0.063289   0.184772   0.343 0.73366
 x3           0.003580   0.002029   1.764 0.08497 .
 x4          -0.020193   0.080479 -0.251 0.80311
 x5           0.004293   0.022741   0.189 0.85116
 x6           0.042458   0.036084   1.177 0.24597
 x7          -0.037913   0.012434 -3.049 0.00396 **
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

 Residual standard error: 2.271 on 42 degrees of freedom
 Multiple R-squared: 0.3227, Adjusted R-squared: 0.2098
 F-statistic: 2.858 on 7 and 42 DF, p-value: 0.01563

                                                                                                          [½]
 (iii)
 The beta coefficient for ratings variable is positive                                                    [½]
 Suggesting that higher rated funds have higher returns in the period                                     [½]
 But the t value associated with that coefficient is only significant at 10% level                         [1]
 And the overall model significance / R-sq is not high                                                     [1]

 (iv)
 Allows direct comparison of the beta values in the regression results                                    [½]
 Which is needed for regression penalty models                                                            [½]

 (v)
 x1r <- (x1 - mean(x1))/sd(x1)
 x2r <- (x2 - mean(x2))/sd(x2)
 x3r <- (x3 - mean(x3))/sd(x3)
 x4r <- (x4 - mean(x4))/sd(x4)
 x5r <- (x5 - mean(x5))/sd(x5)
 x6r <- (x6 - mean(x6))/sd(x6)
 x7r <- (x7 - mean(x7))/sd(x7)                                                                           [2½]
 rescaled_mlrm <- lm(y~ x1r+x2r+x3r+x4r+x5r+x6r+x7r)                                                      [½]
 summary(rescaled_mlrm)                                                                                   [½]

 Call:
 lm(formula = y ~ x1r + x2r + x3r + x4r + x5r + x6r + x7r)                                                [½]

CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report



 Residuals:
     Min      1Q        Median          3Q        Max
 -4.4513 -1.2861        0.0826      1.2346     4.5671

 Coefficients:
             Estimate Std. Error t value Pr(>|t|)
 (Intercept) 7.22160     0.32123 22.481 < 2e-16 ***
 x1r           0.72461   0.36496   1.985 0.05365 .
 x2r           0.12450   0.36348   0.343 0.73366
 x3r           0.60400   0.34236   1.764 0.08497 .
 x4r         -0.08497    0.33863 -0.251 0.80311
 x5r           0.06569   0.34794   0.189 0.85116
 x6r           0.40771   0.34651   1.177 0.24597
 x7r         -1.04282    0.34202 -3.049 0.00396 **
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

 Residual standard error: 2.271 on 42 degrees of freedom
 Multiple R-squared: 0.3227, Adjusted R-squared: 0.2098
 F-statistic: 2.858 on 7 and 42 DF, p-value: 0.01563



 (vi)
 betas <- coef(rescaled_mlrm)                                                                            [½]
 penalty <- sum(betas^2)                                                                                 [½]
 penalty                                                                                                 [½]
 [1] 54.32211                                                                                            [½]

 (vii)
 anova(rescaled_mlrm)                                                                                    [1½]
 Analysis of Variance Table

 Response: y
           Df Sum Sq Mean Sq F value    Pr(>F)
 x1r         1 14.261 14.261 2.7641 0.103848
 x2r         1  5.770   5.770 1.1183 0.296327
 x3r         1 22.795 22.795 4.4182 0.041595 *
 x4r         1  0.492   0.492 0.0953 0.759077
 x5r         1  4.987   4.987 0.9666 0.331165
 x6r         1  6.958   6.958 1.3485 0.252094
 x7r         1 47.964 47.964 9.2963 0.003964 **
 Residuals 42 216.697   5.159
 ---
 Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
 RSS of the rescaled full multiple regression = 216.697
                                                                                                           [1]
 simple <- lm(y~x1r)                                                                                       [1]
 anova(simple)                                                                                            [½]




CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report


 Analysis of Variance Table

 Response: y
           Df Sum Sq Mean Sq F value Pr(>F)
 x1r         1 14.261 14.261 2.2395 0.1411
 Residuals 48 305.663  6.368

 RSS of simple regression model = 305.663                                                                  [1]

 penalty2 <- sum(coef(simple)^2)
 penalty2
 [1] 52.44255                                                                                              [1]
 lambda = c(0:10)                                                                                         [½]
 penalised_multiple = 216.697 - lambda * penalty                                                         [1½]
 penalised_simple = 305.663 - lambda * penalty2                                                            [1]
 output = cbind(lambda, penalised_multiple, penalised_simple)                                              [1]
 output
          lambda penalised_multiple penalised_simple
  [1,]         0        216.6970000        305.66300
  [2,]         1        162.3748900        253.22045
  [3,]         2        108.0527801        200.77790
  [4,]         3         53.7306701        148.33535
  [5,]         4         -0.5914399         95.89279
  [6,]         5        -54.9135499         43.45024
  [7,]         6       -109.2356598         -8.99231
  [8,]         7       -163.5577698        -61.43486
  [9,]         8       -217.8798798       -113.87741
 [10,]         9       -272.2019898       -166.31996
 [11,]        10       -326.5240997       -218.76252

 Hence there are no values of lambda for which the penalised sum of squares is
 lower for the simple regression model.                                                                   [2]

 (viii)
 The claim is not supported by the regression analysis                                                    [1]
 No matter how much we penalise additional parameters, the full model is always
 superior to the simple linear regression model                                                       [½]
 Which suggests that other explanatory variables beyond ratings are significant                       [½]
                                                                                               [Total 29]


 Commentary:
 Answers to this question were better than those for the Introduction to Machine Learning
 syllabus area in many recent sessions. The early part of the question requiring a multiple
 linear regression model to be fitted was well answered. The average marks scored then tailed
 off as the question moved through scaling explanatory variables and into penalised
 regression. In parts (vi) onwards, candidates who removed the coefficient of beta_0 in the
 penalty function gained full marks alongside those who left it in. The former is a more usual
 penalised regression methodology whilst the latter conforms better to the equation set out in
 the question. Answers to part (viii) were particularly poor which is disappointing as there will
 be many more occasions in which actuaries are called upon to interpret regression models
 than when they need to code the models themselves. The examiners would expect that

CS2B S2024                                                              © Institute and Faculty of Actuaries
    CS2B ‑ Risk Modelling and Survival Analysis ‑ Core Principles - September 2024 - Examiners’ report



 candidates be able to offer a simple interpretation of regression coefficients and of residuals
 or ANOVA output.


                                                                                       [Paper Total 100]




                        END OF EXAMINERS’ REPORT




CS2B S2024                                                              © Institute and Faculty of Actuaries
www.actuaries.org.uk
© 2021 Institute and Faculty of Actuaries


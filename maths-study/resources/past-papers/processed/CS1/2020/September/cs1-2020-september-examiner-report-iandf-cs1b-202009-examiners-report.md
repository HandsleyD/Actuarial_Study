---
normalized_id: cs1-2020-september-examiner-report-iandf-cs1b-202009-examiners-report
exam_code: CS1
year: 2020
sitting: September
document_type: examiner-report
source_repo_path: resources/past-papers/raw/CS1/CS1B/Sep20/IandF_CS1B_202009_Examiners_Report.pdf
conversion_method: pdftotext
qa_status: pending
---
# cs1-2020-september-examiner-report-iandf-cs1b-202009-examiners-report

       INSTITUTE AND FACULTY OF ACTUARIES




                         EXAMINERS’ REPORT
                                    September 2020

             Subject CS1 Paper B – Actuarial Statistics
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
particularly the open-ended questions in the later subjects, the report may contain more points
than the Examiners will expect from a solution that scores full marks.

The report is written based on the legislative and regulatory context pertaining to the date that
the examination was set. Candidates should take into account the possibility that
circumstances may have changed if using these reports for revision.


Mike Hammer
Chair of the Board of Examiners
December 2020



                                                            Institute and Faculty of Actuaries
     Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


   A. General comments on the aims of this subject and how it is marked

1. The aim of the Actuarial Statistics subject is to provide a grounding in mathematical and
   statistical techniques that are of particular relevance to actuarial work.

2. In particular, the CS1B paper is a problem-based examination and focuses on the
   assessment of computer-based data analysis and statistical modelling skills.

3. For the CS1B exam candidates are expected to include the R code that they have used to
   obtain the answers, together with the main R output produced, such as charts or tables.

4. When a question requires a particular numerical answer or conclusion, this should be
   explicitly and clearly stated, separately from, and in addition to the R output that may
   contain the relevant numerical information.

5. Some of the questions in the examination paper admit alternative solutions from these
   presented in this report, or different ways in which the provided answer can be
   determined. In particular, there are variations of the R code presented here, that are valid
   and can produce the correct output. All mathematically and computationally valid
   solutions or answers received credit as appropriate.

6. In cases where the same error was carried forward to later parts of the answer, candidates
   were given full credit for the later parts.

7. In questions where comments were required, valid comments that were different from
   those provided in the solutions also received full credit where appropriate.

8. In cases where a question is based on simulations, all numerical answers provided in this
   document are examples of possible results. The numerical values presented here will be
   different if the simulations are repeated.

   B. Comments on candidate’ performance in this diet of the examination.

1. Overall performance in CS1B was satisfactory. Well prepared candidates were able to
   score highly.

2. Candidates demonstrated a good knowledge of the key R commands required for the
   application of the statistical techniques involved in this subject.

3. The quality of the commentary given alongside the R output was not always strong and
   varied significantly among candidates.

4. In a number od occasions, errors appeared when manually typing in the R code for
   entering data into R. Candidates are advised to be careful when manually entering data.

   C. Pass Mark

       The Pass Mark for this exam was 60.
       1189 presented themselves and 823 passed.



CS1B S2020                                                               ©Institute and Faculty of Actuaries
        Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


Q1

amounts = c(1.95, 1.80, 2.10, 1.82, 1.75, 2.01, 1.83, 1.90)


(i) Use t.test():

t.test(amounts,conf.level=0.80)                                                                             [2]

From output:

80 percent confidence interval: (1.836, 1.954)                                                              [2]

(ii) The employee sees that value 2.0 is not in the interval and therefore a hypothesis of a 2
gram portion would be rejected at the 20% level.                                             [2]

                                                                                                   [Total 6]

 Part (i) was well answered. In part (ii) most candidates correctly rejected the hypothesis,
 but many failed to state the level of the test.




Q2

# set up the data matrix
exam.success = matrix(c(132,120,27,51),ncol=2,nrow=2)

# print data matrix to check for errors

exam.success
     [,1] [,2]
[1,] 132     27
[2,] 120     51

(i)
The null hypothesis being tested is that tutorial attendance and exam success are independent,
        against
the alternative that they are not independent.                                            [2]

(ii)
# run chi-square test and extract expected frequencies

chisq.test(exam.success)$expected                                                                           [1]
         [,1]     [,2]
[1,] 121.4182 37.58182
[2,] 130.5818 40.41818
                                                                                                            [2]
(iii)


CS1B S2020                                                                  ©Institute and Faculty of Actuaries
        Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




# run chi-square test, removing the Yates' continuity
correction

chisq.test(exam.success, correct=FALSE)                                                                     [2]

           Pearson's Chi-squared test

data: exam.success
X-squared = 7.5296, df = 1, p-value = 0.006069
                                                                                                            [1]

The p-value is significant (e.g. at the 1% level), since 0.006069 < 0.01 – therefore there is
evidence to reject the null hypothesis and we conclude that tutorial attendance and exam
success are not independent.                                                                  [3]

                                                                                                  [Total 11]

      Part (i) was well performed. Answers in part (ii) were mixed, with a number of candidates
      not attempting this part, or using manual derivations containing various errors. Part (iii)
      was well answered. Note that including the Yates' continuity correction was not penalised
      here.



Q3

(i)

# input the data

weight =
c(474.11,512.01,493.64,495.03,518.13,486.03,494.48,501.76,498.
83,503.02)


# run a one-sided t-test (as we are concerned with the one
sided scenario of ‘under-filling’)

The test has the null hypothesis that the mean sweet bag weight is equal to 500 grams, and
the alternative hypothesis that the mean sweet bag weight is less than 500 grams.         [3]

t.test(weight,mu=500,alternative="less")                                                                    [1]

One Sample t-test
data: weight
t = -0.58321, df = 9, p-value = 0.287
alternative hypothesis: true mean is less than 500
95 percent confidence interval:
     -Inf 504.9207


CS1B S2020                                                                  ©Institute and Faculty of Actuaries
     Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


sample estimates:
mean of x
  497.704
                                                                                                         [1]

The test has been performed at the 5% significance level. Since the p-value of 0.287 is not
less than the significance level of 0.05, we cannot reject the null hypothesis.          [3]


(ii)
Since we cannot reject the null hypothesis that the mean sweet bag weight is 500 grams, in
favour of the alternative that the mean sweet bag weight is less than 500 grams,         [1]
there is insufficient evidence that the sweet bags are being under-filled.               [1]
                                                                                  [Total 10]

Part (i) was generally adequately answered, with common errors including an incorrect
alternative hypothesis (i.e. not identifying mu < 500) and the t test often being inconsistent with
stated alternative hypothesis. Answers in part (ii) were mixed. Candidates that gave part of the
answer to (ii) in part (i), were given credit as appropriate.




Q4

(i) (a)
    load("smoking_data.RData")

     plot(alcohol, cigarettes, pch = 19, main="Alcohol versus
     Cigarettes",
      xlab = "Alcohol per adult (litres/year)",
      ylab = "Cigarettes per adult per year")




CS1B S2020                                                               ©Institute and Faculty of Actuaries
        Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




                                                                                                             [2]



           (b) There is a moderate positive association between average alcohol consumption
           and average cigarette consumption.                                               [1]

           The overall shape of the scatterplot is roughly linear                                           [1]

           with the exception of two points that indicate higher average cigarette consumption
           relative to alcohol consumption than the other countries in this sample.          [1]

(ii) r1 = cor(alcohol, cigarettes, method="pearson")                                                        [1]

    Pearson’s sample correlation coefficient is equal to 0.485.                                             [1]


(iii)
        alcohol.2 = alcohol[-c(6,16)]

        cigarettes.2 = cigarettes[-c(6,16)]

    The code removes the data in the 6th and 16th element of the data vectors.                              [1]

    These correspond to the two countries that produce the largest deviations from the overall
    pattern of the plot (outliers): Greece (10.4, 8.3) and USA (4.7, 4.9).                [2]

(iv) (a)
           plot(alcohol.2, cigarettes.2, pch = 19, main="Alcohol
           versus Cigarettes
             (GR,   USA omitted)", xlab = "Alcohol per adult
           (litres/year)", ylab =


CS1B S2020                                                                  ©Institute and Faculty of Actuaries
        Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


               "Cigarettes per adult per year")




                                                                                                             [2]


    (b) r2 = cor(alcohol.2, cigarettes.2, method="pearson")                                                 [1]

          Pearson’s sample correlation coefficient is now equal to 0.862.                                   [1]

    (c) The correlation coefficient increases when we remove the two countries producing
    large deviations                                                                     [1]

          because the remaining observations follow a fairly strong linear pattern.                         [1]

(v) The R code is

    cor.test(alcohol.2, cigarettes.2, method = "pearson",
    alternative = "greater")                                                                                [2]

    The p-value is equal to 3.738 × 10−5 , showing very strong evidence against the null
    hypothesis. We reject that Pearson’s correlation coefficient is equal to zero, in favour of
    the alternative that it is positive.                                                   [3]



(vi) Although the analysis suggests statistical association, we have not shown causation here.
    So the report is not accurate.                                                        [2]

(vii)     (a) The R code is

    m1 = lm(cigarettes.2 ~ alcohol.2)
    summary(m1)                                                                                             [1]



CS1B S2020                                                                  ©Institute and Faculty of Actuaries
     Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




R Output:

Call:
lm(formula = cigarettes.2 ~ alcohol.2)

Residuals:
     Min       1Q   Median                          3Q             Max
-1.04695 -0.41333 -0.01515                     0.48439         0.91801

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.29845    0.75715 -0.394       0.7
alcohol.2     0.42207   0.07178   5.880 7.48e-05 ***
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

Residual standard error: 0.6288 on 12 degrees of freedom
Multiple R-squared: 0.7424,     Adjusted R-squared: 0.7209
F-statistic: 34.58 on 1 and 12 DF, p-value: 7.476e-05

   Draw the fitted line:

   abline(m1)                                                                                            [1]




                                                                                                          [2]

       From the R output the estimate of parameter 𝜎𝜎 is 0.6288.                                         [1]

(viii) From the R output the proportion of the total variability of the responses explained by
           the model is 0.7424.                                                             [1]

(ix) R code:


CS1B S2020                                                               ©Institute and Faculty of Actuaries
    Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




      plot(alcohol.2,residuals(m1), main="Residuals plot (GR,
      USA omitted)", xlab = "Alcohol per adult (litres/year)",
      ylab = "Residuals")




                                                                                                        [2]

       (x) The mean of the errors seems to be close to zero,                                            [1]
           but their variance increases with x.                                                         [1]
           This suggests that the assumed model may not be appropriate.                                 [1]

                                                                                             [Total 34]


 Part (i) was well answered. A number of candidates did not provide appropriate or adequate
 comments on the linearity of the plot. Parts (ii), (iii) and (iv) were generally well answered. In
 part (v) many candidates did not mention the strength of the evidence against the null
 hypothesis, while a few performed a 2-sided test. In part (vi) a number of candidates
 erroneously indicated that correlation implies causation. Part (vii) was reasonably well
 answered, while in part (viii) some candidates quoted the adjusted R-squared. Parts (ix) and
 (x) were poorly answered with several incorrect plots given and a number of candidates not
 attempting these parts.




CS1B S2020                                                              ©Institute and Faculty of Actuaries
       Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report




Q5

(i)

# M = 3000
# n = 10
# alpha = 5
# s = 1
# pml = numeric(M)
# OR # rep(0,M)
                                                                                                           [4]
# Z = n/(alpha + n - 1)                                                                                    [1]
# for (i in 1:M){                                                                                          [1]
#    lam = rgamma(1, alpha, s)                                                                             [2]
#    x = rexp(n, lam)                                                                                      [1]
#    pml[i] = Z*sum(x)/n + (1-Z)*s/(alpha-1)                                                               [2]
# }

A point estimate is given as the mean of the produced estimates, i.e.

#mean(pml)                                                                                                 [2]

which gives 0.248.                                                                                         [1]



(ii)

This time we use the same code as in (i) but we are recording the mean of 𝑥𝑥 for the case 𝑛𝑛 =
1000.

M = 3000

n = 1000
alpha = 5
s = 1
pml = numeric(M)
mx = numeric(M)

Z = n/(alpha + n - 1)

for (i in 1:M){
  lam = rgamma(1, alpha, s)
  x = rexp(n, lam)
  mx[i] = mean(x)
  pml[i] = Z*sum(x)/n + (1-Z)*s/(alpha-1)




CS1B S2020                                                                 ©Institute and Faculty of Actuaries
        Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report


}

mean(pml)
mean(mx)

With this new run, both estimates are equal to 0.245.

                                                                                                 [15]

(iii)

hist(pml, main = "Histogram of posterior means",
     xlab = "Posterior means")
hist(mx, main ="Histogram of the distribution of the means of x",
xlab = "mean of x")




                                                                                                            [4]


(iv)

The distributions look identical.                                                                           [2]

(v)
We should expect that the distributions are the same,                                          [2]
since the credibility factor 𝑍𝑍 tends to 1 as 𝑛𝑛 increases and therefore the posterior mean of 1⁄𝜆𝜆
becomes 𝑥𝑥̅ .                                                                                  [2]
                                                                                        [Total 39]




CS1B S2020                                                                  ©Institute and Faculty of Actuaries
    Subject CS1 Paper B (Actuarial Statistics – Core Principles) – September 2020 – Examiners’ report



   Parts (i) and (ii) were reasonably well answered. Typical errors included credibility premium
   formula errors, sampling from wrong distributions and use of incorrect parameters. Part (iii)
   was generally well answered. Answers in parts (iv) and (v) were mixed, with some comments
   not being very clear.
                       END OF EXAMINERS’ REPORT




CS1B S2020                                                              ©Institute and Faculty of Actuaries



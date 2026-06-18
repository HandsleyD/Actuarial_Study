---
normalized_id: shared-pdf-reference-hypothesis-testing-in-the-market-model
exam_code: SHARED
material_scope: hypothesis testing in the market model.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Hypothesis Testing in the Market Model.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-hypothesis-testing-in-the-market-model

         Introduction to Financial Econometrics
         Hypothesis Testing in the Market Model
                                  Eric Zivot
                           Department of Economics
                           University of Washington
                                February 29, 2000


1     Hypothesis Testing in the Market Model
In this chapter, we illustrate how to carry out some simple hypothesis tests concerning
the parameters of the excess returns market model regression.

1.1    A Review of Hypothesis Testing Concepts
To be completed.

1.2    Testing the Restriction α = 0.
Using the market model regression,

                   Rt = α + βRMt + εt , t = 1, ..., T
                   εt ∼ iid N (0, σ 2ε ), εt is independent of RMt                  (1)

consider testing the null or maintained hypothesis α = 0 against the alternative that
α 6= 0
                              H0 : α = 0 vs. H1 : α 6= 0.
If H0 is true then the market model regression becomes

                                   Rt = βRMt + εt

and E[Rt |RMt = rMt ] = βrMt . We will reject the null hypothesis, H0 : α = 0, if
the estimated value of α is either much larger than zero or much smaller than zero.
Assuming H0 : α = 0 is true, α̂ ∼ N (0, SE(α̂)2 ) and so is fairly unlikely that α̂ will



                                           1
be more than 2 values of SE(α̂) from zero. To determine how big the estimated value
of α needs to be in order to reject the null hypothesis we use the t-statistic
                                                 αb −0
                                          tα=0 = d      ,
                                                 SE(αb)

where α                                           d α
        b is the least squares estimate of α and SE( b ) is its estimated standard error.
The value of the t-statistic, tα=0 , gives the number of estimated standard errors that
b is from zero. If the absolute value of tα=0 is much larger than 2 then the data cast
α
considerable doubt on the null hypothesis α = 0 whereas if it is less than 2 the data
are in support of the null hypothesis1 . To determine how big | tα=0 | needs to be to
reject the null, we use the fact that under the statistical assumptions of the market
model and assuming the null hypothesis is true

                     tα=0 ∼ Student − t with T − 2 degrees of freedom

If we set the significance level (the probability that we reject the null given that the
null is true) of our test at, say, 5% then our decision rule is

                 Reject H0 : α = 0 at the 5% level if |tα=0 | > tT −2 (0.025)

where tT −2 is the 2 12 % critical value from a Student-t distribution with T − 2 degrees
of freedom.

Example 1 Market Model Regression for IBM

   Consider the estimated MM regression equation for IBM using monthly data from
January 1978 through December 1982:
                b                                 2
                                                           b ε = 0.0524
                R IBM,t =−0.0002 + 0.3390 ·RMt , R = 0.20, σ
                             (0.0068)     (0.0888)


where the estimated standard errors are in parentheses. Here α      b = −0.0002, which is
                                                        d
very close to zero, and the estimated standard error, SE(α̂)    = 0.0068, is much larger
than αb . The t-statistic for testing H0 : α = 0 vs. H1 : α 6= 0 is

                                          −0.0002 − 0
                                tα=0 =                = −0.0363
                                            0.0068
so that αb is only 0.0363 estimated standard errors from zero. Using a 5% significance
level, t58 (0.025) ≈ 2 and
                                  |tα=0 | = 0.0363 < 2
so we do not reject H0 : α = 0 at the 5% level.
   1
    This interpretation of the t-statistic relies on the fact that, assuming the null hypothesis is true
               b is normally distributed with mean 0 and estimated variance SE(b
so that α = 0, α                                                                  d α)2 .


                                                     2
1.3    Testing Hypotheses about β
In the market model regression β measures the contribution of an asset to the vari-
ability of the market index portfolio. One hypothesis of interest is to test if the asset
has the same level of risk as the market index against the alternative that the risk is
diﬀerent from the market:

                               H0 : β = 1 vs. H1 : β 6= 1.
The data cast doubt on this hypothesis if the estimated value of β is much diﬀerent
from one. This hypothesis can be tested using the t-statistic

                                             βb − 1
                                      tβ=1 = d b
                                             SE(β)
which measures how many estimated standard errors the least squares estimate of β
is from one. The null hypothesis is reject at the 5% level, say, if |tβ=1 | > tT −2 (0.025).
Notice that this is a two-sided test.
     Alternatively, one might want to test the hypothesis that the risk of an asset is
strictly less than the risk of the market index against the alternative that the risk is
greater than or equal to that of the market:

                               H0 : β = 1 vs. H1 : β ≥ 1.

Notice that this is a one-sided test. We will reject the null hypothesis only if the
estimated value of β much greater than one. The t-statistic for testing this null
hypothesis is the same as before but the decision rule is diﬀerent. Now we reject the
null at the 5% level if
                                 tβ=1 < −tT −2 (0.05)
where tT −2 (0.05) is the one-sided 5% critical value of the Student-t distribution with
T − 2 degrees of freedom.

Example 2 MM Regression for IBM cont’d

     Continuing with the previous example, consider testing H0 : β = 1 vs. H1 : β 6= 1.
Notice that the estimated value of β is 0.3390, with an estimated standard error of
0.0888, and is fairly far from the hypothesized value β = 1. The t-statistic for testing
β = 1 is
                                      0.3390 − 1
                               tβ=1 =            = −7.444
                                        0.0888
which tells us that βb is more than 7 estimated standard errors below one. Since
t0.025,58 ≈ 2 we easily reject the hypothesis that β = 1.
     Now consider testing H0 : β = 1 vs. H1 : β ≥ 1. The t-statistic is still -7.444
but the critical value used for the test is now −t58 (0.05) ≈ −1.671. Clearly, tβ=1 =
−7.444 < −1.671 = −t58 (0.05) so we reject this hypothesis.

                                             3
1.4    Testing Joint Hypotheses about α and β
Often it is of interest to formulate hypothesis tests that involve both α and β. For
example, consider the joint hypothesis that α = 0 and β = 1 :

                                H0 : α = 0 and β = 1.

The null will be rejected if either α 6= 0, β 6= 1 or both.. Thus the alternative is
formulated as
                      H1 : α 6= 0, or β 6= 1 or α 6= 0 and β 6= 1.
This type of joint hypothesis is easily tested using a so-called F-test. The idea behind
the F-test is to estimate the model imposing the restrictions specified under the null
hypothesis and compare the fit of the restricted model to the fit of the model with
no restrictions imposed.
   The fit of the unrestricted (UR) excess return market model is measured by the
(unrestricted) sum of squared residuals (RSS)
                                         T
                                         X             T
                                                       X
               SSRU R = SSR(α̂, β̂) =          ε2t =
                                               b                       b
                                                                   b − βR
                                                             (Rt − α         2
                                                                         Mt ) .
                                         t=1           t=1

Recall, this is the quantity that is minimized during the least squares algorithm. Now,
the market model imposing the restrictions under H0 is

                            Rt = 0 + 1 · (RMt − rf ) + εt
                               = RMt + εt .

Notice that there are no parameters to be estimated in this model which can be seen
by subtracting RMt from both sides of the restricted model to give

                                    Rt − RMt = eεt

The fit of the restricted (R) model is then measured by the restricted sum of squared
residuals
                                                  T
                                                  X             T
                                                                X
               SSRR = SSR(α = 0, β = 1) =               ε2t =
                                                        e             (Rt − RMt )2 .
                                                  t=1           t=1
   Now since the least squares algorithm works to minimize SSR, the restricted error
sum of squares, SSRR , must be at least as big as the unrestricted error sum of squares,
SSRU R . If the restrictions imposed under the null are true then SSRR ≈ SSRU R
(with SSRR always slightly bigger than SSRU R ) but if the restrictions are not true
then SSRR will be quite a bit bigger than SSRU R . The F-statistic measures the
(adjusted) percentage diﬀerence in fit between the restricted and unrestricted models
and is given by
                        (SSRR − SSRU R )/q   (SSRR − SSRU R )
                  F =                      =                   ,
                          SSRU R /(T − k)        q · σb 2ε,U R

                                           4
where q equals the number of restrictions imposed under the null hypothesis, k denotes
the number of regression coeﬃcients estimated under the unrestricted model and
σb 2ε,UR denotes the estimated variance of εt under the unrestricted model. Under the
assumption that the null hypothesis is true, the F-statistic is distributed as an F
random variable with q and T − 2 degrees of freedom:

                                      F ∼ Fq,T −2 .

Notice that an F random variable is always positive since SSRR > SSRUR . The null
hypothesis is rejected, say at the 5% significance level, if

                                   F > Fq,T −k (0.05)

where Fq,T −k (0.05) is the 95% quantile of the distribution of Fq,T −k .
    For the hypothesis H0 : α = 0 and β = 1 there are q = 2 restrictions under the
null and k = 2 regression coeﬃcients estimated under the unrestricted model. The
F-statistic is then
                                       (SSRR − SSRU R )/2
                            Fα=0,β=1 =
                                         SSRU R /(T − 2)

Example 3 MM Regression for IBM cont’d

   Consider testing the hypothesis H0 : α = 0 and β = 1 for the IBM data. The
unrestricted error sum of squares, SSRU R , is obtained from the unrestricted regression
output in figure 2 and is called Sum Square Resid:

                                  SSRU R = 0.159180.

To form the restricted sum of squared residuals, we create the new variable eεt =
                                                  P
Rt − RMt and form the sum of squares SSRR = Tt=1 eε2t = 0.31476. Notice that
SSRR > SSRU R . The F-statistic is then
                                  (0.31476 − 0.159180)/2
                     Fα=0,β=1 =                          = 28.34.
                                       0.159180/58

The 95% quantile of the F-distribution with 2 and 58 degrees of freedom is about
3.15. Since Fα=0,β=1 = 28.34 > 3.15 = F2,58 (0.05) we reject H0 : α = 0 and β = 1 at
the 5% level.

1.5    Testing the Stability of α and β over time
In many applications of the MM, α and β are estimated using past data and the
estimated values of α and β are used to make decision about asset allocation and risk
over some future time period. In order for this analysis to be useful, it is assumed that
the unknown values of α and β are constant over time. Since the risk characteristics of

                                           5
assets may change over time it is of interest to know if α and β change over time. To
illustrate, suppose we have a ten year sample of monthly data (T = 120) on returns
that we split into two five year subsamples. Denote the first five years as t = 1, ..., TB
and the second five years as t = TB+1 , ..., T. The date t = TB is the “break date” of
the sample and it is chosen arbitrarily in this context. Since the samples are of equal
size (although they do not have to be) T − TB = TB or T = 2 · TB . The market model
regression which assumes that both α and β are constant over the entire sample is

                       Rt = α + βRMt + εt , t = 1, . . . , T
                       εt ∼ iid N(0, σ 2 ) independent of RMt .

There are three main cases of interest: (1) β may diﬀer over the two subsamples; (2) α
may diﬀer over the two subsamples; (3) α and β may diﬀer over the two subsamples.

1.5.1   Testing Structural Change in β only
If α is the same but β is diﬀerent over the subsamples then we really have two market
model regressions

                       Rt = α + β 1 RMt + εt , t = 1, . . . , TB
                       Rt = α + β 2 RMt + εt , t = TB+1 , . . . , T

that share the same intercept α but have diﬀerent slopes β 1 6= β 2 . We can capture
such a model very easily using a step dummy variable defined as

                                   Dt = 0, t ≤ TB
                                      = 1, t > TB

and re-writing the MM regression as the multiple regression

                            Rt = α + βRMt + Dt RMt + εt .

The model for the first subsample when Dt = 0 is

                          Rt = α + βRMt + εt , t = 1, . . . , TB

and the model for the second subsample when Dt = 1 is

                   Rt = α + βRMt + δRMt + εt , t = TB+1 , . . . , T
                      = α + (β + δ)RMt + εt .

Notice that the “beta” in the first sample is β 1 = β and the beta in the second
subsample is β 2 = β + δ. If δ < 0 the second sample beta is smaller than the first
sample beta and if δ > 0 the beta is larger.

                                            6
   We can test the constancy of beta over time by testing δ = 0:

H0 : (beta is constant over two sub-samples) δ = 0 vs. H1 : (beta is not constant over two sub-samples

The test statistic is simply the t-statistic

                                       δb − 0   b
                                                δ
                                tδ=0 = d b = d b
                                       SE(δ)  SE(δ)

and we reject the hypothesis δ = 0 at the 5% level, say, if |tδ=0 | > tT −3 (0.025).

Example 4 MM regression for IBM cont’d

   Consider the estimated MM regression equation for IBM using ten years of monthly
data from January 1978 through December 1987. We want to know if the beta on
IBM is using the first five years of data (January 1978 - December 1982) is diﬀerent
from the beta on IBM using the second five years of data (January 1983 - December
1987). We define the step dummy variable

                            Dt = 1 if t > December 1982
                               = 0, otherwise

The estimated (unrestricted) model allowing for structural change in β is given by
                d
               RIBM,t = −0.0001 + 0.3388 ·RM,t + 0.3158 ·Dt · RM,t ,
                             (0.0045)   (0.0837)        (0.1366)

                   R2 = 0.311, σb ε = 0.0496.

The estimated value of β is 0.3388, with a standard error of 0.0837, and the estimated
value of δ is 0.3158, with a standard error of 0.1366. The t-statistic for testing δ = 0
is given by
                                        0.3158
                                 tδ=0 =        = 2.312
                                        0.1366
which is greater than t117 (0.025) = 1.98 so we reject the null hypothesis (at the
5% significance level) that beta is the same over the two subsamples. The implied
estimate of beta over the period January 1983 - December 1987 is

                           β̂ + δ̂ = 0.3388 + 0.3158 = 0.6546.

It appears that IBM has become more risky.




                                               7
1.5.2   Testing Structural Change in α and β
Now consider the case where both α and β are allowed to be diﬀerent over the two
subsamples:

                        Rt = α1 + β 1 RMt + εt , t = 1, . . . , TB
                        Rt = α2 + β 2 RMt + εt , t = TB+1 , . . . , T

The dummy variable specification in this case is

               Rt = α + βRMt + δ 1 · Dt + δ 2 · Dt RMt + εt , t = 1, . . . , T.

When Dt = 0 the model becomes

                           Rt = α + βRMt + εt , t = 1, . . . , TB ,

so that α1 = α and β 1 = β, and when Dt = 1 the model is

                  Rt = (α + δ 1 ) + (β + δ 2 )RMt + εt , t = TB+1 , . . . , T,

so that α2 = α + δ 1 and β 2 = β + δ 2 . The hypothesis of no structural change is now

        H0 : δ 1 = 0 and δ 2 = 0 vs. H1 : δ 1 6= 0 or δ 2 6= 0 or δ 1 6= 0 and δ 2 6= 0.

The test statistic for this joint hypothesis is the F-statistic

                                             (SSRR − SSRU R )/2
                            Fδ1 =0,δ2 =0 =
                                               SSRU R /(T − 4)

since there are two restrictions and four regression parameters estimated under the
unrestricted model. The unrestricted (UR) model is the dummy variable regression
that allows the intercepts and slopes to diﬀer in the two subsamples and the restricted
model (R) is the regression where these parameters are constrained to be the same
in the two subsamples.
    The unrestricted error sum of squares, SSRU R , can be computed in two ways.
The first way is based on the dummy variable regression. The second is based on
estimating separate regression equations for the two subsamples and adding together
the resulting error sum of squares. Let SSR1 and SSR2 denote the error sum of
squares from separate regressions. Then

                                 SSRU R = SSR1 + SSR2 .

Example 5 MM regression for IBM cont’d




                                               8
   The unrestricted regression is
                  d
                 RIBM,t = −0.0001 + 0.3388 ·RMt
                                  (0.0065)      (0.0845)

                                 + 0.0002 ·Dt + 0.3158 ·Dt · RMt ,
                                     (0.0092)        (0.1377)
                         2
                     R        = 0.311, σb ε = 0.050, SSRU R = 0.288379,

and the restricted regression is
                   d
                  RIBM,t = −0.0005 + 0.4568 ·RMt ,
                                   (0.0046)     (0.0675)
                          2
                      R       = 0.279, σb ε = 0.051, SSRR = 0.301558.

The F-statistic for testing H0 : δ 1 = 0 and δ 2 = 0 is
                                      (0.301558 − 0.288379)/2
                    Fδ1 =0,δ2 =0 =                            = 2.651
                                           0.288379/116
The 95% quantile, F2,116 (0.05), is approximately 3.07. Since Fδ1 =0,δ2 =0 = 2.651 <
3.07 = F2,116 (0.05) we do not reject H0 : δ1 = 0 and δ 2 = 0 at the 5% significance
level. It is interesting to note that when we allow both α and β to diﬀer in the
two subsamples we cannot reject the hypothesis that these parameters are the same
between two samples but if we only allow β to diﬀer between the two samples we can
reject the hypothesis that β is the same.

1.6    Other types of Structural Change in β
An interesting question regarding the beta of an asset concerns the stability of beta
over the market cycle. For example, consider the following situations. Suppose that
the beta of an asset is greater than 1 if the market is in an “up cycle”, RMt > 0,
and less than 1 in a “down cycle”, RMt < 0. This would be a very desirable asset to
hold since it accentuates positive market movements but down plays negative market
movements. We can investigate this hypothesis using a dummy variable as follows.
Define

                                     Dtup = 1, RMt > 0
                                          = 0, RMt ≤ 0.

Then Dtup divides the sample into “up market” movements and “down market” move-
ments. The regression that allows beta to diﬀer depending on the market cycle is
then
                         Rt = α + βRMt + δDtup · RMt + εt .
In the down cycle, when Dtup = 0, the model is

                                     Rt = α + βRMt + εt

                                                 9
and β captures the down market beta, and in the up market, when Dtup = 1, the
model is
                          Rt = α + (β + δ)RMt + εt
so that β + δ capture the up market beta. The hypothesis that β does not vary over
the market cycle is
                             H0 : δ = 0 vs. H1 : δ 6= 0                        (2)
                                                       bδ−0
and can be tested with the simple t-statistic tδ=0 = c       .
                                                      SE(bδ)
   If the estimated value of δ is found to be statistically greater than zero we might
then want to go on to test the hypothesis that the up market beta is greater than
one. Since the up market beta is equal to β + δ this corresponds to testing

                             H0 : β + δ = 1 vs. H1 : β + δ ≥ 1

which can be tested using the t-statistic

                                             βb + δb − 1
                                    tβ+δ=1 = d b b .
                                             SE(β + δ)

Since this is a one-sided test we will reject the null hypothesis at the 5% level if
tβ+δ=1 < −t0.05,T −3 .

Example 6 MM regression for IBM and DEC

    For IBM the CAPM regression allowing β to vary over the market cycle (1978.01
- 1982.12) is
               d
              RIBM,t = −0.0019 + 0.3163 ·RMt + 0.0552 ·Dtup · RMt
                               (0.0111)   (0.1476)         (0.2860)
                      2
                  R        = 0.201, σb = 0.053

Notice that bδ = 0.0552, with a standard error of 0.2860, is close to zero and not
estimated very precisely. Consequently, tδ=0 = 0.0552
                                                 0.2860
                                                        = 0.1929 is not significant at
any reasonable significance level and we therefore reject the hypothesis that beta
varies over the market cycle. However, the results are very diﬀerent for DEC (Digital
Electronics):
               d
              RDEC,t = −0.0248 + 0.3689 ·RMt + 0.8227 ·Dtup · RMt
                               (0.0134)   (0.1779)         (0.3446)
                       2
                   R       = 0.460, σb = 0.064.

Here δb = 0.8227, with a standard error of 0.3446, is statistically diﬀerent from zero
at the 5% level since tδ=0 = 2.388. The estimate of the down market beta is 0.3689,
which is less than one, and the up market beta is 0.3689 + 0.8227 = 1.1916, which

                                             10
is greater than one. The estimated standard error for βb + δb requires the estimated
variances of βb and bδ and the estimated covariance between βb and bδ and is given by

                d β
                var( b+b    d β)
                       δ) = var( b + var(
                                      d b          d β,
                                          δ) + 2 · cov( b δ)
                                                          b

                          = 0.031634 + 0.118656 + 2 · −0.048717
                          = 0.052856,
                            q               √
                d    b b
                SE(β + δ) =   d β
                              var( b + δ)
                                       b = 0.052856 = 0.2299


Then tβ+δ=1 = 1.1916−1
                0.2299
                       = 0.8334 which is less than t0.05,57 = 1.65 so we do not reject
the hypothesis that the up market beta is less than or equal to one.




                                         11



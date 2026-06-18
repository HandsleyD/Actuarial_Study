---
normalized_id: shared-lecture-notes-soederlind-p-lecture-notes-for-econometrics-ln-stockholm-2002-l-86s-gl
exam_code: SHARED
material_scope: soederlind p. lecture notes for econometrics (ln, stockholm, 2002)(l)(86s)_gl_.pdf
material_group: shared
document_type: lecture-notes
source_repo_path: resources/source-material/shared/Soederlind P. Lecture Notes for Econometrics (LN, Stockholm, 2002)(L)(86s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-lecture-notes-soederlind-p-lecture-notes-for-econometrics-ln-stockholm-2002-l-86s-gl

                                                                                              Contents



                                                                                                1   Introduction                                                                     5
                                                                                                    1.1 Least Squares . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    5
                                                                                                    1.2 Maximum Likelihood . . . . . . . . . . . . . . . . . . . . . . . . . .       6
   Lecture Notes for Econometrics 2002 (first year                                                  1.3 The Distribution of β̂ . . . . . . . . . . . . . . . . . . . . . . . . . .   7
                                                                                                    1.4 Diagnostic Tests . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   8
             PhD course in Stockholm)                                                               1.5 Testing Hypotheses about β̂ . . . . . . . . . . . . . . . . . . . . . .      9

                                                                                                A Practical Matters                                                                  10
                                   Paul Söderlind1
                                                                                                B A CLT in Action                                                                    12
                     June 2002 (some typos corrected later)
                                                                                                2   Univariate Time Series Analysis                                                  16
                                                                                                    2.1 Theoretical Background to Time Series Processes . . . . . . . . . . .        16
                                                                                                    2.2 Estimation of Autocovariances . . . . . . . . . . . . . . . . . . . . .      17
                                                                                                    2.3 White Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    20
                                                                                                    2.4 Moving Average . . . . . . . . . . . . . . . . . . . . . . . . . . . .       20
                                                                                                    2.5 Autoregression . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     23
                                                                                                    2.6 ARMA Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        29
                                                                                                    2.7 Non-stationary Processes . . . . . . . . . . . . . . . . . . . . . . . .     30

                                                                                                3   The Distribution of a Sample Average                                             38
                                                                                                    3.1 Variance of a Sample Average . . . . . . . . . . . . . . . . . . . . .       38
                                                                                                    3.2 The Newey-West Estimator . . . . . . . . . . . . . . . . . . . . . . .       42
                                                                                                    3.3 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      43

   1
     University of St. Gallen and CEPR. Address: s/bf-HSG, Rosenbergstrasse 52, CH-9000 St.     4   Least Squares                                                                    45
Gallen, Switzerland. E-mail: Paul.Soderlind@unisg.ch. Document name: EcmAll.TeX.                    4.1 Definition of the LS Estimator . . . . . . . . . . . . . . . . . . . . .     45

                                                                                                                                                                                     1
    4.2   LS and R 2 ∗ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47   8   Examples and Applications of GMM                                              107
    4.3   Finite Sample Properties of LS . . . . . . . . . . . . . . . . . . . . . 49         8.1 GMM and Classical Econometrics: Examples . . . . . . . . . . . . . 107
    4.4   Consistency of LS . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50        8.2 Identification of Systems of Simultaneous Equations . . . . . . . . . 111
    4.5   Asymptotic Normality of LS . . . . . . . . . . . . . . . . . . . . . . 52           8.3 Testing for Autocorrelation . . . . . . . . . . . . . . . . . . . . . . . 114
    4.6   Inference . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55        8.4 Estimating and Testing a Normal Distribution . . . . . . . . . . . . . 118
    4.7   Diagnostic Tests of Autocorrelation, Heteroskedasticity, and Normality∗ 58          8.5 Testing the Implications of an RBC Model . . . . . . . . . . . . . . . 121
                                                                                              8.6 IV on a System of Equations∗ . . . . . . . . . . . . . . . . . . . . . 123
5   Instrumental Variable Method                                                    64
    5.1 Consistency of Least Squares or Not? . . . . . . . . . . . . . . . . .      64    11 Vector Autoregression (VAR)                                                     125
    5.2 Reason 1 for IV: Measurement Errors . . . . . . . . . . . . . . . . .       64       11.1 Canonical Form . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 125
    5.3 Reason 2 for IV: Simultaneous Equations Bias (and Inconsistency) . .        66       11.2 Moving Average Form and Stability . . . . . . . . . . . . . . . . . . 126
    5.4 Definition of the IV Estimator—Consistency of IV . . . . . . . . . .        69       11.3 Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
    5.5 Hausman’s Specification Test∗ . . . . . . . . . . . . . . . . . . . . .     75       11.4 Granger Causality . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128
    5.6 Tests of Overidentifying Restrictions in 2SLS∗ . . . . . . . . . . . .      76       11.5 Forecasts Forecast Error Variance . . . . . . . . . . . . . . . . . . . 130
                                                                                             11.6 Forecast Error Variance Decompositions∗ . . . . . . . . . . . . . . . 131
6   Simulating the Finite Sample Properties                                         78       11.7 Structural VARs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132
    6.1 Monte Carlo Simulations in the Simplest Case . . . . . . . . . . . . .      78       11.8 Cointegration, Common Trends, and Identification via Long-Run Restrictions∗ 142
    6.2 Monte Carlo Simulations in More Complicated Cases∗ . . . . . . . .          80
    6.3 Bootstrapping in the Simplest Case . . . . . . . . . . . . . . . . . . .    82    12 Kalman filter                                                                149
    6.4 Bootstrapping in More Complicated Cases∗ . . . . . . . . . . . . . .        82       12.1 Conditional Expectations in a Multivariate Normal Distribution . . . . 149
                                                                                             12.2 Kalman Recursions . . . . . . . . . . . . . . . . . . . . . . . . . . . 150
7   GMM                                                                          86
    7.1 Method of Moments . . . . . . . . . . . . . . . . . . . . . . . . . . 86          13 Outliers and Robust Estimators                                                  156
    7.2 Generalized Method of Moments . . . . . . . . . . . . . . . . . . . . 87             13.1 Influential Observations and Standardized Residuals . . . . . . . . . . 156
    7.3 Moment Conditions in GMM . . . . . . . . . . . . . . . . . . . . . . 87              13.2 Recursive Residuals∗ . . . . . . . . . . . . . . . . . . . . . . . . . . 157
    7.4 The Optimization Problem in GMM . . . . . . . . . . . . . . . . . . 90               13.3 Robust Estimation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159
    7.5 Asymptotic Properties of GMM . . . . . . . . . . . . . . . . . . . . 94              13.4 Multicollinearity∗ . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160
    7.6 Summary of GMM . . . . . . . . . . . . . . . . . . . . . . . . . . . 99
    7.7 Efficient GMM and Its Feasible Implementation . . . . . . . . . . . . 99          14 Generalized Least Squares                                                       162
    7.8 Testing in GMM . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100           14.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162
    7.9 GMM with Sub-Optimal Weighting Matrix∗ . . . . . . . . . . . . . . 102               14.2 GLS as Maximum Likelihood . . . . . . . . . . . . . . . . . . . . . 163
    7.10 GMM without a Loss Function∗ . . . . . . . . . . . . . . . . . . . . 103            14.3 GLS as a Transformed LS . . . . . . . . . . . . . . . . . . . . . . . 166
    7.11 Simulated Moments Estimator∗ . . . . . . . . . . . . . . . . . . . . . 104          14.4 Feasible GLS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 166




                                                                                     2                                                                                        3
0 Reading List                                                                   168
  0.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 168
  0.2 Time Series Analysis . . . . . . . . . . . . . . . . . . . . . . . . . . 168
  0.3 Distribution of Sample Averages . . . . . . . . . . . . . . . . . . . . 168      1     Introduction
  0.4 Asymptotic Properties of LS . . . . . . . . . . . . . . . . . . . . . . 169
  0.5 Instrumental Variable Method . . . . . . . . . . . . . . . . . . . . . 169       1.1   Least Squares
  0.6 Simulating the Finite Sample Properties . . . . . . . . . . . . . . . . 169
                                                                                       Consider the simplest linear model
  0.7 GMM . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169
                                                                                                                              yt = xt β0 + u t ,                             (1.1)

                                                                                       where all variables are zero mean scalars and where β0 is the true value of the parameter
                                                                                       we want to estimate. The task is to use a sample {yt , xt }t=1
                                                                                                                                                    T  to estimate β and to test
                                                                                       hypotheses about its value, for instance that β = 0.
                                                                                           If there were no movements in the unobserved errors, u t , in (1.1), then any sample
                                                                                       would provide us with a perfect estimate of β. With errors, any estimate of β will still
                                                                                       leave us with some uncertainty about what the true value is. The two perhaps most impor-
                                                                                       tant issues is econometrics are how to construct a good estimator of β and how to assess
                                                                                       the uncertainty about the true value.
                                                                                           For any possible estimate, β̂, we get a fitted residual

                                                                                                                              û t = yt − xt β̂.                             (1.2)

                                                                                       One appealing method of choosing β̂ is to minimize the part of the movements in yt that
                                                                                       we cannot explain by xt β̂, that is, to minimize the movements in û t . There are several
                                                                                       candidates for how to measure the “movements,” but the most common is by the mean of
                                                                                       squared errors, that is, 6t=1
                                                                                                                 T û 2 /T . We will later look at estimators where we instead use
                                                                                                                      t
                                                                                       6t=1 û t /T .
                                                                                         T

                                                                                           With the sum or mean of squared errors as the loss function, the optimization problem
                                                                                                                                   T
                                                                                                                               1X
                                                                                                                        min       (yt − xt β)2                               (1.3)
                                                                                                                          β    T
                                                                                                                                  t=1




                                                                                  4                                                                                             5
has the first order condition that the derivative should be zero as the optimal estimate β̂            1.3    The Distribution of β̂
                                       T
                                     1X                                                               Equation (1.5) will give different values of β̂ when we use different samples, that is dif-
                                                    
                                       xt yt − xt β̂ = 0,                                     (1.4)
                                     T                                                                 ferent draws of the random variables u t , xt , and yt . Since the true value, β0 , is a fixed
                                       t=1
                                                                                                       constant, this distribution describes the uncertainty we should have about the true value
which we can solve for β̂ as
                                                                                                       after having obtained a specific estimated value.
                                             T
                                                 !−1      T                                                To understand the distribution of β̂, use (1.1) in (1.5) to substitute for yt
                                      1X 2             1X
                              β̂ =      xt                xt yt , or                          (1.5)                                                !−1
                                      T                T                                                                                     T              T
                                           t=1           t=1                                                                             1X 2       1X
                                             d (xt , yt ) ,
                                   c (xt )−1 Cov                                                                                 β̂ =      xt             xt (xt β0 + u t )
                                 = Var                                                        (1.6)                                      T          T
                                                                                                                                          t=1         t=1
                                                                                                                                               T
                                                                                                                                                    !−1      T
where a hat indicates a sample estimate. This is the Least Squares (LS) estimator.                                                           1X 2        1X
                                                                                                                                    = β0 +       xt              xt u t ,                           (1.9)
                                                                                                                                             T           T
                                                                                                                                                  t=1            t=1

1.2    Maximum Likelihood                                                                              where β0 is the true value.
                                                                                                            The first conclusion from (1.9) is that, with u t = 0 the estimate would always be
A different route to arrive at an estimator is to maximize the likelihood function. If u t in
                                                                                                       perfect — and with large movements in u t we will see large movements in β̂. The second
(1.1) is iid N 0, σ 2 , then the probability density function of u t is
                     
                                                                                                       conclusion is that not even a strong opinion about the distribution of u t , for instance that
                                                                                                       u t is iid N 0, σ 2 , is enough to tell us the whole story about the distribution of β̂. The
                                       p           h          i                                                          
                           pdf (u t ) = 2π σ 2 exp −u 2t / 2σ 2 .                      (1.7)
                                                                                                       reason is that deviations of β̂ from β0 are a function of xt u t , not just of u t . Of course,
Since the errors are independent, we get the joint pdf of the u 1 , u 2 , . . . , u T by multiplying   when xt are a set of deterministic variables which will always be the same irrespective
the marginal pdfs of each of the errors. Then substitute yt − xt β for u t (the derivative of          of which sample we use, then β̂ − β0 is a time invariant linear function of u t , so the
the transformation is unity) and take logs to get the log likelihood function of the sample            distribution of u t carries over to the distribution of β̂. This is probably an unrealistic case,
                                                               T                                       which forces us to look elsewhere to understand the properties of β̂.
                           T           T   1X
                ln L = −     ln (2π ) − ln σ 2 −   (yt − xt β)2 /σ 2 .                        (1.8)         There are two main routes to learn more about the distribution of β̂: (i) set up a small
                           2           2         2
                                                              t=1                                      “experiment” in the computer and simulate the distribution or (ii) use the asymptotic
    This likelihood function is maximized by minimizing the last term, which is propor-                distribution as an approximation. The asymptotic distribution can often be derived, in
tional to the sum of squared errors - just like in (1.3): LS is ML when the errors are iid             contrast to the exact distribution in a sample of a given size. If the actual sample is large,
normally distributed.                                                                                  then the asymptotic distribution may be a good approximation.
                                                                                                                                                                            PT              PT
    Maximum likelihood estimators have very nice properties, provided the basic dis-                        A law of large numbers would (in most cases) say that both t=1        xt2 /T and t=1    xt u t /T
tributional assumptions are correct. If they are, then MLE are typically the most effi-                in (1.9) converges to their expected values as T → ∞. The reason is that both are sam-
cient/precise estimators, at least asymptotically. ML also provides a coherent framework               ple averages of random variables (clearly, both xt2 and xt u t are random variables). These
for testing hypotheses (including the Wald, LM, and LR tests).                                         expected values are Var(xt ) and Cov(xt , u t ), respectively (recall both xt and u t have zero
                                                                                                       means). The key to show that β̂ is consistent, that is, has a probability limit equal to β0 ,


                                                                                                  6                                                                                                     7
is that Cov(xt , u t ) = 0. This highlights the importance of using good theory to derive not                       a. Pdf of N(0,1)                          b. Pdf of Chi−square(n)
only the systematic part of (1.1), but also in understanding the properties of the errors.              0.4                                           1
                                                                                                                                                                                   n=1
For instance, when theory tells us that yt and xt affect each other (as prices and quanti-                                                                                         n=2
ties typically do), then the errors are likely to be correlated with the regressors - and LS            0.2                                         0.5
                                                                                                                                                                                   n=5

is inconsistent. One common way to get around that is to use an instrumental variables
technique. More about that later. Consistency is a feature we want from most estimators,
                                                                                                         0                                            0
since it says that we would at least get it right if we had enough data.                                      −2           0           2                  0           5            10
     Suppose that β̂ is consistent. Can we say anything more about the asymptotic distri-                                  x                                              x

bution. Well, the distribution of β̂ converges    to a spike with all the mass at β0 , but the                           Figure 1.1: Probability density functions
                 √           √            
distribution of T β̂, or T β̂ − β0 , will typically converge to a non-trivial normal
distribution. To see why, note from (1.9) that we can write                                       1.5    Testing Hypotheses about β̂

                                               T
                                                    !−1 √       T                                 Suppose we now that the asymptotic distribution of β̂ is such that
                      √                  1X 2             T X
                       T β̂ − β0 =           xt                 xt u t .                (1.10)                               √ 
                                           T               T
                                                                                                                                          d             
                                              t=1              t=1                                                            T β̂ − β0 → N 0, v 2 or                                    (1.11)
The first term on the right hand side will typically converge to the inverse of Var(xt ), as
                                       √                                                          We could then test hypotheses about β̂ as for any other random variable. For instance,
discussed earlier. The second term is T times a sample average (of the random variable
                                                                                                  consider the hypothesis that β0 = 0. If this is true, then
xt u t ) with a zero expected value, since we assumed that β̂ is consistent. Under weak
                                                 √                                                                     √                       √            
conditions, a central limit theorem applies so T times a sample average converges to                                Pr     T β̂/v < −2 = Pr          T β̂/v > 2 ≈ 0.025,          (1.12)
                                          √
a normal distribution. This shows that T β̂ has an asymptotic normal distribution. It
turns out that this is a property of many estimators, basically because most estimators are       which says that there is only a 2.5% chance that a random sample will deliver a value of
                                                                                                  √
some kind of sample average. For an example of a central limit theorem in action, see                T β̂/v less than -2 and also a 2.5% chance that a sample delivers a value larger than 2,
Appendix B                                                                                        assuming the true value is zero.
                                                                                                       We then say that we reject the hypothesis that β0 = 0 at the 5% significance level
                                                                                                                                                 √
                                                                                                  (95% confidence level) if the test statistics | T β̂/v| is larger than 2. The idea is that,
1.4    Diagnostic Tests
                                                                                                  if the hypothesis is true (β0 = 0), then this decision rule gives the wrong decision in
                               √
Exactly what the variance of T (β̂ − β0 ) is, and how it should be estimated, depends             5% of the cases. That is, 5% of all possible random samples will make us reject a true
mostly on the properties of the errors. This is one of the main reasons for diagnostic tests.     hypothesis. Note, however, that since this test can only be taken to be an approximation
The most common tests are for homoskedastic errors (equal variances of u t and u t−s ) and        since it relies on the asymptotic distribution, which is an approximation of the true (and
no autocorrelation (no correlation of u t and u t−s ).                                            typically unknown) distribution.
                                                                                                                                                                      √
   When ML is used, it is common to investigate if the fitted errors satisfy the basic                 The natural interpretation of a really large test statistics, | T β̂/v| = 3 say, is that
assumptions, for instance, of normality.                                                          it is very unlikely that this sample could have been drawn from a distribution where the
                                                                                                  hypothesis β0 = 0 is true. We therefore choose to reject the hypothesis. We also hope that
                                                                                                  the decision rule we use will indeed make us reject false hypothesis more often than we

                                                                                             8                                                                                               9
reject true hypothesis. For instance, we want the decision rule discussed above to reject          5. Verbeek (2000), A Guide to Modern Econometrics (general, easy, good applica-
β0 = 0 more often when β0 = 1 than when β0 = 0.                                                       tions)
    There is clearly nothing sacred about the 5% significance level. It is just a matter of
                                                                                                   6. Davidson and MacKinnon (1993), Estimation and Inference in Econometrics (gen-
convention that the 5% and 10% are the most widely used. However, it is not uncommon
                                                                                                      eral, a bit advanced)
to use the 1% or the 20%. Clearly, the lower the significance level, the harder it is to reject
a null hypothesis. At the 1% level it often turns out that almost no reasonable hypothesis         7. Ruud (2000), Introduction to Classical Econometric Theory (general, consistent
can be rejected.                                                                                      projection approach, careful)
    The t-test described above works only the null hypothesis contains a single restriction.
                                                                                                   8. Davidson (2000), Econometric Theory (econometrics/time series, LSE approach)
We have to use another approach whenever we want to test several restrictions jointly. The
perhaps most common approach is a Wald test. To illustrate the idea, suppose β is an m×1           9. Mittelhammer, Judge, and Miller (2000), Econometric Foundations (general, ad-
                 √      d
vector and that T β̂ → N (0, V ) under the null hypothesis , where V is a covariance                  vanced)
matrix. We then know that
                                                                                                  10. Patterson (2000), An Introduction to Applied Econometrics (econometrics/time se-
                                √                 √       d
                                    T β̂ V
                                       0     −1
                                                      T β̂ → χ (m) .
                                                              2
                                                                                        (1.13)        ries, LSE approach with applications)

                                                                                                  11. Judge et al (1985), Theory and Practice of Econometrics (general, a bit old)
The decision rule is then that if the left hand side of (1.13) is larger that the 5%, say,
critical value of the χ 2 (m) distribution, then we reject the hypothesis that all elements in    12. Hamilton (1994), Time Series Analysis
β are zero.
                                                                                                  13. Spanos (1986), Statistical Foundations of Econometric Modelling, Cambridge Uni-
                                                                                                      versity Press (general econometrics, LSE approach)
A       Practical Matters
                                                                                                  14. Harvey (1981), Time Series Models, Philip Allan
A.0.1    Software
                                                                                                  15. Harvey (1989), Forecasting, Structural Time Series... (structural time series, Kalman
    • Gauss, MatLab, RATS, Eviews, Stata, PC-Give, Micro-Fit, TSP, SAS                                filter).

    • Software reviews in The Economic Journal and Journal of Applied Econometrics                16. Lütkepohl (1993), Introduction to Multiple Time Series Analysis (time series, VAR
                                                                                                      models)
A.0.2    Useful Econometrics Literature
                                                                                                  17. Priestley (1981), Spectral Analysis and Time Series (advanced time series)
    1. Greene (2000), Econometric Analysis (general)
                                                                                                  18. Amemiya (1985), Advanced Econometrics, (asymptotic theory, non-linear econo-
    2. Hayashi (2000), Econometrics (general)                                                         metrics)

    3. Johnston and DiNardo (1997), Econometric Methods (general, fairly easy)                    19. Silverman (1986), Density Estimation for Statistics and Data Analysis (density es-
                                                                                                      timation).
    4. Pindyck and Rubinfeld (1997), Econometric Models and Economic Forecasts (gen-
       eral, easy)                                                                                20. Härdle (1990), Applied Nonparametric Regression

                                                                                            10                                                                                         11
B     A CLT in Action                                                                                  a. Distribution of sample average       b. Distribution of √T times sample average
                                                                                                   3                                            0.4
This is an example of how we can calculate the limiting distribution of a sample average.                                      T=5                                          T=5
                                                                                                   2                           T=25                                         T=25
               √                                                                                                               T=50                                         T=50
Remark 1 If T (x̄ − µ)/σ ∼ N (0, 1) then x̄ ∼ N (µ, σ 2 /T ).                                                                                   0.2
                                                                                                                               T=100                                        T=100
                                                       √                                           1
Example 2 (Distribution of 6t=1    T (z − 1) /T and T 6 T (z − 1) /T when z ∼ χ 2 (1).)
                                           t                   t=1 t                t
When z t is iid χ 2 (1), then 6t=1T z is distributed as a χ 2 (T ) variable with pdf f (). We
                                      t                                               T            0                                              0
                                                                                                   −2                0                 2              −5              0            5
now construct a new variable by transforming 6t=1      T z as to a sample mean around one
                                                           t                                                   Sample average                              √T times sample average
(the mean of z t )                                                                                          Sampling distributions. This figure shows the distribution of the sample
                                                                                                Figure B.1: √
                           z̄ 1 = 6t=1
                                    T
                                        z t /T − 1 = 6t=1
                                                      T
                                                          (z t − 1) /T.                         mean and of T times the sample mean of the random variable z t − 1 where z t ∼ χ 2 (1).

Clearly, the inverse function is 6t=1
                                   T z = T z̄ + T , so by the “change of variable” rule
                                          t      1
                                                                                                These distributions are shown in Figure B.1. It is clear that f (z̄ 1 ) converges to a spike
we get the pdf of z̄ 1 as
                                                                                                at zero as the sample size increases, while f (z̄ 2 ) converges to a (non-trivial) normal
                                 g(z̄ 1 ) = f T (T z̄ 1 + T ) T.
                                                                                                distribution.
Example 3 Continuing the previous example, we now consider the random variable                                                                         √
                                                          √                                     Example 6 (Distribution of 6t=1  T (z − 1) /T and T 6 T (z − 1) /T when z ∼ χ 2 (1).)
                                                                                                                                     t                        t=1 t                  t
                                                 z̄ 2 =       T z̄ 1 ,                          When z t is iid χ 2 (1), then 6t=1
                                                                                                                               T z is χ 2 (T ), that is, has the probability density function
                                                                                                                                   t
                                     √
with inverse function z̄ 1 = z̄ 2 / T . By applying the “change of variable” rule again, we                     f 6t=1
                                                                                                                   T
                                                                                                                         
                                                                                                                       zt =
                                                                                                                                      1
                                                                                                                                             6 T zt
                                                                                                                                                    T /2−1       T
                                                                                                                                                            exp −6t=1 z t /2 .
                                                                                                                                                                            
get the pdf of z̄ 2 as                                                                                                         2T /2 0 (T /2) t=1
                                           √    √        √            √                       We transform this distribution by first subtracting one from z t (to remove the mean) and
                       h (z̄ 2 ) = g(z̄ 2 / T )/ T = f T    T z̄ 2 + T    T.                                               √
                                                                                                then by dividing by T or T . This gives the distributions of the sample mean, z̄ 1 =
                                                                                                                                                   √
Example 4 When z t is iid χ 2 (1), then 6t=1
                                         T z is χ 2 (T ), which we denote f (6 T z ). We
                                             t                                                  6t=1
                                                                                                  T (z − 1) /T , and scaled sample mean, z̄ =
                                                                                                       t                                      2      T z̄ 1 as
                                                                              t=1 t
now construct two new variables by transforming 6t=1 T z
                                                          t                                                                    1
                                                                                                             f (z̄ 1 ) =               y T /2−1 exp (−y/2) with y = T z̄ 1 + T , and
                                                                                                                        2T /2 0 (T /2)
                         z̄ 1 = 6t=1
                                 T
                                     z t /T − 1 = 6t=1
                                                   T
                                                       (z t − 1) /T , and                                                                                           √
                                                                                                                               1
                                  √                                                                          f (z̄ 2 ) = T /2          y T /2−1 exp (−y/2) with y = T z̄ 1 + T .
                         z̄ 2 =       T z̄ 1 .                                                                          2 0 (T /2)

Example 5 We transform this distribution by first subtracting one from z t (to remove the       These distributions are shown in Figure B.1. It is clear that f (z̄ 1 ) converges to a spike
                                    √
mean) and then by dividing by T or T . This gives the distributions of the sample mean          at zero as the sample size increases, while f (z̄ 2 ) converges to a (non-trivial) normal
                              √
and scaled sample mean, z̄ 2 = T z̄ 1 as                                                        distribution.

                             1
           f (z̄ 1 ) =               y T /2−1 exp (−y/2) with y = T z̄ 1 + T , and
                      2T /2 0 (T /2)
                             1                                    √
           f (z̄ 2 ) = T /2          y T /2−1 exp (−y/2) with y = T z̄ 1 + T .
                      2 0 (T /2)

                                                                                        12                                                                                                  13
Bibliography                                                                                 Ruud, P. A., 2000, An Introduction to Classical Econometric Theory, Oxford University
                                                                                               Press.
Amemiya, T., 1985, Advanced Econometrics, Harvard University Press, Cambridge, Mas-
 sachusetts.                                                                                 Silverman, B. W., 1986, Density Estimation for Statistics and Data Analysis, Chapman
                                                                                                and Hall, London.
Davidson, J., 2000, Econometric Theory, Blackwell Publishers, Oxford.
                                                                                             Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,
  Oxford University Press, Oxford.

Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
  Jersey, 4th edn.

Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.

Härdle, W., 1990, Applied Nonparametric Regression, Cambridge University Press, Cam-
  bridge.

Harvey, A. C., 1989, Forecasting, Structural Time Series Models and the Kalman Filter,
  Cambridge University Press.

Hayashi, F., 2000, Econometrics, Princeton University Press.

Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th
  edn.

Lütkepohl, H., 1993, Introduction to Multiple Time Series, Springer-Verlag, 2nd edn.

Mittelhammer, R. C., G. J. Judge, and D. J. Miller, 2000, Econometric Foundations, Cam-
 bridge University Press, Cambridge.

Patterson, K., 2000, An Introduction to Applied Econometrics: A Time Series Approach,
  MacMillan Press, London.

Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,
  Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.

Priestley, M. B., 1981, Spectral Analysis and Time Series, Academic Press.



                                                                                        14                                                                                     15
                                                                                                                                 This is the s th autocovariance of yt . (Of course, s = 0 or s < 0 are allowed.)
                                                                                                                                    A stochastic process is covariance stationary if

2      Univariate Time Series Analysis                                                                                                                              Eyt = µ is independent of t,                         (2.4)
                                                                                                                                                         Cov (yt−s , yt ) = γs depends only on s, and                    (2.5)
Reference: Greene (2000) 13.1-3 and 18.1-3
                                                                                                                                                                         both µ and γs are finite.                       (2.6)
Additional references: Hayashi (2000) 6.2-4; Verbeek (2000) 8-9; Hamilton (1994); John-
ston and DiNardo (1997) 7; and Pindyck and Rubinfeld (1997) 16-18                                                                Most of these notes are about covariance stationary processes, but Section 2.7 is about
                                                                                                                                 non-stationary processes.
2.1     Theoretical Background to Time Series Processes                                                                              Humanity has so far only discovered one planet with coin flipping; any attempt to
                                                                                                                                 estimate the moments of a time series process must therefore be based on the realization
Suppose we have a sample of T observations of a random variable                                                                  of the stochastic process from planet earth only. This is meaningful only if the process is
                                          i T                                                                                   ergodic for the moment you want to estimate. A covariance stationary process is said to
                                          yt t=1 = y1i , y2i , ..., yTi ,
                                                  
                                                                                                                                 be ergodic for the mean if
                                                                                                                                                                            T
where subscripts indicate time periods. The superscripts indicate that this sample is from                                                                               1X
                                                                                                                                                                   plim        yt = Eyt ,                              (2.7)
planet (realization) i. We could imagine a continuum of parallel planets where the same                                                                                  T
                                                                                                                                                                              t=1
time series process has generated different samples with T different numbers (different                                          so the sample mean converges in probability to the unconditional mean. A sufficient
realizations).                                                                                                                   condition for ergodicity for the mean is
    Consider period t. The distribution of yt across the (infinite number of) planets has                                                                         ∞
some density function, f t (yt ). The mean of this distribution
                                                                                                                                                                  X
                                                                                                                                                                        |Cov (yt−s , yt )| < ∞.                          (2.8)
                                         Z ∞                                                                                                                      s=0
                                   Eyt =      yt f t (yt ) dyt                        (2.1)                                      This means that the link between the values in t and t − s goes to zero sufficiently fast
                                                        −∞
                                                                                                                                 as s increases (you may think of this as getting independent observations before we reach
is the expected value of the value in period t, also called the unconditional mean of yt .
                                                                                                                                 the limit). If yt is normally distributed, then (2.8) is also sufficient for the process to be
Note that Eyt could be different from Eyt+s . The unconditional variance is defined simi-
                                                                                                                                 ergodic for all moments, not just the mean. Figure 2.1 illustrates how a longer and longer
larly.
                                                                                                                                 sample (of one realization of the same time series process) gets closer and closer to the
                                                                                            , yti .
                                                                                         i
    Now consider periods t and t − s jointly. On planet i we have the pair yt−s
                                                                                                                                 unconditional distribution as the sample gets longer.
The bivariate distribution of these pairs, across the planets, has some density function
gt−s,t (yt−s , yt ).1 Calculate the covariance between yt−s and yt as usual
                       Z ∞Z ∞                                                                                                    2.2    Estimation of Autocovariances
   Cov (yt−s , yt ) =             (yt−s − Eyt−s ) (yt − Eyt ) gt−s,t (yt−s , yt ) dyt dyt−s (2.2)
                         −∞ −∞                                                                                                   Let yt be a vector of a covariance stationary and ergodic. The sth covariance matrix is
                     = E (yt−s − Eyt−s ) (yt − Eyt ) .                                                                (2.3)
                                                                                           R∞                                                              R (s) = E (yt − Eyt ) (yt−s − Eyt−s )0 .                      (2.9)
                               t (yt ) and gt−s,t (yt−s , yt ) is, as usual, f t (yt ) =   −∞ gt−s,t (yt−s , yt ) dyt−s .
    1 The relation between f




                                                                                                                            16                                                                                              17
 One sample from an AR(1) with corr=0.85                Histogram, obs 1−20                     Example 1 (Bivariate case.) Let yt = [xt , z t ]0 with Ext =Ez t = 0. Then
    5
                                                                                                                               "     #
                                                                                                                                  xt h                  i
                                                                                                                    R̂ (s) = E             xt−s z t−s
                                              0.2                                                                                 zt
    0                                                                                                                        "                                     #
                                              0.1                                                                              Cov (xt , xt−s ) Cov (xt , z t−s )
                                                                                                                           =                                         .
                                                                                                                               Cov (z t , xt−s ) Cov (z t , xt−s )
   −5
                                                0
        0           500             1000        −5                 0              5             Note that R (−s) is
                   period
                                                                                                                                 "                                         #
                                                                                                                                     Cov (xt , xt+s ) Cov (xt , z t+s )
                                                                                                                      R (−s) =
            Histogram, obs 1−1000          Mean and Std over longer and longer samples
                                                                                                                                     Cov (z t , xt+s ) Cov (z t , xt+s )
                                                                                                                                 "                                         #
                                                                                                                                     Cov (xt−s , xt ) Cov (xt−s , z t )
                                                4                          Mean                                              =                                                 ,
                                                                           Std                                                       Cov (z t−s , xt ) Cov (z t−s , xt )
  0.2                                           2

                                                0                                               which is indeed the transpose of R (s).
  0.1
                                               −2                                                  The autocovariances of the (vector) yt process can be estimated as
    0
    −5               0                5             0          500            1000
                                                           sample length                                                               T
                                                                                                                                     1 X
                                                                                                                          R̂ (s) =       (yt − ȳ) (yt−s − ȳ)0 ,                  (2.12)
                                                                                                                                     T
                                                                                                                                         t=1+s
Figure 2.1: Sample of one realization of yt = 0.85yt−1 + εt with y0 = 4 and Std(εt ) = 1.                                            1   XT
                                                                                                                         with ȳ =             yt .                                (2.13)
                                                                                                                                     T
                                                                                                                                         t=1
Note that R (s) does not have to be symmetric unless s = 0. However, note that R (s) =
R (−s)0 . This follows from noting that                                                         (We typically divide by T in even if we have only T −s full observations to estimate R (s)
                                                                                                from.)
                         R (−s) = E (yt − Eyt ) (yt+s − Eyt+s )0                                   Autocorrelations are then estimated by dividing the diagonal elements in R̂ (s) by the
                                 = E (yt−s − Eyt−s ) (yt − Eyt )0 ,                   (2.10a)   diagonal elements in R̂ (0)

where we have simply changed time subscripts and exploited the fact that yt is covariance                         ρ̂ (s) = diag R̂ (s) /diag R̂ (0) (element by element).          (2.14)
stationary. Transpose to get

                         R (−s)0 = E (yt − Eyt ) (yt−s − Eyt−s )0 ,                    (2.11)

which is the same as in (2.9). If yt is a scalar, then R (s) = R (−s), which shows that
autocovariances are symmetric around s = 0.




                                                                                          18                                                                                           19
2.3   White Noise                                                                                     and Cov(yt−s , yt ) = 0 for |s| ≥ 2. Since both the mean and the covariances are finite
                                                                                                      and constant across t, the MA(1) is covariance stationary. Since the absolute value of
A white noise time process has                                                                        the covariances sum to a finite number, the MA(1) is also ergodic for the mean. The first
                                                                                                      autocorrelation of an MA(1) is
                                            Eεt = 0
                                       Var (εt ) = σ 2 , and                                                                                                   θ1
                                                                                                                                       Corr (yt−1 , yt ) =           .
                                                                                                                                                             1 + θ12
                                Cov (εt−s , εt ) = 0 if s 6 = 0.                             (2.15)
                                                                                                          Since the white noise process is covariance stationary, and since an MA(q) with m <
If, in addition, εt is normally distributed, then it is said to be Gaussian white noise. The
                                                                                                      ∞ is a finite order linear function of εt , it must be the case that the MA(q) is covariance
conditions in (2.4)-(2.6) are satisfied so this process is covariance stationary. Moreover,
                                                                                                      stationary. It is ergodic for the mean since Cov(yt−s , yt ) = 0 for s > q, so (2.8) is
(2.8) is also satisfied, so the process is ergodic for the mean (and all moments if εt is
                                                                                                      satisfied. As usual, Gaussian innovations are then sufficient for the MA(q) to be ergodic
normally distributed).
                                                                                                      for all moments.
                                                                                                          The effect of εt on yt , yt+1 , ..., that is, the impulse response function, is the same as
2.4   Moving Average                                                                                  the MA coefficients
                                                                                                              ∂ yt      ∂ yt+1             ∂ yt+q            ∂ yt+q+k
A qth -order moving average process is                                                                             = 1,        = θ1 , ...,        = θq , and          = 0 for k > 0.          (2.19)
                                                                                                              ∂εt        ∂εt                 ∂εt                ∂εt
                             yt = εt + θ1 εt−1 + ... + θq εt−q ,                             (2.16)   This is easily seen from applying (2.16)

where the innovation εt is white noise (usually Gaussian). We could also allow both yt                                              yt = εt + θ1 εt−1 + ... + θq εt−q
and εt to be vectors; such a process it called a vector MA (VMA).
                                                                                                                                 yt+1 = εt+1 + θ1 εt + ... + θq εt−q+1
   We have Eyt = 0 and                                                                                                               ..
                                                                                                                                      .
         Var (yt ) = E εt + θ1 εt−1 + ... + θq εt−q       εt + θ1 εt−1 + ... + θq εt−q
                                                                                        
                                                                                                                                 yt+q = εt+q + θ1 εt−1+q + ... + θq εt
                                           
                   = σ 2 1 + θ12 + ... + θq2 .                                               (2.17)                            yt+q+1 = εt+q+1 + θ1 εt+q + ... + θq εt+1 .

Autocovariances are calculated similarly, and it should be noted that autocovariances of                 The expected value of yt , conditional on {εw }t−s
                                                                                                                                                        w=−∞ is
order q + 1 and higher are always zero for an MA(q) process.
                                                                                                                      Et−s yt = Et−s εt + θ1 εt−1 + ... + θs εt−s + ... + θq εt−q
                                                                                                                                                                                    

Example 2 The mean of an MA(1), yt = εt + θ1 εt−1 , is zero since the mean of εt (and                                         = θs εt−s + ... + θq εt−q ,                                     (2.20)
εt−1 ) is zero. The first three autocovariance are
                                                                                                    since Et−s εt−(s−1) = . . . = Et−s εt = 0.
                      Var (yt ) = E (εt + θ1 εt−1 ) (εt + θ1 εt−1 ) = σ 2 1 + θ12
                                                                                                      Example 3 (Forecasting an MA(1).) Suppose the process is
             Cov (yt−1 , yt ) = E (εt−1 + θ1 εt−2 ) (εt + θ1 εt−1 ) = σ 2 θ1
             Cov (yt−2 , yt ) = E (εt−2 + θ1 εt−3 ) (εt + θ1 εt−1 ) = 0,                     (2.18)                              yt = εt + θ1 εt−1 , with Var (εt ) = σ 2 .

                                                                                                20                                                                                                21
The forecasts made in t = 2 then have the follow expressions—with an example using                2 indicates the information set in t = 2)
θ1 = 2, ε1 = 3/4 and ε2 = 1/2 in the second column
                                                                                                                      General                                 Example
                    General                                     Example                                               y2 | 2 ∼ N (y2 , 0)                   = N (2, 0)
                    y2                               = 1/2 + 2 × 3/4 = 2                                              y3 | 2 ∼ N (E2 y3 , Var(y3 − E2 y3 )) = N (1, 1)
                    E2 y3 = E2 (ε3 + θ1 ε2 ) = θ1 ε2       = 2 × 1/2 = 1                                              y4 | 2 ∼ N (E2 y4 , Var(y4 − E2 y4 )) = N (0, 5)
                    E2 y4 = E2 (ε4 + θ1 ε3 ) = 0                     =0
                                                                                                  Note that the distribution of y4 | 2 coincides with the asymptotic distribution.
Example 4 (MA(1) and conditional variances.) From Example 3, the forecasting vari-
ances are—with the numerical example continued assuming that σ 2 = 1                                 Estimation of MA processes is typically done by setting up the likelihood function
                                                                                                  and then using some numerical method to maximize it.
                 General                                              Example
                 Var(y2 − E2 y2 ) = 0                                     =0
                                                                                                  2.5    Autoregression
                 Var(y3 − E2 y3 ) = Var(ε3 + θ1 ε2 − θ1 ε2 ) = σ 2        =1
                 Var(y4 − E2 y4 ) = Var (ε4 + θ1 ε3 ) = σ 2 + θ12 σ 2     =5                      A p th -order autoregressive process is

      If the innovations are iid Gaussian, then the distribution of the s−period forecast error                           yt = a1 yt−1 + a2 yt−2 + ... + a p yt− p + εt .              (2.24)

                        yt − Et−s yt = εt + θ1 εt−1 + ... + θs−1 εt−(s−1)                         A VAR( p) is just like the AR( p) in (2.24), but where yt is interpreted as a vector and ai
                                                                                                  as a matrix.
is                                       h                           i
                      (yt − Et−s yt ) ∼ N 0, σ 2 1 + θ12 + ... + θs−1
                                                                  2
                                                                         ,              (2.21)    Example 6 (VAR(1) model.) A VAR(1) model is of the following form
since εt , εt−1 , ..., εt−(s−1) are independent Gaussian random variables. This implies that                      "      # "            #"           # "        #
                                                                                                                     y1t        a11 a12       y1t−1         ε1t
the conditional distribution of yt , conditional on {εw }sw=−∞ , is                                                        =                           +          .
                                                                                                                     y2t        a21 a22       y2t−1         ε2t
     yt | {εt−s , εt−s−1 , . . .} ∼ N Et−s yt , Var(yt − Et−s yt )
                                                                 
                                                                                        (2.22)
                                     h                                              i               All stationary AR( p) processes can be written on MA(∞) form by repeated substitu-
                                  ∼ N θs εt−s + ... + θq εt−q , σ 1 + θ1 + ... + θs−1 . (2.23)
                                                                 2     2          2
                                                                                                  tion. To do so we rewrite the AR( p) as a first order vector autoregression, VAR(1). For
                                                                                                  instance, an AR(2) xt = a1 xt−1 + a2 xt−2 + εt can be written as
The conditional mean is the point forecast and the variance is the variance of the forecast                           "        # "           #"         # "        #
error. Note that if s > q, then the conditional distribution coincides with the unconditional                            xt           a1 a2        xt−1         εt
                                                                                                                                =                         +          , or           (2.25)
distribution since εt−s for s > q is of no help in forecasting yt .                                                      xt−1         1 0          xt−2         0
                                                                                                                               yt = Ayt−1 + εt ,                                       (2.26)
Example 5 (MA(1) and convergence from conditional to unconditional distribution.) From
examples 3 and 4 we see that the conditional distributions change according to (where             where yt is an 2 × 1 vector and A a 4 × 4 matrix. This works also if xt and εt are vectors
                                                                                                  and. In this case, we interpret ai as matrices and 1 as an identity matrix.



                                                                                            22                                                                                            23
   Iterate backwards on (2.26)                                                                            Conditional moments of AR(1), y =4         Conditional distributions of AR(1), y =4
                                                                                                                                           0                                               0
                                                                                                          4                                          0.4
                             yt = A (Ayt−2 + εt−1 ) + εt                                                                                                        s=1
                                                                                                                                                                s=3
                                   = A2 yt−2 + Aεt−1 + εt                                                                                                       s=5
                                                                                                                          Mean
                              ..                                                                          2                                          0.2        s=7
                                                                                                                          Variance
                               .                                                                                                                                s=7
                                                        K
                                                        X
                                   = A K +1 yt−K −1 +         As εt−s .                 (2.27)            0                                            0
                                                                                                              0           10               20              −5            0             5
                                                        s=0                                                       Forecasting horizon                                    x
Remark 7 (Spectral decomposition.) The n eigenvalues (λi ) and associated eigenvectors
(z i ) of the n × n matrix A satisfy
                                                                                                     Figure 2.2: Conditional moments and distributions for different forecast horizons for the
                                                                                                     AR(1) process yt = 0.85yt−1 + εt with y0 = 4 and Std(εt ) = 1.
                                     (A − λi In ) z i = 0n×1 .

If the eigenvectors are linearly independent, then                                                   Example 9 (AR(1).) For the univariate AR(1) yt = ayt−1 +εt , the characteristic equation
                                                                                                     is (a − λ) z = 0, which is only satisfied if the eigenvalue is λ = a. The AR(1) is therefore
                                   λ1 0 · · · 0
                                                   
                                                                                                     stable (and stationarity) if −1 < a < 1. This can also be seen directly by noting that
                                 0 λ2 · · · 0 
                                                   
                                                                                                     a K +1 yt−K −1 declines to zero if 0 < a < 1 as K increases.
                                                             h                          i
     A = Z 3Z −1 , where 3 =    . .   .         .  and Z = z 1 z 2 · · ·        zn       .
                                 .     .
                                        . ··· .  . 

                                   0 0 · · · λn                                                          Similarly, most finite order MA processes can be written (“inverted”) as AR(∞). It is
                                                                                                     therefore common to approximate MA processes with AR processes, especially since the
Note that we therefore get                                                                           latter are much easier to estimate.

      A2 = A A = Z 3Z −1 Z 3Z −1 = Z 33Z −1 = Z 32 Z −1 ⇒ Aq = Z 3q Z −1 .                           Example 10 (Variance of AR(1).) From the MA-representation yt = ∞              s=0 a εt−s and
                                                                                                                                                                                           s
                                                                                                                                                                                  P

                                                                                                     the fact that εt is white noise we get Var(yt ) = σ 2 ∞          2s = σ 2 / 1 − a 2 . Note that
                                                                                                                                                                                        
                                                                          √
                                                                                                                                                             P
                                                                                                                                                                    a
Remark 8 (Modulus of complex number.) If λ = a + bi, where i =                −1, then |λ| =                                                                   s=0
          √                                                                                          this is minimized at a = 0. The autocorrelations are obviously a |s| . The covariance
|a + bi| = a 2 + b2 .                                                                                               T
                                                                                                     matrix of {yt }t=1 is therefore (standard deviation×standard deviation×autocorrelation)
   Take the limit of (2.27) as K → ∞. If lim K →∞ A K +1 yt−K −1 = 0, then we have                                                                                        
                                                                                                                                       1      a       a2      · · · a T −1
a moving average representation of yt where the influence of the starting values vanishes
                                                                                                                                                              · · · a T −2 
                                                                                                                                                                          
                                                                                                                                     a       1       a
asymptotically                                                                                                                σ2                                          
                                                                                                                                                                           .
                                        ∞                                                                                            a2      a       1       · · · a T −3 
                                                                                                                                  2
                                        X                                                                                           
                                   yt =     As εt−s .                              (2.28)                                    1−a  .
                                                                                                                                     ..                      ...          
                                                                                                                                                                           
                                              s=0                                                                                                                         
                                                                                                                                       a T −1 a T −2  a T −3  ··· 1
We note from the spectral decompositions that A K +1 = Z 3 K +1 Z −1 , where Z is the ma-
trix of eigenvectors and 3 a diagonal matrix with eigenvalues. Clearly, lim K →∞ A K +1 yt−K −1 =    Example 11 (Covariance stationarity of an AR(1) with |a| < 1.) From the MA-representation
                                                                                                           P∞ s
0 is satisfied if the eigenvalues of A are all less than one in modulus and yt−K −1 does not         yt =      s=0 a εt−s , the expected value of yt is zero, since Eεt−s = 0. We know that
                                                                                                     Cov(yt , yt−s )= a |s| σ 2 / 1 − a 2 which is constant and finite.
                                                                                                                                         
grow without a bound.

                                                                                                24                                                                                               25
Example 12 (Ergodicity of a stationary AR(1).) We know that Cov(yt , yt−s )= a |s| σ 2 / 1 − a 2 ,
                                                                                                
                                                                                                         Recall that the joint and conditional pdfs of some variables z and x are related as
so the absolute value is
                                                                                                                                    pdf (x, z) = pdf (x|z) ∗ pdf (z) .                             (2.31)
                         |Cov(yt , yt−s )| = |a||s| σ 2 / 1 − a 2
                                                                                                     Applying this principle on (2.29) and (2.31) gives
Using this in (2.8) gives
                                                                                                             pdf (y2 , y1 |y0 ) = pdf (y2 | {y1 , y0 }) pdf (y1 |y0 )
                  ∞                                 ∞
                                               σ2 X s                                                                                         2                                        !
                                                                                                                                                            (y2 − ay1 )2 + (y1 − ay0 )2
                  X
                        |Cov (yt−s , yt )| =
                                                                                                                                  
                                                    |a|                                                                                1
                                             1 − a2                                                                             = √               exp −                                   .          (2.32)
                  s=0                               s=0                                                                               2πσ 2                             2σ 2
                                             σ2       1
                                       =                   (since |a| < 1)                           Repeating this for the entire sample gives the likelihood function for the sample
                                           1 − a 2 1 − |a|
                                                                                                                                                             T
                                                                                                                                                                                !
which is finite. The AR(1) is ergodic if |a| < 1.                                                                                     −T /2           1 X
                                                                                                                      T
                                                                                                            pdf {yt }t=0   y0 = 2πσ 2          exp − 2          (yt − a1 yt−1 )2 .                   (2.33)
                                                                                                                                                        2σ
                                                                                                                                                                   t=1
Example 13 (Conditional distribution of AR(1).) For the AR(1) yt = ayt−1 + εt with
εt ∼ N 0, σ 2 , we get                                                                               Taking logs, and evaluating the first order conditions for σ 2 and a gives the usual OLS
             

                                                                                                     estimator. Note that this is MLE conditional on y0 . There is a corresponding exact MLE,
                              Et yt+s = a s yt ,
                                                                                                   but the difference is usually small (the asymptotic distributions of the two estimators are
                 Var (yt+s − Et yt+s ) = 1 + a 2 + a 4 + ... + a 2(s−1) σ 2                          the same under stationarity; under non-stationarity OLS still gives consistent estimates).
                                                                                                                                        PT
                                          a 2s − 1 2                                                 The MLE of Var(εt ) is given by t=1       v̂t2 /T , where v̂t is the OLS residual.
                                      =           σ .
                                          a2 − 1                                                         These results carry over to any finite-order VAR. The MLE, conditional on the initial
The distribution of yt+s conditional on yt is normal with these parameters. See Figure               observations, of the VAR is the same as OLS estimates of each equation. The MLE of
                                                                                                                                                    PT
2.2 for an example.                                                                                  the i j th element in Cov(εt ) is given by t=1       v̂it v̂ jt /T , where v̂it and v̂ jt are the OLS
                                                                                                     residuals.
2.5.1   Estimation of an AR(1) Process                                                                   To get the exact MLE, we need to multiply (2.33) with the unconditional pdf of y0
                                                                                                     (since we have no information to condition on)
                                T
Suppose we have sample {yt }t=0      of a process which we know is an AR( p), yt = ayt−1 +                                                                                            !
εt , with normally distributed innovations with unknown variance σ 2 .                                                                       1                              y2
                                                                                                                        pdf (y0 ) = p                     exp − 2 0                     ,             (2.34)
     The pdf of y1 conditional on y0 is                                                                                               2π σ 2 /(1 − a 2 )              2σ /(1 − a 2 )

                                                                                                     since y0 ∼ N (0, σ 2 /(1 − a 2 )). The optimization problem is then non-linear and must be
                                                                     !
                                            1           (y1 − ay0 )2
                       pdf (y1 |y0 ) = √        exp −                  ,             (2.29)
                                          2πσ 2             2σ 2                                     solved by a numerical optimization routine.

and the pdf of y2 conditional on y1 and y0 is
                                                                        !
                                            1            (y2 − ay1 )2
                   pdf (y2 | {y1 , y0 }) = √       exp −                    .        (2.30)
                                             2πσ 2           2σ 2

                                                                                         26                                                                                                              27
2.5.2 Lag Operators∗                                                                                 Combining these facts, we get the asymptotic distribution
                                                                                                                             √                                 
A common and convenient way of dealing with leads and lags is the lag operator, L. It is                                        T β̂ L S − β →d N 0, 6x−1    xσ     .
                                                                                                                                                                2
                                                                                                                                                                                         (2.40)
such that
                         Ls yt = yt−s for all (integer) s.                                              Consistency follows from taking plim of (2.38)

For instance, the ARMA(2,1) model                                                                                                                            T
                                                                                                                                                         1X
                                                                                                                               plim β̂ L S − β = 6x−1
                                                                                                                                                    x plim     xt εt
                                                                                                                                                           T
                             yt − a1 yt−1 − a2 yt−2 = εt + θ1 εt−1                         (2.35)                                                                     t=1

                                                                                                                                                 = 0,
can be written as
                                                                                                     since xt and εt are uncorrelated.
                                            
                             1 − a1 L − a2 L2 yt = (1 + θ1 L) εt ,                         (2.36)

which is usually denoted
                                        a (L) yt = θ (L) εt .                              (2.37)    2.6   ARMA Models

                                                                                                     An ARMA model has both AR and MA components. For instance, an ARMA(p,q) is
2.5.3   Properties of LS Estimates of an AR( p) Process∗
                                                                                                             yt = a1 yt−1 + a2 yt−2 + ... + a p yt− p + εt + θ1 εt−1 + ... + θq εt−q .   (2.41)
Reference: Hamilton (1994) 8.2
    The LS estimates are typically biased, but consistent and asymptotically normally                Estimation of ARMA processes is typically done by setting up the likelihood function and
distributed, provided the AR is stationary.                                                          then using some numerical method to maximize it.
    As usual the LS estimate is                                                                          Even low-order ARMA models can be fairry flexible. For instance, the ARMA(1,1)
                                                 #−1
                                        T               T                                            model is
                                   "
                                     1X              1X
                      β̂ L S − β =             0
                                           xt xt           xt εt , where        (2.38)                                  yt = ayt−1 + εt + θ εt−1 , where εt is white noise.            (2.42)
                                     T               T
                                       t=1             t=1
                                                                                                     The model can be written on MA(∞) form as
                                   h                           i
                              xt = yt−1 yt−2 · · · yt− p .
                                                                                                                                                ∞
                                                                                                                                                X
    The first term in (2.38) is the inverse of the sample estimate of covariance matrix of                                          yt = εt +         a s−1 (a + θ )εt−s .               (2.43)
xt (since Eyt = 0), which converges in probability to 6x−1        (yt is stationary and ergodic                                                 s=1
                                                          PT x
for all moments if εt is Gaussian). The last term, T1 t=1        xt εt , is serially uncorrelated,   The autocorrelations can be shown to be
so we can apply a CLT. Note that Ext εt εt0 xt0 =Eεt εt0 Ext xt0 = σ 2 6x x since u t and xt are                             (1 + aθ )(a + θ )
independent. We therefore have                                                                                        ρ1 =                     , and ρs = aρs−1 for s = 2, 3, . . .      (2.44)
                                                                                                                              1 + θ 2 + 2aθ
                                    T                                                                and the conditional expectations are
                               1 X                         
                              √       xt εt →d N 0, σ 2 6x x .                             (2.39)
                                T t=1
                                                                                                                               Et yt+s = a s−1 (ayt + θ εt ) s = 1, 2, . . .             (2.45)

                                                                                                     See Figure 2.3 for an example.

                                                                                               28                                                                                           29
                 a. Impulse response of a=0.9                   a. Impulse response of a=0             eigenvalues of the canonical form (the VAR(1) form of the AR( p)) is one. Such a process
         2                                              2                                              is said to be integrated of order one (often denoted I(1)) and can be made stationary by
                                                                                                       taking first differences.
         0
                                      θ=−0.8
                                                        0                                              Example 14 (Non-stationary AR(2).) The process yt = 1.5yt−1 − 0.5yt−2 + εt can be
                                      θ=0                                                              written
                                      θ=0.8
                                                                                                                       "       # "               #"       # "       #
                                                                                                                          yt         1.5 −0.5        yt−1        εt
        −2                                             −2                                                                        =                          +         ,
             0                5                 10          0              5                 10                           yt−1       1     0         yt−2        0
                            period                                       period
                                                                                                       where the matrix has the eigenvalues 1 and 0.5 and is therefore non-stationary. Note that
                                                                                                       subtracting yt−1 from both sides gives yt − yt−1 = 0.5 (yt−1 − yt−2 ) + εt , so the variable
                 a. Impulse response of a=−0.9                                                         xt = yt − yt−1 is stationary.
         2                                             ARMA(1,1): yt = ayt−1 + εt + θεt−1
                                                                                                           The distinguishing feature of unit root processes is that the effect of a shock never
                                                                                                       vanishes. This is most easily seen for the random walk. Substitute repeatedly in (2.47) to
         0
                                                                                                       get

        −2                                                                                                                          yt = µ + (µ + yt−2 + εt−1 ) + εt
             0                5                 10                                                                                    ..
                            period                                                                                                     .
                                                                                                                                                     t
                                                                                                                                                     X
                                                                                                                                       = tµ + y0 +         εs .                               (2.48)
                         Figure 2.3: Impulse response function of ARMA(1,1)                                                                          s=1

                                                                                                       The effect of εt never dies out: a non-zero value of εt gives a permanent shift of the level
2.7      Non-stationary Processes
                                                                                                       of yt . This process is clearly non-stationary. A consequence of the permanent effect of
2.7.1    Introduction                                                                                  a shock is that the variance of the conditional distribution grows without bound as the
                                                                                                       forecasting horizon is extended. For instance, for the random walk with drift, (2.48), the
A trend-stationary process can be made stationary by subtracting a linear trend. The
                                                                                                       distribution conditional on the information in t = 0 is N y0 + tµ, sσ 2 if the innovations
                                                                                                                                                                                  
simplest example is
                                                                                                       are Gaussian. This means that the expected change is tµ and that the conditional vari-
                                  yt = µ + βt + εt                             (2.46)
                                                                                                       ance grows linearly with the forecasting horizon. The unconditional variance is therefore
where εt is white noise.                                                                               infinite and the standard results on inference are not applicable.
   A unit root process can be made stationary only by taking a difference. The simplest                    In contrast, the conditional distributions from the trend stationary model, (2.46), is
                                                                                                       N st, σ 2 .
                                                                                                                  
example is the random walk with drift
                                                                                                           A process could have two unit roots (integrated of order 2: I(2)). In this case, we need
                                          yt = µ + yt−1 + εt ,                                (2.47)
                                                                                                       to difference twice to make it stationary. Alternatively, a process can also be explosive,
where εt is white noise. The name “unit root process” comes from the fact that the largest             that is, have eigenvalues outside the unit circle. In this case, the impulse response function
                                                                                                       diverges.

                                                                                                  30                                                                                              31
Example 15 (Two unit roots.) Suppose yt in Example (14) is actually the first difference           we could proceed by applying standard econometric tools to 1yt .
of some other series, yt = z t − z t−1 . We then have                                                   One may then be tempted to try first-differencing all non-stationary series, since it
                                                                                                   may be hard to tell if they are unit root process or just trend-stationary. For instance, a
                  z t − z t−1 = 1.5 (z t−1 − z t−2 ) − 0.5 (z t−2 − z t−3 ) + εt                   first difference of the trend stationary process, (2.46), gives
                          z t = 2.5z t−1 − 2z t−2 + 0.5z t−3 + εt ,
                                                                                                                                  yt − yt−1 = β + εt − εt−1 .                          (2.50)
which is an AR(3) with the following canonical form
                                                                                                   Its unclear if this is an improvement: the trend is gone, but the errors are now of MA(1)
                                                              εt
                                                          
                   zt            2.5 −2 0.5         z t−1                                          type (in fact, non-invertible, and therefore tricky, in particular for estimation).
                 z t−1  =  1        0    0   z t−2  +  0  .
                                                          

                   z t−2          0    1    0       z t−3     0                                    2.7.3   Testing for a Unit Root I∗
The eigenvalues are 1, 1, and 0.5, so z t has two unit roots (integrated of order 2: I(2) and      Suppose we run an OLS regression of
needs to be differenced twice to become stationary).
                                                                                                                                        yt = ayt−1 + εt ,                              (2.51)
Example 16 (Explosive AR(1).) Consider the process yt = 1.5yt−1 + εt . The eigenvalue
is then outside the unit circle, so the process is explosive. This means that the impulse          where the true value of |a| < 1. The asymptotic distribution is of the LS estimator is
response to a shock to εt diverges (it is 1.5s for s periods ahead).                                                            √                           
                                                                                                                                  T â − a ∼ N 0, 1 − a 2 .
                                                                                                                                           
                                                                                                                                                                                       (2.52)

2.7.2 Spurious Regressions                                                                         (The variance follows from the standard OLS formula where the variance of the estimator
                                                                                                                   −1
                                                                                                   is σ 2 X 0 X/T      . Here plim X 0 X/T =Var(yt ) which we know is σ 2 / 1 − a 2 ).
                                                                                                                                                                                    
Strong trends often causes problems in econometric models where yt is regressed on xt .
In essence, if no trend is included in the regression, then xt will appear to be significant,          It is well known (but not easy to show) that when a = 1, then â is biased towards
just because it is a proxy for a trend. The same holds for unit root processes, even if            zero in small samples. In addition, the asymptotic distribution is no longer (2.52). In
they have no deterministic trends. However, the innovations accumulate and the series              fact, there is a discontinuity in the limiting distribution as we move from a stationary/to
therefore tend to be trending in small samples. A warning sign of a spurious regression is         a non-stationary variable. This, together with the small sample bias means that we have
when R 2 > DW statistics.                                                                          to use simulated critical values for testing the null hypothesis of a = 1 based on the OLS
     For trend-stationary data, this problem is easily solved by detrending with a linear          estimate from (2.51).
trend (before estimating or just adding a trend to the regression).                                    The approach is to calculate the test statistic
     However, this is usually a poor method for a unit root processes. What is needed is a                                                     â − 1
                                                                                                                                          t=           ,
first difference. For instance, a first difference of the random walk is                                                                       Std(â)

                                       1yt = yt − yt−1                                             and reject the null of non-stationarity if t is less than the critical values published by
                                                                                                   Dickey and Fuller (typically more negative than the standard values to compensate for the
                                            = εt ,                                       (2.49)
                                                                                                   small sample bias) or from your own simulations.
which is white noise (any finite difference, like yt − yt−s , will give a stationary series), so      In principle, distinguishing between a stationary and a non-stationary series is very


                                                                                             32                                                                                            33
difficult (and impossible unless we restrict the class of processes, for instance, to an            p lags of 1yt if u t is an AR( p). The test remains valid even under an MA structure if
AR(2)), since any sample of a non-stationary process can be arbitrary well approximated             the number of lags included increases at the rate T 1/3 as the sample lenngth increases.
by some stationary process et vice versa. The lesson to be learned, from a practical point          In practice: add lags until the remaining residual is white noise. The size of the test
of view, is that strong persistence in the data generating process (stationary or not) invali-      (probability of rejecting H0 when it is actually correct) can be awful in small samples for
dates the usual results on inference. We are usually on safer ground to apply the unit root         a series that is a I(1) process that initially “overshoots” over time, as 1yt = et − 0.8et−1 ,
results in this case, even if the process is actually stationary.                                   since this makes the series look mean reverting (stationary). Similarly, the power (prob of
                                                                                                    rejecting H0 when it is false) can be awful when there is a lot of persistence, for instance,
2.7.4    Testing for a Unit Root II∗                                                                if α = 0.95.
                                                                                                        The power of the test depends on the span of the data, rather than the number of
Reference: Fuller (1976), Introduction to Statistical Time Series; Dickey and Fuller (1979),
                                                                                                    observations. Seasonally adjusted data tend to look more integrated than they are. Should
“Distribution of the Estimators for Autoregressive Time Series with a Unit Root,” Journal
                                                                                                    apply different critical values, see Ghysel and Perron (1993), Journal of Econometrics,
of the American Statistical Association, 74, 427-431.
                                                                                                    55, 57-98. A break in mean or trend also makes the data look non-stationary. Should
    Consider the AR(1) with intercept
                                                                                                    perhaps apply tests that account for this, see Banerjee, Lumsdaine, Stock (1992), Journal
        yt = γ + αyt−1 + u t , or 1yt = γ + βyt−1 + u t , where β = (α − 1) .             (2.53)    of Business and Economics Statistics, 10, 271-287.
                                                                                                        Park (1990, “Testing for Unit Roots and Cointegration by Variable Addition,” Ad-
The DF test is to test the null hypothesis that β = 0, against β < 0 using the usual                vances in Econometrics, 8, 107-133) sets up a framework where we can use both non-
t statistic. However, under the null hypothesis, the distribution of the t statistics is far        stationarity as the null hypothesis and where we can have stationarity as the null. Consider
from a student-t or normal distribution. Critical values, found in Fuller and Dickey and            the regression
                                                                                                                                           p            q
Fuller, are lower than the usual ones. Remember to add any nonstochastic regressors                                                      X             X
                                                                                                                                   yt =       βs t s +     βs t s + u t ,                  (2.55)
that in required, for instance, seasonal dummies, trends, etc. If you forget a trend, then
                                                                                                                                        s=0         s= p+1
the power of the test goes to zero as T → ∞. The critical values are lower the more
                                                                                                    where the we want to test if H0 : βs = 0, s = p + 1, ..., q. If F ( p, q) is the Wald-statistics
deterministic components that are added.
                                                                                                    for this, then J ( p, q) = F ( p, q) /T has some (complicated) asymptotic distribution
    The asymptotic critical values are valid even under heteroskedasticity, and non-normal
                                                                                                    under the null. You reject non-stationarity if J ( p, q) < critical value, since J ( p, q) → p
distributions of u t . However, no autocorrelation in u t is allowed for. In contrast, the
                                                                                                    0 under (trend) stationarity.
simulated small sample critical values are usually only valid for iid normally distributed
                                                                                                        Now, define
disturbances.
    The ADF test is a way to account for serial correlation in u t . The same critical values                                         Var (u t )
                                                                                                            G ( p, q) = F ( p, q)       √         ∼ χ p−q
                                                                                                                                                        2
                                                                                                                                                            under H0 of stationarity,        (2.56)
apply. Consider an AR(1) u t = ρu t−1 + et . A Cochrane-Orcutt transformation of (2.53)                                             Var    T ū t
gives
                                                                                                    and G ( p, q) → p ∞ under non-stationarity, so we reject stationarity
                                                                                                                                                                   √      if G ( p, q) > critical
    1yt = γ (1 − ρ) + β̃ yt−1 + ρ (β + 1) 1yt−1 + et , where β̃ = β (1 − ρ) .             (2.54)    value. Note that Var(u t ) is a traditional variance, while Var T ū t can be estimated with
                                                                                                    a Newey-West estimator.
The test is here the t test for β̃. The fact that β̃ = β (1 − ρ) is of no importance, since β̃ is
zero only if β is (as long as ρ < 1, as it must be). (2.54) generalizes so one should include


                                                                                              34                                                                                                 35
2.7.5 Cointegration∗                                                                            to estimate γ and A2 . The relation to (2.59) is most easily seen in the bivariate case. Then,
                                                                                                by using (2.57) in (2.60) we get
Suppose y1t and y2t are both (scalar) unit root processes, but that
                                                                                                                              h            i
                                                                                                                yt − yt−1 = γ −γβ yt−1 − A2 (yt−1 − yt−2 ) + εt ,                        (2.61)
                                 z t = y1t − βy2t                                     (2.57)
                                                  "     #
                                       h         i y
                                                     1t                                         so knowledge (estimates) of β (scalar), γ (2 × 1), A2 (2 × 2) allows us to “back out” A1 .
                                     = 1 −β
                                                    y2t

is stationary. The processes yt and xt must then share the samehcommon stochastic
                                                                       i          trend,        Bibliography
and are therefore cointegrated with the cointegrating vector 1 −β . Running the
                                                                                                Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
regression (2.57) gives an estimator β̂ L S which converges much faster than usual (it is
                                                                                                  Jersey, 4th edn.
“superconsistent”) and is not affected by any simultaneous equations bias. The intuition
for the second result is that the simultaneous equations bias depends on the simultaneous       Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.
reactions to the shocks, which are stationary and therefore without any long-run impor-
tance.                                                                                          Hayashi, F., 2000, Econometrics, Princeton University Press.
    This can be generalized by letting yt be a vector of n unit root processes which follows    Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th
a VAR. For simplicity assume it is a VAR(2)                                                       edn.

                               yt = A1 yt−1 + A2 yt−2 + εt .                          (2.58)    Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,
                                                                                                  Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.
Subtract yt from both sides, add and subtract A2 yt−1 from the right hand side
                                                                                                Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
             yt − yt−1 = A1 yt−1 + A2 yt−2 + εt − yt−1 + A2 yt−1 − A2 yt−1
                       = (A1 + A2 − I ) yt−1 − A2 (yt−1 − yt−2 ) + εt                 (2.59)

The left hand side is now stationary, and so is yt−1 − yt−2 and εt on the right hand side. It
must therefore be the case that (A1 + A2 − I ) yt−1 is also stationary; it must be n linear
combinations of the cointegrating vectors. Since the number of cointegrating vectors must
be less than n, the rank of A1 + A2 − I must be less than n. To impose this calls for special
estimation methods.
    The simplest of these is Engle and Granger’s two-step procedure. In the first step, we
estimate the cointegrating vectors (as in 2.57) and calculate the different z t series (fewer
than n). In the second step, these are used in the error correction form of the VAR

                       yt − yt−1 = γ z t−1 − A2 (yt−1 − yt−2 ) + εt                   (2.60)



                                                                                          36                                                                                                37
                                                                                                 Example 1 (m t is a scalar iid process.) When m t is a scalar iid process, then
                                                                                                                    T                T
                                                                                                                          !
                                                                                                                 1X              1 X
                                                                                                          Var          mt = 2           Var (m t ) /*independently distributed*/
3     The Distribution of a Sample Average                                                                      T               T
                                                                                                                       t=1                 t=1
                                                                                                                                     1
                                                                                                                                   = 2 T Var (m t ) /*identically distributed*/
Reference: Hayashi (2000) 6.5                                                                                                       T
Additional references: Hamilton (1994) 14; Verbeek (2000) 4.10; Harris and Matyas                                                   1
                                                                                                                                   = Var (m t ) .
(1999); and Pindyck and Rubinfeld (1997) Appendix 10.1; Cochrane (2001) 11.7                                                        T

                                                                                                                       √case. Clearly, limT ⇒∞ Var(m̄) = 0. By multiplying both sides by
                                                                                                 This is the classical iid
                                                                                                 T we instead get Var T m̄ = Var(m t ), which is often more convenient for asymptotics.
3.1    Variance of a Sample Average
                                                                                                 Example i20 Let xt and z t be two scalars, with samples averages x̄ and z̄. Let m t =
In order to understand the distribution of many estimators we need to get an important           h
                                                                                                   xt z t . Then Cov(m̄) is
building block: the variance of a sample average.
    Consider a covariance stationary vector process m t with zero mean and Cov(m t , m t−s ) =                                                       "        #!
                                                                                                                                                         x̄
R (s) (which only depends on s). That is, we allow for serial correlation in m t , but no                                    Cov (m̄) = Cov
                                                                                                                                                         z̄
heteroskedasticity. This is more restrictive than we want, but we will return to that further                                                "                                     #
                                                                                                                                                  Var (x̄) Cov (x̄, z̄)
on.                                                                                                                                      =                                             .
             PT                                                                                                                                  Cov (z̄, x̄) Var (z̄)
    Let m̄ = t=1    m t /T . The sampling variance of a mean estimator of the zero mean
random variable m t is defined as                                                                Example 3 (Cov(m̄) with T = 3.) With T = 3, we have
                                    
                                             T
                                                   !     T
                                                                !0 
                                         1  X         1 X                                                                                        Cov (T m̄) =
                      Cov (m̄) = E             mt          mτ  .                      (3.1)
                                         T            T                                                                      E (m 1 + m 2 + m 3 ) m 01 + m 02 + m 03 =
                                                                                                                                                                    
                                              t=1            τ =1

                                                                                                 E m 1 m 01 + m 2 m 02 + m 3 m 03 + E m 2 m 01 + m 3 m 02 + E m 1 m 02 + m 2 m 03 + Em 3 m 01 + Em 1 m 03 .
                                                                                                                                                                               
Let the covariance (matrix) at lag s be                                                          |            {z                 } |          {z         } |          {z         } | {z } | {z }
                                                                                                              3R(0)                              2R(1)                        2R(−1)       R(2)      R(−2)
                                 R (s) = Cov (m t , m t−s )
                                                                                                     The general pattern in the previous example is
                                          = E m t m 0t−s ,                           (3.2)
                                                                                                                                                    T
                                                                                                                                                    X −1
                                                                                                                              Cov (T m̄) =                    (T − |s|) R(s).                     (3.3)
since E m t = 0 for all t.
                                                                                                                                                 s=−(T −1)

                                                                                                 Divide both sides by T

                                                                                                                                   √                T −1                    
                                                                                                                                                    X                  |s|
                                                                                                                             Cov        T m̄ =                     1−             R(s).           (3.4)
                                                                                                                                                                         T
                                                                                                                                                  s=−(T −1)

                                                                                                 This is the exact expression for a given sample size.

                                                                                        38                                                                                                          39
    In many cases, we use the asymptotic expression (limiting value as T → ∞) instead.                    Variance of sample mean, AR(1)                  Var(sample mean)/Var(series), AR(1)
If R (s) = 0 for s > q so m t is an MA(q), then the limit as the sample size goes to infinity       100                                                 100

is
                          √                    √           Xq
                   ACov       T m̄ = lim Cov        T m̄ =         R(s),                (3.5)        50                                                     50
                                        T →∞
                                                             s=−q

where ACov stands for the asymptotic variance-covariance matrix. This continues to hold
                                                                                                      0                                                     0
even if q = ∞, provided R (s) goes to zero sufficiently quickly, as it does in stationary             −1                0                    1              −1                  0            1
                                                                                                                 AR(1) coefficient                                       AR(1) coefficient
VAR systems. In this case we have
                                     √          ∞
                                                X                                                                           √
                              ACov        T m̄ =   R(s).                               (3.6)     Figure 3.1: Variance of         T times sample mean of AR(1) process m t = ρm t−1 + u t .
                                                 s=−∞

Estimation in finite samples will of course require some cut-off point, which is discussed      sample. If we disregard all autocovariances, then we would conclude that the variance of
                                                                                                √
                                                                                                  T m̄ is σ 2 / 1 − ρ 2 , which is smaller (larger) than the true value when ρ > 0 (ρ < 0).
                                                                                                                       
below.                                 √     
    The traditional estimator of ACov T m̄ is just R(0), which is correct when m t has          For instance, with ρ = 0.85, it is approximately 12 times too small. See Figure 3.1.a for
no autocorrelation, that is                                                                     an illustration.
                √       
          ACov       T m̄ = R(0) = Cov (m t , m t ) if Cov (m t , m t−s ) for s 6= 0. (3.7)     Example 5 (Variance of sample mean of AR(1), continued.) Part of the reason why
                                                                                                Var(m̄) increased with ρ in the previous examples is that Var(m t ) increases with ρ. We
By comparing with (3.5) we see that this underestimates the true variance of autocovari-                                                                         √
                                                                                                can eliminate this effect by considering how much larger AVar( T m̄) is than in the iid
ances are mostly positive, and overestimates if they are mostly negative. The errors can                            √
                                                                                                case, that is, AVar( T m̄)/Var(m t ) = (1 + ρ) / (1 − ρ). This ratio is one for ρ = 0 (iid
be substantial.                                                                                 data), less than one for ρ < 0, and greater than one for π > 0. This says that if relatively
                                                                                                more of the variance in m t comes from long swings (high ρ), then the sample mean is
Example 4 (Variance of sample mean of AR(1).) Let m t = ρm t−1 + u t , where Var(u t ) =
                                                                                                more uncertain. See Figure 3.1.b for an illustration.
σ 2 . Note that R (s) = ρ |s| σ 2 / 1 − ρ 2 , so
                                           

                     √         ∞
                                 X
              AVar        T m̄ =   R(s)                                                         Example 6 (Variance of sample mean of AR(1), illustration of why limT →∞ of (3.4).)
                                 s=−∞                                                           For an AR(1) (3.4) is
                                         ∞                            ∞
                                                                                 !
                                   σ2   X             σ2              X
                             =              ρ |s| =            1+2          ρs                                          √               σ2
                                                                                                                                                     T −1    
                                                                                                                                                                       |s|
                                                                                                                                                                           
                                 1 − ρ s=−∞         1 − ρ2
                                                                                                                                 
                                      2
                                                                                                                                                     X
                                                                                                                  Var        T m̄ =                               1−         ρ |s|
                                                                      s=1
                                                                                                                                       1 − ρ2                           T
                                 σ2 1 + ρ                                                                                                        s=−(T −1)
                             =              ,                                                                                                    "          T −1 
                                                                                                                                                                                     #
                               1 − ρ2 1 − ρ                                                                                             σ2                  X            s s
                                                                                                                                   =              1+2              1−      ρ
                                                                                                                                       1 − ρ2                            T
which is increasing in ρ (provided |ρ| < 1, as required for stationarity). The variance                                                                     s=1
                                                                                                                                       σ2           ρ      ρ T +1 − ρ
                                                                                                                                                                     
of m̄ is much larger for ρ close to one than for ρ close to zero: the high autocorrelation                                         =         1 + 2     + 2              .
create long swings, so the mean cannot be estimated with any good precision in a small                                               1 − ρ2        1−ρ     T (1 − ρ)2

                                                                                          40                                                                                                     41
The last term in brackets goes to zero as T goes to infinity. We then get the result in             It can also be shown that,
                                                                                                                             √under quite general circumstances, Ŝ in (3.8)-(3.9) is a
Example 4.                                                                                       consistent estimator of ACov T m̄ , even if m t is heteroskedastic (on top of being au-
                                                                                                 tocorrelated). (See Hamilton (1994) 10.5 for a discussion.)
3.2    The Newey-West Estimator
                                                                                                 3.2.2    How to Implement the Newey-West Estimator
3.2.1 Definition of the Estimator
                                                                                                 Economic theory and/or stylized facts can sometimes help us choose the lag length n.
Newey and West (1987) suggested the following estimator of the covariance matrix in              For instance, we may have a model of stock returns which typically show little autocor-
(3.5) as (for some n < T )                                                                       relation, so it may make sense to set n = 0 or n = 1 in that case. A popular choice of
       √             n                                                                        n is to round (T /100)1/4 down to the closest integer, although this does not satisfy the
\
                    X           |s|
ACov        T m̄ =         1−          R̂(s)                                                     consistency requirement.
                    s=−n
                                n+1
                                                                                                     It is important to note that definition of the covariance matrices in (3.2) and (3.9)
                             n             
                            X           s                       
                                                                                                 assume that m t has zero mean. If that is not the case, then the mean should be removed
                  = R̂(0) +       1−           R̂(s) + R̂(−s) , or since R̂(−s) = R̂ 0 (s),
                                      n+1                                                        in the calculation of the covariance matrix. In practice, you remove the same number,
                            s=1
                             n 
                                                                                                 estimated on the whole sample, from both m t and m t−s . It is often recommended to
                                            
                            X           s                      
                  = R̂(0) +       1−           R̂(s) + R̂ 0 (s) , where             (3.8)
                                      n+1                                                        remove the sample means even if theory tells you that the true mean is zero.
                            s=1

                                      T
                                    1 X       0
                          R̂(s) =       m t m t−s (if E m t = 0).                       (3.9)    3.3      Summary
                                    T
                                      t=s+1
    The tent shaped (Bartlett) weights in (3.8) guarantee a positive definite covariance                                         T
                                                                                                                              1X
estimate. In contrast, equal weights (as in (3.5)), may give an estimated covariance matrix                      Let m̄ =        m t and R (s) = Cov (m t , m t−s ) . Then
                                                                                                                              T
                                                                                                                                t=1
which is not positive definite, which is fairly awkward. Newey and West (1987) showed
                                                                                                                √           ∞
                                                                                                                              X
that this estimator is consistent if we let n go to infinity as T does, but in such a way that           ACov        T m̄ =           R(s)
n/T 1/4 goes to zero.                                                                                           √  
                                                                                                                              s=−∞

    There are several other possible estimators of the covariance matrix in (3.5), but sim-              ACov   T m̄ = R(0) = Cov (m t , m t ) if R(s) = 0 for s 6 = 0
ulation evidence suggest that they typically do not improve a lot on the Newey-West                                         √                     n              
                                                                                                                                                 X           s                        
estimator.                                                                                                             \
                                                                                                          Newey-West : ACov    T m̄ = R̂(0) +          1−              R̂(s) + R̂ 0 (s) .
                                                                                                                                                            n+1
                                                                                                                                                      s=1

Example 7 (m t is MA(1).) Suppose we know that m t = εt + θ εt−1 . Then R(s)
                                                                             = 0 for
                                                                      √
s ≥ 2, so it might be tempting to use n = 1 in (3.8). This gives ACov
                                                                 [      T m̄ = R̂(0) +           Bibliography
2 [ R̂(1) + R̂ (1)], while the theoretical expression (3.5) is ACov= R(0) + R(1) + R (1).
1             0                                                                     0
                                                                                                 Cochrane, J. H., 2001, Asset Pricing, Princeton University Press, Princeton, New Jersey.
The Newey-West estimator puts too low weights on the first lead and lag, which suggests
that we should use n > 1 (or more generally, n > q for an MA(q) process).                        Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.



                                                                                           42                                                                                               43
Harris, D., and L. Matyas, 1999, “Introduction to the Generalized Method of Moments
  Estimation,” in Laszlo Matyas (ed.), Generalized Method of Moments Estimation .
  chap. 1, Cambridge University Press.
                                                                                         4       Least Squares
Hayashi, F., 2000, Econometrics, Princeton University Press.
                                                                                         Reference: Greene (2000) 6
Newey, W. K., and K. D. West, 1987, “A Simple Positive Semi-Definite, Heteroskedastic-
                                                                                         Additional references: Hayashi (2000) 1-2; Verbeek (2000) 1-4; Hamilton (1994) 8
  ity and Autocorrelation Consistent Covariance Matrix,” Econometrica, 55, 703–708.

Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,    4.1     Definition of the LS Estimator
  Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.
                                                                                         4.1.1    LS with Summation Operators
Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
                                                                                         Consider the linear model
                                                                                                                                  yt = xt0 β0 + u t ,                             (4.1)

                                                                                         where yt and u t are scalars, xt a k×1 vector, and β0 is a k×1 vector of the true coefficients.
                                                                                         Least squares minimizes the sum of the squared fitted residuals
                                                                                                                           T             T
                                                                                                                           X             X                      2
                                                                                                                                 et2 =            yt − xt0 β          ,           (4.2)
                                                                                                                           t=1             t=1

                                                                                         by choosing the vector β. The first order conditions are
                                                                                                                                     T
                                                                                                                                     X                       
                                                                                                                           0kx1 =           xt yt − xt0 β̂ L S or                 (4.3)
                                                                                                                                     t=1
                                                                                                                     T
                                                                                                                     X               XT
                                                                                                                           xt yt =          xt xt0 β̂ L S ,                       (4.4)
                                                                                                                     t=1             t=1

                                                                                         which are the so called normal equations. These can be solved as

                                                                                                                                 T
                                                                                                                                                !−1 T
                                                                                                                                 X                 X
                                                                                                                     β̂ L S =          xt xt0                 xt yt               (4.5)
                                                                                                                                 t=1                t=1
                                                                                                                                       T
                                                                                                                                                   !−1           T
                                                                                                                                  1X                          1X
                                                                                                                           =         xt xt0                      xt yt            (4.6)
                                                                                                                                  T                           T
                                                                                                                                     t=1                        t=1




                                                                                   44                                                                                                45
Remark 1 (Summation and vectors) Let z t and xt be the vectors                                               We then have
                                                                                                                                                        T
                                                                                                                                                        X
                                                                                                                                                              xt z t0 = X 0 Z .
                                                       
                            "      #                x1t
                              z 1t                                                                                                                      t=1
                      zt =           and xt =  x2t  ,
                                                       
                              z 2t
                                                    x3t                                                          We can then rewrite the loss function (4.2) as e0 e, the first order conditions (4.3) and
                                                                                                             (4.4) as (recall that yt = yt0 since it is a scalar)
then
                                                                                                                                                                        
                       
                    x1t h
                                          
                                            x1t z 1t x1t z 2t
                                                                PT                PT                                                          0kx1 = X 0 Y − X β̂ L S                            (4.10)
T
X             XT                   i X T                              t=1 x 1t z 1t   t=1 x 1t z 2t
    xt z t0 =                                                                         t=1 x 2t z 2t  .
                                                                      T               T
                                                                                                                                                   X 0 Y = X 0 X β̂ L S ,
                                                                    P               P
                   x2t  z 1t z 2t =      x2t z 1t x2t z 2t  =  t=1 x2t z 1t
                                                                                               
                                                                                                                                                                                                           (4.11)
t=1           t=1                     t=1
                                                                    P T             P T
                    x3t                     x3t z 1t x3t z 2t         t=1 x 3t z 1t   t=1 x 3t z 2t
                                                                                                             and the solution (4.5) as
                                                                                                                                                                      −1
4.1.2   LS in Matrix Form                                                                                                                            β̂ L S = X 0 X         X 0 Y.                         (4.12)

Define the matrices
                                                                                                     4.2    LS and R 2 ∗
          y1             u1                              x10                         e1
                                                    0                            
       y2             u2                            x2                        e2                     The first order conditions in LS are
 Y = .           , u= .                       , X =
                                                        ..             , and e =  .            . (4.7)
       ..             ..                                                        .. 
                                                                               
                                                        . 
                                                                                       
                                                                                                                                   T
                                                                                                                                   X
         yT                    uT                          x T0                      eT                                                  xt û t = 0, where û t = yt − ŷt , with ŷt = xt0 β̂.           (4.13)
               T ×1                        T ×1                   T ×k                      T ×1
                                                                                                                                   t=1
Write the model (4.1) as
                                                                                                       This implies that the fitted residuals and fitted values are orthogonal, 6t=1T ŷ û = 6 T β̂ 0 x û =
                                                                                                                                                                                               t t          t=1      t t
                             y1      x10        u1                                                           0. If we let xt include a constant, then (4.13) also implies that the fitted residuals have a
                            y2   x20                                                                     zero mean, 6t=1 T û /T = 0. We can then decompose the sample variance (denoted Var)
                                              
                                               u 
                            .  =  .  β0 +  .2  or                                                                            t                                                                            c
                            .   .          .                                                   (4.8)
                            .   .          .                                                           of yt = ŷt + û t as
                                                                                                                                             c (yt ) = Var            c û t ,
                                                                                                                                                                           
                             yT      x T0       uT                                                                                           Var          c ŷt + Var                                        (4.14)

                                                                                                             since ŷt and û t are uncorrelated in this case. (Note that Cov ŷt , û t = E ŷt û t −E ŷt Eû t so
                                                                                                                                                                                        
                                    Y = Xβ0 + u.                                                     (4.9)
                                                                                                             the orthogonality is not enough to allow the decomposition; we also need E ŷt Eû t = 0—
Remark 2 Let xt be a k × 1 and z t an m × 1 vector. Define the matrices
                                                                                                             this holds for sample moments as well.)
                                                       
                                                                                                                 We define R 2 as the fraction of Varc (yt ) that is explained by the model
                             x10                     z 10
                           0                    0 
                           x2                   z2                                                                                                    Var
                                                                                                                                                           c ŷt
                                                                                                                                                                  
                     X =  .. 
                                       and Z =  .. 
                                                              .                                                                                   R2 =                                                      (4.15)
                             .                  .                                                                                                      c (yt )
                                                                                                                                                           Var
                                    x T0                          z 0T
                                                                                                                                                                       
                                                                                                                                                               Var
                                                                                                                                                                c û t
                                             T ×k                         T ×m                                                                         =1−               .                                   (4.16)
                                                                                                                                                                c (yt )
                                                                                                                                                               Var



                                                                                                       46                                                                                                      47
                                                                                                     This shows that d̂ L S = 1/b̂ L S if (and only if) R 2 = 1.
                                                                              
LS minimizes the sum of squared fitted errors, which is proportional to Var
                                                                        c û t , so it
maximizes R 2 .
   We can rewrite R 2 by noting that                                                                 4.3    Finite Sample Properties of LS
                        d yt , ŷt = Cov
                                     d ŷt + û t , ŷt = Var
                                                          c ŷt .
                                                                     
                        Cov                                                                (4.17)    Use the true model (4.1) to substitute for yt in the definition of the LS estimator (4.6)
                                                                             d yt , ŷt /Var
                                                                                                                                                    !−1
Use this to substitute for Var
                           c ŷt in (4.15) and then multiply both sides with Cov         c ŷt =                                            T                 T
                                                                                                                                         1X            1X
                                                                                                                             β̂ L S =       xt xt0           xt xt0 β0 + u t
                                                                                                                                                                             
1 to get
                                                                                                                                         T            T
                                                                                                                                          t=1            t=1
                                           d yt , ŷt 2
                                                                                                                                                       !−1
                                          2Cov                                                                                                 T                T
                                      R =                                                                                                    1X             1X
                                          c (yt ) Var                                                                               = β0 +       xt xt0             xt u t .                      (4.19)
                                                        
                                          Var     c ŷt
                                                                                                                                             T              T
                                                     2                                                                                           t=1                  t=1
                                          d yt , ŷt
                                        = Corr                                             (4.18)
                                                                                                         It is possible to show unbiasedness of the LS estimator, even if xt stochastic and u t is
which shows that R 2 is the square of correlation coefficient of the actual and fitted value.        autocorrelated and heteroskedastic—provided E(u t |xt−s ) = 0 for all s. Let E u t | {xt }t=1
                                                                                                                                                                                               T
                                                                                                                                                                                                   
                                                             d ŷt , û t = 0. From (4.14) this
Note that this interpretation of R 2 relies on the fact that Cov
                                                                         
                                                                                                     denote the expectation of u t conditional on all values of xt−s . Using iterated expectations
implies that the sample variance of the fitted variables is smaller than the sample variance         on (4.19) then gives
of yt . From (4.15) we see that this implies that 0 ≤ R 2 ≤ 1.                                                                                       !−1                             
                                                                                                                                             T                T
    To get a bit more intuition for what R 2 represents, suppose the estimated coefficients                                               1 X             1 X
                                                                                                                    Eβ̂ L S = β0 + Ex              0                            T
                                                                                                                                                                                    
                                                                                             2                                                 xt xt            xt E u t | {xt }t=1       (4.20)
equal the true coefficients, so ŷt = xt0 β0 . In this case, R 2 = Corr xt0 β0 + u t , xt0 β0 ,                                           T
                                                                                                                                                 t=1
                                                                                                                                                          T
                                                                                                                                                                      t=1
that is, the squared correlation of yt with the systematic part of yt . Clearly, if the model                              = β0 ,                                                                 (4.21)
is perfect so u t = 0, then R 2 = 1. On contrast, when there is no movements in the
systematic part (β0 = 0), then R 2 = 0.                                                              since E(u t |xt−s ) = 0 for all s. This is, for instance, the case when the regressors are
                                                                                                     deterministic. Notice that E( u t | xt ) = 0 is not enough for unbiasedness since (4.19)
Remark 3 In a simple regression where yt = a + bxt + u t , where xt is a scalar, R 2 =                                                                            PT
                                                                                                     contains terms involving xt−s xt u t from the product of ( T1 t=1 xt xt0 )−1 and xt u t .
d (yt , xt )2 . To see this, note that, in this case (4.18) can be written
Corr
                                        2                                                          Example 5 (AR(1).) Consider estimating α in yt = αyt−1 + u t . The LS estimator is
                             d yt , b̂xt
                            Cov                   d (yt , xt )2
                                              b̂2 Cov
                      R2 =              =                      ,                                                                           T
                                                                                                                                                        !−1       T
                           c (yt ) Var      b̂ Var (yt ) Var
                                              2          c (xt )                                                                         1X 2       1X
                           Var     c b̂xt                                                                                     α̂ L S =
                                                c
                                                                                                                                           yt−1           yt−1 yt
                                                                                                                                         T          T
                                                                                                                                         t=1          t=1
so the b̂2 terms cancel.                                                                                                                     T
                                                                                                                                                    !−1     T
                                                                                                                                           1X 2         1X
                                                                                                                                     =α+       yt−1            yt−1 u t .
Remark 4 Now, consider the reverse regression xt = c + dyt + vt . The LS estimator                                                         T            T
                                                                                                                                                  t=1                  t=1
                         d (yt , xt ) /Var
of the slope is d̂ L S = Cov                                             d (yt , xt ) /Var
                                           c (yt ). Recall that b̂ L S = Cov           c (xt ). We
                                                                                                     In this case, the assumption E(u t |xt−s ) = 0 for all s (that is, s = ..., −1, 0, 1, ...) is false,
therefore have
                                               d (yt , xt )2                                         since xt+1 = yt and u t and yt are correlated. We can therefore not use this way of proving
                                              Cov
                             b̂ L S d̂ L S =                   = R2.                                 that α̂ L S is unbiased. In fact, it is not, and it can be shown that α̂ L S is downward-biased
                                             Var (yt ) Var
                                             c         c (xt )

                                                                                               48                                                                                                     49
                                                                                                         √
if α > 0, and that this bias gets quite severe as α gets close to unity.                        (kxk = x 0 x, the Euclidean distance of x from zero.) We write this plim β̂T = β0 or
                                                                                                just plim β̂ = β0 , or perhaps β̂ → p β0 . (For an estimator of a covariance matrix, the
    The finite sample distribution of the LS estimator is typically unknown.
                                                                                                most convenient is to stack the unique elements in a vector and then apply the definition
    Even in the most restrictive case where u t is iid N 0, σ 2 and E(u t |xt−s ) = 0 for all
                                                                 
                                                                                                above.)
s, we can only get that
                                                                 !−1                           Remark 7 (Slutsky’s theorem.) If g (.) is a continuous function, then plim g (z T ) =
                                           
                                                        T
                                                   2 1
                                                       X
                      β̂ L S | {xt }t=1 ∼ N β0 , σ
                                    T                         0
                                                           xt xt     .               (4.22)    g (plim z T ). In contrast, note that Eg (z T ) is generally not equal to g (Ez T ), unless g (.)
                                                     T
                                                         t=1
                                                                                                is a linear function.
This says that the estimator, conditional on the sample of regressors, is normally dis-
                                                                                                Remark 8 (Probability limit of product.) Let x T and yT be two functions of a sample of
tributed. With deterministic xt , this clearly means that β̂ L S is normally distributed in a
                                                                                                length T . If plim x T = a and plim yT = b, then plim x T yT = ab.
small sample. The intuition is that the LS estimator with deterministic regressors is just
a linear combination of the normally distributed yt , so it must be normally distributed.           Assume
                                                                                          T                                        T
However, if xt is stochastic, then we have to take into account the distribution of {xt }t=1                                   1X
                                                                                                                        plim      xt xt0 = 6x x < ∞, and 6x x invertible.                                (4.23)
to find the unconditional distribution of β̂ L S . The principle is that                                                       T
                                                                                                                                  t=1
                   Z ∞                             Z ∞
                                                                                                The plim carries over to the inverse by Slutsky’s theorem.1 Use the facts above to write
                                                                  
              pdf β̂ =          pdf β̂, x d x =           pdf β̂ |x pdf (x) d x,
                            −∞                      −∞                                          the probability limit of (4.19) as
so the distribution in (4.22) must be multiplied with the probability density function of                                                                              T
                                                                                                                                                                   1X
     T
{xt }t=1                               T
         and then integrated over {xt }t=1 to give the unconditional distribution (marginal)                                   plim β̂ L S = β0 + 6x−1
                                                                                                                                                     x plim           xt u t .                           (4.24)
                                                                                                                                                                   T
of β̂ L S . This is typically not a normal distribution.                                                                                                              t=1

    Another way to see the same problem is to note that β̂ L S in (4.19) is a product of two        To prove consistency of β̂ L S we therefore have to show that
random variables, (6t=1   T x x 0 /T )−1 and 6 T x u /T . Even if u happened to be normally
                                t t            t=1 t t             t
                                                                                                                                        T
distributed, there is no particular reason why xt u t should be, and certainly no strong                                          1X
                                                                                                                           plim      xt u t = Ext u t = Cov(xt , u t ) = 0.                              (4.25)
reason for why (6t=1   T x x 0 /T )−1 6 T x u /T should be.
                            t t        t=1 t t
                                                                                                                                  T
                                                                                                                                       t=1

                                                                                                This is fairly easy to establish in special cases, for instance, when wt = xt u t is iid or
4.4    Consistency of LS                                                                        when there is either heteroskedasticity or serial correlation. The case with both serial
                                                                                                correlation and heteroskedasticity is just a bit more complicated. In other cases, it is clear
Reference: Greene (2000) 9.3-5 and 11.2; Hamilton (1994) 8.2; Davidson (2000) 3
                                                                                                that the covariance the residuals and the regressors are not all zero—for instance when
   We now study if the LS estimator is consistent.
                                                                                                some of the regressors are measured with error or when some of them are endogenous
Remark 6 Suppose the true parameter value is β0 . The estimator β̂T (which, of course,          variables.
depends on the sample size T ) is said to be consistent if for every ε > 0 and δ > 0 there         1 This puts non-trivial restrictions on the data generating processes. For instance, if x include lagged
                                                                                                                                                                                                t
exists N such that for T ≥ N                                                                    values of yt , then we typically require yt to be stationary and ergodic, and that u t is independent of xt−s for
                                                                                                s ≥ 0.
                                                   
                               Pr β̂T − β0 > δ < ε.

                                                                                          50                                                                                                                 51
    An example of a case where LS is not consistent is when the errors are autocorrelated         The last matrix in the covariance matrix does not need to be transposed since it is sym-
and the regressors include lags of the dependent variable. For instance, suppose the error        metric (since 6x x is). This general expression is valid for both autocorrelated and het-
is a MA(1) process                                                                                eroskedastic residuals—all such features are loaded into the S0 matrix. Note that S0 is
                                                                                                                                      √
                                     u t = εt + θ1 εt−1 ,                          (4.26)         the variance-covariance matrix of T times a sample average (of the vector of random
                                                                                                  variables xt u t ), which can be complicated to specify and to estimate. In simple cases,
where εt is white noise and that the regression equation is an AR(1)
                                                                                                  we can derive what it is. To do so, we typically need to understand the properties of the
                                      yt = ρyt−1 + u t .                                 (4.27)   residuals. Are they autocorrelated and/or heteroskedastic? In other cases we will have to
                                                                                                  use some kind of “non-parametric” approach to estimate it.
This is an ARMA(1,1) model and it is clear that the regressor and error in (4.27) are                 A common approach is to estimate 6x x by 6t=1    T x x 0 /T and use the Newey-West
                                                                                                                                                           t t
correlated, so LS is not a consistent estimator of an ARMA(1,1) model.                            estimator of S0 .

4.5    Asymptotic Normality of LS                                                                 4.5.1   Special Case: Classical LS assumptions

Reference: Greene (2000) 9.3-5 and 11.2; Hamilton (1994) 8.2; Davidson (2000) 3                   Reference: Greene (2000) 9.4 or Hamilton (1994) 8.2.
                                                                                                       We can recover the classical expression for the covariance, σ 2 6x−1 x , if we assume that
Remark 9 (Continuous mapping theorem.) Let the sequences of random matrices {x T }                the regressors are stochastic, but require that xt is independent of all u t+s and that u t is
                                                                  d        p
and {yT }, and the non-random matrix {aT } be such that x T → x, yT → y, and aT → a               iid. It rules out, for instance, that u t and xt−2 are correlated and also that the variance of
                                                                                              d
(a traditional limit). Let g(x T , yT , aT ) be a continuous function. Then g(x T , yT , aT ) →   u t depends on xt . Expand the expression for S0 as Expand the expression for S0 as
g(x, y, a). Either of yT and aT could be irrelevant in g.                                                               √ T             ! √ T             !
                                                                                                                           T X               T X        0
                                                     d                                                        S0 = E             xt u t            u t xt                                  (4.30)
Remark 10 From the previous remark: if x T → x (a random variable) and plim Q T =                                        T                  T
                                    d                                                                                       t=1                t=1
Q (a constant matrix), then Q T x T → Qx.                                                                       1
                                                                                                               = E (... + xs−1 u s−1 + xs u s + ...) ... + u s−1 xs−1
                                                                                                                                                                  0
                                                                                                                                                                      + u s xs0 + ... .
                                                                                                                                                                                     
                           √                                                                                    T
   Premultiply (4.19) by       T and rearrange as
                                                                                                  Note that
                                             T
                                                              !−1 √     T
                    √                     1X                        T X
                     T β̂ L S − β0 =                 xt xt0                   xt u t .   (4.28)               Ext−s u t−s u t xt0 = Ext−s xt0 Eu t−s u t (since u t and xt−s independent)
                                           T                      T                                                                 (
                                               t=1                      t=1
                                                                                                                                      0 if s 6 = 0 (since Eu t−s u t = 0 by iid u t )
                                                                                                                                  =                                                         (4.31)
If the first term on the right hand side converges in probability to a finite matrix (as as-                                          Ext xt0 Eu t u t else.
sumed in (4.23)), and the vector of random variables xt u t satisfies a central limit theorem,
                                                                                                  This means that all cross terms (involving different observations) drop out and that we
then
                         √                    d
                                                                
                           T (β̂ L S − β0 ) → N 0, 6x−1 x S0 6x x , where
                                                              −1
                                                                                         (4.29)
                                  T                        √     T
                                                                         !
                             1X                              T X
                    6x x =           xt xt0 and S0 = Cov           xt u t .
                            T                               T
                                t=1                                   t=1


                                                                                            52                                                                                                 53
can write                                                                                    where ω2 is a scalar. This is very similar to the classical LS case, except that ω2 is
                             T                                                               the average variance of the residual rather than the constant variance. In practice, the
                          1X
                   S0 =      Ext xt0 Eu 2t                                         (4.32)    estimator of ω2 is the same as the estimator of σ 2 , so we can actually apply the standard
                          T
                             t=1                                                             LS formulas in this case.
                                     T
                          1 X                                                                    This is the motivation for why White’s test for heteroskedasticity makes sense: if the
                      = σ2 E  xt xt0 (since u t is iid and σ 2 = Eu 2t )           (4.33)
                          T                                                                  heteroskedasticity is not correlated with the regressors, then the standard LS formula is
                                   t=1

                      = σ 2 6x x .                                                 (4.34)    correct (provided there is no autocorrelation).

Using this in (4.29) gives
                                                                                             4.6   Inference
                    √
     Asymptotic Cov[ T (β̂ L S − β0 )] = 6x−1
                                            x S0 6x x = 6x x σ 6x x 6x x = σ 6x x .
                                                  −1     −1 2        −1     2 −1
                                                                                             Consider some estimator, β̂k×1 , with an asymptotic normal distribution
                                                                                                                            √                    d
4.5.2 Special Case: White’s Heteroskedasticity                                                                                  T (β̂ − β0 ) → N (0, V ) .                       (4.36)
Reference: Greene (2000) 12.2 and Davidson and MacKinnon (1993) 16.2.
                                                                                             Suppose we want to test the null hypothesis that the s linear restrictions Rβ0 = r hold,
    This section shows that the classical LS formula for the covariance matrix is valid
                                                                                             where R is an s × k matrix and r is an s × 1 vector. If the null hypothesis is true, then
even if the errors are heteroskedastic—provided the heteroskedasticity is independent of
                                                                                                                          √                  d
the regressors.                                                                                                               T (R β̂ − r ) → N (0, RV R 0 ),                    (4.37)
    The only difference compared with the classical LS assumptions is that u t is now
allowed to be heteroskedastic, but this heteroskedasticity is not allowed to depend on the   since the s linear combinations are linear combinations of random variables with an
moments of xt . This means that (4.32) holds, but (4.33) does not since Eu 2t is not the     asymptotic normal distribution as in (4.37).
same for all t.
                                                                                             Remark 11 If the n × 1 vector x ∼ N (0, 6), then x 0 6 −1 x ∼ χn2 .
    However, we can still simplify (4.32) a bit more. We assumed that Ext xt0 and Eu 2t
(which can both be time varying) are not related to each other, so we could perhaps mul-     Remark 12 From the previous remark and Remark (9), it follows that if the n × 1 vector
tiply Ext xt0 by 6t=1
                  T Eu 2 /T instead of by Eu 2 . This is indeed true asymptotically—where
                        t                     t
                                                                                               d                           d
                                                                                             x → N (0, 6), then x 0 6 −1 x → χn2 .
any possible “small sample” relation between Ext xt0 and Eu 2t must wash out due to the
assumptions of independence (which are about population moments).                                From this remark, it follows that if the null hypothesis, Rβ0 = r , is true, then Wald
    In large samples we therefore have                                                       test statistics converges in distribution to a χs2 variable

                                       T
                                                !      T
                                                                   !                                                                         −1                 d
                                   1X 2            1X            0                                                   T (R β̂ − r )0 RV R 0           (R β̂ − r ) → χs2 .         (4.38)
                            S0 =          Eu t             Ext xt
                                   T               T
                                      t=1             t=1
                                                                                             Values of the test statistics above the x% critical value of the χs2 distribution mean that
                                       T                 T
                                                !                  !
                                   1X 2              1X                                      we reject the null hypothesis at the x% significance level.
                               =          Eu t    E         xt xt0
                                   T                 T
                                         t=1          t=1

                                 = ω2 6x x ,                                       (4.35)

                                                                                       54                                                                                            55
                                                      √
   When there is only one restriction (s = 1), then T (R β̂ − r ) is a scalar, so the test      There are therefore few compelling theoretical reasons for why we should use F tests.2
can equally well be based on the fact that                                                      This section demonstrates that point.
                               √
                                  T (R β̂ − r ) d                                               Remark 15 If Y1 ∼ χn21 , Y2 ∼ χn22 , and if Y1 and Y2 are independent, then Z =
                                                → N (0, 1).
                                    RV R 0                                                                                                             d
                                                                                                (Y1 /n 1 )/(Y1 /n 1 ) ∼ Fn 1 ,n 2 . As n 2 → ∞, n 1 Z → χn21 (essentially because the denomina-
In this case, we should reject the null hypothesis if the test statistics is either very low    tor in Z is then equal to its expected value).
(negative) or very high (positive). In particular, let 8() be the standard normal cumulative
distribution function. We then reject the null hypothesis at the x% significance level if the       To use the F test to test s linear restrictions Rβ0 = r , we need to assume that the small
                                                                                                                                                    √
test statistics is below x L such that 8(x L ) = (x/2)% or above x H such that 8(x H ) =        sample distribution of the estimator is normal, T (β̂ − β0 ) ∼ N (0, σ 2 W ), where σ 2 is
1 − (x/2)% (that is with (x/2)% of the probability mass in each tail).                          a scalar and W a known matrix. This would follow from an assumption that the residuals
                                                                                                are normally distributed and that we either consider the distribution conditional on the
Example 13 (T R 2 /(1 − R 2 ) as a test of the regression.) Recall from (4.15)-(4.16) that      regressors or that the regressors are deterministic. In this case W = 6x−1  x.
      c ŷt /Var
R 2 = Var    c (yt ) = 1 − Var c û t /Var
                                         c (yt ), where ŷt and û t are the fitted value and
                                     
                                                                                                    Consider the test statistics
residual respectively. We therefore get                                                                                                                −1
                                                                                                                        F = T (R β̂ − r )0 R σ̂ 2 W R 0     (R β̂ − r )/s.
                          T R 2 /(1 − R 2 ) = T Var
                                                c ŷt /Var
                                                       c û t .
                                                            

                                                                                                This is similar to (4.38), expect that we use the estimated covariance matrix σ̂ 2 W instead
To simplify the algebra, assume that both yt and xt are demeaned and that no intercept is       of the true σ 2 W (recall, W is assumed to be known) and that we have divided by the
used. (We get the same results, but after more work, if we relax this assumption.) In this      number of restrictions, s. Multiply and divide this expressions by σ 2
case, ŷt = xt0 β̂, so we can rewrite the previous eqiuation as
                                                                                                                                                           −1
                                                                                                                             T (R β̂ − r )0 Rσ 2 W R 0           (R β̂ − r )/s
                          T R 2 /(1 − R 2 ) = T β̂ 0 6x x β̂ 0 /Var
                                                                c û t .
                                                                                                                         F=                                                     .
                                                                                                                                              σ̂ 2 /σ 2

This is identical to (4.38) when R = Ik and r = 0k×1 and the classical LS assumptions           The numerator is an χs2 variable divided by its degrees of freedom, s. The denominator
are fulfilled (so V = Var û t 6x−1    x ). The T R /(1 − R ) is therefore a χk distributed
                                                     2         2              2                 can be written σ̂ 2 /σ 2 = 6(û t /σ )2 /T , where û t are the fitted residuals. Since we just
                                   

statistics for testing if all the slope coefficients are zero.                                  assumed that u t are iid N (0, σ 2 ), the denominator is an χT2 variable divided by its degrees
                                                                                                of freedom, T . It can also be shown that the numerator and denominator are independent
Example 14 (F version of the test.) There is also an Fk,T −k version of the test in the         (essentially because the fitted residuals are orthogonal to the regressors), so F is an Fs,T
previous example: [R 2 /k]/[(1 − R 2 )/(T − k)]. Note that k times an Fk,T −k variable          variable.
converges to a χk2 variable as T − k → ∞. This means that the χk2 form in the previous              We need indeed very strong assumptions to justify the F distributions. Moreover, as
example can be seen as an asymptotic version of the (more common) F form.                                      d
                                                                                                T → ∞, s F → χn2 which is the Wald test—which do not need all these assumptions.
                                                                                                   2 However, some simulation evidence suggests that F tests may have better small sample properties than
4.6.1 On F Tests∗                                                                               chi-square test.

F tests are sometimes used instead of chi–square tests. However, F tests rely on very spe-
cial assumptions and typically converge to chi–square tests as the sample size increases.


                                                                                          56                                                                                                          57
4.7    Diagnostic Tests of Autocorrelation, Heteroskedasticity, and Normality∗                    course), then for any i and j different from zero
                                                                                                                              "       #         " # "      #!
Reference: Greene (2000) 12.3, 13.5 and 9.7; Johnston and DiNardo (1997) 6; and Pindyck                                   √      ρ̂i               0   1 0
                                                                                                                            T           →d N         ,        .                            (4.40)
and Rubinfeld (1997) 6, Patterson (2000) 5                                                                                       ρ̂ j              0   0 1
    LS and IV are still consistent even if the residuals are autocorrelated, heteroskedastic,
                                                                                                  This result can be used to construct tests for both single autocorrelations (t-test or χ 2 test)
and/or non-normal, but the traditional expression for the variance of the parameter esti-
                                                                                                  and several autocorrelations at once (χ 2 test).
mators is invalid. It is therefore important to investigate the properties of the residuals.
    We would like to test the properties of the true residuals, u t , but these are unobserv-     Example 16 (t-test) We want to test the hypothesis that ρ1 = 0. Since the N (0, 1) dis-
able. We can instead use residuals from a consistent estimator as approximations, since           tribution has 5% of the probability mass below -1.65 and another 5% above 1.65, we
                                                                                                                                                    √
the approximation error then goes to zero as the sample size increases. The residuals from        can reject the null hypothesis at the 10% level if T |ρ̂1 | > 1.65. With T = 100, we
                                                                                                                               √
an estimator are                                                                                  therefore need |ρ̂1 | > 1.65/ 100 = 0.165 for rejection, and with T = 1000 we need
                                                                                                                √
                                                                                                  |ρ̂1 | > 1.65/ 1000 ≈ 0.0.53.
                                  û t = yt − xt0 β̂
                                                                                                                                                                                         √
                                                                                                      The Box-Pierce test follows directly from the result in (4.40), since it shows that T ρ̂i
                                                    
                                       = xt0 β0 − β̂ + u t .                            (4.39)        √
                                                                                                  and T ρ̂ j are iid N(0,1) variables. Therefore, the sum of the square of them is distributed
If plim β̂ = β0 , then û t converges in probability to the true residual (“pointwise consis-     as an χ 2 variable. The test statistics typically used is
tency”). It therefore makes sense to use û t to study the (approximate) properties of u t . We                                               L
                                                                                                                                              X
want to understand if u t are autocorrelated and/or heteroskedastic, since this affects the                                         QL = T          ρ̂s2 →d χ L2 .                         (4.41)
covariance matrix of the least squares estimator and also to what extent least squares is                                                     s=1

efficient. We might also be interested in studying if the residuals are normally distributed,     Example 17 (Box-Pierce) Let ρ̂1 = 0.165, and T = 100, so Q 1 = 100 × 0.1652 =
since this also affects the efficiency of least squares (remember that LS is MLE is the           2.72. The 10% critical value of the χ12 distribution is 2.71, so the null hypothesis of no
residuals are normally distributed).                                                              autocorrelation is rejected.
    It is important that the fitted residuals used in the diagnostic tests are consistent. With
poorly estimated residuals, we can easily find autocorrelation, heteroskedasticity, or non-           The choice of lag order in (4.41), L, should be guided by theoretical considerations,
normality even if the true residuals have none of these features.                                 but it may also be wise to try different values. There is clearly a trade off: too few lags may
                                                                                                  miss a significant high-order autocorrelation, but too many lags can destroy the power of
4.7.1 Autocorrelation                                                                             the test (as the test statistics is not affected much by increasing L, but the critical values
                                                                                                  increase).
Let ρ̂s be the estimate of the sth autocorrelation coefficient of some variable, for instance,
the fitted residuals. The sampling properties of ρ̂s are complicated, but there are several       Example 18 (Residuals follow an AR(1)process) If u t = 0.9u t−1 + εt , then the true
useful large sample results for Gaussian processes (these results typically carry over to         autocorrelation coefficients are ρ j = 0.9 j .
processes which are similar to the Gaussian—a homoskedastic process with finite 6th
moment is typically enough). When the true autocorrelations are all zero (not ρ0 , of                A common test of the serial correlation of residuals from a regression is the Durbin-
                                                                                                  Watson test
                                                                                                                                     d = 2 1 − ρ̂1 ,
                                                                                                                                                    
                                                                                                                                                                                    (4.42)

                                                                                            58                                                                                                 59
where the null hypothesis of no autocorrelation is                                                    White’s test for heteroskedasticity tests the null hypothesis of homoskedasticity against
                                                                                                  the kind of heteroskedasticity which can be explained by the levels, squares, and cross
                not rejected if d > dupper
                                     ∗
                                                                                                  products of the regressors. Let wt be the unique elements in xt ⊗ xt , where we have added
                rejected if d < dlower (in favor of positive autocorrelation)
                                  ∗
                                                                                                  a constant to xt if there was not one from the start. Run a regression of the squared fitted
                else inconclusive
                                                                                                  LS residuals on wt
where the upper and lower critical values can be found in tables. (Use 4 − d to let nega-                                                û 2t = wt0 γ + εt                              (4.43)
tive autocorrelation be the alternative hypothesis.) This test is typically not useful when       and test if all elements (except the constant) in γ are zero (with a χ 2 or F test). The
lagged dependent variables enter the right hand side (d is biased towards showing no              reason for this specification is that if u 2t is uncorrelated with xt ⊗ xt , then the usual LS
autocorrelation). Note that DW tests only for first-order autocorrelation.                        covariance matrix applies.
                                                                                                      Breusch-Pagan’s test is very similar, except that the vector wt in (4.43) can be any
Example 19 (Durbin-Watson.) With ρ̂1 = 0.2 we get d = 1.6. For large samples, the 5%
                                                                                                  vector which is thought of as useful for explaining the heteroskedasticity. The null hy-
                   ∗
critical value is dlower ≈ 1.6, so ρ̂1 > 0.2 is typically considered as evidence of positive
                                                                                                  pothesis is that the variance is constant, which is tested against the alternative that the
autocorrelation.
                                                                                                  variance is some function of wt .
     The fitted residuals used in the autocorrelation tests must be consistent in order to in-        The fitted residuals used in the heteroskedasticity tests must be consistent in order to
terpret the result in terms of the properties of the true residuals. For instance, an excluded    interpret the result in terms of the properties of the true residuals. For instance, if some
autocorrelated variable will probably give autocorrelated fitted residuals—and also make          of the of elements in wt belong to the regression equation, but are excluded, then fitted
the coefficient estimator inconsistent (unless the excluded variable is uncorrelated with         residuals will probably fail these tests.
the regressors). Only when we know that the model is correctly specified can we interpret
a finding of autocorrelated residuals as an indication of the properties of the true residuals.   4.7.3   Normality

                                                                                                  We often make the assumption of normally distributed errors, for instance, in maximum
4.7.2 Heteroskedasticity                                                                          likelihood estimation. This assumption can be tested by using the fitted errors. This works
Remark 20 (Kronecker product.) If A and B are matrices, then                                      since moments estimated from the fitted errors are consistent estimators of the moments
                                                                                                of the true errors. Define the degree of skewness and excess kurtosis for a variable z t
                                    a11 B · · · a1n B                                             (could be the fitted residuals) as
                                  .              .. 
                                      .
                       A⊗B =     .               .  .                                                                                   T
                                    am1 B · · · amn B                                                                                   1X
                                                                                                                                θ̂3 =      (z t − z̄)3 /σ̂ 3 ,                           (4.44)
                                                                                                                                        T
                                                                                                                                            t=1
Example 21 Let x1 and x2 be scalars. Then                                                                                                    T
                                                                                                                                        1   X
                                         "#                                                                                 θ̂4 =             (z t − z̄)4 /σ̂ 4 − 3,                 (4.45)
                                                                                                                                        T
                   "    # "    #  x1 x1   x1 x1                                                                                         t=1
                     x1     x1   
                                      " x2 #  =  x1 x2  .
                                                       
                         ⊗      =                                                                where z̄ is the sample mean and σ̂ 2 is the estimated variance.
                     x2     x2         x1   x2 x1 
                                                
                                   x2
                                                        
                                        x2         x2 x2
                                                                                                  Remark 22 (χ 2 (n) distribution.) If xi are independent N(0, σi2 ) variables, then 6i=1
                                                                                                                                                                                      n
                                                                                                                                                                                          xi2 /σi2 ∼


                                                                                            60                                                                                               61
                   Histogram of 100 draws from a U(0,1) distribution                             Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.
             0.2
                              θ3 = −0.14, θ4 = −1.4, W = 8                                       Hayashi, F., 2000, Econometrics, Princeton University Press.

           0.15                                                                                  Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th
                                                                                                   edn.

             0.1                                                                                 Patterson, K., 2000, An Introduction to Applied Econometrics: A Time Series Approach,
                                                                                                   MacMillan Press, London.
           0.05                                                                                  Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,
                                                                                                   Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.
               0
                 0        0.2        0.4       0.6        0.8          1                         Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
Figure 4.1: This figure shows a histogram from 100 draws of iid uniformly [0,1] dis-
tributed variables.

χ 2 (n).

    In a normal distribution, the true values are zero and the test statistics θ̂3 and θ̂4 are
themselves normally distributed with zero covariance and variances 6/T and 24/T , re-
spectively (straightforward, but tedious, to show). Therefore, under the null hypothesis
of a normal distribution, T θ̂32 /6 and T θ̂42 /24 are independent and both asymptotically
distributed as χ 2 (1), so the sum is asymptotically a χ 2 (2) variable
                                                    
                             W = T θ̂32 /6 + θ̂42 /24 →d χ 2 (2).                      (4.46)

This is the Jarque and Bera test of normality.


Bibliography
Davidson, J., 2000, Econometric Theory, Blackwell Publishers, Oxford.

Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,
  Oxford University Press, Oxford.

Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
  Jersey, 4th edn.

                                                                                           62                                                                                          63
                                                                                                     Suppose the true model is
                                                                                                                                        yt∗ = xt∗0 β0 + u ∗t .                             (5.5)

                                                                                                  Data on yt∗ and xt∗ is not directly observable, so we instead run the regression
5     Instrumental Variable Method
                                                                                                                                          yt = xt0 β + u t ,                               (5.6)
Reference: Greene (2000) 9.5 and 16.1-2
Additional references: Hayashi (2000) 3.1-4; Verbeek (2000) 5.1-4; Hamilton (1994) 8.2;           where yt and xt are proxies for the correct variables (the ones that the model is true for).
and Pindyck and Rubinfeld (1997) 7                                                                We can think of the difference as measurement errors
                                                                                                                                                       y
                                                                                                                                        yt = yt∗ + vt and                                  (5.7)
5.1    Consistency of Least Squares or Not?
                                                                                                                                        xt = xt∗ + vtx ,                                   (5.8)
Consider the linear model
                                       yt = xt0 β0 + u t ,                               (5.1)    where the errors are uncorrelated with the true values and the “true” residual u ∗t .
                                                                                                     Use (5.7) and (5.8) in (5.5)
where yt and u t are scalars, xt a k×1 vector, and β0 is a k×1 vector of the true coefficients.
                                                                                                                           y           0
The least squares estimator is                                                                                       yt − vt = xt − vtx β0 + u ∗t or
                                                                                                                                                                      y
                                       T
                                               !−1       T
                                                                                                                           yt = xt0 β0 + εt where εt = −vtx0 β0 + vt + u ∗t .              (5.9)
                                   1X              1X
                         β̂ L S =     xt xt0             xt yt                           (5.2)
                                   T
                                      t=1
                                                  T
                                                     t=1
                                                                                                      Suppose that xt∗ is a measured with error. From (5.8) we see that vtx and xt are corre-
                                           T
                                                    !−1     T                                     lated, so LS on (5.9) is inconsistent in this case. To make things even worse, measurement
                                         1X             1X
                                = β0 +       xt xt0            xt u t ,                  (5.3)    errors in only one of the variables typically affect all the coefficient estimates.
                                         T              T
                                            t=1               t=1                                     To illustrate the effect of the error, consider the case when xt is a scalar. Then, the
where we have used (5.1) to substitute for yt . The probability limit is                          probability limit of the LS estimator of β in (5.9) is
                                                        !−1
                                         1X
                                                  T
                                                                     1X
                                                                        T                                       plim β̂ L S = Cov (yt , xt ) /Var (xt )
                 plim β̂ L S − β0 = plim    xt xt0            plim      xt u t .         (5.4)
                                                                                                                            = Cov xt∗ β0 + u ∗t , xt /Var (xt )
                                                                                                                                                    
                                         T                           T
                                               t=1                     t=1
                                                                                                                            = Cov xt β0 − vtx β0 + u ∗t , xt /Var (xt )
                                                                                                                                                             
In many cases the law of large numbers applies to both terms on the right hand side. The
                                                                                                                              Cov (xt β0 , xt ) + Cov −vtx β0 , xt + Cov u ∗t , xt
                                                                                                                                                                                  
first term is typically a matrix with finite elements and the second term is the covariance of                              =
                                                                                                                                                       Var (xt )
the regressors and the true residuals. This covariance must be zero for LS to be consistent.
                                                                                                                              Var (xt )        Cov −vtx β0 , xt∗ − vtx
                                                                                                                                                                       
                                                                                                                            =           β0 +
                                                                                                                              Var (xt )                 Var (xt )
5.2    Reason 1 for IV: Measurement Errors                                                                                  = β0 − β0 Var vtx /Var (xt )
                                                                                                                                                
                                                                                                                                 "                               #
                                                                                                                                               Var vtx
                                                                                                                                                        
Reference: Greene (2000) 9.5.                                                                                               = β0 1 −                               .                      (5.10)
                                                                                                                                        Var xt∗ + Var vtx
                                                                                                                                                              



                                                                                            64                                                                                               65
since xt∗ and vtx are uncorrelated with u ∗t and with each other. This shows that β̂ L S goes   Then, rewrite (5.14) as
to zero as the measurement error becomes relatively more volatile compared with the true
value. This makes a lot of sense, since when the measurement error is very large then the                                 y jt = −G j1 z̃ t − F j1 ỹt + u jt
                                                                                                                                = xt0 β + u jt , where xt0 = z̃ t0 , ỹt0 ,
                                                                                                                                                                        
regressor xt is dominated by noise that has nothing to do with the dependent variable.                                                                                               (5.15)
    Suppose instead that only yt∗ is measured with error. This not a big problem since this
                                                                                                where z̃ t and ỹt are the exogenous and endogenous variables that enter the jth equation,
measurement error is uncorrelated with the regressor, so the consistency of least squares
                                                                                                which we collect in the xt vector to highlight that (5.15) looks like any other linear re-
is not affected. In fact, a measurement error in the dependent variable is like increasing
                                                                                                gression equation. The problem with (5.15), however, is that the residual is likely to be
the variance in the residual.
                                                                                                correlated with the regressors, so the LS estimator is inconsistent. The reason is that a
                                                                                                shock to u jt influences y jt , which in turn will affect some other endogenous variables in
5.3    Reason 2 for IV: Simultaneous Equations Bias (and Inconsis-                              the system (5.11). If any of these endogenous variable are in xt in (5.15), then there is a
       tency)                                                                                   correlation between the residual and (some of) the regressors.
                                                                                                    Note that the concept of endogeneity discussed here only refers to contemporaneous
Suppose economic theory tells you that the structural form of the m endogenous variables,       endogeneity as captured by off-diagonal elements in F in (5.11). The vector of predeter-
yt , and the k predetermined (exogenous) variables, z t , is                                    mined variables, z t , could very well include lags of yt without affecting the econometric
                                                                                                endogeneity problem.
         F yt + Gz t = u t , where u t is iid with Eu t = 0 and Cov (u t ) = 6,       (5.11)
                                                                                                Example 1 (Supply and Demand. Reference: GR 16, Hamilton 9.1.) Consider the sim-
where F is m × m, and G is m × k. The disturbances are assumed to be uncorrelated with
                                                                                                plest simultaneous equations model for supply and demand on a market. Supply is
the predetermined variables, E(z t u 0t ) = 0.
    Suppose F is invertible. Solve for yt to get the reduced form                                                                    qt = γ pt + u st , γ > 0,

                            yt = −F −1 Gz t + F −1 u t                                (5.12)    and demand is
                               = 5z t + εt , with Cov (εt ) = .                      (5.13)                                    qt = βpt + α At + u dt , β < 0,

The reduced form coefficients, 5, can be consistently estimated by LS on each equation          where At is an observable demand shock (perhaps income). The structural form is there-
since the exogenous variables z t are uncorrelated with the reduced form residuals (which       fore                "        #"      # "        #      "       #
are linear combinations of the structural residuals). The fitted residuals can then be used                           1 −γ        qt        0             u st
                                                                                                                                       +          At =           .
to get an estimate of the reduced form covariance matrix.                                                             1 −β        pt        −α            u dt
    The jth line of the structural form (5.11) can be written                                   The reduced form is         "        #       "         #          "         #
                                                                                                                                qt               π11                  ε1t
                                                                                                                                         =                 At +                 .
                                    F j yt + G j z t = u jt ,                         (5.14)                                    pt               π21                  ε2t
                                                                                                If we knew the structural form, then we can solve for qt and pt to get the reduced form in
where F j and G j are the jth rows of F and G, respectively. Suppose the model is normal-
ized so that the coefficient on y jt is one (otherwise, divide (5.14) with this coefficient).



                                                                                          66                                                                                             67
terms of the structural parameters                                                                   Example 3 (A flat demand curve.) Suppose we change the demand curve in Example 1
                 "    # "        γ
                                     #     " β                   γ
                                                                       #"          #                 to be infinitely elastic, but to still have demand shocks. For instance, the inverse demand
                   qt        − β−γ α                          − β−γ         u st
                         =             At + β−γ                                        .             curve could be pt = ψ At + u tD . In this case, the supply and demand is no longer
                   pt            1
                             − β−γ α         1
                                            β−γ
                                                                 1
                                                              − β−γ         u dt
                                                                                                     a simultaneous system of equations and both equations could be estimated consistently
Example 2 (Supply equation with LS.) Suppose we try to estimate the supply equation in               with LS. In fact, the system is recursive, which is easily seen by writing the system on
Example 1 by LS, that is, we run the regression                                                      vector form            "           #"       # "       #       "       #
                                                                                                                               1 0            pt      −ψ              u tD
                                         q t = θ p t + εt .                                                                                        +         At =            .
                                                                                                                               1 −γ           qt      0               u st

If data is generated by the model in Example 1, then the reduced form shows that pt is               A supply shock, u st , affects the quantity, but this has no affect on the price (the regressor
correlated with u st , so we cannot hope that LS will be consistent. In fact, when both qt           in the supply equation), so there is no correlation between the residual and regressor in
and pt have zero means, then the probability limit of the LS estimator is                            the supply equation. A demand shock, u tD , affects the price and the quantity, but since
                                                                                                     quantity is not a regressor in the inverse demand function (only the exogenous At is) there
                 Cov (qt , pt )
        plim θ̂ =                                                                                    is no correlation between the residual and the regressor in the inverse demand equation
                  Var ( pt )
                                                                                                     either.
                 Cov γγ−β α         γ           β
                                                                                           
                                                             α
                             At + γ −β u dt − γ −β u st , γ −β At + γ −β 1          1
                                                                           u dt − γ −β u dt
               =                                                        
                                       α
                                Var γ −β           1
                                            At + γ −β             1
                                                         u dt − γ −β u st ,                          5.4    Definition of the IV Estimator—Consistency of IV
where the second line follows from the reduced form. Suppose the supply and demand
                                                                                                     Reference: Greene (2000) 9.5; Hamilton (1994) 8.2; and Pindyck and Rubinfeld (1997)
shocks are uncorrelated. In that case we get
                                                                                                     7.
                          γ α2
                                Var (At ) + γ 2 Var u dt + β 2 Var                 u st                 Consider the linear model
                                                                                          
                        (γ −β)2              (γ −β)              (γ −β)
              plim θ̂ =                                                                                                               yt = xt0 β0 + u t ,                          (5.16)
                           α2
                                Var (At ) +     1
                                                     Var u t + 1 2 Var
                                                           d
                                                                                   u st
                                                                                          
                        (γ −β)2              (γ −β)2             (γ −β)
                                                                                                     where yt is a scalar, xt a k × 1 vector, and β0 is a vector of the true coefficients. If
                        γ α 2 Var (At ) + γ Var u dt + βVar u st
                                                                  
                      =                                              .                               we suspect that xt and u t in (5.16) are correlated, then we may use the instrumental
                           α 2 Var (At ) + Var u dt + Var u st
                                                              
                                                                                                     variables (IV) method. To do that, let z t be a k × 1 vector of instruments (as many
First, suppose the supply shocks are zero, Var u st = 0, then plim θ̂ = γ , so we indeed
                                                     
                                                                                                     instruments as regressors; we will later deal with the case when we have more instruments
estimate the supply elasticity, as we wanted. Think of a fixed supply curve, and a demand            than regressors.) If xt and u t are not correlated, then setting xt = z t gives the least squares
curve which moves around. These point of pt and qt should trace out the supply curve. It             (LS) method.
is clearly u st that causes a simultaneous equations problem in estimating the supply curve:              Recall that LS minimizes the variance of the fitted residuals, û t = yt − xt0 β̂ L S . The
u st affects both qt and pt and the latter is the regressor in the supply equation. With no          first order conditions for that optimization problem are
movements in u st there is no correlation between the shock and the regressor. Second, now                                                      T
                                                                                                                                             1X                 
suppose instead that the both demand shocks are zero (both At = 0 and Var u dt = 0).                                                           xt yt − xt0 β̂ L S .
                                                                                    
                                                                                                                                    0kx1 =                                                     (5.17)
                                                                                                                                             T
Then plim θ̂ = β, so the estimated value is not the supply, but the demand elasticity. Not                                                     t=1

good. This time, think of a fixed demand curve, and a supply curve which moves around.

                                                                                                68                                                                                                 69
If xt and u t are correlated, then plim β̂ L S 6 = β0 . The reason is that the probability limit of                Two things are required for consistency of the IV estimator, plim β̂ I V = β0 . First, that
the right hand side of (5.17) is Cov(xt , yt − xt0 β̂ L S ), which at β̂ L S = β0 is non-zero, so the              plim 6z t u t /T = 0. Provided a law of large numbers apply, this is condition (5.18).
first order conditions (in the limit) cannot be satisfied at the true parameter values. Note                       Second, that plim 6z t xt0 /T has full rank. To see this, suppose plim 6z t u t /T = 0 is
that since the LS estimator by construction forces the fitted residuals to be uncorrelated                         satisfied. Then, (5.22) can be written
with the regressors, the properties of the LS residuals are of little help in deciding if to                                                          T
                                                                                                                                                                 !
                                                                                                                                                   1X 0                           
use LS or IV.                                                                                                                                 plim        z t xt   β0 − plim β̂ I V = 0.               (5.23)
                                                                                                                                                   T
     The idea of the IV method is to replace the first xt in (5.17) with a vector (of similar                                                             t=1

size) of some instruments, z t . The identifying assumption of the IV method is that the
                                                                                                                   If plim 6z t xt0 /T has reduced rank, then plim β̂ I V does not need to equal β0 for (5.23) to
instruments are uncorrelated with the residuals (and, as we will see, correlated with the
                                                                                                                   be satisfied. In practical terms, the first order conditions (5.20) do then not define a unique
regressors)
                                                                                                                   value of the vector of estimates. If a law of large numbers applies, then plim 6z t xt0 /T =
                                        0kx1 = Ez t u t                                                   (5.18)   Ez t xt0 . If both z t and xt contain constants (or at least one of them has zero means), then
                                                                                                                   a reduced rank of Ez t xt0 would be a consequence of a reduced rank of the covariance
                                              = Ez t yt − xt0 β0         .
                                                                     
                                                                                                          (5.19)
                                                                                                                   matrix of the stochastic elements in z t and xt , for instance, that some of the instruments
The intuition is that the linear model (5.16) is assumed to be correctly specified: the                            are uncorrelated with all the regressors. This shows that the instruments must indeed be
residuals, u t , represent factors which we cannot explain, so z t should not contain any                          correlated with the regressors for IV to be consistent (and to make sense).
information about u t .
                                                                                                                   Remark 5 (Second moment matrix) Note that Ezx 0 = EzEx 0 + Cov(z, x). If Ez = 0
    The sample analogue to (5.19) defines the IV estimator of β as1
                                                                                                                   and/or Ex = 0, then the second moment matrix is a covariance matrix. Alternatively,
                                               T
                                          1X                                                                     suppose both z and x contain constants normalized to unity: z = [1, z̃ 0 ]0 and x = [1, x̃ 0 ]0
                                 0kx1 =           z t yt − xt0 β̂ I V , or                                (5.20)
                                          T                                                                        where z̃ and x̃ are random vectors. We can then write
                                             t=1
                                                T
                                                            !−1      T
                                                                                                                                                "     #                "                 #
                                            1X 0                1X                                                                          0     1 h            0
                                                                                                                                                                    i      0     0
                                 β̂ I V =            z t xt             z t yt .                          (5.21)                        Ezx =            1 Ex̃ +
                                            T                   T                                                                                 Ez̃                      0 Cov(z̃, x̃)
                                                t=1                 t=1                                                                         "                            #
                                                                                                                                                  1            Ex̃ 0
It is clearly necessay for 6z t xt0 /T to have full rank to calculate the IV estimator.                                                       =                                .
                                                                                                                                                  Ez̃ Ez̃Ex̃ 0 + Cov(z̃, x̃)
Remark 4 (Probability limit of product) For any random variables yT and x T where
                                                                                                                   For simplicity, suppose z̃ and x̃ are scalars. Then Ezx 0 has reduced rank if Cov(z̃, x̃) = 0,
plim yT = a and plim x T = b (a and b are constants), we have plim yT x T = ab.
                                                                                                                   since Cov(z̃, x̃) is then the determinant of Ezx 0 . This is true also when z̃ and x̃ are vectors.
    To see if the IV estimator is consistent, use (5.16) to substitute for yt in (5.20) and
take the probability limit                                                                                         Example 6 (Supply equation with IV.) Suppose we try to estimate the supply equation in
                                                                                                                   Example 1 by IV. The only available instrument is At , so (5.21) becomes
                            T                          T                               T
                        1X 0               1X                1X 0
                 plim     z t xt β0 + plim    z t u t = plim   z t xt β̂ I V .                            (5.22)                                                T
                                                                                                                                                                       !−1      T
                        T                  T                 T                                                                                             1X                1X
                           t=1                        t=1                          t=1                                                         γ̂ I V =       A t pt            A t qt ,
                                                                                                                                                           T                 T
   1 In matrix notation where z 0 is the t th row of Z we have β̂
                                                                                       −1                                                                      t=1            t=1
                                                                             Z 0 X/T         Z 0 Y /T .
                                                                                                     
                                t                                 IV =


                                                                                                             70                                                                                                   71
so the probability limit is                                                                               central limit theorem, then
                                                                                                                                  √                   d
                                                                                                                                                                         
                               plim γ̂ I V = Cov (At , pt )−1 Cov (At , qt ) ,                                                     T (β̂ I V − β0 ) → N 0, 6zx −1
                                                                                                                                                                  S0 6x−1
                                                                                                                                                                        z , where                               (5.26)
                                                                                                                                           T                      √ T             !
since all variables have zero means. From the reduced form in Example 1 we see that                                                  1X 0                            T X
                                                                                                                              6zx =          z t xt and S0 = Cov            zt u t .
                                                                                                                                    T                               T
                                  1                                      γ                                                              t=1                                     t=1
        Cov (At , pt ) = −           αVar (At ) and Cov (At , qt ) = −      αVar (At ) ,
                                β −γ                                   β −γ                               The last matrix in the covariance matrix follows from (6zx
                                                                                                                                                                                            0
                                                                                                                                                                      −1 )0 = (6 )−1 = 6 −1 . This
                                                                                                                                                                                  zx        xz
so                                                                                                        general expression is valid for both autocorrelated and heteroskedastic residuals—all such
                              
                                         1
                                                      −1 
                                                                γ
                                                                                                         features are loaded into the S0 matrix. Note that S0 is the variance-covariance matrix of
                                                                                                          √
                 plim γ̂ I V = −            αVar (At )      −      αVar (At )                               T times a sample average (of the vector of random variables xt u t ).
                                       β −γ                   β −γ
                                = γ.
                                                                                                          Example 8 (Choice of instrument in IV, simplest case) Consider the simple regression
This shows that γ̂ I V is consistent.
                                                                                                                                                yt = β1 xt + u t .

5.4.1 Asymptotic Normality of IV                                                                          The asymptotic variance of the IV estimator is

Little is known about the finite sample distribution of the IV estimator, so we focus on the                                                                 √    T
                                                                                                                                                                           !
                                                                                                                              √                                 T X
asymptotic distribution—assuming the IV estimator is consistent.                                                         AVar( T (β̂ I V − β0 )) = Var              z t u t / Cov (z t , xt )2
                                                                                                                                                               T
                                                                                                                                                                   t=1
                     d
Remark 7 If x T → x (a random variable) and plim Q T = Q (a constant matrix), then                                                                                                                 √
                                                                                                                                                                                           T z u / T) =
                                                                                                          If z t and u t is serially uncorrelated and independent of each other, then Var(6t=1 t t
        d
Q T x T → Qx.                                                                                             Var(z t ) Var(u t ). We can then write

     Use (5.16) to substitute for yt in (5.20)                                                                          √                                   Var(z t )                   Var(u t )
                                                                                                                   AVar( T (β̂ I V − β0 )) = Var(u t )                      =                               .
                                                                      !−1                                                                                Cov (z t , xt )2       Var(xt )Corr (z t , xt )2
                                                      T                         T
                                                  1   X                     1   X
                               β̂ I V = β0 +                z t xt0                   zt u t .   (5.24)   An instrument with a weak correlation with the regressor gives an imprecise estimator.
                                                  T                         T
                                                      t=1                       t=1                       With a perfect correlation, then we get the precision of the LS estimator (which is precise,
                 √                                                                                        but perhaps not consistent).
Premultiply by       T and rearrange as

                                                        T
                                                                       !−1 √           T
                         √                            1X 0                       T X                      5.4.2   2SLS
                             T (β̂ I V − β0 ) =         z t xt                       zt u t .    (5.25)
                                                      T                         T                         Suppose now that we have more instruments, z t , than regressors, xt . The IV method does
                                                        t=1                           t=1

If the first term on the right hand side converges in probability to a finite matrix (as as-              not work since, there are then more equations than unknowns in (5.20). Instead, we can
sumed in in proving consistency), and the vector of random variables z t u t satisfies a                  use the 2SLS estimator. It has two steps. First, regress all elements in xt on all elements
                                                                                                          in z t with LS. Second, use the fitted values of xt , denoted x̂t , as instruments in the IV
                                                                                                          method (use x̂t in place of z t in the equations above). In can be shown that this is the most

                                                                                                    72                                                                                                             73
efficient use of the information in z t . The IV is clearly a special case of 2SLS (when z t       know from Example 2 that it is the supply shocks that make the LS estimate of the supply
has the same number of elements as xt ).                                                           curve inconsistent. The IV method suppresses both them and the unobservable demand
    It is immediate from (5.22) that 2SLS is consistent under the same condiditons as              shock.
                                                                PT
IV since x̂t is a linear function of the instruments, so plim t=1     x̂t u t /T = 0, if all the
instruments are uncorrelated with u t .                                                            5.5    Hausman’s Specification Test∗
    The name, 2SLS, comes from the fact that we get exactly the same result if we replace
the second step with the following: regress yt on x̂t with LS.                                     Reference: Greene (2000) 9.5
                                                                                                       This test is constructed to test if an efficient estimator (like LS) gives (approximately)
Example 9 (Supply equation with 2SLS.). With only one instrument, At , this is the same
                                                                                                   the same estimate as a consistent estimator (like IV). If not, the efficient estimator is most
as Example 6, but presented in another way. First, regress pt on At
                                                                                                   likely inconsistent. It is therefore a way to test for the presence of endogeneity and/or
                                                       Cov ( pt , At )      1                      measurement errors.
                 pt = δ At + u t ⇒ plim δ̂ L S =                       =−      α.
                                                        Var (At )         β −γ                         Let β̂e be an estimator that is consistent and asymptotically efficient when the null
Construct the predicted values as                                                                  hypothesis, H0 , is true, but inconsistent when H0 is false. Let β̂c be an estimator that is
                                                                                                   consistent under both H0 and the alternative hypothesis. When H0 is true, the asymptotic
                                            p̂t = δ̂ L S At .                                      distribution is such that                               
                                                                                                                                     Cov β̂e , β̂c = Var β̂e .                             (5.27)
Second, regress qt on p̂t
                                                               d qt , p̂t
                                                               Cov
                                                                                                      Proof. Consider the estimator λβ̂c + (1 − λ) β̂e , which is clearly consistent under H0
                   qt = γ p̂t + et , with plim γ̂2S L S = plim          .                         since both β̂c and β̂e are. The asymptotic variance of this estimator is
                                                                Var
                                                                 c p̂t
                                                                                                                                                                         
Use p̂t = δ̂ L S At and Slutsky’s theorem                                                                         λ2 Var β̂c + (1 − λ)2 Var β̂e + 2λ (1 − λ) Cov β̂c , β̂e ,
                                                             
                                             d qt , δ̂ L S At
                                        plim Cov                                                   which is minimized at λ = 0 (since β̂e is asymptotically efficient). The first order condi-
                        plim γ̂2S L S =                                                          tion with respect to λ
                                               c δ̂ L S At
                                          plim Var
                                                                                                                                                                      
                                        Cov (qt , At ) plim δ̂ L S                                             2λVar β̂c − 2 (1 − λ) Var β̂e + 2 (1 − 2λ) Cov β̂c , β̂e = 0
                                    =
                                      Var (At ) plim δ̂ 2L S
                                                                                                   should therefore be zero at λ = 0 so
                                         γ
                                        h                 ih        i
                                      − β−γ αVar (At ) − β−γ    1
                                                                  α                                                                                   
                                    =              h           i2                                                                 Var β̂e = Cov β̂c , β̂e .
                                         Var (At ) − β−γ   1
                                                             α

                                    = γ.                                                           (See Davidson (2000) 8.1)

Note that the trick here is to suppress some the movements in pt . Only those movements
that depend on At (the observable shifts of the demand curve) are used. Movements in pt
which are due to the unobservable demand and supply shocks are disregarded in p̂t . We

                                                                                             74                                                                                               75
   This means that we can write                                                                  Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,
                                                                                           Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.
               Var β̂e − β̂c = Var β̂e + Var β̂c − 2Cov β̂e , β̂c
                                                                                             Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
                              = Var β̂c − Var β̂e .                                    (5.28)

    We can use this to test, for instance, if the estimates from least squares (β̂e , since LS
is efficient if errors are iid normally distributed) and instrumental variable method (β̂c ,
since consistent even if the true residuals are correlated with the regressors) are the same.
In this case, H0 is that the true residuals are uncorrelated with the regressors.
    All we need for this test are the point estimates and consistent estimates of the vari-
ance matrices. Testing one of the coefficient can be done by a t test, and testing all the
parameters by a χ 2 test
                             0            −1          
                     β̂e − β̂c Var β̂e − β̂c      β̂e − β̂c ∼ χ 2 ( j) ,               (5.29)

where j equals the number of regressors that are potentially endogenous or measured with
error. Note that the covariance matrix in (5.28) and (5.29) is likely to have a reduced rank,
so the inverse needs to be calculated as a generalized inverse.


5.6    Tests of Overidentifying Restrictions in 2SLS∗

When we use 2SLS, then we can test if instruments affect the dependent variable only
via their correlation with the regressors. If not, something is wrong with the model since
some relevant variables are excluded from the regression.


Bibliography
Davidson, J., 2000, Econometric Theory, Blackwell Publishers, Oxford.

Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
  Jersey, 4th edn.

Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.

Hayashi, F., 2000, Econometrics, Princeton University Press.

                                                                                           76                                                                                      77
                                                                                                   case, we simply take the point estimates. In other cases, we adjust the point estimates
                                                                                                   so that g(β) = 0 holds, that is, so you simulate the model under the null hypothesis
                                                                                                   in order to study the size of asymptotic tests and to find valid critical values for small
6     Simulating the Finite Sample Properties                                                      samples. Alternatively, you may simulate the model under an alternative hypothesis in
                                                                                                   order to study the power of the test using either critical values from either the asymptotic
Reference: Greene (2000) 5.3
                                                                                                   distribution or from a (perhaps simulated) small sample distribution.
Additional references: Cochrane (2001) 15.2; Davidson and MacKinnon (1993) 21; Davi-
                                                                                                       To make it a bit concrete, suppose you want to use these simulations to get a 5%
son and Hinkley (1997); Efron and Tibshirani (1993) (bootstrapping, chap 9 in particular);
                                                                                                   critical value for testing the null hypothesis g (β) = 0. The Monte Carlo experiment
and Berkowitz and Kilian (2000) (bootstrapping in time series models)
                                                                                                   follows these steps.
    We know the small sample properties of regression coefficients in linear models with
fixed regressors (X is non-stochastic) and iid normal error terms. Monte Carlo Simula-                                                                                             T
                                                                                                      1.   (a) Construct an artificial sample of the regressors (see above), {x̃t }t=1 .
tions and bootstrapping are two common techniques used to understand the small sample                                                         T
                                                                                                           (b) Draw random numbers {ũ t }t=1     and use those together with the artificial sam-
properties when these conditions are not satisfied.                                                                                                                T
                                                                                                               ple of x̃t to calculate an artificial sample { ỹt }t=1 by using (6.1). Calculate an
                                                                                                               estimate β̂ and record it along with the value of g(β̂) and perhaps also the test
6.1    Monte Carlo Simulations in the Simplest Case                                                            statistics of the hypothesis that g(β) = 0.

Monte Carlo simulations is essentially a way to generate many artificial (small) samples              2. Repeat the previous steps N (3000, say) times. The more times you repeat, the
from a parameterized model and then estimating the statistics on each of those samples.                  better is the approximation of the small sample distribution.
The distribution of the statistics is then used as the small sample distribution of the esti-
                                                                                                      3. Sort your simulated β̂, g(β̂), and the test statistics in ascending order. For a one-
mator.
                                                                                                         sided test (for instance, a chi-square test), take the (0.95N )th observations in these
   The following is an example of how Monte Carlo simulations could be done in the
                                                                                                         sorted vector as your 5% critical values. For a two-sided test (for instance, a t-test),
special case of a linear model for a scalar dependent variable
                                                                                                         take the (0.025N )th and (0.975N )th observations as the 5% critical values. You can
                                        yt = xt0 β + u t ,                                (6.1)          also record how many times the 5% critical values from the asymptotic distribution
                                                                                                         would reject a true null hypothesis.
where u t is iid N (0, σ 2 ) and xt is stochastic but independent of u t±s for all s. This means
that xt cannot include lags of yt .                                                                   4. You may also want to plot a histogram of β̂, g(β̂), and the test statistics to see
      Suppose we want to find the small sample distribution of a function of the estimate,               if there is a small sample bias, and how the distribution looks like. Is it close to
g(β̂). To do a Monte Carlo experiment, we need information on (i) β; (ii) the variance of                normal? How wide is it?
u t , σ 2 ; (iii) and a process for xt .                                                              5. See Figure 6.1 for an example.
      The process for xt is typically estimated from the data on xt . For instance, we could
estimate the VAR system xt = A1 xt−1 + A2 xt−2 + et . An alternative is to take an actual
sample of xt and repeat it.                                                                        Remark 1 (Generating N (µ, 6) random numbers) Suppose you want to draw an n × 1
      The values of β and σ 2 are often a mix of estimation results and theory. In some            vector εt of N (µ, 6) variables. Use the Cholesky decomposition to calculate the lower
                                                                                                   triangular P such that 6 = P P 0 (note that Gauss and MatLab returns P 0 instead of

                                                                                             78                                                                                                 79
        Mean LS estimate of y =0.9y
                                t    t−1
                                          +ε
                                           t                 √T × Std of LS estimate                           √T × (bLS−0.9), T= 10                         √T × (bLS−0.9), T= 100
        1                                                                                               6                                           6
                             Simulation            0.7              Simulation
                             Asymptotic            0.6              Asymptotic                          4                                           4
                                                                          2       −1
                                                                    mean σ (X’X/T)
      0.9                                          0.5
                                                   0.4                                                  2                                           2
                                                   0.3
      0.8                                                                                               0                                           0
            0           500            1000              0           500               1000            −0.5              0               0.5       −0.5                    0                   0.5
                    Sample size, T                               Sample size, T

                                                                                                                                                   Model: Rt=0.9ft+εt, where εt has a t3 distribution

Figure 6.1: Results from a Monte Carlo experiment of LS estimation of the AR coeffi-                          √T × (bLS−0.9), T= 1000
                                                                                                                                                   Kurtosis for T=10 100 1000: 46.9 6.1 4.1
cient. Data generated by an AR(1) process, 5000 simulations.                                            6
                                                                                                                                                   Rejection rates of abs(t−stat)>1.645: 0.16 0.10 0.10
                                                                                                        4
P). Draw u t from an N (0, I ) distribution (randn in MatLab, rndn in Gauss), and define                                                           Rejection rates of abs(t−stat)>1.96: 0.10 0.05 0.06

εt = µ + Pu t . Note that Cov(εt ) = E Pu t u 0t P 0 = P I P 0 = 6.                                     2

                                                                                                        0
6.2     Monte Carlo Simulations in More Complicated Cases∗                                             −0.5              0               0.5


6.2.1       When xt Includes Lags of yt
                                                                                                    Figure 6.2: Results from a Monte Carlo experiment with thick-tailed errors. The regressor
If xt contains lags of yt , then we must set up the simulations so that feature is preserved in     is iid normally distributed. The errors have a t3 -distribution, 5000 simulations.
every artificial sample that we create. For instance, suppose xt includes yt−1 and another
vector z t of variables which are independent of u t±s for all s. We can then generate an           6.2.2   More Complicated Errors
artificial sample as follows. First, create a sample {z̃ t }t=1  T   by some time series model or   It is straightforward to sample the errors from other distributions than the normal, for in-
by taking the observed sample itself (as we did with xt in the simplest case). Second,              stance, a uniform distribution. Equipped with uniformly distributed random numbers, you
observation t of {x̃t , ỹt } is generated as                                                       can always (numerically) invert the cumulative distribution function (cdf) of any distribu-
                                       "        #                                                   tion to generate random variables from any distribution by using the probability transfor-
                                         ỹt−1
                                 x̃t =            and ỹt = x̃t0 β + u t ,                  (6.2)   mation method. See Figure 6.2 for an example.
                                           z̃ t

which is repeated for t = 1, ..., T . We clearly need the initial value y0 to start up the          Remark 2 Let X ∼ U (0, 1) and consider the transformation Y = F −1 (X ), where F −1 ()
artificial sample, so one observation from the original sample is lost.                             is the inverse of a strictly increasing cdf F, then Y has the CDF F(). (Proof: follows from
                                                                                                    the lemma on change of variable in a density function.)

                                                                                                    Example 3 The exponential cdf is x = 1 − exp(−θ y) with inverse y = − ln (1 − x) /θ.
                                                                                                    Draw x from U (0.1) and transform to y to get an exponentially distributed variable.


                                                                                              80                                                                                                          81
    It is more difficult to handle non-iid errors, for instance, heteroskedasticity and auto-     in the Monte Carlo simulations: replace any yt−1 in xt by ỹt−1 , that is, the corresponding
correlation. We then need to model the error process and generate the errors from that            observation in the artificial sample.
model. For instance, if the errors are assumed to follow an AR(2) process, then we could
estimate that process from the errors in (6.1) and then generate artificial samples of errors.    6.4.2   Case 3: Errors are Heteroskedastic but Uncorrelated with of xt±s

                                                                                                  Case 1 and 2 both draw errors randomly—based on the assumption that the errors are
6.3    Bootstrapping in the Simplest Case                                                         iid. Suppose instead that the errors are heteroskedastic, but still serially uncorrelated.
                                                                                                  We know that if the heteroskedastcity is related to the regressors, then the traditional LS
Bootstrapping is another way to do simulations, where we construct artificial samples by
                                                                                                  covariance matrix is not correct (this is the case that White’s test for heteroskedasticity
sampling from the actual data. The advantage of the bootstrap is then that we do not have
                                                                                                  tries to identify). It would then be wrong it pair xt with just any û s since that destroys the
to try to estimate the process of the errors and regressors as we must do in a Monte Carlo
                                                                                                  relation between xt and the variance of u t .
experiment. The real benefit of this is that we do not have to make any strong assumption
                                                                                                         An alternative way of bootstrapping can then be used: generate the artificial sample
about the distribution of the errors.
                                                                                                  by drawing (with replacement) pairs (ys , xs ), that is, we let the artificial pair in t be
    The bootstrap approach works particularly well when the errors are iid and indepen-
                                                                                                  ( ỹt , x̃t ) = (xs0 β̂0 +û s , xs ) for some random draw of s so we are always pairing the residual,
dent of xt−s for all s. This means that xt cannot include lags of yt . We here consider
                                                                                                  û s , with the contemporaneous regressors, xs . Note that is we are always sampling with
bootstrapping the linear model (6.1), for which we have point estimates (perhaps from
                                                                                                  replacement—otherwise the approach of drawing pairs would be just re-create the original
LS) and fitted residuals. The procedure is similar to the Monte Carlo approach, except
                                                                                                  data set. For instance, if the data set contains 3 observations, then artificial sample could
that the artificial sample is generated differently. In particular, Step 1 in the Monte Carlo
                                                                                                  be
simulation is replaced by the following:                                                                                                   ( ỹ1 , x̃1 )      (x2 β̂0 + û 2 , x2 )
                                                                                                                                                          0                       

                                                                                                                                         ( ỹ2 , x̃2 )  =  (x3 β̂0 + û 3 , x3 ) 
                                                                                                                                                          0                       
                                            T by
   1. Construct an artificial sample { ỹt }t=1
                                                                                                                                           ( ỹ3 , x̃3 )      (x30 β̂0 + û 3 , x3 )
                                          ỹt = xt0 β + ũ t ,                           (6.3)    In contrast, when we sample (with replacement) û s , as we did above, then an artificial
                                                                                                  sample could be
      where ũ t is drawn (with replacement) from the fitted residual and where β is the                                 
                                                                                                                           ( ỹ1 , x̃1 )
                                                                                                                                           0
                                                                                                                                               (x1 β̂0 + û 2 , x1 )
                                                                                                                                                                      
      point estimate. Calculate an estimate β̂ and record it along with the value of g(β̂)                                ( ỹ2 , x̃2 )  =  (x20 β̂0 + û 1 , x2 )  .
                                                                                                                                                                   
      and perhaps also the test statistics of the hypothesis that g(β) = 0.                                                      ( ỹ3 , x̃3 )       (x30 β̂0 + û 2 , x3 )
                                                                                                       Davidson and MacKinnon (1993) argue that bootstrapping the pairs (ys , xs ) makes
6.4    Bootstrapping in More Complicated Cases∗                                                   little sense when xs contains lags of ys , since there is no way to construct lags of ys in the
                                                                                                  bootstrap. However, what is important for the estimation is sample averages of various
6.4.1 Case 2: Errors are iid but Correlated With xt+s
                                                                                                  functions of the dependent and independent variable within a period—not how the line up
When xt contains lagged values of yt , then we have to modify the approach in (6.3) since         over time (provided the assumption of no autocorrelation of the residuals is true).
ũ t can become correlated with xt . For instance, if xt includes yt−1 and we happen to
sample ũ t = û t−1 , then we get a non-zero correlation. The easiest way to handle this is as



                                                                                            82                                                                                                       83
6.4.3 Other Approaches                                                                                          Efron, B., and R. J. Tibshirani, 1993, An Introduction to the Bootstrap, Chapman and
                                                                                                                  Hall, New York.
There are many other ways to do bootstrapping. For instance, we could sample the re-
gressors and residuals independently of each other and construct an artificial sample of                        Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
the dependent variable ỹt = x̃t0 β̂ + ũ t . This clearly makes sense if the residuals and re-                   Jersey, 4th edn.
gressors are independent of each other and errors are iid. In that case, the advantage of
this approach is that we do not keep the regressors fixed.

6.4.4 Serially Dependent Errors

It is quite hard to handle the case when the errors are serially dependent, since we must
the sample in such a way that we do not destroy the autocorrelation structure of the data.
A common approach is to fit a model for the residuals, for instance, an AR(1), and then
bootstrap the (hopefully iid) innovations to that process.
      Another approach amounts to resampling of blocks of data. For instance, suppose the
sample has 10 observations, and we decide to create blocks of 3 observations. The first
block is (û 1 , û 2 , û 3 ), the second block is (û 2 , û 3 , û 4 ), and so forth until the last block,
(û 8 , û 9 , û 10 ). If we need a sample of length 3τ , say, then we simply draw τ of those
block randomly (with replacement) and stack them to form a longer series. To handle
end point effects (so that all data points have the same probability to be drawn), we also
create blocks by “wrapping” the data around a circle. In practice, this means that we add
a the following blocks: (û 10 , û 1 , û 2 ) and (û 9 , û 10 , û 1 ). An alternative approach is to have
non-overlapping blocks. See Berkowitz and Kilian (2000) for some other recent methods.


Bibliography
Berkowitz, J., and L. Kilian, 2000, “Recent Developments in Bootstrapping Time Series,”
  Econometric-Reviews, 19, 1–48.

Cochrane, J. H., 2001, Asset Pricing, Princeton University Press, Princeton, New Jersey.

Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,
  Oxford University Press, Oxford.

Davison, A. C., and D. V. Hinkley, 1997, Bootstrap Methods and Their Applications,
  Cambridge University Press.

                                                                                                         84                                                                                      85
                                                                                                  The moment conditions could therefore be
                                                                                                                       " P                              # " #
                                                                                                                               T
                                                                                                                               t=1 yt − σ 1 + θ
                                                                                                                          1          2      2        2      0
                                                                                                                          T
                                                                                                                            1 PT
                                                                                                                                                          =    ,
7     GMM                                                                                                                   T    t=1  yt yt−1 − σ 2θ
                                                                                                                                                           0

                                                                                                  which allows us to estimate θ and σ 2 .
References: Greene (2000) 4.7 and 11.5-6
Additional references: Hayashi (2000) 3-4; Verbeek (2000) 5; Hamilton (1994) 14; Ogaki
(1993), Johnston and DiNardo (1997) 10; Harris and Matyas (1999); Pindyck and Rubin-              7.2   Generalized Method of Moments
feld (1997) Appendix 10.1; Cochrane (2001) 10-11
                                                                                                  GMM extends MM by allowing for more orthogonality conditions than parameters. This
                                                                                                  could, for instance, increase efficiency and/or provide new aspects which can be tested.
7.1    Method of Moments                                                                              Many (most) traditional estimation methods, like LS, IV, and MLE are special cases
                                                                                                  of GMM. This means that the properties of GMM are very general, and therefore fairly
Let m (xt ) be a k × 1 vector valued continuous function of a stationary process, and let the
                                                                                                  difficult to prove.
probability limit of the mean of m (.) be a function γ (.) of a k × 1 vector β of parameters.
We want to estimate β. The method of moments (MM, not yet generalized to GMM)
estimator is obtained by replacing the probability limit with the sample mean and solving         7.3   Moment Conditions in GMM
the system of k equations
                                                                                                  Suppose we have q (unconditional) moment conditions,
                                   T
                                1X                                                                                                                         
                                   m (xt ) − γ (β) = 0k×1                                (7.1)                                              Em 1 (wt , β0 )
                                T                                                                                                                 ..
                                  t=1
                                                                                                                           Em(wt , β0 ) = 
                                                                                                                                                           
                                                                                                                                                  .        
                                                                                                                                                            
for the parameters β.                                                                                                                       Em q (wt , β0 )
    It is clear that this is a consistent estimator of β if γ is continuous. (Proof: the sample
                                                                                                                                            = 0q×1 ,                                  (7.2)
mean is a consistent estimator of γ (.), and by Slutsky’s theorem plim γ (β̂) = γ (plim β̂)
if γ is a continuous function.)                                                                   from which we want to estimate the k × 1 (k ≤ q) vector of parameters, β. The true
                                                                           PT                     values are β0 . We assume that wt is a stationary and ergodic (vector) process (otherwise
Example 1 (MM for the variance of a variable.) The MM condition T1            t=1 x t − σ = 0
                                                                                    2    2
                                                                                                  the sample means does not converge to anything meaningful as the sample size increases).
gives the usual MLE of the sample variance, assuming Ext = 0.
                                                                                                  The sample averages, or “sample moment conditions,” evaluated at some value of β, are

Example 2 (MM for an MA(1).) For an MA(1), yt = t + θ t−1 , we have                                                                       1X
                                                                                                                                                T
                                                                                                                                  m̄(β) =      m(wt , β).                             (7.3)
                                                                                                                                            T
               Eyt2               E (t + θt−1 )2          = σ2 1 + θ         2
                                                                                  
                         =                                                                                                                     t=1

            E (yt yt−1 ) = E (t + θt−1 ) (t−1 + θt−2 ) =      σ2 θ.
                                                         
                                                                                                  The sample average m̄ (β) is a vector of functions of random variables, so they are ran-
                                                                                                  dom variables themselves and depend on the sample used. It will later be interesting to
                                                                                                  calculate the variance of m̄ (β). Note that m̄(β1 ) and m̄(β2 ) are sample means obtained


                                                                                            86                                                                                          87
by using two different parameter vectors, but on the same sample of data.                          where Rt+1 is a gross return on an investment and t is the information set in t. Let
Example 3 (Moments conditions for IV/2SLS.) Consider the linear model yt = xt0 β0 +u t ,           z t ∈ t , for instance asset returns or consumption t or earlier. The Euler equation then
where xt and β are k × 1 vectors. Let z t be a q × 1 vector, with q ≥ k. The moment                implies                        "                           #
                                                                                                                                            Ct+1 −γ
                                                                                                                                                
conditions and their sample analogues are                                                                                      E Rt+1 β              z t − z t = 0.
                                                                                                                                             Ct
                                                                     T
                                                                  1X
          0q×1 = Ez t u t = E[z t (yt − xt0 β0 )], and m̄ (β) =      z t (yt − xt0 β),                Let z t = (z 1t , ..., z nt )0 , and define the new (unconditional) moment conditions as
                                                                  T
                                                                    t=1                                                                                                         
                                                                                                                                                              u 1 (xt , β)z 1t
(or Z 0 (Y − Xβ)/T in matrix form). Let q = k to get IV; let z t = xt to get LS.
                                                                                                                                                            u 1 (xt , β)z 2t 
                                                                                                                                                                                
                                                                                                                                                                      ..
                                                                                                                                                                                
Example 4 (Moments conditions for MLE.) The maximum likelihood estimator maxi-                                                                             
                                                                                                                                                                      .
                                                                                                                                                                                 
                                                                                                                                                                                 
mizes the log likelihood function, T1 6t=1
                                       T ln L (w ; β), which requires 1 6 T ∂ ln L (w ; β) /∂β =
                                                                                                                         m(wt , β) = u(xt , β) ⊗ z t =           (x  ,   β)z      ,
                                                                                                                                                                                
                                                t                      T t=1          t                                                                       u                               (7.5)
                                                                                                                                                            1 t              nt 
                                                                                                                                                                                 
0. A key regularity condition for the MLE is that E∂ ln L (wt ; β0 ) /∂β = 0, which is just                                                                 u 2 (xt , β)z 1t 
                                                                                                                                                                                
like a GMM moment condition.
                                                                                                                                                                      ..        
                                                                                                                                                                        .
                                                                                                                                                                                
                                                                                                                                                                                
                                                                                                                                                              u m (xt , β)z nt q×1
7.3.1   Digression: From Conditional to Unconditional Moment Conditions
                                                                                                   which by (7.4) must have an expected value of zero, that is
Suppose we are instead given conditional moment restrictions
                                                                                                                                       Em(wt , β0 ) = 0q×1 .                                 (7.6)
                                  E [u(xt , β0 )|z t ] = 0m×1 ,                          (7.4)
                                                                                                   This a set of unconditional moment conditions—just as in (7.2). The sample moment con-
where z t is a vector of conditioning (predetermined) variables. We want to transform this
                                                                                                   ditions (7.3) are therefore valid also in the conditional case, although we have to specify
to unconditional moment conditions.
                                                                                                   m(wt , β) as in (7.5).
Remark 5 (E(u|z) = 0 versus Euz = 0.) For any random variables u and z,                                Note that the choice of instruments is often arbitrary: it often amounts to using only
                                                                                                   a subset of the information variables. GMM is often said to be close to economic theory,
                               Cov (z, u) = Cov [z, E (u|z)] .
                                                                                                   but it should be admitted that economic theory sometimes tells us fairly little about which
The condition E(u|z) = 0 then implies Cov(z, u) = 0. Recall that Cov(z, u) = Ezu−EzEu,             instruments, z t , to use.
and that E(u|z) = 0 implies that Eu = 0 (by iterated expectations). We therefore get that
                                   "                  #                                            Example 7 (Euler equation for optimal consumption, continued) The orthogonality con-
                                      Cov (z, u) = 0                                               ditions from the consumption Euler equations in Example 6 are highly non-linear, and
                   E (u|z) = 0 ⇒                        ⇒ Euz = 0.
                                         Eu = 0                                                    theory tells us very little about how the prediction errors are distributed. GMM has the
Example 6 (Euler equation for optimal consumption.) The standard Euler equation for                advantage of using the theoretical predictions (moment conditions) with a minimum of
                                                                    1−γ
optimal consumption choice which with isoelastic utility U (Ct ) = Ct / (1 − γ ) is                distributional assumptions. The drawback is that it is sometimes hard to tell exactly which
                          "                             #                                          features of the (underlying) distribution that are tested.
                                    Ct+1 −γ
                                        
                        E Rt+1 β               − 1 t = 0,
                                     Ct

                                                                                           88                                                                                                   89
7.4    The Optimization Problem in GMM                                                       for the IV/2SLS method is
                                                                                                                           "         T
                                                                                                                                                          #0       "     T
                                                                                                                                                                                          #
7.4.1 The Loss Function                                                                                                        1X                                      1X
                                                                                                              0
                                                                                                        m̄(β) W m̄(β) =           z t (yt − xt0 β)             W           z t (yt − xt β) .
                                                                                                                                                                                      0
                                                                                                                               T                                       T
The GMM estimator β̂ minimizes the weighted quadratic form                                                                       t=1                                      t=1

                             0                                                         When q = k, then the model is exactly identified, so the estimator could actually be found
                     m̄ 1 (β)      W11 · · · · · · W1q       m̄ 1 (β)
                 .             .     ..          ..    .                                by setting all moment conditions to zero. We then get the IV estimator
                 ..            ..
                                                          ..
                                                                      
                                           .         .              
            J = .              .                  .   .                         (7.7)
                                                                   
                 ..            ..          . ..   ..   ..
                                                                      
                                                                                                                                  1X
                                                                                                                                         T
                                                                                                                                          z t (yt − xt0 β̂ I V ) or
                                                                      
                                                                                                                      0=
                     m̄ q (β)      W1q · · · · · · Wqq       m̄ q (β)                                                             T
                                                                                                                                     t=1
                                                                                                                                        T
                                                                                                                                                     !−1       T
                  = m̄(β)0 W m̄(β),                                                  (7.8)                                          1X 0                 1X
                                                                                                                         β̂ I V =             z t xt              z t yt
                                                                                                                                    T                    T
                                                                                                                                         t=1                       t=1
where m̄(β) is the sample average of m(wt , β) given by (7.3), and where W is some
q × q symmetric positive definite weighting matrix. (We will soon discuss a good choice                                         = 6̂zx
                                                                                                                                    −1
                                                                                                                                       6̂zy ,
of weighting matrix.) There are k parameters in β to estimate, and we have q moment
                                                                                             where 6̂zx = 6t=1
                                                                                                           T z x 0 /T and similarly for the other second moment matrices. Let z =
                                                                                                               t t                                                             t
conditions in m̄(β). We therefore have q − k overidentifying moment restrictions.
                                                                                             xt to get LS
    With q = k the model is exactly identified (as many equations as unknown), and it
                                                                                                                               β̂ L S = 6̂x−1
                                                                                                                                            x 6̂x y .
should be possible to set all q sample moment conditions to zero by a choosing the k = q
parameters. It is clear that the choice of the weighting matrix has no effect in this case   7.4.2   First Order Conditions
since m̄(β̂) = 0 at the point estimates β̂.
                                                                                             Remark 10 (Matrix differentiation of non-linear functions.) Let the vector yn×1 be a
Example 8 (Simple linear regression.) Consider the model                                     function of the vector xm×1
                                                                                                                                                   
                                      yt = xt β0 + u t ,                             (7.9)                                  y1                f 1 (x)
                                                                                                                          .              .
                                                                                                                          ..  = f (x) =  ..        .
                                                                                                                                                      
where yt and xt are zero mean scalars. The moment condition and loss function are
                                                                                                                                                   
                                                                                                                            yn                f n (x)
                                         T
                                   1X
                           m̄ (β) =      xt (yt − xt β) and                                  Then, ∂ y/∂ x 0 is an n × m matrix
                                   T
                                     t=1
                                                                                                                            ∂ f 1 (x)              ∂ f 1 (x)             ∂ f 1 (x)
                                                                                                                                                                                  
                                                             #2                                                                                      ∂ x1      ···        ∂ xm
                                                                                                                           ∂x 
                                     "     T                                                                                       0
                                       1X                                                                          ∂y      ..        =  ...                            ..          .
                                               xt (yt − xt β) ,
                                                                                                                                                                                    
                                J =W                                                                                    =  .                                             .
                                       T                                                                           ∂x 0  
                                                                                                                            ∂ f (x)
                                                                                                                                       
                                                                                                                                            ∂ f (x)                      ∂ f n (x)
                                                                                                                                                                                     
                                             t=1                                                                                 1                    n
                                                                                                                                 ∂x0                 ∂ x1      ···        ∂ xm
so the scalar W is clearly irrelevant in this case.
                                                                                             (Note that the notation implies that the derivatives of the first element in y, denoted y1 ,
Example 9 (IV/2SLS method continued.) From Example 3, we note that the loss function         with respect to each of the elements in x 0 are found in the first row of ∂ y/∂ x 0 . A rule to
                                                                                             help memorizing the format of ∂ y/∂ x 0 : y is a column vector and x 0 is a row vector.)

                                                                                       90                                                                                                      91
Remark 11 When y = Ax where A is an n × m matrix, then f i (x) in Remark 10 is a                        Example 15 (First order conditions of simple linear regression.) The first order condi-
linear function. We then get ∂ y/∂ x 0 = ∂ (Ax) /∂ x 0 = A.                                             tions of the loss function in Example 8 is
                                                                                                                                        "      T
                                                                                                                                                                  #2
Remark 12 As a special case of the previous remark y = z 0 x where both z and x are                                               d       1X
                                                                                                                             0=      W            xt (yt − xt β̂)
vectors. Then ∂ z 0 x /∂ x 0 = z 0 (since z 0 plays the role of A).
                     
                                                                                                                                 dβ       T
                                                                                                                                              t=1
                                                                                                                                         T                 T
                                                                                                                                 "              # "                            #
Remark 13 (Matrix differentiation of quadratic forms.) Let xn×1 , f (x)m×1 , and Am×m                                                1X 2               1X
                                                                                                                               = −            xt W              xt (yt − xt β̂) , or
symmetric. Then                                                                                                                      T                  T
                                                                                                                                        t=1               t=1
                      ∂ f (x)0 A f (x)         ∂ f (x) 0
                                                                                                                                             !−1
                                                                                                                                       T                T
                                       =2                 A f (x) .                                                                 1X 2            1X
                            ∂x                   ∂x0                                                                        β̂ =           xt             xt yt .
                                                                                                                                   T               T
                                                                                                                                       t=1            t=1
Remark 14 If f (x) = x, then ∂ f (x) /∂ x 0 = I , so ∂ x 0 Ax /∂ x = 2Ax.
                                                              
                                                                                                        Example 16 (First order conditions of IV/2SLS.) The first order conditions correspond-
    The k first order conditions for minimizing the GMM loss function in (7.8) with re-                 ing to (7.11) of the loss function in Example 9 (when q ≥ k) are
spect to the k parameters are that the partial derivatives with respect to β equal zero at the                                    "          #0
                                                                                                                                    ∂ m̄(β̂)
estimate, β̂,                                                                                                             0k×1 =                W m̄(β̂)
                                                                                                                                      ∂β 0
      ∂ m̄(β̂)0 W m̄(β̂)                                                                                                          "          T
                                                                                                                                                                    #0         T
0k×1 =                                                                                                                               ∂ 1X                                  1X
                 ∂β                                                                                                            =                  z t (yt − x 0
                                                                                                                                                                β̂)    W            z t (yt − xt0 β̂)
                                          0                                                                                       ∂β 0 T                    t
                                                                                                                                                                           T
          ∂ m̄ 1 (β̂)
                      · · · ∂ m̄∂β1 (kβ̂)
                                                                                                                                            t=1                               t=1
                                                                                  
             ∂β1                               W11 · · · · · ·   W1q       m̄ 1 (β̂)                                              "        T
                                                                                                                                                      #0         T
       .                   ..              .     ..             ..   .                                                            1X 0                 1X
       ..
                                            ..                        ..
                                                                                     
                             .                       .            .                                                       = −            z t xt W               z t (yt − xt0 β̂)
     = .                    .              .                   ..   ..           (with β̂k×1 ),                                  T                   T
                                                                                    
       ..                   ..             ..          ...          
                                                                                                                                        t=1               t=1
                                                                   .  .            
                                                                                                                              = −6̂x z W (6̂zy − 6̂zx β̂).
                                                                                  
          ∂ m̄ q (β̂)         ∂ m̄ q (β̂)
                      ···                      W1q · · · · · ·   Wqq       m̄ q (β̂)
             ∂β1              ∂βk
                                                                                              (7.10)    We can solve for β̂ from the first order conditions as
                   !0
          ∂ m̄(β̂)                                                                                                                                         −1
                    W m̄(β̂).
                                                                                                                                             
     =
            ∂β 0   |{z} | {z }
                                                                                              (7.11)                               β̂2S L S = 6̂x z W 6̂zx     6̂x z W 6̂zy .
         | {z } q×q q×1
            k×q
                                                                                                        When q = k, then the first order conditions can be premultiplied with (6̂x z W )−1 , since
We can solve for the GMM estimator, β̂, from (7.11). This set of equations must often be                6̂x z W is an invertible k × k matrix in this case, to give
solved by numerical methods, except in linear models (the moment conditions are linear
                                                                                                                                 0k×1 = 6̂zy − 6̂zx β̂, so β̂ I V = 6̂zx
                                                                                                                                                                      −1
                                                                                                                                                                         6̂zy .
functions of the parameters) where we can find analytical solutions by matrix inversion.
                                                                                                        This shows that the first order conditions are just the same as the sample moment condi-
                                                                                                        tions, which can be made to hold exactly since there are as many parameters as there are
                                                                                                        equations.


                                                                                                  92                                                                                              93
7.5     Asymptotic Properties of GMM                                                            in Example 16 can be rewritten
                                                                                                                                             T
We know very little about the general small sample properties, including bias, of GMM.                                                   1X
                                                                                                                        0k×1 = 6̂x z W      z t (yt − xt0 β̂)
We therefore have to rely either on simulations (Monte Carlo or bootstrap) or on the                                                     T
                                                                                                                                             t=1
asymptotic results. This section is about the latter.                                                                                     T
                                                                                                                                         1X           h                 i
    GMM estimates are typically consistent and normally distributed, even if the series                                      = 6̂x z W             z t u t + xt0 β0 − β̂
                                                                                                                                         T
                                                                                                                                             t=1
m(wt , β) in the moment conditions (7.3) are serially correlated and heteroskedastic—                                                                            
provided wt is a stationary and ergodic process. The reason is essentially that the esti-                                    = 6̂x z W 6̂zu + 6̂x z W 6̂zx β0 − β̂ .
mators are (at least as a first order approximation) linear combinations of sample means
                                                                                                Take the probability limit
which typically are consistent (LLN) and normally distributed (CLT). More about that                                                                                        
later. The proofs are hard, since the GMM is such a broad class of estimators. This                       0k×1 = plim 6̂x z W plim 6̂zu + plim 6̂x z W plim 6̂zx β0 − plim β̂ .
section discusses, in an informal way, how we can arrive at those results.
                                                                                                In most cases, plim 6̂x z is some matrix of constants, and plim 6̂zu = E z t u t = 0q×1 . It
7.5.1   Consistency                                                                             then follows that plim β̂ = β0 . Note that the whole argument relies on that the moment
                                                                                                condition, Ez t u t = 0q×1 , is true. If it is not, then the estimator is inconsistent. For
Sample moments are typically consistent, so plim m (β) = E m(wt , β). This must hold at
                                                                                                instance, when the instruments are invalid (correlated with the residuals) or when we use
any parameter vector in the relevant space (for instance, those inducing stationarity and
                                                                                                LS (z t = xt ) when there are measurement errors or in a system of simultaneous equations.
variances which are strictly positive). Then, if the moment conditions (7.2) are true only at
the true parameter vector, β0 , (otherwise the parameters are “unidentified”) and that they
                                                                                                7.5.2   Asymptotic Normality
are continuous in β, then GMM is consistent. The idea is thus that GMM asymptotically                                                    √
solves                                                                                          To give the asymptotic distribution of T (β̂ − β0 ), we need to define three things. (As
                                                                                                                                     √
                                                                                                usual, we also need to scale with T to get a non-trivial asymptotic distribution; the
                                   0q×1 = plim m̄(β̂)                                           asymptotic distribution of β̂ − β0 is a spike at zero.) First, let S0 (a q × q matrix) denote
                                                                                                                                                                         √
                                         = E m(wt , β̂),                                        the asymptotic covariance matrix (as sample size goes to infinity) of T times the sample
                                                                                                moment conditions evaluated at the true parameters
which only holds at β̂ = β0 . Note that this is an application of Slutsky’s theorem.                                                     h√           i
                                                                                                                            S0 = ACov       T m̄ (β0 )                                 (7.12)
Remark 17 (Slutsky’s theorem.) If {x T } is a sequence of random matrices such that                                                      "       T
                                                                                                                                                               #
plim x T = x and g(x T ) a continuous function, then plim g(x T ) = g(x).                                                                   1 X
                                                                                                                               = ACov √             m(wt , β0 ) ,                      (7.13)
                                                                                                                                             T t=1
Example 18 (Consistency of 2SLS.) By using yt = xt0 β0 + u t , the first order conditions
                                                                                                where we use the definition of m̄ (β0 ) in (7.3). (To estimate S0 it is important to recognize
                                                                                                that it is a scaled sample average.) Second, let D0 (a q × k matrix) denote the probability
                                                                                                limit of the gradient of the sample moment conditions with respect to the parameters,




                                                                                          94                                                                                               95
evaluated at the true parameters                                                                      Proof. (The asymptotic distribution (7.16). Sketch of proof.) This proof is essentially
                                                 ∂ m̄(β0 )                                        an application of the delta rule. By the mean-value theorem the sample moment condition
                                     D0 = plim             .                            (7.14)    evaluated at the GMM estimate, β̂, is
                                                    ∂β 0
                                                                                                                                                             ∂ m̄(β1 )
Note that a similar gradient, but evaluated at β̂, also shows up in the first order conditions                                     m̄(β̂) = m̄(β0 ) +                  (β̂ − β0 )                         (7.17)
                                                                                                                                                                ∂β 0
(7.11). Third, let the weighting matrix be the inverse of the covariance matrix of the
moment conditions (once again evaluated at the true parameters)                                   for some values β1 between β̂ and β0 . (This point is different for different elements in
                                                                                                  m̄.) Premultiply with [∂ m̄(β̂)/∂β 0 ]0 W . By the first order condition (7.11), the left hand
                                          W = S0−1 .                                    (7.15)    side is then zero, so we have
                                                                                                                                   !0                       !0
It can be shown that this choice of weighting matrix gives the asymptotically most ef-                                    ∂ m̄(β̂)                 ∂ m̄(β̂)      ∂ m̄(β1 )
ficient estimator for a given set of orthogonality conditions. For instance, in 2SLS, this                      0k×1 =                W m̄(β 0 ) +             W           (β̂ − β0 ).    (7.18)
                                                                                                                            ∂β 0                     ∂β 0           ∂β 0
means a given set of instruments and (7.15) then shows only how to use these instruments                          √
in the most efficient way. Of course, another set of instruments might be better (in the          Multiply with       T and solve as
sense of giving a smaller Cov(β̂)).                                                                                            "               !0                   #−1               !0
                                                                                                       √                          ∂ m̄(β̂)            ∂ m̄(β1 )          ∂ m̄(β̂)         √
    With the definitions in (7.12) and (7.14) and the choice of weighting matrix in (7.15)              T β̂ − β0 = −                               W                                      W T m̄(β0 ).   (7.19)
                                                                                                                                      ∂β 0                 ∂β 0              ∂β 0
and the added assumption that the rank of D0 equals k (number of parameters) then we                                       |                                {z                              }
can show (under fairly general conditions) that                                                                                                             0

                √                d
                                                                       −1                       If
                    T (β̂ − β0 ) → N (0k×1 , V ), where V = D00 S0−1 D0     .           (7.16)                            ∂ m̄(β̂)   ∂ m̄(β0 )                  ∂ m̄(β1 )
                                                                                                                  plim             =           = D0 , then plim           = D0 ,
                                                                                                                            ∂β 0        ∂β 0                       ∂β 0
This holds also when the model is exactly identified, so we really do not use any weighting
                                                                                                  since β1 is between β0 and β̂. Then
matrix.
                                                                                                                                                                     −1
   To prove this note the following.                                                                                                plim 0 = − D00 W D0                    D00 W.                         (7.20)
                                                                                                                               √                √
Remark 19 (Continuous mapping theorem.) Let the sequences of random matrices {x T }               The last term in (7.19), T m̄(β0 ), is T times a vector of sample averages, so by a CLT
                                                                  d        p
and {yT }, and the non-random matrix {aT } be such that x T → x, yT → y, and aT → a               it converges in distribution to N(0, S0 ), where S0 is defined as in (7.12). By the rules of
                                                                                              d
(a traditional limit). Let g(x T , yT , aT ) be a continuous function. Then g(x T , yT , aT ) →   limiting distributions (see Remark 19) we then have that
g(x, y, a). Either of yT and aT could be irrelevant in g. (See Mittelhammer (1996) 5.3.)                      √             d
                                                                         √                                       T β̂ − β0 → plim 0 × something that is N (0, S0 ) , that is,
Example 20 For instance, the sequences in Remark 19 could be x T = T 6t=      T w /T ,
                                                                                  t                           √             d
                                                                                                                 T β̂ − β0 → N 0k×1 , (plim 0)S0 (plim 0 0 ) .
                                                                                                                                                               
the scaled sample average of a random variable wt ; yT = 6t=
                                                          T w 2 /T , the sample second
                                                             t
moment; and aT = 6t=1T 0.7t .


                                                  d
Remark 21 From the previous remark: if x T → x (a random variable) and plim Q T =
                                    d
Q (a constant matrix), then Q T x T → Qx.

                                                                                            96                                                                                                               97
The covariance matrix is then                                                                 7.6     Summary of GMM
             √
        ACov[ T (β̂ − β0 )] = (plim 0)S0 (plim 0 0 )
                                       −1 0                   −1 0 0                                    Economic model : Em(wt , β0 ) = 0q×1 , β is k × 1
                            = D00 W D0      D0 W S0 [ D00 W D0    D0 W ]            (7.21)
                                                                                                                                            T
                                         −1 0                      −1                                                                  1X
                                 0                    0      0
                                                                       .                                                                   m(wt , β)
                                       
                            = D0 W D0       D0 W S0 W D0 D0 W D0                    (7.22)    Sample moment conditions : m̄(β) =
                                                                                                                                        T
                                                                                                                                           t=1
If W = W 0 = S0−1 , then this expression simplifies to (7.16). (See, for instance, Hamilton                   Loss function : J = m̄(β)0 W m̄(β)
(1994) 14 (appendix) for more details.)                                                                                                                                  !0
                                                                                                                                      ∂ m̄(β̂)0 W m̄(β̂)      ∂ m̄(β̂)
    It is straightforward to show that the difference between the covariance matrix in                First order conditions : 0k×1 =                    =                    W m̄(β̂)
                       −1                                                                                                                  ∂β                 ∂β 0
(7.22) and D00 S0−1 D0       (as in (7.16)) is a positive semi-definite matrix: any linear
                                                                                                               Consistency : β̂ is typically consistent if Em(wt , β0 ) = 0
combination of the parameters has a smaller variance if W = S0−1 is used as the weight-                                                  h√            i                 ∂ m̄(β0 )
ing matrix.                                                                                                         Define : S0 = Cov        T m̄ (β0 ) and D0 = plim
                                                                                                                                                                            ∂β 0
    All the expressions for the asymptotic distribution are supposed to be evaluated at the
                                                                                                                   Choose: W = S0−1
true parameter vector β0 , which is unknown. However, D0 in (7.14) can be estimated by                                       √                                                   −1
                                                                                                                                           d
∂ m̄(β̂)/∂β 0 , where we use the point estimate instead of the true value of the parameter          Asymptotic distribution : T (β̂ − β0 ) → N (0k×1 , V ), where V = D00 S0−1 D0
vector. In practice, this means plugging in the point estimates into the sample moment
conditions and calculate the derivatives with respect to parameters (for instance, by a       7.7     Efficient GMM and Its Feasible Implementation
numerical method).
    Similarly, S0 in (7.13) can be estimated by, for instance, Newey-West’s estimator of      The efficient GMM (remember: for a given set of moment conditions) requires that we
      √
Cov[ T m̄(β̂)], once again using the point estimates in the moment conditions.                use W = S0−1 , which is tricky since S0 should be calculated by using the true (unknown)
                                                                                              parameter vector. However, the following two-stage procedure usually works fine:

                                                                                                 • First, estimate model with some (symmetric and positive definite) weighting matrix.
                                                                                                   The identity matrix is typically a good choice for models where the moment con-
                                                                                                   ditions are of the same order of magnitude (if not, consider changing the moment
                                                                                                   conditions). This gives consistent estimates of the parameters β. Then a consistent
                                                                                                   estimate Ŝ can be calculated (for instance, with Newey-West).

                                                                                                 • Use the consistent Ŝ from the first step to define a new weighting matrix as W =
                                                                                                   Ŝ −1 . The algorithm is run again to give asymptotically efficient estimates of β.

                                                                                                 • Iterate at least once more. (You may want to consider iterating until the point esti-
                                                                                                   mates converge.)




                                                                                        98                                                                                               99
Example 22 (Implementation of 2SLS.) Under the classical 2SLS assumptions, there is            should also be close to zero if the model is correct (fits data). Under the null hypothesis
                                                               −1 /σ 2 . Only σ 2 depends
no need for iterating since the efficient weighting matrix is 6zz                              that the moment conditions hold (so the overidentifying restrictions hold), we know that
                                                                                               √
on the estimated parameters, but this scaling factor of the loss function does not affect        T m̄ (β0 ) is a (scaled) sample average and therefore has (by a CLT) an asymptotic normal
β̂2S L S .                                                                                     distribution. It has a zero mean (the null hypothesis) and the covariance matrix in (7.12).
                                                                                               In short,
    One word of warning: if the number of parameters in the covariance matrix Ŝ is                                             √            d
                                                                                                                                  T m̄ (β0 ) → N 0q×1 , S0 .
                                                                                                                                                            
                                                                                                                                                                                     (7.25)
large compared to the number of data points, then Ŝ tends to be unstable (fluctuates a lot
                                                                                                   If would then perhaps be natural to expect that the quadratic form T m̄(β̂)0 S0−1 m̄(β̂)
between the steps in the iterations described above) and sometimes also close to singular.
                                                                                               should be converge in distribution to a χq2 variable. That is not correct, however, since β̂
The saturation ratio is sometimes used as an indicator of this problem. It is defined as the
                                                                                               chosen is such a way that k linear combinations of the first order conditions always (in
number of data points of the moment conditions (qT ) divided by the number of estimated
                                                                                               every sample) are zero. There are, in effect, only q −k nondegenerate random variables in
parameters (the k parameters in β̂ and the unique q(q + 1)/2 parameters in Ŝ if it is
                                                                                               the quadratic form (see Davidson and MacKinnon (1993) 17.6 for a detailed discussion).
estimated with Newey-West). A value less than 10 is often taken to be an indicator of
                                                                                               The correct result is therefore that if we have used optimal weight matrix is used, W =
problems. A possible solution is then to impose restrictions on S, for instance, that the
                                                                                               S0−1 , then
autocorrelation is a simple AR(1) and then estimate S using these restrictions (in which                                                    d
case you cannot use Newey-West, or course).                                                                             T m̄(β̂)0 S0−1 m̄(β̂) → χq−k
                                                                                                                                                 2
                                                                                                                                                     , if W = S0−1 .                 (7.26)

                                                                                               The left hand side equals T times of value of the loss function (7.8) evaluated at the point
7.8   Testing in GMM                                                                           estimates, so we could equivalently write what is often called the J test

The result in (7.16) can be used to do Wald tests of the parameter vector. For instance,                                     T J (β̂) ∼ χq−k
                                                                                                                                         2
                                                                                                                                             , if W = S0−1 .                         (7.27)
suppose we want to test the s linear restrictions that Rβ0 = r (R is s × k and r is s × 1)
                                                                                               This also illustrates that with no overidentifying restrictions (as many moment conditions
then it must be the case that under null hypothesis
                                                                                               as parameters) there are, of course, no restrictions to test. Indeed, the loss function value
                            √                d
                                T (R β̂ − r ) → N (0s×1 , RV R 0 ).                  (7.23)    is then always zero at the point estimates.

Remark 23 (Distribution of quadratic forms.) If the n × 1 vector x ∼ N (0, 6), then            Example 24 (Test of overidentifying assumptions in 2SLS.) In contrast to the IV method,
x 0 6 −1 x ∼ χn2 .                                                                             2SLS allows us to test overidentifying restrictions (we have more moment conditions than
                                                                                               parameters, that is, more instruments than regressors). This is a test of whether the residu-
    From this remark and the continuous mapping theorem in Remark (19) it follows that,        als are indeed uncorrelated with all the instruments. If not, the model should be rejected.
under the null hypothesis that Rβ0 = r , the Wald test statistics is distributed as a χs2      It can be shown that test (7.27) is (asymptotically, at least) the same as the traditional
variable                                                                                       (Sargan (1964), see Davidson (2000) 8.4) test of the overidentifying restrictions in 2SLS.
                                             −1             d
                       T (R β̂ − r )0 RV R 0     (R β̂ − r ) → χs2 .               (7.24)      In the latter, the fitted residuals are regressed on the instruments; T R 2 from that regres-
    We might also want to test the overidentifying restrictions. The first order conditions    sion is χ 2 distributed with as many degrees of freedom as the number of overidentifying
(7.11) imply that k linear combinations of the q moment conditions are set to zero by          restrictions.
solving for β̂. Therefore, we have q − k remaining overidentifying restrictions which
                                                                                               Example 25 (Results from GMM on CCAPM; continuing Example 6.) The instruments

                                                                                        100                                                                                             101
could be anything known at t or earlier could be used as instruments. Actually, Hansen                                 This covariance matrix has rank q − k (the number of overidentifying restriction). This
and Singleton (1982) and Hansen and Singleton (1983) use lagged Ri,t+1 ct+1 /ct as in-                                 distribution can be used to test hypotheses about the moments, for instance, that a partic-
struments, and estimate γ to be 0.68 to 0.95, using monthly data. However, T JT (β̂) is                                ular moment condition is zero.
large and the model can usually be rejected at the 5% significance level. The rejection                                    Proof. (Sketch of proof of (7.30)-(7.31)) Use (7.19) in (7.17) to get
is most clear when multiple asset returns are used. If T-bills and stocks are tested at the                                                 √                √        √ ∂ m̄(β1 )
same time, then the rejection would probably be overwhelming.                                                                                   T m̄(β̂) =       T m̄(β0 ) +
                                                                                                                                                                       T          0 m̄(β0 )
                                                                                                                                                                           ∂β 0
                                                                                                                                                             ∂ m̄(β1 ) √
                                                                                                                                                                       
    Another test is to compare a restricted and a less restricted model, where we have                                                                  = I+          0    T m̄(β0 ).
                                                                                                                                                                ∂β 0
used the optimal weighting matrix for the less restricted model in estimating both the less
                                                                                                                                                                                                             −1
restricted and more restricted model (the weighting matrix is treated as a fixed matrix in                             The term in brackets has a probability limit, which by (7.20) equals I −D0 D00 W D0         D00 W .
                                                                                                                             √
                                                                                                                       Since T m̄(β0 ) →d N 0q×1 , S0 we get (7.30).
                                                                                                                                                         
the latter case). It can be shown that the test of the s restrictions (the “D test”, similar in
flavour to an LR test), is
                                                                                                                       Remark 26 If the n × 1 vector X ∼ N (0, 6), where 6 has rank r ≤ n then Y =
                  T [J (β̂   r estricted
                                           ) − J (β̂   less r estricted
                                                                          )] ∼ χs2 , if W = S0−1 .            (7.28)   X 0 6 + X ∼ χr2 where 6 + is the pseudo inverse of 6.

                                                                                                                       Remark 27 The symmetric 6 can be decomposed as 6 = Z 3Z 0 where Z are the or-
The weighting matrix is typically based on the unrestricted model. Note that (7.27) is a                                                      0
                                                                                                                       thogonal eigenvector (Z Z = I ) and 3 is a diagonal matrix with the eigenvalues along
special case, since the model with allows q non-zero parameters (as many as the moment
                                                                                                                       the main diagonal. The pseudo inverse can then be calculated as 6 + = Z 3+ Z 0 , where
conditions) always attains J = 0, and that by imposing s = q − k restrictions we get a
                                                                                                                                                              "           #
restricted model.                                                                                                                                                3−1   0
                                                                                                                                                       3 =
                                                                                                                                                         +         11       ,
                                                                                                                                                                   0 0
7.9     GMM with Sub-Optimal Weighting Matrix∗
                                                                                                                       with the reciprocals of the non-zero eigen values along the principal diagonal of 3−1
                                                                                                                                                                                                          11 .

When the optimal weighting matrix is not used, that is, when (7.15) does not hold, then                                    This remark and (7.31) implies that the test of overidentifying restrictions (Hansen’s
the asymptotic covariance matrix of the parameters is given by (7.22) instead of the result                            J statistics) analogous to (7.26) is
in (7.16). That is,
                                                                                                                                                                               d
 √                                                                                                                                                     T m̄(β̂)0 9 + m̄(β̂) → χq−k
                                                                                                                                                                               2
                                                                                                                                                                                   .                         (7.32)
                  d                                                          −1                              −1
      T (β̂ − β0 ) → N (0k×1 , V2 ), where V2 = D00 W D0                           D00 W S0 W 0 D0 D00 W D0       .
                                                                                                              (7.29)   It requires calculation of a generalized inverse (denoted by superscript + ), but this is
The consistency property is not affected.                                                                              fairly straightforward since 9 is a symmetric matrix. It can be shown (a bit tricky) that
    The test of the overidentifying restrictions (7.26) and (7.27) are not longer valid. In-                           this simplifies to (7.26) when the optimal weighting matrix is used.
stead, the result is that
      √                                                                                                                7.10    GMM without a Loss Function∗
          T m̄(β̂) →d N 0q×1 , 9 , with
                                
                                                                                                              (7.30)
                                     −1 0                        −1 0 0
                9 = [I − D0 D00 W D0    D0 W ]S0 [I − D0 D00 W D0    D0 W ] .                                 (7.31)   Suppose we sidestep the whole optimization issue and instead specify k linear combi-
                                                                                                                       nations (as many as there are parameters) of the q moment conditions directly. That is,

                                                                                                                102                                                                                            103
instead of the first order conditions (7.11) we postulate that the estimator should solve        but the model is so non-linear that we cannot find a closed form expression for Var of model(β0 ).
                                                                                                     The SME involves (i) drawing a set of random numbers for the stochastic shocks in
                                      A m̄(β̂) (β̂ is k × 1).
                              0k×1 = |{z}                                              (7.33)    the model; (ii) for a given set of parameter values generate a model simulation with Tsim
                                         | {z }
                                       k×q q×1
                                                                                                 observations, calculating the moments and using those instead of Var of model(β0 ) (or
The matrix A is chosen by the researcher and it must have rank k (lower rank means that          similarly for other moments), which is then used to evaluate the loss function JT . This is
we effectively have too few moment conditions to estimate the k parameters in β). If A           repeated for various sets of parameter values until we find the one which minimizes JT .
is random, then it should have a finite probability limit A0 (also with rank k). One simple          Basically all GMM results go through, but the covariance matrix should be scaled up
case when this approach makes sense is when we want to use a subset of the moment                with 1 + T /Tsim , where T is the sample length. Note that one must use exactly the same
conditions to estimate the parameters (some columns in A are then filled with zeros), but        random numbers for all simulations.
we want to study the distribution of all the moment conditions.
     By comparing (7.11) and (7.33) we see that A plays the same role as [∂ m̄(β̂)/∂β 0 ]0 W ,
but with the difference that A is chosen and not allowed to depend on the parameters.
                                                                                                 Bibliography
In the asymptotic distribution, it is the probability limit of these matrices that matter, so    Cochrane, J. H., 2001, Asset Pricing, Princeton University Press, Princeton, New Jersey.
we can actually substitute A0 for D00 W in the proof of the asymptotic distribution. The
covariance matrix in (7.29) then becomes                                                         Davidson, J., 2000, Econometric Theory, Blackwell Publishers, Oxford.
                      √                                                                          Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,
                 ACov[ T (β̂ − β0 )] = (A0 D0 )−1 A0 S0 [(A0 D0 )−1 A0 ]0
                                                                                                   Oxford University Press, Oxford.
                                       = (A0 D0 )−1 A0 S0 A00 [(A0 D0 )−1 ]0 ,         (7.34)
                                                                                                 Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
which can be used to test hypotheses about the parameters.
                                                                                                   Jersey, 4th edn.
   Similarly, the covariance matrix in (7.30) becomes
            √                                                                                    Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.
       ACov[ T m̄(β̂)] = [I − D0 (A0 D0 )−1 A0 ]S0 [I − D0 (A0 D0 )−1 A0 ]0 ,          (7.35)
                                                                                                 Hansen, L., and K. Singleton, 1982, “Generalized Instrumental Variables Estimation of
which still has reduced rank. As before, this covariance matrix can be used to construct           Nonlinear Rational Expectations Models,” Econometrica, 50, 1269–1288.
both t type and χ 2 tests of the moment conditions.
                                                                                                 Hansen, L., and K. Singleton, 1983, “Stochastic Consumption, Risk Aversion and the
                                                                                                   Temporal Behavior of Asset Returns,” Journal of Political Economy, 91, 249–268.
7.11    Simulated Moments Estimator∗
                                                                                                 Harris, D., and L. Matyas, 1999, “Introduction to the Generalized Method of Moments
Reference: Ingram and Lee (1991)                                                                   Estimation,” in Laszlo Matyas (ed.), Generalized Method of Moments Estimation .
    It sometimes happens that it is not possible to calculate the theoretical moments in           chap. 1, Cambridge University Press.
GMM explicitly. For instance, suppose we want to match the variance of the model with
the variance of data                                                                             Hayashi, F., 2000, Econometrics, Princeton University Press.

                 E f (xt , z t , β0 ) = E (xt − µ)2 − Var of model (β0 ) = 0,

                                                                                          104                                                                                           105
Ingram, B.-F., and B.-S. Lee, 1991, “‘Simulation Estimation of Time-Series Models,”
  Journal of Econometrics, 47, 197–205.

Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th         8       Examples and Applications of GMM
  edn.

Mittelhammer, R. C., 1996, Mathematical Statistics for Economics and Business,              8.1     GMM and Classical Econometrics: Examples
 Springer-Verlag, New York.
                                                                                            8.1.1    The LS Estimator (General)
Ogaki, M., 1993, “Generalized Method of Moments: Econometric Applications,” in G. S.        The model is
  Maddala, C. R. Rao, and H. D. Vinod (ed.), Handbook of Statistics, vol. 11, . chap. 17,                                            yt = xt0 β0 + u t ,                          (8.1)
  pp. 455–487, Elsevier.
                                                                                            where β is a k × 1 vector.
Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,          The k moment conditions are
  Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.                                                                      T                             T            T
                                                                                                                       1X                   1X         1X
                                                                                                           m̄ (β) =       xt (yt − xt0 β) =    xt yt −    xt xt0 β.               (8.2)
Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.                                                  T                    T          T
                                                                                                                         t=1                           t=1          t=1

                                                                                            The point estimates are found by setting all moment conditions to zero (the model is
                                                                                            exactly identified), m̄ (β) = 0k×1 , which gives

                                                                                                                                      T
                                                                                                                                                !−1         T
                                                                                                                                   1X                 1X
                                                                                                                         β̂ =         xt xt0             xt yt β.                 (8.3)
                                                                                                                                   T                  T
                                                                                                                                     t=1                    t=1

                                                                                                If we define
                                                                                                                              h√                  √ T                !
                                                                                                                                        i           T X
                                                                                                               S0 = ACov      T m̄ (β0 ) = ACov               xt u t              (8.4)
                                                                                                                                                   T
                                                                                                                                                          t=1
                                                                                                                                                T
                                                                                                                                                           !
                                                                                                                         ∂ m̄(β0 )           1X
                                                                                                               D0 = plim           = plim  −       x t x 0
                                                                                                                                                             = −6x x .            (8.5)
                                                                                                                            ∂β 0             T
                                                                                                                                                            t=1
                                                                                                                                            √
                                                                                            then the asymptotic covariance matrix of            T (β̂ − β0 )
                                                                                                                                  −1                    −1
                                                                                                           VL S = D00 S0−1 D0            = 6x0 x S0−1 6x x     = 6x−1
                                                                                                                                                                    x S0 6x x .
                                                                                                                                                                          −1
                                                                                                                                                                                  (8.6)

                                                                                            We can then either try to estimate S0 by Newey-West, or make further assumptions to
                                                                                            simplify S0 (see below).


                                                                                     106                                                                                           107
8.1.2 The IV/2SLS Estimator (General)                                                                                       When the model is exactly identified (q = k), then we can make some simplifications
                                                                                                                        since 6̂x z is then invertible. This is the case of the classical IV estimator. We get
The model is (8.1), but we use an IV/2SLS method. The q moment conditions (with
q ≥ k) are                                                                                                                                                                            −1
                                                                                                                                             β̂ = 6̂zx
                                                                                                                                                    −1
                                                                                                                                                       6̂zy and V = 6zx
                                                                                                                                                                     −1
                                                                                                                                                                        S0 6zx
                                                                                                                                                                            0
                                                                                                                                                                                            if q = k.             (8.14)
                             T                              T                        T
                            1X                             1X                       1X                                  (Use the rule (ABC)−1 = C −1 B −1 A−1 to show this.)
                 m̄ (β) =             z t (yt − xt0 β) =                z t yt −              z t xt0 β.        (8.7)
                            T                              T                        T
                                t=1                             t=1                     t=1
                                                                                                                        8.1.3   Classical LS Assumptions
    The loss function is (for some positive definite weighting matrix W , not necessarily
the optimal)                                                                                                            Reference: Greene (2000) 9.4 and Hamilton (1994) 8.2.
                                "          T
                                                               #0        "      T
                                                                                                           #                This section returns to the LS estimator in Section (8.1.1) in order to highlight the
                                    1X                                       1X
             m̄(β)0 W m̄(β) =          z t (yt − xt0 β)             W           z t (yt − xt0 β) ,              (8.8)   classical LS assumptions that give the variance matrix σ 2 6x−1   x.
                                    T                                        T
                                       t=1                                     t=1                                          We allow the regressors to be stochastic, but require that xt is independent of all u t+s
                                                                                                                        and that u t is iid. It rules out, for instance, that u t and xt−2 are correlated and also that
and the k first order conditions, (∂ m̄(β̂)/∂β 0 )0 W m̄(β̂) = 0, are
                                                                                                                        the variance of u t depends on xt . Expand the expression for S0 as
                            "     T
                                                       #0         T
                            ∂ 1X                              1X                                                                              √ T             ! √ T
                                          (y     0
                                                   β̂)                 z t (yt − xt0 β̂)
                                                                                                                                                                                 !
                 0k×1 =                z t t − x          W                                                                                      T X               T X
                           ∂β T
                              0                  t
                                                              T                                                                   S0 = E               xt u t            u t xt0                                 (8.15)
                                 t=1                             t=1                                                                           T                  T
                         "      T
                                          #0        T                                                                                              t=1                t=1
                             1  X              1   X
                                                                                                                                      1
                        = −        z t xt0 W            z t (yt − xt0 β̂)                                                            = E (... + xs−1 u s−1 + xs u s + ...) ... + u s−1 xs−1
                                                                                                                                                                                        0
                                                                                                                                                                                            + u s xs0 + ... .
                                                                                                                                                                                                           
                             T                T                                                                                       T
                                     t=1               t=1

                        = −6̂x z W (6̂zy − 6̂zx β̂).                                                            (8.9)   Note that

We solve for β̂ as                                                                                                                  Ext−s u t−s u t xt0 = Ext−s xt0 Eu t−s u t (since u t and xt−s independent)
                                                  −1
                                 β̂ = 6̂x z W 6̂zx     6̂x z W 6̂zy .
                                                                                                                                                          (
                                                                                                               (8.10)                                       0 if s 6 = 0 (since Eu s−1 u s = 0 by iid u t )
                                                                                                                                                        =                                                         (8.16)
    Define                                                                                                                                                  Ext xt0 Eu t u t else.

                                     h√                 √ T               !
                                                                                                                        This means that all cross terms (involving different observations) drop out and that we
                                              i            T X
                     S0 = ACov      T m̄ (β0 ) = ACov              zt u t                                      (8.11)   can write
                                                         T
                                                               t=1
                                                      T
                                                               !                                                                                         T
                               ∂ m̄(β0 )           1X 0                                                                                            1X
                     D0 = plim           = plim −        z t xt = −6zx .                                       (8.12)                       S0 =      Ext xt0 Eu 2t                                               (8.17)
                                  ∂β 0             T                                                                                               T
                                                                                                                                                         t=1
                                                                    t=1
                                                                                                                                                               T
                                                                    √                                                                              1 X
    This gives the asymptotic covariance matrix of                      T (β̂ − β0 )                                                           = σ2 E  xt xt0 (since u t is iid and σ 2 = Eu 2t )                 (8.18)
                                                                                                                                                   T
                                               −1                               −1                                                                         t=1
                          V = D00 S0−1 D0             = 6zx
                                                         0
                                                            S0−1 6zx                     .                     (8.13)                          = σ 2 6x x .                                                       (8.19)



                                                                                                                 108                                                                                                109
   Using this in (8.6) gives                                                                  8.1.5   Estimating the Mean of a Process
                                        V = σ 2 6x−1
                                                   x.                               (8.20)
                                                                                              Suppose u t is heteroskedastic, but not autocorrelated. In the regression yt = α + u t ,
                                                                                              xt = z t = 1. This is a special case of the previous example, since Eu 2t is certainly
8.1.4   Almost Classical LS Assumptions: White’s Heteroskedasticity.
                                                                                              unrelated to Ext xt0 = 1 (since it is a constant). Therefore, the LS covariance matrix
Reference: Greene (2000) 12.2 and Davidson and MacKinnon (1993) 16.2.                         is the correct variance of the sample mean as an estimator of the mean, even if u t are
    The only difference compared with the classical LS assumptions is that u t is now         heteroskedastic (provided there is no autocorrelation).
allowed to be heteroskedastic, but this heteroskedasticity is not allowed to depend on the
moments of xt . This means that (8.17) holds, but (8.18) does not since Eu 2t is not the      8.1.6   The Classical 2SLS Assumptions∗
same for all t.
                                                                                              Reference: Hamilton (1994) 9.2.
    However, we can still simplify (8.17) a bit more. We assumed that Ext xt0 and Eu 2t
                                                                                                 The classical 2SLS case assumes that z t is independent of all u t+s and that u t is iid.
(which can both be time varying) are not related to each other, so we could perhaps mul-
                                                                                              The covariance matrix of the moment conditions are
tiply Ext xt0 by 6t=1
                  T Eu 2 /T instead of by Eu 2 . This is indeed true asymptotically—where
                       t                      t
                                                                                                                                   T                 T
                                                                                                                                            !                 !
any possible “small sample” relation between Ext xt0 and Eu 2t must wash out due to the                                       1 X                1 X 0
                                                                                                                    S0 = E √         zt u t    √        u t zt ,                   (8.22)
assumptions of independence (which are about population moments).                                                              T t=1              T t=1
    In large samples we therefore have
                                                                                              so by following the same steps in (8.16)-(8.19) we get S0 = σ 2 6zz .The optimal weighting
                                       T               T
                                                !                  !
                                   1X 2            1X                                         matrix is therefore W = 6zz −1 /σ 2 (or (Z 0 Z /T )−1 /σ 2 in matrix form). We use this result
                           S0 =           Eu t             Ext xt0
                                   T               T                                          in (8.10) to get
                                      t=1             t=1                                                                                        −1
                                       T                 T                                                            β̂2S L S = 6̂x z 6̂zz
                                                                                                                                          −1
                                                                                                                                             6̂zx     6̂x z 6̂zz
                                                                                                                                                              −1
                                                                                                                                                                 6̂zy ,              (8.23)
                                                !                  !
                                   1 X
                                             2       1X          0
                              =           Eu t    E         xt xt
                                   T                 T                                        which is the classical 2SLS estimator.
                                       t=1              t=1

                               = ω 6x x ,
                                   2
                                                                                    (8.21)        Since this GMM is efficient (for a given set of moment conditions), we have estab-
                                                                                              lished that 2SLS uses its given set of instruments in the efficient way—provided the clas-
where ω2 is a scalar. This is very similar to the classical LS case, except that ω2 is        sical 2SLS assumptions are correct. Also, using the weighting matrix in (8.13) gives
the average variance of the residual rather than the constant variance. In practice, the                                                        −1
                                                                                                                                       1 −1
estimator of ω2 is the same as the estimator of σ 2 , so we can actually apply the standard                                   V = 6x z 2 6zz 6zx     .                               (8.24)
                                                                                                                                      σ
LS formulas in this case.
    This is the motivation for why White’s test for heteroskedasticity makes sense: if the
                                                                                              8.2     Identification of Systems of Simultaneous Equations
heteroskedasticity is not correlated with the regressors, then the standard LS formula is
correct (provided there is no autocorrelation).                                               Reference: Greene (2000) 16.1-3
                                                                                                  This section shows how the GMM moment conditions can be used to understand if
                                                                                              the parameters in a system of simultaneous equations are identified or not.




                                                                                       110                                                                                              111
    The structural model (form) is                                                                      We can then rewrite the moment conditions in (8.27) as
                                                                                                                                    "      #        "      #0 !
                                        F yt + Gz t = u t ,                                   (8.25)                                  z̃ t            z̃ t
                                                                                                                                  E          y jt −          β = 0.                          (8.28)
                                                                                                                                      z t∗            ỹt
where yt is a vector of endogenous variables, z t a vector of predetermined (exogenous)
variables, F is a square matrix, and G is another matrix.1 We can write the jth equation
of the structural form (8.25) as                                                                                                  y jt = −G j z̃ t − F j ỹt + u jt
                                     y jt = xt0 β + u jt ,                        (8.26)                                              = xt0 β + u jt , where xt0 = z̃ t0 , ỹt0 ,
                                                                                                                                                                              
                                                                                                                                                                                             (8.29)
where xt contains the endogenous and exogenous variables that enter the jth equation
                                                                                                        This shows that we need at least as many elements in z t∗ as in ỹt to have this equations
with non-zero coefficients, that is, subsets of yt and z t .
                                                                                                        identified, which confirms the old-fashioned rule of thumb: there must be at least as
    We want to estimate β in (8.26). Least squares is inconsistent if some of the regressors
                                                                                                        many excluded exogenous variables (z t∗ ) as included endogenous variables ( ỹt ) to have
are endogenous variables (in terms of (8.25), this means that the jth row in F contains
                                                                                                        the equation identified.
at least one additional non-zero element apart from coefficient on y jt ). Instead, we use
                                                                                                            This section has discussed identification of structural parameters when 2SLS/IV, one
IV/2SLS. By assumption, the structural model summarizes all relevant information for
                                                                                                        equation at a time, is used. There are other ways to obtain identification, for instance, by
the endogenous variables yt . This implies that the only useful instruments are the vari-
                                                                                                        imposing restrictions on the covariance matrix. See, for instance, Greene (2000) 16.1-3
ables in z t . (A valid instrument is uncorrelated with the residuals, but correlated with the
                                                                                                        for details.
regressors.) The moment conditions for the jth equation are then
                                                       T                                                Example 1 (Supply and Demand. Reference: GR 16, Hamilton 9.1.) Consider the sim-
                                                     1X
 Ez t y jt − xt0 β = 0 with sample moment conditions     z t y jt − xt0 β = 0. (8.27)
                                                                        
                                                     T                                                  plest simultaneous equations model for supply and demand on a market. Supply is
                                                                  t=1

    If there are as many moment conditions as there are elements in β, then this equation                                                 qt = γ pt + u st , γ > 0,
is exactly identified, so the sample moment conditions can be inverted to give the Instru-
                                                                                                        and demand is
mental variables (IV) estimator of β. If there are more moment conditions than elements
                                                                                                                                      qt = βpt + α At + u dt , β < 0,
in β, then this equation is overidentified and we must devise some method for weighting
the different moment conditions. This is the 2SLS method. Finally, when there are fewer                 where At is an observable exogenous demand shock (perhaps income). The only mean-
moment conditions than elements in β, then this equation is unidentified, and we cannot                 ingful instrument is At . From the supply equation we then get the moment condition
hope to estimate the structural parameters of it.
                                                                                                                                            EAt (qt − γ pt ) = 0,
    We can partition the vector of regressors in (8.26) as xt0 = [z̃ t0 , ỹt0 ], where y1t and z 1t
are the subsets of z t and yt respectively, that enter the right hand side of (8.26). Partition z t     which gives one equation in one unknown, γ . The supply equation is therefore exactly
conformably z t0 = [z̃ t0 , z t∗0 ], where z t∗ are the exogenous variables that do not enter (8.26).   identified. In contrast, the demand equation is unidentified, since there is only one (mean-
   1 By premultiplying with F −1 and rearranging we get the reduced form y = 5z + ε , with 5 = −F −1
                                                                          t    t   t
                                                                                                        ingful) moment condition
and Cov(εt ) = F −1 Cov(u t )(F −1 )0 .                                                                                                 EAt (qt − βpt − α At ) = 0,

                                                                                                        but two unknowns (β and α).

                                                                                                112                                                                                             113
Example 2 (Supply and Demand: overidentification.) If we change the demand equation                   We have an exactly identified system so the weight matrix does not matter—we can
in Example 1 to                                                                                   then proceed as if we had used the optimal weighting matrix (all those results apply).
                      qt = βpt + α At + bBt + u dt , β < 0.                                           To find the asymptotic covariance matrix of the parameters estimators, we need the
                                                                                                  probability limit of the Jacobian of the moments and the covariance matrix of the moments—
There are now two moment conditions for the supply curve (since there are two useful
                                                                                                  evaluated at the true parameter values. Let m̄ i (β0 ) denote the ith element of the m̄(β)
instruments)              "                  # " #
                             At (qt − γ pt )       0                                              vector—evaluated at the true parameter values. The probability of the Jacobian is
                        E                     =        ,
                             Bt (qt − γ pt )       0
                                                                                                                 "                                    # "            # "                 #
                                                                                                                    ∂ m̄ 1 (β0 )/∂σ 2 ∂ m̄ 1 (β0 )/∂ρ     −1     0          −1      0
                                                                                                     D0 = plim                                         =               =                   ,
but still only one parameter: the supply curve is now overidentified. The demand curve is                           ∂ m̄ 2 (β0 )/∂σ 2 ∂ m̄ 2 (β0 )/∂ρ     −ρ −σ 2            0 −σ 2
still underidentified (two instruments and three parameters).                                                                                                                           (8.31)
                                                                                                  since ρ = 0 (the true value). Note that we differentiate with respect to σ 2 , not σ , since
8.3    Testing for Autocorrelation                                                                we treat σ 2 as a parameter.
                                                                                                      The covariance matrix is more complicated. The definition is
This section discusses how GMM can be used to test if a series is autocorrelated. The                                             "√               # "√ T            #0
                                                                                                                                        T
                                                                                                                                      T X               T X
analysis focuses on first-order autocorrelation, but it is straightforward to extend it to                               S0 = E           m t (β0 )         m t (β0 ) .
                                                                                                                                     T                 T
higher-order autocorrelation.                                                                                                            t=1                    t=1
     Consider a scalar random variable xt with a zero mean (it is easy to extend the analysis     Assume that there is no autocorrelation in m t (β0 ). We can then simplify as
to allow for a non-zero mean). Consider the moment conditions
           "                   #                   T
                                                      "                 #            "      #                                          S0 = E m t (β0 )m t (β0 )0 .
             xt2 − σ 2                         1 X xt2 − σ 2                            σ2
m t (β) =                        , so m̄(β) =                             , with β =          .
             xt xt−1 − ρσ 2                    T
                                                  t=1
                                                        xt xt−1 − ρσ 2                  ρ         This assumption is stronger than assuming that ρ = 0, but we make it here in order to
                                                                                        (8.30)    illustrate the asymptotic distribution. To get anywhere, we assume that xt is iid N (0, σ 2 ).
σ 2 is the variance and ρ the first-order autocorrelation so ρσ 2 is the first-order autoco-      In this case (and with ρ = 0 imposed) we get
variance. We want to test if ρ = 0. We could proceed along two different routes: estimate                      "             #"              #0      "                                            #
ρ and test if it is different from zero or set ρ to zero and then test overidentifying restric-                   xt2 − σ 2       xt2 − σ 2               (xt2 − σ 2 )2      (xt2 − σ 2 )xt xt−1
                                                                                                       S0 = E                                   =E
tions. We analyze how these two approaches work when the null hypothesis of ρ = 0 is                              xt xt−1         xt xt−1              (xt2 − σ 2 )xt xt−1       (xt xt−1 )2
                                                                                                             "                                        # "                 #
true.                                                                                                           E xt4 − 2σ 2 E xt2 + σ 4        0              2σ 4 0
                                                                                                          =                                             =                   .                    (8.32)
                                                                                                                            0                   2 2
                                                                                                                                            E xt xt−1           0 σ4
8.3.1 Estimating the Autocorrelation Coefficient
                                                                                                  To make the simplification in the second line we use the facts that E xt4 = 3σ 4 if xt ∼
We estimate both σ 2 and ρ by using the moment conditions (8.30) and then test if ρ =             N (0, σ 2 ), and that the normality and the iid properties of xt together imply E xt2 xt−1
                                                                                                                                                                                         2   =
0. To do that we need to calculate the asymptotic variance of ρ̂ (there is little hope of                  2 and E x 3 x
                                                                                                  E xt2 E xt−1          t t−1 = E σ 2x x
                                                                                                                                      t t−1 =  0.
being able to calculate the small sample variance, so we have to settle for the asymptotic
variance as an approximation).



                                                                                          114                                                                                                     115
   By combining (8.31) and (8.32) we get that                                                    The only parameter in this estimation problem is σ 2 , so the matrix of derivatives
              "       #!                                                                      becomes
          √      σ̂ 2                 −1                                                                                     "                   # "      #
                                                                                                                                ∂ m̄ 1 (β0 )/∂σ 2
                            0
   ACov     T            = D0 S0−1 D0                                                                                                                  −1
                                                                                                                  D0 = plim                        =         .                (8.36)
                 ρ̂                                                                                                             ∂ m̄ 2 (β0 )/∂σ 2       0
                           "              #0 "        #−1 "        #−1
                                −1    0         2σ 4 0       −1 0                             By using this result, the A matrix in (8.36) and the S0 matrix in (8.32,) it is straighforward
                         =                                          
                                                                                              to calculate the asymptotic covariance matrix the moment conditions. In general, we have
                                 0 −σ 2          0 σ4        0 −σ 2
                           "          #                                                                  √
                              2σ 4 0                                                                ACov[ T m̄(β̂)] = [I − D0 (A0 D0 )−1 A0 ]S0 [I − D0 (A0 D0 )−1 A0 ]0 .                        (8.37)
                         =              .                              (8.33)
                               0 1
                                                                                              The term in brackets is here (since A0 = A since it is a matrix with constants)
                                                                                   √
This shows the standard expression for the uncertainty of the variance and that the T ρ̂.                                                          −1
                                                                               √
                                                                                                                               
Since GMM estimators typically have an asymptotic distribution we have T ρ̂ →d                       "     # "    #      "    #                                           "          #
                                                                                                       1 0     −1       i −1                                                 0 0
N (0, 1), so we can test the null hypothesis of no first-order autocorrelation by the test
                                                                                                                    h                                    h    i
                                                                                                                                                                                          .
                                                                                                                                 
                                                                                                            −       1 0                                 1 0 =                                   (8.38)
statistics                                                                                             0 1      0  | {z } 0 
                                                                                                                                
                                                                                                                                                         | {z }                0 1
                                                                                                     | {z } | {z }    A0  | {z }                             A0
                                       T ρ̂ 2 ∼ χ12 .                               (8.34)               I2           D0                    D0

This is the same as the Box-Ljung test for first-order autocorrelation.                       We therefore get
    This analysis shows that we are able to arrive at simple expressions for the sampling                                  "         #"            #"             #0       "          #
                                                                                                         √                     0 0        2σ 4 0         0 0                   0 0
uncertainty of the variance and the autocorrelation—provided we are willing to make                 ACov[ T m̄(β̂)] =                                                  =                      .   (8.39)
                                                                                                                               0 1         0 σ4          0 1                   0 σ4
strong assumptions about the data generating process. In particular, ewe assumed that
data was iid N (0, σ 2 ). One of the strong points of GMM is that we could perform similar    Note that the first moment condition has no sampling variance at the estimated parameters,
tests without making strong assumptions—provided we use a correct estimator of the            since the choice of σ̂ 2 always sets the first moment condition equal to zero.
asymptotic covariance matrix S0 (for instance, Newey-West).                                       The test of the overidentifying restriction that the second moment restriction is also
                                                                                              zero is                                   √        +
8.3.2   Testing the Overidentifying Restriction of No Autocorrelation∗                                                     T m̄ 0 ACov[ T m̄(β̂)] m̄ ∼ χ12 ,                      (8.40)

We can estimate σ 2 alone and then test if both moment condition are satisfied at ρ = 0.      where we have to use a generalized inverse if the covariance matrix is singular (which it
There are several ways of doing that, but the perhaps most straightforward is skip the loss   is in (8.39)).
function approach to GMM and instead specify the “first order conditions” directly as              In this case, we get the test statistics (note the generalized inverse)
                                                                                                     "                   #0 "             #"                   #                       2
                                                                                                                                                                       6t=1 xt xt−1 /T
                                                                                                                                                                       T
                           0 = Am̄                                                                      0                      0     0         0
                                                                                                   T                                                             =  T                     ,
                                             T
                                                      "               #                                 6t=1   t t−1 /T
                                                                                                           T x x               0 1/σ 4         6t=1
                                                                                                                                                 T x x
                                                                                                                                                      t t−1 /T               σ4
                                 h         i1X            xt2 − σ 2
                             =       1 0                                  ,         (8.35)                                                                                              (8.41)
                                           T              xt xt−1
                                                t=1                                           which is the T times the square of the sample covariance divided by σ 4 . A sample cor-
which sets σ̂ 2 equal to the sample variance.                                                 relation, ρ̂, would satisfy 6t=1T x x
                                                                                                                                   t t−1 /T = ρ̂ σ̂ , which we can use to rewrite (8.41) as
                                                                                                                                                    2

                                                                                              T ρ̂ σ̂ /σ . By approximating σ by σ̂ we get the same test statistics as in (8.34).
                                                                                                  2  4    4                        4      4



                                                                                       116                                                                                                          117
8.4    Estimating and Testing a Normal Distribution                                              which can be a very messy expression. Assume that there is no autocorrelation in m t (β0 ),
                                                                                                 which would certainly be true if xt is iid. We can then simplify as
8.4.1 Estimating the Mean and Variance
                                                                                                                                  S0 = E m t (β0 )m t (β0 )0 ,                       (8.45)
This section discusses how the GMM framework can be used to test if a variable is nor-
mally distributed. The analysis cold easily be changed in order to test other distributions      which is the form we use here for illustration. We therefore have (provided m t (β0 ) is not
as well.                                                                                         autocorrelated)
    Suppose we have a sample of the scalar random variable xt and that we want to test if                                                            0                                   
the series is normally distributed. We analyze the asymptotic distribution under the null                           xt − µ                     xt − µ                 σ2      0     3σ 4      0
                                                                                                           (xt − µ)2 − σ 2   (xt − µ)2 − σ 2                        2σ 4            12σ 6 
                                                                                                                                                                                         
hypothesis that xt is N (µ, σ 2 ).                                                                                                                          =  0                    0          .
                                                                                                                                                                   
                                                                                                 S0 = E                         
    We specify four moment conditions
                                                                                                          
                                                                                                                 (xt − µ)3       
                                                                                                                                  
                                                                                                                                             (xt − µ)3    
                                                                                                                                                           
                                                                                                                                                             
                                                                                                                                                                    3σ
                                                                                                                                                                       4     0    15σ 6      0  
                                                                                                           (xt − µ)4 − 3σ 4           (xt − µ)4 − 3σ 4             0 12σ 6         0    96σ 8
                  xt − µ                               xt − µ                                                                                                                         (8.46)
                                                  T 
                (xt − µ)2 − σ 2                     (xt − µ)2 − σ 2 
                                                                        
                                     so m̄ = 1                                                  It is straightforward to derive this result once we have the information in the following
                                                 X
         mt =  (x − µ)3
                                                                                   (8.42)
                t
                                    
                                              T     
                                                 t=1 
                                                       (xt − µ)3          
                                                                                                remark.
                  (xt − µ)4 − 3σ 4                     (xt − µ)4 − 3σ 4
                                                                                                 Remark 3 If X ∼ N (µ, σ 2 ), then the first few moments around the mean of a are E(X −
Note that E m t = 04×1 if xt is normally distributed.                                            µ) = 0, E(X − µ)2 = σ 2 , E(X − µ)3 = 0 (all odd moments are zero), E(X − µ)4 = 3σ 4 ,
    Let m̄ i (β0 ) denote the ith element of the m̄(β) vector—evaluated at the true parameter    E(X − µ)6 = 15σ 6 , and E(X − µ)8 = 105σ 8 .
values. The probability of the Jacobian is
                                                                                                   Suppose we use the efficient weighting matrix. The asymptotic covariance matrix of
                         ∂ m̄ 1 (β0 )/∂µ ∂ m̄ 1 (β0 )/∂σ 2
                                                                                                 the estimated mean and variance is then ((D00 S0−1 D0 )−1 )
                       ∂ m̄ 2 (β0 )/∂µ ∂ m̄ 2 (β0 )/∂σ 2 
                                                          
       D0 = plim      ∂ m̄ (β )/∂µ ∂ m̄ (β )/∂σ 2 
                                                                                                             0                         −1             −1
                              3 0             3 0
                                                                                                   −1    0         σ 2   0    3σ  4   0         −1    0
                         ∂ m̄ 4 (β0 )/∂µ ∂ m̄ 4 (β0 )/∂σ 2                                                                                                      "
                                                                                                                                                                       1
                                                                                                                                                                              #−1
                                                                                                                          2σ 4        12σ 6 
                                                                                                  0                                      
                                                                                                           −1      0            0              0     −1              0
                                                                                                                                                     =
                                                                                                                                                                     σ 2
                                       −1            0         −1      0                          −3σ 2
                                                                                                 
                                                                                                           0           4       15σ 6                2                0 2σ1 4
                                                                                                                  3σ     0            0    −3σ     0 
                                                                                                                                               
                          T
                                                                                                                                                             
                                   −2(xt − µ)
                                                                                                                                                          
                      1 X                          −1       0      −1    .                      0    −6σ 2       0 12σ   6   0   96σ 8       0    −6σ 2
              = plim           
                                −3(x − µ)2
                                                           =
                                                             
                                                                  2
                                                                                        (8.43)
                      T                 t            0     −3σ      0                                                                                           "         #
                         t=1 
                                                                                                                                                                      σ2 0
                                                                             
                                  −4(xt − µ)3 −6σ 2             0    −6σ 2                                                                                        =             .
                                                                                                                                                                      0 2σ 4
(Recall that we treat σ 2 , not σ , as a parameter.)                                                                                                                                 (8.47)
   The covariance matrix of the scaled moment conditions (at the true parameter values)
                                                                                                 This is the same as the result from maximum likelihood estimation which use the sample
is                             "√ T                  # "√ T            #0                        mean and sample variance as the estimators. The extra moment conditions (overidenti-
                                     T X                  T X
                      S0 = E               m t (β0 )          m t (β0 ) ,        (8.44)          fying restrictions) does not produce any more efficient estimators—for the simple reason
                                   T                     T
                                    t=1                  t=1
                                                                                                 that the first two moments completely characterizes the normal distribution.


                                                                                          118                                                                                           119
8.4.2 Testing Normality∗                                                                              We therefore get
                                                                                                                                                                                                          0
The payoff from the overidentifying restrictions is that we can test if the series is actually                              0     0    0 0      σ2   0    3σ 4    0        0      0                      0   0
normally distributed. There are several ways of doing that, but the perhaps most straight-                 √
                                                                                                                        
                                                                                                                         0       0    0 0
                                                                                                                                           
                                                                                                                                            0     2σ 4   0    12σ 6 
                                                                                                                                                                      
                                                                                                                                                                           0      0                      0
                                                                                                                                                                                                               
                                                                                                                                                                                                             0 
                                                                                                      ACov[ T m̄(β̂)] =                                                                                   
forward is skip the loss function approach to GMM and instead specify the “first order                                   −3σ 2
                                                                                                                                 0    1 0   3σ
                                                                                                                                                4  0   15σ  6   0   −3σ
                                                                                                                                                                            2   0                      1   0 
                                                                                                                                                                                                               
conditions” directly as                                                                                                     0   −6σ 2 0 1       0 12σ 6    0    96σ 8      0     −6σ 2                   0   1
                                                                                                                                        
                   0 = Am̄                                                                                                0 0 0      0
                                                                                                                                        
                                                                                                                       0 0 0      0 
                                                    xt − µ                                                            = 0 0 6σ 6
                                                                                                                                                                         (8.50)
                         "              #      T                                                                                    0 
                                                   (xt − µ) − σ  .
                                                            2   2 
                                                                    
                             1 0 0 0        1 X
                                                                                                                                        
                     =                             (x − µ)3                           (8.48)                             0 0 0 24σ 8
                             0 1 0 0        T         t
                                                                    
                                              t=1                  
                                                    (xt − µ) − 3σ
                                                            4     4                                      We now form the test statistics for the overidentifying restrictions as in (8.40). In this
                                                                                                      case, it is (note the generalized inverse)
    The asymptotic covariance matrix the moment conditions is as in (8.37). In this case,
                                                                                                                                         0                                                        
the matrix with brackets is                                                                                0                                   0 0       0           0         0
                                                                                                                                                                                                  
                                                                            −1                         0                                 0 0        0           0      0                        
                                                                                                      T 6 T (x − µ)3 /T
                                                                                                                                           
                                                                                                                                            0 0 1/(6σ 6 )
                                                                                                                                                                                                     
                                                                                                                                                                             6t=1 (xt − µ) /T
                                                                                                                                                             0          T           3        
  1     0 0   0      −1       0                            0                                             t=1 t
                                                  # −1
                                                                                                                                                                                                   

 0
                                 "                                               "         #         6t=1 [(xt − µ) − 3σ ]/T
                                                                                                              T             4      4           0 0       0      1/(24σ )8      6t=1 [(xt − µ) − 3σ ]/T
                                                                                                                                                                                  T             4   4
        1 0   0   0
                −          −1     1 0    0 0   0     −1   
                                                                                       1 0 0 0                                 2                                    2
                                                                                                         T 6t=1     (xt − µ)3 /T       T 6t=1    [(xt − µ)4 − 3σ 4 ]/T
                                                                                                          T                           T
 0     0 1   0   −3σ 2     0    0 1 0 0  −3σ 2       0                           0 1 0 0
                                                                                               =                             +                                   .                  (8.51)
                                                                                                                       σ6                               σ8
                                                                  
  0     0 0   1      0      −6σ 2  |    {z      }
                                                     0    −6σ 2                       |    {z   }        6                            24
                                           A0                                                   A0
                                                                                                      When we approximate σ by σ̂ then this is the same as the Jarque and Bera test of nor-
|        {z     } |       {z      }                |    {z      }
         I4                    D0                                      D0
                              
    0     0            0     0                                                                        mality.
 
  0      0            0
                               
                             0                                                                           The analysis shows (once again) that we can arrive at simple closed form results by
=
  −3σ 2
                                                                                      (8.49)         making strong assumptions about the data generating process. In particular, we assumed
         0            1     0 
                               
    0    −6σ 2         0     1                                                                        that the moment conditions were serially uncorrelated. The GMM test, with a modified
                                                                                                      estimator of the covariance matrix S0 , can typically be much more general.


                                                                                                      8.5    Testing the Implications of an RBC Model

                                                                                                      Reference: Christiano and Eichenbaum (1992)
                                                                                                          This section shows how the GMM framework can be used to test if an RBC model fits
                                                                                                      data.
                                                                                                          Christiano and Eichenbaum (1992) try to test if the RBC model predictions correspond
                                                                                                      are significantly different from correlations and variances of data. The first step is to define

                                                                                           120                                                                                                   121
a vector of parameters and some second moments                                                  8.6       IV on a System of Equations∗
                                          σc p
                                                          y 
                         9 = δ, ..., σλ ,      , ..., Corr , n ,                      (8.52)    Suppose we have two equations
                                          σy                n

and estimate it with GMM using moment conditions. One of the moment condition is
                                                                                                                                                       0
                                                                                                                                                y1t = x1t β1 + u 1t
that the sample average of the labor share in value added equals the coefficient on labor
                                                                                                                                                       0
                                                                                                                                                y2t = x2t β2 + u 2t ,
in a Cobb-Douglas production function, another is that just the definitions of a standard
                                                                                                and two sets of instruments, z 1t and z 2t with the same dimensions as x1t and x2t , respec-
deviation, and so forth.
                                                                                                tively. The sample moment conditions are
    The distribution of the estimator for 9 is asymptotically normal. Note that the covari-
                                                                                                                                           T
                                                                                                                                              "                    #
ance matrix of the moments is calculated similarly to the Newey-West estimator.                                                       1 X z 1t y1t − x1t    0 β
                                                                                                                                                                1
                                                                                                                       m̄(β1 , β2 ) =                       0 β
                                                                                                                                                                   ,
    The second step is to note that the RBC model generates second moments as a function                                              T         z 2t y2t − x2t  2
                                                                                                                                          t=1
h (.) of the model parameters {δ, ..., σλ }, which are in 9, that is, the model generated
second moments can be thought of as h (9).                                                      Let β = (β10 , β20 )0 . Then
    The third step is to test if the non-linear restrictions of the model (the model mapping                            
                                                                                                                            ∂ 1 PT
                                                                                                                                                              ∂ 1 PT                            
                                                                                                     ∂ m̄(β1 , β2 )  ∂β10 T t=1 z 1t y1t − x1t β1 ∂β20 T t=1 z 1t y1t − x1t β1 
                                                                                                                                                       0                                  0
from parameters to second moments) are satisfied. That is, the restriction that the model                           =       ∂ 1 PT
                                                                                                                                                              ∂ 1 PT
                                                                                                          ∂β 0                        t=1 z 2t y2t − x 2t β2
                                                                                                                                                       0
                                                                                                                                                                         t=1 z 2t y2t − x 2t β2
                                                                                                                                                                                          0
                                                                                                                                                                                                
second moments are as in data                                                                                              ∂β10 T                                 ∂β20 T
                                                                                                                        " P                                        #
                                                                                                                           1      T         0
                                             σc p                                                                                     z 1t x1t        0
                                                             y 
                       H (9) = h (9) −            , ..., Corr , n = 0,                 (8.53)                       = T t=1                    1 P  T          0
                                                                                                                                                                      .
                                             σy                n                                                                    0          T    t=1 z 2t x 2t

is tested with a Wald test. (Note that this is much like the Rβ = 0 constraints in the linear   This is invertible so we can premultiply the first order condition with the inverse of
                                                                                                              0
                                                                                                  ∂ m̄(β)/∂β 0 A and get m̄(β) = 0k×1 . We can solve this system for β1 and β2 as
                                                                                                
case.) From the delta-method we get
                         √                      ∂H            ∂ H0
                                                                                                    "        #       "                                            #−1 "                        #
                                     d                                                                                     1 PT                                                1 PT
                            T H (9̂) → N 0,          Cov( 9̂)        .                (8.54)              β1                             0
                                                                                                                              t=1 z 1t x 1t             0                         t=1 z 1t y1t
                                                ∂9 0          ∂9                                                   =       T
                                                                                                                                                 1 PT
                                                                                                                                                                               T
                                                                                                                                                                               1 PT
                                                                                                          β2                      0              T
                                                                                                                                                               0
                                                                                                                                                    t=1 z 2t x 2t              T  t=1 z 2t y2t
Forming the quadratic form                                                                                                                    −1                               
                                                                                                                             1 PT          0
                                                                                                                                                                                      "                     #
                                                                                                                                                                    0                     1 PT
                                                                                                                             T  t=1 z 1t x 1t                                                t=1 z 1t y1t
                                                                                                                   =                                                                     T                     .
                                                                                                                                                                                 
                                     
                                         ∂H            0 −1
                                                      ∂H                                                                                               P                     −1        1 PT
                                                                                                                                                                                             t=1 z 2t y2t
                                                                                                                                                          T
                         T H (9̂)0            Cov(9̂)          H (9̂),                (8.55)                                          0                1                 0
                                                                                                                                                              t=1 z 2t x 2t               T
                                         ∂9 0         ∂9                                                                                                T


will as usual give a χ 2 distributed test statistic with as many degrees of freedoms as         This is IV on each equation separately, which follows from having an exactly identified
restrictions (the number of functions in (8.53)).                                               system.




                                                                                         122                                                                                                                        123
Bibliography
Christiano, L. J., and M. Eichenbaum, 1992, “Current Real-Business-Cycle Theories and
  Aggregate Labor-Market Fluctuations,” American Economic Review, 82, 430–450.              11         Vector Autoregression (VAR)
Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,          Reference: Hamilton (1994) 10-11; Greene (2000) 17.5; Johnston and DiNardo (1997)
  Oxford University Press, Oxford.                                                          9.1-9.2 and Appendix 9.2; and Pindyck and Rubinfeld (1997) 9.2 and 13.5.
Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New               Let yt be an n × 1 vector of variables. The VAR( p) is
  Jersey, 4th edn.
                                                                                                      yt = µ + A1 yt−1 + ... + A p yt− p + εt , εt is white noise, Cov(εt ) = .                (11.1)
Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.         Example 1 (VAR(2) of 2 × 1 vector.) Let yt = [ xt z t ]0 . Then
                                                                                             "        #       "                 #"           # "                 #"           # "          #
                                                                                                 xt               A1,11 A1,12        xt−1          A2,11 A2,12        xt−2          ε1,t
                                                                                                          =                                  +                                +                . (11.2)
                                                                                                 zt               A1,21 A1,22        z t−1         A2,21 A2,22        z t−2         ε2,t
                                                                                                 Issues:

                                                                                                 • Variable selection

                                                                                                 • Lag length

                                                                                                 • Estimation

                                                                                                 • Purpose: data description (Granger-causality, impulse response, forecast error vari-
                                                                                                   ance decomposition), forecasting, policy analysis (Lucas critique)?


                                                                                            11.1        Canonical Form

                                                                                            A VAR( p) can be rewritten as a VAR(1). For instance, a VAR(2) can be written as
                                                                                                         "       # "        # "            #"        # "       #
                                                                                                            yt           µ        A1 A2         yt−1        εt
                                                                                                                    =         +                        +         or          (11.3)
                                                                                                            yt−1         0        I    0        yt−2        0
                                                                                                                        yt∗ = µ∗ + Ayt−1
                                                                                                                                     ∗
                                                                                                                                         + εt∗ .                                                (11.4)

                                                                                            Example 2 (Canonical form of a univariate AR(2).)
                                                                                                         "       # "       # "            #"       # "    #
                                                                                                           yt           µ         a1 a2       yt−1     εt
                                                                                                                   =         +                      +       .
                                                                                                           yt−1         0         1 0         yt−2     0

                                                                                      124                                                                                                          125
Example 3 (Canonical for of VAR(2) of 2×1 vector.) Continuing on the previous exam-           Note that we therefore get
ple, we get
                                                                                            A2 = A A = Z 3Z −1 Z 3Z −1 = Z 33Z −1 = Z 32 Z −1 ⇒ Aq = Z 3q Z −1 .
            xt        A1,11 A1,11 A2,11 A2,12         xt−1         ε1,t                                                                                     √
                                                                                              Remark 5 (Modulus of complex number.) If λ = a + bi, where i = −1, then |λ| =
                    A1,21 A1,22 A2,21 A2,22   z t−1   ε2,t                                       √
                                                                 
          zt
                 =                                     +         .                    |a + bi| = a 2 + b2 .
          t−1   1         0      0      0        t−2   0 
          x                                     x                
                                                                                                  We want lim K →∞ A K +1 yt−K ∗
            z t−1     0      1      0      0          z t−2        0                                                               −1 = 0 (stable VAR) to get a moving average repre-
                                                                                              sentation of yt (where the influence of the starting values vanishes asymptotically). We
11.2    Moving Average Form and Stability                                                     note from the spectral decompositions that A K +1 = Z 3 K +1 Z −1 , where Z is the matrix of
                                                                                              eigenvectors and 3 a diagonal matrix with eigenvalues. Clearly, lim K →∞ A K +1 yt−K
                                                                                                                                                                                 ∗
                                                                                                                                                                                    −1 =
Consider a VAR(1), or a VAR(1) representation of a VAR( p) or an AR( p)                       0 is satisfied if the eigenvalues of A are all less than one in modulus.

                                      yt∗ = Ayt−1
                                              ∗
                                                  + εt∗ .                           (11.5)    Example 6 (AR(1).) For the univariate AR(1) yt = ayt−1 +εt , the characteristic equation
                                                                                              is (a − λ) z = 0, which is only satisfied if the eigenvalue is λ = a. The AR(1) is therefore
                                             ∗
Solve recursively backwards (substitute for yt−s     ∗
                                                 = Ayt−s−1 + εt−s
                                                               ∗ , s = 1, 2,...) to get
                                                                                              stable (and stationarity) if −1 < a < 1.
the vector moving average representation (VMA), or impulse response function
                                                                                                 If we have a stable VAR, then (11.6) can be written
                        yt∗ = A Ayt−2
                                  ∗
                                      + εt−1
                                         ∗
                                               + εt∗
                                             
                                                                                                                                   ∞
                                                                                                                                   X
                               = A2 yt−2
                                     ∗        ∗
                                          + Aεt−1 + εt∗                                                                    yt∗ =       As εt−s
                                                                                                                                           ∗
                                                                                                                                                                                   (11.7)
                                                                                                                                s=0
                               = A2 Ayt−3∗
                                            + εt−2
                                                ∗        ∗
                                                             + εt∗
                                                   
                                                     + Aεt−1
                                                                                                                              = εt∗ + Aεt−1
                                                                                                                                        ∗
                                                                                                                                            + A2 εt−2
                                                                                                                                                  ∗
                                                                                                                                                      + ...
                               = A3 yt−3
                                     ∗
                                         + A2 εt−2
                                               ∗       ∗
                                                   + Aεt−1 + εt∗
                          ..                                                                  We may pick out the first n equations from (11.7) (to extract the “original” variables from
                           .
                                                    K
                                                                                              the canonical form) and write them as
                                                    X
                               = A K +1 yt−K
                                         ∗
                                             −1 +         As εt−s
                                                              ∗
                                                                  .                 (11.6)
                                                    s=0
                                                                                                                           yt = εt + C1 εt−1 + C2 εt−2 + ...,                      (11.8)
Remark 4 (Spectral decomposition.) The n eigenvalues (λi ) and associated eigenvectors
                                                                                              which is the vector moving average, VMA, form of the VAR.
(z i ) of the n × n matrix A satisfies
                                                                                              Example 7 (AR(2), Example (2) continued.) Let µ = 0 in 2 and note that the VMA of the
                                    (A − λi In ) z i = 0n×1 .                                 canonical form is
                                                                                                 "       # "       # "         #"        # "                   #"         #
If the eigenvectors are linearly independent, then                                                 yt           εt     a1 a2       εt−1        a12 + a2 a1 a2        εt−2
                                                                                                           =        +                      +                                + ...
                                                                                                   yt−1         0      1 0         0               a1      a2        0
                                   λ1 0 · · · 0
                                                    

                                 0 λ2 · · · 0 
                                                            h                     i         The MA of yt is therefore
     A = Z 3Z −1 , where 3 =    ..    ..        .. 
                                                      and Z = z 1 z 2 · · ·   zn       .
                                 .      . ··· .                                                                                                 
                                                                                                                       yt = εt + a1 εt−1 + a12 + a2 εt−2 + ...
                                   0 0 · · · λn

                                                                                        126                                                                                           127
   Note that                                                                                           Test: Redefine the dimensions of xt and z t in (11.2): let xt be n 1 ×1 and z t is n 2 ×1. If
                         ∂ yt         ∂Et yt+s
                              = Cs or          = Cs , with C0 = I                        (11.9)    the n 1 × n 2 matrices A1,12 = 0 and A2,12 = 0, then z fail to Granger-cause x. (In general,
                        ∂εt−s
                           0            ∂εt0
                                                                                                   we would require As,12 = 0 for s = 1, ..., p.) This carries over to the MA representation
so the impulse response function is given by {I, C1 , C2 , ...}. Note that it is typically only
                                                                                                   in (11.8), so Cs,12 = 0.
meaningful to discuss impulse responses to uncorrelated shocks with economic interpreta-
                                                                                                       These restrictions can be tested with an F-test. The easiest case is when x is a scalar,
tions. The idea behind structural VARs (discussed below) is to impose enough restrictions
                                                                                                   since we then simply have a set of linear restrictions on a single OLS regression.
to achieve this.
                                                                                                   Example 10 (RBC and nominal neutrality.) Suppose we have an RBC model which says
Example 8 (Impulse response function for AR(1).) Let yt = ρyt−1 + εt . The MA rep-                 that money has no effect on the real variables (for instance, output, capital stock, and the
resentation is yt = ts=0 ρ s εt−s , so ∂ yt /∂εt−s = ∂ E t yt+s /∂εt = ρ s . Stability requires
                     P
                                                                                                   productivity level). Money stock should not Granger-cause real variables.
|ρ| < 1, so the effect of the initial value eventually dies off (lims→∞ ∂ yt /∂εt−s = 0).
                                                                                                   Example 11 (Granger causality and causality.) Do Christmas cards cause Christmas?
Example 9 (Numerical VAR(1) of 2×1 vector.) Consider the VAR(1)
                                                                                                   Example 12 (Granger causality and causality II, from Hamilton 11.) Consider the price
                                                                                                   Pt of an asset paying dividends Dt . Suppose the expected return (Et (Pt+1 + Dt+1 )/Pt )
                "     # "              #"         # "         #
                  xt        0.5 0.2         xt−1         ε1,t
                       =                           +            .
                                                         ε2,t                                      is a constant, R. The price then satisfies Pt =Et ∞        −s
                                                                                                                                                     P
                  zt        0.1 −0.3        z t−1                                                                                                       s=1 R Dt+s . Suppose Dt = u t +
                                                                                                   δu t−1 + vt , so Et Dt+1 = δu t and Et Dt+s = 0 for s > 1. This gives Pt = δu t /R, and
The eigenvalues are approximately 0.52 and −0.32, so this is a stable VAR. The VMA is
                                                                                                   Dt = u t + vt + R Pt−1 , so the VAR is
 "     # "         # "               #"         # "                 #"         #
    xt        ε1,t       0.5 0.2         ε1,t−1        0.27 0.04        ε1,t−2                                          "     # "          #"        # "              #
         =           +                           +                               + ...                                     Pt        0 0        Pt−1         δu t /R
    zt        ε2,t       0.1 −0.3        ε2,t−1        0.02 0.11        ε2,t−2                                                   =                      +               ,
                                                                                                                           Dt        R 0        Dt−1         u t + vt

11.3    Estimation                                                                                 where P Granger-causes D. Of course, the true causality is from D to P. Problem:
                                                                                                   forward looking behavior.
The MLE, conditional on the initial observations, of the VAR is the same as OLS esti-
mates of each equation separately. The MLE of the i j th element in Cov(εt ) is given by           Example 13 (Money and output, Sims (1972).) Sims found that output, y does not Granger-
PT                                                                                                 cause money, m, but that m Granger causes y. His interpretation was that money supply
  t=1 v̂it v̂ jt /T , where v̂it and v̂ jt are the OLS residuals.
   Note that the VAR system is a system of “seemingly unrelated regressions,” with the             is exogenous (set by the Fed) and that money has real effects. Notice how he used a
same regressors in each equation. The OLS on each equation is therefore the GLS, which             combination of two Granger causality test to make an economic interpretation.
coincides with MLE if the errors are normally distributed.                                         Example 14 (Granger causality and omitted information.∗ ) Consider the VAR

                                                                                                                                                                 ε1t
                                                                                                                                                              
                                                                                                                   y1t         a11 a12 0           y1t−1
11.4    Granger Causality
                                                                                                                  y2t  =  0      a22 0   y2t−1  +  ε2t 
                                                                                                                                                              

Main message: Granger-causality might be useful, but it is not the same as causality.                              y3t         0    a32 a33        y3t−1         ε3t
    Definition: if z cannot help forecast x, then z does not Granger-cause x; the MSE of           Notice that y2t and y3t do not depend on y1t−1 , so the latter should not be able to Granger-
the forecast E( xt | xt−s , z t−s , s > 0) equals the MSE of the forecast E( xt | xt−s , s > 0).   cause y3t . However, suppose we forget to use y2t in the regression and then ask if y1t

                                                                                           128                                                                                                 129
Granger causes y3t . The answer might very well be yes since y1t−1 contains information                which suggests that we can calculate Eyt yt0 by an iteration (backwards in time) 8t =
about y2t−1 which does affect y3t . (If you let y1t be money, y2t be the (autocorrelated)               + A8t+1 A0 , starting from 8T = I , until convergence.
Solow residual, and y3t be output, then this is a short version of the comment in King
(1986) comment on Bernanke (1986) (see below) on why money may appear to Granger-                      11.6     Forecast Error Variance Decompositions∗
cause output). Also note that adding a nominal interest rate to Sims (see above) money-
output VAR showed that money cannot be taken to be exogenous.                                          If the shocks are uncorrelated, then it is often useful to calculate the fraction of Var(yi,t+s −Et yi,t+s )
                                                                                                       due to the j th shock, the forecast error variance decomposition. Suppose the covariance
11.5    Forecasts Forecast Error Variance                                                              matrix of the shocks, here , is a diagonal n × n matrix with the variances ωii along the
                                                                                                       diagonal. Let cqi be the ith column of Cq . We then have
The error forecast of the s period ahead forecast is                                                                                                 n
                                                                                                                                                     X                   0
                                                                                                                                         Cq Cq0 =            ωii cqi cqi .                                   (11.14)
                  yt+s − Et yt+s = εt+s + C1 εt+s−1 + ... + Cs−1 εt+1 ,                      (11.10)                                                    i=1

so the covariance matrix of the (s periods ahead) forecasting errors is                                Example 16 (Illustration of (11.14) with n = 2.) Suppose
                                                                                                                                 "           #           "         #
     E (yt+s − Et yt+s ) (yt+s − Et yt+s )0 =  + C1 C10 + ... + Cs−1 Cs−1
                                                                         0
                                                                             .               (11.11)                                c11 c12                 ω11 0
                                                                                                                           Cq =                 and  =              ,
                                                                                                                                    c21 c22                  0 ω22
For a VAR(1), Cs = As , so we have
                                                                                                       then                     "                                                                 #
                        yt+s − Et yt+s = εt+s + Aεt+s−1 + ... + A εt+1 , and   s                                                       ω11 c11
                                                                                                                                             2 + ω c2
                                                                                                                                                   22 12      ω11 c11 c21 + ω22 c12 c22
                                                                                             (11.12)                Cq Cq0 =                                                                         ,
                                                                                                                                    ω11 c11 c21 + ω22 c12 c22    ω11 c21
                                                                                                                                                                       2 + ω c2
                                                                                                                                                                             22 22
   E (yt+s − Et yt+s ) (yt+s − Et yt+s ) =  + AA + ... + A
                                           0                   0         s−1
                                                                               (A      ).
                                                                                     s−1 0
                                                                                             (11.13)
                                                                                                       which should be compared with
   Note that lims→∞ Et yt+s = 0, that is, the forecast goes to the unconditional mean                                      "      #"       #0       "      #"       #0
                                                                                                                             c11       c11            c12       c12
(which is zero here, since there are no constants - you could think of yt as a deviation                               ω11                    + ω22
                                                                                                                             c21       c21            c22       c22
from the mean). Consequently, the forecast error becomes the VMA representation (11.8).                                       "                 #         "              #
                                                                                                                                    2
                                                                                                                                  c11 c11 c21                  2
                                                                                                                                                             c12 c12 c22
Similarly, the forecast error variance goes to the unconditional variance.
                                                                                                                        = ω11               2
                                                                                                                                                  +  ω 22              2
                                                                                                                                                                           .
                                                                                                                                 c11 c21 c21                c12 c22 c22
Example 15 (Unconditional variance of VAR(1).) Letting s → ∞ in (11.13) gives
                                                                                                           Applying this on (11.11) gives
                                     ∞
                                                   s 0
                                     X
                         Eyt yt0 =         A As
                                                       
                                                                                                                                                  n
                                                                                                                                                  X               n
                                                                                                                                                                  X                               n
                                                                                                                                                                                                  X
                                     s=0                                                               E (yt+s − Et yt+s ) (yt+s − Et yt+s )0 =         ωii I +         ωii c1i (c1i )0 + ... +           ωii cs−1i (cs−1i )0
                                                                                                                                                  i=1             i=1                             i=1
                               =  + [AA + A (A ) + ...]
                                                   0       2       2 0
                                                                                                                                                   n
                                                                                                                                                  X
                               =  + A  + AA0 + ... A0                                                                                                ωii I + c1i (c1i )0 + ... + cs−1i (cs−1i )0 ,
                                                                                                                                                                                                 
                                                                                                                                              =
                                                                                                                                                  i=1
                               =  + A(Eyt yt0 )A0 ,
                                                                                                                                                                                                              (11.15)



                                                                                                130                                                                                                                131
which shows how the covariance matrix for the s-period forecast errors can be decom-                        the VAR, (11.8), can be rewritten in terms of u t = Fεt (from (11.19))
posed into its n components.
                                                                                                                                yt = εt + C1 εt−1 + C2 εt−2 + ...
                                                                                                                                   = F −1 Fεt + C1 F −1 Fεt−1 + C2 F −1 Fεt−2 + ...
11.7      Structural VARs
                                                                                                                                   = F −1 u t + C1 F −1 u t−1 + C2 F −1 u t−2 + ...                   (11.20)
11.7.1    Structural and Reduced Forms
                                                                                                            Remark 17 The easiest way to calculate this representation is by first finding F −1 (see
We are usually not interested in the impulse response function (11.8) or the variance                       below), then writing (11.18) as
decomposition (11.11) with respect to εt , but with respect to some structural shocks, u t ,
                                                                                                                                     yt = µ + A1 yt−1 + ... + A p yt− p + F −1 u t .                  (11.21)
which have clearer interpretations (technology, monetary policy shock, etc.).
   Suppose the structural form of the model is                                                              To calculate the impulse responses to the first element in u t , set yt−1 , ..., yt− p equal to the
                                                                                                            long-run average, (I − A1 − ... − Ap)−1 µ, make the first element in u t unity and all other
     F yt = α + B1 yt−1 + ... + B p yt− p + u t , u t is white noise, Cov(u t ) = D.            (11.16)
                                                                                                            elements zero. Calculate the response by iterating forward on (11.21), but putting all
This could, for instance, be an economic model derived from theory.1                                        elements in u t+1 , u t+2 , ... to zero. This procedure can be repeated for the other elements
   Provided F −1 exists, it is possible to write the time series process as                                 of u t .

                                                                                                                We would typically pick F such that the elements in u t are uncorrelated with each
                   yt = F −1 α + F −1 B1 yt−1 + ... + F −1 B p yt− p + F −1 u t                 (11.17)
                                                                                                            other, so they have a clear interpretation.
                      = µ + A1 yt−1 + ... + A p yt− p + εt , Cov (εt ) = ,                     (11.18)
                                                                                                                The VAR form can be estimated directly from data. Is it then possible to recover the
where                                                                                                       structural parameters in (11.16) from the estimated VAR (11.18)? Not without restrictions
                                                                       0                                  on the structural parameters in F, Bs , α, and D. To see why, note that in the structural
         µ = F −1 α, As = F −1 Bs , and εt = F −1 u t so  = F −1 D F −1 .                      (11.19)     form (11.16) we have ( p + 1) n 2 parameters in {F, B1 , . . . , B p }, n parameters in α, and
                                                                                                            n(n + 1)/2 unique parameters in D (it is symmetric). In the VAR (11.18) we have fewer
Equation (11.18) is a VAR model, so a VAR can be thought of as a reduced form of the
                                                                                                            parameters: pn 2 in {A1 , . . . , A p }, n parameters in in µ, and n(n +1)/2 unique parameters
structural model (11.16).
                                                                                                            in . This means that we have to impose at least n 2 restrictions on the structural param-
    The key to understanding the relation between the structural model and the VAR is
                                                                                                            eters {F, B1 , . . . , B p , α, D} to identify all of them. This means, of course, that many
the F matrix, which controls how the endogenous variables, yt , are linked to each other
                                                                                                            different structural models have can have exactly the same reduced form.
contemporaneously. In fact, identification of a VAR amounts to choosing an F matrix.
Once that is done, impulse responses and forecast error variance decompositions can be                      Example 18 (Structural form of the 2 × 1 case.) Suppose the structural form of the
made with respect to the structural shocks. For instance, the impulse response function of                  previous example is
                                                                                                            "           #"      # "               #"        # "              #"         # "        #
  1 This is a “structural model” in a traditional, Cowles commission, sense. This might be different from
                                                                                                               F11 F12      xt        B1,11 B1,12     xt−1      B2,11 B2,12       xt−2       u 1,t
what modern macroeconomists would call structural.                                                                               =                           +                           +           .
                                                                                                               F21 F22      zt        B1,21 B1,22     z t−1     B2,21 B2,22       z t−2      u 2,t

                                                                                                            This structural form has 3 × 4 + 3 unique parameters. The VAR in (11.2) has 2 × 4 + 3.
                                                                                                            We need at least 4 restrictions on {F, B1 , B2 , D} to identify them from {A1 , A2 , }.

                                                                                                    132                                                                                                   133
11.7.2   “Triangular” Identification 1: Triangular F with Fii = 1 and Diagonal D                    two shocks. The covariance matrix of the VAR shocks is therefore
                                                                                                                       "      # "                                              #
Reference: Sims (1980).                                                                                                  ε1,t       Var (u 1t ) αVar (u 1t )
                                                                                                                  Cov          =                                                 .
     The perhaps most common way to achieve identification of the structural parameters                                  ε2,t       αVar (u 1t ) α 2 Var (u 1t ) + Var (u 2t )
is to restrict the contemporaneous response of the different endogenous variables, yt , to
                                                                                                       This set of identifying restrictions can be implemented by estimating the structural
the different structural shocks, u t . Within in this class of restrictions, the triangular iden-
                                                                                                    form with LS—equation by equation. The reason is that this is just the old fashioned fully
tification is the most popular: assume that F is lower triangular (n(n + 1)/2 restrictions)
                                                                                                    recursive system of simultaneous equations. See, for instance, Greene (2000) 16.3.
with diagonal element equal to unity, and that D is diagonal (n(n − 1)/2 restrictions),
which gives n 2 restrictions (exact identification).
                                                                                                    11.7.3   “Triangular” Identification 2: Triangular F and D = I
     A lower triangular F matrix is very restrictive. It means that the first variable can
react to lags and the first shock, the second variable to lags and the first two shocks, etc.       The identifying restrictions in Section 11.7.2 is actually the same as assuming that F is
This is a recursive simultaneous equations model, and we obviously need to be careful               triangular and that D = I . In this latter case, the restriction on the diagonal elements of F
with how we order the variables. The assumptions that Fii = 1 is just a normalization.              has been moved to the diagonal elements of D. This is just a change of normalization (that
     A diagonal D matrix seems to be something that we would often like to have in                  the structural shocks have unit variance). It happens that this alternative normalization is
a structural form in order to interpret the shocks as, for instance, demand and supply              fairly convenient when we want to estimate the VAR first and then recover the structural
shocks. The diagonal elements of D are the variances of the structural shocks.                      parameters from the VAR estimates.

Example 19 (Lower triangular F: going from structural form to VAR.) Suppose the                     Example 20 (Change of normalization in Example 19) Suppose the structural shocks in
structural form is                                                                                  Example 19 have the covariance matrix
                                                                                                                                     "        # "         #
                                                                                                                                                  σ12 0
              "        #"    # "           #"         # "         #
                   1 0    xt      B11 B12       xt−1        u 1,t                                                                       u 1,t
                              =                         +           .                                                       D = Cov            =            .
                 −α 1     zt      B21 B22       z t−1       u 2,t                                                                       u 2,t     0 σ22

This is a recursive system where xt does not not depend on the contemporaneous z t , and            Premultiply the structural form in Example 19 by
therefore not on the contemporaneous u 2t (see first equation). However, z t does depend
                                                                                                                                        "            #
                                                                                                                                          1/σ1 0
on xt (second equation). The VAR (reduced form) is obtained by premultiplying by F −1                                                     0     1/σ2
           "     # "         #"              #"         # "        #"        #
              xt         1 0      B11 B12        xt−1         1 0      u 1,t                        to get
                   =                                     +
              zt         α 1      B21 B22        z t−1        α 1      u 2,t                             "                  #"        #       "                     #"           #       "               #
                      "           #"         # "         #                                                    1/σ1  0            xt               B11 /σ1 B12 /σ1        xt−1                u 1,t /σ1
                         A11 A12       xt−1         ε1,t                                                                                  =                                          +                       .
                   =                          +            .                                                 −α/σ2 1/σ2          zt               B21 /σ2 B22 /σ2        z t−1               u 2,t /σ2
                         A21 A22       z t−1        ε2,t
                                                                                                    This structural form has a triangular F matrix (with diagonal elements that can be dif-
This means that ε1t = u 1t , so the first VAR shock equals the first structural shock. In
                                                                                                    ferent from unity), and a covariance matrix equal to an identity matrix.
contrast, ε2,t = αu 1,t + u 2,t , so the second VAR shock is a linear combination of the first
                                                                                                        The reason why this alternative normalization is convenient is that it allows us to use
                                                                                                    the widely available Cholesky decomposition.

                                                                                            134                                                                                                                  135
Remark 21 (Cholesky decomposition) Let  be an n × n symmetric positive definite                     Step 1 above solves
matrix. The Cholesky decomposition gives the unique lower triangular P such that  =                                 "             #       "              #−1 "             #−1 0
P P 0 (some software returns an upper triangular matrix, that is, Q in  = Q 0 Q instead).                               11 12               F11 0                 F11 0
                                                                                                                                       =                                        
                                                                                                                         12 22               F21 F22               F21 F22
Remark 22 Note the following two important features of the Cholesky decomposition.                                                                                  
                                                                                                                                                  1
                                                                                                                                                   2
                                                                                                                                                 F11
                                                                                                                                                          − F 2F21F
First, each column of P is only identified up to a sign transformation; they can be reversed                                           =                  2
                                                                                                                                                             11 22 
                                                                                                                                                                   2
                                                                                                                                                  F21     F21 +F11
at will. Second, the diagonal elements in P are typically not unity.                                                                           − F2 F       2 F2
                                                                                                                                                           F11
                                                                                                                                                  11 22        22


Remark 23 (Changing sign of column and inverting.) Suppose the square matrix A2 is                   for the three unknowns F11 , F21 , and F22 in terms of the known 11 , 12 , and 22 . Note
the same as A1 except that the i th and j th columns have the reverse signs. Then A−1                that the identifying restrictions are that D = I (three restrictions) and F12 = 0 (one
                                                                                   2 is
the same as A−1
             1  except that the i th and j th rows have the reverse sign.                            restriction). (This system is just four nonlinear equations in three unknown - one of the
                                                                                                     equations for 12 is redundant. You do not need the Cholesky decomposition to solve it,
   This set of identifying restrictions can be implemented by estimating the VAR with                since it could be solved with any numerical solver of non-linear equations—but why make
LS and then take the following steps.                                                                life even more miserable?)
                                                0
   • Step 1. From (11.19)  = F −1 I F −1 (recall D = I is assumed), so a Cholesky                       A practical consequence of this normalization is that the impulse response of shock i
     decomposition recovers F −1 (lower triangular F gives a similar structure of F −1 ,             equal to unity is exactly the same as the impulse response of shock i equal to Std(u it ) in
     and vice versa, so this works). The signs of each column of F −1 can be chosen                  the normalization in Section 11.7.2.
     freely, for instance, so that a productivity shock gets a positive, rather than negative,
     effect on output. Invert F −1 to get F.                                                         11.7.4   Other Identification Schemes∗

   • Step 2. Invert the expressions in (11.19) to calculate the structural parameters from           Reference: Bernanke (1986).
     the VAR parameters as α = Fµ, and Bs = F As .                                                       Not all economic models can be written in this recursive form. However, there are
                                                                                                     often cross-restrictions between different elements in F or between elements in F and D,
Example 24 (Identification of the 2×1 case.) Suppose the structural form of the previous             or some other type of restrictions on Fwhich may allow us to identify the system.
example is                                                                                               Suppose we have (estimated) the parameters of the VAR (11.18), and that we want to
                                                                                                     impose D =Cov(u t ) = I . From (11.19) we then have (D = I )
"          #"     # "                   #"         # "                 #"         # "          #
  F11 0        xt         B1,11 B1,12        xt−1        B2,11 B2,12        xt−2         u 1,t
                     =                              +                               +            ,                                                       0
  F21 F22      zt         B1,21 B1,22        z t−1       B2,21 B2,22        z t−2        u 2,t
                                                                                                                                                   
                        "        #                                                                                                        = F −1 F −1 .                               (11.22)
                          1 0
            with D =               .
                          0 1                                                                        As before we need n(n − 1)/2 restrictions on F, but this time we don’t want to impose
                                                                                                     the restriction that all elements in F above the principal diagonal are zero. Given these
                                                                                                     restrictions (whatever they are), we can solve for the remaining elements in B, typically
                                                                                                     with a numerical method for solving systems of non-linear equations.




                                                                                         136                                                                                                 137
11.7.5   What if the VAR Shocks are Uncorrelated ( = I )?∗                                   which is an identity matrix since cos2 θ + sin2 θ = 1. The transformation u = G 0 ε gives

Suppose we estimate a VAR and find that the covariance matrix of the estimated residuals                                             u t = εt for t 6= i, k
is (almost) an identity matrix (or diagonal). Does this mean that the identification is
                                                                                                                                     u i = εi c − εk s
superfluous? No, not in general. Yes, if we also want to impose the restrictions that F is
                                                                                                                                     u k = εi s + εk c.
triangular.
    There are many ways to reshuffle the shocks and still get orthogonal shocks. Recall       The effect of this transformation is to rotate the i th and k th vectors counterclockwise
that the structural shocks are linear functions of the VAR shocks, u t = Fεt , and that we    through an angle of θ . (Try it in two dimensions.) There is an infinite number of such
assume that Cov(εt ) =  = I and we want Cov(u t ) = I , that, is from (11.19) we then        transformations (apply a sequence of such transformations with different i and k, change
have (D = I )                                                                                 θ , etc.).
                                         F F 0 = I.                                (11.23)
                                                                                              Example 26 (Givens rotations and the F matrix.) We could take F in (11.23) to be (the
There are many such F matrices: the class of those matrices even have a name: orthogonal
                                                                                              transpose) of any such sequence of givens rotations. For instance, if G 1 and G 2 are givens
matrices (all columns in F are orthonormal). However, there is only one lower triangular                                        0
                                                                                              rotations, then F = G 01 or F = G 2 or F = G 01 G 02 are all valid.
F which satisfies (11.23) (the one returned by a Cholesky decomposition, which is I ).
    Suppose you know that F is lower triangular (and you intend to use this as the identi-
                                                                                              11.7.6   Identification via Long-Run Restrictions - No Cointegration∗
fying assumption), but that your estimated  is (almost, at least) diagonal. The logic then
requires that F is not only lower triangular, but also diagonal. This means that u t = εt     Suppose we have estimated a VAR system (11.1) for the first differences of some variables
(up to a scaling factor). Therefore, a finding that the VAR shocks are uncorrelated com-      yt = 1xt , and that we have calculated the impulse response function as in (11.8), which
bined with the identifying restriction that F is triangular implies that the structural and   we rewrite as
reduced form shocks are proportional. We can draw no such conclusion if the identifying
assumption is something else than lower triangularity.                                                                       1xt = εt + C1 εt−1 + C2 εt−2 + ...
                                                                                                                                  = C (L) εt , with Cov(εt ) = .                 (11.24)
Example 25 (Rotation of vectors (“Givens rotations”).) Consider the transformation of
the vector ε into the vector u, u = G 0 ε, where G = In except that G ik = c, G ik = s,       To find the MA of the level of xt , we solve recursively
G ki = −s, and G kk = c. If we let c = cos θ and s = sin θ for some angle θ , then
                                                                                                                 xt = C (L) εt + xt−1
G 0 G = I . To see this, consider the simple example where i = 2 and k = 3
                                                                                                                        = C (L) εt + C (L) εt−1 + xt−2
                      0 
                                                                                                                   ..
                                                      
               1 0 0       1 0 0      1   0        0
                                                                                                                    .
              0 c s   0 c s  =  0 c2 + s 2    0     ,
                                                    
                                                                                                                        = C (L) (εt + εt−1 + εt−2 + ...)
               0 −s c      0 −s c     0   0     c2 + s 2
                                                                                                                        = εt + (C1 + I ) εt−1 + (C2 + C1 + I ) εt−2 + ...
                                                                                                                                                     s
                                                                                                                                                     X
                                                                                                                        = C + (L) εt , where Cs+ =         Cs with C0 = I.        (11.25)
                                                                                                                                                     j=0




                                                                                       138                                                                                            139
   As before the structural shocks, u t , are                                                 available from the VAR estimate). Finally, we solve for F −1 from (11.30).

                               u t = Fεt with Cov(u t ) = D.                                  Example 27 (The 2 × 1 case.) Suppose the structural form is
                                                                                                       "          #"        # "               #"          # "       #
The VMA in term of the structural shocks is therefore                                                    F11 F12       1xt         B11 B12         1xt−1      u 1,t
                                                                                                                              =                            +          .
                                                        s
                                                        X                                                F21 F22       1z t        B21 B22         1z t−1     u 2,t
                 xt = C + (L) F −1 u t , where Cs+ =          Cs with C0 = I.      (11.26)
                                                        j=0
                                                                                              and we have an estimate of the reduced form
                                                                                                       "       #      "          # "         #            "      #!
The C + (L) polynomial is known from the estimation, so we need to identify F in order to                 1xt             1xt−1         ε1,t                ε1,t
                                                                                                                  =A               +           , with Cov           = .
use this equation for impulse response function and variance decompositions with respect                  1z t            1z t−1        ε2,t                ε2,t
to the structural shocks.
                                                                                              The VMA form (as in (11.24))
    As before we assume that D = I , so                                                                   "       # "          #    "        #      "        #
                                                                                                             1xt          ε1,t        ε1,t−1          ε1,t−2
                                                                                                                                                  2
                                                                                                                                                               + ...
                                                    0
                                    = F −1 D F −1                               (11.27)                            =            +A            +A
                                                                                                             1z t         ε2,t        ε2,t−1          ε2,t−2

in (11.19) gives n(n + 1)/2 restrictions.                                                     and for the level (as in (11.25))
    We now add restrictions on the long run impulse responses. From (11.26) we have                 "     # "           #            "        #               "        #
                                                                                                       xt         ε1,t                 ε1,t−1                ε
                                                                                                                                                                 1,t−2
                                      ∂ xt+s                                                                 =            + (A + I )            + A2 + A + I             + ...
                                lim          = lim Cs+ F −1                                            zt         ε2,t                 ε2,t−1                   ε2,t−2
                                s→∞    ∂u 0t  s→∞

                                                = C(1)F −1 ,                       (11.28)    or since εt = F −1 u t
                                                                                              "     #        "        #                "         #                   "         #
where C(1) = ∞
                P                                                                                xt             u 1,t                    u 1,t−1                     u 1,t−2
                   j=0 C s . We impose n(n − 1)/2 restrictions on these long run responses.           = F −1            +(A + I ) F −1             + A2 + A + I F −1             +...
Together we have n 2 restrictions, which allows to identify all elements in F.                   zt             u 2,t                    u 2,t−1                       u 2,t−2
    In general, (11.27) and (11.28) is a set of non-linear equations which have to solved     There are 8+3 parameters in the structural form and 4+3 parameters in the VAR, so we
for the elements in F. However, it is common to assume that (11.28) is a lower triangular     need four restrictions. Assume that Cov(u t ) = I (three restrictions) and that the long run
matrix. We can then use the following “trick” to find F. Since εt = F −1 u t                  response of u 1,t−s on xt is zero, that is,
                                                               0
                     EC(1)εt εt0 C(1)0 = EC(1)F −1 u t u 0t F −1 C(1)0
                                                                                                   "                               #                               "             #−1
                                                                                                       unrestricted 0                                                F11 F12
                                                          0                                                                          = I + A + A2 + ...
                         C(1)C(1)0 = C(1)F −1 F −1 C(1)0 .                         (11.29)            unrestricted unrestricted                                       F21 F22
                                                                                                                                                         "             #−1
                                                                                                                                                              F11 F12
We can therefore solve for a lower triangular matrix                                                                                   = (I − A)   −1
                                                                                                                                                              F21 F22
                                                                                                                                                                     #−1 "         #−1
                                       3 = C(1)F −1
                                                                                                                                           "
                                                                                   (11.30)                                                     1 − A11       −A12          F11 F12
                                                                                                                                       =                                               .
                                                                                                                                               −A21          1 − A22       F21 F22
by calculating the Cholesky decomposition of the left hand side of (11.29) (which is


                                                                                       140                                                                                                 141
The upper right element of the right hand side is                                                   a + bL−m + cLn , then 8 (L) (xt + yt ) = a (xt + yt ) + b (xt+m + yt+m ) + c (xt−n + yt−n )
                              −F12 + F12 A22 + A12 F11                                              and 8 (1) = a + b + c.
                (1 − A22 − A11 + A11 A22 − A12 A21 ) (F11 F22 − F12 F21 )
                                                                                                    Example 29 (Söderlind and Vredin (1996)). Suppose we have
                                                                                     0
which is one restriction on the elements in F. The other three are given by F −1 F −1 =                                                            
                                                                                                           ln Yt (output)                        0 1
, that is,                                                                                                                                                   "                    #
                                                                                                          ln Pt (price level)
                                                                                                                                        , ϒ =  1 −1  , and τt = money supply trend ,
                                                                                                                                                    
                       2 +F 2
                       F22
                                                            "                                      yt = 
                                      − F22 F21 +F12 F11 2
                                                                          #                               ln M (money stock)                   1 0               productivity trend
                                                            = 11 12 .
                             12
                                                                                                                                       
                                                                                                                t
                  (F              ) 2  (F               )
                      F   −F   F            F  −F   F
                                                                                                                                                   
                   11 22   12 21        11 22    12 21
                                             2   2
                                           F21 +F11
                                                               12 22                                     ln Rt (gross interest rate)           0 0
                 − F22 F21 +F12 F11 2
                    (F11 F22 −F12 F21 )   (F11 F22 −F12 F21 )
                                                       2

                                                                                                    then we see that ln Rt and ln Yt + ln Pt − ln Mt (that is, log velocity) are stationary, so
11.8    Cointegration, Common Trends, and Identification via Long-                                                                         "                 #
                                                                                                                                              0 0 0       1
         Run Restrictions∗                                                                                                           α0 =
                                                                                                                                              1 1 −1 0

These notes are a reading guide to Mellander, Vredin, and Warne (1992), which is well be-           are (or rather, span the space of) cointegrating vectors. We also see that α 0 ϒ = 02×2 .
yond the first year course in econometrics. See also Englund, Vredin, and Warne (1994).
(I have not yet double checked this section.)                                                       11.8.2   VAR Representation

                                                                                                    The VAR representation is as in (11.1). In practice, we often estimate the parameters in
11.8.1 Common Trends Representation and Cointegration
                                                                                                    A∗s , α, the n × r matrix γ , and  =Cov(εt ) in the vector “error correction form”
The common trends representation of the n variables in yt is
                                "      #               "     #!                                         1yt = A∗1 1yt + ... + A∗p−1 1yt− p+1 + γ α 0 yt−1 + εt , with Cov(εt ) = .      (11.33)
                                   ϕt                     ϕt
        yt = y0 + ϒτt + 8 (L)            , with Cov             = In                     (11.31)
                                   ψt                     ψt                                        This can easily be rewritten on the VAR form (11.1) or on the vector MA representation
           τt = τt−1 + ϕt ,                                                              (11.32)    for 1yt

where 8 (L) is a stable matrix polynomial in the lag operator. We see that the k × 1 vector                                         1yt = εt + C1 εt−1 + C2 εt−2 + ...                   (11.34)
ϕt has permanent effects on (at least some elements in) yt , while the r × 1 (r = n − k) ψt                                              = C (L) εt .                                    (11.35)
does not.
                                                                                                       To find the MA of the level of yt , we recurse on (11.35)
     The last component in (11.31) is stationary, but τt is a k × 1 vector of random walks,
so the n × k matrix ϒ makes yt share the non-stationary components: there are k common                                    yt = C (L) εt + yt−1
trends. If k < n, then we could find (at least) r linear combinations of yt , α 0 yt where α 0 is
                                                                                                                                 = C (L) εt + C (L) εt−1 + yt−2
an r × n matrix of cointegrating vectors, which are such that the trends cancel each other                                  ..
(α 0 ϒ = 0).                                                                                                                 .
                                                                                                                                 = C (L) (εt + εt−1 + εt−2 + ... + ε0 ) + y0 .           (11.36)
Remark 28 (Lag operator.) We have the following rules: (i) L k xt = xt−k ; (ii) if 8 (L) =

                                                                                            142                                                                                              143
We now try to write (11.36) in a form which resembles the common trends representation        11.8.4   Identification of the Common Trends Shocks
(11.31)-(11.32) as much as possible.
                                                                                              Rewrite (11.31)-(11.32) and (11.39)-(11.40) as
                                                                                                                 t
11.8.3   Multivariate Beveridge-Nelson decomposition                                                             X
                                                                                                   yt = C (1)          εt + C ∗ (L) εt , with Cov(εt ) = , and                                      (11.42)
We want to split a vector of non-stationary series into some random walks and the rest                           s=0
                                                                                                                             " P            #             "        #                "        #!
                                                                                                                                   t
(which is stationary). Rewrite (11.36) by adding and subtracting C(1)(εt + εt−1 + ...)                                             s=0 ϕt                     ϕt                        ϕt
                                                                                                           h             i
                                                                                                       =       ϒ 0n×r                           + 8 (L)                , with Cov                 = In .
                                                                                                                              ψt                              ψt                        ψt
yt = C (1) (εt + εt−1 + εt−2 + ... + ε0 ) + [C(L) − C (1)] (εt + εt−1 + εt−2 + ... + ε0 ) .                                                                                                          (11.43)
                                                                                  (11.37)
                                                                                                                            i0
Suppose εs = 0 for s < 0 and consider the second term in (11.37). It can be written
                                                                                                               h
                                                                                                                   0      0
                                                                                              Since both εt and ϕt ψt are white noise, we notice that the response of yt+s to either
     h                                i                                                       must be the same, that is,
       I + C1 L + C2 L2 + .... − C (1) (εt + εt−1 + εt−2 + ... + ε0 )                                                                     "    #
                                                                                                                         h        i      ϕ
      = /*since C (1) = I + C1 + C2 + ...*/                                                          C (1) + Cs εt =
                                                                                                               ∗
                                                                                                                             ϒ 0n×r + 8s
                                                                                                                                             t
                                                                                                                 
                                                                                                                                                  for all t and s ≥ 0.      (11.44)
                                                                                                                                            ψt
     [−C1 − C2 − C3 − ...] εt + [−C2 − C3 − ...] εt−1 + [−C3 − ...] εt−2 .         (11.38)
                                                                                                  This means that the VAR shocks are linear combinations of the structural shocks (as
Now define the random walks                                                                   in the standard setup without cointegration)

                            ξt = ξt−1 + εt ,
                                                                                                                                "     #
                                                                                   (11.39)                                        ϕt
                                                                                                                                        = Fεt
                               = εt + εt−1 + εt−2 + ... + ε0 .                                                                    ψt
                                                                                                                                           "    #
                                                                                                                                             Fk
Use (11.38) and (11.39) to rewrite (11.37) as                                                                                           =         εt .                        (11.45)
                                                                                                                                             Fr
                             yt = C (1) ξt + C ∗ (L) εt , where                    (11.40)
                                                                                              Combining (11.44) and (11.45) gives that
                                      ∞
                                      X
                            Cs∗ = −           C j.                                 (11.41)
                                                                                                                                                                   "        #
                                                                                                                                                                       Fk
                                      j=s+1                                                                                    C (1) + Cs∗ = ϒ Fk + 8s                                               (11.46)
                                                                                                                                                                       Fr

                                                                                              must hold for all s ≥ 0. In particular, it must hold for s → ∞ where both Cs∗ and 8s
                                                                                              vanishes
                                                                                                                                   C (1) = ϒ Fk .                           (11.47)

                                                                                                  The identification therefore amounts to finding the n 2 coefficients in F, exactly as in
                                                                                              the usual case without cointegration. Once that is done, we can calculate the impulse
                                                                                              responses and variance decompositions with respect to the structural shocks by using



                                                                                       144                                                                                                                 145
            h         i0                                                                                                                                           −1 0                      −1
εt = F −1 ϕt ψt
               0    0
                         in (11.42).2 As before, assumptions about the covariance matrix                               (This means that Eϕt ϕt0 = Fk Fk0 = ϒ 0 ϒ      ϒ C(1)C (1)0 ϒ ϒ 0 ϒ .
of the structural shocks are not enough to achieve identification. In this case, we typically                          From (11.48) we see that this indeed is Ik as required by (11.49).) We still
rely on the information about long-run behavior (as opposed to short-run correlations) to                              need to identify Fr .
supply the remaining restrictions.                                                                                   – Step 4b. From (11.49), Eϕt ψt0 = 0k×r , we get Fk Fr0 = 0k×r , which gives
    • Step 1. From (11.31) we see that α 0 ϒ = 0r ×k must hold for α 0 yt to be stationary.                            kr restrictions on the r n elements in Fr . Similarly, from Eψt ψt0 = Ir , we get
      Given an (estimate of) α, this gives r k equations from which we can identify r k                                Fr Fr0 = Ir , which gives r (r + 1) /2 additional restrictions on Fr . We still
      elements in ϒ. (It will soon be clear why it is useful to know ϒ).                                               need r (r − 1) /2 restrictions. Exactly how they look does not matter for the
                                                                                                                                                                             0
                                                                                                                       impulse response function of ϕt (as long as Eϕt ψt = 0). Note that restrictions
    • Step 2. From (11.44) we have ϒϕt = C (1) εt as s → ∞. The variances of both
                                                                                                                       on Fr are restrictions on ∂ yt /∂ψt0 , that is, on the contemporaneous response.
      sides must be equal
                                                                                                                       This is exactly as in the standard case without cointegration.
                                   Eϒϕt ϕt0 ϒ 0 = EC (1) εt εt0 C (1)0 , or
                                                                                                               A summary of identifying assumptions used by different authors is found in Englund,
                                                   ϒϒ 0 = C (1) C (1)0 ,                       (11.48)     Vredin, and Warne (1994).

       which gives k (k + 1) /2 restrictions on ϒ (the number of unique elements in the
       symmetric ϒϒ 0 ). (However, each column of ϒ is only identified up to a sign trans-                  Bibliography
       formation: neither step 1 or 2 is affected by multiplying each element in column j
       of ϒ by -1.)                                                                                         Bernanke, B., 1986, “Alternative Explanations of the Money-Income Correlation,”
                                                                                                              Carnegie-Rochester Series on Public Policy, 25, 49–100.
    • Step 3. ϒ has nk elements, so we still need nk − r k − k (k + 1) /2 = k(k − 1)/2
      further restrictions on ϒ to identify all elements. They could be, for instance, that                 Englund, P., A. Vredin, and A. Warne, 1994, “Macroeconomic Shocks in an Open
      money supply shocks have no long run effect on output (some ϒi j = 0). We now                           Economy - A Common Trends Representation of Swedish Data 1871-1990,” in Villy
      know ϒ.                                                                                                 Bergström, and Anders Vredin (ed.), Measuring and Interpreting Business Cycles . pp.
                                                                                                              125–233, Claredon Press.
                                "     #!
                                   ϕt
    • Step 4. Combining Cov                = In with (11.45) gives
                                   ψt                                                                       Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
                                   "           #       "        #       "        #0                           Jersey, 4th edn.
                                       Ik 0                Fk               Fk
                                                   =                                 ,         (11.49)
                                       0 Ir                Fr               Fr                              Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.

       which gives n (n + 1) /2 restrictions.                                                               Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th
                                                                                                              edn.
          – Step 4a. Premultiply (11.47) with ϒ 0 and solve for Fk
                                                                −1                                         King, R. G., 1986, “Money and Business Cycles: Comments on Bernanke and Related
                                             Fk = ϒ 0 ϒ               ϒ 0 C(1).                 (11.50)
                                                                                                              Literature,” Carnegie-Rochester Series on Public Policy, 25, 101–116.
   2 Equivalently, we can use (11.47) and (11.46) to calculate ϒ and 8 (for all s) and then calculate the
                                                                      s
impulse response function from (11.43).

                                                                                                    146                                                                                             147
Mellander, E., A. Vredin, and A. Warne, 1992, “Stochastic Trends and Economic Fluctu-
 ations in a Small Open Economy,” Journal of Applied Econometrics, 7, 369–394.

Pindyck, R. S., and D. L. Rubinfeld, 1997, Econometric Models and Economic Forecasts,   12     Kalman filter
  Irwin McGraw-Hill, Boston, Massachusetts, 4ed edn.

Sims, C. A., 1980, “Macroeconomics and Reality,” Econometrica, 48, 1–48.                12.1    Conditional Expectations in a Multivariate Normal Distribution

Söderlind, P., and A. Vredin, 1996, “Applied Cointegration Analysis in the Mirror of   Reference: Harvey (1989), Lütkepohl (1993), and Hamilton (1994)
   Macroeconomic Theory,” Journal of Applied Econometrics, 11, 363–382.                    Suppose Z m×1 and X n×1 are jointly normally distributed
                                                                                                              "     #        "     # "              #!
                                                                                                                 Z              Z̄      6zz 6zx
                                                                                                                       =N            ,                 .                      (12.1)
                                                                                                                 X              X̄      6x z 6x x

                                                                                        The distribution of the random variable Z conditional on that X = x is also normal with
                                                                                        mean (expectation of the random variable Z conditional on that the random variable X
                                                                                        has the value x)
                                                                                                                               Z̄ + 6zx 6x−1
                                                                                                                   E (Z |x) = |{z}         x x − X̄ ,
                                                                                                                                                    
                                                                                                                                                                         (12.2)
                                                                                                                   | {z }           |{z}|{z} | {z }
                                                                                                                     m×1       m×1    m×n n×n     n×1
                                                                                        and variance (variance of Z conditional on that X = x)
                                                                                                                                 n                 o
                                                                                                                  Var (Z |x) = E [Z − E (Z |x)]2 x

                                                                                                                              = 6zz − 6zx 6x−1
                                                                                                                                             x 6x z .                         (12.3)

                                                                                        The conditional variance is the variance of the prediction error Z −E(Z |x).
                                                                                           Both E(Z |x) and Var(Z |x) are in general stochastic variables, but for the multivariate
                                                                                        normal distribution Var(Z |x) is constant. Note that Var(Z |x) is less than 6zz (in a matrix
                                                                                        sense) if x contains any relevant information (so 6zx is not zero, that is, E(z|x) is not a
                                                                                        constant).
                                                                                           It can also be useful to know that Var(Z ) =E[Var (Z |X )] + Var[E (Z |X )] (the X is
                                                                                        now random), which here becomes 6zz − 6zx 6x−1    x 6x z + 6zx 6x x Var(X ) 6x x 6x Z = 6zz .
                                                                                                                                                         −1          −1




                                                                                 148                                                                                             149
12.2     Kalman Recursions                                                                        Now we want an estimate of αt based α̂t−1 . From (12.5) the obvious estimate, denoted
                                                                                               by αt|t−1 , is
12.2.1   State space form                                                                                                        α̂t|t−1 = T α̂t−1 .                              (12.7)
The measurement equation is                                                                    The variance of the prediction error is

                            yt = Z αt + t , with Var (t ) = H ,
                                                                                                                       h                         0 i
                                                                                     (12.4)                 Pt|t−1 = E αt − α̂t|t−1 αt − α̂t|t−1
                                                                                                                                      
                                                                                                                       n                                            0 o
where yt and t are n×1 vectors, and Z an n×m matrix. (12.4) expresses some observable                             = E T αt−1 + u t − T α̂t−1 T αt−1 + u t − T α̂t−1
                                                                                                                                             

variables yt in terms of some (partly) unobservable state variables αt . The transition
                                                                                                                       n                                             0 o
                                                                                                                   = E T α̂t−1 − αt−1 − u t T α̂t−1 − αt−1 − u t
                                                                                                                                                           
equation for the states is                                                                                               h                            0 i
                                                                                                                   = T E α̂t−1 − αt−1 α̂t−1 − αt−1 T 0 + Eu t u 0t
                                                                                                                                        

                           αt = T αt−1 + u t , with Var (u t ) = Q,                  (12.5)
                                                                                                                    = T Pt−1 T 0 + Q,                                                              (12.8)
where αt and u t are m × 1 vectors, and T an m × m matrix. This system is time invariant
                                                                                               where we have used (12.5), (12.6), and the fact that u t is uncorrelated with α̂t−1 − αt−1 .
since all coefficients are constant. It is assumed that all errors are normally distributed,
and that E(t u t−s ) = 0 for all s.                                                           Example 2 (AR(2) continued.) By substitution we get

Example 1 (AR(2).) The process xt = ρ1 xt−1 + ρ2 xt−2 + et can be rewritten as
                                                                                                                     "           # "            #"           #
                                                                                                                         x̂t|t−1        ρ1 ρ2      x̂t−1|t−1
                                                                                                           α̂t|t−1 =              =                            , and
                                          "      #                                                                     x̂t−1|t−1         1 0       x̂t−2|t−1
                                h       i    xt
                         xt = 1 0                      0 ,
                                                    +|{z}                                                                  "           #          "          #       "                 #
                        |{z}
                          yt    | {z } xt−1           t                                                                       ρ1 ρ2                  ρ1 1               Var (t ) 0
                                    Z     |  {z   }                                                             Pt|t−1 =                   Pt−1                  +
                                                            αt                                                                 1 0                    ρ2 0                  0      0
                      "         #       "       #"      # "    #                                                                                                                       "                 #
                           xt             ρ1 ρ2    xt−1     et                                                                                                                             Var (t ) 0
                                    =                    +      ,                              If we treat x−1 and x0 as given, then P0 = 02×2 which would give P1|0 =                                   .
                        xt−1              1 0      xt−2     0                                                                                                                                 0      0
                      | {z }            |   {z  }| {z } | {z }
                           αt                   T         αt−1        ut
                       "                    #                                                  12.2.3   Updating equations: E(αt |It−1 ) →E(αt |It )
                           Var (et ) 0
with H = 0, and Q =                             . In this case n = 1, m = 2.
                              0      0                                                         The best estimate of yt , given ât|t−1 , follows directly from (12.4)

12.2.2   Prediction equations: E(αt |It−1 )                                                                                            ŷt|t−1 = Z α̂t|t−1 ,                                       (12.9)

Suppose we have an estimate of the state in t − 1 based on the information set in t − 1,       with prediction error
denoted by α̂t−1 , and that this estimate has the variance
                                                                                                                         vt = yt − ŷt|t−1 = Z αt − α̂t|t−1 + t .
                                                                                                                                                           
                                                                                                                                                                                                 (12.10)
                                    h                        0 i
                         Pt−1 = E α̂t−1 − αt−1 α̂t−1 − αt−1 .
                                                  
                                                                                  (12.6)



                                                                                        150                                                                                                          151
The variance of the prediction error is                                                                                  with variance
                                                                                                                                                                                                   −1
                  Ft = E vt vt0                                                                                                                              0
                                                                                                                                                                  Z0 Z P Z0 + H
                                
                                                                                                                                             Pt = Pt|t−1 − Pt|t−1                                        Z Pt|t−1 ,          (12.14)
                         n                                        0 o
                                                                                                                                            |{z}  | {z } | {z }| t|t−1 {z                               }| {z }
                     = E Z αt − α̂t|t−1 + t Z αt − α̂t|t−1 + t                                                                           Var(z|x)      6zz          6zx                                   6x z
                                                         
                                                                                                                                                                                       6x−1
                                                                                                                                                                                          x
                          h                         0 i
                     = Z E αt − α̂t|t−1 αt − α̂t|t−1 Z 0 + Et t0                                                       where α̂t|t−1 (“Ez”) is from (12.7), Pt|t−1 Z 0 (“6zx ”) from (12.12), Z Pt|t−1 Z 0 + H (“6x x ”)
                                       

                                                                                                                         from (12.11), and Z α̂t|t−1 (“Ex”) from (12.9).
                        = Z Pt|t−1 Z 0 + H,                                                                (12.11)
                                                                                                                             (12.13) uses the new information in yt , that is, the observed prediction error, in order
where we have used the definition of Pt|t−1 in (12.8), and of H in 12.4. Similarly, the                                  to update the estimate of αt from α̂t|t−1 to α̂t .
covariance of the prediction errors for yt and for αt is                                                                     Proof. The last term in (12.14) follows from the expected value of the square of the
                                                                                                                         last term in (12.13)
       Cov αt − α̂t|t−1 , yt − ŷt|t−1 = E αt − α̂t|t−1 yt − ŷt|t−1
                                                                   
                                                                                                                                                       −1                                         0                      −1
                                                                                                                         Pt|t−1 Z 0 Z Pt|t−1 Z 0 + H         E yt − Z αt|t−1       yt − Z αt|t−1          Z Pt|t−1 ,
                                                                                                                                                                                                        Z Pt|t−1 Z 0 + H
                                           n                                                                                                                                   
                                                                              0 o
                                        = E αt − α̂t|t−1 Z αt − α̂t|t−1 + t
                                                                          
                                           h                           0 i                                                                                                                             (12.15)
                                        = E αt − α̂t|t−1 αt − α̂t|t−1 Z 0
                                                         
                                                                                                                         where we have exploited the symmetry of covariance matrices. Note that yt − Z αt|t−1 =
                                               = Pt|t−1 Z 0 .                                              (12.12)       yt − ŷt|t−1 , so the middle term in the previous expression is
                                                                                                                                                                                  0
                                                                                                                                             E yt − Z αt|t−1         yt − Z αt|t−1 = Z Pt|t−1 Z 0 + H.
                                                                                                                                                                 
     Suppose that yt is observed and that we want to update our estimate of αt from α̂t|t−1                                                                                                                                  (12.16)
to α̂t , where we want to incorporate the new information conveyed by yt .
                                                                                                                         Using this gives the last term in (12.14).
Example 3 (AR(2) continued.) We get
                             "           #                                                                               12.2.4   The Kalman Algorithm
                      h    i     x̂t|t−1
 ŷt|t−1 = Z α̂t|t−1 = 1 0                 = x̂t|t−1 = ρ1 x̂t−1|t−1 + ρ2 x̂t−2|t−1 , and
                               x̂t−1|t−1                                                                                 The Kalman algorithm calculates optimal predictions of αt in a recursive way. You can
                            ("           #          "           #       "                  #)                            also calculate the prediction errors vt in (12.10) as a by-prodct, which turns out to be
             h         i         ρ1 ρ2                  ρ1 1             Var (t ) 0            h         i0
                                                                                                                         useful in estimation.
      Ft =       1 0                         Pt−1                   +                               1 0        .
                                 1 0                    ρ2 0                0      0
                                                    "                   #                                                   1. Pick starting values for P0 and α0 . Let t = 1.
                                                        Var (t ) 0
If P0 = 02×2 as before, then F1 = P1 =                                      .
                                                           0      0                                                         2. Calculate (12.7), (12.8), (12.13), and (12.14) in that order. This gives values for α̂t
    By applying the rules (12.2) and (12.3) we note that the expectation of αt (like z in                                      and Pt . If you want vt for estimation purposes, calculate also (12.10) and (12.11).
(12.2)) conditional on yt (like x in (12.2)) is (note that yt is observed so we can use it to                                  Increase t with one step.
guess αt )
                                                                                                                            3. Iterate on 2 until t = T .
                                                                   −1                    
                                                                                                                             One choice of starting values that work in stationary models is to set P0 to the uncon-
         α̂t = α̂t|t−1 + Pt|t−1 Z 0  Z Pt|t−1 Z 0 + H                      yt − Z α̂t|t−1              (12.13)
                                                       
        |{z}   | {z } | {z } |               {z       }                            | {z }                                ditional covariance matrix of αt , and α0 to the unconditional mean. This is the matrix P
        E(z|x)         Ez          6zx              6x x =Ft                          Ex


                                                                                                                   152                                                                                                           153
to which (12.8) converges: P = T P T 0 + Q. (The easiest way to calculate this is simply          Lütkepohl, H., 1993, Introduction to Multiple Time Series, Springer-Verlag, 2nd edn.
to start with P = I and iterate until convergence.)
    In non-stationary model we could set

                              P0 = 1000 ∗ Im , and α0 = 0m×1 ,                         (12.17)

in which case the first m observations of α̂t and vt should be disregarded.

12.2.5   MLE based on the Kalman filter

For any (conditionally) Gaussian time series model for the observable yt the log likelihood
for an observation is
                                 n         1          1
                       ln L t = − ln (2π) − ln |Ft | − vt0 Ft−1 vt .                   (12.18)
                                 2         2          2
In case the starting conditions are as in (12.17), the overall log likelihood function is
                            ( P
                                 T
                                     ln L t in stationary models
                    ln L = Pt=1  T                                                    (12.19)
                                 t=m+1 ln L t in non-stationary models.


12.2.6   Inference and Diagnostics

We can, of course, use all the asymptotic MLE theory, like likelihood ratio tests etc. For
diagnostoic tests, we will most often want to study the normalized residuals
                                     p
                         ṽit = vit / element ii in Ft , i = 1, ..., n,

since element ii in Ft is the standard deviation of the scalar residual vit . Typical tests are
CUSUMQ tests for structural breaks, various tests for serial correlation, heteroskedastic-
ity, and normality.


Bibliography
Hamilton, J. D., 1994, Time Series Analysis, Princeton University Press, Princeton.

Harvey, A. C., 1989, Forecasting, Structural Time Series Models and the Kalman Filter,
  Cambridge University Press.


                                                                                          154                                                                                             155
                                                                                                       that Pr(x > 1.96) ≈ 0.025 in a N (0, 1) distribution).
                                                                                                           Sometimes the residuals are instead standardized by taking into account the uncer-
                                                                                                       tainty of the estimated coefficients. Note that
13      Outliers and Robust Estimators
                                                                                                                                         û (s)          0 (s)
                                                                                                                                            t = yt − x t β̂
                                                                                                                                                                     
13.1     Influential Observations and Standardized Residuals                                                                                    = u t + xt0 β − β̂ (s) ,                           (13.6)

Reference: Greene (2000) 6.9; Rousseeuw and Leroy (1987)                                               since yt = xt0 β + u t . The variance of û t is therefore the variance of the sum on the
   Consider the linear model                                                                           right hand side of this expression. When we use the variance of u t as we did above to
                                  yt = xt0 β0 + u t ,                                        (13.1)    standardize the residuals, then we disregard the variance of β̂ (s) . In general, we have
where xt is k × 1. The LS estimator
                                                                                                            Var û (s)
                                                                                                                                                               h                 i
                                                                                                                   t   = Var(u t ) + xt0 Var β − β̂ (s) xt + 2Cov u t , xt0 β − β̂ (s) .       (13.7)
                                             T
                                                            !−1 T
                                                                                                       When t = s, which is the case we care about, the covariance term drops out since β̂ (s)
                                             X                 X
                                  β̂ =             xt xt0           xt yt ,                  (13.2)
                                             t=1              t=1                                      cannot be correlated with u s since period s is not used in the estimation (this statement
which is the solution to                                                                               assumes that shocks are not autocorrelated). The first term is then estimated as the usual
                                             T
                                             X                     2                                  variance of the residuals (recall that period s is not used) and the second term is the
                                      min             yt − xt0 β        .                    (13.3)
                                         β                                                             estimated covariance matrix of the parameter vector (once again excluding period s) pre-
                                              t=1
The fitted values and residuals are                                                                    and postmultiplied by xs .

                                  ŷt = xt0 β̂, and û t = yt − ŷt .                        (13.4)    Example 1 (Errors are iid independent of the regressors.) In this case the variance of
                                                                                                       the parameter vector is estimated as σ̂ 2 (6xt xt0 )−1 (excluding period s), so we have
   Suppose we were to reestimate β on the whole sample, except observation s. This
                                                                                                                                Var û (s)
                                                                                                                                                                      
would give us an estimate β̂ (s) . The fitted values and residual are then                                                             t   = σ̂ 2 1 + xs0 (6xt xt0 )−1 xs .

                              ŷt(s) = xt0 β̂ (s) , and û (s)        (s)
                                                           t = yt − ŷt .                    (13.5)
                                                                                                       13.2     Recursive Residuals∗
A common way to study the sensitivity of the results with respect to excluding observa-
                                                                                                       Reference: Greene (2000) 7.8
tions is to plot β̂ (s) − β̂, and ŷs(s) − ŷs . Note that we here plot the fitted value of ys using
                                                                                                           Recursive residuals are a version of the technique discussed in Section 13.1. They
the coefficients estimated by excluding observation s from the sample. Extreme values
                                                                                                       are used when data is a time series. Suppose we have a sample t = 1, ..., T ,.and that
prompt a closer look at data (errors in data?) and perhaps also a more robust estimation
                                                                                                       t = 1, ..., s are used to estimate a first estimate, β̂ [s] (not to be confused with β̂ (s) used in
method than LS, which is very sensitive to outliers.
                                                                                                       Section 13.1). We then make a one-period ahead forecast and record the fitted value and
       Another useful way to spot outliers is to study the standardized residuals, û s /σ̂ and
                                                                                                       the forecast error
û (s)   (s)
   s /σ̂ , where σ̂ and σ̂
                              (s) are standard deviations estimated from the whole sample and
                                                                                                                                   [s]
                                                                                                                                 ŷs+1    0
                                                                                                                                       = xs+1 β̂ [s] , and û [s]            [s]
                                                                                                                                                              s+1 = ys+1 − ŷs+1 .                  (13.8)
excluding observation s, respectively. Values below -2 or above 2 warrant attention (recall


                                                                                               156                                                                                                   157
 Rescursive residuals from AR(1) with corr=0.85
                                              CUSUM statistics and 95% confidence band                                                       OLS vs LAD
                                                50                                                                 2
      2
                                                                                                                 1.5
       0                                                0                                                          1

     −2
                                                                                                                 0.5
                                                     −50                                                           0
           0           100                  200             0              100         200
                      period                                              period                               −0.5                                                       Data
Figure 13.1: This figure shows recursive residuals and CUSUM statistics, when data are                           −1                                                       0.75*x
simulated from yt = 0.85yt−1 + u t , with Var(u t ) = 1.                                                                                                                  OLS
                                                                                                               −1.5
                                                                                                                                                                          LAD
This is repeated for the rest of the sample by extending the sample used in the estimation                       −2
                                                                                                                  −3         −2         −1          0         1          2 3
by one period, making a one-period ahead forecast, and then repeating until we reach the                                                            x
end of the sample.                                                                                  Figure 13.2: This figure shows an example of how LS and LAD can differ. In this case
    A first diagnosis can be made by examining the standardized residuals, û [s]                   yt = 0.75xt + u t , but only one of the errors has a non-zero value.
                                                                                      s+1 /σ̂ ,
                                                                                              [s]

where σ̂ can be estimated as in (13.7) with a zero covariance term, since u s+1 is not
          [s]

correlated with data for earlier periods (used in calculating β̂ [s] ), provided errors are not     are very correlated.)
autocorrelated. As before, standardized residuals outside ±2 indicates problems: outliers
or structural breaks (if the residuals are persistently outside ±2).                                13.3    Robust Estimation
    The CUSUM test uses these standardized residuals to form a sequence of test statistics.
A (persistent) jump in the statistics is a good indicator of a structural break. Suppose we         Reference: Greene (2000) 9.8.1; Rousseeuw and Leroy (1987); Donald and Maddala
use r observations to form the first estimate of β, so we calculate β̂ [s] and û [s]               (1993); and Judge, Griffiths, Lütkepohl, and Lee (1985) 20.4.
                                                                                  s+1 /σ̂
                                                                                          [s] for

s = r, ..., T . Define the cumulative sums of standardized residuals                                     The idea of robust estimation is to give less weight to extreme observations than in
                                                                                                    Least Squares. When the errors are normally distributed, then there should be very few ex-
                                      t
                                      X                                                             treme observations, so LS makes a lot of sense (and is indeed the MLE). When the errors
                               Wt =         û [s]
                                               s+1 /σ̂ , t = r, ..., T.
                                                      [s]
                                                                                          (13.9)
                                      s=r                                                           have distributions with fatter tails (like the Laplace or two-tailed exponential distribution,
                                                                                                     f (u) = exp(− |u| /σ )/2σ ), then LS is no longer optimal and can be fairly sensitive to
Under the null hypothesis that no structural breaks occurs, that is, that the true β is the
                                                                                                    outliers. The ideal way to proceed would be to apply MLE, but the true distribution is
same for the whole sample, Wt has a zero mean and a variance equal to the number of
                                                                                                    often unknown. Instead, one of the “robust estimators” discussed below is often used.
elements in the sum, t − r + 1. This follows from the fact that the standardized resid-
                                                                                                         Let û t = yt − xt0 β̂. Then, the least absolute deviations (LAD), least median squares
uals all have zero mean and unit variance and are uncorrelated with each other. Typ-
ically, Wt is plotted along with a 95% confidence interval, which can be shown to be
     √                        √
± a T − r + 2a (t − r ) / T − r with a = 0.948. The hypothesis of no structural
                                       

break is rejected if the Wt is outside this band for at least one observation. (The derivation
of this confidence band is somewhat tricky, but it incorporates the fact that Wt and Wt+1

                                                                                             158                                                                                              159
(LMS), and least trimmed squares (LTS) estimators solve                                                 A common indicator for multicollinearity is to standardize each element in xt by sub-
                                         T
                                                                                                    tracting the sample mean and then dividing by its standard deviation
                                         X
                    β̂ L AD = arg min             û t                                    (13.10)
                                   β
                                         t=1
                                                                                                                                    x̃it = (xit − x̄it ) /std (xit ) .                  (13.13)
                                         h    i
                    β̂ L M S = arg min median û 2t                                       (13.11)   (Another common procedure is to use x̃it = xit /(6t=1T x 2 /T )1/2 .)
                                   β                                                                                                                        it
                                         h
                                         X                                                             Then calculate the eigenvalues, λ j , of the second moment matrix of x̃t
                    β̂ L T S = arg min           û i2 , û 21 ≤ û 22 ≤ ... and h ≤ T.   (13.12)
                                   β                                                                                                                 T
                                         i=1                                                                                                     1X
                                                                                                                                          A=        x̃t x̃t0 .                          (13.14)
Note that the LTS estimator in (13.12) minimizes of the sum of the h smallest squared                                                            T
                                                                                                                                                    t=1
residuals.
                                                                                                        The condition number of a matrix is the ratio of the largest (in magnitude) of the
    These estimators involve non-linearities, so they are more computationally intensive
                                                                                                    eigenvalues to the smallest
than LS. In some cases, however, a simple iteration may work.
                                                                                                                                   c = |λ|max / |λ|min .                           (13.15)
Example 2 (Algorithm for LAD.) The LAD estimator can be written                                     (Some authors take c1/2 to be the condition number; others still define it in terms of the
                                                 T                                                  “singular values” of a matrix.) If the regressors are uncorrelated, then the condition value
                                                 X
                        β̂ L AD = arg min                wt û 2t , wt = 1/ û t ,                  of A is one. This follows from the fact that A is a (sample) covariance matrix. If it is
                                             β
                                                 t=1                                                diagonal, then the eigenvalues are equal to diagonal elements, which are all unity since
so it is a weighted least squares where both yt and xt are multiplied by 1/ û t . It can be        the standardization in (13.13) makes all variables have unit variances. Values of c above
shown that iterating on LS with the weights given by 1/ û t , where the residuals are from         several hundreds typically indicate serious problems.
the previous iteration, converges very quickly to the LAD estimator.

   It can be noted that LAD is actually the MLE for the Laplace distribution discussed
                                                                                                    Bibliography
above.                                                                                              Donald, S. G., and G. S. Maddala, 1993, “Identifying Outliers and Influential Observa-
                                                                                                      tions in Econometric Models,” in G. S. Maddala, C. R. Rao, and H. D. Vinod (ed.),
13.4    Multicollinearity∗                                                                            Handbook of Statistics, Vol 11 . pp. 663–701, Elsevier Science Publishers B.V.

Reference: Greene (2000) 6.7                                                                        Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
    When the variables in the xt vector are very highly correlated (they are “multicollinear”)        Jersey, 4th edn.
then data cannot tell, with the desired precision, if the movements in yt was due to move-
                                                                                                    Judge, G. G., W. E. Griffiths, H. Lütkepohl, and T.-C. Lee, 1985, The Theory and Practice
ments in xit or x jt . This means that the point estimates might fluctuate wildly over sub-
                                                                                                      of Econometrics, John Wiley and Sons, New York, 2nd edn.
samples and it is often the case that individual coefficients are insignificant even though
the R 2 is high and the joint significance of the coefficients is also high. The estimators         Rousseeuw, P. J., and A. M. Leroy, 1987, Robust Regression and Outlier Detection, John
are still consistent and asymptotically normally distributed, just very imprecise.                    Wiley and Sons, New York.


                                                                                             160                                                                                            161
                                                                                               is. The trick of GLS is to transform the variables and the do LS.


                                                                                               14.2    GLS as Maximum Likelihood
14      Generalized Least Squares
                                                                                               Remark 1 If the n×1 vector x has a multivariate normal distribution with mean vector µ
Reference: Greene (2000) 11.3-4
                                                                                               and covariance matrix , then the joint probability density function is (2π )−n/2 ||−1/2 exp[−(x−
Additional references: Hayashi (2000) 1.6; Johnston and DiNardo (1997) 5.4; Verbeek
                                                                                               µ)0 −1 (x − µ)/2].
(2000) 6
                                                                                                   If the T ×1 vector u is N (0, ), then the joint pdf of u is (2π )−n/2 ||−1/2 exp[−u 0 −1 u/2].
14.1     Introduction                                                                          Change variable from u to y − Xβ (the Jacobian of this transformation equals one), and
                                                                                               take logs to get the (scalar) log likelihood function
Instead of using LS in the presence of autocorrelation/heteroskedasticity (and, of course,
                                                                                                                     n         1        1
adjusting the variance-covariance matrix), we may apply the generalized least squares                        ln L = − ln (2π) − ln || − (y − Xβ)0 −1 (y − Xβ) .                      (14.3)
                                                                                                                     2         2        2
method. It can often improve efficiency.
                                                                                               To simplify things, suppose we know . It is then clear that we maximize the likelihood
    The linear model yt = xt0 β0 + u t written on matrix form (GLS is one of the cases in
                                                                                               function by minimizing the last term, which is a weighted sum of squared errors.
econometrics where matrix notation really pays off) is
                                                                                                  In the classical LS case,  = σ 2 I , so the last term in (14.3) is proportional to the
                     y = Xβ0 + u, where                                              (14.1)    unweighted sum of squared errors. The LS is therefore the MLE when the errors are iid
                                                                                               normally distributed.
                                                            
                            y1            x10                u1
                         
                          y2 
                                       0 
                                        x2 
                                                           
                                                            u2 
                                                                                                 When errors are heteroskedastic, but not autocorrelated, then  has the form
                     y=  ..   , X =  ..     , and u =  ..  .
                                                             
                          .           .                 . 
                                                                                                                                                        
                                                                                                                                    σ12 0 · · · 0
                            yT            x T0                uT
                                                                                                                                  
                                                                                                                                   0 σ2              .. 
                                                                                                                                                       . 
                                                                                                                            = .          2
                                                                                                                                                         .                        (14.4)
                                                                                                                                                        
                                                                                                                                   ..         ...
     Suppose that the covariance matrix of the residuals (across time) is                                                                            0 
                                                                                                                                   0 · · · 0 σT2
                                  Eu 1 u 1 Eu 1 u 2 · · · Eu 1 u T
                                                                                               In this case, we can decompose −1 as
                                                                   
                                Eu 2 u 1 Eu 2 u 2         Eu 2 u T 
                       Euu 0 =      ..              ..       ..    
                               
                                     .                 .      .
                                                                    
                                                                                                                                                                        
                                                                                                                                               1/σ1    0     ···    0
                                   Eu T u 1 Eu T u 2      Eu T u T                                                                                                 ..    
                                                                                                                                               0     1/σ2           .    
                             = T ×T .                                               (14.2)                        −1      0
                                                                                                                         = P P, where P =      ..                        .           (14.5)
                                                                                                                                                                         
                                                                                                                                                             ...
                                                                                                                                          
                                                                                                                                                .                   0    
                                                                                                                                                                          
This allows for both heteroskedasticity (different elements along the main diagonal) and                                                        0     ···     0    1/σT
autocorrelation (non-zero off-diagonal elements). LS is still consistent even if  is not
proportional to an identity matrix, but it is not efficient. Generalized least squares (GLS)


                                                                                        162                                                                                              163
The last term in (14.3) can then be written                                                         the covariance matrix of the errors is
          1                          1
                                                                                                                                         h             i0 
         − (y − Xβ)0 −1 (y − Xβ) = − (y − Xβ)0 P 0 P (y − Xβ)                                                                  = Cov      u1 u2 u3 u4
          2                          2
                                     1                                                                                                                    
                                  = − (P y − P Xβ)0 (P y − P Xβ) .                        (14.6)                                              1 a a2 a3
                                     2
                                                                                                                                      σ2               2 
                                                                                                                                                          
                                                                                                                                 =           a 1 a a .
This very practical result says that if we define yt∗ = yt /σt and xt∗ = xt /σt , then we get                                       1 − a2    2
                                                                                                                                             a a 1 a 
                                                                                                                                                           
ML estimates of β running an LS regression of yt∗ on xt∗ . (One of the elements in xt could
                                                                                                                                              a3 a2 a 1
be a constant—also this one should be transformed). This is the generalized least squares
(GLS).                                                                                              The inverse is                                       
                                                                                                                                     1   −a       0     0
                                                                                                                                1  −a 1 + a 2
                                                                                                                                                         
Remark 2 Let A be an n × n symmetric positive definite matrix. It can be decomposed                                                              −a     0 
                                                                                                                          −1 = 2                        ,
as A = P P 0 . There are many such P matrices, but only one which is lower triangular P                                        σ  0    −a    1 + a 2 −a 
                                                                                                                                                          
(see next remark).                                                                                                                   0    0      −a     1
                                                                                                    and note that we can decompose it as
Remark 3 Let A be an n × n symmetric positive definite matrix. The Cholesky decom-                                      √                     0  √                         
position gives the unique lower triangular P1 such that A = P1 P10 or an upper triangular                                  1 − a2 0      0   0        1 − a2 0    0         0
                                                                                                                                                                           
matrix P2 such that A = P20 P2 (clearly P2 = P10 ). Note that P1 and P2 must be invertible                          1       −a      1    0   0  1     −a      1  0         0 
                                                                                                            −1 =                                                            .
                                                                                                                                                  
                                                                                                                                                
(since A is).                                                                                                       σ      0    −a     1   0  σ
                                                                                                                                                
                                                                                                                                                       0     −a  1         0 
                                                                                                                                                                              
                                                                                                                             0      0 −a     1          0      0 −a         1
    When errors are autocorrelated (with or without heteroskedasticity), then it is typ-                            |            {z             }|          {z                }
                                                                                                                                  P0                            P
ically harder to find a straightforward analytical decomposition of −1 . We therefore
                                                                                                    This is not a Cholesky decomposition, but certainly a valid decomposition (in case of
move directly to the general case. Since the covariance matrix is symmetric and positive
                                                                                                    doubt, do the multiplication). Premultiply the system
definite, −1 is too. We therefore decompose it as
                                                                                                                                                          
                                                                                                                                   y1         x10           u1
                                         −1 = P 0 P.                                     (14.7)
                                                                                                                                 y2   x20 
                                                                                                                                                          
                                                                                                                                                   β0 +  u 2 
                                                                                                                                                              
                                                                                                                                     =
                                                                                                                                 y   x0                u 
The Cholesky decomposition is often a convenient tool, but other decompositions can                                              3   3                 3 
also be used. We can then apply (14.6) also in this case—the only difference is that P                                             y4         x40           u4
is typically more complicated than in the case without autocorrelation. In particular, the
                                                                                                    by P to get
transformed variables P y and P X cannot be done line by line (yt∗ is a function of yt , yt−1 ,
                                                                                                              q                      q                q        
and perhaps more).                                                                                                    1 − a 2 y1            1 − a 2 x10        1 − a2 u1
                                                                                                                                                                    
                                                                                                           1        y2 − ay1               0      0
                                                                                                                                  = 1  x2 − ax1  β0 + 1 
                                                                                                                                                              ε2      .
                                                                                                                                                                         
Example 4 (AR(1) errors, see Davidson and MacKinnon (1993) 10.6.) Let u t = au t−1 +
                                                                                                            
                                                                                                           σ        y3 − ay2 
                                                                                                                                  σ
                                                                                                                                        x30 − ax20 
                                                                                                                                                         σ
                                                                                                                                                           
                                                                                                                                                                 ε3
                                                                                                                                                                         
εt where εt is iid. We have Var(u t ) = σ 2 / 1 − a 2 , and Corr(u t , u t−s ) = a s . For T = 4,
                                                                                                                                                                       
                                                                                                                     y4 − ay3              x40 − ax30            ε4


                                                                                            164                                                                                      165
Note that all the residuals are uncorrelated in this formulation. Apart from the first ob-    established. Evidence from simulations suggests that the FGLS estimator can be a lot
servation, they are also identically distributed. The importance of the first observation     worse than LS if the estimate of  is bad.
becomes smaller as the sample size increases—in the limit, GLS is efficient.                      To use maximum likelihood when  is unknown requires that we make assumptions
                                                                                              about the structure of  (in terms of a small number of parameters), and more gener-
14.3     GLS as a Transformed LS                                                              ally about the distribution of the residuals. We must typically use numerical methods to
                                                                                              maximize the likelihood function.
When the errors are not normally distributed, then the MLE approach in the previous
section is not valid. But we can still note that GLS has the same properties as LS has with   Example 5 (MLE and AR(1) errors.) If u t in Example 4 are normally distributed, then
iid non-normally distributed errors. In particular, the Gauss-Markov theorem applies,         we can use the −1 in (14.3) to express the likelihood function in terms of the unknown
so the GLS is most efficient within the class of linear (in yt ) and unbiased estimators      parameters: β, σ , and a. Maximizing this likelihood function requires a numerical opti-
(assuming, of course, that GLS and LS really are unbiased, which typically requires that      mization routine.
u t is uncorrelated with xt−s for all s). This follows from that the transformed system

                                       P y = P Xβ0 + Pu
                                                                                              Bibliography
                                        y ∗ = X ∗ β0 + u ∗ ,                         (14.8)   Davidson, R., and J. G. MacKinnon, 1993, Estimation and Inference in Econometrics,
                                                                                                Oxford University Press, Oxford.
have iid errors, u ∗ . So see this, note that
                                                                                              Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
                                      Eu ∗ u ∗0 = EPuu 0 P 0
                                                                                                Jersey, 4th edn.
                                                = PEuu 0 P 0 .                       (14.9)
                                                                                              Hayashi, F., 2000, Econometrics, Princeton University Press.
Recall that Euu 0 = , P 0 P = −1 and that P 0 is invertible. Multiply both sides by P 0
                                                                                              Johnston, J., and J. DiNardo, 1997, Econometric Methods, McGraw-Hill, New York, 4th
                                  0   ∗ ∗0        0       0   0
                                P Eu u = P PEuu P                                               edn.
                                             = −1 P 0
                                                                                              Verbeek, M., 2000, A Guide to Modern Econometrics, Wiley, Chichester.
                                             = P 0 , so Eu ∗ u ∗0 = I.              (14.10)


14.4     Feasible GLS

In practice, we usually do not know . Feasible GLS (FGSL) is typically implemented by
first estimating the model (14.1) with LS, then calculating a consistent estimate of , and
finally using GLS as if  was known with certainty. Very little is known about the finite
sample properties of FGLS, but (the large sample properties) consistency, asymptotic
normality, and asymptotic efficiency (assuming normally distributed errors) can often be


                                                                                       166                                                                                        167
                                                                                            0.4   Asymptotic Properties of LS

                                                                                              1. ∗ Lecture notes
0     Reading List                                                                            2. ∗ GR 9.1–9.4, 11.2
Main reference: Greene (2000) (GR).
                                                                                               Keywords: consistency of LS, asymptotic normality of LS, influential observations,
  (∗ ) denotes required reading.
                                                                                            robust estimators, LAD

0.1    Introduction
                                                                                            0.5   Instrumental Variable Method
    1. ∗ Lecture notes
                                                                                              1. ∗ Lecture notes

0.2    Time Series Analysis                                                                   2. ∗ GR 9.5 and 16.1-2

    1. ∗ Lecture notes                                                                         Keywords: measurement errors, simultaneous equations bias, instrumental variables,
                                                                                            2SLS
    2. ∗ GR 13.1–13.3, 18.1–18.2, 17.5

    3. Obstfeldt and Rogoff (1996) 2.3.5                                                    0.6   Simulating the Finite Sample Properties

    4. Sims (1980)                                                                            1. ∗ Lecture notes

    Keywords: moments of a time series process, covariance stationarity, ergodicity, con-     2. ∗ GR 5.3
ditional and unconditional distributions, white noise, MA, AR, MLE of AR process, VAR.
                                                                                               Keywords: Monte Carlo simulations, Bootstrap simulations
(Advanced: unit roots, cointegration)

                                                                                            0.7   GMM
0.3    Distribution of Sample Averages
                                                                                              1. ∗ Lecture notes
    1. ∗ Lecture notes
                                                                                              2. ∗ GR 4.7 and 11.5-6
    2. GR 11.2
                                                                                              3. Christiano and Eichenbaum (1992)
    Keywords: Newey-West
                                                                                               Keywords: method of moments, unconditional/conditional moment conditions, loss
                                                                                            function, asymptotic distribution of GMM estimator, efficient GMM, GMM and inference



                                                                                     168                                                                                     169
0.7.1 Application of GMM: LS/IV with Autocorrelation and Heteroskedasticity                 Obstfeldt, M., and K. Rogoff, 1996, Foundations of International Macroeconomics, MIT
                                                                                              Press.
   1. ∗ Lecture notes
                                                                                            Sims, C. A., 1980, “Macroeconomics and Reality,” Econometrica, 48, 1–48.
   2. ∗ GR 12.2 and 13.4

   3. Lafontaine and White (1986)

   4. Mankiw, Romer, and Weil (1992)

    Keywords: finite sample properties of LS and IV, consistency of LS and IV, asymptotic
distribution of LS and IV

0.7.2   Application of GMM: Systems of Simultaneous Equations

   1. ∗ Lecture notes

   2. ∗ GR 16.1-2, 16.3 (introduction only)

   3. Obstfeldt and Rogoff (1996) 2.1

   4. Deaton (1992) 3

   Keywords: structural and reduced forms, identification, 2SLS


Bibliography
Christiano, L. J., and M. Eichenbaum, 1992, “Current Real-Business-Cycle Theories and
  Aggregate Labor-Market Fluctuations,” American Economic Review, 82, 430–450.

Deaton, A., 1992, Understanding Consumption, Oxford University Press.

Greene, W. H., 2000, Econometric Analysis, Prentice-Hall, Upper Saddle River, New
  Jersey, 4th edn.

Lafontaine, F., and K. J. White, 1986, “Obtaining Any Wald Statistic You Want,” Eco-
  nomics Letters, 21, 35–40.

Mankiw, N. G., D. Romer, and D. N. Weil, 1992, “A Contribution to the Empirics of
 Economic Growth,” Quarterly Journal of Economics, 107, 407–437.

                                                                                     170                                                                                    171



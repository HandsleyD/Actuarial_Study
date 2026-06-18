---
normalized_id: shared-solutions-greene-w-h-econometric-analysis-solution-manual-5ed-ph-2003-isbn-0130661899-o-154s-gl
exam_code: SHARED
material_scope: greene w.h. econometric analysis.. solution manual (5ed., ph, 2003)(isbn 0130661899)(o)(154s)_gl_.pdf
material_group: shared
document_type: solutions
source_repo_path: resources/source-material/shared/Greene W.H. Econometric analysis.. Solution manual (5ed., PH, 2003)(ISBN 0130661899)(O)(154s)_GL_.pdf
conversion_method: pdftotext
qa_status: pending
---
# shared-solutions-greene-w-h-econometric-analysis-solution-manual-5ed-ph-2003-isbn-0130661899-o-154s-gl

Solutions Manual


                 Econometric Analysis
                                                         Fifth Edition


                                          William H. Greene
                                                      New York University




Prentice Hall, Upper Saddle River, New Jersey 07458
Contents and Notation
Chapter 1 Introduction 1
Chapter 2 The Classical Multiple Linear Regression Model 2
Chapter 3 Least Squares 3
Chapter 4 Finite-Sample Properties of the Least Squares Estimator 7
Chapter 5 Large-Sample Properties of the Least Squares and Instrumental Variables Estimators 14
Chapter 6 Inference and Prediction 19
Chapter 7 Functional Form and Structural Change 23
Chapter 8 Specification Analysis and Model Selection 30
Chapter 9 Nonlinear Regression Models 32
Chapter 10 Nonspherical Disturbances - The Generalized Regression Model 37
Chapter 11 Heteroscedasticity 41
Chapter 12 Serial Correlation 49
Chapter 13 Models for Panel Data 53
Chapter 14 Systems of Regression Equations 63
Chapter 15 Simultaneous Equations Models 72
Chapter 16 Estimation Frameworks in Econometrics 78
Chapter 17 Maximum Likelihood Estimation 84
Chapter 18 The Generalized Method of Moments 93
Chapter 19 Models with Lagged Variables 97
Chapter 20 Time Series Models 101
Chapter 21 Models for Discrete Choice 1106
Chapter 22 Limited Dependent Variable and Duration Models 112
Appendix A Matrix Algebra 115
Appendix B Probability and Distribution Theory 123
Appendix C Estimation and Inference 134
Appendix D Large Sample Distribution Theory 145
Appendix E Computation and Optimization 146


In the solutions, we denote:

         • scalar values with italic, lower case letters, as in a or α
         • column vectors with boldface lower case letters, as in b,
         • row vectors as transposed column vectors, as in b′,
         • single population parameters with greek letters, as in β,
         • sample estimates of parameters with English letters, as in b as an estimate of β,
         • sample estimates of population parameters with a caret, as in αˆ
         • matrices with boldface upper case letters, as in M or Σ,
         • cross section observations with subscript i, time series observations with subscript t.

These are consistent with the notation used in the text.
Chapter 1
Introduction
There are no exercises in Chapter 1.




                                       1
Chapter 2
The Classical Multiple Linear
Regression Model
There are no exercises in Chapter 2.




                                       2
Chapter 3
Least Squares
              1            x1 
              
1. (a) Let X = .             .  . The normal equations are given by (3-12), X′e = 0 , hence for each of the
              
               1          xn 
columns of X, xk, we know that xk’e=0. This implies that    ∑ e = 0 and ∑ x e = 0 .
                                                                   i i             i   i i

(b) Use ∑ e = 0 to conclude from the first normal equation that a = y − b x .
            i i

(c) Know that ∑ e = 0 and ∑ x e = 0 . It follows then that ∑ (x − x )e = 0 . Further, the latter
                      i i                i   i i                           i   i             i

implies ∑ (x − x )( y − a − bx ) = 0 or ∑ (x − x )(y − y − b(x − x )) = 0 from which the result
            i     i         i        i              i   i      i           i

follows.

2. Suppose b is the least squares coefficient vector in the regression of y on X and c is any other Kx1 vector.
Prove that the difference in the two sums of squared residuals is
                              (y-Xc)′(y-Xc) - (y-Xb)′(y-Xb) = (c - b)′X′X(c - b).
Prove that this difference is positive.
          Write c as b + (c - b). Then, the sum of squared residuals based on c is
(y - Xc)′(y - Xc) = [y - X(b + (c - b))] ′[y - X(b + (c - b))] = [(y - Xb) + X(c - b)] ′[(y - Xb) + X(c - b)]
                              = (y - Xb) ′(y - Xb) + (c - b) ′X′X(c - b) + 2(c - b) ′X′(y - Xb).
But, the third term is zero, as 2(c - b) ′X′(y - Xb) = 2(c - b)X′e = 0. Therefore,
                              (y - Xc) ′(y - Xc) = e′e + (c - b) ′X′X(c - b)
or                            (y - Xc) ′(y - Xc) - e′e = (c - b) ′X′X(c - b).
The right hand side can be written as d′d where d = X(c - b), so it is necessarily positive. This confirms what
we knew at the outset, least squares is least squares.

3. Consider the least squares regression of y on K variables (with a constant), X. Consider an alternative set of
regressors, Z = XP, where P is a nonsingular matrix. Thus, each column of Z is a mixture of some of the
columns of X. Prove that the residual vectors in the regressions of y on X and y on Z are identical. What
relevance does this have to the question of changing the fit of a regression by changing the units of
measurement of the independent variables?
          The residual vector in the regression of y on X is MXy = [I - X(X′X)-1X′]y. The residual vector in
the regression of y on Z is
                   MZy       = [I - Z(Z′Z)-1Z′]y
                             = [I - XP((XP)′(XP))-1(XP)′)y
                             = [I - XPP-1(X′X)-1(P′)-1P′X′)y
                             = MXy
Since the residual vectors are identical, the fits must be as well. Changing the units of measurement of the
regressors is equivalent to postmultiplying by a diagonal P matrix whose kth diagonal element is the scale
factor to be applied to the kth variable (1 if it is to be unchanged). It follows from the result above that this
will not change the fit of the regression.

4. In the least squares regression of y on a constant and X, in order to compute the regression coefficients on
X, we can first transform y to deviations from the mean, y , and, likewise, transform each column of X to
deviations from the respective column means; second, regress the transformed y on the transformed X without
a constant. Do we get the same result if we only transform y? What if we only transform X?


                                                                                                               3
          In the regression of y on i and X, the coefficients on X are b = (X′M0X)-1X′M0y. M0 = I - i(i′i)-1i′
is the matrix which transforms observations into deviations from their column means. Since M0 is idempotent
and symmetric we may also write the preceding as [(X′M0′)(M0X)]-1(X′M0′M0y) which implies that the
regression of M0y on M0X produces the least squares slopes. If only X is transformed to deviations, we
would compute [(X′M0′)(M0X)]-1(X′M0′)y but, of course, this is identical. However, if only y is transformed,
the result is (X′X)-1X′M0y which is likely to be quite different. We can extend the result in (6-24) to derive
what is produced by this computation. In the formulation, we let X1 be X and X2 is the column of ones, so
that b2 is the least squares intercept. Thus, the coefficient vector b defined above would be b = (X′X)-1X′(y
- ai). But, a = y - b′ x so b = (X′X)-1X′(y - i( y - b′ x )). We can partition this result to produce
                            (X′X)-1X′(y - i y )= b - (X′X)-1X′i(b′ x )= (I - n(X′X)-1 x x ′)b.
(The last result follows from X′i = n x .) This does not provide much guidance, of course, beyond the
observation that if the means of the regressors are not zero, the resulting slope vector will differ from the
correct least squares coefficient vector.

5. What is the result of the matrix product M1M where M1 is defined in (3-19) and M is defined in (3-14)?
                   M1M = (I - X1(X1′X1)-1X1′)(I - X(X′X)-1X′) = M - X1(X1′X1)-1X1′M
There is no need to multiply out the second term. Each column of MX1 is the vector of residuals in the
regression of the corresponding column of X1 on all of the columns in X. Since that x is one of the columns in
X, this regression provides a perfect fit, so the residuals are zero. Thus, MX1 is a matrix of zeroes which
implies that M1M = M.

6. Adding an observation. A data set consists of n observations on Xn and yn. The least squares estimator
based on these n observations is b n = ( X′n X n ) X′n y n . Another observation, xs and ys, becomes
                                                          −1

available. Prove that the least squares estimator computed using this additional observation is
                                            1
                   bn,s = bn +                           ( X′n X n ) −1 x s ( ys − x′s b n ).
                                 1 + x′s ( X′n X n ) x s
                                                    −1


Note that the last term is es, the residual from the prediction of ys using the coefficients based on Xn and bn.
Conclude that the new data change the results of least squares only if the new observation on y cannot be
perfectly predicted using the information already in hand.

7. A common strategy for handling a case in which an observation is missing data for one or more variables is
to fill those missing variables with 0s or add a variable to the model that takes the value 1 for that one
observation and 0 for all other observations. Show that this ‘strategy’ is equivalent to discarding the
observation as regards the computation of b but it does have an effect on R2. Consider the special case in
which X contains only a constant and one variable. Show that replacing the missing values of X with the
mean of the complete observations has the same effect as adding the new variable.

8. Let Y denote total expenditure on consumer durables, nondurables, and services, and Ed, En, and Es are the
expenditures on the three categories. As defined, Y = Ed + En + Es. Now, consider the expenditure system
                    Ed = αd + βdY + γddPd + γdnPn + γdsPs + εγd
                    En = αn + βnY + γndPd + γnnPn + γnsPs + εn
                    Es = αs + βsY + γsdPd + γsnPn + γssPs + εs.
Prove that if all equations are estimated by ordinary least squares, then the sum of the income coefficients will
be 1 and the four other column sums in the preceding model will be zero.
         For convenience, reorder the variables so that X = [i, Pd, Pn, Ps, Y]. The three dependent variables
are Ed, En, and Es, and Y = Ed + En + Es. The coefficient vectors are
                    bd = (X′X)-1X′Ed, bn = (X′X)-1X′En, and bs = (X′X)-1X′Es.
The sum of the three vectors is
                    b = (X′X)-1X′[Ed + En + Es] = (X′X)-1X′Y.
Now, Y is the last column of X, so the preceding sum is the vector of least squares coefficients in the
regression of the last column of X on all of the columns of X, including the last. Of course, we get a perfect



                                                                                                               4
fit. In addition, X′[Ed + En + Es] is the last column of X′X, so the matrix product is equal to the last column of
an identity matrix. Thus, the sum of the coefficients on all variables except income is 0, while that on income
is 1.

9. Prove that the adjusted R2 in (3-30) rises (falls) when variable xk is deleted from the regression if the square
of the t ratio on xk in the multiple regression is less (greater) than one.
                                                                             2
         The proof draws on the results of the previous problem. Let R K denote the adjusted R2 in the full
                                                     2
regression on K variables including xk, and let R1 denote the adjusted R2 in the short regression on K-1
variables when xk is omitted. Let RK2 and R12 denote their unadjusted counterparts. Then,
                             RK2 = 1 - e′e/y′M0y
                             R12 = 1 - e1′e1/y′M0y
where e′e is the sum of squared residuals in the full regression, e1′e1 is the (larger) sum of squared residuals in
the regression which omits xk, and y′M0y = Σi (yi - y )2
                               2
Then,                        R K = 1 - [(n-1)/(n-K)](1 - RK2 )
                               2
and                         R1 = 1 - [(n-1)/(n-(K-1))](1 - R12 ).
The difference is the change in the adjusted R2 when xk is added to the regression,
                               2     2
                               R K - R1 = [(n-1)/(n-K+1)][e1′e1/y′M0y] - [(n-1)/(n-K)][e′e/y′M0y].
The difference is positive if and only if the ratio is greater than 1. After cancelling terms, we require for the
adjusted R2 to increase that e1′e1/(n-K+1)]/[(n-K)/e′e] > 1. From the previous problem, we have that e1′e1 =
e′e + bK2(xk′M1xk), where M1 is defined above and bk is the least squares coefficient in the full regression of y
on X1 and xk. Making the substitution, we require [(e′e + bK2(xk′M1xk))(n-K)]/[(n-K)e′e + e′e] > 1. Since
e′e = (n-K)s2, this simplifies to [e′e + bK2(xk′M1xk)]/[e′e + s2] > 1. Since all terms are positive, the fraction
is greater than one if and only bK2(xk′M1xk) > s2 or bK2(xk′M1xk/s2) > 1. The denominator is the estimated
variance of bk, so the result is proved.

10. Suppose you estimate a multiple regression first with then without a constant. Whether the R2 is higher in
the second case than the first will depend in part on how it is computed. Using the (relatively) standard
method, R2 = 1 - e′e / y′M0y, which regression will have a higher R2?
         This R2 must be lower. The sum of squares associated with the coefficient vector which omits the
constant term must be higher than the one which includes it. We can write the coefficient vector in the
regression without a constant as c = (0,b*) where b* = (W′W)-1W′y, with W being the other K-1 columns of
X. Then, the result of the previous exercise applies directly.

11. Three variables, N, D, and Y all have zero means and unit variances. A fourth variable is C = N + D. In
the regression of C on Y, the slope is .8. In the regression of C on N, the slope is .5. In the regression of D on
Y, the slope is .4. What is the sum of squared residuals in the regression of C on D? There are 21
observations and all moments are computed using 1/(n-1) as the divisor.
         We use the notation ‘Var[.]’ and ‘Cov[.]’ to indicate the sample variances and covariances. Our
information is              Var[N] = 1, Var[D] = 1, Var[Y] = 1.
Since C = N + D, Var[C] = Var[N] + Var[D] + 2Cov[N,D] = 2(1 + Cov[N,D]).
From the regressions, we have
                            Cov[C,Y]/Var[Y] = Cov[C,Y] = .8.
But,                        Cov[C,Y] = Cov[N,Y] + Cov[D,Y].
Also,                       Cov[C,N]/Var[N] = Cov[C,N] = .5,
but,                        Cov[C,N] = Var[N] + Cov[N,D] = 1 + Cov[N,D], so Cov[N,D] = -.5,
so that                     Var[C] = 2(1 + -.5) = 1.
And,                        Cov[D,Y]/Var[Y] = Cov[D,Y] = .4.
Since                       Cov[C,Y] = .8 = Cov[N,Y] + Cov[D,Y], Cov[N,Y] = .4.
Finally,                    Cov[C,D] = Cov[N,D] + Var[D] = -.5 + 1 = .5.
Now, in the regression of C on D, the sum of squared residuals is (n-1){Var[C] - (Cov[C,D]/Var[D])2Var[D]}



                                                                                                                 5
based on the general regression result Σe2 = Σ(yi - y )2 - b2Σ(xi - x )2. All of the necessary figures were
obtained above. Inserting these and n-1 = 20 produces a sum of squared residuals of 15.

12. Using the matrices of sums of squares and cross products immediately preceding Section 3.2.3, compute
the coefficients in the multiple regression of real investment on a constant, real GNP and the interest rate.
Compute R2.        The relevant submatrices to be used in the calculations are
                                     Investment        Constant         GNP               Interest
                  Investment               *            3.0500          3.9926            23.521
                  Constant                                15            19.310            111.79
                  GNP                                                   25.218            148.98
                  Interest                                                                943.86
The inverse of the lower right 3×3 block is (X′X)-1,
                                      7.5874
          (X′X)-1 =                  -7.41859          7.84078
                                       .27313          -.598953         .06254637
The coefficient vector is b = (X′X)-1X′y = (-.0727985, .235622, -.00364866)′. The total sum of squares is
y′y = .63652, so we can obtain e′e = y′y - b′X′y. X′y is given in the top row of the matrix. Making the
substitution, we obtain e′e = .63652 - .63291 = .00361. To compute R2, we require Σi (xi - y )2 =
.63652 - 15(3.05/15)2 = .01635333, so R2 = 1 - .00361/.0163533 = .77925.

13. In the December, 1969, American Economic Review (pp. 886-896), Nathanial Leff reports the
following least squares regression results for a cross section study of the effect of age composition on
savings in 74 countries in 1964:

         log S/Y = 7.3439 + 0.1596 log Y/N + 0.0254 log G - 1.3520 log D1 - 0.3990 log D2 (R2 = 0.57)

         log S/N = 8.7851 + 1.1486 log Y/N + 0.0265 log G - 1.3438 log D1 - 0.3966 log D2 (R2 = 0.96)

where S/Y = domestic savings ratio, S/N = per capita savings, Y/N = per capita income, D1 = percentage of
the population under 15, D2 = percentage of the population over 64, and G = growth rate of per capita
income. Are these results correct? Explain.
          The results cannot be correct. Since log S/N = log S/Y + log Y/N by simple, exact algebra, the
same result must apply to the least squares regression results. That means that the second equation
estimated must equal the first one plus log Y/N. Looking at the equations, that means that all of the
coefficients would have to be identical save for the second, which would have to equal its counterpart in
the first equation, plus 1. Therefore, the results cannot be correct. In an exchange between Leff and
Arthur Goldberger that appeared later in the same journal, Leff argued that the difference was simple
rounding error. You can see that the results in the second equation resemble those in the first, but not
enough so that the explanation is credible.




                                                                                                           6
Chapter 4
Finite-Sample Properties of the Least
Squares Estimator
                                                                                                 ∧         ∧
1. Suppose you have two independent unbiased estimators of the same parameter, θ, say θ1 and θ 2 , with
                                                            ∧       ∧       ∧
different variances, v1 and v2. What linear combination, θ = c1 θ1 + c2 θ 2 is the minimum variance unbiased
estimator of θ?
          Consider the optimization problem of minimizing the variance of the weighted estimator. If the
                                                     ∧      ∧
estimate is to be unbiased, it must be of the form c1 θ1 + c2 θ 2 where c1 and c2 sum to 1. Thus, c2 = 1 - c1. The
function to minimize is Minc1L* = c12v1 + (1 - c1)2v2. The necessary condition is ∂L*/∂c1 = 2c1v1 - 2(1 -
c1)v2 = 0 which implies c1 = v2 / (v1 + v2). A more intuitively appealing form is obtained by dividing
numerator and denominator by v1v2 to obtain c1 = (1/v1) / [1/v1 + 1/v2]. Thus, the weight is proportional to the
inverse of the variance. The estimator with the smaller variance gets the larger weight.

2. Consider the simple regression yi = βxi + εi.
                                                                                                       ∧
(a) What is the minimum mean squared error linear estimator of β? [Hint: Let the estimator be β = c′y].
                            ∧        ∧
Choose c to minimize Var[ β ] + [E( β - β)]2. (The answer is a function of the unknown parameters.)
                                                                                ∧
(b) For the estimator in (a), show that ratio of the mean squared error of β to that of the ordinary least squares
                      ∧
estimator, b, is MSE[ β ] / MSE[b] = τ2 / (1 + τ2) where τ2 = β2 / [σ2/x′x]. Note that τ is the square of the
population analog to the `t ratio' for testing the hypothesis that β = 0, which is given after (4-14). How do you
interpret the behavior of this ratio as τ→∞?
                ∧                             ∧                     ∧
          First, β = c′y = c′x + c′ε. So E[ β ] = βc′x and Var[ β ] = σ2c′c. Therefore,
      ∧                                                                 ∧
MSE[ β ] = β2[c′x - 1]2 + σ2c′c. To minimize this, we set ∂MSE[ β ]/∂c = 2β2[c′x - 1]x + 2σ2c = 0.
Collecting terms,                     β2(c′x - 1)x = -σ2c
Premultiply by x′ to obtain β (c′x - 1)x′x = -σ2x′c
                             2

or                                    c′x = β2x′x / (σ2 + β2x′x).
Then,                                 c = [(-β2/σ2)(c′x - 1)]x,
so                                    c = [1/(σ2/β2 + x′x)]x.
                                      ∧
Then,                                 β = c′y = x′y / (σ2/β2 + x′x).
The expected value of this estimator is
                                          ∧
                                     E[ β ] = βx′x / (σ2/β2 + x′x)
                                          ∧
so                                   E[ β ] - β = β(-σ2/β2) / (σ2/β2 + x′x)
                                               = -(σ2/β) / (σ2/β2 + x′x)
while its variance is               Var[x′(xβ + ε) / (σ2/β2 + x′x)] = σ2x′x / (σ2/β2 + x′x)2
The mean squared error is the variance plus the squared bias,
                                              ∧
                                     MSE[ β ] = [σ4/β2 + σ2x′x]/[σ2/β2 + x′x]2.
The ordinary least squares estimator is, as always, unbiased, and has variance and mean squared error
                                     MSE(b) = σ2/x′x.



                                                                                                                7
The ratio is taken by dividing each term in the numerator
                          ∧ 
                    MSE β            4   2      2             2   2
                            = (σ / β ) / (σ / x' x) + σ x' x / (σ / x' x)
                    ΜΣΕ(β)
                                                                     (                       )
                                                                  2
                                                 σ 2 / β 2 + x' x
                            = [σ x′x/β + (x′x) ]/(σ /β + x′x)2
                                              2              2               2   2   2

                            = x′x[σ2/β2 + x′x]/(σ2/β2 + x′x)2
                            = x′x/(σ2/β2 + x′x)
Now, multiply numerator and denominator by β2/σ2 to obtain
                         ∧
                   MSE[ β ]/MSE[b] = β2x′x/σ2/[1 + β2x′x/σ2] = τ2/[1 + τ2]
As τ→∞, the ratio goes to one. This would follow from the result that the biased estimator and the unbiased
estimator are converging to the same thing, either as σ2 goes to zero, in which case the MMSE estimator is the
same as OLS, or as x′x grows, in which case both estimators are consistent.

3. Suppose that the classical regression model applies, but the true value of the constant is zero. Compare the
variance of the least squares slope estimator computed without a constant term to that of the estimator
computed with an unnecessary constant term.
          The OLS estimator fit without a constant term is b = x′y / x′x. Assuming that the constant term is,
in fact, zero, the variance of this estimator is Var[b] = σ2/x′x. If a constant term is included in the regression,

                                 ∑ ( x − x)( y − y) / ∑ ( x − x)
                                                  n                                      n                      2
then,                        b′ =                            i           i                              i
                                                  i =1                                   i =1

The appropriate variance is σ / ∑ ( x − x ) as always. The ratio of these two is
                               2
                                          n                      2
                                          i =1           i


                           Var[b]/Var[b′] = [σ /x′x] / [σ / ∑ ( x − x ) ]
                                                                     2               2
                                                                                                 n                  2
                                                                                                 i =1       i


                            ∑ ( x − x) = x′x + n x
                                   n                         2                   2
But,                                          i
                                   i =1

so the ratio is             Var[b]/Var[b′] = [x′x + n x 2]/x′x = 1 - n x 2/x′x = 1 - { n x 2/[Sxx + n x 2]} < 1
It follows that fitting the constant term when it is unnecessary inflates the variance of the least squares
estimator if the mean of the regressor is not zero.

4. Suppose the regression model is yi = α + βxi + εi f(εi) = (1/λ)exp(-εi/λ) > 0.
This is rather a peculiar model in that all of the disturbances are assumed to be positive. Note that the
disturbances have E[εi] = λ. Show that the least squares constant term is unbiased but the intercept is biased.
          We could write the regression as yi = (α + λ) + βxi + (εi - λ) = α* + βxi + εi*. Then, we know
         *
that E[εi ] = 0, and that it is independent of xi. Therefore, the second form of the model satisfies all of our
assumptions for the classical regression. Ordinary least squares will give unbiased estimators of α* and β. As
long as λ is not zero, the constant term will differ from α.

5. Prove that the least squares intercept estimator in the classical regression model is the minimum variance
linear unbiased estimator.
          Let the constant term be written as a = Σidiyi = Σidi(α + βxi + εi) = αΣidi + βΣidixi + Σidiεi. In
order for a to be unbiased for all samples of xi, we must have Σidi = 1 and Σidixi = 0. Consider, then,
minimizing the variance of a subject to these two constraints. The Lagrangean is
                   L* = Var[a] + λ1(Σidi - 1) + λ2Σidixi where Var[a] = Σi σ2di2.
Now, we minimize this with respect to di, λ1, and λ2. The (n+2) necessary conditions are
          ∂L*/∂di = 2σ2di + λ1 + λ2xi, ∂L*/∂λ1 = Σi di - 1, ∂L*/∂λ2 = Σi dixi
The first equation implies that      di = [-1/(2σ2)](λ1 + λ2xi).
Therefore,                           Σi di = 1 = [-1/(2σ2)][nλ1 + (Σi xi)λ2]
and                                  Σi dixi = 0 = [-1/(2σ2)][(Σi xi)λ1 + (Σi xi2)λ2].




                                                                                                                        8
We can solve these two equations for λ1 and λ2 by first multiplying both equations by -2σ2 then writing the
                                                                               λ1 
                                Σ i xi   λ 1  − 2σ 2 
                                                                                                     -1
                        n                                                       n       Σ i xi   − 2σ 2 
resulting equations as              2 λ         =       . The solution is  λ2  =          2
                                                                                                             .
                        Σ i xi Σ i xi   2   0                          Σ i xi Σ i xi   0 
                                                                               
Note, first, that Σi xi = n x . Thus, the determinant of the matrix is nΣi xi2 - (n x )2 = n(Σi xi2 - n x 2) = nSxx
                                                           λ1   1  Σ i xi2 − n x  − 2σ 2 
           ∑ (         )
               n           2
where Sxx           x i − x . The solution is, therefore,   =                            
               i =1                                        λ2  nS xx  − nx   0   0 
or                            λ1 = (-2σ2)(Σi xi2/n)/Sxx

                            λ2 = (2σ2 x )/Sxx
Then,                       di = [Σi xi2/n - x xi]/Sxx
This simplifies if we writeΣxi2 = Sxx + n x 2, so Σi xi2/n = Sxx/n + x 2. Then,
di = 1/n + x ( x - xi)/Sxx, or, in a more familiar form, di = 1/n - x (xi - x )/Sxx.

                                                        ∑ ( x − x) y /S = y - b x which was to be shown.
                                                          n
This makes the intercept term Σidiyi = (1/n)Σiyi - x             i     i   xx
                                                          i =1


6. As a profit maximizing monopolist, you face the demand curve Q = α + βP + ε.
In the past, you have set the following prices and sold the accompanying quantities:

                   Q        3 3 7 6 10 15 16 13 9 15 9 15 12 18 21
                   P      18 16 17 12 15 15 4 13 11 6 8 10 7 7 7
Suppose your marginal cost is 10. Based on the least squares regression, compute a 95% confidence interval
for the expected value of the profit maximizing output.
          Let q = E[Q]. Then,         q = α + βP,
or                                    P = (-α/β) + (1/β)q.
Using a well known result, for a linear demand curve, marginal revenue is MR = (-α/$) + (2/β)q. The profit
maximizing output is that at which marginal revenue equals marginal cost, or 10. Equating MR to 10 and
solving for q produces q = α/2 + 5β, so we require a confidence interval for this combination of the
parameters.
                                                    ∧
          The least squares regression results are Q = 20.7691 - .840583. The estimated covariance matrix
                        7.96124    − 0.624559
of the coefficients is                          . The estimate of q is 6.1816. The estimate of the variance
                        − 0.624559 0.0564361 
   ∧
of q is (1/4)7.96124 + 25(.056436) + 5(-.0624559) or 0.278415, so the estimated standard error is 0.5276.
The 95% cutoff value for a t distribution with 13 degrees of freedom is 2.161, so the confidence interval is
6.1816 - 2.161(.5276) to 6.1816 + 2.161(.5276) or 5.041 to 7.322.

7. The following sample moments were computed from 100 observations produced using a random number
                 100      123 96 109          460
                 123                 
                           252 125 189         810 
generator: X′X =                       , X′y =     ,
                  96      125 167 146         615
                                                  
                 109      189 146 168         712
                0.03767 − 0.06263 −.06247 01003
                                            .      
                − 0.06263   .
                            1129     .
                                    1107   − 2.102
            -1
       (X′X) =                                      , y’y=3924
                − 0.06247   .
                            1107     .
                                    1110   − 2.170
                                                  
                    .
                01003     − 2.192 − 2.170 4.292 




                                                                                                                 9
The true model underlying these data is y = x1 + x2 + x3 + ε.
         (a) Compute the simple correlations among the regressors.
         (b) Compute the ordinary least squares coefficients in the regression of y on a constant, x1, x2, and x3.
         (c) Compute the ordinary least squares coefficients in the regression of y on a constant, x1, and x2, on
a constant, x1, and x3, and on a constant, x2, and x3.
         (d) Compute the variance inflation factor associated with each variable).
         (e) The regressors are obviously collinear. Which is the problem variable?
         The sample means are (1/100) times the elements in the first column of X'X. The sample covariance
matrix for the three regressors is obtained as (1/99)[(X′X) ij -100 x i x j ].
                 10127
                      .     0.069899 0.555489 
                
Sample Var[x] = 0.069899 0.755960 0.417778 The simple correlation matrix is
                 0.555489 0.417778 0.496969
  1      .07971 .78043
 .07971     1   .68167 . The vector of slopes is (X′X)-1X′y = [-.4022, 6.123, 5.910, -7.525]′. For the
 
 .78043 .68167    1 
three short regressions, the coefficient vectors are
                             (1) one, x1, and x2: [-.223, 2.28, 2.11]′
                             (2) one, x1, and x3 [-.0696, .229, 4.025]′
                             (3) one, x2, and x3: [-.0627, -.0918, 4.358]′
The magnification factors are
                             for x1: [(1/(99(1.01727)) / 1.129]2 = .094
                             for x2: [(1/99(.75596)) / 1.11]2 = .109
                             for x3: [(1/99(.496969))/ 4.292]2 = .068.
The problem variable appears to be x3 since it has the lowest magnification factor. In fact, all three are highly
intercorrelated. Although the simple correlations are not excessively high, the three multiple correlations are
.9912 for x1 on x2 and x3, .9881 for x2 on x1 and x3, and .9912 for x3 on x1 and x2.

8. Consider the multiple regression of y on K variables, X and an additional variable, z. Prove that under the
assumptions A1 through A6 of the classical regression model, the true variance of the least squares estimator
of the slopes on X is larger when z is included in the regression than when it is not. Does the same hold for
the sample estimate of this covariance matrix? Why or why not? Assume that X and z are nonstochastic and
that the coefficient on z is nonzero.
          We consider two regressions. In the first, y is regressed on K variables, X. The variance of the least
squares estimator, b = (X′X)-1X′y, Var[b] = σ2(X′X)-1. In the second, y is regressed on X and an additional
variable, z. Using result (6-18) for the partitioned regression, the coefficients on X when y is regressed on X
and z are b.z = (X′MzX)-1X′Mzy where Mz = I - z(z′z)-1z′. The true variance of b.z is the upper left K×K
                                        −1
                            X' X X'z 
matrix in Var[b,c] = s z' X z' X . But, we have already found this above. The submatrix is Var[b.z] =
                         2
                                     
s2(X′MzX)-1. We can show that the second matrix is larger than the first by showing that its inverse is smaller.
(See Section 2.8.3). Thus, as regards the true variance matrices (Var[b])-1 - (Var[b.z])-1 = (1/σ2)z(z′z)-1z′
which is a nonnegative definite matrix. Therefore Var[b]-1 is larger than Var[b.z]-1, which implies that Var[b]
is smaller.
          Although the true variance of b is smaller than the true variance of b.z, it does not follow that the
estimated variance will be. The estimated variances are based on s2, not the true σ2. The residual variance
estimator based on the short regression is s2 = e′e/(n - K) while that based on the regression which includes z
is sz2 = e.z′e.z/(n - K - 1). The numerator of the second is definitely smaller than the numerator of the first, but
so is the denominator. It is uncertain which way the comparison will go. The result is derived in the previous
problem. We can conclude, therefore, that if t ratio on c in the regression which includes z is larger than one
in absolute value, then sz2 will be smaller than s2. Thus, in the comparison, Est.Var[b] = s2(X′X)-1 is based
on a smaller matrix, but a larger scale factor than Est.Var[b.z] = sz2(X′MzX)-1. Consequently, it is uncertain
whether the estimated standard errors in the short regression will be smaller than those in the long one. Note


                                                                                                                10
that it is not sufficient merely for the result of the previous problem to hold, since the relative sizes of the
matrices also play a role. But, to take a polar case, suppose z and X were uncorrelated. Then, XNMzX equals
XNX. Then, the estimated variance of b.z would be less than that of b without z even though the true variance
is the same (assuming the premise of the previous problem holds). Now, relax this assumption while holding
the t ratio on c constant. The matrix in Var[b.z] is now larger, but the leading scalar is now smaller. Which
way the product will go is uncertain.

9. For the classical regression model y = Xβ + ε with no constant term and K regressors, assuming that the
true value of β is zero, what is the exact expected value of F[K, n-K] = (R2/K)/[(1-R2)/(n-K)]?
                    The F ratio is computed as [b′X′Xb/K]/[e′e/(n - K)]. We substitute e = M, and
b = β + (X′X)-1X′ε = (X′X)-1X′ε. Then, F = [ε′X(X′X)-1X′X(X′X)-1X′ε/K]/[ε ′Mε/(n - K)] =
[ε′(I - M)ε/K]/[ε′Mε/(n - K)].
          The exact expectation of F can be found as follows: F = [(n-K)/K][ε′(I - M)ε]/[ε′Mε]. So, its exact
expected value is (n-K)/K times the expected value of the ratio. To find that, we note, first, that M, and
  (I - M), are independent because M(I - M) = 0. Thus, E{[ε(I - M)ε]/[ε′Mε]} = E[ε′(I- M)ε]×E{1/[ε′Mε]}.
The first of these was obtained above, E[ε′(I - M)ε] = Kσ2. The second is the expected value of the
reciprocal of a chi-squared variable. The exact result for the reciprocal of a chi-squared variable is
E[1/χ2(n-K)] = 1/(n - K - 2). Combining terms, the exact expectation is E[F] = (n - K) / (n - K - 2). Notice
that the mean does not involve the numerator degrees of freedom. ~

10. Prove that E[b′b] = β′β + σ2Σk (1/λk ) where b is the ordinary least squares estimator and λk is a
characteristic root of X′X.
         We write b = β + (X′X)-1X′ε, so b′b = β′β + ε′X(X′X)-1(X′X)-1X′ε + 2β′(X′X)-1X′ε. The
expected value of the last term is zero, and the first is nonstochastic. To find the expectation of the second
term, use the trace, and permute ε′X inside the trace operator. Thus,
         E[β′β] = β′β + E[ε′X(X′X)-1(X′X)-1X′ε]
                    = β′β + E[tr{ε′X(X′X)-1(X′X)-1X′ε}]
                    = β′β + E[tr{(X′X)-1X′εε′X(X′X)-1}]
                    = β′β + tr[E{(X′X)-1X′εε′X(X′X)-1}]
                    = β′β + tr[(X′X)-1X′E[εε′]X(X′X)-1]
                    = β′β + tr[(X′X)-1X′(σ2I)X(X′X)-1]
                    = β′β + σ2tr[(X′X)-1X′X(X′X)-1]
                    = β′β + σ2tr[(X′X)-1]
                    = β′β + σ2Σk (1/λk )
The trace of the inverse equals the sum of the characteristic roots of the inverse, which are the reciprocals of
the characteristic roots of X′X.

11. Data on U.S. gasoline consumption in the United States in the years 1960 to 1995 are given in Table F2.2.
           (a) Compute the multiple regression of per capita consumption of gasoline, G/Pop, on all of the other
explanatory variables, including the time trend, and report all results. Do the signs of the estimates agree with
your expectations?
           (b) Test the hypothesis that at least in regard to demand for gasoline, consumers do not differentiate
between changes in the prices of new and used cars.
           (c) Estimate the own price elasticity of demand, the income elasticity, and the cross price elasticity
with respect to changes in the price of public transportation.
           (d) Reestimate the regression in logarithms, so that the coefficients are direct estimates of the
elasticities. (Do not use the log of the time trend.) How do your estimates compare to the results in the
previous question? Which specification do you prefer?
           (e) Notice that the price indices for the automobile market are normalized to 1967 while the
                aggregate price indices are anchored at 1982. Does this discrepancy affect the results? How?
                If you were to renormalize the indices so that they were all 1.000 in 1982, how would your
                results change?
Part (a) The regression results for the regression of G/Pop on all other variables are:
+-----------------------------------------------------------------------+




                                                                                                             11
| Ordinary     least squares regression      Weighting variable = none      |
| Dep. var. = G         Mean=    100.7008114     , S.D.=    14.08790232     |
| Model size: Observations =        36, Parameters = 10, Deg.Fr.=        26 |
| Residuals: Sum of squares= 117.5342920        , Std.Dev.=         2.12616 |
| Fit:         R-squared= .983080, Adjusted R-squared =              .97722 |
| Model test: F[ 9,       26] = 167.85,       Prob value =           .00000 |
| Diagnostic: Log-L =     -72.3796, Restricted(b=0) Log-L =       -145.8061 |
|              LogAmemiyaPrCrt.=     1.754, Akaike Info. Crt.=        4.577 |
| Autocorrel: Durbin-Watson Statistic =       .94418,    Rho =       .52791 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
  Constant -1859.389661       1699.6133        -1.094    .2840
  YEAR      .9485446803       .87693228         1.082    .2893 1977.5000
  PG       -12.18681017       2.6071552        -4.674    .0001 2.3166111
  Y         .1110971600E-01 .32230846E-02       3.447    .0019 9232.8611
  PNC       6.889686945       13.203241          .522    .6062 1.6707778
  PUC      -4.121840732       2.8707832        -1.436    .1630 2.3436389
  PPT       6.034560575       4.0693845         1.483    .1501 2.7448611
  PN        20.50251499       16.556303         1.238    .2267 2.0851111
  PD        14.18819749       17.122006          .829    .4148 1.6505636
  PS       -31.48299999       12.795328        -2.461    .0208 2.3689802
The price and income coefficients are what one would expect of a demand equation (if that is what this is --
see Chapter 16 for extensive analysis). The positive coefficient on the price of new cars would seem
counterintuitive. But, newer cars tend to be more fuel efficient than older ones, so a rising price of new cars
reduces demand to the extent that people buy fewer cars, but increases demand if the effect is to cause people
to retain old (used) cars instead of new ones and, thereby, increase the demand for gasoline. The negative
coefficient on the price of used cars is consistent with this view. Since public transportation is a clear
substitute for private cars, the positive coefficient is to be expected. Since automobiles are a large component
of the ‘durables’ component, the positive coefficient on PD might be indicating the same effect discussed
above. Of course, if the linear regression is properly specified, then the effect of PD observed above must be
explained by some other means. This author had no strong prior expectation for the signs of the coefficients
on PD and PN. Finally, since a large component of the services sector of the economy is businesses which
service cars, if the price of these services rises, the effect will be to make it more expensive to use a car, i.e.,
more expensive to use the gasoline one purchases. Thus, the negative sign on PS was to be expected.
Part (b) The computer results include the following covariance matrix for the coefficients on PNC and PUC
 174.326 2.62732
 2.62732 8.2414  . The test statistic for testing the hypothesis that the slopes on these two variables are
                     
equal can be computed exactly as in the first Exercise. Thus,
t[26] = [6.889686945-(-4.121840732)]/[(174.326+8.2414-2(2.62732)]1/2 = 0.827.
This is quite small, so the hypothesis is not rejected.
Part (c) The elasticities for the linear model can be computed using η = b( x / G / Pop ) for the various xs.
The mean of G is 100.701. The calculations for own price, income, and the price of public transportation are
          Variable      Coefficient               Mean         Elasticity
            PG       -12.18681017                 2.3166111          -0.280
             Y         0.011109716             9232.8611             +1.019
           PPT         6.034560575                2.7448611          +0.164




                                                                                                                12
Part (d) The estimates of the coefficients of the loglinear and linear equations are
 Constant 2.276660667            -1859.389661
 YEAR     -.00440933049              0.9485446803
 LPG      -.5380992257             -12.18681017    (Elasticity = -0.28)
 LY        1.217805741               0.01110971600 (Elasticity = +1.019)
 LPNC      .09006338891              6.889686945
 LPUC     -.1146769420              -4.121840732
 LPPT      .1232808093               6.034560575   (Elasticity = +0.164)
 LPN       1.224804198              20.50251499
 LPD       .9484508600              14.18819749
 LPS      -1.321253144             -31.48299999
         The estimates are roughly similar, but not as close as one might hope. There is little prior
information which would suggest which is the better model.
Part (e) We would divide Pd by .483, Pn by .375, and Ps by .353. This would have no effect on the fit of the
regression or on the coefficients on the other regressors. The resulting least squares regression coefficients
would be multiplied by these values.




                                                                                                          13
Chapter 5
Large-Sample Properties of the Least
Squares and Instrumental Variables
Estimators
1. For the classical regression model y = Xβ + ε with no constant term and K regressors, what is
                   plim F[K,n-K] = plim (R2/K)/[(1-R2)/(n-K)]
assuming that the true value of β is zero? What is the exact expected value?
                   The F ratio is computed as [b′X′Xb/K]/[e′e/(n - K)]. We substitute e = M, and
b = β + (X′X)-1X′ε = (X′X)-1X′ε. Then, F = [ε′X(X′X)-1X′X(X′X)-1X′ε/K]/[ε ′Mε/(n - K)] =
[ε′(I - M)ε/K]/[ε′Mε/(n - K)]. The denominator converges to σ2 as we have seen before. The numerator is an
idempotent quadratic form in a normal vector. The trace of (I - M) is K regardless of the sample size, so the
numerator is always distributed as σ2 times a chi-squared variable with K degrees of freedom. Therefore, the
numerator of F does not converge to a constant, it converges to σ2/K times a chi-squared variable with K
degrees of freedom. Since the denominator of F converges to a constant, σ2, the statistic converges to a
random variable, (1/K) times a chi-squared variable with K degrees of freedom.

2. Let ei be the ith residual in the ordinary least squares regression of y on X in the classical regression model
and let εi be the corresponding true disturbance. Prove that plim(ei - εi) = 0.
           We can write ei as ei = yi - b′xi = (β′xi + εi) - b′xi = εi + (b - β)′xi
We know that plim b = β, and xi is unchanged as n increases, so as n→∞, ei is arbitrarily close to εi.

3. For the simple regression model, yi = µ + εi, εi ~ N(0,σ2), prove that the sample mean is consistent and
                                                                                ∧
asymptotically normally distributed. Now, consider the alternative estimator µ = Σi wiyi, where
wi = i/(n(n+1)/2) = i/Σi i. Note that Σiwi = 1. Prove that this is a consistent estimator of µ and obtain its
asymptotic variance. [Hint: Σi i2 = n(n+1)(2n+1)/6.]
         The estimator is y = (1/n)Σi yi = (1/n)Σi (µ + εi) = µ + (1/n)Σi εi. Then, E[ y ] µ+ (1/n)Σi E[εi] = µ
and Var[ y ]= (1/n2)Σi Σj Cov[εi,εj] = σ2/n. Since the mean equals µ and the variance vanishes as n→∞, y is
consistent. In addition, since y is a linear combination of normally distributed variables, y has a normal
distribution with the mean and variance given above in every sample. Suppose that εi were not normally
distributed. Then, n ( y -µ) = (1/ n )(Σiεi) satisfies the requirements for the central limit theorem. Thus,
the asymptotic normal distribution applies whether or not the disturbances have a normal distribution.
                                           ∧                  ∧
         For the alternative estimator, µ = Σi wiyi, so E[ µ ] = Σi wiE[yi] = Σi wiµ = µΣi wi = µ and
     ∧
Var[ µ ]=   Σi wi2σ2       =   σ2Σi wi2.   The sum of squares of the weights is Σiwi2 = Σi i2/[Σi i]2 =
[n(n+1)(2n+1)/6]/[n(n+1)/2]2 = [2(n2 + 3n/2 + 1/2)]/[1.5n(n2 + 2n + 1)]. As n→∞, the fraction will be
dominated by the term (1/n) and will tend to zero. This establishes the consistency of this estimator. The last
                                                                                                              ∧
expression also provides the asymptotic variance. The large sample variance can be found as Asy.Var[ µ ] =
                       ∧                                                       ∧                          ∧
(1/n)lim n→∞Var[ n ( µ - µ)]. For the estimator above, we can use Asy.Var[ µ ] = (1/n)lim n→∞nVar[ µ - µ] =
(1/n)lim n→∞σ2[2(n2 + 3n/2 + 1/2)]/[1.5(n2 + 2n + 1)] = 1.3333σ2. Notice that this is unambiguously larger
than the variance of the sample mean, which is the ordinary least squares estimator.




                                                                                                                  14
4. In the discussion of the instrumental variables estimator, we showed that the least squares estimator, b, is
biased and inconsistent. Nonetheless, b does estimate something; plim b = θ = β + Q-1γ. Derive the
asymptotic covariance matrix of b and show that b is asymptotically normally distributed.
           To obtain the asymptotic distribution, write the result already in hand as b = (β + Q-1γ) + (X′X)-1X′ε -
Q ε. We have established that plim b = β + Q-1γ. For convenience, let θ ≠ β denote β + Q-1γ = plim b. Write
  -1

the preceding in the form b - θ = (X′X/n)-1(X′ε/n) - Q-1γ. Since plim(X′X/n) = Q, the large sample behavior
of the right hand side is the same as that of plim (b - θ) = Q-1plim(X′ε/n) - Q-1γ. That is, we may replace
(X′X/n) with Q in our derivation. Then, we seek the asymptotic distribution of n (b - θ) which is the same
as that of
                                          1                      
                                             ∑
                                                 n
  n [Q-1plim(X′ε/n) - Q-1γ] = Q-1 n                   xi ε i - γ  . From this point, the derivation is exactly the
                                          n     i = 1            
same as that when γ = 0, so there is no need to redevelop the result. We may proceed directly to the same
asymptotic distribution we obtained before. The only difference is that the least squares estimator estimates θ,
not β.

5. For the model in (5-25) and (5-26), prove that when only x* is measured with error, the squared correlation
between y and x is less than that between y* and x*. (Note the assumption that y* = y.) Does the same hold
true if y* is also measured with error?
           Using the notation in the text, Var[x*] = Q* so, if y = βx* + ε,
                    Corr2[y,x*] = (βQ*)2 / [(β2Q* + σε2)Q*] = β2Q*/[$2Q* + σε2)]
In terms of the erroneously measured variables,
                    Cov[y,x]           = Cov[βx* + ε,x* + u] = βQ*,
                         2
so                  Corr [y,x]         = (βQ*)2/[(β2Q* + εε2)(Q* + σu2)]
                                       = [Q*/(Q* + σu2)]Corr2[y,x*]
    *
If y is also measured with error, the attenuation in the correlation is made even worse. The numerator of the
squared correlation is unchanged, but the term (β2Q* + σε2) in the denominator is replaced with (β2Q* + σε2 +
σv2) which reduces the squared correlation yet further.

6. Christensen and Greene (1976) estimate a generalized Cobb-Douglas function of the form
                    log(C/Pf) = α + βlogQ + γlog2Y + δklog(Pk/Pf) + δllog(Pl/Pf) + ε.
Pk, Pl, and Pf indicate unit prices of capital, labor, and fuel, respectively, Q is output and C is total cost. The
purpose of the generalization was to produce a ∪-shaped average total cost curve. (See Example 7.3 for
discussion of Nerlove’s (1963) predecessor to this study.) We are interested in the output at which the cost
                                                                                                   (1 - β)/(2γ)
curve reaches its minimum. That is the point at which [∂logC/∂logQ]|Q = Q* = 1, or Q* = 10             .
(You can simplify the analysis a bit by using the fact that 10x = exp(2.3026x). Thus, Q* = exp(2.3026[(1-
β)/(2γ)]).
The estimated regression model using the Christensen and Greene (1970) data are as follows, where estimated
standard errors are given in parentheses:


               (0.34427 )
                                                             (           )
ln (C / Pf ) = − 7.294+ 0.39091ln Q + 0.062413 ln 2 Q / 2 + 0.07479 ln (Pk / Pf ) + 0.2608 ln (Pl / Pf ).
                            (0.036988 )       (0.0051548 )                   (0.061645 )        (0.068109 )

The estimated asymptotic covariance of the estimators of β and γ is –0.000187067. R2=0.991538, e’e =
2.443509.
Using the estimates given in the example, compute the estimate of this efficient scale. Estimate the
                                                                                                              ∧   ∧
asymptotic distribution of this estimator assuming that the estimate of the asymptotic covariance of β and γ is
-.00008.
         The estimate is Q* = exp[2.3026(1 - .151)/(2(.117))] = 4248. The asymptotic variance of Q* =
                ∧       ∧                                        ∧   ∧
exp[2.3026(1 - β )/(2 γ ) is [∂Q*/∂β ∂Q*/∂γ] Asy.Var[ β , γ ][∂Q*/∂β ∂Q*/∂γ]′. The derivatives are




                                                                                                                  15
      ∧                  ∧     ∧                    ∧                   ∧      ∧
∂Q*/∂ β = Q*(-2.3026 β )/(2 γ ) = -6312. ∂Q*/∂ γ = Q*[-2.3026(1- β )]/(2 γ 2) = -303326. The estimated
                                 .00384 −.00008
asymptotic covariance matrix is                     . The estimated asymptotic variance of the estimate of
                                 −.00008 .000144 
Q* is thus 13,095,615. The estimate of the asymptotic standard deviation is 3619. Notice that this is quite
large compared to the estimate. A confidence interval formed in the usual fashion includes negative values.
This is common with highly nonlinear functions such as the one above.

7. The consumption function used in Example 5.3 is a very simple specification. One might wonder if the
meager specification of the model could help explain the finding in the Hausman test. The data set used
for the example are given in Table F5.1. Use these data to carry out the test in a more elaborate
specification
                                    ct = β1 + β2yt + β3it + β4ct-1 + εt
where ct is the log of real consumption, yt is the log of real disposable income and it is the interest rate (90
day T bill rate).
          Results of the computations are shown below. The Hausman statistic is 25.1 and the t statistic for
the Wu test is -5.3. Both are larger than the table critical values by far, so the hypothesis that least squares
is consistent is rejected in both cases.
--> samp;1-204$
--> crea;ct=log(realcons);yt=log(realdpi);it=tbilrate$
--> crea;ct1=ct[-1];yt1=yt[-1]$
--> samp;2-204$
--> name;x=one,yt,it,ct1;z=one,it,ct1,yt1$
--> regr;lhs=ct;rhs=x$
--> calc;s2=ssqrd$
--> matr;bls=b;xx=<x'x>$
--> 2sls;lhs=ct;rhs=x;inst=z$
--> matr;biv=b;xhxh=1/ssqrd*varb$
--> matr;d=biv-bls;vb=xhxh-xx$
--> matr;list;h=1/s2*d'*mpnv(vb)*d$
--> regr;lhs=yt;rhs=z;keep=ytf$
--> regr;lhs=ct;rhs=x,ytf$

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = CT       Mean=   7.884560181    , S.D.=   .5129509097     |
| Model size: Observations =     203, Parameters =   4, Deg.Fr.=    199 |
| Residuals: Sum of squares= .1318216478E-01, Std.Dev.=          .00814 |
| Fit:        R-squared= .999752, Adjusted R-squared =           .99975 |
| Model test: F[ 3,     199] =********,    Prob value =          .00000 |
| Diagnostic: Log-L =    690.6283, Restricted(b=0) Log-L =    -152.0255 |
|             LogAmemiyaPrCrt.=   -9.603, Akaike Info. Crt.=     -6.765 |
| Autocorrel: Durbin-Watson Statistic =   1.90738,   Rho =       .04631 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant -.4413074204E-01 .12917632E-01    -3.416   .0008
 YT           .1833744954   .32943409E-01    5.566   .0000     7.9953259
 IT       -.1654147681E-02 .29350320E-03    -5.636   .0000     5.2499007
 CT1          .8216667186   .32285244E-01   25.450   .0000     7.8757433

+-----------------------------------------------------------------------+
| Two stage   least squares regression    Weighting variable = none     |
| Dep. var. = CT       Mean=   7.884560181    , S.D.=   .5129509097     |
| Model size: Observations =     203, Parameters =   4, Deg.Fr.=    199 |
| Residuals: Sum of squares= .1344364458E-01, Std.Dev.=          .00822 |
| Fit:        R-squared= .999742, Adjusted R-squared =           .99974 |
|             (Note: Not using OLS. R-squared is not bounded in [0,1] |
| Model test: F[ 3,     199] =********,    Prob value =          .00000 |



                                                                                                            16
| Diagnostic: Log-L =    688.6346, Restricted(b=0) Log-L =    -152.0255 |
|             LogAmemiyaPrCrt.=   -9.583, Akaike Info. Crt.=     -6.745 |
| Autocorrel: Durbin-Watson Statistic =   2.02762,   Rho =      -.01381 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant -.2023353156E-01 .13906118E-01    -1.455   .1457
 YT        .9004120016E-01 .38219830E-01     2.356   .0185     7.9953259
 IT       -.1168585850E-02 .31214268E-03    -3.744   .0002     5.2499007
 CT1          .9130592037   .37448694E-01   24.382   .0000     7.8757433
 (Note: E+nn or E-nn means multiply by 10 to + or -nn power.)


Matrix H       has 1 rows and   1 columns.
              1
       +--------------
      1|    25.0986

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = YT       Mean=   7.995325935    , S.D.=   .5109250627     |
| Model size: Observations =     203, Parameters =   4, Deg.Fr.=    199 |
| Residuals: Sum of squares= .1478971099E-01, Std.Dev.=          .00862 |
| Fit:        R-squared= .999720, Adjusted R-squared =           .99972 |
| Model test: F[ 3,     199] =********,    Prob value =          .00000 |
| Diagnostic: Log-L =    678.9490, Restricted(b=0) Log-L =    -151.2222 |
|             LogAmemiyaPrCrt.=   -9.488, Akaike Info. Crt.=     -6.650 |
| Autocorrel: Durbin-Watson Statistic =   1.77592,   Rho =       .11204 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant .4045167318E-01 .13493797E-01      2.998   .0031
 IT        .2943892707E-03 .32000803E-03      .920   .3587     5.2499007
 CT1       .9130171904E-01 .35621085E-01     2.563   .0111     7.8757433
 YT1          .9057719332   .36310045E-01   24.945   .0000     7.9868448

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = CT       Mean=   7.884560181    , S.D.=   .5129509097     |
| Model size: Observations =     203, Parameters =   5, Deg.Fr.=    198 |
| Residuals: Sum of squares= .1151983043E-01, Std.Dev.=          .00763 |
| Fit:        R-squared= .999783, Adjusted R-squared =           .99978 |
| Model test: F[ 4,     198] =********,    Prob value =          .00000 |
| Diagnostic: Log-L =    704.3099, Restricted(b=0) Log-L =    -152.0255 |
|             LogAmemiyaPrCrt.=   -9.728, Akaike Info. Crt.=     -6.890 |
| Autocorrel: Durbin-Watson Statistic =   2.35530,   Rho =      -.17765 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant -.2023559983E-01 .12905160E-01    -1.568   .1185
 YT           .4752021457   .62720658E-01    7.576   .0000     7.9953259
 IT       -.1168629424E-02 .28967486E-03    -4.034   .0001     5.2499007
 CT1          .9130504994   .34753056E-01   26.273   .0000     7.8757433
 YTF         -.3851520841   .72054899E-01   -5.345   .0000     7.9953259




                                                                            17
8. Suppose we change the assumptions of the model in Section 5.3 to AS5: (xi,ε ) are an independent and
identically distributed sequence of random vectors such that xi has a finite mean vector, µx, finite positive
definite covariance matrix Σxx and finite fourth moments E[xjxkxlxm] = φjklm for all variables. How does the
proof of consistency and asymptotic normality of b change? Are these assumptions weaker or stronger
than the ones made in Section 5.2?
          The assumption above is considerably stronger than the assumption AD5. Under these
assumptions, the Slutsky theorem and the Lindberg Levy versions of the central limit theorem can be
invoked.

9. Now, assume only finite second moments of x; E[xi2] is finite. Is this sufficient to establish consistency
of b? (Hint: the Cauchy-Schwartz inequality (Theorem D.13), E[|xy|] ≤ {E[x2]}1/2{E[y2]}1/2 will be
helpful.) Is
         The assumption will provide that (1/n)X′X converges to a finite matrix by virtue of the Cauchy-
Schwartz inequality given above. If the assumptions made to ensure that plim (1/n)X′ε = 0 continue to
hold, then consistency can be established by the Slutsky Theorem.




                                                                                                           18
Chapter 6
Inference and Prediction
1. A multiple regression of y on a constant, x1, and x2 produces the results below:
                                                                29 0 0 
y = 4 + .4x1 + .9x2, R = 8/60, e′e = 520, n = 29, X′X =  0 50 10 . Test the hypothesis that the two
                        2

                                                                 0 10 80
slopes sum to 1.
           The estimated covariance matrix for the least squares estimates is
                     3900 / 29     0     0         .69    0        0 
                 20                                
 2      -1
s (X′X) =                 0        80 − 10 =  0           .40 −.051 where s2 = 520/(29-3) = 20. Then,
                3900 
                        0       − 10 80           0 −.051 .256 
the test may be based on t = (.4 + .9 - 1)/[.410 + .256 - 2(.051)]1/2 = .399. This is smaller than the critical
value of 2.056, so we would not reject the hypothesis.

2. . Using the results in Exercise 1, test the hypothesis that the slope on x1 is zero by running the restricted
regression and comparing the two sums of squared deviations.
          In order to compute the regression, we must recover the original sums of squares and cross products
for y. These areX′y = X′Xb = [116, 29, 76]′. The total sum of squares is found using R2 = 1 - e′e/y′M0y,
so y′M0y = 520 / (52/60) = 600. The means are x 1 = 0, x 2 = 0, y = 4, so, y′y = 600 + 29(42) = 1064.
The slope in the regression of y on x2 alone is b2 = 76/80, so the regression sum of squares is b22(80) = 72.2,
and the residual sum of squares is 600 - 72.2 = 527.8. The test based on the residual sum of squares is F =
[(527.8 - 520)/1]/[520/26] = .390. In the regression of the previous problem, the t-ratio for testing the same
hypothesis would be t = .4/(.410)1/2 = .624 which is the square root of .39.

3. The regression model to be analyzed is y = X1β1 + X2β2 + , where X1 and X2 have K1 and K2 columns,
respectively. The restriction is β2 = 0.
           (a) Using (6-14), prove that the restricted estimator is simply [b1′,0′]′ where b1 is the least squares
coefficient vector in the regression of y on X1.
           (b) Prove that if the restriction is β2 = β20 for a nonzeroβ20, the restricted estimator of β1 is b1* =
        -1
(X1′X1) X1′(y - X2β).
           For the current problem, R = [0,I] where I is the last K2 columns. Therefore, R(X′X)-1RN is the
lower right K2×K2 block of (X′X)-1. As we have seen before, this is (X2′M1X2)-1. Also, (X′X)-1R′ is the last
                                                                  - ( X1 ' X1 ) −1 X1 ' X 2 ( X 2 ' M 1 X 2 ) −1 
K2 columns of (X′X)-1. These are (X′X)-1R′ =                                                                      [See (2-74).] Finally,
                                                                              ( X 2 ' M 1 X 2 ) −1              
since q = 0, Rb - q = (0b1 + Ib2) - 0 = b2. Therefore, the constrained estimator is
       b 1     - ( X1 ' X1 ) −1 X1 ' X 2 ( X 2 ' M 1 X 2 ) −1 
b* =   -                                                       (X2′M1X2)b2, where b1 and b2 are the multiple regression
       b 2                 ( X 2 ' M 1 X 2 ) −1              
coefficients in the regression of y on both X1 and X2. (See Section 6.4.3 on partitioned regression.)
                                                  b 1       - ( X1 ' X1 ) −1 X1 ' X 2b 2 
Collecting terms, this produces b* =   -                                                    . But, we have from Section 6.3.4
                                                  b 2                    b2               
                                                                            ( X ' X ) −1 X1 ' y
that b1 = (X1′X1)-1X1′y - (X1′X1)-1X1′X2b2 so the preceding reduces to b* =  1 1                which was to
                                                                                   0          
be shown.



                                                                                                                                      19
         If, instead, the restriction is β2 = β20 then the preceding is changed by replacing Rβ - q = 0 with
Rβ - β20 = 0. Thus, Rb - q = b2 - β20. Then, the constrained estimator is
      b 1      - ( X1 ' X1 ) −1 X1 ' X 2 ( X 2 ' M 1 X 2 ) −1                   0
b* =   -                                                       (X2′M1X2)(b2 - β2 )
      b 2                  ( X 2 ' M 1 X 2 ) −1              
or
      b 1        ( X ' X ) −1 X ' X (b − β 02 ) 
b* =   +  1 1 0 1 2 2                                
      b 2                 (β 2 - b 2 )              
Using the result of the previous paragraph, we can rewrite the first part as
                      b1* = (X1′X1)-1X1′y - (X1′X1)-1X1′X2β20 = (X1′X1)-1X1′(y - X2β20)
which was to be shown.

4. The expression for the restricted coefficient vector in (6-14) may be written in the form b* = [I - CR]b + w,
where w does not involve b. What is C? Show that covariance matrix of the restricted least squares estimator
is σ2(X′X)-1 - σ2(X′X)-1R′[R(X′X)-1R′]-1R(X′X)-1 and that this matrix may be written as
Var[b]{[Var(b)]-1 - R′[Var(Rb)]-1R}Var[b]
         By factoring the result in (6-14), we obtain b* = [I - CR]b + w where C = (X′X)-1R′[R(X′X)-1R′]-1
and w = Cq. The covariance matrix of the least squares estimator is
         Var[b*] = [I - CR]σ2(X′X)-1[I - CR]′
                   = σ2(X′X)-1 + σ2CR(X′X)-1R′C′ - σ2CR(X′X)-1 - σ2(X′X)-1R′C′.
By multiplying it out, we find that CR(X′X)-1 = (X′X)-1R′(R(X′X)-1R′)-1R(X′X)-1 = CR(X′X)-1R′C′
so Var[b*] = σ2(X′X)-1 - σ2CR(X′X)-1R′C′ = σ2(X′X)-1 - σ2(X′X)-1R′[R(X′X)-1R′]-1R(X′X)-1
This may also be written as Var[b*] = σ2(X′X)-1{I - R′(R(X′X)-1R′)-1R(X′X)-1}
                                      = σ2(X′X)-1{[σ2(X′X)-1]-1 - R′[Rσ2(X′X)-1R′]-1R}σ2(X′X)-1
                       2     -1
Since Var[Rb] = Rσ (X′X) R′ this is the answer we seek.

5. Prove the result that the restricted least squares estimator never has a larger variance matrix than the
unrestricted least squares estimator.
          The variance of the restricted least squares estimator is given in the second equation in the previous
exercise. We know that this matrix is positive definite, since it is derived in the form B′σ2(X′X)-1B′, and
σ2(X′X)-1 is positive definite. Therefore, it remains to show only that the matrix subtracted from Var[b] to
obtain Var[b*] is positive definite. Consider, then, a quadratic form in Var[b*]
          z′Var[b*]z         = z′Var[b]z - σ2z′(X′X)-1(R′[R(X′X)-1R′]-1R)(X′X)-1z
                             = z′Var[b]z - w′[R(X′X)-1R′]-1w where w = σR(X′X)-1z.
It remains to show, therefore, that the inverse matrix in brackets is positive definite. This is obvious since its
inverse is positive definite. This shows that every quadratic form in Var[b*] is less than a quadratic form in
Var[b] in the same vector.

6. Prove the result that the R2 associated with a restricted least squares estimator is never larger than that
associated with the unrestricted least squares estimator. Conclude that imposing restrictions never improves
the fit of the regression.
           The result follows immediately from the result which precedes (6-19). Since the sum of squared
residuals must be at least as large, the coefficient of determination, COD = 1 - sum of squares / Σi (yi - y )2,
must be no larger.

7. The Lagrange multiplier test of the hypothesis Rβ-q=0 is equivalent to a Wald test of the hypothesis that λ
= 0, where λ is defined in (6-14). Prove that χ2 = λ′{Est.Var[λ]}-1λ = (n-K)[e*′e*/e′e - 1]. Note that the
fraction in brackets is the ratio of two estimators of σ2. By virtue of (6-15) and the preceding section, we
know that this is greater than 1. Finally, prove that the Lagrange multiplier statistic is simply JF, where J is
the number of restrictions being tested and F is the conventional F statistic given in (6-20).




                                                                                                               20
         For convenience, let F = [R(X′X)-1R′]-1. Then, λ = F(Rb - q) and the variance of the vector of
Lagrange multipliers is Var[8] = FRσ2(X′X)-1R′F = σ2F. The estimated variance is obtained by replacing
σ2 with s2. Therefore, the chi-squared statistic is
χ2 = (Rb - q) ′F′(s2F)-1F(Rb - q) = (Rb - q) ′[(1/s2)F](Rb - q)
                                      = (Rb - q) ′[R(X′X)-1R′]-1(Rb - q)/[e′e/(n - K)]
This is exactly J times the F statistic defined in (6-19) and (6-20). Finally, J times the F statistic in (6-20)
equals the expression given above.

8. Use the Lagrange multiplier test to test the hypothesis in Exercise 1.
           We use (6-19) to find the new sum of squares. The change in the sum of squares is
                              e*′e* - e′e = (Rb - q) ′[R(X′X)-1R′]-1(Rb - q)
For this problem, (Rb - q) = b2 + b3 - 1 = .3. The matrix inside the brackets is the sum of the 4 elements in
the lower right block of (X′X)-1. These are given in Exercise 1, multiplied by s2 = 20. Therefore, the required
sum is [R(X′X)-1R′] = (1/20)(.410 + .256 - 2(.051)) = .028. Then, the change in the sum of squares is
.32 / .028 = 3.215. Thus, e′e = 520, e*′e* = 523.215, and the chi-squared statistic is 26[523.215/520 - 1] =
.16. This is quite small, and would not lead to rejection of the hypothesis. Note that for a single restriction,
the Lagrange multiplier statistic is equal to the F statistic which equals, in turn, the square of the t statistic used
to test the restriction. Thus, we could have obtained this quantity by squaring the .399 found in the first
problem (apart from some rounding error).

9. Using the data and model of Example 2.3, carry out a test of the hypothesis that the three aggregate price
indices are not significant determinants of the demand for gasoline.
          The sums of squared residuals for the two regressions are 207.644 when the aggregate price indices
are included and 586.596 when they are excluded. The F statistic is F = [(586.596 - 207.644)/3]/[207.644/17]
= 10.342. The critical value from the F table is 3.20, so we would reject the hypothesis.

10. The model of Example 2.3 may be written in logarithmic terms as
lnG/Pop = α + βplnPg + βylnY + γnclnPnc + γuclnPuc + γptlnPpt + βtyear + δdlnPd + δnlnPn + δslnPs + ε.
Consider the hypothesis that the micro elasticities are a constant proportion of the elasticity with respect to
their corresponding aggregate. Thus, for some positive 2 (presumably between 0 and 1),
                      γnc = 2δd, γuc = 2δd, γpt = 2δs.
The first two imply the simple linear restriction γnc = γuc. Taking ratios, the first (or second) and third imply
the nonlinear restriction γnc/γpt = δd/δs.
(a) Describe in detail how you would test the validity of the restriction.
(b) Using the gasoline market data in Table F2.2, test the restrictions separately and jointly.
            Since the restricted model is quite nonlinear, it would be quite cumbersome to estimate and examine
the loss in fit. We can test the restriction using the unrestricted model. For this problem,
                               f = [γnc - γuc, γncδs - γptδd] ′
The matrix of derivatives, using the order given above and " to represent the entire parameter vector, is
       ∂f 1 / ∂α  0 0 0 1 − 1               0      0      0  0 0 
G=                =                                                 . The parameter estimates are
      ∂f 2 / ∂α  0 0 0 δ s 0 − δ d 0 − γ pt 0 γ nc 
a = 18.5454, cuc = -.201536, dd = 1.50607, bp = -.581437, cpt = .0805074, dn = .999474, by = 1.39438,
bt = -.0125129, ds = -.817896, cnc = -.294769.
Thus, f = [-.092322, .119841]′. The covariance matrix to use for the tests is
                                       .053285 −.0362998
                   Gs2(X′X)-1G′ =                             
                                       −.0362998 .0342649 
The statistic for the joint test is χ2 = f′[Gs2(X′X)-1G′]-1f = .5789. This is less than the critical value for a
chi-squared with two degrees of freedom, so we would not reject the joint hypothesis. For the individual
hypotheses, we need only compute the equivalent of a t ratio for each element of f. Thus,
                    z1 = -.092322/(.053285)2 = .3999
and                 z2 = .119841/(.0342649)2 = .6474.
Neither is large, so neither hypothesis would be rejected. (Given the earlier result, this was to be expected.).



                                                                                                                   21
11. Prove that under the hypothesis that Rβ = q, the estimator s = (y - Xb*)′(y - Xb*)/(n - K + J), where J is
the number of restrictions, is unbiased for σ2.
            First, use (6-19) to write e*′e* = e′e + (Rb - q)′[R(X′X)-1R′]-1(Rb - q). Now, the result that E[e′e] =
(n - K)σ obtained in Chapter 6 must hold here, so E[e*′e*] = (n - K)σ2 + E[(Rb - q)′[R(X′X)-1R′]-1(Rb - q)].
          2

Now, b = β + (X′X)-1X′ε, so Rb - q = Rβ - q + R(X′X)-1X′ε. But, Rβ - q = 0, so under the
hypothesis, Rb - q = R(X′X)-1X′ε. Insert this in the result above to obtain
E[e*′e*] = (n-K)σ2 + E[ε′X(X′X)-1R′[R(X′X)-1R′]-1R(X′X)-1X′ε]. The quantity in square brackets is a scalar,
so it is equal to its trace. Permute ε′X(X′X)-1R′ in the trace to obtain
                      E[e*′e*] = (n - K)σ2 + E[tr{[R(X′X)-1R′]-1R(X′X)-1X′εε′X(X′X)-1R′]}
We may now carry the expectation inside the trace and use E[εε′] = σ2I to obtain
                      E[e*′e*] = (n - K)σ2 + tr{[R(X′X)-1R′]-1R(X′X)-1X′σ2IX(X′X)-1R′]}
               2
Carry the σ outside the trace operator, and after cancellation of the products of matrices times their inverses,
we obtain             E[e*′e*] = (n - K)σ2 + σ2tr[IJ] = (n - K + J)σ2.

12. Show that in the multiple regression of y on a constant, x1, and x2, while imposing the restriction
β1 + β2 = 1 leads to the regression of y - x1 on a constant and x2 - x1.
         For convenience, we put the constant term last instead of first in the parameter vector. The constraint
is Rb - q = 0 where R = [1 1 0] so R1 = [1] and R2 = [1,0]. Then, β1 = [1]-1[1 - β2] = 1 - β2. Thus, y
= (1 - β2)x1 + β2x2 + αi + ε or y - x1 = β2(x2 - x1) + αi + ε.




                                                                                                               22
Chapter 7
Functional Form and Structural
Change
1. In Solow's classic (1957) study of technical change in the U.S. Economy, he suggests the following
aggregate production function: q(t) = A(t)f[k(t)] where q(t) is aggregate output per manhour, k(t) is the
aggregate capital labor ratio, and A(t) is the technology index. Solow considered four static models,
                   q/A = α + βlnk, q/A = α - β/k, ln(q/A) = α + βlnk, ln(q/A) = α - β/k.
 (He also estimated a dynamic model, q(t)/A(t) - q(t-1)/A(t-1) = α + βk.)
         (a) Sketch the four functions.
         (b) Solow's data for the years 1909 to 1949 are listed in Table A8.1: (Op. cit., page 314. Several
variables are omitted.) Use these data to estimate the α and β of the four functions listed above. (Note, your
results will not quite match Solow’s. See the next problem for resolution of the discrepancy.) Sketch the
functions using your particular estimates of the parameters.
         The least squares estimates of the four models are
                   q/A = .45237 + .23815lnk
                   q/A = .91967 - .61863/k
                   ln(q/A) = -.72274 + .35160lnk
                   ln(q/A) = -.032194 - .91496/k
At these parameter values, the four functions are nearly identical. A plot of the four sets of predictions from
the regressions and the actual values appears below.

2. In the aforementioned study, Solow states
          “A scatter of q/A against k is shown in Chart 4. Considering the amount of a priori doctoring which
the raw figures have undergone, the fit is remarkably tight. Except, that is, for the layer of points which are
obviously too high. These maverick observations relate to the seven last years of the period, 1943-1949.
From the way they lie almost exactly parallel to the main scatter, one is tempted to conclude that in 1943 the
aggregate production function simply shifted.
(a) Draw a scatter diagram of q/A against k. [Or, obtain Solow’s original study and examine his. An
alternative source of the original paper is the volume edited by A. Zellner (1968).]
(b) Estimate the four models you estimated in the previous problem including a dummy variable for the years
1943 to 1949. How do your results change? (Note, these results match those reported by Solow, though he
did not report the coefficient on the dummy variable.)
(c) Solow went on to surmise that, in fact, the data were fundamentally different in the years before 1943 than
during and after. If so, one would guess that the regression should be as well (though whether the change is
merely in the data or in the underlying production function is not settled). Use a Chow test to examine the
difference in the two subperiods using your four functional forms. Note that with the dummy variable, you
can do the test by introducing an interaction term between the dummy and whichever function of k appears in
the regression. Use an F test to test the hypothesis.




                                                                                                           23
The regression results for the various models are listed below. (d is the dummy variable equal to 1 for the last
seven years of the data set. Standard errors for parameter estimates are given in parentheses.)
    α              β            γ          δ           R2              e′e
Model 1:q/A = α + βlnk + γd + δ(dlnk) + ε
.4524      .2381                            .94355                    .00213
(.00903)   (.00932)
.4477      .2396      .01900                .99914                  .000032
(.00113)   (.00117)    (.000384)
.4476      .2397      .02746    -.08883     .99915                  .000032
(.00115)   (.00118)    (.0119)    (.0126)
Model 2: q/A = α - β(1/k) + γd + δ(d/k) + ε
  .9168      .6186                          .94915                  .001915
(.00891)    (.0229)
.9167      .6185     .01961                 .99321                  .000256
(.00331)   (.00849)   (.00108)
.9168      .6187    .008651      .02140     .99322                  .000255
(.00336)   (.00863)    (.0354)     (.0917)
Model 3: ln(q/A) = α + βlnk + γd + δ(dlnk) + ε
-.7227       .3516                           .94069                   .004882
(.0137)     (.0141)
-.7298       .3538    .002881                .99918                   .000068
(.00164)   (.00169)   (.000554)
-.7300       .3540     .04961     -.02182    .99921                   .000065
(.00164)   (.00148)   (.0171)     (.0179)
Model 4: ln(q/A) = α - β(1/k) + γd + δ(d/k) + ε
-.03219      .9150                            .94964                   .004146
(.0131)     (.0337)
-.03665      .9148     .02572                 .99629                   .000305
(.00361)   (.00928)   (.00118)
-.03646      .9153    .004290      .05556     .99632                   .000303
(.00366)   (.00941)   (.0386)     (.0999)




                                                                                                              24
         The scatter diagram is shown below.




The last seven years of the data set show clearly the effect observed by Solow.
          For the four models, the F test of the third specification against the first is equivalent to the
Chow-test. The statistics are:
  Model 1: F = (.002126 - .000032)/2 / (.000032/37) = 1210.6
  Model 2: F =                                           = 120.43
  Model 3: F =                                           = 1371.0
  Model 4: F =                                           = 234.64
The critical value from the F table for 2 and 37 degrees of freedom is 3.26, so all of these are statistically
significant. The hypothesis that the same model applies in both subperiods must be rejected.

3.    A regression model with K = 16 independent variables is fit using a panel of 7 years of data. The
sums of squares for the seven separate regressions and the pooled regression are shown below. The model
with the pooled data allows a separate constant for each year. Test the hypothesis that the same coefficients
apply in every year.

      1954     1955      1956     1957     1958      1959     1960     All
Observations         65       55        87       95     103       87        78     570
     e′e                  104       88      206       144    199       308      211 1425
         The F statistic could be computed as
 F = {[1425 - (104 + 88 + ... + 211)] / (70 - 16)}/[(104 + 88 + ... + 211) / (570 - 70)] = 1.343
The 95% critical value for the F distribution with 54 and 500 degrees of freedom is 1.363.

4. Reverse Regression A common method of analyzing statistical data to detect discrimination in the
workplace is to fit the following regression:
 (1)                          y = α + β′x + γd + ε,
where y is the wage rate and d is a dummy variable indicating either membership (d=1) or nonmembership
(d=0) in the class toward which it is suggested the discrimination is directed. The regressors, x, include
factors specific to the particular type of job as well as indicators of the qualifications of the individual. The
hypothesis of interest is H0: γ < 0 vs. H1: γ = 0. The regression seeks to answer the question "in a given job,
are individuals in the class (d=1) paid less than equally qualified individuals not in the class (d=0)?" Consider,
however, the alternative possibility. Do individuals in the class in the same job as others, and receiving the




                                                                                                              25
same wage, uniformly have higher qualifications? If so, this might also be viewed as a form of discrimination.
To analyze this question, Conway and Roberts (1983) suggested the following procedure:
         (a) Fit (1) by ordinary least squares. Denote the estimates a, b,and c.
         (b) Compute the set of qualification indices,
 (2)                         q = ai + Xb.
Note the omission of cd from the fitted value.
         (c) Regress q on a constant, y, and d. The equation is
 (3)                         q = α* + β*y + γ*d + ε*.
The analysis suggests that if γ < 0, γ* > 0.
(1) Prove that the theory notwithstanding, the least squares estimates, c and c* are related by
                                        ( y 1 − y )(1 − R 2 )
 (4)                         c* =                       2
                                                              -c
                                         (1 − P)(1 − ryd   )
where                        y 1 is the mean of y for observations with d = 1,
                             y is the mean of y for all observations,
                             P is the mean of d,
                             R2 is the coefficient of determination for (1)
                              2
and                          ryd is the squared correlation between y and d.
 [Hint: The model contains a constant term. Thus, to simplify the algebra, assume that all variables are
measured as deviations from the overall sample means and use a partitioned regression to compute the
coefficients in (3). Second, in (2), use the fact that based on the least squares results,
                            y = ai + Xb + cd + e,
so                          q = y - cd - e.
From here on, we drop the constant term.] Thus, in the regression in (c), you are regressing [y - cd - e] on y
and d. Remember, all variables are in deviation form.
(2) Will the sample evidence necessarily be consistent with the theory? [Hint: suppose c = 0?]
         Using the hint, we seek the c* which is the slope on d in the regression of q = y - cd - e on y and d.
                                                −1                                   −1
                                    y' y y' d  y' ( y - cd - e)       y' y y' d  y' y - cy' d - y' e 
The regression coefficients are                 d' ( y - cd - e)  = d' y d' d d' y - cd' d - d' e . In the
                                    d' y  d' d                                                       
preceding, note that (y′y,d′y)′ is the first column of the matrix being inverted while c(y′d,d′d)′ is c times the
second. An inverse matrix times the first column of the original matrix is the first column of an identity
matrix, and likewise for the second. Also, since d was one of the original regressors in (1), d′e = 0, and, of
course, y′e = e′e. If we combine all of these, the coefficient vector is
                             −1                                            −1
    1     0  y' y y' d  e' e            1     0  y' y y' d  1
 −   − c  −                  = −   − c  −                     e' e . We are interested in the
    0     1 d' y d' d  0                0     1 d' y d' d  0
second (lower) of the two coefficients. The matrix product at the end is e′e times the first column of the
inverse matrix, and we wish to find its second (bottom) element. Therefore, collecting what we have thus far,
the desired coefficient is c* = -c - e′e times the off diagonal element in the inverse matrix. The off diagonal
element is
          -d′y / [(y′y)(d′d) - (y′d)2] = -d′y / {[(y′y)(d′d)][1 - (y′d)2/[(y′y)(d′d)]]}
                                                                 2
                                       = -d′y / [(y′y)(d′d)(1 - ryd )].
                                                                         2
Therefore,                   c*        = [(e′e)(d′y)] / [(y′y)(d′d)(1 - ryd )] - c
 (The two negative signs cancel.) This can be further reduced. Since all variables are in deviation form,
e′e/y′y is (1 - R2) in the full regression. By multiplying it out, you can show that d = P so that
                     d′d = Σi (di - P)2 = nP(1-P)
and                  d′y = Σi (di - P)(yi - y ) = Σi(di - P)yi = n1( y 1 - y )
where n1 is the number of observations which have di = 1. Combining terms once again, we have
                                                                     2
                     c* = {[n1( y 1 - y )(1 - R2)} / {nP(1-P)(1 - ryd   )} - c
Finally, since P = n1/n, this further simplifies to the result claimed in the problem,


                                                                                                              26
                                                            2
                   c* = {( y 1 - y )(1 - R2)} / {(1-P)(1 - ryd )} - c
The problem this creates for the theory is that in the present setting, if, indeed, c is negative, ( y 1 - y ) will
almost surely be also. Therefore, the sign of c* is ambiguous.

5. Reverse Regression. This and the next exercise continue the analysis of Exercise 10, Chapter 8. In the
earlier exercise, interest centered on a particular dummy variable in which the regressors were accurately
measured. Here, we consider the case in which the crucial regressor in the model is measured with error. The
paper by Kamlich and Polachek (1982) is directed toward this issue.
          Consider the simple errors in variables model, y = α + βx* + ε, x = x* + u, where u and ε are
uncorrelated, and x is the erroneously measured, observed counterpart to x*.
          (a) Assume that x*, u, and ε are all normally distributed with means µ*, 0, and 0, variances σ*2, σu2,
       2
and σε and zero covariances. Obtain the probability limits of the least squares estimates of α and β.
          (b) As an alternative, consider regressing x on a constant and y, then computing the reciprocal of the
             estimate. Obtain the probability limit of this estimate.
          (c) Do the `direct' and `reverse' estimators bound the true coefficient?
                                                                                                    x *
                                                                             y  α β 1 0 
          We first find the joint distribution of the observed variables.   =   +             ε  so [y,x]
                                                                             x   0  1 0 1   
                                                                                                    u
                                                                                     µ *
                                                                 y  α β 1 0   α + βµ *
have a joint normal distribution with mean vector              E  =   +        0  =    and
                                                                 x   0  1 0 1    µ∗ 
                                                                                     0
                                              σ *2 0      0  β 1 
                            
                            y      β  1   0                        β 2 σ *2 + σ ε2   βσ *2 
covariance matrix Var   =                  0 σ ε 0  1 0 = 
                                                     2
                                                                                                    , The probability
                           x  1 0 1                    2        
                                                                          βσ * 2
                                                                                       σ * + σ 2u 
                                                                                         2

                                              0    0 σ u  0 1 
limit of the slope in the linear regression of y on x is, as usual,
                               plim b = Cov[y,x]/Var[x] = β/(1 + σu2/σ*2) < β.
The probability limit of the intercept is plim
                               a = E[y] - (plim b)E[x] = α + βµ* - βµ*/(1 + σu2/σ*2)
                                 = α + β[µ*σu / (σ*2 + σu2)] > α (assuming β > 0).
If x is regressed on y instead, the slope will estimate plim[b′] = Cov[y,x]/Var[y] = βσ*2/(β2σ*2 + σε2).
Then,plim[1/b′] = β + σε2/β2σ*2 > β. Therefore, b and b′ will bracket the true parameter (at least in their
probability limits). Unfortunately, without more information about σu2, we have no idea how wide this
bracket is. Of course, if the sample is large and the estimated bracket is narrow, the results will be strongly
suggestive.

6. Reverse Regression - Continued: Suppose that the model in Exercise 5 is extended to
                                       y = βx* + γd + ε, x = x* + u.
For convenience, we drop the constant term. Assume that x*, ε, and u are independent normally distributed
with zero means. Suppose that d is a random variable which takes the values one and zero with probabilities π
and 1-π in the population, and is independent of all other variables in the model. To put this in context, the
preceding model (and variants of it) have appeared in the literature on discrimination. We view y as a "wage"
variable, x* as "qualifications" and x as some imperfect measure such as education. The dummy variable, d, is
membership (d=1) or nonmembership (d=0) in some protected class. The hypothesis of discrimination turns
on γ<0 versus γ=0.
(a) What is the probability limit of c, the least squares estimator of (, in the least squares regression of y on x
and d? [Hints: The independence of x* and d is important. Also, plim d′d/n = Var[d] + E2[d] =
π(1-π) + π2 = π. This minor modification does not effect the model substantively, but greatly simplifies
the algebra.] Now, suppose that x* and d are not independent. In particular, suppose E[x*|d=1] = µ1 and
E[x*|d=0] = µ0. Then, plim[x*′d/n] will equal πµ1. Repeat the derivation with this assumption.



                                                                                                                  27
(b) Consider, instead, a regression of x on y and d. What is the probability limit of the coefficient on d in this
regression? Assume that x* and d are independent.
(c) Suppose that x* and d are not independent, but γ is, in fact, less than zero. Assuming that both
preceding equations still hold, what is estimated by y |d=1 - y |d=0? What does this quantity estimate if γ
does equal zero?
          In the regression of y on x and d, if d and x are independent, we can invoke the familiar result for
least squares regression. The results are the same as those obtained by two simple regressions. It is instructive

                                                                                               (            )
                                           −1                                −1
                       x' x / n x' d / n   x' y / n σ ∗2 + σ 2u 0   βσ *2   β / 1 + σ u2 / σ ∗2 
to verify this. plim                               =                        =                    . Therefore,
                      d' x / n d' d / n  d' y / n  0            π   γπ           γ            
although the coefficient on x is distorted, the effect of interest, namely, γ, is correctly measured. Now consider
what happens if x* and d are not independent. With the second assumption, we must replace the off diagonal
zero above with plim(x′d/n). Since u and d are still uncorrelated, this equals Cov[x*,d]. This is
                  Cov[x*,d] = E[x*d] = πE[x*d|d=1] + (1-π)E[x*d|d=0] = πµ1.
Also, plim[y′d/n] is now βCov[x*,d] + γplim(d′d/n) = βπµ1 + γπ and plim[y′x*/n] equals βplim[x*′x*/n] +
γplim[x*′d/n] = βσ*2 + γπµ1. Then, the probability limits of the least squares coefficient estimators is

                                                                                        (            )
                         −1                                  −1
     x' x / n x' d / n   x' y / n σ ∗2 + σ u2    πµ1   βσ *2 + γπµ1   β / 1 + σ u2 / σ ∗2 
plim                             =                                   =                    
    d' x / n d' d / n  d' y / n  πµ
                                             1
                                                       π   βπµ1 + γπ             γ            
                                                       1               π          − πµ1   βσ *2 + γπµ1 
                                      =                                                                   
                                          π(σ *2 + σ u2 ) + π 2 (µ1 ) 2 − πµ1   σ *2 + σ u2   βπµ1 + γπ 
                                                      1                   β(πσ *2 + π 2 (µ1 ) 2 )    
                                      =       2     2      2  1 2
                                                                                          1 2
                                                                                                      .
                                          π(σ * + σ u ) + π (µ )  γ(π(σ * + σ u ) + π (µ ) ) + βπσ u 
                                                                         2     2      2             2

The second expression does reduce to plim c = γ + βπµ1σu2/[π(σ*2 + σu2) - π2(µ1)2], but the upshot is that in
the presence of measurement error, the two estimators become an unredeemable hash of the underlying
parameters. Note that both expressions reduce to the true parameters if σu2 equals zero.
          Finally, the two means are estimators of
                    E[y|d=1] = βE[x*|d=1] + γ = βµ1 + γ
and                 E[y|d=0] = βE[x*|d=0]       = βµ0,
                          1   0
so the difference is β(µ - µ ) + γ, which is a mixture of two effects. Which one will be larger is entirely
indeterminate, so it is reasonable to conclude that this is not a good way to analyze the problem. If γ equals
zero, this difference will merely reflect the differences in the values of x*, which may be entirely unrelated to
the issue under examination here. (This is, unfortunately, what is usually reported in the popular press.)

7. Data on the number of incidents of damage to a sample of ships, with the type of ship and the period
when it was constructed, are given in Table 7.8 below There are five types of ships and four different
periods of construction. Use F tests and dummy variable regressions to test the hypothesis that there is no
significant “ship type effect” in the expected number of incidents. Now, use the same procedure to test
whether there is a significant “period effect.”

                              TABLE 7.8 Ship Damage Incidents
                               Ship                    Period Constructed
                               Type    1960–1964    1965–1969     1970–1974       1975–1979
                                A            0            4            18            11
                                B           29           53            44            18
                                C            1            1             2             1
                                D            0            0            11             4
                                E            0            7            12             1
                              Source: Data from McCullagh and Nelder (1983, p. 137).




                                                                                                                    28
According to the full model, the expected number of incidents for a ship of the base type A built in the base
period 1960 to 1964, is 3.4. The other 19 predicted values follow from the previous results and are left as
an exercise. The relevant test statistics for differences across ship type and year are as follows:
                    (3925.2 − 660.9) / 4                            (1090.3 − 660.9) / 3
type: F [4, 12] =                        = 14.82, year: F [3, 12] =                      = 2.60.
                        660.9 /12                                       660.9 /12
The 5 percent critical values from the F table with these degrees of freedom are 3.26 and 3.49,
respectively, so we would conclude that the average number of incidents varies significantly across ship
types but not across years.




                                                                                                         29
    Chapter 8
    Specification Analysis and Model
    Selection
    1. Suppose the true regression model is given by (8-2). The result in (8-4) shows that if either P1.2 and β2
    are nonzero, then regression of y on X1 alone produces a biased and inconsistent estimator of β1. Suppose
    the objective is to forecast y, not to estimate the parameters. Consider regression of y on X1 alone to
    estimate β1 with b1 (which is biased). Is the forecast of computed using X1b1 also biased? Assume that
    E[X2|X1] is a linear function of X1. Discuss your findings generally. What are the implications for
    prediction when variables are omitted from a regression?
              The result cited is E[b1] = β1 + P1.2β2 where P1.2 = (X1′X1)-1X1′X2, so the coefficient estimator is
    biased. If the conditional mean function E[X2|X1] is a linear function of X1, then the sample estimator P1.2
    actually is an unbiased estimator of the slopes of that function. (That result is Theorem B.3, equation (B-
    68), in another form). Now, write the model in the form

             y = X1β1 + E[X2|X1]β2 + ε + (X2 - E[X2|X1])β2

    So, when we regress y on X1 alone and compute the predictions, we are computing an estimator of
    X1(β1 + P1.2β2) = X1β1 + E[X2|X1]β2. Both parts of the compound disturbance in this regression ε and
    (X2 - E[X2|X1])β2 have mean zero and are uncorrelated with X1 and E[X2|X1], so the prediction error has
    mean zero. The implication is that the forecast is unbiased. Note that this is not true if E[X2|X1] is
    nonlinear, since P1.2 does not estimate the slopes of the conditional mean in that instance. The generality is
    that leaving out variables wil bias the coefficients, but need not bias the forecasts. It depends on the
    relationship between the conditional mean function E[X2|X1] and X1P1.2.

    2. Compare the mean squared errors of b1 and b1.2 in Section 8.2.2. (Hint, the comparison depends on the
    data and the model parameters, but you can devise a compact expression for the two quantities.)
             The “long” estimator, b1.2 is unbiased, so its mean squared error equals its variance, σ2(X1′M2X1)-
1

    The short estimator, b1 is biased; E[b1] = β1 + P1.2β2. It’s variance is σ2(X1′X1)-1. It’s easy to show that
    this latter variance is smaller. You can do that by comparing the inverses of the two matrices. The inverse
    of the first matrix equals the inverse of the second one minus a positive definite matrix, which makes the
    inverse smaller hence the original matrix is larger - Var[b1.2] > Var[b1]. But, since b1 is biased, the
    variance is not its mean squared error. The mean squared error of b1 is Var[b1] + bias×bias′. The second
    term is P1.2β2β2′P1.2′. When this is added to the variance, the sum may be larger or smaller than Var[b1.2];
    it depends on the data and on the parameters, β2. The important point is that the mean squared error of the
    biased estimator may be smaller than that of the unbiased estimator.

    3. The J test in Example is carried out using over 50 years of data. It is optimistic to hope that the
    underlying structure of the economy did not change in 50 years. Does the result of the test carried out in
    Example 8.2 persist if it is based on data only from 1980 to 2000? Repeat the computation with this subset
    of the data.
             The regressions are based on real consumption and real disposable income. Results for 1950 to
    2000 are given in the text. Repeating the exercise for 1980 to 2000 produces: for the first regression, the
    estimate of α is 1.03 with a t ratio of 23.27 and for the second, the estimate is -1.24 with a t ratio of -3.062.
    Thus, as before, both models are rejected. This is qualitatively the same results obtained with the full 51
    year data set.




                                                                                                                 30
4. The Cox test in Example 8.3 has the same difficulty as the J test in Example 8.2. The sample period
might be too long for the test not to have been affected by underlying structural change. Repeat the
computations using the 1980 to 2000 data.
           Repeating the computations in Example 8.3 using the shorter data set produces q01 = -383.10
compared to -15,304 using the full data set. Though this is much smaller, the qualitative result is very
much the same, since the critical value is -1.96. Reversing the roles of the competing hypotheses, we
obtain q10 = 2.121 compared to the earlier value of 3.489. Though this result is close to borderline, the
result is, again, the same.




                                                                                                      31
Chapter 9
Nonlinear Regression Models
1. Describe how to obtain nonlinear least squares estimates of the parameters of the model y = αxβ + ε.
         We cannot simply take logs of both sides of the equation as the disturbance is additive rather than
multiplicative. So, we must treat the model as a nonlinear regression. The linearized equation is
                             0       0                           0
                  y ≈ α 0 x β + x β (α − α 0 ) + α 0 (log x ) x β (β − β 0 )
where α0 and β0 are the expansion point. For given values of α0 and β0, the estimating equation would be
                                 0        0

                                                        ( ) + β(α (log x) x ) + ε
                                                          0
                    y − α 0 x β + α 0 x β + α 0 (log x ) x β = α x β
                                                                       0
                                                                                   0   β0   *



or                 y + α (log x ) x = α( x ) + β(α (log x ) x ) + ε .
                         0           β0       β0          0            β0      *


Estimates of α and β are obtained by applying ordinary least squares to this equation. The process is repeated
with the new estimates in the role of α0 and β0. The iteration could be continued until convergence. Starting
values are always a problem. If one has no particular values in mind, one candidate would be α0 = y and β0 =
0 or β0 = 1 and α0 either x′y/x′x or y / x . Alternatively, one could search directly for the α and β to minimize
the sum of squares, S(α,β) = Σi (yi - αxβ)2 = Σi εi2. The first order conditions for minimization are
         ∂S(α,β)/∂α = -2Σi (yi - αxβ)xβ = 0 and ∂S(α,β)/∂β = -2Σi (yi - αxβ)α(lnx)xβ = 0.
Methods for solving nonlinear equations such as these are discussed in Chapter 5.

2. Use Mackinnon, et. al's PE test to determine whether a linear or log-linear production model is more
appropriate for the data in Table F6.1. (The test is described in Section 9.4.3 and Example 9.8.)
          First, the two simple regressions produce
                                       Linear            Log-linear
                     Constant          114.338           1.17064
                                       (173.4)           (.3268)
                     Labor             2.33814           .602999
                                       (1.039)           (.1260)
                     Capital           .471043           .37571
                                       (.1124)           (.08535)
                     R2                .9598             .9435
                     Standard Error 469.86               .1884
In the regression of Y on 1, K, L, and the predicted values from the loglinear equation minus the predictions
from the linear equation, the coefficient on α is -587.349 with an estimated standard error of 3135. Since this
is not significantly different from zero, this evidence favors the linear model. In the regression of lnY on 1,
lnK, lnL and the predictions from the linear model minus the exponent of the predictions from the loglinear
model, the estimate of α is .000355 with a standard error of .000275. Therefore, this contradicts the preceding
result and favors the loglinear model. An alternative approach is to fit the Box-Cox model in the fashion of
Exercise 4. The maximum likelihood estimate of λ is about -.12, which is much closer to the log-linear model
than the lonear one. The log-likelihoods are -192.5107 at the MLE, -192.6266 at λ=0 and -202.837 at λ = 1.
Thus, the hypothesis that λ = 0 (the log-linear model) would not be rejected but the hypothesis that λ = 1 (the
linear model) would be rejected using the Box-Cox model as a framework.




                                                                                                             32
3. Using the Box-Cox transformation, we may specify an alternative to the Cobb-Douglas model as
                    lnY = α + βk(Kλ - 1)/λ + βl(Lλ - 1)/λ + ε.
Using Zellner and Revankar's data in Table A9.1, estimate α, βk, βl, and λ by using the scanning method
suggested in Section F9.2. (Do not forget to scale Y, K, and L by the number of establishments.) Use (9-16),
(9-12) and (9-13) to compute the appropriate asymptotic standard errors for your estimates. Compute the two
output elasticities, ∂lnY/∂lnK and ∂lnY/∂lnL at the sample means of K and L. [Hint: ∂lnY/∂lnK = K∂lnY/∂K.]
How do these estimates compare to the values given in Example 10.5?
         The search for the minimum sum of squares produced the following results:

  λ      e′e
-.500 .78477
-.400 .67033
-.300 .60587
-.250 .59479
-.245 .59451
-.244 .59447
-.243 .59444
-.242 .59441
-.241 .59439
-.240 .59438
-.239 .59437
-.238 .59436
-.237 .59437
-.235 .59440
-.225 .59492
-.200 .59897
-.100 .65598
0.000 .78143
 .100 .97742
 .200 1.24354

The sum of squared
residuals is minimized at λ = -.238. At this value, the regression results are as follows:
                   Parameter            Estimate           OLS Std.Error               Correct Std.Error
                   α                    2.06092            .07718                      .09723
                   βk                   .178232            .04638                      .04378
                   βl                   .737988            .06996                      .12560
                   λ                    -.238              ----                        .07710
                   Estimated Asymptotic Covariance Matrix
                              α     βk      βl    λ
                   α .00945
                   βk .00262 .00192
                   βl .00511 -.00199 .01578
                   λ .00500 .00037 .00825 .00594
The output elasticities for this function evaluated at the sample means are
                                                            -.238
                  ∂lnY/∂lnK = βkKλ = (.178232).175905               = .2695
                                   λ                        -.238
                   ∂lnY/∂lnL = βlL = (.443954).737988             = .7740.
The estimates found for Zellner and Revankar's model were .254 and .882, respectively, so these are quite
similar. For the simple log-linear model, the corresponding values are .2790 and .927.




                                                                                                           33
4. For the model in Exercise 3, test the hypothesis that λ = 0 using a Wald test, a likelihood ratio test, and a
Lagrange multiplier test. Note, the restricted model is the Cobb-Douglas, log-linear model.
          The Wald test is based on the unrestricted model. The statistic is the square of the usual t-ratio,
W = (-.232 / .0771)2 = 9.0546. The critical value from the chi-squared distribution is 3.84, so the
hypothesis that λ = 0 can be rejected. The likelihood ratio statistic is based on both models. The sum of
squared residuals for both unrestricted and restricted models is given above. The log-likelihood is
lnL = -(n/2)[1 + ln(2π) + ln(e′e/n)], so the likelihood ratio statistic is
          LR       = n[ln(e′e/n)|λ=0 - ln(e′e/n)| λ=-.238] = nln[(e′e|λ=0) / (e′e|λ=-.238)
                   = 25ln(.78143/.54369) = 6.8406.
Finally, to compute the Lagrange Multiplier statistic, we regress the residuals from the log-linear regression on
a constant, lnK, lnL, and (1/2)(bkln2K + blln2L) where the coefficients are those from the log-linear model
(.27898 and .92731). The R2 in this regression is .23001, so the Lagrange multiplier statistic is LM = nR2 =
25(.23001) = 5.7503. All three statistics suggest the same conclusion, the hypothesis should be rejected.

5. To extend Zellner and Revankar's model in a fashion similar to theirs, we can use the Box-Cox
transformation for the dependent variable as well. Use the method of Section 10.5.2 (with θ = λ) to repeat the
study of the previous two exercises. How do your results change?
          Instead of minimizing the sum of squared deviations, we now maximize the concentrated
log-likelihood function, lnL = -(n/2)ln(1+ln(2π)) + (λ - 1)Σi lnYi - (n/2)ln(ε′ε/n).
The search for the maximum of lnL produced the following results:


  λ       lnL
-.200 -13.6284
-.150 -12.8568
-.100 -12.2423
-.050 -11.7764
0.000 -11.4476
 .050 -11.2427
 .100 -11.1480
 .110 -11.1410
 .120 -11.1378
 .121 -11.1377
 .122 -11.1376
 .123 -11.1376
 .124 -11.1375
 .125 -11.1376
 .130 -11.1383
 .140 -11.1423
 .200 -11.2344
 .300 -11.6064
 .400 -12.8371




                                                                                                             34
The log-likelihood is maximized at λ = .124. At this value, the regression results are as follows:
                    Parameter         Estimate           OLS Std.Error Correct Std.Error
                    α                 2.59465            .1283                      .7151
                    βk                .378094            .1070                      .3228
                    βl                1.13653            .1117                      .4121
                    λ                 .124               ----                       .2482
                    σ2                .036922            ----                       .0179
                             Estimated Asymptotic Covariance Matrix
                         α        βk      βl       λ          σ2
                    α .5114
                    βk .2203 .1042
                    βl .2612 .0951 .1698
                    λ .1747 .0730 .0953 .0617
                    σ2 .0104 .0044 .0059 .0038 .00032
The output elasticities for this function evaluated at the sample means, K = .175905, L = .737988, Y =
2.870777, are       ∂lnY/∂lnK = bk(K/Y)λ = .2674
                    ∂lnY/∂lnL = bl(L/Y)λ = .9017.
These are quite similar to the estimates given above. The sum of the two output elasticities for the states given
in the example in the text are given below for the model estimated with and without transforming the
dependent variable. Note that the first of these makes the model look much more similar to the Cobb Douglas
model for which this sum is constant.
          State Full Box-Cox Model lnQ on left hand side
          Florida            1.2840                      1.6598
          Louisiana          1.2019                      1.4239
          California         1.1574                      1.1176
          Maryland           1.1657                      1.0261
          Ohio               1.1899                       .9080
          Michigan           1.1604                       .8506
          Once again, we are interested in testing the hypothesis that λ = 0. The Wald test statistic is
W = (.123 / .2482)2 = .2455. We would now not reject the hypothesis that λ = 0. This is a surprising
outcome. The likelihood ratio statistic is based on both models. The sum of squared residuals for the
restricted model is given above. The sum of the logs of the outputs is 19.29336, so the restricted
log-likelihood is lnL0 = (0-1)(19.29336) - (25/2)[1 + ln(2π) + ln(.781403/25)] = -11.44757. The likelihood
ratio statistic is -2[ -11.13758 - (-11.44757)] = .61998. Once again, the statistic is small. Finally, to
compute the Lagrange multiplier statistic, we now use the method described in Example 10.12. The result is
LM = 1.5621. All of these suggest that the log-linear model is not a significant restriction on the Box-Cox
model. This rather peculiar outcome would appear to arise because of the rather substantial reduction in the
log-likelihood function which occurs when the dependent variable is transformed along with the right hand
side. This is not a contradiction because the model with only the right hand side transformed is not a
parametric restriction on the model with both sides transformed. Some further evidence is given in the next
exercise.

6. Verify the following differential equation which applies to the Box-Cox transformation
                            dix(λ)/dλi =       (1/λ)[xλ(lnx)i - idi-1x(λ)/dλi-1]                     (9-33)
Show that the limiting sequence for λ = 0 is
                            dix(λ)/dλi|λ=0 = (lnx)i/(i+1).                                           (9-34)
 (These results can be used to great advantage in deriving the actual second derivatives of the log likelihood
function for the Box-Cox model. Hint: See Example 10.11.)
          The proof can be done by mathematical induction. For convenience, denote the ith derivative by fi.
The first derivative appears in Equation (9-34). Just by plugging in i=1, it is clear that f1 satisfies the
relationship. Now, use the chain rule to differentiate f1,
                            f2 = (-1/λ2)[xλ(lnx) - x(λ)] + (1/λ)[(lnx)xλ(lnx) - f1]
Collect terms to yield      f2 = (-1/λ)f1 + (1/λ)[xλ(lnx)2 - f1] = (1/λ)[xλ(lnx)2 - 2f1].



                                                                                                             35
So, the relationship holds for i = 0, 1, and 2. We now assume that it holds for i = K-1, and show that if so, it
also holds for i = K. This will complete the proof. Thus, assume
                            fK-1 = (1/λ)[xλ(lnx)K-1 - (K-1)fK-2]
Differentiate this to give fK = (-1/λ)fK-1 + (1/λ)[(lnx)xλ(lnx)K-1 - (K-1)fK-1].
Collect terms to give       fK = (1/λ)[xλ(lnx)K - KfK-1], which completes the proof for the general case.
Now, we take the limiting value
                            limλ→0 fi = limλ→0 [xλ(lnx)i - ifi-1]/λ.
Use L'Hospital's rule once again.
                            limλ→0 fi = limλ→0 d{[xλ(lnx)i - ifi-1]/dλ}/limλ→0 dλ/dλ.
Then,                       limλ→0 fi = limλ→0 {[xλ(lnx)i+1 - ifi]}
Just collect terms,         (i+1)limλ→0 fi = limλ→0 [xλ(lnx)i+1]
or                          limλ→0 fi = limλ→0 [xλ(lnx)i+1]/(i+1) = (lnx)i+1/(i+1).




                                                                                                            36
Chapter 10
Nonspherical Disturbances - The
Generalized Regression Model
1. What is the covariance matrix, Cov[ βˆ , βˆ − b ], of the GLS estimator βˆ = ( X′Ω −1X) −1 X′ Ω −1y and
the difference between it and the OLS estimator, b = (X′X)1X′y? The result plays a pivotal role in the
development of specification tests in Hausman (1978).
           Write the two estimators as β̂ = β + (X′Ω-1X)-1X′Ω-1ε and b = β + (X′X)-1X′ε. Then,
( βˆ - b) = [(X′Ω-1X)-1X′Ω-1 - (X′X)-1X′]ε has E[ βˆ - b] = 0 since both estimators are unbiased. Therefore,
         Cov[ β̂ , βˆ - b]   = E[( β̂ - β)( βˆ - b)′].
Then,
         E{(X′Ω-1X)-1X′Ω-1εε′[(X′Ω-1X)-1X′Ω-1 - (X′X)-1X′]′}
                            = (X′Ω-1X)-1X′Ω-1(σ2Ω)[Ω-1X(X′Ω-1X)-1 - X(X′X)-1]
                            = σ2(X′Ω-1X)-1X′Ω-1ΩΩ-1X(X′Ω-1X)-1 - (X′Ω-1X)-1X′Ω-1ΩX(X′X)-1
                            = (X′Ω-1X)-1(X′Ω-1X)(X′Ω-1X)-1 - (X′Ω-1X)-1(X′X)(X′X)-1 = 0
once the inverse matrices are multiplied.

2.This and the next two exercises are based on the test statistic usually used to test a set of J linear
restrictions in the generalized regression model:
                                                          −1 −1 − 1
                                     ( Rβˆ − q )′[ R ( X′Ω X ) R ′] ( Rβˆ − q ) / J
                    F[ J , n − K ] =                                                ,
                                                          −1
                                            ( y − Xβˆ )′Ω ( y − Xβˆ ) /( n − K )
where βˆ is the GLS estimator. Show that if Ω is known, if the disturbances are normally distributed and if
the null hypothesis, Rβ = q, is true, then this statistic is exactly distributed as F with J and n  K degrees of
freedom. What assumptions about the regressors are needed to reach this conclusion? Need they be
nonstochastic?
          First, (R βˆ - q) = R[β + (X′Ω-1X)-1X′Ω-1ε)] - q = R(X′Ω-1X)-1X′Ω-1ε if Rβ - q = 0.
 Now, use the inverse square root matrix of Ω, P = Ω-1/2 to obtain the transformed data,
                 X* = PX = Ω-1/2X, y* = Py = Ω-1/2y, and ε* = Pε = Ω-1/2ε.
 Then,           E[ε*ε*′] = E[Ω-1/2εε′Ω-2] = Ω-1/2(σ2Ω)Ω-1/2 = σ2I,
 and,             β̂      = (X′Ω-1X)-1X′Ω-1y = (X*′X*)-1X*′y*
                          = the OLS estimator in the regression of y* on X*.
 Then,           R βˆ - q = R(X*′X*)-1X*′ε*
 and the numerator is ε*′X*(X*′X*)-1R′[R(X*′X*)-1R′]-1R(X*′X*)-1X*′ε* / J. By multiplying it out, we find that
 the matrix of the quadratic form above is idempotent. Therefore, this is an idempotent quadratic form in a
 normally distributed random vector. Thus, its distribution is that of σ2 times a chi-squared variable with
 degrees of freedom equal to the rank of the matrix. To find the rank of the matrix of the quadratic form, we
 can find its trace. That is
                     tr{X*(X*′X*)-1R′[R(X*′X*)-1R′]-1R(X*′X*)-1X*}
                             = tr{(X*′X*)-1R′[R(X*′X*)-1R′]-1R(X*′X*)-1X*′X*}
                             = tr{(X*′X*)-1R′[R(X*′X*)-1R′]-1R}
                             = tr{[R(X*′X*)-1R′][R(X*′X*)-1R′]-1} = tr{IJ} = J,
 which might have been expected. Before proceeding, we should note, we could have deduced this outcome
 from the form of the matrix. The matrix of the quadratic form is of the form Q = X*ABA′X*′ where B is the



                                                                                                             37
 nonsingular matrix in the square brackets and A = (X*′X*)-1R′, which is a K×J matrix which cannot have
 rank higher than J. Therefore, the entire product cannot have rank higher than J. Continuing, we now find
 that the numerator (apart from the scale factor, σ2) is the ratio of a chi-squared[J] variable to its degrees of
 freedom.
          We now turn to the denominator. By multiplying it out, we find that the denominator is
(y* - X* β̂ )′(y* - X* β̂ )/(n - K). This is exactly the sum of squared residuals in the least squares regression of
y* on X*. Since y* = X*β + ε* and βˆ = (X*′X*)-1X*′y* the denominator is ε*′M*ε*/(n - K), the familiar form
of the sum of squares. Once again, this is an idempotent quadratic form in a normal vector (and, again, apart
from the scale factor, σ2, which now cancels). The rank of the M matrix is n - K, as always, so the
denominator is also a chi-squared variable divided by its degrees of freedom.
         It remains only to show that the two chi-squared variables are independent. We know they are if the
two matrices are orthogonal. They are since M*X* = 0. This completes the proof, since all of the
requirements for the F distribution have been shown.

3. Now suppose that the disturbances are not normally distributed, although Ω is still known. Show that
the limiting distribution of previous statistic is (1/J) times a chi-squared variable with J degrees of freedom.
(Hint: The denominator converges to σ2.) Conclude that in the generalized regression model, the limiting
distribution of the Wald statistic
                                                                     −1
                             W = ( Rβˆ − q )′{R (Est. Var[ βˆ ]) R ′} ( Rβˆ − q )
is chi-squared with J degrees of freedom, regardless of the distribution of the disturbances, as long as the
data are otherwise well behaved. Note that in a finite sample, the true distribution may be approximated
with an F[J,n-K] distribution. It is a bit ambiguous, however, to interpret this fact as implying that the
statistic is asymptotically distributed as F with J and n-K degrees of freedom, because the limiting
distribution used to obtain our result is the chi-squared, not the F. In this instance, the F[J, n-K] is a
random variable that tends asymptotically to the chi-squared variate.
           First, we know that the denominator of the F statistic converges to σ2. Therefore, the limiting
distribution of the F statistic is the same as the limiting distribution of the statistic which results when the
denominator is replaced by σ2. It is useful to write this modified statistic as
           W * = (1/σ2)(R βˆ - q)′[R(X*′X*)-1R′]-1(R βˆ - q)/J.
Now, incorporate the results from the previous problem to write this as
                    W * = ε*′X*(X*′X*)-1R′[Rσ2(X*′X*)-1R′]-1R(X*′X*)-1X*′ε/J
Let                 ε0 = R(X*′X*)-1X*′ε*.
Note that this is a J×1 vector. By multiplying it out, we find that E[ε0ε0′] = Var[ε0] = R{σ2(X*′X*)-1}R′.
Therefore, the modified statistic can be written as W * = ε0′Var[ε0]-1ε0/J. This is the ‘full rank quadratic form’
discussed in Appendix B. For convenience, let C = Var[ε0], T = C-1/2, and v = Tε0. Then, W * = v′v. By
construction, v = Var[ε0]-1/2ε0, so E[v] = 0 and Var[v] = I. The limiting distribution of v′v is chi-squared
J if the limiting distribution of v is standard normal. All of the conditions for the central limit theorem apply
to v, so we do have the result we need. This implies that as long as the data are well behaved, the numerator
of the F statistic will converge to the ratio of a chi-squared variable to its degrees of freedom.

4. Finally, suppose that Ω must be estimated, but that assumptions (10-27) and (10-31) are met by the
estimator. What changes are required in the development of the previous problem?
The development is unchanged. As long as the limiting behavior of (1/n) X̂ ′ X̂ = (1/n)X′ Ω  ˆ -1X is the same as
               * *
that of (1/n)X ′X , the limiting distribution of the test statistic will be the same as if the true Ω were used
instead of the estimate Ω̂ .




                                                                                                                38
5. In the generalized regression model, if the K columns of X are characteristic vectors of Ω, then ordinary
least squares and generalized least squares are identical. (The result is actually a bit broader; X may be any
linear combination of exactly K characteristic vectors. This result is Kruskal’s Theorem.)
         a. Prove the result directly using matrix algebra.
         b. Prove that if X contains a constant term and if the remaining columns are in deviation form (so
that the column sum is zero), then the model of Exercise 8 below is one of these cases. (The seemingly
unrelated regressions model with identical regressor matrices, discussed in Chapter 14, is another.)
         First, in order to simplify the algebra somewhat without losing any generality, we will scale the
columns of X so that for each xk, xk′xk = 1. We do this by beginning with our original data matrix, say, X0
and obtaining X as X = X0D-1/2, where D is a diagonal matrix with diagonal elements Dkk = xk0′xk0. By
multiplying it out, we find that the GLS slopes based on X instead of X0 are
β̂ = [(X0D-1/2)′Ω-1(X0D-1/2)]-1[(X0D-1/2)′Ω-1y] = D1/2[X′Ω-1X](D′)1/2(D′)-1/2X′Ω-1y = D1/2 β̂ 0
with variance Var[ βˆ ] = D1/2σ2[X′Ω-1X]-1(D′)1/2 = D1/2Var[ β̂ 0](D′)1/2. Likewise, the OLS estimator based
on X instead of X0 is b = D1/2b0 and has variance Var[b] = D1/2Var[b0](D′)1/2. Since the scaling affects both
estimators identically, we may ignore it and simply assume that X′X = I.
         If each column of X is a characteristic vector of Ω, then, for the kth column, xk, Ωxk = λkxk.
Further, xk′Ωxk = λk and xk′Ωxj = 0 for any two different columns of X. (We neglect the scaling of X, so
that X′X = I, which we would usually assume for a set of characteristic vectors. The implicit scaling of X is
absorbed in the characteristic roots.) Recall that the characteristic vectors of Ω-1 are the same as those of Ω
while the characteristic roots are the reciprocals. Therefore, X′ΩX = ΛK, the diagonal matrix of the K
characteristic roots which correspond to the columns of X. In addition, X′Ω-1X = ΛK-1, so (X′Ω-1X)-1 = ΛK,
andX′Ω-1y = ΛK-1X′y. Therefore, the GLS estimator is simply βˆ = X′y with variance Var[ βˆ ] = σ2ΛK. The
OLS estimator is b = (X′X)-1X′y = X′y. Its variance is Var[b] = σ2(X′X)-1X′ΩX(X′X)-1 = σ2ΛK, which
means that OLS and GLS are identical in this case.

6. In the generalized regression model, suppose that Ω is known.
         a. What is the covariance matrix of the OLS and GLS estimators of β?
         b. What is the covariance matrix of the OLS residual vector e = y - Xb?
         c. What is the covariance matrix of the GLS residual vector εˆ = y − Xβˆ ?
         d. What is the covariance matrix of the OLS and GLS residual vectors?

Write b = β + (X′X)-1X′ε and β̂ = β + (X′Ω-1X)-1X′Ω-1ε. The covariance matrix is
E[(b - β)( β̂ - β)′] = E[(X′X)-1X′εε′Ω-1X(X′Ω-1X)-1] = (X′X)-1X′(σ2Ω)Ω-1X(X′Ω-1X)-1 = σ2(X′Ω-1X)-1.
         For part (b), e = Mε as always, so E[ee′] = σ2MΩM. No further simplification is possible for the
general case.
         For part (c), εˆ = y - X βˆ = y - X[β + (X′Ω-1X)-1X′Ω-1ε]
                                    = Xβ + ε - X[β + (X′Ω-1X)-1X′Ω-1ε]
                                    = [I - X(X′Ω-1X)-1X′Ω-1]ε.
Thus, E[ ε̂ ε̂ ′] = [I - X(X′Ω-1X)-1X′Ω-1]E[εε′][I - X(X′Ω-1X)-1X′Ω-1] ′
                  = [I - X(X′Ω-1X)-1X′Ω-1](σ2Ω)[I - X(X′Ω-1X)-1X′Ω-1] ′
                  = [σ2Ω - σ2X(X′Ω-1X)-1X′][I - X(X′Ω-1X)-1X′Ω-1] ′
                  = [σ2Ω - σ2X(X′Ω-1X)-1X′][I - Ω-1X(X′Ω-1X)-1X′]
                  = σ2Ω- σ2X(X′Ω-1X)-1X′ - σ2X(X′Ω-1X)-1X′ + σ2X(X′Ω-1)X)-1X′Ω-1X(X′Ω-1X)-1X′
                  = σ2[Ω - X(X′Ω-1X)-1X′]
The GLS residual vector appears in the preceding part. As always, the OLS residual vector is e = Mε =
[I - X(X′X)-1X′]ε. The covariance matrix is




                                                                                                           39
        E[e ε̂ ′] = E[(I - X(X′X)-1X′)εε′(I - X(X′Ω-1X)-1X′Ω-1)′]
                  = (I - X(X′X)-1X′)(σ2Ω)(I - Ω-1X(X′Ω-1X)-1X′)
                  = σ2Ω - σ2X(X′X)-1X′Ω - σ2ΩΩ-1X(X′Ω-1X)-1X′ + σ2X(X′X)-1X′ΩΩ-1X(X′Ω-1X)-1X′
                  = σ2Ω - σ2X(X′X)-1X′
                  = σ2MΩ.
                                                       − y /( β ′x)
7. Suppose that y has the pdf f ( y | x ) = (1/ x′β )e              , y > 0.
        Then E[y | x] = β ′x and Var[y | x] = (β′x)2. For this model, prove that GLS and MLE are the same,
even though this distribution, like the one in Exercise 2, involves the same parameters in the conditional
mean function and the disturbance variance.
        The GLS estimator is βˆ = (X′Ω-1X)-1X′-1y = [Σixixi′/(β′xi)2]-1[Σixiyi/(β′xi)2]. The log-likelihood for
this model is      lnL = -Σiln(β′xi) - Σiyi/(β′xi).
The likelihood equations are
                   ∂lnL/∂β = -Σi(1/β′xi)xi + Σi[yi/(β′xi)2]xi = 0
or                 Σi(xiyi/(β′xi)2) = Σixi/(β′x i).
Now, write         Σixi/(β′xi) = Σixixi′β/(β′xi)2,
so the likelihood equations are equivalent to Σi(xiyi/(β′x i).2) = Σixixi′β/(β′x i).2, or X′Ω-1y = (X′Ω-1X)β.
These are the normal equations for the GLS estimator, so the two estimators are the same. We should note,
the solution is only implicit, since Ω is a function of β. For another more common application, see the
discussion of the FIML estimator for simultaneous equations models in Chapter 15.

8. Suppose that the regression model is y = µ + ε, where ε has a zero mean, constant variance, and equal
correlation ρ across observations. Then Cov[εi,εj] = σ2ρ if i ≠ j. Prove that the least squares estimator of µ
is inconsistent. Find the characteristic roots of Ω and show that Condition 2. after Theorem 10.2 is
violated.
          The covariance matrix is
                         1         ρ   ρ " ρ
                         ρ         1   ρ " ρ
                   2    2                     
                  σ Ω =σ ρ          ρ   1 " ρ .
                                              
                                         #    
                          ρ       ρ   ρ " 1 
The matrix X is a column of 1s, so the least squares estimator of µ is y . Inserting this Ω into (10-5), we
                    2
                  σ
obtain Var[ y ] =     (1 − ρ + n ρ ). The limit of this expression is ρσ 2, not zero. Although ordinary least
                   n
squares is unbiased, it is not consistent. For this model, X′ΩX/n = 1 + ρ(n – 1), which does not converge.
Using Theorem 10.2 instead, X is a column of 1s, so X′X = n, a scalar, which satisfies condition 1. To find
the characteristic roots, multiply out the equation Ωx = λx = (1-ρ)Ix + ρii′x = λx. Since i′x = Σixi, consider
any vector x whose elements sum to zero. If so, then it’s obvious that λ = ρ. There are n-1 such roots.
Finally, suppose that x = i. Plugging this into the equation produces λ = 1 - ρ + nρ. The characteristic roots
of Ω are (1 – ρ) with multiplicity n – 1 and (1 – ρ + nρ), which violates condition 2.




                                                                                                           40
Chapter 11
Heteroscedasticity
1. Suppose the regression model is yi = µ + εi, where E[εi|xi] = 0, but Var[εi|xi] = σ2xi2, xi > 0.
(a) Given a sample of observations on yi and xi, what is the most efficient estimator of ε? What is its
variance?
(b) What is the ordinary least squares estimator of µ and what is the variance of the ordinary least squares
estimator?
(c) Prove that the estimator in (a) is at least as efficient as the estimator in (b).
         This is a heteroscedastic regression model in which the matrix X is a column of ones. The efficient
                                    ∧
estimator is the GLS estimator, β = (X′Ω-1X)-1X′Ω-1y = [Σi1yi/xi2] / [Σi 12/xi2] = [Σi(yi/xi2)] / [Σi(1/xi2)]. As
                                                  ∧
always, the variance of the estimator is Var[ β ] = σ2(X′Ω-1X)-1 = σ2/[Σi(1/xi2)]. The ordinary least squares
estimator is (X′X)-1X′y = y . The variance of y is σ2(X′X)-1(X′ΩX)(X′X)-1 = (σ2/n2)Σixi2. To show that the
variance of the OLS estimator is greater than or equal to that of the GLS estimator, we must show that
(σ2/n2)Σixi2 > σ2/Σi(1/xi2) or (1/n2)(Σixi2)(Σi(1/xi2)) > 1 or ΣiΣj(xi2/xj2) > n2. The double sum contains n terms
equal to one. There remain n(n-1)/2 pairs of the form (xi2/xj2 + xj2/xi2). If it can be shown that each of these
sums is greater than or equal to 2, the result is proved. Just let zi = xi2. Then, we require zi/zj + zj/zi - 2 > 0.
But, this is equivalent to (zi2 + zj2 - 2zizj) / zizj > 0 or (zi - zj)2/zizj > 0, which is certainly true if zi and zj are
positive. They are since zi equals xi2. This completes the proof.

2. For the model in the previous exercise, what is the probability limit of s2 = (1/(n-1))Σi(yi - y )2? Note that
this is the least squares estimate of the residual variance. It is also n times the conventional estimator of the
variance of the OLS estimator, Est.Var[ y ]= s2(X′X)-1 = s2/n. How does this compare to the true value you
found in part (b) of Exercise 1? Does the conventional estimator produce the correct estimate of the true
asymptotic variance of the least squares estimator?
          Consider, first, y . We saw earlier that Var[ y ] = (σ2/n2)Σixi2 = (σ2/n)(1/n)Σixi2. The expected
value is E[ y ] = E[(1/n)Σiyi] = α. If the mean square of x converges to something finite, then y is consistent
for α. That is, if plim(1/n)Σixi2 = q where q is some finite number, then, plim y = α. As such, it follows that
s2 and s*2 = (1/(n-1))Σi(yi - α)2 have the same probability limit. We consider, therefore, plim s*2 =
plim(1/(n-1))Σiεi2. The expected value of s*2 is E[(1/(n-1)) Σiεi2] = σ2(1/Σixi2). Once again, nothing more can
be said without some assumption about xi. Thus, we assume again that the average square of xi converges to a
finite, positive constant, q . Of course, the result is unchanged by division by (n-1) instead of n, so limn→∞
E[s*2] = σ2 q . The variance of s*2 is Var[s*2] = ΣiVar[εi2]/(n - 1)2 . To characterize this, we will require the
variances of the squared disturbances, which involves their fourth moments. But, if we assume that every
fourth moment is finite, then the preceding is (n/(n-1)2) times the average of these fourth moments. If every
fourth moment is finite, then the term is dominated by the leading (n/(n-1)2) which converges to zero. It
follows that plim s*2 = σ2 q . Therefore, the conventional estimator estimates Asy.Var[ y ]= σ2 q /n.
          The appropriate variance of the least squares estimator is Var[ y ]= (σ2/n2)Σixi2, which is, of course,
precisely what we have been analyzing above. It follows that the conventional estimator of the variance of the
OLS estimator in this model is an appropriate estimator of the true variance of the least squares estimator.
This follows from the fact that the regressor in the model, i, is unrelated to the source of heteroscedasticity, as
discussed in the text.

3. Two samples of 50 observations each produce the following moment matrices: (In each case, X is a
constant and one variable.)


                                                                                                                      41
                              Sample 1                    Sample 2
                               50 300                    50 300 
                    X′X       300 1200                  300 1200
                                                                
                    y′X       [300 2000 ]              [300 2200 ]
                    y′y        2100                     2800
(a) Compute the least squares regression coefficients and the residual variances, s2, for each data set.
Compute the R2 for each regression.
(b) Compute the OLS estimate of the coefficient vector assuming that the coefficients and disturbance
variance are the same in the two regressions. Also compute the estimate of the asymptotic covariance matrix
of the estimator.
(c) Test the hypothesis that the variances in the two regressions are the same without assuming that the
coefficients are the same in the two regressions.
(d) Compute the two step feasible GLS estimator of the coefficients in the regression assuming that the
constant and slope are the same in both regressions. Compute the estimate of the covariance matrix and
compare it to the result of (b)
          The sample moments are obtained using, for example, Sxx = x′x - n x 2 and so on. For the two
samples, we obtain            y        x        Sxx   Syy       Sxy
          Sample 1           6         6       300    300       200
          Sample 2           6         6       300    1000      400
The parameter estimates are computed directly using the results of Chapter 6.
                             Intercept         Slope R2         s2
          Sample 1           2                 2/3    4/9       (1500/9)/48 = 3.472
          Sample 2           -2                4/3    16/30 (4200/9)/48 = 9.722
                                                             100 600              600 
The pooled moments based on 100 observations are X′X =                   , X′y =       , y′y = 4900. The
                                                             600 4200            4200
coefficient vector based on these data is [a,b] = [0,1]. This might have been predicted since the two X′X
matrices are identical. OLS which ignores the heteroscedasticity would simply average the estimates. The
sum of squared residuals would be e′e = y′y - b′X′y = 4900 - 4200 = 700, so the estimate of σ2 is s2 =
700/98 = 7.142. Note that the earlier values obtained were 3.472 and 9.722, so the pooled estimate is between
the two, once again, as might be expected. The asymptotic covariance matrix of these estimates is s2(X′X)-1
          .07 −.01
= 7.142             .
         −.01 .167 
          To test the equality of the variances, we can use the Goldfeld and Quandt test. Under the null
hypothesis of equal variances, the ratio F = [e1′e1/(n1 - 2)]/[e2′e2/(n2 - 2)] (or vice versa for the subscripts) is
the ratio of two independent chi-squared variables each divided by their respective degrees of freedom.
Although it might seem so from the discussion in the text (and the literature) there is nothing in the test which
requires that the coefficient vectors be assumed equal across groups. Since for our data, the second sample
has the larger residual variance, we refer F[48,48] = s22/s12 = 9.722 / 3.472 = 2.8 to the F table. The
critical value for 95% significance is 1.61, so the hypothesis of equal variances is rejected.
                                         ∧
         The two step estimator is β = [(1/s12)X1′X1 + (1/s22)X2′X2]-1[(1/s12)X1′y1 + (1/s22)X2′y2]. The X′X
matrices are the same in this problem, so this simplifies to
∧
β=        [(1/s12   +     1/s22)X′X]-1[(1/s12)X1′y1   +   (1/s22)X2′y2].   .    The     estimator    is,   therefore
                                    −1
 1           1   50 300    1  300           1  300    .9469
        +                              +             =      .
  3.472   9.722   300 2100  3.472  2000  9.722  2200   .8422




                                                                                                                42
4. Using the data in the previous exercise, use the Oberhofer-Kmenta method to compute the maximum
likelihood estimate of the common coefficient vector.
         The estimator must be based on maximum likelihood estimators of the two disturbance variances, so
they must be recomputed first. Our initial estimators of them are s12 = (1500/9)/50 = 3.3333 and s22 =
(4200/9)/50 = 9.3333. Beginning from this point, we iterate between the estimator of the coefficient vector
                                                                                 ∧      ∧       ∧
described above and the two variance estimators sj2 = (1/50)[(y′y)j - 2 β ′(X′y)j + β ′X′X β ]. The iterations
are
                                                               ∧             ∧
                                      s12        s22          α              β
                            (0)   3.333333     9.33333     .947366        .824106
                            (1)   3.518005    10.78117     1.01588        .830686
                            (3)   3.494747    10.84926     1.02545        .829092
                            (4)   3.491626    10.85889     1.02676        .828873
                            (5)   3.491199    10.86021     1.02694        .828843
                            (6)   3.491141    10.86039     1.02697        .828839
                            (7)   3.491134    10.86042     1.02697        .828839 (Converged)

5. This exercise is based on the following data set:
    50 observations on Y:
    -1.42   2.75        2.10      -5.08    1.49        1.00         .16 -1.11         1.66
     -.26 -4.87         5.94       2.21   -6.87         .90        1.61   2.11       -3.82
     -.62   7.01       26.14       7.39     .79        1.93        1.97 -23.17       -2.52
    -1.26   -.15        3.41      -5.45    1.31        1.52        2.04   3.00        6.31
     5.51 -15.22       -1.47      -1.48    6.66        1.78        2.62 -5.16        -4.71
     -.35   -.48        1.24        .69    1.91
     50 observations on X1:
    -1.65     1.48       .77       .67        .68        .23       -.40    -1.13       .15
     -.63      .34       .35       .79        .77      -1.04        .28      .58      -.41
    -1.78     1.25       .22      1.25       -.12        .66       1.06     -.66     -1.18
     -.80    -1.32       .16      1.06       -.60        .79        .86     2.04      -.51
      .02      .33     -1.99       .70       -.17        .33        .48     1.90      -.18
     -.18    -1.62       .39       .17       1.02
     50 observations on X2:
     -.67      .70       .32       2.88    -.19        -1.28   -2.72        -.70     -1.55
     -.74    -1.87      1.56        .37   -2.07         1.20     .26       -1.34     -2.10
      .61     2.32      4.38       2.16    1.51          .30    -.17        7.82     -1.15
     1.77     2.92     -1.94       2.09    1.50         -.46     .19        -.39      1.54
     1.87    -3.45      -.88      -1.53    1.42        -2.70    1.77       -1.89     -1.85
     2.01     1.26     -2.02       1.91   -2.23
(a) Compute the ordinary least squares regression of Y on a constant, X1, and X2. Be sure to compute the
conventional estimator of the asymptotic covariance matrix of the OLS estimator also.
(b) Compute the White estimator of the appropriate asymptotic covariance matrix for the OLS estimates. (See
(12-9).)
(c) Test for the presence of heteroscedasticity using White's general test. Do your results suggest the nature of
the heteroscedasticity?
(d) Use the Breusch and Pagan Lagrange multiplier test to test for heteroscedasticity.
(e) Sort the data keying on X1 and use the Goldfeld-Quandt test to test for heteroscedasticity. Repeat using
X2. What do you find?
(f) Use one of Glesjer's tests to test for heteroscedasticity.




                                                                                                             43
           The ordinary least squares regression of Y on a constant, X1, and X2 produces the following results:
                     Sum of squared residuals 1911.9275
                     R2                              .03790
                     Standard error of regression 6.3780
                     Variable            Coefficient       Standard Error t-ratio
                     One                  .190394          .9144              .208
                     X1                  1.13113           .9826             1.151
                     X2                   .376825          .4399              .857
                     Covariance Matrix                     White’s Corrected Matrix
                      .836212                              .524589
                     -.115451 .96551                       .076578 .282366
                     -.047133 .051081 .193532              .399218 -.091608 1.14447
           To apply White's test, we first obtain the residuals from the regression of Y on a constant, X1, and X2.
Then, we regress the squares of these residuals on a constant, X1, X2, X12, X22, and X1X2. The R2 in this
regression is .78296, so the chi-squared statistic is 50×0.78296 = 39.148. The critical value from the table of
chi-squared with 6 degrees of freedom is 12.5916, so we would conclude that there is evidence of
heteroscedasticity.
           Referring back to the ordinary least squares regression, we now compute the mean squared residual,
1911.9275/50 = 38.23855. Then, we compute vi = (1/38.23855)ei2 for each observation. In the regression of
v on a constant, X1, and X2, the regression sum of squares is 145.551, so the chi-squared statistic is 145.551/2
= 72.775. We reach the same conclusion as in the previous paragraph. In this case, the degrees of freedom
for the test are only two, so the conclusion is somewhat stronger.
           To carry out the Goldfeld-Quandt test, we order the data first based on X1 then on X2. The
regressions are computed using the first and last 17 observations, so the F statistic in each case is F[14,14] =
e1′e1 / e2′e2 where e1′e1 is the larger of the two sums of squares and e2′e2 is the smaller. For our data set, we
find                                              Sorted on X1      Sorted on X2
                     e′e for obs. 1-17            385.974           246.026
                     e′e for obs. 34-50           273.404           1165.683
                     F[14,14]                     1.412             4.738
The second is considerably larger than the critical value of 2.48. We would conclude, therefore, that there is
evidence of heteroscedasticity and it is related to X2 but not X1. In view of this finding, it is instructive to go
back to the White and Breusch and Pagan tests considered earlier. Consider the Lagrange multiplier test, first.
In the regression of the squared residuals from the original regression divided by e′e/n first on 1 and X1 then
on 1 and X2, the regression sums of squares are .01805 and 105.906, respectively. Therefore, the chi-squared
statistics are .009025 and 52.953, respectively. The implication is, once again, that there is substantial
heteroscedasticity, of the form σi2 = σ2h(1+γXi2). The White test involves regressing the squared residuals
first on 1, X1, and X12 then on 1, X2, and X22. The R2s in these two regressions are .02216 and .61380,
respectively. The test statistics are thus 1.108 and 30.69. The conclusion is the same.
           Finally, we compute Glesjer's test statistics for the three models discussed in Section 14.3.5. We
regress e2, |e|, and log|e| on 1, X1, and X2. We use the White estimator for the covariance matrix of the
parameter estimates in these regressions as there is ample evidence now that the disturbances are
heteroscedastic related to X2. To compute the Wald statistic, we need the two slope coefficients, which we
denote q, and the 2×2 submatrix of the 3×3 covariance matrix of the coefficients, which we denote Vq. The
statistic is W = q′Vq-1q. For the three regressions, the values are 4.13, 6.51, and 6.60, respectively. The
critical value from the chi-squared distribution with 2 degrees of freedom is 5.99, so the second and third are
statistically significant while the first is not.
           The disturbance variance underlying these data is, in fact, σi2 = σ2(1 + γXi22) so the Goldfeld-Quandt
and Glejser tests have given the right diagnosis. For the Glejser test, the finding that the linear model is
inappropriate makes sense since X2 takes negative values.




                                                                                                               44
6. Using the data of Exercise 5, reestimate the parameters, using a two step feasible GLS estimator. Try
(12-19), (12-20), and (12-21). Which one appears to be most appropriate?
           The ordinary least squares estimates are given above. The estimates of the disturbance variances are
based on the residuals from this regression. For the three models, the disturbance variances are estimated as
follows:
(1)        σi2 = σ2(α′zi): Regress e2 on 1, X1, X2. Estimates of σi2 are the fitted values in this regression.
           This produces numerous negative values and is clearly inappropriate.
(2)        σi2 = σ2(α′zi)2: Regress |ei| on 1, X1, and X2. The estimates of σi2 are the squares of the predicted
           values from this regression.
(3)        σi2 = σ2exp(α′zi): Regress log(ei2) on 1, X1, and X2. The estimates of σi2 are the exponents of the
           fitted values in this regression.
Weighted least squares regressions based on the second and third sets of weights (1/σi2) produces the
following estimates (standard errors are shown in parentheses). In each case, the weights are the reciprocals
of the estimated standard deviations as described above.
                               Unweighted                  (2)                          (3)
                     One       .190394 (.9144)             1.48129 (1.817)              .166626 (.7198)
                     X1        1.13113 (.9826)             1.44651 (.9716)              .776487 (.6388)
                     X2        .376825 (.4399)             .894613 (.7451)              .847177 (.3633)
There is little in the way of guidance as to which model is the better one. The OLS estimates are suggestive
since they are consistent under all specifications. The second set of estimates resemble the OLS estimates
slightly more than the third. As we discussed above, model (2) is, in fact, the right one. Unfortunately, one
would be hard pressed to reach that as a firm conclusion based on just these results. Of course, the results of
the tests in the previous exercise are much more convincing.

7. For the model in Exercise 1, suppose , is normally distributed with mean zero and variance σ2(1 + (γx)2).
Show that σ2 and γ2 can be consistently estimated by a regression of the least squares residuals on a constant
and x2. Is this estimator efficient?
           The residuals from the least squares regression are ei = yi - y = α + εi - (α + ε ) = εi - ε . The
expected value of the squared residual is
                    E[ei2] = E[εi2] + E[ ε 2] - 2E[εi ε ] = σi2 + (1/n2)E[(Σiεi)2] - (2/n)E[εi(Σjεj)]
                              = σi2 + (1/n2)ΣiE[εi2] - (2/n)E[εi2]
since the disturbances are uncorrelated. We can write this as
                    E[ei2] = σ2 + σ2γ2xi2 + (1/n){[(1/n)Σiσi2] - [2σi2]}.
And, of course, ei2 = E[ei2] + (ei2 - E[ei2]) = E[ei2] + vi, where vi is uncorrelated with E[ei2] by
construction. Now, if we regress ei2 on a constant and xi2, the estimates of σ2 and (σ2γ2) will be biased in a
finite sample because of the left out variable, namely the term multiplied by (1/n) in the expression for E[ei2].
But, if the two terms inside the curled brackets above converge to finite quantities as n→∞, then the entire
term will vanish, and the omitted variable problem will vanish with it. Surely the second does since it is the
variance of εi2, assuming that xi2 is finite. To make the first converge, we will require that (1/n)Σi[σ2 + σ2γ2xi2]
= σ2 + σ2γ2(1/n)Σixi2 converge to a finite quantity, or that the mean square of the xs converge to a finite
quantity. This is a minimal requirement for a heteroscedastic regression, and would surely be met. As such, if
ei2 is regressed on a constant and xi2, we obtain consistent estimators of σ2 and σ2γ2. The estimator of σ is the
square root of the ratio of the slope to the constant.
           The estimator is not efficient. The expected fourth moment of a normally distributed variable is 3
times the square of the variance. Therefore, in the regression above, the variance of vi must be a function of
[σ2(1 + γ2xi2)]2. Since the regression is heteroscedastic in a way which is not dependent on the sample size,
OLS will not be efficient, but it will be consistent.




                                                                                                                45
8. Derive the log-likelihood function, first order conditions for maximization, and information matrix for the
model yi = β′xi + εi, εi ~ N[0,σ2(γ′zi)2].
          First,    logL        = - (n/2) log(2π) - 2Σilogσi2 - 2Σi(εi2/σi2)
                                = - (n/2)ln(2π) - (n/2) logσ2 - 2Σilog(γ′zi)2 - [1/(2σ2)]Σi[(yi - β′xi)2/(γ′zi)2]
                    ∂logL/∂β = -(1/(2σ2))Σi(1/(γ′zi)2)(2)(yi - β′xi)(-xi) = Σi{εi/[σ2(γ′zi)2]}xi
                    ∂logL/∂γ = - 2Σi(1/(γ′zi)2)(2γ′zi)zi - (1/(2σ2))Σi(yi - β′xi)2[-2/(γ′zi)3]zi
                                = -Σi[1/(γ′zi)]zi + (1/σ2)Σi[εi2/(γ′zi)2][1/(γ′zi)]zi
                                = Σi{εi2/[σ2(γ′zi)2] - 1}[1/(γ′zi)]zi
It is useful to note in passing that we can write this as = 2Σi{εi2/[σ2(γ′zi)2] - 1}[1/(γ′zi)2]2(γ′zi)zi which is
what appears in (12-28). It is obvious that these first derivatives have expectation zero, the first since E[εi] =
0 and the second because the first term in large brackets has expectation zero. Finally,
∂logL/∂σ2           = -n/(2σ2) + (1/(2σ4))Σi[εi2/(γ′zi)2)].
             2
Since E[εi ]        = σ2(γ′zi)2, this also has expected value zero. The second derivatives are
  2
∂ logL/∂β∂β′        = Σixi(∂εi/∂β′)/[σ2(γ′zi)2] = -Σi[1/σ2(γ′zi)2]xixi′
  2            2
∂ logL/∂β∂σ         = Σi{-εi/[(σ2)2(γ′zi)2]}xi
  2
∂ logL/∂β∂γ′        = ΣEi{-2εi/[σ2(γ′zi)3]}xizi′
  2          2 2
∂ logL/∂(σ )        = n/(2σ4) - (1/σ4)Σi{εi2/[σ2(γ′zi)2]}
  2        2
∂ logL/∂F ∂γ′       = [1/(2σ4)]Σi{εi2[-2/(γ′zi)3)]}zi = [-1/(2σ2)]Σi{εi2[-2/(γ′zi)2)]}{1/(γ′zi)2}{2γ′zi }zi
  2
∂ logL/∂γ∂γ′        = Σi{εi2/[σ2(γ′zi)2] - 1}[-1/(γ′zi)2]zizi′ + Σi{-2εi2/[σ2(γ′zi)3]}[1/(γ′zi)]zizi′
In the notation of (12-26) - (12-28), fi = (γ′zi)2 and gi = 2(γ′zi)zi. Therefore, Ω = diag[(γ′zi)2] and G =
the matrix whose rows are gi′. The negatives of the expected second derivatives are simple to obtain since
E[εi] = 0 and E[εi2] = σ2(γ′zi)2. We will write them in the form of (14-29). Thus,
                    -E[∂2logL/∂β∂β′]              = (1/σ2)Σi[1/(γ′zi)2]xixi′
                         2            2
                    -E[∂ logL/∂β∂σ ]              = 0
                    -E[∂2logL/∂β∂γ′]              = 0
                    -E[∂2logL/∂(σ2)2]                         = n/(2σ4)
                         2         2
                    -E[∂ logL/∂σ ∂γ′]             = [1/2σ ]Σi{1/(γ′zi)2}2(γ′zi)zi = [1/σ2]Σi{1/(γ′zi)}zi
                                                            2
                         2
                    -E[∂ logL/∂γ∂γ′]              = 2Σi{1/(γ′zi)4}[2(γ′zi)zi][2(γ′zi)zi]′ = 2Σi[1/(γ′zi)2]zizi′.

9. See Exercise 7 of Chapter 10.

10. In the discussion of Harvey’s model in Section 11.7, it is noted that the initial estimator of γ1, the constant
term in the regression of logei2 on a constant and zi is inconsistent by the amount 1.2704. Harvey points out
that if the purpose of this initial regression is only to obtain starting values for the interations, then the
correction is not necessary. Explain why this would be the case.
                                                                                                               ∧
         The constant is just an estimate of σ2 in σ2Ω. Let W equal σ2Ω. Then, the GLS estimator is β =
[X′W-1X]-1[X′W-1y]. The scale factor is immaterial. The estimator will be the same whether W is scaled or
not, since the scale factor will fall out of the result.

11. (This exercise requires appropriate computer software. The computations required can be done with
RATS, EViews, Stata, TSP, LIMDEP, and a variety of other software using only preprogrammed
procedures.) Quarterly data on the consumer price index for 1950.1 to 2000.4 are given in Appendix Table
F5.1. Use these data to fit the model proposed by Engle and Kraft (1983). The model is
                  πt = β0 + β1πt-1 + β2πt-2 + β3πt-3 + β4πt-4 + εt
where πt = 100ln[pt/pt-1] and pt is the price index.
a. Fit the model by ordinary least squares, then use the tests suggested in the text to see if ARCH effects
appear to be present.
b. The authors fit an ARCH(8) model with declining weights,
                                     9−i  2
                   σt2 = α0 + Σi =1       ε t −i
                                8

                                     36 



                                                                                                               46
Fit this model. If the software does not allow constraints on the coefficients, you can still do this with a two
step least squares procedure, using the least squares residuals from the first step. What do you find?

c. Bollerslev (1986) recomputed this model as a GARCH(1,1). Use the GARCH(1,1) form and refit your
model.
         a. We used LIMDEP with the macroeconomics data in table F5.1. The rate of inflation was
computed with all observations, then observations 6 to 204 were used to remove the missing data due to
lags. Least squares results were obtained first. The residuals were then computed and squared. Using
observations 15-204, we then computed a regression of the squared residual on a constant and 8 lagged
values. The chi-squared statistic with 8 degrees of freedom is 28.24. The critical value from the table for
95% significance and 8 degrees of freedom is 15.51, so at this level of significance, the hypothesis of no
GARCH effects is rejected.
crea;pt=100*log(cpi_u/cpi_u[-1])$
crea;pt1=pt[-1];pt2=pt[-2];pt3=pt[-3];pt4=pt[-4]$
samp;6-204$
regr;lhs=pt;rhs=one,pt1,pt2,pt3,pt4;res=et$$
crea;vt=et*et$
crea;vt1=vt[-1];vt2=vt[-2];vt3=vt[-3];vt4=vt[-4];vt5=vt[-5];vt6=vt[-6];vt7=vt[-
7];vt8=vt[-8]$
samp;15-204$
regr;lhs=vt;rhs=one,vt1,vt2,vt3,vt4,vt5,vt6,vt7,vt8$
calc;list;lm=n*rsqrd$
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = PT       Mean=   .9589185961    , S.D.=   .8318268241     |
| Model size: Observations =     199, Parameters =   5, Deg.Fr.=    194 |
| Residuals: Sum of squares= 61.97028507     , Std.Dev.=         .56519 |
| Fit:        R-squared= .547673, Adjusted R-squared =           .53835 |
| Model test: F[ 4,     194] =   58.72,    Prob value =          .00000 |
| Diagnostic: Log-L =   -166.2871, Restricted(b=0) Log-L =    -245.2254 |
|             LogAmemiyaPrCrt.=   -1.116, Akaike Info. Crt.=      1.721 |
| Autocorrel: Durbin-Watson Statistic =   1.80740,   Rho =       .09630 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .1296044455   .67521735E-01    1.919   .0564
 PT1          .2856136998   .69863942E-01    4.088   .0001     .97399582
 PT2          .1237760914   .70647061E-01    1.752   .0813     .98184918
 PT3          .2516837602   .70327318E-01    3.579   .0004     .99074774
 PT4          .1824670634   .69251374E-01    2.635   .0091     .98781131
 LM      = .28240022492847690D+02

For the second step, we need an estimate of α0, which is the unconditional variance if there are no ARCH
effects. We computed this based on the ARCH specification by a regression of et2 – (8/36)et-12 - … -
(1/36)et-82 on just a constant term. This produces a negative estimate of α0, but this is not the variance, so
we retain the result. We note, the problem that this reflects is probably the specific, doubtless unduly
restrictive, ARCH structure assumed.

samp;6-204$
crea;vt=et*et$
crea;ht=vt-8/36*vt[-1]-7/36*vt[-2]-6/36*vt[-3]-5/36*vt[-4]-4/36*vt[-5]-3/36*vt[-
6]-2/36*vt[-7]-1/36*vt[-8]$
samp;15-204$
calc;list;a0=xbr(ht)$
samp;6-204$
crea;qt=a0+8/36*vt[-1]+7/36*vt[-2]+6/36*vt[-3]+5/36*vt[-4]+4/36*vt[-5]+3/36*vt[-
6]+2/36*vt[-7]+1/36*vt[-8]$
samp;15-204$
plot;rhs=qt$
crea;wt=1/qt$
regr;lhs=pt;rhs=one,pt1,pt2,pt3,pt4;wts=wt$
regr;lhs=pt;rhs=one,pt1,pt2,pt3,pt4;model=garch(1,1)$



                                                                                                            47
Once we have an estimate of α0 in hand, we then computed the set of variances according to the ARCH(8)
model, using the lagged squared residuals. Finally, we used these variance estimators to compute a
weighted least squares regression accounting for the heteroscedasticity. This regression is based on
observations 15-204, again because of the lagged values. Finally, using the same sample, a GARCH(1,1)
model is fit by maximum likelihood.

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = WT       |
| Dep. var. = PT       Mean=   .8006997687    , S.D.=   .6327877239     |
| Model size: Observations =     190, Parameters =   5, Deg.Fr.=    185 |
| Residuals: Sum of squares= 38.67492770     , Std.Dev.=         .45722 |
| Fit:        R-squared= .488964, Adjusted R-squared =           .47791 |
| Model test: F[ 4,     185] =   44.25,    Prob value =          .00000 |
| Diagnostic: Log-L =   -147.7324, Restricted(b=0) Log-L =    -211.5074 |
|             LogAmemiyaPrCrt.=   -1.539, Akaike Info. Crt.=      1.608 |
| Autocorrel: Durbin-Watson Statistic =   1.90310,   Rho =       .04845 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .1468553158   .60127085E-01    2.442   .0155
 PT1       .9760051110E-01 .88469908E-01     1.103   .2714     .77755556
 PT2          .3328520370   .86772549E-01    3.836   .0002     .76745308
 PT3          .1428889148   .85420554E-01    1.673   .0961     .76271761
 PT4          .2878686524   .84090832E-01    3.423   .0008     .74173558

The 8 period ARCH model produces quite a substantial change in the estimates. Once again, this probably
results from the restrictive assumption about the lag weights in the ARCH model. The GARCH model
follows.
+---------------------------------------------+
| GARCH MODEL                                 |
| Maximum Likelihood Estimates                |
| Model estimated: Jul 31, 2002 at 01:19:14PM.|
| Dependent variable                   PT     |
| Weighting variable                 None     |
| Number of observations              190     |
| Iterations completed                 22     |
| Log likelihood function       -135.5043     |
| Restricted log likelihood     -147.6465     |
| Chi squared                    24.28447     |
| Degrees of freedom                    2     |
| Prob[ChiSqd > value] =         .5328953E-05 |
| GARCH Model, P = 1, Q = 1                   |
| Wald statistic for GARCH =      521.483     |
+---------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
          Regression parameters
 Constant     .1308478127   .61887183E-01    2.114   .0345
 PT1          .1749239917   .70912277E-01    2.467   .0136     .98810078
 PT2          .2532191617   .73228319E-01    3.458   .0005     .98160455
 PT3          .1552879436   .68274176E-01    2.274   .0229     .97782066
 PT4          .2751467919   .63910272E-01    4.305   .0000     .97277700
          Unconditional Variance
 Alpha(0) .1005125676E-01 .11653271E-01       .863   .3884
          Lagged Variance Terms
 Delta(1)     .8556879884   .89322732E-01    9.580   .0000
          Lagged Squared Disturbance Terms
 Alpha(1)     .1077364862   .60761132E-01    1.773   .0762
          Equilibrium variance, a0/[1-D(1)-A(1)]
 EquilVar     .2748082674       2.0559946     .134   .8937




                                                                                                    48
Chapter 12


Autocorrelation
1. Does first differencing reduce autocorrelation? Consider the models yt = β′xt + εt, where εt = ρεt-1 + ut
and εt = ut - λut-1. Compare the autocorrelation of εt in the original model to that of vt in yt - yt-1 = β′(xt - xt-
1) + vt where vt = εt - εt-1.
          For the first order autoregressive model, the autocorrelation is ρ. Consider the first difference, vt =
εt - εt-1 which has Var[vt] = 2Var[εt] - 2Cov[(εt,εt-1)] = 2σu2[1/(1 - ρ2) - ρ/(1 - ρ2)] = 2σu2/(1 + ρ) and
Cov[vt,vt-1] = 2Cov[εt,εt-1] - Var[εt] - Cov[εt,εt-1] = σu2[1/(1 - ρ2)][2ρ - 1 - ρ2] = σu2[(ρ - 1)/(1 + ρ)].
Therefore, the autocorrelation of the differenced process is Cov[vt,vt-1] / Var[vt] = (ρ - 1) / 2. As the figure
below on the left shows, first differencing reduces the absolute value of the autocorrelation coefficient when ρ
is greater than 1/3. For economic data, this is likely to be fairly common.




For the moving average process, the first order autocorrelation is Cov[(εt,εt-1)]/Var[εt] = -λ/(1 + λ2). To
obtain the autocorrelation of the first difference, write εt - εt-1 = ut - (1 + λ)ut-1 + λut-2 and εt-1 - εt-2 =
ut-1 - (1 + λ)ut-2 + λut-3. The variance of the difference is Var[εt - εt-1] = σu2[(1 + λ)2 + (1 + λ2)]. The
covariance can be found by taking the expected product of terms with equal subscripts. Thus, Cov[εt - εt-1,εt-1
- εt-2] = -σu2(1 + λ)2. The autocorrelation is Cov[εt - εt-1,εt-1 - εt-2]/Var[εt - εt-1] = - (1 + λ)2/[(1 + λ)2 + (1 +
λ2)]. A plot of the relationship between the differenced and undifferenced series is shown in the right panel
above. The horizontal axis plots the autocorrelation of the original series. The values plotted are the absolute
values of the difference between the autocorrelation of the differenced series and the original series. The
results are similar to those for the AR(1) model. For most of the range of the autocorrelation of the original
series, differencing increases autocorrelation. But, for most of the range of values that are economically
meaningful, differencing reduces autocorrelation.

2. Derive the disturbance covariance matrix for the model yt = β′xt + εt, εt = ρεt-1 + ut - λut-1. What
parameter is estimated by the regression of the ordinary least squares residuals on their lagged values?
         Solve the disturbance process in its moving average form. Write the process as εt - ρεt-1 = ut - λut-1
or, using the lag operator, εt(1 - ρL) = ut - λut-1 or εt = ut/(1 - ρL) - λut-1/(1 - ρL). After multiplying these
out, we obtain     εt        = ut + ρut-1 + ρ2ut-2 + ρ3ut-3 + ... - λut-1 - ρλut-2 - ρ2λut-3 - ...
                             = ut + (ρ-λ)ut-1 + ρ(ρ-λ)ut-2 + ρ2(ρ-λ)ut-3 + ...
Therefore,         Var[εt] = σu2(1 + (ρ-λ)2)(1 + ρ2 + ρ4 + ...) = σu2(1 + (ρ-λ)2/(1 - ρ2))
                             = σu2(1 + λ2 - 2ρλ)/(1 - ρ2)
                   Cov[εt,εt-1] = ρVar[εt-1] + Cov[εt-1,ut] - λCov[εt-1,ut-1].
To evaluate this expression, write
                   εt-1 = ut-1 + (ρ-λ)ut-2 + ρ(ρ-λ)ut-3 + ρ2(ρ-λ)ut-4+ ...



                                                                                                                  49
Therefore, the middle term is zero and the third is simply λσu2. Thus,
                   Cov[εt,εt-1] = σu2{[ρ(1 + λ2 - 2ρλ)]/(1 - ρ2) - λ]} = σu2[(ρ - λ)(1 - λρ)/(1 - ρ2)]
For lags greater than 1, Cov[εt,εt-j] = ρCov[εt-1,εt-j] + Cov[εt-j,ut] - λCov[εt-j,ut-1].
Since εt-j involves only us up to its current period, εt-j is uncorrelated with ut and ut-1 if j is greater than 1.
Therefore, after the first lag, the autocovariances behave in the familiar fashion, Cov[εt,εt-j] = ρCov[εt,εt-j+1]
The autocorrelation coefficient of the residuals estimates Cov[εt,εt-1]/Var[εt] = (ρ - λ)(1 - ρλ)/(1 + λ2 - 2ρλ).

3. The following regression is obtained by ordinary least squares using 21 observations: (Estimated
asymptotic standard deviations are shown in parentheses). yt = 1.3(0.3) + .97(0.18)yt-1 + 2.31(1.04)xt, DW
= 1.21. Test for the presence of autocorrelation in the disturbances.
          Since the regression contains a lagged dependent variable, we cannot use the Durbin-Watson statistic
directly. The h statistic in (15-34) would be h = (1 - 1.21/2)[21 / (1 - 21(.182)]2 = 3.201.
The 95% critical value from the standard normal distribution for this one-tailed test would be 1.645.
Therefore, we would reject the hypothesis of no autocorrelation.

4. It is commonly asserted that the Durbin-Watson statistic is only appropriate for testing for first order
autoregressive disturbances. What combination of the coefficients of the model is estimated by the
Durbin-Watson statistic in each of the following cases: AR(1), AR(2), MA(1)? In each case, assume that the
regression model does not contain a lagged dependent variable. Comment on the impact on your results of
relaxing this assumption.
          In each case, plim d = 2 - 2ρ1 where ρ1 = Corr[εt,εt-1]. The first order autocorrelations are as
follows: AR(1): ρ (see (15-9)) and AR(2): θ1/(1 - θ2). For the AR(2), a proof is as follows: First, εt = θ1εt-1
+ θ2εt-2 + ut. Denote Var[εt] as c0 and Cov[εt,εt-1] as c1. Then, it follows immediately that c1 = θ1c0 + θ2c1
since ut is independent of εt-1. Therefore ρ1 = c1/c0 = θ1/(1 - θ2). For the MA(1): -λ / (1 + λ2) (See
(15-43)). To prove this, write εt = ut - λut-1. Then, since the us are independent, the result follows just by
multiplying out ρ1 = Cov[εt,εt-1]/Var[εt] = -λVar[ut-1]/{Var[ut] + λ2Var[ut-1]} = -λ/(1 + λ2).

5. The data used to fit the expectations augmented Phillips curve in Example 12.3 are given in Table F5.1.
Using these data, reestimate the model given in the example. Carry out a formal test for first order
autocorrelation using the LM statistic. Then, reestimate the model using an AR(1) model for the
disturbance process. Since the sample is large, the Prais-Winsten and Cochrane-Orcutt estimators should
give essentially the same answer. Do they? After fitting the model, obtain the transformed residuals and
examine them for first order autocorrelation. Does the AR(1) model appear to have adequately “fixed” the
problem?
--> date;1950.1$
--> peri;1950.1-2000.4$
--> crea;dp=infl-infl[-1]$
--> crea;dy=loggdp-loggdp[-1]$
--> peri;1950.3-2000.4$
--> regr;lhs=dp;rhs=one,unemp$;ar1;res=u$

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = DP       Mean= -.1926996283E-01, S.D.=    2.818214558     |
| Model size: Observations =     202, Parameters =   2, Deg.Fr.=    200 |
| Residuals: Sum of squares= 1592.321197     , Std.Dev.=        2.82163 |
| Fit:        R-squared= .002561, Adjusted R-squared =          -.00243 |
| Model test: F[ 1,     200] =     .51,    Prob value =          .47449 |
| Diagnostic: Log-L =   -495.1583, Restricted(b=0) Log-L =    -495.4173 |
|             LogAmemiyaPrCrt.=    2.084, Akaike Info. Crt.=      4.922 |
| Autocorrel: Durbin-Watson Statistic =   2.82755,   Rho =      -.41378 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .4918922148       .74047944     .664   .5073
 UNEMP    -.9013159906E-01      .12578616    -.717   .4745     5.6712871



                                                                                                               50
--> peri;1951.2-2000.4$
--> regr;lhs=u;rhs=one,u[-1],u[-2]$

+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = U        Mean= -.3890391012E-01, S.D.=    2.799476915     |
| Model size: Observations =     199, Parameters =   3, Deg.Fr.=    196 |
| Residuals: Sum of squares= 1079.052269     , Std.Dev.=        2.34635 |
| Fit:        R-squared= .304618, Adjusted R-squared =           .29752 |
| Model test: F[ 2,     196] =   42.93,    Prob value =          .00000 |
| Diagnostic: Log-L =   -450.5769, Restricted(b=0) Log-L =    -486.7246 |
|             LogAmemiyaPrCrt.=    1.721, Akaike Info. Crt.=      4.559 |
| Autocorrel: Durbin-Watson Statistic =   1.99273,   Rho =       .00363 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant -.5048615289E-01      .16633422    -.304   .7618
 U[-1]       -.5946344724   .65920584E-01   -9.020   .0000 -.10234931E-01
 U[-2]       -.3824653303   .65904378E-01   -5.803   .0000 -.14370453E-01
 (Note: E+nn or E-nn means multiply by 10 to + or -nn power.)

--> calc;list;lm=n*rsqrd$
    LM      = .60618960968412850D+02
+---------------------------------------------+
| AR(1) Model:     e(t) = rho * e(t-1) + u(t) |
| Initial value of rho       =        -.41378 |
| Maximum iterations         =            100 |
| Method = Prais - Winsten                    |
| Iter= 1, SS=    1299.275, Log-L=-474.710175 |
| Final value of Rho    =            -.413779 |
| Iter= 1, SS=    1299.275, Log-L=-474.710175 |
| Durbin-Watson:   e(t) =            2.827557 |
| Std. Deviation: e(t) =             2.799716 |
| Std. Deviation: u(t) =             2.548799 |
| Durbin-Watson:   u(t) =            2.340706 |
| Autocorrelation: u(t) =            -.170353 |
| N[0,1] used for significance levels         |
+---------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .4704274598       .47671946     .987   .3237
 UNEMP    -.8709854633E-01 .80962277E-01    -1.076   .2820     5.6712871
 RHO         -.4137785986   .64213081E-01   -6.444   .0000

Regression results are almost unchanged. Autocorrelation of transformed residuals is -.17, less than -.41 in
original model.




                                                                                                         51
6. Data for fitting an improved Phillips curve model can be obtained from many sources, including the
Bureau of Economic Analysis’s (BEA) own website, Economagic.com, and so on. Obtain the necessary
data and expand the model of example 12.3. Does adding additional explanatory variables to the model
reduce the extreme pattern of the OLS residuals that appears in Figure 12.3?
         We added a dummy variable for the period after the 1973 oil shock. The new variable did not
seem to improve the model much, and the pattern of the residuals was unchanged.

--> crea;newecon=dmy(1974.1,2000.4)$
--> regr;lhs=dp;rhs=one,unemp,newecon;plot$
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = DP       Mean= -.1926996283E-01, S.D.=    2.818214558     |
| Model size: Observations =     202, Parameters =   3, Deg.Fr.=    199 |
| Residuals: Sum of squares= 1586.260338     , Std.Dev.=        2.82332 |
| Fit:        R-squared= .006357, Adjusted R-squared =          -.00363 |
| Model test: F[ 2,     199] =     .64,    Prob value =          .53017 |
| Diagnostic: Log-L =   -494.7731, Restricted(b=0) Log-L =    -495.4173 |
|             LogAmemiyaPrCrt.=    2.091, Akaike Info. Crt.=      4.928 |
| Autocorrel: Durbin-Watson Statistic =   2.83473,   Rho =      -.41737 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .5507626279       .74399306     .740   .4600
 UNEMP    -.9835166981E-01      .12621412    -.779   .4368     5.6712871
 NEWECON     -2.474910396       2.8382661    -.872   .3843 .49504950E-02


                      Residuals.   Bars mark mean res. and +/- 2s(e
                        10



                         5
           Residual




                         0



                        -5



                       -10



                       -15
                         1950      1963         1976           1989           2002

                                           Quarter




                                                                                                        52
Chapter 13


Models for Panel Data
1. The following is a panel of data on investment (y) and profit (x) for n=3 firms over T=10 periods.
                        i=1                     i=2                      i=3
                     y       x               y       x                y       x
         t= 1      13.32   12.85           20.30   22.93             8.85    8.65
         t= 2      26.30   25.69           17.47   17.96            19.60   16.55
         t= 3       2.62    5.48            9.31    9.16             3.87    1.47
         t= 4      14.94   13.79           18.01   18.73            24.19   24.91
         t= 5      15.80   15.41            7.63   11.31             3.99    5.01
         t= 6      12.20   12.59           19.84   21.15             5.73    8.34
         t= 7      14.93   16.64           13.76   16.13            26.68   22.70
         t= 8      29.82   26.45           10.00   11.61            11.49    8.36
         t= 9      20.32   19.64           19.51   19.55            18.49   15.44
         t=10       4.77    5.43           18.32   17.06            20.84   17.87
(a) Pool the data and compute the least squares regression coefficients of the model yit =α+ β′xit + εit.
(b) Estimate the fixed effects model of (13-2), then test the hypothesis that the constant term is the same for
all three firms.
(c) Estimate the random effects model of (13-18), then carry out the Lagrange multiplier test of the
hypothesis that the classical model without the common effect applies.
(d) Carry out Hausman’s specification test for the random versus the fixed model.
           The pooled least squares estimator is
          ∧
          y=       -.747476 +          1.058959x, e′e = 120.6687
                   (.95595)            (.058656)
The fixed effects regression can be computed just by including the three dummy variables since the sample
sizes are quite small. The results are
          ∧
           y = - 1.4684i1 - 2.8362i2 + .12166i3 + 1.102192x         e′e = 79.183.
                                                     (.050719)
The F statistic for testing the hypothesis that the constant terms are all the same is
          F[26,2] = [(120.6687 - 79.183)/2]/[79.183/26] = 6.811.
The critical value from the F table is 19.458, so the hypothesis is not rejected.
          In order to estimate the random effects model, we need some additional parameter estimates. The
group means are                   y       x
                    Group 1 15.502 14.962
                    Group 2 15.415 16.559
                    Group 3 14.373 12.930
In the group means regression using these three observations, we obtain
                     y i. = 10.665 + .29909 x i. with e**′e** = .19747.
There is only one degree of freedom, so this is the candidate for estimation of σε2/T + σu2. In the least squares
dummy variable (fixed effects) regression, we have an estimate of σε2 of 79.183/26 = 3.045. Therefore, our
                    ∧2
estimate of σu2 is σ u = .19747/1 - 3.045/10 = -.6703. Obviously, this won't do. Before abandoning the
random effects model, we consider an alternative consistent estimator of the constant and slope, the pooled
ordinary least squares estimator. Using the group means above, we find
                   Σ i3=1 [ y i. - (-.747476) - 1.058959 x i.]2 = 3.9273.
One ought to proceed with some caution at this point, but it is difficult to place much faith in the group means
regression with but a single degree of freedom, so this is probably a preferable estimator in any event. (The
true model underlying these data -- using a random number generator -- has a slope, β of 1.000 and a true
constant of zero. Of course, this would not be known to the analyst in a real world situation.) Continuing, we



                                                                                                             53
          ∧
now use σ 2u = 3.9273 - 3.045/10 = 3.6227 as the estimator. (The true value of ρ = σu2/(σu2+σε2) is .5.) This
leads to θ = 1 - [3.04551/2/(10(3.6227) + 3.045)1/2] = .721524. Finally, the FGLS estimator computed
                         ∧
according to (16-48) is y = -1.3415(.786) + 1.0987 (.028998)x.
         For the LM test, we return to the pooled ordinary least squares regression. The necessary quantities
are e′e = 120.6687, Σt e1t = -.55314, Σt e2t = -13.72824, Σt e3t = 14.28138. Therefore,
         LM = {[3(10)]/[2(9)]}{[(-.55314)2 + (13.72824)2 + (14.28138)2]/120.687 - 1}2 = 8.4683
The statistic has one degree of freedom. The critical value from the chi-squared distribution is 3.84, so the
hypothesis of no random effect is rejected. Finally, for the Hausman test, we compare the FGLS and least
squares dummy variable estimators. The statistic is χ2 = [(1.0987 - 1.058959)2]/[(.058656)2 - (.05060)2] =
1.794373. This is relatively small and argues (once again) in favor of the random effects model.

2. Suppose that the model of (13-2) is formulated with an overall constant term and n-1 dummy variables
(dropping, say, the last one). Investigate the effect that this has on the set of dummy variable coefficients and
on the least squares estimates of the slopes.
          There is no effect on the coefficients of the other variables. For the dummy variable coefficients,
with the full set of n dummy variables, each coefficient is
          y i * = mean residual for the ith group in the regression of y on the xs omitting the dummy variables.
(We use the partitioned regression results of Chapter 6.) If an overall constant term and n-1 dummy variables
(say the last n-1) are used, instead, the coefficient on the ith dummy variable is simply y i* - y 1* while the
constant term is still y 1* For a full proof of these results, see the solution to Exercise 5 of Chapter 8 earlier in
this book.

3. Use the data in Section 13.9.7 (these are the Grunfeld data) to fit the random and fixed effects models.
There are five firms and 20 years of data for each. Use the F, LM, and/or Hausman statistics to determine
which model, the fixed or random effects model, is preferable for these data.
         The regression model is Iit = β1i + β2Fit + β3Cit + βit. We first fit the model by pooled OLS,
ignoring the specific firm effect.
+-----------------------------------------------------------------------+
| OLS Without Group Dummy Variables                                     |
| Ordinary    least squares regression                                  |
| Dependent variable is I         Mean = 248.95700, S.D. =     267.8654 |
| Model size: Observations =     100, Parameters =   3, Deg.Fr. =    97 |
| Residuals: Sum of squares=    0.157088E+07 Std.Dev. =       127.25831 |
| Fit:        R-squared = 0.77886, Adjusted R-squared =         0.77430 |
| Model test: F[ 2,      97] = 170.81,     Prob value =         0.00000 |
| Diagnostic: Log-L =   -624.9928, Restricted(ß=0) Log-L =    -700.4398 |
| Panel Data Analysis of I          [ONE way]                           |
|           Unconditional ANOVA (No regressors)                         |
| Source      Variation        Deg. Free.     Mean Square               |
| Between      0.487817E+07            4.        0.121954E+07           |
| Residual     0.222527E+07           95.         23423.9               |
| Total        0.710344E+07           99.         71751.9               |
+-----------------------------------------------------------------------+
  Variable Coefficient    Standard Error t-ratio P[*T*$t]     Mean of X
  -----------------------------------------------------------------------
  F          0.10509         0.11378E-01    9.236   0.00000   1922.
  C          0.30537         0.43508E-01    7.019   0.00000   311.1
  Constant   -48.030          21.480       -2.236   0.02764




                                                                                                                 54
The least squares regression with firm specific effects is
+-----------------------------------------------------------------------+
| Least Squares with Group Dummy Variables                              |
| Ordinary    least squares regression    Weighting variable = ONE      |
| Dependent variable is I         Mean = 248.95700, S.D. =     267.8654 |
| Model size: Observations =     100, Parameters =   7, Deg.Fr. =    93 |
| Residuals: Sum of squares=     444288.     Std.Dev. =        69.11797 |
| Fit:        R-squared = 0.93745, Adjusted R-squared =         0.93342 |
| Model test: F[ 6,      93] = 232.32,     Prob value =         0.00000 |
| Diagnostic: Log-L =   -561.8468, Restricted(ß=0) Log-L =    -700.4398 |
+-----------------------------------------------------------------------+
  Variable Coefficient    Standard Error t-ratio P[*T*$t]     Mean of X
  ---------------------------------------------------------------------
  F          0.10598         0.15891E-01    6.669   0.00000   1922.
  C          0.34666         0.24161E-01   14.348   0.00000   311.1
To estimate the variance components for the random effects model, we also computed the group means
regression. The sum of squared residuals from the LSDV estimator is 444,288. The sum of squares from the
group means regression is 22382.1. The estimate of σε2 is 444,288/93 = 4777.29. The estimate of σu2 is
22,382.1/2 - (1/20)4777.29 = 10,952.2. The model is then reestimated by FGLS using these estimates:
                +--------------------------------------------------+
                | Random Effects Model: v(i,t) = e(i,t) + u(i)     |
                | Estimates: Var[e]               = 0.477729E+04 |
                |             Var[u]              = 0.109522E+05 |
                |             Corr[v(i,t),v(i,s)] = 0.696284       |
                | Lagrange Multiplier Test vs. Model (3) = 453.82 |
                | ( 1 df, prob value = 0.000000)                   |
                | Fixed vs. Random Effects (Hausman)     =    3.14 |
                | ( 2 df, prob value = 0.208081)                   |
                +--------------------------------------------------+

  Variable Coefficient    Standard Error z=b/s.e. P[*Z*$z]    Mean of X
  ---------------------------------------------------------------------
  F          0.10489         0.14711E-01    7.130   0.00000   1922.
  C          0.34602         0.24112E-01   14.350   0.00000   311.1
  Constant   -60.291          54.167       -1.113   0.26568
The F and LM statistics are not useful for comparing the fixed and random effects models. The Hausman
statistic can be used. The value appears above. Since the Hausman statistic is small (only 3.14 with two
degrees of freedom), we conclude that the GLS estimator is consistent. The statistic would be large if the two
estimates were significantly different. Since they are not, we conclude that the evidence favors the random
effects model.

4. Derive the log-likelihood function for the model in (13-18) assuming that ,it and ui are normally distributed.
[Hints: Write the log-likelihood function as lnL = Σ in=1 lnLi where lnLi is the log-likelihood function for the T
observations in group i. These T observations are joint normally distributed with covariance matrix given in
(14-20).] The log-likelihood is the sum of the logs of the joint normal densities of the n sets of T observations,
                                      εit + ui = yit - α - β′xit.
This will involve the inverse and determinant of Ω. Use (2-66) to prove that
                                      Ω-1 = (1/σε2){I - [σu2/(σε2 + Tσ u2)]ii′]}
To find the determinant, use the product of the characteristic roots. Note first that
                                      |σI + σii′| = (σε2)|I + (σu2/σε2)ii′|.
The roots are determined by [I + (σu2/σε2)ii′]c = λc or (σu2/σε2)ii′c = (λ-1)c. Any vector whose elements
sum to zero is a solution. There are T-1 such independent vectors, so T-1 characteristic roots are (λ-1)=0 or
λ=1. Premultiply the expression by i′ to obtain the remaining characteristic root. (Remember to add 1 to the
result.) Now, collect terms to obtain the log-likelihood. The ith group of T observations,




                                                                                                              55
                      ε i1 + ui        yi1 − β ' xi1 
                     ε + u             y − β' x 
wi = yi - Xiβ = 
                               i
                                    = 
                        i2                 i2        i2 
                                                          , is normally distributed with mean vector 0 and the covariance
                      "                              
                                                     
                     ε iT + ui         yiT − β ' xiT 
matrix given in (14-20). We have included the constant term in Xi. The joint density of these T observations
                                     -T/2 -1/
is, therefore, Li = f(wi) = (2π) |Ω| 2exp[(-1/2)wi′Ω-1wi]. The log of the joint density is
                    lnLi = -(T/2)ln(2π) - (1/2)ln|Ω| - (1/2)wi′Ω-1wi
and, finally, for the full sample, lnL = ΣilnLi. Consider the log-determinant first. As suggested above, we
write Ω = σε2[I + (σu2/σε2)ii′]. Then, |Ω| = (σε2)T|I +(σu2/σε2)ii′| or ln|Ω| = Tlnσε2 + ln|I + (σu2/σε2)ii′|.
The determinant of a matrix equals the product of its characteristic roots, so the log determinant equals the
sum of the logs of the roots. The characteristic roots of the matrix above remain to be determined. As shown
in the exercise, T-1 of the T roots equal 1. Therefore, the logs of these roots are zero, so the log-determinant
equals the log of the remaining root. It remains only to find the other characteristic root. Premultiply the result
                    (σu2/σε2)ii′c = (λ-1)c by i′ to obtain (σu2/σε2)i′ii′c = (λ-1)i′c.
Now, i′i = T. Divide both sides of the equation by i′c -- remember, we now seek the characteristic root which
corresponds to the characteristic vector whose elements do not sum to zero -- and obtain
                    T(σu2/σε2) = λ - 1 or λ = 1 + T(σu2/σε2).
Therefore,          ln|Ω| = Tlnσε2 + ln[1 + T(σu2/σε2)].
By writing          1 + T(σu2/σε2) = (1/σε2)[ σε2 + Tσu2]
we obtain           ln|Ω| = (T-1)lnσε2 + ln[σε2 + Tσu2]
We now turn to the exponential term. The inverse matrix is given in the exercise, so it remains only to
multiply it out. Thus,          wi′Ω-1wi = wi′wi/σε2 - (wi′i)2/[σε2 + Tσu2]
Since wi = yi - Xiβ             wi′Ω-1wi = (yi - Xiβ)′(yi - Xiβ)/σε2 - [i′(yi - Xiβ)]2/[ σε2 + Tσu2].
The first term is the usual sum of squared deviations. The numerator in the second can be written as
                                [i′(yi - Xiβ)]2 = [T( y i. - β′ x i.)]2.
Collecting terms, lnLi = -(T/2)ln(2π) - [(T-1)/2]lnσε2 - ½(yi - Xiβ)′(yi - Xiβ)/σε2 - ½[T( y i. - β′ x i.)]2/[σε2 +
Tσu2]. Finally, the log-likelihood for the full sample is the sum of these expressions over the i=1 to n groups.

5. Unbalanced design for random effects. Suppose that the random effects model of Section 13.4 is to be
estimated with a panel in which the groups have different numbers of observations. Let Ti be the number of
observations in group i.
(a) Show that the pooled least squares estimator in (13-11) is unbiased and consistent in spite of this
complication.
(b) Show that the estimator in (13-29) based on the pooled least squares estimator of β (or, for that matter, any
consistent estimator of β) is a consistent estimator of σε2.
         The model in (13-11) is a generalized regression model. As we saw in Chapter 10, OLS is
consistent in the GR model. The unequal group sizes here does not have any effect on the result. The residual
                                                  ∧    ∧                       ∧    ∧
using any estimators of α and β is eit = yti - α - β ′xit and ei. = y i. - α - β ′ xi. . Thus the estimator in (13-
                                                                          ∧
29) is [1/(nT-n-K)]ΣiΣt (eit - ei. )2 = [1/(nT-n-K)]ΣiΣt [(yit - y i. ) - β ′(xit - xi. )]2. The probability limit is the
                                                                     ∧                                             ∧
same as the probability limit of the statistic which results when β is replaced with its probability limit. If β is a
consistent estimator of β, then the estimator converges to plim[1/(nT-n-K)]ΣiΣt [(yit - y i. ) - β′(xit - xi. )]2. But,
                                                                                                 ∧
(yit - y i. ) - β′(xit - xi. ) = εit - ε i. So, our estimator has the same limiting behavior as σ 2ε = [1/(nT-n-K)]ΣiΣt
                             ∧
(εit - ε i. )2. Write this as σ 2ε = (1/n)Σ in=1 [Σt (εit - ei. )2]/[(T-1) - K/n]. The expected value of sum of squared
deviations in the brackets is (T-1)σε2. Each term in the outer sum has the same expectation, so the exact
expectation is 1/n times n times this expectation, or




                                                                                                                       56
                                ∧
                            E[ σ 2ε ] = [(T-1) σε2]/[(T-1) - K/n]
This obviously converges to σε2as n→∞. The exact variance of the estimator depends upon what we assume
about the fourth moment of εit. If we assume only that the fourth moment of εit is finite, then the variance of
each term in the inner sum is of the form
                               [T/(T - 1 - K/n)][φ1/T + φ2/T 2 + φ3/T 3] = φ.
If φ is finite, then the variance of the entire expression is φ/n which converges to 0. This completes the proof.
To summarize the argument, we have shown that the limiting behavior of the statistic in (13-27) based on any
consistent estimator of β is the same as that of a statistic which converges in mean square to σε2 if the fourth
moment of ε is finite.

6. What are the probability limits of (1/n)LM, where LM is defined in (13-31) under the null hypotheses that
σu2 = 0 and under the alternative that σu2 ≠ 0?
          To find plim(1/n)LM = plim [T/(2(T-1))]{[Σi(Σteit)2]/[ΣiΣteit2] - 1}2 we can concentrate on the sums
inside the curled brackets. First, Σi(Σteit)2 = nT2{(1/n)Σi[(1/T)Σteit]2} and ΣiΣteit2 = nT(1/(nT))ΣiΣteit2. The
ratio equals [Σi(Σteit)2]/[ΣiΣteit2] = T{(1/n)Σi[(1/T)Σteit]2}/{(1/(nT))ΣiΣteit2}. Using the argument used in
Exercise 8 to establish consistency of the variance estimator, the limiting behavior of this statistic is the same
as that which is computed using the true disturbances since the OLS coefficient estimator is consistent. Using
                                                                                           2
the true disturbances, the numerator may be written (1/n)Σi[(1/T)Σtεit]2 = (1/n)Σi ε i. Since E[ ε i. ] = 0,
              2
plim(1/n)Σi ε i. = Var[ ε i. ] = σε2T + σu2The denominator is simply the usual variance estimator, so
plim(1/(nT))ΣiΣtεit2 = Var[εit] = σε2+ σu2Therefore, inserting these results in the expression for LM, we find
that plim (1/n)LM = [T/(2(T-1))]{[T(σε2T + σu2)]/[σε2+ σu2] - 1}2. Under the null hypothesis that σu2 = 0,
this equals 0. By expanding the inner term then collecting terms, we find that under the alternative hypothesis
that σu2 is not equal to 0, plim (1/n)LM = [T(T-1)/2][ σu2/(σε2+σu2)]2. Within group i, Corr2[εit,εis] = ρ2 =
σu2/(σu2+ σε2) so plim (1/n)LM = [T(T-1)/2](ρ2)2. It is worth noting what is obtained if we do not divide the
LM statistic by n at the outset. Under the null hypothesis, the limiting distribution of LM is chi-squared with
one degree of freedom. This is a random variable with mean 1 and variance 2, so the statistic, itself, does not
converge to a constant; it converges to a random variable. Under the alternative, the LM statistic has mean
and variance of order n (as we see above) and hence, explodes. It is this latter attribute which makes the test a
consistent one. As the sample size increases, the power of the LM test must go to 1.

7. A two way fixed effects model: Suppose the fixed effects model is modified to include a time specific
dummy variable as well as an individual specific variable. Then, yit = αi + γt + β′xit + εit. At every
observation, the individual- and time-specific dummy variables sum to one, so there are some redundant
coefficients. The discussion in Section 13.3.3 shows one way to remove the redundancy. Another useful
way to do this is to include an overall constant and to drop one of the time specific and one of the time-
dummy variables. The model is, thus, yit = δ + (αi - α1) + (γt - γ1) + β′xit + εit. (Note that the respective
time or individual specific variable is zero when t or i equals one.) Ordinary least squares estimates of β can
be obtained by regression of yit - y i. - y .t + y on xit - xi. - x.t + x Then, (αi-α1) and (γt-γ1) are estimated
using the expressions in (13-17) while d = y - b′ x .
         Using the following data, estimate the full set of coefficients for the least squares dummy variable
model:          t=1       t=2    t=3    t=4      t=5      t=6     t=7     t=8      t=9 t=10
                                                      i=1
         y        21.7   10.9       33.5   22.0    17.6 16.1        19.0   18.1     14.9       23.2
         x1       26.4   17.3       23.8   17.6    26.2 21.1        17.5   22.9     22.9       14.9
         x2       5.79   2.60       8.36   5.50    5.26 1.03        3.11   4.87     3.79       7.24
                                                      i=2
         y        21.8   21.0       33.8   18.0    12.2 30.0        21.7   24.9     21.9       23.6
         x1       19.6   22.8       27.8   14.0    11.4 16.0        28.8   16.8     11.8       18.6
         x2       3.36   1.59       6.19   3.75    1.59 9.87        1.31   5.42     6.32       5.35
                                                      i=3
         y        25.2   41.9       31.3   27.8    13.2 27.9        33.3   20.5     16.7       20.7
         x1       13.4   29.7       21.6   25.1    14.1 24.1        10.5   22.1     17.0       20.5
         x2       9.57   9.62       6.61   7.24    1.64 5.99        9.00   1.75     1.74       1.82



                                                                                                              57
                                                        i=4
         y      15.3       25.9    21.9     15.5     16.7 26.1         34.8    22.6     29.0     37.1
         x1     14.2       18.0    29.9     14.1     18.4 20.1         27.6    27.4     28.5     28.6
         x2     4.09       9.56    2.18     5.43     6.33 8.27         9.16    5.24     7.92     9.63

Test the hypotheses that (1) the "period" effects are all zero, (2) the "group" effects are all zero, and (3) both
period and group effects are zero. Use an F test in each case.
          The ordinary least squares regression results are
                             R2 = .92803, e′e = 146.761, 40 observations
                             Variable            Coefficient                Standard Error
                             X1                    .446845                   .07887
                             X2                    1.83915                   .1534
                             Constant              3.60568                  2.555
                             Period 1             -3.57906                  1.723
                             Period 2             -1.49784                  1.716
                             Period 3              2.00677                  1.760
                             Period 4              -3.03206                 1.731
                             Period 5             -5.58937                  1.768
                             Period 6             -1.49474                  1.714
                             Period 7              1.52021                  1.714
                             Period 8             -2.25414                  1.737
                             Period 9             -3.29360                  1.722
                             Group 1              -.339998                  1.135
                             Group 2               4.39271                  1.183
                             Group 3               5.00207                  1.125
                             Estimated covariance matrix for the slopes:
                                        β1                 β2
                             β1         .0062209
                             β2         .00030947          .023523
For testing the hypotheses that the sets of dummy variable coefficients are zero, we will require the sums of
squared residuals from the restrictions. These are
          Regression                             Sum of squares
          All variables included                 146.761
          Period variables omitted                318.503
          Group variables omitted                369.356
          Period and group variables omitted 585.622
The F statistics are therefore,
          (1) F[9,25]        = [(318.503 - 146.761)/9]/[146.761/25]         = 3.251
          (2) F[3,25]        = [(369.356 - 146.761)/3]/[146.761/25]         = 12.639
          (3) F[12,25]       = [(585.622 - 146.761)/12]/[146.761/25]        = 6.23
The critical values for the three distributions are 2.283, 2.992, and 2.165, respectively. All sample statistics
are larger than the table value, so all of the hypotheses are rejected.

8. Two way random effects model: We modify the random effects model by the addition of a time specific
disturbance. Thus, yit = α + β′xit + εit + ui + vt, where E[εit] = E[ui] = E[vt] = 0, E[εitut] = E[εitvs] = E[uivt] =
0, for all i,j,t,s, Var[εit] = σε2Cov[εit,εjs] = 0 for all t,j,s, Var[ui] = σu2Cov[ui,uj] = 0 for all i,j Var[vt] = σv2,
Cov[vt,vs] = 0 for all t,s. Write out the full covariance matrix for a data set with n=2 and T=2.
          The covariance matrix would be
                                      i = 1, t = 1     i = 1, t = 2      i = 2, t = 1       i = 2, t = 2
                                      2      2     2           2                 2
                       i = 1, t = 1 σ ε + σ u + σ v         σu                 σv                  0
                      i = 1, t = 2        σ 2u       σ 2ε + σ 2u + σ 2v         0                 σ 2v
                      i = 2, t = 1        σ 2v               0          σ 2ε + σ 2u + σ 2v        σ 2u
                      i = 2, t = 2         0                σ 2v               σ 2u        σ 2ε + σ 2u + σ 2v




                                                                                                                    58
                    y1   x1       ε1 
9. The model   =  β +   satisfies the groupwise heteroscedastic regression model of Section
                    y 2  x 2     ε 2 
11.7.2. All variables have zero means. The following sample second moment matrix is obtained from a
sample of 20 observations:               y1 y2 x1 x2
                              y1         20 6 4 3
                              y2          6 10 3 6
                              x1          4 3 5 2
                              x2          3 6 2 10
(a) Compute the two separate OLS estimates of β, their sampling variances, the estimates of σ12 and σ22, and
the R2s in the two regressions.
(b) Carry out the Lagrange Multiplier test of the hypothesis that σ12 = σ22.
(c) Compute the two step FGLS estimate of β and an estimate of its sampling variance. Test the hypothesis
that β equals one.
(d) Carry out the Wald test of equal disturbance variances.
(e) Compute the maximum likelihood estimates of β, σ12, and σ22 by iterating the FGLS estimates to
convergence.
(f) Carry out a likelihood ratio test of equal disturbance variances.
(g) Compute the two step FGLS estimate of β assuming that the model in (14-7) applies. [That is, allow for
cross sectional correlation.] Compare your results to those of part (c).
          The two separate regressions are as follows:
                                                   Sample 1                    Sample 2
                    b = x′y/x′x                    4/5 = .8                    6/10 = .6
                    e′e = y′y - bx′y               20 - 4(4/5) = 84/5          10 - 6(6/10) = 64/10
                    R2 = 1 - e′e/y′y               1 - (84/5)/20 = .16         1 - (64/10)/10 = .36
                    s2 = e′e/(n-1)                 (84/5)/19 = .88421          (64/10)/19 = .33684
                    Est.Var[b] = s2/x′x            .88421/5 = .17684           .33684/10 = .033684
          To carry out a Lagrange multiplier test of the hypothesis of equal variances, we require the separate
and common variance estimators based on the restricted slope estimator. This, in turn, is the pooled least
squares estimator. For the combined sample, we obtain
                    b = [x1′y1 + x2′y2]/[x1′x1 + x2′x2] = (4 + 6) / (5 + 10) = 2/3.
Then, the variance estimators are based on this estimate. For the hypothesized common variance,
                    e′e = (y1′y1 + y2′y2) - b(x1′y1 + x2′y2) = (20 + 10) - (2/3)(4 + 6) = 70/3,
so the estimate of the common variance is e′e/40 = (70/3)/40 = .58333. Note that the divisor is 40, not 39,
because we are comptuting maximum likelihood estimators. The individual estimators are
          e1′e1/20 = (y1′y1 - 2b(x1′y1) + b2(x1′x1))/20 = (20 - 2(2/3)4 + (2/3)25)/20 = .84444
and       e2′e2/20 = (y2′y2 - 2b(x2′y2) + b2(x2′x2))/20 = (10 - 2(2/3)6 + (2/3)210)/20 = .32222.
The LM statistic is given in Example 16.3,
          LM = (T/2)[(s12/s2 - 1)2 + (s22/s2 - 1)2] = 10[(.84444/.58333 - 1)2 + (.32222/.58333 - 1)2] = 4.007.
This has one degree of freedom for the single restriction. The critical value from the chi-squared table is 3.84,
so we would reject the hypothesis.
          In order to compute a two step GLS estimate, we can use either the original variance estimates based
on the separate least squares estimates or those obtained above in doing the LM test. Since both pairs are
consistent, both FGLS estimators will have all of the desirable asymptotic properties. For our estimator, we
      ∧                                                     ∧                 ∧
used σ 12 = ej′ej/T from the original regressions. Thus, σ 12 = .84 and σ 22 = .32. The GLS estimator is
∧         ∧               ∧                ∧                ∧
β = [(1/ σ 12 )x1′y1 + (1/ σ 22)x2′y2]/[ (1/ σ 12 )x1′x1 + (1/ σ 22)x2′x2] = [4/.84 + 6/.32]/[5/.84 + 10/.32] = .632.
                                               ∧                ∧
The estimated sampling variance is 1/[ (1/ σ 12 )x1′x1 + (1/ σ 22)x2′x2] = .02688. This implies an asymptotic
standard error of (.02688)2 = .16395. To test the hypothesis that β = 1, we would refer z = (.632 - 1) /
.16395 = -2.245 to a standard normal table. This is reasonably large, and at the usual significance levels,
would lead to rejection of the hypothesis.




                                                                                                                   59
         The Wald test is based on the unrestricted variance estimates. Using b = .632, the variance
                   ∧
estimators are     σ 12 = [y1′y1 - 2b(x1′y1) + b2(x1′x1)]/20 = .847056
          ∧
and      σ 22= [y2′y2 - 2b(x2′y2) + b2(x2′x2)]/20 = .320512
                                       ∧
while the pooled estimator would be σ 2= [y′y - 2b(x′y) + b2(x′x)]/40 = .583784. The statistic is given at the
                                      ∧        ∧       ∧   ∧
end of Example 16.3, W = (T/2)[( σ / σ 12 - 1)2 + ( σ / σ 22 - 1)2]
                          = 10[(.583784/.847056 - 1)2 + (.583784/.320512 - 1)2] = 7.713.
We reach the same conclusion as before.
         To compute the maximum likelihood estimators, we begin our iterations from the two separate
                                                                 ∧                ∧
ordinary least squares estimates of b which produce estimates σ 12 = .84 and σ 22= .32. The iterations are
                                       ∧                   ∧                  ∧
                   Iteration           σ 12                σ 22              β
                   0                  .840000             .320000           .632000
                   1                  .847056             .320512           .631819
                   2                  .847071             .320506           .631818
                   3                  .847071             .320506           converged
Now, to compute the likelihood ratio statistic for a likelihood ratio test of the hypothesis of equal variances,
we refer χ2 = 40ln.58333 - 20ln.847071 - 20ln.320506 to the chi-squared table. (Under the null hypothesis,
the pooled least squares estimator is maximum likelihood.) Thus, χ2 = 4.5164, which is roughly equal to the
LM statistic and leads once again to rejection of the null hypothesis.
          Finally, we allow for cross sectional correlation of the disturbances. Our initial estimate of b is the
pooled least squares estimator, 2/3. The estimates of the two variances are .84444 and .32222 as before while
the cross sectional covariance estimate is
                   e1′e2/20 = [y1′y2 - b(x1′y2 + x2′y1) + b2(x1′x2)]/20 = .14444.
Before proceeding, we note, the estimated squared correlation of the two disturbances is
                   r = .14444 / [(.84444)(.32222)]1/2 = .277,
which is not particularly large. The LM test statistic given in (16-14) is 1.533, which is well under the critical
value of 3.84. Thus, we would not reject the hypothesis of zero cross section correlation. Nonetheless, we
proceed. The estimator is shown in (16-6). The two step FGLS and iterated maximum likelihood estimates
                                           ∧               ∧                  ∧                ∧
appear below.     Iteration              σ 12              σ 22              σ 12                β
                  0                    .84444             .32222            .14444              .5791338
                  1                    .8521955           .3202177          .1597994             .5731058
                  2                    .8528702           .3203616          .1609133             .5727069
                  3                    .8529155           .3203725          .1609873             .5726805
                  4                    .8529185           .3203732          .1609921             .5726788
                  5                    .8529187           .3203732          .1609925             converged
Because the correlation is relatively low, the effect on the previous estimate is relatively minor.

10. Suppose that in the model of Section 15.2.1, Xi is the same for all i. What is the generalized least squares
estimator of β? How would you compute the estimator if it were necessary to estimate σi2?
         If all of the regressor matrices are the same, the estimator in (15-6) reduces to
                   ∧
                   β = (X′X)-1 Σ in=1 {(1/σi2)/[Σ nj =1 (1/σj2)]}X′yi = Σ in=1 wibi
a weighted average of the ordinary least squares estimators, bi = (X′X)-1X′yi with weights
wi = (1/σi2)/[Σ nj =1 (1/σj2)]. If it were necessary to estimate the weights, a simple two step estimator could be
based on individual variance estimators. Either of si2 = ei′ei/T based on separate least squares regressions
(with different estimators of β) or based on residuals computed from a common pooled ordinary least squares
slope estimator could be used.

11. Repeat Exercise for the model of Section 13.9.1.



                                                                                                              60
        The estimator is shown in (15-11). If all of the X matrices are the same, the estimator reduces to a
weighted average of the OLS estimators again. Using (15-11) directly with a common X,
          ∧
         β = [ΣiΣjσijX′X]-1[ΣiΣjσijX′yj] = [1/ΣiΣjσij][ΣiΣjσij[X′X]-1X′yj = [1/Σj(Σiσij)][Σj(Σiσij)bj]
The disturbance variances and covariances can be estimated as suggested in the previous exercise. ~

12. The following table presents a hypothetical panel of data:
                   i=1                      i=2                      i=3
             y             x          y             x          y             x
t= 1       30.27         24.31      38.71         28.35      37.03         21.16
t= 2       35.59         28.47      29.74         27.38      43.82         26.76
t= 3       17.90         23.74      11.29         12.74      37.12         22.21
t= 4       44.90         25.44      26.17         21.08      24.34         19.02
t= 5       37.58         20.80       5.85         14.02      26.15         18.64
t= 6       23.15         10.55      29.01         20.43      26.01         18.97
t= 7       30.53         18.40      30.38         28.13      29.64         21.35
t= 8       39.90         25.40      36.03         21.78      30.25         21.34
t= 9       20.44         13.57      37.90         25.65      25.41         15.86
t=10       36.85         25.60      33.90         11.66      26.04         13.28
(a) Estimate the groupwise heteroscedastic model of Section 11.7.2. Include an estimate of the asymptotic
variance of the slope estimator. Use a two step procedure, basing the FGLS estimator at the second step on
residuals from the pooled least squares regression.
(b) Carry out the Wald, Lagrange multiplier, and likelihood ratio tests of the hypothesis that the variances are
all equal. For the likelihood ratio test, use the FGLS estimates.
(c) Carry out a Lagrange multiplier test of the hypothesis that the disturbances are uncorrelated across
individuals.
          The various least squares estimators of the parameters are
                              Sample 1            Sample 2          Sample 3       Pooled
                    a         11.6644             5.42213           1.41116        8.06392
                              (9.658)             (10.46)           (7.328)
                    b         .926881             1.06410           1.46885        1.05413
                              (.4328)             (.4756)           (.3590)
                    e′e       452.206             673.409           125.281
                              (464.288)           (732.560)         (171.240)      (1368.088)
 (Values of e′e in parentheses above are based on the pooled slope estimator.) The FGLS estimator and its
estimated asymptotic covariance matrix are
                          7.17889                          22.8049 − 10629
                                                                           .    
                    b =            , Est.Asy.Var[b] =                        
                          113792
                            .                               − 10629
                                                                 .      0.05197 
Note that the FGLS estimator of the slope is closer to the 1.46885 of sample 3 (the highest of the three OLS
estimates). This is to be expected since the third group has the smallest residual variance. The LM test
statistic is based on the pooled regression,
                     LM = (10/2){[(464.288/10)/(1368.088/30) - 1]2 + ...} = 3.7901
To compute the Wald statistic, we require the unrestricted regression. The parameter estimates are given
above. The sums of squares are 465.708, 785.399, and 145.055 for i = 1, 2, and 3, respectively. For the
common estimate of σ2, we use the total sum of squared GLS residuals, 1396.162. Then,
                     W = (10/2){[(1396.162/30)/(465.708/10) - 1]2 + ...} = 25.21.
The Wald statistic is far larger than the LM statistic. Since there are two restrictions, at significance levels of
95% or 99% with critical values of 5.99 or 9.21, the two tests lead to different conclusions. The likelihood
ratio statistic based on the FGLS estimates is χ2 = 30ln(1396.162/30) - 10ln(465.708/10) ... = 6.42
which is between the previous two and between the 95% and 99% critical values.
           The correlation matrix for the residuals from the pooled OLS regression is
                                       1.000 -.0704 -.7619
                     R =               -.0704 1.000 -.0825
                                       -.7619 -.0825 1.000




                                                                                                               61
so the LM statistic is LM = 10[(-.0704)2 + (-.7619)2 + (-.0825)2] = 5.9225. The 95% critical value from
the chi-squared distribution with 3 degrees of freedom is 7.82, so we would not reject the hypothesis of
uncorrelated disturbances.




                                                                                                     62
Chapter 14


Systems of Regression Equations
1. A sample of 100 observations produces the following sample data:
                  y 1 = 1, y 2 = 2, y′1y1 = 150      y′2y2 = 550,                y′1y2 = 260
The underlying bivariate regression model is y1 = µ + ε1, y2 = µ + ε2.
(a) Compute the ordinary least squares estimate of µ and estimate the sampling variance of this estimator.
(b) Compute the FGLS estimate of µ and the sampling variance of your estimator.
                                      y1   i    ε1 
        The model can be written as   =  µ +   . Therefore, the OLS estimator is
                                       y
                                      2   i     ε 2 
                  m = (i′i + i′i)-1(i′y1 + i′y2) = (n y 1 + n y 2 ) / (n + n) = ( y 1 + y 2 )/2 = 1.5.
The sampling variance would be Var[m] = (1/2)2{Var[ y 1 ] + Var[ y 2 ] + 2Cov[( y 1 1, y 2 )]}.
We would estimate the parts with      Est.Var[ y 1 ]       = s11/n = ((150 - 100(1)2)/99)/100 = .0051
                                      Est.Var[ y 2 ]       = s22/n = ((550 - 100(2)2)/99)/100 = .0152
                                     Est.Cov[ y 1 , y 2 ] = s12/n = ((260 - 100(1)(2))/99)/100 = .0061
Combining terms, Est.Var[m] = .0079.
       The GLS estimator would be
       [(σ11 + σ12)i′y1 + (σ22 + σ12)i′y2]/[(σ11 + σ12)i′i + (σ22 + σ12)i′i] = w y 1 + (1-w) y 2
                                                              σ11 σ12  -1               1         σ 22 − σ12 
where w = (σ11 + σ12) / (σ11 + σ22 + 2σ12). Denoting Σ =                 ,Σ =                                .
                                                             σ12 σ 22            σ 11σ 22 − σ 12 − σ12 σ11 
                                                                                                2

The weight simplifies a bit as the determinant appears in both the denominator and the numerator. Thus,
w = (σ22 - σ12) / (σ11 + σ22 - 2σ12). For our sample data, the two step estimator would be based on the
variances computed above and s11 = .5051, s22 = 1.5152, s12 = .6061. Then, w = 1.1250. The FGLS
estimate is 1.125(1) + (1 - 1.125)(2) = .875. The sampling variance of this estimator is
w2Var[ y 1 ] + (1 - w)2Var[ y 2 ] + 2w(1 - w)Cov[ y 1 , y 2 ] = .0050 as compared to .0079 for the OLS
estimator.
                                                                    y1 = β1 + ε1
2. Consider estimation of the following two equation model                        . A sample of 50 observations
                                                                  y2 = xβ 2 + ε 2
produces the following moment matrix:
                    1        y1        y2      x
          1        50
          y1       150       500
          y2       50         40        90
          x        100        60        50     100
(a) Write out the explicit formula for the GLS estimator of [β1,β2]. What is the asymptotic covariance matrix
of the estimator?
(b) Derive the OLS estimator and its sampling variance in this model.
(c) Obtain the OLS estimates of β1 and β2 and estimate the sampling covariance matrix of the two estimators.
Use n instead of (n-1) as the divisor to compute the estimates of the disturbance variances.
(d) Compute the FGLS estimates of β1 and β2 and the estimated sampling covariance matrix.
(e) Test the hypothesis that β2 = 1.




                                                                                                              63
                            y1           i 0   β1   ε 1  2  σ11I σ12 I 
          The model is y =   = Xβ + ε =         + , σΩ =               .
                           y2           0 x   β 2   ε 2    σ12 I σ 22 I

The generalized least squares estimator is
                                                                    −1
          ∧
                     −1   −1      σ 11i ' i σ12 i' x   σ 11i ' y1 + σ12 i ' y 2 
                                    −1
          β = [ X' Ω X] X' Ω y =  12         22        12            22
                                                                                   
                                 σ i' x σ x' x  σ x' y1 + σ x' y 2 
                                                                      −1
                                             σ11      σ12 x     σ11 y 1 + σ12 y 2  
                                        = n 12         22
                                                                 n 12          22
                                                                                        
                                             σ x σ sxx     σ sx1 + σ sx 2  
where               sxx = x′x/n, sx1 = x′y1/n, sx2 = x′y2/n
and                 σij = the ijth element of the 2×2 Σ-1.
To obtain the explicit form, note, first, that all terms σij are of the form σji/(σ11σ22 - σ212) But, the denominator
in these ratios will be cancelled as it appears in both the inverse matrix and in the vector. Therefore, in terms
of the original parameters, (after cancelling n), we obtain
                           −1
∧    σ       − σ12 x   σ 22 y 1 − σ 12 y 2                1            σ11sxx            σ12 x  σ 22 y 1 − σ12 y 2 
β =  22                12                   =                        2                                             .
     − σ12 x σ11sxx  − σ sx1 + σ11sx 2      σ 11σ 22 sxx − (σ12 x )  σ12 x             σ 22  − σ12 sx1 + σ11sx 2 
                                ∧
The two elements are            β1 = [σ11sxx(σ22 y 1 - σ12 y 2 ) - σ12 x (σ12sx1 -σ11sx2)]/[σ11σ22sxx - (σ12 x )2]
                                ∧
                                β 2 = [σ12 x (σ22 y 1 - σ12 y 2 ) - σ22(σ12sx1 - σ11sx2)]/[σ11σ22sxx - (σ12 x )2]
The asymptotic covariance matrix is
                                         −1                                             −1
               σ11   σ12 x                         n        σ 22    − σ12 x 
[X′Ω-1X]-1 = n 12     22
                                            =             2
                                                                                
               σ x σ sxx                  σ11σ 22 − σ12  − σ12 x σ11sxx  
                                       y1 
The OLS estimator is b = (X′X)-1X′y =              . The sampling variance is
                                       x' y / x' x
                                              −1                              −1
                           n     0   σ11n           σ12 nx  n      0 
(X′X)-1X′ΩX(X′X)-1 =                                                    . The ns are carried outside the product
                            0 nsxx  σ12 nx σ 22 nsxx  0 nsxx 
                                                  σ11 / n          σ 12 x / ( nsxx ) 
and reduce to (1/n). This leaves Var[b] =                                         2
                                                                                        .
                                                 σ 12 x / ( nsxx ) σ 22 / ( nsxx ) 
   Using the results above, the OLS coefficients are b1 = y 1 = 150/50 = 3 and b2 = x′y2/x′x = 50/100 = 1/2.
The estimators of the disturbance (co-)variances are
                              s11 = Σi (yi1 - y 1 )2/n = (500 - 50(3)2)/50 = 1
                            s22 = Σi (yi2 - b2xi)2/n = (90 - (1/2)50)/50 = 1.3
                            s12 = Σi (yi1 - y 1 )(yi2 - b2xi)2/n = [y1′y2 - n y 1 y 2 - b2x′y1 + nb2 y 1 x ]/n
                                = (40 - 50(3)(1) - (1/2)60 + 50(1/2)(3)(2)/50 = .2
Therefore, we estimate the asymptotic covariance matrix of the OLS estimates as
                             1 / 50       .2( 2)[50( 90)]  .02             .0000888
        Est.Var[b] =                                          =                          .
                        .2( 2)[50 / 90]       13. / 90  .0000888 .01444 
                                                            
        To compute the FGLS estimates, we use our results from part a. The necessary statistics for the
computation are s11 = 1, s22 = 1.3,     s11 = .2, sxx = 100/50 = 2, x = 100/50 = 2,
                 y 1 = 150/50 = 3,       y 2 = 50/50 = 1
                sx1 = 60/50 = 1.2,      sx2 = 50/50 = 1
                     ∧
Then,               β1 = {1(2)[1.3(3) - .2(1)] - .2(2)[.2(1.2) - 1(1)]}/{1(1.3) - [.2(2)]2} = 3.157




                                                                                                                         64
                     ∧
                     β 2 = {2(2)[1.3(3) - .2(1)] - 1.3[.2(1.2) - 1(1)]}/{1(1.3) - [.2(2)]2} = 1.011
The estimate of the asymptotic covariance matrix is
                                                      1( 2) .2( 2)  .020656 .004131
         (1/50)[1(1.3) - (.2)2]/{1(1.3)2 - [.2(2)]2}                =                  .                          Notice that the
                                                     .2( 2) 13.  .004131 .007945
estimated variance of the FGLS estimator of the parameter of the first equation is larger. The result for the
true GLS estimator based on known values of the disturbance variances and covariance does not guarantee
that the estimated variances will be smaller in a finite sample. However, the estimated variance of the second
parameter is considerably smaller than that for the OLS estimate.
          Finally, to test the hypothesis that β2 = 1 we use the z-statistic (asymptotically distributed as standard
normal), z = (1.011 - 1) / (.007945)2 = .123. The hypothesis cannot be rejected.

                 y1 = β1 x1 + ε1
3. The model                       satisfies all of the assumptions of the classical multivariate regression model.
                 y2 = β 2 x2 + ε 2
All variables have zero means. The following sample second moment matrix is obtained from a sample of 20
observations:                y1         y2        x1        x2
                   y1        20          6        4          3
                   y2         6         10        3          6
                   x1         4          3        5          2
                   x2         3          6        2         10
 (Note: These are the data from Exercise 1 in Chapter 16.)
(a) Compute the FGLS estimates of β1 and β2.
(b) Test the hypothesis that β1 = β2.
(c) Compute the maximum likelihood estimates of the model parameters.
(d) Use the likelihood ratio test to test the hypothesis in part (b).
         The ordinary least squares estimates of the parameters are
                   b1 = x1′y1/x1′x1 = 4/5 = .8 and b2 = x2′y2/x2′x2 = 6/10 = .6
Then, the variances and covariance of the disturbances are
         s11 = (y1′y1 - b1x1′y1)/n = (20 - .8(4))/20 = .84
         s22 = (y2′y2 - b2x2′y2)/n = (10 - .6(6))/20 = .32
         s12 = (y1′y2 - b2x2′y1 - b1x1′y2 + b1b2x1′x2 )/n = (6 - .6(3) - .8(3) + .8(.6)(2))/20 = .246
                                                      −1
                       .84 .246                             s11   12 
We will require S-1 =                                    =  12          . Then, the FGLS estimator is
                      .246 .32                              s    s11 
 ∧   11                                   −1
 β1  = s x1 ' x1       s12 x1 ' x 2             s11x1 ' y1 + s12 x1 ' y 2 
 ∧   s12 x ' x                                12                          . Inserting the values given in the problem produces
 β2        1 2        s 22 x 2 ' x 2                          22
                                                   s x 2 ' y1 + s x 2 ' y 2 
                          ∧                           ∧
the FGLS estimates, β1 = .505335, β 2 = .541741 with estimated asymptotic covariance matrix equal to the
                                          ∧   .132565 .0077645
inverse matrix shown above, Est.Var β  =                       . To test the hypothesis, we use the t
                                           .0077645 .0252505
statistic, t = (.505335 - .541741)/[.132565 + .0252505 - 2(.0077645)]2 = -.0965 which is quite small. We
would not reject the hypothesis.
            To compute the maximum likelihood estimates, we would begin with the OLS estimates of σ11, σ22,
and σ12. Then, we iterate between the following calculations
            (1) Compute the 2×2 matrix, S-1
                                                    s11x ' x       s12 x1 ' x 2 
         (2) Compute the 2×2 matrix [X′(S-1⊗I)X] =  12 1 1          22          
                                                    s x1 ' x 2 s x 2 ' x 2 
                                                     s11x ' y + s12 x1 ' y 2 
                                     [X′(S-1⊗I)y] =  12 1 1          22          
                                                     s x 2 ' y1 + s x 2 ' y 2 



                                                                                                                                 65
                                                 ∧
       (3) Compute the coefficient vector β = [X′(S-1⊗I)X]-1[X′(S-1⊗I)y]
Compare this estimate to the previous one. If they are similar enough, exit the iterations.
                                                    ∧        ∧           ∧ ∧
         (4) Recompute S using sij = yi′yj - βi xi′yj - β j xj′yi + βi β j xi′xj, i,j = 1,2.
        (5) Go back to step (1) and continue.
                 Our iterations produce the two slope estimates
                          1: .505335 .541741
                          2: .601889 .564998
                          3: .614884 .566875
                          4: .616559 .567186
                          5: .616775 .567227
                          6: .616803 .567232
                          7: .616807 .567232 converged.
At convergence, we find the estimate of the asymptotic covariance matrix of the estimates as
                   .155355 .00576887                   .8483899 .1573814 
[XN(S-1⊗I)X]-1 =                             and S =                         .
                  .00576887 .029348                    .1573814 .3205369
         To use the likelihood ratio method to test the hypothesis, we will require the restricted maximum
likelihood estimate. Under the hypothesis,the model is the one in Section 15.2.2. The restricted estimate is
given in (15-12) and the equations which follow. To obtain them, we make a small modification in our
algorithm above. We replace step (3) with
              ∧
         (3') β = [s11x1′y1 + s22x2′y2 + s12(x1′y2 + x2′y1)]/[s11x1′x1 + s22x2′x2 + 2s12x1′x2].
                                                                   ∧       ∧
Step 4 is then computed using this common estimate for both β1 and β 2 . The iterations produce
                                       1: .5372671
                                       2: .5703837
                                       3: .5725274
                                       4: .5726687
                                       5: .5726780
                                       6: .5726786 converged.
                                       .8529188 .1609926 
At this estimate, the estimate of Σ is                   . The likelihood ratio statistic is given in (15-56).
                                       .1609926 .3203732
Using our unconstrained and constrained estimates, we find |Wu| = .2471714 and |Wr| = .2473338. The
statistic is λ = 20(ln.2473338 - ln.2471714) = .0131. This is far below the critical value of 3.84, so once
again, we do not reject the hypothesis.

                              y1 = X1β 1 + ε 1
4. Prove that in the model                       , generalized least squares is equivalent to equation by equation
                              y 2 = X 2β 2 + ε 2
ordinary least squares if X1 = X2. Does your result hold if it is also known that β1 = β2?
         The GLS estimator is
                                               −1
                   ∧    σ11X' X σ 12 X' X   σ11X' y1 + σ12 X' y 2 
                   β =  12          22      12          22        
                       σ X' X σ X' X σ X' y1 + σ X' y 2 
The matrix to be inverted equals [Σ-1 ⊗X′X]-1. But, [Σ-1⊗X′X]-1 = Σ⊗(X′X)-1. (See (2-76).) Therefore,
                                                        −1
                   ∧    σ (X'X) -1      σ12 (X'X) -1   σ11X'y1 + σ12 X'y 2 
                   β =  11        -1                                            
                       σ12 (X'X)       σ 22 (X'X) -1  σ12 X'y1 + σ 22 X'y 2 
We now make the replacements X′y1 = (X′X)b1 and X′y2 = (X′X)b2. After multiplying out the product,
we find that
∧     σ σ 11b + σ11σ12b 2 + σ 12 σ12b1 + σ12 σ 22b 2   (σ11σ 11 + σ12 σ12 )b1 + ( σ11σ12 + σ12 σ 22 )b 2 
β =  11 11 1            12           12          22     =       11         12          12        22      
     σ 12 σ b1 + σ 12 σ b 2 + σ 22 σ b1 + σ 22 σ b 2  ( σ12 σ + σ 22 σ )b1 + ( σ12 σ + σ 22 σ )b 2 



                                                                                                              66
                                                                                                   ∧    b1 
The four scalar terms in the matrix product are the corresponding elements of ΣΣ-1 = I. Therefore, β =   .
                                                                                                        b2 
                                               y1      β1 x1 + ε1
5. Consider the two equation system               =                           . Assume the disturbance variances and
                                               y2      β 2 x 2 + β 3 x3 + ε 2
covariance are known. Now, suppose that the analyst of this model applies GLS, but erroneously omits x3
from the second equation. What effect does this specification error have on the consistency of the estimator of
β1?
          The algebraic result is a little tedious, but straightforward. The GLS estimator which is computed is
    11
    ∧                             −1
  β1  = σ x1 ' x1 σ x1 ' x 2   σ x1 ' y1 + σ x1 ' y 2  .
                       12                11          12
                                   
  ∧  σ12 x ' x σ 22 x ' x  σ12 x ' y + σ 22 x ' y 
  β2       2 1          2 2            2 1          2 2

It helps at this point to make some simplifying substitutions. The elements in the inverse matrix, σij, are all
equal to elements of the original matrix divided by the determinant. But, the determinant appears in the
leading matrix, which is inverted and in the trailing vector (which is not). Therefore, the determinant will
                                        ∧                                  −1
                                        β1   σ 22 x1 ' x1 − σ12 x1 ' x 2   σ 22 x1 ' y1 − σ12 x1 ' y 2 
cancel out. Making the substitutions, ∧ =                                                                       . Now,
                                          − σ12 x 2 ' x1 σ11x 2 ' x 2  − σ12 x 2 ' y1 + σ 22 x 2 ' y 2 
                                        β2 
we are concerned with probability limits. We divide every element of the matrix to be inverted by n, then
because of the inversion, divide the vector on the right by n as well. Suppose, for simplicity, that
                                              ∧                            −1
                                              β        σ 22 q11 − σ12 q12          σ 22 x1 ' y1 / n − σ12 x1 ' y 2 / n 
limn→∞xi′xj/n = qij, i,j = 1,2,3. Then, plim  ∧1  =                          plim
                                               − σ12 q12 σ11q22                                                      
                                                                                    − σ12 x 2 ' y1 / n + σ11x 2 ' y 2 / n
                                             β 2
Then, we will use plim (1/n)x1′y1 = β1q11 + plim (1/n)x1Nε1 = β1q11
                    plim (1/n)x1′y2 = β2q12 + β3q13
                    plim (1/n)x2′y1 = β1q12
                    plim (1/n)x2′y2 = β2q22 + β3q23.
Therefore, after multiplying out all the terms,
      ∧                            −1
      β        σ 22 q11 − σ12 q12   β1σ 22 q11 − β 2 σ12 q12 − β 3σ12 q13 
plim  ∧1  =                                                                 .
        − σ12 q12 σ11q22  − β1σ12 q12 + β 2 σ11q22 + β 3σ11q23 
     β  2



                                      1               σ11q22     σ 12 q12 
The inverse matrix is                                2 σ
                                                                              , so with ∆ = (σ11F22q11q22 - (F12q12)2)
                        σ 11σ 22 q11q22 − ( σ12 q12 )  12 q12    σ 22 q22 
      ∧  σ q                           −1
                             σ12 q12    β1σ 22 q11 − β 2 σ12 q12 − β 3σ12 q13 
       β       1  11 22
plim  ∧1  =                                                                    .   Taking the first coefficient
             ∆  σ12 q12   σ 22 q11    − β1σ12 q12 + β 2 σ11q22 + β 3σ11q23 
      β2  
separately and collecting terms,
     ∧
plim β1 = β1[σ11σ22q11q22-(σ12q12)2]/∆ + β2[σ11q22σ12q12 + σ12q12σ11q22]/∆ + β3[σ11q22σ12q13 + σ12q12σ11q23]/∆
The first term in brackets equals ∆ while the second equals 0. That leaves
      ∧
plim β1 = β1 - β3[σ11σ12(q22q13 - q12q23)]/∆ which is not equal to β1. There are two special cases worthy of
note, though. The right hand side does equal β1 if either (1) σ12 = 0; the regressions are actually unrelated,
or (2) q12 = q13 = 0; the regressors in the two equations are uncorrelated. The second of these is similar to
our finding for omitted variables in the classical regression model.




                                                                                                                         67
                          y1 = α1 + βx + ε 1
6. Consider the system                         .The disturbances are freely correlated. Prove that GLS applied to
                          y2 = α 2 +     ε2
the system leads to the OLS estimates of α1 and α2 but to a mixture of the least squares slopes in the
regressions of y1 and y2 on x as the estimator of β. What is the mixture? To simplify the algebra, assume
(with no loss of generality) that x = 0.
                                                α1 
                         y1   i x 0     ε 1 
         The model is   = 0                   β +         . The GLS estimator of the full coefficient vector, θ,
                        y2   0         i   ε 2 
                                               α2
                                                 −1
        11  n nx                   n             11  ny                   
                                 σ12                           12  ny 
    ∧  σ                                           σ  1  + σ  2            
is θ =   nx x' x                   nx             x' y1       x' y 2     . Let qxx equal x′x/n, qx1 = x′y1/n and, qx2
             (
        σ12 n nx
                           )      σ 22 n 
                                           
                                                       σ12 ny + σ 22 ny
                                                               1        2
                                                                                   
                                                                                   
= x′y2/n. The ns in the inverse and in the vector cancel. Also, as suggested, we assume that x = 0. As in the
previous exercise, we replace elements of the inverse with elements from the original matrix and cancel the
determinant which multiplies the matrix (after inversion) and divides the vector.                      Thus,
                                         −1
      σ11        0            − σ12          σ 22 y1 − σ12 y 2 
∧                                                                  
θ =  0       σ 22 q xx         0           σ11q x1 − σ12 q x 2 . The inverse of the matrix is straightforward. Proceeding
     − σ12       0            σ11         − σ y + σ y 
                                               12 1        11 2 
                                                                                                               −1
                                                   σ11σ 22 q xx        0                    σ12 σ 22 q xx          σ 22 y1 − σ12 y 2 
                        ∧            1                                      2                                                          
directly, we obtain θ =                                  0        σ11σ 22 − σ12                   0                  σ11q x1 − σ12 q x 2 .
                                              2
                        σ 22 q xx (σ11σ 22 − σ12 )                                                        
                                                                                                                    − σ y + σ y 
                                                  σ12 σ 22 q xx       0                     σ 22 q xx            12 1        11 2 

It remains only to multiply the matrices and collect terms. The result is
                       ∧            ∧                 ∧
                       α 1 = y 1 , α 2 = y 2 , β = [(qx1/qxx) - (σ12σ22)(qx2/qxx)] = b1 - γb2.
7. For the model y1 = α1 + βx + ε1
                            y2 = α2         + ε2
                            y3 = α3         + ε3
assume that yi2 + yi3 = 1 at every observation. Prove that the sample covariance matrix of the least squares
residuals from the three equations will be singular, thereby precluding computation of the FGLS estimator.
How could you proceed in this case?
         Once again, nothing is lost by assuming that x = 0. Now, the OLS estimators are
                  a1 = y 1 , a2 = y 2 , a3 = y 3 , b = x′y1/x′x.
The vector of residuals is ei1 = yi1 - y 1 - bxi
                                   ei2 = yi2 - y 2
                                   ei3 = yi3 - y 3
Now, if yi2 + yi3 = 1 at every observation, then (1/n)Σi(yi2 + yi3) = y 2 + y 3 = 1 as well. Therefore, by just
adding the two equations, we see that ei2 + ei3 = 0 for every observation. Let ei be the 3×1 vector of
residuals. Then, ei′c = 0, where c = [0,1,1]′. The sample covariance matrix of the residuals is
          S = [(1/n)Σi eiei′]. Then, Sc = [(1/n)Σi eiei′]c = [(1/n)Σi eiei′c] = [(1/n)Σi ei×0] = 0, which
means, by definition, that S is singular.
          We can proceed simply by dropping the third equation. The adding up condition implies that α3 = 1
- α2. So, we can treat the first two equations as a seemingly unrelated regression model and estimate a3 using
the estimate of α2.




                                                                                                                                         68
8. Continuing the analysis of Section 14.3.2, we find that a translog cost function for one output and three
factor inputs which does not impose constant returns to scale is
          lnC = α + β1lnp1         + β2lnp2 + β3lnp3 + δ11(ln2p1)/2
                    + δ12lnp1lnp2 + δ13lnp1lnp3 + δ22(ln2p2)/2 + δ23lnp2lnp3 + δ33(ln2p3)/2 + γy1lnYlnp1 +
γy2lnYlnp2                    + γy3lnYlnp3 + βylnY + βyy(ln2Y)/2 + εc
The factor share equations are
          S1 = β1 + δ11lnp1 + δ12lnp2 + δ13lnp3 + γy1lnY + ε1
          S2 = β2 + δ12lnp1 + δ22lnp2 + δ23lnp3 + γy2lnY + ε2
          S3 = β3 + δ13lnp1 + δ23lnp2 + δ33lnp3 + γy3lnY + ε3.
 [See Christensen and Greene (1976) for analysis of this model.]
(a) The three factor shares must add identically to 1. What restrictions does this place on the model
parameters?
(b) Show that the adding up condition in (14-39) can be imposed directly on the model by specifying the
translog model in (C/p3), (p1/p3), and (p2/p3) and dropping the third share equation. (See Example17.10.)
Notice that this reduces the number of free parameters in the model to 10.
(c) Continuing part (b), the model as specified, with the symmetry and equality restrictions has 15 parameters.
By imposing the constraints, you reduce this to 10 in the estimating equations? How would you obtain
estimates of the parameters not estimated directly?
           The remaining parts of this exercise will require specialized software. The TSP, LIMDEP, Shazam,
Gauss, and E-Views programs are five that could be used. All estimation is to be done using the data in
Section 14.3.1.
(d) Estimate each of the three equations you obtained in part (b) by ordinary least squares. Do the
estimates appear to satisfy the cross equation equality and symmetry equations implied by the theory?
(e) Using the data in Section 14.3.1, estimate the full system of three equations (cost and the two
independent shares) imposing the symmetry and cross equation equality constraints.
(f) Using your parameter estimates, compute the estimates of the elasticities in (15-7) at the means of the
variables.
(g) Use a likelihood ratio to test the joint hypothesis that γyi = 1, i=1,2,3. [Hint: just drop the relevant
variables from the model.]
          By adding the share equations vertically, we find the restrictions
                    β1 + β2 + β3 = 1
                    δ11 + δ12 + δ13 = 0
                    δ12 + δ22 + δ23 = 0
                    δ13 + δ23 + δ33 = 0
                    γy1 + γy2 + γy3 = 0.
Note that the adding up condition also implies ε1 + ε2 + ε3 = 0.
We will eliminate the third share equation. The restrictions imply
                    β3 = 1 - β1 - β2
                    δ13 = - δ11 - δ12
                    δ23 = - δ12 - δ22
                    δ33 = - δ13 - δ23 = δ11 + δ22 + 2δ12
                    γy3 = - γy1 - γy2.
By inserting these in the three share equations, we find
          S1        = β1 + δ11lnp1 + δ12lnp2 - δ11lnp3 - δ12lnp3 + γy1lnY + ε1
                    = β1 + δ11ln(p1/p3) + δ12ln(p2/p3) + γy1lnY + ε1
          S2        = β2 + δ12lnp1 + δ22lnp2 - δ12lnp3 - δ22lnp3 + γy2lnY + ε2
                    = β2 + δ12ln(p1/p3) + δ22ln(p2/p3) + γy2lnY + ε2
          S3        = 1 - β1 - β2 - δ11lnp1 - δ12lnp1 - δ12lnp2 - δ22lnp2 + δ11lnp3 + δ12lnp3 + δ12lnp3
                                  + δ22lnp3 - γy1lnp3 - γy2lnp3 - ε1 - ε2
                    = 1 - S1 - S2




                                                                                                           69
For the cost function, making the substitutions for β3, δ13, δ23, δ33, and γy3 produces
          lnC       = α + β1(lnp1 - lnp3) + β2(lnp2 - lnp3)
                             + δ11((ln2p1)/2 - lnp1lnp3 + (ln2p3)/2)
                             + δ22((ln2p2)/2 - lnp2lnp3 + (ln2p3)/2) + δ12(lnp1lnp2 - lnp1lnp3 - lnp2lnp3 + (ln2p3))
                             + γy1lnY(lnp1 - lnp3) + γy2lnY(lnp2 - lnp3) + βylnY + βyy(ln2Y)/2 + εc
                    = α + β1ln(p1/p3) + β2ln(p2/p3)
                             + δ11(ln2(p1/p3))/2 + δ22(ln2(p2/p3))/2 + δ12ln(p1/p3)ln(p2/p3)
                             + γy1lnYln(p1/p3) + γy2lnYln(p2/p3) + βylnY + βyy(ln2Y)/2 + εc
          The system of three equations (cost and two shares) can be estimated as discussed in the text.
Invariance is achieved by using a maximum likelihood estimator. The five parameters eliminated by the
restrictions can be estimated after the others are obtained just by using the restrictions. The restrictions are
linear, so the standard errors are also striaghtforward to obtain.
          The least squares estimates are shown below. Estimated standard errors appear in parentheses.
Variable                    Cost Function   Capital Share                  Labor Share
One                          51.32 (45.91) -.0174 (.4697)                  .2172 (.2408)
ln(pk/pf)                   -21.74 (20.14)   .2380 (.1045)                 .0033 (.0534)
ln(pl/pf)                    32.39 (21.81)   .0065 (.1059)                 .0168 (.0542)
ln2(pk/pf)/2                 4.596 (4.604) -.0007 (.0098)                 -.0117 (.0050)
ln2(pl/pf)/2                  8.216 (5.159)
ln(pk/pf)ln(pl/pf)          -6.238 (4.684)
lnY                          1.674 (.9297)
ln2Y/2                      ,006997 (.0313)
lnYln(pk/pf)                -.3223 (.2652)
lnYln(pl/pf)                .08631 (.1981)
The estimates do not even come close to satisfying the cross equation restrictions. The parameters in the cost
function are extremely large, owing primarily to rather severe multicollinearity among the price terms.
          The results of estimation of the system by direct maximum likelihood are shown. The convergence
criterion is the value of Belsley (discussed near the end of Section 5.5). The value α shown below is g′H-1g
where g is the gradient and H is the Hessian of the log-likelihood.
 Iteration 0, F=46.76391, ln*S*= -7.514268, α= 2.054399
 Iteration 1, F=136.7448, ln*S*= -16.51236, α= .5796486
 Iteration 2, F=146.9803, ln*S*= -17.53591, α= .02179947
 Iteration 3, F=147.2268, ln*S*= -17.56055, α= .0004222
       Residual covariance matrix
                     Cost         Capital     Labor
       Cost       .0145572
       Capital    .000304768    .00303853
       Labor     -.000317554 -.000887258    .000798128
         Coefficient Estimate Std. Error
            α        -6.41878      .6637
             βk      -.0546555      .2422
             βl       .250976       .2138
             δkk      .245259       .06904
             δll      .0245770      .04788
             δkl     -.00403448     .04779
             βy       .572452       .1340
             βyy      .0456587      .01908
             γyk     -.00124236     .008409
             γyl     -.0116921      .004442
             βf       .8036795
             δkf     -.2412245
             δlf     -.0205425
             δff      .261767
             γyf      .0129345
         The means of the variables are: Y = 3531.8,          p k = 169.35, p l = 2.039,        p f = 26.41. The
three factor shares computed at these means are Sk = .4182, Sl = .0865, Sf = .4953. (The sample means are
.411, .0954, and .4936.) The matrix of elasticities computed according to (15-72) is



                                                                                                                70
                                   k        l       f
                              .01115                       k
                     Σ =      .8885 -7.2756                l
                             -.1646 .5206 .04819 f
 (Two of the three diagonals have the `wrong' sign. This may be due to the very small sample size. The cross
elasticities however do conform to what one might expect, the primary one being the evident substitution
between capital and fuel.
           To test the hypothesis that γyi = 0, we reestimate the model without the interaction terms between lnY
and the prices in the cost function and without lnY in the factor share equations. The iterations for this
restricted model are shown below.
           Iter.= 0, F=46.76391, log|S|= -7.514268, α= 1.912223
           Iter.= 1, F=123.7521, log|S|= -15.21308, α= .5888180
           Iter.= 2, F=136.3410, log|S|= -16.47198, α= .2771995
           Iter.= 3, F=141.3491, log|S|= -16.97279, α= .08024513
           Iter.= 4, F=142.5591, log|S|= -17.09379, α= .01636212
           Converged achieved
Since we are interested only in the test statistic, we have not listed the parameter estimates. The test statistic
given in (17-26) is λ = T(ln|Sr| - ln|Su|) = 20(-17.09379 - (-17.56055)) = 9.3352. There are two restrictions
since only two of the three parameters are free. The critical value from the chi-squared table is 5.99, so we
would reject the hypothesis.




                                                                                                              71
Chapter 15


Simultaneous Equations Models
1. Consider the following two equation model:
                                  y1 = γ1y2 + β11x1 + β21x2 + β31x3 + ε1
                                  y2 = γ2y1 + β12x1 + β22x2 + β32x3 + ε2.
(a) Verify that as stated, neither equation is identified.
(b) Establish whether or not the following restrictions are sufficient to identify (or partially identify) the
model:                            (1) β21 = β32 = 0,
                                  (2) β12 = β22 = 0,
                                  (3) γ1 = 0,
                                  (4) γ1 = γ2 and β32 = 0,
                                  (5) σ12 = 0 and β31 = 0,
                                  (6) γ1 = 0 and σ12 = 0,
                                  (7) β21 + β22 = 1,
                                  (8) σ12 = 0, β21 = β22 = β31 = β32 = 0,
                                  (9) σ12 = 0, β11 = β21 = β22 = β31 = β32 = 0.
           Since nothing is excluded from either equation and there are no other restrictions, neither equation
passes the order condition for identification.
           (1) We use (15-12) and the equations which follow it. For the first equation, [A3′,A5′] = β22, a scalar
which has rank M-1 = 1 unless β22 = 0. For the second, [A3′,A5′] = β31. Thus, both equations are identified.
           (2) This restriction does not restrict the first equation, so it remains unidentified. The second
equation is now identified, as [A3′,A5′] = [β11,β21] has rank 1 if either of the two ceofficients are nonzero.
           (3) If γ1 equals 0, the model becomes partially recursive. The first equation becomes a regression
which can be estimated by ordinary least squares. However, the second equation continues to fail the order
condition. To see the problem, consider that even with the restriction, any linear combination of the two
equations has the same variables as the original second eqation.
           (4) We know from above that if β32 = 0, the second equation is identifiable. If it is, then γ2 is
identified. We may treat it as known. As such, γ1 is known. By regressing y1 - γ1y2 on the xs, we would
obtain estimates of the remaining parameters, so these restrictions identify the model. It is instructive to
analyze this from the standpoint of false structures as done in the text. A false structure which incorporates
                                             1 − γ
                                            − λ 1 
                                                         f          f12 
                                                                 11
the known restrictions would be β11 β12  ×                               . If the false structure is to obey the restrictions,
                                                          f 21 f 22 
                                            β 21 β 22 
                                            β 31 0 
then f11 - γ f21 = 1, f22 - γ f12 = 1, f21 - γf11 = f12 - γ f22, β31 f12 = 0. It follows then that f12 = 0 so f11 = 1. Then, f21 -
γf 11 = -γ or f21 = (f11 - 1)γ so that f11 - γ2(f11 - 1) = 1. This can only hold for all values of γ if f11 = 1 and,
then, f21 = 0. Therefore, F = I which establishes identification.
           (5) If β31 = 0, the first equation is identified by the usual rank and order conditions. Consider, then,
the off-diagonal element of Σ = Γ′ΩΓ. Ω is identified since it is the reduced form covariance matrix. The
off-diagonal element is           σ12 = ω11 + ω22 - (γ1 + γ2)ω12 = 0. Since γ1 is zero, γ2 = ω12/(ω11 + ω22). With γ2
known, the remaining parameters are estimable by least squares regression of (y2 - γ2y1) on the xs. Therefore,
the restrictions identify the model.
           (6) Since this is only a single restriction, it will not likely identify the entire model. Consider again
the false structure. The restrictions implied by the theory are f11 - γ2f21 = 1, f22 - γ1f12 = 1, β21f11 + β22f21 =




                                                                                                                              72
β21f12 + β22f22. The three restrictions on four unknown elements of F do not serve to pin down any of them.
This restriction does not even partially identify the model.
          (7) The last four restrictions remove x2 and x3 from the model. The remaining model is not
identified by the usual rank and order conditions. From part (5), we see that the first restriction implies σ12 =
ω11 + ω22 - (γ1 + γ2)ω12 = 0. But, with neither γ1 nor γ2 specified, this does not identify either parameter.
          (8) The first equation is identified by the conventional rank and order conditions. The second
equation fails the order condition. But, the restriction σ12 = 0 provides the necessary additional information
needed to identify the model. For simplicity, write the model with the restrictions imposed as
                                            y1 = γ1y2 + ε1 and y2 = γ2y1 + βx + ε2.
The reduced form is                         y1 = π1x + v1 and y2 = π2x + v2
where π1 = γ1β/∆ and π2 = β/∆ with ∆ = (1 - γ1γ2), and v1 = (ε1 + γ1ε2)/∆ and v2 = (ε2 + γ2ε1)/∆. The reduced
form variances and covariances are ω11 = (γ12σ22 + σ11)/∆2, ω22 = (γ22σ11 + σ22)/∆2, ω12 = (γ1σ22 + γ2σ11)/∆2.
All reduced form parameters are estimable directly by using least squares, so the reduced form is identified in
all cases. Now, γ1 = π1/π2. σ11 is the residual variance in the euqation (y1 - γ1y2) = ε1, so σ11 must be estimable
(identified) if γ1 is. Now, with a bit of manipulation, we find that γ1ω12 - ω11 = -σ11/∆. Therefore, with σ11 and
γ1 "known" (identified), the only remaining unknown is γ2, which is therefore identified. With γ1 and γ2 in
hand, β may be deduced from π2. With γ2 and β in hand, σ22 is the residual variance in the equation (y2 - βx -
γ2y1) = ε2, which is directly estimable, therefore, identified.

2. Verify the rank and order conditions for identification of the second and third behavioral equation in
Klein's Model I. [Hint: See Example 15.6.]
         Following the method in Example 15.6, for identification of the investment equation, we require that
            (1) (2) (3) (4) (5) (6) (7) (8) (9) 
           − 1 α      0    0 α3 0         0    0     0 
                  3
            0 − 1 γ1 0          0   0     0 γ3 γ2 
the matrix                                               have rank 5. Columns (1), (4), (6), (7), and (8)
           0     0 −1 0         0   1     0    0     0
            0 −1 1         0    0   0 −1 0           0
                                                        
            0   0    0    1    0   0     0    0     0 
each have one element in a different row, so they are linearly independent. Therefore, the matrix has rank
                                                      (1) (2) (3) (4) (5) (6) (7) (8) (9) (10) 
                                                     − 1 0 α         0 α3 0         0     0 α2      0 
                                                                 1
                                                      0 − 1 β1 0          0   0     0     0 β2 β3 
five. For the third equation, the required matrix is                                                   .
                                                     1     1    0    0    0 01 0          0    0    0 
                                                     0     0 −1 0         0   0 −1 0           0    0 
                                                                                                       
                                                      0   1    0 −1 0        0     0     0    0    1 
Columns (4), (6), (7), (9), and (10) are linearly independent.

3. Check the identifiability of the parameters of the following model:
                                                                   0 β12       β13 β14 
               1 γ 12        0     0                            β
              γ                                                  21 1         0 β 24 
                 21  1     γ 23  γ 24 
[y1 y2 y3 y4]                            + [x1 x2 x3 x4 x5]       β 31 β 32    β 33 0  = [ε1,ε2,ε3,ε4].
               0 γ 32 1 γ 34                                                           
                                                                 0    0      β 43 β 44 
               γ 41 γ 42 0         1 
                                                                   0 β52       0    0 




                                                                                                               73
           We find [A3′,A5′]′ for each equation.
           (1)               (2)                 (3)             (4)
 γ 32    1 γ 34                        1    γ 12   0
β                                                           1 γ 12 0 
         β13 β14                      γ     γ      1  
 12                , [ 0 β 43 β 44 ] ,                         β 32 β 33 
                                           41    42
                                                          , β
 0      β 43 β 4                      β 21 1       0   31
                                                        0 β52 0 
β 32     0    0                        0 β 52     00 
Identification requires that the rank of each matrix be M-1 = 3. The second is obviously not identified. In (1),
none of the three columns can be written as a linear combination of the other two, so it has rank 3. (Although
the second and last columns have nonzero elements in the same positions, for the matrix to have short rank,
we would require that the third column be a multiple of the second, since the first cannot appear in the linear
combination which is to replicate the second column.) By the same logic, (3) and (4) are identified.

4. Obtain the reduced form for the model in Exercise 1 under each of the assumptions made in parts (a) and
(b1), (b6), and (b9).
          (1). The model is y1 = γ1y2 + β11x1 + β21x2 + β31x3 + ε1
                            y2 = γ2y1 + β12x1 + β22x2 + β32x3 + ε2.
                                          − β11 − β12 
                  1   − γ2             
Therefore, Γ =               and B =  0         − β 22  and Σ is unrestricted. The reduced form is
                  −
                  1γ    1               − β 31   0 
              β11 + γ 1β 21   γ 2β11 + β12 
       1       γ β                          and
Π=                                 β 22
   1 − γ 1γ 2                              
                   1 22
                 β 31           γ 2β 31 
                                  σ 11 + γ 12 σ 22    γ 2 σ11 + γ 1σ 22 
                                                                         
                       1          + 2γ 1σ 12          + ( γ 1 + γ 2 )σ12 
      -1    -1
Ω = (Γ )′Σ(Γ ) =                                                         
                 (1 − γ 1γ 2 ) 2                                         
                                  γ 2 σ11 + γ 1σ 22
                                                           2
                                                         γ 2 σ 11 + σ 22 
                                 + ( γ 1 + γ 2 )σ12     + 2 γ 1σ12       
                                                                         
          (6) The model is y1 = β11x1 + β21x2 + β31x3 + ε1
                             y2 = γ2y1 + β12x1 + β22x2 + β32x3 + ε2
The first equation is already a reduced form. Substituting it into the second provides the second reduced form.
                              β11 β12 + γ 2β11 
                                                              1 γ 2                         σ11         γ 2 σ11 
The coefficient matrix is P= β 21 β 22 + γ 2β 21  , Γ-1 =        so Ω = (Γ-1)′Σ(Γ-1) =            2            
                              β 31 β 32 + γ 2β 31         0 1                           γ 2 σ11 γ 2 σ11 + σ 22 

          (9) The model is
                  y1 = γ1y2 + ε1
                  y2 = γ2y1 + β12x1 + ε2
                                                         σ + γ 12 σ 22         γ 2 σ11 + γ 1σ 22 
Then, Π = -BΓ-1 = [β12γ1/(1-γ1γ2) β12/(1-γ1γ2)] and Ω =  11                                      .
                                                         γ 2 σ11 + γ 1σ 22     γ 22 σ11 + σ 22 




                                                                                                                   74
5. The following model is specified:
                   y1 = γ1y2 + β11x1        + ε1
                   y2 = γ2y1 + β22x2 + β32x3 + ε2
All variables are measured as deviations from their means. The sample of 25 observations produces the
following matrix of sums of squares and cross products:
                   y1      y2      x1    x2      x3
          y1       20      6       4     3      5
          y2        6     10       3     6      7
          x1        4     3       5     2      3
          x2        3     6       2    10       8
          x3        5     7       3     8     15
(a) Estimate the two equations by ordinary least squares.
(b) Estimate the parameters of the two equations by two stage least squares. Also estimate the asymptotic
covariance matrix of the two stage least squares estimates.
(c) Obtain the LIML estimates of the parameters of the first equation.
(d) Estimate the two equations by three stage least squares.
(e) Estimate the reduced form coefficient matrix by ordinary least squares and indirectly by using your
structural estimates from part b.
                                                5 2 3                4        3
          The relevant submatrices are X′X = 2 10 8  , X′y1 =  3 , X′y2 = 6 , y1′y1 = 20, y2′y2 =
                                                                        
                                                 3 8 15            5     7
                         3 5            4 2 3                                      10 3 5 
                                                                10 3
10, y1′y2 = 6, X′Z1 = 6 2 , X′Z2 =  3 10 8  Z1′Z1 =                    , Z2′Z2 =  3 10 8  ,
                                                                     3 5
                        7 3           5 8 15                                    5 8 15
                                                            20             6
          6 6 7               6          10                          
Z1′Z2 =           , Z1′y1 = 4 , Z1′y2 =  3  , Z2′y1 =  3  , Z2′y2 = 6 .
          4 2   3                                      5          7
The two OLS coefficient vectors are
        d1 = (X′X)-1X′y1 = [.439024,.536585] ′
        d2 = (X′X)-1X′y2 = [.193016,.384127,.19746] ′.
The two stage least squares estimators are
          ∧
         δ 1 = [Z1′X(X′X)-1X′Z1]-1[Z1′X(X′X)-1X′y1] = [.368816,.578711] ′.
          ∧
         δ 2 = [Z2′X(X′X)-1X′Z2]-1[Z2′X(X′X)-1X′y2] = [.484375,.367188,.109375] ′.
          ∧                   ∧     ∧        ∧                      ∧
         σ11 = (y1′y1 - 2y1′Z δ 1 + δ 1 ′Z1′Z1 δ 1 ) / 25 = .610397, σ 22 = .268384.

The estimated asymptotic covariance matrices are
                  ∧       ∧                          .215858 .129035
         Est.Var[ δ 1 ] = σ11 [Z1′X(X′X)-1X′Z1]-1 =                 
                                                     .129036 .1995 
                                     .132423 −.007699 −.040035
                            ∧
         Est.Var[Est.Var[ δ 2 ]] =  −.007688 .047259 −.022538 .
                                     −.040035 −.022638 .043311 
The three stage least squares estimate is




                                                                                                       75
                                                                    ∧11               −1
                                                                                                 
                                                                    σ [Z1 ' X( X' X) X' y1 ] + 
                                                                    ∧                           
                                                               − 1  12
 ∧11                           ∧                                   σ [ Z 1 ' X( X' X) X' y 2 ] 
                                                                                       −1
 σ [ Z 1 ' X( X ' X) X' Z 1 ] σ [ Z 1 ' X ( X' X ) X' Z 2 ]                                   
                     −1         12                 −1

 ∧                             ∧                                                              
                     −1                            −1                ∧                          
σ [Z 2 ' X( X' X) X' Z1 ] σ [Z 2 ' X( X' X) X' Z 2 ] σ12 [Z ' X( X' X) −1 X' y ] + 
   12                           22

                                                                          2                 1
                                                                                                
                                                                    ∧22               −1        
                                                                   σ [Z 2 ' X( X' X) X' Z 2 ] 

                           = [.368817,.578708,.4706,.306363,.168294]′ .
The estimated standard errors are the square roots of the diagonal elements of the inverse matrix,
[.4637,.4466,.3626,.1716,.1628], compared to the 2SLS values, [.4637,.4466,.3639,.2174,.2081].
         To compute the limited information maximum likelihood estimator, we require the matrix of sums of
squares and cross products of residuals of the regressions of y1 and y2 on x1 and on x1, x2, and x3. These are
                                    16.5 3.60                                       16.2872 2.55312
W0 = Y′Y - Y′x1(x1′x1)-1x1′Y =                  , W1 = Y′Y - Y′X(X′X)-1X′Y =                           .
                                    3.60 8.20                                       2.55312 5.3617 
The two characteristic roots of (W1)-1W0 are 1.53157 and 1.00837. We carry the smaller one into the k-class
computation [see, for example, Theil (1971) or Judge, et al (1985)];
                                     −1
∧      10 − 100837
              .      (5.3617) 3 6 − 100837
                                          .      ( 2.55312)  .367116
δ 1k =                                                    =  .57973 
                 3             5            4                       
Finally, the two estimates of the reduced form are
                         .680851 .329787
          (OLS) P = .010638 .37243 
                         .191489 .202128
                      −.578711     0                          −1 .704581 .341281
                     ∧
                                              1    −.484375                     
and    (2SLS)       Π=    0    −.367188                     = .104880 .447051 .
                                             -.368816     1
                         0    −.109375                       .049113 .133164

6. For the model                y1 = γ1y2 + β11x1 + β21x2 + ε1
                                y2 = γ2y1 + β32x3 + β42x4 + ε2
show that there are two restrictions on the reduced form coefficients. Describe a procedure for estimating the
model while incorporating the restrictions.
                                                                          β11 0 
                                                − γ                       β       
                                        1          2                     21 0  = [ ε ε ].
          The structure is [y1 y2]                    + [ x    x x   x  ]
                                       − γ 1     1       1 2 3 4
                                                                           0 β 32     1 1
                                                                                  
                                                                           0 β 42 
or y′ Γ + x′B = ε′. The reduced form coefficient matrix is
                                 β11      γ 2β11          π11 π 21 
                                 β                                  
Π = -BΓ-1 =
                          1      21 γ 2β 21  =  π 21 π 22  The two restrictions are π12/π11 = π22/π21 and
                     1 − γ 1γ 2  γ 1β 32 β 32             π 31 π 32 
                                                                    
                                  γ  β
                                 1 42       β 42          π 41 π 42 
π31/π32 = π41/π42. If we write the reduced form as
                     y1 = π11x1 + π21x2 + π31x3 + π41x4 + v1
                     y2 = π12x1 + π22x2 + π32x3 + π42x4 + v2.
We could treat the system as a nonlinear seemingly unrelated regressions model. One possible way to handle
the restrictions is to eliminate two parameters directly by making the substitutions
                     π12 = π11π22/π21 and π31 = π32π41/π42.


                                                                                                          76
The pair of equations would be
                   y1 = π11x1 + π21x2 + (π32π41/π42)x3 + π41x4 + v1
                   y2 = (π11π22/π21)x1 + π22x2 + π32x3 + π42x4 + v2.
This nonlinear system could now be estimated by nonlinear GLS. The function to be minimized would be
                   Σ in=1 vi12σ11 + vi22σ22 + 2vi1vi2σ12 = ntr(Σ-1W).
Needless to say, this would be quite involved.

7. An updated version of Klein’s Model I was estimated. Using the two stage least squares estimates, the
                                                −.1899 −.9471 −.8991
relevant submatrix of ∆ (see (15-42)) is ∆1 =  0       10287
                                                          .       0  . Is the model stable?
                                                −.0656 −.0791 .0952 
           We would require that all three characteristic roots have modulus less than one. An intuitive guess
that the diagonal element greater than one would preclude this would be correct. The roots are the solutions to
       −.1899 − λ     −.9471     −.8991 
 det 
           0       10287
                     .      −λ       0      = 0. Expanding this produces -(.1899 + λ)(1.0287 - λ)(.0952 - λ)
                                           
       −.0656        −.0791   .0952 − λ 
- .0565(1.0287 - λ).8991 = 0. There is no need to go any further. It is obvious that λ = 1.0287 is a solution, so
there is at least one characteristic root larger than 1. The system is unstable.

8. Prove plim Yj′ε/T = ωj - Ωjjγj.
                  Consistent with the partitioning y′ = [yj Yj′ Yi*′], partition Ω into
                                    ωjj       ωj′       ω*j′
                           Ω =      ωj        Ωjj       Ωj′
                                    ω*j       Ω*j       Ωj*
                                                                                   1 
and, as in the equation preceding (15-8), partition the jth column of Γ as Γj = − γ  . Since the full set of
                                                                                   0 
reduced form disturbances is V = EΓ-1, it follows that E = VΓ. In particular, the jth column of E is εj =
VΓj. In the reduced form, now referring to (15-8),        Yj = XΠj + Vj, where Πj is the Mj columns of Π
corresponding to the included endogenous variables and Vj is the T×Mj matrix of their reduced form
disturbances. Since X is uncorrelated with all columns of E, we have
                                                1 
plim Yj′εj/T = plim Vj′ Γj /T = [ωj Ωjj Ωj* ] − γ  = ωj - Ωjjγj as required.
                                                0 

9. Prove that an underidentified equation cannot be estimated by two stage least squares.
        If the equation fails the order condition, then the number of excluded exogenous variables is less than
the number of included endogenous. The matrix of instrumental variables to be used for two stage least
                        ∧
squares is of the form Z = [XA,Xj], where XA is Mj linear combination of all K columns in X and Xj is Kj
                                                                                                    ∧
columns of X. In total, K = Kj* + Kj. If the equation fails the order condition, then Kj* < Mj, so Z is Mj + Kj
                                                                                    ∧
columns which are linear combinations of K = Kj* + Kj < Mj + Kj. Therefore, Z cannot have full column
                                                                                        ∧   ∧
rank. In order to compute the two stage least squares estimator, we require ( Z ′ Z )-1, which cannot be
computed.




                                                                                                             77
Chapter 16


Estimation                                       Frameworks                                             in
Econometrics
1. Compare the fully parametric and semiparametric approaches to estimation of a discrete choice model
such as the multinomial logit model discussed in Chapter 21. What are the benefits and costs of the
semiparametric approach?
          A fully parametric model/estimator provides consistent, efficient, and comparatively precise
results. The semiparametric model/estimator, by comparison, is relatively less precise in general terms.
But, the payoff to this imprecision is that the semiparametric formulation is more likely to be robust to
failures of the assumptions of the parametric model. Consider, for example, the binary probit model of
Chapter 21, which makes a strong assumption of normality and homoscedasticity. If the assumptions are
correct, the probit estimator is the most efficient use of the data. However, if the normality assumption or
the homoscedasticity assumption are incorrect, then the probit estimator becomes inconsistent in an
unknown fashion. Lewbel’s semiparametric estimator for the binary choice model, in contrast, is not very
precise in comparison to the probit model. But, it will remain consistent if the normality assumption is
violated, and it is even robust to certain kinds of heteroscedasticity.

2. Asymptotics take on a different meaning in the Bayesian estimation context, since parameter estimators
do not “converge” to a population quantity. Nonetheless, in a Bayesian estimation setting, as the sample
size increases, the likelihood function will dominate the posterior density. What does this imply about the
Bayesian “estimator” when this occurs.
         The Bayesian estimator must “converge” to the maximum likelihood estimator as the sample size
grows. The posterior mean will generally be a mixture of the prior and the maximizer of the likelihood
function. We do note, however, that the likelihood will only dominate an informative prior asymptotically
- the Bayesian estimator in this case will ultimately be a mixture of a prior with a finite precision and a
likelihood based estimator whose variance converges to zero (thus, whose precision grows infinitely).
Thus, the domination will not be complete in a finite sample.

3. Referring to the situation in question 2, one might think that an informative prior would outweigh the
effect of the increasing sample size. With respect to the Bayesian analysis of the linear regression, analyze
the way in which the likelihood and an informative prior will compete for dominance in the posterior
mean.
          The Bayesian estimator with an informative prior in (16-10) is

         E[β|data,σ2] = Fβ0 + (I-F)b

where β0 is the prior mean, b is the least squares estimator and F = [Σ0-1 + [σ-2(X′X)-1]-1]-1Σ0-1 where Σ0 is
the prior variance. Now, with well behaved data, F must ultimately converge to a zero matrix because the
OLS estimator’s variance is shrinking, so it’s inverse is increasing inside the large square brackets.

The following exercises require specific software. The relevant techniques are available in several
packages that might be in use, such as SAS, Stata, or LIMDEP. The exercises are suggested as departure
points for explorations using a few of the many estimation techniques listed in this chapter.




                                                                                                          78
4. Using the gasoline market data in Appendix Table F2.2, use the partially linear regression method in
Section 16.3.3 to fit an equation of the form

   ln(G/Pop) = β1ln(Income) + β2lnPnew cars + β3lnPused cars + g(lnPgasoline) + ε

crea;gp=lg;ip=ly;ncp=lpnc;upp=lpuc;pgp=lpg$
sort;lhs=pgp;rhs=gp,ip,ncp,upp$
crea;dgp=.809*gp - .5*gp[-1] - .309*gp[-2]$
crea;dip=.809*ip - .5*ip[-1] - .309*ip[-2]$
crea;dnc=.809*ncp -.5*ncp[-1]-.309*ncp[-2]$
crea;duc=.809*upp -.5*upp[-1]-.309*upp[-2]$
samp;3-36$
regr;lhs=dgp;rhs=dip,dnc,duc;res=e$
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = DGP      Mean=   .9708646870E-02, S.D.=   .4738748109E-01 |
| Model size: Observations =      34, Parameters =   3, Deg.Fr.=     31 |
| Residuals: Sum of squares= .1485994289E-01, Std.Dev.=          .02189 |
| Fit:        R-squared= .799472, Adjusted R-squared =           .78653 |
| Model test: F[ 2,      31] =   61.80,    Prob value =          .00000 |
| Diagnostic: Log-L =     83.2587, Restricted(b=0) Log-L =      55.9431 |
|             LogAmemiyaPrCrt.=   -7.559, Akaike Info. Crt.=     -4.721 |
| Model does not contain ONE. R-squared and F can be negative!          |
| Autocorrel: Durbin-Watson Statistic =   1.34659,   Rho =       .32671 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 DIP          .9629902959       .11631885    8.279   .0000 .14504254E-01
 DNC         -.1010972781   .87755182E-01   -1.152   .2581 .20153536E-01
 DUC      -.3197058148E-01 .51875022E-01     -.616   .5422 .35656776E-01
--> matr;varpl={1+1/(2*2)}*varb$
--> matr;stat(b,varpl)$
+---------------------------------------------------+
|Number of observations in current sample =      34 |
|Number of parameters computed here       =       3 |
|Number of degrees of freedom             =      31 |
+---------------------------------------------------+
+---------+--------------+----------------+--------+---------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] |
+---------+--------------+----------------+--------+---------+
 B_1          .9629902959       .13004843    7.405   .0000
 B_2         -.1010972781   .98113277E-01   -1.030   .3028
 B_3      -.3197058148E-01 .57998037E-01     -.551   .5815




                                                                                                    79
5. To continue the analysis in question 4, consider a nonparametric regression of G/Pop on the price.
Using the nonparametric estimation method in Section 16.4.2, fit the nonparametric estimator using a range
of bandwidth values to explore the effect of bandwidth

+---------------------------------------+
| Nonparametric Regression for G        |
| Observations       =            36    |
| Points plotted     =            36    |
| Bandwidth          =       .468092    |
| Statistics for abscissa values----    |
| Mean               =      2.316611    |
| Standard Deviation =      1.251735    |
| Minimum            =       .914000    |
| Maximum            =      4.109000    |
| ----------------------------------    |
| Kernel Function    =      Logistic    |
| Cross val. M.S.E. =     121.084982    |
| Results matrix     =        KERNEL    |
+---------------------------------------+


                     Nonparametric Regression for                      G
            120
                      E[y|xi]
                      G

            110
  E[y|xi]




            100



             90



             80



             70
               .50    1.00   1.50   2.00   2.50   3.00   3.50   4.00       4.50

                                           PG


6. (You might find it useful to read the early sections of Chapter 21 for this exercise.) The extramarital
affairs data analyzed in Section 22.3.7 can be reinterpreted in the context of a binary choice model. The
dependent variable in the analysis is a count of events. Using these data, first recode the dependent
variable 0 for none and 1 for more than zero. Now, first using the binary probit estimator, fit a binary
choice model using the same independent variables as in the example discussed in Section 22.3.7. Then
using a semiparametric or nonparametric estimator, estimate the same binary choice model. A model for
binary choice can be fit for at least two purposes, for estimation of interesting coefficients or for prediction
of the dependent variable. Use your estimated models for these two purposes and compare the two models.
A. Using the probit model and the Klein and Spady semiparametric models, the two sets of coefficient
estimates are somewhat similar.




                                                                                                            80
+---------------------------------------------+
| Binomial Probit Model                       |
| Maximum Likelihood Estimates                |
| Model estimated: Jul 31, 2002 at 05:16:40PM.|
| Dependent variable                    P     |
| Weighting variable                 None     |
| Number of observations              601     |
| Iterations completed                  5     |
| Log likelihood function       -307.2955     |
| Restricted log likelihood     -337.6885     |
| Chi squared                    60.78608     |
| Degrees of freedom                    5     |
| Prob[ChiSqd > value] =         .0000000     |
| Hosmer-Lemeshow chi-squared =   5.74742     |
| P-value= .67550 with deg.fr. =        8     |
+---------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
          Index function for probability
 Z2       -.2202376072E-01 .10177371E-01    -2.164   .0305     32.487521
 Z3        .5990084920E-01 .17086004E-01     3.506   .0005     8.1776955
 Z5          -.1836462412   .51493239E-01   -3.566   .0004     3.1164725
 Z7        .3751312008E-01 .32844576E-01     1.142   .2534     4.1946755
 Z8          -.2729824396   .52473295E-01   -5.202   .0000     3.9317804
 Constant     .9766647244       .36104809    2.705   .0068
+---------------------------------------------+
| Seimparametric Binary Choice Model          |
| Maximum Likelihood Estimates                |
| Model estimated: Jul 31, 2002 at 11:01:24PM.|
| Dependent variable                    P     |
| Weighting variable                 None     |
| Number of observations              601     |
| Iterations completed                 13     |
| Log likelihood function       -334.7367     |
| Restricted log likelihood     -337.6885     |
| Chi squared                    5.903551     |
| Degrees of freedom                    4     |
| Prob[ChiSqd > value] =         .2064679     |
| Hosmer-Lemeshow chi-squared = 118.69649     |
| P-value= .00000 with deg.fr. =        8     |
| Logistic kernel fn. Bandwidth = .34423      |
+---------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
          Characteristics in numerator of Prob[Y = 1]
 Z2       -.3284308221E-01 .52254249E-01     -.629   .5297     32.487521
 Z3           .1089817386   .86483083E-01    1.260   .2076     8.1776955
 Z5          -.2384951835       .23320058   -1.023   .3064     3.1164725
 Z7          -.1026067037       .17130225    -.599   .5492     4.1946755
 Z8          -.1892263132       .21598982    -.876   .3810     3.9317804
 Constant     .0000000000 ........(Fixed Parameter)........




                                                                            81
The probit model produces a set of marginal effects, as discussed in the text. These cannot be computed
for the Klein and Spady estimator.
+-------------------------------------------+
| Partial derivatives of E[y] = F[*]   with |
| respect to the vector of characteristics. |
| They are computed at the means of the Xs. |
| Observations used for means are All Obs. |
+-------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
          Index function for probability
 Z2       -.6695300413E-02 .30909282E-02    -2.166   .0303     32.487521
 Z3        .1821006800E-01 .51704684E-02     3.522   .0004     8.1776955
 Z5       -.5582910069E-01 .15568275E-01    -3.586   .0003     3.1164725
 Z7        .1140411992E-01 .99845393E-02     1.142   .2534     4.1946755
 Z8       -.8298761795E-01 .15933104E-01    -5.209   .0000     3.9317804
 Constant     .2969094977       .11108860    2.673   .0075

These are the various fit measures for the probit model
+----------------------------------------+
| Fit Measures for Binomial Choice Model |
| Probit   model for variable P          |
+----------------------------------------+
| Proportions P0= .750416   P1= .249584 |
| N =     601 N0=     451   N1=     150 |
| LogL = -307.29545 LogL0 = -337.6885 |
| Estrella = 1-(L/L0)^(-2L0/n) = .10056 |
+----------------------------------------+
|     Efron | McFadden | Ben./Lerman |
|    .10905 |    .09000 |        .66451 |
|    Cramer | Veall/Zim. |     Rsqrd_ML |
|    .10486 |    .17359 |        .09619 |
+----------------------------------------+
| Information Akaike I.C. Schwarz I.C. |
| Criteria        1.04258     652.98248 |
+----------------------------------------+
Frequencies of actual & predicted outcomes
Predicted outcome has maximum probability.
Threshold value for predicting Y=1 = .5000
            Predicted
------ ---------- + -----
Actual      0    1 | Total
------ ---------- + -----
  0       437   14 |     451
  1       130   20 |     150
------ ---------- + -----
Total     567   34 |     601

These are the fit measures for the probabilities computed for the Klein and Spady model. The probit model
fits better by all measures computed.
+----------------------------------------+
| Fit Measures for Binomial Choice Model |
| Observed = P        Fitted = KSPROBS   |
+----------------------------------------+
| Proportions P0= .750416   P1= .249584 |
| N =     601 N0=     451   N1=     150 |
| LogL = -320.37513 LogL0 = -337.6885 |
| Estrella = 1-(L/L0)^(-2L0/n) = .05743 |
+----------------------------------------+
|     Efron | McFadden | Ben./Lerman |
|    .05686 |    .05127 |        .64117 |
|    Cramer | Veall/Zim. |     Rsqrd_ML |
|    .03897 |    .10295 |        .05599 |
+----------------------------------------+




                                                                                                          82
The first figure below plots the probit probabilities against the Klein and Spady probabilities. The models
are obviously similar, though there is substantial difference in the fitted values.



             .80

             .70

             .60

             .50
   PROBITS




             .40

             .30

             .20

             .10

             .00
               .100    .150       .200       .250        .300       .350       .400       .450

                                             KSPROBS


Finally, these two figures plot the predicted probabilities from the two models against the respective index
functions, b’x. Note that the two plots are based on different coefficient vectors, so it is not possible to
merge the two figures.




                                                                                                          83
Chapter 17
Maximum Likelihood Estimation
1. Assume the distribution of x is f(x) = 1/θ, 0 < x < θ. In random sampling from this distribution, prove that
the sample maximum is a consistent estimator of θ. Note: you can prove that the maximum is the maximum
likelihood estimator of θ. But, the usual properties do not apply here. Why not? (Hint: Attempt to verify
that the expected first derivative of the log-likelihood with respect to θ is zero.)
          Using the result of the previous problem, the density of the maximum is
                                        n[z/θ]n-1(1/θ), 0 < z < θ.
                                                   θ
Therefore, the expected value is E[z] = ∫               zndz = [θn+1/(n+1)][n/θn] = nθ/(n+1). The variance is found
                                                   0
                        θ
likewise, E[z2] =      ∫0 z n(z/n) (1/θ)dz = nθ /(n+2) so Var[z] = E[z ] - (E[z]) = nθ /[(n + 1) (n+2)].
                             2      n-1                   2                                         2       2    2       2


Using mean squared convergence we see that lim E[z] = θ and lim Var[z] = 0, so that plim z = θ.
                                                       n→∞                        n→∞
                                                                                               −x
                                                                                          1
2. In random sampling from the exponential distribution, f(x) =                               e θ , x > 0, θ> 0, find the maximum
                                                                                          θ
likelihood estimator of θ and obtain the asymptotic distribution of this estimator.
          The log-likelihood is lnL = -nlnθ - (1/θ) ∑i = 1 xi . The maximum likelihood estimator is obtained as
                                                                  n

                                                                          ∧
the solution to ∂lnL/∂θ = -n/θ + (1/θ2) ∑i = 1 xi = 0, or θ ML = (1/n) ∑i = 1 xi = x . The asymptotic variance
                                               n                                                n


of the MLE is {-E[∂2lnL/∂θ2]}-1 = {-E[n/θ2 - (2/θ3) ∑i = 1 xi ]}-1. To find the expected value of this random
                                                                      n


variable, we need E[xi] = θ. Therefore, the asymptotic variance is θ2/n. The asymptotic distribution is normal
with mean θ and this variance.

3. Suppose the joint distribution of the two random variables x and y is
                  f(x,y) = θe − (β + θ ) y (βy ) x / x! β,θ 0, y $ 0, x = 0,1,2,...
          (a) Find the maximum likelihood estimators of β and θ and their asymptotic joint distribution.
          (b) Find the maximum likelihood estimator of θ/(β+θ) and its asymptotic distribution.
                                                            x
          (c) Prove that f(x) is of the form f(x) = γ(1-γ) , x = 0,1,2,...
               Then, find the maximum likelihood estimator of γ and its asymptotic distribution.
          (d) Prove that f(y*x) is of the form λe-λy(λy) x/x! Prove that f(y|x) integrates to 1. Find the
               maximum likelihood estimator of λ and its asymptotic distribution. (Hint: In the conditional
               distribution, just carry the xs along as constants.)
          (e) Prove that f(y) = θe-θy then find the maximum likelihood estimator of θ and its asymptotic
               variance.
          (f) Prove that f(x|y) = e-βy (βy) x/x! . Based on this distribution, what is the maximum likelihood
              estimator of β?
          The log-likelihood is lnL = nlnθ - (β+θ) ∑i =1 yi + lnβ ∑i =1 xi + ∑i =1 xi log yi - ∑i =1 log( xi !)
                                                              n                       n                 n            n


                                                       ∂lnL/∂θ = n/θ- ∑i =1 yi
                                                                                  n
The first and second derivatives are

                                                                      = - ∑i =1 yi + ∑i =1 xi /β
                                                                              n                     n
                                                       ∂lnL/∂β
                                                       ∂2lnL/∂θ2 = -n/θ2
                                                       ∂2lnL/∂β2 = - ∑i =1 xi /β2
                                                                              n


                                                       ∂2lnL/∂β∂θ = 0.



                                                                                                                              84
                                                                      ∧                        ∧
Therefore, the maximum likelihood estimators are θ = 1/ y and β = x / y and the asymptotic covariance
                           n / θ 2                        0     
matrix is the inverse of E                                    2  . In order to complete the derivation, we will require the
                                               ∑
                                                       n
                               0                           x /β 
                                                     i =1 i    
expected value of ∑i =1 xi = nE[xi]. In order to obtain E[xi], it is necessary to obtain the marginal distribution
                         n


                                  ∞                                                         ∞
                                 ∫ θe                                                      ∫ e
                                        − (β + θ ) y                                               − (β + θ ) y
of xi, which is f(x) =                                 (βy ) x / x ! dy = β x (θ / x !)                           y x dy.      This is βx(θ/x!) times a
                                 0                                                         0
gamma integral. This is f(x) = βx(θ/x!)[Γ(x+1)]/(β+θ)x+1. But, Γ(x+1) = x!, so the expression reduces to
                                                                x
                                      f(x) = [θ/(β+θ)][β/(β+θ)] .
Thus, x has a geometric distribution with parameter π = θ/(β+θ). (This is the distribution of the number of
tries until the first success of independent trials each with success probability 1-π. Finally, we require the
                                                                           ∞
expected value of xi, which is E[x] = [θ/(β+θ)] ∑ x = 0 x[β/(β+θ)] = β/θ. Then, the required asymptotic
                                                                                                   x

                                                           −1
                     n / θ 2       0          θ 2 / n   0 
covariance matrix is                     2  =                .
                      0     n(β / θ) / β     0     βθ / n
         The maximum likelihood estimator of θ/(β+θ) is is
                             ∧
                    θ / (β + θ) = (1/ y )/[ x / y + 1/ y ] = 1/(1 + x ).
Its asymptotic variance is obtained using the variance of a nonlinear function
     V = [β/(β+θ)]2(θ2/n) + [-θ/(β+θ)]2(βθ/n) = βθ2/[n(β+θ)3].
The asymptotic variance could also be obtained as [-1/(1 + E[x])2]2Asy.Var[ x ].)
         For part (c), we just note that γ = θ/(β+θ). For a sample of observations on x, the log-likelihood
                                               lnL = nlnγ + ln(1-γ) ∑i =1 xi
                                                                                   n
would be

                                               ∂lnL/dγ = n/γ - ∑i =1 xi /(1-γ).
                                                                               n


A solution is obtained by first noting that at the solution, (1-γ)/γ = x = 1/γ - 1. The solution for γ is, thus,
∧
γ = 1 / (1 + x ).Of course, this is what we found in part b., which makes sense.
                                         f ( x, y)   θe − (β + θ ) y (βy ) x (β + θ) x (β + θ)
          For part (d) f(y|x) =                    =                                           . Cancelling terms and gathering
                                           f ( x)                     x ! θ βx
the remaining like terms leaves f(y|x) = (β + θ)[(β + θ) y ] x e − (β + θ ) y / x ! so the density has the required form

                                          {                  }∫ e
                                                                ∞
with λ = (β+θ). The integral is [ λx +1 ] / x !                     − λy
                                                                           y x dy . This integral is a Gamma integral which equals
                                                                0
Γ(x+1)/λx+1, which is the reciprocal of the leading scalar, so the product is 1. The log-likelihood function is
                     lnL = nlnλ - λ ∑i =1 yi + lnλ ∑i =1 xi - ∑i =1 ln xi !
                                               n                     n                 n


                     ∂lnL/∂λ = ( ∑i =1 xi + n)/λ - ∑i =1 yi .
                                           n                         n


                     ∂2lnL/∂λ2 = -( ∑i =1 xi + n)/λ2.
                                               n


Therefore, the maximum likelihood estimator of λ is (1 +                           x )/ y and the asymptotic variance, conditional on
                    ∧
the xs is Asy.Var. λ  = (λ2/n)/(1 + x )
                     
          Part (e.) We can obtain f(y) by summing over x in the joint density. First, we write the joint density

                                                                                                           ∑ e
                                                                                                                   ∞
as   f ( x , y ) = θe − θy e −βy (βy ) x / x ! . The sum is, therefore, f ( y ) = θe − θy                                   − βy
                                                                                                                                   (βy ) x / x! . The sum is
                                                                                                                   x =0
that of the probabilities for a Poisson distribution, so it equals 1. This produces the required result. The
maximum likelihood estimator of θ and its asymptotic variance are derived from



                                                                                                                                                        85
                                       lnL = nlnθ - θ ∑i =1 yi
                                                                  n


                                       ∂lnL/∂θ = n/θ - ∑i =1 yi
                                                                       n


                                        ∂2lnL/∂θ2 = -n/θ2.
Therefore, the maximum likelihood estimator is 1/ y and its asymptotic variance is θ2/n. Since we found f(y)
by factoring f(x,y) into f(y)f(x|y) (apparently, given our result), the answer follows immediately. Just divide the
expression used in part e. by f(y). This is a Poisson distribution with parameter βy. The log-likelihood
function and its first derivative are
                             lnL = -β ∑i =1 yi + ln ∑i =1 xi + ∑i =1 xi ln yi - ∑i =1 ln xi !
                                           n                  n                  n               n


                             ∂lnL/∂β = - ∑i =1 yi + ∑i =1 xi /β,
                                               n                  n

                             ∧
from which it follows that β = x / y .

4. Suppose x has the Weibull distribution, f(x) = αβxβ-1exp(-αxβ), x, α, β > 0.
        (a) Obtain the log-likelihood function for a random sample of n observations.
        (b) Obtain the likelihood equations for maximum likelihood estimation of α and β. Note that the
             first provides an explicit solution for α in terms of the data and β. But, after inserting this in the
             second, we obtain only an implicit solution for β. How would you obtain the maximum
             likelihood estimators?
        (c) Obtain the second derivatives matrix of the log-likelihood with respect to α and β. The exact
            expectations of the elements involving β involve the derivatives of the Gamma function and are
            quite messy analytically. Of course, your exact result provides an empirical estimator. How
            would you estimate the asymptotic covariance matrix for your estimators in part (b)?
        (d) Prove that αβCov[lnx,xβ] = 1. (Hint: Use the fact that the expected first derivatives of the
            log-likelihood function are zero.)
        The log-likelihood and its two first derivatives are
                   logL = nlogα + nlogβ + (β-1) ∑i =1 log xi - α ∑i = 1 xiβ
                                                          n                          n


                   ∂logL/∂α = n/α - ∑i = 1 xiβ
                                           n



                                                          ∑ (log x ) x
                                                                      n
                   ∂logL/∂β = n/β + ∑i = 1 log xi - α
                                           n                                         β
                                                                      i =1   i       i
                                                                                 ∧
Since the first likelihood equation implies that at the maximum, α = n / ∑i =1 xiβ , one approach would be to
                                                                                             n


scan over the range of β and compute the implied value of α. Two practical complications are the allowable
range of β and the starting values to use for the search.
         The second derivatives are
                  ∂2lnL/∂α2 = -n/α2
                   ∂2lnL/∂β2 = -n/β2 - α ∑i =1 (log xi ) 2 xiβ
                                               n


                   ∂2lnL/∂α∂β = - ∑i =1 (log xi ) xiβ .
                                       n


If we had estimates in hand, the simplest way to estimate the expected values of the Hessian would be to
evaluate the expressions above at the maximum likelihood estimates, then compute the negative inverse. First,
since the expected value of ∂lnL/∂α is zero, it follows that E[xiβ] = 1/α. Now,
                             E[∂lnL/∂β] = n/β + E[ ∑i = 1 log xi ] - αE[ ∑i =1 (log xi ) xiβ ]= 0
                                                              n                          n


as well. Divide by n, and use the fact that every term in a sum has the same expectation to obtain
                           1/β + E[lnxi] - E[(lnxi)xiβ]/E[xiβ] = 0.
Now, multiply through by E[xiβ] to obtain E[xiβ] = E[(lnxi)xiβ] - E[lnxi]E[xiβ]
or                         1/(αβ) = Cov[lnxi,xiβ].




                                                                                                                 86
5. The following data were generated by the Weibull distribution of Exercise 17:
                   1.3043 .49254 1.2742 1.4019 .32556 .29965 .26423
                   1.0878 1.9461 .47615 3.6454 .15344 1.2357 .96381
                   .33453 1.1227 2.0296 1.2797 .96080 2.0070
         (a) Obtain the maximum likelihood estimates of α and β and estimate the asymptotic covariance
             matrix for the estimates.
         (b) Carry out a Wald test of the hypothesis that β = 1.
         (c) Obtain the maximum likelihood estimate of α under the hypothesis that β = 1.
         (d) Using the results of a. and c. carry out a likelihood ratio test of the hypothesis that β = 1.
         (e) Carry out a Lagrange multiplier test of the hypothesis that β = 1.
         As suggested in the previous problem, we can concentrate the log-likelihood over α. From ∂logL/∂α
= 0, we find that at the maximum, α = 1/[(1/n) ∑i = 1 xiβ ]. Thus, we scan over different values of β to seek the
                                                      n


value which maximizes logL as given above, where we substitute this expression for each occurrence of α.
Values of β and the log-likelihood for a range of values of β are listed and shown in the figure below.
        β           logL
        0.1       -62.386
        0.2       -49.175
        0.3       -41.381
        0.4       -36.051
        0.5       -32.122
        0.6       -29.127
        0.7       -26.829
        0.8       -25.098
        0.9       -23.866
        1.0       -23.101
        1.05      -22.891
        1.06      -22.863
        1.07      -22.841
        1.08      -22.823
        1.09      -22.809
        1.10      -22.800
        1.11      -22.796
        1.12      -22.797
        1.2       -22.984
        1.3       -23.693

The maximum occurs at β = 1.11. The
implied value of α is 1.179. The negative of the second derivatives matrix at these values and its inverse are
    ∧ ∧   2555   .    9.6506        -1 
                                             ∧ ∧   .04506 −.2673
 I α , β =                   and I  α , β =                .
                9.6506 27 .7552               −.2673 .04148
The Wald statistic for the hypothesis that β = 1 is W = (1.11 - 1)2/.041477 = .276. The critical value for a
test of size .05 is 3.84, so we would not reject the hypothesis.
                         ∧
         If β = 1, then α = n / ∑i = 1 xi = 0.88496. The distribution specializes to the geometric distribution
                                    n


if β = 1, so the restricted log-likelihood would be
                   logLr = nlogα - α ∑i =1 xi = n(logα - 1) at the MLE.
                                          n


logLr at α = .88496 is -22.44435. The likelihood ratio statistic is -2logλ = 2(23.10068 - 22.44435) = 1.3126.
Once again, this is a small value. To obtain the Lagrange multiplier statistic, we would compute
                                                                               −1
                                      − ∂ 2 log L / ∂α 2 − ∂ 2 log L / ∂α∂β ∂ log L / ∂α 
         [∂ log L / ∂α ∂ log L / ∂β] − ∂ 2 log L / ∂α∂β − ∂2 log L / ∂β2   ∂ log L / ∂β 
                                                                                       




                                                                                                             87
at the restricted estimates of α = .88496 and β = 1. Making the substitutions from above, at these values, we
would have
                    ∂logL/∂α = 0
                                                  1 n
                    ∂logL/∂β = n + ∑i = 1 log xi - ∑i =1 xi log xi = 9.400342
                                        n

                                                  x
                                       2
                   ∂2logL/∂α2 = − nx = -25.54955
                                    1 n
                   ∂2logL/∂β2 = -n - ∑i =1 xi (log xi ) 2 = -30.79486
                                    x
                   ∂2logL/∂α∂β = − ∑i = 1 xi log xi = -8.265.
                                           n


The lower right element in the inverse matrix is .041477. The LM statistic is, therefore, (9.40032)2.041477 =
2.9095. This is also well under the critical value for the chi-squared distribution, so the hypothesis is not
rejected on the basis of any of the three tests.

6. (Limited Information Maximum Likelihood Estimation). Consider a bivariate distribution for x and
y that is a function of two parameters, α and β. The joint density is f(x,y|α,β). We consider maximum
likelihood estimation of the two parameters. The full information maximum likelihood estimator is the
now familiar maximum likelihood estimator of the two parameters. Now, suppose that we can factor the
joint distribution as done in Exercise 3, but in this case, we have f(x,y|α,β) = f(y|x,α,β)f(x|α). That is, the
conditional density for y is a function of both parameters, but the marginal distribution for x involves only
α.
          a. Write down the general form for the log likelihood function using the joint density.
          b. Since the joint density equals the product of the conditional times the marginal, the log
likelihood function can be written equivalently in terms of the factored density. Write this down, in
general terms.
          c. The parameter α can be estimated by itself using only the data on x and the log likelihood
formed using the marginal density for x. It can also be estimated with β by using the full log likelihood
function and data on both y and x. Show this.
          d. Show that the first estimator in part c has a larger asymptotic variance than the second one.
This is the difference between a limited information maximum likelihood estimator and a full information
maximum likelihood estimator.
          e. Show that if ∂2lnf(y|x,α,β)/∂α∂β = 0, then the result in d. is no longer true.

         a. The full log likelihood is logL = Σ log fyx(y,x|α,β).
         b. By factoring the density, we obtain the equivalent logL = Σ[ log fy|x (y|x,α,β) + log fx (x|α)]
         c. We can solve the first order conditions in each case. From the marginal distribution for x,

         Σ ∂ log fx (x|α)/∂α = 0

provides a solution for α. From the joint distribution, factored into the conditional plus the marginal, we have

          Σ[ ∂log fy|x (y|x,α,β)/∂α + ∂log fx (x|α)/∂α = 0

          Σ[ ∂log fy|x (y|x,α,β)/∂β                     = 0

          d. The asymptotic variance obtained from the first estimator would be the negative inverse of the
expected second derivative, Asy.Var[a] = {[-E[Σ2∂ log fx (x|α)/∂α2]}-1. Denote this Aαα-1. Now, consider
the second estimator for α and β jointly. The negative of the expected Hessian is shown below. Note that the
Aαα from the marginal distribution appears there, as the marginal distribution appears in the factored joint
distribution.




                                                                                                              88
                           
              2            
                ∂ log L   Bαα Bαβ   Aαα 0   Aαα + Bαα Bαβ 
         −E                   =            +            =
               α   α    Bβα Bββ   0 0   Bβα              Bββ 
             ∂    '
               β   β  
The asymptotic covariance matrix for the joint estimator is the inverse of this matrix. To compare this to the
asymptotic variance for the marginal estimator of α, we need the upper left element of this matrix. Using the
formula for the partitioned inverse, we find that this upper left element in the inverse is

[(Aαα+Bαα) - (BαβBββ-1Bβα)]-1 = [Aαα + (Bαα - BαβBββ-1Bβα)]-1

which is smaller than Aαα as long as the second term is positive.
          e. (Unfortunately, this is an error in the text.) In the preceding expression, Bαβ is the cross
derivative. Even if it is zero, the asymptotic variance from the joint estimator is still smaller, being [Aαα +
Bαα]-1. This makes sense. If α appears in the conditional distribution, then there is additional information in
the factored joint likelhood that is not in the marginal distribution, and this produces the smaller asymptotic
variance.

7. Show that the likelihood inequality in Theorem 17.3 holds for the Poisson distribution used in Section
17.3 by showing that E[(1/n)lnL(θ | y )] is uniquely maximized at θ = θ0. Hint: First show that the
expectation is -θ + θ0lnθ - E0[lnyi!].
         The log likelihood for the Poisson model is

         LogL = -nλ + logλΣi yi - Σi log yi!

The expected value of 1/n times this function with respect to the true distribution is

         E[(1/n)logL] = -λ + logλ E0[ y ] – E0 (1/n)Σi logyi!

The first expectation is λ0. The second expectation can be left implicit since it will not affect the solution
for λ - it is a function of the true λ0. Maximizing this function with respect to λ produces the necessary
condition
          ∂E0 (1/n)logL]/∂λ = -1 + λ0/λ = 0

which has solution λ = λ0 which was to be shown.

8.   Show that the likelihood inequality in Theorem 17.3 holds for the normal distribution.
        The log likelihood for a sample from the normal distribution is

         LogL = -(n/2)log2π - (n/2)logσ2 – 1/(2σ2) Σi (yi - µ)2.

         E0 [(1/n)logL] = -(1/2)log2π - (1/2)logσ2 – 1/(2σ2) E0[(1/n) Σi (yi - µ)2].

The expectation term equals E0[(yi - µ)2] = E0[(yi - µ0)2] + (µ0 - µ)2 = σ02 + (µ0 - µ)2 . Collecting terms,

         E0 [(1/n)logL] = -(1/2)log2π - (1/2)logσ2 – 1/(2σ2)[ σ02 + (µ0 - µ)2]

To see where this is maximized, note first that the term (µ0 - µ)2 enters negatively as a quadratic, so the
maximizing value of µ is obviously µ0. Since this term is then zero, we can ignore it, and look for the σ2
that maximizes -(1/2)log2π - (1/2)logσ2 – σ02/(2σ2). The –1/2 is irrelevant as is the leading constant, so we
wish to minimize (after changing sign) logσ2 + σ02/σ2 with respect to σ2. Equating the first derivative to
zero produces 1/σ2 = σ02/(σ2)2 or σ2 = σ02, which gives us the result.




                                                                                                           89
9. For random sampling from the classical regression model in (17-3), reparameterize the likelihood
function in terms of η = 1/σ and δ = (1/σ)β. Find the maximum likelihood estimators of η and δ and
obtain the asymptotic covariance matrix of the estimators of these parameters.
         The log likelihood for the classical normal regression model is

         LogL = Σi -(1/2)[log2π + logσ2 + (1/σ2)(yi - xi′β)2]

If we reparameterize this in terms of η = 1/σ and δ = β/σ, then after a bit of manipulation,

         LogL = Σi -(1/2)[log2π - logη2 + (ηyi - xi′δ)2]

The first order conditions for maximizing this with respect to η and δ are

         ∂logL/∂η = n/η - Σi yi (ηyi - xi′δ) = 0

         ∂logL/∂δ =             Σi xi (ηyi - xi′δ) = 0

Solve the second equation for δ, which produces δ = η (X′X)-1X′y = η b. Insert this implicit solution
into the first equation to produce n/η = Σi yi (ηyi - ηxi′b). By taking η outside the summation and
multiplying the entire expression by η, we obtain n = η2 Σi yi (yi - xi′b) or η2 = n/[Σi yi (yi - xi′b)]. This is
an analytic solution for η that is only in terms of the data – b is a sample statistic. Inserting the square root
of this result into the solution for δ produces the second result we need. By pursuing this a bit further, you
canshow that the solution for η2 is just n/e′e from the original least squares regression, and the solution for
δ is just b times this solution for η. The second derivatives matrix is

         ∂2logL/∂η2 = -n/η2 - Σiyi2

         ∂2logL/∂δ ∂δ′ = -Σi xixi′

         ∂2logL/∂δ ∂η =      Σi xiyi.

We’ll obtain the expectations conditioned on X. E[yi|xi] is xi′β from the original model, which equals
xi′δ/η. E[yi2|xi] = 1/η2 (δ′xi)2 + 1/η2. (The cross term has expectation zero.) Summing over observations
and collecting terms, we have, conditioned on X,

         E[∂2logL/∂η2|X] = -2n/η2 - (1/η2)δ′X′Xδ

         E[∂2logL/∂δ ∂δ′|X] = -X′X

         E[∂2logL/∂δ ∂η|X] =        (1/η)X′Xδ

The negative inverse of the matrix of expected second derivatives is

                                                                         −1
                                 X'X              −(1/ η ) X ' Xδ 
          Asy.Var[d, h] =                                           
                                                    2
                           −(1/ η )δ ' X ' X (1/ η )[2n + δX ' Xδ 

(The off diagonal term does not vanish here as it does in the original parameterization.)


10. Section 14.3.1 presents estimates of a Cobb-Douglas cost function using Nerlove’s 1955 data on the
U.S. electric power industry. Christensen and Greene’s 1976 update of this study used 1970 data for this
industry. The Christensen and Greene data are given in Table F5.2. These data have provided a standard



                                                                                                             90
test data set for estimating different forms of production and cost functions, including the stochastic
frontier model examined in Example 17.5. It has been suggested that one explanation for the apparent
finding of economies of scale in these data is that the smaller firms were inefficient for other reasons. The
stochastic frontier might allow one to disentangle these effects. Use these data to fit a frontier cost function
which includes a quadratic term in log output in addition to the linear term and the factor prices. Then
examine the estimated Jondrow et al. residuals to see if they do indeed vary negatively with output, as
suggested. (This will require either some programming on your part or specialized software. The
stochastic frontier model is provided as an option in TSP and LIMDEP. Or, the likelihood function can be
programmed fairly easily for RATS or GAUSS. Note, for a cost frontier as opposed to a production
frontier, it is necessary to reverse the sign on the argument in the Φ function.)
          We used LIMDEP to fit the cost frontier. The dependent variable is log(Cost/Pfuel). The
regressors are a constant, log(Pcapital/Pfuel), log(Plabor/Pfuel), logQ and log2Q. The Jondrow measure
was then computed and plotted against output. There does not appear to be any relationship, though the
weak relationship such as it is, is indeed, negative.
+---------------------------------------------+
| Limited Dependent Variable Model - FRONTIER |
| Dependent variable                   LCF     |
| Number of observations               123     |
| Log likelihood function         66.86502     |
| Variances: Sigma-squared(v)=        .01185   |
|             Sigma-squared(u)=       .02233   |
|             Sigma(v)        =       .10884   |
|             Sigma(u)        =       .14944   |
| Sigma = Sqr[(s^2(u)+s^2(v)]=        .18488   |
| Stochastic Cost Frontier, e=v+u.             |
+---------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
           Primary Index Equation for Model
  Constant    -7.494211759       .30737742 -24.381   .0000
  LPK       .5531289074E-01 .70211904E-01      .788  .4308     .88666047
  LPL          .2605889758   .67708437E-01    3.849  .0001     5.5808828
  LQ           .4109789313   .29495035E-01   13.934  .0000     8.1794715
  LQ2       .6058235980E-01 .43732083E-02    13.853  .0000     35.112527
           Variance parameters for compound error
  Lambda       1.373117163       .33353523    4.117  .0000
  Sigma        .1848750589   .28257115E-01    6.543  .0000




                       .40




                       .30
             COSTEFF




                       .20




                       .10




                       .00
                             0   15000        30000        45000        60000        75000

                                                      Q




                                                                                                            91
11. Consider, sampling from a multivariate normal distribution with mean vector µ = (µ1, µ2, . . . , µM) and
covariance matrix σ2I. The log likelihood function is
                  − nM           nM           1 n
         ln L =
                    2
                       ln(2π ) −
                                  2
                                    ln σ 2 −      ∑ (y i − µ )′(y i − µ ).
                                             2σ 2 i =1
Show that the maximum likelihood estimates of the parameters are
                            n   M

                        ∑∑ ( y − y   im        n,m   )2
                                                              1 M 1 n                     1 M 2
               σˆ ML
                  2
                     = i =1 m =1
                                     nM
                                                          =     ∑ ∑ im n,m M ∑
                                                              M m =1 n i =1
                                                                            ( y − y ) 2
                                                                                        =
                                                                                            m =1
                                                                                                 σˆ m .

Derive the second derivatives matrix and show that the asymptotic covariance matrix for the maximum
likelihood estimators is
                                −1
           ∂ 2 ln L     σ 2 I / n      0       
            −
            E           =                        .
            ∂θ ∂θ ′                 σ 4
                                  0     2    /( nM ) 
Suppose that we wished to test the hypothesis that the means of the M distributions were all equal. First,
we might have a particular value µ0 in mind. Show that the Wald statistic would be
                                          −1
                           σˆ 2                    n
         W = ( x − µ i )′ 
                        0
                                I  ( x − µ 0 i ), =  2  ( x − µ 0 i )′( x − µ 0 i ),
                           n                       s 
where x is the vector of sample means.
          The first derivatives of the log likelihood function are ∂logL/∂µ = -(1/2σ2) Σi -2(yi - µ). Equating
this to zero produces the vector of means for the estimator of µ. The first derivative with respect to σ2 is

∂logL/∂σ2 = -nM/(2σ2) + 1/(2σ4)Σi (yi - µ)′(yi - µ). Each term in the sum is Σm (yim - µm)2. We already
deduced that the estimators of µm are the sample means. Inserting these in the solution for σ2 and solving
the likelihood equation produces the solution given in the problem. The second derivatives of the log
likelihood are

∂2logL/∂µ∂µ′ = (1/σ2)Σ i -I

∂2logL/∂µ∂σ2 = (1/2σ4) Σi -2(yi - µ)

∂2logL/∂σ2∂σ2 = nM/(2σ4) - 1/σ6 Σi (yi - µ)′(yi - µ)

The expected value of the first term is (-n/σ2)I. The second term has expectation zero. Each term in the
summation in the third term has expectation Mσ2, so the summation has expected value nMσ2. Adding
gives the expectation for the third term of -nM/(2σ4). Assembling these in a block diagonal matrix, then
taking the negative inverse produces the result given earlier.
         For the Wald test, the restriction is

         H0: µ - µ0i = 0.

The unrestricted estimator of µ is x . The variance of x is given above, so the Wald statistic is simply
( x - µ0i )′ Var[( x - µ0i )]-1( x - µ0i ). Inserting the covariance matrix given above produces the suggested
statistic.




                                                                                                          92
Chapter 18


The Generalized Method of Moments
1. For the normal distribution µ2k = σ 2k(2k)!/(k!2k) and µ2k+1 = 0, k = 0, 1, . . . . Use this result to analyze
the two estimators
                  m3            m
           b1 =    3/ 2
                        and b2 = 42 .
                  m2            m2

where mk = 1n Σi =1 ( xi − x ) . The following result will be useful:
                  n             k



         Asy.Cov[ nm j , nmk ] = µ j + k − µ j µ k + jk µ 2 µ j −1µ k −1 − j µ j −1µ k +1 − k µ k −1µ j +1.
Use the delta method to obtain the asymptotic variances and covariance of these two functions assuming
the data are drawn from a normal distribution with mean µ and variance σ2. (Hint: Under the assumptions,
the sample mean is a consistent estimator of µ, so for purposes of deriving asymptotic results, the
difference between x and µ may be ignored. As such, no generality is lost by assuming the mean is zero,
and proceeding from there. Obtain V, the 3×3 covariance matrix for the three moments, then use the delta
method to show that the covariance matrix for the two estimators is
                              6 0 
                      JVJ ′ =      
                              0 24 
    where J is the 2×3 matrix of derivatives.
       The elements of J are

          ∂ b1                 −5 / 2      ∂ b1    −3/ 2     ∂ b1
               = m3 ( −3 / 2) m2                = m2              =0
          ∂m2                              ∂m3               ∂m4
          ∂b2             −3        ∂b2    ∂b2    −2
              = m4 ( −2) m2             =0     = m2
          ∂m2                       ∂m3    ∂m4
Using the formula given for the moments, we obtain, µ2 = σ2, µ3 = 0, µ4 = 3σ4. Insert these in the
derivatives above to obtain
                                    
                  0      σ −3     0 
         J=                           .
                   −2               
               −6σ        0    σ −4 
Since the rows of J are orthogonal, we know that the off diagonal term in JVJ′ will be zero, which
simplifies things a bit. Taking the parts directly, we can see that the asymptotic variance of b1 will be σ-6
Asy.Var[m3], which will be
         Asy.Var[ b1 ] = σ-6(µ6 - µ32 + 9µ23 - 3µ2µ4 - 3µ2µ4).
The parts needed, using the general result given earlier, are µ6 = 15σ6, µ3 = 0, µ2 = σ2, µ4 = 3σ4. Inserting
these in the parentheses and multiplying it out and collecting terms produces the upper left element of JVJ′
equal to 6, which is the desired result. The lower right element will be
          Asy.Var[b2] = 36σ-4 Asy.Var[m2] + σ-8Asy.Var[m4] - 2(6)σ-6Asy.Cov[m2,m4].
The needed parts are
          Asy.Var[m2] = 2σ4



                                                                                                              93
         Asy.Var[m4] = µ8 - µ42 = 105σ8 - (3σ4)2
         Asy.Cov[m2,m4] = µ6 - µ2µ4 = 15σ6 - σ2(3σ4).
Inserting these parts in the expansion, multiplying it out and collecting terms produces the lower right
element equal to 24, as expected.

2. Using the results in Example 18.7, estimate the asymptotic covariance matrix of the method of moments
estimators of P and λ based on m1′ and m2′ . [Note: You will need to use the data in Example C.1 to
estimate V.]
         The necessary data are given in Examples 18.5 and 18.7. The two moments are m1′ =31.278 and
m2′ . =1453.96. Based on the theoretical results m1′ = P/λ and m2′ = P(P+1)/λ2, the solutions are P =
µ1′2/(µ2′ - µ1′2) and λ = µ1′/(µ2′ - µ1′2). Using the sample moments produces estimates P = 2.05682 and λ =
0.065759. The matrix of derivatives is
                ∂µ1 '/ ∂P ∂µ1 '/ ∂λ   1/ λ               −P / λ2
                                                                              
                                                                              =  15.207  −475.648 
          G=                         =                                                            .
                                                                             
               ∂µ 2 '/ ∂P ∂µ 2 '/ ∂λ  (2 P +1) / λ 2   −2 P ( P +1) / λ 3  1,182.551 −44,221.20 
The covariance matrix for the moments is given in Example 18.7;
          1     25.0339 2313.4163
             Φ=                    
          20    2313.4163 228047.8 
The estimated asymptotic covariance matrix for the two estimators is
                    .003752 .0084037 
(1/20)[G′Φ-1G]-1 =
                   .0084037 .266831  so the two standard errors for the estimators of λ and P are
0.01937 and 0.51656, respectively.

3. Exponential Families of Distributions) For each of the following distributions, determine whether it
is an exponential family by examining the log likelihood function. Then, identify the sufficient statistics.
         a. Normal distribution with mean µ and variance σ2.
         b. The Weibull distribution in Exercise 4 in Chapter 17.
         c. The mixture distribution in Exercise 3 in Chapter 17.
         a. The log likelihood for sampling from the normal distribution is

         logL = (-1/2)[nlog2π + nlogσ2 + (1/σ2)Σi (xi - µ)2]

write the summation in the last term as Σxi2 + nµ2 - 2µΣixi. Thus, it is clear that the log likelihood is of the
form for an exponential family, and the sufficient statistics are the sum and sum of squares of the
observations.
         b. The log of the density for the Weibull distribution is

         logf(x) = logα + logβ + (β-1)logxi - αΣi xiβ.

The log likelihood is found by summing these functions. The third term does not factor in the fashion
needed to produce an exponential family. There are no sufficient statistics for this distribution.
        c. The log of the density for the mixture distribution is

         logf(x,y) = logθ - (β+θ)yi + xilogβ + xilogyi - log(x!)

This is an exponential family; the sufficient statistics are Σiyi and Σixi..

4. In the classical regression model with heteroscedasticity, which is more efficient, ordinary least squares
or GMM? Obtain the two estimators and their respective asymptotic covariance matrices, then prove your
assertion.




                                                                                                            94
         The question is (deliberately) misleading. We showed in Chapter 11 that in the classical
regression model with heteroscedasticity, the OLS estimator is the GMM estimator. The asymptotic
covariance matrix of the OLS estimator is given in Section 11.2. The estimator of the asymptotic
covariance matrices are s2(X′X)-1 for OLS and the White estimator for GMM.

5. Consider the probit model analyzed in Section 17.8. The model states that for given vector of
independent variables,

                Prob[ yi = 1| xi ] = Φ[x′i β ], Prob[yi = 0 | xi ] = 1 − Prob[ yi = 1| xi ].
We have considered maximum likelihood estimation of the parameters of this model at several points.
Consider, instead, a GMM estimator based on the result that

                                            E[ yi | xi ] = Φ (x′i β )
This suggests that we might base estimation on the orthogonality conditions

                                        E ( yi − Φ (x′i β ) ) xi  = 0
Construct a GMM estimator based on these results. Note that this is not the nonlinear least squares
estimator. Explain – what would the orthogonality conditions be for nonlinear least squares estimation of
this model?
         The GMM estimator would be chosen to minimize the criterion

        q = n m′Wm

where W is the weighting matrix and m is the empirical moment,

        m = (1/n)Σi (yi - Φ(xi′β))xi

For the first pass, we’ll use W = I and just minimize the sumof squares. This provides an initial set of
estimates that can be used to compute the optimal weighting matrix. With this first round estimate, we
compute

        W = [(1/n2) Σi (yi - Φ(xi′β))2 xi xi′]-1

then return to the optimization problem to find the optimal estimator. The asymptotic covariance matrix is
computed from the first order conditions for the optimization. The matrix of derivatives is

        G = ∂m/∂β′ = (1/n)Σi -φ(xi′β)xixi′

The estimator of the asymptotic covariance matrix will be

        V = (1/n)[G′WG]-1

6. Consider GMM estimation of a regression model as shown at the beginning of Example 18.8. Let W1
be the optimal weighting matrix based on the moment equations. Let W2 be some other positive definite
matrix. Compare the asymptotic covariance matrices of the two proposed estimators. Show conclusively
that the asymptotic covariance matrix of the estimator based on W1 is not larger than that based on W2.
          This is the comparison between (18-12) and (18-11). The proof can be done by comparing the
inverses of the two covariance matrices.




                                                                                                      95
7. Suppose in a sample of 500 observations from a normal distribution with mean µ and standard deviation σ,
you are told that 35% of the observations are less than 2.1 and 55% of the observations are less than 3.6.
Estimate µ and σ.
         If 35% of the observations are less than 2.1, we would infer that
                  Φ[(2.1 - µ)/σ] = .35, or (2.1 - µ)/σ = -.385 ⇒ 2.1 - µ = -.385σ.
Likewise,         Φ[(3.6 - µ)/σ] = .55, or (3.6 - µ)/σ = .126 ⇒ 3.6 - µ = .126σ.
                     ∧                 ∧
The joint solution is µ = 3.2301 and σ = 2.9354. It might not seem obvious, but we can also derive asymptotic
standard errors for these estimates by constructing them as method of moments estimators. Observe, first, that
the two estimates are based on moment estimators of the probabilities. Let xi denote one of the 500
observations drawn from the normal distribution. Then, the two proportions are obtained as follows: Let
zi(2.1) = 1[xi < 2.1] and zi(3.6) = 1[xi < 3.6] be indicator functions. Then, the proportion of 35% has been
obtained as z (2.1) and .55 is z (3.6). So, the two proportions are simply the means of functions of the sample
observations. Each zi is a draw from a Bernoulli distribution with success probability π(2.1) = Φ((2.1-µ)/σ)
for zi(2.1) and π(3.6) = Φ((3.6-µ)/σ) for zi(3.6). Therefore, E[ z (2.1)] = π(2.1), and E[ z (3.6)] = π(3.6). The
variances in each case are Var[ z (.)] = 1/n[π(.)(1-π(.))]. The covariance of the two sample means is a bit
trickier, but we can deduce it from the results of random sampling. Cov[ z (2.1), z (3.6)]]
= 1/n Cov[zi(2.1),zi(3.6)], and, since in random sampling sample moments will converge to their population
                  Cov[zi(2.1),zi(3.6)] = plim [{(1/n) ∑i =1 z i(2.1)zi(3.6)} - π(2.1)π(3.6)]. But, zi(2.1)zi(3.6)
                                                          n
counterparts,
must equal [zi(2.1)]2 which, in turn, equals zi(2.1). It follows, then, that
Cov[zi(2.1),zi(3.6)] = π(2.1)[1 - π(3.6)]. Therefore, the asymptotic covariance matrix for the two sample
                                                  1  π(2.1)(1 − π(2.1)) π(2.1)(1 − π(3.6)) 
proportions is Asy.Var[ p(2.1), p(3.6)] = Σ =                                                . If we insert our
                                                  n π(2.1)(1 − π(3.6)) π(3.6)(1 − π(3.6)) 
                                                                     0.000455 0.000315
sample estimates, we obtain Est . Asy.Var[ p( 2.1), p( 3.6)] = S =                    . Now, ultimately, our
                                                                     0.000315 0.000495
estimates of µ and σ are found as functions of p(2.1) and p(3.6), using the method of moments. The moment
equations are
                                   1 n                      2.1 − µ 
                            m2.1 =  ∑i = 1 zi ( 2.1)  - Φ              = 0,
                                   n                        σ 
                                   1 n                      3.6 − µ 
                            m3.6 =  ∑i =1 zi ( 3.6)  - Φ               = 0.
                                   n                        σ 
              ∂m2.1 / ∂µ ∂m2.1 / ∂σ 
Now, let Γ =                         and let G be the sample estimate of Γ. Then, the estimator of the
             ∂m3.6 / ∂µ ∂m3.61 / ∂σ 
                                   ∧   ∧
asymptotic covariance matrix of ( µ , σ ) is [GS-1G′]-1. The remaining detail is the derivatives, which are just
∂m2.1/∂µ = (1/σ)φ((2.1-µ)/σ) and ∂m2.1/∂σ = (2.1-µ)/σ[∂m2.1/∂σ] and likewise for m3.6. Inserting our sample
                           0.37046 − 014259
                                          .     
estimates produces G =                          . Finally, multiplying the matrices and computing the
                            0.39579   0.04987  
                                                . 178 − 012492
                                             010          .      
necessary inverses produces [GS-1G′]-1 =                          . The asymptotic distribution would be
                                             − 012
                                                 .  492 016973
                                                         .        
normal, as usual. Based on these results, a 95% confidence interval for µ would be 3.2301 ± 1.96(.10178)2 =
2.6048 to 3.8554.




                                                                                                              96
Chapter 19


Models with Lagged Variables
1. Obtain the mean lag and the long and short run multipliers for the following distributed lag models.
         (a) yt = .55[.02xt + .15xt-1 + .43xt-2 + .23xt-3 + .17xt-4] + εt.
         (b) The model in Exercise 5.
         (6) The model in Exercise 8. (Do for either x or z.)
         For the first, the mean lag is .55(.02)(0) + .55(.15)(1) + ... + .55(.17)(4) = 1.31 periods. The impact
multiplier is .55(.02) = .011 while the long run multiplier is the sum of the coefficients, .55.
         For the second, the coefficient on xt is .6, so this is the impact multiplier. The mean lag is found by
applying (18-9) to B(L) = [.6 + 2L]/[1 - .6L + .5L2] = A(L)/D(L). Then, B′(1)/B(1) =
{[D(1)A′(1) - A(1)D′(1)]/[D(1)]2} / [A(1)/D(1)] = A′(1)/A(1) - D′(1)/D(1) = (2/2.6) / (.4/.9) = 1.731 periods.
The long run multiplier is B(1) = 2.6/.9 = 2.888 periods.
         For the third, since we are interested only in the coefficients on xt, write the model as
yt = α + βxt[1 + γL + γ2L2 + ...] + δzt* + ut. The lag coefficients on xt are simply β times powers of γ.

2. Explain how to estimate the parameters of the following model:
                             yt = α + βxt + γyt-1 + δyt-2 + εt, εt = ρεt-1 + ut.
Is there any problem with ordinary least squares? Using the method you have described, fit the model above
to the data in Table F5.1. Report your results.
          Because the model has both lagged dependent variables and autocorrelated disturbances, ordinary
least squares will be inconsistent. Consistent estimates could be obtained by the method of instrumental
variables. We can use xt-1 and xt-2 as the instruments for yt-1 and yt-2. Efficient estimates can be obtained by a
two step procedure. We write the model as yt - ρyt-1 = α(1-ρ) + β(xt - ρxt-1) + γ(yt-1 - ρyt-2) + δ(yt-2 - ρyt-3) + ut.
With a consistent estimator of ρ, we could use FGLS. The residuals from the IV estimator can be used to
estimate ρ. Then OLS using the transformed data is asymptotically equivalent to GLS. The method of
Hatanaka discussed in the text is another possibility.
          Using the real consumption and real disposable income data in Table F5.1, we obtain the following
results: Estimated standard errors are shown in parentheses. (The estimated autocorrelation based on the IV
estimates is .9172.) All three sets of estimates are based on the last 201 observations, 1950.4 to 2000.4
                    OLS                IV                  2 Step FGLS
          ∧
          α        -1.4946             -64.5073            -4.6614
                   (3.8291)            (46.1075)           (3.2041)
          ∧
          β        .007569             .7003               .3477
                   (.001662)           (.4910)             (.0432)
          ∧
          γ        1.1977              .5726               .2332
                   (.006921)           (.9043)             (.05933)
          ∧
          δ        -0.1988             -.3324              .4072
                   (.07109)            (.4962)             (.05500)

3. Show how to estimate a polynomial distributed lag model with lags of 6 periods and a third order
polynomial using restricted least squares.
        Using (18-22), we would regress yt on a constant, xt, xt-1, ..., xt-6. Constrained least squares using
                            1 -5 10 -10 5 -1 0 0                      0
                  R =       0 1 -5 10 -10 5 -1 0 ,            q = 0
                            0 0 1 -5 10 -10 5 -1                       0
would produce the PDL estimates.



                                                                                                                   97
4. Expand the rational lag model yt = {[.6 + 2L]/[1 - .6L + .5L2]} xt + εt.
What are the coefficients on xt, xt-1, xt-2, xt-3, and xt-4?
          The ratio of polynomials will equal B(L) = [.6 + 2L]/[1 - .6L + .5L2]. This will expand to
B(L) = β0 + β1L + β2L2 + .... Multiply both sides of the equation by (1 - .6L + .5L2) to obtain
(β0 + β1L + β2L2 + ....)(1 - .6L + .5L2) = .6 + 2L. Since the two sides must be equal, it follows that
β0 = .6 (the only term not involving L) -.6β0 + β1 = 2 (the only term involving only L. Therefore, β1 = 2.36.
All remaining terms, involving L2, L3, ... must equal zero. Therefore, βj - .6βj-1 + .5βj-2 = 0 for all j > 1, or βj
= .6βj-1 - .5βj-2. This provides a recursion for all remaining coefficients. For the specified coefficients, β2 =
.6(2.36) - .5(.3) = 1.266. β3 = .6(1.266) - .5(2.36) = -.4204, β4 = .6(-.4204) - .5(1.266) = -.88524 and so
on.

5. Suppose the model of Exercise 4 were respecified as
                   yt = α + {[β + γL]/[1 + δ1L + δ2L2]} xt + εt.
Describe a method of estimating the parameters. Is ordinary least squares consistent?
         By multiplying through by the denominator of the lag function, we obtain an autoregressive form
                   yt       = α(1+δ1+δ2) + βxt + γxt-1 - δ1yt-1 - δ2yt-2 + εt + δ1εt-1 + δ2εt-2
                            = α(1+δ1+δ2) + βxt + γxt-1 - δ1yt-1 - δ2yt-2 + vt
The model cannot be estimated consistently by ordinary least squares because there is autocorrelation in the
presence of a lagged dependent variable. There are two approaches possible. Nonlinear least squares could
be applied to the moving average (distributed lag) form. This would be fairly complicated, though a method
of doing so is described by Maddala and Rao (1973). A much simpler approach would be to estimate the
model in the autoregressive form using an instrumental variables estimator. The lagged variables xt-2 and xt-3
can be used for the lagged dependent variables.

6. Describe how to estimate the parameters of the model yt = α + βxt/(1 - γL) + δzt(1 - φL) + εt where
εt is a serially uncorrelated, homoscedastic classical disturbance.
           The model can be estimated as an autoregressive or distributed lag equation. Consider, first, the
autoregressive form. Multiply through by (1 - γL)(1 - φL) to obtain
           yt = α(1-γ)(1-φ) + βxt - (βφ)xt-1 + δzt - (δγ)zt-1 + (γ + φ)yt-1 - (γφ)yt-2 + εt -(γ+φ)εt-1 + (γφ)εt-2.
Clearly, the model cannot be estimated by ordinary least squares, since there is an autocorrelated disturbance
and a lagged dependent variable. The parameters can be estimated consistently, but inefficiently by linear
instrumental variables. The inefficiency arises from the fact that the parameters are overidentified. The linear
estimator estimates seven functions of the five underlying parameters. One possibility is a GMM estimator.
Let vt = εt -(γ+φ)εt-1 + (γφ)εt-2. Then, a GMM estimator can be defined in terms of, say, a set of moment
equations of the form E[vtwt] = 0, where wt is current and lagged values of x and z. A minimum distance
estimator could then be used for estimation.
           The distributed lag approach might be taken, instead. Each of the two regressors produces a
recursions xt* = xt + γxt-1* and zt* = zt + γzt-1*. Thus, values of the moving average regressors can be built
up recursively. Note that the model is linear in 1, xt*, and zt*. Therefore, an approach is to search a grid of
values of (γ,φ) to minimize the sum of squares.




                                                                                                                98
7. We are interested in the long run multiplier in the model
                      6
          yt = α + ∑ β j xt − j + ε t
                     j =0
Assume that xt is an autoregressive series, xt = rxt-1 + vt where |r| < 1.
a. What is the long run multiplier in this model?
b. How would you estimate the long run multiplier in this model?
c. Suppose you that the preceding is the true model but you linearly regress yt
    only on a constant and the first 5 lags of xt. How does this affect your
    estimate of the long run multiplier?
d. Same as c. for 4 lags instead of 5.
e. Using the macroeconomic data in Appendix F5.1, let yt be the log of real investment and xt be the log of
real output. Carry out the computations suggested and report your findings. Specifically, how does the
omission of a lagged value affect estimates of the short run and long run multipliers in the unrestricted lag
model.
            The long run multiplier is β0 + β1 + ... + β6. The model is a classical regression, so it can be
estimated by ordinary least squares. The estimator of the long run multiplier would be the sum of the least
squares coefficients. If the sixth lag is omitted, then the standard omitted variable result applies, and all the
coefficients are biased. The orthogonality result needed to remove the bias explicitly fails here, since xt is
an AR(1) process. All the lags are correlated. Since the form of the relationship is, in fact, known, we can
derive the omitted variable formula. In particular, by construction, xt will have mean zero. By implication,
yt will also, so we lose nothing by assuming that the constant term is zero. To save some cumbersome
algebra, we’ll also assume with no loss of generality that the unconditional variance of xt is 1. Let X1 =
[xt,xt-1,...,xt-5] and X2 = xt-6. Then, for the regression of y on X1, we have by the omitted variable formula,
                                                              −1
  b0        β0   1         r       r2   r3   r4   r5         r 6 
  b        β                                                  5
   1        1  r           1       r    r2   r3   r4         r 
  b         β  r 2         r       1    r    r2   r3         r 4 
E  2 | X1  =  2  +  3                                         3  β6
   b3       β3   r         r2      r    1    r    r2         r 
  b4        β4  r 4        r3      r2   r    1    r          r 2 
              5                                               
  b5       β 5   r    r4      r3   r2   r    1          r 
We can derive a formal solution to the bias in this estimator. Note that the column that is to the right of the
inverse matrix is r times the last column matrix. Therefore, the matrix product is r times the last column of
an identity matrix. This gives us the complete result,
  b0        β 0  0 
  b         β  0 
   1        1  
  b         β  0 
E  2 | X1  =  2  +   β6 .
   b3       β 3  0 
  b4        β 4  0 
              
  b5       β 5   r 
Therefore, the first 5 coefficients are unbiased, and the last one is an estimator of β5 + rβ6. Adding these
up, we see that when the last lag is omitted from the model, the estimator of the long run multiplier is
biased downware by (1-r)β6. For part d, we will use a similar construction. But, now there are five
variables in X1 and xt-5 and xt-6 in X2. The same kind of computation will show that the first four
coefficients are unbiased while the fifth now estimates β4 + rβ5 + r2β6. The long run multiplier is estimated
with downward bias equal to (1-r)β5 + (1-r2)β6.




                                                                                                             99
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 XT            .9726595701       1.9258818    .505   .6141     8.3384522
 XT1           .7709686332       3.1555811    .244   .8072     8.3301663
 XT2           .5450409860       3.1761465    .172   .8639     8.3218191
 XT3          -.6061007409       3.1903388   -.190   .8495     8.3134324
 XT4          -.2272352746       3.1729930   -.072   .9430     8.3050260
 XT5          -1.916555094       3.1414210   -.610   .5425     8.2964570
 XT6           1.218771893       1.8814874    .648   .5179     8.2878393
Matrix LRM        has 1 rows and 1 columns.
                1
         +--------------
        1|      .7575
 XT            1.101551478       1.9126777    .576   .5653     8.3384522
 XT1           .6941982792       3.1485851    .220   .8257     8.3301663
 XT2           .5287939572       3.1712435    .167   .8677     8.3218191
 XT3          -.7300170198       3.1797815   -.230   .8187     8.3134324
 XT4          -.5552651191       3.1275848   -.178   .8593     8.3050260
 XT5          -.2826674399       1.8697065   -.151   .8800     8.2964570
Matrix LRM        has 1 rows and 1 columns.
                1
         +--------------
        1|      .7566
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 XT            1.077633667       1.9012923    .567   .5715     8.3384522
 XT1           .7070443138       3.1394606    .225   .8221     8.3301663
 XT2           .5633400685       3.1549830    .179   .8585     8.3218191
 XT3          -.6608149939       3.1386871   -.211   .8335     8.3134324
 XT4          -.9304013056       1.8990464   -.490   .6247     8.3050260
Matrix LRM        has 1 rows and 1 columns.
                1
         +--------------
        1|      .7568
--> calc;list;cor(xt,xt1)$
     Result = .99978740920470700D+00
The results of the three suggested regressions are shown above. We used observations 7 - 204 of the
logged real investment and real GDP data in deviations from the means for all regressions. Note that
although there are some large changes in the estimated individual parameters, the long run multiplier is
almost identical in all cases. Looking at the analytical results we can see why this would be the case. The
correlation between current and lagged log gdp is r = 0.9998. Therefore, the biases that we found, (1-r)β6
and (1-r)β5 + (1-r2)β6 are trivial.




                                                                                                       100
Chapter 20


Time Series Models
1. Find the autocorrelations and partial autocorrelations for the MA(2) process
εt = vt - θ1vt-1 - θ2vt-2.

         The autocorrelations are simple to obtain just by multiplying out vt2, vtvt-1 and so on. The
autocovariances are 1+θ12 + θ22, -θ2(1 - θ2), -θ2, 0, 0, 0... which provides the autocorrelations by division
by the first of these. The partial autocorrelations are messy, and can be obtained by the Yule Walker
equations. Alternatively (and much more simply), we can make use of the observation on page 615 that
the partial autocorrelations for the MA(2) process mirror tha autocorrelations for an AR(2). Thus, the
results on page 615 for the AR(2) can be used directly.

2. Carry out the ADF test for a unit root in the bond yield data of Example 20.1.
        The regression results are shown below. We fit the regression using a constant, a time trend, the
lagged dependent variable and three lagged first differences. The coefficient on “R1” is used for the test.
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = R        Mean=   8.212678571    , S.D.=   .7762719558     |
| Model size: Observations =      56, Parameters =   6, Deg.Fr.=     50 |
| Residuals: Sum of squares= .9651001703     , Std.Dev.=         .13893 |
| Fit:        R-squared= .970881, Adjusted R-squared =           .96797 |
| Model test: F[ 5,      50] = 333.41,     Prob value =          .00000 |
| Diagnostic: Log-L =     34.2439, Restricted(b=0) Log-L =     -64.7739 |
|             LogAmemiyaPrCrt.=   -3.846, Akaike Info. Crt.=     -1.009 |
| Autocorrel: Durbin-Watson Statistic =   1.91589,   Rho =       .04205 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     .2565690959       .47172815     .544   .5889
 T         .4401352136E-03 .25092142E-02      .175   .8615     32.500000
 R1           .9653227410   .48183346E-01   20.034   .0000     8.2305357
 DR1          .5600009441       .14342088    3.905   .0003 -.12321429E-01
 DR2         -.1739775168       .14781417   -1.177   .2448 -.20535714E-01
 DR3      -.7792177815E-03      .11072916    -.007   .9944 -.11607143E-01
 (Note: E+nn or E-nn means multiply by 10 to + or -nn power.)

--> wald;fn1=b_r1-1$
+-----------------------------------------------+
| WALD procedure. Estimates and standard errors |
| for nonlinear functions and joint test of     |
| nonlinear restrictions.                       |
| Wald Statistic             =       .51796     |
| Prob. from Chi-squared[ 1] =       .47171     |
+-----------------------------------------------+
+---------+--------------+----------------+--------+---------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] |
+---------+--------------+----------------+--------+---------+
 Fncn(1) -.3467725900E-01 .48183346E-01      -.720   .4717
Unit root hypothesis is definitely not rejected.




                                                                                                        101
3. Using the macroeconomic data in Appendix Table F5.1, estimate by least squares the parameters of the
model
                                   ct = β0 + β1yt + β2ct-1 + β3ct-2 + εt,

    where ct is the log of real consumption and yt is the log of real disposable income.
a. Use the Breusch and Pagan test to examine the residuals for autocorrelation.
b. Is the estimated equation stable? What is the characteristic equation for the autoregressive part of this
model? What are the roots of the characteristic equation, using your estimated parameters?
c. What is your implied estimate of the short run (impact) multiplier for change in yt on ct? Compute the
estimated long run multiplier.
--> samp;1-204$
--> crea;c=log(realcons);y=log(realdpi)$
--> crea;c1=c[-1];c2=c[-2]$
--> samp;3-204$
--> regr;lhs=c;rhs=one,y,c1,c2$
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = C        Mean=   7.889033683    , S.D.=   .5102401315     |
| Model size: Observations =     202, Parameters =   4, Deg.Fr.=    198 |
| Residuals: Sum of squares= .1519097328E-01, Std.Dev.=          .00876 |
| Fit:        R-squared= .999710, Adjusted R-squared =           .99971 |
| Model test: F[ 3,     198] =********,    Prob value =          .00000 |
| Diagnostic: Log-L =    672.4019, Restricted(b=0) Log-L =    -150.2038 |
|             LogAmemiyaPrCrt.=   -9.456, Akaike Info. Crt.=     -6.618 |
| Autocorrel: Durbin-Watson Statistic =   1.89384,   Rho =       .05308 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant .8165780259E-03 .10779352E-01       .076   .9397
 Y         .7869591065E-01 .29020268E-01     2.712   .0073     7.9998985
 C1           .9680839747   .72732869E-01   13.310   .0000     7.8802520
 C2       -.4701660339E-01 .70076193E-01     -.671   .5030     7.8714299
--> crea;e1=e[-1];e2=e[-3];e3=e[-3]$
--> crea;e1=e[-1];e2=e[-2];e3=e[-3]$
--> regr;lhs=e;rhs=one,e1,e2,e3$
+-----------------------------------------------------------------------+
| Ordinary    least squares regression    Weighting variable = none     |
| Dep. var. = E        Mean= -.6947138134E-15, S.D.=    .8693502258E-02 |
| Model size: Observations =     202, Parameters =   4, Deg.Fr.=    198 |
| Residuals: Sum of squares= .1339943625E-01, Std.Dev.=          .00823 |
| Fit:        R-squared= .117934, Adjusted R-squared =           .10457 |
| Model test: F[ 3,     198] =    8.82,    Prob value =          .00002 |
| Diagnostic: Log-L =    685.0763, Restricted(b=0) Log-L =     672.4019 |
|             LogAmemiyaPrCrt.=   -9.581, Akaike Info. Crt.=     -6.743 |
| Autocorrel: Durbin-Watson Statistic =   1.85371,   Rho =       .07314 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant .2437121418E-04 .57884755E-03       .042   .9665
 E1       -.2553462753E-01 .70917392E-01     -.360   .7192 -.21497022E-04
 E2           .3385045374   .66904365E-01    5.060   .0000 -.56959898E-04
 E3        .6894158132E-01 .71101163E-01      .970   .3334 -.81793147E-04
--> calc;list;chisq=n*rsqrd$
    CHISQ   = .23822731697405480D+02
--> matrix ; g=[.968083974,-.04701660339];root(g)$
The two roots of the matrix of the characteristic equation are 1.0688 and 19.8378. Since the smallest is
larger than one, the equation is stable.
          The short run multiplier is β = .07869. Long run is β/(1-γ1 - γ2) = 12.669. (Not very plausible.)




                                                                                                          102
4. Verify the result in (20-10).
          The model is yt = µ + γ1yt-1 + γ2yt-2 + εt - θεt-1. Write the MA(1) disturbance as (1 - θL)εt where
L is the lag operator. Now, divide both sides of the equation by (1 - θL). This produces

         yt/(1 - θL) = µ/(1 - θL) + γ1yt-1/(1 - θL) + γ2yt-2/(1 - θL) + εt.

Recall 1/(1 - θL) = 1 + θL + θ2L2 + .... Multiply out all the terms and assemble the sums to obtain
                                     µ
          ∑ θy                          + γ 1 ∑ i =1θ i yt −i + γ 2 ∑ i = 2θ i yt −i + ε t
              ∞                                 ∞                     ∞
                     i
                         t −i   =
              i =0
                                    1−θ
By expanding the sums and collecting the term in the respective lags of yt, we find the coefficients for the
first several lags are (γ1 - θ) for lag 1, (γ1θ + γ2 - θ2) for lag 2, (γ1θ2 + γ2θ - θ3) for lag 3, and so on. This is
the pattern suggested in the text. The constant term is obvious, as given.

5. Show the Yule-Walker equations for an ARMA(1,1) process.
        These are given on page 616 of the text.

6. Carry out an ADF test for a unit root in the rate of inflation using the subset of
   the data in Table F5.1 since 1974I. (This is the first quarter after the oil shock of
   1973.)
         To carry out the test, the rate of inflation is regressed on a constant, a time trend, the previous
year’s value of the rate of inflation, and three lags of the first difference. The test statistic for the ADF is
(0.7290534455-1)/.011230759 = -2.373. The critical value in the lower part of Table 20.4 with about 100
observations is -3.45. Since our value is large than this, it follows that the hypothesis of a unit root cannot
be rejected.

--> samp;1-204$
--> crea;ddp1=infl[-1]-infl[-2]$
--> crea;ddp2=ddp1[-1]$
--> crea;ddp3=ddp1[-2]$
--> crea;dp=infl[-1]$
--> samp;97-204$
--> crea;t=trn(1,1)$
--> regr;lhs=infl;rhs=one,t,dp,ddp1,ddp2,ddp3$
+-----------------------------------------------------------------------+
| Ordinary     least squares regression      Weighting variable = none       |
| Dep. var. = INFL      Mean=    4.907672727     , S.D.=    3.617392978      |
| Model size: Observations =       108, Parameters =     6, Deg.Fr.=     102 |
| Residuals: Sum of squares= 608.5020156        , Std.Dev.=          2.44248 |
| Fit:         R-squared= .565403, Adjusted R-squared =               .54410 |
| Model test: F[ 5,      102] =    26.54,     Prob value =            .00000 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |t-ratio |P[|T|>t] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant      2.226039717        1.1342702     1.963    .0524
 T         -.1836785769E-01 .11230759E-01      -1.635    .1050     54.500000
 DP            .7290534455        .11419140     6.384    .0000     4.9830886
 DDP1         -.4744389916        .12707255    -3.734    .0003 -.58569323E-01
 DDP2         -.4273030624        .11563482    -3.695    .0004 -.46827528E-01
 DDP3         -.2248432703    .98954483E-01    -2.272    .0252 -.86558444E-02
--> wald;fn1=b_dp-1$
+---------+--------------+----------------+--------+---------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] |
+---------+--------------+----------------+--------+---------+
 Fncn(1)      -.2709465545        .11419140    -2.373    .0177




                                                                                                                 103
7. Estimate the parameters of the model in Example 15.1 using two stage least squares. Obtain the
residuals from the two equations. Do these residuals appear to be white noise series? Based on your
findings, what do you conclude about the specification of the model?
         The two stage least squares regressions are shown below. Box-Jenkins analyses of the residuals
shows fairly small, but significant autocorrelation of both sets of residuals. Thus, the specification may not
be quite complete. There may be missing lags or other variables.
--> samp;1-204$
--> crea;ct=realcons;yt=realgdp;gt=realgovt;rt=tbilrate$
--> crea;ct1=ct[-1];yt1=yt[-1]$
--> samp;2-204$
--> samp;1-204$
--> crea;ct=realcons;yt=realgdp;gt=realgovt;rt=tbilrate;it=realinvs$
--> crea;ct1=ct[-1];yt1=yt[-1]$
--> crea;dy=yt-yt1$
--> samp;2-204$
--> name;x=one,rt,ct1,yt1,gt$
--> 2sls;lhs=ct;rhs=one,yt,ct1;inst=x;res=ec$
--> 2sls;lhs=it;rhs=one,rt,dy;inst=x;res=ei$
--> iden;rhs=ec;pds=10$
--> iden;rhs=ei;pds=10$

+-----------------------------------------------------------------------+
| Two stage   least squares regression    Weighting variable = none     |
| Dep. var. = CT       Mean=   3008.995074    , S.D.=   1456.900152     |
| Model size: Observations =     203, Parameters =   3, Deg.Fr.=    200 |
| Residuals: Sum of squares= 96595.67529     , Std.Dev.=       21.97677 |
| Fit:        R-squared= .999771, Adjusted R-squared =           .99977 |
|             (Note: Not using OLS. R-squared is not bounded in [0,1] |
| Model test: F[ 2,     200] =********,    Prob value =          .00000 |
| Diagnostic: Log-L =   -913.8005, Restricted(b=0) Log-L =   -1766.2087 |
|             LogAmemiyaPrCrt.=    6.195, Akaike Info. Crt.=      9.033 |
| Autocorrel: Durbin-Watson Statistic =   1.61078,   Rho =       .19461 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant     6.666079115       8.6211817     .773   .4394
 YT       -.2932041745E-01 .35260653E-01     -.832   .4057     4577.1882
 CT1          1.051478712   .51482187E-01   20.424   .0000     2982.9744
 (Note: E+nn or E-nn means multiply by 10 to + or -nn power.)


+-----------------------------------------------------------------------+
| Two stage   least squares regression    Weighting variable = none     |
| Dep. var. = IT       Mean=   654.5295567    , S.D.=   391.3705005     |
| Model size: Observations =     203, Parameters =   3, Deg.Fr.=    200 |
| Residuals: Sum of squares= 54658669.31     , Std.Dev.=      522.77466 |
| Fit:        R-squared= -.793071, Adjusted R-squared =         -.81100 |
|             (Note: Not using OLS. R-squared is not bounded in [0,1] |
| Diagnostic: Log-L = -1557.1409, Restricted(b=0) Log-L =    -1499.3832 |
|             LogAmemiyaPrCrt.=   12.533, Akaike Info. Crt.=     15.371 |
| Autocorrel: Durbin-Watson Statistic =   1.49055,   Rho =       .25473 |
+-----------------------------------------------------------------------+
+---------+--------------+----------------+--------+---------+----------+
|Variable | Coefficient | Standard Error |b/St.Er.|P[|Z|>z] | Mean of X|
+---------+--------------+----------------+--------+---------+----------+
 Constant    -141.8297176       103.57113   -1.369   .1709
 RT           52.04340559       12.971223    4.012   .0001     5.2499007
 DY           13.80361384       1.7499250    7.888   .0000     37.898522




                                                                                                         104
Time series identification for EC
Box-Pierce Statistic =    40.8498      Box-Ljung Statistic =     41.7842
Degrees of freedom   =         10      Degrees of freedom   =         10
Significance level   =      .0000      Significance level   =      .0000
* => |coefficient| > 2/sqrt(N) or > 95% significant.
PACF is computed using Yule-Walker equations.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Lag | Autocorrelation Function      |Box/Prc|    Partial Autocorrelations   X
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  1 | .194*|           |**          | 7.65*| .194*|             |**         X
  2 | .264*|           |***         | 21.82*| .236*|            |***        X
  3 | .273*|           |***         | 36.93*| .207*|            |**         X
  4 | .067 |           |*           | 37.85*|-.063 |          * |           X
  5 | .054 |           |*           | 38.44*|-.068 |          * |           X
  6 | .073 |           |*           | 39.52*| .018 |            |*          X
  7 | .009 |           |*           | 39.53*| .003 |            |*          X
  8 |-.078 |          *|            | 40.78*|-.109 |          * |           X
  9 | .019 |           |*           | 40.85*| .023 |            |*          X
 10 | .002 |           |*           | 40.85*| .050 |            |*          X
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Time series identification for EI
Box-Pierce Statistic =    27.4753      Box-Ljung Statistic =     28.3566
Degrees of freedom   =         10      Degrees of freedom   =         10
Significance level   =      .0022      Significance level   =      .0016
* => |coefficient| > 2/sqrt(N) or > 95% significant.
PACF is computed using Yule-Walker equations.
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Lag | Autocorrelation Function      |Box/Prc|    Partial Autocorrelations   X
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  1 | .244*|           |***         | 12.13*| .244*|            |***        X
  2 | .143*|           |**          | 16.27*| .096 |            |*          X
  3 | .037 |           |*           | 16.55*|-.019 |          * |           X
  4 |-.001 |          *|            | 16.55*|-.017 |          * |           X
  5 |-.066 |          *|            | 17.42*|-.078 |          * |           X
  6 | .003 |           |*           | 17.43*| .043 |            |*          X
  7 |-.042 |          *|            | 17.79*|-.033 |          * |           X
  8 |-.107 |          *|            | 20.10*|-.107 |          * |           X
  9 | .108 |           |*           | 22.46*| .194*|            |**         X
 10 | .157*|           |**          | 27.48*| .142*|            |**         X
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




                                                                            105
Chapter 21
Models for Discrete Choice
1. A binomial probability model is to be based on the following index function model:
                                    y* = α + βd + ε
                                    y = 1 if y* > 0,
                                    y = 0 otherwise.
The only regressor, d, is a dummy variable. The data consist of 100 observations that have the following:
 d y 0 1
0 24 28 . Obtain the maximum likelihood estimators of α and β and estimate the asymptotic standard
1 32 26
errors of your estimates. Test the hypothesis that β equals zero by using a Wald test (asymptotic t test) and a
likelihood ratio test. Use the probit model and then repeat, using the logit model. Do your results change?
[Hint: Formulate the log-likelihood in terms of α and δ = α+β.]
          The log-likelihood is
lnL = Σ0,0lnProb[y=0,d=0] + Σ0,1lnProb[y=0,d=1] + Σ1,0lnProb[y=1,d=0] + Σ1,1lnProb[y=1,d=1]
where Σi,j indicates the sum over observations for which y = i and d = j. Since there are no other regressors,
this reduces to lnL = 24ln(1 - F(α)) + 32ln(1 - F(δ)) + 28lnF(α) + 16lnF(δ). Although it is straightforward to
maximize the log-likelihood directly in terms of α and δ, an alternative, convenient approach is to estimate
F(α) and F(δ). These functions can then be inverted to estimate the original parameters. The invariance of
maximum likelihood estimators to transformation will justify this approach. One virtue of this approach is
that the same procedure is used for both probit and logit models. Let A = F(α) and D = F(δ). Then, the log
likelihood is simply lnL = 24ln(1 - A) + 32ln(1 - D) + 28lnA + 16lnD. The necessary conditions are
                            ∂lnL/∂A = -24/(1 - A) + 28/A = 0
                            ∂lnL/∂D = -32/(1 - D) + 16/D = 0.
Simple manipulations produce the two solutions A = 28/(24+28) = .539 and D = 16/(32+16) = .333. Then,
                                                                         ∧              ∧              ∧
these functions can be inverted to produce the MLEs of α and β. Thus, α = F-1(A) and β = F-1(D) - α . The
two inverse functions are Φ-1(A) for the probit model, which must be approximated, and ln[F/(1-F)] for the
logit model. The estimates are,
                             Probit Logit
                  α        .098        .156
                  δ       -.431       -.694
                  β       -.529       -.850
 (Notice the proportionality relationship, .156/.098 = 1.592 and -.848/-.529 = 1.607.)
                                                                 ∧      ∧
         We will compute the asymptotic covariance matrix for α and β directly using (19-24) for the probit
model and (19-22) for the logit model. We will require hi = ∂2lnL/∂(α+βd)2 for the four cells. For the
computation, we will require φ(c)/Φ(c) and -φ(c)/[1-Φ(c)]. These are listed in the table below.
                               λ1 λ0
y    d    α+βd Φ φ φ/Φ -φ/(1-Φ) λ0λ1
0    0    .098 .539 .397 .737 -.861 -.636
1    0    .098 .539 .397 .737 -.861 -.636
0    1 -.431 .333 .364 1.093 -.546 -.597
1    1 -.431 .333 .364 1.093 -.546 -.597
The estimated asymptotic covariance matrix is the inverse of the estimate of -E[H].


  ∧            1 0            1 0            1 1            1 1
− H = 24(.636)     + 28(.636)     + 32(.597)     + 16(.597)    . Then,
               0 0            0 0            1 1            1 1



                                                                                                           106
       −1                      −1
  ∧         61728
                 .      28.656       .03024 −.03024 
  − H  = 28.656 28.656 = −.03024 .06513  . The asymptotic standard errors are the square roots
                                                       
of the diagonal elements, which are .1739 and .2552, respectively. To test the hypothesis that β = 0, we would
refer z = -.529 / .2552 = -2.073 to the standard normal table. This is larger than the 1.96 critical value, so we
would reject the hypothesis. To compute the likelihood ratio statistic, we will require the two log-likelihoods.
The restricted log-likelihood (for both the probit and logit models) is given in (19-28). This would be
lnL0 = 100[.44ln.44 + .56ln.56] = -68.593. Let the predicted values above be denoted
                     P00 = Prob[y=0,d=0] = .461 (i.e., 1 - .539)
                     P10 = Prob[y=1,d=0] = .539
                     P01 = Prob[y=0,d=1] = .667
                     P11 = Prob[y=0,d=1] = .333
and let nij equal the number of observations in each cell Then, the unrestricted log-likelihood is
lnL = 24ln.461 + 28ln.539 + 32ln.667 + 16ln.333 = -66.442. The likelihood ratio statistic would be
 λ = -2(-66.6442 - (-68.593)) = 4.302. The critical value from the chi-squared distribution with one degree
of freedom is 3.84, so once again, the test statistic is slightly larger than the table value.
          We now compute the Hessian for the logit model. The predicted probabilities are
                     Prob[y = 0 , d = 0] = P00 = 1/(1 + e.156)        = .462
                     Prob[y = 1 , d = 0] = P10 = 1 - P00              = .538
                     Prob[y = 0 , d = 1] = P01 = 1/(1 + e-.431)       = .667
                     Prob[y = 1 , d = 1] = P11 = 1 - P01              = .333.
Notice that in spite of the quite different coefficients, these are identical to the results for the probit model.
Remember that we originally estimated the probabilities, not the parameters, and these were independent of
the distribution. Then, the Hessian is computed in the same manner as for the probit model using
hij = Fij(1-Fij) instead of λ0λ1 in each cell. The asymptotic covariance matrix is the inverse of
                       1 0                          1 1
(28+24)(.462)(.538)          +(32+16)(.667)(.333) 1 1 . The standard errors are .2782 and .4137. For
                        0  0                              
testing the hypothesis that β equals zero, the t-statistic is z = -.850/.4137 = -2.055, which is almost the same
as that for the probit model. The unrestricted log-likelihood is lnL = 24ln.4285 + ... + 16ln.3635 = -66.442
(again). The chi-squared statistic is 4.302, as before.

2. Suppose that a linear probability model is to be fit to a set of observations on a dependent variable, y, which
takes values zero and one, and a single regressor, x, which varies continuously across observations. Obtain the
exact expressions for the least squares slope in the regression in terms of the mean(s) and variance of x and
interpret the result.
          Using       the   usual     regression       statistics,    we      would      have     a=       y − bx ,
b = Σ i ( xi − x )( yi − y ) / Σ i ( xi − x ) 2 .
For data in which y is a binary variable, we can decompose the numerator somewhat further. First, divide both
numerator and denominator by the sample size. Second, since only one variable need be in deviation form,
                                           [                 ][                 ]
drop the deviation in x. That leaves b = Σ i xi ( yi − y ) / n / Σ i ( xi − x ) 2 / n . The denominator is the sample
variance of x. Since yi is only 0s and 1s, y is the proportion of 1s in the sample, P. Thus, the numerator is
(1/n)Σi xiyi - (1/n)Σi xi y = (1/n)Σ1xi - P x = (n1/n) x 1 - P[P x + (1-P) x 0] = P(1 - P)( x 1 - x 0).
Therefore, the regression is essentially measuring how much the mean of x varies across the two groups of
observations. The constant term does not simplify into any intuitively useful form.




                                                                                                               107
3. Given the following data set:
                  Y| 1 0 0 1 1 0 0 1 1 1
                  ----------------------------------
                  X| 9 2 5 4 6 7 3 5 2 6
Estimate a probit model, and test the hypothesis that X is not influential in determining the probability that Y
equals one.
         The model was estimated using Newton's method as described in the text. The estimated coefficients
                                                ∧
and their standard are shown below:             y = -.51274 + .15964X
                                                      (1.042)    (.202)
                                               Log-likelihood = -6.403 Restricted log-likelihood = -6.9315.
The t-ratio for testing the hypothesis is .15964/.202 = .79. The chi-squared for the likelihood ratio test is
1.057. Neither is large enough to lead to rejection of the hypothesis.

4. Construct the Lagrange multiplier statistic for testing the hypothesis that all of the slopes (but not the
constant term) equal zero in the binomial logit model. Prove that the Lagrange multiplier statistic is nR2 in the
regression of (yi - P) on the xs, where P is the sample proportion of ones.
          The derivatives of the log-likelihood are given in (19-19). If all coefficients except the constant term
are zero, then the first order condition for maximizing the log-likelihood would be ∂lnL/∂β = Σi(yi - λ)(1) = 0
                                                                                              ∧
since with no regressors, λi will not vary with i. This leads to the constrained maximum λ = Σi yi/n = P,
                                                                                     ∧

                                                                                    eα            ∧
which might be expected. Thus, we estimate the constant term such that P =               ∧   , or α = logit(P).
                                                                                     1 + eα
The LM statistic based on the BHHH estimator of the covariance matrix of the first derivatives would be
                            LM = [Σigi]′[Σigigi′]-1[Σigi] where gi = Σi(yi - P)xi.
In full, the statistic is    LM = [Σi(yi - P)xi]′[Σi(yi - P)2xixi′]-1[Σi(yi - P)xi].
           The actual (and expected) Hessian can be used instead by replacing (yi - P)2 with P(1 - P) in the
inverse matrix. The statistic could then be written
                            LM = [X′(y - Pi)]′[(X′X)-1][X′(y - Pi)]/P(1 - P) = e′X(X′X)-1X′e/P(1 - P)
In the preceding, e′e = Σi(yi - P)2 = nP(1 - P). Therefore, LM = n[e′X(X′X)-1X′e/e′e], which establishes
the result. To compute the statistic, we regress (yi - P) on the xs, then carry nR2 into the chi-squared table.

5. We are interested in the ordered probit model. Our data consist of 250 observations, of which the
responses are                         Y 0 1 2 3 4
                                      -------------------------
                                      n 50 40 45 80 35
Using the data above, obtain maximum likelihood estimates of the unknown parameters of the model. [Hint:
Consider the probabilities as the unknown parameters.]
         Since there is no regressor, we may write the log-likelihood as
                   lnL = 50lnΦ(-α) + 40ln[Φ(µ1-α) - Φ(-α)] + 45ln[Φ(µ2-α) - Φ(µ1-α)] +
                            80ln[Φ(µ3-α) - Φ(µ2-α)] + 35ln[1 - Φ(µ3-α)].
There are four unknown parameters to estimate and four free probabilities. Suppose, then, we treat Φ(-α),
Φ(µ1-α), Φ(µ2-α), and Φ(µ3-α) as the unknown parameters, π0, π1, π2, and π3, respectively. If we can find
estimators of these, we can solve for the underlying parameters. We may write the log-likelihood as
                   lnL = 50lnπ0 + 40ln(π1 - π0) + 45ln(π2 - π1) + 80ln(π3 - π2) + 35ln(1 - π3).
The necessary conditions are
                   ∂lnL/∂π0 = 50/π0 - 40/(π1-π0)                  = 0
                   ∂lnL/∂π1 = 40/(π1 - π0) - 45/(π2 - π1)         = 0
                   ∂lnL/∂π2 = 45/(π2 - π1) - 80/(π3 - π2)         = 0
                   ∂lnL/∂π3 = 80/(π3 - π2) - 35/(1 - π3)          = 0.




                                                                                                                  108
By a simple rearrangement, these can be recast as a set of linear equations. Thus,
                           90π0 - 50π1                              = 0
                           45π0 - 85π1 + 40π2                       = 0
                                     80π1 - 125π2 + 45π3            = 0
                                         - 35π2 + 115π3             = 80
                            90 − 50       0     00   π 0   0 
                             45 − 85 40          0   π1   0 
or                                                            =
                            0    80 − 125 45  π 2   0 
                                                       
                            0     0     − 35 115  π 3  80
The solution (as might be expected) is
                           π0 = .2 (50/250)
                           π1 = .36 ((50+40)/250)
                           π2 = .54 ((50+40+45)/250)
                           π3 = .86 ((50+40+45+80)/250).
Now, we can solve for the underlying parameters.
                    -α = Φ-1(.2) = -.841, so α = .841.
                  µ1-α = Φ-1(.36) = -.358, so µ1 = .483
                  µ2-α = Φ-1(.54) = .101, so µ2 = .942
                  µ3-α = Φ-1(.86) = 1.081, so µ3 = 1.922.

6. The following hypothetical data give the participation rates in a particular type of recycling program and
the number of trucks purchased for collection by ten towns in a small mid-Atlantic state:
           Town             Trucks              Participation
            1                160                 11%
            2                250                 74%
            3                170                  8%
            4                365                 87%
            5                210                 62%
            6                206                 83%
            7                203                 48%
            8                305                 84%
            9                270                 71%
            10               340                 79%
The town of Eleven is contemplating initiating a recycling program but wishes to achieve a 95% rate of
participation. Using a probit model for your analysis,
(a) How many trucks would the town expect to have to purchase in order to achieve their goal? [Hint: See
Section 19.4.3.] Note that you will use ni = 1.
(b) If trucks cost $20,000 each, is a goal of 90% reachable within a budget of $6.5 million? (That is,
should they expect to reach the goal.)
(c) According to your model, what is the marginal value of the 301st truck in terms of the increase in the
percentage participation?
          To estimate the coefficients, we will use a two step FGLS procedure. Ordinary least squares
estimates based on Section 19.4.3 are consistent, but inefficient. The OLS regression produces
                                                ∧
                                    Φ-1(Pi) = zi = -2.18098 + .0098898T
                                                     (.7404) (.002883).
The predicted values from this regression can then be used to compute the weights in (21-39). The weighted
                                      ∧
least squares regression produces     zi =   -2.3116 + .010646T
                                             (.8103) (.003322)
In order to achieve a predicted proportion of 95%, we will require zi = 1.645. The T required to achieve this is
                                     T = (1.645 + 2.3116) / .010646 = 372.




                                                                                                           109
         The zi which corresponds to 90% is 1.282. Doing the same calculation as above, this requires T =
338 trucks. At $20,000 per truck, this requires $6.751 million, so the budget is inadequate.
         The marginal effect is ∂Φi/∂T = .010646φ(zi). At T = 300, zi = .8822, so φ(zi) = .2703 and the
marginal effect is .00288.

7. A data set consists of n = n1 + n2 + n3 observations on y and x. For the first n1 observations, y = 1 and x = 1.
For the next n2 observations, y = 0 and x = 1. For the last n3 observations, y = 0 and x = 0. Prove that neither
(19-19) nor (19-21) has a solution.
          This is similar to Exercise 1. It is simplest to prove it in that framework. Since the model has only a
dummy variable, we can use the same log likelihood as in Exercise 1. But, in this exercise, there are no
observations in the cell (y=1,x=0). The resulting log likelihood is, therefore,
                    lnL = Σ0,0lnProb[y=0,x=0] + Σ0,1lnProb[y=0,x=1] + Σ1,1lnProb[y=1,x=1]
or                  lnL = n3lnProb[y=0,x=0] + n2lnProb[y=0,x=1] + n1lnProb[y=1,x=1].
Now, let δ = α + β. The log likelihood function is lnL = n3ln(1 - F(α)) + n2ln(1 - F(δ)) + n1lnF(δ). For
estimation, let A = F(α) and D = F(δ). We can estimate A and D, then α = F-1(A) and β = F-1(D) - α. The
first order condition for estimation of A is ∂lnL/∂A = -n3/(1 - A) = 0, which obviously has no solution. If A
cannot be estimated then α cannot either, nor, in turn, can β. This applies to both probit and logit models.

8. Data on t = strike duration and x = unanticipated industrial production for a number of strikes in each of 9
years are given in Table 22.7. Use the Poisson regressin model discussed in Section 21.8 to determine
whether x is a significant determinant of the number of strikes in a given year.
         Maximum likelihood estimates of the Poisson regression parameters are given below.
                     ∧
                    ln λ = 1.90854 + 5.16577x
                            (.1299)       (2.51307)
The log-likelihood function at the maximum likelihood estimates is -28.993171. For the model with only a
constant term, the value is -31.19884. The t statistic for testing the hypothesis that β equals zero is
5.16577/2.51307 = 2.056. This is a bit larger than the critical value of 1.96, though our use of the asymptotic
distribution for a sample of 10 observations might be a bit optimistic. The chi squared value for the likelihood
ratio test is 4.411, which is larger than the 95% critical value of 3.84, so the hypothesis that β equals zero is
rejected on the basis of these two tests.

9. Asymptotics. Explore whether averaging individual marginal effects gives the same answer as
computing the marginal effect at the mean.
          In general, the conditional mean function in the discrete choice models is of the form E[y|x] =
g(x,β) where g is a smooth and continuous function of both x and the parameters, β. Thus, the marginal
effect is ∂g(x,β)/∂x = h(x,β) which we have to assume is a set of also smooth and continuous functions in x
and β. The question then is whether evaluating h(x,β) at the mean of the xs gives the same answer as
averaging the sample values of h(x,β) each evaluated at the individual data points. The answer certainly is
no in a finite sample since h(x,β) is nonlinear. Do they converge to the same thing? Suppose we assume
that the data are well behaved so that the sample mean of the xs, x converges to a true mean vector, µ.
Then, the question is whether h( x ,β) converges to the same thing as (1/n)Σh(xi,β). Since h(xi,β) is
continuous and smooth, h( x ,β) converges to h(µ,β) by the Slutsky theorem. Write each term in the
average marginal effect as a linear Taylor series, and use the mean value theorem, so h(xi,β) = h(µ,β) +
H(µ*,β)(xi-µ) where µ* is a point somewhere between x and µ and H is the second derivatives matrix.
Presumably, H(µ*,β) is a matrix of constants. When we average h(xi,β), the first term is constant and the
second term converges to zero by our assumption of well behaved data. So, at least in large samples, the
answer is yes.




                                                                                                              110
10. Prove (21-28). We’ll do this more generally for any model F(α). Since the ‘model’ contains only a
constant, the log likelihood is logL = Σ0log[1-F(α)] + Σ1logF(α) = n0log[1-F(α)]+n1logF(α) . The
likelihood equation is ∂logL/∂α = Σ0[-f(α)/[1-F(α)] + Σ1f(α)/F(α) = 0 where f(α) is the density (derivative
of F(α) so that at the solution, n0f(α)/[1-F(α)] = n1f(α)/F(α). Divide both sides of this equation by f(α) and
solve it for F(α) = n1/(n0+n1), as might be expected. You can then insert this solution for F(α) back into
the log likelihood, and (21-28) follows immediately.

11. In the panel data models estimated in Example 21.5.1, neither the logit nor the probit model provides a
framework for applying a Hausman test to determine whether fixed or random effects is preferred.
Explain. (Hint: Unlike our application in the linear model, the incidental parameters problem persists
here.) Look at the two cases. Neither case has an estimator which is consistent in both cases. In both
cases, the unconditional fixed effects effects estimator is inconsistent, so the rest of the analysis falls apart.
This is the incidental parameters problem at work. Note that the fixed effects estimator is inconsistent
because in both models, the estimator of the constant terms is a function of 1/T. Certainly in both cases, if
the fixed effects model is appropriate, then the random effects estimator is inconsistent, whereas if the
random effects model is appropriate, the maximum likelihood random effects estimator is both consistent
and efficient. Thus, in this instance, the random effects satisfies the requirements of the test. In fact, there
does exist a consistent estimator for the logit model with fixed effects - see the text. However, this
estimator must be based on a restricted sample observations with the sum of the ys equal to zero or T muust
be discarded, so the mechanics of the Hausman test are problematic. This does not fall into the template of
computations for the Hausman test.




                                                                                                             111
Chapter 22
Limited Dependent Variable and
Duration Models
1. The following 20 observations are drawn from a censored normal distribution:
3.8396, 7.2040, .00000, .00000, 4.4132, 8.0230, 5.7971, 7.0828, .00000, .80260, 13.0670, 4.3211, .00000,
8.6801, 5.4571, .00000, 8.1021, .00000, 1.2526, 5.6015. The applicable model is
                                       yi* = µ + εi
                                       yi = yi* if µ + εi > 0, 0 otherwise.
                                       εi ~ N[0,σ2].
All exercises in this section are based on the preceding.
         The OLS estimator of µ in the context of this tobit model is simply the sample mean. Compute the
mean of all 20 observations. Would you expect this estimator to over- or underestimate µ? If we consider
only the nonzero observations, the truncated regression model applies. The sample mean of the nonlimit
observations is the least squares estimator in this context. Compute it, then comment on whether this should be
an overestimate or an underestimate of the true mean.
         The sample mean of all 20 observations is 4.18222. For the 14 nonzero observations, the mean is
(20/14)4.18222 = 5.9746. Both of these should overestimate µ. In the first case, all negative values have been
transformed to zeroes. Therefore, if we had had the original data, our estimator would include the negative
values as well as the positive ones. Since we have only the zeroes, instead, our estimator includes, for every
negative y* a number which is larger than the true y*. This will inflate the estimate. Likewise, for the
truncated mean, whereas a complete sample might include some negative values, the observed one will not.
Once again, this will serve to inflate the estimator of the mean.

2. We now consider the tobit model that applies to the full data set.
(a) Formulate the log-likelihood for this very simple tobit model.
(b) Reformulate the log-likelihood in terms of θ = 1/σ and γ = µ/σ. Then, derive the necessary conditions for
maximizing the log-likelihood with respect to θ and γ.
(c) Discuss how you would obtain the values of θ and γ to solve the problem in part (b).
(d) Obtain the maximum likelihood estimators of µ and σ.
          The log-likelihood for the Tobit model is given in (22-13). With only a constant term, this is
                             lnL = (-n1/2)[ln(2π) + lnσ2] - (1/(2σ2))Σ1(yi - µ)2 + Σ0lnΦ(-µ/σ)
In terms of γ and θ, this is lnL = (-n1/2)[ln(2π) - lnθ2] - (1/2)Σ1(θyi - γ)2 + Σ0lnΦ(-γ)
                                 = (-n1/2)ln(2π) + n1lnθ - (1/2)Σ1(θyi - γ)2 + Σ0lnΦ(-γ).
The necessary conditions for maximizing this with respect to γ and θ are
                   ∂lnL/∂γ = Σ1(θyi - γ) - Σ0φ(-γ)/Φ(-γ) = θΣ1yi - n1γ - n0[φ(-γ)/Φ(γ)] = 0
                   ∂lnL/∂θ = n1/θ - Σ1yi(θyi - γ) = n1/θ - θΣ1yi2 + γΣ1yi = 0.
There are a few different ways one might solve these two equations. A grid search over the values of γ and θ
is a possibility. A direct maximum likelihood estimator for the tobit model is the simpler choice if one is
available. The model with only a constant term is otherwise the same as the usual model. Using the data
                                                   ∧             ∧
above, the tobit maximum likelihood estimates are µ = 3.2731, σ = 5.0303.




                                                                                                          112
3. Using only the nonlimit observations, repeat the Exercise 2 in the context of the truncated regression
model. Estimate µ and σ by using the method of moments estimator outlined in Example 20.4. Compare your
results to those in the previous problems.
          The log-likelihood for the truncated regression is given in (20-9). With only a constant term,
                     lnL = (-n/2)[ln(2π) + lnσ2] - (1/(2σ2))Σ1(yi - µ)2 - ΣilnΦ(µ/σ)
Once again transforming to γ and σ, this is
                     lnL = -(n/2)ln(2π) + nlnθ - (1/2)Σi(θyi - γ)2 - nlnΦ(γ).
The necessary conditions for maximizing this are
                     ∂lnL/∂γ = Σi(θyi - γ) - nφ(γ)/Φ(γ) = 0
                     ∂lnL/∂θ = n/θ - Σiyi(θyi - γ)
The first of the two equations can be y = γ/θ + λ/θ, where λ = φ(γ)/Φ(γ). Now, reverting back to µ and σ,
this is
 y = µ + σλ which is (20-5). The second equation can be manipulated to produce Σyi2/n - µ y = σ2. Once
again, trial and error could be used to find a solution. As before, estimating the model as a truncated
                                                                                                                             ∧
regression with only a constant term will also produce a solution. The solution by this method is µ = 3.3439,
∧
 σ = 5.6368.
          With the data of the first problem, we would have the following: Estimated Prob[y* > 0] = 14/20 =
.7. This is an estimate of Φ(µ/σ), so we would have µ/σ = Φ-1(.7) = .525 or µ = .525σ. Now, we can use
the relationship
E[y|y > 0] = µ + σφ(µ/σ)/Φ(µ/σ) = µ + σλ. Since µ/σ is now known, we have λ = φ(.525) / Φ(.525) =
                                                                                              ∧                ∧
.496 so a second equation is 5.9746 = µ + .496σ. The joint solution is µ = 3.0697, σ = 5.8470. The three
solutions are surprisingly close.

4. Continuing to use the data in Exercise 1, consider, once again, only the nonzero observations. Suppose
that the sampling mechanism is as follows: y* and another normally distributed random variable, z, have
population correlation 0.7. The two variables, y* and z are sampled jointly. When z is greater than zero, y is
reported. When z is less than zero, both z and y* are discarded. Exactly 35 draws were required in order to
obtain the preceding sample. Estimate µ and σ. [Hint: Use Theorem 20.4.]
           Using Theorem 21.4, we have 1 - Φ(αz) = 14/35 = .4, αz = Φ-1(.6) = .253, λ(αz) = .9659,
δ(αz) = .6886. The two moment equations are based on the mean and variance of y in the observed data,
5.9746 and 9.869, respectively. The equations would be 5.9746 = µ + σ(.7)(.9659) and 9.869 = σ2(1 -
                                          ∧                ∧
.72(.6886)). The joint solution is µ = 3.3651, σ = 3.8594.

5. Derive the marginal effects for the tobit model with heteroscedasticity that is described in Section
22.3.4.a.
          The conditional mean function is E[y|x] = Φ(β′xi/σi)β′x + σiΦ(β′xi/σi) using the equation before
(22-12). Suppose that σi = σexp(α′xi) for the same vector xi. (We’ll relax that assumption shortly.) Now,
differentiate this expression with respect to x. We differentiate the two parts, first with respect to β′x then
with respect to σi.

∂E[ yi |xi ]       β ' xi                   β ' xi  1           β ' x   β ' x  1
             = Φ            (       )
                            β + β ' x i φ           β + σ i  − i φ  i   β
  ∂xi              σi                       σi  σi              σ i   σ i   σ i

                          β ' xi   −1   β ' xi              β ' xi                 β ' x   β ' x    −1   β ' x 
                (      )
             + β ' xi φ 
                            σ
                                     
                                       σ      σ
                                                     σ i α + φ          σ i α + σ i  − σ i φ  σ i   σ   σ i  σ i α
                          i  i  i                           σi                    i   i    i   i 


After collecting the terms, we obtain ∂E[yi|xi]/∂xi = Φ(ai)β + σiφ(ai)α where ai = β′xi/σi. Thus, the
marginal effect has two parts. one for β and one for α. Now, if a variable appears in σi but not in xi, then



                                                                                                                                       113
only the second term appears while if a variable appears only in xi and not in σi, then only the first term
appears in the marginal effect.

6. Prove that the Hessian for the tobit model in (22-14) is negative definite after Olsen’s transformation
is applied to the parameters.
         The transformed log likelihood function is

logL = Σy > 0 (-1/2)[log2π - logθ2 + (θy - x′γ)2] + Σy=0 log[1-Φ(x′γ)]

It will be convenient to define ai = xi′γ. Note also that 1 - Φ(ai) = Φ(-ai). The first derivatives and Hessian
in the transformed parameters are
           ∂ log L
                   = ∑ y >0 (1/ θ ) − yi (θ yi − ai )
             ∂θ         i

          ∂ log L
                     = ∑ y >0 x (θ yi − ai ) + ∑ y =0
                                  i
                                                                    [φ (−ai ) / Φ (−ai )] (−xi )
            ∂γ            i                                   i

           2
          ∂ log L                              2          2
                      = ∑ y >0 − 1/ θ              − yi
                 2            i
            ∂θ
           2
          ∂ log L
                      = ∑ y >0 − x x ' + ∑ y =0                   − [φ ( − ai ) / Φ ( − ai )]{− ai + [φ (− ai ) / Φ (− ai )]}xi xi '
           ∂γ∂γ '             i          i i              i

           2
          ∂ log L
                      = ∑ y >0        − xi yi
           ∂γ∂θ               i



The second derivatives can be collected in a matrix format:
  ∂ log L             x  x   0   0                   x  x 
           = ∑ y >0  −  i  i  '−     ' + ∑ y =0 δ i  i   i  '
 γ  γ             − yi  − yi   θ   θ           0  0 
∂ ∂ '
 θ  θ 
where δi is the last scalar term in ∂2logL/∂δ∂γ′. By Theorem 22.2 (see (22-4)), we know that δi is negative.
Thus, all three parts of the matrix are negative semidefinite. Assuming the data are not linearly dependent
and there are more than K observations, the Hessian will have full rank and be negative definite.




                                                                                                                                       114
Appendix A
Matrix Algebra
                                            2 4 
                         1 3 3                 
1. For the matrices A =           and B = 1 5 compute AB, A′B′, and BA.
                         2 4 1
                                            6 2
                                10 22 10                   10 11 10 
               23 25                                                
         AB =          , BA = 11 23 8  , A′B′ = (BA)′ = 22 23 26 .
               14 30
                                10 26 20                 10 8 20

2. Prove that tr(AB) = tr(BA) where A and B are any two matrices that are conformable for both
multiplications. They need not be square.
         The ith diagonal element of AB is ∑ j aij b ji . Summing over i produces tr(AB) = ∑i ∑i aij b ji .
The jth diagonal element of BA is ∑ j b ji aij . Summing over i produces tr(BA) = ∑i ∑ j b ji aij .

3. Prove that tr(A′A) = ∑i ∑ j aij2 .

         The jth diagonal element of A′A is the inner product of the jth column of A, or ∑i aij2 . Summing

over j produces tr(A′A) = ∑ j ∑i aij2 = ∑i ∑ j aij2 .

4. Expand the matrix product X = {[AB + (CD)′][(EF)-1 + GH]}′. Assume that all matrices are square and E
and F are nonsingular.
         In parts, (CD)′ = D′C′ and (EF)-1 = F-1E-1. Then, the product is
         {[AB + (CD)′][(EF)-1 + GH]}′         = (ABF-1E-1 + ABGH + D′C′F-1E-1 + D′C′GH)′
                                              = (E-1)′(F-1)′B′A′ + H′G′B′A′ + (E-1)′(F-1)′CD + H′G′CD.

5. Prove for that for K×1 column vectors, xi i = 1,...,n, and some nonzero vector, a,

                              ∑ (x − a )(x − a )' = X' M X + n(x − a )(x − a )' .
                                 n                                    0
                                 i =1   i            i

         Write xi - a as [( xi - x ) + ( x - a)]. Then, the sum is

                   ∑
                       n
                       i =1
                              [( xi - x ) + ( x - a)] [(xi - x ) + ( x - a)]′ =

                                             ∑     ( xi - x )( xi - x )′ + ∑i =1 ( x - a) ( x - a)′
                                              n                                  n
                                              i =1

                                            +∑           ( xi - x )( x - a)′ + ∑i =1 ( x - a) (xi - x )′
                                                 n                               n
                                                 i =1

Since ( x - a) is a vector of constants, it may be moved out of the summations. Thus, the fourth term is
( x - a) ∑i =1 (xi - x )′ = 0. The third term is likewise. The first term is X′M0X by the definition while
             n



the second is n( x - a) ( x - a)′.




                                                                                                           115
6. Let A be any square matrix whose columns are [a1,a2,...,aM] and let B be any rearrangement of the columns
of the M×M identity matrix. What operation is performed by the multiplication AB? What about BA?
         B is called a permutation matrix. Each column of B, say, bi, is a column of an identity matrix. The
jth column of the matrix product AB is A bi which is the jth column of A. Therefore, post multiplication of A
by B simply rearranges (permutes) the columns of A (hence the name). Each row of the product BA is one of
the rows of A, so the product BA is a rearrangement of the rows of A. Of course, A need not be square for us
to permute its rows or columns. If not, the applicable permutation matrix will be of different orders for the
rows and columns.
                                                                                  0 0 1
7. Consider the 3×3 case of the matrix B in Exercise 6. For example, B = 0 1 0 Compute B2 and
                                                                                        
                                                                                 1 0 0
B3. Repeat for a 4×4 matrix. Can you generalize your finding?
                                         0 0 1             1 0 0
                                   B = 1 0 0 B =  0 1 0 .
                                    2                3
                                                                 
                                        0 1 0           0 0 1
Since each power of B is a rearrangement of I, some power of B will equal I. If n is this power, we also find,
therefore, that Bn-1 = B-1. This will hold generally.

                                      1 4 7 
8. Calculate |A|, tr(A) and A for A = 3 2 5 .
                             -1
                                             
                                      5 2 8
               |A| = 1(2)(8)+4(5)(5)+3(2)(7)-5(2)(7)-1(5)(2)-3(4)(8) = -18,
               tr(A) = 1 + 2 + 8 = 11
                      2 5          4 7       4 7 
                 det       − det        det        
                      2 8          2 8       2 5 
                                                                − 6 / 18 18 / 18 − 6 / 18 
             −1        3 5         1 7         1 7  
                                                           = − 1 / 18 27 / 18 − 16 / 18 .
          -1
         A =    − det         det      − det 
             18        5 8         5 8         3 5                                 
                                                              4 / 18 − 18 / 18 10 / 18 
                        3 2         1 4         1 4 
                 det       − det          det      
                       5 2         5 2         3 2 


                                                            25 7 
9. Obtain the Cholesky decomposition of the matrix A =           .
                                                             7 13
          Recall that the Cholesky decomposition of a matrix, A, is the matrix product LU = A where L is a
                                                                 25 7        λ      0  λ 11 λ 21 
lower triangular matrix and U = L′. Write the decomposition as          . =  11        .         . By
                                                                  7 13       λ 21 λ 22   0 λ 22 
direct multiplication, 25 = λ211 so λ11 = 5. Then, λ11λ21= 7, so λ21 = 7/5 = 1.4. Finally, λ221 + λ222 = 13, so
λ22 = 3.322.




                                                                                                          116
10. A symmetric positive definite matrix, A, can also be written as A = UL, where U is an upper triangular
matrix and L = U′. This is not the Cholesky decomposition, however. Obtain this decomposition of the matrix
in Exercise 9.
                                                          25 7        µ    µ  µ        0 
         Using the same logic as in the previous problem,        . =  11 12 .  11        . Working
                                                           7 13        0 µ 22  µ12 µ 22 
from the bottom up, µ 22 = 13 = 3.606. Then, 7 = µ12µ22 so µ12 = 7/ 13 = 1.941. Finally, 25 =

µ 2 + µ 2 so µ11
              2
                 = 25 - 49/13 = 21.23, or µ11 = 4.61.
 11    12

11. What operation is performed by postmultiplying a matrix by a diagonal matrix? What about
premultiplication?
         The columns are multiplied by the corresponding diagonal element. Premultiplication multiplies the
rows by the corresponding diagonal element.

12. Are the following quadratic forms positive for all values of x?
         (a) y = x12 − 28 x1 x 2 + (11x 22 ),
         (b) y = 5x12 + x22 + 7 x32 + 4 x1 x2 + 6 x1 x3 + 8 x2 x3 ?
                                                1      − 14   x1 
         The first may be written [ x1    x2 ]                 . The determinant of the matrix is 121 - 196
                                                − 14 11   x2 
= -75, so it is not positive definite. Thus, the first quadratic form need not be positive. The second uses the
         5 2 3
matrix 2 1 4 . There are several ways to check the definiteness of a matrix. One way is to check the
         3 4 7
signs of the principal minors, which must be positive. The first two are 5 and 5(1)-2(2)=1, but the third, the
determinant, is -34. Therefore, the matrix is not positive definite. Its three characteristic roots are 11.1, 2.9,
and -1. It follows, therefore, that there are values of x1 , x2 , and x3 for which the quadratic form is negative.

13. Prove that tr(A⊗B) = tr(A)tr(B).
         The jth diagonal block of the product is ajjB. Its ith diagonal element is ajjbii. If we sum in the jth
block, we obtain ∑i a jj bii = a jj ∑i bii . Summing down the diagonal blocks gives the trace, ∑ j a jj ∑i bii =
tr(A)tr(B).

14. A matrix, A, is nilpotent if lim A k = 0. Prove that a necessary and sufficient condition for a symmetric
                                   k →∞
matrix to be nilpotent is that all of its characteristic roots be less than one in absolute value. (For an
application, see Section 17.3.3.)
          Use the spectral decomposition to write A as CΛC′ where Λ is the diagonal matrix of characteristic
roots. Then, the Kth power of A is CΛKC′. Sufficiency is obvious. Also, since if some λ is greater than one,
ΛK must explode, the condition is necessary as well.




                                                                                                             117
                                                2 4 3
15. Compute the characteristic roots of A = 4 8 6 .
                                                 3 6 5
           The roots are determined by |A - λ I| = 0. For the matrix above, this is
           |A - λI| = (2-λ)(8-λ)(5-λ) + 72 + 72 - 9(8-λ) - 36(2-λ) - 16(5-λ)
                              = -λ3 + 15λ2 - 5λ = -λ (λ2- 15λ + 5) = 0.
One solution is obviously zero. (This might have been apparent. The second column of the matrix is twice
the first, so it has rank no more than two, and therefore no more than two nonzero roots.) The other two roots
    (          )
are 15 ± 205 / 2 = .341 and 4.659.

16. Suppose A = A(z) where z is a scalar. What is ∂x′Ax/∂z? Now, suppose each element of x is also a
function of z. Once again, what is ∂x′Ax/∂z?
         The quadratic form is ∑i ∑ j xi x j aij , so

         ∂x′A(z)x/∂z = ∑i ∑ j xi x j (∂aij / ∂z) = x′(∂A(z)/∂z)x where ∂A(z)/∂z is a matrix of partial derivatives.
Now, if each element of x is also a function of z, then,
         ∂x′Ax/∂z = ∑i ∑ j xi x j (∂aij / ∂z) + ∑i ∑ j (∂xi / ∂z ) x j aij + ∑i ∑ j xi (∂x j / ∂z )aij
                          = x′(∂A(z)/∂z)x + (∂x(z)/∂z)′A(z)x(z) + x(z)′A(z)(∂x(z)/∂z)
If A is symmetric, this simplifies a bit to x′(∂A(z)/∂z)x + 2(∂x(z)/∂z)′A(z)x(z).

17. Show that the solutions to the determinantal equations |B - λA| = 0 and |A-1B - λI| = 0 are the same.
How do the solutions to this equation relate to those of the equation |B-1A - µI| = 0? (For an application of the
first of these equations, see Section 16.5.2d.)
           Since A is assumed to be nonsingular, we may write
                    B - λA = A(A −1 B - λI). Then, |B - λA| = |A|×|A-1B - λI|.
 The determinant of A is nonzero if A is nonsingular, so the solutions to the two determinantal equations must
be the same. B-1A is the inverse of A-1B, so its characteristic roots must be the reciprocals of those of A-1B.
There might seem to be a problem here since these two matrices need not be symmetric, so the roots could be
complex. But, for the application noted, both A and B are symmetric and positive definite. As such, it can be
shown (see Section 16.5.2d) that the solution is the same as that of a third determinantal equation involving a
symmetric matrix.

18. Using the matrix A in Exercise 9, find the vector x that minimizes y = x′Ax + 2x1 + 3x2 - 10. What is the
value of y at the minimum? Now, minimize y subject to the constraint x1 + x2 = 1. Compare the two solutions.
         The solution which minimizes y = x′Ax + b′x + d will satisfy ∂y∂x = 2Ax + b = 0. For this problem,
     25 7           2              13 / 276 − 7 / 276
A=            , b =   , and A-1 =                      , so the solution is x1 =-5/552
      7 13           3             − 7 / 276 25 / 276 
= -.0090597 and x2 = -61/552 = -.110507.
         The constrained maximization problem may be set up as a Lagrangean,
L* = x′Ax + b′x + d + λ (c′x - 1) where c = [1,1]′. The necessary conditions for the solution are
                           ∂L*/∂x = 2Ax + b + λc       =0
                           ∂L*/∂λ = c′x - 1 = 0,
                           2 A c   x      - b
or,                         c' 0 λ  =  1  .
                                           




                                                                                                              118
                                             50 14 1  x1          − 2
                                                          
Inserting A, b, and c produces the solution 14 26 1  x2  =  − 3. The solution to the three equations
                                                               
                                              1 1 0  λ        1 
is obtained by premultiplying the vector on the right by the inverse of the matrix on the left. The solutions are
0.27083, 0.72917, and, -25.75. The function value at the constrained solution is 4.240, which is larger than
the unconstrained value of -10.00787.

19. What is the Jacobian for the following transformations? (A note for aspiring technical writers, about a
common error in the literature. A Jacobian is a determinant. The term "Jacobian determinant" has superfluous
redundancy.)       y1         = x1 /x2 ,
                   lny2      = ln x1- lnx2 + lnx3,
and                y3        = x1x2x3.
         Let capital letters denote logarithms. Then, the three transformations can be written as
                   Y1        = X1 - X2
                   Y2        = X1 - X2 + X3
                   Y3        = X1 + X2 +X3.
                                    1 − 1 0
This linear transformation is Y = 1 − 1 1 X = JX . The inverse transformation is
                                    1 1 1
      1 − 1 / 2 1 / 2 
X = 0 − 1 / 2 1 / 2 Y = J −1Y . In terms of the original variables, then, x1 = y1(y2/y3)1/2 , x2 = (y3/y2)1/2,
      1      1        0 
and
x3 = y1y2. The matrix of partial derivatives can be obtained directly, but an algebraic shortcut will prove useful
for obtaining the Jacobian. Note first that ∂xi/∂yj = (xi/yj)(∂logxi/∂logyj). Therefore, the elements of the partial
derivatives of the inverse transformations are obtained by multiplying the ith row by xi, where we will
substitute the expression for xi in terms of the ys, then multiplying the jth column by (1/yj). Thus, the result of
Exercise 11 will be useful here. The matrix of partial derivatives will be
            ∂x1 / ∂y1 ∂x1 / ∂y2 ∂x1 / ∂y3   x1 0 0  1 − 1 / 2 1 / 2 1 / y1                0      0 
           ∂x / ∂y ∂x / ∂y ∂x / ∂y  =  0 x                                     
                                                              0  0 − 1 / 2 1 / 2  0      1 / y2    0 .
            2        1      2  2      2    3          2
            ∂x3 / ∂y1 ∂x3 / ∂y2 ∂x3 / ∂y3   0 0 x3  1          1       0   0       0   1 / y3 
The determinant of the product matrix is the product of the three determinants. The determinant of the center
matrix is -1/2. The determinants of the diagonal matrices are the products of the diagonal elements. Therefore,
the Jacobian is J = abs(|∂x/∂y′|)= ½(x1x2x3)/(y1y2y3) = 2(y1/y2) (after making the substitutions for xi).

20. Prove that exchanging two columns of a square matrix reverses the sign of its determinant. (Hint: use a
permutation matrix. See Exercise 6.)
            Exchanging the first two columns of a matrix is equivalent to postmultiplying it by a permutation
matrix B = [e2,e1,e3,e4,...] where ei is the ith column of an identity matrix. Thus, the determinant of the matrix
is |AB| = |A| |B|. The question turns on the determinant of B. Assume that A and B have n columns. To obtain
the determinant of B, merely expand it along the first row. The only nonzero term in the determinant is
 (-1)|In-1 | = -1, where In-1 is the (n-1) × (n-1) identity matrix. This completes the proof.

21. Suppose x=x(z) where z is a scalar. What is ∂[(x′Ax)/(x′Bx)]/z?
       The required derivatives are given in Exercise 16. Let g = ∂x/∂z and let the numerator and
denominator be a and b, respectively. Then,
       ∂(a/b)/∂ z = [b(∂a/∂z) - a(∂b/∂z)]/b2
                    = [x′Bx(2x′Ag) - x′Ax(2x′Bg)] / (x′Bx) 2= 2[x′Ax/x′Bx][x′Ag/x′Ax - x′Bg/x′Bx].




                                                                                                               119
22. Suppose y is an n×1 vector and X is an n×K matrix. The projection of y into the column space of X is
                                           ∧
defined in the text after equation (2-55), y = Xb. Now, consider the projection of y* = cy into the column
space of X* = XP where c is a scalar and P is a nonsingular K × K matrix. Find the projection of y* into the
column space of X*. Prove that the cosine of the angle between y* and its projection into the column space of
X* is the same as that between y and its projection into the column space of X. How do you interpret this
result?
          The projection of y* into the column space of X* is X*b* where b* is the solution to the set of
equations X*′y* = X*′X*b* or P′X′(cy) = P′X′XPb*. Since P is nonsingular, P′ has an inverse.
Premultiplying the equation by (P′)-1, we have cX′y = X′X(Pb*) or X′y = X′X[(1/c)Pb*]. Therefore, in
terms of the original y and X, we see that b = (1/c)Pb* which implies b* = cP-1 b. The projection is X*b* =
(XP)(cP-1b) = cXb. We conclude, therefore, that the projection of y* into the column space of X* is a
multiple c of the projection of y into the space of X. This makes some sense, since, if P is a nonsingular
matrix, the column space of X* is exactly the same as the same as that of X. The cosine of the angle between
y* and its projection is that between cy and cXb. Of course, this is the same as that between y and Xb since
the length of the two vectors is unrelated to the cosine of the angle between them. Thus,
cosθ = (cy) ′(cXb))/(||cy||×||cXb||) = (y′Xb))/(||y||×||Xb||).

                        1 1 1 1                             -1
23. For the matrix X′ = 
                          4 − 2  3  − 5 , compute P = X(X ′X) X′ and M = (I - P). Verify that MP = 0.
                                      
           1 3
Let Q =         (Hint: Show that M and P are idempotent.)
          2 8
(a) Compute the P and M based on XQ instead of X.
(b) What are the characteristic roots of M and P?
                       4 0              -1  1 / 4 0 
       First, X′X = 
                         0   54  , (X ′X) =  0 1 / 54  ,
                                                     
               1 4                                        59            11 51 − 13
               1 − 2 1 / 4                                              35 15 47 
X(X ′X)-1X ′ =             0      1   1 1  1  
                                                     =
                                                        1  11
                                                                                       = P
               1 3   0 1 / 54  4 − 2 3 − 5   108  51            15 45 − 3 
                                                                                  
               1 − 5                                     − 13           47 − 3 77 
                   49 − 11 − 51 13 
                                         
                1  − 11 73 − 15 − 47 
M = I-P =
              108 − 51 − 15 63         3 
                                         
                   13 − 47    3       31 
         (a) There is no need to recompute the matrices M and P for XQ, they are the same. Proof: The
counterpart to P is (XQ)[(XQ) ′(XQ)]-1(XQ) ′ = XQ[Q ′X ′XQ]-1Q ′X ′ =
XQQ-1(X ′X)-1(Q ′)-1Q ′X ′ = X(X′X)-1X ′. The M matrix would be the same as well. This is an application
of the result found in the previous exercise. The P matrix is the projection matrix, and, as we found, the
projection into the space of X is the same as the projection into the space of XQ.
         (b) Since M and P are idempotent, their characteristic roots must all be either 0 or 1. The trace of
the matrix equals the sum of the roots, which tells how many are 1 and 0. For the matrices above, the traces of
both M and P are 2, so each has 2 unit roots and 2 zero roots.

24. Suppose that A is an n×n matrix of the form A = (1-ρI) + ρii′, where i is a column of 1s and 0 < ρ < 1.
Write out the format of A explicitly for n = 4. Find all of the characteristic roots and vectors of A. (Hint:
There are only two distinct characteristic roots, which occur with multiplicity 1 and n-1. Every c of a certain
type is a characteristic vector of A.) For an application which uses a matrix of this type, see Section 14.5 on
the random effects model.




                                                                                                          120
                        1       ρ   ρ   ρ
                        ρ       1   ρ   ρ
         For n = 4, A =                     . There are several ways to analyze this matrix. Here is a simple
                        ρ       ρ   1   ρ
                                          
                        ρ       ρ   ρ   1
shortcut. The characteristic roots and vectors satisfy [(1-ρ)I + ρii′]c = λc. Multiply this out to obtain
(1-ρ)c + ρii′c = λc or ρii′c = [λ- (1-ρ)]c. Let µ= λ - (1-ρ), so ρii′c=µc. We need only find the characteristic
roots of ρii′,µ. The characteristic roots of the original matrix are just λ = µ + (1-ρ). Now, ρii′ is a matrix
with rank one, since every column is identical. Therefore, n-1 of the µs are zero. Thus, the original matrix has
n-1 roots equal to 0 + (1-ρ) = (1 -ρ). We can find the remaining root by noting that the sum of the roots of ρii′
equals the trace of ρii′. Since ρii′ has only one nonzero root, that root is the trace, which is nρ. Thus, the
remaining root of the original matrix is (1 - ρ+ nρ). The characteristic vectors satisfy the equation ρii′c = µc.
For the nonzero root, we have ρii′c = nρc. Divide by nρ to obtain i(1/n)i′c = c. This equation states that
for each element in the vector, ci = (1/n) ∑i ci . This implies that every element in the characteristic vector
corresponding to the root (1-ρ+nρ) is the same, or c is a multiple of a column of ones. In particular, so that it
will have unit length, the vector is (1 / n ) i. For the remaining zero roots, the characteristic vectors must
satisfy ρi(i′c) = 0c = 0. If the characteristic vector is not to be a column of zeroes, the only way to make this
an equality is to require i′c to be zero. Therefore, for the remaining n-1 characteristic vectors, we may use any
set of orthogonal vectors whose elements sum to zero and whose inner products are one. There are an infinite
number of such vectors. For example, let D be any arbitrary set of n-1 vectors containing n elements.
Transform all columns of D into deviations from their own column means. Thus, we let F = M0D where M0
is defined in Section 2.3.6. Now, let C = F(F′F)-2. C is a linear combination of the columns of F, so its
columns sum to zero. By multiplying it out and using the results of Section 2.7.10, you will find that C′C = I,
so the columns are orthogonal and have unit length.

25. Find the inverse of the matrix in Exercise 24. [Hint: Use (2-66).]
        Using the hint, the inverse is
                          [(1 − ρ) I]−1[ρii' ][(1 − ρ) I]−1     1
         [(1 − ρ) I]−1 -                                    =       {I - [ρ / (1 − ρ + nρ)]ii' }
                               ( )
                           1 + ρi '[(1 − ρ) I]    ( )
                                                  −1
                                                       ρi     1 − ρ


26. Prove that every matrix in the sequence of matrices Hi+1 = Hi + didi′, where H0 = I, is positive definite.
For an application, see Section 5.5. For an extension, prove that every matrix in the sequence of matrices
defined in (5-22) is positive definite if H0 = I.
         By repeated substitution, we find Hi+1 = I + ∑ j = 1 d j d j ' . A quadratic form in Hi+1 is, therefore
                                                             i



                   x′Hi+1x = x′x + ∑ j =1 (x' d j )(d j ' x) = x′x + ∑ j =1 (x' d j ) 2
                                          i                                i


This is obviously positive for all x. A simple way to establish this for the matrix in (5-22) is to note that in
spite of its complexity, it is of the form Hi+1 = Hi + didi′ + fifi′. If this starts with a positive definite matrix,
such as I, then the identical argument establishes its positive definiteness.

                                           cos( x ) sin( x ) 
27. What is the inverse matrix of P =                           ? What are the characteristic roots of P?
                                           − sin( x ) cos( x ) 
         The determinant of P is cos2(x) + sin2(x) = 1, so the inverse just reverses the signs of the two off
diagonal elements. The two roots are the solutions to |P-λI| = 0, which is cos2(x) + sin2(x) - 2λcos(x) + λ2 = 0.
This simplifies because cos2(x) + sin2(x) = 1. Using the quadratic formula, then, λ= cos(x) ± (cos2(x) - 1)1/2.
But, cos2(x) - 1 = -sin2(x). Therefore, the imaginary solutions to the resulting quadratic are λ1,λ2 = cos(x) ±
isin(x).




                                                                                                               121
28. Derive the off diagonal block of A-1 in Section 2.6.4.
        For the simple 2×2 case, F2 is derived explicitly in the text, as F2 = (x′M0x)-1 = 1 / ∑i ( xi − x ) 2 .
Using (2-74), the off diagonal element is just F2( ∑i xi )/n = x / ∑i ( xi − x ) 2 . To extend this to a matrix
containing a constant and K-1 variables, use the result at the end of the section. The off diagonal vector in A-1
when there is a constant and K-1 other variables is -F2A21(A11)-1 = [X′M0X]-1 x . In all cases, A11 is just n,
so (A11)-1 is 1/n.

29. (This requires a computer.) For the X′X matrix at the end of Section 6.4.1,
          (a) Compute the characteristic roots of X′X.
          (b) Compute the condition number of X′X. (Do not forget to scale the columns of the matrix so that
               the diagonal elements are 1.)
                               15.000 120.00 19.310 11179     .    99.770
                               120.00 1240.0 164.30 1035.9 875.60 
                                                                          
          The matrix is        19.310 164.30 25.218 148.98 13122       . 
                                                                          
                                    .
                               11179    1035.9 148.98 94386   .    799.02
                               99.770 875.60 13122 .     799.02 716.67 
Its characteristic roots are 2486, 72.96, 19.55, 2.027, and .007354. To compute the condition number, we first
extract D = diag(15,1240,25.218,943.86,716.67). To scale the matrix, we compute V = D-2X′XD-2.
                           1         .8798823 .992845 .939515 .962265
                          .879883        1      .929119 .957532 .928828
                          
The resulting matrix is .992845 .929119            1       .965648 .976079 .
                                                                            
                          .939515 .957532 .965648              1     .971503
                          .962265 .928828 .976079 .971503              1 
The characteristic roots of this matrix are 4.801, .1389, .03716, .02183, and .0003527. The square root of the
largest divided by the smallest is 116.675. These data are highly collinear by this measure




                                                                                                            122
Appendix B
Probability and Distribution Theory
1. How many different 5 card poker hands can be dealt from a deck of 52 cards?
                  52
       There are   = (52×51×51...×1)/[(5×4×3×2×1)(47×46×...×1)] = 2,598,960 possible hands.
                  5

2. Compute the probability of being dealt 4 of a kind in a poker hand.
         There are 48(13) possible hands containing 4 of a kind and any of the remaining 48 cards. Thus,
given the answer to the previous problem, the probability of being dealt one of these hands is 48(13)/2598960
=.00024, or less than one chance in 4000.

3. Suppose a lottery ticket costs $1 per play. The game is played by drawing 6 numbers without replacement
from the numbers 1 to 48. If you guess all six numbers, you win the prize. Now, suppose that N = the number
of tickets sold and P = the size of the prize. N and P are related by
                                                N = 5 + 1.2P
                                                P = 1 + .4N
N and P are in millions. What is the expected value of a ticket in this game? (Don't forget that you might have
to share the prize with other winners.)
          The size of the prize and number of tickets sold are jointly determined. The solutions to the two
equations are N = 11.92 million tickets and P = $5.77 million. The number of possible combinations of 48
                                    48
numbers without replacement is   = (48×47×46...×1)/[(6×5×4×3×2×1)(42×41×...×1)] = 12,271,512 so the
                                    6
probability of making the right choice is 1/12271512 = .000000081. The expected number of winners is the
expected value of a binomial random variable with N trials and this success probability, which is N times the
probability, or 11.92/12.27 = .97, or roughly 1. Thus, one would not expect to have to share the prize. Now,
the expected value of a ticket is Prob[win](5.77 million - 1) + Prob[lose](-1) . -53 cents.

4. If x has a normal distribution with mean 1 and standard deviation 3, what are
          (a) Prob[|x| > 2].
          (b) Prob[x > -1 | x < 1.5].
          Using the normal table,
          (a) Prob[|x| > 2]           = 1 - Prob[|x| < 2]
                                      = 1 - Prob[-2 < x < 2]
                                      = 1 - Prob[(-2-1)/3 < z < (2-1)/3]
                                      = 1 - [F(1/3) - F(-1)] = 1 - .6306 + .1587 = .5281
          (b) Prob[x > -1 | x < 1.5] = Prob[-1 < x < 1.5] / Prob[x < 1.5]
              Prob[-1 < x < 1.5]      = Prob[(-1-1)/3 < z < (1.5-1)/3)]
                                      = Prob[z < 1/6] - Prob[z < -2/3]
                                      = .5662 - .2525 = .3137.
The conditional probability is .3137/.5662 = .5540.

5. Approximately what is the probability that a random variable with chi-squared distribution with 264
degrees of freedom is less than 297?
         We use the approximation in (3-37), z = [2(297)]2 - [2(264) - 1]2 = 1.4155, so the probability is
approximately .9215. To six digits, the approximation is .921539 while the correct value is .921559.




                                                                                                          123
6. Chebychev Inequality For the following two probability distributions, find the lower limit of the
probability of the indicated event using the Chebychev inequality (3-18) and the exact probability using the
appropriate table:
         (a) x ~ Normal[0,32], and -4 < x < 4.
         (b) x ~ chi-squared, 8 degrees of freedom, 0 < x < 16.
         The inequality given in (3-18) states that Prob[|x - µ| < kσ] > 1 - 1/k2. Note that the result is not
informative if k is less than or equal to 1.
         (a) The range is 4/3 standard deviations, so the lower limit is 1 - (3/4)2 or 7/16 = .4375. From the
standard normal table, the actual probability is 1 - 2Prob[z < -4/3] = .8175.
         (b) The mean of the distribution is 8 and the standard deviation is 4. The range is, therefore, µ ± 2σ.
The lower limit according to the inequality is 1 - (1/2)2 = .75. The actual probability is the cumulative
chi-squared(8) at 16, which is a bit larger than .95. (The actual value is .9576.)

7. Given the following joint probability distribution,
                                             X
                                     | 0       1     2
                                   --+------------------
                                    0| .05     .1    .03
                            Y       1| .21     .11   .19
                                    2| .08     .15   .08
         (a) Compute the following probabilities: Prob[Y < 2], Prob[Y < 2, X > 0], Prob[Y = 1, X > 1].
         (b) Find the marginal distributions of X and Y.
         (c) Calculate E[X], E[Y], Var[X], Var[Y], Cov[X,Y], and E[X2Y 3].
         (d) Calculate Cov[Y,X2].
         (e) What are the conditional distributions of Y given X = 2 and of X given Y > 0?
         (f) Find E[Y|X] and Var[Y|X]. Obtain the two parts of the variance decomposition
             Var[Y] = Ex[Var[Y|X]] + Varx[E[Y|X]].
         We first obtain the marginal probabilities. For the joint distribution, these will be
         X:   P(0) = .34, P(1) = .36, P(2) = .30
         Y:   P(0) = .18, P(1) = .51, P(2) = .31
Then,
         (a) Prob[Y < 2] = .18 + .51 = .69.
             Prob[Y < 2, X > 0] = .1 + .03 + .11 + .19 = .43.
             Prob[Y = 1, X $ 1] = .11 + .19 = .30.
         (b) They are shown above.
         (c) E[X]          = 0(.34) + 1(.36) + 2(.30) = .96
             E[Y] = 0(.18) + 1(.51) + 2(.31) = 1.13
             E[X2]         = 02(.34) + 12(.36) + 22(.30) = 1.56
                2
             E[Y ]         = 02(.18) + 12(.51) + 22(.31) = 1.75
             Var[X]        = 1.56 - .962 = .6384
             Var[Y]        = 1.75 - 1.132 = .4731
             E[XY]         = 1(1)(.11)+1(2)(.15)+2(1)(.19)+2(2)(.08) = 1.11
             Cov[X,Y]      = 1.11 - .96(1.13) = .0252
             E[X2Y 3]      = .11 + 8(.15) + 4(.19) + 32(.08) = 4.63.
         (d) E[YX2]        = 1(12).11+1(22).19+2(12).15+2(22).08 = 1.81
             Cov[Y,X2]     = 1.81 - 1.13(1.56) = .0472.
         (e) Prob[Y = 0 * X = 2] = .03/.3 = .1
             Prob[Y = 1 * X = 2] = .19/.3 = .633
             Prob[Y = 1 * X = 2]     = .08/.3 = .267
             Prob[X = 0 * Y > 0]     = (.21 + .08)/(.51 + .31) = .3537
             Prob[X = 1 * Y > 0]     = (.11 + .15)/(.51 + .31) = .3171
             Prob[X = 2 * Y > 0]     = (.19 + .08)/(.51 + .31) = .3292.




                                                                                                           124
         (f) E[Y * X=0] = 0(.05/.34)+1(.21/.34)+2(.08/.34) = 1.088
            E[Y2 * X=0] = 12(.21/.34)+22(.08/.34) = 1.559
            Var[Y* X=0] = 1.559 - 1.0882 = .3751
            E[Y*X=1]     = 0(.1/.36)+1(.11/.36)+2(.15/.36) = 1.139
            E[Y2*X=1]    = 12(.11/.36)+22(.15/.36) = 1.972
            Var[Y*X=1] = 1.972 - 1.1392 = .6749
            E[Y*X=2]     = 0(.03/.30)+1(.19/.30)+2(.08/.30) = 1.167
            E[Y2*X=2]    = 12(.19/.30)+22(.08/.30) = 1.700
            Var[Y*X=2] = 1.700 - 1.1672 = .6749 = .3381
            E[Var[Y*X]] = .34(.3751)+.36(.6749)+.30(.3381) = .4719
            Var[E[Y*X]] = .34(1.0882)+.36(1.1392)+.30(1.1672) - 1.132 = 1.2781 - 1.2769 = .0012
            E[Var[Y*X]] + Var[E[Y*X]] = .4719 + .0012 = .4731 = Var[Y].

8. Minimum mean squared error predictor. For the joint distribution in Exercise 7, compute
E[y - E[y|x]]2. Now, find the a and b which minimize the function E[y - a - bx]2. Given the solutions, verify
that E[y - E[y|x]]2 < E[y - a - bx]2. The result is fundamental in least squares theory. Verify that the a and b
which you found satisfy (3-68) and (3-69).
                                     (x=0)            (x=1)         (x=2)
E[y - E[y|x]]2 = (y=0)          .05(0 - 1.088)2 + .10(0 - 1.139)2 + .03(0 - 1.167)2
                    (y=1) + .21(1 - 1.088)2 + .11(1 - 1.139)2 + .19(1 - 1.167)2
                    (y=2) + .08(2 - 1.088)2 + .15(2 - 1.139)2 + .08(2 - 1.167)2
               = .4719 = E[Var[y|x]].
The necessary conditions for minimizing the function with respect to a and b are
                              ∂E[y - a - bx]2/∂a = 2E{[y - a - bx](-1)} = 0
                              ∂E[y - a - bx]2/∂b = 2E{[y - a - bx](-x)} = 0.
First dividing by -2, then taking expectations produces
                              E[y] - a - bE[x]         =0
                              E[xy] - aE[x] - bE[x2] = 0.
Solve the first for a = E[y] - bE[x] and substitute this in the second to obtain
                               E[xy] - E[x](E[y] - bE[x]) - bE[x2] = 0
or                            (E[xy] - E[x]E[y])                    = b(E[x2] - (E[x])2)
or                            b = Cov[x,y] / Var[x] = -.0708 / .4731 = -.150
and                           a = E[y] - bE[x] = 1.13 - (-.1497)(.96) = 1.274.
The linear function compared to the conditional mean produces
                                              x=0 x=1 x=2
                              E[y|x]       1.088 1.139 1.167
                              a + bx        1.274 1.124 .974
Now, repeating the calculation above using a + bx instead of E[y|x] produces
                                             (x=0)          (x=1)       (x=2)
E[y - a - bx]2 =              (y=0)       .05(0 - 1.274)2 + .10(0 - 1.124)2 + .03(0 - .974)2
                              (y=1) + .21(1 - 1.274)2 + .11(1 - 1.124)2 + .19(1 - .974)2
                              (y=2) + .08(2 - 1.274)2 + .15(2 - 1.124)2 + .08(2 - .974)2
               = .4950 > .4719.

9. Suppose x has an exponential distribution, f(x) = θe-θx, x > 0. (For an application, see Examples 3.5, 3.8,
and 3.10.) Find the mean, variance, skewness, and kurtosis of x. (Hints: The latter two are defined in
Section 3.3. The Gamma integral in Section 5.4.2b will be useful for finding the raw moments.)
                                                                                         ∞
                                                                                        ∫ θx e
                                                                                             r −θ x
         In order to find the central moments, we will use the raw moments, E[x r ] =                 dx . These
                                                                                        0
can be obtained by using the gamma integral. Making the appropriate substitutions, we have
                                       E[xr] = [θΓ(r+1)]/θr+1 = r!/θ r.
The first four moments are: E[x] = 1/θ, E[x2] = 2/θ2, E[x3] = 6/θ3, and E[x4] = 24/θ4. The mean is, thus,
1/θ and the variance is 2/θ2 - (1/θ)2 = 1/θ2. For the skewness and kurtosis coefficients, we have
                             E[x - 1/θ]3 = E[x3] - 3E[x2]/θ + 3E[x]/θ2 - 1/θ3 = 2/θ3.



                                                                                                             125
The normalized skewness coefficient is 2. The kurtosis coefficient is
                           E[x - 1/θ]4 = E[x4] - 4E[x3]/θ + 6E[x2]/θ2 - 4E[x]/θ3 + 1/θ4 = 9/θ4.
The degree of excess is 6.

10. For the random variable in Exercise 9, what is the probability distribution of the random variable y = e-x?
What is E[y]? Prove that the distribution of this y is a special case of the beta distribution in (3-40).
          If y = e-x, then x = -lny, so the Jacobian is |dx/dy| = 1/y. The distribution of y is, therefore,
                               f(y) = θe-θ(-lny)(1/y) = (θyθ)/y = θyθ-1 for 0 < y < 1.
This is in the form of (3-40) with y instead of x, c = 1, β = 1, and α= θ.

11. If the probability density of y is αy2(1-y)3 for y between 0 and 1, what is α? What is the probability that y
is between .25 and .75?
         This is a beta distribution of the form in (3-40) with α = 3 and β = 4. Therefore, the constant is
Γ(3+4)/(Γ(3)Γ(4)) = 60. The probability is
           .75                     .75
         ∫.25 60y (1-y) dy = 60 ∫.25 (y - 3y + 3y - y )dy = 60(y /3 - 3y /4 + 3y /5 - y /6)| .25 = .79296.
                  2     3                2    3     4   5           3      4       5     6    .75



12. Suppose x has the following discrete probability distribution: X               1 2 3 4
                                                                   Prob[X = x] .1 .2 .4 .3.
Find the exact mean and variance of X. Now, suppose Y = 1/X. Find the exact mean and variance of Y. Find
the mean and variance of the linear and quadratic approximations to Y = f(X). Are the mean and variance of
the quadratic approximation closer to the true mean than those of the linear approximation?
          We will require a number of moments of x, which we derive first:
                   E[x]      = .1(1) + .2(2) + .4(3) + .3(4) = 2.9 = µ
                   E[x2]     = .1(1) + .2(4) + .4(9) + .3(16)      = 9.3
                   Var[x] = 9.3 - 2.92 = .89                       = σ2.
For later use, we also obtain
                   E[x - µ]3 = .1(1 - 2.9)3 + ...                  = -.432
                   E[x - µ]4 = .1(1 - 2.9)4 + ...                  = 1.8737.
The approximation is y = 1/x. The exact mean and variance are
          E[y]     = .1(1) + .2(1/2) + .4(1/3) + .3(1/4) = .40833
          Var[y] = .1(12) + .2(1/4) + .4(1/9) + .3(1/16) - .408332 = .04645.
The linear Taylor series approximation around µ is y ≈ 1/µ + (-1/µ2)(x - µ). The mean of the linear
approximation is 1/µ = .3448 while its variance is (1/µ4)Var[x-µ] = σ2/µ4 = .01258. The quadratic
approximation is             y        ≈ 1/µ + (-1/µ2)(x - µ) + (1/2)(2/µ3)(x - µ)2
                                      = 1/µ - (1/µ2)(x - µ) + (1/µ3)(x - µ)2.
The mean of this approximation is E[y] ≈ 1/µ + σ2/µ3 = .3813 while the variance is approximated by the
variance of the right hand side,
                   (1/µ4)Var[x - µ] + (1/µ6)Var[x - µ]2 - (2/µ5)Cov[(x-µ),(x-µ)2]
                                      = (1/µ4)σ2 + (1/µ6)(E[x - µ]4 - σ4] - (2/µ5)E[x - µ]3
                                      = .01498.
Neither approximation provides a close estimate of the variance. Note that in both cases, it would be possible
simply to evaluate the approximations at the four values of x and compute the means and variances directly.
The virtue of the approach above is that it can be applied when there are many values of x, and is necessary
when the distribution of x is continuous.




                                                                                                            126
13. Interpolation in the chi-squared table. In order to find a percentage point in the chi-squared table
which is between two values, we interpolate linearly between the reciprocals of the degrees of freedom. The
chi-squared distribution is defined for noninteger values of the degrees of freedom parameter [see (3-39)], but
your table does not contain critical values for noninteger values. Using linear interpolation, find the 99%
critical value for a chi-squared variable with degrees of freedom parameter 11.3. (For an application of this
calculation, see Section 8.5.1. and Example 8.6.)
          The 99% critical values for 11 and 12 degrees of freedom are 24.725 and 26.217. To interpolate
linearly between these values for the value corresponding to 11.3 degrees of freedom, we use
                             (1113 . − 1 / 12)
            c = 26.217 +                       (24.725 - 26.217) = 25.2009.
                             (1 / 11 − 1 / 12)

14. Suppose x has a standard normal distribution. What is the pdf of the following random variable?
                  x2
      1       −                1
y=        e       2 ,0 < y <         . [Hints: You know the distribution of z = x2 from (3-30). The density of this z
         2π                2π
is given in (3-39). Solve the problem in terms of y = g(z).]
           We know that z = x2 is distributed as chi-squared with 1 degree of freedom. We seek the density of y
= ke where k = (2π)-2. The inverse transformation is z = 2lnk - 2lny, so the Jacobian is |-2/y| = 2/y. The
     -z/2

density of z is that of Gamma with parameters 1/2 and 1/2. [See (3-39) and the succeeding discussion.] Thus,
                                               (1 / 2)1/ 2 − z / 2 −1/ 2
                                       f(z) =             e       z      , z > 0.
                                                Γ (1 / 2)
Note, Γ(1/2) =        π . Making the substitution for z and multiplying by the Jacobian produces
                                  (1 / 2)1/ 2 2 ( −1/ 2 )( 2 ln k − 2 ln y )
                                   f(y) =      e                             (2 ln k − 2 ln y ) −1/ 2
                                   Γ (1 / 2) y
The exponential term reduces to y/k. The scale factor is equal to 2k/y. Therefore, the density is simply
f(y) = 2(2lnk - 2lny)-1/2 = 2 (lnk - lny)-1/2 = {2/[ln(1/(y(2π)1/2))]}, 0 < y < (2π)-1/2.

15. The fundamental probability transformation. Suppose that the continuous random variable x has
cumulative distribution F(x). What is the probability distribution of the random variable y = F(x)?
(Observation: This result forms the basis of the simulation of draws from many continuous distributions.)
         The inverse transformation is x(y) = F-1(y), so the Jacobian is dx/dy = F-1′(y) = 1/f(x(y)) where f(.) is
the density of x. The density of y is f(y) = f [F-1(y)] × 1/f (x(y)) = 1, 0 < y < 1. Thus, y has a continuous
uniform distribution. Note, then, for purposes of obtaining a random sample from the distribution, we can
sample y1,...,yn from the distribution of y, the continuous uniform, then obtain x1 = x1(y1), ... xn = xn(yn).

16. Random number generators. Suppose x is distributed uniformly between 0 and 1, so f(x) = 1, 0 < x < 1.
Let θ be some positive constant. What is the pdf of y = -(1/θ)lnx. (Hint: See Section 3.5.) Does this suggest
a means of simulating draws from this distribution if one has a random number generator which will produce
draws from the uniform distribution? To continue, suggest a means of simulating draws from a logistic
distribution, f(x) = e-x/(1+e-x)2.
          The inverse transformation is x = e-θy so the Jacobian is dx/dy = θe-θy. Since f(x) = 1, this Jacobian is
also the density of y. One can simulate draws y from any exponential distribution with parameter θ by
drawing observations x from the uniform distribution and computing y = -(1/θ)lnx. Likewise, for the logistic
distribution, the CDF is F(x) = 1/(1 + e-x). Thus, draws y from the uniform distribution may be taken as
draws on F(x). Then, we may obtain x as x = ln[F(x)/(1 - F(x)] = ln[y/(1 - y)].




                                                                                                                127
17. Suppose that x1 and x2 are distributed as independent standard normal. What is the joint distribution of y1
= 2 + 3x1 + 2x2 and y2 = 4 + 5x1? Suppose you were able to obtain two samples of observations from
independent standard normal distributions. How would you obtain a sample from the bivariate normal
distribution with means 1 and 2 variances 4 and 9 and covariance 3?
          We may write the pair of transformations as
                                     y1      2    3 2  x1 
                           y =   =   +                   = b + Ax.
                                     y2      4    5 0  x2 
The problem also states that x ~ N[0,I]. From (3-103), therefore, we have y ~ N[b + A0, AIAN] where
                         2                    13 15
E[y] = b + A0 = b =   , Var[y] = AA′ =                .
                         4                    15 25
        For the second part of the problem, using our result above, we would require the A and b such that
                              4 3
b + A0 = (1,2)′ and AA′ =           . The vector is obviously b = (1,2)′. In order to find the elements of A,
                               3 9
there are a few ways to proceed. The Cholesky factorization used in Exercise 9 is probably the simplest. Let
y1 = 1 + 2x1. Thus, y1 has mean 1 and variance 4 as required. Now, let y2 = 2 + w1x1 + w2x2. The covariance
between y1 and y2 is 2w1, since x1 and x2 are uncorrelated. Thus, 2w1 = 3, or w1 = 1.5. Now, Var[y2] =
                                                                                       2       0 
 w12 + w22 = 9, so w22 = 9 - 1.52 = 6.75. The transformation matrix is, therefore, A =            . This is
                                                                                       15
                                                                                         .   2.598
the Cholesky factorization of the desired AA′ above. It is worth noting, this provides a simple method of
finding the requisite A matrix for any number of variables. Finally, an alternative method would be to use the
characteristic roots and vectors of AA′. The inverse square root defined in Section 2.7.12 would also provide
a method of transforming x to obtain the desired covariance matrix.

18. The density of the standard normal distribution, denoted φ(x), is given in (3-28). The function based on
the ith derivative of the density given by Hi = [(-1)idiφ (x)/dxi]/φ(x), i = 0,1,2,... is called a Hermite polynomial.
By definition, H0 = 1.
          (a) Find the next three Hermite polynomials.
          (b) A useful device in this context is the differential equation
                    drφ(x)/dxr + xdr-1φ(x)/dxr-1 + (r-1)dr-2φ(x)/dxr-2 = 0.
Use this result and the results of part a. to find H4 and H5.
          The crucial result to be used in the derivations is dφ(x)/dx = -xφ(x). Therefore,
                              d2φ(x)/dx2 = (x2 - 1)φ(x)
and                           d3φ(x)/dx3 = (3x - x3)φ(x).
The polynomials are           H1 = x, H2 = x2 - 1, and H3 = x3 - 3x.
For part (b), we solve for drφ(x)/dxr = -xdr-1φ(x)/dxr-1 - (r-1)dr-2φ(x)/dxr-2
Therefore,                    d4φ(x)/dx4 = -x(3x - x3)φ(x) - 3(x2 - 1)φ(x) = (x4 - 6x2 + 3)φ(x)
and                           d5φ(x)/dx5 = (-x5 + 10x3 - 15x)φ(x).
Thus,                         H4 = x4 - 6x2 + 3 and H5 = x5 - 10x3 + 15x.

19. Continuation: orthogonal polynomials: The Hermite polynomials are orthogonal if x has a standard
normal distribution. That is, E[HiHj] = 0 if i ≠ j. Prove this for the H1, H2, and H3 which you obtained above.
                            E[H1(x)H2(x)] = E[x(x2 - 1)] = E[x3 - x] = 0
since the normal distribution is symmetric. Then,
                            E[H1(x)H3(x)] = E[x(x3 - 3x)] = E[x4 - 3x2] = 0.
The fourth moment of the standard normal distribution is 3 times the variance. Finally,
                            E[H2(x)H3(x)] = E[(x2 - 1)(x3 - 3x)] = E[x5 - 4x3 + 3x] = 0
because all odd order moments of the normal distribution are zero. (The general result for extending the
preceding is that in a product of Hermite polynomials, if the sum of the subscripts is odd, the product will be a
sum of odd powers of x, and if even, a sum of even powers. This provides a method of determining the higher
moments of the normal distribution if they are needed. (For example, E[H1H3] = 0 implies that E[x4] =
3E[x2].)



                                                                                                                128
20. If x and y have means µx and µy and variances σ x2 and σ y2 and covariance σxy, what is the approximation
of the covariance matrix of the two random variables f1 = x/y and f2 = xy?
                                                    2 x
                                            σ 2 σ y µ 2 2σ xy µ x
         The elements of JΣJN are (1,1) = 2x +            −
                                            µy      µ 4y       µ 3y
                                        (1,2) = σ 2x - σ 2y µ 2x / µ 4y
                                        (2,2) = σ 2x µ 4y + σ 2y µ 2x + 2σxyµxµy.

21. Factorial Moments. For finding the moments of a distribution such as the Poisson, a useful device is the
factorial moment. (The Poisson distribution is given in Example 3.1.) The density is
                                     f(x) = e-λλx / x!, x = 0,1,2,...

                                                                              ∑ xe λ / x!
                                                           ∞                    ∞
To find the mean, we can use            E[x]       = ∑ x = 0 xf ( x ) =               −λ x
                                                                                x=0

                                                     ∑ e λ / ( x − 1)!
                                                           ∞       − λ x −1
                                                   =
                                                           x =1

                                                   = λ ∑ e λ / y!
                                                              ∞        −λ y
                                                                y =0

                                                 = λ,
since the probabilities sum to 1. To find the variance, we will extend this method by finding E[x(x-1)], and
likewise for other moments. Use this method to find the variance and third central moment of the Poisson
distribution. (Note that this device is used to transform the factorial in the denominator in the probability.)
          Using the same technique,

                                                                                    ∑
                                                          ∞                             ∞
                            E[x(x-1)]              = ∑ x = 0 x ( x − 1) f ( x ) =             x ( x − 1)e − λ λx / x !
                                                                                        x=0

                                                     ∑ e λ / ( x − 2)!
                                                            ∞   −λ x − 2
                                                   =
                                                          x=2

                                                   = λ ∑ e λ / y!
                                                        2   ∞     −λ y
                                                            y =0

                                               = λ2
                                               = E[x2] - E[x]
                                          2
So,                                   E[x ]    = λ2 + λ.
Since E[x] = λ, it follows that Var[x] = (λ + λ) - λ2 = λ. Following the same pattern, the preceding produces
                                            2

                             E[x(x-1)(x-2)]    = E[x3] - 3E[x2] + 2E[x].
                                               = λ3.
                                 3
Therefore,                   E[x ]             = λ3 + 3(λ + λ2) - 2λ
                                               = λ3 + 3λ2 + λ.
                                        3
Then,                        E[x - E[x]]       = E[x3] - 3λE[x2] + 3λ2E[x] - λ3
                                               = λ.

22. If x has a normal distribution with mean µ and standard deviation σ, what is the probability distribution of
y = e x?
          If y = e x, then x = lny and the Jacobian is dx/dy = 1/y. Making the substitution,
                                                 − [ (ln y − µ )/ σ ]
                                                  1
                                           1                          2

                               f(y) =          e 2
                                       σy 2π
This is the density of the lognormal distribution.




                                                                                                                         129
23. If y has a lognormal distribution, what is the probability distribution of y 2?
          Let z = y2. Then, y = z and dy/dz = 1/(2 z ). Inserting these in the density above, we find
                                                                                               2
                                                                          1  1          
                                            1  1 1 − 2  2 ln z − µ  / σ 
                            f(z)        =            e                           ,z > 0
                                          σ 2π z 2 z
                                                             1
                                                     − [ (ln z − 2 µ ) / ( 2 σ)]
                                                                                   2
                                             1
                                        =           e 2                          , z > 0.
                                       (2σ ) z 2π
Thus, z has a lognormal distribution with parameters 2µ and 2σ. The general result is that if y has a lognormal
distribution with parameters µ and σ, y r has a lognormal distribution with parameters rµ and rσ.

24. Suppose y, x1, and x2 have a joint normal distribution with parameters µN = [1, 2, 4]
                             2 3 1
and covariance matrix Σ =  3 5 2
                             1 2 6
       (a) Compute the intercept and slope in the function E[y*x1], Var[y*x1], and the coefficient of
            determination in this regression. (Hint: See Section 3.10.1.)
       (b) Compute the intercept and slopes in the conditional mean function, E[y*x1,x2]. What is
            E[y*x1=2.5,x2=3.3]? What is Var[y*x1=2.5,x2=3.3]?
       First, for normally distributed variables, we have from (3-102),
                            E[y*x]            = µy + Cov[y,x]{Var[x]}-1(x - :x)
and                         Var[y*x]          = Var[y] - Cov[y,x]{Var[x]}-1Cov[x,y]
and                         COD               = Var[E[y*x]] / Var[y]
                                              = Cov[y,x]{Var[x]}-1Cov[x,y] / Var[y].
We may just insert the figures above to obtain the results.
                            E[y*x1]           = 1 + (3/5)(x1 - 2) = -.2 + .6x1,
                            Var[y*x1]         = 2 - 3(1/5)3 = 1/5 = .2
                            COD               = .62(5) / 2 = .9
                                                                                   −1
                                                             5 2 3
                            E[y*x1,x2]         = 1 + [ 3 1]        
                                                            2 6 1
                                               = -.4615 + .6154x1 - .03846x2,
                            Var[y*x1,x2]       = 2 - (.6154,-.03846)(3,1)N = .1923.
                            E[y*x1=2.5,x2=3.3] = 1.3017.
The conditional variance is not a function of x1 or x2. ~

25. What is the density of y = 1/x if x has a chi-squared distribution?
         The density of a chi-squared variable is a gamma variable with parameters 1/2 and n/2 where n is the
degrees of freedom of the chi-squared variable. Thus,
                                                    1    n
                                      (1 / 2) n / 2 − 2 x 2 −1
                             f ( x) =              e     x , x > 0.
                                       Γ ( n / 2)
If y = 1/x then x = 1/y and |dx/dy| = 1/y2. Therefore, after multiplying by the Jacobian,
                                                     1           n
                                                                     +1
                                      (1 / 2) n / 2 − 2 y  1  2
                             f ( y) =              e            , y > 0.
                                       Γ ( n / 2)          y




                                                                                                          130
26. What is the density and what are the mean and variance of y = 1/x if x has the gamma distribution
described in Section 3.4.5.
                                        λP − λx P −1
         The density of x is f ( x ) =        e x , x > 0. If y = 1/x, then x = 1/y, and the Jacobian is |dx/dy|
                                       Γ ( P)
= 1/y2. Using the change of variable formula, as usual, the density of y is
                                  P −1                                                                            P −1
             λP 1 − λ / y  1                                                      ∞        λP 1 − λ / y  1 
 f ( y) =
            Γ ( P) y 2
                       e   
                           y
                                         , y > 0.       The mean is E ( y ) =   ∫0
                                                                                        y
                                                                                            Γ ( P) y 2
                                                                                                       e   
                                                                                                           y
                                                                                                                     dy .    This is a

                                                                                                                         P
                                                                                         λP − λ / y  1 
                                                                                                    ∞
gamma integral (see Section 5.2.4b). Combine terms to obtain E ( y ) =
                                                                                      0 Γ ( P)
                                                                                               e∫     dy. Now, in
                                                                                                     y
order to use the results for the gamma integral, we will have to make a change of variable. Let z = 1/y, so
|dy/dz|        =       1/z2.                        Making              the     change       of       variable,    we
                ∞ λP                1        ∞ λ  P
find E ( y ) =   ∫
               0 Γ ( P)
                        e − λz z P  2  dz =
                                    z             ∫
                                              0 Γ ( P)
                                                       e − λz z P − 2 dz . Now, we can use the gamma integral directly,

                      λP      Γ ( P − 1)     λ
to find E(y) =              ×     P −1
                                         =      . Note that for this to exist, P must be greater than one. We can use
                     Γ ( P)     λ          P −1
the       same       approach to find the variance.                   We start by finding E[y2].                First,
                                              P −1                              P −1
                 λP 1 − λ / y  1 
                 ∞                                   ∞ λP                   1
             ∫                                             ∫     e − λ / y   dy . Once again, this is a gamma integral,
      2              2
E(y ) =     y                 e            dy =
          0     Γ ( P) y    2
                                      y           0  Γ( P)                y
which we can evaluate by first making the change of variable to z = 1/y. The integral is
           ∞ λP                    1        ∞ λP                                   λP      Γ ( P − 2)          λ2
E( y2 ) =    ∫
          0 Γ ( P)
                    e − λz z P −1  2  dz =
                                  z           ∫
                                             0 Γ ( P)
                                                      e − λz z P − 3dz . This is
                                                                                    Γ ( P)
                                                                                           ×
                                                                                               λP − 2
                                                                                                        =
                                                                                                          ( P − 1)( P − 2)
                                                                                                                           .

                                                 λ3
Now, Var[y] = E[y2] - E2[y] =                                , P > 2.
                                         ( P − 1) 2 ( P − 2)

27. Suppose x1 and x2 have the bivariate normal distribution described in Section 3.8. Consider an
extension of Example 3.4, where the bivariate normal distribution is obtained by transforming two
independent standard normal variables. Obtain the distribution of z = exp(y1)exp(y2) where y1 and y2 have
a bivariate normal distribution and are correlated. Solve this problem in two ways. First, use the
transformation approach described in Section 3.6.4. Second, note that z = exp(y1+y2) = exp(w), so you can
first find the distribution of w, then use the results of Section 3.5 (and, in fact, Section 3.4.4 as well).
          The (extremely) hard way to proceed is to define the joint transformations z1 = exp(y1)exp(y2) and z2
= exp(y2). The Jacobian is 1/(z1z2). The joint distribution is the Jacobian times the bivariate normal
distribution, evaluated at y1 = logz1 - logz2 and y2 = logz2, from which it is now necessary to integrate out
z2. Obviously, this is going to be tedious, but the hint gives a much simpler way to proceed. The variable
w = y1+y2 has a normal distribution with mean µ = µ1+µ2 and variance σ2 = (σ12 + σ22 + 2σ12). We already
have a simple result for exp(w) in Exercise 22; this has a lognormal distribution.




                                                                                                                                 131
28. Probability Generating Function. For a discrete random variable, x, the function
                                                          ∞
                                       E[tx] = ∑ x = 0 t x Prob[ X = x ]
is called the probability generating function because in the function, the coefficient on ti is Prob[X=i].
Suppose that x is the number of the repetitions of an experiment with probability π of success upon which the
first success occurs. The density of x is the geometric distribution,
                                      Prob[X=x] = (1 - π)x-1π.
What is the probability generating function?

                                                          ∑
                                                              ∞
                                       E[tx]          =              t x (1 − π) x −1 π
                                                              x =0
                                                           π
                                                                     ∑
                                                                    ∞
                                                      =                  [t (1 − π)] x
                                                        (1 − π)     x =0

                                                           π           1
                                                      =                         .
                                                        (1 − π) 1 − t (1 − π)

29. Moment Generating Function. For the random variable X, with probability density function f(x), if the
function M(t) = E[etx] exists, it is the moment generating function. Assuming the function exists, it can be
shown that drM(t)/dtr|t=0 = E[xr ]. Find the moment generating functions for
         (a) The Exponential distribution of Exercise 9.
         (b) The Poisson distribution of Exercise 21.
                                                                                           ∞                       ∞
                                                                                          ∫ e θe                  ∫ θe
                                                                                               tx   −θ x                 −( θ -t ) x
         For the continuous variable in (a), For f(x) = θexp(-θx), M(t) =                                  dx =                        dx .
                                                                                          0                       0
This is θ times a Gamma integral (see Section 5.4.2b) with p=1, c=1, and a = (θ-t). Therefore,
M(t) = θ/(θ- t).
          For the Poisson distribution,

                              ∑ e e λ / x ! = ∑ e (λe ) / x !
                                     ∞ tx − λ x                      ∞       −λ     t x
                  M(t)     =
                                     x=0                             x =0

                           = ∑ e e e
                                   ∞       − λ λe t − λe t        t x
                                            ( λe ) / x !
                                    x=0

                                  ∑ e (λe ) / x!
                                − λ + λe t     ∞    − λe t        t x
                           = e
                                               x =0
The sum is the sum of probabilities for a Poisson distribution with parameter λe t, which equals 1, so the term
before the summation sign is the moment generating function, M(t) = exp[λ(e t - 1)].

28. Moment generating function for a sum of variables. When it exists, the moment generating function
has a one to one correspondence with the distribution. Thus, for example, if we begin with some random
variable and find that a transformation of it has a particular MGF, we may infer that the function of the
random variable has the distribution associated with that MGF. A useful application is the following:
If x and y are independent, the MGF of x + y is Mx(t)My(t).
          (a) Use this result to prove that the sum of Poisson random variables has a Poisson distribution.
          (b) Use the result to prove that the sum of chi-squared variables has a chi-squared distribution.
               [Note, you must first find the MGF for a chi-squared variate. The density is given in (3-39).]
          (c) The MGF for the standard normal distribution is Mz = exp(-t2/2). Find the MGF for the N[µ,σ2]
             distribution, then find the distribution of a sum of normally distributed variables.

         (a) From the previous problem, Mx(t) = exp[λ(et - 1)]. Suppose y is distributed as Poisson with
parameter µ. Then, My(t)=exp[µ(et-1)]. The product of these two moment generating functions is
Mx(t)My(t)= exp[λ(e t - 1)]exp[µ(e t - 1)] = exp[(λ+µ)(e t - 1)], which is the moment generating function of the
Poisson distribution with parameter λ+µ. Therefore, on the basis of the theorem given in the problem, it
follows that x+y has a Poisson distribution with parameter λ+µ.
         (b) The density of the Chi-squared distribution with n degrees of freedom is [from (3-39)]
                                                                         1   n
                                                      (1 / 2) n / 2 − 2 x 2 −1
                                         f ( x) =                  e     x , x > 0.
                                                       Γ ( n / 2)



                                                                                                                                          132
Let the constant term be k for the present. The moment generating function is
                                                          ∞
                                        M(t)      = k ∫ e tx e − x / 2 x ( n / 2 ) − 1dx
                                                         0
                                                         ∞ − x (1/ 2 − t ) ( n / 2 ) − 1
                                                  = k∫     e              x             dx .
                                                         0
                                                                         -n/2
This is a gamma integral which reduces to M(t) = k(1/2 - t) Γ(n/2). Now, reinserting the constant k and
simplifying produces the moment generating function M(t) = (1 - 2t) -n/2. Suppose that xi is distributed as
chi-squared with ni degrees of freedom. The moment generating function of Σi xi is
                                   ΠiMi(t) = (1 − 2t ) ∑i i
                                                                −       n /2

which is the MGF of a chi-squared variable with n = Σi ni degrees of freedom.
                                                                           [               ]
                                                                                           [ ]          [
         (c) We let y = σz + µ. Then, My(t) = E[exp(ty)] = E e t ( σ z +µ ) = e tµ E e σ tz = e tµ E e ( σ t ) z   ]
                                                                           = exp[µt − (σ t ) / 2]
                                                                    2
                                                  = e µ t e − (σ t ) / 2                       2 2


Using the same approach as in part b., it follows that the moment generating function for a sum of random
variables with means µi and standard deviations σi is
                                                             1           
                                     M
                                       ∑i i
                                          x
                                             = exp 
                                                      i
                                                           ∑
                                                         µ i − 
                                                              2   i
                                                                               ∑
                                                                    σ i2  t 2  .
                                                                                




                                                                                                                       133
Appendix C
Estimation and Inference
1. The following sample is drawn from a normal distribution with mean µ and standard deviation σ:
                           x = 1.3, 2.1, .4, 1.3, .5, .2, 1.8, 2.5, 1.9, 3.2.
Compute the mean, median, variance, and standard deviation of the sample.
                                              ∑ xi
                                                       n

                                           x = i = 1 = 1.52,
                                                       n

                                           ∑i =1 ( xi − x)
                                                       n                  2
                                           2
                                       s =                                    = .9418,
                                                           n−1
                                       s = .97
                                       median = 1.55, midway between 1.3 and 1.8.

2. Using the data in the previous exercise, test the following hypotheses:
        (a) µ > 2.
        (b) µ < .7.
        (c) σ2 = .5.
        (d) Using a likelihood ratio test, test the following hypothesis µ = 1.8, σ2 = .8.

          (a) We would reject the hypothesis if 1.52 is too small relative to the hypothesized value of 2. Since
the data are sampled from a normal distribution, we may use a t test to test the hypothesis. The t ratio is
                             t[9] = (1.52 - 2) / [.97/ 10 ]= -1.472.
The 95% critical value from the t distribution for a one tailed test is -1.833. Therefore, we would not reject the
hypothesis at a significance level of 95%.
          (b) We would reject the hypothesis if 1.52 is excessively large relative to the hypothesized mean of
.7. The t ratio is t[9] = (1.52 - .7) / [.97/ 10 ]= 2.673. Using the same critical value as in the previous
problem, we would reject this hypothesis.
          (c) The statistic (n-1)s2/σ2 is distributed as χ2 with 9 degrees of freedom. This is 9(.94)/.5 =
16.920. The 95% critical values from the chi-squared table for a two tailed test are 2.70 and 19.02. Thus we
would not reject the hypothesis.
          (d) The log-likelihood for a sample from a normal distribution is
                                                      1
                                               ∑
                                                             n
                   lnL = -(n/2)ln(2π) - (n/2)lnσ2 -              ( x − µ) 2
                                                    2σ  2    i =1 i


                                       ∑ ( x − x) = .8476.
                                                           n                  2
                        ∧                  ∧                          i
                                                           i =1
                               . , σ =
The sample values are µ = x = 152              2
                                                 n
The maximized log-likelihood for the sample is -13.363. A useful shortcut for computing the log-likelihood at

                             ∑ ( x − µ ) = ∑ ( x − x) + n( x − µ) . For the hypothesized value of µ
                                n                  2              n               2      2
the hypothesized values is             i                          i =1    i
                                i =1

= 1.8, this is ∑i =1 ( xi − 18
                 n
                             . ) 2 = 9.26. The log-likelihood is -5(ln(2π) - 5(ln.8) - (1/1.6)9.26 = -13.861. The
likelihood ratio statistic is -2(lnL r - lnLu) = .996. The critical value for a chi-squared with 2 degrees of
freedom is 5.99, so we would not reject the hypothesis.




                                                                                                             134
3. Suppose that the following sample is drawn from a normal distribution with mean µ and standard deviation
σ: y = 3.1, -.1, .3, 1.4, 2.9, .3, 2.2, 1.5, 4.2, .4. Test the hypothesis that the mean of the distribution which
produced these data is the same as that which produced the data in Exercise 1. Test the hypothesis assuming
that the variances are the same. Test the hypothesis that the variances are the same using an F test and using a
likelihood ratio test. (Do not assume that the means are the same.)
          If the variances are the same,
                                       x1 ~ N [µ1 , σ12 / n1 ] and x 2 ~ N [µ 2 , σ 22 / n2 ] ,
                                        x1 − x2 ~ N [ µ1 − µ 2 , σ 2 {(1 / n1 ) + (1 / n2 )}],
                                        (n1-1)s12/σ2 ~ χ2[n1-1] and (n2-1)s22/σ2 ~ χ2[n2-1]
                                        (n1-1)s12/σ2 + (n2-1)s22/σ2 ~          χ2[n1 + n2 - 2]

Thus, the statistic                     t =
                                            {( x − x ) − (µ − µ )} / σ [(1 / n ) + (1 / n )]
                                                      1   2     1      2
                                                                                 2
                                                                                            1         2

                                              { (n1 − 1) s12 / σ 2 + (n2 − 1) s22 / σ 2   } / (n1 + n2 − 2)
is the ratio of a standard normal variable to the square root of a chi-squared variable divided by its degrees of
freedom which is distributed as t with n1 + n2 - 2 degrees of freedom. Under the hypothesis that the means are

equal, the statistic is                 t=
                                                  ( x1 − x2 ) / (1 / n1 ) + (1 / n2 )
                                              {(n1 − 1) s12 + (n2 − 1) s22 } / (n1 + n2 − 2)
The sample statistics are               n1 = 10, x 1 = 1.52, s12 = .9418
                                    n2 = 10, x 2 = 1.62, s22 = 2.0907
so t[18] = .1816. This is quite small, so we would not reject the hypothesis of equal means.
         For random sampling from two normal distributions, under the hypothesis of equal variances, the

statistic F[n1-1,n2-1] =
                           [(n − 1)s / σ ] / (n − 1) is the ratio of two independent chi-squared variables, each
                              1
                                    2
                                    1
                                         2
                                                1

                           [(n − 1)s / σ ] / (n − 1)
                             2
                                    2
                                    2
                                         2
                                                  2

divided by its degrees of freedom. This has the F distribution with n1-1 and n2-1 degrees of freedom. If n1 =
n2, the statistic reduces to F[n1-1,n2-1] = s12 / s22 . For our purposes, it is more convenient to put the larger
variance in the denominator. Thus, for our sample data, F[9,9] = 2.0907 / .9418 = 2.2199. The 95%
critical value from the F table is 3.18. Thus, we would not reject the hypothesis of equal variances.
          The likelihood ratio test is based on the test statistic λ = -2(lnL r - lnLu). The log-likelihood for the
joint sample of 20 observations is the sum of the two separate log-likelihoods if the samples are assumed to be
independent. A useful shortcut for computing the log-likelihood arises when the maximum likelihood
                                                                                                              ∧
estimates are inserted: At the maximum likelihood estimates, lnL = (-n/2)[1 + ln(2π) + ln σ 2 ]. So, the log-
likelihood for the sample is lnL2=(-5/2)[1 + ln(2π) + ln((9/10)2.0907)]= -17.35007. (Remember, we don't
make the degrees of freedom correction for the variance estimator.) The log-likelihood function for the
sample of 20 observations is just the sum of the two log-likelihoods if the samples are completely
independent. The unrestricted log-likelihood function is, thus, -13.363+(-17.35001) = -30.713077. To
compute the restricted log-likelihood function, we need the pooled estimator which does not assume that the
                                         ∧
means are identical. This would be σ 2       = [(n1-1) s12 + (n2-1) s22 ]/[n1 + n2]
                                             = [9(.9418) + 9(2.0907)]/20 = 1.36463.
So, the restricted log-likelihood is lnLr = (-20/2)[1 + ln(2π) + ln(1.36463)] = -31.4876. Minus twice the
difference is λ = -2[-31.4876 - (-30.713077)] = 1.541. This is distributed as chi-squared with one degree of
freedom. The critical value is 3.84, so we would not reject the hypothesis.




                                                                                                                  135
4. A common method of simulating random draws from the standard normal distribution is to compute the
sum of 12 draws from the uniform [0,1] distribution and subtract 6. Can you justify this procedure?
        The uniform distribution has mean 2 and variance 1/12. Therefore, the statistic 12( x - 1/2) =
∑i =1 xi - 6 is equivalent to z = n ( x - µ) / σ. As n→∞, this converges to a standard normal variable.
   12


Experience suggests that a sample of 12 is large enough to approximate this result. However, more recently
developed random number generators usually use different procedures based on the truncation error which
occurs in representing real numbers in a digital computer.

5. Using the data in Exercise 1, form confidence intervals for the mean and standard deviation.
         Since the underlying distribution is normal, we may use the t distribution. Using (4-57), we obtain a
95% confidence interval for the mean of 1.52 - 2.262[.97/ 10 ] < µ < 1.52 + 2.262[.97/ 10 ] or
.826 < µ < 2.214. Using the procedure in Example 4.30, we obtain a 95% confidence for σ2 of
9(.941)/19.02 < σ2 < 9(.941)/2.70 or .445 < σ2 < 3.137. Taking square roots gives the confidence interval
for σ, .667 < σ < 1.771.

6. Based on a sample of 65 observations from a normal distribution, you obtain a median of 34 and a standard
deviation of 13.3. Form a confidence interval for the mean. (Hint: Use the asymptotic distribution. See
Example 4.15.) Compare your confidence interval to the one you would have obtained had the estimate of 34
been the sample mean instead of the sample median.
          The asymptotic variance of the median is πσ2/(2n). Using the asymptotic normal distribution instead
of the t distribution, the confidence interval is 34 - 1.96(13.32π/130)2 < µ < 34 + 1.96(13.32π/130)2 or
29.95 < µ < 38.052. Had the estimator been the mean instead of the median, the appropriate asymptotic
variance would be σ2/n, instead, which we would estimate with 13.32/65 = 2.72 compared to 4.274 for the
median. The confidence interval would have been (30.77,37.24), which is somewhat narrower.

7. The random variable x has a continuous distribution f(x) and cumulative distribution function F(x). What
is the probability distribution of the sample maximum? (Hint: In a random sample of n observations, x1, x2,
..., xn, if z is the maximum, then every observation in the sample is less than or equal to z. Use the cdf.)
             If z is the maximum, then every sample observation is less than or equal to z. The probability of this
is Prob[x1 # z, x2 # z, ..., xn # z] = F(z)F(z)...F(z) = [F(z)]n. The density is the derivative, n[F(z)]n-1f(z).

8. Assume the distribution of x is f(x) = 1/θ, 0 < x < θ. In random sampling from this distribution, prove that
the sample maximum is a consistent estimator of θ. Note: you can prove that the maximum is the maximum
likelihood estimator of θ. But, the usual properties do not apply here. Why not? (Hint: Attempt to verify
that the expected first derivative of the log-likelihood with respect to θ is zero.)
          Using the result of the previous problem, the density of the maximum is
                                        n[z/θ]n-1(1/θ), 0 < z < θ.
                                                θ
Therefore, the expected value is E[z] = ∫           zndz = [θn+1/(n+1)][n/θn] = nθ/(n+1). The variance is found
                                                0
                      θ
likewise, E[z2] =    ∫0 z n(z/n) (1/θ)dz = nθ /(n+2) so Var[z] = E[z ] - (E[z]) = nθ /[(n + 1) (n+2)].
                           2      n-1                 2                               2     2      2       2


Using mean squared convergence we see that lim E[z] = θ and lim Var[z] = 0, so that plim z = θ.
                                                    n→∞               n→∞
                                                                                 −x
                                                                            1
9. In random sampling from the exponential distribution, f(x) =                 e θ , x > 0, θ> 0, find the maximum
                                                                            θ
likelihood estimator of θ and obtain the asymptotic distribution of this estimator.
         The log-likelihood is lnL = -nlnθ - (1/θ) ∑i = 1 xi . The maximum likelihood estimator is obtained as
                                                          n

                                                                  ∧
the solution to ∂lnL/∂θ = -n/θ + (1/θ2) ∑i = 1 xi = 0, or θ ML = (1/n) ∑i = 1 xi = x . The asymptotic variance
                                            n                                     n


of the MLE is {-E[∂2lnL/∂θ2]}-1 = {-E[n/θ2 - (2/θ3) ∑i = 1 xi ]}-1. To find the expected value of this random
                                                              n




                                                                                                               136
variable, we need E[xi] = θ. Therefore, the asymptotic variance is θ2/n. The asymptotic distribution is normal
with mean θ and this variance.

10. Suppose in a sample of 500 observations from a normal distribution with mean µ and standard deviation
σ, you are told that 35% of the observations are less than 2.1 and 55% of the observations are less than 3.6.
Estimate µ and σ.
         If 35% of the observations are less than 2.1, we would infer that
                  Φ[(2.1 - µ)/σ] = .35, or (2.1 - µ)/σ = -.385 ⇒ 2.1 - µ = -.385σ.
Likewise,         Φ[(3.6 - µ)/σ] = .55, or (3.6 - µ)/σ = .126 ⇒ 3.6 - µ = .126σ.
                     ∧                 ∧
The joint solution is µ = 3.2301 and σ = 2.9354. It might not seem obvious, but we can also derive asymptotic
standard errors for these estimates by constructing them as method of moments estimators. Observe, first, that
the two estimates are based on moment estimators of the probabilities. Let xi denote one of the 500
observations drawn from the normal distribution. Then, the two proportions are obtained as follows: Let
zi(2.1) = 1[xi < 2.1] and zi(3.6) = 1[xi < 3.6] be indicator functions. Then, the proportion of 35% has been
obtained as z (2.1) and .55 is z (3.6). So, the two proportions are simply the means of functions of the sample
observations. Each zi is a draw from a Bernoulli distribution with success probability π(2.1) = Φ((2.1-µ)/σ)
for zi(2.1) and π(3.6) = Φ((3.6-µ)/σ) for zi(3.6). Therefore, E[ z (2.1)] = π(2.1), and E[ z (3.6)] = π(3.6). The
variances in each case are Var[ z (.)] = 1/n[π(.)(1-π(.))]. The covariance of the two sample means is a bit
trickier, but we can deduce it from the results of random sampling. Cov[ z (2.1), z (3.6)]]
= 1/n Cov[zi(2.1),zi(3.6)], and, since in random sampling sample moments will converge to their population
                  Cov[zi(2.1),zi(3.6)] = plim [{(1/n) ∑i =1 z i(2.1)zi(3.6)} - π(2.1)π(3.6)]. But, zi(2.1)zi(3.6)
                                                          n
counterparts,
must equal [zi(2.1)]2 which, in turn, equals zi(2.1). It follows, then, that
Cov[zi(2.1),zi(3.6)] = π(2.1)[1 - π(3.6)]. Therefore, the asymptotic covariance matrix for the two sample
                                                  1  π(2.1)(1 − π(2.1)) π(2.1)(1 − π(3.6)) 
proportions is Asy.Var[ p(2.1), p(3.6)] = Σ =                                                . If we insert our
                                                  n π(2.1)(1 − π(3.6)) π(3.6)(1 − π(3.6)) 
                                                                     0.000455 0.000315
sample estimates, we obtain Est . Asy.Var[ p( 2.1), p( 3.6)] = S =                    . Now, ultimately, our
                                                                     0.000315 0.000495
estimates of µ and σ are found as functions of p(2.1) and p(3.6), using the method of moments. The moment
equations are
                                   1 n                      2.1 − µ 
                            m2.1 =  ∑i = 1 zi ( 2.1)  - Φ              = 0,
                                   n                        σ 
                                   1 n                      3.6 − µ 
                            m3.6 =  ∑i =1 zi ( 3.6)  - Φ               = 0.
                                    n                       σ 
              ∂m2.1 / ∂µ ∂m2.1 / ∂σ 
Now, let Γ =                         and let G be the sample estimate of Γ. Then, the estimator of the
             ∂m3.6 / ∂µ ∂m3.61 / ∂σ 
                                   ∧   ∧
asymptotic covariance matrix of ( µ , σ ) is [GS-1G′]-1. The remaining detail is the derivatives, which are just
∂m2.1/∂µ = (1/σ)φ((2.1-µ)/σ) and ∂m2.1/∂σ = (2.1-µ)/σ[Mm2.1/Mσ] and likewise for m3.6. Inserting our sample
                           0.37046 − 014259
                                          .      
estimates produces G =                           . Finally, multiplying the matrices and computing the
                           0.39579 0.04987 
                                                . 178 − 012492
                                             010          .      
necessary inverses produces [GS-1G′]-1 =                          . The asymptotic distribution would be
                                             − 012
                                                 . 492 016973
                                                         .        
normal, as usual. Based on these results, a 95% confidence interval for µ would be 3.2301 ± 1.96(.10178)2 =
2.6048 to 3.8554.




                                                                                                            137
11. For random sampling from a normal distribution with nonzero mean µ and standard deviation σ, find the
asymptotic joint distribution of the maximum likelihood estimators of σ/µ and µ2/σ2.
                                                                                   ∧
                                                                                                     (        ) were given
                                                          ∧                                                   2
            The maximum likelihood estimators, µ = (1/n) ∑i = 1 xi and σ 2 = (1/n) ∑i =1 xi − x
                                                                       n                         n


in (4-49). By the invariance principle, we know that the maximum likelihood estimators of µ/σ and µ2/σ2 are
∧   ∧         ∧   ∧                                                        ∧
µ / σ and µ / σ 2 and the maximum likelihood estimate of σ is              σ . To obtain the asymptotic joint distribution
                               ∧       ∧                                                                 ∧        ∧
of the two functions of µ and σ , we first require the asymptotic joint distribution of µ and σ 2 . This is
normal with mean vector (µ,σ2) and covariance matrix equal to the inverse of the information matrix. This is
the inverse of
                                                   
                                                                                                     ∑             
                                                                                                     n
      ∂ 2 log L / ∂µ 2   ∂ 2 log L / ∂µ∂σ 2                − n / σ2                − (1 / σ 3 )       ( x − µ)  
                                                                                                     i =1 i
 − E 2                                     2 2
                                                 = 
                                                                                                             ∑ (      )
                                                                                                                  2
                                                                   ∑
                     2      2                                       n                                      n
      ∂ log L / ∂σ   ∂µ ∂   log L / ∂ ( σ  )               3                         4           6
                                                 − (1 / σ ) i =1 ( xi − µ ) n / (2σ ) − (1 / σ ) i =1 xi − µ 
                                                                                                                      2
The off diagonal term has expected value 0. Each term in the sum in the lower right has expected value σ , so,
after collecting terms, taking the negative, and inverting, we obtain the asymptotic covariance matrix,
        σ 2 / n      0 
V =                 4     . To obtain the asymptotic joint distribution of the two nonlinear functions, we use
         0       2σ / n
the multivariate version of Theorem 4.4. Thus, we require H = JVJ′ where
      ∂(µ / σ ) / ∂µ      ∂(µ / σ ) / ∂σ 2      1/ σ     − µ / (2σ 3 ) 
J=        2     2            2    2       2  =         2                . The product is
     ∂(µ / σ ) / ∂µ ∂(µ / σ ) / ∂σ           2µ / σ    − µ / σ 4 
        1  1 + µ 2 / (2σ 2 )    2µ / σ + ( µ / σ ) 3 
H=                                                      .
        n 2µ / σ + (µ / σ ) 3 4µ 2 / σ 2 + 2µ 4 / σ 4 

12. The random variable x has the following distribution: f(x) = e-λλx / x!, x = 0,1,2,... The following random
sample is drawn: 1,1,4,2,0,0,3,2,3,5,1,2,1,0,0. Carry out a Wald test of the hypothesis that λ= 2.
         For random sampling from the Poisson distribution, the maximum likelihood estimator of λ is x =
                                        The second derivative of the log-likelihood is − ∑i = 1 xi /λ2, so the the
                                                                                                     n
25/15.      (See Example 4.18.)
asymptotic variance is λ/n. The Wald statistic would be
                                       ( x − 2)
                                                  2

                                   W =     ∧
                                                      = [(25/15 - 2)2]/[(25/15)/15] = 1.0.
                                     λ/ n
The 95% critical value from the chi-squared distribution with one degree of freedom is 3.84, so the hypothesis
would not be rejected. Alternatively, one might estimate the variance of with s2/n = 2.38/15 = 0.159. Then,
the Wald statistic would be (1.6 - 2)2/.159 = 1.01. The conclusion is the same.

13. Based on random sampling of 16 observations from the exponential distribution of Exercise 9, we wish to
test the hypothesis that θ =1. We will reject the hypothesis if x is greater than 1.2 or less than .8. We are
interested in the power of this test.
(a) Using the asymptotic distribution of x graph the asymptotic approximation to the true power function.
(b) Using the result discussed in Example 4.17, describe how to obtain the true power function for this test.
          The asymptotic distribution of x is normal with mean θ and variance θ2/n. Therefore, the power
function based on the asymptotic distribution is the probability that a normally distributed variable with mean
equal to θ and variance equal to θ2/n will be greater than 1.2 or less than .8. That is,
                             Power = Φ[(.8 - θ)/(θ/4)] + 1 - Φ[(1.2 - θ)/(θ/4)].
Some values of this power function and a sketch are given below:




                                                                                                                      138
   θ     Approx.   True
          Power   Power
 .4      1.000   1.000
 .5       .992    .985
 .6       .908    .904
 .7       .718    .736
 .8       .522    .556
 .9       .420    .443
1.0       .423    .421
1.1       .496    .470
1.2       .591    .555
1.3       .685    .647
1.4       .759    .732
1.5       .819    .801
1.6       .864    .855
1.7       .897    .895
1.8       .922    .925
1.9       .940    .946
2.0       .954    .961
2.1       .963    .972

Note that the power function does
not have the symmetric shape of Figure 4.7 because both the variance and the mean are changing as θ
changes. Moreover, the power is not the lowest at the value of θ = 1, but at about θ = .9. That means
(assuming that the normal distribution is appropriate) that the test is slightly biased. The size of the test is its
power at the hypothesized value, or .423, and there are points at which the power is less than the size.
         According to the example cited, the true distribution of x is that of θ/(2n) times a chi-squared
variable with 2n degrees of freedom. Therefore, we could find the true power by finding the probability that a
chi-squared variable with 2n degrees of freedom is less than .8(2n/θ) or greater than 1.2(2n/θ). Thus,
                            True power = F(25.6/θ) + 1 - F(38.4/θ)
where F(.) is the CDF of the chi-squared distribution with 32 degrees of freedom. Values for the correct
power function are shown above. Given that the sample is only 16 observations, the closeness of the
asymptotic approximation is quite impressive.

14. For the normal distribution, µ2k = σ2k(2k)!/(k!2k) and µ2k+1 = 0, k = 0,1,... Use this result to show that in
                                             6 0 
Example 4.27, θ1 = 0 and θ2 = 3, and JVJ′ =         .
                                             0 24 
             For θ1 and θ2, just plug in the result above using k = 2, 3, and 4. The example involves 3 moments,
m2, m3, and m4. The asymptotic covariance matrix for these three moments can be based on the formulas
given in Example 4.26. In particular, we note, first, that for the normal distribution, Asy.Cov[m2,m3] and
Asy.Cov[m3,m4] will be zero since they involve only odd moments, which are all zero. The necessary even
moments are µ2 = σ2, µ4 = 3σ4. µ6 = 15σ6, µ8 = 105σ8. The three variances will be
                      n[Asy.Var(m2)] = µ4 - µ22 = 3σ4 - (σ2)2 = 2σ4
                      n[Asy.Var(m3)] = µ6 - µ32 - 6µ4µ2 + 9µ23 = 6σ6
                      n[Asy.Var(m4)] = µ8 - µ42 - 8µ5µ3 + 16µ2µ32 = 96σ8
and                   n[Asy.Cov(m2,m4)] = µ6 - µ2µ4 - 4µ32 = 12σ6.
The elements of J are given in Example 4.27. For the normal distribution, this matrix would be J =
 0            1 / σ3     0 
          2                     . Multiplying out JVJN produces the result given above.
 − 6 / σ        0    1 / σ 4 

15. Testing for normality. One method that has been suggested for testing whether the distribution underlying
a sample is normal is to refer the statistic L = n{skewness2/6 + (kurtosis-3)2/24} to the chi-squared
distribution with 2 degrees of freedom. Using the data in Exercise 1, carry out the test.




                                                                                                               139
          The skewness coefficient is .14192 and the kurtosis is 1.8447. (These are the third and fourth
moments divided by the third and fourth power of the sample standard deviation.) Inserting these in the
expression above produces L = 10{.141922/6 + (1.8447 - 3)2/24} = .59. The critical value from the
chi-squared distribution with 2 degrees of freedom (95%) is 5.99. Thus, the hypothesis of normality cannot be
rejected.

16. Suppose the joint distribution of the two random variables x and y is
                 f(x,y) = θe − (β + θ ) y (βy ) x / x! β,θ 0, y $ 0, x = 0,1,2,...
          (a) Find the maximum likelihood estimators of β and θ and their asymptotic joint distribution.
          (b) Find the maximum likelihood estimator of θ/(β+θ) and its asymptotic distribution.
                                                            x
          (c) Prove that f(x) is of the form f(x) = γ(1-γ) , x = 0,1,2,...
               Then, find the maximum likelihood estimator of γ and its asymptotic distribution.
          (d) Prove that f(y*x) is of the form λe-λy(λy) x/x! Prove that f(y|x) integrates to 1. Find the
               maximum likelihood estimator of λ and its asymptotic distribution. (Hint: In the conditional
               distribution, just carry the xs along as constants.)
          (e) Prove that f(y) = θe-θy then find the maximum likelihood estimator of θ and its asymptotic
               variance.
          (f) Prove that f(x|y) = e-βy (βy) x/x! . Based on this distribution, what is the maximum likelihood
              estimator of β?
          The log-likelihood is lnL = nlnθ - (β+θ) ∑i =1 yi + lnβ ∑i =1 xi + ∑i =1 xi log yi - ∑i =1 log( xi !)
                                                                     n                         n                       n                n


                                                               ∂lnL/∂θ = n/θ- ∑i =1 yi
                                                                                           n
The first and second derivatives are

                                                                              = - ∑i =1 yi + ∑i =1 xi /β
                                                                                     n                         n
                                                               ∂lnL/∂β
                                                               ∂2lnL/∂θ2 = -n/θ2
                                                               ∂2lnL/∂β2 = - ∑i =1 xi /β2
                                                                                     n


                                                               ∂2lnL/∂β∂θ = 0.
                                                                      ∧                            ∧
Therefore, the maximum likelihood estimators are θ = 1/ y and β = x / y and the asymptotic covariance
                           n / θ 2                      0     
matrix is the inverse of E                                  2  . In order to complete the derivation, we will require the
                                                 ∑
                                                     n
                               0                         x /β 
                                                   i =1 i    
expected value of ∑i =1 xi = nE[xi]. In order to obtain E[xi], it is necessary to obtain the marginal distribution
                        n


                                    ∞                                                          ∞
                                ∫       θe − (β + θ ) y (βy ) x / x ! dy = β x (θ / x !)   ∫ e
                                                                                                       − (β + θ ) y
of xi, which is f(x) =                                                                                                y x dy.   This is βx(θ/x!) times a
                                0                                                          0
gamma integral. This is f(x) = βx(θ/x!)[Γ(x+1)]/(β+θ)x+1. But, Γ(x+1) = x!, so the expression reduces to
                                                                x
                                      f(x) = [θ/(β+θ)][β/(β+θ)] .
Thus, x has a geometric distribution with parameter π = θ/(β+θ). (This is the distribution of the number of
tries until the first success of independent trials each with success probability 1-π. Finally, we require the
                                                                          ∞
expected value of xi, which is E[x] = [θ/(β+θ)] ∑ x = 0 x[β/(β+θ)] = β/θ. Then, the required asymptotic
                                                                                                       x

                                                          −1
                     n / θ 2       0          θ 2 / n   0 
covariance matrix is                     2  =                .
                      0     n(β / θ) / β     0     βθ / n
         The maximum likelihood estimator of θ/(β+θ) is is
                            ∧
                    θ / (β + θ) = (1/ y )/[ x / y + 1/ y ] = 1/(1 + x ).
Its asymptotic variance is obtained using the variance of a nonlinear function
     V = [β/(β+θ)]2(θ2/n) + [-θ/(β+θ)]2(βθ/n) = βθ2/[n(β+θ)3].
The asymptotic variance could also be obtained as [-1/(1 + E[x])2]2Asy.Var[ x ].)




                                                                                                                                                   140
          For part (c), we just note that γ = θ/(β+θ). For a sample of observations on x, the log-likelihood
                                            lnL = nlnγ + ln(1-γ) ∑i =1 xi
                                                                                  n
would be

                                            ∂lnL/dγ = n/γ - ∑i =1 xi /(1-γ).
                                                                              n


A solution is obtained by first noting that at the solution, (1-γ)/γ = x = 1/γ - 1. The solution for γ is, thus,
∧
γ = 1 / (1 + x ).Of course, this is what we found in part b., which makes sense.
                                       f ( x, y)   θe − (β + θ ) y (βy ) x (β + θ) x (β + θ)
          For part (d) f(y|x) =                  =                                           . Cancelling terms and gathering
                                         f ( x)                     x ! θ βx
the remaining like terms leaves f(y|x) = (β + θ)[(β + θ) y ] x e − (β + θ ) y / x ! so the density has the required form

                                       {                }∫ e
                                                         ∞
with λ = (β+θ). The integral is [ λx +1 ] / x !                − λy
                                                                      y x dy . This integral is a Gamma integral which equals
                                                         0
Γ(x+1)/λx+1, which is the reciprocal of the leading scalar, so the product is 1. The log-likelihood function is
                     lnL = nlnλ - λ ∑i =1 yi + lnλ ∑i =1 xi - ∑i =1 ln xi !
                                            n                   n                     n


                     ∂lnL/∂λ = ( ∑i =1 xi + n)/λ - ∑i =1 yi .
                                        n                       n


                     ∂2lnL/∂λ2 = -( ∑i =1 xi + n)/λ2.
                                            n


Therefore, the maximum likelihood estimator of λ is (1 +                          x )/ y and the asymptotic variance, conditional on
                    ∧
the xs is Asy.Var. λ  = (λ2/n)/(1 + x )
                     
          Part (e.) We can obtain f(y) by summing over x in the joint density. First, we write the joint density

                                                                                                ∑ e
                                                                                                    ∞
as   f ( x , y ) = θe − θy e −βy (βy ) x / x ! . The sum is, therefore, f ( y ) = θe − θy                   − βy
                                                                                                                   (βy ) x / x! . The sum is
                                                                                                    x =0
that of the probabilities for a Poisson distribution, so it equals 1. This produces the required result. The
maximum likelihood estimator of θ and its asymptotic variance are derived from
                                            lnL = nlnθ - θ ∑i =1 yi
                                                                          n


                                            ∂lnL/∂θ = n/θ - ∑i =1 yi
                                                                              n


                                        ∂2lnL/∂θ2 = -n/θ2.
Therefore, the maximum likelihood estimator is 1/ y and its asymptotic variance is θ2/n. Since we found f(y)
by factoring f(x,y) into f(y)f(x|y) (apparently, given our result), the answer follows immediately. Just divide the
expression used in part e. by f(y). This is a Poisson distribution with parameter βy. The log-likelihood
function and its first derivative are
                                lnL = -β ∑i =1 yi + ln ∑i =1 xi + ∑i =1 xi ln yi - ∑i =1 ln xi !
                                                n                     n                   n             n


                                ∂lnL/∂β = - ∑i =1 yi + ∑i =1 xi /β,
                                                    n                     n

                                ∧
from which it follows that β = x / y .

17. Suppose x has the Weibull distribution, f(x) = αβxβ-1exp(-αxβ), x, α, β > 0.
(a) Obtain the log-likelihood function for a random sample of n observations.
(b) Obtain the likelihood equations for maximum likelihood estimation of α and β. Note that the first
provides an explicit solution for α in terms of the data and β. But, after inserting this in the second, we obtain
only an implicit solution for β. How would you obtain the maximum likelihood estimators?
(c) Obtain the second derivatives matrix of the log-likelihood with respect to α and β. The exact expectations
of the elements involving β involve the derivatives of the Gamma function and are quite messy analytically.
Of course, your exact result provides an empirical estimator. How would you estimate the asymptotic
covariance matrix for your estimators in part (b)?



                                                                                                                                       141
(d) Prove that αβCov[lnx,xβ] = 1. (Hint: Use the fact that the expected first derivatives of the log-likelihood
function are zero.)
         The log-likelihood and its two first derivatives are
                  logL = nlogα + nlogβ + (β-1) ∑i =1 log xi - α ∑i = 1 xiβ
                                                         n                      n


                  ∂logL/∂α = n/α - ∑i = 1 xiβ
                                          n



                                                         ∑ (log x ) x
                                                                 n
                  ∂logL/∂β = n/β + ∑i = 1 log xi - α
                                          n                                     β
                                                                 i =1   i       i
                                                                            ∧
Since the first likelihood equation implies that at the maximum, α = n / ∑i =1 xiβ , one approach would be to
                                                                                        n


scan over the range of β and compute the implied value of α. Two practical complications are the allowable
range of β and the starting values to use for the search.
         The second derivatives are
                  ∂2lnL/∂α2 = -n/α2
                  ∂2lnL/∂β2 = -n/β2 - α ∑i =1 (log xi ) 2 xiβ
                                              n


                  ∂2lnL/∂α∂β = - ∑i =1 (log xi ) xiβ .
                                      n


If we had estimates in hand, the simplest way to estimate the expected values of the Hessian would be to
evaluate the expressions above at the maximum likelihood estimates, then compute the negative inverse. First,
since the expected value of ∂lnL/∂α is zero, it follows that E[xiβ] = 1/α. Now,
                            E[∂lnL/∂β] = n/β + E[ ∑i = 1 log xi ] - αE[ ∑i =1 (log xi ) xiβ ]= 0
                                                             n                      n


as well. Divide by n, and use the fact that every term in a sum has the same expectation to obtain
                           1/β + E[lnxi] - E[(lnxi)xiβ]/E[xiβ] = 0.
Now, multiply through by E[xiβ] to obtain E[xiβ] = E[(lnxi)xiβ] - E[lnxi]E[xiβ]
or                         1/(αβ) = Cov[lnxi,xiβ].

18. The following data were generated by the Weibull distribution of Exercise 17:
                  1.3043 .49254 1.2742 1.4019 .32556 .29965 .26423
                  1.0878 1.9461 .47615 3.6454 .15344 1.2357 .96381
                  .33453 1.1227 2.0296 1.2797 .96080 2.0070
        (a) Obtain the maximum likelihood estimates of α and β and estimate the asymptotic covariance
            matrix for the estimates.
        (b) Carry out a Wald test of the hypothesis that β = 1.
        (c) Obtain the maximum likelihood estimate of α under the hypothesis that β = 1.
        (d) Using the results of a. and c. carry out a likelihood ratio test of the hypothesis that β = 1.
        (e) Carry out a Lagrange multiplier test of the hypothesis that β = 1.
        As suggested in the previous problem, we can concentrate the log-likelihood over α. From ∂logL/∂α
= 0, we find that at the maximum, α = 1/[(1/n) ∑i = 1 xiβ ]. Thus, we scan over different values of β to seek the
                                                    n


value which maximizes logL as given above, where we substitute this expression for each occurrence of α.




                                                                                                            142
Values of β and the log-likelihood for a range of values of β are listed and shown in the figure below.
        β           logL
        0.1       -62.386
        0.2       -49.175
        0.3       -41.381
        0.4       -36.051
        0.5       -32.122
        0.6       -29.127
        0.7       -26.829
        0.8       -25.098
        0.9       -23.866
        1.0       -23.101
        1.05      -22.891
        1.06      -22.863
        1.07      -22.841
        1.08      -22.823
        1.09      -22.809
        1.10      -22.800
        1.11      -22.796
        1.12      -22.797
        1.2       -22.984
        1.3       -23.693

The maximum occurs at β = 1.11. The
implied value of α is 1.179. The negative of the second derivatives matrix at these values and its inverse are
    ∧ ∧   2555  .    9.6506            ∧ ∧  .04506 −.2673
 I α , β =                 and I -1  α , β =               .
               9.6506 27.7552                  −.2673 .04148
The Wald statistic for the hypothesis that β = 1 is W = (1.11 - 1)2/.041477 = .276. The critical value for a
test of size .05 is 3.84, so we would not reject the hypothesis.
                         ∧
         If β = 1, then α = n / ∑i = 1 xi = 0.88496. The distribution specializes to the geometric distribution
                                    n


if β = 1, so the restricted log-likelihood would be
                   logLr = nlogα - α ∑i =1 xi = n(logα - 1) at the MLE.
                                            n


logLr at α = .88496 is -22.44435. The likelihood ratio statistic is -2logλ = 2(23.10068 - 22.44435) = 1.3126.
Once again, this is a small value. To obtain the Lagrange multiplier statistic, we would compute
                                                                              −1
                                        − ∂ 2 log L / ∂α 2 − ∂ 2 log L / ∂α∂β ∂ log L / ∂α 
          [∂ log L / ∂α ∂ log L / ∂β] − ∂ 2 log L / ∂α∂β − ∂2 log L / ∂β2   ∂ log L / ∂β 
                                                                                         
at the restricted estimates of α = .88496 and β = 1. Making the substitutions from above, at these values, we
would have
                    ∂logL/∂α = 0
                                                     1 n
                    ∂logL/∂β = n + ∑i = 1 log xi - ∑i =1 xi log xi = 9.400342
                                          n

                                                     x
                                        2
                   ∂2logL/∂α2 = − nx = -25.54955
                                    1 n
                   ∂2logL/∂β2 = -n - ∑i =1 xi (log xi ) 2 = -30.79486
                                    x
                   ∂2logL/∂α∂β = − ∑i = 1 xi log xi = -8.265.
                                            n


The lower right element in the inverse matrix is .041477. The LM statistic is, therefore, (9.40032)2.041477 =
2.9095. This is also well under the critical value for the chi-squared distribution, so the hypothesis is not
rejected on the basis of any of the three tests.




                                                                                                          143
19. We consider forming a confidence interval for the variance of a normal distribution. As shown in
Example 4.29, the interval is formed by finding clower and cupper such that Prob[clower < χ2[n-1] < cupper] = 1 - α.
The endpoints of the confidence interval are then (n-1)s2/cupper and (n-1)s2/clower. How do we find the
narrowest interval? Consider simply minimizing the width of the interval, cupper - clower subject to the
constraint that the probability contained in the interval is (1-α). Prove that for symmetric and asymmetric
distributions alike, the narrowest interval will be such that the density is the same at the two endpoints.
          The general problem is to minimize Upper - Lower subject to the constraint F(Upper) - F(Lower) = 1
- α, where F(.) is the appropriate chi-squared distribution. We can set this up as a Lagrangean problem,
          minL,U L* = U - L + λ{(F(U) - F(L)) - (1 - α)}
The necessary conditions are
          ∂L*/∂U = 1 + λf(U) = 0
          ∂L*/∂L = -1 - λf(L) = 0
          ∂L*/∂λ = (F(U) - F(L)) - (1 - α) = 0
It is obvious from the first two that at the minimum, f(U) must equal f(L).

20. Using the results in Example 4.26, and Section 4.7.2, estimate the asymptotic covariance matrix of the
method of moments estimators of P and λ based on m−1 ' and m2′ . (Note: You will need to use the data in
Table 4.1 to estimate V.)
         Using the income data in Table 4.1, (1/n) times the covariance matrix of 1/xi and xi2 is
      .000068456 − 2.811 
V =                            . The moment equations used to estimate P and λ are
       − 2.811       228050.
E[m−1 ' − λ / ( P − 1)] = 0 and E[m2 ' − P( P + 1) / λ ] = 0 . The matrix of derivatives with respect to P
              λ / ( P − 1) 2      − λ / ( P − 1) 
and λ is G =                   2                3
                                                    . The estimated asymptotic covariance matrix is
              − (2 P + 1) / λ 2 P( P + 1) / λ 
               .17532        .0073617 
[GV-1G′]-1 =                          .
              .0073617 .00041871




                                                                                                               144
Appendix D
Large Sample Distribution Theory
There are no exercises for Appendix D.




                                         145
Appendix E
Computation and Optimization
1. Show how to maximize the function
                              1 − (β − c ) 2 / 2
                   f(β) =        e
                              2π
with respect to β for a constant, c, using Newton's method. Show that maximizing logf(β) leads to the same
solution. Plot f(β) and logf(β).
          The necessary condition for maximizing f(β) is
                                 1 − (β − c ) 2 / 2
                   df(β)/dβ =        e              [-(β - c)] = 0 = -(β - c)f(β).
                                 2π
The exponential function can never be zero, so the only solution to the necessary condition is β = c. The
second derivative is d2f(β)/dβ2 = -(β-c)df(β)/dβ - f(β) = [(β-c)2 - 1]f(β). At the stationary value b = c, the
second derivative is negative, so this is a maximum. Consider instead the function g(β) = logf(β) =
-(1/2)ln(2π) - (1/2)(β - c)2. The leading constant is obviously irrelevant to the solution, and the quadratic is a
negative number everywhere except the point β = c. Therefore, it is obvious that this function has the same
maximizing value as f(β). Formally, dg(β)/dβ = -(β - c) = 0 at β = c, and d2g(β)/dβ2 = -1, so this is indeed
the maximum. A sketch of the two functions appears below.




Note that the transformed function is concave everywhere while the original function has inflection points.




                                                                                                             146
2. Prove that Newton’s method for minimizing the sum of squared residuals in the linear regression model
will converge to the minimum in one iteration.
          The function to be maximized is f(β) = (y - Xβ)′(y - Xβ). The required derivatives are
∂f(β)/∂β = -X′(y - Xβ) and ∂2f(β)/∂β∂β∂ = X′X. Now, consider beginning a Newton iteration at an
arbitrary point, β0. The iteration is defined in (12-17),
β1 = β0 - (X′X)-1{-X′(y - Xβ0)} = β0 + (X′X)-1X′y - (X′X)-1X′Xβ0 = (X′X)-1X′y = b.
Therefore, regardless of the starting value chosen, the next value will be the least squares coefficient vector.

                                                                          e −λ i λ i yi
3. For the Poisson regression model, Prob[Yi = yi|xi] =                                 where λi = eβ'x i . The log-likelihood
                                                                              yi !
function is lnL = ∑i = 1 logProb[Yi = yi|xi].
                         n


         (a) Insert the expression for λi to obtain the log-likelihood function in terms of the observed data.
         (b) Derive the first order conditions for maximizing this function with respect to β.
         (c) Derive the second derivatives matrix of this criterion function with respect to β. Is this matrix
             negative definite?
         (d) Define the computations for using Newton’s method to obtain estimates of the unknown
             parameters.
         (e) Write out the full set of steps in an algorithm for obtaining the estimates of the parameters of this
             model. Include in your algorithm a test for convergence of the estimates based on Belsley’s
             suggested criterion.
         (f) How would you obtain starting values for your iterations?
         (g) The following data are generated by the Poisson regression model with logλ = α + βx.
              y   6            7     4    10    10         6      4      7         2            3           6              5            3     3    4
              x 1.5          1.8   1.8   2.0   1.3       1.6    1.2    1.9       1.8          1.0         1.4             .5           .8   1.1   .7
Use your results from parts (a) - (f) to compute the maximum likelihood estimates of α and β. Also obtain
estimates of the asymptotic covariance matrix of your estimates.
         The log-likelihood is
         logL = ∑i = 1 [-λi + yilnλi - lnyi!]
                     n
                                                                                              (          )
                                                         = - ∑i =1 eβ'x i + ∑i =1 yi β' xi - ∑i =1 log yi !
                                                                n                    n                                n


                                                         = - ∑i =1 eβ'x i + β′ ∑i =1 xi yi - ∑i =1 log yi !
                                                                n                        n                      n


The necessary condition is MlnL/Mβ = - ∑i =1 xi eβ' x i +  ∑i =1 xi yi = 0 or XNy = ∑i =1 xi λi . It is useful to
                                                     n                      n                                                  n


note, since E[yi*xi] = λi = eβ xi, the first order condition is equivalent to ∑i =1 xi yi = ∑i = 1 xiE[yi*xi] or
                                     N                                          n            n


XNy = XNE[y], which makes sense. We may write the first order condition as MlnL/Mβ = ∑i =1 xi(yi - λi) =
                                                                                                n


0
which is quite similar to the counterpart for the classical regression if we view (yi - λi) = (yi - E[yi*xi]) as a
residual. The second derivatives matrix is MlnL/MβMβN = - ∑i =1 ( eβ' x i )xi xi ' = -                                        ∑ λ x x ' . This is a
                                                                                 n                                                 n
                                                                                                                                   i =1 i i i
negative definite matrix. To prove this, note, first, that λi must always be positive. Then, let Ω be a diagonal
matrix whose ith diagonal element is λ i and let Z = ΩX. Then, MlnL/MβMβN = -ZNZ which is clearly
negative definite. This implies that the log-likelihood function is globally concave and finding its maximum
using NewtonNs method will be straightforward and reliable.
         The iteration for NewtonNs method is defined in (5-17). We may apply it directly in this problem.
The computations involved in using Newton's method to maximize lnL will be as follows:
   (1) Obtain starting values for the parameters. Because the log-likelihood function is globally concave, it
will usually not matter what values are used. Most applications simply use zero. One suggestion which does

                                     [∑ q x x '] [∑ q x y ] where q = log(max(1,y )).
                                         n          −1         n
appear in the literature is β0 =         i =1 i i i            i =1 i i i                     i                                i

                                                                                              −1
                                                                                                 
                                                                                                        ∑ x ( y − λ ) .
                                          ∧         ∧                        ∧                                                     ∧
                                                                      ∑
                                                                        n                                    n
         (2) The iteration is computed as β t + 1 = β t +                   λ i x i x i '                                          i
                                                                        i =1                                 i =1 i       i
                                                                                         


                                                                                                                                                       147
                                               ∧
         (3) Each time we compute β t + 1 , we should check for convergence. Some possibilities are
            (a) Gradient: Are the elements of MlnL/Mβ small?
                                  ∧        ∧
            (b) Change: Is β t + 1 - β t small?
            (c) Function rate of change: Check the size of
                                                                                     −1
                          
                              ∑ x ( y − λ ) ′ ∑ λ x x ' ∑ x ( y − λ )
                                  n                ∧           n       ∧                  n                ∧
                     δt =                             i                   i                                   i
                                 i =1 i   i                   i =1            i i        i =1 i       i

                                           ∧
                  before computing β t + 1 . This measure describes what will happen to the function
               at the next value of β. This is Belsley's criterion.
         (4) When convergence has been achieved, the asymptotic covariance matrix for the
            estimates is estimated with the inverse matrix used in the iterations.

       Using the data given in the problem, the results of the above computations are
    Iter.        α          β             lnL           MlnL/Mα         MlnL/Mβ        Change
     0           0         0        -102.387          65.             95.1            296.261
     1 1.37105 2.17816 -1442.38                     -1636.25 -2788.5                  1526.36
     2 .619874 2.05865 -461.989                     -581.966 -996.711                  516.92
     3 .210347 1.77914 -141.022                     -195.953 -399.751                 197.652
     4 .351893 1.26291 -51.2989                     -57.9294 -102.847                  30.616
     5 .824956 .698768 -33.5530                     -12.8702 -23.1932                 2.75855
     6 1.05288 .453352 -32.0824                     -1.28785 -2.29289                 .032399
     7 1.07777 .425239 -32.0660                     -.016067 -.028454               .0000051
     8 1.07808 .424890 -32.0660                           0             0               0

At the final values, the negative inverse of the second derivatives matrix is
                     −1
 n ∧                   .151044 −.095961

 ∑
 i =1  λ i x i i  = 
               x '
                        −.095961 .0664665
                                             .


4. Use Monte Carlo Integration to plot the function g(r) = E[xr*x>0] for the standard normal distribution.
        The expected value from the truncated normal distribution is
                                                           ∞
                                                ∫ x φ( x)dx = 2 x e
                                                                   r                                   x2
                              ∞                                                           ∞        −
          E[ x | x > 0] = ∫ x f ( x| x > 0)dx =
                                                               π∫
              r                    r                       0                                   r       2 dx.
                                                                ∞
                                                 ∫
                              0                                                           0
                                                   φ ( x ) dx
                                                               0
To evaluate this expectation, we first sampled 1,000 observations from the truncated standard normal
distribution using (5-1). For the standard normal distribution, µ = 0, σ = 1, PL = Φ((0 - 0)/1) = 2, and
PU = Φ((+4 - 0)/1) = 1. Therefore, the draws are obtained by transforming draws from U(0,1) (denoted Fi) to
xi = Φ[2(1 + Fi)]. Since 0 < Fi < 1, the argument in brackets must be greater than 2, so xi > 0, which is to be
expected. Using the same 1,000 draws each time (so as to obtain smoothness in the figure), we then plot the
                   1
                       ∑ xir , r = 0, .2, .4,.6, ..., 5.0. As an additional experiment, we generated a second
                          1000
values of x r =
                 1000 i = 1
sample of 1,000 by drawing observations from the standard normal distribution and discarding them and
redrawing if they were not positive. The means and standard deviations of the two samples were
(0.8097,0.6170) for the first and (0.8059,0.6170) for the second. Drawing the second sample takes
approximately twice as long as the second. Why?




                                                                                                                   148
5. For the model
in Example 5.10, derive the LM statistic for the test of the hypothesis that µ=0.
        The derivatives of the log-likelihood with µ = 0 imposed are gµ =                            nx / σ 2 and

              ∑
                  n
       −n           x2
                i =1 i
gσ2 =       +          . The estimator for σ2 will be obtained by equating the second of these to 0, which
       2σ 2    2σ 4
will give (of course), v = x′x/n. The terms in the Hessian are Hµµ = -n/σ2, H µσ 2 = − nx / σ 4 ,
and Hσ2σ2 = n/(2σ4)-x′x/σ6. At the MLE, gσ 2 = 0, exactly. The off diagonal term in the expected Hessian is
                                                                       -1
                                                             n                                2
                                                             v     0  nx / v        x 
                                                [
also zero. Therefore, the LM statistic is LM = nx / v 0    ]0
                                                                    n   0 
                                                                                
                                                                                    = 
                                                                                        v/ n
                                                                                                .
                                                                  2v 2 
This resembles the square of the standard t-ratio for testing the hypothesis that µ = 0. It would be exactly that
save for the absence of a degrees of freedom correction in v. However, since we have not estimated µ with x
in fact, LM is exactly the square of a standard normal variate divided by a chi-squared variate over its degrees
of freedom. Thus, in this model, LM is exactly an F statistic with 1 degree of freedom in the numerator and n
degrees of freedom in the denominator.

6. In Example 5.10, what is the concentrated over µ log likelihood function?
          It is obvious that whatever solution is obtained for σ2, the MLE for µ will be x , so the concentrated
                                     −n
                                                                ∑ (          )
                                                              1
log-likelihood function is log Lc =
                                     2
                                       (                )
                                         log 2 π + log σ 2 −
                                                             2σ 2
                                                                     n
                                                                         x −x
                                                                     i =1 i
                                                                              2




7. In Example 5.13, suppose that E[yi] = µ, for a nonzero mean.
(a) Extend the model to include this new parameter. What are the new log likelihood, likelihood equation,
    Hessian, and expected Hessian?
(b) How are the iterations carried out to estimate the full set of parameters?
(c) Show how the LIMDEP program should be modified to include estimation of µ.
(d) Using the same data set, estimate the full set of parameters.




                                                                                                            149
         If yi has a nonzero mean, µ, then the log-likelihood is
                                                             n                       n
                                        n            1                 1       ( yi − µ ) 2 
                  lnL(γ,µ|Z) = −
                                        2
                                          log(2 π) −     ∑
                                                     2 i =1
                                                            log σ i2 −          ∑
                                                                       2 i =1  σ i2 
                                                                                             

                                                         n                   n
                                n           1             1
                             = − log(2 π) −
                                2                      ∑
                                                   z 'γ −
                                            2 i =1 i      2 i =1             ∑
                                                                 ( yi − µ ) 2 exp( − zi ' γ ).

The likelihood equations are
                                                                                     n        n
                   ∂ ln L                n
                                               ( y − µ) 2         1           1
                     ∂γ
                          =
                                     1
                                       ∑   zi  i 2
                                     2 i =1  σ i
                                                           − 1 = −
                                                                   2 i =1
                                                                           zi +  ∑
                                                                                2 i =1        ∑
                                                                                       ( yi - µ ) 2 zi exp( − zi ' γ )

                            = gγ(γ,µ) = 0
                                 n
                   ∂ ln L
and
                    ∂µ
                            =   ∑ ( y − µ) exp(− z ' γ ) = g (γ,µ) = 0.
                                i =1
                                            i                i           µ


                                   n                                             n
                   ∂ 2 ln L                ( y − µ) 2  1
                            = − ∑ zi zi '  i 2  = − ∑ ( yi - µ ) 2 zi zi ' exp( − zi ' γ ) = Hγγ.
                               1
The Hessian is
                    ∂γ∂γ '     2 i =1      σi          2 i =1

                   ∂ 2 ln L
                                  ∑ z ( y − µ) exp(−z ' γ ) = H
                                        n
                            = −                                                          γµ
                    ∂γ∂µ                i =1 i   i                   i


                         ∂ 2 ln L
                                       ∑
                                              n
                                   = −              exp( −zi ' γ ) = Hµµ
                          ∂µ∂µ                i =1

The expectations in the Hessian are found as follows: Since E[yi] = µ, E[Hγµ] = 0. There are no stochastic
                                                        1
                                        ∑
                                                  n
terms in Hµµ, so E[Hµµ] = Hµµ = −                            . Finally, E[(yi - µ)2] = σi2, so E[Hγγ] = -1/2(Z′Z).
                                                  i =1 σ 2
                                                         i
             There is more than one way to estimate the parameters. As in Example 5.13, the method of
scoring (using the expected Hessian) will be straightforward in principle - though in our example, it does
not work well in practice, so we use Newton’s method instead. The iteration, in which we use index ‘t’ to
indicate the estimate at iteration t, will be
                                              µ                µ                -1
                                               γ  (t+1) =  γ  (t) - E[H(t)] g(t).
                                                                
If we insert the expected Hessians and first derivatives in this iteration, we obtain
                                                                           n y − µ (t )
                                                                                                   
                                                             −1

  µ
              µ
                      ∑     n
                                       2
                                          1
                                  i =1 σ (t )
                                                     0             ∑            i
                                                                           i =1 σ 2 (t )             
             =           +             i                                         i                .
  γ  (t+1)    γ  (t)                                        1            ( yi − µ (t )) 2    
                                                             ∑
                                            1                   n
                                      0             Z' Z                  z                   − 1 
                                               2          2       i =1 i       σ i2 (t )      
                                                                
The zero off diagonal elements in the expected Hessian make this convenient, as the iteration may be
broken into two parts. We take the iteration for µ first. With current estimates µ(t) and γ(t), the method of
                                                       n y − µ( t )
                                                              i
                                                                 ∑
                                                       i =1 σ 2 (t )
                                                                 i
scoring produces this iteration: µ(t+1) = µ(t) +                        . As will be explored in Chapters 12 and
                                                                   1
                                                                 ∑
                                                          n
                                                          i =1 σ 2 (t )
                                                                 i
13, this is generalized least squares. Let i denote an n×1 vector of ones, let ei(t) = yi - µ(t) denote the
‘residual’ at iteration t and let e(t) denote the n×1 vector of residuals. Let Ω(t) denote a diagonal matrix
which has σi2 on its diagonal (and zeros elsewhere). Then, the iteration for µ is
µ(t+1) = µ(t) + [i′Ω(t)-1i]-1[i′Ω(t)-1e(t)]. This shows how to compute µ(t+1). The iteration for γ(t+1) is
exactly as was shown in Example 5.13, save for the single change that in the computation, yi2 is changed to
(yi - µ(t))2. Otherwise, the computation is identical. Thus, we would have
γ(t+1) = γ(t) + (Z′Z)-1Z′v(γ(t),µ(t)), where vi(γ(t),µ(t)) is the term in parentheses in the iteration shown
above. This shows how to compute γ(t+1).


                                                                                                                         150
/*================================================================
Program Code for Estimation of Harvey's Model
The data set for this model is 100 observations from Greene (1992)
Variables are: Y = Average monthly credit card expenditure
               Q1 = Age in years+ 12ths of a year
               Q2 = Income, divided by 10,000
               Q3 = OwnRent; individual owns (1) or rents (0) home
               Q4 = Self employed (1=yes, 0=no)
Read     ; Nobs = 200 ; Nvar = 6 ; Names = y,q1,q2,q3,q4
         ; file=d:\DataSets\A5-1.dat$
Namelist ; Z = One,q1,q2,q3,q4 $
================================================================
Step 1 is to get the starting values and set some values for the
iterations- iter=iteration counter, delta=value for convergence.
*/
Create   ; y0 = y – Xbr(y) ; ui = log(y0^2) $
Matrix   ; gamma0 = <Z'Z> * Z'ui ; EH = 2*<Z'Z> $
Calc     ; c0 = gamma0(1)+1.2704      ? Correction to start value
         ; s20 = y0'y0/n ; delta = 1 ; iter=0 $
Create   ; vi0 = y0^2 / s20 - 1 $ (Used in LM statistic)
? Correct first element in gamma, then set starting vector.
Matrix   ; Gamma0(1) = c0 ; Gamma = Gamma0 $ Start value for gamma
Calc     ; mu0 = Xbr(y); mu = mu0$             Start value for mu
Procedure ----------[This does the iterations]--------------------
Create   ; vari = exp(Z'Gamma) ; ei = y-mu ; varinv=1/vari
         ; hi   = ei^2 / vari
         ; gigamma = .5*(hi - 1); gimu = ei/vari
         ; logli = -.5*(log(2*pi) + log(vari) + hi) $
Matrix   ; ggamma = Z'gigamma ; gmu= 1’gimu
         ; H = 2*<Z’[hi]Z> ; gupdate = H*ggamma
? scoring, update = EH*ggamma
         ; Gamma = Gamma + gupdate $
Calc     ; muupdate = Sum(gimu)/Sum(varinv) ; mu = mu + muupdate $
Matrix   ; update = [gupdate/muupdate] ; g = [ggamma/gmu] $
Calc     ; list ; Iter = Iter+1 ; LogLU = Sum(logli);delta=g'update$
EndProcedure
Execute ; While delta > .00001 $ ------------------------------
Matrix   ; Stat (Gamma,H) $
Calc     ; list ; mu ; vmu = 1/Sum(varinv)    ; tmu = mu/Sqr(Vmu) $
Calc     ; list ; Sigmasq = Exp(Gamma(1))     ; K = Col(Z)
                ; SE = Sigmasq * Sqr(H(1,1)) ; TRSE = Sigmasq/SE
                ; LogLR = -n/2*(1 + log(2*pi)+ log(s20))
                ; LRTest = -2*(LogLR - LogLU) $
Matrix          ; Alpha = Gamma(2:K) ; VAlpha = Part(H,2,K,2,K)
         ; list ; WaldTest = Alpha ' <VAlpha> Alpha
                ; LMTest = .5* vi0'Z * <Z'Z> * Z'vi0
                ; EH ; H ; VB = BHHH(Z,gi) ; <VB> $




                                                                       151
In the Example in the text, µ was constrained to equal y . In the program, µ is allowed to be a free
parameter. The comparison of the two sets of results appears below.
               (Constrained model, µ = y )                         (Unconstrained model)
Iteration       log likelihood        δ                           log-l;ikelihood    δ
   1            -698.3888        19.7022                          -692.2987         22.8406
   2            -692.2986         4.5494                          -683.2320          6.9005
   3            -689.7029         0.406881                        -680.7028          2.7494
   4            -689.4980         0.01148798                      -679,7461          0.63453
   5            -689.4741         0.0000125995                    -679.4856          0.27023
   6            -689.47407        0.000000000016                  -679.4856          0.08124
                                                                  -679.4648          0.03079
                                                                  -679.4568          0.0101793
                                                                  -679.4542          0.00364255
                                                                  -679.4533          0.001240906
                                                                  -679.4530          0.00043431
                                                                  -679.4529          0.0001494193
                                                                  -679.4528          0.00005188501
                                                                  -679.4528          0.00001790973
                                                                  -679.4528          0.00000620193
Estimated Paramaters
Variable     Estimate   Std Error t-ratio
Age           0.013042   0.02310    0.565     -0.0134    0.0244 -0.550
Income        0.6432     0.120001   5.360      0.9953    0.1375   7.236
Ownrent      -0.2159     0.3073    -0.703       0.0774    0.3004   0.258
SelfEmployed -0.4273     0.6677    -0.640     -1.3117     0.6719 -1.952
γ1             8.465                           7.867
σ2           4,745.92                          2609.72
µ             189.02        fixed              91.874     15.247   6.026
Tests of the joint hypothesis that all slope coefficients are zero:
LW           40.716                            60.759
Wald:        39.024                            69.515
  LM         35.115                            35.115 (same by construction).




                                                                                                       152



---
normalized_id: shared-pdf-reference-panel-data
exam_code: SHARED
material_scope: panel data.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Panel Data.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-panel-data

Chupter      22


PANEL                DATA
GARY CHAMBERLAIN*
University        of Wisconsin-Madison    and NBER


Contents

1.    Introduction and summary                                                                       1248
2.    Specification and identification: Linear models                                                1254
      2.1.        A production function example                                                      1254
      2.2.         Fixed effects and incidental parameters                                           1256
      2.3. Random effects and specification analysis                                                 1257
      2.4. A consumer demand example                                                                 1259
      2.5.         Strict exogeneity conditional on a latent variable                                1262
      2.6.         Lagged dependent variables                                                        1264
      2.1.         Serial correlation or partial adjustment?                                         1267
      2.8.         Residual covariances: Heteroskedasticity and serial correlation                   1268
      2.9.         Measurement error                                                                 1269
3.     Specification and identification: Nonlinear models                                            1270
       3.1. A random effects probit model                                                            1270
      3.2.         A fixed effects logit model: Conditional likelihood                               1274
       3.3. Serial correlation and lagged dependent variables                                        1278
       3.4.        Duration models                                                                   1282
4.     Inference                                                                                     1285
      4.1.         The estimation of linear predictors                                               1286
      4.2.         Imposing restrictions: The minimum distance estimator                             1288
      4.3.         Simultaneous equations: A generalization of three-stage least squares             1292
      4.4.         Asymptotic efficiency: A comparison with the quasi-maximum likelihood e:          1294
      4.5.         Multivariate probit models                                                        1296
5.     Empirical applications                                                                        1299
       5.1. Linear models: Union wage effects                                                        1299
       5.2. Nonlinear models: Labor force participation                                              1304
6. Conclusion                                                                                        1311
Appendix                                                                                             1311
References                                                                                           1313
   *I am grateful to a number of individuals for helpful discussions. Financial support was provided by
the National Science Foundation (Grants No. SOC-7925959 and No. SES-8016383), by the University
of Wisconsin Graduate School, and by funds granted to the Institute for Research on Poverty at the
University of Wisconsin-Madison by the Department of Health, Education and Welfare pursuant to
the provisions of the Economic Opportunity Act of 1964.

Hundhook          of Econometrics,  Volume II, Edited    by 2. Griliches   and M.D.   Intrrlrgator
0 Elsevler        Science Publishers BV, 1984
1248                                                                     G. Chamherlarn




1.     Introduction and summary

The chapter has four parts: the specification of linear models; the specification of
nonlinear models; statistical inference; and empirical applications. The choice of
topics is highly selective. We shall focus on a few problems and try to develop
solutions in some detail.
   The discussion of linear models begins with the following specification:

       Y,, = Px,, + c, + u rf,                                                    (1.1)
       E(~;rIx,~r...,x,~,c;)     =0   (i=l   ,..., N; t=l,...,   T).              0.2)
For example, in a panel of farms observed over several years, suppose that y,, is a
measure of the output of the i th farm in the t th season, xir is a measured input
that varies over time, ci is an unmeasured, fixed input reflecting soil quality and
other characteristics of the farm’s location, and uir reflects unmeasured inputs that
vary over time such as rainfall.
   Suppose that data is available on (x,i ,..., xir, yil ,..., yir) for each of a large
number of units, but ci is not observed. A cross-section regression of yil on xii will
give a biased estimate of p if c is correlated with x, as we would expect it to be in
the production function example. Furthermore, with a single cross section, there
may be no internal evidence of this bias. If T > 1, we can solve this problem given
the assumption in (1.2). The change in y satisfies:



and the least squares regression of yi2 - yi, on xi2 - xii provides a consistent
estimator of p (as N + co) if the change in x has sufficient variation. A generaliza-
tion of this estimator when T > 2 can be obtained from a least squares regression
with individual specific intercepts, as in Mundlak (1961).
   The restriction in (1.2) is necessary for this result. For example, consider the
following autoregressive specification:




It is clear that a regression of y,, - y,,,_ 1 on ~,,~_i - yi,,_, will not provide a
consistent estimator of /?, since uit - u,,,_i is correlated with y, ,_ 1 - y, t_2.
Hence, it is not sufficient to assume that:

       E( Uirlx,,, e;) = 0.

Much of our discussion will be directed at testing the stronger restriction in (1.2).
Ch. ?_‘: Panel Data                                                                     1249

   Consider     the (minimum mean-square error) linear predictor of ci conditional on
x;i,...,x,r:

       E*( c,lxil,. . ., x,~) = 11 + h,xi, + . . . + &+.                              (1.3)

Given the assumptions that variances are finite and that the distribution of
(x rl,. . . ,x,~, ci) does not depend upon i, there are no additional restrictions in
(1.3); it is simply notation for the linear predictor. Now consider the linear
predictor of y,, given x,i,. . . ,xjT:

       E*(y,,Ix;p...,   Xi,) = 5, + 77*1x,1+ . . . + ?rgxg.

Form the T x T matrix I7 with T,~ as the (t, s) element. Then the restriction in
(1.2) implies that II has a distinctive structure:



where I is the T X T identity matrix, 1 is a T X 1 vector of ones, and x’=
(Ai,. . . ,A,). A test for this structure could usefully accompany estimators of /3
based on change regressions or on regressions with individual specific intercepts.
Moreover, this formulation suggests an alternative estimator for /3, which is
developed in the inference section.
   This test is an exogeneity test and it is useful to relate it to Granger (1969) and
Sims (1972) causality. The novel feature is that we are testing for noncausality
conditional on a latent variable. Suppose that t = 1 is the first period of the
individual’s (economic) life. Within the linear predictor context, a Granger
definition of “y does not cause x conditional on a latent variable c” is:

       E*(X;,r+1lX;l,...rxir,   Y,,,...,y,,,ci)=E*(x;,,+llx;l,...,x,,,~,)
                                                                            (t =1,2,...).

A Sims definition is:

       E*(~i~lX~l,Xi~,...,Ci)=E*(~;rlXil,...,Xir,Ci)(t =1,2,...).
In fact, these two definitions imply identical restrictions on the covariance matrix
of (x,1,...,+,   Y,l,..., yiT). The Sims form fits directly into the 27 matrix frame-
work and implies the following restrictions:

       n = B + yX’,                                                                   (I .4)
where B is a lower triangular matrix and y is a T X 1 vector. We show how these
nonlinear restrictions can be transformed into linear restrictions on a standard
simultaneous equations model.
1250                                                                         G. Chnmherluin

   A II matrix in the form (1.4) occurs in the autoregressive model of Balestra and
Nerlove (1966). The yh’ term is generated by the projection of the initial
condition onto the x ‘s. We also consider autoregressive models in which a
time-invariant omitted variable is correlated with the x ‘s.
   The methods we shall discuss rely on the measured xi, changing over time
whereas the unmeasured c, is time invariant. It seems plausible to me that panel
data should be useful in separating the effects of xi, and ci in this case. An
important limitation, however, is that measured, time-invariant variables ( zi) can
be absorbed into c,. Their effects are not identified without further restrictions
that distinguish them from ci. Some solutions to this problem are discussed in
Chamberlain (1978) and in Hausman and Taylor (1981).
   In Section 3 we use a multivariate probit model to illustrate the new issues that
arise in models that are nonlinear in the variables. Consider the following
specification:

         = Px,,+ c, + u1,)
       _?,:I
       Y,, =l,   if ji, 2 0,
          = 0,   otherwise      (i=l   ,..., N; t =l,...,   T),

where, conditional on xii,. . . ,xIT, c,, the distribution of ( uil,. . . , uiT) is multi-
variate normal (N(O,X)) with mean 0 and covariance matrix B = (TV). We
observe (xil,...,xiT, yil , . . . J,~) for a large number of individuals, but we do not
observe c,. For example, in the reduced form of a labor force participation model,
yir can indicate whether or not the ith individual worked during period t, xi1 can
be a measure of the presence of young children, and ci can capture unmeasured
characteristics of the individual that are stable at least over the sample period. In
the certainty model of Heckman and MaCurdy (1980), ci is generated by the
single life-time budget constraint.
   If we treat the c, as parameters to be estimated, then there is a severe incidental
parameter problem. The consistency of the maximum likelihood estimator re-
quires that T + co, but we want to do asymptotic inference with N --, cc for fixed
T, which reflects the sample sizes in the panel data sets we are most interested in.
So we consider a random effects estimator, which is based on the following
specification for the distribution of c conditional on x:

       C,=l)+hlXil+       *-* +hTXiT+u,,                                              (1.5)
where the distribution of ui conditional on xii,. . . ,xiT is N(0, u,‘). This is similar to
our specification in (1.3) for the linear model, but there is an important dif-
ference; (1.3) was just notation for the linear predictor, whereas (1.5) embodies
substantive restrictions. We are assuming that the regression function of c on the
Ch. I?: Punel Data                                                                        1251

x’s is linear and that the residual variation is homoskedastic and normal. Given
these assumptions, our analysis runs parallel to the linear case. There is a matrix
I7 of multivariate probit coefficients which has the following structure:



where diag{ CY~,
              ...,       }   a diagonal

                                    T. We can also test whether I7 in fact has this
structure.
   A quite different treatment of the incidental parameter problem is possible with
a logit functional form for P( y,, = ~Ix,~,c,). The sum c~=,y,, provides a sufficient
statistic for ci. Hence we can use the distribution of y,,,. . .,y;, conditional on
Xil,...,X,rY c,y,, to obtain a conditional likelihood function that does not depend
upon ci. Maximizing it with respect to j3 provides an estimator that is consistent
as N + cc for fixed T, and the other standard properties for maximum likelihood
hold as well. The power of the procedure is that it places no restrictions on the
conditional distribution of c given x. It is perhaps the closest analog to the change
regression in the linear model. A shortcoming is that the residual covariance
matrix is constrained to be equicorrelated. Just as in the probit model, a key
assumption is:

                                                                                         (1.6)
and we discuss how it can be tested.
   It is natural to ask whether (1.6) is testable without imposing the various
functional form restrictions that underlie our tests in the probit and logit cases.
First, some definitions. Suppose that t = 1 is the initial period of the individual’s
(economic) life; an extension of Sims’ condition for x to be strictly exogenous is
that y, is independent of x,, i, x,, *, . conditional             xi,. .      An             of
              condition         “y       not           x”      that        is                of
        y,                  on    ,...,   Unlike         linear               case,     strict
              is           than                Noncausality               that      be
dent       x,+i,       . . . conditional on xi,. . . ,x, and on y i,...,_y_i. If x is strictly
exogenous and in addition y, is independent of xi,. . . ,x,_ 1 conditional on x,, then
we shall say that the relationship of x toy is static.
   Then our question is whether it is restrictive to assert that there exists a latent
variable c such that the relationship of x to y is static conditional on c. We know
that this is restrictive in the linear predictor case, since the weaker condition that
x be strictly exogenous conditional on c is restrictive. Unfortunately, there are no
restrictions when we replace zero partial correlation by conditional independence.
It follows that conditional strict exogeneity is restrictive only when combined with
specific functional forms-a truly nonparametric test cannot exist.
1252                                                                       G. Chamberlain

    Section 4 presents our framework for inference. Let += (1, xii,. . . , x,r,
Y . . , Y,r) and assume that 5 is independent and identically distributed (i.i.d.)
  rl,.
for i = 1,2,. . . . Let w, be the vector formed from the squares and cross-products
of the elements in r,. Our framework is based on a simple observation: the matrix
II of linear predictor coefficients is a function of E(wi); if c is i.i.d. then so is w,;
hence our problem is to make inferences about a function of a population mean
under random sampling. This is straightforward and provides an asymptotic
distribution theory for least squares that does not require a linear regression
function or homoskedasticity.
     Stack the columns of II’ into a vector 7~ and let B = h(p), where p = E( w;).
 Then the limiting distribution for least squares is normal with covariance matrix:




   We impose restrictions on II by using a minimum distance estimator. The
restrictions can be expressed as p = g(8), where 8 is free to vary within some set
‘I’.Given the sample mean W= C~,,w,/N, we choose fi to minimize the distance
between H1and g( t9), using the following distance function:




where p( w;) is a consistent estimator of V( wi). This is a generalized least squares
estimator for a multivariate regression model with nonlinear restrictions on the
parameters; the only explanatory variable is a constant term. The limiting
distribution of b is normal with covariance matrix:




    An asymptotic distribution theory is also available when we use some matrix
other than ?‘-‘( w;) in the distance function. This theory shows that VP ‘( w;) is the
optimal choice. However, by using suboptimal norms, we can place a number of
commonly used estimators within this framework.
    The results on efficient estimation have some surprising consequences. The
simplest example is a univariate linear predictor: E*(_Y,[x,~,x,~) = rrO+ rrtxil +
T2xi2. Consider imposing the restriction that r2 = 0; we do not want to maintain
any other restrictions, such as linear regression, homoskedasticity, or normality.
How shall we estimate a,? Let ii’ = (7i,, 7j2) be the estimator obtained from the
least squares regression of Y on x1, x2. We want to find a vector of the form (8,O)
as close as possib.le to (?il, 7j2), using V-‘(e) in the distance function. Since we
are not using the conventional estimator of V( 7j), the answer to this minimization
Ch. 22: Panel Data                                                              1253

problem is not, in general, to set 8 = by,,, the estimator obtained from the least
squares regression of y on x1. We can do better by using b,.,, + r7j2; the
asymptotic mean of 7j2is zero if rr2= 0, and if byx, and 7j2are correlated, then we
can choose r to reduce the asymptotic variance below that of b,,,.
   This point has a direct counterpart in the estimation of simultaneous equations.
The restrictions on the reduced form can be imposed using a minimum distance
estimator. This is more efficient than conventional estimators since it is using the
optimal norm. In addition, there are generalizations of two- and three-stage least
squares that achieve this efficiency gain at lower computational cost.
   A related application is to the estimation of restricted covariance matrices.
Here the assumption to be relaxed is multivariate normality. We show that the
conventional maximum likelihood estimator, which assumes normality, is asymp-
totically equivalent to a minimum distance estimator. But that minimum distance
estimator is not, in general, using the optimal norm. Hence, there is a feasible
minimum distance estimator that is at least as good as the maximum likelihood
estimator; it is strictly better in general for non-normal distributions.
   The minimum distance approach has an application to the multivariate probit
model of Section 3. We begin by estimating T separate probit specifications in
which all leads and lags of x are included in the specification for each y,,:
     P(y;,=~lx,l,...,x,,)=F(~~r,,+~~lx,+       ...   +qTtTx;&


where F is the standard normal distribution function. Each of the T probit
specifications is estimated using a maximum likelihood program for univariate
probit analysis. There is some sacrifice of efficiency here, but it may be out-
weighed by the advantage of avoiding numerical integration. Given the estimator
for II, we derive its asymptotic covariance matrix and then impose and test
restrictions by using the minimum distance estimator.
   Section 5 presents two empirical applications, which implement the specifica-
tions discussed in Sections 2 and 3 using the inference procedures from Section 4.
The linear example is based on the panel of Young Men in the National
Longitudinal Survey (Parnes); y, is the logarithm of the individual’s hourly wage
and x, includes variables to indicate whether or not the individual’s wage is set by
collective bargaining; whether or not he lives in an SMSA; and whether or not he
lives in the South. We present unrestricted least squares regressions of y, on
Xl,. . . ,XT, and we examine the form of the I7 matrix. There are significant leads
and lags, but there is evidence in favor of a static relationship conditional on a
latent variable; the leads and lags could be interpreted as just due to c, with
E(~;lxr,...,+,    c) = Px, + c. The estimates of p that control for c are smaller in
absolute value than the cross-section estimates. The union coefficient declines by
40%, with somewhat larger declines for the SMSA and region coefficients.
   The second application presents estimates of a model of labor force participa-
tion. It is based on a sample of married women in the Michigan Panel Study of
1254                                                                            G. Chamberlain

Income Dynamics. We focus on the relationship between participation and the
presence of young children. The unrestricted I7 matrix for the probit specification
has significant leads and lags; but, unlike the wage example, there is evidence here
that the leads and lags are not generated just by a latent variable. If we do impose
this restriction, then the resulting estimator of /3 indicates that the cross-section
estimates overstate the negative effect of young children on the woman’s par-
ticipation probability.
   The estimates for the logit functional form present some interesting contrasts to
the probit results. The cross-section estimates, as usual, are in close agreement
with the probit estimates. But when we use the conditional maximum likelihood
estimator to control for c, the effect of an additional young child on participation
becomes substantially more negative than in the cross-section estimates; so the
estimated sign of the bias is opposite to that of the probit results. Here the
estimation method is having a first order effect on the results. There are a variety
of possible explanations. It may be that the unrestricted distribution for c in the
logit form is the key. Or, since there is evidence against the restriction that:



perhaps we are finding that imposing this restriction simply leads to different
biases in the probit and logit estimates.

2.      Specification and identification: Linear models

2. I.    A production function example

We shall begin with a production function example, due to Mundlak (1961).’
Suppose that a farmer is producing a product with a Cobb-Douglas technology:

        Y,, = Px,,+ c, + u,,    (O<p<l;i=l,...,        N;t=l,...,     T),

wherey,, is the logarithm of output on the ith farm in season t, x,~ is the logarithm
of a variable input (labor), ci represents an input that is fixed over time (soil
quality), and u,, represents a stochastic input (rainfall), which is not under the
farmer’s control. We shall assume that the farmer knows the product price (P)
and the input price (W), which do not depend on his decisions, and that he
knows ci. The factor input decision, however, is made before knowing u,,, and we
shall assume that xi, is chosen to maximize expected profits. Then the factor
demand equation is:

        x,= {ln/3+ln[E(eU~I~,)]+ln(J’,/~,)+c}/(I-P),                                        (2.1)
 ‘This example is also discussed in Mundlak (1963) and in Zellner, Kmenta, and D&e (1966)
Ch. 22: Panel Data                                                                1255

where& is the information set available to the farmer when he chooses x,, and we
have suppressed the i subscript.
  Assume first that U, is independent offt,, so that the farmer cannot do better
than using the unconditional mean. In that case we have:




So if c is observed, only one period of data is needed; the least squares regression
of y, on xi, c provides a consistent estimator of B as N + cc.
   Now suppose that c is not observed by the econometrician, although it is
known to the farmer. Consider the least squares regression of y, on xi, using just
a single cross-section of the data. The population counterpart is:

     E*(y,lx,) = T, + rxl,

where E* is the minimum mean-square          error linear predictor   (the wide-sense
regression function):


     7r = COV(Y,>
              x,)/J+,),            no= Eb,)- mE(x,).

We see from (2.1) that c and xi are correlated; hence n z p and the least squares
estimator of p does not converge to p as N -+ co. Furthermore, with a single cross
section, there may be no internal evidence of this omitted-variable bias.
    Now the panel can help to solve this problem. Mundlak’s solution was to
include farm specific indicator variables: a least squares regression of y,, on
x,[,d;, (i=l,...,  N; t =l,..., T), where d,, is an N X 1 vector of zeros except for
a one in the i th position. So this solution treats the c, as a set of parameters to be
estimated. It is a “fixed effects” solution, which we shall contrast with “random
effects”. The distinction is that under a fixed effects approach, we condition on
the c,, so that their distribution plays no role. A random effects approach invokes
a distribution for c. In a Bayesian framework, /3 and the c, would be treated
symmetrically, with a prior distribution for both. Since I am only going to use
asymptotic results on inference, however, a “gentle” prior distribution for /3 will
be dominated. That this need not be true for the c, is one of the interesting
aspects of our problem.
   We shall do asymptotic inference as N tends to infinity for fixed T. Since the
number of parameters (c;) is increasing with sample size, there is a potential
“incidental parameters” problem in the fixed effects approach. This does not,
however, pose a deep problem in our example. The least squares regression with
the indicator variables is algebraically equivalent to the least squares regression of
y,, - 7, on x,, - X, (i = 1,. . . ,N; t = 1,. . . , T), where J, = cT,,y,,/T,     X, =
1256                                                                                  G. Chamberlain


cr=,x,,/T.                 If T= 2, this reduces to a least squares regression of y,, - y,, on
X 12 -    x,,.       Since

         Eb,,         -     ~;llX,2      -       X,1)   =   B(X,,       -    XA



the least squares regression will provide a consistent estimator of j3 if there is
sufficient variation in x,~ - x,1.2


2.2.       Fixed effects and incidental parameters

The incidental parameters can create real difficulties. Suppose that u,~ is indepen-
dently and identically distributed (i.i.d.) across farms and periods with V( ~4,~)= u2.
Then under a normality assumption, the maximum likelihood estimator of a2
converges (almost surely) to a2( T -- 1)/T as N + cc with T fixed.3 The failure to
correct for degrees of freedom leads to a serious inconsistency when T is small.
For another example, consider the following autoregression:

         Y,,     =   BY,0+ c, + U,l)
         Y,,     =   BY,1      +      c, +   u,2.



Assume that u,~ and ui2 are i.i.d. conditional on y;, and c,, and that they follow a
normal distribution (N(0, a2)). Consider the likelihood function corresponding to
the distribution of ( y,i, y,*) conditional on y,, and c,. The log-likelihood function
is quadratic in j3, cl,. . . , cN (given u2), and the maximum likelihood estimator of fl
is obtained from the least squares regression of y,, - y,, on y;, - y;, (i = 1,. . . , N).
Since u,t is correlated withy,,, and

         Y,2     -   Y,,    =P(r,,           -      Y,o)+     ui2   -       UZlJ



 it is clear that

         E(Y,, - Y,,~Y,,- Y,O)+P(Y,,                                    - Y,,),

and the maximum likelihood estimator of p is not consistent. If the distribution of
y,O conditional on c, does not depend on /I or ci, then the likelihood function
based on the distribution of (Y,~, yjl, yr2) conditional on c, gives the same
inconsistent maximum likelihood estimator of j3. If the distribution of (Y,~, y,t, yr2)


    *We shall not discuss methods for eliminating omitted-variable bias when Y does not vary over time
(x,, = Y, ). See Chamberlain  (1978) and Hausman and Taylor (1981).
   ‘This example is discussed in Neyman and Scott (1948).
Ch. 21: Panel Data                                                                                1257


is stationary,      then the estimator obtained from the least squares regression of
Y;, - Y,l O”Y,l     - y,. converges, as N -+ co, to (/3 - 1)/2.4


2.3.    Random effects and specification analysis

We have seen that the success of the fixed effects estimator in the production
function example must be viewed with some caution. The incidental parameter
problem will be even more serious when we consider nonlinear models. So we
shall consider next a random effects treatment of the production function
example; this will also provide a convenient framework for specification analysis.5
  Assume that there is some joint distribution for (xii, . . . , xlT, c,), which does not
depend upon i, and consider the regression function that does not condition on c:

       E(Y,&~..,        X;T>
                           =Px,r+E(c,lx,w..,x;~>.
The regression function for ci given X, = (x,~, . . . ,x,~) will generally be some
nonlinear function. But we can specify a minimum mean-square error linear
predictor:6

       E*(qIx;l,..., XJ = I) + A,x;, + . . . + hyx,‘. = I) + X’x           I’                    (2.2)
where h = V-l(~,)cov(x,, c,). No restrictions are being imposed here-(2.2)                           is
simply giving our notation for the linear predictor.
  Now we have:

       E*(~,,lx,)    = $ + Px,,+ X’x,.

Combining these linear predictors for the T periods gives the following multi-
variate linear predictor:’

       E*( v,lx,)    = q, + =;,
                                                                                                 (2.3)
       17=cov(y,,x;)v-‘(x;)=/3z+rh’,

wherey;=(y;,,...,        Y,~), Z is the T x T identity matrix, and 1 is a T X 1 vector of
ones.
  4See Chamberlain (1980) and Nickel1 (1981).
   ‘In our notation, Kiefer and Wolfowitz (1956) invoke a distribution for c to pass from the
distribution of (_v,x) conditional on c to the marginal distribution of ( .Y.x). Note that they did not
assume a parametric form for the distribution of c.
  ‘Mundlak (1978) uses a similar specification, but with h, =       = A,. The appropriateness of these
equality constraints is discussed in Chamberlain (1980, 1982a).
   ‘We shallnot discuss the problems caused by attrition. See Griliches, Hall and Hausman (1978) and
Hausman and Wise (1979).
1258                                                                                   G. Chumherluin

   The IT matrix is a useful tool for analyzing this model. Consider first the
estimation of j3; if T = 2 we have:




Hence,



So given a consistent estimator for Kf, we can obtain a consistent estimator for /?.
The estimation of II is almost a standard problem in multivariate regression; but,
due to the nonlinearity in E(c,jx;), we are estimating only a wide-sense regression
function, and some care is needed. It turns out that there is a way of looking at
the problem which allows a straightforward treatment, under very weak assump-
tions. We shall develop this in the section on inference.
   We see in (2.3) that there are restrictions on the II matrix. The off-diagonal
elements within the same column of n are all equal. The T* elements of II are
functions of the T + 1 parameters /3, A,, . . . , A,. This suggests an obvious specifica-
tion test. Or, backing up a bit, we could begin with the specification that II = PI.
Then passing to (2.3) would be a test for whether there is a time-invariant omitted
variable that is correlated with the x’s The test of II= PI + IX’ against an
unrestricted n would be an omnibus test of a variety of misspecifications, some of
which will be considered next.*
    Suppose that there is serial correlation in U, with U, = PU,_~ + w,, where w, is
 independent of /, and we have suppressed the i subscripts. Now we have:

       E(eYA)     = ep”f~lE(ew~).

So the factor demand equation becomes:

       x,= {ln~+ln[E(e”~)]+ln(P,/W,)+pu,~,+c}/(1-P).

Suppose that there is no variation in prices across the farms, so that the P,/W,
term is captured in period specific intercepts, which we shall suppress. We can
solve for u, in terms of x,,~ and c, and substitute this solution into the yI
equation. Then we have:




    “This specificationtest was proposedin Chamberlain(1978a,1979).      The restrictions are similar lo
 those in the MIMIC model of Jiireskog and Goldberger (1975); also see Goldberger (1974a), Griliches
 (1974). Jnreskogand %rbom (1977). Chamberlain          (1977). and Jiireskog (1978). There are also
 connections with the work on sibling data, which is surveyed in Griliches (1979).
Ch. 22: Panel Data                                                                         1259

where cp= ~~'(1 - p). So the II matrix would indicate a distributed lead, even
after controlling for c. If instead there is a first order moving average, U, = wr +
pw,_ 1, then:

       E(eUflJT) = ePWl-IE(eWf),

and a bit of algebra gives:

       E(~,lx,,...,x,)          =X,-P    l&x,    + *. . + +T)+ ‘Pxt+1.

Once again there is a distributed lead, but now /3 is not identified from the I7
matrix.


2.4.      A consumer demand example

2.4. I.         Certainty

We shall follow Ghez and Becker (1973, Heckman and MaCurdy (1980) and
MaCurdy (1981) in presenting a life-cycle model under certainty. Suppose that
the consumer is maximizing


          v= i         p(‘-“U,(C,)
                 t=1



subject to


           i     y-(‘-‘)P,C,   I B, C, 2 0      (t=l   ,...J),
          r=l


where p-l - 1 is the rate of time preference, y - 1 is the (nominal) interest rate, C,
is consumption in period t, P, is the price of the consumption good in period t,
and B is the present value in the initial period of lifetime income. In this certainty
model, the consumer faces a single lifetime budget constraint.
   If the optimal consumption is positive in every period, then


       v,‘W = (VP) +“(P,/P,)U,‘(c,).
A convenient functional form is U,(C) = A,@/8                    (A, > 0, 6 < 1); then we have:

       y,=fix,+cp(t-1)+c+u,,                                                              (2.4)
1260                                                                                G. Chumherlarn

where y, = lnC,, x, = In P,, c = (6 - l))‘ln[U,l(C,)/P,],   U, = (l- 6)-‘ln A,, /I =
(6 -1)-l,    and cp= (l- 6))‘ln(yp). Note that c is determined by the marginal
utility of initial wealth: U,l(C,)/P, = aV,,aB.
   We shall assume that A, is not observed by the econometrician, and that it is
independent of the P ‘s. Then the model is similar to the production function
example if there is price variation across consumers as well as over time. There
will generally be correlation between c and (xi,. . . , xT). As before we have the
prediction that II = pZ + IA’, which is testable. A consistent estimator of p can be
obtained with only two periods of data since




We shall see next how these results are affected when we allow for some
uncertainty.

2.4.2.     Uncertainty

We shall present a highly simplified model in order to obtain some explicit results
in the uncertainty case. The consumer is maximizing




subject to

       P,C, + S, I B,

       PJ* + S, < YSr-1,             c, 2 0,   s,20        (t=1,...,   7).

The only source of uncertainty is the future prices. The consumer is allowed to
borrow against his future income, which has a present value of B in the initial
period. The consumption plan must have C, a function only of information
available at date t.
  It is convenient to set r = co and to assume that P,+ l/P, is i.i.d. (t = 1,2,. . .). If
U,(C) = A,@/& then we have the following optimal plan: 9

       C,=d,B/P,,S,=(l-d,)B,
                                                                                            (2.5)
       c,=d,~S,-,/P,J,=(l-d,)yS,-,                    (t =2,3,...),

   9We require pug < 1, where A, I Mg’ for some constant M. Phelps (1962) obtained explicit
solutions for models of this type. The derivation of (2.5) can be obtained by following Levhari and
Srinivasan (1969) or Dynkin and Yushkevich (1979, Ch. 6.9).
Ch. 22: Panel Data                                                                 1261


where

     d,= [l+h+l+tf,+lf,+d+   --I-‘,
     f, = (pKA,/A,_l)[lA1-s)l, K = ~~E[tp,-,,‘p,)~].
It follows that:



where y, x, u are defined as in (2.4) and 5 = (1- 6))‘ln(~~)+lny.
   We see that, in this particular example, the appropriate interpretation of the
change regression is very sensitive to the amount of information available to the
consumer. In the uncertainty case, a regression of (lnC, - lnC,_,) on (In P, -
In P,_ 1) does not provide a consistent estimator of (6 - 1))‘; in fact, the estima-
tor converges to - 1, with the implied estimator of 6 converging to 0.

2.4.3.      Labor supply

We shall consider a certainty model in which the consumer is maximizing


      V= i PC’-“U,(C,, L,)                                                        (2.6)
             r=1



subject to


         ;: y-“-“(P,C,+W,L,)IB+          ;: y-(‘-‘)W,~,
      t=1                                1=1

     C,lO,           OlL,lL       (t=l   ,...J),

where L, is leisure, w is the wage rate, B is the present value in the initial period
of nonlabor income, and z is the time endowment. We shall assume that the
inequality constraints on L are not binding; the participation decision will be
discussed in the section on nonlinear models. If U, is additively separable:



and if fit<L) = A,L8//6, then we have:

     y,=px,+c&-1)+c+u,,                                                          (2.7)
wherey, = In L,, x, = In W,, c = (6 - 1))‘ln[fir’(L,)/W,],   U, = (l-   6))‘ln A,, p =
1262                                                                                G. Chamberlain

(6 - 1)-l, and ‘p = (1 - G))‘ln(yp).    Once again c is determined by the marginal
utility of initial wealth: &‘( L,)/ WI = &‘,,iYB.
   We shall assume that A, is not observed by the econometrician. There will
generally be a correlation between c and (xi,...,xr),          since L, depends upon
wages in all periods. If A, is independent of the W’s, then we have the prediction
that I7 = p1+ IA’. If, however, wages are partly determined by the quantity of
previous work experience, then there will be lags and leads in addition to those
generated by c, and I7 will not have this simple structure.‘0
   It would be useful at this point to extend the uncertainty model to incorporate
uncertainty about future wages. Unfortunately, a comparably simple explicit
solution is not available. But we may conjecture that the correct interpretation of
a regression of (In L, - In L,_ 1) on (In y - In W,_ 1) is also sensitive to the amount
of information available to the consumer.



2.5.    Strict exogeneity conditional on a latent variable

We shall relate the specification analysis of II to the causality definitions of
Granger (1969) and Sims (1972). Consider a sample in which t = 1 is the first
period of the individual’s (economic) life. l1 A Sims definition of “x is strictly
exogenous” is:


       E*(y,lx,,x,,...) =E*(Y,~x~,...,x~)              (t =1,2,...).


In this case II is lower triangular: the elements above the main diagonal are all
zero. This fails to hold in the models we have been considering, due to the
omitted variable c. But, in some cases, we do have the following property:


       E*(Y,Ix~,x~,...,c)=E*(Y~Ix~,...,x~,c)                (t =1,2,...).                    (2.8)


   It was stressed by Granger (1969) that the assessment of noncausality depends
crucially on what other variables are being conditioned on. The novel feature of
(2.8) is that we are asking whether there exists some latent variable (c) such that x
is strictly exogenous conditional on c. The question is not vacuous since c is
restricted to be time invariant.

  loSee Blinder and Weiss (1976) and Heckman (1976) for life-cycle labor supply models with human
capital accumulation.
  “We shall not discuss the problems that arise from truncating the lag distribution. See Griliches
and Pakes (1980).
Ch. 22: Panel Data                                                                                                      1263

  Let     US examine              what restrictions are implied by (2.8). Define the following
linear predictors:”
     Y, =/-Lx, + . - . + &x,                       + Y,C+ u, 9
        E*(u,Ixi ,..., xr,c)             =0              (t =l,...,T).

Then (2.8) is equivalent to & = 0 for s > t. If yi Z 0, we can choose a scale
normalization for c such that yi = 1. Then we can rewrite the system with & = 0
(S > t) as follows:

     Y, = &Xi + rB,,x, + . . . + &IX, + Y,Yl + fi,,
     s,, = P,, -         Y,Pll,      4 = u, - Y,%>                                                                     (2.9)
        E(x,f,)=O                  (s=l,...,         T;t=2        ,..., T).

    Consider the “instrumental variable” orthogonality conditions implied by
 E(x,ti,) = 0. In the yr equation, we have T + 1 unknown coefficients:
 Pr1, P     . . , &,
           r2,   .   yT, and T orthogonality conditions. So these coefficients are not
 identified. In the y,_, equation, however, we have just enough orthogonahty
 conditions; and in the Y,_~ equation (j I T - 2), we have i - 1 more than we
 need since there are T - j + 1 unknown coefficients: Br-j,l, PT-I,*,. . . ,
 &_,, T_j, ~r_~, and T orthogonality conditions: E(x,&_~) = 0 (S = 1,. . . , T). It
 follows that, subject to a rank condition, we can identify &, y,, and & for
 2 I s I t I T - 1. In addition, the hypothesis in (2.8) implies that if T 2 4, there
 are (T - 3)( T - 2)/2 over identifying restrictions.
   Consider next a Granger definition of “y does not cause x conditional on c”:

        E*(x,+~lx~,...,x,,y~,...,y,,c)=E*(x,+~lx~,...,x,,c)                                          (t =l,...,T-1).
                                                                                                                   (2.10)
Define the following linear predictors:
        X ,+1=        #,1X1 + . . . +~,,X,+%lYl+                     **-     +%fY, +s,+s+           “,+17

        E*b,+ll~l,...,~,,               Y, ,...,   y,,c)=O                 (t=l,...,       T-l).

Then (2.10) is equivalent to ‘pt, = 0. We can rewrite the system, imposing q,, = 0,
as follows:
                     $,iXi + . . . + 4, ,-1X,-l               + TX,+         fi,+1,

     5::L              -G+l/s;N,:l                  sY        5 = JI,, + G+A),
                                                                                                                   (2.11)
     4+1=            u,+1 -   (L+l/Li                      Et x,4+1)        =   E(Y$,+,)      = 0
                 (~51-1;          t=2,...,T-1).

  12We are suppressing the period specific intercepts.
1264                                                                           G. Chamberlain

In the equation for x,,~, there are t unknown parameters, $ti,. . . ,$,, I- 1, T,, and
2( t - 1) orthogonality conditions. Hence, there are t - 2 restrictions (3 I t I T - 1).
   It follows that the Granger condition for “y does not cause x conditional on c”
implies (T - 3)(T - 2)/2 restrictions, which is the same number of restrictions
implied by the Sims condition. In fact, it is a consequence of Sims’ (1972)
theorem, as extended by Hosoya (1977), that the two sets of restrictions are
equivalent; this is not immediately obvious from a direct comparison of (2.9) and
(2.11).
    In terms of the n matrix, conditional strict exogeneity implies that:

       n = B + yX’,
            p11      0   0..                     0
       B=
              P”     P22 0         ...           0

            1s;,PT2 ...                     PTT

These nonlinear restrictions can be imposed and tested using the minimum
distance estimator to be developed in the inference section. Alternatively, we can
use the transformations in (2.9) or in (2.11). These transformations give us
“simultaneous equations” systems with linear restrictions; (2.9) can be estimated
using three-stage least squares. A generalization of three-stage least squares,
which does not require homoskedasticity assumptions, is developed in the in-
ference section. It is asymptotically equivalent to imposing the nonlinear restric-
tions directly on J7, using the minimum distance estimator.


2.6.    Lugged dependent variables

For a specific example, write the labor supply model in (2.7) as follows:

       Y, =61x, + 6,x,_, + Q-1       + UC,
                                                                                      (2.12)
       E*(v,(x,,...,x,)=O         (t=l,...,T);

this reduces to (2.7) if 6, = - 6, and 6, = 1. If we assume that vt = w + e,, where w
is uncorrelated with the x’s and e, is i.i.d. and uncorrelated with the x’s and w,
then we have the autoregressive, variance-components model of Balestra and
Nerlove (1966).13 In keeping with our general approach, we shall avoid placing

  “Estimation in variance-components models is discussed in Nerlove (1967,1971,1971a), Wallace
and Hussain (1969). Amemiya (1971). Madalla (1971), Madalla and Mount (1973), Harville (1977),
Mundlak (1978), Mazodier and Trognon (1978), Trognon (1978). Lee (1979). and Taylor (1980).
1266                                                                         G. Chumherlain


Recursive substitution gives:

       Y, = &Xl + . * * + b,B,,x, + Ytlcl+       Yt2C2 + u, 3

       E*(u,Jx,,...,x,)=O             (1 =l,...,T),

where

       Cl   =6,x,   + 6,y, + &&,,              cz = Yo,

and there are nonlinear restrictions on the parameters. The I7 matrix has the
following form:

       II= B + yth; + y2x2,                                                          (2.13)

where B is lower triangular, y,! = ( ylj,.. . ,yrj),and E*( cjlx) = X,x ( j = 1,2).
   This specification suggests a natural extension of the conditional strict exogene-
ity idea, with the conditioning set indexed by the number of latent variables. We
shall say that “x is strictly exogenous conditional on ct, c2” if:

       E*(y,l...,   x,_~,x,,x,+~    ,... ~c~,c~)=E*(Y,Ix,,x,-~~...,c~‘c~).

We can also introduce a Granger version of this condition and generalize the
analysis in Section 2.5.
  Finally, consider an autoregressive model with a time-invariant omitted vari-
able that is correlated with x:




 where E*(u,~x~,..., xr) = 0. Recursive substitution gives:

       Y, =&xl      + . . . + &x,   + Y,lcl+     Y,2C2 + u, 9

       E*(~,Ix~,...,xr)      =0       (t =l,...,T),

where ct = yo, c2 = c, and there are nonlinear restrictions on the parameters. So y
is strictly exogenous conditional on cr, c2, and setting E*( c/lx) = 4, + X,x (j = 1,2)
gives a I7 matrix in the (2.13) form.
   We can impose the restrictions on I7 directly, using a minimum distance
estimator. There is, however, a transformation of the model that allows a
Ch. 22: Panel Data                                                                          1267

computationally      simpler instrumental variable estimator:

       y, - y,-,=    qx, -XI-l)+ uL1-                     J&2)+ur-   “f-1,


       E*( u, - u,_Jx) = 0                 (t=3,...,T);
       y2=(P21xi+        ..*    +‘p2TxT+w27

       y1=‘p11x1+        **.    +(P+++y,

       E*(w+)=O                  (j=1,2),

where E*( $1~) = cpi’xis unrestricted since E*(c,lx) is unrestricted ( j = 1,2). Now
we can apply the generalized three-stage least squares estimator. This is computa-
tionally simple since the parameter restrictions are linear. The estimator is
asymptotically equivalent to applying the minimum distance procedure directly to
IT. Since the linear predictor equations for y, and y2 are unrestricted, the limiting
distribution of 6, and 6, is not affected if we drop these equations when we form
the generalized three-stage least squares estimator. (See the Appendix.)


2.7.    Serial correlation or partial adjustment?

Griliches (1967) considered the problem of distinguishing between the following
two models: a partial adjustment model,15

       Y, = Px, + v-1          + ur,                                                     (2.14)

and a model with no structural lagged dependent variable but with a residual
following a first-order Markov process:

       Y, = Px, + ZJf,
                                                                                         (2.15)
       u, = PU~-~ + e,,             e, i.i.d.;

in both cases x is strictly exogenous:

       E*b,Ixp..., xr)=E*(~,lxi,...,xr)=O                      (t=l,...,z-).

In the serial correlation case, we have:

       y, = Px, - PSX,-        1+   PYt- 1+      e,;


  “See Nerlove (1972) for distributed lag models based on optimizing behavior in the presence of
uncertainty and costs of adjustment.
1268                                                                        G. Chamberlain

as Griliches    observed, the least squares regression will have a distinctive pattern
-the    coefficient on lagged x equals (as N + 00) minus the product of the
coefficients on current x and lagged y.
   I want to point out that this prediction does not rest on the serial correlation
structure of U. It is a direct implication of the assumption that u is uncorrelated
with xi,...,xr:




Here r++ur_i is simply notation for the linear predictor. In general U[ is not a
first-order process (E*(u,lu,_,, u,_~) # E*(u,lu,_,)), but this does not affect our
argument.
   Within the 17 matrix framework, the distinction between the two models is that
(2.15) implies a diagonal I7 matrix, with no distributed lag, whereas the partial
adjustment specification in (2.14) implies that I7 = B + yh’, with a distributed lag
in the lower triangular B matrix and a rank one set of lags and leads in yh’.
   We can generalize the serial correlation model to allow for an individual
specific effect that may be correlated with x:

         Y,=Pxl+c+Ur,           E*(~,lxi ,..., xr) = 0.

Now both the serial correlation and the partial adjustment models have a rank
one set of lags and leads in II, but we can distinguish between them because only
the partial adjustment model has a distributed lag in the B matrix. So the absence
of structural lagged dependent variables is signalled by the following special case
of conditional strict exogeneity:

         E*b,l~w.,+,      c) = E*b+,,     c).
In this case the relationship of x toy is “static” conditional on c. We shall pursue
this distinction in nonlinear models in Section 3.3.


2.8.      Residual covariances: Heteroskedasticity and serial correlation

2.8.1.     Heteroskedasticity

If E(cjlxi) z E*(ci(xi), then there will be heteroskedasticity, since the residual will
contain E(cilxj)-E*(c,lx,).     Another source of heteroskedasticity is random
Ch. _‘_7:Panel Data                                                                                 1269


coefficients:

       Y,t = blxit   +       ‘1 + ‘lfr
       I!+= p + w,       )            E( w;) = 0,

       Y,t= PXir + ci + ( W~Xir
                             + uit)’

If w is independent of x, then II= /?I + IX’, and our previous discussion is
relevant for the estimation of p. We shall handle the heteroskedasticity problem
in the inference section by allowing E[( yi - 27x;)( y, - IIx,)‘].q] to be an arbi-
trary function of xi.16

2.8.2.      Serial correlation

It may be of interest to impose restrictions on the residual covariances, such as a
variance-components structure together with an autoregressive-moving average
scheme.17 Consider the homoskedastic case in which

       0 = E[(Y; - nx;)( s: - nx,)‘lx;]
does not depend upon x,. Then the restrictions can be expressed as tijk = g,k(0),
where the g’s are known functions and 8 is an unrestricted parameter vector. We
shall discuss a minimum distance procedure for imposing such restrictions in
Section 4.


2.9.     Measurement error

Suppose that

       Y,,=Px:+u.              I, 9


       xi, = x,;         u,t                 )...)   t =l,...,   T),

where x,‘; is not observed. We assume that the measurement                         error u,( satisfies
E*( uj,]xi) = 0. If E*(u&,) = 0, then E*( y,]x,) = 17xI, with

                                                                                                 (2.16)

   “Anderson (1969,1970), Swamy (1970,1974), Hsiao (1973, and Mundlak (1978a) discuss estima-
tors that incorporate the particular form of heteroskedasticity that is generated by random coefficients.
   “Such models for the covariance structure of earnings have been considered by Hause (1977,1980),
Lillard and Willis (1978). Lillard and Weiss (1979), MaCurdy (1982), and others.
1270                                                                     G. Chamberlain

Since V( x,) and V( x,?) will generally not be diagonal matrices, (2.16) provides an
alternative interpretation of lags and leads in the I7 matrix. The II matrix in
(2.16) generally does not have the form rll+ r,lX’; nevertheless, it may be
difficult to distinguish between measurement error and a time-invariant omitted
variable if T is small. For example, if the covariance matrices of xi and x: have
the form ‘pll + cp,ll’ (equicorrelated), then II has this form also and no distinction
is possible. Although cov(+, xiS) generally declines as It -- ~1 increases, the
equicorrelated approximation may be quite good for small T.
   It has been noted in other contexts that the bias from measurement error can
be aggravated by analysis of covariance techniques.‘* Consider the following
example with T = 2:

        Yi2~~rl~P~xi2~xil~+u~2~u~1~P~u~2~uil~~


so    that E*( y,, - yillxi2 - xii) = &xi2 - xii) with

                          V( u,2 -        uil)
        p=p          l-
                i         v(xr2       -   xii)    i ’
If V(u,,) = V( u,~) and V(x,i) = V(xi2), then we can rewrite this as:


        #6=/s l-
                          v(“il)(l-              ‘:u2)
                 /        %,)(1- rigi ’
where ruIu2denotes the correlation between uil and IJ,~. If x,~ and xi2 are highly
correlated but u,i and ui2 are not, then a modest bias from measurement error in a
cross-section regression can become large when we relate the change in y to the
change in x. On the other hand, if u,i = u12,then the change regression eliminates
the bias from measurement error. Data from reinterview surveys should be useful
in distinguishing between these two cases.


3.      Specification and identification: Nonlinear models


3.1.      A random efects probit model

Our treatment of individual effects carries over with some important qualifica-
tions to nonlinear models. We shall illustrate with a labor force participation
example. If the upper bound on leisure is binding in (2.6) then
        p”-“~~~(~)          > my-P’)Ij/,


     ‘*See Griliches (1979) for example.
Ch. 22: Panel Data                                                                1271


where m is the Lagrange multiplier corresponding to the lifetime budget con-
straint (the marginal utility of initial wealth) and o,(L) = A, La//s. Let yjr = 1 if
individual i works in period t, y,, = 0 otherwise. Let:

        In &:, = ~~~~~  + eli,,
        In A,, = (PZXi, + e2irj

where xi, contains measured variables that predict wages and tastes for leisure.
We shall simplify the notation by supposing that xir consists of a single variable.
Then, y,, = 1 if:



which we shall write as:

        ~X;,+~(t-1)+ci+ui,20*                                                   (3.1)

   Now we need a distributional assumption for the u’s. We shall assume that
(Ur,   , uT) is independent of c and the x’s, with a multivariate normal distribu-
       . _ .


tion (N(O,Z)). So we have a probit model (suppressing the i subscripts and
period-specific intercepts):



where F( .) is the standard normal distribution function and a,, is the t th diagonal
element of 2.
   Next we shall specify a distribution for c conditional on x = (xi,. . .,x,):

       c=l//+h,x1+          .-* +A,x,+u,

where u is independent of the x’s and has a normal distribution (N(0, a,;)). There
is a very important difference in this step compared with the linear case. In the
linear case it was not restrictive to decompose c into its linear projection on x and
an orthogonal residual. Now, however, we are assuming that the regression
function E(cln) is actually linear, that u is independent of x, and that u has a
normal distribution. These are restrictive assumptions and there may be a payoff
to relaxing them.
   Given these assumptions, the distribution for y, conditional on xi,. . . ,xT but
marginal on c also has a probit form:

       P(Y, =11x1,..., xr) = F [ a,( px, + X,x, + . . . + bXT)l~
       at= (Otr
             + fJy2.
1212                                                                                              G. Chumberlain


Combining these T specifications gives the following matrix of coefficients:‘9

       II=diag{a,,...,ar}[/?lr+(h’].                                                                          (3.2)

This differs from the linear case only in the diagonal matrix of normalization
factors (r,. There are now nonlinear restrictions on 17, but the identification
analysis is still straightforward. We have:

       lx,/3 = :‘7fll- flrl = T(‘lt-
                                                 a,
                                                 -n,,,
                a1                               a1


       5    =   h, + flt1)                (t =2,...,T),
       a1       h    +    %)



if p + h, + X, # 0. Then, as in the linear case, we can solve for c~~fiand ar,h. Only
ratios of coefficients are identified, and so we can use a scale normalization such
as (Y~=l.
   As for inference, a computationally simple approach is to estimate T cross-sec-
tional probit specifications by maximum likelihood, where x1,. . . ,xT are included
in each of the T specifications. This gives li, (t = 1,. . . , T) and we can use a Taylor
expansion to derive the covariance matrix of the asymptotic normal distribution
for (7jl,..., 7jT). Then restrictions can be imposed on II using a minimum distance
estimator, just as in the linear case.
   We shall conclude our discussion of this model by considering the interpreta-
tion of the coefficients. We began with the probit specification that

       P(y,=llx,,...,x,,              c)=F[a,;“*(fix,+c)].

So one might argue that the correct measure of the effect of x, is based on a,; ‘/*/!I,
whereas we have obtained (a,, + a,*) -‘/*PI which is then an underestimate. But
there is something curious about this argument, since the “omitted variable” u is
independent of x1,. . . ,xT. Suppose that we decompose u, in (3.1) into Us,+ u2,
and that measurements on ulr become available. Then this argument implies that
the correct measure of the effect of x, is based on [V(/(U~,)]-‘/~~. As the data
collection becomes increasingly successful, there is less and less variance left in
the residual uZtr and IV( u*,)] -I/* becomes arbitrarily large.
   The resolution of this puzzle is that the effect of x, depends upon the value of c,
and the effect evaluated at the average value for c is not equal to the average of
the effects, averaging over the distribution for c. Consider the effect on the
probability that y, = 1 of increasing x, from x’ to x”; using the average value for c

   “This approachto analysisof covariancein probit modelswas proposedin Chamberlain(1980)
 For other applications        of multivariate    probit   models to panel data, see Heckman   (1978,1981).
Ch. ??: Panel Data                                                            1213


gives :




The problem with this measure is that it may be relevant for only a small fraction
of the population. I think that a more appropriate measure is the mean effect for
a randomly drawn individual:

      j[P(y,=llx,=x”,               c)-P(~,=llx,=x’,+(dc),

where p(dc) gives the population probability measure for c.
   We shall see how to recover this measure within our framework. Let z =
h,x, + . . . + hrxT; let p(dz) and p(du) give the population probability measures
for the independent random variables z and u. Then:

      ~(Y,=lIxt.c)=~(Y,=llx,,...,x,,c)
            = p(.Y, =11x,, z, 4;
    jJ’(~,=llx,,            z, +(dz)p(du)
            = jP(y,          =11x,, z, +(dulx,,      z)p(dz)
            = /P(Y~ =11x,, Mdz),


where p(duIx,, z) is the conditional probability measure, which equals the uncon-
ditional measure since u is independent of x, and z. [It is important to note that
the last integral does not, in general, equal P(y, =11x,). For if x, and z are
correlated, as they are in our case, then

     P(Y,=W,)               = /P(Y, =11x,,~h4W,)
            f jP(y, =11x,> z)ddz).l

  We have shown that:


      j-[P(y,=l(x,=x”,c)-P(y,=llx,=x’,c)]p(dc)

                   =         P y,=lIxt=x”,z)-P(y,=llx,=x’,z)]p(dz).
                       /[      (                                             (3.3)

The integration with respect to the marginal distribution for z can be done using
the empirical distribution function, which gives the following consistent (as
1274                                                                   G. Chamberlain


N + co) estimator of (3.3):


       +     ; { F[a,(px”+     x1x,1 + . . . + XTXjT)]
            1=1
                   - F[a,(j3x~+Xlx;l+ . . * +hTXiT)]}.                          (3.4)


3.2.    A fixed effects logit model: Conditional likelihood

A weakness in the probit model was the specification of a distribution for c
conditional on x. A convenient form was chosen, but it was only an approxima-
tion, perhaps a poor one. We shall discuss a technique that does not require us to
specify a particular distribution for c conditional on x; it will, however, have its
own weaknesses.
   Consider the following specification:

       P(y,=IJx,,...,x,,c)=G(Bx,+c),              G(z)=e2/(l+eZ),                (3.5)

where y,, . _.,yr are independent conditional on xi,. . . ,xT, c. Suppose that T= 2
and compute the probability that y, = 1 conditional on yi + y2 = 1:

                                                                                 (3.6)

which does not depend upon c. Given a random sample of individuals,                the
conditional log-likelihood function is:

       L=     C {W~lnG[P(xi2-xi~)]+(1-~)lnG[-~(xi~-x,~)]}~
             iEB

where

            1, if (yjl, yi2)= (O,l),
       w’=i 09 if(.Yi~~~i2)=(1~0)~
       B=    {ilyil+yj2=1}.

   This conditional likelihood function does not depend upon the incidental
parameters. It is in the form of a binary logit likelihood function in which the two
outcomes are (0,l) and (1,0) with explanatory variables x2 -xi. This is the
analog of differencing in the two period linear model. The conditional maximum
likelihood (ML) estimate of /3 can be obtained simply from a ML binary logit
Ch. 22: Panel Data                                                                                   1275


program. This conditional likelihood approach was used by Rasch (1960,196l) in
his model for intelligence tests.20
   The conditional ML estimator of j3 is consistent provided that the conditional
likelihood function satisfies regularity conditions, which impose mild restrictions
on the ci. These restrictions, which are satisfied if the ci are a random sample from
some distribution, are discussed in Andersen (1970). Furthermore, the inverse of
the information matrix based on the conditional likelihood function provides a
covariance matrix for the asymptotic (N + cc) normal distribution of the condi-
tional ML estimator of 8.
   These results should be contrasted with the inconsistency of the standard fixed
effects ML estimator, in which the likelihood function is based on the distribution
ofy,,..., y, conditional on x1,. . . , xT, c. For example, suppose that T = 2, x,t = 0,
xi2 =l (i=l,...,  N). The following limits exist with probability one if the c, are a
random sample from some distribution:



      Npm i       ,fi E[Yil(l- Yi2)lCiI = ~17
                  l-1


      N@m $          i   E[(l-   Yir)Y,ZI’iI   =‘?2,
                  1-l



where




Andersen (1973, p. 66) shows that the ML estimator of j3 converges with
probability one to 2/3 as N ---,cc. A simple extension of his argument shows that if
G is replaced by any distribution function (G) corresponding to a symmetric,
continuous, nonzero probability density, then the ML estimator of p converges

   “In Rasch’s model, the probability that person i gives a correct answer to item number t is
 exp(/3, + c,)/[l + exp(& + c,)]; this is a special case in which x,, is a set of dummy indicator variables.
 An algorithm for maximum likelihood estimation in this case is described in Andersen (1972). The use
 of conditional likelihood in incidental parameter problems is discussed in Andersen (1970,1973),
 Kalbfleisch and Sprott (1970), and Barndortf-Nielson (1978). The conditional likelihood approach in
 the logit case is closely related to Fisher’s (1935) exact test for independence in a 2X2 table. This
 exact significance test has been extended by Cox (1970) and others to the case of several contingency
 tables. Additional references are in Cox (1970) and Bishop et al. (1975). Chamberlain (1979) develops
 a conditional likelihcod estimator for a point process model based on duration data, and Griliches,
 Hall and Hausman (1981) apply conditional likelihood techniques to panel data on counts.
1276                                                                                   G. Chamberlain

with probability one to:
       2&l            ‘p2

                i ‘p1+(P2   1 .


The logit case is special in that q2/(p1 = eB for any distribution for c. In general
the limit depends on this distribution; but if all of the c, = 0, then once again we
obtain convergence to 2p as N + co.
   For general T, conditioning on C,y,, (i = 1,. ..,N) gives the following condi-
tional log-likelihood function:




                                  d,)ld,=O or             1    and    ; d, = ; Y,, .
                                                                     t=1    t=1   I



L is in the conditional logit form considered by McFadden (1974), with the
alternative set (B,) varying across the observations. Hence, it can be maximized
by standard programs. There are T + 1 distinct alternative sets corresponding to
c, Y,~= O,l,._., T. Groups for which cry,, = 0 or T contribute zero to L, however,
and so only T -1 alternative sets are relevant. The alternative set for the group
with c,y,, = s has (3) e1ements, corresponding to the distinct sequences of T
trials with s successes. For example, with T = 3 and s = 1 there are three
alternatives with the following conditional probabilities:


       P 1,O,Ol~;~Cj,CY,t=~              =exP[b(X;l-Xij)]/D,
         (                   t       1


       P O~~~Ol~,~C,~CY,t=1              =exP[P(Xi2-Xlj)]/D,
        (                t           1

             o,o,l/x,,ci,~y;,=l          =1/D,

       D=exp[P(x,lfx,g)l+exp[8(x,2-xjz)l+I.

   A weakness in this approach is that it relies on the assumption that they, are
independent conditional on x, c, with an identical form for the conditional
probability each period: P( yt = 1 lx, c) = G( px, + c). In the probit framework,
these assumptions translate into X = a21, so that u + U, generates an equicorre-
lated matrix: u,‘U’ + 02Z. We have seen that it is straightforward to allow X to be
unrestricted in the probit framework; that is not true here.
Ch. 22: Panal Data                                                                              1217

   An additional weakness is that we are limited in the sorts of probability
statements that can be made. We obtain a clean estimate of the effect of x, on the
log odds:

                                         P(y,=Il x, = x’, c )
                                                                    1
     ln     P(y,=l(x,=x”,c)                                         +(x”-         x’);
                                     /   P( y, = 0(x, = XI, c)
           [ P( y, =01x, = x/I, c)

the special feature of the logistic functional form is that this function of the
probabilities does not depend upon c; so the problem of integrating over the
marginal distribution of c (instead of the conditional distribution of c given x)
does not arise. But this is not the only function of the probabilities that one might
want to know. In the probit section we considered

     P(y,=l(x,=x”,            c)-P(y,=llx,=x’,c),

which depends upon c for probit or logit, and we averaged over the marginal
distribution for c:


      /[      (
            P Y,=l(x,=x”,c)-P(y,=llx,=x’,c)]p(dc).                                             (3.7)

This requires us to specify a marginal distribution for c, which is what the
conditioning argument trys to avoid. We cannot estimate (3.7) if all we have is the
conditional ML estimate of p.
   Our specification in (3.5) asserts that y, is independent of x1,. . . , x, _ 1, x, + 1,. . . , xT
conditional on x,, c. This can be relaxed somewhat, but the conditional likelihood
argument certainly requires more than



to see this, try to derive (3.6) with x2 = y,. We can, however, implement the
following specification (with x’= (x,, . . . ,xT)):

     P(~~==Ilx,~)=G(p,o+PIlxl+                  --. +P,tx,+c),                                 (34

where yr,. . .,y, are independent conditional on x, c. This corresponds to our
specification of “x is strictly exogenous conditional on c” in Section 2.5, except
that yt = 1 in the term y,c-it     is not straightforward to allow a time-varying
coefficient on c in the conditional likelihood approach. The extension of (3.6) is:

     P(Y,     =lIx,c,   Al+    Y, =I> = G(&,        +&IX,   +Pt+z   + .. . +Ptrxt>

                                                                            (t=2,...     J),   (3.9)
1278                                                                          G. Chamberlain

where      jj,, = p,, - plj      (j = 0,l).
                                   So if x has sufficient variation, we can obtain
consistent estimates of &, &, and /I,, (s = 2,. . . , t). Only these parameters are
identified, since we can transform the model replacing c by E = pro + &lxl+          c
without violating any restrictions.
   The restrictions in (3.5) or in (3.8) can be tested against the following alterna-
tive:

        P(y,=l)x,c)=G(~~,+~,rx,+                      ... +~xr+c).                   (3.10)

We can identify only 7r,j - rtj and so we can normalize r,, = 0 (j = 0,. . . , T;
t = 2,..., T). The maximized values of the conditional log-likelihoods can be used
to form x2 statistics. 21 There are (T -2)(T - 1)/ 2 restrictions in passing from
(3.10) to (3.8) and (3.5) imposes an additional (T - l)(T + 4)/2 - 1 restrictions.


3.3.      Serial correlation and lagged dependent variables

Consider the following two models:


                  1,       ifyT=u,ZO,
                                                                                   (3.11b)
                  0,       otherwise; u, = pu,_, + e,;

                                                                                   (3Xb)
                           otherwise; u, = PU,_~ + e,;


in both cases e, is i.i.d. N(0,a2). Heckman (1978) observed that we can dis-
tinguish between these two models.22 In the first model,


        ~b,=llY,-,9YL2Y.               ) =    pb,   =wL,)     =   eY-,/fJ),




where F( .) is the standard normal distribution function. In the second model,
however, P(y, =lly,_,, y,_, ,... ) depends upon the entire history of the process.
If we observed u,_i, then previous outcomes would be irrelevant. In fact, we
observe only whether u,_ r 2 0; hence conditioning in addition on whether u,_~ 2 0
affects the distribution of u,_i and y,. So the lagged y implies a Markov chain
whereas the Markov assumption for the probit residual does not imply a Markov
chain for the binary sequence that it generates.


  2’Conditional likelihood ratio tests are discussed in Andersen (1971).
  “Also see Heckman (1981, 1981b).
Ch. 22: Panal Data                                                                           1279


  There is an analogy with the following linear models:

        Y, = YY,-1 + et,                                                                 (3.12a)

        y, = u,, 2.4,= e, + pet-l,                                                       (3.12b)

where       e, is i.i.d. N(0, u*)_ We know that if U, = pul-i + e,, then no distinction
would be possible, without introducing more structure, since both models imply a
linear Markov process. With the moving average residual, however, the serial
correlation model implies that the entire past history is relevant for predicting y.
So the distinction between the two models rests on the order of the dependence
on previous realizations of y,.
    We can still distinguish between the two models in (3.11) even when ( ul,. . . , ur>
has a general multivariate normal distribution (N( IL,2)). Given normalizations
such as V(u,)=l (t =l,..., T), the serial correlation model has r( T + 1)/2 free
parameters. Hence, if T 2 3, there are restrictions on the 2T - 1 parameters of the
multinomial distribution for ( yi, . . . , yT). In particular, the most general multi-
variate probit model cannot generate a Markov chain. So we can add a lagged
dependent variable and identify y.
    This result relies heavily on the restrictive nature of the multivariate probit
functional form. A more robust distinction between the two models is possible
when there is variation over time in x,. We shall pursue this after first presenting
a generalization of strict exogeneity and noncausality for nonlinear models.
    Let t = 1 be the first period of the individual’s (economic) life. An extension of
Granger’s definition of “y does not cause x” is that x,+i is independent of
y,, . . . ,y, conditional on xi,. . . , x,. An extension of Sims’ strict exogeneity condi-
tion is that y, is independent of x,+ i, x,+*, . . . conditional on xi,. . . ,x,. In contrast
to the linear predictor case, these two definitions are no longer equivalent.23 For
consider the following counterexample: let yi, y, be independent Bernoulli ran-
dom variables with P( y, = 1) = P( y, = - 1) = l/2 (t = 1,2). Let xj = y, y2. Then y,
is independent of x3 and y, is independent of x3. Let all of the other random
variables be degenerate (equal to zero, say). Then x is strictly exogenous but x3 is
clearly not independent of yi, y2 conditional on xi, x2. The counterexample works
for the following reason: if a random variable is uncorrelated with each of two
other random variables, then it is uncorrelated with every linear combination of
them; but if it is independent of each of the other random variables, it need not
be independent of every function of them.
    Consider the following modification of Sims’ condition: y, is independent of
X t+l*X,+*t-.-         conditional on x1,. . . ,x,, y,, . . . ,y,_ 1 (t = 1,2,. . . ). Chamberlain
(1982) shows that, subject to a regularity condition, this is equivalent to our

 23See Chamberlain (1982) and Florens and Mouchart (1982)
1280                                                                                  G. Chumherlain

extended   definition of Granger noncausality. The regularity condition is trivially
satisfied whenever y, has a degenerate         distribution prior to some point. SO it k
satisfied in our case since y,, y _ 1, . . . have degenerate distributions.
   It is straightforward to introduce a time-invariant latent variable into these
definitions. We shall say that “y does not cause x conditional on a latent variable c”
if either:
x,+i isindependentofy,     ,..., y,conditionalonx,     ,..., x,,c(t=1,2     ,... ),

01
y, is independent of x,+~,x,+~ ,...         conditional on x1 ,..., x,, y1,..., Y,-~,c          (t =
1,2,...);

they are equivalent. We shall say that “x is strictly exogenous conditional on a
latent variable c” if:

y, is independent of x,+l,x,+z   ,...   conditional on x1 ,..., x,,c   (t =1,2 ,... ).
    Now let us return to the problem of distinguishing between serial correlation
and structural lagged dependent variables. Assume throughout the discussion that
x, and y, are not independent. We shall say that the relationship of x toy is static
if:
x is strictly exogenous and y, is independent of x,, . . . ,xt_ 1 conditional on x,.
Then I propose the following distinctions:
There is residual serial correlation if y, is not independent of y,, , , , ,y,- 1 conditional
on x 1,...,xt,

If the relationship of x to y is static, then there are no structural lagged dependent
variables.
   Suppose that y, and x, are binary and consider the probability that y2 = 1
conditional on (xi, x2) = (0,O) and conditional on (x,, x2) = (1,O). Since y, and x,
are assumed to be dependent, the distribution of y, is generally different in the
two cases. If y, has a structural effect on y,, then the conditional probability of
y, = 1 should d i ffer in the two cases, so that y2 is not independent of x1
conditional on x2.
   Note that this condition is one-sided: I am only offering a condition for there
to be no structural effect of y,_, on y,. There can be distributed lag relationships
in which we would not want to say that y,_, has a structural effect on yr. Consider
the production function example with serial correlation in rainfall; assume for the
moment that there is no variation in c. If the serial correlation in rainfall is not
incorporated in the farmer’s information set, then our definitions assert that there
is residual serial correlation but no structural lagged dependent variables, since
the relationship of x toy is static. Now suppose that the farmer does use previous
rainfall to predict future rainfall. Then the relationship of x toy is not static since
Ch. 22: Panal Data                                                                   1281

x is not strictly exogenous. But we may not want to say that the relationship
between y,_ i and yt is structural, since the technology does not depend upon y,_ r.
   How are these distinctions affected by latent variables? It should be clear that a
time-invariant latent variable can produce residual serial correlation. A major
theme of the paper has been that such a latent variable can also produce a failure
of strict exogeneity. So consider conditional versions of these properties:
There is residual serial correlation conditional on a latent variable c if y, is not
independent of y,, . __, y, 1 conditional on x1,. . . ,x,, c;

The relationship of x to y is static conditional on a latent variable c if x is strictly
exogenous conditional on c and if y, is independent of x1,. . .,xI_ 1 conditional on
xt, c;
If the relationship of x toy is static conditional on a latent variable c, then there are
no structural lagged dependent variables.
   A surprising feature of the linear predictor definition of strict exogeneity is that
it is restrictive to assert that there exists some time-invariant latent variable c such
that x is strictly exogenous conditional on c. This is no longer true when we use
conditional independence to define strict exogeneity. For a counterexample,
suppose that x, is a binary variable and consider the conditional strict exogeneity
question: “Does there exist a time-invariant random variable c such that y, is
independent of xi,. . . ,xT conditional on xi,. . . ,xt, c?” The answer is “yes” since
we can order the 2T possible outcomes of the binary sequence (xi,. . . , xT) and set
~=jifthejthoutcomeoccurs(j=1,...,2~).Nowy~isindependentofx,,...,x,
conditional on c!
    For a nondegenerate counterexample, let y and x be binary random variables
with:




                                                            component. Hence y is in
the interior of the convex hull of { e,, m = 1,. . . ,4}. Now consider the vector:

                     r   6X
1282                                                                       G. Chumberlain

The components of ~(6, A) give the probabilities P(y = a,, x = ak) when y and
x are independent with P(y = 1) = 6, P(x = 1) = h. Set e; = y(S,, X,,,) with
0 < 15, < 1,O < A, < 1. Then y will be in the interior of the convex hull of { ez,
m=l ,...,4} if we choose a,,,, X,,, so that ez is sufficiently close to e,. Hence:
             4

       Y=    C    %t*eZ,     Y,   ’   0,    i    y,*=l.
            m=l                            m=l


Let the components of ei be (7$, $, $, 7”‘).
                                        22 Let c be a random variable with
P(c=m)=y,*    (m=1,...,4), and set

       P(y=a,,x=akIc=m)=$.

Now y is independent of x conditional on c, and the conditional distributions are
nondegenerate.
   If (Xi,...&-, Yl,..., yr) has a general multinomial distribution, then a
straightforward extension of this argument shows that there exists a random
variable c such that ( y,, . . . ,yr) is independent of (xi,. . .,x,) conditional on c,
and the conditional distributions are nondegenerate.
   A similar point applies to factor analysis. Consider a linear one-factor model.
The specification is that there exists a latent variable c such that the partial
correlations between y,, . . . ,yT are zero given c. This is restrictive if T > 3. But we
now know that it is not restrictive to assert that there exists a latent variable c
such that y,, . _. ,y, are independent conditional on c.
   It follows that we cannot test for conditional strict exogeneity without imposing
functional form restrictions; nor can we test for a conditionally static relationship
without restricting the functional forms.
   This point is intimately related to the fundamental difficulties created by
incidental parameters in nonlinear models. The labor force participation example
is assumed to be static conditional on c. We shall present some tests of this in
Section 5, but we shall be jointly testing that proposition and the functional forms
-a truly nonparametric test cannot exist. We stressed in the probit model that
the specification for the distribution of c conditional on x is restrictive; we
avoided such a restrictive specification in the logit model but only by imposing a
restrictive functional form on the distribution of y conditional on x, c.


3.4.    Duration models

In many problems the basic data is the amount of time spent in a state. For
example, a complete description of an individual’s labor force participation
history is the duration of the first spell of participation and the date it began, the
Ch. 22: Panal Data                                                                1283

duration of the following spell of nonparticipation, and so on. This complete
history will generate a binary sequence when it is cut up into fixed length periods,
but these periods may have little to do with the underlying process.24
   In particular, the measurement of serial correlation depends upon the period of
observation. As the period becomes shorter, the probability that a person who
worked last period will work this period approaches one. So finding significant
serial correlation may say very little about the underlying process. Or consider a
spell that begins near the end of a period; then it is likely to overlap into the next
period, so that previous employment raises the probability of current employ-
ment.
   Consider the underlying process of time spent in one state followed by time
spent in the other state. If the individual’s history does not help to predict his
future given his current state, then this is a Markov process. Whereas serial
independence in continuous time has the absurd implication that mean duration
of a spell is zero, the Markov property does provide a fruitful starting point. It
has two implications: the individual’s history prior to the current spell should not
affect the distribution of the length of the current spell; and the amount of time
spent in the current state should not affect the distribution of remaining time in
that state.
   SC the first requirement of the Markov property is that durations of the spells
be independent of each other. Assuming stationarity, this implies an alternating
renewal process. The second requirement is that the distribution of duration be
exponential, so that we have an alternating Poisson process. We shall refer to
departures from this model as duration dependence.
   A test of this Markov property using binary sequences will depend upon what
sampling scheme is being used. The simplest case is point sampling, where each
period we determine the individual’s state at a particular point in time, such as
July 1 of each year. Then if an individual is following an alternating Poisson
process, her history prior to that point is irrelevant in predicting her state at the
next interview. So the binary sequence generated by point sampling should be a
Markov chain.
   It is possible to test this in a fixed effects model that allows each individual to
have her own two exponential rate parameters ( cil, ci2) in the alternating Poisson
process. The idea is related to the conditional likelihood approach in the fixed
effects logit model. Let s,~~ be the number of times that individual i is observed
making a transition from statej to state k (j, k = 1,2). Then the initial state and
these four transition counts are sufficient statistics for the Markov chain. Se-
quences with the same initial state and the same transition counts should be
equally likely. This is the Markov form of de Finetti’s (1975) partial exchangeabil-


  24Thispoint is discussed   in Singer and Spileman   (1974, 1976).
1284                                                                                   G. Chamberlain

ity. 25 So we can test whether the Markov property holds conditional on Gil, c,~ by
testing       whether    there is significant variation in the sample frequencies of se-
quences with the same transition counts.
    This analysis is relevant if, for example, each year the survey question is: “Did
you have a job on July 1.7” In the Michigan Panel Study of Income Dynamics,
however, the most commonly used question for generating participation se-
quences is.    ’ . “Did your wife do any work for money last year?” This interval
sampling leads to a more complex analysis, since even if the individual is
 following an alternating Poisson process, the binary sequence generated by this
 sampling scheme is not a Markov chain. Suppose that Y,_1 = 1, so that we know
 that the individual worked at some point during the previous period. What is
 relevant, however, is the individual’s state at the end of the period, and Y,_~ will
 affect the probability that the spell of work occurred early in period t - 1 instead
 of late in the period.
     Nevertheless, it is possible to test whether the underlying process is alternating
 Poisson. The reason is that if y,_, = 0, we know that the individual never worked
 during period t - 1, and so we know the state at the end of that period; hence
.Y-2~Y,-3~...         are irrelevant. So we have:




where d is the number of consecutive preceding periods that the individual was in
state 1.
   Let soi be the number of times in the sequence that 1 is preceded by 0; let soit
be the number of times that 1 is preceded by 0,l; etc. Then sufficient statistics are
~Ol,~Oll,-.., as well as the number of consecutive ones at the beginning (n,) and
at the end (nr) of a sequence. 26 For an example with T = 5, let n, = 0, n5 = 0,
s o1= 1, soli = 1, solit = . ’ . = 0; then we have

       P(O,l,l,O,Ole)




  2SWe are using the fact that partial exchangeability is a necessary condition for the distribution to
be a mixture of Markov chains. Diaconis and Freedman (1980) study the sufficiency of this condition.
Heckman (1978) used exchangeability to test for serial independence in a fixed effects model.
  26This test was presented in Chamberlain (1978a, 1979). It has been applied to unemployment
sequences by Corcoran and Hill (1980). For related tests and extensions, see Lee (1980).
Ch. 22: Punal Data                                                                      1285

where c = (ci, cl). Thus these two sequences are equally likely conditional on c,
and letting p be the probability measure for c gives:

     P(o,l,LO,O) = jP(O,l,l,O,olc)p(dc)

                     =        P O,O,l,l,Olc)~(dc)=    P(O,O,l,l,O).
                         /(

So the alternating Poisson process implies restrictions on the multinomial distri-
bution for the binary sequence.
   These tests are indirect. The duration dependence question is clearly easier to
answer using surveys that measure durations of spells. Such duration data raises a
number of new econometric problems, but we shall not pursue them here.27 I
would simply like to make one connection with the methods that we have been
discussing.
   Let us simplify to a one state process; for example, Y,, can be the duration of
the time interval between the starting date of the ith individual’s t th job and his
(t + 1)th job. Suppose that we observe T > 1 jobs for each of the N individuals, a
not innocuous assumption. Impose the restriction that Y,, > 0 by using the
following specification:

      Ylt= exp@x,, + c, + u,,),
      E*(u,,lx,)=O             (t=l,...,   T),

where xi = (xii,. . . ,x,~). Then:

      E*(ln Y,((x,) = /3xil + A’xi,

and our Section 2 analysis applies. The strict exogeneity assumption has a
surprising implication in this context. Suppose that xit is the individual’s age at
the beginning of the tth job. Then x,~ - x;,~_~ = Y,,t_i-age        is not strictly
exogenous.28


4.   Inference

Consider a sample r;‘=(xi, y:), i=l,..., N, where x(=(xil ,..., xiK), J+‘=
(Y;,,... ,y,,,,). We shall assume that 5 is independent and identically distributed
(i.i.d.) according to some multivariate distribution with finite fourth moments

  27SeeTuma (1979, 1980), Lancaster (1979), Nickel1 (1979), Chamberlain (1979), Lancaster and
Nickel1 (1980). Heckman and Bojas (1980), Kiefer and Neumann (1981). and Flinn and Heckman
(1982, 1982a).
  2”This example is based on Chamberlain (1979).
1286                                                                          G. Chamberlain


and  E( x,x;) nonsingular. Consider the minimum mean-square error linear predic-
tors,29

       E*(Y&;)       = G;           (M =l,...,M),
which we can write as:

       E*( Y~IXi)=nXI,             I7= E( y,x,‘)[E(xix,)]        -I.

We want to estimate II subject to restrictions and to test those restrictions. For
example, we may want to test whether a submatrix of II has the form /?I + IA’.
   We shall not assume that the regression function E( y;yilx;) is linear. For
although E( y, Ix;, ci) may be linear (indeed, we hope that it is), there is generally
no reason to insist that E(cilxj) is linear. So we shall present a theory of inference
for linear predictors. Furthermore, even if the regression function is linear, there
may be heteroskedasticity-due        to random coefficients, for example. So we shall
allow E[( y, - IIxi)( y, - IIxj)‘lxi] to be an arbitrary function of xi.


4.1.    The estimation of linear predictors

Let w, be the vector formed from the distinct elements of riq’ that have nonzero
variance.30 Since ‘I’= (x;, y,‘) is i.i.d., it follows that wi is i.i.d. This simple
observation is the key to our results. Since II is a function of E( w,), our problem
is to make inferences about a function of a population mean, under random
sampling.
   Let p = E( w;) and let n be the vector formed from the columns of II’
(n = vec(IT’)). Then rr is a function of cc: rr = /r(p). Let 5 = Cr=twi/N; then
li = Ir( W) is the least squares estimator:




By the strong law of large numbers, W converges almost surely to p” as N -+ co
(-,“s,o),  where p” is the true value of p. Let rr” = /r(PO).Since A(p) is con-
tinuous at p = PO, we have 7i “2 R ‘. The central limit theorem implies that:




  29This agrees with the definition in Section 2 if x, includes a constant.
  ‘“Sections 4.1-4.4 are taken from Chamberlain (1982a).
Ch. 22: Panal Data                                                              1287

Since /t(c) is differentiable at p = PO, the d-method gives


     m(7i     - Tr”) 2 N(O,52),

where




   We have derived the limiting distribution of the least squares estimator. This
approach was used by Cramer (1946) to obtain limiting normal distributions for
sample correlation and regression coefficients (p. 367); he presents an explicit
formula for the variance of the limiting distribution of a sample correlation
coefficient (p. 359). Kendall and Stuart (1961, p. 293) and Goldberger (1974)
present the formula for the variance of the limiting distribution of a simple
regression coefficient.
   Evaluating the partial derivatives in the formula for P is tedious. That calcula-
tion can be simplified since li has a “ratio” form. In the case of simple regression
with a zero intercept, we have n = E(y,x,)/E(x,!)    and




Since cc rxf/N a~s’
               + E(xf), we obtain the same limiting distribution by working
with


        I?[(r; -
      1=1
                     ~"+il/[~E(xf)l~


The definition of rr” gives E[(y, - n”x,)xi] = 0, and so the central limit theorem
implies that :




This approach was used by White (1980) to obtain the limiting distribution for
univariate regression coefficients. 32 In the Appendix (Proposition 6) we follow


  “See Billingsley (1979, example 29.1, p. 340) or Rao (1973, p. 388).
  3zAlso see White (1980a,b).
1288                                                                                         G. Chamberlain


White’s approach to obtain:

       52= E[( y, -II’x,)(         y, -~“~i)~~~~‘(x;~‘)~~l],                                         (4.1)

where @I = E(x,x;). A consistent estimator of 51 is readily available from the
corresponding sample moments:



                                                                                                      (4.2)


where S, = C;“=,x&/N.
  If E( y,Jx,) = IIxi, so that the regression function is linear, then:

       52= E[ I’( y,lx,)@‘D;‘( x,x;)@,-‘].

If V( y,lx,) is uncorrelated with x,x;, then:

        ii?= E[ V( y,lx,)] s@;‘.

If the conditional variance is homoskedastic,                        so that V( y,lx,) = Z does not
depend on x,, then:




4.2.     Imposing restrictions: The minimum distance estimator

Since I7 is a function of E( w,), restrictions on II imply restrictions on E( w,). Let
the dimension of p = E( wj) be q. 33 We shall specify the restrictions by the
condition that I( depends only on a p x 1 vector 8 of unknown parameters:
f~= g(O), where g is a known function and p I q. The domain of 0 is ‘Yf’,    a subset
of p-dimensional Euclidean space (RJ’) that contains the true value 0’. So the
restrictions imply that p” = g( 0’) is confined to a certain subset of Rq.
   We can impose the restrictions by using a minimum distance estimator: choose
e to




 “If   there is one element   in r,r,’ with zero variance,   then q = [(K + M)( K + M + 1)/21-l.
Ch. _)?: Punal Data                                                                            1289


where    A, “2 e and q is positive definite. 34This minimization problem is equiva-
lent to the following one: choose 4 to




The properties of 8 are developed, for example, in Malinvaud (1970, ch. 9). Since
g does not depend on any exogenous variables, the derivation of these properties
can be simplified considerably, as in Chiang (1956) and Ferguson (1958).35
   For completeness, we shall state a set of regularity conditions and the proper-
ties that they imply:
Assumption 1

aNa2g(Bo);       T i s a compact subset of RP that contains 8’; g is continuous on 2’,
and g(0) = g(@‘) for 8 E ‘I’ implies that 8 = 0’; A, az ‘k, where !P is positive
definite.
Assumption 2

fira,   - g(d”)] 2 N(O, A); 2’ contains a neighborhood E. of 8’ in which g has
continuous second partial derivatives; rank (G) = p, where G = ag(8’)/afl’.
   Choose 4 to




Proposition 1

If Assumption 1 is satisfied, then 8 “2 8’.

Proposition 2

If Assumptions 1 and 2 are satisfied, then m(8              - 0’) 2 N(O, A), where


        A = (G?PG)-‘G’qAqG(GYG)-‘.

If A is positive definite, then A -(G’A-‘G)-’            is positive semi-definite; hence an
optimal choice for 9 is A-‘.


  34This application of nonlinear generalized least squares was proposed in Chamberlain (1980a).
  “‘Some simple proofs are collected in Chamberlain (1982a).
1290                                                                       G. Chambertarn


Proposition 3
If As;umptions 1 and 2 are satisfied, if A is a q X q positive-definite matrix, and if
A, +A-', then:




   Now consider imposing additional restrictions, which are expressed by the
condition that 8 = f(a), where a is s x l(s < p). The domain of a is Yi, a subset
of RS that contains the true value u”. So 8’ = f(a”) is confined to a certain subset
of RP.
Assumption 2’
!I’, is a compact subset of R” that contains a’; f is a continuous mapping from
?‘i into c f(a) = 8’ for a E 'T,implies a = a’; ‘Z’tcontains a neighborhood of a0
in which f has continuous second partial derivatives; rank (F) = s, where
F= i?f(aO)/&x'.
   Let h(a)=g[f(a)].     Choose 8 to

       a%[UN-~(a)]‘-%&, - +d].
           1




Proposition 3’
                                                                                as.
If Assumptions 1, 2, and 2’ are satisfied, if A is positive definite, and if A, ---)A-‘,
             D
then d, - d, --$x2( p - s), where


       d,=N[+       -+q]‘A,[u,-+g],

       d,= N[u,     -iz@$%[uN          -d@l.
Furthermore, d, - d, is independent of d, in their limiting joint distribution.
   Suppose that the restrictions involve only II. We specify the restrictions by the
condition that 7r = f(6), where S is s x 1 and the domain of S is Z’,, a subset of R”
that includes the true value 6’. Consider the following estimator of So: choose b to

       8f$g [li-   f(s)]‘8-‘[li-      f(S)],
           I



where fi is given in (4.2), and we assume that Jz in (4.1) is positive definite. If Z’i
Ch. I?: Punal D&a                                                                 1291

and f satisfy Assumptions 1 and 2, then b “2 So,




and

      N[li-      f(b)]W’[li-         f(6)] ~xym-s),

where F = ilf(i3°)/~&.
   We can also estimate So by applying the minimum distance procedure to W
instead of to ii. Suppose that the components of IV; are arranged so that
IV:= (IV;, $z ), where w,r contains the components of n, y;. Partition /J = E( VV;)
conformably: c’= (&, &). Set 8’= (e;, 0;) = (S’, pi). Assume that V( w,) is
positive definite. Now choose 8 to




              a.s.
where A, -+ V-‘( rvi),




and g,(r,p,)   =p,. Then 8, gives an estimator of 6’; it has the same limiting
distribution as the estimator 8 that we obtained by applying the minimum
distance procedure to ii.36
   This framework leads to some surprising results on efficient estimation. For a
simple example, we shall use a univariate linear predictor model,

      E*b+,l, x,2) =      7ro +   7rlX,l   + 7r1x;*.


Consider imposing the restriction rrZ= 0. Then the conventional estimator of rrt is
$,<,, the slope coefficient in the least squares regression of y on x1. We shall show
that this estimator is generally less efficient than the minimum distance estimator
if the regression function is nonlinear or if there is heteroskedasticity.
   Let 7jl, ;rZ be the slope coefficients in the least squares multiple regression of y
on x1, x2. The minimum distance estimator of rI under the restriction rrl = 0 can
be obtained as 8 = +, + r$, where r is chosen to minimize the (estimated)

  ‘%ee Chamberlain (1982a, proposition 9)
1292                                                                     G. Chamberlain

variance of the limiting distribution of 8; this gives:
                    A



                    a12
       $=   7i1-   ,7j2,
                   *22


where Lijk is the estimated covariance between fij and 7jk in their limiting
distribution. Since 7i, = byx, - 7j2bxZx,,we have:




   If E(y,lx,i, xi2) is linear and if V(y,lx,i, xi2) = u2, then w12/w22 =
-cov(xil, xi2)/V(xil) and 6 = byx,. But in general 8 # byx, and 8 is more efficient
than $_. The source of the efficiency gain is that the limiting distribution of fi2
has a zero mean (if 7r2= 0), and so we can reduce variance without introducing
any bias if 7;2is correlated with b,_.,. Under the assumptions of linear regression
and homoskedasticity, by_ and ti2 are uncorrelated; but this need not be true in
the more general framework that we are using.


4.3.    Simultaneous equations: A generalization of three-stage least squares

Given the discussion on imposing restrictions, it is not surprising that two-stage
least squares is not, in general, an efficient procedure for combining instrumental
variables. Also, three-stage least squares, viewed as a minimum distance estima-
tor, is using the wrong norm in general.
   Consider the standard simultaneous equations model:

       y,=&,+u.    I)      E( I&)   = 0,
       ry, + Bx, = 4,

where IY7 + B = 0 and Tui = vi. We are continuing to assume that yi is M x 1, xi
is K x 1, 5’ = (x;, y/) is i.i.d. according to a distribution with finite fourth
moments (i = 1, . . . ,N), and that E(x,x;) is nonsingular. There are restrictions on
r and B: m(r, B) = 0, where m is a known function. Assume that the implied
restrictions on I7 can be specified by the condition that n = vec(IT’) = f(S),
where the domain of 6 is ??i, a subset of R” that includes the true value
S”(s 5 MK). Assume that Yi and f satisfy assumptions 1 and 2; these properties
could be derived from regularity conditions on m, as in Malinvaud (1970,
proposition 2, p. 670).
   Choose 8 to
Ch. I.?: Punul Duru                                                                1293

where fi is given in (4.2) and we assume that 52 in (4.1) is positive definite. Let
F=    df(~0)/&9’.       Then we have fi(8   - So) 2 N(O,A), where A = (F’SZ-‘F)pl.
This generalizes Malinvaud’s minimum distance estimator (p. 676); it reduces to
his estimator if UPUP is uncorrelated with x,x,‘, so that 52= E(u~u~‘)@[E(x,~;)]~’
(Up = y, - II%,).
   Now suppose that the only restrictions on r and B are that certain coefficients
are zero, together with the normalization restrictions that the coefficient of y,, in
the m th structural equation is one. Then we can give an explicit formula for A.
Write the mth structural equation as:



where the components of z,,,, are the variables in y, and x, that appear in the mth
equation with unknown coefficients. Let there be M structural equations and
assume that the true value To is nonsingular. Let S,, be the following block-diago-
nal matrix:




and s,,, = N-‘C~=iy,@x,. Let up’= (u~,...,u~~), where up, = y,, - Si’z;, and 8:
is the true value; let az,, = E(X,) and GX= E( x,x;). Let 6’ = (a;, . _. , aa). Then we
have:

         = (@~X[E(~;~;‘@x,x;)] -1@;X)-1.37                                       (4.3)

If UPUP’is uncorrelated with xix;, then this reduces to:




which is the conventional asymptotic covariance matrix for three-stage least
squares [Zellner and Theil (1962)].
  There is a generalization of three-stage least squares that has the same limit-
ing distribution as the generalized minimum distance estimator. Let Y$=
NP’C~=i(C,C~~x,x~), where G,= py, + ix, and f”! r”, B^ “”  - B”. Define:




     “See Chamberlain   (1982a).
1294                                                                           G. Chomberlain

The limiting distribution of this estimator is derived in the Appendix (Proposition
6). We record it as:
Proposition 4

~(8G,-60)%(0,A,,              wh ere A is given in (4.3). This generalized three-stage
least squares estimator is asymptotically efficient within the class of minimum
distance estimators.
   Our derivation of the limiting distribution of hGG3relies on linearity. For a
generalized nonlinear three-stage least squares estimator, see Hansen (1982).38


4.4. Asymptotic efficiency: A comparison with the quasi-maximum
likelihood estimator

Assume that ‘; is i.i.d. (i=1,2 ,...) from a distribution with E(c) = 7, V(r;) = X,
where X is a J x J positive-definite matrix; the fourth moments are finite.
Suppose that we wish to estimate functions of Z subject to restrictions. Let
u = vet(Z) and express the restrictions by the condition that u = g(e), where g is
a function from ?’ into Rq with a domain T c RP that contains the true value
0’( q = J2; p I J( J + 1)/2). Let

       s=+f (q-r)();-i)‘,
             1=1

and let s = vet(S).
    If the distribution of r, is multivariate normal, then the log-likelihood function
is:



If there are no restrictions on 7, then the maximum likelihood estimator of 8’ is a
solution to the following problem: Choose 4 to solve:




We shall derive the properties of this estimator when the distribution of ‘i is not
necessarily normal; in that case we shall refer to the estimator as a quaa-maxi-
mum likelihood estimator ( @QML).39

  3XThereare generalizationsof two-stageleast squaresin Chamberlain (1982a) and White (1982a).
  “The quasi-maximum likelihood terminology was used by the Cowles Commission; see Malinvaud
(1970, p. 678).
Ch. 22: Panal   Data                                                          1295


   MaCurdy (1979) considered a version of this problem and showed that, under
suitable regularity conditions, fi(t&,,, - do) has a limiting normal distribution;
the covariance matrix, however, is not given by the standard information matrix
formula. We would like to compare this distribution with the distribution of the
minimum distance estimator.
   This comparison can be readily made by using theorem 1 in Ferguson (1958).
In our notation, Ferguson considers the following problem: Choose 8 to solve

       W(SJ)[S-g(e)]     =O.

He derives the limiting distribution of @(6 - 0’) under regularity conditions on
the functions W and g. These regularity conditions are particularly simple in our
problem since W does not depend on S. We can state them as follows:
Assumption 3
So c RJ’ is an open set containing 8’; g is a continuous, one-to-one mapping of Z.
into Rq with a continuous inverse; g has continuous second partial derivatives in
Sob;rank [ dg(O)/H’] = p for B E 4; X(e) is nonsingular for 0 E Eo.

In addition, we shall need Sa: g(8’)    and the central limit theorem result that

fi(s    - g(e”)) 2 N(O,A), where A = V[(c - T’)@(c - TO)].
  Then Ferguson’s theorem implies that the likelihood equations almost surely
have a unique solution within Z. for sufficiently large N, and fi(&,_      -
0’) 2 N(O, A), where

       n = (G’~G)-‘G’~A~G(G’~G)-‘,

and G = 8g(8°)/Je’,     !P= (X08X0)-‘.      It will be convenient to rewrite this,
imposing the symmetry restrictions on X. Let u* be the J( J + 1)/2 X 1 vector
formed by stacking the columns of the lower triangle of X. We can define a
J2~[J(J+1)/2]matrix       Tsuchthata=Ta*.       The elements in each row of T are
all zero except for a single element which is one; T has full column rank. Let
3 = Ti* g(e) = Tg*(e),      G* = dg*(eo)/ae:        (k* = Tfw;     then JR[s* -
         ‘D
g*( e”)] -+ N(O, A*), where A* is the covariance matrix of the vector formed from
the columns of the lower triangle of (I; - r’)(r;: - 7’)‘. Now we can set

       A = (G’*~*G*)-‘(G’*~*A#~*c*)(G’*~*G*)-~.

  Consider the following minimum distance estimator. Choose d,,, to

       min[s*-g*(e)]‘A,[3*-g*(e)],
       BET
1296                                                                       G. Chumherluin

where 2’ is a compact subset of Z0 that contains a neighborhood              of 8’ and
   a.s.
A N + q*. Then the following result is implied by Proposition 2.
Proposition 5

If Assumption 3 is satisfied, then fi(i&,,,       - 0’) has the same limiting distribu-
tion as &?(e,,  - f3’).
                                                                   a.s.
If A* is nonsingular, an optimal minimum distance estimator has A, --, lA*-‘,
where 5 is an arbitrary positive real number. If the distribution of r, is normal,
then A*-’ = (l/2)**;     but in general A*-’ is not proportional to \k*, since A*
depends on fourth moments and ?* is a function of second moments. So in
general Jo,, is less efficient than the optimal minimum distance estimator that
uses

                                                                                    (4.4)

where SF is the vector formed from the lower triangle of (q - ?)(c - F)‘.
   More generally, we can consider the class of consistent estimators that are
continuously differentiable functions of S* : 8 = &3*). Chiang (1956) shows that
the minimum distance estimator based on A*+’ has the minimal asymptotic
covariance matrix within this class. The minimum distance estimator based on AN
in (4.4) attains this lower bound.


4.5.    Mukivariate probit models

Suppose that

       Yrm = I,   if 7rAx,+ u,, 2 0,
          = 0,    otherwise     (i=l   ,..., N; m =l,...,   M),

where the distribution of u: = (u,i,..., ujM) conditional on x, is multivariate
normal, N(O, Z). There may be restrictions on rr’ = ( ai’, . . . ,!I&), but we want to
allow X to be unrestricted, except for the scale normalization that the diagonal
elements of Z are equal to one. In that case, the maximum likelihood estimator
has the computational disadvantage of requiring numerical integration over M - 1
dimensions.
   Our strategy is to avoid numerical integration. We estimate rr”, by maximizing
the marginal likelihood function that is based on the distribution of y,,, condi-
tional on x,:
Ch.     22:     Panal    Data                                                                   1291


where F is the standard                       normal distribution   function. Then under standard
                                                                                 D
assumptions we have ii, a.s’  ’ the true value. If fi(li
                          + n,,,,                                          - r”) + N(0, jz), then we
can impose the restriction that n = f(S) by choosing b to minimize

              [it -     f(S)]W[li           - f(6)].
We only need to derive a formula for A2.40
 Our estimator of rr is solving the following equation:



where

              Q(n)= f { iit
                          y;,Jn F( V&K,)+ (1 - Y,,)ln[ 1 - F( TAX,
                            i=l       m=l

Hence, the asymptotic distribution of li can be obtained from the theory of
“M-estimators”. Huber (1967) provides general results, which do not impose
differentiability restrictions on S(R). His results cover, for example, regression
estimators based on minimizing the residual sum of absolute deviations. We shall
not need this generality here and shall sketch the derivation for the simpler,
differentiable case. This case has been considered by Hansen (1982), MaCurdy
(1981a), and White (1982).41
   Let zj be i.i.d. according to a distribution with support Z c Rq. Let 8 be an
open, convex subset of RP and let $(z, 0) be a function from Z X 8 into RP; its
k th component is rl/k(z, 0). For each 8 E 8, + is a measurable function of z, and
there is a 8’ E 8 with:



For each z E Z, a/~is a twice continuously differentiable function of 6. In addition:




is nonsingular, and



          I    ad4w) r/l(z)
                ae,ae,
for 0 E 8, where Qh(z,)l<
                                  I             (k,I,m=L...JJ)

                                               coo.

      @For an alternative approach to multivariate probit models, see Avery, Hansen and Hotz (1981).
      4’Also see Rao (1973, problem 9, p. 378).
1298                                                                              G. Chumherluin

  Suppose that we have a (measurable) estimator 8, E 8 such that d,y                     19’ and




for sufficiently large N a.s. By Taylor’s theorem:

       &   ,c~k(Zi.eo)+[j~k+t(~N-eo)‘c&q~N-~o)]=o,
           l-1


where


       jNk= z
                 1    N aGk(zi,eo)
                      .C                      cNk   =   ;   ;       a2+;f;ee:k)
                                                                            ,
                     r=l       ae     9                     1=1
                                                                         I




and e;, is on the line segment joining 6, and 8’ (k = 1,. . . ,p). [The measurability
of Q, follows from lemma 3 of Jennrich (1969).] By the strong law of large
numbers, jik converges a.s. to the k th row of J, and




(k,I,m=l         ,. . .,p). Hence (4, - e’)‘c,vk + 0 as. and


       m(& -eO)            = - DN~ &      ,c
                                          I    1
                                                q(z,,eo)
                                                                1

for N sufficiently large a.s. where D, “2 J. By the central limit theorem,




Hence:


       fl(8,         - 6’) 2 N(O, J-'A J'-l).

  Applying this result to our multivariate probit estimator gives:
Ch. ?_): Panal Data                                                           1299


where J=diag{         J1,..., JM} is a block-diagonal matrix with:


        J,n=E[ {(F’)2/[F(l- F)l}&]

(F and its derivative F’ are evaluated at rrt’xi); and

        A = E[ H@x,x;],

where the m, n element of the A4 x M matrix His h,, = emen with

               Ylm-F
                                   (m=l
                            F,

        e, =                               ,...,W
               F(l-    F)

(F and F’ are evaluated at r,“‘x,). We obtain a consistent estimator (d) of
J- ‘A J- ’ by replacing expectations by sample means and using 8 in place of rr”.
Then we can apply the minimum distance theory of Section 4.2 to impose
restrictions on 1~.


5.     Empirical applications



5.1.     Linear models: Union wage effects

We shall present an empirical example that illustrates some of the preceding
results.42 The data come from the panel of Young Men in the National Longitu-
dinal Survey (Pames). The sample consists of 1454 young men who were not
enrolled in school in 1969, 1970, or 1971, and who had complete data on the
variables listed in Table 5.1. Table 5.2(a) presents an unrestricted least squares
regression of the logarithm of wage in 1969 on the union, SMSA, and region
variables for all three years. The regression also includes a constant, schooling,
experience, experience squared, and race. This regression is repeated using the
1970 wage and the 1971 wage.
   In Section 2 we discussed the implications of a random intercept (c). If the
leads and lags are due just to c, then the submatrices of II corresponding to the
union, SMSA, or region coefficients should have the form PI + IA’. Consider, for
example, the 3 x 3 submatrix of union coefficients- the off-diagonal elements in
each column should be equal to each other. So we compare 0.048 to 0.046, 0.042
to 0.041, and -0.009 to 0.010; not bad.

     “This application is taken from Chamberlain (1982a).
1300                                                                                  G. Chamberlain

                                          Table 5.1
               Characteristics of National Longitudinal Survey Young Men,
               not enrolled in school in 1969, 1970, 1971: Means and
               standard deviations, N = 1454.

               Variable                  Mean                  Standard deviation

               LWI                       5.64                          0.423
               LW2                       5.74                          0.426
               LW3                       5.82                          0.437
               Ul                        0.336
               112                       0.362
               113                       0.364
               UI U?                     0.270
               Ul u3                     0.262
               U?U3                      0.303
               Ul U? u3                  0.243
               SMSAl                     0.697
               SMSAZ                     0.627
               SMSA3                     0.622
               RNSI                      0.409
               RNS?                      0.404
               RNS3                      0.410
               S                        11.7                           2.64
               EXP69                     5.11                          3.71
               FXP69*                   39.8                          46.6
               RACE                      0.264                          -


               Notes:
               L WI, L W2, L W3 -logarithm     of hourly earnings (in cents) on the
               current or last job in 1969,1970,1971; LIZ, LIZ, U3-I if wages on
               current or last job set by collective bargaining, 0 if not, in 1969,
               1970.1971; SMSAI, SMSAZ, SMSA3 -1 if respondent in SMSA,
               0 if not, in 1969, 1970, 1971; RNSI, RNSZ, RNS3-1         if respon-
               dent in South, 0 if not, in 1%9,1970,1971; S-years of schooling
               completed; EXP69-(age        in 1969-S-6); RACE-1         if respon-
               dent black, 0 if not.

    In Table 5.2(b) we add a complete set of union interactions, so that, for the
 union variables at least, we have a general regression function. Now the submatrix
 of union coefficients is 3 x7. If it equals (/313,   O)+ IA’, then in the first three
 columns, the off-diagonal elements within a column should be equal; in the last
 four columns, all elements within a column should be equal.
   I first imposed the restrictions on the SMSA and region coefficients, using the
 minimum distance estimator. D is estimated using the formula in (4.2), and
A, = 6-l. The minimum distance statistic (Proposition 3) is 6.82, which is not a
surprising value from a x2(10) distribution. If we impose the restrictions on the
union coefficients as well, then the 21 coefficients in Table 5.2(b) are replaced by
8: one j3 and seven h’s. This gives an increase in the minimum distance statistic
(Proposition 3’) of 19.36-6.82 =12.54, which is not a surprising value from a
x2(13) distribution. So there is no evidence here against the hypothesis that all the
1302                                                                                     G. Chamberlain

union  coverage in the wage change equations. The estimates (standard errors) are
0.097 (0.019) and -0.119 (0.022). The standard error on the sum of the coeffi-
cients is 0.024, so again there is no evidence against the simple model with
lXY,lx,, x2, x3, c) =Bx, + c.43
   Table 5.3(a) exhibits the estimates that result from imposing the restrictions
using the optimal minimum distance estimator.44 We also give the conventional
generalized least squares estimates. They are minimum distance estimates in
which the weighting matrix (AN) is the inverse of




We give the conventional standard errors based on (F ‘& ‘F)- ’ and the standard
errors calculated according to Proposition 2, which do not require an assumption
of homoskedastic linear regression. These standard errors are larger than the
conventional ones, by about 30%. The estimated gain in efficiency from using the
appropriate metric is not very large; the standard errors calculated according to
Proposition 2 are about 10% larger when we use conventional GLS instead of the
optimum minimum distance estimator.
   Table 5.3(a) also presents the estimated h’s. Consider, for example, an individ-
ual who was covered by collective bargaining in 1969. The linear predictor of c
increases by 0.089 if he is also covered in 1970, and it increases by an additional
0.036 if he is covered in all three years. The predicted c for someone who is
always covered is higher by 0.102 than for someone who is never covered.
   Table 5.3(b) presents estimates under the constraint that A = 0. The increment
in the distance statistic is 89.08 - 19.36 = 69.72, which is a surprisingly large value
to come from a x2(13) distribution. If we constrain only the union h’s to be zero,
then the increment is 57.06 - 19.36 = 37.7, which is surprisingly large coming
from a x2(7) distribution. So there is strong evidence for heterogeneity bias.
   The union coefficient declines from 0.157 to 0.107 when we relax the A = 0
restriction. The least squares estimates for the separate cross sections, with no

   43Using May-May CPS matches for 1977-1978, Mellow (1981) reports coefficients (standard
errors) of 0.087 (0.018) and -0.069 (0.020) for entering and leaving union membership in a wage
change regression. The sample consists of 6602 males employed as nonagricultural wage and salary
workers in both years. He also reports results for 2177 males and females whose age was I 25. Here
the coefficients on entering and leaving union membership are quite different: 0.198 (0.031) and
- 0.035 (0.041); it would be useful to reconcile these numbers with our results for young men. Also see
Stafford and Duncan (1980).
   “We did not find much evidence for nonstationarity in the slope coefficients. If we allow the union
B to vary over the three years, we get 0.105,0.103,0.114. The distance statistic declines to 18.51, giving
19.36 - 18.51= 0.85; this is not a surprising value from a x2(2) distribution. If we also free up /3 for
SMSA and RN& then the decline in the distance statistic is 18.51- 13.44 = 5.07, which is not a
surprising value from a x2(4) distribution.
Ch. 22: Panal Data                                                                                              1303


                            Table 5.3
                      Restricted estimates.
                                (a)
                  Coefficients (and standard errors) of:
                      I/                SMSA                RNS

    8:              0.107                0.056            - 0.082
                   (0.016)              (0.020)            (0.045)
    /%,s:           0.121                0.050            - 0.085
                   (0.013)              (0.017)            (0.040)
                   (0.018)              (0.021)            (0.052)

                             1/l           u2             u3          Ul u2     111u3      c/IL/3    Ul u3 u3

    1:                     -0023         - 0.067      - 0.082         0.156      0.152      0.195    - 0.229
                            (0.030)       (0.040)      (0.037)       (0.057)    (0.062)    (0.059)    (0.085)
                           SMSAl                SMSAZ                SMSA3      RNSI      RNS2        RNS3

                            0.086               - 0.008               0.032      0.100    - 0.021    - 0.128
                            (0.025)               (0.046)            (0.046)    (0.072)    (0.077)    (0.068)
    x2(23) = 19.36

                                          (b) Restrict A = 0

                             Coetbcients (and standard errors) of:
                                    U              SMSA                RNS
    /3:                         0.157               0.120            -0.150
                               (0.012)             (0.013)            (0.016)
    x2(36) = 89.08


    Notes:


             E*( Y 1x1= rlx = rr,x, + ll*x*; x;= (Ul, u2. u3,                    UlU2, Ul u3, wlJ3.  Ul UIU3,
             SMSAl,   SMSA2,     SMSA3,    RNSl, RNSZ, RNS3);                     x; = (1, S, EXP69. ExP69’,
             RACE). IIt = (&fs, 0, &MsA13, /?RNS13)+IA’; II, is unrestricted. The restrictions are
             expressed as ‘II= F6, where 8 is unrestricted. b and x are minimum distance estimates
             with Ai1 = 0 in (4.2); floLs and hors are minimum distance estimates with A,; ’ = fis
             in (5.1) (&,s    is not shown in the table). The first standard error for &,, is the
             conventional one based on (F’& ‘F) ‘; the second standard error for &,, is based on
             (F’dd; ‘F)-‘F’fi; ‘832; ‘F(F’fi;‘F) ~’ (Proposition 2). The xz statistics are computed
             from N[ir - Fb]‘b’[ri    - F&l (Proposition 3).
1304                                                                                    G. Chumherlain

leads  or lags, give union coefficients of 0.195, 0.189, and 0.191 in 1969, 1970, and
1971.45 So the decline in the union coefficient, when we allow for heterogeneity
bias, is 32% or 44% depending on which biased estimate (0.16 or 0.19) one uses.
The SMSA and region coefficients also decline in absolute value. The least
squares estimates for the separate cross sections give an average SMSA coefficient
of 0.147 and an average region coefficient of - 0.131. So the decline in the SMSA
coefficient is either 53% or 62% and the decline in absolute value of the region
coefficient is either 45% or 37%.



5.2.    Nonlinear models: Labor force participation

We shall illustrate some of the results in Section 3. The sample consists of 924
married women in the Michigan Panel Study of Income Dynamics. The sample
selection criteria and the means and standard deviations of the variables are in
Table 5.4. Participation status is measured by the question: “Did             do any
work for money last year?’ We shall model participation in 1968,1970, 1972, and
1974.
   In terms of the model described in Section 3.1, the wage predictors are
schooling, experience, and experience squared, where experience is measured as
age minus schooling minus six; the tastes for nonmarket time are predicted by
these variables and by children. The specification for children is a conventional
one that uses the number of children of age less than six (YK) and the total
number of children in the family unit ( K).46 Variables that affect only the lifetime
budget constraint in this certainty model are captured by c. In particular,
nonlabor income and the husband’s wage are assumed to affect the wife’s
participation only through the lifetime budget constraint. The individual effect (c)
will also capture unobserved permanent components in wages or in tastes for
nonmarket time.
   Table 5.5 presents maximum likelihood (ML) estimates of cross-section probit
specifications for each of the four years. Table 5.6 presents unrestricted ML
estimates for all lags and leads in YK and K. If the residuals (u,!) in the latent

   45U~ing the NLS Young Men in 1969 (N = 1362), Griliches (1976) reports a union membership
coefficient of 0.203. Using the NLS Young Men in a pooled regression for 1966-1971             and 1973
(N = 470). Brown (1980) reports a coefficient of 0.130 on a variable measuring the probability of
union coverage. (The union coverage question was asked only in 1969, 1970, and 1971; so this variable
is imputed for the other four years.) The coefficient declines to ,081 when individual intercepts are
included in the regression. His regressions also include a large number of occupation      and industry
specific job characteristics.
   46Some of the work on participation   and fertility is in Mincer (1963) Willis (1973). Gronau (1973,
1976, 1977) Hall (1973). Ben-Porath (1973), Becker and Lewis (1973). Mincer and Polachek (1974).
Heckman (1974, 1980), Heckman and Willis (1977), Cam and Dooley (1976), Schultz (1980). Hanoch
(1980). and Rosenzweig and Wolpin (1980).
Ch. 22: Panal Data                                                                   1305

variable model (3.1) have constant variance, then al = . . . = a4 in (3.2), and the
submatrices of II corresponding to YK and K should have the form PI + IA’.
There may be some indication of this pattern in Table 5.6, but it is much weaker
than in the wage regressions in Table 5.2.
   We allow for unequal variances and provide formal tests by using the minimum
distance estimator developed in Section 4.5. In Table 5.7(a) we impose the
restrictions that



The minimum distance statistic is 53.8, which is a very surprising value coming
from a x2(19) distribution. So the latent variable c does not appear to provide an
                                            Table 5.4
                      Characteristics of Michigan Panel Study of Income
                      Dynamics married women: Means and standard devia-
                      tions, N = 924.

                     Variable              Mean                Standard deviation

                     LFPI                    0.499
                     LFP?                    0.530
                     LFP3                    0.529
                     LFP4                    0.566                     -

                     YKI                    0.969                      1.200
                     YK2                    0.164                      1.069
                     YK3                    0.551                      0.895
                     YK4                    0.363                      0.685
                     Kl                      2.38                      1.69
                     K2                      2.30                      1.64
                     K3                      2.11                      1.61
                     K4                      1.84                      1.52
                     s                     12.1                       2.1
                     EXP68                 17.2                       8.5
                     EXP682               368.                      301.


                     Notes:
                     LFPZ,      , LFP4 -1 if answered “yes” to “Did
                     work for money last year?“, 0 otherwise, referring to 1968,
                      1970, 1972, 1974; YKI,       , YK4 -number    of children of
                     age less than six in 1968, 1970, 1972, 1974;
                      Kl,    , K4 -number   of children of age less than eighteen
                     living in the family unit in 1968,1970,1972,1974; S-years
                     of schooling completed; EXP6d-(age          in 1968 - S - 6).
                     The sample selection criteria required that the women be
                     married to the same spouse from 1968 to 1976; not part of
                     the low income subsample; between 20 and 50 years old in
                     1968; white; out of school from 1968 to 1976; not disabled.
                     We required complete data on the variables in the table,
                     and that there be no inconsistency between reported eam-
                     ings and the answer to the participation question.
1306                                                                                        G. Chomherluin


                                               Table 5.5
                                    ML probit cross-section estimates
                                         Coefficients (and standard errors) of:
  Dependent
  variable       YKI          YK?         YK3        YK4         KI         KZ         K3          K4

  LFPI         -0.246         -                       -        -0.063       -           -
                (0.046)                                         (0.031)
  LFP2            -         -0.293        -                       -       -0.075        -
                             (0.055)                                       (0.031)
  LFP3            -            -        -0.342        -          -                   -0.077         -
                                         (0.067)                                      (0.032)
  LFP4            -            -                    - 0.366      -                      -        - 0.069
                                                     (0.081)                                      (0.034)



  Notes:
  Separate ML estimates each year. All specifications include (1, S,EXP68,EXP682).




adequate interpretation of the unrestricted leads and lags. It may be that the
distributed lag relationship between current participation and previous births is
more general than the one implied by summing over the previous six years (YK)
and over the previous eighteen years (K). It may be fruitful to explore this in
more detail in future work. Perhaps strict exogeneity conditional on c will hold
when we use a more general specification for lagged births. But we must keep in
mind that this question is intrinsically tied to the functional form restrictions-we
saw in Section 3.3 that there always exist specifications in which y, is independent
of x 1, . . . , xT conditional on c.



                                                 Table 5.6
                                    Unrestricted ML probit estimates.

   Dependent                            Coefficients (and standard errors) of:
   variable        YKI         YK2         YK3         YK4        KI        K2         K3         K4

   LFPl          - 0.205     -0.017      -0.160        0.420   0.176      - 0.142    - 0.196     0.063
                  (0.081)     (0.119)     (0.141)     (0.144) (0.076)      (0.100)    (0.110)   (0.090)
   LFP2          - 0.047     - 0.238     - 0.047       0.093   0.320      - 0.278    - 0.250     0.177
                  (0.079)     (0.117)     (0.140)     (0.142) (0.077)      (0.102)    (0.110)   (0.090)
   LFP3          - 0.254       0.214     -0.190      -0.209    0.204      - 0.210    - 0.045     0.030
                  (0.080)     (0.116)     (0.139)     (0.141) (0.077)      (0.102)    (0.112)   (0.090)
   LFP4          -0.195        0.252     -0.211      - 0.282   0.020        0.083    -0.181      0.058
                  (0.079)     (0.118)     (0.139)     (0.138) (0.075)      (0.100)    (0.110)   (0.090)


   Notes:
   Separate ML estimates each year. All specifications include (1, S, EXP68, EXP68*).
                                       Table 5.7
                                 Restricted estimates.
                                           (a)
                              Ccdicienrs    (and standard errors) of:
         YK           K
d      PO.121      - 0.058
        10.046)     10.029)


        YKI         YK?          YK3         YK4         KI          K?           K3         K4
a,X    -0.042        0.038     - 0.050      0.087       0.194    -0118            0.146     0.090
        (0.041)     (0.060)     (0.070)    (0.077)     (0.056)    (0.062)        (0 073)   (0.056)



a        1.585       1 758       1.279      1.0
        (0.392)     (0.375)     (0.231)     (-)

x*(19) = 53.8

                                       (b) Restrict X = 0
         YK           K
%S       0.273     - 0.073
        (0.065)     (0.023)


          4          4            4          84
a        0.821       0 930       0.920      1.0
        (0.198)     (0.205)     (0.191)      (- )
~‘(27) = 78.4

                               (c)Restricta,=l(r=l..          _.4)
                              Coefficients (and standard errorsl of:
         YK           K
B      -0.193      - 0.070
        (0.043)     (0.031)


         YKI        YK?          YK3         YK4         KI          K?           K.1        K4

x      - 0.077       0.082     - 0.098      0.102       0.203    -010x          -0.157    0 072
        (0.062)     (0.082)     (0.102)    (0.110)     (0.063)    (0.0X3)        (0 09x1 (0.0X1)
x’(22) = 61.6

                     (d) Restrict (I, = 1; 8, unrestricted(I = 1..        .4)
                              Coefficients (and standard errors) of:
        YKI         YKZ          YK3        YK4      KI        K_’                K3         K4
B      - 0.107     - 0.216     -0.198 -0.277 -0.107              - 0.047        - 0.046 - 0.017
        (0.054)     (0.059)     (0.067) (0.086) (0.040)           (0.035)        (0.039) (0.043)


        YKI         YKT          YK3         YK4         KI          K2           K3         K4
)r     -0.111        0.085     -0.102       0.126       0.213    -0.113         -0.155      0 052
        (0.063)     (0.083)     (0.102)    (0.111)     (0.064)    (0.083)        (0.099)   (0 082)
x2(16) = 52.7

Noles:
I7, = diag( al,. ,cQ}[/?,.~~~+ NY;,, /lK14+ NK]; I72 is unrestricted. In Table 5.7(d)
/SYKf4 and BK14 are replaced by diagonal matrices with no restrictions on the
diagonal elements. All restrictions are imposed by applying the minimum distance
procedure to the unrestricted estimates of n, in Table 5.6. The asymptotic covariance
matrix of h, is obtained as in Section 4.5. aq is normalized to equal one.
1308                                                                    G. Chamherluin

   If we do impose the restrictions in Table 5.7(a), then there is strong evidence
that h # 0. Constraining A = 0 in Table 5.7(b) gives an increase in the distance
statistic of 78.4- 53.8 = 24.6, which is surprisingly large to come from a x2(8)
distribution.
   In Table 5.7(c) we constrain all of the residual variances to be equal ( (Y[= 1).
An alternative interpretation of the time varying coefficients is provided in Table
5.7(d), where p, and pK vary freely over time and (Y(= 1. In principle, we could
also allow the (r, to vary freely, since they can be identified from changes over
time in the coefficients of c. In fact that model gives very imprecise results and it
is difficult to ensure numerical accuracy.
   We shall interpret the coefficients on YK and K by following the procedure in
(3.4). Table 5.8 presents estimates of the expected change in the participation
probability when we assign an additional young child to a randomly chosen
family, so that YK and K increase by one. We compute this measure for the
models in Tables 5.7(a), 5.7(c) and 5.7(d). The average change in the participation
probability is -0.096. We can get an indication of omitted variable bias by
comparing these estimates with the ones based on Table 5.7(b), where h is
constrained to be zero. Now the average change in the participation probability is
 -0.122, so that the decline in absolute value when we control for c is 21%. An
alternative comparison can be based on the cross-section estimates, with no leads
or lags, in Table 5.5. Now the average change in the participation probability is
 - 0.144, giving an omitted variable bias of 33%.
   Next we shall consider estimates from the logit framework of Section 3.2. Table
5.9 presents (standard) maximum likelihood estimates of cross-section logit
specifications for each of the four years. We can use the cross-section probit
results in Table 5.5 to construct estimates of the expected change in the log odds
of participation when we add a young child to a randomly chosen family. Doing
this in each of the four years gives - 0.502, - 0.598, - 0.683, and - 0.703. With
the logit estimates, we simply add together the coefficients on YK and K in Table
5.9; this gives - 0.507, - 0.612, - 0.691, and - 0.729. The average over the four
years is -0.621 for probit and -0.635 for logit. So at this point there is little
difference between the two functional forms.
   Now allow for the latent variable (c). Table 5.10 presents the conditional
maximum likelihood estimates for the fixed effects logit model. The striking result
here is that, unlike the probit case, allowing for c leads to an increase in the
absolute value of the children coefficients. If we constrain /3rK and pK to be
constant over time (Table 5.10(a)), the estimated change in the log odds of
participation when we add an additional young child is - 0.909. If we allow pyK
and & to vary freely over time (Table 5.10(b)), the average of the estimated
changes is - 0.879. So the absolute value of the estimates increases by about 40%
when we control for c using the logit framework. The estimation method is having
a first order effect on the results.
1310                                                                                                                    G. Chamberlain


                                                        Table 5.9
                                             ML logit cross-sectionestimates.
                                                     Coefficients (and standard errors) of:
 Dependent
 variable              YKI            YK2            YK3            YK4            Kl                K2            K3            K4

 LFPI               -0.404            -                                       -0.103                 -             -             -
                     (0.077)                                                   (0.051)
 LFP2                  -          -0.494              -                                          -0.118            -             -
                                   (0.095)                                                        (0.035)
 LFP3                                           -0.568              -                                          -0.123            -
                                                 (0.114)                                                        (0.051)
 LFP4                                                          -0.617              -                                         -0.112
                                                                (0.138)                                                       (0.055)



 Notes:
 Separate ML estimates each year. All specifications include (1, S, EXP68, EXP682).


   We have seen that the restrictions on the probit I7 matrix, which underlie our
estimate of /I, appear to be false. An analogous test in the logit framework is
based on (3.10). We use conditional ML to estimate a model that includes
YK;D,, K;D,(s=l,...,     4; t = 2,3,4), where D, is a dummy variable that is one in
period I and zero otherwise. It is not restrictive TOexclude YK;D, and K; D,,
since they can be absorbed in c. We include also D,, S-D,, EXP68.D,, and
EXP68** D, (t = 2,3,4). Then comparing the maximized conditional likelihoods

                                                   Table 5.10
                             Conditional ML estimates of the fixed effects logit model.

                                                             (a)
                                             Coefficients (and standard errors) of:
                  YK             K
        8    -0.573          - 0.336
              (0.115)         (0.120)

                                               (b) 8, unrestricted (t = 1,.             ,4)
                                             Coefficients (and standard errors) of:
                 YKI           YK2           YK3             YK4            KI                 K.?           K3           K4
        fi   -0.336          -0.679         -0.780         -0.967         -0.315         -0.178           -0.141        -0.120
                 (0.144)       (0.172)       (0.205)        (0.242)        (0.135)            (0.145)       (0.155)      (0.165)


        Notes:
        A conditional likelihood ratio test of & = . = & gives x2(6) = 8.7. The specifications in
        Tables IO(a) and 10(b) include dummy variables for 1970, 1972, 1974 (0,. I = 2,3,4) and
        the interactions S.O,, EXP&i.D,, EXP682.D, (t = 2,3,4). (Due to the presence of the
        fixed effect c,, it is not restrictive to exclude D,, S, EXP68, EXP682, S.D,, EXP68. D,,
        EXP682 D, .)
Ch. 22: Panal Data                                                                 1311

for this specification and the specification in Table 5.10(b) gives a conditional
likelihood ratio statistic of 53.9, which is a very surprising value to come from a
x2(16) distribution. So the restrictions underlying our logit estimates of j? also
appear to be false. It may be that the false restrictions simply imply different
biases in the probit and logit specifications.


6.   Conclusion

Our discussion has focused on models that are static conditional on a latent
variable. The panel aspect of the data has primarily been used to control for the
latent variable. Much work needs to be done on models that incorporate uncer-
tainty and interesting dynamics. Exploiting the martingale implications of time-
additive utility seems fruitful here, as in Hall (1978) and Hansen and Singleton
(1982). There is, however, a potentially important distinction between time
averages and cross-section averages. A time average of forecast errors over T
periods should converge to zero as T + co. But an average of forecast errors
across N individuals surely need not converge to zero as N + cc ; there may be
common components in those errors, due to economy-wide innovations. The same
point applies when we consider covariances of forecast errors with variables that
are in the agents’ information sets. If those conditioning variables are discrete, we
can think of averaging over subsets of the forecast errors; as T -+ 00, these
averages should converge to zero, but not necessarily as N -+ 00.
   As for controlling for latent variables, I think that future work will have to
address the lack of identification that we have uncovered. It is not restrictive to
assert that ( y,, . . . ,yT) and (xi,. . . , xT) are independent conditional on some
latent variable c.



Appendix

Let+=(xj,y;),i=l,...,      N,wherex:=(x;,      ,..., XiK)andy,‘=(y,t   ,..., YrM).Write
the m th structural equation as:

     Yirn = ai7zim   +   ‘tm   (m =l,...,M),

where the components of zi, are the variables in y, and X, that appear in the m th
equation with unknown coefficients. Let S,, be the following block-diagonal
matrix:
                                                                          G. Chamberlain
1312

and




Let @=(uz ,..., $,),whereu~,=y,,          - a,$,,,, and 6: is the true value of 6,; let
@:-,= E(S;,). Let S’= (&;,...,a;)     be s xl and set




Proposition 6

Assume that (1) q is i.i.d. according to some distribution with finite fourth
mtrflents; (2) E[x,(y,, - 6,fzl,)] = 0 (m=l,...,M);   (3) rank (!Pz:,)=s; (4)
D + q as N + cc, where 9 is a positive-definite matrix. Then a(8 -

So) E N(O, A), where




Proof




                                             a.s.
                                                          is an s X s positive-
By the strong law of large numbers, S,, -+ @::,;@zsxYI-l@~X
definite matrix since rank          = s. So we obtain                      distribution
by considering




Note that $8~;     is i.i.d. with E(u~@x,) = 0, V(uy@x,) = E(u$~@‘x,x;).           Then
applying the central limit theorem gives fi(8 - So) 5 N(O, A). Q.E.D.

   This result includes as special cases a number of the commonly used estimators.
If z,, =x, (m =l,..., M) and D =         then is the least squares estimator and A
reduces to the formula for P given in (4.1). If f = E(u@p)@ E(x,x;), then A is
the asymptotic covariance matrix for the three-stage least squares estimator. If
Ch. 22: Panal     Data                                                                           1313


q = E( u$$@x,x;),       then A is the asymptotic covariance matrix for the gener-
alized three-stage least squares estimator (4.3).
   Consider applying the generalized three-stage least squares estimator to the first
J equations (J < M). If E(z,~x;) is nonsingular for j = J+ l,...,M,         then this
estimator for (a;, . . . ,a;) has the same asymptotic covariance matrix as the
estimator obtained by applying the generalized three-stage least squares estimator
to the full set of A4 equations. This follows from examining the partitioned inverse
of (4.3).



References
Amemiva. T. (1971) “The Estimation of Variances in a Variance-Components Model”. International
  Economic &view: 12, 1-13.
Andersen, E. B. (1970) “Asymptotic Properties of Conditional Maximum Likelihood Estimators”,
 Journal of the Roval Statistical Societv. Series B. 32. 283-301.
Andersen, I?. B. (1571) “Asymptotic Properties of Conditional Likelihood Ratio Tests”, Journul of the
  American      Statistical    Association,       66, 630-633.
Andersen, E. B. (1972) “The Numerical Solution of a Set of Conditional Estimation Equations”,
 Journal of the Royal Statistical Society, Series B, 34, 42-54.
Andersen, E. B. (1973) Conditional Inference and Models for Measuring. Copenhagen: Mentalhygiej-
  nisk Forlag.
Anderson, T. W. (1969) “Statistical Inference for Covariance Matrices with Linear Structure”, in P. R.
  Krishna&     ed., Proceedings of the Second International     Symposium  on Multioariate   Analvsis,
  Academic Press, New York.
Anderson, T. W. (1970) “Estimation of Covariance Matrices Which are Linear Combinations or
  Whose Inverses are Linear Combinations of Given Matrices”, Essu~~sin Probability und Statistics,
  University of North Carolina Press, Chapel Hill.
Anderson, T. W. and C. Hsiao (1981) “Estimation of Dynamic Models with Error Components”,
  Journal     of the American       Statistical    Association,   76, 598-606.
Anderson, T. W. and C. Hsiao (1982) “Formulation and Estimation of Dynamic Models Using Panel
  Data”, Journal of Econometrics, forthcoming.
Avery, R. B., L. P. Hansen, and V. J. Hotz (1981) “Multiperiod Probit Models and Orthogonality
  Condition Estimation”, Carnegie-Mellon University, Graduate School of Industrial Administration
  Working Paper No. 62-80-81.
Balestra, P. and M. Nerlove (1966) “Pooling Cross Section and Time Series Data in the Estimation of
  a Dynamic Model: The Demand for Natural Gas”, Econometrica, 34, 585-612.
Barndorff-Nielson, 0. (1978) Information and Exponentiul Fumilies in Stutisticul Theory. New York:
  Wiley.
Basmann, R. L. (1965) “On the Application of the Identifiability Test Statistic and Its Exact Finite
  Sample Distribution Function in Predictive Testing of Explanatory Economic Models”, unpub-
  lished manuscript.
Becker, G. S. and H. G. Lewis (1973) “On the Interaction Between the Quantity and Quality of
  Children”. Journal of Political Economv. 81. S279-S288.
Ben-Porath, Y. (1973) ;‘Economic AnaIy& of Fertility in Israel: Point and Counter-Point”, Journal of
  Political   Economy,        81, S202-S233.
Billingsley, P. (1979) Probability and Measure, Wiley, New York.
Bishop, Y. M. M., S. E. Fienberg and P. W. Holland (1975) Discrete Multiouriute Anulvsis: Theor?, and
  Practice, Cambridge, MA: MIT Press.
Blinder, A. S. and Y. Weiss (1976) “Human Capital and Labor Supply: A Synthesis”, Journul of
  Political   Economy,        84, 449-472.
1314                                                                                    G. Chamberlain

Brown, C. (1980) “Equalizing Differences in the Labor Market”, Quarrerly Jourmd of Economics, 94,
  113-134.
Cain, G. G. and M. D. Dooley (1976) “Estimation of a Model of Labor Supply, Fertility, and Wages
  of Married Women”, Journal of Political Economy, 84, S179-S199.
Chamberlain, G. (1977) “An Instrumental Variable Interpretation of Identification in Variance-Com-
  ponents and MIMIC Models”, in P. Taubman (ed.), Kinometrics: The Determinants o/ Socioeco-
  nomic Success Within and Between Families, North-Holland Pubhshing Company, Amsterdam.
Chamberlain, G. (1978) “Omitted Variable Bias in Panel Data: Estimating the Returns to Schooling”,
  Annales de I’INSEE,       30/31,49-82.
Chamberlain, G. (1978a) “On the Use of Panel Data”, unpublished manuscript.
Chamberlain, G. (1979) “Heterogeneity, Omitted Variable Bias, and Duration Dependence”, Harvard
  Institute for Economic Research Discussion Paper No. 691.
Chamberlain, G. (1980) “Analysis of Covariance with Qualitative Data”, Review o/Economic Studies,
  47. 225-238.
Chamberlain, G. (1980a) “Studies of Teaching and Learning in Economics: Discussion”, American
  Economic Review, Papers and Proceedings, 69, 47-49.
Chamberlain, G. (1982) “The General Equivalence of Granger and Sims Causality”, Econometrica.
  50, 569-581.
Chamberlain, G. (1982a) “Multivariate Regression Models for Panel Data”, Journal of Econometrics,
  18, 5-46.
Chiang, C. L. (1956) “On Regular Best Asymptotically Normal Estimates”, Anna/s of Marhemurrcal
  Slarurics, 27, 336-351.
Corcoran, M. and M. S. Hill (1980) “Persistence in Unemployment Among Adult Men”, in G. J.
  Duncan and J. N. Morgan (eds.), Five Thousand American Families- Patterns of Economic
  Progress, Institute for Social Research, University of Michigan, Ann Arbor.
Cox, D. R. (1970) Analysis of Binary Data, London, Methuen.
Cramer, H. (1946) Mathematical Methods of Sfafistics, Princeton University Press, Princeton.
deFinetti, B. (1975) Theor?, of Probability, Vol. 2, Wiley. New York.
Diaconis, P. and D. Freedman (1980) “deFinetti’s Theorem for Markov Chains”, The Anna/s of
  Probability. 8, 115-130.
Dynkin, E. B. and A. A. Yushkevich (1979) Controlled Markov Processes. Springer-Verlag, New York.
Ferguson, T. S. (1958) “A Method of Generating Best Asymptotically Normal Estimates with
  Application to the Estimation of Bacterial Densities”, Annals of Muthematical Statistics, 29.
  1046-1062.
Fisher, R. A. (1935) “The Logic of Inductive Inference”, Journal of the Royal Srafis~icaI Sociep, Series
   B, 98, 39-54.
Fhnn, C. J. and J. J. Heckman (1982) “Models for the Analysis of Labor Force Dynamics”, in G.
   Rhodes and R. L. Basmann (eds.), Advances in Econometrics, Vol. 1, JAI Press, Greenwich.
Flinn, C. J. and J. J. Heckman (1982a) “New Methods for Analyzing Structural Models of Labor
   Force Dynamics”, Journal of Econometrics. 18, 115-168.
Florens, J. P. and M. Mouchart (1982) “A Note on Noncausahty”, Econometrica, 50, 583-591.
Ghez, G. R. and G. S. Becker (1975) The Allocation of Time and Goods Over the Life Cycle. Columbia
   University Press, New York.
Goldberger, A. S. (1974) “Asymptotics of the Sample Regression Slope”, unpublished lecture notes,
  No. 12.
Goldberger, A. S. (1974a) “Unobservable Variables in Econometrics”, in P. Zarembka (ed.), Frontiers
  in Econometrics, Academic Press, New York.
Granger, C. W. J. (1969) “Investigating Causal Relations by Econometric Models and Cross-Spectral
  Methods”, Econometrica, 37, 424-438.
Griliches, Z. (1967) “Distributed Lags: A Survey”, Econometrica, 35, 16-49.
Griliches, Z. (1974) “Errors in Variables and Other Unobservables”, Economerrica, 42, 971-998.
Grikhes, Z. (1976) “Wages of Very Young Men”, Journal of Political Economy, 84, S69-S85.
Griliches, Z. (1979) “Sibling Models and Data in Economics: Beginnings of a Survey”, Journal of
  Political Economy, 87, S37-S64.
Griliches, Z., B. H. Hall, and J. A. Hausman (1978) “Missing Data and Self-Selection in Large
  Panels”, Annales de I’INSEE, 30/31, 137-176.
Ch. _)I: Panal Data                                                                               1315

Griliches, Z., B. H. Hall, and J. A. Hausman (1981) “Econometric Models for Count Data with an
  Annlication to the Patents- -R & D Relationship”, National Bureau of Economic Research
  Technical Paper No. 17.
Griliches, Z. and A. Pakes (1980) “The Estimation of Distributed Lags in Short Panels”, National
  Bureau of Economic Research Technical Paper No. 4.
Gronau, R. (1973) “The Effect of Children on the Housewife’s Value of Time”, Journal of Political
  Economy,     81, S168-S199.
Gronau, R. (1976) “The Allocation of Time of Israeli Women”, Journal of Political Economy. 84,
  s201-s220.
Gronau, R. (1977) “Leisure, Home Production, and Work-the           Theory of the Allocation of Time
  Revisited”, Journal of Poliiical Economy, 85, 1099-1123.
Hall, R. E. (1973) “Comment”, Journal of Political Economy, 81, S2OC-S201.
Hall, R. E. (1978) “Stochastic Implications of the Life Cycle-Permanent   Income Hypothesis: Theory
  and Evidence”, Journal of Political Economy, 86, 971-988.
Hanoch, G. (1980) “A Multivariate Model of Labor Supply: Methodology and Estimation”, in J. P.
  Smith (ed.), Female labor Supply: Theory and Estimation, Princeton University Press, Princeton.
Hansen, L. P. (1982) “Large Sample Properties of Generalized Method of Moments Estimators”.
  Econometrica,     50, 1029-1054.
Hansen, L. P. and K. J. Singleton (1982) “Generalized Instrumental Variable Estimation of Nonlinear
  Rational Expectations Models”, Econometrica, 50, 1269-1286.
Harville, D. A. (1977) “Maximum Likelihood Approaches to Variance Component Estimation and to
  Related Problems”, Journal of the American Statist~cul Association, 72. 320-338.
Hause, J. (1977) “The Covariance Structure of Earnings and the On-the-Job Training Hypothesis”.
  Annuls     of Economic   und Socral Measurement,   6. 335-365.
Hause. J. (1980) “The Fine Structure of Earnings and the On-the-Job Training Hypothesis”.
  Econometrica, 48, 1013-1029.
Hausman, J. A. and D. A. Wise (1979) “Attrition Bias in Experimental and Panel Data: The Gary
  Income Maintenance Experiment”, Econometrica, 47, 455-473.
Hausman, J. A. and W. E. Taylor (1981) “Panel Data and Unobservable Individual Effects”,
  Econometrica,     49. 1377-1398.
Heckman, J. J. (1974) “Shadow Prices, Market Wages, and Labor Supply”,            Econometrica,    42,
  679-694.
Heckman, J. J. (1976) “A Life-Cycle Model of Earnings, Learning, and Consumption”, Journal of
  Political Economy, 84, Sll-S44.
Heckman, J. J. (1978) “Simple Statistical Models for Discrete Panel Data Developed and Applied to
  Test the Hypothesis of True State Dependence Against the Hypothesis of Spurious State Depen-
  dence”, Annales de I’INSEE,      30/31, 227-269.
Heckman. J. J. (1980) “Sample Selection Bias as a Specification Error”, in J. P. Smith (ed.). Female
  Labor Supplv: Theory and Estimation,     Princeton University Press, Princeton.
Heckman, J. J. (1981) “Statistical Models for Discrete Panel Data”, in C. Manski and D. McFadden
  (eds.), Structural Ana!vsts of Discrete Data with Econometric Applications, MIT Press, Cambridge.
Heckman, J. J. (1981a) “The Incidental Parameters Problem and the Problem of Initial Conditions in
  Estimating Discrete Time-Discrete       Data Stochastic Processes and Some Monte Carlo Evidence”,
  in C. Manski and D. McFadden (eds.), Structural Analysis of Discrefe Dam wnh Econometric
  Applications.   MIT Press, Cambridge.
Heckman, J. J. (1981b) “Heterogeneity and State Dependence”, in S. Rosen (ed.), Conference on Labor
  Markets, University of Chicago Press, Chicago.
Heckman, J. J. and G. Boqas (1980) “Does Unemployment Cause Future Unemployment? Defim-
  tions, Questions and Answers from a Continuous Time Model of Heterogeneity and State
  Dependence”, Econometrica, 47, 247-283.
Heckman. J. J. and T. E. MaCurdy (1980) “A Life-Cycle Model of Female Labor Supply”, Reoiew of
  of Economic     Smdies. 47, 47-74.
Heckman, J. J. and R. J. Willis (1977) “A Beta-Logistic Model for the Analysis of Sequential Labor
  Force Participation by Married Women”, Journal of Political Economv, 85, 27-58.
Hosoya, Y. (1977) “On the Granger Condition for Non-Causality”, Econometrica, 45, 1735-1736.
Hsiao, C. (1975) “Some Estimation Methods for a Random Coefficient Model”, Econometrica. 43,
1316                                                                                     G. Chamberlain

  305-325.
Huber, P. J. (1967) “The Behavior of Maximum Likelihood Estimates Under            Nonstandard        Condi-
  tions”, Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics   and Probability,     Vol.
  1, University of California Press, Berkeley and Los Angeles.
Jennrich, R. 1. (1969) “Asymptotic Properties of Non-Linear Least Squares Estimators”,     The Annals     of
  Mathematical       Statistics,   40, 633-643.
Jiireskog, K. G. (1978) “An Econometric Model for Multivariate Panel Data”, Annales         de I’INSEE,
  30/31,      355-366.
Joreskog, K. G. and A. S. Goldberger (1975) “Estimation of a Model with Multiple Indicators and
  Multiple Causes of a Single Latent Variable”, Journal of the American Statistical Association, 70,
  631-639.
Jbreskog, K. G. and D. S&born (1977) “Statistical Models and Methods for Analysis of Longitudinal
  Data”, in D. J. Aigner and A. S. Goldberger (eds.), Lutent Variables in Socio-economic Models,
  North Holland, Amsterdam.
Kalbfleisch, J. D. and D. A. Sprott (1970) “Application of Likelihood Methods to Models Involving
  Large Numbers of Parameters”, Journal of the Royal Statistical Society, Series B, 32, 175-208.
Kendall, M. G. and A. Stuart (1961) The Advanced Theory of Statistics, Vol. 2, Griffin, London.
Kiefer, J. and J. Wolfowitz (1956) “Consistency of the Maximum Likelihood Estimator in the
  Presence of Infinitely Many Incidental Parameters”, Annals of Mathematical Statistics, 27, 887-906.
Kiefer, N. and G. Neumann (1981) “Individual EfIects in a Nonlinear Model”, Econometrica, 49,
  965-980.
Lancaster, T. (1979) “Econometric Methods for the Duration of Unemployment”,          Econometrica,      47,
  939-956.
Lancaster, T. and S. Nickel1 (1980) “The Analysis of Re-Employment Probabilities for the Unem-
  ployed”, Journal of the Royal Statistical Society, Series A, 143, 141-165.
Lee, L. F. (1979) “Estimation of Error Components Model with ARMA (P, Q) Time Component-An
  Exact GLS Approach”, unpublished manuscript.
Lee, L. F. (1980) “Analysis of Econometric Models for Discrete Panel Data in the Multivariate Log
  Linear Probability Models”, unpublished manuscript.
Levhari, D. and T. N. Srinivasan (1969) “Optimal Savings Under Uncertainty”, Review of Economic
  Studies,      36, 153-163.
Lillard, L. and Y. Weiss (1979) “Components of Variation in Panel Earnings Data: American
  Scientists 1960-1970”, Econometrica, 47, 437-454.
Lillard, L. and R. J. Willis (1978) “Dynamic Aspects of Earnings Mobility”, Econometrica, 46,
  985-1012.
MaCurdy, T. E. (1979) “Multiple Time Series Models Applied to Panel Data: Specification of a
 Dynamic Model of Labor Supply”, unpublished manuscript.
MaCurdy, T. E. (1981) “An Empirical Model of Labor Supply in a Life-Cycle Setting”, Journal of
  Political     Economy,      89, 1059-1085.
MaCurdy, T. E. (1981a) “Asymptotic Properties of Quasi-Maximum Likelihood Estimators and Test
 Statistics”, National Bureau of Economic Research Technical Paper No. 14.
MaCurdy, T. E. (1982) “The Use of Time Series Processes to Model the Error Structure of Earnings in
 a Longitudinal Data Analysis”, Journal oj Econometrics, 18, 83-114.
Madalla, G. S. (1971) ‘IThe Use of Variance Components Models in Pooling Cross Section and Time
 Series Data”, Econometrica, 39, 341-358.
Madalla, G. S. and T. D. Mount (1973) “A Comparative Study of Alternative Estimators for
 Variance-Components Models Used in Econometric Applications”, Journal of the American Statisti-
  cal Association,       68, 324-328.
Malinvaud, E. (1970) Statistical Methods of Econometrics, North-Holland, Amsterdam.
Mazodier, P. and A. Trognon (1978) “Heteroskedasticity and Stratification in Error Components
 Models”, Annales de I’INSEE, 30/31,451-482.
McFadden, D. (1974) “Conditional Logit Analysis of Qualitative Choice Behavior”, in P. Zarembka,
 (ed.), Frontiers in Econometrics, New York: Academic Press.
Mellow, W. (1981) “Unionism and Wages: A Longitudinal Analysis”, Review of Economics and
  Statistics,    63, 43-52.
Mincer. I. (1963) “Market Prices, Opportunity Costs and Income Effects”, in C. F. Christ, et. al.,
Ch. ??: Panal       Data                                                                                                         1317

  Meusuremenr         rn Economics,        Stanford University Press, Stanford.
Mincer,     J. and S. Polachek           (1974) “Family Investments    in Human                  Capital:    Earnings   of Women”,
  Journal      of Political    Economy,       82, S76-S108.
Mundlak,        Y. (1961) “Empirical           Production      Function     Free of Management              Bias”, Journal   of Farm
  Economics,       43, 4456.
Mundlak, Y. (1963) “Estimation  of Production  and Behavioral Functions    From a Combination     of
  Time Series and Cross Section Data”, in C. F. Christ, et al., Measurement rn Economics, Stanford
  University Press, Stanford.
Mundlak, Y. (1978) “On the Pooling of Time Series and Cross Section Data”, Econometrica,        46,
  69-85.
Mundlak,        Y. (1978a)      “Models       with Variable       Coefficients:   Integration       and Extension”,      Annales     de
  I’INSEE,        30/31,      483-509.
Nerlove, M. (1967) “Experimental     Evidence on the Estimation of Dynamic Economic Relations from
  a Time Series of Cross-Sections”,    Economrc Studies Quarterly, 18, 42-74.
Nerlove, M. (1971) “Further Evidence on the Estimation of Dynamic Relations from a Time Series of
  Cross-Sections”, Econometrica,    39, 359-382.
Nerlove, M. (1971a) “A Note on Error-Components         Models”, Econometrrcu, 39, 383-396.
Nerlove, M. (1972) “Lags in Economic Behavior”, Econometrica, 40, 221-251.
Neyman, J. and E. L. Scott (1948) “Consistent    Estimates Based on Partially Consistent Observations”,
   Econometrica,        16, l-32.
Nickell,       S. (1979)      “Estimating       the Probability       of Leaving       Unemployment”,            Econometrica,     47,
   1249-1266.
Nickell, S. (1981) “Biases in Dynamic                   Models with Fixed Effects”, Econometrica, 49, 1417-1426.
Phelps, E. S. (1962) “The Accumulation                  of Risky Capital: A Sequential Utility Analysis”, Econometrica.
   30, 729-743.
Rao, C. R. (1973) Linear Staristical Inference and Its Applicatrons, Wiley, New York.
Rasch, G. (1960) Prohahilistic Models for Some Intelligence and Attainmenr       Tests, Denmarks    Paedago-
  giske Institute, Copenhagen.
Rasch, G. (1961) “On General Laws and the Meaning of Measurement            in Psychology”,    Proceedings of
  the Fourth Berkeley Symposium on Mathematical         Statistics and Prohahilriy,    Vol. 4. University of
  California Press, Berkeley and Los Angeles.
Rosenzweig,    M. R. and K. I. Wolpin (1980) “Life-Cycle          Labor Supply and Fertility”, Journal of
   Political    Economy,       88, 328-348.
Rothenberg,   T. J. (1973) Eficient              Esumation     wrth A Priori      Itformation,       Yale University     Press, New
  Haven.
Schultz, T. P. (1980) “Estimating               Labor    Supply
                                                     Functions for Married Women”, in J. P. Smith (ed.),
   Female Iahor        Supply:                       Princeton University Press, Princeton.
                                    Theory and Estimation,
Sims, C. A. (1972) “Money, Income, and Causality”,           The Americun Economic Review, 62, 540-552.
Singer, B. and S. Spilerman (1974) “Social Mobility Models for Heterogeneous           Populations”, in H. L.
   Costner (ed.), Sociological Methodology l973- 1974, Jossey-Bass,       Inc., San Francisco.
Singer, B. and S. Spilerman (1976) “Some Methodological            Issues in the Analysis of Longitudinal
   Surveys”, Annals of Economic and Socral Measurement, 5, 447-474.
Stafford,    F. P. and G. J. Duncan      (1980) “Do Union Members            Receive Compensating       Wage
   Differentials?“, American Economic Revrew, 70, 355-371.
Swamy, P. A. V. B. (1970) “Efficient         Inference    in a Random      Coefficient   Regression  Model”,
   Econometrica,        38, 311-323.
Swamy, P. A. V. B. (1974) “Linear Models with Random Coefficients”, in P. Zarembka (ed.), Frontiers
  in Econometrics, Academic Press, New York.
Taylor, W. E. (1980) “Small Sample Considerations          in Estimation from Panel Data”, Journal of
   Econometrics,    13, 203-223.
Trognon, A. (1978) “Miscellaneous      Asymptotic Properties of Ordinary Least Squares and Maximum
   Likelihood    Estimators   in Dvnamic  Error Comnonents      Models”. Anna/es de I’INSEE.      30/31.
                                                                                                     I~.
  631-657.
Tuma, N. B., M. T. Hannan, and L. P. Groeneveld (1979) “Dynamic            Analysis of Event Histories”,
  American       Journal      of Sociology,     84, 820-854.
Tuma.      N. B. and P. K. Robins             (1980) “A Dynamic        Model of Employment              Behavior:   An Application
1318                                                                               G. Chamberlain

 to the Seattle and Denver Income Maintenance Experiments”, Econometrica, 48, 1031-1052.
Wallace, T. D. and A. Hussain (1969) “The Use of Error Components Models in Combining Time
 Series with Cross Section Data”, Econometrica, 31, 55-12.
White, H. (1980) “Using Least Squares to Approximate Unknown Regression Functions”, Interna-
 tional Economic Review, 21, 149-170.
White, H. (1980a) “Nonlinear Regression on Cross Section Data”, Econometrica, 48, 721-746.
White, H. (1980b) “A Heteroskedasticity-Consistent   Covariance Matrix Estimator and a Direct Test
 for Heteroskedasticity”, Econometrica, 48, 817-838.
White, H. (1982) “Maximum Likelihood Estimation of Misspecified Models”, Econometrica, 50, l-25.
White, H. (1982a) “Instrumental Variable Regression with Independent Observations”, Econometrica,
  50, 483-499.
Willis, R. J. (1973) “A New Approach to the Economic Theory of Fertility Behavior”, Journal of
  Political Economy, 81, S14-S64.
Zellner, A. and H. Theil (1962) “Three-Stage Least Squares: Simultaneous Estimation of Simulta-
  neous Equations”, Econometrica, 30, 54-78.
Zellner, A., J. Kmenta and J. D&e (1966) “Specification and Estimation of Cobb-Douglas Produc-
  tion Function Models”, Econometrica, 34, 784-795.



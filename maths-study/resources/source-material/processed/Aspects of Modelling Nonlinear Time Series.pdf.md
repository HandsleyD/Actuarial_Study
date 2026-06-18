---
normalized_id: shared-pdf-reference-aspects-of-modelling-nonlinear-time-series
exam_code: SHARED
material_scope: aspects of modelling nonlinear time series.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Aspects of Modelling Nonlinear Time Series.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-aspects-of-modelling-nonlinear-time-series

Chapter 48


ASPECTS OF MODELLING                                            NONLINEAR             TIME SERIES*

TIM0      TERASVIRTA

Copenhagen Business School and Bank of Norway


DAG TJ@STHEIM

University ofBergen


CLIVE W.J. GRANGER

University of California




Contents

Abstract                                                                                             2919
1. Introduction                                                                                      2919
2. Types of nonlinear                 models                                                         2921
       2.1.   Models from economic            theory                                                 2921
       2.2.   Models from time series theory                                                         2922
       2.3.   Flexible statistical     parametric      models                                        2923
       2.4.   State-dependent,       time-varying      parameter    and long-memory   models         2924
       2.5.   Nonparametric        models                                                            2925
3.     Testing     linearity                                                                         2926
       3.1.   Tests against      a specific alternative                                               2921
       3.2.   Tests without      a specific alternative                                               2930
       3.3.   Constancy    of conditional       variance                                              2933
4.     Specification of nonlinear models                                                             2934
5.     Estimation in nonlinear time series                                                           2937
       5.1.   Estimation      of parameters     in parametric      models                            2937


   *The work for this paper originated when TT and DT were visiting the University of California, San
Diego. They wish to thank the economics and mathematics     departments, respectively, of UCSD for their
hospitality and John Rice and Murray Rosenblatt, in particular. The research of TT was also supported
by the University of Giiteborg, Bank of Norway and a grant from the YrjG Jahnsson Foundation.        DT
acknowledges    financial support from the Norwegian Council for Research and CWJG from NSF, Grant
SES 9023037.

Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elsevier Science B. V. All rights reserved
2918                                                                                       T.Teriisvirta   et al.


       5.2.   Estimation   of nonparametric      functions                                                  2938
       5.3.   Estimation   of restricted   nonparametric     and semiparametric   models                    2942
6. Evaluation  of estimated                models                                                          2945
7. Example                                                                                                 2946
8. Conclusions                                                                                             2952
References                                                                                                 2953
Ch. 48: Aspects   ofModellingNonlinear Time Series                                      2919




Abstract

This paper surveys some of the recent developments           in nonlinear   analysis of
economic time series. The emphasis lies on stochastic models. Various classes of
nonlinear   models appearing     in the economics    and time series literature      are
presented and discussed. Linearity testing and estimation of nonlinear models, both
parametric  and nonparametric,     are considered as well as post-estimation      model
evaluation.  Data-based  nonlinear   model building is illustrated with an empirical
example.



1.   Introduction

 It is common practice for economic theories to postulate nonlinear           relationships
 between economic variables, production        functions being an example. If a theory
 suggests a specific functional form, econometricians      can propose estimation techni-
 ques for the parameters, and asymptotic results about normality and consistency,
 under given conditions, are known for these estimates, see, e.g. Judge et al. (1983,
 White (1984) and Gallant (1987, Chapter 7). However, in many cases the theory
 does not provide a single specification,    or specifications   are incomplete and may
 not capture the major features of the actual data, such as trends, seasonality or the
 dynamics. When this occurs, econometricians       can try to propose more general speci-
 fications and tests of them. There are clearly an immense number of possible
 parametric nonlinear     models and there are also many nonparametric           techniques
 for approximating    them. Given the limited amount of data that is usually available
 in economics it would not be appropriate       to consider many alternative models or
 to use many techniques. Because of the wide possibilities, the methods and models
 available for analysing nonlinearities    are usually very flexible so that they can
 provide good approximations       to many different generating mechanisms.         A conse-
quence is that, with fairly small samples, the methods are inclined to over-fit, so
that if the true mechanism is linear, say, with residual variance 02, the fitted model
may appear to find nonlinearity       and an estimated residual variance less than u2.
The estimated model will then be inclined to forecast badly in the post-sample
period. It is therefore necessary to have a specific research strategy for modelling
nonlinear relationships     between time series. In this chapter the modelling process
concentrates    on a particular situation, where there is a single dependent variable
y, to be explained and X, is a vector of exogenous variables. Let I, be the informa-
tion set


                                                                                       (1.1)
2920                                                                          T. TerSisvirtaet al.


and denote all of the variables (and lags) used in I, by w,. The modelling             process
will then attempt to find a satisfactory approximation  for f(wJ such that

                                                                                            (1.2)

If the error is

       E, =   Y, -   f(wJ
then in some cases a more parsimonious           representation    will specifically    include
lagged E’S in f(s).
The strategy proposed is as follows.
    (i) Test y, for linearity, using the information     I,. As there are many possible forms
        of nonlinearity     it is likely that no one test will be powerful against them all,
        so several tests may be needed.
   (ii) If linearity is rejected, consider a small number of alternative           parametric
        models and/or nonparametric           estimates. Linearity tests may give guidance
        as to which kind of nonlinear models to consider.
  (iii) These models should be estimated in-sample and compared out-of-sample.
        The properties of the estimated models should be checked. If a single model
        is required, the one that is best out-of-sample              may be selected and re-
        estimated over all available data.

    The strategy is by no means guaranteed         to be successful. For example, if the
nonlinearity   is associated with a particular feature of the data, but if this feature
does not occur in the post-sample evaluation period, then the nonlinear model may
not perform any better than a linear model.
    Section 2 of the chapter briefly considers some parametric            models, Section 3
discusses tests of linearity, Section 4 reviews specification         of nonlinear     models,
Section 5 considers estimation       and Section 6 evaluation         of estimated models.
Section 7 contains an example and Section 8 concludes. This survey largely deals
with linearity in the conditional     mean, which occurs if f(wJ in (1.2) can be well
approximated     by some linear combination       cp’w, of the components       of w,. It will
generally be assumed that w, contains lagged values of y, plus, possibly, present and
lagged values of X, including     1. This definition avoids the difficulty of deciding
whether or not processes having forms of heteroskedasticity        that involve explanatory
or lagged variables, such as ARCH, are nonlinear.           It is clear that some tests of
linearity will be confused by these types of heteroskedasticity.          Recent surveys of
some of the topics considered here include Tong (1990) for univariate time series,
Delgado and Robinson (1992) Hardle (1990) and Tjsstheim                (1994) for semi- and
nonparametric      techniques, Brock and Potter (1993) for linearity             testing and
Granger and Terasvirta (1993).
   There has recently been a lot of interest, particularly       by economic theorists, in
Ch. 48: Aspects of Modelliny   Nonlinear   Time Series                                  2921

chaotic processes, which are deterministic         series which have some of the linear
properties of familiar stochastic processes. A well known example is the “tent-map”
y, = 4y,_ 1 (1 - y,- i), which, with a suitable starting value in (0, l), generates a series
with all autocorrelations     equal to zero and thus a flat spectrum, and so may be
called a “white chaos”, as a stochastic white noise also has these properties.
Economic theories can be constructed         which produce such processes as discussed
in Chen and Day (1992). Econometricians          are unlikely to expect such models to be
relevant in economics having a strong affiliation with stochastic models and, so far,
there is no evidence of actual economic data having been generated by a deterministic
mechanism. A difficulty is that there is no statistical test which has chaos as a null
hypothesis, so that non-rejection      of the null could be claimed to be evidence in
favour of chaos. For a discussion and illustrations,        see Liu et al. (1992). However,
a much-used linearity test has been proposed by Brock et al. (1987), based on chaos
theory, whose properties are discussed in Section 3.2.
   The hope in using nonlinear models is that better explanations           can be provided
of economic events and consequently         better forecasts. If the economy were found
to be chaotic, and if the generating      mechanism      could be discovered using some
learning model, say, then forecasts would be effectively exact, without any error.



2.     Types of nonlinear models

2.1.    Models from economic theory


Theory can both be used to suggest possibly sensible nonlinear models or to take
into account some optimizing   behaviour,  with arbitrary assumed cost or utility
functions, to produce a model. An example is a relationship  of the form

       y, = min (#Wt, t9’wJ + s,,                                                      (2.1)

so that y, is the smaller of a pair of alternative linear combinations    of the vector
of variables used to model y,. This model arises from a disequilibrium      analysis of
some simple markets, with the linear combinations     representing supply and demand
curves; for more discussion see Quandt (1982) and Maddala (1986).
   If we replace the “min condition” by another variable z,_~ which may also be one
of the elements of W, but not 1, we may have

       y, = qo’w,+ B’w,F(z,_J + “*,                                                    (2.2)
where F(z,_,) = 0, z,_~ < c and F(z,_,) = 1, z,_~ > c. This is a switching regression
model with switching variable z~_~ where d is the delay parameter;        see Quandt
(1982). In univariate  time series analysis (2.2) is called a two-regime     threshold
autoregressive  model; see, e.g. Tong (1990). Model (2.2) may be generalized         by
2922                                                                       T. Teriisuirta et al.


assuming a continuum of regimes instead of only two. This can be done for instance
by defining

       F(z,_,)=   (1 +expC-y(z,-,-Cc)l~-‘~       Y>O                                     (2.3)

in (2.2). Maddala (1977, p. 396) [see also Bacon and Watts (1971)] has already pro-
posed such a generalization which is here called a logistic smooth transition regres-
sion (LSTR) model. F may also have the form of a probability density rather than a
cumulative distribution function. In the univariate case this would correspond to
the exponential smooth transition autoregressive (ESTAR) model (Terasvirta, 1994)
or its well-known special case, the exponential autoregressive model (Haggan and
Ozaki, 1981). The transition variable may represent changing political or policy
regimes, high versus low inflation, upswings versus downswings of the business cycle
and so forth. These switching models or their smooth transition counterparts occur
frequently in theory which, for example, suggests changes in relationships when
there is idle production capacity versus otherwise or when unemployment is low
versus high. Aggregation considerations suggest that a smooth transition regression
model may often be more sensible than the abrupt change in (2.2).
   Some theories lead to models that have also been suggested by time series
statisticians. An example is the bivariate nonlinear autoregressive model described
as a “prey-predator” model by Desai (1984) taking the form

       Aylt = - a + b exp(y,,),
       Ayzt = c + b ew(y,,)~

where y, is the logarithm of the share of wages in national income and y, is the
logarithm of the employment rate. Other examples can be found (Chen and Day,
1992). The fact that some models do arise from theory justifies their consideration
but it does not imply that they are necessarily superior to other models that
currently do not arise from economic theory.


2.2.    Models from time series theory

The linear autoregressive, moving average and transfer function models have been
popular in the time series literature following the work by Box and Jenkins (1970)
and there are a variety of natural generalizations to nonlinear forms. If the
information set being considered is

       I,= {y,_j, j= l,...,q,X,_i,i=O,...,q},     4< co,

denote by E, the residual from yt explained by I, and let ekt be the residual from xkt
explained by I, (excluding xkt itself). The components of the models considered in
this section are nonlinear functions of components such as g(y, _j), h(x,,, _ i), G(E,_ j),
Ch. 48: Aspects ofModelling   Nonlinear   Time Series                                2923


H(e,,,_i) plus cross-products such as y,_j~k,t_i,yt_jst-i,~,,t_jeb,,-i   or E,_jek,t_i. A
model would string together several such components, each with a parameter. For
a given specification, the model is linear in the parameters so they can be easily
estimated by OLS. The big questions are about the specification of the model; what
components, functions and lags to use. There are so many possible components and
combinations that the “curse of dimensionality” soon becomes apparent, so that
choices of specification have to be made. Several classes of models have been
considered. They include
      (9 nonlinear autoregressive, involving only functions of the dependent variable.
          Typically only simple mathematical functions have been considered (such as
          sine or cosine, sign, modulus, integer powers, logarithm of modulus or ratios
          of low order polynomials);
     (ii) nonlinear transfer function models, using functions of the lagged dependent
          variable and current and lagged explanatory variables, usually separately;
    (iii) bilinear models, y, = Cj,Jjkyr_ j~,_k + similar terms involving products of a
          component of X, and a lagged residual of some kind. This can be thought
          of as one equation of a multivariate bilinear system, as considered by
          Stensholt and Tjostheim (1987);
    (iv) nonlinear moving averages, being sums of functions of lagged residuals E,,e,;
     (v) doubly stochastic models which contain the cross-products between lagged
          y, and current and lagged components of xkt or a random parameter process
          and are discussed in Tjostheim (1986).
    Most of the models are augmented by a linear autoregressive term. There has
 been little consideration of mixtures of these models. Because of difficulty of analysis,
 lags are often taken to be small. Specifying the lag structure in nonlinear models is
discussed in Section 4.
    A number of results are available for some of these models, such as stability for
simple nonlinear autoregressive models (Lasota and Mackey, 1989), stationarity and
invertibility of bilinear models or the autocorrelation properties of certain bilinear
 systems, but are often too complicated to be used in practice. To study stability or
 invertibility of a specific model it is recommended that a long simulation be formed
and the properties of the resulting series be studied. There is not a lot of experience
 with these models in a multivariate setting and little success in their use has been
reported. At present they cannot be recommended for use in preference to the
smooth transition regression model of the previous section or the more structured
models of the next section. A simple nonlinear autoregressive or bilinear model with
just a few terms may be worth considering from this group.


2.3.   Flexible statistical    parametric      models

A number of important modelling procedures concentrate on models of the form

                                                                                     (2.4)
2924                                                                                T. Teriisuirta et al.


where w, is a vector of past y, values and past and present values of a vector of
explanatory       variables x, plus a constant. The first component          of the model is linear
and the cpj(x) are a set of specific functions in x, examples being:
      (i) power series, cpj(x) = xj (x is generally not a lag of y);
    (ii) trigonometric,       q(x) = sinx or cosx, (2.4) augmented           by a quadratic      term
          w,’ Aw, gives the flexible function forms discussed by Gallant (1981);
   (iii) cpj(x) = q(x) for all j, where q(x) is a “squashing                function”     such as a
          probability density function or the logistic function q(x) = [ 1 + exp( - x)] - i.
          This is a neural network model, which has been used successfully in various
          fields, especially as a learning model, see, e.g. White (1989) or Kuan and White
          (1994);
   (iv) if cpj(x) is estimated nonparametrically,            by a “super-smoother”,          say, the
          method is that of “projection-pursuit”,       as briefly described in the next section.
   The first three models are dense, in the sense that theorems exist suggesting that
any well-behaved function can be approximated                arbitrarily well by a high enough
choice of p, the number of terms in the sum, for example Stinchcombe                      and White
(1989). In practice, the small sample sizes available in economics limit p to a small
number, say one or two, to keep the number of parameters                     to be estimated at a
reasonable       level. In theory p should be chosen using some stopping criterion or
goodness-of-fit       measure. In practice, a small, arbitrary value is usually chosen, or
some simple experimentation           is undertaken. These models are sufficiently structured
to provide interesting          and probably useful classes of nonlinear           relationships    in
practice. They are natural             alternatives  to nonparametric        and semiparametric
models. A nonparametric            model, as discussed in Section 2.5, produces an estimate
of a function at every point in the space of explanatory                variables by using some
smoother, but not a specific parametric function. The distinction between parametric
and nonparametric          estimators is not sharp, as methods using splines or neural nets
with an undetermined           cut-off value indicate. This is the case, in particular, for the
res’tricted nonparametric         models in Section 6.



2.4.     State-dependent,          time-varying parameter   and long-memory    models

Priestley     (1988) has discussed        a very general class of models for a system taking the
form




(moving average terms can also be included) where Y, is a k x 1 stochastic vector
and x, is a “state-variable” consisting of x, = (Y,, Y,_ i, . . . , Y, _k + J and which is
updated by a Markov system

       X 1+1=h(x,)+F(x,)xt+v,+1.
Ch. 48: Asprcts oJ’Modelling Nonlinear           Time Series                                   2925


   Here the cp’s and the components     of the matrix Fare general functions, which in
practice will be approximated      by linear or low-order polynomials.        Many of the
models discussed in Section 2.2 can be embedded in this form. It is clearly related
to the extended Kalman filter [see Anderson and Moore (1979)] and to time-varying
parametric ARMA models, where the parameters evolve according to some simple
AR model; see Granger and Newbold (1986, Chapter 10). For practical use various
approximations     can be applied, but so far there is little actual use of these models
with multivariate    economic series.
   For most of the models considered in Section 2.2, the series are assumed to be
stationary, but this is not always a reasonable assumption in economics. In a linear
context many actual series are I(l), in that they need to be differenced in order to
become stationary,     and some pairs of variables are cointegrated,       in that they are
both I(1) but there exists a linear combination           that is stationary.    A start to
generalizing   these concepts to nonlinear       cases has been made by Granger and
Hallman (1991a,b). I( 1) is replaced by a long-memory         concept and cointegration
by a possibly nonlinear attractor, so that yt, .x, are each long-memory         but there is
a function g(x) such that y, - g(x,) is stationary. A nonparametric      estimator for gp)
is proposed and an example provided.



2.5.   Nonparametric      models

Nonparametric    modelling of time series does not require an explicit model but for
reference purposes it is assumed that there is the following model


                                 y,=f(Y*-1,x,-,)+g(y,-,,x,-,)&,                                (2.5)

where {y,, x,> are observed           with (x,) being exogenous, and where y, _ r = (y, _ i,, . . . ,
Yt_i,)andx,-,=(x,-j,,...,x,-j,)            are vectors of lagged variables, and {.st}is a sequence
of martingale differences with respect to the information set I, = {y, _ i, i > 0; x, _ i, i > O}.
The joint process {y,,x,} is assumed to be stationary                    and strongly mixing [cf.
Robinson (1983)]. The model formulation                   can be generalized to several variables
and the instantaneous           transformation      of exogenous variables. There has recently
been a surge of interest in nonparametric              modelling; for references see, for instance,
Ullah (1989), Barnett et al. (1991) and Hardle (1990). The motivation is to approach
the data with as much flexibility as possible, not being restricted by the straitjacket
of a particular class of parametric models. However, more observations                    are needed
to obtain estimates of comparable             variability. In econometric    applications     the two
primary quantities of interest are the conditional               mean


       WJ?4=M(y,         ,..., yp;xl     )...)      XJ
               =E(Y~lY~-i,=Y~,~~~~Yf-i,=Yp;Xt_j,=X~,...,Xf_jq=X4)                              (2.6)
                                                                               T. Teriisvirta   et al.


and the conditional      variance



                                                                                                (2.7)

   The conditional        mean gives the optimal least squares predictor of y, given lagged
values y, _ i, ,..., y,_ip;Xt-j ,,...., Xt-jq. Derivatives of M(x;y) can also have economic
interpretations       (Ullah, 1989) and can be estimated nonparametrically.         The condi-
tional variance can be used to study volatility. For (2.5) M(y,x) =f(y,x)                    and
V(y, x) = a2g2(y, x), where 0’ = E($). As pointed out in the introduction,           this survey
mainly concentrates          on M(y; x) while it is assumed that g(y; x) = 1.
   A problem of nonparametric             modelling in several dimensions      is the curse of
dimensionality.        As the number of lags and regressors increases, the number of
observations        in a unit volume element of regressor space can become very small,
and it is difficult to obtain meaningful nonparametric             estimates of (2.6) and (2.7).
Special methods have been designed to overcome this obstacle, and they will be
considered in Sections 4 and 5.3. Applying these methods often results in a model
which is an end product in that no further parametric modelling is necessary.
   Another remedy to dimension              difficulties is to apply semiparametric      models.
These models usually assume linear and parametric dependence in some variables,
and nonparametric          functional dependence in the rest. The estimation of such models
as well as restricted nonparametric          ones will*be considered in Section 5.3.



3.   Testing linearity

When parametric nonlinear models are used for modelling economic relationships,
model specification is a crucial issue. Economic theory is often too vague to allow
complete specification of even a linear, let alone a nonlinear model. Usually at least
the specification of the lag structure has to be carried out using the available data.
As discussed in the introduction,     the type of nonlinearity best suited for describing
the data may not be clear at the outset either. The first step of a specification strategy
for any type of nonlinear     model should therefore consist of testing linearity. As
mentioned above, it may not be difficult at all to fit a nonlinear model to data from
a linear process, interpret the results and draw possibly erroneous conclusions. If the
time series are short that may sometimes be successfully done even in situations in
which the nonlinear model is not identified under the linearity hypothesis. There is
more statistical theory available for linear than nonlinear models and the parameter
estimation    in the former models is generally simpler than in the latter. Finally,
multi-step forecasting with nonlinear models is more complicated than with linear
ones. Therefore the need for a nonlinear       model should be considered before any
attempt at nonlinear modelling.
Ch. 48: Aspects qf Modelliny   Nonlinear   Time Series                                              2921



3.1.    Tests against a specijic alternative

Since the estimation     of nonlinear  models is generally more difficult than that of
linear models, it is natural to look for linearity tests which do not require estimation
of any nonlinear alternative. In cases where the model is not identified under the null
hypothesis of linearity, tests based on the estimation          of the nonlinear   alternative
would normally not even be available. The score or Lagrange multiplier principle
thus appears useful for the construction     of linearity tests. In fact, many well-known
tests in the literature are Lagrange multiplier (LM) or LM type tests. Moreover,
some well-known tests, such as Tsay’s (1986), which have been introduced as general
linearity tests without a specific nonlinear      alternative in mind, can be interpreted
as LM tests against a particular nonlinear         model. Other tests, not built upon the
LM principle, do exist and we shall mention some of them. Recent accounts of
linearity testing in nonlinear time series analysis include Brock and Potter (1993),
De Gooijer and Kumar (1992), Granger and Terasvirta (1993, Chapter 6) and Tong
(1990, Chapter 5). For small-sample comparisons           of some of the tests, see Chan and
Tong (1986), Lee et al. (1993), Luukkonen           et al. (1988a), Petruccelh (1990) and
Terlsvirta   et al. (1993).
    Consider the following nonlinear model

       Y, =   V’W,+S(e,w,,v,)+ u,,                                                                 (3.1)

wherew,=(l,y,_,     ,..., yt-p,xtl ,..., x,J, v, = (n, - 1, . . . . u, -J’, u, = d ICI,vp,0, w,, v,)E,and
E,is a martingale difference process: E(E~1I,) = 0, COV(E,1I,) = af, where I, is as in (1.1).
It follows that E(u,)I,) = 0 and cov(u,JI,) = aig’( e, cp, 0, w,, v,). Assume that f is at
least twice continuously     differentiable with respect to the parameters 8 = (0,). . . , 0,)‘.
Let f(0, w,, VJ = 0, so that the linearity hypothesis becomes He: 8 = 0.
   Here we shall concentrate        on the case g = 1 so that u, 3 E,. To test the linearity
hypothesis write the conditional         (pseudo) logarithmic likelihood function as




                     T
              =c--1oga;         - $&.
                     2


The relevant      block of the score vector scaled by l/JT            becomes
2928                                                                           T. Trriisvirta   et al.


This is the block that is nonzero under the null hypothesis. The information  matrix
is block diagonal such that the diagonal element conforming to c,” builds a separate
block. Thus the inverse of the block related to 0 and evaluated at H, becomes




where h”,is At evaluated at H,; see, e.g. Granger and Terasvirta (1993, Chapter                   6).
Settingii=(ii,,...,  fir)’ the test statistic, in obvious notation, has the form

       LM = d-2rl’H(H’MwH)-1H’ti,                                                               (3.2)

where Mw=Z-         W(wIW’)-lw),    g2=(1/T)x    iI: and the vector P consists of resi-
duals from (3.1) estimated consistently under H, and g = 1. Under a set of assump-
tions which are moment conditions for (2.2) [see White’(1984, Theorem 4.25)], (3.2)
has an asymptotic x2(m) distribution     when H, holds. A practical way of carrying
out the test is by ordinary least squares as follows.
     (i) Regress y, on w,, compute the residuals IY& and the sum of squared residuals
         SSR,.
    (ii) Regress i& on w, and &, compute the sum of squared residuals SSR,
   (iii) Compute

                                (SSR, - SSRJm
           F(m,T-n-m)=
                               SSR,/(T-     m - n)

          with n = k + p + 1, which has an approximate         F distribution      under f?= 0.
The use of an F test instead of the x2 test given by the asymptotic                     theory is
recommended         in small samples because of its good size and power properties;
see Harvey (1990, pp. 174- 175).
   As an example, assume w, = (1, I?;)’ with Wt = (y,_        r,  . . , y,_J’ and f = vi@@, =
                                                                   .


(v, 0 tiJ’ vet(O) so that (3.1) is a univariate        bilinear model. Then /I, = (v, @ W,),
h; = ( ijt 0 tit) and (3.2) is a linearity test against bilinearity       as discussed in Weiss
(1986) and Saikkonen and Luukkonen             (1988).
   In a few cases f in (3.1) factors as follows:

       fvt 4 = (e;w,m,, e,,4                                                                    (3.3)

and fr(0, f?,, w,) = 0. Assume that 0, is a scalar whereas 0, may be a vector. This is
the case for many nonlinear models such as the smooth transition regression models
discussed in Section 2.1. Vector v, is excluded for simplicity. The linearity hypothesis
can be expressed as He,: 0, = 0. However, H,,: 8, = 0 is also a valid linearity
hypothesis. This is an indication    of the fact that (3.1) with (3.3) is only identified
under the alternative      o2 # 0 but not under e2 = 0. If we choose H,, as our
Ch. 48: Aspects of Model/kg Nonlinear Time Series                                                    2929


starting-point,             we may use the Taylor                     expansion

                                          + R2(~2,@33’Wt)~V2*
     fl(e,,e3,W,)=f1(0,e33,W,)+~(0,e3,w,)~2                                                          (3.4)

Assume furthermore                            that b, has the form

      4 = P(Qww,)                                                                                    (3.5)

where j?(e,) and k(w,) are I x 1 vectors. Next replace fI in (3.3) by the first-order
Taylor approximation    at 0, = 0

      me,,w,)= iw3)w9e2.
Then (3.3) becomes




where +r = $,(e,, f3,, 0,) and & = 021c/2(f11,0,). Vector g(w,) contains those elements
of k(w,)w: that are of higher order than one. From this it follows that the
approximation   of (3.1) has the form

      Yr = +;         wt+ VMW)+ UI”.                                                                 (3.6)

The test can be carried out as before. After estimating (3.1) under H,, u”,is regressed
on W, and g(w,) and under He,: & = 0 the test statistic has an asymptotic           x2(s)
distribution  if e2 is an s x 1 vector.
   From (3.6) it is seen that the original null hypothesis H,, has been transformed
into Hb,:e2 = 0.Approximating        fI as in (3.4) and reparametrizing the model may
be seen as a way of removing the identification       problem. However, it may also be
seen as a solution in the spirit of Davies (1977, 1987). Let ti* be the residual vector
from the regression (3.6). Then

      Z*‘rl* = inf qeyiqe),
                      61,83
where rl(0) = y, - VW, - 8211/2(e,,t9,)‘g(w,) are the OLS residuals                from regressing     y,
on W, and $,(f3,, Q’g(w,) while keeping 8, and 0, fixed.
  The test statistic is


      F   =   sup     F(e         e       )   =   p’k - inf~ww)i/~
                             2’       3
              01.83                               infu(e),if(e)/(T-      n - s)’
2930                                                                                   T. Teriimirta   et al.


The price of the neat asymptotic null distribution            is that not all the information           in
the original model has been used. The original null hypothesis involved only a
single parameter.
    As an example, assume w, = tit = (y,_ 1,. . . , yt-J,         let /I($) = 1 and k(w,) = y:- 1.
This gives & = 8,8, and g( wJ = ( y:_ i , y:_ i Y,_ 2,          , Y,“_i y, _ J. The resulting test is
the linearity      test against the univariate         exponential      autoregressive         model in
 Saikkonen and Luukkonen           (1988). In that model, fi = 1 - exp[ - 02(yr_ 1 - 83)2]
with 8, = 0,8, > 0. Take another example where k(w,) = IV,, &g(w,) = Cf= ,CyEi
 qijy,_iy,_jand      Hb,:cpij=O,i=       l,..., p; j=i ,..., p. The test is the first of the three
 linearity tests against smooth transition autoregression            in Luukkonen          et al. (1988b)
when the delay parameter d is unknown but it is assumed that 1 d d d p. The number
of degrees of freedom in the asymptotic null distribution              equals p(p + 1)/2. If w, also
contains other variables than lags of yt, the test is a linearity test against smooth
transition     regression; see Granger and Terasvirta (1993, Chapter 6). If the delay
parameteris      known, k(w,)=(l,y,_,)‘,so        that g(w,)=(y,_iy,_,      ,..., y,“_, ,..., ~,_~y,-~)
and the F test has p and T - n - p degrees of freedom.
    In some cases the first-order Taylor series approximation                    is inadequate.       For
instance, let 0, = (0,,, 0,. . . , 0)’ in (3.3) so that the only nonlinearity         is described by
fi multiplied by a constant. Assume furthermore that k(w,) = W, so that 0;w, = B,,
and B(%)‘&%) = B(&)‘wl. Then the LM type test has no power against the
alternative because the auxiliary regression (3.6) is of order one, i.e. +2 = 0. In such
a situation, a third-order Taylor series approximation             of fi is needed for construct-
ing a proper test; see Luukkonen           et al. (1988b) for discussion.


3.2.    Tests without      a specific   alternative

The above linearity tests are tests against a well-specified nonlinear   alternative.
There exist other tests that are intended    as general tests without a specific
alternative. We shall consider some of them. The first one is the Regression Error
Specification Test (RESET; Ramsey, 1969). Suppose we have a linear model

       Y, = ‘p’w, + $7                                                                                 (3.7)

where w, is as in (3.1) and whose parameters we estimate by OLS. Let Ul,,t = 1,. . , T,
be the estimated residuals and 9, = y, - ~7,the fitted values. Construct an auxiliary
regression


       Et = lpw, +    i    sjz + u:.                                                                   (3.8)
                     j=2



The    RESET is the F-test of the hypothesis            H,: Sj = 0, j = 2,. . ., h in (3.8). If
w, =(l,y,_  r,. . . , y,_J’ and h = 2, (3.8) yields the univariate linearity test of Keenan
Ch. 48: Aspects     ofModellingNonlinear Time Series                                                     293 1


(1985). In fact, RESET may also be interpreted as an LM test against a well-specified
alternative;  see for instance Terasvirta    (1990) or Granger and Terlsvirta    (1993,
Chapter 6).
   Tsay (1986) suggested augmenting      the univariate (3.7) by second-order terms so
that the auxiliary regression corresponding      to (3.8) becomes


      iit=   +‘Wt    +     f      i   (Pij.Y-iYr-j    +   ‘:’                                            (3.9)
                         i=lj=i




The linearity hypothesis to be tested is H,:cpij = 0, V’i,j. The generalization            to
multivariate    models is immediate.        This test also has as LM type interpreta-
tion showing that the test has power against a larger variety of nonlinear          models
than the RESET. This is seen by comparing (3.9) with (3.6), assuming $ig(w,) =
Cp= iC$‘, i’pijytp iy, _ j as discussed in the previous section. The advantage of RESET
lies in the small number of parameters in the null hypothesis. When w, = (1, y,_ i)
[or w, = (1, x,~)‘], the two tests are identical.
    A general linearity test can also be based on the neural network model (2.4), and
such a test is presented in Lee et al. (1993). In computing             the test statistics,
yj, j= l,..., p, in (2.4) are selected randomly from a distribution.      Terasvirta et al.
(1993) showed that this can be avoided by deriving the test by applying the LM
principle. The auxiliary regression for the test becomes


      ii,= +‘Wf+           i      t   ‘PijYt-iY,-j+             i    $J f    (PijkYt-iYt-jYt-fc+   ‘:   (3.10)
                         i=lj=i                             i=l     j=ik=j




and the linearity hypothesis H,:cp,, = 0, qijk = 0, Vi, j, k. The simulation  results in
Terasvirta et al. (1993) indicate that in small samples the test based on (3.10) often
has better power than the original neural network test.
   There has been no mention yet about tests against piecewise linear or switching
regression or its univariate counterpart,     threshold autoregression. The problem is
that f, in (3.3) is not a continuous    function of parameters if the switch-points    or
thresholds are unknown. This makes the likelihood function irregular and the score
principle inapplicable.   Ertel and Fowlkes (1976) suggested the use of cumulative
sums of recursive residuals for testing linearity.       First, order the variables    in
ascending (or descending) order according to the transition variable. Compute the
parameters recursively and consider the cumulative sum of the recursive residuals.
The test is analogous to the CUSUM test that Brown et al. (1975) suggested in which
time is the transition variable and no lags of y, are allowed in w,. However, Kramer
et al. (1988) showed that the presence of lags of yt in the model does not affect the
asymptotic null distribution    of the CUSUM statistic. Even before that, Petruccelli
and Davies (1986) proposed the same test for the univariate (threshold autoregressive)
case; see also Petruccelli (1990). The CUSUM test may also be based on residuals
2932                                                                                     T. Teriisuirta    et al.



from OLS estimation           using all the observations         instead of recursive residuals.
Ploberger and Kramer (1992) recently discussed this possibility.
   The CUSUM          principle is not the only one available from the literature                   of
structural change. Quandt (1960) suggested generalizing                  the F test (Chow, 1960)
for testing parameter        constancy in a linear model with known change-point                   by
applying F= ~up~~rF(t) where T = (t/t, <t < T- tl}. He noticed that the null
distribution     of F was nonstandard.          Andrews (1993) provided the asymptotic null
distribution    for F and tables for critical values; see also Hansen (1990). If the observ-
ations are ordered according to,a variable other than time, a linearity test against
switching regression is obtained. In the univariate case, Chan (1990) and Chan and
Tong (1990) applied Quandt’s idea to testing linearity against threshold autoregres-
sion (TAR) with a single threshold; see also Tong (1990, Chapter 5). Chan (1991)
provided tables of percentage points of the null distribution               of the test statistic. In
fact, this test can be regarded as one against a well-specified                      alternative:    a
two-regime switching regression or threshold autoregressive                  model with a known
transition    variable or delay parameter.           For further discussion, see Granger and
Terasvirta (1993, Chapter 6).
   Petruccelli (1990) compared the small-sample               performance     of the CUSUM, the
threshold autoregression          test of Chan and Tong and the LM type test against
logistic STAR of Luukkonen               et al. (1988b) when the true model was a single-
threshold TAR model. The results showed that the first two tests performed
reasonably well [for the CUSUM test a “reverse CUSUM” (Petruccelli, 1990) was
used]. However, they also demonstrated             that the LM type test had quite comparable
power against this TAR which is a special case of the logistic STAR model.
   As mentioned in the introduction,            Brock et al. (1987) proposed a test (BDS test)
of independent,       identically     distributed    observations     based on the correlation
integral, a concept that arises in chaos theory. Let Y, n be a part of a time series
 YT,T=(y, ,..., y,): Yt,n=(yc,yt_l ,..., Y~_,,+~). Compare a pair of such vectors Y,,,
and Y,,,. They are said to be no more than E apart if


       II   't,j   -   's,j   IId ‘>     j=O,l   ,...,Iz-   1.                                        (3.11)

The correlation               integral   is defined as


       C,(E) lim Te2(number                  of pairs (t, s) with 1 d t,s d T such that (3.11) holds).
                   T+CC


Brock et al. (1987) defined

       S(n,E)= e”(B)
                   - [~l(E)]“.                                                                            (3.12)

Under the hypothesis that {y,} is an i.i.d. process, (3.12) has an asymptotic normal
distribution with zero mean and variance, given in Brock et al. (1987). Note that
Ch. 48: Aspects oJ Modelling       Nonlineur       Time Serirs                           2933


(3.12) depends on n and e which the investigator      has to choose and that the size of
the test is very sensitive to these two parameters. A much more thorough discussion
of the BDS test and its properties is found in Brock and Potter (1993) or Scheinkman
(1990). It may be mentioned,       however, that a rather long time series is needed to
obtain reasonable power. Lee et al. (1993) contains some small-sample       evidence on
the behaviour of the BDS test but it is not very conclusive; see Terasvirta (1990).
   Linearity of a single series may also be tested in the frequency domain. Let {y,}
be stationary and have finite moments up to the sixth order. Then we can define
the bispectral density f(oi, oj) of y, based on third moments and


       b(q, Oj) = -2
                           If(wito’)12~
                   f(wilf(ojV(oi               +   Oj)




where f(oi) is the spectral density of y,. Two hypotheses            can be tested: (i) if
f(wi, oj) E 0 then y, is linear and Gaussian, (ii) if b(wi, wj) = b, > 0 then y, is linear
but not Gaussian, i.e. the parametrized       linear model for {y,} has non-Gaussian
errors. Subba Rao and Gabr (1980) proposed tests for testing these two hypotheqes.
Hinich (1982) derived somewhat different tests for the same purpose. For more
discussion, see, e.g. Priestley (1988) and Brockett et al. (1988). A disadvantage          of
these tests seems to be relatively low power in small samples. Besides, performing
the tests requires more computation      than carrying out most of their time domain
counterparts.
   It has been assumed, so far, that g = 1 in (3.1). If this assumption    is not satisfied,
the size of the test may be affected. At least the BDS test and the tests based on
bispectral density are known to be sensitive to departures from that assumption.            If
linearity of the conditional   mean is tested against a well-specified alternative using
LM type tests, some possibilities      of taking conditional     heteroskedasticity     into
account exist and will be briefly mentioned in the next section.


3.3.   Constancy     of conditional variance

The assumption       g = 1 is also a testable hypothesis. However, because conditional
heteroskedasticity      is discussed in Chapter 49 of this volume, testing g = 1 against
nonconstant      conditional    variance is not considered here. This concerns not only
testing linearity against ARCH but also testing it against random coefficient linear
regression; see, e.g. Nicholls and Pagan (1985) for further discussion on the latter
situation.
   If f = 0 and g = 1 are tested jointly, a typical LM or LM type test is a sum of two
separate LM (type) tests for f- 0 and g = 1, respectively. This is the case because
under this joint null hypothesis         the information  matrix is block diagonal;   see
Granger and Terasvirta (1993, Chapter 6). Higgins and Bera (1989) derived a joint
LM test against bilinearity and ARCH. On the other hand, testing f- 0 when g f 1
2934                                                                          T Tertisvirta   et al.


is a more complicated     affair than it is when g = 1. If g is parametrized,         the null
model has to be estimated under conditional       heteroskedasticity.     Besides, it may no
longer be possible to carry out the test making use of a simple auxiliary regression,
see Granger and Terasvirta (1993). If g is not parametrized           but g f 1 is suspected
to hold then the tests described in Section 3.1 as well as the RESET and the Tsay
test can be made robust against g f 1. Davidson            and MacKinnon          (1985) and
Wooldridge    (1990) described techniques      for doing this. The present simulation
evidence is not yet sufficient to fully evaluate their performance in small samples.



4.     Specification   of nonlinear models

 If linearity tests indicate the need for a nonlinear model and economic theory does
 not suggest a completely specified model, then the structure of the model has to be
 specified from the data. This problem also exists in nonparametric         modelling as a
 variable selection problem because the lags needed to describe the dynamics of the
 process are usually unknown; see Auestad and TjBstheim (1991) and Tj&heim                 and
 Auestad (1994a, b). To specify univariate time series models, Haggan et al. (1984)
 devised a specification technique based on recursive estimation of parameters of a
 linear autoregressive     model. The parameters of the model were assumed to change
 over time in a certain fashion. Choosing a model from a class of state-dependent
 models, see Priestley (1988), was carried out by examining the graphs of recursive
 estimates. Perhaps because the family of state-dependent       models is large and, thus,
 the po.&ibilities are many, the technique is not easy to apply.
     If the class of parametric models to choose from is more restricted, more concrete
 specification    methods may be developed. [For instance, Box and Jenkins (1970)
 restricted their attention to linear ARMA models.] Tsay (1989) presented a technique
 making use of linearity tests and visual inspection of some graphs to specify a model
from the class of threshold autoregressive models. It is easy to use and seems to work
well. Chen and Tsay (1993a) considered the specification         of functional-coefficient
autoregressive      models whereas Chen and Tsay (1993b) extended the discussion to
additive functional-coefficient     regression models. The key element in that procedure
is the use of arranged local regressions in which the observations             are ordered
according to a transition variable. Lewis and Stevens (1991a) applied multivariate
adaptive regression splines (MARS), see Friedman (1991), to specify adaptive spline
threshold autoregressive        models. Terasvirta (1994) discussed the specification        of
smooth transition autoregressive        models. This technique was generalized to smooth
transition regression models in Granger and Tergsvirta (1993, Chapter 7) and will
be considered next.
    Consider the smooth transition regression (STR) model with p + k + 1 independent
variables

       Y, =   4D’wt+ (e’w,)F(z,) + u,,                                                        (4.1)
Ch. 48: Aspects   ofModellingNonlinear Time Series                                               2935


where E{u,lI,}=O,        cov{~,(I,}=~~,     I,={Y,_~, j>O,x,_j,i,      i= l,..., k, j>O} as in
(1.1) 4p=((p0,‘p1 ,..., cp,)‘, 8=(8,,0,      ,..., 8,)‘,m=p+k+l           and wI=(l,yt-i      ,... ,
ytpp; x11,. . . >x,J’. The alternatives  for F are F(z,)   = (1 + exp [ - y(z, - c)] } - ‘, y > 0,
which gives the logistic STR model, and F(z,)           = 1 - exp [ - y(z, - c)‘], y > 0, corres-
ponding to the exponential           STR model. The transition        variable z, may be any
element of W, other than 1 or another variable not included in w,.
    The data-based specification proceeds in three stages. First, specify a linear model
to serve as a base for testing linearity. This is done by using a suitable model selection
criterion. Second, test linearity against STR using the linear model as the null model.
If linearity is rejected, determine the transition variable from the data, Third, choose
between LSTR and ESTR models. Testing linearity against STR is not difficult. A
test with power against both LSTR and ESTR if the transition variable is assumed
known is obtained by proceeding as in Section 3.1. This leads to auxiliary regression




where z,~ is the transition          variable and ti, is the OLS residual from the linear
regression y, = p’w, + u,. If z,~ is an element of wt, W, = (1, ~5:)’has to be replaced by
 wt in (4.2) except for the first right-hand-side            term. The linearity hypothesis         is
H,,:/?i = /& = /I3 = 0. Equation (4.2) is also used for selecting z,~.
    The test is carried out for all candidates for z,~, and the one yielding the smallest
p-value is selected if that value is sufficiently small. If it is not, the model is taken to
be linear. This procedure is motivated as follows. Suppose there is a true STR model
with a transition variable z,~ that generated the data. Then the LM type test against
that alternative        has optimal power properties.           If an inappropriate     transition
variable is selected for the test, the resulting test may still have power against the true
alternative but the power is less than if the correct transition variable is used. Thus,
the strongest rejection of the null hypothesis                suggests that the corresponding
transition      variable should be selected. For more discussion of this procedure see
Terbvirta        (1994) and Granger and Terasvirta (1993, Chapter 6 and 7). If linearity
is rejected and a transition variable selected, then the third step is to choose between
LSTR and ESTR models. This can be done by testing a set of nested null hypotheses
within (4.2) with an F-test: the hypotheses are H&:& = 0,Hg2:& = Ol& = 0 and
Hi,:& = Ol& = & = 0.If the p-value of the test of Hg2 is the smallest, choose the
ESTR model, otherwise choose the LSTR model.
    Specifying the lag structure of (4.1) could be done within (4.2) using an appropriate
model selection criterion but little is known about the success of such a procedure.
In the existing applications,          a general-to-specific    approach based on estimating
nonlinear STR (or STAR) models has mostly been used.
    The model specification           problem     also arises in nonparametric        time series
modelling. Taking model (2.5) as a starting-point,            there is the question of which lags
X f-i13.“?x~-tp;      Y,-j,,“‘t  Y~_~, should be included in the model. Furthermore,               .it
should be investigated          whether the functions f and g are linear or nonlinear            and
2936                                                                                   T. Teriisuirta et al.


whether they are additive or not. Moreover, if interaction  terms are included, how
should they be modelled and, more generally, can the nonparametric           analysis
suggest functional forms, such as the smooth transition or threshold function, or an
ARCH type function for conditional     variance?
   These are problems of exploratory    data analysis for nonlinear  time series, and
relatively little nonparametric  work has been done in the area. Various graphical
model indicators have been tried out in Tong (1990, Chapter 7) Haggan et al. (1984)
and Auestad and Tjostheim (1990) however. Perhaps the most natural quantities
to look at are the lagged conditional  mean and variance of increasing order, i.e.


       M,,,(Y)   = E(Y,lY,_, = y)             M,,,(x) = &lx,_, =x)
                                                                                                      (4.3)
        V,,,(Y) = var(ytly,_,= Y)             v,,,(x)= My, Ix,     x).
                                                                     -k   =




In univariate modelling these quantities have been extensively used, albeit informally,
see Tong (1990, Chapter 7). They can give a rough idea of the type of nonlinearity
involved, but they fail to reveal things like the lag structure of an additive model.
    A more precise and obvious alternative           is to look at the functions M(y;x) and
I/(y;x) defined in (2.6) and (2.7) but they cannot be graphically                  displayed for
p + q > 2, and the curse of dimensionality              quickly becomes a severe problem.
Auestad and Tjostheim              (1991) and Tjostheim     and Auestad (1994a) introduced
projections as a compromise             between M&x),     V&x) and the indicators (4.3). To
define projections consider the conditional          mean function M(y, _ i,, . . . , y,, . . . , y, _ iP;
X f_ j,, . . . , x,_ j,) with yfpik excluded.  The one-dimensional   projector of order (p, q)
projecting on lag i, of yt is defined by

       P~,k(Y)=E{M(YV,-i,~“‘,Yk,“‘,Y~-ip;Xf-j,~”’~Xf-jq)}’                                            (4.4)

The projector      PXk(x) is defined    in the same way. For an additive model with
NY,,      >YP; Xl,.   :. >x4) = X:1    1 ai+ Cq= 1fij(xj) it is easily seen that if all p + q
lags are included     in the projection operation, then

       ‘y,,(Y) = ‘k(Y) + p(k          Px,k(X) = bktX) + ek,

where ,u~ = E(y,) - E[a,(y,)] and 8, = E(x,) - E[fik(x,)]. Clearly the additive terms
rzk(y) and p,(x) cannot be recovered using My,k and Mx k of (4.3).
   Projectors can be defined similarly for the conditional              variance and, in principle,
they reveal the structure of models having an additive conditional               variance function.
Both types of projectors can be estimated by replacing theoretical expectations with
empirical averages and by introducing                 a weight function to screen off extreme data.
Properties and details are given in Auestad and Tjsstheim                    (1991) and Tjsstheim
and Auestad (1994a). Consistency                 is proved in Masry and Tjostheim (1994).
   An important part of the model specification problem consists of singling out the
significant lags i,, . . . , i,; j, , . . . ,j, and the orders p and q for the conditional    mean
Ch. 48: Aspects of Model&g   Nonlinear   Time Series                                      2931


(2.6) and conditional   variance (2.7). Auestad and Tjostheim (1990, 1991), Tjostheim
and Auestad (1994b) and Cheng and Tong (1992) considered this problem, Granger
and Lin (1991) did the same from a somewhat different point of view. Auestad and
Tjsstheim adopted an approach analogous to the parametric final prediction error
(FPE) criterion of Akaike (1969). They treated it only in the univariate case, but it
is easily extended to the multivariate    situation. Algorithms and formulae including
the heterogeneous     case g f 1 are given in Tjostheim and Auestad (1994b) to which
the reader is referred for details of derivation and examples with simulated and real
data. Cheng and Tong (1992) discussed a closely related approach based on cross
validation.
   An alternative and less computer intensive method is outlined by Granger and
Lin (1991). They use the Kendall rank partial autocorrelation         function and the
bivariate information     measure



       s   log fk Y)
         bawxY)l
                         fib, Y) dxdy

for a pair of lags. Joe (1989) studied its properties in the i.i.d. case. Robinson (1991)
considered the random process case and tests of independence.             Related tests of
independence     and a power comparison      with the BDS test are given in Skaug and
Tjastheim (1993a, b, c). Specification of semiparametric   time series models is discussed
in the next section together with estimation.


5.     Estimation    in nonlinear time series

5.1.    Estimation    of parameters      in parametric   models

For parametric nonlinear models, conditional           nonlinear least squares is the most
common estimation         technique. If the errors are normal and independent,          this is
equivalent     to conditional    maximum likelihood. The theory derived for dynamic
nonlinear models (3.1) with g = 1 gives the conditions for consistency and asymptotic
normality     of the estimators. For an account, see, e.g. Gallant (1987, Chapter 7).
Even more general conditions           were recently laid out in PStscher and Prucha
(1991a, b). These conditions        may be difficult to verify in practice, so that the
asymptotic standard deviation estimates, confidence intervals and the like have to
be interpreted with care. For discussions of estimation algorithms, see, e.g. Quandt
(1983) Judge et al. (1985, Appendix B) and Bates and Watts (1988). The estimation
of parameters in (2.2) may not always be straightforward.         Local minima may occur,
so that estimation      with different starting-values   is recommended.     Estimation    of y
in transition    function (2.3) may create problems if the transition      is rapid because
there may not be sufficiently many observations         in the neighbourhood      of the point
about which the transition takes place. The convergence of the estimate sequence
2938                                                                             T. Teriisvirta et al.


may therefore be slow and the standard deviation estimate of y most often very
large. This problem is discussed, e.g. in Bates and Watts (1988, p. 87) Granger and
Terasvirta (1993, Chapter 7) Seber and Wild (1989, pp. 480-481) and Tergsvirta
(1994). For simulation evidence and estimation using real economic data sets, see
also Chan and Tong (1986) Granger et al. (1993) Luukkonen                 (1990) and Terasvirta
and Anderson (1992). Model (2.2) may even be a switching regression model in which
case y is not finite and, in principle, cannot be estimated. In that case convergence
may still occur at some very large value, but obtaining a negative definite Hessian
probably turns out to be a problem. An available alternative then is to fix y at some
sufficiently large but finite value and estimate the remaining parameters conditionally
on that value.
   The estimation of parameters becomes more complicated                  if the model contains
lagged errors as the bilinear model does. Subba Rao and Gabr (1984) outlined a
procedure     for the estimation       of a bilinear      model based on maximizing            the
conditional    likelihood. Quick preliminary        estimates may be obtained using a long
autoregression       to estimate the residuals and OLS for estimating             the parameters
keeping the residuals fixed. This is possible because the bilinear model has a simple
structure in the sense that it is linear in the parameters             if we regard the lagged
residuals as observed. Granger and Terasvirta               (1993, Chapter 7) suggested this
alternative.
   If the model is a switching           regression     or threshold     autoregressive    model,
nonlinear least squares is an inapplicable          technique because of the irregularity        of
the sum of squares or the likelihood function. The problem consists of the unknown
switch-points      or thresholds for which unique point estimates are not available as
long as the number of observations             is finite. Tsay (1989) suggested specifying
(approximate)       switch-points  from “scatterplots      of t-values” in ordered (according
to the switching variable) recursive regressions. As long as the recursion stays in the
same regime, the t-value of a coefficient estimate converges to a fixed value. When
observations      from another regime are added into the regression, the coefficient
estimates start changing and the t-values deviating. Tsay (1989) contains examples.
The estimation        of parameters in regimes is carried out by ordinary least squares.
Chan (1993) showed (in the univariate            case) that if the model is stationary        and
ergodic, the parameter estimates, including those of the thresholds, are strongly
consistent; for a discussion see Tong (1990, Section 5.5.3).



5.2.   Estimation   of nonparametric    functions


In nonparametric     estimation the most common way of estimating the conditional
mean (2.6) and variance (2.7) is to apply the so-called kernel method. It is based on
a kernel function k(x) which, typically, is a real continuous,    bounded, symmetric
function integrating     to one. Usually it is required that k(x) 3 0 for all x, but
sometimes it is advantageous     to allow k(x) to take negative values, so that we may
Ch. 4X: Aspects oJModelling Nonlinear Time Series                                                     2939


have fx’k(x)dx = 0. The kernel method is explained in much greater detail in
Chapter 38 of this volume.
  The kernel acts as a smoothing device in the estimation procedure. For quantities
depending on several variables as in (2.6) and (2.7) a product kernel can be used.
Then the kernel estimates of M and V are


                                            $CY,
                                              fi k~,l(Y~-Y,_,~,~lk,,2(x,-
      ti(y,           y,,x,            x(J=+l                                                         (5.1)
                                                fcn k,,l(Yl-Ys-i,) fi kh,2(X,-Xs-i,)’
              )...)           )...)




                                                  s r=l                     r=l




                                                         fI kta.2(Xr-Xs-i,)
                                            ~~Y:rfJlk~,l(Yr-Ys-J                r=1
       P(y,)...) yp,xl        )...)    x4)=-L               ~_____
                                                                 ~         ~~            ~~
                                                $1fi k,,l(Yr-Ys-i,) fI kh,2(Xr-xs-i,)*
                                                  s r=l                     r=l


                                            -    &Kc4)2,                                             (5.2)

where k, i(x) = hip’ki(himlx), i = 1,2. Here k, and k, are the kernel functions
associated with the {y,} and (xt} processes, and h, and h, are the corresponding
bandwidths.     The bandwidth controls the width of the kernel function and thus the
amount of smoothing involved. The bandwidth            will depend on the total number
of observations    T, so that h = h(T) + 0 as T-t m. It also depends on the dimensions
p and q, but this has been suppressed in the above notation. In the following, to
simplify notation, it is assumed that {y,}, {x, } are measured roughly on the same
scale, so that the same bandwidth         and the same kernel function can be used
everywhere.
   Under regularity conditions (Robinson,       1983) it can be proved that $(y, x) and
c(y, x) are asymptotically     normal. More precisely,


      (ThP+4)“2[6(y,r)-M(y,x)]+N
                                                                             1                       (5.3)


and


      (ThP+4)“2[~(y,.r)               - V(y,n)] + N
                                                                           1,                        (5.4)


where the convergence is in the distribution,  J = sk2(x) dx and s(y, x) is defined in
Auestad and Tjostheim (1990).
  Several points should be noted for (5.3) and (5.4). For parametric models we have
fi-consistency.          For nonparametric                models   the rate is JThp+4,   which is slower.
2940                                                                      T. Teriistha   et al.


The presence of p(y,x) in the denominator     on the left-hand side of (5.3) and (5.4)
means that the variance blows up close to the boundaries          of the data set, and
extreme care must be used there in the interpretation    of G(x,y) and ?(x,y).
   There are other aspects of practical     significance   that are not immediately
transparent from (5.3) and (5.4). They will be discussed next.

Conjidence inter-v&.   Asymptotic confidence intervals can in principle be computed
from (5.3) and (5.4) by replacing p(y,x), V(y,x) and s(y, x) by corresponding
estimated quantities. An alternative is to try to form bootstrap confidence intervals.
Franke and Wendel(l990)     discussed a simple example where the bootstrap performs
much better than asymptotic intervals. In the general case the bootstrap developed
by Ktinsch (1989) and Politis and Roman0 (1990) may be needed.

Bias. As seen from (5.3) and (5.4), G(y, x) and p(y ,x ) are asymptotically unbiased.
For a finite sample size the bias can be substantial. Thus, reasoning as in Auestad
and Tjsstheim (1990) yields




where I, = Ix2k(x)dx. A corresponding         formula (Tjostheim and Auestad, 1994a)
holds for the conditional    variance. A Gaussian linear model will have a linear bias
in the conditional   mean, but, in general, the bias can lead to a misspecified model.
For example, a model with a flat conditional           variance (no conditional   hetero-
skedasticity) may in fact appear to have some form of heteroskedasticity           due to
bias from a rapidlyrarying     M(y, x). An example is given in Auestad and Tjostheim
(1_990). Generally,   V(y,x) is more affected by bias and has more variability        than
M(y,x). This makes it harder to reveal the structure of the conditional          variance
using purely nonparametric        means; see, for instance, the example of conditional
stock volatility in Pagan and Schwert (1990). Another problem is that misspecification
of the conditional   mean may mix up conditional       mean and variance effects. This is,
of course, a problem in parametric models as well.

Choosing the bandwidth.     Comparing   the variance and bias formulae (5.335.5), it
is seen that the classical problem of all smoothing     operations is present. As h
increases, the variance decreases whereas the bias increases and vice versa. How
should h be chosen for a given data set?
   There are at least three approaches   to this problem. The simplest solution is
to compute estimates for several values of h and to select one subjectively.      A
Ch. 45: Aspects of Modellinq   Nonlinear   Time Srries                                      2941


second possibility is to use asymptotic theory. From (5.3-5.5) it is seen that if we
require that variance and bias squared should be asymptotically           balanced, then
(ThP+q)- 1 _ h4: or h - T-1/(P+q+4’. A n extension of this argument (Truong and
Stone, 1992) yields h - T-‘i(P+q+2R), where R is a smoothness            parameter.  The
problem of choosing the proportionality     factor still remains. A discussion of this
and related problems is given in Hardle (1990, Chapter 5), in Chapter 38 of this
volume and in Marron (1989). The third possibility, which is the most time consum-
ing but, possibly, the one most used in practice, is to use some form of cross vali-
dation. For details, see the above references. Simulation         experiments    showing
considerable   variability for h selected by cross validation    for one and the same
model have been reported.

Bounllary effects.    For a point (y, x) close to the boundary of the data set there will
be disproportionally     more points on the “inward” side of (y,x). This asymmetry
implies that we are not able to integrate over the entire support of the kernel
function, so that we cannot exploit the fact that Jxk(x) dx = 0. This, in turn, means
that there is an additional bias of order h due to this boundary effect. For example,
for a linear regression model the estimated regression line would bend close to the
boundary. The phenomenon        has, primarily, been examined theoretically in the fixed
regression design case (Rice, 1984; Miller, 1990).

Higher order kernels.    Sometimes so-called higher order kernels have been suggested
for reducing bias. It is seen from (5.5) that if k is chosen such that Jx2k(x)dx = 0,
the bias will effectively be reduced to the next order term in the bias expansion
(typically of order h4). However, practical experience in the finite sample case has
been mixed and a higher order kernel does not work unless T is rather large.

Curse of dimension&y.           This problem was mentioned in the introduction.          It is a
well-known     difficulty of multidimensional          data analysis and a serious one in
nonparametric     estimation. Although the bandwidth h typically increases somewhat
as the dimensions p and 4 increase, this is by no means enough to compensate for
the sparsity of points in a neighbourhood          of a given point. There may still be some
useful information       left in $(y,x)    that can be used for specification        purposes
(Tjsstheim and Auestad, 1994a,b) or as initial input to iterative algorithms described
in the next section, but it is of little use as an accurate estimate of M(y, x).
   In general one should try to avoid the curse of dimensionality          by not looking at
too many regressors simultaneously;        i.e. by considering (2.6) and (2.7) such that while
i, and i, may be large, p and 4 are not. This requires a method for singling out
significant lags nonparametrically,      which was discussed in Section 4. Alternatively,
the problem may be handled by applying more restricted models which will be
considered in the next section.

Other estimation       methods.      There      are a number   of alternative   nonparametric
2942                                                                                T. Teriisvirra et al.


estimation   methods. These are described in Hardle (1990, Chapter 3) and Hastie
and Tibshirani (1990, Chapter 2). The most commonly used are spline smoothing,
nearest neighbour estimation,     orthogonal   series expansion and the regressogram.
For all of these methods there is a smoothing          parameter that must be chosen
analogously     to the choice of bandwidth for the kernel smoother. The asymptotic
properties    of the resulting estimators    are roughly similar to those in kernel
estimation. The spline smoother (Silverman, 1984) can be rephrased asymptotically
as a kernel estimator with negative sidelobes. Diebolt (1990) applied the regressogram
to testing linearity. Yakowitz (1987) considered nearest neighbour methods in time
series. Further applications   will be mentioned in the next section.



5.3.    Estimation       in restricted      nonparametric   and semiparametric   models

As mentioned above, general nonparametric     estimation with many variables leads
to increased variability and problems with the curse of dimensionality. To alleviate
these problems one can look at more restrictive models requiring particular forms
for f and g in (2.5) or one can consider semiparametric     models. This section is
devoted to models of that kind.

Additioe models.   Virtually all restrictive models have some sort of additivity                  built
into them. In the simplest case (using consecutive lags)


       Y, = i     “i(Y,-i)   + f         Pitx,-J + Et.
            i=l                i=l



Regression versions of such models and generalizations        with interaction   terms are
analysed extensively in Hastie and Tibshirani       (1990) and references therein. By
taking conditional    expectations  with respect to y,_ i and x, _ j, simple identities are
obtained which can be used as a basis for an iterative algorithm for computing the
unknown functions cli and pj. The algorithm needs initial values of these functions.
One possibility is to use either projections or simply a linear model for this purpose.
Some examples and theoretical properties in the pure regression case are given by
Hastie and Tibshirani. See also Chen and Tsay (1993b).
   The ACE algorithm treats a situation in which the dependent variable may be
transformed    as well, so that


       NY,) = C”i(Y,-i) + CPitxt-i)+ Et.
                  I                  I




The algorithm is perhaps best suited for a situation where c(~= 0 for all i, so that
there is a clear distinction between the input and output variables. The method was
developed in Breiman and Friedman          (1985). Some curious aspects of the ACE
Ch. 48: Aspects     ofModelliny Nonlinear Time Series                                 2943


algorithm are highlighted in Hastie and Tibshirani (1990, pp. 184- 186). In view of
the above comments it is perhaps not surprising that, in a time series example,
Hallman (1990) obtained better results by using a version of backfitting (Tibshirani,
1988) than with the ACE algorithm.
   Chen and Tsay (1993a) considered a univariate model allowing certain interactions.
Their functional coefficient autoregressive (FCAR) model is given as




with i, < p. By ordering the observations     according to some variable or a known
combination    of them to an “ordered” local regression the authors proposed an
iterative procedure for evaluating f,, . ,f, and gave some theoretical properties.
The procedure simplifies dramatically   if all the fj are one-dimensional.    The authors
fitted an FCAR model of this type to the chicken pox data of Sugihara and May
(1990). The fitted model seemed to point at a threshold autoregressive         model. The
forecasts from such a model, subsequently,      fitted to the data had an MSE at least
30% smaller than a seasonal ARMA model used as a comparison                for forecasting
4411 months ahead.

Projection pursuit type models.              These models can be written   as


      .Y, =    i    Bj(Yj'Ut-   1 +   Vixt- 1)+ et3
              j=l

where fij, j = 1,. , r, are unknown       functions,   yj and pj are unknown    vectors
determining    the direction of the jth projector, and yt_ 1,x,_ 1 are as in (2.5). An
iterative procedure     (Friedman    and Stuetzle, 1981) exists for deriving optimal
projectors (projection pursuit step) and functions /Ij. The curse of dimensionality     is
avoided since the smoothing        part of the algorithm exploits the fact that fij is a
function of one scalar variable. For time series data, experience with this method is
limited. A small simulation     study that Granger and Terasvirta (1992) conducted
gave marginal improvements        compared to linear model fitting for the particular
nonlinear models they considered. Projection pursuit models are related to neural
network models, but for the latter the functions pj are assumed known and often
pj=/I,   j= l,..., Y, thus giving a parametric       model class. The fitting of neural
network models is discussed in White (1989).

Regression trees, splines and MARS.               Assume a model of form




and approximate      f(y, X) in terms of simple basis functions   Bj(y,x) so that
f,,,,(y,x) = CjcjBj(y,x).   In the regression tree approach (Breiman et al., 1984)
2944                                                                             T. Teriisvirta   et al.


f appr is built up recursively from indicator functions Bj(y, X) = I{ (_v,x)ER~} and the
regions Rj are partitioned           in the next step of the algorithm according to a certain
pattern. As can be expected, there are problems in fitting simple smooth functions
like the linear model.
   Friedman (1991) in his MARS (multivariate               adaptive regression splines) metho-
dology has made at least two important              new contributions.    First, to overcome the
difficulty in fitting simple smooth functions, Friedman proposed not to automatically
eliminate the parent region Rj in the above recursive scheme for creating subregions.
In subsequent        iteration both the parent region and its corresponding            subregions
are eligible for further partitioning.          This allows for much greater flexibility. The
second contribution          is to replace step functions by products of linear left and right
truncated regression splines. The products make it possible to include interaction
terms. For a detailed discussion the reader is referred to Friedman (1991).
   Lewis and Stevens (1991a) applied MARS to time series, both simulated and real
data. As for most of the techniques discussed in this section a number of input
parameters       are needed. Lewis and Stevens recommended               running the model for
several sets of parameters and then selecting a final model based on various specifica-
tion/fitting    tests. They fitted a model to the sunspot data which has 3 one-way, 3
two-way and 7 three-way interaction               terms. The MARS model produced better
overall forecasts of the sunspot activity than the models applied before. In Lewis
and Stevens (1991 b) riverflow is fitted against temperature              and precipitation    and
good results obtained. There are as yet no applications              to economic data.
   The MARS technology appears very promising but must of course be tested more
extensively on real and simulated data sets. No asymptotic theory with confidence
intervals is available yet.

Stepwise series expansion of conditional densities. In a sense the conditional             density
p(y, Iyt_ 1, x, _ J is the most natural quantity to look at in a joint modelling of { y,, xr}
since predictive distributions         as well as the conditional     mean and variance can all
be derived from this quantity. Gallant and Tauchen (1989) used this fact as their
starting-point.
   The conditional        density is estimated, to avoid the curse of dimensionality,            by
expanding       it in Hermite polynomials.        These are centred and scaled so that the
conditional       mean M(y,x) and variance V(y,x) play a prominent                 role. As a first
approximation         they are supposed to be linear Gaussian               and of ARCH type,
respectively.
   Gallant et al. (1992) looked at econometric applications,             notably to stock market
data. In particular, they investigated the relationship           between the volatility of stock
prices and volume. A main finding was that an asymmetry in the volatility of prices
when studied by itself more or less disappears               when volume is included as an
additional     conditional     variable. Possible asymmetry         in the conditional    variance
function (univariate case) has recently been studied by a number of investigators
using both parametric and nonparametric               methods; see Engle and Ng (1993) and
references therein.
Ch. 48: Aspects   ofMuddling Nonlinear Time Series                                      2945


Semiparametric      models.    Another way of trying to eliminate       the difficulties in
evaluating    high-dimensional     conditional   quantities is to assume nonlinear      and
nonparametric      dependence in some of the predictors, and parametric and usually
linear dependence in others. An illustrative example is given by Engle et al. (1986)
who modelled electricity sales using a number of predictor variables. It is natural
to assume the impact of temperature on electricity consumption         to be nonlinear, as
both high and low temperatures         lead to increased consumption,     whereas a linear
relationship   may be assumed for the other regressors. A similar situation arose in
Shumway et al. (1988) which is a study of mortality as a function of weather and
pollution variables in the Los Angeles region.
    In the context of model (2.5) with a linear dependence            on lags of y, and
nonlinearity    with respect to the exogenous variable {x,}, we have




The modelling technique would depend somewhat on the dimension of x,_ 1. In the
case where the argument of f is scalar, it can be incorporated    in the backfitting
algorithm of Hastie and Tibshirani (1990, p. 118). Under quite general assumptions
it is possible to obtain fi-consistency for the parametric part as demonstrated by
Heckman (1986) and Robinson (1988). Powell et al. (1989) developed the theory
further and gave econometric applications.



6.   Evaluation of estimated models

After estimating     a nonlinear    time series model it is necessary to evaluate its
properties to see if the specified and estimated model may be regarded as an
adequate description      of the relationship  it was constructed      to characterize.   The
residuals of the model can be subjected to various tests such as those against error
autocorrelation,   ARCH and normality. At least in the parametric case linearity of
the time series was tested, and similar tests may now be performed on the residuals
to see if the model adequately characterizes        the nonlinearity    the tests previously
suggested. For instance, Eitrheim and Terasvirta (1993) proposed testing the STAR
model against an alternative        containing   two additive STAR components             and
derived an LM type test for this purpose. The test applies to STR models as well.
As to testing the null of no error autocorrelation            it should be noted that the
asymptotic distribution     of the Ljung-Box   test statistic based on estimated residuals
is not available, as the correct number of degrees of freedom is known only if the
estimated model is’s linear ARMA model. For this reason, Eitrheim and Terasvirta
(1993) also derived an LM test for testing the residuals of the STR model against
autocorrelation.
   One should also study the long-term properties of the model, which generally can
only be done numerically by simulating the model without noise. A bilinear model
constitutes    an exception as its long-term      solution is the same as that of the
2946                                                                       T. Teriisvirta et al.


corresponding linear autoregressive model. The exogenous variables should be set
on a constant level, for instance, to equal their sample means. If the solution path
diverges, the model should be rejected and respecification attempted. Other
examples of a solution are a limit cycle or a unique stable singular point. Sometimes
several solutions may appear depending on the starting-values. See, e.g. Ozaki
(1985) for further discussion.
   The out-of-sample prediction of the model is an important part of the evaluation
process. The precision of the forecasts should be compared to those from the
corresponding linear model. However, as mentioned in the introduction, the results
also depend on the data during the forecasting period. If there are no observations
in the range in which nonlinearity of the model makes an impact, then the forecasts
cannot be expected to be more accurate than those from a linear model. The check
is thus negative: if the forecasts from the nonlinear model are significantly less
accurate than those from the corresponding linear one, then the nonlinear specifica-
tion should be reconsidered.
   A further check of the estimated model is to see whether it can reproduce a feature
of interest in the data. A fitted model is considered adequate only if it is capable of
doing that. The spectral density function of the time series may be such a feature.
The check is carried out by bootstrapping the estimated model (linear or nonlinear)
which is required to be parametric. Details and examples can be found in Tsay
(1992).


7.     Example

As an example of the parametric specification, estimation, and evaluation cycle
discussed in Section 4 we shall consider modelling the seasonally unadjusted logari-
thmic Austrian industrial output 1960(l) to 1986(4). This is one of the series analysed
in Luuk konen and Terasvirta (199 1) and Terasvirta and Anderson (1992). However,
while those authors tested linearity of the series and rejected it, they did not report
any modelling results. Our aim is to see whether we can describe the four-quarter
differences (y,) of the series or annual growth rates, appearing in Figure 1, by a
STAR model. In order to do that we first have to specify a linear autoregressive
model for the series. Following Terasvirta and Anderson we choose an AR(S) model
yielded by AIC. Having done this, the second step is to test linearity against STAR
using five lags and applying an F-test based on the auxiliary regression (4.2). The
results are found in Table 1 where it is seen that the smallest p-value of the tests for
d=l , . . . ,5, is obtained at d = 1. We take this value (= 0.010) to be sufficiently small
to reject linearity in favour of STAR. The next step is to choose between an exponen-
tial and a logistic STAR model assuming that d = 1. Table 1 shows that the p-values
of the F-tests of both H,*, and Hz3 are smaller than that of the test of H,*, (see
Section 4), so that the decision rule discussed in Section 4 leads us to choose an
LSTAR model.
Ch. 48: Aspects     ofModelliny Nonlinear Time Series                                                                                 2941




           0.06




         -0.06




                             1965(l)       1969(l)          1973(i)          1977(1)1       1981(l)            1985(i)

                                                                 Quarter

Figure     1. Four-quarter       differences   of the     logarithmic    index      of Austrian            industrial          production,
                                                        1961(l)-1986(4).




                                                    Table 1
             The p-values of the LM type linearity test against STAR based on (4.2) for delays
             d = 1,. ., 5, and the p-values of the model specification      tests to choose between
             LSTAR and ESTAR for d = 1, for the four-quarter         differences of the logarithmic
             Austrian industrial  production  model, 1960(l)-1986(4).     The linear base model is
                                                    AR(5).

                                                                                        d
             Null
             hypothesis                                 1              2                3              4                 5

             H,,$,   =/32=&=0                        0.010            0.29          0.15              0.22              0.41
             H;3:/J3 = 0                             0.034
             H;2:/?2=OI/13=0                         0.24
             H,*,:~,=O~/?,=j?,=O                     0.039




    After selecting the type of model, the next problem is that of specifying the lag
structure. An obvious way to start is to estimate the parameters of the full model
(2.2) with (2.3) as the transition function. However, here, as in many other similar
situations, this leads to convergence problems because some of the parameters are
redundant     and their estimates highly correlated with those of other parameters.
2948                                                                            T. Terti.wirta et ul.


To avoid this it is often advisable to fix y or even both y and c in (2.3) and estimate
cp and 8 conditionally.   This helps one to put restrictions on the elements of these
parameter vectors, and after finding a sensible set of parameters, the model can be
re-estimated   without any restrictions    on y and c. It is of course possible and
sometimes even desirable to impose further restrictions on p and 8 even after this
stage. Note that, apart from the usual restrictions of the type ‘pj = 0 and Bj = 0, the
exclusion restrictions   ‘pj = - Bj are useful. While ‘pj = 0 makes the “parameter”
‘pj + OjF = 0 for F = 0, the latter does the same for F = 1.
   The final estimated LSTAR model has the form

       y, = 0.76~~ _ 1 + 0.3Oy,_, - 0.37y,_,      - 0.63y,_,    + 0.55y,_ 5 + (0.087 - 0.76y,_ 1
           (0.18)      (0.17)        (0.16)         (0.15)        (0.11)     (0.008 1) (0.18)

            - 0.30~,_~ + 0.37~,_~ + 0.63~,_~ - 0.55y,_,)
              (0.17)      (0.16)        (0.15)         (0.11)

            x [l + exp( - 2.2 x 24(y,_ 1 - 0.063)}]-1           + ti,                           (7.1)
                            (0.80)               (0.010)


 s = 0.0217, s’/s; = 0.87, F,,(6,78)       = 1.2(0.34), FARCH(4,90) = 0.96(0.44), sk = 0.054,
 ek = 0.96, LJB = 3.9(0.15).
     The restrictions ‘p,, = 0 and ‘pj = - tIj, j = 1,. . . ,5, were suggested by the data and
 imposed during the lag specification stage. The figures below the parameter estimates
 are the estimated standard deviations based on the Hessian, the ones in parentheses
 following the values of the test statistics are p-values. Note that the exponent of the
 transition function is standardized       by dividing it by the sample standard deviation
 of y,[l/B(y) = 241. This is useful because y originally                is not scale-free, and
 standardizing      it makes it much easier to give it a suitable starting-value              for
estimation. Furthermore,        s is the estimated standard error of residuals, sL is ditto
for the AR(5) model, F,,(q, n) is the F-test of no autocorrelation           (Section 6) against
qth order autocorrelation,       FAR&q, n) is the LM test against ARCH of order q, sk
is skewness, ek excess kurtosis, and LJB the Lomnicki-JarqueeBera                 normality test.
The tests do not reveal any serious inadequacy               of the model. There seems to be
some excess kurtosis in the residuals but it amounts to one half of that in the
AR(5) model. Table 2 contains the results of the test of no remaining nonlinearity
(Section 6). They indicate that this null hypothesis cannot be rejected at conventional
significance levels. The numerical long-run solution paths converge to the same
point independent       of the starting-values.   This allows us to conclude that (7.1) has
a unique stable singular point (Section 6). Thus the model cannot be rejected on the
grounds of a diverging solution path. Note, however, that the value of the solution
( = 0.063) clearly exceeds the sample mean of the series which equals 0.034.
    The statistical analysis of the model, so far, thus does not reveal any serious model
inadequacy and we can proceed to interpreting the estimated model. The parameters
 Ch. 48: Aspects   of ModellingNonlinear              Time Series                                                   2949


                                                    Table 2
                   The p-values of the test of no remaining nonlinearity in Eitrheim and
                   Terasvirta (1993) performed on the residuals of LSTAR model (7.1)
                                            for delays d = 1,. ,5.

                                                                           d

                   Test                       1             2               3       4          5

                   F(15,75)                  0.17          0.70           0.22     0.31      0.30




most easily interpreted      are y and c. The former indicates       how rapidly the
“parameter”     vector q + BF changes from the one extreme to the other with y,_ i.
The larger y, the more rapid the change. Location parameter c tells where in the
range the c_hange occurs as e = 0.5 at y,_ i = e. This information     summed up by
grap@g       F, and the graph appears in Figure 2. It is seen that in our example
Q + f< changes rather slowly with y,_ i. It may also be interesting to know how
@+ 8F has varied over time. Figure 3 shows that low values of F^ have been much
more common than high ones.
   It is of course impossible to interpret individual parameter estimates qjj or I!?~in
(7.1). A study of the roots of characteristic     polynomials  offers a better way of


        1.0




        0.8




        0.6

   Cu   0.5

        0.4

        0.3

        0.2

        0.1

        0.0
                       -004          -0.02          0.00        002         0.04   0.06     0.08      0.10      0.12

                                                                      Y(t- 1)

Figure 2. Transition      function     of model (7.1) for the four-quarter  differences   of the logarithmic   index of
                                            Austrian industrial production.
2950                                                                                           T. Trriisvirtu et al.


       1.0


       09


       0.8


       0.7


       0.6


  'U   0.5


       0.4


       0.3


       0.2


       0.1

       00
                    1965(l)       1969(l)           1973(l)           1977(l)      1981(l)     1985(i)

                                                         Quarter

Figure 3. Values over time of the transfer function of model (7.1) for the four-quarter             differences   of
                      the logarithmic  index of Austrian industrial production.




interpreting (7.1) exactly as it does in the case of a linear autoregressive model. The
roots can be computed at various values of F, of which zero and one are, perhaps,
the most interesting ones. Table 3 contains the roots for F^ = 0 and 0.5. When E = 0
the local dynamics of (7.1) are characterized     by a strong cyclic component    with a
period of about two years. When F increases this component            grows weaker. For
P = 0.5, the modulus of the corresponding     pair of complex roots has decreased from


                                                 Table 3
                        The roots of the characteristic  polynomial”            of (7.1) for
                                               p = 0, 0.5.

                        e             Root               Modulus                Period

                        0            0.71 k 0.63i             0.95                8.7
                                  -0.71 * 0.55i               0.90                2.5
                                     0.75                     0.75
                        0.5         0.51 & 0.64i              0.82                7.0
                                  - 0.63 k 0.5Oi              0.8 1               2.5
                                    0.63

                           “The characteristic        polynomial         C(z) = zs -I;=    1
                        (gj + ej&-j.
Ch. 48: Aspects of Modelling Nonlinear   Time Series                                           2951


0.95 to 0.82. At the same time, the intercept has increased from zero to 0.044. Indeed,
it is seen directly     from (7.1) that when @ approaches         unity the (local) cyclical
variation disappears altogether. The local autoregression        for F^ = 1 is merely a white
noise process with mean 0.087. Thus after entering a recession industrial production
on average is bound to recover strongly after a few quarters because of the cyclical
component.      On the other hand, according to (7.1) it is somewhat more difficult for
a recovery to change into a recession. During recovery the cycle is less pronounced,
and the local linear approximation        has a positive intercept as well. A sufficiently
large negative shock may be required to depress the industrial output from high to
low growth rates.
   It is also illuminating   to compare the residuals of (7.1) with those from the linear
model. They are shown in Figure 4. It is seen that the LSTAR model explains the
aftermath of the exceptionally      large observation   (0.14) in 1972(4) much better than
the AR(S) model. This is the case because the local dynamics of the LSTAR model
predict a drop to 0.086 in the next period while the AR(5) model offers a much
slower return to lower growth. The residual sum of squares of (7.1) is 85 percent of
that of the AR model. After subtracting        the residual for 1973(l) the same figure is
92 percent. This is still a fair improvement,    but these figures do indicate that a single
observation      may have quite a large influence on the results. Thus one should be




        0.06 ! -




      -0.0611.
                      1965(l)     1969(l)       1973{1)          1977(l)   1961(l)   1985(l)

                                                       Quarter

Figure 4. Residuals of the LSTAR model (7.1) (solid line) and the AR(5) model (broken line) for the
         four-quarter differences of the logarithmic index of Austrian industrial production.
2952                                                                         T. Tertisuirta et al.


aware of the possibility that results from nonlinear modelling can be rather sensitive
to data errors or other outliers of similar kind.
   It does not seem unusual that an LSTAR model is useful in modelling                    the
consequences      of exceptional events. The modelling exercise with other industrial
production     series in Terasvirta and Anderson (1992) showed that nonlinearity         was
mainly needed to describe the response of the output to large negative shocks. In
the absence of such shocks, both the STAR and the AR models seemed to fit the data
equally well. The main difference here is that the most important           contribution    of
the LSTAR model (7.1) is to characterize         the response of the system to a large
positive shock.
   The specialized nature of (7.1) becomes obvious also when the model is used for
one-quarter-ahead       forecasting. The observations    1987(1))1988(4) were saved for
this purpose. The root mean square error (RMSE) of the eight forecasts equals 0.023
which is about the size of the residual standard derivation         of (7.1). However, the
RMSE of the forecasts from the AR(5) model only equals 0.013. The test of the
hypothesis that both models have the same mean square error of prediction against
the alternative that the AR(5) has the lower mean square error of the two, has p-value
0.049. The reason for this outcome is that the prediction period does not contain
any nonlinearity      of the kind appearing during the estimation      period. The simple
AR model, thus, can forecast such a regular period better than the more involved
LSTAR one.
   This example is univariate. Bacon and Watts (1971) contained probably the first
application     of a bivariate     STR model, but the data were not economic.             An
application    of bivariate STR models to economic data can be found in Granger
et al. (1993), but as a whole the number of applications      so far is small.



8.   Conclusions

This chapter is an attempt at an overview of various ways of modelling nonlinear
economic relationships.     Since nonlinear time series models and methods are a very
large field, not all important    developments    have been covered. The emphasis has
been on model building, and the modelling cycle, comprising linearity testing, model
specification, parametric or nonparametric     function estimation and model evaluation,
has been highlighted. The estimation of fully specified nonlinear theory models such
as disequilibrium     models has not been included here. A majority of results concern
the estimation of the conditional     mean of a process and, therefore, the conditional
variance has received less attention. This is, in part, because conditional       hetero-
skedasticity    is discussed in Chapter 49. Random coefficient models also belong
under that heading and have not been considered here. Furthermore,         this presenta-
tion reflects the belief that economic phenomena        are more naturally characterized
by stochastic rather than deterministic     models, so that deterministic  chaos and its
applications    to economics have only been briefly mentioned in the discussion.
Ch. 48: Aspects of Modelling Nonlinear         Time Series                                                          2953


   At present the number         of applications of nonlinear  time series models in
economics is still fairly limited. Many techniques discussed here are as yet relatively
untested. However, the situation may change rather rapidly, so that in a few years
the possibilities of evaluating the empirical success of present and new techniques
will be considerably    better than now.




References

Akaike, H. (1969) “Fitting autoregressions          for predictions”,         Annals of the Institute of Statistical
  Mathematics, 21,243-247.
Anderson, B.D.O. and J.B. Moore (1979) Optimaljltering.               Englewood Cliffs, NJ: Prentice-Hall.
Andrews, D.W.K. (1993) “Tests for parameter instability and structural change with unknown change
  point”, Econometrica, 61, 821-856.
Auestad, B. and D. Tjsstheim (1990) “Identification        of nonlinear time series: First order characterization
  and order determmation”,       Biometrika, 77,669-687.
Auestad. B. and D. Tiostheim (1991) “Functional         identification      in nonlinear time series”, In: G. Roussas,
  ed., Nonparametric functional estimation and related topics. Amsterdam: Kluwer Academic Publishers,
  493-507.
Bacon, D.W..and D.G. Watts (1971) “Estimating the transition between two intersecting straight lines”,
  Biometrika, 58, 525-534.
Barnett, W.A., J. Powell and G.E. Tauchen (1991) eds., Nonparametric and semi-parametric methods in
  econometrics and statistics. Proceedings of the 5th International Symposium in Economic Theory and
  Econometrics. Cambridge: Cambridge University Press.
Bates, D.M. and D.G. Watts (1988) Nonlinear regression analysis and its applications. New York: Wiley.
Box. G.E.P. and G.M. Jenkins (1970) Time series analysis,          .      .forecasting and control. San Francisco:
  Holden-Day.
Breiman, L. and J.H. Friedman (1985) “Estimating optimal transformations                  for multiple regression and
  correlation”.    Journal ofthe American Statistical Association, 80, 580-619 (with discussion).
Breiman, L., J.H. Friedman, R. Olshen and C.J. Stone (1984) Classification and regression trees. Belmont,
  CA: Wadsworth.
Brock, W.A. and S.M. Potter (1993) “Nonlinear time series and macroeconometrics”,                    in: G.S. Maddala,
  CR. Rao and H.R. Vinod, eds., Handbook of Statistics, Vol. 11. Amsterdam:                            North-Holland,
   195-229.
Brock, W.A’., W.D. Dechert and J.A. Scheinkman (1987) A test for independence based on the correlation
  dimension. Working paper, University of Wisconsin-Madison,                    Social Systems Research Institute.
Brockett,    P.L., M.J. Hinich and D. Patterson           (1988) “Bispectral-based         tests for the detection       of
  Gaussianity and linearity in time series”, Journal of the American Statistical Association, 83,657-664.
Brown, R.L., J. Durbin and J.M. Evans (1975) “Techniques                    for testing the constancy      of regression
  coefficients over time”, Journal of the Royal Statistical Society B, 37, 149-192 (with discussion).
Chan, K.S. (1990) “Testing for threshold autoregression”,           Annals of Statistics, 18, 1886-1894.
Chan, K.S. (1991) “Percentage      points of likelihood ratio tests for threshold autoregression”,            Journal of
  the Royal Statistical Society B, 53,691-696.
Chan, K.S. (1993) “Consistency      and limiting distribution        of the least squares estimator of a threshold
  autoregressive     model”, Annals of Statistics, 21,520-533.
Chan. KS. and H. Tone (1986) “On estimatine. thresholds in autoregressive                    models”. Journal of Time
  Series Analysis, 7, 179-i90. ’
Chan, KS. and H. Tong (1990) “On likelihood ratio tests for threshold autoregression”,                    Journal of the
  Royal Statistical Society B, 52,469-476.
Chen, P. and R.H. Day (1992), eds., Non-linear dynamics and evolutionary economics. Cambridge,                       MA:
  MIT Press.
Chen, R. and R.S. Tsay (1993a) “Functional        coefficient autoregressive        models”, Journal of the American
  Statistical Association, 88, 298-308.
2954                                                                                               T. Teriisvirta et al.


Chen, R. and R.S. Tsay (1993b) “Nonlinear          additive ARX models”, Journal of the American Statistical
   Association, 88, 9555961.
Cheng, B. and H. Tong (1992) “On consistent nonparametric             order determination        and chaos”, Journal of
    the Royal Statistical Society B, 54,427-449.
Chow, G.C. (1960) “Testing for equality             between sets of coefficients         in two linear regressions”,
    Econometrica, 28, 591-605.
Davidson, R. and J.G. MacKinnon           (1985) “Heteroskedasticity-robust         tests in regressions directions”,
    Annales de I’INSEE, 59/60, 183-218.
Davies, R.B. (1977) “Hypothesis testing when a nuisance parameter is present only under the alternative”,
    Biometrika, 74, 241-254.
Davies, R.B. (1987) “Hypothesis testing when a nuisance parameter is present only under the alternative”,
    Biometrika, 84, 33-43.
De Gooijer, J.G. and K. Kumar (1992) “Some recent developments                 in non-linear time series modelling,
    testing and forecasting”, International Journal of Forecasting, 8, 135-156.
Delgado, M.A. and P.M. Robinson (1992) “Nonparametric                and semiparametric         methods for economic
    research”, Journal of Economic Surveys, 6, 201-249.
Desai, M. (1984) “Econometric       models of the share of wages in national income, U.K. 185551965”, in:
    R.M. Goodwin, M. Kruger and A. Vercelli, eds., Nonlinear models offluctuating growth. Lecture Notes
    in Economics and Mathematical        Systems No. 228, New York: Springer Verlag.
Diebolt, J. (1990) “Testing the functions defining a nonlinear autoregressive                 time series”, Stochastic
    Processes and their Applications, 36, 85-106.
Eitrheim, 8. and T. Terasvirta (1993). Testing the adequacy of smooth transition autoregressive                   models.
    Bank of Norway, Research Department,           Working Paper 1993/13.
Engle, R.F. and V. Ng (1993) “Measuring and testing the impact of news on volatility”, Journal of Finance,
   41, 1749-l 778.
Engle, R.F., C.W.J. Granger, J. Rice and A. Weiss (1986) “Semiparametric                    estimates of the relation
    between weather and electricity sales”, Journal of the American Statistical Association, 81, 310-320.
Ertel, J.E. and E.B. Fowlkes (1976) “Some algorithms            for linear sphne and piecewise multiple linear
    regression”, Journal of the American Statistical Association, 71,640&648.
Franke, J. and M. Wendel (1990) “A bootstrap                 approach      for nonlinear       autoregressions.      Some
   preliminary results”, Preprint, to appear in: Proceedings of the International Conference on Bootstrap-
   ping and Related Techniques, Trier, June 1990.
Friedman, J.H. (1991) “Multivariate        adaptive regression splines”, Annals of Statistics, 19, l-141 (with
   discussion).
Friedman, J.H. and W. Stuetzle (1981) “Projection pursuit regression”, Journal ofthe American Statistical
   Association, 76, 817-823.
Gallant, A.R. (1981) “On the bias in flexible functional forms and an essentially unbiased form: The
   Fourier Flexible Form”, Journal of Econometrics, 15, 211-245.
Gallant, A.R. (1987) Nonlinear statistical models. New York: Wiley.
Gallant, A.R. and G. Tauchen (1989) “Seminonparametric                  estimation     of conditionally      constrained
   heterogeneous    processes: asset pricing applications”,    Econometrica, 57, 1091-l 120.
Gallant, A.R., P.E. Rossi and G. Tauchen (1992) “Stock prices and volume”, Review ofFinancial Studies,
   5, 1999242.
Grange& C.W.J. and J.J. Hallman (1991a) “Nonlinear transformations                of integrated time series”, Journal
   of Time Series Analysis, 12, 207-224.
Granger, C.W.J. and J.J. Hallman (1991b) “Long-memory              processes with attractors”,        Oxford Bulletin of
   Economics and Statistics, 53, 1 l-26.
Granger, C.W.J. and J.L. Lin (1991) Nonlinear correlation            coefficients and identification        of nonlinear
   time series models. University of California, San Diego, Department           of Economics, Discussion Paper.
Granger, C.W.J. and P. Newbold (1986). Forecasting economic time series. 2nd edition. Orlando, FL:
   Academic Press.
Granger, C.W.J. and T. Terasvirta (1992) “Experiments             in modeling nonlinear relationships            between
   time series”, in: M. Casdagli and S. Eubank, eds., Nonlinear modeling and foreasting. Proceedings of
   the Workshop on Nonlinear Modeling and Forecasting Held September, 1990 in Santa Fe, New Mexico,
   Redwood City, CA: Addison-Wesley,           189-197.
Ch. 48: Aspects of Modelling Nonlinear Time Series                                                                   2955


Granger, C.W.J. and T. Terhsvirta (1993) Modeltiny nonlinear economic relationships. Oxford: Oxford
   University Press.
Granger, C.W.J., T. Terlsvirta       and H.M. Anderson (1993) “Modelling non-linearity                   over the business
  cycle”, in: J.H. Stock and M.W. Watson, eds., Business cycles, indicators and forecasting. Chicago:
   University of Chicago Press, 31 l-325.
Haggan, V. and T. Ozaki (1981) “Modelling non-linear random vibrations using an amplitude-dependent
  autoregressive     time series model”, Biometrika, 68, 1899196.
Haggan, V., SM. Heravi and M.B. Priestley (1984) “A study of the application of state-dependent                      models
  in nonlinear time series analysis”, Journal of Time Series Analysis, 5, 699102.
Hallman, J.J. (1990) Nonlinear integrated series, cointegration             and application.     PhD Thesis. University
   of California, San Diego, Department         of Economics.
Hansen, B.E. (1990) Lagrange multiplier tests for parameter                  instability in non-linear      models. Paper
   presented at the Sixth World Congress of the Econometric                Society, Barcelona.
Hlrdle, W. (1990) Applied nonparametric regression. Oxford: Oxford University Press.
Harvey, A.C. (1990) Econometric analysis of time series, 2nd edition. Cambridge, MA: MIT Press.
Hastie, T.J. and R.J. Tibshirani (1990) Generalized additiue models. London: Chapman and Hall.
Heckman, N. (1986) “Spline smoothing in a partly linear model”, Journal of the Statistical Society B, 48,
   244-248.
Higgins, M. and A.K. Bera (1989) “A joint test for ARCH and bilinearity in the regression model”,
   Econometric Reviews, I, 171-181.
Hinich, M.J. (1982) “Testing for Gaussianity          and linearity of a stationary        time series”, Journal of Time
  Series Analysis, 3, 1699176.
Joe, H. (1989) “Estimation       of entropy and other functionals          of a multivariate      density”, Annals of the
   Institute of Statistical Mathematics, 41, 6833697.
Judge, G.G., W.E. Griffiths, R.C. Hill, H. Liitkepohl and T.-C. Lee (1985) The theory and practice of
   econometrics, 2nd edition. New York: Wiley.
Keenan, D.M. (1985) “A Tukey non-additivity               type test for time series nonlinearity”,         Biometrika, 72,
   39-44.
Kramer, W., W. Ploberger          and R. Ah (1988) “Testing for structural                change in dynamic models”,
   Econometrica, 56, 1335-l 310.
Kuan, C.-M. and H. White (1994) “Artificial neural networks: An econometric perspective”, Econometric
   Reviews, 13, 1-143 (with discussion).
Kiinsch, H. (1989) “The jackknife and the bootstrap              for general stationary         observations”,   Annals of
   Statistics, 17, 121771241.
Lasota, A. and M.C. Mackey (1989) “Stochastic                   perturbation       of dynamical      systems: The weak
   convergence of measures”, Journal of Mathematical Analysis and Applications, 138, 232-248.
Lee, T.-H., White, H. and C.W.J. Granger (1993) “Testing for neglected nonlinearity                 in time series models.
   A comparison of neural network methods and alternative tests”, Journal of Econometrics, 56,269-290.
Lewis, P.A.W. and J.G. Stevens (1991a) “Nonlinear modeling of time series using multivariate                       adaptive
   regression splines (MARS)“, Journal of the American Statistical Association, 86, 864877.
Lewis, P.A.W. and J.G. Stevens (1991b) Semi-multivariate                  nonlinear      modeling of time series using
   multivariate    adaptive regresson splines (MARS). Preprint, Naval Post-graduate                  School.
Liu, T., C.W.J. Granger and W. Heller (1992) “Using the correlation                     exponent to decide whether an
   economic series is chaotic”, Journal of Applied Econometrics, 7, S25-S39.
Luukkonen, R. (1990) On linearity testing and model estimation in non-linear time series analysis. Helsinki:
   Finnish Statistical Society.
Luukkonen,       R. and T. Terlsvirta     (1991) “Testing linearity of economic time series against cyclical
  asymmetry”, Annales de l’economic et de statistique, 20121, 125-142.
Luukkonen,      R., P. Saikkonen and T. Terlsvirta          (1988a) “Testing linearity in univariate time series”,
  Scandinavian Journal of Statistics, 15, 161-175.
Luukkonen,      R., P. Saikkonen    and T. Terlsvirta       (1988b) “Testing linearity against smooth transition
  autoregression”,      Biometrika, 75,491-499.
Maddala, G.S. (1977) Econometrics, New York: McGraw-Hill.
Maddala, G.S. (1986) “Disequilibrium,         self-selection and switching models”, in: Z. Griliches and M.D.
  Intrihgator,    eds., Handbook of econometrics. Vol. 3, Amsterdam:              North-Holland,      1634-1688.
2956                                                                                                       T Teriisuirta et al.


 Marron, S. (1989) “Automatic smoothing parameter selection: A survey”, in: A. Ullah, ed., Semiparametric
    and nonparametric econometrics. Heidelberg: Physica-Verlag,                   65-86.
 Masry, E. and D. Tjnstheim            (1994) “Nonparametric            estimation      and identification       of ARCH and
    ARX nonlinear         time series. Strong convergence         and asymptotic           normality”,    Econometric Theory
    (forthcoming).
 Miiller, H.G. (1990) Smooth optimum                 kernel estimators         near endpoints.        Preprint,    University    of
    California, Davis.
 Nicholls, D.F. and A.R. Pagan (1985) “Varying coefficient regression”, in: E.J. Hannan, P.R. Krishnaiah
    and M.M. Rao, eds., Handbook ofstatistics. Vol. 5. Amsterdam: Elsevier, 413-449.
Ozaki, T. (1985) “Non-linear time series models and dynamical systems”, in: E.J. Hannan, P.R. Krisnaiah
    and M.M. Rao, eds., Handbook OfStatistics. Vol. 5. Amsterdam: Elsevier, 25-83.
 Pagan, A.R. and G.W. Schwert (1990) “Alternative models for conditional                         stock volatility”, Journal of
    Econometrics, 45, 261-290.
 Petruccelli, J.D. (1990) “A comparison          of tests for SETAR-type non-linearity              in time series”, Journal of
    Forecasting, 9, 25-36.
 Petruccelli, J.D. and N. Davies (1986) “A portmanteau              test for self-exciting threshold autoregressive-type
    nonlinearity”,     Biometrika, 73, 687-694.
 Ploberger,     W. and W. Kriimer (1992) “The CUSUM-test                       with OLS residuals”, Ecoaometrica, 60,
    271-285.
 Politis, D.N. and J.P. Roman0 (1990) A nonparametric                resampling procedure for multivariate confidence
    regions in time series analysis. Technical Report, Department                  of Statistics, Stanford University.
 Ptitscher. B.M. and I.R. Prucha (199la) “Basic structure of the asymptotic theory in dynamic nonlinear
    econometric       models, Part I: Consistency        and approximation           concepts”, Econometric Reoiews, 10,
    125-216.
 Pb;tscher, B.M. and I.R. Prucha (199lb) “Basic structure of the asymptotic theory in dynamic nonlinear
    econometric models, Part II: Asymptotic normality”, Econometric Reviews, 10, 253-325.
 Powell, J.L., J.H. Stock and T:M. Stoker (1989) “Semiparametric                         estimation     of index coefficients”,
    Econometrica, 57, 1403- 1430.
 Priestley, M. (1988) Non-linear and non-stationary time series analysis. London and San Diego: Academic
    Press.
Quandt, R. (1960) “Tests of the hypothesis that a linear regression system obeys two separate regimes”,
    Journal of the American Statistical Association, 55, 324-330.
Quandt, R. (1982) “Econometric           disequilibrium     models”, Econometric Reviews, 1, l-63.
Quandt, R. (1983) “Computational            problems and methods”, in: 2. Griliches and M.D. Intriligator,                    eds.,
    Handbook of econometrics. Vol. 1. Amsterdam: North-Holland,                     699-746.
 Ramsey, J.B. (1969) “Tests for specification errors in classical linear least-squares                    regression analysis”,
    Journal of the Royal Statistical Society B, 31, 350-371.
Rice, J. (1984) “Boundary modification           for kernel regression”, Communications in Statistics, Theory and
    Methods, 13, 893-900.
Robinson,       P.M. (1983) “Non-parametric          estimation     for time series models”, Journal of Time Series
    Analysis, 4, 185-208.
Robinson, P.M. (1988) “Root-N-consistent              semiparametric        regression”, Econometrica, 56, 931-954.
Robinson, P.M. (1991) “Consistent nonparametric                 entropy-based        testing”, Reuiew of Economic Studies,
    437-453.
Saikkonen,       P. and R. Luukkonen        (1988) “Lagrange       multiplier tests for testing nonlinearities            in time
    series models”, Scandinavian Journal of Statistics, 15, 55-68.
Scheinkman,       J.A. (1990) “Nonlinearities”in       econor&c dynamics”, Economic Journal, 100, Supplement,
    33-48.
Seber, G.A.F. and C.J. Wild (1989) Nonlinear regression. New York: Wiley.
Shumway, R.H., AS. Azari and Y. Pawitan (1988) “Modeling mortality fluctuations                               in Los Angeles as
   functions of pollution and weather effects”, Environmental Research, 45, 224-241.
Silverman, B.W. (1984) “Spline smoothing: the equivalent variable kernel method”, Annals of Statistics,
    12,898-916.
Skaug, H. and D. Tjastheim (1993a) “Nonparametric                    tests of serial independence”,          in: T. Subba Rao,
   ed., The M.B. Priestley Birthday Volume. London: Chapman and Hall, 207-229.
Skaug, H. and D. Tjestheim (1993b) “A nonparametric                 test ofserial independence         based on the empirical
   distribution     function”, Biometrika, 80, 591-602.
Ch. 48: Aspects ofModelling Nonlinear Time Series                                                                        2957


Skaug, H. and D. Tjostheim (1993~) Measures of distance between densities with application                            to testing
   for serial independence.      Preprint, Department        of Mathematics,        University of Bergen.
Stensholt, B.K. and D. Tjostheim (1987) “Multiple bilinear time series models”, Journal of Time Series
   Analysis, 8,221-233.
Stinchcombe,        M. and H. White (1989) “Universal approximations                   using feedforward        networks with
   non-sizmoid       hidden laver activation functions”, in: Proceedings of the International Joint Conference
   on Ne&al Networks, Washington, D.C. San Diego: SOS Printing,.I: 613-618.
Subba Rao, T. and M.M. Gabr (1980) “A test for linearity of stationary                        time series”, Journal ofTime
   Series Analysis, 1, 145-158.
Subba Rao, T. and M.M. Gabr (1984) “An introduction                     to bispectral analysis and bilinear time series
   models”, in: Lecture Notes in Statistics, 24, New York: Springer.
Sugihara, G. and R.M. May (1990) “Nonlinear                    forecasting     as a way of distinguishing          chaos from
   measurement        error in time series”, Nature, 344, 1344741.
Terasvirta, T. (1990) Power properties of linearity tests for time series. University Of California,                          San
    Diego, Department        of Economics, Discussion Paper No. 90-l 5.
Terlsvirta,      T. (1994) “Specification,      estimation    and evaluation        of smooth transition        autoregressive
    models”, Journal of the American Statistical Association, 89,208-218.
Terasvirta,     T. and H.M. Anderson (1992) “Modelhng                 nonlinearities     in business cycles using smooth
    transition autoregressive      models”, Journal of Applied Econometrics, 7, S119-S136.
Terasvirta, T., C.-F. Lin and C.W.J. Granger (1993) “Power of the neural network linearity test”, Journal
    of Time Series Analysis, 14, 209-220.
Tibshirani,      R. (1988) “Estimating       optimal transformations          for regression via additive and variance
    stabilization”,    Journal of the American Statistical Association, 83, 5599568.
Tjostheim, D. (1986) “Some doubly stochastic time series models”, Journal of Time Series Analysis, 7,
    51-72.
Tjostheim, D. (1994) “Nonlinear             time series: A selective review”, Scandinavian Journal of Statistics,
    (forthcoming).
Tjastheim, D. and B. Auestad (1994a) “Nonparametric                    identification     of nonlinear time series: Projec-
    tions”, Journal of the American Statistical Association, 89 (forthcoming).
Tjastheim, D. and B. Auestad (1994b) “Nonparametric                   identification    of nonlinear time series: Selecting
    significant lags”, Journal of the American Statistical Association, 89 (forthcoming).
Tong, H. (1990) Non-linear time series. A dynamical system approach. Oxford: Oxford University Press.
Truong, Y.K. and C. Stone (1992) “Nonparametric                 function estimation involving time series”, Annals of
    Statistics, 20, 77-97.
Tsay, R.S. (1986) “Nonlinearity         tests for time series”, Biometrika, 73, 461-466.
Tsay, R.S. (1989) “Testing and modeling threshold autoregressive                     processes”, Journal of the American
    Statistical Association, 84, 23 l-240.
Tsay, R.S. (1992) “Model checking via parametric bootstraps                   in time series analysis”, Applied Statistics,
    41, 1-15.
Ullah, A. (1989), ed., Semiparametric and nonparametric econometrics. Heidelberg: Physica-Verlag.
Weiss, A. (1986) “ARCH and bilinear time series models: Comparison                           and combination”,       Journal of
    Business and Economic Statistics, 4, 59-70.
White, H. (1984) Asymptotic theory for econometricians: Orlando, FL; Academic Press.
White, H. (1989) “Some asymptotic               results for learning in single hidden-layer             feedforward     network
    models”, Journal ofthe American Statistical Association, 84, 100331013.
Wooldridge, J.M. (1990) “A unified approach to robust, regression-based                    specification tests”, Econometric
    Theory, 6, 17-43.
Yakowitz, S. (1987) “Nearestneighbour                 methods for time series analysis”, Journal of Time Series
    Analysis, 8, 235-247.



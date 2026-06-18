---
normalized_id: shared-pdf-reference-vector-autoregressions-and-cointegration
exam_code: SHARED
material_scope: vector autoregressions and cointegration.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Vector Autoregressions and Cointegration.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-vector-autoregressions-and-cointegration

Chapter 47


VECTOR AUTOREGRESSIONS                                                  AND
COINTEGRATION*

MARK    W. WATSON

Northwestern University and Federal Reserve Bank of Chicago


Contents

Abstract                                                                                                    2844
1. Introduction                                                                                             2844
2. Inference in VARs with integrated                                regressors                              2848
     2.1.    Introductory       comments                                                                     2848
     2.2.    An example                                                                                     2848
     2.3.    A useful lemma                                                                                  2850
     2.4.    Continuing       with the example                                                              2852
     2.5.    A general      framework                                                                        2854
     2.6.    Applications                                                                                   2860
     2.7.    Implications       for econometric          practice                                            2866
3.   Cointegrated             systems                                                                       2870
     3.1.    Introductory       comments                                                                     2870
     3.2.    Representations        for the I(1) cointegrated          model                                2870
     3.3.    Testing    for cointegration        in I(1) systems                                             2876
     3.4.    Estimating       cointegrating      vectors                                                     2887
     3.5.    The role of constants            and trends                                                     2894
4.   Structural         vector autoregressions                                                              2898
     4.1.    Introductory       comments                                                                     2898
     4.2.    The structural       moving       average     model, impulse      response   functions   and
             variance     decompositions                                                                     2899
     4.3.    The structural       VAR representation                                                         2900
     4.4.    Identification      of the structural        VAR                                                2902
     4.5.    Estimating       structural      VAR models                                                     2906
References                                                                                                  2910

   *The paper has benefited from comments by Edwin Denson, Rob Engle, Neil Ericsson, Michael
Horvath, Soren Johansen,     Peter Phillips, Greg Reinsel, James Stock and students at Northwestern
University and Studienzentrum     Gerzensee. Support was provided by the National Science Foundation
through grants SES-89910601       and SES-91-22463.

Handbook of Econometrics,  Fo~ume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elsevier Science B.V. All rights reserved
2844                                                                                    M. W. Watson


Abstract

This paper surveys three topics: vector autoregressive (VAR) models with integrated
regressors, cointegration,     and structural  VAR modeling.        The paper begins by
developing methods to study potential “unit root” problems in multivariate           models,
and then presents a simple set of rules designed to help applied researchers conduct
inference in VARs. A large number of examples are studied, including tests for
Granger causality, tests for VAR lag length, spurious regressions and OLS estimators
of cointegrating  vectors. The survey of cointegration       begins with four alternative
representations  of cointegrated systems: the vector error correction model (VECM),
and the moving average, common trends and triangular representations.              A variety
of tests for cointegration     and efficient estimators    for cointegrating     vectors are
developed and compared. Finally, structural VAR modeling is surveyed, with an
emphasis on interpretation,     econometric identification    and construction    of efficient
estimators. Each section of this survey is largely self-contained.      Inference in VARs
with integrated   regressors is covered in Section 2, cointegration          is surveyed in
Section 3, and structural VAR modeling is the subject of Section 4.

1.     Introduction

 Multivariate    time series methods are widely used by empirical economists,                     and
econometricians       have focused a great deal of attention at refining and extending
 these techniques so that they are well suited for answering economic questions.
This paper surveys two of the most important                recent developments        in this area:
vector autoregressions        and cointegration.
    Vector autoregressions        (VARs) were introduced         into empirical economics by
Sims (1980), who demonstrated            that VARs provide a flexible and tractable frame-
work for analyzing economic time series. Cointegration                was introduced in a series
of papers by Granger (1983) Granger and Weiss (1983) and Engle and Granger
(1987). These papers developed a very useful probability                 structure for analyzing
both long-run and short-run economic relations.
    Empirical researchers immediately began experimenting                with these new models,
and econometricians        began studying the unique problems that they raise for econo-
metric identification,      estimation    and statistical inference. Identification        problems
had to be confronted immediately in VARs. Since these models don’t dichotomize
variables into “endogenous”           and “exogenous,”      the exclusion restrictions       used to
identify traditional     simultaneous      equations models make little sense. Alternative
sets of restrictions,    typically involving the covariance          matrix of the errors, have
been used instead.         Problems      in statistical   inference    immediately       confronted
researchers using cointegrated          models. At the heart of cointegrated            models are
“integrated”    variables, and statistics constructed         from integrated      variables often
behave in nonstandard         ways. “Unit root” problems are present and a large research
effort has attempted to understand            and deal with these problems.
   This paper is a survey of some of the developments               in VARs and cointegration
that have occurred since the early 1980s. Because of space and time constraints,
certain topics have been omitted. For example, there is no discussion of forecasting
or data analysis; the paper focuses entirely on structural                  inference. Empirical
2846                                                                                     M. W. Watson


proposition        is testable without a complete specification            of the structural    model.
The basic idea is that when money and output are integrated, the historical data
contain permanent            shocks. Long-run neutrality can be investigated            by examining
the relationship        between the permanent changes in money and output. This raises
two important          econometric     questions. First, how can the permanent             changes in
the variables be extracted from the historical time series? Second, the neutrality
proposition        involves “exogenous”          components      of changes in money; can these
components be econometrically              identified? The first question is addressed in Section
3, where, among other topics, trend extraction in integrated processes is discussed.
The second question concerns structural identification                and is discussed in Section 4.
    One important restriction of economic theory is that certain “Great Ratios” are
stable. In the eight-variable          system, five of these restrictions       are noteworthy.    The
first four are suggested by the standard neoclassical                  growth model. In response
to exogenous          growth in productivity          and population,      the neoclassical    growth
model predicts that output, consumption                  and investment     will grow in a balanced
way. That is, even though y,, c,, and i, increase permanently                in response to increases
in productivity        and population,      there are no permanent       shifts in c, - y, and i, - y,.
The model also predicts that the marginal product of capital will be stable in the
long run, suggesting that similar long-run stability will be present in ex-post real
interest rates, r - Ap. Absent long-run                 frictions in competitive      labor markets,
real wages equal the marginal product of labor. Thus, when the production                        func-
tion is Cobb-Douglas             (so that marginal and average products are proportional),
(w - p) - (y - n) is stable in the long run. Finally, many macroeconomic                        models
of money [e.g. Lucas (1988)] imply a stable long-run relation between real balances
(m - p), output (y) and nominal interest rates (r), such as m - p = /3,y + &r; that
is, these models imply a stable long-run “money demand” equation.
    Kosobud and Klein (1961) contains one of the first systematic investigations                     of
these stability propositions.          They tested whether the deterministic          growth rates in
the series were consistent with the propositions.               However, in models with stochastic
growth, the stability propositions            also restrict the stochastic trends in the variables.
These restrictions           can be described succinctly.         Let x, denote the 8 x 1 vector
(y,, c,, i,, n,, w,, m,, pr, rJ. Assume that the forcing processes of the system (productivity,
population,        outside money, etc.) are such that the elements of x, are potentially
I(1). The five stability propositions            imply that z, = CL’X,is I(O), where

                   1     1   -1         -0,        0
              -1         0        0          0     0
                   o-1            0          00
                   0     0        100
       cI=
                   0     0        100
                   0     0        0           10
                   0     0   -1         -1         0
                   0     0        0     -B,        1
Ch. 47:   Vector Autoregressions   and Cointegration                                                   2847



 The first two columns of IXare the balanced growth restrictions, the third column
 is the real wage - average labor productivity          restriction, the fourth column is stable
 long-run money demand restriction, and the last column restricts nominal interest
 rates to be I(0). If money and prices are I(l), Ap is I(0) so that stationary             real rates
 imply stationary       nominal rates.’
     These restrictions raise two econometric questions. First, how should the stability
 hypotheses be tested? This is answered in Section 3.3 which discusses tests for
 cointegration.     Second, how should the coefficients /?, and p, be estimated from the
 data, and how should inference about their values be carried out?* This is the subject
 of Section 3.4 which considers the problem of estimating cointegrating                   vectors.
     In addition to these narrow questions, there are two broad and arguably more
 important      questions about the business cycle behavior of the system. First, how
 do the variables respond dynamically              to exogenous shocks? Do prices respond
 sluggishly to exogenous changes in money? Does output respond at all? And if
 so, for how long? Second, what are the important                  sources of fluctuations     in the
 variables. Are business cycles largely the result of supply shocks, like shocks to
 productivity?     Or do aggregate demand shocks, associated with monetary and fiscal
 policy, play the dominant         role in the business cycle?
     If the exogenous       shocks of econometric          interest ~ supply shocks, monetary
 shocks, etc. ~ can be related to one-step-ahead             forecast errors, then VAR models
 can be used to answer these questions. The VAR, together with a function relating
 the one-step-ahead        forecast errors to exogenous            structural shocks is called a
 “structural” VAR. The first question ~ what is the dynamic response of the variables
 to exogenous shocks? ~ is answered by the moving average representation                       of the
 structural VAR model and its associated impulse response functions. The second
question - what are the important sources of economic fluctuations?                  ~ is answered
 by the structural VAR’s variance decompositions.               Section 4 shows how the impulse
responses and variance decompositions                can be computed from the VAR. Their
calculation and interpretation        are straightforward.     The more interesting econometric
questions involve issues of identification          and efficient estimation in structural VAR
models. The bulk of Section 4 is devoted to these topics.
    Before proceeding to the body of the survey, three organizational               comments are
useful. First, the sections of this survey are largely self contained. This means that
the reader interested in structural VARs can skip Sections 2 and 3 and proceed
directly to Section 4. The only exception to this is that certain results on inference
in cointegrated       systems, discussed in Section 3, rely on asymptotic             results from
Section 2. If the reader is willing to take these results on faith, Section 3 can be
read without the benefit of Section 2. The second comment is that Sections 2 and



    ‘Since nominal rates are I(0) from the last column of a, the long run interest semielasticity of money
demand, fi,, need not appear in the fourth column of a.
   ‘The values of BYand b, are important     to macroeconomists    because they determine (i) the relation-
ship between the average growth rate of money, output and prices and (ii) the steady-state        amount of
seignorage associated with any given level of money growth.
2848                                                                             M. W. Watson


3 are written at a somewhat higher level than Section 4. Sections 2 and 3 are based
on lecture notes developed for a second year graduate econometrics             course and
assumes that students      have completed     a traditional    first year econometrics
sequence. Section 4, on structural    VARs, is based on lecture notes from a first
year graduate course in macroeconomics        and assumes only that students have a
basic understanding   of econometrics at the level of simultaneous    equations. Finally,
this survey focuses only on the classical statistical analysis of I(1) and I(0) systems.
Many of the results presented here have been extended to higher order integrated
systems, and these extensions will be mentioned       where appropriate.


2.     Inference in VARs with integrated regressors

2.1.    Introductory   comments

Time series regressions that include integrated variables can behave very differently
than standard regression models. The simplest example of this is the AR( 1) regression:
y, = py,- 1 + E,, where p = 1 and E, is independent        and identically distributed    with
mean zero and variance g2, i.i.d.(0,a2). As Stock shows in his chapter of the
Handbook,      p, the ordinary least squares (OLS) estimator of p, has a non-normal
asymptotic     distribution,   is asymptotically    biased, and yet is “super consistent,”
converging to its true value at rate T.
    Estimated coefficients in VARs with integrated           components,   can also behave
differently than estimators in covariance stationary          VARs. In particular, some of
the estimated coefficients behave like p, with non-normal         asymptotic distributions,
while other estimated coefficients behave in the standard way, with asymptotic
normal large sample distributions.          This has profound consequences       for carrying
out statistical inference, since in some instances, the usual test statistics will not
have asymptotic        x2 distributions,    while in other circumstances     they will. For
example, Granger causality test statistics will often have nonstandard            asymptotic
distributions,    so that conducting     inference using critical values from the x2 table
is incorrect. On the other hand, test statistics for lag length in the VAR will usually
be distributed     x2 in large samples. This section investigates these subtleties, with
the objective of developing a set of simple guidelines that can be used for conducting
inference in VARs with integrated components.             We do this by studying a .model
composed of I(0) and I(1) variables. Although results are available for higher order
integrated systems [see Park and Phillips (1988, 1989), Sims et al. (1990) and Tsay
and Tiao (1990)], limiting attention to I(1) processes greatly simplifies the notation
with little loss of insight.


2.2.    An example

Many     of the complications     in statistical   inference   that arise in VARs with unit
Ch. 47: Vector Autoregressions      and Cointegration                                                          2849


roots can be analyzed            in a simple univariate            AR(2) model3

      Y,=4lY,-,        + 42Yt-2        + ‘I,.                                                                 (2.1)

Assume that #i + $2 = 1 and Ic$~/ < 1, so that process contains one unit root. To
keep things simple, assume that qr is i.i.d.(O, 1) and normally distributed [n.i.i.d.(O, l)].
Let x, = (y,_ 1yt_ 2)’ and C$= (4i 42)‘, so that the OLS estimator is 4 = (Cx,xi)- ’ x
(CX,Y,) and (4~- 4) = (Cx,x:)-‘(C-V,).         (U n 1ess noted otherwise, C will denote
x:,‘=, throughout    this paper.)
    In the covariance stationary model, the large sample distribution       of C$is deduced
by writing T1’2($ - 4) = (~~‘~x,x~)~‘(~~“*~x~~~),            and then using a law oflarge
numbers to show that T-‘Cx,x;         A E(x,xj) = V, and a central limit theorem to
show that T-112C~,q, -%N(O, V). These results, together with Slutsky’s theorem,
imply that T1j2($ - 4) %N(O, V-l).
    When the process contains a unit root, this argument fails. The most obvious
reason is that, when p = 1, E(x,x:) is not constant, but rather grows with t. Because
of this, T-‘Cx,x:     and Tel”Cxtqt    no longer converge: convergence requires that
Cxrxi be divided by T2 instead of T, and that CXJ, be divided by T instead of
T’12. Moreover, even with these new scale factors, Tp2Cx,xi                converges to a
random matrix rather than a constant, and T- ’ Cx,q, converges to a non-normal
random vector.
    However, even this argument is too simple, since the standard approach can be
applied to a specific linear combination       of the regressors. To see this, rearrange
the regressors in (2.1) so that

     Y, = Y~AY,-~ +Y*Yt-I                +rll,                                                                (2.2)


where yi = - d2 and y2 = C#J~
                            + b2. Regression (2.2) is equivalent to regression                                (2.1)
in the sense that the OLS estimates of 4i and 42 are linear transformations                                      of
the OLS estimators of yi and y2. In terms of the transformed     regressors


                                                                                                              (2.3)


and the asymptotic behavior                of pi and f2 (and hence 6) can be analyzed by studying
the large sample behavior                  of the cross products            CAY:_,,CAY,_,Y,-,,CY:-,,

CAY~-~V~ and CY,-in,.
  To begin, consider the terms CAY:_ 1 and CAY,_ lvr. Since 41 + 42 = y2 = 1,


     AY, = - 42Ayr_l           + nl.                                                                          (2.4)

   3Many   of the insights   developed      by analyzing   this example   are discussed   in Fuller (1976) and Sims
(1978).
2850                                                                          M. W. Watson


Since 1c$~1< 1, Ayt (and hence Ay,_ , ) is covariance    stationary with mean zero.
Thus, standard       asymptotic  arguments  imply that T- ‘CAY:_ 1 An&           and
 T-“*CAy,_      iqt %N(O,G&).   This means that the first regressor in (2.2) behaves
in the usual way. “Unit root” complications       arise only because of the second
regressor, y, _ 1. To analyze the behavior of this regressor, solve (2.4) backwards
for the level of y,:

       y,=u    +dQ-151+Yo+s,>                                                         (2.5)

where rl=Ci=iyls       and s,= -(l +(p2)-1C~~~(-~2)i+1ylt_i,        and vi=0 for ib0
has been assumed for simplicity. Equation        (2.5) is the BeveridgeeNelson      (1981)
decomposition     of y,. It decomposes y, into the sum of a martingale or “stochastic
trend” [(l + 4,)) ‘&I, a constant (y,) and an I(0) component        (s,). The martingale
component     has a variance that grows with t, and (as is shown below) it is this
component     that leads to the nonstandard    behavior of the cross products Cy:_ i,
CY~-~AY~-~ and D-i%
   Other types of trending regressors also arise naturally in time series models and
their presence affects the sampling    distribution   of coefficient estimators. For
example, suppose that the AR(2) model includes a constant, so that

       Y,=~+~,AY,-,+y,y,~,+~lr.                                                       (2.6)
This constant introduces two additional complications.   First, a column of l’s must
be added to the list of regressors. Second, solving for the level of y, as above:

       y,=(l   + $+-iClt+(l     + &-14,+yo+st.                                        (2.7)

The key difference between (2.5) and (2.7) is that now y, contains the linear trend
(1 + 4*)-l~lt. This means that terms involving yrP 1 now contain cross products
that involve linear time trends. Estimators of the coefficients in equation (2.6) can
be studied systematically     by investigating   the behavior of cross products of(i) zero
mean stationary components (like qt and Ay,_ i), (ii) constant terms, (iii) martingal,es
and (iv) time trends. We digress to present a useful lemma that shows the limiting
behavior of these cross products. This lemma is the key to deriving the asymptotic
distribution   for coefficient estimators      and test statistics for linear regressions
involving I(0) and I(1) variables, for tests for cointegration      and for estimators of
cointegrating   vectors. While the AR(2) example involves a scalar process, most of
the models considered in this survey are multivariate,         and so the lemma is stated
for vector processes.


2.3.   A useful lemma

Three key results are used in the lemma. The first is the functional         central limit
theorem. Letting qt denote an n x 1 martingale difference sequence,         this theorem
Ch. 47: Vector Autoregressions   and Cointegration                                                   2851


expresses the limiting behavior        of the sequence of partial sums 5, = xi= tqs,
t= l,..., T, in terms of the behavior of an II x 1 standardized     Wiener or Brownian
motion process B(s) for 0 <s < 1.4 That is, the limiting behavior of the discrete
time random walk 5, is expressed in terms of the continuous            time random walk
B(s). The result implies, for example, that T 1’2iJ,sTl*B(s) - N(0, s), for 0 < s < 1,
where [ST] denotes the first integer less than or equal to ST. The second result used
in the lemma is the continuous       mapping theorem. Loosely, this theorem says that
the limit of a continuous    function is equal to the function evaluated at the limit of
its arguments. The nonstochastic      version of this theorem implies that T “C,‘= 1t =
 T-‘~T=I(t/T)+~$ds         = $. The stochastic version implies that T-312CT=1<, =
 T-‘CT=1(T-“25,)jS~B(s)ds.          The final result is the convergence of Tp’Cyt_lq:
to the stochastic integral IkB(s) dB(s)‘, which is one of the moments directly under
study. These key results are discussed in Wooldridge’s chapter of the Handbook.
For our purposes they are important         because they lead to the following lemma.

Lemma 2.3

Let 11, be an n x 1 vector of random              variables  with E(v~[v~_  . . , or) = 0,r,   .




E(~,~:l~,~ l,. . . , u],) = In, and bounded fourth moments. Let F(L) = C,“=,FiLi and
G(L) = C,p)=, GiLi denote         two matrix polynomials    in the lag operator       with
C,&ilFil    < CC and C,&ilGil < 00. Let 5, = C:=rvs, and let B(s) denote an n x 1
dimensional    Brownian motion process. Then the following converge jointly:


   (4 T- “2CWh,                -N)~B(s)ds,
   (b) T-‘CS,s:+l              *j-B(s)dW’,
   (4 T- ‘CS,CWh,l’            a F( 1)’ + jB(s) dB(s)‘F( l)‘,
   (d) T- ’ C C’(L)V,ICG(L)~I,I’JL CZ 1FiGi>
   (4 T-3’2C~CWhr+Il’          =+ dB(s)‘F( l)‘,
   (f)    T-3’%&                               * IB(s) ds,
   (g)    T-‘C5,5:                             =+(s)B(s)’    ds,
   (h)    T-5’2Ct&                             =s {sB(s) ds,

where, to simplify notation 1; is denoted by J. The lemma follows from results in
Chan and Wei (1988) together with standard versions of the law of large numbers
and the central limit theorem for martingale     difference sequences [see White
(1984)]. Many versions of this lemma (often under assumptions      slightly different
from those stated here) have appeared in the literature. For example, univariate
versions can be found in Phillips (1986, 1987a), Phillips and Perron (1988) and
Solo (1984), while multivariate   versions (in most cases covering higher order
integrated processes) can be found in Park and Phillips (1988, 1989), Phillips and


  “Throughout    this paper B(s) will denote    a multivariate  standard Brownian motion process, i.e., an
n x 1 process with independent   increments     B(r) - B(s) that are distributed N(O,(r - s)l,) for r > s.
2852                                                                                                          M. W. Watson


Durlauf (1986) Phillips and Solo (1992) Sims et al. (1990) and Tsay and Tiao
(1990).
   The specific regressions that are studied below fall into two categories: (i) regres-
sions that include a constant and a martingale          as regressors or, (ii) regressions
that include a constant, a time trend and a martingale as regressors. In either case,
the coefficient on the martingale is the parameter of interest. The estimated value
of this coefficient can be calculated by including a constant or a constant and time
trend in the regression, or, alternatively, by first demeaning or detrending the data.
It is convenient    to introduce    some notation    for the demeaned     and detrended
martingales and their limiting Brownian motion representations._Thus          let tf = 5, -
 T-‘CT= it, denote the demeaned martingale, and let 5: = t, - pi - b2t denote the
detrended martingale, where pi and b, are the OLS estimators obtained from the
regression of 5, onto (1 t). Then, from the lemma, a straightforward   calculation yields




and
       T-     1’2~~sTldl(S) -
                                             sl  0
                                                     B(r) dr = W(s)




                                                                           1

       T-“2~;s,,*B(s)                    -        1 a,(r)B(rjdr    - s         a,(r)B(r)dr    = p’(s),
                                             s0                          s0

where a,(r) = 4 - 6r and a2(r) = - 6 + 12r.



2.4.    Continuing                 with the example


We are now in a position                         to complete      the analysis       of the AR(2) example.      Consider
a scaled version of (2.3)



                                                                                                         1
            T”2(fl       -     Yl) =                 T-‘day:_,                 T-3’2~Ayt_1yr-l           -’


                                                     T-
              TV2    -       ~2)    I[           T-3’2bv&-l                         T-2C~:-      1

                                             X
                                                        1’2CA~t-
                                                      T-‘&~lvt
                                                                    lylt
                                                                           1
From (2.5) and result (g) of the lemma, TP2Cyf_       1*(l + 42))2JB(s)2 ds and from
(b) T~‘Cyt_iq,=(l        +4,)-‘JB(s)dB(s).    Finally, noting from (2.4) that Ayt=
(1 + b2L)-‘qf,   (c) implies that T~3’2CAyt~1y,~1      LO. This result is particularly
important because it implies that the limiting scaled “X’X”matrix    for the regression
is block diagonal. Thus,
Ch. 47: Vector Autoregressions   and Cointegration                                            2853


and




    Two features of these results are important.     First, y*i and y**converge at different
rates. These rates are determined      by the variability of their respective regressors:
yi is the coefficient on a regressor with bounded variance, while y2 is the coefficient
on a regressor with a variance that increases at rate t. The second important
feature is that ‘y*ihas an asymptotic        normal distribution,      while the asymptotic
distribution    of f2 is non-normal.     Unit root complications         will affect statistical
inference about y2 but not yl.
    Now consider the estimated regression coefficients 0, and 4, in the untransformed
regression. Sin_ce 6, = - fl, T~‘*(c$~ - 4*) 3 N(0, o&f). Furthermore,              since 4, =
pi + ‘y^*,T1/*(bl,    4,) = P*(p, - yi) + T1i2(y”2- y2) = T1/2(y”l - y,) + o,(l). That
is, even though 4i depends on both 7, and y**,the “super consistency” of y**implies
that its sampling error can be ignored in large samples. Thus, T1’*(Jl - 4,) 3
N(O,a&,*), so that both ~$i and b2 converge at rate T”* and have asymptotic
normal distributions.    Their joint distribution  is more complicated. Since ~$t + c$* =
y2, T1’2(41 - 4,) + Ty*(4,      - c$*) = T1’*(ji2 - y2) LO       and the joint asymptotic
distribuiion    of T1/*(dl - 4,) and T1’*(4* - 4,) is singular. The liner                combi-
nation 4l + 42 converges at rate T to a non-normal            distribution:    T[(+, + 4,) -
(4, + &)I= 73, - Y,)*U + ~2)[ISB(s)2dSl-111SB(S)dB(S)l.
   There are two important practical consequences             of these results. First, inference
about 41 or about dz can be conducted in the usual way. Second, inference about
the sum of coefficients 41 + e52 must be carried out using nonstandard                asymptotic
distributions.   Under the null hypothesis, the t-statistic for testing the null H,: 4, = c
converges to a standard normal random variable, while the r-statistic for testing
the null hypothesis         H,: +1 + c#* = 1 converges      to [sB(s)* ds]-“*[JB(s)dB(s)],
which is the distribution       of the Dickey-Fuller      T statistic (see Stock’s chapter of
the Handbook).
   As we will see, many of the results developed for the AR(2) carry over to more
general settings. First, estimates of linear combinations            of regression coefficients
converge at different rates. Estimators that correspond to coefficients on stationary
regressors, or that can be written as coefficients on stationary regressors in a trans-
formed regression (yl in this example), converge at rate T”* and have the usual
asymptotic normal distribution.        Estimators that correspond to coefficients on I( 1)
regressors, and that cannot be written as coefficients on I(0) regressors in a trans-
formed regression (y2 in this example), converge at rate T and have a nonstandard
asymptotic     distribution.    The asymptotic     distribution      of test statistics is also
affected by these results. Wald statistics for restrictions on coefficients correspond-
ing to I(0) regressors have the usual asymptotic             normal or x2 distributions.         In
2854                                                                                         M. W. Watson


general, Wald statistics for restrictions  on coefficients that cannot be written as
coefficients on l(0) regressors have nonstandard      limiting distributions. We now
demonstrate   these results for the general VAR model with I(1) variables.



2.5.      A general framework

Consider          the VAR model


         Y,=a+       f     @iY,_i+E,,                                                                   (2.8)
                     i=l

where Y, is an n x 1 vector and E, is a martingale difference sequence with constant
conditional    variance Z, (abbreviated mds(Z’,)) with finite fourth moments. Assume
that the determinant of the autoregressive polynomial (I - @,z - @,z2 - ... - @,zp(
has all of its roots outside the unit circle or at z = 1, and continue to maintain
the simplifying assumption      that all elements of Y, are individually    I(0) or I(1).5
For simplicity, assume that there are no cross equation restrictions,         so that the
efficient linear estimators correspond to the equation-by-equation       OLS estimators.
We now study the distribution          of these estimators   and commonly       used test
statistics.’


2.5.1.      Distribution          of estimated   regression coejficients

To begin, write the ith equation                 of the model as

         Yi,t =   xip+‘i .f   ’                                                                         (2.9)

where yi,t is the ith element of Y,, X, = (1 Y:_ r Y:_ 2... Y:_,)’ is the (np + 1) vector
of regressors, /I is the corresponding    vector of regression coefficients, and F~,~is the
ith element of E,. (For notational     convenience   the dependence of p on i has been
suppressed.) The OLS estimator of fi is fl= (CX,Xi)-          ‘(CX,yi,,), so that B - /I =
(CX,x:)-l(Cx,Ei      ,)’
  As in the univariate               AR(2) model, the asymptotic       behavior   of b is facilitated     by

   5Higher order integrated processes can also be studied using the techniques discussed here, see Park
and Phillips (1988) and Sims et al. (1990). Seasonal unit roots (corresponding       to zeroes elsewhere on
the unit circle) can also be studied using a modification       of these procedures.    See Tsay and Tiao
(1990) for a careful analysis of this case.
   6The analysis in this section is based on a large body of work on estimation and inference in multi-
variate time series models with unit roots. A partial list of relevant references includes Chan and Wei
(1988) Park and Phillips (1988, 1989) Phillips (1988) Phillips and Durlauf (1986), Sims et al. (1990),
Stock (1987), Tsay and Tiao (1990), and West (1988). Additional       references are provided in the body
of the text.
Ch. 47: Vector Autoregressions and Cointegration                                                 2855


transforming   the regressors in a way that isolates the various stochastic and deter-
ministic trends. In particular, the regressors are transformed        as Z, = DX,, where
D is nonsingular     and Z, = (z~,,z~,~ ...z~,~)‘, where the zi,t will be referred to as
“canonical”   regressors. These regressors        are related to the deterministic   and
stochastic trends given in Lemma 2.3 by the transformation




or

      z, = F(L)V, -   1,




where v, = (9; 1 r: t)‘. The advantage        of this transformation       is that it isolates the
terms of different orders of probability.            For example, zi,( is a zero mean I(0)
regressor, z2 t is a constant,        the asymptotic        behavior    of the regressor z~,~ is
dominated      by the martingale      component      Fx3tt_ i, and z~,~ is dominated          by the
time trend Fd4t. The canonical regressors z*,~ and z~,~ are scalars, while zi f and
zs,* are vectors. In the AR(2) example analyzed above, zl,* = Ay,_ i = (1 + 4,L)-iqr-               i,
so that F, i(L) = (1 + c$~L)- ‘; z~,~ is absent, since the model did not contain a
constant;~,,,=y,_~=(1+~,)-‘5,_,+y,+s,_,,sothatF,,=(l+~,)-’,F,,=y,
andF,,(L)=&(l          +$J1(l      +~#~~L)-‘;andz,,,        is absent since y, contains no deter-
ministic drift.
    Sims et al. (1990) provide a general procedure for transforming               regressors from
an integrated VAR into canonical form. They show that Z, can always be formed
so that the diagonal blocks, Fii, i > 2 have full row rank, although some blocks
may be absent. They also show that F,, = 0, as shown above, whenever the VAR
includes a constant. The details of their construction               need not concern us since,
in practice, there is no need to construct the canonical regressors. The transfor-
mation from the X, to the Z, regressors is merely an analytic device. It is useful for
two reasons. First, X:D'(D')-       '/I = Ziy,with y = (D')-       'p.Thus the OLS estimators
of the original and transformed        models are related by 0'9= b.Second, the asymp-
totic properties of $ are easy to analyze because of the special structure of the
regressors. Together these imply that we can study the asymptotic                     properties of
b by first studying the asymptotic           properties of y^ and then transforming             these
coefficients into the /?s.
   The transformation       from X, to Z, is not unique. All that is required is some
transformation      that yields a lower triangular           F(L) matrix. Thus, in the AR(2)
example we set ~i~=Ay~_~             and ~~~=y~_~, but an alternative              transformation
would have set z1 f = Ay, _ 1 and z3 , = y, _ 2. Since we always transform results for
2856                                                                                                     M.W. Watson


the canonical   regressors Z, back into results for the “natural” regressors X,, this
non-uniqueness     is of no consequence.
   We now derive the asymptotic properties of y*constructed          from the regression
Y,,~= Z;v + ei f. Writing E, = ,Xj” ql, where qt is the standardized     n x 1 martingale
difference sequence from Lemma 2.3, then Q = CO’Q= q:o, where w’ is the ith row
of ,YE12, and y*- y = (CZ,Z~)-‘(CZ&O).           Lemma 2.3 can be used to deduce the
asymptotic behavior of CZ,Z: and CZ,Y@O. Some care must be taken, however,
since all of the z~,~elements of Z, are growing at different rates. Assume that zr,,
contains k, elements, z~,~ contains k, elements, and partition y conformably          with
Z, as y = (yr yz y3,y4)‘, where yj are the regression coefficients corresponding    to Zj,t.
Let




                                                                      1
                       P2z       kl
                                             0         0          0

                         0               T1’2          0          0
       Yy,=
                         0                   0       TI!i,        0
                                                             ~312
                   :     0                   0        0

and consider    Yu,(P - y) = (Y’U, ‘CZ,Z; Y; ‘)-‘( Y; ‘CZ,I@O). The matrix           !PT
multiplies the various blocks of (9, - y,),CZ,Z;,   and CZ,q, by the scaling factors
appropriate  from the lemma. The first block of coefficients, yl, are coefficients on
zero mean stationary   components     and are scaled up by the usual factor of T1j2;
the same scaling factor is appropriate    for yz, the constant term; the parameters
making up y3 are coefficients on regressors that are dominated       by martingales,
and these need to be scaled by T; finally, y4 is a coefficient on a regressor that is
dominated   by a time trend and is scaled by 7’3/2.
   Applying the lemma, we have Y; ’ CZ,Z: !P; ’ * V, where, partitioning        I/ con-
formably with Z,:

     T- l&.tz;,t                       AC        Fll,jF;l    (j           = 1/11?

     T-‘&J2                           -+F;,                               = V 227

     T-2xz3,,zj              t        *F33                                    V33,
                                                 LJ

     T-3~(z,,,)z                      A+                                  =   V449

    T-j’2~zl,tz;             f        -I1-,0                              = Vlj = Vi1           for   j = 2,3,4,

    T-3’2~z2,,z;                 f    =sF,,          B(s)‘dsF;,           = v,, = V;,,
                                                 s
                                        P F,,F,,
    T-2CZ2.tZ4,,                      ----                                = v24      =   v42y
                                                 2

    T- 5’2cz3,tz4,t                   =aF,,          sB(s)dsF,,           =   v,,    =   Vk3,
                                                 s
Ch. 47: Vector Autoregressions            and Cointegration                                     2857


where the notation reflects the fact that F,, and F,, are scalars. The limiting value
of this scaled moment matrix shares two important characteristics   with its analogue
in the univariate   AR(2) model. First, V is block diagonal with Vlj = 0 for j # 1.
(Recall that in the AR(2) model T-312CAyt_1yt_1          LO.) Second, many of the
blocks of V contain random variables. (In the AR(2) model T-2Cy:_         1 converged
to a random variable.)
   Now, applying the lemma to YU, ‘CZ,q:w          yields Y, ‘CZ,r]iw=- A, where,
partitioning   A conformably  with Z,:


      T-li2&              tq;w Gv[O,(o’o)vll]                       = A,,
                                                    n


      T- ““~z2            ,q;co = F,,                   dB(s)‘w     = 4,
                                                i
      T- ‘cz,            J;W          *Fa3        B(s)dB(s)‘w       = A,,
                                                s
                                                 I”




Putting the results together, Y,(p - y)* V’A, and three important results follow.
First, the individual coefficients converge to their values at different rates: y^i and
9, converge to their values at rate T’12, while all of the other coefficients converge
more quickly. Second, the block diagonality             of I/ implies that Tli2(y*, - y,) 3
N(0, cf V;,‘), where 0: = w’o = var(sf). Moreover, A, is independent           of Aj forj > 1
[Chan and Wei (1988, Theorem 2.2)], so that T”‘(y^, - yl) is asymptotically
independent     of the other estimated coefficients. Third, all of the other coefficients
will have non-normal     limiting distributions,    in general. This follows because Vj3 # 0
for j > 1, and A, is non-normal.      A notable exception to this general result is when
the canonical regressors do not contain any stochastic trends, so that z~,~ is absent
from the model. In this case I/ is a constant and A is normally distributed,          so that
the estimated coefficients have a joint asymptotic normal distribution.’         The leading
example of this is polynomial          regression, when the set of regressors contains
covariance    stationary   regressors and polynomials          in time. Another important
example is given by West (1988), who considers the scalar unit root AR(l) model
with drift.
   The asymptotic distribution      of the coefficients /? that correspond to the “natural”
regressors X, can now be deduced. It is useful to begin with a special case of the
general model,

     Yi,,   =   PI   +   x;,*B2   +    x;,t83           +   ‘i,r>                             (2.10)


  ‘A,, A,, and A, are jointly normally distributed since Js’dB(s)‘w is a normally distributed random
variable with mean 0 and variance (o’w)J?ds.
2858                                                                                      M. W. Watson


where ~i,~ = 1 for all t,~~,~ is an h x 1 vector of zero mean I(0) variables and x3,(
contains the other regressors. It is particularly    easy to transform this model into
canonical    form. First, since x~,~ = 1, we can set z~,~ = ~i,~; thus, in terms of the
transformed     regression, 0, = y2. Second, since the elements of x~,~ are zero mean
I(0) variables, we can set the first h elements of z~,~ equal to x~,~; thus /3* is equal
to the first h elements of yi. The remaining elements of z, are linear combination
of the regressors that need not concern us here. In this example, since fi2 is a subset
of the elements of yi, T”‘(B, - b2) is asymptotically           normal and independent
of the coefficients corresponding      to trend and unit root regressors. This result is
very useful because it provides a constructive        sufficient condition   for estimated
coefficients to have an asymptotic normal limiting distribution:       whenever the block
of coefficients can be written as coefficients on zero mean I(0) regressors in a model
that includes a constant term they will have a joint asymptotic normal distribution.
   Now consider the general model. Recall that fi= D’y*. Let dj denote the jth
column of D, and partition this conformably        with y, so that dj =it;j_d;jd\jdkj)),
where dij and qi are the same dimension. Then thejth elem_ent of /? is pj = Cidijpi.
Since the components        of y^ converge at different rates, flj will converge at the
slowest rate of the gi included in the sum. Thus, when d,j # 0, pj will converge at
rate T1/2, the rate of convergence      of $,.


2.5.2.       Distribution   of Wald test statistics

Consider Wald test statistics for linear hypotheses              of the form R/3 = r, where R is
a q x k matrix with full row rank,




(Recall that fi corresponds     to the coefficients in the ith equation, so that W tests
within-equation   restrictions.) Letting Q = R(D’), an equivalent way of writing the
Wald statistic is in terms of the canonical          regressors Z, and their estimated
coefficients y^,


         w   =   (Q?- 4’CQ(%Z;)-‘Q’l-          ‘(Qr* - 4
                              6;

Care must be taken when analyzing the large sample behavior of W because the
individual coefficients in p converge at different rates. To isolate the different com-
ponents, it is useful to assume (without loss of generality) that Q is upper triangular.*

  *This assumption     is made without loss of generality since the constraint Qy = r (and the resulting
Wald statistic) is equivalent to CQy = Cr, for nonsingular   C. For any matrix Q, C can chosen so that
CQ is upper triangular.
Ch. 47: Vector Autoregressions       and Cointegration                                                    2859


Now, partition Q, conformably        with 9 and the canonical regressors making up Z,,
so that Q = [qij] where qij is a qi x kj matrix representing    qi constraints on the kj
elements in yj. These blocks are chosen SO that qii has full row rank and qij = 0
for i <j. Since the set of constraints   Qy = r may not involve yi, the blocks qij might
be absent for some i. Thus, for example, when the hypothesis concerns only y3,
then Q is written as Q = [q31q32q33q34],        where q31 = 0, q32 = 0 and q33 has full
row rank. Partition r = (I; r; r; rk)’ conformably     with Q, where again some of the
li may be absent.
   Now consider the first q1 elements of Q$qll$l         + q12y2 + q13p3 + q14f4. Since
yj, for j > 2, converges more quickly than PI and p2, the sampling error in this
vector will be dominated     asymptotically    by the sampling error in qllfl + q12f2.
Similarly, the sampling error in the next group of q2 elements of Q9 is dominated
by q22y*2, in the next q3 by q33y*3, etc. Thus, the appropriate       scaling matrix for
Qp--r is

                     T"ZI   41       0           0           0


        !i+
                I       0
                        0

Now, write the Wald statistic
                                  T'121
                                     0 42
                                     0

                                            as
                                                TIq3
                                                 0
                                                 0
                                                             0
                                                         T3i21
                                                                 94
                                                                      ’




But, under      the null,


       T1’2(qd1+ q12f2+ q13Y*3
                            + q14.94
                                   -rl)
             = T1’2(q1191
                       + q12f2- rl) + o,(l),                     and
       T”-    lqqjjTj       + . . . + qj4p4 _ rj)    =   T(j- ‘)I2 (qjj~j - rj) + O,(l),   for   j > 1.

Thus. if we let


               p311q12 0                  01
                 0” q;’ ,”                0” )
              1 G’
       f-j=

                 0          0            q&$
                                            !

then

       *,(QY- r) = e”YT(p - y) + o&l)
2860                                                                                            M. W. Watson


under     the nu11.9 Similarly,    it is straightforward         to show that




Finally, since Yu,(g - y)= v/-IA and Y’V,‘CZ,Z: Y/s’* V, then W=>(Ql’/-‘A)’ x
(Qv-‘Q)-‘(Qv?4).
   The limiting distribution  of W is particularly   simple when qii = 0 for i > 2. In
this case, all of the hypotheses of interest concern linear combinations       of zero
mean I(0) regressors, together with the other regression coefficients. When q12 = 0,
so that the constant term is unrestricted,   we have

         a:w=cq11v1-r1UCq11(Czl,,z;,,)-‘q;,l-‘cq1l~~l -?,)I + O,(l)?
so that W 3x:,     . When the constraints   involve other linear combinations         of the
regression coefficients, the asymptotic x2 distribution      of the regression coefficients
will not generally obtain.
   This analysis has only considered tests of restrictions        on coefficients from the
same equation. Results for cross equation restrictions are contained in Sims et al.
(1990). The same general results carry over to cross equation restrictions. Namely,
restrictions that involve subsets of coefficients, that can be written as coefficients
on zero mean stationary regressors in regressions that include constant terms, can
be tested using standard asymptotic distribution       theory. Otherwise, in general, the
statistics will have nonstandard   limiting distributions.



2.6.     Applications

2.6.1.     Testing lag length restrictions

Consider     the VAR(p + s) model,

                  P+S
         Y,=Cr+    C ~iY*_i+‘r
                  i=l



and the null hypothesis H,: Qp+ 1 = Qpt2 = ... = @p+s = 0, which says that the true
model is a VAR(p). When p 2 1, the usual Wald (and LR and LM) test statistic
for H, has an asymptotic x2 distribution  under the null. This can be demonstrated
by rewriting the regression so that the restrictions in H, concern coefficients on
zero mean stationary    regressors. Assume that AY, is I(0) with mean p, and then



   941*is the only off-diagonal   element   appearing   in @. It appears   because   fl and f, both converge
at rate T”‘.
Ch. 47: Vector Autoreyressions                    and Cointeyration                                                2861


rewrite the model as

                                          pis-      1
         Y,=Z+AY,_, +                        2          Oi(AY,_i-p)+~t,
                                            i=l



where A = ~~~~ Qi, Oi = - x$‘T:+ 1Qj and a”= c1+ Cfz:- ’ Oip. The restrictions
@P+l = cDp+2 = ... = Qpcs = 0, in the   original model are equivalent      to 0, =
@p+l=...=    Op+s_ 1 in the transformed    model. Since these coefficients are zero
mean I(0) regressors in regression equations that contain                                   a constant   term, the test
statistics will have the usual large sample x2 distribution.

2.6.2.          Testing for Granger causality

Consider             the bivariate         VAR model




         y2,t    =    ‘2   +   IfI   42l,iYl,t-i        +    IfI +*2,iY2.t-i   + ‘2,t’
                               i=l                          i=l



The restriction that yZ,t does not Granger-cause               yl,, corresponds        to the null hypo-
thesis Ho: 412,1 = 412,2 = ... = c),,,, = 0. When (yl f y2,,) are covariance stationary,
the resulting Wald, LR or LM test statistic for &is hypothesis will have a large
sample x,’ distribution.       When (y, t y, ,) are integrated, the distribution               of the test
statistic depends on the location ok &it roots in the system. For example, suppose
that yl,, is I(l), but that y, , is I(0). Then, by writing the model in terms of deviations
of y,,, from its mean, the’ testrictions         involve only coefficients on zero mean I(0)
regressors. Consequently,         the test statistic has a limiting x,: distribution.
   When yZ,t is I(l), then the distribution          of the statistic will be asymptotically             x2
when Y, t    and   y2,1  are  cointegrated.   When      yl,,  and    y,,,    are  not  cointegrated,    the
Grangerlcausality        test statistic will not be asymptotically               x2, in general. Again,
the first result is easily demonstrated           by writing the model so the coefficients of
interest appear as coefficients on zero mean stationary                      regressors. In particular,
when Y~,~     and   y,,,  are  cointegrated,    there    is  an   I(0)    linear   combination       of the
variables, say w, = yZ,r - ;l~,,~, and the model can be rewritten as


      Y1.z = al +              i     &ll,iYl,t-i        +    i    +12,itwr-i -Pw) + &l.t3


where pw is the mean of wt,E1 = ~+C~Z1~lz,i~~                 and 4,l.i = 4ll.i + 412,i&
i=l , . . . , p. In the transformed regression, the Granger-causality   restriction corre-
sponds to the restriction that the terms w,-i - pL, do not enter the regression. But
2862                                                                                                  M. W. Watson


these are zero mean I(0) regressors in a regression that includes a constant, so
that the resulting test statistics will have a limiting xf distribution.       When ~i,~ and
y, ~ are not cointegrated,    the regression cannot be transformed          in this way, and
the resulting test statistic will not, in general, have a limiting x2 distribution.”
   The Mankiw-Shapiro        (1985)/Stack-West       (1988) results concerning     Hall’s test
of the life-cycle/permanent      income model can now be explained quite simply.
Mankiw and Shapiro considered tests of Hall’s model based on the regression of
AC, (the logarithm of consumption)         onto y,_i (the lagged value of the logarithm
of income). Since y,_ 1 is (arguably) integrated,          its regression coefficient and t-
statistic will have a nonstandard      limiting distribution.     Stock and West, following
Hall’s (1978) original regressions, considered regressions of c, onto c,_ 1 and y,_ 1.
Since, according     to the life-cycle/permanent       income model, c,_ 1 and y,_ 1 are
cointegrated, the coefficient on y,_ 1 will be asymptotically        normal and its t-statistic
will have a limiting standard normal distribution.          However, when y,_ 1 is replaced
in the regression with m,_, (the lagged value of the logarithm                of money), the
statistic will not be asymptotically   normal, since c, _ 1 and m,_ 1 are not cointegrated.
A more detailed discussion of this example is contained in Stock and West (1988).

2.6.3.         Spurious regressions

In a very influential paper in the 1970’s, Granger and Newbold (1974) presented
Monte Carlo evidence reminding economists of Yule’s (1926) spurious correlation
results. Specifically, Granger and Newbold showed that a large R2 and a large
t-statistic were not unusual when one random walk was regressed on another,
statistically  independent,  random    walk. Their results warned researchers   that
standard measures of fit can be very misleading in “spurious” regressions. Phillips
(1986) showed how these results could be interpreted quite simply using the frame-
work outlined above, and his analysis is summarized       here.
    Let Yi,, and y2,t be two independent   random walks

         YlJ    =   Yl,,-1    + %,t,
         Y2.t = Y2,,-        1 + E2.v

where E, = (E~,~E~,~)’is an mds(ZJ with finite fourth moments, and {~i,~}~, i and
{~~,~}~r,1 are mutually independent.     For simplicity, set y,,, = y,,, = 0. Consider
the linear regression of y2,* onto ~i,~,

         Y2.r = BYi,, + %                                                                                     (2.11)

where u, is the regression              error.   Since y, ,f and y,,, are statistically              independent
fi = 0 and u, = Y~,~.

   “A detailed discussion of Granger-causality        tests in integrated   systems   in contained     in Sims et al.
(1990) and Toda and Phillips (1993a, b).
2864                                                                                        M. W. Watson


        Y2,t= PYI,, + u2,t3                                                                       (2.16)

where u, = (~i,~ u2,J’ = DEB,wh ere E, is an mds(Z,) with finite fourth moments. Like
the spurious regression model, both yr,, and y2,t are individually         I(1): yr,, is a
random walk, while Ay2,t follows a univariate        ARMA(l, 1) process. Unlike the
spurious regression model, one linear combination     of the variables y2,t - fi~i,~ = u2,t
is I(O), and so the variables are cointegrated.
   Stock (1987) derives the asymptotic distribution     of the OLS estimator of coin-
tegrating vectors. In this example, the limiting distribution     is quite simple. Write


                                                                                                  (2.17)



and let dij denote    the ijth element      of D, and Di = (di, di2) denote       the ith row of D.
Then the limiting     behavior,     or the denominator        of b - j?, follows directly      from the
lemma:


       T-~C(~,,,)~ = DlCT-2~t,t:lD;=‘D~                  [   jB(s)B(s)ds]D;,(2.18)
where 5, is the bivariate random walk, with A& = E, and B(s) is a 2 x 1 Brownian
motion process. The numerator    is only slightly more difficult:


       T-CYdzt=   1   3     T-'CYl,l442,t+         T-'CAY1,u2t
                                                            1 9
                          = D,[T-‘~5,_l~;]D;         + Dl[T-l&~;]D;

                          *Dl[   j$s)dB(s).]D;       + D,D;.                                      (2.19)


Putting     these two results together,




                                                         I[ s                     1
                                                                                   -1
                                               + D, D;       D,   B(s)B(s)‘dsD;         .         (2.20)


    There are three interesting features of the limiting representation     (2.20). First,
j? is “super consistent,” converging to its true value at rate T. Second, while super
consistent, fi is asymptotically  biased, in the sense that the mean of the asymptotic
distribution   is not centered at zero. The constant term DID; = d,,d,,         + d,,d,,
that appears in the numerator       of (2.20) is primarily responsible for this bias. To
see the source of this bias, notice that the regressor yl,t is correlated with the error
term u~,~. In standard situations, this “simultaneous      equation bias” is reflected in
Ch. 47: Vector Autoregressions   and Cointegration                                                    2865


large samples as an inconsistency       in B. With cointegration,       the regressor is I(1)
and the error term is I(O), so no inconsistency      results; the “simultaneous      equations
bias” shows up as bias in the asymptotic distribution            of b. In realistic examples
this bias can be quite large. For example, Stock (1988) calculates the asymptotic
bias that would obtain in the OLS estimator                of the marginal     propensity      to
consume, obtained from a regression of consumption               onto income using annual
observations    with a process for u, similar to that found in U.S. data. He finds that
the bias is still -0.10 even when 53 years of data are used.’ ’ Thus, even though
the OLS estimators are “super” consistent, they can be quite poor.
   The third feature of the asymptotic       distribution     in (2.20) involves the special
case in which d,, = d,, = 0 so that u1 , and u2, are statistically           independent.     In
this case the OLS estimator corresponds           to the Gaussian      maximum      likelihood
estimation (MLE). When d 12 = d,, = 0, (2.20) simplifies to



                              s ,&W&(4


                              s
                                                                                                     (2.21)
                                  B,(s)*ds


where B(s) is partitioned      as B(s) = [B,(s)B,(s)]‘.     This result is derived in Phillips
and Park (1988) where the distribution          is given a particularly      simple and useful
interpretation.    To develop the interpretation,       suppose for the moment that u~,~ =
dZZcZ,twas n.i.i.d. (In large samples the normality assumption             is not important;       it
is made here to derive simple and exact small sample results.) Now, consider the
distribution    of $ conditional    on the regressors {y,,,}T= i. Since Q is n.i.i.d., the
restriztion d,, = d,, = 0 implies that u~,~ is independent          of {y, ,}f’ 1. This means
t_hat8-Dl{y,JT=,        - N(0,d~,CC(Y,,,)21-‘),so that the unconditional             distribution
/I - p is normal with mean zero and random covariance matrix, d:2[C(yl,t)2]-1.
In large samples, T-2C(y,,,)2~dIlSB1(S)2dS,                so that T(fi--/I)    converges to a
normal random variable with a mean of zero and random covariance                           matrix,
(d,,ld,,)2CSBl(s)2dsl-1.Thus, T(B        - - p) has an asymptotic distribution that is a
random mixture of normals. Since the normal distributions               in the mixture have a
mean of zero, the asymptotic distribution         is distributed symmetrically       about zero,
and thus j!?is asymptotically      median unbiased.
    The distribution   is useful, not so much for what it implies about the distribution
of b, but for what it implies about the t-statistic for fi. When d,, or d,, are not
equal to zero, the t-statistic for testing the null fi = /I0 has a nonstandard            limiting
distribution,    analogous    to the distribution     of the Dickey-Fuller        t-statistic for
testing the null of a unit AR coefficient in a univariate regression. However, when
d,, = d,, = 0, the t-statistic has a limiting standard normal distribution.                 To see

   “Stock (1988, Table 4). These results are for durable plus nondurable   consumption.   When nondurable
consumption  is used, Stock estimates the bias to be -0.15.
2866                                                                                              M. W. Watson


why this is true, again consider the situation in which u~,~is n.i.i.d. When d, Z = d, I= 0,
the distribution   of the t-statistic for testing b = PO conditional     on {yl,t},‘E 1 has an
exact Student’s t distribution with T - 1 degrees of freedom. Since this distribution
does not depend on {Y~,~},‘=1, this is the unconditional         distribution   as well. This
means that in large samples, the t-statistic has a standard normal distribution.            AS
we will see in this next section, the Phillips and Park (1988) result carries over to
a much more general setting.
   In the example developed here, u, = DE,is serially uncorrelated.           This simplifies
the analysis, but all of the results hold more generally. For example, Stock (1987)
assumes that u,= D(L)&,,        where D(L)=~t?L,DiL.f,lD(l)/      #O and C,?Y, i/D,/     < co.
In this case,




                                                                                                        (2.22)


where Dj(l) is thejth                  row of D(1) and          Dj,i
                                                                   is thejth row of Di.Under the additional
assumption  that d12(1) = dZl(l) = 0 and Cz?LoD,,iD;,i   = 0,T(b- /I)  is distributed
as a mixed normal (asymptotically)    and the r-statistic for testing /J’= /3, has an
asymptotic  normal distribution   when d12(1) = dT1(l) = 0 [see Phillips and Park
(1988) and Phillips (1991a)l.



2.7.        Implications       for econometric               practice

The asymptotic results presented above are important      because they determine the
appropriate   critical values for tests of coefficient restrictions in VAR models.
The results lead to three lessons that are useful for applied practice.

(1) Coefficients that can be written as coefficients on zero mean I(0) regressors id
regressions that include a constant term are asymptotically   normal. Test statistics
for restrictions on these coefficients have the usual asymptotic    x2 distributions.
For example, in the model

       Y,    =   YlZl,,   +   Y2   +    Y3Z3.t   +   Y‘$t+    Et,                                       (2.23)

where z1 f is a mean zero I(0) scalar regressor                              and z3 t is a scalar martingale
regressor: this result implies that Wald statistics                          for tesiing H,:y1= c is asymp-
totically x2.

(2) Linear combinations    of coefficients that include coefficients on zero mean I(0)
regressors together with coefficients on stochastic or deterministic     trends will have
asymptotic   normal distributions.    Wald statistics for testing restrictions  on these
Ch. 47: Vector Autoregressions and Cointegration                                                 2867


linear combinations    will have large sample x2 distributions. Thus in (2.23) Wald
statistics for testing H,: R,y, + R,y, + R,y, = r, will have an asymptotic        x2
distribution  if R, # 0.
(3) Coefficients that cannot be written as coefficients on zero mean I(0) regressors
(e.g. constants,  time trends, and martingales)      will, in general, have nonstandard
asymptotic distributions.   Test statistics that involve restrictions on these coefficients
that are not a function of coefficients on zero mean I(0) regressors will, in general,
have nonstandard      asymptotic distributions.    Thus in (2.23), the Wald statistic for
testing: H,: R(y, y3 y4)’ = I has a non-x’ asymptotic distribution,    as do test statistics
for composite hypotheses of the form H,: R(y, y3 y4)’ = r and y1 = c.

   When test statistics have a nonstandard       distribution,    critical values can be deter-
mined by Monte Carlo methods by simulating                  approximations        to the various
functionals of B(s) appearing in Lemma 2.3. As an example, consider using Monte
Carlo methods to calculate the asymptotic distribution             of sum of coefficients 4i +
42 = y2 in the univariate      AR(2) regression model (2.1). Section 2.4 showed that
T(?, - ~2)=4      + ~2)CjB(S)2ds1-1CSB(s)dB(s)l,          where B(s) is a scalar Brownian
motion process. If x, is generated as a univariate             Gaussian     random walk, then
one draw of the random variable [JB(s)‘ds] - ‘[jB(s)dB(s)]                is well approximated
by (T-2~x~)-‘(T-‘~x,Ax,+,            ) with T large. (A value of T = 500 provides an
adequate approximation        for most purposes.) The distribution             of T(y*, -7,)  can
then be approximated       by taking repeated draws of (T-2Cxf)-‘(Tp                 ‘CX~AX~+~)
multiplied by (1 + 4,). An example of this approach in a more complicated multi-
variate model is provided in Stock and Watson (1988).
   Application   of these rules in practice requires that the researcher know about
the presence and location of unit roots in the VAR. For example, in determining
the asymptotic distribution      of Granger-causality      test statistics, the researcher has
to know whether the candidate causal variable is integrated and, if it is integrated,
whether it is cointegrated     with any other variable in the regression. If it is cointe-
grated with the other regressors, then the test statistic has a x2 asymptotic distri-
bution. Otherwise the test statistic is asymptotically         non-X2, in general. In practice
such prior information     is often unavailable,     and an important        question is what is
to be done in this case?12
   The general problem can be described as follows. Let W denote the Wald test
statistic for a hypothesis of interest. Then the asymptotic distribution             of the Wald
statistic when a unit root is present, say F(WI U), is not equal to the distribution
of the statistic when no unit root is present, say F( WI N). Let cU and cN denote


   “Toda    and Phillips (1993a, b) discuss testing for Granger causality in a situation in which the
researcher knows the number of unit roots in the model but doesn’t know the cointegrating     vectors.
They develop a sequence of asymptotic      x2 tests for the problem. When the number of unit roots in
the system in unknown, they suggest pretesting for the number of unit roots. While this will lead to
sensible results in many empirical problems, examples such as the one presented at the end of this
section show that large pretest biases are possible.
2868                                                                                          M. W. Watson


the “unit root” and “no unit root” critical values for a test with size c(. That is, cu
and cN satisfy: P( W > cu( U) = P( W > cN( N) = a under the null. The problem is
that cu # cN, and the researcher does not know whether U or N is the correct
specification.
   In one sense, this is not an ususual situation. Usually, the distribution              of statistics
depends on characteristics       of the probability     distribution    of the data that are un-
known to the researcher,          even under the null hypothesis.              Typically,     there is
uncertainty    over certain “nuisance parameters,”           that affect the distribution        of the
statistic of interest. Yet, typically the distribution         depends on the nuisance para-
meters in a continuous       fashion, in the sense that critical values are continuous
functions of the nuisance parameters. This means that asymptotically                 valid inference
can be carried out by replacing the unknown parameters with consistent estimates.
   This is not possible in the present situation. While it is possible to represent
the uncertainty    in the distribution    of test statistics as a function of nuisance para-
meters that can be consistently        estimated, the critical values are not continuous
functions of these prameters. Small changes in the nuisance parameters ~ associated
with sampling error in estimates - may lead to large changes in critical values.
Thus, inference cannot be carried out by replacing unknown nuisance parameters
with consistent estimates. Alternative procedures are required.13
   Development       of these alternative     procedures       is currently     an active area of
research, and it is too early to speculate on which procedures will prove to be the
most useful. It is possible to mention a few possibilities and highlight the key issues.
   The simplest procedure is to carry out conservative inference. That is, to use the
largest of the “unit root” and “no unit root” critical values, rejecting the null when
 W > max(c,, cN). By construction,         the size of the test is less than or equal to a.
Whenever W > max(c,,c,),           so that the null is rejected using either distribution,
or W < min(c,, cN), so that the null is not rejected using either distribution,                     one
need not proceed further. However a problem remains when min(c,, cN) < W <
max(c,, cN). In this case, an intuitively appealing procedure is to look at the data
to see which hypothesis - unit root or no unit root - seems more plausible.
   This approach is widely used in applications.             Formally, it can be described as
follows. Let y denote a statistic helpful in classifying the stochastic process as a
unit root or no unit root process. (For example, y might denote a Dickey-Fuller
“t-statistic”  or one of the test statistics for cointegration             discussed in the next
section.) The procedure is then to define a region for y, say R,, and when yeR,,
the critical value cu is used; otherwise the critical value cN is used. (For example,
the unit root critical value might be used if the Dickey-Fuller                   “t-statistic”     was
greater than -2, and the no unit root critical value used when the DF statistic


    13Alternatively,     using “local-to-unity”    asymptotics, the critical values can be represented     as
continuous      functions    of the local-to-unity   parameter, but this parameter  cannot be consistently
estimated from the data. See Bobkoski (1983), Cavanagh            (1985), Chan and Wei (1987), Chan (1988),
Phillips (1987b) and Stock (1991).
Ch. 47: Vector Autoregressions and Cointegration                                                2869


was   less than    -2.)   In this case, the probability    of type 1 error is

      P(Type      1 error) = P(W > co(y~R,)P(yeR,)          + P(W > c,ly$R,)P(y$R,).

The procedure will work well, in the sense of having the correct size and a power
close to the power that would obtain when the correct unit root or no unit root
specification   were known, if two conditions          are met. First, P(~ER,) should be
near 1 when the unit root specification          is true, and P(y$R,) should be near 1
when the unit root specification is false, respectively. Second, P( W > cLi)yeR,) and
P( W > cN )y $Ru) should be near P( W > cu 1U) and P( W > cNlN), respectively.
Unfortunately,    in practice neither of these conditions may be true. The first requires
statistics that perfectly discriminate       between the unit root and non-unit         root
hypotheses.    While significant     progress has been made in developing          powerful
inference procedures      [e.g. Dickey and Fuller (1979), Elliot et al. (1992), Phillips
and Ploberger (1991), Stock (1992)], a high probability          of classification errors is
unavoidable    in moderate sample sizes.
   In addition, the second condition may not be satisfied. An example presented
in Elliot and Stock (1992) makes this point quite forcefully. [Also see Cavanagh
and Stock (1985).] They consider the problem of testing whether the price-divided
ratio helps to predict future changes in stock prices.14 A stylized version of the
model is

      Pt -    4 = m-      1 -   d,- 1)+ %.t,                                                  (2.24)

             AP,= HP,- I-       4 - 1)+ ~z,t,                                                 (2.25)

where pt and d, are the logs of prices and dividends, respectively, and (E~,~E~,~))is
an mds(Z’,). The hypothesis of interest is H,: p = 0. Under the null, and when 14 I < 1,
the t-statistic for this null will have an asymptotic standard normal distribution;
when the hypothesis 4 = 1, the t-statistic will have a unit root distribution.        (The
particular form of the distribution      could be deduced using Lemma 2.3, and critical
values could be constructed         using numerical   methods.) The pretest procedure
involves carrying out a test of 4 = 1 in (2.24), and using the unit root critical value
for the t-statistic for fi = 0 in (2.25) when 4 = 1 is not rejected. If 4 = 1 is rejected,
the critical value from the standard normal distribution       is used.
   Elliot and Stock show that the properties of this procedure depends critically
on the correlation between &I f and Ed f. To see why, consider an extreme example.
In the data, dividends are much smoother than prices, so that most of the variance
in the price-dividend   ratio comes from movements in prices and not from dividends.
Thus, E~,~and E~,~are likely to be highly correlated. In the extreme case, when


   14Hodrick (1992) contains an overview of the empirical literature on the predictability  of stock
prices using variables like the price-dividend ratio. Also see, Fama and French (1988) and Campbell
(1990).
2870                                                                        M. W. Watson


they are perfectly correlated, (p - b) is proportional to (6 - 4), and the “t-statistic”
for testing /3 = 0 is exactly equal to the “t-statistic” for testing 4 = 1. In this case
F(WIy) is degenerate and does not depend on the null hypothesis. All of the
information in the data about the hypothesis /I = 0 is contained in the pretest.
While this example is extreme, it does point out the potential danger of relying
on unit root pretests to choose critical values for subsequent tests.


3.     Cointegrated    systems

3.1.    Introductory    comments

 An important special case of the model analyzed in Section 4 is the cointegrated
 VAR. This model provides a framework for studying the long-run economic
 relations discussed in the introduction. There are three important econometric
 questions that arise in the analysis of cointegrated systems. First, how can the
common stochastic trends present in cointegrated systems be extracted from the
data? Second, how can the hypothesis of cointegration be tested? And finally, how
 should unknown parameters in cointegrating vectors be estimated, and how should
inference about their values be conducted? These questions are answered in this
section.
    We begin, in Section 3.2, by studying different representations for cointegrated
systems. In addition to highlighting important characteristics of cointegrated
systems, this section provides an answer to the first question by presenting a
general trend extraction procedure for cointegrated systems. Section 3.3 discusses
the problem of testing for the order of cointegration, and Section 3.4 discusses the
problem of estimation and inference for unknown parameters in cointegrating
vectors. To keep the notation simple, the analysis in Sections 3.2-3.4 abstracts
from deterministic components (constants and trends) in the data. The complications
in estimation and testing that arise when the model contains constants and trends
is the subject of Section 3.5. Only I(1) systems are considered here. Using Engle
and Granger’s (1987) terminology, the section discusses only CI(1,l) systems; that
is, systems in which linear combinations of I(1) and I(0) variables are I(0). Extensions
for CI(d, b) systems with d and b different from 1 are presented in Johansen (1988b,
1992c), Granger and Lee (1990) and Stock and Watson (1993).


3.2.    Representations    for the I (1) cointegrated   model

Consider the VAR


       xr= t      z7iX,_i+E,,                                                      (3.1)
            i=l
Ch. 47: Vector Autoreyressions           and’Cointegration                                             2871


where x, is an n x 1 vector composed of I(0) and I(1) variables, and E, is an mds(Z,).
Since each of the variables in the system are I(0) or I(l), the determinantal               poly-
nomial 1n(z)1 contains at most n unit roots, with n(z) = I - Cf= 1 IIizi. When
there are fewer than n unit roots, then the variables are cointegrated,              in the sense
that certain linear combinations           of the x,‘s are I(0). In this subsection we derive
four useful representations        for cointegrated    VARs: (1) the vector error correction
VAR model, (2) the moving average representation                 of the first differences of the
data, (3) the common trends representation              of the levels of the data, and (4) the
triangular    representation     of the cointegrated     model.
    All of these representations     are readily derived using a particular SmithhMcMillan
factorization of the autoregressive        polynomial 17(L). The specific factorization      used
here was originally developed by Yoo (1987) and was subsequently                  used to derive
alternative representations       of cointegrated    systems by Engle and Yoo (1991). Some
of the discussion presented here parallels the discussion in this latter reference.
Yoo’s factorization       of n(z) isolates the unit roots in the system in a particularly
convenient     fashion. Suppose that the polynomial           n(z) has all of its roots on or
outside the unit circle, then the polynomial can be factored as U(z) = U(z)M(z)V(z),
where U(z) and V(z) are n x n matrix polynomials                with all of their roots outside
the unit circle, and M(z) is an n x IZdiagonal matrix polynomial               with roots on or
outside the unit circle. In the case of the I(1) cointegrated              VAR, M(L) can be
written as



         MM =
                [
                    4o   0
                         z
                          I    1    9




where Ak = (1 - L)Z, and k + r = n. This factorization       is useful because it isolates
all of the VAR’s nonstationarities      in-the upper block of M(L).
   We now derive alternative      representations   for the cointegrated  system.


3.2.1.    The vector error correction VAR model (VECM)

To derive the VECM,                     subtract      x,_ 1 from both   sides of (3.1) and rearrange    the
equation as

                              p-1
      Ax, = 17x,_ 1 +           C       ~i’Xt-i+Ef,                                                    (3.2)
                              i=l



whereZ7=    -1,,+C;=‘=,U,=  -r;l(l),andQi=     -CjP=i+lnj,i=l,...,p-l.Since
n(l) = U(l)M(l)V( l), and M(1) has rank r, 17 = - I7( 1) also has rank r. Let GI
denote an n x r matrix whose columns form a basis for the row space of n, so
that every row of 17 can be written as a linear combination           of the rows of cc!.
Thus, we can write 17 = &z’, where 6 is an n x r matrix with full column rank.
2872                                                                                  M. W. Watson


Equation      (3.2) then becomes

                                p’l
       Ax, = &‘x,_i     + c              @iAxt_i + E,                                          (3.3)
                                i=l



or

                          p-1
       Ax,=Sw,_i      + 1              Q+x,_~+c,,                                              (3.4)
                          i=l



where w, = IX’X,. Solving        (3.4) for w,_i shows that w,_ 1 = (6’S)- *S’[Ax, -
C;:t @iAx,_i - EJ, so that wt is I(0). Thus, the linear combinations          of the poten-
tially I(1) elements of x, formed by the columns of a are I(O), and the columns of
c1are cointegrating    vectors.
    The VECM imposes k < n unit roots in the VAR by including first differences
of all of the variables and r = n - k linear combinations        of levels of the variables.
The levels of x, are introduced       in a special way - as w, = rz’x, - so that all of the
variables in the regression are I(0). Equations         of this form appeared in Sargan
(1964) and the term “error correction model” was introduced              in Davidson et al.
(1978).15 As explained there and in Hendry and von Ungern-Sternberg                   (1981),
CI’X,= 0 can be interpreted as the “equilibrium”       of the dynamical system, w, as the
vector of “equilibrium      errors” and equation      (3.4) describes the self correcting
mechanism of the system.


3.2.2.      The moving average representation

To derive the moving                  average      representation   for Ax,, let


         WJ = 1, 0
              o A ,
                 [          I   1
so that M(L)M(L)        = (1 - L)Z,. Then,

         M(L)M(L)V(L)x,               = ti(L)u(L)-‘&,,

so that

         I’(L)Ax, = ti(L)Cr(L)-             *st,


   ‘*As Phillips and Loretan (1991) point out in their survey, continuous time formulations of error
correction  models were used extensively by A.W. Phillips in the 1950’s. I thank Peter Phillips for
drawing this work to any attention.
Ch. 47: Vector Autoregressions and Cointegration                                                        2873


and

      Ax, = C(L)&,,                                                                                    (3.5)

where C(L) = V(L)-iM(L)U
   There are two special characteristics    of the moving average representation.     First,
C( 1) = V(l)- ‘a( l)U(l)- ’ has rank k and is singular when k < n. This implies that
the spectral density matrix of Ax, evaluated at frequency zero, (27c_iC(l)Z,C(         l)‘, is
singular in a cointegrated      system. Second, there is a close relationship      between
C(1) and the matrix of cointegrating       vectors ~1.In particular,   a’C(1) = 0.i6 Since
w, = CI’X,is I(O), Aw, = CL’AX,is I(- 1) so that its spectrum at frequency zero,
(27~)~~cr’C(l)C,C(l)‘cc, vanishes.
   The equivalence     of vector error correction models and cointegrated        variables
with moving average representations      of the form (3.5) is provided in Granger (1983)
and forms the basis of the Granger           Representation    Theorem    [see Engle and
Granger (1987)].

3.2.3.      The common trends representation

The common trends representation     follows directly from (3.5). Adding                        and sub-
tracting C(l)&, from the right hand side of (3.5) yields

         Ax, = C( l)s, + [C(L) - C( l)]e,.                                                             (34

Solving      backwards    for the level of x,,

         x, = C( 1)5,+ C*(L)&, + x0,                                                                   (3.7)

where 5, = C:= l~, and C*(L) = (1 - L)-‘[C(L) - C(l)] = C,YLOC~Li, where Cr =
-x,?=i+lCj     and si=O for. i < 0 is assumed. Equation         (3.7) is the multivariate
BeveridgeeNelson     (1981) decomposition   of xt; it decomposes x, into its “permanent
component,”     C(l)& + x0, and its “transitory     component,”     C*(L)s,.17 Since C( 1)
has rank k, we can find a nonsingular         matrix G, such that C(l)G = [A 0, .,I,
where A is an n x k matrix with full column rank.”          Thus C(l)& = C(l)GG-‘<,,

   r6To derive this result, note from (3.2) and (3.3) that 17 = -n(l)         = - U(l)M(l)V(l)   = 6~‘. Since
M(1) has zeroes everywhere, except the lower diagonal block which is I,,x’ must be a nonsingular
transformation   of the last r rows of V(1). This implies that the first k columns of u’V(l)-r contain only
zeroes, so that a’V(l)-‘M(l)U(l)     = a’C(1) = 0.
   “The last component can be viewed as transitory because it has a finite spectrum at frequency zero.
Since U(z) and V(z) are finite order with roots outside the unit circle, the Ci coefficients decline
exponentially  for large i, and thus CiilC,I is finite. Thus the CT matrices are absolutely       summable,
and C*(l)Z,C*(l)’    is finite.
   “The matrix G is not unique. One way to construct          G is from the eigenvectors    of A. The first k
columns of G are the eigenvectors corresponding        to the nonzero eigenvalues of A and the remaining
eigenvectors are the last n-k     columns of G.
2874


so that

         x, = AT, + C*(L)&, + X0’                                                              (3.8)

where r, denotes the first k components           of G-l<,.
    Equation (3.8) is the common trends representation            of the cointegrated   system. It
decomposes the n x 1 vector x, into k “permanent             components”     r, and n “transitory
components”      C*(L)&,. These permanent         components       often have natural interpre-
tations. For example, in the eight variable (y, c, i, n, w, m, p, r) system introduced            in
Section 1, five cointegrating      vectors were suggested. In an eight variable system
with five cointegrating   vectors there are three common trends. In the (y, c, i, II, m, p, r)
systems these trends can be interpreted               as population      growth, technological
progress and trend growth in money.
    The common trends representation          (3.8) is used in King et al. (1991) as a device
to “extract” the single common trend in a three variable system consisting of y,c
and i. The derivation of (3.8) shows exactly how to do this: (i) estimate the VECM
(3.3) imposing     the cointegration     restrictions;    (ii) invert the VECM to find the
moving average representation          (3.5); (iii) find the matrix G introduced            below
equation (3.7); and, finally, (iv) construct t, recursively from r, = r,_ 1 + e,, where
e, is the first element of G- ‘E,, and where E, denotes the vector of residuals from
the VECM. Other interesting           applications      of trend extraction      in cointegrated
systems are contained in Cochrane and Sbordone (1988) and Cochrane (1994).



3.2.4.        The triangular representation

The triangular representation    also represents x, in terms of a set of k non-cointegrated
I(1) variables. Rather than construct these stochastic trends as the latent variables
r, in the common trends representation,         a subset of the x, variables are used. In
particular, the triangular   representation    takes the form:


       Ax1.t= Ul,,,                                                                           (3.9)

       X2.r   -   kt   =   u2,*9                                                             (3.10)

where x, = (xi,, xi 1)‘,~i,~ is k x 1 and x2 .f is r x 1. The transitory components      are
u, = cu; f u; f )’ = D(L)E,,  where  (as we show   below)  D(1)  has  full rank. In this re-
presentation,    the first k elements of x, are the common trends and x~,~ - px, f are
the I(0) linear combinations      of the data.
   To derive this representation      from the VAR (3.2), use H(L) = U(L)M(L)V(L) to
write

       W)~W)wJx,                   = E,,                                                     (3.11)
Ch. 47: Vector Autoregressions    and Cointegration                                      2815


so that

      M(L)V(L)x,      = u(L)-‘&,.                                                      (3.12)

Now, partition       P’(L) as


      V(L) =
                  VII(L)
                [ %1(L)
                               uu(L)
                               u&L)    1’

where ull(L) is k x k, u12(L) is k x r, tizl(L) is r x k and uz2(L) is r x r. Assume
that the data have been ordered so that uz2(L) has all of its roots outside the unit
circle. (Since V(L) has.all of its roots outside the unit circle, this assumption   is
made with no loss of generality.) Now, let



      (AL)
                   1,
        =[ B(L) I, ’
                           0
                               1
where B(L) = - u~~(L)-~u~~(L). Then

      M(L)v(L)C(L)C(L)-lx,             = u(L)-‘&,                                       (3.13)

or, rearranging      and simplifying,


                                                                                        (3.14)


where p*(L) = (1 - L)- ‘[/i’(L) - p(l)] and /I = /I( 1). Letting G(L) denote the matrix
polynomial     on the left hand side of (3.14), the triangular representation    is obtained
by multiplying    equation (3.14) by G(L)-‘. Thus, in equations (3.9) and (3.10), u, =
D(L)&,, with D(L) = G(L)-‘U(L)-         ‘.
    When derived from the VAR (3.2), D(L) is seen to have a special structure that
was inherited from the assumption          that the data were generated by a finite order
VAR. But of course, there is nothing inherently special or natural about the finite
order VAR; it is just one flexible parameterization          for the x, process. When the
triangular   representation    is used, an alternative   approach is to parameterize       the
matrix polynomial       D(L) directly.
    An early empirical study using this formulation         is contained in Campbell and
Shiller (1987). They estimate a bivariate model of the term structure that includes
long term and short term interest rates. Both interest rates are assumed to be I(l),
but the “spread” or difference between the variables is assumed to be I(0). Thus,
in terms of (3.9))(3.10) ~i,~ is the short term interest rate, x2 t is the long rate and
/I = 1. In their empirical work, Campbell and Shiller modeled the process U, in
(3.10) as a finite order VAR.
Ch. 47: Vector Autoregressions           and Cointegration                                                 2877


to  the constant (z,,,) and the deterministic   time trends (z,,,). Hypothesis   testing
when deterministic    components   are present is discussed in Section 3.5.
   There are a many tests for cointegration:  some are based on likelihood methods,
using a Gaussian likelihood and the VECM representation            for the model, while
others are based on more ad hoc methods. Section 3.3.1 presents likelihood based
(Wald and Likelihood Ratio) tests for cointegration     constructed    from the VECM.
The non-likelihood-based     methods of Engle and Granger (1987) and Stock and
Watson (1988) are the subject of Section 3.3.2, and the various tests are compared
in Section 3.3.3.

3.3.1.     Likelihood    based tests for cointegration”

In Section     3.2.1 the general             VECM         was written   as

                                 p-1
         Ax, = SCI’X,_ i + C @iA~,-i+~,.                                                                  (3.3)
                                 i=l



To develop the restrictions on the parameters in (3.3) implicit in the null hypothesis,
first partition the matrix of cointegrating    vectors as CI= [a, up] where ~1,is an n x r.
matrix whose columns are the cointegrating          vectors present under the null and ~1,
is the n x I, matrix of additional cointegrating     vectors present under the alternative.
Partition     6 conformably     as 6 = [S,S,],   let r =(@, Q2... Qp_i) and let z, =
(Ax;_~ Ax;_~~x:_~+~         )‘. The VECM can then be written as

         Ax, = S&xt_     1   +         Sac+_   1   +   I-z, + et,                                        (3.15)

where, under the null hypothesis, the term d,~lhx~_ 1 is absent. This suggests writing
the null and alternative    hypotheses as Ho: 6, = 0 vs. H,: 6, # 0.21 Written in this
way, the null is seen as a linear restriction on the regression coefficients in (3.15).
An important complication       is that the regressor cQ_ 1 depends on parameters in
~1, that are potentially  unknown.      Moreover, when 6, = 0, c+_ I does not enter
the regression, and so the data provide no information    about any unknown param-
eters in cls. This means that these parameters are econometrically       identified only
under the alternative hypothesis, and this complicates the testing problem in ways
discussed by Davies (1977, 1987), and (in the cointegration     context) by Engle and
Granger (1987).
   In many applications,   this may not be a problem of practical consequence, since
the coefficients in a are determined by the economic theory under consideration.
For example, in the (y,c, i, w, n,r,m,p) system, candidate     error correction     terms

    “Much     of the discussion in this section is based on material in Horvath and Watson (1993).
    ZIFormally, the restriction rank@,&) = rO should be added as a qualifier to H,. Since this constraint
is satisfied almost surely by unconstraiied    estimators of (3.15) it can safely be ignored when constructing
likelihood ratio test statistics.
2878                                                                                     M. W. Watson


with no unknown           parameters    are y - c, y - i, (w - p) - (y - n) and r. Only one
error correction       term, m - p - fi,y - /?,T, contains potentially           unknown     param-
eters. Yet, when testing for cointegration,           a researcher may not want to impose
specific values of potential cointegrating       vectors, particularly during the preliminary
data analytic stages of the empirical investigation. For example, in their investigation
of long-run purchasing power parity, Johansen and Juselius (1992) suggest a two-
step testing procedure. In the first step cointegration              is tested without imposing
any information       about the cointegrating      vector. If the null hypothesis of no cointe-
gration is rejected, a second stage test is conducted                to see if the cointegrating
vector takes on the value predicted by economic theory. The advantage                         of this
two-step approach is that it can uncover cointegrating                relations not predicted by
the specific economic theory under study. The disadvantage                   is that the first stage
test for cointegration      will have low power relative to a test that imposes the correct
cointegrating     vector.
    It is useful to have testing procedures           that can be used when cointegrating
vectors are known and when they are unknown.                    With these two possibilities       in
mind, we write r = rk + ru, where rk denotes the number of cointegrating                     vectors
with known coefficients, and r,, denotes the number of cointegrating                   vectors with
unknown       coefficients. Similarly, write r, = rok + rou and ra = rak + reu, where the
subscripts “k” and “u” denote known and unknown                     respectively. Of course, the
rak subset of “known cointegrating          vectors” are present only under the alternative,
and ahxt is I(1) under the null.
    Likelihood ratio tests for cointegration        with unknown cointegrating          vectors (i.e.
H,: r = r9” vs. H,: r = ro, + rou) are developed in Johansen (1988a), and these tests
are modified to incorporate          known cointegrating         vectors (nonzero values of r
and rak) in Horvath and Watson (1993). The test statistics and their asymptot::
null distributions      are developed below.
    For expositional      purposes it is convenient to consider three special cases. In the
first, r, = rek, so that all of the additional       cointegrating     vectors present under the
alternative    are assumed to be known. In the second, r, = r,,, so that they are all
unknown. The third case allows nonzero values of both rak and ra,. To keep the
notation simple, the tests are derived for the r. = 0 null. In one sense, this is without
loss of generality, since the LR statistic for H,: r = r. vs. H,: r = r, + r, can always be
calculated as the difference between the LR statistics for [H,: r = 0 vs. H,: r = r, + r,]
and [H,: r = 0 vs. H,: r = r,]. However, the asymptotic null distribution                 of the test
statistic does depend on ror and ro,, and this will be discussed at the end of this
section.

Testing H,: r = 0 vs. H,: r = rek        When r. = 0, equation       (3.15) simplifies     to

       Ax, = S,(abx,_ *) + l-2, + E,.                                                           (3.16)

Since abx, _ 1 is known, (3.16) is a multivariate     linear regression,   so that the LR, Wald
Ch. 47: Vector Autoregressions   and Cointeyration                                              2879


and LM statistics have their standard regression form. Letting X = [x, x2 . ..x~]‘.
x-1 =[xoxi...xT-l      ]‘,AX=X-X_,,Z=[z,z,...z,]‘,s=[.slsZ~..sT]’andM,=
[I - Z(Z’Z)- ‘Z’], the OLS estimator of 6, is s:, = (AX’MzX _ ia,)(rx~X’_ ,M,XP 1~,)-1,
which is the Gaussian MLE. The corresponding            Wald test statistic for H, vs. H, is


      W=     [vec(8J]‘[(u~Xf_lMZX_lu,)-1                C32’,]-‘[vec(G^,)]

          = [vec(AX’M,X_,cr,)]‘[(crbX’,M,X_,cc,)-’~~~-’I

             x Cvec(AX’M,X         _ 1cc,)],                                                   (3.17)


where .??, is the usual estimator value of z, (2, = T-‘6’6, where E*is the matrix of
OLS residuals from (3.16)), “vet” is the operator that stacks the column of a
matrix, and the second line uses the result that vec(ABC) = (C’ x A) vet(B) for
conformable     matrices A,B and C. The corresponding      LR and LM statistics are
asymptotically    equivalent to W under the null and local alternatives.
   The asymptotic null distribution   of W is derived in Horvath and Watson (1993),
where it is shown that



      W=-Trace{       [ b,(s)dB(s)‘]‘[         b,(s)Bi(s)‘ds]-‘[       ~,(s)dB(s)‘]~,          (3.18)



where B(s) is an n x 1 Wiener process partitioned         into r, and n - I, components
B,(s) and B2(s), respectively. A proof of this result will not be offered here, but the
form of the limiting distribution    can be understood      by considering    a special case
with I- = 0 (so that there are no lags of Ax, in the regression), zc = I, and al = [l,aO].
In this case, x, is a random walk with n.i.i.d.(O,Z,) innovations,         and (3.16) is the
regression of Ax, onto the first r. elements of x,_ i, say x1 f_ i. Using the true value
of CE, the Wald statistic in (3.17) simplifies to


      W= Cvec(CAx,x;,,-l)I’C(~x~,~-~x~,~-~)-l
                                           o~,lCvec(CAx,x;,,-,)l.
         =TraceC(CAx,x;,,-,)(Cx,,,-,x;,,-,)-1(Cx,,,-,Ax:)l
         = TraceC(T-‘~Ax,x;,,_ 1)(T-2~x1,,_,x~,,_ l)-l(T-‘~x,,,_                        ,&)I

         *Trace[ (SB,(WW’)(                    ~IWIH’~l(           SB,(WW’)],


where the second line uses the result that for square matrices, Trace(AB) =
Trace(BA), and for conformable matrices, Trace(ABCD) = [vec(D)]‘(A x C’) vec(B’)
[Magnus and Neudecker (1988, page 30)], and the last line follows from Lemma
2.3. This verifies (3.18) for the example.
2880                                                                                                    M.W. Watson


Testing H,:r = 0 vs. H,:r = rau When ‘1, is unknown,        the Wald test in (3.17)
cannot be calculated because the regressor abX,_ 1 depends on unknown param-
eters. However, the LR statistic can be calculated,   and useful formulae for the
LR statistic are developed in Anderson (1951) (for the reduced rank regression
model) and Johansen (1988a) (for the VECM). In the context of the VECM (3.3),
Johansen (1988a) shows that the LR statistics’can   be written as


       LR = - T c            ln(1 - y,),                                                                        (3.19)
                    i=l



where yi are the ordered squared canonical correlations              between Ax, and x,_ 1,
after controlling for Ax, _ 1,. . , Ax, _ D+ 1. These canonical correlations can be calcu-
lated as the eigenvalues of T-IS, There S = ,!?; “2(AX’MzX_ ,)(X’_ ,M,X_ i))r x
(X’_ rM,AX)(Z;“‘)‘,       and where Z, = T-‘(AX’h4,AX)          is the estimated covariance
matrix of s,, computed under the null [see Anderson (1984, Chapter 12) or Brillinger
(1980, Chapter      lo)]. Letting %i(S) denote the eigenvalues             of S ordered     as
A,(S) 2 12(S) > ... 3 &(S), then yi from (3.19) is yi = T-‘A,(S). Since the elements
of S are O,(l) from Lemma 2.3, a Taylor series expansion of ln(1 - ri) shows that
the LR statistic can be written as


       LR = 1 &(S) + o,(l).                                                                                     (3.20)
             i=l



Equation (3.20) shows why the LR statistic is sometimes called the “Maximal eigen-
value statistic” when rou= 1 and the “Trace-statistic”    when rou= n [Johansen and
Juselius (1990)].”
   One way to motivate the formula for the LR statistic given in (3.20), is by mani-
pulating the Wald statistic in (3.17).23 To see the relationship  between LR and W
in this case, let L(6,, a,) denote the log likelihood written as a function of 6, and
c1,, and let &(c(,) denote the MLE of 6, for fixed a,. When Z, is known, then the
well known relation between the Wald and LR statistics in the linear regression
model [Engle (1984)] implies that the Wald statistic can be written as



                                                                                                               (3.21)

where the last line follows since cz, does not enter the likelihood when 6a = 0, and
where W(crJ is written to show the dependence       of W on ~1,. From (3.21), with ZE

   “In standard    jargon,     when r 0” #O, the trace   statistic   corresponds      to the test for the alternative
ro, = n - rO,.
   Z3See Hansen (1990b) for a general discussion         of the relationship       between   Wald, LR and LM tests
in the presence of unidentified parameters.
                                                                                                              2881
Ch. 47:   Vector Autoregressions   and Cointeyration


known,

      sup W(cc,) = sup 2CL(&(aJ, a,) - UO, 011
          aa              =u
                     = 2[L(&, 02,)- L(0, O)]
                     =LR                                                                                    (3.22)

where the Sup is taken over all n x ra matrices (Ye. When                               Z, is unknown,        this
equivalence is asymptotic, i.e. Sup,= kV(a,) = LR + o,(l).
   To calculate Sup,” W(cc,), rewrite (3.17) as

      kV(a,)= [vec(AX’M,X_,cc,)]‘[(ahX’~lM,X_,cr,)-l                                @~‘,‘I

                   x [vec(AX’M,X          _ 1cr,)]
                =TR[~~-“2(AX’M,X_,~,)(cr~X’_,M,X_,~x,)-’

                   x @AX’_ 1M,AX)(f’,            “‘)‘]

                = TR [,!?‘, ‘12(AX’M,X ~, )DD’(X’_ 1M,AX)(T’,                         “‘)‘],      where

                                                                            1M,X
                                                               D = !xX,(rAbX’_                 _ 1CIJ 1’2

                = TR [D’(X’_ 1M,AX)&-                ‘(AX’M,X        _ l)D]

                = TR [F’CC’F],                                                                              (3.23)

where F=(X~lM,X_l)‘i2~,Ja~X’_lM,X_lcr,)~”2,and                                      C=(X~,M,X_,))1i2            x
(X’- 1M,AX)Z,   ‘j2’. Since F’F = Ira
                                      u’
                                                         r‘w         rot.
      Sup W(ccJ = Sup TR[F’(CC’)F]                     = c i,(CC’) = 1 ;l,(C’C)
       CI,        F’F=I                                  i=l                  i=l


                      =   LR + oP( l),                                                                      (3.24)

where Ai        denote the ordered eigenvalues of (CC’), and the final two equalities
follow from the standard principal components     argument [for example, see Theil
(1971, page 46)] and A,(CC’) = &(C’C). Equation (3.24) shows that the likelihood
ratio statistic can then be calculated (up to an o,(l) term) as the largest r. eigen-
values of

      c’c = t’, "2(AX'MZX_               ,)(X'_ ,M,X_          ,)-   ‘(x’_ ,M,AX)(~‘, l/2)‘,

To see the relationship   between the formulae for the LR statistics in (3.24) and
(3.20), notice that CC in (3.24) and S in (3.20) differ only in the estimator of ZE; C’C
uses an estimator constructed from residuals calculated under the alternative, while
S uses an estimator constructed     from residuals calculated under the null.
2882                                                                                          M. W. Watson


   In general settings, it is not possible to derive a simple representation    for the
asymptotic    distribution of the Likelihood     Ratio statistic when some parameters
are present only under the alternative. However, the special structure of the VECM
makes such a simple representation      possible. Johansen (1988a) shows that the LR
statistic has the limiting asymptotic null distribution      given by
                 rau
       LR=> 2 A,(H)                                                                                   (3.25)
                 i=l


where H = [jB(s)dB(s)‘]‘[{B(s)B(s)‘ds]-‘[fB(s)dB(s)’],                    and B(s) is an n x 1 Wiener
process. To understand     Johansen’s     result, again             consider the special case with
r = 0 and z, = I,,. In this case, C’C becomes

       C’C=(AX’X_,)(X’_,X_,)~‘(X’_IAX)

            = [~Ax,x:_           1IC~~,-,~:-~l-‘C~~,-~~~:l

            = CT-‘~AX,.~~_,]‘[T-~~X~_~~~_~]-~[T-’C~,_X~]

            -[         /B($dR(s)‘]‘[   jB(s)B(s)‘ds]      - ’ [ /B(s)dB(s)‘]                          (3.26)


from Lemma              2.3. This verifies (3.25) for the example.

Testing H,: r = 0 vs. H,: r, = ra, + rau The model is now

       AX, = %J~&kx,-1)+ 4&,x,-                   1)+ Pz, + &t,                                       (3.27)

where a, has been partitioned      so that uor contains the rllk known cointegrating
vectors, c1,, contains   the ru, unknown       cointegrating vectors and 6, has been
partitioned  conformably    as 6 = (dak 6,“). As above, the LR statistic can be approxi-
mated up to an o,(l) term by maximizing           the Wald statistic over the unknown
parameters    in claU. Let M,, = M, - M,X_ laak(a~,X’_ 1M,X_ 1~,,)- ‘c&X’_ 1M,
denote the matrix that partials both Z and X_lcl,k out of the regresslon (3.27),
The Wald statistic (as a function of apI( and CC,~)can then be written as24

       W(c(,*,Q           = Cvec(AX’MZX_       ,a,,)l’C(~~,x~,M,X_ ItyJ1 @~‘,‘I
                             x [vec(AX’M,X_      1a,,)]

                             x [vec(AX’M,,X_,cr,U)]‘[(~~,Xl,M,,X-,Clyl)-lO~E1l

                             x [vec(AX’M,,X_      1a,y)].                                             (3.28)

   14The first term in (3.28) is the Wald statistic for testing Sak = 0 imposing the constraint that 6,u = 0.
The second term is the Wald statistic for testing &as= 0 with ub,XI_ t and ZC partialled out of the
regression. This form of the Wald statistic can be deduced from the partitioned        inverse formula.
2884                                                                                M. W. Wurson



   As pointed out above, when the null hypothesis is H,: r = rOk+ rO,, the LR test
statistic can be calculated as the difference between the LR statistics for [H,: r = 0
vs. H,: r = r. + r,] and [H,: r = 0 vs. H,: r = r,]. So, for example, when testing
Ho: r = ro, vs. Ha: r = ro, + ra,, the LR statistic is

                      ‘al4                          In”
       LR = - T       c          ln(1 - yi) =       1         &(S) + o,(l),                (3.3 1)
                  i=r,,+     1                  i=r,,+    1



where yi are the canonical correlations        defined below equation (3.19) [see Anderson
(1951) and Johansen (1988a)]. Critical values for the case rok = rak = 0 and n - rou < 5
are given in Johansen (1988a) for the trace-statistic           (so that the alternative is rou =
n - r.,,); these are extended for n - ro, ,< 11 in Osterwald-Lenum              (1992), who also
tabulates asymptotic       critical values for the maximal eigenvalue statistic (so that
r =r       = 0 and ram= 1). Finally, asymptotic          critical values for all combinations
o?r Ok’r””  r   and
         0”’ lllr   ra, with   n - rO, < 9 are tabulated    in Horvath and Watson (1992).

3.3.2.   Non-likelihood-based           approaches

In addition to the likelihood based tests discussed in the last section, standard
univariate    unit root tests and their multivariate            generalizations  have also been
used as tests for cointegration.        To see why these tests are useful, consider the
hypotheses H,: r = 0 vs. H,: r = 1, and suppose that CI is known under the alter-
native. Since the data are not cointegrated            under the null, w, = a’x, is I(l), while
under the alternative      it is I(0). Thus, cointegration         can be tested by applying a
standard unit root test to the univariate          series w,. To be useful in more general
cointegrated     models, standard unit root tests have been modified in two ways.
 First, modifications    have been proposed so that the tests can be applied when c1
is unknown. Second, multivariate        unit root tests have been developed for the general
testing problem H,: r = r, vs. H,: r = r. + r,. We discuss these two modifications
in turn.
    Engle and Granger (1987) develop a test for the hypotheses H,: r = 0 vs. H,: r = 1
when c1is unknown. They suggest using OLS to estimate the single cointegrating
vector and applying a standard unit root test (they suggest an augmented Dickey-
Fuller t-test) to the OLS residuals, +‘r = &x,. Under the alternative, 6i is a consistent
estimator of LX,so that $, will behave like w,. However, under the null, 6i is obtained
from a “spurious” regression (see Section 2.6.3) and the residuals from a spurious
regression (kZ) behave differently than non-stochastic               linear combinations    of I(1)
variables (w,). This affects the null distribution           of unit root statistics calculated
using tit. For example, the Dickey-Fuller             t-statistic constructed     using fi’t has a
different null distribution     than the statistic calculated using w,, so that the usual
critical values given in Fuller (1976) cannot be used for the Engle-Granger              test. The
correct asymptotic null distribution       of the statistic is derived in Phillips and Ouliaris
(1990), and is tabulated in Engle and Yoo (1987) and MacKinnon                    (1991). Hansen
Ch. 47:   Vector Autoregressions   and Cointegration                                       2885


(1990a) proposes a modification         of the EngleeGranger       test that is based on an
iterated Cochrane-Orcutt        estimator which eliminates the “spurious           regression”
problem and results in test statistics with standard             Dickey-Fuller     asymptotic
distributions    under the null.
    Stock and Watson (1988), building on work by Fountis and Dickey (1986),
propose a multivariate     unit root test. Their procedure is most easily described by
considering    the VAR(l) model, x, = @x,_ 1 + c,, together with the hypotheses H,:
r = 0 vs. H,: r = ra. Under the null the data are not cointegrated,            so that @ = I,.
Under the alternative     there are r. covariance      stationary    linear combinations      of
the data, so that @ has r. eigenvalues that are less than one in modulus. The Stock-
Watson test is based on the ordered eigenvalues of 6, the OLS estimator of @.
Writing these eigenvalues as Il,I 2 1x,( > . . .. the test is based on ;l’n_r,+ 1, the r,th
smallest eigenvalue.     Under the null, An_*,+r = 1, while under the alternative,
IAn- r. + 11< 1. The asymptotic      null distribution    of T(G - I) and T( Iii\ - 1) are
derived in Stock and Watson (1988), and critical values for T( I%n_-r,+ 1) - 1) are
tabulated.    This paper also develops the required modifications             for testing in a
general VAR(p) model with r0 # 0.

3.3.3.     Comparison      of the tests

The tests discussed above differ from one another in two important respects. First,
some of the tests are constructed    using the true value of the cointegrating     vectors
under the alternative, while others estimate the cointegrating      vectors. Second, the
likelihood based tests focus their attention on 6 in (3.3), while the non-likelihood-
based tests focus on the serial correlation properties of certain linear combinations
of the data. Of course, knowledge of the cointegrating        vectors, if available, will
increase the power of the tests. The relative power of tests that focus on S and
tests that focus on the serial correlation   properties of w, = CL’X,is less clear.
   Some insight can be obtained by considering a special case of the VECM (3.3)

      Ax, = SJa;xt_ ,) + E,.                                                             (3.32)

Suppose that ~1,is known and that the competing hypotheses              are H,: r = 0 vs. H,:
r = 1. Multiplying both sides of (3.31) by a: yields

      Aw~=Bw,-~+~,,                                                                      (3.33)

where w, = abxl, 0 = czbs, and e, = c~:E,. Unit root tests constructed    from w, test
the hypotheses H,: 8 = (cQ,) = 0 vs. H,: 0 = ($8,) < 0, while the VECM-based          LR
and Wald statistics test H,: 6, = 0 vs. H,: 6, # 0. Thus, unit root tests constructed
from w, focus on departures from the 6, = 0 null in the direction of the cointegrating
vector CI,. In contrast, the VECM likelihood based tests are invariant to transfor-
mations of the form Pcrbx, _ 1 when CI, is known and Px,_, when u, is unknown,
2886                                                                                            M. W. Watson


where P is an arbitrary nonsingular      matrix. Thus, the likelihood based tests aren’t
focused in a single direction like the univariate        unit root test. This suggests that
tests based on w, should perform relatively well for departures in the direction of
LY.,but relatively poorly in other directions. As an extreme case, when LY~S.= 0, the
elements of x, are I(2) and w, is I(1). [The system is CZ(2,l) in Engle and Granger’s
(1987) notation.]    The elements are still cointegrated,      at least in the sense that a
particular linear combination     of the variables is less persistent than the individual
elements of x,, and this form of cointegration        can be detected by a nonzero value
of 6, in equation (3.32) even though 8 = 0 in (3.33).26
   A systematic comparison      of the power properties of the various tests will not
be carried out here, but one simple Monte Carlo experiment, taken from a set of
experiments      in Horvath   and Watson       (1993), highlights     the power tradeoffs.
Consider a bivariate model of the form given in (3.32) with E, - n.i.i.d.(O, I,), CI,=
(1 - 1)’ and 6, = (S,, da*)‘. This design implies that 0 = de, - S,* in (3.33), so that
the unit root tests should perform reasonably           well when Id,, - fi(12(is large and
reasonably poorly when 16,, - 8J is small. Changes in 6, have two effects on the
power of the VECM likelihood based tests. In the classical multivariate           regression
model, the power of the likelihood based tests increase with { = hi, + a:,. However,
in the VECM, changes in 6,, and Lju2also affect the serial correlation            properties
of the regressor, w, _ 1 = dx, _ 1, as well as [. Indeed, for this design, w, - AR(l) with



                                                Table 1
                             Comparing   power of tests for cointegration.”
            Size for 5 percent asymptotic critical values and power for tests carried         out
                                          at 5 percent IeveP




           Test                        (0,O)   (0.05,0.055)    (-0.05,0.055)    (-0.0105,0)

           DF (a known)                 5.0         6.5              81.5            81.9
           EGDF     (a unknown)         4.1         2.9              31.9            32.5
           Wald (a known)               4.1        95.0              54.2            91.5
           LR (c( unknown)              4.4        86.1              20.8            60.7

              “Design   is




           where E, = (E:c,?) ’ - n.l.l. d.(O,I,) and t = I ,_.., 100.
              bThese results are based on 10,000 replications.         The first column shows
           rejection frequencies using asymptotic critical values. The other columns show
           rejection frequencies       using 5 percent critical values calculated     from the
           experiment in column 1.


  26This example   was pointed   out to me by T. Rothenberg.
Ch. 47: Vector Autorepmions             und Cointegration                                            2887


AR coefficient 8 = da1 - Sal [see equation (3.33)]. Increases in 6’ lead to increases
in the variability of the regressor and increases in the power of the test.
    Table I shows size and power for four different values of 6, when T = 100 in
this bivariate system. Four tests are considered: (1) the Dickey-Fuller            (DF) t-test
using the true value of IX;(2) the Engle-Granger         test (EG-DF,      the Dickey-Fuller
t-test using a value of c( estimated by OLS); (3) the Wald statistic for Ho: 6, = 0
using the true value of a; and (4) the LR statistic for H,: 6, = 0 for unknown ~1.
    The table contains several noteworthy       results. First, for this simple design, the
size of the tests is close to the size predicted by asymptotic            theory. Second, as
expected, the DF and EG-DF tests perform quite poorly when 16,, - da21 is small.
Third, increasing the serial correlation in w, = abxt, while holding Szl + 8:, constant,
increases the power of the likelihood based tests. [This can be seen by comparing
the 6, = (0.05,0.055) and 6, = (- 0.05,0.055) columns.] Fourth, increasing 6f1 + 6,2,,
while holding the serial correlation       in w, constant,     increases the power of the
likelihood based tests. [This can be seen by comparing               the 6, = (- 0.05, 0.055)
and 6, = (- 0.105, 0.00) columns.] Fifth, when the DF and EG--DF are focused
on the correct direction, their power exceeds the likelihood based tests. [This can
be seen from the 6, = (- 0.05, 0.055) column.] Finally, there is a gain in power
from incorporating    the true value of the cointegrating         vector. (This can be seen
by comparing the DF test to the EG-DF             test and the Wald test to the LR test.)
A more thorough comparison          of the tests is contained      in Horvath and Watson
(1993).



3.4.     Estimating            cointegrating    vectors

3.4.1.        Gaussian maximum likelihood estimation                (MLE)     based
              on the triangular representation

In Section 3.2.4 the triangular                representation   of the cointegrated   system was written
as


                   Ax1.t= Ul,,,                                                                      (3.9)

       X2,*    -   Px1,r   =    U2.f’                                                              (3.10)

where U, = D(L)&,. In this section we discuss the MLE estimator of fi under the
assumption that E, - n.i.i.d.(O, I). The n.i.i.d. assumption is used only to motivate the
Gaussian MLE. The asymptotic distribution            of estimators that are derived below
follow under the weaker distributional      assumptions     listed in Lemma 2.3. In Section
2.6.4 we considered the OLS estimator of/l in a bivariate model, and paid particular
attention  to the distribution   of the estimator when D(L) = D with d,, = d,, = 0.
In this case, ~i,~ is weakly exogenous for /I and the MLE estimator corresponds
2888                                                                            M.W.     Wutson



to the OLS estimator. Recall (see Section 2.6.4) that when d,, = It,, = 0, the OLS
estimator of p has an asymptotic distribution     that can be represented as a variance
mixture of normals and that the t-statistic for p has an asymptotic null distribution
that is standard    normal. This means that tests concerning         the value of /I and
confidence intervals for B can be constructed in the usual way; complications          from
the unit roots in the system can be ignored. These results carry over immediately
to the vector case where ~i,~ is k x 1 and x*,~ is r x 1 when u, is serially uncorrelated
and ul,t is independent    of u~,~. Somewhat surprisingly,   they also carry over to the
MLE of fi in the general model with u, = D(L)&,, so that the errors are both serially
and cross correlated.
   Intuition for this result can be developed by considering       the static model with
u, = D.zt and D is not necessarily block diagonal. Since ~i,~ and u2,* are correlated,
the MLE of /3 corresponds      to the seemingly unrelated regression (SUR) estimator
from (3.9)-(3.10). But, since there are no unknown regression coefficients in (3.9),
the SUR estimator can be calculated by OLS in the regression

       x2.t = BXl,,+ a1,1+        ez,r,                                                  (3.34)

where y is the coefficient from the regression of u*,~ onto u~,~, and e2,, = u~,~ -
E[u,,,lu,,,] is the residual from this regression. By construction,   e2,1 is independent
of {xi,,}:= 1 for all t. Moreover, since y is a coefficient on a zero mean stationary
regressor and b is a coefficient on a martingale,     the limiting scaled “X’X” matrix
from the regression is block diagonal (Section 2.5.1). Thus from Lemma 2.3,


        T(&p)=(T-‘C            e2,tx;,,)(T~2Cx1,,x;,,)-1
                                                    + o,(l)

                                             )( s
                                                                                -1

                                                Z,l/’   B,(s)B,(s)‘ds(Zu’j’)’        ,   (3.35)


where Z,,, = var(u,,,), ZeZ = var(e2,J and B(s) is an n x 1 Brownian motion process,
partitioned  as B(s) = [B,(s)‘B,(s)‘]‘, where B,(s) is k x 1 and B*(S) is r x 1. Except
for the change in scale factors and dimensions, equation (3.35) has the same form
as (2.21), the asymptotic     distribution    of fi in the case d,, = d,, = 0. Thus, the
asymptotic distribution   of j? can be represented as a variance mixture of normals.
Moreover, the same conditioning          argument used when d,, = d,, = 0 implies that
the asymptotic distribution      of Wald test statistics concerning   p have their usual
large sample x2 distribution.       Thus, inference about j can be carried out using
standard procedures and standard distributions.
   Now suppose that a, = D(L)&,. The dynamic analogue of (3.34) is

       X 2,,   =   Bx,,,+ Y(-WX,,,+ e2,t,                                                (3.36)

where    Y(G%,,   =~C~2,rl~~~l,rI~~ll  = ~C~2,tl{~I,r~T=11~    and e2,t=uz,t-
E[u,,,l{u~,~}T=
              1]. Letting D,(L) denote the first k rows of D(L) and D,(L) denote
Ch. 47: Vector Autoreqressions      and Cointeyration                                                       2889


the remaining r rows, then from classical projection formulae [e.g. Whittle (1983,
Chapter 5)], y(L) = D,(L)D,(L)‘[D,(L)D,(L-‘)‘]-‘.27           Equation (3.36) differs from
(3.34) in two ways. First, there is potential serial correlation       in the error term of
(3.36), and second, y(L) in (3.36) is a two-sided polynomial.             These differences
complicate the estimation       process.
   To focus on the first complication,         assume that y(L) = 0. In this case, (3.36)
is a regression model with a serially correlated error, so that (asymptotically)           the
MLE of p is just the feasible GLS estimator in (3.36). But, as shown in Phillips
and Park (1988), the GLS correction has no effect on the asymptotic distribution
of the estimator: the OLS estimator and GLS estimators of p in (3.17) are asymp-
totically equivalent.28    Since the regression error e2,( and the regre:sors (x~,~}~~ 1
are independent,     by analogy with the serially uncorrelated     case, T(/I - fi) will have
an asymptotic distribution      that can be represented as a variance mixture of normals.
Indeed, the distribution     will be exactly of the form (3.35), where now Z’,, and Ze2
represent “long-run”      covariance matrices.29
    Using conditioning    arguments like those used in Section 2.6.4, it is straightforward
to show that the Wald test statistics constructed         from the GLS estimators of /I
have large sample x2 distributions.        However, since the errors in (3.36) are serially
correlated, the usual estimator of the covariance matrix for the OLS estimators of
p is inappropriate,    and a serial correlation robust covariance matrix is required.30
Wald test statistics constructed        from OLS estimators     of fi together with serial
correlation robust estimators of covariance matrices will be asymptotically            x2 and


   27This is the formula for the projection onto the infinite sample, i.e. y(L)Ax,! = ECU:) {Ax,’ ),a= ,I.
In general, y(L) is two-sided and of infinite order, so that this is an approximation    to E[u:J {Ax,‘}f, r].
The effect of this approximation       error on estimators of B is discussed below.
   ‘sThis can be demonstrated        as follows. When y(L) = 0, e,,, = D&)c,,,    and x1,, = D,~(L)E~,~ where
E,.~ and cl,, are the first k and last r elements of E,, and D, t(L) and Dzz(L) are the appropriate  dtagonal
blocks of D(L). Let C(L) = [D22(L)]-1 and assume that the matrix coefficients in C(L), D,,(L) and
D,,(L) are I-summable.       Letting 6 = vet(@), the GLS estimator and OLS estimators satisfy




where q, = [xl,,@I,],   and defining     the operator   L so that z,L = Lz, = s,_r,ri,   = [x1,,@   C(L)‘]. Using
the Lemma 2.3

      T&s - 4 = IT-2&,,~;,,            OI,I-‘CT-‘C(x;,,OI,)D,,(L)&,.,l
                  = IT-z&.$,,,    O~,I-‘CT-‘~(X;,~~~~I~)~~.,)I   + o,(t),
      T(6^,,, -6)=[T-Z~{C(~)~,,,}{x;,,C(L)‘}O~,I-’CT~’~(~~,,OC(~)I)~~.,1
                  = IT~‘~x,.,x;,,      OC(t~C(t)l-‘CT-‘~(x~.~~C(~~~~~,)l+o,(t)~
Since C(l)-’ = Dz2(l), T(go,, - 6) = T(6^,,, - 6) + o,(l), so that T($o,,, - Jo,,) LO.
    “The    long-run covariance     matrix for an n x 1 covariance     stationary vector y, with absolutely
summable autocovariances       is x,E    m Cov(y,, y,_& which is 2n times the spectral density matrix for y,
at frequency zero.
   “See Wooldridge’s chapter of the Handbook          for a thorough discussion of robust covariance matrix
estimators.
2890                                                                                           M. W. Watson


Will   be asymptotically         equivalent    to the statistics calculated        using the GLS
estimators    of b [Phillips and Park (1988)]. In summary, the serial correlation                  in
(3.36) poses no major obstacles.
   The two-sided polynomial             y(L) poses more of a problem, and three different
solutions have developed. In the first approach, y(L) is approximated                    by a finite
order (two-sided) polynomial. 31 In this case, equation (3.36) can be estimated by
GLS, yielding what Stock and Watson (1993) call the “Dynamic GLS” estimator
of fi. Alternatively,    utilizing the Phillips and Park (1988) result, an asymptotically
equivalent “Dynamic OLS’estimator                can be constructed by applying OLS to (3.36).
   To motivate the second approach, assume for a moment that y(L) were known.
The OLS estimator of p would then be formed by regressing x~,~ - y(L)Ax,,, onto
x1,,. But T-‘C[y(L)Axi,,]xi,,               = r-‘~[y(l)Ax,,,]x,,,      + B + o,,(l), where B =
lim f+m E(y,x,,,), where Y, = [Y(L) - YU)IAX~,,.             (This can be verified using (c) and
(d) of Lemma 2.3.) Thus, an asymptotically             equivalent estimator can be constructed
by regressing x~,~ - y(l)Axi,, onto x1,( and correcting for the “bias” term B. Park’s
(1992) “Canonical       Cointegrating       Regression” estimator and Phillips and Hansen’s
(1990) “Fully Modified” estimator use this approach, where in both cases y(l) and
B are replaced by consistent estimators.
   The final approach          is motivated     by the observation       that the low frequency
movements in the data asymptotically              dominate the estimator of p. Phillips (1991 b)
demonstrates that an efficient band spectrum regression, concentrating                 on frequency
zero, can be used to calculate an estimator asymptotically                equivalent to the MLE
estimator in (3.36).32
   All of these suggestions           lead to asymptotically        equivalent    estimators.    The
estimators have asymptotic representations               of the form (3.35) (where _ZU,and Z_
represent long-run covariance            matrices), and thus their distributions         can be re-
presented as variance mixtures of normals. Wald test statistics computed                       using
the estimators (and serial correlation robust matrices) have the usual large sample
x2 distributions      under the null.

3.4.2.       Gaussian maximum       likelihood estimation based on the VECM

Most of the empirical work with cointegrated systems has utilized parameterizations
based on the finite order VECM representation         shown in equation (3.3). Exact
MLEs calculated from the finite order VECM representation             of the model are
different from the exact MLE’s calculated from the triangular representations      that
were developed in the last section. The reason is that the VECM imposes constraints
on the coefficients in y(L) and the serial correlation     properties of e2,r in (3.36).
    3’This suggestion can be found in papers by Hansen (1988) Phillips (1991a), Phillips and Loretan
(1991), Saikkonen (1991) and Stock and Watson (1993). Saikkonen (1991) contains a careful discussion
of the approximation   error that arises when y(L) is approximated      by a finite order polynomial.  Using
results of Berk (1974) and Said and Dickey (1984) he shows that a consistent estimator of y(l) (which,
as we show below is required for an asymptotically     efficient estimator of /?) obtains if the order of the
estimated polynomial    y(L) increases at rate Td for 0 < 6 cf.
   -“See Hannan (1970) and Engle (1976) for a general discussion of band spectrum regression.
Ch. 47: Vector Autoregressions   and Cointegration                                             2891


These restrictions      were not exploited in the estimators discussed in Section 3.41.
While these restrictions are asymptotically        uninformative     about j?, they impact the
estimator in small samples.
   Gaussian MLEs of/J constructed from the finite order VECM (3.2) are analyzed
in Johansen (1988a, 1991) and Ahn and Reinsel (1990) using the reduced rank
regression framework originally studied by Anderson (195 1). Both papers discuss
computational       approaches for computing the MLEs, and more importantly,                 derive
the asymptotic distribution       of the Gaussian MLE. There are two minor differences
between the Johansen (1988a, 1991) and Ahn and Reinsel(l990)                approaches. First,
different normalizations      are employed. Since 17 = 6~’ = 6FF- ‘CYfor any nonsingular
r x r matrix F, the parameters       in 6 and CYare not econometrically      identified without
further restrictions.     Ahn and Reinsel (1990) use the same identifying              restriction
imposed in the triangular          model, i.e., a’ = [ - /IZ,]; Johansen       (1991) uses the
normalization      Oi’Roi= I,, where R is the sample moment matrix of residuals from
the regression of x,-r onto Ax~_~, i = 1,. . . , p - 1. Both sets of restrictions                are
normalizations      in the sense that they “just” identify the model, and lead to identical
values of the maximized likelihood. Partitioning           Johansen’s MLE as oi = (02; a;)‘,
where bi, is k x I and oi, is r x r, implies that the MLE of fi using Ahn and Reinsel’s
normalization      is p^= - (&,&;‘y.
    The approaches       also differ in the computational      algorithm used to maximize
the likelihood function. Johansen (1988a), following Anderson (1951), suggests an
algorithm based on partial canonical correlation            analysis between Ax, and x,_ 1
given Ax,- i, i = 1,. , p - 1. This framework is useful because likelihood ratio tests
for cointegration     are computed as a byproduct (see Equation 3.19). Ahn and Reinsel
(1990) suggests an algorithm based on iterative least squares calculations.               Modern
computers      quickly find the MLEs for typical economic               systems using either
algorithm.
   Some key results derived in both Johansen (1988a) and Ahn and Reinsel (1990)
are transparent      from the latter’s regression formulae. As in Section 3.3, write the
VECM as

               _ 1+ I-z, + E,
     Ax, = ~CX’X,

          =fiCX2,t-l-BXl,t~11+~Z1+&,,                                                       (3.37)

where z, includes the relevant lags of Ax, and the second line imposes the Ahn
Reinsel normalization     of ~1.Let w, _ I = x2 f _ 1 - /?x, f _ 1 denote the error correction
term, and let 0 = [vet(G)’ vet(r)’ vec(j?)‘]’ denote the vector of unknown parameters.
Using the well known relations between the vet operator and Kronecker products,
vec(rz,) = (z:Ol,)vec(T),       vec(bw,_ 1) = (w:_ I @l,)vec(r)          and vec(&?x,,,_ r) =
(x; f_ I 0 6) vet(p). Using th ese expressions, and defining Q, = [(z, 0 I,) (& _ 1@ I,,)
(x~:~~1OS)]‘, then the Gauss-Newton           iterations for estimating 0 are

     @+l= e’+ [cQI~','Q,]-'[CQ:~','~:,]                                                     (3.38)
2892                                                                                             M. W. Watson



where 8’ denotes the estimator of 0 at the ith iteration, k’, = T- ‘CE,& and Q,
and E, are evaluated at i?.33 Thus, the Gauss-Newton         regression corresponds    to
the GLS regression of E, onto (z: 0 I,), (wi _ 10 I,,) and (x’, ,! _ 10 6). Since the z,
and w, are I(0) with zero mean and x~,~ is I(l), the analysis m Section 2 suggests
that the limiting regression “X’X” matrix will be block diagonal, and the MLEs
of 6 and I- will be asymptotically    independent   of the MLE of /?. Johansen (1988a)
and Ahn and Reinsel (1990) show that this is indeed the case. In addition they
demonstrate     that the MLE of /3 has a limiting distribution      of the same form as
shown in equation (3.35) above, so that T(fi - fl) can be represented as a variance
mixture of normals.       Finally, paralleling  the result for MLEs from triangular
representation,    Johansen (1988a) and Ahn and Reinsel (1990) demonstrate        that

         [~Q;~','Q,]-"2(&6) %'(O,Z),

so that hypothesis tests and confidence intervals for all of the parameters                              in the
VECM can be constructed     using the normal and x2 distributions.

3.4.3.     Comparison      and efJiciency of the estimators

The estimated cointegrating            vectors constructed     from the VECM (3.3) or the
triangular representation       (3.9)-(3.10) differ only in the way that the I(0) dynamics
of the system are parameterized.          The VECM models these dynamics using a VAR
involving the first differences Ax, ,f, AxZ,( and the error correction terms, x~,~ - /?x~,~;
the triangular representation       uses only Ax, f and the error correction terms. Section
3.4.1 showed that the exact parameterization             of the I(0) dynamics ~ y(L) and the
serial correlation     of the error term in (3.36) - mattered little for the asymptotic
behavior     of the estimator        from the triangular       representation.      In particular,
estimators of b that ignore residual serial correlation             and replace y(L) with y(l)
and adjust for bias are asymptotically            equivalent     to the exact MLE in (3.36).
Saikkonen      (1991) shows that this asymptotic           equivalence     extends to Gaussian
MLEs constructed from the VECM. Estimators of /? constructed                     from (3.36) with
appropriate      nonparametric      estimators   of y( 1) are asymptotically        equivalent    to
Gaussian     MLEs constructed          from the VECM (3.3). Similarly, test statistics for
H,: R[vec(/l)]     = r constructed     from estimators based on the triangular representa-
tion and the VECM are also asymptotically              equivalent.


   3SConsistent initial conditions for the iterations are easily constructed   from the OLS_estimator_s of
the parameters  in the VAR (3.2). Let fi denote the OLS estimator of IT, partitioned      as 17 = [IT,II,],
where “r is n x (n -r) and e2 is n x r; further partition       I?, = [I?; Lfi;r]’  and fi, = [I?‘;, Ii’;,]‘,
where 17, 1is (n - r) x (n - r), I7,, is r x (n - r), or2 is (n - r) x r and 17,, is r x r. Then I?, serves as an
initial consistent estimator of 6 and -(J722))‘nz1        serves as an estimator of 8. Ahn and Reinsel(l990)
and Saikkonen (1992) develop efficient two-step estimators           of B constructed     from IT, and Engle and
Yoo (1991) develop an efficient three-step estimator of all the parameters          in the model using iterations
similar to those in (3.38).
Ch. 47: Vector Autoregressions   und Cointeyration                                                  2893


    Since estimators of cointegrating          vectors do not have asymptotic normal distri-
 butions, the standard          analysis of asymptotic          efficiency - based on comparing
 estimator’s asymptotic covariance matrices ~ cannot be used. Phillips (199 1a) and
 Saikkonen (199 1) discuss efficiency of cointegrating                vectors using generalizations
 of the standard efficiency definitions.34            Loosely speaking, these generalizations
 compare two estimators            in terms of the relative probability          that the estimators
 are contained in certain convex regions that are symmetric about the true value
 of the parameter        vector. Phillips (1991a) shows that when U, in the triangular
 representation      (3.9)-(3.10) is generated by a Gaussian               ARMA process, then the
 MLE is asymptotically            efficient. Saikkonen       (1991) considers estimators         whose
 asymptotic     distributions     can be represented        by a certain class of functionals          of
 Brownian      motion. This class contains            the OLS and nonlinear             least squares
 estimators analyzed in Stock (1987), the instrumental                 variable estimators analyzed
 in Phillips and Hansen (1990), all of the estimators discussed in Sections 3.4.1 and
 3.4.2, and virtually every other estimator that has been suggested. Saikkonen shows
 that the Gaussian MLE or (any of the estimators that are asymptotically                    equivalent
 to the Gaussian MLE) are asymptotically                efficient members of this class.
    Several studies have used Monte Carlo methods to examine the small sample
 behavior of the various estimators of cointegrating                  vectors. A partial list of the
 Monte Carlo studies is Ahn and Reinsel (1990), Banerjee et al. (1986), Gonzalo
 (1989), Park and Ogaki (1991), Phillips and Hansen (1990), Phillips and Loretan
 (1991) and Stock and Watson (1993). A survey of these studies suggests three
 general conclusions.       First, the static OLS estimator can be very badly biased even
 when the sample size is reasonably            large. This finding is consistent with the bias
 in the asymptotic distribution          of the OLS estimator (see equation (2.22)) that was
 noted by Stock (1987).
    The second general conclusion concerns the small sample behavior of the Gaussian
 MLE based on the finite order VECM. The Monte Carlo studies discovered that,
when the sample size is small, the estimator has a very large mean squared error,
caused by a few extreme outliers. Gaussian MLEs based on the triangular represen-
tation do not share this characteristic.             Some insight into this phenomenon                 is
provided in Phillips (1991~) which derives the exact (small sample) distribution                       of
the estimators in a model in which the variables follow independent                          Gaussian
random walks. The MLE constructed from the VECM is shown to have a Cauchy
distribution    and so has no integer moments, while the estimator based on the tri-
angular representation         has integer moments up to order T - n + r. While Phillips’
results concern a model in which the variables are not cointegrated,                       it is useful
because it suggests that when the data are “weakly” cointegrated                      - as might be
the case in small samples - the estimated cointegrating                 vector will (approximately)
have these characteristics.
   The third general conclusion concerns the approximate                     Gaussian MLEs based

  “‘See Basawa and Scott (1983)and Sweeting (1983).
2894                                                                                   M. w. Wutson



on the triangular     representation. The small sample properties of these estimators
and test statistics depend in an important way on the estimator used for the long-
run covariance matrix of the data (spectrum at frequency zero), which is used to
construct an estimator of y( 1) and the long-run residual variance in (3.36). Experi-
ments in Park and Ogaki (1991), Stock and Watson (1993) and (in a different
context) Andrews and Moynihan          (1990), suggest that autoregressive estimators
or estimators     that rely on autoregressive   pre-whitening   outperform estimators
based on simple weighted averages of sample covariances.



3.5.      The role of constants   and trends

3.5.1.     The model of deterministic     components

Thus far, deterministic   components     in the time series (constants and trends) have
been ignored. These components          are important         for three reasons. First, they
represent the average growth or nonzero level present in virtually all economic
time series; second, they affect the efficiency of estimated cointegrating        vectors and
the power of tests for cointegration;   finally, they affect the distribution    of estimated
cointegrating   vectors and cointegration       test statistics. Accordingly,   suppose that
the observed n x 1 time series y, can be represented as


         Y,=P,+Plt+x,,                                                                        (3.39)

where x, is generated by the VAR (3.1). In (3.39), pLo+ pLlt represents the deter-
ministic component       of yt, and x, represents the stochastic component.             In this
section we discuss how the deterministic         components       affect the estimation    and
testing procedures that we have already surveyed.35
   There is a simple way to modify the procedures            so that they can be applied
to y,. The deterministic     components     can be eliminated       by regressing y, onto a
constant and time trend. Letting y: denote the detrended series, the estimation
and testing procedures developed above can then be used by replacing x, with y;.
This changes the asymptotic distribution         of the statistics in a simple way: since
the detrended values of y, and x, are identical, all statistics have the same limiting
representation    with the Brownian       motion process B(s) replaced by B’(s), the
detrended Brownian motion introduced           in Section 2.3.
   While this approach is simple, it is often statistically inefficient because it discards
all of the deterministic  trend information    in the data, and the relationship      between
these trends is often the most useful information        about cointegration.     To see this,


   35We limit discussion lo linear trends in y, for reasons of brevity and because this is the most
important   model for empirical applications. The results are readily extended to higher order trend
polynomials  and other smooth trend functions.
Ch. 47:     Vector Autoregressions             and Cointeyration                                              2895



let CIdenote            a cointegrating             vector and consider   the “stable”   linear combination

         dy, = A, + 2, t + wt,                                                                              (3.40)

where JUO= CX’,U~,  R, = a’~~, and w, = a’x,. In most (if not all) applications,        the
cointegrating    vector will annihilate    both the stochastic trend and deterministic
trend in a’y,. That is, w, will be I(0) and J., =0.36 As shown below, this means
that one linear combination      of the coefficients in the cointegrating   vector can be
consistently estimated at rate T 3’2. In contrast, when detrended data are used, the
cointegrating   vectors are consistently    estimated at rate T. Thus, the data’s deter-
ministic trends are the dominant        source of information    about the cointegrating
vector and detrending     the data throws this information      away.
   The remainder of this section discusses estimation        and testing procedures that
utilize the data’s deterministic  trends. Most of these procedures are simple modifi-
cations of the procedures that were developed above.

3.5.2.          Estimating        cointegrating             vectors

We begin with a discussion of the MLE of cointegrating              vectors based on the
triangular  representation.   Partitioning    yt into (n - r) x 1 and r x 1 components,
yi,, and y2,t, the triangular  representation     for y, is

            = Y + Ul,,,
         AY1.t                                                                                              (3.41)

         Y2.t    -   BYI,,   =   Al   +   4t    +   U2.r.                                                   (3.42)

This is identical to the triangular representation    for x, given in (3.9))(3.10) except
for the constant and trend terms. The constant term in (3.41) represents the average
growth in yr,,. In most situations 1, = 0 in (3.42) since the cointegrating          vector
annihilates   the deterministic  trend in the variables. In this case, 2, denotes the
mean of the error correction        terms, which is unrestricted      in most economic
applications.
   Assuming that i1 = 0 and 1, and y are unrestricted,       efficient estimation of b in
(3.42) proceeds as in Section 3.3.1. The only difference is that the equations now
include a constant term. As in Section 3.3.1, Wald, LR or LM test statistics for
testing H,: R[vec(p)] = r will have limiting x2 distributions,      and confidence inter-
vals for the elements of /I can be constructed     in the usual way. The only result
from Section 3.3.1 that needs to be modified is the asymptotic          distribution   of b.
This estimator is calculated from the regression of y, f onto Y,,~, leads and lags of
AY,,, and a constant term. When the y, ,f data contain a trend [y # 0 in (3.41)],

   360 aki and Park (1990) define these two restrictions as “stochastic” and “deterministic”       cointegration.
Stochattic cointegration means that w, is I(O), while deterministic     cointegration means       that 1, = 0.
2896                                                                                 M. W. Watson


one of the canonical regressors is a time trend (z~,~ from Section 2.5.1), and the
estimated coefficient on the time trend converges at rate T3’*. This means that
one linear combination     of the estimated coefficients in the cointegrating vector
converges to its true value very quickly; when the model did not contain a linear
trend the estimator converged at rate T.
   The results for MLEs based on the finite order VECM representation             are
analogous to those from the triangular representation.    The VECM representation
for y, is derived directly from (3.2) and (3.39),


                                  p-1
       Ay, =   pl   +‘@‘x,_ 1) + 1 @+Ax,_~ + E,
                                  i=l

                                                  p-1
           =~1+6("'y,_,--1,--i,t)+                  c      @iAyt_i+~,,                     (3.43)
                                                   i=l




where b1 = (I - C;:t Q&r,               2, = cl’pO and /2, = “‘pt. Again, in most applications
II, = 0, and the VECM is



       'y, = ' + '("y,_    1)+   C       ~i'y,_   i +&r,                                   (3.44)
                                 i=l




where 0 = PI - 62,. When the only restriction on pl is a’pl = 0, the constant term
19is unconstrained,     and (3.44) has the same form as (3.2) except that a constant
term has been added. Thus, the Gaussian MLE from (3.44) is constructed           exactly
as in Section 3.4.2 with the addition of a constant term in all equations. The distri-
bution of test statistics is unaffected, but for the reasons discussed above, the
asqrmptotic distribution    of the cointegrating vector changes because of the presence
of the deterministic    trend.
   In some situations the data are not trending in a deterministic      fashion, so that
pl = 0. (For example, this is arguably the case when y, is a vector of U.S. interest
rates.) When pL1= 0, then ,iil = 0 in (3.43), and this imposes a constraint      on 0 in
(3.44). To impose this constraint,      the model can be written as



                                                                                           (3.45)



and estimated using a modification      of the Gauss-Newton     iterations in (3.38) or
a modification    of Johansen’s canonical correlation   approach     [see Johansen and
Juselius (1990)].
Ch. 47: Vector Autoregressions and Cointegration                                                 2897


3.5.3.   Testing for    cointegration

 Deterministic     trends have important effects on tests for cointegration.           AS discussed
 in Johansen and Juselius (1990) and Johansen (1991, 1992a), it is useful to consider
 two separate effects. First, as in (3.43))(3.44) nonzero values of p0 and pi affect
 the form of the VECM, and this, in turn, affects the form of the cointegration                    test
 statistic. Second, the deterministic components affect the properties of the regressors,
 and this, in turn, affects the distribution      of cointegration    test statistics. In the most
 general form of the test considered in Section 3.3.1, c1was partitioned                into known
 and unknown cointegrating          vectors under both the null and alternative; that is, CI
 was written as c1= (cI,~GL,”CI,~clou). When nonzero values of pu, and .~i are allowed,
 the precise form of the statistic and resulting asymptotic null distribution                depends
 on which of these cointegrating           vectors annihilate      the trend or constant          [see
 Horvath and Watson (1993)]. Rather than catalogue all of the possible cases, the
 major statistical issues will be discussed in the context of two examples. The reader
 is referred to Johansen and Juselius (1990), Johansen (1992a) and Horvath and
 Watson (1993) for a more systematic treatment.
     In the first example, suppose that r = 0 under the null, that CIis known under
 the alternative,     that j+, and pi are nonzero, but that “‘pi = 0 is known. To be
 concrete, suppose that the data are aggregate time series on the logarithms                         of
 income, consumption         and investment for the United States. The balanced growth
 hypothesis suggests two possible cointegrating           relations with cointegrating        vectors
 (1, - 1,O) and (l,O, - 1). The series exhibit deterministic            growth, so that pL1# 0,
 and the sample growth rates are approximately            equal, so that “‘pi = 0 is reasonable.
 In this example, (3.44) is the correct specification of the VECM with 0 unrestricted
 under both the null and alternative          and 6 = 0 under the null. Comparing               (3.44)
 and the specification       with no deterministic      components      given in (3.3), the only
 difference is that x, in (3.3) becomes y, in (3.44) and the constant term 8 is added.
 Thus, the Wald test for HO: 6 = 0 is constructed             as in (3.17) with y, replacing x,
and Z augmented           by a column of 1’s. Since c1’pi = 0, the regressor is a’y, _ 1 =
CY’X,  _ 1 + a’po, but since a constant is included in the regression, all of the variables
are deviated from their sample means. Since the demeaned values of GI’~~_1 and
a’x,_i are the same, the asymptotic            null distribution      of the Wald statistic for
testing H,: 6 = 0 in (3.44) is given by (3.18) with /I”(s), the demeaned Wiener process
defined below Lemma 2.3, replacing B(s).
    The second example is the same as the first, except that now x is unknown.
Equation (3.44) is still the correct VECM with 0 unrestricted                under the null and
alternative. The LR test statistic is calculated as in (3.19), again with y, replacing
x, and Z augmented by a vector of 1’s. Now, however, the distribution                     of the test
statistic changes in an important way. Since the regressor y,_ 1 contains a nonzero
trend, it behaves like a combination           of time trend and martingale           components.
When the n x 1 vector y,_ 1 is transformed into the canonical regressors of Section 2,
this yields one regressor dominated by a time trend and n - 1 regressors dominated
2898                                                                                  M.W Watson


by martingales.  As shown in Johansen and Juselius (1990) the distribution                  of the
resulting LR statistic has a null distribution given by (3.25) where now


       H = [ j&)dB(s)‘][        k(s)F($dr]       -’ [ k(s)dB(s)‘],


where F(s) is an n x 1 vector, with first n - 1 elements given by the first n - 1
elements of /P’(s) and the last element given by the demeaned time trend, s-i.
(The components       are demeaned because of the constant term in the regression.)
   Johansen and Juselius (1990) also derive the asymptotic null distribution                   of the
LR test for cointegration       with unknown cointegrating           vectors when p1 = 0, so that
(3.45) is the appropriate       specification    of the VECM. Tables of critical values are
presented in Johansen and Juselius (1990) for n - r,,” ,< 5 for the various deterministic
trend models, and these are extended                  in Osterwald-Lenum          for n - rOu< 11.
Horvath and Watson (1992) extend the tables to include nonzero values of rOk
and r+.
    The appropriate      treatment     of deterministic     components       in cointegration    and
unit root tests is still unsettled, and remains an active area of research. For example,
Elliot et al. (1992) report that large gains in power for univariate                 unit root tests
can be achieved by modifying standard                  DickeyyFuller      tests by an alternative
method of detrending          the data. They propose detrending              the data using GLS
estimators or p0 and pI from (3.39) together with specific assumptions                  about initial
conditions for the x, process. Analogous procedures for likelihood based tests for
cointegration    can also be constructed.           Johansen    (1992b) develops a sequential
testing procedure for cointegration           in which the trend properties of the data and
potential error corrections terms are unknown.



4.     Structural vector autoregressions

4.1.    Introductory   comments

Following the work of Sims (1980), vector autoregressions         have been extensively
used by economists       for data description, forecasting   and structural    inference.
Canova (1991) surveys VARs as a tool for data description          and forecasting; this
survey focuses on structural inference. We begin the discussion in Section 4.2 by
introducing    the structural   moving average model, and show that this model
provides answers to the “impulse” and “propagation”          questions often asked by
macroeconomists.     The relationship  between the structural moving average model
and structural VAR is the subject of Section 4.3. That section discusses the condi-
tions under which the structural moving average polynomial           can be inverted, so
that the structural shocks can be recovered from a VAR. When this is possible, a
structural VAR obtains. Section 4.4 shows that the structural VAR can be interpreted
Ch. 47: Vector Autoregressions and Cointegration                                       2899


as a dynamic simultaneous     equations model, and discusses econometric       identifi-
cation of the model’s parameters. Finally, Section 4.5 discusses issues of estimation
and statistical inference.


4.2.     The structural moving average model, impulse response
        functions and variance decompositions

In this section                 we study the model

       Y, =           wk-,3                                                           (4.1)

where y, is an ny x 1 vector of economic variables and E, is an n, x 1 vector of
shocks. For now we allow ny # nE. Equation (4.1) is called the structural moving
average model, since the elements of E, are given a structural economic interpre-
tation. For example, one element of F, might be interpreted as an exogenous shock
to labor productivity,   another as an exogenous shock to labor supply, another as
an exogenous change in the quantity of money, and so forth. In the jargon developed
for the analysis of dynamic simultaneous        equations models, (4.4) is the final form
of an economic model, in which the endogenous             variables y, are expressed as a
distributed lag of the exogenous variables, given here by the elements of E,. It will
be assumed that the endogenous        variables y, are observed, but that the exogenous
variables E, are not directly observed. Rather, the elements of E, are indirectly
observed through their effect on the elements of y,. This assumption is made without
loss of generality, since any observed exogenous variables can always be added
to the y, vector.
    In Section 1, a typical macroeconomic        system was introduced     and two broad
questions     were posed. The first question asked how the system’s endogenous
variables responded dynamically       to exogenous shocks. The second question asked
which shocks were the primary causes of variability in the endogenous            variables.
Both of these questions are readily answered using the structural moving average
model.
    First, the dynamic effects of the elements of e, on the elements of y, are determined
by the elements of the matrix lag polynomial           C(L). Letting C(L) = C, + C, L +
C,L2 + .‘.) where C, is an ny x n, matrix with typical element [cij,J, then


       cij   /(   =
                        aYi,t     =   a!*                                             (4.2)
                       aEj,*-k        aEj,t   ’
where y,,, is the ith element of y,, E~,~ is the jth element of E,, and the last equality
follows from the time invariance of (4.1). Viewed as a function of k, cij,k is called
the impulse response function of ej,r for Y,,~.It shows how y, f+k changes in response
to a one unit “impulse” in Ed,*.In the classic econometric      literature on distributed
lag models, the impulse responses are called dynamic multipliers.
   To answer the second question concerning the relative importance of the shocks,
the probability    structure of the model must be specified and the question must be
refined. In most applications        the probability    structure is specified by assuming
that the shocks are i.i.d.(O,ZJ, so that any serial correlation               in the exogenous
variables is captured in the lag polynomial          C(L). The assumption        of zero mean is
inconsequential,     since deterministic  components       such as constants and trends can
always be added to (4.1). Viewed in this way, E, represents innovations                 or unanti-
cipated shifts in the exogenous variables. The question concerning                    the relative
importance     of the shocks can be made more precise by casting it in terms of the
h-step-ahead     forecast errors of y,. Let ytjt_,, = E(y,((s,}f;h,)         denote the h-step-
ahead forecast of y, made at time t - h, and let atit_, = y, - yt,, _,, = C:Zk Cket _li
denote the resulting forecast error. For small values of h, atjt _,, can be interpreted as
“short-run”    movements in yt, while for large values of h, a,,,_, can be interpreted
as “long-run”     movements. In the limit as h + co, atit_,, = y,. The importance              of a
specific shock can then be represented as the fraction of the variance in atit_,, that
is explained     by that shock; it can be calculated            for short-run      and long-run
movements in y, by varying h. When the shocks are mutually correlated there is
no unique way to do this, since their covariance             must somehow be distributed.
However, when the shocks are uncorrelated               the calculation     is straightforward.
Assume ZE is diagonal with diagonal elements a;, then the variance of the ith
element of a,,( _ h is




so that




                                                                                             (4.3)




shows the fraction of the h-step-ahead   forecast error variance in yi,t attributed    to
E;.~. The set of n, values of Rz,h are called the variance decomposition       of y,,, at
horizon h.



4.3.    The structural   VAR representation

The structural    VAR representation       of (4.1) is obtained    by inverting    C(L) to yield

       A(JYy, = s,,                                                                          (4.4)
Ch. 47: Vector Autoregressions    and Cointegration                                                      2901


where A(L) = A, - Cc= 1A,Lk is a one-sided matrix lag polynomial.                         In (4.4), the
exogenous shocks E, are written as a distributed              lag of current and lagged values
of y,. The structural VAR representation            is useful for two reasons. First, when the
model parameters are known, it can be used to construct the unobserved exogenous
shocks as a function of current and lagged values of the observed variables y,.
Second, it provides a convenient framework for estimating the model parameters:
with A(,!,) approximated        by a finite order polynomial,        Equation (4.4) is a dynamic
simultaneous      equations model, and standard simultaneous                methods can be used
to estimate the parameters.
   It is not always possible to invert C(L) and move from the structural moving
average representation        (4.1) to the VAR representation           (4.4). One useful way to
discuss the invertibility      problem [see Granger and Anderson (1978)] is in terms
of estimates of E, constructed        from (4.4) using truncated versions of A(L). Since a
semi-infinite   realization    of the y, process, {y,},‘, _ ,, is never available, estimates
of E, must be constructed            from (4.4) using {y,},‘, 1. Consider             the estimator
& = C:;~&J,_~        constructed from the truncated realization. If & converges to E, in
mean square as t -P co, then the structural moving average process (4.1) is said to be
invertible. Thus, when the process is invertible, the structural errors can be recovered
as a one-sided moving average of the observed data, at least in large samples.
   This definition makes it clear that the structural movit?g average process cannot
be inverted if n? < ne. Even in the static model y, = is,, a necessary condition for
obtaining a unique solution for E, in terms of y, is that n,, 2 n,. This requirement
has a very important         implication     for structural    analysis using VAR models: in
general, small scale VARs can only be used for structural                       analysis when the
endogenous      variables can be explained by a small number of structural shocks.
Thus, a bivariate VAR of macroeconomic                  variables is not useful for structural
analysis if there are more than two important macroeconomic                    shocks affecting the
variables.37 In what follows we assume that n,, = nE. This rules out the simple cause
of noninvertibility      just discussed; it also assumes that any dynamic identities
relating the elements of y, when nY> nE have been solved out of the model.
   With nY= n, = n, C(L) is square and the general requirement                   for invertibility    is
that the determinantal       polynomial     1C(z)1 has all of its roots outside the unit circle.
Roots on the unit circle pose no special problems; they are evidence of over-
differencing and can be handled by appropriately                transforming     the variables (e.g.
accumulating      the necessary linear combinations         of the elements of y,). In any event,
unit roots can be detected, at least in large samples, by appropriate                statistical tests.
Roots of [C(z)1 that are inside the unit circle pose a much more difficult problem,
since models with roots inside the unit circle have the same second moment pro-
perties as models with roots outside the unit circle. The simplest example of this

   37Blanchard and Quah (1989) and Faust and Leeper (1993) discuss special circumstances when some
structural analysis is possible when nY< n,. For example, suppose that y, is a scalar and the nCelements
of&, affect y, only through the scalar “index” e, = D’E,, where D is an nL x 1vector. In this case the impulse
response functions can be recovered up to scale.
2902                                                                                       M. W. Watson


is the univariate MA(l) model y, = (1 - cL)E~, where E, is i.i.d.(O, at). The same first
and second moments of y, obtain for the model y, = (1 - FL)&, where 5 = c- ’ and
Et is IID(O,o,“) with of = c 2crE2. Thus the first two moments of y, cannot be used
to discriminate     between these two different models. This is important             because it
can lead to large specification         errors in structural    VAR models that cannot be
detected from the data. For example, suppose that the true structural                  model is
y, = (1 - cL)s, with ICI > 1 so that the model is not invertible. A researcher using
the invertible model would not recover the true structural shocks, but rather .Ct=
(1 - ZL)- ‘y, = (1 - c”L)- ‘( 1 - CL)&,= cl - (c”- c)C,p”_1I?&,_ 1_i. A general discussion
of this subject is contained in Hannan (1970) and Rozanov (1967). Implications
of these results for the interpretation      of structural VARs are discussed in Hansen and
 Sargent (199 1) and Lippi and Reichlin (1993). For related discussion see Quah (1986).
    Hansen and Sargent (1991) provides a specific economic model in which non-
invertible   structural   moving average processes arise. In the model, one set of
economic variables, say xt, are generated by an invertible moving average process.
Another set of economic variables, say yt, are expectational              variables, formed as
discounted sums of expected future x,‘s. Hansen and Sargent then consider what
would happen if only the y, data were available to the econometrician.               They show
that the implied moving average process of y,, written in terms of the structural
shocks driving xt, is not invertible. 38 The Hansen-Sargent              example provides an
important     and constructive      lesson for researchers       using structural   VARs: it is
important     to include variables that are directly related to the exogenous shocks
under consideration      (x, in the example above). If the only variables used in the
model are indirect indicators          with important      expectational   elements (y, in the
example above), severe misspecification            may result.


4.4.     Ident$cation      qf the structural   VAR

Assuming that the lag polynomial               of A(L) in (4.4) is of order p, then structural
VAR can be written as

        A,y,=A,Y,-,+A,~,_,+...+A,y,_,+~,.                                                           (4.5)
    j*A simple version of their example is as follows: suppose that y, and xI are two scalar time series,
with x, generated by the MA(l) process x, = E, - fk_ ,. Suppose that y, is related to x, by the expec-
tational equation


       Y, = E, g B’x,+,
               i=0
         = x, + Y&X, + 1
         = (1 - PO)&,- OS,_ , = C(L)&,,

where the second and third lines follow from the MA(l) process for x,. It is readily verified that the
root of C(z) is (1 - BO)/O, which may be less than 1 even when the root of (1 - Oz) is greater than 1.
(For example, if 0 = /I = 0.8, the root of (1 - Oz) is 1.25 and the root of C(z) is 0.45.)
Ch. 47: Vector Autoreyressions         and Cointeyrarion                                                                    2903


Since A, is not restricted to be diagonal, equation (4.5) is a dynamic simultaneous
equations   model. It differs from standard     representations  of the simultaneous
equations model [see Hausman (1983)] because observable exogenous variables
are not included in the equations. However, since exogenous and predetermined
variables - lagged values of y,_ 1 ~ are treated identically for purposes of identifi-
cation and estimation, equation (4.5) can be analyzed using techniques developed
for simultaneous   equations.
   The reduced form of (4.5) is

      Y, = @d-l         + @ZYlP2 + ... + @py,_p + e,,                                                                       (4.6)

where@i=A;‘Ai,fori=l,...,p,ande,=A,’                      E,. A natural first question concerns
the identifiability    of the structural parameters in (4.5) and this is the subject taken
up in this section.
   The well known “order” condition             for identification    is readily deduced. Since
y, is n x 1, there are pn2 elements in (CD,, Q2,. . . , Qp) and n(n + 1)/2 elements in
           r
Z, = A; Z&A 0 I)‘, the covariance matrix of the reduced form disturbances.                  When
the structural      shocks are n.i.i.d.(O, Z,), these [n’p + n(n + 1)/2] parameters          com-
pletely characterize the probability distribution          of the data. In the structural model
(4.5) there are (p + l)n2 elements in (A,, A,, . . . , AJ and n(n + 1)/2 elements in Z,.
Thus, there are n2 more parameters            in the structural model than are needed to
characterize the likelihood function, so that n2 restrictions are required for identifi-
cation. As usual, setting the diagonal elements of A, equal to 1, gives the first n
restrictions. This leaves n(n - 1) restrictions that must be deduced from economic
considerations.
   The identifying       restrictions    must be dictated by the economic model under
consideration.      It makes little sense to discuss the restrictions without reference to
a specific economic system. Here, some general remarks on identification                 are made
in the context of a simple bivariate model explaining output and money; a more
detailed discussion        of identification   in structural     VAR models is presented in
Giannini (1991). Let the first element of y,, say yr,,, denote the rate of growth of real
output, and the second element of y,, say y,,, denote the rate of growth of money.39
Writing the typical element of A, as uij,k, equation (4.5) becomes


      Yl,, = -    ‘lZ,OY2,t+           f    ‘ll,iYl,*-i+             f    a12,iY2,t-i    +   ‘l,ty
                                      i=l                           i=l




      Y2.t = -    ~21,OYlJ       +    If    ‘2l,iYl,t-i         +    fI   ‘22,iY2,t-i    +   ‘2,t’                         (4.7b)
                                     i=l                            i=l



Equation       (4.7a) is interpreted              as an output             or “aggregate             supply”   equation,    with

  “Much     of this discussion       concerning           this example    draws     from King and Watson        (1993).
2904                                                                                      M. W. Watson



cl,* interpreted       as an aggregate supply or productivity             shock. Equation (4.7b) is
interpreted as a money supply “reaction function ” showing how the money supply
responds to contemporaneous               output, lagged variables, and a money supply shock
s2 1. Identification      requires n(n - 1) = 2 restrictions on the parameters of (4.7).
    ‘In the standard        analysis of simultaneous          equation     models, identification      is
achieved by imposing zero restrictions                on the coefficients for the predetermined
variables. For example, the order condition                 is satisfied if yi,,_ 1 enters (4.7a) but
not (4.7b), and y, f_2 enters (4.7b) but not (4.7a); this imposes the two constraints
   21 1 = a, 1 2 = 0. in this case, y, t_ 1 shifts the output equation but not the money
iquation,       while y, 1_ 2 shifts the ‘money equation but not the output equation. Of
course,     this is a very odd restriction         in the context of the output-money           model,
since the lags in the equations              capture expectational       effects, technological     and
institutional      inertia arising production lags and sticky prices, information            lags, etc..
 There is little basis for identifying the model with the restriction u2i,i = u11,2 = 0.
 Indeed there is little basis for identifying the model with any zero restrictions on
 lag coefficients. Sims (1980) persuasively             makes this argument in a more general
context, and this has led structural VAR modelers to avoid imposing zero restrictions
on lag coefficients. Instead, structural VARs have been identified using restrictions
on the covariance matrix of structural shocks ZE,, the matrix of contemporaneous
coefficients A, and the matrix of long-run multipliers A(l)-‘.
     Restrictions     on EC have generally taken the form that Z, is diagonal, so that
the structural shocks are assumed to be uncorrelated.                   In the example above, this
means that the underlying               productivity    shocks and money supply shocks are
uncorrelated,        so that any contemporaneous           cross equation impacts arise through
nonzero values of u12,0 and u~~,~. Some researchers have found this a natural
assumption to make, since it follows from a modeling strategy in which unobserved
structural shocks are viewed as distinct phenomena which give rise to comovement
in observed variables only through the specific economic interactions                      studied in
the model. The restriction that EC is diagonal imposes n(n - 1) restrictions on the
model, leaving only n(n - 1)/2 additional               necessary restrictions.40
     These additional       restrictions    can come from a priori knowledge about the A,
matrix in (4.5). In the bivariate output-money               model in (4.7), if Z, is diagonal, then
only ~(n - 1)/2 = 1 restriction on A, is required for identification.                  Thus, a priori
 knowledge of u12,0 or uZ1,o will serve to identify the model. For example, if it was
 assumed that the money shocks affect output only with a lag, so that ay, &Z~E~,~                   = 0,
 then ui2 o = 0, and this restriction identifies the model. The generalization                   of this
 restriction     in the n-variable       model produces the Wold causal chain [see Wold
(1954) and Malinvaud             (1980, pp. 6055608)], in which ayi,r/&j,! = 0 for i <j. This
restriction leads to a recursive model with A, lower triangular, yielding the required
n(n - 1)/2 identifying restrictions. This restriction was used in Sims (1980), and has

   400ther restrictions on the covariance matrix are possible, but will not be discussed here. A more
general discussion of identification   with covariance restrictions can be found in Hausman and Taylor
(1983). Fisher (1966). Rothenberg    (1971) and the references cited there.
Ch. 47: Vector Autoregressions and Cointeyration                                                  2905


become the “default” identifying       restriction   implemented     automatically    in com-
mercial econometric      software. Like any identifying restriction, it should never be
used automatically.    In the context of the output-money         example, it is appropriate
under the maintained       assumption   that exogenous money supply shocks, and the
resulting change in interest rates, have no contemporaneous            effect on output. This
may be a reasonable assumption         for data sampled at high frequencies, but loses
its appeal as the sampling interval increases.41342
   Other restrictions on A, can also be used to identify the model. Blanchard and
Watson (1986) Bernanke (1986) and Sims (1986) present empirical models that
are identified by zero restrictions on A, that don’t yield a lower triangular matrix.
Keating (1990) uses a related set of restrictions.           Of course, nonzero       equality
restrictions  can also be used; see Blanchard         and Watson (1986) and King and
Watson (1993) for examples.
   An alternative set of identifying restrictions relies on long-run relationships.           In
the context of structural VARs these restrictions were used in papers by Blanchard
and Quah (1989) and King et al. (1991). 43 These papers relied on restrictions                on
A( 1) = A, - Cr= 1Ai for identification.      Since C( 1) = A( 1)) ‘, these can alternatively
be viewed as restrictions       on the sum of impulse responses. To motivate these
restrictions, consider the output-money          example.44 Let x~,~ denote the logarithm
of the level of output and x~,~ denote the logarithm of the level of money, so that
Y1,t -Act     and y2,t = Ax~,~. Then from (4.1),


      axi ffk
     A=
       aEj,t
                 ,;oa*=
                  c   *I,+@J.1
                                                                                                 (4.8)


for i, j = 1,2, so that


                                                                                                  (4.9)


which is the ijth element of C(1). Now, suppose that money is neutral in the long
run, in the sense that shocks to money have no permanent        effect on the level of
output. This means that lim,,a,ax,,,+,/&,   t = 0, so that C(1) is a lower triangular



   41The appropriateness     of the Wold causal chain was vigorously debated in the formative years of
simultaneous   equations. See Malinvaud (1980, pp. 55-58) and the references cited there.
   “*Applied researchers sometimes estimate a variety of recursive models in the belief (or hope) that
the set of recursive models somehow “brackets” the truth. There is no basis for this. Statements like
“the ordering of the Wold causal chain didn’t matter for the results” say little about the robustness
of the results to different identifying restrictions.
   43For other early applications      of this approach, see Shapiro and Watson (1988) and Gali (1992).
   44The empirical model analyzed in Blanchard and Quah (1989) has the same structure as the output-
money example with the unemployment            rate used in place of money growth.
2906                                                                                     M. W. Watson


matrix. Since A( 1) = C( 1)-l, this means that A(1) is also lower triangular, and this
yields the single extra identifying restriction that is required to identify the bivariate
model. The analogous       restriction in the general n-variable VAR, is the long-run
Wold causal chain in which E~,~has no long-run effect on yj,, forj < i. This restriction
implies that A(1) is lower triangular      yielding the necessary n(n - I)/2 identifying
restrictions.45



4.5.   Estimating    structural   VAR models

This section discusses methods for estimating the parameters of the structural VAR
(4.5). The discussion is centered around generalized method of moment (GMM)
estimators.   The relationship   between these estimators    and FIML estimators
constructed   from a Gaussian likelihood is discussed below. The simplest version
of the GMM estimator is indirect least squares, which follows from the relationship
between the reduced form parameters in (4.6) and the structural parameters in (4.5):

        A,‘A,=      cDi,     i= l,...,p,                                                         (4.10)

       A,ZEA;    = Ze.                                                                            (4.11)

Indirect least squares estimators are formed by replacing the reduced form param-
eters in (4.10) and (4.11) with their OLS estimators               and solving the resulting
equations     for the structural      parameters.    Assuming     that th_e mod< is exactly
identified, a solution will necessarily exist. Given estimators            ai and A,,, equation
(4.10) yields Ai = &@i. The quadratic equation (4.11) is more difficult to solve. In
general, iterative techniques are required, but simpler methods are presented below
for specific models.
   To derive the large sample distribution          of the estimators and to “solve” the in-
direct least squares equations          when there are overidentifying            restrictions, it is
convenient     to cast the problem in the standard GMM framework [see Hansen
(1982)]. Hausman et al. (1987) show how this framework can be used to construct
efficient estimators for the simultaneous         equations model with covariance restric-
tions on the error terms, thus providing a general procedure for forming efficient
estimators in the structural VAR model.
   Some additional      notation     is useful. Let z, = (y: _ 1, y: _ 2,. . . , y:_ J denote the
vector of predetermined       variables in the model, and let 8 denote the vector of un-
known parameters       in A,, A,, . . . , A, and Ze. The population         moment conditions
that implicitly define the structural parameters are

       E&z;) = 0,                                                                                (4.12)

  450f course, restrictions on A, and A(1) can be used in concert    to identify   the model.   See Cali
(1992)for an empirical example.
Ch. 47: Vector Autoreyressions              and Cointrgration                                                            2907


          E(E,&;) = z,,                                                                                                (4.13)

where E, and Z, are functions of the unknown 0. GMM estimators are formed by
choosing 8 so that (4.12) and (4.13) are satisfied, or satisfied as closely as possible,
with sample moments used in place of the population               moments.
   The key ideas underlying the GMM estimator in the structural VAR model can
be developed using the bivariate output-money            example in (4.7). This avoids the
cumbersome      notation associated with the n-equation          model and arbitrary covari-
ante restrictions.    [See Hausman et al. (1987) for discussion of the general case.]
Assume that the model is identified by linear restrictions              on the coefficients of
&A,,...,     AP and the restriction that E(E~,~E~,~)= 0. Let wl,, denote the variables
appearing on the right hand side of (4.7a) after the restrictions            on the structural
coefficients have been solved out, and let 6, denote the corresponding              coefficients.
Thus, if aI2 0 = 0 is the only coefficient restriction        in (4.7a), then only lags of y,
appear in the equation and w~,~= (y:_,,y:_,      , . . . , y;_,)‘. If the long-run neutrality
assumption C;= 0 a 12.i =Ois imposed in(4.7a), then w~,~=(~~i,~_~,yi,,_~ ,..., ~i,~,-~,
Ay,,,,Ay,,,_ i,. . . ,AY~,~_~+ 1)‘.46 Defining w2,t and 6, analogously            for equatton
(4.7b), the model can be written as

          Y 1.1 =    4,A + El,,?                                                                                     (4.14a)


          y 2,r = w; ,$2        + Ez,t,                                                                              (4.14b)

and the GMM                    moment       equations         are:

               %,El.J = 0,                                                                                           (4.15a)

               UZ,EZ,J= 0,                                                                                           (4.15b)

            ~(~l.,E2.t)
                     = 0,                                                                                             (4.15c)

          E(& - a:,) = 0,               i = 1,2.                                                                     (4.15d)

The sample analogues of (4.15a))(4.15~) determine the estimators 8, and g2, while
(4.15d) determines A:, and BE: as sample averages of sums of squared residuals.
   Since the estimators of Sfl and Sh are standard, we focus on (4.15a)-(4.15~) and
the resulting estimators of 6, and 6,. Let u, = (z’s       ’
                                                  f 5t’ZtE2,t~ E    E )‘andzi=T-‘Cu,
                                                                 1,t 2,t
denote the sample values of the second moments m (4.15a)-(4.15~). Then the GMM
estimators, 8, and 6,, are values of 6, and 6, that minimize

   ‘=lf     a,,(L)     =X”=,   ,,Q,,,~L’and u,,(l) = 0, then u,~(L)Y~,, = cl:,(L)(l - L)Y,,, = a~,(f$~,,,, where
a:#)       = CG,       a:J!,     where a;, i = - x,“=i+, LI,~,,.The discussion   that follows assumes the linear
restrictions        on the structural     coefkcients     are homogeneous       (or zero). As usual, the only change required
for nonhomogeneous              (or nonzero)     linear    restrictions   is a redefinition  of the dependent variable.
2908                                                                                       M. W. Watson


                                                                                                      (4.16)

where 2” is a consistent estimator of E(u,ui). 47 These estimators          have a simple
GLS or instrumental     variable interpretation.  To see this, let 2 = (z, z2 . ..zr)’ denote
the T x 2pmatrixofinstruments;let         W, =(w~,~ w,:,...w,,,)‘and    W, =(w~,~ w*,~..’
w~,~)’ denote the TX k, and T x k, matrices of right hand side variables; finally,
let Yr, Y2, sr and s2 denote the T x 1 vectors composed of ~~r,~,y~,~,er:~ and E*,~,
respectively. Multiplying     equations (4.14a) and (4.14b) by z, and summmg yields

       Z’Y,    = (Z’W,)6,   + Z’E1’                                                                  (4.17a)

       Z’Y, = (zl W#,       + ZE2.                                                                   (4.17b)

Now, letting       Ei = Yi - WiTi, for some 4

       E’IE2 + E; W,S, + E; WI Jr = (C’,W,)6, + (F; W,)d, + E; e2 + quadratic                 terms.
                                                                                                 (4.17c)

Stacking      equations   (4.17a)-(4.17~)   and ignoring    the quadratic     terms in (4.17~) yields

       Q = P,6, + P,6, + V,                                                                           (4.18)

where Q = [(Z’Y1)J(Z’Y,)J(Cr;E, +E;WZg2 +E~Wl~l)],P,                 = [(~W,))O,,.,,l(~~Ww,)l,
P, = CO,, x Jr2j(Z’W,)I(F; W,)], and V = [(zle,)l(~~,)I(~;&~)],            and where “I” denotes
vertical concatenation       (“stacking”). By inspection      V = Tii from (4.16). Thus when
Q, P, and P, are evaluated at $r = s^, and Tz = gz, the GMM estimators coincide
with the GLS estimators from (4.18). This means that the GMM estimators can
be formed by iterative GLS estimation of equations (4.18), updating 5, and c?~ at
each iteration and using T- ‘Cti,t2~ as the GLS covariance matrix.
   Hausman      et al. (1987) show that the resulting GMM estimators                  of ~?,,&,a%
and crz*are jointly asymptotically         normally distributed when the vectors (z: 6:)’ are
independently     distributed     and standard regularity conditions          hold. These results
are readily extended to the structural VAR when the roots of CD(Z)are outside the
unit circle, so that the data are covariance stationary. Expressions for the asymptotic
variance of the GMM estimators are given in their paper. When some of the vari-
ables in the model are integrated, the asymptotic              distribution     of the estimators
changes in a way like that discussed in Section 2. This issue does not seem to have
been studied explicitly in the structural          VAR model, although such an analysis
would seem to be reasonably           straightforward.4s

   *‘When elements of u and u are correlated for t # r, 2” is replaced by a consistent   estimator     of the
limiting value of the vahance df T”‘ti.
   481nstrumental  variable estimators constructed from possibly integrated regressors   and instruments
are discussed in Phillips and Hansen (1990).
Ch. 47: Vector Autoregressions    and Cointegration                                                     2909


   The paper by Hausman et al. (1987) also discuss the relationship between efficient
GMM estimators and the FIML estimator constructed                under the assumption        that
the errors are normally         distributed.    It shows that the FIML estimator can be
written as the solution to (4.16), using a specific estimator of X, appropriate            under
the normality assumption.         In particular, FIML uses a block diagonal estimator of
_X,, since E[(E,,,E~,,)(E,,,z,)] = E([E~,,E~,,)(E~,,z,)] = 0 when the errors are normally
distributed.   When the errors are not normally distributed,            this estimator of z,
may be inconsistent,      leading to a loss of efficiency in the FIML estimator relative
to the efficient GMM estimator.
   Estimation    is simplified when there are no overidentifying          restrictions.   In this
case, iteration is not required, and the GMM estimators can be constructed                     as
instrumental    variable (IV) estimators. When the model is just identified, only one
restriction is imposed on the coefficient in equation (4.7). This implies that one of
the vectors 6, or 6, is 2p x 1, while the other is (2~ + 1) x 1, and (4.17) is a set of
4p + 1 linear equation in 4p + 1 unknowns.              Suppose, without loss of generality,
that 6, is 2p x 1. Then s^, is determined from (4.17a) as s^, = (Z’W,))‘(Z’Y,),            which
is the usual IV estimator of equation (4.14a) using z, as instruments.                Using this
value for gi in (4.17~) and noting that Y, = W,c?f2+ E;, equation (4.17~) becomes

      E*;Y, = (6; w,)d,      + E;E2,                                                                  (4.19)

where E*i= Y, - W, 8, is the residual from the first equation. The GMM estimator
of 6, is formed by solving (4.17b) and (4.19) for 8,. This can be recognized as the
IV estimator of equation (4.14b) using z, and the residual from (4.14a) as an instru-
ment. The residual is a valid instrument        because of the covariance        restriction
(4.1%).49
   In many structural VAR exercises, the impulse response functions and variance
decompositions    defined in Section 4.2 are of more interest than the parameters of
the structural VAR. Since C(L) = A(L)-‘, the moving average parameters/impulse
responses and the variance decompositions          are differentiable    functions     of the
structural VAR parameters. The continuous         mapping theorem directly yields the
asymptotic distribution   of these parameters from the distribution       of the structural
VAR parameters. Formulae for the resulting covariance matrix can be determined
by delta method calculations.     Convenient   formulae for these covariance matrices
can be found in Lutkepohl       (1990), Mittnik and Zadrozny        (1993) and Hamilton
(1994).

   49 While this instrumental  variables scheme provides a simple way to compute the GMM estimator
using standard computer software, the covariance matrix of the estimators constructed     using the usual
formula will not be correct. Using 6, , asan instrument introduces “generated regressor” complications
familiar from Pagan (1984). Corrections     for the standard formula are provided in Kine. and Watson
(1993). An alternative approach is to carry out one GMM iteration using the IV estimaks        as starting
values. The point estimates will remain unchanged,         but standard  GMM software will compute a
consistent estimator of the correct covariance     matrix. The usefulness of residuals as instruments      is
discussed in more detail in Hausman (1983) Hausman and Taylor (1983) and Hausman et al. (1987).
2910                                                                                                     M.W. Warson


    Many applied researchers        have instead relied on Monte Carlo methods for
estimating    standard errors of estimated impulse responses and variance decom-
positions.    Runkle (1987) reports on experiments            comparing  the small sample
accuracy of the estimators. He concludes that the delta method provides reasonably
accurate estimates of the standard errors for the impulse responses, and the resulting
confidence intervals have approximately           the correct coverage. On the other hand,
delta method confidence         intervals    for the variance decompositions      are often
unsatisfactory.    This undoubtedly     reflects the [0, l] bounded support of the variance
decompositions      and the unbounded        support of the delta method normal approxi-
mation.


References

Ahn, SK. and G.C. Reinsel (1990) “Estimation             for Partially Nonstationary         Autoregressive     Models”,
   Journal of the American Statistical Association, 85, 8 13-823.
Anderson, T.W. (1951) “Estimating          Linear Restrictions      on Regression Coefficients for Multivariate
   Normal Distributions”,      Annals qf MathematicalStatistics, 22, 327751.
Anderson,       T.W. (1984) An Introduction       to Multivariate      Statistical Analysis, 2nd Edition. Wiley:
   New York.
Andrews, D.W.K. and J.C. Moynihan               (1990) An Improved          Heteroskedastic       and Autocorrelation
   Consistent     Covariance   Matrix Estimator,      Cowles Foundation           Discussion     Paper No. 942, Yale
    University.
Banerjee, A., J.J. Dolado, D.F. Hendry and G.W. Smith (1986) “Exploring                    Equilibrium    Relationships
   in Econometrics     through Static Models: Some Monte Carlo Evidence”, Oxford Bulletin of Economics
   and Statistics, 48(3), 253370.
Banerjee, A., J. Dolado, J.W. Galbraith and D.F. Hendry (1993) Co-Integration, Error-Correction, and
   the Econometric Analysis ofNon-Stationary          Data. Oxford University Press: Oxford.
Basawa, I.V. and D.J. Scott (1983) Asymptotic Optimal Inference for Nonergodic Models. Springer
   Verlag: New York.
Berk, K.N. (1974) “Consistent      Autoregressive     Spectral Estimates”, Annals of Statistics, 2, 4899502.
Bernanke, B. (1986) “Alternative Explanations         of the Money-Income         Correlation”,     Carnegie-Rochester
   Conference Series on Public Policy. Amsterdam:           North-Holland       Publishing Company.
Beveridge, S. and C.R. Nelson (1981) “A New Approach to Decomposition                   of Time Series in Permanent
   and Transitory     Components     with Particular     Attention to Measurement            of the ‘Business Cvcle’“.
   Journal af Monetary konomics,         7, 15 l-74.
Blanchard,      O.J. and D. Quah (1989) “The Dynamic               Effects of Aggregate         Demand      and Supply
   Disturbances”,    American Economic Review, 79, 655573.
Blanchard, O.J. and M.W. Watson (1986) “Are Business Cycles All Alike?“, in: R. Gordon, ed., The
   American Business Cycle: Continuity and Change. Chicago: University of Chicago Press, 123-179.
Bobkosky, M.J. (1983) Hypothesis Testing in Nonstationary               Time Series, Ph.D. thesis, Department           of
   Statistics, University of Wisconsin.
Brillinger, D.R. (1980) Time Series, Data Analysis and Theory. Expanded Edition, Holden-Day:                          San
   Francisco.
Campbell, J.Y. (1990) “Measuring        the Persistence of Expected Returns”, American Ecbtomic Review,
  80(2), 43-47.
Campbell, J.Y. and P. Perron (1991) “Pitfalls and Opportunities:           What Macroeconomists          Should Know
  about Unit Roots”, NBER Macroeconomics -Annual. MIT Press: Cambridge,                         Mass.
Campbell, J.Y. and R.J. Shiller (1987) “Cointegration          and Tests of Present Value Models”, Journal af
  Political Economy, 95, 1062-1088. Reprinted in: R.F. Engle and C.W.J. Granger, eds., Long-Run
  Economic Relations: Readings in Cointegration. Oxford University Press: New York, 1991.
Canova, Fabio (1991) Vector Autoregressive         Models: Specification Estimation and Testing, manuscript,
  Brown University.
Ch. 47: Vector Autoregressions and Cointegration                                                                    2911


Cavanagh, C.L. (1985) Roots Local to Unity, manuscript, Department of Economics, Harvard University.
Cavanaeh.     C.L. and J.H. Stock (1985) Inference in Econometric            Models with Nearly Nonstationary
   Regre%s,      Manuscript,    Kennedy School of Government,           Harvard University.
Chan. N.H. (1988) “On Parameter          Inference for Nearly Nonstationary            Time Series”, Journal of the
   American Statistical Association, 83, 851762.
Ghan, N.H. and C.Z. Wei (1987) “Asymptotic            Inference for Nearly Nonstationary             AR(i) Processes”,
    The Annals of Statistics, 15, 1050-63.
Chan, N.H. and C.Z. Wei (1988) “Limiting Distributions            of Least Squares Estimates of Unstable Auto-
   regressive Processes”, The Annals of Statistics, 16(l), 3677401.
Cochrane, J.H. (1994) “Permanent        and Transitory     Components      of GNP and Stock Prices”, Quarterly
   Journal of Economics, 109, 241-266.
Cochrane, J.H. and A.M. Sbordone (1988) “Multivariate              Estimates of the Permanent          Components       of
   GNP and Stock Prices”, Journal of Economic Dynamics and Control, 12, 255-296.
Davidson. J.E.. D.F. Hendrv. F. Srba and S. Yeo (1978) “Econometric              Modelling of the Aggregate Time-
   Series Relationship Between Consumer’s Expenditures and Income in the United Kingdom”: Economic
   Journal, 88, 661-692.
Davies, R.B. (1977) “Hypothesis       Testing When a Parameter          is Present Only Under the Alternative”,
   Biometrika, 64, 247-54.
Davies, R.B. (1987) “Hypothesis       Testing When a Parameter          is Present Only Under the Alternative”,
    Biometrika, 14, 33-43.
Dickey, D.A. and W.A. Fuller (1979) “Distribution            of the Estimators      for Autoregressive      Time Series
   with a Unit Root”, Journal of the American Statistical Association, 74, 427731.
Elliot, G. and J.H. Stock (1992) Inference in Time Series Regressions when there is Uncertainty                    about
    Whether a Regressor Contains a Unit Root, manuscript,-Harvard                  University.
Elliot, G., T.J. Rothenberg and J.H. Stock (1992) Efficient Tests of an Autoregressive               Unit Root, NBER
   Technical Working Paper 130.
Engle, R.F. (1976) “Band Spectrum Regression”, International Economic Review, 15, l-l 1.
Enele. R.F. (1984) “Wald. Likelihood          Ratio. and Lagrange         Multiplier Tests in Econometrics”,           in:
   2. Griliches and M. Intriligator,   eds., Handbook of Econometrics. North-Holland:                New York, Vol. 2,
    775-826.
Engle, R.F. and C.W.J. Granger            (1987) “Cointegration        and Error Correction:           Representation,
   Estimation, and Testing”, Econometrica, 55, 251-276. Reprinted in: R.F. Engle and C.W.J. Granger,
   eds., Long-Run Economic Relations: Readings in Cointegration.            Oxford University Press: New York,
    1991.
Engle, R.F. and B.S. Yoo (1987) “Forecasting             and Testing in Cointegrated             Systems”, Journal of
   Econometrics, 35, 143-59. Reprinted in: R.F. Engle and C.W.J. Granger, eds., Long-Run Economic
   Relations: Readings in Cointegration. Oxford University Press: New York, 1991.
Engle, R.F. and B.S. Yoo (1991) “Cointegrated        Economic Time Series: An Overview with New Results”,
   in R.F. Engle and C.W.J. Granger, eds., Long-Run Economic Relations: Readings in Cointegration.
   Oxford University Press: New York.
Engle, R.F., D.F. Hendry, and J.F. Richard (1983) “Exogeneity”,              Econometrica, 51(2), 2777304.
Fama, E.F. and K.R. French (1988) “Permanent           and Transitory Components            of Stock Prices”, Journal
   of Political Economy, 96, 246-73.
Faust, J. and E.M. Leeper (1993) Do Long-Run Identifying Restrictions Identify Anything?, manuscript,
   Board of Governors      of the Federal Reserve System.
Fisher, F. (1966) The Zdentijication Problem in Econometrics. New York: McGraw-Hill.
Fisher, M.E. and J.J. Seater (1993) “Long-Run         Neutrality    and Superneutrality        in an ARIMA Frame-
   work”, American Economic Review, 83(3), 402-415.
Fountis, N.G. and D.A. Dickey (1986) Testing for a Unit Root Nonstationarity                     in Multivariate    Time
   Series, manuscript,   North Carolina State University.
Fuller, W.A. (1976) Zntroduction to Statistical Time Series. New York: Wiley.
Gali, J. (1992) “How Well does the IS-LM Model Fit Postwar                      U.S. Data”, Quarterly Journal of
   Economics, 107, 709-738.
Geweke, J. (1986) “The Superneutrality          of Money in the United States: An Interpretation                  of the
   Evidence”. Econometrica, 54, l-21.
Gianini, C. (1991) Topics in Structural       VAR Econometrics,         manuscript,     Department       of Economics,
   Universita Degli Studi Di Ancona.
2912                                                                                                      M. W. Watson


Gonzalo, J. (1989) Comparison           of Five Alternative       Methods of Estimating          Long Run Equilibrium
   Relationships,     manuscript,   UCSD.
Granger, C.W.J. (1969) “Investigating          Causal Relations by Econometric             Methods and Cross Spectral
   Methods”, Econometrica, 34, 150-61.
Granger, C.W.J. (1983) Co-Integrated          Variables and Error-Correcting          Models, UCSD Discussion Paper
   83-13.
Granger, C.W.J. and A.P. Andersen (1978) An Introduction to Bilinear Time Series Models. Vandenhoeck
   & Ruprecht: Gottingen.
Granger,     C.W.J. and T.-H. Lee (1990) “Multicointegration”,                  Advances in Econometrics, 8, 71-84.
   Reprinted     in: R.F. Engle and C.W.J. Granger,             eds., Long-Run Economic Relations: Readings in
   Cointegration. Oxford University Press: New York, 1991.
Granger, C.W.J. and P. Newbold (1974) “Spurious Regressions in Econometrics”,                          Journal  of   Econo-
   metrics, 2, 11 l-20.
 Granger, C.W.J. and P. Newbold (1976) Forecasting Economic Time Series. Academic Press: New York.
 Granger, C.W.J. and A.A. Weiss (1983) “Time Series Analysis of Error-Correcting                      Models”, in: Studies
   in Econometrics, Time Series and Multivariate Statistics. Academic Press: New York, 255-78.
 Hall, R.E. (1978) “Stochastic      Implications     of the Life Cycle - Permanent          Income Hypothesis: Theory
   and Evidence”, Journal of Political Economy, 86(6), 971-87.
 Hamilton, J.D. (1994) Time Series Analysis. Princeton University Press: Princeton, NJ.
 Hannan, E.J. (1970) MultipIe Time Series Wiley: New York.
 Hansen. B.E. (1988) Robust Inference in General Models ofCointegration,                  manuscript, Yale University.
 Hansen, B.E.‘(1996a) A Powerful, Simple Test for Cointegration                    Using Cochrane-Orcutt,         Working
   Paper No. 230, Rochester Center for Economic Research.
 Hansen, B.E. (1990b) Inference When a Nuisance                    Parameter      is Not Identified      Under the Null
   Hypothesis,     manuscript,    University of Rochester.
 Hansen, B.E. and P.C.B. Phillips (1990) “Estimation                and Inference in Models of Cointegration:              A
   Simulation Study”, Adoances in Econometrics, 8, 225-248.
 Hansen, L.P. (1982) “Large Sample Properties                 of Generalized       Method of Moments          Estimators”,
   Econometrica, 50, 1029954.
Hansen, L.P. and T.J. Sargent (1991) “Two Problems in Interpreting                         Vector Autoregressions”,       in:
   L. Hansen and T. Sargent, eds., Rational Expectations Econometrics. Westview: Boulder.
Hausman, J.A. (1983) “Specification and Estimation of Simultaneous                   Equation Models”, in: Z. Griliches
   and M. Inteligator, eds., Handbook of Econometrics. North Holland: New York, Vol. 1, 391-448.
Hausman, J.A. and W.E. Taylor (1983) “Identification               in Linear Simultaneous        Equations Models with
   Covariance      Restrictions; An Instrumental        Variables Interpretation”,       Econometrica, 51(5), 1527-50.
 Hausman,     J.A., W.K. Newey and W.E. Taylor (1987) “Efficient Estimation                         and Identification     of
   Simultaneous      Equation Models with Covariance             Restrictions”,    Econometrica, 55(4), 849-874.
Hendry, D.F. and T. von Ungern-Sternbcrg                 (1981) “Liquidity      and Inflation Effects on Consumer’s
   Expenditure”,     in: A.S. Deaton, ed., Essays in the Theory and Measurement of Consumer’s Behavior.
   Cambridge      University Press: Cambridge.
Hodrick, R.J. (1992) “Dividend Yields and Expected Stock Returns: Alternative Procedures for Inference
   and Measurement”,          The Review of Financial Studies, 5(3), 357-86.
Horvath, M. and M. Watson (1992) Critical Values for Likelihood Based Tests for Cointegration                         When
   Some Cointegrating         May be Known, manuscript,           Northwestern      University.
Horvath, M. and M.W. Watson (1993) Testing for Cointegration                        When Some of the Cointegrating
   Vectors are Known, manuscript,           Northwestern       University.
Johansen,    S. (1988a) “Statistical    Analysis of Cointegrating           Vectors”, Journal of Economic Dynamics
   and Control, 12, 231-54. Reprinted in: R.F. Engle and C.W.J. &anger,                        eds., Long-Run Economic
   Relations: Readings in Cointegration. Oxford University Press: New York, 1991.
Johansen, S. (1988b) “The Mathematical             Structure of Error Correction        Models”, in: N.U. Prabhu, ed.,
   Contemporary Mathematics, vol. 80: Structural Inference from Stochastic Processes. American
   Mathematical      Society: Providence,      RI.
Johansen, S. (1991) “Estimation        and Hypothesis Testing of Cointegrating              Vectors in Gaussian Vector
   Autoregression      Models”, Econometrica, 59, 1551-l 580.
Johansen,    S. (1992a) The Role of the Constant             Term in Cointegration           Analysis of Nonstationary
   Variables, Preprint No. 1, Institute of Mathematical              Statistics, University of Copenhagen.
Johansen, S. (1992b) “Determination          of Cointegration     Rank in the Presence of a Linear Trend”, Oxford
   Bulletin of Economics and Statistics, 54, 383-397.
Ch. 47: Vector Autoregressions and Cointegration                                                                        2913


 Johansen,    S. (1992~) “A Representation         of Vector Autoregressive         Processes Integrated       of Order 2”,
    Econometric Theory, 8(2), 188-202.
 Johansen, S. and K. Juselius (1990) “Maximum Likelihood Estimation and Inference on Cointegration                           -
    with Applications      to the Demand for Money”, Oxford Bulletin of Economics and Statistics, 52(2),
     169-210.
Johansen, S. and K. Juselius (1992) “Testing Structural               Hypotheses      in a Multivariate      Cointegration
   Analysis of the PPP and UIP of UK”, Journal of Econometrics, 53, 21 I-44.
Keating, J. (1990) “Identifying        VAR Models Under Rational                Expectations”,      Journal of Monetary
   Economics, 25(3), 453-76.
King, R.G. and M.W. Watson (1993) Testing for Neutrality, manuscript,                      Northwestern      University.
 King, R.G., C.I. Plosser, J.H. Stock and M.W. Watson (1991) “Stochastic                          Trends and Economic
    Fluctuations”,    American Economic Review, 81, 819-840.
 Kosobud, R. and L. Klein (1961) “Some Econometrics              ofGrowth: Great Ratios of Economics”, Quarterly
    Journal of Economics, 25, 173-98.
 Lippi, M. and L. Reichlin (1993)“The Dynamic Effects of Aggregate Demand and Supply Disturbances:
   Comments”,       American Economic Reoiew, 83(3), 644652.
 Lucas, R.E. (1972) “Econometric         Testing of the Natural Rate Hypothesis”,              in: 0. Eckstein, ed., The
    Econometrics ofPrice Determination. Washington,              D.C.: Board of Governors          of the Federal Reserve
    System.
 Lucas, R.E. (1988) “Money Demand in the United States: A Quantitative                    Review”, Carnegie-Rochester
    Conference Series on Public Policy, 29, 137-68.
 Lutkepohl,    H. (1990) “Asymptotic       Distributions     of Impulse Response Functions and Forecast Error
   Variance Decompositions         of Vector Autoregressive       Models”, Review ofEconomics and Statistics, 72,
    116-25.
 MacKinnon,      J.G. (1991) “Critical Values for Cointegration         Tests”, in: R.F. Engle and C.W.J. Granger,
   eds., Long-Run Economic Relations: Readings in Cointegration. Oxford University Press: New York.
Magnus, J.R. and H. Neudecker (1988) Matrix Difirential Calculus. Wiley: New York.
 Malinvaud,     E. (1980) Statistical Methods of Econometrics. Amsterdam:               North-Holland.
Mankiw, N.G. and M.D. Shapiro (1985) “Trends, Random Walks and the Permanent Income Hypothesis”,
   Journal of Monetary Economics, 16, 165-74.
 Mittnik,    S. and P.A. Zadrozny          (1993) “Asymptotic         Distributions      of Impulse Responses,          Step
   Responses and Variance Decompositions                of Estimated     Linear Dynamic Models”, Econometrica,
   61, 857-70.
Ogaki, M. and J.Y. Park (1990) A Cointegration                  Approach      to Estimating      Preference Parameters,
   manuscript,     University of Rochester.
Osterwald-Lenum,         M. (1992) “A Note with Quantiles of the Asymptotic Distribution                 of the Maximum
   Likelihood      Cointegration    Rank Test Statistics”, Oxford Bulletin of Economics and Statistics, 54,
   461-71.
Pagan, A. (1984) “Econometric           Issues in the Analysis of Regressions             with Generated      Regressors”,
   International Economic Review, 25, 221-48.
Park, J.Y. (1992) “Canonical        Cointegrating     Regression”, Econometrica, 60(l), 119-144.
Park, J.Y. and M. Ogaki (1991) Inference in Cointegrated             Models Using VAR Prewhitening              to Estimate
   Shortrun Dynamics, Rochester Center for Economic Research Working Paper No, 281.
Park, J.Y. and P.C.B. Phillips (1988) “Statistical Inference in Regressions with Integrated                      Regressors
   I”, Econometric Theory, 4, 468-97.
Park, J.Y. and P.C.B. Phillips (1989) “Statistical Inference in Regressions with Integrated                     Regressors:
   Part 2”, Econometric Theory, 5, 95-131.
Phillips, P.C.B. (1986) “Understanding         Spurious Regression in Econometrics”,            Journal ofEconometrics,
   33, 31 l-40.
Phillips, P.C.B. (1987a) “Time Series Regression with a Unit Root”, Econometrica, 55, 277-301.
Phillips, P.C.B. (l987b) “Toward a Unified Asymptotic                Theory for Autoregression”,           Biometrika, 74,
   535-47.
Phillips, P.C.B. (1988) “Multiple Regression with Integrated              Regressors”, Contemporary Mathematics,
   80. 79-105.
Phillips, P.C.B. (1991a) “Optimal Inference in Cointegrated              Systems”, Econometrica, 59(2), 283-306.
Phillips, P.C.B. (1991b) “Spectra1 Regression             for Cointegrated       Time Series”, in: W. Barnett, ed.,
   Nonparametric and Semiparamerric Methods in Economics and Statistics. Cambridge University Press:
   Cambridge, 413-436.
2914                                                                                                 M. W. W&son


Phillips, P.C.B. (1991~) The Tail Behavior of Maximum                  Likelihood    Estimators    of Cointegrating
   Coefficients in Error Correction       Models, manuscript,      Yale University.
Phillips, P.C.B. (1991d) “To Criticize the Critics: An Objective Bayesian Analysis of Stochastic Trends”,
   Journal of Applied Econometrics, 6, 3333364.
Phillips, P.C.B. and S.N. Durlauf (1986) “Multiple Time Series Regression with Integrated Processes”,
   Rekew of Economic Studies, 53,‘473-96.
Phillios. P.C.B. and B.E. Hansen (1990) “Statistical           Inference in Instrumental      Variables Regression
   wit’h I(1) Processes”, Review of Economic Studies, 57, 999125.
Phillips, P.C.B. and M. Loretan (1991) “Estimating Long Run Economic Equilibria”, Review of Economic
   Studies, 58, 4077436.
Phillips, P.C.B. and S. Ouliaris (1990) “Asymptotic Properties of Residual Based Tests for Cointegration”,
   Econometrica, 58, 165594.
Phillips, P.C.B. and J.Y. Park (1988) “Asymptotic            Equivalence   of OLS and GLS in Regression with
   Integrated   Regressors”, Journal of the American Statisticat Association, 83, 11 l-l 15. _
Phillips. P.C.B. and P. Perron (1988)~       “Testing for Unit Root in Time Series Reeression”. Biometrika.
   75;335-46.
Phillips, P.C.B. and W. Ploberger (1991) Time Series Modeling with a Bayesian Frame of Reference:
   I. Concepts and Illustrations,     manuscript,     Yale University.
Phillips, P.C.B. and V. Solo (1992) “Asymptotics           for Linear Processes”, Annals afStatistics,20, 97lL
   1001.
Quah, D. (1986) Estimation        and Hypothesis       Testing with Restricted Spectral Density Matrices: An
   Application    to Uncovered     Interest Parity, Chapter 4 of Essays in Dynamic Macroeconometrics,
   Ph.D. Dissertation,    Harvard University.
Rothenberg,    T.J. (1971) “Identification     in Parametric   Models”, Econometrica, 39, 577-92.
Rozanov, Y.A. (1967) Stationary Random Processes. San Francisco: Holden Day.
Runkle, D. (1987) “Vector Autoregressions           and Reality”, Journal of Business and Economic Statistics,
   5(4), 4377442.
Said, SE. and D.A. Dickey (1984) “Testing for Unit Roots in Autoregressive-Moving                   Average Models
   of Unknown Order”, Biometrika, 71, 599-608.
Saikkonen, P. (1991) “Asymptotically         Efficient Estimation of Cointegrating       Regressions”, Econometric
   Theory, 7(l), l-21.
Saikkonen, P. (1992) “Estimation        and Testing of Cointegrated      Systems by an Autoregressive       Approxi-
   mation”, Econometric Theory, 8(l), l-27.
Sargan, J.D. (1964) “Wages and Prices in the United Kingdom: A Study in Econometric                   Methodology”,
   in: P.E. Hart, G. Mills and J.N. Whittaker, eds., Econometric Analysisfor National Economic Planning.
   London: Butterworths.
Sargent, T.J. (1971) “A Note on the Accelerationist             Controversy”,    Jour’nal of Money, Banking and
   Credit, 3, 50-60.
 Shapiro, M. and M.W. Watson (1988) “Sources of Business Cycle Fluctuations”,              NBER Macroeconomics
   Annual, 3, 11 l-1 56.
Sims, CA. (1972) “Money, Income and Causality”, American Economic Review, 62, 540-552.
Sims, CA. (1978) Least Squares Estimation of Autoregressions               with Some Unit Roots, University of
   Minnesota, Discussion Paper No. 78-95.
Sims, C.A. (1980) “Macroeconomics           and Reality”, Econometrica, 48, l-48.
Sims, C.A. (1986) “Are Forecasting         Models Usable for Policy Analysis?“, Quarterly Review, Federal
   Reserve Bank of Minneapolis,         Winter.
Sims, CA. (1989) “Models and Their Uses”, American Journal of Agricultural Economics, 71,489-494.
Sims, CA., J.H. Stock and M.W. Watson (1990) “Inference in Linear Time Series Models with Some
   Unit Roots”, Econometrica, 58(l), 113-44.
Solo, V. (1984) “The Order of Differencing in ARIMA Models”, Journal of the American Statistical
   Association, 79, 916-21.
Stock, J.H. (1987) “Asymptotic         Properties    of Least Squares Estimators       of Cointegrating     Vectors”,
   Econometrica, 55, 1035-56.
Stock, J.H. (1988) “A Reexamination           of Friedman’s    Consumption      Puzzle”, Journal of Business and
   Economic Statistics, 6(4), 401-14.
Stock, J.H. (1991) “Confidence       Intervals of the Largest Autoregressive        Root in U.S. Macroeconomic
   Time Series”, Journal of Monetary Economics, 28, 435560.
Ch. 47: Vector Autoregressions and Cointeyration                                                               2915


Stock, J.H. (1992) Deciding Between I(0) and I(l), manuscript,            Harvard University.
Stock, J.H. (1993) Forthcoming           in: R.F. Engle and D. McFadden,         eds., Handbook of Econometrics.
   Vol. 4, North Holland: New York.
Stock, J.H. and M.W. Watson (1988a) “Interpreting           the Evidence on Money-Income          Causality”, Journal
   of Econometrics,     40(l), 161-82.
Stock, J.H. and M.W. Watson (1988b) “Testing for Common Trends”, Journal ofthe American Statistical
   Association, 83, 1097-l 107. Reprinted in: R.F. Engle and C.W.J. Granger, eds., Long-Run Economic
   Relations: Readings in Cointeyration. Oxford University Press: New York, 1991.
Stock, J.H. and M.W. Watson (1993) “A Simple Estimator of Cointegrating                   Vectors in Higher Order
   Integrated   Systems”, Econometrica, 61, 783-820.
Stock, H.H. and K.D. West (1988) “Integrated                 Regressors  and Tests of the Permanent            Income
   Hypothesis”,     Journal of Monetary Economics, 21 (l), 85-95.
Sweeting, T. (1983) “On Estimator Efficiency in Stochastic Processes”, Stochastic Processes and their
   Ao&cations. 15, 93-98.
The$ H. (1971) Principles of Econometrics. Wiley: New York.
Toda, H.Y. and P.C.B. Phillips (1993a) “Vector Autoregressions              and Causality”,      Econometrica, 62(l),
   1367-1394.
Toda, H.Y. and P.C.B. Phillips (1993b) “Vector Autoregressions            and Causality. A Theoretical Overview
   and Simulation Studv”. Econometric Reviews. 12, 321-364.
Tsav, R.S. and G.C. Tiao (1990) “Asymptotic           Properties of Multivariate     Nonstationary     Processes with
   Applications     to Autoregressions”:     Annals of Statistics, 18, 220-50.
West. K.D. (1988) “Asvmntotic           Normalitv    when Regressors    Have a Unit Root”, Econometrica, 56,
    139771418.        ’      - -
White, H. (1984) Asymptotic Theoryfor Econometricians. New York: Academic Press.
Whittle, P. (1983) Prediction and Regulation by Linear Least-Square Methods. Second Edition, Revised.
   University of Minnesota        Press: Minneapolis.
Wold, H. (1954) “Causality and Econometrics”,             Econometrica, 22, 162-177.
Wooldridge,     J. (1993) Forthcoming       in: R.F. Engle and D. McFadden,       eds., Handbook ofEconometrics.
   Vol. 4, North-Holland:       New York.
Yoo, B.S. (1987) Co-Integrated          Time Series Structure, Forecasting       and Testing, Ph.D. Dissertation,
   UCSD.
Yule, G.C. (1926) “Why Do We Sometimes Get Nonsense-Correlations                    Between Time-Series”, Journal
   of the Royal Statistical Society B, 89, l-64.



---
normalized_id: shared-pdf-reference-large-sample-estimation-and-hypothesis-testing
exam_code: SHARED
material_scope: large sample estimation and hypothesis testing.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Large Sample Estimation and Hypothesis Testing.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-large-sample-estimation-and-hypothesis-testing

Chapter 36


LARGE SAMPLE ESTIMATION                                                  AND HYPOTHESIS
TESTING*

WHITNEY         K. NEWEY

Massachusetts Institute of Technology


DANIEL       MCFADDEN

University of California, Berkeley


Contents

Abstract                                                                                                                  2113
1. Introduction                                                                                                           2113
2. Consistency                                                                                                            2120
     2.1.    The basic consistency          theorem                                                                        2121
     2.2.    Identification                                                                                                2124
             2.2.1.    The maximum          likelihood     estimator                                                       2124
             2.2.2.    Nonlinear      least squares                                                                        2125
             2.2.3.    Generalized        method    of moments                                                             2126
             2.2.4.    Classical     minimum       distance                                                                2128
     2.3.    Uniform      convergence       and continuity                                                                 2129
     2.4.    Consistency      of maximum        likelihood                                                                 2131
     2.5.    Consistency      of GMM                                                                                       2132
     2.6.    Consistency      without     compactness                                                                      2133
     2.1.    Stochastic    equicontinuity       and uniform      convergence                                               2136
     2.8.    Least absolute        deviations   examples                                                                   2138
             2.8.1.    Maximum         score                                                                               2138
             2.8.2.    Censored      least absolute      deviations                                                        2140
3.   Asymptotic normality                                                                                                2141
     3.1.    The basic results                                                                                             2143
     3.2.    Asymptotic       normality     for MLE                                                                        2146
     3.3.    Asymptotic       normality     for GMM                                                                        2148




   *We are grateful to the NSF for financial support                  and to Y. Ait-Sahalia,   J. Porter, J. Powell, J. Robins,
P. Ruud, and T. Stoker for helpful comments.

Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elsevier Science B.V. All rights reserved
Ch. 36: Large Sample Estimation and Hypothesis Testing                                            2113




Abstract

Asymptotic distribution theory is the primary method used to examine the properties
of econometric estimators and tests. We present conditions for obtaining consistency
and asymptotic      normality   of a very general class of estimators    (extremum esti-
mators). Consistent     asymptotic   variance estimators are given to enable approxi-
mation of the asymptotic distribution.        Asymptotic efficiency is another desirable
property then considered. Throughout           the chapter, the general results are also
specialized to common econometric           estimators   (e.g. MLE and GMM), and in
specific examples we work through the conditions for the various results in detail.
The results are also extended to two-step estimators (with finite-dimensional      param-
eter estimation    in the first step), estimators    derived from nonsmooth      objective
functions, and semiparametric      two-step estimators (with nonparametric     estimation
of an infinite-dimensional     parameter in the first step). Finally, the trinity of test
statistics is considered within the quite general setting of GMM estimation,            and
numerous examples are given.


1.   Introduction

Large sample distribution        theory is the cornerstone        of statistical inference for
econometric      models. The limiting distribution        of a statistic gives approximate
distributional    results that are often straightforward     to derive, even in complicated
econometric      models. These distributions      are useful for approximate      inference, in-
cluding constructing      approximate    confidence intervals and test statistics. Also, the
location and dispersion of the limiting distribution          provides criteria for choosing
between different estimators.        Of course, asymptotic       results are sensitive to the
accuracy of the large sample approximation,          but the approximation      has been found
to be quite good in many cases and asymptotic distribution            results are an important
starting point for further improvements,        such as the bootstrap. Also, exact distribu-
tion theory is often difficult to derive in econometric models, and may not apply to
models with unspecified distributions,      which are important in econometrics. Because
asymptotic     theory is so useful for econometric         models, it is important      to have
general results with conditions       that can be interpreted      and applied to particular
estimators as easily as possible. The purpose of this chapter is the presentation              of
such results.
   Consistency     and asymptotic     normality    are the two fundamental        large sample
properties of estimators considered in this chapter. A consistent estimator 6 is one
that converges in probability      to the true value Q,,, i.e. 6% 8,, as the sample size n
goes to infinity, for all possible true values.’ This is a mild property, only requiring

    ‘This property is sometimes referred to as weak consistency, with strong consistency holding when(j
converges almost surely to the true value. Throughout        the chapter we focus on weak consistency,
although we also show how strong consistency can be proven.
2114                                                                            W.K. Newey and D. McFadden


that the estimator is close to the truth when the number of observations        is nearly
infinite. Thus, an estimator that is not even consistent is usually considered in-
adequate. Also, consistency is useful because it means that the asymptotic distribu-
tion of an estimator is determined by its limiting behavior near the true parameter.
    An asymptotically   normal estimator 6is one where there is an increasing function
v(n) such that the distribution    function of v(n)(8- 0,) converges to the Gaussian
distribution   function with mean zero and variance V, i.e. v(n)(8 - 6,) A N(0, V).
The variance I/ of the limiting distribution   is referred to as the asymptotic variance
of @. The estimator          is ,,/&-consistent      if v(n) = 6.         This chapter      focuses       on the
&-consistent        case, so that unless otherwise            noted,     asymptotic      normality        will be
taken to include ,,&-consistency.
   Asymptotic normality and a consistent estimator of the asymptotic variance can
be used to construct approximate     confidence intervals. In particular, for an esti-
mator c of V and for pori2satisfying Prob[N(O, 1) > gn,J = 42, an asymptotic     1 - CY
confidence interval is

       Cal-@=    ce-g,,2(m”2,e+f,,2(3/n)“2].
If P is a consistent estimator of I/ and I/ > 0, then asymptotic normality of 6 will
imply that Prob(B,EY1 -,)-          1 - a as n+ co. 2 Here asymptotic theory is important
for econometric practice, where consistent standard errors can be used for approxi-
mate confidence interval construction.        Thus, it is useful to know that estimators are
asymptotically       normal and to know how to form consistent             standard errors in
applications.     In addition, the magnitude of asymptotic variances for different esti-
mators helps choose between estimators in practice. If one estimator has a smaller
asymptotic      variance, then an asymptotic       confidence interval, as above, will be
shorter for that estimator in large samples, suggesting preference for its use in
applications.     A prime example is generalized least squares with estimated distur-
bance variance matrix, which has smaller asymptotic variance than ordinary least
squares, and is often used in practice.
   Many estimators share a common structure that is useful in showing consistency
and asymptotic normality, and in deriving the asymptotic variance. The benefit of
using this structure is that it distills the asymptotic           theory to a few essential
ingredients. The cost is that applying general results to particular estimators often
requires thought and calculation.        In our opinion, the benefits outweigh the costs,
and so in these notes we focus on general structures, illustrating            their application
with examples.
   One general structure, or framework, is the class of estimators that maximize
some objective function that depends on data and sample size, referred to as
extremum      estimators.    An estimator    8 is an extremum       estimator     if there is an

   ‘The proof of this result is an exercise in convergence   in distribution   and the Slutzky theorem,    which
states that Y. 5 Y, and Z, %C implies Z, Y, &Y,.
Ch. 36: Large Sample Estimation and Hypothesis    Testing                                           2115


objective   function         o,(0) such that

     o^maximizes        o,(Q) subject to HE 0,                                                      (1.1)’

where 0 is the set of possible parameter values. In the notation, dependence of H^
on n and of i? and o,,(G) on the data is suppressed for convenience.         This estimator
is the maximizer of some objective function that depends on the data, hence the
term “extremum estimator”.3 R.A. Fisher (1921, 1925), Wald (1949) Huber (1967)
Jennrich (1969), and Malinvaud (1970) developed consistency and asymptotic nor-
mality results for various special cases of extremum estimators, and Amemiya (1973,
 1985) formulated the general class of estimators and gave some useful results.
    A prime example of an extremum estimator is the maximum likelihood (MLE).
Let the data (z,,     , z,) be i.i.d. with p.d.f. f(zl0,) equal to some member of a family
of p.d.f.‘s f(zI0). Throughout,       we will take the p.d.f. f(zl0) to mean a probability
function where z is discrete, and to possibly be conditioned         on part of the observa-
tion z.~ The MLE satisfies eq. (1.1) with


      Q,(0) = nP ’ i           lnf(ziI 0).                                                          (1.2)
                       i=l



Here o,(0) is the normalized log-likelihood.     Of course, the monotonic     transforma-
tion of taking the log of the likelihood and normalizing     by n will not typically affect
the estimator, but it is a convenient normalization    in the theory. Asymptotic theory
for the MLE was outlined by R.A. Fisher (192 1, 1925), and Wald’s (1949) consistency
theorem is the prototype result for extremum estimators. Also, Huber (1967) gave
weak conditions for consistency and asymptotic normality of the MLE and other
extremum estimators that maximize a sample average.5
   A second example is the nonlinear least squares (NLS), where for data zi = (yi, xi)
with E[Y Ix] = h(x, d,), the estimator solves eq. (1.1) with


      k(Q)= - n- l i [yi- h(Xi, !!I)]*.                                                             (1.3)
                             i=l



Here maximizing o,(H) is the same as minimizing the sum of squared residuals. The
asymptotic normality theorem of Jennrich (1969) is the prototype for many modern
results on asymptotic normality of extremum estimators.

   3“Extremum”     rather than “maximum” appears here because minimizers are also special cases, with
objective function equal to the negative of the minimand.
   4More precisely, flzIH) is the density (Radon-Nikodym      derivative) of the probability measure for z
with respect to some measure that may assign measure 1 to some singleton’s, allowing for discrete
variables, and for z = (y, x) may be the product of some measure for ~1with the marginal distribution   of
X, allowing f(z)O) to be a conditional density given X.
   5Estimators   that maximize a sample average, i.e. where o,(H) = n- ‘I:= 1q(z,,O),are often referred to
as m-estimators, where the “m” means “maximum-likelihood-like”.
2116                                                                      W.K. Nrwuy   and D. McFuddrn



    A third example is the generalized method of moments (GMM). Suppose that
there is a “moment function” vector g(z, H) such that the population   moments satisfy
E[g(z, 0,)] = 0. A GMM estimator        is one that minimizes a squared Euclidean
distance of sample moments from their population       counterpart   of zero. Let ii/ be
a positive semi-definite matrix, so that (m’@m) ‘P is a measure of the distance of m
from zero. A GMM estimator is one that solves eq. (1.1) with


       &I) = -
                   [n-l izln  Ytzi,   O)
                                       1
                                           ‘*[ n-l it1 e)].
                                                        Ytzi3                                        (1.4)


This class includes linear instrumental              variables estimators,      where g(z, 0) =x’
( y - Y’O),x is a vector of instrumental    variables, y is a left-hand-side dependent variable,
and Y are right-hand-side        variables. In this case the population       moment condition
E[g(z, (!I,)] = 0 is the same as the product of instrumental                variables x and the
disturbance     y - Y’8, having mean zero. By varying I% one can construct a variety
of instrumental     variables estimators,       including two-stage least squares for k%=
(n-‘~;=Ixix;)-‘.”       The GMM class also includes nonlinear instrumental               variables
estimators, where g(z, 0) = x.p(z, Q)for a residual p(z, Q),satisfying E[x*p(z, (!I,)] = 0.
Nonlinear instrumental       variable estimators were developed and analyzed by Sargan
(1959) and Amemiya (1974). Also, the GMM class was formulated                         and general
results on asymptotic properties given in Burguete et al. (1982) and Hansen (1982).
    The GMM class is general enough to also include MLE and NLS when those
estimators are viewed as solutions to their first-order conditions.               In this case the
derivatives of Inf(zI 0) or - [y - h(x, H)12 become the moment functions, and there
are exactly as many moment functions as parameters. Thinking of GMM as includ-
ing MLE, NLS, and many other estimators                    is quite useful for analyzing      their
asymptotic distribution,      but not for showing consistency, as further discussed below.
    A fourth example is classical minimum distance estimation (CMD). Suppose that
there is a vector of estimators fi A x0 and a vector of functions h(8) with 7c,,= II(
The idea is that 71consists of “reduced form” parameters, 0 consists of “structural”
parameters, and h(0) gives the mapping from structure to reduced form. An estima-
tor of 0 can be constructed       by solving eq. (1.1) with

       &@I)= - [72- h(U)]‘ci+t- h(U)],                                                              (1.5)

where k? is a positive semi-definite matrix. This class of estimators includes classical
minimum chi-square methods for discrete data, as well as estimators for simultaneous
equations models in Rothenberg (1973) and panel data in Chamberlain           (1982). Its
asymptotic properties were developed by Chiang (1956) and Ferguson (1958).
   A different framework that is sometimes useful is minimum distance estimation.

   “The l/n normalization in @does not affect the estimator, but, by the law oflarge numbers,   will imply
that W converges in probability  to a constant matrix, a condition imposed below.
Ch. 36: Large Sample Estimation and Hypothesis      Testing                              2117


 a class of estimators that solve eq. (1.1) for Q,,(d) = - &,(@‘@/g,(@, where d,(d) is a
 vector   of the data and parameters      such that 9,(8,) LO and I@ is positive semi-
 definite. Both GMM and CMD are special cases of minimum distance, with g,,(H) =
 n- l XI= 1 g(zi, 0) for GMM and g,(0) = 72- h(0) for CMD.’ This framework is useful
 for analyzing asymptotic normality of GMM and CMD, because (once) differenti-
 ability of J,(0) is a sufficient smoothness condition, while twice differentiability       is
 often assumed for the objective function of an extremum estimator [see, e.g. Amemiya
 (1985)]. Indeed, as discussed in Section 3, asymptotic normality           of an extremum
 estimator with a twice differentiable      objective function Q,(e) is actually a special
 case 0, asymptotic normality of a minimum distance estimator, with d,(0) = V,&(0)
 and W equal to an identity matrix, where V, denotes the partial derivative. The idea
 here is that when analyzing asymptotic normality, an extremum estimator can be
 viewed as a solution to the first-order conditions V,&(Q) = 0, and in this form is a
 minimum distance estimator.
     For consistency, it can be a bad idea to treat an extremum estimator as a solution
 to first-order conditions     rather than a global maximum of an objective function,
 because the first-order condition can have multiple roots even when the objective
 function has a unique maximum. Thus, the first-order conditions may not identify
 the parameters, even when there is a unique maximum to the objective function.
 Also, it is often easier to specify primitive conditions for a unique maximum than
for a unique root of the first-order conditions. A classic example is the MLE for the
Cauchy location-scale       model, where z is a scalar, p is a location parameter, 0 a scale
parameter, and f(z 10) = Ca- ‘( 1 + [(z - ~)/cJ]*)- 1 for a constant C. It is well known
that, even in large samples, there are many roots to the first-order conditions           for
 the location parameter ~1,although there is a global maximum to the likelihood
function; see Example 1 below. Econometric            examples tend to be somewhat less
extreme, but can still have multiple roots. An example is the censored least absolute
deviations estimator of Powell (1984). This estimator solves eq. (1.1) for Q,,(O) =
 -n-‘~;=,Jyi-         max (0, xi0) 1,where yi = max (0, ~18, + si}, and si has conditional
median zero. A global maximum of this function over any compact set containing
the true parameter will be consistent, under certain conditions, but the gradient has
extraneous roots at any point where xi0 < 0 for all i (e.g. which can occur if xi is
bounded).
    The importance for consistency of an extremum estimator being a global maximum
has practical implications.      Many iterative maximization      procedures (e.g. Newton
Raphson) may converge only to a local maximum, but consistency results only apply
to the global maximum. Thus, it is often important to search for a global maximum.
One approach to this problem is to try different starting values for iterative proce-
dures, and pick the estimator that maximizes the objective from among the con-
verged values. AS long as the extremum estimator is consistent and the true parameter
is an element of the interior of the parameter set 0, an extremum estimator will be

  ‘For   GMM.   the law of large numbers   implies cj.(fI,) 50.
2118                                                                       W.K. Newey und D. McFadden


a root of the first-order conditions asymptotically,   and hence will be included among
the local maxima. Also, this procedure can avoid extraneous boundary maxima, e.g.
those that can occur in maximum likelihood estimation of mixture models.
    Figure 1 shows a schematic, illustrating     the relationships     between the various
types of estimators introduced       so far: The name or mnemonic           for each type of
estimator (e.g. MLE for maximum likelihood) is given, along with objective function
being maximized, except for GMM and CMD where the form of d,(0) is given. The
solid arrows indicate inclusion in a class of estimators.           For example, MLE is
included in the class of extremum estimators and GMM is a minimum distance
estimator. The broken arrows indicate inclusion in the class when the estimator is
viewed as a solution to first-order conditions. In particular, the first-order conditions
for an extremum estimator are V,&(Q) = 0, making it a minimum distance estimator
with g,,(0) = V,&(e) and I%‘= I. Similarly, the first-order conditions for MLE make
it a GMM estimator with y(z, 0) = VBIn f(zl0) and those for NLS a GMM estimator
with g(z, 0) = - 2[y - h(x, B)]V,h(x, 0). As discussed above, these broken arrows are
useful for analyzing the asymptotic distribution,       but not for consistency. Also, as
further discussed in Section 7, the broken arrows are not very useful when the
objective function o,(0) is not smooth.
    The broad outline of the chapter is to treat consistency, asymptotic normality,
consistent asymptotic variance estimation, and asymptotic efficiency in that order.
The general results will be organized hierarchically across sections, with the asymp-
totic normality results assuming consistency and the asymptotic efficiency results
assuming asymptotic normality.        In each section, some illustrative,      self-contained
examples will be given. Two-step estimators will be discussed in a separate section,
partly as an illustration of how the general frameworks discussed here can be applied
and partly because of their intrinsic importance      in econometric      applications.    Two
later sections deal with more advanced         topics. Section 7 considers asymptotic
normality when the objective function o,(0) is not smooth. Section 8 develops some
asymptotic    theory when @ depends on a nonparametric             estimator (e.g. a kernel
regression, see Chapter 39).
    This chapter is designed to provide an introduction          to asymptotic      theory for
nonlinear   models, as well as a guide to recent developments.            For this purpose,



                           Extremum                                     Minimum   Distance
                                          ------_---__*
                             O.@)                                         -AW~cm

                       /              \                             /                 \
                 NLS                      MLE                 GMM                            CMD

       -   i$,{yi - 4~ @l’/n      ,=I
                                      i In f(dWn             iglsh Q/n       {A(@))          3 - WI)
                  L-_________l___________T

                                                Figure   1
Ch. 36: Lurge Sample Estimation und Hypothesis   Testing                                   2119


Sections 226 have been organized in such a way that the more basic material is
collected in the first part of each section. In particular, Sections 2.1-2.5, 3.1-3.4,
4.1-4.3, 5.1, and 5.2, might be used as text for part of a second-year            graduate
econometrics     course, possibly also including some examples from the other parts
of this chapter.
   The results for extremum and minimum distance estimators are general enough
to cover data that is a stationary stochastic process, but the regularity conditions
for GMM, MLE, and the more specific examples are restricted to i.i.d. data.
Modeling data as i.i.d. is satisfactory in many cross-section       and panel data appli-
cations. Chapter 37 gives results for dependent observations.
   This chapter assumes some familiarity with elementary concepts from analysis
(e.g. compact sets, continuous      functions, etc.) and with probability    theory. More
detailed familiarity with convergence concepts, laws of large numbers, and central
limit theorems is assumed, e.g. as in Chapter 3 of Amemiya (1985), although some
particularly   important   or potentially   unfamiliar results will be cited in footnotes.
The most technical explanations,      including measurability  concerns, will be reserved
to footnotes.
   Three basic examples will be used to illustrate the general results of this chapter.

Example 1.I (Cauchy location-scale)

In this example z is a scalar random variable, 0 = (11,c)’ is a two-dimensional vector,
and z is continuously      distributed with p.d.f. f(zId,), where f(zl@ = C-a- ’ { 1 +
[(z - ~)/a]~} -i and C is a constant. In this example p is a location parameter and
0 a scale parameter. This example is interesting because the MLE will be consistent,
in spite of the first-order conditions   having many roots and the nonexistence       of
moments of z (e.g. so the sample mean is not a consistent estimator of 0,).

Example 1.2 (Probit)

Probit is an MLE example where z = (y, x’) for a binary variable y, y~(0, l}, and a
q x 1 vector of regressors x, and the conditional        probability of y given x is f(zl0,)
for f(zl0) = @(x’@~[ 1 - @(x’Q)]’ -y. Here f(z ItI,) is a p.d.f. with respect to integration
that sums over the two different values of y and integrates over the distribution            of
x, i.e. where the integral of any function a(y, x) is !a(~, x) dz = E[a( 1, x)] + Epu(O,x)].
This example illustrates how regressors can be allowed for, and is a model that is
often applied.


Example 1.3 (Hansen-Singleton)

This is a GMM (nonlinear instrumental       variables) example, where g(z, 0) = x*p(z, 0)
for p(z, 0) = p*w*yy - 1. The functional    form here is from Hansen and Singleton
(1982), where p is a rate of time preference, y a risk aversion parameter, w an asset
return, y a consumption   ratio for adjacent time periods, and x consists of variables
Ch. 36: Large Sample Estimation and Hypothesis     Testing                                           2121


lead to the estimator      being close to one of the maxima, which does not give
consistency (because one of the maxima will not be the true value of the parameter).
The condition that QO(0) have a unique maximum at the true parameter is related to
identification.
   The discussion so far only allows for a compact parameter set. In theory compact-
ness requires that one know bounds on the true parameter value, although this
constraint is often ignored in practice. It is possible to drop this assumption      if the
function Q,(0) cannot rise “too much” as 8 becomes unbounded,        as further discussed
below.
   Uniform convergence and continuity of the limiting function are also important.
Uniform convergence corresponds to the feature of the graph that Q,(e) was in the
“sleeve” for all values of 0E 0. Conditions for uniform convergence are given below.
   The rest of this section develops this descriptive discussion into precise results
on consistency of extremum estimators. Section 2.1 presents the basic consistency
theorem. Sections 2.222.5 give simple but general sufficient conditions for consistency,
including results for MLE and GMM. More advanced and/or technical material is
contained in Sections 2.662.8.



2.1.    The basic consistency      theorem

To state a theorem it is necessary             to define      precisely   uniform     convergence      in
probability, as follows:

Uniform convergence_in         probability:    o,(d) converges       uniformly      in probability    to
Qd@ meanssu~~~~l Q,(e)
                     - Qd@ 30.
The following is the fundamental consistency                 result for extremum     estimators,     and
is similar to Lemma 3 of Amemiya (1973).

Theorem 2.1

If there is a function QO(0) such that (i)&(8) IS uniquely maximized at 8,; (ii) 0 is
compact; (iii) QO(0) is continuous;  (iv) Q,,(e) converges uniformly in probability to
Q,(0), then i?p.     19,.

Proof

For any E > 0 we have wit_h propability         approaching       one (w.p.a.1) (a) Q,(g) > Q,(O,) -
43 by eq. (1.1); (b) Qd@ > Q.(o)
                               - e/3 by (iv); (4                   Q,&J > Qd&J - 43 by W9
   ‘The probability  statements in this proof are only well defined if each of k&(8),, and &8,)      are
measurable. The measurability   issue can be bypassed by defining consistency and uniform convergence
in terms of outer measure. The outer measure of a (possibly nonmeasurable)    event E is the infimum of
E[ Y] over all random variables Y with Y 2 l(8), where l(d) is the indicator function for the event 6.
2122                                                                      W.K. Newey and D. McFadden


Therefore,   w.p.a. 1,

             (b)
       Q,(e, > Q,(o^, - J3?      Q&J     - 2E,3(? Qo(&J - E.

Thus, for any a > 0, Q,(Q) > Qe(0,) - E w.p.a.1. Let .,Ir be any open subset of 0
containing  fI,. By 0 n.4”’ compact, (i), and (iii), SU~~~~~,-~Q~(~) = Qo(8*) < Qo(0,)
for some 0*~ 0 n Jt”. Thus, choosing E = Qo_(fIo)- supBE .,,flCQ0(8), it follows that
w.p.a.1 Q,(6) > SU~~~~~,~~Q,,(H), and hence (3~~4”.                            Q.E.D.

The conditions      of this theorem are slightly stronger than necessary. It is not
necessary to assume that 8 actually maximi_zes_the objectiv_e function. This assump-
tion can be replaced by the hypothesis that Q,(e) 3 supBE @Q,,(d)+ o,(l). This replace-
ment has no effect on the proof, in particular            on part (a), so that the conclusion
remains true. These modifications             are useful for analyzing     some estimators       in
econometrics,     such as the maximum            score estimator of Manski (1975) and the
simulated moment estimators of Pakes (1986) and McFadden (1989). These modifi-
cations are not given in the statement of the consistency result in order to keep that
result simple, but will be used later.
    Some of the other conditions           can also be weakened. Assumption         (iii) can be
changed to upper semi-continuity            of Q,,(e) and (iv) to Q,,(e,) A Q,(fI,) and for all
E > 0, Q,(0) < Q,(e) + E for all 19~0 with probability            approaching    one.” Under
these weaker conditions the conclusion still is satisfied, with exactly the same proof.
   Theorem 2.1 is a weak consistency result, i.e. it shows I!?3 8,. A corresponding
strong consistency       result, i.e. H^Z Ho, can be obtained               by assuming       that
supBE eJ Q,(0) - Qo(0) 1% 0 holds in place of uniform convergence               in probability.
The proof is exactly the same as that above, except that “as. for large enough n”
replaces “with probability      approaching       one”. This and other results are stated here
for convergence      in probability     because it suffices for the asymptotic     distribution
theory.
   This result is quite general, applying to any topological space. Hence, it allows for
0 to be infinite-dimensional,       i.e. for 19to be a function, as would be of interest for
nonparametric      estimation    of (say) a density or regression function. However, the
compactness      of the parameter space is difficult to check or implausible             in many
cases where B is infinite-dimensional.
    To use this result to show consistency of a particular estimator it must be possible
to check the conditions. For this purpose it is important to have primitive conditions,
where the word “primitive” here is used synonymously                 with the phrase “easy to
interpret”. The compactness condition is primitive but the others are not, so that it
is important    to discuss more primitive conditions, as will be done in the following
subsections.

   I0 Uppersemi-continuity means that for any OE 0 and t: > 0 there is an open subset.   V of 0 containing
0 such that Q”(P) < Q,(0) + E for all U’EA’.
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                          2123


    Condition (i) is the identification    condition discussed above, (ii) the boundedness
condition on the parameter set, and (iii) and (iv) the continuity and uniform conver-
gence conditions. These can be loosely grouped into “substantive”                 and “regularity”
conditions.    The identification     condition    (i) is substantive.    There are well known
examples where this condition fails, e.g. linear instrumental                variables estimation
with fewer instruments        than parameters.      Thus, it is particularly      important      to be
 able to specify primitive hypotheses for QO(@ to have a unique maximum.                           The
compactness condition (ii) is also substantive, with eOe 0 requiring that bounds on
 the parameters be known. However, in applications               the compactness      restriction is
 often ignored. This practice is justified for estimators where compactness                   can be
dropped without affecting consistency of estimators. Some of these estimators are
discussed in Section 2.6.
    Uniform convergence and continuity            are the hypotheses that are often referred
 to as “the standard regularity conditions”           for consistency. They will typically be
 satisfied when moments of certain functions exist and there is some continuity                      in
 Q,(O) or in the distribution     of the data. Moment existence assumptions             are needed
 to use the law of large numbers to show convergence                  of Q,(0) to its limit Q,,(0).
 Continuity    of the limit QO(0) is quite a weak condition. It can even be true when
 Q,(0) is not continuous,       because continuity       of the distribution      of the data can
“smooth out” the discontinuities         in the sample objective function. Primitive regu-
larity conditions for uniform convergence and continuity                are given in Section 2.3.
Also, Section 2.7 relates uniform convergence to stochastic equicontinuity,              a property
that is necessary and sufficient for uniform convergence, and gives more sufficient
conditions for uniform convergence.
    To formulate primitive conditions for consistency of an extremum estimator, it
is necessary to first find Q0(f9). Usually it is straightforward         to calculate QO(@ as the
probability limit of Q,(0) for any 0, a necessary condition for (iii) to be satisfied. This
calculation    can be accomplished       by applying the law of large numbers, or hypo-
theses about convergence         of certain components.         For example, the law of large
numbers implies that for MLE the limit of Q,(0) is QO(0) = E[lnf(zI 0)] and for NLS
QO(0) = - E[ {y - h(x, @}‘I. Note the role played here by the normalization                     of the
log-likelihood     and sum of squared residuals, that leads to the objective function
converging to a nonzero limit. Similar calculations              give the limit for GMM and
CMD, as further discussed below. Once this limit has been found, the consistency
will follow from the conditions of Theorem 2.1.
    One device that may allow for consistency under weaker conditions is to treat 8
as a maximum of Q,(e) - Q,(e,) rather than just Q,(d). This is a magnitude normali-
zation that sometimes makes it possible to weaken hypotheses on existence of
moments.      In the censored least absolute            deviations     example, where Q,,(e) =
 -n-rC;=,lJ$-        max (0, xi0) (, an assumption on existence of the expectation of y is
useful for applying a law of large numbers to show convergence of Q,(0). In contrast
Q,,(d) - Q,,(&) = -n- ’ X1= 1[ (yi -max{O, x:6} I- (yi --ax             (0, XI@,}I] is a bounded
function of yi, so that no such assumption          is needed.
2124                                                                              W.K. Newey end D. McFadden


2.2.     Ident$cution

The identification    condition for consistency of an extremum estimator is that the
limit of the objective function has a unique maximum at the truth.” This condition
is related to identification    in the usual sense, which is that the distribution    of the
data at the true parameter is different than that at any other possible parameter
value. To be precise, identification    is a necessary condition for the limiting objective
function to have a unique maximum, but it is not in general sufficient.”        This section
focuses on identification     conditions for MLE, NLS, GMM, and CMD, in order to
illustrate the kinds of results that are available.

2.2.1.     The maximum         likelihood estimator

An important feature of maximum likelihood is that identification is also sufficient
for a unique maximum. Let Y, # Y2 for random variables mean Prob({ Y1 # Y,})>O.

Lemma 2.2 (Information             inequality)

If 8, is identified [tI # 0, and 0~ 0 implies f(z 10)# f(z 1O,)] and E[ 1In f(z 10)I] < cc
for all 0 then QO(tl) = E[lnf(zI@]     has a unique maximum at 8,.

Proof

By the strict       version of Jensen’s inequality, for any nonconstant,    positive                           ran-
dom variable         Y, - ln(E[Y]) < E[ - ln(Y)].r3    Then for a = f(zIfI)/f(zI0,)                             and
~~~,,Q,~~,~-Q,~~~=~C~-~~Cf~~I~~lf~~I~,~l~l~-~n~C~f(zl~)lf(zl~~)~l=
- In [i.f(z (B)dz] = 0.                                      Q.E.D.

The term “information      inequality” refers to an interpretation  of QO(0) as an informa-
tion measure. This result means that MLE has the very nice feature that uniqueness
of the maximum of the limiting objective function occurs under the very weakest
possible condition of identification       of 8,.
   Conditions   for identification    in particular models are specific to those models. It



   ‘i If the set of maximands .1 of the objective function has more than one element, then this set does
not distinguish between the true parameter and other values. In this case further restrictions are needed
for identification. These restrictions are sometimes referred to as normalizations.       Alternatively, one could
work with convergence        in probability    to a set .,*/R,but imposing normalization      restrictions    is more
practical, and is needed for asymptotic        normality.
   “If Or, is not identified, then there will be some o# 0, such that the distribution           of the data is the
same when 0 is the true parameter value>s when 0, is the true parameter               value. Therefore, Q*(O) will
also be limiting objective function when 0 is the true parameter, and hence the requirement                that Q,,(O)
be maximized at the true parameter implies that Q,,(O) has at least two maxima, flo and 0.
   i3The strict version of Jensen’s inequality         states that if a(y) is a strictly concave function [e.g.
a(y) = In(y)] and Y is a nonconstant        random variable, then a(E[Y]) > E[a(Y)].
Ch. 36:   Large   Samplr   Estimation   and Hypothesis   Testing                            2125

is often possible to specify them in a way that is easy to interpret     (i.e. in a “primitive”
way), as in the Cauchy example.

Exampk        1.1 continued

It will follow from Lemma 2.2 that E[ln,f(z10)]         has a unique maximum       at the
true parameter. Existence of E [I In f(z I@[] for all 0 follows from Ilnf(zIO)I d C, +
ln(l+a-2~~-~~2)<C1           +ln(C,.+C,lz12)    for positive constants C,, C,, and C,,
and existence of E[ln(C, + C, Izl’)]. Identification      follows from f(zl0) being one-
to-one in the quadratic function (1 + [(z - ~)/a]~), the fact that quadratic functions
intersect at no more than two points, and the fact that the probability       of any two
points is zero, so that Prob( { z:f(z 10)# f(z IO,)}) = 1 > 0. Thus, by the information
inequality, E [ln f(z I O)] has a unique maximum at OO.This example illustrates that it
can be quite easy to show that the expected log-likelihood       has a unique maximum,
even when the first-order conditions for the MLE do not have unique roots.

Example       I .2 continued

Throughout       the probit example, the identification       and regularity      conditions
will be combined in the assumption       that the second-moment        matrix E[xx’] exists
and is nonsingular.      This assumption     implies identification.     To see why, note
that nonsingularity    of E[xx’] implies that it is positive definite. Let 0 # O,, so that
E[{x’(O - O,)}“] = (0 - O,)‘E[xx’](O - 0,) > 0, implying          that ~‘(0 - 0,) # 0, and
hence x’0 # x’OO, where as before “not equals” means “not equal on a set of posi-
tive probability”.   Both Q(u) and @( - u) are strictly monotonic,        so that x’0 # ~‘0,
implies both @(x’O) # @(x’O,) and 1 - @(X’S) # 1 - @(x’O,), and hence that
f(z I 0) = @(x’O)Y[1 - @(x’O)] l py # f(z IO,).
   Existence of E[xx’] also implies that E[ Ilnf(zlO)l]     < co. It is well known that the
derivative d In @(u)/du = %(u)= ~(U)/@(U) [for 4(u) = V,@(u)], is convex and asymp-
totes to - u as u -+ - cc, and to zero as u + co. Therefore, a mean-value         expansion
around 0 = 0 gives

         Iln @(x’O)l = Iln @(O) + ~(x’8”)x’O1d Iln Q(O)\ + i(x’@)lx’OI

                      ~I~~~~~~I+~~~+I~‘~l~l~‘~Idl~~~(~~I+C(~+IIxII
                                                                lIOIl)llxlI IlOll.
Since 1 -@(u)=@(-u)andyis             bounded, (lnf(zIO)Id2[Iln@(O)I+C(l       + 11x/I x
II0 II)IIx /III
              0 II
                 1, so existence of second moments of x implies that E[ Ilnf(z1 O)/] is
finite. This part of the probit example illustrates the detailed work that may be
needed to verify that moment existence assumptions           like that of Lemma 2.2 are
satisfied.

2.2.2.      Nonlinear      least squares

The identification condition for NLS is that the mean square error E[ { y - h(x,O)l’] =
- QJO) have a unique minimum       at OO.As is easily shown, the mean square error
2126                                                                                    W.K. Newey     und D. McFudden



has a unique minimum at the conditional               mean. I4 Since h(x,O,) = E[ylx] is the
conditional     mean, the identification      condition for NLS is that h(x, 0) # h(x, 0,) if
0 # 8,, i.e. that h(x, 0) is not the conditional        mean when 8 # 0,. This is a natural
“conditional     mean” identification      condition for NLS.
   In some cases identification       will not be sufficient for conditional   mean identifica-
tion. Intuitively, only parameters that affect the first conditional         moment of y given
x can be identified by NLS. For example, if 8 includes conditional            variance param-
eters, or parameters       of other higher-order      moments, then these parameters        may
not be identified from the conditional          mean.
   As for identification,    it is often easy to give primitive hypotheses for conditional
mean identification.      For example, in the linear model h(x, 19)= x’d conditional mean
identification    holds if E[xx’] is nonsingular,       for then 6 # 0, implies ~‘6’ # x’O,,, as
shown in the probit example. For another example, suppose x is a positive scalar
and h(x, 6) = c( + bxy. As long as both PO and y0 are nonzero, the regression curve
for a different value of 6 intersects the true curve at most at three x points. Thus,
for identification    it is sufficient that x have positive density over any interval, or
that x have more than three points that have positive probability.

2.2.3.     Generalized      method        of moments


For generalized method of moments the limit function QO(fI)is a little more compli-
cated than for MLE or NLS, but is still easy to find. By the law of large numbers,
g,(O) L g,,(O) = E[g(z, O)], so that if 6’ A W for some positive semi-definite matrix
W, then by continuity   of multiplication,  Q,(d) 3 Q,JO) = - go(O) Wg,(B). This func-
tion has a maximum of zero at 8,, so 8, will be identified if it is less than zero for
0 # 00.

Lemma      2.3 (GMM         identification)

If W is positive semi-definite and, for go(Q) = E[g(z, S)], gO(O,) = 0 and Wg,(8)                                    # 0
for 0 # 8, then QJfI) = - g0(0)‘Wg,(8) has a unique maximum at 8,.

Proof

Let R be such that R’R = W. If 6’# (I,, then 0 # Wg,(8) = R’RgJB) implies Rg,(O) #O
and hence QO(@ = - [RgO(0)]‘[Rgo(fl)]      < QO(fl,) = 0 for 8 # Be.         Q.E.D.

The GMM identification      condition is that if 8 # 8, then go(O) is not in the null space
of W, which for nonsingular    W reduces to go(B) being nonzero if 8 # 0,. A necessary
order condition for GMM identification        is that there be at least as many moment


  “‘For    m(x)= E[ylx]      and   a(x) any    function   with     finite   variance,    iterated    expectations   gives
ECOI -a(~))~1 = ECOI -m(4)2l         + ~JX{Y -m(4Hm(x)           -&)}I      + EC~m(x)-~(x)}~l~ EC{y-m(x)}‘],
with strict inequality   if a(x) #m(x).
Ch. 36: Large Sumplr    Esrimution   and Hypothesis    Testing                                              2121



functions as parameters.      If there are fewer moments than parameters,      then there
will typically be many solutions to ~~(8) = 0.
   If the moment functions are linear, say y(z, Q) = g(z) + G(z)0, then the necessary
and sufficient rank condition for GMM identification       is that the rank of WE[G(z)J
is equal to the number of columns. For example, consider a linear instrumental
variables estimator, where g(z, 19)= x.(y - Y’Q) for a residual y - Y’B and a vector
of instrumental    variables x. The two-stage least squares estimator of 8 is a GMM
estimator with W = (C!‘= 1xixi/n)- ‘. Suppose that E[xx’] exists and is nonsingular,
so that W = (E[xx’])- i by the law of large numbers. Then the rank condition for
GMM identification       is E[xY’] has full column rank, the well known instrumental
variables identification    condition. If E[Y’lx] = x’rt then this condition reduces to
7~having full column rank, a version of the single equation identification      condition
[see F.M. Fisher (1976) Theorem 2.7.11. More generally, E[xY’] = E[xE[Y’jx]],
so that GMM identification         is the same as x having “full rank covariance”      with
-uYlxl.
   If E[g(z, 0)] is nonlinear in 0, then specifying primitive conditions for identification
becomes quite difficult. Here conditions             for identification      are like conditions      for
unique solutions of nonlinear equations (as in E[g(z, e)] = 0), which are known to be
difficult. This difficulty is another reason to avoid formulating                8 as the solution to
the first-order condition        when analyzing         consistency,     e.g. to avoid interpreting
MLE as a GMM estimator with g(z, 0) = V, In f(z 119).                In some cases this difficulty is
unavoidable,       as for instrumental     variables estimators of nonlinear             simultaneous
equations models.’ 5
   Local identification      analysis may be useful when it is difficult to find primitive
conditions      for (global) identification.     If g(z,@ is continuously          differentiable   and
VOE[g(z, 0)] = E[V,g(z, Q)], then by Rothenberg (1971), a sufficient condition for a
unique solution of WE[g(z, 8)] = 0 in a (small enough) neighborhood                        of 0, is that
 WEIVOg(z,Bo)] have full column rank. This condition is also necessary for local
identification,     and hence provides a necessary condition for global identification,
when E[V,g(z, Q)] has constant rank in a neighborhood                    of 8, [i.e. in Rothenberg’s
(1971) “regular” case]. For example, for nonlinear 2SLS, where p(z, e) is a residual
and g(z, 0) = x.p(z, 8), the rank condition for local identification is that E[x.V,p(z, f&J’]
has rank equal to its number of columns.
   A practical “solution” to the problem of global GMM identification,                         that has
often been adopted, is to simply assume identification.                This practice is reasonable,
given the difficulty of formulating primitive conditions, but it is important to check
that it is not a vacuous assumption whenever possible, by showing identification                       in
some special cases. In simple models it may be possible to show identification                    under
particular forms for conditional         distributions.     The Hansen-Singleton           model pro-
vides one example.

  “There are some useful results on identification       of nonlinear simultaneous equations models in Brown
(1983) and Roehrig   (1989), although   global   identification    analysis of instrumental variables estimators
remains difficult.
2128                                                                         W.K. Newey and D. McFadden


Example     I .3 continued
Suppose that l? = (n-l C;= 1x,x;), so that the GMM estimator is nonlinear                    two-
stage least squares. By the law of large numbers, if E[xx’] exists and is nonsingular,
 l?’ will converge in probability    to W = (E[xx’])~‘, which is nonsingular.          Then the
GMM identification       condition is that there is a unique solution to E[xp(z, 0)] = 0
at 0 = H,, where p(z, 0) = {/?wy’ - 1). Quite primitive conditions           for identification
can be formulated in a special log-linear case. Suppose that w = exp[a(x) + u] and
y = exp[b(x) + u], where (u, u) is independent      of x, that a(x) + y,b(x) is constant, and
that rl(0,) = 1 for ~(0) = exp[a(x) + y,b(x)]aE[exp(u         + yv)]. Suppose also that the
first element is a constant, so that the other elements can be assumed to have mean
zero (by “demeaning”       if necessary, which is a nonsingular       linear transformation,
and so does not affect the identification         analysis). Let CI(X,y)=exp[(Y-yJb(x)].
Then E[p(z, @lx] = a(x, y)v](@- 1, which is zero for 0 = BO,and hence E[y(z, O,)] = 0.
For 8 # B,, E[g(z, 0)] = {E[cr(x, y)]q(8) - 1, Cov [x’, a(x, y)]q(O)}‘. This expression is
nonzero if Cov[x, a(x, y)] is nonzero, because then the second term is nonzero if r](B)
is nonzero and the first term is nonzero if ~(8) = 0. Furthermore,       if Cov [x, a(x, y)] = 0
for some y, then all of the elements of E[y(z, 0)] are zero for all /J and one can choose
/I > 0 so the first element is zero. Thus, Cov[x, c((x, y)] # 0 for y # y0 is a necessary
and sufficient condition for identification. In other words, the identification condition
is that for all y in the parameter set, some coefficient of a nonconstant               variable
in the regression of a(x, y) on x is nonzero. This is a relatively primitive condition,
because we have some intuition about when regression coefficients are zero, although
it does depend on the form of b(x) and the distribution          of x in a complicated       way.
If b(x) is a nonconstant,      monotonic    function of a linear combination         of x, then
this covariance will be nonzero. l6 Thus, in this example it is found that the assump-
tion of GMM identification        is not vacuous, that there are some nice special cases
where identification    does hold.

2.2.4.    Classical minimum distance

The analysis     of CMD         identification    is very similar     to that for GMM.            If AL      r-r0
and %‘I W, W positive semi-definite,            then Q(0) = - [72- h(B)]‘@72 - h(6)] -%
 - [rco - h(0)]’ W[q, - h(O)] = Q,(O). The condition for Qo(8) to have a unique maxi-
mum (of zero) at 0, is that h(8,) = rcOand h(B) - h(0,) is not in the null space of W
if 0 # Be, which reduces to h(B) # h(B,) if W is nonsingular.    If h(8) is linear in 8 then
there is a readily interpretable  rank condition for identification,     but otherwise the
analysis of global identification  is difficult. A rank condition for local identification
is that the rank of W*V,h(O,) equals the number of components           of 0.




   “It is well known   that Cov[.x,J(x)]   # 0 for any monotonic,   nonconstant   function   ,f(x) of a random
variable x.
Ch. 36: Laryr Sample Estimation and Hypothesis        Testing                                              2129


2.3.    Unform     convergence      and continuity

Once conditions for identification have been found and compactness of the parameter
set has been assumed, the only other primitive conditions for consistency required
by Theorem 2.1 are those for uniform convergence in probability         and continuity of
the limiting objective function. This subsection gives primitive hypotheses for these
conditions that, when combined with identification,     lead to primitive conditions for
consistency of particular estimators.
   For many estimators, results on uniform convergence of sample averages, known
as uniform laws oflarge numbers, can be used to specify primitive regularity conditions.
Examples include MLE, NLS, and GMM, each of which depends on sample
averages. The following uniform law of large numbers is useful for these estimators.
Let a(z, 6) be a matrix of functions of an observation   z and the parameter 0, and for
a matrix A = [aj,], let 11A 11= (&&)“’      be the Euclidean norm.

Lemma     2.4

If the data are i.i.d., @is compact, a(~,, 0) is continuous at each 0~ 0 with probability
one, and there is d(z) with 11     a(z,d)ll d d(z) for all 8~0 and E[d(z)] < co, then
E[a(z, e)] is continuous         and supeto /In- ‘x1= i a(~,, 0) - E[a(z, 0)] I/ 3            0.

The conditions of this result are similar to assumptions        of Wald’s (1949) consistency
proof, and it is implied by Lemma 1 of Tauchen (1985).
   The conditions of this result are quite weak. In particular, they allow for a(~,@
to not be continuous       on all of 0 for given z.l’ Consequently,       this result is useful
even when the objective function is not continuous, as for Manski’s (1975) maximum
score estimator and the simulation-based       estimators of Pakes (1986) and McFadden
(1989). Also, this result can be extended to dependent data. The conclusion remains
true if the i.i.d. hypothesis is changed to strict stationarity     and ergodicity of zi.i8
   The two conditions imposed on a(z, 0) are a continuity condition and a moment
existence condition. These conditions are very primitive. The continuity condition
can often be verified by inspection. The moment existence hypothesis just requires
a data-dependent     upper bound on IIa(z, 0) II that has finite expectation. This condition
is sometimes referred to as a “dominance         condition”, where d(z) is the dominating
function. Because it only requires that certain moments exist, it is a “regularity
condition” rather than a “substantive      restriction”.
   It is often quite easy to see that the continuity condition is satisfied and to specify
moment hypotheses for the dominance condition, as in the examples.

   r 'The conditions of Lemma 2.4 are not sufficient for measurability of the supremum in the conclusion,
but are sufficient for convergence of the supremum in outer measure. Convergence            in outer measure is
sufficient for consistency   of the estimator in terms of outer measure, a result that is useful when the
objective function is not continuous,    as previously noted,
   “Strict stationarity    means that the distribution of (zi, zi + ,, , z.,+,) does not depend on i for any tn,
and ergodicity implies that n- ‘I:= ,a(zJ + E[a(zJ] for (measurable) functions a(z) with E[ la(z)l] < CO.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                2131


2.4.    Consistency   of maximum    likelihood

The conditions for identification in Section 2.2 and the uniform convergence result
of Lemma 2.4, allow specification of primitive regularity conditions for particular
kinds of estimators. A consistency result for MLE can be formulated as follows:

Theorem 2.5

 Suppose that zi, (i = 1,2,. . .), are i.i.d. with p.d.f. f(zJ0,) and (i) if 8 f8, then
f(zi18) #f(zilO,); (ii) B,E@, which is compact; (iii) In f(z,le) is continuous at each
 8~0 with probability one; (iv) E[supe,oIlnf(~18)1] < co. Then &Lo,.

Proof

Proceed by verifying the conditions of Theorem 2.1. Condition 2.1(i) follows by 2.5(i)
and (iv) and Lemma 2.2. Condition 2.l(ii) holds by 2S(ii). Conditions 2.l(iii) and (iv)
follow by Lemma 2.4.                                                           Q.E.D.

The conditions of this result are quite primitive and also quite weak. The conclusion
is consistency of the MLE. Thus, a particular MLE can be shown to be consistent
by checking the conditions of this result, which are identification, compactness,
continuity of the log-likelihood at particular points, and a dominance condition for
the log-likelihood. Often it is easy to specify conditions for identification, continuity
holds by inspection, and the dominance condition can be shown to hold with a little
algebra. The Cauchy location-scale model is an example.

Example 1 .l continued

To show consistency of the Cauchy MLE, one can proceed to verify the hypotheses
of Theorem 2.5. Condition (i) was shown in Section 2.2.1. Conditions (iii) and (iv)
were shown in Section 2.3. Then the conditions of Theorem 2.5 imply that when 0
is any compact set containing 8,, the Cauchy MLE is consistent.

A similar result can be stated for probit (i.e. Example 1.2). It is not given here because
it is possible to drop the compactness hypothesis of Theorem 2.5. The probit
log-likelihood turns out to be concave in parameters, leading to a simple consistency
result without a compact parameter space. This result is discussed in Section 2.6.
   Theorem 2.5 remains true if the i.i.d. assumption is replaced with the condition
thatz,,~,,...   is stationary and ergodic with (marginal) p.d.f. of zi given byf(z IO,).
This relaxation of the i.i.d. assumption is possible because the limit function remains
unchanged (so the information inequality still applies) and, as noted in Section 2.3,
uniform convergence and continuity of the limit still hold.
   A similar consistency result for NLS could be formulated by combining condi-
tional mean identification, compactness of the parameter space, h(x, 13)being conti-
2132                                                                   W.K. Nrwey and D. McFadden


nuous at each H with probability           one, and a dominance         condition.    Formulating
such a result is left as an exercise.



2.5.    Consistency    ofGMM
A consistency     result for GMM       can be formulated      as follows:

Theorem     2.6

Suppose that zi, (i = 1,2,. .), are i.i.d., I%’% W, and (i) W is positive semi-definite
and WE[g(z, t3)] = 0 only if (I = 8,; (ii) tIO~0, which is compact; (iii) g(z, 0) is continuous
at each QE 0 with probability     one; (iv) E[sup~,~ I/g(z, 0) I/] < co. Then 6% (so.

ProQf

Proceed by verifying the hypotheses           of Theorem 2.1. Condition        2.1(i) follows
by 2.6(i) and Lemma 2.3. Condition              2.l(ii) holds by 2.6(ii). By Lemma 2.4
applied to a(z, 0) = g(z, g), for g,(e) = n- ‘x:1= ,g(zi, 0) and go(g) = E[g(z, g)], one has
supBEe I(g,(8) - go(g) II30     and go(d) is continuous.         Thus, 2.l(iii) holds by
QO(0) = - go(g) WY,(Q) continuous.        By 0 compact, go(e) is bounded on 0, and by
the triangle and Cauchy-Schwartz         inequalities,

       I!A(@- Qo@)
                 I




         G IICM@
               - Yov4II2II + II + 2 IIso(@)
                                          II IId,(@- s,(@ II II @ II
            + llSo(~N2
                     II @- WII,

so that sup,,,lQ,(g)     - Q,Jg)I AO,      and 2.l(iv) holds.                                Q.E.D.

The conditions    of this result are quite weak, allowing for discontinuity  in the
moment functions.’ 9 Consequently,      this result is general enough to cover the
simulated moment estimators of Pakes (1986) and McFadden (1989), or the interval
moment estimator of Newey (1988).
   To use this result to show consistency    of a GMM estimator, one proceeds to
check the conditions, as in the Hansen-Singleton     example.




  19Measurability  of the estimator becomes an issue in this case, although   this can be finessed   by
working with outer measure, as previously noted.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                      2133


Example     1.3 continued

Assume that E[xx’] < a, so that I% A W = (E[xx’])-           ‘. For hypothesis (i), simply
assume that E[y(z, 0)] = 0 has a unique solution at 0, among all PIE0. Unfortunately,
as discussed in Section 2.2, it is difficult to give more primitive assumptions    for this
identification condition. Also, assume that @is compact, so that (ii) holds. Then (iii)
holds by inspection, and as discussed in Section 2.3, (iv) holds as long as the moment
existence conditions    given there are satisfied. Thus, under these assumptions,       the
estimator will be consistent.

Theorem 2.6 remains true if the i.i.d. assumption       is replaced with the condition
that zlr z2,. . is stationary and ergodic. Also, a similar consistency result could be
formulated for CMD, by combining         uniqueness  of the solution to 7c,,= h(8) with
compactness    of the parameter space and continuity      of h(O). Details are left as an
exercise.


2.6.    Consistency   without compactness

The compactness assumption is restrictive, because it implicitly requires that there
be known bounds on the true parameter value. It is useful in practice to be able to
drop this restriction, so that conditions for consistency without compactness are of
interest. One nice result is available when the objective function is concave. Intuitively,
concavity prevents the objective function from “turning up” as the parameter moves
far away from the truth. A precise result based on this intuition is the following one:

Theorem     2.7

If there is a function QO(0) such that (i) QO(0) 1s uniquely maximized at 0,; (ii) B0 is
an element of the interior of a convex set 0 and o,,(e) is concave; and (iii) o,(e) L
QO(0) for all 8~0,     then fin exists with probability   approaching   one and 8,,-%te,.

Proof

Let %?be a closed sphere of radius 2~ around 8, that is contained in the interior of
 0 and let %?!be its boundary. Concavity is preserved by pointwise limits, so that
QO(0) is also concave. A concave function is continuous on the interior of its domain,
so that QO(0) is continuous    on V?. Also, by Theorem 10.8 of Rockafellar (1970),
pointwise convergence of concave functions on a dense subset of an open set implies
uniform convergence on any compact subset of the open set. It then follows as in
Andersen and Gill (1982) that o,(e) converges to QO(fI) in probability   uniformly on
any compact subset of 0, and in particular        on %Y.Hence, by Theorem 2.1, the
maximand f!?!of o,,(e) on % is consistent for 0,. Then the event that g,, is within c of
fIO, so that Q,(g,,) 3 max,&,(@, occurs with probability    approaching    one. In this
event, for any 0 outside W, there is a linear convex combination         ,J$” + (1 - ,I)0
2134                                                                W.K. Newry and D. McFadden


that lies in g (with A < l), so that_ Q,(g,,) 3 Q,[ng,, + (1 - i)U]. By concavity,
Q.[ng,,_+ (1 - i)O] 3 ,$,(g,,) + (1 - E_)_Q,(e). Putting these inequalities together,
(1 - i)Q,(@ > (1 - i)Q,(0), implying 8, is the maximand over 0.               Q.E.D.

This theorem is similar to Corollary II.2 of Andersen and Gill (1982) and Lemma
A of Newey and Powell (1987). In addition to allowing for noncompact          0, it only
requires pointwise convergence. This weaker hypothesis is possible because point-
wise convergence of concave functions implies uniform con_vergence (see the proof).
This result also contains the additional   conclusion  that 0 exists with probability
approaching    one, which is needed because of noncompactness     of 0.
   This theorem leads to simple conditions for consistency without compactness for
both MLE and GMM. For MLE, if in Theorem 2.5, (ii)-                are replaced by 0
convex, In f(z 10)concave in 0 (with probability one), and E[ 1In f’(z 10)I] < 03 for all
0, then the law of large numbers and Theorem 2.7 give consistency. In other words,
with concavity the conditions     of Lemma 2.2 are sufficient for consistency     of the
MLE. Probit is an example.

Example    1.2 continued

It was shown in Section 2.2.1 that the conditions of Lemma 2.2 are satisfied. Thus,
to show consistency of the probit MLE it suffices to show concavity of the log-
likelihood, which will be implied by concavity of In @(x’@)and In @( - ~‘0). Since ~‘8
is linear in H, it suffices to show concavity of In a(u) in u. This concavity follows
from the well known fact that d In @(u)/du = ~(U)/@(U) is monotonic    decreasing [as
well as the general Pratt (1981) result discussed below].

 For GMM, if y(z, 0) is linear in 0 and I?f is positive semi-definite then the objective
 function is concave, so if in Theorem 2.6, (ii)-           are replaced by the requirement
 that E[ /Ig(z, 0) 111< n3 for all tj~ 0, the conclusion of Theorem 2.7 will give consis-
 tency of GMM. This linear moment function case includes linear instrumental
 variables estimators, where compactness is well known to not be essential.
    This result can easily be generalized to estimators with objective functions that
are concave after reparametrization.        If conditions (i) and (iii) are satisfied and there
is a one-to-one      mapping r(0) with continuous          inverse such that &-‘(I.)]         is
concave_ on^ r(O) and $0,) is an element of the interior of r( O), then the maximizing
value i of Q.[r - ‘(J”)] will be consistent for i, = s(d,) by Theorem 2.7 and invariance
of a maxima to one-to-one reparametrization,            and i? = r- ‘(I) will be consistent for
8, = z-~(&) by continuity       of the inverse.
    An important class of estimators with objective functions that are concave after
reparametrization      are univariate continuous/discrete        regression models with log-
concave densities, as discussed in Olsen (1978) and Pratt (1981). To describe this
class, first consider a continuous regression model y = x’& + cOc, where E is indepen-
dent of x with p.d.f. g(s). In this case the (conditional             on x) log-likelihood    is
- In 0 + In sCa_ ‘(y - x’fi)] for (B’, C)E 0 = @x(0, co). If In g(E) is concave, then this
Ch. 36: Large Sample Estimation and Hypothesis        Testing                                                 2135


 log-likelihood    need not be concave, but the likelihood In ‘/ + ln Y(YY- ~‘6) is concave
in the one-to-one        reparametrization       y = Q- ’ and 6 = /~‘/a. Thus, the average log-
 likelihood is also concave in these parameters, so that the above generalization                   of
 Theorem 2.7 implies consistency             of the MLE estimators        of fi and r~ when the
 maximization      takes place over 0 = Rkx(O, a), if In g(c) is concave. There are many
 log-concave densities, including those proportional           to exp( - Ixl”) for CI3 1 (including
 the Gaussian), logistic, and the gamma and beta when the p.d.f. is bounded, so this
 concavity property is shared by many models of interest.
    The reparametrized         log-likelihood      is also concave when y is only partially
 observed. As shown by Pratt (1981), concavity of lng(a) also implies concavity of
 ln[G(u)-     G(w)] in u and w, for the CDF G(u)=~“~~(E)~E.~~                    That is, the log-
 probability    of an interval will be concave in the endpoints.               Consequently,      the
 log-likelihood    for partial observability      will be concave in the parameters when each
 of the endpoints       is a linear function of the parameters.         Thus, the MLE will be
 consistent without compactness           in partially observed regression models with log-
 concave densities, which includes probit, logit, Tobit, and ordered probit with
 unknown censoring points.
    There are many other estimators with concave objective functions, where some
 version of Theorem 2.7 has been used to show consistency without compactness.
These include the estimators in Andersen and Gill (1982), Newey and Powell (1987),
 and Honort (1992).
    It is also possible to relax compactness with some nonconcave objective functions.
 Indeed, the original Wald (1949) MLE consistency theorem allowed for noncom-
pactness, and Huber (1967) has given similar results for other estimators. The basic
idea is to bound the objective function above uniformly in parameters that are far
enough away from the truth. For example, consider the MLE. Suppose that there
is a compact set % such that E[supBtOnMc In f(z 1d)] < E[ln f(z) fl,)]. Then by the
law of large numbers, with probability             approaching    one, supBtOnXc&(0) d n-l x
c;= 1 suPoE@n’fjc    In  f(zil@) <  n-‘Cy=    I In f(zl do), and  the maximum must lie in %‘.
Once the maximum is known to be in a compact set with probability                     approaching
one, Theorem 2.1 applies to give consistency.
    Unfortunately,     the Wald idea does not work in regression models, which are quite
common in econometrics. The problem is that the likelihood depends on regression
parameters      8 through linear combinations            of the form ~‘9, so that for given x
changing 8 along the null-space of x’ does not change the likelihood. Some results
that do allow for regressors are given in McDonald                and Newey (1988), where it is
shown how compactness            on 0 can be dropped when the objective takes the form
Q,(e) = n- ’ xy= 1 a(Zi, X:O) an d a (z, u) goes to - co as u becomes unbounded. It would
be useful to have other results that apply to regression models with nonconcave
objective functions.


   “‘Pratt (1981) also showed that concavity   of In g(c) is necessary   as well as sufficient for ln[G(u) ~ G(w)]
to be concave over all v and w.
2136                                                                 W.K. Newey and D. McFadden


    Compactness       is essential for consistency      of some extremum        estimators.    For
example, consider the MLE in a model where z is a mixture of normals, having
likelihood f(z 1Q)= pea-‘~+!$a-‘(z-p)] +(I -p)y~‘f$Cy~l(z-~)l for8=(p,a,6y)‘,
some 0 < p < 1, and the standard normal p.d.f. d(c) = (271) 1’2e-E2’2. An interpreta-
tion of this model is that z is drawn from N(p, a2) with probability p and from N(cc, r2)
with probability       (1 - p). The problem with noncompactness            for the MLE in this
model is that for certain p (and u) values, the average log-likelihood                    becomes
unbounded       as g (or y) goes to zero. Thus, for existence and consistency of the MLE
it is necessary to bound 0 (and y) away from zero. To be specific, suppose that p = Zi
for some i. Then f(z,lfI) = ~.a ~‘@(O)$(l -p)y-lf$cy~l(zi-cc)]+co                        as o+o,
and assuming that zj # zi for all j # i, cs occurs with probability               one, f(zj/U)+
(1 -p)y-l~[y-l(zj-@]>O.                Hence,   Q,,(e)= n-‘Cy=r lnf(zilO)         becomes      un-
bounded as (T+O for p = zi. In spite of this fact, if the parameter set is assumed to
be compact, so that (Tand y are bounded away from zero, then Theorem 2.5 gives
consistency      of the MLE. In particular,        it is straightforward     to show that (I is
identified,    so that, by the information          inequality,    E[ln f(zl@]    has a unique
maximum at Be. The problem here is that the convergence of the sample objective
function is not uniform over small values of fr.
    This example is extreme, but there are interesting econometric examples that have
this feature. One of these is the disequilibrium          model without observed regime of
 Fair and Jaffee (1972), where y = min{x’p, + G,,E,~‘6, + you}, E and u are standard
normal and independent           of each other and of x and w, and the regressors include
constants. This model also has an unbounded               average log-likelihood      as 0 -+ 0 for
a certain values of /I, but the MLE over any compact set containing                 the truth will
be consistent under the conditions of Theorem 2.5.
    Unfortunately,      as a practical matter one may not be sure about lower bounds on
variances, and even if one were sure, extraneous maxima can appear at the lower
bounds in small samples. An approach to this problem is to search among local
maxima that satisfy the first-order           conditions     for the one that maximizes the
likelihood. This approach may work in the normal mixture and disequilibrium
models, but might not give a consistent estimator when the true value lies on the
boundary (and the first-order conditions are not satisfied on the boundary).



2.7.   Stochastic   equicontinuity   and uniform   convergence

Stochastic equicontinuity     is important in recent developments       in asymptotic distri-
bution theory, as described in the chapter by Andrews in this handbook.                     This
concept is also important       for uniform convergence,       as can be illustrated     by the
nonstochastic     case. Consider a sequence of continuous,          nonstochastic     functions
{Q,(0)},“= 1. For nonrandom      functions, equicontinuity    means that the “gap” between
Q,(0) and Q,(6) can be made small uniformly in n by making g be close enough to
0, i.e. a sequence of functions is equicontinuous      if they are continuous     uniformly in
Ch. 36: Lurqr   Sample Estimation   and Hypothesis    Testing                                              2137



n. More precisely, equicontinuity     holds if for each 8, c > 0 there exists 6 > 0 with
1Q,(8) ~ Q,(e)1 < E for all Jj6 0 11< 6 and all 11.~~ It is well known that if Q,(0)
converges to Q,J0) pointwise, i.e. for all UE 0, and @is compact, then equicontinuity
is a necessary and sufficient condition     for uniform convergence      [e.g. see Rudin
(1976)]. The ideas behind it being a necessary and sufficient condition for uniform
convergence   is that pointwise convergence is the same as uniform covergence on
any finite grid of points, and a finite grid of points can approximately          cover a
compact set, so that uniform convergence means that the functions cannot vary too
much as 0 moves off the grid.
   To apply the same ideas to uniform convergence in probability       it is necessary to
define an “in probability”   version of equicontinuity.   The following version is for-
mulated in Newey (1991 a).

Stochastic_equicontinuity:  For every c, n > 0 there exists a sequence of random
variables d, and a sample size no such that for n > n,, Prob( 1d^,1> E) < q and for
each 0 there is an open set JV containing  8 with




Here t_he function d^, acts like a “random epsilon”, bounding the effect of changing
0 on Q,(e). Consequently,    similar reasoning to the nonstochastic    case can be used
to show that stochastic equicontinuity    is an essential condition for uniform conver-
gence, as stated in the following result:

Lemma 2.8

Suppose 0 is compact and Qo(B) is continuous.        Then ~up~,~lQ,(~) - Qo(@ 30
if and only if Q,(0) L Qo(e) for all 9~ @and Q,(O) is stochastically equicontinuous.

The proof of this result is given in Newey (1991a). It is also possible to state an
almost sure convergence      version of this result, although this does not seem to
produce the variety of conditions     for uniform convergence      that stochastic equi-
continuity does; see Andrews (1992).
   One useful sufficient condition for uniform convergence that is motivated by the
form of the stochastic equicontinuity   property is a global, “in probability”  Lipschitz
condition, as in the hypotheses of the following result. Let O,(l) denote a sequence
of random variables that is bounded in probability.22



   ” One can allow for discontinuity     in the functions by allowing the difference to be less than I: only for
n > fi, where fi depends on E, but not on H. This modification      is closer to the stochastic equicontinuity
condition given here, which does allow for discontinuity.
   ” Y” is bounded in probability    if for every E > 0 there exists ii and q such that Prob(l Y,l > ‘1)< E for
n > ii.
2138                                                            W.K. Newey and D. McFadden



Lemma 2.9

If 0 is compact, QO(0) is contmuous,_Q,,(0)   %QO(0) for all 0~0, and there is
cr>O and B,=O,(l)   such that for all 0, HE 0, 1o,(8) - Q^,(O)ld k,, I/g- 0 11
                                                                             OL,then
su~~lto I Q,(@ -    QdfO 5 0.

Prooj

By Lemma 2.8 it suffices to show stochastic equicontinuity.              Pick E, ye> 0. By
B,n = o,(l) there is M such that Prob( IB,I > M) < r] for all n large enough. Let
A,, = BJM_and     .-1/‘= [&:J e”- 0 11’<c/M}.ThenProb(I&>a)=Prob(Ifi,I>M)               <y
and for all 0, ~E.~V, IQ,,(o) - Q,,(0)1 < 6,,Il& 8 lla < 2,.                        Q.E.D.

This result is useful in formulating   the uniform law of large numbers given in
Wooldridge’s chapter in this volume. It is also useful when the objective function
Q,(e) is not a simple function of sample averages (i.e. where uniform laws of large
numbers do not apply). Further examples and discussion         are given in Newey
(1991a).


2.8.     Least ubsolute deviations examples

Estimators that minimize a sum of absolute deviations provide interesting examples.
The objective function that these estimators minimize is not differentiable,        so that
weak regularity conditions       are needed for verifying consistency    and asymptotic
normality. Also, these estimators have certain robustness properties that make them
interesting in their own right. In linear models the least absolute deviations estimator
is known to be more asymptotically      more efficient than least squares for thick-tailed
distributions.  In the binary choice and censored regression models the least absolute
deviations estimator is consistent without any functional form assumptions           on the
distribution   of the disturbance.   The linear model has been much discussed in the
statistics and economics literature [e.g. see Bloomfeld and Steiger (1983)], so it
seems more interesting to consider here other cases. To this end two examples are
given: maximum score, which applies to the binary choice model, and censored least
absolute deviations.


2.8.1.    Maximum    score


The maximum score estimator of Manski (I 975) is an interesting example because
it has a noncontinuous     objective function, where the weak regularity conditions
of Lemma 2.4 are essential, and because it is a distribution-free estimator for binary
choice. Maximum score is used to estimate 8, in the model y = I(x’B, + E > 0), where
l(.s&‘)denotes the indicator for the event .d (equal to one if d occurs and zero
Ch. 36: Lurye Sumple Estimation and Hypothesis         Testing                                             2139


otherwise), and E is a disturbance term with a conditional                    median (given x) ofzero.
The estimator solves eq. (1.1) for


       !A(@=-H-It lyi-    i=l
                                      l(x;H>o)/.


 A scale normalization     is necessary (as usual for binary choice), and a convenient
 one here is to restrict all elements of 0 to satisfy //0 /I = 1.
    To show consistency of the maximum score estimator, one can use conditions
 for identification  and Lemma 2.4 to directly verify all the hypotheses of Theorem
 2.1. By the law of large numbers,            Q,(e) will have probability     limit Qe(0) =
  - EC/y - l(x’U > O)l]. To show that this limiting objective has a unique maximum
 at fIO,one can use the well known result that for any random variable Y, the expected
 absolute deviation E[ 1Y - a(x)I] is strictly minimized at any median of the condi-
 tional distribution  of Y given x. For a binary variable such as y, the median is unique
 when Prob(y = 1 Ix) # +, equal to one when the conditional        probability is more than
 i and equal to zero when it is less than i. Assume that 0 is the unique conditional
 median of E given x and that Prob(x’B, = 0) = 0. Then Prob(y = 1 Ix) > ( < ) 3 if
 and only if ~‘0, > ( < ) 0, so Prob(y = 1 Ix) = i occurs with probability         zero, and
 hence l(x’t), > 0) is the unique median of y given x. Thus, it suffices to show that
 l(x’B > 0) # l(x’B, > 0) if 0 # 19,. For this purpose, suppose that there are corre-
sponding partitions 8 = (or, fl;,’ and x = (x,, x;)’ such that x&S = 0 only if 6 = 0; also
assume that the conditional      distribution    of x1 given x2 is continuous   with a p.d.f.
that is positive on R, and the coefficient O,, of x1 is nonzero. Under these conditions,
if 0 # 8, then l(x’B > 0) # l(x’B, > 0), the idea being that the continuous distribution
of x1 means that it is allowed that there is a region of x1 values where the sign of x’8
is different. Also, under this condition, ~‘8, = 0 with zero probability,         so y has a
unique conditional     median of l(x’8, > 0) that differs from i(x’8 > 0) when 0 # fI,,, so
that QO(@ has a unique maximum at 0,.
    For uniform convergence it is enough to assume that x’0 is continuously            distri-
buted for each 0. For example, if the coefficient of x1 is nonzero for all 0~0 then
this condition will hold. Then, l(x’B > 0) will be continuous at each tI with probability
one, and by y and l(x’B > 0) bounded, the dominance condition will be satisfied, so
the conclusion of Lemma 2.4 gives continuity of Qo(0) and uniform convergence of
Q,,(e) to Qe(@. The following result summarizes these conditions:

Theorem     2.10

If y = l(x’B, + E > 0) and (i) the conditional               distribution  of E given x has a unique
median at I: = 0; (ii) there are corresponding               partitions x = (x,, xi)’ and 8 = (e,, pZ)’


   13A median of the distribution   of a random   variable   Y is the set of values m SUCKthat Prob( Y 2 m) > f
and Prob(y < m) 2 +.
2140                                                                            W.K. Nrwey   and D. McFadden


such that Prob(x;G # 0) > 0 for 6 # 0 and the conditional      distribution     of xi given
x2 is continuous    with support R; and (iii) ~‘8 is continuously      distributed   for all
0~0=    (H:lIHIl = l}; then 850,.

2.8.2.   Censored leust ubsolute deviations

Censored       least absolute    deviations     is used to estimate B0 in the model y =
max{O, ~‘0, + F} where c has a unique conditional               median at zero. It is obtained by
solvingeq.(l.l)forQ,(0)=           -n-‘~~=i       (lyi- max{O,x~~}~-~yi-max{O,xj~,}~)=
Q,(U) - Q,(0,). Consistency         of 8 can be shown by using Lemma 2.4 to verify the
conditions of Theorem 2.1. The function Iyi - max (0, xi0) 1- Iyi - max {0, xi@,} I is
continuous       in 8 by inspection, and by the triangle inequality its absolute value is
bounded above by Imax{O,x~H}I + Imax{O,xI8,}I d lIxJ( 118ll + IId,ll), so that if
E[ 11x II] < cc the dominance          condition     is satisfied. Then by the conclusion         of
Lemma 2.4, Q,(0) converges uniformly in probability to QO(@= E[ ly - max{O,x’8} I-
ly - max{O, ~‘8,) I]. Thus, for the normalized             objective function, uniform conver-
gence does not require any moments of y to exist, as promised in Section 2.1.
   Identification     will follow from the fact that the conditional       median minimizes the
expected absolute deviation. Suppose that P(x’B, > 0) and P(x’6 # Olx’8, > 0) > 0
if 6 # 0. 24 By E having a uniqu e conditional                median at zero, y has a unique
conditional      median at max{O, x’o,}. Therefore, to show identification            it suffices to
show that max{O, x’d} # max{O, x’BO} if 8 # 0,. There are two cases to consider. In
case one, l(x’U > 0) # 1(x’@, > 0), implying max{O,x’B,} # max{O,x’@}. In case two,
1(x’@> 0) = l(x’0, > 0), so that max 10, x’(9) - max 10, x’BO}= l(x’B, > O)x’(H- 0,) # 0
by the identifying assumption.         Thus, QO(0) has a unique maximum over all of R4 at
BO. Summarizing        these conditions leads to the following result:

Theorem 2.11

If (i) y = max{O, ~‘8, + a}, the conditional   distribution of E given x has a unique
median at E = 0; (ii) Prob(x’B, > 0) > 0, Prob(x’G # Olx’0, > 0) > 0; (iii) E[li x 111< a;
and (iv) 0 is any compact set containing     BO, then 8 3 8,.

As previously promised, this result shows that no assumption         on the existence of
moments of y is needed for consistency of censored least absolute deviations. Also,
it shows that in spite of the first-order conditions being identically zero over all 0
where xi0 < 0 for all the observations,   the global maximum of the least absolute
deviations estimator, over any compact set containing       the true parameter, will be
consistent. It is not known whether the compactness      restriction can be relaxed for
this estimator; the objective function is not concave, and it is not known whether
some other approach can be used to get rid of compactness.


  241t suffices for the second condition   that E[l(u’U,   > 0)x.x’] is nonsingular.
Ch. 36: Large Sample Estimation and Hypothesis Testiny                                                   2141


3.     Asymptotic     normality

Before giving precise conditions for asymptotic normality, it is helpful to sketch the
main ideas. The key idea is that in large samples estimators are approximately          equal
to linear combinations   of sample averages, so that the central limit theorem gives
asymptotic normality. This idea can be illustrated by describing the approximation
for the MLE. When the log-likelihood         is differentiable and 8 is in the interior of the
parameter set 0, the first-order condition 0 = n ‘x1= 1V, In f(zi I$) will be satisfied.
Assuming twice continuous       differentiability     of the log-likelihood, the mean-value
theorem applied to each element of the right-hand side of this first-order condition
gives


                                                                                                        (3.1)


where t?is a mean value on the line joining i? and 19~and V,, denotes the Hessian
matrix of second derivatives. ’ 5 Let J = E[V, In f(z (0,) (V, In f(z 1tl,)}‘] be the infor-
mation matrix and H = E[V,, In f(z 1O,)] the expected Hessian. Multiplying through
by Jn      and solving for &(e^ - 6,) gives




                         p       (Hessian Conv.)                  d    (CLT)                            (3.2)
                                 (Inverse Cont.)
                             I                                      1
                         H-1                                      NO. J)


By the well known zero-mean property of the score V,ln ,f(z/Q,) and the central
limit theorem, the second term will converge in distribution      to N(0, .I). Also, since
eis between 6 and 8,, it will be consistent if 8 is, so that by a law of large numbers
that is uniform in 0 converging to 8, the Hessian term converges in probability          to
H. Then the inverse Hessian converges in probability       to H-’ by continuity     of the
inverse at a nonsingular   matrix. It then follows from the Slutzky theorem that
&(6-        0,) % N(0, Hm 1JH-‘).26                Furthermore,        by the information   matrix equality


   25The mean-value theorem only applies to individual elements of the partial derivatives, so that 0
actually differs from element to element of the vector equation (3.1). Measurability of these mean values
holds because they minimize the absolute value of the remainder term, setting it equal to zero, and thus
are extremum estimators; see Jennrich (1969).
     *“The Slutzky theorem   is Y, 5    Y, and Z, Ac*Z,Y,              ’
                                                                      -WY,.
2142                                                                          W’,K. Newey   und D. McFadden


H = -J, the asymptotic        variance will have the usual inverse information            matrix
form J-l.
   This expansion shows that the maximum likelihood estimator is approximately
equal to a linear combination     of the average score in large samples, so that asymptotic
normality follows by the central limit theorem applied to the score. This result is
the prototype for many other asymptotic normality results. It has several components,
including a first-order condition that is expanded around the truth, convergence of
an inverse Hessian, and a score that follows the central limit theorem. Each of these
components      is important  to the result. The first-order condition is a consequence
of the estimator being in the interior of the parameter space.27 If the estimator
remains on the boundary asymptotically,          then it may not be asymptotically       normal,
as further discussed below. Also, if the inverse Hessian does not converge to a
constant or the average score does not satisfy a central limit theorem, then the
estimator may not be asymptotically          normal. An example like this is least squares
estimation    of an autoregressive      model with a unit root, as further discussed in
Chapter 2.
   One condition that is not essential to asymptotic normality               is the information
matrix equality. If the distribution     is misspecified [i.e. is not f’(zI fI,)] then the MLE
may still be consistent and asymptotically          normal. For example, for certain expo-
nential family densities, such as the normal, conditional           mean parameters will be
consistently estimated even though the likelihood is misspecified; e.g. see Gourieroux
et al. (1984). However, the distribution      misspecification   will result in a more compli-
cated form H- 'JH-' for the asymptotic              variance. This more complicated          form
must be allowed for to construct a consistent asymptotic variance estimator under
misspecification.
    As described above, asymptotic normality results from convergence in probability
of the Hessian, convergence in distribution           of the average score, and the Slutzky
theorem. There is another way to describe the asymptotic normality results that is
often used. Consider an estimator 6, and suppose that there is a function G(z) such
that


       fi(e-     0,) = t       $(zi)/$    + o,(l),      EC$(Z)l = 0,        ~%$(z)lc/(ZYl exists,         (3.3)
                         i=l



where o,(l) denote: a random vector that converges in probability to zero. Asymp-
totic normality of 6’then results from the central limit theorem applied to Cy= 1$(zi)/
,,h, with asymptotic variance given by the variance of I/I(Z).An estimator satisfying
this equation is referred to as asymptotically lineur. The function II/(z) is referred to
as the influence function,  motivated by the fact that it gives the effect of a single


   “It is sufficient that the estimator be in the “relative interior” of 0, allowing for equality restrictions
to be imposed on 0, such as 0 = r(g) for smooth ~b) and the true )’ being in an open ball. The first-order
condition does rule out inequality restrictions that are asymptotically     binding.
Ch. 36: Lurge Sumplr Estimation and Hypothesis   Testing                                    2143


observation   on the estimator, up to the o,(l) remainder term. This description        is
useful because all the information   about the asymptotic variance is summarized in
the influence function. Also, the influence function is important    in determining   the
robustness properties of the estimator; e.g. see Huber (1964).
   The MLE is an example of an asymptotically         linear estimator, with influence
function $(z) = - H ‘V, In ,f(z IO,). In this example the remainder term is, for the
mean value a, - [(n ‘C;= 1V,,,,In f(zi 1g))- ’ - H - ‘In- li2Cr= ,V, In f(zil e,), which
converges in probability to zero because the inverse Hessian converges in probability
to H and the $I times the average score converges in distribution.           Each of NLS
and GMM is also asymptotically            linear, with influence functions    that will be
described below. In general the CMD estimator need not be asymptotically            linear,
because its asymptotic properties depend only on the reduced form estimator fi.
However, if the reduced form estimator 72is asymptotically          linear the CMD will
also be.
   The idea of approximating       an estimator by a sample average and applying the
central limit theorem can be used to state rigorous asymptotic normality results for
extremum estimators. In Section 3.1 precise results are given for cases where the
objective function is “sufficiently smooth”, allowing a Taylor expansion like that of
eq. (3.1). Asymptotic normality for nonsmooth         objective functions is discussed in
Section 7.


3.1.    The husic results

For asymptotic      normality,  two basic results are useful, one for an extremum
estimator and one for a minimum distance estimator. The relationship           between
these results will be discussed below. The first theorem is for an extremum estimator.

Theorem    3.1

Suppose    that 8 satisfies eq. (l.l),   @A O,, and (i) o,Einterior(O);      (ii) o,(e) is twice
continuously   differentiable in a neighborhood   Jf of Be; (iii) &V,&,(0,,) % N(0, Z);
(iv) there is H(Q) that is continuous    at 8, and supBEN IIV,,&(@ - H(d)11 30;      (v)
H = H(H,) is nonsingular.      Then J&(8 - 0,) % N(0, H         l,?ZH- ‘).

Proqf

A sketch of a proof is given here, with full details described in Section 3.5. Condi-
tions (i)-(iii) imply that V,&(8) = 0 with probability  approaching   one. Expanding
around B0 and solving for ,,&(8 - 0,) = - I?(e)- ’ $V,&(0,),          where E?(B) = V,,&(0)
and f?is a mean value, located between Band 8,. By ep. Be and (iv), with probability
approaching - one, I/fi(q - H /I< /IE?(g)  - H(g) II + )IH(g) - H II d supBEell fi(O) -
H(B) /I + /IH(0) - H/I 3 0. Then by continuity   of matrix inversion,    - f?(g)- l 3
 -H-l.    The conclusion then follows by the Slutzky theorem.                   Q.E.D.
2144                                                                 W.K. Newey and D. McFuddun


The asymptotic variance matrix in the conclusion of this result has a complicated
form, being equal to the product H -'EH- '.In the case of maximum likelihood
this form simplifies to J- ‘, the inverse of the information         matrix, because of the
information     matrix equality. An analogous       simplification   occurs for some other
estimators, such as NLS where Var(ylx) is constant (i.e. under homoskedasticity).
As further discussed in Section 5, a simplified asymptotic variance matrix is a feature
of an efficient estimator in some class.
   The true parameter being interior to the parameter set, condition (i), is essential
to asymptotic normality. If 0 imposes inequality restrictions on 0 that are asympto-
tically binding, then the estimator may not be asymptotically          normal. For example,
consider estimation of the mean of a normal distribution           that is constrained to be
nonnegative, i.e. f(z 1H) = (271~~)- ’ exp [ - (z - ~)~/20~], 8 = (p, 02), and 0 = [0, co) x
(0, acj). It is straightforward  to check that the MLE of ~1 is ii = Z,Z > 0, fi = 0
otherwise. If PO = 0, violating condition (ii), then Prob(P = 0) = i and Jnfi is N(O,o’)
conditional   on fi > 0. Therefore, for every n (and hence also asymptotically),     the
distribution   of &(fl-      pO) is a mixture of a spike at zero with probability i and the
positive half normal distribution.         Thus, the conclusion of Theorem 3.1 is not true.
This example illustrates that asymptotic            normality    can fail when the maximum
occurs on the boundary. The general theory for the boundary case is quite compli-
cated, and an account will not be given in this chapter.
   Condition    (ii), on twice differentiability     of Q,(s), can be considerably     weakened
without affecting the result. In particular, for GMM and CMD, asymptotic normality
can easily be shown when the moment functions only have first derivatives. With
considerably    more work, it is possible to obtain asymptotic normality when Q,,(e)
is not even once differentiable,       as discussed in Section 7.
   Condition    (iii) is analogous to asymptotic normality of the scores. It -11 often
follow from a central limit theorem for the sample averages that make up V,Q,(0,).
   Condition (iv) is uniform convergence of the Hessian over a neighborhood                of the
true parameter and continuity of the limiting function. This same type of condition
(on the objective function) is important          for consistency of the estimator, and was
discussed in Section 2. Consequently,          the results of Section 2 can be applied to give
primitive hypotheses for condition (iv). In particular, when the Hessian is a sample
average, or depends on sample averages, Lemma 2.4 can be applied. If the average
is continuous     in the parameters, as will typically be implied by condition (iv), and
a dominance       condition    is satisfied, then the conclusion      of Lemma 2.4 will give
uniform convergence. Using Lemma 2.4 in this way will be illustrated for MLE and
GMM.
   Condition (v) can be interpreted as a strict local identification         condition, because
H = V,,Q,(H,) (under regularity conditions that allow interchange of the limiting
and differentiation     operations.) Thus, nonsingularity        of H is the sufficient (second-
order) condition      for there to be a unique local maximum at 0,. Furthermore,                 if
V,,QO(0) is “regular”, in the sense of Rothenberg (1971) that it has constant rank in
a neighborhood       of 8,, then nonsingularity     of H follows from Qa(0) having a unique
Ch. 36:   Large Sample Estimation   and ffypothesis   Testing                                  2145


maximum at fIO.A local identification condition in these cases is that His nonsingular.
  As stated above, asymptotic normality of GMM and CMD can be shown under
once differentiability, rather than twice differentiability. The following asymptotic
normality result for general minimum distance estimators is useful for this purpose.

Theorem      3.2

Suppose that H^satisfies eq. (1.1) for Q,(0) = - 4,(0)‘ii/g,,(e) where ii/ 3 W, W is
positive semi-definite, @Lo,,    and (i) .Q,Einterior(O);     (ii) g,(e) is continuously
differentiable in a neighborhood   JV’ of 8,; (iii) $9,(8,) 5 N(O,n); (iv) there is G(8)
that is continuous   at 0, and supBE y /(V&,,(e) - G(U) II A 0; (v) for G = G(e,), G’ WC
is nonsingular.      Then $(8-         0,) bI[O,(G’WG)-‘G’Wf2WG(G’WG)-‘1.



The argument is similar to the proof of Theorem 3.1. By (i) and (ii), with probability
approaching one the first-order conditions G(@t@@,($ = 0 are satisfied, for G(0) =
V&,,(0). Expanding         d,(8) around       B0 and     solving   gives Jn(e^-   e,,) = - [G(@ x
I?%@)] - 1G^(@I&“$,(&,),            w h ere t?is a mean value. By (iv) and similar reasoning     as
for Theorem 3.1, G(8) A G and G(g) A G. Then by(v), - [G(@‘@‘G(@]-16(e),%~
 - (G’WG)- 'G'W, so the conclusion follows by (iii) and the Slutzky theorem.
                                                                             Q.E.D.

When W = Q - ‘, the asymptotic variance of a minimum distance estimator simplifies
to (G’Q - ‘G)) ‘. As is discussed in Section 5, the value W = L2 _ ’ corresponds to an
efficient weighting matrix, so as for the MLE the simpler asymptotic variance matrix
is associated with an efficient estimator.
   Conditions (i)-(v) of Theorem 3.2 are analogous to the corresponding            conditions
of Theorem 3.1, and most of the discussion given there also applies in the minimum
distance case. In particular, the differentiability     condition for g,(e) can be weakened,
as discussed in Section 7.
   For analyzing asymptotic normality, extremum estimators can be thought of as
a special case of minimum distance estimators, with V&,(e) = d,(0) and t?f = I = W.
The_ first-order   conditions   for extremum        estimators    imply that o,(tI)‘@g,(fI) =
V,Q,(0)‘V,Q,(@ has a minimum (of zero) at 0 = 8. Then the G and n of Theorem 3.2
are the H and Z of Theorem 3.1, respectively, and the asymptotic variance of the
extremum estimator is that of the minimum distance estimator, with (G’WG)-’                   x
G’Wf2WG(G’WG)p1         =(H’H)-‘H’L’H(H’H)m’            = H-‘ZHpl.      Thus, minimum dis-
tance estimation provides a general framework for analyzing asymptotic normality,
although, as previously discussed, it is better to work directly with the maximum,
rather than the first-order conditions, when analyzing consistency.28

   18This generality suggests that Theorem 3.1 could be formulated as a special case of Theorem 3.2.
The results are not organLed    in this way because it seems easier to apply Theorem 3.1 directly to
particular extremum estimators.
2146                                                                  W.K. Newey und D. McFadden


3.2.    Asymptotic    normality   jbr MLE

The conditions for asymptotic       normality   of an extremum     estimator   can be specialized
to give a result for MLE.


Theorem    3.3
Suppose that zl,. . . , z, are i.i.d., the hypotheses of Theorem 2.5 are satisfied and (i)
d,Einterior(O);   (ii) f(zl0) is twice continuously        differentiable and f(zl0) > 0 in a
neighborhood    ,X of 8,; (iii) {suP~~,~- 11V,f(zl B) //dz < co, jsupe._, IIV,,f(zl@ I)dz < m;;
(iv) J = ECVBln f(z I 4,) PO In f(z I 6Ji’l exists and is nonsingular; (v) E[suP~~_,~ 11 VBHx
lnf(z~8)~l]<co.Then~(8-8,)~N(O,J~’).


Proof

The proof proceeds by verifying the hypotheses of Theorem 3.1. By Theorem 2.5,
o^A do. Important         intermediate      results are that the score s(z) = V, lnJ‘(zI U,) has
mean zero and the information                matrix equality .I = - E[V,,Inf(zI0,)].          These
results follow by differentiating         the identity jf(zlB)dz twice, and interchanging        the
order of differentiation      and integration, as allowed by (iii) and Lemma 3.6 in Section
3.5. Then conditions         3.1(i), (ii) hold by 3.3(i), (ii). Also, 3.l(iii) holds, with Z = J,
by E[s(z)] = 0, existence of J, and the LindberggLevy                 central limit theorem. To
show 3.l(iv) with H = -J, let 0 be a compact set contained in JY and contain-
ing fIOin its interior, so that the hypotheses of Lemma 2.4 are satisfied for a(z, 0) =
V,, In ,f(zl 0) by (ii) and (v). Condition 3.1 (v) then follows by nonsingularity       of .I. Now
Jn(H^-0,)     %N(O,     H-‘JHP’)=N(O,JP1)follows            by theconclusionofTheorem          3.1
andH=     -J.                                                                              Q.E.D.

The hypotheses of Theorem 2.5 are only used to make sure that @-% O,, so that
they can be replaced by any other conditions that imply consistency. For example,
the conditions that 8, is identified, In f(z / 19)is concave in 6, and E[ IIn f(z 10)I] < x
for all 8 can be used as replacements       for Theorem 2.5, because Theorem 2.7 then
gives 8At10.        More generally, the MLE will be asymptotically           normal if it is
consistent and the other conditions (i)-(v) of Theorem 3.3 are satisfied.
    It is straightforward  to derive a corresponding     result for nonlinear least squares,
by using Lemma 2.4, the law of large numbers, and the Lindberg-Levy             central limit
theorem to provide primitive conditions          for Theorem 3.1. The statement          of a
theorem is left as an exercise for the interested reader. The resulting asymptotic
variance for NLS will be H-‘ZH         -I, for E[ylx] = h(x, U,), h&x, 0) = V,h(x, 0), H =
 - E[h,(x, O,)h,(x, O,)‘] and Z = E[ {y - h(x, O,)}‘h,(x, Q,)h,(x, O,)‘]. The variance
matrix simplifies to a2H - ’ when E[ {y - h(x, BO)}2 Ix] is a constant 02, a well known
efficiency condition for NLS.
Ch. 36: Larye Sump/e Estimation and Hypothesis        Testing                                               2147


   As previously stated, MLE and NLS will be asymptotically     linear, with the MLE
influence function given by J- ‘VOIn j’(zI 0,). The NLS influence function will have
a similar form,

      It/(z)= { EChk ~oP,(.?Qd’l} - l h&x,Q,) [y - 4x, U,)],                                               (3.4)

as can be shown by expanding the first-order conditions for NLS.
   The previous examples provide useful illustrations  of how the regularity                            condi-
tions can be verified.


Example      1.1 continued

In the Cauchy location         and scale case, f(z18) = G- ‘y[o- ‘(z - p)] for Y(E)=
l/[rc( 1 + E’)]. To show asymptotic normality of the MLE, the conditions of Theorem
3.3 can be verified. The hypotheses of Theorem 2.5 were shown in Section 2. For
the parameter set previously specified for this example, condition (i) requires that
p0 and (me are interior points of the allowed intervals. Condition          (ii) holds by
inspection. It is straightforward   to verify the dominance conditions for (iii) and (v).
For example, (v) follows by noting that V,,lnf(z10)          is bounded,   uniformly    in
bounded p and 0, and 0 bounded away from zero. To show condition (iv), consider
cc=(~(~,c(J # 0. Note that a,(1 + z2)[ti’V01nf(z~8,)]     = cr,2z + ~~(1 + z’) + c(,2z2=
~1~+ (2c(,)z + (3u,)z2 is a polynomial and hence is nonzero on an interval. Therefore,
E[{cx’V,ln~f(z~0,,)}2] = c(‘J M> 0. Since this conclusion is true for any CI# 0, J must
be nonsingular.


Example      1.2 continued

Existence and nonsingularity       of E[xx’] are sufficient for asymptotic normality           of
the probit MLE. Consistency of 8 was shown in Section 2.6, so that only conditions
(i)-(v) of Theorem 3.3 are needed (as noted following Theorem 3.3). Condition                  (i)
holds because 0 = Rq is an open set. Condition (ii) holds by inspection of f’(z 10) =
y@(x’O) + (1 - y)@( - x’(9). For condition (iii), it is well known that 4(u) and 4”(u)
are uniformly bounded, implying V&z /0) = (1 - 2y)4(x’H)x and V,,f(z 10)= (1 - 2y) x
~,(x’@xx’ are bounded by C( 1 + I/x 11     2, for some constant C. Also, integration        over
dz is the sum over y and the expectation over x {i.e. ja(y, x)dz = E[a(O, x) + a( 1, x)] },
so that i( 1 + 11 x I/2)dz = 2 + 2E[ //x 11’1< GC. For (iv), it can be shown that J =
E[i.(x’0&(   - x’d,)xx’],   for j(u) = ~(U)/@(U). Existence of J follows by E.(u)i.(- ~1)
bounded, and nonsingularity        by %(u)A(- u) bounded away from zero on any open
interval.29 Condition (v) follows from V,, In ,f’(z IQ,,)= [&.(x’B,)y + &,( - x’tI,)( 1 - y)]xx’

    291t can be shown that Z(u)i.( - a) is bounded using l’H8pital’s rule. Also, for any Ir>O, J 2 E[l(lx’H,I <
fi)i(x’fI,)n( -x’tI,)xx’] 2 CE[ l(lx’O,I < C)x.x’] in the positive semi-definite sense, the last term is positive
definite for large enough V by nonsingularity       of E[xx’].
2148                                                                    W.K. Newey and D. McFuddm


and boundedness   of I_,(u). This example illustrates how conditions    on existence
of moments may be useful regularity conditions       for consistency and asymptotic
normality   of an MLE, and how detailed work may be needed to check the
conditions.



3.3.    Asymptotic    normulity for GMM

The conditions   on asymptotic    normality          of minimum       distance   estimators   can be
specialized to give a result for GMM.


Theorem     3.4

Suppose that the hypotheses ofTheorem 2.6 are satisfied, r;i/ A W, and (i) 0,Einterior
of 0; (ii) g(z,O) is continuously    differentiable   in a neighborhood     _t‘ of 0,, with
probability   approaching     one; (iii) E[g(z, fl,)] = 0 and E[ I/g(z, 0,) I/‘1 is finite;
(iv) E[su~,,~  Ij V&z, 0) 111< co;(v) G’WG is nonsingular      for G = E[V,g(z, fl,)]. Then
for 0 = ECg(z, @,Jg(z, Hd’l,$(@           - 0,) ~N[O,(G’WG)G’WBWG(G’WG)~‘].

Proof

The proof will be sketched, although a complete proof like that of Theorem 3.1
given in Section 3.5 could be given. By (i), (ii), and (iii), the first-order condition
2G,,(@%~,(8) = 0 is satisfied with probability approaching      one, for G,(e) = V&,,(0).
Expanding      J,,(g) around     fI,, multiplying   through   by $,     and solving gives


                                                                                                (3.5)

where 0 is the mean            value.   By (iv), G,,(8) LG    and G,(g) 3 G, so that by (v),
[G,(~))‘~~,(8)]-‘~,(~))‘ii/        ~(G’WG)~‘G’W.          The conclusion then follows by the
Slutzky theorem.                                                                      Q.E.D.

The complicated   asymptotic variance formula simplifies to (G’R ‘G)- ’ when W =
R- ‘. As shown   in Hansen (1982) and further discussed in Section 5, this value for
 W is optimal in the sense that it minimizes the asymptotic         variance matrix of the
GMM estimator.
   The hypotheses of Theorem 2.6 are only used to make sure that I!?L BO, so that
they can be replaced by any other conditions that imply consistency. For example,
the conditions that 8, is identified, g(z, 0) is linear in 8, and E[ /Ig(z, II) 111< cc for all
8 can be used as replacements       for Theorem 2.6, because Theorem 2.7 then gives
830,.     More generally, a GMM estimator will be asymptotically               normal if it is
consistent and the other conditions (i))(v) of Theorem 3.4 are satisfied.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                          2149


  It is straightforward      to derive    a corresponding     result     for classical   minimum
distance, under the conditions     that 6 is consistent, &[72 - h(e,)] L N(0, fl) for
some R, h(8) is continuously    differentiable    in a neighborhood   of Be, and G’WG is
nonsingular   for G = V&(0,). The statement of a theorem is left as an exercise for the
interested reader. The resulting asymptotic variance for CMD will have the same
form as given in the conclusion of Theorem 3.4.
   By expanding the GMM first-order conditions, as in eq. (3.5), it is straightforward
to show that GMM is asymptotically          linear with influence function

     $(z) = - (G’ WC) - ‘G’ Wg(z, 0,).                                                          (3.6)

In general CMD need not be asymptotically     linear, but will be if the reduced form
estimator 72 is asymptotically linear. Expanding     the first-order conditions  for 6
around   the truth gives $(e^-      0,) = - (G’WG)-‘6’6’&(72             - x0), where G = V&(8),
G = V,@(8), and @is the mean value. Then &(fi               - rra) converging      in distribution
and(~‘~G)-‘~‘ii/‘~(G’WG)-‘G’W.                implies that &(8-          0,) = - (G’WG)-‘G’          x
W&(72     - TC,J+ o,(l). Therefore,     if 72is asymptotically   linear with influence function
ll/“(z), the CMD estimator     will also be asymptotically     linear with influence function

      t&z) = - (G’WG)-       ‘G’W$“(z).                                                         (3.7)

The Hansen-Singleton  example provides           a useful illustration     of how the conditions
of Theorem 3.4 can be verified.

Example 1.3 continued

It was shown       in Section 2 that        sufficient conditions   for consistency      are that
E[x(BwyY - l)] = 0 have a unique             solution at 0eE 0 = [Be, /3,]x[yl, y,], and that
E[llx(l]<co        and E[IJxll J~l(lyI~‘+Iyl~~)]<co.Toobtainasymptoticnorrnality,
impose the additional          conditions      that B,&nterior(O),       ye < 0, E[ 11x II‘1 < co,
E[ 11 x II’ 1w Izyzyo] < co, and E[x(wyYo, w*ln(y)yYo)] has rank 2. Then condition (i) of
Theorem 3.4 is satisfied by assumption. Condition (ii) is also satisfied, with Veg(z, 0) =
x(wyy, w-ln(y)yY). Condition       (iii) is satisfied by the additional,    second-moment      re-
strictions, and by the GMM identification             hypothesis.
    To check condition (iv), note that IIn(y) I is bounded above by C( 1y 1p-E+ 1y I”) for
any E > 0 and constant C big enough. Let N be a neighborhood                     of B,, such that
ye + E < y < yU- E for all &_N. Then SUP~,~~ liV,g(z,e)iI ~CllxlllwlCl                +ln(y)] x
~~~~l~l~~~lI~III~l~~+l~l~~+l~l~~~~~~~l~l~~lI~III~l~l~l~‘+l~l~~~,                          so    that
condition (iv) follows by the previously assumed moment condition. Finally, condi-
tion (v) holds by the previous rank condition    and W = (E[xx’])-’   nonsingular.
Thus, under the assumptions    imposed above, the nonlinear two-stage least squares
estimator will be consistent and asymptotically  normal, with asymptotic variance
as given in the conclusion of Theorem 3.4.
2150                                                                    W.K. Nrrvey and D. McFudden


3.4.   One-step   theorems

A result that is useful, particularly for efficient estimation, pertains to the properties
of estimators that are obtained from a single iteration of a numerical maximization
procedure, such as NewtonRaphson.            If the starting point is an estimator that is
asymptotically    normal, then the estimator from applying one iteration will have the
same asymptotic variance as the maximum of an objective function. This result is
particularly   helpful when simple initial estimators         can be constructed,  but an
efficient estimator is more complicated, because it means that a single iteration will
yield an efficient estimator.
    To describe a one-step extremum estimator, let ?? be an initial estimator and l?
be an estimator of H = plim[V,,&(B,)].          Consider the estimator

       8=   e- I7 - lV,&(O).                                                                     (3.8)

If l? = V,,&(@ then eq. (3.8) describes one Newton-Raphson          iteration.   More
generally it might be described as a modified NewtonRaphson          step with some
other value of fi used in place of the Hessian. The useful property of this estimator
is that it will have the same asymptotic      variance as the maximizer of o,(Q), if
&(&       0,) is bounded in probability.    Consequently,   if the extremum estimator is
efficient in some class, so will be the one-step estimator, while the one-step estimator
is computationally    more convenient than the extremum estimator.30
   An important example is the MLE. In this case the Hessian limit is the negative
of the information     matrix, so that fi = -J is an estimated Hessian. The corre-
sponding iteration is


       e= @+ J-‘n-’        f    V,lnf(zi)8).                                                     (3.9)
                          i=l


For the Hessian estimator of the information      matrix 7 = - n ’ x1= 1V,, In f(zi Ig),
eq. (3.9) is one NewtonRaphson        iteration. One could also use one of the other
information    matrix estimators discussed in Section 4. This is a general form of the
famous linearized maximum likelihood estimator. It will have the same asymptotic
variance as MLE, and hence inherit the asymptotic efficiency of the MLE.
   For minimum distance estimators it is convenient to use a version that does not
involve second derivatives of the moments. For c = V,d,(@, the matrix - 2G’l?‘G
is an estimator of the Hessian of the objective function - ~,,(O)‘l?~,(0) at the true
parameter value, because the terms that involve the second derivatives of Q,(e) are
asymptotically   negligible.31 Plugging a = - 2G’l?fi/G into eq. (3.8) gives a one-step

   “‘An alternative one-step estimator can be obtained by maximizing over the step size, rather than
setting it equal to one, as t? = fI + xd^for d^= - H ’ P,,&(@ and z= argmax,Q,(O + 22). This estimator
will also have the same asymptotic variance as the solution to eq. (l.l), as shown by Newey (1987).
    31These terms are all multiplied bv one or more elements of iJO,), which all converge to zero.
Ch. 36: Large Sample Estimation and Hypothesis     Testing                                          2151


minimum      distance   estimator,

        e”=e- (Cfr;i/G)-‘G~~gn(H).                                                              (3.10)

Alternatively,  one could replace G by any consistent estimator of plim[V&,(8,)].
This estimator will have the same asymptotic        variance as a minimum       distance
estimator with weighting matrix I?. In particular, if I%’is a consistent estimator of
fl- ‘, an efficient choice of weighting matrix, then e” has the same asymptotic
variance as the minimum distance estimator with an efficient weighting matrix.
   An example is provided by GMM estimation. Let G = n- ’ x1= 1V&z,, g) and let
fi be an estimator of R = E[y(z, fI,)g(z, 0,)‘], such as fi = n- r C;= 1 g(zi, 8)g(z, g)‘.
Then the one-step estimator of eq. (3.10) is

                                --
        H1=8-(GrQ-lC)-l~ffl-~            t    g(zi,iJ)/n.                                       (3.1 1)
                                        i=l



This is a one-step GMM estimator with efficient choice of weighting matrix.
   The results showing that the one-step estimators      have the same asymptotic
variances as the maximizing values are quite similar for both extremum and mini-
mum distance estimators, so it is convenient to group them together in the following
result:


Theorem     3.5

Suppose that h(s-     0,) is bounded    in probability. If I!? satisfies eq. (3.8), the
conditions of Theorem 3.1 are satisfied, and either I? = V,,,&(@ or Z? 3 H, then
$(Q-       0,) L   N(0, H- ‘ZH-      ‘). If esatisfies    eq. (3.10), the conditions   of Theorem    3.2
are satisfied, and either G= V&J@ or G L                 G, then J&(8-     (3,) % N[O, (G’WG)- l x
G’Wl2WG(G’WG)-‘1.


Proof

Using eq. (3.8) and expanding         V,&(@ around           8, gives:




where 4 is the mean value. By 1-l -% H-l and the Slutzky theorem, the second
term -converges_ .in distribution    to N(0, H- ‘ZH- ‘). By condition (iv) of Theorem
3.1, Hp’V,,Q,(@+H-           ‘H = I, so that the first term is a product of a term that
converges in probability     to zero with a term that is bounded in probability,   so that
the first term converges in probability     to zero, giving the conclusion. The result for
minimum distance follows by a similar argument applied to the expansion of eq. (3.10)
2152                                                                  W.K. Newey and D. McFadden


given     by   &(e”-       (3,) = [Z - (c’~~)-‘c’~V,g,(e)]~(e-             6,) - (G’k%-‘G’@
J%“(&).                                                                                  Q.E.D.

This result can be specialized to MLE or GMM by imposing the conditions               of
Theorem 3.3 or 3.4, but for brevity this specialization is not given here.
  The proof of this result could be modified to give the slightly stronger conclusion
that &(e - 6) 3 0,-a condition that is referred to as “asymptotic equivalence”            of
the estimators B”and 0. Rothenberg(l984)       showed that for MLE, if a second iteration
is undertaken,    i.e. f? in eq. (3.8) solves the same equation for some other initial
estimator, then n(e - 6) -% 0. Thus, a second iteration makes the estimator asympto-
tically closer to the extremum estimator. This result has been extended to multiple
iterations and other types of estimators in Robinson (1988a).



3.5.    Technicalities


A complete proof of Theorem           3.1

Without loss of generality, assume that Af is a convex, open set contained in 0.
Let i be the indicator function for the event that &eJlr. Note that $11-*0, implies
i 3 1. By condition (ii) and the first-order conditio_ns fo_ra maximum, i*V&,,(@ = 0.
Also, b_y a mean-value    expansion    theorem, 0 = 1 *V,Q,(e,), % 1 *VQQ^,,(e,)Je- 0,),
where tIj is a random variable equal to the mean value when 1 = 1 and equal to fIO
otherwise. Then c&0,.        Let H denote the matrix with jth row Vi&(gj);. By
condition      (iv), H L    H. Let 7 be the indicator      for film   and H nonsingular.   Then
by condition (v), i -% 1, and 0 = i.V,&(&,) + i*H(e-      III,), so that $(e- 0,) =
--
1H ’ &V&,(6,)      + (1 - i)J%(e - 0,). Then since ifi - ’ 3 H- ’ by condition (v),

&V,&(&J     5 N(O, z) b y condition (iii), and (1 - i)&(i!? - 0,) 3 0 by i -% 1, the
conclusion follows by the Slutzky theorem and the fact that if Y, -% Ye and 2, -
Y, 5 0 then Z, % Y,.                                                         Q.E.D.

The proof that the score has zero mean and of the information matrix equality. By the
proof of Theorem 3.3 it suffices to show that J f (zl B)dz is twice differentiable  and
that the order of differentiation and integration can be interchanged.   The following
well known lemma, e.g. as found in Bartle (1966, Corollary 5.9), is useful for showing
that the order of differentiation and integration  can be interchanged.


Lemma 3.6

If a(z, 13) is continuously  differentiable on an open set ./lr of 8,, a.s. dz, and
Jsu~,,~ 11V,a(z, 19)1)dz < co, then ia(z, f3)dz is continuously  differentiable and
V,ja(z, B)dz = j[V,a(z, fI)]dz for f3~Jlr.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                     2153


Proof
Continuity     of l [V&z, 0)] dz on X follows by continuity       of V&z, ~9)in 0 and the
dominated convergence theorem. Also, for all e”close enough to 8, the line jo@ing 8
and 0 will lie in Jlr, so a mean-value expansion gives a(z, g) = a(z, 0) + V&z, @‘(fJ- 0) +
r(z, g),, where, for the mean value f?(z), I(Z, $) = {V&z, g(z)] - V&z, 0)}‘(8- 0). AS
&+ 0, )(r(z,@ 1)/j e”- 8 1)< (1V&z, g(z)] - V&z, (3)II+0 by continuity         of V&z, 0).
Also, i@, 0) i / ii 8 - 6 iI G 2 sUPeE~ /IV&z, 0) ii , so by the dominated    convergence
theorem, jlr(z, @(dz/~~8-0(~-+0. Therefore,lja(z, 8)dz-Sa(z, @dz- {j[Ve4z,        e)]dz}’ x
(~-e)(=IS~(Z,B)dzldSIr(z,8)Idz=0(1le-eli).                                           Q.E.D.

The needed result that f f(zI0)dz is twice differentiable and that f (zlf3) can be
differentiated under the integral then follows by Lemma 3.6 and conditions (ii) and
(iii) of Theorem 3.3.



4.   Consistent asymptotic variance estimation

A consistent estimator of the asymptotic variance is important      for construction    of
asymptotic confidence intervals, as discussed in the introduction.   The basic idea for
constructing   variance estimators is to substitute, or “plug-in”, estimators      of the
various components in the formulae for the asymptotic variance. For both extremum
and minimum distance estimators, derivatives of sample functions can be used to
estimate the Hessian or Jacobian       terms in the asymptotic     variance, when the
derivatives exist. Even when derivatives do not exist, numerical approximations       can
be used to estimate Hessian or Jacobian terms, as discussed in Section 7. The more
difficult term is the one that results from asymptotic        normality   of ,,&V,f&(e,)    or
&n&(0,). The form of this term depends on the nature of the estimator and whether
there is dependence in the data. In this chapter, estimation        of this more difficult
term will only be discussed under i.i.d. data, with Wooldridge’s           chapter in this
volume giving results for dependent observations.
   To better describe variance estimation it is helpful to consider separately extremum
and minimum distance estimators. The asymptotic variance of an extremum estima-
tor is H- 'ZH- ',where H is the probability            limit of Vee&(BO) and Z is the
asymptotic variance of ^A$&7,&e,).    Thus, an estimator of the asymptotic variance
can be formed as fi- 'ZH- ',where fi is an estimator of H and 2 is an estimator
of Z. An estimator of H can be constructed    in a general way, by substituting          8 for
8, in the Hessian of the objective function, i.e. l? = V,,&(8). It is more difficult to
find a general estimator of .Z, because it depends on the nature of the extremum
estimator and the properties of the data.
   In some cases, including MLE and NLS, an estimator of Z can be formed in a
straightforward   way from sample second moments. For example, for MLE the
central limit theorem implies that ;I: = E[V, In f (z I/3,-J{V, In f (z IO,,)}‘], so that an
2154                                                                       W.K. Newey and D. McFadden


estimator can be formed by substituting         moments for expectations     and estimators
for true parameter, i.e. 2 = II- ‘x1= 1Ve In f(zil 8) {V, In f(zii g)}!. More generally, an
analogous estimator can be constructed whenever the objective function is a sample
average, Q,@) = n ‘Cr= 1q(z,,fl),    e.g.where q(z,0) = - [y - h(x, O)]' for NLS. In this
case $V,Q,(tI,)    = n - ‘I2 C;= r Veq(zi, N,), so the central limit theorem will imply that
Z = E[V,q(z, BO){V,q(z, 8,)}‘].32 This second-moment              matrix can be estimated
as


       2 = n-l .f v,q(z,,8){v,q(z,,~)}',             Q,(d)=    Iv1   i     q(z,fl).                (4.1)
                 i=l                                                 i=l



    In cases where the asymptotic variance simplifies it will be possible to simplify
 the variance estimator in a corresponding         way. For example the MLE asymptotic
 variance is the inverse of the information        matrix, which can be estimated by J^- ‘,
for an estimator J^ of the information      matrix. Of course, this also means that there
are several ways to construct a variance estimator. For the MLE, jcan be estimated
from the Hessian, the sample second moment of the score, or even the general
formula &‘,??I?‘.         Asymptotic    distribution     theory is silent about the choice
between these estimators, when the models are correctly specified (i.e. the assumptions
 that lead to simplification   are true), because any consistent estimator will lead to
asymptotically   correct confidence intervals. Thus, the choice between them has to
be based on other considerations,         such as computational         ease or more refined
asymptotic accuracy and length of the confidence intervals. These considerations
are inherently specific to the estimator, although many results seem to suggest it is
better to avoid estimating       higher-order     moments in the formation           of variance
estimators. If the model is not correctly specified, then the simplifications           may not
be valid, so that one should use the general form fi- ‘Tfi?- ‘, as pointed out by
Huber (1967) and White (1982a). This case is particularly               interesting    when 8 is
consistent even though the model is misspecified, as for some MLE estimators with
exponential family likelihoods; see Gourieroux           et al. (1984).
    For minimum distance estimation it is straightforward            to estimate the Jacobian
term G in the asymptotic variance (G’WG))‘G’W~RG(G’WG)-‘,                         as G = V&,(u^).
Also, by assumption       W will be a consistent estimator of W. A general method of
forming B is more difficult because the form of fl depends on the nature of the
estimator.
    For GMM an estimator of R can be formed from sample second moments. By
the central limit theorem, the asymptotic variance of Jng,(fl,,) = n- ‘I2 C;= 1g(zi, 0,)
is R = E[g(z, e,)g(z, O,)‘]. Thus, an estimator can be formed by substituting  sample



   32The derivative V,q(z,O,,) can often be shown to have mean zero, as needed for the central limit
theorem, by a direct argument. Alternatively, a zero mean will follow from the first-order condition for
maximization   of Q,,(O) = E[q(z,O)]at 0,.
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                        2155


moments    for the expectation     and an estimator        of 8 for the true value, as



                i=l



As discussed in Section 3, extremum estimators can be considered as special cases
of minimum distance estimators for analyzing asymptotic normality.         More speci-
fically, an extremum estimator with o,(O) = n- ’ x1= ,q(z,, 0) will be a GMM estima-
tor with g(z, 0) = V,q(z, 0). Consequently, the estimator    in eq. (4.1) is actually a
special case of the one in eq. (4.2).
   For minimum distance estimators, where Q,(d) = r? - h(O), the asymptotic variance
R of $g,(O,)       is just the asymptotic variance of R. Thus, to form h one simply uses
a consistent estimator of the asymptotic variance of 72.If r? is itself an extremum or
GMM estimator, its asymptotic             variance can be estimated in the way described
above.
    When the asymptotic          variance matrix simplifies there will be a corresponding
simplification     for an estimator.      In particular,   if W = 0-l    then the asymptotic
variance is (G’O-‘G)-‘,          so that a corresponding     estimator is (c’& ‘6)-l. Alter-
natively, if I? is a consistent estimator of a- ‘, a variance estimator is (@ii/&              ‘.
In addition, it may also be possible to estimate L2 in alternative ways. For example,
for linear instrumental       variables where g(z, 0) = x(y - Y’@, the estimator in eq. (4.2)
is II- ‘XI= r x,xi(y, - Y$)‘, which is consistent even if si = yi - YIfI, is heteroskedastic.
An alternative estimator that would be consistent under homoskedasticity                 (i.e. if
E[s2 Ix] is constant) is c?‘C~, 1xixi/n for 82 = n- ’ Cr= 1(yi - Y$)2.
    For minimum          distance estimators,     the choice between different consistent
variance estimators can be based on considerations                such as those discussed for
extremum estimators, when the model is correctly specified. When the model is
not correctly specified and there are more elements in d,(O) than 8, the formula
(G’ WC)- ‘G’ WR WG(G’ WC) ’ is no longer the correct asymptotic variance matrix,
the reason being that other terms enter the asymptotic variance because S,,(J) need
not converge to zero. It is possible to show that 6 is asymptotically           normal when
centered at its limit, by treating it as an extremum estimator, but the formula is very
complicated [e.g. see Maasoumi and Phillips (1982)]. This formula is not used often
in econometrics,       because it is so complicated      and because, in most models where
d,,(O) has more elements than 0, the estimator will not be consistent              under mis-
specification.



4.1.   The basic results

It is easy to state a consistency result for asymptotic variance          estimation     if ,E or r3
is assumed to be consistent. A result for extremum estimators              is:
2156                                                                        W.K. Newey and D. McFadden


Theorem    4.1

If the hypotheses           of Theorem     3.1 are satisfied,      fi = V,,&,(6),    and 2 AZ,        then
fi-‘f&l       !J+H-l~H-l.




Proof

By asymptotic      normality,     o^3     to. By c_ondition(iv)     of Theorem      3.1, with probability
approaching   one, IF-W     5 IlH-WtWI + lW(~)-ffll  ~suP~~.,~IIV~~Q~(~)-H(~)II +
(1H(8) - HI/ LO, SO that H g H. The conclusion then follows by condition (v)
of Theorem 3.1 and continuity of matrix inversion and multiplication.     Q.E.D.

A corresponding        result for minimum         distance     estimators   is:

Theorem     4.2

If the hypotheses      of Theorem           3.2 are satisfied,      6 = V&,(8), and       fi -% 0,    then
(~‘~~)-‘~‘~ii~~(~‘~‘6)-’                   %(G’WG)-‘G’Wf2WG(G’WG)-?


Proof

It follows similarly        to the proof of Theorem          4.1 that condition     (iv) of Theorem     3.2
implies 6 5 G, while %A                  W and fi % 0 hold by hypothesis.               The conclusion
then follows from condition             (v) of Theorem       3.2 and continuity     of matrix inversion
and multiplication.                                                                              Q.E.D.

As discussed above, the asymptotic       variance for MLE, NLS, and GMM can be
estimated using sample second moments, with true parameters replaced by estima-
tors. This type of estimator will be consistent by the law of large numbers, as long
as the use of estimators in place of true parameters does not affect the limit. The
following result is useful in this respect.

Lemma 4.3

If zi is i.i.d., a(z, 0) is continuous       at 8, with probability   one, and there is a neigh-
borhood       Jf _of fI,, such that         E[sup,,,-  /Ia(~, @II] < cu, then for any e%B,,
n - 1Z;= 1a(z, 0) 3 E[a(z, tl,)].

Proof

By consistency oft? there is 6, + 0 such that II8 - 8, I( < 6, with probability approach-
ing one. Let A,(z) = su~~~~-~~,,d 6,,11   a(z, tl) - a(z, 0,) II. By continuity of a(z, 0) at et,,
d,(z) + 0 with probability one,.while by the dominance condition, for n large enough
d,,(z) d 2 SUPes.A~I(a(z, 0) I(. Then by the dominated convergence theorem, E[d,(z)]-+
0, so by the Markov inequality,          P( I n- ’ Cr= 1A,(zi)/ > E) d E[A.(z)]/c   -+ 0 for all
E>O, giving n-‘Cy= IA,,           3 0. By Khintchine’s law of large numbers, n- ‘XI= 1u x
Ch. 36: Large Sample Estimation and Hypothesis              Testing                                         2157


(zi, fI,) %    E[a(z,      O,,)].   Also, with pro_bability       approaching     one, (1n-‘Cr=      lu(Zi, 8) -
np’Cr=        la(Zi,8,)li<n-'C~=,            ~lU(zi,8)-a(Zi,8,)1~,<n-'~~=,A,(z,)%             0,so     thecon-
elusion    follows by the triangle            inequality.                                                Q.E.D.

The conditions    of this result are even weaker than those of Lemma 2.4, because
the conclusion is simply uniform convergence at the true parameter. In particular,
the function is only required to be continuous   at the true parameter. This weak type
of condition is not very important     for the cases considered so far, e.g. for GMM
where the moment functions have been assumed to be differentiable,         but it is very
useful for the results of Section 7, where some discontinuity        of the moments is
allowed. For example, for the censored LAD estimator the asymptotic            variance
depends on indicator functions for positivity of x’% and Lemma 4.3 can be used to
show consistency of asymptotic variance estimators that depend on such indicator
functions.


4.2.      Variance      estimation      for MLE

The asymptotic variance of the maximum likelihood estimator is J- ‘, the inverse
of the Fisher information    matrix. It can be consistently estimated from J^- ‘, where
J^ is a consistent estimator of the information      matrix. There are several ways to
estimate the information     matrix. To describe these ways, let s(z, 9) = V, lnf(zI 9)
denote the score. Then by the information      matrix equality, J = E[s(z, %&(z, %,)‘I =
 - E[V,s(z, %,)I = J(%,), where J(9) = - j [V&z, %)]f(zI %)dz. That is, J is the expec-
tation of the outer product of the score and the expectation of the negative of the
derivative of the score, i.e. of the Hessian of the log-likelihood.  This form suggests
that J might be estimated by the method of moments, replacing expectations            by
sample averages and unknown          parameter   values by estimates. This yields two
estimators,


       j1 = n - ’ t          s(zi, @s(z,,B)‘/n,       j2 = -n-l        t    V,,lnf(zJ%).
                     i=l                                              i=l



The second estimator is just the negative of the Hessian, and so will be consistent
under the conditions of Theorem 3.3. Lemma 4.3 can be used to formulate conditions
for consistency of the first estimator.
   A third estimator could be obtained by substituting         6 in the integrated function
J(9). This estimator is often not feasible in econometrics,       because f(z 1%)is a condi-
tional likelihood, e.g. conditioned      on regressors, and so the integration           in J(9)
involves the unknown marginal distribution. An alternative estimator that is feasible
is the sample average of the conditional          information     matrix. To describe this
estimator, suppose that z = (y, x) and that f(z 1%)= f(y Ix, 9) is the conditional density
of y given x. Let J(x, II) = E[s(z, %)s(z,%)‘Ix, O] = is(z, U)s(z, U)‘f’(y Ix, 0)dy be the con-
2158                                                              W.K. Newey and D. McFadden



ditional information   matrix, so that J = E[J(x, e,)] by the law of iterated       expecta-
tions. The third estimator of the information    matrix is then


        & = f: J(x,, 8)/n.                                                               (4.4)
            i=l



Lemma 4.3 can be used to develop conditions for consistency of this estimator. In
particular, it will often be the case that a(~, 8) = J(x, 0) is continuous   in 8, because
the integration  in J(x, 0) tends to smooth out any discontinuities.      Consistency   will
then follow from a dominance condition for J(x, d).
   The following result gives conditions for consistency ofall three of these estimators:

Theorem      4.4

Suppose that the hypotheses of Theorem 3.3 are satisfied. Then 51; ’ A Jp ‘. Also,
if there is a neighborhood       N of B0 such that E[su~,,_~ 11
                                                              s(z, 0) 11’1-=zco then 51; ’ 3
J- I. Also, if J(x, 0) is continuous at B0 with probability one and E[su~,,,+~ /)J(x, Q)/)] <
c;o then.?;‘AJ-‘.

Proof

It follows as in the proof of Theorem 4.1 that 512 ’ A J- ‘. Also, by s(z, 0) continuously
differentiable   in a neighborhood   of 0,, u(z, e) = s(z, 8)s(z, 0)’ so consistency of I; ’
follows from Lemma 4.3. Also, consistency          of IT1 follows by Lemma 4.3 with
a(z, 0) = J(x, 0).                                                                   Q.E.D.

The regularity conditions for consistency of each of these estimators are quite weak,
and so typically they all will be consistent when the likelihood is twice differentiable.
Since only consistency is required for asymptotically          correct confidence intervals
for 0, the asymptotic theory for @provides no guide as to which of these one should
use. However, there are some known properties of these estimators that are useful
in deciding which to use. First, 5, is easier to compute than j2, which is easier to
compute than j3. Because it is easiest to compute, jr has seen much use in maximum
likelihood estimation and inference, as in Berndt et al. (1974). In at least some cases
they seem to rank the opposite way in terms of how closely the asymptotic theory
approximates      the true confidence     interval distribution;    e.g. see Davidson      and
MacKinnon      (1984). Since the estimators are ranked differently according to different
criteria, none of them seems always preferred to the others.
   One property shared by all inverse information          matrix estimators for the MLE
variance is that they may not be consistent if the distribution            is misspecified, as
pointed out by Huber (1967) and White (1982a). If .f(zle,) is not the true p.d.f. then
the information     matrix equality will generally not hold. An alternative         estimator
that will be consistent     is the general extremum        estimator    fdrmula J^;‘J^,j;‘.
Sufficient regularity conditions for its consistency are that 8% 8,, In f(z18) satisfy
Ch. 36:   Large    Sample      Estimation   and Hypothesis   Testing                                           2159



parts (ii) and (iv) of Theorem 3.3, E[sup Ot,,, /IV, In f(z (0) (I*] be finite for a neighbor-
hood .,+’ of 8,, and EIVOe In f(zl Q,)] be nonsingular.

Example       I .l continued

It would be straightforward    to give the formulae j1 and j2 using the derivatives
derived earlier. In this example, there are no conditioning       variables x, so that 5^; ’
would simply be the information      formula evaluated at 8. Alternatively,        since it is
known that the information    matrix is diagonal, one could replace J^; ’ and ji ’ with
same matrices, except that before the inversion the off-diagonal           elements are set
equal to zero. For example, the matrix corresponding            to jil    would produce a
variance estimator for j2 of ncP/C~, I/‘ce(.$), for & = 8- ‘(zi - fi). Consistency of all of
these estimators will follow by Theorem 4.4

Sometimes some extra conditions                         are needed     for consistency          of j; ’ or 1; ‘, as
illustrated by the probit example.

Example       1.2 continued


For probit, the three information                     matrix estimators     discussed     above are, for L(E)=
&Y@(s),




      5^2 =   j3    +    n-l      i    xix:[d{~(-       ~)-l~(U)}/d~]lo_x,~[yi    -   @(x$)],
                                 i=l



      _T1 =   n- ’ 2           xixi@( - xi&         *L(xj@*{ yi - @(x$)}~.
                        i=l



Bothj;‘%J-‘andj;’                           LJ-1       will follow from consistency       of 6, E[ IIx I/‘1 finite,
and J nonsingular.    However, consistency of 5^; ’ seems to require that E[ 11      x II”] is
finite, because the score satisfies IIV, lnf(zlQ)l12 < I@(x’O)-‘@( - ~‘0)) ‘~(x’8)(4/~~~~~d
4CC,(l + IIx II II4 )I2 IIx II2d C(1+ IIx II”).

The variance of nonlinear least squares has some special features that can be used
to simplify its calculation. By the conditional mean assumption that E [y Ix] = h(x, fl,),
the Hessian term in the asymptotic variance is

      H = 2{ECh(x,Wdx> &,)‘I- W,,(x, 4,) CY - hk 6,) } I}
          = 2ECk9b,4$,(x, &)‘I,
where h, denotes               the gradient,        h,, the Hessian    of h(x, O), and the second         equality
2160                                                              W.K. Newry and D. McFadden


follows by the law of iterated expectations.           Therefore, H can be estimated by
s = 2n- ‘C:= ,h,(xi, @h&xi, @, which is convenient because it only depends on first
derivatives, rather than first and second derivatives. Under homoskedasticity               the
matrix Z also simplifies, to 4f~~E[h,(x, 8,)h,(x, e,)‘] for cr2 F E[ { y - h(x, U,)}2],
which can be estimated by 2e2H for e2 = nP ‘Cy= i { y - h(xi, d)}“. Combining              this
estimator of Z with the one for H gives an asymptotic               variance estimator of the
form ? = fi“TfiP1           = 262fim ‘. Consistency     of this estimator can be shown by
applying the conditions of Lemma 4.3 to both u(z, 6) = {y - h(x, 19))’ and a(z, 8) =
h,(x, @h&x, e)‘, which is left as an exercise.
    If there is heteroskedasticity     then the variance of y does not factor out of Z, so
that one must use the estimator z= 4n-‘Cr,            ,h,(xi, @h&xi, @‘{ yi - h(xi, 8)}2. Also,
if the conditional expectation is misspecified, then second derivatives of the regression
function do not disappea_r from the Hessian (except in the linear case), so that one
must use the estimator H = 2n- ‘x1= 1 [h&x,, @h&xi, i$ + h&xi, @{ yi - h(xi, @}I.
A variance estimator for NLS that is consistent in spite of heteroskedasticity               or
misspecification     is fi-‘&-‘,      as discussed in White (1982b). One could formulate
consistency conditions        for this estimator by applying Lemma 4.3. The details are
left as an exercise.


4.3.    Asymptotic   vuriance estimation,for    GMM

The asymptotic variance of a GMM estimator is (G’WG))‘G’~~l&‘G(G’~G)-‘,
which can be estimated by substituting       estimators for each of G, W and 0. As
p_reviously discussed,_estima_tors of G and Ware readily available, and are given by
G = n- ‘x1= 1VOy(zi, e) and W, where k@is the original weighting matrix. To estimate
R = E[g(z, H&z, 0,)‘], one can replace the population moment by a sample average
and the true parameter by an estimator, to form fi = n- ’ Cy= r g(zi, @)g(z,, I!?)‘,as in
eq. (4.2). The estimator of the asymptotic variance is then given by e = (G’I%‘G)-’ x
G,I@r2 I?G@l?G,_-       l.
   Consistencyof     Sz will follow from Lemma 4.3 with a(z, 8) = g(z, B)g(z, 0)‘, so that
consistency of F’will hold under the conditions of Theorem 4.2, as applied to GMM.
A result that summarizes these conditions is the following one:

Theorem    4.5

If the hypotheses of Theorem 3.4 are satisfied, g(z,@ is continuous        at B0 with
probability_ one,a_nd_for ^a neighborhood
                             ?. . ^       JV of 8,, E[su~~,~ I/g(z, 0) 11
                                                                        2]  < co, then
V=(&$‘G)-‘G’WRWG(G’WG)-                 ’ -(’   G’WG)-‘G’WRWG(G’WG)-‘.

Proof

By Lemma 4.3 applied to a(z, 0) = g(z, H)g(z, 6)‘, fiL a. Also, the proof of Theorem
3.4 shows that the hypotheses of Theorem 3.2 are satisfied, so the conclusion follows
by Theorem 4.2.                                                                Q.E.D.
Ch. 36: Large Sample Estimation   and Hypothesis   Testing                                         2161


If @‘is a consistent    estimator     of a-‘,  i.e. the probability    limit W of @is equal to
n-l,   then a simpler estimator of the asymptotic            variance can be formed as p =
(@k&l.       Alternatively,     one could form &as in eq. (4.2) and use v = ((?fi-‘&                 ‘.
Little seems to be known about the relative merits of these two procedures in small
samples, i.e. which (if either) of the initial I%’or the final d-l gives more accurate
or shorter confidence intervals.
    The asymptotic variance estimator c is very general, in that it does not require
that the second moment matrix a= E[g(z,B,)g(z,8,)‘]                   be restricted in any way.
Consequently, consistency of ? does not require substantive distributional              restrictions
other than E[g(z, Q,)] = 0.33 For example, in the context of least squares estimation,
where y(z, 0) = x( y - x’d), l?f = I, and (? = - C;= 1x,xi/n, this GMM variance esti-
mator is P = k’[n-‘C~=            lxixi(yi - x$)‘]&‘,     the Eicker (1967) and White (1980)
heteroskedasticity    consistent variance estimator. Furthermore,            the GMM variance
estimator includes many heteroskedasticity-robust              IV variance estimators, as dis-
cussed in Hansen (1982).
    When there is more information about the model than just the moment restrictions,
it may improve the asymptotic confidence interval approximation                  to try to use this
information    in estimation of the asymptotic variance. An example is least squares,
where the usual estimator under homoskedasticity                 is n(Cr, 1xix:)- ‘C( yi - x@‘/
(n - K), where K is the dimension of x. It is well known that under homoskedasticity
this estimator gives more accurate confidence intervals than the heteroskedasticity
consistent one, e.g. leading to exact confidence intervals from the t-distribution
under normality.

Example    1.3 continued

The nonlinear two-stage least squares estimator for the Hansen-Singleton           example
is a GMM estimator with g(z, 0) = x{bwyY - 1) and @= x1= 1x,xi/n, so that an
asymptotic variance estimator can be formed by applying the general GMM formula to
this case. Here an estimator of the variance of the moment functions can be formed
as described above, with 8= n-‘~~=,x,x,{&viyf          - l}‘. The Jacobian estimator is
G^= n- ‘Cr= 1xi(wi yly^,Bwi In ( yi)yr). The corresponding    asymptotic    variance esti-
mator then comes from the general GMM formula (~f~~)-‘~~~~~~(~f~~)~                        ‘.
   Consistency of this estimator will follow under the conditions of Theorem 4.5. It
was previously shown that all of these conditions are satisfied except the additional
moment assumption      stated in Theorem 4.5. For this assumption,     it suffices that the
upper and lower limits on y, namely yr and y,, satisfy E[~~x~/*~w~~(I~~*~’ + Iyl*‘“)] < co.
This condition requires that slightly more moments exist than the previous condi-
tions that were imposed.



   331f this restriction is not satisfied, then a GMM estimator may still be asymptotically normal, but
the asymptotic variance is much more complicated; see Maasoumi and Phillips (1982) for the instrumental
variables case.
2162                                                                             W.K. Newey and D. McFudden


5.     Asymptotic     efficiency

Asymptotically   normal estimators can be compared on the basis of their asymptotic
variances, with one being asymptotically  efficient relative to another if it has at least
as small an asymptotic variance for all possible true parameter values. Asymptotic
efficiency is desirable because an efficient estimator      will be closer to the true
parameter value in large samples; if o^is asymptotically     efficient relative to 8 then
for all constants K, Prob() e- O,I d K/&)       > Prob( (8- 8,I < K/J%) for all n large
enough. Efficiency is important in practice, because it results in smaller asymptotic
confidence intervals, as discussed in the introduction.
    This section discusses general results on asymptotic efficiency within a class of
estimators, and application   of these results to important estimation environments,
 both old and new. In focusing on efficiency within a class of estimators, we follow
much of the econometrics and statistics literature. 34 Also, this efficiency framework
allows one to derive results on efficiency within classes of “limited information”
estimators (such as single equation estimators in a simultaneous        system), which are
of interest because they are relatively insensitive to misspecification       and easier to
compute. An alternative approach to efficiency analysis, that also allows for limited
information estimators, is through semiparametric       efficiency bounds, e.g. see Newey
(1990). The approach taken here, focusing on classes of estimators, is simpler and
more directly linked to the rest of this chapter.
    Two of the most important and famous efficiency results are efficiency of maximum
likelihood and the form of an optimal weighting matrix for minimum                distance
estimation. Other useful results are efficiency of heteroskedasticity-corrected     genera-
lized least squares in the class of weighted least squares estimators and two-stage
least squares as an efficient instrumental     variables estimator. All of these results
share a common structure that is useful in understanding          them and deriving new
ones. To motivate this structure, and focus attention on the most important results,
we first consider separately maximum likelihood and minimum distance estimation.


5.1.    Eficiency     of maximum        likelihood estimation

Efficiency of maximum likelihood is a central proposition of statistics that dates from
the work of R.A. Fisher (1921). Although maximum likelihood is not efficient in the
class of all asymptotically   normal estimators, because of “superefficient” estimators,
it is efficient in quite general classes of estimators.35 One such general class is the

   341n particular, one of the precise results on efficiency of MLE is the HajekkLeCam              representation
theory, which shows efficiency in a class of reyular estimators. See, e.g. Newey (1990) for a discussion of
regularity.
   35The word “superefficient”     refers to a certain type ofestimator,     attributed to Hodges, that is used to
show tha?there does not exist an efficient estimator in the class of all asymptotically        normal estimators.
Suppose 0 is asymptotically     normal, and for some numb_er t( and 0 ^( p < i, suppose that 0 ha_s positive
asympiotic    variance when the trueparameter         is rx. Let B = e if nalU - al > 1 and 0 = a if nPIO - a( < 1.
Then 6’ is superefficient relative to 8, having the same asymptotic variance when the true parameter               is
not cxbut having a smaller asymptotic variance, of zero, when the true parameter is X.
Ch. 36: Large Sample Estimation and Hypothesis       Testing                                              2163


class of GMM estimators, which includes method of moments, least squares, instru-
mental variables, and other estimators. Because this class includes so many esti-
mators of interest, efficiency in this class is a useful way of thinking about MLE
efficiency.
   Asymptotic efficiency of MLE among GMM estimators is shown by comparing
asymptotic      variances. The asymptotic      variance of the MLE is (E[ss’])-‘,           where
s = V, In f(zl0,) is the score, with the z and 8 arguments suppressed for notational
convenience.      The asymptotic     variance of a GMM estimator can be written as
m-%l)r ‘Jm~‘l(~b;l)-              l where m, = (E[Veg(z, (3,)])‘WV0g(z, 0,) and m =
(E[V,g(z,8,)])‘Wg(z,       0,). At this point the relationship      between the GMM and
MLE variances is not clear. It turns out that a relationship             can be derived from
an interpretation      of E[me] as the covariance of m with the score. To obtain this
interpretation,     consider the GMM moment condition              jg(z, 19)f(z ItI) dz = 0. This
condition     is typically an identity over the parameter        space that is necessary for
consistency of a GMM estimator. If it did not hold at a parameter value, then the
GMM estimator may not converge to the parameter at that point, and hence would
not be consistent.36 Differentiating      this identity, assuming differentiation       under the
integral is allowed, gives



               s
      0 = Vo s(z,W(zl@dzle=e,

         =      Cvodz,@lf(z I@dz + & ‘3CV,f(z I@I’ dz
                                  s                   B=B”
         = ECVddz,
                4Jl + %dz, &JVoInf(z IWI,                                                                (5.1)

where the last equality follows by multiplying     and dividing V, f(z IO,) by f(z IO,).
This is the generalized information matrix equality, including the information  matrix
equality as a special case, where g(z, 0) = V,ln f(~l8).~’ It implies that E[m,] +
E[ms’] = 0, i.e. that E[ms] = - E[ms’]. Then the difference of the GMM and MLE
asymptotic variances can be written as

      (E[mJ-‘E[mm’](E[m~])-’                 -(E[ss’])~’

          = (E[ms’])-‘E[mm’](E[sm’])p’               - (E[ss’])-’

          = (E[ms’])-‘{E[mm’]           - E[ms’](E[ss’])-‘E[sm’]}(E[sm’])-’

          = (E[ms’])-‘E[UU’](E[sm’])-‘,                    U = m - E[ms’] (E[ss’])-         1 s.         (5.2)


   3hRecall that consistency means that the estimator converges in probability        to the true parameter for
all oossible true oarameter values.
   ‘;A similar eq’uality, used to derive the Cramer-Rao   bound for the variance of unbiased estimators,
is obtained by differentiating  the identity 0 = JOdF,, where F’,, is the distribution    of the data when 0 is
the true parameter value.
2164                                                                          W.K. Newey and D. McFadden


Since E[UU’] is positive semi-definite,      the difference of the respective variance
matrices is also positive semi-definite, and hence the MLE is asymptotically    efficient
in the class of GMM estimators.
   To give a precise result it is necessary to specify regularity conditions     for the
generalized information    matrix equality of eq. (5.1). Conditions can be formulated
by imposing smoothness on the square root of the likelihood, f(zl@“‘,         similar to
the regularity conditions for MLE efficiency of LeCam (1956) and Hajek (1970). A
precise result on efficiency of MLE in the class of GMM estimators can then be
stated as:


Theorem 5.1

 If the conditions of Theorem 3.4 are satisfied,f(zl 0)1’2 is continuously differentiable at
 O,, J is nonsingular,   and for all 8 in a neighborhood   JY of BO,JsuP~~,~ 11g(z, g) /I2 x
f(z I 0) dz and s ~upij~.~~ I/V&z Ir$1’2 11
                                          2 dz are bounded and Jg(z, @f(z 10)dz = 0, then
 (G’WG)- ‘G’WRWG(G’WG)            - JP1 is positive semi-definite.


The proof is postponed    until Section 5.6. This result states that J-’ is a lower
bound on the asymptotic variance of a GMM estimator. Asymptotic efficiency of
MLE among GMM estimators then follows from Theorem 3.4, because the MLE
will have J ’ for its asymptotic variance.38



5.2.    Optimal minimum distance estimation

The asymptotic variance of a minimum distance estimator depends on the limit W
of the weighting matrix I@.When W = a-‘, the asymptotic variance of a minimum
distance estimator is (G’R-‘G)-‘.    It turns out that this estimator is efficient in
the class of minimum distance estimators. To show this result, let Z be any random
vector such that a= E[ZZ’],       and let m = G’WZ and fi = G’K’Z.         Then by
G’ WC = E[mfi’]        and G’R- ‘G = E[riifi’],

       (G’WG)~‘G’WL!WG(G’WG)~l-(G’~nlG)-’
          = (G’WG)PIEIUU’](G’WG)-‘,                     U = m - E[mfi’](E[tirii’])-‘6.                    (5.3)

Since E[UU’] is positive semi-definite, the difference of the asymptotic                        variances     is
positive semi-definite. This proves the following result:


   38 It is possible to show this result under the weaker condition that f(zlO)“’ is mean-square     differenti-
able, which allows for f(zlO) to not be continuously    differentiable. This condition is further discussed in
Section 5.5.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                      2165


Theorem 5.2
If f2 is nonsingular,     a minimum     distance estimator with W = plim(@‘) = R-r            is
asymptotically    efficient in the class of minimum distance estimators.

This type of result is familiar from efficiency theory for CMD and GMM estimation.
For example, in minimum chi-square estimation, where b(Q) = 72- $0) the efficient
weighting matrix W is the inverse of the asymptotic variance of fi, a result given by
Chiang (1956) and Ferguson (1958). For GMM, where Q(H)= x1=, g(Zi, d)/n, the
efficient weighting matrix is the inverse of the variance of g(zi, fI,), a result derived
by Hansen (1982). Each of these results is a special case of Theorem 5.2.
   Construction     of an efficient minimum distance estimator is quite simple, because
the weighting matrix affects the asymptotic distrib_ution only t_hrough its probability
limit. All that is required is a consistent estimator R, for then W = fX ’ will converge
in probability    to rZP ‘. Since an estimator of R is needed for asymptotic variance
estimation,    very little additional    effort is required to form an efficient weighting
matrix. An efficient minimum           distance estimator    can then be constructed          by
minimizing d(O)‘& ‘g(O). Alternatively, the one-step estimator r?= &(@a-               ‘c)) ’ x
eh- ‘g(6) will also be efficient, because it is asymptotically        equivalent to the fully
iterated minimum distance estimator.
   The condition      that W = fl- ’ is sufficient but not necessary for efficiency. A
necessary and sufficient condition can be obtained by further examination                 of eq.
(5.3). A minimum distance estimator will be efficient if and only if the random vector
U is zero. This vector is the residual from a population         regression of m on I+&and
so will be zero if and only if m is a linear combination       of fi, i.e. there is a constant
matrix C such that G’WZ = CG’R-‘2.               Since 2 has nonsingular      variance matrix,
this condition is the same as


       G’W = CG’O-‘.                                                                       (5.4)

This is the necessary    and sufficient   condition      for efficiency of a minimum   distance
estimator.



5.3.    A general eficiency framework

The maximum likelihood and minimum distance efficiency results have a similar
structure, as can be seen by comparing eqs. (5.2) and (5.3). This structure can be
exploited to construct an eficiency framework that includes these and other impor-
tant results, and is useful for finding efficient estimators. To describe this framework
one needs notation for the asymptotic variance associated with an estimator. To
this end, let r denote an “index” for the asymptotic variance of an estimator in some
2166                                                             W.K. Newey and D. McFadden


class, where r is an element of some abstract set. A completely general form for z
would be the sequence of functions of the data that is the sequence of estimators.
However, since r is only needed to index the asymptotic variance, a simpler specifi-
cation will often suffice. For example, in the class of minimum distance estimators
with given g,(O), the asymptotic variance depends only on W = plim(I@, so that it
suffices to specify that z = W.
   The framework considered here is one where there is a random vector Z such
that for each r (corresponding    to an estimator), there is D(z) and m(Z, z) with the
asymptotic variance V(r) satisfying

        V(7) = D(z)_ l E[m(Z, T)rn(Z, T)‘]D(T)- l’.                                      (5.5)

Note that the random vector Z is held fixed as t varies. The function m(Z, z) can
often be interpreted as a score or moment function, and the matrix D(z) as a Jacobian
matrix for the parameters.     For example, the asymptotic     variances of the class of
GMM estimators satisfy this formula, with z being [g(z, 8&G, W], Z = z being a
single observation,   m(Z, r) = G’Wg(z, tl,), and D(r) = G’WG. Another example is
minimum distance estimators, where Z is any random vector with mean zero and
variance 0, z = W, m(Z, z) = G’WZ, and D(T) = G’ WC.
   In this framework, there is an interesting and useful characterization of an efficient
estimator.

Theorem 5.3

If Z satisfies D(z) = E[m(Z, z)m(Z, ?)‘I for all z then any estimator with variance L’(f)
is efficient. Furthermore,  suppose that for any ri, r2, and constant square matrices
C,, C, such that C,D(z,) + C&r,)         is nonsingular,   there is z3 with (i) (linearity of
the moment function set) m(Z,r,) = C,m(Z,z,)             + C,m(Z,z,);  (ii) (linearity of D)
D(r,) = C,D(t,) + C,D(z,). If there is an efficient estimator with E[m(Z, z)m(Z, z)‘]
nonsingular     then there is an efficient estimator      with index F such that D(z) =
E[m(Z, z)m(Z, f)‘] for all z.

Proof

If r and S satisfy D(z) = E[m(Z,r)m(Z,?)‘]    then the difference          of the respective
asymptotic variances satisfies, for m = m(Z, z) and 6 = m(Z, ?),

        V(7) -   V(f) =   (E[m~‘])~‘E[mm’](E[fim’])~’    - (E[tid])~   l

                     = (E[mti’])-‘E[UU’](E[tim’])p      ‘,

                   CJ= m-E[mrii’](E[@iti’])-‘ti,                                         (5.6)

so the first conclusion follows by E[UU’] positive semi-definite. To show the second
conclusion,    let ll/(Z, t) = D(T)- ‘m(Z, T), so that V(7) = E[$(Z, z)$(Z, s)‘]. Consider
Ch. 36: Large Sample Estimation    and Hypothesis     Testing                                       2167


any constant matrix B, and for 7r and T* let C, = BD(7,))’ and C, = (I - B)D(T~)-’
note that C,D(z,) + C,D(z,) = I is nonsingular,  so by (i) and (ii) there is 73 such that
Bl+b(Z,7,)+(Z-B)II/(Z,7,)            =    c,m(z,7,)+C,m(Z,7,)=m(Z,7,)              =   I-‘m(Z,z,)     =
[C,D(t,) + C,D(t,)]-      ‘m(Z, z3) = D(z,)- 'm(Z, 7j) = I/I(Z, 73). Thus, the set ($(Z, 7)}
is affine, in the sense that B$(Z, tl) + (I - B)$(Z, z2) is in this set for any 71, z2 and
constant matrix B. Let $(Z,?) correspond         to an efficient estimator. Suppose that
there is 7 with E[($ - $)$‘I # 0 for $ = $(Z, 7) and & = $(Z, 5). Then $ - 6 # 0, so
there exists a constant matrix F such that e = F($ - $) has nonsingular            variance
andE[e~]#O.LetB=-E[~e’](E[ee’])-’Fandu=~+B(~-~)=(Z-B)~+B~.
By the affine property of {rj(Z,z)} there is z”such that k’(f) = E[uu’] = E[$$‘] -
E[$e’](E[ee’])-‘E[e$‘]       = V(T) - E[$e’](E[ee’])-‘E[e$‘],       which is smaller than
 V(S) in the positive semi-definite   sense. This conclusion     contradicts   the assumed
                                                          - -,
efficiency of Z, so that the assumption    that E[($ - $)tj ] # 0 contradicts efficiency.
Thus, it follows that E[($ - $)I+?‘]= 0 for all 7, i.e. that for all 7,


       D(t)-    ‘E[m(Z,r)m(Z,f)‘]D(?)-”            = D(t)-'E[m(Z,~)m(Z,~)']D(~)-         “.         (5.7)

By the assumed nonsingularity       of E[m(Z, T)m(Z, Z)‘], this equation can be solved
for D(7) to give D(7) = E[m(Z, z)m(Z, T)‘](E[m(Z, f)m(Z, 2)‘])- ‘D(f). Since C =
D(f)‘(E[m(Z, f)m(Z, ?)‘I)- ’ is a nonsingular matrix it follows by (i) and (ii) that there
exists ? with m(Z, ?) = Cm(Z, Y). Furthermore,     by linearity of D(7) it follows that
V(?)= V(Z), so that the estimator corresponding      to z”is efficient. The second con-
clusion then follows from D(7) = E[m(Z, z)m(Z, S)‘] for all 7.                     Q.E.D.


This result states that


       D(7) =    E[m(Z, t)m(Z,    Z)‘],     for all 7,                                              (5.8)


is sufficient for Z to correspond to an efficient estimator and is necessary for some
efficient estimator if the set of moment functions is linear and the Jacobian is a linear
function of the scores. This equality is a generalization       of the information    matrix
equality. Hansen (1985a) formulated           and used this condition     to derive efficient
instrumental    variables estimators, and gave more primitive hypotheses for condi-
tions (i) and (ii) of Theorem 5.3. Also, the framework here is a modified version of
that of Bates and White (1992) for general classes of estimators. The sufficiency part
of Theorem 5.3 appears in both of these papers. The necessity part of Theorem 5.3
appears to be new, but is closely related to R.A. Fisher’s (1925) necessary condition
for an efficient statistic, as further discussed below.
   One interpretation       of eq. (5.8) is that the asymptotic    covariance    between an
efficient estimator and any other estimator is the variance of the efficient estimator.
This characterization      of an efficient estimator was discussed in R.A. Fisher (1925),
2168                                                              W.K.NeweyandD.McFaddvn


and is useful in constructing        Hausman (1978) specification      tests. It is derived by
assuming that the asymptotic covariance between two estimators in the class takes
theform D(r,)~'E[m(Z,z,)m(Z,s,)']D(z,)-",             as can usually be verified by “stacking”
the two estimators and deriving theirjoint asymptotic variance (and hence asympto-
tic covariance). For example, consider two different GMM estimators 8, and g2,
with two different moment functions g,(z, 6) and g2(z, @, and r = q for simplicity.
The vector y*= (@,, &)’ can be considered a joint GMM estimator with moment
vector g(z, y) = [gr(z, H,)‘, gz(z, @,)‘I’. The Jacobian matrix of the stacked moment
vector will be block diagonal, and hence so will its inverse, so that the asymptotic
covariance      between 6, and 6, will be {E[V,g,(z, e,)]} _ ‘E[g,(z, d0)g2(z, O,)‘] x
{ECV,g,(z, &,)I) - l’. Th’ISISexactly of the form D(T,)- ‘E[m(Z, tl)m(Z, TJ']O(T~)-I',
where Z = z, m(Z, TV)= g,(z,O,),etc. When the covariance                takes this form, the
covariance     between any estimator and one satisfying eq. (5.8) will be D(T)-' x
E[m(Z,z)m(Z,~)l]D(~)-“=I~D(~)~“=D(~)-’E[m(Z,t)m(Z,~)‘]D(~)-”                        = V(t), the
variance of the efficient estimator. R.A. Fisher (1925) showed that this covariance
condition    is sufficient for efficiency, and that it is also necessary if the class of
statistics is linear, in a certain sense. The role of conditions (i) and (ii) is to guarantee
that R.A. Fisher’s (1925) linearity condition is satisfied.
   Another interpretation       ofeq. (5.8) is that the variance of any estimator in the class
can be written as the sum of the efficient variance and the variance of a “noise term”.
Let u(Z)= D(T)-'m(Z,T)-D(f)-'m(Z,f), and note that U(Z) is orthogonal                         to
D(5)_ ‘m(Z, Z) by eq. (5.8). Thus, V(T)= V(Z)+ E[CI(Z)U(Z)‘]. This interpretation
is a second-moment        version of the Hajek and LeCam efficiency results.



5.4.   Solving fir the smallest asymptotic variance

The characterization    of an efficient estimator given in Theorem 5.3 is very useful
for finding efficient estimators. Equation (5.8) can often be used to solve for Z, by
following two steps: (1) specify the class of estimators so that conditions (i) and (ii)
of Theorem 5.3 are satisfied, i.e. so the set of moment functions is linear and the
Jacobian D is linear in the moment functions; (2) look for Z such that D(T) =
E[m(Z, s)m(Z, Z)‘]. The importance of step (1) is that the linearity conditions guarantee
that a solution to eq. (5.8) exists when there is an efficient estimator          [with the
variance of m(Z, t) nonsingular],    so that the effort of solving eq. (5.8) will not be in
vain. Although for some classes of estimators the linearity conditions are not met,
it often seems to be possible to enlarge the class of estimators so that the linearity
conditions are met without affecting the efficient estimator. An example is weighted
least squares estimation, as further discussed below.
   Using eq. (5.8) to solve for an efficient estimator can be illustrated with several
examples, both old and new. Consider first minimum              distance estimators.    The
asymptotic   variance has the form given in eq. (5.5) for the score G’WZ and the
Jacobian term G’ WC. The equation for the efficient W is then 0 = G’ WC - G’Wf26’G =
Ch. 36: Large Sample Estimation and Hypothesis Testing                                         2169


G’W(I - flW)G, which holds if fll?f= I, i.e. w = R- ‘. Thus, in this example one
can solve directly for the optimal weight matrix.
   Another example is provided by the problem of deriving the efficient instruments
for a nonlinear instrumental   variables estimator. Let p(z, (3)denote an s x 1 residual
vector, and suppose that there is a vector of variables x such that a conditional
moment restriction,

     ma &I)Ixl = 0,                                                                           (5.9)

 is satisfied. Here p(z, 0) can be thought of as a vector of residuals and x as a vector
 of instrumental    variables. A simple example is a nonlinear      regression model y =
,f(x, (3,) + E, @&lx] = 0, where the residual p(z, 0) = y - f(x, 0) will satisfy the condi-
 tional moment restriction in eq. (5.9) by E having conditional       mean zero. Another
 familiar example is a single equation of a simultaneous        equations system, where
 p(z, 0) = y - Y’8 and Y are the right-hand-side    endogenous     variables.
    An important class of estimators are instrumental     variable, or GMM estimators,
 based on eq. (5.9). This conditional    moment restriction implies the unconditional
 moment restriction that E[A(x)p(z, e,)] = 0 for any q x s matrix of functions A(x).
 Thus, a GMM estimator can be based on the moment functions g(z, 0) = A(x)p(z, 0).
 Noting that V&z, 0) = A(x)V,p(z, Q), it follows by Theorem 3.4 that the asymptotic
 variance of such a GMM estimator will be

                     441) ‘~C44dz, ~JP(z,&J’44’1 {~C44Ve~k441 > “2
      WV = {~%4x)Vep(z>
                                                                                            (5.10)

where no weighting matrix is present because g(z, Q) = A(x)p(z,B) has the same
number of components           as 0. This asymptotic      variance satisfies eq. (5.5), where
T = A(-) indexes the asymptotic         variance. By choosing p(z, 0) and A(x) in certain
ways, this class of asymptotic variances can be set up to include all weighted least
squares estimators,      all single equation instrumental          variables estimators,     or all
system instrumental       variables estimators.      In particular,    cases with more instru-
mental variables than parameters can be included by specifying A(x) to be a linear
combination     of all the instrumental     variables, with linear combination        coefficients
given by the probability limit of corresponding         sample values. For example, suppose
the residual is a scalar p(z,@ = y- Y’B, and consider the 2SLS estimator                       with
instrumental    variables x. Its asymptotic variance has the form given in eq. (5.10) for
A(x) = E[ Yx’](E[x~‘])~‘x.        In this example, the probability limit of the linear com-
bination coefficients is E[Yx’](E[xx’])-‘.          For system instrumental       variables esti-
mators these coefficients could also depend on the residual variance, e.g. allowing
for 3SLS.
   The asymptotic variance in eq. (5.10) satisfies eq. (5.5) for Z=z, D(r)= E[A(x) x
V&z, Q,)], and m(Z, r) = A(x)p(Z, 0,). Furthermore,            both m(Z, r) and D(r) are linear
in A(x), so that conditions (i) and (ii) should be satisfied if the set of functions {A(x)}
2170                                                                        W.K. Newey and D. McFadden



is linear. To be specific, consider the class of all A(x) such that E[A(x)V&z, O,)]
and E[ )1.4(x)11 2 /)p(z, 0,) I/2] exist. Then conditions (i) and (ii) are satisfied with
TV= A3(*) = CIA,(.) _t C,A,(V).~~ Thus, by Theorem 5.3, if an efficient choice of
instruments   exist there will be one that solves eq. (5.8). To find such a solution, let
G(x) = E[V,p(z, 0,)j x] and 0(x) = E[p(z, Qp(z, 0,)’ (xl, so that by iterated expecta-
tions eq. (5.8) is 0 = E[A(x)(G(x) - Q(x)A(x)‘}]. This equation will be satisfied if
G(x) - Q(x),?(x)’ = 0, i.e. if

       A(x) = G(x)'O(x)- ‘.                                                                           (5.11)

Consequently,      this function minimizes the asymptotic variance. Also, the asympto-
tic variance is invariant        to nonsingular     linear transformations,         so that A(x) =
CG(x)‘n(x)-’       will also minimize the asymptotic             variance for any nonsingular
constant matrix C.
   This efficient instrument        formula includes many important           efficiency results as
special cases. For example, for nonlinear           weighted least squares it shows that the
optimal weight is the inverse of the conditional                 variance of the residual: For
G,(0) = - n- 1C;= 1w(xi)[ yi - h(xi, O)]“, the conclusion of Theorem 3.1 will give an
asymptotic variance in eq. (5.10) with A(x) = w(x)h,(x, S,), and the efficient estimator
has A(x) = {E[a2 1x] } - ‘h,(x, Q,), corresponding          to weighting by the inverse of the
conditional variance. This example also illustrates how efficiency in a class that does
not satisfy assumptions       (i) and (ii) of Theorem 5.3 (i.e. the linearity conditions), can
be shown by enlarging the class: the set of scores (or moments) for weighted least
squares estimators is not linear in the sense of assumption (i), but by also including
variances for “instrumental         variable” estimators, based on the moment conditions
y(z, 19)= A(x)[y - h(x, tI)], one obtains a class that includes weighted least squares,
satisfies linearity, and has an efficient member given by a weighted least squares
estimator. Of course, in a simple example like this one it is not necessary to check
linearity, but in using eq. (5.8) to derive new efficiency results, it is a good idea to
set up the class of estimators so that the linearity hypothesis is satisfied, and hence
some solution to eq. (5.8) exists (when there is an efficient estimator).
   Another example of optimal instrument               variables is the well known result on
efficiency of 2SLS in the class of instrumental             variables estimators with possibly
nonlinear    instruments:     If p(z, 0) = y - Y’O, E[ Yjx] = 17x, and c2 = E[p(z, B,J2 1x]
is constant,     then G(x) = - Ii’x and 0(x) = 02, and the 2SLS instruments                       are
E[ Yx’](E[xx’])-       lx = 17x = - 02&x), a nonsingular          linear combination     of A(x). As
noted above, for efficiency it suffices that the instruments             are a nonsingular    linear
combination      of A(x), implying efficiency of 2SLS.
   This general form A(x) for the optimal instruments                has been previously derived
in Chamberlain       (1987), but here it serves to illustrate how eq. (5.8) can be used to


  “Existence    of the asymptotic   variance   matrix   corresponding   to 53 follows   by the triangle   and
Cauchy-Schwartz     inequalities.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                      2171


derive the form of an optimal estimator. In this example, an optimal choice of
estimator follows immediately  from the form of eq. (5.8) and there is no need to
guess what form the optimal instruments  might take.



5.5.   Feasible   efficient estimation

In general, an efficient estimator can depend on nuisance parameters or functions.
For example, in minimum distance estimation             the efficient weighting matrix is a
nuisance parameter that is unknown.          Often there is a nuisance function, i.e. an
infinite-dimensional     nuisance parameter, such as the optimal instruments         discussed
in Section 5.4. The true value of these nuisance parameters is generally unknown,
so that it is not feasible to use the true value to construct an efficient estimator. One
feasible approach to efficient estimation is to use estimates in place of true nuisance
parameters, i.e. to “plug-in” consistent nuisance parameter estimates, in the con-
struction of the estimator. For example, an approach to feasible, optimal weighted
least squares estimator is to maximize - n-l x1= r G(xi)[yi - h(xi, 8)12, where a’(x)
is an estimator of 1/E[.a2 1x].
    This approach will give an efficient estimator, if the estimation        of the nuisance
parameters does not affect the asymptotic variance of 6. It has already been shown,
in Section 5.2, that this approach works for minimum distance estimation, where it
suffices for efficiency that the weight matrix converges in probability        to R - ‘. More
generally, a result developed in Section 6, on two-step estimators,             suggests that
estimation of the nuisance parameters should not affect efficiency. One can think
of the “plug-in” approach to efficient estimation as a two-step estimator, where the
first step is estimating      the nuisance parameter       or function, and the second is
construction     of &. According     to a principle developed in the next section, the
first-step estimation has no effect on the second-step estimator if consistency of the
first-step estimator does not affect consistency of the second. This principle generally
applies to efficient estimators, where nuisance parameter estimates that converge
to wrong values do not affect consistency of the estimator of parameters of interest.
For example, consistency of the weighted least squares estimator is not affected by
the form of the weights (as long as they satisfy certain regularity conditions). Thus,
results on two-step estimation suggest that the “plug-in” approach should usually
yield an efficient estimator.
   The plug-in approach is often easy to implement when there are a finite number
of nuisance parameters or when one is willing to assume that the nuisance function
can be parametrized by a finite number of parameters. Finding a consistent estimator
of the true nuisance parameters to be used in the estimator is often straightforward.         A
well known example is the efficient linear combination        matrix Z7= E[Yx’](E[xx’])-        ’
for an instrumental    variables estimator, which is consistently estimated by the 2SLS
coefficients fi= xy= r Yix:(Cy= ,x,x~)-‘. Another example is the optimal weight for
nonlinear least squares. If the conditional      variance is parametrized     as a’(~, y), then
2172                                                            W.K. Newey and D. McFadden


the true y can be consistently estimated from the nonlinear least squares regression
of $ on aZ(xi, y), where Ei = yi - h(xi, I$ (i = 1,. . , n), are the residuals from a
preliminary     consistent estimator (7.
   Of course, regularity conditions      are, useful for showing that estimation   of the
nuisance parameters does not affect the asymptotic variance of the estimator. To
give a precise statement it is helpful to be more specific about the nature of the
estimator. A quite general type of “plug-in” estimator is a GMM estimator that
depends on preliminary       estimates of some parameters. Let g(z, 19,y) denote a q x 1
vector of functions of the parameters of interest and nuisance parameters y, and let
y*be a first-step estimator. Consider an estimator e that, with probability approaching
one. solves


       n- l f    cJ(Zi,f&y*)= 0.                                                      (5.12)
           i=l



This class is quite general, because eq. (5.12) can often be interpreted       as the first-
order conditions for an estimator. For example, it includes weighted least squares
estimators with an estimated weight w(x,y*), for which eq. (5.12) is the first-order
condition with g(z, 8, y) = w(x, y&(x, 0)[ y - h(x, 8)]. One type of estimator not in-
cluded is CMD, but the main result of interest here is efficient choice of weighting
matrix, as already discussed in Section 5.2.
   Suppose also that y*is a GMM estimator, satisfying n-l x1= i m(zi, y) = 0. If this
equation is “stacked” with eq. (5.12), the pair (6, $) becomes a joint GMM estimator,
so that regularity conditions    for asymptotic    efficiency can be obtained from the
assumptions     for Theorem 3.4. This result, and its application to more general types
of two-step estimators, is described in Section 6. In particular, Theorem 6.1 can be
applied to show that 6’from eq. (5.12) is efficient. If the hypotheses of that result are
satisfied and G, = E[V,g(z, B,, yO)] = 0 then 8 will be asymptotically        normal with
asymptotic    variance the same as if 7 = yO. As further discussed in Section 6, the
condition    G, = 0 is related to the requirement       that consistency   of ji not affect
consistency    of 8. As noted above, this condition       is a useful one for determining
whether the estimation of the nuisance parameters affects the asymptotic variance
of the feasible estimator 6.
   To show how to analyze particular feasible estimators, it is useful to give an
example.

Linear regression with linear heteroskedusticity:    Consider a linear model where
&lx]      = ~‘8, and C?(X) = Var( y Jx) = w’c(~for some w = w(x) that is a function of
x. As noted above, the efficient estimator among those that solve n-‘Cy= i A(xi) x
[ yi - x:(3] = 0 has A(x) = A(x) = (~‘a,))’ x. A feasible efficient estimator   can be
constructed    by using a squared residual regression to form an estimator oi for Q,
and plugging this estimator into the first-order conditions.  More precisely, let p be
the least squares estimator from a regression of y on x and & the least squares
Ch. 36: Large Sample Estimation and Hypothesis      Testing                                             2173


estimator from a regression of (y - x/j?)’ on w. Suppose that w’aO is bounded below
and let r(u) be a positive function that is continuously differentiable with bounded
derivative and z(u) = u for u greater than the lower bound on w’cx,,.~’ Consider 8
obtained from solving CT= i r(w’&)) ‘xi(yi - xi@ = 0. This estimator is a two-step
GMM estimator like that given above with

                  y = (cc’,fl’)‘, m(z, y) = [( y - x’P)x’,    {( y - x’py - w’cr}w’]‘,
         g(z,8, y) = T(W’cI)- ‘x( y - de).

It is straightforward   to verify that the vector of moment functions [m(z, y)‘, g(z, 8, y)‘]’
satisfies the conditions of Theorem 6.1 if w is bounded, x and y have finite fourth
moments, and E[xx’] and E[ww’] are nonsingular.         Furthermore,  E[V,g(z, do, yo)] =
- E[~(w’a~)-~(y - x’~,)xw’] = 0, so that this feasible estimator will be efficient.

    In many cases the efficiency of a “plug-in” estimator may be adversely affected if
the parametrization       of the nuisance functions is incorrect. For example, if in a
linear model, heteroskedasticity      is specified as exponential, but the true conditional
variance takes another form, then the weighted least squares estimator based on an
exponential    variance function will not be efficient. Consistency        will generally not
be affected, and there will be only a little loss in efficiency if the parametrization
is approximately     correct, but there could be big efficiency losses if the parametrized
functional   form is far from the true one. This potential problem with efficiency
suggests that one might want to use nonparametric nuisance function estimators,
that do not impose any restrictions           on functional    form. For the same reasons
discussed above, one would expect that estimation             of the nuisance function does
not affect the limiting distribution,      so that the resulting feasible estimators would
be efficient. Examples of this type of approach are Stone (197.3 Bickel (1982), and
Carroll (1982). These estimators are quite complicated,           so an account is not given
here, except to say that similar estimators are discussed in Section 8.



5.4.   Technicalities

It is possible to show the generalized information      matrix equality in eq. (5.1) under
a condition that allows for f(zl @‘I2 to not be continuously     differentiable and g(z, 0)
to not be continuous.   For the root-density,  this condition is “mean-square”differen-
tiability at fIO with respect to integration    over z, meaning that there is 6(z) with
l /l&z) )I2dz < co such that J[f(zI @‘I2 - f(zl Qo)1’2- 6(z)‘(H- 0,)12 dz = o( II8 - ,!?,I)2,


    ““The T(U)function is a “trimming” device similar to those used in the semiparametric         estimation
literature. This specification requires knowing a lower bound on the conditional         variance. It is also
possible to allow T(U)to approach      the identity for all u > 0 as the sample size grows, but this would
complicate the analysis.
2174                                                                    W.K. Newey and D. McFadden


as O-+9,. As shown in Bickel et al. (1992) it will suffice for this condition              that
,f(zl0) is continuously differentiable in 0 (for almost all z) and that J(0) = jV, In ,f(zlO) x
{VOln~(zIfO>‘,!“(zI@d z ISnonsingular      and continuous in 8. Here 6(z) is the derivative
off(z I w2, so by V,f‘(z 141/2= +f(z l 0)1/2V0 In f(z Id), the expression for the infor-
mation matrix in terms of 6(z) is J = 4J”6(z)&z) dz. A precise result on efficiency of
MLE in the class of GMM estimators can then be stated as:

Lemma 5.4

If(i) ,f(~l@r/~ is mean-square    differentiable   at 0, with derivative 6(z); (ii) E[g(z, Q)]
is differentiable at 0, with derivative G; (iii) g(z, 0) is continuous at B,, with probability
one; (iv) there is a neighborhood    _N of 6, and a function d(z) such that IIg(z, 0) II d d(z)
and Srl(z)‘f(z IO)dz is bounded for BEN; then lg(z, Q)f(z 10)dz is differentiable              at
B0 with derivative G + 2jg(z, Q,)~(z)f(~lQ,)‘~~ dz.

Proof

The proof is similar to that of Lemma 7.2 of Ibragimov and Has’minskii (1981). Let
r(0) = f(z IQi”, g(e) = g(z, 0), 6 = 6(z), and A(B) = r(0) - r(Q,) - iY(d - Q,), suppress-
ing the z argument       for notational   convenience.   Also, let m(8,8) = ~g(@r(Q2dz
and M = jg(b’,)&(ll,) dz. By (ii), m(0, d,) - m(B,, ~9,)- G(B - 0,) = o( Ij 0 - do I/). Also,
by the triangle inequality,     I/m(0,@ - m(B,, 0,) - (G + 2M)(0 - 0,) 11< I/m(e,e,) -
m(fl,, 0,) - G(8 - 0,) /I + 11
                             m(6,6) - m(@,d,) - 2M(6’ - 0,) 11,so that to show the con-
clusion it suffices to show IIm(d, 0) - m(d, 0,) - 2M(B - 0,) II = o( 110- B. /I). To show
this, note by the triangle inequality,


       IIde, 4 - MO,&4 - 2M(8 - 0,) I/ =            g(d)[r(d)’     - r(0,J2] dz - 2~(0 - 0,)
                                              IIs                                               !I

           d      s(QCr@)+ r(bJl44 dz +     Cd4 - g(~o)lr(80)6’dz II8 - 8, II
               IIS                   II IIS                      II

               +   Cs(e)r(e)-s(e,)r(e,)lsdz II~-~,ll=~,+~,ll~-8,l/+R,ll8-~,ll.

Therefore, it suffices to show that R, =o( /I0-0, II), R, -0,               and R, +O as O+ fl,,.
By (iv) and the triangle and Cauchy-Schwartz     inequalities,


        R, < { [ [g(Q2r(R,’   d.z]li2 + [ Ig(Q2r(&J2      dzy     “)[p(B)’ dz]12


Also, by (iii) and (iv) and the dominated    convergence         theorem, E[ I(g(e) - g(0,) \I’] +O,
Ch. 36: Large Sample Estimation   and Hypothesis     Testing                            2175


so by the Cauchy-Schwartz    inequality, R, <(EC IIg(0)-g(0,)    Il’])“‘(j 116112  dz)“‘+O.
Also, by the triangle inequality,   R, < R, + 1 I/g(0) 11Ir(0) - r(Q,)l /I6 II dz, while for
K > 0,


          /Icd@It Ir(@ - 44,) I II6 II dz d       44 Ir@) - 4%) I II6 II dz
      s                                       s

           d            4.4 Ir(Q)- r&J I II6 IIdz + K Ir(Q)- 4%)l II6 II dz
               s d(z)>.4                             s


                                             I is
                                              l/2
           <      d(~)~lr(0) - r(B,)12 dz                          II6 II2dz
                                                        d(z) 3 X



                      lr(R)-r(i),)2dz11’2{          S6’dz)L-i.


By (iv), i d(z)‘Ir(Q) - r(0,)12 dz < 2fd(z)2r(B)2 dz + 2jd(z)2r(6,)2 dz is bounded. Also,
by the dominated       convergence theorem, JdcZjaK I/6 (1’dz + 0 as K + co, and by (i),
j Ir(4 - r(bJ I2d   z + 0, so that the last term converges to zero for any K. Consider
E > 0 and choose K so jdtz,a K ((6 ((2 dz < 3~. Then by the last term is less than +E for
0 close enough to 0,, implying that j 1)g(0) I/Ir(8) - r(Q,)l 116I/ dz < E for 0 close
enough to (IO. The conclusion then follows by the triangle inequality.             Q.E.D.

Proof of Theorem       5.1

By condition (iv) of Theorem 3.4 and Lemma 3.5, g(z, e) is continuous on a neighbor-
hood of 8, and E[g(z, 0)] is differentiable     at B0 with derivative G = E[Vsy(z, (II,)].
Also, f(z I0)“’ is mean-square differentiable by the dominance condition in Theorem
5.1, as can be shown by the usual mean-value          expansion argument. Also, by the
conditions of Theorem 5.1, the derivative is equal to $1 [f(zj0,)>O]f(z(0,)-“2         x
V,f(z) 0,) on a set of full measure, so that the derivative in the conclusion of Lemma
5.4 is G + %(z,    WV0 ln f(zl&Jl. Also, IIdz, 0)II d 44 = su~~~.~- IIAZ, 0)II          Has
j442.fW)dz          bounded,so that the conclusion of Lemma 5.4 holds. Then             for
u = g(z, 0,) + GJ- ‘V,in f(zIB,),

     (G’WG)- ‘G’B’~WG(G’WG)-                  1 - J-l

          =(G’WG)-‘G’W(~uu’dz)WG(G’WG)-‘,

so the conclusion      follows by i UU’dz positive             semi-definite.       Q.E.D.


6.   Two-step estimators

A two-step estimator is one that depends on some preliminary, “first-step” estimator
of a parameter vector. They provide a useful illustration of how the previous results
2116                                                              W.K. Newey and D. McFadden


can be applied, even to complicated         estimators. In particular, it is shown in this
section that two-step estimators can be fit into the GMM framework. Two-step
estimators are also of interest in their own right. As discussed in Section 5, feasible
efficient estimators     often are two-step estimators,      with the first step being the
estimation of nuisance parameters that affect efficiency. Also, they provide a simpler
alternative   to complicated     joint estimators.    Examples of two-step estimators        in
econometrics     are the Heckman (1976) sample selection estimator and the Barro
(1977) estimator for linear models that depend on expectations and/or corresponding
residuals. Their properties have been analyzed by Newey (1984) and Pagan (1984,1986),
among others.
    An important     question for two-step estimators is whether the estimation of the
first step affects the asymptotic variance of the second, and if so, what effect does
the first step have. Ignoring the first step can lead to inconsistent        standard error
estimates, and hence confidence intervals that are not even asymptotically              valid.
This section develops a simple condition for whether the first step affects the second,
which is that an effect is present if and only if consistency of the first-step estimator
affects consistency     of the second-step estimator. This condition is useful because
one can often see by inspection whether first-step inconsistency        leads to the second-
step inconsistency.     This section also describes conditions       for ignoring the first
step to lead to either an underestimate            or an overestimate      of the standard
errors.
    When the variance of the second step is affected by the estimation in the first step,
asymptotically     valid standard errors for the second step require a correction for the
first-step estimation. This section derives consistent standard error estimators by
applying the general GMM formula. The results are illustrated by a sample selection
model.
    The efficiency results of Section 5 can also be applied, to characterize efficient
members of some class of two-step estimators. For brevity these results are given
in Newey (1993) rather than here.



6.1.   Two-step   estimators   as joint GMM    estimators


The class of GMM estimators is sufficiently general to include two-step estimators
where moment functions from the first step and the second step can be “stacked”
to form a vector of moment conditions. Theorem 3.4 can then be applied to specify
regularity conditions for asymptotic normality, and the conclusion of Theorem 3.4
will provide the asymptotic     variance, which can then be analyzed to derive the
results described above. Previous results can also be used to show consistency,
which is an assumption   for the asymptotic normality results, but to focus attention
on the most interesting    features of two-step estimators,  consistency  will just be
assumed in this section.
Ch. 36: Large Sample Estimation and Hypothesis     Testing                              2117


   A general type of estimator 8 that has as special cases most examples        of interest
is one that, with probability approaching  one, solves an equation


     n- ’   i$l   dzi,   8,    y*)= O,                                                 (6.1)


where g(z,B,y) is a vector of functions with the same dimension        as 0 and y*is a
first-step estimator. This equation is exactly the same as eq. (5.12), but here the
purpose is analyzing the asymptotic distribution of gin general rather than specifying
regularity conditions for $ to have no effect. The estimator can be treated as part
of a joint GMM estimator if y^also satisfies a moment condition of the form, with
probability   approaching  one,


     n-l     i    m(z,,y)=O,                                                           (6.2)
            i=l



where m(z,y) is a vector with the same dimension as y. If g(z, 0,~) and m(z,r) are
“stacked” to form J(z, 8, y) = [m(z, O)‘,g(z, 8, y)‘]‘, then eqs. (6.1) and (6.2) are simply
the two components   of the joint moment equation n-i C;= 1 g(zi,         8,y*)
                                                                              = 0.Thus, the
two-step estimator from eq. (6.1) can be viewed as a GMM estimator.
   An interesting example of a two-step estimator that fits into this framework is
Heckman’s (1976) sample selection estimator.


Sample selection example: In this example the first step +$is a probit estimator with
regressors x. The second step is least squares regression in the subsample where the
probit-dependent    variable is one, i.e. in the selected sample, with regressors given
by w and i(x’y^) for n(o) = ~(U)/@(U). Let d be the probit-dependent      variable, that is
equal to either zero or one. This estimator is useful when y is only observed if d = 1,
e.g. where y is wages and d is labor force participation.          The idea is that joint
normality of the regression y = w’/& + u and the probit equation leads to E[yl w,
d = 1, x] = w’p,, + cc,A(x’y,), where a, is nonzero if the probit- and regression-depen-
dent variables are not independent.    Thus, %(x’cr,) can be thought of as an additional
regressor that corrects for the endogenous      subsample.
   This two-step estimator will satisfy eqs. (6.1) and (6.2) for



     Y(4 8,Y)= d
                         [
                              A(&1 CY-w'B-~wr)l~
       m(z,y)     = Il(x’y)a=-‘( -x’y)x[d-       @(x’y)],                              (6.3)

where 8 = (/Y, a)‘. Then eq. (6.1) becomes the first-order condition for least squares
on the selected sample and eq. (6.2) the first-order condition for probit.
2178                                                                           W.K. Newley and D. McFadden


Regularity conditions for asymptotic normality can be formulated by applying the
asymptotic normality result for GMM, i.e. Theorem 3.4, to the stacked vector of
moment conditions. Also, the conclusion of Theorem 3.4 and partitioned        inversion
can then be used to calculate the asymptotic variance of 8, as in the following result.
Let

        G, = W,dZ> Q,>ro)l,            G, = ECV,g(z,‘&>YO)I> Y(Z)= dz, &, Yoh
        M = ECV,mk ~o)l,             I,@) = - M        ‘m(z, y,,).                                    (6.4)

Theorem     6.1

Ifeqs. (6.1) and (6.2) are satisfied with probability approaching  one, 8% 8,, y*3 ye,
and g(z, 8, y) satisfies conditions (i)-(v) of Theorem 3.4, then 8 and 9 are asymptoti-
cally normal      and $(&     0,) 4       N(0, V) where        I/ = G; ‘EC {g(z) + G,$(z)}(g(z)         +
G,WJ’1G,“.
Proof

By eqs. (6.1) and (6.2), with probability    approaching    one (8, y*)is a GMM estimator
with moment function g”(z,_B,     y) = [m(z,y)‘,g(z, e,y)‘]’ and I? equal to an identity
matrix.   By (~?‘1@‘6’=       G-‘,     the asymptotic      variance   of the estimator     is
(W-     ‘Z(‘IE[#(z, do, y&(z, 8,, y,)‘]zz;(~~zz1)- l = CT-‘E[ij(z, 8,, y&(z, o,, yJ]G- l’.
Also, the expected Jacobian matrix and its inverse are given by




                                                                                                      (6.5)

Noting    that the first row of G- ’ is G; ’ [I, - GYM - ‘1 and that [I, - G,M- ‘1 x
g(z, BO,yO) = g(z) + G&(z), the asymptotic   variance of 8, which is the upper left block
of the joint variance matrix, follows by partitioned   matrix multiplication.     Q.E.D.

An alternative     approach   to deriving         the asymptotic         distribution   of two-step   esti-
mators is to work directly from eq. (6. l), expanding in 6’to solve for &(e^ - 6,) and
then expanding the result around the true yO. To describe this approach, first note
that 9 is an asymptotically     linear estimator     with influence    function $(z) =
 - M- ‘m(zi, ye), where fi(y* - yO) = Cr= 1 $(zi)/$     + op(1). Then                    expanding     the
left-hand side of eq. (6.1) around B0 and solving gives:


       Jj2(8-8,)= -    a-1 t      @) -l iFln
                                      Vog(z. 1)                           eO,Y”V&
                      [        i=l   1
                                                   ?             Stzi,




                    =-[& t V,g(z,,8,y^) -l
                               i=l                     1
Ch. 36: Large Sample Estimation and Hypothesis Testing                                          2179



                        x
                            ii$l  g(zi)l&        +   [,-l  i,
                                                          i=l
                                                                vyCl(zi,   eO, V,]\;;(9
                                                                                    - YOJ]
                    = -                             + up,
                            GB1 t {g(zi)+ Gyti(zJ}lJn
                                  i=l



where (? and 7 are mean values and the third equality follows by convergence       of
y^and the mean values and the conclusion of Lemma 2.4. The conclusion then follows
by applying the central limit theorem to the term following the last equality.
   One advantage    of this approach    is that it only uses the influence function
representation    &($ - ye) = x1= 1 tj(z,)/&    + o,(l) for 9, and not the GMM formula
in eq. (6.2). This generalization is useful when y*is not a GMM estimator. The GMM
approach      has been adopted here because it leads to straightforward          primitive
conditions, while an influence representation     for y*is not a very primitive condition.
Also the GMM approach can be generalized to allow y*to be a two-step, or even
multistep, estimator by stacking moment conditions for estimators that affect 3 with
the moment conditions for 0 and y.



6.2.    The efect   ofjrst-step         estimation   on second-step        standard   errors

 One important     feature of two-step estimators        is that ignoring the first step in
 calculating standard errors can lead to inconsistent        standard errors for the second
 step. The asymptotic variance for the estimator solving eq. (6.1) with y*= yO, i.e. the
 asymptotic variance ignoring the presence of y*in the first stage, is G; ’ E[g(z)g(z)‘]G;    l’.
 In general, this matrix differs from the asymptotic variance given in the conclusion
 of Theorem 6.1, because it does not account for the presence of the first-step
estimators.
    Ignoring the first step will be valid if G, = 0. Also, if G, # 0, then ignoring the first
step will generally be invalid, leading to an incorrect asymptotic variance formula,
because nonzero G, means that, except for unusual cases, E[g(z)g(z)‘] will not equal
 E[ (g(z) + G&(z)} {g(z) + G&(z)}‘]. Thus, the condition for estimation of the first
step to have no effect on the second-step asymptotic variance is G, = 0.
    A nonzero G, can be interpreted as meaning that inconsistency            in the first-step
estimator leads to inconsistency     in the second-step estimator. This interpretation         is
useful, because it gives a comparatively     simple criterion for determining if first-stage
estimation   has to be accounted       for. To derive this interpretation,      consider the
solution 8(y) to E[g(z, B(y), y)] = 0. Because 8 satisfies the sample version of this
condition, B(y) should be the probability       limit of the second-step estimator when J?
converges to y (under appropriate      regularity conditions, such as those of Section 2).
Assuming differentiation     inside the expectation       is allowed, the implicit function
theorem gives

       V$(y,)   = - G; ‘Gy.                                                                    (6.7)
2180                                                                          W.K. Newey and D. McFadden



By nonsingularity    of G,, the necessary and sufficient condition   for G, = 0 is that
V,H(yJ = 0. Since H(y,) = H,, the condition     that V,B(y,J = 0 is a local, first-order
condition   that inconsistency  in y*does not affect consistency   of 8. The following
result adds regularity conditions for this first-order condition to be interpreted      as
a consistency condition.

Theorem 6.2

Suppose that the conditions of Theorem 6.1 are satisfied and g(z, 0, y) satisfies the
conditions   of Lemma 2.4 for the parameter      vector (H’,y’). If &A 8, even when
‘j-y # yO, then G, = 0. Also suppose that E[V,g(z, 8,, y)] has constant rank on a
neighborhood    of yO. If for any neighborhood  of y0 there is y in that neighborhood
such that 8 does not converge in probability   to H, when $ L y, then G, # 0.

Proof

By Lemma 2.4, 8 3 8, and y*3 y imply that Cy= r g(zi, 8, y^)/n -% E[g(z, 8,, y)].
The sample moment conditions           (6.1) thus imply E[g(z, BO,y)] = 0. Differentiat-
ing this identity with respect to y at y = y0 gives G, = 0.41 To show the second
conclusion, let H(y) denote the limit of e when 9 L y. By the previous argument,
E[g(z, 8(y), y)] = 0. Also, by the implicit function theorem 0(y) is continuous    at yO,
with @ye) = BO.By the conditions of Theorem 6.1, G&8, y) = E[V,g(z, 0, y)] is contin-
uous in a neighborhood      of B0 and yO, and so will be nonsingular on a small enough
neighborhood      by G, nonsingular.    Consider a small enough convex neighborhood
where this nonsingularity     condition holds and E[V,g(z, 8,, y)] has constant rank. A
mean-value expansion gives E[g(z, 8,, ?)I.= E[g(z, B(y), y)] + G,(& y)[e, - 0(y)] ~0.
Another expansion then gives E[g(z, Be, y)] = E[V,g(z, O,, -$](y - y,,) # 0, implying
E[V,g(z, do, v)] # 0, and hence G, # 0 (by the derivative having constant rank).
                                                                                  Q.E.D.

This results states that, under certain regularity conditions, the first-step estimator
affects second-step standard errors, i.e. G, # 0, if and only if inconsistency     in the
first step leads to inconsistency in the second step. The sample selection estimator
provides an example of how this criterion can be applied.

Sample selection continued: The second-step estimator is a regression where some
of the regressors depend on y. In general, including the wrong regressors leads to
inconsistency,   so that, by Theorem 6.2, the second-step        standard errors will be
affected by the first step. One special case where the estimator will still be consistent
is if q, = 0, because including a regressor that does not belong does not affect
consistency. Thus, by Theorem 6.2, no adjustment         is needed (i.e. G, = 0) if c(~ = 0.
This result is useful for constructing tests of whether these regressors belong, because

  41Differentiation   inside the expectation   is allowed   by Lemma   3.6.
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                    2181


it means that under the null hypothesis the test that ignores the first stage will have
asymptotically  correct size. These results can be confirmed by calculating




where n,(o) = di(v)/dv.    By inspection     this matrix is generally   nonzero,   but is zero if
a, = 0.


This criterion can also be applied to subsets of the second-step coefficients. Let S
denote a selection matrix such that SA is a matrix of rows of A, so that Se is a
subvector of the second-step coefficients. Then the asymptotic       variance of Se is
SC, ’ E[ {g(z) + G&(z)} {g(z) + G,$(z)}‘]G;   ‘S’, while the asymptotic variance that
ignores the first step is SC; ‘E[g(z)g(z)‘]G; 1S’. The general condition for equality
of these two matrices is


     0 = - SC,' G, = SV,B(y,) = V,[SB(y,)],                                                 (6.8)

where the second equality follows by eq. (6.7). This is a first-order version of the
statement that asymptotic variance of Skis affected by the first-step estimator if and
only if consistency of the first step affects consistency of the second. This condition
could be made precise by modifying Theorem 6.2, but for simplicity this modification
is not given here.


Sample selection continued: As is well known, if the correct and incorrect regressors
are independent      of the other regressors then including the wrong regressor only
affects consistency of the coefficient of the constant. Thus, the second-step standard
errors of the coefficients of nonconstant     variables in w will not be affected by the
first-step estimation if w and x are independent.


One can also derive conditions for the correct asymptotic variance to be larger or
smaller than the one that ignores the first step. A condition for the correct asymptotic
variance to be larger, given in Newey (1984), is that the first- and second-step
moment conditions are uncorrelated,      i.e.


     Gdz, &, xJm(z,YJI = 0.                                                                 (6.9)

In this case E[g(z)$(z)‘] = 0, so the correct variance is G; ’ E[g(z)g(z)‘]G;       I’ +
G; ‘~,WW$WlG;~,            “2which is larger, in the positive semi-definite sense, than
the one G; ‘E[g(z)g(z)‘]G;   ” that ignores first-step estimation.
2182                                                                        W.K. Newey and D. McFadden


Sump/e selection continued: In this example, E[y - w’fiO - cr,i(x’y,)l w, d = 1, x] = 0,
which implies (6.9). Thus, the standard error formula that ignores the first-step
estimation will understate the asymptotic standard error.

A condition   for the correct asymptotic   variance to be smaller                    than the one that
ignores the first step, given by Pierce (1982), is that

       m(z) = m(z, yO) = V, ln f(z I Q,, yd                                                         (6.10)

In this case, the identities Sm(z, ~)f(zl O,, y) dz = 0 and lg(z, 0,, y)f(z Id,, y) dz = 0 can
be differentiated    to obtain the generalized       information   matrix equalities M =
- E[s(z)s(z)‘] and G, = - E[g(z)s(z)‘]. It then follows that G, = - E[g(z)m(z)‘] =
- J%d4w’l I~c$wwl>                - l> so that the correct asymptotic             variance   is
 G; 1~Cg(4g(4’lG;’ - G; 'ECgWWl                { ~C+WW’l> - ‘-f%WsM’lG; “.                    This
variance is smaller, in the positive semi-definite sense, than the one that ignores the
first step.
    Equation (6.10) is a useful condition, because it implies that conservative asymp-
 totic confidence intervals can be constructed by ignoring the first stage. Unfortunately,
 the cases where it is satisfied are somewhat rare. A necessary condition for eq. (6.10)
 is that the information        matrix for Q and y be block diagonal, because eq. (6.10)
 implies that the asymptotic variance of y*is {E[m(z)m(z)‘]} - ‘, which is only obtainable
 when the information        matrix is block diagonal. Consequently,        if g(z, 8, y) were the
 score for 8, then G, = 0 by the information        matrix equality, and hence estimation
 of 9 would have no effect on the second-stage variance. Thus, eq. (6.10) only leads
 to a lowering of the variance when g(z, 8, y) is not the score, i.e. 8 is not an efficient
 estimator.
    One case where eq. (6.10) holds is if there is a factorization             of the likelihood
f(z ItI, y) = fl(z IB)f,(z Iy) and y^is the MLE of y. In particular, if fi (z 10)is a conditional
 likelihood     and f,(zl y) = fi(x 17) a marginal likelihood of variables x, i.e. x are
 ancillary to 8, then eq. (6.8) is satisfied when y*is an efficient estimator of yO.


6.3.    Consistent         asymptotic    variance   estimation   for two-step   estimators


The interpretation of a two-step estimator as a joint GMM estimator can be used
to construct a consistent estimator of the asymptotic   variance when G, # 0, by
applying the general GMM formula. The Jacobian terms can be estimated by
sample Jacobians, i.e. as


       60~n-l t v,g(ziy8,9),
                          Gy= 6’                          t V,g(Z,,BJ),ii = n-l i V,m(z,,y*).
                     i=l                                 i=l                                 i=l



The second-moment               matrix   can be estimated        by a sample second-moment         matrix
                                                                                     2183
Ch. 36: Larye Sample Estimation   and Hypothesis   Testing


di = y(zi, 8, y*)and Ai = m(z,, f), of the form fi= n- ‘x1= ,(& &i)‘(& &I). An estimator
of the joint asymptotic variance of 8 and 7 is then given by




An estimator of the asymptotic variance of the second step 8 can be extracted from
the upper left block of this matrix. A convenient expression, corresponding  to that
in Theorem 6.1, can be obtained by letting $i = - & l&z,, so that the upper left
block of ? is


                                                                                    (6.11)


If the moment functions are uncorrelated       as in eq. (6.9) so that the first-step
estimation increases the second-step variance, then for ?? = n- ‘Cy= 1JitJ:y an asymp-
totic variance estimator for 8 is


                                                                                    (6.12)


 This estimator is quite convenient, because most of its pieces can be recovered from
 standard output of computer programs. The first of the two terms being summed
 is a variance estimate that ignores the first step, as often provided by computer
 output (possibly in a different form than here). An estimated variance FYis also often
 provided by standard output from the first step. In many cases 6;’ can also be
 recovered from the first step. Thus, often the only part of this variance estimator
 requiring application-specific   calculation is eY. This simplification is only possible
under eq. (6.9). If the first- and second-step moment conditions are correlated then
one will need the individual observations      Gi, in order to properly account for the
covariance between the first- and second-step moments.
    A consistency result for these asymptotic variance estimators can be obtained by
applying the results of Section 4 to these joint moment conditions. It will suffice to
assume that the joint moment vector g(z, 0, y) = [m(z, y)‘, y(z, 0, r)‘]’ satisfies the
conditions of Theorem 4.5. Because it is such a direct application of previous results
a formal statement is not given here.
    In some cases it may be possible to simplify PO by using restrictions on the form
of Jacobians and variance matrices that are implied by a model. The use of such
restrictions   in the general formula can be illustrated      by deriving a consistent
asymptotic variance estimator for the example.
2184                                                                        W.K. Newey and D. McFadden


Sumple selection example continued: Let Wi = di[wI, /z(xIyo)]’ and %i = di[wI, i(.$j)]‘.
Note that by the residual having conditional    mean zero given w, d = 1, and x, it is
the case that G, = - E[diWiWJ and G, = - a,E[di~,,(xlyo)WiX11, where terms in-
volving second derivatives have dropped out by the residual having conditional
mean zero. Estimates of these matrices are given by ee = - x1= 1ki/iA~/~ and
G, = -oily= II.,(x~j)ii/,x~/n. Applying eq. (6.12) to this case, for ii = yi - W#‘, 3i)‘,
then gives




                                                                                                     (6.13)


where pY is a probit estimator of the asymp_totic_variance     of &(y - yO), e.g. as
provided by a canned computer program, and 17~ G; ‘Gy is the matrix of coefficients
from a multivariate  regression of c?%,(x~y*)xi
                                             on Wi. This estimator is the sum of the
White (1980) variance matrix for least squares and a correction term for the first-
stage estimation.42 It will be a consistent estimator of the asymptotic variance of
JII@ - do).43



7.     Asymptotic    normality with nonsmooth objective functions

The previous asymptotic normality results for MLE and GMM require that the
log-likelihood be twice differentiable and that the moment functions be once differenti-
able. There are many examples of estimators where these functions are not that
smooth. These include Koenker and Bassett (1978), Powell’s (1984, 1986) censored
least absolute deviations and symmetrically trimmed estimators, Newey and Powell’s
(1987) asymmetric least squares estimator, and the simulated moment estimators, of
Pakes (1986) and McFadden (1989). Therefore, it is important          to have asymptotic
normality results that allow for nonsmooth       objective functions.
   Asymptotic normality results for nonsmooth functions were developed by Daniels
(1961), Huber (1967), Pollard (1985), and Pakes and Pollard (1989). The basic insight
of these papers is that smoothness       of the objective function can be replaced by
smoothness of the limit if certain remainder terms are small. This insight is useful
because the limiting objective functions are often expectations        that are smoother
than their sample counterparts.

    4*Contrary to a statement given in Amemiya (1985), the correction term is needed here.
    43The normalization    by the total sample size means that one can obtain asymptotic         confidence
intervals as described in Section 1, with the n given there equal to the total sample size. This procedure
is equivalent to ignoring the n divisor in Section 1and dropping the n from the probit asymptotic variance
estimator (as is usually done in canned programs) and from the lead term in eq. (6.13).
Ch. 36: Large Sample Estimation and Hypothesis Testing                                     2185


  To illustrate how this approach works it is useful to give a heuristic         description.
The basic idea is the approximation

       &@)- e^,&)r &e - &J + Qo(4 - Qo(4J
                         E&e   - (3,) + (0 - O,)H(B - 8,)/2,
                                                                                          (7.1)

where 6, is a derivative, or approximate     derivative, of Q,,(e) at B,,, H = V,,Q,(B,),
and the second approximate     equality uses the first-order condition V,QO(e,) = 0 in
a second-order expansion of QO(0). This is an approximation        of Q,(e) by a quadratic
function. Assuming that the approximation      error is of the right order, the maximum
of the approximation    should be close to the true maximum, and the maximum of
the approxi_mation is 8 = B0 - H- ‘fi,,. This random yariable will be asymptotically
normal if D, is, so that asymptotic      normality    of 0 will follow from asymptotic
normality of its approximate    value 8.



7.1.    The basic results

In order to make the previous argument precise the approximation        error in eq. (7.1)
has to be small enough. Indeed, the reason that eq. (7.1) is used, rather than some
other expansion, is because it leads to approximation     errors of just the right size.
Suppose for discussion Purposes that 6,, = V&(6,), where the derivative exists with
probability one. Then Q,(e) - Q,(e,) - 6;(0 - 0,) goes to zero faster than 118- doI/
does, by the definition of a derivative. Similarly, QO(e) - QO(O,) goes to zero faster
than ((8 - 0, (([since V,Q,(B,) = 01. Also, assuming      that J%@,,(e) - Qo(@] is boun-
ded in probability    for each 8, as would typically      be the case when Q,(e) is made
up of sample averages, and noting that $0,       bounded in probability            follows by
asymptotic normality, it follows that the remainder term,


       k(e)   = JtrcOm      - O,w    - 6,te - 0,) - mv3        - ade,w    Ii 8 - e. II,   (7.2)

is bounded in probability for each 0. Then, the combination     of these two properties
suggests that l?,(e) goes to zero as the sample size grows and 8 goes to BO,a stochastic
equicontinuity   property. If so, then the remainder term in eq. (7.1) will be of order
oP( I/0 - 8, I//&    + II8 - 8, /I*). The next result shows that a slightly weaker condition
is sufficient for the approximation      in eq. (7.1) to lead to asymptotic normality of 8.

Theorem       7.1

Suppose that Q.(8) 2 supti&(@       - o&r- ‘), 8 A 8,, and (i) QO(0) is maximized on
@ at 8,; (ii) 8, is an interior point of 0, (iii) Qe(0) is twice differentiable  at 8,
2186                                                                    W.K. Newey   and D. McFadden


with nonsingular        second   derivative     H; (iv) &fi   5      N(O,Q;     (v) for any 6, +O,
s~p~~~-~,,,,,~~R,(e)/[l    + JnllO    - ~,I111 LO.     Then   &(e-        &J ~N(O,H-‘~H-‘).

The   proof of this result is given in Section 7.4. This result is essentially a version of
Theorem 2 of Pollard (1985) that applies to any objective function rather than just
a sample average, with an analogous method of proof. The key remainder condition
is assumption    (v), which is referred to by Pollard as stochastic diflerentiability. It is
slightly weaker than k,(O) converging         to zero, because of the presence of the
denominator      term (1 + & /I8 - 8, II)- ‘, which is similar to a term Huber (1967)
used. In several cases the presence of this denominator       term is quite useful, because it
leads to a weaker condition        on the remainder without affecting the conclusion.
Although assumption (v) is quite complicated, primitive conditions for it are avail-
able, as further discussed below.
   The other conditions are more straightforward._Consistency            can be shown using
Theorem 2.1, or the generalization      that allows for 8 to be an approximate maximum,
as suggested in the text following Theorem 2.1. Assumptions            (ii) and (iii) are quite
primitive, although verifying assumption (iii) may require substantial detailed work.
Assumption     (iv) will follow from a central limit theorem in the usual case where
6, is equal to a sample average.
   There are several examples of GMM estimators in econometrics where the moments
are not continuous      in the parameters, including the simulated moment estimators
of Pakes (1986) and McFadden (1989). For these estimators it is useful to have more
specific conditions than those given in Theorem 7.1. One way such conditions can
be formulated is in an asymptotic normality result for minimum distance estimators
where g,(e) is allowed to be discontinuous.       The following is such a result.

Theorem     7.2
Suppose that $,,(@I?o.(@ < info,0Q.(8)‘i@&(8) + o,(n-‘), 8-% 8,, and I? L W, W is
positive semi-definite, where there is go(e) such that (i) gO(O,) = 0; (ii) g,,(d) is differen-
tiable at B0 with derivative G such that G’WG is nonsingular;        (iii) 8, is an interior
point of 0; (iv) +g,(e,)         L   NO, z3; (v) for any 6, +        0, supllO- OolI
                                                                                  $6,&        II8,u4 -
$,(e,)-g&III/[1       +fiIIe-e,II]            LO.   Then   ,/“(k@wV[O,(G’WG)-‘G’R
WZWG       (G’WG)-‘1.

The proof is given in Section 7.4. For the case where Q,(e) has the same number of
elements as 8, this result is similar to Huber’s (1967), and in the general case is like
Pakes and Pollard’s (1989), although the method of proof is different than either of
these papers’. The conditions of this result are similar to those for Theorem 7.1. The
function go(e) should be thought of as the limit of d,(e), as in Section 3. Most of the
conditions are straightforward     to interpret, except for assumption (v). This assump-
tion is a “stochastic equicontinuity”       assumption   analogous    to the condition  (v)
of Theorem 7.1. Stochastic equicontinuity         is the appropriate    term here because
when go(e) is the pointwise          limit of $,,(e), i.e. d,(e) Ago(B)       for all 0, then for all
Ch. 36: Laryr Sample Estimation and Hypothesis   Testing                                     2187


8 # 8,, &    11Q,(O) - &,(8,) - go(H) II/[ 1 + Ji    )I0 - B. II] AO.   Thus, condition (v) can
be thought of as an additional requirement           that this convergence be uniform over
any shrinking neighborhood         of BO.As discussed in Section 2, stochastic equicontinuity
is an essential condition for uniform convergence.
   Theorem 7.2 is a special case of Theorem 7.1, in the sense that the proof proceeds
by showing that the conditions of Theorem 7.1 are satisfied. Thus, in the nonsmooth
case, asymptotic normality for minimum distance is a special case of asymptotic
normality for an extremum estimator, in contrast to the results of Section 3. This
relationship   is the natural one when the conditions are sufficiently weak, because a
minimum distance estimator is a special case of a general extremum estimator.
   For some extremum           estimators   where V,&,(0) exists with probability          one it
is possible to, use Theorem 7.2 to show asymptotic                 normality,    by setting i,,(e)
equal to V,Q,(@. An example is censored                   least absolute      deviations,  where
V,&(0) = n - l C;= 1xil(xj8 > 0)[ 1 - 2.l(y < x’e)]. However, when this is done there
is an additional      condition     that has to be checked, namely that )/V,Q,(0) )/* d
inf,, 8 11V,&(e) II2 + o,(n- ‘), for which it suffices to show that J&V&,(@ L 0. This
is an “asymptotic     first-order condition”      for nonsmooth   objective functions that
generally has to be verified by direct calculations.       Theorem 7.1 does not take this
assumption to be one of its hypotheses, so that the task of checking the asymptotic
first-order condition      can be bypassed by working directly with the extremum
estimator as in Theorem 7.1. In terms of the literature, this means that Huber’s
(1967) asymptotic first-order condition can be bypassed by working directly with
the extremum formulation         of the estimator, as in Pollard (1985). The cost of doing
this is that the remainder in condition (v) of Theorem 7.1 tends to be more compli-
cated than the remainder in condition (v) of Theorem 7.2, making that regularity
condition more difficult to check.
    The most complicated regularity condition in Theorems 7.1 and 7.2 is assumption
(v). This condition is difficult to check in the form given, but there are more primitive
conditions available. In particular, for Q,(0) = n ‘Cy= 1 q(z,, 8), where the objective
function is a sample average, Pollard (1985) has given primitive conditions              for
stochastic differentiability.   Also, for GMM where J,(0) = C;= i g(z, 0)/n and go(B) =
E[g(z, 0)], primitive conditions for stochastic equicontinuity       are given in Andrews’
(1994) chapter of this handbook.         Andrews (1994) actually gives conditions     for a
stronger result, that s~p,,~_~,,, da./% )Id,(0) - .&(0,) - go(e) 1)L 0, i.e. for (v) of
Theorem 7.2 without the denominator         term. The conditions described in Pollard
(1985) and Andrews (1994) allow for very weak conditions on g(z, 0), e.g. it can even
be discontinuous    in 8. Because there is a wide variety of such conditions, we do not
attempt to describe them here, but instead refer the reader to Pollard (1985) and
Andrews (1994).
   There is a primitive condition for stochastic equicontinuity     that is not covered in
these other papers, that allows for g(z, 8) to be Lipschitz at 0, and differentiable with
probability   one, rather than continuously     differentiable. This condition    is simple
but has a number of applications,     as we discuss next.
2188                                                                          W.K. Newey and D. McFadden



7.2.    Stochastic    equicontinuity     for Lipschitz     moment,functions

The following result gives a primitive condition for the stochastic equicontinuity
hypothesis of Theorem 7.2 for GMM, where Q,(e) = nP ‘Cy= 1g(Zi, 0) and go(O)=
ECg(z,
     @I.

Theorem      7.3

Suppose that E[g(z, O,)] = 0 and there are d(z) and E > 0 such that with probability                        one,
r(z, d) = IIdz, Q)- & 0,) - W(fl - 44 II/IIQ- 0, I/+ 0 as Q+ oo,~C~W,,,-,~,,Ccx
r(z,B)] < a,    and n- ‘Cr= 1d(zi) LE[d(z)].  Then assumptions   (ii) and (v) of
Theorem 7.2 are satisfied for G = E[d (z)].

Proof

For any E > 0, let r(z,E) = sup, o-00, BEIIr(z, 0) 11.With probability one r(z, E) + 0 as
E+ 0, so by the dominated     convergence    theorem, E[r(z, E)] + 0 as E+ 0. Then for
0 + 0, and s = IIQ- 4, II, IIad@- sd4) - (30 - 0,) I/= IIEC&, 0)- g(z,0,) - 44 x
(0 - O,)]11
          d E[r(z, E)] II0 - 0, /I+O, giving assumption (iii). For assumption (v), note
that for all (5’with /I8 - 0, I/ < 6,, by the definition        of r(z, E) and the Markov          inequality,
Jn  II4,(@- &(Ho)- go(@I//Cl + fi II0 - 0, II1 d Jn CIICY=1{d(zi) - EC&)1 } x
(0- f&)/nII + {C1=Ir(zi, Wn + ECr(z, S.)l > II0 - 00IIl/(1 + Jn II0 - 00II1d IICy=1
j A(zJ - J%A(z)lj/n II + ~,@Cr(z,%)I) JS 0.                                  Q.E.D.

The condition on r(z, Cl) in this result was formulated by Hansen et al. (1992). The
requirement     that r(z, 0) --f 0 as 8 + B0 means that, with probability    one, g(z, 19)is
differentiable with derivative A(z) at BO.The dominance condition further restricts
this remainder to be well behaved uniformly near the true parameter. This uniformity
property requires that g(z, e) be Lipschitz at B0 with an integrable Lipschitz constant.44
   A useful aspect of this result is that the hypotheses only require that Cr= 1A(zi) 3
E[A(z)], and place no other restriction on the dependence of the observations.         This
result will be quite useful in the time series context, as it is used in Hansen et al.
(1992). Another useful feature is that the conclusion includes differentiability    of go(e)
at B,, a “bonus” resulting from the dominance condition on the remainder.
   The conditions of Theorem 7.3 are strictly weaker than the requirement of Section
3 that g(z, 0) be continuously      differentiable in a neighborhood of B0 with derivative
that is dominated      by an integrable function, as can be shown in a straightforward
way. An example of a function that satisfies Theorem 7.3, but not the stronger
continuous    differentiability   condition, is the moment conditions corresponding       to
Huber’s (1964) robust location estimator.



  44For44    = SUPI~~~~,,~
                       < &tiz, 01, the triangle and Cauchy-Schwarz   inequalities   imply   1)~(z,o)- g(~,0,) I/<
Ill&) II + &)I II0 - 6, Il.
Ch. 36: Largr Sample Estimution and Hypothesis Testing                                     2189


Huher’s   robust locution estimator:    The first-order conditions for this estimator are
n~‘~~~,p(yi~~)=Oforp(c)=-l(cd-l)+l(-l~~~l)~+1(~31).Thisesti-
mator will be consistent for B0 where y is symmetrically        distributed around 8,. The
motivation for this estimator is that its first-order condition is a bounded, continuous
function of the data, giving it a certain robustness property; see Huber (1964). This
estimator is a GMM estimator with g(z, 0) = p(y - 0). The function p(c) is differen-
tiable everywhere except at - 1 or 1, with derivative P,(E) = l( - 1 < E < 1). Let
d(z)= -p,(y-U,).ThenforE=y-H,and6=H,-U,

       r(z, 0) = Ig(z, Q)- dz, RJ)- d (z)(fl~ 4J l/l Q- b I
             = IP(E+ 4 - PM - PEWI/ IdI
             =~[-1(E+6<-1)+1(&~-1)]+[1(E+~>1)-1(E~1)]

                +[l(-l<E+6<1)-1(-1<E<l)](E+S)1/1~1.

ForO<6<        1,

       r(z,~)=~1(-1-~<~d-1)+1(1-6d~<1)+[1(-1-~6~~-1)

                -l(l     -6<e<        l)](E+fi)I/lfil

              ~1(-6~E+1~0)(~+~E+1~)//~~+1(-~6~-1<0)(/&-1~+6)/~6~

              62[1(-6<E+            1 <O)+     l(-66E-   1<0)]<2.

Applying       an analogous      argument    for negative    - 1 d 6 < 0 gives r(z,O) <
2[l(lc-lId/6~)+l(le+lI~~6~)]d4.                  Therefore,    if   Prob(&=l)=O            and
Prob(& = - 1) = 0 then r(z, 0) + 0 with probability      one as 0 -+ 0, (i.e. as 6 -+ 0). Also,
r(z, fl) < 4. Thus, the conditions   of Theorem 7.3 are satisfied.

Other examples of estimators that satisfy these conditions are the asymmetric least
squares estimator of Newey and Powell (1987) and the symmetrically          trimmed
estimators for censored Tobit models of Powell (1986) and Honori: (1992). All of
these examples are interesting, and illustrate the usefulness of Theorem 7.3.



7.3.   Asymptotic      variance   estimation

Just as in the smooth case the asymptotic      variance of extremum and minimum
distance estimators contain derivative and variance terms. In the smooth case the
derivative terms were easy to estimate, using derivatives of the objective functions.
In the nonsmooth   case these estimates are no longer available, so alternatives must
be found. One alternative is numerical derivatives.
   For the general extremum       estimator of Theorem 7.1, the matrix H can be
2190                                                              W.K. Newey and D. McFadden


estimated by a second-order     numerical derivative of the objective function. Let e,
denote the ith unit vector, E, a small positive constant that depends on the sample
size, and fi the matrix with i, jth element

       fiij = [Q(o^+ eis, + ejs,) - Q(@- eis, + ejs,) - Q(@+ eie, - eje,)

             + Q(B- eis, - ejsn)]/4$.

Under certain conditions  on E,,, the hypotheses  of Theorem 7.1 will suffice for
consistency  of G for the H in the asymptotic    variance of Theorem 7.1. For a
minimum distance estimator a numerical derivative estimator G of G hasjth column

       Gj = [i(B + ejc,) - d(@
                             - eje,)]/2s,.

This estimator will be consistent    under the conditions    of Theorem     7.2. The following
result shows consistency:

Theorem 7.4

Suppose that E, + 0 and E,,& + co. If the conditions  of Theorem 7.1 are satisfied
then fi AH.  Also, if the conditions of Theorem 7.2 are satisfied then G 5 G.

 This result is proved in Section 7.4. Similar results have been given by McFadden
(1989), Newey (1990), and Pakes and Pollard (1989).
    A practical problem for both of these estimators is the degree of difference (i.e.
 the magnitude of s,) used to form the numerical derivatives. Our specification of the
same E, for each component is only good if 6 has been scaled so that its components
have similar magnitude. Alternatively, different E, could be used for different compo-
 nents, according to their scale. Choosing the size of&,, is a difficult problem, although
analogies with the choice of bandwidth for nonparametric           regression, as discussed
 in the chapter by Hardle and Linton (1994), might be useful. One possibility is to
graph some component          as a function of E, and then choose E, small, but not in a
region where the function is very choppy. Also, it might be possible to estimate
variance and bias terms, and choose E, to balance them, although this is beyond the
scope of this chapter.
    In specific cases it may be possible to construct estimators that do not involve
numerical differentiation. For example, in the smooth case we know that a numerical
derivative can be replaced by analytical derivatives. A similar replacement is often
possible under the conditions        of Theorem 7.3. In many cases where Theorem 7.3
applies, g(z,@ will often be differentiable      with probability    one with a derivative
V,g(z, 0) that is continuou_s in 8 with probabil$y one and dominated by an integrable
function. Consistency of G = n- ‘Cy= 1V,g(z, 0) will then follow from Lemma 4.3. For
example, it is straightforward     to show that this reasoning applies to the Huber loca-
tionestimator,withV,g(z,O)=-1(-1~y-~<l)and~=~~~,1(-l~yi-~~l)/n.
Ch. 36: Lurye Sample Estimation     and Hypothesis    Testing                                            2191


   Estimation   of the other terms in the asymptotic         variance of 8 can usually be
carried out in the way described in Section 4. For example, for GMM the moment
function g(z,fI) will typically be continuous          in 8 with probability  one and be
dominated     by a square integrable      function, so that Lemma 4.3 will imp_ly the
consistency of fi = Cr= 1 g(zi, 6)g(zi, @‘/II. Also, extremum estimators where Q,(0) =
nP ‘Cr= lq(z, U), q(z, 0) will usually be differentiable almost everywhere, and Lemma
4.3 will yield consistency of the variance estimator given in eq. (4.1).



7.4.    Technicalities

Because they are long and somewhat complicated,                      the proofs of Theorems         7.1,7.2,
and 7.4 are given here rather than previously.

Proof of Theorem         7.1

Let Q(e) = Q,(e) and Q(0) = Qo(@. First it will be proven                     that $118     - 8, /I = O,(l),
i.e. that 8is “&-consistent”.   By Q(0) having a local maximum at 8,, its first derivative
is zero at O,, and hence Q(0) = Q(0,) + (0 - 8,)‘H(fI - (!I,)/2 + o( /I 0 - 8, II2). Also, H
is negative definite by fI,, a maximum and nonsingularity      of H, so that there is C > 0
and a small enough neighborhood        of B0 with (t9 - 8,)‘H(B - 8,)/2 + o( 110- 8,II 2, <
 - C 110- 0, I/2. Therefore, by 8 A 8,, with probability       approaching   one (w.p.a.l),
Q(8)< Q(d,) - C II& 8, II2. Choose U, so that 8~ U, w.p.a.1, so that by (v) $I&Q),I                        <
(1 +~IIo^-~oll)~pu).

0 d &6) - &I,)       + o&n- ‘) = Q(8) - Q&J + 6’(&                   0,) + 116     @,,I1i?(6) + o&n-‘)

  d -C/18-8,112+               llfil( l&e,11 + Ile-e,11(1         +Jni18-8,/1)o,(n-l’2)+Op(lZ-‘)

  d -CC+o,(l)]1~8-e,112+0,(n-“2)11~-~o~I                           +o,(n?).

Since C + ~~(1) is bounded away from zero w.p.a.1, it follows that /I6- 8, (I2 <
O&n- 1’2)II8 - 0, II + o&n- ‘), and hence, completing the square, that [ iI&- 8, II +
0plnm”2)]2 < O&K’).         Taking the square root of both sides, it follows that
I lld- Boll + O,(n- 1’2)ld O,(n- ‘12), so by the triangle inequality, 11G-S,, 11<I Il8-0,l~ +
0,(n-1’2)1   + 1- 0,(n-1’2)l        6 0,(n-1’2).
   Next, let e”= H,, - H- ‘6, and note that by construction                   it is $-consistent.     Then
by &-consistency          of 8, twice differentiability         of Q(0), and (v) it follows that

       2[Q(8) - Q(0,) + Q&J]           = (s - &J’H(o^ - Q,) + 26’(8 - 0,) + o&n- ‘)

                                       =(8-Q,)‘H(&-&)-2(8”-8,)‘H&8,)+0&n-’).

Similarly,     2[!j(&     - f&O,) + Q(&)]          = (8 - O,,)‘H@ - e,,) + 26’(8 - 0,) + ~,(n- l) =
2192                                                                          W.K. Nwry     und D. McFadden


-(H”- H,)‘H(& H,) + o,(nP1). Then since 0” is contained            within   0 w.p.a.1,
2[&8)-   Q^(e,) + Q(e,)] -2[&&    ~ dc!IO) + Q(fI,)] > o&n- ‘), so by the last equation
and the corresponding    equation for 0,

         o,(nP’)   < (e-     H,)‘H(8-   0,) - 2(H1- 8,)‘H(8-       e,) + (S-     e,)%@-         0,)
                   =(H^-@H(H^-G)&           -CIIo^-el[‘.

Therefore,         ((Jr1(6 - 0,) ~ ( - H - ‘Jr&)      jl = fi    Ij8 - 811% 0, so the conclusion

follows by - H-‘&6                -+d N(0, H   ‘flH _ ‘) and the Slutzky         theorem.             Q.E.D.

Proof of Theorem 7.2

Let g(0) = d,(0) and y(8) = go(B). The proof proceeds by verifying the hypotheses of
Theorem 7.1, for Q(0) = - g(H)‘Wy(0)/2, Q(0) = - 4(tI)‘f?‘4(@/2 + d^(@, and d^(B)
equal to a certain function specified below. By (i) and (ii), Q(0) = - [G(e - 19,) +
4 II6’ - 41 II)I’WG(@- 41)+ o(II   0 - ‘JoII)I/2 = Q(6.J+ (0- ‘AJ’W~- 4JP +
o(/IB- 0, )/2),for H = - G’ WC and Q(0,) = 0, so that Q(0) is twice differentiable at
do. Also, by W positive semi-definite and G’ WC nonsingular,    H is negative definite,
implying that there is a neighborhood     of 8, on which Q(0) has a unique maximum
(of zero) at 6’= BO. Thus, hypotheses (i)-(ii) of Theorem 7.1 are satisfied. By the
Slutzky theorem, 6 = - G’@$g(0,)            % N(0,0) for B = G'WZ WC, so that hypo-
thesis (v) of Theorem 7.1 is satisfied. It therefore remains to check the initial supposi-
tion and hypothesis (v) of Theorem 7.1.
       Let e(0) = [Q(H) - .&fI,) - g(H)]/[ 1 + $11         H - 8, I/1. Then




Let       4?(e) = - 4(@‘@&@)/2 + &(6)‘$6(6)/2 + ~(8,)‘%6((8).                  For    any       6, + 0,    by
(v), ~~P,,e-so,,~a,IQ1(~)-~-~(~)‘~~(~)/~~l~~,(~)s~P,,,_,“,,,,“{llE*(~)I/ ll4Qll+
O&l - 1’2))= o&n- ‘), so that by (9, o(6) 3 SU~,,~_~,,,G,,&I) - o&n-‘). Thus,
the initial supposition of Theorem 7.1 is satisfied. To check hypothesis                       (v), note that
by E*(e,)= 0, for i(0) as defined above,


&I k(e)lC1          II1Id t pj(e),
         + & III9- UC3

r^I(4 = JG&                II0 - 8, II + II0 - &I II2)lE*(mq~)I/[ IIH - 8” I/(1 ;t J”           )I8 - 8, II)],

f2(4      =   hICs(@ + G(Q- 4@‘iW,)llII IIQ- 0, II(1 + &                      110- fl, II)],
Ch. 36: Large Sample Estimation and Hypothesis          Testing                                        2193


f3(@ = n I Cd@ + 44mm)                   l/(1 + 4       II 0 - 0, II),

tde) = JliIg(e)f~~(e)I/lle-eoii,



Then for 6,-O           and U = (0: j(8-0,ll       <<s,,}, sup,F,(e)6Cn.sup,l(~((B)(1211     till =0,(l),
sup,p,(e)d~sup,{0(lie               - e,ii)ii @II iw,)ii
                                                       =WW(II~       - 4mw           = 0,(u
~~P,ww      ~~uPu~li~(e)l~iJTIlie-eOll)+JtIil~(eo)~l~~~             ~ll~~~,JIS~w~~l~
{SUpa~(l~e-eolo+~,(l))o,(l)=o,(l),             ~~~,r*,(~~~~~~,i(li~(~~l~il~e-~oli~ll~~~
~~h&llwl~       = 0,(l), and sw,(e)          6 ~~P,(lk7(eWile       - eol12)il@ - w = 0,(l).
                                                                                                  Q.E.D.


Proof of Theorem 7.4

Let a be a constant vector. By the conclusion                 of Theorem   7.1, II8 + a&,- do I( = O,,(E,).
Then by hypothesis (v),


         + &,,a)- &4J - Q@ + q) + Q&J I
     Io(e^
            d /I6 + aEn- e. I/ [I JW + w)l + IIfi II IIe+ a&,- 0, II1
            ~qJ(~,){u +Jw+               &,a- doII)qdll&) + O&,l&))                  = O&,Z)~

Also, by twice differentiability             of Q(0) at 8,,


     IE,~[Q(~+
            &,a) - Q(O,)] -a’Ha/2(

            = IE; 2[(6 + &,a-      e,)viq6     + &,a- e,)/2 + o( I/8 + &,a - 8,1)“)] - a’Ha/21
            G jq1(f9-     O,)‘Ha( + lE;2(&          e,yH@-        e,)l + 0,(l) = 0,(i).

It then follows by the triangle          inequality      that


     fiij   3 [2(ei + ej)‘H(ei + ej) - (ei - ej)‘H(ei - ej) - (ej - eJ’H(ej - eJ]/8
            = 2[eiHe, + e;Hej - ejHe, - eJHej]/8 + eiHej

            = eiHej = Hi,,

giving the first conclusion. For the second_conclusion,    it follows from hypothesis (v)
of Theorem 7.2, similarly to the proof for H, that /IJ(fl + c,a) - Q(O,)- g(t?+ &,a)(I <
(1 +,& I/8 + &,,a- 0, I()0&n,- li2) = O&E; ‘), and by differentiability      of g(0) at B0 that
 /Ig(d + q,a)/c,, - Ga I/ d /I G(B - f&)/c, 11+ O(E; l I/8 + Ena- do )I) = op( 1). The second
conclusion then follows by the triangle inequality.                                     Q.E.D.
2194                                                                           W.K. Nrwev and D. McFadden


8.      Semiparametric       two-step estimators

Two-step estimators where the first step is a function rather than a finite-dimensional
parameter, referred to here as semiparametric       two-step estimators, are of interest
in a number of econometric      applications. 45 As noted in Section 5, they are useful
for constructing   feasible efficient estimators   when there is a nuisance function
present. Also, they provide estimators for certain econometric parameters of interest
without restricting functional form, such as consumer surplus in an example discus-
sed below. An interesting  property of these estimators   is that they can be Jn-
consistent, even though the convergence rate for the first-step functions is slower
than fi.    This section discusses how and when this property holds, and gives
regularity conditions for asymptotic      normality of the second-step estimator. The
regularity conditions   here are somewhat more technical than those of previous
sections, as required by the infinite-dimensional   first step.
   The type of estimator to be considered here will be one that solves


         n- l t g(zi, 8, 9) = 0,
              i=l


where f can include infinite-dimensional    functions and g(z, 0, y) is some function of
a data observation    z, the parameters of interest 0, and a function y. This estimator
is exactly like that considered in Section 6, except for the conceptual difference that
y is allowed to denote a function rather than a finite-dimensional         vector. Here,
g(z,U,y) is a vector valued function of a function. Such things are usually referred
to as functionals.
   Examples are useful for illustrating how semiparametric     two-step estimators can
be fit into this framework.

 V-estimators: Consider a simultaneous       equations model where the residual p(z, d)
is independent     of the instrumental   variables x. Let u(x,p) be a vector of func-
tions of the instrumental     variables and the residual p. Independence      implies that
EC~{x,pk4,)]1 = ECSajx,p(Z,e,)}dF,(P)Iwhere F,(z) is the distribution                 of a
single observation.    For example, if a(x,p) is multiplicatively   separable, then this
restriction is that the expectation of the product is the product of the expectations.
This restriction can be exploited by replacing expectations with sample averages and
dF(Z) with an estimator, and then solving the corresponding       equation, as in


                                                                                                           (8.2)

where m(z,, z2, 0) = a[~,, p(z,, Q)] - a[~,, p(z,, O)]. This estimator                  has the form given

     45This terminology   may not be completely   consistent   with Powell’s chapter   of this handbook.
Ch. 36: Large Sample Estimation   and Hypothesis   Testing                                     2195



in eq. (8.1), where y is the CDF of a single observation,          y(z, 0, y) = s m(z, F,O)dy(F),
and $ is the empirical distribution        with y(f) = Cr=, l(zi < 5)/n. It is referred to as a
V-estimator      because double averages like that in eq. (8.2) are often referred to as
V-statistics [Serfling (1980)]. V-statistics are related to U-statistics, which have been
considered in recent econometric literature [e.g. Powell et al. (1989) and Robinson
(1988b)] and are further discussed below.
   The general class of V-estimators         were considered in Newey (1989). If a(x,p) is
multiplicatively    separable in x and p then these estimators just set a vector of sample
covariances equal to zero. It turns out though, that the optimal u(x, p) may not be
multiplicatively     separable, e.g. it can include Jacobian terms, making the generaliza-
tion in eq. (8.2) of some interest. Also, Honor6 and Powell (1992) have recently
suggested estimators that are similar to those in equation (8.2), and given conditions
that allow for lack of smoothness of m(z,, z2, H) in fl.

 Nonpurumetric      approximate    consumer surplus estimation:       Suppose that the demand
 function as a function of price is given by h,(x) = E[qlx], where 4 is quantity
 demanded and x is price. The approximate              consumer surplus for a price change
 from a to h is Ii,h,(x)dx. A nonparametric       estimator can be constructed by replacing
 the true condttronal expectation by a nonparametric            estimator. One such is a kernel
 estimator     of the form i(x) = EYE 1q&&x - xi)/C;= 1K,(x - xi), where K,(u) =
 a-‘K(o/a), r is the dimension of x, K(u) is a function such that JK(u)du = 1, and 0
 is a bandwidth      term that is chosen by the econometrician.             This estimator     is a
 weighted average of qi, with the weight for the ith observation            given by K,(x - xi)/
cjn= 1K,(x - xj). The bandwidth 0 controls the amount of local weighting and hence
the variance and bias of this estimator. As 0 goes down, more weight will tend to
be given to observations        with Xi close to x, lowering bias_, but raising variance by
giving more weight to fewer observations.           Alternatively,   h(x) can be interpreted as
a ratio estimator, with a denominator           j(x) = n-l Cr= 1K,(x - xi) that is an esti-
mator of the density of x. These kernel estimators are further discussed in Hardle
and Linton (1994).
    A kernel estimator of h,(x) can be used to construct a consumer surplus estimator
of the form t?=isi(x)dx.          This estimator     takes the form given in eq. (8.1), for
y = (r,, y2) where yr(x) is a density for x, yz(x) is the product of a density for x and
a conditional     expectation     of y given x, g(z, 8, y) = Jf:[Y2(x)IY1(x)]dx - 6, y,(x) =
n- ‘Cy= 1 K,(x - xi) and f2(x) = K’ x1= 1q,KJx - xi). This particular specification,
where y consists separately of the numerator and denominator               of i(x), is convenient
in the analysis to follow.

In both ofthese examples there is some flexibility in the formulation    of the estimator
as a solution to eq. (8.1). For V-estimators,        one could integrate over the first
argument in a[~,, p(z,, 0)] rather than the second. In the consumer surplus example,
one could set y = h rather than equal to the separate numerator        and denominator
terms. This flexibility is useful, because it allows the estimator to be set up in a way
2196                                                                        W.K. Newey and D. McFadden


that is most convenient     for verifying the regularity     conditions   for asymptotic
normality.
   This section will focus on conditions   for asymptotic      normality,  taking consis-
tency as given, similarly to Section 6. Consistency can often be shown by applying
Theorem 2.1 directly, e.g. with uniform convergence       resulting from application     of
Lemma 2.4. Also, when y(z, 0, y) is linear in 0, as in the consumer surplus example,
then consistency is not needed for the asymptotic normality arguments.



8.1.   Asymptotic           normality    and consistent   variance estimation

To motivate           the precise results to be given, it is helpful to consider            an expansion
for 8. Expanding            eq. (8.1) and solving    for $(@-      0,) gives


       Ji(8-          0,) = -      n-l                                              YCz,   Y) =   g(Z,   003    y),


                                                                                                               (8.3)

where e is the mean value. The usual (uniform) convergence             arguments,  when
combined       with consistency     of e and y*, suggest that 6’ x1= 1V,g(zi, e, 9) 3
E[V,g(z,tI,,y,)]      = G,. Thus, the behavior of the Jacobian term in eq. (8.3) is not
conceptually      difficult, only technically difficult because of the presence of non-
parametric estimates. The score term C;= r g(zi, y”)/& is much more interesting and
difficult. Showing asymptotic normality requires accounting for the presence of the
infinite-dimensional     term 7. Section 6 shows how to do this for the finite-
dimensional      case, by expanding    around the true value and using an influence
function representation      for 9. The infinite-dimensional  case requires a significant
generalization.     One such is given in the next result, from Newey (1992a). Let 11    y /I
denote a norm, such as ~up~+~~ /Iy(x) I/.


Theorem 8.1

Suppose that EC&, YJI = 0, ECIIdz, 14 II21 < co, and there is 6(z) with E[G(z)] = 0,
E[ II6(z)l12] < co, and (i) (linearization)  there is a function    G(z,y - yO) that is
linear in y - ye such that for all y with IIy - y. II small enough, IIg(z, y) - g(z, ye) -
G(z, y - yO)II d b(z) IIy - y. II2, and E[b(z)]&            11
                                                             y*- y. II2 3   0; (ii) (stochastic      equicon-
tinuity) C;= 1 [G(zi, y^- yO) - j G(z, $ --?/O)dFo]/fi 3 0; (iii) (mean-square differen-
tiability) there is 6(z) and a measure F such that EC&z)] = 0, E[ II6(z) II2] < co and
for all IIy - y. I/ small enough, JG(z, y*- Ye)dF, = !6(z)dF; (iv) for the empirical
distribution           F [F(z) = n- ‘C;= 1 l(z, d z)],      &[j&z)dF        - S6(z)dF]       -%O.         Then
Cy= 1 Stzi7    7)/J    n3       N(0, f2), where R = Var [g(zi, yO) + 6(zi)].
Ch. 36: Large Sumple Estimation   und Hypothesis   Testing                                       2197



Proof

It follows by the triangle        inequality    that Cr= 1[g(zi> y*)- g(Zi, ~0) - S(Zi)]/Ji    JL 0,
and by the central     limit theorem      that Cy= 1[g(Zi, yo) + 6(Zi)]/&      A   N(O, 0).
                                                                                              Q.E.D.


This result is just a decomposition            of the remainder   term Cr= I g(Zi>
                                                                                 p)/,,h- EYEI
Cdzi~0)+ &zJll&            As will be illustrated
                                           for the examples, it provides a useful
outline of how asymptotic normality of a semiparametric     two-step estimator can
be shown. In addition, the assumptions of this result are useful for understanding
how Cr= 1dzi, Y”)lJ n can have a limiting distribution,            even though y*is not fi-
consistent.
    Assumption(i)     requires that the remainder term from a linearization          be small. The
remainder term in this condition is analogous to g(z, y) - g(z, yO)- [V,g(z, y,J](y - yO)
from parametric,       two-step estimators.       Here the functional    G(z, y - ye) takes the
place of [V,g(z, yO)](y - yO). The condition on this remainder requires either that it
be zero, where b(z) = 0, or that the convergence           rate of 9 be faster than npii4, in
terms of the norm /Iy /I. Often such a convergence rate will require that the under-
lying nonparametric          function satisfy certain smoothness       restrictions,    as further
discussed in Section 8.3.
    Assumption (ii) is analogous to the requirement for parametric two-step estima-
tors that {n ‘C;= 1V,g(zi, y,,) - E[V,g(z, y,-J] I(? - ye) converge to zero. It is referred
to as a stochastic equicontinuity         condition for similar reasons as condition (v) of
Theorem 7.2. Andrews (1990) has recently given quite general sufficient conditions
for condition (ii). Alternatively,     it may be possible to show by direct calculation that
condition (ii) holds, under weaker conditions than those given in Andrews (1990).
For example, in the V-estimator example, condition (ii) is a well known projection
result for V-statistics (or U-statistics), as further discussed in Section 8.2. For kernel
estimators, condition (ii) will follow from combining a V-statistic projection and a
condition that the bias goes to zero, as further discussed in Section 8.3.
   Both conditions       (i) and (ii) involve “second-order”      terms. Thus, both of these
conditions are “regularity conditions”, meaning that they should be satisfied if g(z, y)
is sufficiently smooth and y*sufficiently well behaved. The terms in (iii) and (iv) are
“first-order” terms. These conditions are the ones that allow I;= 1 g(z, y^)/Ji         to be
asymptotically     normal, even though y^may converge at a slower rate. The key
condition is (iii), which imposes a representation     of JG(z, y*- ye)dF, as an integral
with respect to an estimated measure. The interpretation         of this representation     is
that [G(z, jj - y,JdF, can be viewed as an average over some estimated distribution.
As discussed in Newey (1992a), this condition is essentially equivalent to finiteness
of the semiparametric      variance bound for estimation       of J G(z, y - yo)dF,. It is
referred to as “mean-square        differentiability” because the representation       as an
integral lG(z)dF(z, y) means that if dF(z, y) 1’2 has a mean-square        derivative then
2198                                                                         W.K. Newey and D. McFadden


{G(z)dF(z, y) will be differentiable  in y, as shown in Ibragimov    and Has’minskii
(1981). This is an essential condition for a finite semiparametric variance bound, as
discussed in Van der Vaart (1991), which in turn is a necessary condition          for
Jn-consistency       of j G(z, y*- yo)dF,.         If jG(z,$   - yo)dF,     cannot     be viewed      as an
average    over an estimated       distribution,       then it will not be &-consistent.              Thus,
condition (iii) is the key one to obtaining &-consistency.
  Condition     (iv) requires that the difference between the estimator          F and the
empirical distribution    be small, in the sense of difference of integrals. This condition
embodies a requirement       that p be nonparametric,       because otherwise it could not
be close to the empirical measure. For kernel estimators it will turn out that part
(iv) is a pure bias condition, requiring that a bias term goes to zero faster than l/fi.
For other estimators this condition may not impose such a severe bias requirement,
as for the series estimators discussed in Newey (1992a).
   An implication of conditions (iii) and (iv) is that Jil@z)d(F - F,) = JG(z)d&.
(6 -F,)  converges in distribution    to a normal random vector, a key result. An
alternative   way to obtain this result is to show that fi(@ - F,) is a stochastic
process that converges in distribution        in a metric for which !6(z)d(*) is continuous,
and then apply the continuous          mapping theorem. 46 This approach is followed in
Ait-Sahalia (1993).
   One piece of knowledge that is useful in verifying the conditions of Theorem 8.1
is the form of 6(z). As discussed in Newey (1992a), a straightforward                   derivative
calculation   is often useful for finding 6(z). Let v denote the parameters               of some
general distribution      where q0 is equal to the truth, and let y(q) denote the true value
of y when 7 are the true parameters.            The calculation       is to find 6(z) such that
V,jg[z, y(q)] dF, = E[S(z)Sh], where the derivative is taken at the true distribution.
The reason that this reproduces the 6(z) of Theorem 8.1 is that condition (i) will
imply that V,Jg[z, y(q)]dF, = V,lG[z, y(q) - yo]dF, [under the regularity condition
that /Iy(q) - y 11is a differentiable function of y], so (iii) implies that V,sg[z, Y(q)]dF, =
V,jG(z)dF(q) = E[S(z)Sk]. This calculation is like the Gateaux derivative calculation
discussed in Huber (1981), except that it allows for the distributions          to be continuous
in some variables. With 6(z) in hand, one can then proceed to check the conditions
of Theorem 8.1. This calculation is even useful when some result other than Theorem
8.1 is used to show asymptotic           normality,   because it leads to the form of the
remainder   term Cr= 1 [g(zi, $) - g(zi, yO) - 6(zi)]/fi     that should be small to get
asymptotic normality.
   Theorem 8.1 can be combined with conditions for convergence of the Jacobian
to obtain conditions for asymptotic normality-of         4, as in the following result.




  46The continuous   mapping   theorem   states that if Y(n) AZ   and h(y) is continuous   on the support   of
Z then hLY(n)] Ah(Z).
Ch. 36: Large Sample Estimation   and Hypothesis       Testing                                 2199



Theorem    8.2

If 8% O,, the conditions      of Theorem 8.1 are satisfied, and (i) there are a norm
(1y 11,E > 0, and a neighborhood       .Af of 8, such that for IIy - y. II small enough,
sup& Ir IIv&Y(z,@,Y) - v&dzi, @,YO)II d Nz) IIY - YO IHEand E[b(z)] 11y*- y0 11’3 0; (ii)
V,g(z,,fI, yO) satisfies the conditions    of Lemma 4.3; (iii) G, is nonsingular;    then
Jr@     - 0,) % N(0, c; ‘RG,            I’).

Pr#Of

It suffices to show that IZ- ‘Cy=, V&z,, 6! 9) 3 G,, because then the conclusion will
follow from the conclusion of Theorem 8.1, eq. (8.3), and arguments like those of
Section 3. Condition    (i) implies that [x1= 1b(zi)/n] I/y^- y0 11’% 0 by the Markov
inequality,   SO n~'Cr=,(/V,g(Zi,8,y^)-V,g(zi,8,y,)(l   ~[n-lC1=Ih(Zi)]Ilp-y,ll"~O.
Also, by the conclusion        of Lemma 4.3, II- ’ xy= 1Veg(zi, & yO)A G,. The conclusion
then follows by the triangle        inequality.                                            Q.E.D.

This result provides one set of sufficient conditions for convergence of the Jacobian
term. They are specified so as to be similar to those of Theorem 8.1, involving a
norm for y. In particular cases it may be useful to employ some other method for
showing Jacobian       convergence,   as will be illustrated  in Section 8.2. A similar
comment applies to the consistency condition. Consistency can be shown by impos-
ing conditions like (i) and (ii) to give uniform convergence of an objective function,
but this result will not cover all cases. In some cases it may be better to work directly
with Theorem 2.1 to show consistency.
   The asymptotic variance of a semiparametric        two-step estimator is Gi ‘flG; “.
As usual, a consistent estimator can be formed by plugging in estimators of the
different pieces. An estimator of the Jacobian term can be formed in a straight-
forward way, as


      CB= n l i         v,g(zi, f7,g.
                  i=l




Consistency of GBfor G, will follow under the same conditions as used for asymptotic
normality of I!?,because of the need to show consistency of the Jacobian matrix in
the Taylor expansion. The more difficult term to estimate is the “score” variance 0.
One way to estimate this term is to form an estimator g(z) of the function 6(z) that
appears in the asymptotic variance, and then construct


      ’ = Iz~ ’ ~ {g(Zi, e,B) + I}             (g(Z,   e,y*)+ I}'.                             (8.5)
                 i=l



An estimator     of the asymptotic         variance      can then be formed as G;’   fiG; “.
2200                                                                   WK.      Newey         and D. McFadden


   It is difficult at this level of generality to give primitive conditions for consistency
of a variance estimator, because these will depend on the nature of 6(z). One useful
intermediate      result is the following one.

Lemma      8.3

If the conditjons of Theorem 8.1 are sati_sfied, xy= 1 11g(Zi,     6, f)    -   g(Zi,   8,,    yo)   11‘/n   5   0,
and C;= 1 11  6(zi) - d(zi) II2/n L 0, then fi L 0.

Proof
Let zii = g(zi, 8, 7) + J(zi) and ui = g(zi, 8,, yO) + 6(zJ, so that fl= E[uiuIl and 8 =
~1~ 1ti,ti:/n. By the assumptions     and the triangle inequality, x1= 1 IIfii - UCII2/n 11,~).
Also, by the LLN, x1= 1uiui/n -S E[UiUi]. Also, IIx1= 1riirii/n - Cy= 1u&/n II d
CyzI ~Iliiri~-UiU~ll/n <Cy=l llrii-“iI12/n+2C~=1  /I”iI//I~i-“iIllndC~=~IItii-uil12/
n + z(Cy, 1IIuiII2/nP2E1= 1IIhi - ui II‘/n)II2 3 0, because convergence of the diag-
onal elements     of Cl= 1uiuI/n implies that Cy= 1 /IUi I/2/n is bounded               in probability.
                                                                                                   Q.E.D.

Powell et al. (1989) use an analogous intermediate       result to show consistency      of
their variance estimator.      More primitive conditions    are not given because it is
difficult to specify them in a way that would cover all examples of interest.
    These results provide a useful way of organizing and understanding        asymptotic
normality    of semiparametric    two-step estimators. In the analysis to follow, their
usefulness will be illustrated by considering V-estimators and estimators where the
first step is a kernel estimator. These results are also useful in showing asymptotic
normality    when the first step is a series regression estimator,     i.e. an estimator
obtained from least squares regression of some dependent variable on approximat-
ing functions. The series estimator case is considered in Newey (1992a).


8.2.     V-estimators


A V-estimator, as in eq. (8.2), is useful as an illustration     of the results. As previously
noted, this estimator has g(z, y) = J m (z, Z,8,)dy(?), and y*is the empirical distribution
with p(5) = x1= 1 l(zi d 5)/n. For this estimator,        condition    (i) of Theorem 8.1 is
automatically   satisfied, with b(z) = 0 because g(z, y) is linear in y. Condition (ii) needs
to be verified. To see what this condition means, let m(z,, z2) = m(z,, z2, fl,), ml(z) =
Sm(z, ?)dF,(Z), m2(z) = Im(z”, z)dF,(Z), and p = j~m(z,~)dF,(z)dF&).             Then


        i$l CG(zi, $ - ~0) - J G(z, Y*- ~dd~J/~n


          =&{n~li~l[n~’
                  Ii          I[
                        ml(Zi) -
                                 j=l
                                       m(ZhZj)   -           n-l       i;. m2(zi) - p
                                                                      i=l                        II
Ch. 36: Lurge Sample Estimation and Hypothesis           Testing                                  2201




It will follow from U- and V-statistic theory that this remainder term is small.
    A U-statistic has the form fi = np ‘(n - I)- ’ xi< ja(zi, zj), where u(z,, z2) = a(~,, zJ.
A V-statistic has the form p = II-’ C;= IC;= I m(z,, zj). A V-statistic is equal to a
U-statistic    plus an asymptotically    negligible term, as in p = n-‘CF,        1 Pn(Zi, Zi) +

[(n - 1)/n] 6, where a(~,, zj) = m(zi, zj) + m(zj, zi). The lead term, n-‘Cr,    1m(z,, Zi) is a
negligible “own observations”      term, that converges in probability to zero at the rate
 l/n as long as E[m(z,, zi)] is finite.
    The condition that the remainder term in eq. (8.6) have probability         limit zero is
known as the projection theorem for U- or V-statistics. For a U-statistic,                a(z) =
fu(z, Z)dF,(Z), and E[c?(z)] = 0, the projection theorem states if the data are i.i.d. and
u(z,,z,)  has finite second moments,            then &[C? - np ‘Cr= 1a(        LO, where
n-‘CrZl   a-( z J 1s re ferred to as the projection of the U-statistic on the basic obser-
vations; see Serfling (1980). The V-statistic projection          theorem states that the
remainder in eq. (8.6) converges in probability        to zero. The V-statistic projection
theorem is implied by the U-statistic projection theorem, as can be shown in the
following way. Let a(~,, z2) = m(z,, z2) + m(z,, zl) - 2~~ so


          n-‘t             i,   [Wl(zi~zj)-~]="~zi~l       [m(Zi,Zi)-~]+[(I1-1)/11]~.
                 i=l     j=l




The first term following the equality should be negligible. The second term following
the equality is a multiple of the U-statistic, where the multiplying constant converges
to 1. Furthermore,     a(z) = ml(z) + m2(z) - 2~ in this case, so the projection  of the
U-statistic   on the basic observations     is n-l x1= 1[ml(zi) + m*(Zi) - 2~1. The U-
statistic projection theorem then implies that the remainder in eq. (8.6) is small.
Thus, it will follow from eq. (8.6) and the U-statistic         projection    theorem that
condition (ii) of Theorem 8.1 is satisfied.
   The previous discussion indicates that, for V-estimators,       assumption     (ii) follows
from the V-statistic projection theorem. This projection result will also be important
for assumption (ii) for kernel estimators, although in that case the V-statistic varies
with the sample size. For this reason it is helpful to allow for m(z,,z,) to depend on
n when stating a precise result. Let m,,(z) = Jm,,(z, ,?)dF,(?), mn2(z) = Im,(z”, z)dF,(Z),
and Y,,= O,(r,) mean that 11Y, II/r, is bounded in probability for the Euclidean norm
II* II.

Lemma 8.4

  z,,z*,         . . are i.i.d. then n-‘C;=      1Cjn= 1m,(zi,zj) - n-l C”= 1[m,l(zi) + m,,(zi)] + p =
                       zl, ZJ III/n + (ECIIm,(z,,z2)II21)“2/fl).
2202                                                                     W.K. Newey und D. McFadden


The proof is technical, and so is postponed until Section 8.4. A consequence          of this
result is that condition (ii), the stochastic equicontinuity   hypothesis, will be satisfied
for U-estimators     as long as E[ 11  m(zl, zl, Q,) II1 and EC IIm(z,,z2,0,) II“I are finite.
Lemma 8.4 actually gives a stronger result, that the convergence rate of the remain-
der is l/Jr~, but this result will not be used until Section 8.3.
   With condition (ii) (finally) out of the way, one can consider conditions (iii) and (iv)
for V-estimators.    Assuming that p = 0, note that j G(z, y*- Ye)dF, ;j [ jm(z, z”,e,) x
dF,(z)] dF”(1) = j G(z)dF(z) for 6(z) = m2(z) = j m(Z, z, B,)dF,(z) and F(z) equal to the
empirical distribution. Thus, in this example conditions (iii) and (iv) are automatically
satisfied because of the form of the estimator, giving all the assumptions     of Theorem
8.1, with g(z, 8,, yO) + 6(z) = ml(z) + m2(z). An asymptotic       normality result for V-
estimators can then be stated by specifying conditions for uniform convergence of
the Jacobian. The following condition is useful in this respect, and is also useful for
showing the uniform convergence assumption          of Theorem 2.1 and V-estimators.

Lemma 8.5

If 21, z*, . . . are i.i.d., a(z,, z2, O), is continuous   at each (3~ 0 with probability            one,
       4zI,zI, 0)III< Q and EC~UP,,, II4z,, z2,0)II1 < ~0,thenEC4zI,z2,@I
ECsupo,ell
is continuous     in 0~ 0, and     supBE 8 /I nm2 x1= 1 x7=   1a(z,   zj, d) -   ELZ(Z,, z2, O)] (I J+   0.

The proof is postponed until Section 8.4.
  This result can be used to formulate conditions                 for asymptotic         normality       by
adding a condition for convergence of the Jacobian.

Theorem     8.6

Suppose that zr, z2,. . are i.i.d., 63        C+,,(i) E[m(z,, z2, @,)I = 0, E[ II m(z,, zl, 8,) II] <
co, E[ /Im(z,, z2, /!I,) /I2] < 03, (ii) m(z,, zl, 19)and m(z,, z2, 19)are continuously     differen-
tiable on a neighborhood         of (I0 with probability      one, and there is a neighborhood
N of 8,, such that ECsup,,,-      IIVom(z,,  zl, 6)II1 < ~0andEC~UP,~.,~ IIVom(zI, z2, 4 II1 <
co, (iii) GB = E [V,m(z,, z2, (!I,)] is nonsingular. Then &(e-- 0,) L N(0, G, ‘!CCIGg“)
for 0 = Var { j [m(z, Z,0,) + m(Z, z, 0,)] dF,(z”)}.

Proof

It follows by Lemma 8.4, assumption (i), and the preceding discussion that conditions
(i)-(iv) of Theorem 8.1 are satisfied for g(z, ye) + 6(z) = 1 [m(z, Z, 0,) + m(Z, z, tI,)]dF,(Z),
so it follows by the conclusion       of Theorem      8.1 that &c’C~=,           CT= 1m(z,, zj, 0,) 3
N(O,C?). Therefore,     it suffices to show that n-“Cr, 1cjn= 1V,m(z,, zj, I$ L G, for any
t?L     8,. This condition follows by Lemma 8.5 and the triangle inequality.       Q.E.D.

To use this result to make inferences about 8 it is useful to have an asymptotic
variance estimator. Let GH= nT 2 C;= 1x7=, V,m(z,, zj, 8) be a Jacobian estimator.
Ch. 36: Larye Sample Estimation and Hypothesis       Testiny                                          2203


This estimator wll be consistent for G, under the conditions                     of Theorem 8.6. An
estimator of g(z, O,, yO) + 6(z) can be constructed by replacing                 BOby 6 and F, by E
in the expression given in R, to form


        Iii = n- l    j$l[rn(Zi, zj, 6)+ rn(Zj, zi, 8)],
The following result is useful for showing consistency                     of this estimator.         Let
m,(z,, z2, 0) depend on n and m,,(z) be as defined above.

Lemma       8.7

Lf~ll~-~,I/=0,(1)        then n~1~~~~~~n~‘~j”~~m,(~~,~j,~)-m,l(~i)~~2=0,{n-1                            x

ECsuP,,.,_ II%(Z,, 21,Q)II2 + sup,,,, IIVcPn(zl~z2,~)        II2 + II%(Z,, z2,hJ)       II‘I ).
This result is proved in Section 8.4. Consistency              of the variance    estimator       can now
be shown, using Lemma 8.7.

Theorem       8.8

If the conditions  of Theorem 8.6 are satisfied, E[su~,,,~ /Im(z,, zl, 0) I/2] < cc and
E[su~,,,~ 1)Vem,(zl, z2, 0) I/‘1 < cc then G; ‘dG; ’ 3 Cc ‘RG; ‘.

Proof

It follows by Lemmas 8.7 and 8.3 that b Aa,    and it follows as in the proof of
Theorem 8.6 that 6, ’ L Gil, so the conclusion follows by continuity   of matrix
multiplication.                                                           Q.E.D.



8.3.     First-step     kernel   estimation

There are many examples of semiparametric        two-step estimators that depend on
kernel density or conditional  expectations estimators. These include the estimators
of Powell et al. (1989) and Robinson (1988b). Also, the nonparametric    approximate
consumer surplus estimator introduced earlier is of this form. For these estimators
it is possible to formulate primitive assumptions    for asymptotic normality,   based
on the conditions of Section 8.1.
   Suppose that y denotes a vector of functions of variables x, where x is an r x 1
subvector of the data observation    z. Let y denote another subvector of the data.
The first-step estimator to be considered here will be the function of x with


        y*(x)= n- ’ i      yiKb(x - xi).                                                             (8.7)
2204                                                                     W.K. Newey and D. McFadden


This is a kernel estimator of fO(x)E[ylx], where Jo(x) is the marginal density of x.
A kernel estimator       of the density of x will be a component         of y(x) where the
corresponding     component     of y is identically equal to 1. The nonparametric       con-
sumer surplus estimator depends on 9 of this form, where yi = (1, qi)‘.
   Unlike V-estimators,      two-step estimators that depend on the 9 of eq. (8.6) will
often be nonlinear in y*.Consequently,       the linearization condition (i) of Theorem 8.1
will be important     for these estimators. For example, the nonparametric         consumer
surplus estimator depends on a ratio, with g(z,y) = ~~[Y2(x)/y1(x)]dx - BO. In this
example the linearization      G(z, y - y_) is obtained by expanding the ratio inside the
integral. By ii/g - a/b = bm‘Cl - b- ‘(6 - b)] [ii - a - (u/b)(g - b)], the lineariza-
tion of Z/g around a/b is b- ‘[E - (I - (u/b)(g - b)]. Therefore, the linear functional
of assumption    (i) is


       WY) =
                     sbfoW
                     a
                               ‘C- h&4,llyWx.

Ify,,(x) = f,Jx) is bounded away from zero, y2,,(x) is bounded,               and yi(x) is uniformly
                                                                                                    (8.8)



close to yie(x) on [a, b], then the remainder term will satisfy

       Ig(z,Y)- dz, 14 - G(z,Y - ~0)I

         d       bl~&)I - ‘f,,(x)-‘Cl   + lMx)llClr~(4        - f&)lz     + IyAx) - ~zo(4121d~
                sP
         d c SUP,,,qb]
                    11
                     dx) - h,tx) 11
                                  ‘.                                                                (8.9)

Therefore       assumption     (i) of Theorem     8.1 will be satisfied     if &    supXt,a,bl IIy*(x) -

Yob) II       .
        2ao47


    One feature of the consumer surplus example that is shared by other cases where
conditional   expectations are present is that the density in the denominator    must be
bounded away from zero in order for the remainder             to be well behaved. This
condition requires that the density only effects the estimator through its values on
a bounded set, a “fixed trimming” condition,       where the word trimming refers to
limiting the effect of the density. In some examples, such as the consumer surplus
one, this fixed trimming condition      arises naturally,  because the estimator     only
depends on x over a range of values. In other cases it may be necessary to guarantee
that this condition holds by adding a weight function, as in the weighted average
derivative example below. It may be possible to avoid this assumption,      using results
like those of Robinson (1988b), where the amount of trimming is allowed to decrease
with sample size, but for simplicity this generalization   is not considered here.

    471n this case p,(x) will be uniformly close to y,Jx), and so will be bounded   away from zero with
probability  approaching  one if yIo(x) is bounded away from zero, on [a, h].
Ch. 36: Large Sample Estimation and Hypothesis    Testing                                       2205


   In general, to check the linearization    condition (i) of Theorem 8.1 it is necessary
to specify a norm for the function y. A norm that is quite convenient and applies to
many examples is a supremum norm on a function and its derivatives. This norm
does not give quite as sharp results as an integral norm, but it applies to many more
examples, and one does not lose very much in working with a supremum                 norm
rather than an integral norm.48
   Let ajy(x)/axj denote any vector consisting of all distinct jth-order partial deriva-
tives of all elements of y(x). Also, let 3’ denote a set that is contained in the support
of x, and for some nonnegative      integer d let




This type of norm is often referred to as a Sobolev norm.
   With this norm the n’j4 convergence rate of Theorem 8.1 will hold if the kernel
estimator g(x) and its derivatives converge uniformly on CCat a sufficiently fast rate.
To make sure that the rate is attainable it is useful to impose some conditions     on
the kernel, the true function y,(x), the data vector y, and the bandwidth.   The first
assumption   gives some useful conditions for the kernel.

Assumption      8.1

K(u) is differentiable of order d, the derivatives of order d are bounded, K(u) is zero
outside a bounded set, jX(u)du       = 1, there is a positive integer m such that for all
j<m,SK(u)[~~=,u]du=O.

The existence of the dth derivative of the kernel means that IIf 11will be well defined.
The requirement that K(u) is zero outside a bounded set could probably be relaxed,
but is maintained    here for simplicity. The other two conditions   are important    for
controlling   the bias of the estimator. They can be explained by considering          an
expansion of the bias of y(x). For simplicity, suppose that x is a scalar, and note
EC?(x)] = SE[ylZ],f,(l)K,(x     - I)d,? = ~y,+)K,(x - I)dZ. Making the change of
variables u = (x - .%)/a and expanding around CJ= 0 gives


     E[-f(x)]    =        y,,(x - ou)K(u)du
                      s

                =         2    Ojajy,(xyaxjK(u)ujdu + Cm ayotx + ouyaxvqu)u~du
                      O<j<m                   s             s


                =     ye(x)         + i7u)/axv(u)umdu,
                          + 0m amyotx                                                         (8.10)
                                   s
   48With an integral norm, the Inn term in the results below could be dropped.   The other    terms
dominate this one, so that this change would not result in much improvement.
2206                                                                 WK. Newey and D. McFadden


where 6 is an intermediate     value, assuming that derivatives up to order m of ye(x)
exist. The role of jK(u)du = 1 is to make the coefficient of y,(x) equal to 1, in the
expansion. The role of the “zero moment” condition {K(u)ujdu = 0, (j < m), is to
make all of the lower-order powers of cr disappear, so that the difference between
E[y*(x)] and yO(x) is of order grn. Thus, the larger m is, with a corresponding     number
of derivatives of y,(x), the faster will be the convergence       rate of E[y*(x)] to y&x).
Kernels with this moment property will have to be negative when j 3 2. They are
often referred to as “higher-order”      or “bias-reducing”    kernels. Such higher-order
kernels are used to obtain the r2’/4 convergence        rate for y*and are also important
for assumption   (iv) of Theorem 8.1.
   In order to guarantee      that bias-reducing     kernels have the desired effect, the
function being estimated must be sufficiently smooth. The following condition
imposes such smoothness.

Assumption    8.2

There is a version of yO(x) that is continuously   differentiable     to order d with bounded
derivatives on an open set containing .F.

This assumption,   when combined with Assumption      8.1 and the expansion given
above produce the following result on the bias of the kernel estimator 9. Let E[y*]
denote E[y^(x)] as a function of x.

Lemma 8.9

If Assumptions      8.1 and 8.2 are satisfied then 11E[$] - y /I = O(C).

This result is a standard one on kernel estimators, as described in Hardle and Linton
(1994), so its proof is omitted.
   To obtain a uniform convergence rate for f is also helpful to impose the following
condition.

Assumption    8.3

There is p 3 4 such that E[ 11
                             y II”] < co and E[ lly Ilplx]fO(x) is bounded.

Assumptions      8.1-8.3 can be combined     to obtain    the following     result:

Lemma 8.10

If Assumptions    8.1-8.3 are satisfied and cr = a(n) such that o(n)+0          and n1 -(2ip),(rr)‘/
In n -+ cc then IIy*- y,, /I = O,[(ln n)l/* (w~+*~))“* + ~“‘1.

This result is proved in Newey (1992b). Its proof is quite long and technical,              and so
is omitted.   It follows from this result that Jn        (Iy*- y0 (I* 3   0, as required    for as-
Ch. 36: Large Sample Estimation   and Hypothesis   Testing                            2207



sumption     (i) of Theorem 8.1, if ,1-‘2’P’a(n)‘/ln n+ 03, &no2” --f 0, and Ja In n/
(nd+ 2d)+ 0. Th ese conditions will be satisfied for a range of bandwidth       sequences
o(n), if m and p are big enough, i.e. if the kernel is of “high-enough  order”, the true
function y(x) is smooth enough, and there are enough moments of y. However, large
values of m will be required if r is large.
   For kernel estimators it turns out that assumption (ii) of Theorem 8.1 will follow
from combining a V-statistic projection with a small bias condition. Suppose that
G(z, v) is linear in y, and let 7 = I?[?]. Then G(z, 9 - yO) = G(z, 9 - 7) + G(z, 7 - yO).
Let m,(zi, Zj) = G[zi, .YjK,( * - xj)], m&) = Jm,(Z Z)@‘cd4 = SG[z, .YjK,( * - Xj)] dF,(z),
and assume that m,,(z) = 1 m,(z, 2) dF,(Z) = G(z, 17)as should follow by the linearity
of G(z, y). Then


                                        G(z, y*- 7) dF,(z)
                                    s




                                                                                    (8.11)

where the second equality follows by linearity of G(z, y). The convergence in prob-
ability of this term to zero will follow by the V-statistic projection result of Lemma
8.4. The other term, &(x1=     1G(zi, 7 -,yJ/n - 1 G(z, 7 - y) dF,(z)}, will converge in
probability  to zero if E[ )(G(z, 7 - yO)I/2] + 0, by Chebyshev’s inequality,       which
should happen in great generality by y -+ y0 as 0 40, as described precisely in the
proof of Theorem 8.11 below. Thus, a V-statistic projection result when combined
with a small bias condition that E[ 1)G(z, v - yO)/I‘1 goes to zero, gives condition (ii)
of Theorem 8.1.
   For kernel estimators, a simple condition for the mean-square        differentiability
assumption (iii) of Theorem 8.1 is that there is a conformable matrix v(x) of functions
of x such that


     jG(z,   ?;)dF, =   ~.(xh(x)
                            dx,                                                     (8.12)


for some v(x).This condition says j G(z, y) dF, can be represented as an integral, i.e.
as an “average” over values of x. It leads to a simple form for 6(z). As previously
discussed, in general 6(z) can be calculated by differentiating    f G[z, y(q)] dF, with
respect to the parameters     q of a distribution    of z, and finding 6(z) such that
V,J G[z, y(q)] dFO = E[S(z)SJ for the score S, and all sufficiently regular parametri-
zations. Let I$[.] denote the expectation      with respect to the distribution    at this
2208                                                                       W.K. Newey and D. McFadden


parametrization.       Here, the law of iterated     expectations        implies that



       s                      s
        GCz,~h)l dF, = V(X)Y(X>

so differentiating
                             v)dx =
                                                   svW,CyIx1.0x Iv) dx = E,Cv(x)yl,

                        gives V,j G[z, y(v)] dF, = V,E,[v(x)y]            = E[v(x)ySJ          = E[G(z)SJ,
for

       J(z)=   V(X)Y- ECv(x)~l.                                                                       (8.13)

For example, for the consumer        surplus estimator,    by eq. (8.8), one has v(x) =
l(U~X~b)f~(x)-lC-h~(x),ll         and   y = (l,q), so that  6(z) = l(a 6 x d b)f,(x)-’ x
c4- Mx)l.
   With a candidate for 6(z) in hand, it is easier to find the integral representation
for assumption    (iii) of Theorem 8.1. Partition     z as z = (x, w), where w are the
components of z other than x. By a change of variables, 1 K,(x - xi) dx = j K(u) du = 1,
so that



       s G(z,y^-y,)dF,=                            v(x)y,(x)dx=n-’

                                                      ”     f
                                                                             i,
                                                                            i=l   s
                                                                                  V(X)yiK,(X      -   Xi) dx




                                - E[v(x)y]   = n    1 izl J 6(X,WJKg(X
                                                                     - xi) dx =                Jd(z)d’,
                                                                                                       (8.14)

where the integral of a function a(z) over d$ is equal to np ’ x1= I sa(x, wi)K,(x - xi)dx.
The integral here will be the expectation over a distribution     when K(u) 2 0, but when
K(u) can be negative, as for higher-order kernels, then the integral cannot be interpreted
as an expectation.
   The final condition of Theorem 8.1, i.e. assumption (iv), will follow under straight-
forward conditions. To verify assumption (iv) of Theorem 8.1, it is useful to note that
the integral in eq. (8.14) is close to the empirical measure, the main difference being
that the empirical distribution     of x has been replaced by a smoothed version with
density n- ’ x1= 1K,(x - xi) [for K(u) 3 01. Consequently,      the difference between the
two integrals can be interpreted as a smoothing bias term, with


       b(z)diSd(z)dF=K’                 $r   [ Sv(x)K,(X-xi)dX-V(Xi)]Yi.                               (8.15)


By Chebyshev’s        inequality,   sufficient conditions       for Jn   times this term to converge
in probability       to zero are that JnE[y,{        jv(x)K,(x - xi)dx - V(Xi)}] -0 and that
‘CIIY~II*IISV(X)K,(X-~~)~X-VV(X~)II~I~O.A                s s.h own below, the bias-reducing kernel
and smoothness         parts of Assumptions        8.1-8.3 are useful in showing that the first
Ch. 36: Large Sample Estimation and Hypothesis           Testing                                 2209


condition holds, while continuity of v(x) at “most points” of v(x) is useful for showing
the second. In particular, one can show that the remainder term in eq. (8.15) is small,
even when v(x) is discontinuous,   as is important   in the consumer surplus example.
   Putting together the various arguments       described above leads to a result on
asymptotic     normality             of the “score” x1= r g(zi, y”)/&.

Theorem      8.11

Suppose that Assumptions    8.1-8.3 are satisfied, E[g(z, yO)] = 0, E[ I/g(z, y,,) )(‘1 < a,
X is a compact set, cr = o(n) with na2’+4d/(ln n)2 -+ cc and na2m + 0, and there is
a vector of functionals  G(z, y) that is linear in y such that (i) for ll y - y. I/ small
enough,    IIdz, y)- dz, yo)- W, Y- yo) II 6 W IIY-y. II2,ECWI < ~0;(3 IIW, Y) II d
c(z) 1)y 1)and E[c(z)‘] < co; (iii) there is v(x) with 1 G(z, y) dF,(z) = lv(x)y(x) dx for
all /ly 11< co; (iv) v(x) is continuous  almost everywhere, 111v(x) 11dx < co, and there
is E > 0 such that E[sup,,,,, GE(Iv(x + u) II41 < co. Then for 6(z) = v(x)y - E[v(x)y],

Cr= 1S(zi, Y^)l& 5             N(0, Var [g(z, yo) + 6(Z)]}.


Proof

The proof proceeds              by verifying     the conditions    of Theorem   8.1. To show assump-
tion (i) it suffices to show fi /Iy*- y. 11    2 30      which follows by the rate conditions
on 0 and Lemma 8.10. To show assumption iii), note that by K(u) having bounded
derivatives of order d and bounded support, (IG[z, yK,(. - x)] 11d o-‘c(z) IIy )I. It
then follows by Lemma 8.4 that the remainder term of eq. (8.11) is O,,(n- ‘a-’ x
{E[c(z,)/( y, II] + (E[c(z~)~ IIy, 112])1’2})= o,(l) by n-‘a-‘+O.        Also, the rate condi-
tions imply 0 --f 0, so that E[ I(G(z, 7 - yo) )I2] d E[c(z)~] 117- y. 1)2 + 0, so that the
other remainder term for assumption            (ii) also goes to zero, as discussed following
eq. (8.11). Assumption       (iii) was verified in the text, with dF as described there. To
show assumption       (iv), note that


                       v(x)K,(x         - xi) dx - v(xi) yi
                                                        I     Ill
                          v(x)K(u)y,(x         - au) dudx -


                                      Cyo(x   - 0~)-   yo(x)PW     du

      < &         II v(x) II                                           1 Ca” jll v(x)IIdx,
                                     [y,(x - au) - y,,(x)lK(u) du 11dx <                        (8.16)
              s                iI1
2210                                                                 W.K. Newey and D. McFadden



for some constant C. Therefore, //J&[           { Sv(x)K,(x-xi)   dx - V(Xi)}yi] 11d CJjza”‘+O.
Also, by almost everywhere continuity of v(x), v(x + au) + v(x) for almost all x and U.
Also, on the bounded support of K(u), for small enough 0, v(x + W) d SU~~~~~~          S ,v(x + o),
so by the dominated     convergence theorem, j v(x + au)K(u) du + j v(x)K(u) du = v(x)
for almost all x. Another application         of the dominated convergence theorem, using
boundedness    of K(u) gives E[ 11   j v(x)K,(x - xi) dx - v(xi) 114]-0, so by the Cauchy-
Schwartz    inequality,   E[ 11yi I/2 11j v(x)K,(x - xi) dx - v(xi) II2] + 0. Condition        (iv)
then follows from the Chebyshev              inequality,    since the mean and variance of
II- l” C;= 1[I v(x)K,(x - xi) dx - v(x,)]y, go to zero.                                    Q.E.D.

   The assumptions of Theorem 8.11 can be combined            with conditions for convergence
of the Jacobian to obtain an asymptotic       normality        result with a first-step kernel
estimator. As before, let R = Var [g(z, y,,) + 6(z)].

Theorem     8.12

Suppose that e -% 00~ interior(O),      the assumptions      of Theorem 8.11 are satisfied,
E(g(z, yO)] = 0 and E[ 11g(z, ye) 11
                                   2] < co, for 11
                                                 y - y. II small enough, g(z, 0, y) is contin-
uously differentiable  in 0 on a neighborhood        _# of O,, there are b(z), s > 0 with
EC&)1< ~0, IIV~s(z,~,y)-V,g(z,~,,y,)/I d&)Cl/Q-4ll”+                           IIY-Y~II~~~ and
E[V,g(z, Oo,yo)] exists and is nonsingular.        Then $(&         0,) 3    N(0, G; ‘L2G; I’).

Proof

It follows similarly to the proof of Theorem 8.2 that 6; ’ 3 G; ‘, so the conclusion
follows from Theorem 8.11 similarly to the proof of Theorem 8.2.              Q.E.D.

As previously discussed, the asymptotic variance can be estimatedby              G,,‘86,     I’,
whereG,=n-’      C;= 1 Vsg(zi, e,y*) and 8= n- ’ x1= lliiti; for ai = g(zi, 0, $) + 6(zi). The
main question here is how to construct an estimator of 6(z). Typically, the form of
6(z) will be known from assumption       (iii) of Theorem 8.11, with 6(z) = 6(z, 8,, yo) for
some known function 6(z, 0, y). An estimator of 6(z) can then be formed by substituting
8 and $3for 8, and y. to form

        8(z)= 6(z, 6,jq.                                                                     (8.17)

The following result gives regularity      conditions   for consistency     of the corresponding
asymptotic variance estimator.

Theorem      8.13

Suppose that the assumptions   of Theorem 8.12 are satisfied and there are b(z), s > 0,
such that E[~(z)~] < cc and for /Iy - y. /I small enough, IIg(z, 19,y)-g(z, do, y)II d h(z) x
CIIQ-Q,ll”+ /I~-~~ll~l and 11~~~,~,~~-~6(~,~~,~~~ll
                                            dWCII~-~oI/“+ /IY-Y~II”~.
Then 6; ’ 86;       l’ L   G; ‘RG;   “.
Ch. 36: Large Sample Estimation and Hypothesis          Testing                                   2211


Proof

It suffices to show that the assumptions     of Theorem 8.3 are satisfied. By the
conditions of Theorem 8.12, I/t? - 0, I/ 3 0 and /I9 - y0 I/ 5 0, so with probability
approaching   one,




because n- ’ x1= 1 b(zi) 2 is bounded in probability               by the Markov       inequality.  It
follows similarly that Cr= 1 11  8(zi) - 6(Zi) II“/ n 30,          so the conclusion      follows by
Theorem 8.3.                                                                                   Q.E.D.

In some cases 6(z, 0, y) may be complex and difficult to calculate, making it hard to
form the estimator 6(z, e,?). There is an alternative estimator, recently developed in
Newey (1992b), that does not have these problems. It uses only the form of g(z, 6,~)
and the kernel to calculate the estimator. For a scalar [ the estimator is given by


        i(zi)=v, n-l
                [
                       j$l  C71zj38,y*   +   i,K,(‘yxil}]~
                                                                  i=O’
                                                                                                (8.18)


This estimator can be thought of as the influence of the ith observation     through the
kernel estimator. It can be calculated by either analytical or numerical differentiation.
Consistency of the corresponding      asymptotic variance estimator is shown in Newey
(1992b).
   It is helpful to consider some examples to illustrate how these results for first-step
kernel estimates can be used.

 Nonparametric consumer surplus continued: To show asymptotic               normality, one can
 first check the conditions of Theorem 8.11. This estimator has g(z, yO) = Jib,(x) dx -
 8, = 0, so the first two conditions are automatically        satisfied. Let X = [a, b], which
 is a compact set, and suppose that Assumptions             8.1-8.3 are satisfied with m = 2,
 d = 0, and p = 4, so that the norm IIy 1) is just a supremum             norm, involving no
 derivatives. Note that m = 2 only requires that JuK(u)du = 0, which is satisfied by
 many kernels. This condition also requires that fO(x) and fO(x)E[q Ix] have versions
that are twice continuously      differentiable on an open set containing       [a, b], and that
q have a fourth moment.          Suppose that no2/(ln n)‘+ CC and no4 +O, giving the
bandwidth     conditions   of Theorem 8.11, with r = 1 (here x is a scalar) and d = 0.
Suppose that f,,(x) is bounded away from zero on [a, b]. Then, as previously shown
in eq. (8.9), assumption    (i) is satisfied, with b(z) equal to a constant and G(z, y) =
!,bfo(x)- ’ C- Mx), lldx) dx. Assumption          (ii) holds by inspection     by fO(x)-’ and
h,(x) bounded. As previously noted, assumption (iii) holds with v(x) = l(a < x < b) x
fO(x)- ’ [ - h,(x), 11. This function is continuous     except at the points x = a and x = b,
2212                                                                            W.K. Newey and D. McFadden


and is bounded, so that assumption               (iv) is satisfied.   Then          by the conclusion    of
Theorem 8.11 it follows that


                 i;(x) - 0,       LV(O,   E[l(a ,< x d 4f,(x)~‘{q           -    hI(x))21)>          (8.19)
                              >

 an asymptotic normality result for a nonparametric      consumer surplus estimator.
    To estimate the asymptotic variance, note that in this example, 6(z) = l(a d x d b) x
f&)- ’ [I4- Mx)l = &z,h) for h(z,Y)= 1(a d x d b)y,(~)~’[q - y1(x)-1y2(x)].         Then
 for 6(z) = 6(z, y^),an asymptotic variance estimator will be


                  = n-l i$l l(U <Xi < b)f(Xi)p2[qi-
       ‘= f 8(Zi)2/n                                                   &(Xi)]2.                      (8.20)
           i=l



By the density bounded away from zero on 3 = [a, b], for /Iy - y. /I small enough
that yr (x) is also bounded away from zero on .oll‘,16(zi, y) - 6(zi, yO)1d C( 1 + qi) 11y - y0 1)
for some constant C, so that the conditions of Theorem 8.13 are satisfied, implying
consistency of d.


Weighted average derivative estimation: There are many examples of models where
there is a dependent variable with E[qlx] = T(X’ /3,Jfor a parameter vector /IO, as
discussed in Powell’s chapter of this handbook. When the conditional            expectation
satisfies this “index” restriction, then V,E[ql.x] = s,(x’~,,)~~, where r,(v) = dr(v)/dv.
Consequently, for any bounded function w(x), E[w(x)V,E[q(x]]           = E[w(x)r,(x’/3,)]&,,
i.e. the weighted average derivative E[w(x)V,E[qlx]]         is equal to a scale multiple of
the coefficients /I,,. Consequently,  an estimate of /I0 that is consistent up to scale can
be formed as


       B=n-'     t W(Xi)V,L(Xi),
                               C(X)= i                qiK,(X-Xi)/i              K,(X-Xi).           (8.21)
                 i=l                            i=l                   i=l



This is a weighted average derivative estimator.
  This estimator takes the form given above where yIO(x) = f,Jx), yIO(x) = fO(x) x
ECq Ixl, and

       Yk 0, v) = %47,cY2(4lY,(~)l           - 8.                                                   (8.22)

The weight w(x) is useful as a “fixed trimming” device, that will allow the application
of Theorem 8.11 even though there is a denominator          term in g(z, 0, y). For this
purpose, let 3 be a compact set, and suppose that w(x) is zero outside % and
bounded. Also impose the condition that fe(x) = yIO(x) is bounded away from zero
on I%^.Suppose that Assumptions 8.1-8.3 are satisfied, n~?‘+~/(ln ~)~+co and &“+O.
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                  2213


These conditions    will require that m > r + 2, so that the kernel must be of the
higher-order type, and yO(x) must be differentiable of higher order than the dimension
of the regressors plus 2. Then it is straightforward   to verify that assumption     (i) of
Theorem 8.11 is satisfied where the norm (/y )I includes the first derivative, i.e. where
d = 1, with a linear term given by

     G(z,Y)= w(x)Cdx)~(x)+ V,r(xMx)l,
       %b4 = .I-&)- l c- &Ax) + kl(xb(x), - SWI,              Md = .foW l c- Mx), II’>
                                                                                        (8.23)

where an x subscript denotes a vector of partial derivatives, and s(x) = fO,.(x)/fO(x)
is the score for the density of x. This result follows from expanding                the ratio
V,[y,(x)/y,(x)]    at each given point for x, using arguments similar to those in the
previous example. Assumption (ii) also holds by inspection, by fO(x) bounded away
from zero.
   To obtain assumption        (iii) in this example, an additional      step is required. In
particular, the derivatives V,y(x) have to be transformed         to the function values y(x)
in order to obtain the representation        in assumption (iii). The way this is done is by
integration    by parts, as in


     HwW,~Wd41=
                                s  w(x)fo(x)b,(x~CV,~(x)l
                                                       dx


        =-s      V,Cw(x)fo(x)~o(x)l’~O
                                     dx>

        v,Cww-ow,(x)l’          = w,(x)C- Mx), II+ w(x)c- 4&d, 01

It then follows that 1 G(z, y) dF, = j v(x)y(x) dx, for

     44 = - w,(x)C- w4 11- w(x)II- &&4,01 + wb)a,(x)
          = - {WAX)        c- Mx), 11= 04 c- h_l(x),11,
                  + w(x)s(x)>
     t(x) = - w,(x) -- w(x)s(x).                                                       (8.24)

By the assumption that fO(x) is bounded away from zero on .!Zand that 9” is compact,
the function a(~)[ - h,(x), l] is bounded, continuous, and zero outside a compact set,
so that condition (iv) of Theorem 8.11 is satisfied. Noting that 6(z) = C(x)[q - h,(x)],
the conclusion of Theorem 8.11 then gives



                                          1
                      w(xi)V,&xi) - 80 L W,Var{w(x)V,h,(x) + QX)[q - &(x)]}).
                                                                                        (8.25)
2214                                                                          W.K. Newey   and D. McFadden

   The asymptotic             variance    of this estimator     can be estimated      as


       &!=n-’        i,      I,?$,       pi = W(Xi)V,~(Xi) - H^+ ~(Xi)[qi -     I],                 (8.26)
                    i=l




where z(x) = - w,(x) - w(x)fJx)/f^(x)    for T(X) = n- ’ C;= 1 K(x - xi). Consistency
of this asymptotic    variance estimator  will follow analogously      to the consumer
surplus example.
   One cautionary    note due to Stoker (1991) is that the kernel weighted average
derivative estimators tend to have large small sample biases. Stoker (1991) suggests
a corrected estimate of - [n-l Cy= 1e^(x,)x~]- ‘8, and shows that this correction
tends to reduce bias 8 and does not affect the asymptotic        variance. Newey et al.
(1992) suggest an alternative estimator o^+ n- ’ C;= 1 &xi) [qi - &)I,    and show that
this also tends to have smaller bias than 6. Newey et al. (1992) also show how to
extend this correction to any two-step semiparametric       estimator with a first-step
kernel.



8.4.    Technicalities

Proof of Lemma 8.4

Let mij = m(zi, zj), 61,.= m,(z,), and fi., = m2(zi). Note that E[ /Im, 1 - p 111d E[ 11    m, I 111
 +(E[ I~m,,~~2])1’2 and (E[I~m,, -p(12])1’2 <2(E[ /Im,2~~2])1’2 by the triangle in-
equality. Thus, by replacing m(z,, z2) with m(z,, z2) - p it can be assumed that p = 0.
Note that IICijmij/n2 - Ci(fii. + fi.,)/n II = 11      Cij(mij - 61,. - Kj)/n2 II < I/xi+ j(mij -
rii,. - ti.j)/n2 II + IICi(mii - 6,. -6.,)/n” I/= Tl + T2. Note E[ TJ <(EC I/ml 1 /I + 2 x
ECllm12      111)/n. Also, for i #j, k #P let vijk/ = E[(mij - tii. - rKj)‘(m,( - fi,. - ti./)].
By i.i.d. observations,      if neither k nor 8 is equal to i or j, then vijk/ = 0. Also for e not
equal to i orj, viji/ = E[(mij - tii.)‘(mi/ - tip)] = E[E[(mij - &.)‘(m,( - ti,.)Izi,zj]] =
E[(mij - fii.)‘(E[mit Izi, zj] - tip)] = 0 = vijj/. Similarly, vijk/ = 0 if k equals neither
i nor j. Thus,

       ‘CT:1    = C           C Vijk//n4 = 1 (vijij + rijji)/n4
                    i#jk#/                    i#j


                =   2(n2 - n)E[ IIm12 - ti,.-ti.,             112]/n4= E[ l/ml2 - 6,. - Kz., lj2]0(np2),

and Tl =O,({E[IIml2-~l.-~.2/~2]}112n2-1)=Op({E[~~ml2~~2]}1~2n~‘).                              The con-
clusion then follows by the triangle inequality.                                                 Q.E.D.

Proof of Lemma 8.5

Continuity of a(z,, z2, l3) follows by the dominated    convergence theorem. Without
changing notation let a(z,, z2, 0) = a@,, z2, 0) - E[a(z,, z2, Q]. This function satisfies
the same dominance conditions as a(z,, z2, e), so it henceforth suffices to assume that
Ch. 36: Large Sample Estimation and Hypothesis                  Testing                                     2215


E[a(z,,z,,   e)] = 0 for all 0. Let O(0) = n-‘(n - 1)-i Ci+ja(Zi,Zj,B)t         and note that
s”pOe@ IIn-z Ci,jatzi, zj9@ - tic@ II     A   0. Then   by well known   results on U-statistics
as in Serfling (1980), for each 0, 6(e) -%O. It therefore suffices to show stochastic
e_quicontinuity of 8. The rest of:he proof proceeds as in the proof of Lemma 2.4, with
di,(e, 6) = suplia- ~iiG,J/Ia(zi,zj, 0)- a(zi,zj, 0)II replacing 4(& :I, Ci+j replaci_ng  Cy=1T
and the U-statistic     convergence      result n- ‘(n - 1)-i xi+ jAij(d, 6) -% E[A12(B, S)]
replacing the law of large numbers.                                                      Q.E.D

Proof of Lemma 8.7

Let fiij = m,(zi, zj, g),,mij = m,(zi, zj, Q,), and ml, = m,i(zJ. By the triangle                   inequality,
we have


      n-l t I/II-l t diij-mlil12<Cn-2                               izI” II&ii II2
               i=l         j=l



             +cn-’   t
                     i=l
                             IIn-’
                                     j~i(Jnij-mij)l12+c~-1i~l                    II(n-I)-’   j~i(Wlij-mli)l12

             +Cnp2   t       JJmli))2=R1+R2+R3+R4.
                     i=l


for some positive        constant    C. Let b(zi) = SUP~~.~ IIm,(zi, zi, 0) II and b(z, zj) =
sup~~,~ IIVom”(zi, zjr e) 11.With probability approaching one, R, <_CK2 Cl= 1b(z,)’ =
O,(n-‘E[b(z,‘f]}.      Also, R2~Cn-‘~~=lI~n-‘~jzib(zi,zj)~~2~~~-~e,~12~Cn-2                 X

Cifjb(zi,zj)211e-e~l12=0,{n-‘E[b(          zl, z,)‘]}. Also, by the Chebyshev and Cauchy-
Schwartz inequalities,      E[R,] d CE[ IIml2 II’]/n and E[R,] < CE[ (Im,, Il’]/n. The
conclusion then follows by the Markov and triangle inequalities.                     Q.E.D.


9.   Hypothesis      testing with GMM estimators

This section outlines the large sample theory of hypothesis             testing for GMM
estimators.    The trinity of Wald, Lagrange multiplier,         and likelihood    ratio test
statistics from maximum likelihood estimation extend virtually unchanged to this
more general setting. Our treatment provides a unified framework that specializes
to both classical maximum likelihood methods and traditional            linear models esti-
mated on the basis of orthogonality      restrictions.
   Suppose data z are generated by a process that is parametrized          by a k x 1 vector
8. Let /(z, 0) denote the log-likelihood    of z, and let 8, denote the true value of 0 in
the population.    Suppose there is an m x 1 vector of functions of z and 0, denoted
g(z, f3),that have zero expectation in the population      if and only if 8 equals 0,:


      g(e) = ~~5 1(z,~ f l) =               g(z, 0) ee(‘veo)dz = 0,           if 8 = 8,.
                                        s
2216                                                                         W.K. Newey and D. McFadden


Then, Ey(z, H) are moments, and the analogy principle suggests that an estimator of
8, can be obtained by solving for 8 that makes the sample analogs of the population
moments small. Identification        normally requires that m 3 k. If the inequality is strict,
and the moments are not degenerate, then there are overidentifying                   moments that
can be used to improve estimation efficiency and/or test the internal consistency of
the model.
   In this set-up, there are several alternative interpretations           of z. It may be the case
that z is a complete description           of the data and P(z,Q) is the “full information”
likelihood. Alternatively,      some components        of observations     may be margined out,
and P(z, 0) may be a marginal “limited information”               likelihood. Examples are the
likelihood for one equation in a simultaneous             equations system, or the likelihood
for continuous     observations     that are classified into discrete categories. Also, there
may be “exogenous”          variables (covariates), and the full or limited information
likelihood above may be written conditioning                on the values of these covariates.
From the standpoint          of statistical analysis, variables that are conditioned            out
behave like constants. Then, it does not matter for the discussion of hypothesis
testing that follows which interpretation         above applies, except that when regularity
conditions    are stated it should be understood           that they hold almost surely with
respect to the distribution      of covariates.
   Several special cases of this general set-up occur frequently in applications.             First,
if Qz,~) is a full or limited information         likelihood function, and g(z,8) = V,L(z,@
is the score vector, then we obtain maximum likelihood estimation.49                     Second, if
z = (y, x, w) and g(z, 0) = w’(y - x0) asserts orthogonality          in the population    between
instruments w and regression disturbances             E = y - x0,, then GMM specializes to
2SLS, or in the case that w = x, to OLS. These linear regression set-ups generalize
immediately     to nonlinear     regression orthogonality       conditions     based on the form
Y(Z,0) = W’CY - h(x, @I.
   Suppose an i.i.d. sample zi, . . . , z, is obtained from the data generation process.
A GMM estimator of 0, is the vector 6,, that minimizes the generalized distance of
the sample moments from zero, where this generalized distance is defined by the
quadratic form



with l,(0) = (l/n)C:, i g(z,, (3)and 0, an m x m positive definite symmetric matrix that
defines a “distance metric”. Define the covariance matrix of the moments,          fl =
                                                                                                    mxm
Eg(z, O,)g(z, 0,)‘. Efficient
                           weighting of a given set of m moments requires that 0,
converge    to Ras n + m.50 Also, define the Jacobian matrix mfik = EVOg(z, O,), and

   @‘If the sample score has multiple roots, we assume that a root is selected that achieves a global
maximum of the likelihood function.
    50This weighting is efficient in that it minimizes the asymptotic covariance matrix in the class of all
estimators obtained by setting to zero k linear combinations     of the m moment conditions. Obviously, if
there are exactly k moments, then the weighting is irrelevant. It is often useful to obtain initial consistent
asymptotically   normal GMM estimators employing an inefficient weighting that reduces computation,
and then apply the one-step theorem to get efficient estimators.
Ch. 36: Large Sample Estimation and Hypothesis      Testing                                       2217


let G, denote an array that approaches      G as n -+ co. The arrays 0, and G, may be
functions of (preliminary)  estimates g,, of 8,. When it is necessary to make this
dependence explicit, write Q,,(g,,) and G,(g,,).
   Theorems 2.6, 3.4, and 4.5 for consistency, asymptotic normality, and asymptotic
covariance matrix estimation,    guarantee that the unconstrained      GMM estimator
& = argmw,~Q,,(@      IS consistent and asymptotically                normal, with &(8” - 0,) L
N(0, B- ‘); where B = G’R- ‘G. Further, from Theorem                  4.5, the asymptotic covariance
matrix can be estimated using


       G, = t,      clVedz,,&, J+G,
                    f




where 8,, is any &-consistent    estimator of 0, [i.e., &(8,, - 0,) is stochastically
bounded].   A practical procedure for estimation    is to first estimate 0 using the
GMM criterion with an arbitrary       L2,, such as J2,, = 1. This produces an initial
$-consistent      estimator I!?~,.
                                Then use the formulae above to estimate the asympto-
tically efficient R,, and use the GMM criterion with this distance metric to obtain
the final estimator gn. Equation (5.1) establishes that r-     - Ey(z,B,)V,G(z,0,)’ s
EV,g(z, 0,) = G. It will sometimes be convenient to estimate G by




In the maximum likelihood case g = V,d, one has a= r= G, and the asymptotic
covariance matrix of the unconstrained estimator simplifies to OR ‘.



9.1.    The null hypothesis         and the constrained       GMM    estimator

Suppose          there is an r-dimensional     null hypothesis      on the data generation   process,


       H,: r; 1(Q,) = 0.


We will consider          alternatives   to the null of the form

       H   1 :   a(@,)# 0,

or asymptotically         local alternatives   of the form


       H,,: a(&) = SJ&           # 0.
2218                                                                      W.K. Newey and D. McFadden


Assume that F& z V,a(&,) has rank r. The null hypothesis                may be linear or nonlinear.

A particularly simple case is He. ‘6 = do, or a(@ = 0 - do, so the parameter vector 8
is completely specified under the null. More generally, there will be k - r parameters
to be estimated when one imposes the null. One can define a constrained          GMM
estimator by optimizing the GMM criterion subject to the null hypothesis:

       g,, = argmaxtiEOQn(@,           subject to a(0) = 0.

Define a Lagrangian          for t?“: _Y’;p,(6,y)= Q,(0) - , z ,(6yr;     1. In this expression,   y is

the vector of undetermined   Lagrangian   multipliers; these will be nonzero when the



        0=
constraints are binding. The first-order conditions for solution of this problem are



       [I [
        0
                   &VOQA@J -vo@J,/% II
                               - 46)                l-

A first result establishes      that g,, is consistent    under the null or local alternatives:

Theorem 9.1

Suppose the hypotheses    of Theorem 2.6. Suppose ~(0s) = S/,/Z, including                          the
null when 6 = 0, with a continuously differentiable and A of rank r. Then ez                        6’0.


Proof

Let f3,, minimize [E&(e)]‘fl-   ‘[&J,(@] subject to a(0) = S/J%. Continuity of this
objective function and the uniqueness of its minimum imply eon + 8,. Then Q,(8,) 6
Q,(e,,) -% 0, implying Q,(gJ LO. But Q, converges uniformly                      to [E~,(@]‘~-    ’ x
[&j,(6)], so the argument of Theorem 2.6 implies t?,,3 0,.                                    Q.E.D.

The consistency        of g” implies

       V,Q,(e,)    A    - G’R - ’ Eg(z, 6,) = 0,


       V,a(e,) a       A * A’?, = - V,Q,(e,) + oP 5        0,

and since A is of full rank, 7, LO.           A central   limit theorem     implies


                                                                                                   (9.1)

A Taylor’s    expansion      of the sample moments         about   8. gives

       &W)         = &,@o)       + G,,/&J      - &,I,                                              (9.2)
Ch. 36: Large Sample Estimation and Hypothesis Testing                                                            2219


with G, evaluated       at points           between   8 and 8,. Substituting                this expression    for the
final term in the unconstrained   first-order condition 0 = &V,Q,(g,J = - Gbf2; ’ x
g,,(@,,)and using the consistency of e^, and uniform convergence of G,(0) yields

     0 = - G’R - 1’2ulln+ S&e,                   - 0,) + oP

       =+(e,       - 0,) = B-‘G’C                li2@ n + o P’                                                   (9.3)

Similarly,     substituting        &&(t?,J        = $&,(0,)                + G,&(t?”   - 0,) = - G’Qn-1’2@, +
G$(en - &,) + op, and J&z(&) = J&(0,)        + A&(e,                            - 0,) + op = 6 + Afi(g”       - 0,) +
op in the first-order conditions for an yields


                                                                                                                 (9.4)


From the formula        for partitioned           inverses,



                                                                                       1
                              ~-l/ZMBI’/’               B-‘,q(AB-l,q-l
      [,” ;I-l=[         (ABm’A’)-‘AB-l                       -(&-‘A’)-’                ’
                                                                                                                 (9.5)


where M = I - B- 1’2A’(AB- ‘A’)- ‘AK                       l” is a k x k idempotent                 matrix    of rank
k - r. Applying this to eq. (9.4) yields




                                                                                                                 (9.6)

Then, the asymptotic distribution  of &(t?,, - 0,) under a local alternative,                                  or the
null with 6 =O, is N[ - B-‘A’(AB-‘A’)-‘6,B-1’2MB-“2].
   Writing out M = I-B-     “2A’(AB- ‘A’)- ‘AB- 1’2 yields

     JJt(B,-8o)=B-1G’R-1I2U11,-~-1A’(AB-1~’)-1~~-1~’R-1/2~‘,

                         -B-‘A’(AB-‘A’)-‘6                     + op.                                             (9.7)

The first terms on the right-hand side of eq. (9.7) and the right-hand                              side of eq. (9.3)
are identical, to order op. Then, they can be combined to conclude                                 that

     &(e, - e,) = B -l A ‘(AB-‘A’)-‘AB-‘G’R-“2~n+B-‘A’(AB-‘A’)-16+op,
                                                                                                                 (9.8)

so that &(6,,            . asymptotically
                  - g,,) IS                            normal              with mean B- ‘A’(AB- ‘A’)-‘6           and
2220                                                                   W.K. Newey and D. McFadden


                                                     Table 1

                                                                                  Asymptotic
Statistic                                  Formula                             covariance matrix


                   B~‘G’Q~“%,+o,                                            B-’ EC
Jn(&        - %)
                                                                            Bm l/2MBm l/2
&$-So)             -B~‘A’(AB~‘A’)~‘6+B~“2MB~“ZG’~~“Z~i,+o,
J;l(e,-e,)         B-‘A’(AB-‘A’)-‘6+B-‘A’(AB~‘A’)~‘AB~’G’R-”z~~C,+op        Bm’A’(ABm’A’)m’ABm’

&r.                (AB-‘A’)~‘6+(AB~‘A’)~‘AB-‘G’R~“2~~11,+o,                 (AB-‘A’)-’

$4&)               S+AB-‘G’R-“*42        +o                                 AB-‘A’

,,‘h,Q,(e,)        A’(AB~‘A’)-‘B+A:(AB’A’)-‘AB-LC’R-”’~.+o,                 A’(AB-‘A’)-‘A




covariance    matrix B- ‘/‘(I - M)BPi’2 z BP ‘A’(AB-lA’)-‘ABP            ‘. Note that the
asymptotic covariance matrices satisfy acov(& - e,) = acov 8n - acov S,, or the uari-
ante of the difference equals the difference of the variances. This proposition is familiar
in a maximum likelihood context where the variance in the deviation between an
efficient estimator and any other estimator equals the difference of the variances.
We see here that it also applies to relatively efficient GMM estimators             that use
available moments and constraints        optimally.
   The results above and some of their implications are summarized in Table 1. Each
statistic is distributed  asymptotically     as a linear transformation       of a common
standard normal random vector %. Recall that B = G’R- ‘G is a positive definite
kxkmatrix,andletC=B~‘-acov8,.RecallthatM=Z-B~”2A’(AB~‘A’)~’x
AK ‘I2 is a k x k idempotent      matrix of rank k - r.



9.2.         The test statistics

The test statistics for the null hypothesis fall into three major classes, sometimes
 called the trinity. Wald statistics are based on deviations        of the unconstrained
estimates from values consistent with the null. Lagrange multiplier (LM) or score
statistics are based on deviations of the constrained      estimates from values solving
the unconstrained     problem. Distance metric statistics are based on differences in the
GMM criterion between the unconstrained          and constrained estimators. In the case
of maximum likelihood estimation,       the distance metric statistic is asymptotically
equivalent    to the likelihood ratio statistic. There are several variants for Wald
statistics in the case of the general nonlinear hypothesis; these reduce to the same
expression in the simple case where the parameter vector is completely determined
under the null. The same is true for the LM statistic. There are often significant
computational     advantages to using one member or variant of the trinity rather than
another. On the other hand, they are all asymptotically equivalent. Thus, at least to
first-order asymptotic approximation,       there is no statistical reason to choose be-
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                          2221




                                       Figure 3. GMM       tests




tween them. This pattern of first-order asymptotic equivalence for GMM estimates
is exactly the same as for maximum likelihood estimates.
    Figure 3 illustrates the relationship between distance metric (DM), Wald (W), and
score (LM) tests. In the case of maximum likelihood estimation, the distance metric
criterion is replaced by the likelihood ratio.
    The arguments 0, and f?,,are the unconstrained       GMM estimator and the GMM
estimator subject to the null hypothesis,      respectively. The GMM criterion func-
tion is plotted, along with quadratic approximations         to this function through the
respective arguments      6, and &. The Wald statistic (W) can be interpreted        as
twice the difference in the criterion function at the two estimates, using a quad-
ratic approximation    to the criterion function at 6,. The Lagrange multiplier (LM)
statistic can be interpreted   as twice the difference in the criterion function of the
two estimates,     using a quadratic     approximation             at 15%.
                                                                         The distance   metric   (DM)
statistic is twice the difference      in the distance        metric    between   the unconstrained
and constrained    estimators.
   We develop the test statistics initially for the general nonlinear hypothesis ~(0,) =
0; the various statistics we consider are given in Table 2. In this table, recall that
acov 87,= B and acov g,, = B- “‘MB- l” . In the following section, we consider the
important special cases, including maximum likelihood and nonlinear least squares.
2222                                                                      W.K. Newey and D. McFadden


                                              Table 2

                                                             Test statistics

Wald statistics
  WI”                                           na(e.Y[AB-‘A’]-‘a(B,)

  W,”                                           n(&”- f?J{acov(JJ   - acov(G”)}-(6” - 13”)
                                                  =n(e”-B,)‘B-‘A’(AB-‘A’)-‘AB-‘(~“-~”)

   W3”                                          t1(8” - GJ acov(JJ      ‘(6” - f7J

Lagrange   multiplier   statistics
  LM,,                                          rq$4B~ ‘A’&
  LM,,                                          nV,Q,(B,)‘{A’(AB-‘A’)-‘A}-V,Q,(B,)
                                                    = “V,Q,(B,)‘B~‘A’(AB~‘A’)~‘AB~‘V,Q,(B,)
  LM,,                                          nv,Q.@J’B- ‘V,Q.(e.)
Distance   metric statistic
  DM,                                           -   2n[Q.(e., - Q,(&)l



In particular, when the hypothesis is that a subset of the parameters are constants,
there are some simplifications    of the statistics, and some versions are indistin-
guishable.
   The following theorem gives the large sample distributions   of these statistics:

Theorem 9.2

Suppose the conditions of Theorems 2.6,3.4, and 4.5 are satisfied, and a(8) is contin-
uously differentiable with A of rank r. The test statistics in Table 2 are asymptotically
equivalent under the null or under local alternatives.      Under the null, the statistics
converge in distribution   to a chi-square with r degrees of freedom. Under a local
alternative        a(&,) = S/J& the statistics converge in distribution              to a noncentral
chi-square        with r degrees of freedom and a noncentrality parameter            6’(AB- ‘A’)- ‘6.

Proof

 All of the test statistics are constructed  from the expressions in Table 1. If 4 is an
expression from the table with asymptotic covariance matrix R = acov q and asymp-
 totic mean RA under local alternatives     to the null, then the statistic will be of the
form q’R+q, where R+ is any symmetric matrix that satisfies RR+R = R. The matrix
R+ will be the ordinary inverse R- ’ if R is nonsingular,       and may be the Moore-
Penrose generalized inverse R - if R is singular. Section 9.8 defines generalized
inverses, and Lemma 9.7 in that section shows that if q is a normal random vector
with covariance matrix R of rank r and mean R1, then q’R+q is distributed noncentral
chi-square with r degrees of freedom and noncentrality       parameter A’R;i under local
alternatives  to the null.
Ch. 36: Large Sample Estimation and Hypothesis   Testing                                          2223


    Consider W,,. Under the local alternative ~(0,) = S/&, row five of Table 1 gives
q=6+AB-‘G’fi-“2ul;!       normal with mean S and a nonsingular    covariance matrix
R = AB-‘A’. Let A = R-‘6. Then Lemma 9.7 implies the result with noncentrality
parameter i’R/1= 6’R ‘6 = 6’(AB- ‘A’)- ‘6.
    Consider W,,. The generalized inverse R of R = acov 8,, - acov t?,,can be written
as:




The first identity substitutes    the covariance formula from row 2 of Table 1. The
second and third equalities follow from Section 9.8, Lemma 9.5, (5) and (4),
respectively. One can check that A = R-B- ‘A’(AB- ‘A’)- ‘6 satisfies RI = B- ‘A’ x
(AB-‘A’)-‘8,     so that ;I’RA = d’(AB-‘A’)-‘6.
   The statistic W,, is obtained by noting that for R = BP’A’(AB-‘A’)-‘AB-‘,           the
matrix R+ = B satisfies RR+R = R and /z = RfB-‘A’(AB-‘A’)-‘6               satisfies RL =
B- ‘A’(AB- ‘A’)- ‘6.
   Similar arguments     establish the properties of the LM statistics. In particular,
the second form of the statistic LM,, follows from previous argument                  that
A’(AB-‘A’)-‘A’      and B-‘A’(AB-‘A’)-‘AB-’         are generalized   inverses, and the
statistic LM,, is obtained by noting that R = A’(AB-‘A’)-‘A        has RR+R = R when
R+ =B-‘.
  To demonstrate       the asymptotic    equivalence       of DM, to the earlier statistics,    make
a Taylor’s expansion     of the sample moments         for i?n about &, J&,(f?,,)    = J$,(&)       +
G,,&(g,,   - 8”) + oP, and substitute     this in the expression         for DM, to obtain




with the last equality    holding   since G$?;      ‘$nj,(&)      = 0.                         Q.E.D.

   The Wald statistic W,, asks how close are the unconstrained            estimators    to
satisfying the constraints; i.e., how close to zero is a(B,)? This variety of the test is
particularly  useful when the unconstrained    estimator is available and the matrix A
is easy to compute. For example, when the null is that a subvector of parameters
equal constants, then A is a selection matrix that picks out the corresponding       rows
and columns of B- ‘, and this test reduces to a quadratic form with the deviations
of the estimators from their hypothesized     values in the wings, and the inverse of
their asymptotic covariance matrix in the center. In the special case H,: 8 = 8’, one
has A = I.
2224                                                                    W.K. Newey and D. McFadden


   The Wald test W,, is useful if both the unconstrained              and constrained     estimators
are available.     Its first version requires only the readily available                 asymptotic
covariance matrices of the two estimators, but for r < k requires calculation                     of a
generalized     inverse. Algorithms      for this are available,           but are often not as
numerically    stable as classical inversion algorithms because near-zero and exact-
zero characteristic     roots are treated very differently. The second version involves
only ordinary        inverses, and is potentially          quite useful for computation              in
applications.
   The Wald statistic W,, treats the constrained            estimators us ifthey were constants
with a zero asymptotic covariance matrix. This statistic is particularly                   simple to
compute when the unconstrained           and constrained         estimators are available, as no
matrix differences or generalized inverses are involved, and the matrix A need not
be computed. The statistic W,, is in general larger than W,, in finite samples, since
the center of the second quadratic form is (acov6J’                    and the center of the first
quadratic form is (acov e?, - acov I!?~)-, while the tails are the same. Nevertheless,
the two statistics are asymptotically        equivalent.
   The approach of Lagrange multiplier or score tests is to calculate the constrained
estimator e,, and then to base a statistic on the discrepancy                    from zero at this
argument of a condition that would be zero if the constraint were not binding. The
statistic LM,, asks how close the Lagrangian              multipliers Y,, measuring the degree
to which the hypothesized constraints are binding, are to zero. This statistic is easy
to compute if the constrained       estimation problem is actually solved by Lagrangian
methods, and the multipliers are obtained as part of the calculation.                  The statistic
LM,, asks how close to zero is the gradient of the distance criterion, evaluated at
the constrained     estimator. This statistic is useful when the constrained            estimator is
available and it is easy to compute the gradient of the distance criterion, say using
the algorithm      to seek minimum       distance estimates. The second version of the
statistic avoids computation       of a generalized inverse.
   The statistic LM,, bears the same relationship              to LM,, that W,, bears to W,,.
This flavor of the test statistic is particularly        convenient      to calculate, as it can be
obtained by auxiliary regressions starting from the constrained                 estimator g.,:

Theorem    9.3

LM,, can be calculated by a 2SLS regression:
(a) Regress V,d(z,, f?,J’ on g(z,, g,,), and retrieve fitted values VO?(z,, I?,,)‘.
(b) Regress 1 on V&z,, r?“), and retrieve fitted values 9,. Then LM,, = C:= 19:.
For MLE, g = V&‘, and this procedure reduces to OLS.

Proof

Let y be an n-vector of l’s, X an n x k array whose rows are V,&‘, Z an n x m array
whose rows are g’. The first regression yields X = Z(Z’Z)-‘Z’X,     and the second
regression yields 9 = X(X’_%-‘X’y. Then, (l/n)Z’Z = C?,, (l/n)Z’X = r,, (l/n)Z’y =
Ch. 36: Large Sample Estimation and Hypothesis Testing                                       2225




        9’9 = y’@?X)- ‘2y       = y’Z(zq       ‘zx[x’z(zz)-        ‘Z’X] - ‘x’z(z’z)-      ‘Z’y.


Note that V,Q,(g,,) = - Gin;        ‘J,(g,,) = - l-:0;    ‘g,(t?,,). Substituting   terms, y^‘p=
LM,,.                                                                                     Q.E.D.


Another form of the auxiliary regression for computing          LM,, arises in the case of
nonlinear     instrumental    variable regression. Consider the model y, = k(x,, 8,) + E*
with E(E,[ wt) = 0 and E(sf 1w,) = 02, where w, is a vector of instruments.          Define
z, = (y,, x,, wt) and g(q, 0) = w,Cy, - k(x,, @I. Then @(a, 0,) = 0 and Eg(z, ~,)g(z, &J’ =
02Ew,w:. The GMM criterion Q,(0) for this model is




the scalar g2 does not affect the optimization           of this function. Consider the hypo-
thesis ~(0,) = 0, and let I!?,,be the GMM estimator obtained subject to this hypothesis.
One can compute LM,, by the following method:
(a) Regress V,k(x,, 8,) on w,, and retrieve the fitted values V&.
(b) Regress the residual u, = y, - k(x,, f?,,)on V,k,, and retrieve the fitted values 12,.
Then LM,, = nx:, 1tif/C:= 1uf = nR2, with R2 the uncentered multiple correlation
coefficient. Note that this is not in general the same as the standard R2 produced
by OLS, since the denominator           of that definition is the sum of squared deviations
of the dependent variable about its mean. When the dependent variable has mean
zero (e.g. if the nonlinear     regression has an additive intercept term), the centered
and uncentered definitions coincide.
   The approach of the distance metric test is based on the discrepancy between the
value of the distance metric, evaluated at the constrained estimate, and the minimum
attained by the unconstrained          estimate. This estimator is particularly       convenient
when both the unconstrained         and constrained estimators can be computed, and the
estimation algorithm returns the goodness-of-fit             statistics. In the case of linear or
nonlinear least squares, this is the familiar test statistic based on the sum of squared
residuals from the constrained        and unconstrained        regressions.
   The tests based on GMM estimation               with an optimal weight matrix can be
extended to any extremum             estimator.   Consider       such an estimator,     satisfying
eq. (1.1). Also, let e be a restricted estimator, maximizing            Q,(0) subject to a(0) = 0.
Suppose that the equality H = - Z is satisfied, for the Hessian matrix H and the
asymptotic     variance Z [of JIV,Q,(~,)]     from Theorem 3.1. This property is a
generalization    of the information matrix equality to any extremum estimator. For
GMM estimation with optimal weight matrix, this equality is satisfied if the objective
function is normalized by i, i.e. Q,(0) = +9,(8)‘8- ‘J,(0). Let 2 denote an estimator
2226                                                               W.K. Newey and D. McFadden


of ,?Zbased on Band E an estimator       based on t?. Consider   the following   test statistics:

       w = ..(@[‘m’2-‘a(B),                  2 = V@(B),
                  --
       LM = nV,&,(O)‘Z-      ‘V&@),

       DM = 2n[Q,(@ - Q,(e,].

The statistic W is analogous to the first Wald statistic in Table 2 and the statistic
LM to the third LM statistic in Table 2. We could also give analogs of the other sta-
tistics in Table 2, but for brevity we leave these extensions to the reader. Under the
conditions of Theorems 2.1, 3.1, and 4.1, H = - Z and the same conditions on a(0)
previously given, these three test statistics will all have an asymptotic chi-squared
distribution,   with degrees of freedom equal to the number of components            of a(8).
    As we have discussed, optimal GMM estimation provides one example of these
statistics. The MLE also provides an example, as does optimal CMD estimation.
Nonlinear least squares also fits this framework, if homoskedasticity         holds and the
objective function is normalized         in the right way. Suppose that Var(ylx) = c?, a
constant. Consider the objective function Q,(O) = (2b2)- ‘x1= 1 [yi - h(x, f3)12,where
d2 is an estimator of rs2. Then it is straightforward         to check that, because of the
normalization    of dividing by 2b2, the condition H = - Z is satisfied. In this example,
the DM test statistic will have a familiar squared residual form.
    There are many examples of estimators where H = - Z is not satisfied. In these
cases, the Wald statistic can still be used, but 2-l must be replaced by a consistent
estimator of the asymptotic         variance of 6. There is another version of the LM
statistic that will be asymptotically      equivalent to the Wald statistic in this case, but
for brevity we do not describe it here. Furthermore,         the DM statistic will not have
a chi-squared distribution.       These results are further discussed for quasi-maximum
likelihood estimation       by White (1982a), and for the general extremum estimator
case by Gourieroux       et al. (1983).



9.3.    One-step versions   qf the trinity

Calculation    of Wald or Lagrange multiplier test statistics in finite samples requires
estimation of G, R, and/or A. Any convenient consistent estimates of these arrays
will do, and will preserve the asymptotic equivalence of the tests under the null and
local alternatives.  In particular, one can evaluate terms entering the definitions of
these arrays at &, t?,,,or any other consistent estimator of 8,. In sample analogs that
converge to these arrays by the law of large numbers, one can freely substitute
sample and population        terms that leave the probability    limits unchanged.   For
example, if z, = (y,, xr) and 8” is any consistent     estimator of 8,,, then R can be
estimated by (1) an analytic ex_pressio_n for Eg(z, O)g(z, O)‘, evaluated at e”,, (2) a
sample average (l/n)C:= 1dz,, &Jd.q, &J, or (3) a sample average of conditional
Ch. 36: Large Sample Estimation and Hypothesis Testing                                                 2221


expectations
         (lln)C:,          1    ~,~,&J, x,, AMY,x,, 8,J’. These first-order           efficiency    equiv-
alences do not hold in finite samples, or even to higher orders of &I. Thus, there
may be clear choices between these when higher orders of approximation        are taken
into account.
   The next result is an application of the one-step theorem in Section 3.4, and shows
how one can start from any initial &-consistent            estimator    of 8,, and in one
iteration obtain versions of the trinity that are asymptotically    equivalent to versions
obtained when the exact estimators         e^, and GE are used. Further, the required
iterations  can usually be cast as regressions, so their computation           is relatively
elementary. Consider the GMM criterion Q,(0). Suppose gn is any consistent esti-
mator of B0 such that $(gn  -j,,) is stochastically                 bounded. Let 6” be the uncon-
strained maximizer of Q, and 19, be the maximizer                    of Q subject to the constraint
a(6) = 0. Suppose     the null hypothesis,           or a local alternztive, ~(0,) = S/,/i, is true.
The unconstrained       one-step estimator           from eq. (3.1 l), 0, = e”, - (G:R; ‘G,,) ‘CL x
8;   ‘d,(e’,), satisfies &($n     - e^,)L       0. Similarly,   define one-step   constrained      estima-
tors from the Lagrangian          first-order     conditions:


      [$[;]-[A” ‘y[“s!J
Note in this definition that y = 0 is a trivial initially consistent   estimator of the
Lagrangian   multipliers under the null or local alternatives,    and that the arrays B
and A can be estimated      at 8,. The one-step theorem again applies, yielding
fi(&     - 6,) 3 0 and fi(%, - m) 3 0. Then, these one-step equivalents       can be
substituted    in any of the test statistics  of the trinity without changing   their
asymptotic distribution.
   A regression procedure for calculating    the one-step expressions is often useful
for computation.    The adjustment    from & yielding the one-step unconstrained
estimator is obtained by a two-stage least squares regression of the constant one
on V&z,, I%), with g(zt, 8,) as instruments; i.e.

(a) Regress each component     of V~d(z~, &), on g(zt, &) in the sample t = 1, . . , n,
    and retrieve fitted values V&(zt, &).
(b) Regress 1 on V~i(z,,&);     and adjust &, by the amounts     of the fitted coeffi-
     cients.

Step (a) yields V&z,, 8,J’ = g(z,, 8J2;            ‘I-,,, and step (b) yields coefficients
2228                                                                    W.K. Newey and D. McFadden


This is the adjustment    indicated by the one-step theorem.
   Computation     of one-step constrained  estimators is conveniently              done using the
formulae



         = & + A - BP’A’(AB-‘A’):          ‘[a(&)    + AA],

       6, = - (.4BP’A’)-   ‘a(&   E - (AK      l/I’)- ‘[a(e’,) + AA],


with A and B evaluated at 8,. To derive these formulae from the first-order conditions
fqr the Lagrangian    problem, replace V,Q,(@ by the expression        - (rJ2;  ‘I-b) x
(8” -i,,) from:the one-step definition of the unconstrained   estimator, replace a(g,,)
by a(fI,) + A(8, - g,,), and use the formula        for a partitioned    inverse.


9.4.    Special cases

Maximum likelihood. We have noted that maximum                 likelihood estimation can be
treated as GMM estimation with moments equal to the score, g = V,t. The statistics
in Table 2 remain the same, with the simplification              that I3 = f2( = G = r). The
likelihood ratio statistic 2n[L,(8,) - L,(&J], where L,(0) = (l/n) C:= 1Qz,, d), is shown
by a Taylor’s expansion        about g” to be asymptotically          equivalent    to the Wald
statistic W,,, and hence to all the statistics in Table 2.
    Suppose one sets up an estimation problem in terms of a maximum likelihood
criterion, but that one does not in fact have the true likelihood function. Suppose
that in spite of this misspecification,     optimization     of the selected criterion yields
consistent estimates. One place this commonly arises is when panel data observations
are serially correlated, but one writes down the marginal likelihoods of the obser-
vations ignoring serial correlation.     These are sometimes called pseudo-likelihood
criteria. The resulting estimators can be interpreted          as GMM estimators, so that
hypotheses can be tested using the statistics in Table 2. Note however that now
G # 0, so that B = G’S2- ‘G must be estimated in full, and one cannot do tests using
a likelihood ratio of the pseudo-likelihood        function.
   Least squares. Consider the nonlinear regression model y = h(x, 0) + E, and suppose
E(ylx)=h(x,8)andE[{y-h(x,8)}21x]=                cr*. Minimizing the least squares criterion
Q,(0) = C:= 1 [y, - h(z,, Q]’ is asymptotically       equivalent to GMM estimation with
g(z, 19)= [y - h(x, B)]V,h(x, 13)and a distance metric R, = (a2/n) C:= 1 [V,h(x, 0,)] x
[V,h(x, e,)]‘. For this problem, B = R = G. If h(z,, 0) = z,O is linear, one has g(z,, (I) =
u,(@z,, where u,(0) = y, - z,O is the regression residual, and 0, = (o’/n) C:= 1z,z;.
   Instrumental variables. Consider the regression model y, = h(z,, 0,) + E, where E,
may be correlated       with V,h(z,,O,). Suppose there are instruments w such that
E(e,I w,) = 0. For this problem, one has the moment conditions                   g(y,, z,, w,, 0) =
[y, - h(z,, U)]f(w,) satisfying Eg( yt, z,, w,, 0,) = 0 for any vector of functions f(w) of
Ch. 36: Large Sample Estimation   and Hypothesis    Testing                                            2229



the instruments,     so the GMM        criterion    becomes


      Qn(4= f ; ; 1Y, - Nz,,Q)f(w,) 0, ’ t, *Cl      ’
                                              {Y, - et, e))f(w,)
               f 1                 1    [                       1

with 0, = (cr2/n)C:= rf(w,)f(w,)‘. Suppose that it were feasible to construct       the
conditional  expectation  of the gradient of the regression function conditioned      on
w, qt = E[V&(z,, S,)\ wJ. This is the optimal vector of functions of the instruments,
in the sense that the GMM estimator based on f(w) = q will yield estimators with
an asymptotic covariance matrix that is smaller in the positive definite sense than
any other distinct vector of functions of w. A feasible GMM estimator with good
efficiency properties may then be obtained by first obtaining          a preliminary,,&
consistent estimator 8,, employing a simple practical distance metric, second, regres-
sing V&z,, 8”) on a flexible family of functions of wt, such as low-order polynomials
in w, and, third, using fitted values from this regression as the vector of functions
f(w,) in a final GMM estimation.          Note that only one Newton-Raphson          step is
needed in the last stage. Simplifications      of this problem result when h(z, 0) = z0 is
linear in 8; in this case, the feasible procedure above is simply 2SLS, and no iteration
is needed.
   Simple hypotheses. An important practical case of the general nonlinear hypothesis
~(0,) = 0 is that a subset of the parameters are zero. (A hypothesis that parameters
equal constants other than zero can be reduced to this case by reparametrization.)

Assume@=(,xf+fl~r)
         and H,: /I = 0. The first-order conditions for solution

of this problem    are 0 = &V,Q,(i?,,),       0 = &VsQ,,(g,,)          + &y,,       and 0 = &,, implying

Y,=   -V~Q.(R.),andA=[~~~_~~~~~ . Let C = B- ’ be the asymptotic                               covariance

matrix of &(gn      - 0,), and AB- ‘A’ = C,, the submatrix                 of C for j?. Taylor’s expan-
sions about t?”of the first-order      conditions      imply ,,&(a.       - CI,)= - B&I,,      fib”    + or
                                           A
and &Y, = C& - ~~a~~l~,,J&~n + op= j?‘C&lfln + op. Then the Wald statistics
are




One can check the asymptotic            equivalence           of these statistics    by substituting    the
expression   for &(&-c(,).       The LM statistic, in any version, becomes LM, =
nV,Qn(t)n)‘CssV,Q,(B,).    Recall that B, hence C, can be evaluated at any consistent
estimator of 8,. In particular, the constrained estimator is consistent under the null
2230                                                                  W.K. Newey and D. McFadden


or under local alternatives.     The LM testing procedure for this case is then to (a)
compute the constrained       estimator Cr,,subject to the condition /3 = 0, (b) calculate
the gradient and Hessian of Q, with respect to the full parameter vector, evaluated
at cl, and /I = 0, and (c) form the quadratic form above for LM, from the /I part of
the gradient and the /? submatrix of the inverse of the Hessian. Note that this does
not require any iteration of the GMM criterion with respect to the full parameter
vector.
   It is also possible to carry out the calculation         of the LM, test statistic using
auxiliary regressions. This could be done using the auxiliary regression technique
introduced earlier for the calculation of LM,, in the case of any nonlinear hypothesis,
but a variant is available for this case that reduces the size of the regressions
required. The steps are as follows:
(a) Regress VJ(z,,8,)      and V,J(z,, I?,,)’ on g(z,, t?,,), and retrieve the fitted values
     V,?(Z~, g,J and V$~(Z,, I?“).
(b) Regress VD?(z,, 0,) on Vol?(z(zr, f?,J, and retrieve the residual u(z,, I$,).
(c) Regress the constant 1 on the residual u(z,, g,,), and calculate the sum of squares
     of the$rted values of 1. This quantity is LM,.
To justify this method, start from the gradient of the GMM criterion,

       0 = V,Q&,,O)= - %fl;'&(&,O),

                v,Q,@,>O)
                        = - G,,~;'&@,,O),
where G, is partitioned   into its CI and /I submatrices. From              the formula       for the
partitioned inverses, one has for C = BP1 the expression

       c,,      = [z-,n-rr;       - T~~-‘Tb(T,R-‘r~)-‘r,n-‘r~]-‘.

The fitted values from step (a) satisfy

       V&z,,       6,) = g(zr, e,)fl,   ‘G&,

and

       V&z,, e,)’ = g(z,, e,)a,         ‘CL,.

Then the residuals            from step (b) satisfy

       u(z,, e,) = g(zf, e,)fiR 1G& - g(zf, @,)a; ’ G;,(G,$;        r G;,) - ’ G&2;   t G&.

Then


       f,
            f
             zl u(zt, &I’ = VsQ .(s- (9’- V,Q,b%nW(G,,$, l G;J - ’ G,&‘n-1Gbs
Ch. 36: Large Sample Estimation   and Hypothesis     Testing                                            2231




Then, the step (c) regression yields LM,. In the case of maximum                               likelihood
estimation, step (a) is redundant and can be omitted.



9.5.    Tests for overidentifying     restrictions

Consider the GMM estimator based on moments g(z,, 0), where g is m x 1,O is k x 1,
and m > k, so there are overidentifying moments. Thecriterion

       Q,(@ = - $M9’fJ, ’ &(@,

evaluated at its maximizing    argument @,,for any 0,&n,           has the property that
- 2n& = - 2nQ,(&) Lx:_,           under the null hypothesis      that Eg(z, 0,) = 0. This
statistic then provides a specification test for the overidentifying    moment_ in g. It
can also be used as an indicator for convergence in numerical search for 0,.
   To demonstrate      this result, recall from eqs. (9.1) and (9.2) that - a-             1’2&&(tI,)       =
02c,% % m N(0, I) and &(f!?” - 0,) = B- ’ G’O- ‘j2%!” + op. Then,                         a Taylor’s    ex-
pansion yields


       &c?,(&)= - fii’2%, + G,,(G$?; 1G,)- lGp;                        1’2@,+ op = - 12;‘2~,q, +o,,

where R, = I - 0; 112Gn(Gb12;1G,)~ ‘Gkf2;                  ‘I2 is idempotent      of rank m - k. Then

       - 2nQ,(6,,) = %:R,%,       + op Ax:_,.

   Suppose that instead of estimating 6 using the full list of moments, one uses a
linear combination        Lg(z, f3), where L is r x m with k < r < m. In particular, L may
select a subset of the moments. Let t?” denote the GMM estimator obtained from
these moment combinations,            and assume the identification  conditions are satisfied
so I?,, is Jn-consistent.     Then the statistic S = nd,,(e,)‘l2; ‘I2 R,,R; 1’2d,(8,) -% xi_,
under If,, and this statistic     is asymptotically            equivalent   to the statistic   - 2nQ,(&).
 This result holds for any &-consistent        estimator     $” of 8,, not necessarily the
optimal GMM estimator for the moments Lg(z, 0), or even an initially consistent
estimator based on only these moments. The distance metric in the center of the
quadratic form S does not depend on L, so that the formula for the statistic is
invariant with respect to the choice of the initially consistent estima’tor. This implies
in particular that the test statistics S for overidentifying    restrictions, starting from
2232                                                            W.K. Newey and D. McFadden


different subsets of the moment conditions, are all asymptotically      equivalent. HOW-
ever, the presence of the idempotent       matrix R, in the center of the quadratic form
S is critical to its statistical properties. Only the GMM distance metric criterion
using all moments, evaluated at &, is asymptotically        equivalent to S. Substitution
of another &-consistent       estimator  @,, in place of 8n yields an asymptotically
equivalent version of S, but - 2nQ,(gJ is not asymptotically   chi-square distributed.
   These results are a simple coroLlary of the one-step theorem. Starting from gn, the
one-step estimator of 6” is Jn(O, - 8,,) = - (Glfl; ‘G,)) ‘Gifl; ‘d,(g”). Then, one
has a one-step estimator ,/;lS,,($,,) = JnJ,,(gJ   + G,,,I@~~ - e”,) = 0; “‘R,f2;     ‘I2 x
&ti,(e”,).   Substituting   this expression in the formula for - 2nQ,,(fi,J yields the
statistic S.
   The test for overidentifying   restrictions can be recast as an LM test by artificially
embedding the original model in a richer model. Partition the moments

                  Y’k4
       dz, 4 =
                        1’
                 [ Y2(Z,@)

where g1 is k x 1 with G, = EV,g’(z,8,)    of rank         k, and   g2 is (m-k)    x 1 with
G, = EV0g2(z, 0,). Embed this in the model




where II/ is an (m - k) vector of additional parameters.    The first-order   condition   for
GMM estimation of this expanded model is




The second block of conditions are satisfied by $,, = &((?,,), no matter what I!?,,,so
g,, is determined by 0 = G’J2; lgi(e,). This is simply the estimator obtained from
the first block of moments, and coincides with the earlier definition of g”. Thus,
unconstrained estimation of the expanded model coincides with restricted estimation
of the original model.
   Next consider GMM estimation             of the expanded model subject to H,: $ = 0.
This constrained      estimation   obviously coincides with GMM estimation        using all
moments in the original model, and yields e^,. Thus, constrained estimation           of the
expanded model coincides with unrestricted estimation          of the original model.
   The distance metric test statistic for the constraint    Ic/= 0 in the expanded model
is DM, = - 2n[&(&,,, 0) - &(q,,, $J] = - 2nQ,(&), where Q denotes the criterion
as a function of the expanded parameter list. One has Q,(6”,0) = Q,,(8”) from the
coincidence     of the constrained     expanded model estimator       and the unrestricted
Ch. 36: Large Sample Estimation and Hypothesis Testing                                   2233


original model estimator, and one has Q,(e,, $,,) = 0 since the number of moments
equals the number of parameters. Then, the test statistic - 2nQ,(&) for overidentify-
ing restrictions    is identical to a distance metric test in the expanded model, and
hence asymptotically        equivalent to any of the trinity of tests for H,: II/ = 0 in the
expanded model.
   We give four examples of econometric        problems that can be formulated as tests
for overidentifying     restrictions:

Example     9.1

If y = xb + F with E(E(x) = 0, E(E’ Ix) = 02, then the moments



                                              1
                             4Y - XP)
  g’(zJJ)     =           (Y_xp)2_,2
                      [

can be used to estimate p and 02. If E is normal,          then these GMM estimators      are
MLE. Normality can be tested via the additional            moments that give skewness    and
kurtosis,


     s2k B)=
                          [ ( y
                                (Y - xP)“la”
                                 - xj?)“/a” -. 3   1
Example     9.2

In the linear model y = xb + E with E(E[x) = 0 and E(E~B,Ix) = 0 for t # s, but with
possible heteroskedasticity  of unknown form, one gets the OLS estimates b of /I and
V(b) = s2(X’X)-’    under the null hypothesis of homoskedasticity. A test for homo-
skedasticity can be based on the population      moments 0 = E vecu[x’x(e2 - 02)],
where “vecu” means the vector formed from the upper triangle of the array. The
sample value of this moment vector is



            I
     vecui gl.+A (Y, - xtBY- s’> ,
                  I                                    1

the difference between the White robust estimator          and the standard   OLS estimator
of vecu [X’f2X].

Example     9.3

If P(z, 8) is the log-likelihood of an observation, and H^,is the MLE, then an addi-
tional moment condition that should hold if the model is specified correctly is the
information     matrix equality

    0 = EV,,,/‘(z, 4,) + EV,/(z, U,)V,/(z, 8,)‘.
2234                                                              W.K. Nrwey and D. McFudden


The sample analog is White’s information     matrix test, which then can be interpreted
as a GMM test for overidentifying   restrictions.

Example      9.4

In the nonlinear    model y = h(x, 0) + E with E(E~x) = 0, and e, a GMM estimator
based on moments w(x)[y - h(x, fI)], w h ere w(x) is some vector of functions of x,
suppose one is interested in testing the stronger assumption   that E is independent of
x. A necessary and sufficient condition      for independence   is E[w(x) - Ew(x)] x
f[ y - h(x, 19,)] = 0 for every function f and vector of functions w for which the
moments exist. A specification test can be based on a selection of such moments.


9.6.      Specijication   tests in linear models5’


GMM tests for overidentifying         restrictions have particularly     convenient    forms in
linear models; see Newey and West (1988) and Hansen and Singleton (1982). Three
standard specification tests will be shown to have this interpretation.        We summarize
a few properties of projections       that will be used in the following discussion. Let
Yp, = X(X/X)-X         denote the projection matrix from R” onto the linear subspace X
spanned by an n x p array X. (We use a Moore-Penrose              generalized inverse in the
definition of Yx to handle the possibility that X is less than full rank; see Section
9.8.) Let 2, = I - Yp, denote the projection matrix onto the linear subspace orthog-
onal to X. Note that Yx and sx are idempotent.             If X is a subspace generated by
an array X and w is a subspace generated by an array W = [X Z] that contains
X, then Y’xY’w = ??,&Fx = gx; i.e. a projection onto a subspace is left invariant by
a further projection onto a larger subspace, and a two-stage projection onto a large
subspace followed by a projection           onto a smaller one is the same as projecting
directly onto the smaller one. The subspace of VVthat is orthogonal to X is generated
by 2x W; i.e., it is the set of linear combinations      of the residuals, orthogonal     to X,
obtained by regressing Won X. Any y in R” has a unique decomposition                y = Yxy +
sxYwy + ZIwy into the sum of projections onto X, the subspace of W orthogonal
to X, and the subspace orthogonal           to W. The projection Z?x.Yw can be rewritten
%xYw = g’w - Yx = Y’w9, = &Y&,                    or  since $x W = Sx[X Z] = [0 2xZ],
z?xP’w = 9 Ll,yw-- Pdxz = 2,Z(Z’9,Z)mZ’LL?x.         This implies that 2xYw is idempotent
since (Z!,.Y\,)($,Y’,)     = Z!.x(YwZ?x)Y’w = 2,(Z?!,Y’,)g,      = sxYw.
    Omitted variables test: Consider the regression model y = X/3 + E,where y is n x 1,
X is n x k, E(EIX) = 0, and E(EE’IX) = a2Z. Suppose one has the hypothesis H,:
B1 = 0, where /I1 is a p x 1 subvector of /I. Define u = y - Xb to be the residual
associated with an estimator b of /I. The GMM criterion is then 2nQ = u’X(X’X)-‘.
X’u/a2. The projection matrix Px = X(X/X)-‘X’             that appears in the center of this
criterion can obviously       be decomposed       as Yx = g)x2 + (9X - Yx,). Under H,,

  “Paul     Ruud contributed   substantially   to this section.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                    2235


u = y - X,b, and X’u can be interpreted as k = p + q overidentifying          moments for
the q parameters p2. Then, the GMM test statistic for overidentifying           restrictions
is the minimum value - 2n& in b, of u’PP,u/a2. But Pp,u = I?pxZu + (Yx - Ypx,)y
and minb2u’Yx2u = 0 (at the OLS estimator under H, that makes u orthogonal                   to
X2). Then - 2~0, = ~‘(9’~ - PPx,)y/a 2. The unknown variance c? in this formula
can be replaced by any consistent estimators 2, in particular the estimated variance
of the disturbance  from either the restricted or the unrestricted    regression, without
altering the asymptotic distribution,   which is xf under the null hypothesis.
   The statistic - 2n& has three alternative interpretations.      First,

                                                SSR,,     - SSR,
      - 2n& = y’P,ylcT2 - Y’pxz Y/u2 =                   g2      ’

which is the difference of the sum of squared residuals from the restricted regression
under If, and the sum of squared residuals from the unrestricted regression, normal-
ized by a2. This is a large sample version of the usual finite sample F-test for H,.
Second, note that the fitted value of the dependent        variable from the restricted
regression is Jo = Px2y, and from the unrestricted     regression is 9, = .Ppxy, so that

      - 24,    = (9b90 - p:9,)/a’      = (90 - 9”)‘(90 - 9”)/@’ = IIPO- 9” II”/~‘.

Then, the statistic is calculated from the distance between the fitted values of the
dependent    variable with and without H, imposed. Note that this computation
requires no covariance matrix calculations. Third, let b, denote the GMM estimator
restricted by H, and b, denote the unrestricted GMM estimator. Then, b, consists
of the OLS estimator for p2 and the hypothesized value 0 for /II, while b, is the OLS
estimator for the full parameter vector. Note that j0 = Xb, and 9, = Xb,, so that
j0 - 9, = X(b, - b,). Then

      - 24,    = (b, - b,)‘(X’X/a2)(b,      - b,) = (b, - b,)‘V(b,)-   ‘(6, - b,).

This is the Wald statistic W,,. From the equivalent form W,, of the Wald statistic,
this can also be written as a quadratic form - 2~10, = b;,,V(b,,,)-lb,,,,       where b,,,
is the subvector of unrestricted estimates for the parameters that are zero under the
null hypothesis.
    The Hausman      exogeneity    test: Consider   the regression    y = X,/I, + X2B2 +
X3/jj + E, and the null hypothesis that X, is exogenous, where X2 is known to be
exogenous, and X, is known to be endogenous. Suppose N is an array of instruments,
including X2, that are sufficient to identify the coefficients when the hypothesis is
false. Let W = [N X,] be the full set of instruments       available when the null hypo-
thesis is tfue. Then the best instruments   under the null hypothesis are XAO= 9,X      =
[Xl, X,X,],      and the best instruments      under the alternative     are ,XU =Yp,X E
[X, X2 X,]. The test statistic for overidentifying     restrictions is - 2nQ, = y’(Ppx, -
.Yg,)y/a’, as in the previous case. This can be written - 2nQ, = (SSRi” - SSRi0)/a2,
2236                                                                     WK. Newey and D. McFadden


with the numerator the difference in sum of squared residuals from an OLS regression
of y on 2, and an OLS regression of y on r?,. Also, - 2nQ^, = 11  jf, - jiu II’/o’, the
difference between     the fitted values of y from a regression           on 2, and a regression
on 2,. Finally,

       - 2nQ^, = (b,s,s, - ~2s&‘CVb2s&             -   W2~d-(b2~~~o - b2dT
an extension of the Hausman-Taylor             exogeneity test to the problem where some
variables are suspect and others are known to be exogenous. Newey and West (1988)
show that the matrix in the center of this quadratic form has rank equal to the rank
of X,, and that the test statistic can be written equivalently          as a quadratic form in
the subvector of differences of the 2SLS estimates for the X, coefficients, with the
ordinary inverse of the corresponding          submatrix of differences of variances in the
center of the quadratic form.
   Testingfor    overidentifying  restrictions  in a structural system: Consider an equation
y = X/I + E from a system of simultaneous          equations, and let W denote the array of
instruments    (exogenous and predetermined          variables) in the system. Let _? = 9,X
denote the fitted values of X obtained from OLS estimation of the reduced form.
The equation is oueridentijied       if the number of instruments      W exceeds the number
of right-hand-side      variables X. The GMM test statistic for overidentification        is the
minimum in fi of

       - 2nQ,(/?) = u’P,u/a2       = u’Piu/a2     + ~‘(9~   - Pg)u/o’,

where u = y - Xg. As before, - 2n& = y’(P’, - Pi)y/a’.          Under H,, this statistic
is asymptotically    chi-squared    distributed  with degrees of freedom equal to the
difference in ranks of Wand 2. This statistic can be interpreted as the difference in
the sum of squared residuals from the 2SLS regression of y on X and the sum of
squared residuals from the reduced form regression of y on W, normalized          by CJ~.
A computationally     convenient equivalent form is - 2n& = II J&, - $2 (I2/a2, the sum
of squares of the difference between the reduced form fitted values and the 2SLS
fitted values of y, normalized     by c2. Finally, - 2n& = y’sgP,,,gky/02      = nR2/a2,
where R2 is the multiple correlation coefficient from regressing the 2SLS residuals
on all the instruments;     this result follows from the equivalent    formulae for the
projection onto the subspace of VWorthogonal to the subspace spanned by 2;;. This
test statistic does not have a version that can be written as a quadratic form with
the wings containing a difference of coefficient estimates from the 2SLS and reduced
form regressions.



9.7.   Specification   testing   in multinomial   models

As applications   of GMM testing, we consider hypotheses arising in the context of
analysis of discrete response data. The first example is a test for omitted variables
Ck. 36: Larye Sample Estimation and Hypothesis             Testing                      2237


in multinomial    data, which extends to various tests of functional specification by
introduction   of appropriate  omitted variables. The second example tests for the
presence of random effects in discrete panel data.

Example         9.5

Suppose J multinomial     outcomes are indexed C = { 1,. . , J}. Define z = (d,, . , d,, x),
where d, is one if outcome j is observed, and zero otherwise. The x are exogenous
variables. The log-likelihood   of an observation is

        e(Z,   e) = C di log P,(i, X, e),
                       SC



where P&i,x, 19) is the probability     that i is observed from C, given x. Suppose
0 = (CI,/?), and the null hypothesis He: fi = 0. We derive an LM test starting from the
maximum likelihood estimates of a under the constraint fi = 0. Define

        ui = [di - P,(i, X, gn)]Pc(i, x, c??,,-‘I’,

        qi = P&,x,           ~J1’*VO logPc(i,     x, GJ.

Then, in a sample t = 1,. . . , n, one has (l/n) C:= 1 V&(zt, g,,) E (l/n) C:= 1CiEc qituit.
Also, (l/n) C:= i Cisc qiqj 3 R since


        fl=      -EVged~           -EVsC         [di - Pc(i,x,8o)]VslogPc(i,x,Bo)
                                           iEC
               = E C        Pc(i,x,0e)[VtilogP(i,x,e)][V,logP(i,x,~)]’.
                      icC


Then,




This statistic can be computed from the sum of squares of the fitted values of uit
from an auxiliary regression over i and t of uit on qil. If R2 is the multiple correlation
coefficient from this regression, and U is the sample mean of the uir, then LM,, =
n( J - 1)R2 + (1 - R2)d2.
   McFadden (1987) shows for the multinomial        logit model that the Hausman and
McFadden (1984) test for the independence      from irrelevant alternatives property of
this model can be calculated as an omitted variable test of the form above, where
the omitted variables are interactions of the original variables and dummy variables
for subsets of C where nonindependence    is suspected. Similarly, Lagrange multiplier
tests of the logit model against nested logit alternatives        can be cast as omitted
2238                                                                           W.K. Newey and D. McFadden


variable tests where the omitted variables are interactions  of dummy variables for
suspect subsets A of C and variables of the form log[P,(1’, x, I!?,,)/C,,, P,(i, x, e,)].

Example 9.6

We develop a Lagrange multiplier test for unobserved        heterogeneity in discrete
panel data. A case is observed to be either in state d, = + 1 or d, = - 1 in periods
t = 1,. . . , T. A probability model for these observations  that allows unobserved
heterogeneity     is




where x r,. . . , xT are exogenous, PI,. . , /jT and 6 are parameters, F is a cumulative
distribution    function for a density that is symmetric        about zero, and v is an
unobserved “case effect” heterogeneity. The density h(v) is normalized so that Ev = 0
and Ev2= 1.
   When 6 = 0, this model reduces to a series of independent        Bernoulli trials,


       P(d,,. ..,d,lx,,.     .,x,,Bl>.     .,/LO)   =        fi    f’k&xtBtL
                                                             1=1



and is easily estimated. For example, F normal yields binary probits, and F logistic
yields binary logits. A Lagrange multiplier test for 6 = 0 will detect the presence of
unobserved heterogeneity across cases. Assume a sample of n cases, drawn randomly
from the population.    The LM test statistic is




       LM=
                                                        [
                                                            Cw
                                                                      12
              n C (Vd2/n-                (VAVJYln                 1 (VpW&Yln -
               i                                        I[                      1

where e is the log-likelihood of the case, V,/ = (VP,/, , V,,Z?), and all the derivatives
are evaluated at 6 = 0 and the Bernoulli model estimates of /I. The j? derivatives are
straightforward,

       e,t = d,x,f(d,x,P,)/F(d,x,B,),

where f is the density          of F. The 6 derivative               is more delicate,   requiring   use of
I’Hopital’s rule:


       la=;                ~-             f(4xtBJ’ + i 4f(4x,B,) 2
                                          W,x,BJ2 I[ t=I F(d,x,&) II ’
Ch. 36: Large Sample Estimation   and Hypothesis   Testing                                      2239



The reason for introducing       6 in the form above, so J&J appeared in the probability,
was to get a statistic where C V& was not identically zero. The alternative             would
have been to develop the test statistic in terms of the first non-identically      zero higher
derivative; see Lee and Chesher (1986).
   The LM statistic can be calculated by regressing the constant               1 on V& and
V,,P, . . . ) V,“e, where all these derivatives are evaluated at 6 = 0 and the Bernoulli
model estimates, and then forming the sum of squares of the fitted values. Note that
the LM statistic is independent        of the shape of the heterogeneity   distribution    h(v),
and is thus a “robust” test against heterogeneity        of any form.



9.8.     Technicalities

Some test statistics are conveniently   defined using generalized inverses. This section
gives a constructive definition of a generalized inverse, and lists some of its properties.
A matrix ,& is a Moore-Penrose        generalized inverse of a matrix ,A, k if it has three
properties:
  (i) AA-A = A,
 (ii) A-AA-     = A-,
(iii) AA _ and A -A are symmetric.
There are other generalized inverse definitions that have some, but not all, of these
properties; in particular A + will denote any matrix that satisfies (i).
    First, a method for constructing   a generalized inverse is described, and then some
of the implications   of the definition are developed. The construction      is called the
singular value decomposition (SVD) of a matrix, and is of independent        interest as a
tool for finding the eigenvalues and eigenvectors       of a symmetric matrix, and for
calculation of inverses of moment matrices of data with high multicollinearity;        see
Press et al. (1986) for computational     algorithms and programs.

Lemma 9.4

Every real m x k matrix A of rank r can be decomposed                  into a product

         A=UDV
        mxk    mxrrxrrxk’



where D is a diagonal  matrix with positive                  nonincreasing    elements   down   the
diagonal, and U and V are column-orthonormal;                   i.e. U’U = I, = V’V.

Proof

The m x m matrix AA’ is symmetric and positive semi-definite. Then, there exists an
m x m orthonormal    matrix W, partitioned   W = [W, W,] with WI of dimension
m x r, such that w;(AA’)W,  = G is diagonal with positive, nonincreasing  diagonal
2240                                                                       WK. Newey and D. McFadden


elements, and W;(AA’)W, = 0, implying A’W, = 0. Define D from G by replacing the
diagonal elements of G by their positive square roots. Note that W' W = I = W W’ =
W, W; + W, W;. Define U = W, and V’ = D-l U’A. Then, U’U = I, and V’V =
D~‘U’AUD~‘=D-‘GD-‘=I,.Further,A=(Z,-W,W;)A=UU’A=UD1/‘.This
establishes the decomposition.                                              Q.E.D.

   Note that if A is symmetric, then U is the array of eigenvectors of A corresponding
to the nonzero roots, so that A’U = UD,, with D, the r x r diagonal matrix with the
nonzero eigenvalues     in descending   magnitude   down the diagonal. In this case,
V = A’UD-’ = UD,D-‘.          Since the elements of D, and D are identical except
possibly for sign, the columns of U and V are either equal (for positive roots) or
reversed in sign (for negative roots).

Lemma 9.5

The Moore-Penrose generalized inverse of an m x k matrix A is the matrix A- =
 V D-l   U’ Let A’ denote any matrix, including A-, that satisfies AA+A = A.
kxr     rxr    rxm
These matrices satisfy:
(1) A+ = A- ’ if A is square and nonsingular.
(2) The system of equations Ax = y has a solution if and only if y = AA+y, and the
    linear subspace of all solutions is the set ofvectors x = A+y + [Z - A+A]z for all
       ZERk.
(3) AA+ and A+A are idempotent.
(4) If A is idempotent, then A = A-.
(5) If A = BCD with B and D nonsingular,                  then A- = D-‘C-B-‘,          and any matrix
    A+ = D-‘C+B-’       satisfies AA+A = A.

Proof

Elementary;          see Pringle   and Rayner   (1971).

Lemma 9.6

If A is square, symmetric, and positive semi-definite of rank r, then
(1) There exist Q positive definite and R idempotent   of rank r such that A = QRQ
    and A- = Q-‘RQ-‘.
(2) There exists kt, column-orthonormal    such that U’AU = D is nonsingular   diag-
    onal and A- = U(U’AU)- ’ U’.
(3) A has a symmetric square root B = A”‘, and A- = B-B-.

Proof

Let W = [U W,]             be an orthogonal     matrix     diagonalizing    A. Then,     U’AU = D, a

diagonal       matrix of positive eigenvalues,     and A W, = 0. Define Q = W
                                                                                       ID:1:_.
W’,R=          W
                   1, 0
                 [ 00     1w’ and B = UD’i2U’.
                             ’
                                                                                               Q.E.D.
Ch. 36: Large Sample Estimation and Hypothesis Testing                                                  2241


Lemma 9.7
If y - N(A,I, A), with A of rank I, and A+ is any symmetric matrix satisfying AA+A = A,
then y’A+y is noncentral       chi-square distributed  with I degrees of freedom and
noncentrality   parameter ,l’Al.


Proof

Let W = [U W,] be an orthonormal  matrix that diagonalizes A, as in the proof of
Lemma 9.6, with U’AU = D, a positive diagonal r x r matrix, and W’AW, = 0,

implying    A W, = 0. Then, the nonsingular              transformation      z=


mean [ Dm1’F’A’]           and covariance       matrix

buted N(D- “2U’A2,Z,), z2 = W,y = 0, implying w’y = [Dli2z, 01. It is standard
that z’z has a noncentral chi-square distribution  with r degrees of freedom and
noncentrality parameter A’AUD-‘U’AA     = 2’A;1. The condition A = AA+A implies
U’AU = U’AWW’A+ WW’AU, or

        D = [DO]W’A+       W[DO]‘=        D(U’A+U)D.

Hence, U’A+U = D-l.           Then

      y’A+y = y’WW’A+           WW’y = [z;D”~O](W’A+               W)[D”2z;       01’

               = z;D”~(U’A+U)D~‘~Z~            = z;zl.
                                                                                                   Q.E.D.


References

Ait-Sahalia,  Y. (1993) “Asymptotic   Theory for Functionals   of Kernel Estimators”,    MIT Ph.D. thesis.
Amemiya, T. (1973) “Regression       Analysis When the Dependent        Variable is Truncated     Normal”.
   Econometrica, 41, 997-1016.
Amemiya, T. (1974) “The Nonlinear Two-Stage Least-Squares         Estimator”, Journal of Econometrics,     2,
   105-l 10.
Amemiya, T. (1985) Advanced Econometrics, Cambridge, MA: Harvard University Press.
Andersen, P.K. and R.D. Gill (1982) “Cox’s Regression Model for Counting Processes: A Large Sample
   Study”, The Annals of Statistics, 19, 1100-1120.
Andrews, D.W.K. (1990) “Asymptotics        for Semiparametric   Econometric     Models: I. Estimation  and
   Testing”, Cowles Foundation Discussion Paper No. 908R.
Andrews, D.W.K. (1992) “Generic Uniform Convergence”,         Econometric Theory, 8,241-257.
Andrews, D.W.K. (1994) “Empirical Process Methods in Econometrics”,         in: R. Engle and D. McFadden,
  eds., Handbook ofEconometrics, Vol. 4, Amsterdam: North-Holland.
Barro, R.J. (1977) “Unanticipated   Money Growth and Unemployment          in the United States”, American
  Economic Reoiew, 67, 101-115.
2242                                                                              W.K. Newey and D. McFadden


Bartle, R.G. (1966) The Elements oflntegration, New York: John Wiley and Sons.
Bates, C.E. and H. White (1992) “Determination      of Estimators with Minimum Asymptotic Covariance
   Matrices”, preprint, University of California, San Diego.
Berndt, E.R., B.H. Hall, R.E. Hall and J.A. Hausman (1974) “Estimation        and Inference in Nonlinear
   Structural Models”, Annals of Economic and Social Measurement, 3,653-666.
Bickel, P. (1982) “On Adaptive Estimation,” Annals of Statistics, 10, 6477671.
Bickel, P., C.A.J. Klaassen, Y. Ritov and J.A. Wellner (1992) “Efficient and Adaptive Inference in
   Semiparametric    Models” Forthcoming    monograph,    Baltimore, MD: Johns Hopkins University Press.
Billingsley, P. (1968) Convergence ofProbability Measures, New York: Wiley.
Bloomfeld, P. and W.L. Steiger (1983) Least Absolute Deviations: Theory, Applications, and Algorithms,
   Boston: Birkhauser.
Brown, B.W. (1983) “The Identification    Problem in Systems Nonlinear in the Variables”, Econometrica,
   51, 175-196.
Burguete, J., A.R. Gallant and G. Souza (1982) “On the Unification                    of the Asymptotic    Theory of
   Nonlinear Econometric      Models”, Econometric Reviews, 1, 151-190.
Carroll, R.J. (1982) “Adapting for Heteroskedasticity    in Linear Models”, Annals of Statistics, 10,1224&1233.
Chamberlain,     G. (1982) “Multivariate   Regression Models for Panel Data”, Journal of Econometrics, 18,
   5-46.
Chamberlain,     G. (1987) “Asymptotic    Efficiency in Estimation with Conditional          Moment Restrictions”,
   Journal of Econometrics, 34, 305-334.
Chesher, A. (1984) “Testing for Neglected Heterogeneity”,            Econometrica, 52, 865-872.
Chiang, C.L. (1956) “On Regular Best Asymptotically                Normal Estimates”, Annals of Mathematical
   Statistics, 27, 336-351.
Daniels, H.E. (1961) “The Asymptotic          Efficiency of a Maximum           Likelihood   Estimator”,   in: Fourth
   Berkeley Symposium on Mathematical Statistics and Probability, pp. 151-163, Berkeley: University of
   California Press.
Davidson, R. and J. MacKinnon          (1984) “Convenient       Tests for Probit and Logit Models”, Journal of
   Econometrics, 25, 241-262.
Eichenbaum,      M.S., L.P. Hansen and K.J. Singleton (1988) “A Time Series Analysis of Representative
   Agent Models of Consumption         and Leisure Choice Under Uncertainty”,            Quarterly Journal of Econo-
   mics, 103, 5 l-78.
Eicker, F. (1967) “Limit Theorems for Regressions             with Unequal and Dependent           Errors”, in: L.M.
    LeCam and J. Neyman, eds., Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics
   and Probability, Berkeley: University of California Press.
Fair, R.C. and D.M. Jaffee (1972) “Methods of Estimation for Markets in Disequilibrium”,                Econometrica,
   40,497-514.
Ferguson, T.S. (1958) “A Method of Generating Best Asymptotically              Normal Estimates with Application
   to the Estimation of Bacterial Densities”, Annals of Mathematical Statistics, 29, 1046-1062.
Fisher, F.M. (1976) The Identification Problem in Econometrics, New York: Krieger.
Fisher, R.A. (1921) “On the Mathematical         Foundations      of Theoretical Statistics”, Philosophical Trans-
   actions, A, 222, 309-368.
Fisher, R.A. (1925) “Theory of Statistical         Estimation”,     Proceedings of the Cambridge Philosophical
   Society, 22, 700-725.
Gourieroux,    C., A. Monfort and A. Trognon (1983) “Testing Nested or Nonnested Hypotheses”, Journal
   of Econometrics, 21, 83-l 15.
Gourieroux,    C., A. Monfort and A. Trognon (1984) “Psuedo Maximum Likelihood Methods: Theory”,
   Econometrica, 52, 68 l-700.
Hajek, J. (1970) “A Characterization      of Limiting Distributions       of Regular Estimates”, Z. Wahrschein-
   lichkeitstheorie uerw. Geb., 14, 323-330.
Hansen, L.P. (1982) “Large Sample Properties of Generalized              Method of Moments Estimators”,          Eco-
  nometrica, 50, 1029-1054.
Ch. 36: Large Sample Estimation        and Hypothesis    Testing                                                  2243


Hansen, L.P. (1985a) “A Method for Calculating            Bounds on the Asymptotic       Covariance      Matrices of
   Generalized Method of Moments Estimators”, Journal ofEconometrics,                30, 203-238.
Hansen, L.P. (1985b) “Notes on Two Step GMM Estimators”,                 Discussion, December meetings of the
   Econometric      Society.
Hansen, L.P. and K.J. Singleton (1982) “Generalized           Instrumental    Variable Estimation      of Nonlinear
   Rational Expectations      Models”, Econometrica, 50, 1269-1286.
Hansen, L.P., J. Heaton and R. Jagannathan          (I 992) “Econometric Evaluation of Intertemporal              Asset
   Pricing Models Using Volatility Bounds”, mimeo, University of Chicago.
Hardle, W. (1990) Applied Nonparametric Regression, Cambridge: Cambridge University Press.
Hiirdle, W. and 0. Linton (1994) “Nonparametric             Regression”, in: R. Engle and D. McFadden,             eds.,
   Handbook of Econometrics,      Vol. 4, Amsterdam: North-Holland.
Hausman, J.A. (1978) “Specification      Tests in Econometrics”,      Econometrica, 46, 1251-1271.
Hausman,       J.A. and D. McFadden       (1984) “Specification     Tests for the Multinomial        Logit Model”,
   Econometrica, 52, I2 19-l 240.
Heckman, J.J. (1976) “The Common Structure of Statistical Models of Truncation,                  Sample Selection,
   and Limited Dependent Variables and a Simple Estimator for Such Models”, Annals ofEconomic and
   Social Measurement, 5,475-492.
Honor&, B.E. (1992) “Timmed LAD and Least Squares Estimation of Truncated and Censored Models
   with Fixed Effects”, Econometrica, 60, 533-565.
Honor& B.E. and J.L. Powell (1992) “Pairwise Difference Estimators of Linear, Censored, and Truncated
   Regression Models”, mimeo, Northwestern          University.
Huber, P.J. (1964) “Robust Estimation of a Location Parameter”, Annals ofMathematical                  Statistics, 35,
   73-101.
Huber, P. (1967) “The Behavior of Maximum Likelihood Estimates Under Nonstandard                       Conditions”,
   in: L.M. LeCam and J. Neyman, eds., Proceedings of the Fifth Berkeley Symposium on Mathematical
   Statistics and Probability, Berkeley: University of California Press.
Huber, P. (1981) Robust Statistics, New York: Wiley.
Ibragimov,      LA. and R.Z. Has’minskii     (1981) Statistical Estimation: Asymptotic         Theory, New York:
   Springer-Verlag.
Jennrich (1969), “Asymptotic Properties of Nonlinear Least Squares Estimators”, Annals of Mathematical
   Statistics, 20, 633-643.
Koenker, R. and G. Bassett (1978) “Regression Quantiles”, Econometrica, 46, 33-50.
LeCam, L. (1956) “On the Asymptotic Theory of Estimation and Testing Hypotheses”,                  in: L.M. LeCam
   and J. Neyman, eds., Proceedings of the Third Berkeley Symposium on Mathematical Statistics and
   Probability, vol. 1, pp. 129-156, Berkeley: University of California Press.
Lee, L. F. and A. Chesher (1986) “Specification       Testing when the Score Statistics are Identically Zero”,
   Journal ofEconometrics,     31, 121-149.
Maasoumi,       E. and P.C.B. Phillips (1982) “On the Behavior of Inconsistent            Instrumental     Variables
   Estimators”, Journal ofEconometrics,       19, 183-201.
Malinvaud,      E. (1970) “The Consistency    of Nonlinear Regressions”, Annals of Mathematical Statistics,
   41,956-969.
Manski, C. (1975) “Maximum Score Estimation of the Stochastic Utility Model of Choice”, Journal of
  Econometrics, 3, 205-228.
McDonald, J.B. and W.K. Newey (1988) “Partially Adaptive Estimation of Regression Models Via the
  Generalized    T Distribution”, Econometric Theory, 4, 428-457.
McFadden, D. (1987) “Regression-Based     Specification Tests for the Multinomial    Logit Model”, Journal
  of Econometrics, 34, 63-82.
McFadden,     D. (1989) “A Method of Simulated        Moments for Estimation      of Multinomial   Discrete
  Response Models Without Numerical Integration”,         Econometricu, 57, 995-1026.
McFadden,     D. (1990) “An Introduction    to Asymptotic    Theory: Lecture Notes for 14.381”, mimeo,
  MIT.
 2244                                                                                W.K. Newey and D. McFadden


Newey, W.K. (1984) “A Method of Moments Interpretation        of Sequential Estimators”, Economics
  Letters, 14, 201-206.
Newey, W.K. (1985) “Generalized Method of Moments Specification Testing”, Journal ofEconometrics,
  29,229-256.
Newey, W.K. (1987) “Asymptotic  Properties of a One-Step Estimator Obtained from an Optimal Step
  Size”, Econometric Theory, 3, 305.
Newey, W.K. (1988) “Interval Moment Estimation of the Truncated Regression Model”, mimeo, Depart-
  ment of Economics, MIT.
Newey, W.K. (1989) “Locally Efficient, Residual-Based       Estimation of Nonlinear Simultaneous     Equa-
  tions Models”, mimeo, Department    of Economics, Princeton University.
Newey, W.K. (1990) “Semiparametric    Efficiency Bounds”, Journal of Applied Econometrics, 5,99-l 35.
Newey, W.K. (1991a) “Uniform Convergence         in Probability   and Stochastic Equicontinuity”,  Econo-
  metrica, 59, 1161-l 167.
Newey, W.K. (1991b) “Efficient Estimation      of Tobit Models Under Conditional        Symmetry”,  in: W.
  Barnett, J. Powell and G. Tauchen, eds., Semiparametric and Nonparametric Methods in Statistics and
  Econometrics, Cambridge: Cambridge University Press.
Newey, W.K. (1992a) “The Asymptotic Variance of Semiparametric         Estimators”, MIT Working Paper.
Newey, W.K. (1992b) “Partial Means, Kernel Estimation, and a General Asymptotic Variance Estimator”,
  mimeo, MIT.
Newey, W.K. (1993) “Efficient Two-Step Instrumental      Variables Estimation”, mimeo, MIT.
Newey, W.K. and J.L. Powell (1987) “Asymmetric Least Squares Estimation and Testing”, Econometrica,
  55,819-847.
Newey, W.K. and K. West (1988) “Hypothesis      Testing with Efficient Method of Moments Estimation”,
  International Economic Review, 28, 777-787.
Newey, W.K., F. Hsieh and J. Robins (1992) “Bias Corrected           Semiparametric   Estimation”, mimeo,
  MIT.
Olsen, R.J. (1978) “Note on the Uniqueness      of the Maximum      Likelihood    Estimator     for the Tobit Model”,
  Econometrica, 46, 1211~1216.
Pagan, A.R. (1984) “Econometric      Issues in the Analysis of Regressions with Generated  Regressors”,
  International Economic Review, 25,221-247.
Pagan, A.R. (1986) “Two Stage and Related Estimators and Their Applications”,       Reuiew of Economic
  Studies, 53, 517-538.
Pakes, A. (1986) “Patents as Options: Some Estimates of the Value of Holding European Patent Stocks”,
  Econometrica, 54, 755-785.
Pakes, A. and D. Pollard (1989) “Simulation        and the Asymptotics    of Optimization        Estimators”,   Econo-
  metrica, 57, 1027-1057.
Pierce, D.A. (1982) “The Asymptotic Effect of Substituting  Estimators for Parameters in Certain Types
   of Statistics”, Annals ofStatistics, IO, 475-478.
Pollard, D. (1985) “New Ways to Prove Central Limit Theorems”, Econometric Theory, 1, 295-314.
Pollard, D. (1989) Empirical Processes: Theory and Applications, CBMS/NSF Regional Conference Series
   Lecture Notes.
Powell, J.L. (1984) “Least Absolute   Deviations     Estimation   for the Censored    Regression     Model”, Journal
  ofEconometrics, 25, 303-325.
Powell, J.L. (1986) “Symmetrically    Trimmed      Least Squares Estimation      for Tobit Models”, Econometrica,
  54.1435-1460.
Powell, J.L., J.H. Stock and T.M. Stoker        (1989) “Semiparametric        Estimation      of Index Coefficients”,
  Econometrica, 57, 1403-1430.
Pratt,J.W. (1981) “Concavity    of the Log Likelihood”,     Journal ofthe American Statistical Association, 76,
  103%106.
Press, W.H., B.P. Flannery,    S.A. Tenkolsky      and W.T. Vetterling   (1986) Numerical Recipes, Cambridge
   University Press.
Ch. 36: Large Sample Estimation and Hypothesis           Testing                                                 2245


Pringle, R. and A. Rayner (1971) Generalized Inverse Matrices, London: Griffin.
Robins, J. (1991) “Estimation     with Missing Data”, preprint, Epidemiology          Department,      Harvard School
   of Public Health.
Robinson, P.M. (1988a) “The Stochastic Difference Between Econometric                  Statistics”, Econometrica, 56,
   531-548.
Robinson, P. (1988b) “Root-N-Consistent          Semiparametric       Regression”, Econometrica, 56, 931-954.
Rockafellar, T. (1970) Convex Analysis, Princeton: Princeton University Press.
Roehrig, C.S. (1989) “Conditions      for Identification    in Nonparametric      and Parametric      Models”, Econo-
   metrica, 56, 433-447.
Rothenberg, T.J. (1971) “Identification      in Parametric     Models”, Econometrica, 39, 577-592.
Rothenberg, T. J. (1973) Eficient Estimation with a priori Ir$ormation, Cowles Foundation                   Monograph
   23, New Haven: Yale University Press.
Rothenberg, T.J. (1984) “Approximating        the Distributions    of Econometric Estimators and Test Statistics”,
   Ch. 15 in: Z. Griliches and M.D. Intriligator,         eds., Handbook of Econometrics, Vol 2, Amsterdam,
   North-Holland.
Rudin, W. (1976) Principles ofMathematical          Analysis, New York: McGraw-Hill.
Sargan, J.D. (1959) “The Estimation         of Relationships      with Autocorrelated       Residuals by the Use of
   Instrumental     Variables”, Journal of the Royal Statistical Society Series B, 21, 91-105.
Serfling, R.J. (1980) Approximation Theorems of MathematicalStatistics, New York: Wiley.
Stoker, T. (1991) “Smoothing Bias in the Measurement            of Marginal Effects”, MIT Sloan School Working
    Paper, WP3377-91-ESA.
Stone, C. (1975) “Adaptive        Maximum      Likelihood     Estimators    of a Location       Parameter”,   Annals of
   Statistics, 3, 267-284.
Tauchen, G.E. (1985) “Diagnostic Testing and Evaluation of Maximum Likelihood Models”, Journal of
   Econometrics, 30, 4 155443.
Van der Vaart, A. (1991) “On Differentiable         Functionals”,    Annals ofStatistics,     19, 178204.
Wald (1949) “Note on the Consistency of the Maximum Likelihood Estimate”, Annals ofMathematical
   Statistcs, 20, 595-601.
White, H. (1980) “A Heteroskedasticity-Consistent           Covariance     Matrix Estimator and a Direct Test for
   Heteroskedasticity”,     Econometrica, 48, 8177838.
White, H. (1982a)“Maximum         Likelihood Estimation ofMisspecified          Models”, Econometrica, 50, l-25.
White, H. (1982b) “Consequences        and Detection of Misspecified Linear Regression Models”, Journal of
   the American Statistical Association, 76, 419-433.



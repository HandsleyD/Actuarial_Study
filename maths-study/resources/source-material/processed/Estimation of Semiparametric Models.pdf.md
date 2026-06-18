---
normalized_id: shared-pdf-reference-estimation-of-semiparametric-models
exam_code: SHARED
material_scope: estimation of semiparametric models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Estimation of Semiparametric Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-estimation-of-semiparametric-models

Chapter 41


ESTIMATION                     OF SEMIPARAMETRIC
MODELS*

JAMES       L. POWELL

Princeton Unioersity



Contents

Abstract                                                                                         2444
1. Introduction                                                                                  2444
     1.1.    Overview                                                                            2444
     1.2.    Definition     of “semiparametric”                                                  2449
     1.3.    Stochastic     restrictions      and structural    models                           2452
     1.4.    Objectives     and techniques         of asymptotic    theory                       2460
2.   Stochastic          restrictions                                                            2465
     2.1.    Conditional      mean restriction                                                   2466
     2.2.    Conditional      quantile     restrictions                                          2469
     2.3.    Conditional      symmetry        restrictions                                       2414
     2.4.    Independence       restrictions                                                     2416
     2.5.     Exclusion    and index restrictions                                                2482
3.   Structural          models                                                                  2487
     3.1.    Discrete     response    models                                                     2487
     3.2.    Transformation          models                                                       2492
     3.3.    Censored      and truncated        regression     models                             2500
     3.4.    Selection     models                                                                 2506
     3.5.    Nonlinear      panel data models                                                     2511
4. Summary              and conclusions                                                          2513
References                                                                                       2514


    *This work was supported by NSF Grants 91-96185 and 92-10101 to Princeton University. I am
 grateful to Hyungtaik  Ahn, Moshe Buchinsky, Gary Chamberlain,     Songnian Chen, Gregory Chow,
 Angus Deaton, Bo Honor&, Joel Horowitz, Oliver Linton, Robin Lumsdaine,       Chuck Manski, Rosa
 Ma&kin, Dan McFadden,      Whitney Newey, Paul Ruud, and Tom Stoker for their helpful suggestions,
 which were generally adopted except when they were mutually contradictory  or required a lot of extra
 work.


 Handbook of Econometrics, Volume IV, Edited by R.F. En&                     and D.L. McFadden
 0 1994 Elseuier Science B.V. All rights reserved
2444                                                                                     J.L. Powell




Abstract

A semiparametric    model for observational        data combines a parametric        form for
some component     of the data generating       process (usually the behavioral       relation
between the dependent and explanatory variables) with weak nonparametric               restric-
tions on the remainder of the model (usually the distribution           of the unobservable
errors). This chapter surveys some of the recent literature              on semiparametric
methods, emphasizing       microeconometric       applications   using limited dependent
variable models. An introductory         section defines semiparametric         models more
precisely and reviews the techniques used to derive the large-sample            properties of
the corresponding    estimation    methods. The next section describes a number of
weak restrictions on error distributions       ~ conditional   mean, conditional     quantile,
conditional   symmetry, independence,       and index restrictions - and show how they
can be used to derive identifying restrictions       on the distributions     of observables.
This general discussion is followed by a survey of a number of specific estimators
proposed for particular     econometric     models, and the chapter concludes with a
brief account of applications    of these methods in practice.



1.     Introduction

1.l.    Overview

Semiparametric       modelling is, as its name suggests, a hybrid of the parametric and
nonparametric       approaches      to construction,      fitting, and validation      of statistical
models. To place semiparametric          methods in context, it is useful to review the way
these other approaches are used to address a generic microeconometric                    problem ~
namely, determination        of the relationship      of a dependent variable (or variables) y
to a set of conditioning     variables x given a random sample {zi = (yi, Xi), i = 1,. . . , N}
of observations      on y and x. This would be considered                 a “micro’‘-econometric
problem because the observations            are mutually independent            and the dimension
of the conditioning       variables x is finite and fixed. In a “macro’‘-econometric
application using time series data, the analysis must also account for possible serial
dependence in the observations,          which is usually straightforward,          and a growing
or infinite number of conditioning            variables, e.g. past values of the dependent
variable y, which may be more difficult to accommodate.                     Even for microecono-
metric analyses of cross-sectional      data, distributional       heterogeneity and dependence
due to clustering and stratification      must often be considered; still, while the random
sampling assumption may not be typical, it is a useful simplification,              and adaptation
of statistical methods to non-random            sampling is usually straightforward.
   In the classical parametric        approach to this problem, it is typically assumed
that the dependent variable is functionally          dependent on the conditioning        variables
Ch. 41: Estimation of Semiparametric Models                                              2445


(“regressors”) and unobservable             “errors” according to a fixed structural relation
of the form

     Y = g(x, @o,s),                                                                     (1.1)
where the structural function g(.) is known but the finite-dimensional parameter
vector a,~Iwp and the error term E are unobserved. The form of g(.) is chosen to
give a class of simple and interpretable data generating mechanisms which embody
the relevant restrictions imposed by the characteristics of the data (e.g. g(‘) is
dichotomous if y is binary) and/or economic theory (monotonicity, homotheticity,
etc.). The error terms E are introduced to account for the lack of perfect fit of (1.1)
for any fixed value of c1eand a, and are variously interpreted as expectational or
optimization errors, measurement errors, unobserved differences in tastes or
technology, or other omitted or unobserved conditioning variables; their inter-
pretation influences the way they are incorporated into the structural function
9(.).
   To prevent (1.1) from holding tautologically for any value of ao, the stochastic
behavior of the error terms must be restricted. The parametric approach takes the
error distribution to belong to a finite-dimensional family of distributions,
                        a
      Pr{s d nix} =       f,(a Ix, ~0) dl,,                                       (1.2)
                     s -CO
where f(.) is a known density (with respect to the dominating measure p,) except
for an unknown, finite-dimensional “nuisance” parameter ‘lo. Given the assumed
structural model (1.1) and the conditional error distribution (1.2), the conditional
distribution of y given x can be derived,

     Pr{y < 11~)    =
                        s1



                        -a,
                              1b   d   ~hf,,,(uI   x, %I, qo)   dpYIX,

for some parametric conditional density f,,,,(.). Of course, it is usually possible to
posit this conditional distribution of y given x directly, without recourse to
unobservable “error” terms, but the adequacy of an assumed functional form is
generally assessed with reference to an implicit structural model. In any case, with
this conditional density, the unknown parameters c(~and q. can be estimated by
maximizing the average conditional log-likelihood




   This fully parametric modelling strategy has a number of well-known optimality
properties. If the specifications of the structural equation (1.1) and error distribution
(1.2) are correct (and other mild regularity conditions hold), the maximum likeli-
hood estimators of ~1~and ‘lo will converge to the true parameters at the rate of
the inverse square root of the sample size (“root-N-consistent”)             and will be
asymptotically     normally distributed,        with an asymptotic covariance matrix which
is no larger than that of any other regular root-N-consistent                 estimator. Moreover,
the parameter estimates yield a precise estimator of the conditional                       distribution
of the dependent       variable given the regressors, which might be used to predict y
for values of x which fall outside the observed support of the regressors. The
drawback to parametric           modelling is the requirement             that both the structural
model and the error distribution           are correctly specified. Correct specification may
be particularly     difficult for the error distribution,        which represents the unpredict-
able component of the relation of y to x. Unfortunately,               if g(x, u, E) is fundamentally
nonlinear in E - that is, it is noninvertible         in E or has a Jacobian that depends on
the unknown       parameters     tl - then    misspecification      of the functional      form of the
error distribution f(slx, 9) generally yields inconsistency of the MLE and inconsistent
estimates of the conditional         distribution   of y given x.
   At the other extreme, a fully nonparametric              approach to modelling the relation
between y and x would define any such “relation” as a characteristic                        of the joint
distribution    of y and x, which would be the primitive object of interest. A “causal”
or predictive relation from the regressors to the dependent variable would be given
as a particular functional of the conditional             distribution     of y given x,

      g(x) = WY,,),                                                                               (1.3)

where F,,, is the joint and F,tx is the conditional  distribution. Usually the functional
T(.) is a location measure, in which case the relation between y and x has a rep-
resentation    analogous  to (1.1) and (1.2), but with unknown      functional  forms for
f( .) and g(.). For example, if g(x) is the mean regression function (T(F,,,) = E[y 1x]),
then y can be written as

      Y = g(x) + E,

with E defined to have conditional        density f,,, assumed to satisfy only the normali-
zation E[E[x] = 0. In this approach the interpretation        of the error term E is different
than for the parametric approach; its stochastic properties derive from its definition
in terms of the functional g(.) rather than a prior behavioral assumption.
   Estimation of the function g(.) is straightforward        once a suitable estimator gYIX
of the conditional    distribution     of y given x is obtained; if the functional     T(.) in
(1.3) is well-behaved     (i.e. continuous     over the space of possible I’&, a natural
estimator is

     9(x) = ~(~y,,).

Thus the problem of estimating the “relationship”      g(.) reduces to the problem of
estimating the conditional  distribution  function, which generally requires some
smoothing across adjacent observations   of the regressors x when some components
Ch. 41: Estimation   of Semiparametric
                                    Models                                                           2441


 are continuously     distributed (see, e.g. Prakasa Rao (1983) Silverman (1986), Bierens
 (1987), Hardle (1991)). In some cases, the functional                 T(.) might be a well-defined
 functional of the empirical c.d.f. of the data (for example, g(x) might be the best
linear projection of y on x, which depends only on the covariance                         matrix of the
 data); in these cases smoothing           of the empirical c.d.f. will not be required. An
 alternative estimation strategy would approximate                 g(x) and the conditional        distri-
 bution of E in (1.6) by a sequence of parametric models, with the number of param-
 eters expanding as the sample size increases; this approach, termed the “method
 of sieves” by Grenander          (1981), is closely related to the “seminonparametric”
 modelling approach of Gallant (1981, 1987), Elbadawi et al. (1983) and Gallant
 and Nychka (1987).
    The advantages        and disadvantages         of the nonparametric           approach      are the
 opposite of those for parametric            modelling. Nonparametric             modelling typically
 imposes few restrictions        on the form of the joint distribution               of the data (like
 smoothness      or monotonicity),       so there is little room for misspecification,                and
 consistency     of an estimator       of g(x) is established           under much more general
 conditions    than for parametric         modelling.     On the other hand, the precision of
 estimators    which impose only nonparametric                 restrictions    is often poor. When
 estimation    of g(x) requires smoothing             of the empirical c.d.f. of the data, the
 convergence rate of the estimator is usually slower than the parametric rate (square
 root of the sample size), due to the bias caused by the smoothing (see the chapter
 by Hardle and Linton in this volume). And, although                          some prior economic
 restrictions   like homotheticity       and monotonicity          can be incorporated          into the
nonparametric       approach (as described in the chapter by Matzkin in this volume),
the definition of the “relation” is statistical, not economic. Extrapolation                       of the
relationship outside the observed support of the regressors is not generally possible
with a nonparametric         model, which is analogous to a “reduced form” in the classical
terminology      of simultaneous     equations modelling.
    The semiparametric        approach, the subject of this chapter, distinguishes              between
the “parameters of interest”, which are finite-dimensional,                 and infinite-dimensional
“nuisance parameters”,         which are treated nonparametrically.              (When the “param-
eter of interest” is infinite-dimensional,         like the baseline hazard in a proportional
hazards model, the nonparametric              methods described in the Hardle and Linton
chapter are more appropriate.)           In a typical parametric          model, the parameters         of
interest, mO, appear only in a structural               equation     analogue     to (l.l), while the
conditional    error distribution     is treated as a nuisance parameter, subject to certain
prior restrictions.    More generally, unknown             nuisance functions may also appear
in the structural equation. Semiparametric               analogues to equations (1.1) and (1.2)
are

                                                                                                    (1.4)


      Pr{s d nix} =         1 {u d A}fo(aIx)dp,,                                                    (1.5)
                        s
2448                                                                                              J.L. Powell


where, as before, CQis unknown but known to lie in a finite-dimensional                         Euclidean
subspace, and where the unknown nuisance parameter is

       ‘lo = (to(.)J

As with the parametric          approach,      prior economic       reasoning
                                                                                                    general
regularity and identification         restrictions are imposed on the nuisance parameters
qO, as in the nonparametric           approach.
    As a hybrid of the parametric and nonparametric                    approaches,       semiparametric
modelling shares the advantages              and disadvantages         of each. Because it allows a
more general specification of the nuisance parameters, estimators of the parameters
of interest for semiparametric            models are consistent          under a broader range of
conditions    than for parametric           models, and these estimators              are usually more
precise (converging to the true values at the square root of the sample size) than
their nonparametric       counterparts.      On the other hand, estimators for semiparametric
models are generally less efficient than maximum                       likelihood      estimators      for a
correctly-specified      parametric model, and are still sensitive to misspecification                      of
the structural function or other parametric components                      of the model.
    This chapter will survey the econometric literature on semiparametric                     estimation,
with emphasis on a particular class of models, nonlinear                      latent variable models,
which have been the focus of most of the attention in this literature. The remainder
of Section 1 more precisely defines the “semiparametric”                       categorization,       briefly
lists the structural functions and error distributions               to be considered and reviews
the techniques for obtaining           large-sample       approximations       to the distributions         of
various types of estimators for semiparametric                 models. The next section discusses
how each of the semiparametric               restrictions    on the behavior of the error terms
can be used to construct            estimators      for certain classes of structural           functions.
Section 3 then surveys existing results in the econometric                       literature for several
groups of latent variable models, with a variety of error restrictions for each group
of structural models. A concluding section summarizes this literature and suggests
topics for further work.
    The coverage of the large literature on semiparametric                 estimation in this chapter
will necessarily be incomplete; fortunately,              other general references on the subject
are available. A forthcoming           monograph        by Bickel et al. (1993) discusses much of
the work on semiparametrics             in the statistical literature, with special attention to
construction     of efficient estimators; a monograph             by Manski (1988b) discusses the
analogous     econometric       literature.     Other surveys of the econometric                 literature
include those by Robinson (1988a) and Stoker (1992), the latter giving an extensive
treatment of estimation based upon index restrictions, as described in Section 2.5
below. Newey (1990a) surveys the econometric                        literature      on semiparametric
efficiency bounds, which is not covered extensively in this chapter. Finally, given
the close connection        between the semiparametric             approach and parametric               and
say, to different method5 and degrees of “smoothing”           of the empirical c.d.f.), while
estimation    of a semiparametric      model would require an additional        choice of the
particular functional    T* upon which to base the estimates.
   On a related point, while it is common to refer to “semiparametric             estimation”
and “semiparametric      estimators”, this is somewhat misleading terminology.            Some
authors use the term “semiparametric          estimator”    to denote a statistic which in-
volves a preliminary     “plug-in” estimator of a nonparametric         component      (see, for
example, Andrews’ chapter in this volume); this leads to some semantic ambiguities,
since the parameters of many semiparametric            models can be estimated by “para-
metric” estimators and vice versa. Thus, though certain estimators would be hard
to interpret in a parametric or nonparametric          context, in general the term “semi-
parametric”, like “parametric”       or “nonparametric”,     will be used in this chapter to
refer to classes of structural      models and stochastic restrictions,        and not to a
particular statistic. In many cases, the same estimator can be viewed as parametric,
nonparametric      or semiparametric,     depending    on the assumptions      of the model.
For example, for the classical linear model

     y = x’& + E,

the least squares estimator         of the unknown          coefficients   &,


     PC
          [
              itl   xixl
                           1
                           -lit1   xiYi3


would be considered a “parametric”        estimator when the error terms are assumed
to be Gaussian with zero mean and distributed         independently of the regressors x.
With these assumptions       fi is the maximum likelihood estimator of PO, and thus
is asymptotically  efficient relative to all regular estimators of PO. Alternatively, the
least squares estimator arises in the context of a linear prediction problem, where
the error term E has a density which is assumed to satisfy the unconditional      moment
restriction

     E[&.X] = 0.

This restriction yields a unique           representation      for /I0 in terms of the joint distribu-
tion of the data,

     & = {E[x.x'])-'E[x.y],

so estimation of /I0 in this context would be considered a “nonparametric”   problem
by the criteria given above. Though other, less precise estimators of the moments
E[x.x’] and E[x.y] (say, based only on a subset of the observations)        might be
used to define alternative estimators, the classical least squares estimator fi is, al-
Ch. 41: Estimation   of Semiparametric   Models                                                  2451


most by default, an “efficient” estimator of PO in this model (as Levit (1975) makes
precise). Finally, the least squares estimator b can be viewed as a special case of
the broader class of weighted least squares estimators of PO when the error terms
E are assumed to have conditional    mean zero,

      E[.51xi] = 0        a.s.

The model defined by this restriction             would be considered    “semiparametric”,      since
&, is overidentified;      while the least squares estimator      b is *-consistent   and
asymptotically       normal for this model (assuming the relevant second moments are
finite), it is inefficient in general, with an efficient estimator being based on the rep-
resentation




 of the parameters of interest, where a2(x) E Var(sJxi) (as discussed in Section 2.1
 below). The least squares statistic fi is a “semiparametric”           estimator in this context,
 due to the restrictions imposed on the model, not on the form of the estimator.
    Two categories of estimators which are related to “semiparametric                  estimators”,
 but logically distinct, are “robust” and “adaptive” estimators. The term “robustness”
 is used informally to denote statistical procedures which are well-behaved for slight
 misspecifications    of the model. More formally, a robust estimator & - T(p,,,) can
 be defined as one for which T(F) is a continuous                 functional    at the true model
 (e.g. Manski (1988b)), or whose asymptotic               distribution      is continuous    at the
 truth (“quantitative     robustness”,     as defined by Huber (1981)). Other notions of
 robustness involve sensitivity of particular estimators to changes in a small frac-
 tion of the observations.      While “semiparametric          estimators”     are designed to be
 well-behaved under weak conditions on the error distribution                  and other nuisance
 parameters (which are assumed to be correct), robust estimators are designed to
 be relatively efficient for correctly-specified       models but also relatively insensitive
 to “slight” model misspecification.         As noted in Section 1.4 below, robustness              of
 an estimator is related to the boundedness         (and continuity) of its influence function,
 defined in Section 1.4 below; whether a particular semiparametric                   model admits
a robust estimator depends upon the particular restrictions imposed. For example,
for conditional      mean restrictions      described in Section 2.1 below, the influence
functions     for semiparametric       estimators    will be linear (and thus unbounded)
functions of the error terms, so robust estimation is infeasible under this restriction.
On the other hand, the influence function for estimators under conditional                 quantile
restrictions    depends upon the sign of the error terms, so quantile estimators are
generally “robust” (at least with respect to outlying errors) as well as “semipara-
metric”.
    “Adaptive” estimators are efficient estimators of certain semiparametric                models
for which the best attainable efficiency for estimation of the parameters of interest
                                                                                   J.L. Powell


does not depend upon prior knowledge of a parametric                 form for the nuisance
parameters. That is, adaptive estimators are consistent under the semiparametric
restrictions  but as efficient (asymptotically)    as a maximum        likelihood estimator
when the (infinite-dimensional)      nuisance parameter       is known to lie in a finite-
dimensional    parametric    family. Adaptive estimation      is possible only if the semi-
parametric    information     bound for attainable     efficiency for the parameters        of
interest is equal to the analogous Cramer-Rao         bound for any feasible parametric
specification of the nuisance parameter. Adaptive estimators, which are described
in more detail by Bickel et al. (1993) and Manski (1988b), involve explicit estimation
of (nonparametric)     nuisance parameters,     as do efficient estimators for semipara-
metric models more generally.



1.3.   Stochastic   restrictions   and structural   models

As discussed above, a semiparametric          model for the relationship    between y and
x will be determined by the parametric form of the structural function g(.) of (1.4)
and the restrictions    imposed on the error distribution          and any other infinite-
dimensional    component     of the model. The following sections of this chapter group
semiparametric    models by the restrictions           imposed on the error distribution,
describing estimation under these restrictions for a number of different structural
models. A brief description        of the restrictions    to be considered,  followed by a
discussion of the structural models, is given in this section.
   A semiparametric    restriction on E which is quite familiar in econometric       theory
and practice is a (constant) conditional mean restriction, where it is assumed that

       -wx) = PO                                                                         (1.6)
for some unknown        constant po, which is usually normalized         to zero to ensure
identification    of an intercept term. (Here and throughout,       all conditional    expec-
tations are assumed to hold for a set of regressors x with probability             one.) This
restriction is the basis for much of the large-sample        theory for least squares and
method-of-moments         estimation,   and estimators   derived for assumed Gaussian
distributions    of E (or, more generally, for error distributions       in an exponential
family) are often well-behaved under this weaker restriction.
    A restriction which is less familiar but gaining increasing attention in econometric
practice is a (constant) conditional quantile restriction, under which a scalar error
term E is assumed to satisfy

       Pr{c d qolx} = 71                                                                 (1.7)

for some fixed proportion          rr~(O, 1) and constant q. = qo(n); a conditional median
restriction is the (leading)        special case with n= l/2. Rewriting the conditional
2454                                                                                        J.L. Powell


an assumption           that

       Pr{e < ulx} = Pr{a d UlU(X)>                                                              (1.11)

for some “index” function u(x) with dim{u(x)} < dim (x}; a weak or mean index
restriction asserts a similar property only for the conditional expectation ~

       E[&1X] = E[&IU(X)].                                                                      (1.12)

For different structural models, the index function v(x) might be assumed to be a
known function of x, or known up to a finite number of unknown                  parameters
(e.g. u(x) = x’BO), or an unknown function of known dimensionality          (in which case
some extra restriction(s)     will be needed to identify the index). As a special case,
the function u(x) may be trivial, which yields the independence            or conditional
mean restrictions as special cases; more generally, u(x) might be a known subvector
x1 of the regressors x, in which case (1.11) and (1.12) are strong and weak forms
of an exclusion restriction,       otherwise known as conditional independence and
conditional mean independence of E and x given x1, respectively. When the index func-
tion is unknown,     it is often assumed to be linear in the regressors, with coeffi-
cients that are related to unknown            parameters   of interest in the structural
model.
   The following diagram summarizes          the hierarchy of the stochastic restrictions
to be discussed in the following sections of this chapter, with declining level of
generality from top to bottom:

                                  Nonparametric

                                          I


                                                      -1


                                                           Conditional   mean    Location     median




   lndedndence      1                                              Conditional   symmetry


                                    Parametric    m


   Turning       now to a description     of some structural   models treated in the semi-
parametric       literature, an important    class of parametric  forms for the structural
Ch. 41: Estimation   of Semiparametric   Models                                                  2455


functions is the class of linear latent variable models, in which the dependent             variable
y is assumed to be generated as some transformation

      Y =   t(y*; &, %(.I)                                                                     (1.13)

of some unobservable         variable    y*, which itself has a linear regression   representation

      y* = x’& + E.                                                                            (1.14)

Here the regression coefficients /I0 and the finite-dimensional      parameters 2, of the
transformation    function are the parameters of interest, while the error distribution
and any nonparametric        component   rO(.) of the transformation    make up the non-
parametric     component    of the model. In general y and y* may be vector-valued,
and restrictions on the coefficient matrix /I0 may be imposed to ensure identification
of the remaining     parameters.   This class of models, which includes the classical
linear model as a special case, might be broadened            to permit a nonlinear   (but
parametric) regression function for the latent variable y*, as long as the additivity
of the error terms in (1.14) is maintained.
   One category of latent variable models, parametric transformation models, takes
the transformation      function t(y*;&) to have no nonparametric          nuisance com-
ponent to(.) and to be invertible in y* for all possible values of &. A well-known
example of a parametric transformation         model is the Box-Cox regression model
(Box and Cox (1964)), which has y = t(x’&, + E; A,) for


      t - yy. 2) =   -va
                      F - l 1(1# 0} + ln(y)l{A = O}.


This transformation,     which includes linear and log-linear (in y) regression models
as special cases, requires the support of the latent variable y* to be bounded from
below (by - I/&) for noninteger        values of A,, but has been extended by Bickel
and Doksum (1981) to unbounded          y*. Since the error term E can be expressed as
a known function of the observable variables and unknown parameters for these
models, a stochastic restriction on E (like a conditional         mean restriction, defined
below) translates directly into a restriction on y, x,/IO, and II, which can be used
to construct estimators.
   Another category, limited dependent variable models, includes latent variable
models in which the transformation         function t(y*) which does not depend upon
unknown     parameters,    but which is noninvertible,      mapping intervals of possible
y* values into single values of y. Scalar versions of these models have received
much of the attention in the econometric literature on semiparametric             estimation,
owing to their relative simplicity and the fact that parametric methods generally
yield inconsistent   estimators for /I0 when the functional        form of the error distri-
bution is misspecified. The simplest nontrivial        transformation    in this category is
2456                                                                                   J.L.Powell


an indicator      for positivity   of the latent variable   y*, which yields the binary response
model

       y = 1{x’/A)+ E > O},                                                               (1.15)

which is commonly used in econometric applications             to model dichotomous    choice
problems. For this model, in which the parameters              can be identified at most up
to a scale normalization   on PO or E, the only point of variation of the function
t(y*) occurs at y* = 0, which makes identification            of &, particularly difficult. A
model which shares much of the structure of the binary response model is the
ordered response model, with the latent variable y* is only known to fall in one of
J + 1 ordered intervals { (- co, c,], (c,, c,], . . . , (c,, GO)}; that is,

             J
       y=   1 1(x’& +& >Cj}.                                                              (1.16)
            j=l



Here the thresholds {cj} are assumed unknown (apart from a normalization               like
c0 = 0), and must be estimated along with PO. The grouped dependent oariable model
is a variation with known values of {cj}, where the values of y might correspond
to prespecified income intervals.
   A structural function for which the transformation     function is more “informative”
about /I0 is the censored regression model, also known in econometrics             as the
censored Tobit model (after Tobin (1956)). Here the observable dependent variable
is assumed to be subject to a nonnegativity      constraint,    so that

       y = max (0, x’pO + s};                                                             (1.17)

this structural function is often used as a model of individual    demand or supply
for some good when a fraction of individuals    do not participate    in that market.
A variation on this model, the accelerated failure time model with jixed censoring,
can be used as a model for duration data when some durations          are incomplete.
Here

       y=min{x;&+E,x2},                                                                   (1.18)

where y is the logarithm of the observable duration time (e.g. an unemployment
spell), and x2 is the logarithm of the duration of the experiment (following which
the time to completion for any ongoing spells is unobserved);     the “fixed” qualifier
denotes models in which both x1 and x2 are observable (and may be functionally
related).
   These univariate limited dependent variable models have multivariate      analogues
which have also been considered       in the semiparametric   literature.  One multi-
variate generalization   of the binary response model is the multinomial response
Ch. 41: Estimation   of Semipurametric       Models                                                            2457


model, for which the dependent                   variable     is a J-dimensional           vector   of indicators,
y=vec{yj,j=    l,..., J}, with

      yj=l(yf3y:              for     k#j)                                                                    (1.19)

and with each latent          variable       y? generated              by a linear model

      yj*=x’pj,+E.       J’
                                Bo    =   cp;,   . . . , a&   ‘.   >   DJ,l.                                  (1.20)

That is, yj = 1 if and only if its latent variable yl is the largest across alternatives.
Another bivariate model which combines the binary response and censored reg-
ression models is the censored sample selection model, which has one binary res-
ponse variable y, and one quantitative        dependent variable y, which is observed
only when yi = 1:

      y1=    l(x;B;+E,        >O)                                                                             (1.21)

and

      Y2 = Yl   cx;fi:+4.                                                                                     (1.22)

This model includes the censored regression model as a special case, with fi; =
fii s /I, and s1 = a2 = E. A closely related model is the disequilibrium regression
model with observed regime, for which only the smaller of two latent variables is
observed, and it is known which variable is observed:

      y, = 1(x;& + El -=c           x;g +e,)                                                                  (1.23)

and




A special case of this model, the randomly censored regression model, imposes the
restriction  fii = 0, and is a variant of the duration      model (1.18) in which the
observable censoring threshold x2 is replaced by a random threshold a2 which is
unobserved     for completed spells.
    A class of limited dependent variable models which does not neatly fit into the
foregoing latent variable framework is the class of truncated dependent variable
models, which includes the truncated        regression and truncated   sample selection
models. In these models, an observable       dependent  variable y is constructed   from
latent variables drawn from a particular subset of their support. For the truncated
regression model, the dependent      variable y has the distribution    of y* = x’/I,, + E
2458                                                                                J.L. Powell


conditional    on y* > 0:


       y = x’po + u,                                                                     (1.25)


with


       Pr(u<clx}=Pr{cdclx,           6)   -x’B0}.                                        (1.26)


For the truncated       selection model, the dependent      variable y is generated in the
same way as y, in (1.24), conditionally        on y, = 1. Truncated      models are variants
of censored models for which no information           on the conditioning       variables x is
available when the latent variable y* cannot be observed. Since truncated samples
can be constructed       from their censored counterparts      by deleting censored obser-
vations, identification     and estimation of the parameters of interest is more challeng-
ing for truncated data.
   An important      class of multivariate   latent dependent     variable models arises in
the analysis of panel data, where the dimensionality          of the dependent       variable y
is proportional     to the number of time periods each individual           is observed. For
concreteness,    consider the special case in which a scalar dependent              variable is
observed for two time periods, with subscripts on y and x denoting time period;
then a latent variable analogue of the standard linear “fixed effects” model for
panel data has


       y, = HY+ x;&J + $1qJ>
                                                                                         (1.27)
       Y, = t(Y+$D,     + &2'?J'


 where t(.) is any of the transformation          functions discussed above and y is an
 unobservable      error term which is constant across time periods (unlike the time-
 specific errors cl and s2) but may depend in an arbitrary way on the regressors*
 x1 and x2. Consistent estimation of the parameters of interest PO for such models
is a very challenging       problem; while “time-differencing”       or “deviation  from cell
means” eliminates        the fixed effect for linear models, these techniques         are not
applicable to nonlinear        models, except in certain special cases (as discussed by
Chamberlain       (1984)). Even when the joint distribution        of the error terms E, and
s2 is known parametrically,         maximum     likelihood estimators     for &,, r0 and the
distributional     parameters will be inconsistent      in general if the unknown values of
y are treated as individual-specific       intercept terms (as noted by Heckman           and
MaCurdy (1980)), so semiparametric          methods will be useful even when the distri-
bution of the fixed effects is the only nuisance parameter of the model.
    The structural functions considered so far have been assumed known up to a
finite-dimensional      parameter.   This is not the case for the generalized regression
Ch. 41: Estimation   ofSemiparametric
                                   Models                                                   2459


model, which has

      Y = %(X’Po
               + 4,                                                                       (1.28)

for some transformation       function TV which is of unknown parametric form, but
which is restricted either to be monotonic       (as assumed by Han (1987a)), or smooth
(or both). Formally, this model includes the univariate limited dependent variable
and parametric      transformation      models as special cases; however, it is generally
easier to identify and estimate the parameters           of interest when the form of the
transformation     function t(.) is (parametrically)    known.
   Another model which at first glance has a nonparametric                 component   in the
structural component is the partially linear or semilinear regression model proposed
by Engle et al. (1986), who labelled it the “semiparametric          regression model”; esti-
mation of this model was also considered by Robinson (1988). Here the regression
function is a nonparametric        function of a subset xi of the regressors, and a linear
function of the rest:

      Y=   x;p,+&(x,) + 6                                                                 (1.29)

where A,(.) is unknown but smooth. By defining a new error term E* = 2,(x,) + E,
a constant conditional  mean assumption      on the original error term E translates
into a mean exclusion restriction     on the error terms in an otherwise-standard
linear model.
   Yet another class of models with a nonparametric        component   are generated
regressor models, in which the regressors x appear in the structural equation for
y indirectly, through the conditional   mean of some other observable variable w
given x:

      Y=h(ECwlxl,~,,&)~g(x,~,,~,(~),&),                                                   (1.30)

with 6,(x) _=E[wjx]. These models arise when modelling individual behavior under
uncertainty,   when actions depend upon predictions (here, conditional           expectations)
of unobserved       outcomes, as in the large literature        on “rational   expectations”.
Formally, the nonparametric          component in the structural function can be absorbed
into an unobservable        error term satisfying a conditional     mean restriction; that is,
defining q 5 w -JZ[wlx]          (so that E[qlx] -O), the model (1.30) with nonpara-
metrically-generated        regressors can be rewritten      as y = g(w - q,cr,,s), with a
conditional    mean restriction on the extra error term q. In practice, this alternative
representation     is difficult to manipulate    unless g(.) is linear, and estimators       are
more easily constructed        using the original formulation     (1.30).
   Although the models described above have received much of the attention   in
the econometric literature on semiparametrics, they by no means exhaust the set
of models with parametric    and nonparametric   components  which are used in
2460                                                                                J.L.Powell


econometric      applications.   One group of semiparametric      models, not considered
here, include the proportional hazards model proposed and analyzed by Cox (1972,
1975) for duration data, and duration models more generally; these are discussed
by Lancaster (1990) among many others. Another class of semiparametric             models
which is not considered here are choice-based or response-based sampling models;
these are similar to truncated sampling models, in that the observations        are drawn
from sub-populations        with restricted ranges of the dependent variable, eliminating
the ancillarity    of the regressors x. These models are discussed by Manski and
McFadden       (1981) and, more recently, by Imbens (1992).


1.4.    Objectives and techniques   of asymptotic   theory

Because of the generality of the restrictions imposed on the error terms for semi-
parametric     models, it is very difficult to obtain finite-sample             results for the
distribution    of estimators     except for special cases. Therefore, analysis of semi-
parametric models is based on large-sample              theory, using classical limit theorems
to approximate      the sampling distribution         of estimators. The goals and methods
to derive this asymptotic distribution         theory, briefly described here, are discussed
in much more detail in the chapter by Newey and McFadden in this volume.
   As mentioned earlier, the first step in the statistical analysis of a semiparametric
model is to demonstrate          identijkation of the parameters        a0 of interest; though
logically distinct, identification    is often the first step in construction   of an estimator
of aO. To identify aO, at least one function T(.) must be found that yields T(F,) = aO,
where F, is the true joint distribution        function of z = (y,x) (as in (1.3) above). This
functional may be implicit: for example, a,, may be shown to uniquely solve some
functional   equation    T(F,, a,,) = 0 (e.g. E[m(y, x, a,,)] = 0, for some m(.)). Given
the functional    T(.) and a random sample {zi = (y,, xi), i = 1,. . . , N) of observations
on the data vector z, a natural estimator of a0 is

       62= T(P),                                                                        (1.31)

where P is a suitable estimator of the joint distribution     function F,. Consistency
of & (i.e. oi+ a,, in probability as N + co) is often demonstrated    by invoking a law
of large numbers after approximating      the estimator as a sample average:


       ’=   $,f cPiV(Yi3xi) + Op(1)~
              I    1
                                                                                        (1.32)


where E[q,(y, x)] + aO. In other settings, consistency is demonstrated    by showing
that the estimator maximizes a random function which converges uniformly and
almost surely to a limiting function with a unique maximum at the true value aO.
As noted below, establishing    (1.31) can be difficult if construction of 6i involves
Ch. 41: Estimation    ofSemiparametric
                                    Models                                                2461

explicit nonparametric   estimators (through smoothing of the empirical distribution
function).
   Once consistency of the estimator is established, the next step is to determine
its rate ofconueryence, i.e. the steepest function h(N) such that h(N)(Gi - Q) = O,(l).
For regular parametric models, h(N) = fi,         so this is a maximal rate under weaker
semiparametric  restrictions. If the estimator bi has h(N) = fi   (in which case it is
said to be root-N-consistent), then it is usually possible to find conditions  under
which the estimator has an asymptotically linear representation:


      di= '0 +       k,E$(Yi,
                      I   1
                                 xi)   +   op(11JN)2                                    (1.33)



where the “influence          function” I/I(.) has E[$(y, x)] = 0 and finite second moments.
The Lindeberg-Levy             central limit theorem then yields asymptotic normality of the
estimator,


      JNca- ao) L Jqo, If,),                                                            (1.34)


where V, = E{$(y,x)[$(y,x)]‘}.          With a consistent estimator of V, (formed as the
sample covariance matrix of some consistent estimator ~(yi,Xi) of the influence
function), confidence regions and test statistics can be constructed          with coverage/
rejection probabilities    which are approximately        correct in large samples.
    For semiparametric      models, as defined above, there will be other functionals
 T+(F) which can be used to construct estimators of the parameters                 of interest.
The asymptotic efJtciency of a particular estimator 6i can be established by showing
that its asymptotic covariance matrix V, in (1.34) is equal to the semiparametric
analogue to the Cramer-Rao             bound for estimation      of ~1~. This semiparametric
ejjiciency bound is obtained as the smallest of all efficiency bounds for parametric
models which satisfy the semiparametric            restrictions.   The representation     ~1~=
T*(F,) which yields an efficient estimator generally depends on some component
do(.) of the unknown,      infinite-dimensional     nuisance parameter qo(.), i.e. T*(.) =
T*(., 6,), so construction     of an efficient estimator requires explicit nonparametric
estimation   of some characteristics      of the nuisance parameter.
   Demonstration     of (root-iv) consistency and asymptotic normality of an estimator
depends on the complexity of the asymptotic linearity representation             (1.33), which
in turn depends on the complexity of the estimator. In the simplest case, where
the estimator can be written in a closed form as a smooth function of sample
averages,


      6i=a       j$,$    m(Yi,xi)   9                                                   (1.35)
             (       I 1          >
2462                                                                                        J.L. Powell


the so-called     “delta method”         yields an influence   function   II/ of the form

       +(Y, 4 = ca4~o)/ad c~(Y, 4 -            ~~1,                                             (1.36)

where pLoE E[m(y,x)].     Unfortunately, except for the classical linear model with a
conditional  mean restriction, estimators for semiparametric     models are not of this
simple form. Some estimators for models with weak index or exclusion restrictions
on the errors can be written in closed form as functions of bivariate U-statistics.


                                                                                                (1.37)


with “kernel” function    pN that has pN(zi, zj) = pN(zj,zi) for zi = (y,,z,); under
conditions  given by Powell et al. (1989), the representation      (1.33) for such an
estimator has influence function II/ of the same form as in (1.36), where now


       m(.V,
           X)= lim EEPN(zi9
                         zj)lzi = (Y,X)1,                 PO = ECm(y,     41.                   (1.38)
                  N-02



A consistent estimator of the asymptotic               covariance    matrix     of bi of (1.37) is the
sample second moment matrix of


                                                                                                (1.39)


    In most cases, the estimator 6i will not have a closed-form expression like in
(1.35) or (1.37), but instead will be defined implicitly as a minimizer of some sample
criterion function or a solution of estimating equations. Some (generally inefficient)
estimators    based on conditional      location   or symmetry     restrictions are “M-
estimators”, defined as minimizers of an empirical process


       h = aigETn $ ,i p(_Yi,Xi, a) = argmin S,(a)                                              (1.40)
                    L 1                  asI3



and/or    solutions      of estimating    equations


       0= i     .g m(yit xi, 8.)= kN(B).                                                        (1.41)
              I   1



for some functions    p(.) and m(.), with dim{m(.)} = dim(a). When p(y,x,cr) (or
m(y,x, a)) is a uniformly continuous   function in the parameters     over the entire
parameter space 0 (with probability one), a standard uniform law of large numbers
can be used to ensure that normalized    versions of these criteria converge to their
2464                                                                                       J.L. Powell


where the kernel pN(.) has the same symmetry property as stated for (1.37) above;
such estimators arise for models with independence        or index restrictions on the
error terms. Results by Nolan and Pollard (1987,1988), Sherman (1993) and Honor&
and Powell (1991) can be used to establish the consistency and asymptotic normality
of this.estimator,  which will have an influence function of the form (1.42) when

       m(y, X, a) = lim aE [pN(zi, zj, CC)1yi = y, xi = xyaE.                                     (1.47)
                          N+m


   A more difficult class of estimators to analyze are those termed “semiparametric
M-estimators”    by Horowitz (1988a), for which the estimating equations in (1.41)
also depend upon an estimator of a nonparametric     component de(.); that is, ai solves


       o=~.~
          m(yi,xi,6i,~(‘))=mN(6i,6^(‘))
                I    1
                                                                                                  (1.48)


for some nonparametric    estimator sof 6,. This condition might arise as a first-order
condition for minimization     of an empirical loss function that depends on 8,



       d=ar~~n~i~lP(Yi,xi,a,6^(‘)),                                                               (1.49)


as considered by Andrews (1990a, b). As noted above, an efficient estimator for any
semiparametric    model is generally of this form and estimators for models with
independence    or index restrictions are often in this class. To derive the influence
function for an estimator satisfying (1.48), a functional    mean-value  expansion    of
Ci,(& c!?)around s^= 6, can be used to determine the effect on di of estimation       of
6,. Formally, condition (1.48) yields


       o=   mN(61,       &‘,, = &(&&,(‘)) + &,(8(‘)- do(‘)) + op(f/v6)                            (1.50)

for some linear functional            L,; then, with an influence     function   representation       of
this second term


                                                                                                  (1.51)


(with E[S(y, x)] = O), the form of the influence           function    for a semiparametric          M-
estimator is


       G(Y, 4 = raE(m(Y,x3 4 ~o)iiw,_,3              - 1~4~~ X, ao,6,) + a~, 41.                  (1.52)
Ch. 41: Estimation   of Semiparametric   Models                                                2465


To illustrate, suppose 6, is finite-dimensional,           6,~@‘; then the linear functional     in
(1.50) would be a matrix product,

      L&%9- hk)) = b&                    6,) = CaE(m(y,~,a,6)/a6'1.=.o,a=a,](6-    do),    (1.53)

and the additional    component     5 of the influence function in (1.52) would be the
product of the matrix L, with the influence function of the preliminary         estimator
8. When 6, is infinite-dimensional,      calculation of the linear functional L, and the
associated influence function 5 depends on the nature of the nuisance parameter
6, and how it enters the moment function m(y,x,a,d).          One important   case has 6,
equal to the conditional     expectation     of some function s(y,x) of the data given
some other function u(x) of the regressors, with m(.) a function only of the fitted
values of this expectation;   that is,

      43= ~,(44) = ECdY, x)l a41                                                           (1.54)

and
                                                                                           (1.55)

with am/&J well-defined. For instance, this is the structure of efficient estimators
for conditional  location restrictions. For this case, Newey (1991) has shown that
the adjustment    term t(y,x) to the influence function of a semiparametric        M-
estimator 6i is of the form

      a~,   X) = CWm(y,x3 4 4 ewa~~t,=,,i 4 - 4A44)i.
                                      CS(Y~                                                (1.56)

In some cases the leading matrix in this expression is identically          zero, so the
asymptotic distribution    of the semiparametric    M-estimator   is the same as if 6,(.)
were known; Andrews (1990a, b) considered this and other settings for which the
adjustment   term 5 is identically zero, giving regularity conditions     for validity of
the expansion (1.50) in such cases. General formulae for the influence functions of
more complicated      semiparametric    M-estimators    are derived by Newey (1991)
and are summarized      in Andrews’ and Newey and McFadden’s            chapters in this
volume.



2.    Stochastic restrictions

This section discusses how various combinations          of structural   equations   and
stochastic restrictions    on the unobservable errors imply restrictions    on the joint
distribution   of the observable data, and presents general estimation      methods for
the parameters     of interest which exploit these restrictions   on observables.   The
classification scheme here is the same as introduced in the monograph        by Manski
2466


(1988b) (and also in Manski’s chapter in this volume), although the discussion
here puts more emphasis on estimation      techniques and properties. Readers who
are familiar with this material or who are interested in a particular structural form,
may wish to skip ahead to Section 3 (which reviews the literature for particular
models), referring back to this section when necessary.



2.1.    Conditional   mean restriction

As discussed in Section 1.3 above,         the class of constant     conditional    location
restrictions for the error distribution    assert constancy of

       vO = argmin E[r(c - b)jx],                                                        (2.1)
                b

for some function r(.) which is nonincreasing       for negative arguments  and non-
decreasing for positive arguments; this implies a moment condition E[q(.z - po)lx] =
0, for q(u) = ar(t#Ih.    When the loss function of (2.1) is taken to be quadratic,
r(u) = u’u, the corresponding  conditional  location restriction imposes constancy of
the conditional   mean of the error terms,


       .%4x) = PO                                                                       (2.2)

for some po. By appropriate definition of the dependent variable(s) y and “exogenous”
variables x, this restriction may be applied to models with “endogenous”      regressors
(that is, some components       of x may be excluded from the restriction (2.2)).
   This restriction    is useful for identification of the parameters    of interest for
structural functions g(x, IX,E) that are invertible in the error terms E; that is,

       Y = g(x, MO,40s    = 4Y, x, MO)

for some function     e(.), so that the mean restriction   (2.1) can be rewritten

                                                                                        (2.3)


where the latter equality imposes the normalization         p. E 0 (i.e., the mean ,u~ is
appended to the vector ~1~of parameters of interest).
   Conditional   mean restrictions are useful for some models that are not completely
specified ~ that is, for models in which some components       of the structural function
g(.) are unknown      or unspecified. In many cases it is more natural to specify the
function e(.) characterizing    a subset of the error terms than the structural function
g(.) for the dependent     variable; for example, the parameters       of interest may be
coefficients of a single equation from a simultaneous        equations    system and it is
Ch. 41: Estimation    of Semipurametric   Models                                      2461


often possible to specify the function e(.) without specifying the remaining equations
of the model. However, conditional      mean restrictions generally are insufficient to
identify the parameters     of interest in noninvertible     limited dependent    variable
models, as Manski (1988a) illustrates for the binary response model.
   The conditional    moment condition      (2.3) immediately     yields an unconditional
moment equation of the form

      0 = EC4x)4.k x, 41,                                                             (2.4)

where d(x) is some conformable matrix with at least as many rows as the dimension
of a,. For a given function cl(.), the sample analogue of the right-hand side of (2.8)
can be used to construct a method-of-moments        or generalized method-of-moments
estimator,    as described    in Section 1.4; the columns       of the matrix d(x) are
“instrumental     variables” for the corresponding    rows of the error vector E. More
generally, the function d(.) may depend on the parameters          of interest, Q, and a
(possibly) infinite-dimensional     nuisance   parameter   6,(.), so a semiparametric
M-estimator     for B may be defined to solve


                                                                                      (2.5)


where dim(d(.)) = dim(g) x dim(s) and s^= c?(.) is a consistent          estimator  of the
nuisance function 6,(.). For example, these sample moment equations arise as the
first-order conditions for the GMM minimization        given in (1.43), where the moment
functions take the form m(y, x, U) = c(x) e(y, x, a), for a matrix c(x) of fixed functions
of x with number of rows greater than or equal to the number components                of CC
Then, assuming differentiability   of e(.), the GMM estimator solves (2.5) with


                          $ ,$[ae(y,, xi, d)pd]‘[c(xi)]’
      d(x,   d, 8)=
                      i     L   1                          I
                                                           A,c(x),                    (2.6)

where A, is the weight matrix given in (1.43).
   Since the function d(.) depends on the data only through the conditioning
variable x, it is simple to derive the form of the asymptotic     distribution for the
estimator oi which solves (2.5) using the results stated in Section 1.4:


      ,h@      - a,,)~N(O,          M,‘V’JM;)-‘),                                     (2.7)

where
2468                                                                                     J.L. Powell


and

       V. = ECdb,ao,6,) e(y,x, a01e’(y,x, a01d’k a0, S0)l
          = E[d(x, aO, 6O)z(X)d’(xi, aO>sO)l.

In this expression,      Z(x) is the conditional       covariance   matrix   of the error terms,

       Z(x)-     E[e(y,x,ao)e’(y,x,ao)lx]        = E[EdIx].


Also, the expectation and differentiation     in the definition of MO can often be inter-
changed, but the order given above is often well-defined even if d(.) or e(.) is not
smooth in a.
   A simple extension of the Gauss-Markov           argument can be used to show that
an efficient choice of instrumental    variable matrix d*(x) is of the form


       d*(x)=d*(x,ao,do)=           &E[e(yyx,cr)lxi]Ia=,,,
                                               Cal -‘;                                         (2.8)

the resulting     efficient estimator       &* will have


       ,/??(a*   - ~1~)5     J(O,   V*),     with    I/* = {E[d*(x)C~(x)lCd*(x)l’}-‘,
                                                                                               (2.9)

under suitable regularity conditions.         Chamberlain      (1987) showed that V* is the
semiparametric     efficiency bound for any “regular” estimator of ~1~when only the
conditional    moment restriction      (2.3) is imposed. Of course, the optimal matrix
d*(x) of instrumental       variables depends upon the conditional             distribution     of y
given x, an infinite-dimensional      nuisance parameter, so direct substitution            of d*(x)
in (2.5) is not feasible. Construction     of a feasible efficient estimator for a0 generally
uses nonparametric        regression and a preliminary        inefficient GMM estimator of
u. to construct estimates of the components              of d*(x), the conditional        mean of
ae(y,x, a,)/aa and the conditional          covariance     matrix of e(y, x, ao). This is the
approach taken by Carroll (1982), Robinson (1987), Newey (1990b), Linton (1992)
and Delgado (1992), among others. Alternatively,             a “nearly” efficient sequence of
estimators    can be generated as a sequence of GMM estimators                     with moment
functions of the form m(y, x, a) = c(x) e(y, x, a), when the number of rows of c(x)
(i.e. the number of “instrumental        variables”) increases slowly as the sample size
increases; Newey (1988a) shows that if linear combinations               of c(x) can be used to
approximate     d*(x) to an arbitrarily    high degree as the size of c(x) increases, then
the asymptotic variance of the corresponding           sequence of GMM estimators equals
v*.
Ch. 41: Estimation of Semipammrtric Models                                                 2469


  For the linear model

       y = x’& + E

with scalar dependent        variable y, the form of the optimal       instrumental   variable
matrix d*(x) simplifies      to the vector

       d*(x) = [a’(x)]   - lx,

where a’(x) is the conditional    variance of the error term E. As noted in Section 1.2
above, an efficient estimator for f10 would be a weighted least squares estimator,
with weights proportional    to a nonparametric   estimator of [a’(x)] -I, as considered
by Robinson (1987).



2.2.    Conditional quantile restrictions

In its most general form, the conditional     71th quantile of a scalar error term E is
defined to be any function 9(x; rr) for which the conditional       distribution of E has
at least probability rr to the left and probability   1 - rc to the right of q=(x):

       Pr{s d q(x; n) Ix} 2 71 and      Pr{.s > ~(x; n)lx} 3 1 - 7~.                     (2.10)

A conditional    quantile restriction is the assumption      that, for some rt~(O, l), this
conditional   quantile is independent   of x,

       9(x; 7r)= rj,(7c) = qo,   a.s.                                                    (2.11)

Usually the conditional    distribution of E is further restricted to have no point mass
at its conditional quantile (Pr{s = q,,} = 0), which with (2.10) implies the conditional
moment restriction

       E[71-   l{E<Y/O}IX] =O=E[n-           l{&<O}~X],                                  (2.12)

where again the normalization         ‘lo E 0 is imposed (absorbing    q0 as a component
of Q). To ensure uniqueness of the solution ‘lo = 0 to this moment condition, the
conditional   error distribution   is usually assumed to be absolutely continuous      with
nonnegative     density in some neighborhood          of zero. Although it is possible in
principle to treat the proportion         rr as an unknown      parameter,  it is generally
assumed that rt is known in advance; most attention            is paid to the special case
71 = i (i.e. a conditional     median restriction)     which is implied by the stronger
assumptions     of either independence       of the errors and regressors or conditional
symmetry of the errors about a constant.
2470                                                                                               J.L. Powell



   A conditional   quantile restriction can be used to identify parameters of interest
in models in which the dependent variable y and the error term E are both scalar,
and the structural    function g(.) of (1.4) is nondecreasing  in E for all possible a0
and almost all x:

       u1 G u2 =-dx, M, 4)            G 4x, ~1,d            a.s. Cd.                                   (2.13)

(Of course, nonincreasing    structural functions can be accommodated         with a sign
change on the dependent variable y.) This monotonicity       and the quantile restriction
(2.11) imply that the conditional     xth quantile of y given x is g(x, aO, 0); since

       EGO or                 E2.O    3          y=g(x,ao,E)~g(x,~o,O)    or       ykg(x,cc,,O),

it follows that

        Pr{ydg(x,cc,,O)Ix)                > Pr{s<OO(x} arc         and

        Pr{y > g(x,cr,,O)lx}              2 Pr{.s 3 01x) 3 1 - rc.                                     (2.14)

   Unlike a conditional     mean restriction, a conditional       quantile restriction is useful
for identification    of CI~even when the structural function g(x, a, E) is not invertible
in E. Moreover, the equivariance      of quantiles to monotonic        transformations      means
that, when it is convenient, a transformation         l(y) might be analyzed instead of the
original dependent variable y, since the conditional           quantile of I(y) is l(g(x, aO, 0))
if I(.) is nondecreasing.    (Note, though, that application         of a noninvertible      trans-
formation may well make the parameters a,, more difficult to identify.)
   The main drawback with the use of quantile restrictions                to identify a0 is that
the approach is apparently restricted to models with a scalar error term E, because
of their lack of additivity (i.e. quantiles of convolutions        are not generally the sums
of the corresponding      quantiles) as well as the ambiguity of a monotonicity            restric-
tion on the structural function in a multivariate           setting. Estimators       based upon
quantile restrictions     have been proposed for the linear regression, parametric
transformation,    binary response, ordered response and censored regression models,
as described in Section 3 below.
   For values of x for which g(x,a,,e)        is strictly increasing and differentiable           at
E = 0, the moment restriction given in (2.12) and monotonicity                 restriction (2.13)
can be combined to obtain a conditional           moment restriction for the observable
data and unknown parameter aO. Let

       b(x       a)   =   1


                                                                                                       (2.15)
             7

                                 aE         =-         a&     -      aE        ’
then (2.12) immediately               implies

       E(&x,~~)C~- 11~ ~s(x,~o,O))llx) = ~Cm(y,x,ao)lxl=O.                                             (2.16)
Ch. 41: Estimation   of Semiparametric
                                    Models                                                2471


In principle, this conditional      moment condition     might be used directly to define
a method-of-moments        estimator for cr,; however, there are two drawbacks to this
approach.     First, the moment function m(.) defined above is necessarily             a dis-
continuous     function of the unknown       parameters,      complicating  the asymptotic
theory. More importantly,       this moment condition is substantially      weaker than the
derived quantile restriction (2.14), since observations         for which g(x, CX~, u) is not
strictly increasing at u = 0 may still be useful in identifying the unknown parameters.
As an extreme example, the binary response model has b(x, a,) = 0 with probability
one under standard conditions, yet (2.14) can be sufficient to identify the parameters
of interest even in this case (as discussed below).
    An alternative approach to estimation of c(~ can be based on a characterization
of the nth conditional        quantile as the solution      to a particular   expected loss
minimization      problem. Define

      wh x; 4 = m,(Y - b) - P,(Y)lXl>                                                   (2.17)

where

      p,(u) = u[7c - l(u <O)];

since Ip,(u - b) - p,(u)/ < 1b(, this minimand    is well-defined   irrespective of the
existence of moments of the data. It is straightforward        to show that Q(b,x) is
minimized    at b* = g(x,ct,,O) when (2.14) holds (more generally, Q(b,x) will be
minimized at any conditional      rcth quantile of y given x, as noted by Ferguson
(1967)). Therefore, the true parameter vector a0 will minimize

      Qb; w(.),4 = NW(X)Ndx, a,O),x; 41= E{w(x)CP,(Y - dx, a,0)) - A(                     >
                                                                                        (2.18)

over the parameter       space, where w(x) is any scalar, nonnegative         function of x
which has E[w(x).Ig(x,a,O)l]         < co. For a particular structural function g(.), then,
the unknown parameters will be identified if conditions          on the error distribution,
regressors, and weight function w(x) are imposed which ensure the uniqueness
of the minimizer of Q(cc;w(.), n) in (2.18). Sufficient conditions      are uniqueness      of
the rrth conditional      quantile q0 = 0 of the error distribution      and Pr{w(x) > 0,
g(x, u, r~)# g(x, c1,,0)} > 0 whenever c1# ~1~.
   Given a sample {(y,, xi), i = 1,. . . , N} of observations      on y and x, the sample
analogue of the minimand          in (2.18) is


      QN(CC
          wt.),n) =      k.$1 W(Xi)Pn(yi- g(xi,m,OIL
                           L
                                                                                        (2.19)


where an additive constant which does not affect the minimization    problem has
been deleted. In general, the weight function w(x) may be allowed to depend upon
2472                                                                             J.L. Powell



nuisance parameters,   w(x) E w(x, 6,), so a feasible weighted quantile estimator of
CC~might be defined to minimize        SN(a,q, G(.);x), with G(x) = w(x, $) for some
preliminary estimator 6^of 6,. In the special case of a conditional   median restriction
(n = $), minimization  of QN is equivalent    to minimization     of a weighted sum of
absolute deviations criterion


                                                                                     (2.20)


which, with w(x) 3 1, is the usual starting point for estimation          of the particular
models considered in the literature cited below. When the structural function g(.)
is of the latent variable form (g(x, CL,&)    = t(x’/3 + E,T)), the estimator     oi which
minimizes QJLY; cii,rr) will typically solve an approximate     first-order condition,


       ,:   fl k(Xi)[71 - l(y, < g(xi, oi,O))]b(Xi, a) ag(;;e,O)          r 0,       (2.21)


where b(x, CY)is defined in (2.15) and ag(.)/acr denotes the vector of left derivatives.
(The equality is only approximate     due to the nondifferentiability   of p,(u) at zero
and possible nondifferentiability   of g(.) at c?; the symbol “G” in (2.21) means the
left-hand side converges in probability       to zero at an appropriate     rate.) These
equations are of the form




where the moment               function   m(.) is defined in (2.16) and


       d(X,   bi,8)3   W(Xi,    &Xi,      d,jag’:&“’
                                               O).
Thus the quantile minimization      problem yields an analogue to the unconditional
moment restriction E[m( y, x, cl,,) d(x, CI~,S,)] = 0, which follows from (2.16).
  As outlined in Section 1.4 above, under certain regularity conditions (given by
Powell (1991)) the quantile estimator di will be asymptotically     normal,


       ,/%a
          - ~0)5 A’“@,M, ’ Vo(Mb)- ‘),                                               (2.22)

where now

                                adx, uo,wm, ao,0)
                  1
       MO= E ./-@I4 w(x,&.Jm,ao)
                                                      au          aa       I
Ch. 41:    Estimation    qf Semiparametric    Models                                              2413



and

                                                         ag(x, a,,O)ag(x,    ao, 0)
          V, = E ~(1 - rc) w2(x, 6,) b(x, CIJ
                                                             aa             ad        I ’

for f(Ol x) being the conditional density of the “residual”y - g(x, clO,0) at zero (which
appears from the differentiation     of the expectation     of the indicator function in
(2.21)). The “regularity” conditions include invertibility    of the matrix MO, which is
identically zero for the binary and ordered response models; as shown by Kim and
Pollard (1990), the rate of convergence   of the estimator bi is slower than fi   for
these models.
   When (2.22) holds, an efficient choice of weight function w(x) for this problem is

       w*(x) E .I-(0IX)?                                                                         (2.23)


for which the corresponding                  estimator    c?* has



       JN@*
          - a,) J+J-(0, v*),                                                                     (2.24)

with

                                                                                            -1
          v* = n(l - 7t) E f2(Olx)b(x,ao).ah, ao,wdx, a,, 0)
                             i[                               aa            ad        11     ’

The matrix V* was shown by Newey and Powell (1990) to be the semiparametric
efficiency bound for the linear and censored regression models with a conditional
quantile restriction, and this is likely to be the case for a more general class of
structural models.
   For the linear regression model g(x, c(~,E) 3 x’bo + E, estimation of the true coeffi-
cients PO using a least absolute deviations criterion dates from Laplace (1793); the
extension to other quantile restrictions       was proposed by Koenker and Bassett
(1978). In this case b(x, CI)= 1 and ag(x, a, .s)/aa = x, which simplifies the asymptotic
variance formulae. In the special case in which the conditional density of E = y - x’BO
at zero is constant - f(Olx) = f. - the asymptotic covariance matrix of the quantile
estimator B further simplifies to

       V*=rc(l          -~)[f~]-~(E[xx’]}-~.

(Of course, imposition of the additional restriction of a constant conditional density
at zero may affect the semiparametric   information  bound for estimation of PO.) The
monograph     by Bloomfield and Steiger (1983) gives a detailed discussion of the
Ch. 41: Estimation        of Semiparametric   Models                                 2475


for some h(.) and all possible x, CIand E. Then the random function h(y, x, a) =
h(g(x, Q,E),x, a) will also be symmetrically distributed about zero when CI= LX~,
implying the conditional moment restriction

      my, x, MO)Ixl = awx, MO,4, XT@ON
                                     xl = 0.                                       (2.27)

As with the previous restrictions, the conditional moment restriction can be used
to generate an unconditional moment equation of the form E[d(x) h( y, x, LY,)]= 0,
with d(x) a conformable matrix of instruments with a number of rows equal to the
number of components of 0~~.In general, the function d(x) can be a function of a
and nuisance parameters S (possibly infinite-dimensional), so a semiparametric
M-estimator biof ~1~can be constructed to solve the sample moment equations


      O= i     ,$
               I     1
                         d(xi,   Oi,4 h(Yi, xi, Oi),                               (2.28)


for s^an estimator of some nuisance parameters 6,.
   For structural functions g(x, M,E) which are invertible in the error terms, it is
straightforward to find a transformation satisfying condition (2.26). Since E= e( y, x, ~1)
is an odd function of E, h(.) can be chosen as this inverse function e(.). Even for
noninvertible structural functions, it is still sometimes possible to find a “trimming”
function h( .) which counteracts the asymmetry induced in the conditional distribution
of y by the nonlinear transformation g(.). Examples discussed below include the
censored and truncated regression models and a particular selectivity bias model.
   As with the quantile estimators described in a preceding section, the moment
condition (2.27) is sometimes insufficient to identify the parameters go, since the
“trimming” transformation h(.) may be identically zero when evaluated at certain
values of c1in the parameter space. For example, the symmetrically censored least
squares estimator proposed by Powell (1986b) for the censored regression model
satisfies condition (2.27) with a function h(.) which is nonzero only when the fitted
regression function x$ exceeds the censoring point (zero), so that the sample
moment equation (2.28) will be trivially satisfied if fl is chosen so that x$ is
nonpositive for all observations. In this case, the estimator /? was defined not only
as a solution to a sample moment condition of the form (2.28), but in terms of a
particular minimization problem b = argmino &(/I) which yields (2.28) as a first-
order condition. The limiting minimand was shown to have a unique minimizer at
/IO, even though the limiting first-order conditions have multiple solutions; thus,
this further restriction on the acceptable solutions to the first-order condition was
enough to ensure consistency of the estimator ,!?for PO.Construction of an analogous
minimization problem might be necessary to fully exploit the symmetry restriction
for other structural models.
   Once consistency of a particular estimator di satisfying (2.28) is established, the
asymptotic distribution theory immediately follows from the GMM formulae pre-
2476                                                                                      J.L. Powell


sented in Section 2.1 above. For a particular choice of h(.), the form of the sample
moment condition (2.28) is the same as condition (2.6) of Section 2.2 above, replacing
the inverse transformation        “e(.)” with the more general “h(.)” here; thus, the form
of the asymptotically      normal distribution     of 6i satisfying (2.28) is given by (2.7) of
Section 2.2, again replacing “e(.)” with “h(.)“.
   Of course, the choice of the symmetrizing transformation            h(.) is not unique - given
any h(.) satisfying (2.26), another transformation            h*( y, x, U) = I(h( y, x, CI),x, U) will
also satisfy (2.26) if I(u, x, a) is an odd function of u for all x and CI.This multiplicity
of possible symmetrizing        transformations    complicates the derivation          of the semi-
parametric efficiency bounds for estimation          of ~1~under the symmetry restriction,
which are typically derived on a case-by-case basis. For example, Newey (1991)
derived the semiparametric         efficiency bounds for the censored and truncated reg-
ression models under the conditional symmetry restriction (2.25), and indicated how
efficient estimators for these models might be constructed.
   For ,the linear regression model g(x, cue,E) E x’b + E, the efficient symmetrizing
transformation     h(y, x, B) is the derivative of the log-density of E given x, evaluated
at the residual y - x’j, with optimal instruments          equal to the regressors x:

       h*(~,x,p)=alnf~,~(y--‘BIx)la&,                d*(x, p, 6) = x.

Here an efficient estimator might be constructed         using a nonparametric   estimator
of the conditional    density of E given x, itself based on residuals e”= y - x’g from a
preliminary fit of the model. Alternatively,    as proposed by Cragg (1983) and Newey
(1988a), an efficient estimator might be constructed as a sequence of GMM estimators,
based on a growing number of transformation            functions h(.) and instrument    sets
d(.), which are chosen to ensure that the sequence of GMM influence functions can
approximate     the influence function for the optimal estimator arbitrarily       well. In
either case, the efficient estimator would be “adaptive” for the linear model, since
it would be asymptotically      equivalent to the maximum likelihood estimator with
known error density.



2.4.    Independence     restrictions

Perhaps the most commonly-imposed     semiparametric   restriction              is the assumption
of independence of the error terms and the regressors,

       Pr(si < ;1Ixi} = Pr(s, < A}      for all real 2, w.p.1.                                 (2.29)

Like conditional   symmetry restrictions,   this condition implies constancy    of the
conditional mean and median (as well as the conditional mode), so estimators which
are consistent under these weaker restrictions are equally applicable here. In fact,
for models which are invertible in the errors (E E e(y,x, cle) for some e(.)), a large
Ch. 41: Estimation   of Semiparametric   Models                                                  2417


class of GMM         estimators    is available,   based upon the general    moment     condition

      E(d(x)Cl(e(y,x,cr,))-v,l} =O                                                             (2.30)

for any conformable         functions      d(.) and I(.) for which the moment in (2.30) is
well-defined, with v,, = EC/(s)]. (MaCurdy (1982) and Newey (1988a) discuss how to
exploit these restrictions       to obtain more efficient estimators            of linear regression
coefficients.) Independence       restrictions are also stronger than the index and exclusion
restrictions to be discussed in the next section, so estimation approaches based upon
those restrictions will be relevant here.
   In addition to estimation approaches based on these weaker implied stochastic
restrictions,   certain approaches          specific to independence        restrictions     have been
proposed. One strategy to estimate the unknown parameters involves maximization
of a “feasible” version of the log-likelihood           function, in which the unknown distri-
bution function of the errors is replaced by a (preliminary                  or concomitant)      non-
parametric estimator. For some structural functions (in particular, discrete response
models), the conditional       likelihood function for the observable data depends only
on the cumulative distribution function FE(.) of the error terms, and not its derivative
(density). Since cumulative distribution            functions are bounded and satisfy certain
monotonicity     restrictions, the set of possible c.d.f.‘s will be compact with respect to
an appropriately      chosen topology, so in such cases an estimator of the parameters
of interest CI~can be defined by maximization              of the log-likelihood      simultaneously
over the finite-dimensional        parameter c1and the infinite-dimensional              nuisance par-
ameter F,( .). That is, if f( y Ix, a, FE(.)) is the conditional     density of y given x and the
unknown parameters cl0 and F, (with respect to a fixed measure pLy),a nonparametric
maximum likelihood (NPML) estimator for the parameters can be defined as


               = argmax 1 $J Inf(yiIxi,cr,F(.)),                                               (2.31)
                 at~,~Ep IV i= 1

 where p is the space of admissible c.d.f.‘s. Such estimators were proposed by, e.g.
 Cosslett (1983) for the binary response model and Heckman and Singer (1984) for
 a duration model with unobserved heterogeneity. Consistency of 6i can be established
 by verification  of the Kiefer and Wolfowitz (1956) conditions       for consistency    of
 NPML estimation; however, an asymptotic distribution         theory for such estimators
 has not yet been developed, so the form of the influence function for 6i (if it exists)
 has not yet been rigorously established.
    When the likelihood function of the dependent variable y depends, at least for
 some observations,    on the density function f,(e) = dF,(e)/de of the error terms, the
joint maximization     problem given in (2.31) can be ill-posed: spurious maxima (at
infinity) can be obtained by sending the (unbounded)     density estimator Te to infinity
at particular points (depending on c1and the data). In such cases, nonparametric
density estimation techniques are sometimes used to obtain a preliminary estimator
Ch. 41: Estimation of Semiparametric Models                                                         2419


and identically distributed     random variables are symmetrically                distributed     about
zero. For a particular structural model y = g(x, CC,        E), the first step in the construction
of a pairwise difference estimator is to find some transformation                   e(z,, zj, a) E eij(a)
of pairs of observations   (zi, zj) 3 (( yi, xi), (yj, xi)) and the parameter vector so that,
conditional   on the regressors xi and xj, the transformations               eij(crO) and eji(cr,) are
identically distributed, i.e.

      =Y(eij(ao)lXi,      xj)   =   ~(eji(Q)lXi,     xj)   as.,                                   (2.35)

where LZ(.l.) denotes the conditional       sampling distribution  of the random variable.
In order for the parameter a0 to be identified using this transformation,        it must also
be true that 9(eij(a,)Ixi, xj) # _Y(eji(a,)Ixi, xj) with positive probability       if a1 # ao,
which implies that observations       i andj cannot enter symmetrically      in the function
e(zi,zj,a). Since si and sj are assumed to be mutually independent          given xi and Xi,
eij(a) and eji(a) will be conditionally     independent   given xi and xj; thus, if (2.35) is
satisfied, then the difference eij(a) - eji(a) will be symmetrically     distributed     about
zero, conditionally    on xi and xi, when evaluated at a = a,,. Given an odd function
{(.) (which, in general, might depend on xi and xj), the conditional            symmetry of
eij(a) - eji(a) implies the conditional    moment restriction

      E[S(eij(%J- ~ji(%))I~i~xjl
                              = O a.s.,                                                           (2.36)

provided this expectation exists, and a0 will be identified using this restriction if it
fails to hold when a # ao. When [(.) is taken to be the identity mapping t(d) = d,
the restriction that eij(ao) and eji(ae) have identical conditional distributions can be
weakened to the restriction that they have identical conditional      means,

      E[eij(a,)IXi,      Xjl    =    ECeji(ao)lXi,   Xjl a.s.,                                    (2.37)

which may not require independence           of the errors Ei and regressors xi, depending
on the form of the transformation      e(.).
   Given an appropriate    (integrable) vector /(xi, xj, a) of functions of the regressors
and parameter vector, this yields the unconditional         moment restrictions


                                                                                                 (2.38)

which can be used as a basis for estimation.     If Z(.) is chosen to have the same
dimension   as a, a method-of-moments    estimator bi of a0 can be defined as the
solution to the sample analogue of this population   moment condition, namely,




     02”-IiTj          4teijCbi) -     eji(d))l(Xi, Xj, di) = 0                                  (2.39)
2480                                                                          J.L. Powell


(which may only approximately hold if t(eij(a) - eji(M))is discontinuous in E). For
many models (e.g. those depending on a latent variable y* E g(xi, a) + ci), it is
possible to construct some minimization problem which has this sample moment
condition as a first-order condition, i.e. for some function s(zi, zj, IX)with

       as(z:azj’
            ‘) =((eij(a) - eji(a))l(xi,xj, a),
the estimator d might alternatively be defined as

       bi= argmin ;         -I 1 S(Zi,Zj$).                                       (2.40)
             aE@ 0              iij

   A simple example of a model which is amenable to the pairwise differencing
approach is the linear model, yi = x:/I0 + ci, where gi and xi are assumed to be
independent. For this case, one transformation function which satisfies the require-
ments above is

       4Yi,   xi, xj, Coc Yi - X:B,
which does not depend on xP Choosing l(x,, xj, ~1)= xi - xi, a pairwise difference
estimator of /&,can be defined to solve


       0i -’     1 (((yi - yj) -(Xi
                 i<j
                                          - Xj))fi)(xi -   xj)   E OT


or, if E is the antiderivative of r, to minimize


       &l(B)= ;
                0      -’ ~j~((Yi-Yj)-(xi-xj)lB).


When &I) = d, the estimator fiis algebraically equal to the slope coefficient estimators
of a classical least squares regression of yi on Xi and a constant (unless some
normalization on the location of the distribution of ci is imposed, a constant term
is not identified by the independence restriction). When t(d) = sgn(d), j? is a rank
regression estimator which sets the sample covariance of the regressors xi with the
ranks of the residuals yi - x$ equal (approximately) to zero (JureEkovB (1971),
Jaeckel(l972)). The same general approach has been used to construct estimators
for discrete response models and censored and truncated regression models.
   In all of these cases, the pairwise difference estimator diis defined as a minimizer
of a second-order U-statistic of the form
Ch. 41: Estimation of Semiparametric Models                                                              2481


(with zi 3 ( yi, xi)), and will solve an approximate first-order condition



     0 -’
           n
           2       C q(Zi,Zj,6i)=",(n-"2),
                  icj



where q(.) = ap(.)/aa when this derivative is well-defined. As described in Section 1.4
above, the asymptotic normal distribution of the estimator 6i can be derived from
the asymptotically linear representation


     h = %3 -          m
                       n
                         t H, l r(zi, cto)+
                            i=l
                                                         o&n- l/2),                                    (2.41)


where r(zj, LX)
              E E[q(zi, zj, CY)/
                              zi] and




   The pairwise comparison approach is also useful for construction of estimators
for certain nonlinear panel data models. In this setting functions of pairs of observations
are constructed, not across individuals, but over time for each individual. In the
simplest case, where only two observations across time are available for each
individual, a moment condition analogous to (2.36) is

     ECS(elz,i(~o)                - ezl,i(~o))IXil9    xi21 = 0   a.s.,                                (2.42)

where now ei2,Ja) - e(zil, zi2, a) for th e same types of transformation functions e(.)
described above, and where the second subscripts on the random variables denote
the respective time periods. To obtain the restriction (2.42), it is not necessary for
the error terms Ei= (sil, ci2) to be independent of the regressors xi = (xii, xi2) across
individuals i; it suffices that the components sil and si2 are mutually independent
and identically distributed across time, given the regressors xi. The pairwise differ-
encing approach, when it is applicable to panel data, has the added advantage that it
automatically adjusts for the presence of individual-specific fixed effects, since
Eil + yi and Ei2+ yi will be identically distributed if sil and si2 are. A familiar example
is the estimation of the coefficients /IOin the linear fixed-effects model

     Yit   =   XIrbO    +         Yi   +   &it,   t=   1,2,

where setting the transformation                        e12Jcl) = yi, - xi1 /I and 5(u) = u in (2.42) results
in the moment condition
2482                                                                                    J.L. Powell


which is the basis for the traditional least squares fixed effects estimator. As described
in Section 3.5 below, this idea has been exploited to construct estimators for panel
data versions of the binary response and censored and truncated regression models
which are semiparametric         with respect to both the error distribution      and the
distribution  of the fixed effects.



2.5.    Exclusion and index restrictions

Construction    of estimators based on index restrictions can be based on a variety of
different approaches, depending upon whether the index function u(x) is completely
known or depends upon (finite- or infinite-dimensional)       unknown parameters, and
whether the index sufficiency condition is of the “weak” (affecting only the condi-
tional mean or median) or “strong” (applying to the entire error distribution)           form.
Estimators    of the parameters    of interest under mean index restrictions          exploit
modified forms of the moment conditions implied by the stronger constant condi-
tional mean restrictions, just as estimators under distributional         index restrictions
use modifications    of estimation strategies for independence     restrictions.
   Perhaps the simplest version of the restrictions      to analyze are mean exclusion
restrictions, for which the index function is a subset of the regressors (i.e. u(x) E x1,
where x = (xi, xi)‘), so that the restriction is

       E[elx]   = E[E[x,]   a.s.                                                            (2.43)

As for conditional   mean restrictions,    this condition can be used to identify the
parameters of interest, 01~,for structural functions y = g(x, a,, E) which are invertible
in the error terms (E = e(y,x, a,,)), so that the exclusion restriction (2.43) can be
rewritten as

       EC4y,x,aO)Ixl-ECe(~,x,a~)lx~l=O.                                                     (2.44)

By iterated expectations,    this implies an unconditional      moment    restriction      which
is analogous to condition     (2.4) of Section 2.1, namely,

                                                                                            (2.45)

where now

                                                                                            (2.46)

for any conformable matrix d(x) and square matrix A(x) of functions of the regressors
for-which the relevant expectations and inverses exist. (Note that, by construction,
E[d(x)lx,] = 0 almost surely.) Alternatively,   estimation  might be based on the
Ch. 41: Estimation       ofSemiparametric
                                       Models                                         2483



condition

      0 = EC&)ay,x, cl,)l,                                                           (2.47)

where, analogously to (2.46),



   Given a particular nonparametric method for estimation of conditional means
given x1 (denoted E[*lx,]), a semiparametric M-estimator 61of the structural
coefficients c1ecan be defined as the solution to a sample analogue of (2.45),


      0=    j!$
              ,${d(xi,4 s3- E[d(xi,4 s31xi1]
               I     1
                                          (i[A(xi)lxil])- ’ A(xi)}e(.Yi, a),   Xi,

                                                                                     (2.48)

where the instrumental variable matrix d(x) is permitted to depend upon LXand a
preliminary nuisance parameter estimator 8, as in Section 2.2. Formally, the asymp-
totic distribution of this estimator is given by the same expression (2.7) for estimation
with conditional mean restrictions, replacing d with 2 throughout. However, rigorous
verification of the consistency and asymptotic normality of dzis technically difficult,
and the estimating equation (2.48) must often be modified to, “trim” (i.e. delete)
observations where the nonparametric regression estimator EC.1 is imprecise. A
bound on the attainable efficiency of estimators of t1e under condition (2.44) was
derived by Chamberlain (1992), who showed that an optimal instrumental variable
matrix d”*(x)of the form (2.46) is related to the corresponding optimal instrument
matrix d*(x) for the constant conditional moment restrictions of Section 2.2 by the
formula

      d”(x)= d*(x) - E[d*(x)lx,]          [E{ [Z(x)]-‘lxl}]-’   [Z(x)]-   ‘,         (2.49)

where d*(x) is defined in (2.8) above and E(x) is the conditional covariance matrix
of the errors s given the regressors x. This formula directly generalizes to the case
in which the subvector x1 is replaced by a more general (but known) index function
u(x).
   For a linear model y = x!J& + E, the mean exclusion restriction (2.43) yields the
semilinear model considered by Robinson (1988):

      Y = @cl + w% I+ %

where 0(x,) - E[E/x,] and E[qlx] = E[E - 0(x,)1x] = 0. Defining                e(y,x,cl) E
y - xi/I, d(x) 3 x2, and A = I, the moment condition (2.47) becomes
2484                                                                                        J.L. Powell


which can be solved for PO:




Robinson (1988) proposed an estimator of /IO constructed from a sample analogue
to (2.47), using kernel regression to nonparametrically          estimate the conditional
expectations and “trimming” observations        where a nonparametric       estimator of the
density of x1 (assumed continuously    distributed) is close to zero and gave conditions
under which the resulting estimator was root-N-consistent         and asymptotically     nor-
mal. Linton (1992) constructs higher-order        approximations     to the distribution    of
this estimator.
   Strengthening   the mean exclusion restriction to a distributional      exclusion condi-
tion widens the class of moment restrictions          which can be exploited when the
structural function is invertible in the errors. Imposing

       Pr{s < ulx} = Pr{s bulx,)                                                                (2.50)

for all possible        values of u yields the general moment              conditions

       0 = EC&44x x, d)l                                                                        (2.51)

for any square-integrable   function I(E)of the errors, which includes (2.45) as a special
case. As with independence restrictions, precision of estimators of a, can be improved
by judicious choice of the transformation       I(.).
   Even for noninvertible    structural functions, the pairwise comparison       approach
considered for index restrictions can be modified to be applicable for distributional
exclusion (or known index) restrictions. For any pair of observations      zi and zj which
have the same value of the index function u(xi) = u(xj), the corresponding     error terms
si and sj will be independently     and identically distributed,  given the regressors xi
and xj, under the distributional     index restriction

       Pr{.s < ulx} = Pr{s < ulu(x)>.                                                           (2.52)

Given the pairwise transformation  function e(z,, zj, a) = eij@) described in the previous
section, an analogue to restriction (2.35) holds under this additional       restriction of
equality of index functions:

       T(eij(cco))xi, xj) = Y(eji(M,)lXi, Xj)        a.s. if   U(Xi)   =    U(Xj).              (2.53)

As for independence          restrictions,   (2.53) implies the weaker conditional      mean restric-
tion

       E[eij(cr,)Ixi,    xi] = E[eji(M,)IXi, Xj]     a.s. if   U(Xi)   =    U(Xj),              (2.54)
Ch. 41: Estimation of‘Semiparametric                Models                                                     2485


which is relevant for invertible structural functions (with eij(a) equated with the
inverse function e( yi, xi, a) in this case).
   These restrictions suggest estimation of a, by modifying the estimating equation
(2.39) or the minimization         problem (2.40) of the preceding subsection to exclude
pairs of observations        for which u(xi) # D(x~). However, in general U(Xi)- U(Xj) may
be continuously       distributed    around zero, so direct imposition         of this restriction
would exclude all pairs of observations.         Still, if the sampling distributions    LZ’(eij(Uo)
(xi, xj, u(xi) - u(xj) = c) or conditional    expectations E[eij(Eo)l xi, xj, u(xi) - u(xj) = c]
are smooth functions of c at c = 0, the restrictions (2.53) or (2.54) will approximately
hold if u(xi) - u(xj) is close to zero. Then appropriate modifications          of the estimating
equations (2.39) and minimization          problem (2.40) are



      0 *:   -I    iTj   4(eij(d)     -   eji(d))    l(Xi,   Xj,   d) WN(U(Xi)      -      U(Xj))   =   ()
                                                                                                             (2.55)


and


      oi = argmin            T      - 1 iTj Nzi2 zj9 Co wN("(xi)-                u(xj))3
                                                                                                             (2.56)
              &Q         0

for some weighting function wN(.) which tends to zero as the magnitude                    of its
argument increases and, at a faster rate, as the sample size N increases (so that,
ultimately, only observations   with u(xi) - u(xj) very close to zero are included in the
summations).
    Returning to the semilinear regression model y = xi& + 0(x,) + 4, E[qlx] = 0,
the same transformation    as used in the previous subsection can be used to construct
a pairwise difference, provided the nonparametric          components     B(xil) and /3(x,J are
equal for the two observations; that is, if e( yi, xi, Xi, CI)= eij(a) = yi - xQ and u(xi) =
xii, then




if u(xi) = D(Xj). Provided B(x,r) is a smooth (continuous    and differentiable) function,
relation (2.36) will hold approximately      if xi1 E xjI. Defining the weight function
w,,&.) to be a traditional kernel weight,


      WN(d)= k(h, l d),                   k(O)>O,k(ll)+Oas                   IIAII+oO,hN+OasN+cO,            (2.57)

                        = xiZ - xj2 and t(d) = d, a pairwise difference estimator of PO
and+ taking l(x,, xj, CC)
using either (2.55) or (2.56) reduces to a weighted least squares regression of the
distinct differences (yi - yj) in dependent variables on the differences (Xi2 - xj2) in
regressors, using k(h,‘(xi, - xjI)) as weights (as proposed by Powell (1987)).
   Consistency of the resulting estimator a requires only the weak exclusion restric-
tion (2.43); when the strong exclusion restriction (2.53) is imposed, other choices of
odd function t(d) besides the identity function are permissible in (2.55). Thus, an
estimator of Do using t(d) = sgn(d) might solve

    N
  0 2
          ’ iTj sgn((yi - yj) - (xi1 - xjl)‘g)(xil     - Xjl)k((Xi2 - Xj2)lhN) E 0.       (2.5’)


This is the first-order condition  of a “smoothed”              version   of the minimization
problem defining the rank regression estimator,


    b = argmin   :      - ’ iTj I(Yi - Yj) ~ (xi - xj)‘B Ik((xi, - Xjz)/hN),              (2.59)
           a   0

which is a “robust” alternative     to estimators proposed by Robinson (1988b) and
Powell (1987) for the semilinear model. Although the asymptotic theory for such
estimators has yet to be developed, it is likely that reasonable conditions         can be
found to ensure their root-N-consistency       and asymptotic normality.
   So far, the discussion has been limited to models with known index functions u(x).
When the index function depends upon unknown parameters 6, which are functionally
unrelated to the parameters of interest rxe,and when preliminary consistent estimators
s^ of 6, are available, the estimators described above are easily adapted to use an
estimated index function O(x) = u(x, 8). The asymptotic distribution       theory for the
resulting estimator must properly account for the variability         of the preliminary
estimator $. When 6, is related to a,, and that relation is exploited in the construction
of an estimator of CI~, the foregoing estimation      theory requires more substantial
modification,    both conceptually   and technically.
   A leading special case occurs when the index governing the conditional             error
distribution   appears in the same form in the structural function for the dependent
variable y. For example, suppose the structural function has a linear latent variable
form,

     Y = 57(x,
            %I, 4 = WPo + 4,                                                              (2.60)

and index u(x) is the latent linear regression       function   x’po,

     Pr(s d ulx} = Pr{s < 4x’Po).                                                         (2.61)

This particular  index restriction      on the unobservable    error       terms immediately
implies the same index restriction      for the observable dependent        variable,

     Pr{ydulx}=Pr(ydulx’Bo),                                                              (2.62)
Ch. 41: Estimation   qf Semiparametric    Models                                              2487



which can be used to generate moment restrictions                     for estimation   of PO. For
example, (2.62) implies the weaker restriction

        ECYIXI =x;(x’P,),                                                                   (2.63)

on the conditional     mean of the dependent variable, where G(.) is some unknown
nuisance function. (Clearly &, is at most identified up to a location and scale
normalization   without stronger restrictions on the form of G(.).) Defining Z(y, x, b) -
y - E[ y Jx’b], condition (2.63) implies that

        J34x) Z(Y, x2 /Ml     = 0                                                           (2.64)

for any conformable, square-integrable       d(x). Thus, with a nonparametric   estimator
@ylx’b]     of the conditional   expectation function E[ylx’b],     a semiparametric    M-
estimator of /I0 can be constructed      as a sample analogue to (2.64). Alternatively,   a
weighted pairwise difference approach might be used: assuming G(.) is continuous,
the difference in the conditional   means of the dependent variables for observations
i and j satisfies

        E[ yi - yj 1xi, xj] = G(x&)        - G(x;/3,) g 0   if   x&   z x;p,,.              (2.65)

So by estimating E[ yi - yj (Xi, xj] nonparametrically         and determining     when it is
near zero, the corresponding          pair of observations      will have (xi - xj)‘& g 0,
which is useful in determining        &,. When G(.) is known to be monotonic            (which
follows, for example, if the transformation        t(.) of the latent variable in (2.60) is
monotonic      and E is assumed to be independent       of x), a variation on the pairwise
comparison       approach     could exploit the resulting inequality      E[y, - yjl xi, xj] =
G(x&) - G(x>P,) > 0 only if x$,, > x&.
   Various estimators        based upon these conditions     have been proposed for the
monotone regression model, as discussed in Section 3.2 below. More complicated
examples involve multiple indices, with some indices depending upon parameters
of interest and others depending upon unrelated nuisance parameters, as for some
of the proposed estimators for selectivity bias models. The methods of estimation
of the structural parameters ~1~vary across the particular models but generally involve
nonparametric      estimation of regression or density functions involving the index u(x).


3.     Structural models

3.1.    Discrete response models

The parameters       of the binary       response   model

       y = 1(x’& + E > 0)                                                                   (3.1)
2488                                                                                           J.L. Powell


are traditionally     estimated   by maximization             of the average log-likelihood   function


                                                                                                     (3.2)


where the error term E is assumed to be distributed independently       of x with known
distribution    function F(.) (typically standard normal or logistic). Estimators      for
semiparametric      versions of the binary response model usually involve maximization
of a modified form of this log-likelihood,    one which does not presuppose knowledge
of the distribution    of the errors. For the more general multinomial   response model,
in which J indicator variables { yj, j = 1,. . . , J} are generated as

       yj=l{x’fl~+~j>x’&++Ek                  forall     k#j},                                       (3.3)

the average log-likelihood        has the analogous             form


       ~N(P,..., BJ; F, = i       itl   j$l   YijlnCFj(x$‘,        . . . , XipJ)],                   (3.4)


where Fj(.) is the conditional     probability  that yj = 1 given the regressors x. This
form easily specializes to the ordered response or grouped dependent variable models,
replacing Fj(.) with F(x& - cj) - F(x$,, - cj_ r), where the {cj} are the (known or
unknown) group boundaries.
   The earliest example of a semiparametric         approach for estimation  of a limited
dependent variable model in econometrics is the maximum score estimation method
proposed by Manski (1975). For the binary response mode, Manski suggested that
PO be estimated by maximizing the number_of correct predictions of y by the sign
of the latent regression function x’p; that is, /I was defined to maximize the predictive
score function


                                                                                                     (3.5)
                i=l



over a suitable parameter space 0 (e.g. the unit sphere). The error terms E were
restricted to have conditional       median zero to ensure consistency of the estimator.
A later interpretation     of the estimator (Manski (1985)) characterized the maximum
score estimator p^as a least absolute deviations estimator, since the estimator solved
the minimization      problem


       b = arg:in     A i$r I Yi - 1 tX:B > Ol1.                                                     (3.6)
Ch. 41: Estimation   of Semiparametric   Models                                   2489


This led to the extension of the maximum score idea to more general quantile
estimation of /?,,, under the assumption that the corresponding conditional quantile
of the error terms was constant (Manski (1985)). The maximum score approach was
also applied to the multinomial response model by Manski (1975); in this case, the
score criterion becomes




 and its consistency was established under the stronger condition of mutual indepen-
dence of the alternative specific errors (ej}. M. Lee (1992) used conditional median
 restrictions to define a least absolute deviations estimator of the parameters of the
 ordered response model along the same lines.
    Although consistency of the maximum score estimator for binary response was
 rigorously established by Manski (1985) and Amemiya (1985), its asymptotic distri-
bution cannot be established by the methods described in Section 2.2 above, because
of lack of continuity of the median regression function 1{x’j?, > 0} of the dependent
variable y. More importantly, because this median regression function is flat except
 at its discontinuity points, the estimator is not root-N-consistent under standard
 regularity conditions on the errors and regressors. Kim and Pollard (1990) found
that the rate of convergence of the maximum score estimator to j?,, under such
conditions is N1/3, with a nonstandard asymptotic distribution (involving the
distribution of the maximum value of a particular Gaussian process with quadratic
drift). This result was confirmed for finite samples by the simulation study of Manski
and Thompson (1986).
    Chamberlain (1986) showed that this slow rate of convergence of the maximum
score estimator was not particular to the estimation method, but a general con-
sequence of estimation of the binary response model with a conditional median
restriction. Chamberlain showed that the semiparametric version of the information
matrix for this model is identically zero, so that no regular root-N-consistent
estimator of /I?,,exists in this case. An extension by Zheng (1992) derived the same
result - a zero semiparametric information matrix - even if the conditional median
restriction is strengthened to an assumption of conditional symmetry of the error
distribution. Still, consistency of the maximum score estimator fi illustrates the fact
that the parameters flc,of the binary response model are identified under conditional
quantile or symmetry assumptions on the error terms, which is not the case if the
errors are restricted only to have constant conditional mean.
    If additional smoothness restrictions on the distribution of the errors and regres-
sors are imposed, the maximum score (quantile) approach can be modified to
obtain estimators which converge to the true parameters at a faster rate than N113.
Nawata (1992) proposed an estimator which, in essence, estimates f10by maximizing
the fit of an estimator of the conditional median function 1(x’& > 0) of the binary
variable to a nonparametric estimator of the conditional median of y given x. In a
2490                                                                                  J.L.Powell


first stage, the observations are grouped by a partition of the space of regressors,
and the median value of the dependent variable y is calculated for each of these
regressor bins. These group medians, along with the average value of the regression
vector in each group, are treated as raw data in a second-stage         fit of the binary
response model using the likelihood function (3.2) with a standard normal cumulative
and a correction for heteroskedasticity    induced by the grouping scheme. Nawata
(1992) gives conditions under which the rate of convergence of the resulting estimator
is N2’5, and indicates how the estimator and regularity conditions can be modified
to achieve a rate of convergence arbitrarily    close to N”‘. Horowitz (1992) used a
different approach, but similar strengthening    of the regularity conditions, to obtain
a median estimator for binary response with a faster convergence           rate. Horowitz
modifies the score function of (3.5) by replacing the conditional       median function
l{x’/I > 0} by a “smoothed”     version, so that an estimator of /I,, is defined as a
minimizer of the criterion


       s,*(P)=   iilYi K(x:B/hN)+ t1 - Yi) Cl - K(x~B/hN)l~                                (3.8)


 where K(.) is a smooth function in [0, l] with K(u)+0 or 1 as U+ - co or co, and
 h, is a sequence of bandwidths which tends to zero as the sample size increases (so
 that K(x’&/h,) approaches the binary median 1(x’& > 0) as N + co). With particular
conditions on the function K(.) and the smoothness          of the regressor distribution
and with the conditional     density of the errors at the median being zero, Horowitz
(1992) shows how the rate of convergence of the minimizer of S;G(fi) over 0 can be
made at least N2” and arbitrarily close to N”2; moreover, asymptotic normality
of the resulting estimator is shown (and consistent estimators of asymptotic bias
and covariance terms are provided), so that normal sampling theory can be used to
construct confidence regions and hypothesis tests in large samples.
    When the error terms in the binary response model are assumed to satisfy the
stronger assumption     of independence     of the errors and regressors, Cosslett (1987)
showed that the semiparametric        information    matrix for estimation    of fiO in (3.1)
(once a suitable normalization      is imposed) is generally nonsingular,       a necessary
condition for existence of a regular root-N-consistent       estimator. Its form is anal-
ogous to the parametric information        matrix when the distribution    function F(.) of
the errors is known, except that the regressors x are replaced by deviations from
their conditional   means given the latent regression function x’&; that is, the best
attainable   asymptotic   covariance matrix for a regular estimator of &, when E is
independent    of x with unknown distribution      function F(.) is



                 wm
                      Cf (x’Bo)12
                          - wm1
                                     [5Z- E(:lx’&)]      [Z - E(i(x’&,)]’
                                                                            II  -l,        (3.9)


where f(u) = dF(u)/du     and Z?is the subvector      of regressors   x which eliminates    the
Ch. 41: Estimution   ~JSemipurametric   Models                                                 2491


last component      (whose coefficient is assumed normalized to unity to pin down the
scale of /IO). Existence of the inverse in (3.9) implies that a constant term is excluded
from the regression vector, and the corresponding            intercept term is absorbed into
the definition of the error cumulative F(.).
    For the binary response model under an index restriction, Cosslett (1983) proposed
a nonparametric       maximum likelihood estimator (NPMLE) of j3e through maxi-
mization of the average log-likelihood      function _Y,,@‘;F) simultaneously            over BE 0
and FEN, where g is the space of possible cumulative distributions                     (monotonic
functions on [0,11). Computationally,          given a particular         trial value b of fi, an
estimator of F is obtained by monotonic         regression of the indicator y on x’b, using
the pool adjacent violators algorithm of isotonic regression; this estimator F^ of F is
then substituted into the likelihood function, and the concentrated criterion SY,(b; F)
is maximized over bE O= {/I: )//31)= 1 }. Cosslett (1983) establishes consistency of
the resulting estimators of j?, and F(.) through verification of the Kiefer-Wolfowitz
(1956) conditions for the consistency of NPMLE, constructing                    a topology which
ensures compactness of the parameter space B of possible nuisance functions F(.).
As noted in Section 2.4 above, an asymptotic distribution              for NMPLE has not yet
been established.
   Instead of the monotonic regression estimator F(.) of F(.) implicit in the construc-
tion of the NPMLE,          the same estimation      approach       can be based upon other
nonparametric      estimators of the error cumulative. The resulting projle likelihood
estimator of /IO, maximizing ZP,(b; F) of (3.2) using a kernel regression estimator F,
was considered by Severini and Wong (1987a) (for a single parameter) and Klein
and Spady (1993). Because kernel regression does not impose monotonicity                      of the
function estimator, this profile likelihood estimator is valid under a weaker index
restriction   on the error distribution    Pr{.s < u/x} = Pr{& < u[x’&,}, which implies
that E[ ~1x1 = F(x’/?,) for some (not necessarily monotone) function F(.). Theoreti-
cally, the form of the profile likelihood TN(b;@ is modified by Klein and Spady
(1993) to “trim” observations       with imprecise estimators of F(.) in order to show
root-N-consistency      and asymptotic normality        of the resulting estimator p. Klein
and Spady show that this estimator is asymptotically           efficient under the assumption
of independence     of the errors and regressors, since its asymptotic covariance matrix
equals the best attainable value V* of (3.9) under this restriction.
   Other estimators      of the parameters    of the binary response model have been
proposed which do not exploit the particular structure of the binary response model,
but instead are based upon general properties of transformation                models. If indepen-
dence of the errors and regressors is assumed, the monotonicity                of the structural
function (3.1) in E can be used to define a pairwise comparison             estimator of Do.
Imposition    of a weaker index restriction      Pr{s < u (x] = Pr{s < ~1x’p,} implies that


      ECYIXI= WA,)                                                                           (3.10)

for some unknown function G(.), so any estimator which is based on this restriction
2492                                                                                 J.L. Powell



is applicable to the binary response model. A number of estimators proposed for
this more general setup are discussed in the following section on transformation
models.
   Estimation    of the multinomial          response model (3.3) under independence         and
index restrictions can be based on natural extensions of the methods for the binary
response model. In addition to the maximum score estimator defined by minimizing
(3.7), Thompson (1989a, b) considered identification and estimation of the parameters
in (3.3) assuming independence         of the errors and regressors; Thompson showed how
consistent estimators of (/?A,. . . , /I”,) could be constructed using a least squares criterion
even if only a single element yj of the vector of choice indicators (y,, . . . , yj) is
observed. L. Lee (1991) extended profile likelihood estimation to the multinomial
response model, and obtained a similar efficiency result to Klein and Spady’s (1993)
result for binary response under index restrictions on the error terms. And, as for
the binary response model, various pairwise comparison                or index restriction esti-
mators for multiple index models are applicable to the multinomial             response model;
these estimators are reviewed in the next section.



3.2.    Transformation models

In Section 1.3 above, two general classes of transformation    models were distinguished.
Parametric    transformation      models, in which the relation between the latent and
observed dependent        variables is invertible  and of known parametric        form, are
traditionally   estimated assuming the errors are independent       of the regressors with
density function f(.;r)      of known parametric      form. In this setting, the average
conditional   log-likelihood    function for the dependent variable

       y = t(x’&   + E; &JO& = t - l (Y; &) - x’Po= 4x x, PO,2,)                          (3.11)

is


       ThdP,A ? f) =    k.z
                          1
                          I
                            (InCf(e(Yi,    xi,   B,4; r)l - ln CladYi, Xi, B,2yay I]),

                                                                                         (3.12)

which is maximized over 8 = (B, ;1,r) to obtain estimators of the parameters /IO and
2, of interest.
   Given both the monotonicity     of the transformation   t(.) in the latent variable and
the explicit representation  function e(.) for the errors in terms of the observable
variables and unknown parameters, these models are amenable to estimation under
most of the semiparametric      restrictions    on the error distribution     discussed in
Section 2. For example, Amemiya and Powell (1981) considered nonlinear                 two-
stage least squares (method-of-moments)       estimation of /IO and A,, for the Box-Cox
Ch. 41: Estimation   of Semiparametric   Models                                                   2493


 transformation       under a conditional        mean restriction      on the errors E given the
 regressors x, and showed how this estimator could greatly outperform (in a mean-
 squared-error     sense) a misspecified Gaussian ML estimator over some ranges of the
 transformation      parameter &. Carroll and Ruppert (1984) and Powell (1991) discuss
 least absolute deviations and quantile estimators of the Box-Cox regression model,
 imposing independence         or constant quantile restrictions on the errors. Han (1987b)
 also assumes independence          of the errors and regressors, and constructs a pairwise
 difference estimator of the transformation            parameter 2, and the slope coefficients
 &, which involves maximization             of a fourth-order      U-statistic; this approach is a
 natural generalization       of the maximum rank correlation               estimation    method de-
 scribed below. Newey (1989~) constructs efficient method-of-moments                    estimators for
 the BoxxCox regression model under conditional mean, symmetry, and independence
 restrictions   on the error terms. Though not yet considered                    in the econometric
 literature, it would be straightforward           to extend the general estimation          strategies
 described in Section 2.5 above to estimate the parameters of interest in a semilinear
 variant of the BoxxCox regression model.
     When the form of the transformation            function t(.) in (3.11) is not parametrically
specified (i.e. the transformation      itself is an infinite-dimensional       nuisance parameter),
estimation     of &, becomes more problematic,               since some of the semiparametric
restrictions on the errors no longer suffice to identify /I,, (which is, at most, uniquely
determined      up to a scale normalization).         For instance, since a special case is the
binary response model, it is clear from the discussion of the previous section that a
conditional mean restriction on E is insufficient to identify the parameters of interest.
Conversely, any dependent variable generated from an unknown (nonconstant                           and
monotonic) transformation          can be further transformed to a binary response model,
so that identification     of the parameters of a binary response model generally implies
identification    of the parameters of an analogous transformation                 model.
     Under the assumption of independence             of the errors and regressors, Han (1987a)
proposed a pairwise comparison             estimator, termed the maximum rank correlation
estimator, for the model (3.11) with t(.) unknown               but nondecreasing.      Han actually
considered a generalization       of (3.1 l), the generalized regression model, with structural
function

     Y =          41,
           tCs(x’Bo,                                                                            (3.13)

with t[.] a monotone       (but possibly roninvertible)   function and s(.) smooth and
invertible in both of its arguments; with continuity     and unbounded     support of the
error distribution,   this construction   ensures that the support of y will not depend
upon the unknown parameters &,. Though the discussion below focusses on the
special case s(x’ /I, E) = x’fi + E, the same arguments     apply to this, more general,
setup.
   For model (3.11), with t(.) unknown         and E and x assumed independent,     Han
proposed estimation of /I,, by maximization       of
2494                                                                                                          J.L. Powell



       RN(b)        =0“1 -IN-1              N
                                                                            ’   x;P)+ l(Yi < Yj) ltx:P < x;B)l
                                                                                                                  (3.14)

over a suitably-restricted  parameter space @(e.g. normalizing one of the components
of & to unity). Maximization        of (3.14) is equivalent to minimization of a least
absolute deviations criterion for the sign of yi - yj minus its median, the sign of
xi/? - xi/?, for those observations   with nonzero values of yi - yj:

                                                   N    -IN-1         N
  B E argmax RN(b) = argmin
                0                     0          0  2
                                                                izI j=z 1 l(Yi+Yj)     I l(Yi>Yj)-      l(xlP>x;B)I.

                                                                                                                  (3.15)


In terms of the pairwise            difference          estimators        of Section 2.4, defining


       eij(B)   E   l(Yi Z Yj)%nCl(Yi > Yj)-                     l(x$>xJB)l~

identification   of & using the maximum                           rank correlation     criterion     is related to the
conditional    symmetry of



                              =   2 l(yi # Yj)Sgn[l((Xi-Xj)‘Bo                   > &j-&i)-      l((xi-xjYBO       ‘“)l

about zero given xi and xj. The maximum rank correlation           estimator defined in
(3.15) does not solve a sample moment condition like (2.39) of Section 2.4 (though
such estimators could easily be constructed), because the derivative of RN(B) is zero
wherever it is well-defined; still, the estimator b is motivated by the same general
pairwise comparison     approach described in Section 2.4.
   Han (1987a) gave regularity conditions under which fl is consistent for & these
included continuity of the error distribution   and compact support for the regressors.
Under similar conditions Sherman (1993) demonstrated       the root-N-consistency   and
asymptotic normality of the maximum rank estimator; writing the estimator as the
minimizer of a second-order     U-process,


       j? = argmax        N       -r ‘jj’          5    P(ziYzjt8)>                                               (3.16)
                    0   0 2           i=l       j=i+l




Sherman showed that the asymptotic distribution                of B is the same as that for an
M-estimator     based on N/2 observations       which maximizes the sample average of
the conditional    expectation r(zi, /I) = E[ p(zi, zj, /I) 1zi] over the parameter space 0,
y*. Greene (1981, 1983) derives similar results for classical least squares estimates
in the special case of a censored dependent variable. Brillinger (1983) shows consis-
tency of classical least squares estimates for the general transformation  model when
the regressors are jointly normally distributed,    which implies that the conditional
distribution   of the regressors x given the index x’BO has the linear form

     Cxl X’BOI= PO + vo(X’BO)                                                          (3.20)

for some p. and vo. Ruud (1983) noted that condition               (3.20) (with a full-rank
condition on the distribution     of the regressors) was sufficient for consistency (up to
scale) of a misspecified maximum likelihood estimator of PO in a binary response
model with independence       of the errors and regressors; this result was extended by
Ruud (1986) to include all misspecified maximum likelihood estimators for latent
variable models when (3.1 l), (3.20) and independence        of the errors and regressors
are assumed. Li and Duan (1989) have recently noted this result, emphasizing              the
importance of convexity of the assumed likelihood function (which ensures unique-
ness of the minimizer rcfio of the limiting objective function). As Ruud points out,
all of these results use the fact that the least squares or misspecified ML estimators
6i and y^of the intercept term and slope coefficients satisfy a sample moment condi-
tion of the form

                               1
          5
     O= i=l r(.Yi,6i + Xiy*)
                            [3xi
                                                                                       (3.21)


for some “quasi-residual”  function I(.). Letting F(x’Bo, ~1+ x’y) = E[r(y, c1+ x’y) 1x]
and imposing condition    (3.20), the value y* = rcpo will solve the corresponding
population moment condition if K and the intercept CIare chosen to satisfy the two
conditions

     0 = W(x’Bo, a + dx’Do))l = -w(x’&, a + K(X’PO))(x’A41,

since the population   analogue    of condition   (3.21) then becomes




under the restriction (3.20). (An analogous         argument works for condition     (3.19),
replacing x’fio withy* where appropriate; in this case, the index restriction _Y(yI x) =
_Y(yIx’p,) is not necessary, though this condition may not be as easily verified as
(3.20).) Conditions    (3.19) and (3.20) are strong restrictions which seem unlikely to
hold for observational     data, but the consistency results may be useful in experimental
design settihgs (where the distribution        of the regressors can be chosen to satisfy
Ch. 41: Estimation of Semiparametric Models                                           2497


(3.20)), and the results suggest that the inconsistency      of traditional   maximum
likelihood estimators may be small when the index restriction holds and (3.19) or
(3.20) is approximately   satisfied.
   If the regressors are assumed to be jointly continuously    distributed  with known
density function fX(x), modifications of least squares estimators can yield consistent
estimators of /I0 (up to scale) even if neither (3.19) nor (3.20) holds. Ruud (1986)
proposed estimation of & by weighted least squares,


                                                  &   (d4xi)lfx(xi))(xi - a)(Yi - Jib

                                                                                    (3.22)

where 4(x) is any density function for a random vector satisfying       condition   (3.20)
(for example, a multivariate normal density function) and


                                                                                    (3.23)


with an analogous definition for 9. This reweighting ensures that the probability
limit for the weighted least squares estimator in (3.22) is the same as the probability
limit for an unweighted least squares estimator with regressors having marginal
density 4(x); since this density is assumed to satisfy (3.20), the resulting estimator
will be consistent for /I,, (up to scale) by the results cited above.
   A different approach to use of a known regressor density was taken by Stoker
(1986), who used the mean index restriction E[y 1x] = E[y 1x’/I,,] = G(x’/?,) implied
by the transformation     model with a strong index restriction on the errors. If the
nuisance function G(.) is assumed to be smooth, an average of the derivative of
E[ylx] with respect to the regressors x will be proportional       to PO:

     EEaE~ylxll~xl= ECWx’P,)lWP,)l PO= K*Po.                                        (3.24)

Furthermore, if the regressor density f,(x) declines smoothly to zero on the boundary
of its support (which is most plausible when the support is unbounded), an integration-
by-parts argument yields


     huh = - EC9 lnCfx(41/ax)~                                                      (3.25)

which implies that PO can be consistently      estimated (up to scale) by the sample
average ofy, times the derivative of the log-density of the regressors, a ln[fX(xi)]/ax.
Also, using the facts that

     -W lnCfxb)l/ax) = 0,             E{(a Ufx(41/WX’) = - 1,                       (3.26)
2498                                                                                    J.L. Powell


Stoker proposed an alternative          estimator of K*& as the slope coefficients of an
instrumental     variables fit ofyi on xi using the log-density derivatives a ln[fJxJ]/ax,
and a constant as instruments.         This estimator, as well as Ruud’s density-weighted
least squares estimator, is easily generalized to include models which have regressor
density f,(x; rO) of known parametric form, by substitution              of a preliminary     esti-
mator + for the unknown distribution          parameters and accounting for the variability
of this preliminary      estimator in the asymptotic covariance matrix formulae, using
formula (1.53) in Section 1.4 above.
    When the regressors are continuously          distributed   with density function f,(x) of
unknown form, nonparametric            (kernel) estimators of this density function (and its
derivatives) can be substituted          into the formulae for the foregoing estimators.
Although the nonparametrically-estimated              components     necessarily converge at a
rate slower than N1’2, the corresponding         density-weighted    LS and average derivative
estimators will be root-IV-consistent          under appropriate     conditions,   because they
involve averages of these nonparametric            components     across the data. Newey and
 Ruud (1991) give conditions which ensure that the density-weighted                LS estimator
(defined in (3.22) and (3.23)) is root-iV-consistent        and asymptotically     normal when
f,.(x) is replaced by a kernel estimator_?Jx). These conditions include the requirement
that the reweighting density 4(x) is nonzero only inside a compact set which has
f,(x) bounded above zero, to guarantee that the reciprocal of the corresponding
nonparametric      estimator f,(x) is well-behaved. Hlrdle and Stoker (1989) and Stoker
(1991) considered substitution         of the derivative of a kernel estimator of the log-
density, a ln[~.Jx)]fix       into a sample analogue of condition         (3.26) (which deletes
observations     for which a ln[TX(xi)]/Z x is small), and gave conditions           for root-l\r-
consistency and asymptotic normality of the resulting estimator.
    A “density-weighted”       variant on the average derivative estimator was proposed
by Powell et al. (1989), using the fact that




where the last inequality follows from a similar integration-by-parts              argument     as
used to derive (3.25). The resulting estimator s^of 6, = K+&,


                                                                                            (3.28)


was shown to have Ith component           of the form


                                                                                            (3.29)


with weights c+,(xi - xi) which tend to zero as 11
                                                 Xi - Xj 11increases,             and, for fixed
2500                                                                                J.L.   Powell



separately from the index x’f10 in that formula, is replaced by the deviation of the
regressors from their conditional  mean given the index, x - E[x) x’&J. Newey and
Stoker (1993) derived the semiparametric      efficiency bound for estimation of PO (up
to a scale normalization    on one coefficient) under condition     (3.32), which has a
similar form to the semiparametric   efficiency bound for estimation under exclusion
restrictions given by Chamberlain   (1992) as described in Section 2.5 above.



3.3.    Censored   and truncated regression      models

A general notation for censored regression models which covers fixed and random
censoring takes the dependent variable y and an observable indicator variable d to
be generated as

       y = min {x’& + E,u},       d=   l{y<u}.                                             (3.34)


This notation covers the censored Tobit model with the dependent variable censored
below at zero (with u = 0 and a sign change on the dependent        and explanatory
variables) and the accelerated failure time model (y equals log failure time) with
either fixed (u always observable) or random censoring times. Given a parametric
density f(~; r,,) for the error terms (assumed independent  of x), estimation   of the
resulting parametric     model can be based upon maximization      of the likelihood
function


LP$j?, r; F) = $ .$ (di ln[f(yi   - x:fl; T)] + (1 - di) ln[l   - F(ui - x$; T)])          (3.35)
                 I 1

over possible values for /I0 and T,,, where F(.) is the c.d.f. of E (i.e. the antiderivative
of the density f(.)). This likelihood is actually the conditional        likelihood of yi, di
given the regressors {xi} and the censoring points {ui} for all observations (assuming
ui is independent   of yi and xi), but since it only involves the censoring point ui for
those observations    which are censored, maximization       of the likelihood in (3.35) is
equally feasible for fixed or random censoring. For truncated data (i.e. sampling
conditional   on d = l), the likelihood function becomes


       =93/A 7; F) = +j ,t lnCf(Yi - xiB; 7)lF(ui - x:/3; 7)l;
                        1 1

here the truncation    points must be known for all observations.
    When the error density is Gaussian (or in a more general exponential family), the
first-order conditions    for the maximum likelihood estimator of /I0 with censored
data can be interpreted in terms of the “EM algorithm” (Dempster et al. (1977), as
Ch. 41: Estimation       of Semiparametric        Models                                                    2501


a solution   to


                                                                                                          (3.37)


where

      J’+(PO,~0)= diyi + (1 - di)E[XiBo + EiIdi = 0,Xi, Ui]

                     =     diyi + (1 - di) XiBo +
                                          [                 s   Cc




                                                            u, - x;s,
                                                                         E_I+;20)d& ,
                                                                                     1
                                                                                                          (3.38)



with a similar expression for the nuisance parameter                           estimator   z^.Related formulae
for the conditional  mean of y given x and U,


      E[ylx,u]=[l                -F(u-x’/$))]u+
                                                            s
                                                            ”




                                                            -m
                                                                -x’po

                                                                         Cx’Po + ~lf(~;4   d&,            (3.39)


or for the conditional                mean of y given x and u and with d = 1,


      E[y 1x, u, d = l] = [F(u - x’&,)] - ’
                                                            s   u-i/Jo



                                                                -cc
                                                                         Cx’Bo+ &ME;To)de,

can be used to define nonlinear least squares estimators for censored data (or for
truncated data using (3.40)) in a fully parametric model.
   As discussed in Section 2.1 above, the parameters of interest &, for the censored
regression model (3.34) will not in general be identified if the error terms are assumed
only to satisfy a constant     conditional    mean restriction,   because the structural
function is not invertible in the error terms. However, the monotonicity            of the
censoring transformation    in E for fixed x and u implies that the constant conditional
quantile restrictions discussed in Section 2.2 will be useful in identifying and consis-
tently estimating /I,,. For fixed censoring (at zero), Powell (1984) proposed a least
absolute deviations estimator for &, under the assumption            that the error terms
had conditional median zero; in the notation of model (3.34), this estimator b would
be defined as


      J=argminh              ,t       Iyi-Illill{X$?,Ui}I                                                 (3.41)
               0             I    1




where 0 is the (compact) parameter space. Since the conditional     median of y given
x and u depends on the censoring value u for all observations (even if y is uncensored),
the estimator is not directly applicable to random censoring models. Demonstration
2502                                                                                      /.I_.. Powell


of the root-iV-consistency      and asymptotic       normality   of this estimator      follows the
steps outlined in Section 2.3. The asymptotic          covariance   matrix   of fi(fi     - flO) for
this model will be H; ‘V&Z; ‘, with

       H, = 2E[f(O\x)    1(x’& < u}xx’]        and     V, = E[~{x’~~ < u}xx’].

f(Olx) is the conditional        density of the error term E at its median, zero.
    This approach        was extended to the model with a general constant                 quantile
 restriction by Powell (1986a), which derived analogous conditions for consistency
 and asymptotic normality. Under the stronger restriction that the error terms are
 independent     of the regressors, this paper showed how more efficient estimators of
 the slope coefficients in /I,, could be obtained by combining            coefficients estimated
 at different quantiles, and how the assumption of independent            errors could be tested
 by testing convergence         of the differences in quantile slope estimators to zero, as
 proposed by Koenker and Bassett (1982) for the linear model. Nawata (1990)
 proposed a two-step estimator for b,, which calculates a nonparametric                  estimator
 of the conditional      median of y given x, in the first step, by grouping the regressors
 into cells and computing          the within-cell medians of the dependent         variable. The
 second step treats these cell medians jjj and the corresponding             cell averages of the
 regressors Ij as raw data in a Gaussian version of the likelihood function (3.35) and
 weights these quasi-observations          by the cell frequencies (which would be optimal if
 the conditional     density of the errors at the median were constant). Nawata gives
 conditions    for the consistency       of this estimator, and shows how its asymptotic
 distribution   approaches the distribution        of the censored least absolute deviations
estimator (defined in (3.41)) as the regressor cells become small. And, as mentioned
 in Section 3.2, Newey and Powell (1990) showed that an efficient estimator of PO,
 under a quantile restriction on the errors, is a weighted quantile estimator with
 weights proportional        tof(O(x), the conditional     density of the errors at their condi-
 tional quantile, and proposed a feasible one-step version of this estimator which is
 asymptotically     efficient.
    When the censoring value u is observed only for censored observations,                   with u
independently      distributed from (y, x), Ying et al. (1991) propose a quantile estimator
for ,!& under the restriction Pr{s d 01x) = n~(0, 1) using the implied relation

       Pr{y > x’fl,Jx} = Pr{x’&       < u   and      E > 01x)

                        = Pr{x’P,     < ulx} Pr{s > 01x)

                        = H(x’B,)(f    - xx                                                    (3.42)

where H(c) = Pr{u > c} is the survivor function of the random variable u. The
unknown function H(.) can be consistently estimated using the Kaplan and Meier
(1958) product-limit  estimator for the distribution function for censored data. The
resulting consistent estimator H(.) uses only the dependent variables (y,} and the
Ch. 41: Estimation     of‘Semiparametric        Models                                                    2503



censoring indicators           (di). Ying et al. (1991) define             a quantile     estimator   [ as a
solution to estimating          equations of the form


      OZb,$            [[E?(x~~)]-‘l{yi>X~~-(l-n)]Xi,                                                   (3.43)
               I 1

based on the conditional      moment restriction  (3.42) and give conditions    for the
root-N-consistency     and asymptotic   normality of this estimator. Since H(x’/?,) =
&x/&J = 1 {x’p O< uO} when the censoring points ui are constant at some value uO
with probability   one, these equations are not well-defined for fixed censoring (say,
at zero) except in the special case Pr{x’& < uO> = 1. A modification     of the sample
moment conditions defined in (3.43),


      0 ~ ~ ,~ [l{ri          > XIP}       -   [~(XlB)](l    -   71)]Xi,
               I   1



would allow a constant censoring value, and when n = i would reduce to the
subgradient condition for the minimization       problem (3.41) in this case. Unfortunately,
this condition may have a continuum          of inconsistent    roots, if B can be chosen so
that x$ > ui for all observations. It is not immediately clear whether an antiderivative
of the right-hand    side of (3.44) would yield a minimand           which could be used to
consistently estimate PO under random censoring, as it does (yielding (3.41) for z = i)
for fixed censoring.
   Because the conditional     median (and other quantiles) of the dependent variable
y depend explicitly on the error distribution       when the dependent variable is trun-
cated, quantile restrictions are not helpful in identifying p,, for truncated samples.
With a stronger restriction of conditional       symmetry of the errors about a constant
(zero), the “symmetric trimming”       idea mentioned        in Section 2.3 can be used to
construct consistent estimators for both censored and truncated samples. Powell
(1986b) proposed a symmetrically         truncated    least squares estimator of PO for a
truncated sample. The estimator exploited the moment condition

 E[l{y>2x’~,-u}(y-x’~o)~x,~<u]=E[1~E>X’~o-u}F(X,E<U-x’~O]=O
                                                                                                        (3.45)

which holds for the truncated model under conditional                          symmetry      given x and u.
The resulting estimator is defined to minimize


                                                                                                        (3.46)


which yields a sample analogue                      to (3.45) as an approximate    first-order    condition.
2504                                                                                J.L.   Powell


Similarly, a symmetrically  censored least squares estimator for the censored regres-
sion model (3.34) will solve a sample moment condition based upon the condition

       E[maxjy,2x’B,       - u$ - x’pOlx] = E[ max(min(i-:, u - x’po), x’BO ~ U} 1x1 = 0.
                                                                                      (3.47)


The root-JV-consistency and asymptotic normality of these estimators were established
by Powell (1986b). In addition to conditional   symmetry and a full-rank condition
on the matrix V, = E[ 1{x’fio < u}xx’], a unimodality  condition on the error distri-
bution was imposed in the truncated case. A variant on the symmetric trimming
approach   was proposed by M. Lee (1993a, b) which, for a fixed scalar w > 0,
constructed estimators for truncated and censored samples based on the moment
conditions



                                                                                           (3.48)

and

       ~C1~~-x’80~w}min(/~-x’ll,I,w}sgn{y-x’Bo}Ixl
          =E[l{u-x’~o>w}min{Isl,w}sgn{~}Ix]=O,                                             (3.49)

respectively. Newey (1989a) derives the semiparametric efficiency bounds for estimation
of f10 under conditional symmetry with censored and truncated samples, noting that
the symmetrically      truncated least squares estimator attains that efficiency bound in
the special case where the unknown          error distribution   is, in fact, Gaussian (the
analogous result does not hold, though, for the symmetrically censored estimator).
   As described at the end of Section 2.2, conditional       mode restrictions can be used
to identify PO for truncated      data, and an estimator proposed by M. Lee (1992)
exploits this restriction. This estimator solves a sample analogue to the characteriza-
tion of /I0 as the solution to the minimization     problem

       B0 = argmin     Pr{ Iy - minju,   + 0, x;h})   >   w},




as long as the modal interval of length 201 for the untruncated      error distribution     is
assumed to be centered at zero. M. Lee (1992) showed the N”3-consistency              of this
estimator and considered its robustness properties.
   Most of the literature on semiparametric     estimation for censored and truncated
regression in both statistics and econometrics      has been based upon independence
restrictions. Early estimators of /I0 for random censoring models which relaxed the
assumed parametric form of the error distribution        (but maintained   independence
2506                                                                                  J.L.Powell


   Pairwise difference estimators for the censored and truncated regression models
have also been constructed     by Honor& and Powell (1991). For model (3.34) with
fixed censoring, and using the notation of Section 2.4, these estimators were based
upon the transformation

       eij(0) = e(z,, zj, fl) = min{y, - Xi/I,   Ui - Xi/?),                              (3.54)

which satisfies

       eij(Bo) = min(min{e,,     ui - xi&}, Ui - xi/&} = min{ei, ui - X$e, Ui - x)be},

so that eij(Q,) and eji(Qo) are clearly independently       and identically distributed given
xi and xi. Again choosing /(xi, xj, 0) = xi - xj, the pairwise difference estimator for
the censored regression model was given as a solution to the sample moment
condition (2.39) of Section 2.4 above. These estimating equations were shown to
have a unique solution, since they correspond to first-order conditions for a convex
minimization     problem. Honor& and Powell (1991) also considered estimation of the
truncated regression model, in which yi and xi are observed only if yi is positive;
that is, ify, = xi/&, + vi, where ui has the conditional distribution ofei given si > - x&,
then 6p(Ui 1xi) = di”(q 1Xi, q > - xi&). Again assuming the untruncated            errors si are
i.i.d. and independent      of the regressors xi, a pairwise difference estimator of &, was
defined using the transformation

       e(zi, Zj, p) E (Yi - Xib) l(Yi - Xi/? > - Xip) l(Yj - X;fi > - X:/3).              (3.55)

When evaluated       at the true value /IO, the difference

       eij(fio) - eji(fio) = (Vi- Uj) l(Ui > - X;p)l(Oj > - Xifl)                         (3.56)

is symmetrically   distributed around zero given xi and xj. As for the censored case,
the estimator B for this model was defined using &xi, xj, 0) = (xi - xj) and (2.39)
through (2.40) above. When the function c(d) = sgn(d), the solution to (2.39) for this
model was proposed by Bhattacharya          et al. (1983) as an estimator of /?,, for this
model under the assumption        that xi is a scalar. The general theory derived for
minimizers of mth-order U-statistics (discussed in Section 1.3) was applied to show
root-N-consistency      and to obtain the large-sample     distributions of the pairwise
difference estimators for the censored and truncated regression models.


3.4.    Selection models

Rewriting    the censored      selection   model of (1.21) and (1.22) as

       d = 1(x’@, + v > 0},
                                                                                          (3.57)
       Y = dCx;Bo + ~1
Ch. 41:    Estimation    of Semiparametric       Models                                                              2507



(for y, E d, y, E y, /IA = 6,, and & E /IO), a fully parametric model would specify the
functional form of the joint density f(s, q; tO) of the error terms. Then the maximiza-
tion of the average log-likelihood   function



                                                   -x;{s
                                                   m
                                                   cc m
                                                                    f(_Yi- X;ip, q; 5)dq
                                                                                                 1
                                +(l     -d,)ln
                                                  [s s    -m        -x;,a
                                                                            .I-(&,rl; r) dq ds
                                                                                                 11                 (3.58)


over fi, 6, and r in the parameter space. An alternative estimation method, proposed
by Heckman (1976), can be based upon the conditional        mean of y given x and with
d= 1:


                                                                                                 1
                                                  00       m                                     -1

          E[ylx,d       = l] =x;&        +                            0,       rl; r,,) drl ds
                                             [S -a, s -xi60



                                                 -x;ao 1
                                         m       00
                                X                         E f(.s,    q; q-,)    dq ds      = x;/?~ + 1(x;&,; rO).   (3.59)
                                      [S -00 s

When the “selection correction function” A(x;~;z) is linear in the distributional
parameters r (as is the case for bivariate Gaussian densities), a two-step estimator
of &, can be constructed         using linear least squares, after inserting a consistent
first-step estimator $ of 6, (using the indicator d and regressors x1 in the binary
log-likelihood   of (3.2)) into the selection correction function. Alternatively,        a non-
linear least squares estimator of the parameters            can be constructed     using (3.59),
which is also applicable for truncated data (i.e. for y and x being observed conditional
 on d = 1).
    To date, semiparametric        modelling of the selection model (3.57) has imposed
independence     or index restrictions       on the error terms (&,I]). Chamberlain     (1986a)
derived the semiparametric         efficiency bound for estimation      of /IO and 6, in (3.57)
when the errors are independent          of the regressors with unknown error density. The
form of the efficiency bound is a simple modification            of the parametric efficiency
bound for this problem when the error density is known, with the regression vectors
x1 and x2 being replaced by their deviations from their conditional               means, given
the selection index, x1 - E[x, 1xi S,] and x2 - E[x, 1x;d,], except for terms which
involve the index ~~6,. Chamberlain            notes that, in general, nonsingularity     of the
semiparametric     information      matrix will require an exclusion restriction on x2 (i.e.
some component       of x1 with nonzero coefficient in 6,, is excluded from x,), as well
as a normalization      restriction     on 6,. The efficiency bound, which was derived
imposing independence of the errors and regressors, apparently holds more generally
when the joint distribution      of the errors in (3.57), given the regressors, depends only
upon the index xi&, appearing in the selection equation.
2508                                                                               J.L. Powell


   Under this index restriction, the conditional     mean of y given d = 1 and x will
have the same form as in (3.59), but with a selection correction function of unknown
form. More generally, conditional    on d = 1, the dependent variable y has the linear
representation y = x’&, + E, where E satisfies the distributional  index restriction

       dP(s(d=   l,x)=Z’(sId=    1,~~6,)       as.,                                    (3.60)

so that other estimation methods for distributional        index restrictions (discussed in
Section 2.5) are applicable here. So far, though,         the econometric     literature has
exploited only the weaker mean index restriction

       E(sld = 1,x) = E(cJd = 1,x’,&).                                                 (3.61)

   A semiparametric      analogue of Heckman’s two-step estimator was constructed by
Cosslett (1991), assuming independence      of the errors and regressors. In the first step
of this approach, a consistent estimator of the selectivity parameter 6, is obtained
using Cosslett’s (1983) NPMLE for the binary response model, described in Section
3.1 above. In this first step, the concomitant      estimator F(.) of the marginal c.d.f.
of the selection error ‘1is a step function, constant on a finite number J of intervals
{~-(~j-,,~j),j=     l,..., J> with cc, = - cc and cJ = co. The second-step estimator of
PO approximates      the selection correction    function A(.) by a piecewise-constant
function on those intervals. That is, writing


       y = x;&) + i Aj 1 {QOEllj}      + t?,                                           (3.62)
                  j=l

the estimator B is constructed from a linear least squares regression of y on x2 and
the J indicator variables {l(x;z~T~}}.        Cosslett (1991) showed consistency       of the
resulting estimator, using the fact that the number of intervals, J, increases slowly
to infinity as the sample size increases so that the piecewise linear function could
approximate     the true selection function A(.) to an arbitrary degree. An important
identifying assumption was the requirement that some component of the regression
vector xi for the selection equation was excluded from the regressors x2 in the
equation for y, as discussed by Chamberlain         (1986a).
    Although independence       of the errors and regressors was imposed by Cosslett
(1991), this was primarily used to ensure consistency of the NPML estimator of the
selection coefficient vector 6,. The same approach to approximation         of the selection
correction function will work under an index restriction on the errors, provided the
first-step estimator of 6, only requires this index restriction. In a parametric context,
L. Lee (1982) proposed estimation         of /I0 using a flexible parametrization     of the
selection correction function A(.) in (3.59). For the semiparametric         model Newey
(1988) proposed a similar two-step estimator, which in the second step used a series
Ch. 41: Estimation   of Semiparametric       Models                                                                      2509



approximation        to the selection correction                      function             to obtain the approximate   model


      Y ZE x;PO+     ,$,    AjPj(x;61J)       +    e9                                                                  (3.63)


which was estimated (substituting       a preliminary estimator Jfor 6,) by least squares
to obtain an estimator of Do. Here the functions {pj(.)} were a series of functions
whose linear combination       could be used to approximate       (in a mean-squared-error
sense) the function A(.) arbitrarily      well as J --f co. Newey (1988) gave conditions
(including a particula_ rate of growth of the number J of series components)            under
which the estimator p of &, was root-IV-consistent         and asymptotically   normal, and
also discussed how efficient estimators of the parameters could be constructed.
   As discussed in Section 2.5, weighted versions of the pairwise-difference          estima-
tion approach can be used under the index restriction of (3.61). Assuming a pre-
liminary, root-N-consistent      estimator s^ of 6, is available, Powell (1987) considers
a pairwise-difference    estimator of the form (2.55) when t(d) = d, eij(B) = yi - x&/3
and I(x,, xj, 0) = xi2 - xjz, yielding the explicit estimator


      PC C WN((Xil - Xjl)l&(Xi, -
           [
                                                        Xjz)(Xi,              -   Xj2)'

                                                                                            1-’
                                                                                             1’
               icj




                 I
            x iTj wN((xil        -   xjl)18J(xi2          -        xj*)(Yi2        -      Yj2)                         (3.64)



Conditions were given in Powell (1987) on thedata generating process, the weighting
functions w,(.), and the preliminary estimator 6 which ensured the root-IV-consistency
and asymptotic normality of p. The dependence of this asymptotic distribution              on
the large-sample     behavior of s^ was explicitly derived, along with a consistent
estimator of the asymptotic covariance matrix. The approach was also extended to
permit endogeneity       of some components     of xi2 using an instrumental       variables
version of the estimator. L. Lee (1991) considers system identification        of semipara-
metric selection models with endogenous regressors and proposes efficient estimators
of the unknown parameters under an independence           assumption      on the errors.
   When the errors in (3.57) are assumed independent            of the regressors, and the
support of the selection error q is the entire real line, the assumption        of a known
parametric form ~~6, of the regression function in the selection equation can be
relaxed. In this case, the dependent variable y given d = 1 has the linear representation
yi = x$‘,, + ci, where the error term E satisfies the distributional    index restriction


      Y(EId = 1,x) = 2(&/d = l,p(x,))                              a.s.,                                               (3.65)

where now the single index p(xl) is the “propensity                                          score” (Rosenbaum    and Rubin
2510                                                                                 J.L. Powell


(1983)), defined   as

                                                                                         (3.66)


Given a nonparametric         estimator @(xi) of the conditional mean p(xi) of the selection
indicator, it is straightforward       to modify the estimation methods above to accommo-
date this new index restriction, by replacing the estimated linear index x;J by the
nonparametric      index @(xi) throughout.        Choi (1990) proposed a series estimator of
/3,, based on (3.63) with this substitution,       while Ahn and Powell (1993) modified the
weighted pairwise-difference          estimator in (3.64) along these lines. Both papers used
a nonparametric       kernel estimator to construct @(xi), and both gave conditions on
the model, the first-step nonparametric           estimator and the degree of smoothing in
the second step which guaranteed root-N-consistency             and asymptotic normality of
the resulting estimators of &. The influence functions for these estimators depend
upon the conditional        variability of the errors E and the deviations of the selection
indicator from its conditional          mean, d - p(xi). Newey and Powell (1993) calculate
the semiparametric       efficiency bounds for &, under the distributional       index restric-
tion (3.65) and its mean index analogue, while Newey and Powell (1991) discuss
construction     of semiparametric         M-estimators    which will attain these efficiency
bounds.
     For the truncated selection model (sampling from (3.57) conditional             on d = l),
 identification   and estimation        of the unknown parameters      is much more difficult.
 Ichimura and Lee (1991) consider a semiparametric               version of a nonlinear   least
 squares estimator using the form of the truncated conditional             mean function


       ECylx,d = 11 =x;&      + 2(x;&)                                                   (3.67)

from (3.59) with A(.) unknown, following the definition of Ichimura’s (1992) estimator
in (3.33) above. Besides giving conditions for identification          of the parameters and
 root-N-consistency        of their estimators, Ichimura and Lee (1991) consider a genera-
lization of this model in which the nonparametric          component depends upon several
linear indices. If the linear index restriction (3.61) is replaced by the nonparametric
index restriction (3.65), identification       and consistent estimation of &, requires the
functional     independence       of xi and x2, in which case the estimator proposed by
Robinson (1988), discussed in Section 2.5 above, will be applicable. Chamberlain
(1992) derives the efficiency bound for estimation of the parameters of the truncated
regression model under the index restriction (3.65).
   Just as eliminating        the information   provided by the selection variable d makes
identification    and estimation of fi,, harder, a strengthening    of the information   in the
selection variable makes estimation easier, and permits identification             using other
semiparametric       restrictions on the errors. Honore et al. (1992) consider a model in
which the binary selection variable d is replaced by a censored dependent variable
Ch. 41: Estimation of Semiparametric Models                                          2511


y,, so that the model becomes


                                                                                   (3.68)
       Yz = l{Y, >O)cx;Po     +&I.

This model is called the “Type 3 Tobit” model by Amemiya (1985). Assuming
conditional symmetry of the errors (E,‘I) about zero given x (as defined in Section
2.3), the authors note that 6, can be consistently estimated using the quantile or
symmetric trimming estimators for censored regression models discussed in Section
3.3, and, furthermore, by symmetrically trimming the dependent variable y, using
the trimming function

       ~(Yl,Y2,Xl,XZ,4B)-      p=Yl<2x;~}(Y,-x;B),                                 (3.69)

the function h(.) satisfies the conditional moment restriction

       ~C~(Y,,Y,,X,,X,,~,,B~)lXl       =~Cl{-x;&l<?    --;&J4x1      =o            (3.70)

because of the joint conditional symmetry of the errors. By constructing a sample
analogue of (3.70) (possibly_based on other odd functions of y, - xi/?) and inserting
the preliminary estimator 6, Honor+ et al. (1992) show the resulting estimator fl to
be root-N-consistent and asymptotically normal under relatively weak conditions
on the model. Thus, with the additional information on the latent variable ~~6, + r]
provided by the censored variable y,, it is possible to consistently estimate /3,,
without obtaining explicit nonparametric estimators of infinite-dimensional nuisance
functions.


3.5.    Nonlinear panel data models

For panel data versions of the latent variable models considered above, with

       Ys = t(rl+ q%l + Es,54,         s= l,...,T,                                 (3.71)

derivation of log-likelihood functions like the ones above is straightforward if the
individual-specific intercept q is assumed independent of x (or its dependence is
parametrically specified) with a distribution of known parametric form. The condi-
tional density of y E (y 1,. . . , yT) given x for each individual can be obtained from
the joint density of the convolution u = (q + Er,. . . , q + +), which, for special (e.g.
Gaussian) choices of error distribution is of simple form. Maximum likelihood
estimators of POfor these nonlinear “random effect” models have the usual optimality
properties, but their consistency depends on proper specification of both the error
2512                                                                                    J.L. Powell


terms&-(sr,...,        sT) and the random effect r]. When the individual-specific        intercepts
are treated as unknown parameters (“fixed effects”), the corresponding            log-likelihoods
for the parameters PO and the vector of intercept terms (r],, . . . , ?i,. . . , I]~) are even
simpler to derive, being of the same general forms as given above when the errors
E, are assumed to be i.i.d. across individuals and time. However, because the vector
of unknown       intercept terms increases with the sample size, maximum likelihood
estimators of these fixed effects will be inconsistent unless the number of time periods
T also increases to infinity; moreover, the inconsistency         of the fixed effect estimators
leads to inconsistency         of the estimators    of the parameters      of interest, a,, as a
consequence of the notorious “incidental parameters” problem (Neyman and Scott
(1948)).
    For some special parametric discrete response models, consistent estimators of
&, with fixed effects can be obtained by maximizing                a “conditional      likelihood”
function, which conditions on a fixed sum of the discrete dependent variable across
time for each individual. In the special case T = 2, this is the same as maximizing
the conditional      likelihood given that y, # y, and that the estimation method is the
analogue to estimation using pairwise differences (over time) for linear panel data
models. Models for which a version of pairwise differencing can be used to eliminate
the fixed effect in panel data include the binary logit model (Andersen (1970)), the
Poisson regression model (Hausman               et al. (1984)) and certain duration          models
(Chamberlain      (1984)); however, these results require a particular (exponential) struc-
ture to the likelihood which does not hold in general.
    For the binary, censored, and truncated            regression models with fixed effects,
estimators have been proposed under the assumption               that the time-specific errors
{E,} are identically distributed across time periods s given the regressors x. Manski
(1987) shows that, with T = 2 time periods, the conditional               median of the differ-
ence y, - y, of the binary variables y, = 1{x& + E, > 0}, given that y, # y,, is
 l{ (x2 - x,)‘fiO > 0}, so that a consistent estimator for /3,, will be



       li=argmin$,$         1{Yi2#Yil}l(Yi2-Yil)-1((x~-X~)I~~>O}I,                          (3.72)
               0      I 1


which will be consistent under conditions       on (xi2 - Xii), etc., similar to those for
consistency of the maximum score estimator. Honore (1992) considered pairwise-
difference estimators for censored and truncated regression models with fixed effects
using the approach described in Section 3.3. Specifically, using the transformations
given in (3.54) and (3.55) for the censored and truncated cases, respectively, estimators
of the parameter vector /?,, in both cases were defined as solutions to minimization
problems which generate a first-order condition of the form


       0% f SCe(ziZ,Zi~,B)-e(zil,zi,,B)l(xi2-xil).                                          (3.73)
          i=l
Ch. 41: Estimation     ~~Semiparametric       Models                                                                        2513



As discussed at the end of Section 2.4, the expectation of the right-hand side of (3.73)
will be zero when evaluated at /IO, even in the presence of a fixed effect. As for
Manski’s binary panel data estimator, this estimation approach can be generalized
to allow for more than T = 2 time periods.



4.     Summary and conclusions

As the previous section indicates, the theoretical    analysis of the properties    of
estimators under various semiparametric  restrictions is quite extensive, at least for
the latent variable models considered above. The following table gives a general
summary of the state of the econometric  literature on estimation    of several semi-
parametric models.


                            Mean           Median              Mode         Index          Symmetry          Independence

Linear                           3                3                          Of                 3                       3
Transformed                      3                3                          o+                 3                       3
Censored                         0                3                          o+                 3                       3
Truncated                        0                0                          0                  3                       3
Binary                           0                1                          3                  1                       3
Monotone                         0                1                          2                  1                       2
Semilinear                       3                2                          3                  2                       3
Selection                        0                ?                          3                  2                       3
Binary panel                     0                ?             1
                                                                             ?                  ?                       1
Censored panel                   0                ?             1            ?                  ?                       2

     Key:   0 ~ Not identified   (0+ ~ Identified       only up to scale); 1        Parameter   identified/consistent       esti-
mator; 2 ~ @-consistent,         asymptotically       normal   estimator;   3 - Efficient estimator.

Of course, this table should be viewed with caution, as some of its entries are
ambiguous (for instance, the entry under “symmetry” for the “selection” row refers
to the “Type 3 Tobit” model with a censored regression model as the selection
equation, while the other columns presume a binary selection equation). Nevertheless,
the table should be suggestive of areas where more research is needed.
   The literature on the empirical application   of semiparametric      methods (apart
from estimation of invertible models under conditional      mean restrictions) is much
less extensive. When applied to relatively small data sets (roughly 100 observations
per parameter), the potential bias from misspecification     of the parametric    model
has proven to be less important     than the additional    imprecision    induced when
parametric restrictions are relaxed. For example, Horowitz and Neumann            (1987)
and McFadden and Han (1987) estimate the parameters of an employment duration
data set imposing independence    and quantile restrictions, but for these data even
maximum likelihood estimates are imprecise (in terms of their asymptotic standard
errors). A similar outcome was obtained by Newey et al. (1990), which reanalyzed
data on married women’s labor supply originally studied (in a parametric context)
2514                                                                                               J.L. Powell


by Mroz (1987). For these data, estimates based upon semiparametric              restrictions
were fairly comparable     to their parametric   counterparts,    with differences in the
estimates having large standard errors. On the other hand, for larger data sets (with
relatively few parameters), the bias due to distributional      misspecification      is more
likely to be evident. Chamberlain      (1990) and Buchinski (1991b) apply quantile
methods to estimate the returns to education for a large, right-censored             data set,
and find these estimates to be quite precise. Other empirical papers which use
semiparametric    methods, with mixed success, include those by Deaton and Irish
(1984), Newey (1987), Das (1991), Horowitz (1993), Bult (1992a, b), Horowitz and
Markatou (1993), Deaton and Ng (1993) and Melenberg and van Soest (1993).
   Besides the possible imprecision due to weakening of semiparametric          restrictions,
an obstacle to routine use of some of the estimators described in Section 3 is their
dependence upon a choice of type and degree of “smoothing” imposed for estimators
which depend explicitly upon nonparametric         components     of the model. Though
this question has been widely studied in the literature on nonparametrics,        the results
are different when the nonparametric      component     is a nuisance parameter. Some
early results on the proper degree of smoothing are available for some special cases
of estimators for censored regression (Hall and Horowitz (1990)) or upon index
restrictions (Hall and Marron (1987), Powell and Stoker (1991), HGdle et al. (1992)),
but more theoretical results are needed to narrow the choice of possible estimators
which depend upon nonparametrically-estimated          components.



References

Ahn, H. and C.F. Manski (1993) “Distribution           Theory for the Analysis of Binary Choice Under
   Uncertainty with Nonparametric    Estimation ofExpectations”,       JournalofEconometrics, forthcoming.
Ahn, H. and J.L. Powell (1993) “Semiparametric           Estimation   of Censored Selection Models with a
   Nonparametric    Selection Mechanism”, Journal of Econometrics, forthcoming.
Amemiya, T. (1974) “The Nonlinear Two-Stage Least-Squares             Estimator”, Journal ofEconometrics, 2,
   105-l 10.
Amemiya, T. (1977) “The Maximum Likelihood and Nonlinear Three-Stage                  Least Squares Estimator
  in the General Nonlinear Simultaneous       Equations Model”, Econometrica, 45, 955-968.
Amemiya, T. (1982) “Two Stage Least Absolute Deviations Estimators”,             Econometrica, 50,689-711.
Amemiya, T. (1985) Advanced Econometrics. Cambridge, Mass: Harvard University Press.
Amemiya, T. and J.L. Powell (1981) “A Comparison          of the Box-Cox Maximum Likelihood Estimator
  and the Non-Linear     Two-Stage Least Squares Estimator”, Journal ofEconometrics, 17, 3512381.
Andersen, E.B. (1970) “Asymptotic Properties of Conditional Maximum Likelihood Estimators”, Journal
  ofthe Royal Statistical Society, Series B, 32,283-301.
Andrews, D.W.K. (1987) “Consistency      in Nonlinear Econometric        Models, A Generic Uniform Law of
  Large Numbers”, Econometrica, 55, 1465-1471.
Andrews, D.W.K. (1990a) “Asymptotics        for Semiparametric      Econometric     Models, I. Estimation   and
  Testing”, Cowles Foundation,    Yale University, Discussion Paper No. 908R.
Andrews, D.W.K. (1990b) “Asymptotics       for Semiparametric      Econometric     Models, II. Stochastic Equi-
  continuity and Nonparametric     Kernel Estimation”, Cowles Foundation,          Yale University, Discussion
  Paper No. 909R.
Andrews, D.W.K. (1991) “Asymptotic       Normality     of Series Estimators     for Nonparametric     and Semi-
  parametric   Regression Models”, Econometrica, 59, 307-345.
Ch. 41: Estimation     I$ Semiparametric     Models                                                                 2515


Arabmazar,      A. and P. Schmidt (1981) “Further Evidence on the Robustness of the Tobit Estimator to
   Heteroscedasticity”,    Journal ofEconometrics,       17,2533258.
Arabmazar,      A. and P. Schmidt (1982) “An Investigation          of the Robustness of the Tobit Estimator to
   Non-Normality”,       Econometrica, 50, 1055-1063.
Bassett, G.S. and R. Koenker (1978) “Asymptotic Theory of Least Absolute Error Regression”, Journal
   ofthe American Statistical Association, 73, 667-677.
Begun, J., W. Hall. W. Huang and J. Wellner (1983) “Information and Asymptotic Efficiency in Parametric-
   Nonparametric       Models”, Annals ofStatistics,     11, 432-452.
Bhattacharya,      P.K., H. Chernoff and S.S. Yang (1983) “Nonparametric                 Estimation    of the Slope of a
   Truncated Regression”, Annals of Statistics, 11, 505-514.
Bickel, P.J. (1982) “On Adaptive Estimation”, Anna/s ofStotistics,              10, 6477671.
Bickel, P.J. and K.A. Doksum (1981) “An Analysis of Transformations                         Revisited”, Journal of the
   American Statistical Association, 76, 29663 1 1.
Bickel, P.J., C.A.J. Klaasen, Y. Ritov and J.A. Wellner (1993) Ejicient and Adaptive Inference in Semipara-
   metric Models. Washington:       Johns Hopkins University Press, forthcoming.
Bierens, H.J. (1987) “Kernel Estimators           of Regression Functions”,        in: T.F. Bewley, ed., Aduances in
   Econometrics, Ft$h World Congress. vol. 1,Cambridge: Cambridge University Press.
Bloomfield, P. and W.L. Steiger (1983) Least Absolute Deviations: Theory, Applications, and Algorithms.
   Boston: Birkhauser.
Box, G.E.P. and D.R. Cox (1964) “An Analysis of Transformations”,                     Journal of the Royal Statistical
   Society, Series B, 26, 21 l-252.
Brillinger, D.R. (1983)“A Generalized Linear Model with 'Gaussian'Regressor Variables”, in: P.J. Bickel,
   K.A. Doksum and J.L. Hodges, eds., A Festschrifttfor Erich L. Lehmann. Belmont, CA: Woodsworth
   International    Group.
Buchinsky, M. (1991a) “A Monte Carlo Study of the Asymptotic Covariance                        Estimators for Quantile
   Regression Coefficients”, manuscript,        Harvard University, January.
Buchinsky, M. (1991b) “Changes in the U.S. Wage Structure                     1963-1987: Applications        of Quantile
   Regression”, manuscript,      University of Chicago.
Buchinsky, M. (1993) “How Did Women’s ‘Return to Education’ Evolve in the U.S.? Exploration                             by
   Quantile Regression Analysis with Nonparametric            Correction for Sample Selection Bias”, manuscript,
   Yale University.
Buckley, J. and I. James (1979) “Linear Regression with Censored Data”, Biometrika, 66,4299436.
Bult, J.R. (1992a) “Target Selection for Direct Marketing: Semiparametric                  versus Parametric     Discrete
   Choice Models”, Faculty of Economics, University of Groningen,                 Research Memorandum           No. 468.
Bult, J.R. (1992b) “Semiparametric        versus Parametric     Classification    Models: An Application        to Direct
   Marketing”, manuscript,      University of Groningen.
Burguete, J., R. Gallant and G. Souza (1982) “On Unification of the Asymptotic Theory of Nonlinear
  Econometric       Models”, Econometric Reviews, 1, 151-190.
Carroll, R.J. (1982) “Adapting for Heteroskedasticity          in Linear Models”, Annals ofstatistics,         10, 1224-
   1233.
Carroll, R.J. and D. Ruppert (1982) “Robust Estimation in Heteroskedastic                   Linear Models”, Annals of
  Statistics, 10, 4299443.
Carroll, R.J. and D. Ruppert (1984) “Power Transformations             When Fitting Theoretical Models to Data”,
  Journal of the American Statistical Association, 79, 321-328.
Cavanagh, C. and R. Sherman (1991) “Rank Estimators for Monotonic Regression Models”, manuscript,
   Bellcore.
Chamberlain, G. (1984) “Panel Data”, in: 2. Griliches and M. Intriligator, eds., Handbook ofEconometrics,
  Vol. 2. Amsterdam: North-Holland.
Chamberlain,     G. (1986a) “Asymptotic      Efficiency in Semiparametric        Models with Censoring”, Journal of
  Econometrics, 32, 189-218.
Chamberlain,     G. (1986b) “Notes on Semiparametric        Regression”, manuscript, Department of Economics,
  University of Wisconsin-Madison.
Chamberlain,     G. (1987) “Asymptotic      Efficiency in Estimation with Conditional           Moment Restrictions”,
  Journal of Econometrics, 34, 305-334.
Chamberlain,     G. (1990) “Quantile      Regression, Censoring, and the Structure of Wages”, manuscript,
  Harvard University.
Chamberlain,     G. (1992) “Efficiency Bounds for Semiparametric            Regression”, Econometrica, 567-596.
2516                                                                                                       J.L. Powell


Choi, K. (1990) “The Semiparametric       Estimation of the Sample Selection Model Using Series Expansion
   and the Propensity Score”, manuscript,         University of Chicago.
Chung, C.-F. and A.S. Goldberger         (1984) “Proportional       Projections    in Limited Dependent        Variable
   Models”, Econometrica, 52, 531-534.                  _
Cosslett. S.R. (1981) “Maximum       Likelihood Estimation for Choice-Based            Samples”, Econometrica, 49,
   1289-1316. ~       ’
Cosslett, S.R. (1983) “Distribution-Free      Maximum Likelihood Estimator of the Binary Choice Model”,
   Econometrica, 51, 7655782.
Cosslett, S.R. (1987) “Efficiency Bounds for Distribution-Free           Estimators of the Binary Choice and the
   Censored Regression Models”, Economctrica, 55, 559-587.
Cosslett, S.R. (1991) “Distribution-Free      Estimator of a Regression Model with Sample Selectivity”, in:
   W.A. Barnett, J.L. Powell and G. Tauchen, eds., Nonparametric and Semiparametric Methods in
   Econometrics and Statistics. Cambridge: Cambridge University Press.
Cox, D.R. (1972) “Regression Models and Life Tables”, Journal ofthe Royal Statistical Society, Series B,
   34, 187-220.
Cox, D.R. (1975) “Partial Likelihood”, Biometrika, 62, 269-276.
Cragg, J.G. (1983) “More Efficient Estimation in the Presence of Heteroscedasticity               of Unknown Form”,
   Econometrica, 51, 751-764.
Das, S. (1991) “A Semiparametric          Structural    Analysis of the Idling of Cement Kilns”, Journal of
   Econometrics, 50, 235-256.
Deaton, A. and M. Irish (1984) “Statistical          Models for Zero Expenditures           in Household      Budgets”,
   Journal of Public Economics, 23, 59-80.
Deaton, A. and S. Ng (1993) “Parametric          and Non-parametric       Approaches     to Price and Tax Reform”,
   manuscript,   Princeton University.
Delgado, M.A. (1992) “Semiparametric         Generalized Least Squares in the Multivariate           Nonlinear Regres-
   sion Model”, Econometric Theory, 8,203-222.
Dempster, A.P., N.M. Laird and D.B. Rubin (1977) “Maximum                   Likelihood from Incomplete Data via
   the E-M Algorithm”, Journal ofthe Royal Statistical Society, Series B, l-38.
Duncan, G.M. (1986) “A Semiparametric           Censored Regression Estimator”, Journal ofEconometrics, 32,
   5-34.
Elbadawi, I., A.R. Gallant and G. Souza (1983) “An Elasticity Can be Estimated Consistently                    Without
   A Priori Knowledge of its Functional        Form”, Econometrica, 51, 1731-1751.
Engle, R.F., C.W.J. Granger, J. Rice and A. Weiss (1986) “Semiparametric                  Estimates of the Relation
   Between Weather and Electricity Sales”, Journal of the American Statistical Association, 81, 310-
   320.
Ferguson, T.S. (1967) Mathematical Statistics: A Decision Theoretic Approach. New York: Academic
   Press.
Femandez, L. (1986) “Nonparametric        Maximum Likelihood Estimation of Censored Regression Models”,
   Journal of Econometrics, 32, 35-57.
Friedman, J.H. and W. Stuetzle (1981) “Projection Pursuit Regression”, Journal ofthe American Statistical
   Association, 76, 817-823.
Gallant, A.R. (1980) “Explicit Estimators of Parametric          Functions in Nonlinear Regression”, Journal of
   the American Statistical Association, 75, 182-193.
Gallant, A.R. (1981) “On the Bias in Flexible Functional Forms and an Essentially Unbiased Form, The
   Fourier Flexible Form”, Journal ofEconometrics, IS,21 l-245.
Gallant, A.R. (1987) “Identification    and Consistency in Nonparametric           Regression”, in: T.F. Bewley, ed.,
   Advances in Econometrics, Fifth World Congress. Cambridge: Cambridge University Press.
Gallant, A.R. and D.W. Nychka (1987) “Semi-nonparametric              Maximum Likelihood Estimation”, Econo-
   metrica, 55, 363-390.
Goldberger,    A.S. (1983) “Abnormal     Selection Bias”, in: S. Karlin, T. Amemiya and L. Goodman,                 eds.,
   Studies in Econometrics, Time Series, and Multivariate Statistics, New York: Academic Press.
Greene, W.H. (1981) “On the Asymptotic Bias of the Ordinary Least Squares Estimator of the Tobit
   Model”, Econometrica, 49, 5055514.
Greene, W.H. (1983) “Estimation        of Limited Dependent Variable Models by Ordinary                  Least Squares
   and the Method of Moments”, Journal ofEconometrics, 21, 1955212.
Grenander,    U. (1981) Abstract Inference. New York: Wiley.
Hall, P. and J.L. Horowitz (1990) “Bandwidth             Selection in Semiparametric         Estimation    of Censored
   Linear Regression Models”, Econometric Theory, 6, 123-150.
Ch. 41: Estimation    of Semiparametric     Models                                                              2517


Hall, P. and J.S. Marron (1987) “Estimation         of Integrated Squared Density Derivatives”, Statistics and
  Probability Letters, 6, 109% 115.
Han, A.K. (1987a) “Non-Parametric          Analysis of a Generalized Regression Model: The Maximum Rank
  Correlation    Estimator”, Journal of Econometrics,        35, 303-316.
Han, A.K. (1987b) “A Non-Parametric              Analysis of Transformations”,        Jlournal qf Econometrics,    35,
   191-209.
Hansen, L.P. (1982) “Large Sample Properties of Generalized Method of Moment Estimators”, Econo-
  metrica, 50, 1029-1054.
Hlrdle, W. (1991) Applied Nonparametric Regression. Cambridge: Cambridge University Press.
HBrdle, W. and T.M. Stoker (1989) “Investigating              Smooth Multiple Regression by the Method of
   Average Derivatives”, Journal of the American Statistical Association, forthcoming.
Hardle, W., J. Hart, J.S. Marron and A.B. Tsybakov (1992) “Bandwidth Choice for Average Derivative
   Estimation”, Journal of the American Statistical Association, 87, 227-233.
Hausman, J., B.H. Hall and 2. Griliches(1984)“Econometric             Modelsfor Count Data with an Application
   to the Patents-R&D       Relationship”,    Econometrica, 52,909-938.
Heckman, J.J. (1976) “The Common Structure of Statistical Models of Truncation,                   Sample Selection
   and Limited Dependent Variables and a Simple Estimator for Such Models”, Annals of Economic and
   Social Measurement, 5,475-492.
Heckman, J.J. and T.E. MaCurdy (1980) “A Life-Cycle Model of Female Labor Supply”, Review qf
   Economic Studies, 47, 47-74.
Heckman, J.J. and B. Singer (1984) “A Method for Minimizing the Impact of Distributional               Assumptions
   in Econometric    Models for Duration Data”, Econometrica, 52, 271-320.
Heckman, N.E. (1986) “Spline Smoothing in a Partly Linear Model”, Journal of the Royal Statistical
   Society, Series B, 48, 244-248.
Hoeffding, W. (1948) “A Class of Statistics with Asymptotically                 Normal Distribution”,     Annuls of
   Mathematical Statistics, 19, 293-325.
Honor&, B.E. (1986) “Estimation          of Proportional     Hazards Models in the Presence of Unobserved
   Heterogeneity”,    manuscript,    University of Chicago, November.
Honor&, B.E. (1992) “Trimmed LAD and Least Squares Estimation of Truncated and Censored Regres-
   sion Models with Fixed Effects”, Econometrica, 60, 533-565.
Honor&, B.E. and J.L. Powell (1991) “Pairwise Difference Estimators of Linear, Censored, and Truncated
   Regression Models”, manuscript,         Department    of Economics, Princeton University, November.
Honor&, B.E., E. Kyriazidou and C. Udry (1992) “Estimation of Type 3 Tobit Models Using Symmetric
   Trimming and Pairwise Comparisons”,           manuscript, Department of Economics, Northwestern           Univer-
  sity.
Horowitz, J.L. (1986) “A Distribution-Free          Least Squares Estimator for Censored Linear Regression
   Models”, Journal of Econometrics, 32, 59-84.
Horowitz, J.L. (1988a) “Semiparametric        M-Estimation     of Censored Linear Regression Models”, Aduances
   in Econometrics, 7, 45-83.
Horowitz, J.L. (1988b) “The Asymptotic Efficiency of Semiparametric               Estimators for Censored Linear
   Regression Models”, Empirical Economics, 13, 123-140.
Horowitz, J.L. (1992) “A Smoothed            Maximum      Score Estimator      for the Binary Response Model”,
  Econometrica, 60, 505-53 1.
Horowitz, J.L. (1993) “Semiparametric          Estimation of a Work Trip Mode Choice Model”, Journal of
  Econometrics, forthcoming.
Horowitz, J.L. and M. Markatou          (1993) “Semiparametric       Estimation of Regression Models for Panel
  Data”, Department       of Economics, University of Iowa, Working Paper No. 93-14.
Horowitz, J.L. and G. Neumann (1987) “Semiparametric              Estimation of Employment      Duration Models”,
  with discussion, Econometric Reviews, 6, 5-40.
Hsieh, D. and C. Manski (1987) “Monte-Carlo            Evidence on Adaptive Maximum Likelihood Estimation
  of a Regression”, Annals of Statistics, 15, 541-551.
Huber, P.J. (1967) “The Behavior of Maximum Likelihood Estimates Under Nonstandard                     Conditions”,
  Proceedings of the Fifth Berkeley Symposium on Mathematical Statistics and Probability, Berkeley,
  University of California Press, 4, 221-233.
Huber, P.J. (1981) Robust Statistics. New York: Wiley.
Huber, P.J. (1984) “Projection      Pursuit”, with discussion, Annals ofStatistics, 13, 435-525.
Hurd, M. (1979) “Estimation         in Truncated     Samples When There is Heteroskedasticity”,          Journal of
  Econometrics, 11, 247-258.
2518                                                                                                       J.L. Powell


Ichimura, H. (1992) “Semiparametric          Least Squares Estimation         of Single Index Models”, Journal of
   Econometrics, forthcoming.
Ichimura, H. and L.-F. Lee (1991) “Semiparametric           Least Squares Estimation of Multiple Index Models:
   Single Equation Estimation”, in W.A. Barnett, J.L. Powell and G. Tauchen, eds., Nonparametric and
   Semiparametric Methods in Econometrics and Statistics. Cambridge: Cambridge University Press.
Imbens, G.W. (1992) “An Efficient Method of Moments Estimator for Discrete Choice Models with
   Choice-Based     Sampling”, Econometrica, 60, 1187-1214.
Jaeckel, L.A. (1972) “Estimating Regression Coefficients by Minimizing the Dispersion of the Residuals”,
   Annals of Mathematical Sta&ics, 43, 1449-1458.
JureEkovB, J. (1971) “Nonparametric          Estimate of Regression Coefficients”,          Annals of Mathematical
   Statistics, 42, 1328-1338.
Kaplan, E.L. and P. Meier (1958) “Nonparametric              Estimation from Incomplete Data”, Journal of the
   American Statistical Association, 53,457-481.
Kiefer, J. and J. Wolfowitz (1956) “Consistency        of the Maximum Likelihood Estimator in the Presence
   of Infinitely Many Incidental Parameters”,        Annals of Mathematical Statistics, 27, 887-906.
Kim, J. and D. Pollard (1990) “Cube Root Asymptotics”,             Annals ofstatistics, 18, 191-219.
Klein, R.W. and R.H. Spady (1993) “An Efficient Semiparametric             Estimator for Discrete Choice Models”,
   Econometrica, 61, 387-421.
Koenker, R. and G.S. Bassett Jr. (1978) “Regression Quantiles”, Econometrica, 46, 33-50.
Koenker, R. and G.S. Bassett Jr. (1982) “Robust Tests for Heteroscedasticity                   Based on Regression
   Quantiles”, Econometrica, 50, 43-61.
Koul, H., V. Suslara, and J. Van Ryzin (1981) “Regression Analysis with Randomly Right Censored
   Data”, Annals of Statistics, 9, 1276-1288.
Lancaster, T. (1990) The Econometric Analysis of Transition Data. Cambridge:                  Cambridge     University
   Press.
Laplace, P.S. (1793) “Sur Quelques Points du Systems du Monde”, Memoires de I’kademie Royale des
   Sciences de Paris, Annee 1789, l-87.
Lee, L.F. (1982) “Some Approaches         to the Correction     of Selectivity Bias”, Review of Economic Studies,
   49,355-372.
Lee, L.F. (1991) “Semiparametric      Instrumental    Variables Estimation of Simultaneous          Equation Sample
   Selection Models”, manuscript,      Department     of Economics, University of Minnesota.
Lee, L.F. (1992) “Semiparametric      Nonlinear Least-Squares       Estimation of Truncated Regression Models”,
   Econometric Theory, 8, 52-94.
Lee, M.J. (1989) “Mode Regression”, Journal of Econometrics, 42, 337-349.
Lee, M.J. (1992)“Median      Regression for Ordered Discrete Response”, Journal ofEconometrics, 51,59-77.
Lee, M.J. (1993a) “Windsorized       Mean Estimator for Censored Regression Model”, Econometric Theory,
   forthcoming.
Lee, M.J. (1993b) “Quadratic      Mode Regression”, Journal of Econometrics, forthcoming.
Levit, B.Y. (1975) “On the Efficiency of a Class of Nonparametric            Estimates”, Theory of Probability and
   Its Applications, 20, 723-740.
Li, K.C. and N. Duan (1989) “Regression            Analysis Under Link Violation”, Annals of Statistics, 17,
   1009-1052.
Linton, O.B. (1991) “Second Order Approximation            in Semiparametric      Regression Models”, manuscript,
   Nuffield College, Oxford University.
Linton, O.B. (1992) “Second Order Approximation              in a Linear Regression with Heteroskedastkity            of
   Unknown Form”, manuscript,         Nuffield College, Oxford University.
MaCurdy, T.E. (1982) “Using Information          on the Moments of the Disturbance         to Increase the Efficiency
   of Estimation”,   Stanford University, manuscript.
Manski, C.F. (1975) “Maximum Score Estimation of the Stochastic Utility Model of Choice”, Journal of
   Econometrics, 3, 205-228.
Manski, C. (1983) “Closest Empirical Distribution          Estimation”, Econometrica, 51, 305-319.
Manski, C. (1984) “Adaptive Estimation           of Nonlinear     Regression Models”, Econometric Reviews, 3,
   145-194.
Manski, C.F. (1985) “Semiparametric          Analysis of Discrete Response, Asymptotic             Properties   of the
   Maximum Score Estimator”, Journal ofEconometrics, 27, 205-228.
Manski, C.F. (1987) “Semiparametric         Analysis of Random Effects Linear Models from Binary Panel
  Data”, Econometrica, 55, 357-362.
Ch. 41: Estimation qf Semiparametric        Models                                                                2519


Manski, CF. (1988a) “Identification        of Binary Response Models”, Journal of the American Statistical
  Association, 83, 729-138.
Manski, C.F. (1988b) Analog Estimation Methods in Econometrics. New York: Chapman and Hall.
Manski, C.F. and S. Lerman (1977) “The Estimation ofchoice Probabilities from Choice-Based Samples”,
  Econometrica, 45, 1971-1988.
Manski, CF. and D.F. McFadden             (1981) “Alternative       Estimators    and Sample Designs for Discrete
  Choice Analysis”, in: C. Manski and D. McFadden,                 eds., Structural Analysis of Discrete Data with
  Econometric Applications. Cambridge: MIT Press.
Manski, C.F. and T.S. Thompson (1986) “Operational               Characteristics    of Maximum Score Estimation”,
  Journal ofEconometrics,      32, 85-108.
McFadden,     D.F. (1985) “Specification        of Econometric       Models”, Presidential      Address, Fifth World
  Congress of the Econometric        Society.
McFadden, D.F. and A. Han (1987) “Comment on Joel Horowitz and George Neumann ‘Semiparametric
  Estimation of Employment         Duration Models”‘, Econometric Reviews, 6, 257-270.
Melenberg, B. and A. Van Soest (1993) “Semi-parametric                Estimation of the Sample Selection Model”,
  manuscript,   Department      of Econometrics,     Tilburg University.
Meyer, B (1987) “Semiparametric        Estimation of Duration Models”, Ph.D. dissertation,              Department   of
  Economics, MIT.
Moon, C.-G. (1989) “A Monte Carlo Comparison                   of Semiparametric       Tobit Estimators”,    Journal of
  Applied Econometrics, 4, 361-382.
Mroz, T.A. (1987) “The Sensitivity of an Empirical Model of Married Women’s Hours of Work to
  Economic and Statistical Assumptions”,           Econometrica, 55, 765-799.
Nawata, K. (1990) “Robust Estimation             Based on Grouped-Adjusted             Data in Censored Regression
  Models,” Journal of Econometrics, 43, 337-362.
Nawata, K. (1992)“Semiparametric         Estimation of Binary Choice Models Based on Medians of Grouped
  Data”, University of Tokyo, manuscript:
Newey, W.K. (1984) “Nearly Efficient Moment Restriction                    Estimation     of Regression Models with
  Nonnormal      Disturbances”,     Princeton      University,    Econometric       Research    Program    Memo. No,
  315.
Newey, W.K. (1985) “Semiparametric            Estimation of Limited Dependent Variable Models with Endo-
   genous Explanatory     Variables”, Ann&s de I’lnsee, 59/60, 219-236.
Newey, W.K. (1987a) “Efficient Estimation of Models with Conditional Moment Restrictions”, Princeton
   University, manuscript.
Newey, W.K. (1987b) “Interval Moment Estimation of the Truncated Regression Model”, manuscript,
   Department    of Economics, Princeton University, June.
Newey, W.K. (1987~) “Specification Tests for Distributional             Assumptions      in the Tobit Model”, Journal
  of Econometrics, 34, 1255145.
Newey, W.K. (1988a) “Adaptive Estimation of Regression Models Via Moment Restrictions”, Journal
  ofEconometrics,    38, 301-339.
Newey, W.K. (1988b) “Efficient Estimation              of Semiparametric        Models Via Moment Restrictions”,
   Princeton University, manuscript.
Newey, W.K. (1988~) “Two-Step Series Estimation of Sample Selection Models”, Princeton University,
  manuscript.
Newey, W.K. (1989a) “Efficient Estimation of Tobit Models Under Symmetry”, in: W.A. Barnett, J.L.
  Powell and G. Tauchen, eds., Nonparametric and Semiparametric Methods in Econometrics and Statistics.
  Cambridge: Cambridge University Press.
Newey, W.K. (1989b) “Efficiency in Univariate Limited Dependent Variable Models Under Conditional
  Moment Restrictions”, Princeton University, manuscript,
Newey, W.K. (1989~) “Efficient Instrumental              Variables Estimation        of Nonlinear     Models”, mimeo,
  Princeton University.
Newey, W.K. (1989d) “Uniform Convergence               in Probability    and Uniform Stochastic Equicontinuity”,
  mimeo, Department       of Economics, Princeton University.
Newey, W.K. (1990a) “Semiparametric          Efficiency Bounds”, Journal ofApplied Econometrics, 5,99- 135.
Newey, W.K. (1990b) “Efficient Instrumental          Variables Estimation of Nonlinear Models”, Econometrica,
  58,809-837.
Newey, W.K. (1991) “The Asymptotic             Variance of Semiparametric          Estimators”,   Working Paper No.
  583, Department     of Economics, MIT, revised July.
2520                                                                                                      J.L. Powell


Ncwcy, W.K. and J.L. Powell (1990) “Efficient Estimation of Linear and Type I Censored Regression
   Models Under Conditional        Quantile Restrictions”,     Econometric Theory, 6: 295-3 17.
Newey, W.K. and J.L. Powell (1991) “Two-Step Estimation, Optimal Moment Conditions, and Sample
   Selection Models”, manuscript,      Department      of Economics, MIT, October.
Newey, W.K. and J.L. Powell (1993) “Efficiency Bounds for Some Semiparametric                    Selection Models”,
   Journal ofEconometrics, forthcoming.
Newey, W.K. and P. Ruud (1991) “Density Weighted Least Squares Estimation”,                     manuscript,    Depart-
   ment of Economics, MIT.
Newey, W.K. and T. Stoker (1989) “Efficiency Properties of Average Derivative Estimators”, manuscript,
   Sloan School of Management,        MIT.
Newey, W.K. and T.M. Stoker (1993) “Efficiency of Weighted Average Derivative Estimators and Index
   Models”, Econometrica, 61, 1199-1223.
Newey, W.K., J.L. Powell and J.M. Walker (1990) “Semiparametric                  Estimation    of Selection Models:
   Some Empirical Results”, American Economic Review Papers and Proceedings, 80, 324-328.
Neyman, J. and E.L. Scott (1948) “Consistent          Estimates Based on Partially Consistent Cbservations”,
   Econometrica, 16, l-32.
Nolan, D. and D. Pollard (1987) “U-Processes,             Rates of Convergence”,     Annals of Statistics, 15, 780-
      799.
Nolan, D. and D. Pollard (1988) “Functional             Central Limit Theorems for U-Processes”,             Annals of
   Probability, 16, 1291-1298.
Oakes, D. (1981) “Survival Times: Aspects of Partial Likelihood”,             International Statistical Reuiew, 49,
   235-264.
Obenhofer, W. (1982) “The Consistency of Nonlinear Regression Minimizing the Ll Norm”, Annals of
   Statistics, 10, 316-319.
Pakes, A. and D. Pollard (1989) “Simulation and the Asymptotics of Optimization                 Estimators”,    Econo-
   metrica, 57, 1027-1058.
Pollard, D. (1985) “New Ways to Prove Central Limit Theorems”, Econometric Theory, 1, 295-314.
Powell, J.L. (1983) “The Asymptotic Normality            of Two-Stage Least Absolute Deviations Estimators”,
   Econometrica, 51, 1569-1575.
Powell, J.L. (1984) “Least Absolute Deviations Estimation for the Censored Regression Model”, Journal
   of Econometrics, 25, 303-325.
Powell, J.L. (1986a) “Censored Regression Quantiles”, Journal of Econometrics, 32, 143-155.
Powell, J.L. (1986b) “Symmetrically     Trimmed Least Squares Estimation ofTobit Models”, Econometrica,
   54,1435-1460.
Powell, J.L. (1987) “Semiparametric        Estimation of Bivariate Latent Variable Models”, Social Systems
   Research Institute, University of Wisconsin-Madison,            Working Paper No. 8704.
Powell, J.L. (1991) “Estimation ofMonotonic          Regression Models Under Quantile Restrictions”, in: W.A.
   Barnett, J.L. Powell and G. Tauchen, eds., Nonparametric and Semiparametric Methods in Econometrics
   and Statistics, Cambridge: Cambridge University Press.
Powell, J.L. and T.M. Stoker (1991) “Optimal             Bandwidth    Choice for Density-Weighted           Averages”,
   manuscript,    Department   of Economics; Princeton University, December.                _      -
Powell, J.L., J.H. Stock and T.M. Stoker (1989) “Semiparametric                Estimation     of Weighted Average
   Derivatives”, Econometrica, 57, 1403-1436.                     -
Prakasa Rao, B.L.S. (1983) Nonparametric Functional Estimation. New York: Academic Press.
Rice, J. (1986) “Convergence    Rates for Partially Splined Estimates”, Statistics and Probability Letters, 4,
   203-208.
Rilstone, P. (1989) “Semiparametric         Estimation     of Missing Data Models”, mimeo, Department                 of
   Economics, Lava1 University.
Ritov, Y. (1990) “Estimation     in a Linear Regression Model with Censored Data”, Annals of Statistics,
   18,303-328.
Robinson,    P. (1987) “Asymptotically       Efficient Estimation    in the Presence of Heteroskedasticity            of
   Unknown Form”, Econometrica, 55,875-891.
Robinson, P. (1988a) “Semiparametric          Econometrics,     A Survey”, Journal of Applied Econometrics, 3,
   35-51.
Robinson, P. (1988b) “Root-N-Consistent          Semiparametric     Regression”, Econometrica, 56.931-954.
Rosenbaum,      P.R. and D.B. Rubin (1983) “The Central Role of the Propensity              Score in Observational
  Studies for Causal Effects”, Biometrika, 70, 41-55.
Ch. 41: Estimution of Semiparumetric         Models                                                                 2521


Ruud, P. (1983) “Sufficient Conditions            for Consistency    of Maximum       Likelihood    Estimation     Despite
   Misspecification     of Distribution”,    Econometrica, 51, 2255228.
Ruud, P. (1986) “Consistent Estimation of Limited Dependent Variable Models Despite Misspecification
   of Distribution”,    Journul ofEconometrics,        32, 1577187.
Schick, A. (1986) “On Asymptotically         Efficient Estimation in Semiparametric       Models”, Annals of Stutistics,
   14,1139-1151.
Serfling, R.J. (1980) Approximation         Theorems of Mathematical       Statistics, New York: Wiley.
Severini, T.A. and W.H. Wong (1987a) “Profile Likelihood and Semiparametric                       Models”. manuscriut,
   University of Chicago.            -
Severini, T.A. and W.H. Wong (1987b) “Convergence                    Rates of Maximum         Likelihood    and Related
   Estimates in General Parameter Spaces”, Technical Report No. 207, Department of Statistics, University
   of Chicago, Chicago, IL.
Sherman, R.P. (1990a) “The Limiting Distribution                of the Maximum         Rank Correlation       Estimator”,
   manuscript,    Bell Communications         Research.
Sherman, R.P. (1990b) “Maximal Inequalities for Degenerate U-Processes with Applications                       to Optimi-
   zation Estimators”, manuscript,         Bell Communications       Research.
Sherman, R.P. (1993) “The Limiting Distribution                 of the Maximum         Rank Correlation       Estimator”,
   Economerrica, 61, 123-137.
Silverman, B.W. (1986) Density Estimationfor Statistics and Data Analysis. London: Chapman and Hall.
Stein, C. (1956) “Efficient Nonparametric            Testing and Estimation”,      Proceedings of the Third Berkeley
   Symposium on Mathematical Statistics and Probability, Vol. 1, Berkeley, University ofcalifornia                  Press.
Stock, J.H. (1989) “Nonparametric           Policy Analysis”, Journal of the American Statistical Association, 84,
    1461l1481.
Stoker, T.M. (1986) “Consistent Estimation of Scaled Coefficients”, Econometrica,                  54, 1461l1481.
Stoker, T.M. (1991) “Equivalence          of Direct, Indirect, and Slope Estimators of Average Derivatives”, in:
   W.A. Barnett, J.L. Powell and G. Tauchen, eds., Nonparametric and Semiparametric Methods in
   Econometrics and Statistics. Cambridge: Cambridge University Press.
Stoker, T.M. (1992) Lectures on Semiparametric Econometrics. Louvain-LaaNeuve,                          Belgium: CORE
   Lecture Series.
Thompson, T.S. (1989a) “Identification          of Semiparametric    Discrete Choice Models”, manuscript, Depart-
   ment of Economics, University of Minnesota.
Thompson, T.S. (1989b) “Least Squares Estimation of Semiparametric                   Discrete Choice Models,” manu-
   script, Department       of Economics, University of Minnesota.
Tobin, J. (1956) “Estimation          of Relationships     for Limited Dependent        Variables”, Econometrica, 26,
   24-36.
Wahba, G. (1984) “Partial Spline Models for the Semiparametric                   Estimation    of Functions of Several
   Variables”, in Statistical Analysis of Time Series. Tokyo, Institute of Statistical Mathematics.
White, H. (1982) “Maximum           Likelihood Estimation of Misspecified Models”, Econometrica, 50, l-26.
Ying, Z., S.H. Jung and L.J. Wei (1991) “Survival Analysis with Median Regression Models”, manuscript,
   Department      of Statistics, University of Illinois.
Zheng, Z. (1992) “Efficiency Bounds for the Binary Choice and Sample Selection Models under Symmetry”,
   in Topics in Nonparametric and Semiparametric Analysis, Ph.D. dissertation,                 Princeton University,



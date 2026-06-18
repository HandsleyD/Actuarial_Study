---
normalized_id: shared-pdf-reference-restrictions-of-economic-theory
exam_code: SHARED
material_scope: restrictions of economic theory.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Restrictions of Economic Theory.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-restrictions-of-economic-theory

Chapter 42


RESTRICTIONS OF ECONOMIC                                                  THEORY IN
NONPARAMETRIC   METHODS*

ROSA L. MATZKIN

Northwestern University




Contents

Abstract                                                                                                      2524
1. Introduction                                                                                               2524
2. Identification              of nonparametric            models         using economic       restrictions   2528
     2.1.    Definition       of nonparametric      identification                                             2528
     2.2.    Identification       of limited dependent        variable    models                               2530
     2.3.    Identification       of functions   generating     regression    functions                        2535
     2.4.    Identification       of simultaneous     equations      models                                    2536
3.   Nonparametric               estimation         using economic            restrictions                    2537
     3.1.   Estimators        that depend    on the shape of the estimated          function                  2538
     3.2.    Estimation       using seminonparametric           methods                                       2544
     3.3.    Estimation       using weighted     average      methods                                         2546
4.   Nonparametric                tests using economic               restrictions                             2548
     4.1.    Nonstatistical       tests                                                                       2548
     4.2.   Statistical   tests                                                                               255 1
5.  Conclusions                                                                                               2554
References                                                                                                    2554




   *The support of the NSF through Grants SES-8900291 and SES-9122294 is gratefully acknowledged,
I am grateful to an editor, Daniel McFadden, and two referees, Charles Manski and James Powell, for
their comments and suggestions. I also wish to thank Don Andrews, Richard Briesch, James Heckman,
Bo Honor& Vrinda Kadiyali, Ekaterini Kyriazidou, Whitney Newey and participants    in seminars at the
University of Chicago, the University of Pennsylvania,  Seoul University, Yomsei University and the
conference on Current Trends in Economics, Cephalonia, Greece, for their comments. This chapter was
partially written while the author was visiting MIT and the University of Chicago, whose warm
hospitality is gratefully appreciated.

Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
(3 1994 Elsevier Science B. V. All rights reserved
2524                                                                                     R.L. Ma&kin




Abstract

This chapter describes several nonparametric            estimation   and testing methods for
econometric models. Instead of using parametric assumptions              on the functions and
distributions   in an economic model, the methods use the restrictions that can be
derived from the model. Examples of such restrictions                 are the concavity    and
monotonicity     of functions, equality conditions, and exclusion restrictions.
   The chapter shows, first, how economic restrictions can guarantee the identifica-
tion of nonparametric      functions in several structural models. It then describes how
shape restrictions can be used to estimate nonparametric             functions using popular
methods for nonparametric         estimation.   Finally, the chapter describes how to test
nonparametrically      the hypothesis      that an economic        model is correct and the
hypothesis that a nonparametric        function satisfies some specified shape properties.



1.     Introduction

 Increasingly,    it appears that restrictions       implied by economic          theory provide
 extremely useful tools for developing nonparametric          estimation and testing methods.
 Unlike parametric methods, in which the functions and distributions                in a model are
 specified up to a finite dimensional      vector, in nonparametric       methods the functions
 and distributions    are left parametrically     unspecified. The nonparametric          functions
 may be required to satisfy some properties, but these properties do not restrict them
 to be within a parametric class.
    Several econometric        models, formerly requiring         very restrictive      parametric
 assumptions,     can now be estimated with minimal parametric                  assumptions,       by
making use of the restrictions         that economic theory implies on the functions of
 those models. Similarly, tests of economic              models that have previously            been
performed using parametric         structures, and hence were conditional             on the pari-
metric assumptions       made, can now be performed using fewer parametric assump-
tions by using economic restrictions.          This chapter describes some of the existing
results on the development         of nonparametric        methods using the restrictions           of
economic theory.
    Studying restrictions on the relationship         between economic variables is one of
the most important       objectives of economic theory. Without this study, one would
not be able to determine, for example, whether an increase in income will produce
an increase in consumption          or whether a proportional           increase in prices will
produce a similar proportional       increase in profits. Examples of economic restrictions
that are used in nonparametric              methods     are the concavity,       continuity      and
monotonicity     of functions, equilibrium      conditions, and the implications         of optimi-
zation on solution functions.
   The usefulness of the restrictions        of economic theory on parametric            models is
 Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                    2525


by now well understood.         Some restrictions can be used, for example, to decrease
 the variance of parameter estimators, by requiring that the estimated values satisfy
 the conditions that economic theory implies on the values of the parameters. Some
can be used to derive tests of economic models by testing whether the unrestricted
parameter estimates satisfy the conditions implied by the economic restrictions. And
some can be used to improve the quality of an extrapolation               beyond the support
of the data.
    In nonparametric      models, economic restrictions can be used, as in parametric
models, to reduce the variance of estimators, to falsify theories, and to extrapolate
beyond the support of the data. But, in addition, some economic restrictions can
be used to guarantee        the identification    of some nonparametric        models and the
consistency of some nonparametric           estimators.
    Suppose, for example, that we are interested in estimating the cost function a
 typical, perfectly competitive firm faces when it undertakes a particular project, such
 as the development       of a new product. Suppose that the only available data are
 independent     observations    on the price vector faced by the firm for the inputs
 required to perform the project, and whether or not the firm decides to undertake
 the project. Suppose that the revenue of the project for the typical firm is distributed
independently      of the vector of input prices faced by that firm. The firm knows the
 revenue it can get from the project, and it undertakes           the project if its revenue
exceeds its cost. Then, using the convexity, monotonicity        and homogeneity of degree
one1 properties, that economic theory implies on the cost function, one can identify
and estimate both the cost function of the typical firm and the distribution                    of
revenues, without imposing parametric ‘assumptions             on either of these functions
(Matzkin (1992)). This result requires, for normalization          purposes, that the cost is
known at one particular vector of input prices.
    Let us see how nonparametric       estimators for the cost function and the distribution
of the revenue in the model described above can be obtained. Let (xl,.             ,x”) denote
the observed vectors of input prices faced by N randomly sampled firms possessing
the same cost function. These could be, for example, firms with the same R&D
technologies.     Let y’ equal 0 if the ith sampled firm undertakes            the project and
equal 1 otherwise (i = 1, . . . , N). Let us denote by k*(x) the cost of undertaking          the
project when x is the vector of input prices and let us denote by E the revenue
associated with the project. Note that E > 0. The cumulative distribution              function
of E will be denoted by F*. We assume that F* is strictly increasing over the non-
negative real numbers and the support of the probability            distribution    of x is IX”,.
(Since we are assuming that E is independent             of x, F* does not depend on x.)
According to the model, the probability             that y’= 1 given x is Pr(s ,< k*(x’)) =
F*(k*(x’)). The homogeneity of degree one of k* implies that k*(O) = 0. A necessary
normalization      is imposed by requiring that k*(x*) = c(, where both x* and CYare
known; cr~lw.


  1 A function h: X + iw,where X c RK is convex, is convex if Vx, ysX and tll~[O, 11, h(ix + (1 - i)y) <
Ah(x) + (1 - iJh(y); h is homogeneous of degree one if VXEX and VA> 0, h(b) = ih(x).
2526                                                                                                      R.L. Matzkin


   Nonparametric    estimators for h* and F* can be obtained as follows. First, one
estimates the values that h* attains at each of the observed points x1,. . . , xN and
one estimates the values that F* attains at h*(x’), . . . , II*( Second, one interpolates
between these values to obtain functions 8 and p that estimate, respectively, h* and
F*. The nonparametric     functions fi and i satisfy the properties that h* and F* are
known to possess. In our model, these properties are that h*(x) = c(,h* is convex,
homogeneous      of degree one and monotone         increasing,   and F* is monotone
increasing and its values lie in the interval [0,11.
   The estimator for the finite dimensional   vector {h*(x’), . , h*(xN); F*(h*(x’)), . . . ,
F*(h*(xN))} is obtained by solving the following constrained          maximization     log-
likelihood problem:


       maximize              f      {yi log(F’) + (1 - y’) log(1 - F’)}
       {F’},{h’},{T’}        i=l



subject to

       F’ Q F’          if         hi d hj,    i,j=l     ,...,   N,                                                   (2)
       O<F’<            1,                      i=l    ,..., N,                                                       (3)
       hi = Ti.xi,                              i=O,...,N+            1,                                              (4)
       h’> T’.x’,                               i,j=O ,...,N+              1,                                         (5)
        T’ 2 0,                                 i=O,...,N+            1.                                              (6)
 In this problem, hi is the value of a cost function h at xi, T’ is the subgradient’      of h
 at xi, and F’ is the value of a cumulative     distribution  at hi (i = 1,. . . , N); x0 = 0,
 xN+‘=x*,hO=O,andhN”=             ~1.The constraints (2)-(3) on F’, . . . , FN characterize
the behavior that any distribution      function must satisfy at any given points h’, . . . , h”
in its domain. As we will see in Subsection 3.1, the constraints (4)-(6) on the values
hO,...,hN+’ and vectors To,. . . , TN+ ’ characterize the behavior that the values and
subgradients    of any convex, homogeneous        of degree one, and monotone function
must satisfy at the points x0,. . . , xN+ ‘.
   Matzkin (1993b) provides an algorithm to find a solution to the constrained
optimization     problem above. The algorithm is based on a search over randomly
drawnpoints(h,T)=(h’,...,          hN;To ,..., TN+’ ) that satisfy (4)-(6) and over convex
combinations      of these points. Given any point (_h,1) satisfying (4)-(6), the optimal
values of F’ , . . . , FN and the optimal value of the objective function given (h, T) are
calculated using the algorithm developed by Asher et al. (1955). (See also Cosslett
(1983).) Thii algorithm divides the observations        in groups, and assigns to each F’
in a group the value equal to the proportion       of observations   within the group with

   *If f:X+@       is a convex function on a convex               set XC RK and XEX, any vector TEIW~, such that
Vy~Xh(y) > h(x) + F(y - x), is called a subgradient                of h at x. If h is differentiable at x, the gradient of
h at x is the unique subgradient   of h at x.
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                2527


y’ = 1. The groups are obtained by first ordering the observations               according to the
values of the h”s. A group ends at observation          i in the jth place and a new group
starts at observation     k in the (j + 1)th place iffy’ = 0 and yk = 1. If the values of the
F”s corresponding       to two adjacent groups are not in increasing order, the two
groups are merged. This merging process is repeated till the values of the F”s are in
increasing order. To randomly generate points (h, T), several methods can be used,
but the most critical one proceeds by drawing N + 2 homogeneous                      and monotone
linear functions and then letting (h, T) be the vector of values and subgradients                  of
the function that is the maximum of those N + 2 linear functions. The coefficients
of the N + 2 linear functions are drawn so that one of the functions attains the value
GIat x* and the other functions attain a value smaller than c1at x*.
   To interpolate     between solution (ii,. . . , fi”; F”, . . . , Fiv+ ‘; F’, . . . , pN), one can
use different interpolation     methods. One possible method proceeds by interpolating
linearly betw_een Pi,. . . , P” to obtain a function F^ and using the following inter-
polation for h:

      i;(x)=max{P.xli=O,...,N+              l}.

Figure 1 presents some value sets of this nonparametric       estimator 6 when XERT.
 For contrast, Figure 2 presents some value sets for a parametric estimator for h*
that is specified to be linear in a parameter /I and x.
   At this stage, several questions about the nonparametric         estimator described
above may be in the reader’s mind. For example, how do we know whether these
estimators are consistent? More fundamentally,        how can the functions h* and F*
be identified when no parametric specification is imposed on them? And, if they are
identified, is the estimation method described above the only one that can be used
to estimate the nonparametric        model? These and several other related questions
will be answered for the model described above and for other popular models.
   In Section 2 we will see first what it means for a nonparametric        function to be
identified. We will also see how restrictions      of economic theory can be used to
identify nonparametric      functions in three popular types of models.




                                              Figure 1
                                                                                   R.L. Ma&kin




                                                Figure 2



   In Section 3, we will consider various methods for estimating           nonparametric
functions and we will see how properties such as concavity, monotonicity,                  and
homogeneity    of degree one can be incorporated       into those estimation       methods.
Besides estimation     methods like the one described above, we will also consider
seminonparametric       methods and weighted average methods.
   In Section 4, we will describe some nonparametric         tests that use restrictions of
economic theory. We will be concerned with both nonstatistical         as well as statistical
tests. The nonstatistical   tests assume that the data is observed without error and
the variables in the models are nonrandom.      Samuelson’s Weak Axiom of Revealed
Preference is an example of such a nonparametric       test.
   Section 5 presents a short summary of the main conclusions of the chapter.



2.     Identification   of nonparametric     models using economic restrictions

2.1.     Dejinition of nonparametric       identijication

Formally, an econometric model is specified by a vector of functionally             dependent
and independent       observable     variables, a vector of functionally       dependent    and
independent    unobservable     variables, a set of known functional relationships       among
the variables, and a set of restrictions on the unknown functions and distributions.
In the example that we have been considering,             the observable and unobservable
independent    variables are, respectively, XE[W~ and EEIR,. A binary variable, y, that
takes the value zero if the firm undertakes the project and takes the value 1 otherwise
is the observable dependent        variable. The profit of the firm if it undertakes         the
project is the unobservable      dependent variable, y*. The known functional relation-
ships among these variables are that y* = E - h*(x) and that y = 0 when y* > 0 and
y = 1 otherwise. The restrictions on the functions and distributions             are that h* is
continuous,   convex, homogeneous         of degree one, monotone increasing and attains
the value c( at x*; the joint distribution,     G, of (x, E) has as its support the set [WX,”
and it is such that E and x are independently        distributed.
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                             2529


    The restrictions     imposed on the unknown         functions  and distributions       in an
econometric      model define the set of functions and distributions           to which these
belong. For example, in the econometric model described above, h* belongs to the
set of continuous,        convex, homogeneous       of degree one, monotone          increasing
functions that attain the value c( at x*, and G belongs to the set of distributions             of
(x,E) that have support          Rr+i    and satisfy the restriction      that x and E are
independently     distributed.
    One of the main objectives of specifying an econometric model is to uncover the
“hidden” functions and distributions          that drive the behavior of the observable
variables in the model. The identification      analysis of a model studies what functions,
or features of functions, can be recovered from the joint distribution           of the observ-
able variables in the model.
    Knowing the hidden functions, or some features of the hidden functions, in a
model is necessary, for example, to study properties of these functions or to predict
the behavior of other variables that are also driven by these functions. In the model
considered in the introduction,       for example, one can use knowledge about the cost
function of a typical firm to infer properties of the production         function of the firm
or to calculate the cost of the firm under a nonperfectly competitive situation.
    Let M denote a set of vectors of functions such that each function and distribution
in an econometric model corresponds to a coordinate of the vectors in M. Suppose
that the vector, m*, whose coordinates are the true functions and distribution             in the
model belongs to M. We say that we can identify within M the functions and distri-
butions in the model, from the joint distribution         of the observable variables, if no
other vector m in M can generate the, same joint distribution               of the observable
variables. We next define this notion formally.
    Let m* denote the vector of the unknown             functions and distributions        in an
econometric model. Let M denote the set to which m* is known to belong. For each
mEM let P(m) denote the joint distribution        of the observable variables in the model
when m* is substituted by m. Then, the vector of functions m* is identified within M
if for any vector meM such that m # m*, P(m) # P(m*).
    One may consider studying the recoverability of some feature, C(m*), of m*, such
as the sign of some coordinate of m*, or one may consider the recoverability of some
subvector, mf, of m*, where m* = (mr, m:). A feature is identified if a different value
of the feature generates a different probability distribution of the observable
variables. A subvector is identified if, given any possible remaining unknown
functions, any subvector that is different can not generate the same joint distribution
of the observable variables.
   Formally, the feature C(m*) of m* is ident$ed within the set {C(m)(meM)              if
VmEM such that C(m) # C(m*), P(m) # P(m*). The subvector                rnr is identiJied within
Ml, where M = Ml x M,, myEM,, and m:EM,, if Vm,EM,                      such that m, #my, it
follows that Vm2, m;EM, P(m:, m;) # P(m,, m2).
  When the restrictions of an econometric model specify all functions and distri-
butions up to the value of a finite dimensional vector, the model is said to be
2530                                                                        R.L. Matzkin


 parametric. When some af the functions or distributions are left parametrically un-
 specified, the model is said to be semiparametric. The model is nonparametric if
 none of the functions and distributions are specified parametrically. For example,
in a nonparametric model, a certain distribution may be required to possess zero
 mean and finite variance, while in a parametric model the same distribution may
 be required to be a Normal distribution.
     Analyzing the identification of a nonparametric econometric model is useful for
 several reasons. To establish whether a consistent estimator can be developed for
 a specific nonparametric function in the model, it is essential to determine first
 whether the nonparametric function can be identified from the population behavior
 of observable variables. To single out the recoverability properties that are solely
 due to a particular parametric specification being imposed on a model, one has to
 analyze first what can be recovered without imposing that parametric specification.
 To determine what sets of parametric or nonparametric restrictions can be used to
 identify a model, it is important to analyze the identification of the model first
 without, or with as few as possible, restrictions.
     Imposing restrictions on a model, whether they are parametric or nonparametric,
 is typically not desirable unless those restrictions are justified. While some amount
 of unjustified restrictions is typically unavoidable, imposing the restrictions that
 economic theory implies on some models is not only desirable but also, as we will
 see, very useful.
    Consider again the model of the firm that considers whether to undertake a
 project. Let us see how the properties of the cost function allow us to identify the
 cost function of the firm and the distribution of the revenue from the conditional
 distribution of the binary variable y given the vector of input prices x. To simplify
 our argument, let us assume that F* is continuous. Recall that F* is assumed to be
 strictly increasing and the support of the probability measure of x is rWt. Let g(x)
denote Pr(y = 1 Ix). Then, g(x) = F*(h*( x )) is a continuous function whose values
 on Iw: can be identified from the joint distribution of (x, y). To see that F* can be
recovered from g, note that since h*(x*) = c1and h* is a homogeneous of degree one
function, for any CER,, F*(t) = F*((t/a) a) = F*((t/cr) h*(x*)) = F*(h*((t/a) x*)) =
g((t/a)x*). Next, to see that h* can be recovered from g and F*, we note that for
any XE@, h*(x) = (F*)-‘g(x).         So, we can recover both h* and F* from the
observable function g. Any other pair (h, F) satisfying the same properties as (h*, F*)
but with h # h* or F # F* will generate a different continuous function g. So, (II*, F*)
is identified.
    In the next subsections, we will see how economic restrictions can be used to
identify other models.

2.2.   Identification of limited dependent variable models

Limited dependent variable (LDV) models have been extensively used to analyze
microeconomic data such as labor force participation, school choice, and purchase
of commodities.
Ch. 42: Restrictions   of Economic   Theory   in Nonparametric   Methods                            2531


   A typical LDV model can be described                  by a pair of functional   relationships,

         Y = G(Y*)
and

      y* = w*(x),       E),

where y is an observable dependent         vector, which is a transformation,      G, of an
unobservable    dependent    vector, y *. The vector y* is a transformation,       D, of the
value that a function, h*, attains at a vector of observable variables, x, and the value
of an unobservable    vector, E.
   In most popular examples, the function D is additively separable into the value
of h* and E. The model of the firm that we have been considering              satisfies this
restriction. Popular cases of G are the binary threshold crossing model

         y= 1    if y* >, 0 and y = 0 otherwise,

and the tobit model

      Y=Y*        if y* b 0 and y = 0 otherwise.


2.2.1.     Generalized regression models

Typically, the function h* is the object of most interest in LDV models, since it
aggregates the influence of the vector of observable explanatory         variables, x. It is
therefore of interest to ask what can be learned about h* when G and D are unknown
and the distribution     of E is also unknown.  An answer to this question has been
provided by Matzkin (1994) for the case in which y, y*, h*(x), and E are real valued,
E is distributed   independently    of x, and GOD is nondecreasing      and nonconstant.
Roughly, the result is that h* is identified up to a strictly increasing transformation.
Formally, we can state the following result (see Matzkin (1990b, 1991c, 1994)).

Theorem.        Identification of h* in generalized regression models

Suppose that
  (i) GOD: Rz + R is monotone increasing and nonconstant,
 (ii) h*: X + K!, where X c [WK,belongs to a set W of functions h: X + II2that are
      continuous     and strictly increasing in the Kth coordinate of x,
(iii) EE [wis distributed independently       of x,
(iv) the conditional     probability   of the Kth coordinate of x has a Lebesgue density
      that is everywhere positive, conditional      on the other coordinates of x,
 (v) for any x,x’ in X such that h*(x) < h*(x’) there exists tell2 such that
      Pr[GoD(h*(x), E) d t] > Pr[GoD(h*(x’), E) d t], where the probability        is taken
      with respect to the probability       measure of E, and
(vi) the support of the marginal distribution         of x includes X.
2532                                                                                               R.L. Matzkin


Then, h* is identified within W if and only if no two functions                            in W are strictly
increasing transformations   of each other.

    Assumptions      (i) and (iii) guarantee that increasing values of h*(x) generate non-
increasing values of the probability of y given x. Assumption (v) slightly strengthens
this, guaranteeing       that variations in the value of h* are translated into variations
in the values of the conditional         distribution     of y given x. Assumption    (ii) implies
that whenever two functions are not strictly increasing transformations                    of each
other, we can find two neighborhoods            at which each function attains different values
from the other function. Assumptions              (iv) and (vi) guarantee that those neighbor-
hoods have positive probability.
    Note the generality of the result. One may be considering               a very complicated
model determining          the way by which an observable vector x influences the value
of an observable variable y. If the influence of x can be aggregated by the value of
a function h*, the unobservable            random variable E in the model is distributed
independently      of x, and both h* and E influence y in a nondecreasing              way, then
one can identify the aggregator function h* up to a strictly increasing transfor-
mation.
    The identification      of a more general model, where Eis not necessarily independent
 of x, h* is a vector of functions, and GOD is not necessarily monotone increasing on
 its domain has not yet been studied.
    For the result of the above theorem to have any practicality, one needs to find
 sets of functions that are such that no two functions are strictly increasing trans-
 formations    of each other. When the functions are linear in a finite dimensional
 parameter, say h(x) = fi.x, one can guarantee this by requiring, for example, that
 IIp (1= 1 or jK = 1, where b = (jr,. . . , flK). When the functions are nonparametric,
 one can use the restrictions of economic theory.
    The set of homogeneous         of degree one functions that attain a given value, ~1,at a
 given point, x*, for example, is such that no two functions are strictly increasing
transformations       of each other. To see this, suppose that h and h’ are in this set and
for some strictly increasing function f, h’ = j-0 h; then since h(Ax*) = h’(Ax*) for each
22 0, it follows that f(t) = f(cr(t/cr)) = f(h((t/cr) x*)) = h’((t/a) x*) = t. So, f is the
identity function. It follows that h’ = h.
    Matzkin (1990b, 1993a) shows that the set of least-concave3 functions that attain
common values at two points in their domain is also a set such that no two functions
in the set are strictly increasing transformations          of each other. The sets of additively
separable functions described in Matzkin (1992,1993a) also satisfy this requirement.
Other sets of restrictions that could also be used-remain to be studied.


   3A function V:X + R, where X is a convex subset of RK, is least-concaoe if it is concave and if any
concave function, u’, that can be written as a strictly increasing transformation,    f, of v can also be written
as a concave transformation,   y. of v. For example, 0(x,, x2) = (x1 .x2) ‘P is least-concave,    but u(xl, x2) =
log(x,) + log(x,) is not.
Ch. 42: Restrictions   of Economic    Theory in Nonparametric   Methods                  2533


   Summarizing,    we have shown that restrictions of economic theory can be used
to identify the aggregator function h* in LDV models where the functions D and G
are unknown. In the next subsections we will see how much more can be recovered
in some particular models where the functions D and G are known.


2.2.2.    Binary threshold crossing models

A particular case of a generalized regression model where G and D are known is
the binary threshold     crossing model. This model is widely used not only in
economics but in other sciences, such as biology, physics, and medicine, as well. The
books by Cox (1970) Finney (1971) and Maddala (1983), among others, describe
several empirical applications    of these models. The semi- and nonparametric
identification and estimation of these models has been studied, among others, by
Cosslett (1983) Han (1987) Horowitz (1992), Hotz and Miller (1989), Ichimura
(1993), Klein and Spady (1993), Manski (1975, 1985, 1988), Matzkin (1990b, 199Oc,
1992), Powell et al. (1989) Stoker (1986) and Thompson (1989).
   The following theorem has been shown in Matzkin (1994):


Theorem.       Identijication        of (h*, F*) in a binary choice model

Suppose that
  (i) y* = h*(y) + E; y = 1 if y* 3 0, y = 0 otherwise.
 (ii) h*: X+ R, where X c lRK, belongs to a set W of functions h:X+ IF!that are
      continuous      and strictly increasing in the Kth coordinate to x,
(iii) E is distributed independently       of x,
(iv) the conditional      probability   of the Kth coordinate of x has a Lebesgue density
      that is everywhere positive, conditional         on the other coordinates     of x,
 (v) F*, the cumulative distribution         function (cdf) of E, is strictly increasing, and
(vi) the support of the marginal distribution           of x is included in X.
Let I- denote the set of monotone            increasing functions on R with values in the
interval [0,11. Then, (h*, F*) is identified within (W x I) if and only if W is a set of
functions such that no two functions in W are strictly increasing transformations
of each other.

   Assumptions     (ii)-    and (vi) are the same as in the previous theorem and they
play the same role here as they did there. Assumptions        (i) and (v) guarantee that
assumptions    (i) and (v) in the previous theorem are satisfied. They also guarantee
that the cdf F* is identified when h* is identified.
   Note that the set of functions W within which h* is identified satisfies the same
properties as the set in the previous theorem. So, one can use sets of homogeneous
of degree one functions, least-concave      functions, and additive separable functions
to guarantee the identification    of h* and F* in binary threshold crossing models.
2534                                                                                             R.L. Ma&kin


2.2.3.      Discrete choice models

Discrete choice models have been extensively used in economics since the pioneering
work of McFadden           (1974, 1981). The choice among modes of transportation,          the
choice among occupations,            and the choice among appliances have, for example,
been studied using these models. See, for example, Maddala (1983), for an extensive
list of empirical applications        of these models.
    In discrete choice models, a typical agent chooses one alternative               from a set
A = { 1,. . , J> of alternatives.       The agent possesses an observable       vector, sgS, of
socioeconomic       characteristics.    Each alternative j in A is characterized    by a vector
of observable      attributes    zj~Z, which may be different for each agent. For each
alternativejgA,      the agent’s preferences for alternativej   are represented by the value
of a random function U defined by U(j) = V*( j, s, zj) + sjr where sj is an unobservable
random term. The agent is assumed to choose the alternative that maximizes his
utility; i.e., he is assumed to choose alternative j iff

         V*(j,   St Zj) + Ej >   V*(k, St Zk)+ Ek,     fork=l,...,J;k#j.

(We are assuming that the probability           of a tie is zero.)
    The identification      of these models concerns the unknown function V* and the
distribution      of the unobservable      random vector E = (cr,. . , Ed). The observable
 variables are the chosen alternatives, the vector s of socioeconomic                characteristics,
 and the vector z = (zr , . , zJ) of attributes of the alternatives. The papers by Strauss
(1979), Yellott (1977) and those mentioned in the previous subsection concern the
nonparametric        and semiparametric      identification    of discrete choice models.
    A result in Matzkin (1993a) concerns the identification                 of V* when the distri-
bution of the vector of unobservable           variables (or, . . . , Ed) is allowed to depend on
the vector of observable variables (s,zr,. . . ,z,). Letting (sr,. . . , eJ) depend on (s,z)
is important because there is evidence that the estimators for discrete choice models
may be very sensitive to heteroskedasticity             of E (Hausman and Wise (1978)). The
identification     result is obtained using the assumptions           that (i) the V*( j, .) functions
are continuous       and the same for all j; i.e. 3v* such that Vj V*( j, s, zj) = v*(s, zj), and
(ii), conditional     on (s,z r,. .,zJ), the sj’s are i.i.d.4 Matzkin (1993a) shows that a
sufficient condition       for v*: S x Z + R to be identified within a set of continuous
functions W is that for any two functions v, v’ in W there exists a vector s such that
u(s, .) is not a strictly increasing transformation         of v’(s, .). So, for example, when the
functions v: S x Z -+ R in W are such that for each s, v(s, .) is homogeneous                of degree
one, continuous,       convex and attains a value c1 at some given vector z*, one can
identify the function u*.
    A second result in Matzkin (1993a) extends techniques developed by Yellott (1977)


  “Manski (1975, 1985) used this conditional     independence   assumption   to analyze   the identification   of
semiparametric discrete choice models.
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                 2535


and Strauss (1979). The result is obtained under the assumption that the distribution
of E is independent    of the vector (s, z). It is shown that using shape restrictions on
the distribution   of E and on the function V*, one can recover the distribution      of the
vector (s2-si,...,     eJ - el) and the V*(j, .) functions      over some subset of their
domain. The restrictions       on I/* involve knowing its values at some points and
requiring that I/* attains low enough values over some sections of its domain. For
example, Matzkin (I993a) shows that when I/* is a monotone                 increasing   and
concave function whose values are known at some points, I’* can be identified over
some subset of its domain.
   The nonparametric       identification   of discrete choice models under other non-
parametric assumptions       on the distribution    of the E’Sremains to be studied.



2.3.    Identification   offunctions     generating   regression functions

Several models in economics            are specified by the functional    relation

       Y = f *cd + 4                                                                               (7)

where x and E are, respectively, vectors of observable and unobservable                functionally
independent      variables, and y is the observable vector of dependent variables.
    Under some weak assumptions,             the function f *: X -+ Iw can be recovered from
the joint distribution     of (x, y) without need of specifying any parametric structure
for f *.To see this, suppose that E@(x) = 0 a.s.; then E(ylx) = f *(x) a.s. Hence, if
f * is continuous       and the support of the marginal distribution            of x includes the
domain off *, we can recover f *. A similar result can be obtained making other
 assumptions     on the conditional     distribution    of E, such as Median@ Ix) = 0 a.s.
    In most cases, however, the object of interest is not a conditional                 mean (or a
 conditional    median) function f *, but some “deeper” function, such as a utility
 function generating the distribution         of demand for commodities        by a consumer, or
 a production     function generating the distribution         of profits of a particular firm. In
 these cases, one could still recover these deeper functions, as long as they influence
f *. This requires using results of economic theory about the properties that f *
 needs to satisfy.
    For example, suppose that in the model (7) with E(E~x) = 0, x is a vector (p, I) of
prices of K commodities        and income of a consumer, and the function f * denotes
for each (p,l) the vector of commodities              that maximizes the consumer’s utility
function U* over the budget set (z > 0lp.z < Z}; E denotes a measurement                       error.
Then, imposing theoretical restrictions on f * we can guarantee that the preferences
represented by U* can be recovered from f *. Moreover, since f * can be recovered
from the joint distribution      of (y,p, I), it follows that U* can also be recovered from
this distribution.     Hence, U* is identified. The required theoretical restrictions               on
f * have been developed by Mas-Colell(l977).
2536                                                                                      R.L. Matzkin


Theorem.      Recoverability      of utility functions     from   demand functions      (Mas-Cole11
(1977))
Let W denote a set of monotone increasing, continuous,   concave and strictly quasi-
concave functions such that no two functions in W are strictly increasing transfor-
mations of each other. For any UEW, let f(p,Z;     U) denote the demand function
generated by U, where PELWK,denotes a vector of prices and ZEIR, + denotes a
consumer’s income. Then, for any U, U’ in W, such that U # U’ one has that
ft.9
   ';
    U) z ft.9
            ';
             w.
   This result states that different utility functions       generate different demand
functions   when the set of all possible values of the vector (p,l) is Iw:+‘. The
assumption    that the utility functions    in the set W are concave is the critical
assumption guaranteeing      that the same demand function can not be generated from
two different utility functions in the set W.
   Mas-Cole11 (1978) shows that, under certain regularity            conditions,  one can
construct the preferences represented by U* by taking the limit, with respect to an
appropriate    distance function,    of a sequence of preferences.       The sequence is
constructed   by letting {p’,Z’},~, be a sequence that becomes dense in (w;+i. For
each N, a utility function V, is constructed    using Afriat’s (1967a) construction:

       V,(z) = min { I/’ + A’p’.(z - z’, b        . . , N},

where zi = f *(pi, Ii) and the Vi’s and 2”s are any numbers          satisfying   the inequalities

       vi < vj + Ajpj. (Zi _ Zj),       i,j=l   ,.‘., N,

       1’ 2 0,      i= l,...,N.

The preference relation represented by U* is the limit of the sequence of preference
relations represented by the functions V, as N goes to co.
    Summarizing,    we have shown that using Mas-Cole113 (1977) result about the
recoverability   of utility functions from demand functions, we can identify a utility
function from the distribution       of its demand.
    Following a procedure similar to the one described above, one could obtain non-
parametric identification     results for other models of economic theory. Brown and
Matzkin (1991) followed this path to show that the preferences of heterogeneous
consumers in a pure exchange economy can be identified from the conditional       dis-
tribution of equilibrium     prices given the endowments   of the consumers.


2.4.   Identijication   of simultaneous    equations models

Restrictions of economic theory can also be used to identify the structural equations
of a system of nonparametric      simultaneous  equations.     In particular,    when the
functions in the system of equations are continuously      differentiable,   this could be
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                          2531


done by determining what type of restrictions guarantee that a given matrix is of
full rank. This matrix is presented in Roehrig (1988).
   Following Roehrig, let us describe a system of structural equations by

     r*(x,y)--u=O

where. XEUP, y, UEIWG,and I*: IWKx IWG       + [WC;y denotes a vector of observable
endogeneous variables, x denotes a vector of observable exogenous variables, and
u denotes a vector of unobservable exogenous variables. Let 4* denote the joint
distribution of (x, u).
   Suppose that (i) V(x, y) ar*/ay is full rank, (ii) there exists a function 7~such
that y = Y$X,u), and (iii) d* is such that u is distributed independently of x. Let (I, 4)
be another pair satisfying these same conditions. Then, under certain assumptions
on the support of the probability measures, Roehrig (1988) shows that a necessary
and sufficient condition guaranteeing that P(r*, &J*)= P(r, 4) is that for all i = 1,. . . , G
and all (x, y) the rank of the matrix




is less than G + 1. In the above expression, ri denotes the ith coordinate function of
r and P(r, 4) is the joint distribution of the observable vectors (x, y), when (r*, 4*)
is substituted with (r, 4).
   Consider, for example, a simple system of a demand and a supply function
described by

     4 = 44 P, w) + $3
     P = s(w, 431) + Es,
where q denotes quantity, p denotes price, I denotes the income of the consumers
and w denotes input price. Then, using the restrictions of economic theory that
adlaw = 0, as/al = 0, adfal # 0 and as/&v # 0, one can show that both the demand
function and the supply function are identified up to additive constants.
   Kadiyali (1993) provides a more complicated example where Roehrig’s (1988)
conditions are used to determine when the cost and demand functions of the firms
in a duopolistic market are nonparametrically identified. I am not aware of any
other work that has used these conditions to identify a nonparametric model.


3.   Nonparametric    estimation using economic restrictions

Once it has been established that a function can be identified nonparametrically,
one can proceed to develop nonparametric estimators for that function. Several
methods exist for nonparametrically estimating a given function. In the following
subsections we will describe some of these methods. In particular, we will be
2538                                                                                 R.L. Matzkin


concerned    with the use of these methods to estimate nonparametric                 functions
subject to restrictions      of economic      theory. We will be concerned          only with
independent    observations.
   Imposing restrictions      of economic theory on estimator of a function may be
necessary to guarantee the identification        of the function being estimated, as in the
models described in the previous section. They may also be used to reduce the
variance of the estimators. Or, they may be imposed to guarantee that the results
are meaningful, such as guaranteeing         that an estimated demand function is down-
wards sloping. Moreover, for some nonparametric                 estimators,  imposing shape
restrictions is critical for the feasibility of their use. It is to these estimators that we
turn next.


3.1.    Estimators          that depend on the shape of the estimated function

When a function that one wants to estimate satisfies certain shape properties, such
as monotonicity     and concavity, one can use those properties to estimate the function
nonparametrically.     The main practical tool for obtaining         these estimators is the
possibility of using the shape properties of the nonparametric             function to charac-
terize the set of values that it can attain at any finite number of points in its domain.
The estimation     method proceeds by, first, estimating the values (and possibly the
gradients or subgradients) of the nonparametric         function at a finite number of points
of its domain, and second, interpolating       among the obtained values. The estimators
in the first step are subject to the restrictions implied by the shape properties of the
function. The interpolated      function in the second step satisfies those same shape
properties.
   The estimator presented in the introduction          was obtained using this method. In
that case, the constraints      on the vector (h’, . , hN; To,. . , TN+‘) of values and
subgradients of a convex, homogeneous          of degree one, and monotone function were

       hi =   Ti.xi,              i=O,...,N+              1,                                  (4’)

       h’> T’.x’,              i,j=O ,...,N+              1,                                  (5’)

       T’ > 0,                    i=O,...,N+              1.                                  (6’)

The constraints             on the vector (F’, . . . , FN) of values of a cdf were

       F’ < F’              ifh’<hj,i,j=         l,...,        N,                              (2’)

        06    F’<      1,                  i=l    ,“.,         N.                              (3’)

The necessity of the first set of constraints follows by definition. A function h: X + R,
where X is an open and convex set in R K, is convex if and only if for all XCX there
exists T(x)E@ such that for all ye X, h(y) 3 h(x) + T(x).(y - x). Let h be a convex
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                             2539


function and T(x) a subgradient            of h at x; h is homogeneous     of degree one if and
only if h(x) = T(x).x and h is monotone increasing if and only if T(x) 2 0. Letting
x = xc, y = xj, h(x) = h(x’), h(y) = hj and T(x) = T’ one gets the above constraints.
Conversely, toesee that if the vector (ho,. , hN+ ‘; To,. . . , TN+ ‘) satisfies the above
constraints       with ho = 0 and hN+’ = ~1,then its coordinates       must correspond to the
values and subgradients           at x0,. . , xN+l of some convex, monotone          and homo-
geneous of degree one function, we note that the function h(x) = max{ T’.xl i =
0 , . . . , N + l} is one such function.        (See Matzkin    (1992) for a more detailed
discussion of these arguments.)
     The estimators for (II*, F*) obtained by interpolating     the results of the optimization
in (l)-(6) are consistent. This can be proved by noting that they are maximum likeli-
hood estimators and using results about the consistency               of not-necessarily    para-
metric maximum           likelihood    estimators,   such as Wald (1949) and Kiefer and
Wolfowitz (1956). To see that (g,@ is a maximum likelihood estimator, let the set
of nonparametric         estimators    for (h*,F*) be the set of functions       that solve the
broblem


          max L,(h, F) = 5     {yi log [F(h(x’))]   + (1 - y’) log [ 1 - F(h(x’))] }
          (h-F)          i=l


          subject to (%F)c(H    x r),
                                                                                              (8)

where H is the set of convex, monotone increasing, and homogeneous          of degree one
functions that attain the value CI at x* and r is the set of monotone          increasing
functions on R whose values lie in the interval [0,11. Notice that the value of L,(h, F)
depends on h and F only through the values that these functions attain at a finite
number of points. As seen above, the behavior of these values is completely charac-
terized by the restrictions (2)-(6) in the problem in the introduction.    Hence, the set
of solutions of the optimization      problem (8) coincides with the set of solutions
obtained by interpolating     the solutions of the optimization    problem described by
(l))(6). So, the estimators     we have been considering       are maximum     likelihood
estimators.
    We are not aware of any existing results about the asymptotic distribution            of
these nonparametric      maximum likelihood estimators.
    The principles that have been exemplified in this subsection can be generalized
to estimate other nonparametric       models, using possibly other types of extremum
estimators, and subject to different sets of restrictions on the estimated functions.
The next subsection presents general results that can be used in those cases.

3.1 .I.     General types of shape restrictions

Generally   speaking, one can interpret the theory behind estimators     of the sort
described in the previous subsection as an immediate extension of the theory behind
parametric   M-estimators.  When a function is estimated parametrically      using a
2540                                                                                   R.L. Mat&in


maximization     procedure, the function is specified up to the value of some finite
dimensional    parameter vector do RL, and an estimator for the parameter is obtained
by maximizing     a criterion function over a subset of RL. When the nonparametric
shape restricted    method is used, the function       is specified up to some shape
restrictions and an estimator is obtained by maximizing a criterion function over the
set of functions satisfying the specified shape restrictions.
   The consistency of these nonparametric     shape restricted estimators can be proved
by extending the usual arguments to apply to subsets of functions instead of subsets
of finite dimensional    vectors. For example, the following result, which is discussed
at length in the chapter by Newey and McFadden           in this volume, can typically be
used:

Theorem

Let m* be a function, or a vector of functions, that belongs to a set of functions M.
Let L,: M + 52 denote a criterion function that depends on the data. Let P& be an
estimator for m*, defined by A,Eargmax(L,(m)ImEM}.         Assume that the following
conditions are satisfied:
  (i) The function L, converges a.s. uniformly over M to a nonrandom       continuous
      function L: M + R.
 (ii) The function m* uniquely maximizes L over the set M.
(iii) The set M is compact with respect to a metric d.

Then, any sequence of estimators           {fiN} converges a.s. to m* with respect          to the
metric d. That is, with probability       one, lim,, m d(rfi,, m*) = 0.

     See the Newey and McFadden            chapter for a description      of the role played by
 each of the assumptions,      as well as a list of alternative assumptions.
     The most substantive     assumptions      are (ii) and (iii). Depending on the definition
 of L,, the identification    of m* typically implies that assumption        (ii) is satisfied. The
 satisfaction of assumption      (iii) depends on the definitions of the set M and of the
 metric d, which measures the convergence              of the estimator to the true function.
 Compactness     is more difficult to be satisfied by sets of functions than by sets of
 finite dimensional      parameter     vectors. One often faces a trade-off between the
 strength of the convergence result and the strength of the restrictions on M in the
 sense that the stronger the metric d, the stronger the convergence                     result, but
 the more restricted the set M must be. For example, the set of convex, monotone
 increasing, and homogeneous          of degree one functions that attain the value CIat x*
 and have a common open domain is compact with respect to the I.’ norm. If, in
addition, the functions in this set possess uniformly bounded subgradients,                 then the
set is compact with respect to the supremum norm on any compact subset of their
joint domain.
    Two properties of the estimation method allow one to transform the problem of
finding functions that maximize L, over M into a finite dimensional                  optimization
Ch. 42: Restrictions   of Economic Theory in Nonparametric   Methods                                2541


problem. First, it is necessary that the function L, depends on any meM only
through the values that m attains at a finite number of points. And second, it is
necessary that the values that any function rn~M may attain at those finite number
of points can be characterized       by a finite set of inequality constraints.  When these
conditions are satisfied, one can use standard routines to solve the finite dimensional
optimization     problem that arises when estimating functions using this method. The
second requirement      is not trivially satisfied. For example, there is no known finite
set of necessary and sufficient conditions         on the values of a function at a finite
number of points guaranteeing        that the function is differentiable and a-Lipschitzian5
(c( > 0). In the example given in Section 3.1, the concavity of the functions was critical
in guaranteeing     that we can characterize the behavior of the functions at a finite
number of points.
    While the results discussed in this section can be applied to a wide variety of
models and shape restrictions,         some types of models and shape restrictions        have
received particular     attention.   We next survey some of the literature concerning
estimation subject to monotonicity         and concavity restrictions.

3.1.2.    Estimation     of monotone functions

A large body of literature concerns the use of monotone           restrictions  to estimate
nonparametric      functions. Most of this work is summarized in an excellent book by
Robertson     et al. (1988), which updates results surveyed in a previous book by
Barlow et al. (1972). (See also, Prakasa Rao (1983).) The book by Robertson et al.
describes results about the computation        of the estimators, their consistency, rates
of convergence,      and asymptotic  distributions.   Subsection   9.2 in that book is of
particular  interest. In that subsection     the authors survey existing results about
monotone restricted estimators for the function f * in the model

      Y = f*(x)    +6
where E(EI x) = 0 a.s. or Median(&Ix) = 0. Key papers are Brunk (1970), where the
consistency and asymptotic distribution          of the monotone     restricted least squares
estimators for f * is studied when E(E[x) = 0 and x~[0, 11; and Hanson et al. (1973),
where consistency is proved when XG[O, l] x [0,11. Earlier, Asher et al. (1955) had
proved some weak convergence results. Recently, Wang (1992) derived the rate of
convergence of the monotone          restricted estimator for f * when E(E~x) = 0 a.s. and
x~[0, l] x [0,11.The asymptotic distribution          of the least squares estimator for this
latter case is not yet known.
    Of course, the general methods described in the previous subsection apply in
particular to monotone      functions. So, one can use those results to determine the
consistency of monotone       restricted estimators in a variety of models that may or
may not fall into the categories of models that are usually studied. (See, for example,
Cosslett (1983) and Matzkin (1990a).)

  ‘A function h:X + Iw,where X c Rx, is a-lipschitzian   (GL> 0) if Vx, y~X,Ih(x) - h(y)1 6 a 11
                                                                                               x -Y 11.
Ch. 42: Restrictions      of Economic       Theory in Nonparametric       Methods                            2543


gradients        of the concave              function          (Matzkin   (1986,1991a),   Balls   (1987)).   The
constraints       in (9) become

      fi<fj+        Tj.(xi-xj),                    i,j=l      3.“) N,

and the minimization    is over the values {fi} and the vectors (T’}. To add a mono-
tonicity restriction, one includes the constraints

      T’ >/ 0,            i= 1,. . . , N.

To bound the subgradients                    by a vector B, or to bound the values of the function
by the values of a function                 b, one uses, respectively, the constraints

       - B < T’ < B,                  i=l    ,         , N,

and

       - b(x’) d fi d b(x'),                     i=l     ,...,N.

   Algorithms for the resulting constrained optimization  problem were developed
by Dykstra (1983) and Goldman and Ruud (1992) for the least squares estimator,
and Matzkin (1993b) for general types of objective functions. The algorithms by
Dykstra and by Goldman        and Ruud are extensions of the method proposed by
Hildreth (1954). This algorithm proceeds by solving the problem

      minimize      I/y    -   A’2   112,
          A>0



where A is a matrix whose rows are all vectors ~~EIW~with pi = 1 (some i), & d 0
(all k # i), and /I’X = 0. The rows of the N x K matrix X are the observed points xi,
the first coordinates of which are ones. This is the dual of the problem of finding the
vector z*that minimizes the sum of squared errors subject to concavity constraints


       minimize        (1y - z 112,
         A.ZdO



The solution to this problem is 1= y - A/l, where fi is the solution to the dual
problem. While the dual problem is minimized over more variables, the constraints
are much simpler than those of the primal problem. The algorithm minimizes the
objective function over one coordinate of 2 at a time, repeating the procedure till
convergence.
   The consistency of the concavity restricted least squares estimator of a multivariate
nonparametric     concave function    can be proved using the consistency           result
2544                                                                                            R.L. Matzkin


presented   in Section       3.1.1. Suppose,       for example,             that in the model

       y = f*(x) + 6

XEX, where X is an open and convex subset of Rx, f *: X + R4, and the unobserved
vector EE lFPis distributed independently    of x with mean 0 and variance .Z. Let BE R”,
and b: X + R4. Assume that f* belongs to the set, H, of concave functions f: X + Rq
whose subgradients      are uniformly bounded by B and their values satisfy that VxgX,
If(x)\ < b(x). Then, H is a compact set, in the sup norm, of equicontinuous    functions.
So, following the same arguments          as in, e.g., Epstein and Yatchew (1985) and
Gallant (1987), one can show that the function L,: H + [wdefined by


       LN(f) =   k.$1(Yi -
                     L
                                f(xi)‘z   _   ‘(Yi -   f(xi))




converges    a.s. uniformly       to the continuous              function     L: H + R defined by



                         s
       L(f) = q + (f(x) - f*(~))‘(fb) - f*(x)) $4x),

where p is the probability   measure of x. Since the functions in H are continuous,      L
is uniquely minimized at f*. Hence, by the theorem of Subsection 3.1.1 it follows
that the least squares estimator is a strongly consistent estimator for f*.
   For an LAD (least absolute deviations)        nonparametric     concavity  restricted
estimator, Balls (1987) proposed proving consistency by showing that the distance
between the concavity restricted estimator and the true function is smaller than the
distance between an unrestricted     consistent nonparametric    splines estimator (see
Section 3.2) and the true function. Matzkin (1986) showed consistency of a non-
parametric concavity restricted maximum likelihood estimator using a variation
of Wald’s (1949) theorem, which uses compactness         of the set H. No asymptotic
distribution  results are known for these estimators.



3.2.    Estimation       using seminonparametric                methods

Seminonparametric      methods proceed by approximating       any function of interest
with a parametric approximation.    The larger the number of observations      available
to estimate the function, the larger the number of parameters used in the approxi-
mating function and the better the approximation.     The parametric approximations
are chosen so that as the number of observations increases, the sequence of parametric
approximations     converges to the true function, for appropriate       values of the
parameters.
   A popular example of such a class of parametric       approximations    is the set of
Ch. 42: Restrictions   IJ~Economic   Theory in Nonparametric       Methods            2545


functions    defined by the Fourier           flexible form (FFF) expansion

      gN(x, 0) = h’x + X’CX +            1        uk   eik’x,   XEFF,
                                      Ikl*<   T



where i = J-1,      ~E[W~, C is a K x K matrix, uk = uk + iv, for some real numbers
uk and ok, k = (k,,    , kK) is a vector with integer coordinates,   and JkJ* = Cf= i (ki(.
(See Gallant (198 1))
   To guarantee that the above sum is real valued, it is imposed that oe = 0, uk = u_~
and vk = - v_~. Moreover, the values of each coordinate of x need to be modified
to fall into the [0,2~] interval. The coordinates     of the parameter vector 19are the
uk’s, the uk’s and the coefficients of the linear and quadratic        terms. Important
advantages of this expression are that it is linear in the parameters and its partial
derivatives are easily calculated. As K + CO,the FFF and its partial derivatives up
to order m - 1 approximate       in an Lp norm any m times differentiable function and
its m - 1 derivatives.
   Imposing restrictions on the values of the parameters of the approximation,         one
can guarantee that the resulting estimator satisfies a desired shape property. Gallant
and Golub (1984), for example, impose quasi-convexity          in the FFF estimator by
calculating   the estimator    for 6 as the solution to a constrained       minimization
problem

      min s,(8)        subject to     r(0) > 0,
       8

where sN(.) is a data dependent function, such as a weighted sum of squared errors,
r(0) = min, u(x, 0) and u(x, 0) = min, (z’D’g,(x, 0)z (z’Dg,(x, 0) = 0, z’z = 1}. Dg, and
D’g, denote, respectively, the gradient and Hessian of gN with respect to x. Gallant
and Golub (1984) have developed an algorithm to solve this problem.
   Gallant (1981, 1982) developed restrictions guaranteeing     that the Fourier flexible
form approximation     satisfies homotheticity,   linear homogeneity   or separability.
   The consistency    of seminonparametric      estimators  can typically be shown by
appealing to the following theorem, which is presented and discussed in Gallant
(1987) and Gallant and Nychka (1987, Theorem 0).

Theorem

Suppose that m* belongs to a set of functions M. Let L,: M + [wdenote a criterion
function that depends on the data. Let {MN} denote an infinite sequence of subsets
of M such that . ..M. c MN+i c MN+z.... Let rnc be an estimator for m*, defined
by rni = argmax {L,(m)(m~M,}.     Assume that the following conditions are satisfied.
 (i) The function L, converges a.s. uniformly over M to a nonrandom     continuous
     function L: M + R.
(ii) The function m* uniquely maximizes L over the set M.
2546                                                                              R.L. Matzkin


(iii) The set M is compact with respect to a metric d.
(iv) There exists a sequence of functions     (gN} c M such            that   gNEMN for all
      N= 1,2,... and d(g,, WI*)+ 0.

Then, the sequence ofestimators   {mN} converges a.s. to m* with respect to the metric
d. That is, with probability one, lim,, m d(m,, m*) = 0.

    This result is very similar to the theorem in Subsection 3.1.1. Indeed, Assumptions
(i)-(iii) play the same role here as they played in that theorem. Assumption            (iv) is
necessary to substitute for the fact that the maximization        of L, for each N is not
over the whole space M but only over a subset, M,, of M. This asumption is satisfied
when the M, sets become dense in M as N -+ co. (See Gallant (1987) for more
discussion about this result.)
    Asymptotic normality results for Fourier flexible forms and other seminonpara-
metric estimators have been developed, among others, by Andrews (1991), Eastwood
(1991), Eastwood and Gallant (1991) and Gallant and Souza (1991). None of these
considers the case where the estimators are restricted to be concave.
    The M, sets are typically defined by using results that allow one to characterize
any arbitrary function as the limit of an infinite sum of parametric functions. The
Fourier flexible form described above is one example of this. Each set M, is defined
as the set of functions obtained as the sum of the first T(N) terms in the expansion,
where T(N) is increasing in N and such that K(N)+ co as N + co.
    Some other types of expansions           that have been used to define parametric
approximations       are Hermite forms (Gallant and Nychka (1987)) power series
(Bergstrom (1985)) splines (Wahba (1990)), and Miintz-Szatz              type series (Barnett
and Yue (1988a, 1988b) and Barnett et al. (1991)).
    Splines are smooth functions that are piecewise polynomials.              Kimeldorf and
Wahba (1971) Utreras (1984, 1985), Villalobos and Wahba (1987) and Wong (1984)
studied the imposition        of monotonicity      and convexity   restrictions    on splines
estimators. Yatchew and Bos (1992) proposed using splines to estimate a consumer
demand function subject to the implications             of economic     theory on demand
functions.
    Barnett et al. (1991) impose concavity in a Miintz-Szatz      type series by requiring
that each term in the expansion          satisfies concavity. This method for imposing
concavity restrictions in series estimators was proposed by. McFadden (1985).




3.3.    Estimation   using weighted aoerage   methods

A weighted    average estimator,   7, for the function   f* in the model

       Y = f*(x) + s,
2548                                                                             R.L. Matzkin


where

       in       = min 7(x’),    TL(x) = maxrK(x’)
                  x’>x                  X’GX

and where fK is a kernel estimator for J The consistency of this estimator follows
from the consistency of the kernel estimator. No asymptotic distribution   for it is
known.
   A kernel estimator was also used in Matzkin (1991d) to obtain a smooth inter-
polation of a concavity restricted nonparametric   maximum likelihood estimator
and in Matzkin and Newey (1992) to estimate a homogenous      function in a binary
threshold crossing model. The Matzkin and Newey estimator possesses a known
asymptotic distribution.


4.     Nonparametric        tests using economic restrictions

The testing of economic hypotheses in parametric models suffers from drawbacks
similar to those of the estimation of parametric models; the conclusions depend on
the parametric specifications      used. Suppose, for example, that one is interested in
testing whether some given consumer demand data provide support for the classical
model of utility maximization.        The parametric approach would proceed by: first,
specifying parametric      structures    for the demand functions;       second, using the
demand data to estimate the parameters; and then testing whether the estimated
demand functions      satisfy the integrability     conditions.    But, if the integrability
conditions are not satisfied by the parametrically       estimated demand functions it is
not clear whether this is evidence against the utility maximization         model or against
the particular parametric structures chosen. In contrast, a nonparametric          test of the
utility maximization    model would use demand functions estimated nonparamet-
rically. In this case, rejection of the integrability        conditions   provides stronger
evidence against the utility maximization       model.


4.1.        Nomtatistical   tests

A large body of literature         dating back to the work of Samuelson        (1938) and
Houthakker      (1950) on Revealed Preference has developed nonparametric          tests for
the hypothesis that data is consistent with a particular choice model, such as the
choice made by a consumer or a firm. Most of these tests are nonstatistical.            The
data is assumed to be observed             without error and the models contain           no
unobservable     random terms. (One exception is the Axiom of Revealed Stochastic
Rationality    (McFadden        and Richter (1970, 1990)), where conditions      are given
characterizing    discrete choice probabilities   generated by a random utility function.)
In the nonstatistical      tests, an hypothesis is rejected if at least one in a set of
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                      2549


nonparametric      restrictions    is violated; the hypothesis is accepted otherwise. The
nonparametric      restrictions    used to test the hypotheses are typically expressed in
one of two different ways. Either they establish that a solution must exist for a
certain finite system of inequalities        whose coefficients are determined by the data;
or they establish that certain algebraic conditions must be satisfied by the data. For
example, the Strong Axiom of Revealed Preference is one of the algebraic conditions
that is used in these tests.
   To provide an example of such results, we state below Afriat’s (1967a) Theorem,
which is fundamental         in this literature. Afriat’s Theorem can be used to test the
consistency of demand data with the hypothesis that observed commodity bundles
are the maximizers of a common utility function over the budget sets determined
by observed prices of the commodities              and incomes of a consumer. If the data
correspond     to different individuals,      the conditions  of the theorem can be used to
test the existence of a utility function that is common to all of them.

Afriat’s Theorem          (I 967a)

Let {xi, pi, Ii}:’ I denote a set of N observations on commodity bundles xi, prices pi,
and incomes I’ such that Vi, p”~’ = I’. Then, the following conditions are equivalent.

  (i) There exists a nonsatiated    function V: [WK+ [wsuch that for all i = 1,. . . , N and
      all YEW, [pi.y < I’] *[V(y)      < I/(x’)].
 (ii) The data {x i, pi, Ii};= 1 satisfy Cyclical Consistency;   i.e., for all sequences
     {i,.i, k , . . . >I, 1)

     ~8.~      Q   zj,pk.xj    6    zk,....,pt.xrg      zJ]+.[Zi     dpi.xt].


(iii) There exist numbers              Ai > 0 and I/’ (i = 1,. . . , N) satisfying

     vi G vj + ;Ij$qxi             - xj),       i,j=l     ,..., N.

(iv) There exists a monotone increasing, concave and continuous                      function   V: [WK+ IR
     such that for all i = 1,...,Nandally~lRK,[pi.ydZi]=[V(y)<V(xi)].

    This result states that the data could have been generated by the maximization
of a common nonsatiated      utility function (condition (i)) if and only if that data satisfy
the set of algebraic conditions stated in condition (ii). In Figure 3, two observations
that do not satisfy Cyclical Consistency           are graphed. In these observations,
p’.x2 < 1’ = p’.x’ and p2.x’ < I2 = p2.x2.
   The theorem also states that a condition equivalent to Cyclical Consistency                is
that one can find numbers II’ > 0 and I/’ (i = 1, . . . , N) satisfying the linear inequali-
ties in (iii). For example, no such numbers can be found for the observations                in
Figure 3; since when p1.(x2 - x’) < 0, p2.(x’ - x2) < 0, and 1’, 2’ > 0, the inequalities
in (iii) imply that V’ - V2 < 0 and V2 - V’ < 0.
2550                                                                                   R.L. Matzkin




                                               Figure 3



    Finally, the equivalence between conditions (i) and (iv) implies that if one can find
a nonsatiated         function that is maximized at the observed xi’s then one can also find
a monotone increasing, concave, and continuous                  function that is maximized at the
observed xi’s,.
    Varian (1982) stated an alternative algebraic condition to Cyclical Consistency
and developed algorithms to test the conditions of the above theorem.
    Along similar lines to the above theorem, a large literature deals with non-
parametric tests for the hypothesis that a given set of demand data has been generated
from the maximization               of a utility function that satisfies certain shape restrictions.
For example, Afriat (1967b, 1972a, 1973,1981), Diewert (1973), Diewert and Parkan
(1985), and Varian (1983a) provided tests for the consistency of demand data with
additively separable, weakly separable and homothetic                    utility functions. Matzkin
and Richter (1991) provided a test for the strict concavity and strict monotonicity
of the utility function; and Chiappori and Rochet (1987) developed a test for the
consistency         of demand data with a strictly concave and infinitely differentiable
utility function. To provide an example of one such set of conditions, the algebraic
conditions         developed       by Chiappori      and Rochet are that (i) for all sequences
{i,j, k,. . . , I, Z>in { 1,. . . ,N)

       [$.xi~I/pk.Xj~p        ,....   , p’.x’ < Z’] = [I’ < pi.xf], and

(ii) for all i, j [xi = xj] * [pi = a$ for some c1> 01.
    Yatchew (1985) provided nonparametric           restrictions for demand data generated
by utility maximization         subject to budget sets that are the union of linear sets.
Matzkin (1991 b) developed restrictions for demand data generated subject to choice
sets that possess monotone and convex complement                and for choices that are each
supported by a unique hyperplane.
    Nonstatistical     nonparametric    tests for the hypothesis of cost minimization      and
profit maximization         have also been developed. See, for example, Afriat (1972b),
Diewert and Parkan (1979), Hanoch and Rothschild (1978), Richter (1985) and
Varian (1984). Suppose, for example, that (y’, pi} are a set of observations       on a vector
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                          2551


ofinputs and outputs,     y, and a vector of the corresponding     prices, P. Then, one of the
results in the above papers is that {yi,pi} is consistent with profit maximization
iffforalli,j=l,...,    N, pi.yi 2 p’.# (Hanoch and Rothschild (1978)).
    Some of the above mentioned tests have been used in empirical applications.           See,
for example, Landsburg         (198 l), McDonald     and Manser (1984) and Manser and
McDonald (1988).
    Nonparametric    restrictions have also been developed to test efficiency in produc-
tion. These tests, typically appearing under the heading of Data Envelope Analysis,
use data on the input and output vectors of different facilities (decision making units
or DMU’s) that are assumed to possess the same technology. Then, making assump-
tions about the technology, such as constant returns to scale, they determine the
set of vectors of inputs and outputs that are efficient. A DMU is not efficient if its
vector of input and output quantities is not in the efficiency set. See the paper by
Seiford and Thrall(l990)        for a survey of this literature.
    Recently, nonparametric        restrictions characterizing   data generated by models
other than the single agent optimization problem have been developed. Chiappori
(1988) developed a test for the Pareto optimality of the consumption allocation
within a household using data on aggregate household consumption and labor
supply of each household member. Brown and Matzkin (1993) developed a test for
the general equilibrium model, using data on market prices, aggregate endowments,
consumers’ incomes, and consumers’ shares of profits. Nonparametric restrictions
characterizing data consistent with other equilibrium models, such as various
imperfect competition models, have not yet been developed. Varian (1983b)
developed a test for the model of investors’ behavior.
   Some papers have developed statistical tests using the nonstatistical restrictions
of some of the tests mentioned above (Varian (1985, 1988), Epstein and Yatchew
(1985), Yatchew and Bos (1992) and Brown and Matzkin (1992), among others). As
we will see in the next subsection, the test developed by Yatchew and Bos (1992), in
particular, can be used with several of the above restrictions to obtain statistical
nonparametric tests for economic models.



4.2.   Statistical   tests


Using nonparametric methods similar to those used to estimate nonparametric
functions, it is possible to develop tests for the hypothesis that a nonparametric
regression function satisfies a specified set of nonparametric shape restrictions.
Yatchew and Bos (1992) and Gallant (1982), for example, present such tests.
   The consistent test by Yatchew and Bos is based on a comparison of the restricted
and unrestricted weighted sum of square errors. More specifically, suppose that the
model is specified by y = f*(x) + E,where ye Rq,XERK,EERq,x and E are independent,
E(E)= 0, and COV(E)= Z The null hypothesis is that f* EF c F, while the alternative
2552                                                                                               R.L. Matzkin


hypothesis is that ~*EF\F.     The Sobolev6 norms of the functions in the sets F and F
are uniformly bounded. The test proceeds as follows. First, divide the sample into
two independent     samples of the same size, T. Compute the estimators $. and s’,
using, respectively, the first and second samples, where


       si = min$Zi       [y’-f(x’)]‘Z-‘[y’-f(x’)]
            /SF

and

       s$ = min $Zi      [y’-f(x’)]‘Z-‘[y’-f(x’)].
            fEF

To transform        these minimization       problems    into finite dimensional     problems,
Yatchew and Bos (1992) use a method similar to the one described in Section 3.1.
They show that, under the null hypothesis, the asymptotic               distribution    of t, =
T112[$ - $1 is N(O,20), where u = Var E’Z ‘s. So, one can use standard statistical
tables to determine         whether the difference of the sum of squared errors is
significantly    different from zero. (This test builds on the work of Epstein and
Yatchew (1985), Varian (1985) and Yatchew (1992).)
    The Yatchew and Bos (1992) test can be used in conjunction         with the nonstatistical
nonparametric       tests described in the previous subsection. Suppose for example that
y’ denotes a vector of commodities           purchased by a consumer and xi denotes the
vector of prices pi and income I’ faced by the consumer when he or she purchased
y’. Assume that the observations          are independent     and for each i, y’ = f*(xi) + E,
where E satisfies the assumptions         made above. Then, as it is described in Yatchew
and Bos (1992), we can use their method to test whether the data is consistent with
the utility maximization       hypothesis. In particular, Afriat’s inequalities (in condition
(iii) in Afriat’s Theorem) can be used to calculate $. by minimizing the value of


       ii1 CY’-fil’Z     -‘CYi-“fil


with respect to Vi, A’, and            fi      (i =  1,. . . , T) subject to (i) the Afriat          inequali-
ties: I/‘< vj+Aj$.(fi-fj)              (i,j=      l,..., T), (ii) the budget constraints:            pi.fi = I’


  6The Sobolev norm is defined on a set of m times continuously       differentiable   functions    Cm by




where a = (a,,    , a,) is a vector of integers; Dqf(x) is the value resulting from differentiating f at X, a1
times with respect to x,, a2 times with respect to x2,.     , aK times with respect to x,; and Jai = max,ja,).
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                               2553


(i=   1,..., T), and (iii) inequalities  that guarantee that the Sobolev norm of the
function f is within specified bounds.
   Gallant (1982) presents a seminonparametric          method for testing whether a
regression function satisfies some shape restrictions,     such as linear homogeneity,
separability    and homotheticity.      The method proceeds by testing whether the
parametric approximation        used to estimate a nonparametric   function satisfies the
hypothesized restrictions.
   Following Gallant (1982), suppose that we are interested in testing the linear
homogeneity      of a cost function, c(p,u), where p = (pr,. . ,pJ is a vector of input
prices and u is the output. Let


      g(l, v) = In c
                        exp1,)...)P                  ~
                          a1



whereli=lnpi+lnaiandv=lnu+lna,+,.                (The ai’s are location parameters that
are determined‘from      the data.) Then, linear homogeneity    of the cost function c in
prices is equivalent to requiring that for all r, g(1+ ~1, v) = t + g(1, v). The approxi-
mation gN of g, given by

      gN(x 1t3)= h’x + X’CX +           1       uk   eik’x        XEW+’
                                      1kl-G T


satisfies these restrictions,    for C = Z,c,kk’,            if


       =f bj=l         and if   ak =0           and c,=O           when    5 kj ~0.
      j=l                                                                 j=l



 Linear homogeneity       is then tested by determining         whether these restrictions     are
satisfied. Gallant (1982) shows that by increasing the degree of approximation                (i.e.
the number       of parameters)       at a particular     specified rate, as the number         of
observations     increases, one can construct         tests that are asymptotically       free of
specification bias. That is, for any given level of significance, a, one can construct a
test statistic t, and a critical value cN such that if the true nonparametric           function
satisfies the null hypothesis then lim,,,        Pr(t, > cN) = ~1.
    Several other methods have been developed to test restrictions                of economic
theory on nonparametric         functions. Stoker (1989), for example, presents nonpara-
metric tests for additive constraints          on the first and second derivatives           of a
conditional    mean function        f*(x). These tests are based on weighted-average
derivatives estimators (Stoker (1986), Powell et al. (1989), Hardle and Stoker (1989)).
Linear homogeneity        and symmetry constraints         are examples of properties of f*
that can be tested using this method. (See also Lewbel(1991):)            Also using average
derivatives, Hlrdle et al. (1992) tested the positive definiteness           of the matrix of
aggregate income effects.
2554                                                                                         R.L. Ma&kin


   Hausman and Newey (1992) developed a test for the symmetry and negative slope
of the Hicksian (compensated)     demand. The test is derived from a nonparametric
estimator for a consumer surplus. Since symmetry of the Hicksian demand implies
that the consumer surplus is independent       of the price path used to calculate it,
estimates obtained    using different paths should converge to the same limit. A
minimum chi-square test is then developed using this idea.
   We should also mention in this section the extensive existent literature        that
deals with tests for the monotonicity   of nonparametric   functions in a wide variety
of statistical models. For a survey of such literature, we refer the reader to the
previously mentioned books of Barlow et al. (1972) and Robertson et al. (1988). (See
also Prakasa Rao (1983).)



5.     Conclusion

We have discussed the use of restrictions              implied by economic        theory in the
econometric     analysis of nonparametric         models. We described advancements          that
have been made on the theories of identification,             estimation,    and testing of non-
parametric models due to the use of restrictions of economic theory.
    First, we showed how restrictions implied by economic theory, such as shape and
exclusion restrictions, can be used to identify functions in economic models. We
demonstrated       this in generalized      regression   models, binary threshold        models,
discrete choice models, models of consumer demand and in systems of simultaneous
equations.
    Various ways of incorporating        economic shape restrictions into nonparametric
estimators    were discussed.      Special attention       was given to estimators        whose
feasibility depends critically on the imposition of shape restrictions. We described
technical results that can be used to develop new shape restricted nonparametric
estimators in a wide range of models. We also described seminonparametric                     and
weighted average estimators         and showed how one can impose restrictions                  of
economic theory on estimators obtained by these two methods.
    Finally, we have discussed some nonstatistical        and statistical nonparametric     tests.
The nonstatistical     tests are extensions of the basic ideas underlying          the theory of
Revealed Preference.        The statistical     tests are developed       using nonparametric
estimation methods.



References

Afriat, S. (1967a) “The Construction  of a Utility Function from Demand Data”, International Economic
   Review, 8, 66-77.
Afriat, S. (1967b) “The Construction    of Separable Utility Functions from Expenditure    Data”, mimeo,
   Purdue University.
Afriat, S. (1972a) “The Theory of International    Comparisons  of Real Income and Prices”, in: J.D. Daly,
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                                     2555


   ed., International Comparisons of Prices and Output. New York, National                        Bureau of Economic
   Research.
Afriat, S. (1972b) “Efficiency Estimates of Production            Functions”,    International Economic Review, 13,
   5688598.
Afriat, S. (1973) “On a System of Inequalities on Demand Analysis”, International Economic Review, 14,
   460-412.
Afriat, S. (1981) “On the Constructability              of Consistent     Price Indices between Several Periods
   Simultaneously”,      in: A. Deaton, ed., Essays in Applied Demand Analysis. Cambridge University Press:
   Cambridge.
Andrews. D.W.K. (1991) “Asymptotic              Normality    of Series Estimators      for Nonparametric       and Semi-
   parametric Regression Models”, Econometrica, 59(2), 3077345.
Asher. M.. H.D. Brunk. GM. Ewing. W.T. Reid and E. Silverman (1955) “An Empirical Distribution
   Function for Sampling with Incomplete Information”,             Annals of Mathematical Statistics, 26,641-647.
Balls, K.G. (1987) Inequality        Constrained     Nonparametric       Estimation,     Ph.D. Dissertation.     Carnegie
   Mellon University.
Barlow, R.E., D.J. Bartholomew,         J.M. Bremner and H.D. Brunk (1972) Statistical Znference under Order
   Restrictions, New York: John Wiley.
Barnett, W.A. and P. Yue (1988a) “The Asymptotically               Ideal Model (AIM)“, working paper.
Barnett, W.A. and P. Yue (1988b) “Semiparametric              Estimation of the Asymptotically         Ideal Model: The
    AIM Demand System”, in: G. Rhodes and T. Fornby, eds., Nonparametric and Robust Inference,
    Advances in Econometrics, Vol. 7. JAI Press: Greenwich, Connecticut,                2299252.
Barnett, W.A., J. Geweke, and P. Yue (1991) “Seminonparametric                           Bayesian    Estimation     of the
    Asymptotically     Ideal Model: The AIM Consumer Demand System”, in: W. Barnett, J. Powell and G.
   Tauchen, eds., Nonparametric and Semiparametric Methods in Econometrics and Statistics. Cambridge:
    Cambridge University Press.
Bergstrom, A.R. (1985) “The Estimation of Nonparametric                 Functions in a Hilbert Space”, Econometric
    Theory, 1, l-26.
Brown, D.J. and R.L. Matzkin (1991) “Recoverability                  and Estimation       of the Demand and Utility
    Functions of Traders when Demands are Unobservable”, mimeo, Cowles Foundation, Yale University.
Brown, D.J. and R.L. Matzkin (1992) “A Nonparametric                   Test for the Perfectly Competitive         Model”,
    mimeo, Northwestern        University.
Brown. D.J. and R.L. Matzkin (1993) “Walrarian                 Comparative      Statics”, Technical Report No. 57,
    Stanford Institute for Theoretical Economics.                    _
Brunk, H.D. (1970) “Estimation          of Isotonic Regression”, in: M.L. Puri, ed., Nonparametric Techniques
    in Statistical Inference. Cambridge       University Press: Cambridge,        177-197.
Chiappori, P.A. (1988) “Rational Household Labor Supply”, Econometrica, 56(l), 63-89.
Chiappori,     P. and J. Rochet (1987) “Revealed Preference and Differential Demand”, Econometrica, 55,
    687-691.
Cosslett, S.R. (1983) “Distribution-free        Maximum Likelihood Estimator of the Binary Choice Model”,
    Econometrica, 51(3), 765-782.
Cox, D.R. (1970) The Analysis of Binary Data. Methuen & Co Ltd.
Diewert, E. (1973) “Afriat and Revealed Preference Theory”, Review of Economic Studies, 40,419-426.
Diewert, E.W. and C. Parkan (1979) “Linear Programming                        Tests for Regularity       Conditions     for
    Production     Functions”, University of British Columbia.
Diewert, E.W. and C. Parkan (1985) “Tests for the Consistency                       of Consumer      Data”, Journal of
    Econometrics, 30, 127-147.
Dykstra, R.L. (1983) “An Algorithm for Restricted Least Squares Regression”, Journal of the American
   Statistical Association, 78, 8377842.
Eastwood,      B.J. (1991) “Asymptotic       Normality     and Consistency       of Semi-nonparametric        Regression
    Estimators Using an upward F Test Truncation              Rule”, Journal of Econometrics.
Eastwood, B.J. and A.R. Gallant (1991) “Adaptive Truncation               Rules for Seminonparametric         Estimators
   that Achieve Asymptotic Normality”,           Econometric Theory, 7, 307-340.
Epstein, L.G. and D.J. Yatchew (1985) “Non-Parametric             Hypothesis Testing Procedures and Applications
   to Demand Analysis”, Journal of Econometrics, 30, 150-169.
Finney, D.J. (1971) Probit Analysis, Cambridge University Press.
Friedman, J. and R. Tibshirani (1984) “The Monotone Smoothing of Scatter Plots”, Technometrics, 26,
   243-350.
2556                                                                                                  R.L. Matzkin


Gallant, A.R. (1981) “On the Bias in Flexible Functional             Forms and an Essentially Unbiased Form”,
   Journal ofEconometrics,      15, 211-245.
Gallant, A.R. (1982) “Unbiased Determination            of Production     Technologies”,    Journalof     Econometrics,
   20,2855323.
Gallant, A.R. (1987) “Identification    and Consistency in Seminonparametric             Regression”, in: T.F. Bewley,
   ed., Advances in Econometrics, Fifth World Congress, Volume 1. Cambridge University Press.
Gallant, A.R. and G.H. Golub (1984) “Imposing Curvature Restrictions on Flexible Functional Forms”,
   Journal of Econometrics, 26, 295-321.
Gallant,     A.R. and D.W. Nychka (1987) “Seminonparametric                   Maximum       Likelihood     Estimation”,
   Econometrica, 55, 363-390.
Gallant, A.R. and G. Souza (1991) “On the Asymptotic Normality of Fourier Flexible Form Estimates”,
   Journal of Econometrics, 50, 329-353.
Goldman, S.M. and P.A. Ruud (1992) “Nonparametric               Multivariate    Regression Subject to Monotonicity
   and Convexity Constraints”,       mimeo, University of California, Berkeley.
Han, A.K. (1987) “Nonparametric          Analysis of a Generalized       Regression Model: The Maximum Rank
   Correlation     Estimation”, Journal ofEconometrics,       35, 303-316.
Hanoch, G. and M. Rothschild (1978) “Testing the Assumptions of Production Theory: A Nonparametric
   Approach”, Journal of Political Economy, 80, 256275.
Hanson, D.L. and G. Pledger (1976) “Consistency                in Concave Regression”,        Annals of Statistics, 4,
   1038~1050.
Hanson, D.L., G. Pledger, and F.T. Wright (1973) “On Consistency in Monotonic                      Regression”, Annals
   of Statistics, 1, 401-421.
Hardle, W. and T.M. Stoker (1989) “Investigating               Smooth Multiple Regression by the Method of
   Average Derivatives”, Journal of the American Statistical Association, 84,986-995.
Hardle, W., W. Hildenbrand          and M. Jerison (1992) “Empirical           Evidence on the Law of Demand”,
   Econometrica, 59, 1525-1550.
Hausman,       J. and W. Newey (1992) “Nonparametric              Estimation     of Exact Consumer         Surplus and
   Deadweight       Loss”, mimeo, Department      of Economics, M.I.T.
Hausman, J.A. and D.A. Wise (1978) “A Conditional                 Probit Model of Qualitative         Choice: Discrete
   Decisions Recognizing Interdependence         and Heterogeneous       Preferences”, Econometrica, 46,403-426.
Hildreth, C. (1954) “Point Estimates of Ordinates             of Concave Functions”,        Journal of the American
   Statistical Association, 49, 598-619.
Horowitz,      J.L. (1992) “A Smoothed        Maximum       Score Estimator       for the Binary Choice Model”,
   Econometrica, 60, 5055531.
Hotz, V.J. and R.A. Miller (1989) “Conditional           Choice Probabilities      and the Estimation       of Dynamic
   Discrete Choice Models”, mimeo, University of Chicago and Carnegie Mellon University.
Houthakker,       H.S. (1950) “Revealed Preference and the Utility Function”, Economica, 17, 159-174.
Ichimura, H. (1993) “Semiparametric        Least Squares (SLS) and Weighted SLS Estimation of Single Index
   Models”, Journal of Econometrics, 58, 7 1 - 120.
Kadiyali, V. (1993) Ph.D. Thesis, Department          of Economics, Northwestern          University.
Kiefer, J. and J. Wolfowitz (1956) “Consistencv         of the Maximum Likelihood Estimator in the Presence
   of Infinitely Many Incidental Parameters”,         Annals of Mathematical Statistics, 27, 887-906.
Kimeldorf, G.S. and G. Wahba (1971) “Some Results on Tchebycheffian                   Splines Functions”, Journal of
   Mathematical Analysis and Applications, 33, 82-95.
Klein, R.W. and R.H. Spady (1993) “An Efficient Semiparametric              Estimator for Discrete Choice Models”,
   Econometrica, 61, 387-422.
Landsburg, SE. (1981) “Taste Change in the United Kingdom, 1900-1955”, Journal ofPolitical Economy,
   89,922104.
Lewbel, A. (1991) “Applied Consistent Tests of Nonparametric                 Regression and Density Restriction”,
   mimeo, Brandeis University.
Maddala, G.S. (1983) Limited-Dependent and Qualitatioe Variables in Econometrics, Cambridge University
   Press: Cambridge.
Mammen, E. (1991a) “Estimating         a Smooth Monotone Function”, Annals of Statistics, 19, 724-740.
Mammen, E. (1991 b) “Nonparametric           Regression under Qualitative Smoothness Assumptions”,                Annals
   ofStatistics,   19, 741-759.
Manser, M.E. and R.J. McDonald            (1988) “An Analysis of Substitution          Bias in Measuring       Inflation,
   1959985”, Econometrica, 56(4), 909-930.
Ch. 42: Restrictions of Economic Theory in Nonparametric Methods                                                     2557


Manski, C. (1975) “Maximum Score Estimation of the Stochastic Utility Model of Choice”, Journal of
  Econometrics, 3, 2055228.
Manski, C. (1985) ‘Semiparametric           Analysis of Discrete Response: Asymptotic                  Properties    of the
  Maximum Score Estimator”, Journal ofEconometrics, 27, 313-334.
Manski, C. (1988) “Identification       of Binary Response Models”, Journal of the American Statistical
  Association, 83, 7299738.
Mas-Colell,    A. (1977) “On the Recoverability             of Consumers’       Preferences    from Market Demand
  Behavior”, Econometrica, 45(6), 140991430.
Mas-Colell, A. (1978) “On Revealed Preference Analysis”, Review ofEconomic Studies, 45, 121-131.
Matzkin, R.L. (1986) Mathematical         and Statistical Inferences from Demand Data, Ph.D. Dissertation,
  University of Minnesota.
Matzkin, R.L. (1990a) “Estimation        of Multinomial        Models Using Weak Monotonicity              Assumptions”,
  Cowles Foundation       Discussion Paper No. 957, Yale University.
Matzkin, R.L. (1990b) “Least-concavity        and the Distribution-free       Estimation of Nonparametric         Concave
  Functions”, Cowles Foundation          Discussion Paper No. 958, Yale University.
Matzkin, R.L. (1990~) “Fully Nonparametric               Estimation     of Some Qualitative       Dependent       Variable
  Models Using the Method of Kernels”, mimeo, Cowles Foundation,                      Yale University.
Matzkin, R.L. (199la) “Semiparametric           Estimation      of Monotone      and Concave Utility Functions for
  Polychotomous       Choice Models”, Econometrica, 59, 1315-1327.
Matzkin. R.L. f199lb) “Axioms of Revealed Preference for Nonlinear Choice Sets”, Econometrica, 59,
   177991786.
Matzkin, R.L. (1991~) “A Nonparametric              Maximum        Rank Correlation       Estimator”,     in: W. Barnett,
  J. Powell and G. Tauchen,           eds., Nonparametric and Semiparametric Methods in Econometrics
  and Statistics. Cambridge: Cambridge University Press.
Matzkin, R.L. (1991d) “Using Kernel Methods to Smooth Concavity Restricted Estimators”,                            mimeo,
  Cowles Foundation,       Yale University.
Matzkin, R.L. (1992) “Nonparametric          and Distribution-Free         Estimation of the Binary Choice and the
  Threshold-Crossing      Models”, Econometrica, 60,239-270.
Matzkin,     R.L. (1993a) “Nonparametric          Identification     and Estimation       of Polychotomous          Choice
  Models”, Journal of Econometrics, 58, 137-168.
Matzkin,     R.L. (1993b) “Computation          and Operational          Properties    of Nonparametric         Concavity
  Restricted Estimators”, Northwestern          University.
Matzkin, R.L. (1994) “Identification     in Nonparametric        LDV Models”, mimeo, Northwestern             University.
Matzkin, R.L. and W. Newey (1992) “Kernel Estimation                      of a Structural     Nonparametric        Limited
  Dependent Variable Models”, mimeo.
Matzkin, R.L. and M.K. Richter (1991) “Testing Strictly Concave Rationality”,                     Journal of Economic
  Theory, S3,287-303.
McDonald, R.J. and M.E. Manser (1984) “The Effect of Commodity Aggregation                       on Tests of Consumer
  Behavior”, mimeo.
McFadden,      D. (1974) “Conditional     Logit Analysis of Qualitative          Choice Behavior”, in P. Zarembka,
  ed., Frontiers ofEconometrics, New York: Academic Press, 105-142.
McFadden, D. (1981) “Econometric          Models of Probabilistic        Choice”, in: C. Manski and D. McFadden,
  eds., Structural Analysis of Discrete Data with Econometric Applications. The MIT Press, 198-
  272.
McFadden,      D. (1985) “Specification      of Econometric         Models”, Presidential        Address, Fifth World
  Congress, mimeo, M.I.T.
McFadden,      D. and M.K. Richter (1970) “Stochastic           Rationality    and Revealed Stochastic Preference”,
  Department      of Economics, University of California, Berkeley, mimeo.
McFadden, D. and M.K. Richter (1990) “Stochastic Rationality and Revealed Stochastic Preference”, in:
  J.S. Chipman, D. McFadden and M.K. Richter, eds., Preference, Uncertainty, and Optima&y. Essays
  in Honor ofLeonid Hurwicz. Boulder: Westview Press, 161-186.
Mukarjee, H. (1988) “Monotone         Nonparametric        Regression”, The Annals ofStatistics, 16, 741-750.
Mukarjee, H. and S. Stern (1994) “Feasible Nonparametric                  Estimation    of Multiarnument        Monotone
  Functions”, Journal of the American Statistical Association, 89, No. 425, 77-80.                  -
Nadaraja, E. (1964) “On Regression Estimators”, Theory of Probability and its Applications, 9,157-l 59.
Nemirovskii,    AS., B.T. Polyak, and A.B. Tsybakov (1983) “Rates of Convergence                      of Nonparametric
  Estimates ofMaximum         Likelihood Type”, Problem peredachi informatsii, 21, 258-272.
2558                                                                                                        R.L. Ma&kin


Powell, J.L., J.H. Stock, and T.M. Stoker (1989) “Semiparametric                     Estimation   of Index Coefficients”,
   Econometrica, 57, 140331430.
Prakasa Rao, B.L.S. (1983) Nonparametric Functional Estimation, Academic Press.
Richter, M.K. (1985) “Theory of Profit”, mimeo, Department                    of Economics, University of Minnesota.
Robertson, T., F.T. Wright. and R.L. Dykstra (1988) Order Restricted Statistical Inference, John Wiley
   and Sons.
Roehrig, C.S. (1988) “Conditions             for Identification      in Nonparametric         and Parametric      Models”,
   Econometrica, 56(2), 4333447.
Royall, R.M. (1966) A Class of Nonparametric                Estimators      of a Smooth Regression Function. Ph.D.
   Thesis, Stanford University.
Samuelson, P.A. (1938) “A Note on the Pure Theory of Consumer Behavior”, Economica, 5,61-71.
Seiford, L.M. and R.M. Thrall(l990)          “Recent Development in DEA”, Journal ofEconometrics, 46,7-38.
Stoker, T.M. (1986) “Consistent Estimation of Scaled Coefficients”, Econometrica, 54, 1461-1481.
Stoker, T.M. (1989) “Tests of Additive Derivatives Constraints”,               Reuiew ofEconomic Studies, 56,535-552.
Strauss, D. (1979) “Some Results on Random Utility Models”, Journal OfMathematical Psychology, 20,
   35552.
Thompson,       T.S. (1989) “Identification     of Semiparametric        Discrete Choice Models”, Discussion Paper
   No. 249, Center for Economic Research, University of Minnesota.
Utreras, F. (1984) “Positive Thin Plate Splines”, CAT Rep. No. 68, Dept. of Math., Texas A & M
   Univ.
Utreras, F. (1985) “Smoothing Noisy Data Under Monotonicity                    Constraints: Existence, Characterization,
   and Convergence        Rates”, Numerische Mathematik, 47, 61 l-625.
Varian, H. (1982) “The Nonparametric             Approach to Demand Analysis”, Econometrica, 50(4), 9455974.
Varian, H. (1983a) “Nonparametric             Tests of Consumer          Behavior”, Review of Economic Studies, 50,
   999110.
Varian, H. (1983b) “Nonparametric             Tests of Models of Investor Behavior”, Journal of Financial and
   Quantitative Analysis, 18, 269-278.
Varian, H. (1984) “The Nonparametric           Approach to Production Analysis”, Econometrica, 52,579-597.
Varian, H. (1985) “Non-Parametric           Analysis of Optimizing Behavior with Measurement               Error”, Journal
   of Econometrics, 30.
Varian, H. (1988) “Goodness-of-Fit         in Demand Analysis”, CREST Working Paper No. 89911, University
   of Michigan.
Villalobos, M. and G. Wahba (1987) “Inequality                 Constrained       Multivariate   Smoothing     Splines with
   Application      to the Estimation       of Posterior      Probabilities”,     Journal of the American Statistical
   Association, 82, 239-248.
Wahba, G. (1990) Spline Modelsfor Obseruational Data, CBMS-NSG                            Regional Conference Series in
   Applied Mathematics,          No. 59, Society for Industrial and Applied Mathematics.
Wald, A. (1949) “Note on the Consistency                  of the Maximum            Likelihood    Estimator”,    Annals of
   Mathematical Statistics, 20, 595-601.
Wang, Y. (1992) Nonparametric               Estimation     Subject to Shape Restrictions,            Ph.D. Dissertation,
   Department      of Statistics, University of California, Berkeley.
Watson, G.S. (1964) “Smooth Regression Analysis”, Sankhya Series A, 26, 359-372.
Wong, W.H. (1984) “On Constrained               Multivariate     Splines and Their Approximations”,            Numerische
   Mathematik, 43, 141-152.
Wright, F.T. (1982) “Monotone           Regression Estimates for Grouped Observations”,               Annals of Statistics,
   lo,2788286.
Yatchew, A.J. (1985) “A Note on Nonparametric                 Tests of Consumer Behavior”, Economic Letters, 18,
  45-48.
Yatchew, A.J. (1992) “Nonparametric            Regression Tests Based on Least Squares”, Econometric Theory,
   8,435-451.
Yatchew, A. and L. Bos (1992) “Nonparametric                  Tests of Demand Theory”, mimeo, Department                  of
  Economics, University ‘of Toronto.
Yellott, J.I. (1977) “The Relationship Between Lute’s Choice Axiom, Thurstone’s Theory of Comparative
  Judgement,      and the Double Exponential            Distribution”,     Journal of Mathematical Psychology,           15,
   109-144.



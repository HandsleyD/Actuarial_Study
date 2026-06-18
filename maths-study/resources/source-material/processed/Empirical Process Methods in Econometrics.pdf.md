---
normalized_id: shared-pdf-reference-empirical-process-methods-in-econometrics
exam_code: SHARED
material_scope: empirical process methods in econometrics.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Empirical Process Methods in Econometrics.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-empirical-process-methods-in-econometrics

Chapter 37


EMPIRICAL PROCESS                                  METHODS
IN ECONOMETRICS

DONALD        W.K. ANDREWS’

Co&s      Foundation Yale University




Contents

Abstract                                                                                                   2248
1. Introduction                                                                                            2248
2. Weak convergence                      and stochastic         equicontinuity                             2249
3. Applications                                                                                            2253
       3.1.   Review of applications                                                                       2253
       3.2.   Parametric      M-estimators       based on non-differentiable       criterion   functions    2255
       3.3.   Tests when a nuisance          parameter      is present   only under the alternative        2259
       3.4.   Semiparametric       estimation                                                               2263
4.     Stochastic         equicontinuity          via symmetrization                                       2267
       4.1.   Primitive     conditions     for stochastic    equicontinuity                                2267

       4.2.   Examples                                                                                      2273
5. Stochastic             equicontinuity          via bracketing                                           2276
6. Conclusion                                                                                              2283
Appendix                                                                                                   2284
References                                                                                                 2292




   ‘This paper is a substantial  revision of the first part of the paper Andrews (1989). I thank D.
McFadden    for comments and suggestions concerning this revision. I gratefully acknowledge   research
support from the Alfred P. Sloan Foundation  and the National Science Foundation   through a Research
Fellowship and grant nos. SES-8618617, SES-8821021, and SES-9121914 respectively.


Handbook of Econometrics, Volume IV, Edited by R.F. En&                        and D.L. McFadden
0 1994 Elsevier Science B. V. All rights reserved
2248                                                                               D. W.K. Andrew




Abstract

This paper provides an introduction           to the use of empirical process methods in
econometrics.    These methods can be used to establish the large sample properties
of econometric     estimators      and test statistics. In the first part of the paper, key
terminology    and results are introduced and discussed heuristically. Applications           in
the econometrics      literature are briefly reviewed. A select set of three classes of
applications   is discussed in more detail.
   The second part of the paper shows how one can verify a key property called
stochastic equicontinuity.       The paper takes several stochastic equicontinuity      results
from the probability       literature, which rely on entropy conditions        of one sort or
another, and provides primitive sufficient conditions             under which the entropy
conditions hold. This yields stochastic equicontinuity        results that are readily applic-
able in a variety of contexts. Examples are provided.



1.     Introduction

This paper discusses the use of empirical process methods in econometrics.               It begins
by defining, and discussing heuristically,         empirical processes, weak convergence,
and stochastic equicontinuity.        The paper then provides a brief review of the use of
empirical process methods in the econometrics             literature. Their use is primarily in
the establishment      of the asymptotic     distributions      of various estimators and test
statistics.
    Next, the paper discusses three classes of applications of empirical process methods
in more detail. The first is the establishment        of asymptotic normality of parametric
M-estimators     that are based on non-differentiable        criterion functions. This includes
least absolute deviations       and method of simulated moments estimators,                among
others. The second is the establishment        of asymptotic normality of semiparametric
estimators that depend on preliminary            nonparametric        estimators. This includes
weighted least squares estimators of partially linear regression models and semi-
parametric    generalized method of moments estimators of parameters                  defined by
conditional    moment restrictions, among others. The third is the establishment                 of
the asymptotic     null distributions    of several test statistics that apply in the non-
standard testing scenario in which a nuisance parameter appears under the alter-
native hypothesis, but not under the null. Examples of such testing problems include
tests of variable relevance in certain nonlinear models, such as models with Box-
Cox transformed       variables, and tests of cross-sectional          constancy   in regression
models.
   As shown in the first part of the paper, the verification of stochastic equiconti-
nuity in a given application is the key step in utilizing empirical process results. The
Ch. 37: Empirical Process   Methods   in Econometrics                                                  2249


second part of the paper provides methods for verifying stochastic equicontinuity.
Numerous      results are available in the probability       literature concerning     sufficient
conditions for stochastic equicontinuity      (references are given below). Most of these
results rely on some sort of entropy condition. For application to specific estimation
and testing problems, such entropy conditions            are not sufficiently primitive. The
second part of the paper provides an array of primitive conditions                under which
such entropy conditions      hold, and hence, under which stochastic equicontinuity
obtains. The primitive conditions      considered here include: differentiability         condi-
tions, Lipschitz conditions, LP continuity       conditions,     Vapnikkcervonenkis       condi-
tions, and combinations       thereof. Applications      discussed in the first part of the
paper are employed to exemplify the use of these primitive conditions.
   The empirical process results discussed here apply only to random variables (rv’s)
that are independent      or m-dependent    (i.e. independent       beyond lags of length m).
There is a growing literature on empirical processes with more general forms of
temporal dependence. See Andrews (1993) for a review of this literature.
   The remainder      of this paper is organized        as follows: Section 2 defines and
discusses empirical processes, weak convergence,             and stochastic equicontinuity.
Section 3 gives a brief review of the use of empirical process methods in the econo-
metrics literature and discusses three classes of applications         in more detail. Sections
4 and 5 provide stochastic equicontinuity        results of the paper. Section 6 provides a
brief conclusion. An Appendix contains proofs of results stated in Sections 4 and 5.



2.   Weak convergence and stochastic equicontinuity

We begin by introducing      some notation.    Let ( Wr,: t G T, T 2 l} be a triangular
array of w-valued  rv’s defined on a probability space (0, d, P), where w is a (Bore1
measurable) subset of Rk. For notational    simplicity, we abbreviate W,, by W, below.
Let .Y be a pseudometric space with pseudometric        p.* Let

      A! = {m(~,z):z&~-)                                                                              (2.1)

be a class of R”-valued functions            defined    on -ly- and indexed       by KEY. Define         an
empirical process vT(.) by


      VT(~)= it          Cm(W,, r) - Em( W,, 7)]         for    r~r-,                                 (2.2)
             Jr1


   ‘That is, F is a metric space except that p(~, , TV)= 0 does not necessarily imply that r1 = r2. For
example, the class of square integrable functions on [0, 11 with p(s,,r,)   = [lA(T,(W)   - T2(W))Zdw]1’2.is

a pseudometric    space, but not a metric space. The reason is that if rr(w) equals T?(W) for all w except
one point, say, then ~(5,. T2) = 0, but TV   # TV.   In order to handle sets Y that are function spaces
of the above type, we allow F to be a pseudometric  space rather than a (more restrictive) metric space.
2250                                                                          D.W.K.   Andrew



where CT abbreviates      xF= i. The empirical process vT(.) is a particular      type of
stochastic process. If Y = [0,11, then vT(.) is a stochastic process on [0,11. For
parametric applications    of empirical process theory, Y is usually a subset of RP.
For semiparametric     and nonparametric,applications,       Y is often a class of func-
tions. In some other applications,     such as chi-square diagnostic test applications,
.q is a class of subsets of RP.
   We now define weak convergence of the sequence                of empirical   processes
{vT(.): T 2 l} to some stochastic process v(.) indexed by elements z of Y. (v(.) may
or may not be defined on the same probability          space (a,,&‘, P) as vT(.) VT> 1.)
Let * denote weak convergence of stochastic processes, as defined below. Let %
denote convergence     in distribution   of some sequence of rv’s. Let 1).1)denote the
Euclidean norm. All limits below are taken as T-+ 00.


Definition of weak convergence


       v~(.)=-v(.)   if   E*f(v,(.))+Ef(v(.))     VfWB(F_)),

where B(Y) is the class of bounded R”-valued functions on Y (which includes all
realizations  of vr(.) and v(.) by assumption),    d is the uniform metric on B(Y) (i.e.
d(b,, b2) = sup,,r 11 b,(z) - b2(7) II), and @(B(S)) is the class of all bounded   uni-
formly continuous      (with respect to the metric d) real functions on B(Y).


In the definition, E* denotes outer expectation. Correspondingly,            P* denotes outer
probability    below. (It is used because it is desirable not to require vr(.) to be a
measurable random element of the metric space (B(Y), d) with its Bore1 o-field, since
measurability      in this context can be too restrictive. For example, if (B(Y), d) is the
space of functions D[O, l] with the uniform metric, then the standard empirical
distribution    function is not measurable     with respect to its Bore1 a-field. The limit
stochastic process v(.), on the other hand, is sufficiently well-behaved in applications
that it is assumed to be measurable        in the definition.)
   The above definition is due to HoffmanJorgensen.            It is widely used in the recent
probability    literature, e.g. see Pollard (1990, Section 9).
   Weak convergence is a useful concept for econometrics,             because it can be used
to establish the asymptotic distributions       of estimators and test statistics. Section 3
below illustrates how.
   For now, we consider sufficient conditions for weak convergence. In many appli-
cations of interest, the limit process v(.) is (uniformly           p) continuous   in t with
probability    one. In such cases, a property of the sequence of empirical processes
{vr(.): T 2 11, called stochastic equicontinuity, is a key member of a set of sufficient
conditions for weak convergence. It also is implied by weak convergence (if the limit
process v(.) is as above).
Ch. 37:    Empirical      Process     Methods    in Econometrics                                        2251

Dejnition       of stochastic            equicontinuity

{I+(.): T> l} IS
              t s t oc h as t’KU11y equicontinuous                 if VE> 0 and q > 0,36 > 0 such that



      T+m
          lim P
          -[
                                SUP
                       T,.?2E~:&J(r,,rZ)<d
                                                llV&1)-M~2)II      >II
                                                                         1
                                                                         -Cc.                          (2.3)


     Basically, a sequence of empirical processes iv,(.): T > l} is stochastically        equi-
continuous if vT(.) is continuous in z uniformly over Y at least with high probability
 and for T large. Thus, stochastic equicontinuity          is a probabilistic and asymptotic
 generalization     of the uniform continuity    of a function.
     The concept of stochastic equicontinuity      is quite old and appears in the literature
 under various guises. For example, it appears in Theorem 8.2 of Billingsley (1968,
p. 55), which is attributed to Prohorov (1956), for the case of 9 = [O, 11. Moreover,
 a non-asymptotic       analogue of stochastic equicontinuity        arises in the even older
 literature on the existence of stochastic processes with continuous            sample paths.
     The concept of stochastic equicontinuity        is important   for two reasons. First, as
mentioned       above, stochastic equicontinuity      is a key member of a set of sufficient
conditions for weak convergence. These conditions are specified immediately below.
 Second, in many applications      it is not necessary to establish a full functional limit
(i.e. weak convergence) result to obtain the desired result - it suffices to establish
just stochastic equicontinuity.     Examples of this are given in Section 3 below.
     Sufficient conditions for weak convergence are given in the following widely used
 result. A proof of the result can be found in Pollard (1990, Section 10) (but the basic
result has been around for some time). Recall that a pseudometric              space is said to
be totally bounded if it can be covered by a finite number of c-balls VE> 0. (For
example, a subset of Euclidean space is totally bounded if and only if it is bounded.)

Proposition

If (i) (Y,p) is a totally bounded pseudometric           space, (ii) finite dimensional          (fidi)
convergence holds: V finite subsets (z,, . . . , T_,)of Y-, (v,(z,)‘, . . . , ~~(7,)‘)’ converges in
distribution,  and (iii) {v*(.): T 3 l} is stochastically        equicontinuous,          then there
exists a (Borel-measurable    with respect to d) B(F)-valued            stochastic process. v(.),
whose sample paths are uniformly p continuous               with probability        one, such that
VT(.)JV(.).
    Conversely, if v=(.)*v(.)                   for v(.) with the properties    above   and (i) holds, then
(ii) and (iii) hold.

   Condition   (ii) of the proposition    typically is verified by applying a multivariate
central limit theorem (CLT) (or a univariate CLT coupled with the Cramer-Wold
device, see Billingsley (1968)). There are numerous CLTs in the literature that cover
different configurations    of non-identical     distributions  and temporal dependence.
2252                                                                                     D. W.K. Andrews


   Condition      (i) of the proposition        is straightforward       to verify if Y is a subset of
Euclidean     space and is typically a by-product                  of the verification    of stochastic
equicontinuity       in other cases. In consequence,            the verification of stochastic equi-
continuity is the key step in verifying weak convergence (and, as mentioned above,
is often the desired end in its own right). For these reasons, we provide further
discussion of the stochastic equicontinuity              condition here and we provide methods
for verifying it in several sections below.
    Two equivalent          definitions     of stochastic      equicontinuity      are the following:
(i) {v,(.): T 3 1) is stochastically         equicontinuous       if for every sequence of constants
(6,) that converges to zero, we have SUP~(,~,~~)~~~IV~(Z~)- vT(rZ)l 30                             where
“A”      denotes convergence in probability,              and (ii) {vT(.): vT 3 l} is stochastically
equicontinuous         if for all sequences of random elements {Z^iT} and {tZT} that
satisfy p(z^,,,f,,)      LO, we have v,(Q,,) - v,(z^,,) L 0. The latter characterization
of stochastic equicontinuity           reflects its use in the semiparametric         examples below.
Allowing {QiT} and {tZT} to be random in the latter characterization                        is crucial. If
only fixed sequences were considered, then the property would be substantially
weaker-it       would not deliver the result that vT(z*,,)- vr.(fZT) 30                        ~ and its
proof would be substantially              simpler - the property would follow directly from
Chebyshev’s inequality.
   To demonstrate the plausibility of the stochastic equicontinuity                  property, suppose
JZ contains only linear functions, i.e. ~2’ = {g: g(w) = w’t for some FERN} and p is
the Euclidean metric. In this simple linear case,




         < E,                                                                                       (2.4)

 where the first inequality holds by the CauchyySchwarz           inequality and the second
 inequality  holds for 6 sufficiently small provided (l/J?)x            T( W, - E IV,) = O,( 1).
Thus, Iv,(.): T 3 l} is stochastically       equicontinuous        in this case if the rv’s
 { W, - E W,: t < T, T 2 l} satisfy an ordinary CLT.
    For classes of nonlinear functions, the stochastic equicontinuity         property is sub-
stantially more difficult to verify than for linear functions. Indeed, it is not difficult
to demonstrate    that it does not hold for all classes of functions J?‘. Some restrictions
on .k are necessary ~ ~2! cannot be too complex/large.
    To see this, suppose { W,: t d T, T 3 l} are iid with distribution       P, that is abso-
lutely continuous    with respect to Lebesgue measure and J$? is the class of indicator
Ch. 37: Empirical Process Methods in Econometrics                                  2253


functions of all Bore1 sets in %‘“.Let z denote a Bore1 set in w and let Y denote
the collection of all such sets. Then, m(w, t) = l(w~r). Take p(r,, z2) = (J(m(w, ri) -
m(w, rz))*dPl(w)) ‘I* . For any two sets zl, r2 in Y that have finite numbers of
elements, v,(zj) = (l/$)C~l(W,~t~)       and p(r1,z2) = 0, since P1(WI~tj) = 0 forj =
1,2. Given any T 2 1 and any realization o~Q, there exist finite sets tlTo and
rZTwin Y such that W,(o)~r,,~ and IVJo)$r,rwVt d T, where W,(o) denotes the
value of W, when o is realized. This yields vr-(riTw) = @, v~(~*~J = 0, and
supP(rl,Q)<dlvT(zl) - vr(~J\ 3 $?. In consequence, (v~(.): T 2 l} is not stochasti-
tally equicontinuous. The class of functions & is too large.
   In Sections 4 and 5 below, we discuss various entropy conditions that restrict
the complexity/size of the class of functions J& sufficiently that stochastic equi-
continuity holds. Before doing so, however, we illustrate how weak convergence
and stochastic equicontinuity results can be fruitfully employed in various econo-
metric applications.


3.     Applications

3.1.    Review of applications

In this subsection, we briefly describe a number of applications of empirical process
theory that appear in the econometrics literature. There are numerous others that
appear in the statistics literature, see Shorack and Wellner (1986) and Wellner
(1992) for some references.
   The applications and use of empirical process methods in econometrics are fairly
diverse. Some applications use a full weak convergence result; others just use a
stochastic equicontinuity result. Most applications use empirical process theory for
normalized sums of rv’s, but some use the corresponding theory for U-processes,
see Kim and Pollard (1990) and Sherman (1992). The applications include estimation
problems and testing problems. Here we categorize the applications not by the type
of empirical process method used, but by area of application. We consider estimation
first, then testing.
   Empirical process methods are useful in obtaining the asymptotic normality of
parametric optimization estimators when the criterion function that defines the
estimator is not differentiable. Estimators that fit into this category include robust
M-estimators (see Huber (1973)). regression quantiles (see Koenker and Bassett
(1978)), censored regression quantiles (see Powell (1984, 1986a)), trimmed LAD
estimators (see Honore (1992)), and method of simulated moments estimators (see
McFadden (1989) and Pakes and Pollard (1989)). Huber (1967) gave some asymp-
totic normality results for a class of M-estimators of the above sort using empirical
process-like methods. His results have been utilized by numerous econometricians,
e.g. see Powell (1984). Empirical process methods were utilized explicitly in several
subsequent papers that treat parametric estimation with non-differentiable criterion
2254                                                                                   D. WK.   Andrews


functions, see Pollard (1984, 1985) McFadden (1989), Pakes and Pollard (1989) and
Andrews (1988a). Also, see Newey and McFadden                     (1994) in this handbook.           In
Section 3.2 below, we illustrate one way in which empirical process methods can be
exploited for problems of this sort.
   Empirical process methods also have been utilized in the semiparametric                    econo-
metrics literature. They have been used to establish the asymptotic normality (and,
in a few cases, other limiting distributions)       of various estimators. References include
Horowitz (1988, 1992), Kim and Pollard (1990), Andrews (1994a), Newey (1989),
White and Stinchcombe           (1991), Olley and Pakes (1991), Pakes and Olley (1991),
Ait-Sahalia (1992a, b), Sherman (1993,1994) and Cavanagh                   and Sherman (1992).
Kim and Pollard (1990) establish the asymptotic                  (non-normal)      distribution       of
Manski’s (1975) maximum score estimator for binary choice models using empirical
process theory for U-statistics. Horowitz (1992) establishes the asymptotic normal
distribution    of a smoothed version of the maximum                 score estimator.      Andrews
(1994a), Newey (1989), Pakes and Olley (1991) and Ait-Sahalia                     (1992b) all use
empirical process theory to establish the asymptotic normality of classes of semi-
parametric     estimators that employ nonparametric             estimators in their definition.
Andrews (1994a), Newey (1989) and Pakes and Olley (1991) use stochastic equi-
continuity results, whereas Ait-Sahalia (1992b) utilizes a full weak convergence result.
Sherman (1993,1994) and Cavanagh               and Sherman (1992) establish asymptotic
normality of a number of semiparametric           estimators using empirical process theory
of U-statistics. Section 3.3 below gives a heuristic description of one way in which
empirical process methods can be used for semiparametric                  estimation     problems.
   A third area of application of empirical process methods to estimation problems
is that of nonparametrics.        Gallant (1989) and Gallant and Souza (1991) use these
methods to establish the asymptotic normality of certain seminonparametric                         (i.e.
nonparametric      series) estimators. In their proof, empirical process methods are used
to establish that a law of large numbers holds uniformly over a class of functions
that expands with the sample size. Andrews (1994b) uses empirical process methods
to show that nonparametric         kernel density and regression estimators are consistent
when the dependent         variable or the regressor variables are residuals from some
preliminary estimation procedure (as often occurs in semiparametric                applications).
   Empirical process methods also have been utilized very effectively in justifying
the use of bootstrap confidence intervals. References include Gine and Zinn (1990),
Arcones and Gine (1992) and Hahn (1995).
   Next, we consider testing problems. Empirical process methods have been used
in the literature to obtain the asymptotic null (and local alternative) distributions
of a wide variety of test statistics. These include test statistics for chi-square
diagnostic tests (see Andrews (1988b, c)), consistent model specification                  tests (see
Bierens (1990), Yatchew (1992), Hansen (1992a), De Jong (1992) and Stinchcombe
and White (1993)), tests of nonlinear          restrictions   in semiparametric        models (see
Andrews (1988a)), tests of specification of semiparametric             models (see Whang and
Andrews (1993) and White and Hong (1992)), tests of stochastic dominance                          (see
Ch. 37: Empirical Process Methods in Econometrics                                         2255


Klecan et al. (1990), and tests of hypotheses for which a nuisance parameter appears
only under the alternative (see Davies (1977,1987), Bera and Higgins (1992), Hansen
(1991, 1992b), Andrews and Ploberger (1994) and Stinchcombe and White (1993).
For tests of the latter sort, Section 3.4 below describes how empirical process
methods are utilized.
   Last, we note that stochastic equicontinuity can be used to obtain uniform laws
of large numbers that can be employed in proofs of consistency of extremum
estimators. For example, see Pollard (1984, Chapter 2), Newey (1991) and Andrews
(1992).


3.2.    Parametric       M-estimators   based on non-d@erentiable   criterion functions

Here we give a heuristic description of one way in which empirical process theory
can be used to establish the asymptotic normality of parametric M-estimators (or
GMM estimators) that are based on criterion functions that are not differentiable
with respect to the unknown parameter. This treatment follows that of Andrews
(1988a) most closely (in which a formal statement of assumptions and results can
be found). Other references are given in Section 3.1 above.
   Suppose ? is a consistent estimator of a parameter ~,,ER~ that satisfies a set of
p first order conditions

       m,(e) = 0                                                                          (3.1)
at least with probability that goes to one as T-+ CO, where

       tiT(7) =   -$tjm( W,, t).
                     1
                                                                                          (3.2)

Here, W, is an observed vector of random variables and m( ., .) is a known RP-valued
function. Examples are given below.
   If m( W,, z) is differentiable in z, one can establish the asymptotic normality of
5^by expanding fiti,          about t0 using element by element mean value expansions.
This is the standard way of establishing asymptotic normality of f (or, more
precisely, of fi(z^ - to)). In a variety of applications, however, the function m(W,, T)
is not differentiable in 5, or not even continuous, due to the appearance of a sign
function, an indicator function or a kinked function, etc. Examples are listed above
and below. In such cases, one can still establish asymptotic normality of t^provided
Em(W,, 2) is differentiable in t. Since the expectation operator is a smoothing
operator, Em( W,, z) is often differentiable in t even though m( W,, t) is not.
   One method is as follows. Let


       6$(t)   = $ $ Em( W,, t).                                                          (3.3)
2256                                                                                   D. WK.   Andrew


To establish asymptotic normality off, one can replace (element by element) mean
value expansions   of +(Z*) about r0 by corresponding   mean value expansions    of
fi+(rO) about d and then use empirical process methods to establish the limit
distribution of the expansion. In particular, such mean value expansions   yield

       0 = J%qT,)      = J!%;(Q)- apii;(qyaT~JT(f                - TV),

where the first equality holds by the population       orthogonality  conditions   (by
assumption)    and 7 lies on the line segment joining t* and r,, (and takes different
values in each row of a[Krr(?)]/ar’).    Under suitable assumptions     on {m(kV,, r):
t < T, T >, l}, one obtains




(For example, if the rv’s         W, are identically      distributed, it suffices to have
a[Em( W,, z,)]/at’ continuous     in r at r,,.) Thus, provided M is nonsingular,   one has


       fi(z^- TO)= (M 1+ op(l)@%*,(t).                                                             (3.5)

(Here, o,(l) denotes   a term that converges         in probability    to zero as T + co.)
   Now, the asymptotic     distribution   of fi(s*     - re) is obtained          by using empirical
process methods    to determine   the asymptotic      distribution    of fitiT(         We write


       -   fitiT   = [J’rrn,(Q- @ii;(t)] - JTrn,(t*)
                   = tvT@) - vT(TO)) + vTh,) - fifi,(t).                                          (3.6)

The third term on the right hand side (rhs) of (3.6) is o,(l) by (3.1). The second
term on the rhs of (3.6) is asymptotically normal by an ordinary CLT under suit-
able moment and temporal dependence assumptions,       since vr(t,,) is a normalized
sum of mean zero rv’s. That is, we have


                                                                                                  (3.7)


where S = lim,, m varC(lIJT)CTm(w,,~,)l.           F or example, if the rv’s W, are inde-
pendent and identically distributed (iid), it suffices to have S = Em( W,, z,)m( W,, to)
well-defined.)
   Next, the first term on the rhs of (3.6) is o,(l) provided           {vT(.): T 2 l> is
stochastically  equicontinuous   and Z Lro.     This follows because given any q > 0
and E > 0, there exists a 6 > 0 such that
Ch. 37: Empirical Process Methods              in Econometrics                                                        2257



      lim P(I vT(f)- vTh)l > d
     T-ra,
         d lim P( 1VT(t) - vT(ro)l > q, p(t, To) d 6) + lim P(p(z*, rO) > 6)
              T-rm                                                                   T+OZ



         d    lim P             sup            1vT(z)    -   vT(zO)/   >   q
              -(
              T-CC       re.F:p(r,ro)<     d                                   >


         <    6                                                                                                      (3.8)

where the second inequality uses z^A t0 and the third uses stochastic                                   equicontinuity.
  Combining    (3.5))(3.8) yields the desired result that


     JT(r*- zo) L N(O,M-'S(M-I)')                                  as T+           co.                               (3.9)

It remains to show how one can verify the stochastic equicontinuity of (VT(.): T 2 l}.
This is done in Sections 4 and 5 below. Before doing so, we consider several
examples.


Example 1

M-estimators    for standard, censored and truncated     linear regression model. In
the models considered here, {(K, X,): t d T} are observed rv’s and {(Y:, XT): t d T}
are latent rv’s. The models are defined by

      Yf = xye, + u,,                      t=l,...,T,

     linear       regression     (LR):                  (YE X,) = (Y:, X:)7
     censored        regression          (CR):          (Y,, X,) = (Y: 1(Y:              2 Cl), Xf),

     truncated        regression         (TR):          (q, X,) = (Y: 1(Y: 2 0), XT 1(Y:               2 0)).      (3.10)

Depending upon the context,                      the errors (U,} may satisfy any one of a number of
assumptions   such as constant                    conditional   mean or quantile for all t or symmetry
about zero for all t. We need                    not be specific for present purposes.
   We consider M-estimators                      ? of r,, that satisfy the equations


     O=~ci/l(r,-X;r*)~,(w,,~)X*                                                                                    (3.11)


with probability + 1 as T-, co, where W, = (Y,, Xi,‘. Such estimators                                    fit the general
framework of (3.1)-(3.2) with

     m(w, r) = 11/i(y - x’~)$~(w, r)x,                       where w = (y, x’)‘.                                   (3.12)
2258                                                                                     D. WK. Andrews


   Examples of such M-estimators        in the literature include the following:
   (a) LR model: Let $r(z) = sgn(z) and tiz = 1 to obtain the least absolute
deviations (LAD) estimator.       Let $r(z) = q - l(y - x’~ < 0) and $* = 1 to obtain
Koenker and Bassett’s (1978) regression quantile estimator for quantile qE(O, 1).
Let rc/1(z) = (z A c) v (- c) (where A and v are the min and max operators
respectively) and $z = 1 to obtain Huber’s (1973) M-estimator         with truncation at
 + c. Let $t (z) = 1q - 1(y - x’t < O)l and $z(w, r) = y - x’s to obtain Newey and
Powell’s (1987) asymmetric LS estimator.
   (b) CR model: Let $r(z) = q - 1(y - x’r < 0) and tjz(w, r) = l(x’r > 0) to obtain
Powell’s (1984, 1986a) censored regression quantile estimator for quantile qE(O, 1).
Let $r = 1 and tjz(w, r) = 1(x? > O)[(y - x’r) A x’r] to obtain Powell’s (1986b)
symmetrically    trimmed LS estimator.
   (c) TR model: Let $r = 1 and $z(w, r) = l(y < 2x’t)(y - x’r) to obtain Powell’s
(1986b) symmetrically      trimmed LS estimator.
   (Note that for the Huber M-estimator           of the LR model one would usually
simultaneously     estimate a scale parameter for the errors U,. For brevity, we omit
this above.)

Example      2

Method of simulated        moments (MSM) estimator         for multinomial    probit. The
model and estimator considered here are as in McFadden            (1989) and Pakes and
Pollard (1989). We consider a discrete response model with r possible responses.
Let D, be an observed response vector that takes values in {ei: i = 1,. . . , I}, where
ei=(O ,..., O,l,O ,..., 0)’ is the ith elementary r-vector. Let Zli denote an observed
b-vector of covariates - one for each possible response            i = 1,. , r. Let Z, =
cZ:r’Z:2’...’   Z;J’.  The   model   is defined such that

       D, = e,      if    (Zti - Z,,)‘(j3(s0) + A(r,)U,)   3 0   Vl = 1,. . . , r,               (3.13)

where U, N N(O,Z,) is an unobserved            normal rv, /3(.) and A(.) are known RbX ‘-
and RbX ‘-valued functions of an unknown parameter rOey c RP.
   McFadden’s MSM estimator of r0 is constructed using s independent              simulated
N(0, I,) rv’s (Y,, , . . . , Y,,)’ and a matrix of instruments    g(Z,, r), where g(., .) is a
known R” b-valued function. The MSM estimator is an example of the estimator
of (3.1)-(3.2) with W, L (D,, Z,, Ytl,. . . , Y,,) and


       m(“‘, r) = g(z, r)        d - 1 ,gI HCz(P(r) + A(z)Yj)I 2                                 (3.14)
                             (        J                          >
where w = (d, z, y,, , . . , y,). Here, H[.]      is a (0, I}‘-valued   function     whose ith element
is of the form


       nl
       1=1
             CCzi   -    zlY(B(t)+ A(z)Yj) 3 Ol.                                                  (3.15)
Ch. 37: Empirical Process Methods in Econometrics                                           2259


3.3.    Tests when a nuisance parameter           is present only under the alternative

In this section we consider a class of testing problems for which empirical process
limit theory can be usefully exploited. The testing problems considered are ones
for which a nuisance parameter is present under the alternative        hypothesis, but
not under the null hypothesis.        Such testing problems    are non-standard.    In
consequence,     the usual asymptotic    distributional and optimality   properties of
likelihood ratio (LR), Lagrange multiplier (LM), and Wald (W) tests do not apply.
   Consider a parametric model with parameters 8 and T, where & 0 c R”, TEF c R”.
Let 0 = (/I’, S’)‘, where BERN, and FERN, and s = p + q. The null and alternative
hypotheses of interest are

       H,:       /I=0       and
                                                                                           (3.16)
       H,:       pzo.

Under the null hypothesis, the distribution               of the data does not depend on the
parameter  r by assumption.   Under the                 alternative  hypothesis, it does. Two
examples are the following.

Example      3

This example            is a test for variable relevance. We want to test whether a regressor
variable/vector           Z, belongs in a nonlinear     regression model. This model is

       Y,=dX,,4)+LWZ,,z)+                 U,,   u,-N(o,d,),         t= l,...,~.            (3.17)

The functions    g and h are assumed known. The parameters        (/?,bl,fi2, r) are
unknown.    The regressors (X,,Z,) and/or the errors U, are presumed to exhibit
some sort of asymptotically  weak temporal dependence. As an example, the term
h(Z,,r) might be of the Box-Cox       form (Z: - 1)/r. Under the null hypothesis
H,: /I = 0, Z, does not enter the regression function and the parameter      r is not
present.

Example 4

This example is a test of cross-sectional   constancy in a nonlinear regression model.
A parameter      r (ERR) partitions    the sample space of some observed variable
Z, (E R’) into two regions. In one region the regression parameter is 6, (ERR) and in
the other region it is 6, + /I. A test of cross-sectional   constancy of the regression
parameters corresponds      to a test of the null hypothesis H,: p = 0. The parameter
r is present only under the alternative.
   To be concrete, the model is

                                         for Wt34>0           for    t=l           T
                                                                                           (3.18)
                                         for h(Z,,z) 6 0
                                                                           ,...,       3
2260                                                                        D. W.K. Andrew


where the errors CJ, N iid N(O,6,), the regressors X, and the rv Z, are m-dependent
and identically  distributed, and g(.;) and h(.;) are known real functions,      For
example, h(Z,,t) could equal Z, - r, where the real rv Z, is an element of X,, an
element of Xt_d for some integer d 2 1, or Y,_, for some integer d > 1. The model
could be generalized to allow for more regions than two.

   Problems of the sort considered above were first treated in a general way by
Davies (1977, 1987). Davies proposed using the LR test. Let LR(r) denote the LR
test statistic (i.e. minus two times the log likelihood ratio) when t is specified under
the alternative.     For given r, LR(r) has standard       asymptotic   properties  (under
standard regularity conditions).     In particular,   it converges in distribution   under
the null to a random variable X2(r) that has a xi distribution.       When r is not given,
but is allowed to take any value in y, the LR statistic is

       sup LR(r).                                                                    (3.19)
       rsf

This statistic has power against a much wider variety of alternatives            than the
statistic LR(r) for some fixed value of r.
   To mount a test based on SUP,,~ LR(r), one needs to determine its asymptotic
null distribution.     This can be achieved by establishing that the stochastic process
LR(r), viewed as a random function indexed by r, converges weakly to a stochastic
process X’(r). Then, it is easy to show that the asymptotic         null distribution    of
SUP,,~ LR(t) is that of the supremum of the chi-square process X’(r). The methods
discussed below can be used to provide a rigorous justification           of this type of
argument.
   Hansen (1991) extended Davies’ results to non-likelihood           testing scenarios,
considered LM versions of the test, and pointed out a variety of applications            of
such tests in econometrics.
   A drawback of the supLR test statistic is that it does not possess standard
asymptotic     optimality   properties. Andrews and Ploberger (1994) derived a class
of tests that do. They considered         a weighted average power criterion        that is
similar to that considered by Wald (1943). Optimal tests turn out to be average
exponential     tests:


       Exp-LR = (1 + c)-~‘~ ]exp(   k&      LRo)dJW.                                 (3.20)


where J(.) is a specified weight function over r~9       and c is a scalar parameter
that indexes whether one is directing power against close or distant alternatives
(i.e. against b small or /I large). Let Exp-LM and Exp-W denote the test statistic
defined as in (3.20) but with LR(t) replaced by LM(7) and W(7), respectively,
where the latter are defined analogously      to LR(7). The three statistics Exp-LR,
Ch. 37: Empirical Process Methods   in Econometrics                                            2261


Exp-LM, and Exp-W each have asymptotic optimality properties. Using empirical
process results, each can be shown to have an asymptotic         null distribution that
is a function of the stochastic process X”(z) discussed above.
   First, we introduce some notation.      Let I,(B,r) denote a criterion function that
is used to estimate the parameters 6’ and r. The leading case is when l,(Q, r) is the
log likelihood function for the sample of size T. Let D&.(8, r) denote the s-vector of
partial derivatives of I,(Q,r) with respect to 8. Let 8, denote the true value of 8
under the null hypothesis H,, i.e. B0 = (0,s;)‘. (Note that D1,(8,, r) depends on z
in general even though I,(B,,s) does not.)
   By some manipulations      (e.g. see Andrews and Ploberger (1994)), one can show
that the test statistics SUP~~,~LR(r), Exp-LR, Exp-LM, and Exp-W equal a conti-
nuous real function of the normalized score process {D/,(0,, r)/,,@: try-) plus an
op( 1) term under H,. In view of the continuous     mapping theorem (e.g. see Pollard
(1984, Chapter 111.2)), the asymptotic null distributions  of these statistics are given
by the same functions of the limit process            as T-r co of {D1,(8,, r)/fi:    reF_).
  More specifically, let


      VT(T)=   AN,(A,,7).                                                                  (3.21)
               Jr
(Note that EDIr(BO,r) = 0 under Ho, since these are the population   first order
conditions for the estimator.) Then, for some continuous function g of v,(.), we
have

     sup LR(r) = g(vT(.)) + o,(l)            under    H,.                                  (3.22)
     re.!7

(Here, continuity is defined with respect to the uniform metric d on the space of
bounded R”-valued functions on Y-, i.e. B(Y).) If vr.(.)* v(.), then


     ;,“,p LR(r) 5    g(v(.))       under    H,,                                          (3.23)


which is the desired result. The distribution       of g(v(.)) yields asymptotic       critical
values for the test statistic SUP,,,~ LR(z). The results are analogous           for Exp-LR,
 Exp-LM, and Exp-W.
   In conclusion,   if one can establish the weak convergence          result, v=(.)*v(.)     as
 T-t co, then one can obtain the asymptotic         distribution    of the test statistics of
interest. As discussed in Section 2, the key condition           for weak convergence          is
stochastic equicontinuity.   The verification of stochastic equicontinuity      for Examples
3 and 4 is discussed in Sections 4 and 5 below. Here, we specify the form of v=(z)
in these examples.
 2242                                                                                                                        D. WK.   Andrews


 Examples         3 (continued)

 In this example,                1,(O,r) is the log likelihood                                  function   under    the assumption     of iid
 normal errors:




 and




         VT(Z)    =   1         D1,(0,,        7)   =                                                                                  (3.24)
                      fi




Since 7 only appears in the first term, it suffices to show that { (l/fl)xTU,h(Z,,                                                         .):
T 3 l} is stochastically equicontinuous.


Example 4 (continued)

In this cross-sectional    constancy example, I(& 7) is the log likelihood                                                function    under
the assumption      of iid normal innovations:


        MO, 7) =           -   +gZnd,               -+f:                   [r,       -   g(X,,6J      l(h(Z,,z)    > 0)
                                                                   2   1


                           -   dx,,       61   +    B)     l(W,,            7)   d       (31’
and




        L        D&-(0,, 7) =
        Jr




Since 7 only appears in the first term, it suffices to show that {(I/fi)CTU,                                                              x
a[g(X,, 8,,)]/&S, 1(h(Z,;) d 0): T 3 I} is stochastically equicontinuous.
Ch. 37: Empirical Process Methods in Econometrics                                 2263


3.4.    Semiparametric      estimation

We now consider the application of stochastic equicontinuity results to semipara-
metric estimation problems. The approach that is discussed below is given in more
detail in Andrews (1994a). Other approaches are referenced in Section 3.1 above.
    Consider a two-stage estimator e of a finite dimensional parameter 0e~ 0 c R’.
In the first stage, an infinite dimensional parameter estimator z*is computed, such
as a nonparametric regression or density estimator or its derivative. In the second
stage, the estimator 8 of 8, is obtained from a set of estimating equations that
depend on the preliminary estimator t^. Many semiparametric estimators in the
literature can be defined in this way.
    By linearizing the estimating equations, one can show that the asymptotic
distribution of ,/?((8- 19,)depends on an empirical process vr(t), evaluated at the
preliminary estimator f. That is, it depends on vr(?). To obtain the asymptotic
distribution of 8, then, one needs to obtain that of vr(?). If r*converges in prob-
ability to some t0 (under a suitable pseudometric) and vT(r) is stochastically
equicontinuous, then one can show that v=(f) - Q(Q) 50 and the asymptotic
behavior of ,/?(e^- 19,) depends on that of v&& which is obtained straightfor-
wardly from an ordinary CLT. Thus, one can effectively utilize empirical process
stochastic equicontinuity results in establishing the asymptotic distributions of
semiparametric estimators.
   We now provide some more details of the argument sketched above. Let the data
consist of {W,: t Q T}. Consider a system of p estimating equations


       ti,(B, f) = f   $m(e, f),                                                (3.26)


where m(0, r) =, m( W,, 8, z) and m(., ., *) is an RP-valued known function. Suppose
the estimator 0 solves the equations

       J%iT(& f) = 0                                                            (3.27)

(at least with probability that goes to one as T+ CO). These equations might be
the first order conditions from some minimization problem.
   We suppose consistency of 8 has already been established, i.e. e-%0, (see
Andrews (1994:) for sufficient conditions). We wish to determine the asymptotic
distribution of 8. When m( W,, 8, t) is a smooth function of 8, the following approach
can be used. Element by element mean value expansions stacked yield

       o,(l) = w& 4 = .JTm,(e,,f) + a[rii,(e*,      f)yaelfi@-   e,),           (3.28)

where 8* lies between 6 and 0, (and 0* may differ from row to row in
2264                                                                                   D.W.K. Andrews


a[fi,(O*,    z*)],W’). Under   suitable     conditions,


                                                                                                 (3.29)


Thus,

        JT(e^-   0,) = -(A!_       l + o,(l))Jrrn,(O,,~)

                     = - (M- 1 + o,(l))CJr(m,(e,,               t*) - m;(e,,z*)) + @ii;(8,,      ?)I,
                                                                                                 (3.30)

where ti*,(O,z) = (l/T)CTEm(W,,    8,~).
  Again under suitable conditions,    either




for some covariance       matrix     A, see Andrews         (1994a).
   Let


        VT(4= JeMe,, z) - fqe,, t)).                                                             (3.32)

Note that v=(.) is a stochastic process indexed by an infinite dimensional  parameter
in this case. This differs from the other examples in this section for which r is finite
dimensional.
   Under standard conditions,     one can establish that


        %-bo)5 N(O,S)                                                                            (3.33)

for some covariance       matrix     S, by applying        an ordinary   CLT. If, in addition,     one
can show that

            - VT(%)J+0,
        VT(z*)                                                                                   (3.34)

then we obtain


        JT(&     e,) = -(M-l        + %U))CVT(Q)
                                             +             @qe,,?)I
                     = - M- ‘CVTh)+ JTmge,,f)] + O,(l)

                     5   N(O, M - ‘(S + A)(M           ‘)‘),                                     (3.35)

which is the desired     result,
Ch. 37: Empirical Process Methods in Econometrics                                                                                      2265


  To prove (3.34), we can use the stochastic                                          equicontinuity             property.   Suppose

       (i) {v,(.): T 2 1)    is stochastically                                   equicontinuous                 for some choice of F
           and pseudometric    p on r-,
      (ii) P(QEF)+     1,   and
     (iii) p(?, tO) J+ 0,                                                                                                          (3.36)

then (3.34) holds (as shown below).
   Note that there exist tradeoffs between conditions     (i), (ii), and (iii) of l(3.36) in
terms of the difficulty of verification and the strength of the regularity conditions
needed. For example, a larger set Y makes it more difficult to verify (i), but easier
to verify (ii). A stronger pseudometric    p makes it easier to verify (i), but more
difficult to verify (iii).
   Since the sufficiency of (3.36) for (3.34) is the key to the approach considered
here, we provide a proof of this simple result. We have: V E > 0, V n > 0,3 6 > 0 such
that

      lim P(I vT(z*)
                  - vT(d > rl)
     T-30

          < lim P( I VT(?)            -    vT(zo)      1>      q, QEF,        p(t,        zo)   d   6)
                  T-CC


                  +      lim P(2#Y              or      p(t^,r,) > 6)
                      T+CC




                                      sup             1vT(z)     -   vT(zO)          1>    ‘1
                              re.F:   p(r,ro)   < d


          <   E,                                                                                                                  (3.37)

where the term on the third line of (3.37) is zero by (ii) and (iii) and the last
inequality holds by (i). Since E > 0 is arbitrary, (3.34) follows.
   To conclude, one can establish the fi-consistency          and asymptotic normality
of the semiparametric     estimator 6 if one can establish, among other things, that
{v,(.): T 2 l} is stochastically   equicontinuous.   Next, we consider the application
of this approach to two examples and illustrate the form of vT(.) in these examples.
In Sections 4 and 5, we discuss the verification of stochastic equicontinuity     when
“M = {m(., t): ZEY} is an infinite dimensional     class of functions.

Example       5

This example considers a weighted least squares (WLS) estimator                                                        of the partially
linear regression (PLR) model. The PLR model is given by

     Y, = X:6’, + g(Z,) + U,                         and        E( U,I X,, Z,) = 0                       a.s.                     (3.38)
2266                                                                             D. W.K. Andrew


 for t= l,..., T, where the real function g(.) is unknown,     W, = (Y,,X:,Z:)’   is iid or
 m-dependent      and identically distributed, Y,, U,eR, X,, tl,ERP and Z,eRka. This
 model is also discussed by Hlrdle and Linton (1994) in this handbook.          The WLS
estimator is defined for the case where the conditional    variance of U, given (X,, Z,)
 depends only on Z,. This estimator is a weighted version of Robinson’s              (1988)
 semiparametric     LS estimator. The PLR model with heteroskedasticity      of the above
form can be generated by a sample selection model with nonparametric             selection
equation     (e.g. see Andrews (1994a)). Let rlO(Z,) = E(Y,IZ,),r,,(Z,)       = E(X,IZ,),
 r3JZt) = E(U: IZ,) and r. = (riO, rio, rzo)). Let fj(.) be an estimator of tjO(.) for
j = 1,2,3. The semiparametric      WLS estimator of the PLR model is given by

                                                              -1
       e=[ 51 5wt)(X, - Z^2(Zt))(Xt- ~*m)‘/~,m 1
            x i 5wJw, - z^2(Zt))(yt- ~lm)/~,(z,),                                         (3.39)
                1

where r( W,) = l(Z,~f%“*) is a trimming function and 5?* is a bounded                subset   of
Rka. This estimator is of the form (3.16)-(3.17) with


       m(K, 8, f) = S(K)Cr,      - %(Z,) - (X, - z^,(Z,))‘ei LX, - e,(Z,)l/t3(Z,).        (3.40)

To establish the asymptotic normality     of z^using the approach above, one needs
to establish stochastic equicontinuity for the empirical process vr(.) when the class
of functions JJ’ is given by

       J? = {m(., Bo, t):   ZEF}      where

          m(w, eo, r) = <(w)~Y - ri(z) - (x - r,(z))‘eoi    cx - z,(z)I/z,(z),           (3.41)

w = (y,x’,z’), r = (r,,r;,r,)’      and F is as defined below. Here, the elements ZEF
are possible realizations        of the vector nonparametric    estimator 2. By definition,
3 c Rk” is the domain of rj(z) for j = 1,2,3 and 2 includes the support of Z, V t 3 1.
By assumption,    the trimming set 6* c 3. If d* = 2, then no trimming occurs
and t(w) is redundant.        If i%“*is a proper subset of 2, then trimming occurs and
the WLS estimator 8 is based on only nontrimmed              observations.

Example     6

This example considers generalized     method of moments (GMM) estimators                     of
parameters defined by conditional    moments restrictions (CMR).
   In this example, 0, is the unique parameter vector that solves the equations

       E($(Z,,e)IX,)=O        a.s.   Vt>   1                                             (3.42)
Ch. 37: Empirical   Process Methods   in Econometrics                                        2261



for some specified R”-valued function            Ic/(., .), where X,eRkn. Examples of this model
in econometrics   are quite numerous,            see Chamberlain       (1987) and Newey (1990).
   Let %(X,) = E($(Z,, t%)$(z,, &)‘lX,),          d&X,) = ECaC$(z,, 4Jll~@I~,l and
to(X,) = d,(X,)‘R,         ‘(X,). By assumption, a,(.),   A,(.), and rO(.) do not depend
on t. Let fi(.) and A(.) be nonparametric            estimators   of a,(.) and A,(.). Let
t*(.) = d^(.)‘lt;,- ‘(.). Let W, = (Z;, Xi)‘.
   A GMM estimator 6 of B,, minimizes


                                                           over      0~ 0 c RP’,           (3.43)


where 9 is a data-dependent     weight matrix. To obtain the asymptotic distribution
of this estimator    using the approach    above, we need to establish a stochastic
equicontinuity   result for the empirical process vT(.) when the class of functions J?
is given by

       M = {m(., do, 5): TEL?-},       where

          m(w, &, r) = r(x)lcI(z, 6,) = A(x)‘n-           ‘(x)$(z,   &,),                  (3.44)

w = (z’, x’) and Y is defined         below.



4.     Stochastic   equicontinuity    via symmetrization

4.1.     Primitive conditions for stochastic            equicontinuity

 In this section we provide primitive conditions for stochastic equicontinuity.        These
conditions are applied to some of the examples of Section 3 in Section 4.2 below.
We utilize an empirical process result of Pollard (1990) altered to encompass
m-dependent       rather than independent    rv’s and reduced in generality somewhat to
achieve a simplification      of the conditions.    This result depends on a condition,
which we refer to as Pollard’s entropy condition, that is based on how well the
functions in JV can be approximated          by a finite number of functions, where the
distance between functions        is measured by the largest L’(Q) distance over all
distributions     Q that have finite support. The main purpose of this section is to
establish primitive conditions under which the entropy condition holds. Following
this, a number of examples are provided to illustrate the ease of verification              of
the entropy condition.
    First, we note that stochastic equicontinuity     of a vector-valued   empirical process
(i.e. s > 1) follows from the stochastic equicontinuity     of each element of the empirical
process. In consequence,       we focus attention     on real-valued     empirical processes
(s = 1).
2268                                                                                    D. W.K. Andrews


  The pseudometric         p on Y is defined       in this section        by


                                 E(m(W,, 71) -     m(W,,   72))2       1’2.3                       (4.1)
                                                                   >


  Let Q denote a probability  measure on W. For a real function f on W, let
Qf 2 = 1% f*(w)dQ(w).  Let 9 be a class of functions in c(Q). The L2(Q) cover
numbers of 9 are defined as follows:

Definition

For any E > 0, the cover number N*(E, Q, F) is the smallest value of n for which
there exist functions fI, . . ,f,,
                                 in 4 such that minj, ,(Q(f - fj)*)li2 < EVlf~p.
N2(&, Q, 9) = co if no such n exists.

The log of N2(&,Q,S7 is referred to as the L*(Q) &-entropy of 9. Let 2 denote the
class of all probability measures Q on W that concentrate      on a finite set. The
following entropy/cover  number condition was introduced    in Pollard (1982).

Definition

A class F of real functions          defined   on W satisfies Pollard’s entropy condition              if

         1

           sup [log N*(E(QF~)“~, Q, F)]1’2 de < co,                                                 (4.2)
       s o QE~

where F is some envelope function for 9, i.e. F is a real function on W” for which
If(.)1 < F(.)V’fEF.
    As ~10, the cover number        N2(&(QF2)“*, Q,p)   increases. Pollard’s entropy
condition    requires that it cannot increase too quickly as ~10. This restricts the
complexity/size     of 9 and does so in a way that is sufficient for stochastic equi-
continuity    given suitable moment     and temporal   dependence    assumptions.    In
particular,    the following three assumptions    are sufficient for stochastic   equi-
continuity.

Assumption     A

JZZ satisfies Pollard’s    entropy     condition    with some envelope         ti.

Assumption     B

lim T_ 3. ( l/T)CTEti2      “(IV,) < CCfor some 6 > 0, where M is as in Assumption                A.

   3The pseudometric p(., .) is defined here using a dummy variable N (rather than T) to avoid confusion
when we consider objects such as plim T_rcp(Q,so). Note that p(.;) is taken to be independent      of the
sample size T.
Ch. 37: Empirical Process   Methods   in Econometrics                                            2269


Assumption     C

( W,: t < T, T 2 1j is an m-dependent            triangular   array of rv’s.

Theorem     1 (Pollard)

Under Assumptions           A-C,      {vT(.): T > l} is stochastically   equicontinuous       with p
given by (4.1).


Comments

(1) Theorem   1 is proved using a symmetrization     argument.   In particular,     one
obtains a maximal inequality for vT(r) by showing that SUP,,,~ 1vT(t)j is less variable
than suproY l(l/fi)CT      1o,m( W,, z)l, where (6,: t d T} are iid rv’s that are indepen-
dent of { W,: t < T) and have Rudemacher            distribution      (i.e. r~( equals + 1 or - 1,
each with probability     i). Conditional      on { W,} one performs a chaining argument
that relies on Hoeffding’s inequality for tail probabilities         of sums of bounded, mean
zero, independent    rv’s. The bound in this case is small when the average sum of
squares of the bounds on the individual rv’s is small. In the present case, the latter
is just (lIT)Clm T ’ ( W t, z). The maximal inequality           ultimately      is applied to the
empirical measure constructed          from differences of the form m( W,, zl) - m( W,, r2)
rather than to just m(W,, z). In consequence,             the measure of distance between
m(.,z,) and m(.,z,) that makes the bound effective is an L2(P,) pseudometric,
where P, denotes the empirical distribution            of (W,: t d Tj. This pseudometric             is
random and depends on T, but is conveniently                 dominated       by the largest L2(Q)
pseudometric     over all distributions        Q with finite support.           This explains the
appearance    of the latter in the definition of Pollard’s entropy condition.                   To see
why Pollard’s entropy condition           takes the precise form given above, one has to
inspect the details of the chaining argument. The interested reader can do so, see
Pollard (1990, Section 3).
   (2) When Assumptions         A-C hold, F is totally bounded under the pseudometric
p provided     p is equivalent       to the pseudometric          p* defined by p*(z,,z2) =
&,+ co[(l/N)CyE(m(W,,           zi) - m(W,, T2))2]1’2. By equivalent,              we mean        that
p*(~, , TV)2 Cp(z,, z2) V tl, Z*EF for some C > 0. (p*(~i, z2) < p(r,, ZJ holds auto-
matically.) Of course, p equals p* if the rv’s W, are identically                  distributed.   The
proof of total boundedness       is analogous to that given in the proof of Theorem 10.7
in Pollard (1990).

   Combinatorial      arguments    have been used to establish that certain classes of
functions, often referred to as Vapnik-Cervonenkis           (VC) classes of one sort or
another, satisfy Pollard’s entropy condition,       see Pollard (1984, Chapter 2; 1990,
Section 4) and Dudley (1987). Here we consider the most important            of these VC
classes for applications   (type I classes below) and we show that several other classes
of functions satisfy Pollard’s entropy condition. These include Lipschitz functions
2270                                                                         D.W.K. Andrew


indexed by finite dimensional     parameters (type II classes) and infinite dimensional
classes of smooth functions (type III classes). The latter are important          for appli-
cations to semiparametric        and nonparametric     problems       because they cover
realizations  of nonparametric     estimators (under suitable assumptions).
   Having established    that Pollard’s entropy condition       holds for several useful
classes of functions, we proceed below to show that functions from these classes
can be “mixed and matched”, e.g. by addition,          multiplication     and division, to
obtain new classes that satisfy Pollard’s entropy condition.          In consequence,   one
can routinely build up fairly complicated classes of functions that satisfy Pollard’s
entropy condition.    In particular,    one can build up classes of functions that are
suitable for use in the examples above.
   The first class of functions we consider are applicable in the non-differentiable
M-estimator    Examples 1 and 2 (see Section 3.2 above).


Dejinition

A class F of real functions     on W is called a type I class if it is of the
form (a) 8 = {f:f(w) = ~‘4 V w~-Iy- for some 5~ Y c Rk} or (b) 9 = {f:f(w) =
h(w’t) V w~.q for some <E Y c Rk, hi V,}, where V, is some set of functions from
R to R each with total variation less than or equal to K < co.

   Common choices for h in (b) include the indicator function, the sign function,
and Huber $-functions,        among others.
   For the more knowledgeable         reader (concerning    empirical processes), we note
that it is sometimes useful to extend the definition of type I classes of functions
to include various classes of functions called VC classes. By definition, such classes
include (i) classes of indicator functions of VC sets, (ii) VC major classes of uniformly
bounded functions, (iii) VC hull classes, (iv) VC subgraph classes, and (v) VC
subgraph hull classes, where each of these classes is as defined in Dudley (1987)
(but without the restriction that f > 0 V’~EF). For brevity and simplicity, we do
not discuss all of these classes here.
   The second class of functions we consider contains functions that are indexed
by a finite dimensional parameter and are Lipschitz with respect to that parameter:


Dejinition

A class F of real functions on W is called a type II class if each function f in F
satisfies: f(.) = f(., t) for some re5-, where Y is some bounded subset of Euclidean
space and f(., r) is Lipschitz in r, i.e.,

       Lf(~*~l)-f(~>~2)1<B(.)llr,    -52/I      V/t,,T,EY                              (4.3)

for some function    B( .): W + R.
Ch. 37: Empirical   Process Methods   in Econometrics                                         2271


   The third class of functions      we consider is an infinite dimensional        class of
functions that is useful for semiparametric     and nonparametric     applications     such
as Examples 5 and 6. This class is more complicated         to define than type I and
II classes. The reader may wish to skip this section on first reading and move
ahead to Theorem 2.
   The third class of functions contains functions that depend on w = (~1, ~6)’ only
through a subvector w, that has dimension        k, <k. The functions are smooth on
a restricted subset of W and are equal to a constant elsewhere. Define WO =
 {w,ER~Y 3 wb s.t. (wb, wL)‘~“ly}. For w, hERk, we write w = (~1, wb,‘and h = (hb, hb)‘.

Dejinition

A class Y of real functions           on W is called a type III class if

 (i) each f in 9 depends on w only through a subvector w, of dimension k, < k,
(ii) for some real number q > k,/2, some constant C < co, and some set W,*, which
     is a subset of Wa and is a connected compact subset of Rka, each f EF satisfies
     the smoothness condition: V WEW and w + hE-W^,


     f(w + h)=      .r,,
                      $      B,(h,, w,) + Nh,, w,) and R(h,, w,) d C/I h, llq,                (4.4)


      where B,(h,, w,) is homogeneous            of degree v in h, and (4, C, WJ) do not depend
      on f, w, or h,
(iii) for some constant K and all f~9,            f(w) = K V WEW such that w,,EW~ - WT.

  Typically the expansion of f(w + h) in (4.4) is a Taylor expansion               of order    [q]
and the function B&H,, w,) is the vth differential of f at w, i.e.


      &(h,, wy) = 1
                       y
                                ‘!
                           VI!...

where zV denotes the sum over all ordered k,-tuples (v,, . . . , v,+,) of nonnegative
integers such that vr + ... + vk, = v, w, = (W,1,. . . , W&)l and h = (h,l,. . , h,k.y.
   Sufficient conditions    for condition   (ii) above are: (a) for some real number
q > k,/2, f~9       has partial derivatives   of order [q] on W”* = {weW: wa~W~};
(b) the [q]th order partial derivatives        of f satisfy a Lipschitz condition       with
exponent     q - [qJ and some Lipschitz constant          C* that does not depend on
f V f ~9; and (c) W”,* is a convex compact set.
   The envelope of a type III class 9 can be taken to be a constant function, since
the functions in 9 are uniformly bounded in absolute value over WEW and f~9.
   Type III classes can be extended to allow Wa to be a finite union of connected
compact subsets of Rkm.In this case, (4.4) only needs to hold V wgW and w + hEY+‘”
such that w, and w, + h, are in the same connected set in W,*.
2212                                                                               D.W.K. Andrews


   In applications,   type III classes of functions typically are classes of realizations
of nonparametric      function estimates. Since these realizations       usually depend on
only a subvector      W,, of W, = (Wb,, Wb,)‘, it is advantageous        to define type III
classes to contain functions that may depend on only part of W,. By “mixing and
matching” functions of type III with functions of types I and II (see below), classes
of functions are obtained that depend on all of w.
   In applications   where the subvector W,, of W, is a bounded rv, one may have
YV,*= W,. In applications       where W,, is an unbounded       rv, vV~ must be a proper
subset of wa for 9 to be a type III class. A common case where the latter arises
in the examples of Andrews (1994a) is when W,, is an unbounded                    rv, all the
observations    are used to estimate a nonparametric     function I         for w,EYV~, and
the semiparametric      estimator   only uses observations      W, such that W,, is in a
bounded set -WT. In this case, one sets the nonparametric         estimator of rO(w,) equal
to zero outside YV,*and the realizations of this trimmed estimator form a type III
class if they satisfy the smoothness condition (ii) for w,E%‘“~.

Theorem 2

If g is a class of functions of type I, II, or III, then Pollard’s entropy condition
(4.2) (i.e. Assumption     A) holds with envelope F(.) given by 1 v SUP~~,~If(.
1 v su~r~.~ If(.)1 v B(.), or 1 v su~~~~~ If( .) 1,respectively, where v is the maximum
operator.

Comment

For type I classes, the result of Theorem 2 follows from results in the literature
such as Pollard (1984, Chapter II) and Dudley (1987) (see the Appendix for details).
For type II classes, Theorem 2 is established directly. It is similar to Lemma 2.13
of Pakes and Pollard (1989). For type III classes, Theorem 2 is established using
uniform metric entropy results of Kolmogorov      and Tihomirov      (1961).

We now show how one can “mix and match” functions of types I, II, and III to
 obtain a wide variety of classes that satisfy Pollard’s entropy condition (Assumption
A). Let 3 and g* be classes of I x s matrix-valued                functions defined on -Iy- with
scalar envelopes G and G*, respectively               (i.e. G: -ly- + R and Igij(.) I < G( .) V i =
 1>..., r,vj= 1, . . . , s, V g&J). Let g and g* denote generic elements of 3 and g*.
Let Z be defined as 3 is, but with s x u-valued functions. Let h denote a generic
element of Z. We say that a class of matrix-valued               functions 3, ?J*, or 2 satisfies
Pollard’s entropy condition or is of type I, II, or III if that is the case element by
element for each of the rs or su elements of its functions.
   Let~~O*={g+g*}(={g+g*:g~~,g*~~}),~~={gh},4ev~*=(gvg*},
9~Y*={gr\g*}              and Igl={lgl},      w h ere v, A, and 1.1 denote the element by
element maximum, minimum, and absolute value operators respectively. If I = s
and g(w) is non-singular          V w~-ly- and VgM,       let 3-i = {g-i}. Let ,&(.)      denote
the smallest eigenvalue of the matrix.
Ch. 37: Empirical Process     Methods   in Econometrics                                                  2213


Theorem      3

If g, F?*, and 9 satisfy Pollard’s entropy condition with envelopes G, G*, and H,
respectively,  then so do each of the following classes (with envelopes given in
parentheses):   %ug*    (G v G*), g@O*      (G + G*), Y.8 ((G v l)(H v l)), $9 v 9*
(G v G*), 9 A Y* (G v G*), and 191 (G). If in addition r = s and 3-l has a finite
envelope c, and 9-i      also satisfies Pollard’s entropy condition (with envelope
(G v l)@‘).

Comments

(1) The stability properties of Pollard’s entropy condition                        given in Theorem 3 are
quite similar to stability properties    of packing numbers                         considered  in Pollard
(1990).
   (2) If r = s and infgsY infwEw &,(g(w))                  > 0, then 9-i         has an envelope     that     is
uniformly bounded by a finite constant.



4.2.      Examples

We now show how Theorems l-3 can be applied                            in the examples     of Section    3 to
obtain stochastic equicontinuity of vT(.).


Example       1 (continued)

By Theorems l-3, the following conditions                  are sufficient for stochastic equicontinuity
of vr(.) in this example.

          (4 {(Y,, X,): t > l> is an m-dependent              sequence      of rv’s.

       (ii) ~~~~~~IlX~ll          2+6<cc         for some 6>0.




                                                                                              1<cc
       (iii) {$,(., r): ZEF}      satisfies     Pollard’s        entropy      condition    with     envelope

             supI$,(.,r)Iand       G     $$E        (IlX,l12+s+ l)s~pI$,(W’,,r)~~+~                          for
            rE3                  T-r,      [                               re.F
            some 6 > 0.
       (iv) 11/r(.) is a function of bounded              variation.                                     (4.5)

    Sufficiency of conditions (i)-(iv) for stochastic equicontinuity   of vT(.) is established
as follows. The sets (g: g(w) = t+kl(y- X’T) for some TEF} and {h: h(w) = x} are type
I classes with envelopes C, and /Ix 11,respectively, for some constant C, < co, and
hence satisfy Pollard’s entropy condition by Theorem 2. This result, condition (iii),
and the 9% result of Theorem 3 show that A satisfies Pollard’s entropy condition
with envelope       ( )Ix /I v l)(su~,,,~ I $2(w, T)I v 1). Stochastic equicontinuity      now
follows from Theorem 1, since Assumption B is implied by conditions (ii) and (iii).
2214                                                                                       D.W.K.   Andrews



   For the particular M-estimators      considered in Example 1 above, condition (iv) is
always satisfied and condition (iii) is automatically satisfied given (ii) whenever $2 = 1
or $2(w, r) = 1(x’s > 0). When tj2(w, t) = y - X'T,I+b2(W, t) = l(X’T > o)[(y - X’T) A X’T],
or $*(w, r) - 1(y < 2x’r)(y - x’r), condition (iii) is satisfied provided Y is bounded
and

       -    1 r
       lim ~~C[EIU,12+6+EilX(i14+b               +E~lU,X,~~2+b]<c0             forsome           6>0.
       T-GPTI


This follows from Theorem 3, since {1(x’s > 0): reY}, {y - X'T:TEF}, {x'T:TE.?}
and (1 (y < ~x’T): TELT} are type I classes with envelopes 1, Iu I + I\x (I supIGg 11
                                                                                    r - ?. 11,
IIx IIsu~,,.~ IIT II and1, respectively, where u = y -  x’~e.

Example     2 (continued)

In the method of simulated         moments    example,            the following       conditions         are
sufficient for stochastic equicontinuity   of vT(.).

       (9 (U&Z,, ytl,..., Y,,): t 3 l}         is an m-dependent   sequence of rv’s.
       (ii) {g(., t): reY_)      is a type IT class of functions with Lipschitz function                B(.)

           that satisfies                    EB*+“(Z,)   + Esup      ))g(Z,,r)))2+6       < co
                                                              re.Y                    >
           for some      6 > 0.                                                                         (4.6)

Note that condition           (ii) holds if g(w,r) is differentiable     in ZV w~-ly-,Vr~~-,~              is
open, and




    Sufficiency  is established   as follows. Classes of functions         of the form
{ l((Zi-Zl)'(fl(z)+ A(z)yj)> 0): rsY c RP} are type I classes with envelopes equal
to 1 (by including products ziyj and z,yj as additional    elements of w) and hence
satisfy Pollard’s entropy condition      by Theorem  2. {g(.,r):rEY}        also satisfies
Pollard’s entropy condition with envelope 1 v supres 1)g(‘, t) II v B(.) by condition
(ii) and Theorem 2. The 9% result of Theorem 3 now implies that A satisfies
Pollard’s entropy condition     with envelope 1 v SUP,,,~ IIg(‘, r) II v B(.). Stochastic
equicontinuity   now follows by Theorem 1.


Example     5 (continued)

By applying Theorems             l-3, we find the following conditions are sufficient for
stochastic equicontinuity          of vT(.) in the WLS/PLR example. With some abuse of
Ch. 37: Empirical Process Methods in Econometrics                                                      2275


notation, let rj(w) denote a function on W that depends on w only through the
k,-subvector   z and equals tj(z) above for j = 1,2,3. The sufficient conditions
are:


        (4 {(K,X,,Z,):t2 1) is an m-dependent              identically distributed  sequence
            of rv’s.
       (ii) El1 Yt-Xle,I12+“+EIIX,I12+S+E/I(Y,-XX:B,)X,l)2+6<                  cc for some
            6 > 0.
      (iii) F={t:r=(tl,t2,          tJ),tjEFj   for j = 1,2,3}. Fj is a type III class of
            RPj-valued functions on W c Rk that depend on w =(y, x’, z’)’ only through
            the k,-vector       z for j = 1,2,3, where pi = 1, p2 =p and p3 = 1, and
                    C                        1
            y-3 = tj: inf lr3(w)l 2 E for some E > 0.                                    (4.7)
                   i       wsll              1’


 The set W,* in the definition of the type III class Fj equals g* in this example
 for j = 1,2,3. Since g* is bounded by condition                (iii), conditions     (i)-(iii) can be
 satisfied without trimming only if the rv’s {Z,: t > l} are bounded.
     Sufficiency of conditions     (i)-(iii) for stochastic equicontinuity         is established         as
 follows. Let h,(w) = y - ~‘0, and h2(w) = x. By Theorem 2, {c}, (hi}, {h2} and Fj
 satisfy Pollard’s entropy condition with envelopes 1, Ih, 1,Ih, I and Cj, respectively,
 for some constant C,E[~, co), for j = 1,2,3. By the 9-l                 result of Theorem 3, so
 does {l/r,:rj~Fj}         with envelope CJE     2 2. By the F?% and $!?@?J* results of
 Theorem 3 applied several times, .&! satisfies Pollard’s entropy condition                            with
 envelope (lh,l v l)C,+(lh,I         v l)C,+(lh,I      v l)((h,( v l)C, for some finite con-
 stants C,, C,, and C,. Hence, Theorem 1 yields the stochastic equicontinuity                             of
 v,(.), since (ii) suffices for Assumption       B.
     Next, we consider the conditions         P(Z*EF)+ 1 and ? Are            of (3.36). Suppose
   (i) fj(z) is a nonparametric       estimator    of rjO(z) that is trimmed outside T* to
       equal zero for j = 1,2 and one for j = 3,
  (ii) %* is a finite union of convex compact subsets of Rka,
(iii) fj(z) and its partial derivatives of order d [q] + 1 are uniformly consistent
       over ZEN* for Tag        and its corresponding        partial derivatives, for j = 1,2,3,
       for some q > k,/2, and
 (iv) the partial derivatives of order [q] + 1 of Tag              are uniformly bounded over
       ZEN!‘* and infiea* Ewmin(~&z)) > 0.
Then, the realizations      of fj(z), viewed as functions of w, lie in a type III class of
functions with probability       -+ 1 for j = 1,2,3 and t L T,, uniformly over 5?’ (where
zjO(z) is defined for ZEN - %* to equal zero for j = 1,2 and one for j = 3). Hence,
the above conditions        plus (i) and (ii) of (4.7) imply that conditions                  (i)-(iii) of
(3.36) hold. If fj(z) is a kernel regression estimator for j = 1,2,3, then sufficient
conditions      for the above uniform consistency           properties     are given in Andrews
(1994b).
2276                                                                               D. W.K. Andrew


5.     Stochastic equicontinuity    via bracketing

This section provides an alternative          set of sufficient conditions      for stochastic
equicontinuity      to those considered in Section 4. We utilize a bracketing result of
Ossiander (1987) for iid rv’s altered to encompass m-dependent              rather than inde-
pendent rv’s and extended as in Pollard (1989) to allow for non-identically               distri-
buted rv’s. This result depends on a condition,            that we refer to as Ossiander’s
entropy condition, that is based on how well the functions in JZ can be approximated
by a finite number of functions that “bracket” each of the functions in A. The
bracketing error is measured by the largest L’(P,) distance over all distributions
P, of IV, for t d T, T 3 1. The main purpose of this section is to give primitive
conditions     under which Ossiander’s entropy condition holds.
   The results given here are particularly      useful in three contexts. The first context
is when r is finite dimensional        and m(W,, t) is a non-smooth        function of some
nonlinear function of t and W,. For example, the rn(W,,~) function for the LAD
estimator of a nonlinear regression model is of this form. In this case, it is difficult
to verify Pollard’s entropy condition, so Theorems l-3 are difficult to apply. The
second context concerns semiparametric          and nonparametric     applications    in which
the parameter r is infinite dimensional       and is a bounded smooth function with an
unbounded       domain. Realizations     of smooth nonparametric      estimators are some-
times of this form. Theorem 2 above does not apply in this case. The third context
concerns semiparametric         and nonparametric      applications  in which r is infinite
dimensional,     is a bounded smooth function on one set out of a countable collection
of sets and is constant        outside this set. For example, realizations         of trimmed
nonparametric       estimators with variable trimming sets are sometimes of this form.
   The pseudometric        p on r that is used in this section is defined by

       p(rl,~2) =      sup (W(W, tl) - WK,T~))~)“~.                                          (5.1)
                    ti N.N> 1

     We adopt    the following     notational   convention:     For   any real function     f on
~,@lf(K)IJYP     = supwsr- If(w)1 if P = 00.
   An entropy condition   analogous   to Pollard’s            is defined   using   the following
bracketing cover numbers.

Dejnition

 For any E > 0 and p~[2, m], the Lp bracketing cover number N:(e, P,,F)is
the smallest value of n for which there exist real functions                a,, . . . ,a, and
b,,    ,b, on YV such that for each f~9       one has If - ajl < bj for some j < II and
maxjG n supt< r r> l (Eb$‘( Wr))lIpd E, where { W,: t d T, T > l} has distribution       deter-
mined by PF ’ ’
    The log of N~(E, P,F) is referred to as the Lp bracketing E-entropy of F. The
following entropy condition was introduced by Ossiander (1987) (for the case p = 2).
Ch. 37: Empirical Process Methods      in Econometrics                                         2271


Definition

A class F of real functions          on ?Y satisfies Ossiander’s Lp entropy condition for some
p~[2, co] if



     s 0
           1

               (log N;(E, P, F))“2   d& < a3.                                                  (5.2)


   As with Pollard’s entropy condition, Ossiander’s entropy condition restricts the
complexity/size  of F by restricting the rate ofincrease of the cover numbers as ~10.
   Often our interest in Ossiander’s Lp entropy condition        is limited to the case
where p = 2, as in Ossiander (1987) and Pollard (1989). To show that Ossiander’s
Lp entropy condition     holds for p = 2 for a class of products of functions 32,
however, we need to consider the case p > 2. The latter situation           arises quite
frequently in applications    of interest.

Assumption         D

_k’ satisfies Ossiander’s        Lp entropy     condition   with p = 2 and has envelope   I&

Theorem 4

Under Assumptions    B-D (with M in Assumption         B given by Assumption   D rather
than Assumption   A), {vT(.): T > l} is stochastically    equicontinuous   with p given
by (5.1) and F is totally bounded under p.

Comments

 1. The proof of this theorem follows easily from Theorem 2 of Pollard (1989) (as
shown in the Appendix).         Pollard’s result is based on methods introduced           by
Ossiander (1987). Ossiander’s result, in turn, in an extension of work by Dudley
(1978).
    2. As in Section 4, one establishes stochastic equicontinuity        here via maximal
inequalities.  With the bracketing        approach,     however, one applies a chaining
argument directly to the empirical measure rather than to a symmetrized             version
of it. The chaining argument relies on the Bernstein inequality for the tail prob-
abilities of a sum of mean zero, independent         rv’s. The upper bound in Bernstein’s
inequality is small when the L2(P,) norms of the underlying          rv’s are small, where
P, denotes the distribution    of the tth underlying rv. The bound ultimately is applied
with the underlying      rv’s given by the centered difference between an arbitrary
function in _&’and one of the functions from a finite set of approximating       functions,
each evaluated at W,. In consequence,        these functions need to be close in an L2(P,)
sense for all t < T for the bound to be effective, where P, denotes the distribution
of W,. This explains the appearance        of the supremum L2(P,) norm as the measure
of approximation     error in Ossiander’s L2 entropy condition.
2278                                                                                                 D. W.K. Andrew


   We now provide primitive conditions under which Ossiander’s entropy condition
is satisfied. The method is analogous to that used for Pollard’s entropy condition.
First, we show that several useful classes of functions satisfy the condition. Then,
we show how functions from these classes can be mixed and matched to obtain
more general classes that satisfy the condition.

Dejinition

A class 9 of real functions on w is called a type IV class under P with index
p~[2, CO] if each function f in F satisfies f(.) = f(., r) for some Roy-, where F is
some bounded subset of Euclidean space, and

                                                                       l/P



V r~r    and V 6 > 0 in a neighborhood       of 0, for some finite positive constants    C
and I,+,where { W,: t d T, T b l} has distribution    determined by P.4
   Condition (5.3) is an Lp continuity condition that weakens the Lipschitz condition
(4.3) of type II classes (provided suptG r,r> l(EBp(W,))“p < 00). The Lp continuity
condition allows for discontinuous     functions such as sign and indicator functions.
For example, for the LAD estimator of a nonlinear            regression model one takes
f( W,, z) = sgn (Y, - g(X,, z))a[g(X,, z)]/hj for different elements rj of r. Under
appropriate conditions on (Y,, X,) and on the regression function g(., .), the resultant
class of functions can be shown to be of type IV under P with index p.

Example 3 (continued)

In this test of variable relevance          example,        J& is a type IV class with p = 2 under
the following condition:

       sup EU:     SUP      IW,,~,)         -   h(Z,,z)l’    d   Cd*                                           (5.4)
       r> I    ?,:~I?,-?/~
                         <s

for all thy, for all 6 > 0, and for some finite positive constants C and $. Condition
(5.4) is easy to verify if h(Z,,t) is differentiable    in r. By a mean value expansion,
(5.4) holds if supt, 1 E II II, supTGF a[h(z,, z)]/ik II2 < 00 and r is bounded. On the
other hand, condition         (5.4) can be verified even if h(Z,,z) is discontinuous     in r.
For example, suppose h(Z,, z) = l(h*(Z,, r) d 0) for some real differentiable function
h*(Z,, z). In this case, it can be shown that condition (5.4) holds if supta 1 El U,)2+6 < CO
for some 6 > 0, sup*> 1 SUP,,,~ (Ia[h*(Z,, z)yar Ii d C, < cc a.s. for some constant
C,, and h*(Z,, t) has a (Lebesgue) density that is bounded above uniformly over ZEF.


    41f need be, the bound in (5.3) can be replaced     by CIlog61-”     for arbitrary   constants     CE(~, co) and
i. > 1 and Theorem 5 still goes through.
Ch. 37: Empirical Process Methods in Econometrics                                       2219


Example 4 (continued)
Jl is a type IV class with p = 2 in this cross-sectional        constancy example under
the same conditions       as in Example         3 with U, of Example        3 replaced    by
U,a[g(X,,s,,)]/a8,     and with h(Z,,z) taken to be of the non-differentiable          form
1(h*(Z,, t) d 0) discussed above.
   Note that the conditions       placed on a type IV class of functions are weaker in
several respects than those placed on the functions in Huber’s (1967, Lemma 3,
p 227) stochastic    equicontinuity     result. (Huber’s conditions     N-2, N-3(i), and
N-3(ii) are not used here, nor is his independence         assumption    on { W,}.)Huber’s
result has been used extensively in the literature on M-estimators.
   Next we consider an analogue           of type III classes that allows for uniformly
bounded functions that are smooth on an unbounded                domain. (Recall that the
functions of type III are smooth only on a bounded domain and equal a constant
elsewhere.) The class considered here can be applied to the WLS/PLR Example 5
or the GMM/CMR          Example 6. Define wU as in Section 4 and lel w = (wb, wb)‘,
h = (hb, hb)‘, and W, = (W;,, Wb,)‘.

Dejinition

A class 9    of real functions     on w     is called   a type I/ class under P with index
PER    001,if
  (i) each fin F depends on w only through a subvector w, of dimension k, d k,
 (ii) wb is such that w0 n {w,ER~=: I/w, I/ < r} is a connected compact set V r > 0,
(iii) for some real number q > k,/2 and some finite constants C,, . . . , Clql, C,, each
      f EF satisfies the smoothness condition V w~-llr and w + hew,

      f (w+ h)=   vro
                   y’!B,(k,,     w,) + W,, w,),

      R(h,>w,) G C, IIh, I?, and       IB,(h,, w,)l 6 C, IIh, II”   for v = 0,. . , Cd, (5.5)
     where B,(h,, w,) is homogeneous        of degree v in h, and (q, C,, . . . , C,) do not
     depend on f,w,or h,
(iv) suPtg T,Ta 1 E I/ W,, Iii < co for some [ > pqkJ(2q - k,) under P.

In condition (iv) above, the condition     [ > co, which arises when p = co, is taken
to hold if [ = 00. Condition    (ii) above holds, for example, if “IIT,= Rka.
   As with type III classes, the expansion of f(w + h) in (5.5) is typically a Taylor
expansion and B,(h,, w,) is usually the vth differential of f at w. In this case, the
third condition   of (5.5) holds if the partial derivatives    of f of order <[q] are
uniformly bounded.
   Sufficient conditions   for condition   (iii) above are: (a) for some real number
q > k,/2, each fEF has partial derivatives of order [q] on YF that are bounded
uniformly over W~YY and f EF, (b) the [q]th order partial derivatives off satisfy
2280                                                                                  D. W.K. Andrews


a Lipschitz condition with exponent q - [q] and some Lipschitz constant C, that
does not depend on f, and (c) Y+$ is a convex set.
   The envelope of a type V class 9 can be taken to be a constant function, since
the functions in 9 are uniformly bounded over wcw and f EF:.
   Type V classes can be extended to allow wO to be such that _wbn{w,~RI’~:
11w, 11d r} is a finite union of connected      sets V r > 0. In this case, (5.5) only needs
to hold V w~-llr and w + hE-IY_ such that w, and h, are in the same connected set
in “wb n {w,: IIw, II d r} for some r > 0.
   In applications,     the functions in type V classes usually are the realizations          of
nonparametric       function estimates. For example, nonparametric             kernel density
estimates    for bounded       and unbounded       rv’s satisfy the uniform        smoothness
conditions    of type V classes under suitable assumptions.             In addition,     kernel
regression estimates for bounded and unbounded               regressor variables satisfy the
uniform smoothness conditions if they are trimmed to equal a constant outside a
suitable bounded set and then smoothed (e.g. by convolution            with another kernel).
The bounded set in this case may depend on T.
   In some cases one may wish to consider nonparametric                   estimates that are
trimmed (i.e. set equal to a constant          outside some set), but not subsequently
smoothed. Realizations        of such estimates do not comprise a type V class because
the trimming procedure creates a discontinuity.           The following class of functions
is designed for this scenario. It can be used with the WLS/PLR                Example 5 and
the GMMjCMR            Example 6. The trimming        sets are restricted to come from a
countably infinite number of sets {wOj: j 3 l}. (This can be restrictive in practice.)

Definition

A class 9       of real functions     on w    is called a type    VI class    under   P with index
PECK, 001,if
  (i) each f in F depends on w only through a subvector w, of w of dimension
      k, d k,
 (ii) for some real number       q > k, 12, some sequence   {wOj: j 2 1) of connected
      compact subsets of Rka that lie in wO, some sequence {Kj:j 3 l} of constants
      that satisfy supja 1llyjl < co, and some finite constants   C,, . . , CLql,C,, each
      f~9- satisfies the smoothness condition: for some integer J,
         (a) f(w) = K, V WE%/ for which w,+!~~~ and
         (b) V w~YY and w + hEW for which w,E~~~ and w, + huEdyb,,


       f(w   + h) = .rO ,I;B,(h.,   wu) + R(h,, w,),


       R(hm wJ d C, IIh, 114,and          IMh,, w,)l d C, /Ih, II” for v = 0,. . . , [q],        (5.6)

       where B,(h,, w.) is homogeneous        of degree v in h, and (q, (Woj: j >, l}, C,, . . . , C,)
       do not depend on f, w, or h.
Ch. 37: Empirical    Process   Methods   in Econometrics                                  2281


                                                      - k,) under P,
(iii) supti . T1T>I 1 E (1IV,, lli < cc for some iy> pqk,/(2q
(iv) n(r) < K, exp(K,rr) for some 5 < 2[/p and some finite constants K 1, K,, where
     n(r) is the number of sets Waj in the sequence {Waj: j 3 l} that do not include
     (W&“K:         IIw, II G 4.

Conditions (i)-(iii) in the definition of a type VI class are quite similar to conditions
used above to define type III and type V classes. The difference is that with a type
VI class, the set on which the functions are smooth is not a single set, but may
vary from one function to the next among a countably                infinite number of sets.
   Condition    (iv) restricts the number of ^whj sets that may be of a given radius or
less. Sufficient conditions        for condition    (iv) are the following. Suppose Wuj 3
Cw,E”Wb: IIw,II d r?(j)) f    or allj  sufficiently large, where II(.) is a nondecreasing real
function on the positive integers that diverges to infinity as j-+ a3. For example,
{Waj: j 3 l} could contain spheres, ellipses, and/or rectangles whose “radii” are
large for large j. If

     q(j)3 D*(log j)lir                                                                  (5.7)

 for some positive finite constant D *, then condition (iv) holds. Thus, the “radii”
 of the sets {~~j: j > 1) are only required to increase logarithmically    for condition
(iv). This condition is not too restrictive, given that the number of trimming sets
 {Waj} is countable.    More restrictive is the latter condition   that the number of
trimming sets {-Wbj} is countable.
     As with type III and type V classes, the envelope of a type VI class of functions
can be taken to be a constant function.
     The trimmed kernel regression estimators discussed in Andrews (1994b) provide
examples of nonparametric          function   estimates for which type VI classes are
applicable.    For suitable    trimming     sets {WGj: j 2 l} and suitable   smoothness
conditions    on the true regression function, one can specify a type VI class that
contains all of the realizations of such kernel estimators in a set whose probability
 -1.
    The following result establishes Ossiander’s Lp entropy condition for classes of
type II-VI.

Theorem 5

Let p~[2,00]. If Y is a class of functions of type II with supt< T T, I (EBp(Wt))“p <
co, of type III, or of type IV, V, or VI under P with index i, then Ossiander’s Lp
entropy condition (5.2) holds (with envelope F(.) given by supltF If(.)\).

Comments

(1) To obtain Assumption  D for any of the classes of functions considered above,
one only needs to consider p = 2 in Theorem 5. To obtain Assumption        D for a
2282                                                                         D. W.K. Andrew


class of the form 3&F’, where 9 and 2 are classes of types II, III, IV, V or VI,
however, one needs to apply Theorem 5 to 9 and 2 for values of p greater than
2, see Theorem 6 below.
   (2) Theorem 5 covers classes containing         a finite number of functions, because
such functions are of type IV under any distribution         P and for any index PE[~, co].
In particular, this is true for classes containing     a single function. This observation
is useful when establishing Ossiander’s Lp entropy condition for classes of functions
that can be obtained by mixing and matching functions from several classes, see
below.
   We now show how one can “mix and match” functions of types II-VI. Let
9?,9*, Y?, 9 @ %*, etc., be as defined in Section 4. We say that a class of matrix-
valued functions 3,9*, or H satisfies Ossiander’s Lp entropy condition              or is of
type II, III, IV, V or VI if it does so, or if it is, element by element for each of the
IS or su elements of its functions. We adopt the convention that &/(A + p) = ~E(O, co]
if A = co and vice versa.

Theorem 6
(a) If 3 and 3* satisfy Ossiander’s Lp entropy condition for some p~[2, co], with
envelopes G and G*, respectively, then so do each of the following classes (with
envelopes given in parentheses): 9 u 3* (G v G*), 9 0 9* (G + G*), 3’ v Y* (G v G*),
9 A 3* (G v G*), and IF?\(G). If in addition r = s and inf,,, inf,,,,,- A,,,(g(w)) = A.,
for some A.,,> 0, then 9-i     also satisfies Ossiander’s Lp entropy condition       (with
envelope r/E,,).
   (b) The class 3% satisfies Ossiander’s Lp entropy condition           with p equal to
cr~[2, co] and envelope sGH, if(i) 3 and A? satisfy Ossiander’s Lp entropy condition
with p equal to k(cc, co] and p equal to ,ULE(CL,   co], respectively, (ii) +/(A + p) 3 CI,
and (iii) the envelopes G and H of Y and YP satisfy sup,< T,Ta 1(EG”(W,))“’           < cc
and suptG T,Ta ,(EH”(K))“”        < 00.


Example 6 (continued)
Theorems 4-6 can be used to verify stochastic equicontinuity      of vT(.) and total
boundedness   of F in the GMMjCMR      example. With some abuse of notation, let
d(w) and n(w) denote functions on -w^ whose values depend on w only through
the k,-vector x and equal A(x) and Q(x) respectively. Similarly, let $(w, 0,) denote
the function on -w^ that depends on w only through z and equals ll/(z,e,). The
following conditions  are sufficient.

        (i) {(Z,,X,):t> l} is an m-dependent     sequence   of rv’s.
       (ii) ;;y E II$(Z,, &J II6 < ~0.

       (iii) $ = {r: r = A’R-’ for some AE~ and a~&‘}, where $3 and s4 are type V
             or type VI classes of functions on FY c Rk with index p = 6 whose functions
Ch. 37: Empirical Process   Methods   in Econometrics                                           2283




           depend on w only through           the k,-vector x, and .d c   R: inf &,(fl(w))>       E
                                                                             we*
           for some E > 0.                                                                     (5.8)

 Note that condition         (iii) of (5.8) includes a moment        condition     on X,:supta 1
 E I/X, lir< co for some i > 6qk,/(2q - k,).
    Sufficiency of conditions (i))(iii) for stochastic equicontinuity        and total bounded-
 ness is established as follows. By Theorem 5, {$(., (!I,)}, LS and d satisfy Ossiander’s
 Lp entropy condition         with p = 6 and with envelopes I$(.,tI,)l,         C, and C,, res-
pectively, for some finite constants         C,, C,. By the 9-l result of Theorem 6, so
does J4-’ with some constant envelope C, < co. By the 32 result of Theorem 6
applied with c1= 3 and 1, = p = 6, SS&-’ satisfies Ossiander’s Lp entropy condition
with p = 3 and some constant envelope C, < co. By this result, condition (ii), and
the 9%’ result of Theorem 6 applied with c1= 2, 2 = 3, p = 6, 9 = g&-r,                          and
Y? = ($(.,e,)},        JY satisfies Ossiander’s     Lp entropy     condition     with p = 2 and
envelope C, I$(., Q,)l for some constant C, < co. Theorem 4 now yields stochastic
equicontinuity,       since condition (ii) is sufficient for Assumption       B.
   Condition      (iii) above covers the case where the domain of the nonparametric
functions is unbounded        and the nonparametric      estimators A and fi are not trimmed
to equal zero outside a single fixed bounded set, as is required when the symmetri-
zation results of Section 4 are applied. As discussed above, nonparametric                    kernel
regression estimators that are trimmed and smoothed or trimmed on variable sets
provide examples where condition              (iii) holds under suitable assumptions              for
realizations of the estimators that lie in a set whose probability            + 1. For example,
Andrews (1994b) provides uniform consistency on expanding sets and LQconsistency
results for such estimators, as are required to establish that P(Z*EY) -+ 1 and z^3 z0
(the first and second parts of (3.36)) when stochastic equicontinuity               is established
using conditions (i)-(iii) above.



6.   Conclusion

 This paper illustrates how empirical process methods can be utilized to find the
asymptotic distributions      of econometric estimators and test statistics. The concepts
of empirical     processes, weak convergence,         and stochastic     equicontinuity    are
introduced.    Primitive sufficient conditions     for the key stochastic equicontinuity
property are outlined. Applications         of empirical process methods in the econo-
metrics literature are reviewed briefly. More detailed discussion is given for three
classes of applications:     M-estimators    based on non-differentiable      criterion func-
tions; tests of hypotheses for which a nuisance parameter            is present only under
the alternative hypothesis; and semiparametric          estimators that utilize preliminary
nonparametric     estimators.
2284                                                                                D. W.K. Andrew


Appendix

Proof of Theorem 1
Write vT(.) as the sum of m empirical processes {vrj(.): T 3 l} forj = 1,. . , m, where
vTj(.) is based on the independent     summands   {m(W,, .): t = j + sm, s = 1,2,. .}. By
standard inequalities   is suffices to prove the stochastic equicontinuity     of {vTj(.):
T3 l} for each j.
   The latter can be proved using Pollard’s (1990) proof of stochastic equicontinuity
for his functional CLT (Theorem 10.7). We take his functions &(w, t) to be of the
form m( IV,, r)/fl We alter his pseudometric from lim,, m [ (l/N)xyE    11m( W,, zl) -
m(W,, t2) 11
           2]“2 to that given in (3.1). Pollard’s proof of stochastic equicontinuity
relies on conditions (i) and (iii)-(v) of his Theorem 10.7. Condition    (ii) of Theorem
10.7 is used only for obtaining convergence of the finite dimensional       distributions,
which we do not need, and for ensuring that his pseudometric       is well-defined. Our
pseudometric    does not rely on this condition. Inspection of Pollard’s proof shows
that any pseudometric can be used for his stochastic equicontinuity     result (although
not for his total boundedness       result) provided his condition   (v) holds. Thus, it
suffices to verify his conditions    (i) and (iii)-(v).
   Condition      (i) requires  that the functions    {m(W,, t)/fi:  t d T, T > l} are
“manageable.”      This holds under Assumption   A because Pollard’s packing numbers
satisfy

           sup      D(s Ia0 F”.(w)I,a0 Pn,) d sup N,(.s/2, Q, A).                             (A.1)


Conditions  (iii) and (iv) are implied by Assumption           B. Condition        (v) holds auto-
matically given our choice of pseudometric.                                                 Q.E.D.


Proof of Theorem 2
Type I classes of form (a) satisfy Pollard’s entropy condition by Lemmas II.28 and
11.36(ii) of Pollard (1984, pp 30 and 34). Type I classes of form (b) satisfy Pollard’s
entropy condition because (i) they are contained in VC hull classes by the proof
of Proposition     4.4 of Dudley (1987) and the fact that {f: f (w)= w'<V WEW, [ERR}
is a VC major class, see Pollard (1984, Lemma II. 18, p 20), (ii) VC hull classes are
contained in VC subgraph hull classes, and (iii) VC subgraph hull classes satisfy
Pollard’s entropy condition by Corollary 5.8 of Dudley (1987).
   For classes of type 11, consider the functions f (.,  z,),. . :, f (.,
                                                                        T,), where TV,. ..,T,
are points at the centers of disjoint cubes of diameter E(QF’)“~/(QB~)“~              whose
union covers Y (c R” for some s 2 1). Since

       min (Q(f (., T) - f (., T~))~)"~ d min(QB2)‘j2   IIT - Tj IId   &(QF’)l”,              64.2)
       j<n                                j< n
Ch. 37: Empirical Process Methods in Econometrics                                         2285


N2(s(QF2)“2,    Q, 9) is d the number of cubes above. By choice of the envelope
F(.) = 1 v su~/,~ If(.)1 v B(.), 4QF’)“’    A (QB 21lj2 3 E, so the number of cubes is
< CE-~ for some C > 0 and all QE_%?.Thus, Pollard’s entropy condition holds with
envelope F( .).
   For classes of type III, Pollard’s entropy condition holds because

     sup N2(~(QF2)“2,       Q, 9) < C exp(e-k0’4)        v EE(0, l]                      (A.3)
     Qd


for some C < cc by Kolmogorov       and Tihomirov  (1961, Theorem             XIII,   p 308).
Since g > k,/2 by assumption, Pollard’s entropy condition holds.                      Q.E.D.

Proof of Theorem       3

For Yu Y*, we have

     N26,      Q, 3 u g*) d N26,     Q, 3) + N26,   Q, 3*X     and so,

     N(&(Q(G v G*)2)1’2, Q, %JuV*) < N2(s(QG2)“2,            Q, 9) + N2(~(QG*2)“2,    Q,?J*),
                                                                                         (A.4)

where the second inequality     uses the facts that N2(s, Q,F) is nonincreasing   in
E, Q(G v G*)2 2 QG2, and Q(G v G*)2 3 QG *2 . Pollard’s entropy condition follows
from the second inequality of (A.4).
   For ?J 0 Y*, it suffices to suppose that I = s = 1. As above, Pollard’s entropy
condition follows from the inequalities

     N26,      Q, 9 0 9*) d N2(@, Q, Y)N,(s/2, Q, %*),
     Q(G + G*)2 b QG2          and      Q(G + G*)2 2 QG*2,                              (A.5)

where the first inequality holds because minjsn k<n,(J(g + g* - gj - g:)2dQ)1’2 d
minj,,(J(g   -gj)2dQ)1’2 + mink,“,(i(g*     - g:)2dQj1i2.
   For YZ’, each element of gh’is a finite union of products of scalar functions,
and so, using the result for Ye%*,      it suffices to suppose that I = s = u = 1. For
notational  simplicity, assume G = G v 1 and H = H v 1. Let Qc(.) = Q(.G2)/QG2
and QH(.) = Q(.H2)/QH2. Note that Qc, QHe5?. Let n = N2(~(Q,,G2)1’2, QH, 3) and
n* = N2(~(QCH2)“‘, Qc, X). Let gr,. . . ,g,, and h,,       , h,. denote approximating
functions in 9 and %‘, respectively, that correspond      to the cover numbers n and
n*. We use gjhk to approximate     gh for g&J and hE%:

                                         l/2
       min
    j$n,k<n*
                    (gh - gjh,)’   dQ
                                        >
          ~~::(QH2S(g-gj)2d[Q~])1’2+
2286                                                                              D. W.K. Andrews




                                                                                            (‘4.6)

Thus, we get


       N~(J~QG~H~)“~, Q, $2)             d N2($s(QHG2)“2, QH, C!3N2($~(Q,$Z2)1’2, Qc, YE’) and
         sup N2(s(QG”H2)“‘,            Q, 3%‘)
             QEY

               <     sup N&(Q&2)“2,          QH, 9) sup N2(34QcP2)1’2, Qc, 2)
                     QHE??                             QCE9

               =     sup N2(+~(QG2)“2,     Q, B) sup N2(+~(QH2)“2,   Q, 2).                 64.7)
                     QEZ?                         QE22


Pollard’s entropy condition follows from the latter inequality.
   For 3 v B*, it suffices to suppose r = s = 1. Pollard’s entropy            condition   follows
from the inequalities


       N2b         Q, 3 v 9*) d N2W,       Q, 94N,W,      Q, %*I,
       Q(G v G*)2 3 QG2            and      Q(G v G*)* > QG*2,                               (‘4.8)

where the first inequality   uses 1g v g* - gj v g: I< 1g - gjl + (g* - g: I. The proof
for 3 A CC?*is analogous     (with the envelope still given by G v G* rather than
G A G*). The result for 131 follows because 1191- lajl I < lg - ajl.
   Lastly, consider 3-r. For gEY, let g1 denote the Ith element of g, where I = 1,. ..,L
and L = r*.  Let Y[ = {gl: gE3} and n, = N,(E/~, Q, 3J for some QE_!~?.We claim that
given any E > 0 and QE~?, there exist functions gr,. . . ,g,, in 9 with n < nF= rn,
such that for all g&

       min max (Q(g’ - gi)2)112 < E.                                                        64.9)
       j<n     I<L




   To see this, note that by the assumption            that 3 satisfies Pollard’s entropy
condition, for each 1 there exist real functions grr, . . . , glnr in %I such that for all
ge?J minjc,,(Q(g’   - glj)2)112 < 42. Form the set Y+ of all RL-valued functions
whose Ith element is gu for some j = 1,. . . , n, for 1= 1,. ..,L.The number of such
functions is n+ = nL=1 ,n,. The functions in 3’ are not necessarily in 9. For each
function g+ in g+ consider the L'(Q)   a/2-ball in 3 centered at g+. Take one function
from each non-empty      ball and let gr, . . . , gn denote the chosen functions. These
functions satisfy the claim above.
Ch. 37: Empirical          Process   Methods   in Econometrics                                                        2287


   If 9 satisfies Pollard’s entropy condition    with envelope G, it also does so with
envelope G v 1. For notational       simplicity, suppose G = G v 1. Given QeS, let
Q(.) = Q(.e4)/Qc4     (ES), where 6 is the envelope of 3-r. Take E and Q in the claim
above to equal E(oG4)“2/r4 and Q respectively. Then, there exist functions gl,. . . , gn
in 9 such that


     min max (Q(g’-g$2)1’2                     <.s(QG4)112/r4       and       nb fi N2($s(Q”G4)1/2/r4, Q, G,).
      j<n       l<L                                                                 I=1




Let l,=(l,...,  1)’ (ER’) and let 1.1 denote the matrix                               of absolute       values     of the
matrix *. For arbitrary unit vectors b,cER’, we have


      min Q(b’g-‘c              - b’gJ:‘c)’
      j<n
            = min Q(b’g- ‘(gj - g)gJ: ‘c)~
              j<n

            ,<minr4Q(6Z1~(gj-g(1,)2=minr4Q~4                              5    5      Qlg’-g:lIgm-gy/
               j<n                          jQn                           1=1 m=1



            < r8Qc”” min max Q”(g’- gf)” G r8Qt?4&20G4/r8 = ,s2QG4G4.                                              (A. 10)
                     j<n l<L


Thus, Nz(s(QG4G4)““,                  Q, %- ‘) d n d nf= 1N2(i~(QG4)112/r4, Q”,G,) and



     SU~N,(E(QG~Z;~)“~,                  Q, C!- ‘) d sup I”r Nz($@G4)“2/r4,                 0, %J
      Qd                                                i&i? I=1



            =   sup   fi     N&E(QG~)“~/~~,            Q, 9,) d sup I”r N&E(QG’)~‘~/~~,                 Q, ?Ir).
                QE~ I=1                                            Q&? I=1

                                                                                                                   (A.1 1)

The integral over FE[O, l] of the square root of the logarithm of the right-hand
side (rhs) of (A.ll) is finite since 9 satisfies Pollard’s entropy condition   with
envelope G = G v 1. Thus, 9-l satisfies Pollard’s entropy condition with envelope
(G v 1)‘c2.                                                                  Q.E.D.

Proof ofTheorem 4

Total boundedness     of Y under p follows straightforwardly     from N:(E, P, ~64)-=c
 cc VIE> 0. For stochastic equicontinuity  of {v~(.): T 2 l}, by the same argument
as in the proof of Theorem 1, it suffices to prove the result when {W,: t d T} are
independent   rv’s. By Markov’s inequality   and Theorem 2 of Pollard (1989), we
                                                                              D. W.K.   Andrew


have


       lim P*         sup       IV&i)      - v&J          ’ r
       -
       T+CC     ( p(rr,r2)<d


                               suP      ivTtzl)    -   vT(zZ)i/?
                            P(rIxT2F6




for some constant C < co, where & > 0 is a constant that does not depend on T.
The second term on the right-hand    side of (A.12) can be made arbitrarily  small
by choice of 6 using Assumption   D. The first term is less than or equal to


                                                                                         (A.13)


using Assumption            B. Stochastic         equicontinuity   follows.             Q.E.D.


Proof of Theorem          5

It suffices to prove the result for classes of types III-VI, because a type II class
with suplG T,T> i(EWW,))“’       < co is a type IV class under P with index p.
    First, we consider classes of type III. For given E > 0, define the functions
aj, bj, j = 1,. , n, of the definition   of Lp bracketing    cover numbers    as follows:
(a)V WGW such that w,EW~ - W,*, let aj(w) = K and b,(w) = OVj and (b)V weW
such that w,~“Ilrz, let {uj(w): j = l,.. ., n,} be the functions        constructed     by
Kolmogorov      and Tihomirov     (1961, ~~312-314)     in their proof of Theorem XIV
and let b,(w) = E Vj. These functions satisfy the conditions for Lp bracketing cover
numbers for all p~[2, co]. Hence, N~(E, P, 9) < n, V ~(0, 11, V p~[2, co]. The number
n, of such functions    is < C exp E- ka’q V ~(0, l] for some C < co by Kolmogorov
and Tihomirov      (1961, Theorem XIV). Since q > k,/2 by assumption,        Ossiander’s
entropy condition holds for all pe[O, a].
   For a type IV class with index p, consider disjoint cubes in W of diameter 6 =
(E/C)“~. The number N(E) of such cubes satisfies N(E) d C*E-~‘$ for some C* < co,
where d is the dimension of Y. Let rj be some element of the jth cube in F. Let
~j(~)=f(~~‘j)andbj=~uP~~r-,,~~<~lf(’~~)-~j(’)I~B~(4.3),~uP~~T,~>~[Eb~(~~)I”P,<
Cd” = E. Thus, N~(E, P, 9) < N(E). Since jA(log N(a))“2 de < c&: Ossiander’s         L!’
entropy condition holds.
   For a type V class with index p, let W, = W n {WE Rk: (Iw, 11d r}, let Fr denote the
class of functions 9 restricted to -W;, and let N,(E, Wr, Fr) be the minimal number
Ch. 37:   Empiricul   Procrss   Methods     in Econometrics                                                      2289



n of real functions fi,. . . , fn on vr               such that mini<,, sup,,,lf(w)                  - Jj(w)l < E for
each fog,.. We claim that

      N;(E,P, 9”) d N,W, %(c,,Kc,,),                                                                           (A. 14)

where r(c) = C&-p/r for some constant C < co when p < cc and r(c) = sup { (1w, I(:WEW}
(<co)whenp=cc.
   Using the proof of Theorem         XIV of Kolmogorov      and Tihomirov        (1961,
pp312-314),    it can be seen that

                 F~(,,)              ,<    Dr(@aE    - k/q < D*E         -kd(!‘lil+   (l/q)1                   (A.15)
      1%N, (8,nW(E),
for some constants D, D* < co, where the second inequality holds only when p < co.
When p < cc, (A.14) and (A.15) combine to yield Ossiander’s Lp entropy condition
for 9 if k,(p/[ + l/q)/2 < 1, or equivalently,     if [ > pqkJ(2q - k,) and q > kJ2, as
is assumed. When p = co, (A.14) and the first inequality of (A.15) combine to yield
Ossiander’s Lp entropy condition for fl provided q > k,/2, as is assumed.
   It remains to show (A.14). For p = co, (A.14) follows immediately           from the
definition of Nt(.) and N,(.), since “z%“&,     = w and F,(e) = 9 when p = co. Next,
suppose p < co. For n = N,(E/~, w,, P,),), define real functions aj, bj, j = 1,. . . , n on
%‘” as follows: On YJ$ take {aj(.): j= l,..., n} to be the functions constructed         by
Kolmogorov      and Tihomirov       (1961, pp 312-314) in their proof of Theorem XIV
and let b,(.)=c/2   forj=l,...,n.       On w--W;,      take aj(.)=O and takes bj(.)=F
for j= l,..., n, where F is a constant for which supwcw If(w)1 < F Vf EY. Then,
for each REP, minj,,lf         - ajl < bj and




                                < (E/Z)’     +   FPr _ c      Sup        E I( W,, 11’= (E/Z)’   +   C*rei,     (A. 16)
                                                           td T,T$   1



where C* is defined implicitly.        If we let r = T(E) = (2pC*/(2p - l))lii&-p’r, then
sup,< T,Ta 1 Eb;( W,) < &pand (A. 14) holds.
   Last, we consider type VI classes of functions. First, suppose p < co. We derive
an upper bound on Nf(s, P, F) for arbitrary E > 0. Let rc = C&-p’ii for some C < co
and let F be a constant for which supwSly If(w)1 < Ftlf~F.           Let J be the index of
a set vO, that does not include {w,E%~~: 11        w, 1)d r,}. For functions REP whose
corresponding    integer of part (ii) (of the definition of type VI classes) is J, take the
centering and E-bracketing functions ((a,, b,): 1= 1,. . . , n,,} (of the definition of Lp
bracketing cover numbers) as follows: (a) V WE?Y such that I(w, )( > rE, let al(w) = 0
and b,(w) = F, (b) V WEYY such that 1)w, I/ 6 r, and w,$wG,, let al(w) = K, and
2290                                                                                                D. W.K. Andrew


b,(w) = 0, and (c) V wow such that 11       w, 11d rE and w,E~~~, let {al(w): 1= 1,. . . , neJ)
be the functions constructed      by Kolmogorov        and Tihomirov      (1961) in the proof
of their Theorem XIV and let b,(w) = 42 V 1. The number neJ of such functions
is < D, exp [D,r,kaE-kaig] by Theorem XIV of Kolmogorov               and Tihomirov (1961),
since {w: I/w, 11< r,, w,EWoJ} c {w: /Iw, iI’< r,}.
    Next, for all functions ~IzP- whose corresponding          integer J of part (ii) is such
that waJ contains {w,~^jYb: 11   w, )I < r}, take the centering and s-bracketing functions
 {(a,,b,):l=   l,..., n,} as follows. (a) Vw~w          such that II w,II > r, let al(w) = 0
and b,(w) = FV 1 and (b) V we”Y such that IIw, II d r, let {al(w): I = 1,. . . , n,} be the
functions constructed      by Kolmogorov       and Tihomirov (1961) in the proof of their
Theorem      XIV and let b,(w) = s/2V 1. The number             of such functions      also is
 <D, exp[D,r~~s-k~Liq].
    Now, the number of indices J for which waJ does not include {w,~^lyb: /I w, I/ < r}
is n(r,). Hence, the total number of centering/s-bracketing      functions considered above
is d (n(r,) + 1) D, exp[DZrtaePka’q]. Also note that suptG T,T~ ,(Ebf’(Wt))“P < E for
all of the functions b, introduced        above by the same calculations         as in (A.16)
provided C (of the definition of r,) is defined suitably. Hence,

         Nf(&,P,F)                d (n(r,) +     l)D, exp[D,r2s-kQ’q]

                                  d (K, exp[K,Cr~-P5’1        ] + l)D, exp[D,Ck~s-k~(pii+        1’q)].     (A.17)

With this bound,                   Ossiander’s      Lp entropy   condition holds provided p5/(2[) < 1 and
k,(p/i      + l/q)/2 < 1, or equivalently,                  4 < 2[lp,    q > k,/2 and i > pqk,/(2q - k,), as
is assumed.
   For the case where p= CO, take r(8) = sup{)1 w,II: WE%‘“} < cc VE >O in the
argument above. Then, Ossiander’s L” entropy condition holds provided q > k,/2,
as is assumed.                                                          Q.E.D.

Proof of Theorem                   6

For YuU*, the result is obvious. For 3@ g*, it suffices to suppose that r = s = 1.
Let (g, Uj, bj) and (g*, a:, b:) for ge3 and g*E??* be defined analogously to (f, uj, bj)
given in the definition of the Lp bracketing cover numbers. We have

         (E(bj   +     bF)P)l’P        <   (EbS)“P + (Eb:P)l’P    < 2E,     and   SO,


         N,B(k       I’,   3   0    3*)    d   N;(E, P, 4e)N;(c, P, 9?*).                                  (A.18)

The result follows.
  For 3 v Y*, it also suffices to suppose                         that r = s = 1. We have

         Igvg*-~jv~jLI~(g-U~~+~g*-~~~~bj+b~,                                            andso,

       N32~          P, 3 v Y*) ,< N;(E, P, %)N;(E, P, c-c?*).                                             (A.19)
Ch. 37: Empirical   Process Methods    in Econometrics                                                 2291


The result for 99 A 97* is analogous.
    For 191, the result follows from the inequality               119I- (Uj( 1d 19- Uj(.
    Next consider %‘- ‘. For gE9, let g’ denote the Ith element of g for 1= 1,. . . , L,
where L= r2. By the same argument as used to prove the claim in the proof of
the Y- ’ result of Theorem 3, there exist r x r matrix functions                        a,, . . . , a, and
b ,,...,b,suchthat(i)aj~Yforallj,<n,(ii)forallg~~,lg’-~~(~bfforall1=                                l,...,L
for some j d n, (iii) [E(bi)P] ‘lp < E V 1,Vj, and (iv) n d nf= 1Nt(.s/2, P, YJ.
    By an eigenvector/eigenvalue              decomposition,      we get [g- ’ I d II x ,(IJ&)l,        xI =
II x y/i, element by element and Iuj ’ ( ,< lr x y/A,. Thus, for arbitrary unit vectors
b,cER’, we have: For any gE9 there exists uj and bj for which


      )h’g-‘c-b’uJ:‘cl        dIb)‘lg-‘)luj-gg)luj’llcl          <(r4/L:)1;bjl,        and

      (E[(r4/il:)l~bj1,]P}1iP         < (r6/A:)&.                                                   (A.20)


Thus, N:(r6&/;1:, P, 9-l) d n < nf= ,N:(.5/2, P, YJ and the result follows.
   To prove part (b) of Theorem 6 concerning     92,   note that each element of gh
(for geB and hi&‘) is a finite union of products of scalar functions, and so, using
the result for 9 @9* it suffices to suppose that r = s = u = 1. Let (g, uj, bj) and
(h,uJ”, b,*) be defined analogously to (f,uj, bj) given in the definition   of the Lp
bracketing cover numbers, with p = i and p = p respectively. We have




                        d Gb; + I(u: - k) + kl bj < Gbl” + Hb, + b,b:                               (A.21)

and

      (E(Gb: + Hbj + bjb:,,)“’           d (EG”b~“)“” + (EH”bS)“” + (Ebj”bl*a)l’a
         < (EGaPi(r-a))(a-a)/ap(Ebl*P)lir+ (EHani(~-a))(~-a)inn(Eb))l/~

              + (EbOf”i(‘-a))(“-a)in’(Eb:‘)‘/”
                    J

         ,<      sup    ((EC’)“” + (EH’)“‘)& + 2
              t< T,T> 1
         ,< c*&                                                                                     (A.22)


for ~(0, 11, where C* is defined implicitly and the dependence          of each of the
functions G, b:, etc. on W, is suppressed for notational   simplicity. The second and
third inequalities hold by Holder’s inequality and the fact that &/(,I + p) > c(implies
that a~/@ - LY)d 2 and an/(2 - IX)d p. Equations (A.21) and (A.22) imply that

      Nf(C*tz, P, 9%) d N;@,P, ~)N;(E, P, 2)                                                        (A.23)
2292                                                                                                D. W.K. Andrews


and the desired result follows. Note that using the notational   conventions                                   stated
in the text, (A.21)-(A.23) hold whether or not c1= CO, 1, = CO or p = co.                                     Q.E.D.




References

Ait-Sahalia, Y. (1992a) “Nonparametric          Pricing of Interest Rate Derivative Securities”, Department           of
   Economics, MIT, unpublished         manuscript.
Ait-Sahalia,   Y. (1992b) “The Delta and Bootstrap           Methods for Nonparametric           Kernel Functionals”,
   Department      of Economics, MIT, unpublished          manuscript.
Andrews, D.W.K. (1988a) “Asymptotics             for Semiparametric      Econometric      Models: I. Estimation     and
   Testing”, Cowles Foundation        Discussion Paper No. 908R, Yale University.
Andrews. D.W.K. (1988b) “Chi-square             Diagnostic   Tests for Econometric         Models: Introduction     and
   Applications”,    Journal of Econometrics, 31, 135-156.
Andrews. D.W.K. (19886) “Chi-sauare Diagnostic Tests for Econometric Models: Theory”, Econometrica,
   56, 1419-1453. ’         ’        L           -
Andrews, D.W.K. (1989) “Asymptotics            for Semiparametric      Econometric      Models: II. Stochastic Equi-
   continuity and Nonparametric        Kernel Estimation”, Cowles Foundation            Discussion Paper No. 909R,
   Yale University.
Andrews, D.W.K. (1992) “Generic Uniform Convergence”,                  Econometric Theory, 8, 241-257.
Andrews. D.W.K. (1993) “An Introduction             to Econometric     Applications    of Empirical Process Theory
   for Dependent Random Variables”, Econometric Reviews, ii, 183-216.
Andrews, D.W.K. (1994a) “Asymptotics               for Semiparametric       Econometric      Models Via Stochastic
   Equicontinuity”,     Econometrica, 62, forthcoming.
Andrews, D.W.K. (1994b) “Nonparametric             Kernel Estimation for Semiparametric          Models”, Econometric
   Theory, 10, forthcoming.
Andrews, D.W.K. and W. Ploberger (1994) “Optimal Tests When a Nuisance Parameter                             Is Present
   Only under the Alternative”,      Econometrica, 62, forthcoming.
Arcones, M. and E. Gine (1992) “On the Bootstrap of M-estimators                and Other Statistical Functional?,
   in: R. LePage and L. Billard, eds., Exploring the Limits of the Bootstrap, New York: Wiley.
Bera, A. K. and M. L. Higgins (1992) “A Test for Conditional           Heteroskedasticity     in Time Series Models”,
   Journal of Time Series Analysis, 13, 501-519.
Bierens, H. (1990) “A Consistent Conditional            Moment Test of Functional          Form”, Econometrica, 58,
   1443-1458.
Billingsley, P. (1968) Convergence of Probability Measures. New York: Wiley.
Cavanagh,     C. and R.P. Sherman (1992) “Rank Estimators                for Monotone       Index Models”, Bellcore
   Economics Discussion Paper No. 84, Bellcore, Morristown,                 NJ.
Chamberlain,      G. (1987) “Asymptotic     Efficiency in Estimation with Conditional          Moment Restrictions”,
   Journal of Econometrics, 34, 305-324.
Davies, R.B. (1977) “Hypothesis         Testing When a Nuisance            Parameter     Is Present Only under the
   Alternative”, Biometrika, 64, 247-254.
Davies, R.B. (1987) “Hypothesis         Testing When a Nuisance            Parameter     Is Present Only under the
   Alternative”, Biometrika, 74, 33-43.
De Jong, R.M. (1992) “The Bierens Test under Data Dependence”,                  Department      of Econometrics,   Free
   University, Amsterdam,       unpublished     manuscript.
Dudley, R.M. (1978) “Central Limit Theorems for Empirical                    Measures”,     Annals of Probability, 6,
   899-929.
Dudley, R.M. (1987) “Universal          Donsker Classes and Metric Entropy”,               Annals of Probability,     15,
   1306G1326.
Gallant, A.R. (1989) “On Asymptotic          Normality      When the Number of Regressors Increases and the
   Minimum Eigenvalues        of X,X/n Decreases”, Institute of Statistics Mimeograph                 Series No. 1955,
   North Carolina State University, Raleigh, NC.
Gallant, A.R. and G. Souza (1991) “On the Asymptotic Normality of Fourier Flexible Form Estimates”,
   Journal of Econometrics, 50, 329-353.
Ch. 37: Empirical      Process Methods      in Econometrics                                                           2293


Gine, E. and J. Zinn (1990) “Bootstrapping           General Empirical Measures”, Annals of Prabability,                 18,
    851-869.
Hahn, J. (1995) “Bootstrapping       Quantile Regression Estimators”, Econometric Theory, 11, forthcoming.
 Hansen, B.E. (1991) “Inference        When a Nuisance           Parameter     Is Not Identified        under the Null
    Hypothesis”,     Working   Paper No. 296, Rochester Center for Economic                  Research, University         of
    Rochester.
 Hansen, B.E. (1992a) “Testing the Conditional          Mean Specification in Parametric          Regression Using the
    Empirical     Score Process”,    Department       of Economics,      University      of Rochester,      unpublished
   manuscript.
 Hansen, B.E. (1992b) “The Likelihood Test under Non-standard               Conditions: Testing the Markov Trend
    Model of GNP”, Journal of Applied Econometrics, 7, s61-~82.
 Hlrdle, W. and 0. Linton (1994) “Applied Nonparametric                Methods”, in: Handbook of Econometrics,
   Volume 4. Amsterdam: North-Holland.
 Honore, B. (1992) “Trimmed LAD and Least Squares Estimation of Truncated and Censored Regression
    Models with Fixed Effects”, Econometrica, 60, 533-565.
 Horowitz, J.L. (1988) “Semiparametric        M-estimation    of Censored Linear Regression Models”, Adoances
    in Econometrics, 7, 45-83.
 Horowitz, J. L. (1992) “A Smoothed           Maximum       Score Estimator      for the Binary Response Model”,
   Econometrica, 60, 505-531.
 Horowitz,     J.L. and G.R. Neumann           (1992) “A Generalized         Moments       Specification    Test of the
   Proportional      Hazards Model”, Journal of the American Statistical Association, 87, 234-240.
Huber, P.J. (1967) “The Behaviour of Maximum Likelihood Estimates under Nonstandard                         Conditions”,
   in Proceedings ofthe Fifth Berkeley Symposium in Mathematical Statistics and Probability, 1,221-233.
   Berkeley: University of California.
 Huber, P.J. (1973) “Robust Regression: Asymptotics, Conjectures and Monte Carlo”, Annals ofstatistics,
    1, 799-821.
 Kim, J. and D. Pollard (1990) “Cube Root Asymptotics”,               Annals of Statistics, 18, 191-219.
 Klecan, L., R. McFadden,        and D. McFadden          (1990) “A Robust Test for Stochastic             Dominance”,
   Department      of Economics, MIT, unpublished          manuscript.
Koenker, R. and G. Bassett (1978) “Regression Quantiles”, Econometrica, 46, 33-50.
Kolmogorov,       A.N. and V.M. Tihomirov (1961) “s-entropy and e-capacity of Sets in Functional Spaces”,
   American Mathematical Society Translations, Ser. 2, 17, 277-364.
Manski, C.F. (1975) “Maximum          Score Estimation of the Stochastic Utility Model of Choice”, Journal
   of Econometrics, 3, 205-228.
McFadden,       D. (1989) “A Method of Simulated Moments for Estimation of Discrete Response Models
   without Numerical Integration”,        Econometrica, 57, 995-1026.
Newey, W.K. (1989) “The Asymptotic                Variance    of Semiparametric        Estimators”,      Department      of
   Economics, Princeton University, unpublished            manuscript.
Newey, W. K. (1990) “Efficient Instrumental         Variables Estimation of Nonlinear Models”, Econometrica,
   58, 809-837.
Newey, W.K. (1991) “Uniform Convergence                in Probability   and Stochastic       Equicontinuity”,      Econo-
   metrica, 59, 1161-l 167.
Newey, W.K. and D. McFadden (1994) “Estimation                in Large Samples”, in: Handbook of Econometrics,
   Volume 4. Amsterdam:        North-Holland.
Newey, W.K. and J.L. Powell (1987) “Asymmetric Least Squares Estimation and Testing”, Econometrica,
   55, 819-847.
Olley, S. and A. Pakes (1991) “The Dynamics of Productivity               in the Telecommunications           Equipment
   Industry”, Department      of Economics, Yale University, unpublished             manuscript.
Ossiander,     M. (1987) “A Central Limit Theorem under Metric Entropy with Bracketing”,                        Annals of
   Probability, 15, 897-919.
Pakes, A. and S. Olley (1991) “A Limit Theorem for a Smooth Class of Semiparamettic                         Estimators”,
   Department      of Economics, Yale University, unpublished          manuscript.
Pakes, A. and D. Pollard (1989) “Simulation               and the Asymptotics        of Optimization        Estimators”,
   Econometrica, 57, 1027-1057.
Pollard, D. (1982) “A Central Limit Theorem for Empirical                  Processes”, Journal of the Australian
   Mathematical Society (Series A), 33, 235-248.
Pollard, D. (1984) Convergence of Stochastic Processes. New York: Springer-Verlag.
2294                                                                                                     D. W.K. Andrews


Pollard, D. (1985) “New Ways to Prove Central Limit Theorems”, Econometric Theory, 1, 2955314.
Pollard, D. (1989) “A Maximal Inequality                for Sums of Independent         Processes under a Bracketing
   Condition”,    Department      of Statistics, Yale University, unpublished          manuscript.
Pollard, D. (1990) Empirical Processes: Theory and Applications. CBMS Conference Series in Probability
   and Statistics, Vol. 2. Hayward, CA: Institute of Mathematical                Statistics.
Powell, J.L. (1984) “Least Absolute Deviations Estimation for the Censored Regression Model”, Journal
   qf Econometrics, 25, 303-325.
Powell, J.L. (1986a) “Censored Regression Quantiles”, Journal of Econometrics, 32, 143- 155.
Powell, J.L. (1986b) “Symmetrically            Trimmed Least Squares Estimators              for Tobit Models”, Econo-
   metrica, 54, 1435-1460.
Prohorov,      Yu.V. (1956) “Convergence           of Random       Processes and Limit Theorems            in Probability
   Theory”, Theory of Probability and Its Applications, 1, 157-214.
Robinson, P.M. (1988) “Root-N-Consistent                Semiparametric     Regression”, Econometrica, 56, 931-954.
Sherman,      R.P. (1992) “Maximal           Inequalities   for Degenerate       U-processes       with Applications       to
   Optimization      Estimators”,    unpublished      manuscript,    Bell Communications          Research, Morristown,
   NJ.
Sherman, R.P. (1993) “The Limiting Distribution                  of the Maximum         Rank Correlation       Estimator”,
   Econometrica, 61, 123-137.
Sherman,      R.P. (1994) “U-processes         in the Analysis of a Generalized             Semiparametric      Regression
   Estimator”, Econometric Theory, 10, forthcoming.
Shorack, G.R. and J.A. Wellner (1986) Empirical Processes with Applications to Statistics. New York:
   Wiley.
Stinchcombe,      M.B. and H. White (1993) “Consistent Specification Testing with Unidentified Nuisance
   Parameters     Using Duality and Banach Space Limit Theory”, Department                     of Economics, University
   of California, San Diego, unpublished            manuscript.
Wald, A. (1943) “Tests of Statistical Hypotheses             Concerning     Several Parameters        When the Number
   of Observations      Is Large”, Transactions of the American Mathematical Society, 54, 426-482.
Wellner, J.A. (1992) “Empirical        Processes in Action: A Review”, International Statistical Review, 60,
   247-269.
Whang, Y.-J. and D.W.K. Andrews (1993) “Tests of Model Specification                          for Parametric    and Semi-
   parametric    Models”, Journal of Econometrics, 57, 277-3 18.
White, H. and Y. Hong(1992) “M-testing Using Finite and Infinite Dimensional                     Parameter Estimators”,
   Department      of Economics, University of California, San Diego, unpublished                  manuscript.
White, H. and M. Stinchcombe            (1991) “Adaptive Efficient Weighted Least Squares with Dependent
   Observations”,     in Directions in Robust Statistics and Diagnostics, Part II, ed. by W. Stahel and S.
   Weisberg. Berlin: Springer.
Yatchew, A. (1992) “Nonparametric             Regression Tests Based on Least Squares”, Econometric Theory,
   8,435-451.



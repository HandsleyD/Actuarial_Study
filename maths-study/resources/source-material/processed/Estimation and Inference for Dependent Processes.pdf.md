---
normalized_id: shared-pdf-reference-estimation-and-inference-for-dependent-processes
exam_code: SHARED
material_scope: estimation and inference for dependent processes.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Estimation and Inference for Dependent Processes.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-estimation-and-inference-for-dependent-processes

2640


       7.4.    Estimating     the asymptotic           variance                              2697

       7.5.    Asymptotic      efficiency                                                    2699

       7.6.    Testing                                                                       2700


Part III.      The globally            nonstationary,              weakly dependent   case   2701

 8.    General      results                                                                  2701
        8.1.   Introduction                                                                  2701
        8.2.   Asymptotic      normality      of an abstract        estimator                2702
 9.    Asymptotic         normality          of M-estimators                                 2706
        9.1.   Asymptotic      normality                                                      2706
        9.2.   Estimating     the asymptotic           variance                              2710


Part IV.       The nonergodic               case                                             2710

10.    General      results                                                                  2710
       10.1.   Introduction                                                                  2710
       10.2.   Abstract     limiting    distribution      result                              2711
11. Some results for linear models                                                           2713
12. Applications to nonlinear models                                                         2723
Appendix                                                                                     2725
References                                                                                   2733
Ch. 45: Estimation   und Ir&-mce,for   Dependrnt   Procrsses                              2641




Abstract

This chapter provides an overview of asymptotic results available for parametric
estimators in dynamic models. Three cases are treated: stationary           (or essentially
stationary) weakly dependent data, weakly dependent data containing deterministic
trends, and nonergodic        data (or data with stochastic        trends). Estimation      of
asymptotic covariance matrices and computation             of the major test statistics are
covered. Examples include multivariate           least squares estimation   of a dynamic
conditional mean, quasi-maximum         likelihood estimation of a jointly parameterized
conditional   mean and conditional      variance, and generalized method of moments
estimation    of orthogonality    conditions.     Some results for linear models with
integrated variables are provided, as are some abstract limiting distribution         results
for nonlinear   models with trending data.

Part I.     Introduction and overview



1.   Introduction

 This chapter discusses estimation        and inference in time series contexts. For the
 most part, estimation techniques that are suitable for cross section applications            -
 see Newey and McFadden            (this Handbook) - are either directly applicable          or
 applicable after slight modification        to time series problems. Just a few examples
 include least squares, maximum likelihood and method of moments estimation.
 Complications     in the analysis arise due to the dependence and possible trends in
 time series data.
    Part II of this chapter covers estimation              and inference for the essentially
stationary, weakly dependent case. This material comprises the bulk of the chapter
and is also the case covered in most of the econometrics               literature. The work of
 Bierens (1981, 1982), Domowitz and White (1982), White (1984), Bates and White
(1985), Gallant (1987), Gallant and White (1988) and Potscher and Prucha (199 la, b)
contains various catalogues of assumptions            that can be used in various estimation
settings. Part II synthesizes and extends some of these results, but our emphasis is
somewhat different from the earlier work. While we state some formal results with
regularity conditions,     our focus is on the assumptions          that impact on how one
performs inference. These assumptions           often involve conditional      moments and are
therefore straightforward      to interpret.
    The approach in Part II of this chapter is most similar to the book by White
(1993). White analyzes quasi-maximum           likelihood estimation for heterogeneous (but
essentially stationary), weakly dependent processes under possible model misspeci-
fication. His results are very general and technically               sophisticated.   Here, by
2642                                                                                   J.M.   Wooldridgr


restricting ourselves to models where the primary feature of interest is correctly
specified, and by focusing on weak rather than strong consistency of the estimators,
we obtain results with simple regularity conditions that are nevertheless applicable
in a variety of contexts. We also make some further simplifying assumptions,                       such
as assuming that moment matrices settle down to some limit. The hope is that,
after seeing a stripped-down            analysis that de-emphasizes          the role of regularity
conditions,    the reader can then tackle the more advanced treatments                      referenced
above. At the same time the inference procedures offered here are fairly general.
    When the data are trending the standard uniform law of large numbers approach
cannot be used to establish consistency                and to find the limiting distribution          of
 optimization     estimators.     Nevertheless,       if the data are weakly dependent              one
 generally expects the estimation techniques useful in the essentially stationary case
 to still have good properties in the trending, weakly dependent                    case. Part III of
 this chapter draws on the work of Crowder (1976), Heijmans and Magnus (1986),
Wooldridge (1986) and others to establish the consistency and asymptotic normality
(when properly scaled) of a general class of optimization                  estimators for globally
 nonstationary     processes that are weakly dependent. These results can be applied
to M-estimation        and method of moments estimation.             An important        consequence
 of Part III is that the common practice of performing inference in trending, weakly
dependent contexts exactly as if the stochastic process is essentially stationary and
weakly dependent is justified quite generally.
    The last part of this chapter, Part IV, covers limiting distribution                 results when
the process (or at least the score of the objective function) is not weakly dependent.
The case when at least some elements of the underlying                      stochastic process are
integrated of order one, or 1(l), is of particular interest and has received a lot of
 attention recently [just a few references include Phillips (1986, 1987, 1988), Phillips
 and Durlauf (1986), Park and Phillips (1988, 1989), Phillips and Hansen (1990)
and Sims et al. (1990)]. Most of the specific work on nonergodic processes has been
 in the context of linear models. Some abstract results are available for nonlinear
models, for example Basawa and Scott (1983), Domowitz (1985), Wooldridge (1986),
Jeganathan      (1988) and Domowitz‘ and Muus (1988). In Part IV we present a
modification     of a result in Wooldridge           (1986) that applies immediately          to linear
models; we also given an example of a nonlinear                    application      with nonergodic
data.
    A few remaining features of this chapter are worth drawing attention to at this
point. First, we do not discuss the interpretation               of the parameters        in dynamic
models beyond assuming that they index a conditional                     distribution,    conditional
expectation or conditional         variance. Models that are expressed in terms of under-
lying innovations       are most easily handled by expressing them in terms of a condi-
tional expectation       or conditional     distribution    in observable variables.
    Second, although the subsequent              results apply to linear models, most of the
conditions are explicitly set out for nonlinear models (the exception is Section 11).
Unsurprisingly,      these are more restrictive than the conditions              needed to analyze
Ch. 45: Estitnation   and Inference,for   Dependent Proce.ssrs                              2643


linear models. While it is possible to relax the assumptions  for application  to linear
models, we do not do that here.
   Finally, a warning about the notation. We have tried to limit conflicts, but some
are unavoidable.    It is best to view the notation   as being “local” in nature: the
same symbol can be used to represent different quantities         in different sections.
Hopefully this will not cause confusion.



2.    Examples        of stochastic processes

The classification of the results in Parts II, III, and IV relies heavily on the notions
of essential stationarity and weak dependence. It would take us too far afield to
define and analyze the many kinds of dependence concepts (such as various mixing
and near epoch dependence conditions)               that have been used recently in the time
series econometrics       literature    for generally      heterogeneous     processes. For the
purposes of estimation and inference, what is most important                 are the implications
of these concepts for limiting distribution             theory, and this section provides an
informal discussion primarily from this perspective. As we see below, this turns
out to be imperfect; nevertheless,          it strips a complicated      literature down to its
essentials for the asymptotic analysis of estimators in time series settings. Formal
definitions   of the types of stochastic processes discussed below are provided in
Rosenblatt     (1978), Hall and Heyde (1980) Gallant and White (1988), Andrews
(1988) and Piitscher and Prucha (1991a, b).
   Let {x,: t = 1,2,. . .} be a scalar stochastic process defined on the positive integers
[for definitions   of a stochastic process and other basic time series concepts, see
Brillinger (1981)]. For our purposes the idea that {xt} is essentially stationary is
best captured by the (minimal) assumption               that E(x:) is uniformly bounded. An
immediate implication         of essential stationarity     is that the variance of the partial
sum,

                        T
       02,=Var
                      ( )
                       1 x,
                      I=1
                                ,                                                           (2.1)

is well-defined.       If, in addition,

         of = O(T),                                                                         (2.2)

       CT
            -2 = O(T’).                                                                     (2.3)

and

      a;’      f: (x, - E(x,)) -% Normal(0,          l),                                    (2.4)
then we say that {x~} is weakly dependent. Condition (2.2) implies that the variance
of the partial sum is bounded above by a multiple of T; it rules out highly dependent
processes with positive autocorrelations           that do not die out to zero sufficiently
quickly. Condition       (2.3) implies that the variance of the partial sum is bounded
below by a (positive) multiple of T; among other things it rules out processes with
strong negative serial correlation.         Condition      (2.4) states that {x,} satisfies the
central limit theorem (CLT).
    These definitions of essential stationarity       and weak dependence are not without
their glitches. First, there are many strictly stationary              sequences that have an
infinite second moment; by the above convention, such processes are not essentially
stationary.    Actually, defining essential stationarity        to rule out these cases serves
a purpose because stationary          processes with an infinite second moment do not
satisfy the CLT. Because we do not deal with such applications                 in this chapter it
seems easiest to exclude them in the definition of essential stationarity.
    Second, there are processes exhibiting very little temporal dependence that never-
theless violate (2.3). The leading example is x, E e, - e,_ i, where (e,: t = 0, 1,2,. . .}
is an i.i.d. sequence with finite second moment. Then a$/T+O                even though x, and
X ,+j are independent       for j 3 2. The problem again is that such a sequence does
 not satisfy the CLT, so we rule it out in the definition of weak dependence.
    One might argue that, as long as we are assuming essential stationarity               - which
 we sometimes refer to as local nonstationarity or bounded heterogeneity ~ we might
as well simplify things further and restrict attention to the strictly stationary case.
 This argument       has some merit because the inference procedures                are identical
whether we assume strict stationarity          or allow for bounded heterogeneity,         at least
for correctly specified models. Nevertheless, it is important to know that asymptotic
results are available for the heterogeneous           case so we can handle processes with
deterministic    seasonality, structural breaks, and other forms of temporal hetero-
geneity. In addition, as will be seen in Section 4, even if the underlying stochastic
process is strictly stationary        the sequence of objective functions           defining the
estimation problem need not be.
    As we will see in Section 4.4, it is the gradient or score of the objective function
evaluated at the “true” parameters           that should satisfy the CLT in applications
with essentially stationary, weakly dependent data. For many problems this follows
from the essential stationarity        and weak dependence          of the underlying     process,
along with some additional moment conditions. Still, it is not always true that the
score is weakly dependent if the underlying            stochastic process is, especially when
the objective function depends on a growing number of lags of the data. A simple
example is nonlinear least squares (NLS) estimation of an MA(l) model (moving
average of order one) when a white noise series has been overdifferenced:                     even
though the first difference of a white noise series is stationary and weakly dependent,
the score of the NLS objective function evaluated at the true parameter                     is not.
See, for example, Quah and Wooldridge               (1988). The other case is also possible:
the underlying      stochastic process could have an infinite second moment, or be
Ch. 45:   Estimation      und ltlfkwcr     for   Dependent   Proce.w.~                                    2645


strongly      dependent,          but the        score of the objective    function   could   be essentially
stationary   and weakly dependent.
    The point of the previous paragraph              is that the terms “essentially stationary”
and “weak dependence”             really apply to a particular         function of the underlying
process, namely the score of the objective function. For many applications                            this
distinction   is irrelevant. But, when in doubt, it is the score that should be studied
for weak dependence properties.
    There has been much work on establishing                  primitive conditions        under which
stochastic processes satisfy the CLT. Most of the early work on limiting distribution
theory - which focused on maximum likelihood estimation ~ relied heavily on the
central limit theorem for martingale difference sequences. This is because the score
of the conditional      log-likelihood    is a martingale difference sequence under correct
dynamic specification (more on this in Section 5). Roussas (1972) analyzed the MLE
for strictly stationary, ergodic data and employed the CLT for strictly stationary
martingale     differences. McLeish (1974) proved CLTs for martingale                         difference
sequences that are not strictly stationary;             see also Hall and Heyde (1980). These
results allowed for substantial         heterogeneity      in the underlying stochastic process,
and they were used in the work of Bhat (1974), Basawa et al. (1976) and Crowder
(1976).
    Recent work in the econometrics           literature covers a broader class of estimators
and allows for dynamic misspecification.                For many problems with misspecified
dynamics the martingale CLT cannot be applied. Thus, the econometric                           work on
limit theory for estimation with essentially stationary, weakly dependent processes
has relied on various mixing conditions                available in the theoretical         time series
literature. Under certain moment and mixing assumptions                     the process {x,} satisfies
the central limit theorem. In the strictly stationary case, Rosenblatt (1956) proves
a CLT for cc-mixing (strong mixing) sequences and Billingsley (1968) proves results
for &mixing (uniform mixing) sequences and functions of &mixing sequences; see
also Rosenblatt        (1978) and Hall and Heyde (1980). McLeish (1975) extended
Billingsley’s results to allow for bounded heterogeneity.                   Wooldridge      and White
(1989) and Davidson (1992) have proven CLTs for “near epoch dependent” (NED)
functions of underlying          mixing sequences. Among other things this allows for
infinite moving averages in an underlying               mixing sequence.
    It might be helpful at this point to give an example of a weakly dependent
process. Let {e,: t~i?} be an independent,              identically    distributed   (i.i.d.) sequence
with gf = E(ef) < co, E(e,) = 0. Let {4j: j = 0, 1,2,. . .} be a sequence of real cons-
tants such that


      j=O
          2   IOjl<a.                                                                                    (2.5)

Then we can define a process                      (x,: t = 1,2,. . .> by

      xt=      2
               j=O
                       4jet-j,           t= 1,2,...                                                      (2.6)
2646                                                                            J.M.   Wooldridge


(in the sense that C,?= o 4je, _ j exists almost surely). Provided that CT= 0 #j # 0, (2.3)
holds and it follows by Anderson (1971, Theorem 7.7.8) that

                    T

       clT-=       c x, % Normal(0, 1)
                   1=1
                                                                                             (2.7)



where



                                                                                             (2.8)


[See Hall and Heyde (1980, Corollary 5.2) for a weaker set of conditions.]                    The
summability       condition     on {4j: j = 1,2,. . .} ensures (2.2); it allows for much more
dependence       than a stable autoregressive         moving average (ARMA) process with
i.i.d. innovations,     but (2.5) does imply that 4j + 0 asj -+ cc at a sufficiently fast rate.
    We can easily allow for bounded heterogeneity                by changing the assumption
about the underlying sequence {e,}. Now assume that the e, are independent,                  non-
identically     distributed,    or i.n.i.d, with E(le,12+“) bounded for some 6 > 0. Then
Fuller (1976, Theorem 6.3.4) implies that (2.4) holds. This covers heterogeneous
ARMA models with independent                  innovations.    Also, if we allow x, to have a
time-varying       mean pt then {x1 - p,} satisfies the CLT.
    When we relax the requirement            that E(x:) is uniformly bounded we arrive at
the notion of a globally nonstationary             process. Even though such processes are
growing or shrinking over time, it is entirely possible for them to satisfy the CLT
(2.4). [Condition        (2.2) no longer holds, but this is not a problem.]         As a simple
example of a globally nonstationary             but weakly dependent process, define


       x, = tu,,        t= 1,2,...                                                           (2.9)

where {u,:t= 1,2,... } is a weakly dependent series with E(uf) uniformly bounded
and E(u,) = 0, t = 1,2,. . . (for example, {nt} could be i.i.d.). Note that E(xf) = O(t2)
and rr’, = 0(T3). Nevertheless,       under general conditions,     (2.4) holds. [See, for
example, Wooldridge      and White (1989) and Davidson (1992).]
   There are several examples of processes, including ones that are strictly stationary
and ergodic, that are not weakly dependent. Robinson (1991b) calls such processes
strongly dependent.   A general class of strongly dependent         processes is given by
(2.6) where the coefficients {#j} are square summable


                                                                                            (2.10)
Even though such a process is covariance stationary,       without further restrictions
on {4j} the variance of the partial sum can be of order larger than T, so (2.2) does
not hold. Examples are the long memory or fractionally integrated processes with
degree of integration     between zero and one half; see, for example, Brockwell and
Davis (1991). Little is known about the asymptotic distribution     of estimators from
general nonlinear     problems when the underlying    sequence is strongly dependent
[for some recent results for a simple model, see Sowell (1988)]. The results in Part
II or Part IV may be applicable, but this remains an important         topic for future
research.
   The term nonergodic is reserved for those processes that exhibit such strong
dependence    they do not satisfy the law of large numbers. A popular example of
a nonergodic    process is


     x,=x,-i   +e,,      t= 1,2,...,                                               (2.11)

where {e,: t = 1,2,. . .} is an i.i.d. sequence and x0 is a given random variable. For
illustration,  assume that E(ef) < cc and E(e,) = 0. Even under these assumptions
the first moment of x, need not exist. If we add E(xi) < co and x0 is uncorrelated
with all e,, it is easy to see that Var(x,) = O(t). Also, E(x,) = E(x,) for all t, so the
mean of x, is constant over time when it exists. Still, the process {x,> does not
return to its mean with any regularity (it is nonergodic),       and the sample average
X, will not converge in probability        or in any other meaningful  sense to E(x,).
    The work of Phillips (1986, 1987) has sparked a recent interest in asymptotic
theory with general integrated processes, of which (2.11) is a special case. A general
integrated of order one, or Z(l), process, can be written as x, = LX+ x,_ 1 + u,, where
{u,> is an essentially stationary, weakly dependent zero mean process with


     lim Var( T-112$lo,)>0.                                                        (2.12)
     T+CC




[Condition    (2.12) ensures that the process (Axt 3 x, -x,-1}     has not been over-
differenced.] When a # 0 the process is said to be 1(l) with drift, otherwise it is
Z(1) without drift.
   Before turning to Part II we should emphasize that the partitioning     of the results
into Parts II, III, and IV is determined      by the limiting distribution    theory. In
particular, a separate consistency result is given in Part II that does not require
the process on any function of it to be weakly dependent. In the strictly stationary
case only ergodicity of the underlying process and a moment condition are needed
for consistency, so that it applies to strongly dependent processes. However, the
asymptotic normality results rely on weak dependence of the score. Parts III and
IV do not contain separate consistency      results; consistency is proven along with
the limiting distribution   result.
2648


3.     Types of estimation     techniques

The approach to estimation in this chapter is what Goldberger (1968) and Manski
(1988) have termed the analogy principle. To apply the analogy principle one must
know the population       problem that the parameters of interest solve in order to con-
struct a sample counterpart.         This is where basic probability     theory, and especially
properties of conditional         expectations  and conditional     distributions,     play a key
role. Often population      parameters can be shown to solve a minimization               or maxi-
mization problem, which then leads to the class of optimization                   estimators dis-
cussed in this chapter. To show how the analogy principle is applied, we consider
the example of nonlinear         least squares estimation.
   Suppose that {(x,, y,): t = 1,2,. .} is a stochastic process, where y, is a scalar and
x,E%‘, is a vector whose dimension may depend on t. Allowing the number of condi-
tioning variables x, to grow with t allows for cases such as x, = (y,_ 1, y,- 2,. . . , y,)
orXt=(Zf,yf-l,Zt-l,...,       y,, zl), where zI is a 1 x J vector of conditioning        variables,
as well as for static regression models with x, = zf. Suppose that Ely,l < a3 for all
t and that interest lies in the conditional       expectation  E(y,jx,). A parametric model
of this conditional     expectation is {m,(x,, 0): x,E%“,, 0~ 0 c Rp} (0 is the parameter
set). The model is correctly specified if for some 0,~ 0

       E(Y,lX,)   =   m,(x,,ho),   t= 1,2,....                                                (3.1)

To see how to estimate 8,, we rely on a well-known fact from probability       theory.
Namely, if E(y:) < co, then pt(xt) E E(y,(x,) is the best mean square error predictor
of y,. In other words, for any other function y,(x,) such that E[g,(x,)2] < co,

       EC(Y, - PL,(xt))21G EC(Yt - st(xJ)21.                                                  (3.2)

It follows that if the parametric       model nlr(x,, 0) is correctly    specified   then

       EC(YV,-    m,(-%RJ21 d EC(Y,- m,(x,,@)21                                               (3.3)

for all 8~0.      This suggests estimating       8, by solving   the sample   problem


                                                                                              (3.4)


which leads to the nonlinear least squares estimator.
   Closely tied to the analogy principle is the concept of Fisher consistency. An
estimation  procedure is Fisher consistent if the parameters      of interest solve the
population   analog of the estimation     problem. Inequality   (3.3) shows that least
squares is Fisher consistent for estimating the parameters     of a wnditional    mean.
Using the Kullback-Leibler     information     inequality, we show in Section 5 that
Ch. 45: Estimation   and lr@mce    ,fiv Dependent    Processes                             2649



maximum       likelihood      is Fisher consistent   for estimating     the parameters     of a
correctly specified conditional density, regardless of what the conditioning         variables
X, are.
   Many other estimation          procedures, including multivariate      weighted nonlinear
least squares, least absolute deviations, quasi-maximum          likelihood, and generalized
method of moments are all Fisher consistent for certain features of conditional               or
unconditional      distributions.    We cover several of these examples in Sections 5, 6
and 7.



Part II.     The essentially      stationary,       weakly dependent case



4.     Asymptotic      properties of M-estimators

4.1.    Introduction

In this section we study the consistency           and asymptotic    normality     of a class of
estimators known as M-estimators          (which stands for “maximum           likelihood-like”
estimators), a term introduced by Huber (1967) in the context of i.i.d. observations.
The class of M-estimators       includes the maximum likelihood estimator, the quasi-
maximum      likelihood estimator,      multivariate    nonlinear  least squares and many
other estimators used by econometricians.            The terminology     adopted here is not
universal. Piitscher and Prucha (1991a, b) refer to a more general class of optimi-
zation estimators as M-estimators.       Burguete et al. (1982) and Piitscher and Prucha
(199 1a, b) call the estimators studied in this section least mean distance estimators.
   The parameter space 0 is a subset of Rp and 0 denotes a generic P x 1 vector
contained in 0. We have a sequence of random variables {w,: t = 1,2,. .}. Denote
the range of w, by -W;, where “IIT, is a subset of a finite dimensional                Euclidean
space whose dimension may depend on t.
   The objective function for M-estimation           is a sample average:


       T- l i      qt(w, a                                                                 (4.1)
             t=1



where qr: W, x 0 + R. There are a few different situations       that warrant special
attention.  The first is when {w,: t = 1,2,. . .} is a sequence of strictly stationary
(hereafter, simply “stationary”)    M x 1 random vectors - whereby Y%‘“~   can be taken
to be a subset 1w of RM for all t= 1,2,...-         and there exists a time-invariant
function q: W x 0 -+ R such that qJw,, 0) = q(w,, d). Then each summand in (4.1)
depends on t only through the observation       w,. An important  consequence     of this
setup is that {q(w,, Q)} is stationary for each 0~0, and this facilitates application
of laws of large numbers and central limit theorems.
2650                                                                                J.M.   Wooldridcp



   Another case of interest, which requires notably more technical work, is when
the dimension of W, grows with t. This can happen when one is interested in getting
the dynamics of a model for a conditional mean or a conditional distribution correctly
specified. For example, suppose that for a scalar sequence {y,} and a vector sequence
{Z,E RK} one is interested in E(yllzl, y,- 1, ztm i, . . , y,, zl). Let m,(x,, 0) be a model
for this conditional       expectation,     where x, = (zt,yfP1,zt_i,.      . .,yr,zi).   If E(y,(x,)
depends on all past lags of y and z then the model m,(x,,8) should reflect this.
Thus, letting w, = (y,, z,, yt_ i,. . . , y,, z,), nonlinear    least squares estimation        of 8,
such that E(y,(x,) = m,(x,, 0,) would take qJw,, 0) = (y, - m,(x,, 8))2. Note that even
if {(y,, z,)} is stationary,     {m,(x,, 0)) is not if E(y,I z,, y,- i, zr- 1,. . .) depends on all
past lags ~ such as in finite order moving average models. If E(y,( zf, y, _ 1, z, _ 1,. . .)
depends on a finite number of lags of y and z - such as in finite order autoregressive
models - then we are essentially in the stationary            case described above.
   Heterogeneity      in {qt( w,, O)} can also arise when interest lies in a model relating an
observable sequence to an unobservable            sequence. For example, let (e,: t = 0,1,2,. .}
be an i.i.d. sequence with E(ef) < co and E(e,) = 0, and consider an MA(l) model
for observable y,:

       y, = e, + 8 e t-1,
                     0
                                    t= 1,2,...                                                  (4.2)

where 18,I < 1. One can study estimation of 9, in the previous framework by finding
the regression function E(y,Jy,_ i, . . , yl) (a tractable calculation in this simple
example). In practice one often sees a different approach used: set the time zero
residual equal to zero and then build up the residual function recursively. This
leads to the psuedo-regression  function

                                                     f-l

       m,(x,,e)Em,(Y,-,,Y,-2,...,Y,,8)=          -    1        (-eljYt-j.                       (4.3)
                                                     j=    1



This is not a true regression function because m,(x,, 0,) # E(y,I x,) = E(y, ly,- i, . . . , yi).
 Nevertheless, because of the invertibility assumption IO, I < 1, E I E(y, I y, _ 1,. . . , y,) -
&-I,...,       y,, fl,)l -+O as t + 00 at the rate I fl,\‘. This is enough to consistently
estimate 0, by nonlinear           least squares. Once again the technical complications
arise because, even though the observable                   data are stationary,   the sequence of
summands in the objective function is not.
    Yet a different approach that avoids both approximation                   arguments and com-
plicated expectations calculations is to ensure that (4.3) is a true regression function
by changing the assumption             about how y, is generated. If we assume that e, s 0,
then @IY,-       1,. . . ,y,) is given by (4.3) with 8 = OO.Now {yt: t = 1,2,. . .} as well as
{qt(wt, O)} is a heterogeneous          sequence.
   Of course heterogeneity           in {qt(w,,fl)}    a 1so arises with fixed dimensional     w, if
{wt} constitutes a heterogeneously           distributed sequence, as in Domowitz and White
(1982) White and Domowitz (1984) and Bates and White (1985).
Ch. 45:   Estimation   und Infhwre    ,fiw Dependrnf   Proces.ses                                  265 1


4.2.      Consistency

It is convenient        to begin with two definitions.


Definition 4.1

A sequence of random                 variables    {z,: t = 1,2,. . .} satisfies   the weak law of large
numbers (WLLN) if
     (i) ~Clz,ll< 03,            t= 1,2,...;
    (ii) lim,,,       T- ’ C,‘= 1E(z,) exists;
   (iii) T lx,‘= I (zr - E(z,)} A 0.
Condition       (ii) of this definition is not needed for what follows, but it entails            little
loss of generality and simplifies the statement of conditions.


Dejinition 4.2

Let 0 c KY, let {IV,:t = 1,. . .} be a sequence of random vectors with w,E%‘“,,
t= 1,2,...     and let {q,: “IVYx 0 -+ [w,t = 1,2,.. .} be a sequence       of real-valued
functions. Assume that
     (i) 0 is compact;
    (ii) qt satisfies the standard measurability   and continuity conditions on %$ x 0,
         t= 1,2,... (see Definition A.2 in the Appendix);
   (iii) E[lq,(w,,8)1] < co for all OEO,t= 1,2,...;
   (iv) lim,,,      T-l CT= 1E[q,(w,, O)] exists for all 8~0;
   (v) maxoEBl Tp ‘CT=1dw,, ‘4- ECdw,, @II 3 0.
Then (qt(w,, O)} is said to satisfy the uniform weak law of large numbers (UWLLN)
on 0.


When applied to vector or matrix functions this definition        applies element by
element. Condition (iv) is an inconsequential   but convenient   simplification.
   When {W,EVV c FP} is stationary       and ergodic, conditions    sufficient for the
UWLLN     to hold are relatively straightforward.    The following result is due to
Ranga Rao (1962); see also Hansen (1982).

Theorem 4.1.           U WLLN        for the stationary        ergodic case

Let 0 c lQp, let {w~E”K: t = 1,2,. . .} be a sequence of stationary and ergodic M x 1
random vectors and let q: “IV x 0 + R be a real-valued function. Assume that
     (i) 0 is compact;
    (ii) q satisfies the standard  measurability     and continuity   requirements on
         7V-x 0;
   (iii) for some function b: YV -+ R+ with E[b(w,)] < m, lq(w, @I d b(w) for all
         dE 0.
Then {q(w,,Q)} satisfies the UWLLN on 0.
2652                                                                        J.M.   Wooldridgc


The proof of Theorem 4.1 - which is very similar to the i.i.d. case (see Newey and
McFadden (Lemma 2.4)) - is driven by the fact that if {wl} is stationary and ergodic
then so is any time-invariant       function of it. Note carefully that we have only
assumed ergodicity here; as discussed in Section 2 this allows for fairly strong
forms of dependence.
   If we relax the stationarity  assumption    then the conditions for the UWLLN are
notably more complicated,       especially since we are allowing the dimension      of w,
to grow. Here we follow Andrews (1987) and impose some smoothness                 on the
objective function. Then, as in Newey (1991a), a pointwise WLLN can be turned
into a UWLLN. The following result is a corollary of Newey (1991a, Corollary 3.1).
A proof that does not rely on the notion of stochastic equicontinuity     ~ see Andrews
(this Handbook) and Newey and McFadden (Section 2.8) - is given in the Appendix.



Theorem 4.2.     U WLLN    for the heterogeneous    case

Let 0, (We: t = 1,2,. . .}, and {qt: wt x 0 + IF!:t = 1,2,. . .} be as in Definition     4.2.
Assume that
    (9 0 is compact;
   (ii) qt satisfies the standard    measurability     and continuity   requirements      on
        “iVt x 0, t = 1,2,. . . ;
  (iii) for each %E0, {qt(w,, %):t = 1,2,. . .} satisfies the WLLN;
  (iv) there exists a function ct(wt) 3 0 such that
         (a) for all %,,%,E@, Iqt(wt,%,) - qJw,,%,)l d c,(~,)ll%, - e2 II;
         (b) {c,(w,)> satisfies the WLLN.
Then    (qt(w,, %)} satisfies the UWLLN on 0. (For proof see Appendix.)

If qJw,, .) is continuously differentiable   on an open, convex     set @?containing       0
then the natural choice for ct(wt) is

       4%) = sup IIVs4r(Y, 4 II,                                                        (4.4)
               BEV;

provided it satisfies the WLLN. To see why this choice satisfies (iv) (a), simply use
a mean value expansion of qt about 8.
   Because most time series applications     involve smooth objective functions, the
difficulty in applying Theorem 4.2 usually lies in verifying that {qJw,,%)} and
{c,(w,)} satisfy the WLLN for any 8~0. These WLLN requirements                restrict the
dependence analogous to the ergodicity assumption       for the stationary case. If the
dimension of w, is fixed, and {w,} is an M- or @mixing process with mixing coeffi-
cients declining at an appropriate   rate, verification of (iii) and (iv) (b) is straight-
forward because qt(wt, %)inherits its mixing properties from {We}. See, for example,
Domowitz      and White (1982), White (1984), White and Domowitz              (1984) and
Potscher and Prucha (1989, 1991a). McLeish (1975) introduced             strong laws of
large numbers that can be applied when qt(w,, 0) depends on an increasing number
of lags of a mixing process. See Gallant and White (1988), Hansen (199 1a), Piitscher
and Prucha (1991a) and White (1993) for further discussion of strong laws. Because
our focus is on weak consistency,       the general WLLNs of Andrews (1988) are
especially relevant here; they can be used to verify (iii) and (iv) (b) under satisfyingly
weak assumptions,    including conditions that allow for strongly dependent hetero-
geneous processes (although when applied to the stationary           case, the conditions
are always more restrictive than ergodicity).
   Before stating a formal consistency result for M-estimators,       it is useful to allow
for the presence of some estimated “nuisance” parameters. Let yT denote an R x 1
vector estimator such that plim pT = y* for some Y*ET c RR. The (two-step) M-
estimator 8, solves


     mini q,(w,,0;%I,                                                                   (4.5)
      BE@r=l

where q, is now defined     on wt x 0 x I-.


Theorem   4.3.   Weak   consistency   of M-estimators

Let 0 c Rp, I- c RR, {wt~wt: t = 1,2,. . .} be a sequence of random vectors, and
let {y,: YY*x 0 x f + R: t = 1.2,. . .) be the sequence of objective functions. Assume
that
M.l:       (i) 0 and I- are compact;
          (ii) % +*El-;
         (iii) qt satisfies the standard measurability and continuity  requirements  on
               “iY~xOxl-,t=1,2         )....
M.2: {q,(w,, 8; y): t = 1,2,. . .} satisfies the UWLLN on 0 x r;
M.3: 0, is the unique minimizer of


     Y(O;Y*)= :m_T- ’       c$l
                             E[qr(wt, 8; y*)]     on 0.


Then a random      vector   8, exists that   solves (4.5) and   8, L   8,. (For proof    see
Appendix.)

    Under the assumptions        of Theorem 4.3 it turns out that the limit function q(O; y*)
is necessarily continuous       on 0, so that it achieves its minimum on 0 by compact-
ness. In the stationary case without nuisance parameters, q(O) = E[q(w,, O)] for all
t, so it suffices to concentrate on a single observation when verifying the identification
Assumption        M.3. Even in the heterogeneous       case, for applications, 0, minimizes
E[q,(w,,Q)]      over 0 for each t (more on this in Sections 5 and 6). Verifying that
0, is the unique minimizer of q in either the stationary or heterogeneous          case often
2654                                                                                 J.M. Wooldridye


requires knowing something about the distribution                of conditioning     variables, and
so identification    is often taken on faith unless there are reasons to believe it might
fail. Newey and McFadden (Section 2.2) give three examples of how to verify identi-
fication in examples with identically distributed            data.
    There are situations - such as the stationary           MA(l) example when the startup
value is set to zero - where 0, will not minimize E[ql(wt, S)] on 0 for any t. Never-
theless, especially in cases where the error of approximation           dies off at an exponential
rate, it can usually be verified that 0, minimizes lim,,,            T-‘CT= I E[qr(wf, S)]. This
is true for the invertible       MA( 1) example. Bierens (1981, 1982) provides several
illustrations.
    In some cases with nuisance parameters the identification               condition holds only
for a particular value of y, say y = yO= y*, where yO also indexes some feature of
the distribution     of w,; this is generally the case for two-step maximum likelihood
procedures under correct specification            of the conditional     density. In other cases
the identification     condition holds for any ycT, and so the preliminary                estimator
fT could come from a misspecified estimation               problem. For example, as we will
see later, $T could be parameter estimates in a misspecified conditional                    variance
function in the context of weighted nonlinear             least squares. The misspecification
of the variance function does not prevent consistent estimation of the conditional
mean parameters O,, and so we expect the identification                 condition for the condi-
tional mean parameters to hold for an arbitrary element in lY
    Theorem 4.3 restricts attention to objective functions continuous                  in 0 (and y),
and this rules out certain estimators           that have been suggested primarily in the
cross section econometrics          literature.    A leading example is Manski’s (1975)
maximum score estimator. It turns out that Theorem 4.3 can be extended without
much difficulty to cover certain discontinuous                  objective functions       (although
measurability      of the estimator becomes an issue). Wooldridge               and White (1985)
present a result that applies to the maximum                score and related estimators           for
mixing processes. Newey and McFadden (Section 2.7.1) provide a careful discussion
of the relevant issues for i.i.d. observations;          these same issues are relevant for
identically distributed      dependent observations.



4.3.   Asymptotic    normality

We first define what it means for an essentially         stationary,    weakly dependent      vector
process to satisfy the central limit theorem.


Definition 4.3

Let {sr: t = 1,2,. . .} be a P x 1 random          vector   sequence.    Then    {sl} satisfies   the
central limit theorem (CLT) if
    (i) E(s+,) < co, t = 1,2,.  ;
   (ii) T~“2~~=1E(s,)-+0    as T+co;
  (iii) T- ““C,‘= Is, %Normal(O,B),                where B = lim,,,   Var(T~“‘C,‘=   ,sr).   (4.6)

Condition (i) ensures that Var(s,) exists for all t. In the cases we focus on E(s,) = 0
for all t, so (ii) is trivially satisfied. Still, there are cases where only the weaker
condition (ii) holds, so we allow for it in the definition. Implicit in (iii) is that the
limit in (4.6) exists. We could relax this assumption, as in Gallant and White (1988)
Potscher and Prucha (1991 b) and White (1993), but this does not affect estimation
or inference procedures.
   We refer the reader to Pijtscher and Prucha (1991b) for a current list of central
limit theorems available in the stationary           and heterogenous  cases under weak
dependence; see also the references in Section 2.

Theorem 4.4.           Asymptotic    normality     of M-estimators

Let 0, r, {w,: t = 1,2,. .}, and {qr: Wt x 0 x r + R: t = 1,2,. . .} be as in Theorem
4.3. In addition to M.l-M.3,      assume
M.4:     (9  e0 is interior to 0;
        (ii) y* is interior to r;
       (iii) JT(y*, - Y*) = G,(l);
       (iv) for each ~~r,q, satisfies the standard measurability               and second order
             differentiability      conditions     on YY’“~
                                                         x 0 (see Definition           A.4 in the
             Appendix).
             Define the P x 1 score vector s,(& y) = s,(w,, 8; y) = V,q,(w,, 0; y)’ and the
             P x P Hessian matrix h,(8; y) = V&B; y) = Viq,(w,, 8; y).
        (v) For each OE 0, s,(Q; .) is continuously        differentiable     on int(r).
M.5:     (i) (h,(B; y): t =   1,2,.  .} satisfies the UWLLN      on   0   x r;
        (ii) A,=limr._jo        T-lC,T_l E[h,(8,; ?*)I is positive definite;
       (iii) {V,s,(&y): t = 1,2,. . .} satisfies the UWLLN on 0 x r;
M.6:   {st(Q,; y*): t = 1,2,. . .} satisfies the CLT with positive definite asymptotic
       variance

       B, E lim Var             T- ‘j2 r$l s,(@,; Y*) .                                      (4.7)
                T+CC        (

M.7:    E[V,s,(B,; y*)] = 0, t = 1,2,.        ..

Then ,,/‘?(e,    - 0,) % Normal(0, A; ’ BOA ; ‘), so that

        Avar fi(e,          - Q,) = A ; 1B, A ; I.                                           (4.8)

(For proof see Appendix.)

This general result can be used to establish the asymptotic  normality of the M-
estimator in both the stationary and heterogeneous  cases. The UWLLN assump-
2656                                                                                .I.M.
                                                                                        W'ooldrid~q


tions MS(i) and M.S(iii) differ depending on the nature of {wt}, {qr(wl, d)).
   As mentioned       in Section 2, the CLT is applied to the score of the objective
function evaluated at (G,, y*),s; 3 s,(OJ*). Due to the scaling of the partial sum
byT-     ‘j2 > Theorem 4.4 is restricted to cases where Var(sp) is bounded; this rules
out most examples with trending data since, generally, trending data implies a
trending score. Assumption         M.6 also implies that Var(C:= ,sp) grows linearly with
K and this restricts {sp} to be a weakly dependent process. As discussed in Section
2, this is not necessarily the same as the underlying         process {rvt} being weakly
dependent.      Often the weak dependence       of the score is established     by exploiting
weak dependence properties of {rut}, but this is not always the case. For example,
for a broad class of estimation       problems {sp} is a martingale     difference sequence
(MDS) - see Sections 5 and 6 -in which case it satisfies a CLT under some
additional assumptions.       While the properties of (wt} play a role in verifying these
additional assumptions,      it is sometimes possible to establish M.6 without imposing
mixing or related conditions        on {wt}.
   Another consequence        of M.6 is


       Tm1’2,$l
           E[s,(B,;y*)]+O               as T+m.                                                  (4.9)


In most cases, including   but not restricted     to stationarity,   the stronger   condition

       E[s,(B,;y*)]=o,     t= 1,2,...                                                           (4.10)


holds. The invertible MA(l) example when the startup values are set to zero is an
example of where (4.9) holds but (4.10) does not. For the rest of this discussion
we assume that (4.10) holds, but it should be kept in mind that the weaker
assumption     (4.9) is sufficient.
    Often it is possible to establish (4.10) directly from the structure of qt(0). Still,
it is useful to know that it holds under the following additional assumptions.    First,
suppose that 8, minimizes E[q,(B;y*)] on 0 for all t. Then, because B,Eint(O), it
follows that if E[q,(d; y*)] is differentiable, then 8, satisfies

                                                                                                (4.11)

Second, if the derivative and expectations     operator can be interchanged    (which is
the case quite generally), then (4.11) implies E[V,q,(B; y*)] leEO, = 0, which is simply
(4.10).
   Notice that 0, is assumed to be on the interior of its parameter space. Technically,
this is needed for a mean value expansion of the score about 0,. It is also easy to
devise examples where JT(8,      - 0,) has a nonnormal limiting distribution because
0, is on the boundary of 0; see, for example, Newey and McFadden (Section 3.1).
    Another limitation     of Theorem 4.4 is that the objective function is assumed to
be twice continuously      differentiable    in 8 with positive definite expected Hessian at
(I,. For most time series applications         with essentially stationary, weakly dependent
data, M.4(iv) holds. Nevertheless, it rules out some procedures that have recently
become more popular in the econometric              analysis of time series data. The leading
example is least absolute deviations            (LAD) estimation       of a smooth conditional
median function. For simplicity, suppose we have stationary                  data {(x,, y,)}. The
objective function for the LAD estimator for observation t is q(w,, 0) = ly, - m(x,, 0)l,
where m(x,, 0) is the hypothesized conditional           median function. Under the assump-
tion that Med(y,Ix,) = m(x,, 0,) for some fl,~ 0, it can be shown [for example, Manski
(1988), White (1993), Newey and McFadden                   (Section 2.7.1)] that 6, minimizes
E[q(w,, H)] on 0, so that LAD is Fisher-consistent               for the parameters of a condi-
tional median. Theorem 4.3 applies for weak consistency because the LAD objective
function is continuous       in 8.
    The problem with applying Theorem 4.4 for asymptotic normality is that q(w,, 0)
is not twice continuously       differentiable    on int(O). Nevertheless, under reasonable
assumptions    it is still possible to obtain a first order representation         of the form


                                                                                          (4.12)


where s,(0) plays the role of the score and A, is the derivative of the expected score
E[s,(B)] evaluated at 8,. The key insight in obtaining representations    such as (4.12)
to nonsmooth     problems is that often E[s,(@] is smooth in 0 even though s,(H) is
not; this works with dependent data just as with independent        data. We refer the
reader to the general treatment in Newey and McFadden (this Handbook,           Section
7). Also, Wooldridge    (1986) shows how the results of Huber (1967) extend to the
case of mixing observations.   Bloomfield and Steiger (1983) Wooldridge (1986) and
Weiss (1991) study the asymptotic properties of LAD for dependent observations.
   For regular problems       with essentially stationary,    weakly dependent     data,
Assumptions    M.l-M.6    can be viewed as regularity conditions. On the other hand,
Assumption    M.7 plays a key role in how one goes about conducting           inference
about 0,. Namely,     M.7 guarantees    that the asymptotic     distribution   of fi(3,    - v*)
does not affect that of JT(a^, ~ 0,). (Of course, if there are no nuisance         parameters,
M.7 is automatically    satisfied.) In particular,

     Avar(8,)   = A;’ BOA; ‘/T                                                            (4.13)

is the same as if y* were known rather than estimated. See Newey and McFadden
(Section 6) for an insightful analysis of two-step estimation procedures with finite
dimensional   I-.
   Theorem 4.4 also assumes that r is finite dimensional,      and so it cannot be
applied to semiparametric     estimation problems. For semiparametric    problems 6
2658                                                                               J.M. Wooldrid~qr


is still a P x 1 vector but r is an infinite dimensional function space. For a certain
class of semiparametric    problems, including adaptive estimation [see Piitscher and
Prucha (1986), Robinson (1987), Andrews (1989), White and Stinchcombe            (1991)
and Steigerwald (1992)], the limiting distribution     of fi(H^, - 0,) is still given by
(4.8) provided fT is consistent at a fast enough rate in a suitable norm (often the
required rate is T1j4 and a suitable norm is an L, norm). The conditions               in
Theorem 4.4, notably those concerning       the gradients with respect to y, must be
modified to cover semiparametric    problems. The notion of stochastic equicontinuity
can replace differentiability assumptions.   Andrews (this Handbook) gives a general
discussion of empirical process methods; Newey (1991 b) and Newey and McFadden
(Section 8) show how to perform asymptotic analysis with certain kinds of infinite
dimensional   nuisance parameters and i.i.d. observations.



4.4.    Adjustment for nuisance parameters

There are many problems for which M.7 fails, for example two-step estimators for
factor autoregressive    conditional   heteroskedasticity (ARCH) models [see Lin
(1992)]. In such cases one must adjust the asymptotic      variance of HITto account
for estimation  of y*. First define the P x R matrix


       F, = lim T-i      f     E[V,s,(B,; y*)]                                             (4.14)
               T-rCC     1=1


(this exists by M.S(iii)). In place of M.7 we now assume              that 9, has first order (or
influence function) representation

       JT(gT      - y*) = T_ i/2 i       yZ(Y*)+ o,(l),
                                   I=1


where u,(y) is an R x 1 vector with E[v,(y*)] = 0. The vector v,(y) in general depends
on unknown parameters other than y, but these are suppressed for simplicity. Thus,
fT could itself be an M-estimator     or, as we will see in Section 7, a generalized
method of moments estimator. The mean value expansion underlying              the proof
of Theorem 4.4 (under M.l-M.6)      now gives


       JT(&.-e,)=         -A-lT-li2
                               0             f:   fs,(d,;Y*)+ E,~Y*)} + o,(l).

If the P x 1 process      (~~(0,; y*) = s,(8,; y*) + F,r,(y*)}   satisfies the CLT with asymp-
totic variance


                                                                                           (4.15)
                                                                                                        2659


then

        Avar~(B,-8,)=A”-‘DoA~l.                                                                       (4.16)


Note that the form of D, is similar in structure to B,. In the next section,                             we
discuss how to estimate such matrices under different assumptions.



4.5.     Estimating       the asymptotic       variance

We first consider estimating             the asymptotic       variance    of fi(e^,   - 0,) under Assump-
tions    M.llM.7,         so that the asymptotic            variance     of fi($,     - y*) does not affect
Avar fi(8,    - 0,) (see (4.8)). In constructing                  valid estimators,      we make use of a
third matrix.


        J, = lim T-’         i    E[s,(B,;y*)s,(8,;y*)‘],                                             (4.17)
              T+ai          r=1




which is essentially the average variance of the scores (~~(0,; r*)}.
   Estimation   of A, is no different from cross section analysis with independent
observations.   A consistent  estimator   of A, that is always available under the
conditions of Theorem 4.4 is the average of the Hessians evaluated at the estimates,


        T-’   i      h,(&;y*,).
              r=1




As a practical matter, an analytical formula for h,(B; y) is not needed to implement
this formula; numerical second derivatives can be used for approximating             (4.18).
Still, this estimator is often more difficult to compute than necessary, and it is not
guaranteed      to be even positive semi-definite  for a particular sample (although it
is positive definite with probability    approaching   one). Sometimes more structure
is available that allows a different estimator.       Suppose we can partition        w, as
w, = (x,,y,), where x, is a random vector with possibly growing dimension and yt
is G x 1 (interest lies in estimating some aspect of the conditional     distribution     of
yt given 1,). Define

        a,(x,, 8,; y*) = ECh,(w,,8,; r*)l~,l.                                                        (4.19)


By the law of iterated            expectations

             0,; r*)l = ECht(wt,
        EC~~(~,>              6,; y*)l,                                                              (4.20)
sothatA,=lim.,,T~‘CT=,                       E[a,(B,; y*)]. Appendix   Lemma A.1 and the UWLLN
imply that generally

              T          _
      T- ’   c     u,(fI,;   7,)   A   A,.                                                 (4.21)
             t=1



This estimator is useful in the context of nonlinear least squares, maximum likeli-
hood, and for several quasi-maximum           likelihood applications.  In some leading
cases, including the examples in Section 6, a,(~,, 8,; y*) depends only on the first
derivatives of the conditional      mean and variance functions.
   Estimation     of B, is generally more difficult due to the time series dependence
in the data. But in some important        cases it is no more difficult than estimating
A,. In the simplest case, B,,    = A,,soa separate estimator of B,is not needed. Two
additional    assumptions    imply that B,= A,.The first is that the score (evaluated
at (0,; y*)) is serially uncorrelated.

Assumption         M.8

For t = 1,2,. . , E[s,(B,;y*)s,+j(8,;y*)‘]             = O,j 3 1.

(In cases where E[s,(B,; y*)] is not identically zero, but (4.9) holds, M.8 might only
be approximately     true as t + co; the fo 11owing conclusions          still hold provided the
approximation     error dies out fast enough with t.) The score is always serially
uncorrelated   if sp is independent      of sp+ j, j = 1,2,. . . , which is usually assumed in
cross section applications     but rarely in time series settings. Of course independence
is not nearly necessary for M.8 to hold. When time series models are dynamically
complete ~ in ways to be defined precisely in later sections - sp(0,; y*) often satisfies
the stronger requirement        of being a martingale       difference sequence with respect
to the information     sets ar = (w,, . . . , wl}.
   Even outside the context of maximum likelihood estimation                    (MLE), in many
practical cases of interest an extension of the information               matrix equality holds
for each observation      t. This is stated as follows.

Assumption         M.9

ECs,(d,; i’*h(Q,;        y*)‘l = ECh,(~,;
                                       ?*)I>            t= 1,2,....

In other words, the variance of the score for observation    t is equal to the expected
value of the Hessian for observation      t. (Note that the latter quantity is at least
positive semi-definite because we are analyzing a minimization       problem.) Assump-
tion M.9 immediately implies that A, = J,. In addition to MLE, we will encounter
other cases where M.9 is satisfied, among these multivariate        weighted nonlinear
least squares when the conditional        mean and conditional       variance  are both
correctly specified. In virtually every case that M.9 holds it makes sense to replace
y* by y,, to indicate that y indexes some feature of the distribution    of w, that is
correctly specified.
   It is important    to see that conditions  M.8 and M.9 are logically distinct and
must be examined separately. In Section 6 we cover cases where the score s,(tl,; y*)
is serially uncorrelated   - so that M.8 holds - but M.9 does not hold; in Sections 5
and 6 we give examples where M.9 holds but M.8 does not.
   The usefulness of imposing both M.8 and M.9 is seen in a simple lemma.

Lemma 4.1

Under   assumptions     M. l&M.9, B, = Jo = A,, and therefore

     Avar(8,)    = A; ‘IT.                                                               (4.22)

This shows that the asymptotic variance of 6, can be estimated as A^G l/T under
M.l&M.9, where AT is the consistent estimator of the expected Hessian given by
either (4.18) or (4.21). Alternatively, we can use an estimator of J,, to obtain A$r(H^,).
A consistent estimator of Jo under M.l-M.6           (and the regularity condition    that
(s,(fI; y)s,(B; y)‘} satisfies the UWLLN) is


                                                                                         (4.23)


where s*,= sJH^~;~*~).Under assumption’M.9,         jT is also a consistent estimator of
A,. Therefore, under M.l-M.9,       Avar(6,) can be estimated by A%r(&-) = j,‘/T.
This outer product of the score estimator is usually attributed           to Berndt, Hall,
Hall and Hausman (1974) (BHHH) in the context of MLE.
   Practically    speaking, Assumption      M:9 without M.8 does not afford much
simplification    for estimating asymptotic   variances because of the potential serial
correlation    in the score. On the other hand, M.8, even in the absence of M.9,
means that covariance matrices can be estimated by sample averages. This follows
from the following obvious lemma.

Lemma 4.2

Under    M.l&M.8,     B, = Jo, and so Avar(&)     = Ai1 J,A;    l/T.

Thus, to estimate Avar(6,) under M.l&M.8, take AT to be one of the estimators
(4.18) or (4.21) and take jT as in (4.23). Then a consistent estimator of Avar(&,) is

                                                                                         (4.24)

This estimator   was suggested    by White (1982) in the context of maximum         likelihood
estimation   of misspecified   models with i.i.d. data. This formula   Avar Jf(@,      - 13,)=
Ai ‘J,,A; ’ appeared in Huber (1967) in his analysis of M-estimators   for i.i.d. data.
The estimator (4.24) has since been suggested by Domowitz         and White (1982),
Hsieh (1983), White and Domowitz (1984), White (1993) and others in a variety
of contexts when the score is serially uncorrelated.
   When we relax M.8 as well as M.9, the general form of B, in (4.7) must be
estimated. Again let sy EEs,(H,;y*) and first suppose it is known that


     E(s;s;; J = 0,       j > L,                                                    (4.25)


where L is a known     integer.      A sensible   estimator   of B, is


                                                                                    (4.26)


where

                T-j
                                    j=O,l,...,    L.                                (4.27)



(Sometimes T - ’ in (4.27) is replaced by (T - P)- ’ as a degrees-of-freedom adjust-
ment.) Hansen and Hodrick (1980) proposed this estimator in the context of linear
rational expectations     models. Hansen (1982) and Hansen and Singleton (1982)
proposed it in the generalized method of moments (GMM) framework; see also
White (1984). A simple application     of the uniform weak law of large numbers to
js,(U; y)s,+ j(& 7)‘) and Lemma A.1 shows that

                            T-j
     plim .Ej = lim T-l      c     E(s;s;;~),                                       (4.28)
                T-tm        t=1




and so BT is consistent for B, under general conditions.         When (4.26) applies, the
choice of L typically depends on the frequency of the data. A potential drawback
of (4.26) is that it need not be positive definite. Remedies for this are discussed
below.
   Several econometricians      have recently looked at the problem of estimating        B,
consistently in the general case where the autocovariances        of {s;} are known only
to die out at a polynomial     rate as j gets large. For motivational    purposes, assume
that (s;)} is covariance    stationary;   the estimators  that follow are valid in the
heterogeneous    case under mixing or near epoch dependence conditions, as in White
(1984), Newey and West (1987), Gallant and White (1988), Hansen (1992a), Andrews
(1991), Piitscher and Prucha (1991b) and Andrews and Monohan                 (1992). Under
covariance stationarity of the score, B, = E. + C,?! 1(Ej + El), where Ej 3 E(s;s;‘+ j).
If we truncate         the infinite   sum at L,, but let L, tend to infinity   with T, then


     E,   +    “z(Zj + E;)+ B,.                                                               (4.29)
              j=   1



This suggests estimating B,,  exactly as when S: is known to have zero autocovariances
after a certain point, with the technical distinction that the truncation     lag L, should
grow with T to ensure consistency for general autocovariance           structures. But L,
cannot grow too quickly or else too many autocovariances             are estimated for a
given sample size.
   Rather than using (4.26), as in White (1984), in some cases it is useful to weight
the autocovariances    to ensure a positive semi-definite (p.s.d.) matrix. Thus, consider
the estimator


     b, = $, +            “tw(j, T)(gj + s’s),
                        i= 1
                                                                                              (4.30)



where the weights o(j, T) are chosen to ensure that &- is p.s.d. Note that if (4.25)
holds and L, = L, then o(j, T) -+ 1 as T+ co, j = 1,2,.          , L, ensures that & is
consistent for B,.Possibilities for o(j, T) are abundant    in the time series literature
on spectral density estimation      because, in the covariance    stationary  case, B, is
proportional  to the spectral density matrix of the process {SF} evaluated at frequency
zero; in econometrics,   B,is often called the Iony run variance of {s;} [for example,
Phillips (1988)]. For a list and discussion of weights see Anderson (197 1, Chapter 9)
Bloomfield (1976, Chapter 8), Gallant (1987, Chapter 7) and Andrews (199 1). The
Bartlett weights were suggested by Newey and West (1987) and are also studied
in Gallant (1987) and Gallant and White (1988). They are given by


     w(j,T)=l-ml-,                       j=1,2    ,..., L,,                                   (4.3 1)
                           (L, + 1)
                   = 0,                  j>L,.


[The Bartlett weights are not among the most popular weights in the spectral
density estimation literature; see, for example, Bloomfield (1976, p 164).] Note that
o(j, T) -+ 1 as T+ co for each j provided Lr grows with T. Newey and West (1987)
demonstrate    that with this choice of weights, b, is p.s.d.
   For applications,  Gallant (1987) recommends     the Parzen weights, given by

     w( j, T) = 1 - 6( j/&l2           + 6( j/L,)3,    j d L,/2,

                   = 2(1 - (j/Lr))3,                   L,/2 <j < L,.                      (4.32)
 Andrews (1991) allows for weighting schemes that leave all of the covariances                   in
 the estimator for each sample size (that is, L, E T - 1) but of course those for
largej are downweighted.        Several other choices of el(j, T) are studied by Andrews
 (1991).
    There are a variety of regularity conditions           under which (4.30) is a consistent
 estimator of B,. For nonlinear        models these usually include the assumption            that
 o( j, T) is uniformly bounded (which is satisfied by the Bartlett and Parzen weights),
 that w(j, T)+ 1 as T+ CCfor each j, and that L, tends to infinity at a slower rate
 than T. Piitscher and Prucha (1991 b) provide a careful discussion and extensions
 of sufficient conditions   based on work of White (1984), Newey and West (1987),
 Gallant (1987), Gallant and White (1988) and Andrews (1991). Hansen (1992a)
 gives results that relax the moment conditions. The details underlying consistency
 are rather intricate, and so they will not be given here. Generally, the assumptions
 include smoothness of s, as a function on 0 x r and weak dependence of sp (such
 as mixing and near epoch dependence conditions).
    In applying serial-correlation-robust        estimators the choice of the lag length L,
 is crucial, but consistency results only yield rates at which L, should grow with
 T. For problems with near epoch dependent                scores, the available proofs allow
 L, = o(Tti3). This was also shown by Quah (1990) to produce a consistent estimator
 in a related context. Andrews (1991) contains consistency results under cumulant
 and mixing assumptions       that allow L, = o(T”‘);        see also Keener et al. (1991) for
 OLS with fixed regressors. Andrews (1991) also uses asymptotic                  mean squared
 error criterion to derive optimal growth rates of L, for a general class of weighting
 schemes. The optimal growth rate for the Bartlett weights is T1j3, and for the
 Parzen weights it is T l” . The optimal weighting scheme in the class Andrews
 considers is the quadratic spectral (which, unlike the Bartlett and Parzen weights,
 keeps all autocovariances      in the estimator).
    Andrews (1991, Table 1) gives the optimal lag length for a variety of weights
w(j, T) in the context of linear regression with AR(l) errors. This table provides
 useful guidance but is necessarily limited in scope; such calculations          require know-
ing something about the degree of dependence in the underlying stochastic process.
In practice, deterministic     rules for choosing L, necessarily have a component                of
arbitrariness.     Andrews (1991) and Andrews and Monohan                 (1992) discuss data
dependent      or automatic   ways of selecting L,. Except for the computational                re-
quirements, these are attractive alternatives         to deterministic  rules. They are likely
to become more popular as they are incorporated                  into econometrics      software
packages.
    There are other alternatives      for estimating     B,. If {sp} were a stationary,     finite
order vector autoregression,        then B, is simply the long run variance of a finite
order VAR; it can be consistently         estimated by first estimating a VAR for & This
leads to the multivariate      version of Berk’s (1974) autoregressive         spectral density
estimator. The autoregressive       spectral density estimator might also work well when
$’ is not a finite order VAR, provided the lag L, in the VAR is allowed to depend
on T (again, the rate L, = o(T”~) is sufficient under certain conditions);       see Berk
(1974) for the scalar case. Another      possibility   is suggested by Andrews and
Monohan (1992): prefilter s*,through a VAR, and then apply an estimator such as
(4.30) to the residuals. Andrews and Monohan         show that this can lead to better
finite sample properties.
   When M.7 is violated the asymptotic       variance estimator of @, must account
for the asymptotic variance of PT. This requires that we estimate the matrix D, in
(4.15) rather than B,. First we need to estimate F,. This is typically straightforward.
Under M.l-M.6       the P x R matrix


       P, = T - ’ i         V,s,(&, 9,)                                                        (4.33)
                     t=1




is consistent for F,,. In applications     with conditioning    variables, such as nonlinear
least squares and quasi-maximum           likelihood estimation     (QMLE) (see Section 6),
a simpler estimator is ofte_n obtained by computing [,(I,, 0,; y*) = E[V,s,(fI,, y*)Ixt]
and then replacing V,s,(fr, 9,) in (4.33) with Jr@,, 8,; $r).
   Next, define ri, = s*,+ F,i,, where i, replaces any unknown            parameters in Ye
with consistent estimates. For example, often rJy*) = K; ‘e,(y*), where ,K* is an
R x R unknown positive definite matrix. Given a consistent estimator K, of k*
(which is typically very similar to estimating A,),fr = f?; ‘e,(j),). This covers the
case when 9, is an M-estimator,       and similar estimators are available in generalized
method of moments         contexts. Without        further assumptions,      estimation    of D,
requires application     of one of the serial-correlation-robust          estimators,    such as
(4.30), tp {lit}. When {ut(Bo;y*)} 1s   . serially uncorrelated,     as is typically the case
when 0, and +jT are obtained           from problems       that have completely         specified
dynamics ~ more on this in Sections 5 and 6 - D, can be estimated as & =




4.6.    Hypothesis         testing


Consider    testing        Q nonlinear    restrictions


       H,: ~(0,) = 0,                                                                         (4.34)


where c(0) is a Q x 1 vector function of the P x 1 vector 8. We assume that Q d P,
c(.) is continuously differentiable  on the interior of 0, and 0, is in the interior of
0 under H,. Define C(0) = V&U) to be the Q x P gradient of c(0) and assume
that rank C(0,) = Q (this ensures that the Q restrictions    are nonredundant).     The
Wuldstatistic   is based on the limiting          distribution   offic(@,.)   under H,. A standard
                                                                                    J.M.        Wooldridyr


mean value expansion      gives, under      H,,


     JTc(B,) = c 0Jr&          - 0”) + 0 P(1) ’                                                     (4.35)


where C, 3 C(8,). Therefore,      the null limiting     distribution   of JTc(g,)          is


     JTc($,)    A Normal(0,      C, V,Cb),                                                          (4.36)


where V, = Avar fi(e,   - 0%).Given a consistent estimator of V,, say P,, and the
consistent estimator of C,, C, = C(e,), the Wald statistic for testing H, against
H,: c(t),) # 0 is


     w, = Jh(&)I&           F&]       - 1JTc(f7T).                                                  (4.37)


Under N,, W, Lx;. As discussed in Section 4.5, the choice of P, depends on what
is maintained under H,. Assuming that M.7 holds, CT = i;r      or 5;’ under M.8
and M.9, 3, = A^; ‘j,,+?;’ under M.8 only, and P, = A^; ‘&.A^ f1 if neither M.8
nor M.9 is assumed. When nuisance parameters      are present and M.7 does not
hold, pT should account for the asymptotic variance of JT(qT - y*).
   Often, it is convenient    to use a likelihood ratio (LR)-type statistic when testing
hypotheses. Because M-estimators          solve a minimization       problem, under certain
assumptions     the difference in the objective function evaluated at the constrained
and unconstrained       estimators can be used as a formal test statistic. While it is
possible to derive the limiting distribution     of this statistic under Assumptions    M.l-
M.6, here we only cover the case where the statistic has a limiting chi-square
distribution;   thus, we impose M.7, M.8, and M.9. White (1993) allows the model
to be entirely misspecified, but the quasi-LR statistic has little practical value for
classical testing in such cases.
   Let 8, denote the unconstrained       M-estimator      of 0,. The constrained  estimator,
er, solves


     min i qJw,, 0; $T)     subject      to c(0) = 0.
     0t@t=l


To derive the limiting    distribution      of the quasi-likelihood    ratio statistic,          we first
assume that B,Eint(O) under H,. In addition, to ensure that fi(s,         - 0,) has a
proper first order representation     we assume that a continuously    differentiable
mapping d: RPpQ + Rp exists such that 8, = d(a,) under H,, where c(, is a (P - Q) x 1
vector in the interior of its parameter space A under H,. Further, the rank of the
Ch. 45: Estimarion      and Inferencr   ,fiw Dt~pendent Procrs.sr.s                                       2661



P x (P - Q) gradient            V,d(a,)    is P - Q under         H,. The estimator       of a,, &, solves


                                                                                                        (4.39)


and the constrained            estimator      8,. is simply 8, = d(&r). By definition,


                                                                                                        (4.40)


The difference in (4.40) has a convenient limiting                    distribution   that is free of nuisance
parameters under Assumptions       M.llM.9.


Lemma      4.3

Under M.l-M.9, and the assumptions     under H, that 8, = d(cx,) for ctO,a (P - Q) x 1
vector, and d(a), a continuously differentiable function on int(A), r,Eint(A), and
rank V,d(cc,) = P - Q,


                                                                                                        (4.41)



converges        in distribution        to xi under      H,.

A word of caution: in applying the QLR statistic, scaling factors that can appear
in ql(w,,O;y*) must be chosen so that M.9 is satisfied. As we will see, that is no
problem in the context of MLE since qr is simply the negative of the conditional
log-likelihood.    In Section 6 we show what M.9 entails in the context of the weighted
NLS and QMLE approaches.
   The final test we cover is Rao’s (1948) score test, known more commonly              in
econometrics     as the Lagrange    multiplier (LM) test. Engle (1984), Godfrey (1988)
and MacKinnon        (1992) contain discussions of the LM statistic and its use in econo-
metrics. Calculation      of the LM statistic requires estimation   only under the null,
so it is well-suited for model specification testing. As with the quasi-LR statistic,
we assume that f3, = d(a,) under H,, where rx,Eint(A) and d(a) satisfies the assump-
tions in Lemma 4.3.
   The simplest method for deriving the LM test is to use Rao’s score principle
extended to the M-estimator case. The LM statistic is based on the limiting distri-
bution of


      T-   1’2 i       St& YT)                                                                          (4.42)
                 I=1
2668                                                                                                J.M.   Wddridge


under H,,where yT now denotes      an estimator of y* used in obtaining e,. As usual,
we assume that JT(PT - y*) = O,(l). W e explicitly derive the LM statistic under
the assumption    that M.7 is true under H,, as this holds in many applications.
   Assume initially that 0, is in the interior of 0 under H,; we discuss how this
can be relaxed below. A standard mean value expansion yields


        T-‘12      f. &;-&)          = Tp1j2 i de,; Y*)+ A,&-@,- 0,) + o,(l)
                  1=1                            r=1

under M.7 and H,. But 0 E ~‘?c(t!?,) = fic(B,) + c,JT(e,                                  - O,), where C, is
the Q x P matrix C(0) with rows evaluated at mean values                                 between fIT and 0,.
Under      Ho, c(6),) = 0, and               plim C, = C(0,) = C,.       Further,       fi(e,       - 8,) = O,( 1)
(because        fi(E,      - c(,) = O,(l)       under   the above       assumptions).           Therefore,     under
H,, C,fi(g,             - 6,) = o,,( 1). It follows that


        CoA,‘T-‘/2           i     s,(e,.;~T)=C,A,1T-112            ’                                          (4.43)
                            t=1



under     H,. Without             imposing     M.8 or M.9 under         H,, we generally           have


        C,A y 1T- I/’ 5 s,(B,; y*) LNormal(0,                 C,,A; ‘BOA; ‘C:).
                            f=l



Under      our assumptions,            C, Ai ’ B,,A; ’ CL has full rank Q. Therefore,                  under    H,




where & z s,(e,; 9,). The score or LM statistic                   is given by




where all quantities     are evaluated at (gT,yr) or just e”,. Under H,,LM,    Axi.
This LM statistic is robust in the sense that neither M.8 nor M.9 is maintained
under H,.
  If the score is serially uncorrelated  under H, (that is, M.8 holds under H,), then
ET can be replaced in (4.44) by the outer product estimator


                                                                                                               (4.45)
C/I. 45: Estimation     ud   Ir~/ewncrjhr Dependrnt   Proccxses                               2669


otherwise gr should be a serial-correlation-robust         estimator applied to {S,}.
   For both the Wald and QLR statistics, we assumed that %,Eint(O) under H,;
this is crucial for the statistics to have limiting chi-square distributions.        We will
not consider thi Wald or QLR statistics when 0” is on the boundary               of 0 under
H,; see Wolak (1991) for some recent results. The general derivation              of the LM
statistic also assumed that %,Eint(O) under H,. Nevertheless,             for certain appli-
cations of the LM test we can drop the requirement             that 0, is in the interior of
 0 under H,. A leading case is when 8 can be partitioned             as 0 = (%;, d;)‘, where
%r is (P - Q) x 1 and 9, is Q x 1. The null hypothesis is H,:H,,= 0,sothat c(9) = 9,.
It is easily seen that the mean value expansion used to derive the LM statistic is
valid provided ~1,= %,, is in the interior of its parameter space under H,;9,= (%b,,      0)
can be on the boundary       of 0. This is useful especially when testing hypotheses
about variances; see Bollerslev, Engle, and Nelson (this Handbook).
   Recall that under Assumptions      M.8 and M.9,$, = B, = Jo, and the LM statistic
simplifies considerably.   For example, 2, and B, can both be replaced with 3,.
Some matrix algebra shows that the LM statistic becomes


                                                                                            (4.46)


which is just TR,'from the linear regression

       1   on     S;,         t=1,2   ,...,    T,                                           (4.47)

where Rf is the uncentered r-squared from the regression (recall that 5: is a 1 x P
vector). Engle (1984) derives this statistic in the context of MLE. Because the
dependent    variable in (4.47) is unity, LM, can also be computed          as T - SSR,
where SSR is the sum of squared residuals from (4.47). The statistic (4.46) is called
the outer product LM statistic because it uses the estimator 1, for the estimator
of the variance of the score.
   The outer product LM statistic requires that the two Assumptions         M.8 and M.9
hold in addition to M.7; it is not generally asymptotically    xi distributed   if any of
these assumptions    fail. Even when M.7, M.8, and M.9 hold under H,, the outer
product LM statistic might not be the best choice for applications. There is evidence
in the maximum likelihood context that it can have severe finite sample biases. If
an estimate of the Hessian or expected Hessian AT is available, the Hessian LM
statistic


                                                                                            (4.48)


can have better finite sample                 properties. See, for example, Orme (1990), Chesher
and Spady (1991) Davidson                     and MacKinnon       (1984, 1991) and Bollerslev and
2670                                                                               J.M.   Wooldridge



Wooldridge      (1992). When A, is estimated        as


                                                                                              (4.49)



and the model has a residual structure, then (4.48) (or a scalar multiple of it) has
a simple regression-based       form. This is also true of the robust statistic (4.44) when
Al,. is given in (4.49).
   It is important to remember that the outer product and Hessian forms are usually
invalid if either M.8 or M.9 is violated. If there is any doubt about M.8 or M.9,
the robust form of the statistic should be used.
   Two comments        before ending this section. First, to keep the notation              and
assumptions     simple, and to focus on the computation         of valid test statistics under
various assumptions,      we have only derived the limiting distribution       of the classical
test statistics under the null hypothesis. Very general analyses under local alter-
natives are available in Gallant (1987), Gallant and White (1988) and White (1993).
   Second, the limiting distribution     of the test statistics under H, have been derived
under the assumption        that all elements of 0, are identified. This is violated for
certain econometric      problems, and usually the standard test statistics no longer
have limiting chi-square distributions.       See Hansen (1991 b) for recent work on this
problem.



5.     Maximum     likelihood   estimation

We now apply the results on M-estimation                to maximum likelihood estimation
(MLE). For the purposes of discussion, suppose initially that (IV,: t = 1,2,. . .} is a
sequence of strictly stationary         M x 1 random vectors. The classical approach to
MLE entails specifying a parametric              model for the joint distribution      of W, =
(w,, w2,. . . , wT) for any T. A less restrictive setup allows one to partition            IV, into
a G x 1 vector of endogenous variablesy, and a K x 1 vector of exogenous variables
zl. Then (conditional)       MLE requires specification          of the joint distribution        of
 Y, z (yl,. . , yT) conditional       on Z, E (zl, t2,. . , zT). The latter setup allows one
to investigate how zr influences various features of the conditional            distribution      of
yt given z,, and it is familiar to economists in both cross section and time series
settings. Still, for a few reasons this approach is too limiting for modern econometric
practice. First, as this approach          is usually implemented,      a restrictive     type of
exogeneity of the process {zr: t = 1,2,. . .} IS assumed. In the time series econo-
metrics literature this is known as the strict exoyeneity assumption.            When interest
lies in the conditional     distribution,   strict exogeneity of {tt} can be stated as

       ~(Y,lYl~...,Y,-l,zl,z 2,...)=~(YtIYl,...,Yt-l,Z1,...,            z,);                    (5.1)
in other words,y, is independent of z,+ 1, zr+ 2r.. conditional any,,.   ., ytm ,,zr,. . . ,zr.
[This is Chamberlain’s      (1982) modification     of Sims’s (1972) definition     of strict
exogeneity.]   Chamberlain      (1982) shows that (5.1) is equivalent    to the Granger
(1969) noncausality    condition




Often, the Z~are policy or other control variables that can be influenced by economic
agents, in which case (5.2) can easily be false.
    Second, specifying the joint distribution of (y,, . . . , yT) (conditional on (z,, z2,. , zT))
assumes that the researcher knows the entire dynamic structure of (yi,. . , yr). In
certain cases the dynamic structure is not even of interest. For example, one might
be interested in the contemporaneous                  relationship    between y, and z,; in terms of
conditional        distributions,     this entails specifying a model for D(y,Iz,). It is now
recognized - for example, Robinson (1982) Levine (1983) and White (1993) ~ that
this can be done quite generally without assuming that {z,} is strictly exogenous
and without specifying how y, depends on past y or Z. Several examples of this
kind of specification can be found in the literature, including the well-known static
linear model, static logit and probit [Gourieroux                    et al. (1985) Poirier and Ruud
(1988)], static Tobit [Robinson               (1982)], static models for count data and static
transformation          models [Seaks and Layson (1983)].
    Even when the complete dynamics are of interest one does not always directly
specify the joint distribution           of (yi,.    , yT). Often it is more natural to specify the
conditional         distributions     D(y,ly,- i,. ., y,) or D(y,Iz,, y,_ i, z,_ r,. , yr,zi)        or
D(y,l yt_ i, zf- 1,. . . , y,, z,). Static models, dynamic models, and most other cases
of interest can be cast in the following framework: interest lies in the distribution
of yt given a set of conditioning             variables x,, where X, is some subset of (z,, ytp 1,
z, - 1,. . . , y,, z,).  The   z1 are not  necessarily    strictly exogenous and the dynamics are
not necessarily completely specified. Thus, we follow White (1993) in taking the
notion of maximum likelihood estimation                     to include cases where only the distri-
butions D(y,Ix,) are specified for some conditioning                 variables x,. The fact that MLE
is consistent for the parameters of D(y, Ix,) for essentially any conditioning               variables
x, has many useful applications.
   In what follows it is easiest to view x, as a subset of (z,, ~~~r,~~-r,. . . , yl, z,),
where the G x 1 vector yt and the K x 1 vector z, are contemporaneously            observed,
but the following results hold for other definitions of x, (for example if x, contains
leads of z as well as current and lagged z). Also note that x, can be null for all t,
in which case interest lies in estimating the parameters in the unconditional          distri-
butions D(y,). From the M-estimation           results we know that, for verifying regularity
conditions,    the easiest case to handle is when the dimension           of X, is fixed and
{(x,,y,):t=    1,2 )... } IS a strictly stationary    sequence. This rules out cases where
the distribution       of y, given the observable        past actually depends on all past
observables, as with moving average models and generalizations             of ARCH models
[Bollerslev (1986) Nelson (1991)]. The following treatment allows for the number
of elements in x, to grow with t, without doing the sometimes difficult task of
verifying the regularity conditions. Generally, one must ensure that the conditional
log-likelihood   (defined below) and the score are not too dependent on the past.
   Let pp(.lx,) denote the conditional    density ofy, given x, with respect to a measure
v,(dy). (In most applications,  V,would not depend on t.) We will say nothing further
about the measure rt(dy) except that it can be chosen to allow yt to be discrete,
continuous,    or some combination     of the two. The interested reader is referred to
Billingsley (1986) and White (1993). Let the support of y, be ?V, c R” and denote
the range of x, by :X,; the dimension of F, may depend on t.
   A crucial result from basic probability        theory for studying the properties of
maximum likelihood estimation is the (conditional)          Kullbuck-Leibler information
inequality: for any nonnegative     function fJ./x,) such that



        sAf
              f,(ylx,)v,(dy)    d   1, all x,EX,,                                                     (5.3)


it can be shown          that



     s   d
             logCp~(~Ix,)/f,(~/x,)lv,(dy)
                                       3 0, all VT,.                                              (5.4)


[see, for example, Manski (1988), White (1993) and Newey and McFadden                        (Lemma
2.2)]. Now suppose that one specifies a parametric model for pF(.lx,),


        (f,(~lx,;aeEo, 0 c RP},                                                                       (5.5)

which satisfies (5.3) for all 0~0.           Model (5.5) is said to be correctly specijied if, for
some 8,~0,

    .f,(.lx,;O,)      = pp(‘Ix,),     all x,ETl, t = 1,2 ,... .                                   (5.6)

It follows from (5.4) that ifthe model is correctly          specified then for all t = 1,2,. . . ,




where




is the conditional log-likelihood for observation t. From (5.7) and the law of iterated
                                                                                               2673



expectations,         0, solves, for each t,


                                                                                               (5.9)


The fact that the vector of interest, 0,, solves (5.9) shows that maximum likelihood
estimation   is Fisher consistent.    Importantly,   this holds for any conditioning
variables x,; there is no presumption     that the dynamics are completely specified
or that some sort of strict exogeneity holds.
   The consistency of the maximum likelihood estimator now follows in a straight-
forward manner from the consistency of M-estimators.        In the notation of Section 4,
q,(w,, 0) = - /,(y,, xt, 0). The maximum likelihood estimator e^, solves


                                                                                             (5.10)



Theorem 5.1.            Weak consistenc~~ of MLE

Let ((xt, y,): t = 1,2,. . .} be a sequence of random vectors with xteZr, y,&Yj/, c RG.
Let 0 c Rp be the parameter set and denote the parametric model of the conditional
density as in (5.5). We assume that this is a density with respect to the measure
v,(dy) for all x, and 0:



      s    f,(ylx,;
         !V*
                         B)v,(dy) = 1,         all   x,E.Z”(,    8~0.                        (5.11)



Assume      further      that

MLE.l:         (i) 0 is compact.
              (ii) 1, satisfies the standard measurability      and continuity       requirements
                   on “v x ’Tit x 0.
MLE.2:        {l(y,,x,k):     t = 1,2 ,... } satisfies the UWLLN on 0.
MLE.3:         (i) For some B,E@,


                      pf(.lx,)=f,(.lx,;8,),           xfcF,,t=      1,2,...;

              (ii) 0, is the unique            solution   to


                      max lim T-’         ,tI ECUY,, -G ‘31.                                 (5.12)
                       ese T-m

Then there exists a solution                  to (5.10), the MLE 8r, and plim 6, = 8,.
2674                                                                           J.M.    Wooldridge



   From the discussion above. MLE.3(i) ensures that 8, solves (5.12), but it does
not guarantee uniqueness;    this depends on the distribution  of x,, so at this level
we simply assume uniqueness in MLE.3(ii).
   To derive the asymptotic    normality   of the MLE, we assume that I,(.) is twice
continuously  differentiable  on the interior of 0 and B,Eint(O). Define the score
and Hessian for observation     t by


       s,(O)= s,(w,, 0) = - V&r(W,, ey,
       /l,(8) = h,(w,, 0) = V&(U) = - v;&v,,    O),


where W, = (xi, y:)‘. From the general M-estimator    result we would           like to show
that the score evaluated at 0, has expectation  zero:

       ~Cs,(~,)l= 0.                                                                       (5.13)


By the law of iterated    expectations,   (5.13) certainly    holds if

                                                                                           (5.14)


Now, for any 0~69.




where E,(. IX,) denotes expectation  with respect to the density fJ.(x,; 0). If inte-
gration and differentiation can be interchanged   on int(O) in the sense that


                                                                                           (5.16)


for all x,EX,, QEint(O), then, by (5.1 l), the right hand side of (5.16) is necessarily zero.
But V,l,(y,x,, @j;(y(x,; 0) = V,,f,(ylx,; (I), which by (5.15) implies that Es[s,(B)lx,] =
0, BEint(O). Substituting     U, for 0 now yields (5.14).
   Given (5.13), the central limit theorem generally implies that T-1~2~~~,s,(0,)
is asymptotically   distributed   as Normal(0, B,), where


                                                                                           (5.17)


  Define A, = A (0,) to be the limit of the expected         value of the Hessian     evaluated
                                                                                           2615



at the true parameter:


     A, = lim T-r      $j E[h,($,)].                                                     (5.18)
           T-J_       r=1



Provided that 0, is identified, A, will be positive definite; in fact, under an additional
regularity condition it can be shown that E[h,(0,)] is equal to the variance of s,(fI,),
so A, is at least positive semi-definite.    The additional     condition   needed is that,
for all ~,fz.K,, BEint(U),




This is simply another assumption about interchanging           an integral and a derivative,
which is valid in regular cases. Taking the derivative          of the identity




and using (5.19) yields, for all BEint(O),


     EeCW)I-d = Vah [s,(Q)
                         I-4                                                             (5.20)


Equation (5.20) is called the conditional information matrix equality for observation
t. This equality has important consequences    for estimating the asymptotic variance
of the MLE. One point worth emphasizing is that (5.20) holds for any set of condi-
tioning variables xt, and we have not assumed that f,(.lx,,Q,) is also the density
of yt conditional  on x, and the observable past (y, 1,x, _ 1,. . ,yl, x1). Evaluating
(5.20) at 6, and taking expectations    yields

     ECU~JI= VarCs,(~,)13                                                                (5.21)

which is best thought of as the unconditional information matrix equality             for each
observation   t. This shows that, under standard    regularity conditions,             the M-
estimation Assumption    M.9 holds for MLE.

Theorem 5.2.      (Asymptotic   normality     of MLE)

Let the conditions    of Theorem       5.1 hold. In addition,   assume

MLE.4:      (i) U,Eint(O);
           (ii) 1, satisfies the standard measurability    and second order differentiability
                conditions     on Y f x .f‘t x 0. 3
2676                                                                                   J.M.   Wooldridye


                (iii) the interchanges     of derivative and integral in (5.16) and (5.19) hold
                      for all BEint(O).
MLES:            (i) A, defined by (5.18) is positive definite;
                (ii) {V,2l,(y,, x,, 0)) satisfies the UWLLN.
MLE.6:          {sJ0,): t = 1,2,. . .} satisfies the CLT with asymptotic     variance B, given
                by (5.17).
Then

       fi(e,          - 0,) A Normal(0,       A; ’ BOA; ‘).                                        (5.22)

   While Assumption    MLE.4(iii) is often satisfied in applied time series analysis, it
does rule out some cases where the (conditional)        support of yr depends on the
parameters 0,. White (1993) presents a slightly more general result where the sup-
port ?Yyrcan depend on 8 provided it does so in a smooth enough manner such
that (5.16) and (5.19) hold.
   It is possible to confuse (5.21) with the more traditional      information  matrix
equality. To see the difference, define J, as in Section 4.5 but without the nuisance
parameters:


       J, = lim T-’         i     E[s,(~,)s,(O,)‘].                                               (5.23)
               T-30         t=1



Then, by (5.18) and (5.21), it is trivially true that A, = J,. But the traditional                infor-
mation matrix equality says that (for all T)


       Tpl     i      E[h,(Q,)] = Var                         .                                   (5.24)
               t=1



It is easily seen that (5.24) is not implied by the conditions of Theorem 5.2 because
these conditions     do not imply that the score is serially uncorrelated.    In other
words, for MLE as we have defined it, B, # A, necessarily. If {s,(d,)} is serially
uncorrelated    then the traditional  information  matrix equality holds, A, = B, = Jo,
and the asymptotic      variance of the MLE simplifies to its well-known     form. We
state this as a lemma.

Lemma 5.1

Let the assumptions             of Theorem      5.2 hold, and assume,   in addition,

MLE.7:         For t = 1>2 ,...,        ECst(Bobt
                                               +j(Ho)‘l= O,        j>   1.
Then
   Assumption    MLE.7 always holds when the observations          are independently
distributed, which is why it never appears for MLE with independently      distributed
data. With dependent observations,    if MLE.7 holds it is usually because the model
captures all of the dynamics in the following sense.


Dejinition 5.1

The model is said to be dynamically      complete   in distribution   if

     WIG         @t-l) = DbIxtL                                                         (5.25)

where @,-i -(yt-i,xt-i  ,..., y,, x1) is the information   observed at time t - 1.
Often we simply say the density is dynamically    complete when (5.25) holds.

   Note that this definition allows x, and Dt_ 1 to overlap, as happens if X, contains
lags of yt or lags of some other variables zl. For example, if X, = (z,, yt _ 1, zt 1),
then Qtml =(Y~-~,z~~~,...,Y~,z~).


Lemma 5.2

If the model is dynamically complete in distribution     then the score {st(Q,): t = 1,2,. . .}
is a martingale   difference sequence with respect      to the information    sets {at: t =
1,2,. .). Consequently,     MLE.7 holds.

  This lemma is easily proven:      (5.14) and (5.25) imply that

     E cs,(e,)Ix,, @t- 11= 0,

so that E[s,(BJ at_ i] = 0 by iterated expectations.       Because s,(@,) is a function of
Qr, {s,(e,)} is a martingale difference sequence with respect to {Qt}. It is a simple
consequence      of the law of iterated expectations       that a martingale     difference
sequence is serially uncorrelated.
   Dynamic completeness ~ which hinges crucially on the choice of the conditioning
variables X, - has a simple interpretation:    if interest lies in explaining y, in terms
of past y and possibly current and past values of some other sequence, say {z,},
then enough lags of y and z have been included in the conditioning            variables x,
to capture the entire dependence on the past. Often, but not always, it is assumed
that a fixed number of lags of observables        is sufhcient for modelling dynamics,
and (5.25) makes precise the notion that enough lags have been included. For
example, suppose that the conditioning       variables are chosen as x, = ( yr _ 1, zt_ 1).
If this specification of x, is dynamically  complete then
so that there are only first order              dynamics. As another example suppose                    that
x, = zl. Then dynamic completeness               requires the fairly strong assumption


      ~(Y,lz,,Y,-l,z,-l,...~Yl~zl)=~(Y,lz,).                                                           (5.26)


In other words, the static relationship           is also the dynamic relationship.              That this is
rarely true is perhaps what prompts Hendry et al. (1984, p. 1043) to state that static
models “. . rarely provide useful approximations                      to time-series data processes.”
But one should keep in mind that D(y,Iz,) might be of economic interest even if
(5.26) is false.
    Because we are allowing the dimension of x, to grow with t we can always choose
It-(Zf,.Y-I,&1,.       ..,Y1,zl)orXt=(Yt-l,zl~             1,...,Yl,zl)orXt-(Yr-1,Yr~2,...,Y1)
to ensure dynamic completeness, assuming of course that a correctly specified para-
metric model of the conditional            density can be found.
    Most of the earlier work on maximum likelihood estimation                              with dependent
processes assumes dynamic completeness,                  in which case a martingale                difference
central limit theorem can be applied to (st(fI,): t = 1,2,. . .}. See, for example, Roussas
(1972), Basawa et al. (1976), Crowder (1976), Hall and Heyde (1980) and Heijmans
and Magnus (1986), among others. The popular “prediction error decomposition”
method of building up the likelihood function from conditional                          distributions     [for
example, Hendry and Richard (1983), Hendry et al. (1984) and Harvey (1990,
Section 3.5)] is a special case of specifying a dynamically                   complete model: for each
t, the density f,(.lx,;tI,)     represents the density of y, (or of the prediction errors)
given all past observable information            on y and perhaps on current and past values
of z.
   As usual, estimating   Avar ,,I’?(& - 0,) requires estimating   A, and II,. First
consider estimation of the matrix A,. There are at least three possible estimators
of A, in the MLE context, each of which is valid whether or not the model is
dynamically   complete. The first estimator, based on the Hessian, was encountered
in the general M-estimation    setting in Section 4, but it is now useful to have a
separate notation for it. Define


      & = T- ’ i I&),
                    t=1

where we recall that h, generally depends on y, and x,. Under the conditions         of
Theorem 5.2, H, A A,. This estimator is generally thought to have good finite
sample properties, but it does require second derivatives of the conditional       log-
likelihood function and it is not guaranteed     to be even positive semi-definite   in
sample (although it is positive definite with probability   approaching   one).
   A second estimator is the BHHH [Berndt et al. (1974)] estimator, which is based
on the information matrix equality (5.21). If we add to the conditions of Theorem 5.2
                                                                                          2679


that {s~(@s,(~)‘:t = 1,2,.   .} satisfies the UWLLN       then


                           L4,.
     & = T- ’ t, s,(B,)s,(&)~
                r=1

This estimator has the advantage          of requiring only the first derivatives   of the
conditional   log-likelihood    function, and it is guaranteed   to be at least positive
semi-definite. However, it is also known to have poor finite sample properties in
some situations. [See MacKinnon          and White (1985) for linear models, Davidson
and MacKinnon        (1984) for logit and probit, and Bollerslev and Wooldridge (1992)
for QMLE.]
   A third possible estimator was given in the M-estimation       section. Let a,(~,, 0) =
M~rbt~~t8)l-d = - J%CV~M)I-~.Then

                                                                                       (5.29)


is a consistent estimator of A, provided {a&,@}           satisfies the UWLLN.      If the
conditional    expectation needed to obtain A_T is in closed form (as it is in some
leading cases to be discussed in Section 6), A, has some attractive features. First,
it often depends only on first derivatives of a conditional     mean and/or conditional
variance function. Second, A^T is guaranteed      to be at least positive semi-definite
because of the conditional   information    matrix equality (5.20). Thir_d, jT has been
found to have significantly    better finite sample properties than J, in situations
where a(~,, 0) can be obtained analytically.
   If the model is dynamically     complete or MLE.7 holds for some other reason
there is nothing further to do. The asymptotic variance of 8, is estimated as one
of the three matrices f?; 'IT, 3; 1JT, and A^; ‘IT.
   Things are more complicated       if MLE.7 does not hold because B, depends on
the autocovariances    of {s,(e,)}. A serial-correlation-robust estimator using {$}
should be used, for example that given in equation (4.30). With b, consistent for
B, under MLE.1 -MLE.6,       consistent   estimators   of Avar JT(O,    - 0,) are given by




  We will not explicitly     cover the case with nuisance        parameters   that affect the
asymptotic   distribution     of fi(eT   - 0,) but these are easily reasoned from the
general M-estimator       results.
   The three tests covered in the M-estimation      section apply directly to the MLE
context. The Wald statistic for testing Ha: c(e,,, = 0 is given in equation (4.37). If
the model is dynamically        complete under H,, I”, can be taken to be (5.27), (5.28)
26X0                                                                          .I. M. Wooldridgr



or (5.29). If the application    is to time series with incomplete     dynamics then VT
can be taken to be one of the estimators in (5.30).
   Define the log-likelihood     function for the entire sample by YvT(0) = I,‘= 1I,(O).
Let 8, be the unrestricted     estimator, and let fi,. be the estimator with the Q non-
redundant    constraints   imposed. Then, provided MLE.7 holds and the additional
assumptions    in Lemma 4.3 hold, the likelihood ratio statistic

       29,   = 2[&(0^,)     - U,@,)]                                                     (5.3 I)

is distributed asymptotically   as xi under H,; this follows immediately from Lemma
4.3 as M.8 and M.9 are satisfied. Recall that there is no known correction to this
statistic that has an asymptotic      distribution   free of nuisance parameters     when
MLE.7 is violated, so the LR statistic should be used only when the dynamics
have been completely specified under H,.
   The LM test follows exactly as in the general M-estimator           case. If we assume
dynamic completeness       under the null hypothesis then the three possible versions
of LM, are (4.46), (4.48) and (4.48) with 5; ’ in place of 2; ‘, where all quantities
are evaluated at the restricted estimator QT. Under H, and dynamic completeness,
LM, zxi. In the case outlined in Section 4.6, 0, may be on the boundary               of 0
under H,. If MLE.7 is not maintained            under H, then the robust LM statistic
given in (4.44) should be computed.
   It is possible in this framework to cover a broader class of tests that includes
tests against nonnested alternatives, encompassing       tests, Hausman tests and various
information     matrix tests. White (1987, 1993) gives a very general treatment         for
possible misspecified dynamic models.



6.     Quasi-maximum      likelihood   estimation   (QMLE)

In this section we cover estimation of the first two conditional    moments ofy, given
x,. Section 6.1 covers the case where the conditional   mean is of interest. We consider
multivariate    weighted nonlinear   least squares estimation     of the parameters        of
E(y,Ix,), which covers many of the models used in applied time series analysis
(including vector ARMA models). These methods can be applied whenever E(y,lx,)
can be obtained in parametric form, regardless of the underlying          structure.
   Section 6.2 covers the case when the conditional    mean and conditional        variance
are jointly estimated. The multivariate      normal distribution     is known to have
robustness properties for estimating the parameters indexing the conditional           mean
and conditional    variance. These results are intended primarily for the case when
the mean cannot be separated out from the variance; if E(y,lx,) can be estimated
without specifying Var(y,lx,) then, at least for robustness       reasons, the methods
of Section 6.1 are preferred for estimating the conditional      mean parameters.       [See
Pagan and Sabau (1987) for an illustration        of the inconsistency      of the normal
MLE for the conditional     mean parameters in a univariate linear model case when
the variance is misspecified.] Of course if one is confident about the specification
of the first two moments the methods of Section 6.2 might be preferred on efficiency
grounds over those in Section 6.1, but this depends on auxiliary assumptions.



6.1.    Conditional   mean estimation

We first consider estimating         a model of a correctly specified conditional     mean
using multivariate     weighted nonlinear least squares (MWNLS). These results build
on the work of Hannan (197 l), Robinson (1972), Klimko and Nelson (1978), White
and Domowitz (1984) Gallant (1987) and others for multivariate              nonlinear   re-
gression. We allow for a nonconstant         weighting matrix in order to include pro-
cedures asymptotically      equivalent to QMLE in the linear exponential       family [see
Gourieroux     et al. (1984) and White (1993)].
    As in Section 5 let yt be a G x 1 vector of variables to be explained by the con-
ditioning variables x,, which, as always, may contain lagged dependent variables
and other conditioning       variables. Let (m,(x,, %):x,EX,, %e 0 c [w’} be a model for
E(y, 1x,). We will assume that the model is correctly specified in the following sense:


Assumption     WNLS.1

For some %,E 0 c Iwp,


       NV, I-5)= 4(x,, O,),       t= 1,2,....                                         (6.1)

The weighted     nonlinear   least squares      (WNLS)   estimator   solves




 where W1(x,, y) is a G x G symmetric, positive definite (with probability one) matrix
 that can depend on the conditioning   variables x, and an R x 1 vector of parameters
y. When G = 1 and Wr(xf, y) = y = cr’ the problem reduces to univariate nonlinear
least squares. We have put the + in the objective function to simplify the gradient
formulas and to make the quasi-LR statistic derived in Section 4.6 directly applic-
able.
    The motivation    for using MWNLS to estimate the parameters          of E(y,lx,) is
that W1(x,, 9r) is thought to be a consistent estimator of Var(y, Ix,). For example,
if W(x,, fr) = fir (so that Var(y,Ix,) = R, is the nominal variance assumption),
then we obtain the nonlinear      seemingly unrelated    regressions (SUR) estimator
2682                                                                                        J.M.    Wooldridyr


[Gallant      (1987) Robinson         (1972)].     Most of the time fi,        would be obtained        as


       fi,   = T-l     i (y, - m,(O,+))(y, - m,(e;))’ EE T-1 i u&+‘,
                      1=1                                              r=1

where 0: is the MNLS estimator               of0, and (u:}      are the G x 1 MNLS residuals.
   In general,       yT can be any estimator           that is n-consistent          for its plim; namely,
for some DIET c [WR,fib?,                  - y*) = O,,(l). (In most       applications      $r is either       a
preliminary a-consistent     estimator of O,, such as the NLS estimator, or it comes
from a regression procedure using u:u:’     as the dependent variable and functions
of x, as the independent   variables, or some combination     of these.) Although we
will discuss the case where the variance function is correctly specified, we are also
interested in performing inference under variance misspecification.
   Under WNLS.1. define the G x 1 errors as


       u,= Yt - m,(x,,Q,),            t= 1,2,....                                                       (6.4)

Keep in mind that, under WNLS. 1, we can only conclude that E(u,lx,) = 0 and
Var(u, 1x,) = Var(y, 1x,); the II, are not necessarily serially uncorrelated or indepen-
dent of x,. This leads to the tautological     model

       Yt = ~t(-%,do)+ 4,                                                                               (6.5)

       E(u, IXJ = 0.                                                                                    (6.6)

Define the MWNLS               objective   function     for observation       t as




By replacing yt in (6.7) with the right hand side of (6.5) and using a little algebra
along with (6.6), we can write

       Nq,(~,~Q,;74d = trC~,(+~)}-‘~~(-5)
             + x~,(xt> 00)- ~,(~,>@I’(Wr(X,,Y))- ‘Cwb,, 0,) - Mx,, @I,                                  (6.8)
where Var(y,Ix,) = fip(x,) is the actual conditional         variance of yt given x,. Be-
cause the first term in (6.8) does not depend on 8 it is clear that, for any r~r,
E[q,(w,, 8; y)I x,] 3 E[q,(w,, 8,; y)lx,], all BE 0. By iterated expectations

       E(qt(w,,0;7412 a%(% 0,; Y)l>                    BE0.                                             (6.9)

In particular,        this   inequality    holds      for plimy,    = y*, which       establishes     Fisher
consistency  of the multivariate weighted NLS estimator under MWNLS.l.      (This
is one of those cases alluded to in Section 4 where Fisher consistency holds for
any value of the nuisance parameter.)
   We do not write down formal consistency and asymptotic normality results, as
these follow from the results on M-estimation.     Rather, we focus on the key
assumptions   that influence how inference is done on 0,. Because of the Fisher
consistency result we have essentially shown that, under WNLS.l and regularity
conditions,  MWNLS consistently      estimates 0,.
   Next define the score for observation     f as

     de Y)= V,q,@;Y)’= - Vpr(-% Q,‘IW,(-%Y)}- lCYr- m,(x,,@I
              = - V&(@‘CW,(Y))‘u,(Q).                                                             (6.10)

Since u, = u,(e,), it is easily seen under WNLS.l that E[s,(B,;y)lx,] = 0 for all YET.
Also under WNLS. 1 ~ and smoothness conditions        on W(x,, y) ~

     E[V,.s,(B,,~~)Ix,] = 0,          all YET,                                                    (6.11)

which implies the convenient            M-estimation    assumption       M.7. Thus, the asymptotic
variance   of 8, does not depend on that of *TTprovided              that fioT       - y*) = O,( 1).
   Under WNLS.l    and the M-estimation                 regularity     conditions,     fi(e,   - Q,) is
asymptotically normally distributed with


     Avarfi(i?,-(I,)=             A;‘BoAoml,                                                      (6.12)

where we can write


     A, = lim T-’         f     E[V,m,(B,)‘{ W,~*)}-lV,q(O,)]                                     (6; 13)
            T+ic          t=1



and B, is given by (4.7). (This expression for A, can be derived by noting that the
term in V&B; y) depending on Vim,(x,, 0) and u,(e) has a zero conditional     mean
at 0 = 0,.) Under WNLS.1 and regularity conditions, a consistent estimator of A,
is the positive semi-definite matrix


     AT= T- ’ i          V,m,(e,)‘{    I+‘,(;,)} -‘V,m,&).                                        (6.14)
                   1=1



As usual, estimation    of B, must generally account for possible serial correlation
in s,(8,;y*); from (6.10) we see that the serial correlation   in the score depends on
the serial correlation   in {Us}. Straightforward  application    of the law of iterated
expectations shows that Assumption M.8 is implied by the following assumption.
2684                                                                                      J. M, Wooldridqe


Assumption         WNLS.2

For all t3     1, E(u,~:+~jlx,.x,+~)=O,j3          1

Definition 6.1

The model specification        is said to be dynamically           complete    in mean if

       WY,l-%@t-1)= WI-d,                                                                           (6.15)

where @,-r =(yt_r,xt-r         ,...,   yr,r,).

We have the following          simple      lemma       relating   Definition   6.1 and      Assumption
WNLS.2.

Lemma 6.1

If (6.15) holds then (u,: t = 1,2,. . .} is a martingale          difference   sequence     with respect
to (at}, and so WNLS.2 holds.

   In fact, we can say more. If {u,} IS a martingale difference sequence with respect
to { @,} then so is {s,(tI,;y)} for any YET. Thus, for MWNLS only the conditional
mean has to be dynamically       complete for the score evaluated at 8, and any value
of y to be a martingale difference sequence (MDS). For MLE we derived the MDS
property of the score under the assumption         that the model for the conditional
density of yt given (x,, @,- r) was correct in its entirety.

Theorem      6.1

Under     WNLS.1       and WNLS.2.


                                                                                                    (6.16)

where A, is given by (6.13) and J, is given by (4.17).

   A consistent estimator of J, is the usual outer product estimator jr given in
(4.23). Under WNLS.1 and WNLS.2 an appropriate           estimator  of Avar(&)    is
A~(8,)=~;‘.?,A^;‘/T.
   Further simplifications arise if we have properly modelled Var(y,Ix,), as given
by the following assumption.

Assumption         WNLS.3

For some Y,E~,

       Var(y, Ix,) = W,k,    Y,),        t= 1,2,....
                                                                                                 2685


When WNLS.3          holds we also assume           that fT is JT-consistent      for yO.

Theorem     6.2

Under      WNLS.IPWNLS.3,          Avar,,@(8,         - 0,) = Ai ‘.

  Under      WNLS.l-WNLS.3,           a simple estimator        of Avar(H^,) is


                                                                                               (6.17)


When y, is a scalar and I+‘&, y) = y = 02, 0, is the nonlinear                 least squares   (NLS)
estimator and the usual estimator of its asymptotic variance                   is

      &l
      _____= 8:       i    V,m,(~,),V,m,(Q,)        -l,                                        (6.18)
        T          ( I=1                        >



where &G2 IS the usual estimator of Var(y,Ix,) = Var(u,Ix,) = of based on the sum
of squared residuals from NLS estimation. For emphasis, sufficient conditions for
(6.18) to be valid are

      E(Y~IX~,Qt- I) = E(Y,M         = m,(x,,~,)                                               (6.19)

and

      Var(y,Ix,)   = f~,‘.                                                                     (6.20)

Interestingly,   it is not required that Var(y,( x,, Q1- 1) = Var(y,(x,), so that the
variance need not be dynamically        complete. For example, if x, does not contain
lagged dependent      variables then Var(y,Ix,, at- 1) can follow an ARCH process
provided (6.20) is true; (6.18) is still a valid estimator of Avar(8,) even though
there are neglected dynamics in the second moment of u,.
   For the general case where only WNLS. 1 is assumed to hold, we need to estimate
II, as in equa$on_(4._30) with the score given by (6.10). As always, Avar(&.) is
estimated by A;’ B,A; l/T.
   Testing is easily carried out as in previous sections. The Wald statistic is obtained
from the results in Section 4.6, with the estimated variance matrix used depending
on whether WNLS.2, WNLS.2 and WNLS.3, or neither of these assumptions                    is
maintained.
   The quasi-LR statistic, obtained as


                                                                                               (6.21)
2686                                                                                   J.M.   Wooldridqr



where o”, is the restricted estimator and 4,. is the unrestricted     estimator, has an
asymptotic xk distribution     under WNLS.l, WNLS.2 and WNLS.3. To ensure that
M.9 holds (see Lemma 4.3), we must ensure that the objective function is properly
computed. For example, when y, is a scalar and the variance is given by Var(y, 1x,) =
crfu,(x,, 6,) for some function u&c,, a), the function q1 is given by

       4t(w         @           ?)   =   (Y,- et, @J2                                             (6.22)
               f)       3
                                          2&I,(x,,   6)


Typically,              once s^, and @, have been calculated,   S’, is computed   as


                                                                                                  (6.23)



where ti, = y, - m,(x,, 8,) and 0, = u,(x,, 8,). Once the restricted              estimator     8, has
been obtained, the QLR statistic can be computed as


         QLR                =        (SW - SWJ
                    T                       A2
                                           CT



where SSR, is the sum of squares of the restricted weighted residuals {Ot1’2Ult}
and SSR,, is the sum of squares of the unrestricted       weighted residuals (0, “‘I&}.
For NLS, (6.24) is QT/(T - P) times the F-statistic covered in Gallant (1987, p. 56)
for nonlinear     least squares with fixed regressors and i.i.d. errors. This analysis
shows that this F-statistic is valid under the weaker assumptions    WNLS.1, WNLS.2
and WNLS.3, which allow for models with lagged dependent variables and hetero-
skedastic martingale       difference sequences  (provided    the heteroskedasticity    is
properly modelled).
    To compute the LM statistic for testing conditional      mean hypotheses, only the
first derivative of the conditional mean function evaluated at the restricted estimates
is needed. The setup is the same as in Section 4.6; there are Q possibly implicit
restrictions    on the P x 1 vector BO. Let yT be the nuisance parameter estimator
used in computing       the restricted estimator e”,. In using the LM statistics from
Section 4.6 it is best to use as the estimate of A, the P x P matrix



                                                                                                  (6.25)


where V,r71, = VBm,(x,, 8,) and k’, K WJx,, FT). Under WNLS.1 only, d, should
be a serial-correlation-robust estimator applied to {St} and the robust LM statistic
(4.44) should be used. This would be the case, for example, in testing a static or
distributed   lag relationship     without also assuming    that it is the dynamically
complete conditional      mean.
    When WNLS.1 and WNLS.2 hold under H,, which is often the case ~ tests of
dynamic misspecification       take the null to be complete dynamic specification - &
can be replaced in (4.44) by the outer product estimator            jT in (4.45), where
S, = - V&z: I?‘- ‘it. The resulting statistic can be given a regression interpretation
as in Wooldridge     (199 1b).
    If we impose WNLSI,          WNLS.2 and WNLS.3 under the null then things are
even easier. The outer product LM statistic in (4.46) is asymptotically        valid, but
 this is not the best choice; the Hessian form (4.48) with JT in (6.25) is no more
difficult to compute and has better finite sample properties. A statistic that is
 proportional   to (4.48) (where the constant of proportionality    tends in probability
 to unity under H,) can be computed from the r-squared of a regression. Run the
 (stacked) OLS regression

     @-“2~               on     pwv           fi           t=1,2                     T.   (6.26)
           t        t             t          I3    f’
                                                                        )...)




Under WNLS.l, WNLS.2 and WNLS.3, TGR,’ “1: (G is the dimension of y,).
  When y, is a scalar, Var(y,Ix,) is typically specified as Var(y,Ix,) = ~fu~(x,, 6,).
Then the LM statistic can be computed as TR,’ from

     c-l’2jj
       f        I
                        on    17~“‘V,fiit,              c=1,2   ,...,           T,        (6.27)


where Et = u,(x,, g,). For NLS, fir = 1.
   As an example of how to set up a test in the current framework, consider testing
for AR(l) serial correlation after NLS estimation. The null mean function is f,(g,, /?)
for g, some subset of (zr,yr-l,z,-l    ,..., y,, z,) (so that g, can contain lags of y,)
and the unrestricted    mean function is m,(x,, 0) = f,(g,, B) + p(y,_ 1 - f,_ 1(g, _ 1, /Q),
where x, = (g,, y, 1,gt 1). Under H,: ,p, = 0, we-obtain the NLS estimator o,f PO, /I,
and the NLS residuals ii, = y, - f,(g,, /IT). Now 0, = (&O)’ and V,fi, = (VJ,, ii,_ l).
Because this is always a test of dynamic completeness,        WNLS.2 holds under H,.
If we also impose (6.20) (WNLS.3 in this context), then an asymptotically      xf statistic
is (T - l)Ri from the regression


     fit       on       VJt7fit-   l7        t = 2,3,. . . , T.                           (6.28)

Note that because X, contains at least y,_ 1, (6.20) rules out ARCH or other forms
of dynamic heteroskedasticity   under H,.
   For applications of LM statistics and more on their robust forms, see Engle
(1984), Godfrey (1988), Wooldridge   (1991a) and MacKinnon       (1992).
268X


4.2.     QMLE for the mean and variance

We now consider joint estimation      of E(Y,lx,) and Var(y,Jx,). As in the previous
section, y, is G x 1 and x,EX( is the set of conditioning variables that may contain
lags of yr. The conditional  mean and variance functions are jointly parameterized
by a P x 1 vector 8:

        {m,(x,, %):rr&“r, %EO C P},

        {C&Y,, %):x,&,,    %E0 C l@}.

The subsequent  analysis is carried out under            the hypothesis   that    the first two
conditional moments are correctly specified.

Assumption       QMLE.1

For some %,E 0,

        E(Y, IT) = 4(x,9 eO)>
        Var(Y,lx,)   = Rr(q, eO),    t= 1,2,....

We estimate 8, using quasi-MLE    under the nominal assumption                that y, given x,
is normally distributed. For observation  t, the quasi-conditional              log-likelihood
apart from a constant is




where 10,(x,, %)I denotes the determinant of J~,(x,, %). Letting u,(B) -y, - m,(x,, 8)
denote the G x 1 residual function and suppressing the dependence of 0,(x,, 6) on
X, yields the more concise expression

        I,(%)= - $loglf2,(%)I - $4,(e)‘{n,(e)}-1u,(%).                                      (6.29)

The QMLE %r is obtained by maximizing the normal quasi-log-likelihood      function
_Yr(%) = z,‘= 1I,(@. Under QMLE.l it can be shown that E[1,(8,)(x,] 3 E[l,(d)Ix,]
for all 0~0 and for all x,EX,. This result has been established in special cases by
Weiss (1986) and was shown to hold generally by Bollerslev and Wooldridge
(1992). Its important  consequence is that 8, solves

        maxE M%)l
        eee

under    QMLE.1,      so that QMLE    based on the normal       conditional      log-likelihood
is Fisher consistent. The weak consistency of the QMLE GT for 0, under QMLE.l
and regularity conditions       follows from the usual analogy principle argument. As
usual, the uniform weak law of large numbers applied to fl,(y,, x,, 0): t = 1,2,. . .}
underlies such a result, which requires moment and continuity                assumptions     on
m(x,, .) and 0(x,, .) and the assumption that I,(O) is not too dependent on the past.
   If m,(x,, .) and 0,(x,, .) are differentiable   on 0 for all relevant x,, and if 0,(x,, (3)
is nonsingular    with probability    one for all 0~ 0, then differentiation   of (6.29) yields
the P x 1 score function s,(e):

     s,(U) s - V&,(U) = - {V,m,(H)‘R;       ‘(R)u,(U)
              +~V,n,(e)‘[~,‘(U)on,‘(H)l          vecCu,(@,(@‘- Q(Q)]},                  (6.30)

where V,m,(H) is the G x P derivative of m, and V&!,(Q)is the G2 x P derivative
of n,(0). By definition,  under QMLE.l      E(u,)x,) = 0 and E(u,u:lx,) = O(xt, 0,). It
follows that, under correct specification    of the first two conditional  moments of
y, given x,, E[s,(0Jx,]  = 0. This is an alternative   statement of Fisher consistency
of QMLE.
   To estimate Avar fi(e^,     - 0,), we need to estimate A, and B,. Here is another case
where the simplest and best behaved estimator of A, depends only on first deri-
vatives, in this case of the mean and variance functions. Let a,(~,, tl,) = E[h,(tI,)lx,].
A straightforward     but tedious calculation   shows that, under QMLE.l,

     q(x,, do)= v,m,(OJ’Q; ‘@,)V,m,V,)
                   +~v,~,(~,)‘C~,-‘(~,)o~,l(~,)lV,~,(~,).                               (6.31)

(As expected, this matrix is positive semi-definite,        something    that is useful for
programming        Gauss-Newton     iterations for obtaining the estimates.) A consistent
estimator of A, is A^r = T- lx,‘= 1 a,(8,.). Under QMLE.1 only, we need a serial-
correlation-robust      estimator for-B,, and this is obtained by applying one of the
Section 4.5 estimators to $ = ~~(0~).
   To state a condition       under which the score is serially uncorrelated,     define the
(G + G2) x 1 vector Yec [ul, {vec[u,uj - f2r(0,)] }‘I’, where u, = ~~(0,). Under QMLE.1,
E(r,(x,) = 0. We now add the assumption           that {Ye} is appropriately    serially un-
correlated.


Assumption    QMLE.2

For all t 3 1, E(r,r;+jJx,,x,+j)   = 0,j 3 1.

  It is easily seen that Assumption    QMLE.2     implies that the score is (conditionally)
serially uncorrelated. Therefore, under QMLE.l and QMLE.2, Avar fi(gT         - 0,) =
A;‘J,A;‘,      where J, is as in (5.23), and a consistent estimator of J, is given in
2690                                                                             J.,2/1. Wooldridge



(5.28) with the score as in (6.30). Usually,           if QMLE.2   is to hold, one has in mind
a stronger assumption.

Dejnition     6.2
The model is dynamically            complete    in mean and variance if

       WI-5         @r-1)= EblxtL
       Varbl-q Dt- 1)= Var(y,lx,),                 t= 1,2,...,




Lemma 6.2

If the model is dynamically   complete in mean and variance then {Y,:t = 1,2,. . .}
is a martingale difference with respect to the information sets {a,}, and therefore
QMLE.2 holds.

   From (6.30), {s,(f?,)} IS a martingale   difference sequence (MDS) with respect to
Dt = (yt,xt,.   , y,,x,) if {r,} is. Thus, the score of the normal quasi-likelihood       is
an MDS if the first two conditional       moments are dynamically      complete; nothing
else about the normal distribution      need apply to the distribution    of yt given x,.
   If yt given X, is normally distributed     then the conditional   information    matrix
equality

       Var Cs,(~,)IXrl= a,(x,,0,)                                                             (6.32)

holds. When combined      with QMLE.2                this further simplifies the estimation of
Avar(@,). While normality     is sufficient          for (6.32), it also holds under a weaker
assumption.


Assumption QMLE.3
(i) E [vec(u,u:)ui Ixt]= 0;
(ii)                CWu,ul)- ~,(Q,))'lx,l = 2~J~,(~,)@f4(Q,,)l,
   EC(vec(&)- Q,(@,)}
where NG = DG(D)CDGJID~,
                       and D, is the G2 x G(G + 1)/2 duplication matrix;
see Magnus          and Neudecker     (1986).

   In the scalar case, QMLE.3(i)      is the symmetry    condition    E(u:Ix,) = 0 and
QMLE.3(ii)     is the familiar fourth moment     condition    E[ {uf - CJ:(~,))~~X,] =
2a,4(0,). Assumption  QMLE.3 is the multivariate   version of these assumptions,      and
it could hold for distributions  other than multivariate   normal. For more on the
matrices D, and NG, and their relevance for the multivariate       normal distribution,
see Magnus and Neudecker (1986).
     Under QMLE.1        and QMLE.3,    (6.32) holds. Therefore,    under   QMLE.1,QMLE.2
andQMLE.3,         Avar fi(&,     - e,) =_AO, and Avar(@,) can be estimated as A^; ‘/T
or 3; l/T. The estimator based on A, tends to have better finite sample properties
than that based on the outer product of the score estimator jr.
   Testing hypotheses about BOposes no new problems. The Wald statistic is as
before for M-estimation,       with an appropriate    estimator for B,. Recall that under
QMLE.l-QMLE.3,           B, = A,, but not otherwise. The quasi-LR statistic is valid
under assumptions       QMLE.l,      QMLE.2 and QMLE.3; this follows directly from
Lemma 4.3.
    The general formula for the LM statistic is again given by Equation (4.44). If,
in addition to QMLE.l,         we impose QMLE.2 and QMLE.3 under the null, the
statistic simplifies to (4.46) or, preferably, (4.48). Under QMLE.l and QMLE.2 the
statistic is (4.44) with Jr in place of I,.
   A natural application      of these results is to univariate and multivariate    ARCH,
GARCH, and ARCH-in-mean                models; see Bollerslev, Engle, and Nelson (this
Handbook).      But the normal QMLE can be applied in many other contexts.
Whenever the mean and variance are twice continuously             differentiable in 8 then,
subject to the modest regularity conditions        in Section 4, the QMLE will produce
fi-asymptotically          normal estimates of the conditional           mean and conditional
variance parameters.         The actual distribution        of yt given x, can be very different
from normal; for example, when y, is a scalar, it could have a discrete or truncated
distribution.     This is useful for problems where maximum likelihood is computa-
tionally difficult or violates standard           regularity conditions     (such as (5.16)). For
example, QMLE can be applied to certain switching regression                          models with
unknown       regime by obtaining        E(y,lx,) and Var(y,Ix,) (where X, may or may not
contain lagged dependent            variables) in terms of the structural         parameters   and
using these in the normal quasi-log-likelihood;               the MLE for these models based
on a mixture of normals is known to be computationally                    difficult [Quandt    and
Ramsey (1978)]. The QMLE can also be applied to certain frontier production
function models [Schmidt (1976)], where the log-likelihood                    is discontinuous   in
some of the parameters and so standard inference procedures do not necessarily
apply. The discontinuity       in the true log-likelihood      comes about because the support
of the conditional     distribution     of y, depends on unknown parameters. The QMLE
might be useful because the moments                  E(y,lx,) and Var(y,Ix,) depend on the
parameters in a very smooth fashion.


7.     Generalized     method of moments estimation

7.1.    Introduction

This section studies        generalized method of moments    (GMM) estimation    for
dependent   processes.      We rely heavily on the work of Hansen (1982), Bates and
White (1985, 1993), and Newey and McFadden            (this Handbook).    As with the rest
of the chapter, we focus on weak consistency, and we do not attempt to find the
weakest set of regularity conditions. The limiting distribution     results in Section 7.3
apply to the essentially stationary,     weakly dependent case.
   Many applications     of GMM fit into the category of estimation under conditional
moment restrictions. We will approach method of moments estimation               from this
standpoint.   By specifying the conditioning       set to be empty the unconditional
moments framework         is a special case. The related classical minimum distance
estimators are not covered here; see Newey and McFadden             for a treatment that
can be applied to time series contexts by using the results of this chapter.
   Let {(w~,x,): t = 1,2,. . .$ be a stochastic process, where wtc%‘; and x,EX,, and
the dimensions    of both w, and x, may grow with t. Assume that there is an N x 1
vector function Y,:,YYW;  x 0 --f [WNdefined on YJY~  and the parameter space 0 c [w’.
Interest lies in estimating the P x 1 vector 8,~0 such that

     Nr,(w,, Q,)lx,l= 0,       t=   1,2,....                                         (7.1)

Equation (7.1) constitutes a set of conditional    moment restrictions, studied in cross
section settings by Chamberlain        (1987) and by Hansen (1982), Hansen           and
Singleton (1982), Robinson (1991 a), Newey (1990) and Rilstone (1991) in dependent
settings.
   Conditional     moment restrictions are straightforward  to generate. First consider
the setup of Section 6.1, where yt is a G x 1 vector and the model {m,(x, 0): x,E%“~,
0~0)      is correctly specified for E(y,lx,). Then (7.1) holds by setting u,(w,,@ =
Y, - m,(x,, Q).
   Next suppose m,(x,,H) and Q,(x,,O) are correctly specified models for E(y,Jx,)
and Var(y, 1xr), as in Section 6.2. Defining u,(0) = yr - m,(x,, H), a set of conditional
moment restrictions is obtained by setting




a {G+[G(G+        1)/2]} x 1 vector, where vech[.] denotes the vectorization     of the
lower triangle of a matrix. Under correct specification       of the conditional mean
and conditional    variance (7.1) holds.
   In many situations, including a variety of rational expectations models, economic
theory implies an Euler equation of the form

     ~CY,(Wf,~o)l~,_1,~,_2,...‘~11=0’                                                (7.2)

in which case (7.1) follows by the law of iterated expectations     whenever x, is a
subset of (wI_l,wr_l ,..., WI).
   Conditional    moment   restrictions are also natural  for analyzing    nonlinear
simultaneous    equations  models. A general dynamic     structural   model can be
Ch. 45: Estimution and l@renw    ,fiw Drprndrrlt Prcrcessrs                                    2693


expressed    as




     0,     IXJ = 0,                                                                          (7.4)

where qt(.) is N x 1 and x, contains predetermined               variables. Thus, in a GMM
setting we identify YJw,, 0,) with the structural errors u,. As we see below, a whole
class of GMM estimators           are consistent   and asymptotically        normal under the
Assumption     (7.4) that the structural errors have a conditional          mean of zero given
the predetermined       variables; the errors need not be independent             of X, or even
conditionally    homoskedastic.      They can also be serially correlated provided (7.4)
holds.
   Condition    (7.1) implies that the unconditional        expectation     of Y~(w~,~?,)is zero,
but it implies much more: any matrix function of x,, say the N x M matrix G&X,), is
uncorrelated with r,(t),,)= r,(w,,0,). More precisely, if E[~T,,,(w,, 8,)1] < co, h = 1,. . . , N
and E[I Grhj(xt)rth(w,, d,)(] < co, h = 1,. . . , N, j = 1,. . . , M, then

     EIGl(xt)‘r,(~,,    e,)l = 0.                                                             (7.5)

Equation (7.5) is the basis for estimating    0,. Actually, to handle cases that arise
in practice, we will consider a more general framework.            Let the instrumental
variable function depend on some nuisance parameters            (which might include 19)
as well as x,: G,(x,, y), where YET c RH. Under (7.1) and finite moment assumptions,

     E[G&,        y)‘rt(wt, e,)] = 0   for all YET.                                           (7.6)

As before, we assume        that we have an estimator         fT that satisfies


     fi(y*T- Y*)= O,(l)>                                                                      (7.7)

where y* could contain 8, but need not have an interpretation    otherwise.                 Then,
because (7.6) holds with y = y*, Lemma A.1 generally implies that


     T- ’ f G,(W’r,(~J JL0,                                                                   (7.8)
            t=1



where G,(y) = G,(x,, y) and r,(O) = rJw,, 0). The analogy         principle   suggests estimating
BOby solving the M nonlinear       equations


     T - l i G,(g,)'r,(e) = 0,                                                                (7.9)
           1=1
where, to identify O,, we need M > P. But (7.9) does not always have a solution,
especially when M > P. Instead, we choose an estimator of 8, that makes the left
hand side of (7.9) as close as possible to zero, where closeness is measured as a
quadratic form in a positive definite matrix. The weighting matrix A, is an M x M
positive semi-definite random matrix, such that A, 11, A*, where A* is an M x M
nonrandom     positive definite matrix. (This implies that A, is positive definite with
probability  approaching    one (w.p.a.1)) As a shorthand, denote the instruments      by
6, z G,(x,, TT). A generalized   method o/‘ moments (GMM) estimator        of 6’,, is the
solution 8, to


                                                                                     (7.10)



7.1.    Consistency

Consistency  of the GMM estimator does not follow from Theorem 4.3 because
the GMM estimator is not an M-estimator     as we have defined it here. Nevertheless,
consistency follows under the uniform weak law of large numbers and the identifi-
cation assumption   that 8, is the unique solution to


       lim T- ’ f: E[G,(x,, y*)‘r,(w,, @I E 0.                                       (7.11)
       T-X          t=1



Usually      in practice   one argues that E[G,(x,, y*)‘r,(w,, 0)] # 0 for 6’# N,.

Theorem       7.1 (Consistency    qf GMM)
Assume       that

GMM.1:      (i) 0 and r are compact sets;
           (ii) $. J+ y*;
          (iii) Ar % A*, a positive definite M x M matrix.
GMM.2:      (i) G, satisfies the standard measurability       and continuity conditions
                on Xr x r;
           (ii) Y, satisfies the standard measurability    and continuity conditions on
                wrx 0.
GMM.3:           {G,(y)‘r,(U)} satisfies the UWLLN      on 0 x I-.
GMM.4:      (i) For some O,E@, E[r,(w,, Q,)jx,] = 0, t = 1,2,. .;
           (ii) 8, is the unique solution to (7.11).
Then the GMM estimator gT exists and is weakly consistent for 8,.

  This result follows by verifying the conditions       of Newey and McFadden
(Theorem 2.1). It is similar in spirit to the strong consistency results of Hansen
(1982), Bates and White (1985), Gallant                   (1987), Gallant     and       White       (1988) and
Potscher and Prucha (1991a).


7.3.    Asymptotic       normality

To establish the asymptotic normality of the GMM estimator we apply Theorem
3.2 in Newey and McFadden;         here, only the main ingredients   are sketched. In
defining the score of the objective function, it is notationally convenient  to divide
the gradient of (7.10) by 2 and we do so in what follows. Straightforward     differen-
tiation with respect to Q gives the score as the P x 1 vector


                                                                                    9
                                                                                                           (7.12)


where V,r,(@) is the N x P gradient      of_r,(@. Assuming     that fI,Eint(O),                            weak
consistency of 8, implies that S,(t?,; $r, A,) = 0 w.p.a.1. Further,


       ,,/fs,(e,; &, (i,) = Tml            5 6:V,r,(e,)1 ‘&[ T-l/’
                                          1=1
                                                                             i
                                                                             t=1
                                                                                   tf$,(d,)
                                                                                                1
                                                                                                    .      (7.13)


Using a standard   mean value expansion,                    the assumption         E[r,(OJlx,]          = 0, and
Lemma A.l, it is easily shown that


       Tp “’ i
               1=1
                     @,(e,)= Tm‘I2 i      t=1
                                                G,(y*)'r,(~,)   + op( 1).                                  (7.14)


Define the M x 1 vector e,(@ y) E G,(y)‘r,(B), so that E[e,(8,; Y*)IxJ = 0. Under
moment     and weak dependence      assumptions,  T- ‘I2 C,‘= 1e,(flo; y*) satisfies the
central limit theorem, and so it is O,(l). Next define the M x P matrix


       R, = rlim T-l       i    E[G,(y*)‘V,r,(BJ].                                                         (7.15)
                          1=1



Then by the UWLLN               and Lemma         A.l,


                                                                                                           (7.16)


Because AT-A*            = o,(l)     it follows from (7.14) and (7.16) that


       fiS,(fI,;&/ir)=             R:JI*T-“~      ,i* e,(Q$Y*) + opU).                                     (7.17)
2696                                                                      J M. ~(~(~l~~i~~~~


Equation (7.17) has the important impIication that the limiting distribution          of
,J’?($, - y*) does not affect that of ,,fi(& - 8,); only (7.7) is needed.
   From (7.17) it is natural to define the score for observation t as

       s,@,) = R;A*e,@?,; r*) = ~~A*G~~~*~~~(~~).                                  (7.18)

(For simplicity we suppress ah parameters in the score except for S,.) It now
follows from Newey and McFadden (Theorem 34, that

       Jf($,.     - 0,) -%Normal(O, A;‘Z?,A;“),                                    (7.19)

where

       A, SER;/l*R,.                                                               (7.20)

The matrix B, can be expressed as




       D, z5 lim Var           T-Ii2 $j e,(B,; Y*f .                               (7.22)
                T-+SZ      [         t=1         1
We
 summarize this argument with a theorem.

Theorem 7.2             (As~~~t~t~c n~~~~~~t~of GMMJ
Assume that the conditions of Theorem 7.1 hold. In addition, assume that
GMM.5:      (i) fi(Y*T- ?+I=               q?m
           (ii) B,Eint(O), y*&nt(Z).
GMM.6:      (i) G, satisfies the standard measurability and first order differentiability
                conditions on S, x C
           (ii) r, satisfies the standard measurability and first order di~erentiabi~ity
                conditions on 7ly; x 0.
GMM.7:      (i) Ic;,(x,, Y)fVOrt(wt> 0)) and ([r,(w,, @)OZH]VyG,(xl, r,‘> satisfy the
                UWLLN on 0 x Z;
           (ii) rank (Z?,) = P.
GMM.8: (~~(8,):t = 1,2,...) satisfies the eentral limit theorem with positive
           definite asymptotic variance B, given by (7.21).
Then (7.19) holds.
   This result is similar to the asymptotic normality  results in Hansen (1982) and
Gallant (1987), except that we leave the UWLLN and CLT as high level assump-
tions. If necessary, the assumptions    on the ranks of the matrices A*, R,, and B,
can be somewhat relaxed; see Newey and McFadden          (Theorem 3.2).


7.4.    Estimating      the asymptotic     variance

A consistent     estimator     of A0 under      the conditions         of Theorem      7.2 is

       AT= &i,kT                                                                                      (7.23)

where


       &. = T’       i: G,~j,.)'V,r,(Q                                                                (7.24)
                     r=1

Given    a consistent      estimator     BT of D,, a consistent          estimator    of B, is

                                                                                                      (7.25)

From (7.22) it is seen that estimation      of D, generally entails a serial-correlation-
robust estimator unless e; = e,(e,; y*) is serially uncorrelated.    As usual, one simply
applies one of the serial-correlation-robust       covariance    matrix estimators     from
Section 4.5 to (6, E e,(&r; y*,)}. See also Hansen (1982), Gallant (1987), Newey and
West (1987), Gallant and White (1988), Andrews (1991) and Piitscher and Prucha
(1991 b). As a computational      matter, if M is much larger than P it is easier to
estimate B, directly by applying a serial-correlation      estimator to the P x 1 vector
process $ = I&&-d,.
   The form of the asymptotic        variance simplifies, and we obtain the efficient
estimate:  given the choice of instruments        G&y*),     by choosing the weighting
matrix AT appropriately.     In particular, let AT be a consistent estimator of 0; ‘,
so that A* = 0; ‘. Then from (7.21) and (7.22), A, = B, = RbD;‘R,,                  and so
Avar(t?=) = (Rb 0; ’ R,) ‘IT.

Lemma 7.1

Assume that GMM.l-GMM.8                    hold, and in addition
GMM.9:    A* = 0,‘.
Then

       Avar Jf(&r       - 0,) = (RiDo-’ RJ          l.                                                (7.26)

Choosing     /1, to be consistent         for 0;’        usually   requires   an initial   ,,@-consistent
estimator     of 8,. The resulting estimator     is often called the minimum &-square
estimator (Newey and McFadden call it the optimal minimum distance estimator).
See Hansen (1982), Bates and White (1993) and Newey and McFadden                  (Theorem
5.2) for proofs that it is the efficient estimator given the choice of instruments
under conditions       analogous to GMM.l-GMM.9.
    If (uJ0,)) is serially uncorrelated   in an appropriate  sense, then estimation of D,,
and therefore computation         of the minimum chi-square estimator, is simplified.

Lemma 7.2

Assume that GMM.l-GMM.9         hold, and in addition
GMM.10:    For t 3 1, E[rt(Uo)Y,+j(e,)IX,,X,+j] = O,j 3 1.
Then

     D0 = lim T-’       i     E[e,(Bo;y*)e,(80;y*)‘]                                 (7.27)
           T-r,         1=1


and (7.26) holds.

  Hansen (1982) showed           earlier how GMM.10 leads to the form (7.27) for Do.
Under GMM.l-GMM.lO,                a simple consistent estimator of Do is

                                                                                      (7.28)
                  1=1


which makes A%(H^,) = (&.b;’       RT)-l/T  especially straightforward    to obtain.
To obtain the minimum chi-square estimator under GMM.l-GMM.10,            one would
obtain /1, as the inverse of (7.28), but C, would be computed       using the initial
estimator.
   A sufficient condition for GMM.10 is

     ~Crf(~o)I~,,~,-l,~,_l,...,~l,~ll=O,                                              (7.29)

as would be the case under (7.2) when x, is a subset of (wt _ l,. . . , wl). Thus, GMM. 10
is satisfied for estimating the parameters of a dynamically         complete mean, for joint
estimation    of dynamically     complete means and variances,             for many rational
expectations applications,    and for dynamic simultaneous          equations models (SEM)
when the errors uI are martingale         difference sequences with respect to ot. Using
the usual iterated expectations      arguments,     {sl(fIO;y*)) is seen to be a martingale
difference sequence under (7.29) and so a martingale                CLT can be applied in
verifying GMM.8.
   Often the model (7.3))(7.4) is estimated under the assumptions GMM.l-GMM.10
and the conditional      homoskedasticity      assumption

     Jwp, Iq) = a,,                                                                   (7.30)
where 0, is an N x N positive             definite matrix. If we extend this assumption           to
the general case, new estimators           for the asymptotic  variance are available.

Lemma 7.3

Assume that GMM.l-GMM.10          hold, and in addition
GMM.11:    For a positive definite N x N matrix a,, E[r,(OO)v,(H,)‘jx,] = 0,.
Then


       D,,= lim T- ’         5 E[G,(x,, y*)'i2,G,(~,, ?*)I.
Lemma 7.3 follows because, under GMM.ll,                      E(epep’lx,) = G,(x,, y*))flOG,(x,, y*).
Now D, can be consistently estimated by


       fiT= T-’      f: &$!,ti,,,                                                              (7.31)
                     1=1



where fi, is a consistent estimator of 0,. In virtually all applications,         obtaining
R, requires an initial estimation    stage. If 0,t is an initial consistent estimator of
6, then d, = T-‘C~Clr,(Q,‘)r,(e,i)’      is g enerally consistent for .RO. In the simul-
taneous equations setting, 8, can first be estimated by nonlinear          two-stage least
squares (N2SLS). Let Z, = Z,(x,) be an N x M set of instruments.             Then N2SLS
estimation is obtained by setting r,(e) = u,(O), 6, = Z,, and d, = [T- ‘CT= 1Z:Z,] _ ’
in (7.10). Letting ,u(+ = ql(yt,xt, 0;) denote the N2SLS residuals, a consistent
estimator of 0, is R, = T-‘CTz 1u~+u~“. This can then be used to obtain the non-
linear three-stage least squares (N3SLS) estimator with 6t E Z, and AT = d,‘,
where bT is given by (7.31).


7.5.    Asymptotic         efjiciency

We have already seen that, given the choice of instruments         G,(x,, y*,), the optimal
GMM estimator is the minimum chi-square estimator. There is little reason not
to compute the minimum chi-square estimator in applications           since the weighting
matrix needed in its computation         is needed to estimate the asymptotic      variance
of any GMM estimator.
   A more difficult issue is the optimal choice of instruments.          Under (7.1), any
function of X, that satisfies regularity conditions can be used as instruments,       which
leaves a lot of possibilities.   Fortunately,    under assumptions   GMM.l-GMM.lO,
the optimal instruments      can be easily characterized.  For given “residual” function
r,(w,, Q), the optimal choice of instruments      under GMM.llGMM.10           is

       G;(x,) = a;(~,)- ‘Q;(q)>                                                                (7.32)
2700                                                                               .I. M.   WooldtYdge



where C$‘(x,) = Var[u,(B,)lx,]    and QP(x,) = E[VH~,(~,, U,,)lx,l. See, for example,
Hansen (1982) and Bates and White (1993). The proof in Bates and White (1993)
is easily modified to cover the current setup. The asymptotic variance of the optimal
GMM estimator under GMM.l-GMM.10                is


       A; l = R;’   = 0;’   =    lim TP1 i        E[Qy(x,)‘{fi:(x,)}    ‘Qp(x,)]      -l.       (7.33)
                                T-X         t=1



As an application, consider the class of M WNLS estimators studied in Section 6.1.
Under WNLS.l,          WNLS.2 and WNLS.3, (7.33) reduces to the variance of the
WNLS estimator because Q;(x,) = - Veml(xI,O,) (see Theorem 6.2). Thus, if we
start by assuming only WNLS.l and WNLS.2 then the optimal WNLS estimator
is obtained by choosing W,(x,, y,) = Var(y,Ix,).
    The optimal choice (7.32) also has implications            for estimating     simultaneous
equations models. Under GMM. 1-GMM 11, the efficient estimator uses instruments
0; ’ E[V,q,(B,) 1xr]. In models linear in the endogenous           variables, E[V,q,(UJ Ix,]
is in closed form and can be estimated; this leads to Sargan’s (1958) generalized
instrumental     variables estimator. For models linear in all variables this leads to
the 3SLS estimator.         In models nonlinear       in yt the conditional         expectation
E[V,q,(B,)Ix,]    is rarely of closed form and so an efficient GMM estimator cannot
be obtained using standard parametric analysis.
    Nevertheless, recent work has shown that, quite generally the conditional             expec-
tations Qy(x,) and 0:(x,) need not be of a known parametric                 form in order to
achieve the asymptotic variance of the efficient GMM estimator under GMM.l-
GMM.10. Under strict stationarity         (in particular,   when x, has fixed dimension)
and weak dependence, both of these quantities can typically be nonparametrically
estimated     at fast enough rates to obtain the asymptotically               efficient GMM
estimator; see Robinson (1991a), Newey (1990) and Rilstone (1991). Newey (1990)
suggests a series estimation approach. For example, in the simultaneous               equations
model under GMM. l-GMM.ll,            Qp(x,) can be estimated by regressing the elements
of V,q,(fI,f) on functions of x, that have good approximation            properties (here 0;
is a preliminary     estimator). As a practical matter the nonparametric           approach to
estimating QP(x,) and 0:(x,) has limitations,        especially when the dimension of x,
is large.
    When the dimensions of w, and x, are growing, little is known about the efficiency
bounds for the GMM estimator. Some work is available in the linear case; see
Hansen (1985) and Hansen et al. (1988).


7.6.    Testing

Given a consistent estimator     P, of Avar J?(H^,        - do), the Wald test of H,: ~(0,) = 0
is just as in (4.37).
   A quasi-likelihood   ratio statistic can be computed for testing hypotheses of the
form covered in Section 4.6 when minimum ch_i-square estimation is used. Suppose
there are Q restrictions     to be tested. Let eT denote the minimum        chi-square
estimator with the restrictions      imposed and let 4, be the unrestricted estimator.
(Typically, the initial estimator of A * = 0; ’ would come from an unconstrained
estimation    procedure   with a simple weighting      matrix.) Let Qr(0) denote the
objective function in (7.10). Then, under H,,




This limiting result holds under the conditions of Lemma 7.1, with the constraints
satisfying the conditions   of Lemma 4.3. It is established using a second order
Taylor’s expansion     and the fact that A, = B,. See Gallant    (1987, Chapter     7,
Theorem 15) for a careful proof.
   There is also a score test that can be applied to GMM estimation;    see Gallant
(1987, Chapter 7, Theorem 16).



Part III:     The globally nonstationary,     weakly dependent case

8.     General results

8.1.    Introduction

We now consider the asymptotic properties of estimators when the data are not
essentially stationary     but are still weakly dependent. This covers the well-known
case of series with deterministic      trends that exhibit essentially stationary behavior
around their means. Because such series generally satisfy the CLT when properly
standardized,    we expect estimators obtained from problems using globally non-
stationary, weakly dependent data to be asymptotically              normally distributed.       The
analysis in this part verifies this expectation.
   Some comments         on the limitations    of the following results. First, the CLTs
underlying the analysis do not allow for series with exponential              trends (polynomial
trends of any finite order are allowed). Thus, often a transformation              (such as taking
the natural log) is needed to put one’s problem into this framework.                       Second,
because the UWLLN approach cannot be used for general trending processes, we
prove consistency      and asymptotic      normality   at the same time. This means that,
for consistency results, we assume twice-continuous          differentiability     of the objective
function.
   Because general results for the globally nonstationary           case are not readily avail-
able in the literature, in Section 8.2 we give a general result that can be used in a
variety of contexts, including M-estimation          and GMM estimation.             This result is
a simplification   of a theorem in Wooldridge         (1986), which builds on the work of
Weiss (197 1, 1973), Crowder (1976) and Heijmans and Magnus (1986). In Section 9
we show how the general result can be applied to M-estimation.
   The bottom line of the subsequent       analysis is that, practically speaking, there
is no difference, in performing inference, between the globally nonstationary        and
the essentially   stationary  cases, provided     the stochastic   processes are weakly
dependent     and reasonable    regularity  conditions   hold. Recently, Andrews and
McDermott (1993) reached the same conclusion using a triangular array approach
to asymptotic analysis with deterministic      trends.



8.2.    Asymptotic    normality    of an abstract estimator

We begin with an objective function Q=(w,~) and assume that QT(w;) is twice
continuously    differentiable  on int(O) (in this section, we do not require 0 to be
compact). Rather than assume that a minimizer of Q=(w, 0) on 0 exists, we work
from the first order condition.     Define the P x 1 score, S,(e), as S,(8) = V,Q,(@
and the P x P Hessian HT(0) z ViQ,(@ _= V&-(B). We assume that the P x 1
parameter vector 8,, which we are trying to estimate, is in the interior of 0. (Inci-
dentally, in contrast to the essentially stationary     case, the score and Hessian do
not incorporate     a scaling based on the sample size. Below we explicitly introduce
a matrix scaling.) To sketch the issues that arise in the globally nonstationary
case, first assume that we have an estimator e, such that

       S,(e,)   = 0   w.p.a.1                                                               (8.1)

(below we prove that such an estimator exists). A mean value expansion                 about   0,
yields, with probability approaching  one,

       0 = S,(OJ + ii,@,        - do),                                                      (8.2)
where /i, is the Hessian with rows evaluated at mean values between t?, and.0,.
Assume for the moment that, for some nonstochastic,     P x P positive definite
diagonal matrix D,,

       D;1'2ST(Oo)%
                  Normal(O,BJ,                                                              (8.3)

where B, is a P x P positive       definite   nonstochastic   matrix.   Next, use (8.2) to write
(w.p.a.1)

       0 = D;1'2ST(@_,)+(D;"2iiTD;1'2)[D;!2(i&
                                       - Q,)].                                              (8.4)

Now. if

       D,;1'2[tiT
              - HT(Oo)]D,1'2
                          = o,(l),                                                          (8.5)
which is reasonable     since the mean values should          be converging       to 0,, then

     o;“& - e,) = - [D, 1’2H,(e,)D, 1’21~‘[D,                 “2s,(e,)]    + o,(l).               (8.6)

Under   weak dependence      we can generally      apply a law of large numbers             so that

     0; “*H&,)D,        “* 3 AO,                                                                  (8.7)

where A0 is a P x P nonrandom,         positive   definite    matrix.   If so,

     Dy”(e^, - 0,) = - A; ’ [D, ““S,(d,)]         + op( l),                                       (8.8)

and then asymptotic normality of Dy’(&, - 0,) follows in the usual way from the
asymptotic normality of the score.
    For nonlinear estimation with trending data, Condition (8.5) is typically the most
difficult to verify. One approach is to take (8.5) as a reasonable regularity condition,
as is essentially done in Crowder (1976) for MLE with dependent             observations.
Still, it is often useful to have more basic conditions     that imply this convergence
of the Hessian, particularly    since we have not yet shown that 8, is consistent for
0,. We use an extension of Weiss (197 1) suggested by Wooldridge (1986, Chapter 3,
Proposition      4.3), which implies (8.5) and at the same time guarantezs             that
Di”(@, - 0,) = O,( 1). We can then derive the asymptotic normality of Dy*(0, - 19,)
from (8.3) and (8.8).
   The idea is to impose a type of uniform convergence of the Hessian normalized
by something tending to infinity at a rate slower than D,. The key differences
between this approach and the type of uniform convergence used in the essentially
stationary case are that now(i) we allow each element of the Hessian to be standard-
ized by a different function of the sample size and (ii) the subset of the parameter
space over which the Hessian must converge uniformly shrinks to 0, as the sample
size tends to infinity.
   Formally, the condition we impose on the Hessian is

     max /IC; “‘[Zf,(d,)    - H,(B)]C;     l/* /I = o,(l),
      .‘“T

where (C,} is a sequence     of nonstochastic     positive    definite diagonal       matrices    such
that C,D; ’ = o(l), and

     Jv; = {tk@:      IIq2(e-e,)II    < l}.                                                      (8.10)

We have the following      theorem.

Theorem 8.1

Let {Qr: YV x 0 + R, T = 1,2,. .} be a sequence of objective functions                   defined on
the data space YV and the parameter space 0 c Rp. Assume that
2704                                                                              J.,M. Wooldridye



  (i) H,Eint(O);
 (ii) Q, satisfies the standard      measurability       and second order differentiability
      conditions      on W x 0, T = 1,2,. . .
    There are sequences of nonstochastic         positive definite diagonal P x P matrices
(C,:T=       I,2 ,... } and {D,:T=   1,2 ,... } such that
(iii) (a) C,D;‘+O          as T+ XI;
      (b) (8.9) holds with .,+‘t defined by (8.10);
(iv) (a) 0; 1’2H,(Bo)Df “’ %A,,           where A0 is a P x P nonrandom,               positive
          definite matrix;
      (b) 0; 1’2S,(0,) LNormal(0,        B,), where B, is a P x P nonrandom,           positive
          definite matrix.
Then there exists a sequence of estimators             (8,: T = 1,2,. . .} such that (8.1) and
(8.6) hold. Further, Di”(e^, - 0,) -% Normal(0, A; ’ BoAi ‘), and therefore

                                                                                           (8.11)

(For proof see Appendix.)

   Condition   (iv)(b) serves to identify 8, as the parameter     vector such that
E[S,(O,)] = 0; (iv)(a) then ensures that 0, is the unique value of 0 that solves the
asymptotic first order condition.
   Given (8.11), it is natural to define

       Avar(g,)       = 0; 1’2A61BoA~‘D,       li2,                                        (8.12)

which shrinks to zero as T+ co, as we would expect. Formula (8.12) reduces to
the expression for the asymptotic variance we derived in the essentially stationary
case when D, ‘I2 = T- ‘I21p, where ZP is the P x P identity matrix.
   As can be seen in (8.12), the norming matrix D, ~ and therefore the kinds of
trends in the underlying    data ~ clearly affects Avar(8,). It is natural to conclude
that the form of D, affects how one estimates the asymptotic variance of 6, and,
therefore, how one performs inference about B,._Fortunately,        this is not the case.
In practice, consistent estimators A^r of A, and B, of B, incorporate       the norming
D-T li2 in such a way that

       D,1’2A^,‘jtj       A^-‘D-1’2
                        TT            T
                                                                                           (8.13)

does not depend          on D,. For example,      under   the conditions   of Theorem   8.1,

       AT = 0; 1’2HT(@T)D, 1’2                                                             (8.14)

is a consistent estimator of A,. For illustration,  suppose that B, = A0 which, as
we saw in the essentially stationary case, occurs under classical assumptions. Then
                                                                                          2705



Avar(6,)   = 0;    “‘A;    ‘0;     ‘I2 and

      A%(&)       = D;1’2[D;1’2HT(&)D;1’2]-1D;1’2           = [H,(&)]-‘.                (8.15)

Equation (8.15) shows that we estimate the asymptotic variance of @, by the inverse
of the estimated Hessian, exuctly as would occur in the essentially stationary case
when B, = A,. The researcher need not even know at what rate each parameter
estimator is converging to its limiting normal distribution.
   A similar observation   holds even when B, # Ao, because consistent estimators
of B, typically have the form BT = 0; l12kTD; “‘, where A?, does not depend on
scaling by a function of the sample size. Then

      A%(H^,) = fi;       ’ A?#;     ’                                                  (8.16)

does not depend on a particular scaling. We see this explicitly in Section 9 on M-
estimation.
   One apparently restrictive feature of Theorem 8.1 is that A0 and B, are assumed
to be positive definite. There are several problems with multiple trending processes
for which this is not true. As a simple example, consider the linear model y, =
a,, + y,t + p,,zt + u,, where all quantities   are scalars, z, = a, + a, t + u,, a, # 0, and.
{(u,, II,)} is a strictly stationary and weakly dependent process with E(u,u,) = 0. Let
x, = (1, t, z,), and assume we estimate this model by OLS. Then HT(Q) = H, = X’X,
and it can be shown that the norming matrix that makes XX converge in prob-
ability is D, = diag{ T, T3, T3}. In particular,




which has rank two instead of three.
   Because of examples like this, we should discuss how Theorem 8.1 can handle
these cases. Usually it is possible to find a P x P nonsingular matrix M, and new
scaling matrix, say G, (that depends on M), such that

      G, “2(M’H,(0,)M)G,            1’2 -% A,M                                          (8.17)

and

      C, 1’2M’S,(0,)      A Normal(0,        BF),                                       (8.18)

where Af’ and By are positive definite. Then, by an argument            entirely   analogous
to the above (multiply (8.2) through by M’),
       cy   [M-     ye,- %J] = - [G, 1’2M’H,(%,)MG,                 l’*] - '[G, 1’2Ms,(%,)] + op( 1)
                                   = - {A~}-‘[G,“*M’S,(%,)]             + o,(l)                (8.19)

                                   ~N0rmal(O,(z4~}-‘B~{A~}~~).                                 (8.20)

Thus, inference can be carried out on 6, = Mm- ‘BO using Theorem 8.1.
   Fortunately,    in order to perform inference about %,, one need not actually find
a linear combination       of i?, - 0, that, when properly scaled, has a nondegenerate
limiting distribution    (that is, one need not actually find the matrix M). It is enough
to know that one exists, and this is virtually always the case in identified models.
To see why the choice of M plays no role in performing inference about %0,suppose
that interest lies in testing a linear hypothesis about BO:

        H,: R%, = r.                                                                           (8.21)

This is stated equivalently            in terms of 6, = M-‘BO as

        He: PS, = r,                                                                           (8.22)

where P = RM. Suppose for simplicity                  that A0 = B,, and A_: = Br, a case that arises
under-some   assumptions  covered earlier. Then, with 6, = M- ‘eT, A&$($,)                         =
Mp lH;l(M’-l     and the Wald statistic for testing (8.22) is

       W,=(P~T-r)f[PM-‘fi~‘(M’-‘P’~‘(P6^,-r)

            = (R8, - r)‘[Rfi;          ‘R’] -‘(Rf?,   - r),                                    (8.23)

which is the usual Wald statistic if we had started with gT and its estimated
asymptotic   variance fi; ‘. Although the reasoning is more complicated,       similar
arguments can be made for testing nonlinear hypotheses of the form H,: c(%,) = 0.
In general, t-statistics, Wald statistics, quasi-LR statistics and LM statistics can
be computed in the usual ways without worrying about the rate of convergence
of each estimator. Of course, the rates of convergence might be of interest for other
reasons, such as to facilitate efficiency comparisons.


9.     Asymptotic     normality of M-estimators

9.1.    Asymptotic         normality

We now show how Theorem                   8.1 can be applied     when the optimand     is


       QT(W0) = i           qt(w,,%I                                                            (9.1)
                     1=1
Ch. 45:    Estimation        and It@-ence,for        Dependent     Processes             2707



In applying Theorem 8.1 to M-estimation,      we need to be able to verify Conditions
(iii) and (iv)(b) of Theorem 8.1. First consider Assumption    (iv)(b), which requires
that the score evaluated at 19, satisfies the CLT:


                                      -% Normal(0,          B,),                         (9.2)


where s,(e) = VOql(wf, 0)’ and B, is positive definite. If (9.2) is to hold at all, D, is
usually easy to find. This is because 0; 112   must satisfy


                                                                                         (9.3)


in particular, the matrix on the left hand side of (9.3) must be bounded and at the
same time uniformly positive definite (this latter requirement          prevents us from
choosing D, too large). Once D, has been found, a CLT for trending processes
can be applied [see McLeish (1974) for martingale difference sequences, Wooldridge
and White (1989) and Davidson            (1992) for near epoch dependent       functions of
mixing processes]. In some cases a functional CLT ~ see Part IV - can be used to
establish (9.2).
   As in the essentially stationary case, {s,(0,): t = 1,2,. .} can be serially correlated,
although under the complete dynamic specification assumptions            of Sections 5 and
6 {s,(0,)} is a martingale      difference sequence with respect to Qt = {wi, . . . , wr}.
Thus, there are many examples for which {s,(0,)} is serially uncorrelated,          although
Var[s,(8J]     will not be bounded.
   After the CLT has been argued to hold, we need to establish the key condition
(8.9). Let htij(e) denote the (i,j)th element of h,(8). Especially if qt(.) is thrice conti-
nuously differentiable    on int(O), we can often establish the inequality

          maxI    h,ij(e)     -    h,ij(eJ   Id   bTtij   II8 - 8, II2,                  (9.4)
          BEND,

where bTtij is a positive random variable. Note that /I 8 - 8, II2 d (cTcl))- ‘I2 for all
&Jf;      where cr.(i) is the smallest element of C,; therefore, if we can control the
rate at which bTtij grows, (8.9) is easily shown. The proof of the following lemma
is straightforward.

Lemma 9.1

Assume        that for all i, j = 1,2,. . . , P,

 (i) inequality             (9.4) holds;
(ii)   Xi1b,.fij
             =OpiJG).
Then Condition                    (iii) of Theorem         8.1 holds for M-estimation.
2708                                                                                 J.M.   Wooldridyu


To see that the conditions of this lemma are reasonable, consider what they entail
in the strictly stationary case. Suppose that q(w,, 6) is thrice continuously differen-
tiable on int(O) with the third derivative dominated          by a function with finite
moment (see, for example, Condition (iii) in Theorem 4.1). Then we can take bTtij =
btij to be a bound on the absolute value of the third derivatives of q,(B) on int(O).
Because {b,,,} is stationary   and ergodic with finite moment,




by the WLLN. Because D, = TIP we can take C, = T”Zp for any a < 1 and have
(iii)(a) of Theorem 8.1 satisfied. For condition (ii) of Lemma 9.1 to hold we require
C,‘= 1btij = o(T{~“)“); by (9.5) this holds for any a > 5.
    Of course Lemma 9.1 is useful only if it can be applied to nonlinear        models
with trending data. This is the case, at least for some applications, but finding bTtij
and verifying (ii) can be tedious. For illustrative purposes, we given a simple non-
linear least squares example.
    Consider the model

       y, = CI,+ f(z,, Y,) + BJ + %                                                              (9.6)

where {(z,, uJ: t = 1,2,. . .) is a strictly   stationary,   weakly dependent       sequence    such
that

       E(u,Iz,) = 0.                                                                             (9.7)

Here, ~1,and /3, are scalars and y, is a J x 1 vector. We assume that f(z,, .) is thrice
continuously   differentiable   on the open set I’, with y,Eint(r).    Note that if 8, # 0
then {y,} contains a linear time trend (extending this example to the case where
y, has a polynomial      time trend of any finite order is straightforward).   Define the
regression function

       m,(x,, 0) E @+ Ski,, Y) + Pt.                                                             (9.8)

The score for observation        t for nonlinear     least squares   estimation     is

       s,(@= - V,m,(@‘u,(~),                                                                     (9.9)

where, for model (9.8), V,m,(@ = (1, V,f(w,, y), t). Letting          s, = $‘(eJ,    It is straight-
forward to show that
Ch. 45: Estimation   and Inference   forDependent Processes                                2709


where D, E diag{ T, TI,, T3}. (It helps to remember         that c,‘=,t = O(T’) and
CT= 1t2 = 0( T3), and to first assume that {ut} is serially uncorrelated.) As we now
show, it suffices to set C, E diag{ T”‘, Ta’ZJ, Ta2} for some a, < 1 and a2 < 3.
   For nonlinear least squares estimation, there are always two pieces of the Hessian
that need to be analyzed for convergence.       The first is V,m,(O)‘V,m,(~) and the
second is V~m,(@u,(O), where V,‘m,(O) is the P x P second derivative of m,(d).  What
must be shown is that



      EygK:A,il I                Vd%(WfP,j(e)         -   VtP,i(~,)VfP$j(Q,)   I = O,(l)


and




for all i,j= l,..., P. By looking at the form of m,(O)and recalling the discussion
 of the stationary        case, the only terms that present a new challenge are the cross
products V,f,,(y)t, i = 1,. . , J, and the term V~ftih(~)ut(0), i, h = 1,. . . , J. Let us look
at the cross product term V,f&)t.                Because this is differentiable,  and because
cTcl) = T”‘, to verify the conditions of Lemma 9.1 it suffices to show that C,‘= I gtit =
op( T”’ +02/‘), where gti 1s a b ound on the partial derivatives of VJJy) for all YET.
But {gti} is a stationary          sequence with finite moment, so it suffices to show that
CT= 1 [gti - E(g,,)]t = op( T”’ +a2/2) and C,‘= 1t = op( T”’ +a2’2). By the WLLN [see
Andrews (1988)], XT= 1[g,i - E(g,i)]t = 0p(T3’*), and CT= 1t = O(T*). Thus, we
must choose (a, + 42) > 2; but under the restrictions a, < 1 and a2 < 3, (a, + u,/2)
can be made arbitrarily           close to 4.
    The sum containing          the terms V:f,ij(y)u,(0) can be handled in a similar manner
by writing u,(O) = u, + [f(z,, y,) - f(z,, y)] + (B, - fl)t and using the fact that the
third derivative of j&y)            is bounded. Thus, we can conclude the NLS estimator
of (c(,, y,, /?,,) is consistent and asymptotically     normal under fairly weak assumptions.
Note that we have allowed for dynamic misspecification                and conditional   hetero-
skedasticity in {u,}.
   Another example is the nonlinear              trend model y, = cr,t@”+ u,, where E(uf) is
uniformly bounded, E(u,) = 0, and {Us} is an essentially stationary process. It turns
out that we must assume that j?, > - $; otherwise, there is not enough information
in the sample to consistently           estimate the parameters. The apparent simplicity of
this two parameter model for E(y,) is misleading. To carefully verify Condition (iii)
of Theorem 8.1 for the NLS estimator is very tedious. We will not go through the
details here, but Lemma 9.1 can be used. Wooldridge (1986, Chapter 3, Corollary
6.3) gives the details.
2710                                                                           J.M.   Wooldridqr


9.2.    Estimating   the asymptotic   variance

Estimation     of A, and t#O follows in-much     the same way as in the essentially
stationary case. Define H, E CT= 1h,(d,). Then, under the conditions            of Theorem
8.1, D;1’21?TD;1’2      +A,.
                         ’     The estimator based on a&8,)            (Section 4.5) is also
generally consistent when it is available.
    If the score is serially uncorrelated,  and {st(0)s,(O)‘) satisfies Condition     (iii) in
Theorem     8.1 (in addition   to {/I,(@)), then 0;   ‘/‘kTD;   1/2 -% B,, where

                                                                                          (9.10)


As mentioned      earlier, the absence of serial correlation    in the score follows in the
same circumstances        as in the essentially stationary case. The asymptotic variance
of t?, is estimated as


                                                                                          (9.11)


and this is one of the matrices used for obtaining asymptotic standard errors and
for forming Wald statistics derived for the essentially stationary case with serially un-
correlated score. Equation (9.11) again shows that, for practical purposes, the scaling
matrix D, has disappeared           from the analysis. The absence of a scaling matrix in
A%(&)        is entirely consistent with observed econometric practice; one rarely sees
consideration      of scaling matrices appearing in applied work, and this is justifiably so.
   To complete the analysis of the globally nonstationary             case, we should have
methods of estimating         B, when {s,(O,)} IS serially correlated. Conceptually,       this
causes no problems. The Hansen-Hodrick                 estimator and its weighted versions
can be shown to be generally consistent for B, when the autocovariances                 of the
score are known to be zero after a certain point. We conjecture that the general
serial-correlation-robust       estimators   of the score covered in Section 4.5, when
properly      standardized,    remain consistent      under reasonably     weak conditions.
Unfortunately,       we know of no formal results along these lines. This is an important
topic for future research.



Part IV.      The nonergodic case


10.     General results

10.1.     Introduction

In this final part we turn to inference in models with nonergodic processes. Actually,
the primary distinctions   between this part and the previous ones are that the score,
Ch. 45: Estimation   und Infirencefhr   Dependent   Procrss~s                                  2711



when properly standardized,       is not weakly dependent (so it does not have a limiting
normal distribution),       and the Hessian, when properly standardized,              does not
necessarily converge in probability       to a nonstochastic    matrix. Instead, the stand-
ardized Hessian and score converge jointly in distribution,           typically to a function
of multivariate      Brownian    motion. The functional       CLT (FCLT) or invariance
principle plays a prominent       role for determining    the limiting distributions.
   Because of the nonstandard       limit behavior of the score and Hessian, the properly
standardized     estimator and related test statistics do not necessarily have the usual
normal and chi-square limiting distributions.          The limiting random variable can
depend on unknown parameters, which makes asymptotic theory difficult to apply
in practice.
   Recently there has been much work on estimation              of linear models with non-
ergodic processes. A short list of references includes Phillips (1987, 1988, 1991),
Stock (1987), Phillips and Durlauf (1986), Park and Phillips (1988, 1989), Phillips
and Hansen (1990) and Sims et al. (1990). Fortunately,            some of this research has
focused on finding statistics with either standard limiting distributions          or at least
limiting distributions    that are free of nuisance parameters, and which can therefore
be used for inference. Some of these results are given in Section 11; Watson (this
Handbook)      gives a more extensive treatment.
   In Section 10.2 we state a general theorem for nonlinear models that is a straight-
forward extension of Theorem 8.1. Section 11 covers some applications                  to linear
models. Section 12 sketches how the general theorem can be applied to a particular
nonlinear    regression model.
   All of our examples are for processes that are integrated              of order one. It is
possible to apply them to explosive processes as in Domowitz and Muus (1988)
and Jeganathan       (1988). An interesting    open question is whether these results, or
whether the results in Part II, can be applied to estimation with strongly dependent
data.


10.2.    Abstract     limiting distribution     result

We first analyze a setup very similar to that in Section 8.2. The score s,(O) and
Hessian Hr.(O) of the objective function QT(0) are defined there.

Theorem     10.1

Let Assumptions      (i)-(iii) of Theorem 8.1 hold. Replace Assumption     (iv) with
(iv) (D; “2HT(0,)O;        li2, 0; 1’2S,(0,)) -%(,d,, Yp,), where &, is positive definite
     with probability      one.

Then there exists a sequence             of estimators      {&+ T = 1,2,.   .} such that (8.1) and
(8.6) hold. Further,

        D;"(B,- 0,)%c4,'.4Po.                                                                (10.1)
The proof of Theorem 10.1 is identical to that of Theorem 8.1 up to establishing
the first order representation       (8.6). Then, (10.1) follows by the continuous          conver-
gence theorem and Assumption             (iv).
   For linear models Condition          (iii) (see Theorem 8.1) is trivially satisfied because
the Hessian does not depend on 8, so the difficulty lies in establishing                    (iv). Of
course, one hardly needs a result like Theorem 10.1 to analyze linear models since
the estimators are given in closed form. In Section 11 we show how the functional
CLT can be used to establish (iv) and the distribution                of &‘;‘YO for a class of
linear models. As stated in the introduction,             at this point we have no guarantee
that the distribution      of &‘Sy‘Y. can be used for inference, as it may depend in an
intractable    way on nuisance parameters.
   In addition to having to establish (iv), for nonlinear              models we also have to
verify (iii). As we saw in Sections 8 and 9, this is nontrivial for models with trending
but weakly dependent data. It is even more difficult when we allow for nonergodic
processes. For future applications            of Theorem 10.1, more research is needed to
see how (iii) can be verified. In Section 12 we show how the FCLT can be used
to verify (iii) for a particular nonlinear         model.
   Theorem 10.1 assumes that d4, is positive definite with probability                 one. As with
Theorem 8.1, one might have to employ linear transformations                 to (t? - 0,) to ensure
that this holds in particular        applications.    But, unlike the trend-stationary         case,
different linear combinations          may have fundamentally          different limiting distri-
butions, and so some care is required for inference about the parameters                          of
inference. More on this in Section 11 and in Watson (this Handbook).
   The notion of locally asymptotically mixed normal (LAMN) families [for example,
LeCam (1986) Jeganathan           (1980, 1988) and Phillips (1989)] has played an impor-
tant role in studying efficiency issues in nonergodic               models. It turns out to be
closely related to the possibility of finding asymptotically           chi-square test statistics.
The LAMN condition was originally applied to log-likelihood                     functions, but, as
shown in Phillips (1989) it can be applied to more general criterion functions. We
do not consider the LAMN condition or its extensions [Phillips (1989, 1991)] here,
as it involves a substantial      technical burden, and for the purposes of establishing
limiting distributions      the full LAMN machinery is not needed. Nevertheless, it is
informative     to see what LAMN entails in Theorem 10.1.
   For purposes        of inference, the important           consequence     of LAMN is that
Assumption       (iv) of Theorem 10.1 is satisfied with




where 3V0- Normal(O,I,)     and is independent  of &O. Thus, the LAMN condition
restricts how the random quantities Cd0 and <YOcan be related to each other. We
can easily illustrate why this condition is important for inference purposes. Even
though Ds”(t?, - 0,) does not have a limiting normal distribution      under (10.2)
and the conditions             of Theorem       10.1, under   LAMN   it follows immediately      that

      [D; “2H,(N,)O;             “‘]“‘[o$“(e,         - Q,)] % .c4; ‘j2Y0 - Normal(0,     Ip).    (10.3)


Thus, when normed by a random matrix, Oi”(&,                      - 0,) has a limiting   multivariate
standard normal distribution. From (10.3),


                      - 0,) Lx;,
      (8,.- O”)‘fqqJ(O^,                                                                          (10.4)


and so a quadratic form in the estimator has a standard limiting distribution.
Generally, when the LAMN condition holds, there exist quadratic forms that have
limiting chi-square distributions that can be used for inference about do.



11.   Some results for linear models

We begin with the linear model

      Y, = % + xtBo+ u,>                t= 1,2,...,                                               (11.1)

where U, in an T(O),zero-mean            process, and the 1 x K vector x, is an I(1) process:

      x, = x f-l     +   “t,                                                                      (11.2)

where {u,} is an I(O), zero-mean process, and there are no cointegrating    relationships
among the X, (x0 is an arbitrary random vector). These assumptions             imply that
y, and x, are cointegrated [see Engle and Granger (1987), Watson (this Handbook)]
and, given the normalization      that the coefficient on y, is unity, there is only one
cointegrating   vector. (Technically,   we allow for /I, = 0, in which case y, is I(O).)
Due to the work of Stock (1987), Phillips and Durlauf (1986), Phillips (1988), Park
and Phillips (1988) and others, it is now known that the limiting distribution       of the
OLS estimator of fi, is nonnormal.     To derive the limiting distribution   requires the
notion of a functional CLT.


Dejinition   11 .I

Let (w,: t = 1,2,. . .} be an M x 1 strictly stationary, weakly dependent process such
that
  (i) E($w,) < ~0,
 (ii) E( WJ = 0,
(iii) 0 = lifnn,,m Var(T _ 1’2CT= 1wt) exists.
Then {w,} is said to satisfy the functional central limit theorem (FCLT) (or invariance
2714


principle) if the stochastic          process     {B,: T = 1,2,. . .}, defined   by

                         [Trl
       B,(r)   = T-1’2   2      w,,      O<r<l,
                         r=1



converges      in distribution to g&Z(O), an M-dimensional    Brownian                motion    with
covariance      matrix 0. Here, [Tr] denotes the integer part of Tr.

The notion of the process B, converging          in distribution     to g&‘(Q) is defined in
terms of weak convergence of their probability        distributions.     Weak convergence is
the extension      to general metric spaces of the usual notion of convergence                 in
distribution    over finite dimensional    Euclidean spaces. The reader is referred to
Billingsley (1968, Chapters l-5) for definitions and background               material.
    The use of the FCLT to obtain limiting distribution           results for estimators was
pioneered by Phillips (1986, 1987) for a univariate autoregression            with a unit root.
The multivariate      FCLT was first used in econometric        applications   by Phillips and
Durlauf (1986). The FCLT is known to hold under conditions                   analogous    to the
CLT; see, for example, Billingsley (1968), McLeish (1977), Herndorff (1984) Phillips
and Durlauf (1986) and Wooldridge and White (1988). Although we have assumed
strict stationarity    of (wt} for simplicity, this is not necessary; certain forms of
bounded heterogeneity are allowed, as in the references. In what follows, we simply
assume that the FCLT holds.
    The following lemma is very useful for analyzing least squares estimators with
I(1) processes. Parts (i)-(iv) were proven by Park and Phillips (1988).

Lemma 11.1

Let {wt = (u:, II:)‘} be an M x 1 strictly stationary, weakly dependent stochastic
process with finite second moments and zero mean. Here, u, is M, x 1 and u, is
M, x 1. Define


                                                                                               (11.3)


and


                                                                                               (11.4)




       z, *= E(qu:),            A,, = f          ~(u,u:_,),                                    (11.5)
                                         .s= 1
and

        d,,   = z,,           + A2r.                                                                                  (11.6)

Assume that a,, and fizz are positive definite. Define X, as in (11.2) (note that X,
is a column vector for the purposes of stating the lemma). Let B denote a Brownian
motion with covariance     matrix 0, and partition B as B = (B;, B;)‘. Thus, B, -
&JA(B, r) and B, - %?&‘(0,,), and these processes are independent       if and only if
R,, = 0. Then, under additional    regularity conditions, the following hold jointly
as well as separately:

                                       1

 (i) Tp3’2 i             x,     A             M-)        dr,
                  r=1               s0
                                           1

(ii) T-5’2          i     tx,   A              rB,(r)          dr,
                  t=1               s0
               T                          1

(iii) Tp2 1 x1x:%                              B2(r)B2(r)’ dr,
              t=1                   s 0



(iv) T-3’2          5     tu, +d           ‘rdB,(r),
                  I=1               s 0



(v)     T-’   i         V, ’ - d          ’ B,(r)dB,(r)‘+d,,.
              t=1                   s 0



   As shown in Park and Phillips (1988), parts (i))(iv) are an immediate consequence
of the convergence in distribution of B, to a&(n)      and the continuous convergence
theorem [Billingsley (1968, Theorem 5.1)]. For example, part (i) follows because
X, = T112BT2(t/T), and so


        T-3’2t$l          x, = T-’             fl       BT2(t/T)     = [‘B,,(r)dr      %s’B,(r)dr,
                                                                         0                    0



where the second equality follows because BT2(.) is stepwise continuous      and the
final convergence result follows because j,!,B,(r)dr is a continuous function of B.
For part (ii), tx, = Tli2tBT,(t/T); then


        Tm5j2 ,zl tx, = Tp ’ f. (fIT)B,,(t/T)                                = I1 rB,,(r)dr       L   j1 rB,(r) dr.
                                                r=1                              0                     0



Parts  (iii) and (iv) are handled similarly, where part (iv) uses the fact that U, =
T”2[BT,(t/T)     - BTl((t - 1)/T)]. Part (v) is more difficult to verify, and does not
follow simply from the convergence of B, to aM(0).         The same kind of proof for
parts (i))(iv) initially appears to work, but the final convergence          in distribution
does not follow from the continuous          convergence theorem because the right hand
side in part (v) is not a continuous          function of tiA(fl).  Nevertheless,     Hansen
(1992b) shows that (v) holds under fairly general conditions.
   For analyzing the model (11.1) with x, 1 x K we simply replace u, with II:, x,
with xi, B with B’, and so on.
   The assumption       that On22 is positive definite implies that the elements of x, are
not cointegrated,     a restriction that should be borne in mind in what follows. With
this lemma in hand, we can establish much of the needed asymptotic distribution
theory for linear regressions with I(1) processes. Conclusions      (ii) and (iv) are needed
to allow for trend-stationary       processes and I(1) processes with drift.
   To analyze (1 l.l), we only need the conclusions of this lemma when U, is a scalar.
Thus, in Lemma 11.1, Z,,, AZ1, and A,, are K x 1 vectors, and the long run
variance of {ut} is


     a,,    = E(r+,)   + :             {E(U:_ju,) + E(u;u,_j,},                               (11.7)
                             j=l



the long run covariance                between      {II,} and (u,} is


     J-221
        = Wu,) + j=: 1 {-wJ_ju,)+ E(u;+ju,)},                                                 (11.8)


and the long run variance                 of {Us} is


     or1 = E(uf) + 2 g                 E(u,u,_j).                                             (11.9)
                             j=    1



Define the 1 x (K + 1) stochastic process Br(r) = (BT1(r), BT2(r)) and the limit B z
(B,, B,) as the transpose of that in Lemma 11.1.
   Let &fir   denote the OLS estimators from the regression

     y,     on Lxt,                t= l,...,T.                                               (11.10)

To obtain    the limiting          distribution          of j?,, write



                 I
     &.=/Jo+ ,il(x,-X)‘(x,-f)
                                                     1-lElT      (x,- vu*                    (11.11)


or


                       T-'         i
                                   1=1
                                         (x,-X)‘(x,-f)
                                                                1 -lT-’   i
                                                                          1=1
                                                                                (x,--)‘u,,   (11.12)
assuming that [T- ‘C,‘= 1(_rt- X)‘(x, - X)] - ’ exists w.p.a.1. Using Lemma 11.1,
Park and Phillips (1988) have derived the limiting distribution    of T(fl, - fi,),


      m, - B,) A              [S    0
                                        1
                                            B,(r)‘B,(r) dr   1 [S
                                                              -1

                                                                      0
                                                                          1
                                                                              B,(r)‘dB,(r)+ A,, 1 ,   (11.13)


where B2 denotes              the demeaned             process     B,: for each 0 ,< r d 1,
                                   1

     B2(r) = B2(r) -                    B2(s) ds.                                                     (11.14)
                               s0

Incidentally,  because a,, is positive definite, JAfi,(r)‘fi,(r)dr is nonsingular  with
probability   one, so that the distribution     of the right hand side of (11.13) is
well-defined and fir exists w.p.a.1.
   Generally,  the distribution in (11.13) depends, in an intractable       way, on the
nuisance parameters f12i and d,, . But, there is one case where it can be applied
immediately, and that is when the regressors are strictly exogenous in the sense that

     E(Ax;u,) = 0,                  all t and s.                                                      (11.15)

Assumption   (11.15) implies that d, i = a,, = 0, so that B, and B, are independent
Brownian motions. Letting W~_E wi 1, Park and Phillips (1988) argue that, when
a,, = 0, the distribution   of JhB,(r)‘dB,(r), conditional on B,, is normal:



     s   0
             1

                 ~2W’dBlWl.,                                         B2(r)‘B,(r) dr .                 (11.16)


A useful heuristic device (for which I am grateful to Bruce Hansen) helps us to
see where (11.16) comes from. Take the definition of a stochastic integral to be



     s   0
             1

                 82W’dBl(r)= plim 5 B,(t/T)‘[B,(t/T)
                                       T+mr=l
                                                                               - B,((t - 1)/T)]


                               =    plim f: B2(r)‘FTt,
                                    T-m?=1



where the srt are i.i.d. Normal(O,o,” T-l) by definition of a Brownian motion,                           and
are independent   of the process B2(.). Therefore, conditional  on B,(.),


     ,tl         &@y’Tt   -   Normal              O,oiT-’     f: B,(t/T)‘B,(t/T)            .
                                              (              t=1                        >


Taking           the limit of both sides yields (11.16).
2718


  Given       (11.16), we have

              1                      -l/Z             1



       (S 0
                  B2(r)'B2(r) dr
                                   1 (1           0
                                                          ~,(r)‘dB,(r) - Normal(0,      w:Z,).          (11.17)


But (%‘x/T’)-           ‘I2 % [ihB,(r)‘&(r)dr]-                  ‘I’, so that

       (X’X/T2)-1/2T(b             - p,) %Normal(O,               wi1,),                                (11.18)

where x denotes the T x K matrix with tth row x, - 5 In practice,                                   this means
that 6, can be treated as being asymptotically normal. Loosely,

                                            --
       BT2 Normal(fi,,o~(X’X)-‘).                                                                       (11.19)

Except for the presence of w,’ in place of 0: c E(u:), (11.19) is identical to the
usual approximation         for the slope coefficients in regressions            with essentially
stationary,   weakly dependent         processes and appropriately         homoskedastic       and
serially uncorrelated     errors. Note that this is a problem for which the LAMN
condition mentioned       in Section 10.2 is satisfied.
    Asymptotically    valid t-statistics and Wald or F-statistics          can be obtained by
replacing the usual estimate of a,2,8,2 (the square of the standard error of the
regression) with a consistent estimator of 0,.2 A consistent estimator &),’is obtained
by applying the estimators in Section 4.5 to the OLS residuals {Li,} (for example,
(4.30)). Asymptotically       valid t-statistics    are obtained    by multiplying      the usual
t-statistics by the ratio BJQ,; asymptotically         valid Wald or F-statistics are obtained
by multiplying     the usual Wald or F-statistic by the ratio 8:/d:.
    Other than the strict exogeneity           case, there is at least one other practical
application    of (11.13) which is testing for a unit root, as in Dickey and Fuller
(1979) and Phillips (1987). Although the t-statistic does not have a limiting standard
normal distribution,     its limiting distribution      is either free of nuisance parameters
(as in the Dickey-Fuller       setup) or a simple transformation        of it is free of nuisance
parameters (as in Phillips); see Stock (this Handbook).
   We now extend the model by allowing for I(0) regressors in addition to the I(1)
regressors x,. Let zf be a 1 x J vector I(0) process (these can be any I(0) variables,
including leads and lags of Ax, and lags of Ay, if y, is I(1)). The model is

       Y, = CT,+ xtBo+ zryo+ e,,                                                                        (11.20)

where e, is an I(0) zero-mean                    process,      and we assume     that

       E(z:e,) = 0;                                                                                     (11.21)

this condition          allows us to identify                the vector y, on the I(0) variables.    From   the
 Ch. 45:    Estimation       and Inference     for Dependent     Processes               2719


results for model (11. l), we know that 8, can be consistently estimated by ignoring
the I(0) process Z, and obtaining /?, from the regression (11.10). This is easily seen
by writing (11.20) as

       Y, = ?, + XrBo
                    + u,,                                                            (11.22)

where u, = e, + zty, - E(z,y,) and q0 = ~1,+ E(z,~,). Then u, is I(0) with zero mean,
and so the limiting distribution     of T(B, - p,) is given in Equation (11.13). As is
now fairly well known [for example, Phillips and Durlauf (1986), Park and Phillips
(1988)], omitting I(0) regressors does not affect our ability to consistently  estimate
fl, when x, is I(1) and has no cointegrating    relationships among its elements.
    For a variety of reasons we need to know what happens when Z, is included in
the regression. Let di,, bT, and $jTdenote the OLS estimators from the regression

       Y,     on          Lx,, z,,            t=l,...,T.                             (11.23)

The following.!emma    is useful for finding the asymptotic distribution of properly
standardized   B, and jjT. Its proof uses Lemma 11.1 and is given in Wooldridge
(1991c, Lemma 5.1).

Lemma 11.2

Let {n,}, {z,}, and (e,} satisfy (11.2) and (11.21). Let {X,: t = l,..., T} denote       the
demeaned x, and let {t,: t = 1,. . . , T} denote the demeaned z,. Let f, denote          the
1 x K residuals from the regression

      -% on               l,bt,        t= l,...,T                                    (11.24)

and let ?( denote                 the 1 x J residuals          from the regression

      z, on l,q,                       t= l,...,T.                                   (11.25)

Then the following                  asymptotic        equivalences       hold:


 (i) T-’       i         .i$f, = T-2     f: _i$ft + o,(l);
              1=1                        t=1



(ii) T-l       f: if:e, = T-’            f: i:e, + o,(l);
              1=1                       1=1



(iii) T-’      f: i’;it, = T - ’ f: i;z, + o,(l);
              t=1                       t=1



(iv) T-1’2 i              Z:e, = T-“2 ,tl i:e, + op( 1).
                   t=1
   Note that the .i!t are the residuals from the regression x, on 1. Thus, Lemma 11.2
says that, for certain purposes, these can replace the residuals from the regression
x, on 1, z,. A similar statement holds for Z, and i;.
   Combined      with standard    results from least squares mechanics,     Lemma 11.2
yields straightforward     asymptotic representations    for fl, and jT. Write


                                                                                     (11.26)


Now, by Lemma        11.2,




The first term on the right hand side of (11.27) is exactly of the form in (11.12)
except that e, replaces u,. Thus, its limiting distribution   can be obtained directly
from Lemma 11.1. Let w,‘~w:~,Z;r,          and d”,, be defined as in (11.5), (11.6) and
(11.9) with e, replacing u,. Then, from Lemma 11.1,



     W-BP+                   l?,(r)‘B,(r)   dr         &(r)' dB’, (r) + A’, 1 ,       (11.28)



where Bf is a SJJz’(oi) process. This is as in (11.13), except that it is the covariogram
of {(~,,e,): t = 1,2,. . .} which shows up in the asymptotic              distribution. Thus,
including     I(0) regressors when estimating      j?, changes the implicit errors in the
relationship.     The form of the limiting distribution     is unaltered, but the asymptotic
distributions     of T(fi - b,) and T(fl- p,) are not the same.
   From (11.27) and the earlier discussion           it follows that if the x, are strictly
exogenous in (11.20) that is

     E(Ax:e,) = 0,     all t and S,                                                   (11.29)

then we can treat a, as approximately            normal.   As before,


     a, z Normal(/?,,o,2(_$?aii-1),                                                   (11.30)

where 2 is the T x K matrix with tth row given by the 1 x K vector residual P,.
The important difference between J.ll.30) and (11.19) is that of replaces wi. Using
Lemma 11.2(i) we could replace X with x, but this would be unnatural                since PT
is obtained from (11.23). Note that the validity of (11.30) as a heuristic does not
require strict exogeneity of the I(0) variables, z,; only (11.2 1) and (11.29) are assumed.
   Under strict exogeneity the simple adjustments       to t- and F-statistics discussed
for model (11.1) apply here as well, except that 0% is estimated using the residuals
&, from regression (11.23).
   Next, consider the coefficient estimates on the I(0) variables. As shown by Phillips
(1988) Park and Phillips (1989) Sims et al. (1990) and others, the asymptotics         for
jjT are standard (regardless of whether or not there is any kind of strict exogeneity).
This result has been derived under a variety of assumptions and in a number of ways.
Given Lemma 11.2, it is most easily established by writing jjT in partial regression
form. By Lemma 11.2 and standard results such as T - l”Cf’ 1iie, = Op( 1) (by the
CLT), we have


                                                                                   (11.31)


Thus, the I( 1) regressors have disappeared entirely from the first order asymptotic
representation   for yT. Under standard assumptions  for strictly stationary processes,
the right hand side of (11.31) is asymptotically    normally distributed.    However,
unless

      (e,} and (zie,} are serially   uncorrelated                                  (11.32)

and

                                                                                   (11.33)

the usual OLS covariance         matrix estimator and test statistics will generally be
invalid. This is as in regression with essentially stationary     data. Given the OLS
residuals (6,: t = 1,2,. . .} from the regression (11.23), standard serial-correlation-
robust covariance matrix estimators can applied to {Q,}, say &. The asymptotic
variance   of fi(jj,   - y,) is estimated   as


      (.?‘.@T)-‘&if’~/T)-l.                                                        (11.34)

   If (11.32) and (11.33) both hold, as in Sims et al. (1990), then the usual OLS
variance matrix estimator for j’r is valid. Therefore, standard t- and F-statistics
for testing hypotheses about y, are valid under no serial correlation     and homo-
skedasticity assumptions.      Note that these have nothing to do with the I(l), non-
cointegrated    regressors x,.
   This limiting distribution   theory can be applied to the augmented Dickey-Fuller
regression under the null of a unit root. The model is
Wooldridge    (1991c)l. Also important    is that the leads and lags estimator of Boj
(with or without z, included in the leads and lags regression) is generally an
inconsistent  estimator of poj under (11.35). If x,~ is not cointegrated  with x,(~) then
the leads and lags estimator of /Ioj produces asymptotically       normal t-statistics for
poj, just as before.
   The discussion in the preceding paragraph shows that the cointegrating           proper-
ties of X, need to be known before currently available methods can be used for
inference about fl,. For further discussion and examples, see Phillips (1988), Park
and Phillips (1989), Sims et al. (1990), Wooldridge         (1991~) and Watson (this
Handbook).
   The preceding results have extensions      to I(1) processes with drift, integrated
processes of higher order, and multivariate     regression and instrumental      variables
techniques. See Phillips (1988) Park and Phillips (1988, 1989), Sims et al. (1990)
and Phillips and Hansen (1990).


12.   Applications    to nonlinear   models

In this section we sketch how Theorem          10.1 can be applied     to a nonlinear    model.
We wish to estimate the model

      Y, = a, + “I%,,Y,)+   x,/j,+ u,,                                                     (12.1)

      E(u,Iz,)=O                                                                          (12.2)

by nonlinear        least squares, where {(z,, u,): t = 1,2,. . .} is strictly stationary     and
{.qt=     1,2,...}isal     x K I( 1) process without drift, as in (11.2), with no cointegrating
relationships      among the elements of x,. y, is an M x 1 vector. We assume that the
gradient of f(z,,~), V,f(z,, y,), contains no constant            elements, so that both its
variance and long run variance are positive definite.
   Letting m,(Q) = tl + f(z,, y) + X,/I, we have V,m,(H) = [ 1, VJ,(r), x,]. The score of
the NLS objective function for observation           t is

      s,(Q)= - v,m,(e)‘u,(e).                                                             (12.3)

When we evaluate this at Ho we get ~~(0,) = - [u,, Vyf,(Yo)u,, x,u,]‘. From the CLT
and (12.2), T - “‘Cl’= 1Vyf,(yO)‘ut has a limiting normal distribution.  From Lemma
11.1, T - ‘Et’= 1xiu, converges in distribution   to a functional of Brownian motion.
Given this, it is clear that the scaling matrix must be



      D,   =! TO
              0
              0
                     TIM
                      0
                             0
                             0
                           T’t,   !,                                                      (12.4)
2724


in which case


               ,tl
       0; 1’2 s,@,)                                                                                   (12.5)


converges in distribution to a nondegenerate    random vector.
   Suppose, for now, that Condition (iii) of Theorem 10.1 holds, and let o^, denote
the NLS estimator of 8,. Then (8.6) becomes


       q’((j,_+              -       D,“2

                                                                                                      (12.6)

where h,(0,) = V,m,(0,)‘V,m,(0,)             - V,mf(O,)u,. Because -f3u,Iz,)= 0, ~CV~.fk,~~,)~,l=
0, and so


                                                                                                      (12.7)
                t=1                                 i=l



by the WLLN            applied   to {V,m:(O,)u,}.         Therefore,    we can write

                                                                                     -1
       D;‘~@,- e,) = -               0;     l/2 i v,m,(0,yv,m,(~,)D; 112
                                 [            I=1                                1

                             x       D;     lj2 i Vomt(t3Jt4, + o#).                                  (12.8)
                                 [            i=l                1

This puts us back in the linear model case covered in Section 11. Using partitioned
inverse and Lemma 11.2, T(b, - /?,) has the same representation        as in (11.23).
Similarly,     fi(fT     - y,) has a representation             as in (11.31), but with zI replaced    with
V,f(z,, Y,).
   The main point of this example is that, once we have a linearized representation
as in (12.8), the asymptotic analysis is almost identical to the linear case, provided
the joint limiting distribution  of


       D;‘j2     i V,m,(e,),V,m,(e,)D,liZ                 and     Dp112i       V,,mt(eJ’u,
                1=1                                                      1=1



can be found. The structure of the regression ‘function in (12.1) ensures that this
is the case. In general, finding the limiting distribution can be much more difficult,
particularly   if the nonergodic  variables x, appear nonlinearly.
   We have yet to do the hard part of the analysis, and that is to verify Condition (iii)
of Theorem 10.1. It turns out that Lemma 9.1 can also be applied in this case. We
                                                                                      2775



sketch how this can be done. Define




where a, < 1 and a2 < 2. Note that the minimum diagonal element of this matrix
is c r(r) = T”‘. Assume that ,f(z,, y) is thrice continuously  differentiable, where each
derivative    is dominated   by an integrable       function. Then, in the notation     of
Lemma 9.1, the functions bTtij = b,,,, where 1 d i d M + 1 and M + 1 <j < M +
K + 1, can be taken to be of the form

     bTtij    E 'tij   =   Srijl   ',j   I + Stij,

where gtij is a stationary   function of z, that dominates f&/I)     and its first three
derivatives. (The terms for other combinations     of i and j are easy to handle.) We
assume that E(gtij) < co for all i and j.
   An application    of the FCLT, as in Lemma 11.1, implies that


        f. Stij IX,j I = 0p(T3”),                                                  (12.10)
     t=1



so that


      f. htij = O,( T3”).                                                          (12.11)
     r=1

Now          JGzgl) =Tal”@.    Thus, for condition (ii) of Lemma 9.1 to be satisfied,
we must have (a, + aJ2) > $, a condition easily satisfied because a, + a,/2 can be
made arbitrarily close to 2 under the restrictions stated above. Thus, the conditions
of Theorem 10.1 hold under general conditions, and therefore representation      (12.8)
is valid.
   An important   topic for future research is to examine how the conditions          of
Theorem 10.1, or a result with similar scope, can be verified for more complicated
nonlinear models. It seems likely that the functional CLT will play an important
role.


Appendix

1.   Notation

The transpose of a K x M matrix A is denoted by A’.
11a 11denotes the Euclidean norm of the P x 1 vector a.
11A 11= [tr(A’A)]“*  denotes the Euclidean matrix norm of the matrix A.
For a continuously     differentiable  function q(O), where 8 is a P x 1 vector,             the
gradient of 4 is denoted by the 1 x P vector V&B).
For a K x M differentiable      matrix A(B), where 0 is a P x 1 vector, we denote            the
gradient of A by V,A(H) = avec A(tI)/aO, which is a KM x P matrix.
The second derivative of a matrix, denoted ViA(O), is defined as

     V,zA(8)= v,[v,A(e)].
For random vectors y and x, &lx)        denotes the conditional  distribution of y
given X, E(yjx) denotes the conditional    expectation, and Var(y(x) denotes the
conditional variance.


2.   Dejinitions und proojY$

Dejnition    A.1

Let (O,P, P) be a probability   space, and let {Or: T = 1,2,. . .} be a sequence of
events defined on this space. Then (Or} occurs with probability approaching one
(w.p.a.1) if

     P(OT)-+l      as   T+co.

Definition A.2

A random function r: W x 0 satisfies         the standard   measurability     and continuity
conditions on W x 0 if
 (i) for each & 0, r(., 0) is measurable;
(ii) for each weW,r(w;)      is continuous   on 0.

Dejinition A.3

Let 0 be a compact (closed and bounded) subset of lRp and let {Q,: w x 0 + R}
be a sequence of functions satisfying the standard measurability     and continuity
conditions on 9 x 0. Let Q: 0 -+ R be a nonstochastic     continuous    function on
0. Then Qr(~,e) conoerges in probability to Q(O) uniformly on 0 if and only if

     maxIQr(W,@-Q(e)lLo             as   T+KI.                                              (a.1)
     068

When (a.1) holds we often write Q, 3         Q uniformly    on 0.

Theorem     A.1

Let 0 be a subset of Rp and let {QT: w x 0 -+R:T=           1,2,...}   beasequenceofreal-
valued functions; Assume that
                                                                                                       2727
Ch. 45: Estimation   and Inference   for   Dependent    Processes


 (i) 0 is compact;
(ii) IQ=) sa t'is fi
                   es the standard measurability and continuity                          conditions     on
     -llr x 0.
Then a (measurable) estimator 8,: YV + 0 exists such that

       Q~(w, @r(w)) = min Q~(w, ~9) for all                    WEYY.
                      BE8

In addition, - assume that
(iii) QT LQ      uniformly on 0, where Q is a nonstochastic,                          continuous,     real-
      valued function on 0;
(iv) OO>s the unique minimizer of Q on 0.
Then 13, A 19~.

Proof

This follows from White (1993, Theorem                     3.4) or Newey and McFadden          (Theorem
2.1).

Lemma A.1

Let G,: YV x 0 + R and G: 0 + R be functions satisfying the standard measur-
ability and continuity conditions on the compact set 0. Suppose that G, 3 G
uniformly on 0 and 8, % 8,. Then G,(t?,) 3 G(0,).

Proof

Follows    from White (1993, Theorem                   3.7).

Definition A.4

Let 0 be a subset of Rp with nonempty interior. A random function r: W x 0 -+
lRKsatisfies the standard measurability and$rst order (second order) differentiability
conditions on W x 0 if
 (i) for each 0~ 0, r( ., 0) is measurable;
(ii) for each WE%‘“, r(w;) is once (twice) continuously  differentiable on int(O).

For the abstract optimization   problem                    of Theorem   A.l, define    the score of the
objective function as the P x 1 vector


                                                       “Q;; ‘),...,““$’ e,‘.
       s,(e) = S,(w, 0) E V,Q,(w, 0) =
                                                               1            P   >
The Hessian of Qr is defined               to be the P x P symmetric        matrix
in particular, the (i, j)th element of H,(w, 0) is a’Qr(w, O)/??OiaOj. Hr(CJ) denotes                 the
P x P symmetric random matrix evaluated at 8.

Theorem         A.2

Let the conditions    of Theorem A.1 be satisfied. In addition, assume that
  (v) o0 is in the interior of 0;
 (vi) {Q,1sa t' 1sfi
                   es the standard measurability   and differentiability conditions;
(vii) H, LA      uniformly on 0, where A: 0 + Rpxp IS a nonrandom           continuous
      matrix function, and A, = A(8J is nonsingular.
(viii) fiS,(fI,)          L    Normal(0,    B,) where B, is a positive       definite   matrix.
Then


        fi(8,         - 0,) ~Normal(O,A;‘B,A;‘).                                                     (a.2)

Proof

This essentially follows from Theorem 3.1 in Newey and McFadden.                              A separate
proof is available on request from the author.

Proof of Theorem              4.2

Define


        Q,(wQ)=          T-’ i: qt(w,,@
                                1=1

and Q,(0) = E[Q,(w,                 e)]. Then we must show that, for each E > 0,


            maxIQT(w,e)-QT(0)I>E
                888                             1-+O    as T+co.                                     (a.3)

Let 6 > 0 be a number to be set later. Because 0 is compact, there exists a finite
covering of 0, say Y6(ej), j = 1,2,. . . , K(6), where 9’,(ej) is the sphere of radius 6
about ej. Set Yj = ,4”,(0,), K = K(6), and Q,(e) E Qr(rv, 0). Because 0 c uj”= rYj,
it follows that



                ese
      P maxIQ,(e) - Q,(q > E
                                             1 d P [ max max IQ=(e) - &(e)I > E1
                                                                                        E1.         ia.4
                                                    1 <j<     K e&‘,



                                                            max IQ,(e) - Q,(e)1 >
                                                            ec9,


We will bound            each probability     in the summand.          For BEYj,
by the triangle                   inequality


                                          G T-’              i        k,(e) -        4,(‘j)l      +    T-’        i     4,tej)   -    4,(ej)
                                                             1=1                                                 I=1



                                                 +     T-l          i      h,(e)     -    4,(ej)13
                                                                   1=1



where q,(Q) E E[qt(B)].                              By Condition                   (iv)(a), for &Yj,

      Ide) - q,(ej)ld cl(wt)IIe- 'j II < SC,

and


      Iqtte)-           Gt('j)l       d     C,(ej)      IIe - dj 11< sqe,),

where Ct = E(c,). Thus, we have


      maxIQT(e)- Q&9 G 6
      e&j                                                                                                         1I   + T- l t
                                                                                                                                     1=1
                                                                                                                                           q,(ej) - q,(ej)


                                                       <26T-’                i      C,+6         T-’      5 et-Et           + T-’ t$l qf(‘j) - 4t(‘j) 3
                                                                            1=1                        1=1                 I 1

                                                       <26c+6                      T-’     i      ct-El          + T-’
                                                                                          t=1                I     I

where T- ‘Ct’= 1C, d c < cc by (iv)(b). It follows that


      p
            [
                maxI QT(4 - QTm > E
                os.vj                                                  1
                                  T- l i: c, - c, + T- ’ 5
                                      1=1        I I     t=1
                                                                                               q,(ej) - q,(ej)
                                                                                                                       I> & - 2sc
                                                                                                                                           I.
Now choose 6 < 1 such that (E - 26c) < 42 (this affects K, but not c). Then


                maxIQT(WQT(W=
                BEYj                                                   1
                GP          T-’       5        Ct-2,              +       T-’       5 q,(oj)-q,(oj)                    > E/2 .
                                      1=1                     I       I            1=1                            I         >
2730


Next, choose             T, so that

                         T
       P
           [IT-’        c q-Cc, + T-’
                        1=1     I I

for all T 3 T,, and all j = 1,2,.  , K; this is possible by Assumptions     (iii) and
(iv)(b) of Theorem 4.2 (and because K = K(6) is finite). From (a.4) it follows that,
for T 3 T,,


       P max 1QT(6) - QT(@l > s
             Oet3                                 1 d c,


which establishes                 the result.

Proof of Theorem 4.3

We verify the conditions                   of Theorem         A.l. Define




By Assumptions    M. 1 and M.2 of Theorem 4.3, it follows from White (1993, Theorem
3.7) that QT(w, 0) converges in probability  to Q(O) 3 q(fI; y*) uniformly on 0. The
result now follows from Assumption      M.3 and Theorem A.l.

Proof of Theorem 4.4

This is a simple application                of Theorem        A.2. A mean value expansion    gives (w.p.a.1)


       O=T-‘.‘~~~~,(~~;g,)+[T-’                           i   +((i,-t$),
                                                      t=1



where & is h,(t?;9,) evaluated                  at mean values between         6, and 8,




where V,“; is V,s,(BO; y) evaluated  at mean values between                                 pT and   y*. By
Assumptions M.4(iii), M.S(iii) and M.7 of Theorem 4.4,


       T-1    f:
             1=    1
                       V,S;=T-1
                                         ,;,T -w,a~Y*)l           + o,(l) = o,(l).
                                                                                       7731



Therefore,


     0 = T-   1’2  ,fl~~(0,;y*) +                 fi(8,   - 0,) + o,(l).


By M.5(i) and M.S(ii), because L?, 3 O,, T- lx,‘= 1it 3           A0 and so T- lx,‘= 14, is
nonsingular w.p.a.1. Thus, w.p.a.1 we can write




where we have used the fact that Tp ‘/‘CITE 1s,(O,; y*) = O,(l) (by M.6). This proves
the result.

Proof of Lemma 4.3

The proof is standard       and follows from a second order Taylor’s expansion.        See,
for example, Amemiya        (1985, Section 4.5) and White (1993, Theorem 8.10).

Proof of Theorem      8.1

From    a second    order Taylor’s   expansion,




where R,(8; (3,) = (0 - flJ’[Hr(& 0,) - H”,](8 - 0,) and H,(8; 0,) denotes ZfT(Q)
evaluated at mean values between 8 and BO.Define a random vector by 0, = 8, -
If;- ‘SC (w.p.a. 1). After a little algebra we have


       Q,(O)- Q,(e;.) =     (H OTy~(O
                                   - ‘d +R,.(B; 0,) - RT(eT;0,).                      (a.3

Also, write R,(O; 0,) = clT(8)‘A,(H; 0,)cr,(0), where a,(0) = Ck’2(Q - I!?~,)
                                                                           and A.(& 0,) =
c, 1’2[HT(u; 0,) - HOr]CQ 1’2. Now by assumption               (iii)(b) of Theorem    8.1,
11A,(H; 0,) /) A 0 uniformly over the set {@ 1)q.(d) I/ d E} for any E d 1. It follows
2732


that for E < 1,




for all 0 such that              I/Ck’2(Q - 0J 11< E, where 6, AO.
   Next, define


       .,FT(E)
             = (U: /IDk”(U - 8,) I/ < 6:).

By Assumptions    (iv)(a) and (iv)(b), Di’2(8T - (3,) = O,( 1). By (iii)(a) Ci!‘D;                    l/2 +O;
therefore, there exists a sequence {c, > 0} with sT +O such that

       P[/IC+.‘2(lJ-Bo)ll <+-‘I                         as     T+co.                                     (a.7)

Also because         C”‘DT        _ ‘I2 -+ 0,
                                  T



        VT(ET)   =     { 8: I)   Ch’2(0- ir,) IId Ed}           w.p.a. 1.                                (a4

By the triangle         inequality,

       IIq2(o - 0,) II < I/q2(6, - e,, I(+ llcy(e”, - UJ 1).                                             (a.9

BY (a.71and(a.% if IICk”(Q- &) II d &Tthen I/C$‘2(d- do)II6 2~~ w.p.a. 1. Thus,
from (a.8) it follows that


       “~‘T(&T)c {0: IIC$‘2(U - 0,) 11d 2ET,\                    w.p.a. 1.                              (a. 10)

Now (a.6) and (a.lO) imply that

         sup IRT(8;00)I <4dT6$ w.p.a.1                                                                  (a.1’1)


and (a.6) and (a.7) imply that

  IR,(H”,;O,)I d 6,s;                 w.p.a.1.                                                          (a. 12)

Letting &?,(E,)              denote    the boundary          of J?“,(E,), (a.?+ (a.1 1) and (a.12) imply that
w.p.a.1,

         min QT(U) - QT(gT)
                          3 iA;,min~$- 56,~;
       eE?.P~I.(ET)

                                                =   {+j.;,min
                                                          - ~S,.}E+,
Ch. 45: Estimution   and Ir$wncr   fbr Dependent   Procusxs                                            2733


where 1; min is the smallest eigenvalue of 0; l12H'+D;    I/2.By Assumption     (iv)(a)
of Theorem 8.1, 2; min 2 I> 0 w.p.a.1. Because 6, A0       and Ed > 0 for all T, QT
cannot achieve its ‘minimum on the boundary        of J?~(+)   w.p.a.1; therefore, it
achieves its minimum    on the interior of J?~(+).   Let e, denote this estimator.
Then S,(&,) = 0 w.p.a.1. and 11 Di'"(6, - 8,)IId +, SO that

      D;"(& - tl,)=
                  O,(1).                                                                             (a.13)

Now we are almost done. Use a mean value expansion                    of the score to write (w.p.a. 1)

      DT1'2ST(eT)=DT1'2SOT+DT1'2HOTDT1'2D~2(83-e,)
                           +D;1'2(l;iT-H;)D;1'2D;2(&9)
                                                    0'                                               (a. 14)

where ki, is evaluated at mean values. Letting 8, denote a generic mean value it
is easily shown that Dy2(gT- 0,)    = O,(l). But this implies that ~,EJV; w.p.a.1
because C1'2D-1/2    +O. Thus, by (iii)(b) and (a.13), the last term in (a.14) is o,(l).
We have n:w lstablished    that w.p.a.1,

      0=   D,"'S; + D;1'2H;D;1'2Dy2(6T-
                                      0,)+o,,(l);

by (iv)(a) we can write

      D~'(&-0,)= -A,'D,"2S"T+ o,(l).                                                                 (a.15)

Along with (iv)(b), this completes           the proof.




References

Amemiya, T. (1985) Advanced Econometrics. Cambridge:           Harvard University Press.
Anderson, T.W. (1971) The Statistical Analysis of Time Series. New York: Wiley.
Andrews, D.W.K. (1987) “Consistency        in Nonlinear Econometric       Models: A Generic Uniform Law of
  Large Numbers”, Econometrica, 55, 1465-1472.
Andrews, D.W.K. (1988) “Laws of Large Numbers for Dependent Non-Identically              Distributed Random
  Variables”, Econometric Theory, 4, 458-467.
Andrews, D.W.K. (1989) “Asymptotics       for Semiparametric    Econometric     Models I: Estimation”, Cowles
  Foundation     for Research in Economics Working Paper No. 908.
Andrews, D.W.K. (1991) “Heteroskedasticity            and Autocorrelation     Consistent  Covariance   Matrix
  Estimation”,     Econometrica, 59, 817-858.
Andrews, D.W.K. and J. McDermott          (1993) “Nonlinear    Econometric     Models with Deterministically
  Trending Variables”, Cowles Foundation          for Economic Research Working Paper No. 1053.
Andrews, D.W.K. and J.C. Monohan            (1992) “An Improved Heteroskedasticity       and Autocorrelation
  Consistent Covariance      Matrix Estimator”, Econometrica, 60, 953-966.
Basawa, I.V. and D.J. Scott (1983), Asymptotic Optimal Inferencefor Nonergodic Models. New York:
  Springer-Verlag.
Basa~a, I.V., P.D. Feigin and C.C. Heyde (1976) “Asymptotic                 Properties    of Maximum     Likelihood
   Estimators for Stochastic Processes”, Sankhya, Series A, 38, 259-270.
Bates, C.E. and H. White (1985) “A Unified Theory of Consistent Estimation for Parametric                   Models”,
   Econometric    Theory, 1, 15 I- 175.
Bates, C.E. and H. White (1993) “Determination            of Estimators with Minimum Asymptotic Variance”,
   Econometric Theory, 9, 633-648.
Berk, K.N. (1974) “Consistent      Autoregressive     Spectral Estimates”, Annals of Statistics,2, 489-502.
Berndt, E.R., B.H. Hall, R.E. Hall and J.A. Hausman (1974) “Estimation                  and Inference in Nonlinear
   Structural   Models”, Annals of Economic and Social Measurement, 4, 653-665.
Bhat, B.R. (1974) “On the Method of Maximum Likelihood for Dependent Observations”,                       Journal of
   /he Royal Statistical Society, Series B, 36, 48-53.
Bierens, H.J. (1981) Robust Methods and Asymptotic Theory in Nonlinear Economerrics. New York:
   Springer-Verlag.
Bierens, H.J. (1982) “A Uniform Weak Law of Large Numbers Under &mixing with Application                            to
   Nonlinear Least Squares Estimation”,         Statistica Nederlandica,     36, 81-86.
Billingsley, P. (1968) Conreryence of Probability Measures. New York: Wiley.
Billingsley, P. (1986) Probability and Measure. Second edition. New York: Wiley.
Bloomfield, P. (1976) Fourier Analysis of Time Series: An Introduction. New York: Wiley.
Bloomfield, P. and W.L. Steiger (1983) Least Absolute Deviations. Boston: Birkhauser.
Bollerslev, T. (1986)“Generalized      Autoregressive      Conditional   Heteroscedasticity”,     Journal of Econo-
   metrics, 3 1, 307-328.
Bollerslev, T. and J.M. Wooldridge       (1992) “Quasi-Maximum          Likelihood Estimation and Inference in
   Dynamic Models with Time-Varying           Covariances”,      Econometric Reviews, II, 143-172.
Brillinger, D.R. (1981) Time Series: Dara Analysis and Theory. New York: Holden-Day.
Brockwell, P.J. and R.A. Davis (1991) Time Series: Theory and Methods. New York: Springer-Verlag.
Burguete, J.F., A.R. Gallant and G. Souza (1982) “On the Unification                 of the Asymptotic    Theory of
   Nonlinear Econometric      Models”, Econometric Reviews, I, 151-190.
Chamberlain,     G. (1982) “The General Equivalence of Granger and Sims Causality”, Econometrica, 50,
   569-581.
Chamberlain,   G. (1987) “Asymptotic    Efficiency in Estimation with Conditional  Moment Restrictions”,
  Journal of‘ Econometrics,  34, 305-334.
Chesher,   A. and R. Spady (1991) “Asymptotic           Expansions   of the Information  Test Statistic”,
   Econometrica,     59, 787-8     15.
Crowder,      M.J. (1976) “Maximum Likelihood  Estimation with Dependent   Observations”,  Journal of
   the Royal Statistical      Society,
                               Series B, 38, 45-53.
Davidson, J. (1992) “A Central Limit Theorem for Globally Nonstationary      Near-Epoch    Dependent
  Functions of Mixing Processes”, Econometric Theory, 8, 3 13-329.
Davidson, R. and J.G. MacKinnon (1984) “Convenient Specification Tests for Logit and Probit Models”,
  Journal     qf Econometrics,      25, 241-262.
Davidson,     R. and J.G. MacKinnon          (1991) “A New Form of the Information   Matrix Test”, Econometrica,
  60, 145-158.
Dickey, D.A. and W.A. Fuller (1979) “Distribution    of the Estimators  for Autoregressive Time Series
  with a Unit Root”, Journal of‘ the American Statistical Association, 74, 427-431.
Domowitz, I. (1985) “New Directions in Nonlinear Estimation with Dependent Observations”,    Canadian
  Journal     of Economics,      19, l-27.
Domowitz,    I. and L.T. Muus (1988) “Asymptotic    Inference for Nonergodic   with Econometric     Appli-
  cations”,  in: W.A. Barnett, E.R. Berndt ind H. White, eds., Proceedings of the Third International
   Symposium in Economic Theory and Econometrics.       New York: Cambridge    University Press,
Domowitz, I. and H. White (1982) “Maximum Likelihood Estimation of Misspecified Models”, Journal
   of Econometrics, 20, 35-58.
Engle, R.F. (1984) “Wald, Likelihood     Ratio, and Lagrange Multiplier Tests in Econometrics”,      in: Z.
  Griliches and M.D. Intriligator, eds., Handbook ofEconometrics,  Vol. II. Amsterdam: North-Holland,
  775-826.
Engle, R.F. and C.W.J. Granger        (1987) “Cointegration    and Error Correction:     Representation,
  Estimation and Testing”, Econometrica, 55, 251-276.
Fuller, W. (1976) Introduction to Statistical Time Series. New York: Wiley.
Gallant, A.R. (1987) Nonlinear Statistical Models. New York: Wiley.
Gallant, A.R. and H. White (1988) A Unified Approach to Estimation and Inference in Nonlinear Dynamic
   Models. Oxford: Basil Blackwell.
Godfrey, L.C. (1988) Misspecijication        Tests in Econometrics: The LM Principle and Other Approaches.
   New York: Cambridge          University Press.
Goldberger,      A. (1968) Topics in Reyression Analysis. New York: Macmillan.
Gourieroux,      C., A, Monfort and A. Trognon (1984) “Pseudo-Maximum                 Likelihood Methods: Theory”,
   Econometrica, 52, 68 1~700.
Gourieroux,       C., A. Monfort and A. Trognon (1985) “A General Approach                      to Serial Correlation”,
   Econometric Theory, 1, 3155340.
Granger, C.W.J. (1969) “Investigating         Causal Relations by Econometric             Models and Cross-Spectral
   Methods”, Econometrica, 37, 424-438.
 Hall, P. and C.C. Heyde (1980) Martingale Limit Theory and Its Application. New York: Academic Press.
Hannan, E.J. (1971) “Non-Linear        Time Series Regression”, Journal ofApplied Probability, 8,767-780.
 Hansen, B.E. (1991a) “Strong Laws for Dependent Heterogeneous                   Processes”, Econometric Theory, 7,
   213-221.
 Hansen, B.E. (1991b) Inference When a Nuisance                  Parameter     is Not Identified        Under the Null
   Hypothesis,      Rochester Center for Economic Research, Working Paper no. 296.
 Hansen,     B.E. (1992a) “Consistent      Covariance       Matrix Estimation       for Dependent          Heterogeneous
   Processes”, Econometrica, 60, 9677972.
 Hansen, B.E. (1992b) “Convergence         to Stochastic Integrals for Dependent Heterogeneous                 Processes”,
   Econometric Theory, 8, 4899500.
 Hansen, L.P. (1982) “Large Sample Properties               of Generalized      Method of Moments            Estimators”,
   Econometrica, 50, 1029- 1054.
 Hansen, L.P. (1985) “A Method for Calculating              Bounds in the Asymptotic          Covariance      Matrices of
   Generalized       Method of Moments Estimators”,         Journal of Econometrics. 30, 203-238.
 Hansen, L.P. and R.J. Hodrick (1980) “Forward Exchange Rates as Optimal Predictors of Future Spot
   Rates: An Econometric        Analysis”, Journal qf Political Economy, 88, 8299853.
 Hansen, L.P. and K.J. Singleton (1982) “Generalized            Instrumental     Variables Estimation of Nonlinear
   Rational Expectations       Models”, Econometrica, 50, 126991286.
 Hansen, L.P., J.C. Heaton and M. Ogaki (1988) “Efficiency Bounds Implied by Multiperiod Conditional
   Moment Restrictions”,       Journal of the American Statistical Association, 83, 863-87 1,
Harvey, A.C. (1990) The Econometric Analysis of Time Series. Cambridge:                   MIT Press.
Heijmans, R.D.H. and J.R. Magnus (1986) “On the First-order               Efficiency and Asymptotic Normality of
   Maximum Likelihood Estimators Obtained from Dependent Observations”,                        Statistica Nederlandica,
   40.
Hendry, D.F. and J.-F. Richard (1983) “The Econometric                 Analysis of Economic Time Series”, Inter-
   national Statistical Review, 51, 11 l-163.
Hendry, D.F., A.R. Pagan and J.D. Sargan (1984) “Dynamic Specification”,                    in: Z. Griliches and M.D.
   Intriligator,    eds., Handbook of Econometrics, Vol. II. Amsterdam:           North-Holland,        1023-l 100.
Herndorff, N. (1984) “An Invariance Principle for Weakly Dependent Sequences of Random Variables”,
   Annals of Probability, 12, 141-153.
Hsieh, D.A. (1983) “A Heteroskedasticity-Consistent              Covariance     Matrix Estimator         for Time Series
   Regressions”, Journal of Econometrics, 22, 281-290.
Huber, P.J. (1967) “The Behavior of Maximum Likelihood Estimates Under Nonstandard                           Conditions”,
   Proceedings of the Fijth Berkeley Symposium in Mathematical Statistics and Probability. Berkeley:
   University of California Press.
Jeganathan,      P. (1980) “An Extension of a Result of L. LeCam Concerning                  Asymptotic       Normality”,
   Sankhya, Series A, 43, 23-36.
Jeganathan,      P. (1988) “Some Aspects of Asymptotic Theory with Applications               to Time Series Models”,
   University of Michigan Department          of Statistics, Technical Report No. 166.
Johansen, S. (1988) “Statistical Analysis of Cointegrating           Vectors”, Journal ofEconomic Dynamics and
   Control, 12, 23 l-54.
Keener, R.W., J. Kmenta. and N.C. Weber (1991) “Estimation                 of the Covariance       Matrix of the Least
   Squares Regression Coefficients when the Disturbance               Covariance     Matrix is of Unknown          Form”,
   Econometric Theory, 7, 22245.
Klimko, L.A. and P.T. Nelson (1978) “Conditional            Least Squares Estimation for Stochastic Processes”,
   Annals of Statistics,6, 6299642.
LeCam, L. (1986) Asymptotic Methods in Statistical     Decision Theory. New York: Springer-Verlag.
Levine, D. (1983) “A Remark on Serial Correlation    in Maximum Likelihood”, Journal c$Econometrics,
   23, 337-342.
Lin, W.-L. (1992) “Alternative Estimators for Factor GARCH Models          A Monte Carlo Comparison”,
   Journal of Applied Econometrics, 7, 259-279.
MacKinnon,      J.G. (1992) “Model Specification Tests and Artificial Regressions”, Journal of Economic
   Literature,  30, 102Z 146.
MacKinnon,       J.G. and H. White (1985) “Some Heteroskedasticity       Consistent  Covariance  Matrix
   Estimators with Improved Finite Sample Properties”, Journal of Econometrics, 19, 305-325.
Magnus, J.R. and H. Neudecker (1986) “Symmetry, O-l Matrices and Jacobians:           A Review”, Econo-
  metric     Theory,   2, 157-190.
Manski,      C. (1975) “Maximum      Score Estimation      of the Stochastic      Utility     Model   of Choice”,   Journal
  ofEconometrics,       3, 205-225.
Manski, CF.       (1988) Analog Estimation    Methods      in Econometrics.       New York: Chapman            and Hall.
McLeish, D.L. (1974) “Dependent           Central     Limit     Theorems    and    Invariance       Principles”,  Annals   of
  Probability,     2, 81-85.
McLeish,      D.L. (1975) “A Maximal     Inequality     and Dependent      Strong     Laws”, Annals of Probability,        3,
  826-836.
McLeish,      D.L. (1977) “On the Invariance        Principle    for Nonstationary          Mixingales”,   Annals of Prob-
  ability,    5, 616-621.
Nelson, D.B. (1991) “Conditional Heteroskedasticity    in Asset Returns: A New Approach”, Econometrica,
  59, 347F370.
Newey, W.K. (1990) “Efficient Instrumental    Variables Estimation of Nonlinear Econometric      Models”,
  Econometrica,  58, 809%837.
Newey, W.K. (1991a) “Uniform     Convergence      in Probability and Stochastic Equicontinuity”,  Econo-
  metrica, 59, 1161~1167.
Newey, W.K. (1991b) Consistency and Asymptotic Normality of Nonparametric          Projection Estimators,
  mimeo, MIT Department      of Economics.
Newey, W.K. and K.D. West (1987) “A Simple Positive Semi-Definite         Heteroskedasticity   and Auto-
  correlation Consistent Covariance   Matrix”, Econometrica,  55, 703-708.
Orme, C. (1990) “The Small-Sample    Performance  of the Information   Matrix Test”, Journal of Econo-
  metrics, 46, 309-331.
Pagan, A.R. and H. Sabau (1987) On the Inconsistency          of the MLE in Certain Heteroskedastic
  Regression Models, mimeo, University of Rochester, Department        of Economics.
Park, J.Y. and P.C.B. Phillips (1988) “Statistical Inference in Regressions with Integrated   Processes:
   Part l”, Econometric Theory, 4, 468-497.
Park, J.Y. and P.C.B. Phillips (1989) “Statistical Inference in Regressions with Integrated   Processes:
   Part 2”, Econometric Theory, 5, 95-131.
Phillips, P.C.B. (1986) “Understanding Spurious Regressions in Econometrics”,   Journal ofEconometrics.
  33, 311-340.
Phillips, P.C.B. (1987) “Time Series Regression with a Unit Root”, Econometrica, 55, 277-301.
Phillips, P.C.B. (1988) “Multiple Regression with Integrated Time Series”, Contemporary Mathematics,
  80, 79%105.
Phillips, P.C.B. (1989) “Partially Identified Econometric    Models”, Econometric Theory, 5, 181-240.
Phillips, P.C.B. (1991) “Optimal Inference in Cointegrated      Systems”, Econometrica,    59, 283-306.
Phillips, P.C.B. and S.N. Durlauf (1986) “Multiple Time Series Regression with Integrated         Processes”,
  Review of Economic Studies, 53, 473-496.
Phillips, P.C.B. and B.E. Hansen (1990) “Statistical     Inference in Instrumental    Variables Regression
  with I(1) Processes”, Review of Economic Studies, 57, 99-125.
Phillips, P.C.B. and M. Loretan (1991) “Estimating          Long-Run     Economic   Equilibria”,   Reoiew (If
  Economic Studies, 58, 407-436.
Poirier, D.J. and P.A. Ruud (1988) “Probit with Dependent Variables”, Reoiew of EconomicStudies,
  54, 593-614.
PGtscher, B.M. and I.R. Prucha (1986) “A Class of Partially Adaptive One-Step Estimators for the Non-
  linear Regression Model with Dependent Observations”,          Journal of Econometrics,   32, 219-251.
PGtscher, B.M. and I.R. Prucha (1989) “A Uniform Law of Large Numbers                   for Dependent     and
  Heterogeneous    Data Processes”,   Econometrica, 57, 675-684.
Ch. 45: Estimation and Ir$rence~fhr         Dependent Processes                                                      2737


Pijtscher, B.M. and I.R. Prucha       (1991a) “Basic Structure of the Asymptotic Theory in Dynamic Non-
    linear Econometric     Models, Part I: Consistency and Approximation            Concepts”, Ihnometric Reviews,
    10, 125-216.
Potscher, B.M. and I.R. Prucha (1991b) “Basic Structure of the Asymptotic Theory in Dynamic Non-
    linear Econometric      Models, Part II: Asymptotic        Normality”,     Econometric Reviews, 10, 2533325.
Quah, D. (1990) “An Improved              Rate for Non-Negative           Definite Consistent      Covariance      Matrix
     Estimation with Heterogeneous        Dependent Data”, Economics Letfers, 33, 133- 140.
Quah, D. and J.M. Wooldridge           (1988) A Common Error in the Treatment                of Trending Time Series,
    MIT Department        of Economics, Working Paper No. 483.
Quandt, R.E. and J.B. Ramsey (1978) “Estimating                 Mixtures of Normal Distributions          and Switching
    Regressions”, Journal of the American Statistical Association, 73, 730-738.
Ranga Rao, R. (1962) “Relations            Between Weak and Uniform                Convergence       of Measures      with
    Applications”,     Annals of Mathematical Statistics, 33, 659-680.
Rao, C.R. (1948) “Large Sample Tests of Statistical Hypotheses                 Concerning     Several Parameters      with
    Applications     to Problems of Estimation”,        Proceedings of the Cambridge Philosophical Society, 44,
     50-57.
Rilstone, P. (1991) Efficient Instrumental          Variables Estimation        of Nonlinear     Dependent     Processes,
    mimeo, Universite Laval.
Robinson, P.M. (1972) “Nonlinear Regression for Multiple Time Series”, Journal ofApplied Probability,
    9, 758-768.
Robinson, P.M. (1982) “On the Asymptotic               Properties of Estimators      of Models Containing        Limited
    Dependent Variables”, Econometrica, 50, 27-42.
Robinson, P.M. (1987) “Asymptotically            Efficient Estimation      in the Presence of Heteroskedasticity         of
    Unknown Form”, Econometrica, 55, 875-891.
Robinson, P.M. (1991a) “Best Nonlinear Three-Stage Least Squares Estimation of Certain Econometric
    Models”, Econometrica, 59, 755-786.
Robinson,      P.M. (1991b) “Testing for Strong Serial Correlation              and Dynamic Conditional           Hetero-
   skedasticity    in Multiple Regression”, Journal of Econometrics, 47, 67-84.
Rosenblatt,     M. (1956) “A Central Limit Theorem and a Strong Mixing Condition”, Proceedings of the
   National Academy of Sciences USA, 42,43-47.
Rosenblatt,     M. (1978) “Dependence       and Asymptotic         Independence     for Random Processes”, in: M.
    Rosenblatt,    ed., Studies in Probability Theory. Washington,               DC: Mathematical        Association     of
   America.
Roussas, G.G. (1972) Contiguity of Probability Measures. Cambridge:                  Cambridge      University Press.
Saikkonen, P. (1991) “Asymptotically         Efficient Estimation of Cointegration          Regressions”, Econometric
     Theory, 7, 1-21.
Sargan, J.D. (1958) “The Estimation             of Economic       Relationships     Using Instrumental        Variables”,
    Econometrica, 26, 393-415.
Schmidt, P. (1976) “On the Statistical Estimation of Parametric Frontier Production                 Functions”, Reoiew
    of Economics and Statistics, 58, 238-239.
Seaks, T.G. and S.K. Layson (1983) “Box-Cox                 Estimation     with Standard      Econometric     Problems”,
    Review of Economics and Statistics, 65, 857-859.
Sims, CA. (1972) “Money, Income and Causality”, American Economic Review, 62, 540-552.
Sims, C.A., J.H. Stock and M.W. Watson (1990) “Inference in Linear Time Series Models with Some
    Unit Roots”, Econometrica, 58, 113-144.
Sowell, F. (1988) Maximum          Likelihood     Estimation     of Fractionally     Integrated    Time Series, GSIA,
   Carnegie Mellon University, Working Paper.
Steigerwald,     D. (1992) “Adaptive     Estimation      in Time Series Models”, Journal of Econometrics, 54,
   251-275.
Stock, J.H. (1987) “Asymptotic         Properties    of Least Squares Estimators          of Cointegrating      Vectors”,
   Econometrica, 55, 1035-1056.
Stock J.H. and M.W. Watson (1993) “A Simple MLE of Cointegrating                            Vectors in Higher Order
   Integrated    Systems”, Econometrica, 61, 783-820.
Weiss, A.A. (1986) “Asymptotic         Theory for ARCH Models: Estimation                 and Testing”, Econometric
   Theory, 2, 107-131.
Weiss, A.A. (1991) “Estimating      Nonlinear Dynamic Models Using Least Absolute Error Estimation”,
  Econometric Theory, 7, 46-68.
2138                                                                                             J.M.   Wooldrid</r


Weiss, L. (1971) “Asymptotic     Properties of Maximum          Likelihood   Estimators     in some Nonstandard
 Cases I”, Journal of the American Statisticul Association, 66, 345-350.
Weiss, L. (1973) ‘*Asymptotic Properties       of Maximum       Likelihood   Estimators     in some Nonstandard
  Cases II”, Journal of the American Statistical Association, 68, 428-430.
White, H. (1982) “Maximum Likelihood Estimation of Misspecified Models”, Econometrica, 50, l-25.
White H. (1984) Asymptotic Theory@           Econometricians. Orlando: Academic Press.
White, H. (1987) “Specification       Testing in Dynamic          Models”, in: T. Bewley, ed., Advances in
  Econometrics ~ Fifth World Congress, Vol. I, l-58. New York: Cambridge                 University Press.
White, H. (1993) Estimution, Inference, und Specification Analysis. New York: Cambridge                 University
  Press.
White, H. and I. Domowitz (1984) “Nonlinear Regression with Dependent Observations”,                Econometrica,
  52, 143-162.
White, H. and M. Stinchcombe         (1991) Adaptive Efficient Weighted Least Squares Estimation               with
  Dependent Observations,       mimeo, UCSD Department            of Economics.
Wolak, F.A. (1991) “The Local Nature of Hypothesis Tests Involving Inequality Constraints                  in Non-
  linear Models”, Econometrica,      59, 98 l-996.
Wooldridge,    J.M. (1986) Asymptotic      Properties    of Econometric     Estimators,    UCSD Department         of
  Economics, Ph.D. Dissertation.
Wooldridge, J.M. (1991a) “On the Application          of Robust, Regression-Based       Diagnostics  to Models of
  Conditmnal     Means and Conditional       Variances”, Journal of Econometrics, 47, 5-46.
Wooldridee. J.M. (1991b) “Suecification Testing _ and Quasi-Maximum
                                                             .                  Likelihood Estimation”, Journal
  of Eckketrics;     48, 24-55.
Wooldridge,    J.M. (1991~) Notes on Regression with Difference-Stationary               Data, mimeo, Michigan
  State University Department       of Economics.
Wooldridge, J.M. and H. White (1985) “Consistency           of Optimization    Estimators”,    UCSD Department
  of Economics, Discussion Paper 85-29.
Wooldridge,    J.M. and H. White (1988) “Some Invariance Principles and Central Limit Theorems for
  Dependent Heterogeneous        Processes”, Econometric Theory, 4, 210-230.
Wooldridge, J.M. and H. White (1989) Central Limit Theorems for Dependent, Heterogeneous                 Processes
  with Trending Moments, mimeo, MIT Department                 of Economics.



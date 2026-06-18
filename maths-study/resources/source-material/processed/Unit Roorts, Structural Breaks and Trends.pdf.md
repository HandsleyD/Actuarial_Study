---
normalized_id: shared-pdf-reference-unit-roorts-structural-breaks-and-trends
exam_code: SHARED
material_scope: unit roorts, structural breaks and trends.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Unit Roorts, Structural Breaks and Trends.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-unit-roorts-structural-breaks-and-trends

Chapter 46


UNIT ROOTS, STRUCTURAL                                                    BREAKS AND TRENDS

JAMES       H. STOCK*

Harvard University


Contents

Abstract                                                                                                          2740
1. Introduction                                                                                                   2740
2. Models and preliminary                           asymptotic            theory                                  2744
     2.1.     Basic concepts        and notation                                                                  2745
     2.2.     The functional        central    limit theorem        and related tools                             2748
     2.3.     Examples       and preliminary          results                                                     2751
     2.4.     Generalizations           and additional      references                                            2756
3.   Unit autoregressive                    roots                                                                 2757
     3.1.     Point estimation                                                                                     2758
     3.2.     Hypothesis        tests                                                                              2763
     3.3.     Interval     estimation                                                                              2785
4.   Unit moving               average         roots                                                              2788
     4.1.     Point estimation                                                                                     2790
     4.2.     Hypothesis        tests                                                                              2792
5.   Structural            breaks        and broken             trends                                            2805
     5.1.     Breaks in coefficients           in time series regression                                           2807
     5.2.     Trend       breaks   and tests for autoregressive             unit roots                             2817
6.   Tests of the I( 1) and I(0) hypotheses:                              links and practical       limitations   2821
     6.1.     Parallels     between       the I(0) and I(1) testing problems                                       2821
     6.2.     Decision-theoretic           classification       schemes                                            2822
     6.3.     Practical      and theoretical        limitations     in the ability to distinguish   I(0) and
              I( 1) processes                                                                                      2825
References                                                                                                        2831

   *The author thanks Robert Amano, Donald Andrews, Jushan Bai, Ngai Hang Chan, In Choi, David
Dickey, Frank Diebold, Robert Engle, Neil Ericsson, Alastair Hall, James Hamilton, Andrew Harvey,
Sastry Pantula, Pierre Perron, Peter Phillips, Thomas Rothenberg,     Pentti Saikkonen, Peter Schmidt,
Neil Shephard and Mark Watson for helpful discussions and/or cements on a draft of this chapter.
Graham Elliott provided outstanding   research assistance. This research was supported in part by the
National Science Foundation   (Grants SES-89-10601 and SES-91-22463).


Handbook ofEconometrics, Volume IV, Edited by R.F. Enyle and D.L. McFadden
0 1994 Elsevier Science B. V. All rights reserved
2740                                                                                 J.H. Stock




Abstract

This chapter reviews inference about large autoregressive          or moving average roots
in univariate    time series, and structural      change in multivariate           time series
regression. The “problem” of unit roots is cast more broadly as determining                the
order of integration  of a series; estimation, inference, and confidence intervals are
discussed. The discussion     of structural    change focuses on tests for parameter
stability. Much emphasis is on asymptotic           distributions     in these nonstandard
settings, and one theme is the general applicability     of functional central limit theory.
The quality of the asymptotic      approximations      to finite-sample    distributions  and
implications  for empirical work are critically reviewed.




1.     Introduction

The past decade has seen a surge of interest in the theoretical and empirical analysis
of long-run    economic activity and its relation to short-run           fluctuations.   Early
versions of new classical theories of the business cycle (real business cycle models)
predicted that many real economic variables would exhibit considerable persistence,
more precisely, would contain a unit root in their autoregressive (AR) representations.
 Hall’s (1978) fundamental     work on the consumption      function showed that, under
a simple version of the permanent income hypothesis, future changes in consumption
are unpredictable,     so consumption  follows a random walk or, more generally, a
martingale.   The efficient markets theory of asset pricing recapitulated             by Fama
(1970) had the same prediction: if future excess returns were predictable, they would
be bid away so that the price (or log price) would follow a martingale.                    The
predictions of these theories often extended to multivariate       relations. For example,
if labor income has a unit root, then a simple version of the intertemporal         permanent
income hypothesis       implies that consumption       will also have a unit root and
moreover that income minus consumption          (savings) will not have a unit root, so
that consumption       and income are, in Engle and Granger’s (1987) terminology,
cointegrated   [Campbell (1987)]. Similarly, versions of real business cycle models
predict that aggregate consumption,     income and investment will be cointegrated.
    The empirical evidence on persistence in economic time series was also being
refined during the 1980’s. The observation        that economic time series have high
persistence is hardly new. Orcutt (1948) found a high degree of serial correlation in
the annual time series data which Tinbergen (1939) used to estimate his econometric
model of the U.S. economy. By plotting autocorrelograms            and adjusting for their
downward bias when the true autocorrelation      is large, Orcutt concluded that many of
these series ~ including changes in aggregate output, investment andconsumption               -
were well characterized      as being generated        by the first-order    autoregression,
Ay, = 0.3Ay,_, + I:, [Orcutt (1948, eq. 50)], where Ay, = y, - y,- , , that is, they
contained an autoregressive      unit root. During the 1960’s and 1970’s, conventional
time series practice was to model most economic aggregates in first differences, a
practice based on simple diagnostic devices rather than formal statistical tests. In
their seminal article, Nelson and Plosser (1982) replaced this informal approach
with Dickey and Fuller’s (1979) formal tests for a unit root, and found that they
could not reject the hypothesis of a unit autoregressive      root in 13 of 14 U.S. variables
using long annual economic time series, in some cases spanning a century. Similarly,
Meese and Singleton (1982) applied Dickey- Fuller tests and found that they could
not reject the null of a single unit root in various exchange rates. Davidson et al.
(1978) found that an error-correction         model, later recognized as a cointegrating
model, provided stable forecasts of consumption            in the U.K. As Campbell and
Mankiw (1987a, 1987b) and Cochrane (1988) pointed out, the presence of a unit
root in output implies that shocks to output have great persistence through base
drift, which can even exceed the magnitude of the original shock if there is positive
feedback in the form of positive autocorrelation.
   This body of theoretical and empirical evidence drew on and spurred develop-
ments in the econometric       theory of inference concerning        long-run properties of
economic time series. This chapter surveys the theoretical econometrics              literature
on long-run inference in univariate time series. With the exception of Section 5.1
on stability tests, the focus here is strictly univariate; for multivariate    extensions see
the chapter by Watson in this Handbook. Throughout,             we write the observed series
y, as the sum of a deterministic     trend d, and a stochastic term u,

     y, = d, + uf’      t= 1,2 ,...,   T.                                                 (1.1)

The trend in general depends on unknown parameters, for example, in the leading
case of a linear time trend, d, = b, + fl, t, where /I, and pi are unknown.             Unless
explicitly stated otherwise, it is assumed that the form of the trend is correctly
specified. If u, has a unit autoregressive      root. then u, is integrated of order one (is
 I( 1)) in the sense of Box and Jenkins (1976). If Au, has a unit moving average (MA)
root, then u, is integrated of order zero (is I(0)). In the treatment here, the focus is
on these largest roots and the parameters            describing the deterministic    term are
treated as nuisance parameters. The two types of unit roots (AR and MA) introduce
obvious ambiguity in the phrase “unit root”, so this chapter emphasizes instead the
I(0) and I( 1) terminology.   Precise definitions are given in Section 2.
    The specific aim of this chapter is to outline the econometric theory of four areas
of inference in time series analysis: unit autoregressive       roots and inference for I(l)
and nearly I( 1) series; unit moving average roots and testing for a series being I(0);
inference on d,, and, in particular,     testing for a unit autoregressive      root when d,
might have breaks, for example, be piecewise linear; and tests for parameter
instability    and structural breaks in regression models. Although the analysis of
2742                                                                                          J.H.   Srock


structural breaks stems from a different literature than unit roots, the mathematics
and indeed some test statistics in these two areas are closely related, and this survey
emphasizes such links.
    There have been four main areas of application                   of the techniques for inference
about long-run dependence discussed in this chapter. The first and perhaps the most
straightforward        is data description. Does real GNP contain an autoregressive                  unit
root? What is a 95”/, confidence interval for the largest root? If output has a unit
 root, then it has a permanent           component,      in the sense that it can be decomposed
into a stochastic trend (a martingale component)                  plus an I(O) series. What does this
 permanent component,           trend output, look like, and how can it be estimated‘? This
 question has led to estimating and testing an unobserved components                         model. For
empirical applications          of the unobserved        components       model see Harvey (1985),
 Watson (1986), Clark (1987, 1989) Quah (1992) and Harvey and Jaeger (1993); for
 a technical discussion, see Harvey (1989); for reviews see Stock and Watson (1988a)
 and Harvey and Shephard (1992). A natural question is whether there is in fact a
 permanent component.            As will be seen in Section 4, this leads to testing for a unit
 moving average root or, more generally, testing the null hypothesis that the series
 is l(0) against the I(1) alternative.
    A second important application             is medium- and long-term forecasting. Suppose
 one is interested in making projections of a series over a horizon that represents a
 substantial     fraction of the sample at hand. Such long-term                      forecasts will be
dominated       by modeling decisions about the deterministic                  and stochastic trends.
 Several of the techniques for inference studied in this chapter ~ for example, tests
 for unit AR or MA roots and the construction                     of median-unbiased        estimates of
 autoregressive      coefficients - have applications            to long-run     forecasting     and the
estimation of forecast error bands.
    A third application, perhaps the most common in practice, is to guide subsequent
multivariate      modeling or inference involving the variable in question. For example,
suppose that primary interest is in the coefficients on yt in a regression in which y,
appears as a regressor. Inference in this regression in general depends on the order
of integration      of y, and on its deterministic          component       [see West (1988a), Park
and Phillips (1988), Sims et al. (1990), and the chapter by Watson in this Handbook].
As another example, if multiple series are I(1) then the next step might be to test for
and model cointegration.           Alternatively,    suppose that the objective is to decompose
multiple time series into permanent                 and transitory       components,      say to study
short-run dynamic effects of permanent shocks [Blanchard and Quah (1989), King
et al. (1991)]. In each of these cases, how best to proceed hinges on knowing whether
the individual series are I(O) or I(1). Although these multivariate                   applications    are
beyond the scope of this chapter, inference about univariate AR and MA roots plays
a key initial step in these multivariate           applications.
    Fourth, information        on the degree of persistence in a time series and, in particular,
on its order of integration can help to guide the construction                 or testing of economic
theories. Indeed, a leading interpretation              of Nelson and Plosser’s (1982) findings
Ch. 46:   Unit   Koots, Structural   Breaks and Trends                                             2143



was that the prevalence of I( 1) series in their long annual data set provided support
for real theories of the business cycle. Alternatively,               knowledge of the order of
 integration of certain variables can be used to suggest more precise statements (and
 to guide inference) about certain economic theories, for example, the possibility of
 a vertical long-run Phillips curve or the neutrality              of money [Fisher and Seater
 (1993), King and Watson (1992)].
     In addition to these empirical applications,          technical aspects of the econometric
 theory of unit roots, trend breaks and structural breaks are related to several other
 problems in econometric           theory, such as inference in cointegrated            systems. The
 theory developed here provides an introduction               to the more involved multivariate
problems.
     Several good reviews of this literature are already available and an effort has been
 made here to complement them. Phillips (1988) surveys the theoretical literature on
 univariate     and multivariate       autoregressive     unit root distributions,        and a less
 technical introduction        to these topics is given in Phillips (1992a). Diebold and
 Nerlove (1990) provide a broad review of the econometric                  literature on measures
 and models of persistence. Campbell and Perron (199 1) provide an overview of the
literature on unit autoregressive           roots, as well as on cointegration,          with an eye
 towards advising applied researchers. Banerjee et al. (1992a) provide a thorough
 introduction      to testing and estimation in the presence of unit autoregressive              roots
 and multivariate        modeling of integrated        time series, with special attention            to
empirical applications.
    The main approach to inference about long-term properties of time series which
is excluded from this survey is fractional             integration.    In this alternative      to the
I(O)/I( 1) framework, it is supposed that a series is integrated of order d, where d need
not be an integer. The econometric             theory of inference in fractionally         integrated
models has seen ongoing important work over the past two decades. This literature
is large and the theory is involved, and doing it justice would require a lengthier
treatment than possible here. The R/S statistic of Mandelbrot                 and Van Ness (1968),
originally developed to detect fractional integration, is discussed briefly in Section 3.2
in the context of tests for an AR unit root. Otherwise, the reader is referred to recent
contributions       in this area. Two excellent surveys are Beran (1992) and, at a more
rigorous level, Robinson (1993). Important            contributions     to the theory of inference
with fractional integration          include Geweke and Porter-Hudak                (1983), Fox and
Taqqu (1986), Dahlhaus (1989) and Sowell (1990, 1992). Recent empirical work in
econometrics        includes Lo (1991) (R/S analysis of stock prices), Diebold                     and
Rudebusch        (1989, 199la) and Diebold et al. (1991) (estimation               of the fractional
differencing parameter for economic data).
    The chapter is organized as follows. Section 2 describes the I(0) and I( 1) models
and reviews some tools for asymptotic analysis. Section 3 examines inference about
the largest autoregressive        root when this root equals or is close to one. Section 4
studies inference about unit or near-unit moving average roots. Two related topics
are covered in Section 5: tests for parameter stability and structural breaks when
2744                                                                                 J.H. Stock


the break date is unknown,        and tests for AR unit roots when there are broken
trends. Section 6 concludes by drawing links between the I(O) and I(1) testing
problems and by suggesting some conclusions concerning these techniques that, it is
hoped, will be useful in empirical practice. Most of the formal analysis in this chapter
is based on asymptotic     distribution    theory. The treatment    of the theory here is
self-contained.    Readers primarily    interested in empirical applications     can omit
Sections 2.4,3.2.3 and 4.2.3 with little loss of continuity. Readers primarily interested
in tests for parameter stability and structural breaks in time series regression can
restrict their attention to Sections 2 and 5.1.



2.     Models and preliminary asymptotic     theory

This section provides an introduction       to the basic models and limit theory which
will be used to develop and to characterize         the statistical procedures studied in
the remainder of this chapter. Section 2.1 introduces basic notation used throughout
the chapter, and provides formulations       of the I(O) and I( 1) hypotheses. This section
also introduces a useful tool, Beveridge and Nelson’s (1981) decomposition                of an
I(1) process into I(0) and I( 1) components.          This leads naturally       to a second
expression for the I(0) and I( 1) hypothesis in a “components”         representation.
    Section 2.2 summarizes the limit theory which will be used to derive the asymp-
totic properties of the various test procedures. A variety of techniques have been
and continue to be used in the literature to characterize limiting distributions         in the
unit MA and AR roots problems. However, the most general and the simplest to
apply is the approach based on the functional central limit theorem (FCLT, also
called the invariance principle or Donsker’s theorem) and the continuous              mapping
theorem (CMT), and that is the approach used in this chapter. [There are a number
of excellent texts on the FCLT. The classic text is Billingsley (1968). A more modern
treatment, on which this chapter draws, is Hall and Heyde (1980). Ethier and Kurtz
(1986) provide more advanced material and applications.            Also, see the chapter by
Wooldridge in this Handbook.]        The version of the FCLT used in this chapter, which
applies to the sequence of partial sums of martingale difference sequences, is due to
Brown (1971). The main advantage of this approach is that, armed with the FCLT
and the CMT, otherwise daunting asymptotic problems are reduced to a series of
relatively simple calculations.   White (I 958) was the first to suggest using the FCLT
to analyze “unit root” distributions.      Other early applications      of the FCLT, with
i.i.d. or martingale difference sequence errors, to statistics involving I( 1) processes
include Bobkoski        (1983) and Solo (1984). Phillips’ (1987a) influential            paper
demonstrated      the power of this approach by deriving the distribution         of the AR( 1)
estimator and t-statistic in the misspecified case that the process has additional
[non-AR(l)]     dependence. These were paralleled by important developments              in the
asymptotics     of multivariate  unit root models; see the chapter by Watson in this
Handbook      for a review.
Ch. 46:   Unit    Roots, Structural   Breaks and Trends                                                         2745



   The aim of this chapter is to provide a treatment at a level suitable for graduate
students and applied econometricians.      To enhance accessibility, we make two main
compromises    in generality and rigor. The first is to restrict attention to time series
which can be written as linear processes with martingale difference errors, subject
to some moment        restrictions.   This class is rich enough to capture the key
complications    in the theory and practice of inference concerning        unit roots and
trend breaks, namely the presence of possibly infinitely many nuisance parameters
describing the short-run dependence of an I(0) disturbance.        However, most of the
results hold under some forms of nonstationarity.        References to treatments which
handle such nonstationarity         are given in Section 2.4. The second technical
compromise concerns details of proofs of continuity of functionals needed to apply
the continuous    mapping theorem; these details are typically conceptually       straight-
forward but tedious and notationally         cumbersome,    and references are given to
complete treatments when subtleties are involved.


2.1.      Basic concepts and notation

Throughout      this chapter, u, denotes a purely stochastic I(0) process and E, denotes
a serially uncorrelated       stochastic process, specifically a martingale   difference
sequence. The term “I(O)“is vague, so defining a process to be I(0) requires additional
technical assumptions. The formulation which shall be used throughout this chapter
is that u, is a linear process with martingale difference sequence errors. That is, the
I(0) process u, has the (possibly infinite) moving average representation,

       0, = c(L)q,            t=O ,-+1 ,-+2 ,.. . 3                                                            (2.1)

where c(L) = C,?=,cjL’ is a one-sided moving average polynomial in the lag operator
L which in general has infinite order. The errors are assumed to obey

       E(E,lE,_1,E,_2,...)=0,

       T-1        f E(&:I&,_1,E,_2,...)~a.s.         E~:=c-+o              as T+Q
                 r=1
       E(~;ll.2,_~,~,_~,... )<K,             a.s.forallt.                                                      (2.2)
That is, E, can exhibit conditional   heteroskedasticity     but this conditional   hetero-
skedasticity must be stationary in the sense that fourth moments exist and that E,
is unconditionally   homoskedastic.    Because E, is unconditionally       homoskedastic,
under (2.1) and (2.2) U, is covariance stationary.’      This simplifies the discussion of

   ‘A time series y, is strictly stationary if the distribution   of (y ,+,,...,y,+,)doesnotdependonk.The
series is covariance stationary (or second-order stationary)      if Ey, and Ey,y,_ j, j = 0, k 1,. . . exist and are
independent    oft.
functions of second moments of L’,such as its spectrum, s,.(c)), or autocovariances,
r,,(,j),j = 0, k 1, & 2,. The representation    (2.1) is similar to the Wold representation
for a covariance stationary series, although the Wold representation               only implies
that the errors are serially uncorrelated,    not martingale difference sequences.
    Central to the idea that a process is I(O), is that the dependence between distant
observations      is limited. In the context of (2.1), this amounts to making specific
assumptions      on c(L). The assumption    which will be maintained        throughout   is that
c(L) has no unit roots and that it is one-summable          [e.g. Brillinger (1981, ch. 2.7)]


     c(l)#O      and     fj/cjl   < co,                                                      (2.3)
                        j=O


where c(l) = CJYocj. The conditions       (2.3) can alternatively   be written   as restrictions
on the spectrum of u,,s,(w). Because s,(w) = (aE2/27C)ICjm_oCjeiwj12(where i = fi          I),
~~(0) = ofc( 1)‘/27c, so c(1) # d implies that the spectral density of u, at frequency zero
is nonzero. Similarly, the one-summability       condition implies that ds,(w)/do is finite
at o = 0. Thus, these conditions on c(L) restrict the long-term behavior of u,. Unless
explicitly stated otherwise, throughout       this chapter it is assumed that u, satisfies
(2.1))(2.3).
    The definition of general orders of integration       rests on this definition of I(0): a
process is said to be I(d), d 3 1, if its dth difference, Ad+ is T(O). Thus u, is I(1) if
Au, = u,, where u, satisfies (2.1))(2.3). In levels, u, = cf= rus + uo, so that the
specification of the levels process of u, must also include an assumption          about the
initial condition. Unless explicitly stated otherwise, it is assumed that, if u, is I(l),
then the initial condition satisfies Eui < co.
    A leading example of processes which satisfy (2.3) are finite-order ARMA models
as popularized    by Box and Jenkins (1976). If u, has an ARMA(p, q) representation,
then it can be written

     P(W, = 4(0%                                                                             (2.4)

where p(L) and 4(L), respectively, have finite orders p and q. If the roots of p(L) and
4(L) lie outside the unit circle, then the ARMA process is stationary and invertible
and u, is integrated of order zero. If u, satisfies (2.4) and is stationary and invertible,
then u, = c(L)a, where c(L) = p(L)_ ‘4(L) and it is readily verified that (2.3) is satisfied,
since #( 1) # 0 and eventually c(L) decays exponentially.
   ARMA models provide a simple framework                  for nesting the I(0) and I(1)
hypotheses, and are the origin of the “unit root” terminology.           Suppose u, in (1.1)
satisfies

     (1 - olL)u, = (1 - BL)u,,                                                               (2.5)

where u, is I(0). If (~1 < 1, u, is stationary.    If 181-c 1, then (1 - OL) is said to be
invertible. If c( = 1 and 101< 1, then u, is integrated of order one; that is, U, - u0 can
be expressed as the partial sum -- loosely, the “integration”       - of a stationary process.
If c( = 1 and 6, = 1, then u, = L’,+ (u, - L’J and u, is stationary, or integrated of order
zero. [If (3= 1 and (a 1< 1, then u, is integrated of order - 1, but we will not consider
this case since then u, in (2.2) can be replaced by its accumulation         I:= rus, which in
turn is I(O).]
   This framework provides an instructive interpretation          of the I( 1) and I(O) models
in terms of the properties of long-run forecasts of the series. As Harvey (1985, 1989)
has emphasized, an intuitively       appealing definition of the trend component           of a
series is that its long-run forecast is its trend. If u, is I(l), then its long-run forecast
follows a martingale, while if u, is I(O), its long-run forecast tends to its unconditional
mean (here zero). In this sense, if u, is T(1) then it and y, can be said to have a
stochastic trend.
   This correspondence      between the order of integration       of a series and whether it
has a stochastic trend is formally provided by Beveridge and Nelson’s (1981)
decomposition      of u, into I(1) and I(O) components.        Suppose that Au, = u,. The
BeveridgeeNelson        (1981) decomposition       rests on writing c(L) as c(L) = c(l) +
[c(L) - c(l)] = c( 1) + c*(L)A, where A = 1 - L and cj* = - C,: j+ 1ci (this identity is
readily verified by writing out c(L) - c( 1) = AC*(L) and collecting terms). Thus u,
can be written u, = ~(1)s~ + c*(L)AE~. Then, because u, = cf= iv, + tq,, we get the
Beveridye-Nelson      decomposition


     u, = c( 1) i    E, + c*(L)&, + C,,                                                   (2.6)
               s=l



where ul,, = u0 - c*(L)&,. It is readily verified that, under         (2.1)-(2.3), c*(L)q is
covariance stationary. This follows from the one-summability          of c(L), which implies
that c*(L) is summable. [Specifically,




which is finite by (2.3).] Thus,


     E(c*(L)E,)* = f        (cj*)‘o, <       j~olq       *g:,
                      j=O                (           >

which is finite by (2.2) and (2.3).
   The BeveridgeeNelson      decomposition     (2.6) therefore represents U, as the sum of
a constant times a martingale,      a covariance stationary     disturbance   and an initial
condition do. If u. is fixed or drawn from a distribution      on the real line, then zio can
be neglected and often is set to zero in statements             of the Beveridge-Nelson
2748                                                                                      J.H. Stock


decomposition.    The martingale term can be interpreted as the long-run forecast of
u,: because c*(L) is summable,      the long-term     forecast, u,+~,~ for k very large, is
c(l)Cf, rs,. Thus an I(1) series can be thought of as containing        a stochastic trend.
Equally, if u, is I(O), then plim,, mu, + kit = 0, so that U, does not have a stochastic
trend.



2.2.   The functional    central limit theorem and related tools

If u, is stationary,    or more generally has sufficiently many moments and limited
dependence      on past observations,      then averages such as T- ‘CT= ,u: will be
consistent    for their expectation,    and scaled sums like T-1’2Ct’= 1u, will obey a
central limit theorem; see the chapter by Wooldridge                 in this Handbook         for
a general treatment.        By the nature of the problems          being studied, however,
conventional      limit theory does not apply to many of the statistics covered in this
chapter. For example, the null distribution         of a test for a unit autoregressive    root
is derived for U, being I(1). However, this violates the assumptions               upon which
conventional     asymptotic tools, such as the weak law of large numbers (WLLN), are
based. For example, if u, is I(l), then the sample mean U is Op( T”‘) and T- ‘j2ti has
a limiting normal distribution,       in sharp contrast to the I(0) case in which U is
consistent2
   The approach to this and related problems used in this chapter is based on the
functional central limit theorem. The FCLT is a generalization            of the conventional
CLT to function-valued         random     variables, in the case at hand, the function
constructed     from the sequence of partial sums of a stationary              process. Before
discussing the FCLT, we introduce extensions to function spaces of the standard
notions of consistency, convergence in distribution,          and the continuous       mapping
theorem. Let C[O, l] be the space of bounded continuous                functions on the unit
interval with the sup-norm metric, d(f, g) = ~up,,t,,r~lf(s) - g(s)l, wheref, gEC[O, 11.

Consistency.       A random element      r+C[O,     l] converges    in probability   to f (that is,
~,~f)ifPr[d(~,,f)>6]+Oforall6>0.

Convergence in distribution.        Let {r,, T> l} be a sequence of random elements of
C[O, l] with induced probability        measures {r-c,}. Then rcr converges weakly to 7c,
or equivalently      <,=s 5 where 4 has the probability       measure rc, if and only if
jfdrcr+Jfdrrforallb        ounded continuous f: C[O, l] -+ W. The notations CT * 5 and
(,(.)a[(.),     where “.” denotes the argument      of the functions 5, and [, are used
interchangeably     in this chapter.

  ‘Suppose Au, = E, and I+, = 0. Clearly conventional  assumptions   in the WLLN, such as u, having
a bounded     second moment,    do not hold. Rather, T-%         = T-3’2~~z 1u, = T3’*xT= ,xT= ,E, =
T- 1’2xT= 1(l -(s - 1)/T)&,, so a central limit theorem for weighted sums implies that T-‘$%
‘YO, af/3).
Ch. 46: Unit RooI.~. Strucrurul    l3rrak.s und Trvnd.s                                            2749


The continuous mupping theorem (CMT).      If h is a continuous                functional     mapping
C[O, l] to some metric space and (,a 5, then h(t,) * h(t).

   The FCLT generalizes the usual CLT to random functions 5r~C[0, I]. Let I.1
denote the greatest lesser integer function. Let lT(/l) be the function constructed by
linearly interpolating   between the partial sums of c, at the points ,I = (0, l/T,
2/T,. . , l), that is,




so that t, is a piecewise-linear   random element of C[O, 11. The CLT for vector-
 valued processes ensures that, if i,, . . . ,3., are fixed constants between zero and one
and condition (2.2) holds, then [tr(I_,), rT(,12), . . , i;T(&,)] converges in distribution
jointly to a k-dimensional   normal random variable. The FCLT extends this result
to hold not just for finitely many fixed values of J*, but rather for 5r treated as a
function of 2. The following FCLT is a special case of Brown’s (1971) FCLT [see
Hall and Heyde (1980), Theorem 4.1 and discussion].

Theorem     1 (Functional         cent&    limit theorem for a martingale)

Suppose that E, is a martingale difference sequence which satisfies (2.2). Then tT = W,
where W is a standard Brownian motion on the unit interval.

   An FCLT for processes which satisfy (2.1)-(2.3) can be obtained by verifying that
condition    (5.24) in Hall and Heyde’s (1980) Theorem 5.5 is satisfied if c(L) is
one-summable.        [One-summability     is used because of its prior use in unit root
asymptotics      [Stock (1987)], although it can be replaced by the weaker condition
that c(L) is &summable;        see Solo (1989) and Phillips and Solo (1992).] However,
Hall and Heyde’s theorem is more general than needed here and for completeness
an FCLT is explicitly derived from Theorem 1 for processes satisfying (2.1))(2.3).
The argument        here relies on inequalities  in Hall and Heyde (1980) and follows
Phillips and Solo (1992), except that the somewhat stronger conditions          used here
simplify the argument. See Phillips and Solo (1992) for an extensive discussion,
based on the Beveridge-Nelson           decomposition,   of conditions   under which the
FCLT holds for linear processes.
   To show that Theorem 1 and the Beveridge-Nelson            decomposition   can be used
to yield directly an FCLT for partial sums of I(0) processes which satisfy conditions
(2.1))(2.3), let


     (,,(A) = (cf T) - 1’2 czI 0, + (Tj. -           CT4 brrl,+1 .

According     to the BeveridgeeNelson            decomposition   (2.6), this scaled partial    sum for
2750                                                                                                                       J.H.Sfock


fixed 1. is c( l)T- “‘~~~j~,    plus a term which is T- Ii2 times an I(0) variable.
Because tT+ W, this suggests that [,.,.*c(l)W.
   To show this formally, the argument            that [,,T - Cam LO         must be made
uniformly in I., that is, that Pr[sup,l t,,,(A) ~ c( I)tr(jb)l > (s] - 0 for all 6 > 0. Now.

                                               ITi                                                          [Ti.]
    l<,.,(2) - c(1)5,(i.)I = (a:T))      ‘I2 1 0, + (Ti. - [Tj.])C,TAl+,                              ~ c(1) 1 cI
                                             ,=I                                                                  1=1



                                               -     (Ti.     -    [   Ti.] )c( l)+il          +,

                                                    17-11
                          = (a,27--      I/2   c( 1) 1 F, + c*(L)c[,,]                    ~ c*(L)i:,
                                                       f=l

                                               + (Tr’ ~ [T’])(c(l)EIT~]+                            1 + c*(L)dE,,.;,,+1)

                                                             [Til
                                               -c(l)          1 E, -(Ti              -   [Tr”])c(l)c,r,,+,
                                                             1=1


                          =(aZT)-“21~*(L)~,TAIl-(.*(L)~0                             +(Ti.-          [TI.])(c*(L)h,,.,,+        1)1


                          6   bfT)-      “‘{   Ic*(L)c[,,jl             +     ic*(L)c,T~]+lI          +    k*b%,I}


                          ~2a,‘max,=,,,,,,TIT-1!2~*(L)~,I                                +oF;’ Tm”21c*(L)c,I                  (2.7)

where the second equality uses the BeveridgeeNelson                                       decomposition.   The term
T-“2 Ic*(L)c,l in the final line of (2.7) does not depend                                on 1, and is asymptotically
negligible, so we drop it and have

       Pr[sup,llvT(A)   - c(l)tT(A)I > S] < Pr[2cr~~‘max,IT~                                  1’2c*(L)~,I > 61
                                                                         -3

                                                                               E max, IT - 1’2c*(L)c, 13




                                                                                                                              (2.8)

where the final inequality follows from Minkowski’s inequality. Because max,EleJ” < m
[by (2.2)] and &?= 1/cf I < M, [by the argument following (2.6)], Pr[sup, Ir’,.,(i) -
c(l)<,.(A)1 > S] +O for all 6 > 0 so trT - c(l)<, 3 0. Combining       this asymptotic
equivalence with Theorem 1, we have the general result that, if u, satisfies (2.1))(2.3)
then t,.,*c(l)W.
Ch. 46: Unit Koors. Structurul    Breaks     and    Trends                                             2751



   The continuity correction involved in constructing    5, and cVr is cumbersome and
is asymptotically negligible in the sup-norm sense [this can be shown formally using
the method of (2.7) and (2.8)]. We shall therefore drop this correction henceforth
and write the result t,,=+c(l)W    as the FCLTfor     general I(0) processes,

                IT.1
       T-1/2     1 u,*o$(l)w(~)            = oW(.),                                                    (2.9)
                s=l

where w = ~,c( 1).3
   Suppose u, is an I(1) process with Au, = u, and, as is assumed throughout,
Eui < co. Then the levels process of u, obeys the FCLT (2.9): TP 1’2ulPI =
 T-“2C~\u,+        T-1i2u,=oW(.),      where T l/22(0 A 0 by Chebyshev’s inequality.
A special case of this is when u0 is fixed and finite.
   The result (2.9) provides a concrete link between the assumptions          (2.2) and (2.3)
used to characterize      an I(1) process, the BeveridgeeNelson        decomposition    (2.6)
and the limit theory which will be used to analyze statistics based on I( 1) processes.
Under (2.2) and (2.3), the partial sum process is dominated by a stochastic trend, as
in (2.6). In the limit, after scaling by T ‘I2 , this behaves like w times a Brownian
motion, where w2 = 27cs,(O) is the zero-frequency       power, or long-run variance, of G’,.
Thus the limiting behavior of u,, where Au, = u,, is the same (up to a scale factor)
for a wide range oft(L) which satisfy (2.2). It is in this sense that we think of processes
which satisfy (2.1)-(2.3) as being I(0).


2.3.    Examples        and preliminary       results

The FCLT and the CMT provide a powerful set of tools for the analysis of statistics
involving I(1) processes. The examples in this section will be of use later but are
also of independent   interest.

Example        1. Sample moments of I( 1) processes

A problem mentioned in Section 2.2 was the surprising behavior of the sample mean
of an I(1) process. The limiting properties of this and higher moments are readily
characterized   using the tools of Section 2.2. Let u, be I(l), so that Au, = u,, and let
u0 = 0. Then,


       T-“2U=          T-3$u,=         T-’         .f (T-1’2+         1(T-1’2u,,,,)dA:+   T-3I2~,,
                                               t=1              s 0

                                                                                                     (2.10)

   3Formally, the process on the left-hand side of (2.9) is an element of D[O, 11, the space of functions on
[0, I] that are right-continuous      and have left-hand limits. However, the discontinuous      partial sum
process is asymptotically    equivalent to 5,,T~C[0, I], for which Theorem I applies. See Billingsley’(1968,
ch. 3) or Ethier and Kurtz (1986) for a treatment of convergence on D[O, 11.
2152                                                                               J.H. Stock


where the final equality follows by definition of the integral. The final expression in
(2.10) can be written T-‘%i = hI(T-lh,T.I)      + T-‘h,(T-“2u,,.,),    where h, and h,
are functions   from [0, l] + 3, namely h,(f) = Jkf(1.) dl, and h2(,f) = f(1). Both
functions are readily seen to be continuous   with respect to the sup-norm, so by (2.9)
and the continuous    mapping theorem,


       h,(T~l’2u,,.,)=>h,(oW) = 0
                                         s 0
                                               1

                                                   W(A) d1.




so T-1h,(T-‘i2u,,.,)   A0 and T- ‘%Ii~o~~ W(A)di., which has a normal distribu-
tion (cf. footnote 2).
   This approach can be just as easily applied to higher moments, say the kth
moment.


                                                                                       (2.11)


where the convergence follows from the FCLT and the CMT.
   The final expression in (2.11) uses a notational   convention which will be used
commonly     in this chapter: the limits on integrals over the unit interval will be
omitted, so for example JWk denotes jA( W(Iw))kdA. S imilarly, the stochastic (It6)
integral size W(A) dG(i) is written SW dG for two continuous-time           stochastic
processes W and G.

Example       2. Detrended    I( 1) processes

Because of the presence of the deterministic term d, in (1. l), many statistics of interest
involve detrending.   It is therefore useful to have limiting representations        of the
detrended series. The most common form of detrending             is by an ordinary least
squares (OLS) regression of y, on polynomials       in time, the leading cases being
demeaning and linear detrending. Let


       Y;=Y,-        T-’ f    Y,,
                        s=1

       Y:=Yt-&-BIL                                                                   (2.12b)

where (ii,, /;i,) are the OLS estimators of the parameters in the regression of y, onto
(1, t). If d, = /I,, then (2.12a) applies, while if d, = /I’, + /I, t, then (2.12b) applies.
Ch. 46: Unit Roots, Structural Breaks and Trends                                                    2753


   As in the previous example, suppose that U, is I(l), so that (2.9) applies. NOW
yf = u,-   T-lC~zl~S,    so T-l/Zyp      = T-“%         - T-“‘U. The CMT and (2.10)
thus imply that T- 1’2y~T.l=Sw{ F[.) - SW>, IF1      so that the demeaned I(1) process
converges to a “demeaned” Brownian motion. Similar arguments, with a bit more
algebra, apply to the detrended case. Summarizing these two results, if U,is a general
I(1) process so that Au, = u, where u, satisfies (2.1)-(2.3) and Eut < co, then we have4

      T-liZy&.I*oW”(~),          where W“(n) = W(1) -              W,                            (2.13a)
                                                               s

                -wWr(.),
      T - 1’2y;Tl                where W’(A)= W(A)-(4-62)                   W-(121-6)         sW(s)ds.
                                                                        s                 s
                                                                                                (2.13b)

Perron (1991~) provides expressions extending (2.13) to the residuals of an I(1)
process which has been detrended by an OLS regression onto a pth order
polynomial in time.
   These results can be used to study the behavior of an I( 1) process which has been
spuriously detrended, that is, regressed against (1, c) when in fact y, is purely
stochastic. Because the sample R2 is 1 - {I,‘= 1(y)I:)*/CT=1(y:)‘}, the results (2.13) and
the CMT show that RZ has the limit R2 =S 1 - {s(Wr)‘/s( WP)2), which is positive
with probability one; that is, the regression R2 is, asymptotically, a positive random
variable. It follows that the standard t-test for significance of p1 rejects with
probability one asymptotically even though the true coefficient on time is zero
[Durlauf and Phillips ( 1988)15. Next, consider the autocorrelogram of the detrended
process, P&) = 9,,(CT~l)/&(O) = h&T- 1/2y;r.1), say, where &(j) = (T - lj I)-’ x
XT=,j, + ly:y:_, j,. Because h, is a continuous mapping from D[O, l] to O[O, 11, the
FCLT and CMT imply that or * p*, where p*(1) = (1 - A)- ‘If= 1W’(s) W’(s - A)ds/
[Wr2, 0 < 2 < 1. Thus, in particular, the first k sample autocorrelations converge in
probability to one for k fixed, although it eventually declines towards zero. Nelson
and Kang (198 1) show, using other techniques, that the autocorrelogram dips below
zero, suggesting periodicity which spuriously arises from the detrending of the I( 1)
process. The results here indicate that this is an asymptotic phenomenon, when the
autocorrelation is interpreted as a fraction of the sample size.

Example 3. Cumulated detrended I(0) processes

Section 4 considers testing for a unit moving average root when it is maintained
that there is a deterministic trend. A statistic which arises in this context is the
   4Derivations   of W’ arc given in the proof of Theorem 5.1 of Stock and Watson (1988b) and in Park
and Phillips (1988); the result can also be derived from Theorem 2.1 of Durlauf and Phillips (1988). As
Park and Phillips (1988) demonstrate,     W’ can be thought of as detrended Brownian motion, the residual
of the projection of W onto (1,s).
   ‘Phillips (1986) gives similar results for regressions with two independent  random walks.
2754                                                                                                      J.H. Stock


cumulation     of an I(0) process, which has been detrended by OLS. The asymptotics
of this process are also readily analyzed using the FCLT and the CMT.
   For this example, suppose that u, is a general I(0) process and U, = u,, where V,
satisfies (2.1))(2.3). Consider the demeaned case, and define the statistic

                                  LTJ.1
       Y;,.(%) = T- “’ c yi,
                                  s=l

so
                                  ITAl                     CT21
       Y;,(l.)=           T-1'2   1 (us-~)=      T-‘/z     1     u,_            Tm1’2 f        u,.
                                  s= 1                     SE1                           f=l



Then (2.9) and the CMT yield the limit Yz, =~o@‘, where B”(A) = w(A) - AW(1).
The process BP is a standard Brownian bridge on the unit interval, so called because
it is a Brownian motion that is “tied down” to be zero at 0 and 1. Similarly, define
 Y:,(A) = T- 1’2C&ajyz; then YbT 3 wE, where B’ is a second-level          Brownian
bridge on the umt interval, given by B’(1) = W(A) - APV(l) + 6A(1 - 1”){+ W( 1) - SW)
[MacNeill (1978)]. Collecting these results, we have


       T-1’2       c      yr*wB’(.),      B’(1”) = W(A) - iW( l),                                          (2.14a)
                   s=1




             c y:=>oB’(.),
                   LT.1
       T- 1’2
            s=1
                                          B”(A)= H’(+APV(l)+61.(1               -A){+‘(l)-SW},

                                                                                                           (2.14b)

   MacNeill (1978) extended these results to kth order polynomial    detrending.    Let
 Yt&(A) = T-“2C~~jy~k)
                                                                                                     t,
                           be the process of cumulated    kth order detrended     data,
where y,(k’ is the residual from the OLS regression of y, onto (1,         , tk). Then
Ytk =+WIP - l), where Bck’ is a kth level generalized  Brownian bridge, expressions
for which are given by MacNeill (1978, eq. 8).

Example       4. Processes          with an autoregressive         root local to unity

One of the issues considered in Section 3 is the asymptotic properties of statistics
when the process is nearly I(l), in the sense that the largest root of the process is
local to unity. The starting point in these calculations  is characterizing the large-
sample behavior of the series itself when the root is close to one. Let U, obey

       u,=cIu,_,          +u,, where          do= 1 +c/T          and   Eu~-c CO.                            (2.15)

This is the local-to-unity  model considered  (under various assumptions on the
disturbances  ut) by Bobkoski (1983), Cavanagh (1985), Chan and Wei (1987) and
Ch. 46: Unit Roots, Structural Breaks and Trends                                                         2755


Phillips (1987b). The treatment here follows Bobkoski (1983). In particular, we use
the method of proof of Bobkoski’s (1983) Lemma 3.4 to generalize his local-to-unity
representations     from his case of i.i.d. disturbances to general I(0) disturbances     which
satisfy (2.1))(2.3). As we shall see, this extension is a straightforward       application   of
the FCLT (2.9) and the CMT.
   Use recursive substitution     in (2.15) to write u, as

      y-- l/2u    _ T-        112
                 1-

                                    1-l
                  =   T-lj2          c     (u’-~-      l)u,+   T-1/2    i    v,+   T-li2cc’u,

                                    s= 1                               s=l



                  =   (ct -    1):I~cx-~-~(
                                  1                      T-i/2$1~r)+           ~~~~~~~~~~       ~-+h,


                  = k,(o,S,,)(tlT)                  + o,(1).                                            (2.16)

The third equality in (2.16) obtains as an identity by noting that ,r - 1 = (IX- l)CiZ+~j
and rearranging summations. The final equality obtains by noting that (1 + c/T)‘~” =
exp(ci) + o(l) uniformly in J., 0 < 1. < 1, and by defining k4(f)(I.) = CIAec(‘-“‘f(s)ds+
f(i), where toT is defined in Section 2.2. The op( 1) term in the final expression arises
from the assumption      Eut < a, so T- li2u0 = oP( I), and from the approximation
(1 + c/T)[~“] E exp(c2).
    As in the previous examples, k, is a continuous        functional,  in this case from
 C[O, l] to C[O, 11. Using the FCLT (2.9) and the CMT we have

      T-“2~t,.l~k,(wW)()                        = ml+‘,(.),                                             (2.17)

where W’,(n) = cJG e c(‘-s)W(s) ds + W(A). The stochastic process WC is the solution
to the stochastic differential equation,     dw, = c WC(%)d1. + d W(2) with W,(O) = 0.
Thus, for Mlocal-to-unity,   T - 1i2uCTIconverges to w times a diffusion, or Ornstein-
Uhlenbeck, process.

A remark on the interpretation of limiting jiinctionals of‘ Brownian motion.            The
calculations    of this section ended when the random variable of interest was shown
to have a limiting representation    as a functional of Brownian motion or, in the local-
to-unity case of Example 4, a diffusion process. These representations        show that the
limiting distribution exists; they indicate when a limiting distribution is nonstandard;
and, importantly,      they show when and how nuisance parameters            describing the
short-run dependence of u, enter the limiting distribution.      Because W is a Gaussian
process, the results occasionally yield simply-evaluated      distributions.  For example,
W(l),lW, and JsW h ave normal distributions.         However, in most cases the limiting
distributions    are nonstandard.
2756                                                                                      J.H. Stock


   This leads to the practical question of how to compute limiting distribution
functions, once one has in hand the limiting representation           of the process as a
functional of Brownian motion. The simplest approach, both conceptually             and in
terms of computer programming,         is to evaluate the functional     by Monte Carlo
simulation using discretized realizations of the underlying Brownian motions. This
is equivalent to generating pseudo-data j, from a Gaussian random walk with PO = 0
and with unit innovation      variance and replacing W by its discretized realization.
For example, W(1)’ would be replaced by (T-“‘j,)’            and W”(.) would be replaced
by T- 1’2{j$T.l - T-lx,‘= ,$,}. For T sufficiently large, the FCLT ensures that the
limiting distribution    of these pseudo-random      variates converges to those of the
functionals   of Brownian motion. The main disadvantage          of this approach is that
high numerical accuracy requires many Monte Carlo repetitions. For this reason,
considerable effort has been devoted to alternative methods for evaluating some of
these limiting distributions.   Because these techniques are specialized, they will not
be discussed in detail, although selected references are given in Section 2.4.



2.4.   Generalizations    and additional mferences

 The model (2.1)-(2.3) provides a concise characterization              of I(0) processes with
 possibly infinitely many nuisance parameters describing the short-run dependence,
 but this simplicity comes at the cost of assuming away various types of nonstation-
 arity and heteroskedasticity     which might be present in empirical applications.            The
 key result used in Section 2.3 and in the sections to follow is the FCLT, which
 obtains under weaker conditions than stated here. The condition (2.2) is weakened
 in Brown’s (1971) FCLT, which uses the Lindeberg                condition     and admits un-
 conditional   heteroskedasticity    which is asymptotically     negligible, in the sense that
 T-‘z;&:         -+a:. The result (2.9) for linear processes can be obtained                 under
 Brown’s (1971) weaker conditions        by modifying the argument in Section 2.2; see
 Hall and Heyde (1980, Chapter 4) and Phillips and Solo (1992).
    An alternative    approach is to use mixing conditions,         which permit an explicit
 tradeoff between the number of moments and the degree of temporal dependence
in u, and which admit certain nonstationarities      (which are asymptotically          negligible
in the sense above). This approach was introduced            to the unit roots literature by
 Phillips (1987a), who used Herrndorf’s (1984) mixing-condition              FCLT, and much
of the recent unit roots literature uses these conditions. Phillips (1987b) derives the
local-to-unity    result (2.17) using Herrndorf’s (1984) mixing-condition           FCLT.
    An elegant approach to defining I(0) is simply to make the high-level assumption
that u, is I(0) if its partial sum process converges weakly to a constant times a
standard Brownian motion. Thus (2.9) is taken as the assumption                 rather than the
implication    of (2.1)-(2.3). With additional     conditions      assuring convergence           of
sample moments, such as sample autocovariances,               this “high-level”      assumption
provides a general definition of I(O), which automatically             incorporates      u, which
Ch. 46:   Unit   Root,s, Structural      Breaks und Trends                             2757



satisfy Herrndorf’s (1984) FCLT’s. The gain in elegance of this approach comes at
the cost of concreteness.     However, the results in this chapter that rely solely on
the FCLT and CMT typically can be interpreted as holding under this alternative
definition.
   The FCLT approach is not the only route to asymptotic results in this literature.
The approach used by Fuller (1976) Dickey and Fuller (1979) and Sargan and
Bhargava (1983a) was to consider the limiting behavior of quadratic forms such as
C,r= ,u: expressed as $A,v], where q is a T x 1 standard normal variate; thus the
limiting behavior is characterized by the limiting eigenvalues of A,. See Chan (1988)
and Saikkonen      and Luukkonen      (1993b) for discussions      of computational  issues
involved with this approach.
    There is a growing literature      on numerical      evaluation    of these asymptotic
distributions.  In some cases, it is possible to obtain explicit expressions for moment
generating functions or characteristic functions which can be integrated numerically;
see White (1958, 1959), Evans and Savin (1981a), Perron (1989b, 1991a), Nabeya
and Tanaka (1990a, 1990b) and Tanaka (1990a). Finally, under normality,               exact
finite-sample   distributions   can be computed       using the Imhof method; see, for
example, Evans and Savin (198 1b, 1984).



3.   Unit autoregressive                roots

This section examines                 inference    concerning   c1in the model


      y, = d, + uI)         u,=c(u,-l           +u,,     t= 1,2,...,T                 (3.1)

 where CI is either close to or equal to one and u, is I(O) with spectral density at
 frequency zero of d/27c. Unless explicitly stated otherwise, it is assumed that u0
 might be random, with Euf, < co, and that u, is a linear process satisfying (2.1)-(2.3).
    The trend term d, will be specified as known up to a finite-dimensional      parameter
 vector /?. The leading cases for the deterministic    component   are (i) no deterministic
 term (d, = 0); (ii) a constant (d, = PO); and (iii) a linear time trend (d, = p,, + Prt).
 Extensions    to higher-order    polynomial    trends or trends satisfying more general
conditions    are typically straightforward      and are discussed only briefly. Another
possibility is a piecewise-linear    (or broken) trend [Rappaport     and Reichlin (1989),
 Perron (1989a, 1990b)], a topic taken up in Section 5.
    Most of the procedures for inference on CItreat the unknown parameters in the
trend term d, as nuisance         parameters,    so that many of the statistics can be
represented generally in terms of detrended data. Throughout,          yp denotes a general
detrended process with unspecified detrending. For specific types of detrending, we
adopt Dickey and Fuller’s (1979) notation: yr denotes demeaned data and y: denotes
linearly detrended data when the detrending is by OLS as in (2.12).
2758                                                                               J.H. Sfock


   The focus of this section is almost exclusively on the case in which there is at
most a single real unit root. This rules out higher orders of integration (two or more
real autoregressive   unit roots) and seasonal unit roots (complex roots on the unit
circle). These topics have been omitted because of space limitations.        However, the
techniques used here extend to these other cases. References on estimation             and
testing with seasonal unit roots include Hasza and Fuller (198 l), Dickey et al. (1984),
Chan and Wei (1988), Ghysels (1990) Jegganathan            (1991), Ghysels and Perron
(1993), Hylleberg et al. (1990), Diebold (1993) and Beaulieu and Miron (1993). See
Banerjee et al. (1992a) for an overview.
   In the area of testing when there might be two or more unit roots, an important
practical lesson from the theoretical       literature is that a “downward”        testing
procedure (starting with the greatest plausible number of unit roots) is consistent,
while an “upward” testing procedure (starting with a test for a single unit root) is
not. This was shown for F-type tests in the no-deterministic     case by Pantula (1989).
Based on simulation evidence, Dickey and Pantula (1987) recommend a downward-
testing, sequential t-test procedure. Pantula (1989) proves that the distribution        of
the relevant t-statistic under each null has the standard         Dickey-Fuller     (1979)
distribution.  Also, Hasza and Fuller (1979) provide distribution       theory for testing
two versus zero unit roots in an autoregression.



3.1.    Point estimation

The four main qualitative       differences between regressions        with I(1) and I(0)
regressors are that, in contrast to the case of I(O) regressors,      inference on certain
linear combinations   of regression coefficients is nonstandard,        with: (i) estimators
which are consistent       at rate T rather than at the usual rate fi;         (ii) limiting
distributions   of estimators and test statistics which are often nonstandard      and have
nonzero means; (iii) estimators which are consistent even if the regression misspecifies
the short-run dynamics, although, in this case, the limiting distributions           change;
and (iv) limiting distributions     which depend on both the true and estimated trend
specifications.
   These differences between I(0) and I( 1) regressors can be seen by examining the OLS
estimator of CY  in (3.1). First, consider the no-deterministic  case, so oi = CT= 2ytyt _ i/
C,‘= &_ i. When 1ct1< 1 and u, = E,, conventional       fi   asymptotics   apply and oi has
a normal limiting distribution,

       ifIx < 1,   T”‘(d - a) A   N(0,   1 - cr2),                                      (3.2)

which was derived by Mann and Wald (1943) under the assumptions         that E, is i.i.d.
and all the moments of E, exist.
   In contrast, suppose that the true value of LYis 1, and let u, follow the general
Ch. 46:   Unit   Roots, Structural       Breaks and Trends                                        2759



linear process (2.1)-(2.3). Then the OLS estimator                        can be rewritten,


                        T-’ it AY,Y,-,
                              t=2
      T(&-1)=                        T     ~
                          Tp2        2 yf-,
                                 1=2



                            T-‘(yZ,-my:)-               T-’ f: (AY,)'
                                                               1=2
                                                                                                  (3.3)
                                           r2     i~:-~
                                                  1=2



where the second line uses the identity y: - yf = 2C,T=,Ay,y,_ 1 + CTE2(AyJ2.
Although the conditions for Mann and Wald’s result do not apply here because of
the unit autoregressive  root, an asymptotic result for T(oi - 1) nonetheless can be
obtained   using the FCLT (2.9) and the CMT. Because Eni < co, T-‘12yl =
T - “‘(u, + vl) -% 0. Thus, because y, = u0 + C’= 1us,by (2.9) and the CMT, we have
T-‘i2yT=~W(1)        and T-2CtT=2yf_1 =z-w2~Ws?. Also, T - ‘CT= 2(Ay,)2 = y*,,(O) %
Y,,(O) = Y,(O). Thus,

                                         #V(l)2         - K)
      ifa = 1,        T(& -     l)=                             where   K =T,                   (3.4a)
                                                JW2,

This expression          was first obtained              by White (1958) in the AR(l) model with K = 1
(although his result was in error by a factor of $)         and by Phillips (1987a) for
general K.
   An alternative expression for this limiting result obtains by using the continuous-
time analogue     of the identity used to obtain the second line of (3.3), namely
IWdW=i(W(1)2        - 1) [Arnold (1973, p. 76)]; thus,



      ifa = 1,        T(oi - l)=                Wdw-       $c - 1)        w2.                   (3.4b)


This result can also be obtained from the first line in (3.3) by applying Theorem 2.4
of Chan and Wei (1988).
   The results (3.2) and (3.4) demonstrate  the first three of the four main differences
between I(0) and I(1) asymptotics. First, the OLS estimator of cI is “superconsistent”,
converging at rate T rather than ,,&. While initially surprising, this has an intuitive
interpretation: if the true value of ccis less than one, then in expectation  the mean
squared error E(y, - cly,_ 1)2 is minimized at the true value of c( but remains finite
for other values of cc In contrast, if CIis truly 1, then E(AyJ2 is finite but, for any
2160                                                                                   J.H. Stock


fixed value of CI# 1, (1 - clL)y, = by, + (1 - cr)y,_ 1 has an integrated          component;
thus the OLS objective function T- ‘C,TZ2(yt - ccy,_ J2 is finite, asymptotically,           for
CI= 1 but tends to infinity for fixed tl # 1. An alternative intuitive interpretation          of
this result is that the variance of the usual OLS estimator depends on the sampling
variability of the regressors, here CT= 2yf_ 1; but, because y, is I(l), this sum is O,( T*)
rather than the conventional       rate O,(T).
   Second, the limiting distribution       in (3.4) is nonstandard.      While the marginal
distribution   of W(l)* is XT, the distribution     of the ratio in (3.4a) does not have a
simple form. This distribution      has been extensively studied. In the leading case that
u, is serially uncorrelated,      then 0’ = y,(O) so that K = 1 and (3.4a) becomes
+( W( 1)2 - 1)/jW2 [and (3.4b) becomes j W d W/j W2], This distribution was tabulated
by Dickey (1976) and reproduced in Fuller (1976, Table 85.1). The distribution                 is
skewed, with asymptotic lower and upper 5 percent quantiles of - 8.1 and 1.28.
   Third, oi is consistent     for c1 even though the regression          of y, onto y,_i is
misspecified, in the sense that the error term v, is serially correlated and correlated
with (differences of) the regressor. This misspecification      affects the limiting distribu-
tion in an intuitive way. Use the definition of K to write




Because o* can be thought of as the long-run variance of u,, +(K - 1) represents the
correlation   between the error and the regressor, which enters as a shift in the
numerator of the limiting representation        but does not introduce inconsistency.   This
term can increase the bias of d in finite samples. Although this bias decreases at the
rate T-i, when u, is negatively serially correlated, so that +(K - 1) is positive, in
sample sizes often encountered       in practice this bias can be large. For example, if u,
follows the MA(l) process u, = (1 - HI+,, then +(K - 1) = e/(1 - e)‘, so for 8 = 0.8,
3(K - 1) = 20.
   To examine the fourth general feature of regressions with I(1) variables, the
dependence of limiting distributions       on trend specifications, consider the case that
d, = PO + /I, t. Substitute this into (3.1), transform both sides of (3.1) by (1 - crL), and
thus write


       y,=6,+6,t+cry,-,        +u,,      t= 1,2 ,...,   T,                                  (3.5)

where 6, = (1 - g)po + LX/~,and 6, = (1 - a)/3,. If both PO and pi are unrestricted,
(3.5) suggests estimating c( by the regression of y, onto (1, t, y,_ ,); if b, is restricted
a priori to be zero, then CIcan be estimated by regressing y, onto (1, yt_ i). Consider,
for the moment, the latter case in which d, = /I, where fi, is unknown. Then, by the
algebra of least squares, the OLS estimator of c(,oi”, can be written (after centering
Ch. 46: Unit Roots. Structural        Breaks and Trends                                    2761


and scaling) as


                       T-l i         AY,Y:- ,
                              t=2
      T(@-     l)=
                       r2       i     (YP~J’
                               1=2


                       t    T-‘(y’;2_y;2)-          T-’    ’ (AyJ2
                                                          x2
                       2
                                                                                       (3.6)




where yr_ 1 =Y~_~ -(T-       1)-‘Z~~2y,_1.
   The method for obtaining         a limiting representation    of T(&” - 1) under the
hypothesis that c( = 1 is analogous to that used for T(B - l), namely, to use the FCLT
to obtain a limiting representation     for T - “‘yr_ 1 and then to apply the continuous
mapping theorem. Expression (2.13a) provides the needed limiting result for the
demeaned levels process of the data; applying this to (3.6) yields


      T(@-     1)=${W”(1)2 - Wp(O)2-                 ti)/jWp2
                                                           ={jWYdW-+(K-       l)}/jM’f12

                                                                                       (3.7)

where the second representation     is obtained using PV’(O)= - SW.
    The detrended case can be handled the same way. Let 8’ denote the estimator of
rl obtained from estimating (3.5) including both the constant and time as regressors.
Then T(oi’ - 1) can be written in the form (3.6), with y: replacing yr. The application
of (2.13b) to this modification of (3.6) yields the limiting representation


      T(c?-    I)=+{        Wr(l)2 - Wr(O)2 - tc]/jWr2       = {jW’dW-+(c   I)}/jW?

                                                                                       (3.8)

   Because the distributions    of W, Wp and W’ differ, so do the distributions    in (3.4),
(3.7) and (3.8). When u, = E, so that K = 1, the distribution  of T(B” - 1) is skewed and
sharply shifted to the left, with asymptotic lower and upper 5 percent quantiles of
- 14.1 and - 0.13. With linear detrending, the skewness is even more pronounced,
with 5 percent quantiles of - 21.8 and - 2.66. This imparts a substantial bias to the
estimates of CY: for example, with T= 100 and u, = E,, the mean of 8’, based on the
asymptotic approximation       (3.8), is 0.898.
   Another feature of regression with I(1) regressors is that, when the regression
contains both I( 1) and I(0) regressors, estimators of coefficients (and their associated
2162                                                                                                       J.H. Stock


test statistics) on the I(1) and I(0) regressors, in a suitably transformed    regression,
are asymptotically     independent.  This is illustrated here in the AR(p) model with a
unit root as analyzed by Fuller (1976). General treatments           of regressions with
integrated regressors in multiple time series models are given by Chan and Wei
(1988), Park and Phillips (1988) and Sims et al. (1990). When u, has nontrivial
short-run dynamics so that w2 # y,,(O), an alternative approach to estimating c( is
to approximate     the dynamics of o, by a pth order autoregression,    u(L)u, = e,. In the
time-trend case, this leads to the OLS estimator, oi’, from the regression


       Ay,=60+6it+(~-l)y,_i                    + t      ajAY,-j+c,,               t=1,2       ,...,   T.        (3.9)
                                                  j=l


If u, in fact follows an AR(p), then e, = E, and (3.9) is correctly specified. To simplify
the calculation,    consider the special case of no deterministic      terms, conditional
homoskedasticity      and p = 1, so that y, is regressed on (y,_ i,Ay,_i).          Define
TT = diag( T 1/Z T), let a=(a,,a-l)‘,      let zl-i=(Ayt_i,yt_i),       and let d be the
OLS estimator’of a. Then

                                                           -1
       l-&3-a)=
                              (
                              3-F’ i
                                  1=2
                                        Zt_lZ;_lr;l
                                                         )( 5   3”;’
                                                                       t=2
                                                                             Z,_lE,
                                                                                      >
                                                                                          .




A direct application      of the FCLT and the CMT shows that Yg ‘CT= 2z,_ lzip 1Y, I*
dia&,,(0),         w2~W2), w h ere cc)= oJ( 1 - a(l)) (in the special case p = 1, a( 1) = al).
Similarly,


       r,’   i      Z,_lE,=       T-1'21i2A~,-~&p          T-l,i2~t-l~t)'.
             r=2



Because Ay,_ 1E, is a martingale     difference sequence which satisfies Theorem 1,
T~“2CT=2Ayt_1.zt%~*,        where ‘I* _ N(0, 01E(AyJ2). Direct application    of Chan
and Wei’s (1988) Theorem 2.4 (or, alternatively,   an algebraic rearrangement    of the
type leading to (3.4b)) implies that the second term has the limit o,oJW d W. From
Theorem 2.2 of Chan and Wei (1988), this convergence        is joint and moreover the
(W, q*) are independent.  Upon completing the calculation, one obtains the result


       { T1’2(Lil - a,), T(oi - l)} _i          N(O, 1 - ~:~>~@4~~dW’~2},                                     (3.10)


where asymptotically     the two terms are independent.    The joint asymptotic distri-
bution of { T1j2(b1 -a,),    T(B - l)} was originally obtained by Fuller (1976) using
different techniques. The result extends to values of p > 1 and to more general time
trends. For example, in the AR(p) model with a constant and a linear time trend,
T(&‘- l)=+(~,/w)~W~dW/f(W’)~.
Ch. 46: Unit Roots. Structural Breaks and Trends                                                          2163


   Ordinary least squares estimation is not, of course, the only way to estimate (x.
Interestingly, the asymptotic distribution is sensitive to seemingly minor changes
in the estimator. Consider, for example, Dickey’s et al. (1984) “symmetric     least
squares” estimator in the no-deterministic  case


                       i*Y,Yt-1
         a, = T-l                                                                                     (3.1 la)
                c     Y:   +    3(Y: + Y’,)
               r=2


Straightforward            algebra            and an application         of the FCLT   reveals that

                                       - + T- ’ i        (Ay,)’
                                                   t=2                        K
         T(cc,-      l)=                                               a-p                            (3.1 lb)
                                        T-l                                   2
                           T-2           c     Y: + +(Y: + Y$)
                                        1=2


so that T(@, - 1) is negative with probability     one.
    If point estimates are of direct interest, then the bias in the usual OLS estimator
can be a problem. For example, if one’s object is forecasting, then the use of a biased
estimator of (Ywill result in median-biased       conditional    forecasts of the stochastic
component.6      This has led to the development     of median-unbiased     estimators of ct.
This problem is closely related to the construction       of confidence intervals for czand
is taken up in Section 3.3.



3.2.      Hypothesis           tests

3.2.1.      Test of c( = 1 in the Gaussian AR(l)                        model

The greatest amount of research effort concerning     autoregressive unit roots, both
empirical and theoretical, has been devoted to testing for a unit root. Because of
the large number of tests available, a useful starting point is the no-deterministic
i.i.d. Gaussian AR( 1) model,

       Yt = NY, - 1 + 5,               E, i.i.d. N(0, a’),        t = 1,2,. . . , T,                   (3.12)


   ‘When (al < 1 and a is fixed, bi is also biased towards zero. In the Gaussian AR(l) model with d, = 0,
Hurwicz (1950) derives the approximation         Eoi = {(T’ ~ 2T+ 3)/(T2 - l)}x for a close to zero. When G(
is close to one, Hurwicz’s approximation      breaks down but the distribution   becomes well-approximated
using the local-to-unity   approximations    discussed in the next section, and the downward    bias remains.
Approximate     biases in the stationary   constant model are given by Marriot and Pope (1954). For an
application   of these bias expressions, see Rudebusch (1993). Also see Magnus anctpesaran         (1991) and
Stine and Shaman (1989).
2164                                                                                                     J.H. Stock


where y, = 0. Suppose further that rs2 is known, in which case we can set rr2 = 1.
Because there is only one unknown parameter, CI,the NeymanPearson            lemma can
be used to construct      the most powerful test of the null hypothesis       c1= a, vs.
the point alternative     c( = Cc.The likelihood  function is proportional     to L(a) =
k, exp( --$(a - E)‘CT= 2yf_ i), where k, does not depend on ~1. The Neyman
Pearson test of 01= 1 vs. c1= C?rejects if L(c()/L(l) is sufficiently large; after some
manipulation,   this yields a critical region of the form


       [T(a-I)]2T-2~y;_1-2T(E-l)~~1                              5 y,_,Ay,<k,                                (3.13)
                             t=2                                t=2




where k is a constant.
   The implication of (3.13) is that the most powerful test of c1= 1 vs. tl = &is a linear
combination      of two statistics, with weights that depend on a. It follows that, even
in this simplified problem, there is no uniformly most powerful (UMP) test of a = 1
vs. 1~1< 1. This difficulty is present even asymptotically: suppose that the alternative
of interest is local to one in the sense (2.15), so that Cr= 1 + f/T, where C is a fixed
constant. Then, T(& - 1) = C. Under the null


         T-2    i    yf_,,2T-’       5 yt_tAy,                        w2,   w(1)2 - 1 1
               t=2                  t=2




so both terms in (3.13) are O,(l). Thus, there is no single candidate test which
dominates on theoretical grounds, either in finite samples [Anderson (1948), Dufour
and King (1991)] or asymptotically.’
    From the perspective of empirical work, the model (3.12) is overly restrictive
because of the absence of deterministic        components  and because the errors are
assumed to be i.i.d. The primary objective of the large literature on tests for unit
autoregressive roots has, therefore, been to propose tests that have three characteris-
tics: first, the test is asymptotically similar under the general I(1) null, in the sense
that the null distribution     depends on neither the parameters of the trend process
(assuming the trend has been correctly specified) nor the nuisance parameters
describing the short-run dynamics of u,; second, it has good power in large samples;
and third, it exhibits small size distortions       and good power over a range of
empirically plausible models and sample sizes. The next three subsections, respec-
tively, summarize the properties of various unit root tests in terms of these three
characteristics.


    ‘This draws on Rothenberg (1990). Manipulation        of(3.13) shows that the Dickey-Fuller         (1979) p test,
which rejects if T(ci - 1) < k’ (where k’ < 0 for conventional    significance levels), is efficient against E = 2k’,
although this does not extend to the demeaned or detrended cases. We thank Thomas Rothenberg                      and
Pentti Saikkonen for pointing this out.
Ch. 46: Unit Roots. Structural   Breuks and Trends                                                    2165



3.2.2.    Tests of the general I( 1) null

This subsection describes the basic ideas used to generalize tests from the AR(l)
model to the general I(1) null by examining four sets of tests in detail. Some other
tests of the general I( 1) null are then briefly mentioned.
   If u, follows an AR(p) and d, = p,, + Pit, then the regression (3.9) serves as a basis
for two tests proposed by Dickey and Fuller (1979): a test based on the t-statistic
testing 01= 1, z*‘, and a test based on p’ = (Cr)AR/BJT(&- l), where d& is the
autoregressive    spectral density estimator (the AR estimator ofo”):


                                                                                                    (3.14)




where (a,, a,, . . . ,c?,) are the OLS estimators from (3.9), modified, respectively, to
omit t or (1, t) as regressors in the d, = /I0 or d, = 0 cases. In the time-trend    case,
under the null hypothesis u = 1 and the maintained      AR(p) hypothesis, the limiting
representations    of these statistics are



                                                                                                    (3.15)



neither of which depends on nuisance parameters.             Thus these statistics form the
basis for an asymptotically    similar test of the unit root hypothesis in the AR(p)/time-
 trend model. Their distributions       have come to be known as the Dickey-Fuller
(1979) “p” and “Y distributions         and are tabulated in Fuller (1976), Tables 8.51
and 8.5.2, respectively. In the constant-only       case (d, = PO), the only modification    is
that t is dropped as a regressor from (3.9) and W’ replaces W’ in (3.15). In the no-
deterministic   case, the intercept is also dropped from (3.9) and W replaces W’.
    In an important extension of Fuller (1976) and Dickey and Fuller (1979), Said and
Dickey (1984) used Berk’s (1974) results for AR( co) I(0) autoregressions         to analyze
the case that o, follows a general ARMA(p, q) process with unknown p, q. In this
case, the true autoregressive     order is infinite so the regression (3.9) is misspecified.
If, however, the autoregressive     order pT increases with the sample size (specifically,
pT-+ co, p;/T+O),       then Said and Dickey (1984) showed that the results (3.15)
continue to hold. Thus the Dickey-Fuller/Said-Dickey            tests have a nonparametric
interpretation,   in the sense that they are valid under a more general I(0) null with
weak conditions on the dynamics of u,.~

   8Berk’s (1974) conditions on c(L) (in the notation of (2.1)) are less restrictive than Said and Dickey’s
(1984) assumption     that v, obeys an ARMA(p, q). For a related discussion           and extension  to the
multivariate  case, see Lewis and Reinsel(l985)   and especially Saikkonen (1991).
2166                                                                                 J.H. Stock


   Alternative  tests were proposed by Phillips (1987a) and Phillips and Perron
(1988). They recognized that if K in (3.4) were consistently estimable, then T(oi - 1)
from the misspecified AR(I) model could be adjusted so that it would be asymp-
totically similar. This reasoning   led Phillips (1987a) to propose the corrected
statistics

                                                                          WdW
                                     g?? - l)&                    --f‘s
       Z,=      T(oS-- l)+                                                             (3.16a)
                                     Tp2 5 y:+                                w= ’
                                                                          s




                                                                                       (3.16b)




where I? and d2 are consistent estimators of K and III’, and where r is the t-statistic
testing for a unit root in the OLS regression of y, onto y,_, . Phillips and Perron
(1988) extended these statistics to the constant and time-trend cases by replacing
the regression of y, onto y,_ 1 with a regression of y, onto (1, y,_ r) in the constant
case or, in the linear-trend case, onto (1, t, yt- 1). The limiting distributions for these
two cases are as in (3.16), with Wb or W’, respectively, replacing W.
   Because +(K - 1) = &,(O) - 02)/02, the estimation          of the correction entails the
estimation    of 02. Phillips (1987a) and Phillips and Perron (1988) suggested
estimating o2 using a sum-of-covariances       (SC) spectral estimator (the SC estimator
of 02),

                    IT
       A2
       coSC =                    F        r*;(m),                                       (3.17)
                tn= c -IT   k(       T>



wherey,(m)= V- ml- ‘CtTz            (x, - X)(X,_,,, - X), k( .) is a kernel weighting func-
          A

                                                    lml   +   1


tion and G, is the residual from the regression of y, onto y,_ t, (1, y, _ t) or (1, t, y,_ 1)
in the no-deterministic,  constant or linear-trend   cases, respectively. The appropriate
choice of kernel ensures that S.& > 0 [Newey and West (1987), Andrews (1991)];
Phillips (1987a) and Phillips and Perron (1988) suggested using Bartlett (linearly
declining) weights. If [r increases to infinity at a suitable rate [e.g. $/T+O from
Phillips (1987a, Theorem 4.2); see Andrews (1991) for optimal rates], then c;)& A w2
as required. Like the SaiddDickey        tests, the Phillips/Phillips-Perron       tests thus
provide a way to test the general (nonparametric)       I( 1) null.
   A third test for the general I(1) null can be obtained .by generalizing         a statistic
derived by Sargan and Bhargava (1983a) in the no-trend and constant cases and
extended to the time-trend case by Bhargava (1986). They used Anderson’s (1948)
approximation     to the inverse of the covariance matrix to derive the locally most
Ch. 46: Unit Roots, Structural Breaks and Trends                                      2767


powerful invariant (LMPI) test [although the test is not LMPI if the true inverse
is used, as pointed out by Nabeya and Tanaka (1990b)l. The SarganBhargava
statistics, E,, E;, and &, are


              r2 i (Y,)’
                        t=1
       iiT=y-’                                                                     (3.18a)
              T- l 2 (AyJ2
                       1=2




              r2 i         (~3
       &--,             1=1
                                                                                  (3.18b)
              T-’ i           (AY,)'
                       t=2




                                                                                   (3.18~)




where     y;=yl-      T-lC,T=Iyt      and yf’=y,-&&‘t,           where E= T-‘C,T=lyr-
[(T+    1)/2(T- l)](yT - y,)and j$’ = (yT - y,)/(T- 1). Note that @ is the maximum
likelihood estimator (MLE) of ,4i under the null c1= 1 when u, is i.i.d. normal. Also,
the statistic d, is asymptotically       equivalent to minus one-half times the inverse of
the symmetric least squares estimator T(ii, - 1) in (3.11).
   These statistics have seen little use in empirical work because of their derivation
in the first-order case and because, in their form (3.18), the tests are not similar under
the general I(1) null. They are, however, readily extended to the general I(1) null.
While of independent         interest, this extension is worth explaining here because it
demonstrates      a simple way that a large class of tests of the unit root model can be
extended to the general I(1) case, namely, by replacing               yI by y,/&. A direct
application    of the FCLT and the CMT yields ET 3 K-~~W~, @_=> K-‘J( W’)2 and
i+-K_2      j( WB)2, where W’(E) = IV(n) - (1. - $W( 1) - SW. Thus, if li-’ is consistent,
modified Sargan-Bhargava            (MSB) statistics are obtained as R, = R2R”,, R; = g2E;
and Rt = 12’k& which are similar under the general I(1) null.
   These statistics can be summarized           using a compact functional notation. Note
that the demeaned          (say) MSB statistic with li;= y*,,(O)/ci, can be written as
RI+ = IIK~T-‘C,~= 1 Y;(t/T)2, where Y;(E,) = T- 1’2yrT,l. This suggests the notation

                 l-1

       MSB =                 f (JJ2 d;l,                                            (3.19)
                 J 1=0
2768                                                                                               J.H. Stock


where f(A) = O- ’ Y,(n), & ’ Y;(1) and &‘YB,(J*), respectively, in the three cases,
where Y,(I) = T- “*ytTsl and Y:(i) = T- “*yFTnl.
    The approach used to extend the SB statistic to the general I(1) null can be
applied to other statistics as well. The NeymanPearson                 test regions (3.13) have the
same drawback as the SB critical regions, that is, they depend on o under the general
 I( 1) null. Consider the no-deterministic        case under which (3.13) was derived. Then,
2T-‘CTZ2y_,Ayf           = (T-*/‘yT)* -y,(O) + o,(l), so the critical regions in (3.13) are
asymptotically      equivalent to critical regions based on (T(i - l))2T-2CT=2y:_1                -
 T(cl - l)( T - “*yT)*, which has the limiting representation                o*{F*~W* - CW(1)2}.
While this depends on w, if Q2 -%02 under the null and local alternatives,                     then
an asymptotically         equivalent    test can be performed           using the statistic P, =
d-2(C2T-2~~=2y~_1           - CT- ‘yi}. Because P,=z-C*~W* - EW( l)*, this test is asymp-
totically similar and is moreover asymptotically            equivalent to the NeymanPearson
 test in the case that u, is i.i.d. N(0, a*).
     When deterministic      terms are present, it is desirable to modify the P, statistic.
 A feature of the tests discussed so far is that they are invariant to the values of the
parameters describing the deterministic            terms (PO and pi in the linear-trend       case),
that is, a change in the value of b does not induce a change in the value of the test
statistic. This feature is desirable, particularly        in the case of p,,. For example, when
a test is performed         on a series in logarithms,         then a change in the units of
measurement       of the series (from thousands to millions of dollars, say) will appear,
after taking logarithms, as an additive shift in /IO. It is natural to require a test for
unit roots to be unaffected by the units of measurement,                which translates here into
requiring that the test be invariant to /IO.
    This line of reasoning led Dufour and King (1991), drawing on King (1980), to
develop most powerful invariant (MPI) finite-sample tests of cI = a, vs. c1= c~i, where
t1e is a general value, not necessarily            one, in the Gaussian         AR(l) model with
Eui < co. The finite-sample distribution          of these tests hinges on the Gaussian AR(l)
assumption and they are not similar under the general I(1) null. These were extended
by Elliott et al. (1992) to the general case using the same device as was used to extend
the Neyman-Pearson          tests to the statistic P,. The resultant statistics, P$ and P;, are
asymptotically      MPI against the alternative c = C. These statistics have forms similar
to P,, but are constructed         using demeaned and detrended series, where the trend
coefficients    are estimated       by generalized      least squares (GLS) under a local
alternative (c = C), rather than under the null. This “local” GLS detrending results
in intercept estimators which are asymptotically              negligible, so that P;=E-C~~W* -
Cl+‘(l)*. This suggests examining other unit root test statistics using local detrending.
One such statistic, proposed by Elliott et al. (1992), is their DickeyyFuller                 GLS
(DF-GLS)       statistic, in which the local GLS-demeaned                or local GLS-detrendcd
series is used to compute the r-statistic in the regression (3.9), where the intercept
and time trend are suppressed.’           The construction       of the P;,P;,     DF-GLV       and

  ‘The DF-GLS’ statistic is computed in two steps. Let z, = (1, t). (1) /I0 and PI are estimated  by GLS
under the assumption that the process   is an AR(l) with coefficient   E = 1 + F/T and u0 = 0. That is, PO
Ch. 46: Unit Roots. Structural     Breaks and Trends                                                          2769


DF-GLS’      tests requires the user to choose C. Drawing upon the arguments in King
(1988), a case can be made for choosing C so that the test achieves the power envelope
against stationary     alternatives (is asymptotically    MPI) at 50 percent power. This
turns out to be achieved by setting C = - 7 in the demeaned case and C = - 13.5 in
the detrended case.
   Another statistic of independent        interest is the so-called resealed range (R/S)
statistic which was proposed and originally analyzed by Mandelbrot           and Van Ness
(1968), Mandelbrot      (1975) and Mandelbrot       and Taqqu (1979). The statistic is


                 T- “2(max,= i,....ry, - mm*= l,...,TYr          1
         R/S=-                                                                                              (3.20)
                               T-’    i    (AyJ2                     .
                                     1=2



Although the R/S statistic was originally proposed as a method for measuring the
differencing parameter in a fractionally integrated (fractionally differenced) model,
the R/S test also has power against stationary roots in the autoregressive         model. In
functional    notation,    the statistic is supJ(A)-       infnf(lZ), which is a continuous
functional from C[O, l] to B’. As Lo (1991) pointed out, this statistic is not similar
under the general I(1) null, but if evaluated               using f(1) = T- 1’2yI,,1/Q it is
asymptotically      similar (note that this statistic needs no explicit demeaning      in the
d, = /i’e case). Thus, the asymptotic       representation     of this modified R/S statistic
under the general I( 1) null is sup, W(n) - inf, W(1).
    Although a large number of unit root tests have been proposed, many fall in the
same family, in the sense that they have the same functional representation.        It will be
shown in the next section that if two tests have the same functional representation
then they have the same local asymptotic power functions. However, as will be seen
in Section 3.2.4, tests which are asymptotically         equivalent under the null and local
alternatives can perform quite differently in finite samples.

3.2.3.     Consistency and local asymptotic power

Consistency. A simple argument proves the consistency of unit root tests which
can be written in functional      notation such as (3.19). Suppose that a test has the
representation    g(f), where g: C[O, l] -tB is continuous,         and f is T-“2y,,.,/&,
T- 1’2yFT.I/c&or T- 1’2y;PIjc3 in the no-deterministic,    demeaned or detrended cases,
respectively. If g(0) falls m the rejection region, then consistency follows immediately,
provided that the process being evaluated is consistent           for zero under all fixed


and /I1 are estimated by regressing [y,,(l - 07L)y,,. .(l_- aL)y,] onto [zr,(l - KC)z,,               ,(l - cX)Z,]:
call the resulting estimator &s. Detrended J, = yr - z&Ls is then computed. (2) The Dickey-Fuller
regression (3.9) is run using j$ without the intercept and time trend; the r-statistic on J,- 1is the DF-GLS’
statistic. The DF-GLS’          statistic is computed similarly except that the regressor t is omitted in the first
step. The DF-GLS’         statistic has the no-deterministic   Dickey-Fuller  r*distribution  and the distribution
of DF-GLS        is tabulated in Elliott et al. (1992).
2770                                                                                                 J.H. Stock


alternatives. As a concrete example, let d, = /I,, and consider the demeaned MSB
statistic (3.19) with f= 0-l Y;. The test rejects for small values of the statistic, so
consistency against the general I(0) alternative follows if Q- i Y; A 0. Now if U, is
I(O)then Pr[sup, ( Y;(;I)I > S] + 0 for all 6 > 0 [the proof is along the lines of (2.8)].
It follows that Q-i Y; LO if cj L k > 0 for some constant k under the I(O)
alternative. Thus, with this additional assumption, MSB’ = j(& ’ Y;(1))’ dA +
o,,( 1) A 0 under the fixed I(0) alternative, and the test is consistent.
   The assumption that d2 5 k > 0 for some constant k under the I(0) alternative
is valid for certain variants of both the SC and AR spectral estimators. For the AR
spectral estimator, this was shown by Stock (1988, Lemma 1). For the SC spectral
estimator, test consistency is an implication of Phillips and Ouliaris’ (1990, Theorem
5.1) more general result for tests for cointegration. These results, combined with
some additional algebra, demonstrate the consistency for the MSB, Z,, Z,, P, and
R/S statistics. lo

Local asymptotic power. Power comparisons are a standard way to choose among
competing tests. Because finite-sample distribution theory in nearly Z(1) models is
prohibitively complicated, research has focused on asymptotic approximations to
power functions. For consistent tests, this requires computing power against
alternatives which are local to (in a decreasing neighborhood of) unity. Applications
of asymptotic expansions commonly used in T”‘-asymptotic problems, in par-
ticular Edgeworth expansions and saddlepoint approximations, provided poor
distributional approximations for c1near unity [Phillips (1978); also, see Satchel1
(1984)]. This led to the exploration of the alternative nesting, cur= 1 + c/T;
important early work developing this approach includes Bobkoski (1983), Cavanagh
(1985), Phillips (1987a, 1987b), Chan and Wei (1987) and Chan (1988, 1989).
   The treatment here follows Bobkoski (1983) as generalized in Example 4 of
Section 2.3. The key observation is that, under the local-to-unity alternative (2.15),
the processes T- 1/2u1Pl =oW,(.), where WCis a diffusion process on the unit interval
satisfying d W,(A) = c W,(A) + d W(A) with W,(O) = 0. In addition, both the SC and
AR spectral estimators have the property that d2 *’ o2 under the local alternative.”
These results directly yield local-to-unity representations of those test statistics with
functional representations such as (3.19).

    toNot all plausible estimators of& will satisfy this condition. For example, consider the SC estimator
constructed   using not the quasi-difference    d - By;d_1, as in (3.17), but the first difference A$. These two
estimators are asymptotically     equivalent under the null, but under the alternative y, is overdifferenced.
Thus, the spectrum of Afl at frequency zero is zero under the I(O) alternative, the SC estimator of the
spectrum does not satisfy the positivity condition, and tests constructed         using the first-differenced SC
estimator are not in general consistent. [Precise statements of this result are given by Stock and Watson
(1988b) in the MA(q) case with I, fixed and by Phillips and Ouliaris (1990, Theorem 5.2) in the general
case.] This problem of overdifferencing      by imposing a = 1 when nuisance parameters are estimated also
results in the inconsistency    of Solo’s (1984) Lagrange multiplier (LM) test for a unit AR root in an
ARMA(p,q) model, as demonstrated          by Saikkonen (1993).
   “See Phillips (1987b) for the SC estimator and Stock (1988) for the AR estimator.
Ch. 46: Unit Roots. Structural   Breaks and Trends                                             2111


   As a concrete example, again consider the MSB’ statistic. Under the local-to-
unity alternative, Y!+-o( W, - IWJ = o WE. Thus, test statistics of the form g(6 i Y’“,)
have the local-to-unity     representation      g( W,“). An important    implication     is that the
local asymptotic power of these tests does not depend on the nuisance parameter
o, simplifying their comparison.
   Phillips (1987b, Theorem 2) showed that this framework bridges the gap between
the conventional    Gaussian I(0) asymptotics and the nonstandard               I( 1) asymptotics.
Specifically, as c + - cc the (suitably normalized) local-to-unity           approximations       for
 T(bi - 1) and the associated t-statistic approached their I(O) Gaussian limits and, as
c -+ + co, these distributions, respectively, tend to Cauchy and normal, in accordance
with the asymptotic       results of White (1958, 1959) and Anderson                (1959) for the
Gaussian AR(l) model with ICX/> 1.
   Another application of this approach is to derive the asymptotic Gaussian power
envelope for unit root tests, that is, the envelope of the power functions of the family
of most powerful unit root tests. Because there is no UMP test (or, in the time-trend
case, no uniformly most powerful invariant test), this envelope provides a concrete
way to judge the absolute asymptotic performance of various unit root tests. In the
no-deterministic    case, this envelope is readily derived using the local-to-unity             limit
(2.17) and the Neyman-Pearson           critical regions (3.13). Assume that (i) the process
is a Gaussian AR( 1) so that o2 = a:; (ii) En: < co; (iii) the alternative against which
the test is most powerful is local-to-unity,        so that F = T(i - 1) is fixed; and (iv) the
true process is local-to-unity      with c = T(cc - 1). Then, the probability          of rejecting
CI= 1 against the one-sided alternative          l&l - 1 is, asymptotically,


      Pr    (T(&-     1))2T-2    i
                                 t=2
                                       y:_i -2T(E-             l)T-’   i
                                                                       r=2
                                                                             yt_iAy,<k
                                                                                         1
                       Wz-CWc(1)2<k)
                                                  1,                                         (3.21)


where k and k’ are constants which do not depend on c. When c = C, the second
expression in (3.21) provides the envelope of the power functions           of the most
powerful (Neyman-Pearson)       tests and, thus, provides an asymptotic performance
bound on all unit root tests in the Gaussian model.
   This result is extended in several ways in Elliott et al. (1992). The bound (3.21) is
shown to hold if d, is unknown but changes slowly, in the sense that d, satisfies

             T
      T-’   1     (Ad,)‘+0       and      T-‘j2     max         ld,l+O.                      (3.22)
            I=1                                   f= l,...,T

If d, = &, + /IIt, then the bound (3.21) cannot be achieved uniformly in pi, but a
similar bound can be derived among the class of all invariant        tests, and this is
achieved by the Pi statistic. Although the bound (3.21) was motivated here for u, i.i.d.
2112                                                                                     J.H. Stock


N(O,aZ), this bound applies under the more general condition                      that u, obeys a
Gaussian AR(p).
   We now turn to numerical results for asymptotic                 power, computed using the
local-to-unity    asymptotic representations        of various classes of statistics. In addition
to the tests discussed so far, we include expressions               for the Park (1990) J(p, q)
variable-addition      test [also, see Park and Choi (1988)] and, in the no-deterministic
case, the modified asymptotically        LMPI test [invariant        under change of scale, this
test rejects for small values of (T- 1izyr/Q)2 and is obtained by letting c --, 0 in (3.13)
and rearranging].        Let W.f penote a general OLS-detrended             WC process, that is,
 Wf = WCin the no-determmtstic         case, W:(A) = W;(A) = W,(i) - j WCin the demeaned
case and W:(A) = W;(A) = WC(A)- (4 - 6n)l W, - (122 - 6)fs W,(s) ds in the detrended
case [cf. (2.13)]. Let Wf denote the asymptotic              limit of the Bhargava-detrended
process T - “‘yf3,., used to construct the Bhargava statistic (3.18~) in the detrended
case; specifically, W:(A) = W,(A) - (A - i) Wc(1) - s WC. Finally, let Vc(A)= W,(A) -
n{E+WE(l)+(l       -c+)3IrW,( Y)d r}, w h ere Zt = (1 - C)/(l - C + C2/3), denote the limit of
the detrended       process obtained      from local GLS detrending,          which is used to
construct the Pk and DF-GLS’             statistics. The local-to-unity     representations     for
various classes of unit root test statistics are given by the following expressions:


       b-class                         -l{
                                         w;(l)2 - w:(o)2 - l};                             (3.23a)



       Q-class
                                       -l/2
                                          {   w;(l)2   - w:(o)2 - 1 };                    (3.23b)



       SB-class         (Wf)”     (no-deterministic,       demeaned   cases);              (3.23~)
                    s


       SB-class         ( WF)2    (detrended      case);                                  (3.23d)
                    s

       R/S          IsiP1J W:(A) -        inf W,“(A);                                      (3.23e)
                                        J.c(O.1)


                        ( yj2
                   s
       J@, 1)      ~             - 1   (demeaned       case);                              (3.23f)
                        (WZ)”
                    s


                        (Wi)’
                   s
       JCL 2)      -            - 1    (detrended      case);                             w%)
                        (WZ)’
                   s
Ch. 46: Unit Roots. Structural     Breuks and Trends                                                          2113


       LMPI             W,( 1)2     (no-deterministic          case only);                                (3.23h)



       PT               c2
                            sw; -cwc(q2                (no-deterministic,      demeaned     cases);        (3.231)



                        C2 Vf - (C - l)VC(1)2              (detrended       case);                         (3.23j)
       PT
                          s
                                     - l/2

       DFPGLS           ;                        { Wc( 1)2 - Wc(O)2 - 1}      (demeaned     case);        (3.23k)


                                    - l/2
       DF-GLS           ;                    {   VC(l)2 - VC(0)’ - l}       (detrended    case).          (3.231)



The p class includes the Dickey-Fuller    (1979) p tests and the Phillips (1987a)/Phillips-
Perron (1988) 2, tests. The f class includes the Dickey-Fuller         (1979) t-tests and the
 Phillips (1987a)/PhillipsPerron     (1988) 2, tests. The SB class includes the Schmidt-
 Phillips (1992) test. Most of these representations        can be obtained        by directly
applying the previous results. For those statistics with functional representations
already given and where the statistic is evaluated           using OLS detrending           [the
SB-class (demeaned         case) and R/S statistics],    the results obtain as a direct
application   of the continuous    mapping theorem. In the cases involving detrending
other than OLS in the time trend case (the SB-class and DF-GLS’                 statistics), an
additional calculation must be made to obtain the limit of the detrended processes.
The other expressions follow by direct calculation.i2
   Asymptotic power functions for leading classes of unit root tests (5 percent level)
are plotted in Figures 1, 2 and 3 in the no-deterministic,       constant and trend cases,
respectively. i3 The upper line in these figures is the Gaussian power envelope. In
the d, = 0 case, the power functions for the t, p and SB tests are all very close to
the power envelope, so this comparison        provides little basis for choosing among
them. Also plotted in Figure 1 is the power function of the LMPI test. Although
this test has good power against c quite close to zero, its power quickly falls away
from the envelope and is quite poor for distant alternatives.


   r2References for these results include: for the p, Q statistics, Phillips (1987b) (Z, statistic) and Stock
(1991) (DickeyyFuller    AR(p) statistics); for the SB-class statistics, Schmidt and Phillips (1992) and Stock
(1988); for the P,- and DF-GLS      statistics, Elliott et al. (1992).
   ‘“The asymptotic     power functions were computed            using the functional   representations   in (3.23)
evaluated with discrete Gaussian random walks (T= 500) replacing the Brownian motions, with 20,000
Monte Carlo replications. Nabeya and Tanaka (1990b) tabulate the power functions for tests including
the SB and Q tests, although they do not provide the power envelope. Because they derive and integrate
the characteristic  function for these statistics in the local-to-unity     case, their results presumably    have
higher numerical accuracy than those reported here. Standard errors of rejection rates in Figures l-3
are at most 0.004. Some curves in these figures originally appeared in Elliott et al. (1992).
2114                                                                                               J.H. Stock


   In the empirically more relevant cases of a constant or constant and trend, the
asymptotic power functions of the various tests differ sharply. First, consider the
cased, = /?,. Perhaps the most commonly used test in practice is the DickeyyFuller/
Said-Dickey    t-test, Q@;however, its power is well below not just the power envelope
but the power of the 6” (equivalently,         Zd) test. The SB-class statistics have




                                                                                    --
                                                                               --
                                                                          --
                                                                   _--
                                               --
                                   /-                     LMPI




                01                                                                             I
                OO      4      8        12                i6             20    24        28   32

                                                     -c


                                             Figure            1




                OO      4      a        12                16             20    24        28   32
                                                    -c


                                             Figure            2
Ch. 46: Unit Roots, Structural Breaks and Trends                                               2775




                   0

                   OO       4       8       12            16   20   24     28      32



                                                     -c

                                                 Figure    3



asymptotic power slightly above the jY’ statistics, particularly     for power between
0.3 and 0.8, but remains well below the envelope. In contrast, the asymptotic local
power function of the Pt test, which is, by construction,        tangent to the power
envelope at 50 percent power, is effectively on the power envelope for all values of
c. Similarly, the DF-GLS‘     power function is effectively on the power envelope.
    Pitman efficiency provides a useful way to assess the importance      of these power
differences. Pitman’s proposal was to consider the behavior of two tests of the same
hypothesis against a sequence of local alternatives, against which at least one of the
tests had nondegenerate      power. The Pitman efficiency [or asymptotic           relative
efficiency (ARE)] is the ratio of the sample sizes giving, asymptotically,       the same
power for that sequence. In conventional             fi-normal     asymptotics,    often the ARE
can be computed as a ratio of the variances entering the denominators                    of the two
Studentized     test statistics. Although this approach is inapplicable            here, the ARE
can be calculated using the asymptotic              power functions. Suppose that two tests
achieve power /I against local alternatives cl(B) and cZ(b); then the ARE of the first
test relative to the second test is ci(fi)/c,(/?) [Nyblom and Makelainen (1983)]. Using
this device, the ARE of the P; test, relative to the optimal test, at power of 50 percent
is 1.O, by construction,      and the ARE of the DF-GLS’        test is effectively 1. In contrast,
the ARE’s of the SB-, p- and ?-class tests, relative to the Pt test, are 1.40, 1.53 and
1.91. That is, to achieve 50 percent power against a local alternative                    using the
DickeyyFuller      t-statistic asymptotically     requires 90 percent more observations        than
are needed using the asymptotically         efficient P; test or the nearly efficient DF-GLS’
test.
2116                                                                                                J.H.   Stock


    The results in the detrended case are qualitatively        similar but, quantitatively,     the
power differences are less. The Y-class statistics have low power relative to the
envelope and to the SB- and ,Y-class tests. The SB-class tests have power slightly
above the b’-class tests and all power functions are dominated by the P; test. Some
of the other tests, in particular the R/S test, have power that is competitive with the
MSB- and fir-class tests. At 50 percent power, the Pitman efficiency of the Q tests is
 1.39 and of the 1 tests is 1.25. Interestingly,      the power function of P; actually lies
above the power function of z*‘,even though P; involves the additional estimation
of the linear-trend    coefficient /II. Comparing the results across the figures highlights
a common theme in this literature: including additional               trend terms reduces the
 power of the unit root tests if the trends are unnecessary.14
    So far, the sampling frequency has been fixed at one observation                per period. A
natural question is whether power can be increased by sampling more frequently,
for example, by moving from annual to quarterly data, while keeping the span of
the data fixed. A simple argument, however, shows that it is the span of the data
which matters for power, not the frequency of observation. To be concrete, consider
the demeaned case and suppose that the true value of CIis 1 + cl/T, based on T
annual observations,      where c1 is fixed. Suppose that the MSB statistic is used with
sufficiently many lags for cG2to be consistent. With the annual data, the test statistic
has the limiting representation        j( W;,)‘. The quarterly test statistic has the limiting
representation      S(WQ2, where c4 is the local-to-unity         parameter at the quarterly
frequency and the factor of 4 arises because there are four times as many quarterly
as annual observations.        Because tl = 1 + cl/T at the annual level, at the quarterly
level this root is ~1~‘~z 1 + (cJ4T) = 1 + (c4/T), so c4 = cJ4. Thus, I(W&J2 = @‘;I)2
and the quarterly and annual statistics have the same limiting representations                and,
hence, the same rejection probabilities.          Although there are four times as many
observations,     the quarterly root is four times closer to one than the annual root,
and these two effects cancel asymptotically.            For theoretical     results, see Perron
(1991b); for Monte Carlo results, see Shiller and Perron (1985). More frequent
observations,     however, might improve estimation          of the short-run dynamics, and
this, apparently,     led Choi (1993) to find higher finite-sample             power at higher
frequencies in a Monte Carlo study.

The case of uO drawn from its unconditional distribution.            The preceding analysis
makes various assumptions         about u 0: to derive the finite-sample Neyman-Pearson
tests, that ue = 0 (equivalently,    u0 is fixed and known) and for the asymptotics, that

    i4Asymptotic     power was computed for the Dickey-Fuller      (1981) and Perron (1990a) F-tests, but this
is not plotted in the figures. These statistics test the joint restriction that a = 1 and that 6, = 0 in (3.5)
or (3.9). Unlike the other tests considered here, these F-tests are not invariant to the trend parameter
under local and fixed alternatives. The power of the two F-tests depends on p, under the alternative, so
for drifts sufficiently large their power functions can, in theory, exceed the power envelope for invariant
tests. If /I, =0 or is small, the F-tests have very low asymptotic         power; well below the f-class tests,
Perron’s (1990a) calculations      indicate, however, that for p, sufficiently large, the F-tests can have high
(size-adjusted) power.
Ch. 46: Unit Root,s. Structural   Breaks and Trends                                             2771


T- r’*uO LO,      as specified after (2.9). Under the null, the tests considered                  are
invariant to /I, and thus to uO. Although this finite+,               case has received the vast
majority of the attention in the literature, some work addresses the alternate model
that u0 is drawn from its unconditional        distribution     or is large relative to the sample
size. In finite samples, this modification         is readily handled and leads to different
tests [see Dufour and King (1991)]. The maximum likelihood estimator is different
from that when u0 is fixed, being the solution to a cubic equation [Koopmans                 (1942);
for the regression case, Beach and MacKinnon               (1978)].
   As pointed out by Evans and Savin (1981b, 1984) and further studied by
Nankervis and Savin (1988), Perron (1991a), Nabeya and Sorensen (1992), Schmidt
and Phillips (1992) and DeJong et al. (1992a), the power of unit tests depends on
the assumption      about uO. Analytically,     this dependence arises automatically           if the
asymptotic approximation         relies on increasingly       finely observed data, in Phillips
(1987a) terminology,      continuous      record asymptotics         [see Perron (1991a, 1992),
Sorensen (1992) and Nabeya and Sorensen                     (1992)]. Alternatively,     equivalent
expressions     can be obtained       with the local-to-unity          asymptotics    used here if
 T-“*IL, = O,(l) [in the stationary AR(l) case, a natural device is to let T-“*u, be
distributed    N(0, af/T(l - CX~))-+N(0, - ~cT~/c), where c < 0, so that an additional
term appears in (2.17)]. Elliott (1993a) derives the asymptotic power envelope under
the unconditional     case and shows that tests which are efficient in the unconditional
case are not efficient in the conditional        case in either the demeaned or detrended
cases. The quantitative    effect on the most commonly used unit root tests of drawing
u0 from its unconditional      distribution    is investigated in the Monte Carlo analysis
of the next subsection.

3.2.4.    Finite-sample size and power

There is a large body of Monte Carlo evidence on the performance                 of tests for a
 unit AR root. The most influential Monte Carlo study in this literature is Schwert
(1989), which found large size distortions in tests which are asymptotically            similar
 under the general I(1) null, especially the Phillips-Perron      (1988) Z, and Z, statistics.
A partial list of additional papers which report simulation evidence includes Dickey
and Fuller (1979), Said and Dickey (1985), Perron (1988,1989c, 1990a), Diebold and
Rudebusch (1991 b), Pantula and Hall (1991), Schmidt and Phillips (1992), Elliott
et al. (1992), Pantula et al. (1992), Hall (1992a), DeJong et al. (1992b), Ng and Perron
(1993a, 1993b) and Bierens (1993).
   Taken together, these experiments          suggest four general findings. First, all the
asymptotically    valid tests exhibit finite-sample size distortions for models which are
in a sense close to I(0) models. However, the extent of the distortion varies widely
across tests and depends on the details of the construction         of the spectral estimator
c3*. Second, the estimation         of nuisance     parameters   describing    the short-run
dynamics reduces test power, in some cases dramatically.          Third, these two observa-
tions lead to the use of data-dependent            truncation   or AR lag lengths in the
2778                                                                                                      J.H. Stock


estimation     of o2 and the resulting tests show considerable        improvements      in size
and power. Fourth, the presence of nonnormality         or conditional    heteroskedasticity
in the errors results in size distortions,     but these are much smaller than the dis-
tortions arising from the short-run dynamics.
    We quantify these findings using a Monte Carlo study with eight designs (data
generating     processes or DGP’s) which reflect some leading cases studied in the
literature. In each, y, = u,, where u, = au,_ 1 + II,. Five values of CIwere considered:
 1.0, 0.95,0.9,0.8   and 0.7. All results are for T= 100. The DGP’s are

       Gaussian    MA( 1):

                                                       0 = 0.8, 0.5,0, -0.5,              -0.8,             (3.24a)

       Gaussian    MA(l), u0 unconditional:             u, = E, -   !3~,_   1,   u.   -    N(0, y,(O)),

                                                        8 = 0.5,0,      - 0.5,                             (3.24b)

 where in each case E, - i.i.d. N(0, 1). The Gaussian MA( 1) DGP (3.24a) has received
 the most attention in the literature and was the focus of Schwert’s (1989) study. The
 unconditional     variant is identical under the null, but under the alternative            u0 is
drawn from its unconditional         distribution    N(0, y,(O)), where y,(O) = (1 + 8’ - 2&)/
(1 - a’). This affects power but the size is the same as for (3.24a). The unconditional
model is of particular interest because the power functions in Section 3.2.3 were for
the so-called conditional      (uO fixed) case.
    The tests considered      are: the Dickey-Fuller         fi statistic T(6i - l)/(l - CT= iSj)
 [where &,a,, . .,A, are ordinary least squares estimators                (OLSE’s) from (3.9)];
the Phillips (1987a)/Phillips_Perron          (1988) Z, statistic (3.16a); the Dickey-Fuller     z*
statistic computed from the AR(p + 1) (3.9); the MSB statistic (3.19) computed using
  *
o,,; the Schmidt-Phillips       (1992) statistic, which is essentially (3.19) computed using
&-; and the DF-GLS          of statistic of Elliott et al. (1992).”
    Various procedures for selecting the truncation              parameter   1, in O.& and the
autoregressive     order pT in ci)iR are considered. Theoretical and simulation evidence
suggest using data-based         rules for selecting 1,. Phillips and Perron (1988) and
DeJong et al. (1992b) use the Parzen kernel, so this kernel is adopted here.16 The
truncation     parameter 1, was chosen using Andrews’ (1991) optimal procedure for
this kernel as given in his equations (5.2) and (5.4). The AR estimator lag length pT
in (3.14) (with a constant but no time trend in the regression, in both the demeaned

    “The results here are drawn from the extensive tabulations     of 20 tests in 13 data generating processes
(DGP’s) in Elliott (1993b). Other tests examined include: the Dickey-Fuller         (1981) and Perron (1990b)
F-tests; the Phillips-Perron      Z, test; the modified R/S statistic; Hall’s (1989) instrumental     variable
statistic; Stock’s (1988) MZ, statistic; and the Park J(p,p + 3) tests for p = 1, 2. In brief, each of these
tests had drawbacks - distorted size, low power or both - which, in our view, makes them less attractive
than the tests examined here, so, to conserve space, these results are omitted.
   ‘6TheParzenkernelisgivenby:k(x)=1-6x2+6~x~3,O~~~~~~;k(x)=2(1-~~()3,~~~~~~1;and
k(x)=O,Ixl>      1.
2780                                                                                                J.H. Stock



                                                     Table 2
              Size and size-adjusted power of selected tests of the I(1) null: Monte Carlo results
            (5 percent level tests, detrended case, T= 100, y, = u,, u, = au,_ I + u,,v, = E,- BE,_
                                                                                                  ,).’
                                                                                            Unconditional:
                                                             MA(l),    0=                    MA( 1). 0 =
Test                              Asymptotic
Statistic                    a      Power           -0.8    -0.5      0.0    0.5    0.8    -0.5    0.0    0.5

DF-I’ AR(4)                1.00       0.05          0.03    0.05      0.05   0.06   0.37   0.05    0.05   0.06
                           0.95       0.09          0.07    0.07      0.07   0.08   0.09   0.07    0.08   0.08
                           0.90       0.19          0.10    0.12      0.13   0.16   0.18   0.12    0.14   0.17
                           0.80       0.61          0.24    0.28      0.32   0.43   0.49   0.28    0.32   0.44
                           0.70       0.94          0.40    0.45      0.53   0.71   0.78   0.45    0.52   0.72

DF-Q’ AR(BIC)              1.00       0.05          0.10    0.07      0.05   0.09   0.58   0.07    0.05   0.09
                           0.95       0.09          0.09    0.08      0.08   0.09   0.08   0.08    0.08   0.09
                           0.90       0.19          0.16    0.14      0.15   0.18   0.17   0.15    0.15   0.18
                           0.80       0.61          0.36    0.36      0.39   0.51   0.50   0.36    0.39   0.52
                           0.70       0.94          0.57    0.58      0.64   0.81   0.80   0.58    0.64   0.81
DF-r^’ AR(LR)              1.00       0.05          0.09    O.Jl      0.08   0.22   0.65   0.1 I   0.08   0.22
                           0.95       0.09          0.08    0.09      0.09   0.10   0.09   0.09    0.09   0.09
                           0.90       0.19          0.14    0.16      0.17   0.22   0.17   0.16    0.18   0.20
                           0.80       0.61          0.29    0.39      0.46   0.56   0.42   0.39    0.47   0.56
                           0.70       0.94          0.42    0.58      0.74   0.76   0.57   0.58    0.74   0.77

DF-p AR(BIC)               1.00       0.05          0.21    0.16      0.13   0.21   0.81   0.16    0.13   0.21
                           0.95       0.10          0.09    0.09      0.10   0.10   0.08   0.09    0.09   0.10
                           0.90       0.23          0.18    0.18      0.20   0.22   0.17   0.18    0.19   0.20
                           0.80       0.70          0.42    0.45      0.49   0.58   0.47   0.43    0.48   0.57
                           0.70       0.97          0.62    0.67      0.74   0.87   0.73   0.66    0.73   0.86
Z, SC(aut0)                1.00       0.05          0.00    0.01      0.05   0.65   J.00   0.01    0.05   0.65
                           0.95       0.10          0.09    0.09      0.11   0.10   0.09   0.09    0.10   0.09
                           0.90       0.23          0.19    0.20      0.25   0.25   0.16   0.20    0.23   0.21
                           0.80       0.70          0.56    0.62      0.74   0.73   0.44   0.62    0.73   0.70
                           0.70       0.97          0.89    0.92      0.98   0.97   0.72   0.92    0.98   0.97
MSB AR(BIC)                1.00       0.05          0.23    0.17      0.13   0.12   0.49   0.17    0.13   O.J2
                           0.95       0.10          0.10    0.09      0.10   0.10   0.08   0.09    0.09   0.09
                           0.90       0.25          0.19    0.20      0.21   0.21   0.16   0.18    0.19   0.19
                           0.80       0.73          0.42    0.45      0.48   0.50   0.42   0.41    0.44   0.46
                           0.70       0.97          0.60    0.65      0.69   0.74   0.69   0.61    0.64   0.69
MSB SC(auto)               1.00       0.05          0.00    0.01      0.03   0.46   0.99   0.01    0.03   0.46
                           0.95       0.10          0.10    0.10      0.11   0.11   0.11   0.09    0.10   0.10
                           0.90       0.25          0.24    0.24      0.28   0.27   0.22   0.21    0.24   0.23
                           0.80       0.73          0.63    0.66      0.75   0.74   0.42   0.61    0.70   0.65
                           0.70       0.97          0.89    0.91      0.97   0.94   0.42   0.86    0.93   0.89
DF-GLS’ AR(BIC)            1.00       0.05          0.1I    0.08      0.07   O.JJ   0.58   0.08    0.07   0.11
                           0.95       0.10          0.11    0.10      0.10   0.11   0.12   0.09    0.09   0.09
                           0.90       0.27          0.23    0.23      0.24   0.28   0.27   0.19    0.19   0.21
                           0.80       0.8 1         0.53    0.57      0.61   0.72   0.70   0.46    0.49   0.54
                           0.70       0.99          0.75    0.80      0.84   0.94   0.91   0.67    0.71   0.76

  “AR(BIC) indicates that the AR spectral estimator based on (3.9) with the time trend suppressed was
used. See the notes to Table 1.
Ch. 46: Unit Roots, Structural   Breaks and Trends                                                    2781


 and the detrended cases) was selected using the Schwartz (1977) Bayesian information
 criterion (BIG), with a minimum lag of 3 and a maximum of 8. For comparison
 purposes a sequential likelihood ratio (LR) downward-testing                 procedure with 10
 percent critical values, as suggested by Ng and Perron (1993b), was also applied to
 the Dickey-Fuller      t-statistic.’ 7
     The results for tests of asymptotic level 5 percent are summarized in Table 1 for
 the demeaned case and in Table 2 for the detrended case. For each statistic, the first
 column provides the asymptotic              approximation       to the size (which is always 5
 percent) and to the local-to-unity          power. The remaining entries for c1= 1 are the
 empirical size, that is, the Monte Carlo rejection rate based on asymptotic critical
 values. The entries for ICC/< 1 are the size-adjusted power, that is, the Monte Carlo
 rejection rates when the actual 5 percent critical value computed for that model
 with c( = 1 is used to compute the rejections. Of course, in practice the model and
 this correct critical value are unknown, so the size-adjusted             powers do not reflect
 the empirical rejections based on the asymptotic critical values. However, it is the
 size-adjusted powers, not the empirical rejection rates, which permit examining the
 quality of the local-to-unity           asymptotic    approximations      reported   in the first
 column.
     These results illustrate common features of other simulations.            Test performance,
 both size and power, varies greatly across the statistics, the models generating the
data and the methods used to estimate the long-run variance. The most commonly
 used test in practice is the Dickey-Fuller           z*statistic. Looking across designs, this
 statistic has size closer to its level than any other statistic considered here, with size
in the range 5-10 percent in both the demeaned and detrended cases with 8 6 0.5,
for both the AR(4) and BIC choices of lag length. However, as the asymptotic
comparisons       of the previous subsection        suggest, this ability to control size in a
variety of models comes at a high cost in power. For example, consider the case
13= -0.5. In the demeaned case with c( = 0.9, the DF-r* test has power of 0.22 (BIC
case) while the DF-GLS              test has power of 0.59. In the detrended         case, as the
asymptotic      results suggest, the power loss from using the DF-Q statistic is less,
Again in the 0 = - 0.5, CI= 0.9 case, the powers of the DF-Q and the DF-GLS
statistics are 0.14 and 0.23. Typically, the p- and SB-class tests also have better
size-adjusted power than the DF-z^ statistics.
    Three lag length selection procedures are compared for the DF ?fl and t*’statistics,
and the choice has important effects on both size and power. In the 8 = 0 case, for
example, using 4 lags results in substantial power declines against distant alternatives,
relative to either data-dependent           procedure. DeJong et al. (1992b) show that in-
creasing p typically results in a modest decrease in power but a substantial
reduction in size distortions.         The results here favor the BIC over the LR selector;

   “Alternative     strategies, both data-based  and not, were also studied, but they, typically, did not
perform as well as the procedures reported here and thus are not reported here to save space. In general,
among SC estimators,         the Andrews (1991) procedure studied here performed substantially   better (in
terms of size distortions and size-adjusted power) than non-data-based    procedures with I, = k(T/100)0~2
with k = 4 or 12. See Elliott (1993b).
2782                                                                                               J.H. Stock


a finding congruent with Hall’s (1992b) proof that the asymptotic null distribution
of the DF statistic is the same using the BIC as if the true order were known
(assuming the maximum possible lag is known and fixed). However, Ng and Perron
(1993b) provide evidence supporting               the sequential LR procedure. In any event,
currently     available     information      suggests using one of these two lag selection
procedures.
   Although       the size distortions        are slight for the cases with positive serial
correlation     in u,, the introduction        of moderate negative serial correlation          results
in very large size distortions         for several of the statistics. This is the key finding of
 Schwert’s (1989) influential Monte Carlo study and is one of the main lessons for
practitioners      of this experiment.       For several statistics, these size distortions         are
extreme. For example, for the Gaussian                      MA(l) process with 8 = 0.5, which
corresponds to a first autocorrelation            of u, of - 0.4, the detrended Phillips-Perron
Za statistic has a rejection rate of 65 percent. These large size distortions                       are
partially but not exclusively associated with the use of the SC spectral estimator.
 For example, the sizes of the MSB’/AR(BIC)                 test and Schmidt and Phillips’ (1992)
version of this test implemented               with the Parzen kernel, the MSB”/SC(auto)
statistic, are respectively 9 percent and 38 percent in the 0 = 0.5 case. Similarly,
the Z, test can be modified using an AR estimator                       to reduce the distortions
substantially,      although they remain well above the distortions                   of the DF-? or
DF-GLS         statistics. Ng and Perron (1993a) give theoretical                    reasons for the
improvement         of the AR over SC estimators.            Part of the problem is that the SC
estimators are computed using the estimated quasidifference                     of ya or y:, where the
quasidifference       is based on 8, which in turn is badly biased in the very cases where
the correction factor is most important               [see the discussion following (3.4b)].‘*
   Looking across the statistics, the asymptotic                 power rankings provide a good
guide to finite-sample          size-adjusted    power rankings, although the finite-sample
power typically falls short of the asymptotic power. As predicted by the asymptotic
analysis, the differences in size-adjusted             powers is dramatic. For example, in the
demeaned       8 = 0 case with c1= 0.9, the Dickey-Fuller                t-statistic (BIC case) has
power of 22 percent, Z, has power of 44 percent, and DF-GLS                          has power of 60
percent.
   There is some tradeoff between power and size. The DF-t statistic exhibits
the smallest deviation from nominal size, but it has low power. Other tests, such
as the Z, and MSB/SC (auto) statistics, have high size-adjusted                       power but very
large size distortions.       The DF-GLS         statistic appears to represent a compromise,
in the sense that its power is high - based on results in Elliott et al. (1992), typically
as high as the asymptotic point-optimal                test P, - but its size distortions     are low,

   *aConsistent with the asymptotic theory, introducing         generalized autoregressive conditional hetero-
skedasticity    [GARCH, Bollerslev (1986)] has only a small effect on the empirical size or power of any
of the statistics. Elliott (1993b) reports simulations      with MA(l) GARCH(1, 1) errors and coefficients
which add to 0.9. For example, for the DF-GLS        statistic, demeaned case, 0 = 0 or -0.5, size and power
(T= 100) differ at most by 0.03 from those in Table 1 for a = I to 0.7.
Ch. 46: Unit Roots, Structural   Breaks and Trends                                              2783


although not as low as the DF-r statistic. In the demeaned results, DF-GLS                  has
sizes of 0.07-0.11, compared to the DF-r (BIC) which has sizes 0.06-0.08 (except
in the extreme, 19=0.8, case). In the detrended           case, the DF-GLS         has sizes of
0.07-0.11, while DF-r has sizes in the range 0.05-0.10.
    Drawing   the initial value from its unconditional            distribution    changes the
rankings of size-adjusted power; in particular the size-adjusted power of DF-GLS
drops, particularly     for distant alternatives.   However, the DF-GLS        power remains
above the DF-r^ (BIC) power in both demeaned                 and detrended      cases, and, of
course, the large size distortions      of the other tests are not mitigated in this DGP.
Recent Monte Carlo evidence by Pantula et al. (1992) suggests that, in the correctly
specified demeaned         AR(l) model, better power can be achieved against the
unconditional     alternative    by a test based on a weighted symmetric least squares
estimator. However, the unconditional           case has been less completely studied than
the conditional      case and it seems premature        to draw conclusions      about which
tests perform best in this setting.

3.2.5.   Effects of misspecifying       the deterministic   trend

The discussion so far has assumed that the order of the trend has been correctly
specified. If the trend is misspecified, however, then the estimators of c( and the
tests of tl = 1 can be inconsistent   [Perron and Phillips (1987) West (1987,1988a)].
   This argument        can be made simply in the case where the true trend is
d, = /?, + /?, t with /?, a nonzero constant, but the econometrician            incorrectly uses
the constant-only      model. Because y, contains a linear time trend, asymptotically
the OLS objective function will be minimized by first-differencing                yt, whether or
not u, is I(l), and a straightforward     calculation shows that c?L 1.” It follows that
b and f tests will not be consistent. This inconsistency         is transparent      if one works
with the functional representation       of the tests: T- ’ Y!+* hP, where h”(A) = /3,(A - i).
In finite samples, the importance         of this omitted variable effect depends on the
magnitude      of the incorrectly omitted time-trend       slope relative to w [West (1987)
provides Monte Carlo evidence on this effect]. This problem extends to other types
of trends as well, and in particular to misspecification          of a piecewise-linear      trend
(a “broken” trend) as a single linear trend [see Perron (1989a, 1990b), Rappoport
and Reichlin (1989) and the discussion in Section 5.2 of this chapter].
   The analogy to the usual regression problem of omitted variable bias is useful
here: if the trend is underspecified,         unit root tests (and root estimators)             are
inconsistent, while if the trend is overspecified, power is reduced, even asymptotically.
This contrasts with the case of mean-zero I(O) regressors, in which the reduction
in power, resulting from unnecessarily           including   polynomials     in time, vanishes
asymptotically.      The difference is that while I(0) regressors are asymptotically


  “See West (1988a), Park and Phillips (1988) and Sims et al. (1990) for extensions of this result to
multiple time series models.
2784                                                                                             J.H. Stock


uncorrelated    with the included time polynomials,     I( 1) regressors are asymptotically
correlated (with a random correlation        coefficient). This asymptotic       collinearity
reduces the power of the unit root tests when a time trend is included. A procedure of
sequential testing of the order of the trend specification prior to inference on c1will
result in pretest bias arising from the possibility of making a type I error in the tests
for the trend order. This problem is further complicated           by the dependence of the
distributions   of the trend coefficients and test statistics on the order of integration
of the stochastic component.20


3.2.6.    Summary      and implications for empirical practice


 If one is interested in testing the null hypothesis that a series is I(1) - as opposed
 to testing the null that the series is I(0) or to using a consistent                         decision- or
 information-theoretic       procedure to select between the I(0) and I(1) hypotheses - then
 the presumption      must be that there is a reason that the researcher wishes to control
 type I error with respect to the I(1) null. If so, then a key criterion in the selection
 of a unit root test for practical                purposes   is that the finite-sample              size be
 approximately      the level of the test.
    Taking this criterion as primary, we can see from Tables 1 and 2 that only a
few of the proposed tests effectively control size for a range of nuisance parameters.
 In the demeaned          case, only the Dickey-Fuller             z^fl and DF-GLS’             tests have
 sizes of 12 percent or under (excluding the extreme 8 = 0.8 case). However, the z*’
 statistic has much lower size-adjusted power than the DF-GLS’                      statistic. Moreover,
 asymptotically,     the DF-GLS’         statistic can be thought of as approximately                  UMP
 since its power function nearly lies on the Neyman-Pearson                         power envelope in
 Figure 2, even though, strictly, no UMP test exists. When u0 is drawn from its
 unconditional     distribution,     the power of the DF-GLS’             statistic exceeds that of ?’
except against distant alternatives.            These results suggest that, of the tests studied
 here, the DF-GLS’          statistic is to be preferred in the d, = PO case.
    In the detrended case, only t^’ and DF-GLS’                  have sizes less than 12 percent
(excepting 0 = 0.8). The size-adjusted              power of the DF-GLS’             (BIC) test exceeds
that of the t^’ (BIC) test in all cases except u. unconditional,                   8 = 0.5 and a = 0.7.
Because the differences in size distortions              between the ?’ and DF-GLS’                  tests is
minimal, this suggests that again the DF-GLS’                  test is preferred in the detrended
case.
    In both the demeaned and the detrended cases, an important                        implication      of the
Monte Carlo results here and in the literature is that the choice of lag length or
truncation     parameter can strongly influence test performance.                     The LR and BIC


   “In theory, this can be addressed by casting the trend order/integration order decision      as a model
selection problem and using Bayesian model selection techniques, an approach investigated       by Phillips
and Ploberger (1992). See the discussion in Section 6 of this chapter.
Ch. 46: Unit Roots, Structural   Breaks and Trends                                     2785


rules have the twin advantages of relieving the researcher from making an arbitrary
decision about lag length and of providing reasonable tradeoffs between controlling
size with longer lags and gaining size-adjusted power with shorter lags.
   One could reasonably object to the emphasis on controlling size in drawing
these conclusions. In many applications, particularly when the unit root test is
used as a pretest, it is not clear that controlling type I error is as important as
achieving desirable statistical properties in the subsequent analysis. This suggests
adopting alternative strategies: perhaps testing the I(0) null or implementing a
consistent classification scheme. These strategies are respectively taken up in
Sections 4 and 6.


3.3,   Interval   estimation

 Confidence intervals are a mainstay of empirical econometrics and provide more
information than point estimates or hypothesis tests alone. For example, it is more
 informative to estimate a range of persistence measures for a given series than
 simply to report whether or not the persistence is consistent with there being a
 unit root in its autoregressive representation [see, for example, Cochrane (1988)
 and Durlauf (1989)]. This suggests constructing classical confidence intervals for
 the largest autoregressive root ~1,for the sum of the coefficients in the autoregressive
approximation to u,, or for the cumulative impulse response function. Alternatively,
if one is interested in forecasting, then it might be desirable to use a median-unbiased
estimator of a, so that forecasts (in the first-order model) would be median-unbiased.
Because a median-unbiased estimator of u corresponds to a 0 percent equal-tailed
confidence interval [e.g. Lehmann (1959, p. 174)], this again suggests considering
the construction of classical confidence intervals for a. Moreover, a confidence
interval for tl would facilitate computing forecast prediction intervals which take
into account the sampling uncertainty inherent in estimates of a.
    The construction of classical confidence intervals for a, however, involves
technical and computational complications. Only recently has this been the subject
of active research. Because of the nonstandard limiting distribution at u = 1, it is
evident that the usual approach of constructing confidence intervals, as, say, + 1.96
times the standard error of 61,has neither a finite-sample nor an asymptotic
justification. This approach does not produce confidence intervals with the correct
coverage probabilities, even asymptotically, when c( is large. To see this, suppose
that a is estimated in the regression (3.9) and that the true value of a is one. Then
the usual “asymptotic 95 percent” confidence interval will contain the true value
of a when the absolute value of the r-ratio testing a = 1, constructed using ar, is
less than 1.96. When u = 1, however, this t-ratio has the Dickey-Fuller                  t?
distribution, for which Pr[lt^‘l > 1.961 jO.61. That is, the purported 95 percent
confidence interval actually has an asymptotic coverage rate of only 39 percent!
    It is, therefore, useful to return to first principles to develop a theory of classical
 2786                                                                                                  J.H. Stock


interval estimation     for CI. A 95 percent confidence         set for c(, S(y,, . . . , yT), is a
 set-valued function of the data with the property that Pr[a&]             = 0.95 for all values
 of CIand for all values of the nuisance parameters. In general, a confidence set can
 be constructed      by “inverting”     the acceptance     region of a test statistic that
 has a distribution    which depends on a but not on any nuisance parameters. Were
 there a UMP test of cx= CQ,available for all null values CY~,then this test could be
inverted to obtain a uniformly most accurate confidence set for a. However, as
 was shown in Section 3.2.1, no such UMP test exists, even in the special case of
 no nuisance parameters, so uniformly most accurate (or uniformly most accurate
invariant or invariant-unbiased)       confidence sets cannot be constructed by inverting
 such tests. Thus, as in the testing problem, even in the finite-sample                 Gaussian
 AR(l) model the choice of which test to invert is somewhat arbitrary.
    As the discussion of Section 3 revealed, a variety of statistics for testing a = cl,,
 are available for the construction     of confidence intervals. Dufour (1990) and Kiviet
and Phillips (1992) proposed techniques for constructing            exact confidence regions
in Gaussian       AR(l) regression with exogenous        regressors and Andrews (1993a)
develops confidence sets for the Gaussian           AR(l) model in the no-deterministic,
demeaned       and detrended     cases with no additional       regressors. Dufour’s (1990)
confidence interval is based on inverting the Durbin-Watson                statistic, Kiviet and
Phillips (1992) inverted the t-statistic from an augmented              OLS regression, and
Andrews (1993a) inverted 61“- u (in the detrended              case bir - ~1). In practice, the
inversion of these test statistics is readily performed using a graph of the confidence
belt for the respective statistics, which plots the critical values of the test statistic as a
function of the true parameter. Inverting this graph yields those parameters which
cannot be rejected for a given realization of the test statistic, providing the desired
confidence interval [see Kendall and Stuart (1967, Chapter 2O)].‘l
    In practice one rarely, if ever, knows a priori that the true autoregressive             order
is one and that the errors are Gaussian, so a natural question is how to construct
confidence intervals for a in the more general model (3.1). If treated in finite
samples, even if one maintains        the Gaussianity   assumption      this problem is quite
difficult because of the additional       nuisance parameters       describing the short-run
dependence. However, as first pointed out by Cavanagh (1985), the local-to-unity
asymptotics of Section 3.2.3 can be used to construct asymptotically            valid confidence
intervals for TVwhen a is close to one.


    21Dufour studied linear regression with Gaussian AR(l) disturbances,               of which the constant and
 constant/time-trend      regression problems considered      here are special cases. Both Dufour (1990) and
 Andrews (1993a) computed the exact distributions         of these statistics using the Imhof method. In earlier
 work, Ahtola and Tiao (1984) proposed a method for constructing             confidence intervals in the Gaussian
AR(l) model with no intercept. Ahtola and Tiao’s approach              can be interpreted   as inverting the score
test of the null p = pO, with two important       approximations.    First, they use a normal-F approximation
to the distribution     of the score test, which seems to work well over their tabulated range of a. Second
(and more importantly),        their proposed procedure for inverting the confidence belt requires the belt to
be linear and parallel, which is not the case over a suitably large range of a, even at the scale of the
local-to-unity     model a = I + c/T.
Ch. 46: Unit Roots, Structural Breaks and Trends                                                             2787


     If the local-to-unity      asymptotic representation              of the statistic in the general I(1)
 case has a distribution           which depends only on c [a condition                     satisfied by any
 statistic with the limiting representations                  in (3.23)] then this test can be inverted
 to construct confidence intervals for c and, thus, for CI. In the finite-sample                             case,
 ~1cannot be determined from the data with certainty, and similarly in the asymptotic
 case c cannot be known with certainty even though a is consistently                                 estimated.
 However, the nesting a = 1 + c/Tprovides                      confidence intervals that shorten at the
 rate T-’ rather than the usual T- 112.
     To be concrete, the Dickey-Fuller                 t-statistic from the pth order autoregression
 (3.9) (interpreted      in the Said-Dickey             sense of p increasing with the sample size)
 has the local-to-unity         distribution       (3.23b) which depends only on c and, so, can
 be used to test the hypothesis c = c0 against the two-sided alternative for any finite
 value of c,,. The critical values for this test depend on ce. The plot of these values
 constitutes an asymptotic confidence belt for the local-to-unity                       parameter c, based
 on the Dickey-Fuller           t-statistic. Inverting the test based on this belt provides an
 asymptotic      local-to-unity       confidence interval for c. Asymptotic                 confidence belts
 based on the Dickey-Fuller                 t-statistic in (3.9) and, alternatively,            the modified
 Sargan-Bhargava           (MSB) statistic are provided                   by Stock (1991) in both the
 demeaned and the detrended cases. Stock’s (1991) Monte Carlo evidence suggests
 that the finite-sample         coverage rates of the interval based on the Dickey-Fuller
 t-statistic are close to their asymptotic confidence levels in the presence of MA(l)
 disturbances,      but the finite-sample             coverage rates of the MSB-based                  statistics
 exhibit substantial       distortions relative to their asymptotic confidence levels.
     Both the finite-sample AR( 1) and asymptotic AR(p) confidence intervals yield, as
 special cases, median-unbiased              estimators of a. The OLS estimates of a are biased
 downwards,        and both the finite-sample                  and asymptotic        approaches        typically
 produce median-unbiased              estimates of a larger than the OLS point estimates.
    While this approach produces confidence intervals and median-unbiased                                    esti-
mators of a, the researcher might not be interested in the largest root per se but
rather in some function of this root, such as the sum of the AR coefficients in the
autoregressive      representation.        To this end, Rudebusch (1992) proposed a numerical
technique based on simulation                 to construct median-unbiased              estimators of each
of the p + 1 autoregressive          parameters; his algorithm searches for those autoregres-
sive parameters        for which the median of each of the AR parameters                            equals the
observed OLS estimate for that parameter. Andrews and Chen (1992) propose a
similar algorithm,         except that their emphasis is the sum of the autoregressive
parameters      rather than the individual               autoregressive      parameters      themselves and
their calculations       are done using the asymptotic local-to-unity                  approximations.
    A completely different approach to interval estimation which has been the subject
of considerable       recent research and controversy                   is the construction      of Bayesian
regions of highest posterior probability                  and an associated set of Bayesian tests of
the unit AR root hypothesis.                  (References are given in Section 6.2.) Although
these procedures examine the same substantive                        issue, they are not competitors            of
2788                                                                                 J.H. Stock


the classical methods in the sense that, when interpreted               from a frequentist
perspective, many of the proposed Bayesian intervals have coverage rates that
differ from the stated confidence levels, even in large samples. A simple example
of this occurs in the Gaussian AR( 1) model with a constant and a time trend when
there are flat priors on the coefficients. Then, in large samples, the Bayesian 95
percent coverage region is constructed      as those values of CIwhich are within 1.96
standard errors (conventional   OLS formula) of the point estimate [Zellner (1987)].
As pointed out earlier in this subsection,       if c( = 1 this interval will contain the
true value of c( only 39 percent of the time in the detrended case. Of course these
Bayesian regions have well-defined interpretations       in terms of thought-experiments
in which CI is itself random and have optimality            properties,    given the priors.
However, given the lack of congruence         between the classical and the Bayesian
intervals in this problem, and the sensitivity of the results to the choice of priors
[see Phillips (1991a) and his discussants],    applied researchers should be careful in
interpreting  these results.



4.     Unit moving average roots

This section examines inference in two related models, the moving average              model
and the unobserved   components   model. The moving average model is

       y, = d, + u t,   Au, = (1 - BL)o,                                                  (4.1)

where u, is, in general, an I(0) process satisfying (2.1)-(2.3). If 0 = 1, u, = u, + (ue - u,),
so that with the initial condition       that u0 = uO,u, = u, is a purely stochastic I(O)
process. If 1131  < 1, then (1 - BL)- ’ yields a convergent          series and (1 - BL) is
invertible, so u, is I(1). The convention     in the literature is to refer to 101= 1 as the
noninvertible    case.
   The unobserved components         (UC) model considered here can be written

       y, = d, + u,> u, = vt + i,,    ,q = P,- 1 + v,,   t = 42,. . . , T,                (4.2)

where [, and v, are I(0) with variances at and 0: and where d, is a trend term as
in (1.1). If [, and v, have a nondegenerate     joint distribution,  then, in general, the
I(1) component pt and the I(0) component      [, cannot be extracted from the observed
series without error, even with known additional        parametric structure; hence the
“unobserved     components”     terminology.
   It should be observed         at the outset that the unit MA root/UC            models
are a mirror image of the unit AR root model, in the sense that the unit AR root
model parameterizes       the I(1) model as a point (c1= 1) and the I(0) model as a
continuum     ()c11< l), while in the unit MA root/UC models the reverse is true. In
the latter two models, the I(0) case is parameterized    as a point (0 = 1 in the unit MA
root model, 0,’ = 0 in the UC model), while the I(1) case is parameterized             as a
Ch. 46:   Unit Roots, Structural   Breaks   and Trends                                 2789



continuum    (I 81 < 1 in the MA model, 0: > 0 in the UC model). This suggests that,
at least qualitatively, some of the general lessons from the AR problem will carry
over to the MA/UC problems. In particular, because the points 0 = 1 and 0: = 0
represent discontinuities in the long-run behavior of the process, it is perhaps not
surprising that, as in the special case of a unit AR root, the first-order asymptotic
distributions of estimators of 0 and 0,” exhibit discontinuities at these points. In
addition, just as the unit AR root model lends itself to constructing tests of the
general I(1) null, the unit MA root model lends itself to constructing tests of the
general I(0) null.
   Although the MA model (4.1) and UC model (4.2) appear rather different, they
are closely related. To see this, consider only the stochastic components of the
models. In general, for suitable choices of initial conditions, all MA models (4.1)
have UC representations (4.2) and all UC models (4.2) have MA representations
of the form (4.1). To show the first of these statements, we need only write Au, =
(1 - 8L)o, = (1 - 0)u, + BAv,; then, cumulating Au, with the initial condition u0 = o0
yields

      u,=(l     -e) i u,+eu,.                                                          (4.3)
                    s=o
By construction (1 - 0)Cf, ,,u, is I(1) and 8u, is I(0). Therefore, the MA model (4.1)
has the UC representation (4.3) with v, = (1 - t9)0,and i, = 8u,. If 0 = 1, then the
I(1) term in (4.3) vanishes and u, is I(0). To argue that all UC models have MA
representations of the form (4.1), it is enough to consider the two cases, cz = 0
and 0,” > 0. If 0: = 0 and pc, = 0, then u, = [,, which is I(O), so (4.1) obtains with
ue = u0 and 8 = 1. If 0: > 0, then u, is I(l), so Au, = v, + A[, is I(O),and it follows that
Au, has a Wold decomposition and hence an MA representation of the form (4.1)
where (01 < 1.
   A leading special case of the UC model which is helpful in developing intuition
and which will be studied below is when (Al,, v,) are serially uncorrelated and are
mutually uncorrelated. Then, Au, in the UC model has MA(l) autocovariances:
Au, = A[, + vt, so that ~~~(0)= 20: + a:, y,,(l) = - 6: and ydu(j) = 0,1jl > 1. Thus
Au, has the MA(l) representation (4.1), Au, = (1 - 8L)e,, where e, is serially
uncorrelated, 8 solves 0 + 8-l - 2 = at/$          and 0,” = $/0. Because EA&v, = 0
by assumption, this UC model is incapable of producing positive autocorrelations
of AuI, so, while all uncorrelated UC models have an MA(l) representation, the
converse in not true. [The MA(l) model will, however, have a correlated UC
representation and a UC representation with independent permanent and transitory
components which themselves have complicated short-run dynamics; see Quah
(1992).]
   The UC model can equivalently be thought of as having I( 1) and I(0) components,
or as being a regression equation with deterministic regressor(s) d, (which in general
has unknown parameter(s) /I), an I(0) error and a constant which is time-varying
2190                                                                          J.H. Stock


and follows an I( 1) process. Thus the problem of testing for a unit moving average
root and testing for time variation in the intercept in an otherwise standard
time series regression model are closely related.


4.1. ‘Point estimation

When the MA process is noninvertible, or nearly noninvertible, estimators of 0
fail to have the standard Gaussian limiting distributions. The task of characterizing
the limiting properties of estimators of 8 when 19is one, or nearly one, is difficult,
and the theory is less complete than in the case of nearly-unit autoregressive roots.
Most of the literature has focused on the Gaussian MA(l) model with d, = 0 and
u, = Ed,and this model is adopted in this subsection, except as explicitly noted. One
complication is that the limiting distribution depends on the specific maximand and
the treatment of initial conditions. Because the objective here is pedagogical rather
than to present a comprehensive review, our discussion of point estimation focuses
on two specific estimators of 8, the unconditional and conditional (on s1 = 0) MLE.
   Suppose that the data have been transformed so that x, = Ay,, t = 2,. . . , T. Then
8 can be estimated by maximizing the Gaussian likelihood for (x2,. . . , xT). The exact
form of the likelihood depends on the treatment of the initial condition. If x2 is
treated as being drawn from its stationary distribution, so that x2 = s2 - 0&i, then
X=(X2,...,   xJ   has covariance matrix afQ,(@, where 0, ii= 1 + 0’ and s2,,ii, 1= - 0.
This is the “unconditional” case, and the Gaussian likelihood is

                                                 %?2;‘X
       A (0, of) = - $ T In 27~0:- $ln det (0”) - 2
                                                      frf   ’

where det(R,) denotes the determinant of 0,. Estimation proceeds by maximization
of A in (4.4). Numerical issues associated with this maximization are discussed at
the end of the subsection.
   The “conditional” case sets .sl = 0, so that x2 = e2. The conditional likelihood is
given by (4.4) with a, replaced by a,, where 0, = 0” except that a,,,, = 1. A
principal advantage of maximizing the conditional Gaussian likelihood is that the
determinant of the covariance matrix does not depend on 0, so maximization can
proceed by minimizing the quadratic form X’0; ‘X. Because st = x, + es,_ r, with
the additional assumption that .si = 0, the residuals e,(e) can be constructed
recursively as (1 - BL)e,(8) = x, and estimation reduces to the nonlinear least
squares problem of minimizing C,‘=2 e,(8)2.
   If (8(< 1, so that the process is invertible, then standard ,/!? asymptotic theory
applies. More generally, if an ARMA(p, 4) process ‘is stationary and invertible and
has no common roots, then the Gaussian maximum likelihood estimator of the
ARMA parameters is fi-consistent          and has a normal asymptotic distribution;
see Brockwell and Davis (1987, Chapter 10.8). In the MA(l) model, fi(&,,,         - 0)
Ch. 46: Unit Roots, Structural   Breaks and Trends                                              2191


 is asymptotically    distributed   N(0, 1 - 0”). This provides a simple way to construct
 tests of whether 8 equals some particular value. Alternatively,            confidence intervals
for 8 can be constructed as e+ 1.96( 1 - @)“’ (for a 95 percent two-sided confidence
interval).
     These simple results fail to hold in the noninvertible       case. This is readily seen by
 noting that the asymptotic normal approximation              to the distribution     of the MLE
 is degenerate when 8 = 1. The most dramatic and initially surprising feature of this
 failure is the “pileup” phenomenon.             In a series of Monte Carlo experiments,
 investigators    found that the unconditional        MLE took on the value of exactly one
 with positive probability when the true value of 8 was near one, a surprising finding
 at the time since 0 can take on any value in a continuum.         Shephard (1992) and Davis
 and Dunsmuir (1992) attribute the initial discovery of the pileup effect to unpublished
 work by Kang (1975); early published simulation studies documenting                   this pheno-
 menon include Ansley and Newbold (1980) Cooper and Thompson (1977), Davidson
 (1979, 198 l), Dent and Min (1978) and Harvey (198 1, pp. 13669); also see Plosser
 and Schwert (1977), Dunsmuir (198 1) and Cryer and Ledolter (198 1).
     The intuition concerning      the source of the pileup effect is straightforward,          and
 concerns the lack of identification       of (0, a’) in the unconditional     model. Note that
 n,(Q) = 820,(8-l);      upon substituting     this expression into the unconditional        likeli-
 hood (4.4), one obtains A(& g2) = A(& ‘, e2a2) and A(0) = A(F’), where A denotes
 the likelihood concentrated       to be an argument only of 8. Because A is symmetric
 in In 8 for B > 0, it follows immediately that A will have a local maximum at B = 1 if
 ~2~/~~2),~,~O,sotheprobabilityofalocalmaximumat~=1isPr[~2~/~~2~,~,~O].
 Sargan and Bhargava (1983b, Corollary 1) [also see Pesaran (1983) and Anderson
 and Takemura (1986, Theorem 4. l)] provide expressions for this limiting probability
 in the noninvertible      case, which can be calculated by interpolation           of Table I in
 Anderson and Darling (1952) and is 0.657.
    These results were extended to the case of higher-order           MA and ARMA models
 by Anderson and Takemura (1986), where the estimation is by Gaussian MLE when
 the order of the ARMA process is correctly specified. Tanaka (1990b) considered
a different problem, in which u, is a linear process which is I(O) but otherwise is only
weakly restricted, but Q is estimated by using the misspecified Gaussian                     MA(l)
likelihood. Tanaka (1990b) found that, despite the misspecification                 of the model
order, the unconditional        MLE continues to exhibit the pileup effect, in the sense
that the probability       of a local (but not necessarily global) maximum at i?= 1 is
nonzero if the true value of 0 is one. Also see Tanaka and Satchel1 (1989) and
 Potscher (1991).
    Because of the close link between the UC and MA models, not surprisingly                     the
pileup phenomenon         occurs in those models as well. In this model, if the “signal-to-
noise ratio” o,‘/c$ is zero or is in a T 2 neighborhood          of zero, then 0,’ is estimated
to be precisely zero with finite probability.             However, the value of this point
probability     depends on the precise choice of maximand            (e.g. maximum marginal
likelihood or maximum profile likelihood) and the treatment of the initial condition
2792                                                                                     J.H. Stock


p0 (as fixed or alternatively   as random with a variance which tends to infinity, or
equivalently  as being drawn from a diffuse prior). Various versions of this problem
have been studied by Nabeya and Tanaka (1988), Shephard and Harvey (1990)
and Shephard (1992, 1993).
   Research on the limiting distribution      of estimators of 8 when 0 is close to one is
incomplete. Davis and Dunsmuir (1992) derive asymptotic distributions          of the local
maximizer closest to one of the unconditional         likelihood, when the true value is in
a l/T neighborhood     of 0 = 1. Their numerical results indicate that their distributions
provide good approximations,       even for 8 as small as 0.6 with T= 50. Their approach
is to obtain representations   of the first and second derivatives of the likelihoods as
stochastic processes in T(1 - 0). They do not (explicitly) use the FCLT, and working
through the details here would go beyond the scope of this chapter.

A remark on computation.           The main technical complication            that arises in the
estimation      of stationary   and invertible     ARMA(p,q)         models is the numerical
evaluation     of the likelihood when q 3 1. If the sample size is small, then Q;’ can
be computed and inverted directly. In sample sizes typically encountered                in econo-
metric applications, however, the direct computation           of 0; 1 is time-consuming       and
can introduce      numerical errors. One elegant and general solution is to use the
Kalman filter, which is a general device for computing the Gaussian log likelihood,
P(Y r,. . , yr) with the factorization    Z’(Yr,. . . , Y,)=~(Y,)+C,T_*~(YtIYt-l,...,Yl),
when the model can be represented in state space form (as can general ARMA models).
The Kalman filter operates by recursively computing                 the conditional    mean and
variance of Yt, which, in turn, specifies the conditional        likelihood Y(y, 1y,_ l,. . . , yl).
The Gaussian        MLE is then computed           by finding the parameter          vector that
maximizes the likelihood. The chapter by Hamilton in this Handbook describes the
particulars of the standard Kalman filter and provides a state space representation
for ARMA models which can be used to compute their Gaussian MLE. The model
(4.2) is a special case of unobserved components         time series models, which in general
can be written in state space form so that they, too, can be estimated using the
Kalman filter; see Harvey (1989) and Harvey and Shephard (1992) for discussions
and related examples.
   The literature on the estimation       of stationary     and invertible ARMA models is
vast and it will not be covered further in this chapter. See Brockwell and Davis
(1987, Chapter 8) for a discussion and references. For additional discussion of the
Kalman filter with applications       and a bibliography,     see the chapter by Hamilton in
this Handbook.


4.2.     Hypothesis   tests

4.2.1.     Tests of 8 = 1 in the conditional   Gaussian MAC1 ) model

As Sargan and Bhargava (1983b) pointed out, the pileup phenomenon    means that
likelihood ratio tests cannot be used for hypothesis    testing at conventional
Ch. 46: Unit Roots, Structural   Breaks and Trends                                                2793


significance levels, at least using the unconditional    Gaussian   MLE. Given this
difficulty, it is perhaps not surprising that research into testing the null of a unit
MA root has been limited and has largely focused on the MA(l) conditional
Gaussian model. This model, therefore, provides a natural starting point for our
discussion of tests of the general I(0) null.
   The conditional Gaussian MA(l) model with a general pth order polynomial time
trend is

      yr=z:/?+ut,        ui =~i,      AU,=&,-t&i,           t> 1                                  (4.5)

where E, is i.i.d. N(0, crt) and z, = (1, t, . , t”)‘. Let z = (z,, . . . , zT)‘, and similarly define
the T x 1 vectors y and u. Then y is distributed N(za, JCJ, where EC,, i = 0: and the
remaining elements can be calculated directly from the moving average representa-
tion Au, = (1 - 19L)q.
   The problem of testing values of 0 is invariant             to transformations         of the form
y, + ay, + zib, /? -+ a/? + b and 0: + a*of. It is therefore reasonable                     to restrict
attention   to the family of tests which are invariant             to this transformation,         and
among that family to find the most powerful tests of 0 = 1 against the fixed
alternative 0 = I%An implication         of the general results of King (1980, 1988) is that
the MPI test of 0 = 1 vs. 0 = 8rejects for small values of the statistic




where 6 = (ri,,zi *, . . . , t&-)), where {tit} are the residuals from the OLS regression of
y, onto z,, 6 are the GLS residuals from the estimation of (4.5) under the alternative,
and EUU’ = X,(g) is the covariance matrix of U = (u,, . . . , uT) under the alternative
t? In the MA(l) model, the GLS transformation               can be written explicitly, and GLS
simplifies to the OLS regression               of Y,(g) onto Z,(e), where Y,(g) = y, and
(1 - &!,)Y,(@ = Ayr, t > 1, and similarly for Z,(f?).
   As in the case of MP tests for an autoregressive             unit root discussed in Section
3.2.1, the dependence of the MPI test statistic (4.6) on the alternative             ecannot   be
eliminated, so there does not exist a UMPI test of f3= 1 vs. 101< 1. This has led
researchers to propose alternative           tests. A natural approach is to consider tests
which have maximal power for local alternatives,               that is, to consider the locally
most powerful invariant          test. In the special case that d, is zero, Saikkonen        and
Luukkonen       (1993a) show that the LMPI test has the form, Tj2/8f,                      where
y= T-‘C,T_lyf      an d Si = T-‘Cf’,y:          (which is the MLE of 0: under the null). In
the case d, = /lo, Saikkonen and Luukkonen             (1993a) use results in King and Hillier
(1985) to derive the locally most powerful invariant unbiased test, which is based
on the statistic




                                                                                                  (4.7)
 2794                                                                                       J.H. Stock


 where Y:,.(n) = T- “‘C$‘jy~ and (8,“)’ = T lx,‘= ,(yr)‘, where yt = y, - j [also see
 Tanaka (1990b)l. Note that (c?:)~ is the (conditional)     MLE of 0: under the null
 hypothesis. Because the statistic was derived for arbitrarily    small deviations from
 the null, the parameter 0 does not need to be estimated to construct L.22
    A natural generalization of (4.7) to linear time trends is to replace the demeaned
 process yf by the detrended process y::




                                                                                                (4.8)


 where Y;,(A) = T-1’2CjT_:]yz and (&I)* = T-‘CsT_l(y3)2, where y: = y, - z$ and fi
 is the OLS estimator from the regression of y, onto (1, t).
    The asymptotic       null distributions   of Lp and C are readily obtained using the
 FCLT and CMT, under the maintained              assumption   that the order of the estimated
 deterministic    trend is at least as great as the order of the true trend. First consider
 Lw. As the second expression in (4.7) reveals, L@ can be written as a continuous
 functional of Y;,/BE. To obtain limiting representations         for Lfl it therefore suffices to
 obtain limiting results for the stochastic process Y&/C?:. The limit of the numerator
 of this process was derived in Section 2.3 (Example 3) and is given in (2.14a) for u,
 being a general I(0) process; because it is assumed in this subsection               that u, = E,
 under the null, this result applies here with o = aE. In addition, the maintained
 assumption     that the trend is correctly specified ensures that 8: A aE. It follows
that Y;r/d:=W          and that L@a~(B’)*, where B’(A) = W(I1) - ;CW(l) is a standard
 Brownian bridge. An identical argument applies to the linearly detrended case and
yields the limit L’=>~(Br)2, where B’ is the second-level Brownian bridge in (2.14b).
 In the leading case that d, is a constant, L“ has the asymptotic distribution              of the
Cramer-von       Mises statistic derived by Anderson and Darling (1952). Nyblom and
 Makeltiinen (1983, Table 1) provide critical values of the finite-sample distribution
of L”, computed using the Imhof method for Gaussian errors. Kwiatkowski                      et al.
(1992, Table 1) provide a table of critical values of J(BP)2 and J(W)’ which agrees
closely with earlier computations,          e.g. MacNeill (1978, Table 2). Although the
motivation     for the L-statistic comes from considering        the Gaussian MA(l) model,
it is evident from the preceding derivation          that the same asymptotic distribution
obtains for MA(l) models with errors which satisfy the weaker assumptions,                   such
as being martingale difference sequences which satisfy (2.2).
    The Lstatistics     (4.7) and (4.8) have intuitive interpretations.         To be concrete,
consider L’. Under the null hypothesis, y, - /3, is serially uncorrelated                and the
partial sum process of the demeaned data, Cl5’jy;, is I( 1). The statistic Lv thus can
be seen to test the null hypothesis that y, is I(0) by testing its implication           that the

  “Nabeya and Tanaka (1990b) showed that the statistic (4.7) is also locally MPI unbiased     for the
unconditional   Gaussian   MA(l) model with known   d,.
Ch. 46: Unit Roots, Structural Breaks and Trends                                                       2195


process of accumulated          (demeaned) y,‘s is I( 1). Rejection occurs if L’” is large, SO the
statistic tests the null that the accumulation         of y, is I( 1) against the alternative that it is
1(2). Comparison       of (4.7) to the expression (3.18b) for the Sargan-Bhargava                  statistic
testing the null of a unit autoregressive           root in the d, = 8, case shows that the two
statistics are closely related: the Sargan-Bhargava                    statistic rejects the I(1) null
against the I(O) alternative when the sum of squared y,‘s is small, while the LMPI
statistic Lp rejects the I(0) null against the I(1) alternative when the sum of-squared
accumulated       y,‘s is large.
    Because of the similarities between the UC and MA models, not surprisingly the
L-statistics can be alternatively           derived as tests of rrt = 0 in the UC model. In this
formulation,      the tests have the interpretation        that they are testing the null that the
regression intercept in (4.2) is constant, versus the alternative that it is time-varying,
evolving as a martingale. To be concrete, suppose that yt is generated by (4.2) with
(&, vt) i.i.d. N(0, a: diag(1, q)), p. = 0, and set q = cs/c$. Then (yr,. . . , yT) is distributed
N(z/?, af&(q)),        where i&-(q) = I + qf2 *, where Qc = min(i, j). Again, the results
of King (1980) imply that the most powerful invariant test of q = 0 against q = 4 > 0
is a ratio of quadratic forms similar to (4.6) but involving &(4).                       The resulting
statistic depends on 4, so no uniformly MPI test exists.
    Because there is no UMPI test, it is reasonable to examine the locally MPI test
in the UC model. In the case d, = PO, Nyblom and Makelainen                         (1983) derived the
LMPI test statistic and showed it to be Lp. Nyblom (1986) extended this analysis
to the case d, = Do + flit and showed the LMPI statistic to be L’. Nabeya and
Tanaka (1988) extended these results to the general Gaussian regression problem
in which coefficients on some of the variables follow a random walk while others
are constant. The special case of Nabeya and Tanaka’s (1988) results, of interest
here, is when d, = z$, where z, = (1, t,. . . , tP)’ and the intercept term, pt in (4.2),
follows a random walk. Then Nabeya and Tanaka’s (1988) LM test statistic
simplifies to (4.7), except that yf, the residual from the OLS regression of y, onto the
time polynomials        z,, replaces yr and Y: = T- ‘/‘CL= lyl replaces Y;.23
   Despite the differences in the derivations in the MA and UC cases, the fact that
the same local test statistics arise has a simple explanation.                  As argued above, Au,
generated by the UC model has an MA(l) representation                          with parameters (0,af)
which solve q=&‘+&2                 and 0 g2 = 0:. Thus, the distribution           of (y,, . . . , yT) can
be written as N(z/I, a2Z,c(B)), wheri z = (z,, . . . ,zT), Z,, 11 = (1 + q)af/at =(1-o+
19’) and where the remaining elements of Z,,(0) equal those of EC(e). Thus the UC
and conditional       MA models are the same except for their treatment of the initial
valueyl.But&c,,,(l)=~~                ,,(I), so, when 8 = 1 (equivalently, when q = 0), the two
models are identical.               ’
   A third interpretation        of the L-tests arises from recognizing that the UC model


   Z3This simplification obtains from Nabeya and Tanaka’s (1988) equation (2.5) by noting that the tth
element of their My is d, by recognizing that, in our application,   their DX is the T x T identity matrix,
and by carrying out the summation explicitly. See Kwiatkowski      et al. (1992).
2796                                                                                               J.H. Srock


is a special case of time-varying    parameter models, so that the tests can be viewed
as a test for a time-varying intercept. This interpretation   was emphasized by Nabeya
and Tanaka (1988) and by Nyblom (1989). We return to this link in Section 5.
    Local optimality is not the only testing principle which can be fruitfully exploited
here, and other tests of the hypothesis q = 0 in the UC model have been proposed.
LaMotte and McWhorter (1978) proposed a family of exact tests for random walk
coefficients, which contains the i.i.d. UC model (4.1) with d, = b, and d, = fi,, + fill
as special cases, under the translation      group y + y + zh, /I + p + 6. Powers of the
LaMotte and McWhorter          tests are tabulated by Nyblom and Makelainen              (1983)
(constant case) and by Nyblom (1986) (time-trend case). Franzini and Harvey (1983)
considered     tests in the Gaussian    UC model with the maintained            hypothesis of
nonzero drift in p,, which is equivalent         to (4.2) with ([,,v,) i.i.d. Gaussian      and
d, = fl, + flit. Franzini and Harvey (1983) suggested using a point-optimal          test, that
is, choosing an MPI test of the form where their recommendation               corresponds     to
4 E 0.75 for T= 20. Shively (1988) also examined point-optimal               tests in the UC
model with an intercept and suggested using the MPI tests tangent to the power
envelope at, alternatively,   powers of 50 percent and 80 percent, respectively, corre-
sponding to q = 0.023 and 0.079 for T= 51.

4.2.2.    Tests of the general I(0)         null

 Because economic theory rarely suggests that an error term is i.i.d. Gaussian, the
Gaussian MA( 1) and i.i.d. UC models analyzed in the previous subsection are too
 special to be of interest in most empirical applications.        While the asymptotic null
distributions     of the L” and L’ statistics obtain under weaker conditions             than
Gaussianity,     such as u, = E, where E, satisfies (2.2) these statistics are not asymptoti-
cally similar under the general I(0) null in which u, is weakly dependent and satisfies
(2.1))(2.3). A task of potential       practical importance,      therefore, is to relax this
assumption and to develop tests which are valid under the more general assumption
that u, is I(0).
   The two main techniques which have been used to develop tests of the general
I(O) null parallel those used to extend autoregressive        unit root tests from the AR(l)
model to the general I(1) model. The first, motivated by analogy to the way that
Phillips and Perron (1988) handled the nuisance parameter o in their unit root tests,
is to replace the estimator of the variance of u, in statistics such as Lp and L’ with
an estimator of the spectral density of u, at frequency zero; this produces “modified”
Lp and L’ statistics.24 The second, used by Saikkonen               and Luukkonen     (1993a,
1993b), is to transform the series using an estimated ARMA process for u,.
   The device of Section 3, in which unit root tests were represented as functionals of

   24This approach was proposed by Park and Choi (1988) to generalize their variable addition tests,
discussed in the subsequent paragraphs,      to the general I(0) null. It was used by Tanaka (1990b) to extend
the L” statistic to the general I(0) null. [Tanaka’s (1990b) expression (7) is asymptotically    equivalent to
(4.7).] Kwiatkowski    et al. (1992) used this approach to extend the L’ statistic to the general I(0) null.
Ch. 46:    Unit   Root.s. Structural    Breuks and Trends                                         2197



the levels process of the data, can be applied in this problem to provide a general
treatment of those tests of the I(O) null which involve an explicit correction using
an estimated spectral density. The main modification                   is that, in the I(O) case, the
tests are represented as functionals           of the accumulated        levels process rather than
the levels process itself. This general treatment                produces, as special cases, the
extended L” and L’ statistics and the “variable addition”                      test statistics, G(p,q),
proposed by Park and Choi (1988).
      Park and Choi’s (1988) G(p, q) statistic arises from supposing that the true trend
is (at most) a pth order polynomial. The detrending regression is then intentionally
overspecified, including polynomials             of order q where q > p. If u, is I(O), then the
OLS estimators of the coefficients on these additional                  q - p trends are consistent
for zero. If, however, u, is I(l), then the regression                    of y, on the full set of
trends introduces “spurious detrending”,              as discussed in Example 2 of Section 2.3,
and the LR test will reject the null hypothesis                    that the true coefficients on
   P+l
(t       , . . . , t”) are zero. These two observations    suggest considering the modified LR
statistic, G(p,q) = T(8’ - 62)/c22, where b2 and 6’, respectively,                     are the mean
squared residuals from the regression of y, onto (1, t, . . . , tp) and of y, onto (1, r, . . . , P).
     In functional notation, the L and G(p, q)-tests have the representations

      L:              L= gI,(f), g&f) = Jf2>                                                    (4.9a)


      G(P,4): G(P,4)= g,(f),                    CI,(.II=   j=$+
                                                             1     2,                           (4.9b)


where f denotes the random function being evaluated and hj is the jth Legendre
polynomial     on the unit interval.
   As the representations       (4.9) make clear, to study the limiting behavior of the
statistics it suffices to study the behavior of the function being evaluated and then
to apply the CMT. Under the general I(0) null, T- 1/2~~~]1u,~wW, so that the
general detrended process Yir (defined in Section 2.3, Example 3) has the limit
 Yd,,/c+(02/a,2)B      (p). This suggests modifying   these statistics by evaluating the
functionals using I/&., where


      v”,(A) = Q,’ T - “’               1 yf.                                                   (4.10)
                                       s=l


If && is consistent for w2 then V”, * Bcp) and the asymptotic distributions        of the
statistics (4.9) will not depend on any nuisance parameters under the general I(0)
null. The SC estimator&&is      used for this purpose by Park and Choi (1988), Tanaka
(1990b), Kwiatkowski et al. (1992) and Stock (1992). The rate conditions I, + cc and
I, = o(T”~) are sufficient to ensure consistent estimation of o under the null and,
as is discussed in the next subsection, test consistency under a (fixed) alternative.
2798                                                                                               J.H. Stock


   A Second approach to extending the MA( 1) tests to the general I(O) null, developed
by Saikkonen and Luukkonen             (1993a, 1993b), involves modifying the test statistic
by, in effect, filtering the data. Saikkonen        and Luukkonen       (1993a) consider the
Gaussian LMPI unbiased (LMPIU) test under an ARMA(p, q) model for the I(0)
errorsu=(u,,...,        uT). Let the covariance matrix of u, be Z, and assume that C, were
known. With Z, known, under the null hypothesis PO can be estimated by GLS
yielding the estimator fiO, and let fi, denote residuals y, - &. The transformed GLS
residuals are then given by Z = Z; ‘I2‘17.The Gaussian LMPIU test in this model is
a ratio of quadratic forms in E analogous to (4.6), where the covariance matrix in
the numerator       is evaluated under the 8 = 1 null. In practice, the parameters of the
short-run ARMA process used to construct Z:, must be estimated; see Saikkonen
and Luukkonen          (1993a) for the details. Saikkonen and Luukkonen        (1993b) apply
this approach to extend the finite-sample        point-optimal   invariant tests of the form
(4.6) to general I(0) errors in the d, = & case and to derive the asymptotic
distribution     of these tests under the null and local alternatives.25

4.2.3.    Consistency       and local asymptotic      power

Consistency.      The statistics with the functional representations     (4.9) reject for large
values of the statistic. It follows that the tests based on the modified ~5~ and L’
statistics and on the G(p, q) statistics are consistent       if V”, 5 co under the I(1)
alternative. Consider, first, the case d, = 0, so that the numerator        of V”, in (4.10) is
T-“‘CE\u,.        Under the I(1) alternative this cumulation    is I(2) and T-3’2Cz\~,*
OS: = ,, W(s) ds. Similarly, if 1, + co but I, = o(T”‘), then @c has the limit I&,!
[TCfnT, _,,k(m/l,)]    =f32jW2.26 Combining        these two results, we have




       N-i’V=/T
         T
                      v*,     where     V*(n) =
                                                    s’
                                                      1

                                                          W(s) ds

                                                               i/2
                                                                                                      (4.11)




and NT = T/c:=          +k(m/l,).      Because     the kernel        k is bounded      and I, = o(T”‘),

   25Bierens and Guo (1993) used a different approach to develop a test of the general I(0) null against
the I(1) alternative, in which the distribution    under the null is made free of nuisance parameters   not by
explicit filtering or estimation of the spectral density at frequency zero, but rather by using a weighted
average of statistics in which the weights are sensitive to whether the I(0) or I(1) hypothesis is true.
   26Suppose that d, = 0 and that the SC estimator is constructed using a fixed number I autocovariances
of y,, rather than letting I, * 00; this would be appropriate      were the MA order of u, finite and known a
priori. Ify, is I(l), T-Z~~=i+,y,y,~i-_T2~~=1~:~0,i=             l,...,k, and moreover T~2~~=1y:*~2~WZ.
It follows by direct calculation   that 4&/[Tx’_      &n/l)]    =.02~W2.    The proof for the general SC
estimator entails extending this result from fixed I to a sequence of I, increasing sufficiently slowly. For
details see Phillips (199lb, Appendix) for the d, = 0 case; Kwiatkowski    et al. (1992) for OLS detrending
with a constant or a linear time trend; Perron (19914 for general polynomial trends estimated by OLS;
and Stock (1992) under general trend conditions including an estimated broken trend.
Ch. 46: Unit Roots, Structural   Breaks and   Trends                                                   2199


N, + cc as T+ 03, so under the fixed I( 1) alternative Vr 3 co. Thus, tests which are
continuous        functionals  of V, and which reject I(0) in favor of I(1) for large
realizations of I’, will be consistent against the fixed I( 1) alternative.
   This is readily extended to general trends. For example, in the case d, = I_I,,
N; ‘I2 I$(.)=-      V*a, where P’*B(%)= Jt W“(s) ds/(JIV2} ‘12. In the detrended       case,
N; ‘I2 If;(.)=      I/*‘, where P’*‘(n) = {t IV(s) ds/{~Wr2} l”, where W’ is the OLS-
detrended Brownian motion in (2.13b). This, in turn, implies that, under the fixed
I( 1) alternative, V; and V; 3 co, and consistency of the test statistics in (4.9) follows
directly.

Local    asymptotic   power.     We examine       local asymptotic      power using a local version
of the UC model (4.2):

        Y, = 4 + 4,     4 = uot+ H,u,t                                                              (4.12)

where uot and ult are respectively I(0) and I(1) in the sense that (uot,Ault) satisfy
(2.1)-(2.3) and where H, = h/T, where h is a constant. Because H, -+O, the I( 1)
component      of y, in (4.12) vanishes asymptotically,    so that (4.12) provides a model
in which y, is a local-to-I(O) process.
   For concreteness and to make the link between the UC and MA models precise,
we will work with the special case of (4.12) in which uot and Aui, are mutually and
serially uncorrelated     and have the same variance. Then the local-to-I(O) UC model
(4.12) has the MA(l) representation,       Au, = E, - 0r~,_ i, where 0, = 1 - h/T+ o(T-‘)
and where E, is serially uncorrelated.          Thus, the local-to-I(O) parameterization
H, = h/T is asymptotically       equivalent to a local-to-unit    MA root with the nesting
eT = 1 - hlT.27
   To analyze the local power properties of the tests in (4.9), we obtain a limiting
representation    of V”, under the local-to-I(O) model. First consider the case d, = 0. The
behavior of the numerator follows from the FCLT and CMT. Define the indepen-
dent Brownian motions          W, and W, respectively as the limits T- ‘/2C~\uos~
q, W,(.) and T- ‘12ulIT,l+-~l WI(.). By assumption,            w. = oi, so T-1’2C~~~~, =
 T- “‘C~‘=‘& + hT-3/2xfT’1 5= l~ts~~OUh(~),          where u,,(J) = W,(A) + hJtW,(s)ds.   It
can additionally    be shown that, in the local-to-I(O) model (4.12), the SC estimator has
the limit 6ic A c$, [Elliott and Stock (1994, Theorem 2)]. Thus                          Vr=> U,, from
which it follows that the statistics in (4.9) have the local asymptotic                  representation
g(U,) for their respective g functionals.



    27The rate T for this local nesting is consistent with the asymptotic  results in the unit MA root and
UC test literatures, which in general find that this nesting is an appropriate     one for studying rates of
convergence     of the MA estimators and/or the local asymptotic      power of tests. In the MA unit root
literature, see Sargan and Bhargava (1983b), Anderson and Takemura (1986), Tanaka and Satchel1 (1989),
Tanaka (1990b) and Saikkonen and Luukkonen (1993b); in the UC literature, see Nyblom and Makelainen
(1983) Nyblom (1986, 1989) and Nabeya and Tanaka (1988).
2800                                                                                   J.H. Stock


                                                Table 3
                                    Power of MA unit root tests
                         [S percent level tests, demeaned case (d, = &,)].”

               h         PE           LP         POI(O.5)       G(O, 1)       WI 2)

               A. T= 50
                 1      0.064       0.064         0.061         0.058         0.059
                2       0.103       0.101         0.095         0.087         0.089
                5       0.304       0.299         0.298         0.279         0.268
               10       0.631       0.570         0.633         0.583         0.596
               15       0.823       0.717         0.815         0.745         0.776
               20       0.909       0.803         0.898         0.823         0.864
               30       0.976       0.878         0.960         0.890         0.932
               40       0.992       0.914         0.979         0.912         0.954
               B. T= 100
                1      0.064        0.064         0.066         0.065         0.060
                2      0.106        0.107         0.101         0.103         0.090
                5      0.332        0.319         0.321         0.311         0.289
               10      0.659        0.605         0.664         0.623         0.629
               15      0.845        0.765         0.841         0.779         0.807
               20      0.931        0.852         0.919         0.857         0.890
               30      0.985        0.923         0.974         0.924         0.952
               40      0.996        0.958         0.99 1        0.944         0.974
              C. T=200
                1      0.062        0.063         0.064         0.062         0.063
               2       0.102        0.104         0.099         0.097         0.095
               5       0.314        0.309         0.316         0.305         0.299
              10       0.669        0.605         0.667         0.621         0.640
              15       0.851        0.758         0.841         0.779         0.811
              20       0.937        0.847         0.922         0.854         0.894
              30       0.988        0.934         0.980         0.924         0.956
              40       0.998        0.965         0.995         0.950         0.976
              D. T= 1000
                1     0.061         0.062         0.057         0.055         0.057
               2      0.099         0.102         0.087         0.086         0.08 1
               5      0.329         0.321         0.310         0.296         0.283
              10      0.661         0.613         0.663         0.624         0.632
              15      0.853         0.717         0.843         0.789         0.811
              20      0.944         0.866         0.929         0.871         0.900
              30      0.992         0.948         0.985         0.937         0.963
              40      0.999         0.978         0.996         0.962         0.981

                 “Data were generated according     to the unobserved    components
              model, y, = u,, where u, = uO, + H,u,,, (u,,~,A+) are i.i.d. N(0, I)
              and H, = h/T. PE denotes the power envelope. The remaining tests
              are based on the indicated statistics as defined in the text. Based on
              5000 Monte Carlo repetitions.




   The power functions for the statistics in (4.9) along with the power envelope are
summarized in Tables 3 (for the case d, = 8,) and 4 (for the case d, = p,, + fill). The
power functions were computed by Monte Carlo simulation           for various values of
7’, so technically all the power functions are finite-sample although the simulations
Ch. 46: Unit Roots, Structural Breaks and Trends                                                        2801


                                                       Table 4
                                           Power of MA unit root tests
                            [5 percent   level tests, detrended case (d, = j& + Bit)].“

                  h            PE            L’         POI(O.5)        G(L2)        G(l,3)

                  A. T= 50
                   1       0.053            0.052         0.052         0.055         0.055
                   2       0.062            0.062         0.061         0.062         0.062
                   5       0.139            0.132         0.131         0.117         0.118
                  10       0.349            0.322         0.348         0.259         0.299
                  15       0.585            0.513         0.578         0.379         0.477
                  20       0.744            0.659         0.746         0.469         0.603
                  30       0.905            0.810         0.899         0.569         0.733
                  40       0.958            0.880         0.954         0.618         0.795
                  B. T= 100
                   1      0.055             0.055         0.053         0.052         0.05 1
                   2      0.064             0.063         0.063         0.060         0.060
                   5      0.127             0.136         0.130         0.121         0.113
                  10      0.359             0.349         0.359         0.277         0.298
                  15      0.610             0.560         0.609         0.414         0.491
                  20      0.775             0.704         0.777         0.507         0.632
                  30      0.939             0.864         0.928         0.629         0.777
                  40      0.984             0.928         0.975         0.689         0.842
                  C. T=200
                    1      0.055           0.054          0.049         0.053        0.050
                   2       0.063           0.064          0.056         0.062        0.062
                   5       0.136           0.136          0.122         0.111        0.125
                  10       0.369           0.357          0.362         0.269        0.323
                  15       0.613           0.569          0.610         0.415        0.517
                  20       0.785           0.718          0.776         0.521        0.655
                  30       0.948           0.880          0.935         0.640        0.792
                  40       0.989           0.950          0.980         0.708        0.867
                  D. T= 1000
                    1     0.051            0.052          0.054         0.052        0.052
                   2      0.060            0.059          0.063         0.062        0.060
                   5      0.131            0.127          0.123         0.120        0.116
                  10      0.370            0.353          0.366         0.323        0.335
                  15      0.629            0.576          0.624         0.521        0.554
                  20      0.815            0.743          0.805         0.671        0.712
                  30      0.963            0.905          0.953         0.825        0.868
                  40      0.994            0.969          0.990         0.893        0.942

                      “See the notes to Table 3.


suggest that the T= 1000 power is effectively the asymptotic   local power.28 In
addition, the power of the point-optimal  tests which are tangent to the power


    “Tabulations     of exact power functions and the finite-sample     power envelope under the Gaussian
model appear in several places in the literature. Those tabulations        are based on the Imhof algorithm.
When results in the literature are directly comparable     to those in Tables 3 and 4, they agree to within
two decimals. For results in the demeaned UC model, see Nyblom and Makelainen (1983) and Shively
(1988); for tabulations     in the detrended UC model, see Nyblom (1986). Tanaka (1990b) tabulates both
finite-sample and limiting powers of the L” statistic, where the latter is computed by inverting numerically
its limiting characteristic    function [Tanaka (1990b, Theorem 2)]. Tanaka’s limiting power for L” agrees
with the T= 1000 powers in Table 3 to within the Monte Carlo error.
2802                                                                                   J.H. Stock


envelope at power of 50percent are reported. In the demeaned case, this test was
suggested by Shively (1988), and the test is the MPI test against the local alternative
h= 7.74. In the detrended case, calculations suggest that the power envelope attains
5Opercent at approximately          h = 13, so the MPI test against the local alternative
h= 13 is reported. This test, the POI(0.5) statistic in Table 4, is almost the same test
as was proposed by Franzini and Harvey (1983): if the local-to-I(O) asymptotics are used
to interpret their recommendations       (which were based on a Monte Carlo experiment
with T= 20), then the Franzini-Harvey           statistic is the point-optimal    invariant test
which is point-optimal        against the local alternative     CE 17. (Interpreted     thus, the
Franzini-Harvey       statistic is asymptotically     MPI at a power of approximately          70
percent.) These tables summarize the power findings of Nyblom and Makelainen
(1983), Nyblom (1986), Shively (1988), Tanaka (1990b) and Saikkonen and Luukkonen
(1993a, 1993b).
    Five main conclusions       emerge from these tables. First, the convergence           of the
finite-sample     powers to the asymptotic limits appears to be relatively fast, in the
sense that the T = 100 powers and T = 1000 powers typically differ by less than 0.02.
Second, as was the case with tests for a unit autoregressive root, the powers deteriorate
as the order of detrending increases from demeaning to linear detrending, particularly
for alternatives of h near zero. For example, the L@statistic has a limiting power of
0.61 against h = 10, while the corresponding          power for the L’ statistic is 0.35. Third,
the point-optimal      tests perform better than the LMPIU test against all but the
closest alternatives.    Fourth, although the ParkkChoi            G(p,p + 1) and G(p,p + 2)
tests are strictly below the power envelope, they nonetheless perform rather well
and in particular have power curves only slightly below the L” and L’ statistics.
Fifth, it is important     to emphasize that all these differences are rather modest in
comparison      to the large differences in powers found among the various tests for a
unit AR root. For example, the Pitman efficiency of the LP statistic relative to the
MPI test at power = 50 percent is approximately                 1.1, indicating   a loss of the
equivalent    of only 10 percent of the sample if the L’ statistic is used in this case
rather than the MPI test.

4.2.4.   Finite-sample size and power

A small Monte Carlo experiment was performed to examine the finite-sample                  size
and power of tests of the I(0) null. Unlike for tests of the I( 1) null, as of this writing,
there have been few Monte Carlo investigations               of tests of the general I(0) null;
exceptions include Amano and van Norden (1992) and Kwiatkowski et al. (1992). The
simulation   here summarizes the results of these two studies for the L’ statistic by
using a similar design (autoregressive          errors) and extends them to include the
ParkkChoi     G(p,p + 2) statistics and to examine the effect of kernel choice on test
performance.
   In the d, = &, case, the experiment considers the modified L@and G(O,2) statistics
(based on I’“,); in the d, = /I, + fil t case, the statistics are the modified L’ and G( 1,3)
Ch. 46: Unit    Roots,   Structural   Breaks   and Trends                                       2803


statistics (based on V’,). The spectral density was estimated using two SC spectral
estimators with a truncated automatic bandwidth selector. The automatic bandwidth
is I, = min[f& 12(T/100)“~2], where &- is Andrew? (1991) automatic selector based
on an estimated AR(l) model. The two kernels are the Parzen kernel and the QS
kernel, the latter being Andrews’ (1991) optimal kernel, and the appropriate selector
for each kernel is used. [The automatic      bandwidth    selector is truncated  because
unless ir is bounded in the I( 1) case it does not satisfy the o( T- 1’2) rate condition
needed for consistency as described in Section 4.2.3.1
   The pseudo-data     were generated so that u, followed the AR(l),

      Y, =     u,> Au, = (1 - fX)u,,
      where        u, = pu,_ I + Em, E, i.i.d. N(0, l),                                       (4.13)

 where u. = 0 and u. is drawn from its unconditional           distribution.     When Ip I < 1 and
 0 = 1, y, is I(0) and the experiment examines the size of the test. When IpI < 1 and
 181< 1, y, is I(1). When p = 0, this is the MA(l) model and corresponds                      to the
 local-to-unity    model (4.12) with (uor, AUK,) mutually and serially uncorrelated             with
 the same variance, in which case 0 = 1 - h/T+ o(T- ‘).
    Empirical size (in italics) and size-adjusted         power are presented for T= 100 in
 Table 5 (the demeaned case) and Table 6 (the detrended case). Size-adjusted power
 in a (p,B) design, 101< 1, is computed using the 5 percent empirical quantile for
 (p, 0 = 1) for each value of p.
    These results suggest three conclusions.          First, the choice of spectral estimator
matters for size, less so for size-adjusted        power. For example, if the Parzen kernel
is used, the size deteriorates        substantially     when the serial correlation         is large
(p = 0.9). [If the Bartlett kernel is used, as suggested by Tanaka (1990b) and
Kwiatkowski       et al. (1992), similar size distortions arise (results not shown in these
tables).] In contrast, the size is much better controlled using the QS kernel. This is
true for both of the statistics examined, in both the demeaned and detrended cases.
On the other hand, the size-adjusted           powers for both statistics in both cases are
comparable      for the two spectral estimators. Interestingly,          for distant alternatives
the size-adjusted     power declines in the p = 0 case for the demeaned statistics, and
the decline is more pronounced          for the QS statistics.
    Second, a comparison of the results in Tables 3 and 4 with those in Tables 5 and
6, respectively, reveals that when p = 0 the finite-sample size-adjusted power is fairly
close to the power predicted by the local-to-I(O) asymptotics of Section 4.2.3, at least
for close and moderately close alternatives. At least in the p = 0 case, the use of the
SC estimator seems to have little impact on either size or power. However, size-
adjusted power deteriorates          sharply as the autoregressive           nuisance    parameter
increases towards one. Interestingly,         detrending makes little difference in terms of
size. This is noteworthy,        given the large impact of detrending              in the I(1) test
situations.
2804                                                                                                    J.H.   Stock

                                                         Table 5
                 Size and size-adjusted power of selected tests of the I(0) null: Monte Carlo results
                               [5 percent level tests, demeaned case (d, = [j,), T= 1001
                         [Data generating process: (1 - pL)Ay, = (1 - OL)a,, E, i.i.d. N(0, l)].”

                                                                                  P=
Test                                  Asymptotic
Statistic                               Power             0.0         0.9        0.75         0.5          -0.5
            -
V                          1.00           0.05            0.05        0.26       0.10        0.06          0.04
P(auto)                    0.95           0.32            0.29        0.26       0.25        0.25          0.29
                           0.90           0.61            0.55        0.43       0.46        0.47          0.56
                           0.80           0.87            0.69        0.53       0.58        0.60          0.79
                           0.70           0.95            0.68        0.55       0.61        0.64          0.87
                           1.00           0.05            0.05        O.fl       0.05        0.06          0.04
QS(auto)                   0.95           0.32            0.30        0.24       0.2 1       0.24          0.29
                           0.90           0.61            0.57        0.39       0.36        0.39          0.56
                           0.80           0.87            0.72        0.46       0.47        0.43          0.80
                           0.70           0.95            0.67        0.49       0.49        0.44          0.88
G(O, 2)                    1.00           0.05            0.05        0.29       0.10        0.05          0.03
P(aut0)                    0.95           0.28            0.28        0.26       0.24        0.23          0.26
                           0.90           0.63            0.58        0.48       0.49        0.49          0.57
                           0.80           0.90            0.76        0.62       0.66        0.67          0.8 1
                           0.70           0.96            0.76        0.65       0.70        0.72          0.88
WI 2)                      1.00           0.05            0.05        0.07       0.04        0.06          0.04
QS(auto)                   0.95           0.28            0.29        0.19       0.16        0.21          0.26
                           0.90           0.63            0.60        0.37       0.33        0.34          0.57
                           0.80           0.90            0.78        0.49       0.47        0.37          0.81
                           0.70           0.96            0.72        0.52       0.52        0.38          0.88

   “For each statistic, the first row of entries are the empirical rejection rates under the null, that is, the
empirical size of the test, based on the asymptotic          critical value. The remaining   entries are the
size-adjusted power for the model given in the column heading. The column Asymptotic              Power gives
the T= 1000 rejection rate for that statistic from Table 3 using 8, = 1 - h/T. The entry below the name
of each statistic indicates the spectral density estimator used. P(auto) and QS(auto) refer to the SC
estimator, computed respectively using the Parzen and QS kernels, each with lag lengths chosen by the
respective truncated automatic selector in Andrews (1991). Based on 5000 Monte Carlo repetitions.


   Third, the differences in size-adjusted   power across test statistics are modest.
Because of its better size performance,    we restrict the discussion to the results for
the QS kernel. In the demeaned case, G(0,2) has somewhat better size-adjusted
power than the modified LP statistic for distant alternatives       when u, is positively
correlated;  for 0 near one, the modified LP statistic is more powerful. In the
detrended case, G( 1,3) and modified L’ have essentially the same size-adjusted
powers.

4.2.5.          Summary    and implications for empirical practice

The literature on tests of the general I(0) null against the I(1) alternative is still young.
Subject to this caveat, the results here suggest several observations.       The asymptotic
power analysis of Section 4.2.3 suggests that there is little room for improvement
on the performance      of the currently    proposed tests, at least in terms of local
Ch. 46: Unit Roots, Structural    Breuks and Trends                                                        2805


                                                      Table 6
             Size and size-adjusted power of selected tests of the I(0) null: Monte Carlo results
                        [5 percent level tests, detrended case (d, = t!&, + PI t). T= 1001
                     [Data generating process: (1 - pL)Ay, = (1 - OL)E,,E, i.i.d. N(0, l)].”

                                                                              P=
Test                              Asymptotic
Statistic               0           Power             0.0         0.9        0.75         0.5       -0.5

L’                     1.00           0.05            0.05        0.29       0.11        0.06       0.04
P(aut0)                0.95           0.13            0.13        0.12       0.12        0.12       0.12
                       0.90           0.35            0.34        0.23       0.25        0.25       0.32
                       0.80           0.74            0.62        0.36       0.41        0.43       0.65
                       0.70           0.91            0.64        0.40       0.47        0.50       0.81
c                      1.00           0.05            0.05        0.10.      0.05        0.06       0.04
QS(auto)               0.95           0.13            0.13        0.10       0.09        0.12       0.13
                       0.90           0.35            0.35        0.19       0.16        0.22       0.33
                       0.80           0.74            0.65        0.28       0.25        0.25       0.67
                       0.70           0.91            0.68        0.30       0.28        0.23       0.83

G(L 3)                 1.00           0.05            0.04       0.30        0.12        0.07       0.04
P(aut0)                0.95           0.12            0.12       0.12        0.11        0.11       0.11
                       0.90           0.34            0.31       0.25        0.24        0.23       0.28
                       0.80           0.71            0.58       0.40        0.43        0.43       0.59
                       0.70           0.87            0.62       0.46        0.49        0.51       0.73

G(L 3)                 1.00           0.05            0.04       0.13        0.07        0.07       0.04
QS(auto)               0.95           0.12            0.12       0.10        0.08        0.10       0.11
                       0.90           0.34            0.32       0.18        0.15        0.20       0.29
                       0.80           0.71            0.61       0.28        0.24        0.25       0.60
                       0.70           0.87            0.64       0.32        0.28        0.24       0.74

     “See the notes to Table 5




asymptotic power. The various tests have asymptotic relative efficiencies fairly close
to one, and the point-optimal          tests (the Shively and Franzini-Harvey        tests),
interpreted in the local-to-I(O) asymptotic framework, have power functions that are
close to the power envelope for a large range of local alternatives.
   The Monte Carlo results suggest, however, that there remains room for improve-
ment in the finite-sample      performance    of these tests. With the Parzen kernel, the
tests exhibit large size distortions;      with the QS kernel, the size distortions     are
reduced but the finite-sample       power can be well below its asymptotic     limit. For
autoregressive  parameters not exceeding 0.75, both the G(p, p + 2) and L statistics,
evaluated using the QS(auto) kernel, have Monte Carlo sizes near their asymptotic
levels and have comparable power.



5.     Structural breaks and broken trends

This section examines two topics: structural      breaks and parameter instability   in
time series regression; and tests for a unit root when there are kinks or jumps in the
2806                                                                                         J.H. Stock


deterministic     trend (the “broken-trend”         model). At first glance these problems seem
quite different. However, there are close mathematical                and conceptual links which
this section aims to emphasize. Mathematically,               a multidimensional         version of the
FCLT plus CMT approach of Section 2 is readily applied to provide asymptotic
representations        for a variety of tests of parameter              stability.    [An early and
sophisticated      application     of the FCLT to the change-point          problem can be found
in MacNeill(1974).]         Conceptually,     the unobserved components            model with a small
independent      random walk component             is in fact a special case of the more general
time-varying-parameter           model. Also, these topics recently have become intertwined
in empirical investigations          into unit roots when one maintains the possibility that
the deterministic       component       has a single break, for example is a piecewise-linear
time trend.
    Section 5.1 addresses testing for and, briefly, estimation of parameter instability
 in time series regression with I(O) regressors, including the case when there are lagged
dependent I(0) variables and, in particular, stationary                autoregressions.       The main
empirical application         of these tests is as regression diagnostics and, as an example
in Section 5.1.4, the tests are used to assess the stability of the link between various
monetary aggregates and output in the U.S. from 1960 to 1992. The literature on
parameter instability and structural breaks is vast, and the treatment here provides
 an introduction      to the main applications       in econometric time series regression from
a classical perspective. The distribution            theory for the tests is nonstandard.          Here,
 the alternatives     of interest have parameters which are unidentified                under the null
hypothesis; for example, in the case of a one-time change in a coefficient, under the
 null of “no break” the magnitude               of the change is zero and the break date is
unidentified.     Davies (1977) showed that, if parameters are unidentified                   under the
null, standard x2 inference does not obtain, and many of the results in Section 5.1
can be seen as special cases of this more general problem. For further references on
parameter      instability     and breaks, the reader is referred to the reviews and
bibliographies      in Hack1 and Westlund (1989) Krishnaiah and Miao (1988), Kramer
and Sonnberger (1986) and, for Bayesian work in this area, Zacks (1983) and Barry
and Hartigan (1993).
    Section 5.2 turns to inference about the largest root in univariate autoregression
under the maintained          hypothesis that there might be one-time breaks or jumps in
the deterministic        component.       In innovative     papers, Perron (1989a, 1990b) and
Rappoport       and Reichlin (1989) independently              suggested that the broken-trend
model provides a useful description of a wide variety of economic time series. Perron
(1989a) argued, inter alia, that U.S. postwar real GNP is best modeled as being I(O)
around a piecewise-linear          trend with a break in 1973, and Rappoport and Reichlin
(1989) argued that U.S. real GNP from 1909-1970 [the Nelson-Plosser                        (1982) data]
was stationary around a broken trend with a break in 1940. These results seem to
suggest that the long-term properties of output are determined                       not by unit-root
dynamics, but rather by rare events with lasting implications                    for mean long-term
growth, such as World War II and the subsequent shift to more activist governmental
Ch. 46: Unit Roots, Structural Breaks and Trends                                         2807


economic policy, or the oil shock and productivity      slowdown of the mid-1970’s.
Whether this view is upheld statistically is a topic of ongoing debate in which the
tests of Section 5.2 play a central role.



5.1.       Breaks in coeficients in time series regression

5.1 .l.        Tests,for a single break date

Suppose          y, obeys the time series regression          model

          Y, =   a:x,-   1   +   E;,                                                     (5.1)
where under the null hypothesis /I, = fl for all t. Throughout          Section 5.1, unless
explicitly stated otherwise, it is maintained that E,is a martingale difference sequence
with respect to the o-fields generated by {E,_ i , X, _ i, E,_ 2, X, _ 2,. . .}, where X, is a
k x 1 vector of regressors, which are here assumed to be constant and/or I(0) with
EX,X: = Z, and, possibly, a nonzero mean. For convenience,             further assume that
E, is conditionally    (on lagged E, and X,) homoskedastic.             Also, assume that
T- ‘CyzA”,‘XSX:A AZ’, uniformly in 1 for 1~[0,1]. Note, in particular, that X,_ 1 can
include lagged dependent variables as long as they are I(0) under the null.
   The alternative hypothesis of a single break in some or all of the coefficients is


          &=/I,       t <r        and     p, =/?+   y,   t > r,                          (5.2)

where r, k + 1 < r < T, is the “break date” (or “change point”) and y # 0.
   When the potential break date is known, a natural test for a change in j? is the
Chow (1960) test, which can be implemented       in asymptotically equivalent Wald,
Lagrange multiplier (LM), and LR forms. In the Wald form, the test for a break at
a fraction r/T through the sample is



                  r =SSR,,,- WR,,, + SW+ 1,d
          F,
                 0T          (S%,,      + SSR,+,,,)MT-     2k) ’
                                                                                         (5.3)


where SSR13, is the sum of squared residuals from the estimation              of (5.1) on
observations   1,...,r,etc. For fixed r/T, F,(r/T) has an asymptotic xz distribution
under the null. When the break date is unknown, the situation is more complicated.
One approach might be to estimate the break date, then compute (5.3) for that break.
However, because the change point is selected by virtue of an apparent break at
that point, the null distribution  of the resulting test is not the same as if the break
date were chosen without regard to the data. The means of determining            r/T must
be further specified before the distribution    of the resulting test can be obtained.
2808                                                                           J.H. Stock


   A natural solution, proposed by Quandt (1960) for time series regression and
extended by Davies (1977) to general models with parameters unidentified         under
the null, is to base inference on the LR statistic, which is the maximal F, statistic
over a range of break dates ro, . , rl. This yields the Quandt likelihood ratio (QLR)
statistic.


       QLR = max r _-10 ,...,r, F,                                                  (5.4)


Intuition   suggests that this statistic will have power against a change in /I even
though the break date is unknown. The null asymptotic distribution            of the QLR
statistic remained unknown for many years. The FCLT and CMT, however, provide
ready tools for obtaining this limit. The argument is sketched here; for details, see
Kim and Siegmund (1989) and, for a quite general treatment              of “sup tests” in
nonlinear models, Andrews (1993b).
   To obtain the limiting null distribution of the QLR statistic, let F&/T) = SSR,,, -
(SSR,,, + SSR,+,,,) and use (5.1) to write




                 = - v,(l)‘VT(l)-‘v,(l)         + VT($(;)-‘vJ+)


                      +[~,(l)-V,(:)][vWG(~)]-l[vr(l)-v,(~)].

                                                                                     (5.5)

where vT(A) = T-1’2C~~~Xt_1~, and VT(A) = T-‘C~T_hjX,_lX~_l.              Because E, is a
martingale difference sequence, X,_ 1E, is a martingale     difference sequence. Addi-
tionally, assume throughout Section 5.1 that X,_ 1 has sufficiently limited dependence
and enough moments for X,_ 1~, to satisfy a multivariate           martingale  difference
sequence FCLT, so vr-(.)=a,Z$‘*      W,(*), w h ere W, is a k-dimensional       standard
Brownian motion. Also, recall that by assumption     V,(A) 11, AZ, uniformly in ,I. By
applying these two limits to the second expression in (5.5), one obtains

       &(+=a;F*(.),                                                                 (5.6)
Ch. 46: Unit Roots. Structural Breaks and Trends                                                  2809


where

                                     w&)‘%(n)       + [W,(l) -     ~k(4I’C~kU)- ~k(41
     F*(A) = - W,(l)‘W,(l)         + -   ~
                                                                      1-A
                 B;(A)‘B;(k)
             =    n(1 -2)      ’

where &(I.) = IV,(n) - Al+‘,(l), where          W,(l) is a k-dimensional        Brownian      bridge.
Because g,=sazF*    and SSR,,,/(T-  k) L cf under the null, (SSR,,, + SSR,, i,r)/
(T- 2k) -% cf uniformly   in r. Thus F, a F *. It follows from the continuous
mapping theorem that the QLR statistic has the limiting representation,



                                         ‘3                                                      (5.7)



-where ,$ = lim T4mri/T, i = 0,l. For fixed 1, F*(x) has a x,’ distribution.
     Andrews (1993b, Table I) reports asymptotic critical values of the functional in
 (5.7), computed by Monte Carlo simulation for a range of trimming parameters and
 k = 1,. . . ,20. The critical values are much larger than the conventional      fixed-break
 xf critical values. For example, consider 5 percent critical values with truncation
 fractions (A,,, 2,) = (0.15,0.85): for k = 1, the QLR critical value is 8.85, while the xf
 value is 3.84; for k = 10, the QLR critical value is 27.03, while the x:, critical value
 is 18.3. In practice the researcher must choose the trimming parameters r,, and ri.
 In some applications        the approximate    break date might be known and used to
 choose r0 and rI. Also, with nonnormal         errors and small r. the fixed-r distribution
 of the FT(r/T) statistic can be far from x:, so one way to control size is to choose r.
 sufficiently large, say r,lT= 0.15 and r,lT= 0.85.”
     The error process has been assumed to be serially uncorrelated.          If it is serially
 correlated     but uncorrelated      with the regressors, then the distribution        of the
 change-point      test differs. In the case of a known break date, this problem is well
 studied and the Wald test statistic should be computed using an autocorrelation-
 consistent estimator of the covariance matrix; for recent work and discussion of the
 literature, see Andrews (1991) and Andrews and Monahan (1992). For the extension
 to break tests with unknown break dates, see Tang and MacNeill (1993).


   29Functionals   of Fr(L) other than the supremum are possible. Examples include the average of F,.,
perhaps over a restricted range, as studied by Andrews and Ploberger (1992) and Hansen (1990) [see
Chernoff and Zacks (1964) and Gardner (1969) for historical precedents]. Andrews and Ploberger (1992)
consider tests which maximize weighted average local asymptotic power, averaged over the unidentified
nuisance parameters (here, the break date). The resulting family of optimal tests are weighted averages
of exponentials,  with the simple weighted average as the limit for nearby alternatives. The Andrews-
Ploberger (1992) tests are reviewed in the chapter by Andrews in this Handbook.
 2810                                                                                      J.H. Stock


    The derivation        of (5.6) assumes that T- “‘C~E~XS_ 1~, obeys an FCLT and
  T - ‘C~‘=“,lX,X’s A AZ, uniformly in 2. These assumptions                hold if X, contains a
 constant and/or I(0) regressors, but not if X, is I(1). A sufficient condition for (5.6)
 not to hold is that the standard Chow test for fixed r/T does not have an asymptotic
 x2 distribution,     since F*(x) has a x2 distribution      for any fixed 1. This will occur, in
 general, for I( 1) regressors (although there are exceptions in cointegrating           relations;
 see Watson’s chapter in this Handbook)             and, in these cases, the derivations       must
 be modified; see Banerjee et al. (1992b), Chu and White (1992) and Hansen (1992)
 for examples.
    In principle this approach can be extended to more than one break. A practical
 difficulty is that the computational         demands increase exponentially       in the number
 of breaks (all values of the two-break F-statistic need to be computed for break
 dates (r,s) over the range of r and s), which makes evaluating                      the limiting
distributions     currently difficult for more than two or three break dates. More
 importantly,     positing multiple exogenous breaks raises the modeling question of
 whether the breaks are better thought ofas stochastic or as the result of a continuous
 process. Indeed, this line of reasoning leads to a formulation         in which the parameters
change stochastically in each period by random amounts, which is the time-varying
parameter model discussed in Section 5.1.3.
    A related problem is the construction          of confidence intervals for the break date.
A natural estimator of the break date is the Gaussian MLE 1, which is the value of
~E(&,~,) which maximizes the LR test statistic (5.3). The literature on inference
about the break date is large and beyond the scope of this chapter, and we make
only two observations.          First, 1 is consistent for ;1 when the break magnitude             is
indexed to the sample size (y = yr) and yr +O, T1j2yT+ co [Picard (1985), Yao
(1987), Bai (1992)], although F itself is not consistent.             Second, it is possible to
construct asymptotic confidence intervals for 2, but this is not as straightforward
as inverting the LR statistic using the QLR critical values because the null for the
LR statistic is no break, while the maintained           hypothesis for the construction        of a
confidence interval is that a break exists. Picard’s (1985) results can be used to
construct confidence intervals for the break date by inverting a Wald-type statistic,
an approach extended to time series regression with dependent errors by Bai (1992).
Alternatively,     finite-sample     intervals can be constructed       with sufficiently strong
conditions     on E, and strong conditions        on X,; see Siegmund (1988) and Kim and
Siegmund (1989) for results and discussion.

5.1.2.   Recursive coejicient estimates and recursive residuals

Another approach to the detection of breaks is to examine the sequence of regression
coefficients estimated with increasingly large data sets, that is, to examine p(A), the
OLS estimator of /? computed using observations     1, . . . , [TA]. These tests typically
have been proposed without reference to a specific alternative, although the most
commonly studied alternative is a single structural break. Related is Brown’s et al.
Ch. 46: Unit Roots, Structural    Breaks and Trends                                          2811

(1975) CUSUM statistic, which rejects when the time series model systematically
over- or under-forecasts     ytr more precisely, when the cumulative   one-step-ahead
forecast errors, computed       recursively, are either too positive or negative. The
recursive coefficients and Brown’s et al. (1975) recursive residuals and CUSUM
statistic are, respectively, given by



                                                                                             (5.8)

                  w =Yt-if@-                l)/VX,-1
                    f                                                                        (5.9)
                                          .l-t       ’
                                    CT11
                            T”2     c       ws
                                  s=k+l
      CUSUM(n)          =                                                                  (5.10)
                                  ZE             ’


where d,= {T-1~~=k+l(~,-~)2)1’2          and f,= (1 +X:_l~~=:Xs_,X:_,)-‘X,_,)‘i2
(this comes from noting that the variance of the one-step-ahead         forecast error is
eff:). The CUSUM test rejects for large values of sup,,< 1G 11CUSUM(A)/(l        + 2A)I.
   Because the recursive coefficients are evaluated at each point r, the distribution
of the recursive coefficients differs from the usual distribution of the OLS estimator.
The asymptotics      readily obtain using the tools of Section 2. Under the null
hypothesis /I, = /I, the arguments leading to (5.6), applied here, yield


                                                                  a,z,‘~2wk(A)
      T”2(p(-)-p)= vT(pvT(‘)*p*(*),                      p*(n)=        ~                    (5.11)



(Ploberger et al. (1989), Lemma A.l). For fixed I, p*(A) has the usual OLS asymptotic
distribution.     An immediate implication         of (5.11) is that conventional   “95 percent”
confidence intervals, plotted as bands around the path of recursive coefficient
estimates, are inappropriate          since those bands fail to handle simultaneous     inferences
on the full plot of recursive coefficients.
   Combined with the CMT, (5.11) can be used to construct a formal test for parameter
constancy based on recursive coefficients. An example is Ploberger’s et al. (1989)
“fluctuations”       test [also see Sen (198O)J which rejects for large changes in the
recursive
       -      coefficients,
                -             specifically when b(A) - p(1) is large. From (5.1 l), note that
 T1’2(8(~)-B(1))ja,~,1’2(Wk(;l)/~-             Wk(1)) uniformly in 1. Because the full-sample
OLS estimator &f is consistent under the null, @r)(n) = 6E-1(T-‘x’X,_                 lXi_ 1)1/2 x
T”2(p(n) - B( 1)) =- W,(n)/2 - W,(l), uniformly in 1. This leads to Ploberger’s et al.
(1989) “fluctuations”       test and its limiting representation     under the null of parameter
2812                                                                                                     J.H. Stock


constancy,




where BIT) is the ith element of BcT)and Bki is the ith element of the k-dimensional
Brownian bridge B,.
   The null distribution of the CUSUM test is also obtained by FCLT and CMT
arguments. If X,_ 1 is strictly exogenous and E,is i.i.d. N(0, G:), then w, is i.i.d. N(0, a:),
so the FCLT and CMT imply


       CUSUM(.) =z.W( .),                                                                                    (5.13)


where W is a l-dimensional Brownian motion. The same limit obtains with general
I(O) regressors and a constant, but the calculation is complicated and is omitted
here; for the details, see Kramer et al. (1988), who prove (5.13) for time series
regressions possibly including lagged dependent variables and for general i.i.d.
errors (their i.i.d. assumption can be relaxed to the martingale difference assumption
used here). Critical values for sup,)CUSUM(i)/(l       + 2A)( are obtained from results
in Brownian motion theory; see Brown et al. (1975).
   An important feature of the CUSUM statistic is that, as shown by Kramer et al.
(1988), it has local asymptotic power only in the direction of the mean regressors:
coefficient breaks of order T- ‘I2 on mean-zero stationary regressors will not be
detected. This has an intuitive explanation. The cumulation of a mean-zero
regressor will remain mean-zero (and will obey an FCLT) whether or not its true
coefficient changes, while the nonzero mean of the cumulation of the constant
implies that breaks in the intercept will result in systematically biased forecast
errors.3o This is both a limitation and an advantage, for rejection suggests a
particular alternative (instability in the intercept or the direction of the mean
regressors).
   Several variants of the CUSUM statistic have been proposed. Ploberger and
Kramer’s (1992a) version, in which full-sample OLS residuals &,replace the recursive
residuals Gi),,is attractive because of its computational simplicity. Again, the
distribution is obtained using the FCLT and CMT. Their test statistic and its


     30Consider the simplest case, in which y, = et under the null while under the local alternative y, =
 T-1’2yl(t > r)X,_ 1+ E,.Since /J’is known to equal zero, under the null (with y = 0 imposed) the cumulated
residuals process is just T -‘iz~~=Iy~.       Under the local alternative,      T - q:;;ys       = T - “zc~;Es     +
YT-‘p1’   s ,+I x,_,   =>- W(A) + ymax(O,r/T-   /I)EX,. If EX, is zero, the distribution    IS the same under the
local alternative and the null; the test only has power in the direction of the mean vector EX,. Estimation
of /?, as is of course done in practice, does not affect this conclusion qualitatively     because the alternative
is local. Also see Ploberger and Kramer (1990).
Ch. 46: Unit Roots, Strucrural             Breaks und Trends                                                   2813


limiting        null representation             are



         max       ~~~Yr-l--           3      sup jLY$“)l,                                                   (5.14)
      ko[l,Tl               8,              J.e[O,ll



where B, is the one-dimensional         Brownian bridge and the limit obtains using the
FCLT and CMT. Other variants include Brown’s et al. (1975) CUSUM-of-Squares
test based on w:, and McCabe and Harrison’s (1980) CUSUM-of-Squares                  test based
on OLS residuals. See Ploberger and Kramer (1990) for a discussion of the low
asymptotic power of the CUSUM-of-Squares               test. See Deshayes and Picard (1986)
and the bibliography      by Hack1 and Westlund (1989) for additional references.
   If the regressors are I(l), the distribution      theory for rolling and recursive tests
changes, although it still can be obtained using the FCLT and CMT as it was
throughout    this chapter. See Banerjee et al. (1992b) for rolling and recursive tests
with a single I(1) regressor, Chu and White (1992) for fluctuations            tests in models
with stochastic and deterministic         trends, and Hansen (1992) for Chow-type (e.g.
QLR) and LM-type           [e.g. Nyblom’s       (1989) statistic]   tests with multiple     I(1)
regressors in cointegrating     equations. Also, the distribution     of the CUSUM statistic
changes if stochastically     or deterministically    trending regressors are included; see
MacNeill(l978)      and Ploberger and Kramer (1992b).

5.1.3.      Tests against the time-varying-parameter                          model

A flexible extension    of the standard   regression   model                          is to suppose   that     the
regression coefficients evolve over time, specifically

      y, = B;X,_        1    +   E,,   /3,= /?_        1   +   vt,   Ev,v; = .r2G,                       (5.15)

where E, and vt are uncorrelated       and v, is serially uncorrelated.       The formulation
(5.15), of course, nests the standard linear regression model when r2 = 0. By setting
v, = y, t = I + 1 and v, = 0, t # r + 1, (5.15) nests the single-break        model (5.2). The
alternative of specific interest here, however, is when v, is i.i.d. N(0, t2G) (where G is
assumed to be known) so that the coefficient & follows a multivariate                 stochastic
trend and thus evolves smoothly but randomly               over the sample period. When
combined with the additional assumption          that E, is i.i.d. N(0, a:), this is referred to
as the “time-varying-parameter”        (TVP) model [see Cooley and Prescott (1976),
Sarris (1973) and the reviews by Chow (1984) and Nicholls and Pagan (1985)].
Maximum likelihood estimation         of the TVP model is a direct application             of the
Kalman      filter (/I, is the unobserved     state vector and y, = &X,_ 1 + E, is the
measurement       equation)   and the estimation     of /3, and its standard error under
the alternative is well understood;     see the chapter in this Handbook         by Hamilton.
We therefore focus on the problem of testing the null that r2 = 0.
2814                                                                                    J.H. Stock


   The TVP model (5.15) nests, as a special case, the MA(l) model considered in
Section 4. Setting X, = 1 yields the unobserved components model (4.21, y, = PO + u,,
where u, = (/?, - Do) + E, = C:= 1v, + E,.Thus the testing problem in the general TVP
model can be seen as an extension of the unit MA root testing problem. Starting with
Nyblom and Makelainen             (1983), several authors have studied the properties of
locally most powerful tests of r2 = 0 against t2 > 0 in (5.15) or in models where only
some of the coefficients are assumed to evolve over time (that is, where G has reduced
rank); see for example King and Hillier (1985) King (1988) Nyblom (1989), Nabeya
and Tanaka (1988), Leybourne and McCabe (1989), Hansen (1990), Jandhyala and
MacNeill(l992)          and Andrews and Ploberger (1992). [Also see Watson and Engle
(1985) who consider tests against /?, following a stationary             AR(l).] The treatment
here follows Nyblom and Makeliinen                  (1983) and builds on the discussion         in
Section 4 of tests of the UC model.
   To derive the LMPI test of r2 =o;krsus                 r2 > 0, suppose that X,_ 1 is strictly
exogenous (although the asymptotics hold more generally). Under the TVP model,
(5.15) can be rewritten as y, =&X,-i              + {(C:=,v,)‘X,_ 1 + ct}, where the term in
curly brackets is an unobserved            error. In standard matrix notation        [Y denotes
(Yi, . . . , yr)‘, X denotes (X,, . . , Xr- i)‘, etc.], the conditional distribution  of Y, given
X, is


       Y-NjXP,,o:[l,+(~)V,lj,
                         where                             v,=fi*O(XGX’)                    (5.16)


where 0: = min(i, j) and 0 denotes the, Hadamard           (elementwise) product. The
testing problem is invariant to scale/translation   shifts of the form y + ay + b’X, so
the most powerful invariant test against an alternative .r2 will be a ratio of quadratic
forms involving I, + (?2/a%)vr.. However, this depends on the alternative,         so no
uniformly most powerful test exists. One solution is to consider the LMPI test, which
rejects for large values of Fvr&/&‘c, where {e,} are the full-sample OLS residuals.
Straightforward    algebra shows that T-2&‘1/Te* = T-lx,‘= ,S,(s/T)‘GS,(s/T),      where
S,(A)= T-1’2C,T_[T1J+le*tXt_,, which provides a simpler form for the test: reject if
 T-lx,‘= ,S,(s/T)‘GS,(s/T)    is large. Because this test and its limiting distribution
depend on G, Nyblom (1989) suggested the simplification G=(T-lCT=lX,_          ,X;_,)-‘.
Accordingly, the test rejects for large values of


                                                                                            (5.17)


Conditional  on (X,> the TVP model induces a heteroskedastic    random walk into
the error term which is detected by L using the cumulated    product of the OLS
residuals and the regressors.
   Nyblom (1989) derived the statistic (5.17) by applying local arguments    to a
likelihood for generally nonlinear, nonnormal   models, and his general statistic
Ch. 46: Unit Roots. Structural Breaks and Trends                                                 2815

simplifies to (5.17) in the Gaussian linear regression model. If X, = 1, (5.17) reduces
to the LMPI test (4.7) of the i.i.d. null against the random walk alternative,         or
equivalently   the test of the null of a unit MA root. 31 Henceforth, we refer to (5.17)
as the Nyblom statistic.
   The asymptotics     of the Nyblom statistic follow from the FCLT and the CMT.
As usual, E, need not be i.i.d. normal and X, need not be strictly exogenous; rather
the weaker conditions following (5.1) are sufficient for the asymptotics. Under those
weaker conditions,     E,X, 1 is a martingale     difference sequence and, by the FCLT
 and CMT, S,(.)+CT$, 1/2Bp      k( .), where Bf: is a k-dimensional   standard Brownian
bridge. Because T- ‘Et’= 1X, _ 1XL_ 1 -% Z, and SF L a:, under the null hypothesis,


         L=s       B$)‘B;(E.)   dl.                                                             (5.18)
               s

   The literature contains Monte Carlo results on the finite-sample         power of the
tests in Sections 5.1.1-5.1.3 against various alternatives.     The range of alternatives
considered is broad and some preliminary conclusions have firmly emerged. Many
of the tests overreject in moderately large samples (T = 100) when asymptotic critical
values are used. This is exacerbated         if errors are nonnormal   and, especially, if
autoregressions     have large autoregressive     parameters [QLR and related tests; see
Diebold and Chen (1992)]. In their Monte Carlo study of the QLR test, exponentially
averaged F-tests, the CUSUM test and several other tests against alternatives             of
one-time breaks and random walk coefficients, Andrews et al. (1992) found that in
general the weighted exponential        tests performed well and often the QLR and
Nyblom tests performed nearly as well. For additional results, see Garbade (1977)
and the references in Hack1 and Westlund (1989, 1991).

5.1.4.     Empirical application:         stability of the money-output        relation

At least since the work of Friedman and Mieselman (1963), one of the long-standing
empirical problems in macroeconomics         has been whether money has a strong and
stable link to aggregate output; for a discussion and recent references, see Friedman
and Kuttner (1992). Since their introduction      to this literature by Sims (1972, 1980),
Granger-causality     tests and vector autoregressions     have provided the workhorse
machinery for quantifying the strength and direction of these relations in nonstruc-
tural time series models (see the chapter by Watson in this Handbook                 for a
discussion of vector autoregressions).      But for such empirical models to be useful
guides for monetary policy they must be stable, and the tests of this section can play
a useful role in assessing their stability. Of particular importance     is whether one of
the several monetary aggregates is arguably most stably related to output.



  3’To show this, rewrite       S,(s/T) using the identity that the mean OLS residual is zero
2816                                                                                                  J.H. Stock


                                                      Table 7
         Tests for structural     breaks and time-varying    parameters in the moneyyoutput      relation
                                   (Dependent variable: Nominal GDP growth)
                                 (Estimation period: quarterly, 1960:2 to 1992:2).’

                                           F-tests on
                                        coefficients on:
                                                                            P-K
    M             r         R2           M            r        QLR        CUSUM        Nyblom     L

1   Base         -        0.153       3.85**                 40.23***       1.43**      2.83**
2   Base        R-90      0.178       1.43         2.50*     54.15***       1.36**      2.80
3   Ml           -        0.140       3.17**                 32.57***       1.22*       1.90
4   Ml          R-90      0.179       1.50         2.87**    51.02***       1.35**      2.85
5   M2                    0.221       7.60***        -       20.82          0.73        1.31
6   M2          R-90      0.332       8.40***      3.19**    25.44          1.05        1.53

   “All regressions include 3 lags each of the nominal GDP growth rate, GDP inflation and the growth
rate of the monetary aggregate. The M column specifies the monetary aggregate. The r column indicates
whether the 90-day U.S. Treasury bill rate is included in the regression. If the interest rate is included,
it is included in differences (3 lags) and one lag of an error-correction    term from a long-run money
demand equation is also included. The I? is the usual OLS adjusted R2. The F-tests are Wald tests of
the hypothesis that the coefficients on the indicated variable are zero; the restriction    that the error-
correction   term (when present) has a zero coefficient is included in the Wald test on the monetary
aggregate. QLR is the Quandt (1960) likelihood ratio statistic (5.4) with symmetric 15 percent trimming;
P-K CUSUM is the Ploberger-Kramer            (1992a) CUSUM statistic (5.14); and the final column reports
the Nyblom (1989) L statistic (5.17). Break test critical values were taken from published tables and/or
were computed by Monte Carlo simulation of the limiting functionals of Brownian motion, as described
in Section 2.3. Tests are significant at the *lO percent; **5 percent; ***l percent level.




   Table 7 presents regression summary statistics and three tests for parameter
stability in typical money-output       regressions for three monetary aggregates, the
monetary base, Ml, and M2, over the period 1960:2-1992:2.           The results are taken
from Feldstein and Stock (1994), to which the reader is referred for additional detail.
Based on preliminary unit root analysis, log GDP, the log GDP deflator, log money
and the 90-day US. Treasury bill rate are specified as having a single unit root so
that the GDP growth rate, GDP inflation, the money growth rate and the first
difference of the interest rate are used in the regressions. Drawing on the cointegra-
tion evidence in Hoffman and Rasche’s (1991) and Stock and Watson’s (1993) studies
of long-run money demand, in the models including the interest rate we model log
money, log output and the interest rate as being cointegrated       so that the equations
include an error-correction     term, the cointegrating   residual. The long-run cointe-
grating equation was estimated by imposing a unit long-run income elasticity and
estimating the interest semi-elasticity    using the Saikkonen (1991)/PhillipssLoretan
(1991)/StockkWatson       (1993) “dynamic       OLS” efficient estimator.32     The main

   32Alldata were taken from the Citibase data base. The hypothesis of two unit roots was rejected at the
5 percent level for each series (demeaned case) using DF-GLS     tests with AR(BIC), I <p < 8 except that
a unit root in inflation is rejected at the 10 percent but not 5 percent level, For each series, DF-GLS
Ch. 46: Unit Roots, Structural Breaks and Trends                                                              2817


conclusions     are insensitive       to empirically   plausible   changes in the unit root
specifications of interest rates and money; in particular see Konishi et al. (1993) for
F-statistics in specifications where the interest rate is assumed stationary.
   The Granger-causality         test results indicate that including the interest rate makes
base money and Ml insignificant,             although M2 remains significant (this is partly
due to the error-correction           term). The QLR test rejects the null hypothesis        of
parameter stability at the 1 percent level in all specifications including base money
or M 1; the L-statistic rejects in the base-only specification; and the Ploberger-Kramer
(1992a) CUSUM based on OLS residuals rejects in the base and Ml specifications.
The hypothesis        of stability is thus strongly rejected for the base-output           and
 Ml-output      relations.   The evidence against stability is much weaker for the
M22output      relation; none of the stability tests reject at the 10 percent level. Once
changes in velocity are controlled            for by including the error-correction    term in
regression 6, both M2 and the interest rate enter significantly               and there is no
evidence of instability.       As with any empirical investigation,        some caveats are
necessary: these results are based on only a few specifications, and stability in this
sample is no guarantee of stability in the future. Still, these results suggest that, of
 the base, Ml, and M2, only M2 had a stable reduced-form relationship with output
 over this period.



5.2.     Trend breaks and tests for autoregressive unit roots

5.2.1.    The trend-break model and efSects of misspecifying the trend

Rappoport and Reichlin (1989) and Perron (1989a, 1990b) argued that a plausible
model for many economic variables is stationarity around a time trend with a break,
and that autoregressive unit root tests based on linear detrending  as discussed in
Section 3 have low power against this alternative.       Two such broken-trend




 failed to reject a single unit root at the 10 percent level (detrending for each variable except interest rates,
 for which the demeaned statistics were used), except for the interest rate, which rejected at the 10 percent
 but not 5 percent level. The 95 percent asymptotic confidence intervals, computed as in Stock (1991) by
 inverting the Dickey-Fuller       r*’statistic (+’ for interest rates) as described in Section 3.3, for the largest
 autoregressive     roots are: log Ml, (0.821, 1.026); log M2, (0.998, 1.039); log base, (0.603, 0.882); go-day
 T-bill rate, (0.838, 1.015); log GDP, (0.950, 1.037); GDP inflation, (0.876, 1.032). The results are robust
 to using the AR(BIC) selector with 3 < p < 8, as in the Monte Carlo simulations, except that the M2
confidence interval rises to (1.011, 1.040). For consistency,            all monetary  aggregates   are specified in
growth rates [but see Christian0 and Ljungqvist (1988) and Stock and Watson (1989)]. These results
leave room to argue that inflation should be entered in changes, but for comparability                   with other
specifications    in the literature inflation itself is used. There is some ambiguity about the treatment of
interest rates, but to be consistent with recent investigations        of long-run money demand they are treated
here as I(1). The evidence on cointegration         involves statistics not covered in this chapter and the reader
is instead referred to Hoffman and Rasche (1991) and Stock and Watson (1993).
2818                                                                                                  J.H. Stock


specifications     are

         (Shift in mean)         d, = B, + /II l(t > r),                                                   (5.19)

         (Shift in trend)        d, = B, + B, t + &(t - r)W > 4,                                           (5.20)

where l(t > r) is a dummy variable which equals one for t > r and zero otherwise.33
For conciseness, attention here is restricted to the trend-shift model (5.20), a model
suggested by Perron (1989a) and Rappoport and Reichlin (1989) for real GNP.
   It was emphasized in Section 3.2.5 that if the trend is misspecified then unit root
tests can be misleading. This conclusion applies here as well. Suppose that (5.20) is
correct and r/T-+ S,6 fixed, 0 < 6 < 1, but that statistics are computed by linear
detrending.    Then the power of the unit root test tends to zero against fixed
alternatives. The intuition is simple: if a linear time trend is fitted to an I(0) process
around a piecewise-linear    trend, then the residuals will be I(0) around a mean-zero
“Y-shaped     trend. These residuals have variances growing large (with T) at the start
and end of the sample and standard tests will classify the residuals as having a unit
root.34 In the mean-shift case, Dickey-Fuller     unit root tests are consistent but have
low power if the mean shift is large [Perron (1989a); for Monte Carlo evidence,
Hendry and Neale (199 l)]. See Campbell and Perron (1991) for further discussion.
This troubling effect of trend misspecification    raises the question of how to test for
AR unit roots in the presence of a possibly broken trend.

5.2.2.      Unit root tests with broken trends

If the break date is known a priori, as Perron (1989a, 1990b) and Rappoport           and
Reichlin (1989) assumed, then detrending can be done by correctly specified OLS,
and the asymptotic       distribution     theory is obtained    using a straightforward
extension of Sections 2 and 3. However, as Christian0          (1992) and, subsequently,
Banerjee et al. (1992b), Perron and Vogelsang (1992) and Zivot and Andrews (1992)
pointed out, the assumption         that the break date is data-independent     is hardly
credible in macroeconomic       applications.   For example, in Perron’s applications    to


    33Under the null hypothesis of a unit root, the mean-shift model is equivalent to assuming that there
is a single additive outlier in v, at time r + 1, since, under the null hypothesis, (3.1) and (5.19) imply
Ay, = v, + j,l(t = r + 1). A third trend model is Perron’s (1989a) “model C,” with both a mean and a
trend shift.
   34To show this, consider the AR(l) case, so that y,(O) = 02, and the Dickey-Fuller        roe; test, T(c?‘_- 1).
If the trend is, in fact, given by (5.20), then the detrended process is yi = u, + d,, where d, = (/lo - &,) +
(8, - /ll)t + p2(t - r)l(t > r). For r/T+ 6,6 fixed, if u, is I(0) then straightforward but tedious calculations
show that the scaled detrended process has the deterministic limit, T- 1y;T1,LB,, + pIA. + &(A - 6)&i > 6),
uniformly in J., where fll and & are nonrandom       functions of &,,/$,&  and 6. It follows that T(B’ - l)=
g(6), where g is nonrandom.     An explicit expression for g(6) is given in Perron (1989a, Theorem l(b)).
Perron (1989a) shows that g(6) is in the acceptance region of the detrended DF root test, so, asymptotically,
the null is incorrectly accepted with probability   one.
Ch. 46: Unit Roots, Structural       Breaks and Trends                                             2819


GNP, the break dates were chosen to be in the Great Depression and the 1973 oil
price shock, both of which are widely recognized as having important           and lasting
effects on economic activity. Thus the problem becomes testing for a unit root when
the break dates are unknown and determined from the data.
   Two issues arise here: devising tests which control for the nuisance parameters,
in particular   the unknown    break date, and, among such tests, finding the most
powerful. To date research has focused on the first of these topics. There is little
work which addresses this problem starting from the theory of optimal tests, and
this is not pursued here.35
   The procedures in the literature for handling the unknown date of the trend break
are based on a modified Dickey-Fuller     test. To simplify the argument, consider the
AR(l) case, so that c.? = y,(O). Then, as suggested by Christian0         (1992), Banerjee
et al. (1992b) and Zivot and Andrews (1992) one could test for a unit root by
examining the minimum of the sequence of Dickey-Fuller          r-statistics, constructed
by first detrending the series by OLS using (5.20) for I over the range r,,, . . . , rI,

      t;;lp =    min        zd(S),                                                               (5.21)
                dE[&l.dll


where


                       T - l f: AY:'@)Y;- 169
                              t=2
     P(6) =
                  (r3d)2(S)T-2 f: (y;_,(c?))~
                               t=2
                                                    1’2’
where ~$9 = Y, - z,W&%where B(S)           = CE:T= ,z,(W,(@‘1~’ CCf”,4-9~,1, z,kV=
[l, t, (t - [Ts])l(t > [Ti?])]
                            and (8d)2 (A) is the sample variance of the residual from
 the regression of y:(6) onto yy_ ,(6).
    Just as the null distribution  of the QLR statistic differs from the distribution      of
the fixed-date F-statistics, the null distribution   oft@’ differs from the distribution
of rd for a fixed break point. The approach to obtaining           the null distribution   is
similar; namely to obtain a limiting representation     for the sequence of statistics p(S),
uniformly in 6. Relative to the QLR statistic, this entails an additional complication,
because under the null the broken-trend       detrended process will be I(1). This leads
to limit results for elements of O[O, 1) x O[O, 11. While no new tools are needed for
these calculations,  they are tedious and notationally     cumbersome and the reader is
referred to the articles by Banerjee et al. (1992b) and Zivot and Andrews
(1992) for different derivations of the same limiting representation.    Not surprisingly,
the critical values of the minimal DF statistic are well below the critical values of

   “Elliott  et al. (1992) show that the asymptotic  Gaussian power envelope in the mean-shift   model
(5.19) with /I1 fixed equals the no-detrending  power envelope plotted in Figure 1.
2820                                                                                      J.H. Stock


the usual linearly detrended    statistic; for example, with symmetric       15 percent
trimming, the one-sided 10 percent asymptotic critical value is approximately    - 4.13
[Banerjee et al. (1992b, Table 2)], compared with - 3.12 in the linearly detrended
case.

5.2.3.   Finite-sample size and power

 There are fewer Monte Carlo studies of the broken-trend                   and broken-mean      unit
 root statistics than of the linearly detrended            case, perhaps in part because the
 additional minimization      dramatically     increases the computational        demands. None-
 theless, the results of Hendry and Neale (1991), Perron and Vogelsang (1992), Zivot
 and Andrews (1992) and Banerjee et al. (1992b) provide insights into the performance
 of the tests. The finite-sample    distributions     are sensitive to the procedures used to
determine the lag length in the augmented DF regression, and the null distributions
 depend on the nuisance parameters even though the tests are asymptotically                 similar.
Typically, the asymptotic critical values are too small, that is, the sizes of the tests
exceed their nominal level. The extent of the distortion depends on the actual values
 of the nuisance parameters. Zivot and Andrews (1992) examined size distortions by
 Monte Carlo study of ARIMA models estimated using the Nelson-Plosser                         (1982)
 U.S. data set; for the mean-shift model (5.19), the finite-sample              10 percent critical
values were found to fall in the range -4.85 to - 5.05, while the corresponding
asymptotic      value is - 4.58; for each series, tests of asymptotic             level 2.5 percent
rejected between 5 percent and 10 percent of the time. Perron and Vogelsang (1992)
found larger rejection rates under the null when there is more negative serial
correlation than present in the Zivot-Andrews              simulations.
    The Monte Carlo evidence confirms the view that the finite-sample power of the
unit root tests is reduced by trend- or mean-shift detrending, in the sense that if the
true trend is linear then introducing       the additional break-point        reduces power. The
extent of this power reduction, however, depends on the nuisance parameters and,
in any event, if the broken-trend    specification is correct then broken-trend         detrending
is necessary. The more relevant comparison              is across different procedures which
entail broken-trend     detrending,    but only limited results are available [see Perron
and Vogelsang (1992) for some conclusions               comparing       four Dickey-Fuller-type
tests with different lag length selection procedures].

5.2.4.   Conclusions and practical implications

Although the research on trend-break       unit root tests is incomplete, it is possible to
draw some initial conclusions. On a practical level, the size distortions found in the
demeaned and linear detrended cases in Section 3 appear, if anything, to be more
severe in the broken-trend     case, and the power of the tests also deteriorates.      One
can speculate that this reflects a dwindling division between the I( 1) model and other
competing representations;      were the trend-shifts I(0) and occurring every period,
then the extension of (5.20) would deliver an I(2) model for y,.
Ch. 46: Unir Roots, Strucrurul   Brraks und Trrnds                                           2821


   A useful way to summarize the broken-trends        literature is to return to our original
four motivating objectives for analyzing unit roots. As a matter of data description,
Perron’s (1989a, 1990b) and Rappoport and Reichlin’s (1989) analyses demonstrate
that the broken-trend     models deliver very different interpretations           from conven-
tional unit root models, emphasizing the importance            of a few irregularly occurring
events in determining      the long-run   path of aggregate variables; this warrants
continued research in this area. The practical implications concerning the remaining
three objectives remain largely unexplored.       From a forecasting perspective, if the
single-break model is taken as a metaphor for multiple irregular breaks, then one
must be skeptical that out-of-sample       forecasts will be particularly        reliable, since
another break could occur. Equally importantly,           for this reason treating the break
as a one-time nonrandom       event presumably     leads to understating       the uncertainty
of multistep    forecasts. Little is currently    known about the practical effect of
misspecifying    trend breaks in subsequent       multivariate       modeling,     although    the
asymptotic theory of inference in vector autoregressions          (VAR) with unit roots and
cointegration    analysis discussed in Watson’s chapter in this Handbook                 must be
modified if there are broken trends. Finally, the link between these trend+break
models and economic theory is undeveloped. In any event, the statistical difficulties
with inference in this area does not make one optimistic that trend-break                 models
will parse economic theories, however capable they are of producing                    suggestive
stylized facts.



6.     Tests of the I(1) and I(0) hypotheses: links and practical limitations

Sections 3,4, and 5.2 focused on inference in the I( 1) and I(O) models. When inference
is needed about the order of integration of a series, sometimes there is no compelling
a priori reason to think that one or other of these models is the best starting point;
rather, the models might best be treated symmetrically.        In this light, this section
addresses three topics. Section 6.1 examines some formal links between the I( 1) and
I(0) models. Section 6.2 summarizes some recent work taking a different approach
to these issues, in which the determination   of whether a series is I(0) or I( 1) is recast
as a classification  problem, so that the tools of Bayesian analysis and statistical
decision theory can be applied. Section 6.3 then raises several practical difficulties
which arise in the interpretation   of both these Bayesian classification schemes and
classical unit-root hypothesis tests in light of the size distortions coupled with low
power of the tests studied in the Monte Carlo experiments of Sections 3 and 4.



6.1.    Parallels between the I(0)       and I(1)    testing problems

The historical development    of tests of the I(0) and I( 1) hypotheses treated the issues
as conceptually  and technically quite different. To a large extent, these differences
2822                                                                                J.H. Stock


are artificial, arising from their ARMA parameterizations.            Since an integrated I(0)
process is I(l), a test of the I(0) null against the I( 1) alternative is, up to the handling
of initial conditions, equivalent to a test of the I(1) null against the I(2) alternative.
In this sense, the tests of the previous sections can both be seen as tests of the I(1)
null, on the one hand, against I(0) and, on the other hand, against I(2). What is
interesting is that this reinterpretation     is valid not just on a heuristic level but also
on a technical level.
    To make this precise, consider the cased, = fiO, v, = E,. The LMPIU test of the unit
MA root in (4.1) rejects for large values of the Nyblom-Makelainen           (1983) statistic




where y; = y, - jj. If instead the null hypothesis is that u, is a Gaussian random
walk and the alternative     is that u, is an AR(l) with 1x1< 1, then one could test
this hypothesis by rejecting for small values of the demeaned Sargan-Bhargava
statistic


              T-* t (yf)*
                     t=1
       R”;=                                                                              (6.4
              T-’    i    (Ay;)’
                    t=2



The Lp statistic rejects if the mean square of the I( 1) process, the cumulation   of yp,
is large, while &. rejects if the mean square of the I(1) process, y;, is small. Both
tests can be seen as tests of the I(1) null but, respectively, against the I(2) and I(0)
alternatives.


6.2.   Decision-theoretic          classijication   schemes

A standard argument for using conventional        hypothesis tests is that the researcher
has a particular reason for wishing to control the Type I error rate. While this might
be appropriate     in some of the applications   listed in Section 1, in others, such as
forecasting, the ultimate objective of the empirical analysis is different and classical
hypothesis tests are not necessarily the best tools to achieve those objectives. In such
cases, the researcher might rather be interested in having a procedure which will
deliver consistent inference, in the sense that the probability    of correctly classifying
a process as I( 1) or I(0) asymptotically tends to one; that is, the probabilities  of both
Type I and Type II errors tend to zero.
Ch. 46: Unit Roots, Sfrucrural   Breaks and Trends                                     2823


    In theory, this can be achieved by using a sequence of critical values which tend
to - co as an appropriate     function of the sample size. To be concrete, suppose that
the researcher computed the Dickey-Fuller?       statistic, and evaluated it using critical
values, b,. If the null is true, then Pr[2* < &.11(l)] +O for any sequence b, + - a3,
so that the probability   of correctly concluding that the process is I(1) tends to one.
Similarly, it is plausible that for a suitable choice of b,, if the process is truly I(0)
then Pr[f < b,l I(O)] + 1 and the Type II error rate tends to zero. For such a choice
of b,, this would be a consistent classification   scheme. Because the DickeyyFuller
t-statistic tends to - co at the rate T’j2 under a fixed alternative, one candidate for
b, is b, = - k, - k, In T for some positive constants (k,, k,). Thus the rule is


      Classify y, as I(0) if     t*< - k, - k, In T                                   (6.3)

and, otherwise, classify y, as I(1). The problem with this scheme is that, in practice,
the researcher is left to choose k, and k,. Because the sample size is, of course, fixed
in an actual data set, the conceptual device of choosing this sequence is artificial
and the researcher is left with little practical guidance.
   One solution is to frame this as a classification or decision-theoretic problem and
to apply Bayesian techniques. In this context, an observed series is classified as I(0)
or I(1) based on the posterior odds ratio Li’r, which we write heuristically      as


                            where      BT =
                                              PrC(yI~...~h-)lW)l
                                                                                      (6.4)
                                              PrC(Y1,...,YT)lI(0)I’

where rci and rco are prior weights that the series is I( 1) and I(0) and where B, is the
Bayes ratio. If Z7r > 1, then the posterior odds favor the I(1) model and the series
is classified as I( 1).
    Although (6.4) appears simple, numerous subtleties are involved in its evaluation
and addressing       these subtleties    has spawned a large literature       on Bayesian
approaches to autoregressive        unit roots; see in particular Sims (1988), Schotman
and van Dijk (1990), Sims and Uhlig (1991), DeJong and Whiteman (1991a, 1991b),
Diebold (1990), Sowell (199 1) and the papers by Phillips (199 1a) and his discussants
in the special issue of the Journal of Applied Econometrics (October-December,
 1991). In most cases, implementations         of (6.4) have worked within specifications
which require placing explicit priors over key continuous         parameters, such as the
largest autoregressive    root. The proposed priors differ considerably      and can imply
substantial   differences in empirical inferences [see the review by Uhlig (1992)].
Because of this dependence on priors, and given space limitations,         no attempt will
be made here to summarize this literature. Instead, we briefly discuss two recent
approaches,    by Phillips and Ploberger (1991) and Stock (1992), which provide
simple ways to evaluate the posterior odds ratio (6.4) and which avoid explicit
integration   over priors on continuous      parameters. These procedures require only
 2824                                                                                                             J.H. Stock


that the researcher      place priors rrO and n, = 1 - rcO on the respective                                           point
hypotheses “I(0)” and “I( 1)“.
   Phillips and Ploberger (1991) derive their procedure from a consideration                                          of the
likelihood ratio statistic in the AR( 1) model, and obtain the rule


                                                                     IiYf-1
        Classify y, as I(0) if
                                                    0 i i
                                          2’ > In 7(1 + In +
                                                        x0
                                                                        c7
                                                                             E
                                                                                                                        (6.5)


and, otherwise, classify y, as I(l), where t* is the Dickey-Fuller             t-statistic.36 The
expression (6.5) bears considerable            similarity to (6.3): a unit AR root is rejected
based on the Dickey-Fuller           r-statistic, with a critical value that depends on the
sample size. The difference here is that the critical value is data-dependent;               if y, is
I(l), the “critical value” will be 2 In T+ O,(l), while if y, is I(O), it will be In T+ Op( 1).
As Phillips and Ploberger (1992) point out, this procedure can be viewed as an
extension to the I(1) case of the BIC model selection procedure, where the issue is
whether to include or to exclude y,_ 1 as a regressor in the DF regression (3.9). The
procedure is also closely related to the predictive least squares principle, see Wei
(1992).
    Another approach is to evaluate the Bayes factor in (6.4) directly, using a reduced-
dimensional      statistic rather than the full data set. Suppose that 4r is a statistic which
is informative about the order of integration,            such as a unit root test statistic; then
the expression for the Bayes factor in (6.4) could be replaced with

        B*       =   Wd4IU))
                                                                                                                        (6.6)
             ’       W&l I(O))
The approach in Stock (1992) is to construct a family of statistics which have limiting
distributions   which, on the one hand, do not depend on nuisance parameters under
either the I(1) or I(0) hypothesis but, on the other hand, diverge, depending             on
which hypothesis is true. The results in the previous sections can, in fact, be used
to construct such statistics. Consider the process I’“, defined in (4. lo), and consider
the no-deterministic    case. If y, is a general I(0) process then Vr= W. On the other
hand, if y, is a general I( 1) process then NT “‘I’, * I/*, where V* is defined in (4.11)
and N, = TIC:= +&n/l,).           In either case the limiting representation  of Vr does not
depend on any nuisance parameters. To make this concrete, consider the statistic
4T = In L= ln{ T-‘CT= 1Vf_ ,}. Then, for u, a general I(0) process, from (2.9) (in the
I(0) case) and (4.11) (in the I( 1) case), 4r has the limiting representations


        ifI(0)         #,*ln           IV* ,                                                                          (6.7a)
                                  (s      >
   36Phillips        and Ploberger’s   (1991) formula    has been modified       for an estimated   variance   as in Phillips
(1992b).
Ch. 46: Unit Roots, Structurul Breaks and Trends                                            2825




       ifI(1)   4,-lnJV,*ln           V2       .                                           (6.7b)
                                  U        >

The limiting distributions     under the I(O) and I( 1) models can be computed numeri-
cally from (6.7a) and (6.7b), respectively,       which in turn permits the numerical
evaluation of the Bayes factor (6.6) based on this statistic.
    It must be stressed that, although consistent decision-theoretic           procedures such
as these have both theoretical and intuitive appeal, they have properties which
empirical researchers might find undesirable.           One is that these procedures         will
consistently classify local-to-I( 1) processes as I( 1) rather than I(O), and local-to-I(O)
processes as I(0) rather than as I( 1). That is, if y, is local-to-I(l)   with local parameter
tl = 1 + c/T, then, as the sample size increases, this process will be classified as I(1)
with probability     increasing to one, even though along the sequence it is always an
I(0) process [see Elliott and Stock (1994) for details]. More generally, because these
procedures can have large misclassification      rates in finite samples (loosely, their size
can be quite large), care must be taken in interpreting          the results.
    Initial empirical applications   [Phillips (1992b)] and Monte Carlo simulations
[Elliott and Stock (1994), Stock (1992)] suggest that, for some applications             such as
forecasting and pretesting, these approaches are promising. To date, however, the
investigation    of the sampling properties of these and alternative           procedures, and
in particular the effect of their use in second-stage          procedures, is incomplete.      It
would be premature to make concrete recommendations                  for empirical practice.


6.3.     Practical and theoretical    limitations   in the ability to distinguish   I(0)
         and I( 1) processes

6.3.1.     Theory

The evidence on tests of the I(1) null yields two troubling conclusions.          On the one
hand, the tests have relatively low power against I(0) alternatives         that might be of
interest; for example, with 100 observations        in the detrended case, the local-to-unity
asymptotics      indicate that the 5 percent one-sided MPI test has a power of 0.27
against c( = 0.9 and that the DickeyyFuller          t-test has a power of only 0.19. On the
other hand, processes which are I( 1) but which have moderate negative autocorrelation
in first differences are incorrectly rejected with high probability, that is, the unit AR
root tests exhibit substantial size distortions, although the extent of these distortions
varies widely across test statistics. The same general conclusions           were found for
tests of the general I(0) null: the power against interesting alternatives        can be low
and, depending on the choice of spectral estimator, the rejection rate for null values
that have substantial      positive autocorrelation       can be well above the asymptotic
level.
   A natural question is how one should interpret these finite-sample size distortions.
In this regard, it is useful to develop some results concerning          the source of these
2826                                                                                 J.H. Stock


size distortions  and whether they will persist in large samples. Section 4 examined
the behavior of tests of the I(0) null in the event that y, was I( 1) but local-to-I(O) in
the sense (4.12), and found that the I(0) tests with functional     representations     had
nondegenerate     asymptotic power functions against these alternatives.      It is natural
to wonder, then, what is the behavior of tests of the I(1) null, if the true process is
I(1) but is local to I(O)?
   As a starting point, consider the d, = 0 case and the sequence of models


       u, = bT5,+ i] rl,,   (i,, qt) i.i.d. N(O,ozI).                                     (6.8)
                   s=1



This is just the local-to-I(O) model (4.12), resealed by multiplication         by h- ‘T where
b = II-‘,  with (Ault, u,,J Gaussian and mutually and serially uncorrelated.
   If in fact b = 0, then u, is a Gaussian           random walk, so one might consider
using the Sargan-Bhargava          statistic i,. A direct calculation       indicates that, for
b > 0, under this nesting n?, 3;.          It follows that Pr[R”, < k] = Pr[T&       < Tk] + 1
for any constant k, so that the rejection probability           of the test tends to one. The
implication is that (unmodified) Sargan-Bhargava            tests of sequences which are local
to I(0) in the sense (6.8) will incorrectly reject with asymptotic probability           1. The
implication    of this result is perhaps clearer when u, is cast in its ARIMA form,
AU, = (1 - B,L).s,. For finite T, jOT/< 1, but the limiting result indicates that the
rejection probability    approaches one and so can be quite large for finite T.
   A similar set ofcalculations    can be made for tests of the I(0) null. Here, the relevant
sequence ofnull models to consider are those models against which the AR unit root
tests have nondegenerate      local asymptotic power, namely the local-to-unity         models
studied in Section 3.2.3. Again let d, = 0 and suppose that the I(0) null is tested using
the Lv statistic. A straightforward       calculation shows that




where W; is the demeaned local-to-unity          diffusion process defined in Section 3.2.3.
It follows that Pr[L” > k] = Pr[T-‘L”         > T-‘k] -+ 1 for any constant k, so that the
rejection probability    of the test tends to one. For these processes, which are local
to I(l), the Lp test rejects with probability     approaching     one even though, for fixed
 T,u, has the AR(l) representation      (1 -p,L)u,=      F, with (~~1 < 1.
   These results elucidate the Monte Carlo findings in Sections 3 and 4. In the AR
case, the implication    is that there are I(1) models which are local to I(0) for which
the I(1) null will be incorrectly rejected with high probability.      In the MA case, there
are I(0) models which are local to I(1) for which the I(0) null will be incorrectly
Ch. 46. Unit Roots. Structural Breaks and Trends                                               2821


rejected with high probability.         Thus the high false rejection rates (the size distor-
tions) found in the Monte Carlo analysis can be expected to persist asymptotically,
but the range of models suffering size distortions will decrease.
   The foregoing analysis is limited both because of the tests considered and because
it does not address the question of the size of the neighborhoods               of these incorrect
rejections; it was shown only that the neighborhoods                 are at least O(T- ‘). In the
case of I(1) tests, Pantula (1991) has provided results on the sizes of these neighbor-
hoods for several tests of the unit AR root hypothesis in the MA( 1) model. He found
that these neighborhoods         vanish at different rates for different tests, with the slowest
rate being the Phillips-Perron         (1988) statistic. This finding explains the particularly
large size distortions of this statistic with negative MA roots, even with very large
samples [e.g. T= 500; Pantula (1991, Table 2)]. In related work, Perron (1991d)
and Nabeya and Perron (1991) provide approximations                     to the distribution  of the
OLS root estimator with sequences of negative MA and negative AR roots ap-
proaching their respective boundaries.
    Because tests for the general I(0) null have only recently been developed, as of
this writing there have been few empirical analyses in which both I(0) and I( 1) tests
are used [exceptions         include Fisher and Park (1991) and Ogaki (1992)]. The
foregoing theoretical results suggest, however, that there will be a range of models
for which the I(1) test will reject with high probability              and the I(0) test will not,
although the process is I(1); for which the I(0) test will reject and the I(1) test will
not, although the process is I(0); and for which both tests will reject and the process
is I(1). It also seems plausible that there are models that are truly I(0) but for which
both tests reject with high probability,         but this has not been investigated formally.
There is currently little evidence on the volume of these regions of contradictory
results, although Amano and van Norden’s (1992) Monte Carlo evidence suggests
that they may well be large in moderate sample sizes.
    In summary, tests of the general I(0) null and tests of the general I(1) null are
neither similar nor unbiased. Asymptotically,            the tests have size equal to their stated
level for fixed null models; but problems arise when we consider sequences of null
and alternative models for which the I(0) and I( 1) models become increasingly close.
On the one hand, there are null models which will be rejected with arbitrarily high
probability;    on the other hand, there are alternative models against which the tests
will have power approaching           the nominal level. Although these regions diminish
asymptotically,     in finite samples this implies that there is a range of I(0) and I(1)
models amongst which the unit MA and AR root tests are unable to distinguish.



6.3.2.   Practical implications

The asymptotic    inability to distinguish  certain I(0) and I(1) models raises the
question of how these tests are to be interpreted,     and this has generated great
controversy in the applied literature on the practical value of unit root tests. Some
2828                                                                                    J.H. Stock


of the earliest criticisms of Nelson and Plosser’s (1982) stylized fact that many
economic time series contain a unit root came from Bayesian analyses [Sims (1988),
 DeJong     and Whiteman (1991a, 1991b); see the references in Section 6.2 following
equation (6.4)], although the discussion here follows the debate from a classical
 perspective in Blough (1992), Christian0 and Eichenbaum            (1990), Cochrane (1991 a),
 Rudebusch (1992, 1993) and Stock (1990). In particular, the reader is referred to
Campbell and Perron’s (1991) thoughtful discussion and the comments on it by
 Cochrane (199 1b). There has, however, been little systematic research on the practi-
cal implications      of this problem, so one’s view of the importance          of this lack of
 unbiasedness     remains largely a matter of judgment. Because of the prominence            of
 this issue it nonetheless     seems appropriate     to organize the ways in which such
judgment can be exercised. This discussion focuses exclusively on AR unit root tests,
 although several of the remarks have parallels to MA unit root tests.
    It is useful to return to the reasons, listed in the introduction,   why one might wish
 to perform inference concerning orders of integration:         as data description; for fore-
casting; as pretesting for subsequent specification analysis or testing; or for testing
 or distinguishing     among economic theories. Although this discussion proceeds in
general terms, it must be emphasized that the size and power problems vary greatly
across test statistics, so that the difficulties discussed here are worse for some tests
than others.

 Data description.       The size distortions and low power of even the best-performing
 tests imply that the literal interpretation    of unit AR root tests as similar and unbiased
 tests of the I(1) null against the I(0) alternative is inappropriate.       However, the Monte
 Carlo evidence provides considerable guidance in the interpretation             of unit root test
 results. For some tests, such as the Dickey-Fuller               t-statistic and the DF-GLS
 statistic, the size is well controlled over a wide range of null models so rejection can
 be associated rather closely with the absence of a unit root. In contrast, the severe
 size distortions     of the Phillips-Perron     tests [or other tests with the SC spectral
 estimator, such as the Schmidt-Phillips           (1992) MSB statistic] in the presence of
 moderate negative MA roots and their low empirical rejection rates in the stationary
case with moderate positive MA or second AR roots indicates that rejection by this
 statistic is only secondarily associated with the presence or absence of a unit root,
and instead is indicative of the extent of positive serial correlation            in the process.
Interpretation       of results based on extant versions of these statistics using SC
estimators is, thus, problematic.        In any event, confidence intervals for measures of
long-run persistence are arguably more informative than unit root tests themselves;
constructing      these confidence intervals entails testing a range of possible values of
tl, not just the unit root hypothesis.
    An important       caveat is that the unit root tests and thus confidence intervals
require that the trend order be correctly specified; depending on the type of misspeci-
fication, the tests might otherwise be inconsistent.           We agree with Campbell and
Perron’s (1991) emphasis on the importance             of properly specifying the trend order
Ch. 46: Unit Roots, Structural   Breaks and Trends                                          2829


before proceeding with the classical tests, and this is an area in which one should
bring economic theory to bear to the maximum extent possible. For example, a
priori reasoning might suggest using a constant or shift-in-mean            specification in
modeling interest rates, rather than including a linear time trend. We speculate that
while one could develop a consistent downward-testing         procedure, starting with the
highest possible trend order and letting the test level decline with the sample size,
such an approach would have high misclassification       rates in moderate samples (size
distortions and low power). The Bayesian approach in Phillips and Ploberger (1992)
to joint selection of the trend and order of integration    is theoretically appealing for
fixed models but the finite-sample   performance     of this approach has not yet been
fully investigated.


Forecasting.      Campbell and Perron (1991) and Cochrane (1991 b) examined the
effect of unit root pretests on forecasting performance. In their Monte Carlo experi-
ment, data were generated by an ARMA(l, 1) and forecasts were made using an
autoregression.    Their most striking finding was that, in models with a unit AR root
and large negative correlation     in first differences, the out-of-sample   forecast error
was substantially      lower with the unit root pretest than if the true differences
specification was used. This finding appeared both at short and long horizons (1
and 20 periods with a sample of size 100). In cases with less severe negative
correlation or with a stationary process, little was lost by pretesting relative to using
the true model. Because economic forecasting is largely done using multivariate
models, these initial results do not bear directly on most professional forecasting
activities. Still, they suggest that for forecasting the size distortions      might be an
advantage, not a problem. A promising alternative to pretesting is to forecast using
median-unbiased      estimates of CIas discussed in Section 3.3. To date, however, there
has been no thorough examination         of whether this delivers finite-sample   improve-
ments in forecasts and forecast standard errors.


Pretests for second-stage inference. Perhaps the most common use of unit root
tests is as pretests for second-stage inference: as a preliminary       stage for developing
a forecasting model, for formulating        a cointegrated    system, or for determining
subsequent distribution     theory. In the final of these applications,    the existing distri-
bution theory for inference in linear time series regressions conditions              upon the
number and location of unit roots in the system, in the sense that the orders of
integration   and cointegration    are assumed known. In empirical work, these orders
are typically unknown,       so one way to proceed is to pretest for integration               or
cointegration    and then to condition on the results of these pretests in performing
second-stage inference. In practice, this can mean using a unit root pretest to decide
whether a variable should enter a second-stage regression in levels or differences, as
was done in the empirical application in Section 51.4. Alternatively,          if the relation-
ship of interest involves the level of the variable in a second-stage regression, a unit
2830                                                                                  J.H. Stock


root pretest could be used to ascertain whether standard or nonstandard            distribution
theory should be used to compute second-stage tests.
   There has, however, been little research on the implications          of this use of unit
root tests. Some evidence addressing this is provided by Elliott and Stock (1994)
who consider a bivariate problem in which there is uncertainty           about whether the
regressor has a unit root. In their Monte Carlo simulation, they find that unit root
pretests can induce substantial       size distortions    in the second-stage       test. If the
innovations     of the regressor and the second-stage      regression error are correlated,
the first-stage Dickey-Fuller      t-statistic and the second-stage       t-statistic will be
dependent so the size of the second stage in this two-stage procedure cannot be
controlled    effectively, even asymptotically.     Although this problem is important
when this error correlation is high, in applications        with more modest correlations
the problem is less severe.

 Formulating and testing economic theories.        This is arguably the application      most
 damaged by the problems of poor size and low power. In special cases - the
 martingale theories of consumption       and stock prices being the leading examples -
 simple theories predict that the series is not only I(1) but is a martingale.        In this
 case, the null models are circumscribed       and the problems of size distortions        do
 not arise. However, the initial appeal of unit root tests to economists            was that
they seemed to provide a way to distinguish between broad classes of models: on
the one hand, dynamic stochastic equilibrium         models (real business cycle models)
in which fluctuations were optimal adjustments to supply shocks, on the other hand,
Keynesian models in which fluctuations         arose in large part from demand distur-
bances. Indeed, this was the original context in which they were interpreted                in
Nelson and Plosser’s (1982) seminal paper.
    Unfortunately,   there are two problems, either of which alone is fatal to such an
interpretation.    The first is a matter of economic theory: as argued by Christian0
and Eichenbaum        (1990) stochastic equilibrium     models need not generate unit
roots in observed output, and as argued by West (1988b), Keynesian models can
generate autoregressive      roots that are very close to unity. Thus a rejection by an
ideal unit root test (that is, one with no size distortions) need not invalidate a real
business cycle model and a failure to reject should not be interpreted           as evidence
against Keynesian models. The second is the lack of unbiasedness           outlined above:
even if the match between classes of macroeconomic          theories and whether macro-
economic series are I( 1) were exact, the size distortions and low power would mean
that the outcomes of unit root tests would not discriminate        among theories. In this
light the idea, however appealing, that a univariate unit root test could distinguish
which class of models best describes the macroeconomy           seems in retrospect overly
ambitious.
   This said, inference about the order of integration       of a time series can usefully
guide the specification and empirical analysis of relations of theoretical interest in
economics. For example, King and Watson (1992) and Fisher and Seater (1993) use
Ch. 46: Unit Roots, Structural Breaks and Trends                                                            2831

these techniques to provide evidence on which versions of money neutrality (long-
run neutrality,   superneutrality) can be investigated       empirically.  They show that
long-run neutrality can be tested without specifying a complete model of short-run
dynamics, as long as money and income are I(1). Similarly, investigations             into
whether there are unit roots in exchange rates have proven central to inferences
about such matters as long-run        purchasing    power parity and the behavior of
exchange rates in the presence of target zones [see Johnson (1993) and Svensson
(1992) for reviews]. Finally, quantitative    conclusions    about the persistence in uni-
variate series have proven to be a key starting point for modeling the long-run
properties of multiple time series and cointegration      analysis, an area which has seen
an explosion of exciting empirical and theoretical research and is the topic of the
next chapter in this Handbook.



References

Ahtola, J. and G.C. Tiao (1984) “Parameter       Inference for a Nearly Nonstationary         First Order Auto-
   regressive Model”, Biometrika, 71, 263-72.
Amano, R.A. and S. van Norden (1992) Unit Root Tests and the Burden of Proof, manuscript,                    Bank
   of Canada.
Anderson, T.W. (1948) “On the Theory of Testing Serial Correlation”,          Skandinauisk Aktuariedskrift, 31,
   88-l 16.
Anderson, T.W. (1959) “On Asymptotic Distributions of Estimates of Parameters of Stochastic Difference
   Equations”, Annals of Mathematical Statistics, 30, 676-687.
Anderson, T.W. and D. Darling (1952) “Asymptotic Theory of Certain ‘Goodness of Fit’ Criteria Based
   on Stochastic Processes”, Annals of Mathematical Statistics, 23, 193-212.
Anderson, T.W. and A. Takemura (1986) “Why Do Noninvertible               Moving Averages Occur?“, Journal
   of Time Series Analysis, 7, 235-254.
Andrews, D.W.K. (1991) “Heteroskedasticity       and Autocorrelation      Consistent Covariance      Matrix Esti-
   mation”, Econometrica, 59, 817-858.
Andrews, D.W.K. (1993a) “Exactly Median-Unbiased             Estimation of First Order Autoregressive/Unit
   Root Model”, Econometrica, 61, 139-166.
Andrews, D.W.K. (1993b) “Tests for Parameter           Instability   and Structural    Change with Unknown
   Change Point”, Econometrica, 821-856.
Andrews, D.W.K. and H.-Y. Chen (1992) “Approximately             Median-Unbiased     Estimation of Autoregres-
   sive Models with Applications to U.S. Macroeconomic        and Financial Time Series”, Cowles Foundation
   Discussion Paper no. 1026, Yale University.
Andrews, D.W.K. and J.C. Monahan          (1992) “An Improved Heteroskedasticity           and Autocorrelation
  Consistent Covariance     Matrix Estimator”, Econometrica, 60, 953-966.
Andrews, D.W.K. and W. Ploberger (1992) “Optimal Tests When a Nuisance Parameter                     is Identified
  Only Under the Alternative”, Cowles Foundation          Discussion Paper no. 1015, Yale University.
Andrews, D.W.K., I. Lee and W. Ploberger (1992) “Optimal Changepoint                  Tests for Normal Linear
   Regression”, Cowles Foundation      Discussion Paper no. 1016, Yale University.
Ansley, C.F. and P. Newbold (1980) “Finite Sample Properties of Estimators for Autoregressive             Moving
  Average Models”, Journal of Econometrics, 13, 1599 183.
Arnold, L. (1973) Stochastic Differential Equations: Theory and Applications. Wiley:New York.
Bai, J. (1992) Econometric   Estimation of Structural Change, unpublished          Ph.D. Dissertation,    Depart-
  ment of Economics, University of California, Berkeley.
Banerjee, A., J. Dolado, J.W. Galbraith     and D.F. Hendry (1992a) Cointegration. Error Correction and
  the Econometric Analysis ofNon-Stationary Data. 0xford:Oxford            University Press.
Banerjee, A., R.L. Lumsdaine and J.H. Stock (1992b) “Recursive and Sequential Tests of the Unit Root
2832                                                                                                      J.H. Stock


  and Trend Break Hypotheses: Theory and International               Evidence”, Journal ofBusiness and Economic
  Statistics, 10, 271-288.
Barry, D. and J.A. Hartigan (1993) “A Bayesian Analysis for Change Point Problems”, Journal ofthe
  American Statistical Association, 88, 309-319.
Beach, C.M. and J.G. MacKinnon             (1978) “A Maximum          Likelihood    Procedure     for Regression with
  Autocorrelated      Errors”, Econometrica, 46, 51-58.
Beaulieu, J.J. and J.A. Miron (1993) “Seasonal Unit Roots in Aggregate U.S. Data”, Journal ofEconometrics,
   55,305-328.
Beran, J. (1992) “Statistical Models for Data with Long-Range            Dependence (with discussion)“, Statistical
   Science, 4, 404427.
Berk, K.N. (1974) “Consistent Autoregressive          Spectral Estimates”, Annals qf.Statistics, 2, 489-502.
Beveridge, S. and C.R. Nelson (1981) “A New Approach to Decomposition                       of Economic Time Series
   into Permanent       and Transitory     Components       with Particular    Attention     to Measurement       of the
   ‘Business Cycle’ ‘0 Journal of Monetary Economics, 7, 151- 174.
Bhargava, A. (1986) “On the Theory of Testing for Unit Roots in Observed Time Series”, Reoiew of
   Economic Studies, 53, 369-384.
Bierens, H.J. (1993) “Higher-Order        Sample Autocorrelations        and the Unit Root Hypothesis”,         Journal
   of Econometrics, 57, 137- 160.
Bierens, H.J. and S. Guo (1993) “Testing Stationarity             and Trend Stationarity       Against the Unit Root
   Hypothesis”, Econometric Reviews, 12, l-32.
Billingsley, P. (1968) Convergence of Probability Measure. Wiley:New York.
Blanchard, O.J. and D. Quah (1989) “The Dynamic Effects of Aggregate Demand and Supply Disturbances”,
   American Economic Review, 79, 655-73.
Blough, S.R. (1992) “The Relationship        Between Power and Level for Generic Unit Root Tests in Finite
   Samples”, Journal of Applied Econometrics, 7, 295-308.
Bobkoski, M.J. (1983) Hypothesis          Testing in Nonstationary        Time Series, unpublished        Ph.D. thesis,
   Department     of Statistics, University of Wisconsin.
Bollerslev, T. (1986) “Generalized       Autoregressive     Conditional    Heteroskedasticity”,      Journal of Econo-
   metrics, 3 1, 307-327.
Box, G.E.P. and G.M. Jenkins (1976) Time Series Analysis: Forecasting and Control. Revised Edition.
   San Francisco: Holden-Day.
Brillinger, D.R. (1981) Time Series: Data Analysis and Theory. San Francisco: Holden-Day.
Brockwell, P.J. and R.A. Davis (1987) Time Series: Theory and Methods. New York: Springer-Verlag.
Brown, B.M. (1971) “Martingale Central Limit Theorems”, Annals of MathematicalStatistics, 42,59-66.
Brown, R.L., J. Durbin and J.M. Evans (1975) “Techniques                for Testing the Constancy        of Regression
   Relationships    over Time with Comments”,            Journal of the Royal Statistical Society, Series B, 37,
    1499192.
Campbell, J.Y. (1987) “Does Saving Anticipate Declining Labor Income? An Alternative Test of the
   Permanent Income Hypothesis”,          Econometrica, 55, 1249-1274.
Campbell, J.Y. and N.G. Mankiw (1987a) “Are Output Fluctuations                  Transitory”,    Quarterly Journal of
   Economics, 102,857-880.
Campbell, J.Y. and N.G. Mankiw (1987b) “Permanent                and Transitory Components         in Macroeconomic
   Fluctuations”,    The American Economic Review, 77, 11l-1 17.
Campbell, J.Y. and P. Perron (1991) “Pitfalls and Opportunities:            What Macroeconomists         Should Know
  about Unit Roots”, NBER Macroeconomics Annual, 141-200.
Cavanagh, C (I 985) Roots Local To Unity, manuscript, Department of Economics, Harvard University.
Chart, N.H. (1988) “On The Parameter Inference for Nearly Nonstationary                  Time Series”, Journal ofthe
  American Statistical Association, 83, 857-862.
Chan, N.H. (1989) “Asymptotic Inference for Unstable Autoregressive               Time Series With Drifts”. Journal
  of StatisticalPlanning and InJbence, 23, 301-3 12.
Chan, N.H. and C.Z. Wei (1987) “Asymptotic              Inference For Nearly Nonstationary           AR(l) Processes”,
  Annals ofStatistics, 15, 1050-1063.
Chart, N.H. and C.Z. Wei (1988) “Limiting Distributions                 of Least Squares Estimates of Unstable
  Autoregressive     Processes”, Annals ofStatistics, 16. 367-401.
Chernotf-H.     and S. Zacks (1964) “Estimating         the Current Mean of a Normal Distribution             Which Is
   Subject to Changes in Time”, Annals ofMathematical Statistics, 35,999%1028.
Choi, 1. (1993) “Effects of Data Aggregation on the Power of Tests for a Unit Root: A Simulation Study”,
  Economic Letters, forthcoming.
Ch. 46: Unit Roots, Structural    Breaks and Trends                                                        2833


Chow, G.C. (1960) “Tests of Equality Between Sets of Coefficients in Two Linear Regressions”, Econome-
   trica, 28, 59 l-605.
Chow, G.C. (1984) “Random and Changing Coefficient Models”, in: Z. Griliches and M. Intriligator,
   eds., Handbook ofEconometrics.       Vol. 2, North-Holland:     Amsterdam.
Christiano, L.J. (1992) “Searching for a Break in GNP”, Journal ofBusiness and Economic Statistics, 10,
   237-250.
Christiano,     L.C. and M. Eichenbaum      (1990) “Unit Roots in GNP: Do We Know and Do We Care?”
   Carnegie-Rochester      Conference Series on Public Policy, 32, 7-62.
Christiano, L.J. and L. Ljungqvist (1988) “Money Does Granger-Cause              Output in the Bivariate Money-
   Output Relation”, Journal of MonetaryEconomics, 22,217-236.
Chu, C.-S., and H. White (1992) “A Direct Test for Changing Trend”, Journal ofBusiness and Economic
   Statistics, 10, 289-299.
Clark, P.K. (1987) “The Cyclical Component            of U.S. Economic Activity”, The Quarterly Journal of
   Economics, 102, 798-814.
Clark, P.I$. (1989) “Trend Reversion in Real Output and Unemployment”,               Journal of Econometrics, 40,
    15-32.
Cochrane, J.H. (1988) “How Big is the Random Walk in GNP?“, Journal of Political Economy, 96,
   893-920.
Cochrane, J.H. (1991a) “A Critique of the Application of Unit Root Tests”, Journal ofEconomic Dynamics
   and Control, 15,275-284.
Cochrane, J.H. (1991b) “Comment on Campbell and Perron”, NBER Macroeconomics Annual 1991, 5,
   201-210.
Cooley, T.F. and EC. Prescott (1976) “Estimation          in the Presence of Stochastic Parameter Variation”,
   Econometrica, 44, 167- 184.
Cooper, D.M. and R. Thompson (1977) “A Note on the Estimation of the Parameters of the Autoregressive-
   Moving Average Process”, Biometrika, 64, 625-628.
Cryer, J.D. and J. Ledolter (1981) “Small-Sample         Properties of the Maximum Likelihood Estimator in
   the First-Order     Moving Average Model”, Biometrika, 68, 691-694.
Dahlhaus, R. (1989) “Efficient Parameter Estimation for Self-Similar Processes”, Annals of Statistics, 17,
   1749-1766.
Davidson, J.E.H. (1979) “Small Sample Properties of Estimators of the Moving Average Process”, in:
   E.G. Charatsis, ed., Proceedings of the Econometric Society Meeting in 1979: Selected Econometric
   Papers in Memory of Stephan Valananis. North-Holland:             Amsterdam.
Davidson, J.E.H. (1981) “Problems         With the Estimation      of Moving Average Processes”, Journal of
   Econometrics, 16, 295-310.
Davidson, J.E.H., D.F. Hendry, F. Srba and S. Yeo (1978) “Econometric                Modelling of the Aggregate
   Time-Series Relationship      Between Consumer’s Expenditure         and Income in the United Kingdom”,
   Economic Journal, 86,661&692.
Davies, R.B. (1977) “Hypothesis        Testing When a Nuisance          Parameter    is Present only Under the
   Alternative”, Biometrika, 64, 247-254.
Davis, R.A. and W.T.M. Dunsmuir (1992) Inference for MA(l) Processes with a Root On or Near the
   Unit Circle, Discussion Paper no. 36, Bond University School of Business.
DeJong, D.N. and C.H. Whiteman (1991a) “Reconsidering               Trends and Random Walks in Macroeco-
   nomic Time Series”, Journal of Monetary Economics, 28, 221-254.
DeJong, D.N. and C.H. Whiteman (1991b) “The Temporal Stability of Dividends and Stock Prices:
   Evidence from the Likelihood Function”, American Economic Review, 81, 600~617.
DeJong, D.N., J.C. Nankervis,        N.E. Savin and C.H. Whiteman           (1992a) “Integration    versus Trend-
   Stationarity    in Macroeconomic    Time Series”, Econometrica, 60, 423-434.
DeJong, D.N., J.C. Nankervis, N.E. Savin and C.H. Whiteman (1992b) “The Power Problems of Unit
   Root Tests for Time Series with Autoregressive        Errors”, Journal of Econometrics, 53, 323-43.
Dent, W. and A.-S. Min (1978) “A Monte Carlo Study of Autoregressive                Integrated   Moving Average
   Processes”, Journal of Econometrics,     7, 23-55.
Deshayes, J. and D. Picard (1986) “Off-line Statistical Analysis of Change-Point               Models Using Non
   Parametric     and Likelihood Methods”, in: M. Basseville and A. Benveniste, eds., Detection of Abrupt
  Changes in Signals and Dynamical Systems. Springer Verlag Lecture Notes in Control and Information
  Sciences, no. 77, 103-168.
Dickey, D.A. (1976) Estimation        and Hypothesis      Testing in Nonstationary       Time Series, Ph.D. dis-
  sertation, Iowa State University.
2834                                                                                                    J.H. Stock


Dickey, D.A. and W.A. Fuller (1979) “Distribution         of the Estimators for Autoregressive    Time Series with
   a Unit Root”, Journal ofthe American Statistical Association, 74, 427-431.
Dickey, D.A. and W.A. Fuller (1981) “Likelihood             Ratio Tests for Autoregressive     Time Series with a
   Unit Root”, Econometrica, 49, 105771072.
Dickey, D.A. and SC. Pantula (1987) “Determining the Order of Differencing in Autoregressive Processes”,
   Journal of Business and Economic Statistics, 5, 455-462.
Dickey, D.A., D.P. Hasza, and W.A. Fuller (1984) “Testing for Unit Roots in Seasonal Time Series”,
   Journal of the American Statistical Association, 79, 355-367.
Diebold, F.X. (1990) “On ‘Unit Root Econometrics’:              Discussion of Geweke, Sims, and DeJong and
   Whiteman”, in: Proceedings of the American Statistical Association Business and Economics Statistics
   Session. Washington,      D.C.: American Statistical Association.
Diebold, F.X. (1993) “The Effect of Seasonal Adjustment Filters on Tests for a Unit Root: Discussion”,
   Journal of Econometrics, 55, 999103.
Diebold, F.X. and C. Chen (1992) Testing Structural            Stability with Endogenous     Break Point: A Size
   Comparison of Analytic and Bootstrap Procedures, manuscript, Department of Economics, University
   of Pennsylvania.
Diebold, F.X. and M. Nerlove (1990) “Unit Roots in Economic Time Series: A Selective Survey”, in: T.B.
   Fomby and G.F. Rhodes, eds., Advances in Econometrics: Co-Integration, Spurious Regressions, and
    Unit Roots. Greenwich, CT: JAI Press.
Diebold, F.X. and G.D. Rudebusch           (1989) “Long Memory and Persistence in Aggregate               Output”,
   Journal of Monetary Economics, 24, 189-209.
Diebold, F.X. and G.D. Rudebusch (1991a) “Is Consumption                  Too Smooth? Long Memory and the
   Deaton Paradox”, Review ofEconomics and Statistics, 71, l-9.
Diebold, F.X. and G.D. Rudebusch (1991b) “On the Power of Dickey-Fuller                 Tests Against Fractional
   Alternatives”, Economics Letters, 35, 1555160.
Diebold, F.X., S. Husted and M. Rush (1991) “Real Exchange Rates Under the Gold Standard’, Journal
   of Political Economy, 99, 1252-1271.
Dufour, J.-M. (1990) “Exact Tests and Confidence              Sets in Linear Regressions     with Autocorrelated
   Errors”, Econometrica, 58,475-494.
Dufour, J.-M. and M.L. King (1991) “Optimal Invariant Tests for the Autocorrelation                  Coefficient in
   Linear Regressions with Stationary        or Nonstationary       AR(l) Errors”, Journal of Econometrics, 47,
    115-143.
Dunsmuir, W.T.M. (1981) “Estimation          for Stationary    Time Series When Data Are Irregularly Spaced
   or Missing”, in: D.F. Findley, ed., Applied Time Series II, Academic Press: New York.
Durlauf, S.N. (1989) “Output Persistence, Economic Structure and the Choice of Stabilization               Policv”.
   Brookings Papers an Ecanomic Activity, 2,69-136.
Durlauf. S.N. and P.C.B. Phillins (1988) “Trends Versus Random Walks in Time Series Analvsis”.                 ,
   Econametrica, 56,1333-1354. 1 ~              ’
Elliott, G. (1993a) Efficient Tests for a Unit Root When the Initial Observation              Is Drawn From Its
   Unconditional     Distribution,  manuscript,   Department      of Economics, Harvard University.
Elliott, G. (1993b) Monte Carlo Performance          of Twenty Unit Root Tests, manuscript,        Department     of
   Economics, Harvard University.
Elliott, G. and J.H. Stock (1994) “Inference in Time Series Regression When the Order of Integration              of
   a Regressor is Unknown”, Econometric Theory, forthcoming.
Elliott, G., T.J. Rothenberg and J.H. Stock (1992) Efficient Tests for an Autoregressive        Unit Root, NBER
   Technical Working Paper no. 130.
Engle, R.F. and C.W.J. Granger( 1987) “Cointegration          and Error Correction: Representation,    Estimation
   and Testing”, Econometrica, 55, 251-276.
Ethier, S.N. and T.G. Kurtz (1986) Markov Processes: Characterization and Convergence. New York:
   Wiley.
Evans, G.B.A. and N.E. Savin (I 981a) “The Calculation of the Limiting Distribution          of the Least Squares
   Estimator of the Parameter in a Random Walk Model”, Annals of Statistics, 9, 1114-l 118.
Evans, G.B.A. and N.E. Savin (1981b) “Testing for Unit Roots: I”, Econometrica, 49, 753-779.
Evans, G.B.A. and N.E. Savin (1984) “Testing for Unit Roots: II”, Econometrica, 52, 1241-1260.
Fama. E.F. (1970) “Efficient Capital Markets: A Review of Theory and Empirical Work”, Journal of
   Finance, 25,383-417.
Feldstein, M. and J.H. Stock (1994) “The Use of a Monetary Aggregate to Target Nominal GDP”, in:
   N.G. Mankiw, ed., Monetary Policy. Chicago: University of Chicago Press.
Ch. 46: Unit Roots, Structural Breaks and Trends                                                                2835


Fisher, E.O. and J.Y. Park (1991) “Testing Purchasing           Power Parity Under the Null Hypothesis              of
   Cointegration”,    Economic Journal, 101, 1476684.
Fisher, M.E. and J.J. Seater (1993) “Long-Run Neutrality and Superneutrality        in an ARIMA Framework”,
   American Economic Review, 83,4022415.
Fox, R. and MS. Taqqu (1986) “Large-Sample         Properties of Parameter Estimates for Strongly Dependent
   Stationary Gaussian Time Series”, Annals ofStatistics, 14, 517-532.
Franzini, L. and A.C. Harvey (1983) “Testing for deterministic        trend and seasonal components           in time
   series models”, Biometrika, 70, 673-682.
Friedman,     B.M. and K.N. Kuttner (1992) “Money, Income, Prices and Interest Rates”, American
   Economic Reoiew, 82,472~492.
Friedman,     M. and D. Meiselman (1963) “The Relative Stability of the Investment                  Multiplier    and
   Monetary Velocity in the United States, 1897-1958”, in: Stabilization Policies. Commission on Money
   and Credit, Englewood Cliffs, NJ: Prentice-Hall,        1655268.
Fuller, W.A. (1976) Introduction to Statistical Time Series. New York:Wiley.
Garbade, K. (1977) “Two Methods of Examining the Stability of Regression Coefficients”, Journal of
   The American Statistical Association, 72, 54463.
Gardner, L.A. (1969) “On Detecting Changes in the Mean of Normal Variates”, Annals ofMathematical
   Statistics, 40, 116-126.
Geweke, J. and S. Porter-Hudak      (1983) “The Estimation and Application of Long Memory Time Series
   Models”, Journal of Time Series Analysis, 4, 221-238.
Ghysels, E. (1990) “Unit-Root Tests and the Statistical Pitfalls of Seasonal Adjustment: The Case of U.S.
   Postwar Real Gross National Product”, Journal of Business and Economic Statistics, 8, 1455152.
Ghysels, E. and P. Perron (1993) “The Effect of Seasonal Adjustment Filters on Tests for a Unit Root”,
   Journal of Econometrics, 55, 57-98.
Hack], P. and A. Westlund (1989) “Statistical Analysis of ‘Structural Change’: An Annotated Bibliography”,
   Empirical Economics, 143, 1677192.
Hackl, P. and A.H. Westlund (1991) eds., Economic Structural Change: Analysis and Forecasting.
   Springer-Verlag:    Berlin, 95-l 19.
Hall, A. (1989) “Testing for a Unit Root in the Presence of Moving Average Errors”, Biometrika, 76,
   49-56.
Hall, A. (1992a) “Testing for a Unit Root in Time Series Using Instrumental           Variable Estimation with
   Pretest Data-Based     Model Selection”, Journal of Econometrics, 54,223-250.
Hall, A. (1992b) “Unit Root Tests After Data Based Model Selection”, Proceedings of the 1992 Summer
   Meetings of the American Statistical Association: Business and Economics Section.
Hall, P. and CC. Heyde (1980) Martingale Limit Theory and its Applications. New York: Academic
   Press.
Hall, R.E. (1978) “Stochastic Implications of the Life Cycle-Permanent         Income Hypothesis: Theory and
   Evidence”, Journal of Political Economy, 86, 971-87.
Hansen, B.E. (1990) Lagrange Multiplier Tests for Parameter Instability in Non-Linear              Models, manu-
   script, Economics Department,      University of Rochester.
Hansen, B.E. (1992) “Tests for Parameter        Instability in Regressions with I(1) Processes”, Journal of
   Business and Economic Statistics, 10, 321-336.
Harvey, A.C. (1981) Time Series Models. Oxford: Philip Allan.
Harvey, A.C. (1985) “Trends and Cycles in Macroeconomic               Time Series”, Journal of Business and
   Economic Statistics, 3, 216-227.
Harvey, A.C. (1989) Forecasting, Structural Models and the Kalman Filter. Cambridge, U.K.: Cambridge
   University Press.
Harvey, A.C. and A. Jaeger (1993) “Detrending, Stylized Facts and the Business Cycle”, Journal of Applied
   Econometrics, 8, 231-248.
Harvey, A.C. and N.G. Shephard (1992) “Structural          Time Series Models”, in: G.S. Maddala, CR. Rao
  and H.D. Vinod, eds., Handbook of Statistics, Vol. 2, Elsevier: Amsterdam.
Hasza, D.P. and W.A. Fuller (1979) “Estimation for Autoregressive          Processes with Unit Roots”, Annals
  of Statistics, 7, 1106-1120.
Hasza, D.P. and W.A. Fuller (1981) “Testing for Nonstationary            Parameter   Specifications    in Seasonal
  Time Series Models”, Annals of Statistics, 10, 1209-1216.
Hendry, D.F. and A.J. Neale (1991) “A Monte Carlo Study of the Effects of Structural Breaks on Tests
  for Unit Roots”, in. P. Hack1 and A.H. Westlund, eds., Economic Structural Change: Analysis and
  Forecasting. SpringerrVerlag:     Berlin, 955119.
2836                                                                                                       J.H. Slack


Herrndorf,      N.A. (1984) “A Functional      Central Limit Theorem for Weakly Dependent                Sequences of
    Random Variables”, Annals cfProhahility,          12, 141-153.
Hoffman, D. and R.H. Rasche (1991) “Long-Run              Income and Interest Elasticities of Money Demand in
   the United States”, Review ofEconomics and Statistics, 73, 665-674.
Hurwicz, L. (1950) “Least-Squares         Bias in Time Series”, in: T. Koopmans,        ed., Statistical Inference in
    Dynamic Economic Models. New York: Wiley.
Hylleberg, S., R.F. Engle, C.W.J. Granger and S. Yoo (1990) “Seasonal Integration               and Cointegration”,
   Journal ofEconometrics,      44, 215-238.
Jandhyala,      V.K. and LB. MacNeill (1992) “On Testing for the Constancy               of Regression Coefficients
    Under Random Walk and Change-Point              Alternatives”,   Econometric Theory, 8, 501-517.
Jegganathan,      P. (1991) “On the Asymptotic       Behavior of Least-Squares      Estimators    in AR Time Series
    with Roots Near the Unit Circle”, Econometric Theory, 7, 269-306.
Johnson, D. (1993) “Unit Roots, Cointegration            and Purchasing     Power Parity: Canda and the United
    States, 1870-1991”,     in: B. O’Reilly and J. Murray, eds., The Exchange Rate and the Economy.
   Ottawa: Bank of Canada.
Kang, K.M. (1975) A Comparison           of Estimators of Moving Average Processes, manuscript,            Australian
    Bureau of Statistics.
Kendall, M.G. and A. Stuart (1967) The Advanced Theory ofStatistics. Vol. 2, Second edition. Charles
    Griffin: London.
Kim, H.-J. and D. Siegmund (1989) “The Likelihood Ratio Test for a Change-Point                     in Simple Linear
    Regression”, Biometrika, 76(3), 409-23.
King, M.L. (1980) “Robust Tests for Spherical Symmetry and their Application                       to Least Squares
    Regression”, Annals oJSitatistics, 8, 1265-1271.
King, M.L. (1988) “Towards a Theory of Point Optimal Testing”, Econometric Reviews, 6, 169-218.
King, M.L. and G.H. Hillier (1985) “Locally Best Invariant Tests of the Error Covariance Matrix of the
   Linear Regression Model”, Journal ofthe Royal Statistical Society, Series B, 47,98-102.
King, R.G. and M.W. Watson (1992) Testing Long-Run Neutrality, NBER Working Paper no. 4156.
King, R.G., C.I. Plosser, J.H. Stock and M.W. Watson (1991) “Stochastic                     Trends and Economic
   Fluctuations”,     American Economic Review, 81,819-840.
Kiviet, J.F. and G.D.A. Phillips (1992) “Exact Similar Tests for Unit Roots and Cointegration”,                 Oxford
   Bulletin of Economics and Statistics, 54, 349-368.
Konishi, T., V.A. Ramey and C.W.J. Granger (1993) Stochastic Trends and Short-Run                       Relationships
   Between Financial Variables and Real Activity, NBER Working Paper no. 4275.
Koopmans, T. (1942) “Serial Correlation         and Quadratic Forms in Normal Variables”, Annals oJMathe-
   matical Statistics, 13, 14-33.
Kramer, W. and H. Sonnberger            (1986) The Linear Regression Model Under Test. Physica-Verlag:
   Heidelberg.
KrPmer, W., W. Ploberger and R. Alt (1988) “Testing for Structural                Change in Dynamic Models”,
   Economet;ica, 56, 1355-1369.
Krishnaiah, P.R. and B.Q. Miao (1988) “Review about Estimation ofChange Points”, in: P.R. Krishnaiah
   and C.R. Rao, eds., Handbook ofstatistics. 7, New York:Elsevier.
Kwiatkowski,       D., P.C.B. Phillips, P. Schmidt and Y. Shin (1992) “Testing the Null Hypothesis                    of
   Stationarity    Against the Alternatives of a Unit Root: How Sure Are We that Economic Time Series
   Have a Unit Root?“, Journal ofEconometrics, 54, 159-178.
Lamotte, L.R. and A. McWhorter (1978) “An Exact Test for the Presence of Random Walk Coefficients
   in a Linear Regression Model”, Journal ofthe American Statistical Association, 73, 816-820.
Lehmann, E.L. (1959) Testing Statistical Hypotheses. John Wiley and Sons: New York.
Lewis, R. and G.C. Reinsel (1985) “Predi&on             of Multivariate-Time     Series by Autoregressive       Model
   Fitting”, Journal OfMultiuariate Analvsis, 16. 393-411.
Leybourne, S.J. and B.P.M. McCabe (lbs9) “Oh the Distributiosof                Some Test Statistics for Coefficient
  Constancy”, Biometrika, 76, 169-177.
Lo, A.W. (1991) “Long-Term        Memory in Stock Market Prices”, Econometrica, 59, 1279-1314.
MacNeill, I.B. (1974) “Tests for Change of Parameter             at Unknown Times and Distributions           of Some
  Related Functionals      on Brownian Motion”, Annals ofstatistics, 2,950-962.
MacNeill, I.B. (1978) “Properties of Sequences of Partial Sums of Polynomial Regression Residuals with
  Applications to Tests for Change of Regression at Unknown Times”, Annals ofsitatistics, 6,422-433.
Magnus, J.R. and B. Pesaran (1991) “The Bias of Forecasts                  from a First-Order       Autoregression”,
  Econometric Theory, 7, 222-235.
Ch. 46: Unit Roots, Structural       Breaks and Trends                                                             2837


Mandelbrot,      B.B. (1975) “Limit Theorems on the Self-normalized                 Range for Weakly and StroWdY
   Dependent     Processes”, Zeitschrifftir Wahrscheinlichkeitstheorie und verwandte Gehiete, 3 1,271-285.
Mandelbrot, B.B. and M.S. Taqqu (1979) Robust R/S Analysis of Long Run Serial Correlation,                        Invited
   paper, 42nd Session of the International        Institute of Statistics.
Mandelbrot,     B.B. and J.W. Van Ness (1968) “Fractional               Brownian Motions, Fractional          Noise and
   Applications”,    SIAM Review, 10, 4222437.
Mann, H.B. and A. Wald (1943) “On the Statistical Treatment of Linear Stochastic Difference Equations”,
   Econometrica, 11, 1733220.
Marriot, F.H.C. and J.A. Pope (1954) “Bias in the Estimation                    of Autocorrelations”,    Biometrika, 41,
   3933403.
McCabe, B.P.M. and M.J. Harrison (1980) “Testing the Constancy                      of Regression Relationships      over
   Time Using Least Squares Residuals”, Applied Statistics, 29, 142-148.
 Meese, R.A. and K.J. Singleton (1982) “On Unit Roots and the Empirical Modeling of Exchange Rates”,
   Journal ofFinance, 37, 1029-1035.
Nabeya, S. and P. Perron (1991) Local Asymptotic                 Distributions     Related to the AR(l) Model with
   Dependent Errors, Econometric         Research Program Memorandum                 No. 362, Princeton University.
Nabeya, S. and B.E. Sorensen (1992) Asymptotic Distributions                of the Least Squares Estimators and Test
   Statistics in the Near Unit Root Model with Non-Zero                  Initial Value and Local Drift and Trend,
   manuscript,    Department    of Economics, Brown University.
Nabeya, S. and K. Tanaka (1988) “Asymptotic                 Theory of a Test for the Constancy             of Regression
   Coefficients Against the Random Walk Alternative”, Annals of Statistics, 16, 2188235.
Nabeya, S. and K. Tanaka (1990a) “A General Approach to the Limiting Distribution                         for Estimators
   in Time Series Regression with Nonstable Autoregressive               Errors”, Econometrica, 58, 1455163.
Nabeya, S. and K. Tanaka (1990b) “Limiting Powers of Unit Root Tests in Time Series Regression”,
   Journal ofEconometrics, 46,247-271.
Nankervis, J.C. and N.E. Savin (1988) “The Exact Moments of the Least-Squares                         Estimator for the
   Autoregressive     Model: Corrections    and Extensions”, Journal ofEconometrics, 37, 381-388.
Nelson, CR. and H. Kang (1981) “Spurious Periodicity in Inappropriately                       Detrended    Time Series”,
   Econometrica, 49, 741-751.
Nelson, C.R. and C.I. Plosser (1982) “Trends and Random Walks in Macro-economic                       Time Series: Some
   Evidence and Implications”,      Journal ofMonetary Economics, 10, 1399162.
Newey, W. and K.D. West (1987) “A Simple Positive Semi Definite, Heteroskedasticity                    and Autocorrela-
   tion Consistent Covariance      Matrix”, Econometrica, 55, 703-708.
Ng, S. and P. Perron (1993a) Useful Modifications              to Some Unit Root Tests with Dependent Errors
   and their Local Asymptotic Properties, manuscript,             C.R.D.E., University of Montreal, Quebec.
Ng, S. and P. Perron (1993b) Unit Root Tests in ARMA Models With Data-Dependent                         Methods for the
   Selection of the Truncation     Lag, manuscript,      C.R.D.E., University of Montreal, Quebec.
Nicholls, S. and A. Pagan (1985) “Varying Coefficient Regression”, in: Handbook ofStatistics, 4133449.
Nyblom, J. (1986) “Testing for Deterministic           Linear Trend in Time Series”, Journal of the American
   Statistical Association, 81, 545-549.
Nyblom, J. (1989) “Testing for the Constancy              of Parameters       Over Time”, Journal of the American
   Statistical Association, 84, 223-30.
Nyblom, J. and T. Makellinen          (1983) “Comparisons           of Tests for the Presence of Random Walk
   Coefficients in a Simple Linear Model”, Journal ofthe American Statistical Association, 78, 856-864.
Ogaki, M. (1992) “Engel’s Law and Cointegration”,             Journal ofPolitical Economy, 100, 1027-1046.
Orcutt, G.H. (1948) “A Study of the Autoregressive          Nature of the Time Series Used for Tinbergen’s Model
   of the Economic System of the United States, 1919-1932”, Journal ofthe Royal Statistical Society B,
   10, l-45.
Pantula, S.G. (1989) “Testing for Unit Roots in Time Series Data”, Econometric Theory, 5, 256-271.
Pantula, S.G. (1991) “Asymptotic        Distributions      of the Unit-Root        Tests when the Process is Nearly
   Stationary”,   Journal of Business and Economic Statistics, 9, 63-71.
Pantula, S.G. and A. Hall (1991) “Testing for Unit Roots in Autoregressive                   Moving Average Models:
   An Instrumental     Variable Approach”, Journal of Econometrics, 48, 325-353.
Pantula, S.G., G. Gonzalez-Farias       and W.A. Fuller (1992) A Comparison               of Unit Root Test Criteria,
   manuscript, North Carolina State University.
Park, J. (1990) “Testing for Unit Roots and Cointegration              by Variable Addition”, in: T.B. Fomby and
  G.F. Rhodes, eds., Advances in Econometrics: Co-Integration. Spurious Regressions and (init Roots.
  Greenwich, CT: JAI Press.
2838                                                                                                    J.H. Stock


Park, J. and B. Choi (1988) A New Approach to Testing for a Unit Root, Working Paper no. 88-23,
   Center for Analytical Economics, Cornell University.
Park, J.Y. and P.C.B. Phillips (1988) “Statistical Inference in Regressions with Integrated Processes: Part
   I”, Econometric Theory, 4, 468-497.
Perron, P. (1988) “Trends and Random Walks in Macroeconomic                   Time Series: Further Evidence from
   a New Approach”, Journal ofEconomic Dynamics and Control, 12,297-332.
Perron, P. (1989a) “The Great Crash, the Oil Price Shock and the Unit Root Hypothesis”, Econometrica,
   57, 1361-1401.
Perron, P. (1989b) “The Calculation         of the Limiting Distribution     of the Least-Squares    Estimator in a
   Near-Integrated     Model”, Econometric Theory, 5,241-255.
Perron, P. (1989~) “Testing for a Random Walk: A Simulation Experiment of Power When the Sampling
   Interval is Varied”, in: B. Raj, ed., Advances in Econometrics and Modelling. Kluwer Academic Publishers:
   Boston.
Perron, P. (1990a) “Tests of Joint Hypothesis          for Time Series Regression with a Unit Root”, in: T.B.
    Fomby and G.F. Rhodes, eds., Advances in Econometrics: Co-Integration, Spurious Regressions and
    Unit Roots. Greenwich, CT: JAI Press.
Perron, P. (1990b) “Testing for a Unit Root in a Time Series with a Changing Mean”, Journal ofBusiness
   and Economic Statistics, 8, 153-162.
Perron, P. (199la) “A Continuous          Time Approximation      to the Stationary    First-Order   Autoregressive
   Model”, Econometric Theory, 7, 236-252.
Perron, P. (199lb) “Test Consistency           with Varying Sampling Frequency”,            Econometric Theory, 7,
   341-368.
Perron, P. (1991~) A Test for Changes in a Polynomial             Trend Function for a Dynamic Time Series,
   manuscript,    Princeton University.
Perron, P. (1991d) The Adequacy of Asymptotic Approximations               in the Near-Integrated    Autoregressive
   Model with Dependent Errors, manuscript,           Princeton University.
Perron, P. (1992) “A Continuous          Time Approximation        to the Unstable First Order Autoregressive
   Process: The Case Without an Intercept”, Econometrica, 59, 211-236.
Perron, P. and P.C.B. Phillips (1987) “Does GNP Have a Unit Root? A Reevaluation”,                Economics Letters,
   23, 139-145.
Perron, P. and T.S. Vogelsang (1992) “Nonstationarity         and Level Shifts With an Application to Purchasing
   Power Parity”, Journal of Business and Economic Statistics, 10, 301-320.
Pesaran, M.H. (1983) “A Note on the Maximum Likelihood                   Estimation    of Regression Models with,
   First-Order    Moving Average Errors with Roots on the Unit Circle”, Australian Journal of Statistics,
   25.442-448.
Phillips, P.C.B. (1978) “Edgeworth         and Saddlepoint     Approximations     in the First-Order    Noncircular
   Autoregression”,     Biometrika, 65, 91-98.
Phillips, P.C.B. (1986) “Understanding        Spurious Regression in Econometrics”,        Journal of Econometrics,
   33,3llL340.
Phillips, P.C.B. (1987a) “Time Series Regression with a Unit Root”, Econometrica, 55, 277-302.
Phillips, P.C.B. (1987b) “Towards a Unified Asymptotic             Theory for Autoregression”,       Biometrika, 74,
   535-547.
Phillips, P.C.B. (1988) “Multiple Regression with Integrated Time Series”, Contemporary Mathematics,
   80, 79-105.
Phillips, P.C.B. (199la) “To Criticize the Critics: An Objective Bayesian Analysis of Stochastic Trends”,
   Journal of Applied Econometrics, 6, 333-364.
Phillips, P.C.B. (199lb) “Spectral Regression for Cointegrated           Time Series”, in: W. Barnett, J. Powell
   and G. Tauchen, eds., Nonparametric and Semiparametric Methods in Econometrics and Statistics.
   Cambridge University Press: Cambridge, UK.
Phillips, P.C.B. (1992a) “Unit Roots”, in: P. Newman, M. Milgate and J. Eatwell, eds., The New
   Palgrave Dictionary of Money and Finance. London: Macmillan, 726-730.
Phillips, P.C.B. (1992b) Bayes Methods             for Trending     Multiple Time Series with An Empirical
  Application to the U.S. Economy, manuscript,            Cowles Foundation,      Yale University.
Phillips, P.C.B. and M. Loretan (1991) “Estimating Long Run Economic Equilibria”, Reoiew of Economic
  Studies, 58, 407-436.
Phillips, P.C.B. and S. Ouliaris (1990) “Asymptotic Properties of Residual Based Tests for Cointegration”,
  Econometrica, 58, 165-94.
Ch. 46: Unit Roots, Structural      Breaks and Trends                                                             2839


Phillips, P.C.B. and P. Perron (1988) “Testing for a Unit Roots in a Time Series Regression”, Biometrika,
   X,335-346.
Phillips, P.C.B. and W. Ploberger (1991) Time Series Modeling with a Bayesian Frame of Reference: I.
   Concepts and Illustrations,     manuscript,    Cowles Foundation,        Yale University.
Phillips, P.C.B. and W. Ploberger (1992) Posterior Odds Testing for a Unit Root with Data-Based Model
    Selection. manuscript,   Cowles Foundation         for Economic Research, Yale University.
Phillips P.C.B. and V. Solo (1992) “Asymptotics for Linear Processes”, Annals ofstatistics, 20,971-1001.
Picard, D. (1985) “Testing and Estimating               Change-Points      in Time Series”, Advances in Applied
   Probability, 176, 841-867.
Ploberger, W. and W. Kramer (1990) “The Local Power of the CUSUM and CUSUM of Squares Tests”,
   Econometric Theory, 6335-347.
Plobeger, W. and W. Kramer (1992a) “The CUSUM test with OLS Residuals”, Econometrica, 60,
   271-286.
Ploberger,    W. and W. Kramer (1992b) A Trend-Resistant                   Test for Structural     Change Based on
   OLS-Residuals,     manuscript,   Department      of Statistics, University of Dortmund.
Ploberger, W., W. Kramer and K. Kontrus (1989) “A New Test for Structural                      Stability in the Linear
    Regression Model”, Journal ofEconometrics,           40, 307-318.
Plosser, C.I. and C.W. Schwert (1977) “Estimation              of a Noninvertible     Moving-Average       Process: The
   Case of Overdifferencing”,     Journal of Econometrics, 6, 199-224.
Piitscher, B.M. (1991) “Noninvertibility       and Pseudo-Maximum            Likelihood Estimation of Misspecified
   ARMA Models”, Econometric Theory, 7, 435-449.
Quah, D. (1992) “The Relative Importance            of Permanent      and Transitory     Components:      Identification
   and some Theoretical Bounds”, Econometrica, 60, 107-l 18.
Quandt, R.E. (1960) “Tests of the Hypothesis            that a Linear Regression System Obeys Two Separate
   Regimes”, Journal ofthe American Statistical Association, 55, 324-330.
Rappoport,     P. and L. Reichlin (1989) “Segmented Trends and Non-Stationary                Time Series”, Economic
   Journal, 99, 168-177.
Robinson, P.M. (1993) “Nonparametric            Function Estimation        for Long-Memory        Time Series”, in: C.
   Sims, ed., Advances in Econometrics, Sixth World Congress of the Econometric Society. Cambridge:
   Cambridge University Press.
Rothenberg,     T.J. (1990) Inference in Autoregressive           Models with Near-Unit         Root, seminar notes,
   Department     of Economics, University of California, Berkeley.
Rudebusch, G. (1992) “Trends and Random Walks in Macroeconomic                       Time Series: A Reexamination”,
   International Economic Review, 33,661-680.
Rudebusch,     G.D. (1993) “The Uncertain        Unit Root in Real GNP”, American Economic Review, 83,
   264272.
Said, S.E. and D.A. Dickey (1984) “Testing for Unit Roots in Autoregressive-Moving                     Average Models
   of Unknown Order”, Biometrika, 71, 599-608.
Said, S.E. and D.A. Dickey (1985) “Hypothesis              Testing in ARIMA (p, l,q) Models”, Journal of the
   American Statistical Association, 80, 369-374.
Saikkonen, P. (1991) “Asymptotically        Efficient Estimation of Cointegrating         Regressions”, Econometric
   Theory, 7, 1-21.
Saikkonen, P. (1993) “A Note on a Lagrange Multiplier Test for Testing an Autoregressive                    Unit Root”,
   Econometric Theory, 9, 343-362.
Saikkonen, P. and R. Luukkonen          (1993a) “Testing for Moving Average Unit Root in Autoregressive
   Integrated Moving Average Models”, Journal of the American Statistical Association, 88, 5966601.
Saikkonen, P. and R. Luukkonen (1993b) “Point Optimal Tests for Testing the Order of Differencing in
   ARIMA Models”, Econometric Theory, 9, 343-362.
Sargan, J.D. and A. Bhargava (1983a) ‘Testing Residuals from Least Squares Regression for Being
   Generated by the Gaussian Random Walk”. Econometrica. 51. 153-174.
Sargan, J.D. and A. Bhargava (1983b) “Maximum                Likelihood Estimation       of Regression Models with
   First Order Moving Average Errors when the Root Lies on the Unit Circle”, Econometrica, 51,
   799-820.
Sarris, A.H. (1973) “A Bayesian Approach            to Estimation      of Time Varying Regression Coefficients”,
   Annals of Economic and Social Measurement, 2, 501-523.
Satchell, SE. (1984) “Approximation          to the Finite Sample Distribution           for Nonstable      First Order
   Stochastic Difference Equations”, Econometrica, 52, 1271-1289.
                                                                                                         J.H. Stock


Schmidt. P. and P.C.B. Phillips (1992) “LM Tests for a Unit Root in the Presence of Deterministic
   Trends”, Oxford Bulletin of Economics and Statistics, 54, 2577288.
Schotman, P. and H.K. van Dijk (1990) Posterior Analysis of Possibly Integrated Time Series with an
   Application    to Real GNP, manuscript,        Erasmus University Econometric        Institute, Netherlands.
Schwarz, G. (1978) “Estimating       the Dimension of a Model”, Annals of Statistics, 6,461L464.
Schwert. G.W. (1989) “Tests for Unit Roots: A Monte Carlo Investigation”,                   Journalof   Businessand
   Economic Statistics, I, 147-l 59.
Sen, P.K. (1980) “Asymptotic        Theory of Some Tests for a Possible Change in the Regression Slope
   Occurrine    at an Unknown       Time Point”, Zeitschrifi fir Wahrscheinlichkeitstheorie und verwandte
   Gebiete, 52, 2033218.
Sheohard.     N.G. (1992) Distribution       of the ML Estimator         of a MA(l) and a Local Level Model,
   manuscript,     Nuffield College, Oxford.
Shephard, N.G. (1993) “Maximum Likelihood Estimation of Regression Models with Stochastic Trend
   Components”,      Journal of the American Statistical Association, 88, 590-595.
Shephard, N.G. and A.C. Harvey (1990) “On the Probability              of Estimating a Deterministic     Component
   in the Local Level Model”, Journal of Time Series Analysis, 11, 339-347.
Shiller, R.J. and P. Perron (1985) “Testing the Random Walk Hypothesis: Power versus Frequency of
   Observation”,     Economics Letters, 18, 1271-1289.
Shively, T.S. (1988) “An Exact Test for a Stochastic Coefficient in a Time Series Regression Model”,
   Journal of Time Series Analysis, 9, 81-88.
Siegmund, D. (1988) “Confidence Sets in Change-point             Problems”, International Statistical Review, 56,
   31-47.
Sims, C.A. (1972) “Money, Income and Causality”, American Economic Review, 62, 540-552.
Sims, C.A. (1980) “Macroeconomics          and Reality”, Econometrica, 48, l-48.
Sims, CA. (1988) “Bayesian Skepticism on Unit Root Econometrics”,               Journal of Economic Dynamics and
   Control, 12,463-474.
Sims, C.A. and H. Uhlig (1991) “Understanding             Unit Rooters: A Helicopter Tour”, Econometrica, 59,
    1591-1600.
Sims, CA., J.H. Stock, and M.W. Watson (1990) “Inference in Linear Time Series Models with Some
   Unit Roots”, Econometrica, 58, 1133144.
Solo, V. (1984) “The Order of Differencing in ARIMA Models”, Journal of the American Statistical
   Association, 79, 916-921.
Solo, V. (1989) A Simple Derivation of the Granger Representation               Theorem, manuscript,      Macquarie
   University, Sydney, Australia.
Sorensen, B. (1992) “Continuous        Record Asymptotics in Systems of Stochastic Differential Equations”,
   Econometric Theory, 8,28-51.
Sowell, F. (1990) “Fractional      Unit Root Distribution”,      Econometrica, 58,495-506.
Sowell, F. (1991) “On DeJong and Whiteman’s Bayesian Inference for the Unit Root Model”, Journal
   of Monetary Economics, 28, 2555264.
Sowell, F.B. (1992) “Maximum              Likelihood     Estimation     of Stationary     Univariate    Fractionally-
     Integrated Time-Series Models”, Journal of Econometrics, 53, 1655188.
Stine, R.A. and P. Shaman (1989) “A Fixed Point Characterization             for Bias of Autoregressive Estimates”,
   Annals of Statistics, 17, 1275-1284.
Stock, J.H. (1987) “Asymptotic         Properties    of Least Squares Estimators       of Cointegrating     Vectors”,
   Econometrica, 55, 1035-1056.
Stock, J.H. (1988) A Class of Tests for Integration         and Cointegration,     manuscript,    Kennedy School of
   Government,      Harvard University.
Stock. J.H. (1990) “Unit Roots in GNP: Do We Know and Do We Care?: A Comment”.                              Carneaie-
                                                                                                                    ”
   Rochester‘Conference on Public Policy, 26, 63-82.
Stock, J.H. (1991) “Confidence Intervals for the Largest Autoregressive              Root in U.S. Economic Time
   Series”, Journal of Monetary Economics, 28,435-460.
Stock, J.H. (1992) ‘Deciding Between I(0) and I(l)“, NBER Technical Working Paper no. 121; Journal
     of Econometrics, forthcoming.
Stock, J.H. and M.W. Watson (1988a) “Variable Trends in Economic Time Series”, Journal of Economic
   Perspectives, 2, 147-l 74.
Stock, J.H. and M.W. Watson (1988b) "Testingfor Common Trends”, Journal ofthe American Statistical
   Association, 83, 1097-l 107.
Ch. 46: Unit Roots, Structural Breaks and Trends                                                                  2841


Stock, J.H. and M.W. Watson (1989) “Interpreting           the Evidence on Money-Income          Causality”, Journal of
   Econometrics, 40, 161-182.
Stock. J.H. and M.W. Watson (1993) “A Simple Estimator of Cointegrating                      Vectors in Higher Order
   Integrated Systems”, Econometrica, 61, 783:820.
Svensson. L.E.O. (1992) “An Interpretation        of Recent Research on Exchange Rate Target Zones”, Journal
   of economic Pe;spectives, 6, 11&144.
Tanaka, K. (1990a) “The Fredholm Approach                 to Asymptotic     Inference in Nonstationary        and Non-
   invertible Time Series Models”, Econometric Theory, 6, 41 l-432.
Tanaka, K. (1990b) “Testing for a Moving Average Unit Root”, Econometric Theory, 6,433-444.
Tanaka.      K. and S.E. Satchel1 (1989) “Asvmptotic             Properties     of the Maximum         Likelihood    and
   Non-Linear     Least-Squares    E&mat&s        fo> fioninvertable      Moving Average Models”, Econometric
    Theory, $333-353.
Tang, S.M. and LB. MacNeill (1993) “The Effect of Serial Correlation                 on Tests for Parameter      Change
    at Unknown Time”, Annals of Statistics, 21, 552-575.
Tinbergen, J. (1939) Statistical Testing of Business-Cycle Theories. Vol, II: Business Cycles in the United
    States of America, 1919-1932. League of Nations: Geneva.
Uhlig, H. (1992) What Macroeconomists              Should Know About Unit Roots As Well: The Bayesian
    Perspective, manuscript,    Department     of Economics, Princeton University.
Watson, M.W. (1986) “Univariate        Detrending       Methods with Stochastic Trends”, Journal of Monetary
    Economics, 18, 49-75.
Watson, M.W. and R.F. Engle (1985) “Testing for Regression Coefficient Stability with a Stationary
    AR(l) Alternative”, Review of Economics and Statistics, LXVII, 341-345.
Wei, C.Z. (1992) “On Predictive Least Squares Principles”, Annals of Statistics, 20, l-42.
West, K.D. (1987) “A Note on the Power of Least Squares Tests for a Unit Root”, Economics Letters,
   24,1397-1418.
West, K.D. (1988a) “Asymptotic         Normality      when Regressors have a Unit Root”, Econometrica, 56,
    1397-1418.
West, K.D. (1988b) “On the Interpretation              of Near Random Walk Behavior in GNP”, American
    Economic Review, 78,202-208.
White, J.S. (1958) “The Limiting Distribution        of the Serial Correlation Coefficient in the Explosive Case”,
    Annals of Mathematical Statistics, 29, 1188-l 197.
White, J.S. (1959) “The Limiting Distribution         of the Serial Correlation     Coefficient in the Explosive Case
    II”, Annals of Mathematical Statistics, 30, 831-834.
Yao, Y.-C. (1987) “Approximating           the Distribution       of the Maximum         Likelihood    Estimate of the
    Change-Point    in a Sequence ofIndependent        Random Variables”, Annals ofStatistics, 15,1321-1328.
Zacks, S. (1983) “Survey of Classical and Bayesian Approaches                 to the Change-Point       Problem: Fixed
    Sample and Sequential Procedures          of Testing and Estimation”,         in: M.H. Rizvi et al., eds., Recent
    Advances in Statistics. New York: Academic Press, 245-269.
Zellner (1987) “Bayesian Inference”, in: J. Eatwell, M. Milgate and P. Newman, eds., The New Pa/grave:
    A Dictionary of Economics, Macmillan Press: London, 208-219.
Zivot, E. and D.W.K. Andrews (1992) “Further Evidence on the Great Crash, the Oil Price Shock, and
    the Unit Root Hypothesis”, Journal of Business and Economic Statistics, 10, 251-270.



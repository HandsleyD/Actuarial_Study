---
normalized_id: shared-pdf-reference-clasical-estimation-methods-for-ldv-models-using-simulation
exam_code: SHARED
material_scope: clasical estimation methods for ldv models using simulation.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Clasical Estimation Methods for LDV Models Using Simulation.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-clasical-estimation-methods-for-ldv-models-using-simulation

Chapter     40


CLASSICAL ESTIMATION METHODS FOR LDV
MODELS USING SIMULATION

VASSILIS         A. HAJIVASSILIOU

Yale University


PAUL      A. RUUD

University       of California




Contents

1.   Introduction                                                              2384
2.   Limited dependent                      variable      models               2386
     2.1.        The latent normal          regression    model                2386

     2.2.        Censoring                                                      2386

     2.3.        Truncation                                                    2392

     2.4.        Mixtures                                                      2394

     2.5.        Time series models                                            2395

     2.6.        Score functions                                               2397

     2.7.        The computational           intractability    of LDV models   2399

3.   Simulation               methods                                          2400
     3.1.        Overview                                                      2400

     3.2.        Censored      simulation                                      2402
     3.3.        Truncated      simulation                                      2406
4.   Simulation               and estimation             of LDV models         2408
     4.1.        Overview                                                       2408
     4.2.        Simulation      of the log-likelihood        function          2412

     4.3.        Simulation      of moment       functions                      2421

     4.4.        Simulation      of the score function                         2428

     4.5.        Bias corrections                                               2435

5.  Conclusion                                                                 2437
6. Acknowledgements                                                            2438
References                                                                     2438



Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elseuier Science B. V. All rights reserved
2384                                                                    V.A. Hajitmsiliou   and P.A. Ruud




1.     Introduction

This chapter discusses classical estimation methods for limited dependent variable
(LDV) models that employ Monte Carlo simulation techniques to overcome compu-
tational problems in such models. These difficulties take the form of high-dimen-
sional integrals that need to be calculated repeatedly. In the past, investigators                  were
forced to restrict attention to special classes of LDV models that are computationally
manageable. The simulation estimation methods we discuss here make it possible to
estimate LDV models that are computationally                  intractable     using classical estima-
tion methods.
    We first review the ways in which LDV models arise, describing the differences
and similarities in censored and truncated data generating processes. Censoring and
truncation    give rise to the troublesome         multivariate     integrals. Following the LDV
models, we described various simulation                methods for evaluating          such integrals.
Naturally, censoring and truncation play roles in simulation as well. Finally, estima-
tion methods that rely on simulation              are described. We review three general ap-
proaches that combine estimation              of LDV models and simulation:             simulation      of
the log-likelihood       function (MSL), simulation          of moment functions (MSM), and
simulation of the score (MSS). The MSS is a combination                     of ideas from MSL and
 MSM, treating the efficient score of the log-likelihood                    function as a moment
function.
    One of the most familiar LDV models is the binomial                        probit model, which
specifies that the probability        that a binomial random variable y equals one, condi-
tional on the regression vector x, is @(x’fi) where a(.) is the univariate                     standard
normal cumulative          distribution    function (c.d.f.). Although         this integral has no
analytical expression, @ has accurate, rapid, numerical approximations.                      These help
make maximum likelihood estimation of the binomial probit model straightforward
and most econometric            software packages provide such estimation                 as a feature.
However, a simple and common extension of the binomial probit model renders
the resulting model too difficult for maximum likelihood computation.                      Introducing
correlation among the observations             generally produces a likelihood function con-
taining integrals that cannot be well approximated                and rapidly computed.
    An example places the binomial probit model in the context of panel data in
which a cross-section of N experimental units (individuals or households) is observed
repeatedly, say in T consecutive time periods. Denote the binomial outcome for the
nth experimental        unit in the tth time period by y,,~(0, l}. In panel data sets,
econometricians       commonly expect correlation among the y,, for the same n across
different t, reflecting the presence of unobservable              determinants      of y,, that evolve
slowly for each experimental          unit through time. In order to model such correlation
parsimoniously,      econometricians       have adapted familiar models with correlation to
the probit model. One can describe each y,, as the transformation                           of a latent,
Ch. 40: Classical Estimation     Methods,for   LDV Models Using Simulation                               2385


normally     distributed,      y,*,:




Then, one can assign the latent y,: a nonscalar covariance matrix appropriate          to
continuously   distributed panel data. For example, stacking the y,*, first by time
period and then by experimental    unit, a common specification      of the covariance
matrix is the variance components    plus first-order autoregression   model




                                                                                                    + +JT,

                                                                   PT-2      ...    p        1

                                                                                                           (1)




    Now consider the impact of such nonscalar covariance matrices on the likelihood
for the observed y,,. Although the marginal probabilities          that y,, is zero or one are
unchanged, the likelihood function consists of thejoint probabilities          that the depen-
dent series {yn1,yn2,. . . , ynT} are the observed sequences of zeros and ones. These
joint probabilities  are multivariate    normal integrals over T dimensions           and there
are 2* possible integrals.’
    The practical significance of the increased dimensionality         of the integrals is that
traditional numerical methods generally cannot compute the integrals with sufficient
speed and precision to make the computation           of the maximum likelihood estimator
workable. In this chapter, we review a collection of alternative, feasible, methods
based on the ideas of estimation       with simulation      suggested by McFadden          (1989)
and Pakes and Pollard (1989).
   In Section 2, we describe LDV models and illustrate the computational             difficulties
classical estimation    methods encounter.        Section 3 summarizes       basic simulation
methods, covering censored and truncated sampling methods. Estimation                   of LDV
models and simulation are combined in Section 4 where three general approaches
are reviewed: simulation        of the log-likelihood     function, simulation     of moment




   ’ A partial list of studies in numerical analysis of such integrals is Clark (1961), Daganzo (1980), Davis
and Rabinowitz (1984), Dutt (1973), Dutt (1976). Fishman (1973), Hammersley and Handscomb              (1964),
Horowitzeta1.(1981),Moran(1984),Owen(1956),Rubinstein(l981),Stroud(l97l)andThisted(1988).
2386                                                                   V.A. Hajiuassiliou and P.A. Ruud


functions, and simulation of the efficient score. We provide computational  examples
throughout   to illustrate the various methods and their properties. We conclude this
chapter with a summary of the main approaches presented.



2.     Limited dependent variable models


2.1.     The latent normal regression model

Consider the problem of maximum likelihood estimation given the N observations
on the vector of random variables y drawn from a population                          with cumulative
distribution    function (c.d.f.) F(0, Y) = Pr{y < Y}. Let the corresponding                     density
function with respect to Lebesgue measure be f(0, y). The density f is a parametric
function and the parameter          vector 0 is unknown,          finite-dimensional,        and 0~63,
where 0 is a compact subset of RK.Estimation of 19by maximum likelihood (ML)
involves the maximization          of the log-likelihood        function IN(d) = C,“= 1In f(0; y,)
over 0. Often, finding the root of a system of normal equations                          V,l,(O) = 0 is
equivalent.    In the limited dependent          variable models that we consider in this
chapter, F will be a mixture of discrete and continuous              distributions,     so that f may
consist of nonzero probabilities        for discrete values of y and continuous            probability
densities for intervals of y. These functions are generally difficult to compute because
they involve multivariate      integrals that do not have closed forms, accurate approxi-
mations or rapid numerical           solutions. As a result, estimation             of 0 by classical
methods is effectively infeasible.
    In this section, we review the various forms of likelihood functions that arise in
LDV models. In the second subsection, we discuss models generated as partially
observed or censored latent dependent              variables. The third subsection describes
truncated latent dependent variables. In this case, one views observations                    in a latent
data set as missing entirely from an observed data set. Within these broad categories,
we review discrete, mixed discrete/continuous,               and mixture likelihood functions.
Following our discussion of likelihood functions, Section 2.6 treats the structure
of the score function for LDV models and the last subsection                        gives a concrete
illustration of the intractability    of classical estimation methods for the general LDV
model.



2.2.    Censoring

In general, and particularly   in LDV models, one can represent the data generating
process for y as an “incomplete data” or “partial observability”  process in which the
observed data vector y is an indirect observation on a latent vector y*. In such cases,
y* cannot be recovered from the censored random variable y.
Ch. 40:   Classical   Estimation      Methods.for   LDV Models   Using Simulation                              2387



De$nition       1.    Censored         random variables

Let Y* be a random variable from a population     with c.d.f. F(Y*) and support A.
Let B be the support of the random variable Y = r(Y*) where z:A+ B is not
invertible. Then Y is a censored random variable.


In LDV models, r is often called the “observation    rule”; and though it may not be
monotonic,  t is generally piece-wise continuous.     An important   characteristic of
censored sampling is that no observations are missing. Observations on y* are merely
abbreviated or summarized, hence the descriptive term “censored”. Let A c RM and
Bc   RJ.
   The latent c.d.f. F(B; Y*) for y* is related to the observed                     c.d.f. for y by the integral
equation


      F(B; Y) =
                      s (Y*lr(Y*)   d Y)
                                           dF(B; y*).                                                              (2)


In the LDV models that we consider, F(0; y*) is the multivariate normal c.d.f. given
by F(B, y*) = J&y* - p, Qdy* where R is a positive definite matrix, and


      @(y* - p,Q) = {det[2nR]}-1’2exp[                       -i(y*    - ~)‘a-‘(y*       -p)].                      (3)

We will refer to this multivariate      normal distribution    as the N(p,fl) distribution.
The mean vector is often parameterized as a linear function of observed conditioning
variables X: p(p) = Xp, where fi is a vector of K, slope coefficients. The covariance
matrix is usually a function of a vector of K, variance parameters C.
   The p.d.f. for y is the function that integrates to F(8; Y). In this chapter, integration
refers to the Lebesgue-Stieltjes     integral and the p.d.f. is a generalized derivative of
the c.d.f.2 This means that the p.d.f, has discrete and continuous              components.
Everywhere in the support of Y where F is differentiable, the p.d.f. can be obtained
by ordinary differentiation:



                                                                                                                   (4)


A simple illustration of such p.d.f.‘s is given below in Example 2. In the LDV models
we consider, F generally has a small nuumber of discontinuities     in some dimensions




 ‘Such densities are formally          known as Radon-Nikodym        p.d.t’s. with respect to Lebesgue   measure
2388                                                                       V.A. Hajimssiliou   and P.A. Ruud


of Y so that F is not differentiable        everywhere. At a point of discontinuity          Yd, we
can obtain the generalized p.d.f. by partitioning         Y into the elements in which F is
differentiable, { Y,, . . . , YJ,} say, and the remaining elements { Y,. + i, . . . , Y,} in which
the discontinuity   occurs. The p.d.f. then has the form


       f(e; y) =   $& 1 ..     J’
                                     [F(0;   Y) - F(8; Y - 0)]


                 = f(e; Y1,..., yJ,)Pr{Yj=Y~;j>~‘(6;             yl,...,   YJ'},                         (5)

where the discrete jump F(8; Y) - F(8; Y - 0) reflects the nontrivial            probability    of
the event { Yj = Y:; j > 5’}.3 Examples 1 and 2 illustrate such probabilities.
   It is these probabilities,   the discrete components     of the p.d.f., that pose computa-
tional obstacles to classical estimation. One must carry out multivariate           integration
and differentiation    in (2))(5) to obtain the likelihood for the observed data - see the
following example for a clear illustration      of this problem. Because accurate numeri-
cal approximations      are unavailable, this integration is often handled by such general
purpose numerical methods as quadrature. But the speed and accuracy of quadrature
are inadequate      to make the computation        of the MLE practical except in special
cases.


Example     1.     Multinomial        probit

The multinomial      probit model is a leading illustration of the computational  diffi-
culties of classical estimation methods for LDV models, which require the repeated
evaluation of (2))(5). This model is based on the work of Thurstone (1927) and was
first analyzed by Bock and Jones (1968). For a multinomial           model with J = M
possible outcomes, the latent y* is N(p, f2) where p is a J x 1 vector of means and
R is a J x J symmetric positive definite covariance matrix. The observed y is often
represented as a vector of indicator functions for the maximal element of y*: r(y*) =
[l(yf=max,y*};        j= l,..., 51. Therefore, the sampling space B of y is the set of
orthonormal      elementary    unit vectors, whose elements are all zero except for a
unique element that equals one:

       B= {(l,O,O ,..., O),(O,l,O,O ,..., 0) ,..., (0,O ,..., O,l)}.

   The probability function for y can be written as an integral over J - 1 dimensions
after noting that the event {yj = 1, yi = 0, i # j} is equivalent to {y; - y* 3 0, i = 1,. . . ,



  3The height of the discontinuity      is denoted   by

    F(O; Y) - F(B; Y - 0) = lim [F(f$ Y) - F(0; Y - E)].
                             40
Ch. 40: CIassical Estimation                    Methods for LDV Models Using Simulation                                    2389


J}. By creating the first-difference vector zj = [y: - y*, i = 1,. . . ,J, i #j] = AjY*
and denoting its mean and covariance by pj = Ajp and fij = AjflA> respectively,
F(B;y) and ~“(0; y) are both functions of multivariate normal negative orthant
integrals of the general form


      @(p,L?) =
                          ss   0


                               -m
                                        ..’
                                                 0



                                                 -co
                                                         4(x + P, Wx.

We obtain


      F(e;Y)= i                 l{Yj3             l}@(-Pj,.Rj)
                     j=l

and

                          ng= r @( - ~j, Rj)Y’                        ifyE&
      f (0;Y) =                                                                                                             (6)
                                                0                     otherwise.

When J = 2, this reduces                               to the familiar        binomial   probit   likelihood   mentioned     in
the introduction:

                          WC12           -PI,          l)y’@(P1   -   P2,   1Y2
      f (0;Y) =                                                                                                             (7)
                     i    @(        -    p’,    1)’ _Y’@($, 1)Y’

where ji = pL1- pLzand y’ = y,.
   If J > 5, then the likelihood function (6) is difficult to compute using conventional
expansions without special restrictions on the covariance matrix or without adopting
other distributions     that imply closed-form expressions.      Examples of the former
approach are the factor-analytic       structures for R analyzed in Heckman (1981),
Bolduc (1991) and Bolduc and Kaci (1991), and the diagonal                R discussed in
Hausman and Wise (1978), p. 310. An example of the latter is the i.i.d. extreme-value
distribution    which, as McFadden      (1973) shows, yields the analytically    tractable
multinomial     logit model. See also Lerman and Manski (1981), p. 224, McFadden
(198 1) and McFadden (1986) for further discussions on this issue.



Example      2.          Tohit

The tobit or censored regression model4 is a simple example of a mixed distribution
with discrete and continuous     components.   This model has a univariate     latent



 4Tobin   (I 95X).
2390                                                                        V.A. Hajivassiliou   and P.A. Ruud


structure like probit: y* - N(p, a’). The observation rule is also similar:                          r(y*) =
l{y* >O}.y* which leads to the sample space B = {yeRly 2 0} and c.d.f.


                                                      0                     if Y < 0,
        F(B; Y) =
                                          +(y*-p,~)dy*=@(Y-~(,a*)           ifY30.
                             s (Y’ < Y)
                        /

The p.d.f. is mixed, containing                  discrete and continuous   terms:

                                  0            if Y < 0,
        f(@Y)=              @(--~,a’)          ifY=O,                                                      (8)
                        f$(Y-~,a’)             ifY>O.
                    i

The discrete jump in F at Y = 0 corresponds to the nonzero probability         of { Y = 0},
just as in binomial probit. F is differentiable for Y > 0 so that the p.d.f. is obtained
by differentiation. Just as in the extension of binomial       to multinomial       probit,
multivariate tobit models present multivariate integrals that are difficult to compute.


Example 3.          Nonrandom sample selection

The nonrandom     sample selection model provides a final example of partial observ-
ability which generalizes the tobit model.’ In the simplest version, the latent y*
consists of two elements drawn from a bivariate normal distribution   where


        n(a) =          l       al2
                                   *
                 [ al2           a2 1


The observation              rule is




so that the first element of y is a binomial variable and the second element is an
observation    on yf when y, = 1; otherwise, there is no observation   of yf because y,
is identically zero. That is, the sampling space of y is the union of two disjoint sets:
B = { (O,O)} u { (l,y,), ~,ER}. Thus, two cases capture the nonzero regions of the




 ‘See   Gronau (1974), Heckman (1974), Heckman (1979), Lewis (1974), Lee (1978) and Lee (1979).
Ch. 40: Chwical    Estimation    Merhods        fir   LDV    Models   Using Simuhfion                            2391



c.d.f. of y. First of all, the c.d.f. is constant                 on B, = [0, 1) x [0, co):


     F(B; Y)=
                   srv: <01
                                ddy* - p,fWy* = @(- ~l,lX                           YEB,


because yr is unrestricted  (and unobserved) in this case. Once Y, reaches 1, the
entire sampling space for y, has been covered and the c.d.f. on B, = [l, co) x R is
increased according to




     F(B; Y) =
                    l{Y22O}@(-P1,1)+
                                                              s           4(~* - p, 0) dy*,
                                                               IY:~O,Y;~Y*)
                                                                                                     YEB,,


                    l{Y,2O}@(-Pr,l)+@


The p.d.f. will therefore         be




                   1                                    @(- Pl> 1)                                  if Y, = 0,
     f (0; Y) =
                    @(PI + arAY                 - P2)/&         1 - 0:,/0:).4(Y,         - ~,,a:)   if Y, = 1.

The sample selection process is often more complicated,          with several causes of
sample selection. In such cases, the latent yT is a vector with each element associated
with a different cause of partial observation. The latent yT is observed only if all the
elements of y: (suppose there are J = M - 1) are positive so that the observation
rule is




where 1 {y: 2 0) is an (M - 1) x 1 vector of indicator                           variables. The sampling space is

                                    M-l
     B=      JJER~IYM=O,fl Yj=l,YjE{O,l},                                  j<M
                                    j= 1
                                          M-l
                  JJER~IYM=O,              JJ Yj=O,YjE{O,l}                  9
                                          j=l


and the likelihood       function         contains          multivariate     integrals    over the M - 1 dimen-
sions of yy.

  Other types of nonrandom   sample selection lead to general discrete/continuous
models and models of switching regressions with known sample separation. Such
2392                                                            V.A. Hajiwssiliou   and P.A. Ruud


models are discussed extensively in Dubin and McFadden           (1984), Hanemann        (1984)
Lee (1978) Maddala (1983) and Amemiya (1984).



2.3.    Truncation

When it is represented as a partial observation,        a limited dependent variable is a
censored latent variable. Another mechanism            for generating   limited dependent
variables is truncation, which refers to dropping      observations   so that their realiza-
tion goes unrecorded.

Dejinition     2.   Truncated    random variables

Let F(Y) be the c.d.f. of y* and let D be a proper subset of the support            of F and DC
its complement  such that Pr {y*E DC} > 0. The function

                    F(Y)/Pr{YED}          if YED,
       G(Y)=
                           0              if YED’.

is the c.d.f. of a truncated      y*.

    One can generate a sample of truncated random variables with the c.d.f. G by
drawing a random sample of y* and removing the realizations that are not members
of D. This is typically the way truncation       arises in practice. To draw a single
realization of the truncated random variable, one can draw y*‘s until a realization
falls into D. The term “truncation”   derives from the visual effect dropping the set DC
has on the original distribution    when DC is a tail region: the tail of the p.d.f. is cut
off or truncated.
    To incorporate   truncation,  we expand the observation    rule to


             4Y*)               ify*ED,
       Y=
             unobserved         otherwise,


where D is an “acceptance region”. This situation differs from that of the nonrandom
sample selection model in which an observation         is still partially observed: at least,
every realization is recorded. In the presence of truncation,        the observed likelihood
requires normalization    relative to the latent likelihood:




                                                                                            (10)
Ch. 40: Classical   Estimation Methodsfor    LDV Models Using Simulation                                 2393


   The normalization          by a probability       in the denominator       makes the c.d.f. proper,
with an upper bound           of one.

Example     4.      Truncated     normal regression

Ify* - N(p, a’) and y is an observation of y* when y* > 0, the model is a truncated
normal regression. Setting D = (y~f?I y > 0) makes B = D so that the c.d.f. and p.d.f.
of y are

                                                     0                                  if Y < 0,
                    r


                    4 -
      F(6; Y)=          y
                            NY*      P, 4 dy*
                        0                        = @(y-PY~2)-@(-I44                     if y>.

                        sm
                                                                                                    2
                                                           1-   @(-p,c?)
                            @(Y* -p,ddy*
                        0



     f(& Y) =       I   &Y-
                              0
                                  K 0)
                                            if Y d 0,

                                            ifY>O,
                    ! 1 -@(-&a”)

As in the tobit model, a normal integral appears in the likelihood function. However,
this integral enters in a nonlinear fashion, in the denominator     of a ratio. Clearly,
multivariate forms of truncation lead to multivariate integrals in the denominator.

   To accommodate     both censored and truncated models, in the remainder of this
chapter we will often denote the general log-likelihood function for LDV models
with a two-part function:

      ln f@ Y) = ln ft (8 Y) - ln fd@ Y)                                                                (11)

where fi represents the normalizing probability Pr {y* E D ] = SDdF(0; y*). In models
with only censoring, f2E 1. But in general, both fi and f2 will require numerical
approximation.     Note that in this general form, the log-likelihood      function can be
viewed as the difference between two log-likelihood           functions for models with
censoring. For example, the log-likelihood      of the truncated regression in Example
4 is the difference between the log-likelihoods    of the tobit regression in Example 2
and the binomial probit model mentioned in the introduction            and Example 1 (see
equations (7) and (S))?


   6Note that scale information     about y* is available in the censored and truncated normal regression
models which is not in the case of binary response, so that u2 is now identifiable. Hence, the normalization
c’_= 1 is not necessary, as it is in the binary probit model where only the discrete information     1{ Y> 0)
is available.
2394                                                                      V.A. Hajivassiliou   und P.A. Ruud



1 {y > 0)    ln      L!9kEL
                   [ 1 -@(-p,a2)           1 =l{Y>O}ln[C$(Y-/J,a)]+1{Y=0}@(-,U,0*)

                                               -[l(Y>O}ln[l-@(--p,c*)]

                                               +l(Y=o}@(-~,a*)].



2.4.   Mixtures

LDV models have come to include a family of models that do not necessarily have
limited dependent variables. This family, containing densities called mixtures, shares
an analytical trait with the LDV models that we have already reviewed: the p.d.f.
generally contains discrete probability  terms.

Definition        3.        Mixtures

Let F(8; Y) be the c.d.f. of y* depending                on a parameter    8 and H(8) another          c.d.f.
Then the c.d.f.


       G(Y) =              F(B; Y) dH(8)
                       s

is a mixture.

Possible ways in which mixtures arise in econometric       models are unobservable
heterogeneity in the underlying data generating process (see, for example, Heckman
(198 1)) and “short-side”   rationing rules (Quandt (1972), Goldfeld and Quandt
(1975), Laroque and Salanit: (1989)). Laroque and Salanitt (1989) discuss simulation
estimation methods for the analysis of this type of model.

Example 5.                 Mixture

A cousin of the nonrandom                  sample selection model is the mixture       model generated
by an underlying trivariate                normal distribution, where




The observation               rule maps a three-dimensional      vector into a scalar; the rule can be
written as
Ch. 40: Cla.ssical Estimation    Mefhods,fiw      LDV   Models    Usiny Simulation                             2395



An indicator function determines      whether yT or y: is observed. An important
difference with sample selection is that the indicator itself is not observed. Thus, y
is a “mixture” of yz’s and yz’s. As a result, such mixtures have qualitatively distinct
c.d.f’s, compared to the other LDV models we have discussed. In the present case,




       F(8; Y) =
                        s o( 3 0.y; G Y)u (Y: < 0-y;Q Yl
                                                           4(y*    - PL,f4 dy*,




                        s (Y:a o,y: s Yl
                                           4(y*   - PL,Qdy*        +
                                                                       s
                                                                       {Y:< 0.y: s Y)
                                                                                        $(Y* -   PL,4   dy*,


and




where, for j = {2,3},

       PlljeE(Y:lYj*=           y)=Pl        +alj(YTPj)/af9


       Llllj   E    Iqyyyj* = Y) = 1 - 0+;

are conditional     moments. The p.d.f. particularly   demonstrates  the weighted nature
of the distribution:   the marginal distributions    of yz and ys are mixed together by
probability   weights.



2.5.      Time series models


LDV models are not typically applied to time series data sets but short time series
have played an important   role in the analysis of panel or longitudinal  data sets.
Such time series are another source of high-dimensional     integrals in likelihood
functions. Here we expand our introductory     example.

Example        6.    Multiperiod     binary probit model

A random sample of N economic agents is followed over time, with agent n being
observed for T periods. The latent variable y,*, = pnt + E,, measures the net benefit
to the agent characterizing an action in period t. Typically, pnt is a linear index
2396                                                                                V.A. Hajiwssiliou   und P.A. Ruud


function of a k x 1 vector of exogenous explanatory variables x,,~,i.e., pL,t= xk#. The
agent chooses one of two actions in each period, denoted by y,,,~jO, l}, depending
upon the value of y,*,:


                  y,, = 1      ify,*, > 0,
       r(y*) =                                               t= l,...,T.                                            (12)
                 i y,, = 0     if yz* d 0, I


Hence, the sample space for r(y*) is B = x T= I (0, l}, i.e., all possible (2r) sequences
of length T, with 0 and 1 as the possible realizations in each period.
   Let the distribution of y,* = (y,*,, . . , y,*,)’ be the multivariate  normal given in
equation (3). Then, for individual     n the LDV vector {y,,}, t = 1,. , T, has the
discrete p.d.f.

       f(fi, 0; Y) = @(S,,, SOS),                   where p = x’b          and S = diag{2y - 1).

   This is a special case of the multinomial   probit model of Example 1, with J = 2r
alternatives and a typically highly restricted 52, reflecting the assumed serial correla-
tion in the {snt}T=1 sequence.
   By way of illustration, let us consider the specific covariance structure, found very
useful in applied work:7

       E”*= rn + in,,          &I*= Pi,,* - 1 + “nt,                 IPI < 1                                        (13)

and v and yeindependent.                This implies that


                      1             p       p2         ...    pT-’
                                    1           p      ...    pT-2
                     P
                    p2              p                  ...       i     + a;.J,.
                                                ...
                                                       1        P
                   pT-l       pT-2              ...    /,       1



The variance parameters 0: and of cannot both be identified, so the normalization
a~+~,2=1isused.’
  The probability of the observed sequence of choices of individual n is


       Pr (y,; 8, XJ =
                          s  b&n)


                             MYn)
                                        4(~,*       - A, f&J dy:,




  ‘See Hajivassiliou    and McFadden (1990), BGrsch-Supan et al. (1992) and Hajivassiliou                (1993a).
  *This is the structure assumed in the introductory  example   see equation (1) above.
Ch. 40: Classical   Estimation Methods/iv   LD V Models Using Simulation                               2397


with 0 = (/3, of, p) and

               0           if y,, = 1,
       %t =
              i -YE     ify,, = 0,




   Note that the likelihood of this example is another member of the family of
censored models. Time series models like this do not present a new analytical
problem. Indeed, such time series models are more tractable for estimation because
classical methods do provide consistent, though statistically inefficient, estimators
(see Poirier and Ruud (1988), Hajivassiliou   (1986) and Avery et al. (1983)).9 Keane
(1993) discusses extensively special issues in the estimation by simulation    of panel
data models and Miihleisen (1991) compares the performance of alternative simula-
tion estimators for such models. Studies of dynamic discrete behavior using simula-
tion techniques    are Berkovec and Stern (1991), Bloemen and Kapteyn            ($991),
Hajivassiliou   and Ioannides   (1991), Hotz and Miller (1989), Hotz and Sanders
(1991), Hotz et al. (1991), Pakes (1992) and Rust (1992).
   In this chapter, we do not analyze the estimation     by simulation of “long” time
series models. We refer the reader to Lee and Ingram (1991), Duffie and Singleton
(1993), Laroque and Salanie (1990) and Gourieroux       and Monfort (1990) for results
on this topic.



2.6.    Score functions

For models with censoring, the score for 8 can be written in two ways which we will
use to motivate two approaches to approximation     of the score by simulation.


       V,lnf(Q;y)     =z                                                                              (14)

                      = ~JW~lnf(~;~*)l~l                                                              (15)

where V0 is an operator that represents partial differentiation with respect to the
elements of 0. The ratio (14) is simply the derivative of the log-likelihood   and

   ‘Panel data sets in which each agent is observed for the same number of time periods T are called
balanced, while sets with T. # T for some n = 1,. , N are known as unhalancrd. As long as the determi-
nation of T. is not endogenous   to the economic model at hand, balanced and unbalanced         sets can be
analyzed using the same techniques. There exists, however, the interesting case in which T,, is determined
endogenously   through an economic decision, which leads to a multiperiod      sample selection problem.
See Hausman and Wise (1979) for a discussion of this case.
2398                                                                                     V.A. Hajivassiliou   and P.A. Ruud


simulation    can be applied to the numerator        and denominator     separately. The
second expression (15), the conditional     expectation   of the score of the latent log-
likelihood, can be simulated as a single expectation        if V, lnf(8; y*) is tractable.
Ruud (1986), van Praag and Hop (1987), Hajivassiliou         and McFadden      (1990) and
Hajivassiliou   (1992) have noted alternative ways of writing score functions for the
purpose of estimation by simulation.
   Here is the derivation   of (15). Let F(8; y* 1y) denote the conditional    c.d.f. of y*
given that r(y*) = y.” We let


        ECNY*)IYI =           r(y*)dF(&y*Iy)                                                                           (16)
                          s

denote the expectation      of a random variable                             t(y*) with respect to the conditional
c.d.f. F(B; y* 1y) of y* given r(y*) = y. Then

        vtm Y) _
         f(R Y)
                           1
                         .mY)        s
                                     (y*,r(y*)    ‘y)
                                                         V,dF(&y*)


                     =



                         s(y'lr(y*)'Y)
                    = -V,WV;Y*)I~(Y*)
                                            v&m Y*) fvt Y*)
                                                 fvt Y*) fvt Y)
                                                               = ~1
                                                                       dy*




since                                      f(8; y*)dy* is the p.d.f. of the truncated
        We; Y*)ifvt Y) = fv3 Y*YJ(~.,~(~*)=~~
distribution {y* 1r(y*) = y}.
   This formula for the score leads to the following general equations for normal
LDV models when y* has the multivariate       normal p.d.f. given in (3):

         v,ln f(e; Y) = a- 1[E(Y* IY) - ~1,
        V,lnf(e;Y)=~~-l{~(Y*lY)+c~(y*i~(y*)=y)-~i
                               x [WY*            Ir(Y*) = Y) - PI’ - fl>fl-         r,                                 (17)

using the standard            derivatives               for the log-likelihood      of a multivariate         normal




  I0 Formally,

                                     Pr{y*< y*,y-E<T(y*)<y}
       F(O; Y* 1T(y*) = y) E lim
                               610           Pr{y-E<T(y*)<y}
Ch. 40: Classical Estimation   MethodsJiv    LDV Models Usiny Simulation                 2399


According to (17), the score of a normal LDV model depends only on the first two
moments of a truncated multivariate     normal random variable z generated by the
truncation rule

                   Y*           if r(y*) = y,
       z=                                                                                (19)
              unobserved        otherwise.

The functional form of these moments depends on the specification          of the LDV
function 2.
   For LDV models with truncation,       there are no changes to (14)-(16). The only
change that (9) requires for (19) is the restriction to the acceptance region D. That
is, the score depends on only the first two moments of a truncated multivariate
normal random variable z’ generated by the truncation       rule


       z’ =        Y*            if r(y*) = y,        Y*E&
              unobserved         otherwise.

As a result, there is a basic change to (17). Because the log-likelihood    function of
truncated models is the difference between two log-likelihood    functions for censored
models (see equation (1 l)), the score is expressed as the difference in the scores for
such models:

       V. ln f(& Y) = V. ln fl(& Y) - V. ln f,(Q;Y)
                     = .W,lnf(R~*)l~(~*)              = ~1- W,lnf(R~*)l~*~Dl

and (17) becomes

       V,lnF(B;y)=R-‘[E(y*)z(y*)                 =y)-E(y*ly*~D)],

       v,lnF(B;y)=~R-‘{EC(y*-~)(y*-I*)‘I~(y*)=y]

                         - EC(Y* - P)(Y* - ~)ll~*~Dl}fl-‘.


2.7.    The computational        intractability     of LDV models

The likelihood contribution       f(t9; y,) and the score V, lnf(B; y,) are functions of at
most M-dimensional       integrals over the region D(y) = {ylz(y*) = y} in the domain
of the M x 1 latent vector yx. The fundamental        source of the computational    intract-
ability of classical estimation methods for the general LDV model is the repeated
evaluation of such integrals. To illustrate, consider a multinomial      probit model with
M = 16 alternatives,     with K = 20 exogenous variables that vary by alternative.           A
random sample of N = 1000 observations is available. Suppose the M x M variance-
2400                                                                  V.A. Hajicassiliou   and P.A. Ruud


covariance matrix R of the unobserved          random utilities has (15 x 16/2) - 1 = 119
free elements (after imposing identification     restrictions). Then, the number of param-
eters to be estimated is p = 139. Suppose the analyst uses an iterative Newton-
Raphson type of numerical procedure, employing numerical approximations                  to the
first derivatives  based on two-sided first differences and that 20 iterations              are
required to achieve convergence,        which is a realistic number.”          Each iteration
requires at least 2p evaluations of the likelihood function for approximating          the first
derivatives. We thus expect that finding the ML estimator will require about 20 x 2p
function evaluations. Since the sample consists of N = 1000 individuals, we will have
to calculate N x 20 x 2p contributions       to the likelihood function, each of which, in
general, will be 16-dimensional      integrals. Let s be the time in seconds a given
computer requires to approximate        a 16-dimensional         integral by numerical quad-
rature methods. Our hypothetical      ML estimation will thus require about N x 20 x
2p x s seconds. On a typical modern supercomputer             (say a Cray 1) one could expect
s z 2. Hence, using such a supercomputer,          our problem would take about 1000 x
20 x 178 x 2/3600 hours, which is about 4 months of Cray 1 CPU! It is crucial to
stress that such numerical quadrature       methods offer only poor approximations            to
integrals of such dimension. I2 The maximum likelihood estimates resulting from 4
months of Cray 1 CPU would be utterly unreliable.                    The need for alternative
estimation methods for these problems is apparent.



3.     Simulation   methods

3.1.    Overview

Two general approaches to exploiting simulation             in parametric estimation are to
approximate      the likelihood function and to approximate         such moment functions
as the score. The likelihood function can be simulated by Monte Carlo techniques
over the latent marginal distribution        f(0; y*) in equation (4) for the mixture case,
equation (5) for the discrete/continuous         case and equation (10) for the truncated
case. Alternatively,    the score can be approximated      either by integrating both nume-
rator and denominator        in equation (14) or by integrating over the latent conditional
p.d.f. f(0; y* 1y) as in equation (15). Thus, simulation techniques focus on the simula-
tion from these two distributions,      f(0; y*) and f(0; y* 1y). The censoring and trunca-
tion discussed above for LDV models also appear in simulations                and we consider
methods for effecting each type of observation rule below. As we will show in Section
4, some simulation estimation methods use censored simulation for the estimation
of the main types of LDV models discussed in Section 2 (censored, truncated and


   “See Quandt (1986) for a discussion of issues in numerical optimization methods.
   “Clark   (1961) proposed  another numerical   approximation    method for such integrals - see also
Daganzo et al. (1977) and Daganzo (1980). The Horowitz et al. (1981) study finds serious shortcomings
in the numerical accuracy of the Clark method in typical problems with high .I and unrestricted  R.
Ch. 40:     C/assical Estimation       Methods for LDV Models Using Simulation           2401


mixture models), whereas other estimation     methods use truncated simulation     for
the estimation of these models.
   Simulation  of standard   normal random variables is an old and well-studied
problem. Relatively fast algorithms are widely available for generating such random
variables on a computer. Thus, consider the simulation of the latent data generating
process. We can always write




where q is a vector of M independent      standard normal random variables and I- is
a matrix square root of Q, so that R = I-T’. It is convenient to set r to the (lower
triangular)   Cholesky factor. Clearly, the latent data generating       process can be
simulated rapidly with simulations of q for any values of p and R. Such simulations
can be used in turn to simulate the likelihood and log-likelihood    functions and their
derivatives with respect to the parameters.
    As in all of the examples given above, the observation      rules common in LDV
models imply regions of integration    that are rectangles: that is, for some matrix A
and vectors b, and b,, possibly with some infinite elements,

                                                                                         (21)

where rank(A) d M. These are the problems that we will consider. Since Ay* is also
normally distributed,     it will often be convenient     to simulate Ay* instead of y*. In
that case, we simply transform the mean vector and covariance matrix to Ap and
ARA’, respectively. Without any loss of generality in this section, we set A = I,,
the M x M identity matrix. We denote D = {zeR”I b, < z < b,}.
   Such regions as (21) have two important         analytical properties. First of all, rect-
angular regions have constant boundaries with respect to the variable of integration,
simplifying integration.     Secondly, the differentiation     in (4) and (5) can be carried
out analytically    to obtain likelihood functions composed of multivariate          normal
p.d.f.‘s of the form (3) and multivariate    normal c.d.f.‘s of the form


          Pr{D;p,fl}      =        l{y*ED}+(y*-p,n)dy*.                                  (22)
                              s

Thus, simulation of the likelihood can be restricted to terms in Pr( D; p, l2}. Simula-
tion of the score in (14) involves only the additional terms


V,Pr(D;fl,R}           =0-i             I{Y*ED)(Y*     -/MY*      - ~fl)dy*,
                                   s

V,Pr{D;p,R}            = $Q-l               I{Y*ED)C(Y*--)(Y*-/+-J&~*-@)~~*
                                       is
                                                                                         (23)
2402                                                                        V.A. Hujioussiliou   and P.A. Kuud


Normalized       by Pr { D; p, Q}, these equations           transform     to



                                                                                                         (24)

which are terms in (17).
   In the remainder of this section, we will discuss the simulation                      of (22)-(24). For
this purpose we denote

       yTi=     [yi;m=    l,...,M;m#i],

       p-i S E(Y*i)j
       n_i,~i    ~ V(YTi),

       R_i,i = cov(y*,,y*)

and the conditional       moments

       p_i,i(y*) s E(Y*~~YF)         and      R-,.-iii     E t’(Y’iIYF).

These conditional        moments      have the well-known          formulas




The conditional   mean and variance                 of y* given y? i, denoted       nil _ i and nii, _ i, are
defined analogously.  We also define

       y*,,=[y$m=         l,...,i-     11

and use a similar notation    for the marginal  and conditional  moments of ‘this
subvector of random variables. For example, the conditional mean ofy: given y*, i is




3.2.    Censored simulation

We begin by focusing           on the integrals      in (22) and (23) accumulated          in the vector



       E[h(y*, D)] s E 1 {y*ED}                                                                           (25)
                           [                [veci        y*J]'
The elements of h are censored           random variables. We consider two basic methods
of simulation: direct censoring           of the multivariate normal random variable and
importance sampling.

3.2.1.    Multivariate     normal simuhtion

A direct method for simulating Pr{ D; p, Q} and its derivatives is to make repeated
Monte Carlo draws for ye, use (20) to calculate y* for each q, and then form an
empirical analogue of (25), by working only with the realizations   that fall in set D.
Let {YIP,...,qR} be R simulated draws from the N(0, ZJ distribution and J, = p + l-q,
(r=l,...,R)sothat




is an unbiased simulation       of (25). As R gets larger, the sampling variance of h,
P(l - P)/R, approaches zero and h coverges strongly to E[h(y*, D)]. The simula-
tion of Pr{ D; p, 0) is simply the observed frequency with which the simulations        of
y* fall into D. Its derivatives with respect to p and Q are functions of the average
simulation    of l{y*~D}y*     and l{y*~D}y*y*‘.     We will call this the crude Monte
Curlo (CMC) simulator. Lerman and Manski (1981) conducted the first extensive
application of Monte Carlo integration       as a numerical technique to the estimation
of LDV models using the CMC simulator.
   The CMC is quick to compute and ideal for computers with a “vectorization
facility”.’ 3 However, the CMC also has at least two major drawbacks. First, it is
not continuous     in parameters. The simulator jumps at parameter values where a
J, is on the boundary of D. For example, consider parameter values (pug,r,) chosen
so that the mth element of the rth simulation equals its lower bound in D:




where r,, is the mth row of r,. Decreasing the parameter pm from porn will cause
the indicator l{jTl~D> to jump from 1 to 0, and this will result in discrete jumps in
the elements of h(jj,, D) and h. Such discontinuities  make computation   of estimators
and asymptotic distribution     theory awkward.i4     Second, the number of computa-
tions required by the CMC rises inversely with Pr{D; p, Q}, which makes it intract-
able when this probability is small. It should be noted that in principle the accuracy
of the CMC can be improved by use of so-called simulation-variance-reduction

   “Such a mechanism allows simultaneous          operation on adjacent elements of a vector using multiple
processors. See Hajivassiliou     (1993b) which shows that the CMC exhibits the greatest speed gains from
vectorization     among 13 alternative simulation methods.
   14See Quandt (1986) for a discussion ofiterative parameter search algorithms and their requirements
for differentiability  of the function to be optimized.
2404                                                                                  V.A. Hajivassiliou   and P.A. Ruud


techniques, as, for example,                the use of control    and antithetic               variates.   See Hendry
(1984) for definitions.

3.2.2.          Importance     sampling

Importance   sampling is another general method for reducing the sampling variance
of integrals computed by Monte Carlo integration      over (censoring) intervals. The
CMC involves sampling y* from the #(y* - ~1~0) p.d.f. and evaluating the function
h(y*, D). A simple generalization of this procedure rewrites EC/r] in terms of another
sampling distribution   y:


         E[h] =
                      sh(y*, D)$(y*


6 is a vector of parameters characterizing
                                            - p, Wy*     =
                                                             S[ yw;
                                                              &



                                                                     ,
                                                                         D)     a - PL,f4 16; P, Q, 4 d9
                                                                                     P, fl,4

                                             the design of the importance sampler y(.).
                                                                                                1


Note that for h(.) = 1 {LED}, this expression corresponds to Pr{D;p, 01. By drawing
a random variable j from the importance          p.d.f. y and evaluating  the weighted
indicator function h@)w(j), where

         w(J)     =   m - P, Q)
                      Y(k zGi’

one obtains an alternative unbiased simulation of Pr{ D; p, Ll>.The first advantage
offered by importance      sampling is the ability to substitute   sampling from y for
sampling from 4. In some cases, y may be sampled more quickly, or, in a more
general setting, sampling from 4 may be impractical.
   In addition, if y also has an analytical integral over a truncated sampling region
C such that D G C, then this analytical integral can be exploited as an approxima-
tion to Pr{ D; p, f2} as follows:


         Pr{D;p,R}           = Pr{jEC}            I(j%D}w(j)~~~dj.
                                             sC

By drawing from the truncated p.d.f. y(J, ,u, 0, fi)/Pr{jEC},   fewer simulations   are
“wasted” on outcomes of zero and, in effect, Pr{ jEC}w(j) approximates    Pr{ D; p, f2).
When y is a good approximation        to 4, so that the ratio of densities w = 4/y is
relatively constant, the sampling variance of the importance-sampling     simulator is
small. As noted above, the sampling variance of the CMC for a single simulation is
P( 1 - P), while the sampling variance of the importance    sampler is

         W’c.1 {SD}w(J)) = P~%V’(w(Wd’)                                       + (1 - f’,).E(~(j)lj%D)~],
where           PC=    Pr{$EC}        and     PD = Pr{JED}.          In        the   extreme        case   that   y = 4,
Ch. 40: Classical Estimation    Methods,for     LDV Models Using Simulation                               2405


V(W(J)IJED) = 0 and E(w(J)ljj~0)’     = P D. Therefore, good approximations to 4
afford improvements  over the CFC. Geweke (1989) introduces importance sampling
in Monte Carlo integration   in the context of Bayesian estimation.i5

Dejinition 4.           GHK importance-sampling             simulator

The GHK importance             p.d.f. is the “recursively       truncated”multivariate        normal   p.d.f.




for jkD where (T,,<,,, = fi,,,,,,,,,              and

      Cim   E him   -    &nI < m(9<nJ2         i=O,l.

By construction, the support of this p.d.f. is D. Conditional on J<,,,, p,,, is univariate
truncated normal on D, with conditional       mean determined by p<,. Draws from y
can be made recursively according to the formula




where the o are independently                 distributed    uniform    random   variablesi      The GHK
simulator is the product




It is an unbiased         simulator   of E(h).

   The GHK simulator        was developed     by Geweke (1992), Hajivassiliou      and
McFadden (1990) and Keane (1990). Experience suggests that the sampling variance
of &uk(jj) is very small so that it approximates  E(h) well in practice. This approxi-
mant has the properties of lying in the unit interval, summing to one over all the


   t50ther   investigations     of the use of Monte Carlo integration    in Bayesian analysis are, inter aha,
 Bauwens (1984), Kloek and van Dijk (1978) van Dijk (1987) and West (1990).
   16This method is described extensively in Devroye (1986) and is a simple application of the cumulative
probability   integral transform result -see Feller (1971). Computationally        more efficient methods for
generating univariate truncated normal variates exist -for example Geweke (1992). The advantage              of
the method presented in the preceding equation, however, is that it is continuous in p, 0, and w,, which,
as already mentioned,       is a desirable property of simulators   for asymptotic   theory and for iterative
parameter   search. The method of constructing      y in this example can also be extended to a bivariate
version using a bivariate normal c.d.f. and standardizing     adjacent pairs of elements.
2406                                                                 V.A. H~jiaassiliou    and P.A.   Ruud


disjoint rectangular   regions surrounding     and including D, and being a continuous
function of w, p, L2, he, and b,. These properties are discussed in Borsch-Supan     and
Hajivassiliou (1993). Moreover, Hajivassiliou et al. (1992) found conclusive evidence
for the superior root-mean-squared-error         performance of the GHK method in an
extensive Monte Carlo study comparing             the GHK to 12 other simulators      for
normal rectangle probabilities     Pr{ D; p, l2}.



3.3.     Truncated simulation

We now turn to the expectations in (24). These are ratios of the integrals in (25) and
cannot be simulated without bias using the censored simulation        methods above.
Even ignoring the bias, one must ensure that the denominator       of the ratio is not
zero. For example, the CMC and some importance-sampling         simulators can yield
outcomes of zero for probabilities   and thus violate this requirement.17      In this
subsection,  we describe two general procedures      which draw directly from the
truncated distributions associated with the expectations in equation (24).

3.3.1.    Acceptance/rejection methods

Acceptance/rejection (A/R) methods provide a mechanism        for drawing from a
conditional density when practical exact transformations from uniform or standard
normal variates are not available. The following result is standard; see Devroye
(1986) Fishman (1973) or Rubinstein (1981) for proofs.

Proposition 1

Suppose b(y*) is a J-dimensional     density, and one wishes to sample from the
conditional density 4(y* ID) = 4(y*)/jD r#~(y*)dy*. Suppose y(J) is a density with a
support A from which it is practical to sample, with the property that


       supa<a<          + co,
        D Y(J) ’

where D s A. Draw J from y and o from a uniform density on [0,11, repeat this
process until a pair satisfying PED and 4(J) 3 occ.r(J) is observed, and accept the
associated 9. Then, the accepted points have density 4(.1 D).




   “It should be noted that one of the attractive properties of the GHK simulator     is that it generates
simulated probability values that are bounded away from 0 and 1, unlike many          other importance-
sampling simulators. See Bgrsch-Supan   and Hajivassiliou   (1993) for details.
Ch. 40: Classical    Estimation   Methods for LD V Models Using Simulution                                  2401


   The choice of a suitable comparison     density y(‘) is important   because it deter-
mines the expected “yield” of the acceptance/rejection      scheme. The main attractive
feature of A/R is that the accepted draws have the correct truncated distribution.
The practical shortcoming,    though, is that the operations necessary until a specific
number of draws are accepted may be very large.
   The A/R scheme also provides an unbiased simulator of l/Pr{ D; p, f2} if JDy@)dJ =
T(D) is practical to compute. The conditional         probability  of acceptance,   given
@ED}, is So6(J)dUa     = Pr{D)l c(, so that the marginal probability    of acceptance is
T(D) Pr{D}/cr. The distribution    of the number of trials to get an acceptance is the
geometric distribution  and its expectation is LY/[ZJZI) Pr(D}]. Therefore, if t is the
number of draws made until J is accepted, t.T(D)/cc is an unbiased simulator of
l/Pr( D}.

Example      7

The recursively truncated            normal p.d.f. in Definition 4 works well in practice                as the
comparison    distribution.          A bound on the density ratio is given by


      a=    fi      {~(b,,-~L,,<,(bl<,),~~,<,)-~(bo,-~,,<,(bo<,),aH,<,)>,
           m=l


where the conditional moments                are conditioned       on J<,     equal to the boundaries.
Since A = D, T(D) = 1.

3.3.2.     Gibbs resampling

Gibbs resampling is another way to draw from truncated             distributions.    An infinite
number of calculations       are required to generate a finite number of draws with
distribution   approaching     the true one. But convergence to the true distribution           is
geometric in the number of resamplings,           hence the performance       of this simulator
in practice is generally very satisfactory. In addition, this simulator is continuous
and differentiable     in the parameters    j.~ and R. The Gibbs simulator is based on
a Markov chain that utilizes computable             univariate truncated      normal densities
to construct    transitions,   and has the desired truncated        multivariate     normal as
its limiting distribution.’   * This simulator is defined by the following Markovian
updating scheme.

Proposition      2

Consider the multivariate       normal distribution N(p,O) truncated on D, which is
assumed to be finite. Define a recursive procedure with steps j = 1,. . . , J in rounds
g=l , . . . , G. Let {y*‘jg’} be a sequence on D such that on the jth step of the gth

   “This simulator can be generalized in principle to non-normal    distributions,   provided   the correspond-
ing univariate distributions are easy to sample.
2408                                                                       V.A. Hajimwiliou   and P.A. Ruud


round,    thejth     element   of y*(jg) is computed      from J??~~“-~’ by

                             j - “) + aj, _ j’ @ - l [oj,y _ I aqc; j, dj, _j)
       yj*(jg) = pj, _ j(y *(j&J

                   -(l    -Oj,g-l)~(c~j’~jl-j)l’

where




and the ojg are independent       uniform [0, l] variates and cj, _ j = Gj.     Repeat
this process for G “Gibbs resampling rounds”. Then the random draws obtained by
this simulator have a distribution     that converges in L, norm at a geometric rate to
the true truncated   distribution     {y*ly*~D}    as the number of Gibbs resampling
rounds G grows to infinity.

   This result is proved in Hajivassiliou and McFadden (1990). It relies on stochastic
relaxation techniques as discussed in Geman and Geman (1984). See also Tierny
(1992) for other theoretical results on the Gibbs resampling scheme.” We present
below Monte Carlo experiments with simulation estimators based on this truncated
simulation scheme.


4.     Simulation        and estimation of LDV models

4.1.     Overview

In this section, we bring together the parametric estimation            of the LDV models
described in Section 2 with the simulation           methods in Section 3. Our focus is the
consistent estimation       of the parameters      of the model; we defer the discussion of
limiting distributions    to a later section. Our exposition follows the general historical
trend of thought in this area. We begin with the application                 of simulation  to
approximating       the log-likelihood     function. Next, we consider the simulation        of
moment functions. Because of the simulation               biases that naturally   arise in the
log-likelihood     approach, the unbiased simulation           of moment functions and the
method of moments are an alternative approach. Finally, we discuss simulation of
the score function. Solving the normal equations of ML estimation is a special case
of the method of moments and simulating the score function offers the potential for
efficient estimation.
   One can organize a description of the methods along the following lines. Figure 1
gives a diagrammatic       presentation    of a useful taxonomy. In this figure, the various

   “The usefulness of Gibbs resampling for Bayesian     estimation   has been recognized   by Geweke (1992),
Chib (1993), and by McCulloch and Rossi (1993).
Ch. 40: Classical Estimorion Methods fir LDV Models UsingSimulation


                      GMSM




                          Figure 1. Taxonomy of simulation estimators


estimation   methods are represented      as elliptical sets and the properties     of the
associated simulation methods are represented as rectangular        sets. Five families of
estimation methods are pictured. All of the methods fall into the class of generalized
method ofsimulated moments (GMSM). This is the simulated counterpart                to the
generalized method of moments (GMM) (see Newey and McFadden (1994)). Within
the GMSM fall the method of simulated scores (MSS), the simulated EM (SEM), the
method of simulated moments (MSM), and maximum simulated likelihood (MSL).
In parallel with the types of LDV models, the simulation          methods are divided
between censored and truncated         sampling. The simulation    methods are further
separated into those that simulate the efficient score of the LDV models with and
without bias.
   The MSM is a simulated counterpart        to the method of moments (MOM). As the
figure shows, the MSM is restricted to simulation methods that generate unbiased
simulations   using censored simulation methods. The MSL estimation method also
rests on censored simulation      but, as we will explain, the critical object (the log-
likelihood function) is simulated with bias. The SEM algorithm is an extension of
the EM algorithm using unbiased simulations from truncated distributions;          it falls,
therefore, in the upper half of the figure. Of these methods, only the MSS has
versions that use both classes of simulation methods, censored and truncated, that
we have described above.
   Throughout     this section, we will assume that we are working with models for
which the maximum likelihood estimator is well-behaved. In particular, we suppose
2410                                                                                       V.A. Hajimssiliou   und P.A. Ruud


that the usual regularity conditions are met, ensuring that the ML estimator is the
most efficient CUAN estimator.      We will illustrate the methods using the rank
ordered prohit model. This LDV model is a natural candidate for most approaches
to estimation with simulation and the exact MLE performs well in small samples.

Example           8.          Rank ordered probit

The rank ordered probit model is a generalization      of the multinomial   probit model
described in Example 1. Instead of observing only the most preferred (or highest
ranked) alternative,    each observation    records the rank order of the alternatives
from most preferred to least preferred. The rank ordering yields considerably        more
information     about the underlying preference parameters than the simpler, highest-
ranked-alternative    response. Hence, consumer survey designers often prefer to ask
for complete rankings.
   We can express the observation      rule of rank ordered data algebraically    as

       Y = zij(Y*) = l {Y& = Yj*}f                        i,j=   1,..., J

where the {yz,} correspond                         to the order statistics        of y*,

          * <            * <...<
       Y(l)   ’        Y(2)    ’    ’   Y;“J,,



so that the first row of y contains indicators of the smallest element of y* and so
on until the last row indicates the largest element of y*. The sample space of y
consistsoftheJ!=Jx(J-1)x...           x 2 different J x J matrices containing  zeros
and ones such that only a single entry equals one in each row and column:


                                                 J]lYijE{o,1}3CYij=CYij=               ’
                                                                  I         j

Thus, even moderate numbers of alternatives             correspond   to discrete sampling
spaces with many outcomes.
   The c.d.f. of y is not particularly informative; it is simpler to derive the probability
of each possible outcome directly. The rank ordering y corresponds to values of y*
in a set satisfying J - 1 inequalities:

       D(y) = {y*d?-‘ly,.y*                      d y2.y* d ... < y,.y*},

where ,vj, is the row vector [yjl,. . . , yjJ]. Such additional inequalities as yr.y* < y3.y*
are redundant.     As in the multinomial       choice model, it is convenient   to transform
the latent y* into a vector of .I - 1 differences:


       zy~Ayy*=[yi.y*-y;+l.y*;i=                             l,...,   J-    11,
Ch. 40: Classicul          Estimation    Methods fir     LDV   Models     Using Simulatim                      2411



where

      d,-       CYij-Yi+l,j;            i=   l)...) J-       I;j=       l)..) 51

is a (J - 1) x J differencing matrix. According to this definition,                           D(y) = {.Y*Iz, d 0).
The transformed      random vector zy is also multivariate normal                             and for all YEB,

     f(8; Y) = Pr{ y = Y; p, f2} = @(drp, d&Id;).                                                              (29)

One probability                term in this p.d.f. is equivalent in computational               complexity   to the
normal orthant                integrals of the choice probabilities   in Example               1.

   We will use the various simulation and estimation methods to estimate this rank
ordered probit model in Monte Carlo experiments.     Because a natural standard of
comparison   is the MLE, we present first a Monte Carlo experiment for the MLE
in a workable case.

Example         9

When J = 4, the MLE is computable    using standard approximation    methods.                                    In
our basic Monte Carlo experiment the population   parameters will be

                     -1                                  1     l/2        0         0

      p=

            i
                    -l/3
                     l/3
                       1     I     and       Q =

                                                   : 0
                                                       l/2
                                                       0        0
                                                                0
                                                                    1     0
                                                                           1
                                                                         l/2
                                                                                    0
                                                                                   f/2



These values yield a reasonable amount of variation in y and they induce significant
                                                                                    1 I
                                                                                          .




inconsistency    in the popular rank ordered logit estimator (Beggs et al. (1981)) when
it is applied to the data. The block diagonal 0 contains covariances           among the
latent y* that are zero in the latent logit model. The ,u and R parameters are not all
identifiable   and so we normalize by reducing the parameterization           to d,~ and
drf2dk for Y = I,, the 4 x 4 identity matrix. The first variance in d,R,4;          is also
scaled to 1. In order to restrict d,Rd;     to be positive semi-definite, this covariance
matrix is also parameterized     in terms of its Cholesky square root. Putting the mean
parameters first, then stacking the nonzero elements of the Cholesky parameters,
the identifiable population    parameter vector is B0 = [ - 0.6667, - 0.6667, - 0.6667,
0.5000, 1.3230, 0.0000, - 0.3780, 0.92581.
   The basic Monte Carlo experiment will be a random draw from the distribution
of each estimator for N = 100 observations        on y. There will be 500 replications    of
each estimator. Results of the experiment for the MLE are in Table 1. The MLE
has a small bias relative to its sampling variance and the sampling variance is small
enough to make hypothesis tests for equal means or zero covariances quite powerful.
2412                                                                                        V.A. Hajivassiliou   and P.A. Ruud


                                                            Table 1
                                 Sample statistics       for rank ordered    probit     MLE

                    Population                            Standard            Lower                                  Upper
Parameter              value           Mean               deviation          quartile                Median         quartile

                     -0.6667          -0.6864               0.1317           -0.7702             -0.6807           -0.5921
                     -0.6667          -0.6910               0.2351           -0.8354             - 0.6629          -0.5231
                     -0.6667          -0.7063               0.2263           - 0.8276            - 0.6648          -0.5374
                     -0.5000          -0.5135               0.2265           - 0.6402            -0.5016           -0.3645
                        1.3230           1.3536             0.3002              1.130               1.317             1.519
                        0.000         -0.0127               0.1797           -0.1241             -0.008616            0.09545
                     -0.3780          ~ 0.408 1             0.1909           -0.5158             -0.3891           -0.2765
                        0.9258           0.9385             0.246 I             0.7513              0.9140            1.074




It appears that the bias in the MLE is largely caused by asymmetry in the sampling
distribution:  The medians are closer to the population           values than the means.
Overall, the asymptotic approximation       to the distribution  of the MLE is good. The
inverse information     matrix predicts the standard deviations in the fourth column
of Table 1 to be 0.1296, 0.1927, 0.1703, 0.2005, 0.2248, 0.1543, 0.1514, 0.1987.
Therefore, the actual sampling distribution      has more variation than the asymptotic
approximation.
   For the simulation estimators, we will also conduct Monte Carlo experiments for
a model with J = 6 alternatives.    In that case, the MLE is not easily computed. We
will use the population    values

             --1-                               - 1        l/2        0      0          0        0’
                 - 315                           l/2        1         0      0          0        0
                 - l/5                               0      0     514       314       I/4       l/4
       P(=                     and    R=
                    115                              0      0     314       514       l/4       l/4
                    315                              0      0     l/4       l/4       514       314
             _       l_                         -0          0     l/4       l/4       314       514

whichcorrespond    to0,=[-0.4000,    -0.4000, -0.4000, -0.4000, -0.4000, -0.5000,
1.414, 0.000, -0.3536, 0.9354, 0.000, -0.1768,    - 0.6013, 1.052, 0.000, 0.000, O.OOQ,
-0.4752, 0.87991 when normalizing      on Y = I,.



4.2.   Simulation         of the log-likelihood function

One of the earliest applications   of simulation to estimation was the general compu-
tation of multivariate integrals in such likelihoods as that of the multinomial  probit
by Monte Carlo integration.      Crude Monte Carlo simulation can approximate       the
probabilities  of the multinomial    probit to any desired degree of accuracy, so that
Ch. 40: Classical Estimation Methodsfir   LDV    Models Using Simulation                           2413



the corresponding        maximum simulated likelihood        (MSL) estimator       can approximate
the ML estimator.

De$nition 5.      Maximum simulated likelihood

Let the log-likelihood         function for the unknown           parameter     vector   0 given the
sample of observations         (y,, n = 1,. . , N) be




and let f”(t); y, o) be an unbiased simulator so that f(O; y) = E,[7(6; y, o)l y] where
w is a simulated vector of R random variates. The maximum simulated likelihood
estimator is

      &,, E arg max TN(O),
                     8

where




for some given simulation         sequence      {w”}.

   It is important to note that the MSL estimator is conditional   on the sequence of
simulators     {w”}. For both computational    stability and asymptotic   distribution
theory, it is important that the simulations do not change with the parameter values.
See McFadden (1989) and Pakes and Pollard (1989) for an explanation of this point.

Example    10

Borsch-Supan       and Hajivassiliou   (1993) proposed MSL estimation         of the multi-
nomial probit model of Example 1 using the GHK simulator for the choice probabi-
lities. In this example, we make similar calculations      for the rank ordered probit
model of Example 9. Instead of the normal probability function in (29), we used the
probability    simulator in the first element of h,,, in (28) to compute the simulated
log-likelihood    function ~,(O).2o For the simu lations of the probability         of each
observation,     we drew a vector of J - 1 = 3 independently        distributed     uniform
random variables for each CO,.For each replication of &,,,, we drew a new data set


   “The order of integration   affects this simulator, but we do not attempt to describe our particular
orderings. They were chosen    purely on the basis of a convenient algorithm   for finding the limits of
integration.
2414                                                                       V.A. Hajiaassiliou   and P.A. Ruud


                                                    Table 2
            Sample statistics   for rank ordered     probit MSLE using GHK      (J = 4, R = 1).

              Population                           Standard      Lower                             Upper
Parameter        value            Mean             deviation    quartile          Median          quartile

01              -0.6667          -0.7230            0.1424     -0.8219          -0.7198           - 0.6253
$2              - 0.6667         - 0.6077           0.2162     - 0.7342         -0.5934           - 0.4640
0,              - 0.6667         -0.9555            0.2520     - 1.087          -0.9256           -0.7860
0,              ~0.5000          -0.6387            0.1430     - 0.7305         -0.6415           -0.5379
05                 1.3230           1.2595          0.1741        1.134            1.237             1.353
06                 0.0000           0.0131          0.1717     - 0.09063        -0.01013             0.1285
0,              -0.3780          -0.6715            0.2088     -0.7883          -0.6639           - 0.5292
08                 0.9258           1.3282          0.2211        1.185            1.301             1.448




{(Y,>%);n=     I,..., N} before maximizing TN(@)over 8. Each 7(&y,, w,) consisted of
a single simulation of f(0; y,) (R = 1).
   The results of this Monte Carlo experiment for J = 4 are in Table 2. In contrast
with the MLE, this MSLE exhibits much larger bias. The median is virtually
identical to the mean. The sampling variances are also larger, particularly   for the
covariance parameters. Nevertheless, this MSLE gives a rough approximation         to
the population    parameters.
   The results of this Monte Carlo experiment for J = 6 are in Table 3. For brevity,
only the mean parameters are listed. Once again, substantial    biases appear in the
sample of estimators. Given our experience with J = 4, it seems likely that these
biases are largely due to simulation. We will confirm this below as we apply other
methods to this case.

   Note that unbiased simulation of the likelihood function is neither necessary nor
sufficient for consistent MSL estimation.     Because the estimator   is a nonlinear
function (through optimization)  of the simulator, the MSL estimator will generally
be a biased simulation of the MLE even when the criterion function of estimation




                                                    Table 3
            Sample statistics   for rank ordered     probit MSLE using GHK      (J = 6, R = 1).

              Population                           Standard      Lower                             Upper
                 value            Mean             deviation    quartile          Median          quartile

                - 0.4000         -0.4585            0.1504      -0.5565          -0.4561          -0.3664
                - 0.4000         - 0.2489           0.2059      -0.3898          - 0.2460         - 0.0940
                ~ 0.4ooo         - 0.5054           0.1710      - 0.6056         -0.4957          -0.3891
                - 0.4000         -0.4589            0.2013      -0.5779          -0.4551          -0.3216
                - 0.4000         -0.6108            0.1882      - 0.6934         -0.6016          -0.5042
Ch. 40: Ckwicnl    Estimation Methods for LDV Models Using Simulation                     2415


is simulated      without           bias because


      E[T(e)]= l(O) + E
                                     Ll                      6
                                        arg max q(3) = arg max r(0).


Note also that while unbiased simulation of the likelihood function is often straight-
forward, unbiased simulation         of the log-likelihood     is generally infeasible. The
logarithmic    transformation     of the intractable   function introduces   a nonlinearity
that cannot be overcome simply. However, to obtain an estimator with the same
probability limit as the MLE, a sufficient characteristic           of a simulator    for the
log-likelihood    is that its sample average converge to the same limit as the sample
average log-likelihood.       Only by reducing the error of a simulator         for the log-
likelihood function to zero at a sufficiently rapid rate with sample size can one expect
to obtain a consistent estimator. Such results rest on a general proposition              that
underlies the consistency of many extremum estimators (see Newey and McFadden
(1994), Theorem 2.1):

Lemma 1

Let

  (1) 0~ 0, a compact subset of RK,
  (2) QJO), QN(0) be continuous    in 8,
  (3) f0 = arg max,, eQo(B) be unique,
  (4) 8, = arg max,,,QN(B) and
  (5) Q,(e) + Qe(C3)in probability   uniformly              in & 0 as N + co.

Then $N 4 Be in probability.

   We will assume from now on that the log-likelihood    function is sufficiently regular
to exploit this lemma. In particular,     we suppose that the y, are i.i.d., that 8 is
identifiable, that f(0;y) is continuous  at each 8 in a compact parameter space 0,
and that E[sup,,.llnf(8;y)l]      < cc. We refer the reader to Newey and McFadden
(1994, Theorem 2.5) for further discussion of these conditions and their roles.
   For LDV models with censoring, the generic likelihood simulator f(0; y,, w,) is
the average of R replications of one of the simulation methods described above:


      .7eY,, wn)- i             i     .W;Y,, o,,).
                            I       1

If the model includes truncation,   then the likelihood simulation    typically involves
a ratio of such averages, because a normalizing       probability appears in the deno-
minator, although unbiased simulation of the ratio is possible (see Section 3.3). In
any case, the simulation error will generally be O,( l/R). Thus, a common approach
2416                                                                          V.A. Hajimwiliou      and P.A. Ruud


to approximating    the log-likelihood function with sufficient accuracy is increasing
the number of replications per observation    R with the sample size N. This statistical
approach is in contrast to a strictly numerical approach of setting R high enough
to achieve a specified numerical accuracy independent      of sample size.

Example   11

For illustration, let us increase the replications in the previous examples from R = 1
simulation per observation to 5. The summary statistics are listed in Tables 4 and 5.
In both cases, J = 4 and J = 6, the biases are significantly       reduced. See BSrsch-
Supan and Hajivassiliou       (1993) for a more extensive Monte Carlo study of the
relationship    between R and bias in the multinomial     probit model.
   In the rank ordered probit model and similar discrete LDV models, all that is
necessary for estimator consistency is that R + CE as N -+ co. No relative rates are
required provided that the likelihood is sufficiently regular. Nor must the simula-
tions o satisfy any restrictions on dependence across observations.        The following
proposition,    taken from Lee (1992), establishes this situation.

Proposition    3

Let f(& y) be uniformly bounded away from zero for all 8~0, a compact set, and
all WEB, the sample space of y. Assume that the set of regularity conditions in the

                                                      Table 4
              Sample statistics   for rank ordered     probit MSLE using GHK      (J = 4, R = 5).

                Population                           Standard      Lower                               Upper
                   value            Mean             deviation    quartile          Median            quartile

                   -0.6667         ~ 0.6795           0.1366      -0.7726          -0.6774            -0.5840
                   - 0.6667        -0.6528            0.2267      -0.7913          - 0.6268           -0.5029
                   - 0.6667        -0.8327            0.2299      -0.9686          -0.8085            -0.6768
                   -0.5OQo         -0.5771            0.2159      -0.7076          -0.5641            -0.4412
                      I .3230         1.3582          0.2459         1.1863           1.3184             1.5036
                      0.0000       -0.0121            0.2089      -0.1380          -0.01570              0.1275
                   - 0.3780        - 0.5034           0.2016      -0.6256          -0.4875            -0.3753
                      0.9258          1.1334          0.2454         0.9505           1.1142             1.2814



                                                      Table 5
              Sample statistics   for rank ordered     probit MSLE using GHK      (J = 6, R = 5).

                Population                           Standard      Lower                               Upper
                   value            Mean             deviation    quartile          Median            quartile

                   - 0.4000        - 0.4088           0.1256      - 0.4893         -0.4053           -0.3227
                   - 0.4ooo        -0.3059            0.1776      - 0.4200         - 0.2966          -0.1846
                   -0.4000         -0.4554            0.1387      -0.5373          -0.4553           -0.3615
                   - 0.4OcNI       - 0.4288           0.1661      -0.5369          -0.4219           -0.3142
                   -0.4000         -0.5046            0.1773      -0.6211          - 0.4976          -0.3872
Ch. 40: Classical   Estimation   Methods   f;v LDV   Models   Usiny Simulation                         2417



paragraph after Lemma 1 hold. Let {onl} be an i.i.d. sequence over the index r. The
MSL estimator &s, = arg maxe(l/N)C,N,    1 In j(& yn, 0,) is consistent if R -+ cc as
N-co.

Proof

By a uniform        law of large numbers          and the lower bound            off,


                                 1 J+o,      as      R-rco,



so that




Since our regularity         assumptions      in the paragraph         after Lemma      1 guarantee   that


        s:p   $lN(0) - E[lnf(@         y)] LO          as     N+oo,



then &,(@/N also converges             uniformly      to E[ln f(0; y)] and consistency          follows by
Lemma 1.                                                                                             Q.E.D.

   Thus, the property of estimator consistency              makes modest demands on the
simulations of the likelihood function. Strictly speaking, one could employ a common
sequence of simulations        {w,), for all simulated likelihoods,        which grows at an
arbitrarily   slow rate with sample size. The differences between simulation designs
appear only in the limiting normal distributions            of the estimators. It is especially
important     to note that consistency does not confine such differences to sampling
variances. Both the expectations         and the variances of the approximate            limiting
distribution    can be affected by the simulation design.
   Note that Proposition       3 does not apply to models with elements of y which are
continuously      distributed  and unbounded.      Additional work is needed in this area.
See Hajivassiliou       and McFadden     (1990) for the special conditions        needed for an
example of a multiperiod (panel) autocorrelated            tobit model.
   From the standpoint         of asymptotic    distribution      theory, the simplest use of
simulation makes independent         simulations for the contribution       of each observation
to the likelihood function. If elements of the sequence (w,,} are independent              across
the observation       index n, as well as the replication       index I, then we preserve the
independence      of the f(@ y,, o,,) and its derivatives across n, permitting the applica-
tion of familiar laws of large numbers and central limit theorems. When f” is
2418                                                                      V.A. Hajimssiliou   and P.A. Ruud



differentiable       in 0, we can make a familiar    linear approximation             for t&s,:


       0=   1 V,l&)) + ; v,zqe,
                             JN(&,, - e,),                                                             (30)
            JN                [            1

where the elements of 81ie on the line segment between &s, and 8,. The consistency
of &,,I_ implies the consistency of I? which in turn implies that


       ;v:l(s,J+NV,2In f(e,; Y)I = W4J,                                                                (31)


using the argument         that supports   Proposition    3. The leading term is a sum of N i.i.d.
terms




to which we would like to apply a central limit theorem. But we are prevented from
this by the fact that the expectation of these terms is not zero. Consider the simple
factorization,  obtained by adding and subtracting   terms,


       Lv&) =L V,1(&)) + A, + B,,                                                                      (32)
       fl                 x/N
where




A, is a sum of i.i.d. terms with zero expectation           and can be viewed as the source of
pure simulation noise in 8,,, . B, is the potential         source of simulation bias. The next
result can be used to show that R/J??             -+ co is a sufficient      rate of increase     to avoid
such bias.

Proposition      4

Let fi(13;y, o) be an unbiased simulator for ~(8;y) such that V(ji -ply) = O(R-‘).
Let ~(0; y, p) be a moment function such that E[s(B,; y, p)] = 0. Consider the simula-
Ch. 40: Classical   Estimation Methods fir LD V Models Using Simulation                             2419


tor F(O;y) = s(H; y, 8) and let R/fi             + GO.If s”is Lipschitz   in DES uniformly   in 8, then
the simulation bias




Proof

Ifs” is Lipschitz       in p uniformly     in 6 then

        s”- s = CV,s(B;y, p)l(ii     - p) + CV,s(&Y, P*) - V,s(@Y, P)l(F - PL),

where p* is on the line segment              joining    D and p. According      to the hypothesis     of
unbiasedness,


                                y, P*) - V,s(RY, dl (P - P)>
        E,(s” - s) = E, { CV,s(B;

so that


        II&,,(s”-s)ll <M*@-/L)~=O(R-‘)

for some       finite     M*   according      to the     Lipschitz    hypothesis.   Therefore,    B, =
O,(@/R)         and the result follows.                                                          Q.E.D.

   In the multinomial    and rank ordered probit cases, the Lipschitz requirement      is
generally met by the regularity conditions that bound the discrete probabilities    and
the smoothness of the probability    simulator f”: p = (f, V,f), k = (7, VJ), and s =
(V&/f.      We are not aware of any slower rates for R that avoid bias in the limiting
distribution   of &,,.


Proposition     5

Let f be-bounded uniformly away from zero and Lipschitz in 0 on a compact space
0. Let f(@ y,o) be an unbiased differentiable simulator for f(0; y), also bounded
uniformly away from zero and Lipschitz in 8 on 0 such that V(f - f) = O(R-‘).
Let RI&?       + 00. Then the simulation             components


        A+“.$$l                   (V,lnf”(e;y,,o,)-V,lnf(e;y,)}
                                                             LO


and &,,, is asymptotically          efficient.
2420                                                                         V.A. Hujioassiliou   and P.A. Ruud



Proof

The difference          between      simulated     and exact scores can be written




By the Chebychev               inequality,


       Pr    1         1 [VJ      - jToz lnfI >E             6--
                                                              ,>F     VCV,,7-.7V,,ln
                                                                                 fl=O(JNIR)
            iIJNn                                  I     I

for each component              of the gradient.       The result follows from this order and equations
(30)-(33).                                                                                       Q.E.D.

   Propositions   4 and 5 demonstrate       that bias is the fundamental     hurdle that MSL
must overcome. The logarithmic          transformation     of the likelihood function forces
one to increase R with the sample size to obtain a consistent estimator. Given
enough simulations      to overcome bias, there are enough simulations             to make the
asymptotic contribution     of simulation to the limiting distribution      of &,s, negligible.
   There is a simulation design that uses the same total number (N x R)of simulations
of w as the independent    design, but applies every simulation of o to every observa-
tion of y. That is, the simulated log-likelihood        function is generated according to
the double sum


        $0) = 5          y     In y(0;y,, w,).
                 n=l    m=l



The motivation for this approach is to take advantage of all N x R simulations that
must be drawn when R independent          simulations     are made for each observation.
Lee (1992) finds that efficiency requires only that R + coas N + co with this design.
This approach appears to gain efficiency without any additional             computational
cost. However, one simulates each contribution       to the likelihood N x R times rather
than merely R times, substantially      increasing the cost of evaluating      the average
simulated log-likelihood     function. The computational        savings gained by pooling
simulations in this manner are generally overcome by the added computational            cost
of calculating O(N’) likelihoods instead of O(N3”), especially when N is large.
   We close our discussion of simulated likelihood functions by noting that the
method of simulated pseudo-maximum          likelihood (SPML) of Laroque and Salanie
(1989) is another early simulation      estimation     approach     for LDV models. This
method, originally developed for the mixture models of Section 2.4 in the case
of the analysis of markets in disequilibrium,     uses simulation to overcome the high-
dimensional    integration difficulties that arise in calculating  the moments of such
models.

Definition 6.      Simulated pseudo-maximum            likelihood

Let the observation       rule I     = y yield a mixture model with the first two moments
g1 (x,, 0) = E(Y Ix,,, 0) and g2(xn, (3 = Q(Y - EY)’ Ixnr 0). C onsider simulating functions
gj(x,,, 0, w, R),j = 1,2, based on auxiliary simulation sequences (CO],such that y”j(X,, 8,
co, R) converge     almost surely to _yj(x,, 6I) as R + co, j = 1,2. The simulated pseudo-
maximum likelihood estimator O,,,, is defined by:




where $(.I = ~C(Y, - s1(.))2/si(.)1
                                  + lns,(.)l corresponds                      to the log-likelihood
contribution     assuming     y, - N(g,(.),g,(.)).

   Laroque and Salanie (1989) prove t_hat for x,EXER, 8~0 compact, and gj(.)
sufficiently continuous on X x 0, then Q,,,, A fIpMLas R -+ ~0.~~ It should be noted
that for particular choices of a pseudo-likelihood function $(.), the SPML estimator
can be shown to be consistent for a finite number of simulations     R, because it then
satisfies the basic linearity property of the MSM approach. Such a choice could be
$(.) = (y, - gI(.))2, which corresponds to the assumption   that y, - N(g,(.), 1).



4.3.   Simulation     of moment functions

The simulation of the log-likelihood      is an appealing approach to applying simula-
tion to estimation, but this approach must overcome the inherent simulation          bias
that forces one to increase R with the sample size. Instead of simulating             the
log-likelihood   function, one can simulate moment functions. When they are linear
in the simulations,     moment functions can be simulated easily without bias. The
direct consequence      is that the simulation   bias in the limiting distribution of an
estimator is also zero, making the need to increase the number of simulations         per
observation    with sample size unnecessary.      This was a key insight of McFadden
(1989) and Pakes and Pollard (1989).



   ‘l Pseudo-maximum  likelihood estimation methods, which are special types of the classical minimum
distance (CMD) approach,    are developed in Gourieroux et al. (1984a) and Gourieroux      et al. (1984b).
See Newey and McFadden (1994) for a discussion of CMD and the closely related pweralized method
cfmommts     (GMM).
2422                                                                 V.A. Hujivassiliou   and P.A. Ruud


   Method of moments (MOM) estimators have a simple structure. Such estimators
are generally constructed   from “residuals” that are differences between observed
random variables y and their conditional       expectations. These expectations   are
known functions of the conditioning   variables x and the unknown parameter vector
0 to be estimated. Let E(ylx, 0) = ~(0; x). Moment equations are built up by multi-
plying the residuals by various weights or instrumental       variable functions and
specifying the estimator as the parameter values which equate the sample average
of these products with zero. The MOM estimator &o, is defined by


           ;   .$,W”(X,&oMKYn
                           - l4i4oh.G
                                  x,)1 = 0.                                                        (35)


The consistency of such estimators rests on the uniform convergence of the sample
averages to their population     counterparts  for any value of 8 as the sample size
approaches infinity. When the unique root of the population       equations is fI,, the
population value of 0, the root of the sample equations, converges to 8,. The limiting
distribution  of &,,, is derived from the linear expansion




where we have denoted the residual by e,(e) = y, - E(y, (x,, 0) and t? lies between
&Oh4    and Be. Because E[e,(&,)] = 0, the leading term will generally converge to a
limiting normal random variable with zero expectation,      implying no asymptotic
bias in &,,:




where




One of the matrices        in the second term converges   to zero:


       i       $ e,(t?)V,w,(H)-%O.
               n   1



This fact is often exploited by replacing the weights w in (35) with consistent
estimates that do not change the limiting distribution of &,,,. Thus under regularity
                                                                                    2423



conditions,


      JNam4- b) %V(O,H-'ZH'-'),
where


      ;     2 w,(@V,e,@) LH.
          n 1

   Simulation   has an affinity with the MOM. Substituting       an unbiased, finite-
variance simulator for the conditional expectation p(& x,) does not alter the essential
convergence properties of these sample moment equations. We therefore consider
the class of estimators generated by the method      of
                                                     simulated moments (MSM).

Definition    7. Method    of simulated   moments

Let p(6); x, o) = l/RCF= ,,G(0; x, w,) be an unbiased simulator so that ,u(e; x) =
E[p(e; x, 0)1x] where w is a simulated random variable. The method of simulated
moments estimator is

      &s,     3 arg min I(F,(O) (1,


where


                                                                                     (36)


for some sequence       {on}.

   Defining the MSM estimator as a minimizer rather than the root of the simulated
moments equation s(0) = 0 is an important       part of making the MSM operational.
Newey and McFadden         (1994), Sections 1 and 2.2.3, discuss the general difficulties
that MOM poses for the construction of consistent estimators. Whereas the structure
of ML provides a direct link between parameter identification     and estimator consis-
tency, MOM does not. It is often difficult to guarantee that a system of nonlinear
equations has a unique solution. MSM inherits these difficulties. Also, the addition
of simulation    in MSM may introduce        problems that were not present in the
original MOM formulation.        For example, simulated moment equations may not
exhibit solutions at all in small samples, leading one to question the reliability of
asymptotic approximations.      This property may be the greatest practical drawback
of this method of estimation using simulations,      although it does not greatly affect
the asymptotic distribution    theory extended from the MOM case.
2424                                                                                 V.A. fiujioassiliou   and P.A. Ruud


                                                      Table 6
                         Sample statistics    for rank ordered   probit   CMD (J = 4).

                 Population                        Standard           Lower                                    Upper
Parameter           value           Mean           deviation         quartile                Median           quartile

1’1              -0.6661          ~ 0.6906           0.1481          - 0.1192               -0.6918          -0.5948
(‘2              -0.6667          -0.7887            0.3714          -0.9496                -0.7109          -0.5431
Cl.?             - 0.6667         -0.6953            0.2223          - 0.8347               -0.6594          -0.5366
04               -0.5000          ~ 0.6683           0.4271          - 0.8962               -0.5688          -0.3679
0,                  1.3230           1.4143          0.4384             1.1 18                 1.337            1.633
0,                  0.0000           0.1764          0.5053          -0.1957                   0.08331          0.5563
0,               -0.3780          -0.3077            0.2765          -0.4703                - 0.3207         -0.1747
0,                  0.9258           0.7714          0.3356             0.5955                 0.7980           0.9834




Example     12

To construct an MSM estimator for the rank ordered probit model, we construct
a set of moment equations corresponding to the elements of y:


       j, Yijn
        .________-Pr{yij=      l;p,8}        =O,       i,j = 1,...,J-           1.
           N

 Not all J2 elements of y are needed because these elements have a singular distribu-
 tion. As the sampling space of y makes clear, we can focus our attention on the first
 J - 1 rows and columns of y.
     Because we obtain more moment equations than parameters,                 we combine the
 moments of y according to the method of classical minimum distance (CMD) using
 the inverse of the sample covariance of the elements of y as the normalizing          matrix.
 Note, however, that one could use more moments to increase the efficiency of the
 estimator. For example, the cross-products          yijykl (i # k, j # 1) contain additional
 sample information     about the population     parameters.
    The CMD estimation        results are described in Table 6 for J = 4 ranked alter-
 natives. This classical estimator is much less efficient than the MLE. In addition, it
exhibits large bias and skewness in the sampling distribution.
    The summary statistics for the MSM version of the CMD estimator are listed in
Table 7. There was R = 1 simulation         of the GHK probability         simulator for each
observation    and each probability.    As expected, the sampling variance is larger for
the MSM estimator than for the CMD estimator. In addition, the bias and skewness
in the CMD estimator for the mean parameters                seem to be aggravated      by the
simulation in the MSM estimator.
    We do not present analogous       results for J = 6 alternatives       because the MSM
estimator is not practical in this case. With 720 elements in the sampling space, the
Ch. 40: Classical Estimation Methods for LDV Models Using Simulation                                     2425


                                                      Table I
               Sample statistics   for rank ordered   probit CMD, MSM version, (J = 4, R = 1).

                     Population                       Standard      Lower                          Upper
 Parameter              value         Mean            deviation    quartile      Median           quartile

                      - 0.6667       -0.6916           0.1905      -0.7915      - 0.6809          -0.5798
                      - 0.6667       -0.9790           0.9576      - 1.099      -0.7619          -0.5654
                      - 0.6667       -0.8561           0.6394      -1.008       - 0.6900         -0.4813
                      -0.5000        - 0.7083          0.6392      -0.8918      -0.5559          -0.3327
                         1.3230         1.4733         0.8402        1.086          1.323           1.662
                         O.OC@O         0.0780         0.6268      -0.3091         0.03749          0.4616
                      -0.3780        -0.3828           0.5423      -0.5758      -0.3099          -0.1110
                         0.9258         0.8560         0.6857         0.5023       0.7341           0.9745



amount of simulation becomes prohibitive. This illustrates another important draw-
back in this method: the MSM works best for sample spaces with a small number
of elements.

The analogies between MSM and MOM are direct and, as a result, the asymptotic
analysis is generally simpler than for MSL. The first difference with MSL appears
in the requirements on the simulation design for estimator consistency. Whereas
MSL requires that R + og regardless of whether simulations are independent across
observations, MSM yields consistent estimators with fixed R provided that the
simulations vary enough to make a law of large numbers work. Because the
simulated moments are linear in the simulations, one has the option of applying the
law of large numbers to large numbers of observations alone, or in combination
with large numbers of simulations.

Proposition      6

Let k(f9;x, o) be an unbiased, finite-variance simulator for ~(0; x) and let either

   (1) l%i n=l , . . . , N, r = 1,. . . , R} be i.i.d. random variables for fixed R, or
   (2) (q;r=         1,. . . , N} be an i.i.d. sequence for R = N and let o,, = w,, n = 1,. , . , N.
Then 4lMSh.l
         L O0under the regularity conditions

   (1) s,(O) E (l/N)C,N, 1 w,(B)[y, - ~(8; x,)] is continuous in 0,
   (2) s&9 J+ ~(0) = plim(fIN)C,N= 1 w,(@Cp(Oo; xn) - p(fl; xJ] uniformly in 8~ 0,
       a compact parameter space,
   (3) s,(O) is continuous in 8 and s,(8) equals zero only at 8,.

Proof

The average difference between the classical moment functions and their simulated
counterparts is
2426                                                       V.A. Hajiaassiliou   and P.A. Ruud



                                                                                         (37)



                                                                                         (38)


where s,(B) 3 (l/N)C,N, r w,(B)[y, - ~(0; x,)]. Under design 1, the (,& - p,,} are
an i.n.i.d. sequence so that a uniform law of large numbers           applied to (37)
implies s,(e) - F,,J0) -% 0 as N + co. Under design 2, s,(8) - .FN(0)is written in (38)
as a U-statistic and a uniform law of large numbers for U-statistics       (Lee (1992))
implies s,(8) - sN(0) LO       as N + co. Therefore, in either case, by continuity,
 I(~~(0) - sN(0) 1)-% 0 uniformly in 6’ and Lemma 1 implies the result.         Q.E.D.

   The opportunity      to fix R for all sample sizes offers significant computational
savings that are a key motivation      for interest in the MSM. As we shall see below,
the benefits of the dependent design are generally modest. Thus, while the theoretical
applicability  of U-statistics to MSM is interesting in itself, we will not consider it
further in this section.”    We continue with the analogy between the MOM and the
MSM. Note first of all that an analogous linear expansion for &sM exists:


   0=   L f w”(e,)qe,) + [ f $ w,(w$qB) + a,(e,v,w,(iqI Jiq&,, - e,),
        $v.=l                      n   1



where we have denoted the simulated residual by &n(0)= y,, - D(e; x,) and I? lies
between 8 MSM  and do. Because E[&,(6J,)] = 0, the leading term will generally converge
to a limiting normal random variable with zero expectation, implying no asymptotic
bias in &s,:




where


       hf, w,(b)wc(e,) 1x,iw,(e,)~ 11,z,,,.
Also, as before,




 2ZSee Lee (1992).
Ch. 40: Classical      Estimation Mrthodsfor       LDV Models Using Simulation                         2427


so that under regularity             conditions,

           - 0,) -% N(0, H - ’ &,,H’-
      JNCe,SM                                                 ‘),

where




The equivalence     of the H matrices also rests on the unbiased simulation          of p. If
~(0;x) = E[p(&x,o)[x],      then V&&x) = V,E[fi(tI; x,w)IxJ =E[V,ji(tI;x,o)(x]            for
the smooth simulators described in Section 3.
   While the first moment of the MSM estimator does not depend on R, the limiting
covariance matrix, and hence relative efficiency, does. Simulation noise introduces
a generic difference between the covariance matrices of I!?~,,, and &s,. Intuition
suggests, and theory confirms, that the larger R is, the more efficient the MSM
estimator will be as the simulation noise is diminished. The extra variation in &,sM
is contained in the object (37). This term is generated conditional     on the realizations
ofy and is, by definition, distributed independently   of the classical moment function.
Inflating the simulation noise by fi    and evaluating                   it at 0,,, we can apply a central
limit theorem to it to obtain the following result.

Proposition        7

‘x MSM --   ZMOM       +   (l/R)Z,   where




If it were not for the simulation noise, the MSM estimator would be as efficient as
its MOM counterpart.      McFadden (1989) noted that in the special case where fi is
obtained by averaging simulations of the data generating process itself, Z, = Z,,,
and ZMsM= (1 + l/R)ZMoM. In this case, the inefficiency of simulation        is easy to
measure and one observes that 10 replications are sufficient to reduce the inefficiency
to 10% compared to classical MOM.
   The proposition    suggests that full efficiency would be obtained if we simply
increased R without bound as N grows. That intuition is formalized in the next
proposition,   which is analogous     to Proposition  5 (see McFadden      and Ruud
(1992)).

Proposition    8

If R = O(N”), LX>0, then @(e^,o,                     - e^,,,) -% 0.
2428                                                                      V.A. Hajiuassiliou   and P.A. Ruud


   For any given residual and instrumental       variables, there generally exist optimal
weights among MOM estimators, and the same holds for MSM as well. In what is
essentially an asymptotic counterpart      to the GaussMarkov       theorem, if H = ZMSM
then the MSM estimator is optimal (Hansen (1982)). To construct an MSM estimator
that satisfies this restriction, one normalizes the simulated residual by its variance
and makes the instrumental        variables the partial derivatives    of the conditional
expectation of the simulated moment with respect to the unknown parameters:




One can approximate       these functions using simulations    that are independent    of the
moment simulations        with R fixed, but efficiency will require increasing       R with
sample size. If /? is differentiable in t3, then independent    simulations  of the V,,ii are
unbiased simulators of the instruments.         Otherwise, discrete numerical derivatives
can be employed. The covariance matrix can be estimated using the sample variance
of p and the simulated variance of y. Inefficiency in simulated instruments constructed
in this way has two sources: the simulation noise and the bias in the inverse of an
estimated variance. Both sources disappear asymptotically          if R approaches infinity
with N. While it is critical that the simulations      of w be independent    of the simula-
tions of b, there is no obvious advantage to simulating the individual components
of w independently.     In some cases, for example simulating a ratio, it appears that
independent    simulation may be inferior.23



4.4.   Simulation     of the score function

Interest in the efficiency of estimators naturally leads to attempts to construct an
efficient MSM estimator. The obvious way to do this is to simulate the score
function as a set of simulated moment equations.          Within the LDV framework,
however, unbiased simulation of the score with a finite number of operations is not
possible with simple censored simulators. The efficient weights are nonlinear func-
tions of the objects that require simulation.    Nevertheless, it may be possible with
the aid of simulation to construct good approximations        that offer improvements   in
efficiency over simpler MSM estimators.
   There is an alternative approach based on truncated simulation.          We showed in
Section 2 that every score function can be expressed as the expectation of the score
of a latent data generating process taken conditional      on the observed data. In the
particular case of normal LDV models, this conditional          expectation is taken over
a truncated multivariate   normal distribution   and the latent score is the score of an
untruncated   multivariate  normal distribution.  Simulations from the truncated nor-


   23A Taylor series expansion suggests that positive correlation between the numerator   and denominator
of a ratio can yield a smaller variance than independent simulation.
Ch. 40: Classical   Estimation   Methods for LDV Models Using   Simulation                 2429


ma1 distribution   can replace the expectation operator to obtain unbiased simulators
of the score function.
   In order to include both the censored and truncated approaches         to simulating
the score function, we define the method of simulated scores as follows.24

Dejinition 8.       Method       of simulated scores

Let the log-likelihood    function for the unknown          parameter   vector (3 given the
sample of observations   (y,, n = 1,. . . , N) be I,(0) = C,“= 1In f(& y,). Let fi(Q; y,, w,) =
(l/R)Cr=,   ~(&y,,,lo,J  be an asymptotically          (in R) unbiased     simulator     of the
score function ~(0;y) = Vlnf(B; y) where o is a simulated random variable. The
method of simulated scores estimator          is &,s, E arg min,, J/ 5,(e) (1 where .YN(0)3
(l/N)Cr= ,b(@, y,, 0,) for some sequence {on}.

   Our definition includes all MSL estimators as MSS estimators,          because they
implicitly simulate the score with a bias that disappears asymptotically       with the
number of replications     R. But there are also MSS estimators without simulation
bias for fixed R. These estimators rely on simulation from the truncated conditional
distribution  of the latent y* given y. We turn to such estimators first.

4.4.1.    Truncated       simulation of the score

The truncated simulation methods described in Section 3.3 provide unbiased simu-
lators of the LDV score (17), which is composed of elements of the form (24). Such
simulation would be ideal, because R can be held fixed, thus leading to fast estima-
tion procedures. The problem is that these truncated simulation methods pose new
problems for the MSS estimators that use them.
   The first truncated simulation    scheme, discussed in Section 3.3.1 above, is the
A/R method. This provides simulations       that are discontinuous    in the parameters,
a property shared with the CMC. A/R simulation           delivers the first element in a
simulated sequence that falls into a region which depends on the parameters under
estimation. As a result, changes in the parameter values cause discrete changes in
which element in the sequence is accepted. An example of this phenomenon             is to
suppose that one is drawing a sequence of normal random variables {ql} IV N(0, I,)
in order to obtain truncated multivariate   normal random variables for rank ordered
probit estimation. Given the observation      y, one seeks a simulation     from D(y), as
defined in Example 8. Let the simulation        of y* be jjl(pl, r,) 3 ,~i + T1qr at the
parameter values (pi, r,). At neighboring     parameter values where two elements of
the vector j,(p, r) are equal, the A/R simulation is at the point of jumping from the
value j& r) to another point in the sequence {J,(p, r)}. See Hajivassiliou            and
McFadden      (1990) and McFadden      and Ruud (1992) for treatments      of the special


  24The term was coined by Hajivassiliou      and McFadden   (1990)
2430                                                                         V.A. Hajivassiliou     and P.A. Ruud


asymptotic      distribution    theory for such simulation      estimators.  Briefly described,
this distribution     theory requires a degree of smoothness in the estimator with respect
to the parameters that permits such discontinuities             but allows familiar linear ap-
proximations       in the limit. See Ruud (1991) for an illustrative application.
   The second truncated           simulation     scheme we discussed above was the Gibbs
resampling      simulation    method; see Section 3.3.2. This method is continuous              in
the parameters provided that one uses a continuous               univariate truncated normal
simulation      scheme. But this simulation           method also has a drawback:       Strictly
applied, each simulation           requires an infinite number of resampling        rounds. In
practice, Gibbs resampling            is truncated   and applied as an approximation.       The
limited Monte Carlo evidence that we have seen suggests that such approximation
is reliable.
   Simulation of the efficient score fits naturally with the EM algorithm for computing
the MLE derived by Dempster et al. (1977). The EM algorithm includes a step in
which one computes an expectation with respect to the truncated distribution               of y*
conditional      on y. Ruud (1991) suggested that a simulated EM (SEM) algorithm
could be based on simulation               of the required expectation.25   This substitution
provides a computational            algorithm for solving the simulated score of MSS esti-
mators.

Dejinition 9.      EM algorithm

The EM algorithm is an iterative process for computing    the MLE of a censored
data model. On the ith iteration, the EM algorithm solves

       0 i+ ’ = arg max Q(0, 0';y),                                                                             (39)

where the function        Q is

       Q(O1,OO;~)~E,oClnf(O1;~*)l~l,                                                                            (40)

where EOo[. Iy] indicates        an expectation       measured      with respect to ~(0”; y* 1y).

  If Q is continuous in both 0 arguments, then (39) is a contraction mapping                                    that
converges to a root of the normal equations; as Ruud (1991) points out,

       0 = 0’ = 0’ *V,,       Q(O’, 0’; y) = VBIn F(0; y),                                                      (41)

so that the first-order conditions for an iteration of (39) and the normal equations
for ML are intimately related.
   Unlike the log-likelihood   function, this Q can be simulated without bias for LDV
models because the latent likelihood f(0; y*) is tractable and Q is linear in In f(0; y*)

   25van Pragg et al. (1989) and van Praag et al. (1991) also investigated    this approach       and applied   it in
a study of the Dutch labor market.
Ch. 40: Classical    Estimution Methodsfor          LDV Models Using Simulation                                          2431


(see equation (40)). According to (41). unbiased simulation of Q implies a means for
unbiased    simulation  of the score. Although it is not guaranteed,        an unbiased
simulator of Q usually yields a contraction    mapping to a stationary point.
   For LDV models based on a latent multivariate       normal distribution,    the itera-
tion in (39) is quite simple to compute, given Q or a simulation     of Q. Iff(e;y*) =
4(y*   -    P; W,    then



                                           and       IR’ = k $            &o[(y:        - P’)(Y,* - P’),\Y~],            (42)
                                                                  n   1



which are analogous     to the equations  for the MLE using the latent data. This
algorithm is often quite slow, however, in a neighborhood     of the stationary point
of (39). Any normalizations    necessary for identification of 0 can be imposed at
convergence. See Ruud (1991) for a discussion of these points.

Example 13.           SEM estimation

In this example, we apply the SEM procedure to the rank ordered probit model
of our previous examples. We simulated an (approximately)            unbiased 0 of Q by
drawing simulations of y: from its truncated normal distribution        conditional  on y,
using the Gibbs resampling method truncated to 10 rounds. The support of this
truncated distribution    is specified as D(y) in Example 8. The simulated estimators
were computed according to (42), after replacing the expectations with the averages
of independent   simulations.
   The usual Monte Carlo results for 500 experiments with J = 6 ranked alternatives
are reported in Table 8 for data sets containing    100 observations   and R = 5 simula-
tions per observation.    These statistics are comparable    to those in Table 5 for the
MSL estimator of the same model with the same number of simulation replications.
The biases for the true parameter values appear to be appreciably           smaller in the
SEM estimator, while the sampling variances are larger. We cannot judge either
estimator as an approximation         to the MLE, because the latter is prohibitively
difficult to compute.



                                                          Table 8
            Sample statistics    for rank ordered    probit SEM using Gibbs simulation            (J = 6, R = 5).

                    Population                          Standard              Lower                            Upper
Parameter              value            Mean            deviation            quartile          Median         quartile

01                   - 0.4000          - 0.3827          0.1558              - 0.4907          - 0.3848       -0.2757
0,                   -0.4000           -0.4570           0.3271              -0.5992           -0.4089        -0.2455
0,                   - 0.4ooo          -0.4237           0.2262              -0.5351           -0.3756        - 0.2766
0,                   - 0.4000          - 0.4268          0.2710              -0.5319           -0.3891        -0.2580
0,                   - 0.4000          -0.4300           0.2622              -0.5535           - 0.3794       -0.2521
2432                                                                           V.A. Hajivassiliou   and P.A. Ruud


   Although truncated      simulation    is generally more costly, the SEM estimator
remains a promising      general approach       to combining simulation   with relatively
efficient estimation. It is the only method that combines unbiased simulation of the
score with optimization     of an objective function and the latter property appears to
offer substantial   computational     advantages.

4.4.2.     Censored simulation of ratios

The censored simulation methods in Section 3.2 can also be applied to approxima-
ting the efficient score. These simulation methods tend to be much faster computa-
tionally than the truncated simulation methods, but censored simulations introduce
simulation bias in much the same way as in the MSL. Censored simulation can be
applied to discrete LDV models by noting that the score function of an LDV model
with observation    rule y = z(y*) can generally be written in the ratio form:



         VtJf(0;Y)      s(Y'IHY')'Yl
                                        V, dF(e;Y*)

         .0&Y) = ____
                        s         =Y)
                           (Y*lr(Y*)
                     = W,WRY*)I$Y*)
                                          WA Y*)

                                                  = Y)
                             %y*lT(y*) = Y>            ’
where F(0; y* 1y) is the conditional  c.d.f. of y given r(y*) = y. See Section 2.6 for
more details. Van Praag and Hop (1987), McFadden (1989) and Hajivassiliou            and
McFadden     (1990) note that this form of the score function offers the potential of
estimation by simulation. 26 An MSS estimator can be constructed          by simulating
separately the numerator and denominator        of the score expressions:

                 1 N @;y,,q,)
       s,(e)=-     1                                                                                         (43)
                 N   n = I P(e;   Y,,, ~2n)’



where 2(&y,, win) = (l/R,)CF:    1&e; y ,,,winr) is an unbiased simulator of the deri-
vative function V,f(0, y) and p(0; y,, oz.) = (l/R,)CFZ 1d(& y,, mznr) is an unbiased
function of the probability expression f(0; y,). Hajivassiliou   and McFadden (1990)
prove that when the approximation      of the scores in ratio form is carried out using
the GHK simulator, the resulting MSS estimator is consistent and asymptotically
normal when N -+ 00 and R,/,,h-t         co. The number of simulations  for the nume-
rator expression, R,, affects the efficiency of the resulting MSS estimator. Because
the unbiased simulator p(&y, 02) of f(e; y) does not yield an unbiased simulator of


  26See Hajivassiliou    (1993~) for a survey of the development   of simulation   estimarion   methods   for LDV
models.
Ch. 40: Classical Estimation Methodsfor       LDV Models Using Simulation              2433


the reciprocal l/f(& y) in the simulator l/p(0; y, w,), R2 must increase with sample
size to obtain a consistent estimator. This is analogous to simulation   in MSL. In
fact, this simulation scheme is equivalent to MSL when ur = o2 and d’= V,p.
   McFadden and Ruud (1992) note that MSM techniques can also be used generally
to remove the simulation    bias in such MSS estimators. In discrete LDV models,
where y has a sampling space B that is countable and finite, we can always write y
as a vector of dummy variables for each of the possible outcomes so that

         E,(y,) = Pr{yi = 1; 6} = f(Q; Y)         if   Yi = 1, Yj = 0, j # i.


Thus,

         E       v,f(e;Y)        =o=   1 f@; Y).- VfLf(~;
                                                     --~
                                                          Y)
             8
             [    f@Y)       1         YEB         f (0; Y)

and the score can be written




                                                                                       (44)


Provided that the “residual” l{y = Y} - f(0; Y) and the “instrumental           variables”
V,f(e; Y)/f(0; Y) are simulated independently,     equation (44) provides a moment
function for the MSM. In this form, the instrumental   variables ratio can be simulated
with bias as in (43) because the residual term is independently         distributed     and
possesses a marginal expectation equal to zero at the population       parameter value.
For example, we can alter (43) to

                                                                &@Y,%“)
         ue)=X$1 YEB
                 c       ”
                                   CRY,=   ~1-iw; Y,O,A-,
                                                                iv; y,%“I
                                                                                       (45)


where wr and o2 are independent      pseudo-random      variables. While such bias does
not introduce    inconsistency  into the MSM estimator, the simulation        bias does
introduce inefficiency because the moment function is not an unbiased simulator of
the score function. This general approach       underlies the estimation    method for
multinomial   probit originally proposed by McFadden (1989).

4.4.3.       MSM       versus MSS

MSM and MSS are natural competitors in estimation with simulation because each
has a comparative advantage. MSM uses censored simulations     that are cheap to
2434                                                                V.A. Hajivassiliou   and P.A. Ruud


compute, but it cannot simulate the score without bias within a finite number of
calculations.   MSS uses truncated simulations    that are expensive to compute (and
introduce jumps in the objective function with A/R simulations),      but simulates the
score (virtually) without bias. McFadden      and Ruud (1992) make a general com-
parison of the asymptotic covariance matrices that suggests when one method is
preferable to the other.
   Consider the special MSS case in which the simulations        P*(e; Y,w) are drawn
from the latent conditional   distribution and the exact latent score V,l* is available
so that

       &(O)=      R,’    2 V,I*[8; ?*(Q; Y,w)].
                        r=l


Then Z,, the contribution       of simulation   to the covariance      matrix     of the estimator,
has a useful interpretation:




where Z, = E,{V,I*(@; Y*)[VBI*(O; Y*)]‘} is th e information           matrix of the latent
log-likelihood.  The simulation noise is proportional       to the information  loss due to
partial observability.
   In the simplest applications    of censored simulation to the MSM, the simulations
are independent     of sample outcomes and their contribution      to the moment function
is additively separable from the contribution    of the data. Thus we can write &,(0) =
g(& Y,o&g(O;      wi,~J(see(45)). In that case, &simplifies          to V{,/%[~“(~,;O,,O,)]}.
In general, the simulation process makes R independent              replications of the simula-
tions {ml; r = 1,. , R}, so that




and & = R- ’ V,&j(d,; ml, oJ]. In an important special case of censored simulation,
the simulation  process makes R independent             replications of the modeled data
generating process, { F(L);w,,); r = 1,. . . , R}, so that


       ae;al, 4     = R; 1      de; t(e; ml,), w2]

and Z, = R ’ V[g(B,; Y, co’)] = Z,/R. Then the MSM covariance matrix equals (1 +
l/R) times the classical MOM covariance matrix without simulation G-‘Z,(G’))‘.
Now let us specialize to simulation   of the score. For simplicity, suppose that the
simulated moment functions are unbiased simulations of the score: E[S,,,(B)I Y] =
V,1(8; Y). Of course in most cases, the MSM estimator will have a simulation     bias
Ch. 40: Classical   Estimation Methods for LDV Models Using Simulation                                            2435


for the score. The asymptotic            variance      of the MSM estimator              is

       Z,    = lim,,,    I/(&,(0,)       - V,1(8,; Y)]
             = lim,,    m ~chmlw4J)l
                                   + &l
             = z, + E,,
where 22, = Z’,/R and Z, holds additional variation attributable    to the simulation
of the score. If the MSS and MSM estimators use the same number of simulation
replications, we can make a simple comparison   of the relative efficiency of the two
methods. The difference between the asymptotic covariance matrices is

       R-‘Z,‘[&         + (R + l)Z,       - (Z, - &)]Z,‘.

This expression gives guidance about the conditions under which censored simula-
tion is likely to dominate truncated. It is already obvious that if Z, is high, so that
censored simulation     is inefficient due to a poor approximation      of the score, then
truncated simulation is likely to dominate. On the other hand, if Z:, is low, because
partial observability causes a large loss in information, then estimation with censored
simulation is likely to dominate truncated.
   Thus, we might expect that the censored simulation        method will dominate the
truncated     one for the multinomial     probit model, particularly     if Z, = 0. That,
however, is a special case in which a more efficient truncated simulation estimator
can be constructed    from the censored simulation estimator. Because E[E(Q)I Y] =
VfJ(R Y),

       ma y,02) - m 01, w2)l = VfJ(RVI
            -E[g(e;ol,o,)]       = E{g[e;      ~(e;o),d]} =o t/e.
The bias correction is obviously unnecessary and only increases the variance of the
MSM estimator. But an MSM estimator based on g(& Y, o) is a truncated simulation
MSM estimator; only simulation      for the particular  Y observed is required. We
conclude that the censored method can outperform the truncated method only by
choosing E,[e(B)] # V,1(8; Y) in such a way that the loss in efficiency in Z, is offset
by low Zc, and low Z,.27



4.5.    Bias corrections

In this section, we interpret estimation with simulation as a general method for re-
moving bias from approximate      parametric moment functions, following McFadden

  “The actual difference in asymptotic    covariance    matrices   is more complicated        than the formula   above
however, because G # EM # &.
2436                                                               V.A. Hajicawiliou    and P.A. Ruud


and Ruud (1992). The approximation            of the efficient score is the leading problem in
estimation with simulation. In a comparison of the MSM and MSS approximations,
we have just described a simple trade-off. On the one hand, the simulated term in
the residual of (45) that replaces the expectation in (44) is clearly redundant              when
the instrumental    variables are V,f(Q; Y)/f(& Y). The expectation              of the simulated
terms multiplied by the instruments          is identically zero for all parameter values so
that the simulation merely adds noise to the score and the resulting estimator. On
the other hand, the simulated residual is clearly necessary when the instruments                are
not ideal. Without the simulation, the moment equation is invalid and the resultant
estimators are inconsistent.
   This trade-off motivates a general structure of simulated moments estimators.
We can interpret the extra simulation           term as a bias correction to an approxima-
tion of the score. For example, one can view the substitution               of non-ideal weights
into the original score function as an approximation               to the score, chosen for its
computational     feasibility. Because the approximation            introduces   bias, the bias is
removed by simulating         the (generally) unknown         expectation    of the approximate
score. Suppose the moment restrictions have a general form


         Hs(&; y, Xl Ix 1 = 0.

When the moment function s is computationally          burdensome,    an approximation
g(fl; y, X, o) becomes a feasible alternative. The additional    argument o represents
an ancillary statistic containing the “coefficients” of the approximation.    In general,
such approximation      will introduce   inefficiency and bias into MOM estimators
constructed from g. Simulation of g over the distribution     of y produces an approxi-
mate bias correction Q(8; X, w’, o), where o’ represents the simulated component.
Thus, we consider estimators 6 that satisfy

         g(& y, x, w) -    lj(8;x, co’,w) = 0.                                                     (47)

MSM estimators            have this general form; and feasible MSS estimators          generally   do,
too.


4.5.1.     A score test for estimator bias


The appeal of simulation estimators without bias correction is substantial. Although
the simulation   of moments or scores overcomes a substantial   computational    diffi-
culty in the estimation  of LDV models, there may remain practical difficulties in
solving the simulated moment functions for the estimators.      Whereas maximum
likelihood possesses a powerful relationship  between the normal equations and the
likelihood function, moment equations generally do not satisfy such “integrability”
conditions. As a result, there is not even a guarantee that a root of the estimating
Ch. 40: Classicul Esfimation   Methodsfor   LDV Models Using Simulution                  2437


equations   exists. Bias correction can introduce a significant amount of simulation
noise to estimators.      For these reasons, the approximation         of the log-likelihood
function itself through simulation still offers an important opportunity          to construct
feasible and relatively efficient estimators.
   MSS, and particularly      MSL, estimators can be used without bias correction if
the bias is negligible relative to the sampling error of the estimator and the magni-
tude of the true parameter. A simple score test for significant bias can be developed
and implemented       easily.
   Conditional     on the MSS estimator, the expectation of the simulated bias in the
approximate     score should be zero. The conditional     distribution     of the elements of
the bias correction are i.n.i.d. random variables to which a central limit theorem
can be applied. In addition, the White-Eicker       estimator of the covariance matrix
of the bias elements is consistent so that the usual Wald statistic, measuring the
statistical significance of the bias term, can be computed (see Engle (1984)). As an
alternative to testing the significance of this statistic, the bias correction term can
be used to compute a local approximate         confidence region for the biases in the
moment function or the estimated parameters. This has the advantage of providing
a way to assess whether the biases are important for the purposes of inference.



5.   Conclusion

In this chapter, we have described the use of simulation methods to overcome the
difficulties in computing    the likelihood and moment functions of LDV models.
These functions contain multivariate      ‘integrals that cannot be easily approximated
by series expansions. However, unbiased simulators of these integrals can be com-
puted easily.
   We began by reviewing the ways in which LDV models arise, describing the
differences and similarities in censored and truncated data generating            processes.
Censoring and truncation      give rise to the troublesome    multivariate   integrals. Fol-
lowing the LDV models, we described various simulation methods for evaluating
such integrals. Naturally, censoring and truncation       play roles in simulation as well.
Finally, estimation    methods that rely on simulation        were described in the final
section of this chapter. We organized these methods into three broad groups: MSL,
MSM, and MSS. These are not mutually exclusive groups. But each group has a
different motivation:    MSL focuses on the log-likelihood        function, the MSM on
moment functions, and the MSS on the score function. The MSS is a combination
of ideas from MSL and MSM, treating the efficient score of the log-likelihood
function as a moment function.
   Software for implementing     these methods is not yet widely available. But as such
tools spread, and as improvements         in the simulators    themselves are developed,
simulation   methods will surely become a familiar tool in the applied econometri-
cian’s workshop.
2438                                                                            V.A. Hajiuassiliou and P.A. Ruud


6.     Acknowledgements

We would like to thank John Geweke and Daniel McFadden for very helpful com-
ments. John Wald provided expert research assistance. We are grateful to the
National  Science Foundation    for partial financial support, under grants SES-
929411913 (Hajivassiliou)  and SES-9122283 (Ruud).




Amemiya, T. (1984) “Tobit Models: A Survey”, Journal of Econometrics, 24, 3-61.
Avery, R., Hansen, L. and Hotz, V. (1983) “Multiperiod              Probit Models and Orthogonality         Condition
     Estiplation”, International Economic Review, 24, 21-35.
 Bauwens, L. (1984) Bayesian Full Information Analysis ofSimultaneous Equation Models using Integration
    by Monte Carlo. Berlin: Springer.
 Beggs, S., Cardell, S. and Hausman, J. (1981) “Assessing the Potential Demand for Electric Cars”, Journal
    of Econometrics, 17, l-20.
 Berkovec, J. and Stern, S. (1991) “Job Exit Behavior of Older Men”, Econometrica, 59, 189-210.
 Bloemen, H. and Kapteyn, A. (1991) The Joint Estimation of a Non-linear Labour Supply Function and
    a Wage Equation Using Simulated Response Probabilities. Tilburg University, mimeo.
 Bock, R.D. and Jones, L.V. (1968) The Measurement and Prediction of Judgement and Choice. San
     Francisco: Holden-Day.
Bolduc, D. (1992) “Generalized Autoregressive           Errors in the Multinomial   Probit Model”, Transportation
    Research B - Methodological, 26B(2), 155- 170.
 Bolduc, D. and Kaci, M. (1991) Multinomial Probit Models with Factor-Based Autoregressioe Errors: A
    Computationally EJ’icient Estimation Approach. Universite Lava], mimeo.
 Borsch-Supan,     A. and Hajivassiliou,     V. (1993) “Smooth Unbiased Multivariate        Probability    Simulators
    for Maximum Likelihood Estimation of Limited Dependent Variable Models”, Journal of Econometrics,
    58(3), 347-368.
Biirsch-Supan,     A., Hajivassiliou,    V., Kotlikoff, L. and Morris, J. (1992) Health, Children and Elderly
    Living Arrangements:      A Multi-Period       Multinomial    Probit Model with Unobserved         Heterogeneity
    and Autocorrelated     Errors pp. 79-108, in: D. Wise, ed., Topics in the Economics of Aging. Chicago:
    University of Chicago Press.
Chib, S. (1993) “Bayes Regression with Autoregressive           Errors: A Gibbs Sampling Approach”, Journal of
    Econometrics, 58(3), 275-294.
Clark, C. (1961) “The Greatest of a Finite Set of Random Variables”, Operations Research, 9, 145-162.
Daganzo, C. (1980) Multinomial Probit. New York: Academic Press.
Daganzo, C., Bouthelier,        F. and Sheffi, Y. (1977) “Multinomial         Probit and Qualitative       Choice: A
    Computationally     Efficient Algorithm”,      Transportation Science, 11,338-358.
Davis, P. and Rabinowitz, P. (1984) Methods of Numerical Integration. New York: Academic Press.
Dempster, A.P., Laird, N.M. and Rubin, D.B. (1977) “Maximum Likelihood from Incomplete Data via
    the EM Algorithm”, Journal of the Royal Statistical Society, Series B, 39, l-38.
Devroye, L. (1986) Non-Uniform Random Variate Generation. New York: Springer.
Dubin, J. and McFadden,            D. (1984) “An Econometric         Analysis of Residential    Electric Appliance
    Holdings and Consumption”,         Econometrica, 52(2), 345-362.
Duffie, D. and Singleton, K. (1993) “Simulated Moments Estimation of Markov Models of Asset Prices”,
    Econometrica, 61(4), 929-952.
Dutt, J. (1973) “A Representation       of Multivariate   Normal Probability Integrals by Integral Transforms”,
    Biometrika, 60, 637-645.
Dutt, J. (1976) “Numerical         Aspects of Multivariate      Normal Probabilities     in Econometric      Models”,
    Annals of Economic and Social Measurement, 5, 547-562.
Engle, R. (1984) Wald, Likelihood Ratio, and Lagrange Multiplier Tests in Econometrics,                 pp. 776-826,
   in: Z. Griliches and M. Intriligator,        eds., Handbook of Econometrics, Vol. 2. Amsterdam:            North-
   Holland.
Feller, W. (1971) An Introduction to Probability Theory and its Applications. New York: Wiley,
Fishman, G. (1973) Concepts and Methods of Digital Simulation. New York: Wiley.
Ch. 40: Classical Estimufion       Methodsfor     LD V Models Using Simulation                                       2439


Geman, S. and Geman, D. (1984) “Stochastic Relaxation, Gibbs Distributions                 and the Bayesian Restora-
   tion of Images”,IEEE Transactions on Pattern Analysis and Machine Intelligence, 6, 721~741.
&w&e,       J. (1989) “Bayesian Inference in Econometric          Models Using Monte Carlo Integration”,          Econo-
  metrica, 57, 1317-1340.
Geweke, J. (1992)Efficient Simulation from the Multivariate Normal and Student-t Distributions                   Subject
   to Linear Constraints.       Computing Science and Statistics: Proceedings qf the Twenty-Third           Symposium,
   571-578.
Goldfeld, S. and Quandt, R. (1975) “Estimation in a Disequilibrium             Model and the Value of Information”,
   Journal ofEconometrics,         3(3), 325-348.
Gourieroux,      C. and Monfort, A. (1990) Simulation Based Inference in Models with Heterogeneity. INSEE,
   mimeo.
Gourieroux,       C., Monfort, A., Renault, E. and Trognon,            A. (1984a) “Pseudo Maximum            Likelihood
   Methods: Theory”, Econometrica, 52, 681-700.
Gourieroux,       C., Monfort, A., Renault, E. and Trognon, A. (1984b) “Pseudo Maximum                       Likelihood
    Methods: Applications        to Poisson Models”, Econometrica, 52, 701-720.
Gronau, R. (1974) “The Effect of Children on the Housewife’s Value of Time”, Journal of Political
   Economy”, 81, 168-199.
Hajivassiliou, V. (1986) Serial Correlation in Limited Dependent Variable Models: Theoretical and Monte
   Carlo Results. Cowles Foundation           Discussion Paper No. 803.
Hajivassiliou,     V. (1992) The Method ofSimulated Scores: A Presentation and Comparative Evaluation.
  Cowles Foundation          Discussion Paper, Yale University.
Hajivassiliou,     V. (1993a) Estimation by Simulation of the External Debt Repayment Problems. Cowles
   Foundation       Discussion Paper, Yale University. Published in the Journal of Applied Econometrics,
   9(2) (1994) 109-132.
Hajivassiliou, V. (1993b) “Simulating Normal Rectangle Probabilities              and Their Derivatives: The effects
  of Vectorization”.      International Journal ofSupercomputer         Applications, 7(3), 231-253.
Hajivassiliou,     V. (1993~) Simulation       Estimation    Methods for Limited Dependent          Variable Models.
  pp. 519-543, in: G.S. Maddala, C.R. Rao and H.D. Vinod, eds., Handbook ofstatistics (Econometrics),
  Vol. 11. Amsterdam: North-Holland.
Hajivassiliou, V. and Ioannides, Y. (1991) Switching Regressions Models of the Euler Equation: Consump-
   tion Labor Supply and Liquidity Constraints. Cowles Foundation                 for Research in Economics, Yale
   University, mimeo.
Hajivassiliou,    V. and McFadden, D. (1990). The Method ofsimulated Scores, with Application to Models
  of External Debt Crises. Cowles Foundation              Discussion Paper No. 967.
Hajivassiliou,     V., McFadden,       D. and Ruud, P. (1992) “Simulation         of Multivariate    Normal Orthant
  Probabilities:     Methods and Programs”,         Journal of Econometrics, forthcoming.
Hammersley,       J. and Handscomb,        D. (1964) Monte Carlo Methods. London: Methuen.
Hanemann,        M. (1984) “Discrete/Continuous        Models of Consumer Demand”, Econometrica, 52(3), 541-
  562.
Hansen, L.P. (1982) “Large Sample Properties of Generalized Method of Moments Estimators” Econo-
  metrica, 50, 1029-1054.
Hausman,       J. and Wise, D. (1978) “A Conditional             Probit Model for Qualitative        Choice: Discrete
  Decisions       Recognizing      Interdependence       and Heterogeneous        Preferences”,    Econometrica,      46,
  403-426.
Hausman, J. and Wise, D. (1979) “Attrition Bias in Experimental                and Panel Data: The Gary Negative
  Income Maintenance           Experiment”, Econometrica, 47(2), 445-473.
Heckman, J. (1974) “Shadow Prices, Market Wages, and Labor Supply”, Econometrica, 42, 679-694.
Heckman, J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47, 153-161.
Heckman, J. (1981) Dynamic Discrete Models. pp. 179-195,_in C. Manski and D. McFadden,                               eds.,
  Structural Analysis ofDiscrete Data with Econometric Applications. Cambridge:                   MIT Press.
Hendry, D. (1984) Monte Carlo Experimentation                 in Econometrics,    pp. 937-976 in: Z. Griliches and
  M. Intriligator,     eds., Handbook ofEconometrics,         Vol. 2. Amsterdam: North-Holland.
Horowitz, J., Sparmonn,         J. and Daganzo, C. (1981) “An Investigation           of the Accuracy of the Clark
  Approximation        for the Multinomial      Probit Model”, Transportation Science, 16, 382-401.
Hotz, V.J. and Miller, R. (1989) Condirional Choice Probabilities and the Estimation of Dynamic Program-
  ming Models. GSIA Working Paper 88-89-10.
Hotz, V.J. and Sanders, S. (1991) The Estimation ofDynamic Discrete Choice Models by the Method of
  Simulated Moments. NORC, University of Chicago.
2440                                                                              V.A. Hujiuussiliou   and P.A. Ruud


Hotz, V.J., Miller, R., Sanders, S. and Smith, J. (1991) A Simulation Estimatorfin Dynamic Discrete Choice
  Models. NORC, University of Chicago, mimeo.
Keane, M. (1990) A Computationully             &ficient Practical Simulation Estimator ,Jor Panel Data with
  Applications to Estimating Temporal Dependence in Employment and Wqes. University of Minnesota,
  mimeo.
Keane, M. (1993) Simulation Estimation Methods for Panel Data Limited Dependent Variable Models,
  in: G.S. Maddala, C.R. Rao and H.D. Vinod, eds., Handbook of Statistics (Econometrics), Vol. 11.
  Amsterdam: North-Holland.
Kloek, T. and van Dijk, H. (1978) “Bayesian Estimates of Equation System Parameters: An Application
  of Integration     by Monte Carlo”, Econometrica, 46, l-20.
Laroque, G. and Salanie, B. (1989) “Estimation           of Multi-Market    Disequilibrium     Fix-Price Models: An
   Application     of Pseudo Maximum Likelihood Methods”, Econometrica, 57(4), 83 t-860.
Laroque, G. and Salanie, B. (1990) The Properties of Simulated Pseudo-Maximum                   Likelihood Methods:
   The Case ofthe Canonical Disequilibrium Model. Working Paper No. 9005, CREST-Departement                         de
  la Recherche, INSEE.
Lee, B.-S. and Ingram, B. (1991) “Simulation            Estimation   of Time-Series Models”, Journal of Econo-
  metrics, 47, 197-205.
Lee, L.-F. (1978) “Unionism and Wage Rates: A Simultaneous                Equation Model with Qualitative          and
   Limited Denendent Variables”. international Economic Review, 19,415-433.
Lee, L.-F. (1979) “Identification       ‘and Estimation     in Binary Choice Models with Limited (Censored)
  Dependent Variables”, Econometrica, 47, 977-996.
Lee, L.-F. (1992) “On the Efficiency of Methods of Simulated Moments and Maximum                            Simulated
   Likelihood Estimation of Discrete Response Models”, Econometric Theory, 8(4), 518-552.
Lerman, S. and Manski, C. (1981) On the Use of Simulated Frequencies to Aproximate                      Choice Prob-
   abilities, pp. 305-319, in: C. Manski and D. McFadden, eds., Structural Analysis ofDiscrete Data with
   Econometric Applications. Cambridge: MIT Press.
Lewis, H.G. (1974) “Comments             on Selectivity Biases in Wage Comparisons”,             Journal of Political
   Economy, 82(6), 114551155.
Maddala, G.S. (1983) Limited Dependent and Qualitative Variables in Econometrics. Cambridge: Cambridge
   University Press.
McCulloch, R. and Rossi, P.E. (1993) An Exact Likelihood Analysis of the Multinomial Probit Model.
   Working Paper 91-102, Graduate School of Business, University of Chicago.
McFadden,       D. (1973) Conditional       Logit Analysis of Qualitative       Choice Behavior, pp. 105-142, in:
   P. Zarembka,       ed., Frontiers in Econometrics. New York: Academic Press.
McFadden,       D. (1981) Econometric       Models of Probabilistic      Choice, pp. 1988272, in: C. Manski and
   D. McFadden,        eds., Structural Analysis ofDiscreteData with Econometric Applications. Cambridge:
   MIT Press.
McFadden,       D. (1986) Econometric        Analysis of Qualitative      Response Models, pp. 1395-1457,            in:
   Z. Griliches and M. Intriligator, eds., Handbook ofEconometrics, Vol. 2, Amsterdam: North-Holland.
McFadden,      D. (1989) “A Method of Simulated Moments for Estimation of Discrete Response Models
   without Numerical Integration”,         Econometrica, 57, 99551026.
McFadden,       D. and Ruud, P. (1992) Estimation by Simulation. University of California                 at Berkeley,
   working paper.
Moran, P. (1984) “The Monte Carlo Evaluation                 of Orthant   Probabilities    for Multivariate    Normal
   Distributions”,     Australian Journal of’ Statistics, 26, 39-44.
Miihleisen, M. (1991) On the Use of Simulated Estimators for Panel Models with Limited-Dependent
   Variables. University of Munich, mimeo.
Newey, W.K. and McFadden, D.L. (1994) Estimation in Large Samples, in: R. Engle and D. McFadden,
   eds., Handbook ofEconometrics,         Vol. 4. Amsterdam: North-Holland.
Owen, D. (1956) “Tables for Computing               Bivariate Normal Probabilities”,        Annals of Mathematical
   Statistics, 27, 1075-1090.
Pakes, A. (1992) Estimation of Dynamic Structural Models: Problems and Prospects Part II: Mixed
   ContinuoussDiscrete        Controls and Market Interactions. Yale University, mimeo.
Pakes, A. and Pollard, D. (1989) “Simulation and the Asymptotics of Optimization                 Estimators”, Econo-
   metrica, 57, 1027-1057.
Poirier, D. and Ruud, P.A. (1988) “Probit with Dependent Observations”,                 Review of Economic Studies,
   55,5933614.
Ch. 40: CIassicaf Estimation Methods for LDV Models Using Simulation                                     2441


Quandt, R. (1972) “A New Approach to Estimating           Switching Regressions”,    Journal of the American
   Statistical Association, 67, 306-310.
Quandt, R. (1986) Computational         Problems in Econometrics,       pp. 1395-1457,    in: Z. Griliches and
   M. Intriligator,  eds., Handbook ofEconometrics,     Vol. 1. Amsterdam: North-Holland.
Rubinstein, R. (1981) Simulation and the Monte Carlo Method. New York: Wiley.
Rust, J. (1992) Estimation of Dynamic Structural Models: Problems and Prospects Part II: Discrete
   Decision Processes. SSRI Working Paper #9106, University of Wisconsin at Madison.
Ruud, P. (1986) On the Method ofsimulated Moments for the Estimation of Limited Dependent Variable
   Models. University of California at Berkeley, mimeo.
Ruud, P. (1991) “Extensions of Estimation Methods Using the EM Algorithm”, Journal ofEconometrics,
   49,305-341.
Stroud, A. (1971) Approximate Calculation ofMultiple Integrals. New York: Prentice-Hall.
Thisted, R. (1988) Elements ofStatistical    Computing. New York: Chapman and Hall.
Thurstone, L. (1927) “A Law of Comparative        Judgement”,    Psychological Review, 34,273-286.
Tierny, L. (1992). Markov Chainsfor Exploring Posterior Distributions. University of Minnesota, working
   paper.
Tobin, J. (1958) “Estimation     of Relationships   for Limited Department     Variables”, Econometrica, 26,
   24-36.
van Dijk, H.K. (1987) Some Advances in Bayesian Estimation Methods Using Monte Carlo Integration,
   pp. 205-261, in: T.B. Fomby and G.F. Rhodes, eds., Aduances in Econometrics, Vol. 6, Greenwich, CT:
   JAI Press.
van Praag, B.M.S. and Hop, J.P. (1987) Estimation of Continuous Models on the Basis of Set-Valued
   Observations. Erasmus University Working Paper, presented at the ESEM Copenhagen.
van Praag, B.M.S., Hop, J.P. and Eggink, E. (1989) A Symmetric Approach to the Labor Market by
   Means of the Simulated Moments Method with an Application to Married Females. Erasmus University
   Working Paper, presented at the EEA Augsburg.
van Praag, B.M.S., Hop, J.P. and Eggink, E. (1991) A Symmetric Approach to the Labor Market by
   Means of the Simulated EM-Algorithm with an Application to Married Females. Erasmus University
   Working Paper, presented at the ESEM Cambridge.
West, M. (1990) Bnyesian Computations: Monte-Carlo Density Estimation. Duke University, Discussion
   Paper 90-AlO.



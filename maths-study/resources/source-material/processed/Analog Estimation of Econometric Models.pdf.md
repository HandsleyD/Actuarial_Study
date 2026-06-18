---
normalized_id: shared-pdf-reference-analog-estimation-of-econometric-models
exam_code: SHARED
material_scope: analog estimation of econometric models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Analog Estimation of Econometric Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-analog-estimation-of-econometric-models

Chapter 43


ANALOG                ESTIMATION                        OF ECONOMETRIC                          MODELS*

CHARLES        F. MANSKI

University ofWisconsin-Madison




Contents

Abstract                                                                                                  2560
1. Introduction                                                                                           2560
2. Preliminaries                                                                                          2561
       2.1.   The analogy       principle                                                                 2561

       2.2.   Moment        problems                                                                      2563

       2.3.           models
              Econometric                                                                                  2565

3.     Method-of-moments     estimation                     of separable         models                   2566
       3.1.   Mean independence                                                                            2561

       3.2.   Median        independence                                                                   2568

       3.3.   Conditional       symmetry                                                                   2569

       3.4.   Variance       independence                                                                  2510

       3.5.   Statistical     independence                                                                 2570

       3.6.   A historical      note                                                                       2571

4.     Method-of-moments                    estimation       of response         models                   2571
       4.1.   Likelihood       models                                                                      2512

       4.2.   Invertible      models                                                                       2574

       4.3.   Mean independent             linear models                                                   2514

       4.4.   Quantile       independent      monotone  models                                             2575

5.     Estimation           of general        separable and response                  models              2577
       5.1.   Closest-empirical-distribution            estimation     of separable    models              2517

       5.2.   Minimum-distance             estimation    of response    models                             2580

6.   Conclusion                                                                                           2581
 References                                                                                               2581




     *I am grateful    for the comments         of Rosa Matzkin        and Jim Powell.


 Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
 0 1994 Elsevier Science B. V. All rights reserved
2560                                                                             C.F. Manski




Abstract

Suppose that one wants to estimate a parameter characterizing         some feature of a
specified population.  One has some prior information      about the population     and a
random sample of observations.     A widely applicable approach is to estimate the
parameter by a sample analog; that is, by a statistic having the same properties in
the sample as the parameter does in the population.   If there is no such statistic, then
one may choose an estimate that, in some well-defined sense, makes the known
properties of the population   hold as closely as possible in the sample. These are
analog estimation methods. This chapter surveys some uses of analog methods to
estimate two classes ofeconometric  models, the separable and the response models.



1.     Introduction

 Suppose that one wants to estimate a parameter characterizing           some feature of a
specified population.   One has some prior information         about the population     and
a random sample of observations.      A widely applicable approach is to estimate the
parameter by a sample analog; that is, by a statistic having the same properties
in the sample as the parameter does in the population.        If there is no such statistic,
then one may choose an estimate that, in some well-defined               sense, makes the
known properties of the population      hold as closely as possible in the sample. These
are analog estimation methods.
    Familiar examples include use of the sample average to estimate the population
mean and sample quantiles to estimate population         quantiles. The classical method
of moments (Pearson (1894)) is an analog approach, as is minimum                chi-square
estimation (Neyman (1949)). Maximum likelihood, least squares and least absolute
deviations estimation are analog methods.
   This chapter surveys some uses of analog methods to estimate econometric
models. Section 2 presents the necessary preliminaries, defining the analogy principle,
moment problems and the method of moments, and two classes of models, the
separable and the response models. Sections 3 and 4 describe the variety of
separable and response models that imply moment problems and may be estimated
by the method of moments. Section 5 discusses two more general analog estimation
approaches:    closest empirical distribution    estimation    of separable models and
minimum distance estimation of response models. Section 6 gives conclusions. The
reader wishing a more thorough treatment of much of the material in this chapter
should see Manski (1988).
   The analogy principle is used here to estimate population           parameters.   Other
chapters of this handbook exploit related ideas for other purposes. The chapter
by Hall describes bootstrap methods, which apply the analogy principle to approxi-
Ch. 43: Analoy Estimation   of Econometric   Models                                   2561


mate the distribution        of sample statistics. The chapter by Hajivassiliou and Ruud
describes simulation        methods, which use the analogy between an observed sample
and a pseudo-sample          from the same population,     drawn at postulated  parameter
values.


2.     Preliminaries

2.1.     The analogy principle

Assume that a probability    distribution P on a sample space 2 characterizes      a
population.    One observes a sample of N independent   realizations   of a random
variable z distributed P. One knows that P is a member of some family 17 of prob-
ability distributions  on 2. One also knows that a parameter      b in a parameter
space B solves an equation

       T(P, b) = 0,                                                                    (1)

where T(., *) is a given function mapping 17 x B into some vector space Y. The
problem is to combine the sample data with the knowledge that DEB, PEJI and
T(P, b) = 0 so as to estimate b.
   Many econometric models imply that a parameter solves an extremum problem
rather than an equation. We can use (1) to express extremum problems by saying
that b solves

       b - argmin W(P, c) = 0.                                                         (2)
              COB

Here W(., .) is a given function mapping 17 x B into the real line.
   Let P, be the empirical distribution      of the sample of N draws from P. That is,
P, is the multinomial   probability  distribution    that places probability l/N on each
of the N observations    of z. The group of theorems collectively referred to as the
laws of large numbers show that P, converges to P in various senses as N --) co.
This suggests that to estimate b one might substitute           the function  T(P,, .) for
T(P, .) and use

       B, = [cEB: T(P,, c) = 01.                                                       (3)

This defines the analog estimate when P, is a feasible value for P; that is, when
P,EIZ. In these cases T(P,;)      is well-defined and has at least one zero in B, so B,
is the (possibly set-valued) analog estimate of b.
   Equation     (3) does not explain how to proceed when P,#I7. We have so far
defined T(.;) only on the space ZZ x B of feasible population         distributions and
parameter values. The function T(P,, .) is as yet undefined for P,#I7.
2562                                                                                C.F. Manski


   Let @ denote the space of all multinomial   distributions     on Z. To define T(P,, .)
for every sample size and all sample realizations,     it suffices to extend T(., .) from
17 x B to the domain (n u @) x B. Two approaches have proved useful in practice.

Mapping P, into 17. One approach    is to map P, into 17. Select a function
rc(.): Hu @ + 17 which maps every member of 17 into itself. Now replace the
equation T(P, b) = 0 with

       T[rc(P), b] = 0.                                                                     (4)

This substitution leaves the estimation problem unchanged as T[rr(Q), .] = r(Q, .)
for all Q~17. Moreover, n(P,)~17;     so T[rc(P,);]  is defined and has a zero in B.
The analogy principle applied to (4) yields the estimate

       B,, = [CER T{7c(P,),   c>= 01.                                                       (5)
When P,EII, this estimate is the same as the one defined in equation (3). When
P,$II,     the estimate (5) depends on the selected function rc(.); hence we write B,,
rather than B,.
   A prominent example of this approach is kernel estimation of Lebesgue density
functions.    Let n be the space of distributions         having Lebesgue densities. The
empirical distribution    P, is multinomial   and so is not in 17. But P, can be smoothed
so as to yield a distribution    that is in 17. In particular, the convolution  of P, with
any element of 17 is itself an element of 17. The density of the convolution     is a kernel
density estimate. See Manski (1988), Chapter 2.

Direct extension.      Sometimes there is a natural direct way to extend the domain
of T(., .), so T(P,, .) is well-defined. Whenever T(P,, .) has a zero in B, equation (3)
gives the analog estimate. If P, is not in l7, it may be that T(P,, c) # 0 for all
CEB. Then the analogy principle suggests selection of an estimate that makes
T(P,, .) as close as possible to zero in some sense.
   To put this idea into practice, select an origin-preserving          function r(.) which
maps values of T(., .) into the non-negative    real half line. That is, let I(.): Y + [0, co),
with T = O-r(T)      = 0. Now replace the equation        T(P, b) = 0 with the extremum
problem

       min r[ T(P, c)].                                                                     (6)
       CSB

This substitution   leaves the estimation   problem  unchanged    as T(Q,c) = 00
r[T(Q, c)] = 0 for (Q, c)~17 x B. To estimate b, solve the sample analog of (6).
Provided only that r[T(P,;)]   attains its minimum on B, the analog estimate is

       B,, = argmin r[T(P,,   c)].                                                          (7)
                ceB
Ch. 43: Analog Estimation   of Econometric   Models                                    2563


If P,~17, this estimate is the same as the one defined in (3). If PN$17 but T(P,, .)
has a zero in B, the estimate remains as in (3). If T(P,;) is everywhere non-zero,
the estimate depends on the selected function r(.); hence we write B,, rather than B,.
   Section 2.2 describes an extraordinarily useful application of this approach, the
method of moments.


2.2.    Moment problems

Much of present-day econometrics is concerned with estimation of a parameter b
solving an equation of the form



       sg(z, b) dP = 0


or an extremum problem of the form
                                                                                        (8)




       min h(z, c) dP.                                                                  (9)
       CEBs

In (8), g(., .) is a given function mapping 2 x B into a real vector space. In (9), h(., .)
is a given function mapping 2 x B into the real line. Numerous prominent examples
of (8) and (9) will be given in Sections 3 and 4 respectively.
   When PN~n, application of the analogy principle to (8) and (9) yields the
estimates


                      g(z, c)dP, = 0 =
                                         I[      CEB:; $
                                                              I1
                                                               g(z, c) = 0
                                                                             I        (10)




       B, = argmin       h(z, c) dP, = argE,n i .$ h(z, c),                           (11)
               CEB                                    I   1




where (zi,i= l,..., N) are the sample observations of z. When P,$ZIl, one might
either map P, into ZZor extend the domain of T(.;) directly. The latter approach
is simplest; the sample analogs of the expectations jg(z, .) dP and J h(z, .) dP are the
sample averages jg(z, .)dP, and I&, *)dP,. So (10) and (11) remain analog esti-
mates of the parameters solving (8) and (9).
    It remains only to consider the possibility that the estimates may not exist. In
applications, s h(z, .) dP, generally has a minimum. On the other hand, jg(z, *)dP,
often has no zero. In that case, one may select an origin-preserving transformation
r(.) and replace (8) with the problem of minimizing r[J g(z, .) dP], as was done in (6).
2564                                                                          C.F. Manski


Minimizing the sample apalog yields


                                                                                    (12)

   Estimation problems relating b to P by (8) or (9) are called moment problems.
Estimates of the forms (lo), (1 l), and (12) are method-of-moments estimates. Use of
the term “moment” rather than the equally descriptive “expectation,” “mean,” or
“integral” honors the early work of K. Pearson on the method of moments.

Consistency    of method-of-moments      estimates.  Clearly, consistent estimation of b
 requires that the asserted moment problem has a unique solution; that is, b must
 be identified. If no solution exists, the estimation problem has been misspecified and
 b is not defined. If there are multiple solutions, sample data cannot possibly
 distinguish between them. There is no general approach for determining the number
 of solutions to equation systems of the form (8) or to extremum problems of the
 form (9). One must proceed more or less case-by-case.
    Given identification, method-of-moments estimates are consistent if the estima-
 tion problem is sufficiently regular. Rigorous treatments appear in such econo-
 metrics texts as Amemiya (1985), Gallant (1987) and Manski (1988). I provide here
an heuristic explanation focussing on (12); case (11) involves no additional consi-
derations.
    We are concerned with the behavior of the function r[Jg(z, *)dP,] as N + co.
The strong law of large numbers implies that for all CEB, s g(z, c) dP, + j g(z, c) dP
as N + co, almbst surely. The convergence is uniform on B if the parameter space
is sufficiently small, the function g(.;) sufficiently smooth, and the distribution P
sufficiently well-behaved. (For example, it suffices for B to be a compact finite-
dimensional set, for J (g(z, *)1dP to be bounded by an integrable function D(z), and
for g(z;) to be continuous on B. See Manski (1988), Chapter 7.) If the convergence
is uniform and I( .) is smooth, then as N + cc the minima on B of I [ J g(z, .) dP,]
tend to occur increasingly near the minima of r[Jg(.z, .) dP]. The unique minimum
of r[Jg(z, .) dP] occurs at b. So the estimate B,, converges to b.
    Uniform convergence on B of Jg(z, .) dP, to Jg(z, .)dP is close to a necessary
condition for consistency of method-of-moments estimates. If this condition is
seriously violated, s g(z, .) dP, is not a good sample analog to jg(z, .) dP and the
estimation approach does not work. Beginning in the 1930s with the Glivenko-
Cantelli Theorem, statisticians and econometricians have steadily broadened the
range of specifications of B, g(., *) and P for which uniform laws of large numbers
have been shown to hold (e.g. Pollard (1984) and Andrews (1987)). Nevertheless,
uniformity does break down in situations that are far from pathological. Perhaps
the most important practical concern is the size of the parameter space. Given a
specification for g(., .) and for P, uniformity becomes a more demanding property
as B becomes larger.
Ch. 43: Analog Estimation   of Econometric   Models                                   2565


Sampling distributions. The exact sampling distributions         of method-of-moments
estimates are generally complicated. Hence the practice is to invoke local asymptotic
approximations.     If the parameter space is finite-dimensional     and the estimation
problem is sufficiently regular, a method-of-moments     estimate B,, converges at rate
l/,,&andfl(B,,-b)h            as a limiting normal distribution centered at zero. Alter-
native estimates of a given parameter may have limiting distributions     with different
variances. This fact suggests use of the variance of the limiting distribution       as a
criterion for measuring precision.
    Comparison     of the precision of alternative  estimators  has long engaged the
attention of econometric theorists. An estimate is termed asymptotic efficient if the
variance of the limiting normal distribution   of @(B,,    - b) is the smallest possible
given the available prior information.       Hansen (1982) and Chamberlain         (1987)
provide the central findings on the efficiency of method-of-moments      estimates. For
an exposition, see Manski (1988), Chapters 8 and 9.

Non-random sampling. In discussing moment problems and estimation problems
more generally, I have assumed that the data are a random sample. It is important
to understand that random sampling, albeit a useful simplifying idea, is not essential
to the success of analog estimation. The essential requirement    is that the sampling
process be such that relevant features of the empirical distribution        converge to
corresponding   population   features.
   For example, consider stationary time series problems. Here the data are obser-
vations at N dates from a single realization      of a stationary   stochastic process
whose marginal distribution      is P. So we do not have a random sample from P.
Nevertheless, dependent sampling versions of the laws of large numbers show that
P, converges to P in various senses as N -+ co.


2.3.    Econometric models

We have been discussing an estimation problem relating a parameter b to a probabi-
lity distribution    P generating realizations of an observable random variable z. Eco-
nometric models typically relate a parameter b to realizations         of the observable z
and of an unobservable         random variable, say u. Analog estimation methods may
be used to estimate b if one can transform the econometric model into a representa-
tion relating b to P and to nuisance parameters.
    Formally, suppose that a probability       distribution P,, on a space Z x U charac-
terizes a population.     A random sample of N realizations of a random variable (z, u)
distributed     P,, is drawn and one observes the realizations     of z but not of U. One
knows that P,, is a member of some family D,, of probability              distributions on
Z x U. One also knows that a parameter b in a parameter space B solves an equation

       f(z, u,b) = 0,                                                                 (13)
 2566                                                                               C.F. Manski


where f(., ., .) maps Z x U x B into some vector space. Equation               (13) is to be
interpreted as saying that almost every realization (i, q) of (z, U) satisfies the equation
f(i, yl, b) = 0.
    Equation      (13) typically has no content in the absence of information          on the
 probability     distribution     P,, generating (z, u). A meaningful   model combines (13)
 with some distributional          knowledge. The practice has been to impose restrictions
 on the probability       distribution   of u conditional on some function of z, say x = x(z)
 taking values in a space X. Let P,lx denote this conditional            distribution. Then a
 model is defined by equation (13) and by a restriction on the conditional distributions
(P,l5,5EX).
   Essentially all econometric research has specified f to have one of two forms. A
separable model makes the unobserved variable u additively separable, so that




where u,(.;) maps Z x B into U. A response          model defines z = (y, x), Z = Y x X,
and makes f have the form

        f(Y, x9 UTb)= Y - Y,k u,b),                                                          (15)

where y,(., ., .) maps X x U x B into Y. Functional     forms (14) and (15) are not
mutually exclusive. Some models can be written both ways.
   The next two sections survey the many separable and response models implying
that b and a nuisance parameter together solve a moment problem. (The nuisance
parameter characterizes  unrestricted features of P,Ix). These models may be esti-
mated by the method of moments if the parameter space is not too large.



3.   Method-of-moments      estimation of separable models

Separable models suppose      that realizations   of (z, U) are related   to the parameter      b
through an equation

        u,(z, b) = u.                                                                        (16)

In the absence of information     restricting the distribution   of the unobserved   U, this
equation simply defines u and conveys no information           about b. In the presence of
various distributional restrictions (16) implies that b and a nuisance parameter solve
a type of moment equation known as an orthogonality            condition, defined here.

Orthogonality conditions. Let x = x(z) take values in a real vector space X. Let r
denote a space in which a nuisance parameter      y lives. Let e(*, .) be a function
mapping U x r into a real vector space. Let e(.;)’ denote the transpose of the
Ch. 43: Analog Estimation of Econometric Models                                              2561


column       vector e(., .). The random      vectors x and e(u, y) are orthogonal   if



       s   xe(u, y)‘dP,, = 0.


   Equation (17) relates the observed random variable x to the unobserved random
                                                                                             (17)



variable u. Suppose that (16) holds. Then we can replace u in (17) with u,(z, b),
yielding


           xe[u,(z,   b), y]‘dP = 0.                                                         (18)


This orthogonality    condition is a moment equation relating the parameters (b, y) to
the distribution   P of the observable z.
   It is not easy to motivate orthogonality  conditions directly, but we can readily
show that these conditions are implied by various more transparent       distributional
restrictions. The remainder of this section describes the leading cases.


3.1.       Mean independence

The classical econometric  literature on instrumental    variables estimation is con-
cerned with separable models in which x and u are known to be uncorrelated.       Let
y be the mean of U. Zero covariance is the orthogonality    condition


           x(u - Y)‘dP,, =       x[u,(z,   b) - y]‘dP = 0.                                   (19)
       s                     s

Most authors incorporate     the nuisance          parameter y into the specification of u,(., .)
by giving that function a free intercept.          This done, u is declared to have mean zero
and equation (19) is rewritten as



       s   x[u,(z, b)]‘dP = 0.


To facilitate discussion of a variety of distributional     restrictions, I shall keep y
                                                                                             (20)


explicit.
    Zero covariance is sometimes asserted directly, to express a belief that the random
variables x and u ,are unrelated.   It is preferable to think of zero covariance       as
following from a stronger form of unrelatedness.      This is the mean-independence
condition



       s   udP,lt     = y,    VEX.                                                          (21)
2568                                                                                    C.F.   Manski



Mean independence     implies zero covariance but it is difficult to motivate zero
covariance in the absence of mean independence.   To see why, rewrite (19) as the
iterated expectation

           r                        r rr               1


       J       x(u - y)‘dP,,   =     x
                                   J LJ
                                         (u - Y)‘dP,jx
                                                       J
                                                         dP, = 0.                                (22)


This shows that mean independence       implies zero covariance. It also shows that x
and u are uncorrelated    if positive and negative realizations     of x[(u - Y)‘dP,(x
balance when weighted by the distribution       of x. But one rarely has information
about P,, certainly not information    that would make one confident in (22) in the
absence of (21). Hence, an assertion of zero covariance suggests a belief that x and
u are unrelated in the sense of mean independence.
   Mean independence    implies orthogonality   conditions beyond (19). Let u(.) be any
function mapping X into a real vector space. It follows from (16) and (21) that



       s
               v(x) [u,(z, h) - y]’ dP =
                                           s
                                               v(x)
                                                      [S
                                                           (u - y)’ dP, 1x
                                                                             1
                                                                             dP, = 0,             (23)


provided only that the integral in (23) exists. So the random variables u(x) and
u,(z, b) are uncorrelated. In other words, all functions ofx are instrumental variables.



3.2.           Median independence

The assertion that u is mean independent        of x expresses a belief that u has the same
central tendency conditional       on each realization of x. Median independence       offers
another way to express this belief. Median independence          alone does not imply an
orthogonality   condition, but it does when the conditional       distributions   P,l& VEX
are componentwise      continuous.
   Let U be the real line; the vector case introduces no new considerations           as we
shall deal with u componentwise.           For each 5 in X, let mg be the median of u
conditional   on the event [x = 41. Let y be the unconditional        median of U. We say
that u is median independent       of x if

       m<=Y,              (EX.                                                                   (24)

It can be shown (see Manski (1988), Chapter 4) that if P,/& [EX are continuous
probability distributions, their medians solve the conditional moment equations


               sgn(u - mJdP,(t      = 0,        [EX.                                             (25)
       s
Ch. 43: Analog Estimation of Econometric Models                                                        2569


So median     independence     and continuity           together      imply that



       ssgn(u - Y)dP,It      = 0,


  It follows from (16) and (26) that
                                          VEX.                                                         (26)




       su(x)x4-n         b) - r]dP=
                                           s[s
                                             44          sgn(u -      Y)dP,lx
                                                                                1  dP, = 0             (27)


for all u(.) such that the integral       in (27) exists. Thus, all functions         of x are orthogonal
to sgn CU,(Z,b) - ~1.
   The median of a probability distribution     is its 0.5-quantile. The above derivation
can be generalized to obtain orthogonality        conditions implied by the assumption
that, for given c(E(O, l), the a-quantile of u does not vary with x.




3.3.    Conditional   symmetry

Mean and median independence           both express a belief that the central tendency of
u does not vary with x. Yet they are different assertions. This fact may cause the
applied researcher some discomfort. One often feels at ease saying that the central
tendency of u does not vary with x. But only occasionally           can one pinpoint the
mathematical     sense in ulhich the term “central tendency” should be interpreted.
   The need for care in defining central tendency disappears           if the conditional
distributions   P,l<, {EX are componentwise         symmetric with common center of
symmetry. Let U be the real line again and assume that for all realizations of x, the
conditional   distribution   of u is symmetric around some point y. That is,

       pu-,I5 = py-.14,          <EX.                                                                  (28)

Let II(.) be any odd function mapping the real line into a real vector space; that is,
h(q) = - h( - ‘I) for q in R’. Conditional symmetry implies



       sh(u-y)dP,lt=O,


  Equations
                                      VEX.


                (16) and (29) imply that (b, y) solves
                                                                                                       (29)




       so(x)h[ue(z, b) - y]‘dP =
                                      s
                                           u(x)
                                                  [S
                                                       h(u-y)‘dP,Ix
                                                                          1 dP,=O                      (30)
2570                                                                             C.F. Manski


for all u(.) and h(.) such that the integral in (30) exists. So all functions of x are
orthogonal to all odd functions of u - y. The functions h(u - y) = u - y and h(u - y) =
w(u - y) are odd. Thus, the orthogonality conditions (23) and (27) that follow from
mean and median independence       are satisfied given conditional  symmetry.



3.4.       Variance independence

One may believe that u not only has the same central tendency for each realization
of x but also the same spread. The usual econometric  practice has been to express
spread by variance. In the presence of mean independence,    variance independence
(homoskedasticity)  is the additional condition


                                                                                         (31)


Here yi is the common mean of the distributions   P,[<, VEX and y2 is the common
variance matrix.
   Let u(.) be any real function on X. It follows from (16) and (31) that (b,y,,y,)
solves the orthogonality  condition



       r
       J
                   b)- YllCu& w-
            W{ CU,(Z~                                                                    (32)


The assertion of variance independence       imposes no restrictions    on the variance
matrix yZ. In some applications,  information    about y2 is available. For example, it
may be known that the components       of u are uncorrelated   with one another, so y2
is a diagonal matrix. Such information    may be expressed by appropriately     restric-
ting the space of possible values of yZ.




3.5.       Statistical   independence

It is often assumed that u has the same distribution   for each realization   ofx. That is,

       PA5 = p,,            (EX.                                                        (33)

This statistical independence      assumption  implies mean, median and variance in-
dependence.     In fact, it implies that all functions of x are uncorrelated   with all
functions of U.
   Let s(.) map U into a real vector space. Let y be the unconditional     mean of s(u).
Ch. 43:    Analog   Estimation   of Econometric   Models                                 2571


It follows from (33) that


           s(u) dP, I5 = Y,          <EX.                                                (34)
       s

It follows from (16) and (34) that (b, y) solves



       s   u(x)t-S{UO(Z~
                     b)f - y]‘dP=O

for all u(.) and s(.) such that the integral               in (35) exists.
                                                                                         (35)




3.6.       A historical note

The analogy principle can be applied to the orthogonality       conditions derived in the
preceding sections to yield method-of-moments        estimates of (b, y). These estimators
are easy to understand      and to apply. Nevertheless, they have taken considerable
time to evolve.
   Wright (1928) and Reiersol(l941,      1945) developed the zero covariance condition
(19) in the case where U is the real line, X and B are both K-dimensional        real space,
and u,(.;)    is linear in b. In this case, the sample analog of the orthogonality
condition always has a solution.
   For some time, the literature offered no clear prescription       for estimation when
the vector x is longer than b; that is, when there are more instruments                 than
unknowns.     The sample analog of the zero covariance condition then usually has
no solution. The idea of selecting an estimate that makes the sample condition hold
as closely as possibly took hold in the 1950s particularly        following the work of
Sargan (1958).
   It was not until the 1970s that the estimation         methods developed for linear
models were extended to models nonlinear in b. See Amemiya (1974). And it was
not until the late 1970s that systematic attention was paid to distributional        restric-
tions other than mean independence.       The work of Koenker and Bassett (1978) did
much to awaken interest in models assuming median independence.              The idea that
orthogonality    conditions should be thought of as special cases of moment equations
took hold in the 1980s. See Burguete et al. (1982), Hansen (1982) and Manski (1983).



4.     Method-of-moments            estimation of response models

Response models assert that an observable       random variable y is a measurable
function of a random pair (x, u), with x observable and u not. The mapping from
(x, u) to y is known to be a member of a family of functions indexed by a parameter
2512                                                                                  C.F. Munski


h in a parameter      space B. Thus,

       y = Y&G u, b).                                                                        (36)

The random variable y is referred to variously as the dependent,               endogenous,
explained or response variable. The pair (x, U) are termed independent,          exogenous,
explanatory   or stimulus variables. The function yO(.;, .) mapping (x, u, h) into y is
sometimes called the response function.
   Equation   (36) is meaningful    only when accompanied        by information      on the
distribution  of U. The usual practice is to restrict the conditional   distribution    P,lx
in some way. Many response models imply that b and a nuisance parameter solve
a moment problem. I describe here the moment problems implied by likelihood
models (Section 4.1) invertible models (Section 4.2) mean independent linear models
(Section 4.3) and quantile independent    monotone models.(Section        4.4).



4.1.    Likelihood   models

The form of the response model (36) implies that the conditional     distribution P,lx
is determined by x, b, and P,lx. Suppose that P,(x is known to be a member of a
family of distributions  s(x,y), ~/ET, where I- is a parameter space and r(.;) is a
known function mapping X x r into probability       distributions  on U. Then P,lx is
a function of x, of the parameter of interest b and of the nuisance parameter y. To
be precise, let <eX, CUB, A c Y and define


       U((,c, A) = UEU         s.t.   y()((,u, C)EA.                                         (37)

BY (36)

                           b,41,
       P,(A 15)= r(t, Y)CU(~,                   for all A c Y.                               (38)

Suppose that there exists a measure v on Y that dominates (in the measure theoretic
sense) all of the feasible values of P,,[<. That is, for (&c,d)~X x B x r and A c Y,
v(A) = O=r(<, S)[U(& c, A)] = 0. Then the Radon-Nikodym              Theorem shows that
P,lx has a density with respect to v, say 4(.; x, b, y), with the density function known
up to the value of (b, y). Jensen’s inequality can be used to show that, for each ~;EX,
(b, y) solves the extremum problem



         max        log &Y; 4, c, 6) dP, I 5.                                                (39)
       (C,&EBx I- s

See, for example,     Manski      (1988), Chapter      5. Because (39) holds for all values of x,
Ch. 43: Analog Estimation of Econometric Models                                           2573


it follows that (b, y) solves the unconditional     extremum     problem


       max      log CNY;x, c, 6) dp,                                                     (40)
     (C,6)EB
           xr s

whose sample analog      is the maximum      likelihood   estimator




The dominance condition.       The above shows that maximum likelihood estimation
is well-defined whenever there exists a measure v dominating        the feasible values of
P,lx. I give a pair of familiar examples in which the condition is satisfied.
   Discrete response models are ones in which the space Y has at most a countable
number of points. The dominance       condition is satisfied trivially by letting v be a
counting measure on Y. Hence, all discrete response models are likelihood models.
   Models with additive errors are ones in which Y is a finite dimensional      real space,
U = Y, and equation (36) has the form

     Y = Y(X>
            b) + 4                                                                       (42)

g(., .) being a given function   mapping    X x B into Y. It follows that


     PYlX= pg(X,b)+“lx.                                                                  (43)

Suppose that the distributions     P,(x are known to be dominated        by Lebesgue
measure. Then the shifted distributions   P,,, bJ+uIx are similarly dominated. So the
distributions P,jx are dominated by Lebesgue measure.


 The nuisance parameter.      It may appear from the above that maximum likelihood
can be used to estimate almost any response model, but this conclusion                  is too
sanguine. To apply the method, one usually must estimate the parameter of interest
b and the nuisance parameter y jointly. (There are special cases in which the problem
decomposes but these are not the rule.) The estimation           task is typically feasible if
one has substantial prior information;     for example, the classical theory of maximum
likelihood estimation supposes that the parameter space B x r is finite dimensional.
But the maximum likelihood estimate may not be consistent if the parameter space
is too large. And the computational      problem of maximizing the likelihood function
may become intractable     before the method breaks down statistically.
   For example, maximum likelihood estimation            is unappealing    when one knows
only that u is mean or median independent       of x. In these cases, the space r indexing
the possible values of P,) x is rather large. In fact, the dominance condition typically
2514                                                                                C.F. Manski


fails to hold, so that the maximum likelihood estimate is not even well-defined.
    That maximum likelihood may break down in the presence of weak distributional
information    does not imply that estimation is impossible. The remainder    of this
section shows that some response models can be estimated using other method-
of-moments approaches.


4.2.    Invertible   models

Suppose that y and u are one to one. That is, for each (5, c) in X x B, let y,(& ., c)
be invertible as a mapping from U into Y. Let y; ‘(t, ., c) denote the inverse function
mapping Y into U. Then an alternative    representation      of equation (36) is

       Y,   Yx,Y, b) = u.                                                                  (44)

This is a separable model, so all of the approaches described in Section 3 can be
applied.
   The additive error model (42) is obviously invertible. Also invertible are the
linear simultaneous     equations models prominent    in the econometrics   literature.
In simultaneous     equations analysis, equation (44) is referred to as the structural
form and equation (36) as the reduced form of the model.


4.3.    Mean independent       linear models

Certain response functions combine well with specific distributional    restrictions.
Linear response functions pair nicely with mean independent     unobservables.
   Let Y and U be J-dimensional   and K-dimensional  real space. Let equation (36)
have the linear-in-u form

       Y = 91 (x, b) + &,     bb.                                                          (45)

Here g1 (., .) maps X x B into RJ. The function g2(., .) maps X x B into RJ ’ K and
is written as a J x K matrix. Note that the response function in (45) is not invertible
unless J = K and the matrices g2(& c), (5, C)EX x B are non-singular.
   Let it be known that u is mean independent      of x. Let y denote the mean of 1.4.
Equation (45) implies that the mean regression of y on x is

       E(Y Ixl = c/l (x, b) + c/Ax, 4-c                                                    (46)

Mean regressions       solve a variety    of moment   problems.   Rewrite (46) as



       sCY -   sl(L b) - gz(k b)yldP,I t = 0,         (EX.                                 (47)
Ch. 43: Analog Estimation of Econometric Models                                             2515


Let u(.) be any function on X. Because (47) holds for all values               of x, it follows
that (b, y) solves the orthogonality condition



        s44 CY- 9 1 (x, b) - gAx>Nyl dP = 0.

   Another approach uses the well-known fact that the mean regression
                                                                                            (48)


                                                                                     of y on x
is the best predictor of y conditional  on x, in the sense of minimizing             expected
square loss. That is, for each VEX, (b,y) solves the extremum problem


          min     C~-~~(5,c)-~~(5,c)~l’Cy-~~(5,c)-~~(5,c)~ldP~l5.                           (49)
        (C,6)EB
             xr s

It follows that, for any function       w(.) mapping    X into (0, co), (b, y) solves the un-
conditional  extremum problem


          min      W(X)CY-~~(~,C)-S~(~,~)~I’C~-~~~(~,~)-~~~(~,C)~I~~,                       (50)
        (C,@EBxr s

whose sample       analog   is a weighted   least squares   estimator   of (b, y), with weights
w(x).


4.4. Quantile independent monotone models

Whereas mean independence        meshes well with linear response function, quantile
independence    combines nicely with real valued response functions that are mono-
tone in a scalar u. Let Y and U be the real line. Let it be known that, for given
a~(0, l), the a-quantile of u does not vary with x. Let y denote the cr-quantile of
u. For each VEX, let y,(<, u, c) be non-decreasing  as a function of u and continuous
at y as a function of c. Then it can be shown that y,(x,y, b) is the a-quantile
regression of y on x (see Manski (1988), Chapter 6).
   The a-quantile regression of y on x is a best predictor of y conditional    on x, in
the sense of minimizing the expected value of the asymmetric absolute loss function
giving weights (1 - a) and c1to overpredictions    and underpredictions.   That is, for
each VEX, (b,y) solves the extremum problem


         min (1 -~)~CY<Y,(~,~,~)IIY-Y,(~,~,~)I
        (C,&B
            xr I

               + @ICY’ YO(~~~>C)IIY
                                 - ~,,(S,hc)l @,I&                                         (51)

It follows that, for any function      w(.) mapping     X into (0, oo), (b,y) solves the un-
2576                                                                                       C.F. Manski


conditional      extremum       problem


       ,,pF    r W{(l          -~~~CY~Y,~~,~,~~llY-Yy,~~,~,~~I
        <, t x   s

                 + alCy > Y~(x,~c)IIY        -~,b,~,c)I)    dP,                                   (52)

whose sample analog is a weighted asymmetric least absolute deviations estimator
of (b,y), with weights w(x).
   Two applications    follow. For simplicity, I confine attention to the median
independence    case.


Censored response.    Let Y = [0, co) and X = B = RK. Powell (1984, 1986) studied
estimation  of the censored linear model asserting that y = 0 if x’b + u d 0 and
y = x’b + u otherwise. That is,

       y = max(O, x’b + u).                                                                       (53)

For each l in X, the function max(O, t’b + u) is non-decreasing and continuous                      in
u. Hence, the median of P,lx is max(O,x’b + y). Applying (52), (b,y) solves



                 s
       ,,,zJf.ly- max(O,x’c + S)l dP,                                                             (54)


whose sample          analog   is the censored   least absolute   deviations   estimator


                                                                                                  (55)


Binary response.   Let Y = (0, l} and X = B = RK. Manski (1975, 1985) studied
estimation  of the binary response model asserting that y = 0 if x’b + u d 0 and
y = 1 otherwise. That is,

       y=   l[x’b+u>O].                                                                           (56)

For each 5 in X, the response function l[{‘b + u > 0] is non-decreasing       in u. This
function is continuous at y if {‘b # y, but discontinuous at y if t’b = y. Nevertheless,
it can be shown that for all 5, the median of P,I 4 is 1[t’b + y > 01. Applying (52),
(b, y) solves



       fc,mkxr       l~-1Cx’c+~>OlldP,                                                           (57)
                 I
Ch. 43: Analog Estimation    qf Econometric   Models                                           2517


whose sample        analog   is the maximum        score estimator


                                                                                               (58)



5.     Estimation   of general separable and response models

The method-of-moments         approaches described in the preceding sections make it
possible to estimate a wide variety of econometric    models and so are enormously
useful. These approaches cannot, however, handle all models of potential interest.
Not all models imply moment problems and those models that do imply moment
problems can be estimated by the method of moments only if the estimation
problem is sufficiently regular.
   This section describes more general analog approaches         to the estimation of
separable and response models. Section 5.1 presents closest-empirical-distribution
estimation of separable models, introduced in Manski (1983). Section 5.2 presents
minimum-distance     estimation of response models, based on the work of Wolfowitz
(1953, 1957) and others.



5.1.     Closest-empirical-distribution       estimation of separable   models


Recall that a separable        model has the form u,(z, b) = u. Hence

       P,” = P+,b).                                                                            (59)

Thus, the joint distribution    of observables and unobservables    is a function of the
observable distribution     P and of the parameter      b. To make the dependence      of
P,, on (P, b) explicit, let Q be any probability distribution  on Z and let z(Q) denote
a random variable distributed       Q. For EL?, let $(Q,c) denote the distribution     of
[z(Q), ue{z(Q), c}]. Then (59) implies that

       Pm= W’, b).                                                                             (60)

  Suppose one knows that P,,~17,,,              where I&, is some family of distributions       on
Z x U. By (60),

       W’, b)EJI,,.                                                                            (61)

This translates the information   on P,, into a condition relating               the parameter b
to the observable distribution  P. We may now apply the analogy                  principle to (61).
2578                                                                                        C.F. Manski


The analog    estimate     for b is

       B, = [cEB:$(P,, C)EITZ”],                                                                    (62)

unless this set is empty. In that case, the analogy principle suggests selection of
an estimate that makes the distribution     $(PN, .) as close as possible to &,, in some
sense.
   To do this, we may select a function           r(.,&,)    that maps each probability
distribution  $ on Z x U into [0, co) and that satisfies the condition r($, l7,,) = 00
$~17,,. Thus, r(., I&,) distinguishes distributions     that are in fl,, from ones that are
not. Condition (61) is equivalent to saying that b solves the minimization      problem


                                                                                                    (63)


The analogy principle         applied        to (63) yields    the closest-empirical-distribution
(CED) estimator




In words, (64) selects an estimate       that brings the distribution         of [z(PN), uO{z(P,), .}]
as close as possible to Z&,.

Examples.      Method-of-moments       estimates of parameters     solving orthogonality
conditions are CED estimates. The set fl,, is the family of distributions        satisfying
(17). This information   is translated by (18) into an orthogonality    condition relating
b to P. The method of moments then selects an estimate that makes the distribution
of [z(PN), u,{z(P,), .}] satisfy the orthogonality   condition as closely as possible.
   As a second example, suppose it is known that u is statistically independent            of
some function of z, say ?c = x(z). This information       can be expressed through the
statement that, for all (s, t)eX x U,

       PZ”(Xd s, u ,< t) = P(x < S)P”(U< t).                                                        (65)

This translates   into the following          restriction   relating   b ‘to P:

       p[xG s,u,(z, b) < tl = P(x d s)P[u,(z, b) < t].                                              (66)

If it exists, the analog    estimate    is


       B, s {EB:P,[x        d s, u,(z, b) < t] = P,(x d s)P,Ju,,(z, b) < t, ‘v’s,tl}.               (67)
Ch. 43: Analog     Estimation     of Econometric   Models                                      2519


But this estimate typically does not exist so we need to make (65) hold as closely
as possible, in some sense.
   One among many a priori reasonable approaches expresses the prior information
through the statement that b minimizes the integrated      square distance between
P[x,u,(z;)]   and P(x)P[u,(z;)].  That is, b solves the minimization   problem


     ?$I
           s   {P[X G s,u,(z,c) < t] - P(x <s)PCu,(z,c)< tl}2dsdt,                             (68)


whose sample analog               is the estimator


     min
     CEB
         {P,[x           < s, u,(z, c) d t] - P,(x d s)PN[uo(z, C) G t]}” ds dt.               (69)
           s

Computation     of this estimator is difficult as one must integrate over all values of
(s, t). A computationally    simpler (but notationally   more complicated)    estimator
results if one uses mean square distance rather than integrated        square distance.
Let P’ = P, define z’ to be a random variable distributed     P’ and independent    of z,
and replace (68) by


     m$r       {P[X G x’, u,(z, c) < ue(z’, c)] - P(x < x’)P[u,(z,      c) < u&‘, c)I}~ dP’.   (70)
           s

The sample         analog       of (70) is



     TE$lk
       ,il{‘NCxG
               I
                                    xi,   uO(z,c) d uO(zi~c)l - p,(x G xi)p~[“~(Z,C)G uo(zi, C)]}2.
                                                                                               (71)

Consistency of CED estimates. Manski (1983) shows that closest-empirical-distri-
bution estimates are consistent if b is identified, B is compact and finite dimensional,
r[II/(P, .), I7,,] is continuous on B, and


                                                                                               (72)


almost surely. (Condition    (72) is an abstract uniform law of large numbers.) This
consistency theorem has been applied to prove that the estimator (71) is consistent
given regularity  conditions    (see Manski (1983), Corollary   to Theorem 2). The
asymptotic sampling behavior of general CED estimates has not been studied.
2580                                                                                   C.F. Manski


5.2.    Minimum-distance          estimation of response     models

Recall that the response model (36) implies that P,I x is a function of (x, b, P,Ix).
When we introduced     likelihood models in Section 4.1, we assumed that P,lx is a
member of a family of distributions    T(X,y), r~r, so P,lx is a function of (x, b, y).
We also assumed that P,(x is dominated by a known measure v. Here we maintain
the former assumption     but drop the latter one.
   By assumption,


       P, Ix = N--G
                  b,Y),                                                                       (73)

where h(., ., .) is a known function mapping X x B x r into probability             distribu-
tions on Y. Let p(., .) be a function that maps pairs of probability   distributions      on Y
into [0, co) and that satisfies the condition     Q = Q’op(Q, Q’) = 0. Equation            (73)
implies that (b, y) solves the collection of conditional   minimization      problems


          min pC(P,I0, ML c,41,
       (c,6)eB   Y I-
                                                  5~x.                                        (74)


It follows that, for any function w(.) mapping                X into (0, co), (b,y) solves the un-
conditional  minimization  problem



       (C.&Bx r         s
          min w(OCV’, Ix),k                   c,41 dp,,                                       (75)


whose sample analog         is the minimum-distance           estimator



          min W(X)P
       (C,6)EB x r
                        s
                     Ix),4~ c,41 df’,,
                  CWNy


            = ,,gk      .$ jl   W(Xi)PC(pNy          Yxi7‘, ‘)I’
                                                 Ixi)T                                        (76)


Wolfowitz (1953, 1957) investigated     the case with no conditioning       variable x and
with p specified to be a metric on the space of distributions        on Y. In that setting,
(75) selects an estimate that minimizes the distance, in the sense of p, between the
theorized distribution   of y and its empirical distribution.     Sahler (1970) extended
the approach by letting p be any smooth function that maps pairs of probability
distributions  on Y into [0, co) and that satisfies the condition Q = Q’op(Q, Q’) = 0.
An early minimum-distance      estimator with conditioning      variables is the minimum
chi-square method (Neyman, 1949). Here x is multinomial with support X = (1,. . . , J),
Ch. 43: Analoy Estimation   of Econometric   Models                                              2581


y is Bernoulli    conditional    on x, and p is Euclidean         distance.   So the estimator    is


                            w(j)[P,(y=       llx=j)-h(j,c,6)]2.                                  (77)


Here Nj is the number of observations         at which xi =j and P,(y = 11.x =j) is the
sample frequency of the event [y = 1] conditional       on the event [x = j].
   Econometricians    use the term minimum-distance         to refer to estimators that
minimize the distance between specified features of the theorized distribution        of
y and the sample analogs of these features. Thus, in econometric usage, t(Q) = t(Q’)e
p(Q, Q’) = 0 for some functional    t(.). Usually, p has measured Euclidean distance
between theoretical and sample moments (e.g. Goldberger and Joreskog, 1972). In
a recent application,   Chamberlain      (1994) measures distance between theoretical
and sample medians of y conditional         on x.



6.   Conclusion

This chapter has surveyed the application of analog methods to estimate econometric
models. The analogy principle is more than just a useful tool for generating
estimators. It offers a valuable framework for teaching and for research.
   The analogy principle is an effective device for teaching estimation.     In analog
estimation, one begins by asking what one knows about the population.         One then
treats the sample as if it were the population.  Finally, one selects an estimate that
makes the known properties of the population        hold as closely as possible in the
sample. What could be more intuitive?
   The analogy principle disciplines econometric      research by focussing attention
on estimation problems rather than on methods. Much of the literature proposes
some new method and then looks for problems to which it can be applied. This
approach    has been productive,    but it seems more sensible to first specify an
estimation problem and then seek to develop applicable estimation methods. The
analogy principle forces this mode of thought. One can define an analog estimator
only after one has stated the estimation problem of interest.



References

Amemiya, T. (1974) “The Non-Linear       Two Stage Least Squares Estimator”, Journal of Econometrics,
  2, 105-l 10.
Amemiya, T. (I 985) Advanced Econometrics, Cambridge:       Harvard University Press.
Andrews, D. (1987) “Consistency    in Nonlinear Econometric    Models: A Generic Uniform Law of Large
  Numbers”, Econometrica, 55, 1465-1471.
Burguete, J., Gallant, R., and Souza, G. (1982) “On Unification of the Asymptotic Theory of Nonlinear
  Econometric     Models”, Econometric Reviews, 1, I51-190.
2582                                                                                               C.F. Manski


Chamberlain,    G. (1987) “Asymptotic     Efficiency in Estimation With Conditional      Moment Restrictions”,
   Journal cf Econometrics, 34, 305-334.
Chamberlain,     G. (1994) “Quantile    Regression, Censoring,      and the Structure of Wages”, in: C. Sims,
   ed., Advances in Econometrics: Sixrh World Congress, New York: Cambridge University Press.
   Cambridge     University Press, forthcoming.
Gallant, R. (1987) Nonlinear Statistical Models, New York: Wiley.
Goldberger, A. and Joreskog, K. (1972) “Factor Analysis by Generalized Least Squares”, Psychometrika,
   37, 243-260.
Hansen, L. (1982) “Large Sample Properties of Generalized Method of Moment Estimators”, Econometrica,
   50, 1029-1054.
Koenker, R. and Bassett, G. (1978) “Regression Quantiles”, Econometrica, 46, 33-50.
Manski. C. (1975) “Maximum         Score Estimation      of the Stochastic Utility Model of Choice”, Journal
   ofEconometrics, 3, 205-228.
Manski, C. (1983) “Closest Empirical Distribution          Estimation”,   Econometrica, 51, 305-319.
Manski, C. (1985) “Semiparametric          Analysis of Discrete Response: Asymptotic          Properties   of the
   Maximum Score Estimator”, Journal of Econometrics, 27, 303-333.
Manski, C. (1988) Analog Estimation Methods in Econometrics, London: Chapman                  and Hall.
Neyman, J. (1949) “Contributions     to the Theory of the x2 Test”, in: Berkeley Symposium on Mathematical
   Statistics and Probability, Berkeley: University of California.
Pearson, K. (1894) “Contributions     to the Mathematical     Theory of Evolution”, Philosophical Transactions
   of the Royal Society of London, A185, 71-78.
Pollard, D. (1984) Contlergence c$Storhastic        Processes, New York: Springer-Verlag.
Powell, J. (1984) “Least Absolute Deviations Estimation for the Censored Regression Model”, Journal
   of Econometrics, 25, 303-325.
Powell, J. (1986) “Censored Regression Quantiles”, Journal of Econometrics, 32, 143-155.
Reiersol, 0. (1941) “Confluence Analysis by Means of Lag Moments and Other Methods of Confluence
   Analysis”, Econometrica, 9, l-23.
Reiersol, 0. (1945) “Confluence      Analysis by Means of Instrumental           Sets of Variables”,   Arkio Fur
   Matematik, Astronomi Och Fysik, 32A, no. 4, 1-119.
Sahler, W. (1970) “Estimation     by Minimum Discrepancy           Methods”, Metrika, 16, 85-106.
Sargan, J. (1958) “The Estimation of Economic Relationships          Using Instrumental  Variables”, Economet-
   rica, 26, 393-415.
Wolfowitz, J. (1953) “Estimation by the Minimum Distance Method”, Annals ofthe Institute ofStatistics
   and Mathematics, 5,9-23.
Wolfowitz, J. (1957) “The Minimum Distance Method”, Annals OfMathematical Statistics, 28, 75-88.
Wright, S. (1928) Appendix B to Wright, P. The Tariff on Animal and Vegetable Oils, New York:
  Macmillan.



---
normalized_id: shared-pdf-reference-testing-non-nested-hypotheses
exam_code: SHARED
material_scope: testing non-nested hypotheses.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Testing Non-Nested Hypotheses.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-testing-non-nested-hypotheses

Chapter 44


TESTING NON-NESTED                                        HYPOTHESES

C. GOURIEROUX

CREST-CEPREMAP


A. MONFORT

CREST-INSEE




Contents

1.   Introduction                                                                              2585
2.   Non-nested            hypotheses                                                          2587
     2.1.    Definitions                                                                       2587

     2.2.    Pseudo-true      values                                                           2589

     2.3.    Semi-parametric       hypotheses                                                  2590

     2.4.    Examples                                                                          2591

     2.5.    Symmetry       of the problem                                                     2596

3.   Testing procedures                                                                        2597
     3.1. Maximum likelihood                estimator      under misspecification              2597

     3.2.    The extended       Wald test                                                      2598

     3.3.    The extended       score test                                                     2600
     3.4.    The Cox procedure                                                                 2602
     3.5.    Application     to the choice of regressors            in linear models           2605
     3.6.    Applications      to qualitative      models                                      2608

4.   Artificial     nesting       models                                                       2610
     4.1.    Examples                                                                           2610
     4.2.    Local expansions          of artificial    nesting   models                        2614
     4.3.    A score test based on a modified               Atkinson’s     compound    model    2618
     4.4.    The partially     modified       Atkinson’s     compound      model                2621
5.   Comparison             of testing        procedures                                       2621
     5.1.    Asymptotic      equivalence       of test statistics                               2622
     5.2.    Asymptotic      comparisons         of power functions                             2622
     5.3.    Exact finite sample results                                                        2624




Handbook of Econometrics, Volume IV, Edited by R.F. Engle and D.L. McFadden
0 1994 Elseuier Science B.V. All rights reserved
Ch. 44: Testing Non-Nested Hypothrses                                                         2585




1.   Introduction

The comparison        of different hypotheses, i.e. of competing models, is the basis of
model specification. It may be performed along two main lines. The first one con-
sists in associating with each model a loss function and in retaining the specification
implying the smallest (estimated) loss. In practice, the loss function is defined either
by updating some a priori knowledge on the models given the available observations
(the Bayesian point of view), or by introducing          some criterion taking into account
the trade-off between the goodness of fit and the complexity                  of the model (for
instance the usual adjusted R2 or the Akaike information            criterion). This approach,
called model choice or model selection, has already been discussed in the handbook
(see Learner (1983)) and therefore it will not be treated in this chapter, except in
Section 6. The second approach is hypothesis testing theory. For model selection
we have to choose a decision rule explaining for which observations                 we prefer to
retain each hypothesis. In the simplest case of two hypotheses H, and H,, this is
equivalent to the definition of the critical region giving the set of observations              for
which H, is rejected. However, the determination             of the decision rule is not done
on the same basis as model choice. The basis of hypothesis testing theory is to
introduce the probability        of errors: first error type (to reject H, when it is true),
and second error type (to reject H, when it is true), then to choose a critical region
for which the first error type probability          is smaller than a given size (generally
5%) and the second error type probability              is as small as possible. Hypothesis
testing theory is usually advocated when one of the hypotheses He, called the null
hypothesis, may be considered as a “limit case” of the second hypothesis H,, called
the alternative     hypothesis. Broadly speaking the model H, u H, can be reduced
to the submodel H, by imposing some restrictions on the parameters. H, is said
to be nested in H,. Some general testing procedures have been developed for this
case; the main ones are the likelihood ratio tests, Wald tests, Lagrange multiplier
(or score) tests and Hausman’s tests (see Engle (1984) for a survey of these testing
procedures).
    In this chapter we are interested          in the opposite case, where none of the
hypotheses is a particular case of another one. These hypotheses may be entirely
distinct (globally non-nested        hypotheses) or may have an intersection           (partially
non-nested hypotheses). Most of the theoretical literature on non-nested hypotheses
testing derives from papers by Cox (1961, 1962) and Atkinson (1970). The first
author developed a general procedure, known as the Cox test, which generalizes
the likelihood ratio procedure used in the case of nested hypotheses. The second
author proposed to introduce a third model H, called an artificial nesting model,
containing    both Ho and H, and to use the classical procedures                 for testing H,
against H, and HI against H. These two approaches to the problem are conceptually
different, even if they provide similar results in a number of important applications,
2586                                                                  C. Gourieroux und A. Monfort


 especially in the case of linear models. The example of linear models, which leads
 to explicit and tractable computations             has been extensively studied during the
 seventies and the beginning          of the eighties (see, e.g. Fisher and McAleer (1981),
 Godfrey and Pesaran (1983) Pesaran (1974, 1982a, 1982b)), and different nesting
  models have been proposed for specific problems. The generalization                  of Wald and
 score testing procedures        to non-nested      hypotheses have been proposed by Cox
 (1961), Gourieroux      et al. (1983) and Mizon and Richard (1986) and their links with
 the Cox test have been studied. In parallel, Davidson and McKinnon                     (1981, 1983,
  1984) considered      some local approximations           of artificial nesting models in a
  neighbourhood      of the hypothesis H, and derived the associated tests. Then the
 power of these different testing procedures have been compared, either in finite
  samples (McAleer (198 l), Fisher and McAleer (198 I), Dufour (1989)) or asymptoti-
 cally (Davidson and McKinnon             (1987), Gourieroux     (1983), Pesaran (1984, 1987)
  Szroeter (1989)). The generalization          of the Wald test leads to a procedure with
 interesting interpretations      in terms of predictions (Gourieroux         et al. (1983), Mizon
 (1984), Mizon and Richard (1986)). This interpretation              has been used as the basis
 of a modelling strategy. The so-called encompassing             principle has been developed
 in a number of papers by Mizon and Richard (198 1,1986), Hendry (1988), Hendry
 and Mizon (1990), Hendry and Richard (1990) and associated tests have been
 introduced    in Gourieroux       and Monfort (1992).
     In Section 2, we carefully define the notions of non-nested                   hypotheses,    we
 distinguish,   especially, partially      and globally non-nested         hypotheses.     For this
 purpose it is necessary to introduce a suitable metric measuring the closeness of
 the hypotheses; this leads to two concepts of pseudo-true                value, one is marginal
 with respect to the explanatory           variables and the other is conditional           to these
 variables. Different classical examples of non-nested           models are also described in
 this section.
    Section 3 treats the extension of the usual testing procedures: Wald, score, likeli-
 hood ratio tests. We obtain different forms of the test statistics depending on the
 kind of pseudo-true value which is used. The application             to the choice of regressors
 in the linear model is particularly        emphasized.
    The artificial nesting models are presented in Section 4, first for some specific
 problems in which the nesting models may have interesting interpretations,                     then
in the general case. The expansion of these artificial nesting models in a neighbour-
 hood of one of the hypotheses leads to a linearization          of the problem and to simple
specification    tests, called the J-test and the P-test (Davidson               and McKinnon
(1981)).
    These tests are compared in Section 5 through their asymptotic                     power. This
analysis is complicated by the fact that some points of the composite null hypothesis
are not the limits of points of the alternative           hypothesis. A local power analysis
may only be conducted along a sequence of points leading to a distribution                    which
is common to both hypotheses; otherwise it is necessary to develop some other
Ch. 44: Testing Non-Nested   Hypotheses                                                 2587


asymptotic    comparisons     of tests for fixed alternatives     (Bahadur (1960), Geweke
(1981) Gourieroux      (1983)).
   In the last section, we discuss the use of non-nested      testing procedures for model
building. We introduce the notion of encompassing              and explain how it may be
used as a modelling      strategy. Then we derive Wald tests of the encompassing
hypothesis which are modified versions of the Wald test for non-nested hypotheses,
taking into account the fact that the true distribution         does not necessarily belong
to one of the competing models.
   Since our aim is to present the main ideas and potential applications,            we will
in general omit the proofs and the less significant            assumptions.    In the whole
chapter, we consider T observations         of some endogenous and exogenous variables,
denoted by y,, x,, t = 1,. . . , T, respectively. We assume that:

     the pairs (y,, x,), t = 1,. , T are identically and independently   distributed   with
     an unknown       probability   density function: fox(x) f&y/x)    with respect    to a
     product measure denoted by v,(dx) @ v,(dy).

   These assumptions    are made in order to simplify the presentation,    but they may
be weakened in order to allow for some correlations      between the pairs (y,, x,), for
instance when there are lagged endogenous     regressors (see, e.g. Wooldridge (1990),
Domowitz    and White (1982), Gourieroux       and Monfort (1992)), or to consider
the case of deterministic    regressors (White and Domowitz         (1984), Wooldridge
(1990)).



2.     Non-nested     hypotheses

The hypotheses may concern either the whole conditional    distribution    of y, given
x,, or simply some conditional moments, such as the conditional     expectation.   We
successively consider these two situations.



2.1.    Dejinitions

When the hypotheses concern the whole conditional          distribution   and have a para-
metric form, they may be written as


       H, = MY,/&;       a),CffzA= [WC},
       H, = {~(Y,/x,; b’),PEB = RH}.                                                   (2.1)
They are respectively parameterized       by the parameters   c( and 8, which may have
different sizes and different interpretations.   The first hypothesis H, (for instance)
2588                                                                         C. Gourieroux and A. Morzfbrt


is valid if the true conditional    distribution    f&y,/x,)    can be written as g(y,/x,;irO)
for some u,,EA. In such a case a, is the true value of the parameter.
   To measure the closeness between the two hypotheses H, and H,,we have to
introduce a proximity measure between probability               density functions. One such
measure, is the KullbackkLeibler        information    criterion (KLIC). The KLIC of two
conditional   distributions  g(y/x; a) and h(y/x; fl) may be defined either conditionally
to the exogenous variables by


       Z,,(a,P;4 =
                       s
                            log       $f$2 g(y/x; a)v, (dy),                                         (2.2)

or unconditionally               by


       cJhbY
           P)=

   The conditional
                   ss      log        .dY/x;4
                                      ____ s(yIx; G-ox(xbyWY)v, (d-4.
                                      W/x; PI
                      version may be computed as soon as the two hypotheses have
                                                                                                     (2.3)



been defined, whereas the unconditional        version Z,,(a, /J) depends on the unknown
marginal distribution     of the exogenous variables, and therefore is also unknown.
However, it may be consistently       estimated by




The KLIC takes non-negative         values and is equal to zero if and only if the two
p.d.f.‘s appearing in the definition are the same:

       Igh(4B;x) = O-dYlx;                a) = 4Yl-T B).
It is not a distance in the mathematical                sense since, for instance,   it does not satisfy
the symmetry condition:

       I&?&>B; x) z r,,(D> a; x).

For the definition of nested and non-nested    hypotheses, we follow Pesaran (1987).
We first define the proximity between a distribution   of H, and the whole hypothesis
H, by

       I&a; x) = inf Zgh(a,/I; x),                                                                   (2.5)
                 BEE

and similarly,    the proximity             between   a distribution   of H, and     H,

       Ih(B;x)
            = infIh,(B,
                    4x1.                                                                             (2.6)
                  EA
2590                                                                       C. Gourieroux   and A. MonJbrt


This finite sample pseudo-true         value b,(a) depends on T and on the observations
x1,. . . , xT, and therefore it is a random variable. For this reason, it is sometimes
called the conditional        pseudo-true    value. It converges to b(a), when T tends to
infinity.
   An important       simplification   occurs when we consider models without explana-
tory variables, or equivalently        models in which the only x variables are constant
variables. In this case Z,,(a, /i’;x) = Z,,(a, p) = I^,(a, fi) and the asymptotic and finite
sample pseudo-true values coincide. However models without explanatory variables
are not frequent in econometrics          and therefore we will have to keep in mind the
distinction     between @cc) and b,(a).



2.3.    Semi-parametric     hypotheses

The competing     models may also have been defined through some conditional
moments, for instance through conditional      means. The approach       described in
subsections 2.1 and 2.2 can easily be adapted to this semi-parametric     framework.
We basically have to define in a suitable way a measure of proximity between
these conditional moments. As an illustration let us consider the case of conditional
means. The two hypotheses H, and H, are defined by

       H, = (E(y,/x,)     = m(x,; a), WA c R’},

       H, = (E(ytlxt)     = Ax,; P), BEB = R”}.                                                     (2.8)

The proximity between        two means may be measured             by the usual average squared
Euclidean distance


       k,Ja, 8) =
                    s   II4x; 4 - Ax; 8)II2fox(-4
                                                dvx(xL                                              (2.9)


or by its empirical     counterpart


       kP)=;1;f: IIm(x,;~)-~(x,;B)l12.                                                             (2.10)


The pseudo-true values associated with these semi-parametric                   hypotheses      and with
this distance D, are then defined by

       D,,,+(M,b(x)) = inf D,,J~,     b)   for the asymptotic      case,
                       BEE
                                           for the finite sample     case.                         (2.11)
Ch. 44: Testing Non-Nested Hypotheses                                                     2591


In fact this semi-parametric approach is strongly linked with the previous one.
Let us assume for a moment that the conditional     distribution of y, given x, is
normal with unit variance. The hypotheses H, and H, would be defined by

       H, = {Y(Y,/x,; a) = Wm(x,, a),11,a-l},
       H,, = (~(Y,/x,; PI = N/4x,,/% 11,BEB).

Moreover             the associated   KLIC   would be


         1    (a
             gh 2
                    px)=
                      1

                               s
                               logdJi~x;a)
                                 h(~B(y!x; aWv,(y)

                           =
                               s
                           = 4II4x; 4 - Ax; B)II*.
                                                                     1 dylx; a)dv,W



We deduce that I,,(a, /j’) = JZ,,(a, /I; x)f&x) dv,(x) = iD,,,Ja, p). The pseudo-true
values defined in the semi-parametric      framework with a Euclidean distance coincide
with the pseudo-true      values computed      as if the conditional    distribution was a
Gaussian distribution.
   It would have been possible to measure the closeness of the non-nested            hypo-
theses H, and H, by using a KLIC based on another artificial conditional
distribution. The artificial distributions    which are suitable for this purpose are the
members of linear exponential        families, including     the normal, the Poisson, the
gamma, etc. distributions     (see Gourieroux     et al. (1984)).




2.4.         Examples


2.4.1.        Choice of regressors in a linear model

We consider three sets of linearly independent regressors x0, xi, x2, with respective
sizes K,, K,, K, and x = (x,, xi, x2). The two models of interest are


         H, = {E(Y,/x,)= xOtaO+ xltal,(ab,a;)‘~[WKo+K’:,
         H, = {E(~,/xt) = x,,b,         +~~~bl,(bb,b;)~[W~‘+~~}.                         (2.12)


To choose between H, and H, is equivalent               to choosing the regressors which have
to be eliminated: either xi (H, is accepted),           or x2 (H, is accepted). As soon as K,
or K, is non-zero the two semi-parametric                hypotheses are non-nested.   They are
2592                                                                    C. Gourieroux     and A. Monfort


only partially      non-nested   as soon as K, # 0, their intersection            being

       H,n H, = (E(y,/xJ = xotuo,uo~RK”}.

The finite sample       pseudo-true    value br(c() corresponding        to




is the solution     of the minimization       problem

              T

       min1 CxOtaO
       bo,b, 1= 1
                 + ha1            -   (xotbo+ x2A)12.

It is a least squares problem.
   Let us introduce   the matrices X0,, X,.,X,,  giving the observations on the
different regressors. They have respective sizes TX K,, T x K,, T x K,. The
solution of the problem is




When T is large the empirical cross-products             converge to the corresponding           second
order moments of the marginal distribution                of the x variables. We get



                                                                   >(>
                                                                        a,
       b                                                                                          (2.14)
                                                                      a,      ’

where $ is the expectation with respect to the true unknown marginal distribution
of the explanatory   variables.
   It must be emphasized that the definitions of the two hypotheses concern the
same conditional   expectations. It might have seemed natural to define the hypo-
theses by


       Hm= {E(Y,/x
                 ot, XlJ = XO(UO+ x,,a,,(u;, u;)‘ERKo+K’},

       H, = {E(ytlxot> ~a) = x,,b,        + x,tb,,(b;,   b;)aRKo+K2).

However it is easily seen that the hypotheses defined in this way may be compatible:
for instance, if the vector of all variables (yt,xot,x1t,x2t) is Gaussian, H, and H,
are both satisfied.
Ch. 44: Testing Non-Nested          Hypotheses                                        2593


2.4.2.      Linear     versus logarithmic        ,formulations

When specifying a regression model we have often to choose between a linear and
a logarithmic formulation.    For instance, for demand functions giving the consump-
tion as a function of income, we have to compare a formulation       with constant pro-
pensity to consume (linear formulation)     and a formulation   with constant elasticity
(logarithmic    formulation).  The two hypotheses     written in terms of conditional
distributions   are

         H, = {logy, = x,a + ut, where uJx,, z, - N(0, or’), CCEA,o2 > 0},

         H, = {yt = z,B + vl, where Q/X,, z, - N[O, v2], /I’EB, q2 > O}.            (2.15)

For the same reasons as in the previous example the hypotheses are made on a
conditional   distribution given the same set of regressors x and z. The hypotheses
differ in different respects. First, the distributions    have different supports: the
positive real line for H, and the whole real line for H,; clearly the question of
choosing between H, and H, is only meaningful          if the observed values of y are
positive. Second, the two models differ not only by the form of the regression
functions

         E(y,/x,, zr) = exp(x,cr + $“),             for      H,,

         E(YJ%       zt) = z,P,                     for      H,,


but also by their variance properties since the data are supposed to be hetero-
skedastic under H, and homoskedastic     under H,.
   The finite sample pseudo-true  values may be easily determined (see Gourieroux
et al. (1983)). They are given by



         &,(a, a2)=      ( fjziz,)
                         \r=1
                                -’ i   /   t=1
                                                 zi exp(x,a)       exp g,


         V+(a,a2)= +        $ exp(2x,cr) exp(2a2)
                         -rl,,cr2(~I             z,expx,a)             *jil z:z,
                            T                                      (

2.4.3.      Polytomous          logit versus sequential        logit formulations


Another classical example (Hausman and McFadden       (1980)) is found in discrete
choice models. Let us consider the case of three alternatives,  i = 1,2,3, and the
2594                                                                         C. Gourieroux   and A. Monfort


conditional    distribution of the indicator function of the retained alternative given
some attributes. The y variable is a qualitative variable and the model is completely
defined by the conditional        selection probabilities.  Two formulations     are often
examined.     Under the independence         from the irrelevant    alternative hypothesis
(I.I.A.), the selection probabilities    have a polytomous    logit form

       H,={g(l/x,;cr)=(l       +expx,,cr,      +expx,,a,)-‘,
               g@/x,;cc) = expx,,cc,(l      + expx,,cr,     + expx,,a,))‘,
               g(3/x,;a)   = expx+,(l       + expx,,a,      + expx,,a,)-‘,       EEA},               (2.16)

where g(i/x,;cc) denotes the probability      of choosing alternative   i given the x
variables. Such a model describes choices deduced from a unique utility maximi-
zation among the set of alternatives   { 1,2,3}.
   However other models describe the idea of sequential        choices: a first choice
between 1 and {2,3}, then if the second subset is retained, a choice between 2 and
3. We get the so-called sequential logit model

         H, = {Wlx,;8) = (1 + expx,,P,)-‘,
               Wx,;P) = evx3,B1(l + expx,A-‘(1 + expX41/j2)-13
               h(3/x,; 8) = exp xJfBl exp x&(1            + exp xjtB1)- ‘(1 + exp xqlB2)- ‘, RB}.
                                                                                              (2.17)

As before, the distributions       are conditional        to the set of all regressors        xit, x2*, xjt,
X4,.




2.4.4.     Choices between macromodels

Other examples exist in macromodelling:        choice between New Keynesian            and
Classical models (Dadkhah and Valbuena (1985), Nakhaeizadeh            (1988)), between
models defined through Euler conditions corresponding       to different optimizations
(Ghysels and Hall (1990)) and between equilibrium        and disequilibrium      models.
This last example is particularly interesting, since the usual equilibrium      and dis-
equilibrium models are generally defined by different kinds of conditional      distribu-
tions. Let us introduce the demand and supply functions, depending on a price p
and on exogenous variables x,z. The latent model is

          D, = up, + x,ct + ut,

          St= b, + zrb’+ r~r>

where for instance (ut, VJ is, conditionally          to x, z, normally        distributed    with a zero
mean and a variance-covariance       matrix          denoted by 0.
Ch. 44: Testing Non-Nested             Hypotheses                                                          2595


   In the -equilibrium               model the exchanged         quantity   and the equilibrium    price are
defined by

          Q, = aP, + x,a + u,,
          Q, = bp, + z,B+ u,,

and this model leads to a parameterized                        form for the conditional    distributions    of
Q,, P, given q,z,.
   In the disequilibrium    framework, the prices pt are assumed to be exogenous and
the exchanged quantity is defined as the minimum of supply and demand: Q, =
min(D,, S,). The disequilibrium     model leads to a parameterized         form of the condi-
tional distribution    of Q, given pI,xt,z,. Since the two models do not correspond
to the same kind of endogenous            and exogenous       variables, they can only be
compared by increasing        or decreasing the information.         A first possibility   is to
ignore the information     on the distribution     of prices in the equilibrium     model and
to compare the form of f(Q,/p,, x,, zt) in the equilibrium       and disequilibrium      models.
A second solution is to complete the disequilibrium               model by adding a price
equation explaining how the price depends on x and z; with this enlarged model
we may determine the conditional        distribution    f(Q,, pJx,, z,) and compare it with
the specification associated with the equilibrium          model.


2.4.5.      Separate families           in time series analysis

The last examples that we present                       deal with time series. These examples are
generally linked with the determination                   of the autoregressive or the moving average
orders, i.e. the so-called identification                problem (see, e.g. Walker (1967) j.

2.4.5.1.    Choice between autoregressive and moving average representations.          Let
us consider a centered time series (Y,, tcN), whose dynamics is of interest. It is
natural to first test if this series satisfies the white noise properties and, if this
hypothesis is rejected, to propose a more complicated        specification.   Two simple
specifications   may be introduced,  an autoregressive   representation     of order 1


         Y, = pY,_ I + ut,            U, ‘v I.I.N(O, a*),


and a moving               average    representation        of order   1,


         y, = E, -   BE,    _   1,   E, - I.I.N(O, Y/*).


These two hypotheses are partially non-nested                          and their intersection corresponds
to the white noise processes. The comparison                           between the two previous models
Ch. 44: Testing Non-Nested       Hypotheses                                                         2599


E denotes       the conditional          expectation       with   respect   to g(y/x;a,)    and   E the
                                                                                                  X
zxpectation     with respect to f&x).

Then if V- and V*- are generalized inverses of I/ and I/*, if c- and c*- are
consistent estimators of these generalized inverses and if d and d* are the ranks of
V and V*, we deduce from Proposition       3.2.1 that the Wald statistics




are asymptotically   distributed under H,, as chi-squares                   with d and d* degrees of
freedom respectively (see Cox (1961) for <FL, Gourieroux                    et al. (1983) for <yZ). It is
easily seen that d - d* is nonnegative.


Dejnition     3.2.2

The Wald tests of H, against H, consist in accepting H, if ;“rl < xt _,(d)[resp rp2 d
x: _,(d*)], and in rejecting it otherwise (E is the asymptotic level of the test).


Remark 3.2.3

It is easily seen that the previous testing procedures coincide with the usual Wald
test in the special case of nested hypotheses. Indeed let us assume that


     MY,/x,;B)= khlx,; Y, CI), wherep’ = (y’,a’)‘,
and that the null hypothesis             is defined     by constraining     y to be zero:

     dytlx,; ~1)= k(y,lx,;0,a).

  The pseudo-true         values are


     b(cz)= b&)       =
                          0O
                          ci    ’

and the two previous           test statistics   trl,   rp2 are equal. Moreover      we have
Ch. 44: Testing Non-Nested   Hypotheses                                           2601


evaluated at the estimated pseudo-true value. Depending on the computability        of
the asymptotic pseudo-true  value, we may consider either



                                                                                  (3.4)


or


                                                                                  (3.5)



In the special case of nested hypotheses l$) and ;i(T2)are equal and coincide with the
usual score evaluated under the null.
   The asymptotic      distributional properties of the estimated    scores have been
derived in Gourieroux et al. (1983); they are summarized in the following proposition
(for the i.i.d. case).


Proposition   3.3.1


Under the null hypothesis H,, the random vectors (l/J?)@’       and (l/J?)@       are
asymptotically   normal, with zero mean and asymptotic variance-covariance     matri-
des respectively given by


       w=ctltl- GgCgglCgh,
      w* = C& - C&,tCgh.

The matrices W and W* have the same ranks d and d* as the matrices          V and V*
introduced for the Wald procedures.


Proposition   3.3.2

If I$- and @*- are consistent estimators (under the null) of generalized   inverses of
Wand W*, the score statistics are defined by
2602                                                             C. Gourieroux and A. Mocfort


They are asymptotically        distributed under H,, as chi-squares with d and d* degrees
of freedom respectively.        The associated critical regions with asymptotic    level c
are




and

       {t”,‘> x:-,(d*)>.


3.4.    The Cox procedure

In the two previous subsections we described natural extensions of the Wald and
score test procedures. We now consider the third kind of procedure: the likelihood
ratio test. The extension was first introduced          by Cox (1961,1962) and studied
in detail in a number of other papers (see, e.g. Jackson (1968), Pesaran (1974),
Pesaran and Deaton (1978)).
   The idea is to consider, in a first step, the usual likelihood ratio (LR) test statistic,
and to study its asymptotic distributional        properties. Since under the null hypo-
thesis, the LR statistic divided by T tends to a non-zero limit, this limit is, in a second
step, estimated and used to correct the usual procedure.           More precisely let us
consider the maximum log-likelihood          function evaluated under H, and H, res-
pectively:




                                                                                        (3.6)



       Lh,&)= max i logh(y,lx,;B)
                       p t=i

              = f: WWxt;&).                                                             (3.7)
                 i=l



  The usual LR statistic        is defined   by




          = 2   ,ilClog4+/x,; fir)- logdytlxt; 411.                                     (3.8)
2604                                                                                          C. Gourieroux and A. MonJort




where u, is the E quantile of the standard normal. The asymptotic level of this test
is E; moreover this test is consistent for the distributions of H, which do not belong
to H,. (Note that C, is sometimes replaced by - C,; in this case the critical region
must be changed accordingly.)

Proof

We essentially have to explain why the critical region is one-sided. For this purpose
we consider the asymptotic behaviour of C, under the alternative H,. We denote
by a(Pe) the asymptotic pseudo-true   value of c( associated with the true value, /IO,
of fi. We get

                                       h(Y/X;P,)
                               log


                          E log
                             W/X; II
                                     9( y/x;       a&J)


                                             bC4Bo)l)
                     - d8o)
                          [             9(y/x; 4Bo)) x


   This limit is strictly positive (except if the hypotheses are partially non-nested
and if the true p.d.f. belongs to both hypotheses) and under the alternative the Cox
statistic tends to + co, which explains the one-sided form of the test.

Remark 3.4.3

In practical situations the marginal distribution of the exogenous  variables                                           is
generally unknown and it may be interesting to consider the modified version                                            of
the Cox statistic


  cT    =   +:(8T)    -   L;(dT)]       -   +,fl        E    {log   h(Y/X,;        &T@T))     -   l”gdy/x,;   dT)/Xt)




                                                    ;[L:(fi,(,)               -   L;(dT)]/x
                                                                                                  1
However such a modification     will necessitate the determination   of the asymptotic
variance of ET which is different from the asymptotic variance of CT.
   The explicit form of the Cox statistic or of its modified version has been derived
and interpreted in several econometric models (Pesaran (1974) Pesaran and Deaton
(1978), Fisher. and McAleer (1979), White (1982b)).
Ch. 44: Testing Non-Nested    Hypotheses                                                            2605


Remark 3.4.4

The use of the Cox statistic is only valid under the regularity condition 0; # 0, i.e.
if the difference logg(Y/X; a,) - logh( Y/X; b(a,)) does not belong to the vector
space generated by the components     of




When H, is nested in H,, we get (see Remark 3.2.3) h( Y/X; @a,)) = k( Y/X; 0, ao) =
g( Y/X; Q) and wi = 0. Therefore   the Cox procedure does not apply in the simple
case of nested hypotheses. It does not apply either if the two non-nested hypotheses
are “orthogonal”.    The second case is especially clear for linear models (see
Section 3.5).

Remark 3.4.5

Different modifications of the Cox statistic have been introduced                    in the literature.
The most popular one is Atkinson’s variation defined by


         CA, = f {L;CW,)l - L;(b)} - H(d,).

   It is such that


         CA, = C, +      +~(e,)l- L;[&l) d C,,
since flT gives the maximum           of L!j_, and it is asymptotically      equivalent   to C, under
the null.



3.5.     Application     to the choice of regressors      in linear models


3.5.1.     The estimated pseudo-true        values


Let us consider        two Gaussian     linear models

          H, = {Y = X,y + u,          u - N[O, &d]},
                                                                                                  (3.10)
          H,={Y=X,6+v,                o-NIO,rZId]}.

The matrices     X, and X, have respective            sizes (n, K,), (n, K,) and their ranks are K,
                                                                                C. Gourieroux   and A. Monfort


and X,. The parameter              is


      CX=             for H,,


      /J=      6     for H,.
             0 T2

Let us denote by Pj = Xj(X;Xj)-‘Xi,   j = 1,2 the orthogonal                            projector     on the
column vectors of Xj and Mj = I - Pj. We get


                              (xix,)-lx;


                          i
                                +Yll’
                              (xix,)-       lx;
                                                                                                        (3.11)
                                $f2Yf12



and

                               (x;x2)-'x;x,?T
      hT(BT)=

                     +‘,YJ”+                 ;i!M2X,f,/i2
                                                               i

                              (x;x,)-'x;P,           Y
                                                                                                        (3.12)
                     ~11~,~112+~11~2~~~112
                =i




3.5.2.      An interpretation           of the extended     Wald statistic

The difference       between       the two estimators         of the pseudo-true     value b(a,) is

                                                          (x;x2)-'x~(y-x,Y*T)
         fi[bT-bT(6iT)l           = fi


                                              i


  It may be proved (see, e.g. Gourieroux      and Monfort (1989)) that the second
subvector is asymptotically equivalent to a linear combination of the first subvector
under the hypothesis H,. Therefore the Wald statistic measures the distance between
Ch. 44: Testing Non-Nested      Hypotheses                                                      2607


zero and




   This quantity is an inner product between the residuals of H, and the exogenous
variables of H,. Therefore the procedure is asymptotically      equivalent to a score
test of the hypothesis H, = {S = 0) in the artificial nesting model

     Y = x,y +       r?,s+w,
including all the explanatory           variables   2, of H, not spanned     by those of H,, i.e. to
the usual F test.


3.5.3.      The Cox statistic

Let us consider the modified           version of the Cox statistic    (see Section   3.4.3). We get
(Pesaran (1974))


         L;(p)=   -~log2n-~logr’-~,,Y-X26,,~,


         L+(cI)= -~log2n-~loga’-Zfr’,,Y-X,y,,2,


   EL;(p)=        -~log2n-~logr”-~-2j21X,~-X26,,“,
   CI


   EL;(a)=        -~log2n-~logrr”-;.
   CI

We deduce that




where ?c = l/T 11 M, Y 11 2 is the maximum     likelihood             estimator   of 52 under   the
alternative and ?c is the estimated pseudo-true     value


     f;= ~IllWl12            + I/M,~,Yl121.
2608                                                           C. Gourieroux and A. MonJivt


   Therefore, the Cox statistic is directly given as a simple function of two estimated
variances. This kind of result is valid for any Gaussian regression model, including
nonlinear regression or multivariate     models (after replacing the scalar variances by
the determinants   of the residual variance-covariance      matrices). Fg may be seen as
the residual variance of H, expected under H, whereas ff is the actual estimate of
r2 under H,. “A positive Cox statistic indicates that the actual performance is better
than expected. A significantly positive statistic leads to rejection of H, because H,
is performing too well for H, to be regarded as true.” (McAleer (1986)).
   It may be noted that when the two hypotheses are orthogonal,          the Cox statistic
e, still has meaning even if the Cox procedure cannot be directly used. More
precisely we get, in this special case,




and


       z; =!,ogLY?
        T   2      IIM,Yl12’

This statistic is a simple function of the variable T 11P, Y l12/)lM2 Y II2 which is
asymptotically   proportional  to a chi-square under H,. Contrary to the general case
described in Proposition      3.4.2 the Cox statistic no longer follows a normal
distribution.



3.6.    Applications   to qualitative   models

Let us consider a framework including, as a special case, the polytomous logit versus
sequential logit example of Section 2.4.3.
   We assume that the endogenous        variable associated with the choice among K
alternatives  is defined by ytk = 1 if k is chosen for the tth observation and ytk = 0
otherwise. The two competing models are


       H,: P(Y,, = 1)= &Ax,,4,
       H,:P(y,,i= 1)= “h&t,BX
2610                                                                     C. Gourieroux   and A. Monfort


and




We obtain,     for instance


                                   [diag g - @j’] diag      L E      :
                                                          0 h apt- I

where the matrices are evaluated at ~1~and b(cr,), and g (resp x) is the vector
whose components       are & (resp &).
   Similar expressions    are obtained for C,, and C,,. Consistent    estimators    are
obtained by replacing f by the empirical mean, ~1~by 8, and b(a,) by fiT or bT(Oir.).


4.     Artificial nesting models

The basic idea of artificial nesting methods is to introduce a third hypothesis in
which both H, and H, are nested and characterized     by some equality constraints.



4.1.      Examples

We describe     some general nesting        procedures    and some specific ones.

4.1 .I.    Quad’s    procedure (Quandt          (1974))

The idea is to introduce the compound              model made of mixtures       of the distributions
of H, and H,. This model is

       ~4= ((1- Mytlx,; 4 + Wy,/x,; D),                   k[O, 11, CEA, /MI}.                      (4.1)

The basic hypotheses          are defined by the constraints

       H,={A=O}         and       H,,={;l=l}.

The procedure consists in testing {A = 0} against {A 3 0} and {A = l} against {A < l},
i.e. in applying a one-sided t-ratio test to the parameters 2 or 2 - 1. It is possible
that both hypotheses        are not satisfied. In such a case H, and H, will be
asymptotically     rejected by the testing procedure and it will be possible to get an
estimate f, of the parameter         2 significantly  different from 0 or 1. In some
applications    such a value of 2 may be interpreted.
Ch. 44: Testing Non-Nested   Hypotheses                                                           2611


   Let us consider the choice between polytomous           and nested logit models (see
Section 2.4.3). The nesting model may be seen as describing the average choice of
a group of individuals, some, a proportion   1 - 2, selecting the alternatives according
to the polytomous     logit form and the others, a proportion    I+, in a sequential way.
&- may give an idea of the decomposition           of the population       into these two
subgroups.


Remark 4.1 .l

Even if such a compound model is attractive, it has the usual drawback of mixtures.
Under the null hypothesis   H, = {,I = 0}, the parameter      fi is not identifiable.
Therefore the asymptotic properties of the M.L. estimator of a, fi, 1, obtained by
maximizing


         maxi logcu- MYtlx,;              co+ %y,lx,;        P)l,
             t=1

and the properties of the t-ratio test are unknown          except in special cases. This
difficulty is at the origin of several papers whose aim is either to compute directly
the distribution   of some test statistics under specific formulations  of the hypotheses
(Pesaran (1981, 1982a)) or to introduce          some change of parameters       or some
identifiability  constraints (Fisher and McAleer (1981)).


4.1.2.     Atkinson’s procedure (Atkinson       (1970))

Atkinson proposed a similar procedure in which the compound                          model is derived
by considering exponential combinations. The model is


     M = i Kdy,lx,; a)’-ih(~,lx,;          BY,
where



                                                    1
                                                        -1
                        a)‘-“NY/x,; B)“dv,W ,                       1~CO,ll,   ad,               (4.2)


This nesting model has two drawbacks.           First, as for Quandt’s procedure,   p is
unidentifiable  under H, (and a under W,) and this creates many difficulties in
performing the tests (see, e.g. Pesaran (1981)). Second, the model is only meaningful
if the function g(y/x,; a)’ -“Q/x,; p)” IS integrable for AE[O, 11, a condition which is
not always satisfied.
    However the identifiability   problem may be solved in particular cases.
2612                                                                            C. Gourieroux   and A. Monfort


Example      4.1.2

Let us consider         two linear hypotheses

         H,=~Yt=w+ut~                  4 - I.I.N(O, l), t = 1,. . ., T},

         H, = {yt = xd      + u,,      u, -   I.I.N(O, l), t = 1,. . . , T}.

The distributions        of the nesting model have p.d.f. l(y,/x,; y, &A) which are proportional
to

         exp (-   +(l - J*)(y, - xi,y)’ - $n(y, - xzt6)2)

or to

         exp I-   $CY, -(x1,(1      - 0~ + x2J412).

    Therefore the distributions   of the nesting model are such that y, is conditionally
normal with a unit variance and a conditional        mean obtained by simultaneously
introducing   the variables of the two initial models. If for instance xi and x2 have
no common component,          we may introduce the new parameters

         y* = (1 - A)y,     s* = U.

Whereas y, 6, I are not identifiable in the nesting model the transformed parameters
y*, S* are. The same is true for the hypotheses H, and H, which are characterized
by the constraints  H, = {6* = 0}, H, = {y* = 0} which only depend on 6* and y*.
This kind of result may directly be extended to multivariate          Gaussian models
(Pesaran (1982a)).

4.1.3.      Mixtures     of regressions

We have seen that for regression models Atkinson’s procedure is equivalent         to
considering   the regression which is the convex combination     of the two initial
regressions. This kind of nesting procedure may be directly applied to nonlinear
regressions, even in a semi-parametric framework. With the two nonlinear regression
models

         ff, = {E(Y,/x,) = m(x,;4, =A},

         H, = {E(Y,/x,) = Axt; 8, DEB},

we can associate         the nesting      nonlinear      regression     model


                                                                                                          (4.3)
Ch. 44: Testing Non-Nested          Hypotheses                                                        2613


4.1.4.          Box-Cox       transformation      (Box and Cox (1964))

The Box-Cox                transformation       of a positive   variable    y is defined by


         y(l)    =   Y”
                     -, - l      A#O,
                          A

         Y(A) = log Y9           A=0                                                                 (4.4)

This transformation    reduces to the logarithmic     function for 1= 0, and to a linear
function for I = 1 and is often used for nesting linear and logarithmic formulations

         H, = {log yt = x,a + u,,              u, - I.I.N(O, o’)},

         H, = (y, = x,/3 + u,,          u, - I.I.N(O, q’)}.

  As soon as the regressions                contain     a constant    term we may consider    the nesting
model

                      A

                     Y;’      = x,y + q,        o, - I.I.N(O, .r2),   &CO, l]      .


The two initial hypotheses are characterized       by H, = (2 = 0} and H, = (2 = l},
respectively, and may be tested by the usual t-ratio test (see Zarembka (1974), Chang
(1977)) or by applying a t-ratio test after a Taylor expansion of the models around
a pre-assigned     value (2 = 0) on (2 = 1) (Andrews (1971), Godfrey and Wickens
(1981)).
    In the nesting model it is assumed that the error term u is normally distributed
with mean 0 and variance TV. Strictly speaking this assumption       is untenable since
y,(l) cannot take values less than - l/2. This difficulty can be circumvented        by
truncating o, in some fashion (Poirier and Ruud (1979)), but as noted by Davidson
and McKinnon        (1985a) it seems “reasonable  to ignore the problem which would
occur with small probabilities”.


4.13.           A comprehensive        model for autoregressive       and
                moving average representations

In some applications    a natural embedding      model appears. Let us for instance
consider the two hypotheses of an autoregressive and a moving average representation
of order one:

         H, = (y, = py, _ 1 + Ed, Ewhite noise),
         H, = (y, = qr - Or],_ 1,           q white noise).
2614                                                                             C. Gourieroux and A. Moniorort


A comprehensive          model is the ARMA(l,l)               representation

       M = {y, - (~~y,_~ = u, - fl,u,_,,              u white noise}.

As noted in Section 2.4.5. the initial models are regression                     models with constrained
coefficients



       WYtlY, - 1)= PYt- 1                                                     for         H,,

       E(y,/y,_,)=       -By,_,         -82y,_2-       ... -8ky,_k-      ...   for         H,,



where YY,-~ ={yt-i,   Y,-2,... }, and the comprehensive     model is not obtained by
taking linear combinations     of the two previous regression functions since we get

       E(y,/y,-r)=(cpi       -8i)y,_r          + ... +(cpi -8i)8:-‘y,_k+             ...     under   M.


4.2.      Local expansions of artificial nesting models

In a series of papers Davidson and McKinnon      proposed a simple method for solving
the identifiability  problem appearing in mixtures of regressions. We first discuss the
idea in the case of linear regressions and then we describe the general results
concerning the so-called J- and P-tests.


4.2.1.     Linear regressions

Let us consider      two linear regressions             with different     sets of regressors


         ff, = {Y, = XI~Y + u,, u, I.I.D, E(u,/x,) = 0, V(u,/x,) = a*, t = 1,. . . , T},

         H, = {Y, = ~24     +     u,,    u,   I.I.D, E(o,/x,) = 0, V(u,/x,) = r2, t = 1,. . . , T},

and the associated         mixtures


         M =    y, = (1 - I)x,,y + 1x2,6 + o,,              o, I.I.D, E(w,/x,) = 0, V(o,/x,)                = q2,


                                                                                           t = 1,. . ., T     .   (4.6)


To circumvent        the unidentifiability of parameter 6 under the null H,, Davidson
and McKinnon          (1981) proposed an approach which is different from the simple
Ch. 44: Testing Non-Nested       Hypotheses                                                                2615


change of parameters given in Example 4.1.2, and which can be extended to more
general problems (see Section 4.4). The idea is to replace the nuisance parameter 6
by its estimator under H, instead of using its estimator under M. Therefore the
nesting model M is replaced by a pseudo-nesting      model

     M* = {y, = Xlty* + n*x,,& + o:,                               t = 1,. . .) T},                       (4.7)

where 8, is the O.L.S. estimator of 6 based on H,.
   Clearly in this formulation    the second kind of regressors X,&       depends on
Yl,...? y, through the estimator &.; they are partly endogenous and the error terms
are correlated. However Davidson and McKinnon          (1981) proposed to omit these
difficulties and to study directly the asymptotic   properties of the t-ratio statistic
associated with A*, computed as if & was non-random           and the w:‘s were error
terms satisfying the usual conditions. The O.L.S. estimator of A* in the regression
of y, on xIt,xJT   is


     1; = {&x;M,x,&}                  - l6;x;M,              Y,                                           (4.8)

and the associated       t-ratio      statistic        is given by


                    (l/fi)&X;M,                 Y
        T2 =                                                                                               (4.9)
               sT[(l/T)~~X;M,X,s^,]“”

where rj’, is the usual estimator                  of the variance:




Under     the null hypothesis          H,,       8r tends to the pseudo-true            value

     4hJ = C&;x,)l +E(x;x,)y,,

fl’, tends to G: the true value of the variance                           and the denominator   of the t-ratio
statistic converges to


     %P%+JCw$x,)             -     E(x;x,)(Ex;x,)-‘E(x;x2)]d(yo))1’2.



  The numerator        of TA is equal to
2616                                                             C. Gourieroux   und A. Mocfort


   It is asymptotically normal under H,, with a zero mean and a variance             equal to
the square of limit of the denominator:


       ~;bwb)C~(x;x,)- ~(x;x,)(~x;x,)~'~(x;x,)l~(~,)}.
Two cases have to be distinguished:

 (i) the denominator     is asymptotically different from zero making the t-statistic
     asymptotically  standard normal,
(ii) the denominator   tends to zero making the limit of the T,-statistic undetermined.

   The denominator     tends to zero if either d(y,) = 0, i.e. if x1 and x2 are orthogonal
regressors, or if E(x;xJ - E(x~xl)(Ex~xl)-‘E(x~x,)         = 0, i.e. if the regressors x2 are
linear combinations     of the regressors x1.

Proposition      4.2.1

If the regressors x1 and x2 are non-orthogonal       (Exix, # 0) and if H, is not nested
in H,, the t-ratio statistic TL has asymptotically       a standard normal distribution
under the null. The Davidson-McKinnon        test consists in rejecting H, if 1TA1> u1 _-E,2,
where E is the asymptotic level and u1 --E,2the 1 - c/2 quantile of the standard normal
distribution.

In the previous proposition     we gave a two-sided version of the test; however, as for
the Cox test, it can be seen that the one-sided test whose critical region is {T* > u1 -E}
has an asymptotic      level equal to E and is consistent    (except if x26,, is a linear
combination     of the components    of x1).
   The previous test has been called the J-test by Davidson and McKinnon.             It is
also worth noting that there exists an exact version of this test, called the_JA-test (A
indicating the Atkinson variant of this test), which is the usual t-test of I = 0 in the
regression

       y = x,7    + ;iP,P,y   + 63,                                                     (4.10)

where

       Pj = I - Mj = Xj(XJXj)-        ‘XJ,   j=   1,2.

   The difference between this pseudo-nesting model and model M* given in (4.7)
is the replacement   of X,6, = P,y by P,P,y. Since the right hand side of (4.10)
depends on y only through Ply, the t-statistic on 5 has the t distribution with
T - K, - 1 degrees of freedom, where K, is the number of columns in X, (see
Milliken and Graybill (1970)).
Ch. 44: Testing Non-Nested Hypotheses                                                                            2617


4.2.2.     Nonlinear     regressions:       the J-test

The previous       approach         may be directly       extended       to nonlinear      regressions

         H, = {Y, = m(x,; Y) + u,,          u, I.I.D, E&/x,)     = 0, V&/x,)          = r~‘, t = 1,. . . , T},

         H, = {it = Ax,; 4 + u,,            u, I.I.D, E(u,/x,) = 0, V(u,/x,) = ~~~ t = 1,. . . , T},

and to the set of mixtures

         A4 = { y, = (1 - i)m(x,, y) + Ap(xt, 6) + q,            CO,I.I.D, E(w,/x,) = 0, V(o,/x,) = v2,

                                                                                               t= l,...,T        .


   This model is replaced             by the pseudo-nesting          model

         M* = {yt = (1 - A*)m(x,, y*) + A*p(x,, &) + o:,                   t = 1,. . . ) T},                (4.11)

where s^, is the nonlinear     least squares estimator of 6 under H,. Then we can
compute the nonlinear least squares estimator of I*, y* under M* as if 8, was a
constant    and the t-ratio statistic    TA was associated     with A*. The following
proposition    is the analogue of Proposition    4.2.1, and, as in this proposition, the
two-sided test can be replaced by a one-sided test.

Proposition      4.2.2

Under regularity conditions, the t-ratio TA has, under H,, an asymptotic standard
normal distribution. The so-called J-test consists in rejecting H, if 1TAI> u1 -E,2.

4.2.3.      Nonlinear        regressions:   the P-test:

The previous J-test necessitates      the determination     of nonlinear least squares
estimators of some parameters.     It is possible to develop a procedure which only
uses linear least squares. For this purpose we may consider an expansion of the
regression model M* in a neighbourhood          of the null hypothesis. More precisely
since the true value y0 is unknown, we introduce the expansion around yT, the least
squares estimator of y under H,. We have

         (1 - A*)m(x,, y*) + A*/L(x,, &, + C0:

            = (1 - A*) m(x,; j$-) +
                                            a4x,; 2%)(Y* - M             + ~*P(x,; &) + 0:
                         i                      w                    I

            = m(x,; Y^T)+ A*[p(x,; s^,, - m(x,; &)I + am;;:                %) c + cot*,
2618                                                                     C. Gourieroux       and A. Mmfort



where c is an unknown         parameter.      Therefore      an “expansion”      of model       M* is


       M** =                         $4- 4x,; &)I
                 it = 4x,; M + ~*CP(X,;
                    am
                  + -(x,;   jqc   + Cot**, t = 1,. . . ) T    .                                      (4.12)
                    a?!

Let us now consider the asymptotic properties of the t-ratio statistic Ti for A* in
M**, computed as if pr, 8, were deterministic and the error terms CO:* had the usual
properties of white noise. Let

       h = [4x,; &)I,         P = cl&; &)I>

6 be the matrix of derivatives (am/aY’)(x,; 8,) and I?, the orthogonal projector on
the space orthogonal to the space spanned by the columns of d. The t-ratio statistic
is


       T: =         (P - W&dY - 4
              tj { (p - &i)‘G,(p - rfi)} liZ’

where q2 is the residual     variance.     It has the same asymptotic         distribution      under H,
as the statistic

         (P- m)‘Mdy- 4
           - m)‘M,(I* - Nl””
       ~oC(P

                           dbdl~ D = CGWW)(x,;RJI.
wherem = (m(x,;Y~)AP = CP(X,,
   Using the same arguments as for the linear case, we get the following                     proposition
(given with the two-sided version of the test).

Proposition    4.2.3

Under the condition plim (l/T)(p - m)‘M,(p - m) # 0, the statistic TT has asympto-
tically a standard normal distribution under the null H,. The P-test consists in
rejecting H, if I Tt I > u1 -E,2.



4.3.    A score test based on a modijed         Atkinson’s compound model

We have seen that the artificial nesting model obtained by introducing     the convex
combinations   of two nonlinear    regressions was a special case of the Atkinson’s
compound     model. Moreover     the modification  of this artificial nesting model
Ch. 44: Testing Non-Nested       Hypotheses                                                         2619


considered     by Davidson     and McKinnon     was mainly intended    to solve the
identification   problem of the a-parameter    under the null 2 = 0. Therefore, it is
natural to look for a potential extension of the DavidsonMcKinnon       procedure to
the Atkinson’s compound       model. More precisely let us consider this compound
model




We may introduce the modified compound model in which the unknown                           parameters
c( and /I are both replaced by the maximum   likelihood estimators                          oi, and br
computed under H, and H, respectively:


                  Qyt/xt; 2) =            dytlxt; 4)’ - Wtlxt; ih)”

                                     s
     ii   =
                                         dulx,; 4 ’ - 'k(u/x,;
              i

By analogy with the DavidsonMcKinnon                          approach, we define the score statistic
for testing the hypothesis (2 = 0}, computed                  as if bi, and Jr were deterministic. This
statistic is

                       T a i0g&(y,/~,;        0)       1 T   a iogfT(y,/x,;0) 2 - 1’2
     ‘=$t:l                          aA
                                                   [     (
                                                       Tt?l        a2        11      ’
                                                                                                  (4.13)


What are the properties of this statistic?
 Let us first consider the numerator.     It is easily seen that


     alog.L:T(YJx~;
             ~
               0)
                  = log khlx,; &I - log shlx,; a,) -
                  an
                                 -   logg(ulx,;~,)lg(ulx,;b)dv,(u),
                                                                            s Clog&lx,;   b-d


and that the numerator               is equal to




                                                                                                  (4.14)

where L,,(flT) and L&&r) are the maxima of the likelihood function under H, and H,
respectively. Therefore the numerator has an expression which is analogous to that
2620                                                                    C. Gourieroux   and A. Monfort


of the Cox statistic except that the estimated pseudo-true          value b(&,) has been
directly replaced by a, (such a replacement       was initially proposed by Atkinson
(1970)). It is easy to check that the numerator    is asymptotically     equivalent under
the null to the numerator ofthe Cox statistic; in particular it has the same asymptotic
variance given by


       w=     ~~/,,(logh-logg)-Cov,,           logh-logg,Z
                                           (                      1

              X [ V~O(~)]~‘cov~O(~Jogh-logg),                                                   (4.15)


where log h, logg and ag/aa are evaluated at (&a,), a,,) and where V,,, Cov,, are the
variance and covariance under the null.
   The denominator   of the score statistic computed as if oi,, p^, were deterministic
tends to the square root of




which is always larger than the true asymptotic variance W.
  Therefore this first extension of the Davidson-McKinnon approach to Atkinson’s
compound model does not produce a test with the right asymptotic size.
  More precisely we get the following result.

Proposition     4.3.1

Let us consider the score statistic Fs computed              as if oi, and IT were deterministic,
and also the corrected score statistic




where @is a consistent         estimator   of W under        the null

  (i) 5’ is asymptotically equivalent to the Cox statistic,
 (ii) 4””gives a procedure with an incorrect asymptotic level,
(iii) the critical region based on I?/ is conservative,     and the null hypothesis                  is
      accepted too often.

It is worth noting that 4”sis easier to evaluate than 4”. If the use of p leads to the
rejection of the null hypothesis, we can conclude (without computing      5s) that the
null hypothesis must be rejected.
Ch. 44: Testing Non-Nested       Hypotheses                                                       2621


4.4.     The partially      modijied   Atkinson’s     compound    model

In fact in their approach Davidson and McKinnon     only replace the parameter of
the alternative model by its maximum likelihood estimator. The same idea may be
followed with the Atkinson’s compound      model. We now consider the partially
modified compound model in which only /3 is replaced by the maximum likelihood
estimator p^, computed under H,:


       ii*   =    J‘*,(y,/x,;2, a) = ~        ~(Y,/x,; 4’ - ‘hbtlx,;fl,)”                       (4.16)




We then define            the score
                                        s g(nlx,; a) 1- ‘h(u/x,; &.)” dv,(u)


                                       statistic    for testing   (2 = 0} computed   as if br    was
deterministic:




where


       a 10gj:      a i0gj;
             a2    ’ a@

are evaluated at the constrained  estimators 2 = 0 and c1= 8,.
   With this correction, we get the following proposition.

Proposition       4.4.1


The score statistic tf           for 2 = 0 deduced from the partially modified         compound
model is asymptotically            equivalent to the Cox statistic under the null.



5.     Comparison         of testing procedures

In the comparisons of testing procedures we have to distinguish between asymptotic
results (such as the equivalence of two procedures under the null hypothesis, or a
comparison    of their asymptotic relative efficiencies) and finite sample results (such
as an exact comparison    or an evaluation of the difference between the small sample
2622                                                                  C. Gourieroux    and A. Monjiirt


significance level and the nominal     level). The asymptotic   results are generally
derived from a theoretical point of view, while the small sample results are obtained
from Monte Carlo studies except for simple models such as Gaussian linear models.



5.1.   Asymptotic     equivalence   of test statistics

We first study if the test statistics considered above are asymptotically       equivalent
under the null, i.e. if they differ at most by a negligible term in probability     o,(l). If
this is the case it is known that they have the same asymptotic distribution.     We have
seen before that the form of these asymptotic distributions      may be either chi-square
(several degrees of freedom) or univariate        normal distributions.  Therefore some
previously introduced      statistics, such as the Wald statistic and the Cox statistic,
cannot be equivalent and the equivalence may only be derived for particular pairs
of statistics.

Proposition   5.1.1

 (i) The extended Wald and score statistics          are asymptotically   equivalent      under the
     null hypothesis




 (ii) The Cox statistic and the score statistic based on the partially       modified
      Atkinson’s compound      model (and the J- and P-test in the case of regression
      models) are asymptotically   equivalent under the null.
(iii) The two Wald statistics <:I and i;r2 are generally not equivalent and they are
      not equivalent  to the Cox statistic (or to the J- and P-tests in the case of
      regression models).

The first part of the proposition   has been proved in Gourieroux          et al. (1983), the
second part is a consequence      of Proposition    4.4.1 and has been established         by
Davidson    and McKinnon       (1981) for the J- and P-tests. The third part is a
consequence   of the different asymptotic distributions    for the statistics x2(d), x’(d*)
and N[O, l] respectively.



5.2.   Asymptotic     comparisons    of power functions

Let us consider a consistent   testing procedure for testing H, against H,. This
procedure is generally defined by a critical region of the form (5r > cE}, where 5r
Ch. 44:    Testing   Non-Nested    Hppotheses                                                        2623



is the test statistic and c, a critical value chosen to get the right asymptotic            level:




The power function of this test gives the probability of the critical region under the
alternative hypothesis H,. It is a function of E, T and the parameter fi:

      P(E, T>p) = p,(tT           > Cc),                                                             (5.1)

where P, is the probability with respect to the p.d.f. corresponding to p in H,. Since
the tests previously defined are consistent, this power function tends to one when
T tends to infinity:

          lim p(~, T, /I) = 1,      VE > 0, /I.
      T+Ca



Therefore if (5iT,c1), (5 2T,c2) are two testing procedures associated with critical
regions (trT > cle), (cZT > cZE),they cannot be compared by examining the asymptotic
value of the power function at fixed arguments E,/I, since the limit equals one for
both procedures. But it is possible to study this power function for either a varying
p or a varying E.
   The first approach of a varying j? was introduced by Pitman (1948). The sequence
/jT of alternative    hypotheses has to be chosen in such a way that the associated
distributions    h(y/x; /IT) tend to a distribution g(y/x; a,) of the null hypothesis, at a
rate ensuring that the limits

          lim Pj(h T, PT) = lim PpT(<jT           >   CjJ   =   aj(E)   (say),   j=   1,2
          T+CC                    T-CC



exist and are different from zero and one. Then the first procedure is said to be
asymptotically     more powerful than the second if ai          > +(E), Vs. ‘The sequence
h(y/x; pT) is called a sequence of local alternatives.   For non-nested     hypotheses this
approach of local alternatives can only be used for some specific problems. Indeed
it needs partially non-nested    hypotheses in order to be able to build the local
alternatives   and even in such a case the local alternatives      can only be defined in
some special directions corresponding       to the intersection    of the two hypotheses.
Such an approach has been followed by several authors. Pesaran (1982b) considered
the case of two non-nested linear regression models, and proved that the local power
of the one degree of freedom tests (Cox test, J- and P-tests) is not exceeded by that
of the standard F-test, when the number of explanatory          variables is smaller under
the null than under the alternative.     Dastoor and McAleer (1982) extended the
previous results to the case of multiple alternatives and demonstrated        that Pesaran’s
result depends crucially on the type of local alternatives       specified. In general, it is
2624                                                             C. Gourieroux   und A. Monfort


not possible to rank the tests in terms of asymptotic local power. Ericsson (1983)
considered Cox-type statistics in the context of instrumental        variable estimation
and Gill (1983b) considered the general case of parametric hypotheses.
   In the second approach due to Bahadur (1960) (see also Geweke (1981)) the
alternative /I is fixed and the first type error cT tends to zero in such a way that the
limits

       lim Pj(ET,T, B)= lim Pp(SjT> CjJ= bj(B) (say), j= 1,2
       T-m                   Td’X




exist and are different from zero and one. The first test is said to be asymptotically
more powerful than the second if b,(b) 2 b&?), VP. This approach              seems more
suitable for non-nested     hypotheses but may be difficult to apply.
    The problem of fixed alternatives has been analyzed in some particular cases by
McAleer et al. (1982). Epps et al. (1982) introduced      a testing procedure based on
empirical moment generating functions and tried to maximize the power for fixed
alternatives.   Gourieroux    (1983) considered testing procedures based on estimated
residuals and looked for the optimal form of such test statistics using the Bahadur’s
criterion. The results are valid for the choice between non-linear     regression models
and show that the Wald test, the score test and the J- and P-tests satisfy the
optimality    condition,   while the Cox procedure does not. Pesaran (1984) gives a
general survey of both approaches by local and fixed alternatives.


5.3.       Exactfinite   sample results

 For some specific examples it is possible to determine the exact forms of the test
statistics and of their distributions  under the null and alternative hypotheses (or at
least an expansion of this exact distribution).
    The earlier papers were interested in discriminating      between some families with
common invariant sufficient statistics, in the i.i.d. framework. Dumonceaux            et al.
(1973) proved that the likelihood ratio does not depend on nuisance parameters for
discriminating     between normal and Cauchy distributions       and between normal and
exponential    distributions.  Dumonceaux    and Antle (1973) gave the table of critical
values for a test based on likelihood ratio statistics for discriminating        between a
log-normal     and a Weibull distribution      (see also Pereira (1977a)); some other
authors look for accurate approximations         of the finite sample distribution    when
its explicit expression is not available. For instance Jackson (1968) considered the
Cox statistic for choosing between a log-normal         model


                           lexp      _(l”gy- @A2
       [
           g(y;a)=
                     Y&2            (     2%     >I
Ch. 44: Testing Non-Nested       Hypotheses                                             2625


and an exponential      model



                                      B)I>
                 1
       (
       h(y;b)=-exp
                 B      I
                             -
                                  (
                                      y


(see also Pereira (1977a), Epps et al. (1982) for a study of this problem originally
considered by Cox).
   When some explanatory        variables are introduced    into the models, exact results
have been essentially derived for the choice between two Gaussian linear models, or
for the comparison     of two test statistics with closed forms. These results provide
some inequalities    between test statistics, Fisher and McAleer (1981) consider this
problem for Gaussian non-linear          regressions, Dastoor (1983a) establishes an in-
equality between two versions of Cox statistic: when the opposites of the statistics
given above are retained, the Atkinson’s version of the Cox statistic is smaller than
the Cox statistic itself, and therefore is less likely to reject the null hypothesis.
Determination     of exact distributions    of Fisher type (Dastoor and McAleer (1985))
and the comparison of exact power functions (Dastoor and McAleer (1985)) are also
dealt with. A summary of the expressions of the main statistics used in the regression
case and of the size and power functions of the associated tests in finite sample is
given in Table 2.4 of Fisher and Whistler (1982), for instance.



5.4.   Monte Carlo studies

Monte Carlo studies have been performed for more complicated                 examples. Dyer
(1973, 1974) compared          testing procedures    which are invariant     with respect to
location and scale parameters in the i.i.d. case. Pesaran (1982b) and Godfrey and
Pesaran (1983) considered the choice between two regression models by the COX
statistic or by modified versions of this statistic. They analyzed the effect of the
difference between the number             of regressors   in the two hypotheses,       of the
non-normality       of the error term and of the presence of lagged endogenous variables
in the regressions. Davidson and McKinnon             (1982) compared various versions of
the Cox test with the F-test, the J-test and the JA-test in the linear case.
   All these results are partial since they concern specific problems and specific
values of the parameters,           but they give some ideas on the behaviour          of the
procedures for small T. The main observations           are the following ones.
  (4 The finite sample size of Cox type tests can be much greate; than the nominal
      level. These tests reveal a tendency to reject the true model too frequently. This
      effect is also important for the J-test. However it seems possible to incorporate
      in the test statistics both mean and variance adjustments       in order to avoid such
      an effect (Godfrey and Pesaran (1983)). The simulations          by the authors show
      that these corrections       are partially successful. For instance the size of the
2626                                                               C. Gourimmx   and A. Monfort



      adjusted J-test is smaller than for the unadjusted J-test, but is still higher than
      the nominal significance level.
 (ii) The comparison      of power functions is difficult to interpret since the usual
      procedures do not have the same finite sample size.
(iii) The results are often very sensitive to the relative number of regressors in the
      two hypotheses and significatively       depend on the fact that this number is
      smaller or larger in the null hypothesis than in the alternative one. For instance
      the power of the J-test is poor in the second case.
(iv) The JA-test lacks power in several situations: when the number of regressors
      in the null hypothesis is less than in the alternative or when the true distribution
      does not belong to either the null or the alternative.
 (v) The finite sample sizes are not badly distorted when the errors have been
      assumed to be normal and follow another distribution       (log-normal, chi-square,
      etc). Similarly the ordering of the power functions          does not seem to be
      significatively modified.
(vi) When the sample size is reasonably large and the variance of the error terms
      reasonably small, all the tests perform in a satisfactory manner.




6.     Encompassing

6.1.    The encompassing    principle


In the non-nested       hypothesis testing procedures       that we have described in the
previous sections, we assume that the true conditional          distribution    belongs to one
of the hypotheses. This assumption can be considered as a strong one and, therefore,
it is interesting to see if it is possible to avoid this assumption.      This kind of idea led
to a tentative definition of the notation of encompassing       (Mizon and Richard (1986),
Hendry and Richard (1990)):

     One model encompasses another       if the former can account     for, or explain,   the
     results obtained by the latter.

   This notion can be used in a modelling strategy, in which we want to propose
more and more suitable models. These models have not only to take into account
some new interesting phenomena,        but they also have to be able to explain previous
results derived with the previous models.
   Theoretically    when two or more competing models are considered, it is possible
to define a general model in which they are all nested, and to assume that the true
distribution    belongs to this general model. This is the idea of artificial nesting and
historically   the first definition of encompassing   (see Pesaran and Deaton (1978)
Mizon and Richard (198 1) or Hendry and Richard (1982)). However in practice this
general nesting model will contain many parameters and will require an amount of
Ch. 44: Testing Non-Nested    Hypotheses                                                               2627


information     often larger than that contained in the available data. In fact, there is
room for more parsimonious        strategies of encompassing,    in which we do not have
to nest the models at each step in a more general model, nor to assume that a model
contains    the true distribution     (contrary     to the axiom of correct specification
formalized    by Learner (1978)). For developing           such a modelling strategy, we
have
 (i) to precisely define the notion of encompassing,
(ii) to modify the test procedures in order to take into account the fact that H, may
     encompass H,, even if neither H, nor H, is true.
    Since the notion of encompassing          is linked with model choice, we introduce
different notations in the rest of this section. The two competing models are denoted
by




instead of H, and H,. The true conditional                distribution    of y given x isf,,   and is not
assumed a priori to belong to M, or M,.

6.1.1.       Pseudo-true values and binding functions

As previously        meutioned,    the pseudo-true        values of the parameters         GINand CI*are
defined by

                               foy(Y/X)
     rxyO= argminEElog--------
                OL, X0       Y,(YlK a

              = arg max E E log g,(y/x; CQ),
                     b, X0

                           .foy(Y/X)
     a& = arg min E E log
               a2 x0      g,(ylx; 4
        = arg max E E log g,(y/x; a,),                                                                (6.2)
               a2 X0

where E is the expectation         with respect to the marginal          distributionfoX       of x, and E
                                                                                                             0
is the &nditional        expectation with respect to the true p.d.f. fo,(y/x).
   The proximity        between fo, and models M, or M, is


                                 .foy(Y/X)
         l[fo,,   Mj] = E E log ________ ~           j=     1,2.
                        X0
                                  CJj(Ylxi clj*o)’


In the same spirit we can, for any curEAT, define the value of Q, denoted                      by b,,(a,),
2628                                                                     C. Gourieroux   and A. Monfbrt


providing      the p.d.f. of M, which is the closest to gI(Y/x;a,),

       b,lh) = argmzxt E log g,(ylx; a,),                                                         (6.4)


and similarly




  The functions b,, and b,, are called binding              functions.     They only involve        the
models M, and M, and not the true distribution.

6.1.2.      Encompassing    (Mizon   and Richard      (1986))

The distribution     of M, (resp M,) associated with CYT~  (resp CX~,)can be seen as the
best representative     of M, (resp MJ and it seems natural to formalize the notion of
encompassing       by saying that M, encompasses          M, if, acting as if the best
representative    of M 1 was the true distribution, we find that the closest distribution
of M, is the best representative     of M,. This means that a& = bzl(aTo). Note that
this property depends not only on M, and M, but also on the true p.d.f. fO of
(Y>x).

Dejinition 6.1 .I

 (i) fO is such that M 1 encompasses          M, if and only if LX&,= b,,(aTJ.       This condition
      is denoted

       fO   s.t.   MI&M,.

(ii) fO is such that there is mutual encompassing         if and only if we have simultaneously
     fO s.t. MI&M, and fO s.t. M,bM,.



6.2. The encompassing        tests

6.2.1.      The encompassing     hypothesis

We want to define testing procedures            of the null hypothesis

         H, = {fO    s.t.   M,bM,}

            = IG,   = b&:,)>.                                                                      (6.5)

This null hypothesis        constrains   the unknown       p.d.f. fO, and the tests have to be
Ch. 44: Testing Non-Nested                   Hypotheses                                                           2629


considered without assuming a priori that foV is in M, or in M,. It is also clear that
H, is true if fey belongs to MI.
   It is natural to consider the test procedures previously introduced     for testing
non-nested     hypotheses   and to examine if they can be used for testing the
encompassing     hypothesis H,.

6.2.2.        Cox likelihood ratio statistic

The Cox approach                       is based on the following            statistic:


         s 1,=;          c       {logg,(Y,lx,;si,,)-logg,(Y,lx,;6i,,)}
                         f   1




                    -    ktfl         &fT    (logg,(Y,lx,;~,.)-logg,(Y,lx,;~,,)}.


Under         the null hypothesis                  He, this statistic    tends to

         plim slT = E E Clog,(Ylx;
                                 @To)- logg,(Ylx;                               @To)1
              T                  X0

                                 -    E E Clog&k             G,) - logg,(y/x;G,,l.
                                      x 40


This limit is equal to zero if the true conditional  p.d.f. belongs to M,. However it
is generally different from zero for the p.d.f. of Ho whose conditional   distributions
do not belong to M,. This shows that the Cox approach is not appropriate               for
testing the encompassing   hypothesis Ho. Obviously the same conclusion occurs for
the J- and P-tests, which are equivalent to the Cox test.

6.2.3.            The Wald encompassing                   test (WET)

The difference                   between the two estimators  of the pseudo-true     value aTo, i.e.
*
~1~~- b,,(oi,,),                 tends to zero under the encompassing   hypothesis.     Under Ho,
fi[B,,   - b,,(oi,,)]  is asymptotically  normal, but its asymptotic     variance-co-
variance matrix is different from the one given in Proposition  3.2.1 which has been
computed under the strict sub-hypothesis    M, of the encompassing    hypothesis Ho.

Proposition             6.2.1 (see Gourieroux                and Monfort        (1992))

Under         Ho, fi[oZ              2T - bZ1(ilr)]       converges     in distribution   to N[O, a,],     with

         0,       = K,-,‘[C,,               - C,,C;;CJK;;             + K,-,‘[CPIC;/      - K&$,,K,‘]C,,
                        x [C,,‘CIz            - K,,‘?,&‘K,,]K;;,
Ch. 44: Testing Non-Nested   Hypotheses                                                      2631


which

     plim 1, = 0.


Therefore   the score statistic    can be used as the basis for an encompassing       test. The
statistic & is asymptotically         equivalent   to ,/?K,,[B,,     - b,,(oi,,)],   under   the
encompassing   hypothesis.

Proposition 6.2.2

The SET is based on the statistic c$. = T?Tk,-,‘fi,l?;i&,             and the critical region
is ;““, > I:_,, where d is the rank of 0,.

   As for the WET, the asymptotic     variance-covariance matrix is reevaluated,  in
comparison   with that of the extended score test of Proposition  3.3.1, in order to
take into account the fact that the true p.d.f. may satisfy the encompassing
hypothesis without belonging to Mr.


6.2.5.   The generalized encompassing test (GET)

The previous Wald and score encompassing         tests may be difficult to implement for
various reasons and, in particular,        because the variance-covariance           matrices
appearing in the test statistics are, in general, not invertible. This implies that a
generalized inverse must be used and that the rank must be estimated. Therefore it
is worth looking for simpler tests even if the price to pay is the enlargement          of the
implicit null hypothesis H, = (CC&, = b,,(aT,)). This null hypothesis has an intersection
with M, which is equal to the so-called “reflecting set” R,, = (c~~:cx~    = b21[b12(a2)]}.
The tests that are proposed        below have an implicit null hypothesis               whose
intersection   with M, is equal to the image M,, of M, by b,,. This implies that,
when b,, is injective, these tests are effective only if pz, the size of c(~, is greater than
pl, the size of c1r.

Proposition 6.2.3

Under    He and if the rank of ab,,/acr,      is pl, the statistic




where zr is a consistent estimator of Z = K&’ Cz2K,;‘, is asymptotically   distributed
as xz(p2 - pJ. The test consists in rejecting H, if t”, > xf Jp2 - pl), where E is the
asymptotic  level of the test. This test is called the generalized encompassing      test
(GET).
2634                                                                                     C. Gourieroux     and A. Mortfiwt


Davidson, R. and J.G. McKinnon (1985a) “Testing Linear and Loglinear Regressions against Box-Cox
  Alternatives”,     Canadian Journal of Economics,          XVIII, 499-517.
Davidson, R. and J.G. McKinnon (1985b) “Heteroskedasticity-Robust                       Tests in Regression Directions”,
   Annales de I’INSEE, 59160, 183-218.
Davidson, R. and J.G. McKinnon (1987) “Implicit Alternatives and the Local Power of Test Statistics”,
   Econometrica, 55, 1305- 1329.
Deaton, AS. (1982) “Model Selection Procedures,                   or, Does the Consumption           Function     Exist?” in:
  C.G. Chow and P. Corsi, eds., Etialuating theReliability ofMacroeconomic                     Models, New York: Wiley,
  43-65.
Domowitz, I. and H. White (1982) “Misspecified                 Models with Dependent           Observations”,     Journal y/
   Econometrics, 20, 35-58.
Dufour, J.M. (1989) “Nonlinear Hypotheses, Inequality Restrictions and Non-nested Hypotheses: Exact
   Simultaneous      Tests in Linear Regressions”, Econometrica, 57, 335-356.
Dumonceaux,        R. and C.E. Antle (1973) “Discrimination              Between the Log Normal and the Weibull
   Distribution”,     Technometrics, 15, 923-926.
Dumonceaux,        R., C.E. Antle and G. Haas (1973) “Likelihood               Ratio Test for Discrimination        Between
   Two Models with Unknown Location and Scale Parameters”,                       Technomerrics, 15, 19-27.
Dyer, A.R. (1973) “Discrimination           Procedures      for Separate Families of Hypotheses”,            Journal of the
   American Statistical Association, 68, 970-974.
Dyer, A.R. (1974) “Hypothesis Testing Procedures for Separate Families of Hypotheses”, Journal ofthe
   American Statistical Association, 69, 140-145.
Efron, B. (1983) “Comparing         Non-nested      Linear Models”, Technical Report 84, Stanford University.
Engle, R.F. (1984) “Wald, Likelihood              Ratio and Lagrange           Multiplier Tests in Econometrics”,           in:
   Z. Griliches and M. Intriligator,       Eds., Handbook ofEconometrics,           Vol 2, North-Holland:       Amsterdam,
   776-826.
Epps, T.W., K.J. Singleton and L.B. Pulley (1982) “A Test of Separate Families of Distributions                         Based
   on the Empirical Moment Generating              Function”, Biometrika, 69, 391-399.
Ericsson, N.R. (1982) “Testing Non-nested                Hypotheses      in Systems of Linear Dynamic              Economic
   Relationships”,     Ph.D. dissertation,    London School of Economics.
Ericsson, N.R. (1983) “Asymptotic         Properties of Instrumental        Variables Statistics for Testing Nonnested
   Hypotheses”,      Review ofEconomic Studies, 50,287-304.
Ericsson, N.R. (1991) “Monte Carlo Methodology                   and the Finite Sample Properties of Instrumental
   Variables Statistics for Testing Nested and Non Nested Hypotheses”,                    Econometrica, 59, 1249-1278.
Ericsson, N.R. and D.F. Hendry (1989) “Encompassing                     and Rational Expectations:         How Sequential
   Corroboration       Can Imply Refutation”,          International     Finance, dissertation       paper 354, Board of
   Governors      of the Federal Reserve System.
Fisher, G.R. (1983) “Tests for Two Separate Regressions”, Journal of Econometrics, 21, 117-132.
Fisher, G.R. and M. McAleer (1979) “On the Interpretation                of the Cox Test in Econometrics”,        Economics
   Letters, 4, 145-150.
Fisher, G.R. and M. McAleer (1981) “Alternative                Procedures and Associated Tests of Significance for
   Non-nested      Hypotheses”, Journal qf‘Econometrics,           16, 103-l 19.
Fisher, G.R. and D. Whistler (1982) “Tests for Two Separate Regressions”,                         Institut National      de la
   Statistique et des Etudes Economiques           (INSEE), dissertation        paper 8210.
Geweke, J. (1981) “The Approximate            Slopes of Econometric        Tests”, Econometrica, 49, 1427-1442.
Ghysels, E. and A. Hall (1990) “Testing Non-nested               Euler Conditions with Quadrature            Based Method
   of Approximation”,       Journal of Econometrics, 46, 273-308.
Gill, L. (1983a) “Some Non-nested            Tests in an Exponential          Family of Distributions”,        University of
   Manchester, dissertation      paper 129.
Gill, L. (1983b) “Local Power Comparisons                  for Tests of Non-nested           Hypotheses”,     University     of
   Manchester dissertation       paper.
Godfrey, L.G. (1983) “Testing Non-nested Models After Estimation by Instrumental                         Variables or Least
   Squares”, Econometrica, 51, 355-365.
Godfrey, L.G. (1984) “On the Use of Misspecification                 Checks and Tests of Non-nested           Hypotheses in
   Empirical Econometrics”,        Economic Journal, 94, 69-81.
Godfrey, L.G. and M.H. Pesaran (1983) “Tests of Non-nested                          Regression   Models: Small Sample
  Adjustments       and Monte Carlo Evidence”, Journal of Econometrics, 21, 133-154.
2636                                                                                   C. Gourieroux    and A. Monfort


   with autocorrelated       disturbances:    an application     to models of U.S. unemployment”,         Communications
   in Statistics, Series A, 19, 3619-44.
McFadden,       D.L. (1984) “Econometric         Analysis of Qualitative     Response Models”, in: 2. Griliches and
    M.D. Intriligator,    eds., Handbook of Econometrics, Vol 2, North-Holland:               Amsterdam,        1395-1458.
McFadden,       D.L. (1989) “A Method of Simulated                 Moments     for Estimation     of Discrete Response
    Models without Numerical Integration”,              Econometrica, 57, 995-1026.
McKinnon,       J.G. (1983) “Model Specification             Tests Against Non-nested       Alternatives”,     Econometric
    Reoiew, 2, 85-l 10.
McKinnon,       J.G., H. White and R. Davidson (1983) “Tests for Model Specification                   in the Presence of
    Alternative Hypotheses: Some Further Results”, Journal ofEconometrics,                  21, 53-70.
Milliken G.A. and F.A. Graybill (1970) “Extensions of the General Linear Hypothesis                       Model”, Journal
    of the American Statistical Association, 65, 797-807.
Mizon, G.E. (1984) “The Encompassing               Approach in Econometrics”,       in: D.F. Hendry and K.F. Wallis,
    eds., Econometrics and Qualitative Mod&q,                 Oxford: Basil Blackwell.
Mizon, G.E. and J.F. Richard (198 I) “The Structure of some Non-nested Hypothesis Tests”, Southampton
    University, mimeo.
Mizon, G.E. and J.F. Richard (1986) “The Encompassing                      Principle and its Application         to Testing
    Non-Nested      Hypotheses”,     Econometrica, 54,657-678.
Nakhaeizadeh,       G. (1988) “Non Nested New Classical and Keynesian Models: A Comparative                        Studv in
    the Case of the Federal Republic of Germany”, Karlsruhe University, dissertation                    paper.           _
Pakes, A. and D. Pollard (1989) “Simulation                   and the Asymptotics       of Optimization        Estimators”,
    Econometrica, 57, 1027-1058.
Pereira, B. de B. (1977a) “A Note on the Consistency and on the Finite Sample Comparisons                           of Some
    Tests of Separate Families of Hypotheses”,             Biometrika, 64, 109-l 13.
Pereira, B. de B. (1977b) “Discriminating               Among Separate Models: A Bibliography”,               International
   Statistical Review, 45, 1633172.
Pesaran, M.H. (1974) “On the General Problem of Model Selection”, Review of Economic Studies, 41,
    153-171.
Pesaran, M.H. (1981) “Pitfalls ofTesting Non-nested Hypotheses by the Lagrange Multiplier Method”,
   Journal of Econometrics, 17, 3233331.
Pesaran, M.H. (1982a) “On the Comprehensive                   Method of Testing Non-nested         Regression Models”,
   Journal of Econometrics, 78, 263-274.
Pesaran, M.H. (1982b) “Comparison               of Local Power of Alternative        Tests of Non-nested         Regression
    Models”, Econometrica, 50, 128771305.
Pesaran, M.H. (1984) “Asymptotic             Power Comparisons         of Tests of Separate Parametric         Families by
    Bahadur’s Approach”, Biometrika, 71, 245-252.
Pesaran, M.H. (1987) “Global and Partial Non-nested                    Hypotheses    and Asymptotic        Local Power”,
    Econometric Theory, 3, 69-9.
Pesaran, M.H. and A.S. Deaton (1978) “Testing Non-nested Nonlinear Regression Models”, Econometrica,
   46,6777694.
Pesaran, H. and B. Pesaran (1989) “Simulation Approach to the Problem of Computing Cox’s Statistic
   for Testing Non-nested           Models”, dissertation       paper presented at the European           Meeting of the
    Econometric     Society.
Pitman, E.J.G. (1948) “Non-Parametric             Statistical Inference”, University of North Carolina, Institute of
   Statistics, Mimeographed         Lecture Notes.
Poirier, D.J. and P.A. Ruud (1979) “A Simple Lagrange Multiplier Test for Lognormal                            Regression”,
   Economic Letters, 4, 251-255.
Quandt,      R.E. (1974) “A Comparison           of Methods for Testing Non-nested             Hypotheses”,       Review of
   Economics and Statistics, 56, 92-99.
Ramsey, J.B. (1974) “Classical Model Selection Through Specification                   Error Tests”, in: P. Zarembka,
   ed., Frontiers of Econometrics, Academic Press: New York, 13-47.
Rossi, P.E. (1985) “Comparison         of Alternative Functional Forms in Production”, Journal qfEconometrics,
   30,345%361.
Sargan, J.D. (1964) “Wages and Prices in the United Kingdom: A Study in Econometric                        Methodology”,
   in: P.E. Hart, G. Mills and J.K. Whitaker, eds., Econometric Analysisfor National Economic Planning,
   London: Butterworths,         25-63.
Ch. 44:   Testing     Non-Nested     Hypotheses                                                               2631


Sawyer, K.R. (1980) “The Theory of Econometric           Model Selection”, Ph.D. dissertation,     Australian
  National University.
Sawyer, K.R. (1983) “Testing Separate Families of Hypotheses: An Information         Criterion”, Journal oj
  the Royal Sratistical Society, Series B, 45, 89-99.
Smith, M.A. and G.S. Maddala          (1983) “Multiple    Model Testing for Non-nested       Heteroscedastic
  Censored Regression Models”, Journal of Econometrics, 21, 71-81.
Smith, R.J. (1992) “Non-nested       tests for competing     models estimated  by generalized     method of
  moments”, Econometrica,      60, 973-80.
Szroeter, J. (1989) “Efficient Tests of Non-nested     Hypotheses”, University College, London.
Vuong, GM. (1989) “Likelikood          Ratio Tests for Model Selection and Non-nested           Hypotheses”,
  Econometrica,       51, 307-334.
Walker,   A.M. (1967) “Some           Tests   of Separate   Families   of Hypotheses   in Time   Series Analysis”,
  Biometrika,       54, 39-68.
White, H. (1982a) “Maximum Likelikood Estimation of Misspecified Models”, Econometrica, 50, l-26.
White, H. (1982b) “Regularity   Conditions  for Cox’s Test of Non-nested  Hypotheses”,    Journal    of
 Econometrics,    19, 301-318.
White, H. and I. Domowitz (1984) “Nonlinear Regression with Dependent Observations”,   Econometrica,
  52, 143% 162.
Wooldridge, J.M. (1990) “An Encompassing       Approach to Conditional       Mean Tests with Applications        to
  Testing Non-nested Hypotheses”, Journal ofEconomefrics,         45, 331-350.
Zabel, J.E. (1992) “A comparison      of non-nested    tests for misspecified models using the method            of
  approximate    slopes”, Journal ofEconometrics,    forthcoming.
Zarembka,   P. (1974) “Transformation    of Variables in Econometrics”,     in: P. Zarembka, ed., Frontiers      in
  Econometrics, New York: Academic Press.



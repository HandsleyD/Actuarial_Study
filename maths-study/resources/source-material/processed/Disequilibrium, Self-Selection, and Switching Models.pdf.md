---
normalized_id: shared-pdf-reference-disequilibrium-self-selection-and-switching-models
exam_code: SHARED
material_scope: disequilibrium, self-selection, and switching models.pdf
material_group: shared
document_type: pdf-reference
source_repo_path: resources/source-material/shared/Disequilibrium, Self-Selection, and Switching Models.PDF
conversion_method: pdftotext
qa_status: pending
---
# shared-pdf-reference-disequilibrium-self-selection-and-switching-models

Chapter 28


DISEQUILIBRIUM, SELF-SELECTION, AND
SWITCHING MODELS*

G. S. MADDALA

University     of Florida




Contents

 1.    Introduction                                                                               1634
 2.    Estimation of the switching regression model:
       Sample separation known                                                                    1637
 3.    Estimation of the switching regression model:
       Sample separation unknown                                                                  1640
 4.    Estimation of the switching regression model with imperfect
       sample separation information                                                              1646
 5.    Switching simultaneous systems                                                             1649
 6.    Disequilibrium models: Different formulations of price adjustment                          1652
       6.1. The meaning of the price adjustment equation                                          1653
       6.2.      Modifications    in the specification     of the demand   and supply functions   1656
       6.3.      The validity    of the “Mm” condition                                            1660
 7.    Some other problems of specification in disequilibrium models                              1662
       7.1.      Problems    of serial correlation                                                1663
        7.2.     Tests for distributional    assumptions                                          1664
        7.3.     Tests for disequilibrium                                                         1664
        7.4.     Models with inventories                                                          1667
 8.   Multimarket disequilibrium models                                                           1668
 9.   Models with self-selection                                                                  1672
10. Multiple criteria for selectivity                                                             1676
11. Concluding remarks                                                                            1680
References                                                                                        1682


   *This chapter was first prepared in 1979. Since then Quandt (1982) has presented a survey of
disequilibrium  models and Maddala (1983a) has treated self-selection and disequilibrium   models in
two chapters of the book. The present paper is an updated and condensed version of the 1979 paper. If
any papers are not cited, it is just through oversight rather than any judgment on their importance.
Financial support from the NSF is gracefully acknowledged.

Handbook of Econometrics, Volume III, Edited by Z. Griliches and M.D. Intriligator
Q Elsevier Science Publishers B V, I986
1634                                                                                     G. S. Maddala




1.     Introduction

The title of this chapter stems from the fact that there is an underlying          similarity
between econometric         models involving disequilibrium     and econometric       models
involving self-selection,    the similarity being that both of them can be considered
switching structural systems. We will first consider the switching regression model
and show how the simplest models involving disequilibrium             and self-selection     fit
in this framework. We will then discuss switching simultaneous            equation models,
disequilibrium    models and self-selection models.
    A few words on the history of these models might be in order at the outset.
Disequilibrium     models have a long history. In fact all the “partial adjustment”
models are disequilibrium        models.’ However, the disequilibrium       models consid-
ered here are different in the sense that they add the extra element of ‘quantity
rationing’.    The differences     will be made clear later (in Section 6). As for
self-selection   models, one can quote an early study by Roy (1951) who considers
an example of two occupations:           Hunting and fishing and individuals       self-select
based on their comparative        advantage. This example and models of self-selection
are discussed later (in Section 9). Finally, as for switching models, almost all the
models with discrete parameter changes fall in this category and thus they have a
long history. The models considered here are of course different in the sense that
we consider also “endogenous”          switching. We will first start with some examples
of switching     regression   models. Switching simultaneous        equations    models are
considered later (in Section 5).
    Suppose the observations       on a dependent variable Y can be classified into two
regimes and are generated by different probability        laws in the two regimes. Define

       Yl=xBl+~l.                                                                                 0.1)


       Y2 = w,      +   u 2.                                                                      (1.2)


and

       Y = Yl           iff Zcu - u > 0.                                                         (I .3)
       Y = Y2           iff Za-~50.                                                              (I.4

X and Z are (possibly overlapping)        sets of explanatory variables. fil, p2 and (Y
are sets of parameters    to be estimated.    ul, u2 and u are residuals that are only
contemporaneously      correlated. We will assume that (u,, u2, U) are jointly nor-

   ‘The disequilibrium    model in continuous    time analyzed by Bergstrom and Wymer   (1976) is also a
partial adJustment    model except that it is formulated in continuous time.
Ch. 28: Disequilibrium,            Self-selection,   and Switching Models        1635

mally distributed with mean vector 0, and covariance matrix


                  0:

                                               1
                             012        (Jlu

       z=         u12        u;         u2u     .


                             02u         1
                i (JlU

We have set var(u) = 1 because, by the nature of the conditions (1.3) and (1.4) (Y
is estimable only up to a scale factor.
   The model given by eqs. (1.1) to (1.4) is called a switching regression model. If
%   = (72” = 0 then we have a model with exogenous       switching. If uiU or u2U is
non-zero, we have a model with endogenous switching. This distinction between
switching regression models with exogenous and endogenous switching has been
discussed at length in Maddala and Nelson (1975).
   We will also distinguish between two types of switching regression models.
  Model A: Sample separation known.
  Model B: Sample separation unknown.
In the former class we know whether each observed y is generated by (1.1) or
(1.2). In the latter class we do not have this information. Further, in the models
with known sample separation we can consider two categories of models:
   Model A-l: y observed in both regimes.
   Model A-2: y observed in only one of the two regimes.
We will discuss the estimation of this type of models in the next section. But first,
we will given some examples for the three different types of models.
Example         1:           Disequilibrium market model
Fair and Jaffee (1972) consider a model of the housing market. There is a demand
function and a supply function but demand is not always equal to supply. (As to
why this happens is an important question which we will discuss in a later
section.) The specification of the model is:
   Demand function: D = XP, + u1
   Supply function: S = X/3, + u2
The quantity transacted, Q, is given by

       Q = Min( D, S) (the points on the thick lines in Figure 1).

Thus       Q=X&+u,                  if D<S,


       Q    =   X,2      +   ~2          if D > S.
1636                                                                  G. S. Maddala




                                                       P


                                      Figure 1




The condition   D < S can be written as:




where a2 = Var(u, - u2) = 0: + u; - 25. Thus the model is the same as the
switching regression model in eqs. (1.1) to (1.4) with 2 = X, (Y= ( p2 - Pr)/a and
u = (ur - u2)/u. If sample separation is somehow known, i.e. we know which
observations correspond to excess demand and which correspond to excess
supply, then we have Model A-l. If sample separation is not known, we have
Model B.
Example 2:       Model with self-selection
Consider the labor supply model considered by Gronau (1974) and Lewis (1974).
The wages offered W, to an individual, and the reservation wages W, (the wages
at which the individual is willing to work) are given by the following equations:

       wo=xp,+u,        wr=xp,+u*.

The individual works and the observed wage W = W, if W, 2 W,. If W, < W,, the
individual does not work and the observed wages are W = 0. This is an example
of Model A-2. The dependent variable is observed in only one of the two regimes.
The observed distribution of wages is a truncated distribution-it is the distribu-
tion of wage offers truncated by the “Self-selection” of individuals-each individ-
ual choosing to be ‘in the sample’ of working individuals or not, by comparing his
(or her) wage offer with his (or her) reservation wage.
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models               1637

Example        3:     Demand for durable goods
This example is similar to the labor-force participation model in Example 2. Let
y, denote the expenditures the family can afford to make, and yz denote the value
of the minimum acceptable car to the family (the threshold value). The actual
expenditures y will be defined as y = yi iff yi 2 y, and = 0 otherwise.
Example     4:        Needs vs. reluctance hypothesis
Banks are reluctant to frequent the discount window too often for fear of adverse
sanctions from the Federal Reserve. One can define:

     y, = Desired borrowings
     y2 = Threshhold level below which banks will not use the discount window.

   The structure of this model is somewhat different from that given in examples 2
and 3, because we observe yi all the time. We do not observe y2 but we know for
each observation whether y, I y, (the bank borrows in the Federal funds market)
or yi > y2 (the bank borrows from the discount window).
   Some other examples of the type of switching regression model considered here
are the unions and wages model by Lee (1978), the housing demand model by Lee
and Trost (1978), and the education and self-selection model of Willis and Rosen
(1979).


2.    Estimation of the switching regression model: Sample separation known

Returning to the model given by eqs. (1.1) to (1.4), we note that the likelihood
function is given by (dropping the t subscripts on U, X, Z, y and I)




                                                                              (2-l)

where

       I=1          iff Zo-u>O,
         = 0         otherwise.

and the bivariate normal density of (tli, u) has been factored into the marginal
1638                                                                                          G. S. Maddala

density gr( ur) and the conditional        density fr( u[ui), with a similar factorization   of
the bivariate normal density of (u,, u). Note that ui2 does not occur at all in the
likelihood function and thus is not estimable in this model. Only urU and uzu are
estimable.     In the special case u = (ur - ~*)/a where u2 = Var(u, - u2) as in the
examples in the previous section, it can be easily verified that from the consistent
estimates of a:, CT:, uiU and a,, we can get a consistent estimate of ur2.
   The maximum likelihood estimates can be obtained by an iterative solution of
the likelihood       equations using the Newton-Raphson           method or the Berndt et al.
(1974) method.          The latter involves obtaining      only the first derivatives    of the
likelilood      function     and has better convergence        properties.   In Lee and Trost
(1978) it is shown that the log-likelihood           function for this model is uniformly
bounded      from above. The maximum likelihood estimates of this model can be
shown to be consistent          and asymptotically    efficient following the lines of proof
that Amemiya (1973) gave for the Tobit model. To start the iterative solution of
the likelihood       equations,   one should use preliminary       consistent estimates of the
parameters       which can be obtained by using a two-stage estimation method which
is described in Lee and Trost (197Q2 and will not be reproduced here.
   There are some variations           of this switching      regression    model that are of
considerable       interest. The first is the case of the labor supply model where y is
observed in only one of the two regimes (Model A-2). The model is given by the
following relationships:

       J’ = Yl       if   Y,   2    y2

         =   0      otherwise.

  For the group           Z = 1, we know yi = y and y, 2 y
  For the group           Z = 0, all we know is yi < y,

Hence     the likelihood           function   for this model can be written        as:




where




       u2 =Var(u,         - u2) = 6~: + u: -2u,,,

   ‘This procedure first used by Heckman         (1976) for the labor supply   model was extended   to a wide
class of models by Lee (1976).
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models                 1639

 @( .) is the distribution function of the standard normal and f is the joint density
of ( uit, uZt). Since y is observed only in one of the regimes, we need to impose
some identifiability restrictions on the parameters of the model. These restrictions
are:
   (a) There should be at least one explanatory variable in (1.1) not included in
        (1.2)
or
   (b) Cov( ui, ZQ) = 0.
   These conditions were first derived in Nelson (1975) and since then have been
re-derived by others.
   The second variation of the switching regression model that has found wide
application is where the criterion function dete rmining the switching also involves
yi and y2 i.e. eqs. (1.3) and (1.4) are replaced by

     Y = Yl         iff I* > 0,

      Y = Y2        iff I* IO.

Where

      1*=y,yi+y,y2+zcw-u.                                                       (2.3)

Examples of this model are the unions and wages model by Lee (1978) and the
education and self-selection model by Willis and Rosen (1979). In both cases, the
choice function (2.3) determining the switching involves the income differential
( y1 - y2). Thus yZ = - yi. Interest centers on the sign and significance of the
coefficient of (y, - y2).
   The estimation of this model proceeds as before. We first write the criterion
function in its reduced form and estimate the parameters by the probit method.
Note that, for normalization purposes, instead of imposing the condition Var( u)
 =l, it is more convenient to impose the condition that the variance of the
residual U* in the reduced form for (2.3) is unity.

      i.e.Var(u*)=Var(y,u,+y,u,-u)=l.                                           (2.4)

This means that Var( u) = u,’ is a parameter to be estimated. But, in the switching
regression model, the parameters that are estimable are: pi, &, u:, I$, ulU*, and
(I~,,* where a& = Cov(u,, u*) and ulU  * = Cov(u,, u*). The estimates of uiU* and
u2U* together with the normalization eq. (2.4) give us only 3 equations from which
we still have to estimate four parameters ui2, uiU, u2,, and u,‘. Thus, in this model
we have to impose the condition that one of the covariances Q, ulU, u2U is zero.
The most natural assumption is u12 = 0.
1640                                                                                G. S. Mad&la

   As for the estimation       of the parameters in the choice function (2.3) again we
have to impose some conditions on the explanatory            variables in y, and y2. After
obtaining    estimates of the parameters 8% and &, we get the estimated values jjl
and j$ or y, and y2 respectively           and estimate the parameters      in (2.3) by the
probit method using these estimated values of y, and y2. The condition for the
estimability    of the parameters in (2.3) is clearly that there be no perfect multicol-
linearity between j+, j$ and z.
   This procedure, called the “two-stage probit method” gives consistent estimates
of the parameters      of the choice function. Note that since (yr - jr) and (y2 - j&)
are heteroscedastic,      the residuals in this two-stage probit method are hetero-
scedastic, But this heteroscedasticity      exists only in small samples and the residuals
are homoscedastic       asymptotically,   thus preserving the consistency      properties of
the two-stage probit estimates. For a proof of this proposition          and the derivation
of the asymptotic       covariance matrix of the two-stage probit estimates. see Lee
(1979).



3.     Estimation of the switching regression model: Sample separation unknown

In this case we do not know whether each observation       belongs to Regime 1 or
Regime 2. The labor supply model clearly does not fall in this category because
the sample separation    is known automatically.     In the disequilibrium   market
model, where the assumption       of unknown    sample separation    has been often
made, what this implies is that given just the data on quantity transacted and the
explanatory  variables, we have to estimate the parameters      of both the demand
and supply functions.   Once we estimate these parameters,      we can estimate the
probability that each observation belongs to the demand and the supply function.
   Consider the simplest disequilibrium   model with sample separation unknown:

       0, = X1,/?, + urr (Demand         function),

       S, = X&    + uzl (Supply      function),

       Q, = Min(D,,     S,).

The probability       that observation     I belongs   to the demand   function   is:

       X, = Prob( 0, < S,),

          = Prob( ui, - u2t < X2,P2 - X1,&).                                               (3.1)

Let f(~r, u2) be the joint density of (ur, u2) and g(D, S) the joint density of D
and S derived from it. If observation  t is on the demand function, we know that
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models              1641

D, = Q, and S, > Q,. Hence,


      h(Q,lQ, = D,) = )--de,,               $bWh                             (3.2)
                                  I

The denominator X, in (3.2) is the normalizing constant. It is equal to the
numerator integrated over Q, over its entire range. Similarly, if observation t is
on the supply function, we know that S, = Q, and 0, > Q,. Hence,

      JdQ,lQ, = 4) =         jQwd%
                              I
                                 Q,)W/(l-                    A,).            (3.3)


The unconditional         density of Q, is:

      h<Q,>=X,h<Q,lQ,=D,>+<1-x,>h<Q,lQ,=s,>
            = /+dQty $)W + /f&L        Q,)dDt.                               (3.4)
                     f                           ,

The likelihood function is:

      L = I-b(Q,).                                                          (3.5)

As will be shown later, the likelihood function for this model is unbounded for
certain parameter values.
   Once the parameters in the model have been estimated, we can estimate the
probability that each observation is on the demand function or the supply
function. Maddala and Nelson (1974) suggest estimating the expressions A, in
(3.1). These were the probabilities calculated in Sealy (1979) and Portes and
Winter (1980). Kiefer (1980a) and Gersovitz (1980) suggest calculating:

      J’(D, < &IQ,>,                                                        (3.6)

and classifying an observation as belonging to the demand function if this
probability is > 0.5 and belonging to the supply function if this probability is
< 0.5.
   For the model we are considering, we have

      Prob(D,<&lQ,)            =lQmdQ,, S,)dWh(Q,),                         (3-7)
                                      I

where h(QL,) is defined in (3.4). Lee (1983b) treats the classification of sample
observations to periods of excess demand or excess supply as a problem in
1642                                                                                    G. S. Maddala

discriminant       analysis. He shows that the classification            rule suggested by Kiefer
and Gersovitz is optimal in the sense that it minimizes the total probability                       of
misclassification.       Even in a complicated        model, these relationships          hold good.
Note that in a more complicated               model (say with stochastic price adjustment
equations)     to calculate h, as in (3.1) or to compute (3.7) we need to derive the
marginal distribution         of D, and S,.
   There are two major problems with the models with unknown                            sample sep-
aration, one conceptual           and the other statistical. The conceptual problem is that
we are asking too much from the data when we do not know which observations
are on the demand function and which are on the supply function. The results
cannot normally         be expected to be very good though the frequency with which
‘good’ results are reported with this method are indeed surprising. For instance,
in Sealey (1979) the standard errors for the disequilibrium                   model (with sample
separation      unknown)        are in almost all cases lower than the corresponding
standard     errors for the equilibrium        model! Goldfeld and Quandt (1975) analyze
the value of sample separation information              by Monte-Carlo        methods and Kiefer
(1979) analyzes         analytically   the value of such information            by comparing       the
variances of the parameter estimates in a switching regression model from a joint
density of ( y, D) and the marginal density of y (where y is a continuous variable
and B is a discrete variable). These results show that there is considerable                   loss of
information       if sample separation       is not known. In view of this, some of the
empirical     results being reported from the estimation                of disequilibrium     models
with unknown          sample separation      are surprisingly     good. Very often, if we look
more closely into the reasons why disequilibrium                exists, then we might be able to
say something        about the sample separation          itself. This point will be discussed
later in our discussion of disequilibrium           models.
   The statistical problem is that the likelihood functions for this class of models
are usually unbounded           unless some restrictions (usually unjustifiable)        are imposed
on the error variances. As an illustration,          consider the model in eqs. (1.1) to (1.4):
Define
       Prob( y = _~r) = r,
       Prob(y=y,)=l-lr.

The conditional        density   of y given y = yr is:

       f(YlY     = vr) =fr(_Y - J&)/r.
Similarly,

       f(rlv     = Y2) =fz(Y     - X&/<I     - r>.

Hence,       the unconditional    density   of y is:
Ch. 28: Disequilibrium, Self-selection, and Switching Models                     1643

Where fi and f2 are the density functions of ui and a2 respectively. Thus, the
distribution of y is the mixture of two normal distributions. Given n observations
yi, we can write the likelihood functions as:




where




and


                                                  .
                                              I



Take u2 # 0 and consider the behaviour of L as u1 + 0. If Xi& = yi, then
A, ---,00 and A,, A,,-A, all + 0. But B,, B,,- B, are finite. Hence L + co. Thus,
as ui --, 0 the likelihood function tends to infinity if Xi& = yi for any value of i.
Similarly, if ui # 0, then as a2 -+ 0 the likelihood function tends to infinity if
Xiip2 = yi for any value of i.
   In more complicated models, this proof gets more complicated, but the struc-
ture of the proof is the same as in the simple model above. [See Goldfeld and
Quandt (1975) and Quandt (1983, pp. 13-16) for further discussion of the
problem of unbounded likelihood functions in such models.]
   Another problem in this model, pointed out by Goldfeld and Quandt (1978) is
the possibility of convergence to a point where the correlation between the
residuals is either +l or -1. This problem, of course, does not arise if one
assumes ui2 = 0 to start with.
   The disequilibrium model with unknown sample separation that we have been
discussing is a switching regression model with endogenous switching. The case of
a switching regression model with exogenous switching and unknown sample
separation has been extensively discussed in Quandt and Ramsay (1978) and the
discussion that followed their paper.
   The model in this case is:

  Regime 1: yi = X;,& + &riwith probability X
  Regime 2: yi = X2ifi2 + aZi with probability (1 - A)

      &ii- IN(0, u,2) E2i- IN(0, u,2).

   As noted earlier, the likelihood function for this model becomes unbounded for
certain parameter values. However, Kiefer (1978) has shown that a root of the
1644                                                                                                 G. S. Maddala

likelihood equations corresponding to a local maximum is consistent, asymptoti-
cally normal and efficient.3
   Quandt and Ramsay (1978) suggest an MGF (moment generating function)
estimator for this model. Note that the moment generating function of y is:


       E(e@)        =Xexp
                               [
                                   *;&B+B2$
                                                             I
                                                                 +(1-X)exp
                                                                             [
                                                                                          e2u2
                                                                                 x;P20+--$-
                                                                                                 1
                                                                                                 .          (3.8)

   Select a set of 4 (j = 1,2.. . k) and replace in eq. (3.8).


       E(eej-“)           by i ,i eeJyl,
                                     1=1



       exP( @j+)                   by      5    ,k    exP(   ~j4A)y
                                                2-l


and




  Quandt          and Ramsay’s MGF method                              is to estimate     the parameters     y=
(A, Pr, 82,   a?,   qf)   by       minimizing




                                                                                                            (3.9)


where

                    @j_Yi),
       Zj( S,) = eXP(

and G(y, xi, 9) is the value of the expression on the right hand side of (3.8) for
B = t$ and the ith observation.
  The normal equations obtained by minimizing (3.9) with respect to y are the
same as those obtained by minimizing


                                                                                                           (3.10)
       ;=I j=l

   3Hartley and Mallela (1977) prove the strong consistency of the maximum likehood estimator but
on the assumption     that q and 4 are bounded away from zero. Amemiya and Sen (1977) show that
even if the likelihood function is unbounded,  a consistent estimator of the true parameter value in this
model corresponds      to a local maximum of the likelihood function rather than a global maximum.
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models                  1645

where




The normal equations in both cases are:




Schmidt (1982) shows that we get more efficient estimates if we minimize
weighted sum of squares rather than the simple sum of squares (3.10), making use
of the covariance matrices 0, of (cil, .si2,.. . eik) for i = 1,2.. . n.
   Two major problems with the MGF estimator is the choice of the number of
8’s to be chosen (the choice of k) and the choice of the particular values of 6’,for
a given choice of k. Schmidt (1982) shows that the asymptotic efficiency of the
modified MGF estimator (the estimator corresponding to generalized least squares)
is a non-decreasing function of k and conjectures that the lower bound of the
asymptotic variance is the asymptotic variance of the ML estimator. Thus, the
larger the k the better. As for the choice of the particular values of ej for given k,
Kiefer, in his comment on Quandt and Ramsay’s paper notes that the 8’s
determine the weights given to the moments of the raw data by the MGF
estimator. Small e’s imply heavy weight attached to low order moments. He also
suggests choosing B’S by minimizi ng some measure of the size of the asymptotic
covariance matrix (say the generalized variance). But this depends on the values
of the unknown parameters, though some preliminary estimates can be sub-
stituted. Schmidt (1982) presents some Monte-Carlo evidence on this but it is
inconclusive.
   The discussants of the Quandt and Ramsay paper pointed out that the authors
had perhaps exaggerated the problems with the ML method, that they should
compare their method with the ML method, and perhaps use the MGF estimates
as starting values for the iterative solution of likelihood equations.
    In summary, there are many problems with the estimation of switching models
with unknown sample separation and much more work needs to be done before
one can judge either the practical usefulness of the model or the empirical results
already obtained in this area. The literature on self-selection deals with switching
models with known sample separation but the literature on disequilibrium models
contains several examples of switching models with unknown sample separation
[see Sealey (1979), Rosen and Quandt (1979) and Portes and Winter (1980)].
Apart from the computational problems mentioned above, there is also the
problem that these studies are all based on the hypothesis of the minimum
condition holding on the aggregate so that the aggregate quantity transacted
switches between being on the demand curve and the supply curve. The validity
1646                                                                  G. S. Maddala

of this assumption could be as much a problem in the interpretation of the
empirical results as the estimation problems discussed above. Though the
“minimum condition” can be justified at the micro-level, it would no longer be
valid at the macro-level. Muellbauer (1978) argues that at the macro-level a more
reasonable assumption is that




The problems of aggregation are as important as the problems of estimation with
unknown sample separation discussed at length above. The econometric problems
posed by aggregation have also been discussed in Batchelor (1977), Kooiman and
Kloek (1979), Malinvaud (1982) and Muellbauer and Winter (1980).


4.  Estimation of the switching regression model with imperfect
sample separation information

The discussion in the previous two sections is based on two polar cases: sample
separation completely known or unknown. In actual practice there may be many
cases where information about sample separation is imperfect rather than perfect
or completely unavailable. Lee and Porter (1984) consider the case. They consider
the model:

       Regime 1: Yr, = X&i + &it                                             (4.1)
       Regime 2 : Y,, = X2,& + Q,,                                           (4.2)

for r =1,2,..., T. There is a dichotomous indicator IV; for each r which provides
sample separation information for each t. We define a latent dichotomous
variable It where

       1, = 1 if the sample observation Y, = Yr,
         = 0 if the sample observation Y, = Y,,.

   The relation between 1, and W, can be best described by a transition probabil-
ity matrix
Ch. 28: Disequilibrium,     Self-selection,     and Switching Models                              1641

where

       pij=Prob(W,=jll,=i)                           for i, j =1,2.

       pll+Plo=landp,,+p,=l.

Let

       Prob( W, = 1) = p.

Then




where

       X = prob(I,        =l).

If we assume &ir and Ed, to be normally distributed as N(0, u:)                            and N(O,&
respectively and define

                  1
                             exp - *(Y,-               xjtPi)2            for i =1,2,
       fi = (2n)“5Ji                [      u,                         I




then the joint density of Y, and W, is


       m,    w>       =   [fihP,,       + f20    -   QPml        wt

                          .[fix(l-P1,)+f*(l-X)(l-POlll-Wtr                                       (4.3)

and the marginal density of Y, is

                                                                                                 (4.4)

If pl1 = pOl, then the joint density f(Y,                        W,) can be factored as:




and hence the indicators W, do not contain any information on the sample
separation. One can test the hypothesis p 11 = pOl in any actual empirical case, as
shown by Lee and Porter. Also, if pl1 = 1 and pOl = 0, the indicator W, provides
1648                                                                          G. S. Maddala

perfect   sample    separation,    and




Thus, both the cases considered         earlier-sample  separation   known and sample
separation  unknown      are particular cases of the model considered here.
   Lee and Porter also show that if pI1 # pal, then there is a gain in efficiency by
using the indicator      W,. Lee and Porter show that the problem of unbounded
likelihood functions     encountered    in switching regression models with unknown
sample separation     also exists in this case of imperfect sample separation.   As for
ML estimation,     they suggest a suitable modification       of the EM algorithm sug-
gested by Hartley (1977, 1978) and Kiefer (1980b) for the switching regression
model with unknown sample separation.
   The paper by Lee and Porter is concerned with a switching regression model
with exogenous switching but it can be readily extended to a switching regression
model with endogenous         switching. For instance, in the simple disequilibrium
market model

       4 = 4tP1+ &it,
       4 = X2,82+ E2I!
        Q, = Min(D,,s,),

the joint density     of Q, and w can be derived by a procedure   analogous     to that in
(4.3) and it is


       f(Q,, W) = h%              + ~olG,,l~[(l-p,,)G,,+(1-~ol)G2fl~--’~,
where




and g(D, S) is the joint density of D and S. The marginal density h(Q,) of Q, is
given by the eq. (3.4). As before, if p1t = pal then the joint density f( Q,, W,) can
be written as




One can use the sign of AP, for W,. The procedure      would then be an extension        of
Ch. 28: Disequdibrium,    Self -selecrion, and Switching Models                   1649

the ‘directional method’ of Fair and Jaffee (1.972) in the sense that the sign of A P,
is taken to be a noisy indicator rather than a precise indicator as in Fair and
Jaffee. Further discussion of the estimation of disequilibrium models with noisy
indicators can be found in Maddala (1984).


5.    Switching simultaueous systems

We now consider generalizations of the model (1.1) to (1.4) to a simultaneous
equation system. Suppose the set of endogenous variables Y are generated by the
following two probability laws:
      B,Y, + r,x=         vi.                                                   (5.1)
      B,Y, + I’,X=        r/,.                                                  (5.2)
and
      Y= Yi            iff Zol- u > 0.                                          (5 *3)
      Y=Y2             iff Za-u<O.                                              (5.4)
If u is uncorrelated with Ui and U,, we have switching simultaneous systems with
exogenous switching. Goldfeld and Quandt (1976) consider models of this kind.
Davidson (1978) and Richard (1980) consider switching simultaneous systems
where the number of endogenous variables could be different in the two regimes.
The switching is still exogenous. An example of this type of model mentioned by
Davidson is the estimation of a simultaneous equation model where exchange
rates are fixed part of the time and floating the rest of the time. Thus the exchange
rate is endogenous in one regime and exogenous in the other regime.
   If the residual u is correlated with Vi and U, we have endogenous switching.
The analysis of such models proceeds the same way as Section 2 and the details,
which merely involve algebra, will not be pursued here. [See Lee (1979) for the
details.] Problems arise, however, when the criterion function in (5.3) and (5.4)
involves some of the endogenous variables in the structural system. In this case we
have to write the criterion function in its reduced form and make sure that the
two reduced form expressions amount to the same condition. As an illustration,
consider the model

      Y, = YiY, + &Xi + Uir
      y2=Y2yl+&x2+u2                      if Y,<c,
          =y;Y,+p;x,+U,                   if Y,>c.

Unless (1 - y1y2) and (1 - yiy;) are of the same sign, there will be an inconsistency
in the conditions Yi < c and Y, > c from the two reduced forms. Such conditions
1650                                                                  G. S. Maddala


for logical consistency have been pointed out by Amemiya (1974), Maddala and
 Lee (1976) and Heckman (1978). They need to be imposed in switching simulta-
neous systems where the switch depends on some of the endogenous variables.
 Gourieroux et al. (1980b) have derived some general conditions which they call
 “coherency conditions” and illustrate them with a number of examples. These
conditions are derived from a theorem by Samelson et al. (1958) which gives a
necessary and sufficient condition for a linear space to be partitioned in cones.
We will not go into these conditions in detail here. In the case of the switching
simultaneous system considered here, the condition they derive is that the
determinants of the matrices giving the mapping from the endogenous variables
(Y,, Y,,..., Y,) to the residuals (zdi, Us,..., uk) are of the same sign, in the
different regimes. The two determinants under consideration are (1 - y1y2) and
(1 - yly$). The condition for logical consistency of the model is that they are of
the same sign or (1 - y1y2)(1 - yly;) > 0. A question arises about what to do’with
these conditions. One can impose them and then estimate the model. Alterna-
tively, since the condition is algebraic, if it cannot be given an economic
interpretation,   it is important to check the basic structure of the model. An
illustration of this is the dummy endogenous variable model in Heckman (1976a).
The model discusses the problem of estimation of the effect of fair employment
laws on the wages of blacks relative to whites, when the passage of the law is
endogenous. The model as formulated by Heckman is a switching simultaneous
equations model for XC& we have to impose a condition for “logical con-
sistency”. However, the condition does not have any meaningful economic
interpretation    and as pointed out in Maddala and Trost (1981) a careful
examination of the arguments reveals that there are two sentiments, not one as
assumed by Heckman, that lead to the passa,ge of the law, and when the model is
reformulated, there is no condition for logical consistency that needs to be
imposed.
   The simultaneous equations models with truncated dependent variables consid-
ered by Amemiya (1974) are also switching simultaneous equations models which
require conditions for logical consistency. Again, one needs to examine whether
these conditions need to be imposed exogenously or whether a more logical
formulation of the problem leads to a model where these conditions are automati-
cally satisfied. For instance, Waldman (1981) gives an example of time allocation
of young men to school and work where the model is formulated in terms of
underlying behavioural relations and the conditions derived by Amemiya follow
naturally from economic theory. On the other hand, these conditions have to be
imposed exogenously (and are difficult to give an economic interpretation) if the
model is formulated in a mechanical fashion where time allocated to’work was
modelled as a linear function of school time and exogenous variables and time
allocated to school was modelled as a linear function of work time and exogenous
variables.
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models               1651

   The point of this lengthy discussion is that in switching simultaneous equation
models, we often have to impose some conditions for the logical consistency of
the model. If these conditions cannot be given a meaningful economic interpreta-
tion, it is worthwhile checking the original formulation of the model rather than
imposing these conditions exogenously and estimating the parameters in the
model subject to these conditions.
   An interesting feature of the switching simultaneous systems is that it is
possible to have underidentified systems in one of the regimes. As an illustration,
consider the following model estimated by Avery (1982):

      D = &Xi + a,Y + ui Demand for Durables.
      Y, =&Xi       + a2D + u2 Demand for Debt.
      Y, =&X3 + a,D + uj Supply of Debt.
      Y = min( Yr, Y,) Actual quantity of Debt.

  D, Y,, Y, are the endogenous variables and X, and X3 are sets of exogenous
variables. Note that the exogenous variables in the demand for durables equation
and the demand for debt equation are the same.
  The model is a switching simultaneous equations model with endogenous
switching. We can write the model as follows:

      Regime 1: Y, -c Y2                     Regime 2: Y; < Yr
      D=pXl+a,Y+ul                           D = &Xl + a,Y + u1
      Y = ,ll;X, + cw,D c u2                 Y = &X3     +   a,D   +   u3




  If we get the reduced forms for Y, and Y, in the two regimes and simplify the
expression Y, - Y2, we find that:

      (Yr-Y,)inRegimeZ=s{(Y,-Y,)inRegimel}.

Thus, the condition for the logical consistency of this model is that (1 - (Y~oL~)
                                                                                and
(1 - (Y& are of the same sign - a condition that can also be derived by using the
theorems in Gourieroux et al. (1980b).
   The interesting thing to note is that the simultaneous equation system in
Regime 1 is under-identified. However, if the system of equations in Regime 2 is
identified, the fact that we can get consistent estimates of the parameters in the
demand equation for durables from Regime 2, enables us to get consistent
estimates of the parameters in the Y, equation. Thus the parameters in the
simultaneous equations system in Regime 1 are identified. One can construct a
formal and rigorous proof but this will not be attempted here. Avery (1982) found
1652                                                                          G. S. Maddaia


that he could not estimate the parameters of the structural equation for Y, but
this is possibly due to the estimation methods used.
   In summary, switching simultaneous equations models often involve the im-
position of constraints on parameters so as to avoid some internal inconsistencies
in the model. But it is also very often the case that such logical inconsistencies
arise when the formulation of the model is mechanical. In many cases, it has been
found that a re-examination and a more careful formulation leads to an alterna-
tive model where such constraints need not be imposed.
   There are also some switching simultaneous equations models where a variable
is endogenous in one regime and exogenous in another and, unlike the cases
considered by Richard (1980) and Davidson (1978), the switching is endogenous.
An example is the disequilibrium model in Maddala (1983b).


6.      Disequilibrium   models: Different formulations of price adjustment

Econometric estimation of disequilibrium models has a long history. The partial
adjustment models are all disequilibrium models and in fact this is the type of
model that the authors had in mind when they talked of ‘“disequilibrium model.”
Some illustrative examples of this are Rosen and Nadiri (1974). arid Jonson and
Taylor (1977).
   The recent literature on disequilibrium econometrics considers a different class
of models and has a different structure. These models are more properly called
“rationing models.” This literature started with the paper by Fair and Jaffee
(1972). The basic equation in their models is

         Q, = MidD,,     St),                                                          (6.1)
where
         Q, = quantity transacted
         D, = quantity demanded
         S, = quantity supplied.

       Fair and Jaffee considered two classes of models
       (i) Directional models: In these we mfer whether Q, is equal to D, or S, based
           on the direction of price movement, i.e.
               D, > St and hence Q, = S,       if AP, > 0,
               D, < St and hence Q, = D,       if AP, c 0,
            where A P, = P, - P,_ ,,
            and
       (ii) Quantitative models: In these the price change is proportional       to excess
            demand (or supply), i.e.
               P, - P,-. i = y(D, - S,).                                               (6.2)
Ch. 28: Disequd~bnum, Seij-sekrtton   and Switchrnp    Mod&                                    1653


    The maximum      likelihood estimation of the quantitative     model is discussed in
Amemiya (1974a). The maximum likelihood estimation of the directional                 model,
and models with stochastic sample separation (i.e. where only (6.1) is used or (6.2)
is stochastic) is discussed in Maddala and Nelson (1974).
    The directional    method is logically inconsistent    since the condition     that AP,
gives information     on sample separation implies that F’* is endogenous,        in which
case there are not enough equations to determine           the endogenous     variables Q,
and Pt.” We will, therefore, discuss only -models with the price determination           eq.
(4.2) included.
    There are three important      problems with the specification    of this model that
need some discussion. These are:
(i) The meaning of the price adjustment          eq. (6.2)
(ii) The modification       in the specification  of the demand and supply functions
      that need to be made because of the existence of the disequilibrium,           and
(iii) The vahdity of the min. condition (6.1).
We will discuss these problems in turn.



6.1.    The meaning of the price adjustment equation

The disequilibrium market model              usually     considered   consists   of the following
demand and supply functions:




and the eqs. (6.1) and (6.2). To interpret the “price adjustment”      eq. (6.2) we have
to ask the basic question of why disequilibrium       exists. One interpretation   is that
prices are fixed by someone. The model is thus a j&price model. The disequi-
librium exists because price is fixed at a level different from the market equilibrat-
ing level (as is often the case in centrally planned economies).         In this case the

   41~e directional  method makes sense only for the estimation of the reduced form equations for 0,
and S, in a model with a price adjustment      equation. There are cases where this is needed. The
likelihood  function for the estimation of the parameters   in this model is derived in Maddala and
Nelson (1974). It is:




where g( D, S) is the joint density of D and S (from the reduced form equations). When A P < 0 we
have D = Q and S > Q and when AP > 0 we have S = Q and D > Q. Note that the expression given
in Fair and Kelejian (1974) as the likelihood function for this model is not correct though it gives
consistent estimates of the parameters.
1654                                                                       G. S. Maddula


price adjustment eq. (6.2) can be interpreted as the rule by which the price-fixing
authority is changing the price. However, there is the problem that the price-fixing
authority does not know D, and S, since they are determined only after P, is
fixed. Thus, the eq. (6.2) cannot make any sense in the fix-price model. Laffont
and Garcia (1977) suggested a modification of the price adjustment equation
which is:

       P t+l- P, = Y(D, - s,).                                                   (6.2’)

In this case the price fixing authority uses information on the past period’s
demand and supply to adjust prices upwards or downwards. In this case the
price-fixing rule is an operational one but one is still left wondering why the
price-fixing authority follows such a dumb rule as (6.2’). A more reasonable thing
to do is to fix the price at a level that equates expected demand and supply. One
such rule is to determine price by equating the components of (6.3) and (6.4) after
ignoring the stochastic disturbance terms. This gives

       p = 4*P1-          X2$*
        f                                                                         (6.5)
                 a2   -   a1



This is the procedure suggested by Green and Laffont (1981) under the name of
“anticipatory pricing”.
   As mentioned earlier, the meaning of the price adjustment equation depends on
the source of disequilibrium. An alternative to the fix-price model as an explana-
tion of disequilibrium is the pa&l adjustment model (see Bowden, 1978 a, b). The
source of disequilibrium in this formulation is stickiness of prices (due to some
institutional constraints or other factors). Let P,* be the market equilibrating
price. However, prices do not adjust fully to the market equilibrating level and we
specify the “partial adjustment” model:

       4 - p,-1 =h(P,*-          Pt_,)   O<h<l
                  =A(P,*-P,+P,-P,_,).                                             (6.6)
Hence

       p* -   p*-1z&P,*-P,).                                                      (6.7)

If P, -c P,* there will be excess demand and if P, > P,* there will be excess supply.
Hence, if A P, c 0 we have a situation of excess supply.
   Note that in this case it is AP, (not AP,+l as in the Laffont-Garcia case) that
gives the sample separation. But the interpretation is not that prices rise in response
to excess demand (as implicitly argued by Fair and Jaffee) but that there is excess
Ch. 28: Disrqudbkmz,     Self- selectron cmd Switching Models                                     1655

demand (or excess supply) because prices do not fully adjust to the equilibrating
values.5
Equation (6.7) can also be written as

     pt-pt-1 = Y(D, - s,),                                                                      (6.8)
if we assume that the excess demand (0, - S,) is proportional         to the difference
(P,* - P,), i.e. the difference between the equilibrating  price and the actual price.
The interpretation    of the coefficient y in (6.8) is of course different from what
Fair and Jaffee gave to the same equation.
   One can also allow for different speeds of upward and downward                partial
adjustment.   Consider the following formulation:

      P,-    Pt_l=x,(P,*-P,_,)                if P,* > P,_l,

                   = A,( P,* - P,_,)           if P,* < P,_,.                                   (6.9)

These equations        imply


      p* -   p,-1 =A-(P,+-P,)                      ifP,“>P,.
                               1



                   =&(p;-P,)                       ifP,*<P,
                               2



Note first that the conditions  P,* r Prmi, P, > Pt-l, P,* > P, and D, > St are all
equivalent.  Also assuming that excess demand is proportional    to P,* - P, we can
write eqs. (6.10) as

     4=~,@,-4)                      if D, > S,

             = u,(D,   - 4)         if D, -C S,.                                               (6.11)

Again note that we get A P, and not A P,+ 1 in these equations.
   Ito and Ueda (1979) use Bowden’s formulation           with different    speeds of
adjustment   as given by (6.9) to estimate the rates of adjustment   in interest rates
for business loans in the U.S. and Japan. They prefer this formulation       to that of
Fair and Jaffee or Laffont and Garcia because in eq. (6.9), A, and X2 are pure
numbers which can be compared across countries. The same cannot be said about
the parameters   yi and y2 in eq. (6.11).

   ‘The formulation    in terms of partial adjustment  towards P* was suggested by Bowden      (1978a)
though he does not use the interpretation     of the Fair-Jafiee equation given here. Bowden   (1978b)
discusses this approach in greater detail under the title: “The PAMEQ Specification”.
1656                                                                                             G. S. Maddala

   There is still one disturbing feature about the partial adjustment               eq. (6.6) that
Bowden adopts and under which we have given a justification                     for the Fair and
Jaffee directional     and quantitative    methods. This is that AP, unambiguously             gives
us an idea about whether there is excess demand or excess supply. As mentioned
earlier this does not make intuitive sense. On closer examination               one sees that the
problem is with eq. (6.6), in particular the assumption             that X lies between 0 and
1. This is indeed a very strong assumption and implies that prices are sluggish but
never change to overshoot            P,* the equilibrium      prices. There is? however, no
a priori reason why this should happen.           6  Once   we   drop the assumption        that h
should lie between 0 and 1, it is no longer true that we can use AP, to classify
observations      as belonging to excess demand or excess supply. As noted earlier the
assumption       0 < h < 1 implies that the conditions         P,* > Pt__,, P, > PC_,, P,* > P,
and D, > S, are all equivalent. With A > 1, this no longer holds good.
    In summary,      we considered two models of disequilibrium--            the fix-price model
and the partial adjustment        model. In the f&price model,the price adjustment               eq.
(6.2) is non-operational.      The modification     (6.2’) suggested by Laffont and Garcia
is an operational       rule but really does not make much sense. A more reasonable
formula     for a price-setting     rule is the anticipatory      pricing rule (6.5). But this
implies that a price-adjustment         equation like (6.2) or (62’j is not valid.
    In the case of the partial adjustment        model one ca.n derive an equation of the
form (6.2) though its meaning is different from the one given by Fair and Jaffee
and many others using this price adjustment              equation. The meaning is not that
prices adjust in response to excess demand or supply but that excess demand and
supply exist because prices do not adjust to the market equilibrating                         level.
However, as discussed earlier, eq. (6.2) can be derived from the partial adjustment
model (6.6) only under a restrictive set of assumptions.
   The preceding arguments hold good when eq. (6.2) is made stochastic with the
addition     of a disturbance      term. In this case there is not much use for the
price-adjustment       equation. The main use of eq. (6.2) is that it gives a sample
separation,     and estimation    with sample separation known is much simpler than
estimation     with sample separation unknown. If one is anyhow going to estimate a
model with sample separation unknown, then one can as well eliminate eq. (6.2).
For fix-price models, one substitutes           the anticipatory       price eq. (6.5) and for
partial adjustment       models one uses eq. (6.6) directly.



6.2.   Modifications in the speci$cution of the demand and supp(v functions

The preceding       discussion refers to alternative formulations of the price adjust-
ment equation.      One can also question the specification of the other equations as

   6Since no economic   model has been specified,   there is no reaon   to make any aItematr\e     assumption
either.
Ch. 28: Disequilibrium,    Self-selection    and Switching Models                                         1657

well. We will now discuss alternative specifications of the demand and supply
functions.
   The probability that there would be rationing should affect the demand and
supply functions. There are two ways of taking account of this. One procedure
suggested by Eaton and Quandt (1983) is to introduce the probability of rationing
as an explanatory variable in the demand and/or supply functions (6.3) and (6.4).
A re-specification of eq. (6.3), they consider is

                                                                                                        (6.3’)


      r, = Prob( 0, > S,),
yr is expected to be < 0. Eaton and Quandt show that the solution for rt is
unique.7 In their empirical work they include (1 - r,) as an explanatory variable
in the supply function. They also include a price adjustment equation in their
model.
   An alternative procedure to take account of the probability of rationing is to
re-formulate the demand and supply functions in terms of expected prices and
incorporate the probability of disequilibrium as a determining factor in the
formation of expectations. This is the approach followed in Chanda (1984). Since
price expectations anyhow need to be introduced into the model and since
stickiness in price movement or other limitations on price movement are the
sources of disequilibrium, this procedure of incorporating probability of rationing
into price expectations is the logical one and is more meaningful than introducing
the probability of disequilibrium as an explanatory variable, as done by Eaton
and Quandt. The approach adopted by Eaton and Quandt does not say what
disequilibrium is due to, whereas the approach based on price expectations
depends on what the sources of disequilibrium are.
   As an illustration of this approach we will re-formulate the supply function by
introducing expected prices. We leave eqs. (6.1) (6.2) and (6.3) as they are and
re-define (6.4) as

      s,   =   X2*&   +   Qte     +   U2I,                                                              (6.4’)

where Pteis the expected price, i.e. the price the suppliers expect to prevail in
period t, the expectation being formed at time t - 1 (we will assume a one period
lag between production decisions and supply). Regarding the expected price P,', if
we use some naive extrapolative or the adaptive expectations formulae, then the
estimation proceeds as in earlier models with no price expectations, with minor
modifications. For instance, with the adaptive expectations formula, one would

   ‘Though the analysis     is similar, the computations   are more complex   because of the presence   of q in
the demand function.
1658                                                                               G. S. Maddala

first get the ML estimates conditional    on a value X of the weighting parameter
and then choose the value of A for which the likelihood is maximum.
    An alternative procedure is to use the rational expectations hypothesis

       p,‘=     E(P,IZ,-,),                                                                (6.12)

where P,’ is the expected price and Z,_1 represents                  the information    set the
economic agents are assumed to have.
   Equation (6.12) implies that we can write




where u, is uncorrelated    with all the variables in the information   set It-l. If the
information    set Z,_, includes the exogenous variables X,, and Xzt, i.e. if these
exogenous variables are known at time I - 1, then we can substitute P,’ = P, - u,
in eq. (6.12). We can re-define a residual U$ = uzt - (Y*u, and u;, has the same
properties   as Us,. Thus the estimation        of the model simplifies    to the case
considered   by Fair and Jaffee.
   If, on the other hand, X,, and X,, are not known at time (t - 1) we cannot
treat u, the same way as we treat uzl since u, can be correlated with Xi, and X,,.
In this case we proceed as follows.
   From eqs. (6.2) (6.3), and (6.4’) we have




or




Taking        expectations    of both sides conditional   on the information   set ZI_1,

       P,‘-     Pt_l=    Y[P;x;c-Pix;*,)+(~,-~*,P~l~

or

                                                                                           (6.13)

where


       &= [l+y(a:-al),
                  ’

       h2=[l+y(:2-al)]
                 ’
Ch. 28: Disequilibrium,           Se&f-selection and Switching Models          1659

and XI7 and Xi, are the expected values of X,, and X,,. (Note that this equation
is valid even if the price adjustment eq. (6.2) is made stochastic.)
   To obtain Xz and Xz we have to make some assumptions about how these
exogenous variables are generated. A common assumption is that they follow
vector autoregressive processes. Let us for the sake of simplicity of notation
assume a first order autoregressive process.

       Xl,   =   +11x1,,-1          +       +12x2,t-1+       Elt*


       X2,=4321&,1-1                    +   +22x2,r-1+       Ezt*            (6.14)

Then

       x;:   =   +llx~,t-l              +   +12x2,1-19



and

       x,:   =   +21q-1+                    @22X2.,-l.



   We substitute these equations in (6.13) and substitute the resulting expression
for P,’ in eq. (6.4’).
   The estimation of the model will proceed as with the usual disequilibrium
model. The likelihood function in this model is derived in exactly the same way as
with the Fair and Jaffee model, as derived in Amemiya (1974). The only extra
complication is the existence of cross-equation restrictions as implied by eqs.
(6.14), as discussed in Wallis (1980). The two-stage least squares estimation
suggested in Amemiya (1974) can also be easily adapted to the above model. For
details of this, see Chanda (1984).
   Yet another modification in the specification of the demand and supply
function that one needs to make is that of ‘spillovers’. The unsatisfied demand
and excess supply from the previous period will spill over to current demand and
supply. The demand and supply functions (6.3) and (6.4) are now reformulated
respectively as:

       0, = X,,& + alp, + &@,-,                          - Q,-,>+G
       St = X2,/32           +   (~28       +   a,@-1    -   Q,-,I+   uzt,   (6.15)

with 6, > 0, S, > 0, and S,6, ~1. [See Orsi (1982) for this last condition.]
   At time (t - l), Q,_, is equal to D,_r or S,_,. Thus, one of these is not
observed. However, if the price adjustment eq. (6.2) is not stochastic, one has a
four-way regime classification depending on excess demand or excess supply at
time periods (t - 1) and t. Thus, the method of estimation suggested by Amemiya
(1974a) for the Fair and Jaffee model can be extended to this case. Such extension
1660                                                                        G. S. Maddala

is done in Laffont and Monfort (1979). Orsi (1982) applied this model to the
Italian labor market but the estimates of the spill-over coefficients were not
significantly different from zero. This method is further extended by Chanda
(1984) to the case where the supply function depends on expected prices and
expectations are formed rationally.


6.3.    The validity of the ‘Min’condition

As mentioned in the introduction, the main element that distinguishes the recent
econometric literature on disequilibrium models from the earlier literature is the
‘Mm’ condition’ (6.1). This condition has been criticized on the grounds that:
  (a) Though it can be justified at the micro-levei, it cannot be valid at the
      aggregate level where it has been very often used.
  (b) It introduces unnecessary computational problems which can be avoided by
      replacing it with

             Q=M~~[E(D),E(S)]+E.                                                   (6.1’)

  (c) In some disequilibrium         models, the appropriate   condition for the trans-
      acted quantity is

             Q=O         if D # S.

   Criticism (a) made by Muellbauer (1978) is a valid one. The appropriate
modifications depend on the assumptions made about the aggregation procedure.
These problems have been discussed in Batchelor (1977), Kooiman and Kloek
(1979), Malinvaud (1982) and Muellbauer and Winter (1980). Bouisson, Laffont
and Vuong (1982) suggests using survey data to analyze models of disequilibrium
at the aggregate level.
   Regarding criticism (b), Richard (1980b) and Hendry and Spanos (1980) argue
against the use of the ‘Min’ condition as formulated in (6.1). Sneessens (1981,
1983) adopts the condition (6.1’). However, eq. (6.1’) is hard to justify as a
behavioural equation. Even the computational advantages are questionable [see
Quandt (1983) pp. 25-261. The criticism of Hendry and Spanos is also not valid
on closer scrutiny [see Maddala (1983a), pp. 34-35 for details].
   Criticism (c) is elaborated in Maddala (1983a,b), where a distinction is made
between “Rationing models” and “Trading Models”, the former term applying to
models for which the quantity transacted is determined by the condition (6.1),
and the latter term applying to models where no transaction takes place if 0, # S,.
Condition (6.1) is thus replaced by

       Q, = 0      if D, f S,.                                                    (6.1”)
Ch. 28: Disequilibrium,   Self-selection   and Switching Models                                    1661

The term ‘trading model’ arose by analogy with commodity trading where trading
stops when prices hit a floor or a ceiling (where there is excess demand or excess
supply respectively). However, in commodity trading, a sequence of trades takes
place and all we have at the end of the day is the total volume of trading and the
opening, high, low and closing prices. ’ Thus, commodity trading models do not
necessarily fall under the category of ‘trading’ models defined here. On the other
hand models that involve ‘rationing’ at the aggregate level might fall into the class
of ‘trading’ models defined here at the micro-level. Consider, for instance, the
loan demand problem with interest rate ceilings. At the aggregate level there
would be an excess demand at the ceiling rate and there would be rationing. The
question is how rationing is carried out. One can argue that for each individual
there is a demand schedule giving the loan amounts L the individual would want
to borrow at different rates of interest R. Similarly, the bank would also have a
supply schedule giving the amounts L it would be willing to lend at different rates
of interest R. If the rate of interest at which these two schedules intersect is I E
the ceiling rate, then a transaction takes place. Otherwise no transaction takes
place. This assumption is perhaps more appropriate in mortgage loans rather than
consumer loans. In this situation Q is not Min(D, S). In fact Q = 0 if D # S.The
model would be formulated as:


       LoanDemand              Li=alRi+/3~Xli+uli
                                                                  if RTsx,
       Loan Supply             Li=azRi+fl;X2i+~i
                                               I
                               Li= 0 otherwise.

R5 is the rate of interest that equilibrates demand and supply. If the assumption
is that the individual borrows what is offered at the ceiling rate i?, an assumption
more appropriate for consumer loans, we have

      Li=a,R+p;X,i+U2i                       if RF>i?.

In this case of course Q = Min( D,S),but there is never a case of excess-supply.
Further discussion of this problem can be found in Maddala and Trost (1982).

   8Actually, in studies on commodity trading, the total number of contracts is treated as Q, and the
closing price for the day as P,. The closing price is perhaps closer to an equilibrium price than the
opening, low and high prices. But it cannot be treated as an equilibrium price. There is the question of
what we mean by ‘equilibrium’ price in a situation where a number of trades take place in a day. One
can interpret it as the price that would have prevailed if there was to be a Walrasian auctioneer and a
single trade took place for a day. If this is the case, then the closing price would be an equilibrium
price only if a day is a long enough period for prices at the different trades to converge to some
equilibrium.  These problems need further work. See Monroe (1981).
1662                                                                                       G. S. Maddala

   The important situations where this sort of disequilibrium model arises is where
there are exogenous controls on the movement of prices. There are essentially
three major sources of disequilibrium that one can distinguish.
   (1) Fixed prices
   (2) Imperfect adjustment of prices
   (3) Controlled prices
   We have till now discussed the case of fixed prices and imperfect adjustment to
the market equilibrating price. The case of controlled prices is different from the
case of fixed prices. The disequilibrium model considered earlier in example 1,
Section 1 is one with flx:d prices. With fixed prices, the market is almost always
in disequilibrium. With controlled prices, the market is sometimes in equilibrium
and sometimes in disequilibrium.’
   Estimation of disequilibrium models with controlled prices is discussed in
Maddala (1983a, pp. 327-34 and 1983b) and details need not be presented here.
Gourieroux and Monfort (1980) consider endogenously controlled prices and
Quandt (1984) discusses switching between equilibrium and disequilibrium.
   In summary, not all situations of disequilibrium involve the ‘Min’ condition
(6.1). In those formulations where there is some form of rationing, the alternative
condition (6.1’), that has been suggested on grounds of ccmputational simplicity,
is not a desirable one to use and is difficult to justify conceptually.
   What particular form the ‘Min’ condition takes depends on how the rationing
is carried out and whether we are analyzing micro or macro data. The discussion
of the loan problem earlier shows how the estimation used depends on the way
customers are rationed. This analysis applies at the micro level. For analysis with
macro data Goldfeld and Quandt (1983) discuss alternative decision criteria by
which the Federal Home Loan Bank Board (FHLBB) rations its advances to
savings and loan institutions. The paper based on earlier work by Goldfeld, Jaffee
and Quandt (1980) discusses how different targets and loss functions lead to
different forms of the ‘Min’ condition and thus call for different estimation
methods. This approach of deriving the appropriate rationing condition from
explicit loss functions is the appropriate thing to do, rather than writing down the
demand and supply functions (6.3), and (6.4), and saying that since their is
disequilibrium (for some unknown and unspecified reasons) we use the ‘Min’
condition (6.1).


7.     Some other problems of specification in disequilibrium models

We will now discuss some problems of specifications in disequilibrium                           models
that need further work.

  ‘Mackinnon    (1978) discusses this problem but the likelihood functions   he presents   are incorrect.
The correct analysis of this model is presented in Maddala (1983b).
Ch. 28: Disequilibrium,   Self-selection   and Switching Models                      1663

7.1,    Problems     of serial correlation

The econometric      estimation of disequilibrium     models is almost exclusively based
on the assumption         that the error terms are serially independent.      If they are
serially correlated,     the likelihood  functions    are intractable since they involve
integrals   of a very high dimension.      One can, however, derive a test for serial
correlation   based on the Lagrangian multiplier principle that does not involve the
evaluation    of multiple integrals. (See Lee and Maddala, 1983a.) Quandt (1981)
discusses the estimation       of a simple disequilibrium      model with autocorrelated
errors but the likelihood function maximized by him is L = n,h(Q,)           which is not
correct since Q, and Q,_, are correlated.            The only example till now where
estimation    is done with autocorrelated      errors is the paper by Cosslett and Lee
(1983) who analyze the model

       Y, = x,p + d, - ll,,

where U, are first-order autocorrelated,     Y, is a continuous   indicator and 1, is a
discrete indicator     measured   with error. The model they consider         is thus, a
switching   regression   model with exogenous       switching   and imperfect     sample
separation.   Cosslett and Lee derive a test statistic for detecting serial correlation
in such a model and show that the likelihood function can be evaluated by a
recurrence   relation, and thus maximum likelihood estimation is computationally
feasible.
   For the disequilibrium       model with known sample separation,        one can just
transform    the demand      and supply eqs. (6.3) and (6.4). For instance,        if the
residuals in the two equations are first-order autocorrelated,     we have

       %* = Plul,,-l+        e1t9

       u21 = p2u2,1-1+        e2r.                                                  (7.1)

Then    we have



and


       s, = p$_,        + P2X2r      - P2P2X2,,-I    + e2t.                         (7.2)


   Since sample separation     is available, the procedure in Laffont and Monfort
(1979) can be used with the modification      that there are nonlinear restrictions on
the parameters    in (7.2). The same procedure holds good if, instead of (7.1) we
specify an equation where ult and u21 depended on lagged values of both ult and
U2r
1664                                                                    G. S. Maddala

   Thus, serially correlated errors can be handled if the sample separation is
known and in models with exogenous switching even if the sample separation
is imperfect.

7.2.   Tests for distributional   assumptions

The econometric estimation of disequilibrium models is entirely based on the
assumption of normality of the disturbances. It would be advisable to devise tests
of the normality assumption and suggest methods of estimation that are either
distribution-free or based on distributions more general than the normal distribu-
tion. Lee (1982b) derives a test for the assumption of normality in the disequi-
librium market model from the Lagangean multiplier principle. The test is based
on some measures of cumulants. He finds that for the data used by Fair and
Jaffee (1972) the normality assumption is strongly rejected. More work, therefore,
needs to be done in devising methods of estimation based on more general
distributions, or deriving some distribution-free estimators [see Cossleit (1984)
and Heckman and Singer (1984) for some work in this direction].


7.3.   Tests for disequilibrium

There have been many tests suggested for the “disequilibrium hypothesis”, i.e. to
test whether the data have been generated by an equilibrium model or a
disequilibrium model. Quandt (1978) discusses several tests and says that there
does not exist a uniformly best procedure for testing the hypothesis that a market
is in equilibrium against the alternative that it is not.
   A good starting point for “all” tests for disequilibrium is to ask the basic
question of what the disequilibrium is due to. In the case of the partial adjustment
model given by eq. (6.7) the disequilibrium is clearly due to imperfect adjustment
of prices. In this case the proper test for the equilibrium vs. disequilibrium
hypothesis is to test whether X = 1. See Ito and Ueda (1981). This leads to a test
that l/y = 0 in the Fair and Jaffee quantitative model, since y is proportional to
l/l - X. This is the procedure Fair and Jaffee suggest. However, if the meaning of
the price adjustment equation is that prices adjust in response to either excess
demand or excess supply, then as argued in Section 6, the price adjustment
equation should have A P, + 1 not A P,, and also it is not clear how one can test for
the equilibrium hypothesis in this case. The intuitive reason is that now the price
adjustment equation does not give any information about the source of the
disequilibrium.
   Quandt (1978) argues that there are two classes of disequilibrium models which
are;
   (a) Models where it is known for which observations 0, < S, and for which
       D, > S,, i.e. the sample separation is known, and
Ch. 28: Disequilibrium,   Self selection and Switching Models                    1665

   (b) Models in which such information is not available.
   He says that in case (a) the question of testing for disequilibrium does not arise
at all. It is only in case (b) that it makes sense.
   The example of the partial adjustment model (6.7) is a case where we have
sample separation given by AP,. However, it still makes sense to test for the
disequilibrium hypothesis which in this case merely translates to a hypothesis
about the speed of adjustment of prices to levels that equilibrate demand and
supply. Adding a stochastic term us, to the price adjustment equation does not
change the test. When A =l this says P, = P,* + Use.
   There is considerable discussion in Quandt’s paper on the question of nested
vs. non-nested hypothesis. Quandt argues that very often the hypothesis of
equilibrium vs. disequilibrium is non-nested, i.e. the parameter set under the null
hypothesis that the model is an equilibrium model is not a subset of the
parameter set for the disequilibrium model. The problem in these cases may be
that there is no adequate explanation of why disequilibrium exists in the first
place.
   Consider for instance, the disequilibrium model: with the demand and supply
functions specified by eqs. (6.3) and (6.4).
   Quandt argues that if one takes the limit of the likelihood function for this
model with price adjustment equation as:


                                                                                (7.3)

and

      CT*3 =   Cov( u2, Uj) = 0,

      (113 =   cov( ul, u3) = 0,

      u3’# 0,




then we get the likelihood function for the equilibrium model (Q, = D, = St) and
thus the hypothesis is “nested”; but that if 03’= 0, the likelihood function for the
disequilibrium model does not tend to the likelihood function for the equilibrium
model even if y + cc and thus the hypothesis is not tested. The latter conclusion,
however, is counter-intuitive and if we consider the correct likelihood function for
this model derived in Amemiya (1974) and if we take the limits as y + cc, we get
the likelihood function for the equilibrium model.
1666                                                                                   G. S. Maddala

   Quandt    also shows that if the price adjustment           equation   is changed    to


       AP,+I =v@,-$)++t,                                                                       (7.4)

then the limit of the likelihood function of the disequilibrium             model as y + cc is
not the likelihood function for the equilibrium             model. This makes intuitive sense
and is also clear when we look at the likelihood functions derived in Section 5. In
this case the hypothesis is nonnested, but the problem is that as discussed earlier,
this price adjustment         equation does not tell us anything         about what disequi-
librium is due to. As shown in Section 6, the price adjustment                 eq. (7.3) follows
from the partial adjustment eq. (6.7) and thus throws light on what disequilibrium
is due to, but the price adjustment             eq. (7.4) says nothing about the source of
disequilibrium.     If we view the equation as a forecast equation, then the disequi-
librium is due to imperfect forecasts of the market equilibrating             price. In this case
it is clear that as y --) 00, we do not get perfect forecasts. What we need to have
for a nested model is a forecasting equation which for some limiting values of
some parameters        yields perfect forecasts at the market equilibrating          prices.
    Consider now the case where we do not have a price adjustment                   equation and
the model merely consists of a demand equation and a supply equation. Now,
clearly the source of the disequilibrium            is that P,is exogenous. Hence the test
boils down to testing whether P, is exogenous or endogenous.                       The methods
developed by Wu (1973) and Hausman (1978) would be of use here.
   As mentioned       earlier, if a disequilibrium     is due to partial adjustment      of prices,
then a test for disequilibrium        is a test for X = 0 in eq. (6.7) or a test that l/y = 0
in eq. (6.2). The proper way to test this hypothesis                is to re-parameter&e         the
equations     in terms of q = l/A before the estimation is done. This re-parameteri-
zation      is desirable       in all models          (models     with   expectational         vari-
ables, spillovers,     inventories     etc.) where the price adjustment         eq. (6.2) or its
stochastic version is used.
    There is only one additional problem and it is that the model is instable for
n < 0. Thus the null hypothesis TJ= 0 lies on the boundary of the set of admissible
values of n. In this case one can use the upper 2a percentage point of the x2
distribution     in order that the test may have a significance            level of (Y in large
samples. Upcher (1980) developed a Lagrange multiplier or score statistic. The
score test is not affected by the boundary problem and only requires estimation of
the constrained      model, i.e. the model under the hypothesis of equilibrium.                This
test is therefore computationally         much simpler than either LR or Wald test and in
case the null hypothesis of equilibrium is accepted, one can avoid the burdensome
method of estimating the disequilibrium             model. Upcher’s analysis shows that the
score test statistic is identical for both stochastic and non-stochastic             specification
of *the price-adjustment        equation. The advantage of this result is that it encom-
passes a broad spectrum of alternatives.               But, in case the null hypothesis            of
Ch. 28: Disequilibrium, Self-selection and Switching Models                       1661

equilibrium is rejected, a range of alternative specifications for the disequilibrium
model is possible.
   However, a major objection to the use of Lagrange multiplier procedure is that
it ignores the one-sided nature of the alternative and, therefore, is likely to result
in a test with low power compared to the LR or Wald test procedures.
   This issue has been recently addressed by Rogers (1983) who has proposed a
test statistic that is asymptotically equivalent under the null hypothesis and a
sequence of local alternatives to the LR and Wald statistics, and which has the
same computational advantage over these statistics as does the Lagrange multi-
plier statistic over the LR and Wald statistics in the case of the usual two-sided
alternatives.
   An alternative test for disequilibrium developed by Hwang (1980) relies on the
idea of deriving an equation of the form




from the equilibrium and disequilibrium model. The difference between the two
models is that ?~i,7r2,3 are stable over time in the equilibrium model and varying
over time in the disequilibrium model. Hwang, therefore, proposes to use stability
tests available in the literature for testing the hypothesis of equilibrium. In the
case of the equilibrium model P, is endogenous. Eq. (7.5) is derived from the
conditional distribution of Q, given P, and hence can be estimated by ordinary
least squares. The only problem with the test suggested by Hwang is that
parameter instability can arise from a large number of sources and if the null
hypothesis is rejected, we do not know what alternative model to consider.
   In summary, it is always desirable to base a test for disequilibrium on a
discussion of the source for disequilibrium.




7.4.   Models with inventories

In Section 6 we considered modifications of the demand and supply functions
taking account of spillovers. However, spillovers on the supply side are better
accounted for by introducing inventories explicitly. Dagenais (1980) considers
inventories and spillovers in the demand function and suggests a limited informa-
tion method. Chanda (1984) extends this analysis to take into account expected
prices in the supply function.
   Green and Laffont (1981) consider inventories in the context of a disequi-
librium model with anticipatory pricing. LatTont (1983) presents a survey of the
theoretical and empirical work on inventories in the context of fixed-price models.
1668                                                                     G. S. Maddala

   The issues of how to formulate the desired inventory holding and how to
formulate inventory behaviour in the presence of disequilibrium are problems
that need further study.


8.   Multimarket disequilibrium models

The analysis in the preceding sections on single market disequilibrium models has
been extended to multimarket disequilibrium models by Gourieroux et al. (1980)
and Ito (1980). Quandt (1978) first considered a two-market disequilibrium model
of the following form: (the exogenous variables are omitted):

       4,    = alQzr + 4,
       S,, = &Qzr + 4,
       4 = azQu + F/1,,
       % = PzQn + &t,                                                           (8.1)
       Q,, = Mid%           fL),
       Q2, = Min@L          &).                                                 (8.2)

Quandt did not consider the logical consistency of the model. This is considered
in Amemiya (1977) and Gourieroux et al. (1980a).
   Consider the regimes:

       R,: D,2S1.D2kSz,

       R,:   D,>S,.D,<S,,
       R,:   D,cS,-D,cS,,

       R,:   D, < S,. D, 2 S,.                                                  (8.3)

In regime 1, we have Q, = S,, Q, = S, and substituting these in (8.1) we have




Similarly,     we can define the corresponding   matrices   A,, A,, A,   in regimes
Ch. 28: Disequilibrium,          Self-selection     and Switching Models                                1669

R,,   R,, R,              respectively       that            give the   mapping   from   (III, St, D,,S,) to
(q,   u2,   u3,    %I.




      A,=

                    0
                  i 010    I  -i%
                                1a2      -811
                                         -a,0           01
                                                                  A,=

                                                                          -(Y2
                                                                          -p20
                                                                            01    01   -81
                                                                                       -(Y1
                                                                                         01   01




                       11*
and




                     -&OO
                          1       0     0         -a1
                          0       1     0         -PI
      A,=
                     -lY2         0     1           0



The logical consistency or ‘coherency’ conditions derived by Gourieroux et al. are
that the determinants of these four matrices, i.e. (1 - &p2), (l- cu,&), (1 - CQOL~),
(1- a1P2) must be the same sign.
   The major problem that the multimarket disequilibrium models are supposed
to throw light on (which the models in eqs. (8.1) and (8.2) does not) refers to the
“spill-over effects” - the effects of unsatisfied demand or supply in one market on
the demand and supply in other markets. Much of this discussion on spill-over
effects has been in the context of macro-models, the two markets considered are
the commodity market and the labor market. The commodity is supplied by
producers and consumed by households. Labor is supplied by households and
used by producers. The quantities actually transacted are given by


      C=Min(Cd,CS),

      L = Min( Ld, L’).                                                                                (8.4)

The demands and supplies actually presented in each market are called “effective”
demands and supplies and these are determined by the exogenous variables and
the endogenous quantity constraints (8.4). By contrast, the “notional” demands
and supplies refer to the unconstrained values. Denote these by Cd, p, Ed, E.
The different models of multi-market disequilibrium differ in the way ‘effective’
demands and “spill-over effects” are defined. Gourieroux et al. (1980a) define the
1670                                                                   G. S. Maddala

effective demands and ‘spill-over effects’ as follows:

Model I

       cd=cd                      if L = L” I Ld,
                                                                              (8.5)
          =Cd+q(L-tS)             ifL=Ld<LS,
       CS=F                       if L = Ld 2 L”,
                                                                              (8.6)
          =CS+a,(L-Ed)            if L = L” < Ld,
       Ld=zd                      if C=C”SCd,
                                                                              (8.7)
          =?ld+P1(C-CS)           if C=Cd<CS,
       LS=E”                      if C=CdSCS,
                                                                              (8.8)
          =L”+p,(c-Cd)            if C=C”<Cd.

This specification is based on Malinvaud (1977) and assumes that agents on the
short-side of the market present their notional demand as their effective demand
in the other market. For instance eq. (8.5) says that if households are able to sell
all the labor they want to, then their effective demand for goods is the same as
their ‘notional’ demand. On the other hand, if they cannot sell all the labor they
want to, there is a “spill-over effect” but note that this is proportional to L - 1’
not L - L’. (I.e. it is proportional to the difference between actual labor sold and
the ‘notional’ supply of labor.)
   The model considered by Ito (1980) is as follows:

Model II


       Cd = Cd + cQ(L - Ls),                                                 (8.5’)

       Cs=CS+fx2(L-Zd),                                                      (8.6’)

       Ld = Zd + P,(C - c”),                                                 (8.7’)

       L”=Z”+p,(c-Cd).                                                       (8.8’)

An alternative model suggested by Portes (1977) based on work by Benassy is the
following:

Model III


       Cd = Cd -i-al( L - L”),                                               (8.5”)
       C”=CS+a,(L-Ld),                                                       (8.6”)
Ch. 28: Disequilibrium,   Self-selection   and Switching Models                                    1671

      Ld = Ed + &(C          - CS),                                                             (8.7”)

      L”=L”+j?,(c-Cd).                                                                          (8.8”)

Portes compares          the reduced forms for these three models and argues that
econometrically,       there is little to choose between the alternative              definitions     of
effective demand.
   The conditions        for logical consistency (or coherency) are the same in all these
models viz: 0 < CX;~,~1 for i, j = 1,2. Both Gourieroux                   et al. (1980a) and Ito
(1980) derive these conditions,            suggest price and wage adjustment                equations
similar to those considered           in Section 6, and discuss the maximum                likelihood
estimation     of their models. Ito also discusses two-stage estimation similar to that
proposed      by Amemiya         for the Fair and Jaffee model, and derives sufficient
conditions     for the uniqueness of a quantity-constrained            equilibrium     in his model.
We cannot go into the details of all these derivations                 here. The details involve
more of algebra than any new conceptual problems in estimation.                       In particular,
the problems        mentioned       in Section 6 about the different             price adjustment
equations     apply here as well.
    Laffont (1983) surveys the empirical              work on multi-market           disequilibrium
models. Quandt         (1982, pp. 39-54) also has a discussion               of the multi-market
disequilibrium      models.
   The applications        of multi-market     disequilibrium     models all seem to be in the
macro area. However, here the problems of aggregation are very important                         and it
is not true that the whole economy switches from a regime of excess demand to
one of excess supply or vice versa. Only some segments might behave that way.
The implications        of aggregation for econometric        estimation have been studied in
some simple models by Malinvaud (1982).
    The problems of spillovers also tend to arise more at a micro-level rather than a
macro-level.      For instance, consider two commodities               which are substitutes          in
consumption       (say natural gas and coal) one of which has price controls. We can
define the demand            and supply functions         in the two markets (omitting              the
exogenous variables) as follows:

      4 = qp, + PlPz+ ~1,
      s, = c$P, + t+P, I P,
      Q, = Mh(D,,          S,),
      D,=y,P,+S,P,+A(D,-S,)+V,,
      S, = YZPZ + v,,
      Q2 = D, = S,, i.e. the second market is always in equilibrium.

If P, I P, we have the usual simultaneous                  equations   model   with the two quanti-
1672                                                                                     G. S. Maddulu

ties and two prices as the endogenous         variables. If P, > P, then there is excess
demand in the first market and a spill-over of this into the second market. This
model is still in a “partial     equilibrium”   framework but would have interesting
empirical     applications. It is at least one step forward from the single-market
disequilibrium      model which does not say what happens to the unsatisfied demand
or supply.


9.     Models with self-selection

As mentioned     in the introduction,   there is an early discussion of the self-selection
problem in Roy (1951) who discussed the case of individuals               choosing between
two occupations,      hunting    and fishing, on the basis of their comparative           ad-
vantage. See Maddala (1983a) pp. 257-8 for a discussion of this model.
   The econometric     discussion of the consequences      of self-selectivity   started with
the papers by Gronau (1974), Lewis (1974) and Heckman (1974). In this case the
problem is about women choosing to be in the labor force or not. The observed
distribution   of wages is a truncated      distribution. It is the distribution      of wage
offers truncated by reservation wages. The Gronau-Lewis            model consisted of two
equations:

        w, = XP, + Ul,
        w,+xp,+u,.                                                                               (9-I)

We observe W = W, iff W, 2 W,. Otherwise W = 0. We discussed the estimation
of this model in Section 2 and we will not repeat it here. The term ‘selectivity
bias’ refers to the fact that if we estimate eq. (9.1) by OLS based on the
observations  for which we have wages W, we get inconsistent   estimates of the
parameters.
   Note that


                        -403 ’
       E(u,lWo2Wr)=-a ‘W(Z)

where

       z=     al-        Xl2       u=p
                                         u2-        Ul
                                                             a=Var(u,-u,)   and a,,=Cov(u,u,).
                     u         ’               (I        ’

Hence       we can write (9.1) as:


                                                                                                 (9.2)
where E(V)          = 0.
Ch. 28: Disequilibrium,   Self-selection   and Switching Models                              1673

   A test for selectivity bias is a test for ui,, = 0. Heckman (1976) suggested a
two-stage estimation method for such models. First get consistent estimates for
the parameters in 2 by the probit method applied to the dichotomous variable
(in the labor force or not). Then estimate eq. (9.2) by OLS using the estimated
values 2 for 2.
   The self-selectivity problem has since been analyzed in different contexts by
several people. Lee (1978) has applied it to the problem of unions and wages. Lee
and Trost (1978) have applied it to the problem of housing demand with choices
of owning and renting. Willis and Rosen (1979) have applied the model to the
problem of education and self-selection. These are all switching regression mod-
els. Griliches et al. (1979) and ReMy et al. (1979) consider models with both
selectivity and simultaneity. These models are switching simultaneous equations
models. As for methods of estimation, both two-stage and maximum likelihood
methods have been used. For two-stage methods, the paper by Lee et al. (1980)
gives the asymptotic covariance matrices when the selectivity criterion is of the
probit and tobit types.
   In the literature of self-selectivity a major concern has been with testing for
selectivity bias. These are tests for ulU = 0 and a,, = Cov(u, u2) = 0. However, a
more important issue is the sign and magnitude of these covariances and often
not much attention is devoted to this. In actual practice we ought to have
a2u -%I    > 0 but ulu and uzU can have any signs.‘o It is also important           to
estimate the mean values of the dependent variables for the alternate choice. For
instance, in the case of college education and income, we should estimate the
mean income of college graduates had they chosen not to go to college, and
the mean income of non-college graduates had they chosen to go to college. In the
example of hunting and fishing we should compute the mean income of hunters
had they chosen to be fishermen and the mean income of fishermen had they
chosen to be hunters. Such computations throw light on the effects of self-selec-
tion and also reveal difficiencies in the model which simple tests for the existence
of selectivity bias do not. See Bjiirlund and Moffitt (1983) for such calculations.
   In the literature on labor supply, there has been considerable discussion of
“individual heterogeneity”, i.e. the observed self-selection is due to individual
characteristics not captured by the observed variables (some women want to work
no matter what and some women want to sit at home no matter what). Obviously,
these individual specific effects can only be analyzed if we have panel data. This
problem has been analyzed by Heckman and Chamberlain, but since these
problems will be discussed in the chapters on labor supply models by Heckman




   “This is pointed out in Lee (1978b). Trost (1981) illustrates this with an empirical example on
returns to college education.
1614                                                                                       G. S. Maddala

and analysis of cross-section and time-series data by Chamberlain they will not be
elaborated here.
   One of the more important applications of the procedures for the correction of
selectivity bias is in the evaluation of programs.
   In evaluating the effects of several social programs, one has to consider the
selection and truncation that can occur at different levels. We can depict the
situation by a decision tree as follows.



                                                                        Total Sample



                                          Individual Decision                    Individual Decision
                                          to Participate                         Not to Participate in
                                                                                 Experiment

                   Administrator’s                                Administrator’s Decision
                   Decision to Select                             Not to Select


       Control Group                         Treatment Group


Dropout            Continue               Dropout                    Continue

                Figure 2   A decision   tree for the evaluation   of social experiments.




   In practical situations, one would have to assume randomness at certain levels
or else the model can get too unwieldy to be of any use. As to the level at which
selection and truncation bias needs to be introduced, this is a question that
depends on the nature of the problem. Further, in Figure 2 the individual’s
decision to participate preceded the administrator’s decision to select. This
situation can be reversed or both the decisions could be simultaneous. Another
problem is that caused by the existence of multiple categories such as no
participation, partial or full participation or different types of treatment. These
cases fall in the class of models with polychotomous choice and selectivity. The
selectivity problem with polychotomous choice has been analyzed in Hay (1980),
Dubin and McFadden (1984) and Lee (1981). A summary of these methods can
be found in Maddala (1983a, pp. 275-278). An empirical application illustrating
the approach suggested by Lee is in Trost and Lee (1984).
Ch. 28: Disequilibrium,   Self-selection   and Switching Models                  1675

   One further problem is that of truncated samples. Very often we do not have
data on all the individuals -participants and non-participants. If the data consists
of only participants in a program and we know nevertheless that there is
self-selection and we have data on the variables determining the participation
decision function, then we can still correct for selectivity bias. The methodology
for this problem is discussed in the next section. The important thing to note is
that though, theoretically, truncation does not change the identifiability of the
parameters, there is, nevertheless a loss of information.
   There is a vast amount of literature on program evaluation. Some important
references are: Goldberger (1972) and Barnow, Cain and Goldberger (1981).
These papers and the selectivity problem in program evaluation have been
surveyed in Maddala (1983a, pp. 260-267).
   One other problem is that of correcting for selectivity bias when the explana-
tory variables are measured with error. An example of this occurs in problems of
measuring wage discrimination, particularly a comparison between the Federal
and non-Federal sectors. A typical regression equation considered is one of
regressing earnings on productivity and a dummy variable depicting race or sex or
ethnic group. Since productivity cannot be measured, some proxies are used.
When such equations are estimated, say for the Federal (or non-Federal) sectors,
one has to take account of individual choices to belong to one or the other sector.
To avoid the selection bias we have to model not only the determinants of wage
offers but also the process of self-selection by which individuals got into that
sector. An analysis of this problem is in Abowd, Abowd and Killingsworth
(1983).
   Finally, there is the important problem that most of the literature on selectivity
bias adjustment is based on the assumption of normality. Consider the simple two
equation model to analyze the selectivity problem.

      Y= xp + u,
      I*=zy-&,


X and Z are exogenous variables. I * is never observed. All we observe is I = 1 if
I * > 0, I = 0 otherwise. Also Y is not observed unless I * > 0.
   Olsen (1980) shows how the only assumption we need to make a correction for
selection bias in the estimation of p, is that E is normal and that the conditional
expectation of u given E is linear. If u and E are bivariate normal, this condition
follows automatically. Goldberger (1980) made some calculations with alternative
error distributions and showed that the normal selection bias adjustment is quite
sensitive to departures from normality. Lee (1982a, 1983a) suggests some general
transformations to normality. The transformations suggested by him can be done
using some methods outlined in Hildebrand (1956) and Appendix II, c in Bock
1676                                                                     G. S. Maddala

and Jones (1968). This approach permits the analysis of selection bias with any
distributional assumptions. Details can be found in the papers by Lee, and a
summary in Maddala (1983a, pp. 272-275).


10.    Multiple criteria for selectivity

There are several practical instances where selectivity could be due to several
sources rather than just one as considered in the examples in the previous Section.
Griliches et al. (1979) cite several problems with the NLS young men data set that
could lead to selectivity bias. Prominent among these are attrition and (other)
missing data problems. In such cases we would need to formulate the model as
switching regression or switching simultaneous equations models where the switch
depends on more than one criterion function.
   During recent years there have been many applications involving multiple
criteria of selectivity. Abowd and Farber (1982) consider a model with two
decisions: the decision of individuals to join a queue for union jobs and the
decision of employers to draw from the queue. Poirier (1980) discusses a model
where the two decisions are those of the employee to continue with the sponsoring
agency after training and the decisions of the employer to make a job offer after
training. Fishe et al. (1981) consider a two-decision model: whether to go to
college or not and whether to join the labor force or not. Ham (1982) examines
the labor supply problem by classifying individuals into four categories according
to their unemployment and under-employment status. Catsiapis and Robinson
(1982) study the demand for higher education and the receipt of student aid
grants. Tunali (1983) studies migration decisions involving single and multiple
moves. Danzon and Lillard (1982) analyze a sequential process of settlement of
malpractice suits. Venti and Wise (1982) estimate a model combining student
preferences for colleges and the decision of the university to admit the student.
   All these problems can be classified into different categories depending on
whether the decision rules are joint or sequential. This distinction, however, is not
made clear in the literature and the studies all use the multivariate normal
distribution to specify the joint probabilities.
   With a two decision model, the specification is as follows:

       Yl = Xl& + Ul,                                                          (10.1)

       r, = X282 + u2,                                                         (10.2)

       I:=z,Y,-&i,                                                             (10.3)

       1; = z,y, - E2.                                                         (10.4)
Ch. 28: Disequilibrium,   Self-selection,    and Switching Models               1611

   We also have to consider whether the choices are completely observed or they
are partially observed. Define the indicator variables

      II =l         iff Ii* > 0
         = 0         otherwise,
      I*=1           iff 12*> 0
         = 0         otherwise.

The question is whether we observe I, and Z2 separately or only as a single
indicator variable I = Iii,. The latter is the case with the example of Abowd and
Farber. Poirier (1980) also considers a bivariate probit model with partial
observability but his model is a joint model-not a sequential model as in the
example of Abowd and Farber. In the example Poirier considers, the employer
must decide whether or not to give a job offer and the applicant must decide
whether or not to seek a job offer. We do not observe these individual decisions.
What we observe is whether the trainee continues to work after training. If either
the employer or the employee makes the decision first, then the model would be a
sequential model.
   The example considered by Fishe et al. (1981) is a joint decision model but
both indicators I, and I2 are observed. Similar is the case considered by Ham
(1982) though it is hard to see how unemployment and underemployment could
be considered as two decisions. Workers do not choose to be unemployed and
underemployed. Rather both unemployment and underemployment are conse-
quences of more basic decisions of employers and employees. The example
considered by Catsiapis and Robinson (1982) is a sequential decision, though one
can also present arguments that allow it to be viewed as a joint decision model.
   In the joint decision model with partial observability, i.e. where we observe
I = Ii-I, only and not Zi and I, individually, the parameters yi and y2 in eqs.
(10.3) and (10.4) are estimable only if there is at least one non-overlapping
variable in either one of 2, and 2,. Since V( EJ = V(Q) = 1 by normalization, let
us define COV(E~,E*) = p. Also write

      Prob( 1: > 0, 1; > 0)
              = Prob( si < Z,Y,, s2 < Z,Y,)
              = F(Z,Y,7 Z,Y,, P).

Then the ML estimates of yr, y2 and p are obtained by maximizing the likelihood
function

      L1= ~lgZ,YI,              Z,Y,,       Id- J-Jp     WGYlY GY*7   l-41.   (10.5)
1678                                                                                      G. S. Maddala

With the assumption of bivariate normality of .si and Q, this involves the use of
bivariate probit analysis.
   In the sequential decision model with partial observability, if we assume that
the function (10.4) is defined only on the subpopulation Ii = 1, then since the
distribution of Ed that is assumed is considered on ei < Ziy,,’ the likelihood
function to be maximized would be

       L, = p1 PP(z,Y,)@(z*Y*)1~             ,IzI,[l- @(Z,Y1)@(Z*YJl.                           (10.6)


Again, the parameters yi and y2 are estimable only if there is at least one
non-overlapping variable in either one of Z, and Z, (otherwise we would not
know which estimates refer to yi and which refer to y2). In their example on job
queues and union status of workers, Abowd and Farber (1982) obtain their
parameter estimates using the likelihood function (10.6). One can, perhaps, argue
that even in the sequential model, the appropriate likelihood function is still
(10.5) and not (10.6). It is possible that there are persons who do not join the
queue (Ii = 0) but for whom employers would want to give a union job. The
reason we do not observe these individuals in union jobs is because they had
decided not to join the queue. But we do not also observe in the union jobs all
those with I2 = 0. Thus, we can argue that 1; exists and is, in principle, defined
even for the observations Ii = 0. If the purpose of the analysis is to examine
what factors influence the employers’ choice of employees for union jobs, then
possibly the parameter estimates should be obtained from (10.5). The difference
between the two models is in the definition of the distribution of E*. In the case of
(10.5), the distribution of e2 is defined over the whole population. In the case of
(10.6), it is defined over the subpopulation I, = 1. The latter allows us to make
only conditional inferences. l1 The former allows us to make both conditional and
marginal inferences. To make marginal inferences, we need estimates of yz. To
make conditional inferences we consider the conditional distribution f(ezlei <
Ziy,) which involves yi, ya, and p.
   Yet another type of partial observability arises in the case of truncated samples.
An example is that of measuring discrimination in loan markets. Let I;” refer to
the decision of an individual on whether or not to apply for a loan, and let 1;
refer to the decision of the bank on whether or not to grant the loan.

       II =l       if the individual applies for a loan
         = 0        otherwise,
       I*=1         if the applicant is given a loan
          = 0       otherwise.
   “The conditional model does not permit us to allow for the fact that changes in 2, also might
affect the probability of being in the queue. Also, the decision of whether or not to join the queue can
be influenced by the perception of the probability of being drawn from the queue.
Ch. 28: Disequilibrium,   Self-selection,       and Switching Models                             1679

Rarely do we have data on the individuals for whom I1 = 0. Thus what we have is
a truncated sample. We can, of course, specify the distribution of 1; only for the
subset of observations I1 = 1 and estimate the parameters yz by say the probit ML
method and examine the significance of the coefficients of race, sex, age, etc. to
see whether there is discrimination by any of these variables. This does not,
however, allow for self-selection at the application stage, say for some individuals
not applying because they feel they will be discriminated against. For this purpose
we define 1: over the whole population and analyze the model from the truncated
sample. The argument is that, in principle 1** exists even for the non-applicants.
The parameters yi, yz and p can be estimated by maximizing the likelihood
function

                     Jl ZlYl Z,Y,
                                9           9   P>           @&Y,)-     WGYl,   Z2Y2, P)
      J%= l-I                                        *   )z)                                   (10.7)
             I, =l        @(ZlYl)                        2             @GYl)               .




In this model the parameters yi, y2 and p are, in principle, estimable even if Z,
and Z, are the same variables. In practice, however, the estimates are not likely to
be very good. Muthen and Jiirekog (1981) report the results of some Monte-Carlo
experiments on this. Bloom et al. (1981) report that attempts at estimating this
model did not produce good estimates. However, the paper by Bloom and
Killingsworth (1981) shows that correction for selection bias can be done even
with truncated samples. Wales and Woodland (1980) also present some encourag-
ing Monte-Carlo evidence. Since the situation of truncated samples is of frequent
occurrence (see Bloom and Killingsworth for a number of examples) more
evidence on this issue will hopefully accumulate in a few years.
   The specification of the distributions of ei and e2 in (10.3) and (10.4) depends
on whether we are considering a joint decision model or a sequential decision
model. For problems with sequential decisions, the situation can diagrammati-
cally be described as follows:




In a sequential decision model, the disturbance e2 can be defined only on the
subpopulation for which It = 1. The specification of the joint distribution for
(pi, c2) over the whole population will not be appropriate in principle and will
introduce unnecessarily complicated functional forms for the conditional prob-
abilities. This point is emphasized in Lee and Maddala (1983b). On the other
1680                                                                      G. S. Maddala

hand, if we specify the marginal distribution of &Iand the conditional distribution
of e2 given Ii = 1 then there is no way we can allow for the correlations among
the decisions. Lee and Maddala (1983b) and Lee (1984) suggest the following: Let
Fi(eJ be the marginal distribution of &I defined on the subpopulation (1, = 1)
which is, of course, implied by the marginal distribution of &i on the whole
population. F2(s2) is the marginal distribution of E* defined on the subpolation
1, = 1. Given the marginal distributions Fi(ei) and &(E*) defined on the common
measurable space, there are infinitely many ways of generating joint distributions
with given marginals. Lee (1983a) discusses some computable methods of gener-
ating these distributions. This procedure can be applied to correct for selectivity
bias in sequential decision models with any specifications of the marginal distri-
butions of ei on the whole population and of e2 on the subpopulation and
allowing for correlations in the decisions. See Lee and Maddala (1983b) and Lee
(1984) for details.


11.    Concluding remarks

In the preceding sections we have reviewed the recent literature on disequilibrium
and selectivity models. We will now go through some deficiencies of these models
and examine future areas of research.
    The cornerstone of the “disequilibrium” models discussed in this chapter is the
“minimum condition.” One of the most disturbing points in the empirical
applications is that the models have been mechanically applied with no discussion
of what disequilibrium is due to and what the consequences are. In spite of all the
limitations mentioned in Section 3, the model discussed there (with slight varia-
tion) has been the model with the most empirical applications. For instance, Sealy
(1979) used the model to study credit rationing in the commercial loan market.
Portes and Winter (1978) used it to estimate demand for money and savings
functions in centrally planned economies (Czechoslovakia, East Germany,
Hungary and Poland). Portes and Winter (1980) used it to study the demand for
consumption goods in centrally planned economies. Chambers et al. (1978) used
it to study the effects of import quotas on the U.S. beef market.
    The reason for the popularity of this model is that it needs us to specify very
little. The authors of the above papers specify the demand and supply functions
as usual, and then say there is “rationing” and disequilibrium because of
regulations. But even if the regulations control prices, it does not imply that prices
are fixed at certain levels continuously which is what the model says. Further,
there is no discussion of how the rationing is carried out and in almost all cases
the data used are macro-data and the implications of aggregation are ignored.
    The main application of the methodology discussed in this chapter is to
regulated markets and centrally planned economies, where there are price and
Ch. 28: Disequilibrium,   Self-selection,   and Switching Models                 1681

quantity regulations. In Section 6 we discussed the case of controlled prices and
showed how the analysis can be applied to credit markets with interest rate
ceilings (or equivalently, labor markets with minimum-wage laws). The interest
rate ceiling problem has been analyzed in Maddala and Trost (1982). The
minimum wage problem has been analyzed in Meyer and Wise (1983a, b). An
analysis of price supports’ is in Maddala and Shonkwiler (1984). The case of
centrally planned economies has been analyzed by Charemza and Quandt (1982).
   Another major criticism of the disequilibrium models appears in two papers by
Richard (1980) and Hendry and Spanos (1980). These criticisms are also elaborated
in the comments by Hendry and Richard as the survey paper by Quandt (1982).
Hendry and Spanos point out that the “minimum condition” was actually
discussed by Frisch (1949) but that he suggested formulation of “market pressures”
that are generated by the inequality between the unobserved latent variables D,
and S,. These pressures were formulated in the price adjustment eqs. discussed in
Section 6 but we also saw the serious limitations of this eq. in the presence of the
“minimum condition”. Hendry and Spanos suggest dropping the “minimum
condition” (which is the main source of all the headaches in estimation), con-
centrating on the “pressures” and dynamic adjustment processes, and modelling
the observables directly. Though there is some merit in their argument, as
mentioned earlier, the main application of the methodology described in this
chapter is to the analysis of regulated markets and planned economies and the
methods suggested by Hendry and Spanos are not applicable to such problems.
Since the Hendry-Spanos       paper is discussed in detail in Maddala (1983a, pp.
343-345) we will not repeat the criticism here.
   Finally, mention must be made of the criticism of the switching regression
models with endogenous switching (of which the disequilibrium and selection
models are particular cases) by Poirier and Rudd (1981). These authors argue that
there has been substantial confusion in the econometrics literature over switching
regression models with endogenous switching and that this confusion can cause
serious interpretation problems when the model is employed in empirical work.
Fortunately, however, the arguments presented by these authors are incorrect.
Since their paper has been discussed in detail in Maddala (1983a, pp. 283-287)
we will not repeat the criticism here.
   The literature on self-selection contains interesting empirical applications in the
areas of labor supply, unions and wages, education and self-selection, program
evaluation, measuring discrimination and so on. However, the literature on
disequilibrium models lacks interesting empirical applications. Part of the prob-
lem here is that not much thought is often given to the substantive question of
what the sources of disequilibrium are and also there are few micro data sets to
which the methods have been applied. Almost all applications [Avery (1982),
Maddala and Trost (1982), Meyer and Wise (1983a,b) are perhaps some excep-
tions] are based on aggregate time-series data and there is not enough discussion
1682                                                                                                 G. S. Maddala

of problems of aggregation. The Fair and Jaffee example on the housing market
as well as the different models of “credit rationing” are all based on aggregate
data and there is much to be desired in the detailed specification of these models.
   Perhaps the most interesting application of the disequilibrium models are in the
areas of regulated industries. After all, it is regulation that produces disequi-
librium in these markets. Estimation of some disequilibrium models with micro-
data sets for regulated industries and estimation of the effects of regulation would
make the disequilibrium literature more intellectually appealing than it has been.
There are also some issues that need to be investigated regarding the appropriate
formulation of the demand and supply functions under disequilibrium. The
expectation of disequilibrium can itself be expected to change the demand and
supply functions. Thus, one needs to incorporate expectations into the modelling
of disequilibrium.
   The literature on self-selection, by contrast to the disequilibrium literature, has
several interesting empirical applications. However, even here a lot of work
remains to be done. The case of selectivity being based on several criteria rather
than one has been mentioned in Section 10. Here one needs a clear distinction to
be made between joint decision and sequential decision models. Another problem
is that of correcting for selectivity bias when the explanatory variables are
measured with error. Almost all the usual problems in the single equation
regression model need to be analyzed in the presence of the selection (self-selec-
tion) problem.



References

Abowd, A. M., J. M. Abowd and M. R. Killingsworth                 (1983) “Race, Spanish Origin and Earnings
   Differentials   Among Men: The Demise of Two Stylized Facts”. Discussion Paper #83-11, Econom-
  ics Research Center/NORC,            University of Chicago.
Abowd, J. M. and H. S. Farber (1982) “Job Queues and Union Status of Workers”,                         Industrial and
   Labor Relations Review, 35(4), 354-361.
Amemiya,       T. (1973) “Regression       Analysis When the Dependent          Variable is Truncated        Normal”,
   Econometrica, 41(6), 997-1016.
Amemiya, T. (1974a) “A Note on a Fair and JaKee Model”, Econometrica, 42(4), 759-762.
Amemiya,       T. (1974b) “Multivariate        Regression   and Simultaneous       Equations    Models When the
   Dependent      Variables are Truncated Normal”,         Econometrica, 42(6), 999-1012.
Amemiya,      T. (1977) “The Solvability of a Two-Market           Disequilibrium     Model”. Working Paper 82,
   IMSSS, Stanford University, August 1977.
Amemiya,       T. and Sen G. (1977) “The Consistency            of the Maximum         Likelihood     Estimator   in a
   Disequilibrium      Model”, Technical Report No. 238, IMSSS, Stanford University.
Avery, R. B. (1982) “Estimation         of Credit Constraints   by Switching Regressions”,        in: C. Manski and
  D. McFadden,        eds., Structural Analysis of Discrete Data: With Econometric Applications. MIT Press.
Barnow, B. S., G. G. Cain and A. S. Goldberger (1980) “Issues in the Analysis of Selectivity Bias”, in:
  E. W. Stromsdorder        and G. Farkas, eds., Evaluation Studies - Review Annual, 5, 43-59.
Batchelor,    R. A. (1977) “A Variable-Parameter          Model of Exporting Behaviour”,        Review of Economic
  Studies, 44(l), 43-58.
Bergstrom, A. R. and C. R. Wymer (1976) “A Model for Disequilibrium                  Neoclassical Growth and its
Ch. 28: Disequilibrium,      Self-selection,   and Switching Models                                                  1683

   Application      to the United Kingdom”, in: A. R. Bergstrom, ed., Statistical Inference in Continuous
   Time Economic Models. Amsterdam, North-Holland                   Publishing Co.
Bemdt, E. R., Hall, B. H., Hall, R. E. and J. A. Hausman                       (1974) “Estimation      and Inference in
   Non-Linear      Structural Models”, Annals of Economic and Social Measurement, 3(4), 653-665.
Bjorklund,     A. and R. Moffitt (1983) “The Estimation                of Wage Gains and Welfare Gains From
   Self-Selection     Models”. Manuscript,     Institute for Research on Poverty, University of Wisconsin.
Bloom, D. E. and M. R. Killingsworth            (1981) “Correcting        for Selection Bias in Truncated Samples:
   Theory, With an Application          to the Analysis of Sex Salary Differentials                in Academe”.     Paper
   presented at the Econometric       Society Meetings, Washington,             D.C., Dec. 1981.
Bloom, D. E., B. J. Preiss and J. Trussell(l981)           “Mortgage      Lending Discrimination        and the Decision
   to Apply: A Methodological        Note”. Manuscript,         Carnegie Mellon University.
Bock, R. D. and L. V. Jones (1968) The Measurement and Prediction of Juagement and Choice. San
   Francisco:     Holden-Day.
Bouissou, M. B., J. J. Laffont and Q. H. Vuong (1983) “Disequilibrium                   Econometrics    on Micro Data”.
   Paper presented at the European Meeting of the Econometric                    Society, Pisa, Italy.
Bowden. R. J. (1978a) “Snecification.          Estimation      and Inference for Models of Markets in Diseaui-
   librium”,    Inttknatiokal konomic Review, 19(3), 711-726.
Bowden, R. J. (1978b) The Econometrics of Disequilibrium. Amsterdam:                     North Holland Publishing Co.
Catsiapis, G. and C. Robinson (1982) “Sample Selection Bias With Multiple Selection Rules”, Journal
   of Econometrics, 18, 351-368.
Chambers,       R. G., R. E. Just, L. J. Moffitt and A. Schmitz (1978) “International                         Markets in
   Disequilibrium:      A Case Study of Beef”. Berkeley: California Agricultural              Experiment Station.
Chanda, A. K. (1984) Econometrics of Disequilibrium and Rational Expectations. Ph.D. Dissertation,
   University of Florida.
Charemza,      W. and R. E. Quandt (1982) “Models and Estimation                      of Disequilibrium     for Centrally
   Planned Economies”,        Review of Economic Studies, 49, 109-116.
Cosslett, S. R. (1984) “Distribution-Free         Estimation of a Model with Sample Selectivity”. Discussion
   Paper, Center for Econometrics        and Decision Sciences, University of Florida.
Cosslett, S. R. and Long-Fei Lee (1983) “Serial Correlation                   in Latent Discrete Variable Models”.
   Discussion Paper, University of Florida, forthcoming              in Journal of Econometrics.
Dagenais,      M. G. (1980) “Specification          and Estimation        of a Dynamic        Disequilibrium     Model”,
   Economics Letters, 5, 323-328.
Danzon, P. M. and L. A. Lillard (1982) The Resolution of Medical Malpractice Claims: Modetiing the
   Bargaining Process. Report #R-2792-ICJ,              California: Rand Corporation.
Davidson, J. (1978) “FIML Estimation of Models with Several Regimes”. Manuscript,                         London School
   of Economics,       October 1978.
Dempster, A. P., Laird, N. M. and Rubin, D. B. (1977) “Maximum                      Likelihood from Incomplete Data
   via the EM Algorithm”,        Journal of the Royal Statistical Society, Series B, 39, l-38 with discussion.
Dubin, J. and D. McFadden           (1984) “An Econometric           Analysis of Residential Electrical Appliance
   Holdings and Consumption”,          Econometrica, 52(2), 345-62.
Eaton, J. and R. E. Quandt (1983) “A Model of Rationing                             and Labor Supply: Theory and
   Estimation”,      Econometrica, 50, 221-234.
Fair, R. C. and D. M. Jaffee (1972) “Methods                     of Estimation      for Markets in Disequilibrium”,
   Econometrica, 40, 497-514.
Fair, R. C. and H. H. Kelejian (1974) “Methods                  of Estimation      for Markets in Disequilibrium:         A
   Further Study”, Econometrica, 42(l), 177-190.
Fishe, R. P. H., R. P. Trost and P. Lurie (1981) “Labor Force Earnings and College Choice of Young
   Women: An Examination          of Selectivity Bias and Comparative            Advantage”,    Economics of Education
   Review, 1, 169-191.
Frisch, R. (1949) “Prolegomena        to a Pressure Analysis of Economic Phenomena”,                  Metroeconomica, 1,
   135-160:
Gersovitz, M. (1980) “Classification        Probabilities      for the Disequilibrium       Model”, Journal of Econo-
   metrics, 41, 239-246.
Goldberger,     A. S. (1972) “Selection Bias in Evaluating Treatment Effects: Some Formal Illustrations”.
   Discussion Paper # 123-72, Institute for Research on Poverty, University of Wisconsin.
Goldberger,      A. S. (1981) “Linear Regression After Selection”, Journal of Econometrics, 15, 357-66.
1684                                                                                                        G. S. Maddala

Goldberger,       A. S. (1980) “Abnormal          Selection Bias”. Workshop Series #8006, SSRI, University of
   Wisconsin.
Goldfeld, S. M., D. W. JatTee and R. E. Quandt (1980) “ A Model of FHLBB Advances: Rationing or
   Market Clearing?“,          Review of Economics and Statistics, 62, 339-347.
Goldfeld,     S. M. and R. E. Quandt (1975) “Estimation                    in a Disequilibrium     Model and the Value of
   Information”,        Journal of Econometrics, 3(3), 325-348.
Goldfeld, S. M. and R. E. Quandt (1978) “Some Properties of the Simple Disequilibrium                            Model with
   Covariance”,        Economics Letters, 1, 343-346.
Goldfeld, S. M. and R. E. Quandt (1983) “The Econometrics                        of Rationing Models”. Paper presented
   at the European Meetings of the Econometric                   Society, Pisa, Italy.
Gourieroux,        C., J. J. Laffont and A. Monfort (1980a) “Disequilibrium                 Econometrics   in Simultaneous
   Eqs. Systems”, Econometrica, 48(l), 75-96.
Gourieroux,       C., J. J. LatTont and A. Monfort (1980b) “Coherency                   Conditions in Simultaneous     Linear
   Fqs. Models with Endogenous               Switching Regimes”, Econometrica, 48(3), 675-695.
Gourieroux,        C. and A. Monfort (1980) “Estimation                 Methods for Markets with Controlled Prices”.
   Working Paper # 8012, INSEE, Paris, October 1980.
Green, J. and J. J. Laffont (1981) “Disequilibrium                 Dynamics with Inventories and Anticipatory            Price
   Setting”, European Economic Review, 16(l), 199-223.
Griliches,    Z., B. H. Hall and J. A. Hausman                   (1978) “Missing Data and Self-Selection           in Large
   Panels”, Annales de L’INSEE,               30-31, The Econometrics of Panel Duta, 137-176.
Gronau,      R. (1974) “Wage Comparisons:                A Selectivity Bias”, Journal of Political Economy, 82(6),
   1119-1143.
Ham, J. C. (1982) “Estimation             of a Labor Supply Model with Censoring Due to Unemployment                      and
   Underemployment”,            Review of Economic Studies, 49, 335-354.
Hartley, M. J. (1977) “On the Estimation of a General Switching Regression Model via Maximum
   Likelihood Methods”. Discussion Paper #415, Department                         of Economics, State University of New
   York at Buffalo.
Hartley, M. J. (1979) “Comment”,                Journal of the American Statistical Association, 73(364), 738-741.
Hartley, M. J. and P. Mallela (1977) “The Asymptotic Properties of a Maximum Likelihood Estimator
   for a Model of Markets in Disequilibrium”,                  Econometrica, 45(5), 1205-1220.
Hausman,       J. A. (1978) “Specification        Tests in Econometrics”,          Econometrica, 46(6), 1251-1272.
Hay, J. (1980) “Selectivity Bias in a Simultaneous                 Logit-OLS Model: Physician Specialty Choice and
   Specialty Income”. Manuscript,              University of Connecticut         Health Center.
Heckman,        J. J. (1974) “Shadow Prices, Market Wages and Labor Supply”, Econometrica, 42(4),
   679-694.
Heckman,       J. J. (1967a) “Simultaneous          Equations Models with Continuous              and Discrete Endogenous
    Variables and Structural          Shifts”, in: Goldfeld and Quandt, eds., Studies in Nonlinear Estimation.
    Carnbrldge:       Ballinger Publishing.
Heckman,         J. J. (1976b) “The Common                 Structure     of Statistical   Models of Truncation,       Sample
    Selection, and Limited Dependent Variables, and a Simple Estimator for Such Models”, Annals of
    Economic and Social Measurement, 5(4), 475-492.
Heckman,         J. J. (1978) “Dummy             Endogenous       Variables in a Simultaneous          Equations    System”,
    Econometrica, 46(6), 931-959.
Heckman, J. J. (1979) “Sample Selection Bias as a Specification Error”, Econometrica, 47(l), 153-161.
Heckman,       J. and B. Singer (1984) “A Method for Minimizing the Impact of Distributional                       Assump-
    tions in Econometric         Models for Duration Data”, Econometrica, 52(2), 271-320.
Hendry, D. F. and A. Spanos (1980) “Disequilibrium                          and Latent Variables”. Manuscript,       London
   School of Economics.
Hildebrand,        F. B. (1956) Introduction to Numercial Analysis. New York: McGraw-Hill.
Hwang, H. (1980) “A Test of a Disequilibrium                    Model”, Journal of Econometrics, 12, 319-333.
Ito, T. (1980) “Methods             of Estimation       for Multi-Market        Disequilibrium     Models”, Econometrica,
   48(l), 97-125.
Ito, T. and K. Ueda (1981) “Tests of the Equilibrium Hypothesis in Disequilibrium                         Econometrics:    An
   International       Comparison      of Credit Rationing”,         International Economic Review, 22(3), 691-708.
Johnson,     N. L. and S. Katz (1972) Distributions in Statistics: Continuous Multivariate Distributions.
   Wiley: New York.
Ch. 28: Disequilibrium,      Self-selection,   and Switching Models                                                  1685

Johnson, P. D. and J. C. Taylor (1977) “Modellina                Monetary Disequilibrium”,         in: M. G. Porter, ed.,
   The Australian Monetary System in the 1970’s. Australia: Monash University.
Kennv. L. W.. L. F. Lee. G. S. Maddala and R. P. Trost (1979) “Returns                        to College Education:      An
   Inv&tigation      of Self-Selection     Bias Based on the Project Talent Data”, Znteriational Economic
   Review, 20(3), 751-765.
Kiefer, N. (1978) “Discrete           Parameter    Variation:     Efficient Estimation      of a Switching Regression
   Model”, Econometrica, 46(2), 427-434.
Kiefer, N. (1979) “On the Value of Sample Separation Information”,                      Econometrica, 47(4), 997-1003.
Kiefer. N. (198Oa) “A Note on Reaime Classification in Disequilibrium                     Models”. Review of Economic
   Studies, 47(l), 637-639.                -
Kiefer, N. (1980b) “A Note on Switching Regression and Logistic Discrimination”,                        Econometrica, 48,
   637-639.
King, M. (1980) “An Econometric                Model of Tenure Choice and Housing as a Joint Decision”,
  Journal of Public Economics, 14(2), 137-159.
Kooiman,      T. and T. Kloek (1979) “Aggregation             and Micro-Markets         in Disequilibrium:    Theory and
   Application     to the Dutch Labor Market: 1948-1975”.                 Working Paper, Rotterdam:          Econometric
   Institute, April 1979.
Laffont, J. J. (1983) “Fix-Price          Models: A Survey of Recent Empirical Work”. Discussion                      Paper
   # 8305, University of Toulouse.
Laffont, J. J. and R. Garcia (1977) “Disequilibrium             Econometrics      for Business Loans”, Econometrica,
  45(5), 1187-1204.
LalTont, J. J. and A. Monfort (1979) “Disequilibrium               Econometrics      in Dynamic Models”, Journal of
   Econometrics, 11, 353-361.
Lee, L. F. (1976) Estimation of Limited Dependent Variable Models by Two-Stage Methods. Ph.D.
   Dissertation,    University of Rochester.
Lee, L. F. (1978a) “Unionism           and Wage Rates: A Simultaneous              Equations Model with Qualitative
   and Limited Dependent Variables”, International Economic Review, 19(2), 415-433.
Lee, L. F. (1978b) “Comparative           Advantage in Individuals and Self-Selection”.             Manuscript,    Univer-
   sity of Minnesota.
Lee, L. F. (1979) “Identification         and Estimation in Binary Choice Models with Limited (Censored)
   Dependent     Variables”,    Econometrica, 47(4), 977-996.
Lee, L. F. (1982a) “Some Approaches               ot the Correction       of Selectivity Bias”, Review of Economic
   Studies, 49, 355-372.
Lee, L. F. (1982b) “Test for Normality in the Econometric                  Disequilibrium     Markets Model”, Journal
  of Econometrics, 19, 109-123.
Lee, L. F. (1983a) “Generalized         Econometric Models with Selectivity”, Econometrica, 51(2), 507-512.
Lee, L. F. (1983b) “Regime Classification            in the Disequilibrium        Market Models”. Discussion Paper
   # 93, Center for Econometrics          and Decision Sciences, University of Florida.
Lee, L. F. (1984) “Sequential           Discrete Choice Econometric           Models With Selectivity”.         Discussion
  Paper, University of Minnesota.
Lee, L. F. and R. P. Trost (1978) “Estimation               of Some Limited Dependent             Variable Models with
  Application     to Housing Demand”, Journal of Econometrics, 8, 357-382.
Lee, L. F., G. S. Maddala and R. P. Trost (1980) “Asymptotic                      Covariance     Matrices of Two-Stage
   Probit    and Two-Stage        Tobit Methods        for Simultaneous        Equations     Models with Selectivity”,
   Econometrica, 48(2), 491-503.
Lee, L. F. and G. S. Maddala (1983a) “The Common Structure of Tests for Selectivity Bias, Serial
   Correlation,     Heteroscedasticity       and Normality       in the Tobit Model”. Manuscript,               Center for
   Econometrics       and Decision Sciences, University            of Florida. Forthcoming           in the International
   Economic Review.
Lee, L. F. and G. S. Maddala (1983b) “Sequential                Selection Rules and Selectivity in Discrete Choice
   Econometric      Models”. Manuscript,        Center for Econometrics         and Decision Sciences, University of
   Florida.
Lee, L. F. and R. H. Porter (1984) “Switching Regression Models with Imperfect Sample Separation
   Information:     With an Application        on Cartel Stability”, Econometrica, 52(2), 391-418.
Lewis, H. G. (1974) “Comments               on Selectivity Biases in Wage Comparisons”,               Journal of Political
   Economy, 82(6), 1145-1155.
1686                                                                                     G. S. Mad&a

Mackinnon, J. G. (1978) “Modelling a Market Which is Sometimes in Disequilibrium”. Discussion
   Paper #287, Canada: Queens University, April 1978.
Mackinnon, J. F. and N. D. Olewiler (1980) “Disequilibrium Estimation of the Demand for Copper”,
   The Bell Journal of Economics, 11, 197-211.
Maddala, G. S. (1977a) “Self-Selectivity Problems in Econometrica Models”, in: P. R. Krishnan, ed.,
  Applicafions of Statistics. North-Holland Publishing, 351-366.
Maddala, G. S. (1977b) “Identification and Estimation Problems in Limited Dependent Variable
   Models”, in: A. S. Blinder and P. Friedman, eds., Natural Resources, Uncertainty and General
   Equilibrium Systems: Essays in Memoty of Rafael Lusky. New York: Academic Press, 219-239.
Maddala, G. S. (1983a) Limited Dependent und Qualitative Variables in Econometrics. New York:
   Cambridge University Press.
Maddala, G. S. (1983b) “Methods of Estimation for Models of Markets with Bounded Price
   Variation”, International Economic Review, 24(2), 361-378.
Maddala, G. S. (1984) “Estimation of the Disequilibrium Model with Noisy Indicators”. Manuscript,
   University of Florida.
Maddala, G. S. and F. D. Nelson (1974) “Maximum Likelihood Methods for Models of Markets in
   Disequilibrium”,    Econometrica, 42(6), 1013-1030.
Maddala, G. S. and L. F. Lee (1976) “Recursive Models with Qualitative Endogenous Variables”,
   Annals of Economic and Social Measurement, 5(4), 525-545.
Maddala, G. S. and F. D. Nelson (1975) “Switching Regression Models with Exogenous and
   Endogenous Switching”, Proceedings of the Business and Economic Statistics Section, American
   Statistical Association, 423-426.
Maddala, G. S. and J. S. Shonkwiler (1984) “Estimation of a Disequilibrium Model Under Rational
   Expectations and Price Supports: The Case of Corn in the US”. Manuscript, University of Florida.
Maddala, G. S. and R. P. Trost (1981) “Alternative Formulations of the Nerlove-Press Models”,
  Journal of Econometrics, 16, 35-49.
Maddala, G. S. and R. P. Trost (1982) “On Measuring Discrimination in Loan Markets”, Housing
   Finance Review, l(l), 245-268.
Malinvaud, E. (1977) The Theory of Unemployment Reconsidered. Oxford: Blackwell.
Malinvaud,      E. (1982) “An Econometric          Model for Macro-Disequilibrium       Analysis”,   in:
   M. Hazewinkel and A. H. G. Rinnoy Kan, eds., Current Developments in the Interface: Economics,
   Econometrics, Mathematics. D. Reidel Publishing Co., 239-258.
Melino, A. (1982) “Testing for Sample Selection Bias”, Review of Economic Studies, 49(l), 151-153.
Meyer, R. H. and D. A. Wise (1983a) “The Effect of Minimum Wage on the Employment and
   Earnings of Youth”, Journal of Labor Economics, l(l), 66-100.
Meyer, R. H. and D. A. Wise (1983b) “Discontinuous Distributions and Missing Persons: The
   Minimum Wage and Unemployed Youth”, Econometrica, 51(6), 1677-1698.
Monroe, Margaret A. (1981) A Disequilibrium Econometric Annlysis of Interest Rate Futures Murkets.
   Ph.D. Dissertation, University of Florida.
Muelbauer, J. and Winter D. (1980) “Unemployment, Employment and Exports in British Manufac-
   turing: A Non-clearing Markets Approach”, European Economic Review, 13(2), 383-409.
Muthen, B. and K. G. Joreskog (1981) “Selectivity Problems in Quasi-experimental Studies”. Paper
  presented at the Conference on “Experimental Research in Social Sciences”. University of Florida,
  January 1981.
Nelson, F. D. (1975) Estimation of Economic Relationships with Censored, Truncated und Limited
   Dependent Variables. Ph.D. Dissertation, University of Rochester.
Nelson, F. D. (1977) “Censored Regression Models with Unobserved Stochastic Censoring
  Thresholds”, Journal of Econometrics, 6, 309-327.
Olsen, R. J. (1980) “A Least Squares Correction for Selectivity Bias”, Econometricu, 48(6), 1815-1820.
Olsen, R. J. (1982) “Distribution Tests for Selectivity Bias and a More Robust Likelihood Estimator”,
  International Economic Review, 23(l), 223-240.
Orsi, R. (1982) “On the Dynamic Specification of Disequilibrium Econometrics: An Analysis of
  Italian Male and Female Labor Markets”. CORE Discussion Paper # 8228, Louvain, Belgium.
Poirier, D. J. (1980) “Partial Observability in Bivariate Probit Models”, Journal of Econometrics, 12,
  209-217.
Poirier, D. J. and P. A. Rudd (1981) “On the Appropriateness of Endogenous Switching”, Journnl of
Ch. 28: Disequilibrium,      Sey-selection,   and Switching Models                                                   1687

   Econometrics, 16(2), 249-256.
Portes, R. D. (1978) “Effective Demand and Spillovers in Empirical Two-Market                              Disequilibrium
   Models”. Discussion Paper #595, Harvard Institute of Economic Research, November 1977.
Portes, R. D. and D. Winter (1978) “The Demand for Money and for Consumption                                      Goods in
   Centrally Planned Economies”,          The Review of Economics and Statistics, 60(l), 8-18.
Portes, R. D. and D. Winter (1980) “Disequilibrium                 Estimates for Consumption           Goods Markets in
   Centrally Planned Economies”,          Review of Economic Studies. 47(l). 137-159.
Quandt,      R. E. (1978) “Maximum           Likelihood     Estimation     of Disequilibrium       Models”,      Pioneering
   Economics, Italy: Padova.
Quandt,       R. E. (1978) “Tests of the Equilibrium              vs. Disequilibrium        Hypothesis”,      International
   Economic Review, 19(2), 435-452.
Quandt, R. E. and J. D. Ramsey (1978) “Estimating                 Mixtures of Normal Distributors           and Switching
   Regressions”,      with discussion, Journal of the American Statistical Association, 73, 730-752.
Quandt, R. E. (1981) “Autocorrelated           Errors in Simple Disequilibrium         Models”, Economics Letters, 7,
   55-61.
Quandt,      R. E. (1982) “Econometric         Disequilibrium       Models”. With comments            by D. F. Hendry,
   A. Monfort and J. F. Richard, Econometric Reviews, l(l), l-63.
Quandt, R. E. (1983) “Bibliography            of Quantity Rationing and Disequilibrium               Models”. Princeton
   University, Dec. 1983, updated every 3-6 months.
Quandt, R. E. (1984) “Switching Between Equilibrium and Disequilibrium”,                      Review of Economics and
   Statistics, forthcoming.
Richard, J. F. (1980a) “Models with Several Regime Changes and Changes in Erogeneity”,                            Review of
   Economic Studies, 47(l), l-20.
Richard, J. F. (1980b) “C-Type Distributions              and Disequilibrium       Models”. Paper presented in the
   Toulouse Conference on “Economics             and Econometrics        of Disequilibrium”.
Rogers, A. J. (1983) “Generalized        Lagrange Multiplier Tests for Problems of One-Sided Alternatives”.
   Manuscript,      Princeton University.
Rosen, S. and M. I. Nadiri (1974) “A Disequilibrium                Model of Demand for Factors of Production”,
   American Economic Review, papers and proceedings, 64(2), 264-270.
Rosen, H. and R. E. Quandt (1978) “Estimation                    of a Disequilibrium        Aggregate    Labor Market”,
   Review of Economics and Statistics, 60, 371-379.
Roy, A. D. (1951) “Some Thoughts on the Distribution                    of Earnings”,     Oxford Economic Papers, 3,
   135-146.
Samelson, H., R. M. Thrall and 0. Wesler (1958j “A Pax ;iiion Theorem for Euclidean                              n Space”,
   Proceedings of the American Mathematical Society, 9, 805-807.
Schmidt, P. (1982) “An Improved Version of the Quandt-Ramsay                        MGF Estimator for Mixtures of
   Normal Distributions         and Switching Regressions”,        Econometrica, 50(2), 501-516.
Sealy, C. W., Jr. (1979) “Credit Rationing in the Commercial Loan Market: Estimates of a Structural
   Model Under Conditions of Disequilibrium”,               Journal of Finance, 34(2), 689-702.
Sneessens,      H. (1981) Theory and Estimation of Macroeconomic                     Rationing Models. New York:
   Springer-Verlag,       1981.
Sneessens, H. (1983) “A Macro-Economic                Rationing      Model of the Belgian Economy”,               European
   Economic Reuiew, 20, 193-215.
Tishchler,     A. and I. Zang (1979) “A Switching Regression                 Model Using Inequality          Conditions”,
   Journal of Econometrics, 11, 259-274.
Trost, R. P. (1981) “Interpretation          of Error Covariances         With Non-Random          Data: An Empirical
   Illustration    of Returns of College Education”,         Atlantic Economic Journal, 9(3), 85-90.
Trost, R. P. and L. F. Lee (1984) “Technical Training and Earnings: A Polychotomous                         Choice Model
   with Selectivity”,      The Review of Economics and Statistics, 66(1),151-156.
TunaIi. I. (1983) “A Common Structure for Models of Double Selection”. Renort #8304. Social
   Systems -Research Institute, University of Wisconsin.
Upcher, M. R. (1980) Theory and Applications of Disequilibrium Econometrics. Ph.D. Dissertation,
   Canberra:      Australian    National University.
Venti, S. F. and D. A. Wise (1982) “Test Scores, Educational                 Opportunities,    and Individual Choice”,
   Journal of Public Economics, 18, 35-63.
Waldman,        D. M. (1981) “An Economic Interpretation             of Parameter Constraints          in a Simultaneous
1688                                                                                            G. S. Maddala

  Equations     Model with Limited Dependent          Variables”,    International   Economic Review, 22(3),
  731-730.
Wales, T. .I. and A. D. Woodland (1980) “Sample Selectivity and the Estimation                  of Labor Supply
  Functions”,    Intemutional Economic Review, 21, 437-468.
Wallis,   K. F. (1980) “Econometric         Implications     of the Rational       Expectations     Hypothesis”,
  Econometrica, 48(l), 49-72.
Willis, R. J. and S. Rosen (1979) “Education     and Self-Selection”,    Journal of Political Economy, Part 2,
  87(5), 507-526.
Wu, De-Mm (1973) “Alternative         Tests of Independence       Between Stochastic      Regressors    and Dis-
  turbances”,    Econometrica, 41(3), 733-750.


